---
layout: ../../components/article.astro
title: Garry's Mod
author: Jack5
hero: /images/heroes/gmod.webp
link:
  text: Steam page
  url: https://store.steampowered.com/app/4000/Garrys_Mod/
---
Garry's Mod is a Source Engine mod that integrates game content from other games of the era, such as *Half-Life 2*, *Counter-Strike: Source* and *Portal*. Its [Steam Workshop](https://steamcommunity.com/workshop/browse?appid=4000) is incredibly extensive, featuring all manner of gamemodes, maps, weapons, tools, playermodels and more. All of this content can be experienced with peer-to-peer online multiplayer.

## Linux troubleshooting

Garry's Mod does not work well on Linux out of the box, and sometimes not at all. To fix this, follow these steps, taken from [The Ultimate Garry's Mod Linux Performance Guide](https://www.reddit.com/r/linux_gaming/comments/xfwoso/the_ultimate_garrys_mod_linux_performance_guide/):

1. Right-click on Garry's Mod in Steam, navigate to `Properties > Game Versions & Betas` and select the `x86-64` game version.
2. In the same window as above, navigate to `Compatibility` and force the use of `Proton Hotfix`.
3. After Garry's Mod has finished updating, run the [GModPatchTool](https://github.com/solsticegamestudios/GModPatchTool).
4. Only if you are still experiencing performance issues, read the rest of the ultimate performance guide.

## Get weapon IDs

To print all currently loaded weapon and tool IDs, execute the below command in the developer console. Replace `.*` with a string you want to search for if necessary.

```lua
lua_run for _, weapon in ipairs(weapons.GetList()) do if string.match(weapon.ClassName, ".*") then print(weapon.ClassName) end end
```

## Hide and Seek + SWEP

[Hide and Seek + SWEP](https://steamcommunity.com/sharedfiles/filedetails/?id=3311749205) is an extension of the original [Hide and Seek](https://steamcommunity.com/workshop/filedetails/?id=266512527) gamemode that gives players a pre-determined set of weapons at the start of each round. The allowed weapons can be set using console commands.

### Favourite weapons

- [Serious Sam 2 SWEPs](https://steamcommunity.com/sharedfiles/filedetails/?id=503138986&searchtext=serious+sam+2)
- [Shrinkinator - Player Resizer](https://steamcommunity.com/sharedfiles/filedetails/?id=2377962193&searchtext=shrinkinator)
- [Superliminal SWEPs](https://steamcommunity.com/sharedfiles/filedetails/?id=3233872760)

To set up the gamemode with our favourite weapons, execute the below commands in the developer console:

```bash
hasps_loadout_all weapon_superliminalgrabrewrite,weapon_shrinkinator
hasps_loadout_hider weapon_ss2_colt
hasps_loadout_seeker weapon_ss2_sniper,weapon_slam
```
