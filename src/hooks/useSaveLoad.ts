import { useGameStore, GameState } from '../store/gameStore';

export function useSaveLoad() {
  const saveSlot = useGameStore(s => s.saveSlot);
  const loadSave = useGameStore(s => s.loadSave);

  const saveGame = (slotNumber: number) => {
    const currentState = useGameStore.getState();
    localStorage.setItem(`cyber_save_slot_${slotNumber}`, JSON.stringify(currentState));
    // also update current slot if we saved to a new one
  };

  const loadGame = (slotNumber: number) => {
    const saved = localStorage.getItem(`cyber_save_slot_${slotNumber}`);
    if (saved) {
      try {
        const state = JSON.parse(saved) as GameState;
        loadSave(slotNumber, state);
        return true;
      } catch (e) {
        console.error("Failed to load save", e);
        return false;
      }
    }
    return false;
  };

  const checkSaves = () => {
    return [1, 2, 3].map(slot => ({
      slot,
      exists: !!localStorage.getItem(`cyber_save_slot_${slot}`)
    }));
  };

  return { saveSlot, saveGame, loadGame, checkSaves };
}
