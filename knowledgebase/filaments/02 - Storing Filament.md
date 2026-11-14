---
title: "02 - Storing Filament"
tags:
  - 3d-printing
  - filaments
  - filament-storage
  - desiccant
  - humidity
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| Best cheap setup | A 20–30 L gasket-sealed polypropylene tote, 250–500 g of fresh orange silica gel and one digital hygrometer | PLA, PETG, PCTG, ABS and ASA, for weeks to months | The spool must already be dry. Desiccant maintains dryness; it does not dry a soaked spool in a useful time. |
| Single-spool box | A 4 L cereal-style container, 20–50 g of silica gel and a PTFE exit fitting | Materials in frequent use on a four-toolhead printer | Every filament exit is a leak path. Keep the PTFE run short and close the lid when the spool is not feeding. |
| Barrier bag | A metallised BoPET bag, heat-sealed, with 25–50 g of molecular sieve | PA, PPA, PVA, BVOH and PC, for months | Zips, seams and valves leak. Heat-sealing is much better than a zip alone. |
| Active cabinet | A heated or Peltier cabinet able to hold 15–25% RH | Large spool libraries and print farms | A cabinet that is switched off is only a box. Peltier units need their condensate emptied. |
| Monitoring | A working range of 10–30% RH, with ±2% RH being a good sensor | Checking that a box is holding its target | Many cheap sensors stall at 10% RH, which is exactly where the most moisture-sensitive materials need to be measured. |
| Storage temperature | 15–25 °C, as stable as possible | All materials | Warm storage raises the equilibrium moisture content at a given RH and shortens desiccant life. |

> [!abstract] Overview
> Drying a spool is only half of the job. Once a spool is dry, the storage container has to stop moisture from coming back. That depends on the seal, the barrier material, the amount and condition of the desiccant, the temperature, and how often the box is opened. This note explains what each part of a storage system actually does, gives realistic humidity targets by material, compares silica gel, molecular sieves, activated alumina, clay and calcium chloride, explains how to regenerate desiccants and how to check a hygrometer, and ends with a practical storage layout for the Snapmaker U1. The central warning is simple: desiccant is a buffer, not a dryer. A wet spool has to be dried before it is stored.

---

## 1. What a storage container actually has to do

A sealed box is not a magic dry environment. Three things determine how dry it stays.

1. **The seal controls exchange with the room.** Most leakage happens at the lid gasket, the latches, the filament exit and any valve, not through the plastic wall. A box that is opened every day will never hold a very low humidity, because each opening replaces dry air with room air.
2. **The wall material controls slow diffusion.** Polypropylene (PP) and polyethylene (PE) are good vapour barriers compared with polystyrene or thin PET, but they are not absolute barriers. Thick walls are helpful; thin lids and poor gaskets usually matter more.
3. **The desiccant controls the humidity inside the headspace.** It holds water that enters, up to its capacity. Once that capacity is used, the humidity rises. The spool itself is also a water reservoir, often a much larger one than the air in the box.

### 1.1 IP67 is not a moisture-barrier rating

Storage totes are often sold as IP67. That rating means the enclosure is dust-tight and survives temporary immersion in water. It says nothing about water vapour transmission. A box can keep out a spilled drink and still let water vapour through its gasket, latches and lid over weeks. Treat IP67 as a useful sign of a decent gasket and a well-fitting lid, not as a guarantee of low humidity.

### 1.2 Relative humidity depends on temperature

Relative humidity (RH) is the amount of water vapour present as a percentage of the maximum the air can hold at that temperature. Warm air holds more water vapour than cold air. If a sealed box reads 20% RH at 25 °C and then cools to 15 °C, the same water content gives roughly 37% RH. This matters in garages, sheds and unheated rooms: a cold box can read a higher RH without any new water having entered. Measure at a stable room temperature and compare readings taken at similar temperatures.

### 1.3 What the desiccant can and cannot do

A 1 kg spool of nylon that has absorbed 2% of its mass contains about 20 g of water. A 250 g charge of silica gel in a 25 L tote may hold roughly 20–25 g of water before it is spent, which is already much less than its capacity at high humidity. The numbers are approximate, but the conclusion is not: a passive desiccant pack cannot dry a soaked spool. It can remove a little surface moisture over weeks and it can keep a dry spool dry. Active drying with heat and airflow belongs in [[01 - Drying Filament]].

---

## 2. Target humidity by material

The values below are practical working ranges for sealed storage, not targets to chase. Lower is generally better, but below about 10% RH the measurement itself becomes unreliable with hobby instruments.

| Material group | Practical storage target | Notes |
| :--- | :--- | :--- |
| PLA, PLA+, silk PLA, matte and filled PLA | 20–30% RH for weeks; below 20% for months | PLA is one of the least demanding common materials. It can still become brittle after long exposure to damp air. |
| PETG and PCTG | 20–30% RH for weeks; below 20% for months | Both are moderately hygroscopic. Drying is usually needed only after long storage in humid conditions. |
| ABS and ASA | 20–30% RH for weeks; below 20% for months | These are less hygroscopic than nylon but still print better when dry. |
| TPU and TPE | Below 20%, ideally below 15% | Flexible filaments absorb moisture throughout the spool and are slow to dry. |
| PET, PC and PC blends | Below 15%, ideally below 10% | PC hydrolyses at printing temperature if it is damp, so drying before use matters. |
| PA, PA-CF, PA-GF and PPA | Below 10%, ideally below 5% | Nylon-family materials are among the most demanding common filaments. Store them in the smallest, tightest box you can. |
| PVA and BVOH | Below 10%, ideally below 5% | These are extremely hygroscopic and can become sticky or unusable. Store them cool as well as dry. |
| PVB | Below 20% | PVB is softened with isopropyl alcohol, but it still picks up atmospheric moisture during long storage. |
| PPS | Below 10% | PPS is marginal on a 300 °C machine, but it is still worth storing dry if you use it. |

> [!warning] A low reading may be the instrument's floor
> Most inexpensive hygrometers stop at 10% RH and some stop at 9% or 5%. A display showing 10% in a box with fresh molecular sieve may mean 10%, or it may mean anything below the sensor's lower limit. Sensors also lose accuracy near their floor, with errors of several percent RH. Do not treat a displayed 5% as proof that the box is at 5%. Use bead condition, regeneration records and the behaviour of the filament as corroboration.

The Bambu Lab filament drying guide gives a useful general figure: most filaments stay dry for only a few days in a 20% RH environment, and freshly dried filament can pick up enough moisture to affect printing within 2–12 hours at around 55% RH. That is why a sealed box matters immediately after drying, not only for long-term storage.

---

## 3. Storage hardware options

| Option | Typical capacity | Seal and barrier | Realistic performance | Best use |
| :--- | :--- | :--- | :--- | :--- |
| Gasket-sealed PP tote | 4–12 spools | Foam or silicone perimeter gasket, four to six latches, thick PP wall | Low exchange when the gasket is clean and the latches are tight. With fresh silica gel, 15–25% RH is achievable; a leaky or frequently opened tote may sit at 30–40%. | Bulk storage for PLA, PETG, ABS, ASA and TPU |
| Cereal-style single-spool box | 1 spool | Silicone lid seal, printed spool holder, PC4-M10 PTFE fitting | Low exchange, but the filament exit is a permanent leak. Good for a spool that is used every few days. | Frequent material changes and multi-toolhead work |
| Metallised BoPET barrier bag | 1 spool | Aluminised polyester film, heat-sealed or zipped | The film itself has low transmission, but it is not aluminium foil. Pinholes, seams, zips and valves dominate the leakage. Heat-sealing is far better than a zip. | Long-term storage of PA, PPA, PVA, BVOH and PC |
| Vacuum bag with one-way valve | 1 spool | PE/PA film with a rubber check valve | The valve and zip are the weak points. The bag collapses onto the spool, which reduces headspace and convective exchange, but it does not pull moisture out of the filament. | Short-to-medium storage when a fresh desiccant pack is included |
| Peltier or heated dry cabinet | 6–20 spools | Rigid cabinet with a door gasket and an active dehumidifier | A Peltier unit condenses water on a cold plate and needs emptying. A heated cabinet with a desiccant wheel regenerates the desiccant and circulates air. Both work only while powered and sealed. | Large libraries and print farms |
| Heated filament dryer used as a dry box | 2–4 spools | Lid gasket, heater, fan, desiccant compartment | Useful while the lid is closed and the desiccant is fresh. When the heater is off, the dryer is only as good as its seal. | Keeping the active spools ready to print |

### 3.1 Why a vacuum bag is not a drying chamber

Hand pumps and small electric pumps used with filament bags typically reduce the pressure by tens of kilopascals, not to a hard vacuum. At 20 °C the vapour pressure of water is about 2.34 kPa, and a cheap pump does not reach that. The bag therefore cannot boil water out of the filament. Its real benefits are removing most of the humid headspace air and holding the film against the spool so that air cannot circulate. A desiccant pack is still needed inside the bag.

### 3.2 Metallised bags, seams and valves

Mylar is a trade name for biaxially oriented polyethylene terephthalate (BoPET) film. A "Mylar" filament bag is normally BoPET with a thin aluminium coating, not a sheet of metal foil. The coating greatly reduces water vapour transmission through the film, but the bag is only as good as its closure. A zip, a seam or a valve can leak far more than the film itself. For archival storage of nylon or PVA, use a heat-sealed bag, leave as little air as possible inside, and accept that the seal is the limiting component.

---

## 4. Desiccants: what each one can actually do

A desiccant lowers the partial pressure of water vapour in the enclosed air. The equilibrium humidity it can hold depends on the material, the temperature, and how much water it has already taken up.

| Desiccant | Mechanism | Capacity | Practical RH floor in a hobby box | Behaviour when warm | Regeneration | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| White silica gel | Physical adsorption on amorphous silica | About 30–40% of its mass at 90–95% RH; roughly 8–10% at 20% RH | 15–25% RH with a good seal and enough fresh gel | Capacity falls sharply above about 40–50 °C | 100–120 °C for 2–3 hours, or 70–80 °C for 6–8 hours | It is inexpensive, safe and easy to recharge, and it is the default choice for general filaments. |
| Orange indicating silica gel | Silica gel plus an organic pH-indicator dye | Same as white silica gel | Same as white silica gel | Same as white silica gel | 100–115 °C for 2–3 hours; do not exceed about 125 °C | The colour change is a coarse indicator with hysteresis, not a measurement. |
| Blue indicating silica gel | Silica gel plus cobalt(II) chloride | Same as white silica gel | Same as white silica gel | Same as white silica gel | 100–120 °C | Avoid it. Cobalt(II) chloride is a carcinogen and reproductive toxicant, and cobalt compounds are classified by IARC as possibly carcinogenic to humans (Group 2B). |
| Molecular sieve 3A or 4A | Zeolite with uniform pores of about 0.3 or 0.4 nm | About 18–22% of its mass across a wide RH range | 2–5% RH in a tight box with a dry spool; below 2% is usually the sensor floor | Retains water strongly and still works at 60–80 °C | 200–250 °C for 2–4 hours | It is the best choice for PA, PVA, BVOH, PPA and PC. It costs more and needs a hot oven to regenerate. |
| Activated alumina | Porous aluminium oxide | About 15–20% at high RH, but only a few percent at 10% RH | Roughly 5–10% RH | Good at moderate temperature; capacity still falls as it warms | 175–220 °C for 3–4 hours | It is better than silica gel at low RH and more robust, but well behind molecular sieve. |
| Montmorillonite clay | Adsorption in layered clay | About 15–20% at high RH | 20–30% RH | Gives up water readily when warm | 80–100 °C for 2–4 hours, with limited useful cycles | It is cheap and common in sachets, but it is a poor choice for engineering filaments. |
| Calcium chloride | Deliquescent salt; dissolves into brine | Very high, often over 100% of its mass | About 30% RH, set by the saturated brine | Still absorbs when warm, but the brine becomes more corrosive | Not practically reusable at home | Its deliquescence point is about 29–32% RH at room temperature, so it cannot hold a box at 15–20% RH. Brine can creep, corrode hardware and ruin a spool. |

### 4.1 Silica gel

Silica gel is amorphous silicon dioxide with a vast internal pore surface. Water is held by weak physical forces, which is why it can be driven off with moderate heat and reused many times. Its adsorption isotherm is roughly linear: it holds a lot of water at high humidity and much less at low humidity. That is fine for general storage, where the aim is 20% RH rather than 5%.

The capacity also depends on temperature. Silica gel that is saturated at room temperature will release water if the box is warmed above about 40–50 °C. A sealed box left in a hot car or inside a heated printer enclosure can therefore become wetter, not drier, even though the relative humidity reading may fall temporarily as the air warms.

### 4.2 Molecular sieves

Type 3A and 4A zeolites have uniform pores of about 0.3 and 0.4 nm. A water molecule has a kinetic diameter of about 0.265 nm, so it enters the pores while many larger molecules are excluded. The isotherm is much flatter than silica gel's, which means the sieve still holds a useful amount of water at very low RH. That is why it is the right choice for nylon, PVA, BVOH and PC.

Two claims should be treated sceptically. First, vendor pages that promise "below 1% RH" are describing an idealised laboratory system, not a hobby box with a zip lid and a cheap hygrometer. A realistic result in a tight box with dry filament and enough sieve is 2–5% RH. Second, molecular sieve is not maintenance-free: it needs 200–250 °C to regenerate properly, which is beyond a normal filament dryer.

### 4.3 Activated alumina and clay

Activated alumina is a useful intermediate. It is harder and more thermally stable than silica gel, and it performs better at low RH, but its capacity at 10% RH is only a few percent by mass. It can hold a box around 5–10% RH, rather than the very low figures sometimes quoted. Clay sachets are cheap and fine for shipping, but they equilibrate around 20–30% RH and are not suitable for nylon or PVA.

### 4.4 Calcium chloride

Calcium chloride is a deliquescent salt. At room temperature it begins to take up enough water to dissolve itself at about 29–32% RH, and after that the saturated brine fixes the humidity near that value. It cannot guarantee 15–20% RH. It is also messy: the brine is corrosive to metal hardware and can wick into cardboard spools and filament. If it is used at all, it should be in a sealed inner container, never loose in a box with spools.

### 4.5 Why the colour of indicating silica gel is not a measurement

Orange indicating silica gel changes colour over a range of roughly 15–25% RH, and the change is broad and hysteretic. A bead that is still orange may be in equilibrium anywhere in that band, and a bead that has turned green may return to orange only after several hours in a regeneration oven. The dye is a rough visual guide to whether the bead bed is fresh, not a sensor. The colour responds to the local conditions around each bead, not to the average humidity of the box, so beads near a leaking lid can turn while the rest of the bed still looks orange. Use a hygrometer for the box and the colour only as a reminder to recharge.

---

## 5. Regenerating desiccants

> [!tip] Remove the dust before filling a container
> Shipping vibration produces fine silica or zeolite dust. Sift bulk beads through a fine kitchen strainer outdoors or over a bin before putting them into printed pods. The dust is abrasive and can find its way onto filament and into the extruder gears and hotend.

### 5.1 Silica gel

1. Spread the beads in a layer about 1–2 cm deep on a metal tray.
2. Heat at 100–120 °C for 2–3 hours. A food dehydrator at 70–80 °C needs 6–8 hours.
3. Let the beads cool in a sealed container. Hot beads will pick up moisture from the room while they cool.
4. Do not exceed about 125 °C with orange indicating gel, because the dye can decompose and turn brown or black.

A domestic oven with a fan is usually more even than a toaster oven. Check the temperature with a separate oven thermometer, because the dial is often inaccurate by 10–20 °C.

### 5.2 Molecular sieve

1. Spread the beads in a thin layer on a stainless steel tray.
2. Heat at 200–250 °C for 2.5–4 hours in a convection oven or a dedicated toaster oven.
3. Transfer the hot beads into a pre-warmed glass canning jar using heat-resistant gloves and a metal funnel, then seal it and let it cool.
4. Do not use a filament dryer for this. Its maximum temperature is far too low to regenerate 3A or 4A sieve.

> [!danger] Hot glass and hot beads
> A sealed jar of hot beads can pull a vacuum as it cools. Use a canning jar that is designed to take it, and do not cool it under cold water. Keep the jar away from children and pets while it is hot.

### 5.3 Microwave regeneration

Silica gel can be regenerated in a microwave on defrost power, but the method is uneven and easy to get wrong. Use a wide borosilicate dish, run in 2–3 minute intervals at 20–30% power, stir between intervals, and let steam escape. Never run it at full power for a long period. Internal steam pressure can crack the beads, scorch the dye and damage the dish. Molecular sieve should not be regenerated in a microwave because it needs temperatures a domestic microwave cannot deliver evenly.

---

## 6. Measuring humidity and checking the hygrometer

### 6.1 What the cheap sensors do

Many inexpensive rectangular LCD hygrometers use a resistive or basic capacitive sensor. They often stop at 10% RH, and their error below 25% RH can be ±5–12% RH. That is a poor match for a filament box, because the most sensitive materials are stored below 20% RH. A cheap meter is still useful for spotting a failed seal or a saturated desiccant, but it cannot prove that a box is at 5%.

Better instruments use a calibrated capacitive MEMS sensor such as the Sensirion SHT3x or SHT4x family, with a typical accuracy of about ±2% RH. Devices such as the Xiaomi Mijia, SwitchBot Meter and Govee meters are commonly used, but the sensor inside matters more than the brand on the case. Even a good sensor is only accurate to a few percent RH near its lower limit.

### 6.2 The saturated salt check

A saturated salt solution holds a known relative humidity in a small sealed space. This is the basis of ASTM E104 and it is easy to reproduce at home.

- **Sodium chloride (NaCl), about 75% RH at 20–25 °C.** Mix pure non-iodised salt with a few drops of distilled water until it looks like wet snow. There should be no standing water and no dry crust. Put the slurry in a bottle cap, seal it in a container with the hygrometer, and leave it for at least 12 hours, preferably 24. A meter reading near 75% is behaving reasonably at the top of its range.
- **Magnesium chloride (MgCl₂), about 33% RH at 20–25 °C.** The hexahydrate is used in the same way. This point is much closer to a dry box and is therefore more useful, but it still does not prove accuracy at 5–10% RH.

A two-point check is not a calibration certificate. It can reveal a meter that is wildly wrong, and it can detect drift after a year of use, but it cannot make a cheap sensor reliable at the bottom of its range.

### 6.3 A practical reading routine

1. Put the hygrometer in the box away from direct contact with the desiccant, so that it measures the air rather than the bead surface.
2. Let it settle for several hours after closing the box.
3. Record the reading at a similar room temperature each time.
4. If the reading climbs steadily over a few days, suspect the gasket, a latch, the filament exit or a saturated desiccant, in that order.
5. If the reading stays high after fresh desiccant, suspect a wet spool inside the box.

---

## 7. Is the cheap setup good enough?

> [!success] The defensible "best cheap" recommendation
> A gasket-sealed polypropylene tote, a fresh charge of orange silica gel and a digital hygrometer that has been checked against a salt reference will keep PLA, PETG, PCTG, ABS and ASA dry for weeks to months. It is the best value in filament storage, and it is enough for most of the common spools a Snapmaker U1 will use.
>
> It is not a universal answer. For PA, PPA, PVA, BVOH and PC, a passive tote with silica gel is a maintenance container, not a guarantee. Use molecular sieve in a small, tight box, or an active dry cabinet, and verify the result rather than trusting the label on the desiccant.

The recommendation is scientifically defensible for three reasons. First, the dominant leakage path in a plastic tote is the lid seal, so a good gasket and tight latches buy more than a thicker wall. Second, fresh silica gel holds the box in the 15–25% RH range that suits the common materials, provided the box is not opened constantly. Third, a hygrometer turns the system from guesswork into something that can be checked and corrected.

The caveats matter just as much. Passive desiccant cannot rescue a soaked spool, because the water is inside the polymer and the transfer rate is slow. A tote that is opened every day will not hold a low RH. A gasket that has dust or a warped lid will leak. A cheap hygrometer that reads 10% may be at its floor. A box stored in a hot garage will perform worse than the same box in a cool room, even if the display looks acceptable.

A sensible bill of materials is a 20–30 L gasket tote, 250–500 g of reusable silica gel in breathable containers, a small digital hygrometer, and a mesh strainer for dust. Prices vary by country and change often, so treat any figure as approximate and check it before buying.

---

## 8. Warnings that are easy to get wrong

> [!warning] A 60 °C chamber is not a drying chamber
> Heating a chamber lowers the relative humidity of the air, but it does not remove water from the filament or from the room. The same water vapour is still present, and when the spool cools it reabsorbs moisture. At 60 °C, silica gel also loses much of its capacity, so a warm chamber with a desiccant pack is not a substitute for a cool, sealed box. A chamber heater, including the BIQU Panda Breath at its 60 °C maximum, is for printing, not for drying or storage.

> [!warning] Do not store PVA or BVOH warm
> Polyvinyl alcohol and its copolymers are extremely hygroscopic and soften as they take up water. Warm storage raises the equilibrium moisture content at a given RH, and a warm spool can become sticky, block in the feeder and weld itself to neighbouring loops. Store PVA and BVOH cool, preferably below 25 °C, in a small heat-sealed bag with molecular sieve, and dry them again before use if they have been out for long.

Other points worth remembering:

- **Do not dry filament in a storage box.** A sealed box traps the water that the spool releases. Drying needs heat, airflow and a way for the moisture to leave.
- **Do not put a wet spool in with fresh desiccant and expect the box to fix it.** Dry first, then store.
- **Do not use calcium chloride loose in a box.** The brine is corrosive and can wick into spools and hardware.
- **Do not inhale desiccant dust.** Silica and zeolite dust are nuisance dusts, and the indicator dyes are not food-safe.
- **Keep desiccant away from children and pets.** Silica gel beads look like sweets, and the sachets are not toys.
- **Do not store filament in a hot car or a shed with large temperature swings.** The daily cycle drives moisture into and out of the filament and can warp cardboard spools.

---

## 9. A storage layout for the Snapmaker U1

The Snapmaker U1 has four independent toolheads, four spool holders and two filament feeders, one on the left for toolheads 1–2 and one on the right for toolheads 3–4. Each feeder serves two toolheads, so the storage plan should match the way the feeders are actually loaded rather than assuming that each spool has its own feeder.

### 9.1 Active spools

Keep the spools that are currently loaded in a sealed dryer or a gasket box next to the printer. A four-spool dryer with a lid gasket, a heater and a desiccant compartment can act as the active dry box when the lid is closed, the heater is off and a fresh desiccant pod is inside. While the heater is running, the unit is a dryer, not a storage box.

Print desiccant pods in a material that can take the temperature of their location. PETG, ABS, ASA or PC are suitable for a warm dryer; PLA pods can soften in a 60 °C chamber. Keep the pods out of direct contact with the filament path, and make sure the beads cannot spill into the feeder.

### 9.2 Standby library

Store standby spools in gasket totes by sensitivity rather than by colour. A useful split is:

- **General box:** This box holds PLA, silk and filled PLA, PETG, PCTG, ABS and ASA, with 250–500 g of silica gel.
- **Engineering box:** This box holds PA, PA-CF, PPA, PC and PET, with molecular sieve and a tight seal.
- **Flexible box:** This box holds TPU and TPE at below 20% RH, with silica gel and a particularly tight seal.
- **Soluble support box:** This box holds PVA and BVOH in individual heat-sealed bags with molecular sieve, stored cool.

The U1 spool holder accepts spools with an inner diameter of 52–60 mm, a width of up to 70 mm and a mass of up to 1 kg. Check that any cereal box, printed adapter or aftermarket holder can take those dimensions before building a storage system around it. Snapmaker's RFID recognition works only with Snapmaker filament, so third-party spools need their material and drying history recorded another way, for example on a label inside the box lid.

### 9.3 Abrasive and filled materials

Carbon-fibre and glass-fibre filaments are both hygroscopic and abrasive. Store them in the engineering box, and keep a separate note of which spool has been dried and when. Hardened-steel hotends are sold in packs of four of one diameter, and different diameters cannot be used in the same print, so group abrasive spools by the nozzle size you plan to fit. The U1's stock hotends are stainless steel; abrasive fills will wear them faster.

### 9.4 The chamber is not a cupboard

The official Top Cover gives passive chamber heating up to about 50 °C for printing, and it helps with ABS and ASA. It does not turn the printer into a dry box. Leaving spools in the chamber overnight warms them, and a warm spool takes up moisture faster than a cool one. Remove spools after printing, or keep them in a sealed box that is independent of the chamber.

A chamber heater such as the BIQU Panda Breath is a printing accessory, not a storage device. On the U1 it requires community firmware and full-board motherboard cooling, and its 60 °C maximum is still not a drying temperature. Do not plan filament storage around it.

---

## 10. Related notes

- [[00 - Filament Master Index]]
- [[01 - Drying Filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)]]
- [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)]]
- [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)]]
- [[17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]

---

## 11. Sources

1. [FilamentSpecs, "Desiccant for Filament Storage: Silica Gel vs Molecular Sieve"](https://filamentspecs.com/desiccant-for-filament-storage)
2. [NEXT 3DP, "Why Molecular Sieve Is the Best Desiccant for 3D Printing Filament Storage"](https://www.next3dp.com/blog/blog-molecular-sieve). This is a vendor article; its "below 1% RH" claim is marketing rather than a measured hobby-box result.
3. [Maker's Pet, "Best Desiccant for 3D Printing Filament — Molecular Sieve"](https://makerspet.com/blog/3d-printing-filament-molecular-sieve-desiccant)
4. [Bambu Lab Wiki, "Filament Guide: Printer, Nozzle, AMS, Build Plate, Glue Compatibility and Required Parameters"](https://wiki.bambulab.com/en/general/filament-guide-material-table)
5. [Bambu Lab Wiki, "Support Filament Usage Guide"](https://wiki.bambulab.com/en/filament/support)
6. [Bambu Lab Wiki, "TPU Printing Guide"](https://wiki.bambulab.com/en/knowledge-sharing/tpu-printing-guide)
7. [Bambu Lab Wiki, "Filament Drying Recommendations"](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)
8. [Polymaker, PolyDryer User Manual (PDF)](https://polymaker.com/wp-content/uploads/Polydryer_User-Manual-1117_20240820_compressed.pdf)
9. [Prusa Knowledge Base, "Filament Material Guide"](https://help.prusa3d.com/filament-material-guide)
10. [Snapmaker Wiki, "U1" FAQ](https://wiki.snapmaker.com/en/FAQ/u1)
11. [Bambu Lab Wiki, "Beginner's Guide to Filaments Usage"](https://wiki.bambulab.com/en/filament/beginner)
12. [Wikipedia, "Desiccant"](https://en.wikipedia.org/wiki/Desiccant)
13. [Wikipedia, "Silica gel"](https://en.wikipedia.org/wiki/Silica_gel)
14. [ASTM E104, "Standard Practice for Maintaining Constant Relative Humidity by Means of Aqueous Solutions"](https://www.astm.org/e0104-20.html)

---

## 12. Videos

1. [CNC Kitchen, "Solid-State Dehumidifier: The Ultimate Filament Dry Box"](https://www.youtube.com/watch?v=n7EWexck8NE)
2. [The Next Layer, "This Will REVOLUTIONIZE 3D Printer Filament Storage!"](https://www.youtube.com/watch?v=8kIDLIXILKo). This video is sponsored by Snapmaker.
3. [The Next Layer, "I Was SICK of Drying Filament, so I Built THIS Instead."](https://www.youtube.com/watch?v=Ata0ABHStYI)
4. [Dirt-E-Bikes, "Why Silica Gel Is a Game-Changer for 3D Printing – All You Need to Know"](https://www.youtube.com/watch?v=Ue3A35s2yeQ)
5. [Main Cave, "13 Desiccant Tips Every 3D Printer Owner Need"](https://www.youtube.com/watch?v=DQkoN_xSFDY)
6. [My Tech Fun, "Sunlu FilaDC i10 Review: 10 DRY Spools Ready When You Need Them"](https://www.youtube.com/watch?v=tVgNQ6Sv1zU)
7. [My Tech Fun, "Sunlu SP2 Review: 2-in-1 Filament Dryer and Storage Box"](https://www.youtube.com/watch?v=rn5xc69DmwY)
8. [BV3D: Bryan Vines, "I REPLACED DESICCANT in my AMS for the LAST TIME!"](https://www.youtube.com/watch?v=2gNhkuYW3aw)
9. [Dan Designs, "Super Simple Way to Keep Your 3D Printer Filament Bone Dry"](https://www.youtube.com/watch?v=ZSkp4FvWTdc)
10. [Made with Layers (Thomas Sanladerer), "Do you really need to dry your filament?"](https://www.youtube.com/watch?v=5CFxT1q6dX8)
11. [The Next Layer, "This Product Solved the 2 BIGGEST Problems in 3D Printing!"](https://www.youtube.com/watch?v=Cr2kl67jOyI). This is a sponsored review of the Sunlu i10 ten-spool dry box.
