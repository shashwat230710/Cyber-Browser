import { useState } from 'react';
import { DialogueNode, NPCS } from '../data/npcs';
import { useGameStore } from '../store/gameStore';

export function useDialogue(npcId: string, onEnd?: () => void) {
  const [currentNodeId, setCurrentNodeId] = useState('root');
  
  const npcNodes = NPCS[npcId];
  const currentNode = npcNodes?.find(n => n.id === currentNodeId);
  const state = useGameStore();

  const handleOptionSelect = (nextId?: string, trigger?: string) => {
    if (trigger) {
      // Handle special dialogue triggers
      if (trigger === 'give_item') {
        // give item logic
      }
    }

    if (!nextId || nextId === 'end') {
      if (onEnd) onEnd();
    } else {
      setCurrentNodeId(nextId);
    }
  };

  return {
    currentNode,
    handleOptionSelect,
    npcName: currentNode?.speaker || 'Unknown'
  };
}
