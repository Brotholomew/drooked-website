---
title: "18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)"
tags:
  - 3d-printing
  - filaments
  - conductive
  - esd
  - electronics
  - functional-fillers
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **Conductive PLA** (carbon black): 215–230 °C | Not required; leave the Top Cover open | HDT about 52–55 °C at 0.45 MPa. Keep continuous load below about 45–50 °C. | Touch electrodes, short low-current links, piezoresistive flex and pressure sensors, classroom demonstrations | The most accessible conductive filament and the most brittle. Dry at 45–55 °C. A 10 cm length of 1.75 mm filament typically measures 2.0–3.5 kΩ. |
| **Conductive TPU** (carbon black or CNT): 235–250 °C | Not required; ambient | Softens progressively rather than at a sharp point. Keep loaded parts below about 50–60 °C. | Wearable strain sensors, flexible touch pads, soft robotics, heated gloves | Print slowly at 3–6 mm³/s with minimal retraction. Most grades do not publish resistivity, so measure your own parts. |
| **ESD-PETG** (CNT): 250–280 °C | Ambient; no chamber needed | HDT about 76 °C at 0.45 MPa. Continuous service about 60–65 °C. | PCB carriers, assembly jigs, SMT stencils, cleanroom tooling | Target 10⁶–10⁸ Ω. Dry at 65 °C for 3–4 hours. A hardened nozzle is worthwhile for long jobs. |
| **ESD-ABS** (CNT): 230–255 °C | 40–50 °C from the Top Cover; up to 60 °C only with a controlled heater and motherboard cooling | HDT about 90 °C. Continuous service about 75–85 °C. | ESD-safe enclosures, trays, and fixtures that must survive a warm workshop | Some vendors specify a 100–110 °C bed; the U1 stops at 100 °C. |
| **ESD-PC** (CNT): 270–295 °C | 50–60 °C is the U1 maximum, which is below what polycarbonate normally wants | HDT about 110–135 °C. Continuous service about 100–120 °C. | High-temperature ESD fixtures, connector housings, semiconductor handling parts | The U1's 100 °C bed is below the 110–120 °C that vendors specify. Large parts will warp, so keep them small and use a brim and adhesive. |

> [!abstract] Overview
> These filaments are thermoplastics filled with carbon black or carbon nanotubes (CNTs). The filler forms a percolating network that turns an insulator into a resistor. That is the whole story: they are **resistive traces**, not wire replacements. Conductive grades carry milliamps over short distances and make good sensors and touch electrodes. ESD-safe grades are deliberately two to four orders of magnitude less conductive, so they bleed static charge away slowly instead of sparking. Neither family is safe for mains voltage, and ESD-safe is not the same thing as electrically safe or flame retardant.

## 1. What the filler actually does

Unfilled PLA, PETG, ABS, PC and TPU are insulators with surface resistivities around 10¹⁴ to 10¹⁷ Ω per square. Adding a conductive filler changes that only after the loading passes the **percolation threshold**, the point at which particles touch often enough to form a continuous path through the polymer. Below the threshold the part is still an insulator; just above it, resistivity can fall by many orders of magnitude over a small change in filler content.

The two fillers behave very differently.

**Carbon black** is cheap and roughly spherical. It needs a high loading, commonly 15–25 % by weight, to percolate. The result is genuinely conductive but also stiffer, more brittle, and rougher than the base polymer, and its resistance drifts more with temperature and flexing. It is the usual filler in conductive PLA and conductive TPU.

**Carbon nanotubes** have an extremely high aspect ratio, so they overlap at loadings of a few percent, often around 1.5–5 % by weight. The base polymer keeps most of its toughness and surface finish, and there is little loose particulate to shed. This is why CNT compounds dominate industrial ESD filament. They are also much more expensive.

The filler does not decide the class. A CNT compound can be conductive if it is loaded heavily, and a carbon-black compound can be dissipative if it is loaded lightly. The class is decided by the measured resistance of the finished part.

## 2. Conductive, dissipative, antistatic and insulating

The words are often used loosely, and the standards are precise about them.

| Class | Typical surface resistance | What it does | Typical use |
| :--- | :--- | :--- | :--- |
| Conductive | Below 10⁴ Ω | Passes current with a measurable but modest voltage drop | Low-current traces, touch electrodes, sensors |
| Static dissipative (ESD-safe) | 10⁴ to below 10¹¹ Ω | Bleeds charge to ground slowly, without a spark | PCB jigs, trays, carriers, cleanroom tooling |
| Insulative | Above about 10¹¹–10¹² Ω | Holds charge; can generate triboelectric charge | Normal printed plastic, high-voltage insulation |

Two standards matter here, and they do different jobs. **ANSI/ESD S20.20** is a programme standard: it describes how to run an ESD control programme, including grounding, training, auditing and product qualification. It does not classify a material. Material classification comes from **ANSI/ESD S541** for packaging and from **ANSI/ESD STM11.11** for surface resistance and **STM11.12** for volume resistance. IEC 61340-5-1 uses similar bands. Quoting S20.20 as if it were a material specification is a common mistake.

"Antistatic" is not a resistance band at all. It describes a material that generates little charge and does not hold it, and antistatic additives can work at resistances that are still quite high. Treating everything above 10¹⁰ Ω as "antistatic" and everything above that as "insulating" muddles two different ideas. In practice, ordinary printed plastic sits above roughly 10¹² Ω and behaves as an insulator.

Surface resistance in Ω per square and volume resistivity in Ω·cm are also not interchangeable. One describes a surface; the other describes a bulk material. A datasheet that gives only one of them cannot be converted into the other without knowing the geometry.

## 3. Designing a trace that carries current

The governing equation is the same one used for any conductor:

**R = ρ × L / A**

where R is resistance in ohms, ρ is volume resistivity in Ω·cm, L is length in cm and A is cross-sectional area in cm².

### Checking a published number

Proto-pasta publishes a typical resistance of 2.0–3.5 kΩ for a 10 cm length of 1.75 mm filament. That is a measurement, not a resistivity, so it can be converted:

- Diameter 1.75 mm gives a radius of 0.0875 cm and an area of π × 0.0875² = 0.0241 cm².
- Rearranging the equation gives ρ = R × A / L.
- At 2.0 kΩ: ρ = 2000 × 0.0241 / 10 = 4.8 Ω·cm.
- At 3.5 kΩ: ρ = 3500 × 0.0241 / 10 = 8.4 Ω·cm.

So the measured filament corresponds to roughly **5–8 Ω·cm**. The nominal figure quoted for the same material is about 15 Ω·cm, which would predict 6.2 kΩ for the same 10 cm length. The two numbers disagree by roughly a factor of two, probably because the nominal value was measured on a moulded plaque while the filament has its filler aligned along the extrusion direction. Use the measured resistance for design work, and measure your own prints rather than trusting either figure.

### A worked example that fails

Suppose you print a 40 mm long trace, 1.0 mm wide and 0.2 mm thick, in a material with ρ = 15 Ω·cm:

- A = 0.10 cm × 0.02 cm = 0.0020 cm².
- R = 15 × 4.0 / 0.0020 = 30,000 Ω, or 30 kΩ.

At 5 mA the voltage drop is I × R = 0.005 × 30,000 = **150 V**, and the dissipation is I²R = **0.75 W**. The circuit cannot work, and the trace will get hot.

### The same current in a better geometry

Now make the trace 10 mm long, 3 mm wide and 0.6 mm thick:

- A = 0.30 cm × 0.06 cm = 0.018 cm².
- R = 15 × 1.0 / 0.018 = 833 Ω.

At 2 mA the drop is 1.7 V and the dissipation is 3.3 mW, which is usable for a sensor input. At 20 mA the drop would be 16.7 V and the dissipation 0.33 W, which is not.

The lesson is that geometry matters more than the headline resistivity. A trace has to be short, wide and thick, and the current has to be small.

### Voltage drop and power density

Keep the drop across the trace to a small fraction of the supply, ideally below 5–10 %, and calculate it explicitly with **V = I × R**. Then calculate the heat with **P = I²R** and compare it with the surface area that can shed it.

A useful first-order limit is **about 10 mW per cm² of exposed surface**. With natural convection and radiation combined, an effective coefficient of roughly 10 W/(m²·K) gives a temperature rise near 10 K at that power density. Printed polymer conducts heat poorly, so heat generated in the middle of a wall cannot escape sideways. Anything above that limit needs an infrared camera or a thermocouple on the real part, not a calculation.

### Hot spots, fuses and anisotropy

A printed trace is not uniform. Layer boundaries, seams, under-extruded corners and nozzle travel moves all create local resistances that can be several times higher than the bulk. Since dissipation scales with resistance at constant current, a thin spot runs hotter, softens first, deforms, and changes resistance again. PLA softens at 55–60 °C, which is well below the temperature a badly designed trace can reach.

Do not rely on the trace to act as a fuse. It will not open cleanly; it will sag, char or short against a neighbouring trace. Fit a real fuse rated just above the intended current, and never leave a powered conductive print unattended.

Anisotropy is the other trap. Resistance measured through the layer stack is commonly **10–100 times** higher than resistance measured along the extrusion lines, because current has to cross weak interlayer contacts. Design so that current flows in the XY plane, and treat any Z-direction path as a separate, much worse conductor.

## 4. Why these are not wire replacements

A copper wire of the same size has a resistivity of about 1.7 × 10⁻⁶ Ω·cm. Conductive PLA is roughly six orders of magnitude worse, and ESD-PETG is another three to six orders worse than that. The consequences are not subtle.

- **Never connect mains voltage** of 120–240 V AC to a printed conductive part. The part is not rated for insulation, creepage, tracking, flame resistance or fault current, and a failure can expose live metal.
- **Do not use printed traces for power distribution.** Use wire for power and ground, and use the printed trace only for signals, sensing or short low-current links.
- **Do not use a printed part as a protective earth.** A resistive path is not a bonding conductor.
- **Keep currents in the milliamp range.** A few milliamps through a short, wide trace is realistic. Hundreds of milliamps is not.
- **Treat ESD-safe parts as static-control devices, not as electrical insulation.** A dissipative part can still pass enough current to be a hazard if it touches live circuitry.

Used within those limits, printed conductors are genuinely useful: they make touch surfaces, strain gauges, pressure sensors, low-current LED demonstrations and embedded wiring in enclosures. They do not replace wire.

## 5. Drying

Carbon black and CNTs have a large specific surface area, so these filaments adsorb moisture more readily than the base polymer suggests. Wet filament foams in the nozzle, which breaks the filler network and makes resistance inconsistent from part to part. Dry every spool before a critical print.

| Material | Drying schedule |
| :--- | :--- |
| Conductive PLA | 45–55 °C for 4–6 hours |
| Conductive TPU | 50–60 °C for 6–8 hours |
| ESD-PETG | 65 °C for 3–4 hours |
| ESD-ABS | 70–80 °C for 4 hours |
| ESD-PC | 80–90 °C for 4 hours; some vendors specify 120 °C, which most desktop dryers cannot reach |

Do not exceed about 55 °C on conductive PLA. The high filler loading makes the filament brittle, and a hot spool can take a permanent set. Store the spools sealed below 10 % relative humidity, and print from a dry box where possible. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]].

## 6. Nozzle and hotend on the Snapmaker U1

The stock U1 hotends are four integrated 0.4 mm **stainless steel** units. The nozzle is not separately serviceable, so a worn or clogged unit is replaced as a whole. Hardened steel hotends are an optional accessory sold in four-packs of a single diameter; 0.2, 0.4, 0.6 and 0.8 mm are offered, and different diameters cannot officially be mixed in one print.

Carbon black and CNT fillers are only mildly abrasive compared with carbon fibre or glass fibre. The stainless stock nozzle is acceptable for occasional use and for 0.4 mm work. For long production runs, or for filled material used regularly, fit a hardened steel hotend in the diameter you need. A 0.6 mm hardened nozzle is the better choice for conductive PLA and conductive TPU because it reduces backpressure and clogging, and it lays down wider, lower-resistance traces.

Do not use 0.2 mm nozzles with heavily filled conductive material. The combination of large particles and high backpressure clogs small orifices quickly. See [[04 - Nozzles and Their Types]] and [[05 - Layer Height and Nozzle Size]].

Hardened steel runs a little cooler at the tip than stainless or brass, so add about 5–10 °C when you switch, then confirm with a temperature tower.

## 7. Nozzle, bed and chamber temperatures

### Nozzle

- **Conductive PLA:** 215–230 °C. It needs more heat than ordinary PLA because the filler raises viscosity.
- **Conductive TPU:** 235–250 °C. Recreus publishes 250 °C for its conductive Filaflex.
- **ESD-PETG:** 250–280 °C. Polymaker allows 250–290 °C; 3DXTech recommends 260–280 °C.
- **ESD-ABS:** 230–255 °C. 3DXTech's own recommendation is 220–240 °C, so start low and check layer adhesion.
- **ESD-PC:** 270–295 °C. 3DXTech allows 260–300 °C, and the U1's ceiling is 300 °C, so there is almost no headroom.

Nozzle temperature also affects the measured resistance of CNT compounds. Hotter, slower printing gives the filler more time to form contacts, and Polymaker explicitly notes that higher nozzle temperature lowers surface resistivity. The size of the effect depends on the formulation and can be around an order of magnitude, not a fixed number. If a part must meet an ESD target, print a coupon at the production settings and measure it; do not assume the spool's datasheet value.

### Bed

- **Conductive PLA and TPU:** 50–60 °C on PEI. Use a release agent with TPU.
- **ESD-PETG:** 70–80 °C on textured PEI.
- **ESD-ABS:** 95–100 °C. Vendors often ask for 100–110 °C, and some datasheets specify 105–110 °C; the U1 cannot exceed 100 °C.
- **ESD-PC:** 100 °C, which is the machine maximum. Vendors ask for 110–120 °C, so expect weaker first-layer adhesion and more warp.

### Chamber

The U1 has no stock chamber heater. The optional Top Cover gives passive heating to about 50 °C, and a BIQU Panda Breath can reach 60 °C, but only with community firmware such as paxx12's Extended Firmware or DragonBreath. Stock firmware does not control it. A chamber heater also requires full-board motherboard cooling; a driver-only fan is not enough, because the RK3562 throttles at 85 °C.

- **Conductive PLA and TPU:** leave the cover open and the heater off. These materials need cooling, not heat.
- **ESD-PETG:** ambient. A warm chamber is not required.
- **ESD-ABS:** 40–50 °C from the Top Cover is enough for most parts. Use 55–60 °C only for tall parts and only with motherboard cooling.
- **ESD-PC:** the U1 tops out at 60 °C, while polycarbonate generally wants 90 °C or more for large parts. Small ESD-PC parts can be printed; large ones will warp and delaminate. That is a machine limit, not a settings problem.

See [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]].

## 8. Speed, flow and cooling

These materials do not want speed. The machine can deliver 32 mm³/s with Snapmaker ABS at 280 °C, but that figure is irrelevant here.

- **Conductive PLA:** 30–60 mm/s and 4–7 mm³/s.
- **Conductive TPU:** 20–40 mm/s and 3–6 mm³/s.
- **ESD-PETG, ESD-ABS, ESD-PC:** 50–100 mm/s and 8–12 mm³/s.

Slower printing improves interlayer contact and lowers resistance, especially in the Z direction. It also reduces the chance of tearing the filler network with high shear.

Part cooling should be modest. Conductive PLA prints well at 30–50 % fan. Conductive TPU and ESD-PETG are happier at 20–40 %. ESD-ABS and ESD-PC should run with 0–15 % fan, or none at all, to preserve layer strength.

Keep retraction short. Conductive PLA is brittle and snaps easily, so 0.6–1.0 mm at 30 mm/s is enough on a direct-drive toolhead. Conductive TPU needs less, around 0.4–0.8 mm at 20 mm/s. See [[07 - Print Speeds and Volumetric Flow]].

## 9. Slicing for predictable resistance

For a trace, infill is not structural filler; it is the conductor. Set the trace region to 100 % infill with an aligned rectilinear pattern, and orient the infill so the lines run continuously from one terminal to the other. A trace made of crossing lines has a high and unpredictable resistance because current has to hop between lines.

Use three or more perimeters on the trace so the outer skin and the core are connected. Set line width to about 120 % of nozzle diameter, and raise flow slightly, to 102–105 %, so adjacent lines fuse without gaps. Do not go further than that, or the part gains bumps that ruin contact with a probe or a mating surface.

Ironing the top of a touch pad at low speed and about 15 % flow fuses the surface into a more uniform electrode and improves skin contact. It does not make the pad more conductive in bulk.

## 10. Multi-toolhead work on the U1

The U1 is a toolchanger with four independent toolheads, so a conductive or ESD material can have a dedicated hotend while structural plastic runs in another. That avoids most cross-contamination and removes the manual swap that a single-nozzle printer needs.

A practical setup for a printed circuit board is:

- Toolhead 1: ordinary PLA or PETG for the substrate and enclosure.
- Toolhead 2: conductive PLA for traces, touch pads and battery contacts.
- Toolhead 3: translucent PLA or PETG for a light pipe or diffuser.
- Toolhead 4: ESD-PETG for a connector shroud or handling surface, if the part needs one.

A wearable sensor can use ordinary TPU in one toolhead and conductive TPU in another.

Two cautions apply. First, a dedicated toolhead is not a zero-residue toolhead. A few milligrams of conductive polymer left in a nozzle will contaminate the next insulating part, so keep a prime tower and a wipe sequence. Second, ooze is a real short-circuit risk: a single string of conductive PLA across two traces can ruin a circuit. Enable the prime tower, enable "avoid crossing perimeters" in OrcaSlicer, and inspect the first layers.

The toolchanger does make one thing much easier than a single-nozzle machine: you can pair chemically incompatible materials, such as PLA and PETG, as zero-gap support interfaces, because each material stays in its own melt zone. That is a support trick, not a reason to skip the wipe tower, and it does not eliminate ooze.

## 11. Terminations that stay low-resistance

The weak point of every printed circuit is the joint between metal and plastic.

**Do not expect to solder directly to carbon-black or CNT filament.** A soldering iron at 350 °C melts the polymer before it wets the filler, and the result is a brittle, high-resistance joint. The exception is metal-filled material such as Multi3D Electrifi, whose copper loading and much lower resistivity make a soldered joint feasible; even then use a low iron temperature, a short dwell and a mechanical strain relief.

For carbon-filled materials, use one of these instead:

1. **Silver conductive epoxy or nickel paint.** MG Chemicals 8331 or a comparable silver epoxy gives the lowest contact resistance. Mask the area, apply thinly, cure according to the datasheet, and mechanically support the wire.
2. **A compression terminal.** Trap the trace between a brass insert, a washer and a screw, or use a spring contact. This is repeatable and easy to service.
3. **A heat-set insert, used correctly.** Brass inserts work well as mechanical anchors, but the insertion temperature must match the polymer. For PLA, set the iron to **160–180 °C**, not 210 °C, or the surrounding polymer will collapse. Build a boss around the insert with an outside diameter of roughly four times the insert diameter, and leave enough wall to take the hoop stress.
4. **A printed pocket plus a pause.** Pause at the right layer and embed a pre-tinned LED, a coin-cell clip or a pogo-pin block, then print over the leads. This gives a gas-tight mechanical contact without adhesive.

Whatever method you use, measure the joint resistance with a four-wire or at least a compensated two-wire measurement. A joint that looks fine can add more resistance than the whole trace.

## 12. Troubleshooting

**The LED is dim or does not light.** The trace is probably too long, too thin, or running through the layer stack. Calculate R, then widen and shorten the trace, raise the layer thickness, and check the joint resistance. Remember that a 3 V coin cell has enough internal resistance to limit current on its own, so a working coin-cell demo does not prove the trace could carry any real load.

**Resistance varies from part to part.** Moisture, nozzle temperature and print speed all change the filler network. Dry the filament, fix the profile, and print a coupon with every new spool.

**The trace reads far higher than expected.** Current is probably crossing layers. Reprint so the trace lies flat in XY, or add a conductive via filled with silver epoxy.

**The part is brittle and snaps at the spool or the feeder.** Conductive PLA has low elongation. Use a wide, straight filament path, avoid tight bends, and keep the dry box close to the toolhead.

**An ESD part fails its target.** Check the measurement first: surface resistance depends on voltage, humidity, electrode geometry and the test standard. Then try a hotter nozzle and a slower outer wall. If the part still fails, the compound may not be suitable for the target band.

**The print warps in ESD-ABS or ESD-PC.** The bed is at the machine limit and the chamber is cooler than the material wants. Reduce part size, add a brim, use an adhesive, and accept that large ESD-PC parts are outside what this printer can do well.

See [[10 - Common Printing Issues, Debugging, and Physical Limits]].

## 13. Real products

Prices change constantly, so they are omitted here. Each link goes to the manufacturer's own product page, and the specifications below were read from those pages. Several of these stores rate-limit automated requests, which is why no HTTP status is claimed for them.

| Product | Matrix and filler | Electrical data | Printing | Notes |
| :--- | :--- | :--- | :--- | :--- |
| [Proto-pasta Electrically Conductive PLA](https://proto-pasta.com/products/conductive-pla) | PLA with carbon black | 2.0–3.5 kΩ per 10 cm of 1.75 mm filament, equivalent to about 5–8 Ω·cm | Standard PLA settings or hotter, no heated bed required | The reference hobby material. Brittle, and best treated as a resistor rather than a conductor. |
| [Proto-pasta Static Dissipative PLA](https://proto-pasta.com/products/static-dissipative-pla) | PLA with conductive filler | Surface resistance 10⁴–10⁶ Ω | Prints like PLA | A useful middle ground when conductive PLA is too conductive and ESD-PETG is inconvenient. |
| [Multi3D Electrifi](https://www.multi3dllc.com/product/electrifi) | Polyester with copper | 10,000 S/m, which is about 0.01 Ω·cm | 130–160 °C at 10–30 mm/s | Marketed as the most conductive filament available. The low print temperature means a low service temperature. |
| [Recreus Conductive Filaflex](https://recreus.com/en-en/products/filaflex-conductivo) | TPU, 92A, carbon filler | Resistivity not published on the product page; measure the printed part | 250 °C, bed room temperature to 55 °C, about 4 mm³/s with a 0.4 mm nozzle | Soft, stretchable conductor for wearables. No hardened nozzle required. |
| [NinjaTek Eel](https://ninjatek.com/shop/eel/) | TPU, 90A, conductive filler | Surface resistance in the low thousands of ohms; revisions of the technical datasheet quote values between about 1.5 × 10³ and 5.5 × 10³ Ω | 220–230 °C, bed room temperature to 45 °C | NinjaTek markets it as conductive and static dissipative at the same time; the datasheet values are solidly in the conductive band. |
| [Polymaker Fiberon PETG-ESD](https://us.polymaker.com/products/fiberon-petg-esd) | PETG with CNT | Surface resistance about 10⁶–10⁸ Ω | 250–290 °C, bed 70–80 °C, dry 65 °C for 3 hours | HDT 76 °C at 0.45 MPa. Polymaker notes that ESD performance can fade with abrasion and time, so retest used fixtures. |
| [3DXTech 3DXSTAT ESD-PETG](https://www.3dxtech.com/products/3dxstat-esd-petg-1) | PETG with multi-wall CNT | Target surface resistance 10⁴–10⁹ Ω | 260–280 °C, bed 60–90 °C, dry 65 °C for 4 hours, no chamber | A cleanroom-oriented compound with good chemical resistance. |
| [3DXTech 3DXSTAT ESD-ABS](https://www.3dxtech.com/products/3dxstat-esd-abs-1) | ABS with multi-wall CNT | Target surface resistance 10⁴–10⁹ Ω | 220–240 °C, bed 100–110 °C, dry 80 °C for 4 hours, chamber recommended | The bed specification exceeds the U1's 100 °C limit. |
| [3DXTech 3DXSTAT ESD-PC](https://www.3dxtech.com/products/3dxstat-esd-pc-1) | PC with multi-wall CNT | Target surface resistance 10⁴–10⁹ Ω | 260–300 °C, bed 110–120 °C, dry 120 °C for 4 hours, chamber recommended | The most demanding material in this group. The U1 cannot meet the bed or chamber recommendation. |
| [Spectrum PLA ESD](https://www.spectrumfilaments.com/en/product/pla-esd/) | PLA with carbon filler | Surface resistance 10⁷–10⁹ Ω per square | 185–230 °C | A European ESD PLA aimed at electronics handling and ATEX environments. |

A note on the market: fewer than ten brands sell a genuinely conductive filament for hobby printers, and several of those buy from the same compounder. ESD grades are more numerous because industrial users need them, but each brand's exact band differs. Verify the datasheet for the specific spool, not the product family.

Two products that are often mentioned in this category could not be verified and are therefore omitted: a Bambu Lab PETG-ESD or ABS-ESD, and a Polymaker PC-ESD. Neither appears in the current catalogues checked here. Kimya's ABS-ESD exists as a product line, but the manufacturer's site was unreachable during this check, so it is not linked.

## 14. Demonstration models

1. **[Fully 3D printable flashlight made from Proto-pasta Conductive PLA](https://www.thingiverse.com/thing:734602)** by Proto-pasta. A printed body, printed conductive paths and a squeeze switch that closes the circuit when the side of the body is pressed. It runs from a 9 V battery, and the designer uses a 10 cm length of filament as the LED's series resistor because that length measures about 1.5 kΩ. It is the clearest demonstration of what a resistive trace can and cannot do.
2. **[Conductive touch buttons for fischertechnik](https://www.printables.com/model/180417-conductive-touch-buttons-for-fischertechnik)** by juh. Buttons printed in conductive filament for capacitive touch hardware. A good first project because the currents are effectively zero.
3. **[Flexible conductive filament demo: the CR2032 tester](https://www.thingiverse.com/thing:2121357)** by Gerjan. A coin-cell LED tester printed in NinjaFlex and conductive TPU. It shows both the promise and the limits of stretchable conductors.
4. **[Conductive ABS potentiometer](https://www.thingiverse.com/thing:172845)** by jijimath. A slider potentiometer whose resistive element is printed in conductive ABS. The designer reports megaohm-level resistance and about four bits of usable resolution, which is an honest picture of what piezoresistive printing delivers.
5. **[Portable ESD tweezers](https://www.printables.com/model/1074941-portable-esd-tweezers)** by Gui. A printable tweezer body intended for ESD work. Print it in ESD-PETG or ESD-ABS; in ordinary PLA it is just a pair of plastic tweezers and provides no static control.

## 15. Videos

1. **[GreatScott! — Conductive 3D Printing Filament - Resistance/Power Test](https://www.youtube.com/watch?v=Fm8IR-lBfRQ)**. A bench measurement of resistance and power handling, and a useful reality check on how little current these materials can carry.
2. **[Clough42 — 3D Printing Filaments and Electricity: A Shocking Reality](https://www.youtube.com/watch?v=qAglQ8z72N4)**. Tests which filaments actually conduct, including the difference between carbon-filled and carbon-fibre-filled materials.
3. **[CHEP — 3D Printing Conductive PLA Filament](https://www.youtube.com/watch?v=z6MyeJPBN8I)**. Prints a calibration cube in conductive PLA and measures what the finished part actually does.
4. **[My Tech Fun — Testing Polymaker Fiberon PETG-rCF08 & PETG-ESD Filaments](https://www.youtube.com/watch?v=_cSzyAOvPKw)**. An independent look at an ESD PETG, including print settings and mechanical results.
5. **[3DFilaPrint — Strong ESD FIlament - ESD PETG by 3DXTech](https://www.youtube.com/watch?v=Pp9W7G6GxY0)**. A retailer-adjacent review of a 3DXTech ESD PETG, useful for seeing the material printed rather than only specified.

## 16. Safety

- **Electrical:** never use these materials at mains voltage, as protective earth, or as the only insulation between a user and a live circuit. Keep currents in the milliamp range and fit an external fuse.
- **Thermal:** a resistive trace can reach its own softening point long before a metal conductor would notice. Test powered parts with an infrared camera, and never leave them running unattended.
- **Dust:** sanding filled filament produces fine carbon or CNT dust. Wet-sand where possible, wear at least a P2 or N95 respirator, and use extraction or a HEPA vacuum. Do not dry-sand in a living space.
- **Emissions:** ABS-ESD emits styrene and other volatiles. Use the Top Cover with HEPA and activated carbon filtration, or ventilate the room.
- **Skin and food:** these are technical composites, not food-safe materials. Do not use printed conductive parts for food contact or as skin electrodes for prolonged medical monitoring without proper approval.

## Related notes

- [[00 - Filament Master Index]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[19 - Magnetic and Ferromagnetic Iron-Filled Filaments (Paramagnetic Iron-PLA and Rustable Composites)]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]

## Sources

- Proto-pasta, Electrically Conductive Composite PLA product page (resistance per 10 cm, printing notes): https://proto-pasta.com/products/conductive-pla
- Proto-pasta, Static Dissipative PLA product page (surface resistance): https://proto-pasta.com/products/static-dissipative-pla
- Multi3D, Electrifi product page (conductivity, print temperature): https://www.multi3dllc.com/product/electrifi
- Recreus, Conductive Filaflex product page (shore hardness, printing parameters): https://recreus.com/en-en/products/filaflex-conductivo
- NinjaTek, Eel product page and technical datasheet (surface and volume resistance): https://ninjatek.com/shop/eel/
- Polymaker, Fiberon PETG-ESD product page (surface resistance, HDT, drying, nozzle and bed settings): https://us.polymaker.com/products/fiberon-petg-esd
- 3DXTech, 3DXSTAT ESD-PETG: https://www.3dxtech.com/products/3dxstat-esd-petg-1
- 3DXTech, 3DXSTAT ESD-ABS: https://www.3dxtech.com/products/3dxstat-esd-abs-1
- 3DXTech, 3DXSTAT ESD-PC: https://www.3dxtech.com/products/3dxstat-esd-pc-1
- Spectrum Filaments, PLA ESD product page and technical data sheet: https://www.spectrumfilaments.com/en/product/pla-esd/
- ANSI/ESD S20.20, Protection of Electrical and Electronic Parts, Assemblies and Equipment (programme standard).
- ANSI/ESD S541, Packaging Materials for ESD Sensitive Items (material classification for packaging).
- ANSI/ESD STM11.11, Surface Resistance Measurement of Static Dissipative Planar Materials (surface resistance bands).
- ANSI/ESD STM11.12, Volume Resistance Measurement of Static Dissipative Planar Materials.
