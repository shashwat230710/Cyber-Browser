import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface InventoryItem {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory' | 'consumable' | 'quest' | 'lore';
  description: string;
  effect?: any;
  stats?: { attack?: number; defense?: number; hack?: number; charm?: number; luck?: number; hp?: number; maxHp?: number };
  price?: number;
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  objectives: { id: string; text: string; completed: boolean }[];
  completed: boolean;
}

export interface GameState {
  playerName: string;
  level: number;
  xp: number;
  xpToNext: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  
  stats: {
    attack: number;
    defense: number;
    hack: number;
    charm: number;
    luck: number;
  };
  
  inventory: InventoryItem[];
  gold: number;
  equipped: {
    weapon: InventoryItem | null;
    armor: InventoryItem | null;
    accessory: InventoryItem | null;
  };
  
  currentKingdom: string | null;
  currentRoom: string | null;
  kingdomsUnlocked: string[];
  kingdomsCompleted: string[];
  questsActive: Quest[];
  questsCompleted: string[];
  npcsMet: string[];
  enemiesDefeated: Record<string, number>;
  bossesDefeated: string[];
  
  flags: Record<string, boolean>;
  hiddenButtonsFound: number;
  totalHiddenButtons: number;
  
  saveSlot: number;
  playTime: number;

  scanlines: boolean;
  audioEnabled: boolean;
}

interface GameStore extends GameState {
  setPlayerName: (name: string) => void;
  gainXp: (amount: number) => void;
  heal: (amount: number) => void;
  takeDamage: (amount: number) => void;
  restoreMp: (amount: number) => void;
  useMp: (amount: number) => void;
  addGold: (amount: number) => void;
  spendGold: (amount: number) => boolean;
  addItem: (item: InventoryItem) => void;
  removeItem: (itemId: string) => void;
  equipItem: (item: InventoryItem) => void;
  unequipItem: (slot: 'weapon' | 'armor' | 'accessory') => void;
  unlockKingdom: (kingdomId: string) => void;
  completeKingdom: (kingdomId: string) => void;
  setCurrentKingdom: (kingdomId: string | null) => void;
  setCurrentRoom: (roomId: string) => void;
  setFlag: (flagId: string, value: boolean) => void;
  addHiddenButton: (buttonId: string) => void;
  addQuest: (quest: Quest) => void;
  updateQuestObjective: (questId: string, objectiveId: string, completed: boolean) => void;
  completeQuest: (questId: string) => void;
  recordEnemyDefeat: (enemyId: string) => void;
  recordBossDefeat: (bossId: string) => void;
  toggleScanlines: () => void;
  toggleAudio: () => void;
  loadSave: (slot: number, state: GameState) => void;
  resetToDefault: () => void;
  incrementPlayTime: () => void;
}

const defaultState: GameState = {
  playerName: '',
  level: 1,
  xp: 0,
  xpToNext: 100,
  hp: 50,
  maxHp: 50,
  mp: 20,
  maxMp: 20,
  stats: {
    attack: 5,
    defense: 5,
    hack: 5,
    charm: 5,
    luck: 5,
  },
  inventory: [],
  gold: 0,
  equipped: {
    weapon: null,
    armor: null,
    accessory: null,
  },
  currentKingdom: null,
  currentRoom: null,
  kingdomsUnlocked: ['google'],
  kingdomsCompleted: [],
  questsActive: [],
  questsCompleted: [],
  npcsMet: [],
  enemiesDefeated: {},
  bossesDefeated: [],
  flags: {},
  hiddenButtonsFound: 0,
  totalHiddenButtons: 15,
  saveSlot: 1,
  playTime: 0,
  scanlines: true,
  audioEnabled: true,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...defaultState,
      setPlayerName: (name) => set({ playerName: name }),
      gainXp: (amount) => {
        set((state) => {
          let newXp = state.xp + amount;
          let newLevel = state.level;
          let newXpToNext = state.xpToNext;
          let newMaxHp = state.maxHp;
          let newMaxMp = state.maxMp;
          let newStats = { ...state.stats };
          let hp = state.hp;
          let mp = state.mp;

          while (newXp >= newXpToNext) {
            newXp -= newXpToNext;
            newLevel++;
            newXpToNext = Math.floor(newXpToNext * 1.5);
            newMaxHp += 10;
            newMaxMp += 5;
            newStats.attack += 2;
            newStats.defense += 2;
            newStats.hack += 2;
            newStats.charm += 2;
            newStats.luck += 1;
            hp = newMaxHp; // Heal on level up
            mp = newMaxMp;
          }

          return { xp: newXp, level: newLevel, xpToNext: newXpToNext, maxHp: newMaxHp, maxMp: newMaxMp, stats: newStats, hp, mp };
        });
      },
      heal: (amount) => set((state) => ({ hp: Math.min(state.maxHp, state.hp + amount) })),
      takeDamage: (amount) => set((state) => ({ hp: Math.max(0, state.hp - amount) })),
      restoreMp: (amount) => set((state) => ({ mp: Math.min(state.maxMp, state.mp + amount) })),
      useMp: (amount) => set((state) => ({ mp: Math.max(0, state.mp - amount) })),
      addGold: (amount) => set((state) => ({ gold: state.gold + amount })),
      spendGold: (amount) => {
        const { gold } = get();
        if (gold >= amount) {
          set({ gold: gold - amount });
          return true;
        }
        return false;
      },
      addItem: (item) => set((state) => ({ inventory: [...state.inventory, item] })),
      removeItem: (itemId) => set((state) => {
        const index = state.inventory.findIndex(i => i.id === itemId);
        if (index > -1) {
          const newInv = [...state.inventory];
          newInv.splice(index, 1);
          return { inventory: newInv };
        }
        return state;
      }),
      equipItem: (item) => set((state) => {
        const newEquipped = { ...state.equipped };
        newEquipped[item.type as 'weapon' | 'armor' | 'accessory'] = item;
        return { equipped: newEquipped };
      }),
      unequipItem: (slot) => set((state) => {
        const newEquipped = { ...state.equipped, [slot]: null };
        return { equipped: newEquipped };
      }),
      unlockKingdom: (kingdomId) => set((state) => ({
        kingdomsUnlocked: state.kingdomsUnlocked.includes(kingdomId) ? state.kingdomsUnlocked : [...state.kingdomsUnlocked, kingdomId]
      })),
      completeKingdom: (kingdomId) => set((state) => ({
        kingdomsCompleted: state.kingdomsCompleted.includes(kingdomId) ? state.kingdomsCompleted : [...state.kingdomsCompleted, kingdomId]
      })),
      setCurrentKingdom: (kingdomId) => set({ currentKingdom: kingdomId }),
      setCurrentRoom: (roomId) => set({ currentRoom: roomId }),
      setFlag: (flagId, value) => set((state) => ({ flags: { ...state.flags, [flagId]: value } })),
      addHiddenButton: (buttonId) => set((state) => {
        if (!state.flags[`hidden_${buttonId}`]) {
          return {
            flags: { ...state.flags, [`hidden_${buttonId}`]: true },
            hiddenButtonsFound: state.hiddenButtonsFound + 1
          };
        }
        return state;
      }),
      addQuest: (quest) => set((state) => ({ questsActive: [...state.questsActive, quest] })),
      updateQuestObjective: (questId, objectiveId, completed) => set((state) => {
        const quests = state.questsActive.map(q => {
          if (q.id === questId) {
            return {
              ...q,
              objectives: q.objectives.map(o => o.id === objectiveId ? { ...o, completed } : o)
            };
          }
          return q;
        });
        return { questsActive: quests };
      }),
      completeQuest: (questId) => set((state) => {
        const quest = state.questsActive.find(q => q.id === questId);
        if (quest) {
          return {
            questsActive: state.questsActive.filter(q => q.id !== questId),
            questsCompleted: [...state.questsCompleted, questId]
          };
        }
        return state;
      }),
      recordEnemyDefeat: (enemyId) => set((state) => ({
        enemiesDefeated: { ...state.enemiesDefeated, [enemyId]: (state.enemiesDefeated[enemyId] || 0) + 1 }
      })),
      recordBossDefeat: (bossId) => set((state) => ({
        bossesDefeated: [...state.bossesDefeated, bossId]
      })),
      toggleScanlines: () => set((state) => ({ scanlines: !state.scanlines })),
      toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),
      loadSave: (slot, savedState) => set({ ...savedState, saveSlot: slot }),
      resetToDefault: () => set(defaultState),
      incrementPlayTime: () => set((state) => ({ playTime: state.playTime + 1 })),
    }),
    {
      name: 'cyber-browser-save',
    }
  )
);
