---
title: "06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)"
tags:
  - 3d-printing
  - filaments
  - pctg
  - copolyester
  - impact-resistant
  - clear-filament
  - engineering-filament
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 250–270 °C, with up to 280 °C for high-flow printing | Not required; ambient 20–30 °C. The optional Top Cover can hold about 35–45 °C, and the passive maximum is about 50 °C. | HDT is 76 °C at 0.45 MPa and 64 °C at 1.8 MPa. The glass transition is about 85 °C. Treat 60–70 °C as the practical continuous range for lightly loaded parts. | Clear impact-resistant housings, power-tool and drone parts, snap fits and living hinges, and chemical-resistant jigs. | Dry at 65–70 °C for 4–8 hours. Use the stock stainless-steel hotend for neat PCTG and a hardened-steel hotend for CF or GF grades. PCTG is low-warping, not warp-free. |

> [!abstract] Overview
> PCTG is an amorphous copolyester with toughness closer to polycarbonate than to PETG. It prints on the bare Snapmaker U1, needs a bed of 90–100 °C and no heated chamber, and is much tougher in notched impact than PETG. Its main limits are a modest heat-deflection temperature, a practical flow rate of about 8–10 mm³/s, and a small retail market.

## 1. What PCTG Is and How It Differs from PETG

PCTG is the short name for polycyclohexylenedimethylene terephthalate glycol-modified. It belongs to the same copolyester family as PETG and is made from terephthalic acid, ethylene glycol and 1,4-cyclohexanedimethanol (CHDM). The difference is the ratio of the two diols. In PETG, ethylene glycol is the majority diol and CHDM is the minor modifier. In PCTG, CHDM is the majority diol, usually more than half of the diol units.

The bulky cyclohexane ring in CHDM prevents the polymer chains from packing into an ordered crystal lattice. The result is an amorphous material with good clarity, low shrinkage and considerable ductility. The toughness does not come from a special ring-flipping mechanism. It comes from the combination of chain stiffness, free volume and a strong tendency to yield and draw rather than crack. That is why PCTG absorbs impact well without the brittleness of polystyrene or the notch sensitivity of some PETG blends.

PCTG is not the same material as Eastman Tritan. Both are copolyesters and both use CHDM, but Tritan also contains tetramethylcyclobutanediol (TMCD), which raises its glass transition and changes its property balance. Reusable sports bottles marketed as Tritan are usually made from Tritan or polycarbonate, not from PCTG. PCTG is used in thick-walled packaging, cosmetic jars, medical device housings and clear durable parts, but the sports-bottle example should not be attached to it.

PCTG is amorphous, so it does not have a true melting point and does not crystallise during cooling. That gives it low shrinkage and good dimensional stability, but it is not warp-free. Large flat parts can still lift at the corners if the bed is uneven, the chamber is draughty or cooling is uneven.

### Mechanical and Thermal Properties

| Property | Typical value for unfilled PCTG | Notes |
| :--- | :--- | :--- |
| Glass transition temperature (Tg) | about 85 °C | Measured by DSC. The material softens gradually rather than melting. |
| Heat deflection temperature at 0.45 MPa | 76 °C | ISO 75. This is a deflection test, not a continuous service limit. |
| Heat deflection temperature at 1.8 MPa | 64 °C | ISO 75. Thin or heavily loaded parts deflect sooner. |
| Tensile strength at yield | 43–50 MPa | ISO 527. Printed parts are usually lower, especially across the layer direction. |
| Tensile modulus | 1.6–1.7 GPa | ISO 527. Printed samples commonly measure around 1.6 GPa, not the 1.9 GPa sometimes quoted. |
| Flexural modulus | about 1.6 GPa | ISO 178. |
| Elongation at break | about 220% | ISO 527. The material yields and draws before it breaks. |
| Notched Izod or Charpy impact | 92–100 kJ/m² at 23 °C | ISO 180 or ISO 179-1eA. PETG is roughly 5–8 kJ/m² on the same kind of test. |
| Density | 1.23 g/cm³ | About 3% lower than PETG at 1.27 g/cm³. |

The impact figures need context. Manufacturers quote notched Izod or Charpy values of about 92–100 kJ/m² at 23 °C for PCTG, against roughly 5–8 kJ/m² for PETG. 3D-Fuel summarises the difference as 8–12 times tougher. The exact multiplier depends on the standard, the notch geometry and whether the specimen breaks completely. Some marketing claims of 20 times use the low end of the PETG range. For a printed part, the layer interface is the weak point, so the real advantage is smaller and depends on nozzle temperature, layer bonding and print orientation.

### Strengths and Weaknesses

The strengths of PCTG are high impact resistance, good clarity in its natural grade, low moisture uptake compared with PETG, and good resistance to water, dilute acids, alcohols and many household chemicals. It also prints with less stringing and fewer nozzle blobs than PETG because its melt is less tacky.

The weaknesses are a modest heat-deflection temperature, a relatively low stiffness compared with polycarbonate or filled grades, a small colour and supplier market, and a price that is usually higher than commodity PETG. PCTG also degrades if it is overheated or kept at printing temperature for a long time, so it should not be left hot in the nozzle during long pauses.

Typical applications include clear protective covers, impact-resistant brackets, power-tool adapters, drone and RC parts, snap-fit enclosures, living hinges, jigs that see drops or vibration, and parts that need better chemical resistance than PLA. PCTG is not a substitute for polycarbonate or PPS in high-temperature applications, and it is not a substitute for PETG-CF when stiffness matters more than toughness.

## 2. Printing PCTG on the Snapmaker U1

### 2.1 Drying

PCTG absorbs less water than PETG, but it still needs drying. Extrudr specifies 60 °C for 4–6 hours. 3D-Fuel specifies 70 °C for 6–8 hours, or 65 °C for 8–12 hours if the dryer cannot reach 70 °C. A practical schedule is 65–70 °C for 6–8 hours in a dedicated filament dryer.

The Snapmaker U1 has no chamber drying mode. Use a dedicated dryer such as the SnapDryer, or a food dehydrator that holds a stable temperature. Do not try to dry spools by leaving them in the printer chamber. Store the spool in a sealed box below 15% relative humidity with silica gel or a molecular sieve.

Wet PCTG produces steam voids in the extrusion, turns clear parts cloudy and weakens layer bonding. If a spool has been open for weeks in humid air, dry it before use even if it looks fine.

### 2.2 Nozzle, Layer Height and Line Width

The common nozzle range is 250–270 °C. 3D-Fuel allows up to 280 °C, and Fiberlogy recommends 250–270 °C. Start at 260 °C and run a temperature tower, because the best temperature depends on the hotend, the flow rate and the colour pigments.

The stock 0.4 mm stainless-steel hotend is suitable for neat PCTG. Use the official hardened-steel hotend for PCTG-CF and PCTG-GF, because the fibres are abrasive. A hardened nozzle may need a small temperature increase, but the size of that increase should be found with a temperature tower rather than assumed.

For layer geometry, 0.12–0.24 mm layer height works well on a 0.4 mm nozzle. Line width can be set to 0.42–0.50 mm, which is 105–125% of the nozzle diameter. Wider lines improve layer contact and strength, but they also reduce the finest detail.

A 0.4 mm nozzle is the best general choice. A 0.6 mm nozzle suits structural parts and filled grades, and a 0.8 mm nozzle suits large, simple parts. Snapmaker does not support mixing nozzle diameters in one print. The OrcaSlicer percentage-line-width workaround for 0.4 mm plus 0.6 mm is unsupported, so treat it as an experiment rather than a standard setup.

### 2.3 Nozzle, Bed and Chamber Temperatures

The nozzle should be set to 250–270 °C for normal printing and up to 280 °C for high-flow work. The U1's 300 °C maximum is not the limiting factor for PCTG.

The bed should be set to 90–100 °C. Manufacturers list 90–110 °C, but the U1 bed stops at 100 °C, so the top of the published range is unavailable. Use 90–95 °C for most parts and 100 °C for large flat parts that need extra adhesion. A textured PEI plate holds PCTG well and releases as it cools. Smooth PEI, glass and Garolite need a thin layer of PVA glue stick or Magigoo to prevent permanent bonding. Let the plate cool below about 50 °C before removing the part.

PCTG does not require a heated chamber. Ambient air at 20–30 °C is fine. The optional Top Cover can hold about 35–45 °C, which reduces thermal gradients on large parts and may lower the risk of edge lifting. The passive Top Cover reaches about 50 °C at most, and that is enough for PCTG. A chamber heater is not necessary.

If a BIQU Panda Breath is used, it requires the paxx12 extended firmware or DragonBreath and full active cooling of the motherboard. Stock U1 firmware does not control it, and motherboard cooling is mandatory before any chamber heater is used. The Panda Breath can reach 60 °C, but 40–45 °C is sufficient for PCTG and leaves more margin for the electronics.

### 2.4 Cooling, Speed and Volumetric Flow

Part cooling should be 0% on the first layer. For normal layers, 20–40% is a good starting point for strength. Increase to 50–70% for overhangs, bridges and very small layers that would otherwise stay soft. Too much fan weakens layer bonding and can make clear PCTG hazy.

A reasonable speed profile is 40–100 mm/s for outer walls, 100–150 mm/s for inner walls and 120–200 mm/s for infill. The exact numbers matter less than the volumetric limit. Extrudr lists a maximum volumetric flow of 9 mm³/s for PCTG on a 0.4 mm nozzle. A safe working range is 8–10 mm³/s. At a 0.4 mm nozzle and 0.2 mm layers, 9 mm³/s corresponds to about 110 mm/s, so the printer will often be flow-limited before it reaches its travel-speed limit.

The U1 hotend has a measured maximum of 32 mm³/s with Snapmaker ABS at 280 °C. That figure is not a PCTG rating. PCTG is more viscous and is usually printed cooler, so the material limit is much lower.

Retraction should start at 0.6–0.9 mm at 30–40 mm/s. Pressure advance is usually in the 0.03–0.05 s range. Tune both with a retraction tower and a pressure-advance test, because the correct values depend on the toolhead and the filament diameter.

### 2.5 Slicer Settings and Post-Processing

Ironing works well on PCTG because the melt is less tacky than PETG. Start with 10–15% ironing flow, 35–45 mm/s and 0.10–0.15 mm spacing. Scarf seams are effective at 15–20 mm and help hide the seam on curved surfaces.

Fuzzy skin can be used to hide layer lines, especially on filled grades. Keep the thickness and point distance modest so that the texture does not trap dust or create thin, weak walls.

> [!note] Annealing and stress relief
> PCTG can be stress-relieved after printing at 65–70 °C for 1–2 hours. Ramp the oven slowly, support the part so that it cannot sag, and cool it slowly. Expect roughly 0.3–1% shrinkage and some loss of clarity. Do not anneal above the glass transition temperature of about 85 °C, because the part will distort. Annealing is optional and is most useful for parts that will carry a sustained load or sit in a warm environment.

PCTG can be machined with sharp high-speed steel tooling. Drill at a moderate speed, clear the chips and use a little coolant or air blast. It can be tapped for M3–M6 threads, although thread-forming screws are often better for repeated assembly. Heat-set brass inserts should be installed at 230–250 °C, not at the nozzle printing temperature, because a soldering iron at 265–275 °C will overheat the surrounding polymer.

Clear PCTG can be wet-sanded from 800 to 2000 grit and then polished. A clear lacquer or 2K polyurethane coat can restore transparency, but solvent-based clear coats need outdoor use or a respirator with organic-vapour cartridges. Sanding dust should be controlled with water or a dust extractor.

## 3. Using PCTG on the Snapmaker U1

The U1 has four independent toolheads, two filament feeders, four spool holders and RFID for Snapmaker filament. It is officially rated for PCTG on the bare machine, so no Top Cover or hardened hotend is needed for neat PCTG. The Top Cover is only useful for keeping large parts warm, and a hardened hotend is only needed for filled grades.

PLA can be used as a breakaway support interface because PLA and PCTG have almost no chemical affinity. There is a thermal conflict, however. PCTG needs a bed of 90–100 °C, which is above the point where PLA softens. A PLA support interface will still release cleanly, but it may sag during a long print. For tall or delicate supports, use BVOH, which tolerates the bed temperature better, or design the support so that it is short and well supported by the model. PVA softens near 90 °C, so it is only suitable for short supports at this bed temperature. The U1 is a toolchanger, so the two materials do not share a melt zone, but a prime tower or wipe sequence is still needed.

PCTG and polyester-based TPU can form a useful bond, but the strength of that bond varies by formulation. For a reliable multi-material part, use a mechanical interlock such as a dovetail or a captured flange rather than relying on chemical adhesion alone.

PCTG-CF and PCTG-GF are stiffer and less ductile than the neat resin. They require a hardened-steel hotend, a 0.4 mm or larger nozzle, and a lower volumetric flow of about 6–8 mm³/s. Dry them with the same schedule as neat PCTG. Fibre-filled PCTG is useful for brackets and housings that need stiffness, but it gives up some of the impact advantage that makes neat PCTG attractive.

A chamber heater is not needed for PCTG. If one is used anyway, the motherboard cooling rule still applies, and the chamber should stay at or below 45 °C for PCTG. There is no benefit to running the chamber hotter than that.

## 4. Demonstration and Test Models for PCTG

These five models are live on Printables and were checked through the Printables API in October 2026. They are demonstration or test parts rather than generic brackets: two are actual PCTG prints, and three test the impact, snap-fit and living-hinge behaviour that PCTG is chosen for.

1. **[UPDATED - CROCS Strap Pin Set (almost unbreakable in PCTG)](https://www.printables.com/model/1307934-updated-crocs-strap-pin-set-any-color-you-want-alm)**. The designer printed these pins in 3D-Fuel Pro PCTG at 260 °C and documents the iterations needed to stop the pin from shearing. This is a direct demonstration of PCTG's toughness in a thin, repeatedly flexed part.
2. **[Pliers for CROCS Strap Pins in PCTG](https://www.printables.com/model/1315345-pliers-for-crocs-strap-pins-in-pctg)**. A companion tool printed in PCTG. It shows how PCTG can be used for a stiff but tough hand tool that would crack in PLA.
3. **[Impact resistance tests](https://www.printables.com/model/427072-impact-resistance-tests)**. A set of 4 × 20 × 50 mm plates and a target holder for comparing filament impact resistance. It is a practical way to compare PCTG with PETG on the same printer and the same layer orientation.
4. **[Snap Fit Test / Press Fit Test](https://www.printables.com/model/9185-snap-fit-test-press-fit-test)**. A clearance and tab test for snap fits. PCTG's yield behaviour makes it a good material for these joints, and the model lets you find the clearance that works on your printer.
5. **[Living Hinge Design Test](https://www.printables.com/model/517584-living-hinge-design-test)**. A test piece for hinge geometry and gap width. It demonstrates the ductility that lets PCTG survive repeated bending where a less ductile material would whiten and crack.

## 5. Commercially Available PCTG Filaments

PCTG is a niche material. Ten brands with live PCTG pages could be verified in October 2026, so the table is not padded with resellers. Prices are approximate, were seen in October 2026, and exclude shipping and tax.

| Brand and product | What it is | Approximate price | Link |
| :--- | :--- | :--- | :--- |
| **3D-Fuel Pro PCTG** | US-made neat PCTG in a wide colour range, with 1 kg and 4 kg spools. The manufacturer claims 8–12 times the toughness of PETG. | $29.95 per 1 kg | [3D-Fuel](https://www.3dfuel.com/products/pro-pctg-brightest-white-1-75mm) |
| **Fiberlogy PCTG** | Polish neat PCTG with good clarity, 250–270 °C printing and a 92 kJ/m² notched impact figure. CF and GF versions are also available. | From €21.40 per spool, with a sale price of €18.19 | [Fiberlogy](https://fiberlogy.com/en/filaments/pctg-en/pctg-pctg-en/) |
| **Spectrum PCTG Premium** | Polish neat PCTG with a 76 °C HDT and translucent colours. | Not shown on the English product page | [Spectrum](https://spectrumfilaments.com/en/filament/pctg-premium/) |
| **Extrudr PCTG** | Austrian neat PCTG with a 9 mm³/s flow limit, 76 °C HDT and FDA, REACH and RoHS documentation. | Not shown on the English product page | [Extrudr](https://extrudr.com/en/products/pctg/) |
| **Nobufil PCTG** | Austrian PCTG in industrial colours, plus a carbon-fibre grade. | €29.90 per 1 kg | [Nobufil](https://www.nobufil.com/en/pctg-filament) |
| **AzureFilm PCTG** | Slovenian PCTG in opaque and transparent colours, with refill options. | From €24.90 | [AzureFilm](https://azurefilm.com/product/pctg-filament-black/) |
| **Rosa3D PCTG** | Polish PCTG in refills and 3 kg spools, plus PCTG with 10% CF or GF. | About €22.76 per kg on a 3 kg spool (€68.27) | [Rosa3D](https://www.rosa3d.pl/en/filaments/pctg/) |
| **American Filament PCTG** | US-made neat PCTG in a broad colour range. | $29.99 per 1 kg | [American Filament](https://americanfilament.us/collections/pctg) |
| **Push Plastic PCTG** | US-made neat PCTG in 1 kg spools. | $29.99 per 1 kg | [Push Plastic](https://www.pushplastic.com/products/pctg-filament-1-75mm-1kg) |
| **Atomic Filament PCTG PRO** | US-made PCTG PRO in opaque and crystal-clear grades. | $34.49 per 1 kg | [Atomic Filament](https://atomicfilament.com/products/crystal-clear-natural-pctg-pro) |

The filled grades are worth listing separately because they change the hardware requirements. Fiberlogy sells [PCTG CF](https://fiberlogy.com/en/filaments/pctg-en/pctgcf-en/) and [PCTG GF](https://fiberlogy.com/en/filaments/pctg-en/pctggf-en/), Spectrum sells [PCTG CF10](https://spectrumfilaments.com/en/filament/pctg-cf10/) and [PCTG GF10](https://spectrumfilaments.com/en/filament/pctg-gf10/), and Nobufil sells [PCTG CF](https://www.nobufil.com/en/product-page/pctg-cf-filament-black). All of them need a hardened-steel hotend.

## 6. Videos

1. **[CNC Kitchen: PCTG - The Isotropic 3D Printing Filament?](https://www.youtube.com/watch?v=-FtnXYDi7z0)**. Stefan tests whether PCTG lives up to its reputation for more uniform layer strength.
2. **[My Tech Fun: PETG Has Competition - Testing 3D Fuel's Pro PCTG](https://www.youtube.com/watch?v=bxJSzkuclxk)**. A practical comparison of 3D-Fuel Pro PCTG with PETG on impact, temperature and print behaviour.
3. **[My Tech Fun: PCTG vs PETG by Fiberlogy - is PCTG really better?](https://www.youtube.com/watch?v=e55lX6HIcRQ)**. A direct comparison of Fiberlogy PCTG and PETG, including mechanical tests.
4. **[My Tech Fun: 3D Fuel Pro PCTG-CF & GF Tested - Stronger Than Regular PCTG?](https://www.youtube.com/watch?v=pNCUpjpQHVk)**. Tests the filled grades and shows what the fibre reinforcement does to stiffness and toughness.
5. **[3DJake: PCTG! Putting it to the test](https://www.youtube.com/watch?v=YKwkk31yM7Y)**. An overview of PCTG's printing behaviour and its practical advantages over PETG.

## 7. Related Notes

- [[00 - Filament Master Index|Filament master index]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)|ABS]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)|ASA]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC and PC blends]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|CF and GF composites]]
- [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)|Clear and glass-like filaments]]
- [[01 - Drying Filament|Drying filament]]
- [[02 - Storing Filament|Storing filament]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[07 - Print Speeds and Volumetric Flow|Print speeds and flow]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]

## 8. Sources

- [Fiberlogy PCTG technical data](https://fiberlogy.com/en/filaments/pctg-en/pctg-pctg-en/)
- [Extrudr PCTG technical data](https://extrudr.com/en/products/pctg/)
- [3D-Fuel Pro PCTG product page](https://www.3dfuel.com/products/pro-pctg-brightest-white-1-75mm)
- [Spectrum PCTG Premium technical data](https://spectrumfilaments.com/en/filament/pctg-premium/)
- [Nobufil PCTG product page](https://www.nobufil.com/en/pctg-filament)
- [AzureFilm PCTG product page](https://azurefilm.com/product/pctg-filament-black/)
- [Rosa3D PCTG product page](https://www.rosa3d.pl/en/filaments/pctg/)
- [American Filament PCTG collection](https://americanfilament.us/collections/pctg)
- [Push Plastic PCTG product page](https://www.pushplastic.com/products/pctg-filament-1-75mm-1kg)
- [Atomic Filament PCTG PRO product page](https://atomicfilament.com/products/crystal-clear-natural-pctg-pro)
- Snapmaker U1 material and hardware specifications, as supplied with the machine.
