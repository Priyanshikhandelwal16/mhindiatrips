import fs from "fs";
import path from "path";

const STATES_FILE = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(STATES_FILE, "utf-8"));

const delhiAgra = states.find(s => s.slug === "delhi-agra");
if (!delhiAgra) { console.log("delhi-agra not found!"); process.exit(1); }

// Complete Delhi-Agra with rich city data including attractions
delhiAgra.cities = [
  {
    slug: "delhi",
    title: { en: "Delhi", es: "Delhi", pt: "Deli" },
    tagline: { en: "India's Capital of Empires", es: "Capital de Imperios de la India", pt: "Capital dos Impérios da Índia" },
    image: "/images/taj_mahal_sunrise.png",
    gallery: ["/images/taj_mahal_sunrise.png"],
    overview: { en: "Delhi is a city where ancient history meets modern vibrancy. From the Mughal-era Red Fort and Jama Masjid in Old Delhi to the wide boulevards of Lutyens' New Delhi with India Gate and Rashtrapati Bhavan, every corner tells a story spanning 1,000 years of Indian civilization.", es: "Delhi es una ciudad donde la historia antigua se encuentra con la modernidad vibrante.", pt: "Deli é uma cidade onde a história antiga encontra a modernidade vibrante." },
    history: { en: "Delhi has been the capital of numerous empires — from the Delhi Sultanate (1206) to the Mughal Empire and finally the British Raj which built New Delhi in 1911.", es: "Delhi ha sido capital de numerosos imperios.", pt: "Deli foi capital de numerosos impérios." },
    culture: { en: "A melting pot of Punjabi, Mughlai, and cosmopolitan culture. Famous for street food at Chandni Chowk, Dilli Haat crafts market, and vibrant festival celebrations.", es: "Un crisol de culturas.", pt: "Um caldeirão de culturas." },
    attractions: [
      { slug: "red-fort", name: { en: "Red Fort (Lal Qila)", es: "Fuerte Rojo", pt: "Forte Vermelho" }, desc: { en: "UNESCO World Heritage Site. The massive red sandstone fort served as the residence of Mughal emperors for nearly 200 years.", es: "Patrimonio de la Humanidad UNESCO.", pt: "Património da Humanidade UNESCO." }, history: { en: "Built by Shah Jahan in 1639 when he shifted the capital from Agra to Delhi.", es: "Construido por Shah Jahan en 1639.", pt: "Construído por Shah Jahan em 1639." }, architecture: { en: "Blend of Persian, Timurid and Indian architecture. Features Diwan-i-Am, Diwan-i-Khas, and Moti Masjid.", es: "Mezcla de arquitectura persa, timúrida e india.", pt: "Mistura de arquitetura persa, timúrida e indiana." }, timings: { en: "9:30 AM - 4:30 PM (Closed Mondays)", es: "9:30 AM - 4:30 PM (Cerrado Lunes)", pt: "9:30 AM - 4:30 PM (Fechado Segundas)" }, info: { en: "Evening Sound & Light show is a must-see. Book fast-track entry through our concierge.", es: "El espectáculo nocturno es imperdible.", pt: "O espetáculo noturno é imperdível." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
      { slug: "qutub-minar", name: { en: "Qutub Minar", es: "Qutub Minar", pt: "Qutub Minar" }, desc: { en: "The tallest brick minaret in the world at 72.5 meters, a stunning example of Indo-Islamic architecture from the 12th century.", es: "El minarete de ladrillo más alto del mundo.", pt: "O minarete de tijolo mais alto do mundo." }, history: { en: "Construction began in 1192 by Qutb-ud-din Aibak after defeating the last Hindu kingdom of Delhi.", es: "La construcción comenzó en 1192.", pt: "A construção começou em 1192." }, architecture: { en: "Five distinct stories with intricate carvings and verses from the Quran. Surrounded by the Iron Pillar and ruins of 27 Hindu temples.", es: "Cinco pisos con tallados intrincados.", pt: "Cinco andares com entalhes intrincados." }, timings: { en: "7:00 AM - 5:00 PM Daily", es: "7:00 AM - 5:00 PM Diario", pt: "7:00 AM - 5:00 PM Diário" }, info: { en: "Best visited early morning for photography without crowds.", es: "Mejor visitar temprano por la mañana.", pt: "Melhor visitar de manhã cedo." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
      { slug: "humayuns-tomb", name: { en: "Humayun's Tomb", es: "Tumba de Humayun", pt: "Túmulo de Humayun" }, desc: { en: "The inspiration for the Taj Mahal. This UNESCO site is the first garden tomb in the Indian subcontinent, set within a Persian-style Char Bagh garden.", es: "La inspiración del Taj Mahal.", pt: "A inspiração do Taj Mahal." }, history: { en: "Built in 1570 by Empress Bega Begum for her husband Emperor Humayun, nine years after his death.", es: "Construida en 1570.", pt: "Construída em 1570." }, architecture: { en: "Persian and Mughal architecture with the iconic double dome, red sandstone with white marble inlay.", es: "Arquitectura persa y mogol.", pt: "Arquitetura persa e mogol." }, timings: { en: "Sunrise to Sunset Daily", es: "Amanecer a Atardecer Diario", pt: "Nascer ao Pôr do Sol Diário" }, info: { en: "Combine with a visit to nearby Nizamuddin Dargah for Qawwali evening sessions.", es: "Combine con una visita a Nizamuddin.", pt: "Combine com uma visita a Nizamuddin." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
    ],
    thingsToDo: [
      { en: "Explore Old Delhi's narrow lanes on a rickshaw food tour through Chandni Chowk.", es: "Explore Old Delhi en rickshaw.", pt: "Explore Old Delhi de riquixá." },
      { en: "Visit India Gate at sunset and enjoy an evening drive through Lutyens' Delhi.", es: "Visite India Gate al atardecer.", pt: "Visite India Gate ao pôr do sol." },
    ],
    hotels: [],
    localFood: { en: "Legendary street food — Paranthe Wali Gali parathas, Karim's Mughlai kebabs, Old Delhi chaat, butter chicken at Moti Mahal, and Natraj's dahi bhalle.", es: "Comida callejera legendaria.", pt: "Comida de rua lendária." },
    shopping: { en: "Chandni Chowk (spices, fabrics), Connaught Place (luxury brands), Dilli Haat (handlooms from all states), Khan Market (books, boutiques).", es: "Chandni Chowk, Connaught Place, Dilli Haat.", pt: "Chandni Chowk, Connaught Place, Dilli Haat." },
    weather: { en: "Best October to March (15-25°C). Extremely hot April-June (40°C+). Monsoon July-September.", es: "Mejor octubre a marzo.", pt: "Melhor outubro a março." },
    bestTime: { en: "October to March", es: "Octubre a marzo", pt: "Outubro a março" },
    travelTips: [{ en: "Book a private car with driver — Delhi traffic is intense. Use our VIP airport transfer service.", es: "Reserve un coche privado.", pt: "Reserve um carro privado." }],
    nearbyPlaces: [{ name: "Agra (Taj Mahal)", distance: "230 km (3.5 hrs by expressway)" }],
    suggestedItinerary: { en: "Day 1: Old Delhi heritage walk — Red Fort, Jama Masjid, Chandni Chowk food tour. Day 2: New Delhi — Humayun's Tomb, Qutub Minar, India Gate, Lotus Temple. Day 3: Day trip to Agra for Taj Mahal sunrise.", es: "Día 1: Old Delhi. Día 2: New Delhi. Día 3: Excursión a Agra.", pt: "Dia 1: Old Delhi. Dia 2: New Delhi. Dia 3: Excursão a Agra." },
    faqs: [],
  },
  {
    slug: "agra",
    title: { en: "Agra", es: "Agra", pt: "Agra" },
    tagline: { en: "Home of the Taj Mahal — World's Greatest Monument of Love", es: "Hogar del Taj Mahal", pt: "Lar do Taj Mahal" },
    image: "/images/taj_mahal_sunrise.png",
    gallery: ["/images/taj_mahal_sunrise.png"],
    overview: { en: "Agra is the crown jewel of the Golden Triangle. Home to three UNESCO World Heritage Sites — the Taj Mahal, Agra Fort, and Fatehpur Sikri — this former Mughal capital is one of the most visited destinations in the world. The sight of the Taj Mahal at sunrise, bathed in golden light reflecting off the Yamuna River, is an experience that stays with you forever.", es: "Agra es la joya de la corona del Triángulo de Oro.", pt: "Agra é a joia da coroa do Triângulo de Ouro." },
    history: { en: "Agra rose to prominence as the capital of the Mughal Empire under Akbar the Great in the 16th century. The city witnessed the construction of some of the finest examples of Mughal architecture under emperors Akbar, Jahangir, and Shah Jahan.", es: "Agra ascendió como capital del Imperio Mogol.", pt: "Agra ascendeu como capital do Império Mogol." },
    culture: { en: "Known for marble inlay work (Pietra Dura), leather goods, carpets, and the art of Mughlai cuisine. The craftsmanship here descends directly from artisans who built the Taj Mahal.", es: "Conocida por el trabajo de mármol.", pt: "Conhecida pelo trabalho em mármore." },
    attractions: [
      { slug: "taj-mahal", name: { en: "Taj Mahal", es: "Taj Mahal", pt: "Taj Mahal" }, desc: { en: "The world's most beautiful building. A masterpiece of Mughal architecture and a UNESCO World Heritage Site, built entirely in white marble as a mausoleum of eternal love.", es: "El edificio más bello del mundo.", pt: "O edifício mais belo do mundo." }, history: { en: "Commissioned in 1632 by Emperor Shah Jahan to house the tomb of his beloved wife Mumtaz Mahal. Over 20,000 artisans worked for 22 years to complete this wonder.", es: "Encargado en 1632 por Shah Jahan.", pt: "Encomendado em 1632 por Shah Jahan." }, architecture: { en: "Perfectly symmetrical white Makrana marble structure with semi-precious stone inlay (Pietra Dura), four minarets, a central dome reaching 73 meters, and a reflecting pool aligned with the main gate.", es: "Estructura de mármol blanco perfectamente simétrica.", pt: "Estrutura de mármore branco perfeitamente simétrica." }, timings: { en: "Sunrise to Sunset (Closed Fridays). Best visited at sunrise for golden light and fewer crowds.", es: "Amanecer a Atardecer (Cerrado Viernes).", pt: "Nascer ao Pôr do Sol (Fechado Sextas)." }, info: { en: "We arrange exclusive early-morning private access. Moonlight viewing available 5 nights around full moon.", es: "Organizamos acceso privado temprano.", pt: "Organizamos acesso privado cedo." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
      { slug: "agra-fort", name: { en: "Agra Fort", es: "Fuerte de Agra", pt: "Forte de Agra" }, desc: { en: "A massive red sandstone UNESCO fortress that served as the main residence of the Mughal emperors until 1638. Shah Jahan spent his final years imprisoned here, gazing at the Taj Mahal.", es: "Fortaleza masiva de arenisca roja.", pt: "Fortaleza massiva de arenito vermelho." }, history: { en: "Originally built by the Lodhi dynasty, it was rebuilt by Akbar in 1565 using red sandstone from Rajasthan.", es: "Reconstruido por Akbar en 1565.", pt: "Reconstruído por Akbar em 1565." }, architecture: { en: "Encompasses palaces, mosques, audience halls, and gardens within its 2.5 km perimeter walls.", es: "Abarca palacios, mezquitas y jardines.", pt: "Abrange palácios, mesquitas e jardins." }, timings: { en: "6:00 AM - 6:00 PM Daily", es: "6:00 AM - 6:00 PM Diario", pt: "6:00 AM - 6:00 PM Diário" }, info: { en: "Don't miss the Musamman Burj — the octagonal tower where Shah Jahan viewed the Taj Mahal during captivity.", es: "No se pierda el Musamman Burj.", pt: "Não perca o Musamman Burj." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
      { slug: "fatehpur-sikri", name: { en: "Fatehpur Sikri", es: "Fatehpur Sikri", pt: "Fatehpur Sikri" }, desc: { en: "A UNESCO World Heritage ghost city built by Emperor Akbar in 1571 as his capital, abandoned after only 14 years due to water scarcity. Perfectly preserved red sandstone palaces and mosques.", es: "Ciudad fantasma Patrimonio UNESCO.", pt: "Cidade fantasma Património UNESCO." }, history: { en: "Built by Akbar to honor Sufi saint Salim Chishti who predicted the birth of his son. The city was the Mughal capital from 1571-1585.", es: "Construida por Akbar en honor al santo sufí.", pt: "Construída por Akbar em honra ao santo sufi." }, architecture: { en: "Buland Darwaza (Victory Gate) — the tallest gateway in the world at 54 meters. Features Panch Mahal, Jodha Bai Palace, and the tomb of Salim Chishti.", es: "Buland Darwaza, la puerta más alta del mundo.", pt: "Buland Darwaza, a porta mais alta do mundo." }, timings: { en: "Sunrise to Sunset Daily", es: "Amanecer a Atardecer Diario", pt: "Nascer ao Pôr do Sol Diário" }, info: { en: "Located 37 km from Agra. Combine with a visit to the bird sanctuary at Keoladeo National Park.", es: "A 37 km de Agra.", pt: "A 37 km de Agra." }, image: "/images/taj_mahal_sunrise.png", gallery: [], faqs: [] },
    ],
    thingsToDo: [
      { en: "Watch the Taj Mahal at sunrise from Mehtab Bagh (Moon Garden) across the Yamuna River.", es: "Ver el Taj Mahal al amanecer.", pt: "Ver o Taj Mahal ao nascer do sol." },
      { en: "Visit a marble inlay workshop to see artisans using the same Pietra Dura techniques as Taj Mahal builders.", es: "Visite un taller de mármol.", pt: "Visite uma oficina de mármore." },
    ],
    hotels: [],
    localFood: { en: "Mughlai cuisine at its finest — Petha (Agra's famous sweet), bedai with jalebi for breakfast, Dal Moth, and kebabs at Joney's Place.", es: "Lo mejor de la cocina mogol.", pt: "O melhor da cozinha mogol." },
    shopping: { en: "Marble inlay souvenirs, leather goods at Sadar Bazaar, Zardozi embroidery, and the famous Agra Petha sweets.", es: "Recuerdos de mármol, cuero.", pt: "Souvenirs de mármore, couro." },
    weather: { en: "Best October to March (15-25°C). Very hot in summer (45°C+). Monsoon brings humidity.", es: "Mejor octubre a marzo.", pt: "Melhor outubro a março." },
    bestTime: { en: "October to March", es: "Octubre a marzo", pt: "Outubro a março" },
    travelTips: [{ en: "Book sunrise Taj Mahal entry through us for VIP skip-the-line access. Arrive 30 minutes before sunrise.", es: "Reserve entrada al amanecer.", pt: "Reserve entrada ao nascer do sol." }],
    nearbyPlaces: [{ name: "Delhi", distance: "230 km" }, { name: "Jaipur", distance: "240 km" }, { name: "Fatehpur Sikri", distance: "37 km" }],
    suggestedItinerary: { en: "Day 1: Sunrise Taj Mahal, Agra Fort, Mehtab Bagh at sunset. Day 2: Fatehpur Sikri excursion, marble workshop visit, local food tour. Day 3: Drive to Jaipur via Chand Baori stepwell.", es: "Día 1: Taj Mahal al amanecer. Día 2: Fatehpur Sikri. Día 3: Camino a Jaipur.", pt: "Dia 1: Taj Mahal ao nascer do sol. Dia 2: Fatehpur Sikri. Dia 3: Caminho para Jaipur." },
    faqs: [],
  },
  {
    slug: "mathura",
    title: { en: "Mathura", es: "Mathura", pt: "Mathura" },
    tagline: { en: "Birthplace of Lord Krishna", es: "Lugar de Nacimiento del Señor Krishna", pt: "Local de Nascimento do Senhor Krishna" },
    image: "/images/varanasi.jpg",
    gallery: ["/images/varanasi.jpg"],
    overview: { en: "One of the seven sacred cities of Hinduism, Mathura is the birthplace of Lord Krishna. The city comes alive during Holi (Festival of Colors) and Janmashtami (Krishna's birthday) with spectacular celebrations that attract millions from around the world.", es: "Una de las siete ciudades sagradas del hinduismo.", pt: "Uma das sete cidades sagradas do hinduísmo." },
    history: { en: "Dating back over 3,000 years, Mathura was a major center of Buddhist and Hindu art during the Kushan Empire.", es: "Con más de 3,000 años de historia.", pt: "Com mais de 3.000 anos de história." },
    culture: { en: "The vibrant Holi celebrations here are world-famous — especially in nearby Barsana where women playfully beat men with sticks (Lathmar Holi).", es: "Las celebraciones de Holi son famosas mundialmente.", pt: "As celebrações de Holi são famosas mundialmente." },
    attractions: [],
    thingsToDo: [{ en: "Attend the evening aarti at Vishram Ghat on the banks of Yamuna River.", es: "Asista al aarti nocturno.", pt: "Assista ao aarti noturno." }],
    hotels: [],
    localFood: { en: "Famous for peda (milk sweet), fresh lassi, kachori-sabzi, and the legendary chaat at Holi Gate.", es: "Famoso por peda y lassi.", pt: "Famoso por peda e lassi." },
    shopping: { en: "Krishna idols, brass work, and traditional Mathura peda sweets.", es: "Ídolos de Krishna y dulces.", pt: "Ídolos de Krishna e doces." },
    weather: { en: "Best October to March. Visit during Holi (March) for the ultimate experience.", es: "Mejor octubre a marzo.", pt: "Melhor outubro a março." },
    bestTime: { en: "October to March (Holi in March is spectacular)", es: "Octubre a marzo", pt: "Outubro a março" },
    travelTips: [{ en: "Plan your visit during Holi (February/March) for an unforgettable color festival experience.", es: "Planifique su visita durante Holi.", pt: "Planeje sua visita durante Holi." }],
    nearbyPlaces: [{ name: "Vrindavan", distance: "15 km" }, { name: "Agra", distance: "58 km" }],
    suggestedItinerary: { en: "Day 1: Krishna Janmabhoomi Temple, Vishram Ghat aarti, Mathura Museum. Day 2: Vrindavan temples — Banke Bihari, Prem Mandir, ISKCON temple.", es: "Día 1: Templo Krishna Janmabhoomi. Día 2: Templos de Vrindavan.", pt: "Dia 1: Templo Krishna Janmabhoomi. Dia 2: Templos de Vrindavan." },
    faqs: [],
  },
  {
    slug: "vrindavan",
    title: { en: "Vrindavan", es: "Vrindavan", pt: "Vrindavan" },
    tagline: { en: "City of 5,000 Temples & Divine Love", es: "Ciudad de 5.000 Templos", pt: "Cidade de 5.000 Templos" },
    image: "/images/varanasi.jpg",
    gallery: ["/images/varanasi.jpg"],
    overview: { en: "Where Lord Krishna spent his childhood playing with gopis and performing divine leela. Vrindavan is a deeply spiritual city with over 5,000 temples, including the spectacular Prem Mandir that glows white at night and the ancient Banke Bihari Temple where devotees dance in ecstasy.", es: "Donde el Señor Krishna pasó su infancia.", pt: "Onde o Senhor Krishna passou sua infância." },
    history: { en: "Ancient texts place Krishna's childhood stories here over 5,000 years ago. The city was rediscovered in the 16th century by Chaitanya Mahaprabhu.", es: "Los textos antiguos sitúan a Krishna aquí hace 5.000 años.", pt: "Os textos antigos situam Krishna aqui há 5.000 anos." },
    culture: { en: "Devotional music (bhajans and kirtans) fills the air 24/7. The city is a living temple with widow ashrams, international ISKCON community, and deep Vaishnavite traditions.", es: "Música devocional llena el aire.", pt: "Música devocional preenche o ar." },
    attractions: [],
    thingsToDo: [{ en: "Visit Prem Mandir at night for the spectacular illuminated marble temple experience.", es: "Visite Prem Mandir de noche.", pt: "Visite Prem Mandir à noite." }],
    hotels: [],
    localFood: { en: "Pure vegetarian city. Famous for malpua, rabri, lassi, and prasad from temple kitchens serving thousands daily.", es: "Ciudad vegetariana pura.", pt: "Cidade vegetariana pura." },
    shopping: { en: "Krishna idols, prayer beads, religious books, and traditional clothing.", es: "Ídolos de Krishna y artículos religiosos.", pt: "Ídolos de Krishna e artigos religiosos." },
    weather: { en: "Best October to March. Janmashtami (Aug/Sep) is spectacular.", es: "Mejor octubre a marzo.", pt: "Melhor outubro a março." },
    bestTime: { en: "October to March", es: "Octubre a marzo", pt: "Outubro a março" },
    travelTips: [{ en: "Remove shoes before entering temples. Dress modestly. Photography restricted in most temples.", es: "Quítese los zapatos antes de entrar.", pt: "Tire os sapatos antes de entrar." }],
    nearbyPlaces: [{ name: "Mathura", distance: "15 km" }, { name: "Agra", distance: "73 km" }],
    suggestedItinerary: { en: "Day 1: Banke Bihari Temple, ISKCON Temple, Prem Mandir light show. Day 2: Seva Kunj, Nidhivan, parikrama (circumambulation) of sacred sites.", es: "Día 1: Banke Bihari, ISKCON, Prem Mandir. Día 2: Seva Kunj, parikrama.", pt: "Dia 1: Banke Bihari, ISKCON, Prem Mandir. Dia 2: Seva Kunj, parikrama." },
    faqs: [],
  },
];

fs.writeFileSync(STATES_FILE, JSON.stringify(states, null, 2), "utf-8");
console.log("Done! Delhi-Agra fully populated with", delhiAgra.cities.length, "cities and rich attractions data.");
