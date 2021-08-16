# Items

The item system allows for various items to be created with different `traits`.

## Traits 
Each trait can add lore (text displayed on the item) and a task (to apply actions to the item).

For example, the `Damage` trait adds `+${value} Damage` to the lore and sets the item's damage to `value`.

Traits are automatically sorted, meaning anyone who creates items using the item system does not have to worry about order or styling.

### Subtraits

Traits can have categories, for example the `stat` category that applies attributes to the player like `speed` and `health` to the player.

### Actions

Actions are a type of subtrait that allows the user to execute certain actions when `left/right/sneak + left` clicking with an item.

Some actions can take an optional target property using the `Targeting System`, allowing the user to look at an entity and apply actions to that player.

For example, the Up action sends the `target` up with `X` amonunt of velocity.

### Commands

Begin making a cepi item by using /item create

Set traits by using `/item set <trait...> <arguments...>`

Remove traits by using `/item remove <trait...>`

If an item has an outdated format use `/item update` to reupdate the format.

The item system also contains a [data](data) and [registry](registry) subcommand as well.