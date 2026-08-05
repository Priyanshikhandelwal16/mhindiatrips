import fs from "fs";
import path from "path";

const STATES_FILE = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(STATES_FILE, "utf-8"));

// Map state slugs to local images
const STATE_IMAGES = {
  "rajasthan": "/images/rajasthan_fort_sunset.png",
  "delhi-agra": "/images/taj_mahal_sunrise.png",
  "kerala": "/images/kerala_backwaters_houseboat.png",
  "goa": "/images/goa.jpg",
  "varanasi": "/images/varanasi.jpg",
  "mumbai-maharashtra": "/images/maharashtra.jpg",
  "tamil-nadu": "/images/karanataka.jpg",
  "andaman-islands": "/images/andaman islands.jpg",
  "kashmir": "/images/himachal pradesh.jpg",
  "himachal-pradesh": "/images/himachal pradesh.jpg",
  "uttarakhand": "/images/uttarakhand.jpg",
  "punjab": "/images/uttar pradesh.jpg",
  "gujarat": "/images/gujarat.jpg",
  "madhya-pradesh": "/images/madhya pradesh.jpg",
  "karnataka": "/images/karanataka.jpg",
  "west-bengal": "/images/west bengal.jpg",
  "odisha": "/images/odisha.jpg",
  "assam": "/images/assam.jpg",
  "sikkim": "/images/meghalaya.jpg",
  "meghalaya": "/images/meghalaya.jpg",
  "uttar-pradesh": "/images/uttar pradesh.jpg",
  "maharashtra": "/images/maharashtra.jpg",
  "telangana": "/images/telangana.jpg",
  "andhra-pradesh": "/images/andhra pradesh.jpg",
  "bihar": "/images/bihar.jpg",
};

// Map city slugs to local images
const CITY_IMAGES = {
  "jaipur": "/images/Jaipur.jpg",
  "udaipur": "/images/Udaipur.jpg",
  "jodhpur": "/images/jodhpur.jpg",
  "jaisalmer": "/images/jaisalmer.jpg",
  "pushkar": "/images/Pushkar.jpg",
  "ranthambore": "/images/ranthambore new.jpg",
  "mount-abu": "/images/mount abu.jpg",
  "bikaner": "/images/bikaner.jpg",
  "north-goa": "/images/north goa.jpg",
  "south-goa": "/images/south goa.jpg",
  "old-goa": "/images/old goa.jpg",
  "varanasi-city": "/images/varansi city.jpg",
  "sarnath": "/images/sarnath.jpg",
  "kochi": "/images/kochi.jpg",
  "munnar": "/images/munnar.jpg",
  "alleppey": "/images/alleppye.jpg",
  "thekkady": "/images/thekaddy.jpg",
  "varkala": "/images/varkala.jpg",
  "kovalam": "/images/kovalam.jpg",
  "wayanad": "/images/wayanad.jpg",
  "hampi": "/images/hampi-ruins.jpg",
};

// Update state images
for (const state of states) {
  if (STATE_IMAGES[state.slug]) {
    state.image = STATE_IMAGES[state.slug];
  }
  
  // Update city images
  if (state.cities) {
    for (const city of state.cities) {
      if (CITY_IMAGES[city.slug]) {
        city.image = CITY_IMAGES[city.slug];
      }
    }
  }
}

fs.writeFileSync(STATES_FILE, JSON.stringify(states, null, 2), "utf-8");
console.log("Done! Updated state and city images.");
