import { StateData as DbDestination, FoodData as DbFood } from "@/data/mockData";

// Helper to construct a template text object for localizations
const localize = (en: string, es: string, pt: string) => ({ en, es, pt });

// List of all requested destinations to ensure they exist in the DB catalog
const ALL_DESTINATION_SLUGS = [
  "rajasthan", "jaipur", "udaipur", "jodhpur", "jaisalmer", "pushkar", "mount-abu", "bikaner", "ajmer", "chittorgarh", "kumbhalgarh", "ranthambore",
  "delhi", "agra", "varanasi", "ayodhya", "mathura", "vrindavan", "haridwar", "rishikesh", "mussoorie", "nainital", "jim-corbett",
  "shimla", "manali", "kasol", "dharamshala", "spiti-valley", "leh", "ladakh", "srinagar", "gulmarg", "pahalgam", "sonmarg",
  "goa", "mumbai", "lonavala", "mahabaleshwar", "pune", "aurangabad", "ajanta", "ellora",
  "kerala", "munnar", "alleppey", "thekkady", "kochi", "varkala", "kovalam", "wayanad",
  "ooty", "kodaikanal", "chennai", "mahabalipuram", "rameswaram", "madurai",
  "coorg", "mysore", "hampi", "bangalore", "gokarna",
  "araku-valley", "tirupati", "hyderabad",
  "kaziranga", "shillong", "cherrapunji", "dawki", "tawang",
  "gangtok", "pelling", "lachung", "nagaland", "manipur", "mizoram", "tripura",
  "darjeeling", "sundarbans", "puri", "konark", "bhubaneswar",
  "khajuraho", "orchha", "kanha", "bandhavgarh",
  "gir", "rann-of-kutch", "dwarka", "somnath",
  "amritsar", "bodh-gaya", "nalanda", "jharkhand", "chhattisgarh", "lakshadweep", "andaman-nicobar"
];

// Custom overrides for major destinations to show rich editorial content
const DESTINATION_OVERRIDES: Record<string, Partial<DbDestination>> = {
  rajasthan: {
    region: "West",
    image: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=1200",
    title: localize("Rajasthan", "Rajastán", "Rajastão"),
    description: localize(
      "The Land of Kings. Rajasthan is an incredible expanse of desert sand dunes, majestic forts, and heritage lake palaces that reflect India's ultimate royal golden age.",
      "La tierra de los reyes. Rajastán es una increíble extensión de dunas de desierto, fuertes majestuosos y hoteles de palacio que reflejan la era dorada de la realeza.",
      "A terra dos reis. O Rajastão é uma extensão incrível de dunas de areia do deserto, fortes majestosos e hotéis-palácio que refletem a era de ouro da realeza."
    ),
    attractions: {
      en: [
        { name: "Amber Palace (Jaipur)", desc: "A colossal hilltop fortress built in yellow and pink sandstone." },
        { name: "Lake Palace (Udaipur)", desc: "An white marble architectural wonder floating on Lake Pichola." }
      ],
      es: [
        { name: "Palacio Amber (Jaipur)", desc: "Una fortaleza en la colina construida en arenisca rosa." },
        { name: "Lake Palace (Udaipur)", desc: "Maravilla flotando en el lago Pichola." }
      ],
      pt: [
        { name: "Palácio Amber (Jaipur)", desc: "Uma fortaleza na colina construída em arenito rosa." },
        { name: "Lake Palace (Udaipur)", desc: "Maravilha flutuando no lago Pichola." }
      ]
    }
  },
  jaipur: {
    region: "West",
    image: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=800",
    title: localize("Jaipur", "Jaipur", "Jaipur"),
    description: localize(
      "The Pink City. Jaipur is famous for its intricate pink-painted sandstone architecture, royal astronomy observatories, and vibrant spice bazaars.",
      "La Ciudad Rosa. Jaipur es famosa por su intrincada arquitectura de arenisca pintada de rosa, observatorios astronómicos y bazares.",
      "A Cidade Rosa. Jaipur é famosa por sua arquitetura de arenito pintada de rosa, observatórios astronômicos e bazares vibrantes."
    ),
  },
  delhi: {
    region: "North",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800",
    title: localize("Delhi", "Delhi", "Deli"),
    description: localize(
      "The capital territory of India, blending centuries of Mughal sultanate history in Old Delhi with the wide, leafy avenues of imperial New Delhi.",
      "El territorio capital de la India, que combina siglos de historia del sultanato mogol con las amplias avenidas imperiales.",
      "O território capital da Índia, que combina séculos de história do sultanato mogol com as amplias avenidas imperiais."
    ),
  },
  agra: {
    region: "North",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    title: localize("Agra", "Agra", "Agra"),
    description: localize(
      "Agra is the imperial Mughal city home to the Taj Mahal, the legendary monument of love, as well as the massive red sandstone Agra Fort.",
      "Agra es la ciudad mogol imperial que alberga el Taj Mahal, el legendario monumento al amor, y el Fuerte de Agra.",
      "Agra é a cidade mogol imperial que abriga o Taj Mahal, o lendário monumento ao amor, e o Forte de Agra."
    ),
  },
  goa: {
    region: "West",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
    title: localize("Goa", "Goa", "Goa"),
    description: localize(
      "A coastal paradise of white-sand beaches, coconut groves, historic Portuguese churches, and luxury private yachts on the Arabian Sea.",
      "Un paraíso costero de playas de arena blanca, palmerales de coco, iglesias portuguesas históricas y yates de lujo.",
      "Um paraíso costeiro de praias de areia branca, palmeiras de coco, igrejas portuguesas históricas e iates de luxo."
    ),
  },
  kerala: {
    region: "South",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
    title: localize("Kerala", "Kerala", "Kerala"),
    description: localize(
      "God's Own Country. A tropical coastline shaped by palm-fringed emerald waterways, tea-covered hills, and ancient holistic Ayurvedic wellness sanctuaries.",
      "El propio país de Dios. Un litoral tropical formado por canales navegables bordeados de palmeras, colinas de té y Ayurveda.",
      "O próprio país de Deus. Um litoral tropical formado por canais de água navegáveis rodeados de palmeiras, colinas de chá e Ayurveda."
    ),
  },
  hampi: {
    region: "South",
    image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800",
    title: localize("Hampi Ruins", "Ruinas de Hampi", "Ruínas de Hampi"),
    description: localize(
      "A spectacular UNESCO World Heritage site displaying the ruins of the medieval Vijayanagara Empire amidst giant boulders.",
      "Un espectacular sitio del Patrimonio Mundial de la UNESCO que muestra las ruinas del Imperio Vijayanagara.",
      "Um local espetacular do Patrimônio Mundial da UNESCO que mostra as ruínas do Império Vijayanagara."
    ),
  }
};

const DIVERSE_IMAGES: Record<string, string> = {
  udaipur: "https://images.unsplash.com/photo-1602643072447-63ec27153372?q=80&w=800",
  jodhpur: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
  jaisalmer: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800",
  pushkar: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
  bikaner: "https://images.unsplash.com/photo-1616788494677-7d52a225faeb?q=80&w=800",
  ranthambore: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800",
  varanasi: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800",
  rishikesh: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800",
  haridwar: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800",
  shimla: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800",
  manali: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800",
  ladakh: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800",
  leh: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800",
  srinagar: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800",
  gulmarg: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800",
  mumbai: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800",
  munnar: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800",
  alleppey: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
  kochi: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
  varkala: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
  kovalam: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
  mysore: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
  hampi: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800",
  chennai: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
  madurai: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
  darjeeling: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800",
  shillong: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800",
  tawang: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
  khajuraho: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800",
  kanha: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800",
  bandhavgarh: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800",
  amritsar: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800"
};

const REGIONAL_FALLBACK_IMAGES: Record<string, string> = {
  West: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=800",
  South: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
  East: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800",
  Central: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800",
  North: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800"
};

function getRegionForSlug(slug: string): string {
  const west = ["rajasthan", "jaipur", "udaipur", "jodhpur", "jaisalmer", "pushkar", "mount-abu", "bikaner", "ajmer", "chittorgarh", "kumbhalgarh", "ranthambore", "goa", "gir", "rann-of-kutch", "dwarka", "somnath", "mumbai", "lonavala", "mahabaleshwar", "pune", "aurangabad", "ajanta", "ellora"];
  const south = ["kerala", "munnar", "alleppey", "thekkady", "kochi", "varkala", "kovalam", "wayanad", "ooty", "kodaikanal", "chennai", "mahabalipuram", "rameswaram", "madurai", "coorg", "mysore", "hampi", "bangalore", "gokarna", "araku-valley", "tirupati", "hyderabad", "lakshadweep"];
  const east = ["varanasi", "kaziranga", "shillong", "cherrapunji", "dawki", "tawang", "gangtok", "pelling", "lachung", "nagaland", "manipur", "mizoram", "tripura", "darjeeling", "sundarbans", "puri", "konark", "bhubaneswar", "andaman-nicobar"];
  const central = ["khajuraho", "orchha", "kanha", "bandhavgarh"];
  
  if (west.includes(slug)) return "West";
  if (south.includes(slug)) return "South";
  if (east.includes(slug)) return "East";
  if (central.includes(slug)) return "Central";
  return "North";
}

// Seeding generator for destinations
export function getSeedDestinations(): DbDestination[] {
  return ALL_DESTINATION_SLUGS.map((slug) => {
    const override = DESTINATION_OVERRIDES[slug] || {};
    const region = override.region || getRegionForSlug(slug);
    const titleName = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");
    const selectedImage = override.image || DIVERSE_IMAGES[slug] || REGIONAL_FALLBACK_IMAGES[region] || "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=600";
    
    const defaultGallery = 
      region === "South" ? [
        "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=600",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600",
        "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=600"
      ] : region === "West" ? [
        "https://images.unsplash.com/photo-1602643072447-63ec27153372?q=80&w=600",
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600",
        "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=600"
      ] : region === "East" ? [
        "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=600",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600"
      ] : region === "Central" ? [
        "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=600",
        "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=600"
      ] : [
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600",
        "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=600",
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600"
      ];

    return {
      id: `dest-${slug}`,
      slug,
      region,
      image: selectedImage,
      gallery: override.gallery || defaultGallery,
      title: override.title || localize(titleName, titleName, titleName),
      description: override.description || localize(
        `Explore the historical landmarks, authentic local food, custom boutique stays and cultural highlights of beautiful ${titleName}.`,
        `Explore los monumentos históricos, la comida local auténtica y los aspectos culturales del hermoso ${titleName}.`,
        `Explore os monumentos históricos, a comida local autêntica e os aspectos culturais do belo ${titleName}.`
      ),
      attractions: override.attractions || {
        en: [{ name: `${titleName} Palace`, desc: "Historic architecture showing local craftsmanship." }],
        es: [{ name: `Palacio de ${titleName}`, desc: "Arquitectura histórica de alta calidad." }],
        pt: [{ name: `Palácio de ${titleName}`, desc: "Arquitetura histórica de alta qualidade." }]
      },
      bestTime: override.bestTime || localize(
        "October to March. Cool temperatures are ideal for outdoor walks.",
        "De octubre a marzo. Las temperaturas frescas son ideales.",
        "De outubro a março. As temperaturas frescas são ideais."
      ),
      howToReach: override.howToReach || localize(
        "Accessible via private premium chauffeur cars or nearest airport coordinates.",
        "Accesible a través de coches privados con chofer o aeropuertos cercanos.",
        "Acessível através de carros particulares com motorista ou aeroportos próximos."
      ),
      localFood: override.localFood || localize(
        "Traditional organic spices, hand-ground masalas and regional thali cuisines.",
        "Especias orgánicas tradicionales y cocinas thali regionales.",
        "Especiarias orgânicas tradicionais e pratos thali regionais."
      ),
      culture: override.culture || localize(
        "Centuries-old folk dances, heritage crafts, and temple art carvings.",
        "Danzas folclóricas de siglos de antigüedad y tallas de arte de los templos.",
        "Danças folclóricas de séculos de antiguidade e esculturas dos templos."
      ),
      tips: override.tips || {
        en: ["Always book private guide entries to avoid queues", "Stay in heritage properties for authentic feeling"],
        es: ["Reserve con antelación guías privados certificados", "Hospédese en hoteles de patrimonio histórico"],
        pt: ["Reserve com antecedência guias particulares certificados", "Hospede-se em hotéis históricos"]
      },
      faqs: override.faqs || {
        en: [{ q: `Is ${titleName} safe?`, a: "Yes. We arrange private luxury vans and expert guides for complete safety." }],
        es: [{ q: `¿Es seguro ${titleName}?`, a: "Sí. Organizamos vehículos privados de lujo y guías expertos." }],
        pt: [{ q: `É seguro viajar para ${titleName}?`, a: "Sim. Organizamos veículos privados de luxo e guias experientes." }]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  });
}

// List of all requested Indian cuisines to seed
const ALL_FOOD_SLUGS = [
  "butter-chicken", "dal-makhani", "chole-bhature", "sarson-ka-saag", "makki-ki-roti", "rajma-chawal", "amritsari-kulcha", "paneer-tikka", "tandoori-chicken",
  "hyderabadi-biryani", "lucknowi-biryani", "pulao", "masala-dosa", "idli", "vada", "sambar", "uttapam", "appam", "puttu", "fish-curry", "malabar-parotta",
  "pav-bhaji", "vada-pav", "misal-pav", "poha", "jalebi", "rabri", "ghewar", "dal-baati-churma", "laal-maas", "ker-sangri", "gatte-ki-sabzi", "kachori", "mirchi-vada",
  "litti-chokha", "momos", "thukpa", "bamboo-shoot-curry", "smoked-pork", "goan-fish-curry", "vindaloo", "xacuti", "dhokla", "khandvi", "undhiyu", "thepla", "fafda", "khakhra",
  "rasgulla", "sandesh", "mishti-doi", "pakhala-bhata", "chenna-poda", "pongal", "payasam", "modak", "puran-poli", "bebinca", "phirni", "kulfi", "falooda", "gulab-jamun", "rasmalai"
];

// Custom overrides for major food dishes
const FOOD_OVERRIDES: Record<string, Partial<DbFood>> = {
  "butter-chicken": {
    region: "North India",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800",
    title: localize("Butter Chicken (Murgh Makhani)", "Pollo a la Mantequilla", "Frango na Manteiga"),
    history: localize(
      "Invented in the 1950s in Delhi by the founders of Moti Mahal restaurant, blending leftover tandoori chicken juices with butter and tomato gravy.",
      "Inventado en la década de 1950 en Delhi por los fundadores del restaurante Moti Mahal.",
      "Inventado na década de 1950 em Deli pelos fundadores do restaurante Moti Mahal."
    ),
    ingredients: {
      en: ["Tandoori chicken pieces", "Tomato puree", "Fresh butter & cream", "Kasuri methi (fenugreek)", "Ginger-garlic paste"],
      es: ["Pollo tandoori", "Puré de tomate", "Mantequilla y crema fresca", "Aholva (Kasuri methi)"],
      pt: ["Frango tandoori", "Purê de tomate", "Manteiga e creme de leite fresco", "Feno-grego"]
    }
  },
  "hyderabadi-biryani": {
    region: "Telangana / South India",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800",
    title: localize("Hyderabadi Biryani", "Biryani de Hyderabad", "Biryani de Hyderabad"),
    history: localize(
      "A masterpiece of Nizams' royal kitchens, layering raw marinated meat with partially cooked basmati rice, saffron and mint, cooked under seal ('dum').",
      "Una obra maestra de las cocinas reales de los Nizams, cocinada a fuego lento bajo sellado de masa.",
      "Uma obra-prima das cozinhas reais dos Nizams, cozida em fogo lento sob vedação de massa."
    ),
    ingredients: {
      en: ["Basmati rice", "Marinated lamb/chicken", "Saffron threads", "Fried onions (Biryani)", "Fresh mint & coriander"],
      es: ["Arroz basmati", "Cordero o pollo marinado", "Azafrán", "Cebollas fritas"],
      pt: ["Arroz basmati", "Cordeiro ou frango marinado", "Açafrão", "Cebolas fritas"]
    }
  },
  "masala-dosa": {
    region: "South India",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800",
    title: localize("Masala Dosa", "Masala Dosa", "Masala Dosa"),
    history: localize(
      "Originating in the temple streets of Udupi, Karnataka. Fermented rice-and-lentil batter crepes wrapped around spicy mustard potato mash.",
      "Originario de las calles de templos en Udupi. Crepe crujiente de arroz fermentado con patatas picantes.",
      "Originário das ruas de templos em Udupi. Crepe crocante de arroz fermentado com batatas picantes."
    ),
    ingredients: {
      en: ["Fermented rice & urad dal batter", "Potato mash filling", "Mustard seeds & curry leaves", "Coconut chutney", "Spicy lentil sambar"],
      es: ["Masa fermentada de arroz y lentejas", "Relleno de patata picante", "Hojas de curry"],
      pt: ["Massa fermentada de arroz e lentilhas", "Recheio de batata picante", "Folhas de curry"]
    }
  }
};

// Seeding generator for foods
export function getSeedFoods(): DbFood[] {
  return ALL_FOOD_SLUGS.map((slug) => {
    const override = FOOD_OVERRIDES[slug] || {};
    const titleName = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");
    
    return {
      id: `food-${slug}`,
      slug,
      region: override.region || "Regional India",
      image: override.image || "https://images.unsplash.com/photo-1585938338392-50a59970d8ee?q=80&w=600",
      gallery: [
        "https://images.unsplash.com/photo-1585938338392-50a59970d8ee?q=80&w=600",
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600"
      ],
      title: override.title || localize(titleName, titleName, titleName),
      history: override.history || localize(
        `A signature traditional culinary recipe of ${titleName}, developed through generations of cooking traditions in the local kitchens.`,
        `Una receta culinaria tradicional de ${titleName}, desarrollada a lo largo de generaciones de cocina local.`,
        `Uma receita culinária tradicional de ${titleName}, desenvolvida ao longo de gerações de culinária local.`
      ),
      ingredients: override.ingredients || {
        en: ["Local organic spices", "Fresh regional herbs", "Ghee or vegetable oils", "Local grains"],
        es: ["Especias orgánicas locales", "Hierbas frescas del huerto", "Ghee"],
        pt: ["Especiarias orgânicas locais", "Ervas frescas da horta", "Ghee"]
      },
      bestPlaces: localize(
        "Highly recommended local street food stalls and heritage hotels.",
        "Puestos de comida callejera locales altamente recomendados y hoteles de patrimonio.",
        "Barracas de comida de rua locais altamente recomendadas e hotéis históricos."
      ),
      tips: {
        en: ["Always check spice levels before ordering", "Pair with fresh local yogurt or drinks"],
        es: ["Compruebe el nivel de picante antes de pedir", "Acompañe con yogur fresco o lassi"],
        pt: ["Verifique o nível de pimenta antes de pedir", "Acompanhe com iogurte fresco ou lassi"]
      },
      createdAt: new Date().toISOString()
    };
  });
}
