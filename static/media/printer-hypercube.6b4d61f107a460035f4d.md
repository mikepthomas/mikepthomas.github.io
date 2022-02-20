# Upgrading my Anet A8 to a Hypercube

Febuary 15, 2022 by [Mike Thomas](https://github.com/mikepthomas)

The steps I have taken to migrate from the Anet A8's acrylic frame to a CoreXY Hypercube style printer.

![Printed parts for Hypercube](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hypercube/hypercube-hero.jpg)

---

## Table of contents

1. [Frame](#frame)
2. [X Axis](#x-axis)
3. [Y Axis](#y-axis)
4. [Z Axis](#z-axis)
5. [Bed Mounting](#bed-mounting)
6. [Electronics Case](#electronics-case)

## Frame

I have looked into [a few different options for a new frame](printer-future-upgrades.md#frame) for my 3D Printer and eventually settled on an LDO kit for a Voron 1.8.

The four vertical corner extrusions, and the four front and rear extrusions on the 300mm Spec Voron 1.8 frame are exactly the same size as the ones required for the Anet Evolution. The 6 side extrusions, however, are 40mm longer.

What I am planning on doing to remedy this is instead of using 2 380mm smooth guide rods for the Z axis and two for the Y axis from the Anet A8 that the Anet Evolution suggests. I am going to use all four 380mm guide rods for the Z axis, like in the double Z axis version of the Hypercube Evolution. I will then purchase 2 new 400mm smooth guide rods to use for the Y axis. These seem to come in standard sizes and therefore may be about 20mm short, if this is the case I will modify the motor mounts and belt idlers to fit the rods.

The other reason for purchasing the frame for the Voron 1.8 instead of purchasing custom cut extrusion is that it is fairly difficult to find aluminium extrusion in the UK that is NOT V-slot. I want T-slot extrusion so that I have the ability to install [MGN9 linear rails](printer-future-upgrades.md#linear-rails) in the future. As the name suggests MGN9 rails are 9mm wide however the widest part of V-Slot extrusion is 11mm wide.

The kit I purchased also comes with the extrusions to build the electronics case into the rear of the printer (the newer Trident and Voron2 moved their electronics to the bottom of the printer) which means that I will not need to find or design an electronics case to fit, the Anet Evolution only has a case for the stock Anet A8 electronics.

## X Axis

To start off with I will not be deviating too far from the Anet Evolution. I will be printing the Belt clamp with belt tensioners from that and [eventually plan to upgrade the toolhead in the future](printer-future-upgrades.md#hotend-upgrade)

| Item                                                                       | Quantity | Material                                                               | Size | Weight | Cost |
| -------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [1_Carriage_X_NewVersion](https://www.thingiverse.com/thing:2786292/files) | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |
| [2_Belt_Clamp.stl](https://www.thingiverse.com/thing:2786292/files)        | 2        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [4_Belt_Tensioner](https://www.thingiverse.com/thing:2786292/files)        | 4        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |

## Y Axis

I have chosen to [replace the stock Y carriages with a remixed version](https://www.thingiverse.com/thing:2907433) by [osvalijr](https://www.thingiverse.com/osvalijr) as I prefer the modularity of them and it will allow me to print the bearing blocks in a different accent colour.

| Item                                                             | Quantity | Material                                                               | Size | Weight | Cost |
| ---------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [1x_Conjunto_Y_Corpo](https://www.thingiverse.com/thing:2907433) | 2        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [1x_Conjunto_Y_Trava](https://www.thingiverse.com/thing:2907433) | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |
| [2x_Conjunto_Y_Bucha](https://www.thingiverse.com/thing:2907433) | 4        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |

As I have a slightly longer Y axis compared to the Anet Evolution, I have redesigned some parts to allow me to use Y Guide rods that are 20mm too short for the frame.

I remixed the Belt Idlers from the [reinforced ones](https://www.thingiverse.com/thing:3853322) by [yoloswagersaurus](https://www.thingiverse.com/yoloswagersaurus) I extended the Y rod clamps by 13mm to make the full width of the Y clamps 25mm.

![Belt Idlers with extended Y clamps](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hypercube/belt-idlers.png)

| Item                                                                                                                    | Quantity | Material                                                               | Size | Weight | Cost |
| ----------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [XY Idler Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Idlers/XY%20Idler%20Left.stl)   | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [XY Idler Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Idlers/XY%20Idler%20Right.stl) | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |

I remixed the XY Motor brackets from the ones from the Anet Evolution (Nut Remix) to extend the Y rod clamps by 10mm, this including the extra on the Idlers should make up the 20mm I have short on my Y axis guide rods.

To support the Y motor, I want to add a [Y Motor support bracket](https://www.thingiverse.com/thing:3015584), however this if for the Hypercube Evolution and therefore, will only fit 3030 aluminium extrusion. I have redesigned this to fit the motor bracket that fit 2020 extrusion

![Y motor suport bracket](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hypercube/y-motor-support-bracket.png)

| Item                                                                                                                                                         | Quantity | Material                                                               | Size | Weight | Cost |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [XY Stepper Mount - Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20XY%20Motor%20Mounts/XY%20Stepper%20Mount%20-%20Left.stl)   | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [XY Stepper Mount - Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20XY%20Motor%20Mounts/XY%20Stepper%20Mount%20-%20Right.stl) | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [Motor Brace Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Motor%20Brace/Motor%20Brace%20Left.stl)                           | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |
| [Motor Brace Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Motor%20Brace/Motor%20Brace%20Right.stl)                         | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |

If there is too much flex from the printed parts I will replace the stainless steel guide rods with some 8mm carbon fiber rods. I can then easilly cut these to the exact size required with a Dremel and have the added benefit of making the gantry lighter.

## Z Axis

As I will be using standard Nema 17 motors, with separate lead screws, connected with the stock flexible couplers, I want to support the lead screw with standard 608 bearings.

I have designed a holder for the bearing to sit on top of the couplers inspired by the [Z Axis Motor With Bearing Holder](https://www.thingiverse.com/thing:2780754) by [butchja](https://www.thingiverse.com/butchja)

![Z Motor Bearing Support](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hypercube/z-motor-bearing-support.png)

| Item                                                                                                                                               | Quantity | Material                                                               | Size | Weight | Cost |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [2_Z_Motor_Mount](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Bearing%20Fixer/Hypercube%20Z%20Bearing%20Fixer.stl) | 2        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [Z Motor Bearing](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Motor%20Bearing/Z%20Motor%20Bearing.stl)             | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |

I have printed [Z Axis anti wobble](https://www.thingiverse.com/thing:2907460) by [osvalijr](https://www.thingiverse.com/osvalijr) to support the top of the lead screw.

| Item                                                                      | Quantity | Material                                                               | Size | Weight | Cost |
| ------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [1x_Right_Z_Wooble_608z](https://www.thingiverse.com/thing:2907460/files) | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [1x_left_Z_Wooble_608z](https://www.thingiverse.com/thing:2907460/files)  | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |

I have remixed the Z Rail Arms to recess the screw head so that I can use socket head screws instead of button head screws.

| Item                                                                                                                                                  | Quantity | Material                                                         | Size | Weight | Cost |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | ---- | ------ | ---- |
| [Z Rail Arm Bottom Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Bottom%20Left.stl)   | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) |      |        |      |
| [Z Rail Arm Bottom Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Bottom%20Right.stl) | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) |      |        |      |
| [Z Rail Arm Top Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Top%20Left.stl)         | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) |      |        |      |
| [Z Rail Arm Top Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Top%20Right.stl)       | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) |      |        |      |

## Bed Mounting

The bearing clamps to mount the bed carriage to the Z axis are from the Anet Evolution however, as I am using [Igus DryLin RJ4JP 01-08 Bearings](https://www.igus.com/product/990). The bearings are not as snug in the holders as the stainless steel ones. Therefore, I took inspiration from [this Z Bearing Fixer](https://www.thingiverse.com/thing:3095514) by [Budiman7x](https://www.thingiverse.com/Budiman7x) and redesigned them to fit my smaller 8mm guide rods.

![Z Bearing Fixer](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-hypercube/z-bearing-fixer.png)

| Item                                                                                                                                               | Quantity | Material                                                               | Size | Weight | Cost |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ---- | ------ | ---- |
| [2_Z_Axis_Holder](https://www.thingiverse.com/thing:2786292/files)                                                                                 | 4        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |      |        |      |
| [Z Bearing Fixer](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Bearing%20Fixer/Hypercube%20Z%20Bearing%20Fixer.stl) | 4        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |
| [2_Z_Nut_Braket](https://www.thingiverse.com/thing:2786292/files)                                                                                  | 2        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |      |        |      |

Bed Mounts remixed from https://www.thingiverse.com/thing:3351036

## Electronics Case

The Anet Evolution comes with STLs to print a case to attach to the 2020 aluminium extrusion, however it is for the stock Anet A8 board, I have [upgraded mine to an SKR 1.4 Turbo](printer-hardware-upgrades.md). There are [cases on Thingyverse that may work](https://www.thingiverse.com/search?q=SKR+1.4+case+for+2020) but as I am using a Voron Frame I might as well print the parts required for the [Rear Electronics Enclosure](https://github.com/VoronDesign/Voron-1/tree/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure) and mount the electronics on DIN rails. This will require me to design some mounts similar to the [Raspberry Pi bracket](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/raspberrypi_bracket.stl) that I can mount the [BIQU Mosfets](https://www.biqu.equipment/products/3d-printer-parts-heating-controller-mks-mosfet-for-heat-bed-extruder-mos-module-exceed-30a-support-big-current) for the heated bed and hotend.
