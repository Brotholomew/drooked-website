---
title: "01 - Drying Filament"
tags:
  - 3d-printing
  - filaments
  - drying
  - moisture
  - hygroscopy
  - filament-dryer
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| Moisture and hydrolysis | Water expands by roughly 1,600 times when it flashes to steam at 100 °C, and hydrolysis becomes rapid in the melt at 200–300 °C. | Explains popping, bubbles, weak layers and brittle filament. | PA (polyamide), PVA (polyvinyl alcohol) and BVOH (butenediol vinyl alcohol copolymer) are the most affected. PLA (polylactic acid), PETG (polyethylene terephthalate glycol-modified), PC (polycarbonate) and TPU (thermoplastic polyurethane) also absorb water. |
| Snapmaker U1 limits | The nozzle reaches 300 °C, the bed reaches 100 °C, and the chamber must stay at or below 60 °C. The Top Cover gives about 50 °C passively. | Sets the ceiling for every drying and printing method described here. | A chamber heater needs motherboard cooling and community firmware. |
| PLA and PLA blends | Dry at 45–50 °C for 4–8 hours. Do not exceed 50 °C. | Models, prototypes, jigs and general-purpose parts. | PLA windings soften and weld to each other near 55–60 °C. |
| PETG, PCTG (polycyclohexylenedimethylene terephthalate glycol-modified) and TPU | PETG at 55–65 °C, PCTG at 60–65 °C, and TPU at 55–65 °C, for 6–8 hours. | Functional parts, brackets, ducts, gaskets and flexible parts. | These materials print on the U1 without a heated chamber. |
| ABS (acrylonitrile butadiene styrene), ASA (acrylonitrile styrene acrylate) and HIPS (high-impact polystyrene) | Dry at 70–80 °C for 4–8 hours. | Enclosures, automotive trim, outdoor parts and soluble supports. | ABS and ASA need the Top Cover and filtration. HIPS also emits styrene when printed and needs ventilation. |
| PA, PC and PPA (polyphthalamide) | PA at 70–90 °C for 8–16 hours, PC at 75–90 °C for 6–12 hours, and PPA at 90–120 °C for 8–16 hours. | Gears, hinges, structural brackets and high-temperature parts. | PPA needs a separate oven that reaches 90–120 °C. The U1 chamber cannot dry it. |
| PVA and BVOH | Dry at 55–70 °C for 8–12 hours, following the spool label. | Water-soluble support interfaces on the U1 toolchanger. | Some brands specify 45–55 °C and others specify about 80 °C. |
| Verification | A stable mass change of 0.1–0.2 g over two hours, and a sealed-chamber equilibrium below about 5% RH for PA and below 15% RH for most other polymers. | Confirms that a spool is dry before a long or expensive print. | Relative humidity is a screening test, not a measurement of polymer moisture content. |
| U1 feed path | Two filament feeders serve four toolheads, and there are four spool holders. | A four-spool dryer can supply all four spools at once. | The U1 does not have four independent feeders. Keep the tube runs short. |

> [!abstract] Overview
> Moisture is one of the most common hidden causes of poor surface finish, weak layer adhesion and inconsistent extrusion in fused deposition modelling (FDM). This note explains why hygroscopic polymers absorb water, what happens when wet filament enters a hot nozzle, how to choose a drying temperature for each material, how to verify that a spool is actually dry, and how to integrate drying with a **Snapmaker U1**. It also corrects several widespread myths: not every polymer loses impact toughness when wet, relative humidity (RH) in a dryer does not prove that nylon is dry, and polytetrafluoroethylene (PTFE) tubing is not a vapour barrier.

---

## 🔬 1. Why Drying Is Necessary

### 1.1 Hygroscopicity and polar groups

Whether a polymer absorbs water from the air depends mainly on its chemistry and on how much of it is amorphous. Water is a polar molecule, so it forms hydrogen bonds with polar groups in the polymer chain. The main polymers discussed here are PLA, PETG, PCTG, ABS, ASA, TPU, PC, PA, PPA, PPS, PEEK and PEI.

- **Amide groups** in polyamides (PA6, PA66, PA12) and polyphthalamide (PPA) have a strong affinity for water. PA6 can absorb roughly 8–10% of its own mass at saturation in liquid water or at 100% relative humidity, and about 2.5–3.5% by mass in ordinary room air at 50% relative humidity.
- **Hydroxyl groups** in polyvinyl alcohol (PVA) and butenediol vinyl alcohol copolymer (BVOH) are designed to dissolve in water, which makes these materials extremely hygroscopic.
- **Ester, carbonate and urethane linkages** in PLA, PETG, PCTG, polycarbonate (PC) and thermoplastic polyurethane (TPU) attract water more moderately. They still pick up enough moisture over weeks or months to cause visible printing defects.

Water does not penetrate the tightly packed crystalline regions easily. It diffuses into the amorphous regions between chains, where it acts as a molecular plasticiser. The chains move apart, the glass transition temperature falls, and the polymer becomes softer and more ductile. That is why damp nylon feels rubbery while dry nylon feels stiff.

### 1.2 Hydrolysis in the melt

Many printing polymers contain linkages that water can attack at melt temperature, including esters, amides, carbonates and urethanes. When absorbed water is heated with the polymer inside the hotend, it can break the backbone by hydrolysis. For a polyester the reaction is:

$$\text{R}-\text{COO}-\text{R'} + \text{H}_2\text{O} \xrightarrow{\Delta} \text{R}-\text{COOH} + \text{HO}-\text{R'}$$

Each cleavage reduces the molecular weight of the polymer. Because strength and interlayer entanglement depend on chain length, hydrolysed filament produces parts with lower tensile strength, poorer layer adhesion and, often, brittle filament on the spool. The damage cannot be reversed by drying later: once the chains have been cut, they stay cut.

It is often said that wet filament causes a 30–60% drop in Z-axis strength and impact toughness. That statement is too broad. Tensile and layer-strength losses of roughly 10–40% have been reported in badly wetted PA, PETG and PC, but the exact loss depends on the polymer, the amount of absorbed water, the melt temperature and the residence time in the nozzle. Impact toughness is an even poorer general indicator. Water plasticises polyamides, so a damp PA part can be tougher than a bone-dry one even though it is weaker and less stiff. The reliable statement is that moisture degrades strength, stiffness and surface quality, while its effect on impact toughness depends on the polymer.

### 1.3 Steam expansion at the nozzle

As the polymer heats in the melt zone, dissolved water turns to steam. At 100 °C, water expands by roughly 1,600 times when it becomes saturated steam; at 250 °C the expansion is greater still. The steam remains compressed inside the melt zone, but at the nozzle exit the pressure drops to atmospheric and the water flashes explosively.

The results are easy to recognise:

- **Foaming and surface defects.** Steam bubbles rupture the extrusion bead and leave pits, matte patches or a rough surface.
- **Oozing and stringing.** Expanding steam pushes molten polymer out of the nozzle during retraction and travel moves, much like a small piston.
- **Popping and hissing.** Bursting steam pockets make audible crackling or popping sounds at the nozzle.
- **Voids and delamination.** Steam trapped between layers reduces the true contact area and weakens the bond between them.

The water does not need to boil in the spool. It vaporises in the melt, which is why a spool that feels dry to the touch can still print badly.

---

## 📊 2. Drying Schedules by Polymer Type

> [!important] How to choose a drying temperature
> For a low-$T_g$ amorphous polymer such as PLA or PETG, a practical starting point is 10–15 °C below its glass transition temperature ($T_g$), because the filament must not soften and weld on the spool. This rule is only a starting point. For ABS, ASA and PC, manufacturers usually recommend temperatures well below the rule because oxidation and spool softening become limiting before the polymer itself does. Semi-crystalline engineering polymers such as PA, PPA, PPS and PEEK can be dried above their $T_g$ because the crystallites help the filament keep its shape. The values in the table below therefore follow manufacturer data and practical limits rather than the 10–15 °C rule.
>
> Measure the air temperature inside the dryer with a separate thermometer. Many inexpensive dryers overshoot their setpoint, and a hot spot near the heater can weld a spool even when the display looks safe.

| Polymer family | Glass transition ($T_g$) | Dryer air temperature | Drying time | Target storage RH | Notes for the U1 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| PLA and PLA+ | 55–60 °C | 45–50 °C | 4–8 h | Below 20% | It prints on the U1 without the Top Cover. Stay at or below 50 °C. |
| Silk, matte and wood-filled PLA | 50–58 °C | 45–50 °C | 4–8 h | Below 20% | Wood and other fillers hold extra moisture, so use the longer end of the range. |
| PETG and PETG-CF | 75–80 °C | 55–65 °C | 6–8 h | Below 15% | Plain PETG prints without the Top Cover. PETG-CF needs the Top Cover and a hardened-steel hotend. |
| PCTG | 80–88 °C | 60–65 °C | 6–8 h | Below 15% | It prints without the Top Cover and is tougher than PETG. |
| ABS | 100–105 °C | 70–80 °C | 4–8 h | Below 20% | Use the Top Cover and filtration because of styrene emissions. |
| ASA | 100–108 °C | 70–80 °C | 4–8 h | Below 20% | Use the Top Cover. ASA is more ultraviolet-resistant than ABS. |
| TPU and TPE (thermoplastic elastomer) | −40 to −20 °C for the soft segment; Vicat softening around 60–90 °C | 55–65 °C | 6–8 h | Below 15% | It prints without the Top Cover. Feed flexible filament slowly and avoid sharp bends. |
| PVA and BVOH | 60–85 °C when dry | 55–70 °C | 8–12 h | Below 10% | Follow the spool label. Some brands specify 45–55 °C, while Bambu Lab specifies about 80 °C. |
| HIPS | 95–100 °C | 60–70 °C | 4–6 h | Below 20% | It is normally used as a support material. Ventilate the room when using limonene to smooth it. |
| PA6 and PA66 | 47–60 °C | 70–90 °C | 8–16 h | Below 10% | Use the Top Cover. Print from a dry box or a running dryer. |
| PA12 | 37–45 °C | 65–80 °C | 6–12 h | Below 12% | Use the Top Cover. PA12 absorbs less water than PA6. |
| PC | 145–150 °C | 75–90 °C | 6–12 h | Below 10% | Use the Top Cover. PC-ABS is a different material with a lower $T_g$. |
| PC-ABS | 105–120 °C | 70–80 °C | 4–8 h | Below 12% | Use the Top Cover. Do not apply the pure-PC drying schedule. |
| PPA | 90–125 °C | 90–120 °C | 8–16 h | Below 10% | It requires a separate oven that reaches 90–120 °C and the Top Cover. Filled grades also need a hardened-steel hotend. |
| PPS (polyphenylene sulfide) | 85–90 °C | 100–130 °C | 6–12 h | Below 15% | PPS is marginal on a 300 °C nozzle and loses layer strength compared with 320–340 °C. |
| PEEK (polyether ether ketone) and PEI (polyetherimide) | 143 °C and 217 °C | 120–150 °C | 6–12 h | Below 10% | These materials need 340–400 °C and cannot be printed on the U1. |
| PET (polyethylene terephthalate) and PET-CF | 75–80 °C when amorphous | 65–80 °C | 6–8 h | Below 15% | PET-CF needs the Top Cover and a hardened-steel hotend. |
| PVB (polyvinyl butyral) | About 50–60 °C | 45–50 °C | 4–6 h | Below 20% | Keep the temperature low, because PVB softens easily and is smoothed with isopropyl alcohol. |

A few qualifications apply to the whole table:

- **The storage RH column is a dry-box target, not a drying test.** It describes the humidity to aim for after drying. The sealed-chamber ERH test in Section 4.2 uses different pass levels because it measures the air in equilibrium with the polymer.
- **Filled and reinforced grades** should follow the schedule of their base polymer, usually at the longer end of the time range. The suffix -CF means carbon fibre and -GF means glass fibre. Voids at the fibre or particle interface can hold water, and abrasive fillers require a hardened-steel hotend.
- **Spool material matters.** Many cardboard spools warp when warm and damp, and some plastic spools soften at 70–80 °C. Check the manufacturer's spool rating before a long high-temperature cycle.
- **Drying is not annealing.** A dryer removes water. Annealing changes crystallinity and relieves moulded-in stress, and it usually requires a separate, higher-temperature programme after printing.
- **A dryer display is not a measurement.** The air near the spool can be 10–20 °C cooler than the setpoint, or much hotter near the heater. Use a separate probe and, if possible, confirm with the gravimetric test in Section 4.

---

## 🛠️ 3. Drying Hardware and Methods

### 3.1 What a good filament dryer must do

A purpose-built dryer needs four things: a controlled heater, a circulation fan, a way to remove the moist air, and a spool support that does not crush or soften the filament. A sealed box with a heater but no vent or desiccant simply becomes a warm sauna. The water leaves the filament, raises the humidity of the air in the box, and then partly returns to the filament when the heater switches off.

A dryer can remove moisture in one of three ways:

1. **Ventilation.** A small fan or adjustable vent exchanges moist air with the room. This is simple and effective, but the room air must be reasonably dry.
2. **Desiccant loop.** Air passes through fresh silica gel or molecular sieve before returning to the spool. This works well in a sealed dryer, but the desiccant must be regenerated.
3. **A combination of both.** Many good dryers vent a little air and include a desiccant compartment. If a dryer has neither, prop the lid open by a few millimetres during the first part of the cycle and close it later.

### 3.2 Types of dryer

| Method | Typical temperature | Strengths | Limitations |
| :--- | :---: | :--- | :--- |
| Single-spool dryer | 40–70 °C | Cheap, compact and easy to place next to the printer. | Small capacity and often uneven temperature. |
| Four-spool dryer with one chamber | Up to about 70 °C | Convenient for a four-material U1 workflow. | All spools share one temperature, so low-temperature and high-temperature materials cannot be dried together. |
| Four-spool dryer with two chambers | Up to about 85 °C | Independent temperatures for PLA and engineering materials. | Larger, heavier and more expensive. |
| High-temperature engineering dryer | Up to 110 °C or more | Reaches the range needed for PA, PPA, PPS and PC. | Costs more and needs more space and power. |
| Food dehydrator | Usually 35–70 °C, some models higher | High airflow, low cost and good uniformity for bulk drying. | Requires a custom port for direct feeding and has limited temperature control. |
| Laboratory forced-air oven | 200–250 °C | Accurate, uniform and suitable for engineering polymers and desiccant regeneration. | Expensive and not a normal household appliance. |
| Heated print bed with a cover | 45–100 °C bed setpoint | Uses equipment you already own. | Slow, uneven, easy to overheat the spool and unsuitable for production use. |
| Kitchen oven | Usually 50–250 °C | None for filament drying. | Poor low-temperature control, hot spots, food-safety contamination and a serious risk of melting the spool. |

Several current dryers are worth knowing about, although models and specifications change:

- The **Creality Space Pi X4** has two independently controlled two-spool chambers and reaches about 85 °C. It can dry PLA in one chamber while drying PA or PC in the other.
- The **Sunlu FilaDryer S4** holds four spools in one chamber and reaches about 70 °C. It is convenient for PLA, PETG and TPU, but saturated PA6 or PC needs a longer cycle at that ceiling.
- The **Sunlu FilaDryer E2** reaches about 110 °C and can also be used for annealing. It is aimed at PA, PPA, PPS and PC.
- The **Polymaker PolyDryer** combines a heated dock with sealed storage boxes and colour-indicating desiccant. Snapmaker sells a **SnapDryer** add-on and a dryer-and-storage bundle for the U1 ecosystem.
- The **PrintDry Pro 3** reaches about 85 °C and is suitable for nylon and PC. Dryers with rotating spool holders, such as the Eibos models, reduce local hot spots on the bottom of a stationary spool.

The exact wattage and maximum temperature of each model should be checked against the current product page. Do not assume that a dryer advertised for "PA" reaches the temperature that a particular PA blend actually needs.

### 3.3 Food dehydrators

A food dehydrator can be an excellent bulk dryer. It moves a large volume of air, exhausts moist air into the room instead of recirculating it, and usually costs less than a dedicated four-spool dryer. The main limitations are the lower maximum temperature on many models and the need to make a filament port if you want to print directly from it. A dehydrator that reaches only 70 °C is fine for PLA, PETG, TPU and ABS, but it is not ideal for saturated PA6, PPA or PC.

### 3.4 Laboratory ovens

A forced-air laboratory oven with proportional-integral-derivative (PID) control and ±1–2 °C uniformity is the right tool for PPA, PPS, PEEK and PEI, and for regenerating molecular sieve. It is also the only practical way to dry a badly saturated PA spool at 90–100 °C for many hours. These ovens are expensive, so most hobbyists should choose a high-temperature filament dryer instead.

### 3.5 Why a kitchen oven is a bad idea

A domestic oven is designed for food, not for polymers. Its lowest setting may be far above the intended drying temperature, its thermostat has wide hysteresis, and the heating elements can overshoot sharply during preheat. A PLA spool left in an oven that overshoots to 80 °C can weld into a solid block or deform into an oval that will not feed. Ovens also accumulate polymer fumes and additives on surfaces that are later used for food. Do not use one for filament.

### 3.6 Drying on the U1 heated bed

The U1 has a 100 °C bed and an optional Top Cover, so it can be used as an emergency drying chamber when no print is running. The method works, but it needs care:

1. Place one or two spools on the build plate, raised about 5 mm on printed standoffs or on a ventilated cardboard box so that air can circulate underneath.
2. Cover the spools with a cardboard filament box with two small exhaust holes, or close the Top Cover. Put a thermometer next to the spools rather than trusting the bed setpoint.
3. Set the bed to 45–50 °C for PLA, 60–70 °C for PETG, 80–90 °C for ABS or ASA, or 90–100 °C for PA or PC. These are bed setpoints, not air temperatures. The air around the spool will be cooler, so the cycle will take longer than it would in a purpose-built dryer.
4. Flip the spool every two to four hours so that the side facing the bed does not overheat.
5. Measure the air next to the spool and keep it below the material's limit in Section 2. In particular, PLA air must stay at or below 50 °C. If you are using the closed printer enclosure as the drying chamber and the air exceeds 60 °C, vent it or reduce the bed setpoint. The 60 °C figure is the hardware limit for chamber heating, not a drying target.

Bed drying is slower and less uniform than a proper dryer. It is best reserved for an occasional spool, not for a repeated production workflow.

---

## 📏 4. How to Verify That Filament Is Dry

Do not rely on a timer alone. A slightly damp spool of PETG may be dry in six hours, while a saturated spool of PA6 may need sixteen hours or more. Use one or more of the following tests.

### 4.1 Gravimetric test

Weighing the spool before and during drying is the most practical quantitative test outside a laboratory moisture analyser. Use a scale with 0.1 g resolution, or 0.01 g if you have one.

$$\Delta m_{\text{water}}(t) = m_0 - m(t)$$

1. Weigh the spool immediately before drying and record the mass.
2. Weigh it every two hours. Keep the spool in the same conditions for a minute before weighing so that the reading is stable.
3. Stop when two readings separated by at least two hours differ by 0.1–0.2 g or less. At that point the spool has reached its asymptotic mass for that temperature.
4. Remember that a cardboard spool core can hold several grams of water. Some of the early mass loss comes from the cardboard, not the polymer, so wait for the combined mass to plateau.

The test measures water loss, not the absolute moisture content of the polymer. A spool that has stopped losing mass at 50 °C may still contain more water than the same polymer would at 80 °C, because the diffusion rate and the equilibrium moisture content both depend on temperature.

### 4.2 Sealed-chamber equilibrium relative humidity

A hygrometer inside a running dryer measures the relative humidity of hot air, and that number is misleading. The saturation vapour pressure of water at 60 °C is about 8.5 times its value at 20 °C, so air at 60 °C can hold far more water vapour at the same relative humidity. A dryer showing 10–15% RH at 60 °C may still contain enough water to damage nylon.

The useful version of this test is done after the spool has cooled:

1. Remove the dried spool from the dryer and place it in a sealed airtight container with no desiccant.
2. Put a calibrated hygrometer in the container, close it, and let it stand at room temperature (about 22 °C) for two to four hours.
3. Read the equilibrium relative humidity (ERH) of the headspace.

Suggested pass levels are below about 15% RH for PLA, PETG, ABS and similar materials, and below about 5% RH for PA, PPA and PVA. The lower figure for polyamides is not arbitrary. PA6 holds a surprising amount of water even at modest humidity: a headspace reading of 15–20% RH corresponds to roughly 1% or more moisture in the polymer, which is far above the 0.15–0.20% that is normally recommended for printing. A 15–20% reading may be acceptable for PLA, but it does not prove that nylon is dry.

Even a low ERH reading is only a screening test. The headspace humidity depends on the container volume, the spool mass, the temperature and the calibration of the sensor. For critical parts, use the gravimetric test or a laboratory moisture analyser.

### 4.3 Free-air extrusion test

This is a quick check before a critical print:

1. Heat the nozzle to the normal printing temperature, for example 240 °C for PETG or 270 °C for carbon-fibre PA (PA-CF).
2. Raise the toolhead about 50 mm above the bed and command a 50 mm free-air purge.
3. Watch and listen to the extruded strand.

Wet filament usually crackles, pops or hisses. The strand may jerk from side to side as steam bubbles burst, and the cooled strand may look rough, foamy, swollen or matte. Dry filament extrudes quietly and forms a smooth, uniform strand with a consistent diameter. A 0.4 mm nozzle should produce a strand close to 0.4 mm, not a swollen 0.55 mm rope.

### 4.4 Bend test

The bend test is useful but easy to misinterpret:

- **PLA** that has been hydrolysed or physically aged may snap cleanly when bent through 45–90°. Fresh, dry PLA usually bends further and shows white stress whitening before it breaks. A snap does not prove that the spool is wet, because over-drying and long storage can also embrittle PLA.
- **Nylon** behaves in the opposite way. Damp nylon is soft, flexible and rubbery because water lowers its $T_g$ below room temperature. Bone-dry nylon is stiffer and crisper on the spool. For nylon, a soft feel is a warning sign, not a sign of quality.

Neither result is a quantitative measurement. Use the bend test as a prompt to weigh the spool or run an extrusion test, not as a final verdict.

---

## ⚠️ 5. Can Filament Be Dried Too Much?

There is no such thing as filament that is too dry for melt extrusion, but filament and spools can be damaged by excessive temperature or by very long exposure to warmth. The risks are real, and they are mostly risks to the filament and the spool rather than to the polymer's chemistry.

### 5.1 Spool welding and softening

PLA softens near its glass transition at 55–60 °C. Under the tension of a tightly wound spool, adjacent windings can fuse together at or slightly above that temperature. The result is a solid block, a flattened oval cross-section, or a spool that feeds unevenly and jams in the U1 feeder.

This is why PLA should be dried at 45–50 °C, not at 55–65 °C. The higher range leaves almost no margin for a hot spot, an inaccurate thermostat or a spool core that conducts heat. A dryer that reads 50 °C but has a 65 °C patch near the heater can still weld the outer layers. Use a separate thermometer and keep PLA at the low end of its range.

### 5.2 Physical ageing, not cold crystallisation

It is sometimes said that holding PLA at 50–55 °C causes cold crystallisation. That is incorrect. The cold-crystallisation range for PLA is roughly 100–120 °C, well above any normal filament-drying temperature. At 50–55 °C, PLA undergoes physical ageing and stress relaxation rather than crystallisation.

Long warm storage can still make PLA brittle. The glassy structure densifies slowly toward its equilibrium state, and the filament loses some of the toughness it had when it was extruded. The practical fix is simple: dry PLA at 45–50 °C for 4–8 hours, then move it to a sealed dry box. Do not leave it in a warm dryer for days.

### 5.3 Oxidation and additive loss

ABS, ASA, TPU and polyamides can yellow or degrade when held at 75–90 °C in air for several days. Oxygen attacks the butadiene phase in ABS, the amide groups in PA, and the soft segments in TPU. Low-molecular-weight slip agents and plasticisers can also evaporate. Keep drying cycles as short as the material allows, ventilate the drying area, and do not use a dryer as a permanent heated storage cabinet unless the manufacturer designed it for that purpose.

### 5.4 Nylon must be dried to print and conditioned to use

Nylon is the clearest example of why "dry" has two different meanings:

- **Before printing**, PA6, PA66 and PA-CF should be at roughly 0.15–0.20% moisture or less. More than that causes steam foaming, hydrolysis and poor layer adhesion.
- **After printing**, a bone-dry PA part is stiff but can be brittle under sharp impact. Allowing it to absorb about 1.5–2.5% moisture from the air, or conditioning it in warm humid air, plasticises the polymer and improves impact toughness. The part also grows slightly, typically by a few tenths of a percent to about 1%, depending on the grade and the final moisture level.

Conditioning is not an excuse to print wet nylon. It is a controlled post-print step that improves toughness after the part has been built with dry filament.

> [!warning] Safety during drying and printing
> ABS and ASA release styrene, acrylonitrile and other volatile organic compounds. Dry and print them with the Top Cover and filtration, and ventilate the room. Limonene and isopropyl alcohol are flammable, so keep them away from heaters and open flames. Polyvinylidene fluoride (PVDF) and other fluoropolymers can release hydrogen fluoride if they are overheated, so never exceed the manufacturer's drying temperature and ventilate the area. Do not use a kitchen oven for filament, because polymer fumes and additives can contaminate food-contact surfaces.

---

## 🤖 6. Integrating Drying with the Snapmaker U1

### 6.1 The relevant machine limits

The U1 is a CoreXY toolchanger with four independent toolheads, a 270 × 270 × 270 mm build volume, a maximum toolhead speed of 500 mm/s and 20,000 mm/s² acceleration. Its maximum nozzle temperature is 300 °C, its maximum bed temperature is 100 °C, and it has no stock chamber heater.

The stock hotends are four 0.4 mm stainless-steel units. They are integrated assemblies, so the nozzle alone cannot be swapped. Official hardened-steel hotends are available in 0.2, 0.4, 0.6 and 0.8 mm, sold as four-packs of one diameter. Snapmaker does not officially support mixing diameters in the same print, although a community OrcaSlicer workaround with percentage line widths and a shared layer height has been reported to work for 0.4 mm and 0.6 mm. That workaround is not stock capability.

Snapmaker rates the maximum hotend flow at 32 mm³/s with Snapmaker ABS at 280 °C. This is not a universal limit. It is lower with small nozzles, abrasive-filled materials and lower printing temperatures.

The optional Top Cover provides passive chamber heating up to about 50 °C and includes high-efficiency particulate air (HEPA) and activated-carbon filtration. The official material list is:

- **Bare printer:** PLA, PETG, TPU, PVA and PCTG.
- **With the Top Cover:** PET, ABS, ASA, PA and PC.
- **With the Top Cover and a hardened-steel hotend:** carbon-fibre and glass-fibre composites.
- **Not supported:** PEEK and PEI, which need 340–400 °C. PPS is marginal at 300 °C and loses layer strength compared with printing at 320–340 °C.

### 6.2 Chamber heating with the Panda Breath

The BIQU Panda Breath is a 300 W positive temperature coefficient (PTC) chamber heater with HEPA and activated-carbon filtration. BIQU rates it for chamber temperatures up to 60 °C; the PTC element itself has a limit of 105 °C, and the unit draws about 330–350 W in operation.

The Panda Breath does not work with stock U1 firmware. It requires community firmware: either the **paxx12 Snapmaker U1 Extended Firmware** in Panda Breath WebSocket mode, or **DragonBreath**, which is the recommended path. DragonBreath drives the same board with its own safety model and presents the heater to Klipper as a standard chamber heater. Only one of the two control methods can be enabled at a time.

> [!danger] Motherboard cooling is mandatory
> Do not run a chamber heater on the U1 without additional active cooling on the motherboard. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures caused by motherboard overheating. The firmware documentation states that additional active cooling on the motherboard is required before a chamber heater is used. A 6015 fan that cools only the stepper drivers does not cool the RK3562 and is not sufficient on its own. A full-board cooler that covers the main processor is required.
>
> Elevated chamber temperature also accelerates wear on electronics and motors. Damage caused by sustained thermal stress is unlikely to be covered by warranty.

The Panda Breath is a chamber heater, not a filament dryer. It can keep a spool warm and slow moisture pickup during a print, but it cannot dry PA at 90 °C or PPA at 100 °C. Use a separate dryer or oven for those materials.

### 6.3 The direct-feed path

The U1 has **two filament feeders**, one on the left serving toolheads 1 and 2 and one on the right serving toolheads 3 and 4. There are four spool holders, so a four-spool dryer can supply all four spools. The filament still passes through only two feeder mechanisms, not four independent ones. The feeders support radio-frequency identification (RFID) recognition for Snapmaker filament, automatic loading and a backup mode.

The toolchanger keeps all four filaments loaded in their own toolheads during a multi-material print. A filament that is waiting on a standby toolhead can therefore sit in the feed path for many hours. A dry box or a running dryer is more useful than a short purge before the tool is used.

Recommended routing:

1. **Use PTFE tubing that matches the feeder's push-fit fittings.** A 4 mm outer diameter is common, and a 2.5 mm bore is preferable to a tight 2.0 mm bore because it reduces friction for carbon-fibre composites and TPU.
2. **Keep the runs as short and straight as practical.** PTFE is chemically inert and hydrophobic, but it is not a strong water-vapour barrier. Over a short run it slows moisture ingress; over a long run in a humid room it does not keep the filament dry.
3. **Use gentle bends.** A minimum bend radius of about 100–120 mm is a sensible target for 4 mm tubing. Sharp 90° bends increase drag and can snap stiff PA-CF or PETG-CF filament.
4. **Seal the dryer outlet and the feeder inlet.** The tube should seat fully in the push-fit fittings. A loose tube lets room air leak into the path.
5. **Dry the filament at its normal temperature while printing.** Set the dryer to 45 °C for PLA, 55–60 °C for PETG, 50–55 °C for TPU, 70–80 °C for PA and PC, and 55–60 °C for PVA. Do not put PVA in the same 70–80 °C cycle as PA or PC.
6. **Use the chamber only when the material needs it.** PLA and PETG do not need a heated chamber. ABS, ASA, PA and PC benefit from a chamber at 50–60 °C, but only after the motherboard cooling and firmware requirements are met.

### 6.4 Toolchanging, supports and ooze

Because the U1 is a toolchanger, chemically incompatible materials can be used as zero-gap support interfaces without contaminating a shared melt zone. PLA and PETG, or PLA and PVA, can touch at the interface while each material stays in its own toolhead. A prime tower or a wipe sequence is still needed. The toolchanger reduces cross-contamination, but it does not eliminate ooze, stringing or the need to clean the nozzle before a critical layer.

### 6.5 A practical workflow

1. Weigh every new spool and write the mass on the spool or in a log.
2. Dry it using the schedule in Section 2, with a separate thermometer in the dryer.
3. Cool the spool in a sealed container before weighing it again, so that the result is not affected by hot-air buoyancy.
4. Verify dryness with the gravimetric plateau, the sealed ERH test or an extrusion purge.
5. Store the spool in an airtight box with fresh desiccant and a hygrometer.
6. Print from a dry box or a running dryer when the material is PA, PVA, BVOH or PC.
7. Re-dry after any failed print, long exposure to humid air or unexplained popping.

---

## 🧭 Related Notes

- **General guides:**
  - [[00 - Filament Master Index]]
  - [[02 - Storing Filament]]
  - [[03 - Combining Storing and Drying - Science and Rational Approach]]
  - [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
  - [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- **Material notes:**
  - [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)|PLA]]
  - [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]]
  - [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)|PCTG]]
  - [[07 - ABS (Acrylonitrile Butadiene Styrene)|ABS]]
  - [[08 - ASA (Acrylonitrile Styrene Acrylate)|ASA]]
  - [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)|TPU and TPE]]
  - [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)|PA]]
  - [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC and PC blends]]
  - [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Carbon-fibre and glass-fibre composites]]
  - [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)|PPA]]
  - [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)|PPS]]
  - [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|PVA, BVOH and HIPS]]
  - [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)|PEEK and PEI]]

---

## 🔗 Sources

1. [Bambu Lab Wiki — Filament Drying Recommendations](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament). Manufacturer schedules for forced-air ovens, heated beds and AMS units, with notes on PA, PC, PVA and engineering blends.
2. [Prusa Knowledge Base — Drying Filament](https://help.prusa3d.com/article/drying-filament_332086). A short manufacturer table that recommends 45 °C for PLA and PVB, 55 °C for PETG and 85–90 °C for PC blends.
3. [Creality Wiki — Filament Pre-Printing Guide: Drying](https://wiki.creality.com/en/filament-drying). Practical guidance on why drying matters and how to dry filament during printing.
4. [Polymaker Wiki — PolyDryer](https://wiki.polymaker.com/polymaker-products/accessories/polydryer-tm). Specifications and operating guidance for a heated dryer dock and sealed storage boxes.
5. [Polymaker Wiki — Moisture Conditioning](https://wiki.polymaker.com/printing-tips/post-processing/moisture-conditioning). Explains why nylon parts are conditioned after printing rather than kept bone-dry in service.
6. [Snapmaker Wiki — U1 FAQ](https://wiki.snapmaker.com/en/FAQ/u1). Product specifications and support information for the U1 platform.
7. [Snapmaker Wiki — U1 Hotend User Guide](https://wiki.snapmaker.com/en/snapmaker_u1/hot_end_guide). Hotend construction, replacement and material guidance.
8. [PrintPal — Filament Drying Guide](https://printpal.io/wiki/filament-drying-guide). A broad temperature and time reference with a useful list of wet-filament symptoms.
9. [CNC Kitchen — Carbon Fibre Nylon in 3D Printing: PA6 vs PA12 Tested](https://www.cnckitchen.com/blog/carbon-fiber-nylon-in-3d-printing-pa6-vs-pa12-tested). Measured comparison of moisture effects, stiffness, strength and layer adhesion in carbon-fibre nylons.
10. [Bambu Lab Wiki — The Filament Sticks to the Nozzle](https://wiki.bambulab.com/en/filament-acc/filament/print-quality/filament-sticks-to-nozzle). Describes how moisture turns to vapour in the nozzle and pushes melt onto the nozzle wall.
11. [Bambu Lab Wiki — PET-CF, PPA-CF, PPS-CF and PA6-CF Usage Guide](https://wiki.bambulab.com/en/filament/petcf_ppacf). Drying, storage and printing guidance for abrasive engineering composites.
12. [paxx12 Snapmaker U1 Extended Firmware — DragonBreath and Panda Breath Chamber Heater](https://snapmakeru1-extended-firmware.pages.dev/panda_breath.html). Documents the two supported control paths and the mandatory motherboard cooling requirement.
13. [DragonBreath Firmware](https://github.com/plastikman/DragonBreath). Community firmware for the Panda Breath board, including its safety model and Klipper integration.
14. [Bambu Lab Wiki — PVA Printing Guide](https://wiki.bambulab.com/en/filament-acc/filament/pva-printing-guide). Notes that PVA drying temperatures vary by formulation and gives about 80 °C for Bambu Lab PVA.

---

## 🎥 Videos

1. [CNC Kitchen — Everyone gets this Wrong when 3D Printing Carbon Fiber Nylon](https://www.youtube.com/watch?v=u8dIpwd6tzo). Moisture, drying and the mechanical consequences of wet carbon-fibre nylon.
2. [My Tech Fun — 3 Creality Space Pi Filament Dryers Compared – Original, Plus & X4](https://www.youtube.com/watch?v=X1NL3aEGom4). Independent temperature and drying tests of the Space Pi family.
3. [My Tech Fun — 6 filament dryer test - which one dries better? eBox, eBox Lite, Sunlu, Sovol, Creality, Eibos](https://www.youtube.com/watch?v=6VB-pEvSed4). A comparative test of eBox, Sunlu, Sovol, Creality and Eibos dryers.
4. [My Tech Fun — Too hot for itself? Sunlu E2 filament dryer](https://www.youtube.com/watch?v=nLT9q8fQJyk). A high-temperature dryer test relevant to PA and PC drying.
5. [My Tech Fun — PolyDryer test, the filament dryer and storage box by Polymaker](https://www.youtube.com/watch?v=M8xwT6t1E4A). Drying performance and storage behaviour of the PolyDryer system.
6. [3DPrintSOS — I TESTED 9 FILAMENT DRYERS SO YOU CAN HAVE BETTER PRINTS!](https://www.youtube.com/watch?v=HEkJHZ2mo2Q). A broad practical comparison of nine popular filament dryers.
7. [Teaching Tech — Almost every filament dryer can be improved with this simple upgrade](https://www.youtube.com/watch?v=ZHFjeUGFvrk). Ventilation and feed-path improvements for inexpensive dryers.
8. [My Tech Fun — Creality Space Pi filament dryer test](https://www.youtube.com/watch?v=CBFXRCSNXfY). A measured test of the original Space Pi.
9. [My Tech Fun — Drying Nylon Filament Spools: How Long Does It Take?](https://www.youtube.com/watch?v=uGDTw7v55Bo). Gravimetric drying curves for nylon spools and a useful discussion of when the mass plateaus.
10. [My Tech Fun — Can we dry the nylon at 70°C? Surprising results!](https://www.youtube.com/watch?v=y3rMgwOCAi8). Tests whether a 70 °C dryer is sufficient for nylon and how much time the lower temperature adds.
11. [Thomas Sanladerer — Do you really need to dry your filament?](https://www.youtube.com/watch?v=5CFxT1q6dX8). A practical test of whether PLA and PETG need drying before every print.
12. [Lost In Tech — Drying and Desiccation - A deep dive into drying (and storing) 3D printing filament](https://www.youtube.com/watch?v=4xPvVKTSyaQ). A longer explanatory video on the physics and practical methods of drying.
13. [Eugene Tkachenko — Wet vs Dry Nylon Filament — Strength Test (Factory Dry Was 21% Weaker)](https://www.youtube.com/watch?v=KpuDAo6axpI). A direct strength comparison showing that factory-dry nylon can be weaker than conditioned nylon.
14. [The Next Layer — Do You ACTUALLY Need To Dry Your Filament? (Probably Not)](https://www.youtube.com/watch?v=OJJSG4dnaRA). A counterpoint that examines which materials and print types are most sensitive to moisture.
15. [Shayway — How to dry filament with a Bambu Lab Printer](https://www.youtube.com/watch?v=_3r9zQc9dmI). A community demonstration of heated-bed drying; this is not an official Bambu Lab channel.
