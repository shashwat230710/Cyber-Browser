import { Enemy } from '../utils/combat';

export const ALL_ENEMIES: Record<string, Enemy> = {
  // Google
  'e_spam_goblin': { id: 'e_spam_goblin', name: 'Spam Goblin', hp: 15, maxHp: 15, attack: 4, defense: 1, hackDifficulty: 'Easy', specialAttack: 'Unsolicited Strike', level: 1 },
  'e_broken_link': { id: 'e_broken_link', name: 'Broken Link', hp: 8, maxHp: 8, attack: 2, defense: 0, hackDifficulty: 'Trivial', level: 1 },
  'e_seo_dragon': { id: 'e_seo_dragon', name: 'SEO Dragon', hp: 45, maxHp: 45, attack: 12, defense: 6, hackDifficulty: 'Hard', specialAttack: 'Keyword Stuffing', level: 3 },
  'e_duplicate_clone': { id: 'e_duplicate_clone', name: 'Duplicate Clone', hp: 20, maxHp: 20, attack: 5, defense: 2, hackDifficulty: 'Medium', level: 2 },
  'e_captcha_golem': { id: 'e_captcha_golem', name: 'CAPTCHA Golem', hp: 60, maxHp: 60, attack: 8, defense: 15, hackDifficulty: 'Medium', specialAttack: "Prove You're Human", level: 4 },
  
  // Google Boss
  'b_corrupted_search': { id: 'b_corrupted_search', name: 'The Corrupted Search Algorithm', hp: 200, maxHp: 200, attack: 18, defense: 10, hackDifficulty: 'Hard', level: 5 },

  // Yahoo
  'e_popup_ad': { id: 'e_popup_ad', name: 'Pop-up Ad', hp: 10, maxHp: 10, attack: 3, defense: 0, hackDifficulty: 'Trivial', specialAttack: 'Spawn Pop-up', level: 2 },
  'e_banner_bandit': { id: 'e_banner_bandit', name: 'Banner Bandit', hp: 25, maxHp: 25, attack: 6, defense: 3, hackDifficulty: 'Easy', specialAttack: 'Clickbait', level: 3 },
  'e_spam_bot': { id: 'e_spam_bot', name: 'Spam Bot', hp: 20, maxHp: 20, attack: 5, defense: 2, hackDifficulty: 'Easy', specialAttack: 'Enlarge Stats', level: 3 },
  'e_scammer': { id: 'e_scammer', name: 'Scammer', hp: 30, maxHp: 30, attack: 8, defense: 4, hackDifficulty: 'Medium', specialAttack: 'Steal Gold', level: 4 },

  // AltaVista
  'e_lost_page': { id: 'e_lost_page', name: 'Lost Page Wraith', hp: 18, maxHp: 18, attack: 6, defense: 2, hackDifficulty: 'Medium', level: 3 },
  'e_dead_link': { id: 'e_dead_link', name: 'Dead Link Skeleton', hp: 22, maxHp: 22, attack: 7, defense: 5, hackDifficulty: 'Easy', specialAttack: '404 Strike', level: 4 },
  'e_crawler_corruption': { id: 'e_crawler_corruption', name: 'Crawler Corruption', hp: 35, maxHp: 35, attack: 10, defense: 8, hackDifficulty: 'Hard', specialAttack: 'Web Trap', level: 5 },

  // Amazon
  'e_price_tag': { id: 'e_price_tag', name: 'Price Tag Slime', hp: 12, maxHp: 12, attack: 3, defense: 1, hackDifficulty: 'Trivial', specialAttack: 'Split', level: 4 },
  'e_review_troll': { id: 'e_review_troll', name: 'Review Troll', hp: 28, maxHp: 28, attack: 8, defense: 3, hackDifficulty: 'Medium', specialAttack: '1 Star Review', level: 5 },
  'e_warehouse_bot': { id: 'e_warehouse_bot', name: 'Warehouse Bot', hp: 50, maxHp: 50, attack: 15, defense: 10, hackDifficulty: 'Hard', specialAttack: 'Fulfillment', level: 6 },
  'e_algo_golem': { id: 'e_algo_golem', name: 'Algorithm Golem', hp: 40, maxHp: 40, attack: 12, defense: 8, hackDifficulty: 'Hard', specialAttack: 'You might also like...', level: 6 },
  
  // Amazon Boss
  'b_recommendation_engine': { id: 'b_recommendation_engine', name: 'The Recommendation Engine', hp: 180, maxHp: 180, attack: 15, defense: 12, hackDifficulty: 'Hard', level: 8 },

  // eBay
  'e_bid_sniper': { id: 'e_bid_sniper', name: 'Bid Sniper', hp: 20, maxHp: 20, attack: 7, defense: 2, hackDifficulty: 'Easy', specialAttack: 'First Strike', level: 5 },
  'e_shill_bidder': { id: 'e_shill_bidder', name: 'Shill Bidder', hp: 25, maxHp: 25, attack: 5, defense: 5, hackDifficulty: 'Medium', specialAttack: 'Inflate Defense', level: 6 },
  'e_fake_reviewer': { id: 'e_fake_reviewer', name: 'Fake Reviewer', hp: 15, maxHp: 15, attack: 4, defense: 1, hackDifficulty: 'Trivial', specialAttack: 'Self Heal', level: 4 },

  // Napster
  'e_copyright_hunter': { id: 'e_copyright_hunter', name: 'Copyright Hunter', hp: 30, maxHp: 30, attack: 10, defense: 6, hackDifficulty: 'Medium', specialAttack: 'Cease & Desist', level: 6 },
  'e_drm_lock': { id: 'e_drm_lock', name: 'DRM Lock', hp: 40, maxHp: 40, attack: 5, defense: 15, hackDifficulty: 'Hard', level: 7 },
  'e_static_gremlin': { id: 'e_static_gremlin', name: 'Static Gremlin', hp: 15, maxHp: 15, attack: 8, defense: 1, hackDifficulty: 'Easy', specialAttack: 'Noise', level: 5 },
  'e_label_lawyer': { id: 'e_label_lawyer', name: 'Label Lawyer', hp: 35, maxHp: 35, attack: 12, defense: 8, hackDifficulty: 'Medium', specialAttack: 'Subpoena', level: 7 },
  
  // Napster Boss
  'b_metallica_bot': { id: 'b_metallica_bot', name: 'The Metallica Bot', hp: 160, maxHp: 160, attack: 16, defense: 10, hackDifficulty: 'Hard', specialAttack: 'Lawsuit Barrage', level: 9 },

  // Wikipedia
  'e_vandal': { id: 'e_vandal', name: 'Vandal', hp: 20, maxHp: 20, attack: 6, defense: 2, hackDifficulty: 'Easy', specialAttack: 'Page Vandalism', level: 6 },
  'e_edit_warrior': { id: 'e_edit_warrior', name: 'Edit Warrior', hp: 30, maxHp: 30, attack: 9, defense: 5, hackDifficulty: 'Medium', specialAttack: 'Revert!', level: 7 },
  'e_citation_ghost': { id: 'e_citation_ghost', name: 'Citation Needed Ghost', hp: 25, maxHp: 25, attack: 7, defense: 0, hackDifficulty: 'Medium', specialAttack: 'Regenerate', level: 7 },
  'e_notable_skeleton': { id: 'e_notable_skeleton', name: 'Notable Person Skeleton', hp: 35, maxHp: 35, attack: 11, defense: 7, hackDifficulty: 'Hard', specialAttack: 'I AM NOTABLE', level: 8 },

  // IMDb
  'e_spoiler_beast': { id: 'e_spoiler_beast', name: 'Spoiler Beast', hp: 25, maxHp: 25, attack: 8, defense: 3, hackDifficulty: 'Medium', specialAttack: 'Stun Shock', level: 7 },
  'e_rotten_tomato': { id: 'e_rotten_tomato', name: 'Rotten Tomato', hp: 15, maxHp: 15, attack: 5, defense: 1, hackDifficulty: 'Trivial', specialAttack: 'Acid Splash', level: 6 },
  'e_cgi_abomination': { id: 'e_cgi_abomination', name: 'CGI Abomination', hp: 40, maxHp: 40, attack: 12, defense: 6, hackDifficulty: 'Hard', specialAttack: 'Random Swap', level: 8 },
  'e_oscar_golem': { id: 'e_oscar_golem', name: 'Oscar Golem', hp: 55, maxHp: 55, attack: 14, defense: 12, hackDifficulty: 'Hard', specialAttack: 'Stat Drain', level: 9 },
  
  // IMDb Boss
  'b_director': { id: 'b_director', name: 'The Director', hp: 220, maxHp: 220, attack: 18, defense: 10, hackDifficulty: 'Hard', level: 10 },

  // Dark Web (Stats are base, will be corrupted in combat)
  'b_malware': { id: 'b_malware', name: 'Malware.EXE', hp: 350, maxHp: 350, attack: 22, defense: 14, hackDifficulty: 'Hard', specialAttack: 'Corruption Wave', level: 15 }
};
