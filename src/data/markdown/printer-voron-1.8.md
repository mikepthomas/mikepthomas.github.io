# Upgrading the Hypercube to a Voron 1.8

Febuary 17, 2022 by [Mike Thomas](https://github.com/mikepthomas)

The steps I have taken to migrate from the Hypercube to a Voron 1.8.

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)
3. [Mods](#mods)

## Sourcing Parts

### Fasteners

| Item                       | Quantity | Received | Notes                                                                      |
| -------------------------- | -------- | -------- | -------------------------------------------------------------------------- |
| M5x40 SHCS                 | 8        | 29       |                                                                            |
| M5x30 BHCS                 | 6        | 21       |                                                                            |
| M5x16 BHCS                 | 67       | 60       | Received 45 SHCS instead (Will use 10 of these for the feet and DIN Rails) |
| M5x10 BHCS                 | 71       | 104      |                                                                            |
| M5 Hexnut                  | 8        | 19       |                                                                            |
| M5 1mm Spacer              | 20       |          | 50 on order                                                                |
| M5 T-nut                   | 83       | 30       | 100 on order                                                               |
| M4x6 BHCS                  | 4        |          | Using stock Anet A8 bed for the moment (These are for SSR DIN Mount)       |
| M3x40 SHCS                 | 5        | 20       |                                                                            |
| M3x30 SHCS                 | 25       | 30       |                                                                            |
| M3x20 SHCS                 | 10       | 30       |                                                                            |
| M3x16 SHCS                 | 17       | 30       |                                                                            |
| M3x12 SHCS                 | 30       | 30       |                                                                            |
| M3x8 SHCS                  | 171      | 30       | 150 on order                                                               |
| M3x6 BHCS                  | 20       | 30       |                                                                            |
| M3 Hexnut                  | 7        | 50       |                                                                            |
| M3 Washer                  | 10       | 50       |                                                                            |
| M3 T-nut                   | 120      | 10       | 150 on order                                                               |
| M3 Hammer Head T-nuts      | 54       | 10       | 100 on order                                                               |
| M3 Threaded Insert         | 50       | 100      |                                                                            |
| M3 Knurled Nut (DIN 466-B) | 3        |          | 5 on order                                                                 |
| M2x10 Self-Tapping Screw   | 7        |          | 50 on order                                                                |
| Yellow Die Spring - M3     | 1        | 6        | Have some bed springs left over from Anet A8 Build                         |

### Motion

| Item                                       | Quantity | Received | Notes                                                    |
| ------------------------------------------ | -------- | -------- | -------------------------------------------------------- |
| GT2 20T Pulley (5mm ID 6mm W)              | 3        | 2        | Ordered Complete Z endstop in place of this              |
| GT2 20T Toothed Idler (5mm ID 6mm W)       | 2        |          | 2 on order                                               |
| F695 Bearing                               | 20       |          | 30 on order                                              |
| LM8LUU Linear Bearing                      | 4        | 16       | Using 2 Igus bearings in place of 1 LM8LUU               |
| TR8x8 Leadscrew Nut                        | 2        | 6        |                                                          |
| 5x30mm Shaft                               | 1        |          | Ordered Complete Z endstop in place of this              |
| BMG Extruder Componnets Kit                | 1        | 2        |                                                          |
| Linear Rail MGN9H 350mm                    | 4        |          | 4 on order                                               |
| Linear Shaft 8x320mm                       | 4        | 4        | Ordered 500mm Carbon Fiber ones that I can cut to length |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm | 2        | 4        | I have about 10 meters left                              |

### Vibration Management

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Rubber Compressor Foot | 4        | 4        |       |

### Electronics

| Item                               | Quantity | Received | Notes                                                                                                                   |
| ---------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| NEMA17 Motor 17HS19-2004S          | 2        | 2        | In [LDO Voron V1/V2 HT Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-voron-v1-v2-ht-motor-kit) |
| SPDT KW10 Limit Micro Switch       | 3        |          | 10 on order                                                                                                             |
| PL-08N Inductive Probe             | 1        | 1        | Using Tronxy XY-08N                                                                                                     |
| E3D V6 Bowden Hotend Kit (24V)     | 1        | 1        | Using 12V version as I am using 12V Power supply                                                                        |
| 40x40x20 Centrifugal Fan (24V)     | 1        | 1        | Using 12V version as I am using 12V Power supply                                                                        |
| 40x40x10 Axial Fan (24V)           | 1        | 2        | Using 12V version as I am using 12V Power supply                                                                        |
| Mini 12864 Display                 | 1        |          | Using BigTreeTech TFT24 Instead                                                                                         |
| Inlet Power Socket IEC320 C14      | 1        |          | 1 on order                                                                                                              |
| Keystone CAT6 Insert (Optional)    | 1        |          | Ordered 1 Ethernet and 1 USB                                                                                            |
| 60x60x20 Fan (24V)                 | 2        | 1        | Using 12V versions as I am using 12V Power supply                                                                       |
| SKR 1.4                            | 1        | 1        | I have the Turbo version                                                                                                |
| TMC2209 Stepper Motor Driver       | 5        | 5        |                                                                                                                         |
| USB Cable A-male B-male            | 1        | 1        |                                                                                                                         |
| Raspberry Pi 4                     | 1        |          | Using Raspberry Pi 3B+ Instead as I already have one                                                                    |
| Mean Well LRS-200-24 PSU           | 1        |          | Using Upgraded 30A Power Supply from my Anet A8                                                                         |
| Mean Well RS-25-5 PSU              | 1        |          | Using UBEC or separate mains Micro USB power supply                                                                     |
| Omron G3A-210B-DC5 SSR             | 1        |          | Using stock Anet A8 bed, this is for a mains powered bed                                                                |
| DIN Rail Mount Bracket for G3A SSR | 1        |          | Using stock Anet A8 bed, this is for a mains powered bed                                                                |
| BAT85 Diode                        | 1        | 7        | My Tronxy XY-08N seems to work fine on SKR 1.4 Turbo using endstop pins                                                 |
| C13 Power Cord                     | 1        | 3        |                                                                                                                         |
| Thermal Fuse (120C)                | 1        |          | Using stock Anet A8 bed, this is for a mains powered bed                                                                |
| NEMA17 Motor 17HS08-1004S          | 1        | 1        | In [LDO Voron V1/V2 HT Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-voron-v1-v2-ht-motor-kit) |
| NEMA17 TR8x8 300mm Linear Stepper  | 2        | 2        | In [LDO V1 Z Motor Kit](https://mechporium.co.uk/collections/v1-motion/products/ldo-v1-z-motor-kit)                     |

### Misc

| Item                                 | Quantity | Received | Notes       |
| ------------------------------------ | -------- | -------- | ----------- |
| Fume Extractor Carbon Filter Element | 1        | 1        |             |
| 4mm Bowden Coupler                   | 1        | 4        |             |
| Bowden Tube (m)                      | 1        | 1        |             |
| 3M VHB Tape 5952                     | 1        | 1        |             |
| Loctite Blue Threadlocker Stick      | 1        | 1        |             |
| Mobil EP2 Grease                     | 1        | 1        |             |
| Tesa Wire Loom Harness Tape          | 1        | 1        |             |
| 6x3mm Neodimium Magnet               | 8        |          | 50 on order |
| PTFE Tube (4mm OD 3mm ID) - 1m       | 1        | 1        |             |

### Cables

| Item                                      | Quantity | Received | Notes                                                           |
| ----------------------------------------- | -------- | -------- | --------------------------------------------------------------- |
| Nylon Cable Ties 4"                       | 40       |          | I have a random assortment but will probably need to order more |
| 1/2" Braided Cable Sheathing (ft)         | 5        |          | Using the stock Anet A8 spiral plastic wrap                     |
| 20AWG Silicone Cable (ft)                 | 10       |          |                                                                 |
| 24AWG Silicone Cable (ft)                 | 100      |          | 177ft in various colours on order                               |
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
| 10x11 Cable Chain - 1m                    | 2        |          | 2 on order                                                      |

### Frame

| Item                                     | Quantity | Received | Notes                                                                                                                                 |
| ---------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DIN 3 Rails (35mm W) - 420mm             | 3        | 2        | 1 on order, BOM only specifies 2 but manual has 3                                                                                     |
| Misumi HFSB5-2020-290                    | 1        | 1        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-420-TPW                | 10       | 10       | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-420                    | 1        | 1        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-230                    | 2        | 2        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-380                    | 1        | 1        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-500-LTP-RCP-AV380-AP40 | 4        | 4        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-200-TPW                | 2        | 2        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |
| Misumi HFSB5-2020-420-AH45-BH375         | 2        | 2        | In [LDO Voron 1.8 Z Frame Kit](https://mechporium.co.uk/collections/v1-frame/products/ldo-voron-1-8-300-frame?variant=40879778988199) |

### Panels

| Item                                 | Quantity | Received | Notes                                                                                                                                                                            |
| ------------------------------------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Coroplast Sheet - 420x420x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 435x435x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 198x434x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 246x434x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 236x415x4 mm       | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 242x46x4 mm        | 2        | 2        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Coroplast Sheet - 419x66x4 mm        | 1        | 1        | Brought [5 A1 3mm sheets](https://www.amazon.co.uk/gp/product/B016EMNWS4) to cut to size and [1mm foam tape](https://www.amazon.co.uk/gp/product/B076WTFWS5) to avoid vibrations |
| Acrylic Sheet Clear - 217x444x2.5 mm | 2        |          | 2 on order, ordered 3mm thickness                                                                                                                                                |
| Acrylic Sheet Clear - 434x444x2.5 mm | 2        |          | 2 on order, ordered 3mm thickness                                                                                                                                                |
| Acrylic Sheet Clear - 434x434x2.5 mm | 1        |          | 1 on order, ordered 3mm thickness                                                                                                                                                |

### Buildplate

| Item                                                        | Quantity | Received | Notes                                  |
| ----------------------------------------------------------- | -------- | -------- | -------------------------------------- |
| 3M 468MP Adhesive Sheet - 12"x12"                           | 1        |          | Using stock Anet A8 bed for the moment |
| PEI 0.04" Sheet - 12"x12"                                   | 1        |          | Using stock Anet A8 bed for the moment |
| MIC6 5/16" Plate - 12"x12"                                  | 1        |          | Using stock Anet A8 bed for the moment |
| Keenovo Silicone AC Heater w/ thermistor - 250x250mm (450W) | 1        |          | Using stock Anet A8 bed for the moment |

## Printing Parts

### Bed

| Item                                                                                                                      | Quantity | Material | Printed                       | Notes                                  |
| ------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ----------------------------- | -------------------------------------- |
| [leadscrew_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_leadscrew_block_x2.stl)   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |                                        |
| [z_shaft_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_z_shaft_retainer_x8.stl) | 8        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |                                        |
| [bed_mount_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/bed_mount_front.stl)                      | 1        |          | :negative_squared_cross_mark: | Using stock Anet A8 bed for the moment |
| [z_bearing_block_a](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_a_x2.stl)            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)         | :negative_squared_cross_mark: |                                        |
| [z_bearing_block_b](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_b_x2.stl)            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)         | :negative_squared_cross_mark: |                                        |
| [z_motor_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_motor_mount_x2.stl)                    | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |                                        |

### Bottom Skirts

| Item                                                                                                                 | Quantity | Material | Printed                       | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ----------------------------- | ----- |
| [skirt_300_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_left_x3.stl)   | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |       |
| [skirt_300_power](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_power.stl)       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |       |
| [skirt_300_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_right_x4.stl) | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |       |
| [skirt_middle](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_middle_x3.stl)       | 3        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)         | :negative_squared_cross_mark: |       |

### Electronics Brackets

### Exhaust Filter

| Item                                                                                                                                 | Quantity | Material                                                               | Printed            | Notes                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------- |
| [[a]\_filter_access_cover](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/%5Ba%5D_filter_access_cover.stl) | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) | :white_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_grill](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_grill.stl)            | 1        | [Amazon Basics PETG (Red)](printer-filament.md#amazon-basics-petg-red) | :white_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_housing.stl)        | 1        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       | :white_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |
| [exhaust_filter_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_mount_x2.stl)      | 2        | [Tinmorry PETG (Black)](printer-filament.md#tinmorry-petg-black)       | :white_check_mark: | Will replace with [Exhaust Mount Side Entry](#exhaust-mount-side-entry) printed in ABS |

### Gantry

### Panel Mounting

### Spool Management

| Item                                                                                                            | Quantity | Material | Printed                       | Notes |
| --------------------------------------------------------------------------------------------------------------- | -------- | -------- | ----------------------------- | ----- |
| [bowen_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Spool_Management/bowen_retainer.stl) | 1        |          | :negative_squared_cross_mark: |       |
| [spool_holder](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Spool_Management/spool_holder.stl)     | 1        |          | :negative_squared_cross_mark: |       |

### Tools

| Item                                                                                                                                              | Quantity | Material | Printed                       | Notes                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ----------------------------- | ------------------------------------------- |
| [rail_installation_guide_center](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/rail_installation_guide_center_x2.stl)        | 2        |          | :negative_squared_cross_mark: |                                             |
| [v1.8_extrusion_drilling_jig](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/v1.8_extrusion_drilling_jig.stl)                    | 1        |          | :negative_squared_cross_mark: | Not Required as I brought my frame as a kit |
| [TensionMeter](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Kruppes/Tension_Meter/TensionMeter.stl)                         | 1        |          | :negative_squared_cross_mark: |                                             |
| [lower_extrusion_alignment](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/natewalck/v1.8_Jigs/lower_extrusion_alignment.stl) | 1        |          | :negative_squared_cross_mark: |                                             |

### Z Endstop

| Item                                                                                                 | Quantity | Material                                                | Printed                       | Notes                                   |
| ---------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----------------------------- | --------------------------------------- |
| [nozzle_probe](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Z_Endstop/nozzle_probe.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: | Ordered complete Z Endstop kit with PCB |

## Mods

### Exhaust Mount Side Entry

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/120decibell/exhaust_housing_side_entry

### AB-BN

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Badnoob/AB-BN

### Connector Cover

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/buzzdalf/connector_cover

### Smart Filament Sensor Mount

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount

### Klicky Probe

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/JosAr/Klicky-Probe

### 60mm Fan Cover

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Rhastlyn/60mmFanCover

### Cable Management Duct

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/ryandam/Cable_management_duct

### Deck Panel Support Clips

https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/wile-e1/Deck_Panel_Support_Clips
