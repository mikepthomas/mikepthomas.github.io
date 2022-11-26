# 3D Printer Failures

May 21, 2018 by [Mike Thomas](https://github.com/mikepthomas),
Updated April 1, 2022

3D printing is not all plain sailing... sometimes things go wrong, the good thing about building your printer from scratch, is that you also know how to repair it.

![](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/printer-failures-hero.jpg)

---

## Table of contents

1. [First Print](#first-print)
2. [Cable Chain](#cable-chain)
3. [Melted Part Fan Duct](#melted-part-fan-duct)
4. [Broken Extruder Cooling Fan](#broken-extruder-cooling-fan)
5. [Cable Chain Strikes Back](#cable-chain-strikes-back)
6. [Heater Wire Wear](#heater-wire-wear)
7. [Return of the Cable Chain](#return-of-the-cable-chain)
8. [Worn Belt](#worn-belt)
9. [Broken Probe Wire](#broken-probe-wire)
10. [Bearing Failure](#bearing-failure)

## First Print

![My first ever print](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/first-print.jpg)

My first ever print, my first ever failure... Seems like it's the most common failure in 3D printing, make sure to level the bed and then level it again. This probably failed due to the nozzle being too far off the bed on the first layer as the filament did not "squish" to the bed. Once the bed had been relevelled, [the print came out great](printer.md#finished).

## Cable Chain

![Cables not fitting in cable chain](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/cable-chain.jpg)

This was more of a failure of printing the wrong thing, I printed the fully enclosed cable chain links, and only when coming to fit them, did I find that the cables did not fit through the chain. I had to re-assemble everything to get back printing some new links that use cable ties to hold the cables in the chain.

## Melted Part Fan Duct

![Hot nozzle through fan duct](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/fan-duct-melted.jpg)

This one came down to user error, I had a jam in the hotend and had to disassemble the extruder to clear it. Once the jam was clear, I heated the nozzle to insert some filament. After starting a new print I noticed that I had forgotten to re-attach the part cooling fan duct. Being lazy, I did not want to cancel and restart the print so I tried to re-attach the duct whilst the printer was homing the Z axis, however, I was not quick enough and the hot nozzle squished the duct into the bed. Lesson learned as I then had spend more time to reprint a new duct.

## Broken Extruder Cooling Fan

![Allen key in cooling fan](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/cooling-fan-broken.jpg)

Another occurence of user error, I was attempting to print flexible TPU filament for the first time, however, I think I was trying to print it too fast and too cool as the filament kept wrapping around the gears in the extruder. The gears on the Anet A8 are hidden behind the hotend cooling fan and heatsink, held on by two socket head screws. To remove them you need to use an allen key, this is best done whilst the printer is off as my allen key slipped and went straight into the cooling fan sheering off some of the blades.

![Replacement Noctua fan](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/cooling-fan-noctua.jpg)

There was an upside to this as I replaced the (quite noisy) stock fan with a [small noctua fan](https://www.amazon.co.uk/gp/product/B009NQLT0M) which made the printer a fair bit quieter whilst switched on. To help printing TPU without it wrapping around the extruder gears I found using [this adapter](printer-printed-upgrades.md#flex-filament-and-easy-filament-change-adapter-for-anet-a8) really useful.

## Cable Chain Strikes Back

![Weakened cable chain from movement](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/cable-chain-weakened.jpg)

The X axis cable chain connection to the extruder carriage must have been weakened over time or whilst re-routing the wires for the new fan. The connection kept popping off when the X axis moved. I tried to superglue it back into place, however that did not last very long and eventually wore out. In the end I just cable tied it back into place and called it a day.

## Heater Wire Wear

![Heater wire worn through](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/heater-wire-wear.jpg)

The original hotend heater cartridge lasted about two and a half years, all the bending in the cable chain eventually wore through the flex of the cable and needed to be replaced. I chose to replace it with a complete Aibecy hotend including the Aluminium heater block, thermistor and heat break.

## Return of the Cable Chain

![Cable chain melted by new heater](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/cable-chain-melted.jpg)

The new Aibecy hotend lasted about 6 months. It arrived with the wires all folded up and cable tied together rather than being coiled up. I believe this weakened the cable which eventually caused the heater cartridge wire to get really hot and melted the cable chain (you can see a spot of grey filament melted to the red wire in the top of the image). I replaced the heater cartridge with an [Afunta one which showed the cables coiled up in the images](https://www.amazon.co.uk/gp/product/B07J43HFLK) so that I wouldn't get this issue again, looking back I probably didn't need to order 6 as I am still using the first one from this kit to the present day.
I replaced the melted [cable chain with a different design](printer-printed-upgrades.md#anet-a8-x-axis-cable-chain-with-z-end-stop) as the cable chain reduced my print volume when [upgrading display](printer-hardware-upgrades.md#tft24-mount) for the new control board.

## Worn Belt

![X Axis belt worn through](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/worn-belt.jpg)

When adding [belt tentioners to both the X and Y axes](printer-printed-upgrades.md#motion-upgrades) I realised that I cut the stock belts a little too short, so I had to [buy some new belt](https://www.amazon.co.uk/gp/product/B0719S15FN) It was rather cheap (£5.99 for 2 meters including two 20 tooth GT2 pulleys). I'm surprised it lasted about 2 and a half years and the Y axis belt is still going strong. I have replaced the X axis belt with a slightly higher quality cloth and rubber fiberglass reinforced one and have enough new belt to replace the Y axis belt, if/when it breaks.

## Broken Probe Wire

![Broken Probe Wire](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/broken-probe-wire.jpg)

Due to the repetitive sideways movement of the X axis one of the wires of the 3D Touch probe has broken loose (the orange wire in the center of the picture). Luckily there are two ground wires in the probe and the cable that has come loose is one of them, therefore the probe is stll functional. I have ordered a couple of replacements as the wire is very thin and I have found it very dificult to strip with my wire strippers and do not want to damage it further, putting the machine out of action until the replacements arrive.

## Bearing Failure

![Bearings Failed in cheap idlers](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/bearing-failure.jpg)

The X axis movements started to make a grinding noise, the cheap toothed idlers I purchased have ground their bearings to dust (I also checked the Y axis bearing, it however wasn't making any noise but has also ground the bearings away) I have put back the stock Anet A8 smooth bearings for now and ordered some higher quality toothed ones.

## Fan Duct Deformed

![Fan Duct Deformed printing ABS](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-failures/fan-duct-deformed.jpg)

Due to the close proximity to the hot end and the higher temperatures required to print ABS my replacement PETG part cooling fan has stated to deform. I have reprinted it in ABS to withstand the higher temperatures and will also reprint some other parts in ABS that are close to the hot end before they start to fail too.