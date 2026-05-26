---
layout: ../../components/article.astro
title: GParted
author: Zeroman95
coauthors:
  - Jack5
cutout: /images/cutouts/gparted.webp
link:
  text: Download
  url: https://gparted.org/download.php
---
GParted is a disk partition editor GUI program. On Linux, it is primarily used to format and permanently mount storage devices. To install GParted on a Debian-flavoured Linux distribution (e.g., Linux Mint), use the terminal command `sudo apt install gparted`.

## Formatting

To format a drive, select it in GParted and create a partition table of type `gpt`. Then, create a new partition of file system `ext4`.

## Temporarily mounting

1. Note down the `/dev/` subdirectory of the drive you want to mount using GParted.
2. Create a new directory in `/mnt/` that the drive will be mounted to.
3. Change the permissions of the new directory with the `sudo` version of the system file manager (e.g., `thunar`).
4. Run the command `sudo mount <dev directory> <mnt directory>`.

## Permanently mounting
1. Open GParted, find the UUID of the drive that has been temporarily mounted, and copy it to your clipboard or save it to a text file.
2. Open the file `/etc/fstab` in a text editor with `sudo` privileges and add the line `UUID=<uuid> <mnt directory> ext4 defaults,noatime 0 0`.
3. Restart your computer. The drive should mount every time it turns on.
