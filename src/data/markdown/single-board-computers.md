# Single Board Computers and Microcontrollers

June 26, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated August 13, 2023

This page lists all of the single board computers I own and is mainly for me to keep track of what I have and what I am currently using it for.

![Raspberry Pi Hero](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-hero.jpg)

---

## Table of contents

1. [Arduino](#arduino)
2. [BBC](#bbc)
3. [BigTreeTech](#bigtreetech)
4. [Hardkernel](#hardkernel)
5. [Next Thing Co](#next-thing-co)
6. [Raspberry Pi Zero](#raspberry-pi-zero)
7. [Raspberry Pi 1](#raspberry-pi-1)
8. [Raspberry Pi 2](#raspberry-pi-2)
9. [Raspberry Pi 3](#raspberry-pi-3)
10. [Raspberry Pi 4](#raspberry-pi-4)
11. [Raspberry Pi Pico](#raspberry-pi-pico)
12. [Teensy](#teensy)
13. [Wemos](#wemos)

## Arduino

![Arduino Robot](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/arduino-robot.jpg)

| Item                                                                              | Case            | Flashed with                                  | Notes                                                                                   |
| --------------------------------------------------------------------------------- | --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Arduino Duemilanove](https://docs.arduino.cc/retired/boards/arduino-duemilanove) | Tracked Robot   | Blink Sketch                                  | With [Arduino XBee Shield](https://docs.arduino.cc/retired/shields/arduino-xbee-shield) |
| Arduino Mega 2560 Clone                                                           |                 | [Klipper Firmware](https://www.klipper3d.org) | With [RAMPS 1.6](https://reprap.org/wiki/RAMPS_1.6) + DRV8825 x 5                       |
| Arduino Uno Clone                                                                 | Breadboard Case | Blink Sketch                                  |                                                                                         |
| Arduino Uno                                                                       |                 | Blink Sketch                                  |                                                                                         |
| Arduino Uno R2                                                                    |                 | Blink Sketch                                  |                                                                                         |
| [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3)                       |                 | Blink Sketch                                  | Boxed                                                                                   |
| [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3)                       |                 | Blink Sketch                                  | Boxed                                                                                   |

## BBC

![BBC micro:bit](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/bbc-micro-bit.jpg)

The micro:bit is an inexpensive board designed to teach children how to code.

| Item                                                    | Case                                                                                                                                         | Flashed with | Notes |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----- |
| [BBC micro:bit V1](https://archive.microbit.org/guide/) | [Kitronic Inventor's Kit](https://kitronik.co.uk/collections/accessories-for-the-bbc-micro-bit/products/inventors-kit-for-the-bbc-micro-bit) |              |       |

## BigTreeTech

![BigTreeTech Pi](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/bigtreetech-pi.jpg)

BigTreeTech make mainboards to control 3D printers. :duck:

| Item                                                                                                                                                                                                      | Case                              | Flashed with                                  | Notes                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| [BigTreeTech Pi V1.2](https://biqu.equipment/products/bigtreetech-btt-pi-v1-2)                                                                                                                            |                                   |                                               | With [U2C CAN Adapter Module](https://docs.meteyou.wtf/btt-pi-u2c/) |
| [BigTreeTech SKR V1.4](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board-tmc2209-tmc2208-eeprom-v1-0-exp-mot-v1-0-3d-printer-parts-for-ender-3) | [Anet A8](printer.md)             | [Marlin Firmware](https://marlinfw.org/)      | 3D printer Mainboard based on LPC1768                               |
| [BigTreeTech SKR V1.4 Turbo](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board)                                                                 | [Voron 1.8](printer-voron-1.8.md) | [Klipper Firmware](https://www.klipper3d.org) | 3D printer Mainboard based on LPC1769                               |
| [BigTreeTech SKR Pico](https://biqu.equipment/collections/control-board/products/btt-skr-pico-v1-0)                                                                                                       | [Voron 0.2](printer-voron-0.2.md) | [Klipper Firmware](https://www.klipper3d.org) | 3D printer Mainboard based on RP2040                                |
| [BigTreeTech SKR Pico](https://biqu.equipment/collections/control-board/products/btt-skr-pico-v1-0)                                                                                                       | [Rook 2020](printer-rook.md)      | [Klipper Firmware](https://www.klipper3d.org) | 3D printer Mainboard based on RP2040                                |

## Hardkernel

![Odroid CloudShell 2](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/odroid-cloudshell2.jpg)

I purchased the Odroid XU4 and CloudShell enclosure to use as a Network Attached Storage (NAS) server to replace an old outdated and failing 1TB Western Digital MyBook World edition NAS.

| Item                                                        | Case                                                                                            | Storage   | OS           | Hostname   | Notes                                                                                                                                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------- | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Odroid C2](https://wiki.odroid.com/odroid-c2/odroid-c2)    |                                                                                                 |           | Ubuntu 20.04 | odroid     | With [Odroid UPS3](https://wiki.odroid.com/accessory/power_supply_battery/odroid-ups3) + [Odroid USB Wifi adapter](https://www.hardkernel.com/shop/wifi-module-5bk/) |
| [Odroid Go](https://wiki.odroid.com/odroid_go/odroid_go)    | [Odroid Go QWERTY](https://wiki.odroid.com/odroid_go/qwerty)                                    |           |              |            | Boxed                                                                                                                                                                |
| [Odroid XU4](https://wiki.odroid.com/odroid-xu4/odroid-xu4) | [CloudShell 2](https://wiki.odroid.com/accessory/add-on_boards/xu4_cloudshell2/xu4_cloudshell2) | 32GB eMMC | Ubuntu 22.04 | cloudshell | With 2 x 3TB Hard Drives in RAID 1                                                                                                                                   |

## Next Thing Co

![Chip](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/chip.jpg)

Dubbed as "The World's First Nine Dollar Computer" I purchased a CHIP in about November 2016 as a toy to play about with however I hardly used it and eventually the company Next Thing Co. entered insolvency it quickly became unsupported.

However mine still works albeit on a very old operating system version.

| Item                                               | Case          | Flashed with                                              | Notes                |
| -------------------------------------------------- | ------------- | --------------------------------------------------------- | -------------------- |
| [CHIP](https://docs.getchip.cc/chip#chip-hardware) | C.H.I.P. Case | [The CHIP Operating System](https://docs.getchip.cc/chip) | With Composite Cable |

## Raspberry Pi Zero

![Raspberry Pi Zero Cluster](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-zero-cluster.jpg)

My Raspberry Pi Zero cluster was assembled using a 8086 Cluster Hat that is quite cool due to it using USB gadget mode of the Raspberry Pi Zero to boot up the Raspberry Pis over USB therefore they do not require their own MicroSD cards and can share the storage of the controller Pi.

I plan on replacing all the Raspberry Pi Zeros in the cluster with Raspberry Pi Zero 2Ws, which I ordered on Oct 15, 2022... but due to the current Raspberry Pi shortage they have yet to arrive.

| Item                       | Revision | SoC     | RAM   | Case                                                                    | Storage                 | OS                                                                        | hostname | Notes                                          |
| -------------------------- | -------- | ------- | ----- | ----------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------- | -------- | ---------------------------------------------- |
| Raspberry Pi Zero V1.2     | 900092   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | [Raspberry Pi OS ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p1       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero V1.3     | 900093   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | [Raspberry Pi OS ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p2       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero W V1.1   | 9000c1   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | [Raspberry Pi OS ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p3       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero W V1.1   | 9000c1   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | [Raspberry Pi OS ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p4       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | Voron DIN Clip                                                          | 32GB MicroSD (Integral) | Raspberry Pi OS                                                           | rook     | Klipper installed via Kiauh                    |

## Raspberry Pi 1

![My Original Raspberry Pi 1](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/original-raspberry-pi-1.jpg)

| Item                       | Revision | SoC     | RAM   | Case                               | Storage                     | OS                       | Hostname    | Notes                                                                        |
| -------------------------- | -------- | ------- | ----- | ---------------------------------- | --------------------------- | ------------------------ | ----------- | ---------------------------------------------------------------------------- |
| Raspberry Pi Model A Rev 2 | 0008     | BCM2835 | 256MB |                                    |                             |                          |             | With [Adafruit Prototyping Pi Plate](https://www.adafruit.com/product/801)   |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Adafruit Acrylic Case              | 8GB SD Card (TDK)           | Raspberry Pi OS (Legacy) | raspberrypi | With [Adafruit RGB Negative 16x2 LCD](https://www.adafruit.com/product/1110) |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Piface Digital Acrylic Case        |                             |                          |             | With [PiFace Digital](http://www.piface.org.uk/products/piface_digital/)     |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Official Raspberry Pi Case (White) | Shared with `node1`         |                          |             | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000e     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node2`         |                          |             | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000e     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node3`         |                          |             | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node4`         |                          |             | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node5`         |                          |             | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB |                                    |                             |                          |             | Broken SD Slot                                                               |
| Raspberry Pi Model A+ V1.1 | 0015     | BCM2835 | 256MB | ModMyPi VESA-Pi+ Model A+ Case     |                             |                          |             | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B+ V1.2 | 0010     | BCM2835 | 512MB | CanaKit Raspberry Pi Case (Clear)  | 8GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | orange      | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B+ V1.2 | 0013     | BCM2835 | 512MB | CanaKit Raspberry Pi Case (Clear)  | 8GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | purple      | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |

## Raspberry Pi 2

![Raspberry Pi 2 Cluster](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-2-cluster.jpg)

This was my original Raspberry Pi cluster, It was originally 4 layers however I managed to find a case that fit perfectly to add an additional layer. If you look hard enough, you will see that the fan of the bottom layer is in a slightly different place and the standoffs are slightly shorter.

The cluster was set up to learn [Ansible](https://www.ansible.com) as the Raspberry Pi 2s were a little too slow to run Docker or Kubernetes.

| Item                        | Revision | SoC     | RAM | Case                 | Storage                      | OS                                                   | Hostname | Notes                                 |
| --------------------------- | -------- | ------- | --- | -------------------- | ---------------------------- | ---------------------------------------------------- | -------- | ------------------------------------- |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy)                             | node1    |                                       |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy)                             | node2    |                                       |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy)                             | node3    |                                       |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy)                             | node4    |                                       |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy)                             | node5    |                                       |
| Raspberry Pi 2 Model B V1.2 | a02042   | BCM2837 | 1GB | Flirc Aluminium Case | 8GB MicroSD (Generic)        | [PiAware 8.1](https://flightaware.com/adsb/piaware/) | piaware  | Boxed With FlightAware Pro Stick Plus |

## Raspberry Pi 3

![Raspberry Pi 3 Cluster](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-3-cluster.jpg)

I got this case from eBay, it was not in the best shape, very dusty and scratched, it cost me £68.55 but it did contain 3 Raspberry Pi 3s (including one with broken Wifi and Bluetooth) and a few Micro USB Chargers Ethernet cables. The case also came with a switch that fits at the bottom perfectly.

I cleaned it up with some isopropyl alcohol and re-assembled it with some new screws as some of them were quite rusted.

I assembled this cluster to learn all about Containerization using [Docker Swarm mode](https://docs.docker.com/engine/swarm) and eventually, Kubernetes using [MicroK8s](https://microk8s.io/), however the Raspberry Pi 3s are a little too slow to fully run a K8s cluster with more than a handful of containers.

| Item                         | Revision | SoC     | RAM   | Case                              | Storage                      | OS                                         | Hostname   | Notes                                                             |
| ---------------------------- | -------- | ------- | ----- | --------------------------------- | ---------------------------- | ------------------------------------------ | ---------- | ----------------------------------------------------------------- |
| Raspberry Pi 3 Model A+ V1.0 | 9020e0   | BCM2837 | 512MB | Official Raspberry Pi 3 A+ Case   | 32GB MicroSD (Integral)      | [MainsailOS](https://docs-os.mainsail.xyz) | am8        | Boxed                                                             |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | CanaKit Raspberry Pi Case (Black) | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS                            | white      | Broken Wifi and Bluetooth with camera                             |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS                            | red        | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS                            | green      | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS                            | blue       | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 3 Model B V1.2  | a22082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS                            | black      | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Waveshare Touch Screen Case       | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS                            | controller |                                                                   |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag MegaPi Case             | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)        | megapi     |                                                                   |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag NESPi Case+             | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)        | nespi      |                                                                   |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag SuperPi Case            | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)        | superpi    |                                                                   |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | [Voron 0.2](printer-voron-0.2.md) | 64GB MicroSD (Integral)      | [MainsailOS](https://docs-os.mainsail.xyz) | voron0     |                                                                   |

## Raspberry Pi 4

![Raspberry Pi 400](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/pi400.jpg)

| Item                        | Revision | SoC     | RAM | Case                                                                    | Storage                     | OS                                                                        | Hostname | Notes                                                                         |
| --------------------------- | -------- | ------- | --- | ----------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| Raspberry Pi 4 Model B      |          | BCM2711 | 4GB | Official Raspberry Pi 4 Case (Red)                                      | 16GB MicroSD (Sandisk Edge) | Raspberry Pi OS                                                           |          | Boxed Desktop Kit (Unopened) with official Case Fan                           |
| Raspberry Pi 4 Model B      |          | BCM2711 | 4GB | Official Raspberry Pi 4 Case (Red)                                      | 16GB MicroSD (Sandisk Edge) | Raspberry Pi OS                                                           |          | Boxed Desktop Kit (Unopened) with official Case Fan                           |
| Raspberry Pi 4 Model B V1.4 | c03114   | BCM2711 | 4GB | [Voron 1.8](printer-voron-1.8.md)                                       | 64GB MicroSD (Integral)     | [MainsailOS](https://docs-os.mainsail.xyz)                                | voron1   | Boxed                                                                         |
| Raspberry Pi 4 Model B V1.5 | c03115   | BCM2711 | 4GB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) | 128GB MicroSD (Integral)    | [Raspberry Pi OS ClusterCTRL](https://github.com/burtyb/clusterhat-image) | cnat     | Boxed with [Cluster Hat v2.5](https://thepihut.com/products/cluster-hat-v2-0) |
| Raspberry Pi 400 V1.0       | c03130   | BCM2711 | 4GB |                                                                         | 128GB MicroSD (Integral)    | Ubuntu Desktop 22.04.2 LTS                                                | pi400    | Boxed                                                                         |

## Raspberry Pi Pico

![Maker Pi Pico](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/maker-pi-pico.jpg)

| Item                                | Case                                                                                                        | Flashed with                                                     | Notes                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------- |
| Raspberry Pi Pico                   | [Macro Pi](https://www.thingiverse.com/thing:5817044)                                                       | [PiPicoMacroKeys](https://github.com/novaspirit/PiPicoMacroKeys) | In original packaging           |
| Raspberry Pi Pico H                 | [Maker Pi Pico](https://www.cytron.io/p-maker-pi-pico-simplifying-raspberry-pi-pico-for-beginners-and-kits) | [MicroPython](https://micropython.org)                           |                                 |
| Raspberry Pi Pico W                 |                                                                                                             |                                                                  | In original packaging           |
| Raspberry Pi Pico WH                |                                                                                                             |                                                                  | Boxed                           |
| Raspberry Pi RP2040 Microcontroller |                                                                                                             |                                                                  | Bare Chip in original packaging |

![Macro Pi](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/macro-pi.jpg)

## Teensy

![Teensy Audio Guestbook](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/teensy-audio-guestbook.jpg)

| Item       | Case            | Flashed with                                                            | Notes                         |
| ---------- | --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| Teensy 4.0 | Retro Telephone | [Audio Guestbook](https://github.com/playfultechnology/audio-guestbook) | With Audio Board for Teensy 4 |

## Wemos

| Item              | Case                                                        | Flashed with                   | Notes    |
| ----------------- | ----------------------------------------------------------- | ------------------------------ | -------- |
| Wemos D1 Mini Pro | [Solar Wifi Weather Station](solar-wifi-weather-station.md) | [ESPHome](https://esphome.io/) |          |
| Wemos D1 Mini Pro | [Solar Wifi Weather Station](solar-wifi-weather-station.md) | [ESPHome](https://esphome.io/) | On Order |
| Wemos D1 Mini Pro | [Solar Wifi Weather Station](solar-wifi-weather-station.md) | [ESPHome](https://esphome.io/) | On Order |
