import fs from "fs";
import path from "path";
const file = path.join(process.cwd(), "src/data/fallback/states.json");
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "kerala");
if (idx === -1) { console.log("Kerala not found!"); process.exit(1); }

const cityUpdates = {
  munnar: {
    overview: { en: "Munnar is one of Kerala's most beautiful hill destinations, surrounded by rolling tea plantations, mist-covered mountains, lush forests and cool mountain air. Located in the Western Ghats, the region is known for its scenic landscapes, tea gardens, waterfalls and rich biodiversity. Munnar is ideal for travellers looking for a peaceful escape, romantic getaway, nature adventure or a closer connection with Kerala's highland culture.", es: "Munnar es uno de los destinos de montaña más hermosos de Kerala, rodeado de plantaciones de té, montañas cubiertas de niebla, bosques verdes y un agradable clima de montaña.", pt: "Munnar é um dos destinos de montanha mais bonitos de Kerala, cercado por plantações de chá, montanhas cobertas de neblina, florestas verdes e um agradável clima de montanha." },
    thingsToDo: [
      { en: "Explore tea gardens and learn about Kerala's tea-growing traditions", es: "Camina por las plantaciones de té y descubre las tradiciones del cultivo", pt: "Caminhe pelas plantações de chá e conheça as tradições de cultivo" },
      { en: "Visit Eravikulam National Park — mountain landscapes and biodiversity", es: "Explora los paisajes montañosos y la biodiversidad de Eravikulam", pt: "Explore as paisagens montanhosas e a biodiversidade de Eravikulam" },
      { en: "Visit Mattupetty Dam — lake, mountain scenery and peaceful surroundings", es: "Disfruta del lago y las montañas de Mattupetty", pt: "Aprecie o lago e as montanhas de Mattupetty" },
      { en: "Explore Tea Museum — history and production of Munnar tea", es: "Conoce la historia y producción del té en Munnar", pt: "Conheça a história e produção do chá em Munnar" },
      { en: "Visit Top Station — panoramic Western Ghats views", es: "Disfruta de vistas panorámicas de los Ghats Occidentales", pt: "Aprecie vistas panorâmicas dos Gates Ocidentais" }
    ],
    experiences: [
      { name: { en: "Tea Plantation Experience", es: "Experiencia en Plantación de Té", pt: "Experiência em Plantação de Chá" }, desc: { en: "Walk through tea estates and discover how tea is cultivated and processed while enjoying mountain views.", es: "Recorre las plantaciones y descubre cómo se cultiva y procesa el té.", pt: "Caminhe pelas plantações e descubra como o chá é cultivado e processado." } },
      { name: { en: "Romantic Mountain Escape", es: "Escapada Romántica de Montaña", pt: "Escapada Romântica na Montanha" }, desc: { en: "Enjoy misty mornings, scenic viewpoints, cosy stays and peaceful landscapes.", es: "Disfruta de mañanas con niebla, miradores y paisajes tranquilos.", pt: "Desfrute de manhãs com neblina, mirantes e paisagens tranquilas." } },
      { name: { en: "Nature & Wildlife Experience", es: "Experiencia de Naturaleza", pt: "Experiência de Natureza" }, desc: { en: "Discover Munnar's forests, mountain ecosystems and diverse wildlife through guided excursions.", es: "Descubre los bosques y fauna de Munnar mediante excursiones guiadas.", pt: "Descubra as florestas e fauna de Munnar através de excursões guiadas." } },
      { name: { en: "Kerala Wellness Experience", es: "Experiencia de Bienestar Kerala", pt: "Experiência de Bem-estar Kerala" }, desc: { en: "Combine Munnar's peaceful mountain environment with Ayurvedic wellness and traditional therapies.", es: "Combina el entorno montañoso con bienestar ayurvédico.", pt: "Combine o ambiente montanhoso com bem-estar ayurvédico." } },
      { name: { en: "Mountain Photography Experience", es: "Experiencia Fotográfica de Montaña", pt: "Experiência Fotográfica de Montanha" }, desc: { en: "Capture tea plantations, misty valleys, waterfalls and dramatic Western Ghats landscapes.", es: "Fotografía plantaciones, valles con niebla y cascadas.", pt: "Fotografe plantações, vales com neblina e cachoeiras." } }
    ],
    localFood: { en: "Try Appam with Vegetable Stew, Puttu & Kadala Curry, Kerala Sadya, Kerala Parotta with Curry, and Pazham Pori (banana fritters).", es: "Pruebe Appam con Stew, Puttu & Kadala Curry, Kerala Sadya, Parotta y Pazham Pori.", pt: "Prove Appam com Stew, Puttu & Kadala Curry, Kerala Sadya, Parotta e Pazham Pori." },
    hotels: [
      { name: "Luxury Mountain Resorts", tier: "Luxury", desc: { en: "Panoramic views, premium facilities and peaceful surroundings.", es: "Vistas panorámicas y servicios premium.", pt: "Vistas panorâmicas e serviços premium." }, image: "" },
      { name: "Tea Estate Resorts", tier: "Boutique", desc: { en: "Stay among working tea plantations for an immersive experience.", es: "Alojamiento inmersivo en plantaciones de té.", pt: "Hospedagem imersiva em plantações de chá." }, image: "" },
      { name: "Nature Retreats", tier: "Mid-Range", desc: { en: "Peaceful stays surrounded by forests and mountain landscapes.", es: "Estancias tranquilas rodeadas de naturaleza.", pt: "Estadias tranquilas cercadas de natureza." }, image: "" }
    ],
    travelTips: [
      { en: "Carry light warm clothing — temperatures can drop in mornings and evenings.", es: "Lleva ropa ligera de abrigo para mañanas y noches.", pt: "Leve roupas leves e quentes para manhãs e noites." },
      { en: "Wear comfortable shoes for tea plantations and nature walks.", es: "Usa calzado cómodo para plantaciones y caminatas.", pt: "Use calçados confortáveis para plantações e caminhadas." },
      { en: "Carry rain protection during monsoon and changing-weather periods.", es: "Lleva protección para la lluvia durante el monzón.", pt: "Leve proteção contra chuva durante a monção." },
      { en: "Start sightseeing early for clearer mountain views.", es: "Comienza temprano para mejores vistas.", pt: "Comece cedo para melhores vistas." },
      { en: "Respect wildlife and avoid leaving waste in natural areas.", es: "Respeta la fauna y no dejes residuos.", pt: "Respeite a vida selvagem e não deixe resíduos." }
    ],
    gettingAround: [
      { transportType: "Private Car", title: { en: "Private Car & Taxi", es: "Coche Privado y Taxi", pt: "Carro Particular e Táxi" }, desc: { en: "Most comfortable option for exploring Munnar. Walking ideal for tea plantations and local markets.", es: "La opción más cómoda. Caminar ideal para plantaciones.", pt: "A opção mais confortável. Caminhada ideal para plantações." }, recommended: true }
    ]
  },
  "alleppey-alappuzha": {
    overview: { en: "Alleppey, officially known as Alappuzha, is Kerala's iconic backwater destination, famous for its peaceful waterways, lush paddy fields, coconut palms and traditional houseboat experiences. A stay on a traditional houseboat allows travellers to glide through narrow canals, watch everyday life along the waterways and enjoy freshly prepared Kerala cuisine surrounded by tropical landscapes.", es: "Alleppey es el destino más emblemático de los backwaters de Kerala, famoso por sus tranquilos canales, arrozales y casas flotantes tradicionales.", pt: "Alleppey é o destino mais famoso dos backwaters de Kerala, conhecido por seus tranquilos canais, campos de arroz e tradicionais casas-barco." },
    thingsToDo: [
      { en: "Stay on a traditional Kerala houseboat cruising through backwaters", es: "Pasa un día o noche en una casa flotante tradicional", pt: "Passe um dia ou noite em uma casa-barco tradicional" },
      { en: "Cruise narrow canals, lagoons and scenic waterways by boat", es: "Explora canales estrechos y lagunas en barco", pt: "Explore canais estreitos e lagoas de barco" },
      { en: "Explore Alappuzha Beach and the famous pier", es: "Relájate en la playa y el famoso muelle", pt: "Relaxe na praia e no famoso píer" },
      { en: "Visit local villages — traditional homes and farming communities", es: "Descubre casas tradicionales y comunidades agrícolas", pt: "Conheça casas tradicionais e comunidades agrícolas" },
      { en: "Enjoy Kerala culinary experience — fresh seafood and traditional dishes", es: "Prueba mariscos frescos y platos tradicionales", pt: "Experimente frutos do mar frescos e pratos tradicionais" }
    ],
    experiences: [
      { name: { en: "Luxury Houseboat Experience", es: "Experiencia en Casa Flotante de Lujo", pt: "Experiência em Casa-Barco de Luxo" }, desc: { en: "Private houseboat journey with comfortable rooms, traditional meals and peaceful backwater views.", es: "Viaje privado con habitaciones cómodas y comidas tradicionales.", pt: "Viagem privada com quartos confortáveis e refeições tradicionais." } },
      { name: { en: "Romantic Backwater Experience", es: "Experiencia Romántica en Backwaters", pt: "Experiência Romântica nos Backwaters" }, desc: { en: "Sunset cruises, candlelit dinners and peaceful waterways for romantic escape.", es: "Cruceros al atardecer y cenas románticas.", pt: "Passeios ao pôr do sol e jantares românticos." } },
      { name: { en: "Village Life Experience", es: "Experiencia de Vida Rural", pt: "Experiência de Vida Rural" }, desc: { en: "Discover authentic rhythm of Kerala's rural communities and traditional waterways.", es: "Descubre el ritmo de las comunidades rurales.", pt: "Descubra o ritmo das comunidades rurais." } },
      { name: { en: "Kerala Wellness Experience", es: "Experiencia de Bienestar", pt: "Experiência de Bem-estar" }, desc: { en: "Combine backwater stay with Ayurveda, traditional wellness and relaxation.", es: "Combina tu estancia con Ayurveda y relajación.", pt: "Combine sua estadia com Ayurveda e relaxamento." } },
      { name: { en: "Backwater Photography Experience", es: "Experiencia Fotográfica", pt: "Experiência Fotográfica" }, desc: { en: "Capture houseboats, coconut palms, village life, waterways and colourful sunsets.", es: "Fotografía casas flotantes, palmeras y atardeceres.", pt: "Fotografe casas-barco, coqueiros e entardeceres." } }
    ],
    localFood: { en: "Try Karimeen Pollichathu, Appam with Stew, Kerala Sadya, Kerala Fish Curry, and Puttu & Kadala Curry.", es: "Pruebe Karimeen Pollichathu, Appam con Stew, Kerala Sadya, Fish Curry y Puttu.", pt: "Prove Karimeen Pollichathu, Appam com Stew, Kerala Sadya, Fish Curry e Puttu." },
    hotels: [
      { name: "Luxury Houseboats", tier: "Luxury", desc: { en: "The ultimate Alleppey experience — private rooms, meals and backwater cruising.", es: "La experiencia clásica con habitaciones y comidas.", pt: "A experiência clássica com quartos e refeições." }, image: "" },
      { name: "Premium Backwater Resorts", tier: "Luxury", desc: { en: "Comfort, pools, wellness facilities and scenic waterways.", es: "Comodidad, piscinas y vistas.", pt: "Conforto, piscinas e vistas." }, image: "" },
      { name: "Homestays", tier: "Mid-Range", desc: { en: "Authentic local hospitality, home-cooked food and village life.", es: "Hospitalidad local y comida casera.", pt: "Hospitalidade local e comida caseira." }, image: "" }
    ],
    travelTips: [
      { en: "Book your houseboat in advance, especially during peak travel periods.", es: "Reserva tu casa flotante con anticipación.", pt: "Reserve sua casa-barco com antecedência." },
      { en: "Choose a reputable houseboat operator and confirm inclusions before booking.", es: "Elige un operador de confianza.", pt: "Escolha uma operadora confiável." },
      { en: "Carry mosquito repellent, sunscreen and light breathable clothing.", es: "Lleva repelente, protector solar y ropa ligera.", pt: "Leve repelente, protetor solar e roupas leves." },
      { en: "Respect local communities and avoid littering in the waterways.", es: "Respeta las comunidades y no tires basura.", pt: "Respeite as comunidades e não jogue lixo." },
      { en: "A sunset or overnight cruise offers a more immersive experience.", es: "Un crucero nocturno es más completo.", pt: "Um passeio noturno é mais completo." }
    ],
    gettingAround: [
      { transportType: "Houseboat", title: { en: "Houseboat, Shikara & Private Car", es: "Casa Flotante, Shikara y Coche", pt: "Casa-Barco, Shikara e Carro" }, desc: { en: "Houseboat for backwaters. Shikara for narrow canals. Private car for transfers and beaches.", es: "Casa flotante para backwaters. Shikara para canales. Coche para traslados.", pt: "Casa-barco para backwaters. Shikara para canais. Carro para traslados." }, recommended: true }
    ]
  }
};

for (const [citySlug, updates] of Object.entries(cityUpdates)) {
  const cityIdx = states[idx].cities.findIndex(c => c.slug === citySlug);
  if (cityIdx === -1) { console.log(`  City ${citySlug} not found, skipping`); continue; }
  if (updates.overview) states[idx].cities[cityIdx].overview = updates.overview;
  if (updates.thingsToDo) states[idx].cities[cityIdx].thingsToDo = updates.thingsToDo;
  if (updates.experiences) states[idx].cities[cityIdx].experiences = updates.experiences;
  if (updates.localFood) states[idx].cities[cityIdx].localFood = updates.localFood;
  if (updates.hotels) states[idx].cities[cityIdx].hotels = updates.hotels;
  if (updates.travelTips) states[idx].cities[cityIdx].travelTips = updates.travelTips;
  if (updates.gettingAround) states[idx].cities[cityIdx].gettingAround = updates.gettingAround;
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");
console.log("✅ Kerala cities updated:");
states[idx].cities.forEach(c => {
  console.log(`   - ${c.slug}: thingsToDo=${Array.isArray(c.thingsToDo)?c.thingsToDo.length:'OBJ'}, experiences=${(c.experiences||[]).length}, hotels=${(c.hotels||[]).length}, tips=${(c.travelTips||[]).length}`);
});
