import fs from "fs";

const file = "src/data/fallback/states.json";
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "goa");

// Fix format for all Goa cities to match admin panel + website expected structure
for (const city of states[idx].cities) {
  if (city.slug === "panaji") continue; // Panaji already has correct format
  
  console.log("Fixing:", city.slug);
  
  // 1. Fix HIGHLIGHTS: website expects { title: {en,es,pt}, desc: {en,es,pt} }
  // Our data has: { en: "Title — Description", es: "...", pt: "..." }
  if (city.highlights && city.highlights.length > 0) {
    city.highlights = city.highlights.map((hl, i) => {
      if (hl.title) return hl; // Already correct format
      // Split "Title — Description" or just use whole text as title
      const splitText = (text) => {
        if (!text) return { title: "", desc: "" };
        const parts = text.split(" — ");
        if (parts.length >= 2) {
          return { title: parts[0], desc: parts.slice(1).join(" — ") };
        }
        return { title: text, desc: "" };
      };
      const en = splitText(hl.en);
      const es = splitText(hl.es);
      const pt = splitText(hl.pt);
      return {
        title: { en: en.title, es: es.title, pt: pt.title },
        desc: { en: en.desc, es: es.desc, pt: pt.desc },
        image: "",
        icon: "Check",
        displayOrder: i + 1,
        isActive: true
      };
    });
  }
  
  // 2. Fix THINGS TO DO: admin expects { name: {en,es,pt}, desc: {en,es,pt}, duration: "", ... }
  // Our data has: { en: "Activity — Description", es: "...", pt: "..." }
  if (city.thingsToDo && city.thingsToDo.length > 0) {
    city.thingsToDo = city.thingsToDo.map((todo, i) => {
      if (todo.name) return todo; // Already correct format
      const splitText = (text) => {
        if (!text) return { name: "", desc: "" };
        const parts = text.split(" — ");
        if (parts.length >= 2) {
          return { name: parts[0], desc: parts.slice(1).join(" — ") };
        }
        return { name: text, desc: "" };
      };
      const en = splitText(todo.en);
      const es = splitText(todo.es);
      const pt = splitText(todo.pt);
      return {
        name: { en: en.name, es: es.name, pt: pt.name },
        desc: { en: en.desc, es: es.desc, pt: pt.desc },
        image: "",
        duration: "",
        price: "",
        difficulty: "Easy",
        isFeatured: false,
        displayOrder: i + 1
      };
    });
  }
  
  // 3. Fix EXPERIENCES: admin expects { name: {en,es,pt}, desc: {en,es,pt} }
  // Our data already has this format - just verify
  if (city.experiences && city.experiences.length > 0) {
    city.experiences = city.experiences.map((exp, i) => {
      if (exp.name && exp.desc) return exp; // Already correct
      return exp;
    });
  }
  
  // 4. Fix TRAVEL TIPS: admin expects { en: "...", es: "...", pt: "..." } as array items
  // Our data already has this - no change needed
  
  // 5. Fix FAQS: admin expects { q: {en,es,pt}, a: {en,es,pt} }
  // Our data already has this - no change needed
  
  // 6. Fix GETTING AROUND: admin expects { transportType, title: {en,es,pt}, desc: {en,es,pt}, recommended }
  // Our data already has this - no change needed
  
  // 7. Fix HOTELS: admin expects { name, tier, desc: {en,es,pt}, image }
  // Our data already has this - no change needed
  
  // 8. Ensure 'title' field exists (admin uses city.title, not city.name)
  if (!city.title && city.name) {
    city.title = city.name;
  }
  
  // 9. Ensure 'fullDescription' exists (website uses city.fullDescription || city.overview)
  if (!city.fullDescription && city.overview) {
    city.fullDescription = city.overview;
  }
  
  // 10. Ensure 'tagline' exists
  if (!city.tagline) {
    city.tagline = city.shortDescription || { en: "", es: "", pt: "" };
  }
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");

// Verify
const v = JSON.parse(fs.readFileSync(file, "utf-8"));
const goa = v.find(s => s.slug === "goa");
console.log("\n=== VERIFICATION ===");
for (const c of goa.cities) {
  const hl0 = c.highlights?.[0];
  const td0 = c.thingsToDo?.[0];
  console.log(`\n${c.slug}:`);
  console.log(`  title: ${c.title?.en}`);
  console.log(`  highlight[0].title: ${hl0?.title?.en || "MISSING"}`);
  console.log(`  highlight[0].desc: ${hl0?.desc?.en?.substring(0,40) || "MISSING"}`);
  console.log(`  thingsToDo[0].name: ${td0?.name?.en?.substring(0,40) || "MISSING"}`);
  console.log(`  thingsToDo[0].desc: ${td0?.desc?.en?.substring(0,40) || "MISSING"}`);
  console.log(`  faqs[0].q: ${c.faqs?.[0]?.q?.en?.substring(0,40) || "MISSING"}`);
  console.log(`  experiences[0].name: ${c.experiences?.[0]?.name?.en?.substring(0,30) || "MISSING"}`);
  console.log(`  hotels[0].name: ${c.hotels?.[0]?.name || "MISSING"}`);
  console.log(`  fullDescription: ${c.fullDescription?.en?.substring(0,40) || "MISSING"}`);
}
console.log("\nDONE!");
