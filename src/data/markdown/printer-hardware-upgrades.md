# Printer Hardware Upgrades

May 12, 2021 by [Mike Thomas](https://github.com/mikepthomas),
Updated March 26, 2023

This page contains information about how I upgraded my stock Anet A8 to add various hardware mods including swapping out the control board to a BigTreeTech SKR 1.4.

![](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/skr-upgrade-hero.jpg)

---

## Table of contents

1. [Wiring](#wiring)
2. [SKR 1.4 Control Board](#skr-1-4-control-board)
3. [TFT24 Mount](#tft24-mount)
4. [Smart Filament Sensor](#smart-filament-sensor)
5. [Relay Mount](#relay-mount)
6. [3D Touch](#3d-touch)
7. [Hard Silicone Bed Mounts](#hard-silicone-bed-mounts)
8. [Neopixel LED Strip](#neopixel-led-strip)
9. [Optical Endstops](#optical-endstops)
10. [0.9 Degree Motors](#0-9-degree-motors)

## Wiring

In addition to upgrading the heated bed cables as part of the [safety upgrades](printer.md#safety-upgrades) I also have replaced the original 12V wiring with thicker 18AWG cables.

![Making adaptor wires for the existing cables](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/wiring.jpg)

I made adapter cables by following the guide at [Caggius Interweb blog](https://caggius.wordpress.com/anet-a8-rewiring-for-skr1-3/) so that I did not need to repin the existing cables if i ever need to go back to using the original Anet A8 control board.

## SKR 1.4 Control Board

![The obligatory Benchy](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/benchy.jpg)

### Electronics Case Design

Adapted from [Anet A8 Electronics Case](printer-printed-upgrades.md#anet-a8-electronics-case)

![Using Fusion 360 to design a mount for the control board](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/design.jpg)

The STLs that I printed to install the new board and mosfets are available on [my 3D printing repository on Github](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electronics%20Case/Anet%20A8%20Electronics%20Case%20(No%20Access%20Holes).stl>) including [the top half](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electronics%20Case/Anet%20A8%20Electronics%20Case%20Top.stl) that has an update to hold the [Mini UPS V2.0](<https://github.com/bigtreetech/BIGTREETECH-MINI-UPS-V2.0/blob/master/miniUPS_V2.0%20(12V)/MINI%20UPS%20V2.0%20user%20manual-2019-11-29.pdf>).

![Before mounting the new electronics case](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/electronics-case.jpg)

I have made a few updates to the design to allow access to the USB port and to fit the [TF Cloud V1.0](https://github.com/bigtreetech/BTT-SD-TF-Cloud-V1.0/blob/master/BTT%20SD%26TF%20Cloud%20V1.0%20Instruction.pdf).
The design also includes a pocket to house the [BTT EEPROM module](https://github.com/bigtreetech/BTT-Expansion-module/blob/master/BTT%20EEPROM/BTT%20EEPROM%20V1.0User%20Manual.pdf) however, I have not yet printed this so there may be some issues with sizes & support of the holes in the back, and the size of the pocket for the EEPROM module.
You can download the experimental design from [my 3D printing repository on Github](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electronics%20Case/Anet%20A8%20Electronics%20Case%20(With%20Access%20Holes).stl>).

### Firmware

![Marlin firmware for the BTT SKR 1.4 on an Anet A8](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/firmware.jpg)

The firmware configured to run the printer and all of the mods I have made is available on [my Marlin Github repository](https://github.com/mikepthomas/Marlin/tree/2.1.x-Anet-SKR-1.4).

## TFT24 Mount

[TFT24 Case for AnetA8 from Thingyverse](https://www.thingiverse.com/thing:4651132) by user [joeleonardo](https://www.thingiverse.com/joeleonardo)

I used this design to locate the new display in the same place as the original, to cover up the holes at the top of the frame. I may replace this at a later date with a blanking plate and relocate the screen somewhere else as this one blocks the gantry at about a height of 200mm and therefore I have lost approximately 40mm of Z travel.

![TFT24 mounted to the printer](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/tft-mount.jpg)

## Smart Filament Sensor

[Mount for BTT SFS V1.0 Smart Filament Sensor from Thingyverse](https://www.thingiverse.com/thing:4640216) by user [StonehengeFR](https://www.thingiverse.com/StonehengeFR)

I used the original design with the arms as the updated design without the arms was too loose and would not hold the sensor in an upright position.

![Smart filament sensor amongst a few other upgrades](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/smart-filament-sensor.jpg)

## Relay Mount

Adapted from [PSU Cover Remix](printer-printed-upgrades.md#psu-cover-remix)

I updated the PSU Cover to hold the [BTT Relay V1.2](https://github.com/bigtreetech/BIGTREETECH-Relay-V1.2/blob/master/BIGTREETECH%20Relay%20V1.2/BIGTREETECH%20Relay%20V1.2/Relay%20V1.2-Operating%20Instruction.pdf) The relay allows me to safely turn off the printer when a print has finished and to save electricity.

You can download the changes to the original PSU Cover from [my 3D printing repository on Github](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Relay%20Mount%20/Anet%20A8%20Relay%20Mount.stl).

![The Relay board installed in the power supply mount](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/relay-mount.jpg)

## 3D Touch

My inductive probe did not sense the bed underneath the borosilicate glass plate I purchased to make my prints have a smoother appearance on the first layer so I installed a 3D Touch sensor in place of it to physically touch the bed and get more accurate bed mesh.

## Hard Silicone Bed Mounts

![Silicone Bed Mounts](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/silicone-bed-mounts.jpg)

The stock bed springs can vibrate at high accelerations and cause ripples in the prints. I have replaced them with hard silicone mounts to help stop these.

## Neopixel LED Strip

![LED Strip](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/led-strip.jpg)

I [followed this guide](https://www.makenprint.uk/3d-printing/3d-printing-guides/skr-v1-4-adding-neopixel-leds/) to add 20 Neopixel LED lights to the bottom of the X gantry. This also required the DCDC Power adapter to allow higher power draw from the main board.

## Optical Endstops

![Optical Endstop on X Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/optical-endstop.jpg)

The stock clicky switches are only rated to a certain number of presses before they fail. I wanted to try out optical endstops to replace the clicky switches to stop any extra stresses of the gantry constantly hitting the frame.

## 0.9 Degree Motors

![LDO X Motor](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/ldo-motor-installed.jpg)

Since tuning the printer to remove as many imperfections in my prints as possible, I started to notice Vertical Fine Artifacts in my prints:

![VFAs in print](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hardware-upgrades/vfas-in-print.jpg)

[This page on the Prusa Printer Forums](https://forum.prusaprinters.org/forum/original-prusa-i3-mk3s-mk3-user-mods-octoprint-enclosures-nozzles/stepper-motor-upgrades-to-eliminate-vfa-s-vertical-fine-artifacts/) suggests replacing the stock 1.8 degree motors with higher resolution 0.9 degree stepper motors.

I will update when I have been using them for a while to see the results.
