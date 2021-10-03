---
sidebar_position: 3
---

# Data

Data subcommands allow grabbing data from any item and turning it into NBT -- shareable data that can be turned right back into an item.

:::note

Only some commands have this implemented, like the `item` command. This is not a command on its own.

:::

## Commands

`(root command) data get` -- gets the data from the item (copyable)

`(root command) data from <data>` -- grabs an item from the data 

## NBT

The /nbt command allows you to get data from any item, regardless of its system. It generates longer input, but is also more universal than the data subcommand.

`/nbt get` Get the NBT from the held item
`/nbt set (data) [(material = minecraft:paper)]` Sets the NBT for this held item.

## Item Persistance

If you have access to the creative menu, items store their data in the item itself,
meaning any cepi object can be put in a saved toolbar and recollected at any time.