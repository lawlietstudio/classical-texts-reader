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
 *
 * iOS Safari has a further quirk on top of this: `speechSynthesis.getVoices()`
 * returns an empty list right after page load, and the `voiceschanged` event
 * that's supposed to fire once the list is ready is unreliable on WebKit —
 * it often never fires at all. expo-speech's web `getVoices()` waits on
 * exactly that event, so on iOS the very first call can hang forever and
 * this hook would be stuck with an empty voice list (no picker, no "voice
 * not found" hint either, since `checked` never flips to true). To work
 * around it, this hook polls `getAvailableVoicesAsync()` on an interval —
 * each call independently re-checks the synchronous fast path inside
 * expo-speech, so a hung first call doesn't block later ones from
 * succeeding once the OS finishes loading its voice list — and gives up
 * after a few seconds so `checked` always eventually settles either way.
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
    let settled = false;
    setChecked(false);

    const settle = (matches: Speech.Voice[], savedId: string | null) => {
      if (cancelled || settled) return;
      settled = true;
      clearInterval(pollId);
      clearTimeout(timeoutId);
      setVoices(matches);
      const saved = matches.find((v) => v.identifier === savedId);
      setVoiceIdState((saved ?? matches[0])?.identifier);
      setChecked(true);
    };

    const tryLoad = () => {
      Promise.all([Speech.getAvailableVoicesAsync(), AsyncStorage.getItem(storageKey(lang)).catch(() => null)])
        .then(([allVoices, savedId]) => {
          if (cancelled || settled) return;
          const matches = allVoices.filter(
            (v) => /^(zh|yue|cmn)/i.test(v.language) && matchesLang(v.language, lang)
          );
          if (matches.length === 0) return; // keep polling until the timeout below gives up
          settle(matches, savedId);
        })
        .catch(() => {
          // ignore; a later poll tick (or the timeout) will settle things
        });
    };

    tryLoad();
    const pollId = setInterval(tryLoad, 300);
    const timeoutId = setTimeout(() => settle([], null), 5000);

    return () => {
      cancelled = true;
      clearInterval(pollId);
      clearTimeout(timeoutId);
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
