# Single Board Computers and Microcontrollers

June 26, 2023 by [Mike Thomas](https://github.com/mikepthomas)

This page lists all of the single board computers I own and is mainly for me to keep track of what I have and what I am currently using it for.

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

| Item                    | Case            | Flashed with     | Notes                           |
| ----------------------- | --------------- | ---------------- | ------------------------------- |
| Arduino Duemilanove     | Tracked Robot   | Blink Sketch     | With XBee Shield                |
| Arduino Mega 2560 Clone |                 | Klipper Firmware | With RAMPS 1.4 + DRV8825 x 5    |
| Arduino Uno Clone       |                 | Klipper Firmware | With CNC Shield 3.0 + A4988 x 4 |
| Arduino Uno             |                 | Blink Sketch     |                                 |
| Arduino Uno R2          | Breadboard Case | Blink Sketch     |                                 |
| Arduino Uno R3          |                 | Blink Sketch     | Boxed                           |
| Arduino Uno R3          |                 | Blink Sketch     | Boxed                           |

## Odroid

| Item       | Case         | Storage   | OS           | Hostname | Notes                                      |
| ---------- | ------------ | --------- | ------------ | -------- | ------------------------------------------ |
| Odroid C2  |              |           |              |          | With Odroid UPS3 + Odroid USB Wifi adapter |
| Odroid XU4 | CloudShell 2 | 32GB eMMC | Ubuntu 22.04 | odroid   | With 2 x 3TB Hard Drives in RAID 1         |

## Raspberry Pi Zero

| Item                     | Case                  | Storage                 | OS                          | hostname | Notes                                          |
| ------------------------ | --------------------- | ----------------------- | --------------------------- | -------- | ---------------------------------------------- |
| Raspberry Pi Zero V1.2   | Cluster HAT Case v3.0 |                         | Raspberry Pi OS ClusterCTRL | p1       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero V1.3   | Cluster HAT Case v3.0 |                         | Raspberry Pi OS ClusterCTRL | p2       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero W V1.1 | Cluster HAT Case v3.0 |                         | Raspberry Pi OS ClusterCTRL | p3       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero W V1.1 | Cluster HAT Case v3.0 |                         | Raspberry Pi OS ClusterCTRL | p4       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero 2      | Voron DIN Clip        | 16GB MicroSD (Integral) | Raspberry Pi OS             | voron    | Klipper installed via Kiauh                    |

## Raspberry Pi 1

| Item                       | Case                               | Storage               | OS                       | Hostname | Notes                    |
| -------------------------- | ---------------------------------- | --------------------- | ------------------------ | -------- | ------------------------ |
| Raspberry Pi Model A       |                                    |                       |                          |          | With Adafruit Breadboard |
| Raspberry Pi Model B 256MB | Adafruit Acrylic Case              |                       |                          |          | With Adafruit LCD        |
| Raspberry Pi Model B 256MB | Piface Digital Acrylic Case        |                       |                          |          | With Piface Digital      |
| Raspberry Pi Model B 512MB |                                    |                       |                          |          | Broken SD Slot           |
| Raspberry Pi Model B 512MB | Official Raspberry Pi Case (Clear) |                       |                          |          | With Pimoroni PiGlow     |
| Raspberry Pi Model B 512MB | Official Raspberry Pi Case (Clear) |                       |                          |          | With Pimoroni PiGlow     |
| Raspberry Pi Model B 512MB | Official Raspberry Pi Case (Clear) |                       |                          |          | With Pimoroni PiGlow     |
| Raspberry Pi Model B 512MB | Official Raspberry Pi Case (Clear) |                       |                          |          | With Pimoroni PiGlow     |
| Raspberry Pi Model B 512MB | Official Raspberry Pi Case (White) |                       |                          |          | With Pimoroni PiGlow     |
| Raspberry Pi Model A+      | Official Raspberry Pi 3A+ Case     |                       |                          |          |                          |
| Raspberry Pi Model B+ V1.2 | Official Raspberry Pi Case (Clear) | 8GB MicroSD (Sandisk) | Raspberry Pi OS (Legacy) | Orange   | With Pimoroni PiGlow     |
| Raspberry Pi Model B+ V1.2 | Official Raspberry Pi Case (Clear) | 8GB MicroSD (Sandisk) | Raspberry Pi OS (Legacy) | Purple   | With Pimoroni PiGlow     |

## Raspberry Pi 2

| Item                        | Case         | Storage                | OS                       | Hostname | Notes |
| --------------------------- | ------------ | ---------------------- | ------------------------ | -------- | ----- |
| Raspberry Pi 2 Model B V1.1 | Cluster Case | 16GB MicroSD (Sandisk) | Raspberry Pi OS (Legacy) | red      |       |
| Raspberry Pi 2 Model B V1.1 | Cluster Case | 16GB MicroSD (Sandisk) | Raspberry Pi OS (Legacy) | green    |       |
| Raspberry Pi 2 Model B V1.1 | Cluster Case | 16GB MicroSD (Sandisk) | Raspberry Pi OS (Legacy) | blue     |       |
| Raspberry Pi 2 Model B V1.1 | Cluster Case | 16GB MicroSD (Sandisk) | Raspberry Pi OS (Legacy) | black    |       |
| Raspberry Pi 2 Model B V1.2 | Flirc        | Generic 8GB MicroSD    | PiAware 8.1              | piaware  |       |

## Raspberry Pi 3

| Item                        | Case                           | Storage                | OS              | Hostname    | Notes                     |
| --------------------------- | ------------------------------ | ---------------------- | --------------- | ----------- | ------------------------- |
| Raspberry Pi 3 Model A+     | ModMyPi VESA-Pi+ Model A+ Case |                        |                 |             | Boxed                     |
| Raspberry Pi 3 Model B V1.2 | Cluster Case                   | 32GB MicroSD (Sandisk) | Raspberry Pi OS | node1       | Broken Wifi and Bluetooth |
| Raspberry Pi 3 Model B V1.2 | Cluster Case                   | 32GB MicroSD (Sandisk) | Raspberry Pi OS | node2       |                           |
| Raspberry Pi 3 Model B V1.2 | Cluster Case                   | 32GB MicroSD (Sandisk) | Raspberry Pi OS | node3       |                           |
| Raspberry Pi 3 Model B V1.2 | Cluster Case                   | 32GB MicroSD (Sandisk) | Raspberry Pi OS | node4       |                           |
| Raspberry Pi 3 Model B V1.2 | Cluster Case                   | 32GB MicroSD (Sandisk) | Raspberry Pi OS | node5       |                           |
| Raspberry Pi 3 Model B+     | Official Raspberry Pi 3 Case   |                        |                 |             |                           |
| Raspberry Pi 3 Model B+     | Retroflag NESPi Case+          |                        |                 |             |                           |
| Raspberry Pi 3 Model B+     | Retroflag SuperPi Case         |                        |                 |             |                           |
| Raspberry Pi 3 Model B+     | Waveshare Touch Screen Case    | 64GB MicroSD (Sandisk) | Raspberry Pi OS | raspberrypi |                           |

## Raspberry Pi 4

| Item                       | Case                         | Storage                  | OS                          | Hostname | Notes |
| -------------------------- | ---------------------------- | ------------------------ | --------------------------- | -------- | ----- |
| Raspberry Pi 4 Model B 4GB |                              |                          |                             |          | Boxed |
| Raspberry Pi 4 Model B 4GB |                              |                          |                             |          | Boxed |
| Raspberry Pi 4 Model B 4GB | Official Raspberry Pi 4 Case |                          |                             |          | Boxed |
| Raspberry Pi 4 Model B 4GB | Cluster HAT Case v3.0        | 128GB MicroSD (Integral) | Raspberry Pi OS ClusterCTRL | cnat     |       |
| Raspberry Pi 400           |                              | 128GB MicroSD (Integral) | Ubuntu Desktop 22.04.2 LTS  | pi400    |       |

## Raspberry Pi Pico

| Item                                | Case      | Flashed with     | Notes     |
| ----------------------------------- | --------- | ---------------- | --------- |
| Bigtreetech SKR Pico                | Rook 2020 | Klipper Firmware |           |
| Bigtreetech SKR Pico                | Voron 0.2 | Klipper Firmware |           |
| Raspberry Pi Pico                   |           | MicroPython      |           |
| Raspberry Pi Pico H                 |           | MicroPython      |           |
| Raspberry Pi Pico W                 |           | MicroPython      |           |
| Raspberry Pi Pico WH                |           | MicroPython      |           |
| Raspberry Pi RP2040 Microcontroller |           |                  | Bare Chip |

## Teensy

| Item       | Case            | Flashed with    | Notes                         |
| ---------- | --------------- | --------------- | ----------------------------- |
| Teensy 4.0 | Retro Telephone | Audio Guestbook | With Audio Board for Teensy 4 |
