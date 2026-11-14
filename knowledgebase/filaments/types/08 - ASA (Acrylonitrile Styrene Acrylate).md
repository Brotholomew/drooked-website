---
title: "08 - ASA (Acrylonitrile Styrene Acrylate)"
tags:
  - 3d-printing
  - filaments
  - asa
  - styrenic
  - outdoor
  - uv-resistance
  - engineering-plastics
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| --- | --- | --- | --- | --- |
| 250–270 °C for most grades. Some easy-print blends are rated 230–260 °C, so follow the spool. | 45–50 °C with the Top Cover alone; 50–55 °C with a Panda Breath. A 55–60 °C chamber is at the heater's ceiling and requires motherboard cooling and community firmware. | Heat deflection temperature (HDT) is 96–102 °C at 0.45 MPa and 86–94 °C at 1.8 MPa. Practical continuous service is about 75–90 °C for low-load parts. The glass transition temperature is 102–108 °C. | Outdoor brackets, automotive exterior trim, marine and recreational vehicle hardware, and weatherproof electronics enclosures. | Dry at 70–80 °C for 4–6 hours. Use a hardened nozzle for carbon-fibre or glass-fibre reinforced ASA (ASA-CF or ASA-GF). Printing emits styrene, acrylonitrile and ultrafine particles, so use high-efficiency particulate air (HEPA) plus carbon filtration and ventilate the room. |

> [!abstract] Outdoor styrenic engineering plastic
> ASA is an amorphous terpolymer of acrylonitrile, styrene and an acrylic ester elastomer. It behaves like acrylonitrile butadiene styrene (ABS) in most of the ways that matter for printing, but its rubber phase is saturated, so it resists ultraviolet (UV) light much better than ABS. On the Snapmaker U1 it is officially supported when the Top Cover is fitted. It is not immune to weathering, and it is not a low-emission material. Treat ASA as the outdoor engineering plastic of choice when a part needs ABS-like toughness and heat resistance, and plan for filtration and ventilation.

## 1. Chemistry, properties and trade-offs

ASA was developed in the 1970s by BASF and sold under the Luran S name. It was created to fix the main weakness of ABS: outdoor weathering. In ABS, the impact modifier is polybutadiene, a rubber with carbon-carbon double bonds along its backbone. Sunlight, oxygen and heat attack those double bonds, and the rubber phase cross-links and oxidises. The visible result is yellowing, chalking and a gradual loss of impact strength. The part becomes brittle even though it may still look intact.

ASA replaces polybutadiene with a saturated acrylic ester elastomer, typically polybutyl acrylate. That rubber has no carbon-carbon double bonds in its main chain, so the main photo-oxidation pathway that limits ABS is removed. ASA keeps acrylonitrile for chemical resistance and styrene for rigidity and processability. The result is a material with ABS-like strength and heat resistance, much better colour retention outdoors, and lower styrene emission during printing.

None of this makes ASA permanent. The styrene-acrylonitrile matrix, the pigments and the stabiliser package still age. In a one-year natural weathering study in Bursa, Turkey, ABS, ASA and polymethyl methacrylate (PMMA) samples were exposed outdoors; both ABS and ASA lost tensile strain, which means they embrittled, while PMMA was the most stable of the three polymers. The study also found little change in tensile stress, so a weathered ASA part can still feel strong in a simple pull test while having lost much of its ductility. ASA yellows much more slowly than ABS, but it is not "UV-proof", and white ASA is not guaranteed to stay white forever.

ASA also emits less styrene than ABS during printing. In a laboratory comparison of four common filaments, the styrene emission rate from ASA was less than a quarter of the rate from ABS. That is a real improvement, but it is not a reason to print ASA without filtration. The same study and later chamber studies show that ASA remains a significant source of volatile organic compounds, and all filament extrusion produces ultrafine particles.

### Typical properties of unfilled ASA

| Property | Typical value | What it means in practice |
| --- | --- | --- |
| Glass transition temperature | 102–108 °C | The polymer softens gradually over this range. It has no sharp melting point because it is amorphous. |
| HDT at 0.45 MPa | 96–102 °C | This is a deflection test under a light load, not a continuous service rating. |
| HDT at 1.8 MPa | 86–94 °C | A heavily loaded part deflects at a lower temperature than a lightly loaded one. |
| Tensile strength | 40–48 MPa in XY, 28–36 MPa in Z | Layer adhesion is lower than in-plane strength, as with ABS. |
| Tensile modulus | 1.9–2.2 GPa | The material is stiff enough for brackets and enclosures but not as stiff as filled composites. |
| Elongation at break | 15–35% | Ductility depends heavily on grade, print temperature and chamber conditions. |
| Charpy notched impact | 12–24 kJ/m² | Impact toughness is grade-dependent and falls after weathering. |
| Density | 1.07 g/cm³ | ASA is slightly lighter than polylactic acid (PLA) or polyethylene terephthalate glycol-modified (PETG) for the same volume. |
| Moisture uptake | Moderate, similar to ABS | Drying is still required, but ASA is not in the nylon category. |

The practical service temperature is lower than the HDT might suggest. A part that carries a load at 90 °C can creep, and a part that is merely exposed to 90 °C air without load will survive longer. For structural parts, keep continuous use below about 75–90 °C depending on the load and the acceptable deformation. The glass transition temperature is not a service limit either; it is the point where the amorphous phase becomes mobile.

### Advantages

- Weather resistance is the main reason to choose ASA over ABS. It holds colour and gloss far longer in sunlight, and it tolerates rain, salt spray and repeated temperature cycling.
- The surface is usually satin or matte, which hides layer lines better than glossy ABS and matches textured automotive trim well.
- Styrene emission is lower than with ABS, although filtration and ventilation are still required.
- ASA can be solvent-welded and vapour-smoothed in acetone, but it dissolves more slowly than ABS and the finish is usually less glossy.
- It sands, drills and machines cleanly, and it accepts automotive primers and clear coats.
- It is dimensionally stable enough for large outdoor enclosures when the chamber is managed.

### Limitations

- Large parts still warp and split. ASA needs an enclosure and a warm chamber, just as ABS does.
- It is not immune to UV. Over years, colour shift and embrittlement are possible, especially in thin sections and light colours.
- It emits styrene, acrylonitrile and other volatile products, plus ultrafine particles. This is a health issue, not just an odour issue.
- Acetone smoothing is slower than with ABS and does not make a part waterproof in any pressure-tight sense.
- The bond between ASA and thermoplastic polyurethane (TPU) is poor. A co-printed TPU gasket must be held in a mechanical groove, not relied on as a chemical seal.
- ASA-CF and ASA-GF are abrasive and require a hardened nozzle. They also reduce flow and increase nozzle wear.

### What ASA is good for

- ASA is a good choice for automotive exterior parts such as mirror caps, grille trim, badge holders, mudguard brackets and wheel-arch trim that are exposed to sunlight but not to engine-bay heat.
- It also suits marine and recreational vehicle hardware such as boat handles, cleat backing plates, vent covers, hatch trim and awning clips.
- Outdoor electronics use ASA for weather station radiation shields, camera housings, solar panel mounts, junction boxes and antenna brackets.
- Functional printer parts and workshop fixtures benefit from ASA when they need better heat resistance than PLA or PETG and may be exposed to sunlight.
- Garden and outdoor hardware includes hose holders, tap handles, sign brackets and planter fittings, all of which can be printed in ASA.

## 2. Printing ASA on the Snapmaker U1

### 2.1 Drying and storage

> Related notes: [[01 - Drying Filament|Drying filament]], [[02 - Storing Filament|Storing filament]], [[03 - Combining Storing and Drying - Science and Rational Approach|Combining storage and drying]]

ASA absorbs a moderate amount of moisture, similar to ABS rather than a nylon. Polymaker describes the moisture uptake of its ASA as low and recommends drying at 70 °C for about 4 hours after brief exposure, or at 70 °C for 7 hours after long exposure. A safe general schedule for filament of unknown history is 70–80 °C for 4–6 hours in a convection dryer.

Use 70 °C if the spool is plastic or cardboard. Use 80 °C only if the spool is rated for it, because some plastic spools soften and deform at 80 °C. Unfilled ASA should not be dried above 80 °C; the filament can tolerate more, but the spool and the wound layers may not. The exception is a filled grade with its own data sheet: Polymaker specifies 90 °C for 6 hours for Fiberon ASA-CF08, and that is acceptable only with a spool rated for 90 °C.

Wet ASA shows small pockmarks on the surface, fuzzy or blistered seams, increased stringing, and weak layer bonds. The symptoms can appear only on long prints, so dry the spool before a large outdoor part rather than after the first failure.

Store ASA in a sealed box below about 20% relative humidity with fresh silica gel or a comparable desiccant. A dry box that is opened every day will not stay dry for long, so keep the working spool in a sealed container and refill the desiccant regularly.

### 2.2 Nozzle, layer geometry and flow

> Related notes: [[04 - Nozzles and Their Types|Nozzles and their types]], [[05 - Layer Height and Nozzle Size|Layer height and nozzle size]], [[07 - Print Speeds and Volumetric Flow|Print speeds and volumetric flow]]

The stock Snapmaker U1 hotend has a 0.4 mm stainless steel nozzle. It is a good match for unfilled ASA, including white grades pigmented with titanium dioxide, which are mildly abrasive over long print times but far less damaging than carbon fibre. Stainless steel is harder than brass and handles these pigments well.

ASA-CF and ASA-GF require a hardened steel nozzle. Snapmaker sells official hardened steel hotends in 0.2, 0.4, 0.6 and 0.8 mm, and each diameter is sold as a four-pack. According to Snapmaker, different diameters cannot be used in the same print, so choose one diameter for the whole job. The 0.4 mm hardened hotend is the general-purpose choice for ASA-CF; the 0.6 mm is useful for large parts where speed matters more than fine detail. Hardened steel conducts heat less efficiently than brass or stainless steel, so expect to raise the nozzle temperature by about 5–10 °C.

A 0.4 mm nozzle is the default for detailed brackets, clips and enclosure parts. A 0.6 mm nozzle improves wall strength and reduces print time on large outdoor parts. A 0.8 mm nozzle can produce thick walls and strong parts, but the U1's 32 mm³/s hotend limit and the higher flow resistance of ASA mean that the practical speed gain is smaller than the diameter suggests.

Use a layer height of 0.16–0.24 mm. A 0.20 mm layer on a 0.4 mm nozzle is a good starting point. Use a line width of 105–120% of the nozzle diameter, with 0.42–0.48 mm as a typical range on a 0.4 mm nozzle. For outdoor enclosures, use four or five perimeters, a 110% inner wall width and about 25% infill-to-wall overlap. These settings matter more than a small change in nozzle temperature because they determine whether water can travel through the wall.

### 2.3 Nozzle, bed and chamber temperatures

> Related note: [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]

Set the nozzle to 250–270 °C for most ASA grades. A common starting point is 255 °C for the first layer and 260 °C for the rest. High-speed printing at 200–300 mm/s on a CoreXY machine may need 265–270 °C to maintain layer adhesion. Some easy-print blends, such as Spectrum ASA 275, are rated at 230–260 °C, so always check the spool or the manufacturer's data sheet before assuming a generic profile.

Set the bed to 95–100 °C. The U1's maximum bed temperature is 100 °C, so 100 °C is the ceiling, not a suggestion to go higher. Preheat the bed to 100 °C and let the chamber stabilise before starting the first layer. A polyetherimide (PEI) sheet works well, but large parts benefit from a thin layer of Magigoo Original, Vision Miner Nano Polymer or Dimafix. Add an 8 mm brim with a 0–0.05 mm gap for parts wider than about 80 mm. The brim is there to hold the corners down while the part cools, not to compensate for a cold chamber.

The chamber is the difficult part on the U1. The optional Top Cover provides passive heating up to about 50 °C, which is enough for small and medium ASA parts. For large parts, a BIQU Panda Breath can raise the chamber further, but its maximum chamber temperature is 60 °C, and 55–60 °C is the hardware ceiling rather than a comfortable working range. A realistic target is 45–50 °C with the Top Cover alone, or 50–55 °C with a Panda Breath. Do not plan a production workflow around 60 °C.

Two conditions are mandatory before using a chamber heater on the U1. First, the motherboard needs additional active cooling. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures caused by motherboard overheating. A 6015 fan that cools only the stepper drivers does not cool the RK3562 and is not sufficient. Fit a full-board cooler that covers the main processor. Second, the printer needs community firmware: paxx12 Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode, or DragonBreath, which is the recommended option. Stock U1 firmware does not control the Panda Breath. Installing community firmware and running a hot chamber may affect warranty coverage, so make that decision deliberately.

Heat-soak the chamber for 15–20 minutes with the bed at 100 °C before printing a large part. A stable chamber reduces thermal gradients through the part and lowers the risk of corner lift and layer splitting. It does not eliminate warping, and it does not make a bad brim or a cold draft irrelevant.

After the print, leave the Top Cover closed and let the chamber cool slowly. Opening the cover immediately exposes the part to a steep temperature gradient and can cause cracking or warping, especially in thick sections. Wait until the chamber is below about 50 °C before removing the build plate, and let the part cool to room temperature on the plate before handling it.

### 2.4 Cooling, speed, flow and retraction

ASA needs much less part cooling than PLA. Run the part cooling fan at 0% for the first three or four layers, then at 10–30% for normal layers. For overhangs and bridges, a temporary boost to 40–60% is reasonable, but keep it short. Strong cooling increases the temperature difference between the extruded bead and the layer below, which is exactly what causes warping and weak layer bonds.

A practical starting point on the U1 is 80–150 mm/s for outer walls and 150–250 mm/s for inner walls and infill. Acceleration of 4,000–8,000 mm/s² is a sensible range for ASA; the machine can accelerate faster, but the chamber and the part geometry usually set the limit. Reduce speed for small features, thin walls and overhangs.

The U1's maximum hotend flow is 32 mm³/s, measured with Snapmaker ABS at 280 °C. That figure is not an ASA rating. For unfilled ASA at 260–270 °C, expect a practical maximum of about 15–22 mm³/s on a 0.4 mm nozzle. High-flow ASA blends can reach 20–26 mm³/s, but only after a flow test. ASA-CF and ASA-GF flow more slowly because the fibres increase viscosity and because the hardened nozzle has lower thermal conductivity. Start conservatively and raise the flow only if the extrusion looks smooth and the layer adhesion is good.

Set retraction to 0.4–0.8 mm at 30–40 mm/s on the U1's direct-drive toolheads. ASA is prone to stringing when it is wet or too hot, so dry the filament before increasing retraction. Pressure advance should be tuned with a tower and entered in millimetres, typically 0.02–0.05 mm on this machine. Do not copy a pressure-advance value quoted in seconds from another firmware or slicer, because the unit on the U1 is millimetres.

ASA shrinks by roughly 0.4–0.7% linearly. In OrcaSlicer, start with an XY scale of 99.5% and measure a test part before committing to a large print. Do not use a single shrinkage value for every brand and colour; pigmented grades and different rubber contents behave differently.

### 2.5 Slicing and post-processing

> Related notes: [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond|Surface smoothing and ironing]], [[09 - Post-Processing - Matte, Shiny, and Surface Finishing|Post-processing and surface finishing]], [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]

Ironing works well on ASA and can produce a surface that looks close to injection moulded. A starting point is 15–20% ironing flow, 45 mm/s ironing speed and 0.15 mm spacing. Test on a small part first, because too much flow produces ridges and too little flow leaves visible gaps.

Fuzzy skin is a good match for black or dark grey ASA when the goal is to mimic textured automotive trim. A thickness of about 0.15 mm and a point distance of about 0.2 mm gives a subtle texture. Keep the effect away from sealing surfaces and threaded holes.

Acetone vapour smoothing works on ASA, but it is slower than on ABS. The acrylate phase dissolves less readily, so a part may need a longer exposure, and the result is often satin rather than mirror-glossy. Vapour smoothing can close surface pores and improve the look of a display part, but it does not make the part waterproof in a pressure-tight sense, and it does not improve UV resistance. Treat smoothing as a cosmetic process and test it on a scrap print before committing a finished part.

Dry sand ASA from 220 grit to 600 grit. It sands without melting if the surface is not overheated, and it accepts standard automotive acrylic and urethane primers and two-component clear coats. Clean the part with isopropyl alcohol and a tack cloth before painting. For colour-matched automotive work, a primer and clear coat system designed for plastic is more reliable than a single aerosol can.

Heat-set brass inserts go in cleanly at 250–270 °C. ASA softens well below that, so the insert should seat with light pressure rather than force. Test the insert on a scrap block first, because overheated inserts sink and cold inserts crack the surrounding plastic.

### 2.6 Emissions and safety

ASA printing emits a mixture of volatile organic compounds (VOCs) and ultrafine particles. Styrene is usually the dominant VOC, and acrylonitrile can also be released when the acrylonitrile units in the polymer degrade. The particles are small enough to penetrate deep into the respiratory tract, and chamber studies of material extrusion printing have found that some filaments, including ASA, are high VOC emitters. Styrene is classified by the International Agency for Research on Cancer as possibly carcinogenic to humans (Group 2B), and acrylonitrile is classified in the same group.

Use HEPA filtration for particles and activated carbon for VOCs, and ventilate the room. The U1 Top Cover's three-stage filtration reduces odours, VOCs and fine particles in internal circulation mode, but it recirculates air inside the enclosure and cannot remove everything. It is not a substitute for exhausting the room or opening a window. Print ASA in a well-ventilated space, keep the printer out of bedrooms and living areas, and keep children and pets away from the exhaust. If the printer is in a small room, use an enclosure vented to the outdoors or a dedicated extraction fan.

Acetone is flammable and its vapour is heavier than air. Do not vapour-smooth near an open flame, a pilot light or a heater. Work outdoors or in a fume hood, keep the container closed, and dispose of used paper towels in a sealed metal container. Sanding produces fine dust; wear a respirator and wet-sand where possible.

## 3. Snapmaker U1 integration

### 3.1 Enclosure, chamber heater and firmware

ASA is on Snapmaker's official supported-material list when the Top Cover is fitted. The Top Cover creates a passive chamber that reaches about 50 °C, which is enough for small and medium parts and for many functional brackets. For large outdoor enclosures, the extra heat from a Panda Breath helps, but the hardware ceiling is 60 °C and the practical target is 45–50 °C with the cover alone or 50–55 °C with the heater.

Before fitting a chamber heater, fit a full-board motherboard cooler. The RK3562 throttles at 85 °C, and the firmware documentation states that additional active cooling on the motherboard is required before using the Panda Breath. A driver-only 6015 fan does not cover the RK3562 and is not enough on its own. This is a reliability requirement, not an optional upgrade.

The Panda Breath is controlled through community firmware. Use paxx12 Snapmaker U1 Extended Firmware with the Panda Breath WebSocket option, or DragonBreath, which is the recommended firmware for the Panda Breath board. Stock U1 firmware does not control the heater. The heater is a 300 W positive temperature coefficient (PTC) unit with a PTC limit of 105 °C and a chamber limit of 60 °C. Do not set the chamber above 60 °C, and do not treat 60 °C as a normal setpoint.

A heated chamber increases wear on the printer and may not be covered by warranty. If the work does not require it, a well-sealed Top Cover and a 100 °C bed are the lower-risk choice.

### 3.2 Using the toolchanger with ASA

The U1's four independent toolheads make ASA multi-material work practical, but not every combination is a good idea.

**ASA with HIPS supports.** High Impact Polystyrene (HIPS) is a compatible styrenic support material that prints in the same general temperature range as ASA, and it is the most natural support partner for ASA on this machine. HIPS is not on Snapmaker's official supported-material list, so treat it as a community-supported material and verify the profile. It can be dissolved in d-limonene, although the process is slow, and it can also be broken away. Leave a small Z gap of about 0.1–0.2 mm at the support interface; a zero-gap interface can fuse and tear the ASA surface. Purge HIPS thoroughly when switching back to ASA.

**ASA with TPU.** Printing TPU in the same job as ASA is mechanically possible, but the bond between the two materials is poor. A co-printed TPU gasket will not form a reliable chemical seal to ASA, and an "integrated waterproof O-ring" is not a realistic design. Instead, design a mechanical groove or captured channel and print the TPU gasket as a separate component, or print it in place with enough compression and mechanical interlock that the seal does not depend on adhesion. Test the assembly under water before trusting it outdoors.

**ASA with ASA in different colours.** This is the simplest multi-material use. The toolchanger reduces cross-contamination because each colour has its own melt zone, but a prime tower or wipe sequence is still needed to clear ooze and stabilise pressure. Do not expect zero ooze just because the nozzles are independent.

### 3.3 Nozzle selection on the U1

Use the stock stainless steel hotends for unfilled ASA. They are durable enough for white and coloured ASA, and they avoid the thermal penalty of hardened steel.

Use the official Snapmaker hardened steel hotend for ASA-CF and ASA-GF. A 0.4 mm hardened nozzle is the best compromise for detailed parts, and a 0.6 mm hardened nozzle is better for large parts and faster deposition. Remember that Snapmaker sells each diameter as a four-pack and does not support mixing diameters in one print. A job that needs both a 0.4 mm and a 0.6 mm nozzle can be attempted with the OrcaSlicer line-width workaround, but that is not an officially supported configuration.

## 4. Five real ASA demo models

These models are real, and their titles and summaries were checked against the Printables API in October 2026. They are useful demonstrations of ASA because they are outdoor, load-bearing or heat-exposed parts rather than decorative trinkets.

1. **[Recessed Boat Handle – Outdoor-Ready (ASA 3D Print)](https://www.printables.com/model/1391616)** on Printables. This is a flush, low-profile grab handle for boats and other wet outdoor applications. It shows why ASA is chosen for marine hardware: the part is stiff, UV-exposed and repeatedly washed, and it needs to keep its colour and toughness.
2. **[Weatherproof Outdoor Push Button Cover – ASA, 3D Print Optimized](https://www.printables.com/model/1782943)** on Printables. This is a cover for an outdoor push button, designed specifically for ASA. It is a small part, but it demonstrates the material's weather resistance and its ability to hold fine detail and a smooth outer surface.
3. **[Print in Place Hinge – PETG/ASA – High Strength 300 - LR Basics](https://www.printables.com/model/120636)** on Printables. This is a fully functional print-in-place hinge offered in several tolerances and lengths. It is a good test of ASA's toughness, layer adhesion and dimensional accuracy, and it is a realistic functional part rather than a test coupon.
4. **[Functional Corner Brackets for PETG/ASA - LR Basics](https://www.printables.com/model/122514)** on Printables. This is a set of structural corner brackets in several sizes. Brackets are a sensible ASA use case because they carry load, may be used outdoors and benefit from ASA's heat resistance compared with PLA.
5. **[Radiation shields for DIY weather station](https://www.printables.com/model/73421)** on Printables. These are universal radiation shields for temperature, pressure and humidity sensors. White ASA is a classic material for this application because it reflects sunlight, resists heat and does not chalk or yellow as quickly as ABS.

## 5. Videos about ASA

1. **[UV resistent alternative to ABS? - Plastika Trček ASA filament REVIEW](https://www.youtube.com/watch?v=M0tYr2JH_Do)** by CNC Kitchen. The video is a mechanical and thermal comparison of a European ASA against ABS, including print quality, impact strength and temperature behaviour.
2. **[The BEST 3D printing material? Comparing PLA, PETG & ASA (ABS) - feat. PRUSAMENT by Josef Prusa](https://www.youtube.com/watch?v=ycGDR752fT0)** by CNC Kitchen. The video is a side-by-side comparison of PLA, PETG and Prusament ASA that covers strength, layer adhesion and the effect of an enclosure.
3. **[What is the best ASA filament? 10 different ASA brands tested](https://www.youtube.com/watch?v=GfG65ypKTPE)** by My Tech Fun. The video is a broad brand comparison with tensile, impact, temperature and print-quality tests. It is useful for seeing how much ASA grades differ from one another.
4. **[BambuLab ASA-CF filament test - Is it better than regular ASA?](https://www.youtube.com/watch?v=oeZ2pGNoobE)** by My Tech Fun. The video is a direct comparison of carbon-fibre ASA with unfilled ASA, including stiffness, layer adhesion and impact results.
5. **[Bambulab ABS vs ASA filament, which one is better on mechanical tests?](https://www.youtube.com/watch?v=4n4GH9NmlZU)** by My Tech Fun. The video is a measured comparison of ABS and ASA that includes heat deflection and mechanical tests.
6. **[eSun ASA+ Filament Review: Made for the Outdoors!](https://www.youtube.com/watch?v=mHerNAlwRFY)** by My Tech Fun. The review focuses on UV and temperature performance, which is useful context for outdoor parts.

## 6. Commercially available ASA

The table lists real products from different brands and links to the manufacturer's store page. Prices and stock change frequently, so check the linked page before ordering. The list was checked in October 2026.

| Brand | Product | What it offers | Notes for the U1 | Link |
| --- | --- | --- | --- | --- |
| Elegoo | ASA | A low-cost, UV and weather-resistant ASA with ±0.02 mm diameter tolerance and a cardboard spool. | A sensible first spool for brackets and outdoor prototypes. Dry it before a large print. | [Elegoo ASA](https://us.elegoo.com/products/asa-filament-1-75mm-colored-1kg) |
| Overture | ASA | A UV-stabilised ASA with ±0.02 mm tolerance and a wide colour range. | Easy to source and a good middle-ground choice for outdoor parts. | [Overture ASA](https://overture3d.com/products/overture-asa-filament-1-75mm) |
| Polymaker | Polymaker ASA (formerly PolyLite ASA) | A broad colour range, low moisture uptake and a 230–260 °C nozzle range. | Follow Polymaker's 70 °C drying advice, and use a 95–100 °C bed for large parts even though the data sheet allows a lower bed. | [Polymaker ASA](https://us.polymaker.com/products/asa) |
| Polymaker | Fiberon ASA-CF08 | ASA with 8% carbon fibre, a matte finish and an HDT of up to 103 °C at 0.45 MPa. | Requires a 0.4 mm or larger hardened nozzle, prints at 260–280 °C, and should be dried at 90 °C for 6 hours. | [Fiberon ASA-CF08](https://us.polymaker.com/products/fiberon-asa-cf08) |
| Prusament | Prusament ASA Jet Black | Czech-made ASA with tight diameter tolerance and a good reputation for consistent printing. | Sold in 800 g spools. A good reference material when calibrating a new profile. | [Prusament ASA Jet Black](https://www.prusa3d.com/product/prusament-asa-jet-black-800g-nfc/) |
| Bambu Lab | ASA | An ASA with radio-frequency identification (RFID) tagging, designed for enclosed CoreXY printers, with an HDT around 100 °C at 0.45 MPa. | The RFID profile is convenient on Bambu printers but not on the U1, so build a U1 profile from the data sheet. | [Bambu Lab ASA](https://us.store.bambulab.com/products/asa-filament) |
| Fiberlogy | ASA | A European ASA with a 0.75 kg spool, a 255–270 °C print range and a 90–110 °C bed recommendation. | The bed recommendation exceeds the U1's 100 °C maximum; use 95–100 °C and a good brim. | [Fiberlogy ASA](https://fiberlogy.com/en/fiberlogy-filaments/asa/) |
| Spectrum Filaments | ASA 275 | A modified ASA designed for easier printing, with a 230–260 °C nozzle range and a lower bed range than typical ASA. | A good choice when a lower chamber temperature is wanted, but still use the Top Cover for large parts. | [Spectrum ASA 275](https://spectrumfilaments.com/en/filament/asa-275/) |
| Flashforge | ASA | A general-purpose UV and weather-resistant ASA. | A reasonable budget option for outdoor brackets and enclosures. | [Flashforge ASA](https://www.flashforge.com/products/asa) |
| 3DXTech | 3DXMAX ASA | A US-made ASA with a low-gloss matte finish, aimed at technical and industrial parts. | Good for fixtures and enclosures where a matte surface is wanted. | [3DXMAX ASA](https://www.3dxtech.com/products/3dxmax-r-asa) |
| 3DXTech | CarbonX ASA+CF | ASA reinforced with 15% high-modulus carbon fibre for high stiffness and dimensional stability. | Requires a hardened nozzle, flows more slowly than unfilled ASA and is best used for stiff brackets rather than impact parts. | [CarbonX ASA+CF](https://www.3dxtech.com/products/carbonx-asa-cf-1) |

## 7. Related notes

- [[00 - Filament Master Index|Filament master index]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)|ABS]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)|TPU and TPE]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Carbon-fibre and glass-fibre composites]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|Soluble and breakaway supports]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC and PC blends]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]

## 8. Sources

- Yildirim, F. F., Hicyilmaz, A. S. and Yildirim, K. (2022). "The effects of the weathering methods on the properties of the ABS, ASA and PMMA polymers." *Polymer Testing*, 107, 107484. [Abstract via EPA HERO](https://hero.epa.gov/reference/10800571). DOI: 10.1016/j.polymertesting.2022.107484.
- Wojnowski, W., Majchrzak, T., Kalinowska, K., et al. (2022). "Emission Profiles of Volatiles during 3D Printing with ABS, ASA, Nylon, and PETG Polymer Filaments." *Molecules*, 27(12), 3814. [PMC9229569](https://pmc.ncbi.nlm.nih.gov/articles/PMC9229569/). DOI: 10.3390/molecules27123814.
- "Exposure hazards of particles and volatile organic compounds emitted from material extrusion 3D printing: Consolidation of chamber study data." *Environment International*, 182 (2023), 108316. DOI: 10.1016/j.envint.2023.108316.
- INEOS Styrolution. "ASA and Luran S: the perfect choice for long-lasting performance." [INEOS Styrolution](https://www.ineos.com/businesses/ineos-styrolution/learning-hub/blog/asa-and-luran-s-the-perfect-choice-for-long-lasting-performance).
- Snapmaker. "Snapmaker U1 specifications." [Snapmaker](https://www.snapmaker.com/en-US/snapmaker-u1/specs).
- Snapmaker. "U1 FAQ." [Snapmaker Wiki](https://wiki.snapmaker.com/en/FAQ/u1).
- paxx12. "DragonBreath and Panda Breath Chamber Heater." [Snapmaker U1 Extended Firmware](https://snapmakeru1-extended-firmware.pages.dev/panda_breath).
- paxx12. "Snapmaker U1 Extended Firmware." [GitHub](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware).
- BIQU. "Panda Breath." [BIQU Equipment](https://biqu.equipment/products/biqu-panda-breath-smart-air-filtration-and-heating-system-with-precise-temperature-regulation).
