import fs from "fs";
import path from "path";
const file = path.join(process.cwd(), "src/data/fallback/states.json");
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "goa");
if (idx === -1) { console.log("Goa not found!"); process.exit(1); }

const cityUpdates = {
  panaji: {
    overview: { en: "Panaji is the cultural and administrative heart of Goa, offering a fascinating blend of colonial history, Goan traditions and modern urban life. The colourful Fontainhas quarter, historic churches, riverside promenades and Mandovi River create a distinctive atmosphere.", es: "Panaji es el corazón cultural y administrativo de Goa y combina historia colonial, tradiciones locales y vida urbana moderna. El colorido barrio de Fontainhas, las iglesias históricas y el río Mandovi crean una atmósfera única.", pt: "Panaji é o coração cultural e administrativo de Goa, combinando história colonial, tradições goesas e vida urbana moderna. O colorido bairro de Fontainhas, as igrejas históricas e o Mandovi criam uma atmosfera única." },
    thingsToDo: [
      { en: "Explore Fontainhas — colourful Portuguese-style heritage lanes", es: "Recorre las coloridas calles históricas de estilo portugués", pt: "Caminhe pelas coloridas ruas históricas de estilo português" },
      { en: "Visit Immaculate Conception Church — historic landmark with city views", es: "Explora la iglesia histórica con vistas al centro", pt: "Explore a igreja histórica com vistas sobre o centro" },
      { en: "Take a Mandovi River Cruise — scenic views and cultural performances", es: "Disfruta de vistas del río y espectáculos culturales", pt: "Aprecie vistas do rio e apresentações culturais" },
      { en: "Explore local markets — spices, handicrafts and souvenirs", es: "Compra especias, artesanías y recuerdos", pt: "Compre especiarias, artesanato e lembranças" },
      { en: "Walk along the Mandovi waterfront — relaxing riverside evening", es: "Disfruta de un paseo relajante junto al río Mandovi", pt: "Faça uma caminhada relaxante às margens do Mandovi" }
    ],
    experiences: [
      { name: { en: "Heritage Walking Experience", es: "Experiencia de Paseo Histórico", pt: "Experiência de Passeio Histórico" }, desc: { en: "Discover Panaji's history through its architecture, churches and colourful neighbourhoods.", es: "Descubre la historia a través de arquitectura, iglesias y barrios coloridos.", pt: "Conheça a história através da arquitetura, igrejas e bairros coloridos." } },
      { name: { en: "Mandovi Sunset Cruise", es: "Crucero al Atardecer", pt: "Cruzeiro ao Pôr do Sol" }, desc: { en: "Enjoy the changing colours of the sky over the river during sunset.", es: "Disfruta de los colores del cielo sobre el río al atardecer.", pt: "Aprecie as cores do céu sobre o rio ao pôr do sol." } },
      { name: { en: "Goan Culinary Experience", es: "Experiencia Culinaria Goana", pt: "Experiência Culinária Goesa" }, desc: { en: "Taste traditional Goan seafood, curries, snacks and desserts.", es: "Prueba mariscos, currys, aperitivos y postres de Goa.", pt: "Experimente frutos do mar, curries, petiscos e sobremesas de Goa." } },
      { name: { en: "Heritage Photography Experience", es: "Experiencia Fotográfica", pt: "Experiência Fotográfica" }, desc: { en: "Capture colourful houses, historic churches and atmospheric streets.", es: "Fotografía casas coloridas, iglesias y calles con ambiente.", pt: "Fotografe casas coloridas, igrejas e ruas cheias de personalidade." } },
      { name: { en: "Local Culture Experience", es: "Experiencia Cultural Local", pt: "Experiência Cultural Local" }, desc: { en: "Discover Goan music, traditions, markets and everyday city life.", es: "Descubre la música, tradiciones y vida cotidiana de Goa.", pt: "Descubra a música, tradições e vida cotidiana de Goa." } }
    ],
    localFood: { en: "Try Goan Fish Curry, Prawn Balchão, Chicken Cafreal, Pork Vindaloo and Bebinca.", es: "Pruebe Fish Curry, Prawn Balchão, Chicken Cafreal, Pork Vindaloo y Bebinca.", pt: "Prove Fish Curry, Prawn Balchão, Chicken Cafreal, Pork Vindaloo e Bebinca." },
    hotels: [
      { name: "Vivanta Goa, Panaji", tier: "Luxury", desc: { en: "Premium city hotel with comfortable rooms and convenient access.", es: "Hotel urbano premium con habitaciones cómodas.", pt: "Hotel urbano premium com quartos confortáveis." }, image: "" },
      { name: "The White Balcao", tier: "Boutique", desc: { en: "Boutique-style accommodation in historic Fontainhas area.", es: "Alojamiento boutique en Fontainhas.", pt: "Hospedagem boutique em Fontainhas." }, image: "" },
      { name: "Taj Cidade de Goa Horizon", tier: "Luxury", desc: { en: "Luxury seaside accommodation offering premium coastal experience.", es: "Alojamiento costero de lujo.", pt: "Hospedagem costeira de luxo." }, image: "" }
    ],
    travelTips: [
      { en: "Wear comfortable shoes for heritage walks.", es: "Usa calzado cómodo para paseos históricos.", pt: "Use calçados confortáveis para caminhadas históricas." },
      { en: "Carry sunscreen, sunglasses and water.", es: "Lleva protector solar, gafas de sol y agua.", pt: "Leve protetor solar, óculos de sol e água." },
      { en: "Dress respectfully when visiting churches.", es: "Viste respetuosamente al visitar iglesias.", pt: "Vista-se de forma respeitosa ao visitar igrejas." },
      { en: "Allow extra travel time during busy periods.", es: "Reserva tiempo adicional durante períodos concurridos.", pt: "Reserve tempo extra durante períodos movimentados." },
      { en: "Visit Fontainhas early for a quieter experience.", es: "Visita Fontainhas temprano para más tranquilidad.", pt: "Visite Fontainhas cedo para mais tranquilidade." }
    ],
    gettingAround: [
      { transportType: "Multiple", title: { en: "Taxi, Rickshaw, Scooter & Walking", es: "Taxi, Rickshaw, Scooter y Caminar", pt: "Táxi, Riquixá, Scooter e Caminhada" }, desc: { en: "Taxi for sightseeing. Rickshaw for short trips. Walking excellent for Fontainhas and central heritage areas.", es: "Taxi para visitas. Rickshaw para trayectos cortos. Caminar excelente para Fontainhas.", pt: "Táxi para passeios. Riquixá para trajetos curtos. Caminhada excelente para Fontainhas." }, recommended: true }
    ],
    faqs: [
      { q: { en: "What is Panaji famous for?", es: "¿Por qué es famosa Panaji?", pt: "O que Panaji é famosa?" }, a: { en: "Fontainhas, Portuguese heritage, churches and the Mandovi River.", es: "Fontainhas, patrimonio portugués, iglesias y el río Mandovi.", pt: "Fontainhas, patrimônio português, igrejas e o rio Mandovi." } },
      { q: { en: "How many days are enough?", es: "¿Cuántos días bastan?", pt: "Quantos dias são suficientes?" }, a: { en: "One to two days are enough for the main attractions.", es: "Uno o dos días son suficientes.", pt: "Um ou dois dias são suficientes." } },
      { q: { en: "Is Panaji good for families?", es: "¿Buena para familias?", pt: "Boa para famílias?" }, a: { en: "Yes, especially for families interested in culture and heritage.", es: "Sí, para familias interesadas en cultura.", pt: "Sim, para famílias interessadas em cultura." } },
      { q: { en: "Can Panaji and Old Goa be combined?", es: "¿Se combina con Old Goa?", pt: "Combina com Old Goa?" }, a: { en: "Yes, they can easily be visited on the same itinerary.", es: "Sí, fácilmente en el mismo itinerario.", pt: "Sim, facilmente no mesmo roteiro." } },
      { q: { en: "Is Panaji near North Goa beaches?", es: "¿Está cerca de las playas?", pt: "Fica perto das praias?" }, a: { en: "Yes, several North Goa beaches can be reached by road.", es: "Sí, accesibles por carretera.", pt: "Sim, acessíveis por estrada." } }
    ]
  },
  "old-goa": {
    overview: { en: "Old Goa was once a major centre of Portuguese power in Asia and today preserves an exceptional collection of churches and religious monuments. The Basilica of Bom Jesus, Sé Cathedral and other historic churches create one of Goa's most important heritage landscapes.", es: "Old Goa fue uno de los principales centros del poder portugués en Asia y hoy conserva una extraordinaria colección de iglesias y monumentos religiosos.", pt: "Old Goa foi um importante centro do poder português na Ásia e hoje preserva uma extraordinária coleção de igrejas e monumentos religiosos." },
    thingsToDo: [
      { en: "Visit Basilica of Bom Jesus — explore its religious heritage", es: "Explora la basílica y su patrimonio religioso", pt: "Explore a basílica e seu patrimônio religioso" },
      { en: "Visit Sé Cathedral — grand architecture and historic interiors", es: "Admira su grandiosa arquitectura e interiores", pt: "Admire sua grandiosa arquitetura e interiores" },
      { en: "Walk the Heritage Complex — several churches on foot", es: "Explora varias iglesias a pie", pt: "Explore várias igrejas a pé" },
      { en: "Visit Archaeological Museum — artefacts from Goa's past", es: "Descubre objetos de la historia de Goa", pt: "Conheça artefatos do passado de Goa" },
      { en: "Combine with Panaji — complete heritage day", es: "Combina con Panaji para un día completo", pt: "Combine com Panaji para um dia completo" }
    ],
    experiences: [
      { name: { en: "Heritage Walking Tour", es: "Paseo Histórico", pt: "Passeio Histórico" }, desc: { en: "Discover Old Goa's religious and architectural history.", es: "Descubre la historia religiosa y arquitectónica.", pt: "Conheça a história religiosa e arquitetônica." } },
      { name: { en: "Church Architecture Experience", es: "Experiencia Arquitectónica", pt: "Experiência Arquitetônica" }, desc: { en: "Study Portuguese-era design, carvings and craftsmanship.", es: "Descubre el diseño y artesanía portuguesa.", pt: "Observe o design e artesanato português." } },
      { name: { en: "Photography Experience", es: "Experiencia Fotográfica", pt: "Experiência Fotográfica" }, desc: { en: "Capture historic façades, interiors and heritage landscapes.", es: "Fotografía fachadas e interiores históricos.", pt: "Fotografe fachadas e interiores históricos." } },
      { name: { en: "Spiritual Heritage Experience", es: "Experiencia Espiritual", pt: "Experiência Espiritual" }, desc: { en: "Enjoy the peaceful atmosphere of Goa's historic churches.", es: "Disfruta del ambiente tranquilo de las iglesias.", pt: "Aprecie a atmosfera tranquila das igrejas." } },
      { name: { en: "Goa History Experience", es: "Experiencia Histórica", pt: "Experiência Histórica" }, desc: { en: "Learn about Goa's Portuguese-era history and cultural development.", es: "Conoce la historia portuguesa de Goa.", pt: "Conheça a história portuguesa de Goa." } }
    ],
    localFood: { en: "Try Goan Fish Curry, Prawn Balchão, Chicken Cafreal, Pork Vindaloo and Bebinca.", es: "Pruebe Fish Curry, Prawn Balchão, Cafreal, Vindaloo y Bebinca.", pt: "Prove Fish Curry, Prawn Balchão, Cafreal, Vindaloo e Bebinca." },
    hotels: [
      { name: "DoubleTree by Hilton Goa", tier: "Luxury", desc: { en: "Premium hotel convenient for both Old Goa and Panaji.", es: "Hotel premium para Old Goa y Panaji.", pt: "Hotel premium para Old Goa e Panaji." }, image: "" },
      { name: "Vivanta Goa, Panaji", tier: "Luxury", desc: { en: "Modern premium stay with easy access to heritage attractions.", es: "Alojamiento premium cerca de atracciones.", pt: "Hospedagem premium perto de atrações." }, image: "" },
      { name: "Heritage Guesthouses", tier: "Mid-Range", desc: { en: "Smaller local properties for a personal cultural experience.", es: "Propiedades locales para experiencia personal.", pt: "Propriedades locais para experiência pessoal." }, image: "" }
    ],
    travelTips: [
      { en: "Dress respectfully inside churches.", es: "Viste respetuosamente dentro de las iglesias.", pt: "Vista-se respeitosamente dentro das igrejas." },
      { en: "Maintain silence during religious services.", es: "Mantén silencio durante los servicios.", pt: "Mantenha silêncio durante os serviços." },
      { en: "Wear comfortable shoes.", es: "Usa calzado cómodo.", pt: "Use calçados confortáveis." },
      { en: "Carry water and sun protection.", es: "Lleva agua y protección solar.", pt: "Leve água e proteção solar." },
      { en: "Follow photography restrictions at individual sites.", es: "Respeta las restricciones de fotografía.", pt: "Respeite as restrições de fotografia." }
    ],
    gettingAround: [
      { transportType: "Multiple", title: { en: "Walking, Taxi & Private Car", es: "Caminar, Taxi y Coche", pt: "Caminhada, Táxi e Carro" }, desc: { en: "Walking best within heritage complex. Taxi for Old Goa area. Private car for combining with Panaji.", es: "Caminar dentro del complejo. Taxi para la zona. Coche para combinar con Panaji.", pt: "Caminhada no complexo. Táxi para a zona. Carro para combinar com Panaji." }, recommended: true }
    ],
    faqs: [
      { q: { en: "What is Old Goa famous for?", es: "¿Por qué es famosa?", pt: "O que é famosa?" }, a: { en: "Historic churches, basilicas and Portuguese-era heritage.", es: "Iglesias, basílicas y patrimonio portugués.", pt: "Igrejas, basílicas e patrimônio português." } },
      { q: { en: "How long should I spend here?", es: "¿Cuánto tiempo?", pt: "Quanto tempo?" }, a: { en: "Half a day is enough; one day allows a slower visit.", es: "Medio día suficiente; un día para visita relajada.", pt: "Meio dia suficiente; um dia para visita tranquila." } },
      { q: { en: "Is Old Goa family-friendly?", es: "¿Buena para familias?", pt: "Boa para famílias?" }, a: { en: "Yes, particularly for families interested in history and architecture.", es: "Sí, para familias interesadas en historia.", pt: "Sim, para famílias interessadas em história." } }
    ]
  },
  "north-goa": {
    overview: { en: "North Goa combines beaches, entertainment, heritage and adventure across a diverse coastline. Baga and Calangute offer energetic beach experiences, Anjuna is known for its creative and market culture, Vagator provides dramatic coastal scenery and Chapora Fort, while Arambol offers a more relaxed bohemian atmosphere.", es: "North Goa combina playas, entretenimiento, patrimonio y aventura. Baga y Calangute ofrecen experiencias animadas, Anjuna destaca por sus mercados, Vagator por el Fuerte de Chapora y Arambol por su ambiente bohemio.", pt: "North Goa combina praias, entretenimento, patrimônio e aventura. Baga e Calangute oferecem experiências animadas, Anjuna é conhecida por seus mercados, Vagator pelo Forte de Chapora e Arambol por sua atmosfera boêmia." },
    thingsToDo: [
      { en: "Visit Baga Beach — restaurants, activities and entertainment", es: "Disfruta de la playa, restaurantes y actividades", pt: "Aproveite a praia, restaurantes e atividades" },
      { en: "Explore Calangute — beach, shops and local dining", es: "Descubre la playa, tiendas y gastronomía", pt: "Explore a praia, lojas e gastronomia" },
      { en: "Visit Chapora Fort — historic architecture and coastal views", es: "Disfruta de arquitectura histórica y vistas", pt: "Aprecie a arquitetura histórica e as vistas" },
      { en: "Explore Anjuna — markets, cafés and creative spaces", es: "Visita mercados, cafés y espacios creativos", pt: "Visite mercados, cafés e espaços criativos" },
      { en: "Watch sunset at Vagator — dramatic coastal views", es: "Disfruta de espectaculares atardeceres", pt: "Aprecie espetaculares pores do sol" }
    ],
    experiences: [
      { name: { en: "Beach Experience", es: "Experiencia de Playa", pt: "Experiência de Praia" }, desc: { en: "Enjoy North Goa's lively beaches and coastal atmosphere.", es: "Disfruta de las playas animadas.", pt: "Aproveite as praias animadas." } },
      { name: { en: "Nightlife & Entertainment", es: "Vida Nocturna", pt: "Vida Noturna" }, desc: { en: "Discover restaurants, live entertainment and evening venues.", es: "Descubre restaurantes y locales nocturnos.", pt: "Descubra restaurantes e locais noturnos." } },
      { name: { en: "Fort & Heritage Experience", es: "Experiencia de Fuerte y Patrimonio", pt: "Experiência de Forte e Patrimônio" }, desc: { en: "Combine Chapora and Aguada with coastal sightseeing.", es: "Combina Chapora y Aguada con visitas costeras.", pt: "Combine Chapora e Aguada com passeios costeiros." } },
      { name: { en: "Anjuna Market Experience", es: "Experiencia del Mercado de Anjuna", pt: "Experiência do Mercado de Anjuna" }, desc: { en: "Explore local handicrafts, clothing, souvenirs and products.", es: "Explora artesanías, ropa y recuerdos.", pt: "Explore artesanato, roupas e lembranças." } },
      { name: { en: "Sunset Café Experience", es: "Experiencia de Café al Atardecer", pt: "Experiência de Café ao Pôr do Sol" }, desc: { en: "Enjoy sunset views followed by relaxed coastal dining.", es: "Atardecer seguido de cena relajada.", pt: "Pôr do sol seguido de refeição descontraída." } }
    ],
    localFood: { en: "Try Fish Thali, Goan Prawn Curry, Chicken Cafreal, Pork Vindaloo and Bebinca.", es: "Pruebe Fish Thali, Prawn Curry, Cafreal, Vindaloo y Bebinca.", pt: "Prove Fish Thali, Prawn Curry, Cafreal, Vindaloo e Bebinca." },
    hotels: [
      { name: "Taj Fort Aguada Resort & Spa", tier: "Luxury", desc: { en: "Luxury coastal accommodation near historic Aguada Fort.", es: "Alojamiento costero de lujo.", pt: "Hospedagem costeira de luxo." }, image: "" },
      { name: "W Goa", tier: "Luxury", desc: { en: "Luxury resort-style stay around Vagator.", es: "Alojamiento de lujo en Vagator.", pt: "Hospedagem de luxo em Vagator." }, image: "" },
      { name: "Le Méridien Goa, Calangute", tier: "Luxury", desc: { en: "Premium accommodation close to Calangute beach.", es: "Alojamiento premium cerca de Calangute.", pt: "Hospedagem premium perto de Calangute." }, image: "" }
    ],
    travelTips: [
      { en: "Popular beaches can become crowded during peak season.", es: "Las playas pueden estar concurridas en temporada alta.", pt: "As praias podem ficar lotadas na alta temporada." },
      { en: "Follow local swimming and water-activity safety instructions.", es: "Sigue las normas de seguridad acuática.", pt: "Siga as normas de segurança aquática." },
      { en: "Keep valuables secure in crowded areas.", es: "Mantén objetos de valor seguros.", pt: "Mantenha objetos de valor seguros." },
      { en: "Arrange transport in advance for late-night travel.", es: "Organiza transporte para viajes nocturnos.", pt: "Organize transporte para viagens noturnas." },
      { en: "Respect beaches, local communities and environment.", es: "Respeta playas, comunidades y medio ambiente.", pt: "Respeite praias, comunidades e meio ambiente." }
    ],
    gettingAround: [
      { transportType: "Multiple", title: { en: "Scooter, Taxi, Private Car & Walking", es: "Scooter, Taxi, Coche y Caminar", pt: "Scooter, Táxi, Carro e Caminhada" }, desc: { en: "Scooter popular for independent travel. Taxi for sightseeing. Walking ideal within beach and market areas.", es: "Scooter para viaje independiente. Taxi para visitas. Caminar en playas y mercados.", pt: "Scooter para viagem independente. Táxi para passeios. Caminhada em praias e mercados." }, recommended: true }
    ],
    faqs: [
      { q: { en: "What is North Goa famous for?", es: "¿Por qué es famosa?", pt: "O que é famosa?" }, a: { en: "Beaches, nightlife, markets, forts, cafés and outdoor activities.", es: "Playas, vida nocturna, mercados, fuertes y cafés.", pt: "Praias, vida noturna, mercados, fortes e cafés." } },
      { q: { en: "How many days are enough?", es: "¿Cuántos días?", pt: "Quantos dias?" }, a: { en: "Three to four days are ideal.", es: "Tres a cuatro días.", pt: "Três a quatro dias." } },
      { q: { en: "Is North Goa good for families?", es: "¿Buena para familias?", pt: "Boa para famílias?" }, a: { en: "Yes, especially around family-friendly beaches and resorts.", es: "Sí, especialmente playas familiares.", pt: "Sim, especialmente praias familiares." } }
    ]
  },
  "south-goa": {
    overview: { en: "South Goa offers a slower and more peaceful side of Goa, with palm-lined beaches, coastal villages, lagoons and scenic landscapes. Beaches such as Palolem, Colva and Benaulim provide different experiences. South Goa is particularly attractive for honeymooners, families, wellness travellers and anyone seeking a relaxed coastal escape.", es: "South Goa ofrece un lado más tranquilo, con playas bordeadas de palmeras, pueblos costeros y paisajes naturales. Playas como Palolem, Colva y Benaulim ofrecen experiencias diferentes.", pt: "South Goa oferece um lado mais tranquilo, com praias cercadas por coqueiros, vilarejos costeiros e paisagens naturais. Praias como Palolem, Colva e Benaulim oferecem experiências diferentes." },
    thingsToDo: [
      { en: "Relax at Palolem — peaceful beach and scenery", es: "Pasa un día tranquilo en la playa Palolem", pt: "Passe um dia tranquilo na praia de Palolem" },
      { en: "Explore Colva — beach, restaurants and local areas", es: "Descubre la playa, restaurantes y zonas locales", pt: "Explore a praia, restaurantes e áreas locais" },
      { en: "Visit Benaulim — quieter atmosphere away from crowds", es: "Disfruta de un ambiente más tranquilo", pt: "Aproveite uma atmosfera mais tranquila" },
      { en: "Explore Cavelossim — beach, riverside and resorts", es: "Descubre playa, río y zonas de resorts", pt: "Explore praia, rio e áreas de resorts" },
      { en: "Enjoy a sunset walk along the Arabian Sea", es: "Da un paseo al atardecer junto al mar", pt: "Faça uma caminhada ao pôr do sol junto ao mar" }
    ],
    experiences: [
      { name: { en: "Romantic Beach Escape", es: "Escapada Romántica de Playa", pt: "Escapada Romântica na Praia" }, desc: { en: "Enjoy sunsets, beach walks and peaceful resort stays.", es: "Disfruta de atardeceres, paseos y resorts tranquilos.", pt: "Desfrute de pores do sol, caminhadas e resorts tranquilos." } },
      { name: { en: "Luxury Coastal Experience", es: "Experiencia Costera de Lujo", pt: "Experiência Costeira de Luxo" }, desc: { en: "Stay at premium resorts and enjoy wellness facilities.", es: "Alójate en resorts premium con bienestar.", pt: "Hospede-se em resorts premium com bem-estar." } },
      { name: { en: "Sunset Experience", es: "Experiencia del Atardecer", pt: "Experiência do Pôr do Sol" }, desc: { en: "Watch the sun set over the Arabian Sea.", es: "Observa el atardecer sobre el mar Arábigo.", pt: "Observe o pôr do sol sobre o Mar Arábico." } },
      { name: { en: "Goan Food Experience", es: "Experiencia Gastronómica", pt: "Experiência Gastronômica" }, desc: { en: "Explore traditional seafood and local Goan cuisine.", es: "Descubre mariscos y gastronomía de Goa.", pt: "Explore frutos do mar e culinária goesa." } },
      { name: { en: "Nature & Wellness Experience", es: "Experiencia de Naturaleza y Bienestar", pt: "Experiência de Natureza e Bem-estar" }, desc: { en: "Combine beaches, greenery, wellness and peaceful surroundings.", es: "Combina playas, naturaleza y bienestar.", pt: "Combine praias, natureza e bem-estar." } }
    ],
    localFood: { en: "Try Goan Fish Curry, Prawn Balchão, Chicken Cafreal, Sorpotel and Bebinca.", es: "Pruebe Fish Curry, Prawn Balchão, Cafreal, Sorpotel y Bebinca.", pt: "Prove Fish Curry, Prawn Balchão, Cafreal, Sorpotel e Bebinca." },
    hotels: [
      { name: "ITC Grand Goa", tier: "Luxury", desc: { en: "Luxury resort offering premium coastal escape.", es: "Resort de lujo para experiencia costera premium.", pt: "Resort de luxo para experiência costeira premium." }, image: "" },
      { name: "The Zuri White Sands", tier: "Luxury", desc: { en: "Premium resort with extensive facilities and beach access.", es: "Resort premium con instalaciones y playa.", pt: "Resort premium com instalações e praia." }, image: "" },
      { name: "Novotel Goa Dona Sylvia", tier: "Mid-Range", desc: { en: "Premium resort option around Cavelossim.", es: "Resort premium en Cavelossim.", pt: "Resort premium em Cavelossim." }, image: "" }
    ],
    travelTips: [
      { en: "Book beachfront accommodation early during peak season.", es: "Reserva alojamiento frente al mar con anticipación.", pt: "Reserve hospedagem à beira-mar com antecedência." },
      { en: "Carry sunscreen and water.", es: "Lleva protector solar y agua.", pt: "Leve protetor solar e água." },
      { en: "Keep valuables secure at beaches.", es: "Mantén objetos de valor seguros.", pt: "Mantenha objetos de valor seguros." },
      { en: "Follow beach safety and swimming advisories.", es: "Sigue recomendaciones de seguridad.", pt: "Siga orientações de segurança." },
      { en: "Explore quieter beaches beyond busiest tourist areas.", es: "Explora playas más tranquilas.", pt: "Explore praias mais tranquilas." }
    ],
    gettingAround: [
      { transportType: "Multiple", title: { en: "Private Car, Taxi, Scooter & Bus", es: "Coche, Taxi, Scooter y Autobús", pt: "Carro, Táxi, Scooter e Ônibus" }, desc: { en: "Private car best for multiple beaches. Taxi for transfers. Scooter for independent travel. Bus affordable between towns.", es: "Coche para playas. Taxi para traslados. Scooter independiente. Autobús económico.", pt: "Carro para praias. Táxi para traslados. Scooter independente. Ônibus econômico." }, recommended: true }
    ],
    faqs: [
      { q: { en: "What is South Goa famous for?", es: "¿Por qué es famosa?", pt: "O que é famosa?" }, a: { en: "Quiet beaches, resorts, nature and relaxed holidays.", es: "Playas tranquilas, resorts y vacaciones relajadas.", pt: "Praias tranquilas, resorts e férias relaxantes." } },
      { q: { en: "How many days are enough?", es: "¿Cuántos días?", pt: "Quantos dias?" }, a: { en: "Three to four days are ideal.", es: "Tres a cuatro días.", pt: "Três a quatro dias." } },
      { q: { en: "Is South Goa good for honeymoon?", es: "¿Buena para luna de miel?", pt: "Boa para lua de mel?" }, a: { en: "Yes, especially peaceful beaches and premium stays.", es: "Sí, playas tranquilas y alojamientos premium.", pt: "Sim, praias tranquilas e hospedagens premium." } }
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
  if (updates.faqs) states[idx].cities[cityIdx].faqs = updates.faqs;
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");
console.log("✅ Goa cities updated with full details:");
states[idx].cities.forEach(c => {
  console.log(`   - ${c.slug}: thingsToDo=${Array.isArray(c.thingsToDo)?c.thingsToDo.length:'?'}, experiences=${(c.experiences||[]).length}, hotels=${(c.hotels||[]).length}, tips=${(c.travelTips||[]).length}, faqs=${(c.faqs||[]).length}`);
});
