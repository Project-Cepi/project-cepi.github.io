---
sidebar_position: 3
---

# Data

Data subcommands allow grabbing data from any item and turning it into NBT -- shareable data that can be turned right back into an item.

## Commands

`data get` -- gets the data from the item (copyable)

`data from <data>` -- grabs an item from the data 

## NBT

The /nbt command allows you to get data from any item, regardless of its system. It generates longer input, but is also more universal than the data subcommand.

`/nbt get` Get the NBT from the held item
`/nbt set` Sets the NBT for this held item.

## Item Persistance

If you have access to the creative menu, items store their data in the item itself,
meaning any cepi object can be put in a saved toolbar and recollected at any time.