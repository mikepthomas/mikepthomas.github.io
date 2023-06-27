# Single Board Computers and Microcontrollers

June 26, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated June 27, 2023

This page lists all of the single board computers I own and is mainly for me to keep track of what I have and what I am currently using it for.

![Raspberry Pi Hero](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-hero.jpg)

---

## Table of contents

1. [Arduino](#arduino)
1. [Odroid](#odroid)
1. [Raspberry Pi Zero](#raspberry-pi-zero)
1. [Raspberry Pi 1](#raspberry-pi-1)
1. [Raspberry Pi 2](#raspberry-pi-2)
1. [Raspberry Pi 3](#raspberry-pi-3)
1. [Raspberry Pi 4](#raspberry-pi-4)
1. [Raspberry Pi Pico](#raspberry-pi-pico)
1. [Teensy](#teensy)

## Arduino

![Arduino Robot](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/arduino-robot.jpg)

| Item                                                                              | Case            | Flashed with                                  | Notes                                                                                   |
| --------------------------------------------------------------------------------- | --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Arduino Duemilanove](https://docs.arduino.cc/retired/boards/arduino-duemilanove) | Tracked Robot   | Blink Sketch                                  | With [Arduino XBee Shield](https://docs.arduino.cc/retired/shields/arduino-xbee-shield) |
| Arduino Mega 2560 Clone                                                           |                 | [Klipper Firmware](https://www.klipper3d.org) | With [RAMPS 1.6](https://reprap.org/wiki/RAMPS_1.6) + DRV8825 x 5                       |
| Arduino Uno Clone                                                                 |                 | [Klipper Firmware](https://www.klipper3d.org) | With CNC Shield 3.0 + A4988 x 4                                                         |
| Arduino Uno                                                                       |                 | Blink Sketch                                  |                                                                                         |
| Arduino Uno R2                                                                    | Breadboard Case | Blink Sketch                                  |                                                                                         |
| [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3)                       |                 | Blink Sketch                                  | Boxed                                                                                   |
| [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3)                       |                 | Blink Sketch                                  | Boxed                                                                                   |

## Odroid

![Odroid CloudShell 2](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/odroid-cloudshell2.jpg)

| Item                                                        | Case                                                                                            | Storage                             | OS           | Hostname   | Notes                                                                                                                                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Odroid C2](https://wiki.odroid.com/odroid-c2/odroid-c2)    |                                                                                                 | 32GB MicroSD (Integral)             | Ubuntu 20.04 | odroid     | With [Odroid UPS3](https://wiki.odroid.com/accessory/power_supply_battery/odroid-ups3) + [Odroid USB Wifi adapter](https://www.hardkernel.com/shop/wifi-module-5bk/) |
| [Odroid Go](https://wiki.odroid.com/odroid_go/odroid_go)    | [Odroid Go QWERTY](https://wiki.odroid.com/odroid_go/qwerty)                                    |                                     |              |            | Boxed                                                                                                                                                                |
| [Odroid XU4](https://wiki.odroid.com/odroid-xu4/odroid-xu4) | [CloudShell 2](https://wiki.odroid.com/accessory/add-on_boards/xu4_cloudshell2/xu4_cloudshell2) | 32GB MicroSD (Integral) + 32GB eMMC | Ubuntu 22.04 | cloudshell | With 2 x 3TB Hard Drives in RAID 1                                                                                                                                   |

## Raspberry Pi Zero

![Raspberry Pi Zero Cluster](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-zero-cluster.jpg)

| Item                       | Revision | SoC     | RAM   | Case                                                                    | Storage                 | OS                          | hostname | Notes                                          |
| -------------------------- | -------- | ------- | ----- | ----------------------------------------------------------------------- | ----------------------- | --------------------------- | -------- | ---------------------------------------------- |
| Raspberry Pi Zero V1.2     | 900092   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | Raspberry Pi OS ClusterCTRL | p1       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero V1.3     | 900093   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | Raspberry Pi OS ClusterCTRL | p2       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero W V1.1   | 9000c1   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | Raspberry Pi OS ClusterCTRL | p3       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero W V1.1   | 9000c1   | BCM2835 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) |                         | Raspberry Pi OS ClusterCTRL | p4       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | Voron DIN Clip                                                          | 16GB MicroSD (Integral) | Raspberry Pi OS             | rook     | Klipper installed via Kiauh                    |

## Raspberry Pi 1

| Item                       | Revision | SoC     | RAM   | Case                               | Storage                      | OS                       | Hostname | Notes                                                                        |
| -------------------------- | -------- | ------- | ----- | ---------------------------------- | ---------------------------- | ------------------------ | -------- | ---------------------------------------------------------------------------- |
| Raspberry Pi Model A Rev 2 | 0008     | BCM2835 | 256MB |                                    |                              |                          |          | With [Adafruit Prototyping Pi Plate](https://www.adafruit.com/product/801)   |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Adafruit Acrylic Case              |                              |                          |          | With [Adafruit RGB Negative 16x2 LCD](https://www.adafruit.com/product/1110) |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Piface Digital Acrylic Case        |                              |                          |          | With [PiFace Digital](http://www.piface.org.uk/products/piface_digital/)     |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Official Raspberry Pi Case (White) | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | white    | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000e     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `red`            |                          |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000e     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `green`          |                          |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `blue`           |                          |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `black`          |                          |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB |                                    |                              |                          |          | Broken SD Slot                                                               |
| Raspberry Pi Model A+ V1.1 | 0015     | BCM2835 | 256MB | ModMyPi VESA-Pi+ Model A+ Case     |                              |                          |          |                                                                              |
| Raspberry Pi Model B+ V1.2 | 0010     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | 8GB MicroSD (Sandisk Ultra)  | Raspberry Pi OS (Legacy) | orange   | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B+ V1.2 | 0013     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | 8GB MicroSD (Sandisk Ultra)  | Raspberry Pi OS (Legacy) | purple   | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |

## Raspberry Pi 2

![Raspberry Pi 2 Cluster](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-2-cluster.jpg)

| Item                        | Revision | SoC     | RAM | Case         | Storage                      | OS                       | Hostname | Notes                                                             |
| --------------------------- | -------- | ------- | --- | ------------ | ---------------------------- | ------------------------ | -------- | ----------------------------------------------------------------- |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | red      | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | green    | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | blue     | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS (Legacy) | black    | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt) |
| Raspberry Pi 2 Model B V1.2 | a02042   | BCM2837 | 1GB | Flirc        | 8GB MicroSD (Generic)        | PiAware 8.1              | piaware  | Boxed With FlightAware Pro Stick Plus                             |

## Raspberry Pi 3

![Raspberry Pi 3 Cluster](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/raspberry-pi-3-cluster.jpg)

| Item                         | Revision | SoC     | RAM   | Case                            | Storage                      | OS              | Hostname    | Notes                     |
| ---------------------------- | -------- | ------- | ----- | ------------------------------- | ---------------------------- | --------------- | ----------- | ------------------------- |
| Raspberry Pi 3 Model A+ V1.0 | 9020e0   | BCM2837 | 512MB | Official Raspberry Pi 3 A+ Case | 16GB MicroSD (Generic)       | MainsailOS      | am8         | Boxed                     |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                    | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS | node1       | Broken Wifi and Bluetooth |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                    | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS | node2       |                           |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                    | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS | node3       |                           |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                    | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS | node4       |                           |
| Raspberry Pi 3 Model B V1.2  | a22082   | BCM2837 | 1GB   | Cluster Case                    | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS | node5       |                           |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Official Raspberry Pi 3 Case    | 16GB MicroSD (Sandisk Edge)  | Raspberry Pi OS | pi3desktop  |                           |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag NESPi Case+           | 64GB MicroSD (Integral)      | RetroPie        | nespi       |                           |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag SuperPi Case          | 64GB MicroSD (Integral)      | RetroPie        | superpi     |                           |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Waveshare Touch Screen Case     | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS | raspberrypi |                           |

## Raspberry Pi 4

| Item                        | Revision | SoC     | RAM | Case                                                                    | Storage                     | OS                          | Hostname   | Notes                                                                   |
| --------------------------- | -------- | ------- | --- | ----------------------------------------------------------------------- | --------------------------- | --------------------------- | ---------- | ----------------------------------------------------------------------- |
| Raspberry Pi 4 Model B      |          | BCM2711 | 4GB | [Voron 0.2](printer-voron-0.2.md)                                       | 16GB MicroSD (Integral)     | MainsailOS                  | voron0     | Boxed (Unopened)                                                        |
| Raspberry Pi 4 Model B      |          | BCM2711 | 4GB | [Voron 1.8](printer-voron-1.8.md)                                       | 16GB MicroSD (Integral)     | MainsailOS                  | voron1     | Boxed (Unopened)                                                        |
| Raspberry Pi 4 Model B V1.4 | c03114   | BCM2711 | 4GB | Official Raspberry Pi 4 Case                                            | 16GB MicroSD (Sandisk Edge) | Raspberry Pi OS             | pi4desktop | Boxed Desktop Kit                                                       |
| Raspberry Pi 4 Model B V1.5 | c03115   | BCM2711 | 4GB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) | 128GB MicroSD (Integral)    | Raspberry Pi OS ClusterCTRL | cnat       | With [Cluster Hat v2.5](https://thepihut.com/products/cluster-hat-v2-0) |
| Raspberry Pi 400 V1.0       | c03130   | BCM2711 | 4GB |                                                                         | 128GB MicroSD (Integral)    | Ubuntu Desktop 22.04.2 LTS  | pi400      | Boxed                                                                   |

## Raspberry Pi Pico

| Item                                | Case                              | Flashed with                                  | Notes     |
| ----------------------------------- | --------------------------------- | --------------------------------------------- | --------- |
| Bigtreetech SKR Pico                | [Rook 2020](printer-rook-2020.md) | [Klipper Firmware](https://www.klipper3d.org) |           |
| Bigtreetech SKR Pico                | [Voron 0.2](printer-voron-0.2.md) | [Klipper Firmware](https://www.klipper3d.org) |           |
| Raspberry Pi Pico                   |                                   | [MicroPython](https://micropython.org)        |           |
| Raspberry Pi Pico H                 |                                   | [MicroPython](https://micropython.org)        |           |
| Raspberry Pi Pico W                 |                                   | [MicroPython](https://micropython.org)        |           |
| Raspberry Pi Pico WH                |                                   | [MicroPython](https://micropython.org)        |           |
| Raspberry Pi RP2040 Microcontroller |                                   |                                               | Bare Chip |

## Teensy

![Teensy Audio Guestbook](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/single-board-computers/teensy-audio-guestbook.jpg)

| Item       | Case            | Flashed with                                                            | Notes                         |
| ---------- | --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| Teensy 4.0 | Retro Telephone | [Audio Guestbook](https://github.com/playfultechnology/audio-guestbook) | With Audio Board for Teensy 4 |
