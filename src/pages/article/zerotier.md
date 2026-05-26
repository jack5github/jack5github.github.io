---
layout: ../../components/article.astro
title: ZeroTier
author: Jack5
link:
  text: Download
  url: https://www.zerotier.com/download/
---
ZeroTier is a piece of software that connects computers together over the internet, assigning them IP addresses that allow them to communicate with each other as if they were on the same network. It is far safer than [LogMeIn Hamachi](https://en.wikipedia.org/wiki/LogMeIn_Hamachi), and works on multiple operating systems unlike [Radmin VPN](https://www.radmin-vpn.com/).

This connection makes it possible to play video games that only support multiplayer via LAN or port forwarding. Historic examples include [Minecraft](https://minecraft.wiki/), [multiplayer Source Engine mods](https://developer.valvesoftware.com/wiki/Category:Source_mods), [OpenRCT2](https://openrct2.io/) and more.

## Windows Setup

1. Download the MSI Installer from the [official download page](https://www.zerotier.com/download/).
2. Install ZeroTier. It will appear as an icon in the taskbar system tray.
  - If the install wizard shows the options *Modify*, *Repair* and *Uninstall*, ZeroTier is already installed and you can skip this step.
3. Right-click the system tray icon and join a network by pasting the network ID sent to you by a friend.

## Linux Setup

These instructions have only been tested on Linux Mint 22.3.

### Installation

1. Download the latest `.zip` release of [ZeroTierOne](https://github.com/zerotier/ZeroTierOne/releases).
2. Open a terminal, navigate to the download location and use the `unzip` command on the downloaded `.zip` file. Do not use the default Archive Manager or any other GUI tool, for they will fail to unzip the archive.
3. Before proceeding, install the `libssl-dev` and `rustup` packages using `sudo apt install`, then execute `sudo rustup update`.
4. Enter into the ZeroTierOne folder created by the unzip operation and execute `make`. You may ignore any *warnings* that are produced, but not *errors*.

### Connecting

1. Start the ZeroTierOne client by executing `sudo ./zerotier-one` in the ZeroTierOne folder. The terminal will report that the Control Planes are starting and print nothing afterwards. This terminal tab must remain open to stay connected.
  - If the Control Planes fail to reach the starting phase due to a port being in use, try restarting your computer.
2. If you have not already, in the same folder, follow the [Quickstart Guide](https://docs.zerotier.com/quickstart/) in order to join a network. Instead of `zerotier-cli`, type `./zerotier-cli`.
