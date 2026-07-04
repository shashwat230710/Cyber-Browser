import { Quest } from '../store/gameStore';

export const ALL_QUESTS: Record<string, Quest> = {
  'q_yahoo_stolen': {
    id: 'q_yahoo_stolen',
    name: 'Recover Stolen Items',
    description: 'Recover 3 stolen auction items from Spam Goblins in the back alleys.',
    objectives: [
      { id: 'obj_1', text: 'Find Item 1', completed: false },
      { id: 'obj_2', text: 'Find Item 2', completed: false },
      { id: 'obj_3', text: 'Find Item 3', completed: false },
    ],
    completed: false
  },
  'q_yahoo_peace': {
    id: 'q_yahoo_peace',
    name: 'Negotiate Peace',
    description: 'Talk to the faction leaders in Yahoo and find a compromise.',
    objectives: [
      { id: 'obj_auction', text: 'Speak to Auction Leader', completed: false },
      { id: 'obj_mail', text: 'Speak to Mail Leader', completed: false },
      { id: 'obj_news', text: 'Speak to News Leader', completed: false },
      { id: 'obj_unite', text: 'Unite the factions', completed: false }
    ],
    completed: false
  },
  'q_altavista_oracle': {
    id: 'q_altavista_oracle',
    name: "Restore the Oracle's Sight",
    description: 'Find 3 Crystal Lens fragments hidden in AltaVista rooms.',
    objectives: [
      { id: 'obj_lens1', text: 'Find Lens 1 (Answer riddle)', completed: false },
      { id: 'obj_lens2', text: 'Find Lens 2 (Flawless victory)', completed: false },
      { id: 'obj_lens3', text: 'Find Lens 3 (Hack locked door)', completed: false }
    ],
    completed: false
  },
  'q_askjeeves_seven': {
    id: 'q_askjeeves_seven',
    name: 'The Seven Questions',
    description: 'Ask 7 high-quality questions throughout the manor.',
    objectives: [
      { id: 'obj_q1', text: 'Ask Question 1', completed: false },
      { id: 'obj_q2', text: 'Ask Question 2', completed: false },
      { id: 'obj_q3', text: 'Ask Question 3', completed: false },
      { id: 'obj_q4', text: 'Ask Question 4', completed: false },
      { id: 'obj_q5', text: 'Ask Question 5', completed: false },
      { id: 'obj_q6', text: 'Ask Question 6', completed: false },
      { id: 'obj_q7', text: 'Ask Question 7', completed: false }
    ],
    completed: false
  },
  'q_amazon_floppy': {
    id: 'q_amazon_floppy',
    name: 'The Rare Floppy Disk',
    description: 'Find The 3.5 inch Floppy of Origins in the Warehouse Depths.',
    objectives: [
      { id: 'obj_find_warehouse', text: 'Navigate Warehouse Depths', completed: false },
      { id: 'obj_defeat_bot', text: 'Defeat the Warehouse Bot', completed: false },
      { id: 'obj_get_floppy', text: 'Obtain the Floppy', completed: false }
    ],
    completed: false
  }
};
