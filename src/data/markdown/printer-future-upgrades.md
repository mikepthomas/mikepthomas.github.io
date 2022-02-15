# Future Upgrades

Febuary 8, 2022 by [Mike Thomas](https://github.com/mikepthomas)

This what I have planned for the printer over the next few ~~months~~ ~~years~~ decades.

![](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-future-upgrades/voron-frame.jpg)

---

## Table of contents

1. [Frame](#frame)
2. [Hotend Upgrade](#hotend-upgrade)
3. [Linear Rails](#linear-rails)
4. [Heated Bed Upgrade](#heated-bed-upgrade)
5. [Electronics Upgrade](#electronics-upgrade)
6. [Rebuild the Anet A8](#rebuild-the-anet-a8)

## Frame

Since upgrading to SuperSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with.

I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades.md#frame-bracing) so I have now been looking at a number of different projects to upgrade the somewhat flexible plastic frame with a metal alternative.

Some of the ones I have found are:

### AM8

The [AM8](https://www.thingiverse.com/thing:2263216) is a direct drop in replacement for the acrylic frame on the Anet A8. This looks to be the easiest upgrade path that would do the job of getting a stiff frame on the printer, however, I would like the ability to upgrade the machine further in the future.

For the price of this frame upgrade, it would probably be better just to buy the upgraded version of the Anet A8, [The Anet A8 plus](https://anet3d.com/pages/a8-plus) which would also give me an upgraded build volume.

### Hypercube

The [Hypercube](https://www.thingiverse.com/thing:1752766) is a printer that uses a different way of moving the extruder around, known as CoreXY kinamatics, whereas the Anet A8 uses Cartesian kinematics. There is a Remix specialising in upgrading the Anet A8 to a Hypercube called the [Anet Evolution](https://www.thingiverse.com/thing:2786292).

### Hypercube Evolution

The [Hypercube Evolution](https://www.thingiverse.com/thing:2254103) is, as the name implies, a progression on the Hypercube. It also has a Remix devoted to upgrading an Anet A8 or AM8, [Anet A8/AM8 to Hypercube Evolution Upgrade Path](https://www.thingiverse.com/thing:3268908).

It is based on 3030 Extrusion... having looked around on the internet I have concluded that 3030 extrusion is very hard to source in the UK (especially looking for somewhere that provides custom cut lengths).

### RatRig

There are a number of printers in the [RatRig lineup](https://www.ratrig.com/) however many of them use custom plates that you will either need to buy off them as a kit or have custom machined. I would like to self source parts if required to upgrade the printer in stages.

### Voron Design

Voron is an open source project designed to create a 3D printer using only off the shelf and 3D printed parts.

They have a number of Printers in their current line up:

- [Voron0](https://www.vorondesign.com/voron0.1)
- [Trident](https://www.vorondesign.com/voron_trident)
- [Voron2](https://www.vorondesign.com/voron2.4)
- [Switchwire](https://www.vorondesign.com/voron_switchwire)
- [Legacy](https://www.vorondesign.com/voron_legacy)

### What I have chosen

I really like the idea of learning something new by upgrading the printer to CoreXY kinamatics, this rules out the AM8 and the Voron Switchwire. I also want to be able to incrementally upgrade the printer parts at a time rather than buying a kit and building a new printer (kinda like [Trigger's broom](https://www.youtube.com/watch?v=56yN2zHtofM) I like the idea that it is the same printer at the end). This also rules out buying a RatRig or a Voron kit. I have found it rather difficult to source 3030 extrusion in the UK so that rules out the Hypercube Evolution.

This leaves one option left, the Hypercube, this is a rather old design so I am going to start with this as a base, using ideas and remixes from the Anet Evolution... but using a frame from an older revision of the Voron Trident, the [Voron1](https://www.vorondesign.com/voron1.8).

## Hotend Upgrade

I have purchased parts to install the [ANET A8 E3DV6 BMG Direct Drive X Carriage](https://www.thingiverse.com/thing:3807114), the adapter plate should be a direct bolt on to the X Carriage of the Anet Evolution. This was chosen as the parts that are required for this are the exact same parts that are required to build the [Voron Afterburner](https://github.com/VoronDesign/Voron-Afterburner) toolhead which in turn has an upgrade path to the not yet released [Voron Stealthburner](https://vorondesign.com/voron_stealthburner) toolhead.

There is also an adapter plate, [Hypercube Afterburner adapter intergration remix](https://www.thingiverse.com/thing:5156654) that may work to mount the Afterburner on the Hypercube guide rails.

## Linear Rails

The long term goal is to eventually replace the smooth rods of the XY Gantry with linear rails to allow me to increase my printing speeds further. When it eventually comes to this I will also need to replace the z guide rods and lead screws with the slightly shorter ones required for the Voron 1.8.

It will be at this point that all the X, Y and Z motion parts for the printer will be the same spec as the Voron1.

## Heated Bed Upgrade

The Anet A8 uses 12V for it's power supply, all current Voron printers use mains powered heater mats, on a thick slab of aluminium controlled by a Solid State Relay. This allows the heated bed to heat up to temperature quicker and holds a greater thermal mass for longer.

This upgrade will also increase the XY build volume from the stock Anet A8 build plate size of 220x220mm to 300x300mm.

## Electronics Upgrade

The only thing left once the heated bed has been upgraded, for it to be a fully fledged Voron printer will be to upgrade the 12V power supply to a Meanwell 24V power supply, this will also require me to upgrade the hotend heater and all fans to 24V versions.

## Rebuild the Anet A8

Once I have upgraded everything to this point I should have all the original parts left over to rebuild it back into the original frame... or maybe reuse them to build a Voron Legacy? ;)
