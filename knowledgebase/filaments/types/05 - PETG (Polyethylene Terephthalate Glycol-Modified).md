---
title: "05 - PETG (Polyethylene Terephthalate Glycol-Modified)"
tags:
  - 3d-printing
  - filaments
  - petg
  - copolyester
  - engineering-materials
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| --- | --- | --- | --- | --- |
| 230–260 °C. Standard PETG runs at 230–245 °C; high-speed grades run at 245–260 °C. | Not required. Ambient 20–30 °C is ideal. The optional Top Cover can provide passive warming up to about 50 °C, but PETG prints best with the chamber at 20–40 °C. | About 50–60 °C continuous under load. The HDT is 68–76 °C at 0.45 MPa, but HDT is a short-term deflection test, not a service limit. | Brackets, enclosures and jigs; snap-fit parts and living hinges; watertight containers and light diffusers; breakaway support interfaces with PLA. | Dry at 60–65 °C for 6–8 hours. The stock 0.4 mm stainless steel hotend is fine; use a hardened steel hotend for PETG-CF or PETG-GF. Use a glue stick on smooth PEI. |

> [!abstract] PETG in one paragraph
> PETG is an amorphous copolyester made by replacing part of the ethylene glycol in PET with cyclohexanedimethanol (CHDM). The bulky CHDM groups stop the polymer chains from packing into crystals, so the material stays amorphous, shrinks little and prints without the severe warping of semi-crystalline polymers. It is tougher and more heat-resistant than PLA, adheres aggressively to smooth PEI, and strings readily. On the Snapmaker U1 it prints on the stock stainless steel hotend without chamber heat.

## 1. What PETG is and how it behaves

Polyethylene terephthalate (PET) is a semi-crystalline polyester built from terephthalic acid and ethylene glycol. In its ordinary form it crystallises quickly when it cools, which is useful for injection-moulded bottles but awkward for fused deposition modelling: the crystallisation produces shrinkage, warping and brittle parts. PETG is made by substituting a fraction of the ethylene glycol with CHDM, a bulkier cyclic diol. The irregular chain structure suppresses crystallisation, and the result is a transparent or translucent amorphous copolyester.

Because there is no crystallisation step during cooling, PETG shrinks by only about 0.2–0.5%. That is low enough that most brackets and enclosures print on the U1 without a heated chamber or an enclosure. The trade-off is that an amorphous polymer softens gradually as it approaches its glass transition temperature; it does not hold its stiffness up to a sharp melting point.

### Typical properties of unfilled PETG

| Property | Typical value | What the number means in practice |
| --- | --- | --- |
| Glass transition temperature (Tg) | 74–82 °C | The material softens and loses stiffness as it approaches this range. It is not a safe working temperature. |
| Heat deflection temperature at 0.45 MPa | 68–76 °C | A short-term three-point bend test under light load. It is useful for comparison, not for design. |
| Heat deflection temperature at 1.8 MPa | 60–68 °C | The same test under a heavier load. Values vary widely between brands. |
| Tensile strength | 45–53 MPa | Similar to or slightly below PLA in the XY direction, but far less brittle. |
| Tensile modulus | 1.9–2.2 GPa | Stiffer than most TPU and polypropylene, less stiff than PLA or PC. |
| Elongation at break | 10–50%, with some tough grades above 100% | The material yields and stretches before it breaks, which is why snap fits survive. |
| Notched impact strength | Roughly 4–10 kJ/m² | Values depend heavily on grade and test method; compare brands only with the same standard. |
| Density | 1.27–1.29 g/cm³ | Slightly denser than PLA, so the same part uses a little more filament by weight. |
| Equilibrium moisture content | About 0.1–0.4% by weight | Small in absolute terms, but enough to cause hydrolysis in the melt. |

### Strengths

- PETG is ductile. It yields and stretches before it fractures, which suits snap-fit latches, living hinges, clamps and compliant mechanisms.
- It has useful resistance to water, alcohols, dilute acids, oils and greases, so it works for containers, pump parts and workshop fixtures.
- It prints with low warping and very little odour. A heated chamber is not required on the U1.
- It bonds poorly to PLA, which makes the two materials useful as breakaway support interfaces for each other on a toolchanger.
- Translucent grades can be printed into surprisingly clear parts with slow, hot, over-extruded and fully solid toolpaths, although the result is never as clear as cast acrylic.

### Weaknesses

- Molten PETG is viscoelastic and sticky. It wets nozzle tips, strings across travel moves and forms blobs that can drop into the print.
- It is moderately hygroscopic. Wet filament hydrolyses in the hotend, which shortens polymer chains and permanently reduces impact strength.
- It adheres aggressively to smooth PEI and bare glass. A large part printed with too much first-layer squish can pull flakes out of a PEI sheet or crack a glass plate. A glue stick or PVA release layer prevents this.
- It has a low surface energy, so paint and adhesive bond poorly unless the surface is abraded and primed.
- It creeps under sustained load, and the creep rate rises quickly above about 50 °C.
- It has poor resistance to strong alkalis and to many solvents. It is not chemically inert.

## 2. Printing PETG on the Snapmaker U1

The U1 has four independent toolheads, a maximum nozzle temperature of 300 °C, a maximum bed temperature of 100 °C and no stock chamber heater. PETG sits comfortably inside those limits. The stock 0.4 mm stainless steel hotends are suitable, and the optional Top Cover is useful for blocking drafts rather than for heating the chamber.

### 2.1 Drying and moisture control

- PETG is moderately hygroscopic. A spool left in humid air picks up moisture over days to weeks, and approaching saturation at room temperature is a matter of weeks to months rather than a few days. Thin filament and hot, humid rooms shorten that time.
- Dry PETG at 60–65 °C for 6–8 hours. A preventive 3–4 hour cycle is enough before a critical print if the spool has been stored dry.
- Do not exceed about 70 °C unless the spool is rated for it. Above that temperature, adjacent strands can soften and fuse on the spool, and some plastic spools deform. Cardboard spools are more forgiving but can still warp.
- Store spools at 15–20% relative humidity or lower, in an airtight box with regenerated silica gel or activated alumina. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]].
- A drybox that feeds the printer directly is useful for long prints, but it does not need to be heated. A sealed box with desiccant is enough for PETG.

### 2.2 Nozzle, layer geometry and line width

- The stock hotend is a fixed 0.4 mm stainless steel unit, so a different orifice size means fitting a complete official hotend rather than changing only the nozzle.
- The stock 0.4 mm stainless steel hotend works well. Stainless steel conducts heat less readily than brass, so a small temperature increase of about 5–10 °C may be needed compared with a brass nozzle.
- Use an official Snapmaker hardened steel hotend for PETG-CF and PETG-GF. The abrasive fibres erode a stainless steel orifice. Note that the official hardened hotends are sold as four-packs of a single diameter, and Snapmaker does not support mixing diameters in one print.
- An official 0.2 mm hotend is available, but it is more prone to partial clogs with PETG and is not a good first choice.
- The stock 0.4 mm hotend is the general-purpose choice for mechanical parts and support interfaces.
- Official 0.6 mm and 0.8 mm hotends suit large functional parts and translucent panels. Thicker layers and wider beads stay hot longer, which can improve interlayer strength, but they reduce detail.
- On a 0.4 mm nozzle, use layer heights of 0.16–0.28 mm and line widths of 0.42–0.48 mm. Very thin layers increase back pressure and make the extruded bead more likely to curl onto the nozzle.
- Keep the first layer slightly less squished than for PLA. A calibrated flow ratio of about 0.95–0.98 and a Z-offset about 0.02 mm higher than the PLA value usually reduce nozzle drag and elephant-footing.
- See [[04 - Nozzles and Their Types]] and [[05 - Layer Height and Nozzle Size]] for the general geometry rules.

### 2.3 Nozzle, bed and chamber temperatures

- Set the nozzle to 230–260 °C. Standard PETG usually prints at 230–245 °C, while high-speed grades need 245–260 °C to keep the melt viscosity low enough at high flow.
- When PETG is used as a support interface for PLA, keep it near 230–240 °C. A cooler nozzle oozes less while the toolhead is parked.
- Set the bed to 70–85 °C. A textured PEI sheet at 75–85 °C gives good adhesion and usually releases the part once it cools below about 40 °C.
- On smooth PEI, glass or PEX, apply a glue stick or a PVA-based release agent before printing. This is not optional insurance for large parts: PETG can bond strongly enough to damage the sheet during removal.
- Let the build plate cool before removing a part. Pulling a warm PETG part off a smooth sheet is a common way to tear the surface.
- Chamber heating is not required. Ambient air of 20–30 °C is ideal, and the optional Top Cover is useful mainly in a cold or draughty room.
- If the Top Cover is fitted, keep the chamber at or below about 40 °C. Above that, heat creep and oozing become more likely, and PLA in a neighbouring toolhead becomes more prone to clogging.
- The BIQU Panda Breath is not needed for PETG. It is also not controlled by stock U1 firmware; it requires community firmware, and a chamber heater on the U1 requires additional active motherboard cooling. Do not treat it as a plug-and-play accessory.
- These values stay well inside the U1's limits of 300 °C nozzle and 100 °C bed. See [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]].

### 2.4 Cooling, speed, volumetric flow and retraction

PETG needs less part cooling than PLA, but it is not true that cooling should always be off. A moderate fan improves overhangs and surface finish; excessive fan cools each bead before it can bond to the layer below.

- Run the part-cooling fan at 0% for the first two or three layers, then at 20–50% for normal layers. Overhangs and bridges may use 60–80%.
- The exact fan setting depends on the duct and the room temperature, so treat these as starting values rather than rules.
- Standard PETG prints well with outer walls at 50–80 mm/s, inner walls at 100–140 mm/s and infill at 120–160 mm/s.
- High-speed PETG can run outer walls at 120–180 mm/s, inner walls at 180–240 mm/s and infill at 200–260 mm/s.
- Acceleration of 5,000–8,000 mm/s² for walls and 8,000–10,000 mm/s² for travel is a sensible starting point on the U1. The machine supports up to 20,000 mm/s², so this is a PETG starting point rather than a machine limit.

The speed figures only make sense when they are checked against the volumetric flow limit. Volumetric flow is the product of speed, line width and layer height:

**Flow (mm³/s) = speed (mm/s) × line width (mm) × layer height (mm)**

At a 0.45 mm line width and a 0.20 mm layer height, every 100 mm/s of speed demands 9 mm³/s. The following table shows what the quoted speeds actually require:

| Grade | MVS | Outer wall | Inner wall | Infill |
| --- | --- | --- | --- | --- |
| Standard PETG | 11–15 mm³/s | 50–80 mm/s (4.5–7.2 mm³/s) | 100–140 mm/s (9.0–12.6 mm³/s) | 120–160 mm/s (10.8–14.4 mm³/s) |
| High-speed PETG | 18–24 mm³/s | 120–180 mm/s (10.8–16.2 mm³/s) | 180–240 mm/s (16.2–21.6 mm³/s) | 200–260 mm/s (18.0–23.4 mm³/s) |

A 300 mm/s infill move at 0.45 × 0.20 mm would demand 27 mm³/s, which is above the 18–24 mm³/s range that most high-speed PETG can sustain. The U1's 32 mm³/s figure was measured with Snapmaker ABS at 280 °C, so it is not a PETG limit. Set the slicer's maximum volumetric speed to a tested value and let it cap the speed.

- Avoid grid and triangle infill where possible. Their paths cross on the same layer, and the nozzle can catch the ridge that forms at each crossing. Gyroid, cubic, rectilinear and 3D honeycomb are safer choices.
- For direct drive on the U1, start with 0.6–1.0 mm of retraction at 30–40 mm/s.
- Use a spiral Z-hop of 0.2–0.4 mm and a wipe of about 1.5 mm. A vertical Z-hop tends to draw long strings.
- Pressure advance usually falls in the 0.03–0.06 range for PETG in OrcaSlicer, expressed in the Klipper convention. Tune it with a test tower rather than copying a value.
- See [[07 - Print Speeds and Volumetric Flow]] for the full method.

### 2.5 Slicing, seams and post-processing

- Ironing can work on PETG, but it fouls quickly if the flow is too high. Start at 10–15% ironing flow, 30–40 mm/s and 0.15 mm spacing, then inspect the top surface. See [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]].
- Scarf seams work well on PETG. A scarf length of about 20 mm with inner-outer-inner wall ordering hides the seam blip that a higher pressure advance can produce.
- Fuzzy skin produces a grippy tool-handle texture at about 0.25 mm thickness and 0.3 mm point distance, and it also hides fine ringing.
- Annealing does not make PETG crystalline, so it will not raise the HDT. A gentle cycle near 65 °C can relieve internal stress, but it also risks distortion, and the gain is modest.
- Wet-sand PETG with 220, 400, 800 and then 1500 grit. Dry sanding clogs the paper because friction heats and smears the plastic.
- A brief pass with a hot-air rework station at about 220 °C can remove fine strings, but keep the nozzle moving and do not hold it on thin walls.
- Cyanoacrylate works reasonably on abraded, IPA-wiped surfaces. Two-part epoxy or polyurethane adhesive gives a stronger structural bond.
- PETG has a low surface energy, so paint needs an adhesion promoter. A plastic adhesion promoter followed by a primer is more reliable than painting directly onto the plastic.
- See [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]] for finishing methods.

## 3. Multi-material work on the U1

The U1 is a toolchanger with four independent toolheads and two filament feeders, one for toolheads 1–2 and one for toolheads 3–4. Each toolhead has its own melt zone, so PLA and PETG never share a nozzle. That removes the purge problem that a single-nozzle multi-material system has, but it does not remove oozing. A parked PETG toolhead can still drool onto the part, so a prime tower, a wipe sequence and a standby temperature drop are still useful.

A typical PLA and PETG workflow looks like this:

1. Load PLA in toolheads 1–3 and PETG in toolhead 4, or reverse the assignment if PETG is the model and PLA is the support.
2. In OrcaSlicer, set the support-object XY distance to about 0.2 mm and the top and bottom Z distance to 0 mm.
3. Use three support interface layers with zero interface spacing, so the interface is solid.
4. Enable a prime tower and a wipe sequence. Do not assume that a toolchanger produces zero ooze.
5. Drop the standby temperature of the parked toolhead by 20–30 °C, and check that the silicone wiper is clean before a long print.

PLA and PETG do not form a strong chemical bond, but a zero-gap interface is not frictionless. The two materials mechanically interlock, and the interface can hold an overhang firmly enough that it has to be peeled away. That is the intended behaviour, but the exact release depends on interface temperature, squish and geometry. Print a small test piece before committing to a long print.

On a single-nozzle multi-material system, incomplete purging leaves patches of incompatible material that weaken layer adhesion and produce surface defects, and the size of the effect depends on the purge volume and the geometry. On the U1 the shared melt zone does not exist, so the main risks are ooze, string transfer and a dirty nozzle, not residual polymer in the melt.

## 4. Chemical, thermal and weather limits

### Chemical resistance

PETG is a polyester, and its ester bonds are vulnerable to strong alkalis. It is also attacked by several organic solvents. The practical picture is:

- **Good resistance:** PETG handles water, short-term isopropyl alcohol wiping, dilute acids, oils, greases, aliphatic hydrocarbons and many household detergents well.
- **Poor resistance:** PETG is attacked by strong alkalis such as sodium hydroxide, concentrated ammonia solutions, ketones such as acetone and methyl ethyl ketone, esters, aromatic solvents such as toluene and xylene, chlorinated solvents such as dichloromethane, and concentrated oxidising acids.
- **Limited resistance:** resistance to some fuels and cleaning concentrates is limited, so test a sample before using a part in continuous contact.

Isopropyl alcohol is acceptable for short cleaning wipes. CNC Kitchen has tested 70% IPA immersion on PETG and other common filaments, but a long soak is a different exposure from a wipe, so test your own part if the application involves continuous contact. Acetone should not be used for smoothing or cleaning PETG, because it attacks the surface and can cause crazing under stress.

### Heat, creep and weather

The HDT of 68–76 °C at 0.45 MPa does not mean that a PETG bracket can carry a load at 70 °C. HDT is measured during a short, steadily rising temperature ramp on a small specimen under a fixed load, not over a long service life, and amorphous polymers soften gradually above their Tg. A realistic continuous service range for a loaded part is about 50–60 °C.

A closed car in summer can exceed 70 °C at the dashboard, and a PETG part under load can creep or distort at that temperature. PETG is better than PLA in a hot car, but it is not a reliable choice for a load-bearing dashboard mount. ASA or PC is the better answer for that application.

PETG has moderate weather resistance. It handles rain and UV better than PLA, but long-term sunlight eventually dulls and embrittles it. ASA remains the better choice for a part that will sit outdoors for years.

### Watertightness and food contact

- Watertight containers are achievable with four or more perimeters, a calibrated flow rate and a small amount of over-extrusion. A single-wall vase is not watertight.
- PETG is not automatically food-safe. Food contact depends on the colourants, additives and processing conditions, and most filament makers do not certify their spools for it. Do not assume that "PETG" on the label means "food safe".

## 5. Real PETG demonstration models

1. **[How To Print Glass](https://www.printables.com/model/15310-how-to-print-glass)** by Rygar1432 is a widely used guide to translucent FDM parts. The designer names Overture Clear PETG as the best clear filament in his tests, ahead of Formfutura HD Glass, and the profile uses a very slow speed, a 0.10 mm layer and no top or bottom layers.
2. **[Test Model for Transparent PETG printing](https://www.printables.com/model/273948-test-model-for-transparent-petg-printing)** by CNC Kitchen is a small part for dialling in clear PETG. The published baseline is a 0.4 mm nozzle, 230 °C, an 80 °C bed, 0.12 mm layers, 102% flow, no cooling and 15 mm/s.
3. **[PETG Layer Adhesive Test V3](https://www.printables.com/model/730465-petg-layer-adhesive-test-v3)** by kaeptnkrunch is a 25 × 25 × 25 mm test piece for layer adhesion. The designer notes that PETG loses layer strength and becomes brittle when it absorbs too much moisture, which makes it a useful check on a new dryer or a suspect spool.
4. **[How to support PLA and PETG with each other - MultiMaterialSupports](https://www.printables.com/model/879206-how-to-support-pla-and-petg-with-each-other-multim)** by Saphir is a guide and test set for using PLA and PETG as each other's support interface. It covers the settings that matter on a toolchanger and is directly relevant to the U1 workflow described above.
5. **[Rugged Box (Parametric)](https://www.printables.com/model/258431-rugged-box-parametric)** is a parametric storage case with printable latches. The compliant latches are a good demonstration of why PETG is preferred over PLA for parts that flex repeatedly without cracking.

## 6. Educational videos

1. **[Transparent FDM 3D Prints are Clearly Stronger!](https://www.youtube.com/watch?v=9qb25Gi4Jv0)** by CNC Kitchen tests whether clear FDM prints are stronger and which settings drive the effect. It is the best companion to the clear-PETG models above.
2. **[3D Printing with PETG - How does the printing temperature affect strength? || Setup & Tips](https://www.youtube.com/watch?v=qif070PErNU)** by CNC Kitchen tests PETG at a range of nozzle temperatures and measures the effect on strength. It explains why the hotter end of the range usually gives better layer bonding.
3. **[Creep test with 3D printed plastic materials: PLA, PETG, ASA, Nylon](https://www.youtube.com/watch?v=88pk2cNOeGE)** by My Tech Fun loads samples over time and compares their creep. It shows that PETG deforms progressively under constant load, which is the mechanism behind the hot-car warning.
4. **[3d Printing PETG For Beginners! Great For Functional Parts](https://www.youtube.com/watch?v=TEAD8yKPEkc)** by ModBot covers the properties of PETG and the settings that make it print reliably. It is a good first watch before tuning a new spool.
5. **[PETG Support Interface in Bambu Studio (Beginner Tutorial)](https://www.youtube.com/watch?v=gzFu-NMo9uo)** by The 3D Print Zone shows a PLA part printed with a PETG interface. The menu names differ in OrcaSlicer, but the principle transfers directly to the U1.
6. **[NEW Polymaker PETG vs Bambu Lab PETG-HF vs Sunlu PETG vs Fiberlogy PETG (FILAMENT TESTING)](https://www.youtube.com/watch?v=q2IRXN1T6tE)** by Printing Perspective compares four brands on the same tests. It is useful context for the product table below, although spool-to-spool variation is real.

## 7. Commercially available PETG filaments

The links below were checked in October 2026. Prices change frequently, so the table does not quote them; check the linked page for the current price and spool size.

| Brand          | Product         | Notes                                                                                                                                                                   | Link                                                                                   |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Bambu Lab      | PETG HF         | A high-flow PETG intended for fast printing, with a matte-satin finish rather than the usual gloss.                                                                     | [Bambu Lab store](https://us.store.bambulab.com/products/petg-hf)                      |
| Prusa Polymers | Prusament PETG  | In-house extruded filament with a stated diameter tolerance of ±0.02 mm and a well-documented profile.                                                                  | [Prusa e-shop](https://www.prusa3d.com/category/prusament-petg/)                       |
| Creality       | CR-PETG         | A conventional PETG in a wide colour range.                                                                                                                             | [Creality store](https://store.creality.com/products/cr-petg-3d-printing-filament-1kg) |
| Fiberlogy      | PETG            | A European-made PETG with a broad colour catalogue.                                                                                                                     | [Fiberlogy](https://fiberlogy.com/en/fiberlogy-filaments/petg/)                        |
| Overture       | High Speed PETG | A low-cost high-flow PETG. The linked spool is the high-speed version, not the standard Overture PETG.                                                                  | [Amazon](https://www.amazon.com/dp/B07PGYHYV8)                                         |
| Elegoo         | Rapid PETG      | A high-flow PETG on a cardboard spool. Elegoo claims printing speeds up to 600 mm/s, which is a machine-speed claim and not a guarantee of 600 mm/s at a 0.4 mm nozzle. | [Amazon](https://www.amazon.com/dp/B0CPF7FDTG)                                         |
| Polymaker      | PETG            | A general-purpose PETG with a range of opaque and translucent colours.                                                                                                  | [Amazon](https://www.amazon.com/dp/B0FG3HMCVY)                                         |
| eSUN           | High Speed PETG | A faster-flowing version of eSUN's long-running PETG, intended for modern high-speed printers.                                                                          | [Amazon](https://www.amazon.com/dp/B0CLXRCMJ6)                                         |
| SUNLU          | PETG            | A low-cost PETG with a claimed diameter tolerance of ±0.02 mm and a large colour range.                                                                                 | [Amazon](https://www.amazon.com/dp/B0DJS3PJVX)                                         |
| Anycubic       | PETG            | A tough general-purpose PETG on a reusable spool. Anycubic's own data sheet lists a 12 mm³/s maximum volumetric flow, so it is not a high-speed grade.                  | [Amazon](https://www.amazon.com/dp/B0CF1X7S5F)                                         |
| Hatchbox       | PETG            | A long-established budget brand with a claimed diameter tolerance of ±0.03 mm.                                                                                          | [Amazon](https://www.amazon.com/dp/B08ZB67T91)                                         |

## 8. Related notes

- [[00 - Filament Master Index]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]]
- [[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)]]
- [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]

## 9. Sources

- Fillamentum, *PETG 3D Printing Guide* (PDF), 2024. [fillamentum.com](https://fillamentum.com/wp-content/uploads/2024/11/3D_PRINT_GUIDE_PETG_8_2024.pdf)
- Prusa Research, *Filament Material Guide*. [help.prusa3d.com](https://help.prusa3d.com/materials)
- Snapmaker, *Snapmaker U1 Toolchanger 3D Printer* specifications. [snapmaker.com](https://www.snapmaker.com/snapmaker-u1)
- Anycubic, *PETG Technical Data Sheet*, version 3.0 (PDF). [3d.nice-cdn.com](https://3d.nice-cdn.com/upload/file/ANYCUBIC_TDS_PETG_V3.0.pdf)
- Ultimaker, *PETG Technical Data Sheet* (PDF). [dynamism.com](https://www.dynamism.com/media/catalog/product/pdf/Ultimaker_PETG_TDS.pdf)
