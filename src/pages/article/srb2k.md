---
layout: ../../components/article.astro
title: Sonic Robo Blast 2 Kart
author: Jack5
hero: /images/heroes/srb2k.webp
---
Sonic Robo Blast 2 Kart (SRB2K) is a Sonic-themed kart racing game built on the [DOOM engine](https://en.wikipedia.org/wiki/Doom_engine) that has extensive mod support. Online multiplayer normally requires a LAN or a port-forwarded router, but it can also be played online using [ZeroTier](./zerotier). Regardless, it must be hosted and played by people with stable internet connections to avoid missed inputs.

## Game Installation

- To play SRB2K on Windows, download the latest game installer from the [official forum post](https://mb.srb2.org/addons/srb2kart.2435/) and choose an install location other than Documents and Program Files.
- For Linux, install the game from its [Flathub page](https://flathub.org/en/apps/org.srb2.SRB2Kart). The game will be installed at `~/.var/app/org.srb2.SRB2Kart/`.

## Mods Installation

SRB2K mods can be found on the [official message board](https://mb.srb2.org/addons/categories/srb2kart-v1-x.2/). For simplicity, mods are installed in the `mods/` folder of the game directory (or `.srb2kart/mods/` on Linux), under the subfolders `misc/`, `maps/` and `chars/`. They can be added to the game at runtime by selecting **Add-ons** in the main menu and pressing Enter on the mod files.

To load mods en masse, create a `.cfg` file in the `mods/` folder with one `addfile` line per mod file, e.g., `addfile mods/misc/KL_bp-v2.0.pk3`, and execute it at runtime instead of the individual mod files. It is recommended to split miscellaneous mods, maps and character packs into separate `.cfg` files as well.

## Favourite Mods

These mods are in use by Jack5 and friends, and are recommended for casual players. Many of these were most prominently shown off in [Jack5's YouTube video on SRB2K](https://www.youtube.com/watch?v=G6YOiNIuRYM).

### Miscellaneous

- [Daytona USA Announcer](https://mb.srb2.org/addons/daytona-usa-announcer.3546)
- [Driftboost Gauge](https://mb.srb2.org/addons/driftboost-gauge.2341)
- [Egg Panic](https://mb.srb2.org/addons/egg-panic.2534)
- [Expanded Signposts](https://mb.srb2.org/addons/expanded-signposts.4968)
- [Hitfeed](https://mb.srb2.org/addons/hitfeed-kl_hitfeed_v2-2-pk3.2399)
- [NameTags](https://mb.srb2.org/addons/nametags.3055)
- [NepSpin](https://mb.srb2.org/addons/nepspin.5746/)
- [Powerlap](https://mb.srb2.org/addons/powerlap.3637)
- [SRB2Kart: Battle Plus](#srb2kart-battle-plus)
- [xItemLib](https://mb.srb2.org/addons/xitemlib-sampler-pack.3091/)

### Maps (Tracks)

- [Baguette pack](https://mb.srb2.org/addons/baguette-pack-more-special-stupid-map-hexagone-and-wario-deluxe.2884)
- [Bento Box](https://mb.srb2.org/addons/bento-box.4849)
- [Bowler's Pack](https://mb.srb2.org/addons/bowlers-pack-final-update.2300)
- [Mandrill Maze](https://mb.srb2.org/addons/mandrill-maze.2309)
- [Marsh Mayhem Pack](https://mb.srb2.org/addons/marsh-mayhem-pack-new-map-marble-zone.2311)
- [Melon Pack](https://mb.srb2.org/addons/melon-pack.2267)
- [Ωmega Tracks](https://mb.srb2.org/addons/omega-tracks.2302)
- [Omnix Pack](https://mb.srb2.org/addons/omnix-pack-v8-0-last-update-rocky-ridge.2291/)
- [R. A. Extended](https://mb.srb2.org/addons/r-a-extended-v3-1-super-gbj-hotfix-edition.2244)
- [Sinos' Weird Grand Prix](https://mb.srb2.org/addons/sinos-weird-grand-prix.4971)

### Characters

- [Aaron's Char Pack](https://mb.srb2.org/addons/aarons-char-pack-latest-update-k-rool-krushes-the-kompetition.2117)
- [Castrol Celica](https://mb.srb2.org/addons/castrol-celica.3329)
- [Domino's "Funny Hee Hee Ha Ha" Character Pack](https://mb.srb2.org/addons/dominos-funny-hee-hee-ha-ha-character-pack.1848)
- [FrostBrush's Character Pack](https://mb.srb2.org/addons/frostbrushs-character-pack-leorina-added.2136)
- [☆JOKER☆ Chars Pack PLUS](https://mb.srb2.org/addons/joker-chars-pack-v6-1-plus-pikachu.1974)
- [Niko Character Pack](https://mb.srb2.org/addons/niko-character-pack-ash-williams-added.2107)
- [PSX Solid Snake](https://mb.srb2.org/addons/psx-solid-snake.1631)
- [Timsanity Character Pack](https://mb.srb2.org/addons/timsanity-character-pack-new-years-update.1694/)

## SRB2Kart: Battle Plus

[SRB2Kart: Battle Plus](https://mb.srb2.org/addons/srb2kart-battle-plus-kl_bp-v2-0-pk3.2350) is a mod for SRB2K that expands the built-in Battle mode to include more gamemodes. The available gamemodes are listed below, and can be forced using the `bp_forcegamemode #` command in the in-game console.

0. *Random*
1. Bumper Battle
2. Ring Runners
3. Emerald Thief
4. Mine Blast
5. Hot Egg-tato
6. Sink Deathmatch
7. Item Rain
8. Randomizer
9. Chaos Ring Runners
10. Ringslinger
11. Hooligan Roundup
12. Egg-fection

## Dr. Robotnik's Ring Racers

Dr. Robotnik's Ring Racers is the sequel to SRB2K which was released in 2024. Unlike its predecessor, it is a highly technical and competitive game with a focus on collecting rings and preserving momentum. This hyper-focus on competitive gameplay means that it is inaccessible and unfun for casual players.
