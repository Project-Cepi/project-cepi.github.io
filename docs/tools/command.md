---
sidebar_position: 1
---
# Commands

Commands are the basis of all tools. Cepi uses the modern 1.13 bridager format, meaning richer commands on the client.

## Format

### Literals

Literals do not have any special arguments around them *if* they are a subcommand `/item create`

### Arguments

Required arguments have parentheses around them `/item set (trait)`

Optional arguments have parentheses and brackets around them `/clear [(target)]`

## Argument Types

The basis of commands are literals. This mainly refers to subcommands (`/item create`)
and options (`/item remove (literal)`)

### Numbers

Number arguments take a number as their input `/damage (amount: 0..)`

### Ranges

Range arguments take 2 numbers with `..` between them. If one number is not there, EX `..2`, 
a minimum value is set (`-2147483648` by default, but some commands may set a different default)

### Strings

String arguments usually take some input wrapped around in quotes `/eris title full "hey" "world"`.

If a string argument is the last argument, quotes are optional. `/eris mini <red>Hello world`

If you want to add quotes to a string argument, you can "escape" it (`\"`): `/eris title full "bob says: " "\"Hello\""`

Entity selectors are default in vanilla -- they have many specifications which can [be found here](https://minecraft.fandom.com/wiki/Target_selectors)

## Types of creational commands

There are two main types of creational commands:

`item` based, and `world` based.

Most systems will be item based, but some commands like regions, traps, and lootcrates are world based.

### Item Commands

Item based systems can be transferred to any cepi instance -- labs, your own private instance, etc.

This is because the data is stored on the item itself, and not the server.

Every action done by an `item` command, unless on the registry, will be based on the items you are holding.

You can use a [data](./data) subcommand or the [`nbt`](./data#nbt) command to get this data.

Item commands may also contain a [`registry`](./registry) subcommand, linked to the server.

This allows people to share their created items in a server database.

### Registry commands

Registry commands are based on the world and cannot be transferred.

The way it works may vary on the command.

Anyone using registry commands, unlike item commands, can view and modify your changes.