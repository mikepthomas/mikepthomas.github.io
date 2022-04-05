# Assembling my first Voron printer

Created Febuary 17, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated April 5, 2022

The steps I have taken to print and source parts to assemble a Voron 1.8.

![LDO Frame Kit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/voron-frame.jpg)

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)
3. [Mods](#mods)

## Sourcing Parts

I had originally chosen parts for the [Hypercube](printer-hypercube.md) that will lead up to re-building it into a Voron 1.8. However, I have chosen to build a new printer rather than upgrade my existing one in case I need to reprint more parts. I have already sourced many of the parts on the [BOM from the configurator](https://www.vorondesign.com/voron1.8) and I will replace some with alternatives that I already have (see the notes columns for details).

### Fasteners

| Item                       | Quantity | Received | Notes       |
| -------------------------- | -------- | -------- | ----------- |
| M5x40 SHCS                 | 8        | 29       |             |
| M5x30 BHCS                 | 6        | 21       |             |
| M5x16 BHCS                 | 67       | 70       |             |
| M5x10 BHCS                 | 71       | 104      |             |
| M5 Hexnut                  | 8        | 19       |             |
| M5 1mm Spacer              | 20       | 50       |             |
| M5 T-nut                   | 83       | 130      |             |
| M4x6 BHCS                  | 4        | 20       |             |
| M3x40 SHCS                 | 5        | 20       |             |
| M3x30 SHCS                 | 25       | 30       |             |
| M3x20 SHCS                 | 10       | 30       |             |
| M3x16 SHCS                 | 17       | 30       |             |
| M3x12 SHCS                 | 30       | 80       |             |
| M3x8 SHCS                  | 171      | 182      | 50 on order |
| M3x6 BHCS                  | 20       | 50       |             |
| M3 Hexnut                  | 7        | 50       |             |
| M3 Washer                  | 10       | 50       |             |
| M3 T-nut                   | 120      | 160      |             |
| M3 Hammer Head T-nuts      | 54       | 99       |             |
| M3 Threaded Insert         | 50       | 100      |             |
| M3 Knurled Nut (DIN 466-B) | 3        | 5        |             |
| M2x10 Self-Tapping Screw   | 7        | 53       |             |
| Yellow Die Spring - M3     | 1        |          | 10 on order |

### Frame

![LDO Frame Kit Assembled](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/voron-frame-assembled.jpg)

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

### Vibration Management

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Rubber Compressor Foot | 4        | 4        |       |

### Motion

![Voron 1.8 Belt Path](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/belt-path.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                       | Quantity | Received | Notes      |
| ------------------------------------------ | -------- | -------- | ---------- |
| GT2 20T Pulley (5mm ID 6mm W)              | 3        | 3        |            |
| GT2 20T Toothed Idler (5mm ID 6mm W)       | 2        | 4        |            |
| F695 Bearing                               | 20       | 30       |            |
| LM8LUU Linear Bearing                      | 4        | 4        |            |
| TR8x8 Leadscrew Nut                        | 2        | 6        |            |
| 5x30mm Shaft                               | 1        | 1        |            |
| BMG Extruder Components Kit                | 1        | 2        |            |
| Linear Rail MGN9H 350mm                    | 4        | 4        |            |
| Linear Shaft 8x320mm                       | 4        |          | 4 on order |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm | 2        | 4        |            |

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
| MicroFit3 Connector Plug 4 Position       | 2        | 20       |                    |
| MicroFit3 Connector Plug 3 Position       | 1        | 20       |                    |
| MicroFit3 Connector Plug 2 Position       | 5        | 20       |                    |
| MicroFit3 Connector Receptacle 4 Position | 2        | 20       |                    |
| MicroFit3 Connector Receptacle 3 Position | 1        | 20       |                    |
| MicroFit3 Connector Receptacle 2 Position | 5        | 20       |                    |
| MicroFit3 Female Pin                      | 40       | 200      |                    |
| MicroFit3 Male Pin                        | 40       | 200      |                    |
| 10x11 Cable Chain - 1m                    | 2        | 2        |                    |

### Electronics

![LDO Motor Kit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ldo-motors.jpg)

| Item                               | Quantity | Received | Notes                                                                                                                                    |
| ---------------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| NEMA17 Motor 17HS19-2004S          | 2        | 2        | Ordered some [larger ones than that are in the LDO Voron V1/V2 HT Motor Kit](https://www.onetwo3d.co.uk/product/ldo-42sth48-2004mahvrn/) |
| SPDT KW10 Limit Micro Switch       | 3        | 30       |                                                                                                                                          |
| PL-08N Inductive Probe             | 1        | 1        | Using Tronxy XY-08N. Going to replace with [Klicky Probe](#klicky-probe)                                                                 |
| E3D V6 Bowden Hotend Kit (24V)     | 1        |          | 1 on order                                                                                                                               |
| 40x40x20 Centrifugal Fan (24V)     | 1        |          | 1 on order                                                                                                                               |
| 40x40x10 Axial Fan (24V)           | 1        |          | 1 on order                                                                                                                               |
| Mini 12864 Display                 | 1        | 1        |                                                                                                                                          |
| Inlet Power Socket IEC320 C14      | 1        | 1        |                                                                                                                                          |
| Keystone CAT6 Insert (Optional)    | 1        | 2        | 1 Ethernet and 1 USB                                                                                                                     |
| 60x60x20 Fan (24V)                 | 2        |          | 2 on order                                                                                                                               |
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
| Bowden Tube (m)                      | 1        | 1        |       |
| 3M VHB Tape 5952                     | 1        | 1        |       |
| Loctite Blue Threadlocker Stick      | 1        | 1        |       |
| Mobil EP2 Grease                     | 1        | 1        |       |
| Tesa Wire Loom Harness Tape          | 1        | 1        |       |
| 1mm Foam Tape                        | 1        | 1        |       |
| 6x3mm Neodimium Magnet               | 8        | 50       |       |
| PTFE Tube (4mm OD 3mm ID) - 1m       | 1        | 1        |       |

## Printing Parts

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

### Tools

| Item                                                                                                                                              | Quantity | Material                                                         |      Printed       | Notes                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | :----------------: | ------------------------------------------------ |
| [rail_installation_guide_center](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/rail_installation_guide_center_x2.stl)           | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          | :heavy_check_mark: |                                                  |
| [v1.8_extrusion_drilling_jig](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/v1.8_extrusion_drilling_jig.stl)                    | 1        |                                                                  |        :x:         | Not Required as I brought my frame as a kit      |
| [pulley_jig](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Tools/pulley_jig.stl)                                                      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          | :heavy_check_mark: | This is a 2.4 Part, has spacer for extruder gear |
| [TensionMeter](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Kruppes/Tension_Meter/TensionMeter.stl)                         | 1        |                                                                  |        :x:         | This is a Voron Users Mod by Kruppes             |
| [lower_extrusion_alignment](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/natewalck/v1.8_Jigs/lower_extrusion_alignment.stl) | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) | :heavy_check_mark: | This is a Voron Users Mod by natewalck           |

### Gantry

![Voron 1.8 Gantry](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/gantry.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

Some of the gantry parts (specifically the AB Drive Units and Front Idlers) will be replaced with the upgraded versions from the Trident as they should fit the 1.8.

#### :white_check_mark: AB Drive Units

![Voron 1.8 AB Drive Units](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ab-drive.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                             | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------- |
| [wire_cover](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/%5Ba%5D_wire_cover.stl)           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.30m | 3.31g  | £0.06 | :heavy_check_mark: | This is a Trident Part |
| [a_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/a_drive_frame_lower.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.58m | 21.86g | £0.42 | :heavy_check_mark: | This is a Trident Part |
| [a_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/a_drive_frame_upper.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.21m | 20.93g | £0.40 | :heavy_check_mark: | This is a Trident Part |
| [b_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/b_drive_frame_lower.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.93m | 20.21g | £0.38 | :heavy_check_mark: | This is a Trident Part |
| [b_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/b_drive_frame_upper.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.18m | 20.85g | £0.40 | :heavy_check_mark: | This is a Trident Part |

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

| Item                                                                                                                           | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                  |
| ------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------- |
| [tensioner_left](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_left.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 2.67m | 6.81g  | £0.13 | :heavy_check_mark: | This is a Trident Part |
| [tensioner_right](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_right.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 2.67m | 6.81g  | £0.13 | :heavy_check_mark: | This is a Trident Part |
| [front_idler_a](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/front_idler_a_x2.stl)          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.68m | 9.38g  | £0.18 | :heavy_check_mark: | This is a Trident Part |
| [front_idler_b](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/front_idler_b_x2.stl)          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 4.66m | 11.88g | £0.23 | :heavy_check_mark: | This is a Trident Part |

##### Assembly

![Voron Trident Front Idlers](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/front-idlers-complete.jpg)

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

#### :negative_squared_cross_mark: Rear Crossbar

Both fully assembled AB Drive Units are required to install the rear crossbar.

##### Assembly

###### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M5 T-nut              | 8        |
| M5x10 BHCS            | 8        |
| Misumi HFSB5-2020-290 | 1        |

#### :negative_squared_cross_mark: Linear Rails

Both Front Idlers are installed at this stage.

##### Assembly

###### Parts Used

| Item                    | Quantity |
| ----------------------- | -------- |
| Linear Rail MGN9H 350mm | 2        |
| M3 T-nut                | 10       |
| M3x8 SHCS               | 8        |
| M3x10 BHCS              | 1        |
| M5 T-nut                | 14       |
| M5x10 BHCS              | 13       |

### Z Axis

![Voron 1.8 Z Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/z-axis.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :wrench: Bed Frame

![Voron 1.8 Bed Frame](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bed-frame.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                        | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | ----- |
| [bed_mount_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/bed_mount_front.stl)        | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 10.22m | 26.05g | £0.49 | :heavy_check_mark: |       |
| [z_bearing_block_a](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_a_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.09m  | 18.07g | £0.34 | :heavy_check_mark: |       |
| [z_bearing_block_b](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_b_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.09m  | 18.07g | £0.34 | :heavy_check_mark: |       |

##### Assembly

###### Parts Used

| Item                             | Quantity |
| -------------------------------- | -------- |
| LM8LUU Linear Bearing            | 4        |
| M5 T-nut                         | 10       |
| M5x10 BHCS                       | 8        |
| M5x16 BHCS                       | 6        |
| Misumi HFSB5-2020-200-TPW        | 2        |
| Misumi HFSB5-2020-420-AH45-BH375 | 2        |

#### :negative_squared_cross_mark: Z Axis Rods

| Item                                                                                                                        | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [leadscrew_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_leadscrew_block_x2.stl)             | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 3.87m | 9.88g  | £0.19 | :heavy_check_mark: |                                                                                                                                           |
| [z_shaft_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_z_shaft_retainer_x8.stl)           | 8        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.89m | 2.26g  | £0.04 | :heavy_check_mark: |                                                                                                                                           |
| [z_motor_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_motor_mount_x2.stl)                         | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 8.50m | 21.68g | £0.41 | :heavy_check_mark: |                                                                                                                                           |
| [z_cable_chain_mount](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Z_Assembly/z_cable_chain_mount_3hole.stl) | 1        |                                                         |       |        |       |     :question:     | This is a Trident Part. May need to make some modifications for it to fit and I will need to [print ends for the chain](#printable-chain) |

##### Assembly

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

The X Axis was flipped on the Trident (linear rails are on the bottom of the extrusion like the V2, this will not work on the 1.8 as the guide rails are mounted to the bottom of the extrusion too). I had originally wanted to use the Trident toolhead carriage with a single MGN12 linear rail, however due to the changes on the X axis the endstops were moved to the XY Joints not the toolhead. Because of this I wouldnt have anywhere to mount my endstop so I am not using an MGN12 rail here and instead using the dual MGN9s of the original design.

![Voron 1.8 X Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/x-axis.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: XY Joints

| Item                                                                                                                                            | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | --------------------------------------- |
| [cap](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/cap_x2.stl)                                              | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.12m  | 0.30g  | £0.01 | :heavy_check_mark: |                                         |
| [xy_joint_left_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_lower.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.34m  | 13.61g | £0.26 | :heavy_check_mark: |                                         |
| [xy_joint_left_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_upper.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 10.15m | 25.89g | £0.49 | :heavy_check_mark: |                                         |
| [xy_joint_right_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_lower.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 5.71m  | 14.55g | £0.28 | :heavy_check_mark: |                                         |
| [xy_joint_right_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_upper_generic_chain.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 9.83m  | 25.07g | £0.48 | :heavy_check_mark: | This is the Generic Cable Chain Version |

##### Assembly

###### Parts Used

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| F695 Bearing                         | 4        |
| GT2 20T Toothed Idler (5mm ID 6mm W) | 2        |
| Linear Rail MGN9H 350mm              | 2        |
| M3 T-nut                             | 8        |
| M3 Threaded Insert                   | 3        |
| M3x8 SHCS                            | 16       |
| M5 1mm Spacer                        | 4        |
| M5 Hexnut                            | 6        |
| M5 T-nut                             | 4        |
| M5x16 BHCS                           | 4        |
| M5x30 BHCS                           | 2        |
| M5x40 SHCS                           | 6        |
| Misumi HFSB5-2020-380                | 1        |

#### :negative_squared_cross_mark: X Carriage

| Item                                                                                                                                         | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [belt_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/%5Ba%5D_belt_clamp_x2.stl)                   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.21m | 0.54g  | £0.01 | :heavy_check_mark: |       |
| [probe_retainer_bracket](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/probe_retainer_bracket.stl)      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.18m | 0.46g  | £0.01 | :heavy_check_mark: |       |
| [x_carriage_frame_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_left.stl)        | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 6.86m | 17.48g | £0.33 | :heavy_check_mark: |       |
| [x_carriage_frame_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_right_V1.8.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 6.75m | 17.20g | £0.33 | :heavy_check_mark: |       |
| [x_carriage_pivot_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_pivot_block.stl)      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.25m | 3.19g  | £0.06 | :heavy_check_mark: |       |

##### Assembly

###### Parts Used

| Item                         | Quantity |
| ---------------------------- | -------- |
| M2x10 Self-Tapping Screw     | 1        |
| M3 Hexnut                    | 3        |
| M3 Threaded Insert           | 6        |
| M3x8 SHCS                    | 8        |
| M3x12 SHCS                   | 2        |
| M3x16 SHCS                   | 2        |
| M3x20 SHCS                   | 2        |
| M3x30 SHCS                   | 3        |
| PL-08N Inductive Probe       | 1        |
| SPDT KW10 Limit Micro Switch | 1        |

#### :negative_squared_cross_mark: Belts

##### Assembly

###### Parts Used

| Item                                       | Quantity |
| ------------------------------------------ | -------- |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm | 2        |

### Afterburner

![Afterburner](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/afterburner.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

I will not be printing the parts for the Afterburner specified in the Voron 1.8 repository yet as there is an upcoming update to the Afterburner, called the Stealthburner that is not yet released.

I have documented the parts required for the toolhead on the [extruders and toolheads page](printer-extruders-and-toolheads.md#voron-afterburner-stealthburner) as it is still in a bit of flux due to the Stealthburner still being in Beta.

### Endstops

#### :negative_squared_cross_mark: Y Endstop

| Item                                                                                                                       | Quantity | Material                                            | Size  | Weight | Cost  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [y_endstop_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/AB_Drive_Units/y_endstop_housing.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 1.47m | 3.74g  | £0.07 | :heavy_check_mark: |       |

##### Assembly

###### Parts Used

| Item                         | Quantity |
| ---------------------------- | -------- |
| M3x16 SHCS                   | 1        |
| M5x16 BHCS                   | 1        |
| SPDT KW10 Limit Micro Switch | 1        |

#### :negative_squared_cross_mark: Z Endstop

| Item                                                                                                                                          | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                           |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------- |
| [z_endstop_pcb_bottom](https://github.com/VoronDesign/Voron-Hardware/blob/master/Microswitch_Z_Endstop/STLs/%5Ba%5D_z_endstop_pcb_bottom.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.30m | 0.77g  | £0.01 | :heavy_check_mark: | Version for Hartk Z Endstop PCB |
| [z_endstop_pcb_top](https://github.com/VoronDesign/Voron-Hardware/blob/master/Microswitch_Z_Endstop/STLs/z_endstop_pcb_top.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.46m | 6.27g  | £0.12 | :heavy_check_mark: | Version for Hartk Z Endstop PCB |

##### Assembly

###### Parts Used

| Item                             | Quantity |
| -------------------------------- | -------- |
| 5x30mm Shaft                     | 1        |
| GT2 20T Pulley (5mm ID 6mm W)    | 1        |
| JST XH Connector Plug 2 Position | 1        |
| M2x10 Self-Tapping Screw         | 4        |
| M3 T-nut                         | 2        |
| M3x20 SHCS                       | 2        |
| Microswitch Z Endstop PCB        | 1        |
| SPDT KW10 Limit Micro Switch     | 1        |

### Bottom Skirts

![Voron 1.8 Skirts and Bottom Compartment](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/skirts-and-bottom-compartment.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                            | Quantity | Material                                            | Printed | Notes                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ----------------------------------------------------------------------- |
| [keystone_blank_insert](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Skirt/%5Ba%5D_keystone_blank_insert_x2.stl) | 2        |                                                     |   :x:   | This is a Trident Part. Not required as I am using both keystone spaces |
| [skirt_300_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_left_x3.stl)                 | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |                                                                         |
| [skirt_300_power](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_power.stl)                  | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |                                                                         |
| [skirt_300_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_right_x4.stl)               | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |                                                                         |
| [skirt_middle](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_middle_x3.stl)                     | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |                                                                         |

#### Display Module

| Item                                                                                                                                                              | Quantity | Material                                                |      Printed       | Notes                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mini12864_arm](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_arm_x2.stl)                               | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | May swap for [Display Mount](#display-mount)                                                                                                          |
| [mini12864_case_back](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Mini12864%20Case%20Back/Mini12864%20Case%20Back%20(Swivel).stl>) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | I have modified the mounting holes for this to make them closer together so that the [Display Mount Arms](#display-mount) will fit between the skirts |
| [mini12864_case_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_case_front.stl)                    | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | Will use this instead of [Display Mount Front](#display-mount) as it has been modified to allow the doors to open correctly                           |

### Electronics Brackets

| Item                                                                                                             | Quantity | Material | Printed | Notes                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ------------------------------------------------------------------------- |
| [wire_anchor](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/wire_anchor_x2.stl) | 2        |          |   :x:   | Planning on using [Cable Management Duct](#cable-management-duct) instead |

#### Bottom Electronics Mounting

| Item                                                                                                                                               | Quantity | Material                                                |      Printed       | Notes                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ---------------------- |
| [DIN_center_support](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/DIN_center_support_x2.stl)                         | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [DIN_frame_mount](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/DIN_frame_mount_x4.stl)                               | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [psu_brace](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_brace.stl)              | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                        |
| [psu_mount_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_mount_clip_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                        |
| [rs25_psu_bracket](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/rs25_psu_bracket.stl)                                | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [wago_221-415_mount_3x5](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Electronics_Bay/wago_221-415_mount_3x5.stl)                     | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a 2.4 Part     |

#### Rear Electronics Compartment

![Voron 1.8 Rear Electronics Compartment](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/electronics-compartment.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                                                               | Quantity | Material                                                |      Printed       | Notes                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :----------------: | -------------------------------------------------------------------------------------------------------------------- |
| [controller_fan_guard](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_controller_fan_guard.stl) | 2        |                                                         |        :x:         | Will replace with the versions with [Voron logos](#60mm-fan-cover) and print an extra one for the Exhaust Filter fan |
| [latch_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_left.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [latch_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_right.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [lever_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_left.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [lever_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_right.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [base_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_left.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [base_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_right.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [controller_fan_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/controller_fan_mount.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [corner_bracket_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_left.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [corner_bracket_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_right.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [din_bracket_base](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_base_x4.stl)              | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [din_bracket_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_clamp_x4.stl)            | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [lock_body](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/lock_body_x2.stl)                            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [panel_holder](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/panel_holder_x2.stl)                      | 2        |                                                         |        :x:         | Will replace these with front_panel_rest                                                                             |
| [pcb_din_clip_v2](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/pcb_din_clip_v2_x5.stl)                                               | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | 2 for SKR and 1 for Raspberry Pi                                                                                     |
| [raspberrypi_bracket](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/raspberrypi_bracket.stl)                                          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part                                                                                               |
| [SKR_bracket_inline_2pc](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/Controller_Mounts/SKR_bracket_inline_2pc.stl)                  | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part                                                                                               |
| [wire_corner_left](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/wire_corner_left.stl)                                                        | 1        |                                                         |     :question:     | This is a Trident Part. I may need to make some modifications to this to make it fit.                                |
| [wire_corner_right](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/wire_corner_right.stl)                                                      | 1        |                                                         |     :question:     | This is a Trident Part. I may need to make some modifications to this to make it fit.                                |

### Exhaust Filter

![Voron 1.8 Rear Panel and Exhaust](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/rear-panel-and-exhaust.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                            | Quantity | Material                                                               |      Printed       | Notes                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- | :----------------: | -------------------------------------------------------------------------------------- |
| [filter_access_cover](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/%5Ba%5D_filter_access_cover.stl) | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) | :heavy_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_grill](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_grill.stl)       | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) | :heavy_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_housing.stl)   | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       | :heavy_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_mount_x2.stl)    | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)                    |        :x:         |                                                                                        |

### Panel Mounting

![Voron 1.8 Panels](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/panels.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                                                                | Quantity | Material                                                |      Printed       | Notes                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bottom_panel_clip](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/bottom_panel_clip_x4.stl)                                                    | ~6~ 8    | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part                                                                                                                               |
| ~[bottom_panel_hinge](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/bottom_panel_hinge_x2.stl)~                                                | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part                                                                                                                               |
| [corner_panel_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/corner_panel_clip_3mm_x12.stl)                                         | 14       | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | These are 3mm versions, 4mm versions are available in Trident repo                                                                                   |
| [deck_support_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/deck_support_clip_x6.stl)                                              | 6        |                                                         |        :x:         | Will replace with [Deck Panel Support Clips](#deck-panel-support-clips)                                                                              |
| [midspan_panel_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/midspan_panel_clip_3mm_x12.stl)                                       | 14       | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | These are 3mm versions, 4mm versions are available in Trident repo                                                                                   |
| [front_panel_rest](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/front_panel_rest_3%2B6mm_x2_Rev1.STL) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | For Voron 2.2. Will swap out panel_holder for these at rear of printer                                                                               |
| [handle](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/handle_3mm_x2_Rev1.stl)                         | 2        |                                                         |        :x:         | For Voron 2.2 Will replace with [Sturdy Handles](#sturdy-handles)                                                                                    |
| [light_bar](https://github.com/VoronDesign/Voron-Switchwire/blob/master/STL/Panel_Mounting/light_bar_x2.stl)                                                        | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         | This is a Switchwire Part. Will replace with [one with mounting holes](https://www.prusaprinters.org/prints/109140-voron-light-bar-with-screw-holes) |

**_NOTE:_** I have not been able to succesfully print the bottom panel hinges, they always seem to fuse up and the small pin just snaps when trying to free the hinge. I will print extra panel clips instead.

#### Front Doors

| Item                                                                                                                                | Quantity | Material                                                |      Printed       | Notes                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ------------------------------------------------------------------------------------------------ |
| [door_hinge](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/door_hinge_x4.stl)                | 6        |                                                         |        :x:         | Using 2 extra here like the Trident. Will swap for [Clamping Door Hinges](#clamping-door-hinges) |
| [handle_bottom_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_left.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                  |
| [handle_bottom_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_right.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                  |
| [handle_top_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_left.stl)         | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                  |
| [handle_top_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_right.stl)       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                  |
| [latch](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/latch_x2.stl)                          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                  |

### Spool Management

| Item                                                                                                              | Quantity | Material                                                | Printed | Notes                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------------------------------------------------------------------------------------------------------- |
| [bowen_retainer](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Spool_Management/bowen_retainer.stl) | 1        |                                                         |   :x:   | This is a Trident Part. Not printing this as I will be using the [Smart Filament Sensor Mount](#smart-filament-sensor-mount)       |
| [spool_holder](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Spool_Management/spool_holder.stl)     | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Trident Part. May not print this as I currently use an [eSun Filament Dryer box](https://www.amazon.co.uk/dp/B094XWVQ1X) |

## Mods

List of upgrades that I plan on adding from the printer mods directory of the Voron Users repository.

### Exhaust Mount Side Entry

The stock exhaust filter has the bowden coupler coming out of the back. As I will have my printer up against the wall I would like to have the bowden coupler coming out of the side to save some space. It will also allow the ability to run two bowden tubes into the enclosure to experiment with [dual extrusion toolheads](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Bowden/bowden_dual_front_b.stl).

| Item                                                                                                                                                                                     | Quantity | Material                                                | Printed | Notes                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------------- |
| [exhaust_filter_housing](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/exhaust_filter_housing.stl)                       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by 120decibell |
| [exhaust_housing_insert_plug](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_exhaust_housing_insert_plug.stl)     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by 120decibell |
| [exhaust_housing_insert_thread](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_exhaust_housing_insert_thread.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by 120decibell |
| [filter_access_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_filter_access_cover.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by 120decibell |

### Clamping Door Hinges

The Stock door hinges are attached using VHB, these clamp around the acrylic panel and also allow the doors to open all the way.

| Item                                                                                                                                                               | Quantity | Material                                                |      Printed       | Notes                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :----------------: | -------------------------------------------- |
| [face_plate_bottom](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_bottom.stl)             | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by AlexanderT-Moss |
| [face_plate_no_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_no_logo.stl)           | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Voron Users Mod by AlexanderT-Moss |
| [face_plate_through_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_through_logo.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Voron Users Mod by AlexanderT-Moss |
| [side_mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/side_mount.stl)                           | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Voron Users Mod by AlexanderT-Moss |

### Bed Wago Mount

Wago Mount for connecting bed wires.

| Item                                                                                                                                                      | Quantity | Material                                                |      Printed       | Notes                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | -------------------------------------- |
| ~[2020-Wago_221-412_tray-5x2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Boingomw/Wago_mount/stl/2020-Wago_221-412_tray-5x2.stl)~ | 3        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by Boingomw. |

**_NOTE:_** The side parts split at the layer lines when inserting the Wago connectors to this part (I printed it in ABS so there may have been some shrinkage). I replaced it with [this version from Thingyverse instead](https://www.thingiverse.com/thing:4579456).

### Cable Chain Anchors

Clips to route zip ties through 3 hole cable chain to attach to 2020 extrusion.

| Item                                                                                                                                                                                                      | Quantity | Material                                                | Printed | Notes                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------- |
| [Triangle_Hole_Pattern_End_Mount_to_2020](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/bryansj/Befenybay_Chain_Anchors/Triangle_Hole_Pattern_End_Mount_to_2020.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by bryansj. |

### Bed Fans

Mounts for 5015 fans to circulate air around the enclosure to get hotter chamber temps.

| Item                                                                                                                                          | Quantity | Material                                                | Printed | Notes                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------------- |
| [Mounting_Plate](https://github.com/neggert/VoronUsers/blob/trident_bed_fans/printer_mods/CannedBass/Trident_Bed_Fans/STL/Mounting_Plate.stl) | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by CannedBass. |

### Nozzle Scrubber

Cleans the nozzle before printing and has endstops to locate the magnetic bed.

| Item                                                                                                                                                                                                | Quantity | Material                                                |      Printed       | Notes                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ---------------------------------------- |
| [brush_holder_sheet_stop](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/brush_holder_sheet_stop_rev4.stl)     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |
| [extension_bracket](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/extension_bracket_v1.8_rev4.stl)            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |
| [individual_sheetstop](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/individual_sheetstop_v1.8_v2.4_rev4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |
| [purge_bucket](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/purge_bucket_300mm_rev4.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         | This is a Voron Users Mod by edwardyeeks |

### Smart Filament Sensor Mount

Mount for the BigTreeTech Smart filment sensor that I already have. There are two different mounts, one vertical and one horizontal.

| Item                                                                                                                                                     | Quantity | Material                                                | Printed | Notes                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------ |
| [BTT_Sensor_Mount_A](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_A.stl) | 1        |                                                         |   :x:   | This is a Voron Users Mod by Empusas |
| [BTT_Sensor_Mount_B](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_B.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Empusas |

### Printable Chain

I may want to have the ends of the cable chains printed in accent colour so may print the ends from this. I will also need 2 more ends for the Z chain.
There are versions for 3 hole and 2 hole (3 hole can be fixed firmly to printed parts with 3 screws and the two hole versions can be fixed to 2020 extrusion easier)

| Item                                                                                                                                                        | Quantity | Material                                            | Printed | Notes                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ------------------------------------- |
| [fixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/fixed_end.stl)                               | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by hymness1 |
| [unfixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/unfixed_end.stl)                           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by hymness1 |
| [10x11-chain-endcap1](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap1_support.STL) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by mjoaris  |
| [10x11-chain-endcap2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap2_support.STL) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by mjoaris  |

### Display Mount

Mount for the display allowing it to be tilted and angled.

| Item                                                                                                                                                                      | Quantity | Material                                                |      Printed       | Notes                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ------------------------------------------------------------------------------------------------------------------------ |
| [Back](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Back.stl)                                       | 1        |                                                         |        :x:         | This is a Voron Users Mod by Iakabos. Not required, I have modifed the newer Voron 1.8 version                           |
| [Case_arm(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm(Mirror).stl>)             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Case_arm](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Front](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Front.stl)                                     | 1        |                                                         |        :x:         | This is a Voron Users Mod by Iakabos. I will print the Voron 1.8 version that has been shaped to allow the doors to open |
| [Mount_block(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block(Mirror).stl>)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Mount_block](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_long(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long(Mirror).stl>)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_long](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_short(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short(Mirror).stl>) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_short](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |

### Mosfet Mounts

The SKR 1.4 Turbo only has 1 controllable fan header, I have purchased a couple of mosfets to control more fans and need something to mount them.

| Item                                                                                                                                         | Quantity | Material                                                |      Printed       | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ------------------------------------- |
| [Mosfet_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/JaredC01/Mosfet_Mounts/Mosfet_Mount_4.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by JaredC01 |

### Sturdy Handles

Will make moving the printer around a little easier when assembled.

| Item                                                                                                                             | Quantity | Material                                                | Printed | Notes                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------- |
| [sturdy_handles](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/jeoje/Sturdy_Handles/STL/sturdy_handles.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by jeoje |

### Klicky Probe

Recommended upgrade to replace the PL-08N Inductive Probe which can be a bit unreliable with magnetic flexible build plates.

#### Dock

| Item                                                                                                                                                                                                        | Quantity | Material                                                | Printed | Notes                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------- |
| [Dock_sidemount_fixed_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_fixed_v2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JosAr |
| [Dock_sidemount_right_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_right_v2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_Dock_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_Dock_v2.stl)                                                                           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by JosAr |

#### Probe

| Item                                                                                                                                                                                                        | Quantity | Material                                                |      Printed       | Notes                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ---------------------------------- |
| [KlickyProbe_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/KlickyProbe_v2.stl)                                                                         | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Voron Users Mod by JosAr |
| [Switch_extender](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Switch_extender.stl)                                                                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Voron Users Mod by JosAr |
| [KlickyProbe_AB_mount_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/KlickyProbe_AB_mount_v2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by JosAr |

#### Tools

| Item                                                                                                                                                                                                                  | Quantity | Material | Printed | Notes                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ---------------------------------- |
| [Probe_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_magnet_holder.stl)                                                                         | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_magnet_pressfit_helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_magnet_pressfit_helper.stl)                                                       | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_pressfit_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_pressfit_holder.stl)                                                                     | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Mount_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_magnet_holder.stl)                   | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Mount_magnet_pressfit_helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_magnet_pressfit_helper.stl) | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Mount_pressfit_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_pressfit_holder.stl)               | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |

### MKS Mosfet Mount

A mount for a [BIQU116-A2 MKS Mosfet](https://www.biqu.equipment/products/3d-printer-parts-heating-controller-mks-mosfet-for-heat-bed-extruder-mos-module-exceed-30a-support-big-current) based on the Trident Raspberry Pi mount.

| Item                                                                                                                                         | Quantity | Material                                                |      Printed       | Notes                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ------------------------------------------------------ |
| [MKS Mosfet Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mikepthomas/MKS_Mosfet_Mount/STL/MKS_Mosfet_Mount.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by mikepthomas (me :blush:). |
| [pcb_din_clip_v2](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/pcb_din_clip_v2_x5.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part                                 |

### 60mm Fan Cover

A Fan cover that has an integrated Voron logo.

| Item                                                                                                                                   | Quantity | Material                                            | Printed | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ------------------------------------- |
| [60mm_fan_grill](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Rhastlyn/60mmFanCover/STL/60mm_fan_grill_rev1.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by Rhastlyn |

### Cable Management Duct

A cable management duct to tidy up the wiring in the electronics case.

| Item                                                                                                                                       | Quantity | Material                                            | Printed | Notes                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------- | :-----: | ------------------------------------ |
| [CableDuctBody](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/ryandam/Cable_management_duct/STLs/CableDuctBody.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by ryandam |
| [CableDuctCover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/ryandam/Cable_management_duct/STLs/CableDuctCover.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by ryandam |

### Corner Cable Cover

Cover to hide the cables for the LED strip around the top corners of the printer

| Item                                                                                                                                                                          | Quantity | Material                                            | Printed | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | --------------------------------------- |
| [top_corner_cable_hide_left](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/corner_cable_hide/STLs/%5Ba%5D_top_corner_cable_hide_left_x2.stl)   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by samwiseg0. |
| [top_corner_cable_hide_right](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/corner_cable_hide/STLs/%5Ba%5D_top_corner_cable_hide_right_x2.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by samwiseg0. |

### Power Supply Cover

Cover for the live connections of the power supply making them harder to accidentally touch.

| Item                                                                                                                                                                          | Quantity | Material                                                |      Printed       | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | --------------------------------------- |
| ~[lrs_200_screw_terminal_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/lrs_screw_terminal_cover/STLs/lrs_200_screw_terminal_cover.stl)~ | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Voron Users Mod by samwiseg0. |

**_NOTE:_** The side parts that slide onto the terminal block appear to be too thick to fit [my Meanwell power supply](https://uk.farnell.com/mean-well/lrs-200-24/power-supply-ac-dc-24v-8-8a/dp/3596584). I will need to modify it to make them thinner by approximately 1-2mm if I want to add it.

### Deck Panel Support Clips

The coroplast on the bottom of the printer is not that well supported so this just add a bit more support to the bottom deck panel.

| Item                                                                                                                                                                                    | Quantity | Material                                                |    Printed    | Notes                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----------: | -------------------------------------------------------------------- |
| [deck_panel_support_lower](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_lower_adjustable(3-6mm).stl>) | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :interrobang: | Two printed, Two left to print. This is a Voron Users Mod by wile-e1 |
| [deck_panel_support_upper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_upper.stl)                     | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |      :x:      | This is a Voron Users Mod by wile-e1                                 |

### Klipper Expander

PCB to expand the ports that can be used for fans and neopixels. I already have RGB neopixel strips and will need another neopixel header to run the Stealthburner RGBW LEDs.
There are three different mounts, one vertical, one horizontal and one for DIN rail.

| Item                                                                                                                                                  | Quantity | Material                                                | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----- |
| [KlipperExpander_HorizontalMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_HorizontalMount.STL) | 1        |                                                         |   :x:   |       |
| [KlipperExpander_RailMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_RailMount.stl)             | 1        |                                                         |   :x:   |       |
| [KlipperExpander_VerticalMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_VerticalMount.STL)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
