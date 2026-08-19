import fs from "fs";

const file = "src/data/fallback/states.json";
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "goa");
if (idx === -1) { console.error("Goa not found!"); process.exit(1); }

// OLD GOA
const oldGoa = {
  name: { en: "Old Goa", es: "Old Goa", pt: "Old Goa" },
  slug: "old-goa",
  shortDescription: {
    en: "Old Goa is the historic heart of Goa\u2019s Portuguese-era heritage, famous for its magnificent churches, basilicas and centuries-old monuments.",
    es: "Old Goa es el coraz\u00f3n hist\u00f3rico del patrimonio portugu\u00e9s de Goa, famoso por sus magn\u00edficas iglesias, bas\u00edlicas y monumentos centenarios.",
    pt: "Old Goa \u00e9 o cora\u00e7\u00e3o hist\u00f3rico do patrim\u00f4nio portugu\u00eas de Goa, famoso por suas magn\u00edficas igrejas, bas\u00edlicas e monumentos centen\u00e1rios."
  },
  overview: {
    en: "Old Goa is one of the most important heritage destinations in the region and is home to a remarkable collection of historic churches and religious monuments. The Basilica of Bom Jesus, S\u00e9 Cathedral and other churches form an extraordinary heritage landscape that reflects Goa\u2019s centuries-long Portuguese influence.",
    es: "Old Goa es uno de los destinos patrimoniales m\u00e1s importantes de la regi\u00f3n y alberga una extraordinaria colecci\u00f3n de iglesias y monumentos religiosos hist\u00f3ricos. La Bas\u00edlica del Buen Jes\u00fas, la Catedral de S\u00e9 y otras iglesias reflejan siglos de influencia portuguesa.",
    pt: "Old Goa \u00e9 um dos destinos de patrim\u00f4nio mais importantes da regi\u00e3o e abriga uma extraordin\u00e1ria cole\u00e7\u00e3o de igrejas e monumentos religiosos hist\u00f3ricos. A Bas\u00edlica do Bom Jesus, a S\u00e9 Catedral e outras igrejas refletem s\u00e9culos de influ\u00eancia portuguesa."
  },
  highlights: [
    { en: "Basilica of Bom Jesus \u2014 Explore one of Goa\u2019s most important historic churches.", es: "Bas\u00edlica del Buen Jes\u00fas \u2014 Una de las iglesias m\u00e1s importantes.", pt: "Bas\u00edlica do Bom Jesus \u2014 Uma das igrejas mais importantes." },
    { en: "S\u00e9 Cathedral \u2014 Admire its grand scale and historic architecture.", es: "Catedral de S\u00e9 \u2014 Admira su arquitectura grandiosa.", pt: "S\u00e9 Catedral \u2014 Admire sua arquitetura grandiosa." },
    { en: "Church of St. Francis of Assisi \u2014 Discover beautiful religious art.", es: "Iglesia de San Francisco \u2014 Arte religioso.", pt: "Igreja de S\u00e3o Francisco \u2014 Arte religiosa." },
    { en: "Historic Church Complex \u2014 Colonial-era religious monuments.", es: "Complejo hist\u00f3rico de iglesias coloniales.", pt: "Complexo hist\u00f3rico de igrejas coloniais." },
    { en: "UNESCO Heritage Atmosphere \u2014 Historic architecture and religious heritage.", es: "Atm\u00f3sfera patrimonial UNESCO.", pt: "Atmosfera patrimonial UNESCO." }
  ],
  thingsToDo: [
    { en: "Explore Basilica of Bom Jesus", es: "Explorar la Bas\u00edlica del Buen Jes\u00fas", pt: "Explorar a Bas\u00edlica do Bom Jesus" },
    { en: "Visit S\u00e9 Cathedral", es: "Visitar la Catedral de S\u00e9", pt: "Visitar a S\u00e9 Catedral" },
    { en: "Walk through the Old Goa Church Complex", es: "Recorrer el complejo de iglesias de Old Goa", pt: "Percorrer o complexo de igrejas de Old Goa" },
    { en: "Visit the Archaeological Museum", es: "Visitar el Museo Arqueol\u00f3gico", pt: "Visitar o Museu Arqueol\u00f3gico" },
    { en: "Combine Old Goa with nearby Panaji and Fontainhas", es: "Combinar con Panaji y Fontainhas", pt: "Combinar com Panaji e Fontainhas" }
  ],
  experiences: [
    { name: { en: "Heritage Walking Tour", es: "Paseo Hist\u00f3rico", pt: "Passeio Hist\u00f3rico" }, desc: { en: "Discover Old Goa\u2019s religious and architectural history.", es: "Descubre la historia religiosa y arquitect\u00f3nica.", pt: "Conhe\u00e7a a hist\u00f3ria religiosa e arquitet\u00f4nica." } },
    { name: { en: "Church Architecture Tour", es: "Tour Arquitect\u00f3nico", pt: "Tour Arquitet\u00f4nico" }, desc: { en: "Study Portuguese-era design and craftsmanship.", es: "Dise\u00f1o y artesan\u00eda portuguesa.", pt: "Design e artesanato portugu\u00eas." } },
    { name: { en: "Photography Experience", es: "Experiencia Fotogr\u00e1fica", pt: "Experi\u00eancia Fotogr\u00e1fica" }, desc: { en: "Capture historic facades, interiors and landscapes.", es: "Fotograf\u00eda fachadas e interiores hist\u00f3ricos.", pt: "Fotografe fachadas e interiores hist\u00f3ricos." } },
    { name: { en: "Spiritual Heritage Experience", es: "Experiencia Espiritual", pt: "Experi\u00eancia Espiritual" }, desc: { en: "Experience the peaceful atmosphere of historic churches.", es: "Ambiente tranquilo de las iglesias.", pt: "Atmosfera tranquila das igrejas." } },
    { name: { en: "Goa History Experience", es: "Experiencia Hist\u00f3rica", pt: "Experi\u00eancia Hist\u00f3rica" }, desc: { en: "Learn how Portuguese influence shaped Goa\u2019s culture.", es: "C\u00f3mo la influencia portuguesa molde\u00f3 Goa.", pt: "Como a influ\u00eancia portuguesa moldou Goa." } }
  ],
  travelTips: [
    { en: "Dress respectfully inside churches.", es: "Viste respetuosamente dentro de las iglesias.", pt: "Vista-se respeitosamente dentro das igrejas." },
    { en: "Maintain silence and respect religious ceremonies.", es: "Mant\u00e9n silencio durante las ceremonias.", pt: "Mantenha sil\u00eancio durante as cerim\u00f4nias." },
    { en: "Wear comfortable shoes.", es: "Usa calzado c\u00f3modo.", pt: "Use cal\u00e7ados confort\u00e1veis." },
    { en: "Carry water and sun protection.", es: "Lleva agua y protecci\u00f3n solar.", pt: "Leve \u00e1gua e prote\u00e7\u00e3o solar." },
    { en: "Photography rules may differ by site.", es: "Las reglas de fotograf\u00eda var\u00edan.", pt: "As regras de fotografia variam." }
  ],
  faqs: [
    { q: { en: "What is Old Goa famous for?", es: "\u00bfPor qu\u00e9 es famosa Old Goa?", pt: "Pelo que Old Goa \u00e9 famosa?" }, a: { en: "Its historic churches, basilicas and Portuguese-era heritage.", es: "Iglesias hist\u00f3ricas, bas\u00edlicas y patrimonio portugu\u00e9s.", pt: "Igrejas hist\u00f3ricas, bas\u00edlicas e patrim\u00f4nio portugu\u00eas." } },
    { q: { en: "How long should I spend in Old Goa?", es: "\u00bfCu\u00e1nto tiempo dedicar?", pt: "Quanto tempo dedicar?" }, a: { en: "Half a day for major monuments, a full day for a slower visit.", es: "Medio d\u00eda para monumentos principales; un d\u00eda para visita relajada.", pt: "Meio dia para monumentos principais; um dia para visita tranquila." } },
    { q: { en: "Is Old Goa good for history lovers?", es: "\u00bfBuena para amantes de la historia?", pt: "Boa para amantes de hist\u00f3ria?" }, a: { en: "Yes, one of Goa\u2019s strongest heritage destinations.", es: "S\u00ed, uno de los principales destinos hist\u00f3ricos.", pt: "Sim, um dos principais destinos hist\u00f3ricos." } },
    { q: { en: "Can Old Goa be visited from Panaji?", es: "\u00bfSe puede visitar desde Panaji?", pt: "Pode ser visitada de Panaji?" }, a: { en: "Yes, it is an easy excursion from Panaji.", es: "S\u00ed, excursi\u00f3n sencilla desde Panaji.", pt: "Sim, passeio f\u00e1cil a partir de Panaji." } },
    { q: { en: "Is Old Goa suitable for families?", es: "\u00bfAdecuada para familias?", pt: "Adequada para fam\u00edlias?" }, a: { en: "Yes, particularly for families interested in history and architecture.", es: "S\u00ed, para familias interesadas en historia.", pt: "Sim, para fam\u00edlias interessadas em hist\u00f3ria." } }
  ],
  gettingAround: [
    { transportType: "Walking", title: { en: "Walking", es: "Caminar", pt: "Caminhada" }, desc: { en: "Best for the historic church complex.", es: "Ideal para el complejo hist\u00f3rico.", pt: "Ideal para o complexo hist\u00f3rico." }, recommended: true },
    { transportType: "Taxi", title: { en: "Taxi", es: "Taxi", pt: "T\u00e1xi" }, desc: { en: "Convenient for Old Goa and nearby destinations.", es: "Conveniente para Old Goa y alrededores.", pt: "Conveniente para Old Goa e arredores." }, recommended: true },
    { transportType: "Private Car", title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" }, desc: { en: "Good for combining Old Goa with Panaji.", es: "Bueno para combinar con Panaji.", pt: "Bom para combinar com Panaji." }, recommended: false },
    { transportType: "Auto-Rickshaw", title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Auto-Rickshaw" }, desc: { en: "Useful for short-distance journeys.", es: "\u00datil para distancias cortas.", pt: "\u00datil para dist\u00e2ncias curtas." }, recommended: false },
    { transportType: "Tour", title: { en: "Organised Heritage Tour", es: "Tour Organizado", pt: "Tour Organizado" }, desc: { en: "Good for historical context and local guidance.", es: "Bueno para contexto hist\u00f3rico.", pt: "Bom para contexto hist\u00f3rico." }, recommended: false }
  ],
  hotels: [
    { name: "The Fern Kadamba Hotel & Spa", tier: "Mid-Range", desc: { en: "Convenient option near Old Goa.", es: "Opci\u00f3n conveniente cerca de Old Goa.", pt: "Op\u00e7\u00e3o conveniente perto de Old Goa." }, image: "" },
    { name: "Old Goa Residency", tier: "Budget", desc: { en: "Budget stay near heritage area.", es: "Alojamiento econ\u00f3mico.", pt: "Hospedagem econ\u00f4mica." }, image: "" },
    { name: "DoubleTree by Hilton Goa - Panaji", tier: "Luxury", desc: { en: "Premium option for Old Goa and Panaji.", es: "Opci\u00f3n premium.", pt: "Op\u00e7\u00e3o premium." }, image: "" },
    { name: "Miros Hotels", tier: "Mid-Range", desc: { en: "Comfortable option around Panaji/Old Goa.", es: "Opci\u00f3n c\u00f3moda.", pt: "Op\u00e7\u00e3o confort\u00e1vel." }, image: "" },
    { name: "Swarnam Hotel", tier: "Budget", desc: { en: "Local accommodation in Old Goa region.", es: "Alojamiento local.", pt: "Hospedagem local." }, image: "" }
  ],
  localFood: {
    en: "Try Goan Fish Curry, Prawn Balchao, Chicken Cafreal, Pork Vindaloo and Bebinca.",
    es: "Pruebe Fish Curry, Prawn Balchao, Cafreal, Vindaloo y Bebinca.",
    pt: "Prove Fish Curry, Prawn Balchao, Cafreal, Vindaloo e Bebinca."
  },
  image: "/images/Basilica of Bom Jesus.jpg"
};

// SOUTH GOA
const southGoa = {
  name: { en: "South Goa", es: "South Goa", pt: "South Goa" },
  slug: "south-goa",
  shortDescription: {
    en: "South Goa is known for its quieter beaches, lush landscapes, relaxed atmosphere and premium coastal resorts.",
    es: "South Goa es conocida por sus playas tranquilas, paisajes verdes, ambiente relajado y resorts costeros de alta calidad.",
    pt: "South Goa \u00e9 conhecida por suas praias tranquilas, paisagens verdes, atmosfera relaxante e resorts costeiros de alta qualidade."
  },
  overview: {
    en: "South Goa offers a more laid-back side of the state, with palm-lined beaches, scenic coastal villages, lagoons and peaceful resorts. The region is particularly suited to couples, families and travellers who prefer relaxing beach days over busy nightlife.",
    es: "South Goa ofrece un lado m\u00e1s tranquilo del estado, con playas bordeadas de palmeras, pueblos costeros, lagunas y resorts relajados. Es adecuado para parejas y familias.",
    pt: "South Goa oferece um lado mais tranquilo do estado, com praias cercadas por coqueiros, vilarejos costeiros, lagoas e resorts tranquilos. Indicado para casais e fam\u00edlias."
  },
  highlights: [
    { en: "Palolem Beach \u2014 Beautiful curved beach surrounded by greenery.", es: "Playa Palolem \u2014 Hermosa playa rodeada de vegetaci\u00f3n.", pt: "Praia Palolem \u2014 Bela praia cercada por vegeta\u00e7\u00e3o." },
    { en: "Colva Beach \u2014 One of South Goa\u2019s best-known beaches.", es: "Playa Colva \u2014 Una de las m\u00e1s conocidas.", pt: "Praia Colva \u2014 Uma das mais conhecidas." },
    { en: "Benaulim Beach \u2014 Relaxed beach ideal for peaceful evenings.", es: "Playa Benaulim \u2014 Ideal para tardes tranquilas.", pt: "Praia Benaulim \u2014 Ideal para tardes tranquilas." },
    { en: "Cavelossim & Mobor \u2014 Scenic coastal landscapes with premium resorts.", es: "Cavelossim y Mobor \u2014 Paisajes costeros con resorts.", pt: "Cavelossim e Mobor \u2014 Paisagens costeiras com resorts." },
    { en: "Peaceful Coastal Lifestyle \u2014 Slow mornings, beach walks, sunsets.", es: "Estilo costero tranquilo.", pt: "Estilo costeiro tranquilo." }
  ],
  thingsToDo: [
    { en: "Relax on Palolem Beach", es: "Relajarse en la playa Palolem", pt: "Relaxar na praia de Palolem" },
    { en: "Explore Colva and Benaulim", es: "Explorar Colva y Benaulim", pt: "Explorar Colva e Benaulim" },
    { en: "Take a sunset walk along the coast", es: "Paseo al atardecer por la costa", pt: "Caminhada ao p\u00f4r do sol pela costa" },
    { en: "Enjoy water-based activities where safely operated", es: "Disfrutar actividades acu\u00e1ticas seguras", pt: "Aproveitar atividades aqu\u00e1ticas seguras" },
    { en: "Explore local villages and Goan restaurants", es: "Explorar pueblos y restaurantes goanos", pt: "Explorar vilarejos e restaurantes goanos" }
  ],
  experiences: [
    { name: { en: "Romantic Beach Escape", es: "Escapada Rom\u00e1ntica", pt: "Escapada Rom\u00e2ntica" }, desc: { en: "Enjoy sunsets, private resort stays and peaceful beach walks.", es: "Atardeceres, resorts y paseos tranquilos.", pt: "P\u00f4r do sol, resorts e caminhadas tranquilas." } },
    { name: { en: "Luxury Coastal Experience", es: "Experiencia Costera de Lujo", pt: "Experi\u00eancia Costeira de Luxo" }, desc: { en: "Stay at premium beachfront resorts with spa and wellness.", es: "Resorts premium con spa y bienestar.", pt: "Resorts premium com spa e bem-estar." } },
    { name: { en: "Sunset Experience", es: "Experiencia del Atardecer", pt: "Experi\u00eancia do P\u00f4r do Sol" }, desc: { en: "Watch the sun set over the Arabian Sea.", es: "Atardecer sobre el mar Ar\u00e1bigo.", pt: "P\u00f4r do sol sobre o Mar Ar\u00e1bico." } },
    { name: { en: "Goan Food Experience", es: "Experiencia Gastron\u00f3mica", pt: "Experi\u00eancia Gastron\u00f4mica" }, desc: { en: "Explore traditional seafood and local cuisine.", es: "Mariscos y cocina local.", pt: "Frutos do mar e culin\u00e1ria local." } },
    { name: { en: "Nature & Relaxation", es: "Naturaleza y Relajaci\u00f3n", pt: "Natureza e Relaxamento" }, desc: { en: "Combine beaches, lagoons, palm groves and quiet coastal landscapes.", es: "Playas, lagunas y paisajes costeros.", pt: "Praias, lagoas e paisagens costeiras." } }
  ],
  travelTips: [
    { en: "Book beachfront resorts early during peak season.", es: "Reserva resorts con anticipaci\u00f3n en temporada alta.", pt: "Reserve resorts com anteced\u00eancia na alta temporada." },
    { en: "Carry sunscreen, sunglasses and a hat.", es: "Lleva protector solar, gafas y sombrero.", pt: "Leve protetor solar, \u00f3culos e chap\u00e9u." },
    { en: "Keep valuables secure when visiting beaches.", es: "Mant\u00e9n objetos de valor seguros.", pt: "Mantenha objetos de valor seguros." },
    { en: "Follow local beach safety instructions.", es: "Sigue instrucciones locales de seguridad.", pt: "Siga instru\u00e7\u00f5es locais de seguran\u00e7a." },
    { en: "Explore beyond popular beaches for quieter areas.", es: "Explora playas m\u00e1s tranquilas.", pt: "Explore praias mais tranquilas." }
  ],
  faqs: [
    { q: { en: "What is South Goa famous for?", es: "\u00bfPor qu\u00e9 es famosa?", pt: "Pelo que \u00e9 famosa?" }, a: { en: "Quieter beaches, luxury resorts, nature and relaxed holidays.", es: "Playas tranquilas, resorts de lujo y naturaleza.", pt: "Praias tranquilas, resorts de luxo e natureza." } },
    { q: { en: "How many days are enough?", es: "\u00bfCu\u00e1ntos d\u00edas?", pt: "Quantos dias?" }, a: { en: "3\u20134 days are ideal for a relaxed trip.", es: "3\u20134 d\u00edas ideales.", pt: "3\u20134 dias ideais." } },
    { q: { en: "Is South Goa good for honeymoon?", es: "\u00bfBuena para luna de miel?", pt: "Boa para lua de mel?" }, a: { en: "Yes, especially for couples seeking peaceful beaches and premium stays.", es: "S\u00ed, para parejas que buscan playas tranquilas.", pt: "Sim, para casais que procuram praias tranquilas." } },
    { q: { en: "Is South Goa family-friendly?", es: "\u00bfAdecuada para familias?", pt: "Adequada para fam\u00edlias?" }, a: { en: "Yes, many beach and resort areas are suitable for families.", es: "S\u00ed, muchas zonas adecuadas.", pt: "Sim, muitas \u00e1reas adequadas." } },
    { q: { en: "Is South Goa quieter than North Goa?", es: "\u00bfM\u00e1s tranquila que North Goa?", pt: "Mais tranquila que North Goa?" }, a: { en: "Generally yes, many areas have a more relaxed atmosphere.", es: "En general s\u00ed.", pt: "Em geral sim." } }
  ],
  gettingAround: [
    { transportType: "Private Car", title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" }, desc: { en: "Best for exploring multiple beaches.", es: "Ideal para varias playas.", pt: "Ideal para v\u00e1rias praias." }, recommended: true },
    { transportType: "Taxi", title: { en: "Taxi", es: "Taxi", pt: "T\u00e1xi" }, desc: { en: "Convenient for transfers and day trips.", es: "Conveniente para traslados.", pt: "Conveniente para traslados." }, recommended: true },
    { transportType: "Scooter", title: { en: "Scooter Rental", es: "Alquiler de Scooter", pt: "Aluguel de Scooter" }, desc: { en: "Popular for independent exploration.", es: "Popular para exploraci\u00f3n.", pt: "Popular para explora\u00e7\u00e3o." }, recommended: false },
    { transportType: "Auto-Rickshaw", title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Auto-Rickshaw" }, desc: { en: "Useful for shorter journeys.", es: "\u00datil para recorridos cortos.", pt: "\u00datil para percursos curtos." }, recommended: false },
    { transportType: "Bus", title: { en: "Local Bus", es: "Autob\u00fas Local", pt: "\u00d4nibus Local" }, desc: { en: "Budget-friendly between towns.", es: "Econ\u00f3mico entre ciudades.", pt: "Econ\u00f4mico entre cidades." }, recommended: false }
  ],
  hotels: [
    { name: "ITC Grand Goa, Luxury Collection Resort & Spa", tier: "Luxury", desc: { en: "Luxury beachfront resort.", es: "Resort de lujo frente al mar.", pt: "Resort de luxo \u00e0 beira-mar." }, image: "" },
    { name: "The Zuri White Sands, Goa Resort & Casino", tier: "Luxury", desc: { en: "Premium resort near Varca.", es: "Resort premium cerca de Varca.", pt: "Resort premium perto de Varca." }, image: "" },
    { name: "Beleza By The Beach", tier: "Mid-Range", desc: { en: "Beach-oriented stay around Betalbatim.", es: "Estancia de playa en Betalbatim.", pt: "Estadia de praia em Betalbatim." }, image: "" },
    { name: "Nanu Beach Resort & Spa", tier: "Mid-Range", desc: { en: "Resort option near Betalbatim.", es: "Opci\u00f3n de resort.", pt: "Op\u00e7\u00e3o de resort." }, image: "" },
    { name: "Novotel Goa Dona Sylvia Resort", tier: "Luxury", desc: { en: "Premium resort around Cavelossim.", es: "Resort premium en Cavelossim.", pt: "Resort premium em Cavelossim." }, image: "" }
  ],
  localFood: {
    en: "Try Goan Fish Curry, Prawn Balchao, Chicken Cafreal, Sorpotel and Bebinca.",
    es: "Pruebe Fish Curry, Prawn Balchao, Cafreal, Sorpotel y Bebinca.",
    pt: "Prove Fish Curry, Prawn Balchao, Cafreal, Sorpotel e Bebinca."
  },
  image: "/images/goa 2.jpg"
};

// NORTH GOA
const northGoa = {
  name: { en: "North Goa", es: "North Goa", pt: "North Goa" },
  slug: "north-goa",
  shortDescription: {
    en: "North Goa is the energetic and diverse side of Goa, famous for lively beaches, cafes, nightlife, water activities, markets, forts and vibrant coastal culture.",
    es: "North Goa es el lado m\u00e1s din\u00e1mico de Goa, famoso por playas animadas, caf\u00e9s, vida nocturna, mercados y fuertes.",
    pt: "North Goa \u00e9 o lado mais animado de Goa, famoso por praias movimentadas, caf\u00e9s, vida noturna, mercados e fortes."
  },
  overview: {
    en: "North Goa combines beaches, entertainment, heritage and outdoor activities across a diverse coastline. Baga, Calangute, Anjuna, Vagator and Arambol each offer a different atmosphere, while forts such as Aguada and Chapora add a strong historical dimension.",
    es: "North Goa combina playas, entretenimiento, patrimonio y actividades al aire libre. Baga, Calangute, Anjuna, Vagator y Arambol ofrecen ambientes diferentes, mientras que Aguada y Chapora a\u00f1aden dimensi\u00f3n hist\u00f3rica.",
    pt: "North Goa combina praias, entretenimento, patrim\u00f4nio e atividades ao ar livre. Baga, Calangute, Anjuna, Vagator e Arambol oferecem atmosferas diferentes, enquanto Aguada e Chapora acrescentam dimens\u00e3o hist\u00f3rica."
  },
  highlights: [
    { en: "Baga Beach \u2014 One of North Goa\u2019s most energetic beach areas.", es: "Playa Baga \u2014 Una de las zonas m\u00e1s animadas.", pt: "Praia Baga \u2014 Uma das \u00e1reas mais animadas." },
    { en: "Calangute Beach \u2014 One of Goa\u2019s most popular beaches.", es: "Playa Calangute \u2014 Una de las m\u00e1s populares.", pt: "Praia Calangute \u2014 Uma das mais populares." },
    { en: "Vagator & Chapora \u2014 Dramatic cliffs, beaches and historic fort.", es: "Vagator y Chapora \u2014 Acantilados, playas y fuerte.", pt: "Vagator e Chapora \u2014 Falesias, praias e forte." },
    { en: "Anjuna \u2014 Beach cafes, local markets and creative culture.", es: "Anjuna \u2014 Caf\u00e9s, mercados y cultura creativa.", pt: "Anjuna \u2014 Caf\u00e9s, mercados e cultura criativa." },
    { en: "Arambol \u2014 Bohemian atmosphere and laid-back beach culture.", es: "Arambol \u2014 Ambiente bohemio y relajado.", pt: "Arambol \u2014 Atmosfera boemia e descontra\u00edda." }
  ],
  thingsToDo: [
    { en: "Spend time at Baga Beach", es: "Disfrutar de la playa Baga", pt: "Aproveitar a praia de Baga" },
    { en: "Explore Calangute and nearby markets", es: "Explorar Calangute y mercados", pt: "Explorar Calangute e mercados" },
    { en: "Visit Chapora Fort", es: "Visitar el Fuerte Chapora", pt: "Visitar o Forte Chapora" },
    { en: "Explore Anjuna markets and cafes", es: "Explorar mercados y caf\u00e9s de Anjuna", pt: "Explorar mercados e caf\u00e9s de Anjuna" },
    { en: "Watch sunset around Vagator", es: "Ver el atardecer en Vagator", pt: "Ver o p\u00f4r do sol em Vagator" }
  ],
  experiences: [
    { name: { en: "Beach & Water Activity Experience", es: "Experiencia de Playa y Agua", pt: "Experi\u00eancia de Praia e \u00c1gua" }, desc: { en: "Enjoy water activities through established operators.", es: "Actividades acu\u00e1ticas con operadores establecidos.", pt: "Atividades aqu\u00e1ticas com operadores estabelecidos." } },
    { name: { en: "North Goa Nightlife", es: "Vida Nocturna", pt: "Vida Noturna" }, desc: { en: "Discover restaurants, live music and evening entertainment.", es: "Restaurantes, m\u00fasica en vivo y entretenimiento.", pt: "Restaurantes, m\u00fasica ao vivo e entretenimento." } },
    { name: { en: "Fort & Coastal Heritage", es: "Patrimonio Costero", pt: "Patrim\u00f4nio Costeiro" }, desc: { en: "Combine Chapora and Aguada with coastal exploration.", es: "Combina Chapora y Aguada con la costa.", pt: "Combine Chapora e Aguada com a costa." } },
    { name: { en: "Anjuna Market Experience", es: "Experiencia del Mercado", pt: "Experi\u00eancia do Mercado" }, desc: { en: "Explore local products, crafts and souvenirs.", es: "Productos locales, artesan\u00edas y recuerdos.", pt: "Produtos locais, artesanato e lembran\u00e7as." } },
    { name: { en: "Sunset & Beach Cafe Experience", es: "Caf\u00e9 al Atardecer", pt: "Caf\u00e9 ao P\u00f4r do Sol" }, desc: { en: "Enjoy sunset views followed by relaxed coastal dining.", es: "Atardecer y cena costera relajada.", pt: "P\u00f4r do sol e jantar costeiro descontra\u00eddo." } }
  ],
  travelTips: [
    { en: "Popular beaches can become crowded during peak season.", es: "Las playas pueden llenarse en temporada alta.", pt: "As praias podem ficar lotadas na alta temporada." },
    { en: "Follow local safety rules for swimming and water activities.", es: "Sigue normas de seguridad acu\u00e1tica.", pt: "Siga regras de seguran\u00e7a aqu\u00e1tica." },
    { en: "Keep valuables secure at beaches and markets.", es: "Mant\u00e9n objetos de valor seguros.", pt: "Mantenha objetos de valor seguros." },
    { en: "Plan transport in advance for late-night travel.", es: "Planifica transporte para viajes nocturnos.", pt: "Planeje transporte para viagens noturnas." },
    { en: "Respect local communities, beaches and environment.", es: "Respeta comunidades y medio ambiente.", pt: "Respeite comunidades e meio ambiente." }
  ],
  faqs: [
    { q: { en: "What is North Goa famous for?", es: "\u00bfPor qu\u00e9 es famosa?", pt: "Pelo que \u00e9 famosa?" }, a: { en: "Beaches, nightlife, markets, forts, cafes and water activities.", es: "Playas, vida nocturna, mercados, fuertes y caf\u00e9s.", pt: "Praias, vida noturna, mercados, fortes e caf\u00e9s." } },
    { q: { en: "How many days are enough?", es: "\u00bfCu\u00e1ntos d\u00edas?", pt: "Quantos dias?" }, a: { en: "3\u20134 days are ideal for a balanced trip.", es: "3\u20134 d\u00edas ideales.", pt: "3\u20134 dias ideais." } },
    { q: { en: "Which is better for nightlife, North or South Goa?", es: "\u00bfCu\u00e1l es mejor para vida nocturna?", pt: "Qual \u00e9 melhor para vida noturna?" }, a: { en: "North Goa generally offers more nightlife options.", es: "North Goa ofrece m\u00e1s opciones.", pt: "North Goa oferece mais op\u00e7\u00f5es." } },
    { q: { en: "Is North Goa good for families?", es: "\u00bfBuena para familias?", pt: "Boa para fam\u00edlias?" }, a: { en: "Yes, especially around family-friendly beaches and resorts.", es: "S\u00ed, playas y resorts familiares.", pt: "Sim, praias e resorts familiares." } },
    { q: { en: "Can North Goa be combined with Panaji?", es: "\u00bfSe combina con Panaji?", pt: "Combina com Panaji?" }, a: { en: "Yes, Panaji is a convenient cultural base for North Goa.", es: "S\u00ed, Panaji es una base conveniente.", pt: "Sim, Panaji \u00e9 uma base conveniente." } }
  ],
  gettingAround: [
    { transportType: "Scooter", title: { en: "Scooter / Motorbike", es: "Scooter / Moto", pt: "Scooter / Moto" }, desc: { en: "Popular for independent exploration.", es: "Popular para exploraci\u00f3n independiente.", pt: "Popular para explora\u00e7\u00e3o independente." }, recommended: true },
    { transportType: "Taxi", title: { en: "Taxi", es: "Taxi", pt: "T\u00e1xi" }, desc: { en: "Convenient for airport transfers and day trips.", es: "Conveniente para traslados.", pt: "Conveniente para traslados." }, recommended: true },
    { transportType: "Private Car", title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" }, desc: { en: "Comfortable for families and groups.", es: "C\u00f3modo para familias y grupos.", pt: "Confort\u00e1vel para fam\u00edlias e grupos." }, recommended: false },
    { transportType: "Auto-Rickshaw", title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Auto-Rickshaw" }, desc: { en: "Useful for short journeys.", es: "\u00datil para trayectos cortos.", pt: "\u00datil para trajetos curtos." }, recommended: false },
    { transportType: "Walking", title: { en: "Walking", es: "Caminar", pt: "Caminhada" }, desc: { en: "Great around individual beach and market areas.", es: "Ideal en playas y mercados.", pt: "Ideal em praias e mercados." }, recommended: false }
  ],
  hotels: [
    { name: "Taj Fort Aguada Resort & Spa", tier: "Luxury", desc: { en: "Premium heritage-style coastal stay near Sinquerim.", es: "Estancia costera premium.", pt: "Estadia costeira premium." }, image: "" },
    { name: "Hyatt Centric Candolim Goa", tier: "Luxury", desc: { en: "Modern hotel in Candolim area.", es: "Hotel moderno en Candolim.", pt: "Hotel moderno em Candolim." }, image: "" },
    { name: "Le Meridien Goa, Calangute", tier: "Luxury", desc: { en: "Premium option near Calangute.", es: "Opci\u00f3n premium cerca de Calangute.", pt: "Op\u00e7\u00e3o premium perto de Calangute." }, image: "" },
    { name: "W Goa", tier: "Luxury", desc: { en: "Luxury beachfront stay around Vagator.", es: "Lujo frente al mar en Vagator.", pt: "Luxo \u00e0 beira-mar em Vagator." }, image: "" },
    { name: "La Cabana Beach & Spa", tier: "Mid-Range", desc: { en: "Beach-oriented option around Ashwem/Mandrem.", es: "Opci\u00f3n de playa en Ashwem.", pt: "Op\u00e7\u00e3o de praia em Ashwem." }, image: "" }
  ],
  localFood: {
    en: "Try Fish Thali, Goan Prawn Curry, Chicken Cafreal, Pork Vindaloo and Bebinca.",
    es: "Pruebe Fish Thali, Prawn Curry, Cafreal, Vindaloo y Bebinca.",
    pt: "Prove Fish Thali, Prawn Curry, Cafreal, Vindaloo e Bebinca."
  },
  image: "/images/goa 3.jpg"
};

// UPDATE OR ADD CITIES
const cityUpdates = [oldGoa, southGoa, northGoa];

for (const city of cityUpdates) {
  const ci = states[idx].cities.findIndex(c => c.slug === city.slug);
  if (ci === -1) {
    states[idx].cities.push(city);
    console.log("ADDED:", city.slug);
  } else {
    states[idx].cities[ci] = { ...states[idx].cities[ci], ...city };
    console.log("UPDATED:", city.slug);
  }
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");

// Verify
const verify = JSON.parse(fs.readFileSync(file, "utf-8"));
const goa = verify.find(s => s.slug === "goa");
console.log("\n=== GOA CITIES VERIFICATION ===");
goa.cities.forEach(c => {
  console.log(`${c.slug}: things=${(c.thingsToDo||[]).length} exp=${(c.experiences||[]).length} hotels=${(c.hotels||[]).length} tips=${(c.travelTips||[]).length} faqs=${(c.faqs||[]).length} getting=${(c.gettingAround||[]).length}`);
});
console.log("\nDONE! All Goa cities updated.");
