---
title: "24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)"
tags:
  - 3d-printing
  - filaments
  - pvdf
  - peek
  - pei
  - pcl
  - cleaning-filament
  - fluoropolymers
  - engineering-plastics
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **PVDF, unfilled:** 245–265 °C. Do not exceed 290 °C. | Ambient is acceptable. The optional Top Cover gives about 50 °C, which helps. A heated chamber is not required. | About 130 °C continuous service. The 0.45 MPa heat deflection temperature (HDT) is 158 °C, but HDT is not a service limit. | Chemical pump parts, fluid-handling fittings, outdoor and UV-exposed parts, electrical insulation. | The polymer is non-hygroscopic, so drying is normally unnecessary. Use the stock 0.4 mm stainless steel hotend. It warps strongly, so use a brim, glue and a 90–100 °C bed. Hydrogen fluoride is released only above roughly 350–400 °C, which the U1 cannot reach, but 290 °C remains the practical ceiling. |
| **PVDF-GF, glass-filled:** 245–265 °C, starting from the unfilled PVDF range. | Ambient to about 50 °C with the Top Cover. | About 130 °C continuous service, similar to unfilled PVDF. | Stiffer chemical-resistant housings, pump bodies and brackets that would warp too much in unfilled PVDF. | Glass fibre is abrasive, so a hardened steel hotend is mandatory. It is stiffer and warps less than unfilled PVDF, but layer adhesion is generally lower. |
| **PCL, polycaprolactone:** 80–130 °C, depending on grade. eSUN eMorph lists 80–110 °C and FormFutura lists 95–130 °C. | Ambient only. Do not heat the chamber. A 60 °C chamber would soften or collapse the print. | Softens at 58–60 °C. Keep service below about 45 °C. | Hand-mouldable splints and orthotics, gaskets, jigs, craft and prototyping parts that are reshaped in warm water. | The firmware minimum extrusion temperature must be overridden with `M302`. Dry only at 35–40 °C. Use 100% part cooling and a long minimum layer time. It is too soft for sustained load or warm environments. |
| **Cleaning filament, maintenance only:** 150–260 °C for eSUN cleaning filament. Use the temperature of the material being purged. | Not applicable. | Not applicable. This is not a build material. | Purging hotends between materials and colours, and cold pulls at 95–110 °C. | It is a maintenance consumable, not a printing filament. Dyna-Purge 3D Clean is a purge compound, not a cold-pull material. |
| **PEEK, PEI (Ultem) and PEKK:** PEEK 360–450 °C, with some profiles up to 480 °C; PEI 360–400 °C; PEKK 340–380 °C. | PEEK needs 70–140 °C, PEI needs at least about 90 °C, and PEKK needs 120 °C or more. The U1 can reach at most 60 °C with a chamber heater, and only with community firmware. | PEEK about 240–260 °C continuous. PEI about 170–200 °C. PEKK about 200–250 °C. | Aerospace, medical and industrial parts that justify an industrial printer. | **The Snapmaker U1 cannot print these materials.** The 300 °C nozzle limit is below their melting or processing range, and the chamber cannot reach the required temperature. |

> [!abstract] Overview
> This note covers four things that are often grouped together only because they are unusual: PVDF, a fluoropolymer that the Snapmaker U1 can print; PCL, a polyester that prints below 130 °C; cleaning filament, which is a maintenance consumable rather than a build material; and the ultra-polymers PEEK, PEI and PEKK, which the U1 cannot print at all. The four sections below are deliberately separate, because their chemistry, hardware requirements and safety rules have almost nothing in common.
>
> The short version for this machine is that **PVDF and PCL are usable, cleaning filament is useful, and PEEK, PEI and PEKK are not**. A 300 °C nozzle, a 100 °C bed and a chamber that reaches at most 60 °C cannot satisfy a material that needs a 360–450 °C nozzle and a 70–140 °C chamber.

## 1. Why these materials are in one note

The original framing of this topic merged five unrelated materials into a single "polymer pyramid" and presented them as alternatives. That framing is misleading. PVDF is a semi-crystalline fluoropolymer, PCL is a low-melting aliphatic polyester, cleaning filament is a proprietary purge compound, and PEEK, PEI and PEKK are aromatic high-temperature polymers. They do not share print settings, nozzle requirements, drying rules or safety hazards.

The grouping is kept only for navigation, because these are the materials that do not fit the usual PLA, PETG, ABS and nylon categories. Each material below has its own settings and its own limits. The comparison table is included for context, not to suggest that one material can replace another.

| Property | PCL | PVDF | PEI (Ultem 1010) | PEEK |
| :--- | :--- | :--- | :--- | :--- |
| Printable on a stock Snapmaker U1 | Yes, with a firmware override | Yes | No | No |
| Density | About 1.14 g/cm³ | About 1.78 g/cm³ for the polymer; 3DXTech lists 1.71 g/cm³ for its compound | 1.27–1.34 g/cm³ | 1.30–1.32 g/cm³ |
| Glass transition temperature | About −60 °C | About −35 to −40 °C | 217 °C | 143 °C |
| Melting point | 58–60 °C | 171–177 °C | Amorphous, no melting point | 343 °C |
| Tensile strength | About 16–24 MPa | About 42–54 MPa | About 70–95 MPa | About 90–105 MPa |
| Continuous service temperature | About 45 °C | About 130 °C | About 170–200 °C | About 240–260 °C |
| Flammability | Flammable | UL 94 V-0 base resin | UL 94 V-0 | UL 94 V-0 |

The density figure of 1.78 g/cm³ is the accepted value for unfilled PVDF. 3DXTech's technical data sheet for FluorX lists 1.71 g/cm³ for its particular compound, and that difference is normal for a formulated filament.

## 2. PVDF, polyvinylidene fluoride

PVDF is a semi-crystalline fluoropolymer built from alternating CH₂ and CF₂ groups. The carbon-fluorine bond is strong, which is the source of its chemical resistance and its UV stability. It is sold under trade names such as Arkema Kynar and Solvay Solef, and 3DXTech compounds Kynar resin into its FluorX filament.

PVDF melts at 171–177 °C. That is low enough for a 300 °C hotend, which is why it is the fluoropolymer that makes sense on a desktop printer. It is not a replacement for PTFE. PTFE cannot be melt-extruded into a usable printed part, it melts at about 327 °C, and it begins to decompose above roughly 400 °C. PVDF is a different polymer with a much lower melting point.

### 2.1 Printing PVDF on the Snapmaker U1

| Parameter | Setting |
| :--- | :--- |
| Nozzle temperature | 245–265 °C. The practical maximum is 290 °C. |
| Bed temperature | 90–100 °C, which stays inside the U1's 100 °C limit. 3DXTech lists 90–110 °C for its own printer profiles. |
| Chamber | Ambient is acceptable. The optional Top Cover gives a passive chamber of about 50 °C and helps with warping. |
| Part cooling | 0–20%. More cooling increases warping and weakens layer bonding. |
| Print speed | 25–50 mm/s. 3DXTech suggests 40–60 mm/s as a starting point, but the U1 should start slower. |
| Volumetric flow | About 6–9 mm³/s. The U1's 32 mm³/s hotend limit is not the constraint here; the material is. |
| Retraction | About 0.8–1.2 mm at 30 mm/s. |
| Layer height | 0.16–0.24 mm. |
| Build surface | PEI or glass with a glue stick. Add a 10 mm brim. |
| Drying | Normally unnecessary. If the spool has been stored damp, dry at 65–70 °C for about 3 hours. |

PVDF warps noticeably. A hot bed, a brim, glue and a warm chamber all help, but a large flat part may still lift. A draft shield or a tall skirt can reduce the effect on an open printer. The Top Cover is useful here, and it is also the reason the chamber should be vented after the print, because the smell is unpleasant even at normal temperatures.

The stock 0.4 mm stainless steel hotend is suitable for unfilled PVDF. Glass-filled PVDF is abrasive and requires one of the official hardened steel hotends in 0.4 mm or 0.6 mm. Those hotends are sold as four-packs of a single diameter, and Snapmaker does not support mixing diameters in one print.

### 2.2 Hydrogen fluoride safety, corrected

> [!danger] The hydrogen fluoride threshold is 350–400 °C, not 300 °C
> PVDF can release hydrogen fluoride (HF) when it is thermally decomposed. The onset of that decomposition is roughly **350–400 °C**, not 300–315 °C. The Snapmaker U1 has a maximum nozzle temperature of 300 °C, so a stock U1 cannot reach the HF onset temperature even at its maximum setting.
>
> That does not make overheating harmless. PVDF should still be kept at or below 290 °C, because above that range it degrades, loses mechanical properties and produces irritating fumes well before bulk decomposition begins. Print in a ventilated room, do not leave a PVDF spool sitting at maximum temperature, and never assume that a "safe" maximum means the material is happy there.
>
> PTFE is a separate case. It melts at about 327 °C and starts to decompose above roughly 400 °C. A PTFE-lined hotend or PTFE tube is therefore not a reason to exceed 290 °C, and any burnt-plastic smell from a hotend should be treated as a reason to stop and investigate.

PVDF is sometimes described as releasing HF above 300–315 °C while its decomposition onset is also quoted as above 350 °C. Those two statements cannot both be true. HF risk begins in the 350–400 °C region, the U1 cannot reach it, and 290 °C is still the working ceiling for print quality and for avoiding gradual degradation.

### 2.3 Chemical resistance, corrected

PVDF resists a wide range of chemicals, including acids, alcohols, fully halogenated hydrocarbons, automotive fluids, oils and greases. It is also inherently UV-stable and does not degrade in sunlight the way polypropylene or nylon does. It has a UL 94 V-0 rating for the base resin at 1.5 mm, and it is used for chemical process equipment, wire insulation and outdoor fixtures.

It is not immune to everything. PVDF is attacked by **strong bases, ketones, esters and amines**. Acetone, methyl ethyl ketone, ethyl acetate and concentrated ammonia are examples of chemicals that should not be assumed safe. The correct description is "excellent resistance to a broad range of chemicals", not "immune to acids and solvents".

The continuous service temperature is about **130 °C**, as listed by 3DXTech and Arkema. The 0.45 MPa HDT of 158 °C is a deflection measurement under a light load and does not mean the part can carry a structural load at 158 °C. A figure of 145–150 °C would overstate the continuous rating.

## 3. PCL, polycaprolactone

PCL is a biodegradable aliphatic polyester with a melting point of 58–60 °C and a glass transition temperature near −60 °C. It is flexible and tough at room temperature, it prints at temperatures that most printers consider "cold", and it can be reshaped by hand after printing. Those properties make it useful for splints, orthotics, gaskets and craft parts, and almost useless for anything that must hold load in a warm room.

The polymer is often sold as pellets or as craft sticks under names such as Polymorph or ShapeLock, and as filament by eSUN, FormFutura and 3D4Makers. eSUN's eMorph and eMate are PCL-based, although eMate is aimed mainly at 3D pens. Polymaker's current catalogue does not include a PCL filament.

### 3.1 Printing PCL on the Snapmaker U1

| Parameter | Setting |
| :--- | :--- |
| Nozzle temperature | 80–130 °C, depending on grade. eSUN eMorph lists 80–110 °C; FormFutura BioFil PCL lists 95–130 °C. |
| Bed temperature | 40–50 °C, or a cold bed with blue tape. A hot bed is not required and can make the first layer too soft. |
| Chamber | Ambient. The Top Cover should be off and no chamber heater should be running. |
| Part cooling | 100%. |
| Print speed | 20–40 mm/s. |
| Volumetric flow | About 4–6 mm³/s. |
| Retraction | About 1.0–1.5 mm at 25 mm/s. |
| Layer height | 0.20–0.28 mm. |
| Minimum layer time | 15–25 seconds, or more for small parts. |
| Drying | 35–40 °C only, or a desiccant container at room temperature. |

> [!warning] A 60 °C chamber would melt the print
> PCL softens at 58–60 °C. Any chamber heater set to 60 °C, including a BIQU Panda Breath at its maximum, is hot enough to soften a finished PCL part and to collapse thin walls. This is the single most important rule for PCL on this machine. Print PCL with the chamber open, the Top Cover off and no active heating.
>
> The same rule applies after the print. Do not leave a PCL part in a car, on a sunny windowsill, near a heated bed or inside a dryer. It will deform at temperatures that are comfortable for a person.

The U1's firmware enforces a minimum extrusion temperature, typically 170 °C, and it will refuse to extrude at PCL temperatures. The usual workaround is to send `M302 S70` or `M302 S80` before the print, or to change the minimum extrusion temperature in the machine profile. This is a community workaround rather than an official Snapmaker feature, and it should be tested with the hotend at temperature and the filament path clear before a real print is started.

PCL is soft and can buckle in a feeder. Keep the spool tension low, use a slow load and avoid sharp bends in the filament path. A 0.4 mm nozzle is fine, and the material is not abrasive.

### 3.2 Hand moulding at 60 °C

A printed PCL part can be reshaped in water at about 60 °C. The white, semi-crystalline part becomes clear and pliable after roughly 10 seconds in the water, and it can be pressed around a tool handle, a wrist or a mannequin. As it cools to room temperature it becomes opaque and rigid again.

The process is repeatable, which is the main advantage over PLA. A splint can be reheated and refitted several times, and scraps can be reused. The part is not unbreakable, and it is not suitable for permanent load or for contact with hot surfaces. Test the water temperature before pressing the part against skin, and keep the work area away from children and pets while the water is hot.

## 4. Cleaning filament and cold pulls

Cleaning filament is a maintenance consumable. It is not a build material, and it is not formulated to make structural parts. Its job is to scrub the inside of the hotend and to carry old polymer, colour and carbonised debris out of the nozzle.

eSUN's cleaning filament is sold as a 0.1 kg spool in 1.75 mm natural. eSUN lists a working range of **150–260 °C** and describes it as thermally stable, slightly viscous and resistant to degradation inside the hotend. A working range up to 300 °C would be too high. eSUN does not publish the polymer chemistry, so describing it as a nylon or copolyamide blend is an assumption rather than a manufacturer statement.

Dyna-Purge 3D Clean is a different product with a different purpose. It is a proprietary thermoplastic purge compound that softens but does not melt, and 3D-Fuel explicitly describes it as a purge material rather than a cold-pull material. It is used at the temperature of the material being purged, typically around 230 °C, and it is available as 8-inch sticks or as 25 g and 100 g coils. It is not a substitute for a cold pull, and a cold pull is not a substitute for a purge.

### 4.1 Purging between materials

Heat the nozzle to the printing temperature of the material that is currently loaded. Feed cleaning filament until the extruded strand is clean and shows no streaks of the old colour. Reverse the extruder or release the idler and remove the remaining cleaning filament. Then set the temperature for the next material and load it.

This is the correct procedure when changing from a high-temperature material such as PC, ASA or a fibre-filled nylon to PLA. The cleaning filament carries the old polymer out at the old material's printing temperature, so the PLA is not heated to 280 °C and carbonised inside the hotend.

### 4.2 Cold pull procedure

1. Heat the nozzle to about 10 °C above the printing temperature of the previous material. For a material printed at 260 °C, use about 270 °C.
2. Feed 50–80 mm of cleaning filament and let it flow until the strand is clean.
3. Set the nozzle target to 0 °C and maintain light forward pressure on the filament so the tip stays packed into the nozzle cone.
4. When the nozzle reaches **95–110 °C**, release the extruder idler and pull the filament firmly and straight upward.
5. Inspect the pulled plug. A good pull has the shape of the internal nozzle cone and carries the debris with it. Repeat if the plug is smooth or broken.

The U1's hotend is an integrated assembly, so a cold pull is performed from the filament path rather than by unscrewing a nozzle. If a pull fails repeatedly or the hotend is badly clogged, the assembly has to be replaced rather than serviced by fitting a new nozzle.

## 5. PEEK, PEI and PEKK are not printable on this machine

> [!danger] Hard limit: the Snapmaker U1 cannot print PEEK, PEI (Ultem) or PEKK
> These materials need nozzle temperatures of roughly **340–480 °C**, depending on the polymer and grade, and chamber temperatures of **70–140 °C**. The U1 has a **300 °C** maximum nozzle, a **100 °C** maximum bed and a chamber that reaches at most **60 °C** with an add-on heater and community firmware. No profile, nozzle change or slicer trick closes that gap.
>
> A print attempted below the required temperature will not fuse properly. The extruder will struggle to melt the filament, the layers will delaminate, and the part will be weak and brittle. On a machine with a 300 °C limit, the likely outcomes are a clogged hotend, a damaged feeder and a wasted spool, not a functional PEEK part.

| Material | Glass transition | Melting point | Typical nozzle | Typical bed | Typical chamber | Continuous service |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PEEK | 143 °C | 343 °C | 360–450 °C, up to 480 °C on some profiles | 120–160 °C | 70–140 °C | 240–260 °C |
| PEI 1010 | 217 °C | Amorphous | 370–390 °C | 120–160 °C | At least about 90 °C | About 170–200 °C |
| PEI 9085 | 186 °C | Amorphous | 360–400 °C | 120–160 °C | At least about 90 °C | About 170–200 °C |
| PEKK | About 160 °C | About 300–340 °C, depending on grade | 340–380 °C | 120–160 °C | 120 °C or more | About 200–250 °C |

PEEK is a semi-crystalline polyaryletherketone with a glass transition of 143 °C and a melting point of 343 °C. 3DXTech's own page recommends a 360–450 °C hotend in its guidance and 400–480 °C in its print settings panel, with a 120–160 °C bed and an actively heated chamber at 70–140 °C. Its ThermaX PEEK is listed with a continuous use temperature of 240–260 °C and a 0.45 MPa HDT of 140 °C. Those numbers are the reason PEEK parts are used in aerospace, oil and gas, and medical applications, and they are also the reason a desktop printer cannot make them.

PEI, sold as Ultem 1010 and 9085, is amorphous. It has no melting point, but its glass transition of 217 °C for 1010 and 186 °C for 9085 means it must be printed well above 300 °C to flow and to bond. 3DXTech lists 370–390 °C for ThermaX PEI 1010, with a 120–160 °C bed and a recommended heated chamber. The same material in thin sheet form is the amber PEI build plate surface used on many printers, which is a useful reminder that the sheet is not the same thing as a printable filament.

PEKK is a related polyaryletherketone. It is often described as more forgiving than PEEK, with better layer bonding and less warping sensitivity, but its processing range is still above 340 °C and it still needs a hot chamber. It is not a compromise that makes ultra-polymers printable on a 300 °C machine.

If the goal is chemical resistance, UV stability and flame retardancy within the U1's limits, PVDF is the realistic choice. If the goal is high-temperature strength, PPS is the closest material that is at least marginal on this machine, and even PPS loses layer strength at 300 °C compared with its ideal 320–340 °C range. PC, PPA and fibre-filled nylon are better supported alternatives for structural parts. See [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)|PPS]], [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC]] and [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)|PA]] for those materials.

## 6. Snapmaker U1 integration

### 6.1 Hotends and nozzles

Unfilled PVDF and PCL both work with the stock 0.4 mm stainless steel hotend. Glass-filled PVDF requires a hardened steel hotend, and the official hardened hotends are available in 0.2, 0.4, 0.6 and 0.8 mm. They are sold as four-packs of one diameter, and Snapmaker does not support using two different diameters in the same print. The OrcaSlicer line-width workaround for mixing 0.4 mm and 0.6 mm is a community technique, not a stock capability.

3DXTech sells a **glass-filled** PVDF+GF grade, not a carbon-fibre PVDF. That distinction matters for nozzle choice and for the claim that the reinforcement reduces warping; the glass-filled grade does reduce warping, but it is glass, not carbon.

### 6.2 Chamber and filtration

The optional Top Cover provides passive heating to about 50 °C and includes HEPA and activated carbon filtration. That is enough for PVDF and is the correct configuration for it. PCL should be printed with the Top Cover off and no chamber heat.

A BIQU Panda Breath can reach 60 °C, but it is not controlled by stock U1 firmware. It requires either the paxx12 Snapmaker U1 Extended Firmware in WebSocket mode or DragonBreath, and BIQU's own documentation notes that the PTC element has a 105 °C limit. More importantly, **motherboard cooling is mandatory before any chamber heater is used on the U1**. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures. A 6015 fan that cools only the stepper drivers is not sufficient; a full-board cooler is required. None of this makes PEEK printable, because 60 °C is still far below the 70–140 °C that PEEK needs.

### 6.3 Toolhead strategy

The U1 has four independent toolheads, so a PVDF part can be paired with a dissimilar support material without contaminating a shared melt zone. HIPS is the usual candidate for a breakaway interface with PVDF because the two polymers do not bond strongly, but the pair should be tested on a small part before it is used for a long print. A prime tower or a wipe sequence is still needed.

For PCL, the main practical issue is the feeder rather than the toolhead. The material is soft, so keep the path short and the tension low. A dedicated toolhead is not required, but a purge cycle is needed when switching to a higher-temperature material, because PCL left in a hot nozzle will carbonise.

### 6.4 Maintenance

Keep a short length of cleaning filament beside the printer. Purge after abrasive or high-temperature materials, and perform a cold pull when the extrusion pattern becomes uneven. Do not use cleaning filament as a build material, and do not use Dyna-Purge as a cold-pull compound.

## 7. Demonstration models

These are real, publicly listed models. They were chosen because their geometry suits the material, not because the designer necessarily printed them in it. Where the designer's recommended material differs, that is stated.

1. **Centrifugal Pump Housing** on Printables. A pump housing with mounting tabs, a shaft collar and internal flow channels. It is a sensible shape for PVDF or PVDF-GF because the part is a fluid-handling component and the stiffness of the glass-filled grade helps with the thin walls.
   - [https://www.printables.com/model/1792140](https://www.printables.com/model/1792140)
2. **Peristaltic Pump Housing** on Printables. A housing for a small peristaltic pump used to move isopropyl alcohol through a filter. PVDF is a good match for solvent-contact parts, although the designer's own build is a general-purpose enclosure.
   - [https://www.printables.com/model/502684](https://www.printables.com/model/502684)
3. **Experimental PCL Gasket Prints** on Printables. The designer explicitly describes printing PCL at 70–100 °C and using it for gaskets and fuse-like parts that soften at a known temperature. This is the most directly relevant PCL model in the list.
   - [https://www.printables.com/model/1300714](https://www.printables.com/model/1300714)
4. **Wrist Splint (Custom Moldable)** on Printables. The splint prints flat and is moulded to the wrist with heat. The designer recommends PLA and heat-forming, but the geometry is a natural fit for PCL, which can be refitted repeatedly in 60 °C water, whereas a heat-formed PLA splint is much easier to distort permanently.
   - [https://www.printables.com/model/1238124](https://www.printables.com/model/1238124)
5. **Print Flat Bracelets, Thermoformed 3D Prints** on Printables. A set of printable forms and bracelet bands intended to be printed flat and then thermoformed around a form. PCL is a better material for repeated reshaping than PLA, and the thin band suits its flexibility.
   - [https://www.printables.com/model/268967](https://www.printables.com/model/268967)

## 8. Videos

1. **My Tech Fun, "3DXTech FluorX PVDF Filament Review: The Moisture and Chemical Resistant Polymer".** A measured review of FluorX PVDF that covers the 245–265 °C nozzle range, the 90–110 °C bed, the warping behaviour and the mechanical test results. It is the most useful independent test of the material in this note.
   - [https://www.youtube.com/watch?v=tYyk9kOpGOE](https://www.youtube.com/watch?v=tYyk9kOpGOE)
2. **Vision Miner, "FluorX PVDF Made Using Arkema Kynar, 3D Printing Filament from 3DXTech".** A manufacturer-side overview that covers the applications, the required temperatures and the chemical-resistance claims. Treat it as a vendor source rather than an independent test.
   - [https://www.youtube.com/watch?v=I4XbOHv_9gg](https://www.youtube.com/watch?v=I4XbOHv_9gg)
3. **Lost In Tech, "The Low Temperature 3D Printing Filament you probably haven't heard of".** A practical look at printing PCL, including the transparency of the extruded strand, the low melting point and the difficulty of printing below the firmware's normal minimum temperature.
   - [https://www.youtube.com/watch?v=3BvcaxGF5Z0](https://www.youtube.com/watch?v=3BvcaxGF5Z0)
4. **Frank's 3D Shop, "How to Clean a 3D Printer Nozzle".** A short demonstration of a cold pull at around 90 °C, including the shape of a successful plug. The procedure transfers directly to the U1.
   - [https://www.youtube.com/watch?v=hBkTeXxcFi8](https://www.youtube.com/watch?v=hBkTeXxcFi8)
5. **AON3D, "How to 3D Print PEEK, PEKK, and ULTEM".** An industrial explanation of the temperatures, chambers and drying requirements for the ultra-polymers that the U1 cannot print. It is included as a reference for why the limit exists, not as a guide to attempting it.
   - [https://www.youtube.com/watch?v=S8VDxGdKORg](https://www.youtube.com/watch?v=S8VDxGdKORg)

## 9. Products

Prices are approximate, were observed in October 2026, and will change. The list is intentionally short. **Ten distinct brands for these materials do not exist**, and any table that shows ten is padded with resellers, repackaged pellets or products that cannot be verified. A short honest list is more useful than a long one.

Two products that appear in older lists have been left out. The Nile Polymers/Portabee "Fluorinar-C" PVDF could not be verified, and Sunlu's own storefront does not list a PCL filament.

| Product | Material | Size and approximate price | Link |
| :--- | :--- | :--- | :--- |
| 3DXTech FluorX PVDF | Unfilled PVDF made with Arkema Kynar resin | 750 g, about $188 | [3DXTech](https://www.3dxtech.com/products/fluorx-pvdf-1) |
| 3DXTech 3DXLABS PVDF+GF | Glass-fibre-reinforced PVDF | 750 g, about $225 | [3DXTech](https://www.3dxtech.com/products/3dxlabs%E2%84%A2-pvdf-gf) |
| FormFutura BioFil PCL | PCL homopolymer | 500 g, about €58 | [FormFutura](https://www.formfutura.com/biofil-pcl) |
| eSUN Cleaning Filament | Proprietary purge compound, 150–260 °C | 100 g, typically under $20 | [Amazon](https://www.amazon.com/dp/B00MVIYNFW) |
| Dyna-Purge 3D Clean by 3D-Fuel | Thermoplastic purge compound | 25 g coil or 8-inch stick pack, about $18 | [3D-Fuel](https://www.3dfuel.com/products/3d-clean-1-75mm) |
| 3DXTech ThermaX PEI 1010 | Polyetherimide made with Ultem 1010 resin | 250 g from about $70 | [3DXTech](https://www.3dxtech.com/products/thermax-pei-1010) |
| 3DXTech ThermaX PEEK | Polyether ether ketone | Prices from about $158 | [3DXTech](https://www.3dxtech.com/products/thermax-peek-1) |

The PEI and PEEK entries are included as references for the materials the U1 cannot print, not as purchase recommendations for this machine. eSUN's eMorph PCL is also widely available in 500 g reels and lists 80–110 °C.

## 10. Related notes

- [[00 - Filament Master Index|Filament master index]]
- [[01 - Drying Filament|Drying filament]]
- [[02 - Storing Filament|Storing filament]]
- [[04 - Nozzles and Their Types|Nozzles and their types]]
- [[05 - Layer Height and Nozzle Size|Layer height and nozzle size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[07 - Print Speeds and Volumetric Flow|Print speeds and volumetric flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond|Surface smoothing]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing|Post-processing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Fibre-reinforced composites]]
- [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)|PPS]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|Soluble and breakaway supports]]
- [[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)|PP and POM]]

## 11. Sources

- 3DXTech, FluorX PVDF product page and technical data sheet: density 1.71 g/cm³, melting point 170 °C, HDT 158 °C at 0.45 MPa, continuous use 130 °C, UL 94 V-0 at 1.5 mm, extruder 245–265 °C, bed 90–110 °C.
- 3DXTech, 3DXLABS PVDF+GF product page: 750 g, $225, glass-fibre reinforcement, continuous use 130 °C.
- 3DXTech, ThermaX PEI 1010 product page: Tg 217 °C, extruder 370–390 °C, bed 120–160 °C, drying 150 °C for 4 hours.
- 3DXTech, ThermaX PEEK product page: Tg 143 °C, Tm 343 °C, continuous use 240–260 °C, extruder 400–480 °C in the print settings panel and 360–450 °C in the guidance text, bed 140–180 °C, chamber 70–140 °C.
- Arkema, Kynar PVDF 3D printing filament page: continuous use up to 130 °C, non-hygroscopic, UV-resistant, V-0 base resin.
- FormFutura, BioFil PCL product page: 500 g, €57.81, print temperature 95–130 °C, bed 40–50 °C.
- eSUN, cleaning filament technical information: 150–260 °C working range, 0.1 kg spool, slight viscosity.
- eSUN, eMorph and eMate product notes: PCL-based, 80–110 °C for eMorph and 70–100 °C for eMate, 60 °C reshaping.
- 3D-Fuel, Dyna-Purge 3D Clean product page: purge compound, not a cold-pull material, 230 °C typical use.
- Snapmaker U1 specifications and supported-material list: 300 °C nozzle, 100 °C bed, 60 °C maximum chamber with add-on heater, PEEK and PEI not supported.
- BIQU Panda Breath documentation and the paxx12 Extended Firmware and DragonBreath projects: 60 °C chamber maximum, community firmware required, motherboard cooling mandatory.
