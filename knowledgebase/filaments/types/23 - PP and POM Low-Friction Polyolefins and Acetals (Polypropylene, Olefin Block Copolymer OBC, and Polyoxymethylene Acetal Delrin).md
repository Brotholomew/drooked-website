---
title: "23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)"
tags:
  - 3d-printing
  - filaments
  - pp
  - polypropylene
  - obc
  - pom
  - acetal
  - delrin
  - living-hinge
  - low-friction
  - chemical-resistance
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **PP, unfilled** (homopolymer and random copolymer): 215–240 °C, with 220–240 °C as the practical band | Not required. A 40–50 °C chamber helps large parts, and 60 °C is the ceiling on this machine | HDT at 0.45 MPa is only about 54 °C on a printed part such as BASF Ultrafuse PP. Moulded PP datasheets quote 90–105 °C, and that figure does not transfer to a printed part carrying load | Living hinges, snap-fit lids, chemical-resistant containers, light ductile brackets | Dry at 60–70 °C for 2–4 h only if the spool feels damp. A 0.4 mm stainless nozzle is fine. Weak layer adhesion is the material's main weakness, not its strength. Use PP packing tape with the bed at 75–90 °C |
| **PP-GF30 or PP-CF** (glass- or carbon-filled) | 240–270 °C. Prusament prints its PP-CF at 270 ± 10 °C and its PP-GF at 245 ± 10 °C | HDT at 0.45 MPa is 127 °C for Ultrafuse PP GF30, and Prusa quotes up to 138 °C for its glass-filled grade | Stiff brackets, jigs, fan shrouds, parts that must hold shape warm | A hardened-steel 0.6 mm nozzle is required; BASF specifies at least 0.6 mm for its GF30. Dry the spool, because glass and carbon compounds trap moisture. Abrasive |
| **OBC** (olefin block copolymer) | 220–240 °C | Low. Expect roughly 60–75 °C HDT at 0.45 MPa, and serious creep above that. OBC is a flex and hinge material, not a warm load-bearing one | Repeated-flex hinges, impact-absorbing parts, soft-touch grips, gaskets | Very flexible and tough, with poor creep resistance. Few vendors sell it. It bonds to PP-type surfaces, so use PP tape or a PP-specific adhesive |
| **POM-C** (acetal copolymer, the usual printing grade) | 205–225 °C. Treat 230 °C as the absolute ceiling and never sit above it | HDT at 0.45 MPa is about 150–160 °C, but continuous service is only about 90–100 °C. HDT here reflects a crystalline melting range, not a working limit | Gears, bushings, rollers, pump and valve parts, low-friction slides | Formaldehyde is an IARC Group 1 carcinogen, so ventilate the room and exhaust the fumes. Dry at 70–80 °C for 2–4 h. The U1 bed must stay at or below 100 °C |

> [!abstract] Overview
> Polypropylene (PP), olefin block copolymer (OBC) and polyoxymethylene (POM, sold as acetal or Delrin) are the three polymers in this note. PP and OBC are polyolefins: saturated hydrocarbon chains with no polar groups, densities below 1 g/cm³ and very low surface energy. POM is a semi-crystalline acetal with a dense helical lattice, high stiffness and genuinely low friction against steel.
>
> All three are excellent engineering materials in moulded form and awkward materials in fused-filament fabrication. PP warps, refuses to stick to normal build surfaces and bonds poorly to itself across layers. POM is dimensionally stable and slippery but needs a hot bed, warps when it cannot hold that heat, and releases formaldehyde if it is overheated. None of the three appears on Snapmaker's official compatibility list for the U1, so all of them are community-supported materials on this machine rather than validated ones.
>
> The practical summary is that PP rewards a hot nozzle, a slow first layer, PP tape and modest cooling, while POM rewards a 90–100 °C bed, a warm enclosure, near-zero part cooling and strict temperature discipline. Both materials are worth using for the right part: a living hinge, a chemical container, a gear or a bushing that would be mediocre in PLA and excellent in PP or POM.

---

## 1. What these polymers are

### Polypropylene

PP is a semi-crystalline thermoplastic built from propylene repeat units, written as (C₃H₆)ₙ. The commercial printing grades are almost always **isotactic**, meaning the methyl groups sit on the same side of the chain, which allows the chains to pack into helices and crystallise. Homopolymer PP reaches 50–60 % crystallinity, is stiff and shrinks strongly. **Random copolymer PP** adds 2–7 wt % ethylene along the backbone, which breaks up the large spherulites, lowers the melting point to roughly 135–150 °C and makes the material noticeably easier to print. Most spools sold as "PP filament" are random copolymer or a modified copolymer blend.

PP is the lightest common printing plastic at 0.90–0.91 g/cm³, so a printed part floats on water. Its surface energy is only about 29–31 mN/m, which is why almost nothing sticks to it and why it does not stick well to itself once the previous layer has cooled.

### Olefin block copolymer

OBC is an ethylene-based multi-block copolymer, commercialised by Dow as INFUSE and also sold as a filament under names such as Dow OBC. The chain alternates crystallisable hard ethylene blocks with amorphous soft blocks made from an α-olefin such as octene. The hard blocks act as physical crosslinks, so the material behaves like a thermoplastic elastomer without chemical vulcanisation. The result is very high elongation, good fatigue life and better dimensional stability than a random PP copolymer, at the cost of low stiffness, low heat resistance and noticeable creep under steady load.

### Polyoxymethylene

POM, also called acetal or polyacetal, has the repeat unit (CH₂O)ₙ. **POM-H** is the homopolymer, sold by DuPont as Delrin. **POM-C** is the copolymer, sold by Celanese as Hostaform and Celcon, and it contains roughly 1.5–4 mol % of 1,3-dioxolane units. Nearly every printing filament is POM-C.

Those comonomer units matter. Formaldehyde is the monomer of POM, and a homopolymer can unzip back into formaldehyde when it is overheated. The carbon-carbon bonds introduced by the dioxolane comonomer stop that unzipping at intervals, so POM-C is more stable in the melt than POM-H. Stability is relative, not absolute: POM-C still degrades above roughly 230 °C, and the degradation product is formaldehyde.

## 2. Properties that matter for printing

| Property | PP random copolymer | PP-GF30 | OBC | POM-C |
| :--- | :--- | :--- | :--- | :--- |
| Density | 0.90–0.91 g/cm³ | 1.08–1.14 g/cm³ | 0.88–0.91 g/cm³ | 1.41–1.42 g/cm³ |
| Melting point | 135–150 °C | 160–165 °C | 120–130 °C | 160–168 °C |
| Glass transition | About −20 to 0 °C | About −15 °C | About −40 °C | About −60 °C |
| Tensile strength, XY | 22–32 MPa | 55–75 MPa | 18–26 MPa | 58–70 MPa |
| Tensile strength, Z | Often 40–60 % of XY. BASF quotes 9.0 MPa in ZX against 15.5 MPa in XY for Ultrafuse PP | Reduced in Z as well | Low in Z | Reduced in Z, but less severely than PP |
| Flexural modulus | 0.9–1.4 GPa | 3.8–5.2 GPa | 0.4–0.8 GPa | 2.6–3.0 GPa |
| Elongation at break | 300–600 % | 4–8 % | 400–700 % | 25–45 % |
| HDT at 0.45 MPa | About 54 °C as printed; 85–105 °C moulded | 127–138 °C | Roughly 60–75 °C | 150–160 °C |
| Friction against steel | μ ≈ 0.25–0.35 | Higher, because glass fibre scuffs the counterface | μ ≈ 0.30 | μ ≈ 0.15–0.30 |
| 24 h water absorption | Below 0.03 % | Below 0.03 % | Below 0.03 % | About 0.2 % |
| Mould shrinkage | 1.5–2.5 % | 0.5–1.0 % | 1.0–2.0 % | 2.0–2.5 % |

Two rows deserve emphasis. The first is **HDT**. A printed PP part is not a 100 °C part. The datasheet figure of 90–105 °C belongs to moulded, void-free PP, while BASF measures 54 °C at 0.45 MPa on printed Ultrafuse PP. Treat printed PP as a roughly 50–60 °C material when it has to carry load. Glass-filled PP is a different proposition and genuinely holds shape to about 125–140 °C, which is why the filled grades exist.

The second is **layer strength**. PP's reputation for toughness comes from its elongation and its living-hinge fatigue life in the plane of the extrusion. Across layers, the same material is weak, because the previous layer has already crystallised and its surface is non-polar. Ultrafuse PP measuring 9.0 MPa in ZX against 15.5 MPa in XY is a good illustration: the Z direction retains only about 58 % of the XY strength. Any design that relies on layer-to-layer strength in PP should be reoriented so that the load runs along the extrusion lines.

## 3. Printing on the Snapmaker U1

### Official support status

PP, OBC and POM are **not on Snapmaker's official compatibility list**. The bare U1 is listed for PLA, PETG, TPU, PVA and PCTG, and the Top Cover adds PET, ABS, ASA, PA and PC. PP and POM therefore sit outside the validated envelope. They print, and the machine has enough nozzle and bed temperature for both, but the profiles are yours to build and Snapmaker does not warranty the result.

### Nozzles

The four stock 0.4 mm stainless-steel hotends are suitable for unfilled PP, OBC and POM. None of these polymers is abrasive, and stainless steel is perfectly adequate. Remember that the stock hotend is an integrated unit, so a worn or contaminated nozzle means replacing the whole hotend rather than unscrewing a nozzle.

Glass-filled and carbon-filled PP change the requirement. BASF specifies a nozzle of at least 0.6 mm for Ultrafuse PP GF30, and glass fibre will erode a stainless nozzle. Use the official hardened-steel hotend in 0.6 mm for PP-GF30, PP-CF and any other filled grade. Because Snapmaker sells hardened hotends in four-packs of a single diameter and does not support mixed diameters in one print, plan the whole job around one nozzle size.

### Drying and storage

PP, OBC and POM are all effectively non-hygroscopic compared with nylon or TPU, so drying is a precaution rather than a routine. Dry PP or OBC at 60–70 °C for 2–4 h if the spool has been in a cold workshop or shows condensation. Dry POM at 70–80 °C for 2–4 h. Do not exceed about 80 °C, because the spool itself can soften and the filament can fuse into a block.

Storage is simple: a sealed bag with desiccant is enough. These polymers will not hydrolyse in humid air the way PET or nylon will. POM is the slightly more sensitive of the two, and a damp spool shows up as surface porosity and a sharper, more irritating smell rather than as violent spitting.

### Temperatures

| Parameter | PP and OBC | PP-GF30 and PP-CF | POM-C |
| :--- | :--- | :--- | :--- |
| Nozzle | 215–240 °C | 240–270 °C | 205–225 °C, never above 230 °C |
| Bed | 75–90 °C with PP tape, up to 100 °C with a PP-specific adhesive | 80–100 °C | 90–100 °C |
| Chamber | Ambient to 50 °C | 40–55 °C | 45–55 °C |
| Part cooling | 20–40 % | 20–40 % | 0–10 % |
| First layer speed | 15–20 mm/s | 15–20 mm/s | 10–15 mm/s |
| Print speed | 30–60 mm/s | 40–80 mm/s | 25–40 mm/s |
| Volumetric flow | 8–12 mm³/s | 8–12 mm³/s | 5–8 mm³/s |
| Retraction | 0.8–1.5 mm at 25–35 mm/s | 0.6–1.0 mm | 0.8–1.2 mm at 25–30 mm/s |
| Pressure advance | 0.04–0.07 s | 0.03–0.05 s | 0.03–0.05 s |

The U1 bed maximum is 100 °C, so the POM bed belongs at 90–100 °C and cannot go higher. Some POM datasheets from other suppliers suggest 110–130 °C; that is outside this machine's range, and a 100 °C bed with a warm chamber and a good adhesion layer is the realistic ceiling here.

Bed temperature for filled PP varies by product rather than by polymer. BASF specifies only 20–40 °C for Ultrafuse PP GF30, while Prusa specifies 85–95 °C for Prusament PP Glass Fiber. Follow the datasheet for the spool in hand instead of averaging the two.

### Chamber heating, honestly

PP and POM do not need a 60 °C chamber. PP prints at ambient temperature and benefits from 40–50 °C on large parts. POM prints best at 45–55 °C, which the optional Top Cover approaches passively on a long print.

A BIQU Panda Breath can hold 60 °C, but it is not a plug-and-play U1 accessory. Stock firmware does not control it; you need the community paxx12 extended firmware in WebSocket mode or DragonBreath. In addition, **motherboard cooling is mandatory before any chamber heater is used on the U1**, because the RK3562 begins throttling at 85 °C and there are documented mid-print failures. A small driver-only fan is not sufficient. The Panda Breath is compatible with the U1 through that community firmware, so it is not a Bambu-only product, but it is also not an out-of-the-box Snapmaker product.

For these two polymers the Top Cover is usually enough. A heater is a nice-to-have for POM and unnecessary for PP.

### Cooling and layer adhesion

PP should run with modest part cooling, roughly 20–40 %. More cooling freezes the bead before it can bond to the layer below, and PP has little spare adhesion to lose. This is the opposite of the old advice that PP fuses unbreakably; it does not. Slower printing, a slightly higher nozzle temperature within the window and a warm chamber all improve Z strength more reliably than fan tuning.

POM should run with almost no part cooling, because it needs to crystallise slowly and uniformly. A 0–10 % fan is typical, and some operators switch the fan off entirely for functional parts.

## 4. Bed adhesion and warping

### Why PP will not stick

PP's surface energy of about 29–31 mN/m is lower than the surface energy of most build surfaces and adhesives, so wetting fails and the first layer lifts. The usual solution is to give the PP something it recognises: **clear polypropylene packaging tape** (BOPP tape), applied in overlapping strips across a removable sheet. Molten PP wets and welds to PP tape far better than to PEI, glass or glue stick.

Two practical cautions apply. BOPP tape softens in the region of 90–100 °C, so keep the bed at 75–90 °C when tape is used; a 100 °C bed will wrinkle and stretch the tape. Also, tape is a consumable: replace it when the surface becomes glossy or contaminated.

PP-specific adhesion liquids are the alternative. They are applied thinly to a cool plate and cleaned off with water. They work, and they cost more than tape.

### Why POM will not stick

POM wets slightly better than PP but still poorly, and it shrinks about 2.0–2.5 % as it crystallises, which pulls corners up with real force. The reliable approaches are mechanical rather than chemical:

- **Painter's tape or cellulose paper.** Rough, fibrous paper gives the melt something to hook into. Blue painter's tape at 90–100 °C is the classic method.
- **Garolite or FR4 sheet.** A coarse-sanded phenolic sheet grips POM well and releases when cold. It is the surface most often recommended for acetal.
- **A POM-specific adhesive** on a smooth plate, applied thinly to a cool bed.
- **A brim, not a raft.** A 5–10 mm brim is usually enough once the first layer is slow and squashed. A thick raft adds a second warping interface and often does more harm than good.

Keep footprints compact where possible, avoid large thin flat sections, and let the part cool in the enclosure rather than opening the door immediately. Both PP and POM warp; a well-set-up print reduces the problem but does not eliminate it.

## 5. Living hinges

PP is the classic living-hinge material because thin, oriented sections tolerate repeated bending. A moulded PP hinge in a thin section is rated for around a million flex cycles, and that number is often quoted as if it applied to printed parts. It does not. The million-cycle figure comes from injection-moulded parts with no layer boundaries, no voids and consistent molecular orientation through the hinge. A printed hinge contains layer interfaces, and the hinge will normally fail at the interface long before a million cycles. Realistic printed life is design-dependent and often falls in the range of hundreds to a few thousand cycles.

The design rules that give the best chance of long life are well established:

- Keep the hinge web thin, around 0.3–0.5 mm, which is one to three extrusion widths at a 0.4 mm nozzle.
- Orient the extrusion lines **perpendicular to the fold axis**, so the hinge bends along continuous strands rather than across bead boundaries. In practice this means rotating the part on the plate, or setting the infill and perimeter direction deliberately.
- Avoid part cooling blasting directly at the hinge, and avoid a seam in the middle of the web.
- Print the hinge solid, with no infill gap, and do not post-process it with heat.

OBC is the more forgiving hinge material because its soft blocks give it rubber-like recovery, and its lower stiffness means the hinge sees less stress for the same fold angle. It creeps under sustained load, though, so a lid that must stay closed by spring force is better in PP.

## 6. Low-friction parts: gears, bushings and slides

POM is the better bearing material of the two. Its friction against steel is roughly μ 0.15–0.30 depending on load and speed, its wear rate is low, and it holds dimensions because it absorbs almost no water. PP is better described as a tough, slippery-ish material with moderate friction, useful where chemical resistance or weight matters more than bearing life.

A few rules make printed POM parts work:

- **Do not run POM against POM.** Acetal-on-acetal is a poor tribological pair and wears quickly. Pair a POM gear with a steel or brass gear, or with a gear made from a different polymer, and run a POM bushing on a steel shaft.
- **Allow clearance.** Printed holes come out undersized, and POM is stiff enough to crack if it is pressed onto an oversized shaft. Drill or ream bearing bores rather than relying on the printed diameter.
- **Keep the load off the layer planes.** A gear printed flat has its teeth in the XY plane and is strong; a gear printed on its face has teeth loaded across layers and will delaminate.
- **Use 4–6 perimeters** for bushings and gear rims, and a moderate infill such as 40–60 %.
- **Do not overheat POM while machining or annealing it.** Friction from a dull drill bit can soften and degrade the surface.

POM can be tapped, reamed and turned after printing if the walls are thick enough, and it machines with clean chips rather than gumming. PP is the opposite: it is soft and gummy under a cutting tool and is best cut with a very sharp blade or a water jet.

## 7. Chemical resistance, stated accurately

PP and POM are often described as chemically inert. PP is excellent against a wide range of chemicals, but "immune to almost all acids, bases, alcohols and ketones" overstates it. POM is good against fuels, oils and many solvents, but it is not the acid-resistant material that PP is.

| Chemical class | PP | POM-C |
| :--- | :--- | :--- |
| Dilute mineral acids and alkalis | Good at room temperature | Poor. Acids hydrolyse POM, and the reaction accelerates with heat |
| Alcohols, ketones, esters | Good at room temperature, with some swelling in ketones over long exposure | Good for most alcohols and many solvents |
| Aromatic hydrocarbons such as toluene and xylene | Poor. PP swells and softens | Good |
| Chlorinated solvents such as dichloromethane | Poor. PP is attacked | Limited, and not recommended for long exposure |
| Strong oxidising acids such as concentrated nitric or sulphuric acid | Poor | Poor |
| Fuels, lubricating oils and greases | Moderate, with swelling in some fuels | Excellent |
| Hot water and steam | Good, and PP-R is used for hot-water pipe | Not suitable for continuous hot water, because hydrolysis degrades the surface |

For a chemical container, PP is the sensible choice and POM is not. A printed PP container also needs enough perimeters to be leak-tight, because a single-wall print is porous along the layer lines even when the polymer itself is resistant. Test the actual chemical on a small printed coupon before committing a part, because resistance tables describe short-term immersion of moulded specimens, not long-term service of a printed wall under stress.

## 8. Joining, bonding and finishing

Both polymers are difficult to glue. PP's surface energy is about 29–31 mN/m, and POM's is higher but still low enough that ordinary cyanoacrylate and epoxy peel away.

- **PP to PP:** hot-air or friction welding with a piece of 1.75 mm PP filament as filler rod is the most reliable method. For adhesive joints, use a polyolefin primer such as Loctite SF 770 followed by a suitable cyanoacrylate, or a two-part acrylic structural adhesive designed for low-energy plastics, such as 3M Scotch-Weld DP8005.
- **POM to POM:** cyanoacrylate works better on POM than on PP, particularly on a freshly abraded surface. Epoxy bonds are weak and should be treated as locating aids rather than structural joints.
- **Painting:** neither polymer accepts paint without surface treatment. A brief pass of a blue propane flame, or a corona treatment, oxidises the surface and raises its energy enough for a primer to grip. Flame treatment is fast and easy to overdo; a scorched or glossy surface is a ruined surface.
- **Sanding and machining dust:** PP cuts into stringy shavings and POM into fine chips. Both should be sanded wet or with extraction, because the dust is a respiratory irritant.

## 9. Health and safety

> [!danger] POM releases formaldehyde when it is overheated
> Formaldehyde (CH₂O) is the degradation product of POM, and it is an **IARC Group 1 carcinogen**, meaning it is carcinogenic to humans. It is also a strong eye, nose and throat irritant with a sharp, suffocating smell that most people notice at or below about 1 ppm.
>
> The safe operating rule for the U1 is a nozzle at 205–225 °C with an absolute ceiling of 230 °C, no lingering hot POM in an idle nozzle, and no heating of a POM-contaminated hotend to high temperature for a later job. Purge the hotend with PLA at about 210 °C at the end of a POM print, not with a high-temperature material at 250 °C or above, because the purge itself would then decompose the residue.
>
> Ventilation matters more than filtration. HEPA and activated carbon capture particles and many volatile organic compounds, but carbon has limited capacity for formaldehyde, a small and polar molecule, and it breaks through quickly. Print POM next to an open window with an extractor, or in a garage or workshop, and never in a bedroom or a room without air exchange. The U1 Top Cover's carbon filter is not a formaldehyde control.

PP and OBC are comparatively benign. They do produce ultrafine particles and some volatile organic compounds when printed, as every filament does, so general ventilation is still worthwhile. Neither polymer is a sensitizer in the way that styrene or acrylate systems can be.

POM has one further chemical hazard worth stating: contact between POM parts and strong acids can generate formaldehyde, so do not use printed acetal fittings for acid service and do not clean them with acidic descalers.

## 10. Multi-toolhead pairings on the U1

The U1's four toolheads make some genuinely useful combinations possible, because materials that do not bond make clean breakaway interfaces.

- **PP with HIPS or PLA as breakaway support.** Neither bonds to PP, so the support lifts off. HIPS prints at 230–245 °C on its own toolhead, so the PP part is never exposed to that temperature. PLA at 200–215 °C is the simpler choice.
- **POM with PLA or PETG as breakaway support.** PLA is the safer partner because it prints cool. Purge the POM toolhead before it is used for anything hot.
- **POM bushings inside a rigid housing.** A POM bushing printed in one toolhead inside a PA-CF, PC or ABS housing printed in another will not fuse to the housing, so it breaks free and rotates with low friction. This is a legitimate use of a toolchanger, but the housing must be designed so the bushing is captured mechanically rather than relying on any bond.
- **PP with an olefinic TPE.** Styrenic TPEs based on SEBS are the most compatible soft materials with PP, because they share an olefinic character. The bond is still modest, so a mechanical interlock or a compressed gasket profile is more dependable than counting on molecular fusion. TPU, which is polar, does not bond to PP at all and works only as a mechanical gasket.

Whenever two materials share the machine, remember that the toolchanger prevents cross-contamination in a shared melt zone but does not prevent ooze. A prime tower or a wipe sequence is still needed.

## 11. Printable demonstration models

These five models exercise the properties this note is about: living hinges, low-friction gearing, a bearing and a chemical-resistant part. Each link was checked against the Printables API on 25 October 2026 and the title given below is the real model title.

1. **TPU/PP: little box with living hinge (flex)** by 3Dietrich. A box that the designer specifies for flexible filament, explicitly TPU, TPE or PP. It prints flat, folds into shape and needs no supports, which makes it the clearest small test of a PP living hinge.
   - [https://www.printables.com/model/18192-tpupp-little-box-with-living-hinge-flex](https://www.printables.com/model/18192-tpupp-little-box-with-living-hinge-flex)
2. **1 Piece Box with living hinge** by 3DMakerNoob. A simple single-piece box in two versions, one with a single hinge and one with a double hinge, with STEP files for changing the web thickness. Useful for testing hinge geometry in PP or OBC.
   - [https://www.printables.com/model/124607-1-piece-box-with-living-hinge](https://www.printables.com/model/124607-1-piece-box-with-living-hinge)
3. **Herringbone Gear Collection with STEP files** by Lucas. Herringbone gears from 11 to 97 teeth, using prime tooth counts only, with the centre distances documented. Herringbone teeth carry load smoothly and are a fair test of POM gear printing and meshing.
   - [https://www.printables.com/model/866460-herringbone-gear-collection-with-step-files](https://www.printables.com/model/866460-herringbone-gear-collection-with-step-files)
4. **608 Bearing** by firstgizmo. A fully printable 608-size bearing that uses filament offcuts as rollers. It is a practical exercise in printing a low-friction assembly in POM or in PP, and in tuning clearance so that it spins rather than binds.
   - [https://www.printables.com/model/1063080-608-bearing](https://www.printables.com/model/1063080-608-bearing)
5. **Aspirator (water powered vaccum pump)** by Cederb. A venturi aspirator whose designer recommends printing in PVDF or PP when it will see harsh chemicals. It is a realistic chemical-service part and a good reason to own a PP spool.
   - [https://www.printables.com/model/253828-aspirator-water-powered-vaccum-pump](https://www.printables.com/model/253828-aspirator-water-powered-vaccum-pump)

## 12. Videos

All five titles below were checked through YouTube's oEmbed endpoint on 25 October 2026, and each video is attached only to the claim it actually covers.

1. **CNC Kitchen: "3D printing Polypropylene (PP) filament - FormFutura Centaur PP™ REVIEW"**. A measured review of a modified PP copolymer, useful for seeing how PP behaves in real test parts rather than in datasheet numbers.
   - [https://www.youtube.com/watch?v=yRw2mC_6A00](https://www.youtube.com/watch?v=yRw2mC_6A00)
2. **My Tech Fun: "Prusament PP-CF vs PP-GF Tested – Carbon Fiber or Glass Fiber Polypropylene?"**. A direct comparison of the two filled PP grades, which is the relevant question for anyone who needs PP stiffness or heat resistance.
   - [https://www.youtube.com/watch?v=vAwvd-0XBE8](https://www.youtube.com/watch?v=vAwvd-0XBE8)
3. **Lost In Tech: "Polypropylene - the FLEXIBLE 3d printing filament that everyone is sleeping on"**. An overview of PP's flexibility, toughness and the practical difficulties of printing it.
   - [https://www.youtube.com/watch?v=yN09iY9OXlc](https://www.youtube.com/watch?v=yN09iY9OXlc)
4. **Riskable 3D Printing: "I got Acetal Delrin (POM) filament to print awesome on a regular smooth PEI sheet! No brim!"**. A practical account of getting POM to hold on a smooth sheet, which is the single hardest part of printing acetal.
   - [https://www.youtube.com/watch?v=DmDs7hm5R3A](https://www.youtube.com/watch?v=DmDs7hm5R3A)
5. **Lost In Tech: "Investigating wear of POM (Delrin) 3d printer wheels, and if PC (polycarbonate) are better?"**. A wear test that shows how POM behaves as a rolling element, and where it does not.
   - [https://www.youtube.com/watch?v=G9i6LccK_qo](https://www.youtube.com/watch?v=G9i6LccK_qo)

## 13. Products and ordering

Prices and stock were checked on 25 October 2026 and are approximate. They move, and regional stores differ. Only a small number of brands sell these polymers at all. For PP the credible names are Forward AM (BASF), FormFutura, Fiberlogy, Prusament, Recreus and a few marketplace brands. For POM the list is shorter still, and Gizmo Dorks is the supplier that is consistently in stock. **There are not ten brands to compare for either polymer**, and saying otherwise would mean padding the table with repackaged spools.

| # | Product | Polymer and form | Status and approximate price, 25 October 2026 | Link |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Forward AM Ultrafuse PP** | Random copolymer PP, 1.75 mm, 750 g spools | Manufacturer page live. Sold through distributors and resellers, so pricing depends on region | [Forward AM](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/standard-filaments/ultrafuse-pp/) |
| 2 | **Forward AM Ultrafuse PP GF30** | 30 wt % glass-fibre PP, 1.75 mm | Manufacturer page live. Requires a nozzle of at least 0.6 mm | [Forward AM](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/reinforced-filaments/ultrafuse-pp-gf30/) |
| 3 | **FormFutura Centaur PP** | Modified PP copolymer, 1.75 mm, 500 g and larger spools | Product page live, but the store showed the variants as not available for sale when checked. Availability is intermittent | [FormFutura](https://www.formfutura.com/filaments/pp/centaur-pp) |
| 4 | **Fiberlogy PP** | PP, 1.75 mm, natural and colours | Listed as available on the manufacturer store. Price varies by region and was not shown in a currency that could be confirmed | [Fiberlogy](https://fiberlogy.com/en/fiberlogy-filaments/pp/) |
| 5 | **Prusament PP Glass Fiber Natural** | Glass-fibre PP, 1.75 mm, 850 g | In stock at €59.99. Prusa specifies a 245 ± 10 °C nozzle and a 95 ± 10 °C bed | [Prusa e-shop](https://www.prusa3d.com/product/prusament-pp-glass-fiber-natural-850g/) |
| 6 | **Prusament PP Carbon Fiber Black** | Carbon-fibre PP, 1.75 mm, 650 g | In stock at €59.99. Prusa specifies a 270 ± 10 °C nozzle and an 85 ± 10 °C bed | [Prusa e-shop](https://www.prusa3d.com/product/prusament-pp-carbon-fiber-black-650g/) |
| 7 | **Recreus PP3D** | PP with a dedicated bed primer, 600 g spool, 1.75 mm or 2.85 mm | Listed at about €39.91 for the 600 g spool with primer, with an add-to-cart button when checked | [Recreus](https://recreus.com/en/products/pp-3d) |
| 8 | **MatterHackers Dow OBC** | Olefin block copolymer, 1.75 mm | Out of stock when checked, listed at $19.30. This is the clearest example of a real OBC spool that is hard to buy | [MatterHackers](https://www.matterhackers.com/store/l/dow-obc-filament/sk/M9K0KGUN) |
| 9 | **Gizmo Dorks Acetal (POM)** | POM-C, 1.75 mm or 2.85 mm, 1 kg | Available at $26.95 for 1 kg. The manufacturer's own page recommends 210–220 °C and warns that acetal does not stick to normal bed surfaces | [Gizmo Dorks](https://gizmodorks.com/acetal-3d-printer-filament/) |
| 10 | **Gizmo Dorks POM Acetal Delrin, 1 kg white** | POM-C, 1.75 mm, 1 kg | Listed on Amazon with the matching title. Check the size and colour on the listing before ordering | [Amazon](https://www.amazon.com/dp/B00LAJNE6C) |
| 11 | **SUNLU PP** | PP, 1.75 mm, 0.8 kg | Listed on Amazon. A low-cost way to try PP, with less documentation than the European brands | [Amazon](https://www.amazon.com/dp/B0GZZQMWJQ) |
| 12 | **Inslogic Pre-Dried PP** | PP, 1.75 mm, 0.8 kg | Listed on Amazon as pre-dried and food-contact rated by the seller. Treat seller claims as unverified | [Amazon](https://www.amazon.com/dp/B0FG2RQYQ6) |
| 13 | **TINMORRY PP-CF** | Carbon-fibre PP, 1.75 mm, 1 kg | Listed on Amazon. Requires a hardened nozzle | [Amazon](https://www.amazon.com/dp/B0D1VG979X) |

The Recreus store rate-limits automated requests, so its link may return HTTP 429 to a link checker while still opening normally in a browser. That is a bot block rather than a dead page; the listing and price were read directly when it was first opened.

What to buy depends on the job. For living hinges, containers and general PP work, Recreus PP3D with its primer or Fiberlogy PP is the least painful entry, and Prusament's filled grades are the choice when stiffness or heat resistance matters. For gears and bushings, Gizmo Dorks POM is the practical option and one kilogram lasts a long time. OBC is worth trying only if you specifically want its rubber-like recovery, because supply is unreliable.

## 14. Related notes

- **Machine and process guides:** [[00 - Filament Master Index]], [[01 - Drying Filament]], [[02 - Storing Filament]], [[03 - Combining Storing and Drying - Science and Rational Approach]], [[04 - Nozzles and Their Types]], [[05 - Layer Height and Nozzle Size]], [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]], [[07 - Print Speeds and Volumetric Flow]], [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]], [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]], [[10 - Common Printing Issues, Debugging, and Physical Limits]].
- **Support and pairing:** [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]] covers HIPS, which is the clean breakaway support for PP on a toolchanger.
- **Stiff housings and high-temperature neighbours:** [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]], [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]] and [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]] cover the materials that make good rigid partners for a POM bushing.
- **Flexible materials:** [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]] explains why TPU does not bond to PP and why an olefinic TPE is the better overmoulding choice.
- **Specialty neighbours:** [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)]] covers PVDF, the other material the aspirator designer recommends for chemical service.

## 15. Sources

- BASF Forward AM, Ultrafuse PP product and printing data: 220–240 °C nozzle, 60–80 °C bed, PP tape or PP adhesive, HDT of 54 °C at 0.45 MPa, and 9.0 MPa ZX tensile against 15.5 MPa XY.
- BASF Forward AM, Ultrafuse PP GF30 product data: 240–260 °C nozzle, 20–40 °C bed, HDT of 127 °C at 0.45 MPa, nozzle of at least 0.6 mm.
- Prusa Research, Prusament PP Glass Fiber and PP Carbon Fiber product pages: printing setups of 245 ± 10 °C and 270 ± 10 °C respectively, with 85–95 °C beds and the PP print sheet.
- FormFutura, Centaur PP product page and technical data sheet: density of 0.9 g/cm³, elongation above 600 %, and the recommendation to use PP packaging tape for smaller prints.
- Recreus, PP3D product page: PP developed with Repsol, supplied with a bed primer, 600 g spools.
- Gizmo Dorks, acetal filament page: 210–220 °C extrusion, a 100–130 °C bed recommendation that exceeds the U1 limit, and an explicit warning that POM does not adhere to typical bed surfaces.
- MatterHackers, Dow OBC filament listing, for the existence and specification of an OBC spool.
- IARC Monographs, Volume 100F (2012), formaldehyde classified as Group 1, carcinogenic to humans.
- Polymer property and tribology values are typical ranges from moulding-grade datasheets and are labelled as such where they differ from printed-part measurements.

All temperatures, flows and speeds in this note are starting points for a new spool. Characterise each one with a temperature tower and a flow test, and check chemical resistance on a printed coupon rather than trusting a table intended for moulded specimens.
