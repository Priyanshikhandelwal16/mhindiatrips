import fs from "fs";
const file = "src/data/fallback/states.json";
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "goa");
if (idx === -1) { console.error("Goa not found!"); process.exit(1); }

const oldGoa = {
  name: { en: "Old Goa", es: "Old Goa", pt: "Old Goa" },
  slug: "old-goa",
  shortDescription: {
    en: "Old Goa is the historic heart of Goa\u2019s Portuguese-era heritage, famous for magnificent churches, basilicas and centuries-old monuments. It offers a fascinating journey through Goa\u2019s religious, architectural and colonial history.",
    es: "Old Goa es el coraz\u00f3n hist\u00f3rico del patrimonio portugu\u00e9s de Goa, famoso por sus magn\u00edficas iglesias, bas\u00edlicas y monumentos centenarios. Ofrece un fascinante recorrido por la historia religiosa, arquitect\u00f3nica y colonial de Goa.",
    pt: "Old Goa \u00e9 o cora\u00e7\u00e3o hist\u00f3rico do patrim\u00f4nio portugu\u00eas de Goa, famoso por suas magn\u00edficas igrejas, bas\u00edlicas e monumentos centen\u00e1rios. Oferece uma fascinante viagem pela hist\u00f3ria religiosa, arquitet\u00f4nica e colonial de Goa."
  },
  overview: {
    en: "Old Goa was once a major centre of Portuguese power in Asia and today preserves an exceptional collection of churches and religious monuments. The Basilica of Bom Jesus, S\u00e9 Cathedral and other historic churches create one of Goa\u2019s most important heritage landscapes. The area is ideal for travellers interested in architecture, history, religion, photography and culture.",
    es: "Old Goa fue uno de los principales centros del poder portugu\u00e9s en Asia y hoy conserva una extraordinaria colecci\u00f3n de iglesias y monumentos religiosos. La Bas\u00edlica del Buen Jes\u00fas, la Catedral de S\u00e9 y otras iglesias hist\u00f3ricas forman uno de los paisajes patrimoniales m\u00e1s importantes de Goa.",
    pt: "Old Goa foi um importante centro do poder portugu\u00eas na \u00c1sia e hoje preserva uma extraordin\u00e1ria cole\u00e7\u00e3o de igrejas e monumentos religiosos. A Bas\u00edlica do Bom Jesus, a S\u00e9 Catedral e outras igrejas hist\u00f3ricas formam uma das paisagens patrimoniais mais importantes de Goa."
  },
  highlights: [
    { en: "Basilica of Bom Jesus \u2014 Discover one of Goa\u2019s most important historic churches.", es: "Bas\u00edlica del Buen Jes\u00fas \u2014 Descubre una de las iglesias hist\u00f3ricas m\u00e1s importantes de Goa.", pt: "Bas\u00edlica do Bom Jesus \u2014 Conhe\u00e7a uma das igrejas hist\u00f3ricas mais importantes de Goa." },
    { en: "S\u00e9 Cathedral \u2014 Admire its grand scale and historic architecture.", es: "Catedral de S\u00e9 \u2014 Admira su impresionante arquitectura hist\u00f3rica.", pt: "S\u00e9 Catedral \u2014 Admire sua impressionante arquitetura hist\u00f3rica." },
    { en: "Church of St. Francis of Assisi \u2014 Discover historic religious art and architecture.", es: "Iglesia de San Francisco de As\u00eds \u2014 Descubre arte religioso y arquitectura hist\u00f3rica.", pt: "Igreja de S\u00e3o Francisco de Assis \u2014 Descubra arte religiosa e arquitetura hist\u00f3rica." },
    { en: "Historic Church Complex \u2014 Explore a remarkable concentration of colonial-era religious monuments.", es: "Complejo Hist\u00f3rico \u2014 Explora una extraordinaria concentraci\u00f3n de monumentos religiosos coloniales.", pt: "Complexo Hist\u00f3rico \u2014 Explore uma extraordin\u00e1ria concentra\u00e7\u00e3o de monumentos religiosos coloniais." },
    { en: "Portuguese Heritage \u2014 Experience centuries of Portuguese influence through architecture and religious history.", es: "Patrimonio Portugu\u00e9s \u2014 Descubre siglos de influencia portuguesa a trav\u00e9s de la arquitectura y la historia religiosa.", pt: "Patrim\u00f4nio Portugu\u00eas \u2014 Conhe\u00e7a s\u00e9culos de influ\u00eancia portuguesa atrav\u00e9s da arquitetura e hist\u00f3ria religiosa." }
  ],
  thingsToDo: [
    { en: "Visit Basilica of Bom Jesus \u2014 Explore the historic basilica and its religious heritage.", es: "Visitar la Bas\u00edlica del Buen Jes\u00fas \u2014 Explora la bas\u00edlica hist\u00f3rica y su patrimonio religioso.", pt: "Visitar a Bas\u00edlica do Bom Jesus \u2014 Explore a bas\u00edlica hist\u00f3rica e seu patrim\u00f4nio religioso." },
    { en: "Visit S\u00e9 Cathedral \u2014 Admire its grand architecture and historic interiors.", es: "Visitar la Catedral de S\u00e9 \u2014 Admira su grandiosa arquitectura e interiores hist\u00f3ricos.", pt: "Visitar a S\u00e9 Catedral \u2014 Admire sua grandiosa arquitetura e interiores hist\u00f3ricos." },
    { en: "Walk the Heritage Complex \u2014 Explore several churches and historic structures on foot.", es: "Recorrer el Complejo Patrimonial \u2014 Explora varias iglesias y estructuras hist\u00f3ricas a pie.", pt: "Percorrer o Complexo Patrimonial \u2014 Explore v\u00e1rias igrejas e estruturas hist\u00f3ricas a p\u00e9." },
    { en: "Visit Archaeological Museum \u2014 Discover artefacts and historical collections connected to Goa\u2019s past.", es: "Visitar el Museo Arqueol\u00f3gico \u2014 Descubre objetos y colecciones relacionados con la historia de Goa.", pt: "Visitar o Museu Arqueol\u00f3gico \u2014 Conhe\u00e7a artefatos e cole\u00e7\u00f5es relacionadas ao passado de Goa." },
    { en: "Combine with Panaji \u2014 Visit Old Goa together with Panaji and Fontainhas for a complete heritage day.", es: "Combinar con Panaji \u2014 Combina Old Goa con Panaji y Fontainhas para una experiencia patrimonial completa.", pt: "Combinar com Panaji \u2014 Combine Old Goa com Panaji e Fontainhas para um dia completo de patrim\u00f4nio." }
  ],
  experiences: [
    { name: { en: "Heritage Walking Tour", es: "Paseo Hist\u00f3rico", pt: "Passeio Hist\u00f3rico" }, desc: { en: "Discover Old Goa\u2019s religious and architectural history.", es: "Descubre la historia religiosa y arquitect\u00f3nica de Old Goa.", pt: "Conhe\u00e7a a hist\u00f3ria religiosa e arquitet\u00f4nica de Old Goa." } },
    { name: { en: "Church Architecture Experience", es: "Experiencia Arquitect\u00f3nica", pt: "Experi\u00eancia Arquitet\u00f4nica" }, desc: { en: "Study Portuguese-era design, carvings and craftsmanship.", es: "Descubre el dise\u00f1o, las tallas y la artesan\u00eda de la \u00e9poca portuguesa.", pt: "Observe o design, esculturas e artesanato da \u00e9poca portuguesa." } },
    { name: { en: "Photography Experience", es: "Experiencia Fotogr\u00e1fica", pt: "Experi\u00eancia Fotogr\u00e1fica" }, desc: { en: "Capture historic fa\u00e7ades, interiors and heritage landscapes.", es: "Fotograf\u00eda fachadas, interiores y paisajes hist\u00f3ricos.", pt: "Fotografe fachadas, interiores e paisagens hist\u00f3ricas." } },
    { name: { en: "Spiritual Heritage Experience", es: "Experiencia Espiritual", pt: "Experi\u00eancia Espiritual" }, desc: { en: "Enjoy the peaceful atmosphere of Goa\u2019s historic churches.", es: "Disfruta del ambiente tranquilo de las iglesias hist\u00f3ricas de Goa.", pt: "Aprecie a atmosfera tranquila das igrejas hist\u00f3ricas de Goa." } },
    { name: { en: "Goa History Experience", es: "Experiencia Hist\u00f3rica", pt: "Experi\u00eancia Hist\u00f3rica" }, desc: { en: "Learn about Goa\u2019s Portuguese-era history and cultural development.", es: "Conoce la historia de Goa durante la \u00e9poca portuguesa y su evoluci\u00f3n cultural.", pt: "Conhe\u00e7a a hist\u00f3ria de Goa durante o per\u00edodo portugu\u00eas e sua evolu\u00e7\u00e3o cultural." } }
  ],
  travelTips: [
    { en: "Dress respectfully inside churches.", es: "Viste respetuosamente dentro de las iglesias.", pt: "Vista-se respeitosamente dentro das igrejas." },
    { en: "Maintain silence during religious services.", es: "Mant\u00e9n silencio durante los servicios religiosos.", pt: "Mantenha sil\u00eancio durante os servi\u00e7os religiosos." },
    { en: "Wear comfortable shoes.", es: "Usa calzado c\u00f3modo.", pt: "Use cal\u00e7ados confort\u00e1veis." },
    { en: "Carry water and sun protection.", es: "Lleva agua y protecci\u00f3n solar.", pt: "Leve \u00e1gua e prote\u00e7\u00e3o solar." },
    { en: "Follow photography restrictions at individual sites.", es: "Respeta las restricciones de fotograf\u00eda de cada lugar.", pt: "Respeite as restri\u00e7\u00f5es de fotografia de cada local." }
  ],
  faqs: [
    { q: { en: "What is Old Goa famous for?", es: "\u00bfPor qu\u00e9 es famosa Old Goa?", pt: "Pelo que Old Goa \u00e9 famosa?" }, a: { en: "Historic churches, basilicas and Portuguese-era heritage.", es: "Iglesias hist\u00f3ricas, bas\u00edlicas y patrimonio portugu\u00e9s.", pt: "Igrejas hist\u00f3ricas, bas\u00edlicas e patrim\u00f4nio portugu\u00eas." } },
    { q: { en: "How long should I spend here?", es: "\u00bfCu\u00e1nto tiempo dedicar?", pt: "Quanto tempo dedicar?" }, a: { en: "Half a day is enough for the major monuments; one day allows a slower visit.", es: "Medio d\u00eda es suficiente; un d\u00eda permite una visita m\u00e1s relajada.", pt: "Meio dia \u00e9 suficiente; um dia permite uma visita mais tranquila." } },
    { q: { en: "Is Old Goa good for history lovers?", es: "\u00bfBuena para amantes de la historia?", pt: "Boa para amantes de hist\u00f3ria?" }, a: { en: "Yes, it is one of Goa\u2019s key heritage destinations.", es: "S\u00ed, es uno de los principales destinos hist\u00f3ricos de Goa.", pt: "Sim, \u00e9 um dos principais destinos hist\u00f3ricos de Goa." } },
    { q: { en: "Can Old Goa be visited from Panaji?", es: "\u00bfSe puede visitar desde Panaji?", pt: "Pode ser visitada de Panaji?" }, a: { en: "Yes, it is an easy excursion from Panaji.", es: "S\u00ed, es una excursi\u00f3n sencilla desde Panaji.", pt: "Sim, \u00e9 um passeio f\u00e1cil a partir de Panaji." } },
    { q: { en: "Is Old Goa family-friendly?", es: "\u00bfAdecuada para familias?", pt: "Adequada para fam\u00edlias?" }, a: { en: "Yes, particularly for families interested in history and architecture.", es: "S\u00ed, especialmente para familias interesadas en historia y arquitectura.", pt: "Sim, especialmente para fam\u00edlias interessadas em hist\u00f3ria e arquitetura." } }
  ],
  gettingAround: [
    { transportType: "Walking", title: { en: "Walking", es: "Caminar", pt: "Caminhada" }, desc: { en: "Best within the heritage complex.", es: "Ideal dentro del complejo hist\u00f3rico.", pt: "Ideal dentro do complexo hist\u00f3rico." }, recommended: true },
    { transportType: "Taxi", title: { en: "Taxi", es: "Taxi", pt: "T\u00e1xi" }, desc: { en: "Convenient for Old Goa and nearby attractions.", es: "Conveniente para Old Goa y atracciones cercanas.", pt: "Conveniente para Old Goa e atra\u00e7\u00f5es pr\u00f3ximas." }, recommended: true },
    { transportType: "Private Car", title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" }, desc: { en: "Ideal for combining Old Goa with Panaji.", es: "Ideal para combinar con Panaji.", pt: "Ideal para combinar com Panaji." }, recommended: false },
    { transportType: "Auto-Rickshaw", title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriqu\u00edx\u00e1" }, desc: { en: "Useful for short local journeys.", es: "\u00datil para trayectos cortos.", pt: "\u00datil para trajetos curtos." }, recommended: false },
    { transportType: "Tour", title: { en: "Guided Tour", es: "Visita Guiada", pt: "Visita Guiada" }, desc: { en: "Best for travellers wanting historical context.", es: "Ideal para quienes buscan contexto hist\u00f3rico.", pt: "Ideal para quem busca contexto hist\u00f3rico." }, recommended: false }
  ],
  hotels: [
    { name: "Old Goa Residency", tier: "Budget", desc: { en: "Convenient budget-oriented accommodation close to the heritage area.", es: "Alojamiento econ\u00f3mico y conveniente cerca de la zona hist\u00f3rica.", pt: "Hospedagem econ\u00f4mica e conveniente perto da \u00e1rea hist\u00f3rica." }, image: "" },
    { name: "DoubleTree by Hilton Goa - Panaji", tier: "Luxury", desc: { en: "Premium hotel convenient for exploring both Old Goa and Panaji.", es: "Hotel premium conveniente para explorar Old Goa y Panaji.", pt: "Hotel premium conveniente para explorar Old Goa e Panaji." }, image: "" },
    { name: "Vivanta Goa, Panaji", tier: "Luxury", desc: { en: "Modern premium stay with easy access to nearby heritage attractions.", es: "Alojamiento moderno premium con f\u00e1cil acceso a las atracciones hist\u00f3ricas cercanas.", pt: "Hospedagem moderna premium com f\u00e1cil acesso \u00e0s atra\u00e7\u00f5es hist\u00f3ricas pr\u00f3ximas." }, image: "" },
    { name: "The Fern Kadamba Hotel & Spa", tier: "Mid-Range", desc: { en: "Comfortable accommodation located conveniently for Old Goa sightseeing.", es: "Alojamiento confortable y conveniente para visitar Old Goa.", pt: "Hospedagem confort\u00e1vel e conveniente para conhecer Old Goa." }, image: "" },
    { name: "Heritage Guesthouses", tier: "Budget", desc: { en: "Smaller local properties can offer a more personal cultural experience.", es: "Las peque\u00f1as propiedades locales pueden ofrecer una experiencia cultural m\u00e1s personal.", pt: "Pequenas propriedades locais podem oferecer uma experi\u00eancia cultural mais pessoal." }, image: "" }
  ],
  localFood: {
    en: "Try Goan Fish Curry (coconut-based), Prawn Balch\u00e3o (spicy tangy prawns), Chicken Cafreal (herb-spice chicken), Pork Vindaloo (tangy Goan-Portuguese dish) and Bebinca (layered dessert).",
    es: "Pruebe Fish Curry (con coco), Prawn Balch\u00e3o (gambas picantes), Chicken Cafreal (pollo con hierbas), Pork Vindaloo (plato portugu\u00e9s) y Bebinca (postre en capas).",
    pt: "Prove Fish Curry (com coco), Prawn Balch\u00e3o (camar\u00f5es picantes), Chicken Cafreal (frango com ervas), Pork Vindaloo (prato portugu\u00eas) e Bebinca (sobremesa em camadas)."
  },
  image: "/images/Basilica of Bom Jesus.jpg"
};

const southGoa = {
  name: { en: "South Goa", es: "South Goa", pt: "South Goa" },
  slug: "south-goa",
  shortDescription: {
    en: "South Goa is known for quieter beaches, lush landscapes, relaxed coastal villages and premium resorts. It is ideal for couples, families and travellers looking for peaceful beach holidays, nature and wellness.",
    es: "South Goa es conocida por sus playas tranquilas, paisajes verdes, pueblos costeros relajados y resorts premium. Es ideal para parejas, familias y viajeros que buscan vacaciones tranquilas junto al mar, naturaleza y bienestar.",
    pt: "South Goa \u00e9 conhecida por suas praias tranquilas, paisagens verdes, vilarejos costeiros relaxantes e resorts premium. \u00c9 ideal para casais, fam\u00edlias e viajantes que procuram f\u00e9rias tranquilas na praia, natureza e bem-estar."
  },
  overview: {
    en: "South Goa offers a slower and more peaceful side of Goa, with palm-lined beaches, coastal villages, lagoons and scenic landscapes. Beaches such as Palolem, Colva and Benaulim provide different experiences, from lively local beaches to peaceful stretches of sand. South Goa is particularly attractive for honeymooners, families, wellness travellers and anyone seeking a relaxed coastal escape.",
    es: "South Goa ofrece un lado m\u00e1s tranquilo de Goa, con playas bordeadas de palmeras, pueblos costeros, lagunas y paisajes naturales. Playas como Palolem, Colva y Benaulim ofrecen experiencias diferentes, desde zonas locales animadas hasta extensiones de arena m\u00e1s tranquilas.",
    pt: "South Goa oferece um lado mais tranquilo de Goa, com praias cercadas por coqueiros, vilarejos costeiros, lagoas e paisagens naturais. Praias como Palolem, Colva e Benaulim oferecem experi\u00eancias diferentes, desde \u00e1reas mais animadas at\u00e9 trechos de areia tranquilos."
  },
  highlights: [
    { en: "Palolem Beach \u2014 Enjoy a scenic curved beach surrounded by greenery and peaceful coastal landscapes.", es: "Playa Palolem \u2014 Disfruta de una hermosa playa curva rodeada de vegetaci\u00f3n y paisajes costeros tranquilos.", pt: "Praia Palolem \u2014 Aprecie uma bela praia curva cercada por vegeta\u00e7\u00e3o e paisagens costeiras tranquilas." },
    { en: "Colva Beach \u2014 Experience one of South Goa\u2019s best-known beaches with local restaurants and coastal activities.", es: "Playa Colva \u2014 Descubre una de las playas m\u00e1s conocidas de South Goa con restaurantes locales y actividades costeras.", pt: "Praia Colva \u2014 Conhe\u00e7a uma das praias mais conhecidas de South Goa, com restaurantes locais e atividades costeiras." },
    { en: "Benaulim Beach \u2014 Relax on a peaceful beach known for its laid-back atmosphere.", es: "Playa Benaulim \u2014 Rel\u00e1jate en una playa tranquila conocida por su ambiente relajado.", pt: "Praia Benaulim \u2014 Relaxe em uma praia tranquila conhecida por sua atmosfera descontra\u00edda." },
    { en: "Cavelossim & Mobor \u2014 Explore scenic coastal areas with premium resorts, waterways and beautiful landscapes.", es: "Cavelossim y Mobor \u2014 Explora zonas costeras con resorts premium, v\u00edas fluviales y hermosos paisajes.", pt: "Cavelossim e Mobor \u2014 Explore \u00e1reas costeiras com resorts premium, canais e belas paisagens." },
    { en: "Peaceful Coastal Lifestyle \u2014 Enjoy slow mornings, beach walks, sunsets and relaxed dining.", es: "Estilo Costero Tranquilo \u2014 Disfruta de ma\u00f1anas tranquilas, paseos por la playa, atardeceres y gastronom\u00eda relajada.", pt: "Estilo Costeiro Tranquilo \u2014 Desfrute de manh\u00e3s tranquilas, caminhadas na praia, pores do sol e refei\u00e7\u00f5es descontra\u00eddas." }
  ],
  thingsToDo: [
    { en: "Relax at Palolem \u2014 Spend a peaceful day enjoying the beach and surrounding scenery.", es: "Relajarse en Palolem \u2014 Pasa un d\u00eda tranquilo disfrutando de la playa y sus paisajes.", pt: "Relaxar em Palolem \u2014 Passe um dia tranquilo aproveitando a praia e seus arredores." },
    { en: "Explore Colva \u2014 Discover the beach, local restaurants and nearby areas.", es: "Explorar Colva \u2014 Descubre la playa, restaurantes locales y zonas cercanas.", pt: "Explorar Colva \u2014 Explore a praia, restaurantes locais e \u00e1reas pr\u00f3ximas." },
    { en: "Visit Benaulim \u2014 Enjoy a quieter beach atmosphere away from busier areas.", es: "Visitar Benaulim \u2014 Disfruta de un ambiente m\u00e1s tranquilo lejos de las zonas concurridas.", pt: "Visitar Benaulim \u2014 Aproveite uma atmosfera mais tranquila longe das \u00e1reas movimentadas." },
    { en: "Explore Cavelossim \u2014 Discover the beach, riverside scenery and resort areas.", es: "Explorar Cavelossim \u2014 Descubre la playa, paisajes junto al r\u00edo y zonas de resorts.", pt: "Explorar Cavelossim \u2014 Explore a praia, paisagens ribeirinhas e \u00e1reas de resorts." },
    { en: "Enjoy a Sunset Walk \u2014 Take a peaceful walk along the Arabian Sea during sunset.", es: "Paseo al Atardecer \u2014 Da un paseo tranquilo junto al mar Ar\u00e1bigo durante el atardecer.", pt: "Caminhada ao P\u00f4r do Sol \u2014 Fa\u00e7a uma caminhada tranquila junto ao Mar Ar\u00e1bico durante o p\u00f4r do sol." }
  ],
  experiences: [
    { name: { en: "Romantic Beach Escape", es: "Escapada Rom\u00e1ntica", pt: "Escapada Rom\u00e2ntica" }, desc: { en: "Enjoy sunsets, beach walks and peaceful resort stays.", es: "Disfruta de atardeceres, paseos y resorts tranquilos.", pt: "Desfrute de pores do sol, caminhadas e resorts tranquilos." } },
    { name: { en: "Luxury Coastal Experience", es: "Experiencia Costera de Lujo", pt: "Experi\u00eancia Costeira de Luxo" }, desc: { en: "Stay at premium resorts and enjoy wellness facilities.", es: "Al\u00f3jate en resorts premium y disfruta de instalaciones de bienestar.", pt: "Hospede-se em resorts premium e aproveite instala\u00e7\u00f5es de bem-estar." } },
    { name: { en: "Sunset Experience", es: "Experiencia del Atardecer", pt: "Experi\u00eancia do P\u00f4r do Sol" }, desc: { en: "Watch the sun set over the Arabian Sea.", es: "Observa el atardecer sobre el mar Ar\u00e1bigo.", pt: "Observe o p\u00f4r do sol sobre o Mar Ar\u00e1bico." } },
    { name: { en: "Goan Food Experience", es: "Experiencia Gastron\u00f3mica", pt: "Experi\u00eancia Gastron\u00f4mica" }, desc: { en: "Explore traditional seafood and local Goan cuisine.", es: "Descubre mariscos y gastronom\u00eda tradicional de Goa.", pt: "Explore frutos do mar e culin\u00e1ria tradicional goesa." } },
    { name: { en: "Nature & Wellness Experience", es: "Naturaleza y Bienestar", pt: "Natureza e Bem-estar" }, desc: { en: "Combine beaches, greenery, wellness and peaceful surroundings.", es: "Combina playas, naturaleza, bienestar y tranquilidad.", pt: "Combine praias, natureza, bem-estar e tranquilidade." } }
  ],
  travelTips: [
    { en: "Book beachfront accommodation early during peak season.", es: "Reserva alojamiento frente al mar con anticipaci\u00f3n.", pt: "Reserve hospedagem \u00e0 beira-mar com anteced\u00eancia." },
    { en: "Carry sunscreen and water.", es: "Lleva protector solar y agua.", pt: "Leve protetor solar e \u00e1gua." },
    { en: "Keep valuables secure at beaches.", es: "Mant\u00e9n tus objetos de valor seguros en las playas.", pt: "Mantenha seus objetos de valor seguros nas praias." },
    { en: "Follow beach safety and swimming advisories.", es: "Sigue las recomendaciones de seguridad y nataci\u00f3n.", pt: "Siga as orienta\u00e7\u00f5es de seguran\u00e7a e banho de mar." },
    { en: "Explore quieter beaches beyond the busiest tourist areas.", es: "Explora playas m\u00e1s tranquilas fuera de las zonas tur\u00edsticas m\u00e1s concurridas.", pt: "Explore praias mais tranquilas al\u00e9m das \u00e1reas tur\u00edsticas mais movimentadas." }
  ],
  faqs: [
    { q: { en: "What is South Goa famous for?", es: "\u00bfPor qu\u00e9 es famosa South Goa?", pt: "Pelo que South Goa \u00e9 famosa?" }, a: { en: "Quiet beaches, resorts, nature and relaxed holidays.", es: "Playas tranquilas, resorts, naturaleza y vacaciones relajadas.", pt: "Praias tranquilas, resorts, natureza e f\u00e9rias relaxantes." } },
    { q: { en: "How many days are enough?", es: "\u00bfCu\u00e1ntos d\u00edas son suficientes?", pt: "Quantos dias s\u00e3o suficientes?" }, a: { en: "Three to four days are ideal.", es: "Tres a cuatro d\u00edas son ideales.", pt: "Tr\u00eas a quatro dias s\u00e3o ideais." } },
    { q: { en: "Is South Goa good for honeymoon?", es: "\u00bfBuena para luna de miel?", pt: "Boa para lua de mel?" }, a: { en: "Yes, especially for couples seeking peaceful beaches and premium stays.", es: "S\u00ed, especialmente para parejas que buscan playas tranquilas y alojamientos premium.", pt: "Sim, especialmente para casais que procuram praias tranquilas e hospedagens premium." } },
    { q: { en: "Is South Goa family-friendly?", es: "\u00bfAdecuada para familias?", pt: "Adequada para fam\u00edlias?" }, a: { en: "Yes, many beaches and resorts are suitable for families.", es: "S\u00ed, muchas playas y resorts son adecuados para familias.", pt: "Sim, muitas praias e resorts s\u00e3o adequados para fam\u00edlias." } },
    { q: { en: "Is South Goa quieter than North Goa?", es: "\u00bfM\u00e1s tranquila que North Goa?", pt: "Mais tranquila que North Goa?" }, a: { en: "Generally, many areas offer a more relaxed atmosphere.", es: "En general, muchas zonas ofrecen un ambiente m\u00e1s tranquilo.", pt: "Em geral, muitas \u00e1reas oferecem uma atmosfera mais tranquila." } }
  ],
  gettingAround: [
    { transportType: "Private Car", title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" }, desc: { en: "Best for exploring multiple beaches.", es: "Ideal para explorar varias playas.", pt: "Ideal para explorar v\u00e1rias praias." }, recommended: true },
    { transportType: "Taxi", title: { en: "Taxi", es: "Taxi", pt: "T\u00e1xi" }, desc: { en: "Convenient for transfers and sightseeing.", es: "Conveniente para traslados y visitas.", pt: "Conveniente para traslados e passeios." }, recommended: true },
    { transportType: "Scooter", title: { en: "Scooter", es: "Scooter", pt: "Scooter" }, desc: { en: "Popular for independent travel where legally permitted.", es: "Popular para viajes independientes.", pt: "Popular para viagens independentes." }, recommended: false },
    { transportType: "Auto-Rickshaw", title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriqu\u00edx\u00e1" }, desc: { en: "Useful for shorter journeys.", es: "\u00datil para trayectos cortos.", pt: "\u00datil para trajetos curtos." }, recommended: false },
    { transportType: "Bus", title: { en: "Local Bus", es: "Autob\u00fas Local", pt: "\u00d4nibus Local" }, desc: { en: "Affordable for travel between towns.", es: "Econ\u00f3mico entre ciudades.", pt: "Econ\u00f4mico entre cidades." }, recommended: false }
  ],
  hotels: [
    { name: "ITC Grand Goa", tier: "Luxury", desc: { en: "Luxury resort offering a premium coastal escape.", es: "Resort de lujo para una experiencia costera premium.", pt: "Resort de luxo para uma experi\u00eancia costeira premium." }, image: "" },
    { name: "The Zuri White Sands, Goa Resort & Casino", tier: "Luxury", desc: { en: "Premium resort with extensive facilities and beach access.", es: "Resort premium con excelentes instalaciones y acceso a la playa.", pt: "Resort premium com excelentes instala\u00e7\u00f5es e acesso \u00e0 praia." }, image: "" },
    { name: "Beleza By The Beach", tier: "Mid-Range", desc: { en: "Relaxed resort option near the South Goa coast.", es: "Resort tranquilo cerca de la costa de South Goa.", pt: "Resort tranquilo perto da costa de South Goa." }, image: "" },
    { name: "Nanu Beach Resort & Spa", tier: "Mid-Range", desc: { en: "Comfortable beach-oriented accommodation near Betalbatim.", es: "Alojamiento c\u00f3modo cerca de la playa en Betalbatim.", pt: "Hospedagem confort\u00e1vel perto da praia em Betalbatim." }, image: "" },
    { name: "Novotel Goa Dona Sylvia Resort", tier: "Luxury", desc: { en: "Premium resort option around Cavelossim.", es: "Resort premium en la zona de Cavelossim.", pt: "Resort premium na regi\u00e3o de Cavelossim." }, image: "" }
  ],
  localFood: {
    en: "Try Goan Fish Curry (coconut-based), Prawn Balch\u00e3o (spicy tangy prawns), Chicken Cafreal (green herb chicken), Sorpotel (traditional meat with Portuguese influence) and Bebinca (layered dessert).",
    es: "Pruebe Fish Curry (con coco), Prawn Balch\u00e3o (gambas picantes), Cafreal (pollo con hierbas), Sorpotel (carne portuguesa) y Bebinca (postre en capas).",
    pt: "Prove Fish Curry (com coco), Prawn Balch\u00e3o (camar\u00f5es picantes), Cafreal (frango com ervas), Sorpotel (carne portuguesa) e Bebinca (sobremesa em camadas)."
  },
  image: "/images/goa 2.jpg"
};

const northGoa = {
  name: { en: "North Goa", es: "North Goa", pt: "North Goa" },
  slug: "north-goa",
  shortDescription: {
    en: "North Goa is the energetic side of Goa, famous for lively beaches, caf\u00e9s, nightlife, markets, forts and outdoor activities. From Baga and Calangute to Anjuna, Vagator and Arambol, each area offers a distinct atmosphere.",
    es: "North Goa es el lado m\u00e1s animado de Goa, famoso por sus playas, caf\u00e9s, vida nocturna, mercados, fuertes y actividades al aire libre. Desde Baga y Calangute hasta Anjuna, Vagator y Arambol, cada zona ofrece un ambiente diferente.",
    pt: "North Goa \u00e9 o lado mais animado de Goa, famoso por suas praias, caf\u00e9s, vida noturna, mercados, fortes e atividades ao ar livre. De Baga e Calangute a Anjuna, Vagator e Arambol, cada \u00e1rea oferece uma atmosfera diferente."
  },
  overview: {
    en: "North Goa combines beaches, entertainment, heritage and adventure across a diverse coastline. Baga and Calangute offer energetic beach experiences, Anjuna is known for its creative and market culture, Vagator provides dramatic coastal scenery and Chapora Fort, while Arambol offers a more relaxed and bohemian atmosphere.",
    es: "North Goa combina playas, entretenimiento, patrimonio y aventura. Baga y Calangute ofrecen experiencias animadas, Anjuna destaca por sus mercados y cultura creativa, Vagator por sus paisajes costeros y el Fuerte de Chapora, mientras que Arambol ofrece un ambiente m\u00e1s relajado y bohemio.",
    pt: "North Goa combina praias, entretenimento, patrim\u00f4nio e aventura. Baga e Calangute oferecem experi\u00eancias animadas, Anjuna \u00e9 conhecida por seus mercados e cultura criativa, Vagator por suas paisagens costeiras e Forte de Chapora, enquanto Arambol oferece uma atmosfera mais relaxada e bo\u00eamia."
  },
  highlights: [
    { en: "Baga Beach \u2014 Enjoy a lively beach environment with restaurants, activities and entertainment.", es: "Playa Baga \u2014 Disfruta de una playa animada con restaurantes, actividades y entretenimiento.", pt: "Praia Baga \u2014 Aproveite uma praia animada com restaurantes, atividades e entretenimento." },
    { en: "Calangute Beach \u2014 Experience one of Goa\u2019s most popular beaches with shops and restaurants nearby.", es: "Playa Calangute \u2014 Descubre una de las playas m\u00e1s populares de Goa con tiendas y restaurantes cercanos.", pt: "Praia Calangute \u2014 Conhe\u00e7a uma das praias mais populares de Goa, com lojas e restaurantes pr\u00f3ximos." },
    { en: "Vagator & Chapora \u2014 Explore dramatic cliffs, beaches and the historic Chapora Fort.", es: "Vagator y Chapora \u2014 Explora acantilados, playas y el hist\u00f3rico Fuerte de Chapora.", pt: "Vagator e Chapora \u2014 Explore fal\u00e9sias, praias e o hist\u00f3rico Forte de Chapora." },
    { en: "Anjuna \u2014 Discover beach caf\u00e9s, markets and Goa\u2019s creative coastal culture.", es: "Anjuna \u2014 Descubre caf\u00e9s de playa, mercados y la cultura costera creativa de Goa.", pt: "Anjuna \u2014 Descubra caf\u00e9s de praia, mercados e a cultura costeira criativa de Goa." },
    { en: "Arambol \u2014 Enjoy a relaxed coastal atmosphere with a distinctive bohemian character.", es: "Arambol \u2014 Disfruta de un ambiente costero relajado con un marcado car\u00e1cter bohemio.", pt: "Arambol \u2014 Aproveite uma atmosfera costeira tranquila com um forte car\u00e1ter bo\u00eamio." }
  ],
  thingsToDo: [
    { en: "Visit Baga Beach \u2014 Enjoy the beach, restaurants and coastal activities.", es: "Visitar Playa Baga \u2014 Disfruta de la playa, restaurantes y actividades.", pt: "Visitar Praia Baga \u2014 Aproveite a praia, restaurantes e atividades." },
    { en: "Explore Calangute \u2014 Discover the beach, shops and local dining.", es: "Explorar Calangute \u2014 Descubre la playa, tiendas y gastronom\u00eda local.", pt: "Explorar Calangute \u2014 Explore a praia, lojas e gastronomia local." },
    { en: "Visit Chapora Fort \u2014 Enjoy historic architecture and coastal views.", es: "Visitar Fuerte Chapora \u2014 Disfruta de arquitectura hist\u00f3rica y vistas costeras.", pt: "Visitar Forte Chapora \u2014 Aprecie a arquitetura hist\u00f3rica e as vistas costeiras." },
    { en: "Explore Anjuna \u2014 Visit local markets, caf\u00e9s and creative spaces.", es: "Explorar Anjuna \u2014 Visita mercados, caf\u00e9s y espacios creativos.", pt: "Explorar Anjuna \u2014 Visite mercados, caf\u00e9s e espa\u00e7os criativos." },
    { en: "Watch Sunset at Vagator \u2014 Enjoy dramatic sunset views along the coast.", es: "Atardecer en Vagator \u2014 Disfruta de espectaculares atardeceres junto a la costa.", pt: "P\u00f4r do Sol em Vagator \u2014 Aprecie espetaculares pores do sol ao longo da costa." }
  ],
  experiences: [
    { name: { en: "Beach Experience", es: "Experiencia de Playa", pt: "Experi\u00eancia de Praia" }, desc: { en: "Enjoy North Goa\u2019s lively beaches and coastal atmosphere.", es: "Disfruta de las animadas playas y el ambiente costero.", pt: "Aproveite as praias animadas e a atmosfera costeira." } },
    { name: { en: "Nightlife & Entertainment", es: "Vida Nocturna", pt: "Vida Noturna" }, desc: { en: "Discover restaurants, live entertainment and evening venues.", es: "Descubre restaurantes, entretenimiento y locales nocturnos.", pt: "Descubra restaurantes, entretenimento e locais noturnos." } },
    { name: { en: "Fort & Heritage Experience", es: "Experiencia de Patrimonio", pt: "Experi\u00eancia de Patrim\u00f4nio" }, desc: { en: "Combine Chapora and Aguada with coastal sightseeing.", es: "Combina Chapora y Aguada con visitas por la costa.", pt: "Combine Chapora e Aguada com passeios costeiros." } },
    { name: { en: "Anjuna Market Experience", es: "Experiencia del Mercado", pt: "Experi\u00eancia do Mercado" }, desc: { en: "Explore local handicrafts, clothing, souvenirs and lifestyle products.", es: "Explora artesan\u00edas, ropa, recuerdos y productos locales.", pt: "Explore artesanato, roupas, lembran\u00e7as e produtos locais." } },
    { name: { en: "Sunset Caf\u00e9 Experience", es: "Experiencia de Caf\u00e9 al Atardecer", pt: "Experi\u00eancia de Caf\u00e9 ao P\u00f4r do Sol" }, desc: { en: "Enjoy sunset views followed by relaxed coastal dining.", es: "Disfruta del atardecer seguido de una cena relajada junto a la costa.", pt: "Aprecie o p\u00f4r do sol seguido de uma refei\u00e7\u00e3o descontra\u00edda na costa." } }
  ],
  travelTips: [
    { en: "Popular beaches can become crowded during peak season.", es: "Las playas populares pueden estar muy concurridas durante la temporada alta.", pt: "As praias populares podem ficar muito movimentadas na alta temporada." },
    { en: "Follow local swimming and water-activity safety instructions.", es: "Sigue las normas locales de seguridad para nadar y realizar actividades acu\u00e1ticas.", pt: "Siga as regras locais de seguran\u00e7a para nadar e praticar atividades aqu\u00e1ticas." },
    { en: "Keep valuables secure in crowded areas.", es: "Mant\u00e9n tus objetos de valor seguros en zonas concurridas.", pt: "Mantenha seus objetos de valor seguros em \u00e1reas movimentadas." },
    { en: "Arrange transport in advance for late-night travel.", es: "Organiza el transporte con anticipaci\u00f3n para viajes nocturnos.", pt: "Organize o transporte com anteced\u00eancia para viagens noturnas." },
    { en: "Respect beaches, local communities and the environment.", es: "Respeta las playas, comunidades locales y el medio ambiente.", pt: "Respeite as praias, comunidades locais e o meio ambiente." }
  ],
  faqs: [
    { q: { en: "What is North Goa famous for?", es: "\u00bfPor qu\u00e9 es famosa North Goa?", pt: "Pelo que North Goa \u00e9 famosa?" }, a: { en: "Beaches, nightlife, markets, forts, caf\u00e9s and outdoor activities.", es: "Playas, vida nocturna, mercados, fuertes, caf\u00e9s y actividades al aire libre.", pt: "Praias, vida noturna, mercados, fortes, caf\u00e9s e atividades ao ar livre." } },
    { q: { en: "How many days are enough?", es: "\u00bfCu\u00e1ntos d\u00edas son suficientes?", pt: "Quantos dias s\u00e3o suficientes?" }, a: { en: "Three to four days are ideal.", es: "Tres a cuatro d\u00edas son ideales.", pt: "Tr\u00eas a quatro dias s\u00e3o ideais." } },
    { q: { en: "Is North Goa good for families?", es: "\u00bfBuena para familias?", pt: "Boa para fam\u00edlias?" }, a: { en: "Yes, especially around family-friendly beaches and resorts.", es: "S\u00ed, especialmente alrededor de playas y resorts familiares.", pt: "Sim, especialmente em praias e resorts adequados para fam\u00edlias." } },
    { q: { en: "Is North Goa good for nightlife?", es: "\u00bfBuena para vida nocturna?", pt: "Boa para vida noturna?" }, a: { en: "Yes, it generally offers more nightlife options than South Goa.", es: "S\u00ed, generalmente ofrece m\u00e1s opciones de vida nocturna que South Goa.", pt: "Sim, geralmente oferece mais op\u00e7\u00f5es de vida noturna do que South Goa." } },
    { q: { en: "Can North Goa and Panaji be combined?", es: "\u00bfSe pueden combinar?", pt: "Podem ser combinados?" }, a: { en: "Yes, they can easily be included in the same itinerary.", es: "S\u00ed, pueden incluirse f\u00e1cilmente en el mismo itinerario.", pt: "Sim, podem ser facilmente inclu\u00eddos no mesmo roteiro." } }
  ],
  gettingAround: [
    { transportType: "Scooter", title: { en: "Scooter / Motorbike", es: "Scooter / Moto", pt: "Scooter / Moto" }, desc: { en: "Popular for independent exploration where legally permitted.", es: "Popular para exploraci\u00f3n independiente.", pt: "Popular para explora\u00e7\u00e3o independente." }, recommended: true },
    { transportType: "Taxi", title: { en: "Taxi", es: "Taxi", pt: "T\u00e1xi" }, desc: { en: "Convenient for sightseeing and transfers.", es: "Conveniente para visitas y traslados.", pt: "Conveniente para passeios e traslados." }, recommended: true },
    { transportType: "Private Car", title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" }, desc: { en: "Comfortable for families and groups.", es: "C\u00f3modo para familias y grupos.", pt: "Confort\u00e1vel para fam\u00edlias e grupos." }, recommended: false },
    { transportType: "Auto-Rickshaw", title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriqu\u00edx\u00e1" }, desc: { en: "Useful for short distances.", es: "\u00datil para distancias cortas.", pt: "\u00datil para dist\u00e2ncias curtas." }, recommended: false },
    { transportType: "Walking", title: { en: "Walking", es: "Caminar", pt: "Caminhada" }, desc: { en: "Ideal within individual beach and market areas.", es: "Ideal en playas y mercados.", pt: "Ideal em praias e mercados." }, recommended: false }
  ],
  hotels: [
    { name: "Taj Fort Aguada Resort & Spa", tier: "Luxury", desc: { en: "Luxury coastal accommodation near the historic Aguada Fort area.", es: "Alojamiento costero de lujo cerca del hist\u00f3rico Fuerte de Aguada.", pt: "Hospedagem costeira de luxo perto do hist\u00f3rico Forte de Aguada." }, image: "" },
    { name: "Hyatt Centric Candolim Goa", tier: "Luxury", desc: { en: "Modern premium hotel in the Candolim area.", es: "Hotel moderno premium en la zona de Candolim.", pt: "Hotel moderno premium na regi\u00e3o de Candolim." }, image: "" },
    { name: "Le M\u00e9ridien Goa, Calangute", tier: "Luxury", desc: { en: "Premium accommodation close to Calangute\u2019s beach and attractions.", es: "Alojamiento premium cerca de la playa y atracciones de Calangute.", pt: "Hospedagem premium perto da praia e atra\u00e7\u00f5es de Calangute." }, image: "" },
    { name: "W Goa", tier: "Luxury", desc: { en: "Luxury resort-style stay around Vagator with a premium coastal atmosphere.", es: "Alojamiento de lujo en la zona de Vagator con ambiente costero premium.", pt: "Hospedagem de luxo na regi\u00e3o de Vagator com atmosfera costeira premium." }, image: "" },
    { name: "La Cabana Beach & Spa", tier: "Mid-Range", desc: { en: "Relaxed beach-oriented accommodation around Ashwem/Mandrem.", es: "Alojamiento tranquilo orientado a la playa en Ashwem/Mandrem.", pt: "Hospedagem tranquila pr\u00f3xima \u00e0 praia em Ashwem/Mandrem." }, image: "" }
  ],
  localFood: {
    en: "Try Fish Thali (rice, fish curry, local sides), Goan Prawn Curry (coconut-based), Chicken Cafreal (green herbs), Pork Vindaloo (tangy spicy) and Bebinca (layered coconut dessert).",
    es: "Pruebe Fish Thali (arroz y curry), Prawn Curry (con coco), Cafreal (hierbas verdes), Vindaloo (picante) y Bebinca (postre en capas).",
    pt: "Prove Fish Thali (arroz e curry), Prawn Curry (com coco), Cafreal (ervas verdes), Vindaloo (picante) e Bebinca (sobremesa em camadas)."
  },
  image: "/images/goa 3.jpg"
};

// Apply updates
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
const v = JSON.parse(fs.readFileSync(file, "utf-8"));
const goa = v.find(s => s.slug === "goa");
console.log("\n=== GOA CITIES ===");
goa.cities.forEach(c => {
  console.log(c.slug + ": things=" + (c.thingsToDo||[]).length + " exp=" + (c.experiences||[]).length + " hotels=" + (c.hotels||[]).length + " tips=" + (c.travelTips||[]).length + " faqs=" + (c.faqs||[]).length + " getting=" + (c.gettingAround||[]).length + " highlights=" + (c.highlights||[]).length);
});
console.log("\nDONE!");
