# Train Carts (TrainCarts)

## What It Does
TrainCarts enhances minecart mechanics, allowing minecarts to link together into trains and adding physics improvements for smoother rail travel.

## How It Affects You
Minecarts on the server have improved physics and can be linked into trains. You can ride connected minecart trains along rail networks.

## Features
- **Linked minecarts** maintain a set distance from each other (1.5 blocks apart).
- **Max speed:** 0.35 (slightly below maximum to prevent derailments).
- **Chunk loading:** Chunks near minecart trains are kept loaded, so trains run even when players are far away.
- **Derailed carts:** Carts without tracks underneath stay in the group (not removed).
- **Push mechanics:** Minecarts push away miscellaneous entities (items, boats) but do NOT push players or mobs.
- **Item drops:** Breaking a minecart drops its items normally.
- **Powered cart boost:** 0.1 speed boost from furnace minecarts.

## How to Use
- Place minecarts close together on rails to link them into a train.
- Ride a train by right-clicking any cart in the chain.
- Use signs near rails to create stations, speed boosters, and route switches (see FalseBook for sign-based rail controls).

## Notes
- No special commands needed — trains work automatically when carts are placed together.
- Coal can be used from storage carts to power furnace carts (disabled by default).
