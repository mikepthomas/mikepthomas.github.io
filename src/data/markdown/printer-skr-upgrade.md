# BigTreeTech SKR 1.4 Turbo Upgrade

May 12, 2021 by [Mike Thomas](https://github.com/mikepthomas)

This page contains information about how I upgraded my stock Anet A8 control board to a BigTreeTech SKR 1.4 Turbo.

![](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/skr-upgrade-hero.jpg)

---

## Table of contents

1. [Wiring](#wiring)
2. [Electronics Case Design](#electronics-case-design)
3. [TFT24 Mount](#tft24-mount)
4. [Smart Filament Sensor](#smart-filament-sensor)
5. [Relay Mount](#relay-mount)
6. [Firmware](#firmware)

## Wiring

![Making adaptor wires for the existing cables](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/wiring.jpg)

I made adapter cables by following the guide at [Caggius Interweb blog](https://caggius.wordpress.com/anet-a8-rewiring-for-skr1-3/) so that I did not need to repin the existing cables if i ever need to go back to using the original Anet A8 control board.


## Electronics Case Design

Adapted from [Anet A8 Electronics Case](printer-printed-upgrades.md#anet-a8-electronics-case)

![Using Fusion 360 to design a mount for the control board](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/design.jpg)

The STLs that I printed to install the new board and mosfets are available on [my 3D printing repository on Github](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electroncs%20Case/Anet%20A8%20Electronics%20Case%20(No%20Access%20Holes).stl) including [the top half](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electroncs%20Case/Anet%20A8%20Electronics%20Case%20Top.stl) that has an update to hold the [Mini UPS V2.0](https://github.com/bigtreetech/BIGTREETECH-MINI-UPS-V2.0/blob/master/miniUPS_V2.0%20(12V)/MINI%20UPS%20V2.0%20user%20manual-2019-11-29.pdf).

![Before mounting the new electronics case](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/electronics-case.jpg)

I have made a few updates to the design to allow access to the USB port and to fit the [TF Cloud V1.0](https://github.com/bigtreetech/BTT-SD-TF-Cloud-V1.0/blob/master/BTT%20SD%26TF%20Cloud%20V1.0%20Instruction.pdf).
The design also includes a pocket to house the [BTT EEPROM module](https://github.com/bigtreetech/BTT-Expansion-module/blob/master/BTT%20EEPROM/BTT%20EEPROM%20V1.0User%20Manual.pdf) however, I have not yet printed this so there may be some issues with sizes & support of the holes in the back, and the size of the pocket for the EEPROM module.
You can download the experimental design from [my 3D printing repository on Github](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electroncs%20Case/Anet%20A8%20Electronics%20Case%20(With%20Access%20Holes).stl).

## TFT24 Mount

[TFT24 Case for AnetA8 from Thingyverse](https://www.thingiverse.com/thing:4651132) by user [joeleonardo](https://www.thingiverse.com/joeleonardo)

I used this design to locate the new display in the same place as the original, to cover up the holes at the top of the frame. I may replace this at a later date with a blanking plate and relocate the screen somewhere else as this one blocks the gantry at about a height of 200mm and therefore I have lost approximately 40mm of Z travel.

![TFT24 mounted to the printer](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/tft-mount.jpg)

## Smart Filament Sensor

[Mount for BTT SFS V1.0 Smart Filament Sensor from Thingyverse](https://www.thingiverse.com/thing:4640216) by user [StonehengeFR](https://www.thingiverse.com/StonehengeFR)

I used the original design with the arms as the updated design without the arms was too loose and would not hold the sensor in an upright position.

![Smart filament sensor amongst a few other upgrades](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/smart-filament-sensor.jpg)

## Relay Mount

Adapted from [PSU Cover Remix](printer-printed-upgrades.md#psu-cover-remix)

I updated the PSU Cover to hold the [BTT Relay V1.2](https://github.com/bigtreetech/BIGTREETECH-Relay-V1.2/blob/master/BIGTREETECH%20Relay%20V1.2/BIGTREETECH%20Relay%20V1.2/Relay%20V1.2-Operating%20Instruction.pdf) The relay allows me to safely turn off the printer when a print has finished and to save electricity.

You can download the changes to the original PSU Cover from [my 3D printing repository on Github](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Relay%20Mount%20/Anet%20A8%20Relay%20Mount.stl).

![The Relay board installed in the power supply mount](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/relay-mount.jpg)

## Firmware

![Marlin firmware for the BTT SKR 1.4 Turbo on an Anet A8](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/firmware.jpg)

The firmware configured to run the printer and all of the mods I have made is available on [my Marlin Github repository](https://github.com/mikepthomas/Marlin/tree/bugfix-2.0.x-Anet-SKR-1.4-Turbo).

![The obligatory Benchy](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-skr-upgrade/benchy.jpg)
