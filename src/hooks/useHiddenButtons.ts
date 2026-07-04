import { useGameStore } from '../store/gameStore';
import { HIDDEN_BUTTONS } from '../data/hiddenButtons';
import { sfx } from '../utils/audio';

export function useHiddenButtons() {
  const flags = useGameStore(s => s.flags);
  const addHiddenButton = useGameStore(s => s.addHiddenButton);
  const gainXp = useGameStore(s => s.gainXp);
  const addGold = useGameStore(s => s.addGold);
  // Optional: add item based on ID

  const checkButton = (buttonId: string) => {
    if (!flags[`hidden_${buttonId}`]) {
      const button = HIDDEN_BUTTONS[buttonId];
      if (button) {
        addHiddenButton(buttonId);
        sfx.hackSuccess(); // Sparkle/success sound
        
        if (button.rewardType === 'xp') {
          gainXp(button.rewardAmount || 0);
        } else if (button.rewardType === 'gold') {
          addGold(button.rewardAmount || 0);
        }
        // return message for UI
        return button.rewardText;
      }
    }
    return null;
  };

  return { checkButton, flags };
}
