---
title: "11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)"
tags:
  - 3d-printing
  - filaments
  - polycarbonate
  - pc
  - pc-abs
  - pc-pbt
  - engineering-plastics
  - high-temperature
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 275–300 °C for pure PC. Modified PC, PC-ABS and PC-PBT usually print at 250–280 °C. | 45–60 °C. The Snapmaker U1 cannot go above 60 °C, which is below the 70–100 °C chamber that Polymaker specifies for its PC grades. | HDT at 0.45 MPa is about 135–142 °C for pure PC, 107–117 °C for modified PC, around 100–110 °C for PC-ABS and 107 °C for PC-PBT. Continuous service temperature is lower than HDT. | Fan ducts and hotend shrouds, brackets and motor mounts, clear light covers and light pipes, impact-resistant tool and electronics housings. | Dry at 75–80 °C for 6–8 hours. A stainless steel nozzle is fine because unfilled PC is not abrasive. The U1 is at its thermal limit: small and medium parts are realistic, large parts will warp. Fit full motherboard cooling before using a chamber heater. |

> [!summary] Overview
> Polycarbonate is an amorphous engineering thermoplastic built from bisphenol A and either phosgene or diphenyl carbonate. Its backbone combines rigid aromatic rings with flexible carbonate linkages, which gives it a glass transition temperature near 147 °C in unmodified grades together with very high impact resistance. It is stiff, dimensionally stable, electrically insulating and naturally flame retardant to UL94 V-2 in many grades. It is also difficult to print: it needs a hot nozzle, a hot bed, a warm chamber and dry filament, and it is sensitive to sharp notches and to solvent stress cracking. On the Snapmaker U1 the material is supported with the Top Cover, but the machine's 300 °C nozzle, 100 °C bed and 60 °C chamber sit at or below what most PC datasheets ask for. Small and medium parts are achievable. Large parts are not, because the chamber cannot supply enough heat to control contraction.

## 1. What polycarbonate is and how the family differs

Polycarbonate is a polyester of carbonic acid. Industrial resin is made either by interfacial polycondensation of bisphenol A with phosgene or by melt transesterification of bisphenol A with diphenyl carbonate. The repeat unit contains a carbonate group, written as −O−(C=O)−O−, flanked by aromatic phenyl rings. The rings prevent large-scale chain rotation until the glass transition, which is why pure PC holds its shape to roughly 147 °C. The carbonate linkage is more flexible, and it allows a secondary beta relaxation near −100 °C. That relaxation lets small groups move at room temperature and lets the material yield under impact instead of cracking. This combination of a high glass transition and room-temperature ductility is unusual among transparent plastics, and it is the reason PC is used for machine guards, safety visors, power tool housings and light covers.

The same chemistry creates two weaknesses that matter in printed parts. The first is notch sensitivity. A sharp internal corner concentrates stress, and a PC part that survives a hammer blow can split from a small nick or a square corner. The second is environmental stress cracking. Under sustained tensile load, acetone, methyl ethyl ketone, toluene, gasoline, many cleaning agents and anaerobic methacrylate threadlockers can cause brittle cracks that appear hours or days later. Both weaknesses are design and assembly problems as much as printing problems.

Moisture is the third weakness. At melt temperature, water hydrolyses the carbonate linkage and reduces molecular weight. The visible result is silver streaking and bubbles, and the mechanical result is a part that looks fine but breaks like acrylic. Drying is not optional.

Three product families are sold as "PC" for printing, and they behave differently.

- **Pure or lightly modified PC** is based on standard bisphenol A resin, sometimes with a flow aid. Examples include 3DXTech 3DXMAX PC, which states a glass transition of 147 °C. It gives the highest heat resistance and the most warping.
- **Toughened or easy-print PC** is a reactively modified or blended PC with a lower glass transition, around 113 °C in the Polymaker grades. Polymaker PolyLite PC, PolyMax PC, Bambu Lab PC and Prusament PC Blend belong here. They print at lower temperatures, bond better between layers and warp less, but they give up roughly 25–35 °C of heat resistance.
- **PC-ABS and PC-PBT alloys** mix PC with a second phase. PC-ABS adds ABS for easier processing, better surface finish and electroplating compatibility. PC-PBT adds semi-crystalline PBT for chemical resistance and low-temperature toughness. Both are formulated for automotive and electronics work, and many grades demand a hotter chamber than a desktop machine can supply.

| Property | Pure PC | Modified or easy-print PC | PC-ABS | PC-PBT |
| :--- | :--- | :--- | :--- | :--- |
| Glass transition temperature | About 147 °C | 113 °C for PolyLite PC and PolyMax PC. Bambu Lab does not publish a Tg for its PC. | Not published. Vicat softening is 114 °C for Fiberlogy PC/ABS. | 140 °C for the PC phase, with a PBT melt near 223 °C |
| HDT at 0.45 MPa | About 135–142 °C | 111 °C (PolyLite PC), 114 °C (PolyMax PC), 117 °C (Bambu PC) | About 100–110 °C | 107 °C |
| HDT at 1.8 MPa | About 125–132 °C | 99–107 °C | About 90–100 °C | 91 °C |
| Tensile strength, XY | About 60–70 MPa | 53 MPa (PolyMax PC) to 69 MPa (PolyLite PC) | About 40–50 MPa | 50 MPa |
| Notched Charpy impact, XY | Unnotched impact is very high, but notched impact is much lower and method-dependent. | 4.1 kJ/m² (PolyLite PC), 21.3 kJ/m² (PolyMax PC) | About 20–50 kJ/m² | 33 kJ/m² at 23 °C, 15.7 kJ/m² at −30 °C |
| Appearance | Clear to translucent | Clear (PolyLite PC) or opaque | Opaque | Opaque |

The HDT figures come from the manufacturers' datasheets and use different methods, so treat them as a comparison guide rather than a design allowables table. HDT is measured under a defined load and is not a continuous service limit. A part that carries load at 110 °C will creep even if its HDT is 117 °C.

## 2. What the Snapmaker U1 can and cannot do with PC

The U1 has a maximum nozzle temperature of 300 °C, a maximum bed temperature of 100 °C and no stock chamber heater. Four toolheads, a 270 × 270 × 270 mm build volume and a maximum flow of 32 mm³/s are the other relevant numbers.

The nozzle is adequate. Pure PC wants 275–300 °C and modified PC wants 250–280 °C, so both fit inside the machine's range, although pure PC leaves no headroom for a cold hotend or a high-flow nozzle.

The bed is marginal. Prusament PC Blend specifies 110 ± 10 °C, Polymaker PC-PBT specifies 100–115 °C, and 3DXTech 3DXMAX PC specifies 110–120 °C. The U1 stops at 100 °C. A 100 °C bed with glue works for small parts, but the first layer is cooler than the resin was designed for, so adhesion is weaker and the top of the part cools faster than the bottom.

The chamber is the real limit. The optional Top Cover traps heat passively and typically holds around 50 °C. A BIQU Panda Breath can hold 60 °C, but only through community firmware, either paxx12's extended U1 firmware in WebSocket mode or DragonBreath. Stock firmware does not control the heater. Polymaker specifies a 70–100 °C chamber for PolyLite PC and PolyMax PC, 90–105 °C for Polymaker PC-ABS and 100–110 °C for PC-PBT. Bambu Lab specifies 45–60 °C for its PC, which the U1 can meet. Prusament and 3DXTech describe an enclosure as recommended rather than mandatory for their easier grades.

That difference explains the practical verdict. A PC part printed in a 55–60 °C chamber cools from the chamber temperature to room temperature, a drop of roughly 30–40 °C, and the thermal contraction has to go somewhere. Thin walls and small footprints can flex enough to absorb it. Thick sections, long straight runs and sharp corners cannot, so they lift, split between layers or crack after removal. On the U1, treat PC as a material for brackets, ducts, mounts, covers and cases up to roughly 100–150 mm in the longest dimension, with modest height and moderate infill. A full-bed PC print is not a realistic target, and no amount of slicer tuning changes the chamber temperature.

### Motherboard cooling is mandatory before any chamber heater

The U1's RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures when the chamber is heated without extra airflow over the mainboard. The firmware documentation states that additional active cooling on the motherboard is required. A 6015 fan aimed at the stepper drivers does not cool the RK3562 and is not sufficient on its own. Fit a full-board cooler before running the Panda Breath, and accept that sustained chamber heat increases wear on electronics and is unlikely to be covered by warranty.

### A workable U1 procedure for small and medium parts

1. Dry the spool at 75–80 °C for 6–8 hours and keep it in a dry box while printing.
2. Fit the Top Cover and, if available, the chamber heater with motherboard cooling already installed.
3. Heat the bed to 100 °C and let the chamber stabilise at 50–60 °C for at least 20 minutes before starting. A cold chamber is the most common cause of layer cracking.
4. Use a glue stick, Magigoo PC or a comparable PC adhesive as a separation layer on the PEI sheet.
5. Add an 8–10 mm brim and, for tall parts, a single-wall draft shield.
6. Print the first layer slowly, at 20–30 mm/s, with a moderate squish.
7. Let the plate cool below 50 °C before removing the part. Removing a warm PC part bends it and starts cracks.
8. Anneal the part if it will carry load or contact solvents.

## 3. Drying and storage

PC absorbs less water by weight than nylon, typically in the range of 0.15–0.35%, but its melt is far more sensitive to that water. Hydrolysis at melt temperature, roughly 270–300 °C, breaks the carbonate chain and permanently reduces toughness. Bubbles, a rough surface, a weak first layer and parts that snap along layer lines are the usual signs.

- Dry at 75–80 °C for 6–8 hours. Polymaker specifies 75 °C for 6 hours, Bambu Lab specifies 80 °C for 8 hours, and eSUN specifies 70 °C for more than 6 hours.
- Use a forced-air dryer or a dedicated filament dryer with a measured chamber temperature. Kitchen ovens overshoot and can soften or fuse the spool.
- Check the spool material. Cardboard and ABS spools can deform near 80 °C. A PC or metal spool is safer at the top of the range.
- Store sealed at below 15–20% relative humidity with silica gel or molecular sieve, and print directly from a dry box when possible.

Over-drying is a minor risk for the polymer itself because the glass transition is far above 80 °C, but it is a real risk for the spool and for any filament additives. Six to eight hours at 75–80 °C is enough. Longer times add little.

See [[01 - Drying Filament]] and [[02 - Storing Filament]] for dryer selection and [[03 - Combining Storing and Drying - Science and Rational Approach]] for a continuous dry-box workflow.

## 4. Nozzle, layer geometry, flow and cooling

### Nozzle and hotend

Unfilled PC is not abrasive, so the stock 0.4 mm stainless steel hotend on the U1 is suitable. A hardened steel hotend is optional and adds wear resistance if the same machine also runs PC-CF or other filled materials, but it is not required for plain PC. Hardened steel conducts heat less well than brass, so add 5–10 °C to the nozzle setpoint when using one.

The stock hotend is an integrated assembly, so a worn or clogged nozzle is replaced as a unit rather than by swapping only the nozzle. Keep a spare.

### Layer height and line width

- Layer height of 0.16–0.24 mm on a 0.4 mm nozzle gives a good balance between detail and interlayer strength.
- Line width of 0.46–0.52 mm, which is 115–130% of the nozzle diameter, presses the viscous melt into the previous layer and improves bonding.
- A 0.6 mm nozzle is a reasonable choice for structural brackets. It puts down a thicker bead that stays above the glass transition for longer and usually gives stronger layer bonds, at the cost of detail.

See [[05 - Layer Height and Nozzle Size]] and [[04 - Nozzles and Their Types]].

### Flow and speed

The U1's 32 mm³/s figure was measured with Snapmaker ABS at 280 °C. PC is much more viscous, so do not use that number as a target.

- Pure PC: 6–10 mm³/s, with linear speeds around 40–80 mm/s.
- Modified PC and PC-ABS: 8–12 mm³/s, with linear speeds around 60–100 mm/s.

Printing faster than the melt can flow produces under-filled perimeters, matte extrusions and weak layer bonds. It can also raise back pressure enough to cause extruder skipping. Reduce speed rather than raising temperature if the surface turns dull.

### Part cooling

- Normal layers: 0–10% fan. PC needs to stay hot; strong cooling causes delamination.
- Bridges and steep overhangs: 20–30% fan, applied only to those features.
- Because the glass transition is high, PC solidifies quickly by conduction into the previous layer and by radiation. It does not need the high fan speeds used for PLA.

See [[07 - Print Speeds and Volumetric Flow]] and [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]].

### Retraction and pressure advance

Direct drive retraction of 0.6–1.0 mm at 30–35 mm/s works well. Avoid retractions longer than about 1.5 mm at 290 °C, because molten PC can be pulled into the cold zone of the heat break and cause a partial clog. Pressure advance is typically 0.02–0.04 and should be calibrated per spool.

## 5. Bed adhesion and release

PC adheres very strongly to PEI, and the usual failure is not the part lifting but the PEI sheet being damaged when the part is forced off. Prusa explicitly warns that printing PC on a smooth PEI sheet without a separation layer can damage the surface. Use a glue stick, Magigoo PC or a polymer adhesive designed for PC on every print.

- Apply a thin, even layer and let it dry before heating.
- Keep the bed at 100 °C for the whole print. A cooler bed saves energy but increases the chance of the part lifting.
- An 8–10 mm brim helps thin parts. Rounded footprints warp less than sharp corners.
- On long, flat parts, low-profile clips on the spring steel sheet reduce the chance of the sheet lifting off the magnetic base.
- Let the part cool completely before removal. If it resists, slide a thin nylon spatula under the brim rather than prying at the part.

Do not assume that PC will always release cleanly from bare PEI at 100 °C. Some grades bond hard enough to tear the coating, and the safe practice is a release agent regardless of the sheet.

## 6. Annealing and post-processing

Annealing relaxes the residual stress left by uneven cooling. It reduces the risk of environmental stress cracking and makes the part more dimensionally stable, but it can also distort thin parts, so support the part and ramp the temperature slowly.

- **Modified PC:** Polymaker specifies 90 °C for 2 hours. Bambu Lab specifies 85–100 °C for 6–12 hours for its PC. Both are safe starting points and both fit inside a laboratory oven or a temperature-controlled dryer. Prusament PC Blend quotes heat resistance to 113 °C, but Prusa does not list an annealing step in its PC guidance, so start at 90 °C.
- **Pure PC:** a higher anneal is possible, but the useful window is limited. Annealing at 110–125 °C is 22–37 °C below a 147 °C glass transition, not the 15–20 °C that is sometimes claimed. At the top of that range thin sections can sag. Use 110–120 °C for 2–3 hours only if the part is supported, and ramp at 1–2 °C per minute.
- **Ramp down slowly.** A fast cooldown reintroduces the stress the anneal was meant to remove.

After annealing, expect small dimensional changes. Measure critical features before and after, and cut test parts rather than assuming the process is free.

### Solvent and assembly warning

Never apply standard anaerobic threadlockers such as Loctite 242, 243 or 271 to loaded PC bosses, and keep acetone, methyl ethyl ketone, toluene, gasoline and strong alkalis away from stressed parts. These agents cause environmental stress cracking, and a boss that survived installation can shatter days later. Use a plastic-compatible threadlocker, a nylon-insert locknut or a mechanical retaining method, and test any adhesive or solvent on a scrap print first.

Cyanoacrylate adhesives can also craze PC. Two-part epoxy and polyurethane adhesives are generally safer, but the joint should still be tested under load.

Acetone does not vapour-smooth PC the way it smooths ABS. It attacks and clouds the surface. For a glossy finish, sand progressively to 2000 grit, polish, and apply a clear coat. For transparent parts, slow the print, use aligned perimeters or high flow, and accept that the result is translucent rather than optically clear. See [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]] and [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)]].

### Painting and plating

PC-ABS can be sanded, primed and painted with automotive enamels, and it can be electroplated because the ABS phase accepts the standard etching and plating process. Plain PC is harder to paint reliably and needs a compatible primer. Clean and scuff all surfaces first, and avoid solvent-heavy cleaners.

## 7. Failure modes and design rules

| Symptom | Likely cause | What to change |
| :--- | :--- | :--- |
| Corners lift from the plate | Chamber too cool, too much infill, sharp footprint | Raise chamber to 55–60 °C, lower infill, add a brim, round the corners |
| Part splits between layers | Fan too high, nozzle too cold, layer time too short | Reduce fan to 0–10%, raise nozzle 5–10 °C, print two parts or add a draft shield |
| Brittle snap at a corner | Sharp notch, wet filament, overheated polymer | Add a radius of at least 1 mm, dry the spool, check the nozzle temperature |
| Bubbles and silver streaks | Moisture | Dry at 75–80 °C for 6–8 hours |
| Cracks appear days after assembly | Environmental stress cracking from solvent or threadlocker | Remove the solvent, use a plastic-safe fastener, anneal the part |
| Part deforms in service | Service temperature above the HDT or sustained load | Use a higher-HDT grade or a different material |

Design rules that matter more than slicer settings:

- Use generous fillets and radii. A small radius at an internal corner can markedly increase the load a part survives.
- Keep wall thickness uniform. Thick blocks cool unevenly and pull the part apart.
- Avoid large, flat, solid sections. Use ribs and a moderate infill instead.
- Orient layers so that the main load runs in the plane of the layers, not across them.
- Remember that PC creeps under sustained load. Bolted joints lose preload over time, especially when warm, so use washers and check torque.

## 8. Using the U1's four toolheads

The U1 is a toolchanger, so a support material can be printed without sharing a melt zone with the PC. That removes cross-contamination but does not remove the need for a prime tower or a wipe sequence.

- **PC with PC supports:** the simplest and most reliable option. The interface bonds strongly, so design the support for mechanical removal.
- **PC with HIPS:** HIPS prints at around 230–240 °C and can work as a breakaway interface, but the bond to PC varies by grade. Test a small part before committing a long print.
- **PC with PVA:** not recommended. PVA needs to be kept dry and can soften or ooze in a 60 °C chamber, and its interface with PC is unreliable.
- **PC with TPU:** useful for gaskets, bumpers and overmoulded grips. TPU prints well below PC's temperature and can be used in a warm chamber, although it softens and strings more at 60 °C. The bond between the two materials is mechanical rather than chemical.

Keep the chamber closed during tool changes, and allow the prime tower enough volume to purge the previous material fully. See [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]] for ironing settings and [[10 - Common Printing Issues, Debugging, and Physical Limits]] for troubleshooting.

## 9. Real demo models

1. **[Printables: Improved MK4 Fan Duct](https://www.printables.com/model/621536-improved-mk4-fan-duct)**. The designer recommends Prusament PC Blend Carbon Fiber because the duct sits close to the heater block and needs heat resistance and low weight. It is a realistic example of a part that fails in PLA and survives in PC.
2. **[Printables: Filament high temperature test / comparison model](https://www.printables.com/model/1199380-filament-high-temperature-test-comparison-model)**. A simple box and bar set for comparing how much heat different filaments tolerate. The designer lists PC among the materials it was made for.
3. **[Printables: ASA, PC and TPU TEST](https://www.printables.com/model/1244701-asa-pc-and-tpu-test)**. A multi-material test printed on a Prusa XL with PC as the primary material. It is a useful reference for toolchanger work and for checking how PC bonds and cools next to other polymers.
4. **[Printables: Vortex Crossfire II Red dot Protectors](https://www.printables.com/model/1386455-vortex-crossfire-ii-red-dot-protectors)**. A red-dot lens protector designed around 2.5 mm polycarbonate sheet, with a printable lens guide in PETG or PC for anyone who cannot source the sheet. It is a direct example of PC used for impact resistance rather than heat resistance.
5. **[MakerWorld: Filament dryness test](https://makerworld.com/en/models/2019450-filament-dryness-test)**. A small test piece for judging moisture before a long print. The designer's reference photos include PC and explain how bubbles, surface imperfections and layer separation reveal wet filament.

## 10. Videos

1. **[CNC Kitchen: Prusament PC Blend, the strongest material I tested](https://www.youtube.com/watch?v=onjT1Y7oFuU)**. Stefan tests Prusament PC Blend and compares its strength with other filaments, with attention to layer bonding and print conditions.
2. **[CNC Kitchen: The King of 3D printing materials? Polymaker PolyMax PC review](https://www.youtube.com/watch?v=tXLroVcw1MQ)**. A mechanical review of a toughened PC, including impact and layer adhesion tests.
3. **[My Tech Fun: BambuLab PC-FR review, the Flame Retardant PolyCarbonate](https://www.youtube.com/watch?v=RGREk1GsES0)**. Testing of a flame-retardant PC, with attention to strength, layer adhesion and print settings.
4. **[MatterHackers: How to succeed when 3D printing with polycarbonate filament](https://www.youtube.com/watch?v=xxOd_cvjH9g)**. A practical walkthrough of bed adhesion, enclosure use, temperature and drying for PC.
5. **[Made with Layers (Thomas Sanladerer): Polycarbonate is incredibly strong](https://www.youtube.com/watch?v=pc9qNfqVKRw)**. A short explanation of why PC is tough and how its strength depends on printing conditions.

## 11. Commercially available PC filaments

Prices vary by region and change often, so they are deliberately omitted. The print settings are the manufacturer's own published recommendations.

| Brand and product | Type and key data | Maker's stated settings | Fit with the U1 | Link |
| :--- | :--- | :--- | :--- | :--- |
| Polymaker PolyLite PC | Modified PC, Tg 113 °C, HDT 111 °C at 0.45 MPa, clear | 250–270 °C nozzle, 90–105 °C bed, chamber 70–100 °C | Nozzle and bed fit. Chamber is below the maker's range, so expect more warp on large parts. | [Polymaker US](https://us.polymaker.com/products/polylite-pc) |
| Polymaker PolyMax PC | Toughened PC, Tg 113 °C, HDT 114 °C, notched Charpy 21.3 kJ/m² | 250–270 °C nozzle, 90–105 °C bed, chamber 70–100 °C | Same as PolyLite PC. The tougher grade tolerates bending better but still needs a warm chamber. | [Polymaker US](https://us.polymaker.com/products/polymax-pc) |
| Bambu Lab PC | PC, HDT 117 °C | 260–280 °C nozzle, 90–110 °C bed, chamber 45–60 °C | The best match to the U1 envelope. Keep the bed at 100 °C and the chamber at 55–60 °C. | [Bambu Lab store](https://us.store.bambulab.com/products/pc-filament) |
| Prusament PC Blend | Toughened PC blend, resistant to about 113 °C | 275 ± 10 °C nozzle, 110 ± 10 °C bed | Bed is above the U1 limit. Use 100 °C, glue and a brim, and keep parts small. | [Prusa e-shop](https://www.prusa3d.com/product/prusament-pc-blend-jet-black-970g/) |
| eSUN PC-HT | High-temperature PC, HDT 113.6 °C | 290–300 °C nozzle, 100–110 °C bed, enclosed chamber | Nozzle is at the limit, bed is at or above it. Small parts only. | [eSUN](https://www.esun3d.com/pc-ht-product) |
| Overture PC Professional | PC, marketed for thermal stability up to 110 °C | 250–270 °C nozzle, 80–100 °C bed, enclosure recommended | Good fit. The lower nozzle range suits the stock hotend. | [Overture 3D](https://overture3d.com/products/overture-pc-professional-filament) |
| Fiberlogy PC/ABS | PC-ABS alloy, HDT 110 °C, Vicat 114 °C | 260–280 °C nozzle, 100 °C bed, enclosure recommended | Bed is at the limit. Suitable for small brackets and housings, not large panels. | [Fiberlogy](https://fiberlogy.com/en/fiberlogy-filaments/pc-abs/) |
| 3DXTech ezPC | Easy-print PC, Tg 118 °C, HDT 112 °C | 255–275 °C nozzle, 90–110 °C bed, no heated chamber required | Good fit and the most forgiving option in this table. | [3DXTech](https://www.3dxtech.com/products/ezpc-polycarbonate-1) |
| 3DXTech 3DXMAX PC | Pure PC from Sabic Lexan resin, Tg 147 °C | 280–310 °C nozzle, 110–120 °C bed | Outside the U1 envelope at the top end. It can be run at 290–300 °C and 100 °C, but expect warping and reduced adhesion. | [3DXTech](https://www.3dxtech.com/products/3dxmax-r-pc) |
| QIDI PC/ABS-FR | Flame-retardant PC-ABS, UL94 V-0, HDT 102 °C | 260–280 °C nozzle, 70–80 °C bed, chamber 60–80 °C | The chamber requirement exceeds the U1 at the top of the range. Small parts only. | [QIDI US](https://us.qidi3d.com/products/qidi-tech-pc-abs-fr-filament) |

Two products deserve a warning rather than a recommendation. Polymaker PC-ABS requires a 90–105 °C chamber, and Polymaker PC-PBT requires 100–110 °C. Neither is practical on the U1 beyond very small parts. Polymaker's own wiki now states that PC-PBT is not being manufactured. PC-CF and other filled PC blends are covered in [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]], and ESD-PC is covered in [[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)]].

## 12. Related notes

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
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)]]

## 13. Sources

- Polymaker technical data sheet for PolyLite PC, including Tg, HDT, impact and recommended printing conditions: https://wiki.polymaker.com/polymaker-products/more-about-our-products/documents/technical-data-sheets/polycarbonate/polylite-tm-pc.md
- Polymaker technical data sheet for PolyMax PC: https://wiki.polymaker.com/polymaker-products/more-about-our-products/documents/technical-data-sheets/polycarbonate/polymax-tm-pc.md
- Polymaker technical data sheet for PC-PBT, including the 100–110 °C chamber requirement: https://wiki.polymaker.com/polymaker-products/more-about-our-products/documents/technical-data-sheets/polycarbonate/polymaker-pc-pbt.md
- Polymaker polycarbonate material overview, including the note that PC-PBT is not currently manufactured: https://wiki.polymaker.com/polymaker-products/polymaker-filaments/prime-materials/polycarbonate
- Bambu Lab PC filament guide, including drying, annealing and print settings: https://bambulab.com/en-us/filament/pc
- Bambu Lab wiki on ABS, ASA and PC usage, including chamber guidance: https://wiki.bambulab.com/en/filament/abs_asa_pc
- Prusa Knowledge Base article on polycarbonate, including the PEI separation warning: https://help.prusa3d.com/article/polycarbonate-pc_165812
- 3DXTech 3DXMAX PC product page, including Tg 147 °C and the 280–310 °C nozzle range: https://www.3dxtech.com/products/3dxmax-r-pc
- 3DXTech ezPC product page, including Tg 118 °C and the no-heated-chamber claim: https://www.3dxtech.com/products/ezpc-polycarbonate-1
- eSUN PC-HT product page: https://www.esun3d.com/pc-ht-product
- Snapmaker U1 product page for the machine's published specifications: https://www.snapmaker.com/snapmaker-u1
