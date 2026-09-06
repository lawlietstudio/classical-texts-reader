import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TEXT_SOURCE_KEY = 'reader-text-source';
const SHOW_VERNACULAR_KEY = 'reader-show-vernacular';

export type TextSource = 'original' | 'vernacular';

export function useReaderPrefs() {
  const [textSource, setTextSourceState] = useState<TextSource>('original');
  const [showVernacular, setShowVernacularState] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(TEXT_SOURCE_KEY).then((raw) => {
      if (raw === 'original' || raw === 'vernacular') setTextSourceState(raw);
    });
    AsyncStorage.getItem(SHOW_VERNACULAR_KEY).then((raw) => {
      if (raw === 'true' || raw === 'false') setShowVernacularState(raw === 'true');
    });
  }, []);

  const setTextSource = useCallback((next: TextSource) => {
    setTextSourceState(next);
    AsyncStorage.setItem(TEXT_SOURCE_KEY, next).catch(() => {});
  }, []);

  const toggleTextSource = useCallback(() => {
    setTextSource(textSource === 'original' ? 'vernacular' : 'original');
  }, [textSource, setTextSource]);

  const setShowVernacular = useCallback((next: boolean) => {
    setShowVernacularState(next);
    AsyncStorage.setItem(SHOW_VERNACULAR_KEY, String(next)).catch(() => {});
  }, []);

  return { textSource, setTextSource, toggleTextSource, showVernacular, setShowVernacular };
}
