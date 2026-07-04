export interface DialogueOption {
  text: string;
  nextDialogId?: string;
  triggerEvent?: string; // e.g., 'start_combat', 'give_item'
  condition?: (state: any) => boolean;
}

export interface DialogueNode {
  id: string;
  speaker: string;
  text: string;
  options: DialogueOption[];
}

export const NPCS: Record<string, DialogueNode[]> = {
  npc_google_g1: [
    {
      id: 'root',
      speaker: 'Letter G (Green)',
      text: 'Go forth. The answers you seek are already here.',
      options: [{ text: 'Thank you.', nextDialogId: 'end' }]
    }
  ],
  npc_google_o1: [
    {
      id: 'root',
      speaker: 'Letter o (Red)',
      text: 'Be careful... not all results are what they seem.',
      options: [{ text: 'I will be careful.', nextDialogId: 'end' }]
    }
  ],
  npc_google_o2: [
    {
      id: 'root',
      speaker: 'Letter o (Yellow)',
      text: 'Optimization has its price. Everything ranks... but at what cost?',
      options: [{ text: 'What do you mean?', nextDialogId: 'explain' }]
    },
    {
      id: 'explain',
      speaker: 'Letter o (Yellow)',
      text: 'Knowledge is never lost... merely buried beneath broken links.',
      options: [{ text: 'I see.', nextDialogId: 'end' }]
    }
  ]
};
