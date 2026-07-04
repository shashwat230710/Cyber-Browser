export interface HiddenButtonDef {
  id: string;
  kingdomId: string;
  roomId: string; // 'desktop' for desktop ones
  type: 'pixel' | 'link' | 'dialogue' | 'contextmenu' | 'chat';
  description: string;
  rewardText: string;
  rewardId?: string;
  rewardType?: 'gold' | 'item' | 'xp';
  rewardAmount?: number;
}

export const HIDDEN_BUTTONS: Record<string, HiddenButtonDef> = {
  'hb_google': {
    id: 'hb_google',
    kingdomId: 'google',
    roomId: 'google_home',
    type: 'pixel',
    description: 'One of the periods after "Goo.gle." is slightly larger.',
    rewardText: 'You found a hidden optimization!',
    rewardType: 'xp',
    rewardAmount: 50
  },
  'hb_yahoo_ad': {
    id: 'hb_yahoo_ad',
    kingdomId: 'yahoo',
    roomId: 'yahoo_front',
    type: 'link',
    description: 'Floating ad banner is actually clickable.',
    rewardText: 'A secret cache of gold!',
    rewardType: 'gold',
    rewardAmount: 100
  },
  'hb_yahoo_news': {
    id: 'hb_yahoo_news',
    kingdomId: 'yahoo',
    roomId: 'yahoo_news',
    type: 'link',
    description: 'The 13th news headline has a hidden link in "here".',
    rewardText: 'The truth is buried deep.',
    rewardType: 'item',
    rewardId: 'c_memory'
  },
  'hb_altavista_babel': {
    id: 'hb_altavista_babel',
    kingdomId: 'altavista',
    roomId: 'alta_babel',
    type: 'link',
    description: 'Floating word in a language that doesn\'t exist.',
    rewardText: 'You found ancient knowledge.',
    rewardType: 'xp',
    rewardAmount: 75
  },
  'hb_askjeeves_diary': {
    id: 'hb_askjeeves_diary',
    kingdomId: 'askjeeves',
    roomId: 'ask_servant',
    type: 'pixel',
    description: 'Crack in the wall.',
    rewardText: 'You found a diary page: "He fears the Dark Web."',
    rewardType: 'xp',
    rewardAmount: 100
  },
  'hb_amazon_review': {
    id: 'hb_amazon_review',
    kingdomId: 'amazon',
    roomId: 'amazon_review',
    type: 'pixel',
    description: 'The 13th exclamation mark in a review.',
    rewardText: 'A pristine healing item!',
    rewardType: 'item',
    rewardId: 'c_html'
  },
  'hb_ebay_auction': {
    id: 'hb_ebay_auction',
    kingdomId: 'ebay',
    roomId: 'ebay_stage',
    type: 'dialogue',
    description: 'Click "twice" in "Going twice..."',
    rewardText: 'You sniped a hidden reward!',
    rewardType: 'gold',
    rewardAmount: 250
  },
  'hb_napster_note': {
    id: 'hb_napster_note',
    kingdomId: 'napster',
    roomId: 'napster_circle',
    type: 'pixel',
    description: 'Specific musical note floating in background.',
    rewardText: 'You discovered a hidden track!',
    rewardType: 'item',
    rewardId: 'w_bass_drop'
  },
  'hb_wikipedia_citation': {
    id: 'hb_wikipedia_citation',
    kingdomId: 'wikipedia',
    roomId: 'wiki_pit',
    type: 'link',
    description: 'Red [citation needed] tag.',
    rewardText: 'You found the deleted page of the First Website.',
    rewardType: 'xp',
    rewardAmount: 200
  },
  'hb_imdb_frame': {
    id: 'hb_imdb_frame',
    kingdomId: 'imdb',
    roomId: 'imdb_screening',
    type: 'link',
    description: 'Red text frame in the third clip.',
    rewardText: 'Director\'s secret stash.',
    rewardType: 'gold',
    rewardAmount: 300
  },
  'hb_desktop_clock': {
    id: 'hb_desktop_clock',
    kingdomId: 'desktop',
    roomId: 'desktop',
    type: 'pixel',
    description: 'Click the XP taskbar clock.',
    rewardText: 'Time is money!',
    rewardType: 'gold',
    rewardAmount: 50
  },
  'hb_desktop_rightclick': {
    id: 'hb_desktop_rightclick',
    kingdomId: 'desktop',
    roomId: 'desktop',
    type: 'contextmenu',
    description: 'Right-click empty space 5 times.',
    rewardText: 'You broke the desktop rules.',
    rewardType: 'xp',
    rewardAmount: 100
  },
  'hb_darkweb_invisible': {
    id: 'hb_darkweb_invisible',
    kingdomId: 'darkweb',
    roomId: 'dark_threshold',
    type: 'link',
    description: 'Completely invisible button found by tabbing.',
    rewardText: 'You see what isn\'t there.',
    rewardType: 'item',
    rewardId: 'c_floppy'
  },
  'hb_error_dialog': {
    id: 'hb_error_dialog',
    kingdomId: 'global',
    roomId: 'any',
    type: 'dialogue',
    description: 'Fake error dialog "Error 404: Click OK" - OK is the button.',
    rewardText: 'You fixed the error.',
    rewardType: 'xp',
    rewardAmount: 50
  },
  'hb_altavista_chat': {
    id: 'hb_altavista_chat',
    kingdomId: 'altavista',
    roomId: 'alta_entrance',
    type: 'chat',
    description: 'Type "internet" in chat.',
    rewardText: 'Secret room unlocked (concept).',
    rewardType: 'xp',
    rewardAmount: 100
  }
};
