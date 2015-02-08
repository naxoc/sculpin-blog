---
title: "Windows in VirtualBox on the Mac"
date: 2013-10-22 21:06
comments: true
tags:
- VMs
- mac
- windows
- IE
- vhosts
- VirtualBox
- localhost
---

I have been doing more CSS and front-end stuff lately. I am having a lot of fun learning more about these things that I have somehow avoided doing for the last many years.

Today I realized that I don't have to own a MS Windows license to run a setup in a VM for browser-testing. While I don't hate Microsoft (anymore) I would really rather not buy a license for a product that I think is horrible. Anyway - I had no idea that it is super simple to set up a VM running whatever version of IE you want on Windows.

Installing the disk image was easy and I was up and running in very short time. I did however struggle a little with getting Windows to recognize the localhost (my Mac) and the vhosts I have on my local machine. I do all my development on my localhost, so I really needed Windows to understand my vhosts. Here is a writeup of what I did:

Note that I installed Win7 - the instructions for editing the hosts file might be different on other versions of Windows.

## Install VirtualBox
First you need to install VirtualBox if you don't have it. Go grab an installer from the [VirtualBox Downloads page](https://www.virtualbox.org/wiki/Downloads) and install it.

## Install the Windows image
Now go to [modern.ie's download page](http://www.modern.ie/en-us/virtualization-tools) and download a virtual machine in the IE version you would like to test stuff on. For this writeup I got an IE9 on Win7. Note that instead of downloading a lot of rar-files, you can just grab a cUrl command at the bottom of the downloadboxes and paste that into your terminal.

This part takes a good while, so be patient.

## Configure networking in VirtualBox
Before you start Windows, you need to configure networking in VirtualBox. So go to VirtualBox and choose 'Preferences' from the menu (or go Command-,). In the settings window - click "Network" and choose the "Host-only Networks" tab. On that tab there is a plus that you just click and accept. I didn't have to configure anything - I just got a configuration called _vboxnet0_. Go ahead and close preferences - this is a onetime setup thing. All images you install will be able to use these settings (if you want).
![Host-only Networks](/img/vbox-networks.png "Host-only Networks")

## Boot up Windows
 Now you can double click the image in VirtualBox's main window to start up Windows. Yup - you get the Windows sound.

## Find the Gateway
Once Windows has booted up we need to configure the image to talk to our localhost. Click the start button or whatever it's called and type 'cmd' in the textfield to get a "terminal". Type `ipconfig` at the prompt and find the part in the output where it says "Default Gateway" under the "Ethernet adapter Local Area Connection". Note that IP. It should be something like 10.0.x.x. Mine is 10.0.2.2.

## Set file permissions on the hosts file
Now we need to edit Windows' hosts-file so that the vhosts we have on our Mac can be used. But first we have to change the file rights on the file. To open the Finder thingy, type `explorer C:\Windows\System32\drivers\etc` in at the prompt. That gives you the folder with the hosts-file. Now right click on that and select "Properties". In the window you get, click the "Security" tab and then click the "Edit button".
![File permissions](/img/win7-edit-file-rights-1.png "File permissions")
 Select the "Users" group/user and tick the "Full control" box.
 ![File rights](/img/win7-edit-file-rights-2.png)
All this probably is a horrible idea securitywise, but I don't really care - I'll use this Windows install very little. Click save and you're good.

## Edit the hosts file
Now we can edit the hosts file. Double click on the hosts file and choose Notepad in the "Open with dialog". Now you can add the urls that you have set up as vhosts on your Mac. Use the 10.0.x.x IP address from the `ipconfig` command like this for example:
```
10.0.2.2 d7.dev
10.0.2.2 d8.dev
```
Save the file and you're done! I made a desktop shortcut to the file because I feel like I'll be back for more vhost-editing soon.

## Use IE!
Now you can see your Mac's webserver's pages from your VM. So open up IE(!) and go to whatever url you put in the hosts file. I just want to point out one last thing: There is a Firebug Lite to be found in (this) IE if you click the gear in the upper right corner.
![Firebug lite](/img/firebug-lite.png)

Hope you found this very verbose walktrough helpful.
