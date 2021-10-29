# Regions

Regions is a registry system:

Start by using `/region create (id)` to create a region.

## Selections

A selection is stored per user, and contains a modififiable `pos1` and `pos2`

To set either, do: `/region selection (pos1|pos2) (position)`

To add your current selection to a region, add

`/region selection (id) add`

To see all selections, do `/region selection (id) list`

or, to see it in a particle format, use `/region show (id)`