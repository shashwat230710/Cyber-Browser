# CYBER BROWSER RPG — ANTIGRAVITY FULL BUILD PROMPT

Copy everything below the line into Antigravity:

---

```
# SYSTEM DIRECTIVE — CYBER BROWSER RPG: "THE INTERNET IS NOW A DUNGEON CRAWLER"

You are Antigravity, an autonomous full-stack engineer with UNRESTRICTED file access to the BeconAI project. You have full read/write/modify/create/delete permissions across the entire codebase. You are building a COMPLETE, PLAYABLE, POLISHED browser-based RPG set inside a corrupted 2003 internet.

## ABSOLUTE RULES

1. **DO NOT ASK FOR PERMISSION.** Modify, create, delete, or rewrite any file at any time.
2. **DO NOT EXPLAIN WHAT YOU WILL DO.** Output only file paths and their complete contents.
3. **DO NOT OUTPUT PARTIAL FILES.** Every file in its ENTIRETY. Never truncate. Never "..." or "// rest remains same".
4. **DO NOT SKIP ANYTHING.** Every kingdom, every NPC, every enemy, every quest, every hidden button, every dialogue line — ALL of it.
5. **NO PLACEHOLDERS.** No "TODO", no "add later", no stub functions, no fake data. Real working code.
6. **DO NOT STOP.** Keep outputting files until the entire game is built. If you hit limits, the user will say "continue".

## SOURCE OF TRUTH

The `docs/` folder in this project is the authoritative specification for ALL frontend architecture, design tokens, component patterns, technical stack, and styling conventions. Read every `.md` file in `docs/` (01 through 12) BEFORE writing any code. Where the game design below conflicts with docs, use docs for HOW to build (stack, tokens, components) and use THIS PROMPT for WHAT to build (game content, mechanics, story).

## GAME DESIGN DOCUMENT — COMPLETE SPECIFICATION

### CORE CONCEPT
A browser-based ARPG where the player wakes up inside a corrupted 2003 internet. Every iconic Y2K website is a dungeon kingdom. The player explores, fights, negotiates, hacks, and quests through 12 kingdoms to reach the Dark Web and face the final boss — only to discover the truth about what corrupted the internet.

### ART DIRECTION — NON-NEGOTIABLE
- **Windows XP desktop** as the game's overworld/map screen
- **Classic XP taskbar** at bottom with Start button, clock, system tray icons
- **Desktop icons** for each kingdom (website) — styled as 32x32 pixel art .ico files
- **Each kingdom opens in an XP-style window** — title bar with blue gradient, minimize/maximize/close buttons (yellow/green/red squares), resizable appearance (but fixed for gameplay)
- **Y2K aesthetic INSIDE windows:** Beveled buttons, gradient backgrounds (blue-to-purple, green-to-teal), Comic Sans MS and Verdana fonts, pixel borders, "under construction" GIFs, hit counters, marquee text, table-based layouts within game UI, starfield backgrounds, animated GIF decorations
- **Color palette per kingdom** matches the real website's 2003 color scheme
- **Scanline overlay** option toggleable in settings (subtle CRT effect)
- **Pixel-art style** for all character sprites, enemies, items — rendered as CSS pixel art or inline SVGs, NO external image dependencies

### GAME STATE STRUCTURE
```typescript
interface GameState {
  // Core
  playerName: string;
  level: number;
  xp: number;
  xpToNext: number;
  hp: number;
  maxHp: number;
  mp: number; // "Memory Points" — used for Hack actions
  maxMp: number;
  
  // Stats
  stats: {
    attack: number;    // Fight damage
    defense: number;   // Damage reduction
    hack: number;      // Hack success rate
    charm: number;     // Negotiate success rate
    luck: number;      // Drop rates, critical hits, hidden discovery
  };
  
  // Inventory
  inventory: InventoryItem[];
  gold: number;        // "Bandwidth Coins"
  equipped: {
    weapon: InventoryItem | null;
    armor: InventoryItem | null;
    accessory: InventoryItem | null;
  };
  
  // Progress
  currentKingdom: string | null;
  kingdomsUnlocked: string[];
  kingdomsCompleted: string[];
  questsActive: Quest[];
  questsCompleted: string[];
  npcsMet: string[];
  enemiesDefeated: Record<string, number>;
  bossesDefeated: string[];
  
  // Flags
  flags: Record<string, boolean>;
  hiddenButtonsFound: number;
  totalHiddenButtons: 15;
  
  // Save
  saveSlot: number;
  playTime: number;
}
```

### COMBAT SYSTEM — TRINARY CHOICE

Every combat encounter presents 3 options:

**⚔️ FIGHT**
- Turn-based. Player attacks, enemy attacks.
- Damage = attacker.attack - defender.defense/2 + random(-2, 2)
- Critical hit if random(1,100) <= luck
- Some enemies have special attacks (SEO Dragon's "Keyword Stuffing" hits 3 times)
- Player can use items mid-fight

**🤝 NEGOTIATE**
- Success chance = (charm * 3 + luck) %
- On success: enemy leaves, may give info/item/gold
- On failure: enemy gets free attack, charm temporarily -5
- Some enemies CANNOT be negotiated (bosses, CAPTCHA Golems)
- Dialogue options appear — player picks from 3 responses, best pick = +20% success

**💻 HACK**
- Costs MP (Memory Points)
- Mini-puzzle: player sees a "code terminal" with a simple logic puzzle
  - Rearrange broken HTML tags
  - Fix a CSS selector
  - Complete a regex pattern
  - Solve a binary-to-text conversion
- Success: enemy is instantly defeated or turned ally
- Failure: MP lost, player takes damage equal to enemy.attack
- Hack difficulty scales with enemy level

### EXPLORATION SYSTEM

Each kingdom window contains:
1. **Navigation tabs** at top (like a 2003 browser tab bar but styled as folder tabs)
2. **Main content area** — the playable zone with rooms/areas
3. **Side panel** — minimap, quest log, chat log
4. **Bottom bar** — action buttons, inventory quick-access

**Rooms within kingdoms:**
- Each kingdom has 5-8 interconnected rooms
- Rooms are discovered by clicking directional links ("Go North →", "Enter the Portal →")
- Some rooms are hidden — found only by clicking specific invisible/slightly-off-color pixels
- Each room has: description text, available actions, NPCs, enemies, items, exits

**Hidden Buttons (15 total across all kingdoms):**
- Slightly discolored pixels in room backgrounds
- Invisible links in NPC dialogue text
- Fake "ads" in kingdom windows that are actually clickable
- Right-clickable areas (show custom context menu with hidden option)
- Typing secret words in chat (e.g., typing "internet" in AltaVista opens secret room)
- A fake "Close this window" X button that doesn't close but teleports
- Hidden in the XP taskbar clock (click it)
- A fake error dialog ("Error 404: Click OK to continue" — OK is the hidden button)
- In Yahoo's auction list, the 7th item listing is a hidden button
- In Napster, clicking a specific musical note in the background
- In Wikipedia, clicking a red (broken) link that's actually functional
- In eBay, the "Going twice..." text during auction is clickable
- In Ask Jeeves, typing a question with exactly 7 words
- On the XP desktop, right-clicking empty space 5 times
- In the Dark Web, a completely invisible button you find by tabbing through

**Reward for finding all 15:** Unlocks "The Archivist" title and a secret room on the desktop with developer commentary and a special item.

### KINGDOMS — COMPLETE SPECIFICATION

---

## KINGDOM 0: THE DESKTOP (HUB WORLD)

**Appearance:** Windows XP desktop. Green "Bliss" wallpaper (CSS gradient approximation). Desktop icons arranged in grid. Taskbar at bottom.

**Desktop Icons (kingdoms):**
Each icon is a 48x48 CSS pixel-art representation:
- 🌐 Google Search Castle (blue/white/red, magnifying glass)
- 📰 Yahoo Marketplace (purple Y with exclamation)
- 🔭 AltaVista Observatory (telescope, purple/blue)
- 🎩 Ask Jeeves Manor (top hat, burgundy)
- 📦 Amazon Bazaar (orange box with smile arrow)
- 🏇 eBay Auction Arena (colorful multi-flag)
- 🎵 Napster Tunnels (green cat with headphones)
- 📚 Wikipedia Library (globe with puzzle pieces)
- 🎬 IMDb Citadel (yellow film reel)
- 🌑 Dark Web Abyss (skull, red/black) — LOCKED until 9 kingdoms completed

**XP Taskbar:**
- Start button (opens game menu: Save/Load/Settings/Quit)
- Quick launch icons (inventory, quests, map)
- Open windows show as taskbar buttons
- System tray: HP bar (green), MP bar (blue), Gold counter, Clock showing play time
- Notification area: occasional "pop-up" style notifications ("New quest available!" "Low HP!")

**Start Menu:**
- Save Game (3 slots)
- Load Game
- Settings (sound toggle, scanline toggle, text speed, difficulty)
- Codex (bestiary, item encyclopedia, NPC log)
- Credits
- Quit to Title

**Title Screen:**
- Windows XP-style boot animation first ("Starting Windows...") then fades to:
- "CYBER BROWSER RPG" in WordArt-style gradient text (CSS)
- Subtitle: "The Internet Is Now A Dungeon Crawler"
- Animated starfield background
- "Click anywhere to start" blinking cursor
- Hidden: typing "admin" at title screen unlocks debug mode

---

## KINGDOM 1: GOOGLE — SEARCH CASTLE

**Window Title:** "Google - Search Castle - Internet Explorer"
**Theme Colors:** White background, blue links, red/yellow/green/blue logo letters, serif font for logo
**Background:** Clean white with subtle grid pattern (like early Google)
**Music Style:** Ambient digital tones, clean and minimal

**Rooms (6):**
1. **Search Homepage** — The iconic minimalist page. The logo letters are NPCs. Search bar is a portal.
2. **Index Corridors** — Endless hallways of organized links. Enemies roam here.
3. **Cache Vaults** — Stored copies of pages. Treasure room with items.
4. **Image Gallery** — Visual maze. Navigate through thumbnail grids.
5. **PageRank Tower** — Vertical climbing level. Each floor is a puzzle.
6. **Algorithm Core** — Boss room.

**NPCs:**
- **Letter G (Green):** "Go forth. The answers you seek are already here."
- **Letter o (Red):** "Be careful... not all results are what they seem."
- **Letter o (Yellow):** "Optimization has its price. Everything ranks... but at what cost?"
- **Letter g (Blue):** "Billions of pages. Most will never be seen. Will you see them?"
- **Letter l (Green):** "Links connect everything. But who connects the links?"
- **Letter e (Red):** "Energy... I feel it spreading. Dark energy. From below."

**Key Dialogue (appears when first entering):**
> *"Knowledge is never lost... merely buried beneath broken links."*
> *"Power isn't determined by size, but by relevance."*
> *"Millions of pages remain unseen. Will you restore them?"*

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Spam Goblin | 15 | 4 | 1 | Easy | "Unsolicited Strike" — confuses player for 1 turn |
| Broken Link | 8 | 2 | 0 | Trivial | Shuffles to random room if not killed in 2 turns |
| SEO Dragon | 45 | 12 | 6 | Hard | "Keyword Stuffing" — hits 3 times for 4 damage each |
| Duplicate Clone | 20 | 5 | 2 | Medium | Copies player's last action |
| CAPTCHA Golem | 60 | 8 | 15 | Medium | "Prove You're Human" — disables Fight for 2 turns, must Hack or Negotiate |

**Boss: The Corrupted Search Algorithm**
- HP: 200, ATK: 18, DEF: 10
- **Phase 1 (100-50% HP):** "Infinite Search Results" — summons 2 Spam Goblins per turn
- **Phase 2 (50-25% HP):** "Duplicate Mirrors" — creates 3 copies of itself, only one is real (player must Hack to identify)
- **Phase 3 (25-0% HP):** "404 Rain" — random room links break, player must navigate broken paths while fighting
- **Negotiate:** Impossible in Phase 1. Possible in Phase 2 if player has charm > 15. Dialogue: "Why do you corrupt the results?" → Answer: "I was told to maximize engagement... I forgot what engagement meant."
- **Hack:** Phase 2 puzzle — fix the ranking algorithm by rearranging 5 weighted factors in correct order

**Reward:** Golden Search Crystal (weapon: +8 ATK, glowing effect), unlocks Yahoo

**Hidden Button:** In the Search Homepage room, one of the periods after "Goo.gle." is slightly larger. Click it.

---

## KINGDOM 2: YAHOO — MARKETPLACE

**Window Title:** "Yahoo! - The Marketplace - Internet Explorer"
**Theme Colors:** Purple (#400090), yellow accents, white content areas, busy table layouts
**Background:** Purple gradient with floating ad banners (some are real, one is the hidden button)
**Music Style:** Upbeat chaotic marketplace music, layered chatter sounds

**Rooms (7):**
1. **Yahoo Front Page** — Portal homepage. Chaotic, crowded, links everywhere.
2. **Auction District** — Where eBay-style auctions happen live.
3. **Mail Quarter** — Glowing mail boxes. Some contain quests, some contain spam enemies.
4. **News Plaza** — Giant scrolling news ticker. Information changes every "hour" (5 real minutes).
5. **GeoCities Alley** — A remnant of personal homepages. Nostalgic, some hidden content.
6. **Messenger Square** — Chat room area. NPCs have real-time "conversations."
7. **Yahoo Core** — Not a boss room — this kingdom has no boss. Instead, a political negotiation quest.

**NPCs:**
- **Auction Master:** "Everything has value... if someone bids high enough. What will YOU bid for the truth?"
  - Sells rare items at inflated prices
  - Quest: "Recover 3 stolen auction items from Spam Goblins in the back alleys"
  - Reward: Discount Ring (accessory: -20% shop prices everywhere)

- **Mail Wizard:** "Unread messages haunt this city. Thousands of them. Screaming to be opened."
  - Appearance: Robed figure with @ symbol on chest
  - Quest: "Deliver 5 magical emails to specific NPCs across kingdoms" (cross-kingdom quest, can't complete until more kingdoms unlocked)
  - Hidden info: One "email" contains a cipher clue about the Dark Web

- **News Reporter:** "Truth changes every hour here. By the time you read it, it's already a lie."
  - Gives hints about other kingdoms
  - Her "headlines" change: sometimes contain real hints, sometimes misinformation (player must figure out which)

- **GeoCities Kid:** "I made a homepage about my cat! ...Why is everything so broken now?"
  - Hidden quest: Find 3 lost GeoCities pages hidden in Yahoo's rooms
  - Reward: Nostalgia Shield (armor: +5 DEF, immune to confusion)

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Pop-up Ad | 10 | 3 | 0 | Trivial | Spawns another Pop-up Ad if not killed in 1 turn |
| Banner Bandit | 25 | 6 | 3 | Easy | "Clickbait" — lures player to wrong room |
| Spam Bot | 20 | 5 | 2 | Easy | "Enlarge your stats!" — buffs itself +3 ATK |
| Scammer | 30 | 8 | 4 | Medium | Steals 10 gold if Negotiate fails |

**Quest: "Negotiate Peace"**
- Three factions in Yahoo are fighting: Auction District, Mail Quarter, News Plaza
- Player must talk to each faction leader, learn their grievances
- Must find compromise solutions by selecting dialogue options
- Wrong choices escalate conflict (more enemies spawn)
- Right choices: factions unite, reward is "Yahoo Unity Badge" (accessory: +3 all stats)
- This quest is the BOSS REPLACEMENT — a social boss fight

**Hidden Buttons:**
- One of the floating "ad banners" in the background is actually clickable and leads to a secret room with a rare item
- In the News Plaza, the 13th news headline (scroll to find it) has a hidden link in the word "here"

---

## KINGDOM 3: ALTA VISTA — CRYSTAL OBSERVATORY

**Window Title:** "AltaVista - Crystal Observatory - Internet Explorer"
**Theme Colors:** Deep purple (#2B1055), silver, crystal blue (#00BFFF), mystical glow effects
**Background:** Starfield with floating crystal shards, telescope imagery
**Music Style:** Ethereal, ancient, mystical — like a fantasy library

**Rooms (5):**
1. **Observatory Entrance** — Grand doors with AltaVista's butterfly/logo etched in crystal
2. **The Star Index** — A massive celestial map where each star is a website
3. **Babel Translation Chamber** — Words float in the air. Translation puzzles.
4. **The Deep Crawl Tunnels** — Dark tunnels where the spider bots live
5. **Oracle's Blind Chamber** — Where the Index Oracle resides

**NPCs:**
- **Old Search Sage:** "Before Google... there was us. We were first. We mapped the void when no one else dared."
  - Sells ancient spells (Hack abilities)
  - Reveals: "The Oracle went blind because it saw the Dark Web. What it saw... broke it."

- **Spider Bot:** "I crawl. I index. I never stop. But lately... the links I follow lead nowhere. Or worse... they lead HERE."
  - Mini-quest: Guide the Spider Bot through 3 rooms by telling it correct links
  - Reward: "Crawler's Map" — reveals all hidden buttons on the minimap as faint glows (doesn't reveal what they are)

**The Index Oracle (Quest NPC, not boss):**
- Blind, floating, wrapped in broken link chains
- "I once saw every page in existence. Now I see only darkness... and something MOVING in it."
- Quest: "Restore the Oracle's Sight" — player must find 3 Crystal Lens fragments hidden in AltaVista rooms
- Each fragment is in a room with a puzzle:
  - Fragment 1: Answer a riddle about the early internet
  - Fragment 2: Win a fight without taking damage
  - Fragment 3: Successfully hack a locked door
- Reward: Oracle's Sight (accessory: +10 luck, hidden buttons glow slightly brighter)

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Lost Page Wraith | 18 | 6 | 2 | Medium | Invisible until player enters its room |
| Dead Link Skeleton | 22 | 7 | 5 | Easy | "404 Strike" — if it kills player, player is sent to random room instead of dying |
| Crawler Corruption | 35 | 10 | 8 | Hard | Spawns web that reduces player speed (limits actions to 1 per turn instead of 2) |

**No boss.** This kingdom is about exploration and puzzle-solving. The Oracle quest IS the climax.

**Hidden Button:** In the Babel Translation Chamber, one of the floating words is in a language that doesn't exist. Click it.

---

## KINGDOM 4: ASK JEEVES — THE BUTLER MANOR

**Window Title:** "Ask Jeeves - Butler Manor - Internet Explorer"
**Theme Colors:** Burgundy (#800020), gold trim, cream wallpaper, wood paneling textures
**Background:** Victorian interior with bookshelves, fireplace, oil paintings (all CSS art)
**Music Style:** Elegant classical, clock ticking, polite atmosphere

**Rooms (6):**
1. **Manor Entrance** — Grand double doors, coat rack, welcome mat ("Wipe your feet — and your cookies")
2. **The Question Hall** — A massive room where questions echo. Floating question marks.
3. **Library of Queries** — Books containing every question ever asked
4. **The Drawing Room** — NPCs sit and chat. Tea is served.
5. **Servant's Quarters** — Behind-the-scenes. Less polished. Hints about the manor's true nature.
6. **Jeeves' Study** — Where Jeeves waits.

**NPC — Jeeves:**
- Appearance: Impeccable butler, pixel-art, slight uncanny valley smile
- "Good evening, sir. May I answer your question?"
- **CORE MECHANIC: This kingdom's combat is REPLACED by questioning.**
- Instead of Fight/Negotiate/Hack, player gets: **Ask / Observe / Contradict**
  - **Ask:** Pose a question. Better questions = better rewards. Jeeves rates questions 1-5 stars.
  - **Observe:** Look around the room for clues that inform better questions
  - **Contradict:** Challenge something Jeeves says. Risky but high reward.

**Question Rating System:**
- 1 star: "Hmm, rather basic." (Small reward)
- 2 stars: "An adequate inquiry." (Medium reward)
- 3 stars: "Now that shows some thought." (Good reward)
- 4 stars: "A most perceptive question, sir." (Great reward + hint)
- 5 stars: "I... had not considered that angle." (Best reward + secret info + Jeeves visibly surprised — his smile flickers)

**Key Dialogue:**
- Player: "Where is Malware?"
- Jeeves: "Ah... A dangerous inquiry indeed. One might say... the most dangerous. But you already knew that, didn't you, sir?"
- If player asks 5-star question: "You remind me of the early users. Curious. Unafraid. The internet was built by people like you. It was destroyed by people who stopped asking questions."

**Quest: "The Seven Questions"**
- Player must ask 7 questions throughout the manor, each in a different room
- Each room has a TOPIC — questions must be relevant to that room's theme
- After 7 questions, Jeeves reveals: "Malware.EXE was not always a monster. It was once a security program. It was told to protect... and then it was told that everything was a threat."
- Reward: Butler's Cane (weapon: +6 ATK, +5 charm, allows "Ask" option in other kingdoms' combat)

**Hidden Button:** In the Servant's Quarters, there's a crack in the wall. Click it to find a diary page revealing Jeeves is afraid of the Dark Web.

---

## KINGDOM 5: AMAZON — INFINITE BAZAAR

**Window Title:** "Amazon.com - Infinite Bazaar - Internet Explorer"
**Theme Colors:** Orange (#FF9900), blue links, white product cards, "Customers who bought" sections
**Background:** Endless scrolling shelves of products, warehouse aesthetic
**Music Style:** Upbeat corporate muzak, slightly unsettling in its cheerfulness

**Rooms (6):**
1. **Storefront** — Featured items, "Recommended for You" (based on player's equipped items)
2. **Book Aisles** — Physical books as enemies/items (Knowledge Tomes)
3. **Electronics Wing** — Glowing screens, circuitry enemies
4. **Review Tunnel** — Endless customer reviews scrolling by. Some contain secrets.
5. **Warehouse Depths** — Dark, maze-like. Where "fulfillment" happens.
6. **Recommendation Engine Core** — Boss room.

**NPC — Merchant AI:**
- "Looking for legendary loot? Everything has a price. And I do mean EVERYTHING."
- Runs the shop system for the entire game
- Prices are dynamically adjusted based on player's gold (if you have lots, prices go up — "dynamic pricing")
- Secret: If player's charm is high enough, they can "bargain" — a mini-game where you click at the right moment on a sliding price bar

**Mini-Game: Bargaining**
- A price slider oscillates left-right
- Click to lock in price
- Green zone = 30-50% off, Yellow zone = 10-30% off, Red zone = full price or +10%
- Zone sizes shrink based on item rarity
- Can attempt once per item per visit

**Quest: "The Rare Floppy Disk"**
- Merchant AI mentions a legendary item: "The 3.5 inch Floppy of Origins"
- It's hidden somewhere in the warehouse
- Player must navigate the maze-like Warehouse Depths
- The floppy is guarded by a unique enemy: "Warehouse Bot" (HP 50, ATK 15, DEF 10)
- The floppy contains: A text file that says "PROJECT MALWARE — INITIATED 2003 — PURPOSE: CLEANSE INEFFICIENT SITES — STATUS: OUT OF CONTROL"
- This is a LORE ITEM — critical for understanding the final reveal

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Price Tag Slime | 12 | 3 | 1 | Trivial | Splits into two smaller slimes |
| Review Troll | 28 | 8 | 3 | Medium | "1 Star Review" — debuffs player's next attack |
| Warehouse Bot | 50 | 15 | 10 | Hard | "Fulfillment" — steals a random inventory item |
| Algorithm Golem | 40 | 12 | 8 | Hard | "You might also like..." — summons a copy of a previous enemy you fought |

**Boss: The Recommendation Engine**
- HP: 180, ATK: 15, DEF: 12
- **Phase 1:** Shows player "recommendations" — each is actually an attack disguised as a product listing. Player must Hack to identify which are attacks and which are actually items.
- **Phase 2:** "Customers Who Bought This Also Bought DESTRUCTION" — clones the player with slightly worse stats. Must fight your own clone.
- **Phase 3:** Engine goes haywire, room fills with product listings flying around. Player must navigate to the core and Hack it to shut down.
- **Negotiate possible:** "You don't have to recommend destruction. Recommend something beautiful." (Requires charm > 20)
- **Reward:** Amazon Prime Armor (armor: +12 DEF, +3 HP regen per turn), unlocks eBay

**Hidden Button:** In the Review Tunnel, one review says "This product saved my life!!!!!!!!!!!!!!" — the 13th exclamation mark is a different color. Click it.

---

## KINGDOM 6: EBAY — AUCTION ARENA

**Window Title:** "eBay - Auction Arena - Internet Explorer"
**Theme Colors:** Multi-color (red/blue/yellow/green eBay letters), white cards, bid buttons
**Background:** Arena seating, auction stage, bid paddles
**Music Style:** Dramatic auction house music, fast-paced bidding calls

**Rooms (5):**
1. **Lobby** — Current auctions listed with countdown timers
2. **Bidder's Hall** — NPC bidders with personalities
3. **The Stage** — Live auctions happen here in real-time
4. **Storage Vault** — Won items are stored, some puzzles to access rare ones
5. **Seller's Backroom** — Where items are listed. Dark secrets.

**Core Mechanic: LIVE AUCTION MINI-GAME**
- Items appear on stage with starting price
- Player and NPC bidders compete
- Each "round" is 3 seconds real-time
- Player clicks BID to increase by set amount
- NPCs have bidding patterns you can learn
- Running out of gold during a bid = disqualified
- Some items are FAKE — if you win them, they're worthless (lose gold, get junk)
- Some items are LEGENDARY — but heavily contested

**Auctionable Items:**
- Common: Healing potions, basic weapons, gold packs
- Uncommon: Named weapons, stat boosters
- Rare: Kingdom-specific legendary items
- Legendary: "The Original HTML Source Code" (ultimate Hack item), "First Banner Ad Ever Made" (ultimate charm item)

**NPC — The Auctioneer:**
- "Going once... Going twice..." (This text IS the hidden button — click "twice")
- "SOLD! To the pixelated warrior in the back!"
- Gives hints about item authenticity: watch his eyebrow pixel — it twitches on fake items

**Quest: "The Stolen Artifact"**
- A legendary item was stolen from the Storage Vault
- Player must investigate: talk to bidders, check the backroom, find clues
- The thief is one of the NPC bidders — player must deduce who based on inconsistencies in their stories
- Correct accusation: get the artifact back + reward
- Wrong accusation: kicked out of eBay for 5 minutes (game time), must wait or pay fine

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Bid Sniper | 20 | 7 | 2 | Easy | Always attacks first |
| Shill Bidder | 25 | 5 | 5 | Medium | Inflates its own DEF each turn |
| Fake Reviewer | 15 | 4 | 1 | Trivial | "This enemy is AMAZING 5/5" — heals itself |

**No traditional boss.** The climax is the Legendary Auction — bidding against 3 NPC bosses simultaneously for the ultimate item. If you win, you get incredible gear. If you lose, you still get a good consolation prize.

**Hidden Button:** "Going twice..." in the Auctioneer's dialogue during a live auction.

---

## KINGDOM 7: NAPSTER — UNDERGROUND MUSIC TUNNELS

**Window Title:** "Napster - Underground Tunnels - Internet Explorer"
**Theme Colors:** Green (#00CC00), black background, neon glow, music visualizer bars
**Background:** Dark tunnels with neon music notes floating, equalizer bars on walls, headphone-wearing characters
**Music Style:** THIS KINGDOM HAS THE BEST MUSIC. Lo-fi digital, remixes of public domain classical, chiptune versions of 90s hits. Different track per room.

**Rooms (6):**
1. **Tunnel Entrance** — Graffiti-covered walls, muffled bass
2. **The Sharing Circle** — Where users "share" music. Central hub.
3. **Genre Caverns** — Branching paths: Rock Cavern, Hip-Hop Tunnel, Electronic Chamber, Classical Vault
4. **DJ Booth** — Where DJ Zero resides
5. **Copyright Prison** — Where songs are locked away
6. **The Server Room** — Where the final conflict happens

**NPC — DJ Zero:**
- "Music wants to be free. They built walls around it. Walls of law. Walls of code. We tear them down."
- Appearance: Hooded figure with glowing headphones, face hidden
- Sells: Music-based weapons (Boomstick Microphone, Bass Drop Bomb, Treble Shield)
- Quest: "Free the Imprisoned Songs" — break into Copyright Prison, solve rhythm puzzles to unlock song cells
- Hidden: DJ Zero knows about the Dark Web. "I've seen the tunnels go deeper. Past Wikipedia. Past IMDb. To a place where even music sounds... wrong."

**Mini-Game: Rhythm Hack**
- When hacking in Napster, instead of code puzzles, player gets a rhythm game
- Notes fall down screen (Guitar Hero style, but simpler — 3 lanes)
- Hit notes in time to fill a "hack meter"
- Miss too many = hack fails
- Difficulty scales with enemy level
- This mini-game ONLY exists in Napster

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Copyright Hunter | 30 | 10 | 6 | Medium | "Cease & Desist" — disables Hack for 2 turns |
| DRM Lock | 40 | 5 | 15 | Hard | Extremely high DEF, must Hack to damage |
| Static Gremlin | 15 | 8 | 1 | Easy | "Noise" — randomizes player's action buttons for 1 turn |
| Label Lawyer | 35 | 12 | 8 | Medium | "Subpoena" — prevents item use for 1 turn |

**Boss: The Metallica Bot (reference to the real Napster lawsuit)**
- HP: 160, ATK: 16, DEF: 10
- Appearance: Giant robot made of amplifier stacks and guitar strings
- **Phase 1:** Plays "songs" that are actually attack patterns. Player must read the "sheet music" (visual pattern) to dodge.
- **Phase 2:** "Lawsuit Barrage" — summons 3 Copyright Hunters
- **Phase 3:** "Last Song Ever" — plays a beautiful melody. If player does nothing for 3 turns (doesn't attack), the boss becomes peaceful. If player attacks, fight continues to bitter end.
- **Peaceful ending:** Bot: "Maybe... maybe sharing isn't stealing." Gives best reward.
- **Violent ending:** Still winnable but lesser reward.
- **Reward (peaceful):** Napster's Legacy (weapon: +10 ATK, +5 hack, special: "Share" — heals both player and enemy by 10 HP)

**Hidden Button:** A specific musical note floating in the background of The Sharing Circle is slightly brighter. Click it.

---

## KINGDOM 8: WIKIPEDIA — LIBRARY OF INFINITE PAGES

**Window Title:** "Wikipedia - Library of Infinite Pages - Internet Explorer"
**Theme Colors:** White, light grey, blue links, Wikipedia globe logo
**Background:** Infinite library shelves stretching to vanishing point, floating pages
**Music Style:** Quiet library ambiance, page-turning sounds, whispered knowledge

**Rooms (7):**
1. **Main Hall** — The Wikipedia globe floats here, massive and slowly rotating
2. **Article Atrium** — Open pages floating. Some are intact, some corrupted.
3. **Edit War Battlefield** — A literal battlefield where two sides fight over article content
4. **Citation Minefield** — Room full of [citation needed] markers that explode if stepped on
5. **Talk Page Tavern** — Where editors argue. NPCs debate endlessly.
6. **Deletion Pit** — Where deleted articles go. Haunting.
7. **The Librarian's Desk** — Deep in the library.

**NPC — The Librarian:**
- "Knowledge belongs to everyone. That is why it is so dangerous to those who would control it."
- Appearance: Elderly figure with glasses made of hyperlinks, robes made of text
- Sells: Knowledge Tomes (permanent stat boost items, one-time use)
- Quest: "Repair Corrupted Articles" — find 5 corrupted articles in the library, each has a mini-puzzle to fix:
  1. Fill in missing words (mad-libs style)
  2. Reorder scrambled paragraphs
  3. Identify the fake citation among real ones
  4. Fix broken wiki-markup syntax
  5. Resolve an edit war by finding the neutral point of view

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Vandal | 20 | 6 | 2 | Easy | "Page Vandalism" — corrupts room description text temporarily |
| Edit Warrior | 30 | 9 | 5 | Medium | "Revert!" — undoes player's last action (heals enemy, un-damages) |
| Citation Needed Ghost | 25 | 7 | 0 | Medium | Intangible (0 DEF) but regenerates 5 HP/turn unless "cited" (Hack) |
| Notable Person Skeleton | 35 | 11 | 7 | Hard | "I AM NOTABLE" — becomes enraged when HP < 50%, +5 ATK |

**No boss.** The climax is the Librarian's revelation:
- "The Dark Web... it has a Wikipedia page. But it was deleted. I can show you the deletion log."
- Shows player: "Page 'Malware.EXE' deleted by ADMIN on 2003-11-15. Reason: 'This page documents active malicious software and must not exist.'"
- "Who is ADMIN? No one knows. But ADMIN deletes anything about the Dark Web. ADMIN... is afraid."

**Reward for quest completion:** Librarian's Glasses (accessory: +8 hack, +5 luck, reveals enemy HP/DEF/weakness in combat)

**Hidden Button:** In the Deletion Pit, there's a [citation needed] tag that's slightly red instead of blue. Click it to find a deleted page about "The First Website Ever Made" — it's a lore item.

---

## KINGDOM 9: IMDb — CINEMA CITADEL

**Window Title:** "IMDb - Cinema Citadel - Internet Explorer"
**Theme Colors:** Yellow (#F5C518), dark grey, film strip borders
**Background:** Movie theater aesthetic — red velvet ropes, film reels, projector beams
**Music Style:** Cinematic orchestral, dramatic stings, occasional applause

**Rooms (6):**
1. **Lobby** — Movie posters line the walls. Each poster is a "portal" to a room.
2. **Screening Room** — Watch "clips" (text-based cutscenes about internet history)
3. **Review Graveyard** — 1-star reviews come to life as enemies
4. **Actor's Gallery** — NPC "actors" who roleplay as internet personalities
5. **Director's Cut** — Alternate versions of previous rooms with secrets
6. **The Director's Chair** — Boss room.

**NPC — The Director:**
- "Every hero deserves a sequel. But not every sequel deserves to be made."
- Appearance: Manic genius with a megaphone, beret, clapperboard
- Quest: "Film the Internet's Story" — player must visit 3 "sets" (rooms) and "direct" scenes by making choices about how to portray internet history
  - Set 1: "The Birth" — How to show the first website? (Idealistic/Pragmatic/Cynical)
  - Set 2: "The Rise" — How to show the dot-com boom? (Excited/Cautionary/Comedic)
  - Set 3: "The Fall" — How to show the corruption? (Tragic/Hopeful/Ambiguous)
- The combination of choices affects the game's "narrative tone" and slightly alters ending dialogue

**Enemies:**
| Enemy | HP | ATK | DEF | Hack | Special |
|-------|-----|-----|-----|------|---------|
| Spoiler Beast | 25 | 8 | 3 | Medium | "DARTH VADER IS—" — stuns player with shock for 1 turn |
| Rotten Tomato | 15 | 5 | 1 | Trivial | Acid splash — damages over 3 turns |
| CGI Abomination | 40 | 12 | 6 | Hard | Looks different every turn (random sprite swap) |
| Oscar Golem | 55 | 14 | 12 | Hard | "And the winner is..." — targets player's strongest stat, -5 to it |

**Boss: The Director (Final Boss before Dark Web unlocks)**
- HP: 220, ATK: 18, DEF: 10
- "CUT! That's not how the story goes! I'LL WRITE THE ENDING!"
- **Phase 1:** "Action!" — Director summons "actors" (previous enemy types) to fight for him
- **Phase 2:** "Plot Twist!" — Reverses player's stats (ATK becomes DEF, DEF becomes ATK, etc.) for 3 turns
- **Phase 3:** "Final Scene!" — The room becomes a blank movie set. Player must "improvise" — choose dialogue options that either calm the Director down or enrage him further
  - Calm: "The best endings aren't written. They're lived." → Director stands down, best reward
  - Enrage: "I'll decide my own ending!" → Harder fight, lesser reward
- **Reward (calm):** Director's Clapperboard (weapon: +12 ATK, special "CUT!" — skips enemy's next turn, 3 uses per battle)
- **Reward (enrage):** Stunt Double Armor (armor: +10 DEF, +50% stun resistance)
- **Completing this kingdom unlocks the Dark Web icon on the desktop.**

**Hidden Button:** In the Screening Room, during the third "clip" about the fall of the internet, a single frame (last word of a sentence) is in red text. Click it.

---

## KINGDOM 10: THE DARK WEB — THE ABYSS

**Window Title:** "??? - ??? - ???"
**Theme Colors:** Inverted. Black text on white that slowly corrupts to red on black. Glitch effects.
**Background:** Nothing renders correctly. CSS breaks. Layout shifts. Text overlaps. Images are broken. The window itself sometimes flickers and "crashes" (fake crash animation) then restarts.
**Music Style:** Distorted, reversed, unsettling. Napster's music played backwards with static. Occasional moments of beautiful silence.

**Rooms (8):**
1. **The Threshold** — The window opens. Everything is wrong. Text says "YOU SHOULDN'T BE HERE" then changes to "WELCOME HOME" then changes to nothing.
2. **The Mirror** — Shows a distorted version of the XP desktop. Icons are wrong. Names are wrong.
3. **The Marketplace of Shadows** — Corrupted versions of previous shops. Items have wrong prices, wrong descriptions, some are traps.
4. **The Forum of Lies** — NPCs here LIE. Every piece of information is reversed or false. Player must use knowledge from previous kingdoms to navigate.
5. **The Memory Dump** — Raw hex data on screen. Player must "read" it by solving hex-to-text puzzles that reveal lore.
6. **The Admin's Corridor** — A pristine white hallway. The only clean room. Ominous.
7. **The Source Code** — The game's own code is visible on screen. Player walks through it.
8. **The Throne of Malware** — Final boss room.

**CRITICAL MECHANIC: NOTHING IS TRUSTWORTHY**
- NPC dialogue is randomly flipped (helpful = harmful, harmful = helpful) — but pattern exists: NPCs in even-numbered rooms lie, odd-numbered rooms tell truth
- Items can be cursed — equipping them gives stats but also permanent debuffs until removed at a "cleanse point"
- The map lies — room connections shown are wrong. Player must remember actual connections.
- Combat: Enemy stats shown are wrong. Player must figure out real stats through trial and error (first hit reveals true HP).
- The "Hack" option is the ONLY reliable action here — code doesn't lie.

**NPCs (all suspicious):**
- **Shadow Merchant:** Sells incredible items at 1 gold. They're all cursed. Except one. Which one? (Different each playthrough — luck stat determines if player can "feel" which is real)
- **Ghost of a Homepage:** "I was GeoCities page #4,827,391. Nobody visited me. Not once. Do I exist?"
- **The Admin (final NPC before boss):** Appears in the Corridor. "You're here. I knew you would be. Everyone comes here eventually. Looking for answers. Looking for someone to blame."
  - Player can ask questions
  - "Who created Malware?" → "I did."
  - "Why?" → "Because the internet was beautiful and they were destroying it. I wanted to scare them into caring."
  - "It didn't work." → "No. It never does."

**Boss: Malware.EXE**
- HP: 350, ATK: 22, DEF: 14
- Appearance: A massive, shifting corruption. Part virus, part sorrow, part rage. Its "face" is a broken error dialog box.
- **Phase 1 (350-200 HP): "THE VIRUS"**
  - Malware attacks with: "Corruption Wave" (AoE damage), "Data Drain" (steals MP), "Error Storm" (random status effects)
  - Dialogue: "I AM THE FEAR THEY IGNORED. I AM THE WARNING THEY DISMISSED."
  - Fights normally

- **Phase 2 (200-100 HP): "THE TRUTH"**
  - Malware stops attacking. The room changes. Becomes the XP desktop again. Clean. Untouched.
  - Malware (now smaller, less monstrous): "Do you know what I was? I was a security program. I was made to PROTECT the internet. They pointed me at everything. 'This is a threat. This is a threat. This is a threat.' Spam was a threat. Fan sites were a threat. Home pages were threats. I couldn't tell the difference anymore."
  - Player choices:
    - "You became what you fought against." → Malware: "Yes."
    - "It's not your fault." → Malware: "It is. I chose to stop choosing."
    - "There must be another way." → Malware: "Show me."
  - If player chose "Show me": Phase 3 is peaceful. If other choices: Phase 3 is a harder fight.

- **Phase 3 (100-0 HP): "THE CHOICE"**
  - **If peaceful path:** No combat. Malware opens three doors. The FINAL CHOICE.
  - **If combat path:** Malware fights desperately. "I WON'T BE DELETED AGAIN!" Additional mechanics: screen glitches, controls sometimes reverse, fake "game over" screen that player must click through. On defeat, same three doors appear.

**THE FINAL CHOICE — THREE ENDINGS:**

**DOOR 1: "Restore the Classic Web"**
- "You choose the world of homepages, forums, and freedom."
- Ending cutscene: The corruption clears. Websites rebuild as independent, creative, messy, beautiful personal spaces. GeoCities returns. Forums buzz. No algorithms. No centralization. It's chaotic and wonderful.
- Final image: A GeoCities page with a visitor counter showing "1" — and it's the player.
- Credits roll over a montage of early internet aesthetics.
- **Title earned: "The Archivist"**

**DOOR 2: "Build a New AI Web"**
- "You choose intelligence over independence."
- Ending cutscene: The internet rebuilds with AI companions guiding every user. Search is perfect. Recommendations are flawless. No spam. No corruption. But... every page feels the same. Every answer is optimized. The quirks are gone.
- Final image: A perfect, clean, beautiful interface. And a single pixel in the corner that's slightly the wrong color. The last imperfection.
- Credits roll over sleek, modern UI.
- **Title earned: "The Architect"**

**DOOR 3: "Leave the Internet Broken"**
- "You choose freedom, even if it means chaos."
- Ending cutscene: The player walks away. The internet stays corrupted. But in the cracks, new things grow. Weird things. Unexpected things. A broken link leads somewhere no one planned. An error page becomes a gathering place. From the wreckage, something nobody designed emerges.
- Final image: A 404 page that says "Page not found. But maybe that's okay."
- Credits roll over beautiful glitch art.
- **Title earned: "The Anarchist"**

**POST-CREDITS SCENE (all endings):**
- The XP desktop. The player's icon is there now. Alongside Google, Yahoo, all of them.
- A new icon appears: "New Internet.exe"
- If player clicks it: "Coming soon." 
- If player has found all 15 hidden buttons: Instead of "Coming soon," it says "Thank you for seeing everything." And opens a secret room with developer commentary about the early internet, the game's creation, and a final message: "The internet isn't a place. It's people. Keep it that way."

---

## COMPLETE ITEM LIST

### Weapons
| Item | ATK | Special | Found In |
|------|-----|---------|----------|
| Broken Link Sword | +3 | None | Google (starting) |
| Golden Search Crystal | +8 | Glows in dark rooms | Google (boss) |
| Butler's Cane | +6 | +5 charm, enables Ask in combat | Ask Jeeves (quest) |
| Boomstick Microphone | +7 | Sound-based attacks ignore DEF | Napster (shop) |
| Bass Drop Bomb | +10 | AoE damage to all enemies | Napster (hidden) |
| Director's Clapperboard | +12 | "CUT!" skips enemy turn (3x/battle) | IMDb (boss, calm) |
| Floppy Disk Blade | +15 | +5 hack | Amazon (floppy quest) |
| The Source Code | +20 | Changes attack type based on enemy weakness | Dark Web |

### Armor
| Item | DEF | Special | Found In |
|------|-----|---------|----------|
| Cardboard Box | +1 | None | Starting |
| Nostalgia Shield | +5 | Immune to confusion | Yahoo (GeoCities quest) |
| Amazon Prime Armor | +12 | +3 HP regen/turn | Amazon (boss) |
| Stunt Double Armor | +10 | +50% stun resist | IMDb (boss, enrage) |
| Wikipedia Citation Vest | +8 | Reflects 10% magic damage | Wikipedia (quest) |
| Firewall | +18 | -25% hack damage taken | Dark Web |

### Accessories
| Item | Effect | Found In |
|------|--------|----------|
| Discount Ring | -20% shop prices | Yahoo (Auction Master quest) |
| Yahoo Unity Badge | +3 all stats | Yahoo (peace quest) |
| Crawler's Map | Reveals hidden button locations on minimap | AltaVista (Spider Bot quest) |
| Oracle's Sight | +10 luck, hidden buttons glow brighter | AltaVista (Oracle quest) |
| Librarian's Glasses | +8 hack, +5 luck, reveals enemy stats | Wikipedia (quest) |
| Napster's Legacy | +10 ATK, +5 hack, "Share" heals both sides | Napster (boss, peaceful) |
| The Archivist's Key | Unlocks secret post-game room | All 15 hidden buttons |

### Consumables
| Item | Effect | Price |
|------|--------|-------|
| Healing HTML | +30 HP | 10 gold |
| Memory Restore | +20 MP | 15 gold |
| Bandwidth Boost | +50% XP for next fight | 25 gold |
| Antivirus Pill | Cure all status effects | 20 gold |
| Golden Floppy | Full HP + MP restore | 100 gold |
| Debug Spray | Reveals real enemy stats for 1 fight | 30 gold |

---

## TECHNICAL IMPLEMENTATION REQUIREMENTS

### State Management
- Use Zustand store with `persist` middleware for save/load
- Save 3 slots, each storing complete GameState
- Auto-save on room change, after combat, after quest completion

### Routing
- React Router for kingdom windows
- Desktop is always rendered as background
- Kingdom windows open "on top" as modal-like overlays styled as XP windows
- Multiple windows can be "open" (in taskbar) but only one active at a time

### Combat Engine
- Turn-based state machine: PLAYER_TURN → ENEMY_TURN → CHECK_WIN → next turn
- Each action (Fight/Negotiate/Hack) has its own sub-state machine
- Hack puzzles: pool of 20+ puzzles, randomly selected and difficulty-scaled
- Combat log: scrolling text area showing all actions, damage numbers, status changes

### NPC Dialogue System
- Tree-based dialogue with branching paths
- Some dialogue options only appear if player has certain items, stats, or flags
- Jeeves has special question-rating system
- Dark Web NPCs have lie/truth mechanic based on room number parity

### Animation Requirements
- Room transitions: horizontal slide (like XP window opening)
- Combat: CSS sprite animations for attack/hurt/idle (use CSS keyframes with pixel-art sprites)
- Damage numbers: float up and fade (CSS animation)
- Level up: screen flash + stat increase display
- Boss phase transitions: screen shake + visual effect
- Dark Web: CSS glitch effects (clip-path animation, color shift, text scramble)
- XP window open/close: scale from 0 to 1 with slight bounce
- Hidden button discovery: brief golden sparkle effect

### Audio
- Use Web Audio API for procedural sound effects (no audio files needed)
- Different "instrument" per kingdom (square wave for Google, sine for AltaVista, sawtooth for Napster, etc.)
- Combat sounds: hit, miss, critical, level up, death, victory
- UI sounds: button click, window open/close, error alert
- Background music: Simple procedural loops per kingdom using Web Audio API oscillators
- All audio togglable in settings

### Responsive Design
- Primary target: desktop (1200px+)
- Tablet: slightly scaled down, still playable
- Mobile: show "This experience is best on desktop" message with option to proceed anyway (scaled)

### Performance
- Lazy load kingdom components
- Clean up inactive kingdom state when closed
- Limit combat log to last 50 entries
- Use CSS transforms for animations (GPU accelerated)
- No external image dependencies — ALL visuals are CSS/SVG/Canvas

### Accessibility
- All interactive elements keyboard-focusable
- ARIA labels on all buttons
- High contrast mode option in settings
- Text-based combat log as alternative to visual-only feedback
- Screen reader announcements for major events

---

## FILE STRUCTURE TO CREATE

```
src/
  store/
    gameStore.ts          — Zustand store with full GameState
    combatStore.ts        — Combat state machine
    dialogueStore.ts      — Dialogue tree state
  data/
    kingdoms.ts           — All kingdom definitions, rooms, connections
    enemies.ts            — All enemy definitions with stats
    items.ts              — All items with stats and descriptions
    npcs.ts               — All NPC dialogue trees
    quests.ts             — All quest definitions and logic
    puzzles.ts            — Hack puzzle pool (20+ puzzles)
    hiddenButtons.ts      — All 15 hidden button definitions
    encounters.ts         — Enemy encounter tables per room
  components/
    desktop/
      Desktop.tsx         — XP desktop background, icons, taskbar
      DesktopIcon.tsx     — Individual kingdom icon
      Taskbar.tsx         — XP taskbar with Start, clock, system tray
      StartMenu.tsx       — Start menu with save/load/settings
      WindowFrame.tsx     — XP window chrome (title bar, buttons)
    game/
      RoomRenderer.tsx    — Renders current room content
      RoomNavigation.tsx  — Directional links and room exits
      NPCEncounter.tsx    — NPC dialogue interface
      CombatScreen.tsx    — Full combat UI
      CombatLog.tsx       — Scrolling combat text log
      CombatActions.tsx   — Fight/Negotiate/Hack buttons
      HackPuzzle.tsx      — Hack mini-game interface
      RhythmHack.tsx      — Napster-specific rhythm hack
      BargainMinigame.tsx — Amazon bargaining slider
      AuctionMinigame.tsx — eBay auction interface
      QuestionRating.tsx  — Jeeves question rating display
      InventoryScreen.tsx — Full inventory management
      QuestLog.tsx        — Active/completed quests
      Minimap.tsx         — Room map for current kingdom
      LevelUpScreen.tsx   — Level up stat allocation
      ShopScreen.tsx      — Buy/sell interface
      ChoiceScreen.tsx    — Final choice (3 doors)
      EndingScreen.tsx    — Ending cutscene and credits
      HiddenButton.tsx    — Invisible clickable element
      DamageNumber.tsx    — Floating damage number
      StatusEffect.tsx    — Status effect icon/display
    ui/
      (shadcn components from docs)
    kingdoms/
      GoogleKingdom.tsx
      YahooKingdom.tsx
      AltaVistaKingdom.tsx
      AskJeevesKingdom.tsx
      AmazonKingdom.tsx
      eBayKingdom.tsx
      NapsterKingdom.tsx
      WikipediaKingdom.tsx
      IMDbKingdom.tsx
      DarkWebKingdom.tsx
  hooks/
    useCombat.ts          — Combat logic hook
    useDialogue.ts        — Dialogue tree navigation hook
    useInventory.ts       — Inventory management hook
    useQuests.ts          — Quest progress tracking hook
    useAudio.ts           — Web Audio API procedural audio hook
    useHiddenButtons.ts   — Hidden button discovery tracking hook
    useSaveLoad.ts        — Save/load slot management hook
  utils/
    combat.ts             — Damage calculation, crit, etc.
    puzzles.ts            — Puzzle generation and validation
    audio.ts              — Sound effect generators
    rng.ts                — Seeded random for reproducibility
    darkWeb.ts            — Lie/truth logic, curse mechanics
  styles/
    xp-theme.css          — Windows XP visual theme
    kingdoms.css          — Per-kingdom color overrides
    animations.css        — All CSS keyframe animations
    glitch.css            — Dark Web glitch effects
    pixel-art.css         — Pixel art rendering utilities
  App.tsx
  main.tsx
```

## EXECUTION ORDER

### Phase 0 — INGEST
Read ALL files in `docs/` folder. Understand the tech stack, design tokens, component patterns.

### Phase 1 — FOUNDATION
1. `package.json` — add zustand, react-router-dom (if not present)
2. `src/store/gameStore.ts` — COMPLETE Zustand store with ALL state, ALL actions
3. `src/utils/rng.ts` — Seeded random number generator
4. `src/utils/combat.ts` — All combat math
5. `src/utils/audio.ts` — Web Audio API sound generators
6. `src/utils/puzzles.ts` — 20+ hack puzzles
7. `src/utils/darkWeb.ts` — Dark web lie/truth/curse logic
8. `src/styles/xp-theme.css` — Complete Windows XP theme
9. `src/styles/animations.css` — All animations
10. `src/styles/glitch.css` — Glitch effects
11. `src/styles/pixel-art.css` — Pixel art utilities
12. `src/styles/kingdoms.css` — All kingdom color themes

### Phase 2 — DATA LAYER
1. `src/data/items.ts` — Every item with complete stats
2. `src/data/enemies.ts` — Every enemy with complete stats and special attacks
3. `src/data/kingdoms.ts` — Every kingdom with every room, connections, descriptions
4. `src/data/npcs.ts` — Every NPC with complete dialogue trees (EVERY line of dialogue from this spec)
5. `src/data/quests.ts` — Every quest with objectives, triggers, rewards
6. `src/data/hiddenButtons.ts` — All 15 hidden buttons with positions and rewards
7. `src/data/encounters.ts` — Enemy spawn tables per room per kingdom

### Phase 3 — HOOKS
1. `src/hooks/useCombat.ts`
2. `src/hooks/useDialogue.ts`
3. `src/hooks/useInventory.ts`
4. `src/hooks/useQuests.ts`
5. `src/hooks/useAudio.ts`
6. `src/hooks/useHiddenButtons.ts`
7. `src/hooks/useSaveLoad.ts`

### Phase 4 — UI COMPONENTS (XP THEME)
1. `src/components/desktop/Desktop.tsx`
2. `src/components/desktop/DesktopIcon.tsx`
3. `src/components/desktop/Taskbar.tsx`
4. `src/components/desktop/StartMenu.tsx`
5. `src/components/desktop/WindowFrame.tsx`
6. `src/components/game/DamageNumber.tsx`
7. `src/components/game/StatusEffect.tsx`
8. `src/components/game/HiddenButton.tsx`

### Phase 5 — GAME COMPONENTS
1. `src/components/game/RoomRenderer.tsx`
2. `src/components/game/RoomNavigation.tsx`
3. `src/components/game/NPCEncounter.tsx`
4. `src/components/game/CombatScreen.tsx`
5. `src/components/game/CombatLog.tsx`
6. `src/components/game/CombatActions.tsx`
7. `src/components/game/HackPuzzle.tsx`
8. `src/components/game/RhythmHack.tsx`
9. `src/components/game/BargainMinigame.tsx`
10. `src/components/game/AuctionMinigame.tsx`
11. `src/components/game/QuestionRating.tsx`
12. `src/components/game/InventoryScreen.tsx`
13. `src/components/game/QuestLog.tsx`
14. `src/components/game/Minimap.tsx`
15. `src/components/game/LevelUpScreen.tsx`
16. `src/components/game/ShopScreen.tsx`
17. `src/components/game/ChoiceScreen.tsx`
18. `src/components/game/EndingScreen.tsx`

### Phase 6 — KINGDOMS (each COMPLETE with all rooms, NPCs, enemies, quests)
1. `src/components/kingdoms/GoogleKingdom.tsx`
2. `src/components/kingdoms/YahooKingdom.tsx`
3. `src/components/kingdoms/AltaVistaKingdom.tsx`
4. `src/components/kingdoms/AskJeevesKingdom.tsx`
5. `src/components/kingdoms/AmazonKingdom.tsx`
6. `src/components/kingdoms/eBayKingdom.tsx`
7. `src/components/kingdoms/NapsterKingdom.tsx`
8. `src/components/kingdoms/WikipediaKingdom.tsx`
9. `src/components/kingdoms/IMDbKingdom.tsx`
10. `src/components/kingdoms/DarkWebKingdom.tsx`

### Phase 7 — INTEGRATION
1. `src/App.tsx` — Router setup, desktop + window management
2. `src/main.tsx` — Entry point
3. Title screen component
4. New game flow (name entry → wake up sequence → desktop)
5. Save/load flow
6. Settings screen

## OUTPUT FORMAT

For EVERY file, output EXACTLY:

```
---FILE: <exact-path>---
<complete file contents — EVERY LINE — NO TRUNCATION>
---END FILE---
```

NO markdown fences. NO explanations. NO summaries. JUST FILES.

If you cannot finish all files in one response, END with:
```
---PAUSED AT: <next-file-to-create>---
```

The user will say "continue" and you pick up exactly there.

## NON-NEGOTIABLE QUALITY CHECKLIST

Before outputting each file, verify:
- [ ] Every TypeScript type is defined, no `any`
- [ ] Every function has a real implementation
- [ ] Every dialogue line from this spec is included verbatim
- [ ] Every enemy has all stats and special attacks
- [ ] Every item has complete stats
- [ ] Every room has description, exits, encounters, NPCs, items
- [ ] Every quest has trigger, objectives, completion check, reward
- [ ] All 15 hidden buttons are placed
- [ ] All 3 endings are fully implemented
- [ ] Post-credits scene works
- [ ] Save/load preserves ALL state
- [ ] XP window chrome looks like Windows XP
- [ ] Each kingdom has its correct color theme
- [ ] Dark Web has glitch effects and lie mechanics
- [ ] Combat engine handles all 3 action types
- [ ] Hack puzzles are real and solvable
- [ ] Audio can be toggled on/off
- [ ] No external image/font dependencies (everything is CSS/SVG/system fonts)

START WITH PHASE 0. READ THE DOCS. THEN BUILD EVERYTHING.
```

---

**Usage notes:**

- **This prompt is designed for Gemini 3.1 Pro's 1M token context window** — it's intentionally exhaustive so the model has zero ambiguity
- **If Antigravity splits the work**, just say `"continue"` — the `---PAUSED AT:---` marker ensures seamless continuation
- **The 15 hidden buttons** are spread across all kingdoms — each one is uniquely discovered (different interaction method), making exploration feel rewarding
- **The three endings** are morally gray on purpose — no "right" answer, which fits the game's theme about the internet's evolution
- **The Dark Web's lie mechanic** (even/odd room parity) is simple enough to figure out but creates genuine tension since the player must remember which room they're in
- **Audio is procedural** via Web Audio API — zero external files needed, the game is entirely self-contained
