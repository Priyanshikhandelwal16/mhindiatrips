/**
 * Script to add comprehensive city data to states that are missing details.
 * Run with: node scripts/fill-states-data.mjs
 */
import fs from "fs";
import path from "path";

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");
const statesFile = path.join(FALLBACK_DIR, "states.json");

// Load existing states
let states = [];
if (fs.existsSync(statesFile)) {
  states = JSON.parse(fs.readFileSync(statesFile, "utf-8"));
}

// New cities data to add to existing states
const additionalCitiesData = {
  "uttar-pradesh": {
    travelTips: [
      { en: "Book a sunrise boat ride on the Ganges at least a day in advance.", es: "Reserve un paseo en barco al amanecer con un día de antelación.", pt: "Reserve um passeio de barco ao amanhecer com um dia de antecedência." },
      { en: "Carry comfortable shoes — many heritage sites involve walking on uneven surfaces.", es: "Lleve zapatos cómodos para los sitios históricos.", pt: "Leve sapatos confortáveis para os locais históricos." },
      { en: "Agra is best visited as a 2-day trip from Delhi (200 km).", es: "Agra se visita mejor en 2 días desde Delhi.", pt: "Agra é melhor visitada em 2 dias a partir de Delhi." },
      { en: "Respect photography rules inside the Taj Mahal complex.", es: "Respete las reglas de fotografía en el Taj Mahal.", pt: "Respeite as regras de fotografia no Taj Mahal." }
    ],
    faqs: [
      { q: { en: "How many days needed for Uttar Pradesh?", es: "¿Cuántos días se necesitan?", pt: "Quantos dias são necessários?" }, a: { en: "5-7 days to cover Agra (2 days), Varanasi (3 days), and Lucknow (2 days). For just Agra + Varanasi, 4-5 days is sufficient.", es: "5-7 días para cubrir Agra, Varanasi y Lucknow.", pt: "5-7 dias para cobrir Agra, Varanasi e Lucknow." } },
      { q: { en: "Is Varanasi safe for tourists?", es: "¿Es seguro Varanasi?", pt: "Varanasi é segura?" }, a: { en: "Yes, Varanasi is safe for tourists. The narrow lanes can feel overwhelming but are generally safe. Our private guides navigate these easily.", es: "Sí, Varanasi es segura para turistas.", pt: "Sim, Varanasi é segura para turistas." } },
      { q: { en: "What is the best time to see the Taj Mahal?", es: "¿Cuál es la mejor hora para el Taj Mahal?", pt: "Qual a melhor hora para o Taj Mahal?" }, a: { en: "Sunrise offers the best light and fewer crowds. The Taj Mahal is closed on Fridays. Full moon nights offer special viewing (book in advance).", es: "El amanecer ofrece la mejor luz. Cerrado los viernes.", pt: "O amanhecer oferece a melhor luz. Fechado às sextas." } }
    ],
    cities: [
      {
        slug: "agra",
        title: { en: "Agra", es: "Agra", pt: "Agra" },
        tagline: { en: "Home of the Taj Mahal & Mughal Splendor", es: "Hogar del Taj Mahal y Esplendor Mogol", pt: "Lar do Taj Mahal e Esplendor Mogol" },
        image: "/images/taj_mahal_sunrise.png",
        gallery: [],
        overview: { en: "Agra is home to three UNESCO World Heritage Sites — the Taj Mahal, Agra Fort, and Fatehpur Sikri. Once the capital of the Mughal Empire, this city showcases some of the finest examples of Mughal architecture in the world. The Taj Mahal, built by Emperor Shah Jahan for his beloved wife Mumtaz, draws over 7 million visitors annually.", es: "Agra alberga tres sitios del Patrimonio Mundial de la UNESCO — el Taj Mahal, el Fuerte de Agra y Fatehpur Sikri.", pt: "Agra abriga três locais do Patrimônio Mundial da UNESCO — o Taj Mahal, o Forte de Agra e Fatehpur Sikri." },
        history: { en: "Capital of the Mughal Empire from 1526-1658 under Babur, Akbar, Jahangir, and Shah Jahan. The city reached its zenith during Akbar's reign.", es: "Capital del Imperio Mogol de 1526 a 1658.", pt: "Capital do Império Mogol de 1526 a 1658." },
        culture: { en: "Marble inlay work (Pietra Dura), Mughal miniature paintings, leather crafts, and Zardozi embroidery.", es: "Trabajo de incrustación en mármol y pintura mogol en miniatura.", pt: "Trabalho de incrustação em mármore e pintura mogol em miniatura." },
        attractions: [
          { slug: "taj-mahal", name: { en: "Taj Mahal", es: "Taj Mahal", pt: "Taj Mahal" }, desc: { en: "The iconic ivory-white marble mausoleum, built 1632-1653 by Emperor Shah Jahan. A UNESCO World Heritage Site and one of the New Seven Wonders of the World. The symmetrical gardens, reflecting pools, and intricate calligraphy make it architecture's greatest love poem.", es: "El icónico mausoleo de mármol blanco marfil, construido entre 1632-1653.", pt: "O icônico mausoléu de mármore branco marfim, construído entre 1632-1653." }, history: { en: "Commissioned by Emperor Shah Jahan in memory of wife Mumtaz Mahal who died in 1631. Took 22 years and 20,000 artisans to complete.", es: "Encargado por el emperador Shah Jahan en memoria de su esposa.", pt: "Encomendado pelo imperador Shah Jahan em memória da esposa." }, architecture: { en: "Symmetrical white marble with precious stone inlay (pietra dura). Central dome rises 73 meters. Four minarets, mosque, and guest house.", es: "Mármol blanco simétrico con incrustaciones de piedras preciosas.", pt: "Mármore branco simétrico com incrustações de pedras preciosas." }, timings: { en: "Sunrise to Sunset (6:00 AM - 6:30 PM). Closed Fridays.", es: "Amanecer a atardecer. Cerrado viernes.", pt: "Nascer ao pôr do sol. Fechado sextas." }, info: { en: "Visit at sunrise for best photos and smallest crowds. Allow 2-3 hours. No tripods allowed.", es: "Visite al amanecer. Reserve 2-3 horas.", pt: "Visite ao amanhecer. Reserve 2-3 horas." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
          { slug: "agra-fort", name: { en: "Agra Fort", es: "Fuerte de Agra", pt: "Forte de Agra" }, desc: { en: "A massive 16th-century red sandstone fortress and UNESCO World Heritage Site. Houses beautiful palaces, audience halls, and mosques within its 2.5 km walls. Shah Jahan was imprisoned here by his son Aurangzeb, gazing at the Taj Mahal until death.", es: "Una masiva fortaleza de arenisca roja del siglo XVI y Patrimonio Mundial.", pt: "Uma massiva fortaleza de arenito vermelho do século XVI e Patrimônio Mundial." }, history: { en: "Built by Emperor Akbar in 1565. Expanded by Shah Jahan with white marble additions.", es: "Construido por el emperador Akbar en 1565.", pt: "Construído pelo imperador Akbar em 1565." }, architecture: { en: "Red sandstone and white marble. Blend of Islamic and Hindu architectural styles.", es: "Arenisca roja y mármol blanco. Mezcla islámica e hindú.", pt: "Arenito vermelho e mármore branco. Mistura islâmica e hindu." }, timings: { en: "6:00 AM to 6:00 PM daily", es: "6:00 AM a 6:00 PM diario", pt: "6:00 às 18:00 diariamente" }, info: { en: "Allow 2 hours. Don't miss Musamman Burj (where Shah Jahan was imprisoned) for Taj views.", es: "Reserve 2 horas. No pierda las vistas del Taj.", pt: "Reserve 2 horas. Não perca as vistas do Taj." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
          { slug: "fatehpur-sikri", name: { en: "Fatehpur Sikri", es: "Fatehpur Sikri", pt: "Fatehpur Sikri" }, desc: { en: "Emperor Akbar's abandoned red sandstone capital city, 37 km from Agra. A UNESCO World Heritage Site perfectly preserved as a ghost city, featuring Buland Darwaza (the tallest gateway in the world) and the tomb of Sufi saint Salim Chishti.", es: "La capital abandonada del emperador Akbar, a 37 km de Agra.", pt: "A capital abandonada do imperador Akbar, a 37 km de Agra." }, history: { en: "Built 1571-1585 by Emperor Akbar. Abandoned after 15 years due to water scarcity.", es: "Construida 1571-1585. Abandonada por escasez de agua.", pt: "Construída 1571-1585. Abandonada por escassez de água." }, architecture: { en: "Pristine red sandstone with intricate carved screens and courtyards.", es: "Arenisca roja con pantallas talladas.", pt: "Arenito vermelho com telas esculpidas." }, timings: { en: "Sunrise to Sunset daily", es: "Amanecer a atardecer", pt: "Nascer ao pôr do sol" }, info: { en: "Half-day trip from Agra. Hire a guide to understand the ruins' history.", es: "Medio día desde Agra. Contrate un guía.", pt: "Meio dia a partir de Agra. Contrate um guia." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] }
        ],
        thingsToDo: [
          { en: "Sunrise visit to Taj Mahal", es: "Visita al amanecer al Taj Mahal", pt: "Visita ao amanhecer ao Taj Mahal" },
          { en: "Marble inlay workshop experience", es: "Taller de incrustación en mármol", pt: "Oficina de incrustação em mármore" },
          { en: "Sunset view from Mehtab Bagh (across the river from Taj)", es: "Atardecer desde Mehtab Bagh", pt: "Pôr do sol no Mehtab Bagh" },
          { en: "Street food walk in Sadar Bazaar", es: "Paseo gastronómico en Sadar Bazaar", pt: "Passeio gastronômico no Sadar Bazaar" },
          { en: "Day trip to Fatehpur Sikri ghost city", es: "Excursión a Fatehpur Sikri", pt: "Excursão a Fatehpur Sikri" }
        ],
        hotels: [
          { name: "The Oberoi Amarvilas", tier: "Luxury", desc: { en: "India's finest Taj-facing hotel. Every room has unobstructed views of the Taj Mahal. 600m from the monument.", es: "El mejor hotel con vista al Taj Mahal.", pt: "O melhor hotel com vista para o Taj Mahal." }, image: "" },
          { name: "ITC Mughal", tier: "Luxury", desc: { en: "A luxury hotel set in Mughal-inspired gardens with award-winning spa.", es: "Hotel de lujo con jardines mogoles.", pt: "Hotel de luxo com jardins mogóis." }, image: "" }
        ],
        localFood: { en: "Petha (sweet), Dalmoth, Bedai-Jalebi breakfast, Mughlai kebabs, Paratha, and the famous Agra ka Petha.", es: "Petha, Dalmoth, kebabs mogoles.", pt: "Petha, Dalmoth, kebabs mogóis." },
        shopping: { en: "Marble inlay items from Subhash Emporium, leather goods from Sadar Bazaar, Zardozi embroidery.", es: "Artículos de mármol y cuero de Sadar Bazaar.", pt: "Artigos de mármore e couro de Sadar Bazaar." },
        weather: { en: "Very hot summers (45°C+), pleasant winters (5-25°C). Avoid May-June.", es: "Veranos muy calurosos, inviernos agradables.", pt: "Verões muito quentes, invernos agradáveis." },
        bestTime: { en: "October to March (peak: November-February for mild weather)", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [
          { en: "Buy a composite ticket for Taj Mahal + Agra Fort + Fatehpur Sikri to save money.", es: "Compre boleto combinado para ahorrar.", pt: "Compre bilhete combinado para economizar." },
          { en: "The Taj Mahal is less crowded at sunrise. Enter from the South Gate for shortest queues.", es: "El Taj está menos lleno al amanecer.", pt: "O Taj está menos lotado ao amanhecer." }
        ],
        nearbyPlaces: [{ name: "Delhi", distance: "200 km" }, { name: "Jaipur", distance: "240 km" }, { name: "Mathura-Vrindavan", distance: "58 km" }],
        suggestedItinerary: { en: "Day 1: Sunrise Taj Mahal, afternoon Agra Fort, evening Mehtab Bagh sunset. Day 2: Morning Fatehpur Sikri, afternoon marble workshop, evening depart.", es: "Día 1: Taj Mahal al amanecer, Fuerte de Agra. Día 2: Fatehpur Sikri.", pt: "Dia 1: Taj Mahal ao amanhecer, Forte de Agra. Dia 2: Fatehpur Sikri." },
        faqs: [
          { q: { en: "How to reach Agra from Delhi?", es: "¿Cómo llegar desde Delhi?", pt: "Como chegar de Delhi?" }, a: { en: "By road: 3-4 hours via Yamuna Expressway. By train: Gatimaan Express (1h 40min) or Shatabdi (2h). We arrange private chauffeurs.", es: "Por carretera: 3-4 horas. En tren: 1h 40min.", pt: "Por estrada: 3-4 horas. De trem: 1h 40min." } },
          { q: { en: "Is one day enough for Agra?", es: "¿Basta un día?", pt: "Um dia é suficiente?" }, a: { en: "You can see the Taj Mahal and Agra Fort in one long day, but 2 days allows Fatehpur Sikri and a more relaxed pace.", es: "Se puede en un día largo, pero 2 días es mejor.", pt: "É possível num dia longo, mas 2 dias é melhor." } }
        ]
      },
      {
        slug: "lucknow",
        title: { en: "Lucknow", es: "Lucknow", pt: "Lucknow" },
        tagline: { en: "City of Nawabs, Kebabs & Mughal Elegance", es: "Ciudad de Nawabs, Kebabs y Elegancia Mogol", pt: "Cidade de Nawabs, Kebabs e Elegância Mogol" },
        image: "/images/uttar pradesh.jpg",
        gallery: [],
        overview: { en: "The capital of Uttar Pradesh and former seat of the Nawabs of Awadh. Lucknow is famous for its refined Awadhi cuisine (world-renowned kebabs and biryanis), Mughal-era monuments, and the distinctive Lucknowi chikan embroidery. Known as the 'City of Tehzeeb' (culture and etiquette).", es: "La capital de Uttar Pradesh y antigua sede de los Nawabs de Awadh.", pt: "A capital de Uttar Pradesh e antiga sede dos Nawabs de Awadh." },
        history: { en: "Rose to prominence as capital of Awadh Nawabs in the 18th century. Site of the 1857 Indian Rebellion siege at Residency.", es: "Capital de los Nawabs de Awadh en el siglo XVIII.", pt: "Capital dos Nawabs de Awadh no século XVIII." },
        culture: { en: "Awadhi culinary arts, Lucknowi chikan embroidery, Kathak dance, Urdu poetry (mushairas), and ittar (natural perfumes).", es: "Artes culinarias Awadhi y bordado chikan.", pt: "Artes culinárias Awadhi e bordado chikan." },
        attractions: [
          { slug: "bara-imambara", name: { en: "Bara Imambara", es: "Bara Imambara", pt: "Bara Imambara" }, desc: { en: "An 18th-century architectural marvel with the world's largest hall without external support beams. Features the mysterious Bhulbhulaiya labyrinth on the upper floors.", es: "Una maravilla arquitectónica del siglo XVIII con el salón más grande del mundo sin vigas externas.", pt: "Uma maravilha arquitetônica do século XVIII com o maior salão do mundo sem vigas externas." }, history: { en: "Built in 1784 by Nawab Asaf-ud-Daula as a famine relief project employing 20,000 workers.", es: "Construido en 1784 como proyecto contra la hambruna.", pt: "Construído em 1784 como projeto contra a fome." }, architecture: { en: "Mughal architecture. Central hall spans 50m without any pillar or beam.", es: "Arquitectura mogol. Salón central de 50m sin pilares.", pt: "Arquitetura mogol. Salão central de 50m sem pilares." }, timings: { en: "6:00 AM to 5:00 PM daily", es: "6:00 AM a 5:00 PM", pt: "6:00 às 17:00" }, info: { en: "Explore the Bhulbhulaiya maze on the upper floors — fascinating acoustics.", es: "Explore el laberinto Bhulbhulaiya.", pt: "Explore o labirinto Bhulbhulaiya." }, image: "/images/uttar pradesh.jpg", gallery: [], faqs: [] },
          { slug: "british-residency", name: { en: "British Residency", es: "Residencia Británica", pt: "Residência Britânica" }, desc: { en: "The ruins of the British Residency, site of the famous 1857 siege during the Indian Rebellion. The bullet-ridden buildings stand as a powerful reminder of India's freedom struggle.", es: "Las ruinas de la Residencia Británica, sitio del famoso asedio de 1857.", pt: "As ruínas da Residência Britânica, local do famoso cerco de 1857." }, history: { en: "Built in 1800. Site of 87-day siege during 1857 rebellion.", es: "Construida en 1800. Sitio del asedio de 87 días.", pt: "Construída em 1800. Local do cerco de 87 dias." }, architecture: { en: "Colonial-era brick buildings with visible cannon ball and bullet marks.", es: "Edificios coloniales con marcas de balas de cañón.", pt: "Edifícios coloniais com marcas de balas de canhão." }, timings: { en: "Sunrise to Sunset daily", es: "Amanecer a atardecer", pt: "Nascer ao pôr do sol" }, info: { en: "Evening sound and light show tells the story of the siege.", es: "Show de luz y sonido por la noche.", pt: "Show de luz e som à noite." }, image: "/images/uttar pradesh.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [
          { en: "Tunday Kababi kebab tasting (operating since 1905)", es: "Degustación de kebabs Tunday Kababi", pt: "Degustação de kebabs Tunday Kababi" },
          { en: "Chikan embroidery shopping in Aminabad", es: "Compras de bordado chikan en Aminabad", pt: "Compras de bordado chikan em Aminabad" },
          { en: "Heritage walk through Hussainabad area", es: "Caminata patrimonial por Hussainabad", pt: "Caminhada patrimonial por Hussainabad" },
          { en: "Evening food trail through old Lucknow", es: "Ruta gastronómica nocturna", pt: "Rota gastronômica noturna" }
        ],
        hotels: [
          { name: "Taj Mahal Lucknow", tier: "Luxury", desc: { en: "A luxury heritage hotel with Awadhi-themed interiors and rooftop dining.", es: "Hotel de lujo con interiores Awadhi.", pt: "Hotel de luxo com interiores Awadhi." }, image: "" }
        ],
        localFood: { en: "Tunday Kebabs, Lucknowi Biryani, Sheermal bread, Kulfi-Falooda, Basket Chaat, Makhan Malai.", es: "Tunday Kebabs, Biryani, Sheermal.", pt: "Tunday Kebabs, Biryani, Sheermal." },
        shopping: { en: "Chikan embroidery from Aminabad, ittar perfumes from Akbari Gate, silver jewelry.", es: "Bordado chikan y perfumes ittar.", pt: "Bordado chikan e perfumes ittar." },
        weather: { en: "Very hot summers, cool winters (4-22°C). Best Oct-Mar.", es: "Veranos muy calurosos, inviernos frescos.", pt: "Verões muito quentes, invernos frescos." },
        bestTime: { en: "October to March", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [{ en: "Don't miss the street food — Lucknow is India's kebab capital.", es: "No se pierda la comida callejera.", pt: "Não perca a comida de rua." }],
        nearbyPlaces: [{ name: "Varanasi", distance: "320 km" }, { name: "Agra", distance: "330 km" }, { name: "Delhi", distance: "500 km" }],
        suggestedItinerary: { en: "Day 1: Bara Imambara, Chota Imambara, evening food trail. Day 2: Residency, Aminabad shopping, Hazratganj walk.", es: "Día 1: Imambaras y comida. Día 2: Residencia y compras.", pt: "Dia 1: Imambaras e comida. Dia 2: Residência e compras." },
        faqs: []
      }
    ]
  },
  "himachal-pradesh": {
    travelTips: [
      { en: "Roads can be winding and slow — plan for extra travel time between destinations.", es: "Las carreteras son sinuosas — planifique tiempo extra.", pt: "As estradas são sinuosas — planeje tempo extra." },
      { en: "Carry warm layers even in summer — temperatures drop significantly at night.", es: "Lleve capas cálidas incluso en verano.", pt: "Leve camadas quentes mesmo no verão." },
      { en: "Check road conditions before traveling to Manali/Rohtang — roads close in winter.", es: "Verifique el estado de las carreteras en invierno.", pt: "Verifique as condições das estradas no inverno." }
    ],
    faqs: [
      { q: { en: "When does it snow in Himachal Pradesh?", es: "¿Cuándo nieva?", pt: "Quando neva?" }, a: { en: "Heavy snowfall in December-February in Shimla, Manali, and higher areas. Light snow possible in November and March.", es: "Nieve fuerte en diciembre-febrero.", pt: "Neve forte em dezembro-fevereiro." } },
      { q: { en: "Is Himachal Pradesh safe for solo travelers?", es: "¿Es seguro para viajeros solos?", pt: "É seguro para viajantes sozinhos?" }, a: { en: "Yes, Himachal is one of India's safest states. Popular trekking routes and hill stations are well-traveled and friendly.", es: "Sí, es uno de los estados más seguros.", pt: "Sim, é um dos estados mais seguros." } }
    ],
    cities: [
      {
        slug: "shimla",
        title: { en: "Shimla", es: "Shimla", pt: "Shimla" },
        tagline: { en: "Queen of Hills & British Colonial Charm", es: "Reina de las Colinas y Encanto Colonial", pt: "Rainha das Colinas e Charme Colonial" },
        image: "/images/himachal pradesh.jpg",
        gallery: [],
        overview: { en: "The former summer capital of British India, perched at 2,200m in the Himalayan foothills. Famous for its colonial architecture, Mall Road promenade, toy train (UNESCO), and panoramic mountain views. A perfect escape from India's summer heat.", es: "La antigua capital de verano de la India británica a 2.200m.", pt: "A antiga capital de verão da Índia britânica a 2.200m." },
        history: { en: "Named after goddess Shyamala Devi. Summer capital of British India from 1864-1947.", es: "Capital de verano británica de 1864 a 1947.", pt: "Capital de verão britânica de 1864 a 1947." },
        culture: { en: "Himachali handicrafts, Pahari miniature paintings, folk music and dance.", es: "Artesanías Himachali y pinturas Pahari.", pt: "Artesanato Himachali e pinturas Pahari." },
        attractions: [
          { slug: "mall-road", name: { en: "Mall Road & Ridge", es: "Mall Road", pt: "Mall Road" }, desc: { en: "The main promenade of Shimla with colonial-era buildings, shops, cafes, and stunning valley views. The Ridge is the heart of the city.", es: "El paseo principal de Shimla con edificios coloniales.", pt: "O passeio principal de Shimla com edifícios coloniais." }, history: { en: "Built during British era as the social center of Shimla.", es: "Construida durante la era británica.", pt: "Construída durante a era britânica." }, architecture: { en: "Tudor and neo-Gothic colonial architecture.", es: "Arquitectura colonial Tudor y neogótica.", pt: "Arquitetura colonial Tudor e neogótica." }, timings: { en: "Open 24 hours (shops: 9 AM - 9 PM)", es: "Abierto 24 horas", pt: "Aberto 24 horas" }, info: { en: "Vehicle-free zone. Best explored on foot. Evening views are spectacular.", es: "Zona sin vehículos. Mejor a pie.", pt: "Zona sem veículos. Melhor a pé." }, image: "/images/himachal pradesh.jpg", gallery: [], faqs: [] },
          { slug: "toy-train", name: { en: "Kalka-Shimla Toy Train", es: "Tren de Juguete Kalka-Shimla", pt: "Trem de Brinquedo Kalka-Shimla" }, desc: { en: "A UNESCO World Heritage railway built in 1903, covering 96 km through 102 tunnels and 800+ bridges. One of the most scenic train journeys in the world.", es: "Patrimonio UNESCO construido en 1903, con 102 túneles.", pt: "Patrimônio UNESCO construído em 1903, com 102 túneis." }, history: { en: "Built 1898-1903 by the British. UNESCO Heritage since 2008.", es: "Construido 1898-1903. UNESCO desde 2008.", pt: "Construído 1898-1903. UNESCO desde 2008." }, architecture: { en: "Narrow gauge railway with original British-era stations.", es: "Ferrocarril de vía estrecha con estaciones originales.", pt: "Ferrovia de bitola estreita com estações originais." }, timings: { en: "Multiple daily departures. Journey takes 5-6 hours.", es: "Múltiples salidas diarias. 5-6 horas.", pt: "Múltiplas saídas diárias. 5-6 horas." }, info: { en: "Book rail car class for panoramic windows. Best views from left side.", es: "Reserve clase panorámica. Mejores vistas a la izquierda.", pt: "Reserve classe panorâmica. Melhores vistas à esquerda." }, image: "/images/himachal pradesh.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [
          { en: "Ride the UNESCO Toy Train from Kalka", es: "Montar en el Tren de Juguete UNESCO", pt: "Andar no Trem de Brinquedo UNESCO" },
          { en: "Walk the Mall Road at sunset", es: "Caminar por Mall Road al atardecer", pt: "Caminhar pela Mall Road ao pôr do sol" },
          { en: "Visit Christ Church (2nd oldest in North India)", es: "Visitar Christ Church", pt: "Visitar Christ Church" },
          { en: "Day trip to Kufri for snow activities", es: "Excursión a Kufri para nieve", pt: "Excursão a Kufri para neve" }
        ],
        hotels: [{ name: "Wildflower Hall (Oberoi)", tier: "Luxury", desc: { en: "A former viceregal lodge at 8,000 ft with Himalayan views and world-class spa.", es: "Antiguo palacio virreinal a 2.400m.", pt: "Antigo palácio vice-real a 2.400m." }, image: "" }],
        localFood: { en: "Sidu (stuffed bread), Dham (festive thali), Babru, Madra, Chha Gosht, and Himachali Rajma.", es: "Sidu, Dham, Babru, Madra.", pt: "Sidu, Dham, Babru, Madra." },
        shopping: { en: "Himachali shawls from Lakkar Bazaar, wooden crafts, local honey and jams.", es: "Chales de Lakkar Bazaar.", pt: "Xales de Lakkar Bazaar." },
        weather: { en: "Cool summers (15-25°C), cold winters (-2 to 10°C with snow). Pleasant Apr-Jun and Sep-Nov.", es: "Veranos frescos, inviernos fríos con nieve.", pt: "Verões frescos, invernos frios com neve." },
        bestTime: { en: "March to June (summer), September-November (autumn), December-February (snow)", es: "Marzo a junio o diciembre-febrero para nieve", pt: "Março a junho ou dezembro-fevereiro para neve" },
        travelTips: [{ en: "The Toy Train is a must-do — book well in advance for window seats.", es: "El Tren de Juguete es imprescindible.", pt: "O Trem de Brinquedo é imperdível." }],
        nearbyPlaces: [{ name: "Kufri", distance: "16 km" }, { name: "Chail", distance: "45 km" }, { name: "Manali", distance: "250 km" }],
        suggestedItinerary: { en: "Day 1: Arrive via Toy Train, Mall Road walk, Christ Church. Day 2: Kufri day trip, Jakhoo Temple. Day 3: Viceregal Lodge, local crafts shopping.", es: "Día 1: Tren y Mall Road. Día 2: Kufri. Día 3: Lodge Virreinal.", pt: "Dia 1: Trem e Mall Road. Dia 2: Kufri. Dia 3: Lodge Vice-Real." },
        faqs: []
      },
      {
        slug: "manali",
        title: { en: "Manali", es: "Manali", pt: "Manali" },
        tagline: { en: "Adventure Capital of the Himalayas", es: "Capital de Aventura del Himalaya", pt: "Capital de Aventura do Himalaia" },
        image: "/images/himachal pradesh.jpg",
        gallery: [],
        overview: { en: "A high-altitude valley town at 2,050m surrounded by snow-capped peaks, pine forests, and the Beas River. Famous for adventure sports, ancient temples, and as the gateway to Rohtang Pass and Ladakh. Year-round destination with different charm each season.", es: "Una ciudad de valle de alta altitud a 2.050m rodeada de picos nevados.", pt: "Uma cidade de vale de alta altitude a 2.050m cercada de picos nevados." },
        history: { en: "Named after Manu, the mythical Hindu sage. Ancient trade route between India and Central Asia.", es: "Nombrada por el sabio Manu. Antigua ruta comercial.", pt: "Nomeada pelo sábio Manu. Antiga rota comercial." },
        culture: { en: "Kullu shawl weaving, Tibetan monasteries, apple orchards and traditional Himachali architecture.", es: "Tejido de chales Kullu y monasterios tibetanos.", pt: "Tecelagem de xales Kullu e mosteiros tibetanos." },
        attractions: [
          { slug: "rohtang-pass", name: { en: "Rohtang Pass", es: "Paso Rohtang", pt: "Passo Rohtang" }, desc: { en: "A high mountain pass at 3,978m offering breathtaking views of glaciers, peaks, and the Lahaul Valley. Open May-November, it's the gateway to Ladakh and offers snow activities even in summer.", es: "Un paso de montaña a 3.978m con vistas de glaciares.", pt: "Um passo de montanha a 3.978m com vistas de glaciares." }, history: { en: "Ancient trade route to Ladakh. Name means 'pile of corpses' due to harsh weather.", es: "Antigua ruta comercial a Ladakh.", pt: "Antiga rota comercial a Ladakh." }, architecture: { en: "Natural mountain pass with snow walls.", es: "Paso natural de montaña.", pt: "Passo natural de montanha." }, timings: { en: "Open May to November. Permits required (book online).", es: "Abierto mayo a noviembre. Permisos necesarios.", pt: "Aberto maio a novembro. Autorizações necessárias." }, info: { en: "Book permit at least 1 day ahead. Start early (6 AM) to avoid traffic.", es: "Reserve permiso con 1 día de antelación.", pt: "Reserve autorização com 1 dia de antecedência." }, image: "/images/himachal pradesh.jpg", gallery: [], faqs: [] },
          { slug: "hadimba-temple", name: { en: "Hadimba Temple", es: "Templo Hadimba", pt: "Templo Hadimba" }, desc: { en: "A unique 1553 wooden temple surrounded by ancient cedar forests, dedicated to Hadimba Devi (wife of Bhima from Mahabharata). Its pagoda-style architecture is unlike any other temple in India.", es: "Un templo de madera único de 1553 rodeado de cedros.", pt: "Um templo de madeira único de 1553 cercado de cedros." }, history: { en: "Built in 1553 by Maharaja Bahadur Singh.", es: "Construido en 1553 por Maharaja Bahadur Singh.", pt: "Construído em 1553 por Maharaja Bahadur Singh." }, architecture: { en: "Four-tiered pagoda-style wooden structure with carved doorway.", es: "Estructura de madera estilo pagoda de 4 niveles.", pt: "Estrutura de madeira estilo pagode de 4 níveis." }, timings: { en: "8:00 AM to 6:00 PM", es: "8:00 AM a 6:00 PM", pt: "8:00 às 18:00" }, info: { en: "Beautiful in snow season. Short walk through deodar forest to reach.", es: "Hermoso en temporada de nieve.", pt: "Bonito na temporada de neve." }, image: "/images/himachal pradesh.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [
          { en: "Rohtang Pass snow activities (skiing, snowboarding)", es: "Actividades en nieve en Rohtang", pt: "Atividades na neve em Rohtang" },
          { en: "River rafting on Beas River", es: "Rafting en el río Beas", pt: "Rafting no rio Beas" },
          { en: "Paragliding in Solang Valley", es: "Parapente en Valle Solang", pt: "Parapente no Vale Solang" },
          { en: "Visit Old Manali cafes and Vashisht hot springs", es: "Visitar cafés de Old Manali", pt: "Visitar cafés de Old Manali" },
          { en: "Trek to Jogini Waterfalls", es: "Caminata a cascadas Jogini", pt: "Trekking às cascatas Jogini" }
        ],
        hotels: [{ name: "The Himalayan", tier: "Luxury", desc: { en: "A colonial-era cottage hotel with valley views and spa.", es: "Hotel cottage colonial con vistas al valle.", pt: "Hotel cottage colonial com vista para o vale." }, image: "" }],
        localFood: { en: "Sidu, Trout fish, Dham thali, Tibetan momos and thukpa.", es: "Sidu, trucha, momos tibetanos.", pt: "Sidu, truta, momos tibetanos." },
        shopping: { en: "Kullu shawls, Tibetan handicrafts, apple products from local orchards.", es: "Chales Kullu y artesanía tibetana.", pt: "Xales Kullu e artesanato tibetano." },
        weather: { en: "Cool summers (10-25°C), cold winters (-5 to 10°C with heavy snow).", es: "Veranos frescos, inviernos muy fríos.", pt: "Verões frescos, invernos muito frios." },
        bestTime: { en: "Year-round. Summer (Apr-Jun) for pleasant weather, Winter (Dec-Feb) for snow, Monsoon avoided.", es: "Todo el año según preferencia.", pt: "Todo o ano conforme preferência." },
        travelTips: [{ en: "Book Rohtang Pass permits online a day before — limited daily vehicles allowed.", es: "Reserve permisos para Rohtang online.", pt: "Reserve autorizações para Rohtang online." }],
        nearbyPlaces: [{ name: "Solang Valley", distance: "14 km" }, { name: "Kullu", distance: "40 km" }, { name: "Shimla", distance: "250 km" }],
        suggestedItinerary: { en: "Day 1: Old Manali, Hadimba Temple, Mall Road. Day 2: Rohtang Pass or Solang Valley adventures. Day 3: Vashisht hot springs, Jogini waterfall trek.", es: "Día 1: Old Manali y templo. Día 2: Rohtang. Día 3: Termas y cascadas.", pt: "Dia 1: Old Manali e templo. Dia 2: Rohtang. Dia 3: Termas e cascatas." },
        faqs: []
      }
    ]
  }
};

// Merge new data into existing states
for (const [slug, newData] of Object.entries(additionalCitiesData)) {
  const stateIdx = states.findIndex(s => s.slug === slug);
  if (stateIdx !== -1) {
    // Add travel tips if empty
    if (newData.travelTips && (!states[stateIdx].travelTips || states[stateIdx].travelTips.length === 0)) {
      states[stateIdx].travelTips = newData.travelTips;
    }
    // Add FAQs if empty
    if (newData.faqs && (!states[stateIdx].faqs || states[stateIdx].faqs.length === 0)) {
      states[stateIdx].faqs = newData.faqs;
    }
    // Add new cities (don't overwrite existing ones)
    if (newData.cities) {
      const existingSlugs = new Set((states[stateIdx].cities || []).map(c => c.slug));
      for (const city of newData.cities) {
        if (!existingSlugs.has(city.slug)) {
          states[stateIdx].cities.push(city);
        }
      }
    }
  }
}

// Save updated states
fs.writeFileSync(statesFile, JSON.stringify(states, null, 2), "utf-8");
console.log("✅ States data updated successfully!");
console.log(`   Total states: ${states.length}`);
for (const s of states) {
  console.log(`   - ${s.slug}: ${s.cities?.length || 0} cities, ${s.travelTips?.length || 0} tips, ${s.faqs?.length || 0} FAQs`);
}
