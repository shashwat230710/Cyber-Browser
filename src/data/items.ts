import { InventoryItem } from '../store/gameStore';

export const ALL_ITEMS: Record<string, InventoryItem> = {
  // Weapons
  'w_broken_link': { id: 'w_broken_link', name: 'Broken Link Sword', type: 'weapon', description: 'A frayed anchor tag.', stats: { attack: 3 }, price: 0 },
  'w_golden_search': { id: 'w_golden_search', name: 'Golden Search Crystal', type: 'weapon', description: 'Glows with algorithmic truth.', stats: { attack: 8 }, price: 100 },
  'w_butlers_cane': { id: 'w_butlers_cane', name: "Butler's Cane", type: 'weapon', description: 'Very polite.', stats: { attack: 6, charm: 5 }, price: 120 },
  'w_boomstick': { id: 'w_boomstick', name: 'Boomstick Microphone', type: 'weapon', description: 'Loud and compressed.', stats: { attack: 7 }, price: 150 },
  'w_bass_drop': { id: 'w_bass_drop', name: 'Bass Drop Bomb', type: 'weapon', description: 'Hits everyone.', stats: { attack: 10 }, price: 200 },
  'w_clapperboard': { id: 'w_clapperboard', name: "Director's Clapperboard", type: 'weapon', description: 'CUT!', stats: { attack: 12 }, price: 250 },
  'w_floppy_blade': { id: 'w_floppy_blade', name: 'Floppy Disk Blade', type: 'weapon', description: 'Sharp plastic edges.', stats: { attack: 15, hack: 5 }, price: 300 },
  'w_source_code': { id: 'w_source_code', name: 'The Source Code', type: 'weapon', description: 'It sees everything.', stats: { attack: 20 }, price: 1000 },

  // Armor
  'a_cardboard': { id: 'a_cardboard', name: 'Cardboard Box', type: 'armor', description: 'Basic shipping protection.', stats: { defense: 1 }, price: 0 },
  'a_nostalgia': { id: 'a_nostalgia', name: 'Nostalgia Shield', type: 'armor', description: 'Protects against new ideas.', stats: { defense: 5 }, price: 100 },
  'a_prime': { id: 'a_prime', name: 'Amazon Prime Armor', type: 'armor', description: 'Fast protection.', stats: { defense: 12 }, price: 200 },
  'a_stunt': { id: 'a_stunt', name: 'Stunt Double Armor', type: 'armor', description: 'Takes the hits for you.', stats: { defense: 10 }, price: 180 },
  'a_citation': { id: 'a_citation', name: 'Wikipedia Citation Vest', type: 'armor', description: 'Peer-reviewed defense.', stats: { defense: 8 }, price: 150 },
  'a_firewall': { id: 'a_firewall', name: 'Firewall', type: 'armor', description: 'Blocks all incoming ports.', stats: { defense: 18 }, price: 500 },

  // Accessories
  'acc_discount': { id: 'acc_discount', name: 'Discount Ring', type: 'accessory', description: 'Prices seem lower.', price: 100 },
  'acc_unity': { id: 'acc_unity', name: 'Yahoo Unity Badge', type: 'accessory', description: 'Brings people together.', stats: { attack: 3, defense: 3, hack: 3, charm: 3, luck: 3 }, price: 150 },
  'acc_map': { id: 'acc_map', name: "Crawler's Map", type: 'accessory', description: 'Shows hidden paths.', price: 100 },
  'acc_oracle': { id: 'acc_oracle', name: "Oracle's Sight", type: 'accessory', description: 'Reveals secrets.', stats: { luck: 10 }, price: 200 },
  'acc_glasses': { id: 'acc_glasses', name: "Librarian's Glasses", type: 'accessory', description: 'Lets you read their stats.', stats: { hack: 8, luck: 5 }, price: 250 },
  'acc_legacy': { id: 'acc_legacy', name: "Napster's Legacy", type: 'accessory', description: 'Sharing is caring.', stats: { attack: 10, hack: 5 }, price: 300 },
  'acc_key': { id: 'acc_key', name: "The Archivist's Key", type: 'accessory', description: 'Opens the final door.', price: 0 },

  // Consumables
  'c_html': { id: 'c_html', name: 'Healing HTML', type: 'consumable', description: 'Restores 30 HP.', effect: { type: 'heal', amount: 30 }, price: 10 },
  'c_memory': { id: 'c_memory', name: 'Memory Restore', type: 'consumable', description: 'Restores 20 MP.', effect: { type: 'restoreMp', amount: 20 }, price: 15 },
  'c_boost': { id: 'c_boost', name: 'Bandwidth Boost', type: 'consumable', description: '+50% XP for next fight.', effect: { type: 'xpBoost', amount: 1.5 }, price: 25 },
  'c_antivirus': { id: 'c_antivirus', name: 'Antivirus Pill', type: 'consumable', description: 'Cures all status effects.', effect: { type: 'cureAll' }, price: 20 },
  'c_floppy': { id: 'c_floppy', name: 'Golden Floppy', type: 'consumable', description: 'Full HP/MP restore.', effect: { type: 'fullRestore' }, price: 100 },
  'c_debug': { id: 'c_debug', name: 'Debug Spray', type: 'consumable', description: 'Reveals true enemy stats.', effect: { type: 'revealStats' }, price: 30 },

  // Lore / Quest Items
  'l_floppy_origin': { id: 'l_floppy_origin', name: 'The 3.5 inch Floppy of Origins', type: 'lore', description: 'Contains project logs.', price: 0 }
};
