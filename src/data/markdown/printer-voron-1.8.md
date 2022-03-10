# Upgrading the Hypercube to a Voron 1.8

Created Febuary 17, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated March 10, 2022

The steps I have taken to migrate from the Hypercube to a Voron 1.8.

![LDO Motor Kit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ldo-motors.jpg)

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)
3. [Mods](#mods)

## Sourcing Parts

I have specifically chosen parts for the [Hypercube](printer-hypercube.md) that will lead up to re-building it into a Voron 1.8. Many of the parts on the [BOM from the configurator](https://www.vorondesign.com/voron1.8) I have already sourced and some I will replace with alternatives that I already have (see the notes columns for details).

### Fasteners

| Item                       | Quantity | Received | Notes                                                                      |
| -------------------------- | -------- | -------- | -------------------------------------------------------------------------- |
| M5x40 SHCS                 | 8        | 29       |                                                                            |
| M5x30 BHCS                 | 6        | 21       |                                                                            |
| M5x16 BHCS                 | 67       | 60       | Received 45 SHCS instead (Will use 10 of these for the feet and DIN Rails) |
| M5x10 BHCS                 | 71       | 104      |                                                                            |
| M5 Hexnut                  | 8        | 19       |                                                                            |
| M5 1mm Spacer              | 20       | 50       |                                                                            |
| M5 T-nut                   | 83       | 130      |                                                                            |
| M4x6 BHCS                  | 4        |          | 20 on order                                                                |
| M3x40 SHCS                 | 5        | 20       |                                                                            |
| M3x30 SHCS                 | 25       | 30       |                                                                            |
| M3x20 SHCS                 | 10       | 30       |                                                                            |
| M3x16 SHCS                 | 17       | 30       |                                                                            |
| M3x12 SHCS                 | 30       | 30       | 50 on order                                                                |
| M3x8 SHCS                  | 171      | 182      |                                                                            |
| M3x6 BHCS                  | 20       | 30       |                                                                            |
| M3 Hexnut                  | 7        | 50       |                                                                            |
| M3 Washer                  | 10       | 50       |                                                                            |
| M3 T-nut                   | 120      | 160      |                                                                            |
| M3 Hammer Head T-nuts      | 54       | 99       |                                                                            |
| M3 Threaded Insert         | 50       | 100      |                                                                            |
| M3 Knurled Nut (DIN 466-B) | 3        | 5        |                                                                            |
| M2x10 Self-Tapping Screw   | 7        | 53       |                                                                            |
| Yellow Die Spring - M3     | 1        | 6        | Have some bed springs left over from Anet A8 Build                         |

### Frame

![Voron 1.8 Frame](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/frame.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                     | Quantity | Received | Notes                                                                                                                               |
| ---------------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DIN 3 Rails (35mm W) - 420mm             | 3        | 3        | BOM only specifies 2 but manual has 3                                                                                               |
| Misumi HFSB5-2020-290                    | 1        | 1        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-420-TPW                | 10       | 10       | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-420                    | 1        | 1        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-230                    | 2        | 2        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-380                    | 1        | 1        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-500-LTP-RCP-AV380-AP40 | 4        | 4        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-200-TPW                | 2        | 2        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-420-AH45-BH375         | 2        | 2        | In [LDO Voron 1.8 Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |

### Vibration Management

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Rubber Compressor Foot | 4        | 4        |       |

### Motion

![Voron 1.8 Belt Path](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/belt-path.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                       | Quantity | Received | Notes                                                    |
| ------------------------------------------ | -------- | -------- | -------------------------------------------------------- |
| GT2 20T Pulley (5mm ID 6mm W)              | 3        | 3        |                                                          |
| GT2 20T Toothed Idler (5mm ID 6mm W)       | 2        | 2        | 2 on order                                               |
| F695 Bearing                               | 20       | 30       |                                                          |
| LM8LUU Linear Bearing                      | 4        |          | 4 on order                                               |
| TR8x8 Leadscrew Nut                        | 2        | 6        |                                                          |
| 5x30mm Shaft                               | 1        | 1        |                                                          |
| BMG Extruder Components Kit                | 1        | 2        |                                                          |
| Linear Rail MGN9H 350mm                    | 4        | 4        |                                                          |
| Linear Shaft 8x320mm                       | 4        | 4        | Ordered 500mm Carbon Fiber ones that I can cut to length |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm | 2        | 4        | I have about 10 meters left                              |

### Print Bed

![Voron 1.8 Print Bed and Wire Path](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/print-bed-and-wire-path.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                        | Quantity | Received | Notes      |
| ----------------------------------------------------------- | -------- | -------- | ---------- |
| 3M 468MP Adhesive Sheet - 12"x12"                           | 1        |          | 1 on order |
| PEI 0.04" Sheet - 12"x12"                                   | 1        |          | 1 on order |
| MIC6 5/16" Plate - 12"x12"                                  | 1        | 1        |            |
| Keenovo Silicone AC Heater w/ thermistor - 250x250mm (450W) | 1        |          | 1 on order |

### Wires

| Item                                      | Quantity | Received | Notes                                                           |
| ----------------------------------------- | -------- | -------- | --------------------------------------------------------------- |
| Nylon Cable Ties 4"                       | 40       |          | I have a random assortment but will probably need to order more |
| 1/2" Braided Cable Sheathing (ft)         | 5        |          | Using the stock Anet A8 spiral plastic wrap                     |
| 20AWG Silicone Cable (ft)                 | 10       |          | I have some 18AWG wire left for low voltage power cables        |
| 24AWG Silicone Cable (ft)                 | 100      | 177      | in various colours                                              |
| Spade Crimp Terminal 4.8mm Female         | 10       | 20       |                                                                 |
| JST XH Connector Plug 4 Position          | 5        | 20       |                                                                 |
| JST XH Connector Plug 3 Position          | 4        | 20       |                                                                 |
| JST XH Connector Plug 2 Position          | 2        | 20       |                                                                 |
| JST XH Female Pin                         | 40       | 200      |                                                                 |
| MicroFit3 Connector Plug 4 Position       | 2        | 20       |                                                                 |
| MicroFit3 Connector Plug 3 Position       | 1        | 20       |                                                                 |
| MicroFit3 Connector Plug 2 Position       | 5        | 20       |                                                                 |
| MicroFit3 Connector Receptacle 4 Position | 2        | 20       |                                                                 |
| MicroFit3 Connector Receptacle 3 Position | 1        | 20       |                                                                 |
| MicroFit3 Connector Receptacle 2 Position | 5        | 20       |                                                                 |
| MicroFit3 Female Pin                      | 40       | 200      |                                                                 |
| MicroFit3 Male Pin                        | 40       | 200      |                                                                 |
| 10x11 Cable Chain - 1m                    | 2        | 2        |                                                                 |

### Electronics

![Voron 1.8 Electronics](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/electronics.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                               | Quantity | Received | Notes                                                                                                                                                 |
| ---------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| NEMA17 Motor 17HS19-2004S          | 2        | 2        | In [LDO Voron V1/V2 HT Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-voron-v1-v2-ht-motor-kit)                               |
| SPDT KW10 Limit Micro Switch       | 3        |          | 10 on order                                                                                                                                           |
| PL-08N Inductive Probe             | 1        | 1        | Using Tronxy XY-08N                                                                                                                                   |
| E3D V6 Bowden Hotend Kit (24V)     | 1        | 1        | Using 12V version as I am using 12V Power supply                                                                                                      |
| 40x40x20 Centrifugal Fan (24V)     | 1        | 1        | Using 12V version as I am using 12V Power supply                                                                                                      |
| 40x40x10 Axial Fan (24V)           | 1        | 2        | Using 12V version as I am using 12V Power supply                                                                                                      |
| Mini 12864 Display                 | 1        | 1        |                                                                                                                                                       |
| Inlet Power Socket IEC320 C14      | 1        |          | 1 on order                                                                                                                                            |
| Keystone CAT6 Insert (Optional)    | 1        | 2        | 1 Ethernet and 1 USB                                                                                                                                  |
| 60x60x20 Fan (24V)                 | 2        | 1        | Using 12V versions as I am using 12V Power supply                                                                                                     |
| SKR 1.4                            | 1        | 1        | I have the Turbo version                                                                                                                              |
| TMC2209 Stepper Motor Driver       | 5        | 5        |                                                                                                                                                       |
| USB Cable A-male B-male            | 1        | 1        |                                                                                                                                                       |
| Raspberry Pi 4                     | 1        |          | Using Raspberry Pi 3B+ Instead as I already have one                                                                                                  |
| Mean Well LRS-200-24 PSU           | 1        |          | Using Original 12V 20A Power Supply from my Anet A8                                                                                                   |
| Mean Well RS-25-5 PSU              | 1        |          | Using [UBEC](<https://www.banggood.com/Hobbywing-5V-or-6V-3A-Switch-Mode-Ultimate-BEC-(UBEC)-p-908018.html>) or separate mains Micro USB power supply |
| Omron G3A-210B-DC5 SSR             | 1        | 1        |                                                                                                                                                       |
| DIN Rail Mount Bracket for G3A SSR | 1        |          | 1 on order                                                                                                                                            |
| BAT85 Diode                        | 1        | 7        | My Tronxy XY-08N seems to work fine on SKR 1.4 Turbo using endstop pins                                                                               |
| C13 Power Cord                     | 1        | 3        |                                                                                                                                                       |
| Thermal Fuse (120C)                | 1        |          | 5 on order                                                                                                                                            |
| NEMA17 Motor 17HS08-1004S          | 1        | 1        | In [LDO Voron V1/V2 HT Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-voron-v1-v2-ht-motor-kit)                               |
| NEMA17 TR8x8 300mm Linear Stepper  | 2        | 2        | In [LDO V1 Z Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-v1-z-motor-kit)                                                   |

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

| Item                                                                                                                                              | Quantity | Material                                                         |      Printed       | Notes                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | :----------------: | ------------------------------------------- |
| [rail_installation_guide_center](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/rail_installation_guide_center_x2.stl)           | 2        |                                                                  |        :x:         |                                             |
| [v1.8_extrusion_drilling_jig](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/v1.8_extrusion_drilling_jig.stl)                    | 1        |                                                                  |        :x:         | Not Required as I brought my frame as a kit |
| [AB_pulley_jig](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Tools/AB_pulley_jig.stl)                                              | 1        |                                                                  |        :x:         | This is a Trident Part                      |
| [TensionMeter](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Kruppes/Tension_Meter/TensionMeter.stl)                         | 1        |                                                                  |        :x:         | This is a Voron Users Mod by Kruppes        |
| [lower_extrusion_alignment](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/natewalck/v1.8_Jigs/lower_extrusion_alignment.stl) | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black) | :heavy_check_mark: | This is a Voron Users Mod by natewalck      |

### Gantry

The long term goal is to eventually replace the smooth rods of the XY Gantry with linear rails to allow me to increase my printing speeds further.

![Voron 1.8 Gantry](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/gantry.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

Some of the gantry parts (specifically the AB Drive Units and Front Idlers) will be replaced with the upgraded versions from the Trident as they should fit the 1.8.

#### AB Drive Units

![Voron 1.8 AB Drive Units](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/ab-drive.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                             | Quantity | Material                                                |      Printed       | Notes                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ---------------------- |
| [wire_cover](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/%5Ba%5D_wire_cover.stl)           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Trident Part |
| [y_endstop_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/AB_Drive_Units/y_endstop_housing.stl)       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                        |
| [a_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/a_drive_frame_lower.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [a_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/a_drive_frame_upper.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [b_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/b_drive_frame_lower.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [b_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/AB_Drive_Units/b_drive_frame_upper.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |

![ABS A Drive Unit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/a-drive-abs-tuning.jpg)

The lower A drive was the first time I have tried to print with ABS. The upper was printed after a few tweaks to my slicer settings and updates to my Marlin firmware configuration. I am now quite happy with the results and will carry on printing the rest of the parts.

#### Front Idlers

![Voron 1.8 Front Idlers](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/front-idlers.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                           | Quantity | Material                                                |      Printed       | Notes                  |
| ------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :----------------: | ---------------------- |
| [tensioner_left](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_left.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Trident Part |
| [tensioner_right](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_right.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Trident Part |
| [front_idler_a](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/front_idler_a_x2.stl)          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |
| [front_idler_b](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/front_idler_b_x2.stl)          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | This is a Trident Part |

### Bed Frame

![Voron 1.8 Bed Frame](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/bed-frame.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                        | Quantity | Material                                                |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ----- |
| [bed_mount_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/bed_mount_front.stl)        | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |       |
| [z_bearing_block_a](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_a_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |       |
| [z_bearing_block_b](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_b_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |       |

### Z Axis

![Voron 1.8 Z Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/z-axis.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                        | Quantity | Material                                                | Printed | Notes                                                                             |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------- |
| [leadscrew_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_leadscrew_block_x2.stl)             | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                   |
| [z_shaft_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_z_shaft_retainer_x8.stl)           | 8        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                                   |
| [z_motor_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_motor_mount_x2.stl)                         | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                   |
| [z_cable_chain_mount](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Z_Assembly/z_cable_chain_mount_3hole.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Trident Part. Will need to [print ends for the chain](#printable-chain) |

### X Axis

The X Axis was flipped on the Trident (linear rails are on the bottom of the extrusion like the V2, this will not work on the 1.8 as the guide rails are mounted to the bottom of the extrusion too). I had originally wanted to use the Trident toolhead carriage with a single MGN12 linear rail, however due to the changes on the X axis the endstops were moved to the XY Joints not the toolhead. Because of this I wouldnt have anywhere to mount my endstop so I am not using an MGN12 rail here and instead using the dual MGN9s of the original design.

![Voron 1.8 X Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/x-axis.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

#### XY Joints

| Item                                                                                                                                            | Quantity | Material                                                | Printed | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | --------------------------------------- |
| [cap](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/cap_x2.stl)                                              | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [xy_joint_left_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_lower.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [xy_joint_left_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_upper.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [xy_joint_right_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_lower.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [xy_joint_right_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_upper_generic_chain.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is the Generic Cable Chain Version |

### Afterburner/Stealthburner

![Afterburner](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/afterburner.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                                         | Quantity | Material                                                | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----- |
| [belt_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/%5Ba%5D_belt_clamp_x2.stl)                   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [probe_retainer_bracket](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/probe_retainer_bracket.stl)      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [x_carriage_frame_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_left.stl)        | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [x_carriage_frame_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_right_V1.8.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [x_carriage_pivot_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_pivot_block.stl)      | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |

In addition to the required Voron 1.8 parts above I will also need to [print the parts for the Afterburner/Stealthburner itself](printer-extruders-and-toolheads.md#voron-afterburner-stealthburner).

### Z Endstop

| Item                                                                                                                                          | Quantity | Material                                                |      Printed       | Notes                           |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :----------------: | ------------------------------- |
| [z_endstop_pcb_bottom](https://github.com/VoronDesign/Voron-Hardware/blob/master/Microswitch_Z_Endstop/STLs/%5Ba%5D_z_endstop_pcb_bottom.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | Version for Hartk Z Endstop PCB |
| [z_endstop_pcb_top](https://github.com/VoronDesign/Voron-Hardware/blob/master/Microswitch_Z_Endstop/STLs/z_endstop_pcb_top.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: | Version for Hartk Z Endstop PCB |

### Bottom Skirts

![Voron 1.8 Skirts and Bottom Compartment](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/skirts-and-bottom-compartment.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                            | Quantity | Material                                                | Printed | Notes                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----------------------------------------------------------------------- |
| [keystone_blank_insert](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Skirt/%5Ba%5D_keystone_blank_insert_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Trident Part. Not required as I am using both keystone spaces |
| [skirt_300_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_left_x3.stl)                 | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                         |
| [skirt_300_power](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_power.stl)                  | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                         |
| [skirt_300_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_right_x4.stl)               | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                         |
| [skirt_middle](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_middle_x3.stl)                     | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                         |

#### Display Module

| Item                                                                                                                                           | Quantity | Material                                                | Printed | Notes                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | -------------------------------------------- |
| [mini12864_arm](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_arm_x2.stl)            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | May swap for [Display Mount](#display-mount) |
| [mini12864_case_back](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_case_back.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | May swap for [Display Mount](#display-mount) |
| [mini12864_case_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_case_front.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | May swap for [Display Mount](#display-mount) |

### Electronics Brackets

| Item                                                                                                             | Quantity | Material | Printed | Notes                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ------------------------------------------------------------------------- |
| [wire_anchor](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/wire_anchor_x2.stl) | 2        |          |   :x:   | Planning on using [Cable Management Duct](#cable-management-duct) instead |

#### Bottom Electronics Mounting

| Item                                                                                                                                               | Quantity | Material                                                | Printed | Notes                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----------------------------------------------------------------- |
| [DIN_center_support](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/DIN_center_support_x2.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Trident Part                                            |
| [DIN_frame_mount](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/DIN_frame_mount_x4.stl)                               | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Trident Part                                            |
| [psu_brace](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_brace.stl)              | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                   |
| [psu_mount_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_mount_clip_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                   |
| [rs25_psu_bracket](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/rs25_psu_bracket.stl)                                | 1        |                                                         |   :x:   | This is a Trident Part. Not required as not using 5V power supply |

#### Rear Electronics Compartment

![Voron 1.8 Rear Electronics Compartment](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron/electronics-compartment.jpg)

> Image &copy; 2020 [Voron Design](https://www.vorondesign.com/)

| Item                                                                                                                                                               | Quantity | Material                                                |      Printed       | Notes                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :----------------: | -------------------------------------------------------------------------------------------------------------------- |
| [controller_fan_guard](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_controller_fan_guard.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | Will replace with the versions with [Voron logos](#60mm-fan-cover) and print an extra one for the Exhaust Filter fan |
| [latch_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_left.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [latch_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_right.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [lever_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_left.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [lever_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_right.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         |                                                                                                                      |
| [base_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_left.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [base_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_right.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [controller_fan_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/controller_fan_mount.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         |                                                                                                                      |
| [corner_bracket_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_left.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [corner_bracket_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_right.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :heavy_check_mark: |                                                                                                                      |
| [din_bracket_base](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_base_x4.stl)              | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         |                                                                                                                      |
| [din_bracket_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_clamp_x4.stl)            | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         |                                                                                                                      |
| [lock_body](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/lock_body_x2.stl)                            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         |                                                                                                                      |
| [panel_holder](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/panel_holder_x2.stl)                      | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         |                                                                                                                      |
| [pcb_din_clip_v2](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/pcb_din_clip_v2_x5.stl)                                               | 5        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         | 2 for SKR, 1 for Raspberry Pi and 2 for Mosfets (need to design mosfet holder brackets)                              |
| [raspberrypi_bracket](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/raspberrypi_bracket.stl)                                          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         | This is a Trident Part                                                                                               |
| [SKR_bracket_inline_2pc](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/Controller_Mounts/SKR_bracket_inline_2pc.stl)                  | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |        :x:         | This is a Trident Part                                                                                               |
| [wire_corner_left](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/wire_corner_left.stl)                                                        | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Trident Part                                                                                               |
| [wire_corner_right](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/wire_corner_right.stl)                                                      | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |        :x:         | This is a Trident Part                                                                                               |

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

| Item                                                                                                                                                                | Quantity | Material                                                | Printed | Notes                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----------------------------------------------------------------------- |
| [bottom_panel_clip](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/bottom_panel_clip_x4.stl)                                                    | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Trident Part                                                  |
| [bottom_panel_hinge](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Panels/bottom_panel_hinge_x2.stl)                                                  | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Trident Part                                                  |
| [corner_panel_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/corner_panel_clip_3mm_x12.stl)                                         | 14       | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | These are 3mm versions, 4mm versions are available in Trident repo      |
| [deck_support_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/deck_support_clip_x6.stl)                                              | 6        |                                                         |   :x:   | Will replace with [Deck Panel Support Clips](#deck-panel-support-clips) |
| [midspan_panel_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/midspan_panel_clip_3mm_x12.stl)                                       | 14       | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | These are 3mm versions, 4mm versions are available in Trident repo      |
| [front_panel_rest](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/front_panel_rest_3%2B6mm_x2_Rev1.STL) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | For Voron 2.2 but I'm going to add to mine                              |
| [handle](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/handle_3mm_x2_Rev1.stl)                         | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | For Voron 2.2 Will replace with [Sturdy Handles](#sturdy-handles)       |

#### Front Doors

| Item                                                                                                                                | Quantity | Material                                                | Printed | Notes                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----------------------------------------------------------------------------------------------- |
| [door_hinge](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/door_hinge_x4.stl)                | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | Using 2 extra here like the Trident. May swap for [Clamping Door Hinges](#clamping-door-hinges) |
| [handle_bottom_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_left.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                 |
| [handle_bottom_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_right.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                 |
| [handle_top_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_left.stl)         | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                 |
| [handle_top_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_right.stl)       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                 |
| [latch](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/latch_x2.stl)                          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                                                 |

### Spool Management

| Item                                                                                                            | Quantity | Material | Printed | Notes                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ---------------------------------------------------------------------------------------------------------- |
| [bowen_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Spool_Management/bowen_retainer.stl) | 1        |          |   :x:   | Not printing this as I will be using the [Smart Filament Sensor Mount](#smart-filament-sensor-mount)       |
| [spool_holder](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Spool_Management/spool_holder.stl)     | 1        |          |   :x:   | May not print this as I currently use an [eSun Filament Dryer box](https://www.amazon.co.uk/dp/B094XWVQ1X) |

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

| Item                                                                                                                                                               | Quantity | Material                                                | Printed | Notes                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :-----: | -------------------------------------------- |
| [face_plate_bottom](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_bottom.stl)             | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by AlexanderT-Moss |
| [face_plate_no_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_no_logo.stl)           | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by AlexanderT-Moss |
| [face_plate_through_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_through_logo.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by AlexanderT-Moss |
| [side_mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/side_mount.stl)                           | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by AlexanderT-Moss |

### Nozzle Scrubber

Cleans the nozzle before printing and has endstops to locate the magnetic bed.

| Item                                                                                                                                                                                                | Quantity | Material                                                | Printed | Notes                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------------- |
| [brush_holder_sheet_stop](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/brush_holder_sheet_stop_rev4.stl)     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by edwardyeeks |
| [extension_bracket](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/extension_bracket_v1.8_rev4.stl)            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by edwardyeeks |
| [individual_sheetstop](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/individual_sheetstop_v1.8_v2.4_rev4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by edwardyeeks |
| [purge_bucket](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/purge_bucket_300mm_rev4.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by edwardyeeks |

### Smart Filament Sensor Mount

Mount for the BigTreeTech Smart filment sensor that I already have. There are two different mounts, one vertical and one horizontal. I am not sure which mount I will need yet until I have decided on where I am going to keep my filament spool.

| Item                                                                                                                                                     | Quantity | Material                                                | Printed | Notes                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------ |
| [BTT_Sensor_Mount_A](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_A.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Empusas |
| [BTT_Sensor_Mount_B](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_B.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Empusas |

### Printable Chain

I may want to have the ends of the cable chains printed in accent colour so may print the ends from this. I will also need 2 more ends for the Z chain.
There are versions for 3 hole and 2 hole (3 hole can be fixed firmly to printed parts with 3 screws and the two hole versions can be fixed to 2020 extrusion easier)

| Item                                                                                                                                                        | Quantity | Material                                            | Printed | Notes                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ------------------------------------- |
| [10x11-chain-endcap1](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap1_support.STL) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by mjoaris  |
| [10x11-chain-endcap2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap2_support.STL) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by mjoaris  |
| [fixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/fixed_end.stl)                               | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by hymness1 |
| [unfixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/unfixed_end.stl)                           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | This is a Voron Users Mod by hymness1 |

### Sturdy Handles

Will make moving the printer around a little easier when assembled.

| Item                                                                                                                             | Quantity | Material                                                | Printed | Notes                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------- |
| [sturdy_handles](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/jeoje/Sturdy_Handles/STL/sturdy_handles.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by jeoje |

### Klicky Probe

Recommended upgrade to replace the PL-08N Inductive Probe which can be a bit unreliable with magnetic flexible build plates.

#### Dock

| Item                                                                                                                                                                       | Quantity | Material                                                | Printed | Notes                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------- |
| [Dock_Side_Mount_Fixed_Main](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/KlickyProbe_Dock_Side_Mount_Fixed_Main.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JosAr |
| [Dock_Side_Mount_Fixed_RightArm](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/KlickyProbe_Dock_Side_Mount_Fixed_RightArm.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_Dock](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/KlickyProbe_Probe_Dock_v0_2_1.stl)                                  | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by JosAr |

#### Probe

| Item                                                                                                                                  | Quantity | Material                                                | Printed | Notes                              |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------- |
| [Probe](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/KlickyProbe_Probe_v0_2_1.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JosAr |
| [AB_mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/KlickyProbe_AB_mount_v0_2_1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JosAr |

#### Tools

| Item                                                                                                                                           | Quantity | Material | Printed | Notes                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ---------------------------------- |
| [Probe_magnet_press](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/KlickyProbe_magnet_press.stl)   | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_press_Helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/Klicky_probe_press_Helper.stl)  | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/Probe_magnet_holder.stl)       | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [AB_mount_magnet_press](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/AB_mount_magnet_press.stl)   | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [AB_mount_press_Helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/AB_mount_press_Helper.stl)   | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |
| [AB_mount_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/STL/AB_mount_magnet_holder.stl) | 1        |          |   :x:   | This is a Voron Users Mod by JosAr |

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

### Deck Panel Support Clips

The coroplast on the bottom of the printer is not that well supported so this just add a bit more support to the bottom deck panel.

| Item                                                                                                                                                                                    | Quantity | Material                                                | Printed | Notes                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------ |
| [deck_panel_support_lower](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_lower_adjustable(3-6mm).stl>) | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by wile-e1 |
| [deck_panel_support_upper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_upper.stl)                     | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by wile-e1 |

### Mosfet Mounts

The SKR 1.4 Turbo only has 1 controllable fan header, I have purchased a couple of mosfets to control more fans and need something to mount them.

| Item                                                                                                                                         | Quantity | Material                                                | Printed | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------- |
| [Mosfet_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/JaredC01/Mosfet_Mounts/Mosfet_Mount_4.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by JaredC01 |

### Display Mount

Mount for the display allowing it to be tilted and angled.

| Item                                                                                                                                                                      | Quantity | Material                                                | Printed | Notes                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------------------------------------------------------------------------------------- |
| [Back](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Back.stl)                                       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Iakabos. The arm mounting holes may need to be moved for this to fit around the skirts |
| [Case_arm(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm(Mirror).stl>)             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Case_arm](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Front](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Front.stl)                                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Mount_block(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block(Mirror).stl>)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Mount_block](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Swingarm_long(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long(Mirror).stl>)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Swingarm_long](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Swingarm_short(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short(Mirror).stl>) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
| [Swingarm_short](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This is a Voron Users Mod by Iakabos                                                                                |
