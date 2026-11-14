---
title: "10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)"
tags:
  - 3d-printing
  - filaments
  - pa
  - nylon
  - polyamide
  - engineering-plastics
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **PA6:** 260–290 °C | 40–50 °C with the Top Cover. 60 °C is possible only with a community chamber heater and is still marginal for large PA6 parts. | Continuous service is roughly 80–100 °C for dry parts under light load. HDT at 0.45 MPa is about 150–190 °C dry, while HDT at 1.8 MPa is only about 60–80 °C. HDT is not a service limit. | Gears, bushings, cams, snap-fits, tool fixtures, and wear pads. | Very hygroscopic. Dry to below about 0.2% water at 80–85 °C for 8–12 h. Unfilled PA6 is not abrasive, so the stock 0.4 mm stainless hotend is adequate. |
| **PA12:** 245–265 °C | 40–50 °C with the Top Cover. 60 °C is the maximum with a community heater and is rarely necessary. | Continuous service is roughly 70–90 °C for dry parts under light load. HDT at 0.45 MPa is about 125–140 °C dry, while HDT at 1.8 MPa is only about 45–55 °C. | Fuel and oil clips, pneumatic fittings, cable guides, living hinges, and dimensionally stable mechanical parts. | The least moisture-sensitive common nylon. Dry at 70–80 °C for 8–12 h. Lower strength and stiffness than PA6, but much better elongation and dimensional stability. |
| **PA6/66:** 250–270 °C | 40–50 °C with the Top Cover. A 60 °C community-heated chamber helps large parts, but the caveats in Section 2.2 apply. | Continuous service is roughly 80–100 °C for dry parts under light load. CoPA has an HDT at 0.45 MPa of about 111 °C and at 1.8 MPa of about 70 °C after a controlled anneal. Annealing raises crystallinity, but moisture still limits hot service. | Low-warp brackets, enclosures, jigs, gearbox housings, and parts that must stay flat without a heated chamber. | A copolymer designed to shrink less than PA6. Drying still matters: 80 °C for 8–12 h, or longer if the dryer is limited to 70 °C. |

> **Overview:** Polyamide (PA), commonly called nylon, is a semi-crystalline engineering thermoplastic built from repeating amide groups. Hydrogen bonds between those groups give nylon its strength, toughness, wear resistance, and also its strong affinity for water. On the Snapmaker U1, unfilled PA6, PA12, and PA6/66 all fit inside the 300 °C nozzle and 100 °C bed limits. The real difficulty is moisture and shrinkage, not temperature. Dry the filament to below about 0.2% water, keep it dry while printing, use a Garolite or Magigoo PA surface, and treat chamber heat as a shrinkage-control aid rather than a cure.

## 1. Chemistry and material behaviour

### 1.1 The amide group

Every polyamide contains the repeating amide linkage, written as –CONH–. The carbonyl oxygen of one amide group attracts the hydrogen atom of a neighbouring amide group, forming an intermolecular hydrogen bond. These bonds act like reversible cross-links between chains. They raise strength, stiffness, melting point, and wear resistance, and they are the reason nylon absorbs water: water molecules compete for the same hydrogen-bond sites.

The common printing grades differ in how many methylene groups separate the amide groups:

- **PA6 (polycaprolactam, Nylon 6)** is made by ring-opening polymerisation of caprolactam. Its repeat unit contains five methylene groups between amide groups, so the amide density is high.
- **PA66 (polyhexamethylene adipamide, Nylon 66)** is made from hexamethylenediamine and adipic acid. It has a regular alternating structure and a higher melting point than PA6, but it is difficult to print because it shrinks strongly and needs nozzle temperatures near the U1 limit.
- **PA12 (polylaurolactam, Nylon 12)** is made by ring-opening polymerisation of laurolactam. Its eleven methylene groups between amide groups dilute the amide density, which lowers moisture uptake, strength, and melting point.
- **PA6/66 copolymer** is a random copolymer of caprolactam and hexamethylene adipamide units. The irregular sequence disrupts crystal packing, lowers the melting point, and reduces shrinkage stress compared with PA6. It remains semi-crystalline; it is not an amorphous polymer.

A high amide density gives PA6 its combination of high strength and high moisture sensitivity. A low amide density gives PA12 dimensional stability at the cost of strength. The copolymer sits between them and is usually the easiest of the three to print flat.

### 1.2 Melting point and glass transition

| Property | PA6 | PA12 | PA6/66 copolymer |
| :--- | :--- | :--- | :--- |
| Glass transition, dry | 50–60 °C | 40–45 °C | 50–67 °C |
| Glass transition, conditioned | Near 0 °C or below | About 10–20 °C | Near 0 °C or below |
| Melting point | 220–225 °C | 178–182 °C | 189–200 °C |
| Tensile strength, dry | 70–85 MPa | 45–55 MPa | 65–78 MPa |
| Tensile modulus, dry | 2.5–3.0 GPa | 1.4–1.7 GPa | 2.2–2.7 GPa |
| Elongation at break, dry | 30–60% | 100–200% | 10–30%; CoPA about 10–13% |
| Elongation at break, conditioned | Above 150% | Above 200% | Above 100% |
| Notched Charpy impact, dry | 5–10 kJ/m² | 8–15 kJ/m² | 8–12 kJ/m² |
| HDT at 0.45 MPa, dry | 150–190 °C | 125–140 °C | About 111 °C for CoPA |
| HDT at 1.8 MPa, dry | 60–80 °C | 45–55 °C | About 70 °C for CoPA |
| Moisture at 50% RH | 2.5–3.5% | 0.7–1.5% | 2–3% |
| Moisture at saturation | 9–10% | 1.5–2% | 8–9% |

These are typical ranges from manufacturer datasheets and standard polymer references. Values vary with grade, crystallinity, test method, and moisture content. The CoPA HDT values come from a datasheet measured after a controlled 80 °C anneal, so an as-printed part may be slightly lower. Treat the table as a guide for comparing grades, not as a guarantee for a printed part.

### 1.3 Moisture plasticisation and the wet glass transition

Dry PA6 has a glass transition around 50–60 °C. Once it absorbs moisture from the air, water molecules push between the chains and act as a plasticiser. At equilibrium in a normal room, the glass transition can fall to near 0 °C or below. The part is no longer a stiff glassy solid at room temperature; it is a tough, rubbery, crystalline network.

That change is not a defect. It is why conditioned nylon is so impact-resistant. It is also why a dry, freshly annealed PA6 part can feel brittle, and why a wet PA6 part creeps under a sustained bolt load. The practical consequences are:

- **Dry parts** are stiffer and stronger but more brittle. They are suitable for light service and for measurement, not for repeated impact.
- **Conditioned parts** are tougher and dimensionally stable once they reach equilibrium, but their modulus is lower and their creep resistance is worse.
- **Hot, wet parts** are the weakest combination. A part that is both above about 60 °C and damp can lose a large fraction of its room-temperature stiffness.

This is also why datasheet HDT values must be read carefully. HDT is measured under a defined load on dry specimens, often after a controlled anneal. It is not a continuous service temperature, and a wet part in hot service will deflect at a much lower temperature than the datasheet suggests.

### 1.4 Strengths and limitations

**Strengths:**

- Unfilled PA has excellent toughness, fatigue resistance, and abrasion resistance. It is the standard material for unlubricated gears, cams, bushings, and snap-fits.
- The coefficient of friction against steel is low, typically around 0.15–0.25, which makes nylon useful for sliding contacts.
- PA6 and PA6/66 have high tensile strength for an unfilled thermoplastic, and all three grades generally tolerate repeated flexing better than PLA or PETG.
- Nylon can be dyed through with acid dyes, and it can be annealed to raise crystallinity and heat deflection resistance.

**Limitations:**

- PA6 and PA6/66 are strongly hygroscopic. A spool left in humid air can pick up enough water to print badly within a few hours.
- All nylons shrink as they crystallise. PA6 is the worst of the three, PA12 is the most dimensionally stable, and PA6/66 copolymers are formulated to reduce the problem rather than eliminate it.
- Wet nylon creeps under sustained load. A bolted joint that stays tight in dry PA6 can loosen after the part absorbs moisture.
- Unfilled nylon is not a high-temperature structural material. A dry HDT of 150–190 °C at 0.45 MPa does not mean the part can carry load at 150 °C, and a damp part will deflect much sooner than the datasheet suggests.
- Nylon is attacked by phenols, formic acid, and concentrated mineral acids, and it hydrolyses in hot water or steam over time. It is not chemically inert.

### 1.5 Chemical resistance

Nylon has good resistance to aliphatic hydrocarbons, gasoline, diesel, lubricating oils, greases, and many ketone solvents. That is why it is used for fuel-line clips, oil-breather brackets, and under-bonnet parts. The resistance is not unlimited. Phenol and cresol swell or dissolve nylon, formic acid attacks it badly, and concentrated mineral acids degrade it. Strong oxidising agents and some chlorinated solvents also cause swelling or stress cracking. Hot water and steam hydrolyse the amide bonds, especially in the presence of acids, and sustained hot glycol coolant exposure can degrade PA6 and PA66.

In practice, unfilled PA is suitable for intermittent contact with fuels, oils, and greases. It is not suitable for permanent immersion in hot water, steam, brake fluid at elevated temperature, or glycol coolant, and it should not be specified for a part that will be cleaned repeatedly with aggressive solvents. [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Carbon-fibre and glass-fibre PA grades]] improve stiffness and reduce moisture uptake, but they do not make the polymer chemically inert.

## 2. Printing unfilled PA on the Snapmaker U1

### 2.1 Drying

PA6 and PA6/66 must be drier than most other filaments. A reasonable target is below about 0.2% water by weight for PA6 and PA6/66. PA12 is more forgiving, but it still prints better below about 0.2%.

A workable drying cycle is:

- **PA6 and PA6/66:** Dry at 80–85 °C for 8–12 hours.
- **PA12:** Dry at 70–80 °C for 8–12 hours, or at 80 °C if the spool can tolerate it.
- **After drying:** Keep the spool in a sealed box with fresh molecular sieve or activated alumina, and feed directly from that box.

The dryer matters. Many inexpensive filament dryers stop at 70–75 °C, which is not enough to pull PA6 down to 0.2% in 12 hours. Dryers that genuinely reach 85 °C include the [Creality Space Pi X4](https://www.creality.com/products/creality-spacepi-x4), the [Sunlu FilaDryer E2](https://www.sunlu.com/products/298), and the [PrintDry Pro 3](https://www.matterhackers.com/store/l/printdry-pro-3-filament-drying-system/sk/MVC0EL93). The Sunlu E2 goes higher still, up to 110 °C, but 80–85 °C is enough for PA and is gentler on the spool.

If your only dryer caps at 70 °C, 12 hours will not reach the target for PA6. Run it for 18–24 hours with fresh desiccant in the chamber, and accept that the result may still be marginal. A 70 °C dryer is more useful as a holding box after the spool has been dried in a dedicated convection oven or in a dryer that reaches 85 °C. Do not assume that a long cycle at 70 °C is equivalent to a shorter cycle at 85 °C.

Cardboard spools are a practical limitation. Above about 70 °C, cardboard softens, warps, and can collapse under the weight of the filament. Transfer the filament to a metal or high-temperature plastic spool before drying at 80–85 °C, or use a dryer whose spool holder sits outside the heated chamber. Prolonged drying above about 90 °C in air can also yellow natural PA and may soften some plastic spool hubs, so 80–85 °C is the safer operating range.

Moisture content matters more than appearance. At a nozzle temperature of 260–290 °C, absorbed water flashes to steam inside the melt. A moisture content of 0.3% is already enough to produce microvoids, a matte or foamy surface, weaker layer bonds, and inconsistent extrusion. The target for PA6 is therefore below about 0.2%, not "dry to the touch." A spool that looks and feels dry can still be too wet.

Storage should be active, not passive. A sealed box with molecular sieve or activated alumina is better than silica gel alone at very low relative humidity. A heated dry box at 60–70 °C is useful for holding a dried PA6 spool during printing. For a short print, a sealed box with fresh desiccant is acceptable. Do not leave the spool on the open holder overnight, and do not assume that a vacuum bag that has been opened once is still dry.

### 2.2 Nozzle, bed, and chamber

**Nozzle temperature:**

- The nozzle temperature for PA6 should be 260–290 °C.
- The nozzle temperature for PA12 should be 245–265 °C.
- The nozzle temperature for PA6/66 copolymer should be 250–270 °C.
- Pure PA66 requires 285–300 °C, which is at the U1 limit and is not a good first nylon project.

Unfilled PA is not abrasive, so the stock 0.4 mm stainless-steel hotend is adequate. Hardened steel is needed only for carbon-fibre or glass-fibre filled PA. The U1's hardened-steel hotends are sold as four-packs of a single diameter, and Snapmaker does not support mixing diameters in one print. The OrcaSlicer mixed-diameter workaround is a community method, not stock capability. If you switch to a hardened hotend, you may need to add 5–10 °C to compensate for its lower thermal conductivity.

**Bed temperature:** The bed should be set to 80–100 °C for PA6 and PA12. Some warp-free copolymers, including PolyMide CoPA, specify a much lower bed temperature, often 25–60 °C, because their crystallization behaviour is different. Follow the manufacturer's datasheet rather than assuming that all nylons want a 100 °C bed.

**Build surface:** Bare PEI can bond to nylon strongly enough to tear the sheet. Use Garolite (G10 or FR4), a carbon-fibre plate, or PEI coated with Magigoo PA or a PVA glue stick. A brim of 8–12 mm with a 0 mm gap helps anchor corners. For large parts, an inner and outer brim is reasonable.

**Chamber:** The U1 has no stock chamber heater. The optional Top Cover provides passive heating up to about 50 °C, which reduces drafts and improves layer bonding. A realistic target for PA on a stock U1 is 40–50 °C. That is enough to help small and medium parts, but it will not eliminate PA6 shrinkage.

A 60 °C chamber is possible only with the BIQU Panda Breath or a similar heater, and on the U1 that is a community modification. The Panda Breath is a 300 W PTC heater with a HEPA and activated-carbon filter, a maximum chamber temperature of 60 °C, a PTC limit of 105 °C, and an operating power of 330–350 W. Stock U1 firmware does not control it. It requires either paxx12's Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode or DragonBreath, with DragonBreath being the recommended option.

More importantly, motherboard cooling is mandatory before any chamber heater is used. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures on the U1. A 6015 fan that cools only the stepper drivers does not cool the RK3562 and is not sufficient. A full-board cooler is required. Elevated chamber temperature also increases wear on the electronics and mechanical parts, and thermal damage is unlikely to be covered by warranty. This is not an optional reliability tweak.

Even at 60 °C, large PA6 parts remain marginal. PA6 shrinkage stress is high, and a 60 °C chamber reduces the thermal gradient without removing the underlying crystallisation shrinkage. For a large bracket or enclosure, PA12 or a PA6/66 copolymer is a better choice than PA6. Reducing the continuous footprint, adding a brim, and slowing the print also help more than another 5 °C of chamber temperature. It is misleading to call a 55–60 °C U1 an "engineering-grade nylon workstation" without mentioning the firmware, the mandatory motherboard cooling, and the residual warping risk.

### 2.3 Cooling, speed, flow, and retraction

- **Part-cooling fan:** Set the fan to 0–20% for normal layers. Use 30–50% only for steep overhangs and short bridges, with a minimum layer time of 12–15 seconds. Too much fan causes layer separation and corner lifting.
- **Volumetric flow:** Keep volumetric flow at 6–10 mm³/s for unfilled PA on a 0.4 mm nozzle. The U1's 32 mm³/s maximum was measured with Snapmaker ABS at 280 °C and does not transfer to nylon. At a 0.4 mm nozzle and 0.2 mm layers, 6–10 mm³/s corresponds to roughly 60–100 mm/s.
- **Retraction:** Set retraction to 0.8–1.4 mm at 30–40 mm/s, with wipe while retracting enabled. The U1 uses a direct-drive toolhead, so long retractions are unnecessary.
- **Pressure advance:** Start around 0.04 and tune within 0.03–0.06. Nylon melts are more elastic than PLA, so the material usually needs a little more pressure advance than PLA.
- **Layer height:** Use layer heights of 0.16–0.24 mm on a 0.4 mm nozzle. Moderately thick layers reduce the number of cooling cycles and the associated stress.
- **Line width:** Use line widths of 0.44–0.50 mm on a 0.4 mm nozzle. Slightly wider lines improve bead-to-bead contact and reduce micro-voids.

### 2.4 Adhesion and warping

Warping is a shrinkage problem, not an adhesion problem alone. The following measures work together:

- Use Garolite/G10 or a PEI sheet with Magigoo PA. A PVA glue stick works as a cheaper alternative and also acts as a release layer.
- Set the bed to 80–100 °C for PA6 and PA12, and follow the datasheet for low-warp copolymers.
- Use an 8–12 mm brim with a 0 mm gap.
- Keep the chamber closed and avoid drafts. A passive Top Cover at 40–50 °C is useful.
- Print the first layer slowly and at a slightly higher nozzle temperature than the rest of the part.
- Let the part cool on the bed below about 50 °C before removing it. Removing a hot PA6 part from a cold room is a common cause of immediate curl.

### 2.5 Annealing

Annealing increases crystallinity, relieves some extrusion stress, and raises HDT. A practical cycle is 80–100 °C for 4–6 hours, followed by slow cooling. Ramp the oven at 1–2 °C per minute if it has that control; otherwise place the part in a cold oven, bring it up to temperature, hold, and let it cool inside the oven.

Thin walls and tall parts can sag during annealing. Packing the part in dry sand or salt supports the walls, but the packing material must be dry and must be rinsed out afterwards. Annealing also causes a small additional shrinkage, so measure critical dimensions after annealing, not before.

Annealing does not make a wet part suitable for hot service. It raises the dry HDT, but the glass transition and moisture sensitivity are still the limiting factors. Recondition the part after annealing if toughness matters, because a dry annealed part can be more brittle than a conditioned one.

### 2.6 Moisture conditioning and dyeing

Freshly printed PA6 is dry and relatively brittle. Before a part goes into impact service, condition it by leaving it at about 50% relative humidity for 2–3 days, or by soaking it in water at 40–60 °C for a few hours. Do not boil it. Conditioning absorbs roughly 2–3% water in PA6, lowers the glass transition, and raises impact strength, but it also causes about 0.4–0.7% linear growth in PA6 and much less in PA12. Measure precision parts after conditioning.

Nylon can be dyed with acid dyes or with a synthetic dye intended for nylon, such as Rit DyeMore. A typical bath is 80–90 °C for 30–60 minutes with a small amount of white vinegar for acid dyes. This also conditions the part. Rinse thoroughly and dry it before use. Boiling is unnecessary and can distort thin or annealed parts.

### 2.7 Troubleshooting

| Symptom | Likely cause | Practical fix |
| :--- | :--- | :--- |
| Foamy, matte, or hissing extrusion | Wet filament | Dry at 80–85 °C for 8–12 hours and print from a sealed dry box. |
| Corners lift and the brim curls | Shrinkage, drafts, or poor adhesion | Use Garolite or Magigoo PA, add a brim, close the Top Cover, and slow the first layer. |
| Layers separate or look delaminated | Fan too high, nozzle too cold, or print too fast | Reduce fan to 0–20%, raise the nozzle by 5 °C, and lower volumetric flow. |
| Rough or inconsistent surface | Moisture, overheating, or inconsistent extrusion | Dry the spool, check the nozzle temperature, and inspect the feeder for grinding. |
| Weak layer bonds | Moisture, low temperature, or excessive speed | Dry the filament, raise the nozzle temperature within the material range, and reduce speed. |
| Part creeps or loosens over time | Moisture plasticisation under sustained load | Use a filled PA grade, a larger load-bearing area, or a different polymer. |

## 3. Snapmaker U1 integration

The U1 is a four-toolhead toolchanger with a 270 × 270 × 270 mm build volume, a 300 °C maximum nozzle temperature, and a 100 °C maximum bed temperature. It has two filament feeders, one for toolheads 1–2 and one for toolheads 3–4, plus four spool holders. It does not have four independent auto-feeders. RFID detection works with Snapmaker filament; other brands must be set manually.

For unfilled PA, the stock 0.4 mm stainless-steel hotend is the sensible starting point. The stock hotends are integrated units, so the nozzle cannot be replaced on its own. Hardened-steel hotends are available in 0.2, 0.4, 0.6, and 0.8 mm, sold as four-packs of one diameter. They are required for carbon-fibre and glass-fibre PA, not for unfilled PA.

The official supported-material list includes PA when the Top Cover is installed. It does not include a chamber heater. The Panda Breath is a community add-on, and the firmware and cooling requirements in Section 2.2 apply. The Panda Breath's 60 °C ceiling is adequate for small and medium PA parts, but it is not a substitute for a properly designed high-temperature printer.

The toolchanger is genuinely useful for PA because it allows a separate support material without cross-contamination in a shared melt zone. A water-soluble support such as BVOH can be used for internal cavities, but it is hygroscopic and must be kept dry. A breakaway interface made from PETG can also work, but test the bond on a small part first because PA/PETG adhesion varies. A prime or wipe tower is still needed; a toolchanger does not eliminate oozing.

## 4. Real demonstration models

1. **[Printables: Kenwood Chef Nylon Gear](https://www.printables.com/model/113623-kenwood-chef-nylon-gear)** is a replacement gear for a Kenwood Chef blender. The designer printed it in Taulman Bridge nylon, which makes it a direct example of PA in a loaded gear train.
2. **[Printables: Bernina 730 Nylon Cam Gear](https://www.printables.com/model/1433518-bernina-730-nylon-cam-gear)** replaces a broken moulded nylon cam gear in a Bernina Record 730 sewing machine. The original part was nylon, so PA6 or PA12 is the natural repair material.
3. **[Printables: Nylon Carabiner Replacement Clasp](https://www.printables.com/model/49702-nylon-carabiner-replacement-clasp)** is a replacement clasp for a nylon carabiner. It is a useful test of PA's flex fatigue and impact toughness in a thin, springy section.
4. **[Printables: Parametric Linear Bushing with Low-Friction Inserts](https://www.printables.com/model/227252-parametric-linear-bushing-with-low-friction-pomdel)** uses short sections of low-friction filament as the sliding interface inside a printed body. Nylon or POM inserts demonstrate the low-friction, wear-resistant behaviour that makes PA useful for bushings.
5. **[Printables: RC Car Differential](https://www.printables.com/model/131060-rc-car-differential)** is a printable differential for an RC car. PA12 or PA6 is a sensible choice for the gears and housings because the part needs impact toughness and wear resistance rather than maximum stiffness.

## 5. Videos

1. **[Protolabs: Nylon PA 12 - 3D Printing Materials Explained](https://www.youtube.com/watch?v=JBOeg0ylhoI)** gives a concise introduction to PA12, including its properties, printing behaviour, and typical applications.
2. **[My Tech Fun: Ultimate Nylon Filament Test - Polymaker CoPA vs PA6-GF vs PA6-CF vs PA12-CF](https://www.youtube.com/watch?v=cQb-hbr1KYY)** compares a warp-free PA6/66 copolymer with filled nylons and covers printability, torque, impact, temperature resistance, and creep.
3. **[My Tech Fun: Creep Test with 3D Printed Plastic Materials - PLA, PETG, ASA, Nylon](https://www.youtube.com/watch?v=88pk2cNOeGE)** shows why nylon's high dry strength does not translate into unlimited load capacity under sustained stress.
4. **[My Tech Fun: PrintDry PRO 3 Review - Can It Really Operate at 85 °C?](https://www.youtube.com/watch?v=8Kpd3SRJV44)** tests a dryer that reaches the temperature range needed for PA6 and is directly relevant to the drying advice in Section 2.1.
5. **[CNC Kitchen: Everyone Gets This Wrong When 3D Printing Carbon Fiber Nylon](https://www.youtube.com/watch?v=u8dIpwd6tzo)** tests carbon-fibre PA6 and PA12 and shows how moisture, creep, and annealing change measured performance. The filled grades are stiffer, but the moisture and annealing lessons also apply to unfilled PA.

## 6. Commercially available polyamide filaments

Where a price is given, it is approximate and reflects a listing seen in October 2026. Prices exclude shipping and tax and change frequently. Spool sizes differ, so compare price per kilogram rather than the sticker price.

| Brand and product | Polyamide chemistry | Spool size | Approximate price | Why it is worth considering | Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Polymaker PolyMide CoPA** | PA6/66 copolymer with Warp-Free technology | 750 g | About $50 | Low warping, 66–78 MPa tensile strength, HDT around 111 °C at 0.45 MPa after annealing, and good dimensional stability without a heated chamber. | [MatterHackers](https://www.matterhackers.com/store/l/polymaker-polymide-copa-black-175mm-75kg/sk/MPEW184A) |
| **Taulman3D Alloy 910** | Unfilled nylon copolymer alloy | 1 lb (about 450 g) | About $35–55 | A tough, unfilled engineering nylon with high tensile strength and good chemical resistance. Note that the spool is 1 lb, not 1 kg. | [Go 3D Print](https://www.go-3dprint.com/products/taulman-alloy-910-black-filament-1-75mm.html) |
| **eSUN ePA** | PA6/66 copolymer | 1 kg | About $40 | A low-cost entry into unfilled PA6/66 with high elongation and good wear resistance. Natural white takes dye well. | [eSUN Store](https://esun3dstore.com/products/epa) |
| **Overture Easy Nylon** | PA6/66 copolymer | 1 kg | About $34–38 | A budget-friendly low-shrinkage nylon intended for printers without an actively heated chamber. | [Amazon](https://www.amazon.com/dp/B087R3M9Z2) |
| **Snapmaker Nylon** | CoPA (PA6/66 copolymer) | 1 kg | $59.99 | Tuned for Snapmaker printers and RFID-ready on the U1. The datasheet gives 66.2 MPa tensile strength, a 190 °C melting point, and a 67 °C glass transition. | [Snapmaker](https://www.snapmaker.com/filaments/nylon/normal) |
| **Fiberlogy Nylon PA12** | PA12 | Spool weight varies; check the listing | Regional pricing | A European unfilled PA12 with low moisture uptake and high elongation, suitable for dimensionally stable mechanical parts. | [Fiberlogy](https://fiberlogy.com/en/fiberlogy-filaments/nylon-pa12/) |
| **FormFutura STYX PA6** | PA6 | 250 g, 500 g, or 1 kg | Regional pricing | A low-warp PA6 that prints at 255–285 °C and is marketed for functional parts, gears, and hinges. | [FormFutura](https://www.formfutura.com/filaments/pa-nylon/styx-pa6) |
| **Prusament PA11 Natural** | PA11, bio-based | 800 g | About $122 | A castor-oil-derived PA11 with low moisture uptake, high impact resistance, and good dimensional stability. | [Prusa Research](https://www.prusa3d.com/product/prusament-pa11-natural-800g-nfc/) |
| **MatterHackers PRO Series Nylon** | PA6/PA66 blend | 750 g | About $62 | An industrial PA6/PA66 blend with tight diameter tolerance and a range of colours, intended for repeatable functional parts. | [MatterHackers](https://www.matterhackers.com/store/l/pro-series-nylon/sk/MCR8GQZT) |
| **3DXTech ION PA6 Alloy** | PA6 alloy | 750 g | About $39 | An easy-to-print PA6 alloy with good chemical resistance. Its HDT at 1.8 MPa is only about 65 °C, which illustrates why HDT must be matched to the load. | [Rev1 Technologies](https://rev1tech.com/shop/3d-printing/3d-print-materials/filament/3dxtech-ion-nylon-6-alloy-nylon-6-alloy) |

PolyMide CoPA remains the safest first choice for a U1 owner who wants a flat, strong nylon part without a chamber heater. Overture Easy Nylon and eSUN ePA are the budget options. PA12 is the better choice when dimensional stability and low moisture uptake matter more than peak strength, and PA6 is the choice when maximum strength and wear resistance justify the extra drying and warping effort.

## 7. Related notes

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
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]

## 8. Sources

- [Polymaker PolyMide CoPA product information sheet](https://polymaker.com/wp-content/tech-docs/PolyMide_CoPA_PIS_EN_V2.1.pdf) gives the 190 °C melting point, 66–67 °C glass transition, 9.9% elongation, and 9.6 kJ/m² Charpy impact for the V2.1 datasheet. Later revisions list about 12.7% elongation and 111 °C HDT at 0.45 MPa after a controlled anneal.
- [Snapmaker Nylon material page](https://www.snapmaker.com/filaments/nylon/normal) lists 66.2 MPa tensile strength, a 190 °C melting point, a 67 °C glass transition, and a 250–270 °C nozzle range for Snapmaker's CoPA.
- [CNC Kitchen: Carbon Fiber Nylon in 3D Printing, PA6 vs PA12 Tested](https://www.cnckitchen.com/blog/carbon-fiber-nylon-in-3d-printing-pa6-vs-pa12-tested) provides measured data on moisture, creep, annealing, and heat resistance for PA6 and PA12.
- [Creality SpacePi X4](https://www.creality.com/products/creality-spacepi-x4) specifies a 45–85 °C drying range.
- [Sunlu FilaDryer E2](https://www.sunlu.com/products/298) specifies a maximum temperature of 110 °C.
- [PrintDry PRO 3](https://www.matterhackers.com/store/l/printdry-pro-3-filament-drying-system/sk/MVC0EL93) specifies presets up to 85 °C.
