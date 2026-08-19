const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const statesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json');

// Read .env.local
const envPath = path.join(projectRoot, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local at", envPath);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value;
  }
});

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// ======================== STATE FAQS DATA ========================

const stateFaqsData = {
  "rajasthan": [
    {
      question: {
        en: "What is Rajasthan famous for?",
        es: "Qúe es Rajasthan famoso por?", // Note: translated/corrected contextually
        pt: "Pelo que o Rajastão é famoso?"
      },
      answer: {
        en: "Rajasthan is famous for its royal palaces, historic forts, desert landscapes, colorful culture and traditional cuisine.",
        es: "Rajasthan es famoso por sus palacios reales, fuertes históricos, paisajes desérticos, cultura colorida y gastronomía tradicional.",
        pt: "Rajasthan é famoso por seus palácios reais, fortes históricos, paisagens desérticas, cultura vibrante e culinária tradicional."
      }
    },
    {
      question: {
        en: "What is the best time to visit Rajasthan?",
        es: "¿Cuál es la mejor época para visitar Rajasthan?",
        pt: "Qual é a melhor época para visitar o Rajastão?"
      },
      answer: {
        en: "October to March is generally the best time for sightseeing and desert experiences.",
        es: "De octubre a marzo suele ser la mejor época para hacer turismo y disfrutar del desierto.",
        pt: "De outubro a março geralmente é a melhor época para passeios e experiências no deserto."
      }
    },
    {
      question: {
        en: "How many days are enough for Rajasthan?",
        es: "¿Cuántos días son suficientes para Rajasthan?",
        pt: "Quantos dias são suficientes para o Rajastão?"
      },
      answer: {
        en: "A 7–10 day trip is ideal for exploring major destinations such as Jaipur, Jodhpur, Udaipur and Jaisalmer.",
        es: "Un viaje de 7–10 días es ideal para explorar Jaipur, Jodhpur, Udaipur y Jaisalmer.",
        pt: "Uma viagem de 7–10 dias é ideal para explorar Jaipur, Jodhpur, Udaipur e Jaisalmer."
      }
    },
    {
      question: {
        en: "What food should I try in Rajasthan?",
        es: "¿Qué comida debería probar en Rajasthan?",
        pt: "Que comida devo experimentar no Rajastão?"
      },
      answer: {
        en: "Try dal baati churma, gatte ki sabzi, ker sangri, laal maas and pyaaz kachori.",
        es: "Prueba dal baati churma, gatte ki sabzi, ker sangri, laal maas y pyaaz kachori.",
        pt: "Experimente dal baati churma, gatte ki sabzi, ker sangri, laal maas e pyaaz kachori."
      }
    },
    {
      question: {
        en: "Is Rajasthan suitable for families?",
        es: "¿Es Rajasthan adecuado para familias?",
        pt: "O Rajastão é adequado para famílias?"
      },
      answer: {
        en: "Yes, Rajasthan offers forts, palaces, cultural experiences, wildlife and desert activities suitable for families.",
        es: "Sí, Rajasthan ofrece fuertes, palacios, experiencias culturales, vida silvestre y actividades en el desierto para familias.",
        pt: "Sim, Rajasthan oferece fortes, palácios, experiências culturais, vida selvagem e atividades no deserto para famílias."
      }
    }
  ],
  "karnataka": [
    {
      question: {
        en: "What is Karnataka famous for?",
        es: "¿Por qué es famoso Karnataka?",
        pt: "Pelo que Karnataka é famoso?"
      },
      answer: {
        en: "Karnataka is famous for Bengaluru, Mysuru Palace, Hampi, Coorg, ancient temples and diverse cuisine.",
        es: "Karnataka es famoso por Bengaluru, el Palacio de Mysuru, Hampi, Coorg, templos antiguos y una gastronomía diversa.",
        pt: "Karnataka é famoso por Bengaluru, Palácio de Mysuru, Hampi, Coorg, templos antigos e culinária diversificada."
      }
    },
    {
      question: {
        en: "What is the best time to visit Karnataka?",
        es: "¿Cuál es la mejor época para visitar Karnataka?",
        pt: "Qual é a melhor época para visitar Karnataka?"
      },
      answer: {
        en: "October to February is generally comfortable for most destinations.",
        es: "De octubre a febrero suele ser una época cómoda para la mayoría de los destinos.",
        pt: "De outubro a fevereiro geralmente é uma época confortável para a maioria dos destinos."
      }
    },
    {
      question: {
        en: "How many days are needed for Karnataka?",
        es: "¿Cuántos días se necesitan para Karnataka?",
        pt: "Quantos dias são necessários para Karnataka?"
      },
      answer: {
        en: "7–10 days are suitable for exploring Bengaluru, Mysuru, Hampi and Coorg.",
        es: "De 7 a 10 días son adecuados para explorar Bengaluru, Mysuru, Hampi y Coorg.",
        pt: "De 7 a 10 dias são adequados para explorar Bengaluru, Mysuru, Hampi e Coorg."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try dosa, idli, bisi bele bath, Mysore pak and Mangalorean seafood.",
        es: "Prueba dosa, idli, bisi bele bath, Mysore pak y mariscos de Mangalore.",
        pt: "Experimente dosa, idli, bisi bele bath, Mysore pak e frutos do mar de Mangalore."
      }
    },
    {
      question: {
        en: "Is Karnataka good for families?",
        es: "¿Es Karnataka bueno para las familias?",
        pt: "Karnataka é bom para famílias?"
      },
      answer: {
        en: "Yes, its heritage sites, nature destinations, wildlife and cities offer varied family experiences.",
        es: "Sí, sus lugares históricos, destinos naturales, vida silvestre y ciudades ofrecen experiencias variadas para familias.",
        pt: "Sim, seus locais históricos, destinos naturais, vida selvagem e cidades oferecem experiências variadas para famílias."
      }
    }
  ],
  "maharashtra": [
    {
      question: {
        en: "What is Maharashtra famous for?",
        es: "¿Por qué es conocido Maharashtra?",
        pt: "Pelo que Maharashtra é conhecido?"
      },
      answer: {
        en: "Maharashtra is known for Mumbai, Ajanta and Ellora Caves, hill stations, forts, beaches and diverse cuisine.",
        es: "Maharashtra es conocido por Mumbai, las cuevas de Ajanta y Ellora, estaciones de montaña, fuertes, playas y gastronomía diversa.",
        pt: "Maharashtra é conhecido por Mumbai, cavernas de Ajanta e Ellora, regiões montanhosas, fortes, praias e culinária diversificada."
      }
    },
    {
      question: {
        en: "What is the best time to visit Maharashtra?",
        es: "¿Cuál es la mejor época para visitar Maharashtra?",
        pt: "Qual é a melhor época para visitar Maharashtra?"
      },
      answer: {
        en: "October to March is generally suitable for sightseeing across most destinations.",
        es: "De octubre a marzo suele ser adecuado para visitar la mayoría de los destinos.",
        pt: "De outubro a março geralmente é adequado para visitar a maioria dos destinos."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "7–10 days allow you to explore Mumbai, Pune, Nashik and Chhatrapati Sambhajinagar comfortably.",
        es: "De 7 a 10 días permiten explorar cómodamente Mumbai, Pune, Nashik y Chhatrapati Sambhajinagar.",
        pt: "De 7 a 10 dias permitem explorar Mumbai, Pune, Nashik e Chhatrapati Sambhajinagar com tranquilidade."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try vada pav, misal pav, puran poli, pav bhaji and Kolhapuri cuisine.",
        es: "Prueba vada pav, misal pav, puran poli, pav bhaji y cocina Kolhapuri.",
        pt: "Experimente vada pav, misal pav, puran poli, pav bhaji e culinária Kolhapuri."
      }
    },
    {
      question: {
        en: "Is Maharashtra good for first-time visitors?",
        es: "¿Es Maharashtra adecuado para primerizos?",
        pt: "Maharashtra é bom para quem visita pela primeira vez?"
      },
      answer: {
        en: "Yes, the state offers cities, heritage, beaches, mountains and cultural experiences.",
        es: "Sí, el estado ofrece ciudades, patrimonio, playas, montañas y experiencias culturales.",
        pt: "Sim, o estado oferece cidades, patrimônio, praias, montanhas e experiências culturais."
      }
    }
  ],
  "himachal-pradesh": [
    {
      question: {
        en: "What is Himachal Pradesh famous for?",
        es: "¿Por qué es famoso Himachal Pradesh?",
        pt: "Pelo que Himachal Pradesh é famoso?"
      },
      answer: {
        en: "Himachal Pradesh is famous for Himalayan landscapes, hill stations, trekking, temples and adventure activities.",
        es: "Himachal Pradesh es famoso por sus paisajes del Himalaya, estaciones de montaña, senderismo, templos y actividades de aventura.",
        pt: "Himachal Pradesh é famoso por suas paisagens do Himalaia, cidades montanhosas, trilhas, templos e atividades de aventura."
      }
    },
    {
      question: {
        en: "What is the best time to visit Himachal Pradesh?",
        es: "¿Cuál es la mejor época para visitar Himachal Pradesh?",
        pt: "Qual é a melhor época para visitar Himachal Pradesh?"
      },
      answer: {
        en: "March to June and September to November are generally popular for sightseeing.",
        es: "De marzo a junio y de septiembre a noviembre suelen ser populares para hacer turismo.",
        pt: "De março a junho e de setembro a novembro geralmente são períodos populares para passeios."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "6–10 days are suitable for destinations such as Shimla, Manali, Kasol and Dharamshala.",
        es: "De 6 a 10 días son adecuados para Shimla, Manali, Kasol y Dharamshala.",
        pt: "De 6 a 10 dias são adequados para Shimla, Manali, Kasol e Dharamshala."
      }
    },
    {
      question: {
        en: "What should I pack?",
        es: "¿Qué debería llevar?",
        pt: "O que devo levar na mala?"
      },
      answer: {
        en: "Pack warm layers, comfortable shoes, rain protection and basic medicines.",
        es: "Lleva ropa de abrigo, calzado cómodo, protección contra la lluvia y medicamentos básicos.",
        pt: "Leve roupas quentes, calçados confortáveis, proteção contra chuva e medicamentos básicos."
      }
    },
    {
      question: {
        en: "Is Himachal Pradesh suitable for families?",
        es: "¿Es Himachal Pradesh adecuado para familias?",
        pt: "Himachal Pradesh é adequado para famílias?"
      },
      answer: {
        en: "Yes, many destinations offer scenic sightseeing, cultural attractions and family-friendly activities.",
        es: "Sí, muchos destinos ofrecen paisajes, atracciones culturales y actividades para familias.",
        pt: "Sim, muitos destinos oferecem belas paisagens, atrações culturais e atividades para famílias."
      }
    }
  ],
  "kerala": [
    {
      question: {
        en: "What is Kerala famous for?",
        es: "¿Por qué es famoso Kerala?",
        pt: "Pelo que Kerala é famoso?"
      },
      answer: {
        en: "Kerala is famous for backwaters, beaches, hill stations, Ayurveda, wildlife and traditional cuisine.",
        es: "Kerala es famoso por sus backwaters, playas, montañas, Ayurveda, vida silvestre y gastronomía tradicional.",
        pt: "Kerala é famoso por seus backwaters, praias, montanhas, Ayurveda, vida selvagem e culinária tradicional."
      }
    },
    {
      question: {
        en: "What is the best time to visit Kerala?",
        es: "¿Cuál es la mejor época para visitar Kerala?",
        pt: "Qual é a melhor época para visitar Kerala?"
      },
      answer: {
        en: "October to March is generally comfortable for exploring Kerala.",
        es: "De octubre a marzo suele ser una época cómoda para explorar Kerala.",
        pt: "De outubro a março geralmente é uma época confortável para explorar Kerala."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "6–8 days are ideal for combining destinations such as Kochi, Munnar and Alleppey.",
        es: "De 6 a 8 días son ideales para combinar destinos como Kochi, Munnar y Alleppey.",
        pt: "De 6 a 8 dias são ideais para combinar destinos como Kochi, Munnar e Alleppey."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try appam, puttu, Kerala sadya, seafood and traditional coconut-based curries.",
        es: "Prueba appam, puttu, sadya de Kerala, mariscos y curries tradicionales con coco.",
        pt: "Experimente appam, puttu, sadya de Kerala, frutos do mar e curries tradicionais à base de coco."
      }
    },
    {
      question: {
        en: "Is Kerala good for couples and families?",
        es: "¿Es Kerala adecuado para parejas y familias?",
        pt: "Kerala é bom para casais e famílias?"
      },
      answer: {
        en: "Yes, Kerala offers beaches, backwaters, nature, wellness and cultural experiences for different types of travellers.",
        es: "Sí, Kerala ofrece playas, backwaters, naturaleza, bienestar y experiencias culturales.",
        pt: "Sim, Kerala oferece praias, backwaters, natureza, bem-estar e experiências culturais."
      }
    }
  ],
  "goa": [
    {
      question: {
        en: "What is Goa famous for?",
        es: "¿Por qué es famosa Goa?",
        pt: "Pelo que Goa é famosa?"
      },
      answer: {
        en: "Goa is famous for beaches, Portuguese heritage, nightlife, seafood, churches and relaxed coastal experiences.",
        es: "Goa es famosa por sus playas, patrimonio portugués, vida nocturna, mariscos, iglesias y ambiente costero.",
        pt: "Goa é famosa por suas praias, patrimônio português, vida noturna, frutos do mar, igrejas e experiências costeiras."
      }
    },
    {
      question: {
        en: "What is the best time to visit Goa?",
        es: "¿Cuál es la mejor época para visitar Goa?",
        pt: "Qual é a melhor época para visitar Goa?"
      },
      answer: {
        en: "November to February is generally popular for beach holidays and sightseeing.",
        es: "De noviembre a febrero suele ser popular para vacaciones de playa y turismo.",
        pt: "De novembro a fevereiro geralmente é popular para férias na praia e passeios."
      }
    },
    {
      question: {
        en: "How many days are enough for Goa?",
        es: "¿Cuántos días son suficientes para Goa?",
        pt: "Quantos dias são suficientes para Goa?"
      },
      answer: {
        en: "4–6 days are ideal for exploring beaches, Old Goa and different coastal areas.",
        es: "De 4 a 6 días son ideales para explorar playas, Old Goa y diferentes zonas costeras.",
        pt: "De 4 a 6 dias são ideais para explorar praias, Old Goa e diferentes áreas costeiras."
      }
    },
    {
      question: {
        en: "Is Goa suitable for families?",
        es: "¿Es Goa adecuado para familias?",
        pt: "Goa é adequada para famílias?"
      },
      answer: {
        en: "Yes, Goa has beaches, heritage sites, nature attractions and family-friendly resorts.",
        es: "Sí, Goa tiene playas, lugares históricos, atracciones naturales y resorts para familias.",
        pt: "Sim, Goa possui praias, locais históricos, atrações naturais e resorts adequados para famílias."
      }
    },
    {
      question: {
        en: "What food should I try in Goa?",
        es: "¿Qué comida debería probar en Goa?",
        pt: "Que comida devo experimentar em Goa?"
      },
      answer: {
        en: "Try Goan fish curry, seafood, xacuti, bebinca and local breads.",
        es: "Prueba el curry de pescado de Goa, mariscos, xacuti, bebinca y panes locales.",
        pt: "Experimente o curry de peixe de Goa, frutos do mar, xacuti, bebinca e pães locais."
      }
    }
  ],
  "meghalaya": [
    {
      question: {
        en: "What is Meghalaya famous for?",
        es: "¿Por qué es famosa Meghalaya?",
        pt: "Pelo que Meghalaya é famosa?"
      },
      answer: {
        en: "Meghalaya is famous for waterfalls, caves, living root bridges, hills and Khasi culture.",
        es: "Meghalaya es famosa por sus cascadas, cuevas, puentes de raíces vivas, montañas y cultura Khasi.",
        pt: "Meghalaya é famosa por suas cachoeiras, cavernas, pontes de raízes vivas, montanhas e cultura Khasi."
      }
    },
    {
      question: {
        en: "What is the best time to visit Meghalaya?",
        es: "¿Cuál es la mejor época para visitar Meghalaya?",
        pt: "Qual é a melhor época para visitar Meghalaya?"
      },
      answer: {
        en: "October to April is generally comfortable for sightseeing, while the monsoon offers spectacular greenery and waterfalls.",
        es: "De octubre a abril suele ser cómodo para hacer turismo, mientras que el monzón ofrece paisajes verdes y cascadas espectaculares.",
        pt: "De outubro a abril geralmente é confortável para passeios, enquanto as monções oferecem paisagens verdes e cachoeiras espetaculares."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–7 days are recommended for Shillong, Cherrapunji and nearby attractions.",
        es: "Se recomiendan de 5 a 7 días para Shillong, Cherrapunji y atracciones cercanas.",
        pt: "Recomenda-se de 5 a 7 dias para Shillong, Cherrapunji e atrações próximas."
      }
    },
    {
      question: {
        en: "Is Meghalaya good for adventure travel?",
        es: "¿Es Meghalaya adecuado para viajes de aventura?",
        pt: "Meghalaya é bom para viagens de aventura?"
      },
      answer: {
        en: "Yes, it offers trekking, caves, waterfalls and nature experiences.",
        es: "Sí, ofrece senderismo, cuevas, cascadas y experiencias naturales.",
        pt: "Sim, oferece trilhas, cavernas, cachoeiras e experiências na natureza."
      }
    },
    {
      question: {
        en: "What should I pack?",
        es: "¿Qué debería llevar?",
        pt: "O que devo levar?"
      },
      answer: {
        en: "Carry rain protection, comfortable shoes, light layers and a small backpack.",
        es: "Lleva protección contra la lluvia, calzado cómodo, ropa ligera y una mochila pequeña.",
        pt: "Leve proteção contra chuva, calçados confortáveis, roupas leves e uma mochila pequena."
      }
    }
  ],
  "sikkim": [
    {
      question: {
        en: "What is Sikkim famous for?",
        es: "¿Por qué es famoso Sikkim?",
        pt: "Pelo que Sikkim é famoso?"
      },
      answer: {
        en: "Sikkim is famous for Himalayan scenery, monasteries, Buddhist culture, mountain lakes and trekking.",
        es: "Sikkim es famoso por sus paisajes del Himalaya, monasterios, cultura budista, lagos de montaña y senderismo.",
        pt: "Sikkim é famoso por suas paisagens do Himalaia, mosteiros, cultura budista, lagos de montanha e trilhas."
      }
    },
    {
      question: {
        en: "What is the best time to visit Sikkim?",
        es: "¿Cuál es la mejor época para visitar Sikkim?",
        pt: "Qual é a melhor época para visitar Sikkim?"
      },
      answer: {
        en: "March to June and October to November are generally popular periods.",
        es: "De marzo a junio y de octubre a noviembre suelen ser períodos populares.",
        pt: "De março a junho e de outubro a novembro geralmente são períodos populares."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–7 days are suitable for exploring Gangtok and nearby destinations.",
        es: "De 5 a 7 días son adecuados para explorar Gangtok y sus alrededores.",
        pt: "De 5 a 7 dias são adequados para explorar Gangtok e destinos próximos."
      }
    },
    {
      question: {
        en: "Are permits required in Sikkim?",
        es: "¿Se requieren permisos en Sikkim?",
        pt: "Permissões são necessárias em Sikkim?"
      },
      answer: {
        en: "Certain restricted and border areas may require permits, so check requirements before travelling.",
        es: "Algunas zonas restringidas y fronterizas pueden requerir permisos; consulta los requisitos antes de viajar.",
        pt: "Algumas áreas restritas e de fronteira podem exigir permissões; verifique os requisitos antes da viagem."
      }
    },
    {
      question: {
        en: "Is Sikkim family-friendly?",
        es: "¿Es Sikkim adecuado para familias?",
        pt: "Sikkim é adequado para famílias?"
      },
      answer: {
        en: "Yes, especially for travellers interested in nature, culture and scenic mountain destinations.",
        es: "Sí, especialmente para quienes disfrutan de la naturaleza, cultura y paisajes montañosos.",
        pt: "Sim, especialmente para viajantes interessados em natureza, cultura e paisagens montanhosas."
      }
    }
  ],
  "bihar": [
    {
      question: {
        en: "What is Bihar famous for?",
        es: "¿Por qué es famoso Bihar?",
        pt: "Pelo que Bihar é famoso?"
      },
      answer: {
        en: "Bihar is famous for Buddhist heritage, Bodh Gaya, Nalanda, ancient history and traditional cuisine.",
        es: "Bihar es famoso por su patrimonio budista, Bodh Gaya, Nalanda, historia antigua y gastronomía tradicional.",
        pt: "Bihar é famoso por seu patrimônio budista, Bodh Gaya, Nalanda, história antiga e culinária tradicional."
      }
    },
    {
      question: {
        en: "What is the best time to visit Bihar?",
        es: "¿Cuál es la mejor época para visitar Bihar?",
        pt: "Qual é a melhor época para visitar Bihar?"
      },
      answer: {
        en: "October to March is generally comfortable for heritage and pilgrimage travel.",
        es: "De octubre a marzo suele ser cómodo para viajes históricos y de peregrinación.",
        pt: "De outubro a março geralmente é confortável para viagens históricas e de peregrinação."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "4–6 days are suitable for Bodh Gaya, Nalanda, Rajgir and Patna.",
        es: "De 4 a 6 días son adecuados para Bodh Gaya, Nalanda, Rajgir y Patna.",
        pt: "De 4 a 6 dias são adequados para Bodh Gaya, Nalanda, Rajgir e Patna."
      }
    },
    {
      question: {
        en: "What food is Bihar famous for?",
        es: "¿Por qué comida es famoso Bihar?",
        pt: "Por qual comida Bihar é famoso?"
      },
      answer: {
        en: "Litti chokha, sattu preparations, thekua and traditional sweets are popular choices.",
        es: "Litti chokha, preparaciones de sattu, thekua y dulces tradicionales son opciones populares.",
        pt: "Litti chokha, preparações de sattu, thekua e doces tradicionais são opções populares."
      }
    },
    {
      question: {
        en: "Is Bihar suitable for cultural tourism?",
        es: "¿Es Bihar adecuado para el turismo cultural?",
        pt: "Bihar é adequado para o turismo cultural?"
      },
      answer: {
        en: "Yes, its ancient Buddhist and historical sites make it an important cultural destination.",
        es: "Sí, sus antiguos lugares budistas e históricos lo convierten en un importante destino cultural.",
        pt: "Sim, seus antigos locais budistas e históricos fazem de Bihar um importante destino cultural."
      }
    }
  ],
  "andaman-islands": [
    {
      question: {
        en: "What is Andaman & Nicobar famous for?",
        es: "¿Por qué es famoso Andamán y Nicobar?",
        pt: "Pelo que as ilhas Andaman e Nicobar são famosas?"
      },
      answer: {
        en: "It is famous for tropical beaches, coral reefs, marine life, water sports and island experiences.",
        es: "Es famoso por sus playas tropicales, arrecifes de coral, vida marina, deportes acuáticos y experiencias insulares.",
        pt: "É famoso por suas praias tropicais, recifes de coral, vida marinha, esportes aquáticos e experiências nas ilhas."
      }
    },
    {
      question: {
        en: "What is the best time to visit?",
        es: "¿Cuál es la mejor época para visitar?",
        pt: "Qual é a melhor época para visitar?"
      },
      answer: {
        en: "October to May is generally popular for island travel and water activities.",
        es: "De octubre a mayo suele ser popular para viajar entre islas y practicar actividades acuáticas.",
        pt: "De outubro a maio geralmente é popular para viagens entre ilhas e atividades aquáticas."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–7 days are suitable for exploring Port Blair and nearby islands.",
        es: "De 5 a 7 días son adecuados para explorar Port Blair y las islas cercanas.",
        pt: "De 5 a 7 dias são adequados para explorar Port Blair e as ilhas próximas."
      }
    },
    {
      question: {
        en: "Can I go scuba diving?",
        es: "¿Puedo hacer buceo?",
        pt: "Posso praticar mergulho?"
      },
      answer: {
        en: "Yes, scuba diving and snorkelling are available through authorised operators at suitable locations.",
        es: "Sí, el buceo y snorkel están disponibles con operadores autorizados en lugares adecuados.",
        pt: "Sim, mergulho e snorkeling estão disponíveis através de operadores autorizados em locais adequados."
      }
    },
    {
      question: {
        en: "Should I book ferries in advance?",
        es: "¿Debería reservar ferris con antelación?",
        pt: "Devo reservar balsas com antecedência?"
      },
      answer: {
        en: "Yes, advance booking is recommended during travel periods.",
        es: "Sí, se recomienda reservar con antelación durante los períodos de mayor demanda.",
        pt: "Sim, recomenda-se reservar com antecedência durante os períodos movimentados."
      }
    }
  ],
  "tamil-nadu": [
    {
      question: {
        en: "What is Tamil Nadu famous for?",
        es: "¿Por qué es famoso Tamil Nadu?",
        pt: "Pelo que Tamil Nadu é famoso?"
      },
      answer: {
        en: "Tamil Nadu is famous for ancient temples, classical culture, beaches, hill stations and South Indian cuisine.",
        es: "Tamil Nadu es famoso por sus templos antiguos, cultura clásica, playas, montañas y gastronomía del sur de India.",
        pt: "Tamil Nadu é famoso por seus templos antigos, cultura clássica, praias, regiões montanhosas e culinária do sul da Índia."
      }
    },
    {
      question: {
        en: "What is the best time to visit Tamil Nadu?",
        es: "¿Cuál es la mejor época para visitar Tamil Nadu?",
        pt: "Qual é a melhor época para visitar Tamil Nadu?"
      },
      answer: {
        en: "October to March is generally comfortable for exploring most destinations.",
        es: "De octubre a marzo suele ser cómodo para explorar la mayoría de los destinos.",
        pt: "De outubro a março geralmente é confortável para explorar a maioria dos destinos."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "7–10 days are suitable for Chennai, Mahabalipuram, Madurai and Ooty.",
        es: "De 7 a 10 días son adecuados para Chennai, Mahabalipuram, Madurai y Ooty.",
        pt: "De 7 a 10 dias são adequados para Chennai, Mahabalipuram, Madurai e Ooty."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try dosa, idli, pongal, sambar, Chettinad dishes and filter coffee.",
        es: "Prueba dosa, idli, pongal, sambar, platos Chettinad y café filtrado.",
        pt: "Experimente dosa, idli, pongal, sambar, pratos Chettinad e café filtrado."
      }
    },
    {
      question: {
        en: "Is Tamil Nadu suitable for families?",
        es: "¿Es Tamil Nadu adecuado para familias?",
        pt: "Tamil Nadu é adequado para famílias?"
      },
      answer: {
        en: "Yes, its temples, beaches, hill stations and cultural attractions offer diverse family experiences.",
        es: "Sí, sus templos, playas, montañas y atracciones culturales ofrecen experiencias variadas para familias.",
        pt: "Sim, seus templos, praias, regiões montanhosas e atrações culturais oferecem experiências variadas para famílias."
      }
    }
  ],
  "madhya-pradesh": [
    {
      question: {
        en: "What is Madhya Pradesh famous for?",
        es: "¿Por qué es famoso Madhya Pradesh?",
        pt: "Pelo que Madhya Pradesh é famoso?"
      },
      answer: {
        en: "Madhya Pradesh is famous for Khajuraho, wildlife, historic forts, temples, Ujjain and rich cultural heritage.",
        es: "Madhya Pradesh es famoso por Khajuraho, vida silvestre, fuertes históricos, templos, Ujjain y patrimonio cultural.",
        pt: "Madhya Pradesh é famoso por Khajuraho, vida selvagem, fortes históricos, templos, Ujjain e patrimônio cultural."
      }
    },
    {
      question: {
        en: "What is the best time to visit?",
        es: "¿Cuál es la mejor época para visitar?",
        pt: "Qual é a melhor época para visitar?"
      },
      answer: {
        en: "October to March is generally ideal for sightseeing and wildlife experiences.",
        es: "De octubre a marzo suele ser ideal para hacer turismo y disfrutar de la vida silvestre.",
        pt: "De outubro a março geralmente é ideal para passeios e experiências de vida selvagem."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "6–8 days are suitable for Bhopal, Indore, Khajuraho and Ujjain.",
        es: "De 6 a 8 días son adecuados para Bhopal, Indore, Khajuraho y Ujjain.",
        pt: "De 6 a 8 dias são adequados para Bhopal, Indore, Khajuraho e Ujjain."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try poha, bhutte ka kees, dal bafla, jalebi and local street food.",
        es: "Prueba poha, bhutte ka kees, dal bafla, jalebi y comida callejera local.",
        pt: "Experimente poha, bhutte ka kees, dal bafla, jalebi e comida de rua local."
      }
    },
    {
      question: {
        en: "Is Madhya Pradesh good for heritage tourism?",
        es: "¿Es Madhya Pradesh bueno para el turismo histórico?",
        pt: "Madhya Pradesh é bom para o turismo histórico?"
      },
      answer: {
        en: "Yes, the state has temples, forts, palaces, caves and important historical sites.",
        es: "Sí, el estado tiene templos, fuertes, palacios, cuevas y lugares históricos importantes.",
        pt: "Sim, o estado possui templos, fortes, palácios, cavernas e importantes locais históricos."
      }
    }
  ],
  "west-bengal": [
    {
      question: {
        en: "What is West Bengal famous for?",
        es: "¿Por qué es famoso Bengala Occidental?",
        pt: "Pelo que Bengala Ocidental é famosa?"
      },
      answer: {
        en: "West Bengal is famous for Kolkata, Darjeeling, Sundarbans, Bengali culture, literature and cuisine.",
        es: "West Bengal es famoso por Kolkata, Darjeeling, Sundarbans, cultura bengalí, literatura y gastronomía.",
        pt: "West Bengal é famoso por Kolkata, Darjeeling, Sundarbans, cultura bengali, literatura e culinária."
      }
    },
    {
      question: {
        en: "What is the best time to visit West Bengal?",
        es: "¿Cuál es la mejor época para visitar Bengala Occidental?",
        pt: "Qual é a melhor época para visitar Bengala Ocidental?"
      },
      answer: {
        en: "October to March is generally comfortable for most destinations.",
        es: "De octubre a marzo suele ser cómodo para la mayoría de los destinos.",
        pt: "De outubro a março geralmente é confortável para a maioria dos destinos."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "7–10 days are suitable for combining Kolkata, Darjeeling and nearby attractions.",
        es: "De 7 a 10 días son adecuados para combinar Kolkata, Darjeeling y atracciones cercanas.",
        pt: "De 7 a 10 dias são adequados para combinar Kolkata, Darjeeling e atrações próximas."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try fish curry, mishti doi, rasgulla, sandesh and kathi rolls.",
        es: "Prueba curry de pescado, mishti doi, rasgulla, sandesh y kathi rolls.",
        pt: "Experimente curry de peixe, mishti doi, rasgulla, sandesh e kathi rolls."
      }
    },
    {
      question: {
        en: "Is West Bengal good for cultural tourism?",
        es: "¿Es Bengala Occidental adecuado para el turismo cultural?",
        pt: "Bengala Ocidental é bom para o turismo cultural?"
      },
      answer: {
        en: "Yes, it offers colonial heritage, literature, art, temples, festivals and traditional cuisine.",
        es: "Sí, ofrece patrimonio colonial, literatura, arte, templos, festivales y gastronomía tradicional.",
        pt: "Sim, oferece patrimônio colonial, literatura, arte, templos, festivais e culinária tradicional."
      }
    }
  ],
  "chhattisgarh": [
    {
      question: {
        en: "What is Chhattisgarh famous for?",
        es: "¿Por qué es conocido Chhattisgarh?",
        pt: "Pelo que Chhattisgarh é conhecido?"
      },
      answer: {
        en: "Chhattisgarh is known for waterfalls, forests, tribal culture, caves, temples and natural landscapes.",
        es: "Chhattisgarh es conocido por sus cascadas, bosques, cultura tribal, cuevas, templos y paisajes naturales.",
        pt: "Chhattisgarh é conhecido por suas cachoeiras, florestas, cultura tribal, cavernas, templos e paisagens naturais."
      }
    },
    {
      question: {
        en: "What is the best time to visit?",
        es: "¿Cuál es la mejor época para visitar?",
        pt: "Qual é a melhor época para visitar?"
      },
      answer: {
        en: "October to March is generally comfortable for exploring outdoor attractions.",
        es: "De octubre a marzo suele ser cómodo para explorar atracciones al aire libre.",
        pt: "De outubro a março geralmente é confortável para explorar atrações ao livre."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "4–6 days are suitable for exploring Raipur, Jagdalpur and nearby natural attractions.",
        es: "De 4 a 6 días son adecuados para explorar Raipur, Jagdalpur y atracciones naturales cercanas.",
        pt: "De 4 a 6 dias são adequados para explorar Raipur, Jagdalpur e atrações naturais próximas."
      }
    },
    {
      question: {
        en: "Is Chhattisgarh suitable for adventure travel?",
        es: "¿Es Chhattisgarh adecuado para viajes de aventura?",
        pt: "Chhattisgarh é adequado para viagens de aventura?"
      },
      answer: {
        en: "Yes, waterfalls, caves, forests and nature trails provide opportunities for outdoor exploration.",
        es: "Sí, sus cascadas, cuevas, bosques y senderos ofrecen oportunidades para explorar la naturaleza.",
        pt: "Sim, cachoeiras, cavernas, florestas e trilhas oferecem oportunidades para explorar a natureza."
      }
    },
    {
      question: {
        en: "What should I pack?",
        es: "¿Qué debería llevar?",
        pt: "O que devo levar?"
      },
      answer: {
        en: "Carry comfortable shoes, light clothing, rain protection and sufficient water for outdoor trips.",
        es: "Lleva calzado cómodo, ropa ligera, protección contra la lluvia y suficiente agua.",
        pt: "Leve calçados confortáveis, roupas leves, proteção contra chuva e água suficiente."
      }
    }
  ],
  "uttar-pradesh": [
    {
      question: {
        en: "What is Uttar Pradesh famous for?",
        es: "¿Por qué es famoso Uttar Pradesh?",
        pt: "Pelo que Uttar Pradesh é famoso?"
      },
      answer: {
        en: "Uttar Pradesh is famous for the Taj Mahal, Varanasi, Ayodhya, Lucknow, Agra Fort and rich cultural heritage.",
        es: "Uttar Pradesh es famoso por el Taj Mahal, Varanasi, Ayodhya, Lucknow, Agra Fort y su rico patrimonio cultural.",
        pt: "Uttar Pradesh é famoso pelo Taj Mahal, Varanasi, Ayodhya, Lucknow, Agra Fort e seu rico patrimônio cultural."
      }
    },
    {
      question: {
        en: "What is the best time to visit?",
        es: "¿Cuál es la mejor época para visitar?",
        pt: "Qual é a melhor época para visitar?"
      },
      answer: {
        en: "October to March is generally comfortable for sightseeing.",
        es: "De octubre a marzo suele ser cómodo para hacer turismo.",
        pt: "De outubro a março geralmente é confortável para passeios."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "7–10 days are suitable for Agra, Varanasi, Lucknow and Ayodhya.",
        es: "De 7 a 10 días son adecuados para Agra, Varanasi, Lucknow y Ayodhya.",
        pt: "De 7 a 10 dias são adequados para Agra, Varanasi, Lucknow e Ayodhya."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try Awadhi kebabs, chaat, peda, kachori and traditional sweets.",
        es: "Prueba kebabs Awadhi, chaat, peda, kachori y dulces tradicionales.",
        pt: "Experimente kebabs Awadhi, chaat, peda, kachori e doces tradicionais."
      }
    },
    {
      question: {
        en: "Is Uttar Pradesh good for first-time visitors?",
        es: "¿Es Uttar Pradesh bueno para quienes visitan por primera vez?",
        pt: "Uttar Pradesh é bom para quem visita pela primeira vez?"
      },
      answer: {
        en: "Yes, it offers some of India's most important historical, spiritual and cultural attractions.",
        es: "Sí, ofrece algunas de las atracciones históricas, espirituales y culturales más importantes de India.",
        pt: "Sim, oferece algumas das atrações históricas, espirituais e culturais mais importantes da Índia."
      }
    }
  ],
  "punjab": [
    {
      question: {
        en: "What is Punjab famous for?",
        es: "¿Por qué es famoso Punjab?",
        pt: "Pelo que o Punjab é famoso?"
      },
      answer: {
        en: "Punjab is famous for the Golden Temple, Sikh heritage, Punjabi culture, music, food and hospitality.",
        es: "Punjab es famoso por el Golden Temple, el patrimonio sij, la cultura, música, gastronomía y hospitalidad punjabí.",
        pt: "Punjab é famoso pelo Golden Temple, patrimônio Sikh, cultura, música, culinária e hospitalidade Punjabi."
      }
    },
    {
      question: {
        en: "What is the best time to visit Punjab?",
        es: "¿Cuál es la mejor época para visitar Punjab?",
        pt: "Qual é a melhor época para visitar o Punjab?"
      },
      answer: {
        en: "October to March is generally comfortable for sightseeing.",
        es: "De octubre a marzo suele ser cómodo para hacer turismo.",
        pt: "De outubro a março geralmente é confortável para passeios."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "4–6 days are suitable for Amritsar, Chandigarh, Ludhiana and Patiala.",
        es: "De 4 a 6 días son adecuados para Amritsar, Chandigarh, Ludhiana y Patiala.",
        pt: "De 4 a 6 dias são adequados para Amritsar, Chandigarh, Ludhiana e Patiala."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try Amritsari kulcha, chole, lassi, butter chicken and sarson da saag.",
        es: "Prueba Amritsari kulcha, chole, lassi, butter chicken y sarson da saag.",
        pt: "Experimente Amritsari kulcha, chole, lassi, butter chicken e sarson da saag."
      }
    },
    {
      question: {
        en: "What should I know before visiting the Golden Temple?",
        es: "¿Qué debería saber antes de visitar el Golden Temple?",
        pt: "O que devo saber antes de visitar o Golden Temple?"
      },
      answer: {
        en: "Visitors should cover their heads, remove footwear and follow the site's customs.",
        es: "Los visitantes deben cubrirse la cabeza, quitarse el calzado y seguir las costumbres del lugar.",
        pt: "Os visitantes devem cobrir a cabeça, retirar os calçados e seguir os costumes do local."
      }
    }
  ],
  "gujarat": [
    {
      question: {
        en: "What is Gujarat famous for?",
        es: "¿Por qué es famoso Gujarat?",
        pt: "Pelo que Gujarat é famoso?"
      },
      answer: {
        en: "Gujarat is famous for the Rann of Kutch, Gir wildlife, temples, handicrafts, heritage cities and Gujarati cuisine.",
        es: "Gujarat es famoso por el Rann of Kutch, la vida silvestre de Gir, templos, artesanía, ciudades históricas y gastronomía gujarati.",
        pt: "Gujarat é famoso pelo Rann of Kutch, vida selvagem de Gir, templos, artesanato, cidades históricas e culinária Gujarati."
      }
    },
    {
      question: {
        en: "What is the best time to visit Gujarat?",
        es: "¿Cuál es la mejor época para visitar Gujarat?",
        pt: "Qual é a melhor época para visitar Gujarat?"
      },
      answer: {
        en: "October to March is generally the most comfortable period.",
        es: "De octubre a marzo suele ser el período más cómodo.",
        pt: "De outubro a março geralmente é o período mais confortável."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "7–10 days are suitable for Ahmedabad, Bhuj, Dwarka and Vadodara.",
        es: "De 7 a 10 días son adecuados para Ahmedabad, Bhuj, Dwarka y Vadodara.",
        pt: "De 7 a 10 dias são adequados para Ahmedabad, Bhuj, Dwarka e Vadodara."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try Gujarati thali, dhokla, thepla, fafda-jalebi and khandvi.",
        es: "Prueba el thali gujarati, dhokla, thepla, fafda-jalebi y khandvi.",
        pt: "Experimente Gujarati thali, dhokla, thepla, fafda-jalebi e khandvi."
      }
    },
    {
      question: {
        en: "Is Gujarat good for cultural tourism?",
        es: "¿Es Gujarat bueno para el turismo cultural?",
        pt: "Gujarat é bom para o turismo cultural?"
      },
      answer: {
        en: "Yes, Gujarat offers temples, heritage sites, crafts, festivals and wildlife experiences.",
        es: "Sí, Gujarat ofrece templos, lugares históricos, artesanía, festivales y experiencias de vida silvestre.",
        pt: "Sim, Gujarat oferece templos, locais históricos, artesanato, festivais e experiências de vida selvagem."
      }
    }
  ],
  "uttarakhand": [
    {
      question: {
        en: "What is Uttarakhand famous for?",
        es: "¿Por qué es famoso Uttarakhand?",
        pt: "Pelo que Uttarakhand é famoso?"
      },
      answer: {
        en: "Uttarakhand is famous for Himalayan landscapes, pilgrimage sites, yoga, trekking, rivers and hill stations.",
        es: "Uttarakhand es famoso por sus paisajes del Himalaya, lugares de peregrinación, yoga, senderismo, ríos y montañas.",
        pt: "Uttarakhand é famoso por suas paisagens do Himalaia, locais de peregrinação, yoga, trilhas, rios e cidades montanhosas."
      }
    },
    {
      question: {
        en: "What is the best time to visit Uttarakhand?",
        es: "¿Cuál es la mejor época para visitar Uttarakhand?",
        pt: "Qual é a melhor época para visitar Uttarakhand?"
      },
      answer: {
        en: "March to June and September to November are generally popular for sightseeing.",
        es: "De marzo a junio y de septiembre a noviembre suelen ser períodos populares.",
        pt: "De março a junho e de setembro a novembro geralmente são períodos populares."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–8 days are suitable for destinations such as Dehradun, Rishikesh, Haridwar and Nainital.",
        es: "De 5 a 8 días son adecuados para Dehradun, Rishikesh, Haridwar y Nainital.",
        pt: "De 5 a 8 dias são adequados para Dehradun, Rishikesh, Haridwar e Nainital."
      }
    },
    {
      question: {
        en: "Is Uttarakhand good for adventure?",
        es: "¿Es Uttarakhand adecuado para la aventura?",
        pt: "Uttarakhand é bom para aventura?"
      },
      answer: {
        en: "Yes, activities include trekking, rafting, camping and mountain exploration.",
        es: "Sí, las actividades incluyen senderismo, rafting, camping y exploración de montaña.",
        pt: "Sim, as atividades incluem trilhas, rafting, camping e exploração das montanhas."
      }
    },
    {
      question: {
        en: "What should I pack?",
        es: "¿Qué debería llevar?",
        pt: "O que devo levar?"
      },
      answer: {
        en: "Carry layers, comfortable shoes, rain protection and basic travel essentials.",
        es: "Lleva ropa en capas, calzado cómodo, protección contra la lluvia y artículos básicos.",
        pt: "Leve roupas em camadas, calçados confortáveis, proteção contra chuva e itens básicos."
      }
    }
  ],
  "odisha": [
    {
      question: {
        en: "What is Odisha famous for?",
        es: "¿Por qué es famosa Odisha?",
        pt: "Pelo que Odisha é famosa?"
      },
      answer: {
        en: "Odisha is famous for ancient temples, Puri, Konark, Bhubaneswar, beaches, handicrafts and Odia cuisine.",
        es: "Odisha es famosa por sus antiguos templos, Puri, Konark, Bhubaneswar, playas, artesanía y gastronomía odia.",
        pt: "Odisha é famosa por seus antigos templos, Puri, Konark, Bhubaneswar, praias, artesanato e culinária de Odisha."
      }
    },
    {
      question: {
        en: "What is the best time to visit Odisha?",
        es: "¿Cuál es la mejor época para visitar Odisha?",
        pt: "Qual é a melhor época para visitar Odisha?"
      },
      answer: {
        en: "October to March is generally comfortable for sightseeing.",
        es: "De octubre a marzo suele ser cómodo para hacer turismo.",
        pt: "De outubro a março geralmente é confortável para passeios."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–7 days are suitable for Bhubaneswar, Puri and Konark.",
        es: "De 5 a 7 días son adecuados para Bhubaneswar, Puri y Konark.",
        pt: "De 5 a 7 dias são adequados para Bhubaneswar, Puri e Konark."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try dalma, pakhala, chhena poda, dahi bara aloo dum and seafood.",
        es: "Prueba dalma, pakhala, chhena poda, dahi bara aloo dum y mariscos.",
        pt: "Experimente dalma, pakhala, chhena poda, dahi bara aloo dum e frutos do mar."
      }
    },
    {
      question: {
        en: "Can Odisha be explored as a cultural trip?",
        es: "¿Se puede explorar Odisha como un viaje cultural?",
        pt: "Odisha pode ser explorada como uma viagem cultural?"
      },
      answer: {
        en: "Yes, its temples, architecture, festivals, crafts and cuisine make it an excellent cultural destination.",
        es: "Sí, sus templos, arquitectura, festivales, artesanía y gastronomía lo convierten en un excelente destino cultural.",
        pt: "Sim, seus templos, arquitetura, festivais, artesanato e culinária fazem de Odisha um excelente destino cultural."
      }
    }
  ],
  "assam": [
    {
      question: {
        en: "What is Assam famous for?",
        es: "¿Por qué es famoso Assam?",
        pt: "Pelo que Assam é famoso?"
      },
      answer: {
        en: "Assam is famous for tea gardens, the Brahmaputra River, wildlife, Kaziranga and Assamese culture.",
        es: "Assam es famoso por sus plantaciones de té, el río Brahmaputra, vida silvestre, Kaziranga y cultura asamesa.",
        pt: "Assam é famoso por suas plantações de chá, rio Brahmaputra, vida selvagem, Kaziranga e cultura assamesa."
      }
    },
    {
      question: {
        en: "What is the best time to visit Assam?",
        es: "¿Cuál es la mejor época para visitar Assam?",
        pt: "Qual é a melhor época para visitar Assam?"
      },
      answer: {
        en: "October to April is generally suitable for sightseeing and wildlife experiences.",
        es: "De octubre a abril suele ser adecuado para hacer turismo y disfrutar de la vida silvestre.",
        pt: "De outubro a abril geralmente é adequado para passeios e experiências de vida selvagem."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–7 days are suitable for Guwahati, Kaziranga and nearby attractions.",
        es: "De 5 a 7 días son adecuados para Guwahati, Kaziranga y atracciones cercanas.",
        pt: "De 5 a 7 dias são adequados para Guwahati, Kaziranga e atrações próximas."
      }
    },
    {
      question: {
        en: "What food should I try?",
        es: "¿Qué comida debería probar?",
        pt: "Que comida devo experimentar?"
      },
      answer: {
        en: "Try Assamese thali, masor tenga, khar, pitha and duck curry.",
        es: "Prueba el thali asamés, masor tenga, khar, pitha y curry de pato.",
        pt: "Experimente o thali assamês, masor tenha, khar, pitha e curry de pato."
      }
    },
    {
      question: {
        en: "Is Assam good for wildlife tourism?",
        es: "¿Es Assam bueno para el turismo de vida silvestre?",
        pt: "Assam é bom para o turismo de vida selvagem?"
      },
      answer: {
        en: "Yes, Assam is an excellent destination for wildlife and nature experiences, especially around Kaziranga.",
        es: "Sí, Assam es un excelente destino para disfrutar de la vida silvestre y la naturaleza, especialmente en Kaziranga.",
        pt: "Sim, Assam é um excelente destino para experiências de vida selvagem e natureza, especialmente em Kaziranga."
      }
    }
  ],
  "ladakh": [
    {
      question: {
        en: "What is Ladakh famous for?",
        es: "¿Por qué es famoso Ladakh?",
        pt: "Pelo que Ladakh é famoso?"
      },
      answer: {
        en: "Ladakh is famous for dramatic Himalayan landscapes, Buddhist monasteries, high-altitude lakes, mountain passes and road trips.",
        es: "Ladakh es famoso por sus paisajes del Himalaya, monasterios budistas, lagos de gran altitud, pasos de montaña y viajes por carretera.",
        pt: "Ladakh é famoso por suas paisagens do Himalaia, mosteiros budistas, lagos de alta altitude, passagens de montanha e viagens de carro."
      }
    },
    {
      question: {
        en: "What is the best time to visit Ladakh?",
        es: "¿Cuál es la mejor época para visitar Ladakh?",
        pt: "Qual é a melhor época para visitar Ladakh?"
      },
      answer: {
        en: "May to September is generally the most suitable period for road travel and sightseeing.",
        es: "De mayo a septiembre suele ser el período más adecuado para viajes por carretera y turismo.",
        pt: "De maio a setembro geralmente é o período mais adequado para viagens rodoviárias e passeios."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "5–8 days are suitable for Leh and major nearby attractions.",
        es: "De 5 a 8 días son adecuados para Leh y las principales atracciones cercanas.",
        pt: "De 5 a 8 dias são adequados para Leh e as principais atrações próximas."
      }
    },
    {
      question: {
        en: "Is acclimatisation necessary in Ladakh?",
        es: "¿Es necesaria la aclimatación en Ladakh?",
        pt: "A aclimatação é necessária em Ladakh?"
      },
      answer: {
        en: "Yes, acclimatisation is important because Ladakh is located at high altitude.",
        es: "Sí, la aclimatación es importante porque Ladakh se encuentra a gran altitud.",
        pt: "Sim, a aclimatação é importante porque Ladakh está localizado em alta altitude."
      }
    },
    {
      question: {
        en: "What should I pack for Ladakh?",
        es: "¿Qué debería llevar para Ladakh?",
        pt: "O que devo levar para Ladakh?"
      },
      answer: {
        en: "Carry warm layers, sunglasses, sunscreen, comfortable shoes and essential medicines.",
        es: "Lleva ropa abrigada, gafas de sol, protector solar, calzado cómodo y medicamentos esenciales.",
        pt: "Leve roupas quentes, óculos de sol, protetor solar, calçados confortáveis e medicamentos essenciais."
      }
    }
  ],
  "telangana": [
    {
      question: {
        en: "What is Telangana famous for?",
        es: "¿Por qué es famosa Telangana?",
        pt: "Pelo que Telangana é famosa?"
      },
      answer: {
        en: "Telangana is famous for Hyderabad, Charminar, Golconda Fort, historic monuments and Hyderabadi cuisine.",
        es: "Telangana es famosa por Hyderabad, Charminar, Golconda Fort, monumentos históricos y gastronomía de Hyderabad.",
        pt: "Telangana é famosa por Hyderabad, Charminar, Golconda Fort, monumentos históricos e culinária de Hyderabad."
      }
    },
    {
      question: {
        en: "What is the best time to visit Telangana?",
        es: "¿Cuál es la mejor época para visitar Telangana?",
        pt: "Qual é a melhor época para visitar Telangana?"
      },
      answer: {
        en: "October to February is generally more comfortable for sightseeing.",
        es: "De octubre a febrero suele ser más cómodo para hacer turismo.",
        pt: "De outubro a fevereiro geralmente é mais confortável para passeios."
      }
    },
    {
      question: {
        en: "How many days are enough?",
        es: "¿Cuántos días son suficientes?",
        pt: "Quantos dias são suficientes?"
      },
      answer: {
        en: "3–5 days are suitable for exploring Hyderabad and nearby attractions.",
        es: "De 3 a 5 días son adecuados para explorar Hyderabad y sus alrededores.",
        pt: "De 3 a 5 dias são adequados para explorar Hyderabad e destinos próximos."
      }
    },
    {
      question: {
        en: "What food should I try in Telangana?",
        es: "¿Qué comida debería probar en Telangana?",
        pt: "Que comida devo experimentar em Telangana?"
      },
      answer: {
        en: "Try Hyderabadi biryani, haleem, mirchi ka salan, kebabs and local sweets.",
        es: "Prueba el biryani de Hyderabad, haleem, mirchi ka salan, kebabs y dulces locales.",
        pt: "Experimente biryani de Hyderabad, haleem, mirchi ka salan, kebabs e doces locais."
      }
    },
    {
      question: {
        en: "Is Telangana suitable for families?",
        es: "¿Es Telangana adecuado para familias?",
        pt: "Telangana é adequada para famílias?"
      },
      answer: {
        en: "Yes, the state offers historical monuments, museums, parks, shopping and food experiences.",
        es: "Sí, el estado ofrece monumentos históricos, museos, parques, compras y experiencias gastronómicas.",
        pt: "Sim, o estado oferece monumentos históricos, museus, parques, compras e experiências gastronômicas."
      }
    }
  ]
};

// ======================== STATE MANAGER ========================

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const updatedStatesList = [];

  states.forEach((state) => {
    const stateSlug = state.slug;
    if (stateFaqsData[stateSlug]) {
      state.faqs = stateFaqsData[stateSlug];
      updatedStatesList.push(state);
      console.log(`Updated faqs for state: ${stateSlug}`);
    }
  });

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log(`\n✅ Local states.json updated for ${updatedStatesList.length} states!`);

  // Upload to remote Firestore
  if (firebaseConfig.apiKey && updatedStatesList.length > 0) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const uploadPromises = updatedStatesList.map((state) => {
      const docRef = doc(firestore, "states", state.slug);
      return setDoc(docRef, state).then(() => {
        console.log(`🚀 SUCCESS: Remote Firestore state document '${state.slug}' updated!`);
      });
    });

    Promise.all(uploadPromises).then(() => {
      console.log("✅ All Firestore state updates completed successfully!");
      process.exit(0);
    }).catch(err => {
      console.error("❌ FAILED to upload to Firestore:", err);
      process.exit(1);
    });
  } else {
    console.log("Skipping Firestore updates (config missing or no states updated).");
    process.exit(0);
  }
} else {
  console.error("Local states.json not found!");
  process.exit(1);
}
