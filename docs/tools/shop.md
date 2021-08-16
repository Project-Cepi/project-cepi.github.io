# Shops

Shops allow the purchasing of any item, and can be linked to mobs with the Scripting Engine.

## Commands

`/shop create (id)` Creates a shop with an `id`
`/shop delete (id)` Deletes a shop with an `id`
`/shop item add (id) (price)` Adds an item to a shop with a price (default 0) -- must be holding an item
`/shop item remove (id) (itemIndex)` Removes an item from an index, starting at 0
`/shop open (id)` Opens a shop with an `id` -- displays in graphical form.
`/shop meta (id) (meta) (arguments...)` Sets meta on a shop.