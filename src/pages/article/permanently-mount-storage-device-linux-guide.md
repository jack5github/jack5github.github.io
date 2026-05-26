---
layout: ../../components/article.astro
title: Permanently mounting storage devices on Linux
author: Zeroman95
cutout: /images/cutouts/GParted.webp
---
Mounting storage devices can be difficult when on Linux. Linux works completely differently compared to Windows and other Operating Systems, by using a program called GParted you can get this sorted.

# Step 1
Open GParted and find the UUID of the drive and copy it to your clipboard or save it to a text file.

# Step 2
Once you have done that, head to `/etc/fstab` and type this onto a line `/etc/fstab`: `UUID=<uuid> /mnt/<dirname>/ ext4 defaults,noatime 0 0` make sure to add the UUID you have copied to the `<uuid>` bit on the line. Change `/mnt/<dirname>` to however you like, by changing that you can put it anywhere on your storage system to access it.

Boom. Restart your computer and it should mount everytime you turn on your PC.

### Extra Information
If you cannot edit and save the fstab file, open the location of it as the root user and manually edit and save it.

You can only do this on Linux. You cannot attempt this on Windows and other Operating Systems.