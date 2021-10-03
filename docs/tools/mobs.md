# Mobs

Mobs are the base system for all entities in Cepi, including NPCs and Projectiles.

They consist of 3 sets:

Meta (Properties of the mob, ex: health, ability to take damage, speed)

Goals (What they want to do, ex use melee attacks)

Targets (The target of the mob, ex the last damager)

These 3 combine to allow for some different variations of mobs, for example:

```
Guardian

Meta: 100 health
Goals: contact melee attack, goto (origin point)
Targets: closest player (up to range 10)
```

When an entity gets close, it'll attempt to attack the entity. If no entities are present, itll go back to its origin point.

## Templates

If you want a mob for testing out your item, you can use any `/mob template` provided.

## Subsystems

The mob system has a few subsystems: [Projectiles](projectiles), [NPC](npc)