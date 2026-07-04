import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { playBGM, stopBGM, sfx } from '../utils/audio';

export function useAudio(kingdomId?: string) {
  const audioEnabled = useGameStore(s => s.audioEnabled);

  useEffect(() => {
    if (audioEnabled && kingdomId) {
      playBGM(kingdomId);
    } else {
      stopBGM();
    }
    
    return () => stopBGM();
  }, [audioEnabled, kingdomId]);

  const playClick = () => {
    if (audioEnabled) sfx.click();
  };

  const playError = () => {
    if (audioEnabled) sfx.error();
  };

  return { playClick, playError };
}
