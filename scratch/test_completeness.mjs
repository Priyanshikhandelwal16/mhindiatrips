import fs from 'fs';
import path from 'path';

const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const delhiIds = ['new-delhi', 'old-delhi', 'mehrauli', 'dwarka', 'hauz-khas', 'saket', 'rohini'];

const checkCityCompleteness = (city) => {
  const locales = ["en", "es", "pt"];
  const status = { en: false, es: false, pt: false };
  
  locales.forEach(l => {
    const nameVal = typeof city.name === "object" ? city.name?.[l] : (l === "en" ? city.name : "");
    const hasName = !!nameVal;
    
    const shortDescVal = (typeof city.description === "object" && city.description?.[l]) || 
                         (typeof city.shortDescription === "object" && city.shortDescription?.[l]) || 
                         (typeof city.description === "string" ? city.description : "");
    const hasShortDesc = !!shortDescVal;
    
    const contentVal = (typeof city.content === "object" && city.content?.[l]) || 
                       (typeof city.overview === "object" && city.overview?.[l]) || 
                       (typeof city.fullDescription === "object" && city.fullDescription?.[l]) || 
                       (typeof city.content === "string" ? city.content : "");
    const hasContent = !!contentVal && contentVal.length > 20;
    
    const seoVal = (typeof city.seoTitle === "object" && city.seoTitle?.[l]) || 
                   (typeof city.seoTitle === "string" ? city.seoTitle : "") || 
                   hasName;
    const hasSeoTitle = !!seoVal;
    
    status[l] = hasName && hasShortDesc && hasContent && hasSeoTitle;
  });
  
  return status;
};

console.log("=== DELHI CITIES TRANSLATION STATUS ===");
for (const city of cities.filter(c => delhiIds.includes(c.id))) {
  console.log(`${city.id}:`, checkCityCompleteness(city));
}
