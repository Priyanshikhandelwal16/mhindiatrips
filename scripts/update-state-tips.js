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

// ======================== STATE TRAVEL TIPS DATA ========================

const stateTipsData = {
  "rajasthan": [
    {
      en: "Carry light cotton clothes, sunglasses and sunscreen, especially during summer.",
      es: "Lleva ropa ligera de algodón, gafas de sol y protector solar, especialmente en verano.",
      pt: "Leve roupas leves de algodão, óculos de sol e protetor solar, especialmente no verão."
    },
    {
      en: "Start sightseeing early to avoid extreme afternoon heat.",
      es: "Comienza las visitas temprano para evitar el intenso calor de la tarde.",
      pt: "Comece os passeios cedo para evitar o calor intenso da tarde."
    },
    {
      en: "Respect local customs when visiting forts, palaces and temples.",
      es: "Respeta las costumbres locales al visitar fuertes, palacios y templos.",
      pt: "Respeite os costumes locais ao visitar fortes, palácios e templos."
    },
    {
      en: "Try authentic Rajasthani food such as dal baati churma, gatte and ker sangri.",
      es: "Prueba platos auténticos de Rajasthan como dal baati churma, gatte y ker sangri.",
      pt: "Experimente pratos tradicionais do Rajasthan, como dal baati churma, gatte e ker sangri."
    },
    {
      en: "Book desert camps and popular heritage hotels in advance during peak season.",
      es: "Reserva con antelación los campamentos del desierto y hoteles patrimoniales durante la temporada alta.",
      pt: "Reserve com antecedência os acampamentos no deserto e hotéis históricos durante a alta temporada."
    }
  ],
  "karnataka": [
    {
      en: "Plan separate days for Bengaluru, Mysuru, Hampi and Coorg.",
      es: "Planifica días separados para Bengaluru, Mysuru, Hampi y Coorg.",
      pt: "Planeje dias separados para Bengaluru, Mysuru, Hampi e Coorg."
    },
    {
      en: "Carry comfortable footwear for exploring temples and heritage sites.",
      es: "Lleva calzado cómodo para explorar templos y lugares históricos.",
      pt: "Leve calçados confortáveis para explorar templos e locais históricos."
    },
    {
      en: "Try local dishes such as dosa, bisi bele bath, Mysore pak and Mangalorean cuisine.",
      es: "Prueba platos locales como dosa, bisi bele bath, Mysore pak y gastronomía de Mangalore.",
      pt: "Experimente pratos locais como dosa, bisi bele bath, Mysore pak e culinária de Mangalore."
    },
    {
      en: "Keep a light jacket for hill destinations such as Coorg.",
      es: "Lleva una chaqueta ligera para destinos de montaña como Coorg.",
      pt: "Leve uma jaqueta leve para destinos montanhosos como Coorg."
    },
    {
      en: "Start outdoor sightseeing early, particularly during warmer months.",
      es: "Comienza las visitas al aire libre temprano, especialmente durante los meses más cálidos.",
      pt: "Comece os passeios ao ar livre cedo, especialmente nos meses mais quentes."
    }
  ],
  "maharashtra": [
    {
      en: "Use Mumbai's local trains and metro for efficient city travel.",
      es: "Utiliza los trenes locales y el metro de Mumbai para desplazarte eficazmente.",
      pt: "Use os trens locais e o metrô de Mumbai para se deslocar com eficiência."
    },
    {
      en: "Carry comfortable footwear for caves, forts and heritage attractions.",
      es: "Lleva calzado cómodo para visitar cuevas, fuertes y lugares históricos.",
      pt: "Leve calçados confortáveis para visitar cavernas, fortes e locais históricos."
    },
    {
      en: "Try regional foods such as vada pav, misal pav, puran poli and Kolhapuri cuisine.",
      es: "Prueba comidas regionales como vada pav, misal pav, puran poli y cocina Kolhapuri.",
      pt: "Experimente comidas regionais como vada pav, misal pav, puran poli e culinária Kolhapuri."
    },
    {
      en: "Keep extra time for Mumbai traffic during peak hours.",
      es: "Reserva tiempo adicional por el tráfico de Mumbai en horas punta.",
      pt: "Reserve tempo extra devido ao trânsito de Mumbai nos horários de pico."
    },
    {
      en: "Visit hill stations and forts during pleasant weather for better outdoor experiences.",
      es: "Visita las estaciones de montaña y fuertes con clima agradable.",
      pt: "Visite as regiões montanhosas e fortes durante períodos de clima agradável."
    }
  ],
  "himachal-pradesh": [
    {
      en: "Carry warm layers even during summer in higher-altitude destinations.",
      es: "Lleva ropa de abrigo incluso durante el verano en destinos de gran altitud.",
      pt: "Leve roupas quentes mesmo durante o verão em destinos de alta altitude."
    },
    {
      en: "Allow extra travel time because mountain roads can be slow.",
      es: "Reserva tiempo adicional porque las carreteras de montaña pueden ser lentas.",
      pt: "Reserve tempo extra, pois as estradas de montanha podem ser lentas."
    },
    {
      en: "Check weather and road conditions before travelling to high-altitude areas.",
      es: "Consulta el clima y el estado de las carreteras antes de viajar a zonas altas.",
      pt: "Verifique o clima e as condições das estradas antes de viajar para áreas de grande altitude."
    },
    {
      en: "Carry comfortable shoes for trekking and sightseeing.",
      es: "Lleva calzado cómodo para senderismo y visitas turísticas.",
      pt: "Leve calçados confortáveis para trilhas e passeios."
    },
    {
      en: "Respect local communities and avoid littering in mountain areas.",
      es: "Respeta a las comunidades locales y evita tirar basura en las montañas.",
      pt: "Respeite as comunidades locais e evite deixar lixo nas montanhas."
    }
  ],
  "kerala": [
    {
      en: "Carry light cotton clothes and rain protection.",
      es: "Lleva ropa ligera de algodón y protección contra la lluvia.",
      pt: "Leve roupas leves de algodão e proteção contra a chuva."
    },
    {
      en: "Book houseboats and popular resorts in advance during peak season.",
      es: "Reserva las casas flotantes y resorts populares con antelación durante la temporada alta.",
      pt: "Reserve casas-barco e resorts populares com antecedência durante a alta temporada."
    },
    {
      en: "Try Kerala specialties such as appam, puttu, seafood and traditional sadya.",
      es: "Prueba especialidades de Kerala como appam, puttu, mariscos y sadya tradicional.",
      pt: "Experimente especialidades de Kerala como appam, puttu, frutos do mar e sadya tradicional."
    },
    {
      en: "Keep insect repellent for backwater and forest areas.",
      es: "Lleva repelente de insectos para las zonas de backwaters y bosques.",
      pt: "Leve repelente de insetos para áreas de backwaters e florestas."
    },
    {
      en: "Combine beaches, backwaters, hill stations and cultural attractions for a balanced itinerary.",
      es: "Combina playas, backwaters, montañas y atracciones culturales para un itinerario equilibrado.",
      pt: "Combine praias, backwaters, montanhas e atrações culturais para um roteiro equilibrado."
    }
  ],
  "goa": [
    {
      en: "Rent a scooter only if you are comfortable riding and carry the required documents.",
      es: "Alquila una scooter solo si tienes experiencia y lleva los documentos necesarios.",
      pt: "Alugue uma scooter apenas se tiver experiência e leve os documentos necessários."
    },
    {
      en: "Use sunscreen and stay hydrated, especially during beach activities.",
      es: "Usa protector solar y mantente hidratado, especialmente durante las actividades en la playa.",
      pt: "Use protetor solar e mantenha-se hidratado, especialmente durante atividades na praia."
    },
    {
      en: "Respect local customs and dress appropriately when visiting churches and temples.",
      es: "Respeta las costumbres locales y viste apropiadamente al visitar iglesias y templos.",
      pt: "Respeite os costumes locais e vista-se adequadamente ao visitar igrejas e templos."
    },
    {
      en: "Explore beyond the main beaches to discover Old Goa, villages and quieter coastal areas.",
      es: "Explora más allá de las playas principales para descubrir Old Goa, pueblos y zonas costeras tranquilas.",
      pt: "Explore além das praias principais para descobrir Old Goa, vilas e áreas costeiras tranquilas."
    },
    {
      en: "Book accommodation early during Christmas, New Year and peak holiday periods.",
      es: "Reserva alojamiento con antelación durante Navidad, Año Nuevo y períodos vacacionales.",
      pt: "Reserve sua hospedagem com antecedência durante o Natal, Ano Novo e períodos de férias."
    }
  ],
  "meghalaya": [
    {
      en: "Carry rain protection because weather can change quickly.",
      es: "Lleva protección contra la lluvia porque el clima puede cambiar rápidamente.",
      pt: "Leve proteção contra a chuva, pois o clima pode mudar rapidamente."
    },
    {
      en: "Wear comfortable shoes for waterfalls, caves and nature trails.",
      es: "Usa calzado cómodo para cascadas, cuevas y senderos naturales.",
      pt: "Use calçados confortáveis para cachoeiras, cavernas e trilhas."
    },
    {
      en: "Allow extra time for winding mountain roads.",
      es: "Reserva tiempo adicional para las carreteras montañosas y sinuosas.",
      pt: "Reserve tempo extra para as estradas montanhosas e sinuosas."
    },
    {
      en: "Respect Khasi and other local community traditions.",
      es: "Respeta las tradiciones de las comunidades Khasi y locales.",
      pt: "Respeite as tradições Khasi e das comunidades locais."
    },
    {
      en: "Avoid visiting remote natural areas without proper local guidance.",
      es: "Evita visitar zonas naturales remotas sin orientación local adecuada.",
      pt: "Evite visitar áreas naturais remotas sem orientação local adequada."
    }
  ],
  "sikkim": [
    {
      en: "Carry warm layers because temperatures can change quickly.",
      es: "Lleva ropa de abrigo porque las temperaturas pueden cambiar rápidamente.",
      pt: "Leve roupas quentes, pois as temperaturas podem mudar rapidamente."
    },
    {
      en: "Keep valid identification and check permit requirements for restricted areas.",
      es: "Lleva una identificación válida y consulta los requisitos de permisos para zonas restringidas.",
      pt: "Leve documento de identificação válido e verifique os requisitos de autorização para áreas restritas."
    },
    {
      en: "Allow extra time for mountain roads and weather-related delays.",
      es: "Reserva tiempo adicional para las carreteras de montaña y posibles retrasos climáticos.",
      pt: "Reserve tempo extra para estradas de montanha e possíveis atrasos devido ao clima."
    },
    {
      en: "Dress respectfully when visiting monasteries and religious sites.",
      es: "Viste respetuosamente al visitar monasterios y lugares religiosos.",
      pt: "Vista-se respeitosamente ao visitar mosteiros e locais religiosos."
    },
    {
      en: "Stay hydrated and take enough rest when travelling to higher altitudes.",
      es: "Mantente hidratado y descansa lo suficiente al viajar a mayores altitudes.",
      pt: "Mantenha-se hidratado e descanse o suficiente ao viajar para altitudes maiores."
    }
  ],
  "bihar": [
    {
      en: "Dress respectfully when visiting Buddhist sites, temples and monasteries.",
      es: "Viste respetuosamente al visitar lugares budistas, templos y monasterios.",
      pt: "Vista-se respeitosamente ao visitar locais budistas, templos e mosteiros."
    },
    {
      en: "Carry comfortable footwear for walking around heritage and pilgrimage sites.",
      es: "Lleva calzado cómodo para caminar por lugares históricos y de peregrinación.",
      pt: "Leve calçados confortáveis para caminhar por locais históricos e de peregrinação."
    },
    {
      en: "Start sightseeing early, particularly during warmer months.",
      es: "Comienza las visitas temprano, especialmente durante los meses más cálidos.",
      pt: "Comece os passeios cedo, especialmente nos meses mais quentes."
    },
    {
      en: "Try local dishes such as litti chokha, sattu paratha and traditional sweets.",
      es: "Prueba platos locales como litti chokha, sattu paratha y dulces tradicionales.",
      pt: "Experimente pratos locais como litti chokha, sattu paratha e doces tradicionais."
    },
    {
      en: "Combine Bodh Gaya with Rajgir, Nalanda or Patna for a richer itinerary.",
      es: "Combina Bodh Gaya con Rajgir, Nalanda o Patna para un itinerario más completo.",
      pt: "Combine Bodh Gaya com Rajgir, Nalanda ou Patna para um roteiro mais completo."
    }
  ],
  "andaman-islands": [
    {
      en: "Check ferry schedules and weather conditions before travelling between islands.",
      es: "Consulta los horarios de los ferris y las condiciones meteorológicas antes de viajar entre islas.",
      pt: "Verifique os horários das balsas e as condições climáticas antes de viajar entre as ilhas."
    },
    {
      en: "Carry sunscreen, sunglasses, mosquito repellent and light clothing.",
      es: "Lleva protector solar, gafas de sol, repelente de insectos y ropa ligera.",
      pt: "Leve protetor solar, óculos de sol, repelente e roupas leves."
    },
    {
      en: "Follow all marine safety instructions during water activities.",
      es: "Sigue todas las instrucciones de seguridad durante las actividades acuáticas.",
      pt: "Siga todas as instruções de segurança durante atividades aquáticas."
    },
    {
      en: "Book ferries, resorts and diving activities in advance during peak season.",
      es: "Reserva ferris, resorts y actividades de buceo con antelación durante la temporada alta.",
      pt: "Reserve balsas, resorts e atividades de mergulho com antecedência na alta temporada."
    },
    {
      en: "Avoid touching coral or disturbing marine life while snorkelling or diving.",
      es: "Evita tocar los corales o molestar a la vida marina durante el snorkel o buceo.",
      pt: "Evite tocar nos corais ou perturbar a vida marinha durante snorkeling ou mergulho."
    }
  ],
  "tamil-nadu": [
    {
      en: "Dress modestly when visiting temples and religious sites.",
      es: "Viste modestamente al visitar templos y lugares religiosos.",
      pt: "Vista-se de forma discreta ao visitar templos e locais religiosos."
    },
    {
      en: "Carry comfortable footwear for temple complexes and heritage areas.",
      es: "Lleva calzado cómodo para complejos de templos y zonas históricas.",
      pt: "Leve calçados confortáveis para complexos de templos e áreas históricas."
    },
    {
      en: "Try local foods such as dosa, idli, pongal, sambar and Chettinad cuisine.",
      es: "Prueba platos como dosa, idli, pongal, sambar y cocina Chettinad.",
      pt: "Experimente pratos como dosa, idli, pongal, sambar e culinária Chettinad."
    },
    {
      en: "Start temple visits early to avoid heat and crowds.",
      es: "Visita los templos temprano para evitar el calor y las multitudes.",
      pt: "Visite os templos cedo para evitar calor e multidões."
    },
    {
      en: "Carry water and sun protection when exploring outdoor monuments.",
      es: "Lleva agua y protección solar al visitar monumentos al aire libre.",
      pt: "Leve água e proteção solar ao explorar monumentos ao ar livre."
    }
  ],
  "madhya-pradesh": [
    {
      en: "Start sightseeing early, especially when visiting forts and outdoor monuments.",
      es: "Comienza las visitas temprano, especialmente al visitar fuertes y monumentos al aire libre.",
      pt: "Comece os passeios cedo, especialmente ao visitar fortes e monumentos ao ar livre."
    },
    {
      en: "Carry comfortable shoes for heritage sites and temple complexes.",
      es: "Lleva calzado cómodo para lugares históricos y complejos de templos.",
      pt: "Leve calçados confortáveis para locais históricos e complexos de templos."
    },
    {
      en: "Try local dishes such as poha, bhutte ka kees, dal bafla and jalebi.",
      es: "Prueba platos como poha, bhutte ka kees, dal bafla y jalebi.",
      pt: "Experimente pratos como poha, bhutte ka kees, dal bafla e jalebi."
    },
    {
      en: "Combine nearby heritage attractions to reduce travel time.",
      es: "Combina atracciones históricas cercanas para reducir el tiempo de viaje.",
      pt: "Combine atrações históricas próximas para reduzir o tempo de viagem."
    },
    {
      en: "Carry water and sun protection during summer.",
      es: "Lleva agua y protección solar durante el verano.",
      pt: "Leve água e proteção solar durante o verão."
    }
  ],
  "west-bengal": [
    {
      en: "Carry an umbrella during the monsoon season.",
      es: "Lleva un paraguas durante la temporada de monzones.",
      pt: "Leve um guarda-chuva durante a temporada de monções."
    },
    {
      en: "Use public transport in Kolkata to avoid heavy traffic.",
      es: "Utiliza el transporte público en Kolkata para evitar el tráfico intenso.",
      pt: "Use transporte público em Kolkata para evitar o trânsito intenso."
    },
    {
      en: "Try Bengali sweets, fish dishes and traditional cuisine.",
      es: "Prueba los dulces bengalíes, platos de pescado y cocina tradicional.",
      pt: "Experimente doces bengalis, pratos de peixe e culinária tradicional."
    },
    {
      en: "Dress respectfully at temples and religious sites.",
      es: "Viste respetuosamente en templos y lugares religiosos.",
      pt: "Vista-se respeitosamente em temples e locais religiosos."
    },
    {
      en: "Explore beyond Kolkata to discover Darjeeling, Sundarbans and other regions.",
      es: "Explora más allá de Kolkata para descubrir Darjeeling, Sundarbans y otras regiones.",
      pt: "Explore além de Kolkata para conhecer Darjeeling, Sundarbans e outras regiões."
    }
  ],
  "chhattisgarh": [
    {
      en: "Carry comfortable shoes for waterfalls, caves and forest trails.",
      es: "Lleva calzado cómodo para cascadas, cuevas y senderos forestales.",
      pt: "Leve calçados confortáveis para cachoeiras, cavernas e trilhas florestais."
    },
    {
      en: "Hire local guides for remote tribal and nature destinations.",
      es: "Contrata guías locales para destinos naturales y zonas tribales remotas.",
      pt: "Contrate guias locais para destinos naturais e áreas tribais remotas."
    },
    {
      en: "Carry sufficient water when visiting outdoor attractions.",
      es: "Lleva suficiente agua al visitar atracciones al aire libre.",
      pt: "Leve água suficiente ao visitar atrações ao ar livre."
    },
    {
      en: "Respect tribal communities, traditions and photography guidelines.",
      es: "Respeta a las comunidades tribales, sus tradiciones y las normas de fotografía.",
      pt: "Respeite as comunidades tribais, suas tradições e regras de fotografia."
    },
    {
      en: "Check road conditions before travelling to remote areas.",
      es: "Consulta el estado de las carreteras antes de viajar a zonas remotas.",
      pt: "Verifique as condições das estradas antes de viajar para áreas remotas."
    }
  ],
  "uttar-pradesh": [
    {
      en: "Dress respectfully when visiting temples, mosques and other religious sites.",
      es: "Viste respetuosamente al visitar templos, mezquitas y otros lugares religiosos.",
      pt: "Vista-se respeitosamente ao visitar templos, mesquitas e outros locais religiosos."
    },
    {
      en: "Start sightseeing early to avoid heat and crowds at major attractions.",
      es: "Comienza las visitas temprano para evitar el calor y las multitudes.",
      pt: "Comece os passeios cedo para evitar calor e multidões."
    },
    {
      en: "Use authorised guides at major heritage monuments.",
      es: "Utiliza guías autorizados en los principales monumentos históricos.",
      pt: "Use guias autorizados nos principais monumentos históricos."
    },
    {
      en: "Try local specialties such as kebabs, chaat, peda and Awadhi cuisine.",
      es: "Prueba especialidades como kebabs, chaat, peda y cocina Awadhi.",
      pt: "Experimente especialidades como kebabs, chaat, peda e culinária Awadhi."
    },
    {
      en: "Keep extra time for traffic when travelling between major cities.",
      es: "Reserva tiempo adicional para el tráfico al viajar entre las principales ciudades.",
      pt: "Reserve tempo extra para o trânsito ao viajar entre as principais cidades."
    }
  ],
  "punjab": [
    {
      en: "Dress respectfully and cover your head when visiting the Golden Temple.",
      es: "Viste respetuosamente y cubre tu cabeza al visitar el Golden Temple.",
      pt: "Vista-se respeitosamente e cubra a cabeça ao visitar o Golden Temple."
    },
    {
      en: "Remove footwear and follow local customs at religious sites.",
      es: "Quítate los zapatos y sigue las costumbres locales en lugares religiosos.",
      pt: "Retire os calçados e siga os costumes locais em locais religiosos."
    },
    {
      en: "Try Punjabi dishes such as Amritsari kulcha, chole, lassi and sarson da saag.",
      es: "Prueba platos como Amritsari kulcha, chole, lassi y sarson da saag.",
      pt: "Experimente pratos como Amritsari kulcha, chole, lassi e sarson da saag."
    },
    {
      en: "Explore Amritsar's heritage areas early in the day.",
      es: "Explora las zonas históricas de Amritsar temprano.",
      pt: "Explore as áreas históricas de Amritsar pela manhã."
    },
    {
      en: "Keep your itinerary flexible during festivals and major celebrations.",
      es: "Mantén flexibilidad en tu itinerario durante festivals y celebraciones.",
      pt: "Mantenha flexibilidade no roteiro durante festivais e celebrações."
    }
  ],
  "gujarat": [
    {
      en: "Carry comfortable footwear for temples, heritage sites and stepwells.",
      es: "Lleva calzado cómodo para templos, lugares históricos y pozos escalonados.",
      pt: "Leve calçados confortáveis para templos, locais históricos e poços ornamentais."
    },
    {
      en: "Try Gujarati thali, dhokla, fafda, jalebi and thepla.",
      es: "Prueba el thali gujarati, dhokla, fafda, jalebi y thepla.",
      pt: "Experimente Gujarati thali, dhokla, fafda, jalebi e thepla."
    },
    {
      en: "Dress modestly when visiting temples and religious sites.",
      es: "Viste modestamente al visitar templos y lugares religiosos.",
      pt: "Vista-se de forma discreta ao visitar templos e locais religiosos."
    },
    {
      en: "Carry sun protection, particularly during warmer months.",
      es: "Lleva protección solar, especialmente durante los meses más cálidos.",
      pt: "Leve proteção solar, especialmente nos meses mais quentes."
    },
    {
      en: "Plan longer journeys carefully because Gujarat's major attractions are spread across the state.",
      es: "Planifica cuidadosamente los trayectos largos porque las principales atracciones están repartidas por el estado.",
      pt: "Planeje cuidadosamente viagens longas, pois as principais atrações estão espalhadas pelo estado."
    }
  ],
  "uttarakhand": [
    {
      en: "Carry layers because mountain temperatures can change quickly.",
      es: "Lleva varias capas de ropa porque las temperaturas de montaña pueden cambiar rápidamente.",
      pt: "Leve roupas em camadas, pois as temperaturas nas montanhas podem mudar rapidamente."
    },
    {
      en: "Wear sturdy shoes for trekking and uneven terrain.",
      es: "Usa calzado resistente para senderismo y terrenos irregulares.",
      pt: "Use calçados resistentes para trilhas e terrenos irregulares."
    },
    {
      en: "Check weather and road conditions before travelling to high-altitude areas.",
      es: "Consulta el clima y las carreteras antes de viajar a zonas de gran altitud.",
      pt: "Verifique o clima e as condições das estradas antes de viajar para áreas de alta altitude."
    },
    {
      en: "Respect local customs at temples and pilgrimage sites.",
      es: "Respeta las costumbres locales en templos y lugares de peregrinación.",
      pt: "Respeite os costumes locais em templos e locais de peregrinação."
    },
    {
      en: "Avoid littering and help protect the fragile Himalayan environment.",
      es: "Evita tirar basura y ayuda a proteger el frágil entorno del Himalaya.",
      pt: "Evite deixar lixo e ajude a proteger o frágil ambiente do Himalaia."
    }
  ],
  "odisha": [
    {
      en: "Dress respectfully when visiting temples.",
      es: "Viste respetuosamente al visitar templos.",
      pt: "Vista-se respeitosamente ao visitar templos."
    },
    {
      en: "Carry comfortable footwear for temple and heritage sightseeing.",
      es: "Lleva calzado cómodo para visitar templos y lugares históricos.",
      pt: "Leve calçados confortáveis para visitar templos e locais históricos."
    },
    {
      en: "Try local dishes such as dalma, pakhala, chhena poda and seafood.",
      es: "Prueba platos como dalma, pakhala, chhena poda y mariscos.",
      pt: "Experimente pratos como dalma, pakhala, chhena poda e frutos do mar."
    },
    {
      en: "Combine Bhubaneswar with Puri and Konark for a complete heritage itinerary.",
      es: "Combina Bhubaneswar con Puri y Konark para un itinerario histórico completo.",
      pt: "Combine Bhubaneswar com Puri e Konark para um roteiro histórico completo."
    },
    {
      en: "Carry sun protection and water during outdoor sightseeing.",
      es: "Lleva protección solar y agua durante las visitas al aire libre.",
      pt: "Leve proteção solar e água durante os passeios ao ar livre."
    }
  ],
  "assam": [
    {
      en: "Carry rain protection during the monsoon.",
      es: "Lleva protección contra la lluvia durante el monzón.",
      pt: "Leve proteção contra a chuva durante as monções."
    },
    {
      en: "Try authentic Assamese cuisine and local tea.",
      es: "Prueba la auténtica gastronomía asamesa y el té local.",
      pt: "Experimente a autêntica culinária assamesa e o chá local."
    },
    {
      en: "Respect customs at temples and cultural sites.",
      es: "Respeta las costumbres en templos y lugares culturales.",
      pt: "Respeite os costumes em templos e locais culturais."
    },
    {
      en: "Book wildlife safaris in advance during peak season.",
      es: "Reserva safaris de vida silvestre con antelación durante la temporada alta.",
      pt: "Reserve safáris com antecedência durante a alta temporada."
    },
    {
      en: "Allow extra time for road journeys between destinations.",
      es: "Reserva tiempo adicional para los viajes por carretera.",
      pt: "Reserve tempo extra para viagens rodoviárias entre destinos."
    }
  ],
  "ladakh": [
    {
      en: "Acclimatise for at least a little time before visiting higher-altitude areas.",
      es: "Aclimátate antes de visitar zonas de mayor altitud.",
      pt: "Faça aclimatação antes de visitar áreas de maior altitude."
    },
    {
      en: "Stay hydrated and avoid strenuous activity immediately after arrival.",
      es: "Mantente hidratado y evita actividades intensas inmediatamente después de llegar.",
      pt: "Mantenha-se hidratado e evite atividades intensas logo após a chegada."
    },
    {
      en: "Carry warm layers, sunglasses and strong sun protection.",
      es: "Lleva ropa abrigada, gafas de sol y buena protección solar.",
      pt: "Leve roupas quentes, óculos de sol e proteção solar adequada."
    },
    {
      en: "Check road conditions and weather before long mountain journeys.",
      es: "Consulta el estado de las carreteras y el clima antes de viajes largos.",
      pt: "Verifique as condições das estradas e o clima antes de longas viagens."
    },
    {
      en: "Respect monasteries, local traditions and the fragile high-altitude environment.",
      es: "Respeta los monasterios, las tradiciones locales y el frágil entorno de gran altitud.",
      pt: "Respeite mosteiros, tradições locais e o frágil ambiente de alta altitude."
    }
  ],
  "telangana": [
    {
      en: "Start sightseeing early to avoid the heat, especially around forts and monuments.",
      es: "Comienza las visitas temprano para evitar el calor, especialmente en fuertes y monumentos.",
      pt: "Comece os passeios cedo para evitar o calor, especialmente em fortes e monumentos."
    },
    {
      en: "Use the Hyderabad Metro and app-based taxis for convenient city travel.",
      es: "Utiliza el Metro de Hyderabad y taxis por aplicación para desplazarte cómodamente.",
      pt: "Use o metrô de Hyderabad e táxis por aplicativo para se deslocar com facilidade."
    },
    {
      en: "Try Hyderabadi biryani, haleem, mirchi ka salan and local sweets.",
      es: "Prueba el biryani de Hyderabad, haleem, mirchi ka salan y dulces locales.",
      pt: "Experimente biryani de Hyderabad, haleem, mirchi ka salan e doces locais."
    },
    {
      en: "Dress respectfully when visiting temples, mosques and historic religious sites.",
      es: "Viste respetuosamente al visitar templos, mezquitas y lugares religiosos históricos.",
      pt: "Vista-se respeitosamente ao visitar templos, mesquitas e locais religiosos históricos."
    },
    {
      en: "Keep extra time for Hyderabad traffic during peak hours.",
      es: "Reserva tiempo adicional por el tráfico de Hyderabad en horas punta.",
      pt: "Reserve tempo extra devido ao trânsito de Hyderabad nos horários de pico."
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
    if (stateTipsData[stateSlug]) {
      state.travelTips = stateTipsData[stateSlug];
      updatedStatesList.push(state);
      console.log(`Updated travelTips for state: ${stateSlug}`);
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
