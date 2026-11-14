---
title: "09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)"
tags:
  - 3d-printing
  - filaments
  - tpu
  - tpe
  - flexible-filament
  - shore-hardness
  - foaming-tpu
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **95A standard:** 210–240 °C | Not required. Ambient, with the chamber below about 35–40 °C. | HDT at 0.45 MPa is roughly 50–65 °C; continuous load-bearing service is best kept below about 50 °C. | Grippers, gaskets, phone cases, vibration mounts, cable strain relief. | Dry at 55–65 °C for 6–8 hours. A 0.4 mm stainless nozzle works; 0.6 mm is easier. Use glue stick on PEI as a release layer. |
| **95A high-flow:** 220–245 °C | Not required. Ambient. | The same as standard 95A, because the polymer base is similar. | Footwear midsoles, large flexible panels, parts that would otherwise print too slowly. | Up to about 12 mm³/s on hardware that can melt it. The U1's 32 mm³/s ceiling is not the limiting factor here. |
| **85A and softer:** 215–240 °C | Not required. Ambient. | HDT at 0.45 MPa is roughly 45–60 °C; keep loaded parts below about 45 °C. | Soft seals, compliant grips, wearables, prosthetic liners. | Not officially supported by Snapmaker, which lists TPU of 90A and harder. Treat 85A and 70A as experimental. Print slowly through a short, low-drag path. |
| **LW-TPU (foaming):** 200–250 °C, set by the expansion you want | Not required. Ambient. | Foamed layers are softer and weaker, so keep service below about 50 °C and avoid sustained load. | Lightweight cosplay armour, cushioning, low-density props, variable-hardness soles. | The base grade is about 92A and can expand to roughly 55A. Drying and foaming behaviour are brand-specific; dry at 40–50 °C and test each spool. |

> [!abstract] Overview
> Thermoplastic polyurethane (TPU) is a block copolymer with hard segments that act as physical cross-links and soft segments that provide elasticity. It prints on a normal FDM machine, bonds to itself well enough to make functional seals and hinges, and absorbs impact far better than any rigid filament. Thermoplastic elastomer (TPE) is the wider family that contains TPU.
>
> The Snapmaker U1 handles TPU well because each toolhead carries its own melt zone and the machine swaps whole toolheads instead of sharing one melt zone between materials. Snapmaker's official compatibility note is specific: TPU of 90A Shore hardness and above is supported, while softer grades are still under validation. That makes 95A and 90A everyday materials on this machine and makes 85A, 70A and foaming LW-TPU experimental.
>
> The two things that most often go wrong are moisture and excessive back pressure. Wet TPU foams at the nozzle and strings badly, and soft TPU buckles between the drive gear and the melt zone when the flow rate is too high for the nozzle and temperature.

## 1. What TPU and TPE are

TPU is a linear block copolymer. The hard segments are built from a diisocyanate such as MDI (methylene diphenyl diisocyanate) and a short-chain diol chain extender such as 1,4-butanediol. The soft segments are long polyether or polyester macroglycols. At room temperature the hard segments segregate into glassy or semicrystalline domains and hydrogen-bond to one another, and those domains act as reversible physical cross-links. Heating the polymer above the softening range of the hard segments lets it flow, which is why the material can be extruded and re-melted.

The soft-segment chemistry decides how the printed part behaves in service:

- **Polyester-based TPU** has better abrasion resistance, tear strength and resistance to oils and fuels. It is also more vulnerable to hydrolysis, so moisture control matters even more.
- **Polyether-based TPU** resists hydrolysis, microbial attack and low temperatures better, which suits outdoor parts, seals and anything that will live in damp conditions.

TPE is an umbrella term rather than a single polymer. It includes TPE-U (TPU), TPE-A (polyether block amide, usually called PEBA), TPE-E (copolyester elastomer) and TPE-S (styrenic block copolymers such as SEBS). TPU and PEBA are the two that dominate flexible FDM filament. SEBS compounds are also sold as flexible filament, but they tend to string heavily and bond poorly between layers.

Shore hardness is measured with a durometer (ASTM D2240 or ISO 868) and describes indentation resistance, not stiffness of a printed part. A 95A part with two walls and 10% infill feels much softer than a solid 95A part, so geometry is the main tool for tuning compliance.

| Property | TPU 95A | TPU 85A | High-flow TPU 95A | Foaming LW-TPU |
| :--- | :--- | :--- | :--- | :--- |
| Shore hardness | 95A | 85A | 95A | About 92A unfoamed, down to about 55A at full expansion |
| Glass transition of the soft segment | About −50 to −20 °C | About −50 to −30 °C | About −50 to −20 °C | About −40 to −25 °C |
| Softening range of the hard segments | About 160–210 °C | About 150–200 °C | About 160–210 °C | About 150–200 °C |
| HDT at 0.45 MPa | About 50–65 °C | About 45–60 °C | About 50–65 °C | Lower than the solid grade, and lower again as expansion increases |
| Tensile strength (moulded specimen) | About 30–50 MPa | About 20–30 MPa | About 30–45 MPa | About 10–25 MPa, depending on density |
| Elongation at break (moulded specimen) | About 400–600% | About 500–800% | About 400–600% | About 300–500% |
| Density | About 1.15–1.25 g/cm³ | About 1.10–1.20 g/cm³ | About 1.15–1.25 g/cm³ | About 0.6–1.15 g/cm³ |

Two cautions apply to the whole table. Manufacturer data comes from injection-moulded test bars, not printed parts, and printed parts are weaker and less ductile across layer boundaries. Shore hardness also shifts with temperature: a 95A part that feels firm at 20 °C feels noticeably softer at 45 °C.

### Why the material behaves the way it does

The hard domains give TPU its tensile strength, elastic recovery and creep resistance. The soft domains give it elongation and low-temperature flexibility. Because the cross-links are physical rather than covalent, TPU can be re-melted, welded and recycled, but it also creeps under sustained load and loses stiffness as it warms. That combination explains most of the practical advice in this note: TPU is excellent for short-term impact and flexure, and mediocre for sustained load at elevated temperature.

TPU also absorbs moisture. Water molecules diffuse into the amorphous soft phase and, at printing temperature, turn to steam. The result is popping, micro-bubbles, rough surfaces and weak welds. Polyester TPU adds a second problem, because water plus heat causes hydrolytic chain scission that permanently reduces molecular weight. Drying is not optional.

## 2. Printing TPU on the Snapmaker U1

The U1 holds four spools and feeds them through two filament feeders, one serving toolheads 1 and 2 and the other serving toolheads 3 and 4. That arrangement is fine for 95A. Feed-path drag becomes the limiting factor only with the soft grades, where the filament has little column stiffness and any long, curved run adds friction.

### Drying and storage

Dry standard 95A TPU at 55–65 °C for 6–8 hours in a forced-convection dryer. Polymaker specifies 65 °C for 8 hours for PolyFlex TPU95 and Overture specifies 70 °C for 7 hours for its TPU, so the exact figure should follow the spool you bought. Do not go far above 70 °C: soft TPU windings can soften, deform and block on the spool, and a spool that has been overheated is difficult to recover.

Dry foaming LW-TPU more gently, at 40–50 °C, because the chemical blowing agent can begin to react if the whole spool is held hot for a long time.

Store dried spools in a sealed box or vacuum bag with fresh desiccant and keep the internal humidity below about 15–20% relative humidity. Printing from a heated dry box at 40–50 °C is the most reliable arrangement for long prints. See [[01 - Drying Filament]] and [[02 - Storing Filament]] for the general method, and [[03 - Combining Storing and Drying - Science and Rational Approach]] for why desiccant alone cannot dry a wet spool.

### Nozzle and hotend choice

The stock 0.4 mm stainless steel hotend prints 95A TPU without problems. Stainless steel has lower thermal conductivity than brass, but the melt zone is short and the material is easy to melt, so the practical difference on this machine is small.

- **0.4 mm** is the general-purpose choice and the best starting point for 95A on the U1.
- **0.6 mm** is the better choice for 85A and for LW-TPU. Orifice pressure drop scales roughly with 1/r⁴, so at the same volumetric flow a 0.6 mm nozzle needs about one fifth of the pressure of a 0.4 mm nozzle, and a 0.8 mm nozzle needs about one sixteenth. Real TPU is shear-thinning, so the measured improvement is smaller than that, but the direction is correct and the effect on buckling is large.
- **0.2 mm** is not recommended for flexible filament. The pressure required is high, flow rates are tiny, and the risk of the filament buckling behind the nozzle rises sharply.
- **Hardened steel** is only needed for abrasive grades such as glass-fibre-reinforced TPU or glow-in-the-dark TPU. If you use it, expect to raise the nozzle temperature by about 5–10 °C to compensate for the lower thermal conductivity. See [[04 - Nozzles and Their Types]].

Remember that the U1's official hardened-steel hotends are sold as four-packs of a single diameter, and Snapmaker does not support mixing diameters in one print.

### Nozzle, bed and chamber temperatures

- **95A standard:** set the nozzle to 210–240 °C. Bambu Lab specifies 230 °C for its TPU 95A and TPU 95A HF, Polymaker specifies 210–230 °C for PolyFlex TPU95, and Overture specifies 210–240 °C. Start at 230 °C.
- **95A high-flow:** set the nozzle to 220–245 °C. These grades are formulated for lower viscosity, and the higher end of the range helps them keep up with faster printing.
- **85A and softer:** set the nozzle to 215–240 °C. Softer grades are not automatically cooler to print. They often need a little more heat to reduce viscosity, because the extruder is already working close to its buckling limit.
- **Foaming LW-TPU:** the nozzle temperature controls expansion, so it is a process variable rather than a fixed setting. The useful window is roughly 200–250 °C.

Set the bed to 30–45 °C. A hot bed is not needed for adhesion and makes removal harder. Some manufacturers allow bed temperatures up to 60 °C, but on a PEI sheet there is no benefit and a real risk of over-bonding.

Do not use active chamber heating. Snapmaker lists TPU as a bare-material capability that does not need the Top Cover, and the physical reason is straightforward: warm air around the toolhead softens the filament above the melt zone, and soft filament buckles more easily. Keep the chamber at ambient temperature and below about 35–40 °C. If you fit the Top Cover for noise or filtration, leave it vented and watch the chamber reading. Never run the BIQU Panda Breath heater while printing TPU. See [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]].

### Build plate and release

Textured PEI is the practical surface, and a glue stick is the release layer. TPU adheres to PEI very strongly, especially on large flat contact areas, and a part that is still warm can pull the coating or tear itself when it is lifted. Apply a thin, even layer of glue stick, let the plate cool completely before removing the part, and flex the sheet rather than prying.

A few drops of water or isopropyl alcohol worked under the edge of a stuck part can help it release. Do not use a metal scraper on PEI.

Smooth PEI is riskier than textured PEI for large TPU parts because the contact area is more continuous. If you print TPU on smooth PEI, use the release layer every time.

### Part cooling

Start with no fan on the first layer, then run the part-cooling fan at full speed. Bambu Lab's stock TPU profile uses 100% part cooling after the first layer, and that is a sensible default on the U1 as well.

Lowering the fan to roughly 50–70% can improve layer bonding and reduce the chance of the part lifting at the edges, but it costs overhang quality and surface finish. That is a tuning choice, not a requirement, and there is no reason to switch cooling off entirely. TPU does not need the aggressive cooling that PLA does, but it does need enough to freeze the bead before it sags.

### Speed, volumetric flow, retraction and pressure advance

The numbers below are starting points for a 0.4 mm nozzle and a 0.2 mm layer. Tune upward in small steps and watch the extruder rather than the screen.

| Grade | Volumetric flow | Equivalent print speed | Retraction |
| :--- | :--- | :--- | :--- |
| 95A standard | 3–5 mm³/s | About 40–60 mm/s | 0.5–1.5 mm at 20–30 mm/s |
| 95A high-flow | 8–12 mm³/s | About 100–150 mm/s | 0.8–1.5 mm at 25–35 mm/s |
| 85A and softer | 1.5–3 mm³/s | About 20–35 mm/s | 0.2–0.8 mm at 15–25 mm/s |
| Foaming LW-TPU | 2–3.5 mm³/s | About 25–45 mm/s | 0–0.5 mm, often zero |

Bambu Lab's published figures give a useful reality check: its TPU 95A HF is rated at 12 mm³/s and 147 mm/s, while its standard TPU 95A is rated at 3.6 mm³/s and 44 mm/s. That is roughly a threefold difference from rheology alone, and it is why "high-flow TPU" is a genuinely different product rather than a marketing label.

Keep acceleration moderate, around 1,000–3,000 mm/s², so that tall flexible features do not wobble under the nozzle. Travel moves can be faster, around 250–350 mm/s, because a quick travel helps break the string before it lands.

Retraction should be short. A direct-drive toolhead does not need the long retractions used on Bowden machines, and a long pull on soft filament tends to drag the whole strand rather than relieve pressure. Disable Z-hop or use a small spiral Z-hop of about 0.2 mm.

Pressure advance needs to be higher than for rigid filament because the strand stores elastic energy between the drive gear and the nozzle. Start around 0.05–0.15 for 95A and 0.15–0.35 for 85A, then run a tower test. If the extruder chatters at corners, reduce the pressure-advance smooth time or lower the acceleration.

### Layer height and line width

On a 0.4 mm nozzle, use a layer height of 0.16–0.28 mm. Very thin layers increase back pressure for little benefit, and layers below about 0.12 mm make extruder skipping more likely.

Use a line width of about 105–125% of the nozzle diameter, which is 0.42–0.50 mm on a 0.4 mm nozzle. Slightly wider extrusions improve fusion between perimeters and make the bead less likely to tear. See [[05 - Layer Height and Nozzle Size]].

## 3. Design rules that matter more than slicer settings

### Printed TPU is anisotropic

A moulded TPU specimen can stretch several hundred percent before it breaks. A printed part cannot be assumed to do the same. The bond between layers is a thermal weld, not a continuous polymer chain, and it is the weak direction in tension, peel and fatigue. Seams, sharp corners and layer starts are the places where flexible parts usually fail.

Design so that the load runs in the plane of the layers where possible, round off internal corners, and avoid features that concentrate strain at a layer boundary. If a part must take repeated bending, give it a generous radius and a gradual thickness change rather than a sharp notch.

### Buckling in the filament path

The filament column between the drive gear and the melt zone behaves like a slender column in compression. If the push force needed to overcome nozzle back pressure exceeds the column's buckling load, the filament bows sideways and wraps around the drive gear. The critical load falls rapidly as the unsupported free length grows, which is why a short, straight, well-supported path matters so much.

Euler's formula, P_cr = π²EI/(KL)², explains the trend even though it does not give a usable number for a real extruder. Reducing the free length L raises the critical load quadratically, and reducing back pressure lowers the force the extruder must supply. In practice that means:

- Keep the path from spool to toolhead short and straight.
- Use a larger nozzle and a higher melt temperature when the extruder struggles.
- Keep volumetric flow within the limits in the table above.
- Avoid long retractions and repeated short retractions in the same spot.

### Tuning compliance with geometry

Infill density, wall count, top and bottom layer count, and infill pattern all change how a printed part feels. A gyroid or 3D honeycomb at 15–25% infill gives a predictable spring rate with reasonable fatigue life. Adding walls raises stiffness quickly, because the walls carry most of the bending load.

For grippers and seals, it is usually better to design a specific flexure than to print a solid block of soft TPU. A well-designed 95A flexure can be more predictable than a poorly designed 85A part.

### Living hinges and seals

A living hinge works when the bend is spread over a thin section with a large radius and no sharp notch. TPU tolerates far more bending than rigid plastics, but the hinge still accumulates fatigue damage, and printed hinges fail earlier than moulded ones because the layer boundaries act as crack paths.

Seals work best as a compression element with a defined squeeze, typically around 15–25% of the gasket thickness, trapped in a groove that prevents it from being extruded sideways. A flat printed gasket that is simply clamped between two plates will leak at the corners unless the groove constrains it.

## 4. Multi-material printing on the U1

The U1's four toolheads give it a real advantage for flexible parts, because each material has its own melt zone and there is no shared filament path to purge. That does not remove the need for a prime or wipe tower, and it does not make any two polymers bond chemically.

**PLA as a support interface for TPU.** PLA and TPU do not weld to each other, so PLA is a good interface material for overhangs and internal cavities in TPU parts. A zero-gap interface can work, but start with a small gap and test, because the TPU can still mechanically lock into a rough PLA surface. This is a widely used community practice rather than an official Snapmaker profile, and Siraya Tech's U1 printing guide describes the same approach.

**Rigid and flexible parts in one print.** Snapmaker's material compatibility matrix lists TPU and PETG as a compatible pair, but compatibility in that table means the two materials can be printed in the same job without obvious processing conflict. It does not mean they form a chemical bond. TPU adheres to PETG, PLA, ABS, ASA, PC and PA mainly by mechanical interlocking and secondary thermal fusion, and the joint is usually the weakest part of the print.

Design the interface deliberately:

- Add dovetails, through-holes, ribs or a lattice that crosses the boundary so the two materials grip each other.
- Give the interface a generous contact area and avoid a straight butt joint in tension.
- Test the joint in the direction it will actually be loaded, not just by pulling it apart by hand.

One common misconception is worth correcting here. OrcaSlicer and PrusaSlicer have an "interlocking beam" option, but it applies to support structures, where it makes supports easier to break away. It is not a feature that interlocks two model materials at a part boundary. Interlocking between TPU and a rigid polymer has to be designed into the geometry.

**Toolchange waste.** Even with four toolheads, each switch needs a prime or wipe. For small flexible parts the wipe tower can be a significant fraction of the print, so group the TPU sections together in the object order where the geometry allows.

## 5. Foaming LW-TPU

Foaming LW-TPU contains a chemical blowing agent that decomposes in the 200–250 °C range and releases gas into the melt. The slicer's flow multiplier is reduced as expansion increases, so the same spool can produce a dense 92A part at the low end of the temperature range and a soft, low-density foam at the high end.

ColorFabb varioShore is the reference product and the one with the clearest published behaviour: it prints at about 92A when it is not expanding and falls to roughly 55A at full expansion, which is why it is often used for single-material footwear and cosplay parts with graded hardness. Other brands use different blowing agents and different temperature windows, so the numbers do not transfer directly. Read the spool's own guidance and test a small tower before committing to a long print.

Practical points:

- Dry the spool gently, at 40–50 °C, and never leave it in a hot dryer for many hours.
- Print from a stable temperature. A fluctuating hotend produces visible bands of different density.
- Expect the extruded bead to expand after it leaves the nozzle, so calibration cubes need to be measured, not assumed.
- Foamed parts are weaker in tension and compression than solid TPU, and they are not suitable for structural loads or repeated abrasion.
- Retraction is largely ineffective because the melt is full of gas. Use "avoid crossing walls" and continuous paths instead.

## 6. Post-processing and joining

Stringing is best removed with a quick pass of a heat gun at around 200 °C. Keep the nozzle moving and do not hold it in one place, because TPU deforms quickly. A sharp blade or flush cutter works better than sandpaper for blobs.

Sanding tears soft TPU and produces a fuzzy surface. If a part must be machined or ground, freeze it first and use a sharp, high-speed cutter.

Standard cyanoacrylate is brittle and cracks when the joint flexes. Flexible cyanoacrylate, polyurethane adhesive such as Shoe Goo, or contact cement gives a joint that can move with the part. Solvent welding with tetrahydrofuran (THF), dimethylformamide (DMF) or cyclohexanone softens the surfaces and produces a strong weld, but all three are hazardous: use them only with local exhaust ventilation, gloves and eye protection, and keep them away from ignition sources.

Painting flexible parts needs a flexible primer or adhesion promoter, otherwise the paint cracks at the first bend. See [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]].

## 7. Troubleshooting

| Symptom | Likely cause | What to change |
| :--- | :--- | :--- |
| Popping, hissing, bubbles and a rough surface | Wet filament | Dry at 55–65 °C for 6–8 hours and print from a dry box. |
| Filament wraps around the drive gear | Back pressure above the buckling load | Raise the nozzle temperature, reduce flow, use a larger nozzle, shorten the path. |
| Severe stringing | Moisture, too little retraction, or too high a temperature | Dry the spool first, then shorten retraction and lower the temperature by 5–10 °C. |
| Gaps and under-extrusion after a travel move | Elastic energy in the strand plus a long path | Reduce travel length, lower acceleration, or increase pressure advance slightly. |
| Part is impossible to remove from PEI | No release layer, or removal while hot | Use glue stick, let the plate cool, and flex the sheet. |
| Layer separation in a flexible part | Cool layer, contaminated surface, or too much fan | Raise the nozzle temperature slightly, reduce fan to 50–70%, and check for dust or oil. |
| Foamed part is uneven or collapsed | Unstable temperature or moisture | Stabilise the hotend temperature, dry the spool, and recalibrate the flow multiplier. |
| Part feels much softer than the spool rating | Low infill and few walls | Add walls or increase infill; hardness is a material property, stiffness is a geometry property. |

See [[10 - Common Printing Issues, Debugging, and Physical Limits]] for faults that are not specific to flexible filament.

## 8. Demo models worth printing

These models are useful tests of a flexible setup. Every link below was checked against the Printables GraphQL API or the MakerWorld design API, and the titles are the real titles returned by those APIs.

1. **[Compliant Gripper](https://www.printables.com/model/221877-compliant-gripper)** (Printables, by Igor A). A single-piece compliant gripper inspired by the Formlabs design. The designer's notes mention nylon, and the same flexure geometry is a good test of how a soft material behaves in a hinge that has to open and close repeatedly.
2. **[TPU Case Minimal phone](https://makerworld.com/en/models/1061304-tpu-case-minimal-phone)** (MakerWorld, by mameise). A phone case designed specifically for TPU. It tests wall thickness control, corner strength and dimensional accuracy on a thin, large-footprint part.
3. **[Parametric TPU Gasket / Washer Generator](https://www.printables.com/model/1765075-parametric-tpu-gasket-washer-generator)** (Printables, by Dan Sabau). An OpenSCAD generator for circular gaskets and washers. It is a practical way to test compression set, surface finish on the top and bottom faces, and whether your extrusion is actually airtight.
4. **[Totally Knurly Threaded Jars - TPU Seal - 3 Sizes](https://makerworld.com/en/models/1694880-totally-knurly-threaded-jars-tpu-seal-3-sizes)** (MakerWorld). A threaded container with a printed TPU gasket. It demonstrates the real use case for flexible filament on a multi-material machine: a rigid body with a soft, compressible seal.
5. **[TPU/PP: Box 40x40 living hinge (flex)](https://www.printables.com/model/18193-tpupp-box-40x40-living-hinge-flex)** (Printables, by 3Dietrich). A small box with a living hinge intended for TPU or polypropylene. It is a direct test of hinge fatigue and of how layer orientation affects repeated bending.

## 9. Products

All links in this table were confirmed live in October 2026 and point to the manufacturer's own product page. Prices change constantly and are deliberately not listed; check the vendor page before ordering.

| Product | Shore hardness | Officially supported on the U1? | Notes | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Bambu Lab TPU 95A HF** | 95A | Yes, because it is 95A | Rated at 230 °C, 12 mm³/s and 147 mm/s. A high-flow grade that behaves very differently from standard TPU. | [Bambu Lab store](https://us.store.bambulab.com/products/tpu-95a-hf) |
| **Polymaker PolyFlex TPU95** | 95A | Yes | 210–230 °C, 25–60 °C bed, 20–40 mm/s, 65 °C for 8 hours drying. Elongation at break is quoted as about 551% (ISO 527). | [Polymaker store](https://us.polymaker.com/products/polyflex-tpu95) |
| **Overture TPU 95A** | 95A | Yes | 210–240 °C, 35–50 °C bed, drying at 70 °C for 7 hours. A low-cost spool that is widely available. | [Overture store](https://overture3d.com/products/overture-tpu) |
| **eSUN TPU-95A** | 95A | Yes | A general-purpose 95A grade marketed for faster printing than older TPU formulations. | [eSUN store](https://www.esun3d.com/etpu-95a-product/) |
| **SUNLU TPU 95A** | 95A | Yes | Budget-friendly 95A TPU with a wide colour range. | [SUNLU store](https://www.sunlu.com/products/tpu-95a-flexible-filament) |
| **SainSmart GT-3 High-Speed 95A TPU** | 95A | Yes | The GT-3 is the high-speed grade. Note that the generic SainSmart TPU listing sold under a different ASIN is a standard 95A product, not the GT-3. | [SainSmart store](https://www.sainsmart.com/products/gt-3-flexible-tpu) |
| **Snapmaker TPU** | 95A | Yes | Sold by the printer manufacturer and the safest choice for a first TPU print on the U1. | [Snapmaker store](https://www.snapmaker.com/filaments/tpu/normal) |
| **Siraya Tech Flex TPU 85A** | 85A | No. It is below the 90A limit and is experimental. | A low-viscosity 85A grade that prints more easily than most soft TPUs, but it is still outside the official window. | [Siraya Tech store](https://siraya.tech/products/flex-tpu-85a-filament) |
| **Recreus Filaflex 82A** | 82A | No. It is experimental on the U1. | A soft, very elastic filament from the Spanish manufacturer that popularised flexible FDM printing. | [Recreus store](https://www.recreus.com/en-en/products/filaflex-82a) |
| **NinjaTek NinjaFlex** | 85A | No. It is experimental on the U1. | The long-standing benchmark for soft, high-elongation TPU. It is expensive and demanding to feed. | [NinjaTek store](https://ninjatek.com/shop/ninjaflex/) |
| **ColorFabb varioShore TPU** | About 92A unfoamed, down to about 55A foamed | The base grade is at the bottom of the supported range; foaming is experimental. | The reference foaming TPU. Nozzle temperature and flow multiplier control the final hardness. | [colorFabb store](https://colorfabb.com/filaments/materials/tpu-filaments/varioshore-tpu) |

A note on conductive and reinforced TPU: carbon-black conductive TPU and glass-fibre-reinforced TPU are covered in [[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)]] and [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]. The glass-fibre grade is abrasive and needs a hardened-steel hotend; the conductive grade is not significantly abrasive but prints with different flow behaviour. Neither behaves like unfilled TPU.

## 10. Videos

Every video below was checked with YouTube's oEmbed endpoint, and the link text is the real title returned by that endpoint.

1. **[Super Soft TPU by FOAMING! - colorFabb varioShore TPU](https://www.youtube.com/watch?v=PtYaaBtm3XQ)** (CNC Kitchen). A test of the foaming TPU process, including how nozzle temperature changes hardness and density.
2. **[Why aren't more people 3D Printing this Indestructable Filament?](https://www.youtube.com/watch?v=4InFd5DoZa4)** (CNC Kitchen). A survey of flexible filaments across the hardness range, covering drying, feeding, impact and toughness tests.
3. **[TPU is Underrated. Here's What You're Missing Out On.](https://www.youtube.com/watch?v=I6mb5nxr6LM)** (JanTec Engineering). A practical explanation of what TPU is, how to print it reliably, and where mechanical interlocking helps in multi-material parts.
4. **[You won't believe what these flexible filaments can do...](https://www.youtube.com/watch?v=osuI3fD6L3g)** (Maker's Muse). Experiments with flexible filaments including PEBA and foaming TPU.
5. **[U1 Video Guide: Multi-Material Printing with PETG & TPU](https://www.youtube.com/watch?v=YjQfmRCiMT8)** (Snapmaker). The manufacturer's own walkthrough of a rigid-plus-flexible print on the U1.

## Related notes

- [[00 - Filament Master Index]]
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
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]
- [[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)]]

## Sources

- Snapmaker U1 FAQ, material compatibility and the TPU ≥ 90A statement: https://wiki.snapmaker.com/en/FAQ/u1
- Snapmaker TPU product page: https://www.snapmaker.com/filaments/tpu/normal
- Bambu Lab TPU 95A HF specifications: https://us.store.bambulab.com/products/tpu-95a-hf
- Polymaker PolyFlex TPU95 specifications: https://us.polymaker.com/products/polyflex-tpu95
- Overture TPU 95A specifications: https://overture3d.com/products/overture-tpu
- eSUN TPU-95A: https://www.esun3d.com/etpu-95a-product/
- SUNLU TPU 95A: https://www.sunlu.com/products/tpu-95a-flexible-filament
- SainSmart GT-3 TPU: https://www.sainsmart.com/products/gt-3-flexible-tpu
- Siraya Tech Flex TPU 85A: https://siraya.tech/products/flex-tpu-85a-filament
- Siraya Tech guide to printing TPU on the Snapmaker U1: https://siraya.tech/blogs/news/fixing-tpu-jams-on-snapmaker-u1-professional-settings-for-stable-24h-flexible-printing
- Recreus Filaflex 82A: https://www.recreus.com/en-en/products/filaflex-82a
- NinjaTek NinjaFlex: https://ninjatek.com/shop/ninjaflex/
- colorFabb varioShore TPU: https://colorfabb.com/filaments/materials/tpu-filaments/varioshore-tpu
- ASTM D2240, Standard Test Method for Rubber Property, Durometer Hardness.
- ISO 868, Plastics and ebonite: determination of indentation hardness by means of a durometer.
