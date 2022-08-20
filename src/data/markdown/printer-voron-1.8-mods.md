# Voron Modifications and Upgrades

Created April 27, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated August 20, 2022

List of upgrades that I plan on adding from the printer mods directory of the Voron Users repository.

---

## Table of contents

1. [Exhaust Mount Side Entry](#exhaust-mount-side-entry)
2. [Clamping Door Hinges](#clamping-door-hinges)
3. [Cable Chain Anchors](#cable-chain-anchors)
4. [Bed Fans](#bed-fans)
5. [LED Bar Clip](#led-bar-clip)
6. [Nozzle Scrubber](#nozzle-scrubber)
7. [Smart Filament Sensor Mount](#smart-filament-sensor-mount)
8. [Magnetic Grill Cover](#magnetic-grill-cover)
9. [Sexbolt Z Endstop](#sexbolt-z-endstop)
10. [Printable Chain](#printable-chain)
11. [Display Mount](#display-mount)
12. [Mosfet Mounts](#mosfet-mounts)
13. [Sturdy Handles](#sturdy-handles)
14. [Klicky Probe](#klicky-probe)
15. [Wago Mounts](#wago-mounts)
16. [MKS Mosfet Mount](#mks-mosfet-mount)
17. [Cable Management Duct](#cable-management-duct)
18. [Corner Cable Cover](#corner-cable-cover)
19. [Power Supply Cover](#power-supply-cover)
20. [Deck Panel Support Clips](#deck-panel-support-clips)
21. [Klipper Expander](#klipper-expander)
22. [BTT 5" Screen case](#btt-5--screen-case)
23. [Nevermore Micro V5 Duo](#nevermore-micro-v5-duo)

## Mods

### Exhaust Mount Side Entry

The stock exhaust filter has the bowden coupler coming out of the back. As I will have my printer up against the wall I would like to have the bowden coupler coming out of the side to save some space. It will also allow the ability to run two bowden tubes into the enclosure to experiment with [dual extrusion toolheads](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Bowden/bowden_dual_front_b.stl).

| Item                                                                                                                                                                                     | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | ---------------------------------------- |
| [exhaust_filter_housing](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/exhaust_filter_housing.stl)                       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 23.54m | 60.02g | £1.14 | :heavy_check_mark: | This is a Voron Users Mod by 120decibell |
| [exhaust_housing_insert_plug](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_exhaust_housing_insert_plug.stl)     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.42m  | 1.07g  | £0.02 | :heavy_check_mark: | This is a Voron Users Mod by 120decibell |
| [exhaust_housing_insert_thread](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_exhaust_housing_insert_thread.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.32m  | 0.83g  | £0.02 | :heavy_check_mark: | This is a Voron Users Mod by 120decibell |
| [filter_access_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_filter_access_cover.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 9.27m  | 23.63g | £0.45 | :heavy_check_mark: | This is a Voron Users Mod by 120decibell |

#### :white_check_mark: Assembly

![Exhaust Mount Side Entry](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/exhaust-mount-side-entry.jpg)

##### Parts Used

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| 4mm Bowden Coupler                   | 2        |
| 60x60x20 Fan (24V)                   | 1        |
| Fume Extractor Carbon Filter Element | 1        |
| M3 Threaded Insert                   | 8        |
| M3x8 BHCS                            | 2        |
| M3x25 SHCS                           | 4        |

### Clamping Door Hinges

The Stock door hinges are attached using VHB, these clamp around the acrylic panel and also allow the doors to open all the way.

| Item                                                                                                                                                               | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------------- |
| [face_plate_bottom](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_bottom.stl)             | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.97m | 2.47g  | £0.05 | :heavy_check_mark: | This is a Voron Users Mod by AlexanderT-Moss |
| [face_plate_no_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_no_logo.stl)           | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.94m | 4.93g  | £0.09 | :heavy_check_mark: | This is a Voron Users Mod by AlexanderT-Moss |
| [face_plate_through_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_through_logo.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.90m | 4.86g  | £0.09 | :heavy_check_mark: | This is a Voron Users Mod by AlexanderT-Moss |
| [side_mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/side_mount_brimed.stl)                    | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.93m | 4.93g  | £0.09 | :heavy_check_mark: | This is a Voron Users Mod by AlexanderT-Moss |

#### :wrench: Assembly

![Clamping Door Hinges](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/clamping-door-hinges.jpg)

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3 Hammer Head T-nuts | 6        |
| M3 Hex Nuts           | 12       |
| M3x8 SHCS             | 30       |

### Cable Chain Anchors

Clips to route zip ties through 3 hole cable chain to attach to 2020 extrusion.

| Item                                                                                                                                                                                                      | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------ |
| [Triangle_Hole_Pattern_End_Mount_to_2020](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/bryansj/Befenybay_Chain_Anchors/Triangle_Hole_Pattern_End_Mount_to_2020.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.11m | 0.27g  | £0.01 | :heavy_check_mark: | This is a Voron Users Mod by bryansj |

#### :white_check_mark: Assembly

These will be installed at the same time as the [Cable Chains](printer-voron-1.8.md#wire-path).

### Bed Fans

Mounts for 5015 fans to circulate air around the enclosure to get hotter chamber temps.

| Item                                                                                                                                    | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                   |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------- |
| [Mounting_Plate](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/CannedBass/Trident_Bed_Fans/STL/Mounting_Plate.stl) | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 4.00m | 10.21g | £0.19 | :heavy_check_mark: | This is a Voron Users Mod by CannedBass |

#### :wrench: Assembly

##### Parts Used

| Item                       | Quantity |
| -------------------------- | -------- |
| 5015 Centrifugal Fan (24V) | 4        |
| M3 Hammer Head T-nuts      | 4        |
| M3 Threaded Insert         | 8        |
| M3x8 SHCS                  | 4        |
| M3x18 BHCS                 | 8        |

### LED Bar Clip

Modular clips to add LED strips of any length to the inside of the top extrusions.

| Item                                                                                                                                   | Quantity | Material                                                | Size  | Weight | Cost  | Printed | Notes                              |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :-----: | ---------------------------------- |
| [LED_Bar_Clip](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/eddie/LED_Bar_Clip/LED_Bar_Clip_Misumi_version2.stl) | ?        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.95m | 2.43g  | £0.05 |   :x:   | This is a Voron Users Mod by eddie |

#### :negative_squared_cross_mark: Assembly

##### Parts Used

| Item                       | Quantity |
| -------------------------- | -------- |
| LED Neopixel Strip (300mm) | 2        |

### Nozzle Scrubber

Cleans the nozzle before printing and has endstops to locate the magnetic bed.

| Item                                                                                                                                                                                                               | Quantity | Material                                                | Size   | Weight | Cost  |      Printed       | Notes                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :----------------: | ---------------------------------------- |
| [brush_holder_sheet_stop](https://github.com/VoronDesign/VoronUsers/blob/master/abandoned_mods/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/brush_holder_sheet_stop_rev4.stl)     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.78m  | 4.55g  | £0.09 | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |
| [extension_bracket](https://github.com/VoronDesign/VoronUsers/blob/master/abandoned_mods/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/extension_bracket_v1.8_rev4.stl)            | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.20m  | 8.16g  | £0.15 | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |
| [individual_sheetstop](https://github.com/VoronDesign/VoronUsers/blob/master/abandoned_mods/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/individual_sheetstop_v1.8_v2.4_rev4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.70m  | 1.73g  | £0.03 | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |
| [purge_bucket](https://github.com/VoronDesign/VoronUsers/blob/master/abandoned_mods/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/purge_bucket_300mm_rev4.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 12.51m | 31.90g | £0.61 | :heavy_check_mark: | This is a Voron Users Mod by edwardyeeks |

#### :wrench: Assembly

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------- |
| 6x3mm Neodimium Magnet   | 2        |
| M2x10 Self-Tapping Screw | 3        |
| M3 Hexnut                | 3        |
| M3 T-nut                 | 2        |
| M3x8 SHCS (Carbon Steel) | 5        |
| TriangleLabs Brass Brush | 1        |

### Smart Filament Sensor Mount

Mount for the BigTreeTech Smart filment sensor that I already have. There are two different mounts, one vertical and one horizontal.

| Item                                                                                                                                                     | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------ |
| [BTT_Sensor_Mount_A](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_A.stl) | 2        |                                                         |       |        |       |        :x:         | This is a Voron Users Mod by Empusas |
| [BTT_Sensor_Mount_B](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_B.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.71m | 9.46g  | £0.18 | :heavy_check_mark: | This is a Voron Users Mod by Empusas |

#### Assembly

I have printed the 'B' mounts as I am planning on mounting them on the top rear extrusion just before the bowden enters the Exhaust Filter. I have had to mirror the part along the Y axis when importing as I want the bowden to be as close to inline of the [Side Entry Exhaust Filter](#exhaust-mount-side-entry).

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3 Hammer Head T-nuts | 2        |
| M3x8 SHCS             | 2        |

### Magnetic Grill Cover

Cover for the Exhaust filter grill to allow the chamber to hold it's temperature better.

| Item                                                                                                                                                                | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------- |
| [exhaust_filter_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/falo/magnetic_grill_cover/STL/exhaust_filter_cover.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 7.08m | 18.06g | £0.34 | :heavy_check_mark: | This is a Voron Users Mod by falo |
| [exhaust_filter_grill_modified](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/falo/magnetic_grill_cover/STL/exhaust_filter_grill_modified.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 4.52m | 11.53g | £0.22 | :heavy_check_mark: | This is a Voron Users Mod by falo |

#### :white_check_mark: Assembly

![Magnetic Grill Cover](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/magnetic-grill-cover.jpg)

##### Parts Used

| Item                   | Quantity |
| ---------------------- | -------- |
| 6x3mm Neodimium Magnet | 8        |
| M3x12 BHCS             | 4        |

The cover can be easily removed to allow air to be exracted from the exhaust filter.

![Magnetic Grill Cover Removed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/magnetic-grill-cover-removed.jpg)

### Sexbolt Z Endstop

An enclosed bolt with sleeved bearings for the Z endstop.

| Item                                                                                                                                                      | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------- |
| [EndstopHousing](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hartk1213/Voron2.4_SexBolt_ZEndstop/STLs/EndstopHousingVoronLogo.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.06m | 7.80g  | £0.15 | :heavy_check_mark: | This is a Voron Users Mod by hartk1213 |

#### :white_check_mark: Assembly

![Sexbolt Z Endstop](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/sexbolt-z-endstop.jpg)

##### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------- |
| 5x7x8 Sleeve Bearings          | 2        |
| 5mmx20mm Binding Screw         | 1        |
| 6mmx5mm Stainless Steel Spring | 1        |
| M2x10 Self-Tapping Screw       | 4        |
| M4x8 SHCS                      | 1        |
| M3 T-nut                       | 2        |
| M3x20 SHCS                     | 2        |
| Microswitch Z Endstop PCB      | 1        |

### Printable Chain

I may want to have the ends of the cable chains printed in accent colour so may print the ends from this. I will also need 2 more ends for the Z chain.
There are versions for 3 hole and 2 hole (3 hole can be fixed firmly to printed parts with 3 screws and the two hole versions can be fixed to 2020 extrusion easier)

| Item                                                                                                                                                        | Quantity | Material                                            | Size  | Weight | Cost  | Printed | Notes                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----- | ------ | ----- | :-----: | ------------------------------------- |
| [fixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/fixed_end.stl)                               | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 0.54m | 1.37g  | £0.03 |   :x:   | This is a Voron Users Mod by hymness1 |
| [unfixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/unfixed_end.stl)                           | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 0.44m | 1.13g  | £0.02 |   :x:   | This is a Voron Users Mod by hymness1 |
| [10x11-chain-endcap1](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap1_support.STL) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 0.65m | 1.65g  | £0.03 |   :x:   | This is a Voron Users Mod by mjoaris  |
| [10x11-chain-endcap2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap2_support.STL) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 0.54m | 1.38g  | £0.03 |   :x:   | This is a Voron Users Mod by mjoaris  |

### Display Mount

Mount for the display allowing it to be tilted and angled.

| Item                                                                                                                                                                      | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------------------------------------------------------------------------------------------ |
| [Back](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Back.stl)                                       | 1        |                                                         |       |        |       |        :x:         | This is a Voron Users Mod by Iakabos. Not required, I have modifed the newer Voron 1.8 version                           |
| [Case_arm(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm(Mirror).stl>)             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.00m | 5.11g  | £0.10 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Case_arm](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.00m | 5.11g  | £0.10 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Front](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Front.stl)                                     | 1        |                                                         |       |        |       |        :x:         | This is a Voron Users Mod by Iakabos. I will print the Voron 1.8 version that has been shaped to allow the doors to open |
| [Mount_block(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block(Mirror).stl>)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.70m | 4.34g  | £0.08 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Mount_block](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.70m | 4.34g  | £0.08 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_long(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long(Mirror).stl>)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.75m | 1.92g  | £0.04 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_long](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long.stl)                     | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.75m | 1.92g  | £0.04 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_short(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short(Mirror).stl>) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.44m | 1.11g  | £0.02 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |
| [Swingarm_short](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short.stl)                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.44m | 1.11g  | £0.02 | :heavy_check_mark: | This is a Voron Users Mod by Iakabos                                                                                     |

#### :white_check_mark: Assembly

![Display Mount](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/display-mount.jpg)

##### Parts Used

| Item               | Quantity |
| ------------------ | -------- |
| M3x8 SHCS          | 16       |
| M5 1mm Spacer      | 2        |
| M5 T-nut           | 2        |
| M5x16 BHCS         | 2        |
| Mini 12864 Display | 1        |

![Display Mount installed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/display-mount-installed.jpg)

The reason to add this mod is that it allows me to fold the display flat with the frame out of the way or angled up to view the display at different angles.

![Display Mount Folded Flat](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/display-mount-flat.jpg)

### Mosfet Mounts

The SKR 1.4 Turbo only has 1 controllable fan header, I have purchased a few [mosfets to control more fans](https://www.makenprint.uk/3d-printing/3d-printing-guides/external-mosfet-controlled-fans/) and need something to mount them.

| Item                                                                                                                                         | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------- |
| [Mosfet_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/JaredC01/Mosfet_Mounts/Mosfet_Mount_4.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 8.00m | 20.39g | £0.39 | :heavy_check_mark: | This is a Voron Users Mod by JaredC01 |

#### :wrench: Assembly

![Mosfet Mounts](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/mosfet-mounts.jpg)

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------- |
| IRF520 MOS Driver Module | 4        |
| M2x10 Self-Tapping Screw | 8        |
| M3 Hammer Head T-nuts    | 2        |
| M3x8 SHCS                | 2        |
| TO-220 Aluminum Heatsink | 4        |

### Sturdy Handles

Will make moving the printer around a little easier when assembled.

| Item                                                                                                                             | Quantity | Material                                                | Size   | Weight | Cost  | Printed | Notes                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ------ | ------ | ----- | :-----: | ---------------------------------- |
| [sturdy_handles](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/jeoje/Sturdy_Handles/STL/sturdy_handles.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 20.24m | 54.14g | £1.03 |   :x:   | This is a Voron Users Mod by jeoje |

#### Assembly

##### Parts Used

| Item       | Quantity |
| ---------- | -------- |
| M5 T-nut   | 4        |
| M5x10 BHCS | 4        |

### Klicky Probe

Recommended upgrade to replace the PL-08N Inductive Probe which can be a bit unreliable with magnetic flexible build plates and have a tendency to melt being in such close proximity to the hotend.

#### Dock

| Item                                                                                                                                                                                                        | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------------------- |
| [Dock_sidemount_fixed_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_fixed_v2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 6.10m | 15.56g | £0.30 | :heavy_check_mark: | This is a Voron Users Mod by JosAr |
| [Dock_sidemount_left_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_left_v2.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.96m | 10.09g | £0.19 | :heavy_check_mark: | This is a Voron Users Mod by JosAr |
| [Dock_sidemount_right_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_right_v2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.96m | 10.09g | £0.19 | :heavy_check_mark: | This is a Voron Users Mod by JosAr |
| [Probe_Dock_v2.1](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_Dock_v2.1.stl)                                                                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 1.14m | 2.89g  | £0.05 | :heavy_check_mark: | This is a Voron Users Mod by JosAr |

##### :wrench: Assembly

###### Parts Used

| Item                   | Quantity |
| ---------------------- | -------- |
| 6x3mm Neodimium Magnet | 1        |
| M3 Threaded Insert     | 4        |
| M3x10 SHCS             | 2        |
| M3x18 SHCS             | 2        |
| Super Glue             | 1        |

#### Probe

| Item                                                                                                                                                                                                        | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ---------------------------------- |
| [KlickyProbe_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/KlickyProbe_v2.stl)                                                                         | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.93m | 2.38g  | £0.05 | :heavy_check_mark: | This is a Voron Users Mod by JosAr |
| [Switch_extender](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Switch_extender.stl)                                                                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |       |        |       |        :x:         | This is a Voron Users Mod by JosAr |
| [KlickyProbe_AB_mount_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/KlickyProbe_AB_mount_v2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.41m | 3.59g  | £0.07 | :heavy_check_mark: | This is a Voron Users Mod by JosAr |

##### :white_check_mark: Assembly

![Klicky Probe](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/klicky-probe.jpg)

###### Parts Used

| Item                            | Quantity |
| ------------------------------- | -------- |
| Black 20AWG Silicone Cable (mm) | 300      |
| 6x3mm Neodimium Magnet          | 7        |
| M2x10 Self-Tapping Screw        | 2        |
| Nylon Cable Ties 4"             | 1        |
| SPDT KW10 Limit Micro Switch    | 1        |
| Super Glue                      | 1        |

#### Tools

| Item                                                                                                                                                                                                                  | Quantity | Material | Size | Weight | Cost | Printed | Notes                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ---- | ------ | ---- | :-----: | ---------------------------------- |
| [Probe_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_magnet_holder.stl)                                                                         | 1        |          |      |        |      |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_magnet_pressfit_helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_magnet_pressfit_helper.stl)                                                       | 1        |          |      |        |      |   :x:   | This is a Voron Users Mod by JosAr |
| [Probe_pressfit_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_pressfit_holder.stl)                                                                     | 1        |          |      |        |      |   :x:   | This is a Voron Users Mod by JosAr |
| [Mount_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_magnet_holder.stl)                   | 1        |          |      |        |      |   :x:   | This is a Voron Users Mod by JosAr |
| [Mount_magnet_pressfit_helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_magnet_pressfit_helper.stl) | 1        |          |      |        |      |   :x:   | This is a Voron Users Mod by JosAr |
| [Mount_pressfit_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_pressfit_holder.stl)               | 1        |          |      |        |      |   :x:   | This is a Voron Users Mod by JosAr |

### VEFACH

Voron Exhaust Filter Activated Coal + Hepa that fits into stock exhaust filter. I will only be printing the Hepa filter to start off with.

| Item                                                                                                                                | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                    |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------- |
| [hepa](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/KevinAkaSam/VEFACH/STL_CAD/V2.4(R2)_Trident/1_hepa.stl>) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by KevinAkaSam |

#### :negative_squared_cross_mark: Assembly

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| 40mmx80mm Hepa filter | 1        |

### Wago Mounts

Wago Mount for connecting wires under the bed and in the electronics compartments.

| Item                                                                                                                                                                          | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------------------------------------------------------------------------- |
| [Wago_4x_221-412_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_4x_221-412_Extrusion_Mount.stl)         | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.84m | 7.23g  | £0.14 | :heavy_check_mark: | This is a Voron Users Mod by LoganFraser. One for Bed mains connections and one for Bed low voltage connections |
| [Wago_5x_221-412_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_5x_221-412_Extrusion_Mount.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.31m | 8.43g  | £0.16 | :heavy_check_mark: | This is a Voron Users Mod by LoganFraser. For Rear Electronics Compartment connections                          |
| [Wago_3x_221-413_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_3x_221-413_Extrusion_Mount.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |       |        |       |        :x:         | This is a Voron Users Mod by LoganFraser                                                                        |
| [Wago-3x-221-413_Thin-Din_Rail_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago-3x-221-413_Thin-Din_Rail_Mount.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.39m | 8.64g  | £0.16 | :heavy_check_mark: | This is a Voron Users Mod by LoganFraser. One for Exhaust and Controller fans and one for 12V & 5V to toolhead  |
| [Wago_2x_221-415_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_2x_221-415_Extrusion_Mount.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.79m | 7.12g  | £0.14 | :heavy_check_mark: | This is a Voron Users Mod by LoganFraser. For Bed fans                                                          |
| [Wago_2x_221-415_Thin_Din_Rail_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_2x_221-415_Thin_Din_Rail_Mount.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.36m | 8.18g  | £0.16 | :heavy_check_mark: | This is a Voron Users Mod by LoganFraser. For Mosfet power                                                      |
| [Wago_3x_221-415_Extrusion_Mount](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Electronics_Bay/wago_221-415_mount_3x5.stl)                                       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 3.97m | 10.12g | £0.19 | :heavy_check_mark: | This is a Voron 2.4 Part. For Input AC power                                                                    |
| [Wago_3x_221-415_Thin_Din_Rail_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_3x_221-415_Thin_Din_Rail_Mount.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 4.31m | 10.98g | £0.21 | :heavy_check_mark: | This is a Voron Users Mod by LoganFraser. For 24V SKR, Klipper Expander and ERCF, and 5V Raspberry Pi Power     |

#### :wrench: Assembly

![Wago Mounts](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/wago-mounts.jpg)

**_NOTE:_** I have currently printed [this version from Thingyverse](https://www.thingiverse.com/thing:4579456) for the Wago 221-412, I will replace these with ones from this User Mod.

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M5 Hammer Head T-nuts | 10       |
| M5x10 SHCS            | 10       |
| Wago 221-412          | 13       |
| Wago 221-413          | 6        |
| Wago 221-415          | 10       |

### MKS Mosfet Mount

A mount for a [BIQU116-A2 MKS Mosfet](https://www.biqu.equipment/products/3d-printer-parts-heating-controller-mks-mosfet-for-heat-bed-extruder-mos-module-exceed-30a-support-big-current) based on the Trident Raspberry Pi mount.

| Item                                                                                                                                         | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----------------------------------------------------- |
| [MKS Mosfet Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mikepthomas/MKS_Mosfet_Mount/STL/MKS_Mosfet_Mount.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 2.29m | 5.85g  | £0.11 | :heavy_check_mark: | This is a Voron Users Mod by mikepthomas (me :blush:) |
| [pcb_din_clip_v2](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/ElectronicsBay/pcb_din_clip_v2_x5.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.51m | 3.84g  | £0.07 | :heavy_check_mark: | This is a Trident Part                                |

#### Assembly

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------- |
| M2x10 Self-Tapping Screw | 6        |

### Cable Management Duct

A cable management duct to tidy up the wiring in the electronics case.

| Item                                                                                                                                       | Quantity | Material                                            | Size  | Weight | Cost  | Printed | Notes                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------- | ----- | ------ | ----- | :-----: | ------------------------------------ |
| [CableDuctBody](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/ryandam/Cable_management_duct/STLs/CableDuctBody.stl)   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 4.59m | 11.70g | £0.22 |   :x:   | This is a Voron Users Mod by ryandam |
| [CableDuctCover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/ryandam/Cable_management_duct/STLs/CableDuctCover.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 2.13m | 5.42g  | £0.10 |   :x:   | This is a Voron Users Mod by ryandam |

#### Assembly

##### Parts Used

| Item             | Quantity |
| ---------------- | -------- |
| 3M VHB Tape 5952 | 1        |

### Corner Cable Cover

Cover to hide the cables for the LED strip around the top corners of the printer

| Item                                                                                                                                                                          | Quantity | Material                                            | Size  | Weight | Cost  |      Printed       | Notes                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------- |
| [top_corner_cable_hide_left](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/corner_cable_hide/STLs/%5Ba%5D_top_corner_cable_hide_left_x2.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 3.96m | 10.09g | £0.19 | :heavy_check_mark: | This is a Voron Users Mod by samwiseg0 |
| [top_corner_cable_hide_right](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/corner_cable_hide/STLs/%5Ba%5D_top_corner_cable_hide_right_x2.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | 3.96m | 10.09g | £0.19 | :heavy_check_mark: | This is a Voron Users Mod by samwiseg0 |

#### :wrench: Assembly

![Corner Cable Cover](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/corner-cable-cover.jpg)

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3 Hammer Head T-nuts | 8        |
| M3x8 SHCS             | 8        |

I will also use some extrusion slot covers to hold the LED strip cables inside the rear of the front top extrusion like so:

![Corner Cable Cover Rear](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/corner-cable-cover-rear.jpg)

### Power Supply Cover

Cover for the live connections of the power supply making them harder to accidentally touch.

| Item                                                                                                                                                                          | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------- |
| ~[lrs_200_screw_terminal_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/lrs_screw_terminal_cover/STLs/lrs_200_screw_terminal_cover.stl)~ | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.96m | 4.99g  | £0.09 | :heavy_check_mark: | This is a Voron Users Mod by samwiseg0 |

**_NOTE:_** The side parts that slide onto the terminal block appear to be too thick to fit [my Meanwell power supply](https://uk.farnell.com/mean-well/lrs-200-24/power-supply-ac-dc-24v-8-8a/dp/3596584). I will need to modify it to make them thinner by approximately 1-2mm if I want to add it.

### Deck Panel Support Clips

The coroplast on the bottom of the printer is not that well supported so this just add a bit more support to the bottom deck panel.

| Item                                                                                                                                                                                    | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------ |
| [deck_panel_support_lower](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_lower_adjustable(3-6mm).stl>) | 4        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 0.72m | 1.83g  | £0.03 | :heavy_check_mark: | This is a Voron Users Mod by wile-e1 |
| [deck_panel_support_upper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_upper.stl)                     | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | 0.93m | 2.36g  | £0.04 | :heavy_check_mark: | This is a Voron Users Mod by wile-e1 |

#### :white_check_mark: Assembly

![Deck Panel Support Clips](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/deck-panel-support-clips.jpg)

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3 Hammer Head T-nuts | 8        |
| M3x6 BHCS             | 4        |
| M3x6 SHCS             | 4        |

### Klipper Expander

PCB to expand the ports that can be used for fans and neopixels. I already have RGB neopixel strips and will need another neopixel header to run the Stealthburner RGBW LEDs.
There are three different mounts, one vertical, one horizontal and one for DIN rail.

| Item                                                                                                                                                  | Quantity | Material                                                | Size  | Weight | Cost  |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [KlipperExpander_HorizontalMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_HorizontalMount.STL) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | 1.60m | 4.08g  | £0.08 | :heavy_check_mark: |       |
| [KlipperExpander_RailMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_RailMount.stl)             | 1        |                                                         |       |        |       |        :x:         |       |
| [KlipperExpander_VerticalMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_VerticalMount.STL)     | 1        |                                                         |       |        |       |        :x:         |       |

#### Assembly

I have printed the horizontal mount as I am planning on mounting the Klipper Expander to the left hand side of the rear electronics compartment and the inner slot is occupied by the corroplast side panel.

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------- |
| M3 Hammer Head T-nuts | 2        |
| M3x8 SHCS             | 4        |

### BTT 5" Screen case

This replaces the [Display Mount](#display-mount) to fit a BigTreeTech PITFT50 touch screen display to run [KlipperScreen](https://klipperscreen.readthedocs.io/).

| Item                                                     | Quantity | Material                                                | Printed | Notes                                                     |
| -------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | --------------------------------------------------------- |
| [back](https://www.thingiverse.com/thing:4837419/files)  | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                           |
| [feets](https://www.thingiverse.com/thing:4837419/files) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                           |
| [plate](https://www.thingiverse.com/thing:4837419/files) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                           |
| [main](https://www.thingiverse.com/thing:4837419/files)  | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This will need to be modified to fit the BTT PITFT50 V2.0 |

#### Assembly

##### Parts Used

| Item                                     | Quantity |
| ---------------------------------------- | -------- |
| BigTreeTech PITFT50 V2.0                 | 1        |
| 15 pin Raspberry Pi Display Ribbon Cable | 1m       |

### Nevermore Micro V5 Duo

The [Nevermore Micro V5 Duo](https://github.com/nevermore3d/Nevermore_Micro) filters the encosure to reduce the smell of printing ABS. [Carbon refill is available from here](https://www.onetwo3d.co.uk/product/nevermore3d-carbon/).

| Item                                                                                                                   | Quantity | Material                                                | Printed | Notes |
| ---------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----- |
| [1,8_Frame_Connector](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/1.8/1%2C8_Frame_Connector.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Duo_Cartridge_LID](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/1.8/Duo_Cartridge_LID.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Plenum_LID](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/1.8/Plenum_LID.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [V18_cartridge_RC2](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/1.8/V18_cartridge_RC2.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [V1_Duo_Plenum](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/1.8/V1_Duo_Plenum.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |

#### Assembly

![Nevermore Filter Parts](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/nevermore-filter.jpg)

##### Parts Used

| Item                               | Quantity |
| ---------------------------------- | -------- |
| 5015 Centrifugal Fan (24V)         | 2        |
| 6mm x 3mm Round Neodymium Magnets  | 8        |
| Acid-free Activated Carbon Pack    | 1        |
| JST XH Connector Header 2 Position | 1        |
| M3 threaded inserts                | 6        |
| M3x18 BHCS                         | 1        |
| M3x16 BHCS                         | 4        |
| M3x12 BHCS                         | 2        |
| M3x6 BHCS                          | 2        |
| M3x4 BHCS                          | 1        |
| M3 Hammer Head T-nuts              | 2        |