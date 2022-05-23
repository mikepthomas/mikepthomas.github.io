# Assembling my first Voron printer

Created Febuary 17, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated May 23, 2022

The steps I have taken to print and source parts to assemble a Voron 1.8.

![Voron Hero](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/voron-hero.jpg)

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Assembling The Frame](#assembling-the-frame)
3. [Printing Parts](#printing-parts)
   1. [Tools](#tools)
   2. [Gantry](#gantry)
   3. [Z Axis](#z-axis)
   4. [X Axis](#x-axis)
   5. [Afterburner](#afterburner)
   6. [Endstops](#endstops)
   7. [Wire Path](#wire-path)
   8. [Bottom Compartment](#bottom-compartment)
   9. [Electronics Compartment](#electronics-compartment)
   10. [Rear Panel and Exhaust](#rear-panel-and-exhaust)
   11. [Panel Mounting](#panel-mounting)

## Sourcing Parts

I had originally chosen parts for the [Hypercube](printer-hypercube.md) that will lead up to re-building it into a Voron 1.8. However, I have chosen to build a new printer rather than upgrade my existing one in case I need to reprint more parts. I have already sourced many of the parts on the [BOM from the configurator](https://www.vorondesign.com/voron1.8) and I will replace some with alternatives that I already have (see the notes columns for details).

The quantities here are from the 1.8 BOM, however I am planning on swapping out a few parts for the updated versions from the Trident. Therefore these quantities may not be accurate and I will also need to source more items for some [Mods](printer-voron-1.8-mods.md) and future upgrades that I would like to implement.

### Fasteners

![LDO Hardware Kit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ldo-hardware-kit.jpg)

I am aware that [the LDO Hardware Kit I purchased is for the 2.4](https://www.printyplease.uk/VoronPrinters/Voron2.4/LDO2.4Fasteners) and not the 1.8, however, all of the parts are the same except for the Knurled Nuts and it doesn't contain the Yellow Die Spring. I got a good discount on it (original price £83, I got it for £50) and I have sourced the missing quantities of parts from elsewhere. I should also have many spares left over for Mods and future projects.

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| M5x40 SHCS                 | 8        | 29       |       |
| M5x30 BHCS                 | 6        | 15       |       |
| M5x16 BHCS                 | 67       | 69       |       |
| M5x10 BHCS                 | 71       | 104      |       |
| M5 Hexnut                  | 8        | 19       |       |
| M5 1mm Spacer              | 20       | 50       |       |
| M5 T-nut                   | 83       | 130      |       |
| M4x6 BHCS                  | 4        | 20       |       |
| M3x40 SHCS                 | 5        | 20       |       |
| M3x30 SHCS                 | 25       | 30       |       |
| M3x20 SHCS                 | 10       | 26       |       |
| M3x16 SHCS                 | 17       | 66       |       |
| M3x12 SHCS                 | 30       | 77       |       |
| M3x8 SHCS                  | 171      | 254      |       |
| M3x6 BHCS                  | 20       | 47       |       |
| M3 Hexnut                  | 7        | 50       |       |
| M3 Washer                  | 10       | 50       |       |
| M3 T-nut                   | 120      | 160      |       |
| M3 Hammer Head T-nuts      | 54       | 97       |       |
| M3 Threaded Insert         | 50       | 78       |       |
| M3 Knurled Nut (DIN 466-B) | 3        | 5        |       |
| M2x10 Self-Tapping Screw   | 7        | 51       |       |
| Yellow Die Spring - M3     | 1        | 10       |       |

### Vibration Management

| Item                   | Quantity | Received | Notes                                                                                     |
| ---------------------- | -------- | -------- | ----------------------------------------------------------------------------------------- |
| Rubber Compressor Foot | 4        | 4        | In [LDO Hardware Kit](https://www.printyplease.uk/VoronPrinters/Voron2.4/LDO2.4Fasteners) |

### Frame

![LDO Frame Kit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/voron-frame.jpg)

I have looked into a few different options for a new frame for my 3D Printer and eventually settled on an [LDO frame kit for a Voron 1.8](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199). All these parts (Except for the DIN rails) come from this kit.

| Item                                     | Quantity | Received | Notes                                 |
| ---------------------------------------- | -------- | -------- | ------------------------------------- |
| DIN 3 Rails (35mm W) - 420mm             | 3        | 3        | BOM only specifies 2 but manual has 3 |
| Misumi HFSB5-2020-290                    | 1        | 1        |                                       |
| Misumi HFSB5-2020-420-TPW                | 10       | 10       |                                       |
| Misumi HFSB5-2020-420                    | 1        | 1        |                                       |
| Misumi HFSB5-2020-230                    | 2        | 2        |                                       |
| Misumi HFSB5-2020-380                    | 1        | 1        |                                       |
| Misumi HFSB5-2020-500-LTP-RCP-AV380-AP40 | 4        | 4        |                                       |
| Misumi HFSB5-2020-200-TPW                | 2        | 2        |                                       |
| Misumi HFSB5-2020-420-AH45-BH375         | 2        | 2        |                                       |

### Motion

![Voron 1.8 Belt Path](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/belt-path.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                       | Quantity | Received | Notes |
| ------------------------------------------ | -------- | -------- | ----- |
| GT2 20T Pulley (5mm ID 6mm W)              | 3        | 3        |       |
| GT2 20T Toothed Idler (5mm ID 6mm W)       | 2        | 4        |       |
| F695 Bearing                               | 20       | 30       |       |
| LM8LUU Linear Bearing                      | 4        | 4        |       |
| TR8x8 Leadscrew Nut                        | 2        | 6        |       |
| 5x30mm Shaft                               | 1        | 1        |       |
| BMG Extruder Components Kit                | 1        | 2        |       |
| Linear Rail MGN9H 350mm                    | 4        | 4        |       |
| Linear Shaft 8x320mm                       | 4        | 4        |       |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm | 2        | 4        |       |

### Print Bed

![Voron 1.8 Print Bed and Wire Path](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/print-bed-and-wire-path.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                        | Quantity | Received | Notes |
| ----------------------------------------------------------- | -------- | -------- | ----- |
| 3M 468MP Adhesive Sheet - 12"x12"                           | 1        | 1        |       |
| PEI 0.04" Sheet - 12"x12"                                   | 1        | 1        |       |
| MIC6 5/16" Plate - 12"x12"                                  | 1        | 1        |       |
| Keenovo Silicone AC Heater w/ thermistor - 250x250mm (450W) | 1        | 1        |       |

### Wires

| Item                                      | Quantity | Received | Notes              |
| ----------------------------------------- | -------- | -------- | ------------------ |
| Nylon Cable Ties 4"                       | 40       | 100      |                    |
| 1/2" Braided Cable Sheathing (ft)         | 5        | 16       |                    |
| 20AWG Silicone Cable (ft)                 | 10       | 137      | in various colours |
| 24AWG Silicone Cable (ft)                 | 100      | 177      | in various colours |
| Spade Crimp Terminal 4.8mm Female         | 10       | 20       |                    |
| JST XH Connector Plug 4 Position          | 5        | 20       |                    |
| JST XH Connector Plug 3 Position          | 4        | 20       |                    |
| JST XH Connector Plug 2 Position          | 2        | 20       |                    |
| JST XH Female Pin                         | 40       | 200      |                    |
| MicroFit3 Connector Plug 4 Position       | 2        | 10       |                    |
| MicroFit3 Connector Plug 3 Position       | 1        | 10       |                    |
| MicroFit3 Connector Plug 2 Position       | 5        | 10       |                    |
| MicroFit3 Connector Receptacle 4 Position | 2        | 10       |                    |
| MicroFit3 Connector Receptacle 3 Position | 1        | 10       |                    |
| MicroFit3 Connector Receptacle 2 Position | 5        | 10       |                    |
| MicroFit3 Female Pin                      | 40       | 140      |                    |
| MicroFit3 Male Pin                        | 40       | 140      |                    |
| 10x11 Cable Chain - 1m                    | 2        | 2        |                    |

### Electronics

![LDO Motor Kit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ldo-motors.jpg)

| Item                               | Quantity | Received | Notes                                                                                                                                    |
| ---------------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| NEMA17 Motor 17HS19-2004S          | 2        | 2        | Ordered some [larger ones than that are in the LDO Voron V1/V2 HT Motor Kit](https://www.onetwo3d.co.uk/product/ldo-42sth48-2004mahvrn/) |
| SPDT KW10 Limit Micro Switch       | 3        | 30       |                                                                                                                                          |
| PL-08N Inductive Probe             | 1        | 1        | Using Tronxy XY-08N. Going to replace with [Klicky Probe](printer-voron-1.8-mods.md#klicky-probe)                                        |
| E3D V6 Bowden Hotend Kit (24V)     | 1        | 1        |                                                                                                                                          |
| 40x40x20 Centrifugal Fan (24V)     | 1        |          | Using a 5015 Centrifugal Fan in Stealthburner instead                                                                                    |
| 40x40x10 Axial Fan (24V)           | 1        | 1        |                                                                                                                                          |
| Mini 12864 Display                 | 1        | 1        |                                                                                                                                          |
| Inlet Power Socket IEC320 C14      | 1        | 1        |                                                                                                                                          |
| Keystone CAT6 Insert (Optional)    | 1        | 2        | 1 Ethernet and 1 USB                                                                                                                     |
| 60x60x20 Fan (24V)                 | 2        | 2        |                                                                                                                                          |
| SKR 1.4                            | 1        | 1        | I have the Turbo version                                                                                                                 |
| TMC2209 Stepper Motor Driver       | 5        | 5        |                                                                                                                                          |
| USB Cable A-male B-male            | 1        | 1        |                                                                                                                                          |
| Raspberry Pi 4                     | 1        |          | Using Raspberry Pi 3B+ Instead as I already have one                                                                                     |
| Mean Well LRS-200-24 PSU           | 1        | 1        |                                                                                                                                          |
| Mean Well RS-25-5 PSU              | 1        | 1        |                                                                                                                                          |
| Omron G3A-210B-DC5 SSR             | 1        | 1        |                                                                                                                                          |
| DIN Rail Mount Bracket for G3A SSR | 1        | 1        |                                                                                                                                          |
| BAT85 Diode                        | 1        | 7        | My Tronxy XY-08N seems to work fine on SKR 1.4 Turbo using endstop pins                                                                  |
| C13 Power Cord                     | 1        | 3        |                                                                                                                                          |
| Thermal Fuse (120C)                | 1        | 5        |                                                                                                                                          |
| NEMA17 Motor 17HS08-1004S          | 1        | 1        | In [LDO Voron V1/V2 HT Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-voron-v1-v2-ht-motor-kit)                  |
| NEMA17 TR8x8 300mm Linear Stepper  | 2        | 2        | In [LDO V1 Z Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-v1-z-motor-kit)                                      |

### Panels

![Voron 1.8 Panels](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/panels.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                 | Quantity | Received | Notes                                                                                                                                                                            |
| ------------------------------------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Coroplast Sheet - 420x420x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 435x435x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 198x434x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 246x434x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 236x415x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 242x46x4 mm        | 2        | 2        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 419x66x4 mm        | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Acrylic Sheet Clear - 217x444x2.5 mm | 2        | 2        | 3mm thickness                                                                                                                                                                    |
| Acrylic Sheet Clear - 434x444x2.5 mm | 2        | 2        | 3mm thickness                                                                                                                                                                    |
| Acrylic Sheet Clear - 434x434x2.5 mm | 1        | 1        | 3mm thickness                                                                                                                                                                    |

### Misc

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| Fume Extractor Carbon Filter Element | 1        | 1        |       |
| 4mm Bowden Coupler                   | 1        | 4        |       |
| Bowden Tube (m)                      | 1        | 3        |       |
| 3M VHB Tape 5952                     | 1        | 1        |       |
| Loctite Blue Threadlocker Stick      | 1        | 1        |       |
| Mobil EP2 Grease                     | 1        | 1        |       |
| Tesa Wire Loom Harness Tape          | 1        | 1        |       |
| 1mm Foam Tape                        | 1        | 1        |       |
| 6x3mm Neodimium Magnet               | 8        | 41       |       |
| PTFE Tube (4mm OD 3mm ID) - 1m       | 1        | 1        |       |

## Assembling The Frame

![LDO Frame Kit Assembled](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/voron-frame-assembled.jpg)

### Parts Used

| Item                                     | Quantity |
| ---------------------------------------- | -------- |
| M5x16 BHCS                               | 20       |
| M5x30 BHCS                               | 4        |
| Misumi HFSB5-2020-420-TPW                | 10       |
| Misumi HFSB5-2020-500-LTP-RCP-AV380-AP40 | 4        |
| Rubber Compressor Foot                   | 4        |

## Printing Parts

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

### Tools

| Item                                                                                                                                              | Quantity | Material                                                         |      Printed       | Notes                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | :----------------: | ------------------------------------------------ |
| [rail_installation_guide_center](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/rail_installation_guide_center_x2.stl)           | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          | :heavy_check_mark: |                                                  |
| [v1.8_extrusion_drilling_jig](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/v1.8_extrusion_drilling_jig.stl)                    | 1        |                                                                  |        :x:         | Not Required as I brought my frame as a kit      |
| [pulley_jig](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Tools/pulley_jig.stl)                                                      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          | :heavy_check_mark: | This is a 2.4 Part, has spacer for extruder gear |
| [TensionMeter](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Kruppes/Tension_Meter/TensionMeter.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          | :heavy_check_mark: | This is a Voron Users Mod by Kruppes             |
| [lower_extrusion_alignment](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/natewalck/v1.8_Jigs/lower_extrusion_alignment.stl) | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) | :heavy_check_mark: | This is a Voron Users Mod by natewalck           |

### Gantry

![Voron 1.8 Gantry](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/gantry.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

Some of the gantry parts (specifically the AB Drive Units and Front Idlers) will be replaced with the upgraded versions from the Trident as they should fit the 1.8.

#### :white_check_mark: AB Drive Units

![Voron 1.8 AB Drive Units](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ab-drive.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                             | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                     |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------- |
| [wire_cover](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/%5Ba%5D_wire_cover.stl)           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.30m | 3.31g  | £0.06 | :heavy_check_mark: | This is a Trident Part    |
| [a_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/a_drive_frame_lower.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.58m | 21.86g | £0.42 | :heavy_check_mark: | This is a Trident Part    |
| [a_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/a_drive_frame_upper.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.21m | 20.93g | £0.40 | :heavy_check_mark: | This is a Trident r1 Part |
| [b_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/b_drive_frame_lower.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.93m | 20.21g | £0.38 | :heavy_check_mark: | This is a Trident Part    |
| [b_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/b_drive_frame_upper.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.18m | 20.85g | £0.40 | :heavy_check_mark: | This is a Trident r1 Part |

![ABS A Drive Unit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/a-drive-abs-tuning.jpg)

The lower A drive was the first time I have tried to print with ABS. The upper was printed after a few tweaks to my slicer settings and updates to my Marlin firmware configuration. I am now quite happy with the results and will carry on printing the rest of the parts.

##### Assembly

![Voron Trident AB Drive Units](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ab-drive-complete.jpg)

###### Parts Used

| Item                          | Quantity |
| ----------------------------- | -------- |
| F695 Bearing                  | 12       |
| GT2 20T Pulley (5mm ID 6mm W) | 2        |
| M3 Threaded Insert            | 1        |
| M3x10 SHCS                    | 1        |
| M3x30 SHCS                    | 6        |
| M5 1mm Spacer                 | 12       |
| M5x30 BHCS                    | 4        |
| NEMA17 Motor 17HS19-2004S     | 2        |

#### :white_check_mark: Front Idlers

![Voron 1.8 Front Idlers](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/front-idlers.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                           | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                     |
| ------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------- |
| [tensioner_left](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_left.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 2.61m | 6.66g  | £0.13 | :heavy_check_mark: | This is a Trident r1 Part |
| [tensioner_right](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_right.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 2.61m | 6.65g  | £0.13 | :heavy_check_mark: | This is a Trident r1 Part |
| [front_idler_a](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/front_idler_a_x2.stl)          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.19m | 13.22g | £0.25 | :heavy_check_mark: | This is a Trident r1 Part |
| [front_idler_b](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/front_idler_b_x2.stl)          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.07m | 7.83g  | £0.15 | :heavy_check_mark: | This is a Trident r1 Part |

##### Assembly

![Voron Trident Front Idlers](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/front-idlers-complete.jpg)

The screws on the front of the idlers move the tensioners forwards and backwards, this allows for easy adjustment of the belt tension.

###### Parts Used

| Item               | Quantity |
| ------------------ | -------- |
| F695 Bearing       | 4        |
| M3 Threaded Insert | 2        |
| M3 Washer          | 2        |
| M3x40 SHCS         | 2        |
| M5 1mm Spacer      | 4        |
| M5 Hexnut          | 2        |
| M5x40 SHCS         | 2        |

#### :white_check_mark: Rear Crossbar

Both fully assembled AB Drive Units are required to install the rear crossbar.

##### Assembly

![Installed the rear crossbar](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/rear-crossbar-installed.jpg)

###### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M5 T-nut              | 8        |
| M5x10 BHCS            | 8        |
| Misumi HFSB5-2020-290 | 1        |

#### :white_check_mark: Linear Rails

![Cleaning the bearings with IPA](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bearings-cleaning.jpg)

The linear rails come delivered with a coating of oil to prevent rust during storage and shipping. This coating is not a lubricant and needs to be removed before applying a coating of grease to the bearing surfaces.

I carefully removed the carriages from the rails and soaked them in Isopropyl alcohol for a few hours, then let them air dry before applying Mobil EP2 grease with a syringe directly to the ball bearings. I then reassembled the rails and applied more grease through one of the mounting holes behind the carriage.

![Bearings assembled and ready for assembly](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bearings-assembled.jpg)

##### Assembly

![Installed the front idlers and linear rails](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/linear-rails-installed.jpg)

###### Parts Used

| Item                    | Quantity |
| ----------------------- | -------- |
| Linear Rail MGN9H 350mm | 2        |
| M3 T-nut                | 20       |
| M3 Washer               | 1        |
| M3x8 SHCS               | 18       |
| M3x12 BHCS              | 1        |
| M5 T-nut                | 14       |
| M5x10 BHCS              | 13       |

### Z Axis

![Voron 1.8 Z Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/z-axis.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :white_check_mark: Bed Frame

![Voron 1.8 Bed Frame](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bed-frame.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                        | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | ----- |
| [bed_mount_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/bed_mount_front.stl)        | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 10.22m | 26.05g | £0.49 | :heavy_check_mark: |       |
| [z_bearing_block_a](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_a_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.09m  | 18.07g | £0.34 | :heavy_check_mark: |       |
| [z_bearing_block_b](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_b_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.09m  | 18.07g | £0.34 | :heavy_check_mark: |       |

##### Assembly

![Assembled Bed Frame](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bed-frame-assembled.jpg)

The bed frame will not only hold the bed, but will also be a base for the [Z endstop](#endstops), some [Wago mounts](printer-voron-1.8-mods.md#wago-mounts) to connect the low voltage connections to the endstop and thermistor and the mains connections to the bed, and also [Bed Fans](printer-voron-1.8-mods.md#bed-fans) to circulate hot air around to heat up the enclosure.

###### Parts Used

| Item                             | Quantity |
| -------------------------------- | -------- |
| LM8LUU Linear Bearing            | 4        |
| M5 T-nut                         | 10       |
| M5x10 BHCS                       | 8        |
| M5x16 BHCS                       | 6        |
| Misumi HFSB5-2020-200-TPW        | 2        |
| Misumi HFSB5-2020-420-AH45-BH375 | 2        |

#### :white_check_mark: Z Axis Rods

| Item                                                                                                                        | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [leadscrew_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_leadscrew_block_x2.stl)             | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 3.87m | 9.88g  | £0.19 | :heavy_check_mark: |                                                                                                                                                                    |
| [z_shaft_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_z_shaft_retainer_x8.stl)           | 8        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.89m | 2.26g  | £0.04 | :heavy_check_mark: |                                                                                                                                                                    |
| [z_motor_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_motor_mount_x2.stl)                         | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 8.50m | 21.68g | £0.41 | :heavy_check_mark: |                                                                                                                                                                    |
| [z_cable_chain_mount](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Z_Assembly/z_cable_chain_mount_3hole.stl) | 1        |                                                         |       |        |       |     :question:     | This is a Trident Part. May need to make some modifications for it to fit and I will need to [print ends for the chain](printer-voron-1.8-mods.md#printable-chain) |

##### Assembly

![Assembled Z Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/z-axis-assembled.jpg)

###### Parts Used

| Item                              | Quantity |
| --------------------------------- | -------- |
| Linear Shaft 8x320mm              | 4        |
| M3 Hexnut                         | 4        |
| M3x12 SHCS                        | 12       |
| M5 T-nut                          | 24       |
| M5x10 BHCS                        | 20       |
| M5x16 BHCS                        | 4        |
| NEMA17 TR8x8 300mm Linear Stepper | 2        |
| TR8x8 Leadscrew Nut               | 2        |

### X Axis

The X Axis was flipped on the Trident (linear rails are on the bottom of the extrusion like the V2, this will not work on the 1.8 as the guide rails are mounted to the bottom of the extrusion too). I had originally wanted to use the Trident toolhead carriage with a single MGN12 linear rail, however due to the changes on the X axis the endstops were moved to the XY Joints not the toolhead. Because of this I wouldn't have anywhere to mount my endstop so I am not using an MGN12 rail here and instead using the dual MGN9s of the original design.

![Voron 1.8 X Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/x-axis.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :white_check_mark: XY Joints

| Item                                                                                                                                            | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | --------------------------------------- |
| [cap](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/cap_x2.stl)                                              | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.12m  | 0.30g  | £0.01 | :heavy_check_mark: |                                         |
| [xy_joint_left_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_lower.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.34m  | 13.61g | £0.26 | :heavy_check_mark: |                                         |
| [xy_joint_left_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_upper.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 10.15m | 25.89g | £0.49 | :heavy_check_mark: |                                         |
| [xy_joint_right_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_lower.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.71m  | 14.55g | £0.28 | :heavy_check_mark: |                                         |
| [xy_joint_right_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_upper_generic_chain.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 9.83m  | 25.07g | £0.48 | :heavy_check_mark: | This is the Generic Cable Chain Version |

##### Assembly

![XY Joints Assembled](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/xy-joints-assembled.jpg)

The bolts on the linear rails and the X axis extrusion are left loose at this stage as they will need to be aligned when the X carriage is installed. I have left the little white plastic clips on the rails here so that the blocks do not fall off the ends of the linear rails.

###### Parts Used

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| F695 Bearing                         | 4        |
| GT2 20T Toothed Idler (5mm ID 6mm W) | 2        |
| Linear Rail MGN9H 350mm              | 2        |
| M3 T-nut                             | 12       |
| M3 Threaded Insert                   | 3        |
| M3x8 SHCS                            | 20       |
| M5 1mm Spacer                        | 4        |
| M5 Hexnut                            | 6        |
| M5 T-nut                             | 4        |
| M5x16 BHCS                           | 4        |
| M5x30 BHCS                           | 2        |
| M5x40 SHCS                           | 6        |
| Misumi HFSB5-2020-380                | 1        |

#### :white_check_mark: X Carriage

| Item                                                                                                                                         | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [belt_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/%5Ba%5D_belt_clamp_x2.stl)                   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.21m | 0.54g  | £0.01 | :heavy_check_mark: |       |
| [probe_retainer_bracket](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/probe_retainer_bracket.stl)      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.18m | 0.46g  | £0.01 | :heavy_check_mark: |       |
| [x_carriage_frame_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_left.stl)        | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 6.86m | 17.48g | £0.33 | :heavy_check_mark: |       |
| [x_carriage_frame_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_right_V1.8.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 6.75m | 17.20g | £0.33 | :heavy_check_mark: |       |
| [x_carriage_pivot_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_pivot_block.stl)      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.25m | 3.19g  | £0.06 | :heavy_check_mark: |       |

##### Assembly

![X Carriage Assembled](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/x-carriage-assembled.jpg)

The stock design uses an inductive probe in the toolhead, either a PL-08N or an Omron TL-Q5MC2. I do have a XY-08N which is similar to the PL-08N, however, due to the close proximity to the hotend the inductive probe has a tendency to melt. Therefore I have chosen instead to use [Klicky Probe](printer-voron-1.8-mods.md#klicky-probe).

###### Parts Used

| Item                            | Quantity |
| ------------------------------- | -------- |
| Black 20AWG Silicone Cable (mm) | 300      |
| M2x10 Self-Tapping Screw        | 1        |
| M3 Hexnut                       | 3        |
| M3 Threaded Insert              | 6        |
| M3x8 SHCS                       | 8        |
| M3x10 SHCS                      | 2        |
| M3x12 SHCS                      | 2        |
| M3x16 SHCS                      | 2        |
| M3x30 SHCS                      | 3        |
| SPDT KW10 Limit Micro Switch    | 1        |

#### :white_check_mark: Belts

##### Assembly

![Belts Installed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/belts-installed.jpg)

The belts are routed in a layout that is known as [CoreXY](https://corexy.com/theory.html). When one motor rotates the toolhead will move diagonally, when both motors rotate in the same direction the toolhead will move in the X axis and when both motors rotate in opposite directions the toolhead will move in the Y axis.

###### Parts Used

| Item                                       | Quantity |
| ------------------------------------------ | -------- |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm | 2        |

### Afterburner

![Afterburner](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/afterburner.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

I will not be printing the parts for the Afterburner specified in the Voron 1.8 repository yet as there is an upcoming update to the Afterburner, called the Stealthburner that is not yet released.

I have documented the parts required for the toolhead on the [extruders and toolheads page](printer-extruders-and-toolheads.md#voron-afterburner-stealthburner) as it is still in a bit of flux due to the Stealthburner still being in Beta.

![Clockwork 1 installed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/clockwork-installed.jpg)

I have built the toolhead up to this stage as the rest of the toolhead parts are still in Beta at the time of writing. :crossed_fingers: It will be released by the time I finish the rest of the build or at least I will I get the most up to date parts when I finally get to printing it.

### Endstops

#### :white_check_mark: Y Endstop

| Item                                                                                                                       | Quantity | Material                                            | Size  | Weight | Cost  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [y_endstop_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/AB_Drive_Units/y_endstop_housing.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 1.47m | 3.74g  | £0.07 | :heavy_check_mark: |       |

##### Assembly

![Y Endstop](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/y-endstop.jpg)

As I am using the Trident A/B Drive Units, I have had to move the Y Endstop to the opposite side of the machine to allow space for the toolhead wires to pass through the wire cover. The side panels will have 1mm foam tape on them and therefore, should allow enough clearance for the endstop wires to tuck between the panel and the outside of the extrusion. The wire will then be bundled with the B Motor wires down into the electronics compartment.

###### Parts Used

| Item                         | Quantity |
| ---------------------------- | -------- |
| 24AWG PTFE Cable (Black)     | 500mm    |
| M3x16 SHCS                   | 1        |
| M5x16 BHCS                   | 1        |
| SPDT KW10 Limit Micro Switch | 1        |

#### :negative_squared_cross_mark: Z Endstop

| Item                                                                                                 | Quantity | Material | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------------------------------------------------- | -------- | -------- | ---- | ------ | ---- | :-----: | ----- |
| [nozzle_probe](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Z_Endstop/nozzle_probe.stl) | 1        |          |      |        |      |   :x:   |       |

**_NOTE:_** I am not going to print the stock Z endstop, I will replace it with [Sexbolt Z Endstop](printer-voron-1.8-mods.md#sexbolt-z-endstop).

### Wire Path

#### :white_check_mark: Cable Chains

| Item                                                                                                                   | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                     |
| ---------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------- |
| [chain_wire_anchor](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/chain_wire_anchor_3hole_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.29m | 0.73g  | £0.01 | :heavy_check_mark: | This is a Trident r1 Part |

##### Assembly

![Cable Chains](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/cable-chains.jpg)

###### X Axis Chain

| Item                         | Quantity |
| ---------------------------- | -------- |
| 1/2" Braided Cable Sheathing | 150mm    |
| 10x11 Cable Chain            | 350mm    |
| M3 T-nut                     | 1        |
| M3x8 FHCS                    | 4        |
| Nylon Cable Ties 4"          | 1        |

###### Y Axis Chain

| Item                         | Quantity |
| ---------------------------- | -------- |
| 1/2" Braided Cable Sheathing | 250mm    |
| 10x11 Cable Chain            | 500mm    |
| M3 T-nut                     | 1        |
| M3x8 FHCS                    | 4        |
| Nylon Cable Ties 4"          | 1        |

###### Main Toolhead connector

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| 20AWG PTFE Cable (Black)             | 2200mm   |
| 20AWG PTFE Cable (Red)               | 2200mm   |
| 20AWG PTFE Cable (White)             | 2200mm   |
| 24AWG PTFE Cable (Black)             | 4400mm   |
| 24AWG PTFE Cable (Blue)              | 6600mm   |
| 24AWG PTFE Cable (Green)             | 6600mm   |
| 24AWG PTFE Cable (Red)               | 2200mm   |
| 24AWG PTFE Cable (White)             | 4400mm   |
| JST XH Connector Plug 2 Position     | 5        |
| JST XH Connector Plug 3 Position     | 1        |
| JST XH Connector Plug 4 Position     | 1        |
| MicroFit3 Connector Plug 14 Position | 1        |

###### ERCF Connector

| Item                                | Quantity |
| ----------------------------------- | -------- |
| 24AWG PTFE Cable (Red)              | 2200mm   |
| 24AWG PTFE Cable (Yellow)           | 2200mm   |
| JST XH Connector Plug 3 Position    | 1        |
| MicroFit3 Connector Plug 2 Position | 1        |

###### Neopixel Cable

| Item                                | Quantity |
| ----------------------------------- | -------- |
| 24AWG PTFE Cable (Black)            | 2200mm   |
| 24AWG PTFE Cable (Red)              | 2200mm   |
| 24AWG PTFE Cable (Yellow)           | 2200mm   |
| JST XH Connector Plug 3 Position    | 1        |
| MicroFit3 Connector Plug 3 Position | 1        |

#### :white_check_mark: Wire Management

It appears that these parts are not specified in the manual, I will use them for the A/B Motor wires and to bring the toolhead wires down to the rear electronics compartment.

| Item                                                                                                             | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes |
| ---------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [wire_anchor](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/wire_anchor_x2.stl) | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.65m | 1.65g  | £0.03 | :heavy_check_mark: |       |

##### Assembly

###### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3 Hammer Head T-nuts | 6        |
| M3x8 BHCS             | 6        |
| Nylon Cable Ties 4"   | 6        |

### Bottom Compartment

![Voron 1.8 Skirts and Bottom Compartment](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/skirts-and-bottom-compartment.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :white_check_mark: Skirts

| Item                                                                                                                            | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| [keystone_blank_insert](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Skirt/%5Ba%5D_keystone_blank_insert_x2.stl) | 2        |                                                         |        |        |       |        :x:         | This is a Trident Part. Not required as I am using both keystone spaces                                                            |
| [skirt_300_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_left_x3.stl)                 | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 12.90m | 32.89g | £0.62 | :heavy_check_mark: |                                                                                                                                    |
| [skirt_300_power](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_power.stl)                  | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 12.23m | 31.19g | £0.59 | :heavy_check_mark: |                                                                                                                                    |
| [skirt_300_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_right_x4.stl)               | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 12.92m | 32.95g | £0.63 | :heavy_check_mark: |                                                                                                                                    |
| [skirt_middle](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_middle_x3.stl)                     | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 7.49m  | 19.11g | £0.36 | :heavy_check_mark: |                                                                                                                                    |
| [foot_spacer](https://github.com/VoronDesign/Voron-1/blob/Voron1.6/STLs/Bottom_Skirts/foot_spacer_x4.stl)                       | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.28m  | 5.82g  | £0.11 | :heavy_check_mark: | This is a 1.6 Part. Required to raise the printer up and allow [Display Mount](printer-voron-1.8-mods.md#display-mount) to swivel. |

##### Assembly

![Power Skirt](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/power-skirt.jpg)

Before attaching the power skirt to the printer the power socket and Keystone inserts are installed into the part.

![Skirts Installed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/skirts-installed.jpg)

###### Parts Used

| Item                          | Quantity |
| ----------------------------- | -------- |
| Inlet Power Socket IEC320 C14 | 1        |
| M3 T-nut                      | 22       |
| M3x8 SHCS                     | 22       |
| Keystone CAT6 Insert          | 1        |
| Keystone USB Insert           | 1        |
| M3 Threaded Insert            | 8        |

#### :negative_squared_cross_mark: Display Module

| Item                                                                                                                                                              | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [mini12864_arm](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_arm_x2.stl)                               | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.74m | 4.45g  | £0.08 | :heavy_check_mark: | Will swap for [Display Mount](printer-voron-1.8-mods.md#display-mount)                                                                                                         |
| [mini12864_case_back](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Mini12864%20Case%20Back/Mini12864%20Case%20Back%20(Swivel).stl>) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.40m | 13.76g | £0.26 | :heavy_check_mark: | I have modified the mounting holes for this to make them closer together so that the [Display Mount Arms](printer-voron-1.8-mods.md#display-mount) will fit between the skirts |
| [mini12864_case_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_case_front.stl)                    | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 4.92m | 12.54g | £0.24 | :heavy_check_mark: | Will use this instead of [Display Mount Front](printer-voron-1.8-mods.md#display-mount) as it has been modified to allow the doors to open correctly                           |

**_NOTE:_** I will replace the stock display arms with [Display Mount](printer-voron-1.8-mods.md#display-mount).

#### :white_check_mark: Bottom Electronics Mounting

| Item                                                                                                                       | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                  |
| -------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------- |
| [cable_frame_anchor](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/cable_frame_anchor_x6.stl) | 5        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.27m | 0.68g  | £0.01 | :heavy_check_mark: | This is a Trident Part |
| [DIN_center_support](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/DIN_center_support_x2.stl) | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.30m | 0.77g  | £0.01 | :heavy_check_mark: | This is a Trident Part |
| [DIN_frame_mount](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/DIN_frame_mount_x4.stl)       | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.57m | 6.54g  | £0.12 | :heavy_check_mark: | This is a Trident Part |

##### Assembly

![DIN Rail Installed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/din-rail-installed.jpg)

###### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------- |
| Coroplast Sheet - 420x420x4 mm | 1        |
| DIN 3 Rails (35mm W) - 420mm   | 1        |
| M3x8 SHCS                      | 2        |
| M5 T-nut                       | 4        |
| M5x16 BHCS                     | 4        |

#### :white_check_mark: Bottom Electronics Brackets

| Item                                                                                                                                               | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------- |
| [psu_brace](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_brace.stl)              | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.97m | 2.46g  | £0.05 | :heavy_check_mark: |                        |
| [psu_mount_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_mount_clip_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.87m | 2.21g  | £0.04 | :heavy_check_mark: |                        |
| [rs25_psu_bracket](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/rs25_psu_bracket.stl)                                | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.29m | 5.84g  | £0.11 | :heavy_check_mark: | This is a Trident Part |

##### Assembly

![Bottom Compartment Electronics](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bottom-compartment-electronics.jpg)

###### Parts Used

| Item                               | Quantity |
| ---------------------------------- | -------- |
| DIN Rail Mount Bracket for G3A SSR | 1        |
| M3x6 BHCS                          | 2        |
| M4x6 BHCS                          | 5        |
| M5 T-nut                           | 1        |
| M5x10 BHCS                         | 1        |
| Mean Well LRS-200-24 PSU           | 1        |
| Mean Well RS-25-5 PSU              | 1        |
| Omron G3A-210B-DC5 SSR             | 1        |

### Electronics Compartment

![Voron 1.8 Electronics Compartment](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/electronics-compartment.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :white_check_mark: Rear Electronics Enclosure

| Item                                                                                                                                                       | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | ---------------------------------------------------------------------------------------- |
| [base_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_left.stl)                       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.48m  | 8.88g  | £0.17 | :heavy_check_mark: |                                                                                          |
| [base_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_right.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.48m  | 8.88g  | £0.17 | :heavy_check_mark: |                                                                                          |
| [corner_bracket_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 11.06m | 28.21g | £0.54 | :heavy_check_mark: |                                                                                          |
| [corner_bracket_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_right.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 11.06m | 28.21g | £0.54 | :heavy_check_mark: |                                                                                          |
| [din_bracket_base](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_base_x4.stl)      | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.60m  | 4.08g  | £0.08 | :heavy_check_mark: |                                                                                          |
| [din_bracket_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_clamp_x4.stl)    | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.31m  | 3.33g  | £0.06 | :heavy_check_mark: |                                                                                          |
| [panel_holder](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/panel_holder_x2.stl)              | 2        |                                                         |        |        |       |        :x:         | Will replace these with `front_panel_rest`                                               |
| [wire_cover_left](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/wire_cover_left.stl)                                                  | 1        |                                                         |        |        |       |     :question:     | This is a Trident r1 Part. I may need to make some modifications to this to make it fit. |
| [wire_cover_right](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/wire_cover_right.stl)                                                | 1        |                                                         |        |        |       |     :question:     | This is a Trident r1 Part. I may need to make some modifications to this to make it fit. |

##### Assembly

![Rear Electronics Enclosure](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/rear-electronics-enclosure.jpg)

The manual says to install the DIN Rails after fitting the enclosure. I found it easier to add the DIN rails to the enclosure and afterwards install the assembly to the frame.

![Rear DIN Rails](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/rear-din-rails.jpg)

###### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------- |
| Coroplast Sheet - 236x415x4 mm | 1        |
| Coroplast Sheet - 242x46x4 mm  | 2        |
| Coroplast Sheet - 419x66x4 mm  | 1        |
| DIN 3 Rails (35mm W) - 420mm   | 2        |
| M3 T-nut                       | 8        |
| M3x16 BHCS                     | 8        |
| M5 T-nut                       | 12       |
| M5x10 SHCS                     | 12       |
| Misumi HFSB5-2020-230          | 2        |
| Misumi HFSB5-2020-420          | 1        |

#### :wrench: Rear Electronics Brackets

| Item                                                                                                                                                               | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----------------------------------------------------------- |
| [controller_fan_guard](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_controller_fan_guard.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.80m | 4.59g  | £0.09 | :heavy_check_mark: |                                                             |
| [controller_fan_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/controller_fan_mount.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.44m | 13.88g | £0.26 | :heavy_check_mark: |                                                             |
| [pcb_din_clip](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/pcb_din_clip_x3.stl)                                                     | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.51m | 3.84g  | £0.07 | :heavy_check_mark: | This is a Trident r1 Part. 2 for SKR and 1 for Raspberry Pi |
| [raspberrypi_bracket](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/raspberrypi_bracket.stl)                                          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.77m | 4.51g  | £0.09 | :heavy_check_mark: | This is a Trident Part                                      |
| [SKR_bracket_inline_2pc](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/Controller_Mounts/SKR_bracket_inline_2pc.stl)                  | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.55m | 6.49g  | £0.12 | :heavy_check_mark: | This is a Trident Part                                      |

##### Assembly

![Controller Fan Mount](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/controller-fan-mount.jpg)

###### Parts Used

| Item                     | Quantity |
| ------------------------ | -------- |
| 3M VHB Tape 5952         | 1        |
| M2x10 Self-Tapping Screw | 10       |
| M3x6 BHCS                | 4        |
| M5 Hammer Head T-nuts    | 2        |
| M5x10 BHCS               | 2        |

#### :white_check_mark: Electronics Panel

| Item                                                                                                                                                                | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------------------------------------------ |
| [front_panel_rest](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/front_panel_rest_3%2B6mm_x2_Rev1.STL) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 9.53m | 24.29g | £0.46 | :heavy_check_mark: | For Voron 2.2. Will swap out `panel_holder` for these at rear of printer |
| [latch_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_left.stl)                      | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.19m | 0.48g  | £0.01 | :heavy_check_mark: |                                                                          |
| [latch_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_right.stl)                    | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.19m | 0.48g  | £0.01 | :heavy_check_mark: |                                                                          |
| [lever_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_left.stl)                      | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.41m | 1.05g  | £0.02 | :heavy_check_mark: |                                                                          |
| [lever_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_right.stl)                    | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.41m | 1.05g  | £0.02 | :heavy_check_mark: |                                                                          |
| [lock_body](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/lock_body_x2.stl)                             | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.70m | 4.33g  | £0.08 | :heavy_check_mark: |                                                                          |

##### Assembly

![Electronics Panel Holder](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/rear-handles.jpg)

The [Electronics Compartment](#electronics-compartment) has a couple of parts to rest the elecronics panel on called `panel_holder`s I have replaced these with the front handles from the 2.2

![Electronics Panel](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/electronics-panel-installed.jpg)

###### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------- |
| Coroplast Sheet - 246x434x4 mm | 1        |
| M3x8 SHCS                      | 2        |
| M5 T-nut                       | 4        |
| M5x10 SHCS                     | 4        |

### Rear Panel and Exhaust

![Voron 1.8 Rear Panel and Exhaust](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/rear-panel-and-exhaust.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Exhaust Filter

| Item                                                                                                                            | Quantity | Material                                                               | Size  | Weight | Cost  |      Printed       | Notes                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------------------------------------------------------------------------- |
| [exhaust_fan_grill](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/%5Ba%5D_exhaust_fan_grill.stl)     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)                    | 2.08m | 5.30g  | £0.10 | :heavy_check_mark: | This is a 2.4 Part                                                                                              |
| [filter_access_cover](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/%5Ba%5D_filter_access_cover.stl) | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |       |        |       | :heavy_check_mark: | Will replace with [Exhaust Mount Side Entry](printer-voron-1.8-mods.md#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_grill](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_grill.stl)       | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) |       |        |       | :heavy_check_mark: | Will replace with [Magnetic Grill Cover](printer-voron-1.8-mods.md#magnetic-grill-cover) printed in ABS         |
| [exhaust_filter_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_housing.stl)   | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       |       |        |       | :heavy_check_mark: | Will replace with [Exhaust Mount Side Entry](printer-voron-1.8-mods.md#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_mount_x2.stl)    | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)                    | 0.81m | 2.06g  | £0.04 | :heavy_check_mark: |                                                                                                                 |

##### Assembly

![Exhaust Filter](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/exhaust-filter.jpg)

I originally printed this in PETG that would be fitted to [my HyperCube upgrade](printer-hypercube.md). I will replace with the [Exhaust Mount Side Entry](printer-voron-1.8-mods.md#exhaust-mount-side-entry) mod to allow me to pass 2 bowden tubes through to experiment with a [dual bowden setup using 2 M4 extruders](printer-extruders-and-toolheads.md#voron-m4).

### Panel Mounting

![Voron 1.8 Panels](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/panels.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :wrench: Panel Mounts

| Item                                                                                                                                        | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bottom_panel_clip](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/bottom_panel_clip_x4.stl)                            | ~6~ 8    | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.10m | 2.80g  | £0.05 | :heavy_check_mark: | This is a Trident Part                                                                                                                               |
| ~[bottom_panel_hinge](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/bottom_panel_hinge_x2.stl)~                        | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.58m | 4.04g  | £0.08 | :heavy_check_mark: | This is a Trident Part                                                                                                                               |
| [corner_panel_clip_4mm](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/corner_panel_clip_4mm_x8.stl)                    | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.12m | 2.87g  | £0.05 | :heavy_check_mark: | This is a Trident r1 Part                                                                                                                            |
| [corner_panel_clip_6mm](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/corner_panel_clip_6mm_x8.stl)                    | 8        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.60m | 4.07g  | £0.08 | :heavy_check_mark: | This is a Trident r1 Part                                                                                                                            |
| [midspan_panel_clip_4mm](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/midspan_panel_clip_4mm_x7.stl)                  | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.74m | 1.89g  | £0.04 | :heavy_check_mark: | This is a Trident r1 Part                                                                                                                            |
| [midspan_panel_clip_6mm](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/midspan_panel_clip_6mm_x8.stl)                  | 8        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.04m | 2.66g  | £0.05 | :heavy_check_mark: | This is a Trident r1 Part                                                                                                                            |
| [handle](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/handle_3mm_x2_Rev1.stl) | 2        |                                                         |       |        |       |        :x:         | For Voron 2.2 Will replace with [Sturdy Handles](printer-voron-1.8-mods.md#sturdy-handles)                                                           |
| [light_bar](https://github.com/VoronDesign/Voron-Switchwire/blob/master/STL/Panel_Mounting/light_bar_x2.stl)                                | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |       |        |       |        :x:         | This is a Switchwire Part. Will replace with [one with mounting holes](https://www.prusaprinters.org/prints/109140-voron-light-bar-with-screw-holes) |

**_NOTE:_** I have not been able to succesfully print the bottom panel hinges, they always seem to fuse up and the small pin just snaps when trying to free the hinge. I will print extra panel clips instead.

##### Assembly

###### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3x8 SHCS             | 26       |
| M3x12 SHCS            | 24       |
| M3 Hammer Head T-nuts | 42       |

#### :negative_squared_cross_mark: Front Doors

| Item                                                                                                                                | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------------------------------------------------------------------------------------------- |
| [door_hinge](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/door_hinge_x4.stl)                | 6        |                                                         |       |        |       |        :x:         | Using 2 extra here like the Trident. Will swap for [Clamping Door Hinges](printer-voron-1.8-mods.md#clamping-door-hinges) |
| [handle_bottom_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_left.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.62m | 4.14g  | £0.08 | :heavy_check_mark: |                                                                                                                           |
| [handle_bottom_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_right.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.62m | 4.14g  | £0.08 | :heavy_check_mark: |                                                                                                                           |
| [handle_top_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_left.stl)         | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.42m | 3.61g  | £0.07 | :heavy_check_mark: |                                                                                                                           |
| [handle_top_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_right.stl)       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.42m | 3.61g  | £0.07 | :heavy_check_mark: |                                                                                                                           |
| [latch](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/latch.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.28m | 3.26g  | £0.06 | :heavy_check_mark: |                                                                                                                           |

##### Assembly

###### Parts Used

| Item                   | Quantity |
| ---------------------- | -------- |
| 3M VHB Tape 5952       | 1        |
| 6x3mm Neodimium Magnet | 10       |
| M3 Hammer Head T-nuts  | 1        |
| M3x8 SHCS              | 1        |

#### :wrench: Spool Management

| Item                                                                                                              | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bowen_retainer](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Spool_Management/bowen_retainer.stl) | 1        |                                                         |       |        |       |        :x:         | This is a Trident Part. Not printing this as I will be using the [Smart Filament Sensor Mount](printer-voron-1.8-mods.md#smart-filament-sensor-mount) |
| [spool_holder](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Spool_Management/spool_holder.stl)     | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 6.07m | 15.47g | £0.29 | :heavy_check_mark: | This is a Trident Part. May not print this as I currently use an [eSun Filament Dryer box](https://www.amazon.co.uk/dp/B094XWVQ1X)                    |

##### Assembly

![Spool Holders](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/spool-holders.jpg)

###### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| Red Bowden Tube (m)   | 1        |
| M5 Hammer Head T-nuts | 2        |
| M5x16 BHCS            | 2        |
