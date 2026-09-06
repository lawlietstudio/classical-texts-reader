import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { SpeechLang } from './useSpeechLang';

/**
 * Both Android and web have the same class of bug: asking expo-speech to
 * speak with a given `language` ("zh-CN" / "zh-HK") does not reliably pick
 * the voice you'd expect, so the app's language toggle can end up doing
 * nothing.
 *
 * - Android: the native module parses `language` with Java's single-arg
 *   `Locale(String)` constructor, which never splits on "-", so
 *   `Locale("zh-HK")` becomes an invalid locale and the module silently
 *   falls back to the phone's system default language.
 * - Web: expo-speech just sets `SpeechSynthesisUtterance.lang` and lets the
 *   browser pick a voice for it. That matching is inconsistent — many
 *   browsers/OSes only have a single installed Chinese voice and will use
 *   it regardless of the region subtag requested, so every utterance comes
 *   out in whichever language that one voice happens to be, no matter which
 *   toggle position is selected.
 *
 * Both platforms accept an exact voice `identifier` that bypasses the
 * broken `language`/`lang` matching entirely, so this hook looks up the
 * voices actually installed for the requested language and lets the user
 * pick (and remember) a specific one, since a device can have more than one
 * matching voice (e.g. different vendors, or male/female).
 */
function matchesLang(voiceLanguage: string, target: SpeechLang) {
  const l = voiceLanguage.toLowerCase();
  return target === 'zh-HK' ? l.includes('hk') || l.startsWith('yue') : l.includes('cn') || l.startsWith('cmn');
}

function storageKey(lang: SpeechLang) {
  return `speech-voice-${lang}`;
}

export function useSpeechVoice(lang: SpeechLang) {
  const [voices, setVoices] = useState<Speech.Voice[]>([]);
  const [voiceId, setVoiceIdState] = useState<string | undefined>(undefined);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setChecked(false);

    Promise.all([Speech.getAvailableVoicesAsync(), AsyncStorage.getItem(storageKey(lang)).catch(() => null)])
      .then(([allVoices, savedId]) => {
        if (cancelled) return;
        const matches = allVoices.filter(
          (v) => /^(zh|yue|cmn)/i.test(v.language) && matchesLang(v.language, lang)
        );
        setVoices(matches);
        const saved = matches.find((v) => v.identifier === savedId);
        setVoiceIdState((saved ?? matches[0])?.identifier);
        setChecked(true);
      })
      .catch(() => {
        if (cancelled) return;
        setVoices([]);
        setVoiceIdState(undefined);
        setChecked(true);
      });

    return () => {
      cancelled = true;
    };
  }, [lang]);

  const selectVoice = useCallback(
    (id: string) => {
      setVoiceIdState(id);
      AsyncStorage.setItem(storageKey(lang), id).catch(() => {});
    },
    [lang]
  );

  return { voices, voiceId, checked, selectVoice };
}
