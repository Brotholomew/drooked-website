---
title: "19 - Magnetic and Ferromagnetic Iron-Filled Filaments (Paramagnetic Iron-PLA and Rustable Composites)"
tags:
  - 3d-printing
  - filaments
  - iron-filled
  - magnetic
  - metal-filled
  - pla
  - post-processing
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| --- | --- | --- | --- | --- |
| 190–215 °C. Proto-pasta's technical data sheet specifies 192 °C. Use a 0.6 mm hardened steel nozzle. | Not required. Keep the chamber at 20–30 °C and leave the Top Cover off. | About 45–55 °C continuous. The heat deflection temperature is about 50–56 °C at 0.45 MPa, so do not carry a load near that temperature. | Rusted decorative props, weighted bases and knobs, magnetic assemblies that contain a real magnet, and weak magnetic-field demonstrations. | The iron is soft-magnetic, not a permanent magnet. It is abrasive and brittle. Dry at 45–50 °C. The Snapmaker U1 cannot sinter it. |

> [!abstract] Overview
> Iron-filled PLA is a dense, abrasive composite of elemental iron powder in a polylactic acid matrix. It prints like a slightly difficult PLA, feels heavy and cold, takes a convincing rust finish, and responds to a magnet. It does not generate a magnetic field of its own, and its attraction to a magnet is only a few percent of the pull of solid iron. It is not an electromagnetic shielding material, not a transformer core, and not a structural metal substitute. The Snapmaker U1 can print it with a hardened 0.6 mm hotend, but the machine cannot debind or sinter it.

## 1. What the material actually is

Iron-filled PLA is a particulate composite, not a metal. The continuous phase is PLA, usually a standard or slightly toughened injection-molding grade. The filler is elemental iron powder, often described as carbonyl iron or atomized iron. A related group of products uses magnetite (Fe₃O₄) instead of elemental iron, and those behave differently.

The common hobby grades contain about 45–50 wt% iron, which is roughly 11–14 vol% because iron is about 7.87 g/cm³ and PLA is about 1.24 g/cm³. Their density is typically 1.85–2.30 g/cm³, compared with 1.24 g/cm³ for unfilled PLA. A 1 kg spool therefore contains noticeably less filament length than a PLA spool of the same weight.

The filler is coarse. Proto-pasta's technical data sheet lists a maximum particle size of 250 µm and does not publish a mean or typical size. That single figure explains most of the printing advice in this note. A 0.2 mm nozzle has an orifice smaller than the largest particles and is very likely to clog. A 0.4 mm nozzle is only about 1.6 times the largest particle, so it is marginal. A 0.6 mm nozzle is about 2.4 times the largest particle and is the practical choice.

There are two distinct classes of product, and they should not be confused.

1. **Hobby iron-PLA.** Proto-pasta, Amolen and ZYLtech sell composites at roughly 1.85–2.30 g/cm³. They print on a normal PLA profile, rust after abrasion, and attract a magnet weakly. They are the subject of most of this note.
2. **High-load sinterable iron filament.** The Virtual Foundry's High Carbon Iron Filamet contains 75–80 wt% iron and has a density of 2.90–3.85 g/cm³. It is designed to be debound and sintered into a dense metal part in a furnace. The manufacturer recommends a 1.0 mm hardened steel nozzle; the U1's largest official hardened size is 0.8 mm, which the manufacturer says generally works. The U1 cannot sinter the printed part.

The printed surface is matte dark gray. Under magnification the iron particles are visible as a fine speckle. Sanding or wire-brushing exposes bare metal and produces a brighter, graphite-like sheen before any rusting.

## 2. Magnetism: what it does and does not do

Elemental iron is ferromagnetic. A printed iron-PLA part is a soft magnetic composite with low coercivity and very little remanence. It is attracted to a magnet, it can concentrate and redirect magnetic flux slightly, and it loses essentially all of that response when the external field is removed. It is not a permanent magnet and cannot be magnetized at home into a useful one.

The terminology in the title needs one clarification. Strictly, iron is ferromagnetic, not paramagnetic. Manufacturers often describe the printed composite as paramagnetic because it does not hold a permanent field. Prusament describes its magnetite-filled PETG as paramagnetic. In practice, both materials are soft magnetic and neither is a permanent magnet.

### How strong the attraction is

Proto-pasta's data sheet quotes a saturation induction of about 0.15 T. Wrought iron saturates near 2 T. That difference of more than an order of magnitude is the reason a printed part feels disappointing in a magnetic circuit.

ZYLtech states that its iron-filled PLA attracts strong magnets with approximately 5% of the magnetic strength of regular iron. Holding force is also only a few percent of what a solid steel plate of the same size produces. The exact number depends on loading, part thickness, magnet grade, air gap and print density, so treat 5% as an order-of-magnitude guide rather than a specification.

A printed lid will not work as the striker plate for a cabinet magnetic catch. It will feel slightly attracted, but it will not hold the door closed. Use a steel washer or a second embedded magnet as the striker, and treat the iron-PLA part as a decorative shell or a flux return.

### Relative permeability

Proto-pasta's data sheet quotes a relative permeability of 5–8 for the compounded material, independent of frequency up to 1 MHz. That figure should not be used to design a printed flux path. At 11–14 vol% spherical iron in a polymer, Maxwell-Garnett effective-medium theory gives a bulk relative permeability of about 1.3–1.5, with the densest grades approaching 1.6. The discrepancy comes from the polymer coating, particle shape, voids between beads and the low volume fraction. Design with the lower figure and measure the actual part.

### Sensor use

Iron-PLA cannot actuate a reed switch. A reed switch needs a magnetic field, and the composite produces none. A small iron-PLA vane placed against a magnet can slightly reshape the field that a reed switch or Hall sensor sees, but the effect is weak, depends on geometry, and must be measured. It is not a reliable substitute for a magnet.

Inductive proximity sensors respond to conductive metal. The iron particles in these filaments are coated and separated by polymer, so the composite is effectively insulating and the eddy-current response is weak. A capacitive sensor will detect the plastic, but that has nothing to do with the iron.

### Shielding and electrical use

Iron-filled PLA is not an electromagnetic interference shield. Shielding requires a continuous conductive network, usually a metal enclosure or a densely loaded conductive composite. At 11–14 vol% iron, the particles are below the percolation threshold and are encapsulated by PLA. The material is insulating, and attenuation of radio-frequency fields is negligible for practical enclosure shielding at these loadings. Prusa explicitly states that its magnetite-filled PETG is not electrically conductive, and the same logic applies to iron-PLA.

It is also not a transformer bobbin material. A bobbin must be dielectric, dimensionally stable and able to tolerate the winding and soldering temperatures. Iron-filled PLA is none of those things. Use a proper engineering thermoplastic such as PA, PBT or PC, or a machined bobbin.

For the same reasons, printed iron-PLA is not a practical inductor core. The loading is too low, the polymer gaps break up the flux path, and the permeability is low.

### Sintering

Only the high-load Filamet class among iron-filled products is intended for sintering, and even there the manufacturer's support is limited. Sintering requires debinding and a furnace cycle around 1100–1300 °C in a controlled atmosphere. The U1's maximum nozzle temperature of 300 °C is irrelevant to that process. The Virtual Foundry states that sintering trials have not been conducted on its High Carbon Iron Filamet and that it cannot offer debinding and sintering support for that product. Do not buy it expecting the U1 to turn it into solid iron.

## 3. Mechanical and thermal properties

| Property | Typical hobby iron-PLA | Notes |
| --- | --- | --- |
| Density | 1.85–2.30 g/cm³ | Proto-pasta lists 1.85 g/cm³. The high-load Filamet class is 2.90–3.85 g/cm³. |
| Tensile strength, XY | About 25–40 MPa | Lower than unfilled PLA, and lower than a fiber composite. |
| Tensile modulus | About 3.0–4.5 GPa | Slightly stiffer than PLA, but brittle. |
| Elongation at break | About 1–3% | Very little plastic deformation before fracture. |
| Glass transition temperature | About 55–60 °C | The PLA matrix sets this limit. |
| Heat deflection temperature at 0.45 MPa | About 50–56 °C | This is a deflection measurement, not a continuous service limit. |
| Practical continuous service temperature | About 45–55 °C | Keep load-bearing parts below about 45 °C. A hot car will soften them. |
| Relative permeability, printed part | About 1.3–1.6 | Effective bulk value at 11–14 vol% iron. The data sheet's 5–8 is not a design value for a printed part. |
| Saturation induction | About 0.15 T | Proto-pasta data sheet. Wrought iron is near 2 T. |
| Maximum particle size | 250 µm | Proto-pasta data sheet. The typical particle size is not published. |
| Minimum bend diameter | 35 mm for 1.75 mm filament | Proto-pasta data sheet. This is why the filament snaps in tight bends. |

The heat deflection temperature and the continuous service temperature are different limits. A part can survive a short excursion near its heat deflection temperature under a light load, but it will creep under a sustained load at that temperature. For anything that carries weight or stays under tension, design for the continuous service range and add a safety margin.

Manufacturers publish few mechanical figures for these composites, and the values above are order-of-magnitude ranges for the class. They are useful for comparing iron-PLA with unfilled PLA, not for a structural calculation. Print a test part if a joint or a thin wall has to carry a real load.

## 4. Printing on the Snapmaker U1

### Hotend and nozzle

Fit the official Snapmaker U1 hardened steel hotend in 0.6 mm. Snapmaker sells the hardened hotends in four-packs of a single diameter, so a 0.6 mm four-pack is the practical purchase if you intend to use iron-PLA in one toolhead and other materials in the rest.

The stock 0.4 mm hotends are stainless steel, not hardened steel, and the nozzle is not separately serviceable. When the orifice wears, the whole integrated hotend has to be replaced. Iron powder is abrasive, so do not use the stock hotend as a wear test.

A 0.4 mm hardened nozzle can work, and Proto-pasta says 0.4 mm is acceptable. It is still marginal with a 250 µm maximum particle size, and the risk of a partial clog rises. A 0.2 mm nozzle should not be used. A 0.8 mm hardened nozzle is a good choice for large sculptures and thick decorative parts, provided the model does not need fine detail.

Snapmaker does not officially support different nozzle diameters in the same print. If you want to combine iron-PLA with a support material in one job, use 0.6 mm hardened hotends in every toolhead that participates, or accept that a mixed-diameter setup is an unsupported workaround.

Nozzle wear is real but gradual. Proto-pasta states that its iron-PLA causes less nozzle wear than stainless-steel-filled or carbon-fiber-filled filaments. A single 250 g print will not widen a brass 0.4 mm nozzle to 0.55 mm; there is no single-print threshold. Wear depends on particle size, particle hardness, nozzle material, temperature and how much filament passes through the orifice. Hardened steel is still the correct choice because the U1 hotend is expensive to replace and because worn nozzles ruin dimensional accuracy slowly and invisibly.

### Temperatures

The nozzle should be set to 190–215 °C. Proto-pasta's data sheet specifies 192 °C on an Ultimaker S5 with a 0.15 mm profile. Start at 195 °C and adjust in 5 °C steps. Amolen's product page allows 210–240 °C for its PLA Metal line, but the upper end of that range is too hot for most iron-filled PLA and increases oozing, stringing and heat creep. A practical ceiling is 215 °C.

The bed should be set to 55–60 °C. Proto-pasta recommends room temperature to 60 °C and warns that above 60 °C the part is more likely to warp. A textured or smooth PEI sheet works well. A glue stick can help with adhesion and with releasing large, flat parts, and a brim helps tall, thin parts.

The chamber should stay at 20–30 °C. This material does not need a heated chamber, and the U1 has no stock chamber heater. Leave the optional Top Cover off. If you use the Top Cover for other reasons, open the vents and watch the hotend temperature, because a warm chamber encourages heat creep in a PLA-based filament.

Do not enable the BIQU Panda Breath for this material. It is unnecessary, and stock U1 firmware does not control it; it requires community firmware. If you install a chamber heater for other materials, the U1 needs active motherboard cooling before you use it; that is a printer-level requirement, not a requirement of iron-PLA.

### Speed, flow and cooling

The print speed should be 20–30 mm/s, with 10–20 mm/s on the first layer. These are Proto-pasta's recommended speeds, and they are deliberately slow. The filler increases melt viscosity and the risk of a clog if the melt is asked to flow faster than the particles can move.

The volumetric flow should be limited to 2–3 mm³/s. At a 0.65 mm line width and a 0.20 mm layer height, 20 mm/s is about 2.6 mm³/s, so the flow limit caps practical speed near 23 mm/s. The U1's measured maximum of 32 mm³/s with Snapmaker ABS at 280 °C has no bearing on this material.

Layer height should be 0.15–0.20 mm. Thinner layers increase the number of passes through the nozzle and the shear on the particles without improving the surface much. Line width should be about 0.65 mm on a 0.6 mm nozzle, which is a little wider than the orifice and gives a small amount of over-extrusion for inter-bead fusion.

Part cooling should be 50–80% after the first layer, with up to 100% on bridges and steep overhangs. Iron-PLA is dense and cools quickly because the iron conducts heat, but excessive cooling can weaken layer adhesion. Start at 60% and increase only if the overhangs need it.

Retraction should be short: about 0.6–1.0 mm at 25–30 mm/s. Long or fast retractions pull hot filled melt into the cold zone and cause heat-creep plugs. Pressure advance is typically 0.03–0.05 s; tune it with a test print rather than copying a value.

### Feeders, toolheads and material pairing

The U1 has two filament feeders and four spool holders. The left feeder supplies toolheads 1 and 2, and the right feeder supplies toolheads 3 and 4. Route iron-PLA through the left feeder to toolhead 1 with a gentle path and as few tight bends as possible. The filament's minimum bend diameter is 35 mm, and a tight PTFE loop is the usual place where a brittle iron-PLA spool snaps.

The U1 reads RFID tags only for Snapmaker filament. Third-party iron-PLA will not be identified automatically, so create a manual material profile with the temperatures and flow limits above.

A sensible four-toolhead setup is:

- Toolhead 1: iron-PLA with a 0.6 mm hardened hotend, for the visible or magnetic parts.
- Toolhead 2: PETG with a 0.6 mm hardened hotend, for a zero-gap breakaway support interface under iron-PLA overhangs.
- Toolhead 3: PVA with a 0.6 mm hardened hotend, for soluble supports in enclosed cavities.
- Toolhead 4: a second iron-PLA spool, or a bronze-filled PLA for mixed-metal decorative work.

PETG is a good support interface for PLA because the two materials do not bond strongly. The toolchanger keeps the melts separate, so cross-contamination is not the problem it would be in a single-nozzle machine. A prime tower or wipe sequence is still needed, and the claim that there is no ooze at all is not true.

PVA is officially supported on the U1 without the Top Cover, but it is strongly hygroscopic. Dry it and keep it in a dry box during the print. If the job does not need soluble supports, PETG is the lower-hassle choice.

### Drying and storage

Dry iron-PLA at 45–50 °C for 4–6 hours in a forced-convection dryer. Do not exceed about 50–55 °C, because the spool and the filament can soften and the strands can stick together. Amolen recommends 55 ± 5 °C for 6–8 hours for its PLA Metal line; that is the upper end of the safe range, so watch the spool and reduce the temperature if it starts to deform.

Proto-pasta states that its iron-PLA has lower moisture uptake than standard PLA, but the composite is still brittle when damp. A damp spool snaps more readily and prints with more bubbles and surface roughness.

Store the spool sealed with indicating silica gel or molecular sieve at below 15–20% relative humidity. Keep it away from vinegar, acid-curing silicone and other acid sources, because acid vapors attack the exposed iron on the filament surface and can make the spool rust in storage.

The Virtual Foundry's high-load Filamet is an exception: its product page says not to dry it, because drying degrades the binder. Follow the manufacturer's instruction for that product rather than the PLA drying schedule.

## 5. Rusting and finishing

The rust finish works because the iron particles are elemental iron, not stainless steel or an oxide pigment. As printed, a thin PLA skin covers most of the particles. The first step is therefore mechanical, not chemical: the surface has to be opened so the solution can reach the iron.

### Step 1: Open the surface

Scrub the print with a brass brush, a stainless-steel brush or 240–400 grit abrasive paper. A gray Scotch-Brite pad also works. Avoid steel wool, because loose steel fibers embed in the surface, rust on their own and confuse the effect.

Wear a dust mask and wet-sand if possible. The dust contains iron and PLA particles, and it is not good to inhale.

### Step 2: Apply the rusting solution

Two mixtures work.

- **Slow vinegar and salt bath.** Mix about 250 mL of white vinegar at 5% acetic acid with 1 tablespoon of table salt. Spray or immerse the part for 2–12 hours, taking it out periodically to expose it to air. The acid dissolves surface oxide, the chloride keeps the iron surface chemically active, and atmospheric oxygen does the oxidizing.
- **Fast peroxide, vinegar and salt mist.** Mix about 100 mL of 3% hydrogen peroxide with 20 mL of white vinegar and 1 teaspoon of salt in a spray bottle. Mist the abraded part lightly and leave it in the open air. Orange-brown rust usually appears within 15–45 minutes.

Use only 3% hydrogen peroxide. Stronger peroxide is hazardous and is not needed. Work outdoors or in a well-ventilated space, wear nitrile gloves and eye protection, and keep the solutions away from children and pets.

The chemistry is the ordinary corrosion of iron in an aerated chloride solution:

- At the anode, iron loses electrons: Fe → Fe²⁺ + 2 e⁻.
- At the cathode, oxygen is reduced: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻.
- Iron(II) is oxidized to iron(III), which hydrolyzes into iron(III) oxide hydroxide, FeO(OH), and hydrated iron(III) oxide, Fe₂O₃·nH₂O.

The FeO(OH) family includes goethite, lepidocrocite and, in the presence of chloride, akaganeite. The exact mixture of phases gives the orange, red and brown tones.

### Step 3: Neutralize, rinse and dry

This is the step that is most often skipped. A brief rinse is not enough. Salt and acid residues stay in the porous rust, and ferrous chloride is hygroscopic and keeps the corrosion cell active. The result is a part that continues to weep, stain hands and rust through the lacquer, and the same chloride residue will attack a spring-steel build plate, bearings and tools if it is left on them.

Soak the part in a 2–5% sodium bicarbonate solution, about 2–4 tablespoons of baking soda per liter of water, for 15–30 minutes. Scrub gently with a soft brush, then rinse with distilled or deionized water. Repeat the soak and rinse until the rinse water is clear and the part no longer smells of vinegar. Dry it thoroughly with warm air at 40–50 °C, or leave it in a warm, dry room for a day. Do not put a wet, salted part on the printer's build plate.

An optional tannic acid treatment can convert some of the rust into stable iron tannate and deepen the brown color. Follow the product instructions and test on a scrap print first.

### Step 4: Seal

Seal the dry part with a matte clear acrylic lacquer or a microcrystalline wax such as Renaissance Wax. A matte finish preserves the powdery rust look; a gloss finish makes it look wet. Test the sealer on a scrap print, because some solvents darken the rust or redissolve the binder.

The seal reduces rust transfer to hands and slows further corrosion, but it does not make the part waterproof or food safe.

### Safety and cleanup

The rusting solutions are acidic and irritating. Wear gloves and eye protection, ventilate the workspace, and do not store a mixed peroxide solution in a sealed bottle, because oxygen evolves and the bottle can pressurize. Dispose of the used solutions according to local rules; do not pour large quantities down a drain.

Keep the solutions away from the printer. Chloride is aggressive to spring steel, bearings, nozzles and electronics. Use a plastic tray, wash tools separately, and wipe the workbench afterwards.

## 6. Failure modes and honest limits

- **Brittle filament snaps before the extruder.** The minimum bend diameter is 35 mm, and cold or damp filament is worse. Use a gentle filament path, dry the spool, and warm it slightly if the workshop is below 18 °C.
- **Heat creep and partial clogs.** Iron increases the filament's thermal conductivity, so heat travels up the filament faster than in unfilled PLA. Keep retractions short, keep the hotend fan and heatsink clean, and keep the chamber cool.
- **Nozzle wear.** Wear is gradual, but it is real. Use hardened steel and replace the hotend when the orifice or the print quality degrades.
- **Weak magnetic hold.** The material is not a permanent magnet and its pull is a few percent of steel. Use a real magnet or a steel striker where holding force matters.
- **Rust flaking and staining.** Unsealed rust rubs off on hands and nearby surfaces. Neutralize and seal the part.
- **Moisture and hydrolysis.** Damp filament prints badly and snaps. Dry it and store it dry.
- **Low impact strength.** The composite is brittle. Do not use it for brackets, clips, gears under load or anything that will be dropped.
- **Temperature limit.** PLA softens around 55–60 °C. Do not use it in a hot car, near a heater or in a dishwasher.
- **Not food safe.** The iron powder, the porous rust and the sealer make it unsuitable for food-contact use.
- **Not a metal part.** It cannot be soldered, welded, machined like metal or used as an electrical conductor.

## 7. Demo models and what each one shows

The following are real, currently listed models. None of them turns iron-PLA into a permanent magnet, and the notes say what each one actually demonstrates.

1. **Proto Pasta Iron Filled PLA test model.** This is a small test model published under the name Proto Pasta Iron Filled PLA. It is useful for checking surface finish, rust color and magnet response before committing to a large print.
   - [https://www.printables.com/model/81825](https://www.printables.com/model/81825)
2. **Proto-pasta Sheriff Star Badge metal composite test piece.** This is a badge-shaped test piece named for Proto-pasta's metal composites. It shows how the composite sands, polishes and takes a rust or patina finish.
   - [https://www.printables.com/model/408370](https://www.printables.com/model/408370)
3. **Magnetic catch for kitchen cabinets.** This is a printable catch body. Print the body in iron-PLA if you like the look, but use a steel washer or an embedded magnet as the striker; the iron-PLA body alone is too weak to hold the door.
   - [https://www.printables.com/model/253587](https://www.printables.com/model/253587)
4. **Magnetic chess pieces with board.** This is a chess set with pockets for embedded magnets. The magnets do the holding. Iron-PLA pieces without magnets will not cling to a magnetic board.
   - [https://www.printables.com/model/48858](https://www.printables.com/model/48858)
5. **Steampunk gear keys.** This is a set of decorative gear-shaped keys. They are a good shape for a rusted, antique finish because the teeth and recesses hold the patina.
   - [https://www.printables.com/model/142871](https://www.printables.com/model/142871)

The commonly cited Thingiverse model 763622 is the 3DBenchy, not a magnetic iron-PLA demonstration. A rusted Benchy is a useful finish test, but it says nothing about magnetic performance.

There is no good open model that turns iron-PLA into a reliable reed or Hall sensor target. If you need that function, print a small bracket and embed a real magnet, or use a steel target. A printed iron-PLA vane is only a weak field shaper.

## 8. Videos

1. **CHEP: 3D Printed Magnets with Protopasta Iron Filament.** This video is a practical demonstration of how the printed part behaves around a magnet and why the magnet still does the work.
   - [https://www.youtube.com/watch?v=oQM6pQu4dnQ](https://www.youtube.com/watch?v=oQM6pQu4dnQ)
2. **LulzBot: Tutorial — Oxidizing Metal-Infused 3D Prints.** This video walks through the rusting process on metal-filled prints, including the abrasion step.
   - [https://www.youtube.com/watch?v=DtRN2ILFv44](https://www.youtube.com/watch?v=DtRN2ILFv44)
3. **perspektive3D: 3D printing real Iron at home - Proto Pasta Iron PLA Filament.** This is a print and review video that shows the material's handling and finish.
   - [https://www.youtube.com/watch?v=QXIDEl6fUy0](https://www.youtube.com/watch?v=QXIDEl6fUy0)
4. **Sara Prints 3D: Protopasta Composite Iron-Filled PLA Review.** This is an independent review of the printing experience and the finished appearance.
   - [https://www.youtube.com/watch?v=axTeDjnQIBc](https://www.youtube.com/watch?v=axTeDjnQIBc)
5. **MinWin3D: Magnetic Iron-Filled PLA 3D prints from Protopasta.** This is a short demonstration of printed parts and their magnetic response.
   - [https://www.youtube.com/watch?v=-5N8fdWLXls](https://www.youtube.com/watch?v=-5N8fdWLXls)

## 9. Products that can be verified

Fewer than ten brands sell a true iron-filled filament. The table lists the products that were current and verifiable in October 2026. Prices are approximate and were taken from the manufacturer's page on the date checked; they will change.

| Product | Iron or magnetite content | Density | Approximate price | Notes |
| --- | --- | --- | --- | --- |
| Proto-pasta Magnetic Iron PLA | About 45–50 wt% elemental iron in the common grade; the exact loading is not published | 1.85 g/cm³ | About $90/kg equivalent, based on a 100 g coil listed at $9 | The reference product. Data sheet gives 192 °C, 20–30 mm/s and 2–3 mm³/s. Less nozzle wear than steel-filled or carbon-fiber-filled filament, but still abrasive. |
| Amolen PLA Metal, color Metal Iron | Iron powder; loading not published | Not listed | €27.95/kg | Sold as magnetic. The iron filler can be exposed and rusted like other iron-PLA. The published profile allows 210–240 °C, which is hotter than most iron-PLA needs. |
| ZYLtech Iron Filled Magnetic PLA | Listing says 15 vol% iron powder, but it also says 2 wt% and gives 1.37 g/cm³; those figures are not consistent | 1.37 g/cm³ as listed | $24.95 for 0.5 kg to $44.95 for 1 kg | Its listing states about 5% of the magnetic strength of regular iron, which is consistent with the behavior described above. A 0.4 mm or larger hardened nozzle is recommended. |
| The Virtual Foundry High Carbon Iron Filamet | 75–80 wt% iron | 2.90–3.85 g/cm³ | $119.99 for 0.5 kg; $200.99 for 1 kg | A sinterable, high-load product, not a normal iron-PLA. It requires a 1.0 mm hardened steel nozzle; 0.8 mm generally works. Do not dry it. The manufacturer says sintering trials have not been conducted and support is not offered. |
| Prusament PETG Magnetite 40% Grey | 40% magnetite (Fe₃O₄) in PETG | 1.82 g/cm³ | $46.99/kg | A different material: magnetite-filled PETG, described by Prusa as paramagnetic, weaker than iron-PLA, and not electrically conductive. A hardened nozzle is required. |

Gizmo Dorks has sold an iron-filled PLA in the past, but no iron product appeared in its current PLA catalog when checked in October 2026, so it is not listed as a current product. MatterHackers stocks Proto-pasta Magnetic Iron PLA in the United States, which is useful when the Proto-pasta store is out of stock or domestic shipping is easier. ColorFabb steelFill and similar stainless-steel-filled filaments are a different material: they contain stainless steel rather than elemental iron, they do not rust in the same way, and they are covered in [[20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)|the high-density metal-filament note]].

## 10. Related notes

- [[00 - Filament Master Index|Filament master index]]
- [[01 - Drying Filament|Drying filament]]
- [[02 - Storing Filament|Storing filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach|Combining storing and drying]]
- [[04 - Nozzles and Their Types|Nozzles and their types]]
- [[05 - Layer Height and Nozzle Size|Layer height and nozzle size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[07 - Print Speeds and Volumetric Flow|Print speeds and volumetric flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond|Ironing and surface smoothing]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing|Post-processing and finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]
- [[20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)|High-density metal-filled filaments]]
- [[21 - Ceramic, Stone, and Clay-Filled Filaments (Silica Ceramic PLA, Terracotta, Porcelain, and Sinterable Alumina-Zirconia)|Ceramic and stone-filled filaments]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|Water-soluble supports]]
- [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)|Matte and aesthetic filled PLA]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]]
- [[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)|Conductive and ESD-safe filaments]]

## 11. Sources

- Proto-pasta, Iron-filled Metal Composite PLA product page: [https://www.proto-pasta.com/products/magnetic-iron-pla](https://www.proto-pasta.com/products/magnetic-iron-pla)
- Proto-pasta, Magnetic Iron PLA technical data sheet, revision 1: [https://cdn.shopify.com/s/files/1/0717/9095/files/TDS__Iron_PLA_1.0.1.pdf](https://cdn.shopify.com/s/files/1/0717/9095/files/TDS__Iron_PLA_1.0.1.pdf)
- Proto-pasta, Improved Rusting Method for Iron Prints: [https://www.proto-pasta.com/blogs/tutorials/17590348-improved-rusting-method-for-iron-prints](https://www.proto-pasta.com/blogs/tutorials/17590348-improved-rusting-method-for-iron-prints)
- MatterHackers, Proto-pasta Magnetic Iron PLA listing: [https://www.matterhackers.com/store/l/proto-pasta-magnetic-iron-pla-175mm/sk/M6V8N2R5](https://www.matterhackers.com/store/l/proto-pasta-magnetic-iron-pla-175mm/sk/M6V8N2R5)
- Amolen, PLA Metal product page: [https://www.amolen.com/products/pla-metal](https://www.amolen.com/products/pla-metal)
- ZYLtech, Iron Filled Magnetic PLA product page: [https://www.zyltech.com/iron-filled-magnetic-pla-3d-printer-filament-1-75-mm-made-in-usa/](https://www.zyltech.com/iron-filled-magnetic-pla-3d-printer-filament-1-75-mm-made-in-usa/)
- The Virtual Foundry, High Carbon Iron Filamet product page: [https://shop.thevirtualfoundry.com/products/high-carbon-iron-filamet](https://shop.thevirtualfoundry.com/products/high-carbon-iron-filamet)
- Prusa Research, Prusament PETG Magnetite 40% Grey product page: [https://www.prusa3d.com/product/prusament-petg-magnetite-40-grey-1kg/](https://www.prusa3d.com/product/prusament-petg-magnetite-40-grey-1kg/)
- Prusa Research, Prusament PPCF and PETG Magnetite 40% announcement: [https://blog.prusa3d.com/prusament-pp-carbon-fiber-and-petg-magnetite_107086/](https://blog.prusa3d.com/prusament-pp-carbon-fiber-and-petg-magnetite_107086/)
- American Institute for Conservation, Conservation Wiki, Iron: [https://www.conservation-wiki.com/wiki/Iron](https://www.conservation-wiki.com/wiki/Iron)
