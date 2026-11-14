---
title: "13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)"
tags:
  - 3d-printing
  - filaments
  - pet
  - pet-cf
  - pet-gf
  - engineering-plastics
  - annealing
  - composite-filament
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 270–295 °C for PET-CF and PET-GF on a hardened steel nozzle. A few grades list up to 300–310 °C, which is at or beyond the Snapmaker U1 limit. | Not required. Bambu Lab lists 45–60 °C for its PET-CF; Polymaker recommends room temperature and an open door. On the U1 the Top Cover gives roughly 40–50 °C passively, and Panda Breath can hold 50–60 °C only with motherboard cooling. | As printed, the heat deflection temperature (HDT at 0.45 MPa) is about 65–110 °C. After annealing it is typically 130–155 °C for most products, with Bambu PET-CF publishing 205 °C. HDT is a deflection datum, not a continuous service limit; keep load-bearing parts well below it. | Drone and RC frames, jigs and fixtures, toolhead and sensor brackets, mounts near motors or hot electronics, and stiff parts used in humid conditions. | Dry at 80 °C for 8–12 hours. A hardened steel nozzle is mandatory because of the fiber. Annealing needs a separate oven: the U1 bed stops at 100 °C and cannot do the usual 120 °C schedule. The material is insulating, not conductive. |

> [!abstract] Overview
> Polyethylene terephthalate (PET) is the polyester used to make drink bottles and textile fiber. In FDM printing it appears in three forms: neat PET sold as an easy-printing engineering filament, carbon-fiber reinforced PET (PET-CF), and glass-fiber reinforced PET (PET-GF). All three differ from PETG, which is a glycol-modified copolyester that cannot crystallize. PET-CF is the form that matters for the Snapmaker U1: it is stiff, dimensionally stable, much less moisture-sensitive than carbon-fiber nylon, and it can be annealed to raise its heat resistance. The catch is that the high heat resistance only appears after an oven anneal, and the U1 cannot perform that anneal on its own.

## 1. What PET is and why the label "unmodified crystalline PET" is misleading

### 1.1 Chemistry

PET is a semi-crystalline thermoplastic polyester built from terephthalic acid and ethylene glycol. Its repeat unit contains a rigid aromatic ring, which gives the chain high stiffness and a melting point around 241–250 °C. The polymer is made by polycondensation, and the length of the chain, usually described by intrinsic viscosity, controls how tough the finished part is.

PETG is made by replacing part of the ethylene glycol with cyclohexanedimethanol. The bulky ring in that comonomer prevents the chains from packing into crystals. The result is an amorphous material that is easy to print, nearly isotropic, and limited to a glass transition near 80 °C. PET keeps the ability to crystallize, which is where its higher heat resistance comes from.

### 1.2 What actually happens during printing

A printed PET part does not leave the nozzle crystalline. The polymer melt is quenched as each layer is laid down, and the finished print is mostly amorphous with a glass transition of roughly 75–82 °C. Chopped carbon or glass fibers act as nucleation sites and stiffen the matrix, but they do not complete crystallization during a normal print.

Crystallization happens during annealing. When the part is held above its glass transition, in the cold-crystallization window of roughly 115–135 °C, the chains rearrange into lamellae. That is why the same spool can produce a part with an HDT near 70 °C or a part with an HDT above 140 °C. The difference is the heat treatment, not the filament.

This is also why the phrase "unmodified crystalline PET" is a poor description of a typical FDM product. The filament may be unmodified in chemistry, but the printed part is amorphous until it is annealed. A true high-molecular-weight, unmodified bottle-grade PET is a niche industrial material with very few FDM suppliers. Most products sold as "PET" for printing are either formulated to print in a mostly amorphous state, such as BASF Ultrafuse PET with an HDT of 63 °C, or are PET-CF/GF compounds. Fewer than ten brands sell a genuinely unmodified PET filament for FDM, and the practical choices for engineering work are the fiber-reinforced grades.

### 1.3 Hydrolytic degradation

Like all polyesters, PET reacts with water at melt temperature. Above roughly 0.02 % moisture, which is 200 ppm, the ester bonds begin to break in the melt. Each chain scission lowers molecular weight, and the visible result is a part that foams, oozes, smells sweet, and snaps instead of yielding. The damage is permanent; drying a spool after a wet print run does not repair the polymer.

The strange part is that solid PET absorbs very little water compared with nylon. Saturation is only about 0.37–0.53 % at 23 °C and 55–70 % relative humidity, and most of that sits in the amorphous regions. The material therefore behaves well outdoors and in humid service, while remaining unforgiving in the melt zone. That combination is the main reason PET-CF is popular for functional parts: the finished part is not sensitive to humidity, but the spool still has to be dry.

## 2. Properties

The table below separates manufacturer datasheet values from typical ranges. Datasheets are measured on optimized specimens, often after annealing, and independent tests usually land below them. The figures for PET-CF come from Bambu Lab, Polymaker Fiberon, and QIDI datasheets; the neat PET column uses BASF Ultrafuse PET, which is a low-crystallinity FDM grade and is included to show how different a "PET" filament can be from PET-CF.

| Property | Neat PET for FDM (Ultrafuse PET) | PET-CF (Bambu, Fiberon PET-CF17, QIDI) | PET-GF (Fiberon PET-GF15) | PETG reference |
| :--- | :--- | :--- | :--- | :--- |
| Density | 1.33–1.38 g/cm³ | 1.29–1.34 g/cm³ | Approx. 1.45 g/cm³ (estimated from glass loading) | 1.27 g/cm³ |
| Glass transition temperature | about 70–80 °C | 75–80 °C | Approx. 78–80 °C | 80 °C |
| Melting temperature | 245–255 °C | 241–250 °C | Approx. 245–250 °C | Amorphous, no true melting point |
| HDT at 0.45 MPa, as printed | 63 °C | about 65–110 °C | Approx. 65–110 °C | 68–76 °C |
| HDT at 0.45 MPa, annealed | Not applicable in practice | 147.5 °C (Fiberon CF17), 155.3 °C (QIDI, conditions not stated), 205 °C (Bambu) | 133 °C (Fiberon, 120 °C for 16 h) | Cannot crystallize |
| Tensile strength, XY | about 33 MPa | 63–74 MPa | Not published as tensile; bending strength 104 MPa | 45–53 MPa |
| Tensile strength, Z | about 17 MPa | 22–35 MPa | Not published in the sources used | 25–35 MPa |
| Young's modulus | about 2.0 GPa | 4.7–5.5 GPa | Not published; higher than PETG | 2.0–2.2 GPa |
| Elongation at break | about 2.7 % | 2.4–4.5 % | Not published in the sources used | 15–40 % |
| Notched impact strength | about 2 kJ/m² | about 5–9 kJ/m² | Not published in the sources used | 6–11 kJ/m² |
| Water absorption at saturation | about 0.4 % | 0.37–0.53 % | Approx. 0.4 %, from the PET matrix | 0.3–0.5 % |
| Surface resistivity | Insulating | >10¹² Ω | Insulating | Insulating |

Two entries in that table need a warning. First, the Bambu 205 °C figure is a heat deflection temperature measured at 0.45 MPa on an annealed specimen. It does not mean the part can carry a load at 200 °C. A bracket that must hold a screw preload at temperature should be designed for roughly 100–130 °C, and the exact limit depends on stress, wall thickness, and how well the part was annealed. Second, the modulus and strength figures are measured on dry, annealed test bars. A real printed part with 40 % infill and three walls is much less stiff than the datasheet suggests.

### 2.1 Pros

- **High stiffness without the moisture penalty.** PET-CF keeps most of its modulus when conditioned in humid air, unlike carbon-fiber nylon, which loses a significant part of its stiffness as it absorbs water. Bambu Lab specifically markets its PET-CF for humid environments on this basis.
- **Good dimensional stability.** Shrinkage is low, warping is modest compared with other semi-crystalline engineering plastics, and large flat parts stay flat on a 100 °C bed without a heated chamber.
- **Heat resistance after annealing.** Annealed PET-CF is one of the few materials that can be printed on a 300 °C machine and then used near a hotend or motor, or in some engine-bay locations.
- **Useful creep behavior.** Crystallized PET resists slow deformation under steady load better than PETG, which makes it suitable for clamps, jigs, and bolted joints.
- **Chemically resistant to everyday fluids.** PET tolerates oils, greases, glycols, and many solvents. It is not resistant to strong acids or strong alkalis, and some organic solvents attack it.
- **Electrically insulating.** The fiber load in commercial PET-CF is too low to form a conductive network. Polymaker lists a surface resistivity above 10¹² Ω, so the material is not conductive and not ESD-safe. PET-GF is likewise insulating.

### 2.2 Cons

- **Hydrolysis sensitivity.** Wet filament produces brittle, bubbly parts even though the finished part is not hygroscopic. Drying is not optional.
- **Abrasive.** Carbon and glass fiber wear brass, copper, and plain stainless steel nozzles. The U1's stock 0.4 mm stainless hotend is not the right tool for these grades.
- **Brittle compared with nylon.** Elongation at break is only a few percent, and notched impact strength is modest. Thin walls and sharp corners can fracture where PA6-CF would bend.
- **The best properties require an oven.** Without annealing, PET-CF behaves like a stiff material with an HDT near 70–110 °C, not a 150 °C material. The U1 cannot anneal because its bed stops at 100 °C.
- **Anisotropy.** Z-axis strength is roughly half of XY strength, and annealing can worsen warping in thin or asymmetric parts.
- **Limited color range.** Most PET-CF is black; PET-GF offers more colors but is still a small market.

## 3. Printing PET and PET-CF on the Snapmaker U1

### 3.1 Drying and storage

Dry PET-CF at 80 °C for 8–12 hours in a forced-convection dryer or a blast oven. That is Bambu Lab's published schedule and a safe default for spools with PC/ABS or cardboard cores. Some manufacturers specify a hotter, shorter cycle: Polymaker and QIDI list 100 °C for 10 hours, and Siraya Tech lists 90 °C for 4–6 hours. Follow the spool you own, and never exceed the temperature rating of the spool or the dryer.

Dry the filament until the moisture content is below roughly 0.02 % (200 ppm). A dryer that holds 80 °C in still air will get there slowly; a forced-air dryer or a vacuum oven is faster. Weigh the spool before and after drying if you want evidence: a 1 kg spool that loses 2–4 g was carrying a few tenths of a percent of water, which is enough to matter.

Store the spool in a sealed box with fresh desiccant and keep the relative humidity below 10–15 %. Print directly from a dry box if the room is humid. PET-CF is less demanding than nylon in storage, but it is not indifferent to water.

Related notes: [[01 - Drying Filament]], [[02 - Storing Filament]], [[03 - Combining Storing and Drying - Science and Rational Approach]].

### 3.2 Nozzle and hotend

PET-CF and PET-GF require a hardened steel nozzle. Snapmaker sells official hardened-steel hotends in 0.2, 0.4, 0.6, and 0.8 mm, and they are sold as four-packs of a single diameter. Different diameters cannot be used in the same print according to Snapmaker, so choose one size for the whole job. Use 0.4 mm for detail and 0.6 mm for structural parts; the larger orifice reduces fiber jamming and raises practical flow.

The stock 0.4 mm stainless-steel hotend is fine for neat PET, but fiber-filled material will wear it quickly. The hotend is an integrated unit, so wear means replacing the whole assembly rather than a nozzle. Plan for that cost.

A 0.6 mm hardened nozzle is the best compromise on the U1. It prints PET-CF at 12–20 mm³/s, handles 0.3 mm layers, and is much less prone to the partial clogs that occur when chopped fiber bridges a 0.4 mm orifice. Do not use a 0.2 mm nozzle with PET-CF or PET-GF; the clogging risk is too high.

See [[04 - Nozzles and Their Types]] for the general wear and material discussion.

### 3.3 Bed and first layer

Set the bed to 80–100 °C. Bambu Lab specifies 80–100 °C, Polymaker and QIDI specify 70–80 °C, and eSUN allows up to 120 °C, which the U1 cannot reach. On a textured PEI plate, 90 °C is a good starting point.

Use a release agent. PET adheres strongly to bare smooth PEI and glass, and a large part can tear the surface when it cools. A glue stick, Magigoo, or Vision Miner Nano Polymer Adhesive gives a reliable release. Bambu Lab recommends glue stick for PET-CF on its engineering and textured plates.

Keep the first layer slow, around 25–35 mm/s, and use a slightly squashed first layer. PET-CF does not need a brim on most parts, but a 5 mm brim helps tall, narrow objects that could be knocked over.

### 3.4 Chamber

Chamber heating is not required. Polymaker explicitly recommends room temperature and an open door for its Fiberon PET-CF17. Bambu Lab lists 45–60 °C for its PET-CF, which is a mild chamber rather than a requirement.

On the U1, a closed Top Cover traps heat from a 90–100 °C bed and typically holds the air at roughly 40–50 °C. That is enough to reduce drafts and improve layer bonding on large parts. If you add a BIQU Panda Breath, it can hold 50–60 °C, but only with the community firmware and only after adding proper motherboard cooling. The RK3562 begins throttling at 85 °C, and elevated chamber temperature accelerates wear. Do not treat a chamber heater as a plug-and-play accessory.

Never exceed 60 °C chamber temperature on this machine. PET-CF does not need it, and the electronics do not benefit from it.

### 3.5 Temperature profile

- **Nozzle:** 270–295 °C for PET-CF and PET-GF on hardened steel. Start at 280 °C for a 0.4 mm nozzle and 285–290 °C for a 0.6 mm nozzle. Bambu's range is 260–290 °C, Polymaker's is 270–300 °C for CF17 and 280–310 °C for GF15. The U1 tops out at 300 °C, so GF15 can be printed at the bottom of its range but not at 310 °C.
- **Bed:** 80–100 °C, with 90 °C as the usual setting on PEI.
- **Chamber:** ambient to 50 °C. A closed Top Cover is enough.
- **Neat PET:** 210–230 °C on a 60–80 °C bed for low-crystallinity grades such as Ultrafuse PET. This is a different material from PET-CF and should not be printed at 290 °C.

See [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]] for the general relationships between nozzle, bed, and chamber temperature.

### 3.6 Cooling, speed, and flow

Part cooling should be low for structural parts. Polymaker specifies 0 % fan for PET-CF17, while Bambu allows 0–60 %. On the U1, 0–20 % is a good compromise: enough to stop corners curling, not enough to weaken layer bonds. For bridges and steep overhangs, raise the fan to 40–60 % locally.

Suggested speeds for a 0.4 mm hardened nozzle:

- First layer: 25–35 mm/s.
- Outer wall: 60–100 mm/s.
- Inner walls and infill: 100–150 mm/s.
- Travel: 300–500 mm/s with the U1's acceleration settings.

Volumetric flow is the limit that matters. At 285–290 °C, a 0.4 mm hardened nozzle handles about 8–14 mm³/s of PET-CF, and a 0.6 mm nozzle handles about 12–20 mm³/s. These figures sit well below the U1's 32 mm³/s ceiling, which was measured with Snapmaker ABS and does not transfer to abrasive composites. Pushing PET-CF faster produces under-melted cores, rough walls, and delamination.

See [[07 - Print Speeds and Volumetric Flow]].

### 3.7 Retraction and pressure advance

The U1 uses direct-drive toolheads, so retraction distances are short. Start with 0.6–1.0 mm at 30–40 mm/s. PET-CF strings less than PETG, but it still needs a wipe and a small Z-hop of 0.2 mm to keep fiber-filled tails off the part.

Pressure advance typically falls between 0.02 and 0.04 for PET-CF on a 0.4 mm nozzle. Tune it with a tower rather than copying a value, because the optimum changes with nozzle size, temperature, and flow.

### 3.8 Seams, ironing, and surface finish

PET-CF has a matte, slightly textured surface that hides layer lines well. A contour scarf seam of 15–20 mm with a scarf flow ratio near 95 % makes seams almost invisible in OrcaSlicer.

Do not iron PET-CF. Dragging a flat nozzle across cured carbon fiber abrades the tip and smears polymer over the matte texture. Use monotonic top surfaces and a slightly narrower top line width instead. Neat PET responds well to ironing at low flow, but PET-CF and PET-GF do not.

See [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]] and [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]].

### 3.9 Multi-toolhead support on the U1

The U1's four toolheads make PET-CF practical for parts with difficult overhangs. Polymaker states that HT-PLA works as a breakaway support for PET-CF, and that PLA can be used with PET-GF15. On the U1, assign PET-CF to one toolhead and PLA or HT-PLA to another, use a 0.0–0.1 mm interface gap, and add a prime tower. The materials bond poorly to each other, so the support peels away cleanly.

Do not claim zero ooze. A wipe sequence and a prime tower are still needed, and the PET-CF toolhead should be parked with a short retraction.

### 3.10 Annealing

Annealing is what turns printed PET-CF into a heat-resistant part, and it is the step most people skip. Published schedules vary:

- Polymaker Fiberon PET-CF17: 120 °C for 10 hours, with a slow cool.
- Polymaker Fiberon PET-GF15: 120 °C for 16 hours.
- Bambu Lab PET-CF: 80–140 °C for 6–12 hours, with the note that some parts deform.
- QIDI PET-CF: 80–100 °C for 4–8 hours.

A practical schedule for Fiberon CF17 is to hold the part at 80 °C for two hours to relax printing stress, ramp to 120 °C, hold for 10 hours, and cool at less than 20 °C per hour. Thin sections and large flat parts are the ones that warp, so support them on a flat ceramic or aluminum plate, or bury them in kiln-dried salt or plaster of Paris.

Expect shrinkage. Polymaker's own test shows a 40 mm bar shrinking to 39.40 mm in X and Y after annealing, about 1.5 %, while growing slightly in Z. Design critical dimensions with that allowance, or anneal a test coupon first.

The U1 cannot anneal. Its bed stops at 100 °C, and even a heated chamber is limited to 60 °C, both below the 120 °C that most PET-CF schedules require. The part must be removed from the printer and placed in a convection oven. A kitchen oven with poor temperature control is a risk: overshoot can deform the part, and carbon-fiber dust in a food oven is undesirable. A dedicated laboratory or toaster oven with a thermometer is better.

### 3.11 Cutting, sanding, and safety

Carbon-fiber dust is a skin and lung irritant. Wet-sand rather than dry-sand, wear nitrile gloves and an N95 or P100 respirator, and clean the area with a damp cloth. Cut fiber-filled parts with a fresh blade or a carbide tool; the fiber dulls steel quickly.

Print in a ventilated area. PET itself does not release styrene or formaldehyde, but the hot polymer can produce irritating fumes, and overheated PET gives off acrid decomposition products. Do not use printed PET-CF or PET-GF for food contact or for storing drinking water; the fiber and the layer structure make them unsuitable. Neat PET is sold in food-contact grades, such as Ultrafuse PET, but a printed part is not automatically food-safe, because layer gaps can harbor bacteria.

### 3.12 Troubleshooting

- **Brittle parts with a rough, bubbly surface.** The filament is wet. Dry it and re-print; do not try to compensate with temperature.
- **Layer splits along the Z axis.** The nozzle is too cold, the fan is too high, or the volumetric flow is too high. Raise the temperature by 5–10 °C, cut the fan to 10 %, and reduce flow.
- **Partial clogs and under-extrusion.** Fiber is bridging in a 0.4 mm nozzle, retraction is too long, or the filament has absorbed water. Move to 0.6 mm, shorten retraction, and dry the spool.
- **Warping after annealing.** The part was too thin, the ramp was too fast, or the part was unsupported. Use a slower ramp, a salt bed, or a thicker design.
- **Parts that are dimensionally short after annealing.** Account for the roughly 1–1.5 % X-Y shrinkage, or anneal a coupon and measure it.

See [[10 - Common Printing Issues, Debugging, and Physical Limits]].

## 4. Snapmaker U1 hardware configuration

| U1 subsystem | Recommended configuration for PET and PET-CF |
| :--- | :--- |
| Hotend and nozzle | Official Snapmaker hardened-steel hotend, 0.4 mm for detail or 0.6 mm for structural parts. The stock stainless-steel hotend is acceptable only for neat PET. Set the nozzle to 270–295 °C, with 280–290 °C as the usual working range. |
| Build plate | Textured or smooth PEI at 90 °C with a glue stick or Magigoo release layer. |
| Top Cover | Closed. It traps bed heat, gives a passive chamber near 40–50 °C, and keeps drafts off large parts. |
| Chamber heater | Not required. If a Panda Breath is fitted, use paxx12 Snapmaker U1 Extended Firmware or DragonBreath, add motherboard cooling first, and set it to 50 °C. Never exceed 60 °C. |
| Part cooling | 0–20 % for structural parts, up to 60 % on bridges and overhangs. |
| Filament path | Direct feed from a dry box. The U1 has two filament feeders, one for toolheads 1–2 and one for toolheads 3–4, plus four spool holders. PET-CF is stiff and brittle, so avoid tight bends and unnecessary buffer mechanisms. |
| Multi-material | PET-CF in one toolhead, PLA or HT-PLA in another for breakaway supports. A prime tower and wipe sequence are still needed. |
| Post-processing | Remove the part and anneal it in a convection oven at the manufacturer's schedule. The U1 cannot anneal in place. |

## 5. Real printable demonstration models

These are real, currently listed models. Where the designer names a material, that is stated; where the designer does not, the model is described as a suitable PET-CF application rather than as a PET-CF-specific design.

1. **[LowRider 4 CNC](https://www.printables.com/model/1034840)** is a large CNC machine with printed gantry and tool-mount parts. The designer lists PET-CF and PET-GF among the rigid filament options, which makes it a good demonstration of large-part dimensional stability and stiffness.
2. **[PLAb: Optical Posts and Post Holders](https://www.printables.com/model/1729832)** is an optical bench system. The designer recommends PET-GF or PETG-CF for long posts that would otherwise warp, so it shows the stiffness and creep resistance of glass-filled PET in a metrology application.
3. **[Multi-Material Coaster](https://www.printables.com/model/781177)** was printed by its designer with PET-CF for the outer ring, TPU for the grippy surfaces, PETG for the center, and PLA for support. It is a practical example of the multi-material workflow the U1's four toolheads enable.
4. **[JeNo 5.1-inch Drone Frame](https://www.printables.com/model/339099)** is a printed FPV frame for 5.1-inch and 6-inch props. PET-CF arms are a sensible choice because the material is stiff, keeps its stiffness in humid air, and, once annealed, holds its shape well above dashboard temperatures.
5. **[Stealth Press 1S heat-set insert press](https://www.printables.com/model/1081157)** is a workshop press frame that sees steady clamping load. PET-CF is appropriate for the frame because it creeps less than PETG under sustained load, especially after annealing.

## 6. Videos worth watching

1. **[Best PET-CF Filament? I Tested 5 Brands](https://www.youtube.com/watch?v=6qOrv_r-rKU)** by My Tech Fun compares Bambu Lab, Phaetus, Polymaker Fiberon, QIDI, and Siraya Tech in mechanical and thermal tests. It is the most direct answer to the question of which PET-CF to buy.
2. **[Review of Fiberon PET-CF17, a great technical filament by Polymaker](https://www.youtube.com/watch?v=_yHECdbbCfs)** by My Tech Fun covers strength, annealing, and the practical behavior of the Polymaker grade.
3. **[BambuLab PET-CF filament review. But how does it compare to PPA-CF?](https://www.youtube.com/watch?v=H_3SPwlUv5Y)** by My Tech Fun tests Bambu's PET-CF alongside PPA-CF, including creep and annealing.
4. **[Annealing your PET-CF Prints: Take Your Prints to the Next Level](https://www.youtube.com/watch?v=oGsSrOVA3k4)** by Siraya Tech Official walks through the annealing process and explains why crystallization changes the part.
5. **[PET-CF, technical filament with best strength to price ratio, by Siraya Tech](https://www.youtube.com/watch?v=Y7npttLpcO0)** by My Tech Fun tests the Siraya Tech PET-CF against the usual mechanical and thermal benchmarks and compares its price-to-performance ratio with the alternatives.

## 7. Products

The table lists nine fiber-reinforced products from eight brands plus one neat PET grade. Each link was opened and matched to the named product in October 2026; a few of the stores block automated requests intermittently, so a link may need a second attempt in a browser. Prices move constantly, so they are given only where a current listing was seen: Siraya Tech at about US$35 per kilogram, QIDI at about €37 per kilogram, ELEGOO at about US$36 per kilogram, and Bambu Lab starting at about €49 on the EU store. Treat all of them as approximate and check the store for your region.

| Brand and product | Type and fiber load | Nozzle / bed | Thermal data worth knowing | Link |
| :--- | :--- | :--- | :--- | :--- |
| Bambu Lab PET-CF | Carbon-fiber reinforced PET; fiber fraction not stated | 260–290 °C / 80–100 °C | HDT 205 °C at 0.45 MPa and 182 °C at 1.8 MPa, water absorption 0.37 %, chamber 45–60 °C | [Bambu Lab store](https://us.store.bambulab.com/products/pet-cf) |
| Polymaker Fiberon PET-CF17 | PET with 17 % carbon fiber | 270–300 °C / 70–80 °C | HDT 147.5 °C at 0.45 MPa after 120 °C/10 h, tensile strength 65.9 MPa, modulus 5.48 GPa, water absorption 0.53 %, surface resistivity >10¹² Ω | [MatterHackers](https://www.matterhackers.com/store/l/polymaker-fiberon-pet-cf17-black-carbon-fiber-pet-filament-175mm/sk/M9N6HNTL) |
| Polymaker Fiberon PET-GF15 | PET with 15 % glass fiber | 280–310 °C / 70–80 °C | HDT 133 °C at 0.45 MPa after 120 °C/16 h, bending strength 104 MPa, available in several colors | [Polymaker wiki](https://wiki.polymaker.com/polymaker-products/polymaker-filaments/fiberon-tm/fiberon-tm-pet-gf15) |
| QIDI PET-CF | Carbon-fiber reinforced PET | 270–300 °C / 70–80 °C | HDT 155.3 °C at 0.45 MPa, moisture absorption 0.5 %, drying 100 °C/10 h, anneal 80–100 °C for 4–8 h | [QIDI store](https://qidi3d.com/products/pet-cf-filament) |
| Siraya Tech Fibreheart PET-CF | PET with 15 % chopped carbon fiber | Hardened nozzle, 0.4 mm or larger | Manufacturer lists drying at 90 °C for 4–6 h; low warping, marketed for drone and mechanical parts | [Siraya Tech](https://siraya.tech/products/siraya-tech-fibreheart-pet-cf-filament) |
| 3DXTech 3DXLABS PET+CF | PET with 15 % carbon fiber | Hardened nozzle required | Manufacturer claims HDT up to 200 °C at 0.45 MPa | [3DXTech](https://www.3dxtech.com/products/3dxlabs-pet-cf) |
| eSUN PET-CF | Carbon-fiber reinforced PET | 250–300 °C / 70–100 °C on the U1 (the datasheet allows up to 120 °C) | HDT 75 °C as printed and 145 °C after annealing, manufacturer tensile strength 80 MPa, flexural modulus 8.26 GPa | [eSUN](https://www.esun3d.com/pet-cf-product) |
| ELEGOO PET-CF | Carbon-fiber reinforced PET | Hardened nozzle required | Manufacturer claims heat resistance up to 194 °C after annealing | [ELEGOO US](https://us.elegoo.com/products/pet-cf) |
| BASF Forward AM Ultrafuse PET CF15 | PET with 15 % carbon fiber | 250–270 °C / 65–85 °C | HDT 108 °C at 0.45 MPa, tensile strength 63.2 MPa XY, nozzle 0.6 mm or larger, hardened or ruby | [Forward AM](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/reinforced-filaments/ultrafuse-pet-cf15/) |
| BASF Forward AM Ultrafuse PET | Neat PET, low-crystallinity FDM grade | 210–230 °C / 60–80 °C | HDT 63 °C at 0.45 MPa, tensile strength 33.4 MPa XY; this is not a PET-CF substitute | [Forward AM](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/standard-filaments/ultrafuse-pet/) |

The spread in the table is real, not a data error. Bambu's 205 °C and QIDI's 155 °C come from different annealing schedules and different test protocols, while BASF's 108 °C product is aimed at easier processing and its datasheet does not call for an annealing step. Compare products on the same measurement, and prefer the one whose annealing schedule you can actually follow.

## 8. Choosing a PET-CF for the U1

For most U1 users, the practical shortlist is Bambu Lab PET-CF, Polymaker Fiberon PET-CF17, and QIDI PET-CF. All three print at temperatures the U1 can reach, all three are available in 1 kg spools, and all three have published annealing schedules. Fiberon PET-CF17 is the best-documented of the three and its 120 °C/10 h anneal is easy to reproduce. Bambu's product has the highest published HDT but also the most demanding annealing recommendation, and its spool is not AMS-compatible, which does not matter on the U1. Bambu's EU listing starts at about €49 and QIDI lists a 1 kg spool at about €37, so QIDI is the cheaper of those two on a spool basis.

Choose PET-GF15 when you need color, a smoother surface, or glass fiber rather than carbon fiber. Choose Ultrafuse PET CF15 when you need a lower processing temperature, a 0.6 mm nozzle, and a well-characterized industrial datasheet. Avoid the cheap no-name PET-CF spools unless you are prepared to measure fiber content and dryness yourself; the variance between them is large.

If you only need stiffness and moderate heat resistance, and you do not want to anneal, consider PETG-CF instead. It prints at 240–260 °C, needs no oven, and is tougher, although its HDT stays near 70–80 °C. PET-CF only justifies its extra cost and hassle when the part must hold shape above about 100 °C. See [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]] for that comparison.

## Related notes

- [[00 - Filament Master Index]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]]
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

- Bambu Lab, PET-CF technical data sheet, and the Bambu Lab filament guide material table. Used for the 205 °C HDT, 0.37 % water absorption, 260–290 °C nozzle range, 80–100 °C bed, 45–60 °C chamber, and 80 °C/8–12 h drying schedule.
- Polymaker, Fiberon PET-CF17 technical data sheet V1.0 and Polymaker wiki pages for PET-CF17 and PET-GF15. Used for the 147.5 °C and 133 °C HDT values, 0.53 % water absorption, 5.48 GPa modulus, 120 °C annealing schedules, and the >10¹² Ω surface resistivity.
- QIDI Tech, PET-CF product page. Used for the 155.3 °C HDT, 0.5 % moisture absorption, and 80–100 °C annealing range.
- BASF Forward AM, Ultrafuse PET CF15 and Ultrafuse PET product pages. Used for the 108 °C and 63 °C HDT values and the printing guidelines.
- eSUN, PET-CF product page. Used for the as-printed and annealed HDT values and the manufacturer's mechanical claims.
- Siraya Tech, Fibreheart PET-CF product page and the Siraya Tech annealing guide. Used for the fiber content, drying recommendation, and the annealing video.
- 3DXTech, 3DXLABS PET+CF product page. Used for the 15 % fiber content and the manufacturer's 200 °C HDT claim.
- ELEGOO, PET-CF product page. Used for the price and the manufacturer's 194 °C annealed heat-resistance claim.
- My Tech Fun video reviews of PET-CF, Fiberon PET-CF17, and Bambu PET-CF. Used for independent commentary on annealing and relative performance.
- UltiMaker, "How to anneal your PET CF parts for better performance". Used for general annealing practice and the warning about thin walls.
