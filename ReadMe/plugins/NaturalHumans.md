# NaturalHumans

## What It Does
NaturalHumans 2.1 adds hostile, neutral, and quest-role human NPCs that naturally spawn in the world. Players can tame them into persistent friendly followers.

## How It Affects You
New humans are 55-weight hostile, 30-weight neutral, or 15-weight quest characters. Hostiles attack nearby players; neutral and quest humans attack only in retaliation.

Right-click any untamed human with an apple for a 35% taming chance. The apple is consumed on every attempt. A successful tame binds that human to you; right-click it again with any item to toggle follow or stay. Owners cannot hurt their friendly human.

Quest humans invoke QuestPlus's normal `/quest new` offer when right-clicked. They are not Citizens NPCs.

## Spawn Details
- **Spawn rate:** 3% chance per eligible mob spawn.
- **Trigger mobs:** Humans can spawn alongside Zombies, Skeletons, Spiders, Creepers, Cows, and Chickens.
- **50% chance** of spawning with no equipment at all.
- Names are selected without active duplicates from a configurable pool of 63 existing-account names. Legacy skin availability depends on the external skin service.
- Friendly humans retain owner, position, health, follow state, armor, and held item across restarts.

## Equipment

### Armor
When a human spawns with equipment, it gets one of these armor setups:
| Type | Weight | Description |
|------|--------|-------------|
| Full Set | 35 | Complete 4-piece armor of one material. |
| Mixed Set | 35 | Each armor slot picks a random material. |
| Incomplete Set | 30 | Only 1–3 random armor pieces. |

### Armor Material Weights
| Material | Weight | Relative Chance |
|----------|--------|-----------------|
| Leather | 35 | Most common |
| Iron | 27 | Common |
| Gold | 17 | Uncommon |
| Chainmail | 16 | Uncommon |
| Diamond | 5 | Very rare |

### Weapons
- **33% chance** to hold a weapon or tool.
- Weapon material is random (does not match armor).

| Weapon | Weight |
|--------|--------|
| Sword | 30 |
| Axe | 25 |
| Pickaxe | 15 |
| Shovel | 10 |
| Hoe | 10 |
| Bow | 10 |

## Drops
Each equipment slot has a **25% drop chance** on death:
- Helmet, Chestplate, Leggings, Boots, Main Hand weapon.

## Tips
- Neutral and quest humans leave you alone until attacked.
- Half of all humans spawn without equipment.
- Diamond-equipped humans are very rare but extremely tough — the gear they drop makes it worth the fight.
- Humans can spawn wherever hostile mobs or even cows/chickens spawn, so stay alert even in peaceful areas.
