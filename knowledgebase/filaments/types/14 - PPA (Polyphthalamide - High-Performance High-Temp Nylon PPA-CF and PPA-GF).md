---
title: "14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)"
tags:
  - 3d-printing
  - filaments
  - ppa
  - polyphthalamide
  - ppa-cf
  - ppa-gf
  - high-temperature-nylon
  - engineering-plastics
  - composite-filament
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 290–300 °C on the U1. Published windows for PPA-CF run from 280 to 330 °C, so the U1 sits at the bottom of several brands' ranges while running at its own maximum. | 45–50 °C passively with the Top Cover. 60 °C is the absolute maximum with a Panda Breath, and only with community firmware and full motherboard cooling. | HDT is 185–240 °C at 0.45 MPa for high-aromatic grades, whether measured as printed or after annealing, and 82–196 °C at 1.8 MPa. Continuous loaded service is roughly 120–150 °C at best, and lower for low-Tg blends. HDT is not a service limit. | Under-hood brackets and sensor housings, pump and motor housings, drone and robot structures, and warm jigs that do not carry load continuously. | A 0.6 mm hardened-steel hotend is the practical requirement; the stock stainless hotend is not suitable. Dry at 85–100 °C for 8–12 h. Z-layer strength is much lower than XY, often one third to two thirds. |

> **Overview:** Polyphthalamide (PPA) is a semi-aromatic polyamide. Replacing much of the aliphatic diacid with terephthalic or isophthalic acid raises the glass transition temperature, the melting point and the stiffness, while reducing moisture uptake compared with PA6. Carbon-fibre and glass-fibre grades are among the stiffest nylons available for desktop printing, but the category is not standardized: some products are true high-aromatic PPA with a melting point near 300 °C, while others are lower-aromatic PPA/PAHT copolymers that melt near 230–260 °C. On a Snapmaker U1 the material is printable, but only at the machine's thermal limit. The practical service temperature is far below the headline HDT, and layer adhesion remains the weak point.

## 1. What PPA Is, and Why the Label Is Not a Specification

A conventional nylon such as PA6 or PA12 is built from flexible methylene chains linked by amide groups. Those chains rotate easily, so the glass transition temperature is low: roughly 50 °C for dry PA6 and lower when the polymer has absorbed water. A PA6-CF part therefore loses much of its stiffness on a hot day or in a warm engine bay.

PPA changes the backbone. A large fraction of the dicarboxylic acid monomers are aromatic terephthalic acid or isophthalic acid, which puts rigid benzene rings into the chain. Common backbones include PA6T/66, PA6T/6I and PA10T. The aromatic rings restrict chain rotation, raise the glass transition temperature into the 85–130 °C range and raise the melting point. High-aromatic grades sit at 95–130 °C; the lowest desktop blends are around 80 °C. The rings also reduce the density of polar amide groups available to bond with water, so PPA absorbs less moisture than PA6 and absorbs it more slowly.

The important caveat is that "PPA" on a spool label does not guarantee a high-aromatic backbone. Several desktop products marketed as PPA-CF are semi-aromatic copolyamides with a melting point of 230–260 °C, not the 280–305 °C of a high-aromatic PPA. The published data show the spread clearly:

- Bambu Lab PPA-CF has a glass transition temperature of 85 °C and a melting point of 258 °C.
- Siraya Tech PPA-CF has a glass transition temperature of 80 °C and a melting point of 232 °C.
- QIDI PAHT-CF, sold as PPA-CF, has a melting point of 237 °C.
- Raise3D Hyper Core PPA CF25 records a 197 °C HDT at 0.45 MPa, which is consistent with a higher-aromatic backbone.

This is why two spools labelled PPA-CF can behave very differently. Read the TDS for glass transition temperature, melting point, HDT at both loads, and whether the specimen was annealed.

### HDT Is Not a Service Temperature

Heat deflection temperature is measured with a small test bar under a defined bending load. At 0.45 MPa the load is light, and a stiff, fibre-reinforced, semi-crystalline part can record a very high HDT while still creeping under a real load held for hundreds of hours. At 1.8 MPa the same material often records a value 30–75 °C lower.

For PPA-CF, the honest reading is:

- **HDT at 0.45 MPa:** roughly 185–240 °C for high-aromatic grades, whether measured as printed or after annealing. Bambu quotes 227 °C, Raise3D quotes 197 °C after annealing, Siraya quotes 192 °C after annealing, and 3DXTech quotes 240 °C. Low-aromatic blends can be around 84 °C as printed.
- **HDT at 1.8 MPa:** roughly 82–196 °C depending on grade and annealing. Bambu quotes 196 °C, Raise3D 124 °C, Siraya 119 °C after annealing and 82.5 °C as printed, and QIDI 117.5 °C after annealing and 82 °C as printed.
- **Continuous loaded service:** about 120–150 °C for a well-annealed high-aromatic grade under light load, and lower for a low-Tg blend. Above the glass transition temperature, creep is the limiting mechanism, not immediate softening. Bambu's grade has a glass transition temperature of 85 °C, so a prudent continuous loaded limit for that specific product is closer to 85–100 °C unless you have creep data for the actual part.

A PPA-CF bracket is therefore not a substitute for a metal part in a 180 °C industrial oven. It is not a lead-free reflow soldering pallet, and it does not survive repeated excursions past 200 °C. Those claims confuse a short-term deflection test with long-term load capacity. Use PPA-CF for warm under-hood parts, not for continuous high-temperature tooling.

## 2. Properties That Matter

| Property | PPA-CF (range across grades) | PPA-GF (range across grades) | How to read the number |
| :--- | :--- | :--- | :--- |
| Density | 1.20–1.29 g/cm³ | 1.27–1.35 g/cm³ | Glass fibre usually raises density more than carbon fibre at the same loading. |
| Glass transition temperature (Tg) | 80–130 °C | 80–130 °C | High-aromatic grades are 95–130 °C; Bambu quotes 85 °C and Siraya 80 °C. |
| Melting temperature (Tm) | 230–305 °C | 230–305 °C | True high-aromatic PPA melts at 280–305 °C; many desktop blends melt at 230–260 °C. |
| HDT at 0.45 MPa | 185–240 °C for high-aromatic grades; about 84 °C for low-aromatic blends as printed | 185 °C annealed; about 84 °C unannealed | Always ask whether the specimen was annealed. |
| HDT at 1.8 MPa | 82–196 °C | 112 °C annealed | The 1.8 MPa value is the more useful indicator of load-bearing heat resistance. |
| Tensile strength, XY | 93–168 MPa | 89–94 MPa | Bambu quotes 168 MPa; Siraya 95–98 MPa; QIDI 93–96 MPa. |
| Tensile strength, Z | 30–63 MPa | 63 MPa | Layer adhesion is the weak direction on every FFF part. |
| Young's modulus, XY | 7.2–11.8 GPa | 5.7–6.0 GPa | Bambu quotes 11.8 GPa; most other PPA-CF grades are 7.2–8.7 GPa. |
| Flexural modulus, XY | 6.7–9.9 GPa | 4.2–5.0 GPa | Bambu quotes 9.86 GPa; do not describe this as 15–17 GPa. |
| Saturated water absorption | 1.30–1.37 % | 1.37 % | Bambu quotes 1.30 % at 25 °C and 55 % RH; ISO 62 values are similar. |
| Notched impact | about 6–13 kJ/m² | about 7–12 kJ/m² | Annealing raises HDT and stiffness but usually lowers impact strength. |

The numbers above are typical values from manufacturer data sheets, not a guarantee for every spool. Fibre loading, fibre length, coupling agents, backbone chemistry and specimen orientation all change the result. Compare only values measured by the same method, and treat a single tensile number as a screening tool rather than a design allowable.

### Advantages

- **High stiffness and strength for a nylon.** A well-made PPA-CF can match or exceed PA6-CF in stiffness, and it retains far more of that stiffness in humid air because the aromatic backbone and the fibre network are less affected by absorbed water.
- **Better dimensional stability than PA6 or PA12.** Moisture uptake is lower and slower, so a part holds its fit for longer in a workshop or a vehicle interior.
- **Useful heat resistance after annealing.** An annealed high-aromatic grade can hold light loads at 120–150 °C and can survive short excursions higher. That covers many under-hood brackets and warm-machine fixtures.
- **Good chemical resistance.** PPA resists fuels, oils, greases, hydraulic fluids and many coolants better than PA6. Verify the specific chemical before committing a part.
- **Low warping for a semi-crystalline polymer.** A 15–25 % fibre load and a semi-aromatic backbone reduce shrinkage compared with unfilled PA6, but they do not make warping disappear.

### Limitations

- **The U1 has no thermal headroom.** At a 300 °C ceiling, a filament that asks for 300–330 °C is being printed at or below the bottom of its window. Layer bonds and flow suffer.
- **The material is abrasive.** Carbon and glass fibre erode brass, plated copper and stainless nozzles. A hardened-steel or carbide nozzle is mandatory.
- **Layer adhesion is much weaker than in-plane strength.** Bambu's own data give 168 MPa in XY and 57 MPa in Z, with Z modulus of 4.3 GPa against 11.8 GPa in XY. Design for that anisotropy.
- **It is brittle.** Elongation at break is typically 1.5–3.2 %. It is not a tough nylon in the PA12 sense and it does not tolerate sharp impact well.
- **It is expensive and moisture-sensitive.** Prices are roughly two to six times those of PA6-CF, and wet filament produces voids and weak layers at 300 °C.
- **Annealing is a trade.** It raises HDT and stiffness but can reduce notched impact strength by roughly half, and it can distort thin parts unless they are supported.

## 3. Printing on the Snapmaker U1

### A. Drying and Storage

PPA absorbs less water than PA6, but "less" is not "little". Saturated uptake is about 1.3–1.4 %, and moisture that is already in the spool turns into steam at a 300 °C nozzle. The result is micro-voids, rough extrusion, stringing and a layer bond that can fail before the bulk material does.

Dry the spool at **85–100 °C for 8–12 hours** in a convection oven or a high-temperature filament dryer. This is the common safe window across the brands discussed here. Bambu permits 100–140 °C for 8–12 hours and notes that the higher end works better; Siraya and QIDI publish 80–100 °C for 4–6 hours. Follow the spool's own instruction, but do not exceed the spool's temperature rating. Most consumer dryers top out at 65–70 °C, which is enough to maintain a dry spool but not to dry a wet one. Bambu's cardboard spool is rated to 145 °C, so it tolerates the higher end of that schedule, but check the rating of any third-party spool before baking it.

Store the spool sealed with fresh desiccant at **below 15–20 % RH**, and print from a dry box or a heated dryer rather than from an open spool holder. A long print can absorb enough moisture on the outside of the filament to change the surface finish. See [[01 - Drying Filament]], [[02 - Storing Filament]], and [[03 - Combining Storing and Drying - Science and Rational Approach]].

### B. Hotend and Nozzle

The stock U1 hotend is a 0.4 mm stainless-steel unit in which the heat sink, heat break, heater block and nozzle are one integrated assembly. The nozzle cannot be swapped on its own. Stainless steel is softer than hardened tool steel, and carbon-fibre PPA will wear it. For any regular PPA-CF or PPA-GF work, fit the official Snapmaker hardened-steel hotend.

**Use a 0.6 mm hardened-steel nozzle as the default.** It gives a better balance of clog resistance, fibre passage and melt capacity than 0.4 mm, and it suits the 0.18–0.30 mm layers that structural parts usually need. A 0.4 mm hardened nozzle can work, but it clogs more readily and limits flow. A 0.2 mm nozzle is not suitable at all.

Snapmaker sells the hardened hotends as four-packs of a single diameter, and the company does not support mixing diameters in one print. Buying a 0.6 mm set is therefore a commitment for all four toolheads. An OrcaSlicer 2.2+ workaround with percentage line widths and a shared layer height has been reported to work for 0.4 mm plus 0.6 mm, but it is a community workaround, not stock capability.

At 300 °C the hotend is at its firmware limit. There is no thermal headroom to compensate for a high-flow nozzle, a cold chamber or a fast print. Keep the melt path short and the flow conservative.

### C. Nozzle Temperature, Bed and Chamber

- **Nozzle temperature:** set **290–300 °C**. Start at 300 °C for Siraya, QIDI and Raise3D grades that publish 300–320 °C or higher, and at 290–300 °C for Bambu, whose window is 280–310 °C.
- **Bed temperature:** set **90–100 °C**. The U1 cannot reach the 110–120 °C beds that 3DXTech and some other data sheets recommend, so 100 °C is the practical maximum. Use a smooth or textured PEI plate with PVP glue stick, Magigoo PA or a similar high-temperature adhesion aid. Add a 5–10 mm brim for large, flat parts.
- **Chamber temperature:** close the Top Cover and allow 20–30 minutes of heat soak. A passive chamber reaches roughly **45–50 °C**, which is at the bottom of Bambu's 50–80 °C recommendation. A BIQU Panda Breath can hold **60 °C**, but stock U1 firmware does not control it. It requires paxx12's Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode, or DragonBreath, and **active motherboard cooling is mandatory** because the RK3562 begins throttling at 85 °C. A 6015 driver-only fan does not cool the RK3562 and is not sufficient on its own; fit a full-board cooler. Do not run a chamber heater without one. Without those modifications, treat the U1 as a passive-chamber machine.

Never set a 65 °C chamber or a 110 °C bed in a profile for this printer. Those numbers come from larger enclosed machines; the U1 will either reject them or produce a failed print.

### D. Flow, Speed, Cooling and Retraction

The U1's 32 mm³/s hotend figure was measured with Snapmaker ABS at 280 °C. It is not a PPA-CF number. PPA-CF is more viscous and more abrasive, and the U1's 300 °C ceiling limits how much you can raise temperature to compensate, so use much lower flow:

- **0.4 mm nozzle:** 5–8 mm³/s.
- **0.6 mm nozzle:** 8–12 mm³/s.

These are starting points. Run a volumetric-flow test and stop increasing speed when the extrusion becomes glossy, thin or inconsistent.

- **Walls:** 40–80 mm/s.
- **Infill:** 80–120 mm/s.
- **First layer:** 20–30 mm/s.
- **Acceleration:** 2,000–4,000 mm/s².
- **Part cooling:** 0–20 % for normal layers. Raise to 30–40 % only for steep overhangs or layers shorter than about 10 seconds. Bambu allows 0–40 %, but a strong fan on a 300 °C bead quenches the surface before the next layer can bond.
- **Retraction:** 0.8–1.4 mm at 20–40 mm/s with a direct-drive toolhead. Use a small Z-hop (0.2 mm) only if the nozzle is dragging through the part.
- **Pressure advance:** start at 0.02–0.04 and calibrate with a tower. The exact value depends on hotend, nozzle and flow.

### E. Warping, Annealing and Part Design

PPA-CF warps less than unfilled PA6, but it is still semi-crystalline and it still shrinks as it cools. Large, flat parts with sharp corners are the difficult cases. Design with fillets, chamfers and gradual thickness changes; use 4–6 perimeters and a sensible infill rather than relying on 100 % infill; orient the part so that the main load runs along the layers rather than across them.

Annealing improves heat resistance and stiffness, but it is not a universal upgrade:

- **Bambu's recommendation:** 120–140 °C for 6–12 hours.
- **QIDI and Siraya data:** 80–100 °C for 4–8 hours for the measured HDT improvement.
- **Practical approach:** use the spool manufacturer's schedule, support thin features on a flat oven-safe plate or in sand, heat and cool slowly inside the oven, and measure a test coupon before and after.

Annealing raises HDT and modulus, but it reduces notched impact strength. QIDI's data show notched Charpy falling from 10.37 to 5.62 kJ/m² after annealing. Do not anneal a part that will take shock loads. Expect a small dimensional change, typically a few tenths of a percent.

### F. Supports and Multi-Toolhead Use

The U1's four toolheads make support separation easier because the support material can have its own melt zone. Good pairings for PPA-CF are HIPS, ASA or a dedicated PA/PET breakaway support. ASA is a styrene-containing polymer, so use the Top Cover's HEPA/carbon filtration and ventilate the room. PVA is a poor choice: it is moisture-sensitive, it bonds weakly to PPA, and it offers little benefit in a dry chamber.

Set the support interface gap to 0.1–0.2 mm for normal breakaway supports. A zero-gap interface can give a flatter underside, but only when the geometry and the material pair allow clean separation; test it on a small coupon first.

The toolchanger prevents cross-contamination in a shared melt zone, but it does not eliminate ooze. Use a prime tower or a wipe sequence, and hold the PPA toolhead at a standby temperature rather than at full print temperature while the support toolhead is printing.

### G. Post-Processing

- **Do not iron PPA-CF.** Holding a 300 °C nozzle over a stationary bead degrades the polyamide and can carbonize it into a permanent blockage.
- **Scarf seams and wall ordering** work well. Inner/outer/inner ordering with a contour scarf hides the seam on the matte surface.
- **Machining** is practical because the material is stiff and has a high glass transition temperature. Use carbide tooling, sharp drills and dust extraction. Carbon-fibre dust is a respiratory and skin irritant; wear gloves, eye protection and a respirator, and wet the part or use extraction when sanding.
- **Heat-set inserts** need a soldering iron at roughly 300–320 °C, not the 220–240 °C used for PLA. Drill or print the hole slightly undersize, test on a scrap block, and remember that PPA softens gradually rather than melting like PLA.

## 4. Failure Modes and Hard Limits

| Symptom | Likely cause | What to change |
| :--- | :--- | :--- |
| Parts snap along layer lines | Nozzle too cold, fan too high, wet filament, flow too fast | Dry the spool, raise the nozzle to 300 °C, cut the fan to 0–20 %, reduce volumetric flow. |
| Corners lift or tall walls crack | Bed too cold, no chamber, fast cooling, large flat footprint | 100 °C bed, Top Cover closed, 45–50 °C chamber, brim, slower first layer, fillets. |
| Clogging or under-extrusion | 0.4 mm nozzle, fibre bundles, heat creep, low flow | Move to 0.6 mm hardened, clean the nozzle hot, raise flow slightly, check the heat break fan. |
| Filament snaps in the feed path | Brittle CF filament, tight PTFE bends, aggressive feeder tension | Use a high-arch guide, reduce feeder tension, load slowly, keep the spool near the machine. |
| Stringing and oozing | Wet filament, nozzle too hot, insufficient retraction | Dry again, drop 5–10 °C, increase retraction to 1.0–1.4 mm, use a wipe. |
| Nozzle wear or an oversized orifice | Abrasive fibre with a brass or stainless nozzle | Fit hardened steel or carbide; do not print PPA-CF with the stock stainless hotend. |
| Brown or brittle purge | Residence time at 300 °C, degraded polymer | Purge at the end of the print, do not leave the hotend idle at temperature, use a cleaning filament. |
| Part grows or loses stiffness in service | Moisture uptake after printing, creep above Tg | Dry the part, design below the continuous service limit, and avoid sustained loads above 120–150 °C (or above 85–100 °C for a low-Tg grade such as Bambu's). |

The hard limits are worth stating plainly. The U1 cannot print a PPA grade that requires a 320–340 °C nozzle the way its manufacturer intended. It cannot hold a 65 °C chamber at all: the Panda Breath tops out at 60 °C, and reaching that requires firmware and cooling modifications. It cannot reach the 110–120 °C bed temperatures that some PPA-CF data sheets specify. No PPA-CF part should be sold as a continuous 180 °C or reflow-soldering component on the strength of a 0.45 MPa HDT.

## 5. Snapmaker U1 Configuration Summary

| U1 subsystem | Recommended configuration |
| :--- | :--- |
| Hotend and nozzle | Official hardened-steel hotend, 0.6 mm preferred; 0.4 mm hardened possible; 0.2 mm not suitable. Set 290–300 °C. |
| Build plate | PEI plate at 95–100 °C with PVP glue stick or Magigoo PA; 5–10 mm brim on large parts. |
| Chamber | Top Cover closed; passive 45–50 °C after heat soak. Panda Breath at 60 °C only with paxx12/DragonBreath firmware and full motherboard cooling. |
| Part cooling | 0–20 % normal; 30–40 % only for overhangs or very short layers. |
| Feeding | Two filament feeders and four spool holders. Load brittle PPA-CF slowly and manually if the feeder slips; use a high-arch PTFE path and a dry box. |
| Drying | 85–100 °C for 8–12 h in a convection oven or high-temperature dryer; store below 15–20 % RH. |
| Multi-toolhead | With a full 0.6 mm hardened set: T1 PPA-CF, T2 PPA-GF, T3 HIPS or PA/PET support, T4 backup PPA-CF. All four nozzles must be the same diameter for an officially supported setup. |
| Safety | Ventilate the room or use the Top Cover's HEPA/carbon filtration; wear gloves, eye protection and a respirator when sanding or machining CF/GF parts. |

## 6. Real 3D-Printable Demo Models

1. **[Leopard FPV Drone](https://www.printables.com/model/1517629-leopard-fpv-drone)** — A five-inch FPV frame whose designer printed the plates in PPA-CF and the arms in PA6-GF; one builder reported annealing the PPA-CF plates. It shows where PPA-CF's stiffness and vibration damping are useful, and where a tougher nylon is still the better choice for arms that take impacts.
2. **[VESA 100x100 Monitor Rack Mount](https://makerworld.com/en/models/3052678-vesa-100x100-monitor-rack-mount)** — A load-bearing monitor mount printed in Siraya Tech PPA-CF Core. The designer reports that the printed mount is stiffer than the aluminium rack it attaches to, which is a realistic demonstration of the material's specific stiffness.
3. **[WheelStand (Onewheel GT roller attachment)](https://makerworld.com/en/models/709061-wheelstand-onewheel-gt-roller-attachment)** — A 178 g PPA-CF print that turns an Onewheel into a roll-along case. The designer notes that the PPA-CF version is noticeably stiffer than the PETG version, which is exactly the trade a structural bracket makes.
4. **[Electric motor box](https://makerworld.com/en/models/2528320-electric-motor-box)** — A 118 g PPA-CF enclosure for a motor on a ship, chosen for heat, UV and atmospheric resistance. It is a sensible use of the material: a warm, humid environment with moderate loads, not a 200 °C oven.
5. **[Ringing Bell (PPS-CF/PPA-CF)](https://makerworld.com/en/models/1255175-ringing-bell-pps-cf-ppa-cf)** — A bell designed specifically for PPS-CF or PPA-CF. It demonstrates the metallic ring and high stiffness of a well-bonded PPA-CF part. The designer's profile uses a 120 °C bed and a 300 °C nozzle on an X1C; on the U1, cap the bed at 100 °C and expect a greater adhesion challenge.

## 7. Videos Worth Watching

1. **[Bambu Lab PPA-CF: the STRONGEST filament ever (I tested so far)](https://www.youtube.com/watch?v=IXlrUWSz_xY)** — My Tech Fun's full test covers tensile strength, layer adhesion, shear, torque, bending, temperature and creep. It is the best single check on the claim that PPA-CF is the strongest desktop filament.
2. **[Creality PPA-CF filament review, the strongest nylon type I tested so far](https://www.youtube.com/watch?v=4kAyqE8Rl0M)** — My Tech Fun tests a much cheaper PPA-CF and reports its strength and print behaviour. It is useful for judging whether the premium brands justify their price.
3. **[PPA: The Strongest Filament Type? Testing Regular, CF, and Core by Siraya Tech](https://www.youtube.com/watch?v=nM0GR_x2iQs)** — My Tech Fun compares unfilled PPA, PPA-CF and a core-shell PPA-CF. It shows how much of the stiffness comes from the fibre and how core-shell construction affects layer strength.
4. **[IPCON PPA-CF vs PPA-GF: One Is the Strongest Filament I've Ever Tested](https://www.youtube.com/watch?v=MxEZZ7XkV_M)** — A direct comparison of carbon-fibre and glass-fibre PPA using the same test method, including brittleness and moisture behaviour. It is the clearest illustration of why CF and GF grades are not interchangeable.
5. **[I Tested PPA-CF Filament and It's INSANELY Strong!](https://www.youtube.com/watch?v=OWH_N9PmjeY)** — Clough42 had to reinforce his tensile tester to break Bambu PPA-CF samples. The video is a practical demonstration of the material's strength and of how difficult it is to test properly.

## 8. Commercial Filament Directory

Only a handful of brands sell a filament that is genuinely PPA-based. Several products sold as "PPA" are lower-aromatic PAHT copolymers, and some well-known names do not exist at all: Polymaker's Fiberon line has no PPA-CF25 or PPA-GF, and 3DXTech's product is CarbonX HTN+CF, not a "PPA+CF Gen 3". The table lists products whose product page or TDS confirms a PPA base and whose link was checked in October 2026. Prices are approximate, in US dollars, and exclude shipping and tax.

| Product | Type and reinforcement | Published print window | Approximate price | U1 fit and link |
| :--- | :--- | :--- | :--- | :--- |
| **Bambu Lab PPA-CF** | Semi-aromatic PPA with carbon fibre | 280–310 °C nozzle; 100–120 °C bed; 50–80 °C chamber | $149.99 for 0.75 kg (about $200/kg) | Best match to the U1: 300 °C nozzle is mid-window, but the bed is capped at 100 °C and the passive chamber at about 50 °C. [Bambu Lab Store](https://us.store.bambulab.com/products/ppa-cf) |
| **Siraya Tech Fibreheart PPA-CF** | PPA with 15 % chopped carbon fibre | 300–320 °C nozzle; 70–90 °C bed | $56.69/kg on sale, $69.99 list | At the U1 limit: the nozzle is at the bottom of its window. HDT is 192 °C only after annealing and 84.5 °C as printed at 0.45 MPa. [Siraya Tech Store](https://siraya.tech/products/siraya-tech-fibreheart-paht-cf-colors-1-75mm-ppacf-filament-fdmprinting) · [Amazon](https://www.amazon.com/dp/B0DKW7B6NT) |
| **Siraya Tech Fibreheart PPA-CF Core** | PPA with a 25 % carbon-fibre core and fibre-poor skin | 280–320 °C nozzle; 80 °C bed | $84.99/kg on sale, $99.99 list | At the U1 limit. The core-shell construction is intended to improve Z strength and surface finish. [Siraya Tech Store](https://siraya.tech/products/siraya-tech-fibreheart-ppa-nylon-based-paht-cf-core-3d-printing-filament) |
| **Siraya Tech Fibreheart PPA-GF** | PPA with 15 % glass fibre | 300–320 °C nozzle; 80–110 °C bed; 60–80 °C chamber | $45.59/kg on sale, $59.99 list | At or beyond the U1 limit: the chamber request exceeds a passive U1 and the nozzle is at the ceiling. It is electrically insulating, but glass fibre is still abrasive. [Siraya Tech Store](https://siraya.tech/products/fibreheart-ppa-gf-filament) |
| **QIDI PAHT-CF (PPA-CF)** | Semi-aromatic PPA with 15 % carbon fibre | 300–320 °C nozzle; 70–90 °C bed | $62.99/kg | At the U1 limit. QIDI's own data show HDT rising from 84.8 °C as printed to 190.7 °C after annealing at 0.45 MPa. [QIDI US Store](https://us.qidi3d.com/products/qidi-paht-cf-carbon-fiber-filament) |
| **QIDI UltraPA-CF25** | PPA with 25 % carbon fibre and a skin-core structure | 300–340 °C nozzle | $99.99/kg | Beyond the U1: the nozzle window starts at the machine's maximum. Buy it only if you also have a 340 °C-class printer. [QIDI US Store](https://us.qidi3d.com/products/ultrapa-cf25-filament) |
| **Raise3D Hyper Core PPA CF25** | PPA with a 25 % carbon-fibre-rich core | 300–330 °C nozzle; 70–80 °C bed | $229/kg | Beyond the U1: 300 °C is the bottom of the window. HDT is 197 °C at 0.45 MPa and 124 °C at 1.8 MPa after annealing. [Raise3D Store](https://www.raise3d.com/products/raise3d-hyper-core-ppa-cf25-filament) |
| **Raise3D Hyper Core PPA GF25** | PPA with 25 % glass fibre | 300–330 °C nozzle; 70–80 °C bed | $209/kg | Beyond the U1 for the same reason. The glass-fibre grade is intended for wear and electrical parts rather than maximum stiffness. [Raise3D Store](https://www.raise3d.com/products/raise3d-hyper-core-ppa-gf25-filament/) |
| **3DXTech CarbonX HTN+CF** | High-temperature semi-aromatic nylon with carbon fibre | 285–315 °C nozzle; 110–120 °C bed; heated chamber recommended | $200 for 500 g; $425 for 2 kg | A poor match: the U1 cannot reach the specified bed temperature or the recommended chamber. It is a capable industrial material on the right machine. [3DXTech Store](https://www.3dxtech.com/products/carbonx-htn-cf) |
| **Creality PPA-CF** | PPA with 15 % carbon fibre | Not published on the product page I checked; Creality claims 220 °C heat resistance | $75.99/kg | A budget option, but the missing nozzle and bed window make it a gamble. Test a small spool before committing. [Creality Store](https://store.creality.com/products/ppa-cf-filament-1-75mm-1kg) · [Amazon](https://www.amazon.com/dp/B0DMSX1LH2) |

> **Buying note:** The Bambu spool is the only product in this list with published headroom above 300 °C at the nozzle and a chamber range that starts at the U1's passive temperature. Everything else is either at the machine's 300 °C ceiling, above its 100 °C bed, or both. That does not make the other filaments unusable, but it does mean the U1 is not the printer their data sheets were written for.

## 9. Related Notes

- [[00 - Filament Master Index]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]

## 10. Sources

- Bambu Lab, *PPA-CF Technical Data Sheet*, V1.0: [PDF](https://store.bblcdn.com/05b0e4ca5ee14a4cb378cfa48df24f91.pdf).
- Bambu Lab, *PET-CF / PPA-CF / PPS-CF / PA6-CF filament usage guide*: [Wiki](https://wiki.bambulab.com/en/filament/petcf_ppacf).
- Bambu Lab, *PPA-CF product page*: [Store](https://us.store.bambulab.com/products/ppa-cf).
- Siraya Tech, *Fibreheart PPA-CF TDS*: [TDS](https://siraya.tech/pages/siraya-tech-fibreheart-paht-cf-ppa-based-tds).
- Siraya Tech, *Fibreheart PPA-GF TDS*: [TDS](https://siraya.tech/pages/fibreheart-ppa-gf-tds).
- QIDI Tech, *How to print PAHT-CF (PPA-CF): settings, drying and annealing*: [Guide](https://qidi3d.com/blogs/guides/how-to-print-paht-cf-filament).
- Raise3D, *Hyper Core PPA CF25*: [Materials page](https://www.raise3d.com/materials/hyper-core-ppa-cf25/).
- Raise3D, *Hyper Core PPA GF25*: [Materials page](https://www.raise3d.com/materials/hyper-core-ppa-gf25/).
- 3DXTech, *CarbonX HTN+CF*: [Product page](https://www.3dxtech.com/products/carbonx-htn-cf).
- Creality, *PPA-CF filament*: [Product page](https://store.creality.com/products/ppa-cf-filament-1-75mm-1kg).
