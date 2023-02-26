---
sidebar_position: 0
---

# Documentation

![Guide for using the kit](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/3/c/2/3c241c2508cc8cbc7e14f815763023625fb5559f.jpeg)

## [🔗Devforum Post](https://devforum.roblox.com/t/a-very-advanced-kit-for-tycoons-ruixeys-tycoonkit/1850596)

## How to get/update the Kit
1. Join the [discord server](https://ruixey.github.io/discord) and link your roblox account
2. after that you can buy the kit through a gamepass link [here](https://www.roblox.com/games/9635395049/Assets)
3. After clicking 'refresh my roles' in the #verification channel, you will be able to see the channel with the download link to the newest version.
4. To Upgrade the Kit to a newer version move your Purchases and Buttons folder to the new Kit and reconfigure the Configuration (Please do not copy-paste the whole script because new Settings get overwritten that way)
5. If you have trouble following these steps, please dm me on discord.

## How to use the Tycoonkit
### What to (not) edit:
Version Log and bug fixes can be found on the DevForum
Do not change/delete anything marked red or its descendants.
Feel free to change/delete anything marked green and its descendants.
Things marked blue are here to be customized but NOT deleted. (PurchaseTypes are explained below)

![Explorer](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/d/3/8/d38b8efb158515c959675d4d8278a78c3269886c.png)

### Usecases for PurchaseTypes
The ModuleScripts in the PurchaseTypes folder (image below) are used to:
CurrencyCollectorConfig and PartCollectorConfig can be used in Essentials, Purchases and Purchased, everything else can just be used in Purchases and Purchased
1. CurrencyCollectorConfig is put directly into a part, this module is used to make a purchase a currency collector
2. DropperConfig is put into the purchase model, which need a part called "Drop" in it.
3. PartCollectorConfig needs to be directly in the part and collects drops.
4. UpgraderConfig needs to be in into the purchase model, it has a setting called "UpgraderPartName" which determates which part will be treated as an upgrader.
5. To make a conveyor work (can be used in Essentials, Purchased and Purchases) it needs to be named as set in Configuration and have an IntValue called "ConveyorSpeed" in it
6. The LeaderboardConfig is put into a Purchase, if you don't use the existing leaderboard, you need to write your own code to display the players the module
7. DropTeleportConfig is used to teleport Drops touching one part to another, you could use this to teleport parts into the collector on the 1st floor from the second one.
8. You can create custom PurchaseTypes and attach a Handler to them in the CustomFunctions module.

![Templates](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/e/2/0/e20885c721d3677d8c7c2bba2a0bde7e9970d1a4.png)

### Limitations
1. Every button can only have 1 Object Value
2. Every tycoon has to have a different TeamColor
3. Every tycoon has to have a different name
4. Every purchase has to be named differently
5. Only 1 TextLabel can be used for the built in DropTags and ButtonTags system (this one can be replaced with your own button tags)
6. Every player can only own 1 Tycoon

### How to attach Buttons to Purchases
Every Button has to have these:
1. CurrencyCost Folder
2. Custom Folder with these values
3. DeleteObjects Folder
4. Dependencys Folder
5. Object Value with the value being the name of a purchase model
6. Part/MeshPart called Head

* to add a currency the button costs insert an IntValue into the CurrencyCost folder, name it after the currency and set the value to the price (can have multiple)
* to make the button a gamepass put the id of the gamepass into the "Gamepass" value
* to make the button destroy a purchase create a StringValue called "DeleteObject" in DeleteObjects and set its value to the purchase's name (can have multiple)
* to make the button only avaliable to group members, enter the group id in the tycoonkit's configuration module and tick GroupRequired
* to make a button only spawn after the specified amount of rebirths, enter the amount in the RebirthToUnlock value
* to make the button only spawn after the specified purchases have been bought, insert a StringValue into the "Dependencys" folder and set its value to the purchase's name (can have multiple)

![ButtonConfiguration](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/6/f/b/6fba4e322ce5f91985242ff72971d8c322cc666d.png)

### How to make your own UI
You can read the EventWrapper, but do not change anything in it.
Everything else in the "TycoonkitUI" which is found inside kit>Content>Assets can be freely changed
Note that you have to recode the UIHandler once you changed the structure/names of the UI

![GUI](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/a/3/1/a31485719e3446b83648708f0f672008eb7f4043.png)

### How to add Currencys
1. Open up the Configuration module
2. Scroll down until you see the Currencys category
3. Copy the line marked in the image below, rename "Money" to your new currency name and change the settings how you like them
4. Make sure to change the currency in every button to the new currency!

![Currencys](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/9/b/6/9b638e4dac74d3df03a2362a5c56824ee04bcdc1.png)

5. Go into the Content>Assets>TycoonkitUI>CurrencyFrame and clone the Frame called "Money".
6. Rename the cloned Frame to the name of the Currency you want to display, and you're done.

![CurrencyDisplayFrames](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/5/6/8/568ff210315b6deab3cb5f2a7346998ff95f0196.png)


### How to use Codes

![Codes](https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/7/a/a/7aa61bc14bd27befeb25b5accb1cdab03ebd2ec5.png)

1. Copy the marked snippet and paste it above
2. Remove the "--" infront of every line
3. Set "Code" to the word/phrase the player has to type in to redeem the set rewards
4. Write down every currency and the Amount they get in the "Reward" section (examples are Money and Bricks here)
5. If you have something like a CodeDropper, you can write it in the "PurchaseToSpawn" setting and it will insert the Purchase upon redeeming. Be aware that a Code can be entered at any time, so do not make a CodeDropper in the second floor cause it will then be in the Sky.
6. If you want your own code to run once upon redeeming, write it in the "RunFunction".
7. Codes can be redeemed only 1 Time per player, a CodeDropper stays there even after rebirthing.

### How to make a custom UI for Buttons (Version 1.3+)
1. In the Configuration Module, category "Buttons" set UseCustomButtonTag to true.
2. Copy the "TagUI" from _Ruixey's Tycoonkit **>** Content **>** Assets **>** TagUI_ or just make your own billboardGui
3. Put the billboardGui in each buttons "Head" part and customize it to your needs.

### FaQ:

<iframe src="https://www.youtube.com/embed/f_FJBUxKhtI" title="Ruixey's Tycoon KIT Frequently Asked Questions |  Roblox Studio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>

### Included Systems
1. Everything listed above
2. Building Animations
3. Autocollect Gamepass & Non-Gamepass (if there is no collector autocollect is activated)
4. Removable Purchases (for unlocking areas etc.)
5. 2x Currency Gamepass
6. Group Rewards
7. Fully Functional UI
8. UI Module that handles communication so you can create your own UI
9. Highly Customizable Rebirths
10. 2-in-1 Colorizer & Materializer
11. Code System (Codes can give you Currency and Purchases)
12. Group-Only Buttons
13. Gamepass Buttons
14. Buttons unlocked at a set amount of rebirths
15. Teams
16. Multiple Currencys
17. Local Sounds
18. Softshutdown
19. Unclaiming system (can be disabled)
20. Auto Claiming
21. Automated ButtonTags
22. Configurable Automated DropTags
23. Non-playermoving Conveyors
24. Setting for no collision between Players
25. Parts called "TycoonColorPart" get the tycoon teamcolor
26. Currency Saving System
27. Tycoon Saving System
28. Rebirth Button Cost multiplier
29. Rebirth Requirement multiplier
30. Multiplied Earnings depending on Rebirth
31. Droppers without actual drops, MeshDroppers, ClickerDroppers
32. Custom Module with functions for your code to run on certain Events
33. Automatically set Name above the door
34. Auto-Respawn in tycoon
35. OwnerOnlyDoor
36. Custom Button UI
37. Drop Teleporter
38. Autocollect for being it a Group