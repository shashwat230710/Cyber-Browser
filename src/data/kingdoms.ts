export interface Room {
  id: string;
  name: string;
  description: string;
  exits: { direction: string; targetRoom: string }[];
  npcIds?: string[];
}

export interface Kingdom {
  id: string;
  name: string;
  title: string;
  themeClass: string;
  rooms: Record<string, Room>;
  startingRoom: string;
}

export const KINGDOMS: Record<string, Kingdom> = {
  google: {
    id: 'google',
    name: 'Google',
    title: 'Google - Search Castle - Internet Explorer',
    themeClass: 'kingdom-google',
    startingRoom: 'google_home',
    rooms: {
      google_home: {
        id: 'google_home',
        name: 'Search Homepage',
        description: 'The iconic minimalist page. The logo letters are NPCs. The search bar is a portal.',
        exits: [{ direction: 'Enter Search Bar', targetRoom: 'google_index' }],
        npcIds: ['npc_google_g1', 'npc_google_o1', 'npc_google_o2', 'npc_google_g2', 'npc_google_l', 'npc_google_e']
      },
      google_index: {
        id: 'google_index',
        name: 'Index Corridors',
        description: 'Endless hallways of organized links. Enemies roam here.',
        exits: [
          { direction: 'Back to Home', targetRoom: 'google_home' },
          { direction: 'Deeper In', targetRoom: 'google_cache' },
          { direction: 'To Image Gallery', targetRoom: 'google_image' }
        ]
      },
      google_cache: {
        id: 'google_cache',
        name: 'Cache Vaults',
        description: 'Stored copies of pages. Treasure room with items.',
        exits: [
          { direction: 'Back to Corridors', targetRoom: 'google_index' },
          { direction: 'Ascend Tower', targetRoom: 'google_tower' }
        ]
      },
      google_image: {
        id: 'google_image',
        name: 'Image Gallery',
        description: 'Visual maze. Navigate through thumbnail grids.',
        exits: [{ direction: 'Back to Corridors', targetRoom: 'google_index' }]
      },
      google_tower: {
        id: 'google_tower',
        name: 'PageRank Tower',
        description: 'Vertical climbing level. Each floor is a puzzle.',
        exits: [
          { direction: 'Descend', targetRoom: 'google_cache' },
          { direction: 'Enter Algorithm Core', targetRoom: 'google_core' }
        ]
      },
      google_core: {
        id: 'google_core',
        name: 'Algorithm Core',
        description: 'The heart of the Search Castle.',
        exits: [{ direction: 'Flee to Tower', targetRoom: 'google_tower' }]
      }
    }
  },
  yahoo: {
    id: 'yahoo',
    name: 'Yahoo!',
    title: 'Yahoo! - The Marketplace - Internet Explorer',
    themeClass: 'kingdom-yahoo',
    startingRoom: 'yahoo_front',
    rooms: {
      yahoo_front: {
        id: 'yahoo_front',
        name: 'Yahoo Front Page',
        description: 'Portal homepage. Chaotic, crowded, links everywhere.',
        exits: [
          { direction: 'To Auctions', targetRoom: 'yahoo_auction' },
          { direction: 'To Mail', targetRoom: 'yahoo_mail' },
          { direction: 'To News', targetRoom: 'yahoo_news' }
        ]
      },
      yahoo_auction: {
        id: 'yahoo_auction',
        name: 'Auction District',
        description: 'Where eBay-style auctions happen live.',
        exits: [{ direction: 'Back to Front Page', targetRoom: 'yahoo_front' }]
      },
      yahoo_mail: {
        id: 'yahoo_mail',
        name: 'Mail Quarter',
        description: 'Glowing mail boxes. Some contain quests, some contain spam.',
        exits: [
          { direction: 'Back to Front Page', targetRoom: 'yahoo_front' },
          { direction: 'To Messenger Square', targetRoom: 'yahoo_messenger' }
        ]
      },
      yahoo_news: {
        id: 'yahoo_news',
        name: 'News Plaza',
        description: 'Giant scrolling news ticker. Information changes every hour.',
        exits: [
          { direction: 'Back to Front Page', targetRoom: 'yahoo_front' },
          { direction: 'To GeoCities', targetRoom: 'yahoo_geocities' }
        ]
      },
      yahoo_geocities: {
        id: 'yahoo_geocities',
        name: 'GeoCities Alley',
        description: 'A remnant of personal homepages. Nostalgic.',
        exits: [{ direction: 'Back to News', targetRoom: 'yahoo_news' }]
      },
      yahoo_messenger: {
        id: 'yahoo_messenger',
        name: 'Messenger Square',
        description: 'Chat room area. Real-time conversations.',
        exits: [
          { direction: 'Back to Mail', targetRoom: 'yahoo_mail' },
          { direction: 'To Yahoo Core', targetRoom: 'yahoo_core' }
        ]
      },
      yahoo_core: {
        id: 'yahoo_core',
        name: 'Yahoo Core',
        description: 'Where the factions meet.',
        exits: [{ direction: 'Back to Messenger Square', targetRoom: 'yahoo_messenger' }]
      }
    }
  },
  altavista: {
    id: 'altavista',
    name: 'AltaVista',
    title: 'AltaVista - Crystal Observatory - Internet Explorer',
    themeClass: 'kingdom-altavista',
    startingRoom: 'alta_entrance',
    rooms: {
      alta_entrance: {
        id: 'alta_entrance',
        name: 'Observatory Entrance',
        description: 'Grand doors with AltaVista\'s butterfly etched in crystal.',
        exits: [{ direction: 'Enter Star Index', targetRoom: 'alta_star' }]
      },
      alta_star: {
        id: 'alta_star',
        name: 'The Star Index',
        description: 'A massive celestial map where each star is a website.',
        exits: [
          { direction: 'Back to Entrance', targetRoom: 'alta_entrance' },
          { direction: 'To Babel Chamber', targetRoom: 'alta_babel' },
          { direction: 'To Crawl Tunnels', targetRoom: 'alta_tunnels' }
        ]
      },
      alta_babel: {
        id: 'alta_babel',
        name: 'Babel Translation Chamber',
        description: 'Words float in the air.',
        exits: [{ direction: 'Back to Star Index', targetRoom: 'alta_star' }]
      },
      alta_tunnels: {
        id: 'alta_tunnels',
        name: 'The Deep Crawl Tunnels',
        description: 'Dark tunnels where spider bots live.',
        exits: [
          { direction: 'Back to Star Index', targetRoom: 'alta_star' },
          { direction: 'To Oracle Chamber', targetRoom: 'alta_oracle' }
        ]
      },
      alta_oracle: {
        id: 'alta_oracle',
        name: 'Oracle\'s Blind Chamber',
        description: 'Where the Index Oracle resides.',
        exits: [{ direction: 'Back to Tunnels', targetRoom: 'alta_tunnels' }]
      }
    }
  },
  askjeeves: {
    id: 'askjeeves',
    name: 'Ask Jeeves',
    title: 'Ask Jeeves - Butler Manor - Internet Explorer',
    themeClass: 'kingdom-askjeeves',
    startingRoom: 'ask_entrance',
    rooms: {
      ask_entrance: {
        id: 'ask_entrance',
        name: 'Manor Entrance',
        description: 'Grand double doors. Wipe your feet.',
        exits: [{ direction: 'Enter Question Hall', targetRoom: 'ask_hall' }]
      },
      ask_hall: {
        id: 'ask_hall',
        name: 'The Question Hall',
        description: 'A massive room where questions echo.',
        exits: [
          { direction: 'Back to Entrance', targetRoom: 'ask_entrance' },
          { direction: 'To Library', targetRoom: 'ask_library' },
          { direction: 'To Drawing Room', targetRoom: 'ask_drawing' }
        ]
      },
      ask_library: {
        id: 'ask_library',
        name: 'Library of Queries',
        description: 'Books containing every question ever asked.',
        exits: [{ direction: 'Back to Hall', targetRoom: 'ask_hall' }]
      },
      ask_drawing: {
        id: 'ask_drawing',
        name: 'The Drawing Room',
        description: 'NPCs sit and chat. Tea is served.',
        exits: [
          { direction: 'Back to Hall', targetRoom: 'ask_hall' },
          { direction: 'To Servant Quarters', targetRoom: 'ask_servant' }
        ]
      },
      ask_servant: {
        id: 'ask_servant',
        name: 'Servant\'s Quarters',
        description: 'Behind the scenes.',
        exits: [
          { direction: 'Back to Drawing Room', targetRoom: 'ask_drawing' },
          { direction: 'To Jeeves\' Study', targetRoom: 'ask_study' }
        ]
      },
      ask_study: {
        id: 'ask_study',
        name: 'Jeeves\' Study',
        description: 'Where Jeeves waits.',
        exits: [{ direction: 'Back to Servant Quarters', targetRoom: 'ask_servant' }]
      }
    }
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon',
    title: 'Amazon.com - Infinite Bazaar - Internet Explorer',
    themeClass: 'kingdom-amazon',
    startingRoom: 'amazon_storefront',
    rooms: {
      amazon_storefront: {
        id: 'amazon_storefront',
        name: 'Storefront',
        description: 'Featured items and recommendations.',
        exits: [
          { direction: 'To Book Aisles', targetRoom: 'amazon_books' },
          { direction: 'To Electronics', targetRoom: 'amazon_electronics' }
        ]
      },
      amazon_books: {
        id: 'amazon_books',
        name: 'Book Aisles',
        description: 'Physical books as enemies and items.',
        exits: [{ direction: 'Back to Storefront', targetRoom: 'amazon_storefront' }]
      },
      amazon_electronics: {
        id: 'amazon_electronics',
        name: 'Electronics Wing',
        description: 'Glowing screens and circuitry enemies.',
        exits: [
          { direction: 'Back to Storefront', targetRoom: 'amazon_storefront' },
          { direction: 'To Review Tunnel', targetRoom: 'amazon_review' }
        ]
      },
      amazon_review: {
        id: 'amazon_review',
        name: 'Review Tunnel',
        description: 'Endless customer reviews scrolling by.',
        exits: [
          { direction: 'Back to Electronics', targetRoom: 'amazon_electronics' },
          { direction: 'To Warehouse', targetRoom: 'amazon_warehouse' }
        ]
      },
      amazon_warehouse: {
        id: 'amazon_warehouse',
        name: 'Warehouse Depths',
        description: 'Dark, maze-like fulfillment center.',
        exits: [
          { direction: 'Back to Review Tunnel', targetRoom: 'amazon_review' },
          { direction: 'To Core', targetRoom: 'amazon_core' }
        ]
      },
      amazon_core: {
        id: 'amazon_core',
        name: 'Recommendation Engine Core',
        description: 'The machine that predicts your desires.',
        exits: [{ direction: 'Flee to Warehouse', targetRoom: 'amazon_warehouse' }]
      }
    }
  },
  ebay: {
    id: 'ebay',
    name: 'eBay',
    title: 'eBay - Auction Arena - Internet Explorer',
    themeClass: 'kingdom-ebay',
    startingRoom: 'ebay_lobby',
    rooms: {
      ebay_lobby: {
        id: 'ebay_lobby',
        name: 'Lobby',
        description: 'Current auctions listed with countdown timers.',
        exits: [
          { direction: 'To Bidder\'s Hall', targetRoom: 'ebay_hall' },
          { direction: 'To Stage', targetRoom: 'ebay_stage' }
        ]
      },
      ebay_hall: {
        id: 'ebay_hall',
        name: 'Bidder\'s Hall',
        description: 'NPC bidders with distinct personalities.',
        exits: [{ direction: 'Back to Lobby', targetRoom: 'ebay_lobby' }]
      },
      ebay_stage: {
        id: 'ebay_stage',
        name: 'The Stage',
        description: 'Live auctions happen here.',
        exits: [
          { direction: 'Back to Lobby', targetRoom: 'ebay_lobby' },
          { direction: 'To Storage Vault', targetRoom: 'ebay_storage' }
        ]
      },
      ebay_storage: {
        id: 'ebay_storage',
        name: 'Storage Vault',
        description: 'Won items are stored here.',
        exits: [
          { direction: 'Back to Stage', targetRoom: 'ebay_stage' },
          { direction: 'To Seller\'s Backroom', targetRoom: 'ebay_backroom' }
        ]
      },
      ebay_backroom: {
        id: 'ebay_backroom',
        name: 'Seller\'s Backroom',
        description: 'Where items are listed. Dark secrets lie here.',
        exits: [{ direction: 'Back to Storage', targetRoom: 'ebay_storage' }]
      }
    }
  },
  napster: {
    id: 'napster',
    name: 'Napster',
    title: 'Napster - Underground Tunnels - Internet Explorer',
    themeClass: 'kingdom-napster',
    startingRoom: 'napster_entrance',
    rooms: {
      napster_entrance: {
        id: 'napster_entrance',
        name: 'Tunnel Entrance',
        description: 'Graffiti-covered walls, muffled bass.',
        exits: [{ direction: 'Enter Sharing Circle', targetRoom: 'napster_circle' }]
      },
      napster_circle: {
        id: 'napster_circle',
        name: 'The Sharing Circle',
        description: 'Where users share music.',
        exits: [
          { direction: 'Back to Entrance', targetRoom: 'napster_entrance' },
          { direction: 'To Genre Caverns', targetRoom: 'napster_caverns' }
        ]
      },
      napster_caverns: {
        id: 'napster_caverns',
        name: 'Genre Caverns',
        description: 'Branching musical paths.',
        exits: [
          { direction: 'Back to Sharing Circle', targetRoom: 'napster_circle' },
          { direction: 'To DJ Booth', targetRoom: 'napster_dj' },
          { direction: 'To Copyright Prison', targetRoom: 'napster_prison' }
        ]
      },
      napster_dj: {
        id: 'napster_dj',
        name: 'DJ Booth',
        description: 'Where DJ Zero resides.',
        exits: [{ direction: 'Back to Caverns', targetRoom: 'napster_caverns' }]
      },
      napster_prison: {
        id: 'napster_prison',
        name: 'Copyright Prison',
        description: 'Where songs are locked away.',
        exits: [
          { direction: 'Back to Caverns', targetRoom: 'napster_caverns' },
          { direction: 'To Server Room', targetRoom: 'napster_server' }
        ]
      },
      napster_server: {
        id: 'napster_server',
        name: 'The Server Room',
        description: 'The final conflict.',
        exits: [{ direction: 'Flee to Prison', targetRoom: 'napster_prison' }]
      }
    }
  },
  wikipedia: {
    id: 'wikipedia',
    name: 'Wikipedia',
    title: 'Wikipedia - Library of Infinite Pages - Internet Explorer',
    themeClass: 'kingdom-wikipedia',
    startingRoom: 'wiki_hall',
    rooms: {
      wiki_hall: {
        id: 'wiki_hall',
        name: 'Main Hall',
        description: 'The Wikipedia globe floats here, massive and slowly rotating.',
        exits: [
          { direction: 'To Article Atrium', targetRoom: 'wiki_atrium' },
          { direction: 'To Edit War Battlefield', targetRoom: 'wiki_battlefield' }
        ]
      },
      wiki_atrium: {
        id: 'wiki_atrium',
        name: 'Article Atrium',
        description: 'Open pages floating.',
        exits: [{ direction: 'Back to Main Hall', targetRoom: 'wiki_hall' }]
      },
      wiki_battlefield: {
        id: 'wiki_battlefield',
        name: 'Edit War Battlefield',
        description: 'A literal battlefield where two sides fight over article content.',
        exits: [
          { direction: 'Back to Main Hall', targetRoom: 'wiki_hall' },
          { direction: 'To Citation Minefield', targetRoom: 'wiki_minefield' }
        ]
      },
      wiki_minefield: {
        id: 'wiki_minefield',
        name: 'Citation Minefield',
        description: 'Room full of [citation needed] markers that explode.',
        exits: [
          { direction: 'Back to Battlefield', targetRoom: 'wiki_battlefield' },
          { direction: 'To Talk Page Tavern', targetRoom: 'wiki_tavern' },
          { direction: 'To Deletion Pit', targetRoom: 'wiki_pit' }
        ]
      },
      wiki_tavern: {
        id: 'wiki_tavern',
        name: 'Talk Page Tavern',
        description: 'Where editors argue.',
        exits: [{ direction: 'Back to Minefield', targetRoom: 'wiki_minefield' }]
      },
      wiki_pit: {
        id: 'wiki_pit',
        name: 'Deletion Pit',
        description: 'Where deleted articles go. Haunting.',
        exits: [
          { direction: 'Back to Minefield', targetRoom: 'wiki_minefield' },
          { direction: 'To Librarian\'s Desk', targetRoom: 'wiki_desk' }
        ]
      },
      wiki_desk: {
        id: 'wiki_desk',
        name: 'The Librarian\'s Desk',
        description: 'Deep in the library.',
        exits: [{ direction: 'Back to Deletion Pit', targetRoom: 'wiki_pit' }]
      }
    }
  },
  imdb: {
    id: 'imdb',
    name: 'IMDb',
    title: 'IMDb - Cinema Citadel - Internet Explorer',
    themeClass: 'kingdom-imdb',
    startingRoom: 'imdb_lobby',
    rooms: {
      imdb_lobby: {
        id: 'imdb_lobby',
        name: 'Lobby',
        description: 'Movie posters line the walls. Each poster is a portal.',
        exits: [
          { direction: 'To Screening Room', targetRoom: 'imdb_screening' },
          { direction: 'To Review Graveyard', targetRoom: 'imdb_graveyard' }
        ]
      },
      imdb_screening: {
        id: 'imdb_screening',
        name: 'Screening Room',
        description: 'Watch clips of internet history.',
        exits: [{ direction: 'Back to Lobby', targetRoom: 'imdb_lobby' }]
      },
      imdb_graveyard: {
        id: 'imdb_graveyard',
        name: 'Review Graveyard',
        description: '1-star reviews come to life.',
        exits: [
          { direction: 'Back to Lobby', targetRoom: 'imdb_lobby' },
          { direction: 'To Actor\'s Gallery', targetRoom: 'imdb_gallery' }
        ]
      },
      imdb_gallery: {
        id: 'imdb_gallery',
        name: 'Actor\'s Gallery',
        description: 'NPC actors roleplay as internet personalities.',
        exits: [
          { direction: 'Back to Graveyard', targetRoom: 'imdb_graveyard' },
          { direction: 'To Director\'s Cut', targetRoom: 'imdb_cut' }
        ]
      },
      imdb_cut: {
        id: 'imdb_cut',
        name: 'Director\'s Cut',
        description: 'Alternate versions of previous rooms.',
        exits: [
          { direction: 'Back to Actor\'s Gallery', targetRoom: 'imdb_gallery' },
          { direction: 'To Director\'s Chair', targetRoom: 'imdb_boss' }
        ]
      },
      imdb_boss: {
        id: 'imdb_boss',
        name: 'The Director\'s Chair',
        description: 'The final set.',
        exits: [{ direction: 'Flee to Director\'s Cut', targetRoom: 'imdb_cut' }]
      }
    }
  },
  darkweb: {
    id: 'darkweb',
    name: 'Dark Web',
    title: 'ERROR - CONNECTION LOST',
    themeClass: 'kingdom-darkweb',
    startingRoom: 'dark_threshold',
    rooms: {
      dark_threshold: {
        id: 'dark_threshold',
        name: 'The Threshold',
        description: 'The window opens. Everything is wrong.',
        exits: [{ direction: 'Step Forward', targetRoom: 'dark_void' }]
      },
      dark_void: {
        id: 'dark_void',
        name: 'The Void',
        description: 'There is nothing here but broken code.',
        exits: [
          { direction: 'Keep Going', targetRoom: 'dark_core' },
          { direction: 'Look Back', targetRoom: 'dark_threshold' }
        ]
      },
      dark_core: {
        id: 'dark_core',
        name: 'Malware.EXE Core',
        description: 'The source of the corruption.',
        exits: [] // Final boss room
      }
    }
  }
};
