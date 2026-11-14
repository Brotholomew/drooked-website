---
title: "17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)"
tags:
  - 3d-printing
  - filaments
  - pvb
  - polyvinyl-butyral
  - ipa-smoothing
  - investment-casting
  - transparent-filament
  - solvent-safety
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 205–225 °C on the U1. Some brands publish 190–220 °C, so start at the middle of the spool maker's range. | Not required. Print at ambient temperature with the Top Cover off or vented, and keep the chamber below about 40 °C. | Continuous service is roughly 40–50 °C in practice. HDT is about 52–60 °C at 0.45 MPa for most grades, up to 63 °C for Prusament, and the glass transition is about 60–68 °C. | Display vases and lamp shades, clear or translucent decorative parts, jewellery and prop pieces, and patterns for investment casting. | Very hygroscopic, so dry it at 50–60 °C. Layer adhesion is poor and Prusa advises against mechanical parts. Isopropyl alcohol smoothing is a serious fire and health hazard. |

> [!abstract] Overview
> Polyvinyl butyral (PVB) is an amorphous thermoplastic that prints much like PLA but dissolves or softens in isopropyl alcohol (IPA). That property lets you smooth layer lines into a glossy, glass-like surface without sanding, and it makes PVB useful for transparent display pieces and for investment-casting patterns that burn out of a ceramic shell. The trade-offs are real: PVB absorbs moisture quickly, its layer-to-layer adhesion is slightly worse than PLA, its heat resistance is PLA-like rather than engineering-grade, and the alcohol finishing process is flammable and toxic. It is a decorative and casting material, not a structural one.

## 1. What PVB Is and Why Alcohol Smooths It

PVB is made by reacting polyvinyl alcohol (PVA) with butyraldehyde under acid catalysis. The acetalisation does not go to completion, so commercial PVB is a random terpolymer with three kinds of repeat unit:

- **Vinyl butyral units, about 76–80% by weight.** These are the hydrophobic, bulky cyclic acetal groups that give PVB its toughness, its water resistance and its PLA-like printability.
- **Vinyl alcohol units, about 18–22% by weight.** These polar hydroxyl groups hydrogen-bond with alcohol solvents and with neighbouring polymer chains. They are the reason PVB is hygroscopic and the reason IPA can soften it.
- **Vinyl acetate units, about 1–2% by weight.** These are residual groups left over from the parent PVA.

Industrial PVB is best known as the tough, clear interlayer in laminated safety glass, which is why filament-grade PVB inherits both its transparency and its toughness. The polymer is amorphous, so it has no sharp melting point. It softens over a range and can be printed at the low temperatures used for PLA. Its refractive index is about 1.485, which is close enough to glass and to some clear resins that a well-printed, well-smoothed PVB part can look almost colourless.

IPA softens PVB because it is a moderately polar solvent that penetrates the amorphous polymer and loosens the interactions between chains. The surface becomes a gel, surface tension pulls the layer ridges flat, and the alcohol then evaporates. The process is a controlled partial dissolution, not a coating. That matters because too much solvent will round off fine details, deform thin walls and leave the part soft for days.

### PVB is not a harmless alternative to acetone

PVB is often marketed as the "safe" way to get a smooth print because it uses IPA instead of acetone. That framing is misleading. IPA has a closed-cup flash point near 12 °C, so a puddle or a mist can produce an ignitable vapour at normal room temperature. Its explosive range in air is roughly 2–12.7% by volume. IPA vapour is heavier than air and can travel along a bench or into a floor drain before it finds an ignition source. IPA is also a central-nervous-system depressant, and repeated skin contact defats the skin and causes dryness and cracking.

PVB filament itself prints with much less odour than ABS or ASA. The solvent does not share that advantage. IPA has a sharp, characteristic smell, and the vapour should be treated as both a fire hazard and an inhalation hazard. The safe method is described in section 4.

## 2. Properties

| Property | PVB | PLA, typical | PETG, typical | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Density | 1.07–1.10 g/cm³ | 1.24 g/cm³ | 1.27 g/cm³ | SUNLU lists 1.08, Prusament 1.10 and Fiberlogy 1.1. |
| Glass transition temperature | 60–68 °C, up to 70 °C on some grades | 55–60 °C | 78–82 °C | Amorphous, so there is no true melting point. |
| HDT at 0.45 MPa | 52–60 °C, up to 63 °C for Prusament | 52–56 °C | 68–72 °C | HDT is a deflection test, not a continuous service limit. |
| Tensile yield strength | 45–57 MPa | 50–60 MPa | 46–52 MPa | Prusament's TDS gives 50 ± 5 MPa. |
| Tensile modulus | 1.7–3.1 GPa | 3.0–3.5 GPa | 2.0–2.1 GPa | Prusament gives 1.7 GPa and Fiberlogy 3.05 GPa. |
| Flexural strength | 70–78 MPa | 80–95 MPa | 65–72 MPa | Prusament gives 72 MPa, SUNLU 78 MPa and Fiberlogy 77 MPa. |
| Interlayer adhesion | 9 ± 1 MPa | Not usually published | Not usually published | Prusament measures this separately from tensile strength. |
| Moisture absorption | 0.18% in 24 h and 0.35% in 7 days at 22% RH | About 0.3% | About 0.3% | Prusament's figures; humid air absorbs much faster. |
| Light transmission, clear grades | About 89–90% | 85–88% | 88–90% | Depends on wall thickness and smoothing. |
| Refractive index | About 1.485 | About 1.46 | About 1.57 | Close to some clear resins and to glass. |

The tensile and flexural numbers above describe the bulk polymer. They do not mean that a printed PVB part is strong in every direction. Prusa publishes a separate interlayer adhesion value of 9 ± 1 MPa and describes layer-to-layer adhesion as poor, slightly worse than PLA. Prusa's material guide states plainly that PVB is not suitable for printing mechanical parts. Its tenacity and tensile strength are comparable to CPE or low-tier PETG, but its temperature resistance is PLA-like. Use PVB where appearance or casting matters, and use PETG, ASA, PC or a fibre composite where load or heat matters.

SUNLU publishes shrinkage of 0.5–1.0%, while Fiberlogy describes its shrinkage as low. Treat sub-percent shrinkage as normal and measure a test fit before printing a precision assembly. IPA smoothing adds a second dimensional change because it removes material from the surface and rounds edges. Sharp external corners become visibly radiused, small embossed text can disappear, and thin fins can droop. Prusa warns that smoothing causes a loss of small details and rounding of sharp edges, and its blog notes that long exposure causes deformation and drying times of a week or more. As a rule of thumb, design features at 0.4 mm or larger if they must survive smoothing, and do not apply the process to a part that depends on a sharp edge or a precise bore.

### Pros

- PVB prints at PLA-like temperatures and adheres well to smooth PEI, so it is easy to learn.
- Clear grades can be smoothed into glossy, translucent or nearly glass-clear vessels in a way that opaque filaments cannot.
- IPA dissolves the surface, so PVB parts can be solvent-welded with a brush and a small amount of alcohol.
- The material has low warping compared with ABS or ASA and does not need a heated chamber.
- PolyCast and similar grades are formulated for investment casting and burn out with very little ash.

### Cons

- PVB is strongly hygroscopic. Wet filament pops, bubbles, strings and prints with a cloudy surface.
- Layer adhesion is poor, and the material is not suitable for mechanical parts.
- Heat resistance is similar to PLA, so a part left in a hot car or near a lamp can sag.
- IPA smoothing is a flammable-solvent process with real fire, inhalation and skin hazards.
- Smoothing softens details, rounds edges and can leave the part tacky for days if it is over-treated.
- Clear PVB is more expensive than PLA and is sold by fewer brands.

## 3. Printing PVB on the Snapmaker U1

### A. Drying and storage

PVB absorbs moisture quickly because of its vinyl alcohol content. Prusament's datasheet records 0.18% uptake in 24 hours at 22% relative humidity and 0.35% after seven days. A spool left on an open shelf in a humid room will print badly within a day or two.

- Dry PVB at 50–60 °C for 6–10 hours. Prusament specifies a maximum drying temperature of 60 °C and gives 4–8 hours depending on moisture; Polymaker recommends 50 °C for 12 hours for PolySmooth.
- Never exceed 60 °C in a filament dryer. PVB is amorphous with a glass transition near 60–68 °C, and a spool held near or above the glass transition can fuse into a solid block.
- Store the spool sealed at below 15% relative humidity with silica gel or a molecular sieve. A dry box is better than a sealed bag alone if you print often.
- Print directly from a dry box for long jobs, especially with clear grades. The U1 has four spool holders and two filament feeders, but neither feature keeps filament dry.

### B. Nozzle and hotend

PVB is not abrasive, so the stock 0.4 mm stainless-steel hotend is fine. You do not need a hardened nozzle for PVB itself.

- Use the stock 0.4 mm hotend for detailed parts, jewellery and small castings.
- Use a 0.6 mm or 0.8 mm hotend for vases, lamp shades and large smooth surfaces. Fewer, wider extrusion lines mean fewer layer boundaries to erase, and Prusa recommends a large nozzle with spiral vase mode for transparent parts.
- Snapmaker's official hardened-steel hotends come in 0.2, 0.4, 0.6 and 0.8 mm sizes, sold as four-packs of one diameter. Different diameters cannot officially be used in the same print, so choose one size for the job.
- Keep the nozzle clean. Burnt specks from a dirty hotend become visible defects in clear PVB.

### C. Build plate and first layer

- Set the bed to 60–75 °C. Prusament recommends 75 °C, while SUNLU publishes 50–60 °C, so 65–70 °C is a reasonable starting point on the U1.
- Use a clean smooth PEI sheet. Prusa warns that a powder-coated textured sheet may not provide good adhesion for PVB. If you only have a textured plate, clean it and expect to adjust the first layer.
- Do not use glue stick as a release agent unless the part is tearing the sheet. PVB adheres well to clean PEI, and a release layer is usually unnecessary.
- Let the plate cool before removing a large flat part. Pulling a warm part off can warp it.

### D. Chamber and enclosure

- Print with the Top Cover off or with the vents open. PVB does not need chamber heat, and a warm chamber softens filament in the feed path.
- Do not run the BIQU Panda Breath for PVB. Stock U1 firmware cannot control it, and community firmware control requires full-board motherboard cooling because the RK3562 throttles at 85 °C. None of that complexity adds anything for a material that prints best at ambient temperature.
- If you monitor chamber temperature, keep it below about 40 °C. A 50 °C passive chamber is below the glass transition but adds no benefit and increases heat-creep risk in the toolhead.

### E. Cooling, speed and flow

- Set the part-cooling fan to 70–100% after the first layer. PVB needs cooling for sharp overhangs and clean surface texture.
- For clear single-wall vases, try 40–60% fan if full cooling makes the layers bond poorly. The trade-off is slower bridging and overhangs that droop more.
- Start at 40–80 mm/s for outer walls and 80–150 mm/s for inner walls and infill. The U1 can move much faster, but PVB surface quality and layer adhesion suffer at high speed.
- Keep volumetric flow at 8–14 mm³/s as a starting window. Polymaker allows up to 15 mm³/s for PolySmooth at 220 °C. The U1's 32 mm³/s figure was measured with Snapmaker ABS at 280 °C and does not apply to PVB.
- Use 0.6–1.0 mm of retraction at 30–40 mm/s on the direct-drive toolhead. Well-dried PVB retracts cleanly; wet PVB strings no matter what you do.
- Tune pressure advance with a test tower. PVB behaves broadly like PLA, so a PLA-like value is a reasonable starting point.

### F. Layer height, walls and infill

- Use 0.12–0.24 mm layers with a 0.4 mm nozzle. Thinner layers improve detail but add print time and give the solvent more layer boundaries to erase.
- Use 3–4 perimeter walls and 5–6 top and bottom solid layers. IPA softens the outer skin; if the walls are too thin, the softened surface sags into the infill and shows a grid pattern.
- Keep infill at 10–20% for decorative parts. For investment-casting patterns, 10–12% gyroid or lightning infill keeps the pattern light and gives the investment room to expand during burnout.
- More perimeters reduce transparency because each wall adds an optical boundary. Prusa notes that printing with more perimeters makes layers visible even after smoothing, so use spiral vase mode for clear vessels.

### G. Seams, ironing and multi-toolhead work

- Enable a scarf seam if your slicer supports it. A scarf hides the seam in the toolpath instead of leaving a vertical groove that needs extra solvent to remove.
- Ironing can flatten the top surface, but it also burnishes the polymer and can leave a glossy patch that looks different after smoothing. Test it before using it on a display part.
- On the U1's four toolheads, PVB can be paired with PETG for breakaway supports because the two polymers do not bond strongly. The toolchanger keeps them in separate melt zones, but you still need a prime tower or wipe sequence.
- A PETG body with a PVB inlay can give a selectively glossy part, because a brief IPA wipe affects PVB far more than PETG. PETG is not completely immune to every solvent, so test a coupon before committing to a large print.
- The toolchanger reduces cross-contamination, but it does not eliminate ooze. A wipe tower and a proper wipe sequence are still required.

### H. Shrinkage and detail loss

Two separate effects change the dimensions of a smoothed PVB part:

1. **Print shrinkage.** SUNLU publishes 0.5–1.0% shrinkage. The exact value depends on geometry, layer direction and cooling. Scale precision parts or print a test fit.
2. **Solvent rounding.** IPA removes surface polymer, so external corners round over, fine text fills in and thin edges can become soft. Prusa explicitly warns about loss of small details and rounding of sharp edges.

If a feature must stay sharp, mask it with tape before smoothing or accept that it will be softened. Do not use IPA smoothing on threaded parts, press fits, bearing seats or anything that depends on a crisp edge.

## 4. Smoothing with Isopropyl Alcohol, Safely

> [!warning] IPA is a flammable solvent, not a polish
> IPA has a closed-cup flash point near 12 °C and an explosive range of roughly 2–12.7% by volume in air. Its vapour is heavier than air. A mist cloud or a sealed box full of vapour can ignite from a heater, a thermostat, a fan motor, a relay, a static spark or a cigarette. Treat every smoothing session as a fire-safety operation, not a cosmetic step.

### The non-negotiable rules

- **Work outdoors or in a spray booth with extraction.** An open window or a bathroom fan in a closed room is not adequate. A strong smell throughout the room means that vapour is escaping the work area, so stop and improve the ventilation before continuing.
- **Remove every ignition source.** Keep smoking, open flames, hot plates, grinders, 3D printers, space heaters, clothes dryers and running engines out of the work area. Keep ignition sources out of the low area where vapour collects.
- **Never heat IPA.** Do not warm it, do not use a heated bath and do not put an IPA-soaked print in a filament dryer, oven, toaster oven or sealed box. Dryer heaters, thermostats and fan motors are not explosion-proof, and a sealed box lets vapour accumulate above the lower explosive limit.
- **Do not improvise a sealed mist chamber.** A plastic box filled with ultrasonic mist is the worst combination: a confined vapour cloud, a plastic surface that can hold static, and often an electrical device inside. Commercial smoothing stations such as the Polymaker Polysher are purpose-built and should be used exactly as instructed, in a ventilated area and away from ignition sources. A DIY sealed box is not equivalent.
- **Wear nitrile gloves, sealed goggles and an organic-vapour respirator** whenever mist or vapour is present. A dust mask or surgical mask does not stop solvent vapour. Nitrile is the right glove material; IPA defats skin and repeated contact causes cracking.
- **Bond and ground metal containers and metal equipment.** Use a metal tray or metal pail, keep it grounded, and avoid plastic buckets, plastic funnels and synthetic clothing that can build static. Do not use a vacuum cleaner to pick up spilled alcohol.
- **Keep quantities small.** Pour only what you need into a labelled metal container. Keep the bulk bottle closed and away from heat and sunlight. Have an extinguisher suitable for flammable liquids (alcohol foam, dry chemical or carbon dioxide) within reach.
- **Do not smoke, eat or drink during the work.** IPA is a central-nervous-system depressant, and hand-to-mouth contact is easy when you are holding a small part.
- **Dispose of used IPA as household hazardous waste.** Keep the lid on the waste container and take it to a household hazardous waste site. Do not pour it down a drain, into soil or into a bin, and do not deliberately evaporate it indoors.

### Methods, from lowest to highest risk

1. **Wipe or brush, for small parts and spot repairs.** Put the part on a metal tray outdoors or in a spray booth. Wear nitrile gloves and goggles. Dip a soft synthetic brush in 90% or stronger IPA, wipe off the excess, and apply a thin coat to one area at a time. Let it flash off for 5–10 minutes, then repeat. This produces the least airborne mist and is the best method for a first attempt.
2. **Spray, for large parts and vases.** Use a spray booth or work outdoors with the wind at your back. Put the part on a turntable over a metal drip tray. Use a trigger sprayer or an airbrush, hold it about 20 cm away, and apply a light coat rather than a wet run. Wait 5–10 minutes between coats. Wear a full organic-vapour respirator, goggles and gloves. Do not spray indoors, and do not spray toward a fan, heater or electrical outlet.
3. **Dip, for thick casting patterns and simple shapes.** Work outdoors only, in a metal container on a grounded metal surface. Submerge the part for about 5 seconds, lift it out, let it drain for 30 seconds, and repeat two or three times. Do not leave the part soaking. Catch the drips in the tray, cover the container when finished, and keep the part away from ignition sources while it dries.
4. **Commercial smoothing station, only as designed.** A Polysher or similar enclosed unit is engineered to limit the alcohol dose and contain the mist. Use it with IPA as instructed, in a ventilated room, on a stable surface, away from heat and sparks. Do not modify it, do not leave it unattended and do not assume that "enclosed" means "safe in a sealed room."

### Curing and finishing

- Air-dry the part at room temperature in a dust-free, ventilated place. Twelve to twenty-four hours is typical for a thin coat; thick parts and humid weather can take several days.
- Rotate the part every few hours so that solvent does not pool in one area and so that the surface dries evenly. Prusa recommends regular rotation and warns that non-ventilated recesses can stay soft or deform.
- Do not force-dry with heat. A warm dryer speeds evaporation but also warps the part and creates a flammable vapour cloud.
- Wait at least three days before washing the part or exposing it to water. Prusa notes that water leaves white marks on dissolved PVB and can disrupt the softened surface.
- Full hardness returns only after the residual alcohol has diffused out. If the surface still feels tacky after two days, the part was over-treated; give it more time rather than adding more solvent.

### Troubleshooting the finish

| Problem | Likely cause | What to do |
| :--- | :--- | :--- |
| Milky white haze or "blushing" | Water in the alcohol, or moisture condensing on the cold, evaporating surface | Use 90% or stronger IPA, work in dry air, and keep water away from the part for at least three days. |
| Infill grid showing through the walls | Walls too thin, or too much solvent applied | Print 3–4 walls and use thinner coats with longer flash-off times. |
| Part stays soft for days | Over-soaking or poor ventilation | Use shorter dips or lighter sprays, increase air movement, and wait rather than adding heat. |
| Rounded edges and lost detail | Too much solvent or too many passes | Use fewer, lighter passes and mask features that must stay sharp. |
| Glossy patches or drips | Pooling on the surface | Keep the part off pooled liquid, drain it after dipping, and spray a mist rather than a stream. |

## 5. Investment Casting with PVB

PVB's second real use is as a pattern material for investment casting. A printed pattern is invested in a ceramic shell, the pattern is burned out, and molten metal is poured into the cavity. PolyCast is the grade made for this job: Polymaker specifies a burnout temperature of 1,100–1,200 °C and an ash residue of about 0.003%.

That burnout figure matters. A claim that PVB "burns out cleanly at 450–700 °C with less than 0.02% ash" is wrong for PolyCast. Polymaker's own application note calls for 1,100–1,200 °C to burn out entirely, and its published ash figure is 0.003%, not 0.02%. A lower-temperature kiln may eventually remove the pattern with a much longer cycle, but that is a workaround, not the specification.

- Use a kiln rated for the full burnout schedule, with ventilation for smoke and carbon monoxide. Do not use a kitchen oven.
- Follow the investment manufacturer's ramp and soak schedule. A fast heat-up can crack the shell as the pattern expands.
- Use PolyCast or another grade with a published ash figure for critical castings. Coloured or generic PVB can contain pigments and additives that leave residue.
- Smooth the pattern before investing if you want a better cast surface, but remember that IPA smoothing rounds detail and softens thin sections.
- Treat burnout and pouring as foundry operations. Wear the appropriate face shield, gloves and apron, and keep water away from molten metal.

## 6. Snapmaker U1 Hardware Settings

| U1 subsystem | Setting for PVB |
| :--- | :--- |
| Hotend and nozzle | Stock 0.4 mm stainless hotend for detail; official 0.6 mm or 0.8 mm hotend for vases and lamp shades. PVB is non-abrasive, so hardened steel is optional. |
| Build plate | 60–75 °C on clean smooth PEI. A powder-coated textured sheet may not hold PVB well. |
| Top Cover | Off or vented. PVB does not need a heated chamber. |
| BIQU Panda Breath | Off. Stock firmware does not control it, and community control requires full-board motherboard cooling. |
| Filament feeders | Two feeders and four spool holders. Third-party PVB has no Snapmaker RFID profile, so create a manual material profile. |
| Drying | 50–60 °C for 6–10 hours. Never above 60 °C. |
| Multi-toolhead | PVB with PETG breakaway supports; PVB with PETG for selective gloss. Use a prime tower or wipe sequence. |
| Firmware | No special changes are needed for PVB. |

## 7. Real Demo Models to Print

These are real, currently listed models. Each one is either designed for PVB or explicitly recommended for it by its author.

1. **[PVB Twisted Vase](https://www.printables.com/model/51116)** by Prusa Polymers. Model 51116. This is a twisted vase designed for Prusament PVB, intended for easy printing with good transparency and IPA smoothing. It is the closest thing to an official PVB test model.
2. **[Paperlook Vase for PVB prints](https://www.printables.com/model/244861)** by the Printables community. Model 244861. This is a paper-textured vase intended to test PVB smoothability and transparency with a 0.8 mm nozzle. The author printed it in Prusament Smoky Black PVB at 0.5 mm layers in vase mode and smoothed it with a gentle IPA spray.
3. **[Glitter PVB Vase in Vase Mode](https://www.printables.com/model/215209)** by Hana. Model 215209. This is a spiral-vase model with published PVB settings for a Prusa Mini+, including 0.15 mm layers and a 0.3 mm first layer. It is useful for testing glitter or translucent PVB.
4. **[My Watering Can, Spiral/Vase Mode](https://www.printables.com/model/417205)** by the Printables community. Model 417205. This is a vase-mode watering can with no steep overhangs. The author recommends PETG for strength or PVB smoothed with IPA for a semi-transparent, watertight-looking finish.
5. **[Ikea Kallax Lamp Bracket and Shade](https://www.printables.com/model/52540)** by ElvisExMachina. Model 52540. This is a pendant-lamp bracket and shade for a Kallax shelving unit. The bracket and screw can be printed in PLA, while the shade is intended for PVB or another translucent material.

All five titles were checked through the Printables API. The model numbers are included so that you can find the files if a link changes.

## 8. Videos Worth Watching

1. **[PolySmooth & Polysher](https://www.youtube.com/watch?v=_xn8aPIKtq8)** by Polymaker. This is a short official demonstration of the Polysher desktop post-processing machine and the gloss it produces on PolySmooth. It is promotional, but it shows the intended process clearly.
2. **[Polymaker Polysher Review: 3D Printing with No Layer Lines using Polysmooth?](https://www.youtube.com/watch?v=VdtFj-jK-ig)** by 3D Printing Nerd. This is a hands-on review of the Polysher and PolySmooth, including the reviewer's experience with the machine and the finish. Polymaker supplied the hardware, and the reviewer states that the review is unbiased.
3. **[Should You Back the Polymaker Polysmooth and Polysher?](https://www.youtube.com/watch?v=HIGYFKp07DY)** by Maker's Muse. This is an independent evaluation of the original PolySmooth and Polysher crowdfunding campaign, including whether the system is worth the money.
4. **[How to Smooth Fiberlogy FiberSmooth Filament (PVB)](https://www.youtube.com/watch?v=cOjS-TiHze0)** by Fiberlogy. This is a short tutorial on smoothing FiberSmooth with IPA without any special equipment. It is the most practical demonstration of the wipe-and-dip approach in this list.
5. **[PolyCast: A 3D Printing Filament for Metal Casting](https://www.youtube.com/watch?v=4--fiBGMIpc)** by Polymaker. This is a production-run walkthrough showing how PolyCast patterns are used for investment casting and why the low-ash burnout matters.

## 9. Products

Fewer than ten brands sell PVB, and several products that appear in older lists could not be verified. The table below contains only products with a manufacturer page or a reputable reseller listing that resolves. Prices are deliberately omitted because they change by region and by week.

| Product | Type | Published settings and notes | Link |
| :--- | :--- | :--- | :--- |
| **Polymaker PolySmooth** | Aesthetic, smoothable PVB | 190–220 °C nozzle, 25–70 °C bed, no chamber, dry at 50 °C for 12 h, maximum 15 mm³/s. Available in colours and a transparent grade. | [Polymaker wiki](https://wiki.polymaker.com/polymaker-products/polymaker-filaments/specialty-filament/polysmooth-tm-pvb) |
| **Polymaker PolyCast** | Investment-casting PVB | 190–220 °C nozzle, 25–70 °C bed, burnout at 1,100–1,200 °C, ash about 0.003%. Formulated for clean burnout. | [Polymaker wiki](https://wiki.polymaker.com/polymaker-products/polymaker-filaments/specialty-filament/polycast-tm-pvb) |
| **Prusament PVB** | Clear and coloured PVB | 215 ± 10 °C nozzle, 75 ± 5 °C bed, dry at 60 °C for 4–8 h. Six transparent colours on 500 g spools. | [Prusament](https://prusament.com/materials/prusament-pvb/) |
| **SUNLU PVB** | Value PVB | 200–230 °C nozzle depending on speed, 50–60 °C bed, density 1.08 g/cm³, shrinkage 0.5–1.0%, HDT 55.8 °C. | [SUNLU](https://www.sunlu.com/products/pvb-filament) |
| **eSUN eSmooth** | Alcohol-polishable filament in the PVB family | eSUN describes it as a modified alcohol-soluble composite with a translucent white appearance. Follow the spool label for temperatures. | [Reseller listing](https://molastic.com/en/products/esun-3dfilament-other-esmooth) |
| **Fiberlogy FiberSmooth** | European PVB | 215–225 °C nozzle, 75 °C bed, dry at 40 °C for 4 h, density 1.1 g/cm³, HDT 55 °C at 1.8 MPa. Five colours. | [Fiberlogy](https://fiberlogy.com/en/filaments/pvb-en/pvb-fibersmooth-en/) |
| **YOUSU PVB** | Value PVB | Reseller listings give 190–220 °C nozzle and 25–70 °C bed. Sold in many colours on 1 kg spools. Confirm the settings on the spool. | [YOUSU](https://www.ysfilament.com/collections/pvb-filament) |

Products that should not be listed as PVB without evidence include FormFutura EasyFil PVB, AzureFilm PVB, Spectrum PVB and a MatterHackers PVB SKU. Those names appear in some older round-ups, but the corresponding products could not be verified in the manufacturers' current catalogues. If you find a genuine listing, verify it on the manufacturer's own site before adding it here.

## 10. Related Notes

- [[00 - Filament Master Index]] for the full material comparison and U1 settings table.
- [[01 - Drying Filament]] and [[02 - Storing Filament]] for the drying and dry-box routine that PVB needs.
- [[03 - Combining Storing and Drying - Science and Rational Approach]] for the humidity reasoning behind those routines.
- [[04 - Nozzles and Their Types]] for the U1 hotend options and the limits on mixed nozzle diameters.
- [[05 - Layer Height and Nozzle Size]] for the relationship between layer height, line width and surface finish.
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]] for the difference between nozzle, bed, chamber and service temperature.
- [[07 - Print Speeds and Volumetric Flow]] for the flow ceiling that applies to PVB on the U1.
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]] for scarf seams and ironing before you resort to solvent.
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]] for the wider finishing workflow.
- [[10 - Common Printing Issues, Debugging, and Physical Limits]] for stringing, moisture and layer-adhesion faults.
- [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)]] for the other routes to clear parts.
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]] for soluble supports and the difference between water-soluble and alcohol-soluble materials.

## Sources

- Prusa Research, "PVB", Prusa Knowledge Base: https://help.prusa3d.com/article/pvb_196708
- Prusa Research, "Prusament PVB: our new transparent filament designed for easy chemical smoothing", 7 January 2021: https://blog.prusa3d.com/prusament-pvb-our-new-transparent-filament-made-for-easy-chemical-smoothing_43066/
- Prusa Polymers, "Prusament PVB technical datasheet", version 1.1, 2022: https://prusament.com/wp-content/uploads/2022/10/PVB_Prusament_TDS_2021_10_EN.pdf
- Prusament, "Prusament PVB" product page: https://prusament.com/materials/prusament-pvb/
- Polymaker, "PolySmooth (PVB)" wiki: https://wiki.polymaker.com/polymaker-products/polymaker-filaments/specialty-filament/polysmooth-tm-pvb
- Polymaker, "PolyCast (PVB)" wiki: https://wiki.polymaker.com/polymaker-products/polymaker-filaments/specialty-filament/polycast-tm-pvb
- Polymaker, "Smoothing" wiki, including the caution that IPA should not be heated above 40 °C: https://wiki.polymaker.com/printing-tips/post-processing/smoothing
- SUNLU, "SUNLU PVB" product page and specifications: https://www.sunlu.com/products/pvb-filament
- Fiberlogy, "PVB FiberSmooth" technical data: https://fiberlogy.com/en/filaments/pvb-en/pvb-fibersmooth-en/
- YOUSU, "PVB Filament" collection: https://www.ysfilament.com/collections/pvb-filament
- eSUN, "All you need to know about eSUN new filaments: eSmooth": https://www.esun3d.com/news/all-you-need-to-know-about-esun-new-filaments-esmooth/
- OSHA, "Isopropyl alcohol (2-propanol)" chemical data: https://www.osha.gov/chemicaldata/475
- NOAA CAMEO Chemicals, isopropanol report, including flash point and flammable limits: https://cameochemicals.noaa.gov/report?key=CH946
