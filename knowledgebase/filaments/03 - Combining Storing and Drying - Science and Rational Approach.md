---
title: "03 - Combining Storing and Drying - Science and Rational Approach"
tags:
  - 3d-printing
  - filaments
  - filament-drying
  - filament-storage
  - desiccant
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| Drying a spool | Most printable materials need 40–90 °C for 2–16 hours; PPA-CF needs up to 140 °C. An 8-hour run on a 300–350 W dryer uses at most about 2.4–2.8 kWh. | Removing water that is already inside the filament | Heat is the active ingredient. A desiccant box cannot do this at a useful rate. |
| Storing a dried spool | A sealed box with fresh desiccant typically settles around 20–30% relative humidity with silica gel, and lower with molecular sieve. | Keeping a dry spool dry between prints | There is no fixed storage time. The seal, the desiccant, the spool and the room all matter. |
| Printing hygroscopic material | Dry first, then feed from a sealed box. Heated feeding is optional and only for materials that tolerate it. | Long prints in a humid room | If you heat the feed, keep PVA near 45–55 °C and soft TPU near 55–65 °C. PLA and PETG should not be fed from a hot dryer. |
| Snapmaker U1 hardware | Two filament feeders serving four toolheads, a 300 °C nozzle, a 100 °C bed and a 60 °C chamber maximum with the Panda Breath. | Multi-material printing with dry filament | Direct feed from a dryer needs splitters or adapters and adds drag. The chamber heater needs community firmware and motherboard cooling. |
| Cost order | One dryer plus sealed boxes costs roughly $130–300. A four-spool dry-feeding setup costs roughly $250–500. A heated chamber costs roughly $150–250. | Deciding what to buy first | Buy the dryer and boxes first. The other two are separate purchases with different purposes. |

> [!abstract] Overview
> A filament dryer and a dry box do different jobs. The dryer uses heat and moving air to pull water out of the polymer. The dry box uses a seal and a desiccant to keep the surrounding air dry. Passive desiccant can preserve a dry spool for a long time, but it cannot rehabilitate a wet spool at a useful rate, because water diffusion through a 1.75 mm strand is slow at room temperature. This note explains the physics behind that difference, gives material-specific drying and storage temperatures for the Snapmaker U1, corrects several common claims about heated feeding and chamber heating, and sets out an honest order for spending money.

## The short answer

Dry the filament first, then store it dry. A dryer is the tool that removes moisture from a wet spool. A sealed box with desiccant is the tool that stops a dry spool from becoming wet again. Neither one replaces the other.

This has a practical consequence for buying decisions. One dryer and two or three sealed boxes with fresh desiccant cover most users. A four-spool dry-feeding setup is a convenience for multi-material printing, and a heated chamber is a tool for warping and layer adhesion. They are not upgrades to the drying process, and they should not be bought before the basic dryer and storage are in place.

Not every material needs the same treatment. PLA is forgiving. PETG is moderately hygroscopic, and TPU ranges from moderate to high. PVA, PA, PC and some high-temperature composites are demanding. Drying temperatures that are correct for PA will deform a PLA spool, and a heated feeder that helps PA will damage PVA or soft TPU. The material table later in this note gives usable ranges.

## Why heat dries filament and desiccant does not

### Diffusion inside a filament strand

Water moves through a polymer by diffusion. For a cylindrical strand, the water concentration $C(r,t)$ is described by Fick's second law in radial coordinates:

$$\frac{\partial C}{\partial t} = D(T)\left(\frac{\partial^2 C}{\partial r^2} + \frac{1}{r}\frac{\partial C}{\partial r}\right).$$

The diffusion coefficient $D(T)$ follows an Arrhenius relationship:

$$D(T) = D_0 \exp\left(-\frac{E_a}{R T}\right).$$

Here $D_0$ is a pre-exponential factor, $E_a$ is the activation energy for diffusion, $R$ is the gas constant and $T$ is absolute temperature. The activation energy is not a universal constant. It depends on the polymer and on how much water is already present, but for many polar polymers it is in the range of a few tens of kilojoules per mole. That is enough for a change from 20 °C to 70 °C to raise $D$ by roughly an order of magnitude or more.

The characteristic time for water to leave the core scales as

$$\tau \propto \frac{R_{\text{effective}}^2}{D(T)}.$$

$R_{\text{effective}}$ is not just the 0.875 mm radius of the strand. It also includes the longer, tortuous path through the tightly wound layers of a spool. This is why a single strand can lose moisture in minutes while a full spool takes hours.

Heat helps in two ways. It raises $D$, so water moves faster through the polymer. It also lowers the equilibrium moisture content at the surface, which makes the concentration gradient between the core and the surface steeper. Moving dry air then carries the released vapor away. A dryer supplies all three parts of that process: heat, a dry boundary layer and ventilation.

A desiccant box supplies only the dry boundary layer. It lowers the water vapor pressure around the spool, but it does so at room temperature, where $D$ is small. The core stays wet for a long time, and the desiccant has a finite capacity. Once the desiccant is saturated, it stops absorbing. If it is later warmed, it can release some of the water back into the box.

A useful rule of thumb is that a 10 °C rise roughly doubles the diffusion coefficient. The exact factor depends on the activation energy, so treat this as an order-of-magnitude argument rather than a prediction. It explains why a 70–80 °C dryer can dry a spool overnight while a 20 °C desiccant box may take weeks or months, if it works at all.

### What desiccant can and cannot do

Desiccant is good at one job: keeping a sealed volume of air dry. It can also dry the outermost skin of a spool, which may reduce surface stringing for a short print. That is not the same as drying the core.

Three limits matter.

- The diffusion coefficient at room temperature is small, so water in the core moves slowly to the surface.
- The desiccant has a finite capacity. A small packet cannot absorb the water from a wet 1 kg spool.
- A sealed box is never perfectly sealed. Water vapor passes through the lid gasket, the wall material and any filament exit port.

This is why the central claim of this note is not a marketing slogan but a statement about rates. A dryer gets filament dry. A dry box keeps filament dry. Passive desiccant cannot rehabilitate a wet spool at a useful rate.

A simple test makes the point. Put a wet spool in a box with fresh desiccant and a hygrometer. The hygrometer may fall quickly at first, because the small volume of air in the box is easy to dry. The spool itself will still print wet the next morning. The air is dry; the polymer is not.

### Why a dry box still matters

Once a spool is dry, exposure to room air begins to undo the work. The surface layer rehydrates first, and the surface layer is the part that matters most for printing. Steam bubbles, stringing and rough extrusion begin at the surface before the whole spool has returned to its equilibrium moisture content.

The rate depends on the polymer and the room. PVA and PA6 are fast. TPU can be fast as well. PC is moderate. PLA is slower. In a room at 50–60% relative humidity, a day on an open spool holder can be enough to cause visible problems with PVA or PA6. PETG may take longer, but it is not immune.

A sealed box buys time. It also avoids the cost and handling of repeated drying cycles. The box does not need to be expensive. A gasketed tote or a cereal container with a silicone seal, a PTFE exit and a small hygrometer is enough for most spools.

The IP rating is often misunderstood. IP67 describes resistance to dust and short immersion in water. It says nothing about water vapor transmission through the lid seal, the wall material or the filament port. A box can be IP67 and still let enough water vapor through to raise the internal humidity over weeks. The useful test is the hygrometer reading after the box has been closed for a few hours, not the IP number on the label.

For the same reason, there is no honest fixed storage time. A well-sealed box with fresh desiccant, a dry spool and a cool room can hold a low humidity for weeks or months. A leaky box in a humid room, opened twice a day, can fail in days. Check the indicator and the hygrometer instead of trusting a calendar.

## What a new spool is really like

Many filaments are cooled in a water bath after extrusion. The strand is pulled through the bath to solidify it and to control its diameter, and air knives remove surface water before the filament is wound onto the spool. That does not guarantee that the polymer is dry. The polymer can retain some moisture, and the cardboard core can hold more.

The vacuum bag is a packaging method, not a certificate. A small desiccant packet in a bag with a 1 kg spool has very little capacity compared with the spool and the core. The bag can contain humid air, and the seal can be imperfect. None of this means that every new spool is wet. It means that a sealed bag is not proof of dryness.

The practical rule is to judge by behavior and by material. PLA usually prints well out of the bag. PETG often benefits from drying, especially if it strings or pits. TPU can arrive wet enough to print poorly. PA, PVA and BVOH are the most likely to arrive with enough moisture to cause popping, foaming or weak layers. If a new spool behaves badly, dry it before changing slicer settings.

Do not assume that a factory vacuum bag replaces a dryer. It does not. It only slows the exchange of moisture with the room before the bag is opened.

## The Snapmaker U1's real hardware

The U1 is a CoreXY toolchanger with four independent toolheads, a 270 × 270 × 270 mm build volume, a maximum nozzle temperature of 300 °C, a maximum bed temperature of 100 °C and no stock chamber heater. Its maximum toolhead speed is 500 mm/s with 20,000 mm/s² acceleration.

The filament path is the part most often described incorrectly. The U1 has two filament feeders, not four. The left feeder serves toolheads 1 and 2, and the right feeder serves toolheads 3 and 4. There are four spool holders. Automatic loading, backup mode and RFID recognition are stock features, but RFID works only with supported Snapmaker filament.

This matters for anyone connecting an external dryer. A four-spool dryer with four outputs cannot plug into four separate feeders, because there are only two feeders. The four dryer outputs have to be adapted to the U1's two feeder assemblies, usually with splitters or adapters. Every extra connector and bend adds drag. The U1's auto-loading is designed around the stock path, and a long or restrictive external path can cause load failures, especially with TPU. Test the path with a short print before committing to a long one.

Snapmaker's SnapDryer bundle is a PolyDryer-based dock with four storage boxes and a filament tube. RFID is not supported when printing from the SnapDryer, so the material must be entered manually. That is a reasonable starting point if you want one purchase, but it is not required.

The stock hotends are 0.4 mm stainless steel. The heat sink, heat break, heater block and nozzle are an interference-fitted unit, so the nozzle cannot be replaced on its own. The official hardened-steel hotends come in 0.2, 0.4, 0.6 and 0.8 mm and are sold as four-packs of one diameter. Snapmaker says different diameters cannot be used in the same print. An OrcaSlicer 2.2+ workaround with percentage line widths and a shared layer height has been reported working for 0.4 mm and 0.6 mm, but it is not officially supported. For abrasive carbon-fiber or glass-fiber filament, use a hardened 0.4 or 0.6 mm hotend. A 0.2 mm hotend is not appropriate for filled material.

The official Top Cover provides passive chamber heating up to about 50 °C, plus HEPA and activated-carbon filtration. It is not a chamber heater. The BIQU Panda Breath is a 300 W PTC heater with HEPA and carbon filtration and a maximum chamber temperature of 60 °C. It draws about 330–350 W at the wall.

The Panda Breath is not controlled by stock U1 firmware. It requires community firmware: paxx12's Snapmaker U1 Extended Firmware with Panda Breath WebSocket mode, or DragonBreath, which the extended-firmware project now recommends. Before using a chamber heater, install a full-board motherboard cooler. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures. A 6015 fan that cools only the stepper drivers does not cover the RK3562 and is not sufficient on its own. The firmware documentation says additional active cooling on the motherboard is required. Thermal damage from elevated chamber temperatures is unlikely to be covered by warranty.

A chamber heater is for reducing warping and improving layer adhesion in materials such as ABS, ASA, PC and PA. It is not a filament dryer. At 60 °C it is below the drying temperature of PA, PC and PPA, and the chamber is not designed to remove moisture. Do not put spools in the printer chamber to dry them.

The toolchanger does have one useful multi-material property. Because each material has its own melt zone, chemically incompatible pairs such as PLA and PETG can be used as zero-gap support interfaces without cross-contamination. A prime tower or a wipe sequence is still required. The toolchanger prevents cross-contamination between materials, but it does not eliminate ooze.

## A material-specific drying and storage workflow

The table below gives practical ranges for the U1. The temperatures are dryer settings, not nozzle temperatures. Where manufacturers disagree, the table gives a range and cites the source in the text below. Start at the lower end for a valuable spool, and use the longer time for a spool that has been open for weeks.

| Material group | Dry before printing | Feed during printing | Storage target |
| :--- | :--- | :--- | :--- |
| PLA, PLA+, silk, matte and wood PLA | 40–55 °C for 4–6 hours, using 40–45 °C for silk, PLA+ and other modified blends. Prusa lists 45 °C for 6 hours for PLA. PrintPal suggests 40–50 °C for standard PLA and under 45 °C for modified PLA. | Feed from a sealed box, or from the stock holder if the room is below about 50% relative humidity. Do not feed from a heated dryer. | About 20–30% relative humidity with silica gel. |
| PETG, PETG-CF and PCTG | 55–65 °C for 4–8 hours. Prusa lists 55 °C for 6 hours for PETG; PrintPal lists 60–70 °C for 4–6 hours. | Feed from a sealed box. A warm feed at 55–60 °C is tolerable but not necessary, and it should stay below the glass transition. | About 20–30% relative humidity with silica gel, or lower with molecular sieve for long storage. |
| ABS and ASA | 65–80 °C for 2–4 hours. Prusa lists 80 °C for 4 hours for ASA; PrintPal lists 65–80 °C for 2–4 hours. | Feed from a sealed box. These materials tolerate warm feed better than PLA, but a heated feed is not required. | About 20–30% relative humidity with silica gel. |
| TPU 95A | 55–60 °C for 4–8 hours. Prusa lists 60 °C for 4–6 hours; PrintPal lists 55 °C for 8 hours. | Feed from a sealed box, unheated, with the shortest and straightest path. Heat and drag both stretch TPU. | About 20% relative humidity or lower. Molecular sieve is useful for long storage. |
| Soft TPU 85A and 90A | 55–65 °C for 6–10 hours, but keep to the low end (about 55–60 °C), because many soft TPUs deform above about 60 °C. | Feed from a sealed box, unheated, with minimal drag. Do not feed from a heated dryer. | About 20% relative humidity or lower, with molecular sieve. |
| PVA and BVOH | 45–55 °C for 6–12 hours. Do not exceed 55 °C. PrintPal lists 45 °C for 4–6 hours for PVA. | Feed from a sealed box, unheated. PVA softens and sticks to itself when warm. | Below about 10–15% relative humidity with molecular sieve, and reseal immediately after use. |
| PA6, PA12 and PA-CF | 70–90 °C for 8–16 hours, and longer for a saturated PA6 spool. CNC Kitchen dried CF-PA6 and CF-PA12 at 80 °C for 20 hours before testing. Prusa lists 90 °C for 6 hours for PA11-CF; Bambu lists 80 °C for 8–12 hours for PA6-CF. | Feed from a sealed box, or from a heated dry-feeder at 70–80 °C for long prints. | Below about 10–15% relative humidity with molecular sieve. PA6 is more demanding than PA12. |
| PC and PC blends | 70–90 °C for 5–12 hours. Prusa lists 85 °C for 5 hours for PC Blend and 90 °C for 4 hours for PC-CF; PrintPal lists 80 °C for 6–8 hours. | Feed from a sealed box, or from a heated dry-feeder at 70–80 °C. | Below about 10–15% relative humidity with molecular sieve. Avoid unnecessary cycles, because repeated heating and cooling can embrittle PC filament. |
| PET and PET-CF | 65–80 °C for 6–12 hours. Bambu lists 80 °C for 8–12 hours for PET-CF. | Feed from a sealed box. A heated feed is optional. | About 20% relative humidity or lower, with molecular sieve for long storage. |
| PPA-CF and PPA-GF | 100–140 °C for 8–12 hours is the manufacturer recommendation. If the dryer cannot reach that, 80 °C for 12 hours is a compromise, not a full equivalent. | Feed from a heated dry-feeder at 70–80 °C. | Below about 10–15% relative humidity with molecular sieve. A very wet spool may not be fully recoverable in an 80 °C dryer. |

Several points need emphasis.

The PLA range sits between the lowest and highest published recommendations. Some modified PLAs soften at low temperatures, and PrintPal advises staying under 45 °C for silk, PLA+ and high-speed PLA. A 45–55 °C setting is safe for standard PLA but may be too warm for a particularly soft blend. When in doubt, use the lower end and a longer time.

The PA range is wide because PA6 and PA12 behave differently. PA6 can absorb up to about 3% water by weight, while PA12 absorbs much less, around 0.5%. CNC Kitchen's tests show that moisture-conditioned CF-PA6 keeps only about 56% of its dry strength and about a third of its stiffness, while CF-PA12 loses much less. PA6 therefore deserves the longer end of the drying range and a tighter storage box.

The PPA range is included to be honest about a limit. Bambu's own table recommends 100–140 °C for PPA-CF, which is beyond most consumer filament dryers. The U1 can print PPA-CF with the Top Cover and a hardened hotend, but a saturated spool may never be fully dried in an 80 °C dryer. If you use PPA-CF, buy it from a supplier that ships it dry and store it in a sealed box with molecular sieve from the first day.

PPS is a separate case. PPS-CF is normally printed at 320–340 °C, and at the U1's 300 °C limit the layer strength is lower. Bambu's drying recommendation for PPS-CF is 80 °C for 8–12 hours, which is achievable, but the printing temperature is the real limit. Treat PPS as a marginal material on this machine rather than a normal part of the workflow. Its low moisture absorption also means it does not belong in a list of highly hygroscopic materials that need special drying attention.

PEEK and PEI are outside the machine's capability. They need nozzle temperatures of about 340–400 °C, and their drying recommendations are around 120–150 °C. The U1's 300 °C hotend cannot print them, and no storage protocol changes that. See [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)|PEEK and PEI]] for the material details.

HIPS is not on Snapmaker's official U1 material list. It dries like ABS, at about 60–80 °C for 2–4 hours, and stores like ABS, but it should be treated as an unsupported material.

## Heated feeding is not one temperature

A dryer that reaches 70–85 °C is useful for PA, PPA and PC, but running every material at that temperature is wrong. The correct feed temperature depends on the polymer, and some materials should not be fed warm at all.

PLA's glass transition is about 60 °C. A 70–85 °C feed is above that, so the filament softens, ovalizes and creeps under the feeder tension. It can grind, stretch or jam. PETG's glass transition is around 80 °C, so a 70–85 °C feed is at or above its softening range for practical purposes. Neither material should be fed from a hot dryer.

PVA's recommended drying range is about 45–55 °C, and soft TPU's is about 55–65 °C. Above those ranges, PVA softens and sticks to itself, and TPU stretches and deforms. A 70–85 °C feeder will damage both.

PA, PPA and PC are the materials where a heated feed is commonly used, because their useful drying ranges are higher. Even there, check for softening and feeder tension, because PA is above its glass transition at 70–80 °C and can still creep under high tension. A heated feed is optional. A sealed box with fresh desiccant is often enough for a print of a few hours. A heated dry-feeder adds margin for long prints in a humid room, but it is not mandatory.

The practical rule is simple. Dry the spool at the temperature in the table. Then feed it from a sealed box at room temperature unless the material is PA, PPA or PC and the print is long enough to justify a heated feeder. If you do use heat, set it to the lowest value that keeps the filament dry, not the highest value the dryer can reach.

## Step by step: one spool from unboxing to storage

1. Label the spool with the material, the date it was opened and any drying history. A piece of masking tape on the spool is enough.
2. Decide whether it needs drying. New PA, PVA, BVOH and TPU often do. New PLA usually does not. PETG is somewhere in between. If the spool pops, hisses, strings badly or prints with bubbles, dry it.
3. Dry it in a dedicated filament dryer at the temperature in the table. Do not use the printer chamber, the heated bed or an oven that cannot hold a low temperature accurately.
4. Let the spool cool in the dryer to a safe handling temperature, then move it directly into a sealed box with fresh desiccant. Do not leave it on the bench to cool in room air.
5. Close the box, wait a few hours, and read the hygrometer. A silica box should settle around 20–30% relative humidity. A molecular-sieve box should be lower.
6. Before printing, load from the sealed box. For PA, PPA or PC on a long print, use a heated dry-feeder at 70–80 °C if you have one. For PVA, TPU, PLA or PETG, keep the feed unheated and the path short.
7. After printing, unload the filament and return it to the box immediately. Do not leave it on the spool holder overnight in a humid room.
8. Re-dry only when the material's behavior or the storage history calls for it. Do not bake on a calendar.

## Measuring dryness without fooling yourself

A 0.1 g scale is a useful tool, but it is not a moisture meter. It weighs the whole spool, including the cardboard core, the plastic hub and any residual filament. The core can gain or lose several grams as the room humidity changes, and the scale's repeatability is often only a few tenths of a gram even when it displays 0.1 g.

That does not make weighing useless. It means the number needs to be interpreted as a trend.

- Weigh the same spool on the same scale before and after drying, in the same room, with the spool at room temperature.
- A loss of several grams on a 1 kg PA spool is meaningful. A loss of 0.1 g is not.
- A change of less than about 0.2–0.3 g over two hours is a rough sign that the spool has stopped losing water. It is not proof, because the core and the scale can produce changes of that size on their own.
- Use the weight trend together with the print behavior. If the spool still pops, it is not dry, even if the scale has plateaued.

A cheap hygrometer has similar limits. Many inexpensive units stop displaying below 10% relative humidity, and their accuracy below 20% is poor. If you need to distinguish 5% from 15%, use a sensor rated for low humidity and calibrate it with a saturated salt reference. A saturated sodium chloride slurry gives about 75% relative humidity at room temperature. A saturated magnesium chloride slurry gives about 33%, which is closer to the range a dry box actually uses.

The most reliable evidence is a combination of three things: the drying history, the weight trend and the print behavior. No single number proves dryness.

## The cost argument

Prices below are rough budget ranges in US dollars for October 2026. They are based on the class of product rather than a live quote, they exclude shipping and tax, and they will differ by country and by sale.

| Purchase | Approximate cost | What it solves | Buy it first? |
| :--- | :--- | :--- | :--- |
| One single-spool dryer | $60–150 | Drying a wet spool at a controlled temperature | Yes. This is the core purchase. |
| Two or three sealed boxes, desiccant and a hygrometer | $70–150 | Keeping dry spools dry between prints | Yes. This is the other half of the system. |
| Molecular sieve for PA, PVA and PC | $15–30 | Lower humidity than silica can hold | Yes, if you use those materials. |
| A four-spool dryer | $150–300 | Drying or holding four spools at once | Only if you regularly print four materials. |
| Splitters, PTFE tube and adapters for dry feeding | $20–50 | Connecting a dryer to the U1's two feeders | Only with a dry-feeding setup. |
| A complete four-spool dry-feeding setup | $250–500 | Convenience for multi-material printing | Not first. It does not dry better merely because it holds four spools. |
| Panda Breath chamber heater and full-board cooling | $150–250 | Warp control and layer adhesion, not drying | No. It is a separate tool for a separate problem. |

One dryer and two or three sealed boxes cover most users. That combination solves the actual problem: dry the spool, then keep it dry. A four-spool dry-feeding setup is a convenience for people who print four materials at once and want to avoid swapping spools. It does not dry better merely because it holds four spools, and it adds drag and complexity to the filament path. A heated chamber is for reducing warping and improving layer adhesion in ABS, ASA, PC and PA. It is not a dryer, and on the U1 it requires community firmware and a full-board motherboard cooler. The four-spool dry-feeding setup and the heated chamber are separate purchases that solve different problems; neither is an upgrade to the dryer-and-box system.

If you print mostly PLA, PETG and TPU, a single-spool dryer that reaches 70 °C is enough. If you print PA, PC or PPA, choose a dryer that reaches at least 80 °C, and accept that PPA-CF may need more than the dryer can deliver. A four-spool unit is useful if you print multi-material often, but it is not required to dry four spools. You can dry them one or two at a time in a smaller unit.

A common and expensive mistake is buying a powered dryer for every stored spool. That is unnecessary. A powered filament dryer is for drying or for heated feeding; long-term storage does not require continuous heat. A sealed box with fresh desiccant stores a dry spool well, uses no electricity while it is closed, apart from the occasional desiccant regeneration, and costs far less.

Another common mistake is buying a chamber heater to dry filament. The chamber is not a dryer. It is a warping control device, and on the U1 it comes with firmware work and a mandatory motherboard cooling modification.

## Re-baking, energy and the annealing myth

An 8-hour run on a 300–350 W dryer uses at most about 2.4–2.8 kWh, because the heater cycles. At $0.15–0.30 per kWh, the electricity cost is no more than about $0.35–0.85 per bake. A small 68 W dryer such as the PolyDryer uses at most about 0.54 kWh over 8 hours, or no more than about $0.08–0.16. The difference matters when you are comparing a single-spool dryer with a four-spool unit.

The energy cost is real but modest. The bigger cost is time and handling. The printer sits idle, the spool is moved, and the filament goes through another heating cycle. That is why good storage matters: it reduces the number of bakes, not just the electricity bill.

Repeated drying does not anneal PLA. Annealing is a deliberate thermal treatment that holds the polymer near or above its glass transition for a sustained period. PLA's glass transition is about 60 °C, and drying PLA at 45–55 °C is below that. Five to ten drying cycles do not turn a PLA spool into annealed PLA.

The real risks are different. Bambu Lab notes that PC filament can become brittle after repeated heating and cooling cycles because of accumulated thermal stress. Long hot exposure can also oxidize or yellow nylon and ABS, and a dryer that runs too hot can deform a spool or weld the layers of filament together. PLA can embrittle over time, but drying at 45–55 °C is not the annealing mechanism. If a spool becomes brittle, suspect long storage, moisture or excessive heat rather than a few drying cycles.

The practical conclusion is not to avoid drying. It is to dry once, store well, and re-dry only when the material needs it.

## Common mistakes

- Putting a wet spool in a dry box and expecting the desiccant to dry it. The box will dry the air, not the core.
- Trusting the factory vacuum bag as proof of dryness. The bag slows moisture exchange; it does not guarantee a dry spool.
- Drying PLA at 70–85 °C. That is above its glass transition and can deform the spool and weld the filament layers.
- Feeding PLA or PETG from a hot dryer. Both soften near the feed temperature and can creep or grind.
- Using one feed temperature for PVA, TPU and PA. Their safe ranges are different.
- Leaving a dried spool on an open holder overnight in a humid room.
- Trusting the color of orange silica gel as a precise measurement. It is a rough indicator, not a hygrometer.
- Claiming that an IP67 box keeps filament dry for a fixed number of months. Storage time depends on the seal, the desiccant, the spool and the room.
- Using the printer chamber as a dryer. The chamber is for warping control, and its maximum temperature is below the drying range of PA, PC and PPA.
- Buying a chamber heater without installing full-board motherboard cooling. The RK3562 can throttle at 85 °C, and the damage is unlikely to be covered by warranty.

## Safety notes

> [!warning] Desiccant, heat and chamber safety
> Orange indicating silica gel is dyed with an organic indicator. Blue indicating silica gel can contain cobalt(II) chloride, which is classified as a possible human carcinogen and is hazardous as dust. Avoid breathing desiccant dust, keep beads away from children and pets, and do not use a food oven for desiccant without cleaning it thoroughly afterwards. Molecular sieve usually needs 200–250 °C for regeneration, which is above the limit of most filament dryers, so use a dedicated oven and a heat-safe container. When using a chamber heater, install full-board motherboard cooling, never leave a mains-powered heater unattended, and remember that thermal damage is unlikely to be covered by warranty.

ABS and ASA release styrene and acrylate vapors while printing. Use the Top Cover's HEPA and carbon filtration, and ventilate the room, especially if the printer is in a small space. HEPA captures particles, but it does not capture every volatile organic compound; the carbon stage helps, and ventilation is still important.

## Related notes

- [[00 - Filament Master Index]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)|PLA]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]]
- [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)|PCTG]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)|ABS]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)|ASA]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)|TPU and TPE]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)|PA]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|CF and GF composites]]
- [[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)|PET]]
- [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)|PPA]]
- [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)|PPS]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|PVA, BVOH and HIPS]]
- [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)|PEEK, PEI and specialty polymers]]

## Sources

All links below were checked in October 2026. They are manufacturer documentation, technical references or independent test write-ups, not affiliate links.

1. [Stefan Hermann, "Carbon Fiber Nylon in 3D Printing: PA6 vs PA12 Tested," CNC Kitchen, 17 August 2025](https://www.cnckitchen.com/blog/carbon-fiber-nylon-in-3d-printing-pa6-vs-pa12-tested). The tests show that moisture-conditioned CF-PA6 keeps about 56% of its strength and a third of its stiffness, while CF-PA12 loses much less. This is a clear published demonstration of why PA6 needs more drying care than PA12.
2. [Polymaker Wiki, "Moisture Conditioning"](https://wiki.polymaker.com/printing-tips/post-processing/moisture-conditioning). The page explains that nylon prints absorb moisture after printing, which lowers stiffness and strength but raises impact resistance. This is post-print conditioning, not spool drying, and the distinction matters.
3. [Polymaker Wiki, "PolyDryer"](https://wiki.polymaker.com/polymaker-products/accessories/polydryer-tm). The FAQ reports final relative humidity of 20–30%, 15–25% and 10–20% at power levels 1–3 after drying, measured in a room at 20 °C and 60% relative humidity. It also gives the heater's 68 W draw. It does not report a 30-day sealed-storage test.
4. [Bambu Lab Wiki, "Filament Drying Recommendations"](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament). The page lists drying temperatures, warns that PVA, PPS-CF and PPA-CF may not fully dry in some devices, and notes that repeated heating and cooling can make PC filament brittle.
5. [Bambu Lab Wiki, "PET-CF / PPA-CF / PPS-CF / PA6 CF Carbon Fibers Filament Usage Guide"](https://wiki.bambulab.com/en/filament/petcf_ppacf). The page gives drying tables: PA6-CF and PET-CF at 80 °C for 8–12 hours, PPS-CF at 80 °C for 8–12 hours, and PPA-CF at 100–140 °C for 8–12 hours. It also shows PPS being purged at 320 °C, which is above the U1's limit.
6. [Prusa Knowledge Base, "Drying Filament"](https://help.prusa3d.com/article/drying-filament_332086). The page tabulates 45 °C for 6 hours for PLA, 55 °C for 6 hours for PETG, 60 °C for 4–6 hours for TPU, 80 °C for 4 hours for ASA, 85 °C for 5 hours for PC Blend, 90 °C for 6 hours for PA11-CF and 150 °C for 8 hours for PEI.
7. [FilamentSpecs, "Desiccant for Filament Storage: Silica Gel vs Molecular Sieve," 30 May 2026](https://filamentspecs.com/desiccant-for-filament-storage). The article recommends about 20–30% relative humidity for silica gel in a sealed box, lower humidity with molecular sieve, and states plainly that desiccant does not reliably dry wet filament.
8. [Maker's Pet, "Best Desiccant for 3D Printing Filament: Molecular Sieve"](https://makerspet.com/blog/3d-printing-filament-molecular-sieve-desiccant). The author reports that warm silica gel loses much of its absorption capacity and that molecular sieve holds a lower relative humidity in a sealed container. The measurements come from hobby hygrometers, so the exact numbers are indicative rather than laboratory-grade.
9. [PrintPal, "Filament Drying Guide"](https://printpal.io/wiki/filament-drying-guide). The guide lists drying temperatures and times for common materials and notes that drying cannot reverse hydrolysis in badly degraded nylon.
10. [Snapmaker Wiki, "Snapmaker U1 FAQ"](https://wiki.snapmaker.com/en/FAQ/u1). The FAQ lists two filament feeders and four spool holders, the 300 °C nozzle and 100 °C bed, and explains the SnapDryer and RFID limits.
11. [Creality Wiki, "Filament Pre-Printing Guide: Drying"](https://wiki.creality.com/en/filament-drying). The page explains hygroscopicity, the symptoms of wet filament and the need to keep moisture-sensitive filament dry during printing.
12. [Snapmaker U1 Extended Firmware, "DragonBreath & Panda Breath Chamber Heater"](https://snapmakeru1-extended-firmware.pages.dev/panda_breath). The documentation covers the 300 W PTC heater, the two firmware options and the mandatory full-board motherboard cooling. It states that the RK3562 throttles at 85 °C and that thermal damage is unlikely to be covered by warranty.
13. [paxx12, "SnapmakerU1-Extended-Firmware," GitHub](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware). This is the community firmware project that provides Panda Breath and DragonBreath integration. It is independent of Snapmaker.
14. [Snapmaker, "Snapmaker U1 Toolchanger 3D Printer"](https://www.snapmaker.com/en-US/snapmaker-u1). The product page confirms four toolheads, two filament feeders and four spool holders.

## Videos

All videos below were checked with YouTube's oEmbed endpoint in October 2026. The titles are the titles returned by YouTube.

1. [The Next Layer, "Do You ACTUALLY Need To Dry Your Filament? (Probably Not)"](https://www.youtube.com/watch?v=OJJSG4dnaRA). The video tests several filaments and asks whether drying actually changes print quality. The answer depends on the material, which is the same conclusion this note reaches.
2. [CNC Kitchen, "Everyone gets this Wrong when 3D Printing Carbon Fiber Nylon"](https://www.youtube.com/watch?v=u8dIpwd6tzo). The video compares CF-PA6 and CF-PA12, including moisture conditioning and creep. It is the companion video to the CNC Kitchen article in the sources.
3. [CNC Kitchen, "Solid-State Dehumidifier: The Ultimate Filament Dry Box"](https://www.youtube.com/watch?v=n7EWexck8NE). The video covers a solid-state dehumidifier used for filament storage. It is useful for understanding the storage side of the problem.
4. [BV3D: Bryan Vines, "I REPLACED DESICCANT in my AMS for the LAST TIME!"](https://www.youtube.com/watch?v=2gNhkuYW3aw). The video shows a practical rechargeable-desiccant workflow in a multi-spool feeder. The same approach works in a sealed storage box.
5. [Made with Layers (Thomas Sanladerer), "Do you really need to dry your filament?"](https://www.youtube.com/watch?v=5CFxT1q6dX8). The video asks whether drying is necessary and under what conditions. It is a useful counterpoint to blanket advice.
6. [My Tech Fun, "3 Creality Space Pi Filament Dryers Compared – Original, Plus & X4"](https://www.youtube.com/watch?v=X1NL3aEGom4). The video compares three Creality Space Pi dryers. It is relevant if you are choosing a four-spool unit.
7. [My Tech Fun, "Sunlu FilaDC i10 Review: 10 DRY Spools Ready When You Need Them"](https://www.youtube.com/watch?v=tVgNQ6Sv1zU). The video reviews a desiccant-based storage cabinet that holds ten spools, and compares it with open-air storage. It is useful for comparing a cabinet with passive boxes.
8. [My Tech Fun, "PolyDryer test, the filament dryer and storage box by Polymaker"](https://www.youtube.com/watch?v=M8xwT6t1E4A). The video tests the PolyDryer, a dryer-and-storage-box system from Polymaker and FabNotion. Snapmaker's SnapDryer bundle is a related collaborative product, and the video covers the same dryer-and-box concept directly.
9. [The Next Layer, "This Will REVOLUTIONIZE 3D Printer Filament Storage!"](https://www.youtube.com/watch?v=8kIDLIXILKo). The video tests a DIY desiccant-based dehumidifier for a filament storage box and compares it with dryers and silica gel. It is useful for seeing how a desiccant system performs in practice.
10. [3DPrintSOS, "I TESTED 9 FILAMENT DRYERS SO YOU CAN HAVE BETTER PRINTS!"](https://www.youtube.com/watch?v=HEkJHZ2mo2Q). The video compares nine filament dryers. It is a broad survey of the hardware rather than a physics lesson.
11. [Dora Strelko, "I printed PA6-CF with a 0.4 mm nozzle (& you can too)"](https://www.youtube.com/watch?v=cxhbx79w-x0). The video walks through printing PA6-CF with a 0.4 mm nozzle, including the drying and handling steps. It is a practical complement to the material table.
