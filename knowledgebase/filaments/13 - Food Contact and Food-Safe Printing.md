---
title: "13 - Food Contact and Food-Safe Printing"
tags:
  - 3d-printing
  - filaments
  - food-contact
  - food-safety
  - food-grade
  - migration
  - porosity
  - cleaning
  - coatings
  - regulations
  - snapmaker-u1
  - materials-selection
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| **The distinction that matters** | A resin or filament certificate covers a material. A food-safe part needs a cleanable geometry, a controlled print process and a validated cleaning routine. The EU overall migration limit is 10 mg/dm² or 60 mg/kg of food. | Deciding whether a spool certificate is enough. It is not. | A food-grade filament can still produce a part that is not food-safe. The printed article is the object that has to be cleanable, not the spool. |
| **The porosity problem** | Layer gaps and inter-road voids are microscopic, and food-poisoning bacteria are roughly 0.25–5.5 µm long. | Understanding why washing reduces bacteria but does not sterilise a layered print. | Even 100% infill leaves interlayer voids. Coatings help, but they crack and wear. Dry foods are lower risk than wet, oily or hot foods. |
| **Plausible materials on the U1** | PP, PETG, PCTG, PLA and some TPU. PLA softens around 55–60 °C, PETG around 80 °C, and printed PP has an HDT near 54 °C at 0.45 MPa. | Dry storage, short-contact cold items, cookie cutters and dry-ingredient utensils. | None of these is a good choice for hot liquids, repeated oily contact, raw meat or baby bottles. |
| **Materials that would solve the heat problem but cannot be printed on the U1** | PPSU needs about 360–410 °C at the nozzle and a bed around 140–155 °C. PEEK needs about 340–400 °C at the nozzle and a heated chamber. The U1 limits are 300 °C nozzle, 100 °C bed and 60 °C chamber. | Understanding why "use PPSU or PEEK" is not actionable on this machine. | True silicone is a thermoset, not an FDM filament. A "silicone-like" TPE is not silicone. |
| **Coatings and service life** | Food-grade epoxy, polyurethane or platinum-cured silicone, applied to a certified schedule and fully cured. | Sealing a simple, smooth part that will see light use. | A coating that is chipped, cracked, cloudy or scratched retires the part. Liquid epoxy is toxic before it is cured. |
| **Best and worst uses** | Best uses are dry spices, dry scoops, dry coffee beans and short-life cookie cutters. Worst uses are hot coffee, soup, tomato sauce, oil, raw meat, baby bottles, pet bowls and microwave reheating. | Making a direct decision before printing. | If the food is hot, wet, oily or acidic, or if it is for an infant, use glass, ceramic or stainless steel instead. |

> [!abstract] Overview
> The question "which filament is food-safe?" is the wrong question. A material can be permitted for food contact while the object printed from it is not food-safe, because fused-filament printing creates a layered, porous surface that holds food residue and bacteria. The same distinction applies to resin printing: a "food-grade" photopolymer is a material claim, not a property of the printed part.
>
> This note separates the material question from the part question. It explains what the main regulations and certificates actually cover, why layer gaps matter, which polymers are the least bad choices on a Snapmaker U1, which chemicals and pigments are worth worrying about, how to design and clean a part, and when to throw it away. The machine limits are central: the U1 has a 300 °C nozzle, a 100 °C bed and a 60 °C chamber with community firmware. It cannot print PPSU or PEEK, and it has no annealing oven.
>
> The honest conclusion is narrow. A printed part can be acceptable for dry foods, short-contact cold items and single-use dry tasks when it is printed from a suitable material on a dedicated stainless hotend, with no build-plate adhesive, good layer fusion, a smooth cleanable geometry and a coating if it will be washed. It is a poor choice for hot liquids, acidic or oily foods, raw meat, baby bottles, pet bowls and repeated wet use. This note is a risk-reduction guide, not a certification.

---

## 1. Two different questions: food-grade material and food-safe part

"Food grade" is industry shorthand for a material that is permitted to contact food under a specific regulation, for a specific use, with specific migration limits. It is not a single global certificate, and it is not a property that travels automatically from a spool to a printed object. The more precise American term is a **food contact substance**, and the more precise European term is a **food contact material**. Both describe a material plus an intended use.

A **food-safe part** is a finished article that, under its real conditions of use, does not transfer harmful substances to food, does not harbour pathogens, and can be cleaned. That is a property of the whole object: the polymer, the colourants, the nozzle, the build plate, the layer structure, the geometry, the coating and the cleaning routine. A spool of food-grade polypropylene can become a food-safe container, or it can become a scratched, porous cup with glue residue on the bottom. The spool does not decide which one you get.

Migration is the physical process behind the chemical half of the problem. Molecules from the plastic move into the food, and the rate depends on the polymer, the additive, the food, the temperature, the contact time, the thickness of the wall and the surface area. A thin printed wall has a higher surface-to-volume ratio than a thick injection-moulded container, so a small printed cup can expose more surface per gram of food than the container the resin was tested in. A hot, fatty or acidic food extracts more than a cool, dry one. A declaration of compliance that covers a 2 mm injection-moulded sheet at 40 °C for 10 days does not automatically cover a 1.2 mm printed wall holding hot coffee.

The biological half of the problem is separate. Fused-filament printing deposits rounded roads of polymer. Where those roads meet, there are small voids, and where layers bond incompletely, there are gaps. Those gaps are large enough for bacteria to enter and difficult for a sponge to reach. A part can be watertight and still be a poor food-contact surface, because watertightness is about connected leaks, not about surface porosity. Prusa's own guidance makes the point directly: a watertight print is not automatically food-safe.

The same logic applies to resin. A stereolithography (SLA) or digital light processing (DLP) print is smooth, but smoothness is not the same as inertness. Uncured monomers and photoinitiators can remain on or in the part, and post-curing is a chemical process that has to be done correctly. A resin that is biocompatible for a dental or medical application is not automatically food-safe, because the two uses have different exposure routes and different standards. Formlabs states that none of its resins are food-safe unless the user takes additional steps, and that its resins are not approved for food or drink.

The practical rule is simple. Read the certificate, then ask what it actually covers. If it covers a resin grade and not a printed article, it is a starting point, not a conclusion.

## 2. What the regulations and certificates actually cover

Food-contact law is written around materials and intended uses, not around a printer. The table below summarises the main schemes a hobbyist or small workshop will meet. The important column is the last one, because that is where most marketing claims become misleading.

| Scheme | What it is | What it covers | What it does not cover |
| :--- | :--- | :--- | :--- |
| **US FDA, 21 CFR Part 177 and Food Contact Notifications** | Authorisation of food contact substances, treated as indirect food additives, for defined uses. | The substance, its intended use and any migration limits or specifications. A listing is a permission, not a product certificate. | The finished printed part, its porosity, its cleaning, nozzle wear, plate adhesives, or a different food or temperature. The FDA does not "approve" materials in the way it approves drugs. |
| **EU Framework Regulation 1935/2004 and Regulation 10/2011** | The general safety framework plus the specific measure for plastics. | Plastic layers, the positive list, the overall migration limit of 10 mg/dm² or 60 mg/kg, specific migration limits, good manufacturing practice and a Declaration of Compliance. | Non-plastic parts, the printing process, microbial cleanliness, or a guarantee that a printed geometry meets the limits. The converter must verify the finished article under its real conditions of use. |
| **German LFGB, sections 30 and 31, with BfR recommendations** | National food and consumer-goods law, plus non-binding recommendations from the Federal Institute for Risk Assessment. | Health assessment of food contact materials, test methods and sensory requirements. | A government certificate. The BfR does not issue certificates, and an "LFGB certificate" is a test report from a laboratory, not a legal approval. |
| **NSF/ANSI 51** | A US standard for materials and finishes used in commercial food equipment. | Formulation review against FDA requirements, cleanability, corrosion resistance, impact resistance, abrasion resistance, heat resistance and coating adhesion. Certification is product- and facility-specific. | Consumer food contact, a filament spool, or the layer porosity of a printed part. The standard does not define extraction tests; it references federal regulations instead. |
| **Supplier "food-grade" declaration of compliance** | A supplier statement, sometimes supported by migration test data. | The named grade, colour and conditions in the document. | Anything outside that scope. Many declarations exclude printed articles, certain colours or fatty foods. |

### 2.1 The FDA does not "approve" a filament

In the United States, a food contact substance is authorised through a regulation in 21 CFR Part 177, through an effective Food Contact Notification, or through a GRAS determination. The FDA's own consumer page is careful about the word "approve": it approves food additives, not finished materials or products. A 21 CFR listing names the substance, the conditions of use and any limits. It is not a certificate that a particular spool, colour or printed object is compliant.

That matters because a supplier can say "FDA compliant" while meaning only that the base polymer appears somewhere in 21 CFR. The pigment, the antioxidant, the lubricant, the wax and the processing aid all have to be suitable for the intended use as well. A natural, uncoloured grade is easier to document than a bright red one, and some manufacturers explicitly exclude certain colours from their food-contact statements.

### 2.2 The EU requires a declaration, not a magic stamp

Regulation (EC) No 1935/2004 sets the general rule: a food contact material must not transfer constituents in quantities that endanger health, change the composition of the food unacceptably, or impair its smell, taste or appearance. Regulation (EU) No 10/2011 turns that into a positive list for plastics, with an overall migration limit of 10 mg/dm² of contact surface or 60 mg/kg of food, and specific migration limits for individual substances.

The declaration of compliance is the key document. It has to identify the material, the substances with restrictions, the migration data or reasoning, and the conditions of use: the food types, the time and temperature of contact, and the surface-to-volume ratio for which compliance was verified. A declaration for a filament may say "all food types, up to 100 °C, short-term contact" or it may say "not for fatty foods". It may cover only the natural colour. It may say, as Filamentive's declaration does, that it applies solely to the filament and does not extend to articles produced by 3D printing.

That last sentence is the whole problem in one line. The filament supplier is responsible for the filament. The person who prints the article is the converter, and the converter is responsible for the finished article. If you print a cup and give it to someone, you are the one making the food-contact claim, not the spool manufacturer.

### 2.3 LFGB is a law, not a certificate

The German Food, Feed and Consumer Goods Code, the Lebensmittel- und Futtermittelgesetzbuch or LFGB, prohibits materials that can harm health through their composition. Section 31 implements the European framework, and the BfR publishes recommendations for materials that are not covered by a specific EU measure, such as silicones, paper and rubber.

The BfR is explicit that its recommendations are not legal norms and that it does not issue certificates. A laboratory can test a material against the LFGB requirements and issue a report, and a supplier can call that report an "LFGB certificate", but it is still a test report for a specific material under specific conditions. It is not a government approval of a printed part.

### 2.4 NSF/ANSI 51 is for commercial equipment

NSF/ANSI 51 sets minimum public-health and sanitation requirements for materials and finishes used in commercial foodservice equipment: broilers, beverage dispensers, cutting boards, stock pots, tubing, sealants, gaskets and valves. It covers formulation, cleanability, corrosion resistance, impact resistance, abrasion resistance, heat resistance and coating adhesion. NSF certification also includes an audit of the production facility.

It is a serious standard, but it is not a consumer food-contact certificate for a spool of filament. A material can be listed under NSF/ANSI 51 and still be printed into a part with pores, a rough bottom surface and a glue-stick residue. The standard's own scope says that it does not define extraction tests for chemical migration; it cites the US federal regulations for that. Certification of a material is not certification of your print.

### 2.5 What a supplier declaration usually leaves out

A typical "food-grade" filament declaration leaves out four things:

1. **The printed article.** The declaration covers the filament, not the part. Some suppliers say so explicitly; others rely on the reader not asking.
2. **The colour.** The base polymer may be compliant while a particular pigment is not. Several manufacturers publish a colour-by-colour table, and some colours are marked unsuitable.
3. **The food type.** Fatty foods, acidic foods and alcoholic foods are more aggressive than water. A declaration may exclude one or more of them.
4. **The temperature and time.** A declaration tested at 40 °C for 10 days does not cover boiling water, a microwave or a dishwasher.

If a supplier cannot tell you which of these apply, treat the claim as a material statement, not a food-safety guarantee.

## 3. Porosity, layer bonds and the cleaning problem

Fused-filament printing is an additive process that lays down a bead of molten polymer. The bead is roughly oval, not rectangular, so adjacent beads leave triangular voids at their junctions. The next layer is pressed onto the previous one while it is still warm, and the bond forms by polymer chain diffusion across the interface. If the polymer is too cool, the layer is too thick, the flow is too low or the print is too fast, the diffusion is incomplete and the interface becomes a weak, open seam.

This is why "100% infill" is not a solution. A 100% infill setting removes the large internal cavity, but it does not remove the small voids between roads or the seams between layers. More perimeters, a smaller layer height, a slightly wider line and a hotter nozzle all improve the situation, but none of them produces a homogeneous surface. The only way to get a truly non-porous surface from an FDM part is to coat it, and even a coating is a wear layer rather than a permanent barrier.

The scale matters. Common food-poisoning bacteria are roughly 0.25–1.75 µm in diameter and 1.5–5.5 µm long. A layer seam or a surface scratch is much larger than that, so bacteria can enter and remain. Once they are established, they can form a biofilm that is more resistant to washing and sanitising than the same bacteria on a smooth surface. A 2021 study of eight PLA filaments found that biofilm formation depended on surface structure and hydrophobicity, and that the tested polymers differed widely. "PLA" is not one surface.

The experimental evidence is consistent on the main point and mixed on the details:

- A 2023 study at the University of Szeged printed cups from PETG and PLA, contaminated them with milk, washed them, and cultured the surfaces. Untreated prints grew bacterial colonies. Cups coated with epoxy resin grew none, and looked and cleaned like injection-moulded plastic. Boiling was more effective than dish soap. Antimicrobial filaments reduced colony counts by about 80%, which is an improvement but not a cleanable surface.
- The same study found that layer height did not have a significant effect on bacterial colony formation after cleaning. That is a useful caution against the folklore that a 0.1 mm layer is automatically food-safe. A smaller layer height reduces the size of the grooves, but it also creates more layers and more potential seams.
- A 2025 study compared hand washing with a dishwasher on printed PETG and NonOilen cups. The dishwasher reduced bacterial counts more effectively and prevented regrowth over ten days, while hand washing allowed regrowth. The dishwasher also reduced impact resistance and heat deflection temperature, especially for NonOilen. Cleaning efficacy and material durability are a trade-off.
- A 2020 study of printed parts in a hospital setting found that PLA, including antimicrobial PLA, was readily contaminated and that bacteria recovered after disinfection. An antimicrobial additive changes the surface chemistry; it does not close the pores.

Smoothing is not a reliable shortcut. Solvent smoothing can round the layer lines, but it can also leave a sticky surface, trap solvent, or create bubbles that become new pores. In one test, an isopropyl-alcohol-smoothed Polysmooth cup performed badly in a bacterial test because the surface became sticky. A properly applied food-grade coating is more predictable, but it has its own failure modes. Acrylic lacquer, acetone smoothing and generic craft resin are not food-safe substitutes.

The practical conclusion is that a printed food-contact part is a high-maintenance surface. It should be designed for cleaning, washed immediately, dried completely, inspected often, and retired early. That is a different relationship from a glass bowl or a stainless-steel spoon, which can be cleaned until they break.

## 4. Materials: the least bad choices on a U1

The table below is about the bulk resin and the printability of the material on a Snapmaker U1. It is not a statement that a printed part made from that material is food-safe. Every row still has the porosity problem, and every row still depends on the colour, the nozzle, the plate and the cleaning routine.

| Material | Bulk resin food-contact status | Printability on the U1 | Practical heat limit | Main food-contact risk |
| :--- | :--- | :--- | :--- | :--- |
| **PP (polypropylene)** | Good. Olefin polymers are covered by 21 CFR 177.1520, and food-contact grades exist. A published declaration for one natural PP grade covers EU 10/2011 and FDA use but recommends against fatty foods. | Printable but difficult. It warps, needs a bed around 75–100 °C and usually needs PP tape or a PP-specific adhesive. The adhesive is not food-safe, so a dedicated plate and a tape-free method are needed. A 50–60 °C chamber helps large parts. | Printed HDT is about 54 °C at 0.45 MPa. Moulded PP can serve near 100 °C, but that number does not transfer to a printed part under load. | Layer gaps, warping, few certified colours, possible fatty-food exclusion, adhesive residue. |
| **HDPE / PE (polyethylene)** | Good. Covered by 21 CFR 177.1520. Moulded HDPE is a standard cutting-board material. | Very difficult on the U1. It warps strongly, adheres poorly and is sold by very few filament brands. It is not a practical everyday material for this machine. | Softens roughly in the 60–80 °C range, depending on grade and load. | A printed board is not a moulded board. Porosity, warping and a very short list of certified filaments. |
| **PETG (polyethylene terephthalate glycol-modified)** | Good for many grades. PET and glycol-modified copolyesters are covered by 21 CFR 177.1630 and 177.1315, and several suppliers publish EU declarations. Colour coverage varies. | Easy. Print at 235–255 °C with a bed at 70–80 °C. It usually needs a release agent on smooth PEI; that agent is not food-safe, so use a dedicated plate or a textured plate that releases without glue. | Glass transition is about 80 °C. A practical continuous limit is lower, roughly 60–70 °C, and it should not go in a dishwasher or hold hot liquid. | Scratches, layer gaps, antimony catalyst traces, colourants and release-agent residue. |
| **PCTG (polycyclohexylenedimethylene terephthalate glycol-modified)** | Good for food-contact grades. It is a copolyester with a higher heat resistance than PETG, and declarations exist, but there are fewer certified colours and suppliers. | Good. Print at 250–270 °C with a bed at 90–100 °C and a chamber around 35–45 °C. It is tougher than PETG and has better layer adhesion. | HDT is higher than PETG, roughly in the 70–80 °C range depending on grade, but it is still not a hot-liquid container without testing. | Fewer certified grades, porosity, scratches and a false sense of security from the higher number. |
| **PLA (polylactic acid)** | Mixed. Some PLA grades and some finished filaments are documented for food contact; ordinary PLA usually is not. Bambu Lab's PLA Pure is tested as a printed part under EU 10/2011, which is a stronger claim than a resin-only declaration. | Very easy. Print at 205–230 °C with a bed at 55–60 °C and the cover off or vented. | Glass transition is about 55–60 °C. Bambu explicitly says not to exceed 60 °C. Hot food, hot water and a dishwasher will soften or distort it. | Heat, hydrolysis, brittleness, colourants and porosity. "Compostable" is not a food-safety property. |
| **TPU / TPE (thermoplastic polyurethane or elastomer)** | Food-grade TPU exists and is covered by 21 CFR 177.1680, but most hobby filament TPU is not certified. | Printable slowly, roughly 3–5 mm³/s with a 0.4 mm nozzle at 210–245 °C and a bed at 30–45 °C. It needs dry filament and a direct path. | Roughly 60–80 °C, depending on hardness and grade. It softens and creeps under load. | A soft, high-friction surface traps soil. Plasticisers and additives may be present. Pores are hard to clean, and colourants are usually undocumented. |
| **PPSU (polyphenylsulfone)** | Excellent. Covered by 21 CFR 177.2500 and used for hot-water, dishwasher and autoclave applications. Some grades are marketed as BPA-free, but the specific grade should be checked. | **Cannot be printed on the U1.** It needs about 360–410 °C at the nozzle, a bed around 140–155 °C and a chamber of at least 65 °C, often 170–210 °C for good results. The U1 limits are 300 °C, 100 °C and 60 °C. | Glass transition is around 220 °C, with continuous service around 180 °C. This is the material that would actually solve the hot-liquid problem. | Not printable on this machine. A "PPSU-like" filament is not PPSU, and a PPSU part printed on an industrial machine still has layer porosity. |
| **PEEK (polyether ether ketone)** | Excellent. Covered by 21 CFR 177.2415 and used where high temperature, chemical resistance and food contact are required. | **Cannot be printed on the U1.** It needs about 340–400 °C at the nozzle, typically 380–400 °C, a bed around 100–150 °C and a heated chamber. The U1 limits are 300 °C, 100 °C and 60 °C. | Melting point is about 343 °C, with continuous service around 250 °C. | Not printable on this machine. It requires an industrial printer and a controlled thermal cycle, not a desktop toolchanger. |
| **Silicone** | Excellent. Platinum-cured food-grade silicone is used for baking mats, moulds, spatulas and seals. It is a thermoset elastomer, not a thermoplastic. | **Cannot be printed as an FDM filament.** Silicone cures chemically and does not melt and re-melt. A "silicone-like" TPE is a different material with different heat and cleaning behaviour. | Typically about −40 to 230 °C, and dishwasher-safe. | Not printable. If you need silicone, buy a certified mat or mould rather than printing a substitute. |
| **"Food-safe" PLA and PETG marketing** | Highly variable. A declaration may cover the resin, one colour, or a printed sample under specific conditions. A printed-sample test is stronger, but it is still specific to that print and that test. | Same as the base material. The label does not change the printer settings or the porosity. | Same as the base material. A "food-safe" label does not raise the glass transition temperature. | "Food-grade" is not "food-safe". "BPA-free" is not "bisphenol-free". Check the scope, the colour and the conditions. |

Three conclusions follow from the table.

First, **PP and PETG are the least bad practical choices on the U1** for a part that will actually be washed. PP has better chemical resistance and a higher moulded-service temperature, but it is harder to print and its adhesives are a problem. PETG is easy to print and easy to clean if it is coated, but it is soft at hot-food temperatures and it scratches. PCTG is a step up in toughness and heat resistance, with fewer certified colours. PLA is the easiest and the worst for anything warm.

Second, **the materials that would genuinely solve the problem are not printable on this machine.** PPSU and PEEK are the food-service and medical polymers that tolerate hot water, dishwashers and autoclaves. The U1's 300 °C nozzle and 100 °C bed are far below what they need. A note that recommends PPSU for a U1 owner without saying this would be dishonest.

Third, **silicone is not a filament.** It is an excellent food-contact material, and a food-grade silicone mat or mould is a sensible accessory, but it is not something you print on an FDM machine. A soft TPE with a "silicone-like" feel is still a thermoplastic with pores and a much lower heat limit.

## 5. Pigments, additives and the chemistry of "BPA-free"

### 5.1 Heavy-metal pigments

Inorganic pigments can contain metals, including lead, cadmium, chromium, copper, antimony, titanium and zinc. A 2022 study of commercial ABS and PLA filaments found that the inorganic composition varied greatly with polymer, manufacturer and colour. Elements of concern included silicon, aluminium, titanium, copper, zinc and tin, and cadmium, lead, chromium and antimony were reported in some samples. The study did not find that every coloured filament is dangerous. It found that colour is an unverified variable, and that a buyer cannot tell from the spool what is in the pigment.

The EU limits for plastics are strict. In Annex II of Regulation 10/2011, lead and cadmium must not migrate in detectable quantities, with detection limits of 0.01 mg/kg and 0.002 mg/kg respectively. Antimony has a specific migration limit of 0.04 mg/kg, and copper has a limit of 5 mg/kg. Those are migration limits for the finished plastic, not limits on the pigment content, but they show the direction of the regulation: heavy metals are treated as contaminants to be kept out, not as acceptable colourants.

The practical response is not to avoid all colour. It is to prefer natural or uncoloured filament when the part will contact food, to ask the supplier for a colour-specific declaration, and to treat a bright, metallic or glitter finish as a higher-risk choice. A "food-safe" claim for the base polymer does not automatically cover a special-effect pigment.

### 5.2 Metal-filled filaments

Metal-filled filaments deserve a separate warning. The metal particles are not chemically bound to the polymer, and a 2023 study found that copper, tin and chromium leached from metal-filled PLA and PLA/PHA into synthetic sweat and saliva. In some cases the copper and chromium concentrations were above US EPA drinking-water limits, and UV weathering increased the release by one to two orders of magnitude. The particles were mostly below 150 µm, which is small enough to adhere to skin and be ingested.

A bronze, copper, iron or stainless-steel-filled print is an aesthetic or functional object, not a food-contact surface. Do not use it for cups, plates, utensils, coffee tools or pet bowls. The same caution applies to "marble", "stone" and "ceramic" filled filaments until the supplier provides a food-contact declaration for the specific filler.

### 5.3 BPA, BPS and the meaning of "BPA-free"

Bisphenol A is used in polycarbonate and in some epoxy resins. EFSA re-evaluated BPA in 2023 and set a tolerable daily intake of 0.2 ng per kilogram of body weight per day, which is about 20,000 times lower than its previous temporary value. The European Commission then banned BPA in food contact materials from 20 January 2025. That is a strong regulatory signal, even though the exposure from a printed part is only one of many sources.

"BPA-free" is not the end of the story. Bisphenol S is a common substitute, and it is authorised in plastics with a specific migration limit of 0.05 mg/kg. ECHA has classified BPS as toxic to reproduction, category 1B. A material can be BPA-free and still contain a bisphenol with its own hazard profile. The honest claim is "no BPA in this formulation", not "safe".

The polymers in this note divide roughly as follows. PP, PE, PET and PCTG do not use BPA as a monomer. Polycarbonate does. Epoxy resins often do, which is why a food-grade epoxy coating needs a declaration and a full cure. If a coating is undercured, the bisphenol and the amine hardener are still mobile, and the coating is not food-safe.

### 5.4 Antimony in PET and PETG

PET and some copolyesters use antimony trioxide as a polymerisation catalyst. The specific migration limit is 0.04 mg/kg, and the regulation notes that the limit may be exceeded at very high temperature. This is one reason not to hot-fill, boil or microwave a PETG part. It is not a reason to avoid PETG at room temperature. The risk is a function of temperature and contact time, not a fixed property of the word "PETG".

### 5.5 Phthalates and other plasticisers

Phthalates are plasticisers used mainly in flexible PVC and some soft compounds. They are not a normal ingredient of rigid PLA, PETG, PP or PCTG. Many phthalates are restricted under REACH, and a "phthalate-free" claim is a useful piece of information. It is also a narrow one: it says nothing about pigments, antioxidants, lubricants, slip agents or processing aids. A soft TPU is more likely to contain a plasticiser or an additive than a rigid PETG, which is one reason a soft food-contact part deserves more scrutiny.

### 5.6 PFAS and the machine

PFAS are a large class of fluorinated chemicals used for non-stick, grease-proof and water-repellent properties. They appear in food-contact paper, non-stick cookware, some processing aids and fluoropolymers. The EU is moving toward a broad restriction, and the Packaging and Packaging Waste Regulation bans food-contact packaging above certain PFAS limits from August 2026. In a printer, PFAS can appear in PTFE tubing, non-stick surfaces and some lubricants.

PTFE is stable in normal use, but it degrades at high temperature. Prusa notes that PTFE releases a small amount of toxic particles above about 240 °C and significant amounts above 260 °C. The U1 can reach 300 °C, so a high-temperature print through a PTFE-lined path is worth thinking about. The point is not that every printer is a PFAS hazard. The point is that the machine is part of the food-contact system, and a hot, degraded polymer surface is not a neutral component.

### 5.7 Recycled content

Recycled plastic for food contact in the EU must come from a suitable recycling technology or an authorised process under Regulation (EU) 2022/1616. The regulation exists because collected plastic can contain chemical and microbiological contaminants from its previous use, including detergents, fuels, pesticides and other household products. A recycling process has to decontaminate the input and document it.

A filament labelled "recycled" or "rPET" is not automatically food-safe. It may be a good environmental choice for a bracket or a planter, but it needs a food-contact declaration for the specific recycled grade before it goes near food. The same applies to "recycled PLA" from unknown sources.

### 5.8 Wood, bamboo and other organic fillers

Wood, bamboo, cork and similar fillers are hygroscopic organic materials. They absorb water, they print with a rough surface, and they create a porous composite that is difficult to clean. A wood-PLA part can look like a kitchen object, but it is a poor choice for wet or oily food because the filler holds moisture and can support mould growth. Keep wood-filled prints for decorative objects, handles and dry storage that does not contact food directly.

### 5.9 Antimicrobial additives

Silver, copper and other antimicrobial additives can reduce the number of bacteria on a surface. They do not remove the physical pores, and they do not replace cleaning. One study found an 80% reduction in colonies with antimicrobial filaments, which is meaningful but not a cleanable surface. A hospital study found that antimicrobial PLA was still contaminated and that bacteria recovered after disinfection. The additive itself can migrate, and "antimicrobial" is a marketing term, not a food-contact standard.

An antimicrobial filament is not a substitute for a smooth, coated, well-cleaned part. If anything, it can create a false sense of security.

## 6. Nozzles, build plates and cross-contamination

### 6.1 Brass, stainless steel and hardened steel

Brass is the traditional nozzle material and the least suitable for food contact. It is an alloy of copper and zinc, and some brass contains lead as an impurity or alloying element. "Lead-free" brass in US drinking-water law means no more than 0.25% weighted average lead, which is not zero. A worn brass nozzle can release copper and lead into the melt. Prusa's food-safety guidance recommends stainless steel or titanium and notes that even its hardened-steel nozzles may contain lead.

The U1's stock hotend is stainless steel, which is the best default. It is an integrated unit, so the nozzle cannot be swapped on its own; the whole hotend is replaced. That makes dedication practical: choose one of the four toolheads for food filament and keep it for that use. A new stainless hotend is better than a used one that has printed ABS, carbon fibre or metal fill. If you use a hardened-steel hotend, dedicate that one too; hardened steel is not automatically lead-free.

A third-party brass or unknown-alloy hotend is a poor choice for food contact. It may be cheaper, but you cannot document the alloy, and wear will put the alloy into the part.

### 6.2 The filament path

The filament path includes the feeder, the PTFE tube, the hotend and the nozzle. Dust, filament fragments and fingerprints can all introduce contamination. Keep the food spool in a clean dry box, cut off the first few centimetres if it has been handled, and do not store it next to a sander or a workshop vacuum. The U1 has two filament feeders and four spool holders; keep the food spool on a dedicated holder and do not swap it between materials more than necessary.

The toolchanger helps with colour and material carry-over because each toolhead has its own melt zone. It does not sterilise anything. A purge/wipe tower reduces the chance of one polymer appearing in another, and a wipe sequence reduces ooze, but neither cleans the outside of the nozzle, the heat sink or the bed. If you want a clean food path, dedicate the hardware.

### 6.3 The build plate

The U1 uses a PEI-coated spring-steel plate. Glue stick, Magigoo, hairspray and ABS slurry are not food-safe, and their residue can transfer to the part. Do not use them for a food-contact print. A smooth PEI plate with no adhesive is the best default. Clean it with warm water and mild dish soap, rinse it, and dry it. If you use isopropyl alcohol, let it evaporate completely before printing.

A textured plate imparts a rough surface to the bottom of the part, and that surface is harder to clean. Keep a smooth plate for food parts, and keep it separate from plates used with ABS slurry, metal fill or carbon-fibre composites. If a plate has been used with a non-food material, clean it thoroughly or retire it from food use.

The plate itself is a machine component, not a certified food-contact surface. That is another reason to print the food-contact surface as a vertical wall or a top surface rather than the bottom layer.

### 6.4 Colour and material carry-over

A toolchanger can keep a food filament in its own melt zone, but the nozzle exterior, the purge area and the plate are shared. If the same toolhead has printed a dark or metallic filament, the first food part may show colour streaks or black specks. Purge until the extrusion is clear, inspect the first layer, and if you see contamination, stop and clean the hotend. Do not assume that a purge tower has removed everything.

## 7. Designing and printing for cleanability

The design rules for a food-contact print are similar to the rules for commercial food equipment: smooth, open, drainable and easy to inspect.

1. **Use large radii and open curves.** Sharp internal corners are difficult to clean. A fillet of several millimetres is better than a 90° corner.
2. **Use through-holes, not blind holes.** A blind hole is a reservoir. If a cavity is unavoidable, make it removable or open at both ends.
3. **Design for drainage.** A bowl should not have a flat bottom with a lip that traps liquid. A small slope helps.
4. **Avoid threads, press fits and deep grooves.** These are crevices by design.
5. **Avoid supports on the food-contact surface.** A support interface is rough and leaves scars. Orient the part so the food surface is a vertical wall or a top surface.
6. **Keep the geometry simple.** A smooth cup is easier to clean than a detailed figurine. Decorative texture is a liability.
7. **Make removable parts removable.** If a lid or a handle is attached, it should come off for cleaning, and the joint should not be a hidden crevice.

The print settings should aim for fusion, not just appearance:

- Use a 0.4 mm nozzle. A 0.2 mm nozzle gives finer detail but many more layers, and a 0.8 mm nozzle gives thicker layers and larger seams. The 0.4 mm is the practical middle.
- Use a layer height of about 0.12–0.16 mm. This is a compromise between surface finish, print time and the number of seams.
- Use four to six perimeters. More walls mean a thicker, more robust part and fewer opportunities for a thin wall to leak.
- Use 100% infill for small food parts. It removes the internal cavity, but it does not remove the interlayer gaps. For large parts, more perimeters are often a better use of material than 100% infill.
- Use a line width of about 0.4–0.45 mm. A slightly wider line improves bonding between adjacent roads.
- Print at the upper end of the material's temperature range, but not above it. Higher temperature improves polymer diffusion; too much heat causes stringing, sagging and degradation.
- Slow the outer wall. A slower outer wall gives a cleaner surface and better dimensional accuracy.
- Dry the filament first. Moisture creates steam, bubbles and inconsistent extrusion, which are all bad for a food-contact surface.
- Do not use fuzzy skin, low-temperature matte compounds or heavily filled filaments for the food-contact surface. They increase surface area and porosity.
- Ironing can improve the top surface, but it does not seal the sides or the layer boundaries. If you iron, inspect the result and do not treat it as a food-safety step.

A temperature tower and a flow test are worth the time. A part that looks good but has weak layer adhesion is a cleaning problem waiting to happen. The vault's notes on [[05 - Layer Height and Nozzle Size]], [[07 - Print Speeds and Volumetric Flow]] and [[10 - Common Printing Issues, Debugging, and Physical Limits]] explain how to tune these variables without guessing.

## 8. Coatings and liners

A food-grade coating is the most reliable way to turn a porous print into a cleanable surface, but it is not a permanent solution. The coating has to be certified, applied correctly, fully cured and inspected. If it cracks or chips, the porous print underneath is exposed and the part should be retired.

### 8.1 Food-grade epoxy

Epoxy is the most studied option. Prusa's test printed three PLA cups: one untreated, one smoothed with chloroform and one coated with epoxy resin. After 14 days of milk contact and warm-water washing, the untreated cup had the largest bacterial colonies, the smoothed cup was not reliable, and the epoxy-coated cup had no colonies. The epoxy coating produced a surface that cleaned like injection-moulded plastic.

Examples of food-contact epoxy products include ArtResin (certified to EU 10/2011), Masterbond EP42HT-2FG, Permabond ET5143, ET5145 and ET5147, and Efkoresin Art UV. The exact product matters. A generic hardware-store epoxy, a craft resin or a two-part adhesive is not a food-contact coating, even if it dries hard and clear.

The application rules are strict:

- Mix by weight, not by eye. The ratio is part of the chemistry.
- Stir slowly and scrape the sides of the container. Bubbles become pores.
- Apply thin coats rather than one thick coat. Two or more coats are better than one.
- Follow the manufacturer's cure temperature and time. A room-temperature cure may take days; a post-cure may be required.
- Do not touch the coating until it is fully cured. A tacky or soft surface is not cured.
- Inspect for bubbles, fisheyes, missed spots and dust. A visible gloss alone is not proof of a continuous film.
- Do not use the part until the coating has fully cured and any odour has gone.

Liquid epoxy is toxic before cure. Wear nitrile gloves and eye protection, work in a ventilated space, and keep uncured resin away from food, children and pets. Do not cure a food-contact coating in a kitchen oven. Follow the safety data sheet.

### 8.2 Food-grade polyurethane and silicone

Food-grade polyurethane coatings are harder and more abrasion-resistant than epoxy. AcriGlaze Safecoat is one example used in food-contact applications. They have the same requirements: a food-contact certificate, an exact mix, a full cure and a inspection for cracks.

Platinum-cured food-grade silicone is flexible and heat-resistant. It is an excellent material for a mould or a mat, and it can be used as a liner in a rigid part. It is not a thin paint-on coating for a complex print, because adhesion and thickness are difficult to control. A printed "silicone-like" TPE is not silicone; it is a thermoplastic with a much lower heat limit.

### 8.3 Shellac and wax

Shellac and wax are edible coatings, and they can make a dry-food item look finished. They are not durable barriers. They dissolve in hot water and alcohol, soften in a dishwasher, and can harbour bacteria once scratched. They are suitable for a decorative dry-food item that will not be washed aggressively, not for a cup or a plate.

### 8.4 What coatings do not fix

A coating does not fix a bad design. It will not fill a deep crevice, a thread or a blind hole reliably. It will not survive a knife cut or a scouring pad. It will not make a PLA part safe for hot coffee, because the PLA underneath will still soften. It will not make a part dishwasher-safe unless the coating itself is rated for it.

A coating is a wear layer. Inspect it after every wash. If it is cloudy, tacky, cracked, chipped or missing, retire the part.

## 9. Cleaning, sanitising and service life

### 9.1 Hand washing

Wash the part immediately after use. Do not let food dry on it. Use warm water, a mild dish soap and a soft sponge or brush. Do not use steel wool, a scouring pad, an abrasive cleaner or a knife. Pay attention to layer lines, seams, rims, threads and through-holes. Rinse with clean water and dry it completely before storage.

Store the part open, not in a sealed damp container. A cupboard with airflow is better than a closed drawer. Do not stack wet parts. If the part has a lid, leave it off until both parts are dry.

### 9.2 Sanitising

A 200 ppm chlorine solution for two minutes, followed by a clean-water rinse, reduced biofilms in one study. Chlorine can degrade some plastics and coatings, so test it on a scrap piece first. It is not a substitute for washing; it works best on a surface that is already clean.

Boiling is effective for heat-stable materials, but it will deform PLA and PETG. Even PP can soften under load at 100 °C, because the printed HDT is much lower than the moulded service temperature. Do not boil a part unless the material's datasheet allows it and the part is unstressed.

### 9.3 Dishwashing

A dishwasher is better than hand washing at reducing bacteria in the studies that measured it, because it uses hotter water, stronger detergent and mechanical action. It is also harsher on the part. Repeated cycles can reduce impact strength and heat deflection temperature, especially for some PLA blends. The 2025 dishwasher study found degradation in NonOilen and little change in Polymaker PETG, but that is not a guarantee for every print.

PLA and PETG should not go in a dishwasher; the heat is close to or above their glass transition, and the detergent and mechanical action add stress. A coated part should not go in unless the coating's instructions allow it. If you do use a dishwasher, turn off the heated drying cycle and use a low-temperature programme, and inspect the part afterwards.

### 9.4 Acid, oil and heat

Acidic foods such as tomato, citrus, vinegar and wine can hydrolyse polyesters and increase migration. Oily foods penetrate pores and are hard to wash out. Hot foods increase migration and can soften the part. These are the three conditions to avoid, separately and together. A part that has held oil should not later be used for dry food without a thorough clean, because the oil can remain in the pores.

### 9.5 When to retire a part

Retire the part at the first sign of any of the following:

- a crack, chip, deep scratch or visible layer separation;
- a coating that is cloudy, tacky, cracked, chipped or missing;
- a surface that feels fuzzy or rough, or stains and odours that persist after washing;
- deformation or softening after hot water or hot food;
- a change in fit or finish after a dishwasher cycle;
- contact with raw meat, poultry, fish or eggs that you cannot be sure you have sanitised;
- months of repeated wet use.

The last point is a judgement, not a standard. A dry-food part can last a long time if it is kept clean and dry. A part that is washed every day is a consumable. Set a replacement date, write it on the part, and do not assume it will last indefinitely.

Do not use a kitchen oven to dry or anneal a food-contact print. The oven can transfer food residues and odours to the plastic, and the temperature control is poor. Use a dedicated filament dryer or a laboratory oven, and never use the same oven for food and plastic. The vault's [[11 - Annealing and Heat Treatment]] explains why most annealing needs an external oven and why a kitchen oven is a contamination risk.

## 10. Use cases: what is acceptable and what is not

The table below is deliberately direct. "Acceptable with care" means the risk can be managed for personal use with a suitable material, a cleanable design, good fusion and a cleaning routine. It does not mean the part is certified.

| Use | Verdict | Why | If you do it anyway |
| :--- | :--- | :--- | :--- |
| **Dry spices, dry rice or pasta, coffee beans, tea bags** | Acceptable with care. | Dry food has low water activity, so bacterial growth is limited. The risk is crumbs, dust and oils from hands. | Use a smooth PP or PETG part, clean and dry it before filling, keep it dry and do not use the same part for oily or wet food. |
| **Cookie cutters** | Short-life or single-use is safest. | They contact moist dough and raw flour, which can carry pathogens. The cut edge is rough and holds dough. | Use PETG or PP with smooth walls and no deep crevices. Wash and sanitise after each use. Retire when the edge feels rough. Do not sell food made with them without a proper food-safety review. |
| **Cold water or iced tea** | Short contact only. | Water is low-risk, but the part stays wet, and layer gaps can harbour biofilm. | Use a coated PP or PETG cup, drink within a short time, wash and dry daily, and avoid citrus or sugar-rich drinks left standing. |
| **Hot coffee, tea or soup** | No. | Heat increases migration and softens PLA and PETG. Coffee is also acidic and oily. | Use a ceramic, glass or stainless-steel vessel. A printed dry-bean scoop is fine; a printed brew basket or cup is not. |
| **Acidic foods: tomato sauce, citrus, vinegar, wine** | No. | Acid attacks polyesters and increases migration. Acetic acid is a standard food simulant for a reason. | Use glass or ceramic. If you must use a print, use a coated PP part for a short contact and retire it early. |
| **Oily foods: oil, butter, cheese, meat sauces** | No. | Oil penetrates pores and is hard to remove. Some food-grade declarations exclude fatty foods. | Use stainless steel or ceramic. A dry-food part that once held oil should be kept for non-food use. |
| **Raw meat, fish, poultry or eggs** | No. | Pathogens and cross-contamination. A porous print cannot be guaranteed clean. | Use a stainless-steel or ceramic board or plate. Keep printed parts out of the raw-meat zone. |
| **Baby bottles and infant feeding** | Never. | Infants are the most vulnerable group, and hot milk, sterilisation and migration all combine. | Use a certified glass or plastic baby bottle from a reputable brand. |
| **Pet bowls** | Stainless steel or ceramic is better. | Scratches and biofilm are likely, and pet saliva and food residue are difficult to remove. | If you use a print, use PP, smooth and coated, wash it daily and replace it at the first scratch. |
| **Microwave reheating** | No. | Hot spots, softening and increased migration. The part has not been tested for microwave conditions. | Use a microwave-safe glass or ceramic container. |
| **Dishwasher** | Only if the material and coating are rated. | Heat and detergent can warp the part and degrade layer adhesion. | Hand wash unless the datasheet or coating says dishwasher-safe. No PLA or PETG. |
| **Food moulds** | Use the print as a mould master, not as the food-contact surface. | A printed mould surface is porous and may not release cleanly. | Vacuum-form a food-grade HDPE sheet over the print, or cast a food-grade silicone mould. Do not pour food directly onto an uncoated print. |
| **Dry-ingredient utensils** | Acceptable with care. | Dry contact is lower risk, but the surface still needs cleaning. | Use a smooth, well-fused PP or PETG utensil. Do not use it for hot oil or acidic sauces. |
| **Plates and bowls for dry food** | Acceptable with care. | Dry contact and short duration. | Use a smooth part, clean and dry it, and do not use it for wet or hot food. |

Two use cases deserve a longer explanation.

**Cookie cutters** are the most common "food-safe 3D print" project, and they are a good example of the gap between a material certificate and a real use. The cutter touches dough, which is moist, and flour, which can carry pathogens. The cut edge is a thin, rough wall that holds dough and is difficult to clean. A printed cutter can be acceptable for personal use if it is made from PETG or PP, has smooth walls, is washed and sanitised after each use, and is retired when the edge roughens. It is not a good candidate for a commercial kitchen, where a stainless-steel cutter is cheap, durable and cleanable.

**Baby bottles** are the clearest "never". The infant is the most vulnerable consumer, the bottle holds hot milk for a long time, and the part would need repeated sterilisation. Even a material that is food-grade in bulk is not enough, because the printed surface is porous and the bottle is a complex shape with a teat, a thread and a vent. Use a certified baby bottle. The same logic applies to anything that goes into a child's mouth for a long period.

## 11. The U1 workflow

The U1 is a four-toolhead machine with a 300 °C nozzle limit, a 100 °C bed limit and a 60 °C chamber limit with community firmware. It is a good machine for PLA, PETG, PCTG, PP and TPU, and a poor machine for the high-temperature polymers that would make food contact easier. The workflow below is designed around those limits.

1. **Choose the material for the use, not for the label.** For dry food and short-contact cold items, PP, PETG or PCTG are the practical choices. For a display-only item, PLA is fine. For hot liquid or repeated wet use, none of them is a good choice.
2. **Dedicate a toolhead.** Pick one of the four toolheads for food filament and keep it for that use. Use the stock stainless-steel 0.4 mm hotend. Do not use a brass or unknown-alloy hotend. If you use a hardened-steel hotend, dedicate it and do not use it for abrasive or metal-filled materials.
3. **Dedicate a build plate.** Use a smooth PEI plate with no adhesive. Keep it separate from plates used with ABS slurry, glue stick, Magigoo, metal fill or carbon fibre. Clean it with warm water and mild dish soap, rinse and dry.
4. **Keep the filament clean and dry.** Use a dry box or a sealed bag with desiccant. Cut off contaminated filament. Do not store the food spool next to a sander or a workshop vacuum.
5. **Design for cleaning.** Use large radii, through-holes, drainage and removable parts. Avoid threads, blind holes and supports on the food-contact surface. Orient the food surface as a vertical wall or a top surface.
6. **Slice for fusion.** Use a 0.4 mm nozzle, 0.12–0.16 mm layers, four to six perimeters, 100% infill for small parts, a line width of 0.4–0.45 mm, a nozzle temperature at the upper end of the material's range and a slower outer wall. Dry the filament first. Do not use fuzzy skin.
7. **Print and inspect.** Purge until the extrusion is clear. Check the first layer. Look for gaps, under-extrusion, stringing and colour contamination. If the part has a rough bottom or a support scar on the food surface, reprint it.
8. **Post-process with care.** Remove supports carefully. Wet-sand only if necessary, and clean the dust afterwards. If you use a coating, apply it to a clean, dry part, follow the mix ratio and cure schedule, and inspect for bubbles and missed spots.
9. **Validate before use.** Wash the part, dry it, and inspect it under good light. A watertight test is useful for leaks but is not a food-safety test. If the part has a coating, check that it is fully cured and continuous.
10. **Label and track.** Write the material, the date and the coating on the part or in a notebook. Set a replacement date for repeated wet use. Retire the part at the first sign of damage.

The U1's chamber heater is not a steriliser. A 60 °C chamber is useful for printing PP, PCTG and some engineering materials, but it does not kill bacteria and it does not make a part food-safe. The machine's HEPA and carbon filtration is for emissions, not for food hygiene. The four toolheads reduce cross-contamination between materials, but they do not clean the shared bed, the nozzle exterior or the chamber.

The U1 also has no annealing oven. Do not try to anneal a food-contact part in a kitchen oven. If a material needs an anneal, use a dedicated oven and keep it away from food. The vault's [[11 - Annealing and Heat Treatment]] covers the schedules and the risks.

## 12. Resin printing and the "food-grade resin" claim

SLA and DLP printers produce a smooth surface that looks more food-safe than an FDM print. It is not. The liquid resin is a mixture of reactive monomers, oligomers and photoinitiators, and the printed part is only partially cured when it comes off the platform. It has to be washed and post-cured, and even then it can contain unreacted species. Formlabs states that none of its resins are food-safe unless the user takes additional steps, and that its resins are not approved for food or drink.

The term "food-grade resin" is used in two different ways. Sometimes it means a resin whose cured composition has been tested for food contact under a specific standard. Sometimes it means a resin that is biocompatible for a medical or dental application. Those are not the same claim. A biocompatible resin is tested for cytotoxicity or tissue contact, not for migration into food. A dental resin is not a food-safe cup.

Even a genuinely food-contact resin would not make every printed part food-safe. The part has a geometry, a surface finish, a post-cure history and a wear life. A smooth resin part can scratch, and the dust from a worn resin surface is not something you want in food. A resin part is also brittle in thin sections and can crack at a rim.

The safe use of resin printing in a food context is as a **mould master**, not as the food-contact surface. Print the shape, finish it, and use it to vacuum-form a food-grade HDPE sheet or to cast a platinum-cured silicone mould. The food then touches the HDPE or the silicone, not the resin. This is the approach Formlabs describes for chocolate moulds, and it is a better use of the technology than printing a cup.

If you do use a resin print near food, treat it as a non-contact object: a display piece, a mould master, a jig that holds a bag but does not touch the food. Do not put it in a dishwasher, do not scrub it, and do not serve food on it.

## 13. A decision checklist

Use this checklist before you print a food-contact part. If any answer is wrong, fix it or choose a different material.

1. **Is the food hot, wet, oily, acidic or for an infant?** If yes, stop. Use glass, ceramic or stainless steel.
2. **Does the filament have a declaration that covers the colour and the food type?** If no, do not use it for direct contact. A declaration for the base polymer is not enough.
3. **Is the design smooth, open, drainable and free of blind holes and threads?** If no, redesign it.
4. **Is the food-contact surface free of supports and plate adhesive?** If no, reorient the part or change the plate.
5. **Is the hotend stainless steel and dedicated to food filament?** If no, change it or dedicate another toolhead.
6. **Is the print hot enough, thick enough and fused enough?** If no, reprint with more perimeters, a smaller layer height and a higher nozzle temperature.
7. **Is the part coated and fully cured, or is it for dry use only?** If it is for wet use and uncoated, limit the use or coat it.
8. **Can you wash and dry it after every use?** If no, do not use it for food.
9. **Is it cracked, chipped, scratched, cloudy or deformed?** If yes, retire it.
10. **Are you selling the part or the food made with it?** If yes, do not call it food-safe without migration testing and legal review. For personal use, keep the claim modest.

## 14. What this note cannot tell you

No note can certify a printed part. Migration testing is specific to the material, the colour, the geometry, the food, the temperature and the contact time. A test on a flat coupon does not prove that a cup with a thread and a lid is safe. A test on one colour does not prove that another colour is safe. A test on one printer does not prove that another printer with a different nozzle and a different plate is safe.

The note can tell you which questions to ask, which materials are plausible on a U1, which uses are clearly bad ideas and how to reduce the risk. It cannot give you a guarantee. If you need a guarantee, use a certified product made from glass, ceramic or stainless steel, or commission migration testing on the exact part you intend to sell. If you are cooking for someone who is immunocompromised, pregnant or an infant, be more conservative than this note.

## 15. Related notes

- **The foundational guides:** [[00 - Filament Master Index]], [[01 - Drying Filament]], [[02 - Storing Filament]], [[03 - Combining Storing and Drying - Science and Rational Approach]], [[04 - Nozzles and Their Types]], [[05 - Layer Height and Nozzle Size]], [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]], [[07 - Print Speeds and Volumetric Flow]], [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]], [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]] and [[10 - Common Printing Issues, Debugging, and Physical Limits]].
- **The other new guides:** [[11 - Annealing and Heat Treatment]] covers the thermal cycles that a food-contact print should not attempt in a kitchen oven, and [[12 - Skin Contact and Body-Safe Printing]] covers the related but different question of prolonged skin contact.
- **PP and PETG:** [[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)]] and [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]] cover the two most practical food-contact materials on this machine.
- **PCTG and PET:** [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]] and [[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)]] explain the copolyester chemistry behind the migration limits.
- **PLA and TPU:** [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]] and [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]] cover the two materials whose food-contact claims are most often overstated.
- **Polycarbonate and bisphenols:** [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]] explains why polycarbonate is the usual bisphenol-containing polymer and why a "BPA-free" label needs checking.
- **High-temperature polymers:** [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)]] covers PEEK and the other materials that would be better food-contact choices but cannot be printed on the U1.
- **Filled filaments:** [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)]] and [[20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)]] explain why wood, stone and metal fillers are not food-contact improvements.

## 16. Sources

### Regulation and standards

1. [eCFR, 21 CFR Part 177, Indirect Food Additives: Polymers](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-177). The structure of the US polymer listings, including the sections for olefin polymers, polyethylene phthalates, polyurethanes, polyaryletherketones and polysulfones.
2. [eCFR, 21 CFR 177.1520, Olefin polymers](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-177/subpart-B/section-177.1520). The PP and PE listings, with density, melting point and extractable-fraction specifications.
3. [eCFR, 21 CFR 177.1630, Polyethylene phthalate polymers](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-177/subpart-B/section-177.1630). The PET and PET-copolyester listings and their conditions of use.
4. [European Commission, Food contact materials legislation](https://food.ec.europa.eu/food-safety/chemical-safety/food-contact-materials/legislation_en). The overall migration limit of 10 mg/dm² or 60 mg/kg, specific migration limits, food simulants, the Declaration of Compliance and the role of good manufacturing practice.
5. [Regulation (EU) No 10/2011, consolidated annexes](https://www.legislation.gov.uk/eur/2011/10/annexes/2025-04-01). Annex II with the antimony limit of 0.04 mg/kg, the lead and cadmium non-detect limits, the copper limit and the other metal restrictions.
6. [BfR, Detailed explanation of the BfR recommendations on food contact materials](https://www.bfr.bund.de/en/service/frequently-asked-questions/topic/detailed-explanation-bfr-recommendations-on-food-contact-materials/). Confirms that the recommendations are not legal norms, that they reflect §31 of the LFGB, and that the BfR does not issue certificates.
7. [US FDA, "Is It Really 'FDA Approved'?"](https://www.fda.gov/consumers/consumer-updates/it-really-fda-approved). The FDA approves food additives, not finished materials or products, and authorised additives must be used within their approved conditions.
8. [NSF, Food Equipment Standards and NSF/ANSI 51](https://www.nsf.org/nsf-standards/standards-portfolio/food-equipment-standards). The scope of NSF/ANSI 51 for materials and finishes in commercial food equipment. The page returned HTTP 403 to automated requests when checked, so it is listed as the authoritative scope but not counted as a verified 200 response.
9. [German LFGB, section 31](https://www.gesetze-im-internet.de/lfgb/__31.html). The German statutory prohibition on food contact materials that do not meet the Article 3(1) requirements of Regulation 1935/2004.

### Practical guides and supplier documents

10. [Prusa Knowledge Base, Food safe FDM printing](https://help.prusa3d.com/article/food-safe-fdm-printing_112313). Layer grooves as bacterial reservoirs, pigment uncertainty, the brass-nozzle problem, the place of epoxy coatings and the limits of SLA.
11. [Prusa Blog, How to make food-grade 3D printed models](https://blog.prusa3d.com/how-to-make-food-grade-3d-printed-models_40666/). The 14-day milk test, the difference between untreated, solvent-smoothed and epoxy-coated cups, the need for a full cure and the limits of coated parts with heat, chopping and dishwashing.
12. [Formlabs, The Essential Guide to Food Safe 3D Printing](https://formlabs.com/blog/guide-to-food-safe-3d-printing/). The distinction between food grade and food safe, migration, the limits of SLA resins, coating degradation and the equipment side of contamination.
13. [Bambu Lab Wiki, PLA Pure Advanced Printing Guide](https://wiki.bambulab.com/en/filament/pla-pure). A manufacturer's printed-part test under EU 10/2011 at 70 °C for two hours, with explicit limits above 60 °C, for acidic or alkaline liquids, for long immersion and for high-oil foods.
14. [Formfutura, Statement of Compliance for Centaur PP, natural](https://www.formfutura.com/web/content/281458?download=true). A real PP declaration that covers EU 10/2011 and FDA use, recommends against fatty foods and puts the finished-article testing duty on the customer.
15. [Filamentive, EU Declaration of Conformity for food contact materials](https://www.filamentive.com/wp-content/uploads/2024/09/Filamentive-EU-Declaration-of-Conformity-Version_-23-August-2024.pdf). A clear example of a declaration that applies solely to the filament and expressly does not extend to printed articles.
16. [Prusa Knowledge Base, PPSU](https://help.prusa3d.com/article/ppsu-polyphenylsulfone_789273). The 370–410 °C nozzle, 140–155 °C bed and 65 °C minimum chamber that place PPSU outside the U1 envelope.
17. [Victrex, Additive Manufacturing Filament Fusion Processing Guidelines](https://www.victrex.com/-/media/downloads/literature/victrex-am-processing-guide-en-10-2024.pdf). The 380–400 °C nozzle range, the 100–150 °C bed and the heated-chamber requirements for PEEK and PAEK, which the U1 cannot meet.
18. [igus, Food-safe filament wiki](https://www.igus.eu/3d-printing/wiki/food-safe-3d-printing-with-filament). An industrial view of food-contact filament, including the 65 °C permanent-service limit of one food-contact grade and the distinction between a material declaration and a printed part.

### Migration, microbiology and chemistry

19. [Food safety-based evaluation of 3D printed objects, Analecta Technica Szegedinensia (2023)](https://doi.org/10.14232/analecta.2023.4.1-9). The milk-cup test, the advantage of epoxy coating, the effect of boiling, the 80% reduction from antimicrobial filaments and the mixed result for layer height.
20. [Investigating the effect of dishwasher on 3D printed food-contact material, Progress in Agricultural Engineering Sciences (2025)](https://doi.org/10.1556/446.2025.00174). The comparison of hand washing and dishwashing, the regrowth after hand washing and the loss of impact strength and HDT after repeated dishwasher cycles.
21. [Bacterial biofilm growth on 3D-printed materials, PLOS ONE (2021)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8192718/). The dependence of biofilm formation on surface structure and hydrophobicity across eight PLA filaments.
22. [Variability in the inorganic composition of colored ABS and PLA filaments, SN Applied Sciences (2022)](https://doi.org/10.1007/s42452-022-05221-7). The metal content of commercial filaments varies by polymer, manufacturer and colour, with elements of concern including lead, cadmium, chromium, copper, antimony and tin.
23. [Dermal and oral exposure risks to heavy metals from 3D printing metal-fill thermoplastics, Science of the Total Environment (2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10653099/). Copper, tin and chromium leaching from metal-filled PLA and PLA/PHA, with some concentrations above drinking-water limits and increased release after UV weathering.
24. [EFSA, Bisphenol A and other bisphenols](https://www.efsa.europa.eu/en/topics/topic/bisphenol). The 2023 BPA re-evaluation, the 0.2 ng/kg body weight per day tolerable daily intake, the EU ban on BPA in food contact materials from 20 January 2025 and the separate status of BPS.
25. [European Commission, Plastic recycling and food contact materials](https://food.ec.europa.eu/food-safety/chemical-safety/food-contact-materials/plastic-recycling_en). The contamination risks of recycled plastic and the requirements of Regulation (EU) 2022/1616 for suitable recycling technologies and decontamination.
26. [European Commission, PFAS pollution](https://environment.ec.europa.eu/topics/chemicals/pfas-pollution_en). The uses of PFAS in food contact materials, the move toward a broad restriction and the PFAS limits for food-contact packaging from August 2026.

### Machine

27. [Snapmaker U1 specifications](https://www.snapmaker.com/en-US/snapmaker-u1/specs). Four toolheads, 270 × 270 × 270 mm build volume, 300 °C maximum nozzle temperature, 100 °C maximum bed temperature and the 32 mm³/s hotend flow benchmark.
28. [Snapmaker Wiki, Snapmaker U1 FAQ](https://wiki.snapmaker.com/en/FAQ/u1). The integrated stainless-steel hotend, the optional hardened-steel hotends and the machine's material envelope.

## 17. Videos

All titles below were checked through YouTube's oEmbed endpoint on 25 October 2026. Each video is attached only to the claim its title and content actually cover.

1. **Prusa 3D, "How to make food-safe 3D printed models"**. A short explanation of why ordinary prints are not food-safe and how a certified epoxy coating, a stainless nozzle and a full cure change the surface. It is the clearest video companion to the Prusa blog article.
   - [https://www.youtube.com/watch?v=D-SKMdlegdU](https://www.youtube.com/watch?v=D-SKMdlegdU)
2. **My Tech Fun, "About food safe 3D printing"**. A measured test of the main variables: filament type, colourants, nozzle material, bacteria in the layer gaps and a two-part food-grade epoxy coating. The bacterial results are shown at the end.
   - [https://www.youtube.com/watch?v=lFtMIo00tfY](https://www.youtube.com/watch?v=lFtMIo00tfY)
3. **My Tech Fun, "Testing antibacterial and antimicrobial filaments from food safety aspect"**. A direct comparison of Copper3D PLActive, Purement and Philament antibacterial PLA against ordinary Prusament PLA. It shows that an antimicrobial additive reduces colonies without solving the porosity problem.
   - [https://www.youtube.com/watch?v=tFAkOj3Q6rY](https://www.youtube.com/watch?v=tFAkOj3Q6rY)
4. **My Tech Fun, "3D printed objects coated with epoxy resin - but why?"**. A test of the claims made for epoxy coatings, including food safety, strength, shine, waterproofing and heat resistance. It is useful for separating the real benefits from the marketing.
   - [https://www.youtube.com/watch?v=ItJcpBjP2h0](https://www.youtube.com/watch?v=ItJcpBjP2h0)
5. **My Tech Fun, "Smoothing 3D printed object from Polysmooth™ for better cleaning - is it food safe?"**. A test of whether isopropyl-alcohol smoothing makes a print easier to clean. The result is a caution: a smoothed surface can become sticky and perform worse than an untreated one.
   - [https://www.youtube.com/watch?v=DcWiA-sqPnI](https://www.youtube.com/watch?v=DcWiA-sqPnI)
6. **My Tech Fun, "Is this another solution for food safe 3D printing? Nonoilen filament from Filamentum."**. A look at a heat-resistant PLA blend that can survive boiling water and a dishwasher, and at whether that makes it a better food-contact material.
   - [https://www.youtube.com/watch?v=qB3tgEEDTyc](https://www.youtube.com/watch?v=qB3tgEEDTyc)
7. **Slant 3D, "Is 3D Printing Food Safe?"**. An industrial printing service's view of the question, including the point that the answer depends on the product, the material and the process rather than on a single filament label.
   - [https://www.youtube.com/watch?v=g6U5jQXlWU4](https://www.youtube.com/watch?v=g6U5jQXlWU4)
8. **Slant 3D Print On Demand, "Stop Saying 3D Prints Aren't Food Safe"**. The counterpoint to the conservative view: with the right material, process controls and cleaning, some printed food-contact products can be safe. It is useful for seeing where the line actually is.
   - [https://www.youtube.com/watch?v=tB5gwyn8AjU](https://www.youtube.com/watch?v=tB5gwyn8AjU)
9. **How To Cook That, "Are 3D Printed Kitchen Gadgets Safe?"**. An independent food-safety review of printed kitchen gadgets, including the practical problems of layer lines, cleaning and food residue. It is not a printer review, which is why it is useful.
   - [https://www.youtube.com/watch?v=E7_QLuQK-p8](https://www.youtube.com/watch?v=E7_QLuQK-p8)
10. **Formlabs, "Material Scientist Answers Most Asked Resin Safety Questions"**. A materials scientist explains resin chemistry, sensitisation, ventilation, personal protective equipment and the difference between a safe resin and a safe printed part. It supports the resin section without pretending that a resin print is food-safe.
    - [https://www.youtube.com/watch?v=iNcmhUTnWBE](https://www.youtube.com/watch?v=iNcmhUTnWBE)
11. **David's IT Garage, "Food Safe 3D Printing - Material and Settings for PETG Cookie Cutter"**. A practical walk-through of a PETG cookie cutter, including the settings and the handling that a small food-contact print needs.
    - [https://www.youtube.com/watch?v=NFGD8KatoJ8](https://www.youtube.com/watch?v=NFGD8KatoJ8)
12. **Empty Nesters 3D Printing, "Affordable Bacteria Test for 3D Prints. Shocking Results!"**. A home-scale bacterial test of printed PLA utensils after food preparation and cleaning, compared with conventional utensils. It is not a laboratory study, but it shows the direction of the problem.
    - [https://www.youtube.com/watch?v=hS9Q0Mz1TXc](https://www.youtube.com/watch?v=hS9Q0Mz1TXc)
13. **Levi Creates, "Are 3D Prints Dishwasher Safe?"**. A dishwasher test of ordinary PLA and EU food-contact-certified PLA Pure. It is a useful demonstration of why a material certificate does not make a printed part dishwasher-safe.
    - [https://www.youtube.com/watch?v=peyFPu2nTK4](https://www.youtube.com/watch?v=peyFPu2nTK4)
14. **Epoxy DIY, "Is Epoxy Food Safe or FDA Approved? The Reality of 'Food Grade Epoxy'"**. An explanation of why a cured epoxy can be food-safe while the same product is not food-safe if it is mixed or cured incorrectly. It is a good practical warning about the gap between a label and a finished coating.
    - [https://www.youtube.com/watch?v=23hOMH8hskk](https://www.youtube.com/watch?v=23hOMH8hskk)
