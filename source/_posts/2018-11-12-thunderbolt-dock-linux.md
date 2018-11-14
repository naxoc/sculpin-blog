---
title: "Thunderbolt dock and Linux"
date: 2018-11-12 20:20:00 +0200
comments: true
tags:
- linux
- kubuntu
- dell
- thunderbolt
excerpt: "Getting Kubuntu to recognize a Thunderbolt dock"
---

At work I have a [Dell TB16 dock](https://www.dell.com/en-us/shop/dell-business-thunderbolt-dock-tb16-with-240w-adapter/apd/452-bcnu/pc-accessories) for my Dell XPS 13. It's pretty sweet. I plug in just one USB-C and everything works.
 The first time I plugged it in, Ubuntu popped up a window that wanted me to approve the access to the computer from the dock. A nice security feature when you think about it.

 When I did a reinstall and installed Kubuntu instead of Ubuntu, I did not get the prompt to approve access. Apparently Kubuntu does not have packages for managing Thunderbolt by default, and no graphical interface for it.
  Luckily I knew that the authorization was necessary, because I could have easily just freaked out and believed that the dock would not work with Kubuntu
 
 Here are the easy steps I did to make it work on Kubuntu:

* Install [bolt](https://github.com/gicmo/bolt): 
```
sudo apt install bolt
```

* Restart the machine (not sure if it is necessary, but can't hurt).
* List the devices with: 
```
boltctl
```
The output will look something like this:
```
 ● Dell Thunderbolt Cable
   ├─ type:          peripheral
   ├─ name:          Dell Thunderbolt Cable
   ├─ vendor:        Dell
   ├─ uuid:          xxxxxxxx-7a0f-d400-ffff-ffffffffffff
   ├─ status:        authorized
   │  ├─ authflags:  none
   │  ├─ authorized: Wed 14 Nov 2018 03:01:12 PM UTC
   │  └─ connected:  Wed 14 Nov 2018 03:01:09 PM UTC
   └─ stored:        yes
      ├─ when:       Wed 31 Oct 2018 04:11:14 PM UTC
      ├─ policy:     auto
      └─ key:        no

 ● Dell Thunderbolt Dock
   ├─ type:          peripheral
   ├─ name:          Dell Thunderbolt Dock
   ├─ vendor:        Dell
   ├─ uuid:          xxxxxxxx-3b05-8680-ffff-ffffffffffff
   ├─ status:        authorized
   │  ├─ authflags:  none
   │  ├─ authorized: Wed 14 Nov 2018 03:01:18 PM UTC
   │  └─ connected:  Wed 14 Nov 2018 03:01:15 PM UTC
   └─ stored:        yes
      ├─ when:       Wed 31 Oct 2018 04:11:45 PM UTC
      ├─ policy:     auto
      └─ key:        no


```

* Copy the uuid and authorize the device with: 
```boltctl enroll [uuid]``` 

If you only want to give permission for the current session, use `boltctl authorize` instead of enroll.

## Wired internet can be flaky
On Kubuntu I have a couple of times every day where the machine looses the ethernet connection through the dock. I have no idea what does it - it never happened on Ubuntu. If you have any idea what that is please leave a comment.
 