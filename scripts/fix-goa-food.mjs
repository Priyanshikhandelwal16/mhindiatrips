import fs from "fs";

const file = "src/data/fallback/states.json";
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "goa");

const foodData = {
  "old-goa": [
    { name: { en: "Goan Fish Curry", es: "Curry de Pescado Goano", pt: "Curry de Peixe Goano" }, desc: { en: "Coconut-based fish curry with regional spices.", es: "Curry de pescado con coco y especias regionales.", pt: "Curry de peixe com coco e especiarias regionais." }, isVeg: false, recommended: true },
    { name: { en: "Prawn Balch\u00e3o", es: "Prawn Balch\u00e3o", pt: "Prawn Balch\u00e3o" }, desc: { en: "Spicy and tangy prawn preparation.", es: "Gambas picantes y \u00e1cidas.", pt: "Camar\u00f5es picantes e arom\u00e1ticos." }, isVeg: false, recommended: true },
    { name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" }, desc: { en: "Herb and spice-rich chicken preparation.", es: "Pollo con hierbas y especias.", pt: "Frango com ervas e especiarias." }, isVeg: false, recommended: true },
    { name: { en: "Pork Vindaloo", es: "Pork Vindaloo", pt: "Pork Vindaloo" }, desc: { en: "Tangy Goan-Portuguese meat dish.", es: "Plato de carne con influencia portuguesa.", pt: "Prato de carne de influ\u00eancia portuguesa." }, isVeg: false, recommended: true },
    { name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" }, desc: { en: "Traditional layered dessert.", es: "Postre tradicional en capas.", pt: "Sobremesa tradicional em camadas." }, isVeg: true, recommended: true }
  ],
  "south-goa": [
    { name: { en: "Goan Fish Curry", es: "Curry de Pescado Goano", pt: "Curry de Peixe Goano" }, desc: { en: "Coconut-based fish curry.", es: "Curry de pescado con coco.", pt: "Curry de peixe com coco." }, isVeg: false, recommended: true },
    { name: { en: "Prawn Balch\u00e3o", es: "Prawn Balch\u00e3o", pt: "Prawn Balch\u00e3o" }, desc: { en: "Spicy and tangy prawns.", es: "Gambas picantes y \u00e1cidas.", pt: "Camar\u00f5es picantes e arom\u00e1ticos." }, isVeg: false, recommended: true },
    { name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" }, desc: { en: "Green herb and spice chicken.", es: "Pollo con hierbas verdes y especias.", pt: "Frango com ervas verdes e especiarias." }, isVeg: false, recommended: true },
    { name: { en: "Sorpotel", es: "Sorpotel", pt: "Sorpotel" }, desc: { en: "Traditional Goan meat preparation with Portuguese influence.", es: "Preparaci\u00f3n tradicional de carne con influencia portuguesa.", pt: "Prepara\u00e7\u00e3o tradicional de carne com influ\u00eancia portuguesa." }, isVeg: false, recommended: true },
    { name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" }, desc: { en: "Traditional layered Goan dessert.", es: "Postre tradicional en capas.", pt: "Sobremesa tradicional em camadas." }, isVeg: true, recommended: true }
  ],
  "north-goa": [
    { name: { en: "Fish Thali", es: "Fish Thali", pt: "Fish Thali" }, desc: { en: "Traditional meal with rice, fish curry and local sides.", es: "Comida tradicional con arroz, curry de pescado y acompa\u00f1amientos.", pt: "Refei\u00e7\u00e3o tradicional com arroz, curry de peixe e acompanhamentos." }, isVeg: false, recommended: true },
    { name: { en: "Goan Prawn Curry", es: "Curry de Gambas Goano", pt: "Curry de Camar\u00e3o Goano" }, desc: { en: "Prawns cooked in a fragrant coconut-based curry.", es: "Gambas cocinadas en un arom\u00e1tico curry de coco.", pt: "Camar\u00f5es preparados em um arom\u00e1tico curry de coco." }, isVeg: false, recommended: true },
    { name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" }, desc: { en: "Chicken cooked with green herbs and spices.", es: "Pollo preparado con hierbas verdes y especias.", pt: "Frango preparado com ervas verdes e especiarias." }, isVeg: false, recommended: true },
    { name: { en: "Pork Vindaloo", es: "Pork Vindaloo", pt: "Pork Vindaloo" }, desc: { en: "Famous tangy and spicy Goan-Portuguese preparation.", es: "Famosa preparaci\u00f3n picante y \u00e1cida de influencia portuguesa.", pt: "Famosa prepara\u00e7\u00e3o picante e \u00e1cida de influ\u00eancia portuguesa." }, isVeg: false, recommended: true },
    { name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" }, desc: { en: "Traditional layered coconut-based dessert.", es: "Postre tradicional en capas a base de coco.", pt: "Sobremesa tradicional em camadas \u00e0 base de coco." }, isVeg: true, recommended: true }
  ]
};

for (const [slug, dishes] of Object.entries(foodData)) {
  const ci = states[idx].cities.findIndex(c => c.slug === slug);
  if (ci === -1) { console.log("NOT FOUND:", slug); continue; }
  states[idx].cities[ci].localFoodDishes = dishes.map((d, i) => ({
    ...d,
    image: "",
    whereToTry: "",
    displayOrder: i + 1
  }));
  console.log("Added localFoodDishes to:", slug, "->", dishes.length, "dishes");
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");
console.log("DONE!");
