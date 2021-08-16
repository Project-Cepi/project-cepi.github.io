---
sidebar_position: 1
---
# Commands

Commands are the basis of all tools. Cepi uses the modern 1.13 bridager format, meaning richer commands on the client.

## Format

Literals do not have any special arguments around them *if* they are a subcommand `/item create`

Required arguments have parenthensies around them `/item set (trait)`

Optional arguments have parenthensies and brackets around them `/clear [(target)]`

## Arguments

The basis of commands are literals. This mainly refers to subcommands (`/item create`) and options (`/item remove (literal)`)

Number arguments take a number as their input `/damage (amount)`

Range arguments take 2 numbers with `..` between them. If one number is not there, EX `..2`, 
a minimum value is set (-2147483648 by default, but some commands may set a different default)

String arguments usually take some input wrapped around in quotes `/eris title full "hey" "world"`.

If a string argument is the last argument, quotes are optional.

If you want to add quotes to a string argument, you can "escape" it (`\"`): `/eris title full "bob says: " "\"Hello\""`

Entity selectors are default in vanilla -- they have many specifications which can [be found here](https://minecraft.fandom.com/wiki/Target_selectors)