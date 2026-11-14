---
title: "04 - Foaming Lightweight PLA (LW-PLA - Active and Passive Expandable Polylactic Acid)"
tags:
  - 3d-printing
  - filaments
  - pla
  - lw-pla
  - foaming
  - lightweight
  - rc-aircraft
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| Active foaming: 225–260 °C on the U1, with 240–255 °C for the lightest walls. Below about 220 °C it barely foams; above 265 °C the foam collapses and the surface scorches | Not required. Keep the chamber near ambient, under about 40 °C, with the Top Cover off or vented | Glass transition is about 55–58 °C and HDT is about 53 °C at 0.45 MPa, falling to 48 °C at 1.8 MPa. Treat 40–45 °C as the practical continuous limit for a thin foamed wall, and much less in direct sun | Single-wall RC airframes, glider fuselages and wings, UAV shells, lightweight cosplay armour and props | Dry at 45–55 °C for 6–8 hours. Use a 0.4 mm stainless nozzle. The main limitation is oozing on travel moves and low heat resistance |
| Passive (pre-foamed): 190–215 °C, with no flow compensation needed | Not required. Ambient, under about 40 °C | Glass transition is about 55–58 °C. HDT and service limits are similar to standard PLA, roughly 45–55 °C | Multi-part models, cosplay props, jigs and housings where a lighter part matters more than maximum weight saving | Dry at 45–55 °C for about 6 hours. Prints like ordinary PLA with normal retraction. Density is fixed at about 0.9 g/cm³ |

> [!info] Overview
> Lightweight PLA is ordinary polylactic acid with a chemical blowing agent compounded into the pellets. When the filament reaches the melt zone the agent decomposes and releases gas, so the extruded bead expands as it leaves the nozzle. A part printed at the same volumetric settings therefore weighs about half as much as the same part in standard PLA, and a thin single wall becomes thicker and much stiffer in bending. The trade-off is a weaker, softer, less heat-resistant material that oozes on every travel move.
>
> Two product families exist and they behave differently. **Active** LW-PLA is sold unexpanded and foams inside your hotend, so density is a slicer setting that you control with temperature and flow. **Passive** LW-PLA is pre-foamed at the factory, so density is fixed by the spool and the material prints like a slightly soft PLA. Both are PLA, both are hygroscopic, and neither needs a heated chamber.

## The two families

### Active foaming LW-PLA

The spool holds dense filament at about 1.21–1.43 g/cm³, which is close to standard PLA density. The blowing agent is still dormant. Once the melt passes roughly 200–210 °C the agent decomposes, the gas nucleates, and the bead swells. ColorFabb describes the volume increase as up to about 250 percent, and states that foaming starts at around 230 °C and that one spool then prints as much as about three spools of ordinary PLA.

Manufacturers do not publish full formulations. The behaviour is that of an **endothermic** chemical blowing agent, the citrate and bicarbonate family that decomposes by absorbing heat and releasing carbon dioxide and water vapour. That is the opposite of an exothermic agent such as azodicarbonamide, which releases heat and nitrogen-rich gas and is used in industrial PLA foaming but is not the usual choice for LW-PLA. Thermally expandable microspheres are a real foaming route in some specialty compounds, but they are not the standard mechanism in LW-PLA. Treat the exact chemistry as proprietary and brand-specific.

Because the gas is generated inside the melt, expansion depends on three things at once: how hot the melt is, how long it spends in the hotend, and how much material the extruder pushes. That coupling is the whole craft of printing active LW-PLA.

### Passive pre-foamed LW-PLA

Polymaker states plainly that its PolyLite LW-PLA is foamed during manufacturing and needs no extrusion temperature adjustment. The spool density is about 0.9 g/cm³ instead of 1.24 g/cm³, and the filament is a little softer and more compressible on the spool. You print it at standard PLA temperatures with a standard flow ratio, and it retracts like PLA. There is no density dial: what you buy is what you get, typically a 25 to 30 percent weight saving rather than the 55 to 65 percent available from active material.

The practical consequence is that passive LW-PLA is the better choice for multi-part assemblies, for models with many islands and travel moves, and for anyone who does not want to calibrate a foaming curve.

## How expansion is controlled

Bambu Lab publishes the clearest measurement of the relationship for its PLA Aero, tested on a 0.4 mm nozzle at 80 mm/s on an 80 × 10 × 4 mm specimen. The flow ratio in the table is the lowest value that still fills the line.

| Nozzle temperature | Minimum flow ratio | Volumetric expansion | Minimum printed density |
| :--- | :--- | :--- | :--- |
| 190 °C | 0.95 | 100% (no foaming) | 1.17 g/cm³ |
| 200 °C | 0.89 | 110% | 1.06 g/cm³ |
| 210 °C | 0.85 | 115% | 1.02 g/cm³ |
| 220 °C | 0.76 | 129% | 0.91 g/cm³ |
| 230 °C | 0.62 | 158% | 0.74 g/cm³ |
| 240 °C | 0.45 | 217% | 0.54 g/cm³ |
| 250 °C | 0.38 | 258% | 0.45 g/cm³ |
| 260 °C | 0.35 | 280% | 0.42 g/cm³ |
| 270 °C | 0.37 | 265% | 0.44 g/cm³ |

Two things stand out. Maximum lightness arrives at about 260 °C and reverses above it, which is the over-foaming that ColorFabb warns about. And the flow ratio is not an independent saving: it is the amount of material needed to fill the volume that the gas creates. Setting a low flow at a low temperature produces gaps rather than a light part.

ColorFabb gives the same picture in prose, with minimal foaming at 210–220 °C, strong foaming at 240–250 °C, and over-foaming above that. Its published activated density at maximum expansion is 0.403–0.476 g/cm³. eSUN quotes 0.54 g/cm³ and an expansion of about 220 percent for PLA-LW, and 3DLabPrint quotes a minimum 2.3× foaming factor for PolyLight 1.0. The numbers differ because the products differ, not because one vendor is wrong. 0.44 g/cm³ is a ColorFabb figure at maximum expansion, not a universal LW-PLA density.

## Properties

The table below uses manufacturer data. Bambu's mechanical specimens were printed at 210 °C, which is a lightly foamed state, so those strengths are higher than a maximum-foam part would show. Polymaker's figures are for its pre-foamed 0.9 g/cm³ material.

| Property | Bambu Lab PLA Aero (active, printed at 210 °C) | Polymaker PolyLite LW-PLA (passive) | Standard PLA, for reference |
| :--- | :--- | :--- | :--- |
| Filament density | 1.21 g/cm³ | about 0.9 g/cm³ | 1.24 g/cm³ |
| Printed density range | 0.55–1.05 g/cm³ | about 0.9 g/cm³ | 1.24 g/cm³ |
| Glass transition temperature | 55 °C by DSC | not published | 55–60 °C |
| Vicat softening temperature | 54 °C | not published | about 60 °C |
| HDT at 0.45 MPa | 53 °C | not published | 55–58 °C |
| HDT at 1.8 MPa | 48 °C | not published | 50–55 °C |
| Tensile strength, XY | 24 ± 2 MPa | 24.4 MPa | 45–60 MPa |
| Tensile strength, Z | 18 ± 3 MPa | 20.8 MPa | 30–45 MPa |
| Young's modulus, XY | 1350 ± 250 MPa | 1689 MPa | 3000–3500 MPa |
| Bending strength, XY | 45 ± 4 MPa | 50.2 MPa | 60–90 MPa |
| Elongation at break, XY | 2.6 ± 0.7% | 8.8% | 3–6% |
| Notched impact, XY | 8.2 ± 0.7 kJ/m² | not published | 2–4 kJ/m² |
| Melting temperature | 153 °C | not published | 155–170 °C |

Creality quotes 18 MPa tensile strength and 3.4 percent elongation for its own foamed Hyper PLA Lightweight, which brackets the same region. These are all sensitive to print temperature, so quote the settings with the number.

### Temperature resistance

Three different numbers are often confused here.

- The **glass transition** is about 55 °C. Above it the polymer softens even with no load applied.
- The **HDT at 0.45 MPa** is 53 °C for Bambu PLA Aero. That is a deflection temperature under a defined load on a standard bar, not a promise that a wing will hold its shape at 53 °C.
- The **practical continuous service temperature** for a thin foamed wall is lower than either figure, because the wall has little thermal mass and carries load through cell walls that buckle locally before the bulk polymer yields. Around 40–45 °C is a realistic ceiling for a structural part.

A thin, dark-coloured wing left in direct sun will exceed that ceiling quickly. Print airframes in white, light grey or another pale colour, and paint them in a light colour if they will sit outdoors. ColorFabb's LW-PLA HT is the partial answer: its activated density is 0.530–0.620 g/cm³ and it publishes an HDT of 71 °C, but note that ColorFabb measures that HDT on an **unfoamed** sample, so a foamed part will not reach it. ColorFabb also warns that the higher temperature resistance can lead to more warping.

### Why thin foamed walls are stiff

A foamed wall is not a stronger material. It is a thicker wall made from the same mass.

If you hold the mass per unit area constant, wall thickness rises in proportion to the density ratio. At 1.24 g/cm³ solid against 0.45 g/cm³ foamed, the foamed wall is about 2.7 times thicker. For a plate, bending stiffness per unit width scales with the cube of thickness, so a 2.7× thickness multiplies stiffness by roughly twenty if the modulus stayed the same. It does not stay the same: the foam's own modulus is far below solid PLA, so the real gain is much smaller and has to be measured rather than calculated. The direction is still favourable, which is why the argument works and why thin-walled airframes print so well in this material.

This is a **geometry effect, not a material property**. It applies only when you compare equal masses and when the wall can grow in thickness without buckling locally first. A foamed part is also far more vulnerable to point loads and to local crushing than a solid one.

## Printing on the Snapmaker U1

The U1 is a good match for this material. Its 300 °C nozzle ceiling covers every product in the table below, its 100 °C bed is more than enough, and it needs no chamber heat at all, which suits a filament that must not be cooked in the cold zone.

### Nozzle and hotend choice

The stock 0.4 mm stainless steel hotend is the right default for single-wall airframes. It is an integrated unit, so moving to another diameter means fitting a complete hotend rather than changing only the nozzle. LW-PLA is not abrasive, because the foaming comes from a chemical agent rather than a hard filler, so hardened steel brings no wear benefit here; it is only useful if you want a different diameter.

A 0.4 mm orifice produces a foamed wall of roughly 0.45–0.65 mm at a flow ratio near 0.4. A 0.6 mm or 0.8 mm hardened steel hotend is reasonable for thick cosplay shells and large props, where a coarser surface does not matter. Avoid 0.2 mm with active material: the expanding melt creates back pressure that a small orifice handles badly. Bambu Lab is stricter with its own filament and lists 0.2 mm stainless and 0.6 mm or 0.8 mm hardened nozzles as incompatible with PLA Aero, even though its TDS quotes settings for 0.4, 0.6 and 0.8 mm. Read that as a Bambu-specific caution rather than a rule about the U1.

Stainless steel conducts heat less well than brass, so a small offset is reasonable. Start at the middle of the brand's window and adjust from measurement rather than assuming a fixed number of degrees.

### Temperature settings

Set the nozzle to 240–250 °C for maximum weight saving and 225–235 °C when surface finish and layer bonding matter more than the last few grams. Print the first layer at 215–220 °C with a flow ratio near 0.9 so that it bonds to the plate, then switch to the foaming temperature from layer two.

The bed should be 50–60 °C on textured or smooth PEI. ColorFabb suggests 40–60 °C, 3DLabPrint suggests 55–60 °C, and Bambu specifies 35–45 °C with glue on its own plates. A mid value of about 55 °C works on the U1's textured PEI sheet.

For passive LW-PLA, use the manufacturer's window, which for Polymaker is 190–210 °C with a flow ratio of 1.0. Treating passive material as active and pushing it to 250 °C simply degrades it.

### Chamber and heat creep

No chamber heating is wanted or needed. The chamber should sit under about 40 °C, which on the U1 means leaving the Top Cover off or vented and leaving the Panda Breath chamber heater switched off. Bambu specifies 25–45 °C for PLA Aero, so the U1's ambient range is correct as supplied.

The real risk is heat creep. If the cold end of the hotend rises above roughly 200 °C, the filament can begin to expand inside the heatbreak, and a plug forms that no amount of purging will clear. On the U1 this is a reason to keep the chamber cool, to keep the heatsink fan working, and to avoid long idle dwells at full printing temperature. If a toolhead will be parked for a long time, drop its standby temperature to around 150 °C.

### Cooling

Active LW-PLA wants less cooling than PLA, not more. ColorFabb recommends 0 to 50 percent fan, and warns that too much cooling makes foamed parts brittle. A sensible U1 starting point is 30–50 percent on single-wall skins, rising to 70–80 percent only on steep overhangs and bridges, where the bead needs to freeze before it sags.

Passive LW-PLA behaves like a slightly soft PLA and accepts the normal 80–100 percent fan profile.

### Speed and volumetric flow

Keep the wall speeds steady, because residence time sets expansion. A fixed 40–70 mm/s for outer walls, inner walls and sparse infill gives a consistent result; letting the slicer vary speed on a tapering wingtip produces visible bands of different density. Bambu caps PLA Aero at 180 mm/s and ColorFabb recommends 30–60 mm/s, with 30–40 mm/s as its optimum.

Volumetric flow is not the limiting factor here. The U1's 32 mm³/s hotend figure was measured with ABS and is irrelevant at these speeds: a 0.45 mm wide, 0.25 mm tall line at 60 mm/s demands under 7 mm³/s of actual filament. Limit flow through the slicer's maximum volumetric speed only to stop the hotend overshooting on large infill areas.

### Retraction, pressure advance and vase mode

Active LW-PLA oozes. The gas pressure inside the melt keeps pushing material out of the nozzle whether or not the extruder retracts, and ColorFabb states plainly that the material oozes on travel moves and that this cannot be reduced completely. Retraction still helps; it just cannot solve the problem alone.

- Set retraction to 0.6–1.2 mm at 20–40 mm/s on the U1's direct-drive toolheads. Bambu specifies 0.6–1.0 mm at 20–40 mm/s for PLA Aero and ColorFabb suggests 1–2 mm at 20–40 mm/s for direct drive.
- Enable travel avoidance so the nozzle does not cross a printed wall, and prefer a small wipe over a large Z-hop.
- Do not stack extra restart length to compensate. If the wall is thin at the start of a path, the cause is ooze during travel, and the fix is a shorter travel or a different seam position.

Vase mode is common but not mandatory. 3DLabPrint designs its LW airframes for single-pass printing with few travel moves, and that style of model works best in spiral vase mode, which removes seams and most travel. But ColorFabb publishes retraction settings for ordinary slicing precisely because plenty of LW-PLA printing is not vase mode: multi-perimeter parts, props, and models with internal structure print normally. Choose the mode the model was designed for. If a model has no internal structure and was drawn as a single continuous perimeter, vase mode is right. If it has ribs, spars or two perimeters, print it normally and tune retraction.

Pressure advance should start lower than your PLA value, in the region of 0.01–0.03 s, and be calibrated on a single-wall test. A compressible, gas-filled melt responds differently to pressure changes than solid PLA, so a value tuned for PLA will usually over-compensate and thin the corners.

### Drying and storage

LW-PLA is hygroscopic and moisture is doubly damaging here. Water flashes to steam in the melt and adds uncontrolled gas to the controlled gas from the blowing agent, which shows up as popping, pitting and erratic wall thickness. Passive material has a porous, pre-foamed structure and picks up moisture quickly.

Dry at **45–55 °C for 6–8 hours**, following the brand's own limit. Bambu specifies 55 °C for 8 hours in a forced-air oven and Polymaker specifies 55 °C for 6 hours, so the whole 45–55 °C band sits inside published manufacturer guidance. Stay at the lower end of it for a soft pre-foamed spool that could deform under its own weight, and weigh the spool before and after to confirm that moisture is actually leaving.

Store spools sealed with fresh desiccant below about 20 percent relative humidity, and feed directly from a dry box for long airframe prints. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]].

### Toolchangers and multi-material work

The U1's four toolheads are genuinely useful here, with one caution. An active LW-PLA toolhead that sits idle at 250 °C will slowly cook the blowing agent in the nozzle, and the first centimetres after it is picked up again can foam unevenly. Either keep the idle temperature low, around 150 °C, or use passive LW-PLA for the lightweight component so that the parked toolhead is not a problem.

A sensible hybrid build pairs a stiff structural material, such as PLA-CF or PETG, on one toolhead for spars, motor mounts and hardpoints with LW-PLA skins on another. Because the U1 is a toolchanger, the two materials never share a melt zone, but a prime tower or wipe sequence is still required to clear the nozzle between changes. PLA and PETG also work as a zero-gap support interface pair on this machine, since they do not bond to each other.

## Failure modes and their causes

- **Stringing and blobs on travel.** This is inherent to active foaming. Reduce travel length, enable wall avoidance, place the seam in a hidden corner and accept a light cleanup with a knife.
- **Walls that are too thin or too thick.** The flow ratio and temperature pair is wrong for that spool. Print a single-wall cube across a temperature ladder in 5 °C steps and measure the wall with calipers.
- **Rough, pitted or popping surface.** The filament is wet. Dry it and re-test before changing any other setting.
- **A hard plug in the heatbreak.** The cold end got too hot and the filament foamed before the melt zone. Cool the chamber, check the heatsink fan, and lower the standby temperature.
- **Brittle, scorched parts with a collapsed surface.** The nozzle is too hot for that product. Back off 10 °C and re-check.
- **Warping or sagging on the shelf.** The part exceeded its glass transition. This is a material limit, not a settings error.

## Post-processing

Foamed PLA sands more easily than solid PLA because the cell structure crushes rather than smears. Work from 220 to 400 grit, dry, and wear a dust mask: the fine dust is unpleasant and there is no reason to inhale it.

Medium-viscosity cyanoacrylate is the right adhesive for airframe assembly, and it bonds quickly on the porous surface. Apply accelerator sparingly and from a distance, because a pooled drop of CA with activator reacts exothermically enough to pit a thin foamed wall. Lightweight balsa filler closes seams, and water-based acrylic paints cover well on the matte surface. For a stiffer skin, 25 g/m² glass cloth with water-based polyurethane or a laminating epoxy works, at the cost of most of the weight saving.

Do not iron active LW-PLA. The hot nozzle keeps expanding the surface and leaves a scorched, uneven track. Passive material can be ironed gently at low flow if the surface needs closing.

See [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]] and [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]].

## Demo models

These are real, free models that demonstrate the material rather than decorative tests of it.

1. **[MakerWorld: 3D Printed LW-PLA RC Glider - Easy to Print](https://makerworld.com/en/models/3187790-3d-printed-lw-pla-rc-glider-easy-to-print)** by the designer "good" is a 1160 mm wingspan glider modelled in Fusion and intended from the start for LW-PLA printing.
2. **[Printables: 3D Printed RC Glider – LW-PLA Lightweight Airplane](https://www.printables.com/model/1814315-3d-printed-rc-glider-lw-pla-lightweight-airplane)** is a second lightweight glider design published specifically for foaming PLA, useful as a comparison of wall thickness and stiffness against the MakerWorld model.
3. **[Printables: Retro Foam Glider for Lightweight PLA (LW-PLA)](https://www.printables.com/model/794259-retro-foam-glider-for-lightweight-pla-lw-pla)** is a small, quick-printing glider that shows the balsa-like feel and the sanding behaviour of the material.
4. **[Printables: Piper J-3 CUB esun's LW Pla](https://www.printables.com/model/338629-piper-j-3-cub-esuns-lw-pla)** is a scale model documented around eSUN PLA-LW, so the print settings on the model page match a specific commercial spool.
5. **[Printables: POLYLIGHT 1.0 – LW PLA foaming/expansion test by temperature](https://www.printables.com/model/498999-polylight-10-lw-pla-foamingexpansion-test-by-tempe)** is a calibration part rather than an aircraft, and it is the most useful item on this list: it turns the temperature and flow table above into something you can measure on your own printer.

## Videos

1. **[CNC Kitchen: A 4th dimension for 3D prints - Colorfabb Light-Weight, foaming PLA](https://www.youtube.com/watch?v=2tmgzwgi2UI)** is the test that introduced much of the hobby to active foaming, with measured density and strength across the temperature range.
2. **[My Tech Fun: eSun ePLA-LW (Lightweight PLA) for model airplanes - printability and strength tests](https://www.youtube.com/watch?v=AYZ2owbaJK0)** tests a specific commercial spool for printability and strength rather than describing the class in general.
3. **[Monster Parts: Active foaming LWPLA vs PRE-foamed LWPLA](https://www.youtube.com/watch?v=bvHx5j77Vz0)** compares the two families directly, which is the distinction that matters most when choosing a spool.
4. **[Troy McMillan RC: How to Print LW-PLA (ALL MY SETTINGS) | ft. NEW eSun eLW-PLA](https://www.youtube.com/watch?v=G3VlDR9KdGw)** is a practical slicer walkthrough for airframe printing, including the flow and temperature calibration that the material demands.
5. **[3Dlabprint: PolyLight 1.0 LW PLA - active foaming technology - 3d filament](https://www.youtube.com/watch?v=7Vpgexh3azs)** is the manufacturer's own demonstration of the expansion behaviour of a filament designed for single-wall aircraft.

## Products

Prices are approximate, in US dollars or euros as the vendor lists them, and were read in October 2026. They move with promotions.

| Product | Foaming type | Published density | Nozzle temperature | Price | Notes and link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ColorFabb LW-PLA | Active | 1.21–1.43 g/cm³ unexpanded; 0.403–0.476 g/cm³ at maximum expansion | 195–260 °C, bed 50–60 °C | about €26.49 at the promotional price, €32.05 list | The reference product, with the most complete published data. It oozes on travel and the manufacturer says so. [ColorFabb](https://colorfabb.com/lw-pla-natural) |
| ColorFabb LW-PLA HT | Active | 0.530–0.620 g/cm³ at maximum expansion | 195–240 °C, cold bed with adhesive and a brim | about €37.49 | Higher heat resistance, HDT 71 °C measured on an unfoamed sample. It warps more and needs modified g-code. [ColorFabb](https://colorfabb.com/filaments/materials/pla-filaments/lw-pla-ht) |
| eSUN PLA-LW | Active | 0.54 g/cm³, about 220% expansion | 210–250 °C | about $28.99 per kg | The most widely available budget option and the one most RC builders start with. [eSUN](https://esun3dstore.com/products/epla-lw) |
| Bambu Lab PLA Aero | Active | 1.21 g/cm³ filament; 0.55–1.05 g/cm³ printed | 210–260 °C, bed 35–45 °C, chamber 25–45 °C | about €47.99 per kg | The best documented temperature and flow table of any brand, and a full TDS with mechanical data. RFID profiles only work in Bambu's own ecosystem. [Bambu Lab](https://us.store.bambulab.com/products/pla-aero) |
| 3DLabPrint PolyLight 1.0 | Active | Minimum 2.3× foaming factor | 230–250 °C, bed 55–60 °C | about $40 per kg | Produced in house for 3DLabPrint's own single-wall airframes, with strong inter-layer adhesion. [3DLabPrint](https://3dlabprint.com/shop/polylight-1-0-lw-pla-filament/) |
| SainSmart LW-PLA | Active | Not published | Not published on the product page | varies | Sold in black and white 1 kg spools and marketed for RC planes and drone parts. Fewer published numbers than the European brands. [SainSmart](https://www.sainsmart.com/products/lightweight-pla) |
| Creality Hyper PLA RFID Lightweight | Active | about 0.8 g/cm³ printed | 230–270 °C | $22.99 promotional, $48.90 list | Inexpensive and widely stocked. Creality quotes 18 MPa tensile and 3.4% elongation. RFID profiles are for Creality printers only. [Creality](https://store.creality.com/products/hyper-lightweight-pla-3d-printing-filament-1kg) |
| Polymaker PolyLite LW-PLA | Passive, pre-foamed | about 0.9 g/cm³ | 190–210 °C, bed 25–60 °C | about €35.99 for 800 g | The easiest product on this list to use: standard temperatures, standard retraction, no flow compensation. It still strings and benefits from a heat gun pass. [Polymaker](https://us.polymaker.com/products/polylite-lw-pla) or [Amazon](https://www.amazon.com/dp/B09H2SC1CX) |
| Overture Air PLA | Passive, pre-foamed | Low density, value not published on the listing | Standard PLA range | varies | Budget pre-foamed option on a cardboard spool, 0.82 kg. Sold mainly through Amazon rather than a dedicated product page. [Amazon](https://www.amazon.com/dp/B0BQRG86YC) |

Eight brands sell a genuine LW-PLA product with a live product page, so this table is shorter than the ten-row tables elsewhere in the vault. Snapmaker does not list an LW-PLA in its own filament range, and Overture sells its Air PLA through Amazon rather than a dedicated product page.

A reasonable buying decision follows from the table. For maximum weight saving on a single-wall airframe, ColorFabb, Bambu Lab and 3DLabPrint all publish the data you need to calibrate properly, and eSUN costs the least. For a multi-part prop or a model with internal structure, PolyLite LW-PLA or Overture Air PLA will save far more time than they cost in density.

## Related notes

- [[00 - Filament Master Index]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]

## Sources

- ColorFabb, LW-PLA Natural product page and technical specification: density 1.21–1.43 g/cm³ unexpanded, 0.403–0.476 g/cm³ activated, glass transition 55 °C, nozzle 195–260 °C, bed 50–60 °C, and the statement that the material oozes on travel moves. <https://colorfabb.com/lw-pla-natural>
- ColorFabb, "How to Print with ColorFabb LW-PLA": foaming between 210 and 260 °C, speed 30–60 mm/s, retraction 1–2 mm at 20–40 mm/s for direct drive, fan 0–50 percent, flow reduction of 20–50 percent at high temperature. <https://colorfabb.com/blog/post/how-to-print-with-colorfabb-lw-pla>
- ColorFabb, LW-PLA HT product page: activated density 0.530–0.620 g/cm³, HDT 71 °C on an unfoamed sample, nozzle 195–240 °C. <https://colorfabb.com/filaments/materials/pla-filaments/lw-pla-ht>
- Bambu Lab, PLA Aero product page: printing temperature 220–260 °C, flow ratio 0.5–0.8, printed density 0.55–1.05 g/cm³, and the temperature and flow table used above. <https://us.store.bambulab.com/products/pla-aero>
- Bambu Lab, PLA Aero Technical Data Sheet V4.0: drying 55 °C for 8 h, nozzle 210–260 °C, bed 35–45 °C, chamber 25–45 °C, retraction 0.6–1.0 mm at 20–40 mm/s, Tg 55 °C, Vicat 54 °C, HDT 53 °C at 0.45 MPa and 48 °C at 1.8 MPa, tensile 24 MPa XY and 18 MPa Z, modulus 1350 MPa XY, notched impact 8.2 kJ/m². <https://store.bblcdn.com/cbc8b808aaf84ead9bb3b0b9b43e66af.pdf>
- Bambu Lab Wiki, filament drying recommendations: PLA Aero at 55 °C for 8 h in a forced-air oven. <https://wiki.bambulab.com/en/filament-acc/filament/dry-filament>
- Polymaker, PolyLite LW-PLA product page: pre-foamed during manufacturing, density 0.9 g/cm³, nozzle 190–210 °C, bed 25–60 °C, drying 55 °C for 6 h, tensile 24.4 MPa XY and 20.8 MPa Z. <https://us.polymaker.com/products/polylite-lw-pla>
- Polymaker, PolyLite LW-PLA Amazon listing, used to confirm the 0.8 kg spool and the pre-foamed description. <https://www.amazon.com/dp/B09H2SC1CX>
- eSUN, PLA-LW product page: 0.54 g/cm³ and about 220 percent expansion. <https://esun3dstore.com/products/epla-lw>
- 3DLabPrint, PolyLight 1.0 product page: minimum 2.3× foaming factor, nozzle 230–250 °C, bed 55–60 °C, and the note that LW airframes are designed for single-pass vase printing. <https://3dlabprint.com/shop/polylight-1-0-lw-pla-filament/>
- Creality, Hyper PLA RFID Lightweight product page: foaming between 230 and 270 °C, density about 0.8 g/cm³, tensile 18 MPa, elongation 3.4 percent. <https://store.creality.com/products/hyper-lightweight-pla-3d-printing-filament-1kg>
- SainSmart, LW-PLA product page: active foaming, 1 kg, black and white. <https://www.sainsmart.com/products/lightweight-pla>
- Overture, Air PLA listing: pre-foamed low-density PLA, 0.82 kg cardboard spool. <https://www.amazon.com/dp/B0BQRG86YC>
- Snapmaker U1 specifications used throughout: 300 °C maximum nozzle, 100 °C maximum bed, no stock chamber heater, 32 mm³/s maximum hotend flow measured with Snapmaker ABS at 280 °C.

A note on the chemistry. No LW-PLA vendor publishes its full formulation. The description above follows the behaviour of endothermic bicarbonate and citrate systems, which decompose by absorbing heat, in contrast with exothermic azodicarbonamide. Treat the exact chemistry of any specific spool as proprietary and brand-specific, and do not assume that a safety data sheet will name the agent.
