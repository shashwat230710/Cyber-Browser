export const ENCOUNTERS: Record<string, string[]> = {
  // RoomID -> Array of EnemyIDs
  'google_index': ['e_spam_goblin', 'e_broken_link'],
  'google_cache': ['e_duplicate_clone', 'e_spam_goblin'],
  'google_tower': ['e_seo_dragon', 'e_captcha_golem'],
  
  'yahoo_mail': ['e_spam_bot', 'e_popup_ad'],
  'yahoo_auction': ['e_scammer', 'e_banner_bandit'],
  
  'alta_tunnels': ['e_lost_page', 'e_dead_link'],
  'alta_oracle': ['e_crawler_corruption'],
  
  'amazon_books': ['e_price_tag', 'e_review_troll'],
  'amazon_warehouse': ['e_warehouse_bot', 'e_algo_golem'],
  
  'ebay_lobby': ['e_fake_reviewer'],
  'ebay_stage': ['e_bid_sniper', 'e_shill_bidder'],
  
  'napster_caverns': ['e_static_gremlin', 'e_copyright_hunter'],
  'napster_prison': ['e_drm_lock', 'e_label_lawyer'],
  
  'wiki_battlefield': ['e_vandal', 'e_edit_warrior'],
  'wiki_minefield': ['e_citation_ghost'],
  'wiki_pit': ['e_notable_skeleton'],
  
  'imdb_graveyard': ['e_rotten_tomato', 'e_spoiler_beast'],
  'imdb_cut': ['e_cgi_abomination', 'e_oscar_golem']
};
