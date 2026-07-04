import { useGameStore } from '../store/gameStore';
import { ALL_QUESTS } from '../data/quests';

export function useQuests() {
  const questsActive = useGameStore(s => s.questsActive);
  const questsCompleted = useGameStore(s => s.questsCompleted);
  const addQuest = useGameStore(s => s.addQuest);
  const updateQuestObjective = useGameStore(s => s.updateQuestObjective);
  const completeQuest = useGameStore(s => s.completeQuest);

  const startQuest = (questId: string) => {
    const q = ALL_QUESTS[questId];
    if (q && !questsActive.find(active => active.id === questId) && !questsCompleted.includes(questId)) {
      addQuest({ ...q });
    }
  };

  const checkObjective = (questId: string, objectiveId: string) => {
    const active = questsActive.find(q => q.id === questId);
    if (!active) return;
    
    const obj = active.objectives.find(o => o.id === objectiveId);
    if (obj && !obj.completed) {
      updateQuestObjective(questId, objectiveId, true);
      
      // Check if all completed
      const updatedActive = useGameStore.getState().questsActive.find(q => q.id === questId);
      if (updatedActive && updatedActive.objectives.every(o => o.completed)) {
        completeQuest(questId);
      }
    }
  };

  return {
    questsActive,
    questsCompleted,
    startQuest,
    checkObjective
  };
}
