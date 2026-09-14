export interface OutboundDestination {
  slug: string;
  title: { en: string; es: string; pt: string };
  tagline: { en: string; es: string; pt: string };
  region: string;
  image: string;
  gallery?: string[];
  description: { en: string; es: string; pt: string };
  overview?: { en: string; es: string; pt: string };
  history?: { en: string; es: string; pt: string };
  culture?: { en: string; es: string; pt: string };
  localFood?: { en: string; es: string; pt: string };
  bestTime: { en: string; es: string; pt: string };
  attractions?: Array<{
    name: { en: string; es: string; pt: string };
    image?: string;
    desc: { en: string; es: string; pt: string };
  }>;
  experiences?: Array<{
    title: { en: string; es: string; pt: string };
    desc?: { en: string; es: string; pt: string };
    image?: string;
  }>;
  signatureExperiences?: Array<{
    title: { en: string; es: string; pt: string };
    desc?: { en: string; es: string; pt: string };
    image?: string;
  }>;
  hotels?: Array<{
    name: string;
    rating?: string;
    image?: string;
    desc?: { en: string; es: string; pt: string };
  }>;
  thingsToDo?: Array<{ en: string; es: string; pt: string }>;
  suggestedItinerary?: { en: string; es: string; pt: string };
  travelTips?: Array<{ en: string; es: string; pt: string }>;
  faqs?: Array<{
    q: { en: string; es: string; pt: string };
    a: { en: string; es: string; pt: string };
  }>;
  seo?: {
    en?: { title: string; description: string; keywords: string };
    es?: { title: string; description: string; keywords: string };
    pt?: { title: string; description: string; keywords: string };
  };
}

export const outboundDestinations: OutboundDestination[] = [
  {
  "slug": "dubai",
  "title": {
    "en": "Dubai & UAE",
    "es": "Dubái y Emiratos",
    "pt": "Dubai e Emirados"
  },
  "tagline": {
    "en": "Futuristic Skylines, Desert Dunes & Ultra-Luxury Escapes",
    "es": "Horizontes Futuristas, Dunas del Desierto y Escapadas de Ultra Lujo",
    "pt": "Horizontes Futuristas, Dunas do Deserto e Refúgios de Ultra Luxo"
  },
  "region": "Middle East (Dubai & UAE)",
  "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
  "gallery": [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    "https://images.unsplash.com/photo-1546412414-8035e1786b9b?q=80&w=1200",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200",
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1200",
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200",
    "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1200",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    "https://images.unsplash.com/photo-1546412414-8035e1786b9b?q=80&w=1200"
  ],
  "description": {
    "en": "Experience the pinnacle of international luxury travel in Dubai—from iconic ultra-tall skyscrapers and private desert dune safaris to opulent marina yacht cruises and world-class shopping.",
    "es": "Disfrute del máximo lujo internacional en Dubái, desde sus icónicos rascacielos hasta safaris privados en el desierto, cruceros en yate y compras de clase mundial.",
    "pt": "Viva o auge do luxo internacional em Dubai—dos icônicos arranha-céus a safáris privados no deserto, cruzeiros de iate e compras de nível mundial."
  },
  "overview": {
    "en": "Dubai represents a glamorous fusion of visionary architecture, golden Arabian desert landscapes, ultra-luxury hospitality, and rich Bedouin heritage. Rising from the sands of the Arabian Peninsula, Dubai has established itself as one of the world's most dynamic global destinations. From standing atop the world's tallest building to embarking on private desert safaris under starry skies, Dubai offers unforgettable bespoke travel experiences.",
    "es": "Dubái representa una fusión glamurosa de arquitectura visionaria, paisajes dorados del desierto arábigo, hospitalidad de ultra lujo y un rico patrimonio beduino. Surgiendo de las arenas de la Península Arábiga, Dubái se ha consolidado como uno de los destinos globales más dinámicos del mundo. Desde la cima del edificio más alto del mundo hasta safaris privados por el desierto, Dubái ofrece experiencias inolvidables a medida.",
    "pt": "Dubai representa uma fusão glamorosa de arquitetura visionária, paisagens douradas do deserto arábico, hospitalidade de ultra luxo e um rico patrimônio beduíno. Emergindo das areias da Península Arábica, Dubai consolidou-se como um dos destinos globais mais dinâmicos do mundo. Da vista do topo do edifício mais alto do mundo a safáris privados no deserto, Dubai oferece experiências de viagem inesquecíveis sob medida."
  },
  "history": {
    "en": "Once a tranquil fishing and pearl-diving village along Dubai Creek, Dubai transformed dramatically over the 20th century into a global hub of trade, innovation, and architecture under the leadership of the Al Maktoum royal family. Nearby Abu Dhabi, the federal capital, preserves majestic Islamic architecture such as the Sheikh Zayed Grand Mosque and cultural landmarks including Louvre Abu Dhabi.",
    "es": "Antaño un tranquilo pueblo pesquero y recolector de perlas a lo largo de Dubai Creek, Dubái se transformó dramáticamente a lo largo del siglo XX en un centro global de comercio e innovación bajo la dinastía Al Maktoum. La cercana Abu Dabi, la capital federal, conserva una majestuosa arquitectura islámica como la Gran Mezquita Sheikh Zayed y el Louvre Abu Dabi.",
    "pt": "Antigamente um tranquilo vilarejo de pesca e coleta de pérolas ao longo do Dubai Creek, Dubai transformou-se dramaticamente ao longo do século XX em um centro global de comércio e inovação sob a liderança da família real Al Maktoum. A vizinha Abu Dhabi, capital federal, preserva uma majestosa arquitetura islâmica como a Grande Mesquita Sheikh Zayed e o Louvre Abu Dhabi."
  },
  "culture": {
    "en": "Emirati culture is rooted in Islamic traditions, warm Arabian hospitality, falconry, camel racing, and Bedouin customs. Visitors can explore traditional spice and gold souks along Dubai Creek, sample aromatic Arabic coffee (Gahwa) with dates, and experience the harmonious blend of traditional heritage and cutting-edge cosmopolitan lifestyle.",
    "es": "La cultura emiratí se basa en las tradiciones islámicas, la cálida hospitalidad arábiga, la cetrería, las carreras de camellos y las costumbres beduinas. Los visitantes pueden explorar los zocos tradicionales de especias y oro en Dubai Creek, probar el aromático café arábigo (Gahwa) con dátiles y disfrutar de la armoniosa mezcla de patrimonio y estilo de vida cosmopolita.",
    "pt": "A cultura emiratense está enraizada nas tradições islâmicas, na calorosa hospitalidade arábica, na falcoaria, nas corridas de camelos e nos costumes beduínos. Os visitantes podem explorar os zocos tradicionais de especiarias e ouro no Dubai Creek, provar o aromático café arábico (Gahwa) com tâmaras e vivenciar a mistura harmoniosa de patrimônio e estilo cosmopolita."
  },
  "localFood": {
    "en": "Dubai's culinary scene spans traditional Emirati specialties to Michelin-starred dining. Signature dishes include Machboos (spiced meat with fragrant rice), Luqaimat (sweet golden dumplings), fresh seafood, Shawarma, and Karak tea. Luxury dining options include underwater seafood at Ossiano and panoramic dining atop Burj Khalifa at At.mosphere.",
    "es": "La escena gastronómica de Dubái abarca desde especialidades tradicionales emiratíes hasta restaurantes con estrellas Michelin. Entre los platos representativos destacan el Machboos (carne especiada con arroz aromático), Luqaimat (buñuelos dulces), mariscos frescos, Shawarma y té Karak. El lujo gastronómico incluye cenar bajo el agua en Ossiano o con vistas espectaculares en At.mosphere en el Burj Khalifa.",
    "pt": "A cena gastronômica de Dubai abrange desde especialidades tradicionais emiratenses até restaurantes com estrelas Michelin. Pratos emblemáticos incluem Machboos (carne temperada com arroz aromático), Luqaimat (bolinhos doces), frutos do mar frescos, Shawarma e chá Karak. Opções de jantar de luxo incluem jantar submarino no Ossiano e refeições panorâmicas no topo do Burj Khalifa no At.mosphere."
  },
  "bestTime": {
    "en": "November to March",
    "es": "De noviembre a marzo",
    "pt": "De novembro a março"
  },
  "attractions": [
    {
      "name": {
        "en": "Burj Khalifa & At The Top",
        "es": "Burj Khalifa y Mirador At The Top",
        "pt": "Burj Khalifa e Mirante At The Top"
      },
      "image": "https://images.unsplash.com/photo-1546412414-8035e1786b9b?q=80&w=800",
      "desc": {
        "en": "The world's tallest building offering breathtaking 360-degree panoramas over the Arabian Gulf and city skyline.",
        "es": "El edificio más alto del mundo con panorámicas espectaculares del Golfo Arábigo y la ciudad.",
        "pt": "O edifício mais alto do mundo com vistas panorâmicas espetaculares de 360 graus."
      }
    },
    {
      "name": {
        "en": "Museum of the Future",
        "es": "Museo del Futuro",
        "pt": "Museu do Futuro"
      },
      "image": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800",
      "desc": {
        "en": "An architectural marvel featuring Arabic calligraphy and immersive exhibits exploring future science and technology.",
        "es": "Una maravilla arquitectónica con caligrafía árabe y exposiciones inmersivas sobre ciencia y tecnología futurista.",
        "pt": "Uma maravilha arquitetônica com caligrafia árabe e exposições imersivas sobre ciência e tecnologia."
      }
    },
    {
      "name": {
        "en": "Palm Jumeirah & Atlantis",
        "es": "Palm Jumeirah y Atlantis",
        "pt": "Palm Jumeirah e Atlantis"
      },
      "image": "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800",
      "desc": {
        "en": "World-famous man-made palm island featuring luxury beach resorts, Aquaventure waterpark, and fine dining.",
        "es": "La famosa isla artificial en forma de palmera con resorts de playa de lujo, parques acuáticos y restaurantes de autor.",
        "pt": "Famosa ilha artificial em forma de palmeira com resorts de praia de luxo e alta gastronomia."
      }
    },
    {
      "name": {
        "en": "Dubai Desert Conservation Reserve",
        "es": "Reserva de Conservación del Desierto de Dubái",
        "pt": "Reserva de Conservação do Deserto de Dubai"
      },
      "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800",
      "desc": {
        "en": "Pristine golden dunes inhabited by Arabian oryx and gazelles, perfect for private desert safaris.",
        "es": "Prístinas dunas doradas habitadas por ónices arábigos y gacelas, ideal para safaris privados en el desierto.",
        "pt": "Prístinas dunas douradas habitadas por órixes arábicos e gazelas, perfeito para safáris privados no deserto."
      }
    },
    {
      "name": {
        "en": "Sheikh Zayed Grand Mosque (Abu Dhabi)",
        "es": "Gran Mezquita Sheikh Zayed (Abu Dabi)",
        "pt": "Grande Mesquita Sheikh Zayed (Abu Dhabi)"
      },
      "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=800",
      "desc": {
        "en": "A monumental masterpiece of white marble, crystal chandeliers, and intricate Islamic art in Abu Dhabi.",
        "es": "Una obra maestra monumental de mármol blanco, arañas de cristal y arte islámico intrincado en Abu Dabi.",
        "pt": "Uma obra-prima monumental de mármore branco, lustres de cristal e arte islâmica em Abu Dhabi."
      }
    },
    {
      "name": {
        "en": "Dubai Creek & Historic Al Fahidi",
        "es": "Dubai Creek y Barrio Histórico Al Fahidi",
        "pt": "Dubai Creek e Bairro Histórico Al Fahidi"
      },
      "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
      "desc": {
        "en": "Historic district with traditional wind-tower architecture, gold and spice souks, and wooden abra boat rides.",
        "es": "Distrito histórico con arquitectura tradicional, zocos de oro y especias y paseos en embarcaciones abra de madera.",
        "pt": "Distrito histórico com arquitetura tradicional, zocos de ouro e especiarias e passeios de barco abra de madeira."
      }
    }
  ],
  "signatureExperiences": [
    {
      "title": {
        "en": "Private Desert Dune Safari & Royal Camp",
        "es": "Safari Privado por las Dunas y Campamento Real",
        "pt": "Safári Privado nas Dunas e Acampamento Real"
      },
      "desc": {
        "en": "Thrill in 4x4 dune bashing followed by sunset falconry, camel riding, and a gourmet candlelight dinner.",
        "es": "Disfrute de un recorrido en 4x4 por las dunas, cetrería al atardecer, paseo en camello y una cena gourmet a la luz de las velas.",
        "pt": "Desfrute de um passeio 4x4 nas dunas, falcoaria ao pôr do sol, passeio de camelo e jantar gourmet à luz de velas."
      },
      "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800"
    },
    {
      "title": {
        "en": "Luxury Yacht Charter along Dubai Marina",
        "es": "Alquiler de Yate de Lujo por la Marina de Dubái",
        "pt": "Aluguel de Iate de Luxo pela Marina de Dubai"
      },
      "desc": {
        "en": "Cruise past Ain Dubai, Palm Jumeirah, and Burj Al Arab aboard a private motor yacht with personal crew.",
        "es": "Navegue frente a Ain Dubái, Palm Jumeirah y Burj Al Arab a bordo de un yate a motor privado con tripulación.",
        "pt": "Navegue em frente ao Ain Dubai, Palm Jumeirah e Burj Al Arab a bordo de um iate privativo com tripulação."
      },
      "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
    },
    {
      "title": {
        "en": "Helidubai Panoramic Helicopter Flight",
        "es": "Vuelo Panorámico en Helicóptero Helidubai",
        "pt": "Voo Panorâmico de Helicóptero Helidubai"
      },
      "desc": {
        "en": "Soar over Palm Jumeirah, The World Islands, Burj Khalifa, and the coastline for unforgettable aerial photography.",
        "es": "Vuele sobre Palm Jumeirah, The World Islands, Burj Khalifa y la costa para capturar vistas aéreas espectaculares.",
        "pt": "Voe sobre Palm Jumeirah, The World Islands, Burj Khalifa e a costa para fotos aéreas espetaculares."
      },
      "image": "https://images.unsplash.com/photo-1546412414-8035e1786b9b?q=80&w=800"
    },
    {
      "title": {
        "en": "Fine Dining at At.mosphere Burj Khalifa",
        "es": "Cena de Alta Cocina en At.mosphere Burj Khalifa",
        "pt": "Jantar de Alta Gastronomia no At.mosphere Burj Khalifa"
      },
      "desc": {
        "en": "Indulge in Michelin-level gastronomy on the 122nd floor overlooking the glowing city lights.",
        "es": "Disfrute de gastronomía de nivel Michelin en la planta 122 con vistas deslumbrantes a la ciudad iluminada.",
        "pt": "Desfrute de gastronomia de nível Michelin no 122º andar com vistas deslumbrantes para as luzes da cidade."
      },
      "image": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800"
    },
    {
      "title": {
        "en": "Old Dubai Abra Ride & Gold/Spice Souk Exploration",
        "es": "Paseo en Abra y Exploración de Zocos de Oro y Especias",
        "pt": "Passeio de Abra e Exploração dos Zocos de Ouro e Especiarias"
      },
      "desc": {
        "en": "Cross Dubai Creek on a traditional wooden boat and bargain for aromatic saffron, perfumes, and fine gold.",
        "es": "Cruce Dubai Creek en un barco tradicional de madera y descubra azafrán aromático, perfumes y joyas de oro puro.",
        "pt": "Cruze o Dubai Creek em um barco tradicional de madeira e descubra açafrão aromático, perfumes e joias de ouro fino."
      },
      "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
    },
    {
      "title": {
        "en": "Louvre Abu Dhabi & Grand Mosque Private Day Tour",
        "es": "Excursión Privada al Louvre Abu Dabi y Gran Mezquita",
        "pt": "Excursão Privativa ao Louvre Abu Dhabi e Grande Mesquita"
      },
      "desc": {
        "en": "Discover world masterpieces under Jean Nouvel's rain-of-light dome followed by the majestic white marble mosque.",
        "es": "Descubra obras maestras universales bajo la cúpula del Louvre y visite la majestuosa mezquita de mármol blanco.",
        "pt": "Descubra obras-primas mundiais sob a cúpula do Louvre e visite a majestosa mesquita de mármore branco."
      },
      "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=800"
    }
  ],
  "hotels": [
    {
      "name": "Burj Al Arab Jumeirah",
      "rating": "Luxury 7-Star Hotel",
      "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
      "desc": {
        "en": "The world's iconic sail-shaped hotel featuring duplex suites, private butler service, underwater dining, and helipad.",
        "es": "El icónico hotel con forma de vela que ofrece suites dúplex, servicio de mayordomo privado, restaurante submarino y helipuerto.",
        "pt": "O icônico hotel em forma de vela oferecendo suítes duplex, serviço de mordomo privativo, restaurante submarino e heliponto."
      }
    },
    {
      "name": "Atlantis The Royal",
      "rating": "Luxury 5-Star Resort",
      "image": "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800",
      "desc": {
        "en": "An ultra-luxurious architectural masterpiece on Palm Jumeirah with infinity sky pools, celebrity chef restaurants, and private beach.",
        "es": "Una obra maestra arquitectónica de ultra lujo en Palm Jumeirah con piscinas infinitas elevadas y restaurantes de chefs célebres.",
        "pt": "Uma obra-prima arquitetônica de ultra luxo em Palm Jumeirah com piscinas infinitas elevadas e restaurantes de chefs renomados."
      }
    }
  ],
  "thingsToDo": [
    {
      "en": "Burj Khalifa At The Top Lounge Access",
      "es": "Acceso al Mirador Lounge del Burj Khalifa",
      "pt": "Acesso ao Mirante Lounge do Burj Khalifa"
    },
    {
      "en": "Private Desert Safari & Falconry Experience",
      "es": "Safari Privado por el Desierto y Experiencia de Cetrería",
      "pt": "Safári Privado no Deserto e Experiência de Falcoaria"
    },
    {
      "en": "Private Yacht Cruise along Dubai Marina",
      "es": "Crucero en Yate Privado por la Marina de Dubái",
      "pt": "Cruzeiro de Iate Privado pela Marina de Dubai"
    },
    {
      "en": "Museum of the Future Interactive Tour",
      "es": "Tour Interactivo en el Museo del Futuro",
      "pt": "Tour Interativo no Museu do Futuro"
    },
    {
      "en": "Louvre Abu Dhabi & Grand Mosque Day Trip",
      "es": "Excursión al Louvre Abu Dabi y Gran Mezquita",
      "pt": "Excursão ao Louvre Abu Dhabi e Grande Mesquita"
    },
    {
      "en": "Gold & Spice Souk Shopping in Old Dubai",
      "es": "Compras en los Zocos de Oro y Especias del Antiguo Dubái",
      "pt": "Compras nos Zocos de Ouro e Especiarias do Antigo Dubai"
    }
  ],
  "suggestedItinerary": {
    "en": "7 Days / 6 Nights: Day 1 Arrival & Marina Sunset Yacht Cruise. Day 2 Historic Al Fahidi, Gold Souk & Burj Khalifa At The Top. Day 3 Museum of the Future & Shopping at Dubai Mall. Day 4 Private Desert Conservation Reserve Safari & Sunset Dinner. Day 5 Abu Dhabi Sheikh Zayed Grand Mosque & Louvre Abu Dhabi. Day 6 Palm Jumeirah & Atlantis Beach Club Relaxation. Day 7 Leisure Breakfast & Airport Transfer.",
    "es": "7 Días / 6 Noches: Día 1 Llegada y crucero al atardecer en yate. Día 2 Barrio Al Fahidi, Zoco del Oro y Burj Khalifa. Día 3 Museo del Futuro y Dubai Mall. Día 4 Safari privado en la Reserva del Desierto con cena. Día 5 Gran Mezquita Sheikh Zayed y Louvre Abu Dabi. Día 6 Palm Jumeirah y Atlantis. Día 7 Desayuno y traslado al aeropuerto.",
    "pt": "7 Dias / 6 Noites: Dia 1 Chegada e cruzeiro ao pôr do sol em iate. Dia 2 Bairro Al Fahidi, Zoco do Ouro e Burj Khalifa. Dia 3 Museu do Futuro e Dubai Mall. Dia 4 Safári privado na Reserva do Deserto com jantar. Dia 5 Grande Mesquita Sheikh Zayed e Louvre Abu Dhabi. Dia 6 Palm Jumeirah e Atlantis. Dia 7 Café da manhã e traslado ao aeroporto."
  },
  "travelTips": [
    {
      "en": "Dress modestly when visiting cultural sites and Sheikh Zayed Grand Mosque in Abu Dhabi.",
      "es": "Viste con modestia al visitar lugares culturales y la Gran Mezquita Sheikh Zayed en Abu Dabi.",
      "pt": "Vista-se de forma modesta ao visitar locais culturais e a Grande Mesquita Sheikh Zayed em Abu Dhabi."
    },
    {
      "en": "November to March offers ideal sunny weather with pleasant temperatures between 20°C and 28°C.",
      "es": "De noviembre a marzo se disfruta de un clima soleado ideal con temperaturas de 20°C a 28°C.",
      "pt": "De novembro a março oferece clima ensolarado ideal com temperaturas de 20°C a 28°C."
    },
    {
      "en": "Taxis and private chauffeur services are clean, efficient, and readily available across Dubai and Abu Dhabi.",
      "es": "Los taxis y chóferes privados son limpios, eficientes y están ampliamente disponibles.",
      "pt": "Taxis e motoristas particulares são limpos, eficientes e amplamente disponíveis."
    },
    {
      "en": "Advance booking is recommended for Burj Khalifa At The Top, Museum of the Future, and fine dining.",
      "es": "Se recomienda reservar con antelación para el Burj Khalifa, el Museo del Futuro y restaurantes de lujo.",
      "pt": "Recomenda-se reservar com antecedência para o Burj Khalifa, o Museu do Futuro e alta gastronomia."
    },
    {
      "en": "Alcohol is served in licensed hotel restaurants, bars, and beach clubs across Dubai and Abu Dhabi.",
      "es": "Se sirve alcohol en restaurantes de hoteles, bares y clubes de playa con licencia.",
      "pt": "Álcool é servido em restaurantes de hotéis, bares e clubes de praia licenciados."
    }
  ],
  "faqs": [
    {
      "q": {
        "en": "What is the best time to visit Dubai?",
        "es": "¿Cuál es la mejor época para visitar Dubái?",
        "pt": "Qual é a melhor época para visitar Dubai?"
      },
      "a": {
        "en": "November to March is the best period, offering warm sunny days and comfortable evenings perfect for outdoor sightseeing.",
        "es": "De noviembre a marzo es el mejor período, ofreciendo días cálidos y soleados con noches agradables.",
        "pt": "De novembro a março é o melhor período, oferecendo dias ensolarados e noites agradáveis."
      }
    },
    {
      "q": {
        "en": "Is Dubai safe for luxury travellers?",
        "es": "¿Es Dubái seguro para viajeros de lujo?",
        "pt": "Dubai é seguro para viajantes de luxo?"
      },
      "a": {
        "en": "Dubai is consistently ranked as one of the safest cities in the world with virtually zero crime and exceptional infrastructure.",
        "es": "Dubái está catalogada como una de las ciudades más seguras del mundo con prácticamente cero delincuencia.",
        "pt": "Dubai é constantemente classificada como uma das cidades mais seguras do mundo, com índice de criminalidade nulo."
      }
    },
    {
      "q": {
        "en": "How many days are ideal for a Dubai trip?",
        "es": "¿Cuántos días son ideales para un viaje a Dubái?",
        "pt": "Quantos dias são ideais para uma viagem a Dubai?"
      },
      "a": {
        "en": "5 to 7 days are ideal to explore Dubai's highlights, desert safaris, luxury shopping, and a day trip to Abu Dhabi.",
        "es": "De 5 a 7 días son ideales para explorar Dubái, hacer un safari por el desierto y visitar Abu Dabi.",
        "pt": "De 5 a 7 dias são ideais para explorar os destaques de Dubai, fazer um safári no deserto e visitar Abu Dhabi."
      }
    },
    {
      "q": {
        "en": "Do I need a visa to visit Dubai?",
        "es": "¿Necesito visa para visitar Dubái?",
        "pt": "Preciso de visto para visitar Dubai?"
      },
      "a": {
        "en": "Many nationalities receive a 30-day or 90-day visa-on-arrival, while others can easily apply for an e-visa online.",
        "es": "Muchas nacionalidades reciben visa a la llegada de 30 o 90 días, mientras que otras pueden solicitar e-visa fácilmente.",
        "pt": "Muitas nacionalidades recebem visto na chegada de 30 ou 90 dias, e outras podem solicitar um e-visa facilmente."
      }
    },
    {
      "q": {
        "en": "Can Dubai be combined with Abu Dhabi?",
        "es": "¿Se puede combinar Dubái con Abu Dabi?",
        "pt": "É possível combinar Dubai com Abu Dhabi?"
      },
      "a": {
        "en": "Yes! Abu Dhabi is just 90 minutes away by road and makes a fantastic day trip or multi-day extension.",
        "es": "¡Sí! Abu Dabi está a solo 90 minutos por carretera y es perfecta para una excursión de un día o estancia combinada.",
        "pt": "Sim! Abu Dhabi fica a apenas 90 minutos de carro e é perfeita para um passeio de um dia ou extensão."
      }
    }
  ],
  "seo": {
    "en": {
      "title": "Dubai Luxury Travel | Burj Khalifa, Desert Safaris & Beach Resorts",
      "description": "Discover Dubai through luxury journeys featuring Burj Khalifa, private desert dune safaris, Palm Jumeirah resorts, and Abu Dhabi grand tours.",
      "keywords": "Dubai luxury travel, Dubai tour package, Burj Khalifa, Palm Jumeirah, Dubai desert safari, Louvre Abu Dhabi"
    },
    "es": {
      "title": "Viajes de Lujo a Dubái | Burj Khalifa, Safaris y Resorts de Playa",
      "description": "Descubre Dubái con viajes de lujo que incluyen Burj Khalifa, safaris privados por el desierto, resorts en Palm Jumeirah y Abu Dabi.",
      "keywords": "viajes de lujo a Dubai, paquete turistico Dubai, Burj Khalifa, Palm Jumeirah, safari desierto Dubai"
    },
    "pt": {
      "title": "Viagens de Luxo para Dubai | Burj Khalifa, Safáris e Resorts de Praia",
      "description": "Descubra Dubai em viagens de luxo com Burj Khalifa, safáris privados no deserto, resorts em Palm Jumeirah e passeios em Abu Dhabi.",
      "keywords": "viagens de luxo para Dubai, pacote turistico Dubai, Burj Khalifa, Palm Jumeirah, safári no deserto Dubai"
    }
  }
},
  {
  "slug": "bali",
  "title": {
    "en": "Bali",
    "es": "Bali",
    "pt": "Bali"
  },
  "tagline": {
    "en": "Sacred Temples, Emerald Rice Terraces & Beachfront Luxury",
    "es": "Templos Sagrados, Terrazas de Arroz Esmeralda y Lujo Playero",
    "pt": "Templos Sagrados, Terraços de Arroz Esmeralda e Luxo à Beira-Mar"
  },
  "region": "Southeast Asia (Bali, Indonesia)",
  "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600",
  "gallery": [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200",
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200",
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1200",
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200"
  ],
  "description": {
    "en": "Immerse yourself in Bali's emerald rice terraces, cliffside Uluwatu sunsets, luxury spa sanctuaries, sacred temples, and pristine island beaches.",
    "es": "Sumérjase en las terrazas de arroz esmeralda de Bali, atardeceres en acantilados de Uluwatu, santuarios de spa de lujo, templos sagrados y playas prístinas.",
    "pt": "Mergulhe nos terraços de arroz de Bali, pôr-do-sol nos penhascos de Uluwatu, santuários de spa de luxo, templos sagrados e praias prístinas."
  },
  "overview": {
    "en": "Bali, the Island of the Gods, is an enchanting Indonesian destination renowned for its spiritual energy, lush tropical landscapes, artistic heritage, and world-class luxury resorts. From the cultural heartland of Ubud surrounded by emerald river valleys and ancient rice terraces to the dramatic limestone sea cliffs of Uluwatu and pristine beaches of Nusa Penida, Bali offers a perfect harmony of relaxation, wellness, adventure, and cultural immersion.",
    "es": "Bali, la Isla de los Dioses, es un destino indonesio fascinante conocido por su energía espiritual, exuberantes paisajes tropicales, patrimonio artístico y resorts de ultra lujo. Desde el corazón cultural de Ubud rodeado de valles esmeralda y terrazas de arroz antiguas hasta los espectaculares acantilados marinos de Uluwatu y las playas de Nusa Penida, Bali ofrece una perfecta armonía de relajación, bienestar y cultura.",
    "pt": "Bali, a Ilha dos Deuses, é um destino indonésio encantador famoso por sua energia espiritual, paisagens tropicais exuberantes, patrimônio artístico e resorts de ultra luxo. Do coração cultural de Ubud cercado por vales esmeralda e terraços de arroz antigos às dramáticas falésias marítimas de Uluwatu e praias de Nusa Penida, Bali oferece uma perfeita harmonia de relaxamento, bem-estar e cultura."
  },
  "history": {
    "en": "Bali's unique heritage evolved through centuries of Balinese Hinduism, influenced by ancient Javanese Majapahit royalty who migrated to the island in the 16th century. Royal dynasties built majestic water palaces and temple complexes like Besakih and Tanah Lot. Subak, Bali's traditional cooperative rice irrigation system dating back to the 9th century, is designated a UNESCO World Heritage Site.",
    "es": "El patrimonio de Bali evolucionó durante siglos a través del budismo y el hinduismo balinés, influenciado por los reyes Majapahit de Java en el siglo XVI. Las dinastías reales construyeron palacios de agua y templos como Besakih y Tanah Lot. El sistema de riego tradicional Subak, declarado Patrimonio Mundial por la UNESCO, data del siglo IX.",
    "pt": "O patrimônio único de Bali evoluiu ao longo de séculos através do hinduismo balinês, influenciado pelos reis Majapahit de Java no século XVI. Dinastias reais construíram palácios de água e templos como Besakih e Tanah Lot. O sistema de irrigação tradicional Subak é reconhecido como Patrimônio Mundial pela UNESCO."
  },
  "culture": {
    "en": "Balinese culture is guided by Tri Hita Karana—the philosophy of harmony between humans, nature, and the divine. Daily life is adorned with fragrant flower offerings (Canang Sari), elaborate temple festivals, traditional Legong and Barong dances, woodcarving, silversmithing, and deep spiritual reverence. Visitors are welcomed with genuine warmth and serene hospitality.",
    "es": "La cultura balinesa se guía por el Tri Hita Karana, la filosofía de armonía entre los humanos, la naturaleza y lo divino. La vida cotidiana se llena de ofrendas florales (Canang Sari), festivales en templos, danzas tradicionales Legong y Barong, escultura en madera y orfebrería. Los visitantes son recibidos con cálida hospitalidad.",
    "pt": "A cultura balinesa é guiada pelo Tri Hita Karana—a filosofia de harmonia entre seres humanos, natureza e o divino. O cotidiano é repleto de oferendas florais (Canang Sari), festivais em templos, danças tradicionais Legong e Barong e artesanato. Os visitantes são acolhidos com genuína hospitalidade."
  },
  "localFood": {
    "en": "Balinese cuisine is fresh, vibrant, and rich in fragrant spices. Famous dishes include Babi Guling (spiced roasted pig), Bebek Betutu (slow-cooked duck in banana leaf), Nasi Campur, Lawar, and fiery Sambal Matah. Ubud is celebrated globally for organic farm-to-table dining, wellness vegan cafes, and world-class fine dining restaurants such as Locavore and Cascades.",
    "es": "La gastronomía balinesa es fresca, vibrante y rica en especias aromáticas. Entre sus platos más famosos destacan el Babi Guling (cerdo asado especiado), Bebek Betutu (pato cocinado a fuego lento), Nasi Campur y la salsa picante Sambal Matah. Ubud destaca globalmente por sus restaurantes orgánicos del campo a la mesa y restaurantes de autor.",
    "pt": "A culinária balinesa é fresca, vibrante e rica em especiarias aromáticas. Pratos emblemáticos incluem Babi Guling (porco assado temperado), Bebek Betutu (pato cozido lentamente), Nasi Campur e o picante Sambal Matah. Ubud é mundialmente famosa por restaurantes orgânicos da fazenda à mesa e alta gastronomia."
  },
  "bestTime": {
    "en": "April to October",
    "es": "De abril a octubre",
    "pt": "De abril a outubro"
  },
  "attractions": [
    {
      "name": {
        "en": "Ubud Tegallalang Rice Terraces & Monkey Forest",
        "es": "Terrazas de Arroz de Tegallalang y Bosque de Monos en Ubud",
        "pt": "Terraços de Arroz de Tegallalang e Floresta dos Macacos em Ubud"
      },
      "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800",
      "desc": {
        "en": "Iconic emerald stepped rice fields and ancient sacred jungle monkey sanctuary in Ubud.",
        "es": "Icónicas terrazas de arroz verdes escalonadas y santuario sagrado de monos en la jungla de Ubud.",
        "pt": "Icônicos terraços de arroz verdes em degraus e santuário sagrado de macacos na selva de Ubud."
      }
    },
    {
      "name": {
        "en": "Uluwatu Cliff Temple & Kecak Dance",
        "es": "Templo del Acantilado de Uluwatu y Danza Kecak",
        "pt": "Templo do Penhasco de Uluwatu e Dança Kecak"
      },
      "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800",
      "desc": {
        "en": "Sacred sea temple perched on a 70-meter cliff featuring dramatic sunset Kecak fire dance performances.",
        "es": "Templo marino sagrado sobre un acantilado de 70 metros con espectáculo de danza de fuego Kecak al atardecer.",
        "pt": "Templo sagrado à beira-mar sobre um penhasco de 70 metros com espetáculo de dança Kecak ao pôr do sol."
      }
    },
    {
      "name": {
        "en": "Tanah Lot Temple",
        "es": "Templo de Tanah Lot",
        "pt": "Templo de Tanah Lot"
      },
      "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
      "desc": {
        "en": "Ancient offshore rock temple surrounded by crashing ocean waves and golden sunset light.",
        "es": "Antiguo templo rocoso mar adentro rodeado por las olas del océano y una dorada luz del atardecer.",
        "pt": "Antigo templo rochoso no mar cercado por ondas do oceano e pela luz dourada do pôr do sol."
      }
    },
    {
      "name": {
        "en": "Kelingking Beach & Nusa Penida",
        "es": "Playa Kelingking y Nusa Penida",
        "pt": "Praia Kelingking e Nusa Penida"
      },
      "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800",
      "desc": {
        "en": "Spectacular T-Rex shaped cliff overlooks, turquoise ocean bays, and manta ray snorkeling sanctuaries.",
        "es": "Espectacular acantilado con forma de T-Rex, bahías turquesas y santuario de snorkel con mantarrayas.",
        "pt": "Espectacular penhasco em forma de T-Rex, baías azul-turquesa e santuário de mergulho com arraias manta."
      }
    },
    {
      "name": {
        "en": "Mount Batur Volcano",
        "es": "Volcán Monte Batur",
        "pt": "Vulcão Monte Batur"
      },
      "image": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=800",
      "desc": {
        "en": "Active volcano offering iconic sunrise trekking tours overlooking Lake Batur and surrounding highlands.",
        "es": "Volcán activo con excursiones de senderismo al amanecer contemplando el lago Batur y las tierras altas.",
        "pt": "Vulcão ativo com trilhas ao amanhecer contemplando o lago Batur e as montanhas ao redor."
      }
    },
    {
      "name": {
        "en": "Tirta Empul Sacred Water Temple",
        "es": "Templo Sagrado del Agua Tirta Empul",
        "pt": "Templo Sagrado das Águas Tirta Empul"
      },
      "image": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800",
      "desc": {
        "en": "Revered Hindu water temple famous for its holy spring water purification ritual pools.",
        "es": "Venerado templo hindú del agua famoso por sus piscinas sagradas de rituales de purificación.",
        "pt": "Venerado templo hindu de água famoso por suas piscinas sagradas de rituais de purificação."
      }
    }
  ],
  "signatureExperiences": [
    {
      "title": {
        "en": "Private Helicopter Flight over Bali Coastline & Volcanoes",
        "es": "Vuelo Privado en Helicóptero sobre la Costa y Volcanes de Bali",
        "pt": "Voo Privado de Helicóptero sobre a Costa e Vulcões de Bali"
      },
      "desc": {
        "en": "Soar above rice terraces, Uluwatu cliffs, and volcanic craters on a private scenic charter.",
        "es": "Vuele sobre terrazas de arroz, acantilados de Uluwatu y cráteres volcánicos en un vuelo privado panorámico.",
        "pt": "Voe sobre terraços de arroz, penhascos de Uluwatu e crateras vulcânicas em um voo privativo panorâmico."
      },
      "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800"
    },
    {
      "title": {
        "en": "Royal Balinese Spa & Wellness Retreat",
        "es": "Retiro Real de Spa y Bienestar Balinés",
        "pt": "Retiro Real de Spa e Bem-Estar Balinês"
      },
      "desc": {
        "en": "Rejuvenate with traditional flower baths, herbal massages, and holistic Ayurveda rituals in a jungle sanctuary.",
        "es": "Rejuvenezca con baños de flores, masajes con hierbas y rituales ayurvédicos en un santuario de la jungla.",
        "pt": "Rejuvenesça com banhos de flores, massagens com ervas e rituais ayurvédicos em um santuário na selva."
      },
      "image": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800"
    },
    {
      "title": {
        "en": "Luxury Catamaran Cruise to Nusa Lembongan",
        "es": "Crucero de Lujo en Catamarán a Nusa Lembongan",
        "pt": "Cruzeiro de Luxo em Catamarã para Nusa Lembongan"
      },
      "desc": {
        "en": "Sail across crystal ocean waters with private snorkeling, beach club relaxation, and champagne lunch.",
        "es": "Navegue por aguas cristalinas con snorkel privado, descanso en club de playa y almuerzo con champán.",
        "pt": "Navegue por águas cristalinas com mergulho privativo, relaxamento em clube de praia e almoço com champanhe."
      },
      "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800"
    },
    {
      "title": {
        "en": "Gourmet Dining at Locavore / Cascades Ubud",
        "es": "Cena Gourmet en Locavore / Cascades Ubud",
        "pt": "Jantar Gourmet no Locavore / Cascades Ubud"
      },
      "desc": {
        "en": "Experience innovative Indonesian tasting menus crafted with wild local ingredients overlooking jungle ravines.",
        "es": "Disfrute de menús degustación indonesios con ingredientes locales sobre impresionantes barrancos de la jungla.",
        "pt": "Desfrute de menus degustação indonésios com ingredientes locais sobre impressionantes ravinas da selva."
      },
      "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800"
    },
    {
      "title": {
        "en": "Sunset Cocktails at Rock Bar Ayana Uluwatu",
        "es": "Cócteles al Atardecer en Rock Bar Ayana Uluwatu",
        "pt": "Coquetéis ao Pôr do Sol no Rock Bar Ayana Uluwatu"
      },
      "desc": {
        "en": "Sip custom cocktails on a natural rock formation perched 14 meters above the crashing Indian Ocean waves.",
        "es": "Tome cócteles de autor en una formación rocosa a 14 metros sobre las olas del Océano Índico.",
        "pt": "Tome coquetéis de autor em uma formação rochosa a 14 metros sobre as ondas do Oceano Índico."
      },
      "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800"
    },
    {
      "title": {
        "en": "Authentic Cooking Masterclass in an Organic Village Farm",
        "es": "Clase Magistral de Cocina en una Granja Orgánica",
        "pt": "Aula Master de Culinária em uma Fazenda Orgânica"
      },
      "desc": {
        "en": "Harvest fresh herbs and cook traditional Balinese feasts in a local family compound surrounded by nature.",
        "es": "Coseche hierbas frescas y cocine platos tradicionales balineses en una granja familiar rodeada de naturaleza.",
        "pt": "Colha ervas frescas e cozinhe pratos tradicionais balineses em uma fazenda familiar cercada pela natureza."
      },
      "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800"
    }
  ],
  "hotels": [
    {
      "name": "Mandapa, a Ritz-Carlton Reserve Ubud",
      "rating": "Luxury 5-Star Jungle Retreat",
      "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800",
      "desc": {
        "en": "An extraordinary sanctuary nestled along the Ayung River featuring private pool villas, butler service, and organic wellness spa.",
        "es": "Un santuario extraordinario a lo largo del río Ayung con villas privadas con piscina, mayordomo y spa de bienestar orgánico.",
        "pt": "Um santuário extraordinário às margens do rio Ayung com villas privadas com piscina, mordomo e spa de bem-estar orgânico."
      }
    },
    {
      "name": "Bulgari Resort Bali Uluwatu",
      "rating": "Luxury 5-Star Cliffside Resort",
      "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800",
      "desc": {
        "en": "An exclusive cliffside retreat 150 meters above the ocean combining Italian luxury aesthetics with traditional Balinese design.",
        "es": "Un exclusivo refugio en el acantilado a 150 metros sobre el océano que combina el lujo italiano con el diseño balinés.",
        "pt": "Um exclusivo refúgio no penhasco a 150 metros sobre o oceano combinando luxo italiano com design balinês."
      }
    }
  ],
  "thingsToDo": [
    {
      "en": "Private Ubud Rice Terrace & Monkey Forest Tour",
      "es": "Tour Privado por las Terrazas de Arroz y Bosque de Monos en Ubud",
      "pt": "Tour Privado pelos Terraços de Arroz e Floresta dos Macacos em Ubud"
    },
    {
      "en": "Uluwatu Sunset Temple & Kecak Fire Dance",
      "es": "Templo de Uluwatu al Atardecer y Danza de Fuego Kecak",
      "pt": "Templo de Uluwatu ao Pôr do Sol e Dança de Fogo Kecak"
    },
    {
      "en": "Nusa Penida Kelingking Beach Day Trip by Speedboat",
      "es": "Excursión en Lancha Rápida a la Playa Kelingking en Nusa Penida",
      "pt": "Excursão de Lancha Rápida para a Praia Kelingking em Nusa Penida"
    },
    {
      "en": "Mount Batur Sunrise Trekking & Hot Springs",
      "es": "Senderismo al Amanecer en el Monte Batur y Aguas Termales",
      "pt": "Trilha ao Amanhecer no Vulcão Batur e Fontes Termais"
    },
    {
      "en": "Tirta Empul Holy Water Purification Ceremony",
      "es": "Ceremonia de Purificación en el Templo Sagrado Tirta Empul",
      "pt": "Cerimônia de Purificação no Templo Sagrado Tirta Empul"
    },
    {
      "en": "Traditional Balinese Spa & Flower Bath Experience",
      "es": "Experiencia de Spa Balinés Tradicional y Baño de Flores",
      "pt": "Experiência de Spa Balinês Tradicional e Banho de Flores"
    }
  ],
  "suggestedItinerary": {
    "en": "7 Days / 6 Nights: Day 1 Arrival transfer & Luxury Hotel Check-in. Day 2 Ubud Tegallalang Rice Terraces, Monkey Forest & Royal Palace. Day 3 Tirta Empul Water Purification & Organic Cooking Class. Day 4 Mount Batur Sunrise Trek & Hot Springs Relaxation. Day 5 Nusa Penida Kelingking Beach Speedboat Excursion. Day 6 Uluwatu Cliff Temple Sunset & Rock Bar Cocktails. Day 7 Leisure Breakfast & Airport Transfer.",
    "es": "7 Días / 6 Noches: Día 1 Traslado de llegada y check-in. Día 2 Terrazas de arroz de Tegallalang, Bosque de Monos y Palacio Real de Ubud. Día 3 Purificación en Tirta Empul y clase de cocina. Día 4 Senderismo al amanecer en Monte Batur y aguas termales. Día 5 Excursión en lancha a Nusa Penida y Playa Kelingking. Día 6 Templo de Uluwatu al atardecer y cócteles en Rock Bar. Día 7 Desayuno y traslado al aeropuerto.",
    "pt": "7 Dias / 6 Noites: Dia 1 Traslado de chegada e check-in. Dia 2 Terraços de arroz de Tegallalang, Floresta dos Macacos e Palácio Real de Ubud. Dia 3 Purificação em Tirta Empul e aula de culinária. Dia 4 Trilha ao amanhecer no Vulcão Batur e fontes termais. Dia 5 Excursão de lancha para Nusa Penida e Praia Kelingking. Dia 6 Templo de Uluwatu ao pôr do sol e coquetéis no Rock Bar. Dia 7 Café da manhã e traslado ao aeroporto."
  },
  "travelTips": [
    {
      "en": "Dress respectfully with a sarong and sash when entering holy temples and sacred sites.",
      "es": "Viste con respeto usando sarong y faja al entrar en templos sagrados.",
      "pt": "Vista-se com respeito usando sarongue e faixa ao entrar em templos sagrados."
    },
    {
      "en": "Dry season between April and October is ideal for beach relaxation, surfing, and outdoor trekking.",
      "es": "La estación seca entre abril y octubre es ideal para disfrutar de la playa, surf y senderismo.",
      "pt": "A estação seca entre abril e outubro é ideal para praia, surfe e trilhas."
    },
    {
      "en": "Indonesia e-VOA (Visa on Arrival) is available online prior to travel for quick airport arrival clearance.",
      "es": "La visa electrónica e-VOA de Indonesia se puede tramitar en línea antes de viajar para un control ágil.",
      "pt": "O visto eletrônico e-VOA da Indonésia pode ser solicitado online antes da viagem."
    },
    {
      "en": "Hire a private air-conditioned car with an English-speaking driver for comfortable island transport.",
      "es": "Alquile un coche privado con chófer con habla inglesa para un transporte cómodo por la isla.",
      "pt": "Contrate um carro privativo com motorista para um transporte confortável pela ilha."
    },
    {
      "en": "Always drink bottled water and sample food at reputable restaurants and luxury resorts.",
      "es": "Beba siempre agua embotellada y consuma alimentos en restaurantes de buena reputación o resorts.",
      "pt": "Beba sempre água engarrafada e consuma alimentos em restaurantes reconhecidos ou resorts."
    }
  ],
  "faqs": [
    {
      "q": {
        "en": "What is the best month to visit Bali?",
        "es": "¿Cuál es el mejor mes para visitar Bali?",
        "pt": "Qual é o melhor mês para visitar Bali?"
      },
      "a": {
        "en": "May, June, and September are fantastic months offering sunny dry weather, lower humidity, and fewer crowds.",
        "es": "Mayo, junio y septiembre son meses fantásticos con clima soleado, menor humedad y menos afluencia.",
        "pt": "Maio, junho e setembro são meses fantásticos com clima ensolarado, menor umidade e menos multidões."
      }
    },
    {
      "q": {
        "en": "Is Bali good for honeymooners?",
        "es": "¿Es Bali recomendable para lunas de miel?",
        "pt": "Bali é recomendável para lua de mel?"
      },
      "a": {
        "en": "Yes! Bali is widely considered one of the world's top honeymoon destinations thanks to romantic overwater and jungle pool villas.",
        "es": "¡Sí! Bali es considerada una de las mejores opciones para luna de miel por sus villas románticas con piscina privada.",
        "pt": "Sim! Bali é considerada um dos melhores destinos de lua de mel graças às suas villas românticas com piscina privativa."
      }
    },
    {
      "q": {
        "en": "How many days should I stay in Bali?",
        "es": "¿Cuántos días debería quedarme en Bali?",
        "pt": "Quantos dias devo ficar em Bali?"
      },
      "a": {
        "en": "7 to 10 days are ideal to combine Ubud's jungle culture with southern cliff beaches and Nusa Penida islands.",
        "es": "De 7 a 10 días son ideales para combinar la cultura de Ubud con las playas del sur y las islas de Nusa Penida.",
        "pt": "De 7 a 10 dias são ideais para combinar a cultura de Ubud com as praias do sul e as ilhas de Nusa Penida."
      }
    },
    {
      "q": {
        "en": "Do I need a visa for Bali?",
        "es": "¿Necesito visa para Bali?",
        "pt": "Preciso de visto para Bali?"
      },
      "a": {
        "en": "Most international visitors can obtain a 30-day Visa on Arrival (VOA) at the airport or apply for e-VOA online.",
        "es": "La mayoría de visitantes pueden obtener una visa a la llegada (VOA) de 30 días o solicitar e-VOA en línea.",
        "pt": "A maioria dos visitantes pode obter um visto na chegada (VOA) de 30 dias ou solicitar e-VOA online."
      }
    },
    {
      "q": {
        "en": "Can Bali be combined with Singapore or Malaysia?",
        "es": "¿Se puede combinar Bali con Singapur o Malasia?",
        "pt": "É possível combinar Bali com Singapura ou Malásia?"
      },
      "a": {
        "en": "Yes! Direct flights connect Bali with Singapore and Kuala Lumpur daily, making multi-country trips easy.",
        "es": "¡Sí! Hay vuelos directos diarios que conectan Bali con Singapur y Kuala Lumpur.",
        "pt": "Sim! Voos diretos diários conectam Bali a Singapura e Kuala Lumpur com facilidade."
      }
    }
  ],
  "seo": {
    "en": {
      "title": "Bali Luxury Travel | Sacred Temples, Ubud Terraces & Beach Villas",
      "description": "Experience luxury travel in Bali through custom itineraries covering Ubud rice terraces, Uluwatu cliff temples, Nusa Penida beaches, and wellness resorts.",
      "keywords": "Bali luxury travel, Bali tour package, Ubud rice terraces, Uluwatu temple, Nusa Penida, Bali honeymoon"
    },
    "es": {
      "title": "Viajes de Lujo a Bali | Templos Sagrados, Terrazas de Ubud y Villas",
      "description": "Descubre Bali con viajes de lujo que incluyen las terrazas de arroz de Ubud, templos de Uluwatu, playas de Nusa Penida y resorts de bienestar.",
      "keywords": "viajes de lujo a Bali, paquete turistico Bali, terrazas de arroz Ubud, templo Uluwatu, Nusa Penida"
    },
    "pt": {
      "title": "Viagens de Luxo para Bali | Templos Sagrados, Terraços de Ubud e Villas",
      "description": "Descubra Bali em viagens de luxo cobrindo terraços de arroz de Ubud, templos de Uluwatu, praias de Nusa Penida e resorts de bem-estar.",
      "keywords": "viagens de luxo para Bali, pacote turistico Bali, terraços de arroz Ubud, templo Uluwatu, Nusa Penida"
    }
  }
},
  {
  "slug": "thailand",
  "title": {
    "en": "Thailand",
    "es": "Tailandia",
    "pt": "Tailândia"
  },
  "tagline": {
    "en": "Golden Temples, Emerald Islands & World-Class Culinary Journeys",
    "es": "Templos Dorados, Islas Esmeralda y Gastronomía de Clase Mundial",
    "pt": "Templos Dourados, Ilhas Esmeralda e Jornadas Culinárias de Classe Mundial"
  },
  "region": "Southeast Asia (Thailand)",
  "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=1600",
  "gallery": [
    "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=1200",
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
    "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1200",
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200",
    "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1200",
    "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=1200",
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200"
  ],
  "description": {
    "en": "From Bangkok's glittering Grand Palace and Michelin street food to Chiang Mai's mountain temples and Phuket's emerald karst island waters, Thailand offers the ultimate Asian escape.",
    "es": "Desde el deslumbrante Gran Palacio de Bangkok y comida callejera Michelin hasta los templos de montaña de Chiang Mai y las aguas de Phuket, Tailandia es la escapada asiática definitiva.",
    "pt": "Dos deslumbrantes templos de Bangkok à gastronomia Michelin, montanhas de Chiang Mai e ilhas de calcário de Phuket, a Tailândia oferece a escapada asiática definitiva."
  },
  "overview": {
    "en": "Thailand, known as the Land of Smiles, is one of Southeast Asia's premier destinations, famous for its magnificent Buddhist architecture, pristine island archipelagos, legendary culinary scene, and vibrant culture. Whether exploring the bustling riverways of Bangkok, discovering ancient temple ruins in Ayutthaya, encountering gentle giants at ethical elephant sanctuaries in Chiang Mai, or sailing through limestone sea karsts in Phuket and Phi Phi, Thailand delivers unforgettable luxury travel experiences.",
    "es": "Tailandia, conocida como el País de las Sonrisas, es uno de los principales destinos del Sudeste Asiático, famoso por su magnífica arquitectura budista, archipiélagos vírgenes, gastronomía legendaria y cultura vibrante. Ya sea explorando los ríos de Bangkok, descubriendo ruinas antiguas en Ayutthaya o navegando entre acantilados kársticos en Phuket y Phi Phi, Tailandia ofrece experiencias inolvidables.",
    "pt": "A Tailândia, conhecida como a Terra dos Sorrisos, é um dos principais destinos do Sudeste Asiático, famosa por sua magnífica arquitetura budista, arquipélagos virgens, gastronomia lendária e cultura vibrante. Seja explorando os rios de Bangkok, descobrindo ruínas em Ayutthaya ou navegando por ilhas em Phuket e Phi Phi, a Tailândia oferece experiências inesquecíveis."
  },
  "history": {
    "en": "Thailand's history spans centuries of royal sovereign kingdoms, starting with Sukhothai in the 13th century, followed by the opulent Siam kingdom of Ayutthaya, and the current Rattanakosin era under the Chakri Dynasty in Bangkok. Uniquely among Southeast Asian nations, Thailand maintained its sovereignty and avoided European colonization, preserving its royal heritage and traditions intact.",
    "es": "La historia de Tailandia abarca siglos de reinos soberanos, comenzando con Sukhothai en el siglo XIII, seguido por el Reino de Ayutthaya y la actual dinastía Chakri en Bangkok. A diferencia de otros países de la región, Tailandia mantuvo su soberanía y nunca fue colonizada por potencias europeas.",
    "pt": "A história da Tailândia abrange séculos de reinos soberanos, começando com Sukhothai no século XIII, seguido pelo Reino de Ayutthaya e a atual dinastia Chakri em Bangkok. Ao contrário de outros países da região, a Tailândia manteve sua soberania e nunca foi colonizada."
  },
  "culture": {
    "en": "Thai culture is deeply rooted in Theravada Buddhism, respectful social etiquette centered around the iconic 'Wai' greeting, and grand festivals such as Songkran (Thai New Year water festival) and Loy Krathong (floating lantern festival). Traditional Thai silk weaving, classical dance drama (Khon), and Muay Thai martial arts further enrich the country's vibrant cultural tapestry.",
    "es": "La cultura tailandesa está arraigada en el budismo Theravada, el respetuoso saludo 'Wai' y grandes festivales como Songkran y Loy Krathong. Los tejidos de seda tradicional, las danzas clásicas Khon y el arte marcial Muay Thai enriquecen aún más su patrimonio cultural.",
    "pt": "A cultura tailandesa está enraizada no budismo Theravada, na respeitosa saudação 'Wai' e em grandes festivais como Songkran e Loy Krathong. A seda tradicional, a dança clássica Khon e o Muay Thai enriquecem ainda mais seu patrimônio cultural."
  },
  "localFood": {
    "en": "Thai food is globally celebrated for its delicate balance of sweet, sour, salty, spicy, and bitter flavours. Signature dishes include Pad Thai, Tom Yum Goong (spicy shrimp soup), Massaman Curry, Som Tum (spicy green papaya salad), and Mango Sticky Rice. Bangkok is world-famous for its bustling Michelin-starred street food stalls such as Jay Fai alongside refined royal Thai dining.",
    "es": "La gastronomía tailandesa es aclamada mundialmente por su perfecto equilibrio entre dulce, ácido, salado y picante. Destacan platos como el Pad Thai, Tom Yum Goong, Curry Massaman, Som Tum y el postre de Mango con Arroz Glutinoso. Bangkok ofrece desde comida callejera con estrella Michelin hasta cenadores reales.",
    "pt": "A culinária tailandesa é aclamada no mundo inteiro pelo equilíbrio de sabores doces, ácidos, salgados e picantes. Destacam-se o Pad Thai, Tom Yum Goong, Curry Massaman, Som Tum e o Arroz Glutinoso com Manga. Bangkok oferece desde gastronomia de rua Michelin até alta culinária real."
  },
  "bestTime": {
    "en": "November to April",
    "es": "De noviembre a abril",
    "pt": "De novembro a abril"
  },
  "attractions": [
    {
      "name": {
        "en": "Grand Palace & Wat Phra Kaew (Bangkok)",
        "es": "Gran Palacio y Wat Phra Kaew (Bangkok)",
        "pt": "Grande Palácio e Wat Phra Kaew (Bangkok)"
      },
      "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800",
      "desc": {
        "en": "The glittering historic residence of Thai Kings featuring the sacred Emerald Buddha enshrined in gold.",
        "es": "La deslumbrante residencia histórica de los Reyes de Tailandia con el sagrado Buda de Esmeralda.",
        "pt": "A deslumbrante residência histórica dos Reis da Tailândia abrigando o sagrado Buda de Esmeralda."
      }
    },
    {
      "name": {
        "en": "Phi Phi Islands & Maya Bay",
        "es": "Islas Phi Phi y Maya Bay",
        "pt": "Ilhas Phi Phi e Maya Bay"
      },
      "image": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
      "desc": {
        "en": "Breathtaking limestone karst bay made world-famous by turquoise lagoon waters and sheer jungle cliffs.",
        "es": "Espectacular bahía de acantilados kársticos con aguas turquesas y exuberante vegetación tropical.",
        "pt": "Espectacular baía de penhascos de calcário com águas azul-turquesa e exuberante vegetação tropical."
      }
    },
    {
      "name": {
        "en": "Wat Phra That Doi Suthep (Chiang Mai)",
        "es": "Wat Phra That Doi Suthep (Chiang Mai)",
        "pt": "Wat Phra That Doi Suthep (Chiang Mai)"
      },
      "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800",
      "desc": {
        "en": "Sacred golden mountain chedi overlooking Chiang Mai valley and surrounding northern highlands.",
        "es": "Sagrada estupa dorada sobre la montaña contemplando el valle de Chiang Mai y las colinas del norte.",
        "pt": "Sagrada estupa dourada na montanha contemplando o vale de Chiang Mai e as montanhas do norte."
      }
    },
    {
      "name": {
        "en": "Ayutthaya Historical Park",
        "es": "Parque Histórico de Ayutthaya",
        "pt": "Parque Histórico de Ayutthaya"
      },
      "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800",
      "desc": {
        "en": "UNESCO World Heritage ancient capital ruins with majestic brick temple towers and stone Buddha heads.",
        "es": "Ruinas de la antigua capital declaradas Patrimonio Mundial con majestuosas torres de templos y Budas de piedra.",
        "pt": "Ruínas da antiga capital reconhecidas como Patrimônio Mundial com majestosas torres de templos."
      }
    },
    {
      "name": {
        "en": "Phang Nga Bay & James Bond Island",
        "es": "Bahía de Phang Nga e Isla de James Bond",
        "pt": "Baía de Phang Nga e Ilha de James Bond"
      },
      "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=800",
      "desc": {
        "en": "Dramatic sea karsts, hidden emerald lagoons, and floating sea-gypsy fishing villages.",
        "es": "Espectaculares formaciones kársticas mar adentro, lagunas escondidas y aldeas de pescadores flotantes.",
        "pt": "Espectaculares formações cársticas no mar, lagoas escondidas e vilarejos de pescadores flutuantes."
      }
    },
    {
      "name": {
        "en": "Wat Arun Temple of Dawn (Bangkok)",
        "es": "Templo del Amanecer Wat Arun (Bangkok)",
        "pt": "Templo do Amanhecer Wat Arun (Bangkok)"
      },
      "image": "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=800",
      "desc": {
        "en": "Iconic riverside pagoda intricately encrusted with colorful porcelain tiles along Chao Phraya River.",
        "es": "Icónica pagoda junto al río Chao Phraya decorada con intrincados azulejos de porcelana de colores.",
        "pt": "Icônica estupa às margens do rio Chao Phraya decorada com intrincados azulejos de porcelana coloridos."
      }
    }
  ],
  "signatureExperiences": [
    {
      "title": {
        "en": "Private Yacht Charter in Phang Nga Bay",
        "es": "Alquiler Privado de Yate por la Bahía de Phang Nga",
        "pt": "Aluguel Privado de Iate pela Baía de Phang Nga"
      },
      "desc": {
        "en": "Sail through dramatic karst towers with private sea kayaking, hidden cave exploration, and gourmet lunch.",
        "es": "Navegue entre torres kársticas con kayak de mar privado, exploración de cuevas y almuerzo gourmet.",
        "pt": "Navegue entre torres cársticas com caiaque de mar privativo, exploração de cavernas e almoço gourmet."
      },
      "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=800"
    },
    {
      "title": {
        "en": "Michelin Street Food & Fine Dining Tour in Bangkok",
        "es": "Tour de Comida Callejera Michelin y Alta Cocina en Bangkok",
        "pt": "Tour de Gastronomia de Rua Michelin e Alta Culinária em Bangkok"
      },
      "desc": {
        "en": "Discover Bangkok's culinary secrets with a private food guide, tuk-tuk night rides, and VIP restaurant tables.",
        "es": "Descubra los secretos gastronómicos de Bangkok con un guía privado, tuk-tuk nocturno y mesas VIP.",
        "pt": "Descubra os segredos gastronômicos de Bangkok com um guia privado, tuk-tuk noturno e mesas VIP."
      },
      "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800"
    },
    {
      "title": {
        "en": "Ethical Elephant Nature Sanctuary in Chiang Mai",
        "es": "Santuario Ético de Elefantes en Chiang Mai",
        "pt": "Santuário Ético de Elefantes em Chiang Mai"
      },
      "desc": {
        "en": "Walk alongside rescued gentle Asian elephants in mountain valleys without riding, feeding and bathing them in rivers.",
        "es": "Camine junto a elefantes asiáticos rescatados en valles de montaña, alimentándolos y bañándolos en ríos.",
        "pt": "Caminhe ao lado de elefantes asiáticos resgatados em vales de montanha, alimentando-os e banhando-os nos rios."
      },
      "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800"
    },
    {
      "title": {
        "en": "Master Chef Thai Cooking Class in a Teakwood Villa",
        "es": "Clase Magistral de Cocina Tailandesa en una Villa de Teca",
        "pt": "Aula Master de Culinária Tailandesa em uma Villa de Teca"
      },
      "desc": {
        "en": "Visit local organic herb markets and prepare signature curries and soups alongside a private executive chef.",
        "es": "Visite mercados de hierbas orgánicas y prepare currys y sopas emblemáticas con un chef ejecutivo.",
        "pt": "Visite mercados de ervas orgânicas e prepare curries e sopas emblemáticas com um chef executivo."
      },
      "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800"
    },
    {
      "title": {
        "en": "Private Luxury Longtail Boat Cruise in Krabi",
        "es": "Crucero Privado en Barco de Cola Larga por Krabi",
        "pt": "Cruzeiro Privado de Barco Cauda Longa em Krabi"
      },
      "desc": {
        "en": "Explore Hong Islands and secret lagoon beaches away from commercial tour groups in ultimate privacy.",
        "es": "Explore las islas Hong y playas secretas de la bahía lejos de grupos turísticos comerciales.",
        "pt": "Explore as ilhas Hong e praias secretas da baía longe de grupos turísticos comerciais."
      },
      "image": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800"
    },
    {
      "title": {
        "en": "Traditional Thai Massage & Herbal Spa Sanctuary",
        "es": "Spa y Masaje Tradicional Tailandés con Hierbas",
        "pt": "Spa e Massagem Tradicional Tailandesa com Ervas"
      },
      "desc": {
        "en": "Indulge in royal Thai body massage, warm herbal compress therapies, and aromatherapy in lush tropical gardens.",
        "es": "Disfrute de masajes tailandeses reales, terapia con compresas de hierbas calientes y aromaterapia en jardines.",
        "pt": "Desfrute de massagens tailandesas reais, compressas de ervas quentes e aromaterapia em jardins tropicais."
      },
      "image": "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=800"
    }
  ],
  "hotels": [
    {
      "name": "Amanpuri Phuket",
      "rating": "Luxury 5-Star Beach Resort",
      "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=800",
      "desc": {
        "en": "The flagship flagship luxury resort set on a secluded coconut grove overlooking the turquoise Andaman Sea.",
        "es": "El legendario resort de ultra lujo ubicado en una arboleda de cocoteros frente al mar de Andamán.",
        "pt": "O lendário resort de ultra luxo localizado em um coqueiral isolado com vista para o mar de Andaman."
      }
    },
    {
      "name": "Four Seasons Resort Chiang Mai",
      "rating": "Luxury 5-Star Mountain Resort",
      "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800",
      "desc": {
        "en": "A serene luxury sanctuary set amid working rice paddies and misty mountains in the Mae Rim Valley.",
        "es": "Un sereno refugio de lujo entre arrozales activos y montañas cubiertas de niebla en el valle Mae Rim.",
        "pt": "Um sereno refúgio de luxo em meio a campos de arroz ativos e montanhas no vale Mae Rim."
      }
    }
  ],
  "thingsToDo": [
    {
      "en": "Bangkok Grand Palace & Wat Pho Reclining Buddha Tour",
      "es": "Tour por el Gran Palacio de Bangkok y el Buda Reclinado",
      "pt": "Tour pelo Grande Palácio de Bangkok e Buda Reclinado"
    },
    {
      "en": "Phi Phi Islands & Maya Bay Private Speedboat Cruise",
      "es": "Crucero Privado en Lancha Rápida a las Islas Phi Phi y Maya Bay",
      "pt": "Cruzeiro Privado de Lancha Rápida para as Ilhas Phi Phi e Maya Bay"
    },
    {
      "en": "Chiang Mai Elephant Sanctuary & Doi Suthep Temple Tour",
      "es": "Santuario de Elefantes de Chiang Mai y Templo Doi Suthep",
      "pt": "Santuário de Elefantes de Chiang Mai e Templo Doi Suthep"
    },
    {
      "en": "Ayutthaya Historical Park Ruins Private Day Escape",
      "es": "Excursión Privada al Parque Histórico de Ayutthaya",
      "pt": "Excursão Privada ao Parque Histórico de Ayutthaya"
    },
    {
      "en": "Bangkok Chao Phraya River Sunset Dinner Cruise",
      "es": "Crucero con Cena al Atardecer por el Río Chao Phraya en Bangkok",
      "pt": "Cruzeiro com Jantar ao Pôr do Sol pelo Rio Chao Phraya em Bangkok"
    },
    {
      "en": "Authentic Thai Cooking Class & Local Herb Market Tour",
      "es": "Clase de Cocina Tailandesa Auténtica y Tour por el Mercado",
      "pt": "Aula de Culinária Tailandesa Autêntica e Tour pelo Mercado"
    }
  ],
  "suggestedItinerary": {
    "en": "7 Days / 6 Nights: Day 1 Arrival Bangkok & Chao Phraya River Cruise. Day 2 Grand Palace, Wat Pho & Michelin Street Food Tour. Day 3 Flight to Chiang Mai, Wat Doi Suthep & Night Market. Day 4 Ethical Elephant Sanctuary & Cooking Masterclass. Day 5 Flight to Phuket & Luxury Resort Check-in. Day 6 Phang Nga Bay & James Bond Island Yacht Cruise. Day 7 Leisure & Airport Transfer.",
    "es": "7 Días / 6 Noches: Día 1 Llegada a Bangkok y crucero por el río Chao Phraya. Día 2 Gran Palacio, Wat Pho y tour gastronómico Michelin. Día 3 Vuelo a Chiang Mai, Wat Doi Suthep y Mercado Nocturno. Día 4 Santuario de elefantes y clase de cocina. Día 5 Vuelo a Phuket y check-in en resort. Día 6 Crucero en yate por la Bahía de Phang Nga. Día 7 Desayuno y traslado al aeropuerto.",
    "pt": "7 Dias / 6 Noites: Dia 1 Chegada em Bangkok e cruzeiro pelo rio Chao Phraya. Dia 2 Grande Palácio, Wat Pho e tour gastronômico Michelin. Dia 3 Voo para Chiang Mai, Wat Doi Suthep e Mercado Noturno. Dia 4 Santuário de elefantes e aula de culinária. Dia 5 Voo para Phuket e check-in em resort. Dia 6 Cruzeiro de iate pela Baía de Phang Nga. Dia 7 Café da manhã e traslado ao aeroporto."
  },
  "travelTips": [
    {
      "en": "Dress modestly covering shoulders and knees when visiting all temples and royal palaces in Thailand.",
      "es": "Viste con modestia cubriendo hombros y rodillas al visitar templos y palacios reales.",
      "pt": "Vista-se com respeito cobrindo ombros e joelhos ao visitar templos e palácios reais."
    },
    {
      "en": "November to April provides ideal dry sunny weather throughout Bangkok, Chiang Mai, and Andaman beaches.",
      "es": "De noviembre a abril se disfruta de clima seco y soleado en Bangkok, Chiang Mai y playas.",
      "pt": "De novembro a abril oferece clima seco e ensolarado em Bangkok, Chiang Mai e praias."
    },
    {
      "en": "Visa-exemption or e-visa is available for over 60 nationalities for hassle-free entry up to 30 or 60 days.",
      "es": "La exención de visa o e-visa está disponible para más de 60 nacionalidades para estancias de 30 o 60 días.",
      "pt": "Isenção de visto ou e-visa está disponível para mais de 60 nacionalidades."
    },
    {
      "en": "Use official meter taxis, Grab ridesharing app, or private chauffeurs for convenient city travel.",
      "es": "Utilice taxis con taxímetro, la app Grab o chóferes privados para un transporte cómodo.",
      "pt": "Utilize táxis com taxímetro, o aplicativo Grab ou motoristas particulares."
    },
    {
      "en": "Always show respect toward images of the Thai Royal Family and sacred Buddha statues across the country.",
      "es": "Muestre siempre respeto por las imágenes de la Familia Real y estatuas de Buda.",
      "pt": "Mostre sempre respeito pelas imagens da Família Real e estátuas de Buda."
    }
  ],
  "faqs": [
    {
      "q": {
        "en": "What is the best time to travel to Thailand?",
        "es": "¿Cuál es la mejor época para viajar a Tailandia?",
        "pt": "Qual é a melhor época para viajar para a Tailândia?"
      },
      "a": {
        "en": "November to April is the cool and dry season, offering ideal conditions for sightseeing and island beaches.",
        "es": "De noviembre a abril es la estación seca y fresca, perfecta para turismo y playas.",
        "pt": "De novembro a abril é a estação seca e fresca, perfeita para passeios e praias."
      }
    },
    {
      "q": {
        "en": "Is Thailand suitable for family luxury holidays?",
        "es": "¿Es Tailandia adecuada para vacaciones familiares de lujo?",
        "pt": "A Tailândia é adequada para férias de luxo em família?"
      },
      "a": {
        "en": "Yes! Thailand features world-renowned family luxury resorts, friendly culture, and exciting activities for all ages.",
        "es": "¡Sí! Tailandia cuenta con resorts familiares de clase mundial, cultura acogedora y actividades para todas las edades.",
        "pt": "Sim! A Tailândia conta com resorts de luxo familiares reconhecidos mundialmente e cultura acolhedora."
      }
    },
    {
      "q": {
        "en": "How many days are recommended for Thailand?",
        "es": "¿Cuántos días se recomiendan para Tailandia?",
        "pt": "Quantos dias são recomendados para a Tailândia?"
      },
      "a": {
        "en": "7 to 14 days are ideal to explore Bangkok, Chiang Mai's mountains, and Phuket/Krabi island beaches.",
        "es": "De 7 a 14 días son ideales para explorar Bangkok, Chiang Mai y las playas de Phuket o Krabi.",
        "pt": "De 7 a 14 dias são ideais para explorar Bangkok, Chiang Mai e as praias de Phuket ou Krabi."
      }
    },
    {
      "q": {
        "en": "Do I need a visa to visit Thailand?",
        "es": "¿Necesito visa para visitar Tailandia?",
        "pt": "Preciso de visto para visitar a Tailândia?"
      },
      "a": {
        "en": "Most international travelers receive a 30 to 60-day visa exemption upon arrival without advance fee.",
        "es": "La mayoría de viajeros internacionales reciben exención de visa a la llegada de 30 a 60 días.",
        "pt": "A maioria dos viajantes recebe isenção de visto na chegada de 30 a 60 dias."
      }
    },
    {
      "q": {
        "en": "Can Thailand be combined with Cambodia or Laos?",
        "es": "¿Se puede combinar Tailandia con Camboya o Laos?",
        "pt": "É possível combinar a Tailândia com o Camboja ou Laos?"
      },
      "a": {
        "en": "Yes! Quick 1-hour flights connect Bangkok to Siem Reap (Angkor Wat) and Luang Prabang in Laos.",
        "es": "¡Sí! Vuelos cortos de 1 hora conectan Bangkok con Siem Reap (Angkor Wat) y Luang Prabang en Laos.",
        "pt": "Sim! Voos curtos de 1 hora conectam Bangkok a Siem Reap (Angkor Wat) e Luang Prabang no Laos."
      }
    }
  ],
  "seo": {
    "en": {
      "title": "Thailand Luxury Travel | Bangkok Temples, Chiang Mai & Phuket Islands",
      "description": "Discover Thailand through luxury bespoke travel covering Bangkok Grand Palace, Ayutthaya ruins, Chiang Mai sanctuaries, and Phuket island beach resorts.",
      "keywords": "Thailand luxury travel, Thailand tour package, Bangkok Grand Palace, Chiang Mai elephant sanctuary, Phuket islands, Phi Phi"
    },
    "es": {
      "title": "Viajes de Lujo a Tailandia | Templos de Bangkok, Chiang Mai y Phuket",
      "description": "Descubre Tailandia con viajes de lujo que incluyen el Gran Palacio de Bangkok, ruinas de Ayutthaya, santuarios de Chiang Mai y las islas de Phuket.",
      "keywords": "viajes de lujo a Tailandia, paquete turistico Tailandia, Gran Palacio Bangkok, Chiang Mai, islas Phuket"
    },
    "pt": {
      "title": "Viagens de Luxo para a Tailândia | Templos de Bangkok, Chiang Mai e Phuket",
      "description": "Descubra a Tailândia em viagens de luxo com o Grande Palácio de Bangkok, ruínas de Ayutthaya, santuários de Chiang Mai e ilhas de Phuket.",
      "keywords": "viagens de luxo para Tailândia, pacote turistico Tailândia, Grande Palácio Bangkok, Chiang Mai, ilhas Phuket"
    }
  }
},
  {
  "slug": "maldives",
  "title": {
    "en": "Maldives",
    "es": "Maldivas",
    "pt": "Maldivas"
  },
  "tagline": {
    "en": "Overwater Sanctuaries, Turquoise Lagoons & Marine Wonders",
    "es": "Santuarios Sobre el Agua, Lagunas Turquesas y Maravillas Marinas",
    "pt": "Santuários Sobre as Águas, Lagoas Turquesa e Maravilhas Marinhas"
  },
  "region": "Indian Ocean (Maldives)",
  "image": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600",
  "gallery": [
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=1200",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200"
  ],
  "description": {
    "en": "Discover the Maldives, an idyllic Indian Ocean paradise of private overwater villas, pristine powder-white sand beaches, glowing turquoise lagoons, and vibrant coral reef sanctuaries.",
    "es": "Descubra Maldivas, un idílico paraíso en el Océano Índico con villas sobre el agua, playas de arena blanca, lagunas turquesas y prístinos arrecifes de coral.",
    "pt": "Descubra as Maldivas, um paraíso no Oceano Índico com villas sobre as águas, praias de areia branca, lagoas turquesa e prístinos recifes de coral."
  },
  "overview": {
    "en": "The Maldives is the world's ultimate island luxury destination, comprising 26 natural coral atolls and over 1,100 tropical islands scattered across the azure waters of the Indian Ocean. Renowned for pioneered overwater bungalows, crystal-clear lagoons, underwater fine dining, and rich marine biodiversity including gentle whale sharks and manta rays, the Maldives offers unmitigated privacy, romance, and tranquility.",
    "es": "Maldivas es el destino de isla de lujo más codiciado del mundo, compuesto por 26 atolones de coral naturales y más de 1,100 islas tropicales en las aguas cristalinas del Océano Índico. Renombrada por sus icónicos palafitos sobre el agua, restaurantes submarinos y biodiversidad marina con tiburones ballena y mantarrayas, ofrece privacidad y romance absoluto.",
    "pt": "As Maldivas são o destino de ilha de luxo mais cobiçado do mundo, composto por 26 atóis de coral naturais e mais de 1.100 ilhas tropicais nas águas cristalinas do Oceano Índico. Famosa por seus palafitas sobre as águas, restaurantes submarinos e biodiversidade marina com tubarões-baleia e arraias manta, oferece privacidade e romance absoluto."
  },
  "history": {
    "en": "The historic Maldivian archipelago has been inhabited for over 2,500 years by maritime seafaring communities influenced by ancient Indian Ocean trade routes connecting Arabia, India, and East Africa. Formerly an Islamic Sultanate, Maldivian heritage is celebrated through traditional lacquerware craftsmanship, coral stone mosque architecture, and seafaring traditions.",
    "es": "El archipiélago maldivo ha estado habitado durante más de 2,500 años por comunidades marineras influenciadas por las rutas comerciales del Océano Índico entre Arabia, India y África Oriental. Antiguo sultanato islámico, su patrimonio se refleja en artesanías de laca y mezquitas de piedra de coral.",
    "pt": "O arquipélago das Maldivas é habitado há mais de 2.500 anos por comunidades marítimas influenciadas pelas rotas comerciais do Oceano Índico. Antigo sultanato islâmico, seu patrimônio se reflete no artesanato e nas mesquitas de pedra de coral."
  },
  "culture": {
    "en": "Dhivehi island culture is deeply connected to the ocean, traditional fishing, drum music known as Boduberu, and island community life. Visitors experience warm island hospitality, sustainable marine conservation efforts, and serene wellness rituals inspired by ancient sea remedies.",
    "es": "La cultura insular Dhivehi está profundamente conectada con el océano, la pesca tradicional, la música de tambores Boduberu y la vida comunitaria. Los visitantes disfrutan de la hospitalidad insular, esfuerzos de conservación marina y rituales de bienestar.",
    "pt": "A cultura insular Dhivehi está profundamente ligada ao oceano, à pesca tradicional, à música de tambores Boduberu e à vida comunitária. Os visitantes desfrutam da hospitalidade insular, conservação marinha e rituais de bem-estar."
  },
  "localFood": {
    "en": "Maldivian culinary heritage features fresh yellowfin tuna, coconut, aromatic spices, and tropical fruits. Signature dishes include Garudhiya (fragrant fish broth), Mas Huni (shredded tuna with coconut, onion, and chili), fish curries, and fresh ocean lobster. Luxury island resorts offer spectacular underwater dining experiences surrounded by living coral reefs.",
    "es": "La gastronomía maldiva destaca por el atún aleta amarilla fresco, coco, especias y frutas tropicales. Entre sus platos emblemáticos se encuentran el Garudhiya (caldo de pescado), Mas Huni (atún desmenuzado con coco) y currys de pescado. Los resorts ofrecen impresionantes restaurantes bajo el agua.",
    "pt": "A culinária das Maldivas destaca o atum de barbatana amarela fresco, coco, especiarias e frutas tropicais. Pratos emblemáticos incluem o Garudhiya (caldo de peixe), Mas Huni (atum desfiado com coco) e curries de peixe. Os resorts oferecem impressionantes restaurantes submarinos."
  },
  "bestTime": {
    "en": "November to April",
    "es": "De noviembre a abril",
    "pt": "De novembro a abril"
  },
  "attractions": [
    {
      "name": {
        "en": "Baa Atoll UNESCO Biosphere Reserve",
        "es": "Reserva de la Biosfera de la UNESCO del Atolón Baa",
        "pt": "Reserva da Biosfera da UNESCO do Atol Baa"
      },
      "image": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
      "desc": {
        "en": "Globally famous marine sanctuary known for Hanifaru Bay where hundreds of manta rays and whale sharks congregate.",
        "es": "Santuario marino famoso mundialmente por la Bahía de Hanifaru donde se congregan cientos de mantarrayas y tiburones ballena.",
        "pt": "Santuário marinho famoso mundialmente pela Baía de Hanifaru onde se congregam centenas de arraias manta e tubarões-baleia."
      }
    },
    {
      "name": {
        "en": "Ari Atoll Whale Shark Sanctuary",
        "es": "Santuario de Tiburones Ballena del Atolón Ari",
        "pt": "Santuário de Tubarões-Baleia do Atol Ari"
      },
      "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
      "desc": {
        "en": "Year-round aggregation marine zone offering extraordinary opportunities to swim alongside gentle whale sharks.",
        "es": "Zona marina ideal para nadar durante todo el año junto a majestuosos y dóciles tiburones ballena.",
        "pt": "Zona marinha ideal para nadar durante todo o ano ao lado de majestosos tubarões-baleia."
      }
    },
    {
      "name": {
        "en": "Vaadhoo Island Sea of Stars",
        "es": "Mar de Estrellas de la Isla Vaadhoo",
        "pt": "Mar de Estrelas da Ilha Vaadhoo"
      },
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "desc": {
        "en": "Magical natural phenomenon where bioluminescent plankton glows like glowing blue stars along night ocean shores.",
        "es": "Mágico fenómeno natural donde el plancton bioluminiscente brilla como estrellas azules en las orillas nocturnas.",
        "pt": "Mágico fenômeno natural onde o plâncton bioluminescente brilha como estrelas azuis nas praias noturnas."
      }
    },
    {
      "name": {
        "en": "Male Capital & 17th Century Friday Mosque",
        "es": "Malé Capital y Mezquita del Viernes del Siglo XVII",
        "pt": "Malé Capital e Mesquita de Sexta-Feira do Século XVII"
      },
      "image": "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800",
      "desc": {
        "en": "Vibrant capital island featuring historic coral stone Old Friday Mosque (Hukuru Miskiy) and bustling fish markets.",
        "es": "Capital vibrante con la histórica Mezquita del Viernes de piedra de coral tallada y coloridos mercados de pescado.",
        "pt": "Capital vibrante com a histórica Mesquita de Sexta-Feira de pedra de coral entalhada e mercados de peixe."
      }
    },
    {
      "name": {
        "en": "Banana Reef Diving Sanctuary",
        "es": "Santuario de Buceo Banana Reef",
        "pt": "Santuário de Mergulho Banana Reef"
      },
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
      "desc": {
        "en": "The Maldives' first discovered dive site featuring dramatic coral walls, overhangs, sea turtles, and reef sharks.",
        "es": "El primer punto de buceo descubierto en Maldivas con paredes de coral, tortugas marinas y tiburones de arrecife.",
        "pt": "O primeiro ponto de mergulho descoberto nas Maldivas com paredes de coral, tartarugas e tubarões de recife."
      }
    },
    {
      "name": {
        "en": "Underwater Dining at Ithaa & Subsix",
        "es": "Restaurantes Submarinos Ithaa y Subsix",
        "pt": "Restaurantes Submarinos Ithaa e Subsix"
      },
      "image": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800",
      "desc": {
        "en": "Dine 5 meters below ocean surface inside clear acrylic glass domes surrounded by marine sealife.",
        "es": "Cene a 5 metros bajo la superficie del mar dentro de cúpulas acrílicas transparentes rodeadas de vida marina.",
        "pt": "Jante a 5 metros sob a superfície do mar dentro de cúpulas acrílicas transparentes cercadas de vida marinha."
      }
    }
  ],
  "signatureExperiences": [
    {
      "title": {
        "en": "Overwater Private Sunset Villa Dining",
        "es": "Cena Privada al Atardecer en Villa Sobre el Agua",
        "pt": "Jantar Privativo ao Pôr do Sol em Villa Sobre as Águas"
      },
      "desc": {
        "en": "Savor a private multi-course seafood dinner served on your private overwater villa deck overlooking golden ocean horizons.",
        "es": "Disfrute de una cena privada de mariscos en la terraza de su villa sobre el agua contemplando el atardecer.",
        "pt": "Desfrute de um jantar privativo de frutos do mar no terraço da sua villa sobre as águas."
      },
      "image": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800"
    },
    {
      "title": {
        "en": "Private Seaplane Scenic Charter",
        "es": "Vuelo Privado Panorámico en Hidroavión",
        "pt": "Voo Privado Panorâmico de Hidroavião"
      },
      "desc": {
        "en": "Enjoy spectacular aerial views of emerald coral ring atolls and turquoise ocean lagoons.",
        "es": "Disfrute de espectaculares vistas aéreas de los atolones de coral y lagunas turquesas.",
        "pt": "Desfrute de espetaculares vistas aéreas dos atóis de coral e lagoas azul-turquesa."
      },
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
    },
    {
      "title": {
        "en": "Snorkeling with Whale Sharks & Manta Rays",
        "es": "Snorkel con Tiburones Ballena y Mantarrayas",
        "pt": "Mergulho com Tubarões-Baleia e Arraias Manta"
      },
      "desc": {
        "en": "Guided private excursion to swim alongside gentle whale sharks and graceful manta rays in Baa Atoll.",
        "es": "Excursión privada guiada para nadar junto a dóciles tiburones ballena y mantarrayas en el Atolón Baa.",
        "pt": "Excursão privativa guiada para nadar ao lado de tubarões-baleia e arraias manta no Atol Baa."
      },
      "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800"
    },
    {
      "title": {
        "en": "Underwater Fine Dining Experience",
        "es": "Experiencia Gastronómica de Lujo Submarina",
        "pt": "Experiência Gastronômica de Luxo Submarina"
      },
      "desc": {
        "en": "Indulge in a 6-course champagne lunch surrounded by coral reefs, tropical fish, and reef sharks.",
        "es": "Disfrute de un almuerzo con champán rodeado de arrecifes de coral, peces tropicales y tiburones de arrecife.",
        "pt": "Desfrute de um almoço com champanhe cercado por recifes de coral, peixes tropicais e tubarões."
      },
      "image": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800"
    },
    {
      "title": {
        "en": "Luxury Yacht Island Hopping & Sandbank Picnic",
        "es": "Excursión en Yate a Bancos de Arena Privados",
        "pt": "Excursão de Iate para Bancos de Areia Privativos"
      },
      "desc": {
        "en": "Cruise to a secluded private sandbank in the middle of the ocean for champagne picnics and swimming.",
        "es": "Navegue hasta un banco de arena privado en mitad del océano para un picnic con champán y baño exclusivo.",
        "pt": "Navegue para um banco de areia privativo no meio do oceano para um piquenique com champanhe."
      },
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
    },
    {
      "title": {
        "en": "Deep Sea Ayurvedic Spa Sanctuary Retreat",
        "es": "Retiro de Spa Ayurvédico en el Océano",
        "pt": "Retiro de Spa Ayurvídico no Oceano"
      },
      "desc": {
        "en": "Experience overwater glass-floor massage treatment rooms with soothing ocean views and custom essential oils.",
        "es": "Disfrute de salas de masaje sobre el agua con suelo de cristal, vistas al océano y aceites esenciales.",
        "pt": "Desfrute de salas de massagem sobre as águas com piso de vidro, vistas do oceano e óleos essenciais."
      },
      "image": "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=800"
    }
  ],
  "hotels": [
    {
      "name": "Soneva Jani, Noonu Atoll",
      "rating": "Luxury 5-Star Overwater Resort",
      "image": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
      "desc": {
        "en": "An iconic luxury sanctuary offering massive overwater villas with water slides into the lagoon, retractable roofs for stargazing, and private pools.",
        "es": "El icónico resort de lujo que ofrece villas gigantes sobre el agua con toboganes a la laguna y techos retráctiles para ver las estrellas.",
        "pt": "O icônico resort de luxo oferecendo villas gigantes sobre as águas com tobogãs para a lagoa e tetos retráteis para observar as estrelas."
      }
    },
    {
      "name": "One&Only Reethi Rah, North Male Atoll",
      "rating": "Luxury 5-Star Private Island Resort",
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "desc": {
        "en": "An ultra-exclusive island retreat featuring private beaches, overwater villas, 12 pristine beaches, and world-class spa sanctuaries.",
        "es": "Un refugio ultranexclusivo con 12 playas privadas, villas sobre el agua y spas de categoría mundial.",
        "pt": "Um refúgio ultraexclusivo com 12 praias privadas, villas sobre as águas e spas de categoria mundial."
      }
    }
  ],
  "thingsToDo": [
    {
      "en": "Private Seaplane Arrival & Overwater Villa Experience",
      "es": "Llegada Privada en Hidroavión y Experiencia en Villa Sobre el Agua",
      "pt": "Chegada Privada de Hidroavião e Experiência em Villa Sobre as Águas"
    },
    {
      "en": "Baa Atoll Manta Ray & Whale Shark Snorkeling Tour",
      "es": "Tour de Snorkel con Mantarrayas y Tiburones Ballena en Baa Atoll",
      "pt": "Tour de Mergulho com Arraias Manta e Tubarões-Baleia no Atol Baa"
    },
    {
      "en": "Underwater Restaurant Fine Dining at Ithaa",
      "es": "Cena de Lujo en el Restaurante Submarino Ithaa",
      "pt": "Jantar de Luxo no Restaurante Submarino Ithaa"
    },
    {
      "en": "Private Yacht Cruise & Sandbank Champagne Picnic",
      "es": "Crucero Privado en Yate y Picnic con Champán en Banco de Arena",
      "pt": "Cruzeiro Privado de Iate e Piquenique com Champanhe em Banco de Areia"
    },
    {
      "en": "Overwater Glass-Floor Spa Treatment",
      "es": "Tratamiento de Spa Sobre el Agua con Suelo de Cristal",
      "pt": "Tratamento de Spa Sobre as Águas com Piso de Vidro"
    },
    {
      "en": "Night Sea of Stars Bioluminescent Plankton Viewing",
      "es": "Observación Nocturna del Plancton Bioluminiscente Mar de Estrellas",
      "pt": "Observação Noturna do Plâncton Bioluminescente Mar de Estrelas"
    }
  ],
  "suggestedItinerary": {
    "en": "7 Days / 6 Nights: Day 1 Seaplane arrival & Overwater Sunset Villa Check-in. Day 2 Private Lagoon Snorkeling & Reef Discovery. Day 3 Baa Atoll Manta Ray & Whale Shark Excursion. Day 4 Private Sandbank Picnic & Sunset Luxury Yacht Cruise. Day 5 Underwater Restaurant Dining & Overwater Glass-Floor Spa. Day 6 Water Sports & Bioluminescent Plankton Night Viewing. Day 7 Leisure Breakfast & Seaplane Transfer.",
    "es": "7 Días / 6 Noches: Día 1 Llegada en hidroavión y check-in en villa sobre el agua. Día 2 Snorkel en la laguna y descubrimiento de arrecifes. Día 3 Excursión de mantarrayas y tiburones ballena en el atolón Baa. Día 4 Picnic privado en banco de arena y crucero en yate. Día 5 Cena en restaurante submarino y spa sobre el agua. Día 6 Deportes acuáticos y observación de plancton bioluminiscente. Día 7 Desayuno y traslado en hidroavión.",
    "pt": "7 Dias / 6 Noites: Dia 1 Chegada de hidroavião e check-in em villa sobre as águas. Dia 2 Mergulho na lagoa e descoberta de recifes. Dia 3 Excursão de arraias manta e tubarões-baleia no atol Baa. Dia 4 Piquenique em banco de areia e cruzeiro de iate. Dia 5 Jantar em restaurante submarino e spa sobre as águas. Dia 6 Esportes aquáticos e observação de plâncton bioluminescente. Dia 7 Café da manhã e traslado de hidroavião."
  },
  "travelTips": [
    {
      "en": "30-day tourist visa-on-arrival is granted free of charge to all nationalities at Male Velana Airport.",
      "es": "Se otorga visa turística gratuita a la llegada de 30 días a todas las nacionalidades.",
      "pt": "Visto turístico gratuito na chegada de 30 dias é concedido a todas as nacionalidades."
    },
    {
      "en": "November to April is the dry northeast monsoon season with calm crystal turquoise waters and bright sunshine.",
      "es": "De noviembre a abril es la estación seca con aguas turquesas cristalinas y sol radiante.",
      "pt": "De novembro a abril é a estação seca com águas azul-turquesa cristalinas e sol brilhante."
    },
    {
      "en": "Speedboat transfers connect resorts in Male Atoll, while outer atolls require breathtaking seaplane flights.",
      "es": "Las lanchas rápidas conectan los resorts cercanos y los atolones lejanos requieren hidroavión.",
      "pt": "Lanchas rápidas conectam os resorts próximos e os atóis distantes requerem hidroavião."
    },
    {
      "en": "All-Inclusive or Half-Board meal packages are highly recommended for luxury resort island stays.",
      "es": "Se recomiendan paquetes Todo Incluido o Media Pensión para estancias en resorts de lujo.",
      "pt": "Recomenda-se pacotes Tudo Incluído ou Meia Pensão para estadias em resorts de luxo."
    },
    {
      "en": "Pack light cotton resort wear, reef-safe sunscreen, sunglasses, and swimwear for sunny island days.",
      "es": "Lleve ropa ligera de resort, protector solar seguro para arrecifes y trajes de baño.",
      "pt": "Leve roupas leves de resort, protetor solar seguro para recifes e trajes de banho."
    }
  ],
  "faqs": [
    {
      "q": {
        "en": "What is the best time of year to visit the Maldives?",
        "es": "¿Cuál es la mejor época del año para visitar las Maldivas?",
        "pt": "Qual é a melhor época do ano para visitar as Maldivas?"
      },
      "a": {
        "en": "November to April offers dry sunny days, calm blue lagoons, and perfect visibility for diving and snorkeling.",
        "es": "De noviembre a abril ofrece días soleados y secos, lagunas tranquilas y visibilidad perfecta.",
        "pt": "De novembro a abril oferece dias ensolarados, lagoas calmas e visibilidade perfeita para mergulho."
      }
    },
    {
      "q": {
        "en": "Is a seaplane transfer necessary in the Maldives?",
        "es": "¿Es necesario un traslado en hidroavión en las Maldivas?",
        "pt": "É necessário traslado de hidroavião nas Maldivas?"
      },
      "a": {
        "en": "Resorts located outside North & South Male Atolls require a scenic seaplane transfer which is an unforgettable flight experience.",
        "es": "Los resorts ubicados fuera de los atolones de Malé requieren hidroavión, una experiencia de vuelo espectacular.",
        "pt": "Resorts fora dos atóis de Malé exigem hidroavião, uma experiência de voo espectacular."
      }
    },
    {
      "q": {
        "en": "Are the Maldives suitable for families with children?",
        "es": "¿Son adecuadas las Maldivas para familias con niños?",
        "pt": "As Maldivas são adequadas para famílias com crianças?"
      },
      "a": {
        "en": "Yes! Many luxury resorts feature state-of-the-art Kids Clubs, shallow warm lagoons, and family beach villas.",
        "es": "¡Sí! Muchos resorts cuentan con Kids Clubs, lagunas poco profundas y villas familiares en la playa.",
        "pt": "Sim! Muitos resorts contam com Kids Clubs, lagoas rasas e villas familiares na praia."
      }
    },
    {
      "q": {
        "en": "Do I need a visa to enter the Maldives?",
        "es": "¿Necesito visa para entrar a las Maldivas?",
        "pt": "Preciso de visto para entrar nas Maldivas?"
      },
      "a": {
        "en": "No advance visa is required. A free 30-day visa on arrival is provided to all passport holders.",
        "es": "No se requiere visa previa. Se concede visa gratuita de 30 días a la llegada.",
        "pt": "Não é necessário visto prévio. É concedido visto gratuito de 30 dias na chegada."
      }
    },
    {
      "q": {
        "en": "Can the Maldives be combined with Sri Lanka or Dubai?",
        "es": "¿Se pueden combinar las Maldivas con Sri Lanka o Dubái?",
        "pt": "É possível combinar as Maldivas com Sri Lanka ou Dubai?"
      },
      "a": {
        "en": "Yes! Direct short flights connect Male with Colombo (1 hour) and Dubai (4 hours), making ideal twin-center trips.",
        "es": "¡Sí! Vuelos directos conectan Malé con Colombo (1 hora) y Dubái (4 horas).",
        "pt": "Sim! Voos diretos conectam Malé a Colombo (1 hora) e Dubai (4 horas)."
      }
    }
  ],
  "seo": {
    "en": {
      "title": "Maldives Luxury Travel | Overwater Sunset Villas & Marine Sanctuaries",
      "description": "Experience ultimate luxury in the Maldives with private overwater villas, Baa Atoll whale shark snorkeling, underwater fine dining, and seaplane flights.",
      "keywords": "Maldives luxury travel, Maldives overwater villa, Baa Atoll, Maldives honeymoon, Soneva Jani, One&Only Reethi Rah"
    },
    "es": {
      "title": "Viajes de Lujo a Maldivas | Villas Sobre el Agua y Santuarios Marinos",
      "description": "Descubre el máximo lujo en Maldivas con villas sobre el agua, snorkel con tiburones ballena en el Atolón Baa y cenadores submarinos.",
      "keywords": "viajes de lujo a Maldivas, villa sobre el agua Maldivas, atolon Baa, luna de miel Maldivas"
    },
    "pt": {
      "title": "Viagens de Luxo para as Maldivas | Villas Sobre as Águas e Santuários Marinhos",
      "description": "Descubra o auge do luxo nas Maldivas com villas sobre as águas, mergulho com tubarões-baleia no Atol Baa e restaurantes submarinos.",
      "keywords": "viagens de luxo para Maldivas, villa sobre as aguas Maldivas, atol Baa, lua de mel Maldivas"
    }
  }
},
  {
    slug: "laos",
    title: { en: "Laos", es: "Laos", pt: "Laos" },
    tagline: { 
      en: "UNESCO Luang Prabang, Mekong River Cruises & Emerald Falls", 
      es: "Luang Prabang UNESCO, Cruceros por el Mekong y Cascadas Esmeralda", 
      pt: "Luang Prabang UNESCO, Cruzeiros pelo Mekong e Cachoeiras Esmeralda" 
    },
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1200"
    ],
    description: { 
      en: "Discover Southeast Asia's hidden jewel. Golden Buddhist temples, peaceful alms giving ceremony at dawn, and multi-tiered Kuang Si waterfall cascades.", 
      es: "Descubra la joya oculta del sudeste asiático. Templos budistas dorados, ceremonias de limosna al amanecer y las espectaculares cascadas Kuang Si.", 
      pt: "Descubra a joia oculta do sudeste asiático. Templos budistas dourados, cerimônias de esmolas ao amanhecer e as cachoeiras Kuang Si." 
    },
    bestTime: { en: "October to April", es: "De octubre a abril", pt: "De outubro a abril" },
    attractions: [
      {
        name: { en: "Kuang Si Waterfalls", es: "Cascadas Kuang Si", pt: "Cachoeiras Kuang Si" },
        image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=800",
        desc: { en: "Stunning turquoise multi-tiered cascades in lush tropical jungle.", es: "Cascadas turquesas de múltiples niveles rodeadas de exuberante selva.", pt: "Cachoeiras turquesas cercadas por floresta tropical exuberante." }
      }
    ],
    thingsToDo: [
      { en: "Private Sunset Mekong River Cruise & Luang Prabang Night Market", es: "Crucero privado por el río Mekong al atardecer y Mercado Nocturno", pt: "Cruzeiro privado no rio Mekong ao pôr-do-sol e Mercado Noturno" }
    ],
    suggestedItinerary: { 
      en: "Day 1: Arrival Luang Prabang. Day 2: Morning Alms Giving & Kuang Si Falls. Day 3: Pak Ou Caves Mekong Cruise. Day 4: Vang Vieng Scenic Valley.", 
      es: "Día 1: Llegada a Luang Prabang. Día 2: Ceremonia de limosnas y Cascadas Kuang Si. Día 3: Crucero Cueva Pak Ou. Día 4: Valle Vang Vieng.", 
      pt: "Dia 1: Chegada em Luang Prabang. Dia 2: Cerimônia de esmolas e Cachoeiras Kuang Si. Dia 3: Cruzeiro Gruta Pak Ou. Dia 4: Vale Vang Vieng." 
    },
    travelTips: [
      { en: "E-visa and Visa-on-Arrival readily available for tourist visits.", es: "E-visa y visa a la llegada disponibles fácilmente para turismo.", pt: "E-visa e visto na chegada disponíveis para turismo." }
    ],
    faqs: [
      {
        q: { en: "Why visit Laos?", es: "¿Por qué visitar Laos?", pt: "Por que visitar Laos?" },
        a: { en: "Laos is one of Asia's most authentic, tranquil, and untouched cultural destinations.", es: "Laos es uno de los destinos culturales más auténticos y serenos de Asia.", pt: "Laos é um dos destinos culturais mais autênticos e tranquilos da Ásia." }
      }
    ]
  },
  {
    slug: "nepal",
    title: { en: "Nepal", es: "Nepal", pt: "Nepal" },
    tagline: { 
      en: "Everest Mountain Flights, Sacred Temples & Pokhara Lake", 
      es: "Vuelos a los Picos del Everest, Templos Sagrados y Lago Pokhara", 
      pt: "Voos nos Picos do Everest, Templos Sagrados e Lago Pokhara" 
    },
    region: "Himalayas",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
    ],
    description: { 
      en: "The Himalayan roof of the world. Explore ancient UNESCO Kathmandu Durbar Square, mountain flights over Mt. Everest, and serene lake reflection in Pokhara.", 
      es: "El techo del mundo en el Himalaya. Explore la histórica Plaza Durbar de Katmandú, vuelos en helicóptero sobre el Everest y el lago Pokhara.", 
      pt: "O teto do mundo no Himalaia. Explore a histórica Praça Durbar em Catmandu, voos de helicóptero sobre o Everest e o lago Pokhara." 
    },
    bestTime: { en: "September to November & March to May", es: "De septiembre a noviembre y marzo a mayo", pt: "De setembro a novembro e março a maio" },
    attractions: [
      {
        name: { en: "Everest Mountain Scenic Flight", es: "Vuelo Panorámico al Monte Everest", pt: "Voo Panorâmico no Monte Everest" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
        desc: { en: "Fly up close to the highest peak on earth with guaranteed window seats.", es: "Vuele de cerca junto al pico más alto de la tierra con asiento de ventana garantizado.", pt: "Voe bem perto do pico mais alto da terra com assento de janela garantido." }
      }
    ],
    thingsToDo: [
      { en: "Kathmandu Durbar Square & Swayambhunath Monkey Temple", es: "Plaza Durbar de Katmandú y Templo de los Monos Swayambhunath", pt: "Praça Durbar de Catmandu e Templo dos Macacos Swayambhunath" }
    ],
    suggestedItinerary: { 
      en: "Day 1-2: Kathmandu Heritage & Pashupatinath. Day 3: Everest Mountain Flight. Day 4-5: Pokhara Fewa Lake Boat Ride & Annapurna Sunrise.", 
      es: "Día 1-2: Patrimonio de Katmandú. Día 3: Vuelo al Everest. Día 4-5: Paseo en barco por el lago Fewa en Pokhara y amanecer en Annapurna.", 
      pt: "Dia 1-2: Catmandu Patrimônio. Dia 3: Voo no Everest. Dia 4-5: Passeio de barco no lago Fewa em Pokhara e nascer do sol em Annapurna." 
    },
    travelTips: [
      { en: "Easy Visa-on-Arrival at Tribhuvan International Airport Kathmandu.", es: "Visa a la llegada muy sencilla en el Aeropuerto Internacional de Katmandú.", pt: "Visto na chegada muito simples no Aeroporto Internacional de Catmandu." }
    ],
    faqs: [
      {
        q: { en: "Do I need to trek to see Everest?", es: "¿Necesito hacer senderismo para ver el Everest?", pt: "Preciso fazer trekking para ver o Everest?" },
        a: { en: "No! Our mountain flights and luxury helicopter tours take you directly to Everest Base Camp comfortably.", es: "¡No! Nuestros vuelos de montaña y tours en helicóptero le llevan cómodamente.", pt: "Não! Nossos voos e tours de helicóptero levam você confortavelmente." }
      }
    ]
  },
  {
    slug: "singapore",
    title: { en: "Singapore", es: "Singapur", pt: "Singapura" },
    tagline: { 
      en: "Marina Bay Sands, Gardens by the Bay & World-Class Shopping", 
      es: "Marina Bay Sands, Jardines de la Bahía y Compras de Clase Mundial", 
      pt: "Marina Bay Sands, Jardins da Baía e Compras de Classe Mundial" 
    },
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200"
    ],
    description: { 
      en: "The Lion City blends futuristic architecture, Michelin street food hawkers, lush botanical gardens, and world-class luxury shopping.", 
      es: "La Ciudad de los Leones combina arquitectura futurista, gastronomía galardonada, jardines botánicos exuberantes y compras de lujo.", 
      pt: "A Cidade dos Leões combina arquitetura futurista, gastronomia premiada, jardins botânicos e compras de luxo." 
    },
    bestTime: { en: "Year-round", es: "Todo el año", pt: "Todo o ano" },
    attractions: [
      {
        name: { en: "Gardens by the Bay & Supertree Grove", es: "Jardines de la Bahía y Árboles Gigantes", pt: "Jardins da Baía e Árvores Gigantes" },
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800",
        desc: { en: "Iconic illuminated avatar-like Supertrees and Cloud Forest greenhouse.", es: "Superárboles iluminados e invernaderos de selva tropical bajo cúpulas.", pt: "Superárvores iluminadas e estufas de floresta tropical sob cúpulas." }
      }
    ],
    thingsToDo: [
      { en: "Marina Bay Sands Skypark & Night Safari Zoo Tour", es: "Mirador Marina Bay Sands y Tour Nocturno por el Zoo Night Safari", pt: "Mirante Marina Bay Sands e Tour Noturno no Zoo Night Safari" }
    ],
    suggestedItinerary: { 
      en: "Day 1: Changi Jewel & Marina Bay Light Show. Day 2: Gardens by the Bay & Flower Dome. Day 3: Sentosa Island & Universal Studios. Day 4: Orchard Road Shopping.", 
      es: "Día 1: Joya de Changi y Espectáculo de Luces. Día 2: Jardines de la Bahía. Día 3: Isla Sentosa. Día 4: Compras en Orchard Road.", 
      pt: "Dia 1: Joia de Changi e Espetáculo de Luzes. Dia 2: Jardins da Baía. Dia 3: Ilha Sentosa. Dia 4: Compras na Orchard Road." 
    },
    travelTips: [
      { en: "Singapore SG Arrival Card must be submitted online within 3 days prior to arrival.", es: "La tarjeta de entrada SG Arrival Card se envía en línea 3 días antes.", pt: "O cartão SG Arrival Card deve ser enviado online 3 dias antes." }
    ],
    faqs: [
      {
        q: { en: "Is Singapore clean and safe?", es: "¿Es Singapur limpio y seguro?", pt: "Singapura é limpa e segura?" },
        a: { en: "Singapore is globally ranked as one of the cleanest, safest, and most efficient cities.", es: "Singapur es clasificada mundialmente como una de las ciudades más limpias y seguras del planeta.", pt: "Singapura é classificada mundialmente como uma das cidades mais limpas e seguras do planeta." }
      }
    ]
  },
  {
  "slug": "malaysia",
  "title": {
    "en": "Malaysia",
    "es": "Malasia",
    "pt": "Malásia"
  },
  "tagline": {
    "en": "Tropical Islands, Cultural Cities, Rainforests & Malaysian Luxury",
    "es": "Islas Tropicales, Ciudades Culturales, Selvas y Lujo Malasio",
    "pt": "Ilhas Tropicais, Cidades Culturais, Florestas Tropicais e Luxo Malaio"
  },
  "region": "Southeast Asia (Malaysia)",
  "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1600",
  "gallery": [
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200",
    "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=1200",
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200",
    "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=1200",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1200",
    "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200",
    "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1200",
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200"
  ],
  "description": {
    "en": "Discover Malaysia, a captivating Southeast Asian destination where futuristic cities, multicultural heritage, tropical islands, lush rainforests and extraordinary cuisine come together.",
    "es": "Descubre Malasia, un fascinante destino del Sudeste Asiático donde ciudades futuristas, patrimonio multicultural, islas tropicales, exuberantes selvas y una extraordinaria gastronomía se unen.",
    "pt": "Descubra a Malásia, um fascinante destino do Sudeste Asiático onde cidades futuristas, patrimônio multicultural, ilhas tropicais, florestas exuberantes e uma gastronomia extraordinária se encontram."
  },
  "overview": {
    "en": "Discover Malaysia, a captivating Southeast Asian destination where futuristic cities, multicultural heritage, tropical islands, lush rainforests and extraordinary cuisine come together. From the iconic skyline of Kuala Lumpur and the heritage streets of George Town to the emerald landscapes of Cameron Highlands and the beaches of Langkawi, Malaysia offers remarkable variety within a single journey. Experience vibrant Malay, Chinese, Indian and indigenous influences through historic neighbourhoods, temples, mosques, markets and celebrated food traditions. Explore modern shopping districts, relax on tropical beaches, discover tea plantations in the cool highlands and cruise through mangrove landscapes. With sophisticated hotels, excellent infrastructure, diverse landscapes and a rich culinary culture, Malaysia is an ideal destination for luxury holidays, family escapes, romantic getaways, island retreats and multi-destination Southeast Asia journeys.",
    "es": "Descubre Malasia, un fascinante destino del Sudeste Asiático donde ciudades futuristas, patrimonio multicultural, islas tropicales, exuberantes selvas y una extraordinaria gastronomía se unen. Desde el icónico skyline de Kuala Lumpur y las calles históricas de George Town hasta los paisajes esmeralda de Cameron Highlands y las playas de Langkawi, Malasia ofrece una extraordinaria variedad en un solo viaje. Descubre las influencias malayas, chinas, indias e indígenas a través de barrios históricos, templos, mezquitas, mercados y reconocidas tradiciones gastronómicas. Explora modernos distritos comerciales, relájate en playas tropicales, descubre plantaciones de té en las tierras altas y navega por paisajes de manglares. Con hoteles sofisticados, excelentes infraestructuras, paisajes diversos y una rica cultura culinaria, Malasia es ideal para vacaciones de lujo, escapadas familiares, viajes románticos, retiros en islas y circuitos por el Sudeste Asiático.",
    "pt": "Descubra a Malásia, um fascinante destino do Sudeste Asiático onde cidades futuristas, patrimônio multicultural, ilhas tropicais, florestas exuberantes e uma gastronomia extraordinária se encontram. Do icônico skyline de Kuala Lumpur e das ruas históricas de George Town às paisagens esmeralda de Cameron Highlands e às praias de Langkawi, a Malásia oferece uma incrível variedade em uma única viagem. Conheça as influências malaias, chinesas, indianas e indígenas através de bairros históricos, templos, mesquitas, mercados e reconhecidas tradições gastronômicas. Explore modernos distritos comerciais, relaxe em praias tropicais, descubra plantações de chá nas terras altas e navegue por paisagens de manguezais. Com hotéis sofisticados, excelente infraestrutura, paisagens diversificadas e uma rica cultura culinária, a Malásia é ideal para férias de luxo, viagens em família, escapadas românticas, retiros em ilhas e roteiros pelo Sudeste Asiático."
  },
  "history": {
    "en": "Malaysia's history has been shaped by maritime trade, ancient Malay kingdoms, Islamic traditions, Chinese and Indian migration, European colonial powers and diverse indigenous communities. The strategic position of the Malay Peninsula made it an important crossroads for merchants travelling between East and West. Melaka became one of the region's most significant trading ports and later reflected Portuguese, Dutch and British influences. George Town in Penang developed as another important trading centre, creating a distinctive multicultural heritage visible in its shophouses, temples, mosques and historic streets. Today, Malaysia's heritage can be experienced through historic cities, royal traditions, religious architecture, traditional crafts and diverse communities across the peninsula and Borneo.",
    "es": "La historia de Malasia ha estado marcada por el comercio marítimo, antiguos reinos malayos, tradiciones islámicas, migraciones chinas e indias, potencias coloniales europeas y diversas comunidades indígenas. La posición estratégica de la península malaya la convirtió en un importante punto de encuentro para comerciantes entre Oriente y Occidente. Melaka se convirtió en uno de los principales puertos comerciales de la región y posteriormente recibió influencias portuguesas, neerlandesas y británicas. George Town, en Penang, se desarrolló como otro importante centro comercial, creando un patrimonio multicultural visible en sus casas comerciales, templos, mezquitas y calles históricas. Hoy, el patrimonio de Malasia puede descubrirse a través de ciudades históricas, tradiciones reales, arquitectura religiosa, artesanía tradicional y comunidades diversas de la península y Borneo.",
    "pt": "A história da Malásia foi moldada pelo comércio marítimo, antigos reinos malaios, tradições islâmicas, migrações chinesas e indianas, potências coloniais europeias e diversas comunidades indígenas. A posição estratégica da Península Malaia tornou-a um importante ponto de encontro para comerciantes entre o Oriente e o Ocidente. Melaka tornou-se um dos principais portos comerciais da região e posteriormente recebeu influências portuguesas, holandesas e britânicas. George Town, em Penang, desenvolveu-se como outro importante centro comercial, criando um patrimônio multicultural visível em suas casas comerciais, templos, mesquitas e ruas históricas. Hoje, o patrimônio da Malásia pode ser vivenciado através de cidades históricas, tradições reais, arquitetura religiosa, artesanato tradicional e comunidades diversas da península e de Bornéu."
  },
  "culture": {
    "en": "Malaysia is defined by extraordinary cultural diversity, with Malay, Chinese, Indian and indigenous traditions living alongside one another. Religious festivals, traditional markets, historic neighbourhoods, handicrafts, music and food create a rich cultural landscape. Islam is the country's official religion, while Buddhism, Hinduism, Christianity and traditional beliefs are also widely represented. Visitors can experience this diversity through mosques, temples, churches, Chinese clan houses, Indian districts and Malay villages. Traditional batik, songket textiles, pewter craftsmanship, woodwork and local handicrafts also form an important part of Malaysia's cultural identity.",
    "es": "Malasia se caracteriza por una extraordinaria diversidad cultural, donde las tradiciones malayas, chinas, indias e indígenas conviven. Los festivales religiosos, mercados tradicionales, barrios históricos, artesanía, música y gastronomía crean un paisaje cultural extraordinariamente rico. El islam es la religión oficial del país, mientras que el budismo, hinduismo, cristianismo y creencias tradicionales también están ampliamente representados. Los visitantes pueden descubrir esta diversidad a través de mezquitas, templos, iglesias, casas de clanes chinos, barrios indios y aldeas malayas. El batik tradicional, los textiles songket, la artesanía en peltre, la madera y otros productos artesanales también forman una parte importante de la identidad cultural de Malasia.",
    "pt": "A Malásia é marcada por uma extraordinária diversidade cultural, onde tradições malaias, chinesas, indianas e indígenas convivem. Festivais religiosos, mercados tradicionais, bairros históricos, artesanato, música e gastronomia criam uma paisagem cultural extremamente rica. O islamismo é a religião oficial do país, enquanto budismo, hinduísmo, cristianismo e crenças tradicionais também estão amplamente presentes. Os visitantes podem vivenciar essa diversidade através de mesquitas, templos, igrejas, casas de clãs chineses, bairros indianos e vilarejos malaios. O batik tradicional, os tecidos songket, o artesanato em estanho, a madeira e outros produtos artesanais também fazem parte importante da identidade cultural da Malásia."
  },
  "localFood": {
    "en": "Malaysia is one of Southeast Asia's great culinary destinations, shaped by Malay, Chinese, Indian, Peranakan and indigenous influences. Its food culture ranges from vibrant hawker stalls and traditional markets to sophisticated restaurants and contemporary fine dining. Signature dishes include nasi lemak, char kway teow, laksa, satay, roti canai, rendang, nasi kandar and Hainanese chicken rice. Regional specialties vary considerably, making food an essential part of travelling across Malaysia. Kuala Lumpur, Penang and Melaka are particularly rewarding for culinary exploration, while Langkawi offers a combination of traditional Malay cuisine, seafood and refined resort dining.",
    "es": "Malasia es uno de los grandes destinos gastronómicos del Sudeste Asiático, influenciado por las tradiciones malayas, chinas, indias, peranakan e indígenas. Su cultura culinaria abarca desde animados puestos callejeros y mercados tradicionales hasta restaurantes sofisticados y alta cocina contemporánea. Entre sus platos más representativos se encuentran el nasi lemak, char kway teow, laksa, satay, roti canai, rendang, nasi kandar y arroz con pollo de Hainan. Las especialidades regionales varían considerablemente, convirtiendo la gastronomía en una parte esencial del viaje por Malasia. Kuala Lumpur, Penang y Melaka son especialmente interesantes para descubrir la gastronomía, mientras que Langkawi combina cocina malaya tradicional, mariscos y restaurantes sofisticados en resorts.",
    "pt": "A Malásia é um dos grandes destinos gastronômicos do Sudeste Asiático, influenciado pelas tradições malaias, chinesas, indianas, peranakan e indígenas. Sua cultura culinária vai de animadas barracas de rua e mercados tradicionais a restaurantes sofisticados e alta gastronomia contemporânea. Entre os pratos mais emblemáticos estão nasi lemak, char kway teow, laksa, satay, roti canai, rendang, nasi kandar e arroz com frango à Hainan. As especialidades variam bastante de uma região para outra, tornando a gastronomia uma parte essencial de qualquer viagem pela Malásia. Kuala Lumpur, Penang e Melaka são especialmente interessantes para explorar a gastronomia, enquanto Langkawi combina culinária malaia tradicional, frutos do mar e restaurantes sofisticados em resorts."
  },
  "bestTime": {
    "en": "December to March",
    "es": "De diciembre a marzo",
    "pt": "De dezembro a março"
  },
  "attractions": [
    {
      "name": {
        "en": "Petronas Twin Towers, Kuala Lumpur",
        "es": "Torres Petronas, Kuala Lumpur",
        "pt": "Torres Petronas, Kuala Lumpur"
      },
      "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800",
      "desc": {
        "en": "Visit Malaysia's most recognisable architectural landmark and enjoy spectacular views of Kuala Lumpur from the Skybridge and observation areas.",
        "es": "Visita el monumento arquitectónico más reconocible de Malasia y disfruta de espectaculares vistas de Kuala Lumpur desde el Skybridge y sus miradores.",
        "pt": "Visite o marco arquitetônico mais reconhecido da Malásia e desfrute de vistas espetaculares de Kuala Lumpur a partir do Skybridge e dos mirantes."
      }
    },
    {
      "name": {
        "en": "Batu Caves",
        "es": "Cuevas de Batu",
        "pt": "Cavernas de Batu"
      },
      "image": "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=800",
      "desc": {
        "en": "Discover the impressive limestone cave complex and colourful Hindu shrine just outside Kuala Lumpur, marked by its enormous golden Lord Murugan statue.",
        "es": "Descubre el impresionante complejo de cuevas de piedra caliza y santuario hindú a las afueras de Kuala Lumpur, reconocido por su enorme estatua dorada del dios Murugan.",
        "pt": "Descubra o impressionante complexo de cavernas de calcário e santuário hindu nos arredores de Kuala Lumpur, marcado pela enorme estátua dourada de Lord Murugan."
      }
    },
    {
      "name": {
        "en": "George Town, Penang",
        "es": "George Town, Penang",
        "pt": "George Town, Penang"
      },
      "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800",
      "desc": {
        "en": "Explore George Town's UNESCO-listed heritage, colourful shophouses, temples, street art and multicultural culinary traditions.",
        "es": "Explora el patrimonio de George Town, declarado por la UNESCO, con casas comerciales coloridas, templos, arte urbano y tradiciones gastronómicas multiculturales.",
        "pt": "Explore o patrimônio de George Town, reconhecido pela UNESCO, com casas comerciais coloridas, templos, arte urbana e tradições gastronômicas multiculturais."
      }
    },
    {
      "name": {
        "en": "Langkawi Island",
        "es": "Isla de Langkawi",
        "pt": "Ilha de Langkawi"
      },
      "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=800",
      "desc": {
        "en": "Experience Langkawi's tropical beaches, mangroves, ancient geological landscapes and spectacular island views from the SkyCab and Sky Bridge.",
        "es": "Descubre las playas tropicales, manglares, antiguos paisajes geológicos y espectaculares vistas de Langkawi desde el SkyCab y Sky Bridge.",
        "pt": "Descubra as praias tropicais, manguezais, antigas paisagens geológicas e vistas espetaculares de Langkawi a partir do SkyCab e Sky Bridge."
      }
    },
    {
      "name": {
        "en": "Cameron Highlands",
        "es": "Cameron Highlands",
        "pt": "Cameron Highlands"
      },
      "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800",
      "desc": {
        "en": "Escape to Malaysia's cool highlands, where rolling tea plantations, flower farms, forests and mountain landscapes create a refreshing contrast to the tropical lowlands.",
        "es": "Escápate a las frescas tierras altas de Malasia, donde plantaciones de té, jardines florales, bosques y paisajes montañosos ofrecen un contraste refrescante con las zonas tropicales.",
        "pt": "Descubra as terras altas mais frescas da Malásia, onde plantações de chá, jardins de flores, florestas e paisagens montanhosas criam um contraste refrescante com as regiões tropicais."
      }
    },
    {
      "name": {
        "en": "Melaka Historic City",
        "es": "Ciudad Histórica de Melaka",
        "pt": "Cidade Histórica de Melaka"
      },
      "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800",
      "desc": {
        "en": "Explore Melaka's colourful historic centre, where Portuguese, Dutch, British, Malay, Chinese and Peranakan influences have shaped a fascinating cultural landscape.",
        "es": "Explora el colorido centro histórico de Melaka, donde influencias portuguesas, neerlandesas, británicas, malayas, chinas y peranakan han creado un fascinante paisaje cultural.",
        "pt": "Explore o colorido centro histórico de Melaka, onde influências portuguesas, holandesas, britânicas, malaias, chinesas e peranakan criaram uma fascinante paisagem cultural."
      }
    }
  ],
  "signatureExperiences": [
    {
      "title": {
        "en": "Kuala Lumpur Skyline Experience",
        "es": "Experiencia del Skyline de Kuala Lumpur",
        "pt": "Experiência do Skyline de Kuala Lumpur"
      },
      "desc": {
        "en": "Enjoy a private evening combining Petronas Twin Towers, KLCC and sophisticated rooftop dining.",
        "es": "Disfruta de una velada privada combinando las Torres Petronas, KLCC y una sofisticada cena en un rooftop.",
        "pt": "Desfrute de uma noite privativa combinando as Torres Petronas, KLCC e um sofisticado jantar em um rooftop."
      },
      "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800"
    },
    {
      "title": {
        "en": "Malaysian Culinary Journey",
        "es": "Viaje Gastronómico por Malasia",
        "pt": "Jornada Culinária pela Malásia"
      },
      "desc": {
        "en": "Explore traditional hawker food, local markets and contemporary Malaysian cuisine across Kuala Lumpur and Penang.",
        "es": "Descubre comida hawker tradicional, mercados locales y gastronomía malasia contemporánea en Kuala Lumpur y Penang.",
        "pt": "Explore a tradicional comida hawker, mercados locais e a culinária malaia contemporânea em Kuala Lumpur e Penang."
      },
      "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800"
    },
    {
      "title": {
        "en": "Langkawi Island Escape",
        "es": "Escapada a la Isla de Langkawi",
        "pt": "Escapada para a Ilha de Langkawi"
      },
      "desc": {
        "en": "Combine private island cruising, tropical beaches, mangrove exploration and a sunset dinner by the sea.",
        "es": "Combina navegación privada entre islas, playas tropicales, exploración de manglares y una cena al atardecer junto al mar.",
        "pt": "Combine passeio privativo entre ilhas, praias tropicais, exploração de manguezais e um jantar ao pôr do sol à beira-mar."
      },
      "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=800"
    },
    {
      "title": {
        "en": "Cameron Highlands Tea Experience",
        "es": "Experiencia de Té en Cameron Highlands",
        "pt": "Experiência de Chá em Cameron Highlands"
      },
      "desc": {
        "en": "Visit a scenic tea plantation, explore the highlands and enjoy freshly brewed Malaysian tea surrounded by mountain landscapes.",
        "es": "Visita una plantación de té, explora las tierras altas y disfruta de té malasio recién preparado rodeado de paisajes montañosos.",
        "pt": "Visite uma plantação de chá, explore as terras altas e desfrute de chá malaio recém-preparado cercado por paisagens montanhosas."
      },
      "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800"
    },
    {
      "title": {
        "en": "Penang Heritage & Food Walk",
        "es": "Ruta de Patrimonio y Comida en Penang",
        "pt": "Caminhada de Patrimônio e Gastronomia em Penang"
      },
      "desc": {
        "en": "Discover George Town's heritage streets, temples, shophouses, street art and celebrated local cuisine.",
        "es": "Descubre las calles históricas, templos, casas comerciales, arte urbano y gastronomía de George Town.",
        "pt": "Descubra as ruas históricas, templos, casas comerciais, arte urbana e gastronomia de George Town."
      },
      "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800"
    },
    {
      "title": {
        "en": "Melaka Heritage Experience",
        "es": "Experiencia de Patrimonio en Melaka",
        "pt": "Experiência de Patrimônio em Melaka"
      },
      "desc": {
        "en": "Explore historic architecture and take a traditional trishaw ride through Melaka's colourful old quarter.",
        "es": "Explora la arquitectura histórica y realiza un paseo tradicional en trishaw por el colorido centro antiguo de Melaka.",
        "pt": "Explore a arquitetura histórica e faça um passeio tradicional de trishaw pelo colorido centro histórico de Melaka."
      },
      "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800"
    }
  ],
  "hotels": [
    {
      "name": "Mandarin Oriental, Kuala Lumpur",
      "rating": "Luxury 5-Star City Hotel",
      "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800",
      "desc": {
        "en": "A sophisticated luxury hotel in the heart of Kuala Lumpur, ideally positioned near KLCC, shopping, dining and the city's iconic skyline.",
        "es": "Un sofisticado hotel de lujo en el corazón de Kuala Lumpur, idealmente situado cerca de KLCC, zonas comerciales, restaurantes y el icónico skyline de la ciudad.",
        "pt": "Um sofisticado hotel de luxo no coração de Kuala Lumpur, com localização privilegiada perto de KLCC, áreas comerciais, restaurantes e do icônico skyline da cidade."
      }
    },
    {
      "name": "The Datai Langkawi",
      "rating": "Luxury 5-Star Rainforest & Beach Resort",
      "image": "https://images.unsplash.com/photo-1506665531195-3566fe274677?q=80&w=800",
      "desc": {
        "en": "An exceptional luxury retreat surrounded by ancient rainforest and overlooking the Andaman Sea, offering an immersive island experience focused on nature, wellness and privacy.",
        "es": "Un extraordinario refugio de lujo rodeado de selva tropical y con vistas al mar de Andamán, que ofrece una experiencia insular centrada en naturaleza, bienestar y privacidad.",
        "pt": "Um extraordinário refúgio de luxo cercado por floresta tropical e com vista para o Mar de Andamão, oferecendo uma experiência insular focada em natureza, bem-estar e privacidade."
      }
    }
  ],
  "thingsToDo": [
    {
      "en": "Petronas Twin Towers & KLCC Skybridge Tour",
      "es": "Tour por las Torres Petronas y el Skybridge de KLCC",
      "pt": "Tour pelas Torres Petronas e Skybridge do KLCC"
    },
    {
      "en": "Batu Caves Golden Murugan Shrine Excursion",
      "es": "Excursión a las Cuevas de Batu y Santuario de Murugan",
      "pt": "Excursão às Cavernas de Batu e Santuário de Murugan"
    },
    {
      "en": "George Town UNESCO Heritage & Street Art Walk",
      "es": "Ruta por el Patrimonio de la UNESCO y Arte Urbano de George Town",
      "pt": "Caminhada pelo Patrimônio da UNESCO e Arte Urbana em George Town"
    },
    {
      "en": "Langkawi SkyCab & Mangrove Boat Tour",
      "es": "Paseo en Teleférico SkyCab y Barco por Manglares en Langkawi",
      "pt": "Passeio de Teleférico SkyCab e Barco pelos Manguezais em Langkawi"
    },
    {
      "en": "Cameron Highlands Tea Plantation & Tasting Tour",
      "es": "Tour por la Plantación de Té y Catas en Cameron Highlands",
      "pt": "Tour pela Plantação de Chá e Degustação em Cameron Highlands"
    },
    {
      "en": "Melaka Historic Colonial Quarter Trishaw Ride",
      "es": "Paseo en Trishaw por el Barrio Colonial Histórico de Melaka",
      "pt": "Passeio de Trishaw pelo Bairro Colonial Histórico de Melaka"
    }
  ],
  "suggestedItinerary": {
    "en": "8 Days / 7 Nights: Day 1 Arrival in Kuala Lumpur, private airport transfer & evening skyline experience. Day 2 Explore Petronas Twin Towers, KLCC, Batu Caves & multicultural districts. Day 3 Travel into the cool Cameron Highlands, discover tea plantations & mountain scenery. Day 4 Morning tea experience, transfer to Penang & George Town walk. Day 5 Explore George Town UNESCO heritage architecture, street art & culinary scene. Day 6 Transfer to Langkawi, afternoon beach relaxation & luxury sunset dinner. Day 7 Private Langkawi island & mangrove cruise, SkyCab/Sky Bridge experience. Day 8 Leisure breakfast & private transfer to airport for departure.",
    "es": "8 Días / 7 Noches: Día 1 Llegada a Kuala Lumpur, traslado privado y skyline nocturno. Día 2 Torres Petronas, KLCC, Batu Caves y barrios culturales. Día 3 Viaje a Cameron Highlands, plantaciones de té y paisajes de montaña. Día 4 Experiencia de té, traslado a Penang y paseo por George Town. Día 5 Arquitectura histórica de George Town, arte urbano y gastronomía. Día 6 Traslado a Langkawi, tarde en la playa y cena al atardecer. Día 7 Crucero privado en Langkawi por manglares, SkyCab/Sky Bridge. Día 8 Desayuno y traslado privado al aeropuerto.",
    "pt": "8 Dias / 7 Noites: Dia 1 Chegada em Kuala Lumpur, traslado privativo e skyline noturno. Dia 2 Torres Petronas, KLCC, Cavernas de Batu e bairros culturais. Dia 3 Viagem para Cameron Highlands, plantações de chá e paisagens de montanha. Dia 4 Experiência de chá, traslado para Penang e passeio por George Town. Dia 5 Arquitetura histórica de George Town, arte urbana e gastronomia. Dia 6 Traslado para Langkawi, tarde na praia e jantar ao pôr do sol. Dia 7 Cruzeiro privativo em Langkawi pelos manguezais, SkyCab/Sky Bridge. Dia 8 Café da manhã e traslado privativo ao aeroporto."
  },
  "travelTips": [
    {
      "en": "Malaysia remains warm and humid throughout the year, so pack lightweight breathable clothing and prepare for tropical rain.",
      "es": "Malasia permanece cálida y húmeda durante todo el año; lleva ropa ligera y transpirable y prepárate para lluvias tropicales.",
      "pt": "A Malásia permanece quente e úmida durante todo o ano; leve roupas leves e respiráveis e esteja preparado para chuvas tropicais."
    },
    {
      "en": "Dress respectfully when visiting mosques, temples and other religious sites, and follow local instructions.",
      "es": "Viste respetuosamente al visitar mezquitas, templos y otros lugares religiosos y sigue las indicaciones locales.",
      "pt": "Vista-se de forma respeitosa ao visitar mesquitas, templos e outros locais religiosos e siga as orientações locais."
    },
    {
      "en": "Explore both hawker food and fine dining; Malaysian cuisine is one of the country's defining cultural experiences.",
      "es": "Descubre tanto la comida hawker como la alta cocina; la gastronomía malasia es una de las grandes experiencias culturales del país.",
      "pt": "Experimente tanto a comida hawker quanto a alta gastronomia; a culinária malaia é uma das principais experiências culturais do país."
    },
    {
      "en": "Allow additional travel time between regions, especially for journeys involving Cameron Highlands and island transfers.",
      "es": "Reserva tiempo adicional para desplazarte entre regiones, especialmente en los trayectos hacia Cameron Highlands y las islas.",
      "pt": "Reserve tempo extra para os deslocamentos entre regiões, especialmente nas viagens para Cameron Highlands e as ilhas."
    },
    {
      "en": "For Langkawi boat trips and outdoor activities, carry sun protection, comfortable footwear and light rain protection.",
      "es": "Para excursiones en barco y actividades al aire libre en Langkawi, lleva protección solar, calzado cómodo y protección ligera contra la lluvia.",
      "pt": "Para passeios de barco e atividades ao ar livre em Langkawi, leve protetor solar, calçados confortáveis e proteção leve contra a chuva."
    }
  ],
  "faqs": [
    {
      "q": {
        "en": "What is the best time to visit Malaysia?",
        "es": "¿Cuál es la mejor época para visitar Malasia?",
        "pt": "Qual é a melhor época para visitar a Malásia?"
      },
      "a": {
        "en": "Malaysia can be visited throughout the year, but December to March is a practical general period for a west-coast itinerary featuring Kuala Lumpur, Penang and Langkawi.",
        "es": "Malasia puede visitarse durante todo el año, pero de diciembre a marzo es un período práctico para un itinerario por la costa oeste con Kuala Lumpur, Penang y Langkawi.",
        "pt": "A Malásia pode ser visitada durante todo o ano, mas de dezembro a março é um período prático para um roteiro pela costa oeste incluindo Kuala Lumpur, Penang e Langkawi."
      }
    },
    {
      "q": {
        "en": "How many days are ideal for Malaysia?",
        "es": "¿Cuántos días son ideales para Malasia?",
        "pt": "Quantos dias são ideais para a Malásia?"
      },
      "a": {
        "en": "Seven to ten days are ideal for combining Kuala Lumpur, Cameron Highlands, Penang and Langkawi without rushing.",
        "es": "De siete a diez días son ideales para combinar Kuala Lumpur, Cameron Highlands, Penang y Langkawi sin prisas.",
        "pt": "Sete a dez dias são ideais para combinar Kuala Lumpur, Cameron Highlands, Penang e Langkawi sem pressa."
      }
    },
    {
      "q": {
        "en": "Is Malaysia suitable for luxury travel?",
        "es": "¿Es Malasia adecuada para viajes de lujo?",
        "pt": "A Malásia é adequada para viagens de luxo?"
      },
      "a": {
        "en": "Yes. Malaysia offers five-star city hotels, private island resorts, rainforest retreats, fine dining, luxury shopping and personalised cultural experiences.",
        "es": "Sí. Malasia ofrece hoteles urbanos de cinco estrellas, resorts privados en islas, retiros en la selva, alta gastronomía, compras de lujo y experiencias culturales personalizadas.",
        "pt": "Sim. A Malásia oferece hotéis urbanos cinco estrelas, resorts privativos em ilhas, retiros na floresta, alta gastronomia, compras de luxo e experiências culturais personalizadas."
      }
    },
    {
      "q": {
        "en": "Is Malaysia good for families?",
        "es": "¿Es Malasia buena para familias?",
        "pt": "A Malásia é boa para famílias?"
      },
      "a": {
        "en": "Absolutely. Malaysia combines family-friendly attractions, beaches, nature, wildlife, shopping, theme parks and excellent infrastructure.",
        "es": "Por supuesto. Malasia combina atracciones familiares, playas, naturaleza, vida silvestre, compras, parques temáticos y excelentes infraestructuras.",
        "pt": "Com certeza. A Malásia combina atrações para famílias, praias, natureza, vida selvagem, compras, parques temáticos e excelente infraestrutura."
      }
    },
    {
      "q": {
        "en": "What food should I try in Malaysia?",
        "es": "¿Qué comida debería probar en Malasia?",
        "pt": "Qual comida devo experimentar na Malásia?"
      },
      "a": {
        "en": "Try nasi lemak, satay, laksa, char kway teow, roti canai, rendang, nasi kandar and local seafood for a broad introduction to Malaysian cuisine.",
        "es": "Prueba nasi lemak, satay, laksa, char kway teow, roti canai, rendang, nasi kandar y mariscos locales para descubrir la diversidad gastronómica de Malasia.",
        "pt": "Experimente nasi lemak, satay, laksa, char kway teow, roti canai, rendang, nasi kandar e frutos do mar locais para conhecer a diversidade gastronômica da Malásia."
      }
    }
  ],
  "seo": {
    "en": {
      "title": "Malaysia Luxury Travel | Kuala Lumpur, Langkawi, Penang & Cameron Highlands",
      "description": "Discover Malaysia through luxury journeys across Kuala Lumpur, Langkawi, Penang, Cameron Highlands and Melaka, combining beaches, heritage, nature and cuisine.",
      "keywords": "Malaysia luxury travel, Malaysia luxury tour, Kuala Lumpur, Langkawi, Penang, Cameron Highlands, Melaka, Malaysia beaches, Malaysia honeymoon, Malaysia luxury hotels"
    },
    "es": {
      "title": "Viajes de Lujo a Malasia | Kuala Lumpur, Langkawi, Penang y Cameron Highlands",
      "description": "Descubre Malasia en viajes de lujo por Kuala Lumpur, Langkawi, Penang, Cameron Highlands y Melaka, combinando playas, patrimonio, naturaleza y gastronomía.",
      "keywords": "viajes de lujo a Malasia, tour de lujo Malasia, Kuala Lumpur, Langkawi, Penang, Cameron Highlands, Melaka, playas de Malasia, luna de miel Malasia, hoteles de lujo Malasia"
    },
    "pt": {
      "title": "Viagens de Luxo para a Malásia | Kuala Lumpur, Langkawi, Penang e Cameron Highlands",
      "description": "Descubra a Malásia em viagens de luxo por Kuala Lumpur, Langkawi, Penang, Cameron Highlands e Melaka, combinando praias, patrimônio, natureza e gastronomia.",
      "keywords": "viagens de luxo para Malásia, tour de luxo Malásia, Kuala Lumpur, Langkawi, Penang, Cameron Highlands, Melaka, praias da Malásia, lua de mel na Malásia, hotéis de luxo na Malásia"
    }
  }
},
  {
    slug: "vietnam",
    title: { en: "Vietnam", es: "Vietnam", pt: "Vietnã" },
    tagline: { 
      en: "Ancient Heritage, Emerald Bays & Timeless Vietnamese Culture", 
      es: "Patrimonio Milenario, Bahías Esmeralda y Cultura Vietnamita", 
      pt: "Patrimônio Milenar, Baías Esmeralda e Cultura Vietnamita" 
    },
    region: "Southeast Asia (Vietnam)",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200",
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200"
    ],
    description: { 
      en: "Discover Vietnam, a captivating Southeast Asian destination where ancient heritage, dramatic landscapes, vibrant cities and extraordinary cuisine come together. From the historic streets of Hanoi and the limestone islands of Ha Long Bay to the lantern-lit lanes of Hoi An, the energy of Ho Chi Minh City and the tropical beaches of Phu Quoc, Vietnam offers an unforgettable journey through culture, nature, adventure and refined hospitality.", 
      es: "Descubre Vietnam, un fascinante destino del Sudeste Asiático donde patrimonio milenario, paisajes espectaculares, ciudades vibrantes y una gastronomía extraordinaria se unen. Desde las históricas calles de Hanoi y las islas de piedra caliza de la bahía de Ha Long hasta las calles iluminadas por faroles de Hoi An, la energía de Ho Chi Minh City y las playas tropicales de Phu Quoc, Vietnam ofrece un viaje inolvidable a través de la cultura, la naturaleza, la aventura y una hospitalidad excepcional.", 
      pt: "Descubra o Vietnã, um fascinante destino do Sudeste Asiático onde patrimônio milenar, paisagens dramáticas, cidades vibrantes e uma gastronomia extraordinária se encontram. Das ruas históricas de Hanói e das ilhas calcárias da Baía de Ha Long às vielas iluminadas por lanternas de Hoi An, à energia de Ho Chi Minh City e às praias tropicais de Phu Quoc, o Vietnã oferece uma viagem inesquecível por cultura, natureza, aventura e hospitalidade sofisticada." 
    },
    overview: {
      en: "Discover Vietnam, a captivating Southeast Asian destination where ancient heritage, dramatic landscapes, vibrant cities and extraordinary cuisine come together.",
      es: "Descubre Vietnam, un fascinante destino del Sudeste Asiático donde patrimonio milenario, paisajes espectaculares, ciudades vibrantes y una gastronomía extraordinaria se unen.",
      pt: "Descubra o Vietnã, um fascinante destino do Sudeste Asiático onde patrimônio milenar, paisagens dramáticas, cidades vibrantes e uma gastronomia extraordinária se encontram."
    },
    history: {
      en: "Vietnam's history stretches across thousands of years and has been shaped by ancient kingdoms, dynasties, imperial courts, regional cultures and centuries of interaction with neighbouring civilizations. Historic landmarks such as the Imperial City of Hue, Hanoi's Old Quarter and ancient trading towns such as Hoi An reveal different chapters of the country's past, while traditional architecture and cultural practices continue to connect modern Vietnam with its heritage.",
      es: "La historia de Vietnam se extiende a lo largo de miles de años y ha sido moldeada por antiguos reinos, dinastías, cortes imperiales, culturas regionales y siglos de interacción con las civilizaciones vecinas. Lugares históricos como la Ciudad Imperial de Hue, el casco antiguo de Hanoi y antiguas ciudades comerciales como Hoi An muestran diferentes capítulos del pasado del país, mientras que la arquitectura tradicional y las prácticas culturales mantienen viva la conexión entre el Vietnam moderno y su patrimonio.",
      pt: "A história do Vietnã se estende por milhares de anos e foi moldada por antigos reinos, dinastias, cortes imperiais, culturas regionais e séculos de interação com civilizações vizinhas. Monumentos históricos como a Cidade Imperial de Hue, o bairro antigo de Hanói e antigas cidades comerciais como Hoi An revelam diferentes capítulos do passado do país, enquanto a arquitetura tradicional e as práticas culturais continuam conectando o Vietnã moderno ao seu patrimônio."
    },
    culture: {
      en: "Vietnamese culture is a rich blend of family traditions, ancestral customs, Buddhism, local beliefs, craftsmanship and regional identities. Visitors can experience traditional markets, lantern festivals, water puppetry, craft villages, tea and coffee culture, local ceremonies and the graceful áo dài. From northern villages to central heritage towns and southern river communities, each region adds its own character to Vietnamese culture.",
      es: "La cultura vietnamita es una rica combinación de tradiciones familiares, costumbres ancestrales, budismo, creencias locales, artesanía e identidades regionales. Los visitantes pueden descubrir mercados tradicionales, festivales de faroles, marionetas de agua, pueblos artesanales, la cultura del té y el café, ceremonias locales y el elegante áo dài. Desde las aldeas del norte hasta las ciudades patrimoniales del centro y las comunidades fluviales del sur, cada región aporta su propia personalidad a la cultura vietnamita.",
      pt: "A cultura vietnamita é uma rica combinação de tradições familiares, costumes ancestrais, budismo, crenças locais, artesanato e identidades regionais. Os visitantes podem conhecer mercados tradicionais, festivais de lanternas, teatro de marionetes na água, vilarejos artesanais, a cultura do chá e do café, cerimônias locais e o elegante áo dài. Das aldeias do norte às cidades históricas do centro e às comunidades ribeirinhas do sul, cada região acrescenta sua própria identidade à cultura vietnamita."
    },
    localFood: {
      en: "Vietnamese cuisine is celebrated for its fresh ingredients, aromatic herbs, balanced flavours and remarkable regional diversity. Discover classics such as Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế and Cao Lầu, alongside fresh seafood, Vietnamese coffee and regional specialities. Food is one of the best ways to experience the distinct character of northern, central and southern Vietnam.",
      es: "La gastronomía vietnamita es famosa por sus ingredientes frescos, hierbas aromáticas, sabores equilibrados y extraordinaria diversidad regional. Descubre clásicos como Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế y Cao Lầu, además de mariscos frescos, café vietnamita y especialidades regionales. La gastronomía es una de las mejores formas de experimentar la personalidad de las regiones del norte, centro y sur de Vietnam.",
      pt: "A culinária vietnamita é conhecida por seus ingredientes frescos, ervas aromáticas, sabores equilibrados e extraordinária diversidade regional. Descubra clássicos como Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế e Cao Lầu, além de frutos do mar frescos, café vietnamita e especialidades regionais. A gastronomia é uma das melhores formas de conhecer a identidade distinta do norte, centro e sul do Vietnã."
    },
    bestTime: { en: "March to April", es: "Marzo a abril", pt: "Março a abril" },
    attractions: [
      {
        name: { en: "Ha Long Bay", es: "Bahía de Ha Long", pt: "Baía de Ha Long" },
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800",
        desc: { 
          en: "Cruise through a spectacular seascape of limestone karsts, emerald waters and dramatic islands, creating one of Vietnam's most iconic natural experiences.", 
          es: "Navega por un espectacular paisaje de formaciones kársticas de piedra caliza, aguas esmeralda e islas dramáticas, una de las experiencias naturales más emblemáticas de Vietnam.", 
          pt: "Navegue por uma paisagem espetacular de formações calcárias, águas esmeralda e ilhas dramáticas, criando uma das experiências naturais mais emblemáticas do Vietnã." 
        }
      },
      {
        name: { en: "Hoi An Ancient Town", es: "Ciudad Antigua de Hoi An", pt: "Cidade Antiga de Hoi An" },
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
        desc: { 
          en: "Wander through beautifully preserved historic streets filled with lanterns, traditional houses, riverside cafés, artisan workshops and centuries-old trading heritage.", 
          es: "Recorre calles históricas bellamente conservadas, llenas de faroles, casas tradicionales, cafés junto al río, talleres artesanales y siglos de patrimonio comercial.", 
          pt: "Caminhe por ruas históricas bem preservadas, repletas de lanternas, casas tradicionais, cafés à beira do rio, oficinas de artesanato e séculos de patrimônio comercial." 
        }
      },
      {
        name: { en: "Hanoi Old Quarter & Hoan Kiem Lake", es: "Casco Antiguo de Hanoi y Lago Hoan Kiem", pt: "Bairro Antigo de Hanói e Lago Hoan Kiem" },
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
        desc: { 
          en: "Experience Hanoi's historic heart through narrow streets, traditional architecture, local cafés, lively markets and the peaceful waters of Hoan Kiem Lake.", 
          es: "Descubre el corazón histórico de Hanoi a través de calles estrechas, arquitectura tradicional, cafés locales, mercados animados y las tranquilas aguas del lago Hoan Kiem.", 
          pt: "Conheça o coração histórico de Hanói através de ruas estreitas, arquitetura tradicional, cafés locais, mercados movimentados e as tranquilas águas do Lago Hoan Kiem." 
        }
      },
      {
        name: { en: "Ninh Binh & Trang An", es: "Ninh Binh y Trang An", pt: "Ninh Binh e Trang An" },
        image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=800",
        desc: { 
          en: "Explore dramatic limestone mountains, winding rivers, caves and lush countryside on a scenic boat journey through the landscapes of northern Vietnam.", 
          es: "Explora espectaculares montañas de piedra caliza, ríos serpenteantes, cuevas y exuberantes paisajes rurales durante un recorrido en barco por el norte de Vietnam.", 
          pt: "Explore impressionantes montanhas calcárias, rios sinuosos, cavernas e paisagens rurais exuberantes em um passeio de barco pelo norte do Vietnã." 
        }
      },
      {
        name: { en: "Imperial City of Hue", es: "Ciudad Imperial de Hue", pt: "Cidade Imperial de Hue" },
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800",
        desc: { 
          en: "Discover the former imperial capital of Vietnam through its monumental citadel, royal architecture, ancient tombs and tranquil Perfume River landscapes.", 
          es: "Descubre la antigua capital imperial de Vietnam a través de su monumental ciudadela, arquitectura real, tumbas históricas y los tranquilos paisajes del río Perfume.", 
          pt: "Descubra a antiga capital imperial do Vietnã através de sua monumental cidadela, arquitetura real, túmulos históricos e as tranquilas paisagens do Rio Perfume." 
        }
      },
      {
        name: { en: "Mekong Delta", es: "Delta del Mekong", pt: "Delta do Mekong" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
        desc: { 
          en: "Travel through a vibrant river world of floating markets, tropical orchards, waterways, traditional villages and local food experiences in southern Vietnam.", 
          es: "Descubre un vibrante mundo fluvial de mercados flotantes, huertos tropicales, canales, aldeas tradicionales y experiencias gastronómicas locales en el sur de Vietnam.", 
          pt: "Explore um vibrante mundo de rios com mercados flutuantes, pomares tropicais, canais, aldeias tradicionais e experiências gastronômicas locais no sul do Vietnã." 
        }
      }
    ],
    experiences: [
      {
        title: { en: "Luxury Ha Long Bay Overnight Cruise", es: "Crucero de Lujo de una Noche por la Bahía de Ha Long", pt: "Cruzeiro de Luxo com Pernoite pela Baía de Ha Long" },
        desc: { en: "Sail among towering limestone islands aboard a premium cruise with elegant accommodation, Vietnamese cuisine, kayaking and sunset views.", es: "Navega entre imponentes islas de piedra caliza a bordo de un crucero premium.", pt: "Navegue entre imponentes ilhas calcárias a bordo de um cruzeiro premium." },
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800"
      },
      {
        title: { en: "Hanoi Street Food & Old Quarter Experience", es: "Experiencia Gastronómica por el Casco Antiguo de Hanoi", pt: "Experiência Gastronômica pelo Bairro Antigo de Hanói" },
        desc: { en: "Explore Hanoi's historic streets while tasting authentic local dishes, Vietnamese coffee, and iconic street-food specialities.", es: "Explora las calles históricas de Hanoi saboreando platos locales auténticos y café vietnamita.", pt: "Explore as ruas históricas de Hanói saboreando pratos locais autênticos e café vietnamita." },
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800"
      },
      {
        title: { en: "Hoi An Lantern & Cultural Evening", es: "Noche de Faroles y Cultura en Hoi An", pt: "Noite de Lanternas e Cultura em Hoi An" },
        desc: { en: "Discover Hoi An after sunset with illuminated lantern streets, riverside dining, traditional crafts and peaceful evening atmosphere.", es: "Descubre Hoi An al atardecer con sus calles iluminadas por faroles y cenas junto al río.", pt: "Descubra Hoi An ao pôr do sol com suas ruas iluminadas por lanternas e jantares à beira-rio." },
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800"
      },
      {
        title: { en: "Vietnamese Cooking Class & Market Tour", es: "Clase de Cocina Vietnamita y Visita al Mercado", pt: "Aula de Culinária Vietnamita e Visita ao Mercado" },
        desc: { en: "Visit a local market and learn how to prepare classic Vietnamese dishes using fresh herbs and traditional techniques.", es: "Visita un mercado local y aprende a preparar platos vietnamitas clásicos.", pt: "Visite um mercado local e aprenda a preparar pratos vietnamitas clássicos." },
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"
      },
      {
        title: { en: "Mekong Delta Private River Experience", es: "Experiencia Privada por el Delta del Mekong", pt: "Experiência Privativa pelo Delta do Mekong" },
        desc: { en: "Cruise along peaceful waterways, visit local communities and discover tropical gardens and floating markets.", es: "Navega por tranquilos canales, visita comunidades locales y descubre mercados flotantes.", pt: "Navegue por canais tranquilos, visite comunidades locais e descubra mercados flutuantes." },
        image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=800"
      },
      {
        title: { en: "Luxury Phu Quoc Beach & Wellness Retreat", es: "Retiro de Playa y Bienestar de Lujo en Phu Quoc", pt: "Retiro de Praia e Bem-Estar de Luxo em Phu Quoc" },
        desc: { en: "Relax on tropical beaches with luxury resort accommodation, spa treatments, private dining and spectacular sunsets.", es: "Relájate en playas tropicales con resorts de lujo, tratamientos de spa y cenas privadas.", pt: "Relaxe em praias tropicais com resorts de luxo, tratamentos de spa e jantares privativos." },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
      }
    ],
    hotels: [
      {
        name: "Sofitel Legend Metropole Hanoi",
        rating: "5 Star Heritage Luxury",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
        desc: {
          en: "An iconic historic luxury hotel in the heart of Hanoi, combining elegant French-colonial architecture, refined Vietnamese hospitality, sophisticated dining and a prestigious central location.",
          es: "Un icónico hotel histórico de lujo en el corazón de Hanoi que combina elegante arquitectura colonial francesa, refinada hospitalidad vietnamita, gastronomía sofisticada y una ubicación privileged.",
          pt: "Um icônico hotel histórico de luxo no coração de Hanói, combinando elegante arquitetura colonial francesa, sofisticada hospitalidade vietnamita, gastronomia refinada e uma localização privilegiada."
        }
      },
      {
        name: "Four Seasons Resort The Nam Hai, Hoi An",
        rating: "5 Star Ultra Luxury",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
        desc: {
          en: "An elegant beachfront luxury retreat near Hoi An featuring private villas, tropical gardens, exceptional dining, wellness experiences and direct access to the central coast.",
          es: "Un elegante refugio de lujo frente al mar cerca de Hoi An, con villas privadas, jardines tropicales, gastronomía excepcional, experiencias de bienestar y acceso directo a la costa central.",
          pt: "Um elegante refúgio de luxo à beira-mar próximo a Hoi An, com villas privativas, jardins tropicais, gastronomia excepcional, experiências de bem-estar e acesso direto à costa central."
        }
      }
    ],
    suggestedItinerary: { 
      en: "Day 1: Arrival in Hanoi & Luxury Old Quarter Dinner. Day 2: Hanoi Old Quarter, Hoan Kiem Lake, Temple of Literature & Local Food Experience. Day 3: Transfer to Ha Long Bay & Luxury Overnight Cruise. Day 4: Sunrise Cruise & Return to Hanoi, then flight to Da Nang. Day 5: Hoi An Ancient Town, Lantern Streets & Vietnamese Cooking Experience. Day 6: Ninh Binh & Trang An Scenic Boat Experience. Day 7: Fly to Ho Chi Minh City & Luxury City Experience. Day 8: Mekong Delta Private River Journey & Local Culinary Experience. Day 9: Fly to Phu Quoc & Luxury Beach Resort Retreat. Day 10: Private Island Leisure, Spa & Sunset Dinner.", 
      es: "Día 1: Llegada a Hanoi y cena de lujo en el Casco Antiguo. Día 2: Casco Antiguo de Hanoi, Lago Hoan Kiem, Templo de la Literatura y experiencia gastronómica local. Día 3: Traslado a la Bahía de Ha Long y crucero de lujo con pernocta. Día 4: Crucero al amanecer y regreso a Hanoi, seguido de vuelo a Da Nang. Día 5: Ciudad Antigua de Hoi An, calles de faroles y experiencia de cocina vietnamita. Día 6: Ninh Binh y recorrido panorámico en barco por Trang An. Día 7: Vuelo a Ho Chi Minh City y experiencia de lujo por la ciudad. Día 8: Viaje privado por el Delta del Mekong y experiencia gastronómica local. Día 9: Vuelo a Phu Quoc y estancia en un resort de lujo frente al mar. Día 10: Tiempo libre en la isla, spa y cena al atardecer.", 
      pt: "Dia 1: Chegada a Hanói e jantar de luxo no Bairro Antigo. Dia 2: Bairro Antigo de Hanói, Lago Hoan Kiem, Templo da Literatura e experiência gastronômica local. Dia 3: Traslado para a Baía de Ha Long e cruzeiro de luxo com pernoite. Dia 4: Cruzeiro ao nascer do sol e retorno a Hanói, seguido de voo para Da Nang. Dia 5: Cidade Antiga de Hoi An, ruas de lanternas e experiência de culinária vietnamita. Dia 6: Ninh Binh e passeio panorâmico de barco por Trang An. Dia 7: Voo para Ho Chi Minh City e experiência de luxo pela cidade. Dia 8: Jornada privativa pelo Delta do Mekong e experiência gastronômica local. Dia 9: Voo para Phu Quoc e estadia em resort de luxo à beira-mar. Dia 10: Lazer na ilha, spa e jantar ao pôr do sol." 
    },
    travelTips: [
      {
        en: "Vietnam has different weather patterns from north to south, so check regional forecasts when planning a multi-city itinerary.",
        es: "Vietnam tiene diferentes patrones climáticos de norte a sur, por lo que conviene consultar el clima regional al planificar un itinerario por varias ciudades.",
        pt: "O Vietnã possui diferentes padrões climáticos de norte a sul, portanto consulte as previsões regionais ao planejar um roteiro por várias cidades."
      },
      {
        en: "Carry lightweight clothing, comfortable walking shoes, sunscreen and a light rain jacket.",
        es: "Lleva ropa ligera, calzado cómodo para caminar, protector solar y una chaqueta ligera para la lluvia.",
        pt: "Leve roupas leves, calçados confortáveis para caminhar, protetor solar e uma jaqueta leve para chuva."
      },
      {
        en: "Dress respectfully when visiting temples, pagodas and other religious or cultural sites.",
        es: "Viste de manera respetuosa al visitar templos, pagodas y otros lugares religiosos o culturales.",
        pt: "Vista-se de maneira respeitosa ao visitar templos, pagodes e outros locais religiosos ou culturais."
      },
      {
        en: "Book overnight Ha Long Bay cruises and premium heritage hotels in advance during popular travel periods.",
        es: "Reserva con antelación los cruceros nocturnos por la Bahía de Ha Long y los hoteles patrimoniales de lujo durante los períodos de mayor demanda.",
        pt: "Reserve com antecedência os cruzeiros com pernoite pela Baía de Ha Long e os hotéis históricos de luxo durante os períodos de maior procura."
      },
      {
        en: "Keep some Vietnamese cash available for small restaurants, markets, local transport and rural experiences.",
        es: "Lleva algo de efectivo en moneda vietnamita para pequeños restaurantes, mercados, transporte local y experiencias rurales.",
        pt: "Tenha algum dinheiro em espécie na moeda vietnamita para pequenos restaurantes, mercados, transporte local e experiências rurais."
      }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Vietnam?", es: "¿Cuál es la mejor época para visitar Vietnam?", pt: "Qual é a melhor época para visitar o Vietnã?" },
        a: { en: "March and April are generally good months for a broad Vietnam itinerary, although the ideal season varies considerably between northern, central and southern regions.", es: "Marzo y abril suelen ser buenos meses para un itinerario amplio por Vietnam, aunque la temporada ideal varía considerablemente entre las regiones del norte, centro y sur.", pt: "Março e abril são geralmente bons meses para um roteiro abrangente pelo Vietnã, embora a melhor época varie consideravelmente entre as regiões norte, central e sul." }
      },
      {
        q: { en: "How many days are ideal for Vietnam?", es: "¿Cuántos días son ideales para Vietnam?", pt: "Quantos dias são ideais para o Vietnã?" },
        a: { en: "A 9 to 12-day itinerary is ideal for combining northern heritage, central Vietnam, southern culture and a relaxing beach extension.", es: "Un itinerario de 9 a 12 días es ideal para combinar el patrimonio del norte, el centro de Vietnam, la cultura del sur y una extensión de playa relajante.", pt: "Um roteiro de 9 a 12 dias é ideal para combinar o patrimônio do norte, o centro do Vietnã, a cultura do sul e uma extensão relaxante na praia." }
      },
      {
        q: { en: "Is Vietnam suitable for a luxury holiday?", es: "¿Vietnam es adecuado para unas vacaciones de lujo?", pt: "O Vietnã é adequado para férias de luxo?" },
        a: { en: "Yes. Vietnam offers luxury heritage hotels, private cruises, premium beach resorts, wellness retreats, private guides, fine dining and curated cultural experiences.", es: "Sí. Vietnam ofrece hoteles patrimoniales de lujo, cruceros privados, resorts de playa premium, retiros de bienestar, guías privados, alta gastronomía y experiencias culturales personalizadas.", pt: "Sim. O Vietnã oferece hotéis históricos de luxo, cruzeiros privativos, resorts de praia premium, retiros de bem-estar, guias privados, alta gastronomia e experiências culturais personalizadas." }
      },
      {
        q: { en: "Can Vietnam be combined with a beach holiday?", es: "¿Se puede combinar Vietnam con unas vacaciones de playa?", pt: "É possível combinar o Vietnã com férias na praia?" },
        a: { en: "Yes. Phu Quoc, the central coast and destinations around Nha Trang and Da Nang provide excellent options for adding beaches and resort relaxation to a cultural itinerary.", es: "Sí. Phu Quoc, la costa central y destinos alrededor de Nha Trang y Da Nang ofrecen excelentes opciones para añadir playas y descanso en resorts a un itinerario cultural.", pt: "Sim. Phu Quoc, a costa central e destinos próximos a Nha Trang e Da Nang oferecem excelentes opções para adicionar praias e descanso em resorts a um roteiro cultural." }
      },
      {
        q: { en: "What food should I try in Vietnam?", es: "¿Qué comida debería probar en Vietnam?", pt: "Que comidas devo experimentar no Vietnã?" },
        a: { en: "Try Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế, Cao Lầu, Vietnamese coffee and regional seafood dishes.", es: "Prueba Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế, Cao Lầu, café vietnamita y platos regionales de mariscos.", pt: "Experimente Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế, Cao Lầu, café vietnamita e pratos regionais de frutos do mar." }
      }
    ]
  },
  {
    slug: "bhutan",
    title: { en: "Bhutan", es: "Bután", pt: "Butão" },
    tagline: { 
      en: "The Land of Gross National Happiness & Tiger's Nest Monastery", 
      es: "La Tierra de la Felicidad Interior Bruta y el Nido del Tigre", 
      pt: "A Terra da Felicidade Interna Bruta e o Ninho do Tigre" 
    },
    region: "Himalayas",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200"
    ],
    description: { 
      en: "Step into the mythical Himalayan kingdom of Bhutan. Hike to the cliff-hanging Paro Taktsang (Tiger's Nest), marvel at majestic dzong fortresses, and experience pure mountain serenity.", 
      es: "Entre al mítico reino del Himalaya en Bután. Camine hasta el Monasterio Nido del Tigre colgado en el acantilado y descubra fortalezas dzong.", 
      pt: "Entre no mítico reino do Himalaia no Butão. Caminhe até o Mosteiro Ninho do Tigre suspenso no penhasco e descubra fortalezas dzong." 
    },
    bestTime: { en: "March to May & September to November", es: "De marzo a mayo y septiembre a noviembre", pt: "De março a maio e setembro a novembro" },
    attractions: [
      {
        name: { en: "Paro Taktsang (Tiger's Nest Monastery)", es: "Paro Taktsang (Monasterio Nido del Tigre)", pt: "Paro Taktsang (Mosteiro Ninho do Tigre)" },
        image: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=800",
        desc: { en: "Sacred monastery perched dramatically 900 meters above Paro Valley cliff face.", es: "Monasterio sagrado encaramado dramáticamente a 900 metros sobre el acantilado.", pt: "Mosteiro sagrado encravado dramaticamente a 900 metros sobre o penhasco." }
      }
    ],
    thingsToDo: [
      { en: "Punakha Dzong Palace of Great Happiness & Thimphu Buddha Dordenma", es: "Palacio Punakha Dzong y Buda Gigante Dordenma en Timbu", pt: "Palácio Punakha Dzong e Buda Gigante Dordenma em Thimphu" }
    ],
    suggestedItinerary: { 
      en: "Day 1: Paro arrival to Thimphu. Day 2: Thimphu Buddha Dordenma & Heritage. Day 3: Punakha Suspension Bridge. Day 4: Tiger's Nest Hike.", 
      es: "Día 1: Llegada a Paro y traslado a Timbu. Día 2: Buda Dordenma y patrimonio. Día 3: Puente Colgante de Punakha. Día 4: Caminata al Nido del Tigre.", 
      pt: "Dia 1: Chegada em Paro e traslado para Thimphu. Day 2: Thimphu Buddha Dordenma & Heritage. Day 3: Punakha Suspension Bridge. Day 4: Tiger's Nest Hike." 
    },
    travelTips: [
      { en: "Bhutan requires sustainable development fee (SDF) processed seamlessly by MH India Trips.", es: "Bután requiere la tasa SDF gestionada íntegramente por MH India Trips.", pt: "O Butão requer a taxa SDF gerenciada inteiramente pela MH India Trips." }
    ],
    faqs: [
      {
        q: { en: "Is Bhutan difficult to enter?", es: "¿Es difícil entrar a Bután?", pt: "É difícil entrar no Butão?" },
        a: { en: "No, MH India Trips handles your full official visa application and royal entry permits.", es: "No, MH India Trips gestiona la solicitud completa de visa oficial y permisos de entrada.", pt: "Não, a MH India Trips gerencia a solicitação completa de visto oficial e permissões." }
      }
    ]
  },
  {
    slug: "sri-lanka",
    title: { 
      en: "Sri Lanka", 
      es: "Sri Lanka", 
      pt: "Sri Lanka" 
    },
    tagline: { 
      en: "Ancient Heritage, Emerald Tea Hills, Wildlife & Tropical Beaches", 
      es: "Patrimonio Ancestral, Colinas de Té Esmeralda, Vida Silvestre y Playas Tropicales", 
      pt: "Patrimônio Ancestral, Colinas de Chá Esmeralda, Vida Selvagem e Praias Tropicais" 
    },
    region: "South Asia (Sri Lanka)",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200",
      "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200",
      "https://images.unsplash.com/photo-1588598075727-4c7b80582845?q=80&w=1200",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200"
    ],
    description: { 
      en: "Discover Sri Lanka, a captivating island where ancient kingdoms, sacred temples, emerald tea plantations, tropical beaches and extraordinary wildlife come together in one unforgettable journey. From the iconic Sigiriya Rock Fortress and the sacred city of Kandy to the misty hills of Ella, the colonial charm of Galle Fort and the wild landscapes of Yala National Park, Sri Lanka offers an exceptional blend of culture, nature, adventure and relaxation. Known for its warm hospitality, aromatic cuisine, world-renowned Ceylon tea and remarkable biodiversity, Sri Lanka is perfectly suited to luxury escapes, cultural journeys, wildlife safaris, wellness retreats and romantic beach holidays.", 
      es: "Descubre Sri Lanka, una fascinante isla donde antiguos reinos, templos sagrados, plantaciones de té esmeralda, playas tropicales y una extraordinaria vida silvestre se unen en un viaje inolvidable. Desde la icónica fortaleza de roca de Sigiriya y la ciudad sagrada de Kandy hasta las montañas brumosas de Ella, el encanto colonial de Galle Fort y los paisajes salvajes del Parque Nacional de Yala, Sri Lanka ofrece una combinación excepcional de cultura, naturaleza, aventura y descanso. Reconocida por su cálida hospitalidad, su cocina aromática, el famoso té de Ceilán y su extraordinaria biodiversidad, Sri Lanka es ideal para escapadas de lujo, viajes culturales, safaris, retiros de bienestar y vacaciones románticas junto al mar.", 
      pt: "Descubra o Sri Lanka, uma ilha fascinante onde antigos reinos, templos sagrados, plantações de chá esmeralda, praias tropicais e uma extraordinária vida selvagem se encontram em uma viagem inesquecível. Da icônica Fortaleza de Sigiriya e da cidade sagrada de Kandy às montanhas enevoadas de Ella, ao charme colonial do Galle Fort e às paisagens selvagens do Parque Nacional de Yala, o Sri Lanka oferece uma combinação excepcional de cultura, natureza, aventura e relaxamento. Conhecido por sua hospitalidade acolhedora, sua culinária aromática, o famoso chá de Ceilão e sua extraordinária biodiversidade, o Sri Lanka é ideal para viagens de luxo, experiências culturais, safáris, retiros de bem-estar e férias românticas à beira-mar." 
    },
    overview: {
      en: "Discover Sri Lanka, a captivating island where ancient kingdoms, sacred temples, emerald tea plantations, tropical beaches and extraordinary wildlife come together in one unforgettable journey. From the iconic Sigiriya Rock Fortress and the sacred city of Kandy to the misty hills of Ella, the colonial charm of Galle Fort and the wild landscapes of Yala National Park, Sri Lanka offers an exceptional blend of culture, nature, adventure and relaxation. Known for its warm hospitality, aromatic cuisine, world-renowned Ceylon tea and remarkable biodiversity, Sri Lanka is perfectly suited to luxury escapes, cultural journeys, wildlife safaris, wellness retreats and romantic beach holidays.",
      es: "Descubre Sri Lanka, una fascinante isla donde antiguos reinos, templos sagrados, plantaciones de té esmeralda, playas tropicales y una extraordinaria vida silvestre se unen en un viaje inolvidable. Desde la icónica fortaleza de roca de Sigiriya y la ciudad sagrada de Kandy hasta las montañas brumosas de Ella, el encanto colonial de Galle Fort y los paisajes salvajes del Parque Nacional de Yala, Sri Lanka ofrece una combinación excepcional de cultura, naturaleza, aventura y descanso. Reconocida por su cálida hospitalidad, su cocina aromática, el famoso té de Ceilán y su extraordinaria biodiversidad, Sri Lanka es ideal para escapadas de lujo, viajes culturales, safaris, retiros de bienestar y vacaciones románticas junto al mar.",
      pt: "Descubra o Sri Lanka, uma ilha fascinante onde antigos reinos, templos sagrados, plantações de chá esmeralda, praias tropicais e uma extraordinária vida selvagem se encontram em uma viagem inesquecível. Da icônica Fortaleza de Sigiriya e da cidade sagrada de Kandy às montanhas enevoadas de Ella, ao charme colonial do Galle Fort e às paisagens selvagens do Parque Nacional de Yala, o Sri Lanka oferece uma combinação excepcional de cultura, natureza, aventura e relaxamento. Conhecido por sua hospitalidade acolhedora, sua culinária aromática, o famoso chá de Ceilão e sua extraordinária biodiversidade, o Sri Lanka é ideal para viagens de luxo, experiências culturais, safáris, retiros de bem-estar e férias românticas à beira-mar."
    },
    history: {
      en: "Sri Lanka has a history stretching back more than two millennia, shaped by ancient kingdoms, Buddhist traditions, maritime trade and successive periods of Portuguese, Dutch and British influence. The ancient capitals of Anuradhapura and Polonnaruwa reveal remarkable achievements in architecture, irrigation and religious art, while Sigiriya preserves the spectacular remains of a fifth-century rock citadel and royal complex. Kandy, the island's last great kingdom, remains one of Sri Lanka's most important cultural centres and is home to the revered Temple of the Sacred Tooth Relic. Along the southern coast, Galle Fort reflects the island's colonial maritime heritage with its historic ramparts, streets and architecture. Together, these destinations reveal the extraordinary depth of Sri Lanka's royal, religious and colonial heritage.",
      es: "Sri Lanka posee una historia que se remonta a más de dos milenios, marcada por antiguos reinos, tradiciones budistas, comercio marítimo y sucesivas influencias portuguesas, neerlandesas y británicas. Las antiguas capitales de Anuradhapura y Polonnaruwa muestran grandes logros en arquitectura, sistemas de irrigación y arte religioso, mientras que Sigiriya conserva los impresionantes restos de una ciudadela rocosa y complejo real del siglo V. Kandy, último gran reino de la isla, continúa siendo uno de los principales centros culturales de Sri Lanka y alberga el venerado Templo del Diente Sagrado. En la costa sur, Galle Fort representa el patrimonio marítimo colonial de la isla a través de sus murallas, calles y arquitectura histórica. En conjunto, estos destinos muestran la extraordinaria riqueza del patrimonio real, religioso y colonial de Sri Lanka.",
      pt: "O Sri Lanka possui uma história que remonta a mais de dois milênios, moldada por antigos reinos, tradições budistas, comércio marítimo e sucessivas influências portuguesas, holandesas e britânicas. As antigas capitais de Anuradhapura e Polonnaruwa revelam grandes realizações em arquitetura, sistemas de irrigação e arte religiosa, enquanto Sigiriya preserva os impressionantes vestígios de uma cidadela rochosa e complexo real do século V. Kandy, o último grande reino da ilha, continua sendo um dos principais centros culturais do Sri Lanka e abriga o venerado Templo do Dente Sagrado. Na costa sul, o Galle Fort representa o patrimônio marítimo colonial da ilha por meio de suas muralhas, ruas e arquitetura histórica. Juntos, esses destinos revelam a extraordinária riqueza do patrimônio real, religioso e colonial do Sri Lanka."
    },
    culture: {
      en: "Sri Lankan culture is deeply influenced by Buddhism, Hindu traditions, centuries-old craftsmanship and the island's diverse communities. Religious festivals, temple ceremonies, traditional dance, drumming, handicrafts and village traditions remain an important part of everyday life. Kandy is particularly renowned for its traditional arts and religious heritage, while the island's temples and sacred cities offer a deeper understanding of Sri Lanka's spiritual traditions. Local markets, spice gardens, tea estates and artisan communities provide opportunities to experience the country's living culture beyond its historic monuments. Warm hospitality is another defining element of Sri Lankan culture, making personal encounters and local experiences an essential part of travelling across the island.",
      es: "La cultura de Sri Lanka está profundamente influenciada por el budismo, las tradiciones hindúes, siglos de artesanía y la diversidad de sus comunidades. Los festivales religiosos, ceremonias en los templos, danzas tradicionales, percusión, artesanías y tradiciones rurales continúan formando parte importante de la vida cotidiana. Kandy destaca especialmente por sus artes tradicionales y su patrimonio religioso, mientras que los templos y ciudades sagradas permiten comprender mejor las tradiciones espirituales de Sri Lanka. Los mercados locales, jardines de especias, plantaciones de té y comunidades artesanas ofrecen la oportunidad de descubrir la cultura viva del país más allá de sus monumentos históricos. La cálida hospitalidad es otro elemento esencial de la cultura de Sri Lanka y convierte los encuentros locales en una parte fundamental del viaje.",
      pt: "A cultura do Sri Lanka é profundamente influenciada pelo budismo, pelas tradições hindus, por séculos de artesanato e pela diversidade de suas comunidades. Festivais religiosos, cerimônias nos templos, danças tradicionais, percussão, artesanato e tradições rurais continuam sendo uma parte importante da vida cotidiana. Kandy é especialmente conhecida por suas artes tradicionais e seu patrimônio religioso, enquanto os templos e cidades sagradas proporcionam uma compreensão mais profunda das tradições espirituais do país. Mercados locais, jardins de especiarias, plantações de chá e comunidades artesanais oferecem oportunidades para conhecer a cultura viva do Sri Lanka além de seus monumentos históricos. A hospitalidade calorosa é outro elemento marcante da cultura do Sri Lanka, tornando os encontros locais uma parte essencial da experiência de viagem."
    },
    localFood: {
      en: "Sri Lankan cuisine is a vibrant celebration of spices, coconut, rice, seafood and tropical produce. Traditional meals often feature fragrant rice accompanied by a variety of curries, sambols, vegetables and pickles. Signature dishes include Sri Lankan rice and curry, hoppers, kottu roti, string hoppers, dhal curry, pol sambol and seafood preparations. The island is also famous for its Ceylon tea, cinnamon and aromatic spices. From local family-run restaurants and colourful markets to refined resort dining, Sri Lanka offers a culinary journey that reflects the island's history and cultural influences.",
      es: "La gastronomía de Sri Lanka es una vibrante celebración de especias, coco, arroz, mariscos y productos tropicales. Las comidas tradicionales suelen incluir arroz aromático acompañado de diferentes curris, sambols, verduras y encurtidos. Entre sus platos más representativos se encuentran el arroz con curry de Sri Lanka, los hoppers, el kottu roti, los string hoppers, el dhal curry, el pol sambol y diversas preparaciones de mariscos. La isla también es famosa por su té de Ceilán, su canela y sus especias aromáticas. Desde pequeños restaurantes familiares y coloridos mercados hasta restaurantes sofisticados en resorts, Sri Lanka ofrece un viaje gastronómico que refleja la historia y las influencias culturales de la isla.",
      pt: "A culinária do Sri Lanka é uma celebração vibrante de especiarias, coco, arroz, frutos do mar e produtos tropicais. As refeições tradicionais geralmente incluem arroz aromático acompanhado por diversos curries, sambols, vegetais e conservas. Entre os pratos mais emblemáticos estão o arroz com curry do Sri Lanka, hoppers, kottu roti, string hoppers, dhal curry, pol sambol e preparações de frutos do mar. A ilha também é famosa pelo chá de Ceilão, pela canela e por suas especiarias aromáticas. De pequenos restaurantes familiares e mercados coloridos a restaurantes sofisticados em resorts, o Sri Lanka oferece uma jornada gastronômica que reflete a história e as influências culturais da ilha."
    },
    bestTime: { 
      en: "December to March", 
      es: "De diciembre a marzo", 
      pt: "De dezembro a março" 
    },
    attractions: [
      {
        name: { en: "Sigiriya Rock Fortress", es: "Fortaleza de Roca de Sigiriya", pt: "Fortaleza de Rochas de Sigiriya" },
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
        desc: { 
          en: "Climb the iconic fifth-century rock citadel of Sigiriya, surrounded by ancient gardens, frescoes and dramatic tropical landscapes. One of Sri Lanka's most extraordinary heritage experiences.", 
          es: "Sube a la icónica ciudadela rocosa de Sigiriya, del siglo V, rodeada de antiguos jardines, frescos y espectaculares paisajes tropicales. Una de las experiencias patrimoniales más extraordinarias de Sri Lanka.", 
          pt: "Suba à icônica cidadela rochosa de Sigiriya, do século V, cercada por antigos jardins, afrescos e paisagens tropicais impressionantes. Uma das experiências de patrimônio mais extraordinárias do Sri Lanka." 
        }
      },
      {
        name: { en: "Temple of the Sacred Tooth, Kandy", es: "Templo del Diente Sagrado, Kandy", pt: "Templo do Dente Sagrado, Kandy" },
        image: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=800",
        desc: { 
          en: "Visit Sri Dalada Maligawa, the revered Temple of the Sacred Tooth Relic and one of the most important Buddhist pilgrimage sites in Sri Lanka.", 
          es: "Visita Sri Dalada Maligawa, el venerado Templo del Diente Sagrado y uno de los lugares de peregrinación budista más importantes de Sri Lanka.", 
          pt: "Visite Sri Dalada Maligawa, o venerado Templo do Dente Sagrado e um dos locais de peregrinação budista mais importantes do Sri Lanka." 
        }
      },
      {
        name: { en: "Ella & Tea Country", es: "Ella y la Región del Té", pt: "Ella e Região do Chá" },
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800",
        desc: { 
          en: "Explore the misty highlands around Ella, surrounded by emerald tea plantations, waterfalls, mountain viewpoints and scenic railway landscapes.", 
          es: "Explora las montañas brumosas de Ella, rodeadas de plantaciones de té esmeralda, cascadas, miradores y espectaculares paisajes ferroviarios.", 
          pt: "Explore as montanhas enevoadas de Ella, cercadas por plantações de chá esmeralda, cachoeiras, mirantes e paisagens ferroviárias espetaculares." 
        }
      },
      {
        name: { en: "Yala National Park", es: "Parque Nacional Yala", pt: "Parque Nacional Yala" },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
        desc: { 
          en: "Experience one of Sri Lanka's iconic wildlife destinations, with opportunities to explore diverse habitats and observe elephants, birds and other native wildlife on safari.", 
          es: "Descubre uno de los destinos de vida silvestre más emblemáticos de Sri Lanka, con diferentes hábitats y oportunidades para observar elefantes, aves y otras especies durante un safari.", 
          pt: "Descubra um dos destinos de vida selvagem mais emblemáticos do Sri Lanka, com diversos habitats e oportunidades de observar elefantes, aves e outras espécies durante um safári." 
        }
      },
      {
        name: { en: "Galle Fort", es: "Galle Fort", pt: "Galle Fort" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
        desc: { 
          en: "Wander through the historic streets and ramparts of Galle Fort, a remarkable example of Sri Lanka's colonial maritime heritage.", 
          es: "Recorre las calles históricas y murallas de Galle Fort, un extraordinario ejemplo del patrimonio marítimo colonial de Sri Lanka.", 
          pt: "Caminhe pelas ruas históricas e muralhas do Galle Fort, um exemplo extraordinário do patrimônio marítimo colonial do Sri Lanka." 
        }
      },
      {
        name: { en: "Dambulla Cave Temple", es: "Templo Rupestre de Dambulla", pt: "Templo em Cavernas de Dambulla" },
        image: "https://images.unsplash.com/photo-1588598075727-4c7b80582845?q=80&w=800",
        desc: { 
          en: "Discover the spectacular cave temple complex of Dambulla, known for its Buddhist art, statues and historic religious atmosphere.", 
          es: "Descubre el espectacular complejo de templos rupestres de Dambulla, famoso por su arte budista, estatuas y profunda atmósfera religiosa.", 
          pt: "Descubra o impressionante complexo de templos em cavernas de Dambulla, conhecido por sua arte budista, estátuas e atmosfera religiosa histórica." 
        }
      }
    ],
    experiences: [
      {
        title: { en: "Private Sigiriya Heritage Experience", es: "Experiencia Privada en el Patrimonio de Sigiriya", pt: "Experiência Privativa do Patrimônio de Sigiriya" },
        desc: { en: "Explore Sigiriya with a private guide, combining the rock fortress with surrounding cultural landscapes.", es: "Explora Sigiriya con un guía privado, combinando la fortaleza con los paisajes culturales de sus alrededores.", pt: "Explore Sigiriya com um guia privativo, combinando a fortaleza com as paisagens culturais ao redor." }
      },
      {
        title: { en: "Luxury Tea Estate Experience", es: "Experiencia de Lujo en Plantaciones de Té", pt: "Experiência de Luxo em Quinta de Chá" },
        desc: { en: "Visit a scenic tea estate in the central highlands and discover the traditions behind Ceylon tea.", es: "Visita una plantación de té en las tierras altas y descubre las tradiciones detrás del famoso té de Ceilán.", pt: "Visite uma plantação de chá nas terras altas e descubra as tradições por trás do famoso chá de Ceilão." }
      },
      {
        title: { en: "Yala Private Wildlife Safari", es: "Safari Privado de Vida Silvestre en Yala", pt: "Safári Privativo de Vida Selvagem em Yala" },
        desc: { en: "Enjoy a private safari through Yala National Park with opportunities to observe Sri Lankan wildlife in its natural environment.", es: "Disfruta de un safari privado por el Parque Nacional de Yala y observa la vida silvestre de Sri Lanka en su entorno natural.", pt: "Desfrute de um safári privativo pelo Parque Nacional de Yala e observe a vida selvagem do Sri Lanka em seu ambiente natural." }
      },
      {
        title: { en: "Scenic Ella Train Journey", es: "Panorámico Viaje en Tren por Ella", pt: "Passeio Panorâmico de Trem em Ella" },
        desc: { en: "Travel through the spectacular hill country by train, passing tea plantations, valleys and mist-covered mountains.", es: "Viaja en tren por las espectaculares tierras altas, atravesando plantaciones de té, valles y montañas cubiertas de niebla.", pt: "Viaje de trem pelas espetaculares terras altas, passando por plantações de chá, vales e montanhas cobertas de neblina." }
      },
      {
        title: { en: "Galle Fort & Southern Coast", es: "Galle Fort y la Costa Sur", pt: "Galle Fort e Costa Sul" },
        desc: { en: "Discover colonial architecture, boutique cafés and coastal scenery around historic Galle Fort.", es: "Descubre arquitectura colonial, cafés boutique y paisajes costeros alrededor del histórico Galle Fort.", pt: "Descubra arquitetura colonial, cafés boutique e paisagens costeiras ao redor do histórico Galle Fort." }
      },
      {
        title: { en: "Sri Lankan Wellness & Ayurveda", es: "Bienestar y Ayurveda de Sri Lanka", pt: "Bem-Estar e Ayurveda do Sri Lanka" },
        desc: { en: "Enjoy a restorative wellness experience inspired by Sri Lanka's long-standing Ayurveda traditions.", es: "Disfruta de una experiencia de bienestar inspirada en las antiguas tradiciones ayurvédicas de Sri Lanka.", pt: "Desfrute de uma experiência de bem-estar inspirada nas antigas tradições de Ayurveda do Sri Lanka." }
      }
    ],
    hotels: [
      {
        name: "Cape Weligama",
        rating: "Luxury 5-Star Resort",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
        desc: { 
          en: "A refined clifftop coastal retreat offering expansive ocean views, elegant villas and a sophisticated southern Sri Lankan escape.", 
          es: "Un elegante refugio costero sobre un acantilado, con amplias vistas al océano, villas sofisticadas y una experiencia exclusiva en el sur de Sri Lanka.", 
          pt: "Um sofisticado refúgio costeiro sobre uma falésia, com amplas vistas para o oceano, villas elegantes e uma experiência exclusiva no sul do Sri Lanka." 
        }
      },
      {
        name: "Anantara Peace Haven Tangalle Resort",
        rating: "Luxury 5-Star Beach Resort",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
        desc: { 
          en: "A luxurious beachfront retreat on Sri Lanka's southern coast, combining tropical surroundings, spacious accommodation, wellness and refined resort experiences.", 
          es: "Un lujoso refugio frente al mar en la costa sur de Sri Lanka, que combina naturaleza tropical, alojamiento espacioso, bienestar y experiencias sofisticadas.", 
          pt: "Um luxuoso refúgio à beira-mar na costa sul do Sri Lanka, combinando natureza tropical, acomodações espaçosas, bem-estar e experiências sofisticadas." 
        }
      }
    ],
    suggestedItinerary: { 
      en: "Day 1: Arrival in Colombo and private transfer to the Cultural Triangle. Day 2: Sigiriya Rock Fortress and surrounding cultural experiences. Day 3: Dambulla Cave Temple and onward journey to Kandy. Day 4: Kandy heritage, Temple of the Sacred Tooth and scenic highlands. Day 5: Nuwara Eliya tea country and scenic transfer to Ella. Day 6: Ella exploration followed by a private wildlife safari in Yala. Day 7: Southern coast and Galle Fort, followed by a luxury beach stay. Day 8: Leisure breakfast and private transfer to Colombo for departure.", 
      es: "Día 1: Llegada a Colombo y traslado privado hacia el Triángulo Cultural. Día 2: Fortaleza de Sigiriya y experiencias culturales de los alrededores. Día 3: Templo rupestre de Dambulla y continuación hacia Kandy. Día 4: Patrimonio de Kandy, Templo del Diente Sagrado y tierras altas. Día 5: Tierras del té de Nuwara Eliya y traslado panorámico a Ella. Día 6: Exploración de Ella seguida de un safari privado en Yala. Día 7: Costa sur y Galle Fort, seguido de una estancia de lujo junto al mar. Día 8: Desayuno tranquilo y traslado privado a Colombo para la salida.", 
      pt: "Dia 1: Chegada a Colombo e traslado privativo para o Triângulo Cultural. Dia 2: Fortaleza de Sigiriya e experiências culturais nos arredores. Dia 3: Templo rupestre de Dambulla e continuação para Kandy. Dia 4: Patrimônio de Kandy, Templo do Dente Sagrado e terras altas. Dia 5: Região de chá de Nuwara Eliya e traslado panorâmico para Ella. Dia 6: Exploração de Ella seguida de um safári privativo em Yala. Dia 7: Costa sul e Galle Fort, seguidos de uma estadia de luxo à beira-mar. Dia 8: Café da manhã tranquilo e traslado privativo para Colombo para a partida." 
    },
    travelTips: [
      { en: "Sri Lanka has different climatic zones, so weather can vary considerably between the coast, cultural triangle and central highlands.", es: "Sri Lanka tiene diferentes zonas climáticas, por lo que el clima puede variar considerablemente entre la costa, el Triángulo Cultural y las tierras altas.", pt: "O Sri Lanka possui diferentes zonas climáticas, portanto o clima pode variar bastante entre a costa, o Triângulo Cultural e as terras altas." },
      { en: "Dress modestly when visiting Buddhist and Hindu temples and follow local photography and footwear rules.", es: "Viste de manera modesta al visitar templos budistas e hindúes y respeta las normas locales sobre fotografía y calzado.", pt: "Vista-se de maneira modesta ao visitar templos budistas e hindus e respeite as regras locais sobre fotografia e calçados." },
      { en: "Carry a light jacket and comfortable walking shoes for the cooler highlands around Kandy, Nuwara Eliya and Ella.", es: "Lleva una chaqueta ligera y calzado cómodo para las zonas montañosas más frescas de Kandy, Nuwara Eliya y Ella.", pt: "Leve uma jaqueta leve e calçados confortáveis para as regiões montanhosas mais frescas de Kandy, Nuwara Eliya e Ella." },
      { en: "Wildlife sightings are never guaranteed; follow park regulations and maintain a respectful distance from animals.", es: "Los avistamientos de fauna no están garantizados; respeta las normas del parque y mantén una distancia adecuada de los animales.", pt: "Avistamentos de animais selvagens nunca são garantidos; siga as regras do parque e mantenha uma distância segura dos animais." },
      { en: "Allow extra travel time between destinations, especially in the hill country, and reserve popular luxury stays and safari experiences in advance.", es: "Reserva tiempo adicional para los desplazamientos, especialmente en las montañas, y reserva con antelación los alojamientos de lujo y safaris más populares.", pt: "Reserve tempo extra para os deslocamentos, especialmente nas montanhas, e reserve com antecedência os hotéis de luxo e safáris mais procurados." }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Sri Lanka?", es: "¿Cuál es la mejor época para visitar Sri Lanka?", pt: "Qual é a melhor época para visitar o Sri Lanka?" },
        a: { en: "December to March is a strong general period for a classic cultural, hill-country and southern-coast itinerary, although Sri Lanka can be visited throughout the year depending on the region.", es: "De diciembre a marzo es un buen período general para un itinerario clásico por la cultura, las montañas y la costa sur, aunque Sri Lanka puede visitarse durante todo el año dependiendo de la región.", pt: "De dezembro a março é um excelente período geral para um roteiro clássico envolvendo cultura, montanhas e costa sul, embora o Sri Lanka possa ser visitado durante todo o ano dependendo da região." }
      },
      {
        q: { en: "How many days are ideal for Sri Lanka?", es: "¿Cuántos días son ideales para Sri Lanka?", pt: "Quantos dias são ideais para o Sri Lanka?" },
        a: { en: "A 7–10 day journey allows travellers to combine cultural heritage, tea country, wildlife and the southern coast without rushing.", es: "Un viaje de 7 a 10 días permite combinar patrimonio cultural, tierras del té, vida silvestre y costa sur sin prisas.", pt: "Uma viagem de 7 a 10 dias permite combinar patrimônio cultural, regiões de chá, vida selvagem e costa sul sem pressa." }
      },
      {
        q: { en: "Is Sri Lanka suitable for a luxury holiday?", es: "¿Sri Lanka es adecuado para unas vacaciones de lujo?", pt: "O Sri Lanka é adequado para férias de luxo?" },
        a: { en: "Yes. Sri Lanka offers luxury resorts, boutique hotels, private guides, chauffeur-driven journeys, wellness retreats, wildlife safaris and premium beach experiences.", es: "Sí. Sri Lanka ofrece resorts de lujo, hoteles boutique, guías privados, viajes con chófer, retiros de bienestar, safaris y experiencias premium junto al mar.", pt: "Sim. O Sri Lanka oferece resorts de luxo, hotéis boutique, guias privativos, viagens com motorista, retiros de bem-estar, safáris e experiências premium à beira-mar." }
      },
      {
        q: { en: "Can Sri Lanka combine culture and beach holidays?", es: "¿Se puede combinar cultura y playa en Sri Lanka?", pt: "É possível combinar cultura e praia no Sri Lanka?" },
        a: { en: "Absolutely. A journey can combine Sigiriya and Kandy with Ella, Yala and the southern beaches around Galle and Tangalle.", es: "Por supuesto. Un viaje puede combinar Sigiriya y Kandy con Ella, Yala y las playas del sur alrededor de Galle y Tangalle.", pt: "Com certeza. Uma viagem pode combinar Sigiriya e Kandy com Ella, Yala e as praias do sul ao redor de Galle e Tangalle." }
      },
      {
        q: { en: "Is Sri Lanka good for wildlife experiences?", es: "¿Sri Lanka es un buen destino para la vida silvestre?", pt: "O Sri Lanka é bom para experiências com vida selvagem?" },
        a: { en: "Yes. National parks such as Yala and Udawalawe offer safari experiences, while the island's diverse habitats support a wide variety of wildlife and birdlife.", es: "Sí. Parques nacionales como Yala y Udawalawe ofrecen experiencias de safari, mientras que los diversos hábitats de la isla albergan una gran variedad de fauna y aves.", pt: "Sim. Parques nacionais como Yala e Udawalawe oferecem experiências de safári, enquanto os diversos habitats da ilha abrigam uma grande variedade de animais e aves." }
      }
    ],
    seo: {
      en: {
        title: "Sri Lanka Luxury Travel | Heritage, Wildlife & Tropical Beaches",
        description: "Discover Sri Lanka with luxury journeys through ancient heritage, Sigiriya, Kandy, Ella tea country, Yala wildlife and tropical southern beaches.",
        keywords: "Sri Lanka luxury travel, Sri Lanka holidays, Sri Lanka luxury tour, Sigiriya, Kandy, Ella, Yala Safari, Galle Fort, Sri Lanka beaches, Sri Lanka honeymoon"
      },
      es: {
        title: "Viajes de Lujo a Sri Lanka | Patrimonio, Vida Silvestre y Playas Tropicales",
        description: "Descubre Sri Lanka con viajes de lujo por su patrimonio ancestral, Sigiriya, Kandy, las montañas de Ella, la vida silvestre de Yala y sus playas tropicales.",
        keywords: "viajes de lujo a Sri Lanka, vacaciones en Sri Lanka, tour de lujo Sri Lanka, Sigiriya, Kandy, Ella, safari Yala, Galle Fort, playas de Sri Lanka, luna de miel en Sri Lanka"
      },
      pt: {
        title: "Viagens de Luxo ao Sri Lanka | Patrimônio, Vida Selvagem e Praias Tropicais",
        description: "Descubra o Sri Lanka em viagens de luxo por seu patrimônio ancestral, Sigiriya, Kandy, as montanhas de Ella, a vida selvagem de Yala e praias tropicais.",
        keywords: "viagens de luxo para Sri Lanka, férias no Sri Lanka, tour de luxo Sri Lanka, Sigiriya, Kandy, Ella, safári Yala, Galle Fort, praias do Sri Lanka, lua de mel no Sri Lanka"
      }
    }
  },
  {
    slug: "vietnam",
    title: { 
      en: "Vietnam", 
      es: "Vietnam", 
      pt: "Vietnã" 
    },
    tagline: { 
      en: "Ancient Heritage, Emerald Bays & Timeless Vietnamese Culture", 
      es: "Patrimonio Milenario, Bahías Esmeralda y Cultura Vietnamita", 
      pt: "Patrimônio Milenar, Baías Esmeralda e Cultura Vietnamita" 
    },
    region: "Southeast Asia (Vietnam)",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200",
      "https://images.unsplash.com/photo-1508672019048-805479767384?q=80&w=1200",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1200",
      "https://images.unsplash.com/photo-1583253945415-3733c77d4fb0?q=80&w=1200",
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1200"
    ],
    description: { 
      en: "Discover Vietnam, a captivating Southeast Asian destination where ancient heritage, dramatic landscapes, vibrant cities and extraordinary cuisine come together. From the historic streets of Hanoi and the limestone islands of Ha Long Bay to the lantern-lit lanes of Hoi An, the energy of Ho Chi Minh City and the tropical beaches of Phu Quoc, Vietnam offers an unforgettable journey through culture, nature, adventure and refined hospitality.", 
      es: "Descubre Vietnam, un fascinante destino del Sudeste Asiático donde patrimonio milenario, paisajes espectaculares, ciudades vibrantes y una gastronomía extraordinaria se unen. Desde las históricas calles de Hanoi y las islas de piedra caliza de la bahía de Ha Long hasta las calles iluminadas por faroles de Hoi An, la energía de Ho Chi Minh City y las playas tropicales de Phu Quoc, Vietnam ofrece un viaje inolvidable a través de la cultura, la naturaleza, la aventura y una hospitalidad excepcional.", 
      pt: "Descubra o Vietnã, um fascinante destino do Sudeste Asiático onde patrimônio milenar, paisagens dramáticas, cidades vibrantes e uma gastronomia extraordinária se encontram. Das ruas históricas de Hanói e das ilhas calcárias da Baía de Ha Long às vielas iluminadas por lanternas de Hoi An, à energia de Ho Chi Minh City e às praias tropicais de Phu Quoc, o Vietnã oferece uma viagem inesquecível por cultura, natureza, aventura e hospitalidade sofisticada." 
    },
    overview: {
      en: "Discover Vietnam, a captivating Southeast Asian destination where ancient heritage, dramatic landscapes, vibrant cities and extraordinary cuisine come together. From the historic streets of Hanoi and the limestone islands of Ha Long Bay to the lantern-lit lanes of Hoi An, the energy of Ho Chi Minh City and the tropical beaches of Phu Quoc, Vietnam offers an unforgettable journey through culture, nature, adventure and refined hospitality.",
      es: "Descubre Vietnam, un fascinante destino del Sudeste Asiático donde patrimonio milenario, paisajes espectaculares, ciudades vibrantes y una gastronomía extraordinaria se unen. Desde las históricas calles de Hanoi y las islas de piedra caliza de la bahía de Ha Long hasta las calles iluminadas por faroles de Hoi An, la energía de Ho Chi Minh City y las playas tropicales de Phu Quoc, Vietnam ofrece un viaje inolvidable a través de la cultura, la naturaleza, la aventura y una hospitalidad excepcional.",
      pt: "Descubra o Vietnã, um fascinante destino do Sudeste Asiático onde patrimônio milenar, paisagens dramáticas, cidades vibrantes e uma gastronomia extraordinária se encontram. Das ruas históricas de Hanói e das ilhas calcárias da Baía de Ha Long às vielas iluminadas por lanternas de Hoi An, à energia de Ho Chi Minh City e às praias tropicais de Phu Quoc, o Vietnã oferece uma viagem inesquecível por cultura, natureza, aventura e hospitalidade sofisticada."
    },
    history: {
      en: "Vietnam's history stretches across thousands of years and has been shaped by ancient kingdoms, dynasties, imperial courts, regional cultures and centuries of interaction with neighbouring civilizations. Historic landmarks such as the Imperial City of Hue, Hanoi's Old Quarter and ancient trading towns such as Hoi An reveal different chapters of the country's past, while traditional architecture and cultural practices continue to connect modern Vietnam with its heritage.",
      es: "La historia de Vietnam se extiende a lo largo de miles de años y ha sido moldeada por antiguos reinos, dinastías, cortes imperiales, culturas regionales y siglos de interacción con las civilizaciones vecinas. Lugares históricos como la Ciudad Imperial de Hue, el casco antiguo de Hanoi y antiguas ciudades comerciales como Hoi An muestran diferentes capítulos del pasado del país, mientras que la arquitectura tradicional y las prácticas culturales mantienen viva la conexión entre el Vietnam moderno y su patrimonio.",
      pt: "A história do Vietnã se estende por milhares de anos e foi moldada por antigos reinos, dinastias, cortes imperiais, culturas regionais e séculos de interação com civilizações vizinhas. Monumentos históricos como a Cidade Imperial de Hue, o bairro antigo de Hanói e antigas cidades comerciais como Hoi An revelam diferentes capítulos do passado do país, enquanto a arquitetura tradicional e as práticas culturais continuam conectando o Vietnã moderno ao seu patrimônio."
    },
    culture: {
      en: "Vietnamese culture is a rich blend of family traditions, ancestral customs, Buddhism, local beliefs, craftsmanship and regional identities. Visitors can experience traditional markets, lantern festivals, water puppetry, craft villages, tea and coffee culture, local ceremonies and the graceful áo dài. From northern villages to central heritage towns and southern river communities, each region adds its own character to Vietnamese culture.",
      es: "La cultura vietnamita es una rica combinación de tradiciones familiares, costumbres ancestrales, budismo, creencias locales, artesanía e identidades regionales. Los visitantes pueden descubrir mercados tradicionales, festivales de faroles, marionetas de agua, pueblos artesanales, la cultura del té y el café, ceremonias locales y el elegante áo dài. Desde las aldeas del norte hasta las ciudades patrimoniales del centro y las comunidades fluviales del sur, cada región aporta su propia personalidad a la cultura vietnamita.",
      pt: "A cultura vietnamita é uma rica combinação de tradições familiares, costumes ancestrais, budismo, crenças locais, artesanato e identidades regionales. Os visitantes podem conhecer mercados tradicionais, festivais de lanternas, teatro de marionetes na água, vilarejos artesanais, a cultura do chá e do café, cerimônias locais e o elegante áo dài. Das aldeias do norte às cidades históricas do centro e às comunidades ribeirinhas do sul, cada região acrescenta sua própria identidade à cultura vietnamita."
    },
    localFood: {
      en: "Vietnamese cuisine is celebrated for its fresh ingredients, aromatic herbs, balanced flavours and remarkable regional diversity. Discover classics such as Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế and Cao Lầu, alongside fresh seafood, Vietnamese coffee and regional specialities. Food is one of the best ways to experience the distinct character of northern, central and southern Vietnam.",
      es: "La gastronomía vietnamita es famosa por sus ingredientes frescos, hierbas aromáticas, sabores equilibrados y extraordinaria diversidad regional. Descubre clásicos como Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế y Cao Lầu, además de mariscos frescos, café vietnamita y especialidades regionales. La gastronomía es una de las mejores formas de experimentar la personalidad de las regiones del norte, centro y sur de Vietnam.",
      pt: "A culinária vietnamita é conhecida por seus ingredientes frescos, ervas aromáticas, sabores equilibrados e extraordinária diversidade regional. Descubra clássicos como Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế e Cao Lầu, além de frutos do mar frescos, café vietnamita e especialidades regionais. A gastronomia é uma das melhores formas de conhecer a identidade distinta do norte, centro e sul do Vietnã."
    },
    bestTime: { 
      en: "March to April", 
      es: "Marzo a abril", 
      pt: "Março a abril" 
    },
    attractions: [
      {
        name: { en: "Ha Long Bay", es: "Bahía de Ha Long", pt: "Baía de Ha Long" },
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800",
        desc: { 
          en: "Cruise through a spectacular seascape of limestone karsts, emerald waters and dramatic islands, creating one of Vietnam's most iconic natural experiences.", 
          es: "Navega por un espectacular paisaje de formaciones kársticas de piedra caliza, aguas esmeralda e islas dramáticas, una de las experiencias naturales más emblemáticas de Vietnam.", 
          pt: "Navegue por uma paisagem espetacular de formações calcárias, águas esmeralda e ilhas dramáticas, criando uma das experiências naturais mais emblemáticas do Vietnã." 
        }
      },
      {
        name: { en: "Hoi An Ancient Town", es: "Ciudad Antigua de Hoi An", pt: "Cidade Antiga de Hoi An" },
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800",
        desc: { 
          en: "Wander through beautifully preserved historic streets filled with lanterns, traditional houses, riverside cafés, artisan workshops and centuries-old trading heritage.", 
          es: "Recorre calles históricas bellamente conservadas, llenas de faroles, casas tradicionales, cafés junto al río, talleres artesanales y siglos de patrimonio comercial.", 
          pt: "Caminhe por ruas históricas bem preservadas, repletas de lanternas, casas tradicionais, cafés à beira do rio, oficinas de artesanato e séculos de patrimônio comercial." 
        }
      },
      {
        name: { en: "Hanoi Old Quarter & Hoan Kiem Lake", es: "Casco Antiguo de Hanoi y Lago Hoan Kiem", pt: "Bairro Antigo de Hanói e Lago Hoan Kiem" },
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
        desc: { 
          en: "Experience Hanoi's historic heart through narrow streets, traditional architecture, local cafés, lively markets and the peaceful waters of Hoan Kiem Lake.", 
          es: "Descubre el corazón histórico de Hanoi a través de calles estrechas, arquitectura tradicional, cafés locales, mercados animados y las tranquilas aguas del lago Hoan Kiem.", 
          pt: "Conheça o coração histórico de Hanói através de ruas estreitas, arquitetura tradicional, cafés locais, mercados movimentados e as tranquilas águas do Lago Hoan Kiem." 
        }
      },
      {
        name: { en: "Ninh Binh & Trang An", es: "Ninh Binh y Trang An", pt: "Ninh Binh e Trang An" },
        image: "https://images.unsplash.com/photo-1508672019048-805479767384?q=80&w=800",
        desc: { 
          en: "Explore dramatic limestone mountains, winding rivers, caves and lush countryside on a scenic boat journey through the landscapes of northern Vietnam.", 
          es: "Explora espectaculares montañas de piedra caliza, ríos serpenteantes, cuevas y exuberantes paisajes rurales durante un recorrido en barco por el norte de Vietnam.", 
          pt: "Explore impressionantes montanhas calcárias, rios sinuosos, cavernas e paisagens rurais exuberantes em um passeio de barco pelo norte do Vietnã." 
        }
      },
      {
        name: { en: "Imperial City of Hue", es: "Ciudad Imperial de Hue", pt: "Cidade Imperial de Hue" },
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800",
        desc: { 
          en: "Discover the former imperial capital of Vietnam through its monumental citadel, royal architecture, ancient tombs and tranquil Perfume River landscapes.", 
          es: "Descubre la antigua capital imperial de Vietnam a través de su monumental ciudadela, arquitectura real, tumbas históricas y los tranquilos paisajes del río Perfume.", 
          pt: "Descubra a antiga capital imperial do Vietnã através de sua monumental cidadela, arquitetura real, túmulos históricos e as tranquilas paisagens do Rio Perfume." 
        }
      },
      {
        name: { en: "Mekong Delta", es: "Delta del Mekong", pt: "Delta do Mekong" },
        image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=800",
        desc: { 
          en: "Travel through a vibrant river world of floating markets, tropical orchards, waterways, traditional villages and local food experiences in southern Vietnam.", 
          es: "Descubre un vibrante mundo fluvial de mercados flotantes, huertos tropicales, canales, aldeas tradicionales y experiencias gastronómicas locales en el sur de Vietnam.", 
          pt: "Explore um vibrante mundo de rios com mercados flutuantes, pomares tropicais, canais, aldeias tradicionais e experiências gastronômicas locais no sul do Vietnã." 
        }
      }
    ],
    experiences: [
      {
        title: { en: "Luxury Ha Long Bay Overnight Cruise", es: "Crucero de Lujo de una Noche por la Bahía de Ha Long", pt: "Cruzeiro de Luxo com Pernoite pela Baía de Ha Long" },
        desc: { en: "Sail among towering limestone islands aboard a premium cruise with elegant accommodation, Vietnamese cuisine, kayaking and unforgettable sunrise and sunset views.", es: "Navega por islas de piedra caliza a bordo de un crucero premium con alojamiento elegante, gastronomía vietnamita y kayaks.", pt: "Navegue por ilhas calcárias a bordo de um cruzeiro premium com acomodações elegantes, gastronomia vietnamita e caiaque." }
      },
      {
        title: { en: "Hanoi Street Food & Old Quarter Experience", es: "Experiencia Gastronómica por el Casco Antiguo de Hanoi", pt: "Experiência Gastronômica pelo Bairro Antigo de Hanói" },
        desc: { en: "Explore Hanoi's historic streets while tasting authentic local dishes, Vietnamese coffee, traditional snacks and iconic street-food specialities.", es: "Explora las calles históricas de Hanoi probando platos locales auténticos, café vietnamita y especialidades callejeras.", pt: "Explore as ruas históricas de Hanói provando pratos locais autênticos, café vietnamita e especialidades de rua." }
      },
      {
        title: { en: "Hoi An Lantern & Cultural Evening", es: "Noche de Faroles y Cultura en Hoi An", pt: "Noite de Lanternas e Cultura em Hoi An" },
        desc: { en: "Discover Hoi An after sunset with illuminated lantern streets, riverside dining, traditional crafts and a peaceful evening atmosphere.", es: "Descubre Hoi An al anochecer con calles iluminadas por faroles, cenas junto al río y artesanía tradicional.", pt: "Descubra Hoi An ao anoitecer com ruas iluminadas por lanternas, jantares à beira do rio e artesanato tradicional." }
      },
      {
        title: { en: "Vietnamese Cooking Class & Market Tour", es: "Clase de Cocina Vietnamita y Visita al Mercado", pt: "Aula de Culinária Vietnamita e Visita ao Mercado" },
        desc: { en: "Visit a local market and learn how to prepare classic Vietnamese dishes using fresh herbs, spices and traditional cooking techniques.", es: "Visita un mercado local y aprende a preparar platos clásicos vietnamitas con hierbas frescas y técnicas tradicionales.", pt: "Visite um mercado local e aprenda a preparar pratos clássicos vietnamitas usando ervas frescas e técnicas tradicionais." }
      },
      {
        title: { en: "Mekong Delta Private River Experience", es: "Experiencia Privada por el Delta del Mekong", pt: "Experiência Privativa pelo Delta do Mekong" },
        desc: { en: "Cruise along peaceful waterways, visit local communities and discover tropical gardens, floating markets and authentic southern Vietnamese cuisine.", es: "Navega por tranquilos canales, visita comunidades locales, jardines tropicales y mercados flotantes.", pt: "Navegue por canais tranquilos, visite comunidades locais, jardins tropicais e mercados flutuantes." }
      },
      {
        title: { en: "Luxury Phu Quoc Beach & Wellness Retreat", es: "Retiro de Playa y Bienestar de Lujo en Phu Quoc", pt: "Retiro de Praia e Bem-Estar de Luxo em Phu Quoc" },
        desc: { en: "Relax on tropical beaches with luxury resort accommodation, spa treatments, private dining, island excursions and spectacular sunsets.", es: "Relájate en playas tropicales con resorts de lujo, tratamientos de spa, cenas privadas y espectaculares atardeceres.", pt: "Relaxe em praias tropicais com resorts de luxo, tratamentos de spa, jantares privativos e pores do sol espetaculares." }
      }
    ],
    hotels: [
      {
        name: "Sofitel Legend Metropole Hanoi",
        rating: "5 Star Heritage Luxury",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        desc: { 
          en: "An iconic historic luxury hotel in the heart of Hanoi, combining elegant French-colonial architecture, refined Vietnamese hospitality, sophisticated dining and a prestigious central location.", 
          es: "Un icónico hotel histórico de lujo en el corazón de Hanoi que combina elegante arquitectura colonial francesa, refinada hospitalidad vietnamita, gastronomía sofisticada y una ubicación privilegiada.", 
          pt: "Um icônico hotel histórico de luxo no coração de Hanói, combinando elegante arquitetura colonial francesa, sofisticada hospitalidade vietnamita, gastronomia refinada e uma localização privilegiada." 
        }
      },
      {
        name: "Four Seasons Resort The Nam Hai, Hoi An",
        rating: "5 Star Ultra Luxury",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
        desc: { 
          en: "An elegant beachfront luxury retreat near Hoi An featuring private villas, tropical gardens, exceptional dining, wellness experiences and direct access to the central coast.", 
          es: "Un elegante refugio de lujo frente al mar cerca de Hoi An, con villas privadas, jardines tropicales, gastronomía excepcional, experiencias de bienestar y acceso directo a la costa central.", 
          pt: "Um elegante refúgio de luxo à beira-mar próximo a Hoi An, com villas privativas, jardins tropicais, gastronomia excepcional, experiências de bem-estar e acesso direto à costa central." 
        }
      }
    ],
    suggestedItinerary: { 
      en: "Day 1: Arrival in Hanoi & Luxury Old Quarter Dinner. Day 2: Hanoi Old Quarter, Hoan Kiem Lake, Temple of Literature & Local Food Experience. Day 3: Transfer to Ha Long Bay & Luxury Overnight Cruise. Day 4: Sunrise Cruise & Return to Hanoi, then flight to Da Nang. Day 5: Hoi An Ancient Town, Lantern Streets & Vietnamese Cooking Experience. Day 6: Ninh Binh & Trang An Scenic Boat Experience. Day 7: Fly to Ho Chi Minh City & Luxury City Experience. Day 8: Mekong Delta Private River Journey & Local Culinary Experience. Day 9: Fly to Phu Quoc & Luxury Beach Resort Retreat. Day 10: Private Island Leisure, Spa & Sunset Dinner.", 
      es: "Día 1: Llegada a Hanoi y cena de lujo en el Casco Antiguo. Día 2: Casco Antiguo de Hanoi, Lago Hoan Kiem, Templo de la Literatura y experiencia gastronómica local. Día 3: Traslado a la Bahía de Ha Long y crucero de lujo con pernocta. Día 4: Crucero al amanecer y regreso a Hanoi, seguido de vuelo a Da Nang. Día 5: Ciudad Antigua de Hoi An, calles de faroles y experiencia de cocina vietnamita. Día 6: Ninh Binh y recorrido panorámico en barco por Trang An. Día 7: Vuelo a Ho Chi Minh City y experiencia de lujo por la ciudad. Día 8: Viaje privado por el Delta del Mekong y experiencia gastronómica local. Día 9: Vuelo a Phu Quoc y estancia en un resort de lujo frente al mar. Día 10: Tiempo libre en la isla, spa y cena al atardecer.", 
      pt: "Dia 1: Chegada a Hanói e jantar de luxo no Bairro Antigo. Dia 2: Bairro Antigo de Hanói, Lago Hoan Kiem, Templo da Literatura e experiência gastronômica local. Dia 3: Traslado para a Baía de Ha Long e cruzeiro de luxo com pernoite. Dia 4: Cruzeiro ao nascer do sol e retorno a Hanói, seguido de voo para Da Nang. Dia 5: Cidade Antiga de Hoi An, ruas de lanternas e experiência de culinária vietnamita. Dia 6: Ninh Binh e passeio panorâmico de barco por Trang An. Dia 7: Voo para Ho Chi Minh City e experiência de luxo pela cidade. Dia 8: Jornada privativa pelo Delta do Mekong e experiência gastronômica local. Dia 9: Voo para Phu Quoc e estadia em resort de luxo à beira-mar. Dia 10: Lazer na ilha, spa e jantar ao pôr do sol." 
    },
    travelTips: [
      { en: "Vietnam has different weather patterns from north to south, so check regional forecasts when planning a multi-city itinerary.", es: "Vietnam tiene diferentes patrones climáticos de norte a sur, por lo que conviene consultar el clima regional al planificar un itinerario por varias ciudades.", pt: "O Vietnã possui diferentes padrões climáticos de norte a sul, portanto consulte as previsões regionais ao planejar um roteiro por várias cidades." },
      { en: "Carry lightweight clothing, comfortable walking shoes, sunscreen and a light rain jacket.", es: "Lleva ropa ligera, calzado cómodo para caminar, protector solar y una chaqueta ligera para la lluvia.", pt: "Leve roupas leves, calçados confortáveis para caminhar, protetor solar e uma jaqueta leve para chuva." },
      { en: "Dress respectfully when visiting temples, pagodas and other religious or cultural sites.", es: "Viste de manera respetuosa al visitar templos, pagodas y otros lugares religiosos o culturales.", pt: "Vista-se de maneira respeitosa ao visitar templos, pagodes e outros locais religiosos ou culturais." },
      { en: "Book overnight Ha Long Bay cruises and premium heritage hotels in advance during popular travel periods.", es: "Reserva con antelación los cruceros nocturnos por la Bahía de Ha Long y los hoteles patrimoniales de lujo durante los períodos de mayor demanda.", pt: "Reserve com antecedência os cruzeiros com pernoite pela Baía de Ha Long e os hotéis históricos de luxo durante os períodos de maior procura." },
      { en: "Keep some Vietnamese cash available for small restaurants, markets, local transport and rural experiences.", es: "Lleva algo de efectivo en moneda vietnamita para pequeños restaurantes, mercados, transporte local y experiencias rurales.", pt: "Tenha algum dinheiro em espécie na moeda vietnamita para pequenos restaurantes, mercados, transporte local e experiências rurais." }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Vietnam?", es: "¿Cuál es la mejor época para visitar Vietnam?", pt: "Qual é a melhor época para visitar o Vietnã?" },
        a: { en: "March and April are generally good months for a broad Vietnam itinerary, although the ideal season varies considerably between northern, central and southern regions.", es: "Marzo y abril suelen ser buenos meses para un itinerario amplio por Vietnam, aunque la temporada ideal varía considerablemente entre las regiones del norte, centro y sur.", pt: "Março e abril são geralmente bons meses para um roteiro abrangente pelo Vietnã, embora a melhor época varie consideravelmente entre as regiões norte, central e sul." }
      },
      {
        q: { en: "How many days are ideal for Vietnam?", es: "¿Cuántos días son ideales para Vietnam?", pt: "Quantos dias são ideais para o Vietnã?" },
        a: { en: "A 9 to 12-day itinerary is ideal for combining northern heritage, central Vietnam, southern culture and a relaxing beach extension.", es: "Un itinerario de 9 a 12 días es ideal para combinar el patrimonio del norte, el centro de Vietnam, la cultura del sur y una extensión de playa relajante.", pt: "Um roteiro de 9 a 12 dias é ideal para combinar o patrimônio do norte, o centro do Vietnã, a cultura do sul e uma extensão relaxante na praia." }
      },
      {
        q: { en: "Is Vietnam suitable for a luxury holiday?", es: "¿Vietnam es adecuado para unas vacaciones de lujo?", pt: "O Vietnã é adequado para férias de luxo?" },
        a: { en: "Yes. Vietnam offers luxury heritage hotels, private cruises, premium beach resorts, wellness retreats, private guides, fine dining and curated cultural experiences.", es: "Sí. Vietnam ofrece hoteles patrimoniales de lujo, cruceros privados, resorts de playa premium, retiros de bienestar, guías privados, alta gastronomía y experiencias culturales personalizadas.", pt: "Sim. O Vietnã oferece hotéis históricos de luxo, cruzeiros privativos, resorts de praia premium, retiros de bem-estar, guias privados, alta gastronomia e experiências culturais personalizadas." }
      },
      {
        q: { en: "Can Vietnam be combined with a beach holiday?", es: "¿Se puede combinar Vietnam con unas vacaciones de playa?", pt: "É possível combinar o Vietnã com férias na praia?" },
        a: { en: "Yes. Phu Quoc, the central coast and destinations around Nha Trang and Da Nang provide excellent options for adding beaches and resort relaxation to a cultural itinerary.", es: "Sí. Phu Quoc, la costa central y destinos alrededor de Nha Trang y Da Nang ofrecen excelentes opciones para añadir playas y descanso en resorts a un itinerario cultural.", pt: "Sim. Phu Quoc, a costa central e destinos próximos a Nha Trang e Da Nang oferecem excelentes opções para adicionar praias e descanso em resorts a um roteiro cultural." }
      },
      {
        q: { en: "What food should I try in Vietnam?", es: "¿Qué comida debería probar en Vietnam?", pt: "Que comidas devo experimentar no Vietnã?" },
        a: { en: "Try Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế, Cao Lầu, Vietnamese coffee and regional seafood dishes.", es: "Prueba Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế, Cao Lầu, café vietnamita y platos regionales de mariscos.", pt: "Experimente Phở, Bánh Mì, Bún Chả, Bánh Xèo, Bún Bò Huế, Cao Lầu, café vietnamita e pratos regionais de frutos do mar." }
      }
    ],
    seo: {
      en: {
        title: "Vietnam Luxury Travel Guide | Hanoi, Ha Long Bay & Hoi An",
        description: "Discover Vietnam with Hanoi heritage, Ha Long Bay cruises, Hoi An culture, Mekong Delta experiences, luxury resorts, Vietnamese cuisine and tropical beaches.",
        keywords: "Vietnam luxury travel, Vietnam holidays, Vietnam itinerary, Hanoi Vietnam, Ha Long Bay, Hoi An Vietnam, Ho Chi Minh City, Mekong Delta, Phu Quoc, Vietnam luxury hotels, Vietnam tourism"
      },
      es: {
        title: "Vietnam | Guía de Viaje de Lujo, Hanoi, Ha Long Bay y Hoi An",
        description: "Descubre Vietnam con el patrimonio de Hanoi, cruceros por Ha Long Bay, la cultura de Hoi An, el Delta del Mekong, resorts de lujo y playas tropicales.",
        keywords: "viaje a Vietnam, Vietnam de lujo, vacaciones Vietnam, Hanoi Vietnam, Bahía de Ha Long, Hoi An Vietnam, Ho Chi Minh City, Delta del Mekong, Phu Quoc, hoteles de lujo Vietnam"
      },
      pt: {
        title: "Vietnã | Guia de Viagem de Luxo, Hanói, Ha Long e Hoi An",
        description: "Descubra o Vietnã com o patrimônio de Hanói, cruzeiros pela Baía de Ha Long, cultura de Hoi An, Delta do Mekong, resorts de luxo e praias tropicais.",
        keywords: "viagem para Vietnã, Vietnã luxo, férias Vietnã, Hanói Vietnã, Baía de Ha Long, Hoi An Vietnã, Ho Chi Minh City, Delta do Mekong, Phu Quoc, hotéis de luxo Vietnã"
      }
    }
  },
  {
    slug: "sri-lanka",
    title: { 
      en: "Sri Lanka", 
      es: "Sri Lanka", 
      pt: "Sri Lanka" 
    },
    tagline: { 
      en: "Ancient Heritage, Emerald Tea Hills, Wildlife & Tropical Beaches", 
      es: "Patrimonio Ancestral, Colinas de Té Esmeralda, Vida Silvestre y Playas Tropicales", 
      pt: "Patrimônio Ancestral, Colinas de Chá Esmeralda, Vida Selvagem e Praias Tropicais" 
    },
    region: "South Asia (Sri Lanka)",
    image: "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=1200",
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=1200",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200",
      "https://images.unsplash.com/photo-1566296515805-59b489d81d22?q=80&w=1200",
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1200",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1200"
    ],
    description: { 
      en: "Discover Sri Lanka, a captivating island where ancient kingdoms, sacred temples, emerald tea plantations, tropical beaches and extraordinary wildlife come together in one unforgettable journey. From the iconic Sigiriya Rock Fortress and the sacred city of Kandy to the misty hills of Ella, the colonial charm of Galle Fort and the wild landscapes of Yala National Park, Sri Lanka offers an exceptional blend of culture, nature, adventure and relaxation. Known for its warm hospitality, aromatic cuisine, world-renowned Ceylon tea and remarkable biodiversity, Sri Lanka is perfectly suited to luxury escapes, cultural journeys, wildlife safaris, wellness retreats and romantic beach holidays.", 
      es: "Descubre Sri Lanka, una fascinante isla donde antiguos reinos, templos sagrados, plantaciones de té esmeralda, playas tropicales y una extraordinaria vida silvestre se unen en un viaje inolvidable. Desde la icónica fortaleza de roca de Sigiriya y la ciudad sagrada de Kandy hasta las montañas brumosas de Ella, el encanto colonial de Galle Fort y los paisajes salvajes del Parque Nacional de Yala, Sri Lanka ofrece una combinación excepcional de cultura, naturaleza, aventura y descanso. Reconocida por su cálida hospitalidad, su cocina aromática, el famoso té de Ceilán y su extraordinaria biodiversidad, Sri Lanka es ideal para escapadas de lujo, viajes culturales, safaris, retiros de bienestar y vacaciones románticas junto al mar.", 
      pt: "Descubra o Sri Lanka, uma ilha fascinante onde antigos reinos, templos sagrados, plantações de chá esmeralda, praias tropicais e uma extraordinária vida selvagem se encontram em uma viagem inesquecível. Da icônica Fortaleza de Sigiriya e da cidade sagrada de Kandy às montanhas enevoadas de Ella, ao charme colonial do Galle Fort e às paisagens selvagens do Parque Nacional de Yala, o Sri Lanka oferece uma combinação excepcional de cultura, natureza, aventura e relaxamento. Conhecido por sua hospitalidade acolhedora, sua culinária aromática, o famoso chá de Ceilão e sua extraordinária biodiversidade, o Sri Lanka é ideal para viagens de luxo, experiências culturais, safáris, retiros de bem-estar e férias românticas à beira-mar." 
    },
    overview: {
      en: "Discover Sri Lanka, a captivating island where ancient kingdoms, sacred temples, emerald tea plantations, tropical beaches and extraordinary wildlife come together in one unforgettable journey. From the iconic Sigiriya Rock Fortress and the sacred city of Kandy to the misty hills of Ella, the colonial charm of Galle Fort and the wild landscapes of Yala National Park, Sri Lanka offers an exceptional blend of culture, nature, adventure and relaxation. Known for its warm hospitality, aromatic cuisine, world-renowned Ceylon tea and remarkable biodiversity, Sri Lanka is perfectly suited to luxury escapes, cultural journeys, wildlife safaris, wellness retreats and romantic beach holidays.",
      es: "Descubre Sri Lanka, una fascinante isla donde antiguos reinos, templos sagrados, plantaciones de té esmeralda, playas tropicales y una extraordinaria vida silvestre se unen en un viaje inolvidable. Desde la icónica fortaleza de roca de Sigiriya y la ciudad sagrada de Kandy hasta las montañas brumosas de Ella, el encanto colonial de Galle Fort y los paisajes salvajes del Parque Nacional de Yala, Sri Lanka ofrece una combinación excepcional de cultura, naturaleza, aventura y descanso. Reconocida por su cálida hospitalidad, su cocina aromática, el famoso té de Ceilán y su extraordinaria biodiversidad, Sri Lanka es ideal para escapadas de lujo, viajes culturales, safaris, retiros de bienestar y vacaciones románticas junto al mar.",
      pt: "Descubra o Sri Lanka, uma ilha fascinante onde antigos reinos, templos sagrados, plantações de chá esmeralda, praias tropicais e uma extraordinária vida selvagem se encontram em uma viagem inesquecível. Da icônica Fortaleza de Sigiriya e da cidade sagrada de Kandy às montanhas enevoadas de Ella, ao charme colonial do Galle Fort e às paisagens selvagens do Parque Nacional de Yala, o Sri Lanka oferece uma combinação excepcional de cultura, natureza, aventura e relaxamento. Conhecido por sua hospitalidade acolhedora, sua culinária aromática, o famoso chá de Ceilão e sua extraordinária biodiversidade, o Sri Lanka é ideal para viagens de luxo, experiências culturais, safáris, retiros de bem-estar e férias românticas à beira-mar."
    },
    history: {
      en: "Sri Lanka has a history stretching back more than two millennia, shaped by ancient kingdoms, Buddhist traditions, maritime trade and successive periods of Portuguese, Dutch and British influence. The ancient capitals of Anuradhapura and Polonnaruwa reveal remarkable achievements in architecture, irrigation and religious art, while Sigiriya preserves the spectacular remains of a fifth-century rock citadel and royal complex. Kandy, the island's last great kingdom, remains one of Sri Lanka's most important cultural centres and is home to the revered Temple of the Sacred Tooth Relic. Along the southern coast, Galle Fort reflects the island's colonial maritime heritage with its historic ramparts, streets and architecture. Together, these destinations reveal the extraordinary depth of Sri Lanka's royal, religious and colonial heritage.",
      es: "Sri Lanka posee una historia que se remonta a más de dos milenios, marcada por antiguos reinos, tradiciones budistas, comercio marítimo y sucesivas influencias portuguesas, neerlandesas y británicas. Las antiguas capitales de Anuradhapura y Polonnaruwa muestran grandes logros en arquitectura, sistemas de irrigación y arte religioso, mientras que Sigiriya conserva los impresionantes restos de una ciudadela rocosa y complejo real del siglo V. Kandy, último gran reino de la isla, continúa siendo uno de los principales centros culturales de Sri Lanka y alberga el venerado Templo del Diente Sagrado. En la costa sur, Galle Fort representa el patrimonio marítimo colonial de la isla a través de sus murallas, calles y arquitectura histórica. En conjunto, estos destinos muestran la extraordinaria riqueza del patrimonio real, religioso y colonial de Sri Lanka.",
      pt: "O Sri Lanka possui uma história que remonta a mais de dois milênios, moldada por antigos reinos, tradições budistas, comércio marítimo e sucessivas influências portuguesas, holandesas e britânicas. As antigas capitais de Anuradhapura e Polonnaruwa revelam grandes realizações em arquitetura, sistemas de irrigação e arte religiosa, enquanto Sigiriya preserva os impressionantes vestígios de uma cidadela rochosa e complexo real do século V. Kandy, o último grande reino da ilha, continua sendo um dos principais centros culturais do Sri Lanka e abriga o venerado Templo do Dente Sagrado. Na costa sul, o Galle Fort representa o patrimônio marítimo colonial da ilha por meio de suas muralhas, ruas e arquitetura histórica. Juntos, esses destinos revelam a extraordinária riqueza do patrimônio real, religioso e colonial do Sri Lanka."
    },
    culture: {
      en: "Sri Lankan culture is deeply influenced by Buddhism, Hindu traditions, centuries-old craftsmanship and the island's diverse communities. Religious festivals, temple ceremonies, traditional dance, drumming, handicrafts and village traditions remain an important part of everyday life. Kandy is particularly renowned for its traditional arts and religious heritage, while the island's temples and sacred cities offer a deeper understanding of Sri Lanka's spiritual traditions. Local markets, spice gardens, tea estates and artisan communities provide opportunities to experience the country's living culture beyond its historic monuments. Warm hospitality is another defining element of Sri Lankan culture, making personal encounters and local experiences an essential part of travelling across the island.",
      es: "La cultura de Sri Lanka está profundamente influenciada por el budismo, las tradiciones hindúes, siglos de artesanía y la diversidad de sus comunidades. Los festivales religiosos, ceremonias en los templos, danzas tradicionales, percusión, artesanías y tradiciones rurales continúan formando parte importante de la vida cotidiana. Kandy destaca especialmente por sus artes tradicionales y su patrimonio religioso, mientras que los templos y ciudades sagradas permiten comprender mejor las tradiciones espirituales de Sri Lanka. Los mercados locales, jardines de especias, plantaciones de té y comunidades artesanas ofrecen la oportunidad de descubrir la cultura viva del país más allá de sus monumentos históricos. La cálida hospitalidad es otro elemento esencial de la cultura de Sri Lanka y convierte los encuentros locales en una parte fundamental del viaje.",
      pt: "A cultura do Sri Lanka é profundamente influenciada pelo budismo, pelas tradições hindus, por séculos de artesanato e pela diversidade de suas comunidades. Festivais religiosos, cerimônias nos templos, danças tradicionais, percussão, artesanato e tradições rurais continuam sendo uma parte importante da vida cotidiana. Kandy é especialmente conhecida por suas artes tradicionais e seu patrimônio religioso, enquanto os templos e cidades sagradas proporcionam uma compreensão mais profunda das tradições espirituais do país. Mercados locais, jardins de especiarias, plantações de chá e comunidades artesanais oferecem oportunidades para conhecer a cultura viva do Sri Lanka além de seus monumentos históricos. A hospitalidade calorosa é outro elemento marcante da cultura do Sri Lanka, tornando os encontros locais uma parte essencial da experiência de viagem."
    },
    localFood: {
      en: "Sri Lankan cuisine is a vibrant celebration of spices, coconut, rice, seafood and tropical produce. Traditional meals often feature fragrant rice accompanied by a variety of curries, sambols, vegetables and pickles. Signature dishes include Sri Lankan rice and curry, hoppers, kottu roti, string hoppers, dhal curry, pol sambol and seafood preparations. The island is also famous for its Ceylon tea, cinnamon and aromatic spices. From local family-run restaurants and colourful markets to refined resort dining, Sri Lanka offers a culinary journey that reflects the island's history and cultural influences.",
      es: "La gastronomía de Sri Lanka es una vibrante celebración de especias, coco, arroz, mariscos y productos tropicales. Las comidas tradicionales suelen incluir arroz aromático acompañado de diferentes curris, sambols, verduras y encurtidos. Entre sus platos más representativos se encuentran el arroz con curry de Sri Lanka, los hoppers, el kottu roti, los string hoppers, el dhal curry, el pol sambol y diversas preparaciones de mariscos. La isla también es famosa por su té de Ceilán, su canela y sus especias aromáticas. Desde pequeños restaurantes familiares y coloridos mercados hasta restaurantes sofisticados en resorts, Sri Lanka ofrece un viaje gastronómico que refleja la historia y las influencias culturales de la isla.",
      pt: "A culinária do Sri Lanka é uma celebração vibrante de especiarias, coco, arroz, frutos do mar e produtos tropicais. As refeições tradicionais geralmente incluem arroz aromático acompanhado por diversos curries, sambols, vegetais e conservas. Entre os pratos mais emblemáticos estão o arroz com curry do Sri Lanka, hoppers, kottu roti, string hoppers, dhal curry, pol sambol e preparações de frutos do mar. A ilha também é famosa pelo chá de Ceilão, pela canela e por suas especiarias aromáticas. De pequenos restaurantes familiares e mercados coloridos a restaurantes sofisticados em resorts, o Sri Lanka oferece uma jornada gastronômica que reflete a história e as influências culturais da ilha."
    },
    bestTime: { 
      en: "December to March", 
      es: "De diciembre a marzo", 
      pt: "De dezembro a março" 
    },
    attractions: [
      {
        name: { 
          en: "Sigiriya Rock Fortress", 
          es: "Fortaleza de Roca de Sigiriya", 
          pt: "Fortaleza de Rocha de Sigiriya" 
        },
        image: "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=800",
        desc: { 
          en: "Climb the iconic fifth-century rock citadel of Sigiriya, surrounded by ancient gardens, frescoes and dramatic tropical landscapes. One of Sri Lanka's most extraordinary heritage experiences.", 
          es: "Sube a la icónica ciudadela rocosa de Sigiriya, del siglo V, rodeada de antiguos jardines, frescos y espectaculares paisajes tropicales. Una de las experiencias patrimoniales más extraordinarias de Sri Lanka.", 
          pt: "Suba à icônica cidadela rochosa de Sigiriya, do século V, cercada por antigos jardins, afrescos e paisagens tropicais impressionantes. Uma das experiências de patrimônio mais extraordinárias do Sri Lanka." 
        }
      },
      {
        name: { 
          en: "Temple of the Sacred Tooth, Kandy", 
          es: "Templo del Diente Sagrado, Kandy", 
          pt: "Templo do Dente Sagrado, Kandy" 
        },
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=800",
        desc: { 
          en: "Visit Sri Dalada Maligawa, the revered Temple of the Sacred Tooth Relic and one of the most important Buddhist pilgrimage sites in Sri Lanka.", 
          es: "Visita Sri Dalada Maligawa, el venerado Templo del Diente Sagrado y uno de los lugares de peregrinación budista más importantes de Sri Lanka.", 
          pt: "Visite Sri Dalada Maligawa, o venerado Templo do Dente Sagrado e um dos locais de peregrinação budista mais importantes do Sri Lanka." 
        }
      },
      {
        name: { 
          en: "Ella & Tea Country", 
          es: "Ella y la Región del Té", 
          pt: "Ella e a Região do Chá" 
        },
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800",
        desc: { 
          en: "Explore the misty highlands around Ella, surrounded by emerald tea plantations, waterfalls, mountain viewpoints and scenic railway landscapes.", 
          es: "Explora las montañas brumosas de Ella, rodeadas de plantaciones de té esmeralda, cascadas, miradores y espectaculares paisajes ferroviarios.", 
          pt: "Explore as montanhas enevoadas de Ella, cercadas por plantações de chá esmeralda, cachoeiras, mirantes e paisagens ferroviárias espetaculares." 
        }
      },
      {
        name: { 
          en: "Yala National Park", 
          es: "Parque Nacional Yala", 
          pt: "Parque Nacional Yala" 
        },
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=800",
        desc: { 
          en: "Experience one of Sri Lanka's iconic wildlife destinations, with opportunities to explore diverse habitats and observe elephants, birds and other native wildlife on safari.", 
          es: "Descubre uno de los destinos de vida silvestre más emblemáticos de Sri Lanka, con diferentes hábitats y oportunidades para observar elefantes, aves y otras especies durante un safari.", 
          pt: "Descubra um dos destinos de vida selvagem mais emblemáticos do Sri Lanka, com diversos habitats e oportunidades de observar elefantes, aves e outras espécies durante um safári." 
        }
      },
      {
        name: { 
          en: "Galle Fort", 
          es: "Fuerte de Galle", 
          pt: "Forte de Galle" 
        },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
        desc: { 
          en: "Wander through the historic streets and ramparts of Galle Fort, a remarkable example of Sri Lanka's colonial maritime heritage.", 
          es: "Recorre las calles históricas y murallas de Galle Fort, un extraordinario ejemplo del patrimonio marítimo colonial de Sri Lanka.", 
          pt: "Caminhe pelas ruas históricas e muralhas do Galle Fort, um exemplo extraordinário do patrimônio marítimo colonial do Sri Lanka." 
        }
      },
      {
        name: { 
          en: "Dambulla Cave Temple", 
          es: "Templo de la Cueva de Dambulla", 
          pt: "Templo da Caverna de Dambulla" 
        },
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=800",
        desc: { 
          en: "Discover the spectacular cave temple complex of Dambulla, known for its Buddhist art, statues and historic religious atmosphere.", 
          es: "Descubre el espectacular complejo de templos rupestres de Dambulla, famoso por su arte budista, estatuas y profunda atmósfera religiosa.", 
          pt: "Descubra o impressionante complexo de templos em cavernas de Dambulla, conhecido por sua arte budista, estátuas e atmosfera religiosa histórica." 
        }
      }
    ],
    experiences: [
      {
        title: { 
          en: "Private Sigiriya Heritage Experience", 
          es: "Experiencia Privada de Patrimonio en Sigiriya", 
          pt: "Experiência Privativa de Patrimônio em Sigiriya" 
        },
        desc: { 
          en: "Explore Sigiriya with a private guide, combining the rock fortress with surrounding cultural landscapes.", 
          es: "Explora Sigiriya con un guía privado, combinando la fortaleza con los paisajes culturales de sus alrededores.", 
          pt: "Explore Sigiriya com um guia privativo, combinando a fortaleza com as paisagens culturais ao redor." 
        },
        image: "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=800"
      },
      {
        title: { 
          en: "Luxury Tea Estate Experience", 
          es: "Experiencia de Lujo en Plantación de Té", 
          pt: "Experiência de Luxo em Plantação de Chá" 
        },
        desc: { 
          en: "Visit a scenic tea estate in the central highlands and discover the traditions behind Ceylon tea.", 
          es: "Visita una plantación de té en las tierras altas y descubre las tradiciones detrás del famoso té de Ceilán.", 
          pt: "Visite uma plantação de chá nas terras altas e descubra as tradições por trás do famoso chá de Ceilão." 
        },
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800"
      },
      {
        title: { 
          en: "Yala Private Wildlife Safari", 
          es: "Safari Privado de Vida Silvestre en Yala", 
          pt: "Safári Privativo de Vida Selvagem em Yala" 
        },
        desc: { 
          en: "Enjoy a private safari through Yala National Park with opportunities to observe Sri Lankan wildlife in its natural environment.", 
          es: "Disfruta de un safari privado por el Parque Nacional de Yala y observa la vida silvestre de Sri Lanka en su entorno natural.", 
          pt: "Desfrute de um safári privativo pelo Parque Nacional de Yala e observe a vida selvagem do Sri Lanka em seu ambiente natural." 
        },
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=800"
      },
      {
        title: { 
          en: "Scenic Ella Train Journey", 
          es: "Viaje Panorámico en Tren por Ella", 
          pt: "Viagem Panorâmica de Trem por Ella" 
        },
        desc: { 
          en: "Travel through the spectacular hill country by train, passing tea plantations, valleys and mist-covered mountains.", 
          es: "Viaja en tren por las espectaculares tierras altas, atravesando plantaciones de té, valles y montañas cubiertas de niebla.", 
          pt: "Viaje de trem pelas espetaculares terras altas, passando por plantações de chá, vales e montanhas cobertas de neblina." 
        },
        image: "https://images.unsplash.com/photo-1566296515805-59b489d81d22?q=80&w=800"
      },
      {
        title: { 
          en: "Galle Fort & Southern Coast", 
          es: "Fuerte de Galle y Costa Sur", 
          pt: "Forte de Galle e Costa Sul" 
        },
        desc: { 
          en: "Discover colonial architecture, boutique cafés and coastal scenery around historic Galle Fort.", 
          es: "Descubre arquitectura colonial, cafés boutique y paisajes costeros alrededor del histórico Galle Fort.", 
          pt: "Descubra arquitetura colonial, cafés boutique e paisagens costeiras ao redor do histórico Galle Fort." 
        },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800"
      },
      {
        title: { 
          en: "Sri Lankan Wellness & Ayurveda", 
          es: "Bienestar y Ayurveda en Sri Lanka", 
          pt: "Bem-estar e Ayurveda no Sri Lanka" 
        },
        desc: { 
          en: "Enjoy a restorative wellness experience inspired by Sri Lanka's long-standing Ayurveda traditions.", 
          es: "Disfruta de una experiencia de bienestar inspirada en las antiguas tradiciones ayurvédicas de Sri Lanka.", 
          pt: "Desfrute de uma experiência de bem-estar inspirada nas antigas tradições de Ayurveda do Sri Lanka." 
        },
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
      }
    ],
    hotels: [
      {
        name: "Cape Weligama",
        rating: "Luxury 5-Star Resort",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        desc: { 
          en: "A refined clifftop coastal retreat offering expansive ocean views, elegant villas and a sophisticated southern Sri Lankan escape.", 
          es: "Un elegante refugio costero sobre un acantilado, con amplias vistas al océano, villas sofisticadas y una experiencia exclusiva en el sur de Sri Lanka.", 
          pt: "Um sofisticado refúgio costeiro sobre uma falésia, com amplas vistas para o oceano, villas elegantes e uma experiência exclusiva no sul do Sri Lanka." 
        }
      },
      {
        name: "Anantara Peace Haven Tangalle Resort",
        rating: "Luxury 5-Star Beach Resort",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
        desc: { 
          en: "A luxurious beachfront retreat on Sri Lanka's southern coast, combining tropical surroundings, spacious accommodation, wellness and refined resort experiences.", 
          es: "Un lujoso refugio frente al mar en la costa sur de Sri Lanka, que combina naturaleza tropical, alojamiento espacioso, bienestar y experiencias sofisticadas.", 
          pt: "Um luxuoso refúgio à beira-mar na costa sul do Sri Lanka, combinando natureza tropical, acomodações espaçosas, bem-estar e experiências sofisticadas." 
        }
      }
    ],
    thingsToDo: [
      { en: "Private Sigiriya Heritage Experience", es: "Experiencia Privada de Patrimonio en Sigiriya", pt: "Experiência Privativa de Patrimônio em Sigiriya" },
      { en: "Luxury Tea Estate Experience", es: "Experiencia de Lujo en Plantación de Té", pt: "Experiência de Luxo em Plantação de Chá" },
      { en: "Yala Private Wildlife Safari", es: "Safari Privado de Vida Silvestre en Yala", pt: "Safári Privativo de Vida Selvagem em Yala" },
      { en: "Scenic Ella Train Journey", es: "Viaje Panorámico en Tren por Ella", pt: "Viagem Panorâmica de Trem por Ella" },
      { en: "Galle Fort & Southern Coast", es: "Fuerte de Galle y Costa Sur", pt: "Forte de Galle e Costa Sul" },
      { en: "Sri Lankan Wellness & Ayurveda", es: "Bienestar y Ayurveda en Sri Lanka", pt: "Bem-estar e Ayurveda no Sri Lanka" }
    ],
    suggestedItinerary: { 
      en: "Day 1: Arrival in Colombo and private transfer to the Cultural Triangle. Day 2: Sigiriya Rock Fortress and surrounding cultural experiences. Day 3: Dambulla Cave Temple and onward journey to Kandy. Day 4: Kandy heritage, Temple of the Sacred Tooth and scenic highlands. Day 5: Nuwara Eliya tea country and scenic transfer to Ella. Day 6: Ella exploration followed by a private wildlife safari in Yala. Day 7: Southern coast and Galle Fort, followed by a luxury beach stay. Day 8: Leisure breakfast and private transfer to Colombo for departure.", 
      es: "Día 1: Llegada a Colombo y traslado privado hacia el Triángulo Cultural. Día 2: Fortaleza de Sigiriya y experiencias culturales de los alrededores. Día 3: Templo rupestre de Dambulla y continuación hacia Kandy. Día 4: Patrimonio de Kandy, Templo del Diente Sagrado y tierras altas. Día 5: Tierras del té de Nuwara Eliya y traslado panorámico a Ella. Día 6: Exploración de Ella seguida de un safari privado en Yala. Día 7: Costa sur y Galle Fort, seguido de una estancia de lujo junto al mar. Día 8: Desayuno tranquilo y traslado privado a Colombo para la salida.", 
      pt: "Dia 1: Chegada a Colombo e traslado privativo para o Triângulo Cultural. Dia 2: Fortaleza de Sigiriya e experiências culturais nos arredores. Dia 3: Templo rupestre de Dambulla e continuação para Kandy. Dia 4: Patrimônio de Kandy, Templo do Diente Sagrado e terras altas. Dia 5: Região de chá de Nuwara Eliya e traslado panorâmico para Ella. Dia 6: Exploração de Ella seguida de um safári privativo em Yala. Dia 7: Costa sul e Galle Fort, seguidos de uma estadia de luxo à beira-mar. Dia 8: Café da manhã tranquilo e traslado privativo para Colombo para a partida." 
    },
    travelTips: [
      { en: "Sri Lanka has different climatic zones, so weather can vary considerably between the coast, cultural triangle and central highlands.", es: "Sri Lanka tiene diferentes zonas climáticas, por lo que el clima puede variar considerablemente entre la costa, el Triángulo Cultural y las tierras altas.", pt: "O Sri Lanka possui diferentes zonas climáticas, portanto o clima pode variar bastante entre a costa, o Triângulo Cultural e as terras altas." },
      { en: "Dress modestly when visiting Buddhist and Hindu temples and follow local photography and footwear rules.", es: "Viste de manera modesta al visitar templos budistas e hindúes y respeta las normas locales sobre fotografía y calzado.", pt: "Vista-se de maneira modesta ao visitar templos budistas e hindus e respeite as regras locais sobre fotografia e calçados." },
      { en: "Carry a light jacket and comfortable walking shoes for the cooler highlands around Kandy, Nuwara Eliya and Ella.", es: "Lleva una chaqueta ligera y calzado cómodo para las zonas montañosas más frescas de Kandy, Nuwara Eliya y Ella.", pt: "Leve uma jaqueta leve e calçados confortáveis para as regiões montanhosas mais frescas de Kandy, Nuwara Eliya e Ella." },
      { en: "Wildlife sightings are never guaranteed; follow park regulations and maintain a respectful distance from animals.", es: "Los avistamientos de fauna no están garantizados; respeta las normas del parque y mantén una distancia adecuada de los animales.", pt: "Avistamentos de animais selvagens nunca são garantidos; siga as regras do parque e mantenha uma distância segura dos animais." },
      { en: "Allow extra travel time between destinations, especially in the hill country, and reserve popular luxury stays and safari experiences in advance.", es: "Reserva tiempo adicional para los desplazamientos, especialmente en las montañas, y reserva con antelación los alojamientos de lujo y safaris más populares.", pt: "Reserve tempo extra para os deslocamentos, especialmente nas montanhas, e reserve com antecedência os hotéis de luxo e safáris mais procurados." }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Sri Lanka?", es: "¿Cuál es la mejor época para visitar Sri Lanka?", pt: "Qual é a melhor época para visitar o Sri Lanka?" },
        a: { en: "December to March is a strong general period for a classic cultural, hill-country and southern-coast itinerary, although Sri Lanka can be visited throughout the year depending on the region.", es: "De diciembre a marzo es un buen período general para un itinerario clásico por la cultura, las montañas y la costa sur, aunque Sri Lanka puede visitarse durante todo el año dependiendo de la región.", pt: "De dezembro a março é um excelente período geral para um roteiro clássico envolvendo cultura, montanhas e costa sul, embora o Sri Lanka possa ser visitado durante todo o ano dependendo da região." }
      },
      {
        q: { en: "How many days are ideal for Sri Lanka?", es: "¿Cuántos días son ideales para Sri Lanka?", pt: "Quantos dias são ideais para o Sri Lanka?" },
        a: { en: "A 7–10 day journey allows travellers to combine cultural heritage, tea country, wildlife and the southern coast without rushing.", es: "Un viaje de 7 a 10 días permite combinar patrimonio cultural, tierras del té, vida silvestre y costa sur sin prisas.", pt: "Uma viagem de 7 a 10 dias permite combinar patrimônio cultural, regiões de chá, vida selvagem e costa sul sem pressa." }
      },
      {
        q: { en: "Is Sri Lanka suitable for a luxury holiday?", es: "¿Sri Lanka es adecuado para unas vacaciones de lujo?", pt: "O Sri Lanka é adequado para férias de luxo?" },
        a: { en: "Yes. Sri Lanka offers luxury resorts, boutique hotels, private guides, chauffeur-driven journeys, wellness retreats, wildlife safaris and premium beach experiences.", es: "Sí. Sri Lanka ofrece resorts de lujo, hoteles boutique, guías privados, viajes con chófer, retiros de bienestar, safaris y experiencias premium junto al mar.", pt: "Sim. O Sri Lanka oferece resorts de luxo, hotéis boutique, guias privativos, viagens com motorista, retiros de bem-estar, safáris e experiências premium à beira-mar." }
      },
      {
        q: { en: "Can Sri Lanka combine culture and beach holidays?", es: "¿Se puede combinar cultura y playa en Sri Lanka?", pt: "É possível combinar cultura e praia no Sri Lanka?" },
        a: { en: "Absolutely. A journey can combine Sigiriya and Kandy with Ella, Yala and the southern beaches around Galle and Tangalle.", es: "Por supuesto. Un viaje puede combinar Sigiriya y Kandy con Ella, Yala y las playas del sur alrededor de Galle y Tangalle.", pt: "Com certeza. Uma viagem pode combinar Sigiriya e Kandy com Ella, Yala e as praias do sul ao redor de Galle e Tangalle." }
      },
      {
        q: { en: "Is Sri Lanka good for wildlife experiences?", es: "¿Es Sri Lanka un buen destino para ver vida silvestre?", pt: "O Sri Lanka é bom para experiências com vida selvagem?" },
        a: { en: "Yes. National parks such as Yala and Udawalawe offer safari experiences, while the island's diverse habitats support a wide variety of wildlife and birdlife.", es: "Sí. Parques nacionales como Yala y Udawalawe ofrecen experiencias de safari, mientras que los diversos hábitats de la isla albergan una gran variedad de fauna y aves.", pt: "Sim. Parques nacionais como Yala e Udawalawe oferecem experiências de safári, enquanto os diversos habitats da ilha abrigam uma grande variedade de animais e aves." }
      }
    ],
    seo: {
      en: {
        title: "Sri Lanka Luxury Travel | Heritage, Wildlife & Tropical Beaches",
        description: "Discover Sri Lanka with luxury journeys through ancient heritage, Sigiriya, Kandy, Ella tea country, Yala wildlife and tropical southern beaches.",
        keywords: "Sri Lanka luxury travel, Sri Lanka holidays, Sri Lanka luxury tour, Sigiriya, Kandy, Ella, Yala Safari, Galle Fort, Sri Lanka beaches, Sri Lanka honeymoon"
      },
      es: {
        title: "Viajes de Lujo a Sri Lanka | Patrimonio, Vida Silvestre y Playas Tropicales",
        description: "Descubre Sri Lanka con viajes de lujo por su patrimonio ancestral, Sigiriya, Kandy, las montañas de Ella, la vida silvestre de Yala y sus playas tropicales.",
        keywords: "viajes de lujo a Sri Lanka, vacaciones en Sri Lanka, tour de lujo Sri Lanka, Sigiriya, Kandy, Ella, safari Yala, Galle Fort, playas de Sri Lanka, luna de miel en Sri Lanka"
      },
      pt: {
        title: "Viagens de Luxo ao Sri Lanka | Patrimônio, Vida Selvagem e Praias Tropicais",
        description: "Descubra o Sri Lanka em viagens de luxo por seu patrimônio ancestral, Sigiriya, Kandy, as montanhas de Ella, a vida selvagem de Yala e praias tropicais.",
        keywords: "viagens de luxo para Sri Lanka, férias no Sri Lanka, tour de luxo Sri Lanka, Sigiriya, Kandy, Ella, safári Yala, Galle Fort, praias do Sri Lanka, lua de miel no Sri Lanka"
      }
    }
  },
  {
    slug: "singapore",
    title: { 
      en: "Singapore", 
      es: "Singapur", 
      pt: "Singapura" 
    },
    tagline: { 
      en: "Futuristic Skylines, Tropical Gardens & World-Class Experiences", 
      es: "Horizontes Futuristas, Jardines Tropicales y Experiencias de Clase Mundial", 
      pt: "Horizontes Futuristas, Jardins Tropicais e Experiências de Classe Mundial" 
    },
    region: "Southeast Asia (Singapore)",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
      "https://images.unsplash.com/photo-1555217851-6141535bd771?q=80&w=1200",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=1200",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200"
    ],
    description: { 
      en: "Discover Singapore, a dynamic island city where futuristic architecture, multicultural heritage, tropical gardens and exceptional cuisine come together in remarkable harmony. From the iconic skyline of Marina Bay and the spectacular Supertrees of Gardens by the Bay to the heritage streets of Chinatown, Little India and Kampong Gelam, Singapore offers a sophisticated blend of modern luxury and cultural discovery. Explore world-class attractions, indulge in celebrated dining, shop along Orchard Road, unwind on Sentosa Island and experience the city's vibrant neighbourhoods after dark. With efficient transport, exceptional hospitality and an extraordinary combination of nature, culture and innovation, Singapore is an ideal destination for luxury holidays, family escapes, romantic getaways and multi-country Southeast Asia journeys.", 
      es: "Descubre Singapur, una dinámica ciudad-estado donde la arquitectura futurista, el patrimonio multicultural, los jardines tropicales y una gastronomía excepcional se unen en perfecta armonía. Desde el icónico horizonte de Marina Bay y los espectaculares Supertrees de Gardens by the Bay hasta las calles históricas de Chinatown, Little India y Kampong Gelam, Singapur ofrece una sofisticada combinación de lujo moderno y descubrimiento cultural. Explora atracciones de clase mundial, disfruta de una gastronomía excepcional, compra en Orchard Road, relájate en Sentosa y descubre los vibrantes barrios de la ciudad después del atardecer. Con un transporte eficiente, una excelente hospitalidad y una extraordinaria combinación de naturaleza, cultura e innovación, Singapur es ideal para vacaciones de lujo, escapadas familiares, viajes románticos y circuitos por el Sudeste Asiático.", 
      pt: "Descubra Singapura, uma dinâmica cidade-estado onde arquitetura futurista, patrimônio multicultural, jardins tropicais e uma gastronomia excepcional se encontram em perfeita harmonia. Do icônico horizonte de Marina Bay e dos espetaculares Supertrees de Gardens by the Bay às ruas históricas de Chinatown, Little India e Kampong Gelam, Singapura oferece uma sofisticada combinação de luxo moderno e descoberta cultural. Explore atrações de classe mundial, desfrute de uma gastronomia extraordinária, faça compras na Orchard Road, relaxe em Sentosa e descubra os bairros vibrantes da cidade após o pôr do sol. Com transporte eficiente, hospitalidade excepcional e uma combinação extraordinária de natureza, cultura e inovação, Singapura é ideal para férias de luxo, viagens em família, escapadas românticas e roteiros pelo Sudeste Asiático." 
    },
    overview: {
      en: "Discover Singapore, a dynamic island city where futuristic architecture, multicultural heritage, tropical gardens and exceptional cuisine come together in remarkable harmony. From the iconic skyline of Marina Bay and the spectacular Supertrees of Gardens by the Bay to the heritage streets of Chinatown, Little India and Kampong Gelam, Singapore offers a sophisticated blend of modern luxury and cultural discovery. Explore world-class attractions, indulge in celebrated dining, shop along Orchard Road, unwind on Sentosa Island and experience the city's vibrant neighbourhoods after dark. With efficient transport, exceptional hospitality and an extraordinary combination of nature, culture and innovation, Singapore is an ideal destination for luxury holidays, family escapes, romantic getaways and multi-country Southeast Asia journeys.",
      es: "Descubre Singapur, una dinámica ciudad-estado donde la arquitectura futurista, el patrimonio multicultural, los jardines tropicales y una gastronomía excepcional se unen en perfecta armonía. Desde el icónico horizonte de Marina Bay y los espectaculares Supertrees de Gardens by the Bay hasta las calles históricas de Chinatown, Little India y Kampong Gelam, Singapur ofrece una sofisticada combinación de lujo moderno y descubrimiento cultural. Explora atracciones de clase mundial, disfruta de una gastronomía excepcional, compra en Orchard Road, relájate en Sentosa y descubre los vibrantes barrios de la ciudad después del atardecer. Con un transporte eficiente, una excelente hospitalidad y una extraordinaria combinación de naturaleza, cultura e innovación, Singapur es ideal para vacaciones de lujo, escapadas familiares, viajes románticos y circuitos por el Sudeste Asiático.",
      pt: "Descubra Singapura, uma dinâmica cidade-estado onde arquitetura futurista, patrimônio multicultural, jardins tropicais e uma gastronomia excepcional se encontram em perfeita harmonia. Do icônico horizonte de Marina Bay e dos espetaculares Supertrees de Gardens by the Bay às ruas históricas de Chinatown, Little India e Kampong Gelam, Singapura oferece uma sofisticada combinação de luxo moderno e descoberta cultural. Explore atrações de classe mundial, desfrute de uma gastronomia extraordinária, faça compras na Orchard Road, relaxe em Sentosa e descubra os bairros vibrantes da cidade após o pôr do sol. Com transporte eficiente, hospitalidade excepcional e uma combinação extraordinária de natureza, cultura e inovação, Singapura é ideal para férias de luxo, viagens em família, escapadas românticas e roteiros pelo Sudeste Asiático."
    },
    history: {
      en: "Singapore's story has been shaped by centuries of maritime trade, migration and cultural exchange. Its strategic position along important regional sea routes transformed the island into a major trading port and brought together Chinese, Malay, Indian, Arab and European communities. Today, this multicultural heritage can be experienced through neighbourhoods such as Chinatown, Little India and Kampong Gelam, each preserving distinctive traditions, architecture, cuisine and religious landmarks. The Civic District and Singapore River also reveal the city's colonial-era development and its transformation from a trading settlement into one of Asia's most influential modern cities. Singapore's heritage is therefore not confined to museums—it remains visible in its neighbourhoods, food, festivals, architecture and everyday life.",
      es: "La historia de Singapur ha estado marcada por siglos de comercio marítimo, migración e intercambio cultural. Su posición estratégica en importantes rutas marítimas regionales convirtió a la isla en un destacado puerto comercial y reunió comunidades chinas, malayas, indias, árabes y europeas. Hoy, este patrimonio multicultural puede descubrirse en barrios como Chinatown, Little India y Kampong Gelam, cada uno con sus propias tradiciones, arquitectura, gastronomía y lugares religiosos. El Civic District y el río Singapur también muestran el desarrollo de la ciudad durante la época colonial y su transformación de asentamiento comercial en una de las ciudades modernas más influyentes de Asia. El patrimonio de Singapur no se limita a los museos: permanece presente en sus barrios, gastronomía, festivales, arquitectura y vida cotidiana.",
      pt: "A história de Singapura foi moldada por séculos de comércio marítimo, migração e intercâmbio cultural. Sua posição estratégica nas principais rotas marítimas regionais transformou a ilha em um importante porto comercial e reuniu comunidades chinesas, malaias, indianas, árabes e europeias. Hoje, esse patrimônio multicultural pode ser vivenciado em bairros como Chinatown, Little India e Kampong Gelam, cada um preservando tradições, arquitetura, culinária e locais religiosos distintos. O Civic District e o Singapore River também revelam o desenvolvimento da cidade durante o período colonial e sua transformação de entreposto comercial em uma das cidades modernas mais influentes da Ásia. O patrimônio de Singapura não está limitado aos museus: ele permanece presente em seus bairros, gastronomia, festivais, arquitetura e vida cotidiana."
    },
    culture: {
      en: "Singapore is one of Asia's most multicultural destinations, where Chinese, Malay, Indian and other cultural influences coexist within a compact modern city. Traditional festivals, temples, mosques, churches, heritage shophouses, hawker centres and neighbourhood markets provide an authentic glimpse into this cultural diversity. Chinatown is known for Chinese heritage and traditional food, Little India brings together colourful temples, spices, textiles and Indian cuisine, while Kampong Gelam reflects Singapore's Malay and Arab heritage. The city's hawker culture adds another important dimension, turning everyday dining into an integral part of Singaporean identity. This cultural diversity is one of Singapore's defining attractions and can be experienced naturally through neighbourhood walks, food tours and local markets.",
      es: "Singapur es uno de los destinos más multiculturales de Asia, donde las influencias chinas, malayas, indias y de otras comunidades conviven dentro de una ciudad moderna y compacta. Festivales tradicionales, templos, mezquitas, iglesias, casas comerciales históricas, centros de comida y mercados locales ofrecen una visión auténtica de esta diversidad cultural. Chinatown destaca por su patrimonio chino y gastronomía tradicional, Little India reúne templos coloridos, especias, textiles y cocina india, mientras que Kampong Gelam refleja la herencia malaya y árabe de Singapur. La cultura hawker añade otra dimensión importante, convirtiendo la comida cotidiana en una parte esencial de la identidad singapurense. Esta diversidad cultural es uno de los grandes atractivos de Singapur y puede descubrirse fácilmente mediante paseos por los barrios, rutas gastronómicas y mercados locales.",
      pt: "Singapura é um dos destinos mais multiculturais da Ásia, onde influências chinesas, malaias, indianas e de outras comunidades convivem dentro de uma cidade moderna e compacta. Festivais tradicionais, templos, mesquitas, igrejas, casas comerciais históricas, hawker centres e mercados locais oferecem um olhar autêntico sobre essa diversidade cultural. Chinatown destaca-se pelo patrimônio chinês e pela gastronomia tradicional, Little India reúne templos coloridos, especiarias, tecidos e culinária indiana, enquanto Kampong Gelam reflete a herança malaia e árabe de Singapura. A cultura hawker acrescenta outra dimensão importante, transformando a alimentação cotidiana em uma parte essencial da identidade singapurense. Essa diversidade cultural é uma das grandes atrações de Singapura e pode ser vivenciada através de passeios pelos bairros, tours gastronômicos e mercados locais."
    },
    localFood: {
      en: "Singapore's culinary identity is a reflection of its multicultural history. Chinese, Malay, Indian and Peranakan influences have created a diverse food culture ranging from humble hawker dishes to sophisticated Michelin-starred dining. Signature flavours include Hainanese chicken rice, laksa, chilli crab, satay, char kway teow, nasi lemak, kaya toast and roti prata. Hawker centres are an essential part of the Singapore experience, while the city also offers an exceptional selection of luxury restaurants, rooftop dining and international cuisine. For travellers seeking a complete culinary experience, Singapore offers everything from authentic neighbourhood food trails to refined fine dining overlooking Marina Bay.",
      es: "La identidad gastronómica de Singapur refleja su historia multicultural. Las influencias chinas, malayas, indias y peranakan han creado una cultura culinaria diversa que va desde sencillos platos de hawker hasta sofisticados restaurantes con estrellas Michelin. Entre sus sabores más representativos se encuentran el arroz con pollo de Hainan, laksa, chilli crab, satay, char kway teow, nasi lemak, kaya toast y roti prata. Los hawker centres son una parte esencial de la experiencia de Singapur, mientras que la ciudad también ofrece excelentes restaurantes de lujo, terrazas panorámicas y cocina internacional. Para quienes buscan una experiencia gastronómica completa, Singapur ofrece desde rutas culinarias auténticas por los barrios hasta alta cocina con vistas a Marina Bay.",
      pt: "A identidade gastronômica de Singapura é um reflexo de sua história multicultural. Influências chinesas, malaias, indianas e peranakan criaram uma cultura culinária diversificada, que vai de pratos simples dos hawker centres a sofisticados restaurantes com estrelas Michelin. Entre os sabores mais emblemáticos estão o arroz com frango à Hainan, laksa, chilli crab, satay, char kway teow, nasi lemak, kaya toast e roti prata. Os hawker centres são parte essencial da experiência de Singapura, enquanto a cidade também oferece excelentes restaurantes de luxo, rooftops e culinária internacional. Para quem busca uma experiência gastronômica completa, Singapura oferece desde roteiros gastronômicos autênticos pelos bairros até alta gastronomia com vista para Marina Bay."
    },
    bestTime: { 
      en: "February to April", 
      es: "De febrero a abril", 
      pt: "De fevereiro a abril" 
    },
    attractions: [
      {
        name: { 
          en: "Marina Bay Sands", 
          es: "Marina Bay Sands", 
          pt: "Marina Bay Sands" 
        },
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800",
        desc: { 
          en: "An iconic symbol of modern Singapore, Marina Bay Sands combines luxury accommodation, shopping, dining, entertainment and the famous SkyPark with panoramic views across the city.", 
          es: "Un símbolo icónico del Singapur moderno que combina alojamiento de lujo, compras, gastronomía, entretenimiento y el famoso SkyPark con vistas panorámicas de la ciudad.", 
          pt: "Um símbolo icônico da Singapura moderna que combina hospedagem de luxo, compras, gastronomia, entretenimento e o famoso SkyPark com vistas panorâmicas da cidade." 
        }
      },
      {
        name: { 
          en: "Gardens by the Bay", 
          es: "Gardens by the Bay", 
          pt: "Gardens by the Bay" 
        },
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800",
        desc: { 
          en: "Explore the futuristic Supertrees, Flower Dome and Cloud Forest in one of Singapore's most spectacular urban nature attractions.", 
          es: "Explora los futuristas Supertrees, Flower Dome y Cloud Forest en una de las atracciones de naturaleza urbana más espectaculares de Singapur.", 
          pt: "Explore os futuristas Supertrees, Flower Dome e Cloud Forest em uma das atrações de natureza urbana mais espetaculares de Singapura." 
        }
      },
      {
        name: { 
          en: "Sentosa Island", 
          es: "Isla Sentosa", 
          pt: "Ilha Sentosa" 
        },
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800",
        desc: { 
          en: "Enjoy Singapore's premier island resort destination with beaches, attractions, luxury resorts, wellness experiences and family entertainment.", 
          es: "Disfruta del principal destino insular de Singapur, con playas, atracciones, resorts de lujo, experiencias de bienestar y entretenimiento familiar.", 
          pt: "Desfrute do principal destino insular de Singapura, com praias, atrações, resorts de luxo, experiências de bem-estar e entretenimento para toda a família." 
        }
      },
      {
        name: { 
          en: "Chinatown", 
          es: "Chinatown", 
          pt: "Chinatown" 
        },
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800",
        desc: { 
          en: "Discover historic streets, temples, traditional shops and vibrant hawker food in one of Singapore's most atmospheric heritage districts.", 
          es: "Descubre calles históricas, templos, tiendas tradicionales y vibrante gastronomía hawker en uno de los barrios patrimoniales más interesantes de Singapur.", 
          pt: "Descubra ruas históricas, templos, lojas tradicionais e a vibrante gastronomia hawker em um dos bairros históricos mais interessantes de Singapura." 
        }
      },
      {
        name: { 
          en: "Little India", 
          es: "Little India", 
          pt: "Little India" 
        },
        image: "https://images.unsplash.com/photo-1555217851-6141535bd771?q=80&w=800",
        desc: { 
          en: "Explore colourful temples, spice shops, Indian restaurants, heritage streets and vibrant local markets in one of Singapore's most distinctive neighbourhoods.", 
          es: "Explora templos coloridos, tiendas de especias, restaurantes indios, calles históricas y mercados locales en uno de los barrios más singulares de Singapur.", 
          pt: "Explore templos coloridos, lojas de especiarias, restaurantes indianos, ruas históricas e mercados locais em um dos bairros mais característicos de Singapura." 
        }
      },
      {
        name: { 
          en: "Singapore Flyer", 
          es: "Singapore Flyer", 
          pt: "Singapore Flyer" 
        },
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=800",
        desc: { 
          en: "Enjoy panoramic 360-degree views across Marina Bay, the Singapore River and the wider city from one of the world's iconic observation wheels.", 
          es: "Disfruta de vistas panorámicas de 360 grados sobre Marina Bay, el río Singapur y la ciudad desde una de sus icónicas ruedas de observación.", 
          pt: "Desfrute de vistas panorâmicas de 360 graus sobre Marina Bay, o Singapore River e a cidade a partir de uma das rodas-gigantes mais icônicas do destino." 
        }
      }
    ],
    experiences: [
      {
        title: { 
          en: "Gardens by the Bay After Dark", 
          es: "Gardens by the Bay de Noche", 
          pt: "Gardens by the Bay à Noite" 
        },
        desc: { 
          en: "Experience the illuminated Supertrees and enjoy the spectacular Garden Rhapsody light and sound show.", 
          es: "Disfruta de los Supertrees iluminados y del espectacular espectáculo de luz y sonido Garden Rhapsody.", 
          pt: "Admire os Supertrees iluminados e o espetacular show de luz e som Garden Rhapsody." 
        },
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800"
      },
      {
        title: { 
          en: "Marina Bay Luxury Evening", 
          es: "Tarde de Lujo en Marina Bay", 
          pt: "Noite de Luxo em Marina Bay" 
        },
        desc: { 
          en: "Combine a sunset waterfront walk, panoramic skyline views and refined dining around Marina Bay.", 
          es: "Combina un paseo al atardecer, vistas panorámicas del skyline y gastronomía sofisticada en Marina Bay.", 
          pt: "Combine um passeio ao pôr do sol, vistas panorâmicas do skyline e gastronomia sofisticada em Marina Bay." 
        },
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800"
      },
      {
        title: { 
          en: "Singapore Food Trail", 
          es: "Ruta Culinaria de Singapur", 
          pt: "Rota Gastronômica de Singapura" 
        },
        desc: { 
          en: "Discover hawker favourites, heritage dishes and multicultural flavours through Chinatown, Little India and Kampong Gelam.", 
          es: "Descubre platos hawker, recetas tradicionales y sabores multiculturales por Chinatown, Little India y Kampong Gelam.", 
          pt: "Descubra pratos hawker, receitas tradicionais e sabores multiculturais por Chinatown, Little India e Kampong Gelam." 
        },
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800"
      },
      {
        title: { 
          en: "Private Singapore River Cruise", 
          es: "Crucero Privado por el Río Singapur", 
          pt: "Cruzeiro Privativo pelo Singapore River" 
        },
        desc: { 
          en: "Cruise along the Singapore River while discovering the historic waterfront and modern city skyline.", 
          es: "Navega por el río Singapur mientras descubres el histórico frente marítimo y el moderno skyline.", 
          pt: "Navegue pelo Singapore River enquanto descobre a histórica orla e o moderno skyline da cidade." 
        },
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=800"
      },
      {
        title: { 
          en: "Sentosa Luxury Escape", 
          es: "Escapada de Lujo en Sentosa", 
          pt: "Refúgio de Luxo em Sentosa" 
        },
        desc: { 
          en: "Spend a relaxed day on Sentosa with private beach time, wellness, fine dining and premium resort experiences.", 
          es: "Disfruta de un día relajado en Sentosa con playa privada, bienestar, alta gastronomía y experiencias premium.", 
          pt: "Passe um dia relaxante em Sentosa com praia, bem-estar, alta gastronomia e experiências premium." 
        },
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800"
      },
      {
        title: { 
          en: "Singapore Shopping & Lifestyle", 
          es: "Compras y Estilo de Vida en Singapur", 
          pt: "Compras e Lifestyle em Singapura" 
        },
        desc: { 
          en: "Explore Orchard Road, luxury boutiques, contemporary malls and Singapore's distinctive lifestyle districts.", 
          es: "Explora Orchard Road, boutiques de lujo, centros comerciales contemporáneos y los exclusivos barrios de estilo de vida de Singapur.", 
          pt: "Explore Orchard Road, boutiques de luxo, shoppings contemporâneos e os distintos bairros de lifestyle de Singapura." 
        },
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=800"
      }
    ],
    hotels: [
      {
        name: "Marina Bay Sands",
        rating: "Luxury 5-Star Integrated Resort",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800",
        desc: { 
          en: "An iconic luxury resort overlooking Marina Bay, offering exceptional dining, shopping, entertainment and the renowned SkyPark experience.", 
          es: "Un icónico resort de lujo frente a Marina Bay, con gastronomía excepcional, compras, entretenimiento y la famosa experiencia SkyPark.", 
          pt: "Um icônico resort de luxo com vista para Marina Bay, oferecendo gastronomia excepcional, compras, entretenimento e a famosa experiência SkyPark." 
        }
      },
      {
        name: "Raffles Singapore",
        rating: "Luxury 5-Star Heritage Hotel",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
        desc: { 
          en: "A legendary Singapore hotel known for refined hospitality, timeless colonial-inspired elegance and a strong connection to the city's heritage.", 
          es: "Un legendario hotel de Singapur conocido por su hospitalidad refinada, elegancia atemporal de inspiración colonial y profunda conexión con el patrimonio de la ciudad.", 
          pt: "Um lendário hotel de Singapura conhecido pela hospitalidade refinada, elegância atemporal de inspiração colonial e forte ligação com o patrimônio da cidade." 
        }
      }
    ],
    thingsToDo: [
      { en: "Gardens by the Bay After Dark", es: "Gardens by the Bay de Noche", pt: "Gardens by the Bay à Noite" },
      { en: "Marina Bay Luxury Evening", es: "Tarde de Lujo en Marina Bay", pt: "Noite de Luxo em Marina Bay" },
      { en: "Singapore Food Trail", es: "Ruta Culinaria de Singapur", pt: "Rota Gastronômica de Singapura" },
      { en: "Private Singapore River Cruise", es: "Crucero Privado por el Río Singapur", pt: "Cruzeiro Privativo pelo Singapore River" },
      { en: "Sentosa Luxury Escape", es: "Escapada de Lujo en Sentosa", pt: "Refúgio de Luxo em Sentosa" },
      { en: "Singapore Shopping & Lifestyle", es: "Compras y Estilo de Vida en Singapur", pt: "Compras e Lifestyle em Singapura" }
    ],
    suggestedItinerary: { 
      en: "Day 1 — Arrival & Marina Bay: Private airport transfer, luxury hotel check-in and an evening exploration of Marina Bay. Day 2 — Gardens & Modern Singapore: Gardens by the Bay, Marina Bay Sands, Singapore Flyer and an elegant evening around the waterfront. Day 3 — Sentosa Island: Full-day Sentosa experience with beaches, attractions, wellness and premium dining. Day 4 — Heritage & Culinary Singapore: Explore Chinatown, Little India and Kampong Gelam followed by a curated Singapore food experience. Day 5 — Shopping & Departure: Leisure breakfast, luxury shopping along Orchard Road and private transfer to the airport.", 
      es: "Día 1 — Llegada y Marina Bay: Traslado privado desde el aeropuerto, check-in en el hotel de lujo y exploración nocturna de Marina Bay. Día 2 — Jardines y Singapur Moderno: Gardens by the Bay, Marina Bay Sands, Singapore Flyer y una elegante tarde junto al waterfront. Día 3 — Isla Sentosa: Día completo en Sentosa con playas, atracciones, bienestar y gastronomía premium. Día 4 — Patrimonio y Gastronomía: Explora Chinatown, Little India y Kampong Gelam, seguido de una experiencia gastronómica seleccionada. Día 5 — Compras y Salida: Desayuno tranquilo, compras de lujo en Orchard Road y traslado privado al aeropuerto.", 
      pt: "Dia 1 — Chegada e Marina Bay: Traslado privativo do aeroporto, check-in no hotel de luxo e exploração noturna de Marina Bay. Dia 2 — Jardins e Singapura Moderna: Gardens by the Bay, Marina Bay Sands, Singapore Flyer e uma noite elegante à beira-mar. Dia 3 — Ilha Sentosa: Dia completo em Sentosa com praias, atrações, bem-estar e gastronomia premium. Dia 4 — Patrimônio e Gastronomia: Explore Chinatown, Little India e Kampong Gelam, seguido de uma experiência gastronômica selecionada. Dia 5 — Compras e Partida: Café da manhã tranquilo, compras de luxo na Orchard Road e traslado privativo ao aeroporto." 
    },
    travelTips: [
      { en: "Singapore is hot and humid throughout the year, so carry lightweight clothing and prepare for short tropical rain showers.", es: "Singapur es cálido y húmedo durante todo el año; lleva ropa ligera y prepárate para lluvias tropicales breves.", pt: "Singapura é quente e úmida durante todo o ano; leve roupas leves e esteja preparado para chuvas tropicais rápidas." },
      { en: "Singapore has an efficient public transport network, making it easy to move between major neighbourhoods and attractions.", es: "Singapur cuenta con una eficiente red de transporte público que facilita los desplazamientos entre barrios y atracciones.", pt: "Singapura possui uma eficiente rede de transporte público, facilitando os deslocamentos entre bairros e atrações." },
      { en: "Don't limit dining to luxury restaurants; hawker centres are an essential part of Singapore's culinary culture.", es: "No limites la gastronomía a los restaurantes de lujo; los hawker centres son esenciales para conocer la cultura culinaria local.", pt: "Não limite a gastronomia aos restaurantes de luxo; os hawker centres são essenciais para conhecer a cultura culinária local." },
      { en: "Follow local rules regarding smoking, public spaces, transport and cleanliness.", es: "Respeta las normas locales relacionadas con fumar, espacios públicos, transporte y limpieza.", pt: "Respeite as regras locais relacionadas a fumo, espaços públicos, transporte e limpeza." },
      { en: "Reserve popular attractions, premium restaurants and luxury experiences ahead of time, especially during major events and holiday periods.", es: "Reserva con antelación las atracciones populares, restaurantes premium y experiencias de lujo, especialmente durante grandes eventos y vacaciones.", pt: "Reserve com antecedência atrações populares, restaurantes premium e experiências de luxo, especialmente durante grandes eventos e períodos de férias." }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Singapore?", es: "¿Cuál es la mejor época para visitar Singapur?", pt: "Qual é a melhor época para visitar Singapura?" },
        a: { en: "Singapore can be visited throughout the year. February to April is a good general period for sightseeing, although the city remains warm and humid year-round.", es: "Singapur puede visitarse durante todo el año. De febrero a abril es un buen período general para hacer turismo, aunque la ciudad permanece cálida y húmeda durante todo el año.", pt: "Singapura pode ser visitada durante todo o ano. De fevereiro a abril é um bom período geral para passeios, embora a cidade permaneça quente e úmida durante todo o ano." }
      },
      {
        q: { en: "How many days are ideal for Singapore?", es: "¿Cuántos días son ideales para Singapur?", pt: "Quantos dias são ideais para Singapura?" },
        a: { en: "Four to five days are ideal for experiencing the major attractions, heritage neighbourhoods, shopping, food and Sentosa without rushing.", es: "Cuatro o cinco días son ideales para disfrutar de las principales atracciones, barrios históricos, compras, gastronomía y Sentosa sin prisas.", pt: "Quatro a cinco dias são ideais para conhecer as principais atrações, bairros históricos, compras, gastronomia e Sentosa sem pressa." }
      },
      {
        q: { en: "Is Singapore suitable for families?", es: "¿Es Singapur adecuado para familias?", pt: "Singapura é adequada para famílias?" },
        a: { en: "Yes. Singapore offers family-friendly attractions, Sentosa, nature experiences, interactive museums and excellent infrastructure for travelling with children.", es: "Sí. Singapur ofrece atracciones familiares, Sentosa, experiencias de naturaleza, museos interactivos y una excelente infraestructura para viajar con niños.", pt: "Sim. Singapura oferece atrações para famílias, Sentosa, experiências de natureza, museus interativos e excelente infraestrutura para viajar com crianças." }
      },
      {
        q: { en: "Is Singapore a luxury destination?", es: "¿Es Singapur un destino de lujo?", pt: "Singapura é um destino de luxo?" },
        a: { en: "Absolutely. Singapore combines five-star hotels, luxury shopping, fine dining, rooftop experiences, private tours and premium wellness retreats.", es: "Por supuesto. Singapur combina hoteles de cinco estrellas, compras de lujo, alta gastronomía, experiencias en rooftops, tours privados y retiros premium de bienestar.", pt: "Com certeza. Singapura combina hotéis cinco estrelas, compras de luxo, alta gastronomia, experiências em rooftops, tours privativos e retiros premium de bem-estar." }
      },
      {
        q: { en: "What food should I try in Singapore?", es: "¿Qué comida debería probar en Singapur?", pt: "Que comidas devo experimentar em Singapura?" },
        a: { en: "Try Hainanese chicken rice, laksa, chilli crab, satay, char kway teow, nasi lemak, kaya toast and roti prata for a broad introduction to Singapore's culinary culture.", es: "Prueba el arroz con pollo de Hainan, laksa, chilli crab, satay, char kway teow, nasi lemak, kaya toast y roti prata para descubrir la diversidad gastronómica de Singapur.", pt: "Experimente arroz com frango à Hainan, laksa, chilli crab, satay, char kway teow, nasi lemak, kaya toast e roti prata para conhecer a diversidade gastronômica de Singapura." }
      }
    ],
    seo: {
      en: {
        title: "Singapore Luxury Travel | Marina Bay, Sentosa & Iconic Experiences",
        description: "Discover Singapore with luxury experiences across Marina Bay, Gardens by the Bay, Sentosa, Chinatown, Little India, world-class dining and shopping.",
        keywords: "Singapore luxury travel, Singapore luxury holidays, Singapore tour, Marina Bay, Gardens by the Bay, Sentosa Island, Singapore hotels, Singapore food, Singapore honeymoon"
      },
      es: {
        title: "Viajes de Lujo a Singapur | Marina Bay, Sentosa y Experiencias Icónicas",
        description: "Descubre Singapur con experiencias de lujo en Marina Bay, Gardens by the Bay, Sentosa, Chinatown, Little India, gastronomía y compras.",
        keywords: "viajes de lujo a Singapur, vacaciones de lujo Singapur, tour Singapur, Marina Bay, Gardens by the Bay, Isla Sentosa, hoteles Singapur, gastronomía Singapur, luna de miel Singapur"
      },
      pt: {
        title: "Viagens de Luxo para Singapura | Marina Bay, Sentosa e Experiências Icônicas",
        description: "Descubra Singapura com experiências de luxo em Marina Bay, Gardens by the Bay, Sentosa, Chinatown, Little India, gastronomia e compras.",
        keywords: "viagens de luxo para Singapura, férias de luxo em Singapura, tour Singapura, Marina Bay, Gardens by the Bay, Ilha Sentosa, hotéis em Singapura, gastronomia de Singapura, lua de mel em Singapura"
      }
    }
  },
  {
    slug: "nepal-bhutan",
    title: { 
      en: "Nepal & Bhutan", 
      es: "Nepal y Bután", 
      pt: "Nepal e Butão" 
    },
    tagline: { 
      en: "Himalayan Peaks, Sacred Monasteries & Timeless Mountain Kingdoms", 
      es: "Picos del Himalaya, Monasterios Sagrados y Reinos de Montaña Atemporales", 
      pt: "Picos do Himalaia, Mosteiros Sagrados e Reinos Montanhosos Atemporais" 
    },
    region: "South Asia (Nepal & Bhutan)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200",
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=1200",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=1200",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200"
    ],
    description: { 
      en: "Discover Nepal and Bhutan, two extraordinary Himalayan destinations where towering mountain landscapes, ancient spiritual traditions, colourful cultures and refined mountain hospitality come together. From the historic temples and stupas of Kathmandu to the tranquil lakes of Pokhara, the legendary Himalayas and the birthplace of Buddha at Lumbini, Nepal offers a remarkable journey through nature, adventure and living heritage. Across the border, Bhutan reveals a different side of the Himalayas through peaceful valleys, fortress monasteries, traditional architecture and deeply rooted Buddhist traditions. Explore Thimphu, cross the scenic Dochula Pass, discover magnificent Punakha Dzong and hike to the iconic Tiger's Nest Monastery above Paro. Together, Nepal and Bhutan create an exceptional luxury journey for travellers seeking Himalayan scenery, spirituality, cultural discovery, wellness and meaningful experiences.", 
      es: "Descubre Nepal y Bután, dos extraordinarios destinos del Himalaya donde majestuosos paisajes montañosos, antiguas tradiciones espirituales, culturas vibrantes y una refinada hospitalidad de montaña se unen. Desde los templos y estupas históricos de Katmandú hasta los tranquilos lagos de Pokhara, los legendarios Himalayas y Lumbini, lugar de nacimiento de Buda, Nepal ofrece un viaje excepcional a través de la naturaleza, la aventura y un patrimonio vivo. Al otro lado de la frontera, Bután muestra otra faceta del Himalaya a través de valles tranquilos, monasterios-fortaleza, arquitectura tradicional y profundas tradiciones budistas. Explora Thimphu, atraviesa el pintoresco paso de Dochula, descubre el magnífico Punakha Dzong y realiza la icónica caminata hasta el monasterio Tiger's Nest sobre Paro. Juntos, Nepal y Bután crean un extraordinario viaje de lujo para viajeros que buscan paisajes del Himalaya, espiritualidad, cultura, bienestar y experiencias significativas.", 
      pt: "Descubra o Nepal e o Butão, dois destinos extraordinários do Himalaia onde paisagens montanhosas majestosas, antigas tradições espirituais, culturas vibrantes e uma refinada hospitalidade de montanha se encontram. Dos templos e estupas históricos de Katmandu aos tranquilos lagos de Pokhara, às lendárias montanhas do Himalaia e a Lumbini, local de nascimento de Buda, o Nepal oferece uma jornada excepcional pela natureza, aventura e patrimônio vivo. Do outro lado da fronteira, o Butão revela uma faceta diferente do Himalaia através de vales tranquilos, mosteiros-fortaleza, arquitetura tradicional e profundas tradições budistas. Explore Thimphu, atravesse o cênico Passo de Dochula, descubra o magnífico Punakha Dzong e faça a icônica caminhada até o Mosteiro Tiger's Nest acima de Paro. Juntos, Nepal e Butão formam uma extraordinária viagem de luxo para viajantes que buscam paisagens do Himalaia, espiritualidade, cultura, bem-estar e experiências significativas." 
    },
    overview: {
      en: "Discover Nepal and Bhutan, two extraordinary Himalayan destinations where towering mountain landscapes, ancient spiritual traditions, colourful cultures and refined mountain hospitality come together. From the historic temples and stupas of Kathmandu to the tranquil lakes of Pokhara, the legendary Himalayas and the birthplace of Buddha at Lumbini, Nepal offers a remarkable journey through nature, adventure and living heritage. Across the border, Bhutan reveals a different side of the Himalayas through peaceful valleys, fortress monasteries, traditional architecture and deeply rooted Buddhist traditions. Explore Thimphu, cross the scenic Dochula Pass, discover magnificent Punakha Dzong and hike to the iconic Tiger's Nest Monastery above Paro. Together, Nepal and Bhutan create an exceptional luxury journey for travellers seeking Himalayan scenery, spirituality, cultural discovery, wellness and meaningful experiences.",
      es: "Descubre Nepal y Bután, dos extraordinarios destinos del Himalaya donde majestuosos paisajes montañosos, antiguas tradiciones espirituales, culturas vibrantes y una refinada hospitalidad de montaña se unen. Desde los templos y estupas históricos de Katmandú hasta los tranquilos lagos de Pokhara, los legendarios Himalayas y Lumbini, lugar de nacimiento de Buda, Nepal ofrece un viaje excepcional a través de la naturaleza, la aventura y un patrimonio vivo. Al otro lado de la frontera, Bután muestra otra faceta del Himalaya a través de valles tranquilos, monasterios-fortaleza, arquitectura tradicional y profundas tradiciones budistas. Explora Thimphu, atraviesa el pintoresco paso de Dochula, descubre el magnífico Punakha Dzong y realiza la icónica caminata hasta el monasterio Tiger's Nest sobre Paro. Juntos, Nepal y Bután crean un extraordinario viaje de lujo para viajeros que buscan paisajes del Himalaya, espiritualidad, cultura, bienestar y experiencias significativas.",
      pt: "Descubra o Nepal e o Butão, dois destinos extraordinários do Himalaia onde paisagens montanhosas majestosas, antigas tradições espirituais, culturas vibrantes e uma refinada hospitalidade de montanha se encontram. Dos templos e estupas históricos de Katmandu aos tranquilos lagos de Pokhara, às lendárias montanhas do Himalaia e a Lumbini, local de nascimento de Buda, o Nepal oferece uma jornada excepcional pela natureza, aventura e patrimônio vivo. Do outro lado da fronteira, o Butão revela uma faceta diferente do Himalaia através de vales tranquilos, mosteiros-fortaleza, arquitetura tradicional e profundas tradições budistas. Explore Thimphu, atravesse o cênico Passo de Dochula, descubra o magnífico Punakha Dzong e faça a icônica caminhada até o Mosteiro Tiger's Nest acima de Paro. Juntos, Nepal e Butão formam uma extraordinária viagem de luxo para viajantes que buscam paisagens do Himalaia, espiritualidade, cultura, bem-estar e experiências significativas."
    },
    history: {
      en: "Nepal and Bhutan developed as distinct Himalayan kingdoms shaped by Buddhism, Hinduism, trade routes and mountain communities. Nepal's Kathmandu Valley became an important centre of art, architecture and religion, particularly under the Malla kingdoms. Its historic cities of Kathmandu, Patan and Bhaktapur preserve remarkable temples, courtyards, palaces and traditional Newari craftsmanship. Bhutan developed its own distinctive Himalayan Buddhist identity, with dzongs serving as important religious and administrative centres. The country unified under the Wangchuck dynasty in the early twentieth century and became a constitutional monarchy in 2008. The heritage of both countries remains deeply connected to everyday life, with temples, monasteries, festivals, traditional architecture and religious practices continuing to shape local communities.",
      es: "Nepal y Bután se desarrollaron como distintos reinos del Himalaya, moldeados por el budismo, el hinduismo, las rutas comerciales y las comunidades de montaña. El valle de Katmandú se convirtió en un importante centro de arte, arquitectura y religión, especialmente durante los reinos Malla. Sus ciudades históricas de Katmandú, Patan y Bhaktapur conservan extraordinarios templos, patios, palacios y artesanía tradicional Newar. Bután desarrolló su propia identidad budista del Himalaya, con los dzongs como importantes centros religiosos y administrativos. El país se unificó bajo la dinastía Wangchuck a comienzos del siglo XX y se convirtió en una monarquía constitucional en 2008. El patrimonio de ambos países continúa profundamente conectado con la vida cotidiana, mientras templos, monasterios, festivales, arquitectura tradicional y prácticas religiosas siguen dando forma a las comunidades locales.",
      pt: "Nepal e Butão desenvolveram-se como distintos reinos do Himalaia, moldados pelo budismo, hinduísmo, rotas comerciais e comunidades montanhosas. O Vale de Katmandu tornou-se um importante centro de arte, arquitetura e religião, especialmente durante os reinos Malla. Suas cidades históricas de Katmandu, Patan e Bhaktapur preservam templos, pátios, palácios e artesanato tradicional Newar de grande importância. O Butão desenvolveu sua própria identidade budista do Himalaia, com os dzongs funcionando como importantes centros religiosos e administrativos. O país foi unificado sob a dinastia Wangchuck no início do século XX e tornou-se uma monarquia constitucional em 2008. O patrimônio dos dois países continua profundamente ligado à vida cotidiana, com templos, mosteiros, festivais, arquitetura tradicional e práticas religiosas moldando as comunidades locais."
    },
    culture: {
      en: "The cultural landscape of Nepal and Bhutan is deeply spiritual and remarkably diverse. Hindu temples, Buddhist stupas, monasteries, prayer flags, sacred rivers and mountain shrines form an integral part of everyday life in Nepal. Bhutan's culture is strongly influenced by Vajrayana Buddhism, with monasteries, dzongs, masked dances, prayer ceremonies, traditional weaving and archery remaining important expressions of national identity. Traditional hospitality, local craftsmanship, colourful festivals and distinctive clothing make both countries particularly rewarding for travellers interested in authentic cultural immersion.",
      es: "El paisaje cultural de Nepal y Bután es profundamente espiritual y extraordinariamente diverso. Los templos hindúes, estupas budistas, monasterios, banderas de oración, ríos sagrados y santuarios de montaña forman parte integral de la vida cotidiana de Nepal. La cultura de Bután está fuertemente influenciada por el budismo Vajrayana, mientras que los monasterios, dzongs, danzas con máscaras, ceremonias religiosas, tejidos tradicionales y tiro con arco continúan siendo importantes expresiones de la identidad nacional. La hospitalidad tradicional, la artesanía local, los coloridos festivales y las vestimentas distintivas hacen que ambos países sean especialmente atractivos para viajeros interesados en una inmersión cultural auténtica.",
      pt: "A paisagem cultural do Nepal e do Butão é profundamente espiritual e extraordinariamente diversa. Templos hindus, estupas budistas, mosteiros, bandeiras de oração, rios sagrados e santuários nas montanhas fazem parte da vida cotidiana do Nepal. A cultura do Butão é fortemente influenciada pelo budismo Vajrayana, enquanto mosteiros, dzongs, danças mascaradas, cerimônias religiosas, tecelagem tradicional e arco e flecha continuam sendo importantes expressões da identidade nacional. A hospitalidade tradicional, o artesanato local, os festivais coloridos e as vestimentas distintas tornam os dois países especialmente interessantes para viajantes que desejam uma imersão cultural autêntica."
    },
    localFood: {
      en: "Nepalese cuisine combines Himalayan, South Asian and Tibetan influences. Dal bhat remains a staple meal, while momos, thukpa, sel roti and regional Newari dishes offer a wider introduction to the country's culinary traditions. Bhutanese cuisine is distinctive for its generous use of chillies and cheese. Ema datshi, red rice, buckwheat preparations, phaksha paa and seasonal vegetables are among the country's characteristic flavours. Tea, Himalayan herbs and locally produced ingredients complete the culinary experience across both destinations.",
      es: "La gastronomía nepalí combina influencias del Himalaya, Asia Meridional y Tíbet. El dal bhat es uno de los platos básicos, mientras que los momos, thukpa, sel roti y las especialidades Newari ofrecen una visión más amplia de las tradiciones culinarias del país. La cocina de Bután destaca por el uso generoso de chile y queso. El ema datshi, el arroz rojo, las preparaciones de trigo sarraceno, el phaksha paa y las verduras de temporada forman parte de sus sabores característicos. El té, las hierbas del Himalaya y los ingredientes locales completan la experiencia gastronómica de ambos destinos.",
      pt: "A culinária nepalesa combina influências do Himalaia, do Sul da Ásia e do Tibete. O dal bhat é uma refeição básica, enquanto momos, thukpa, sel roti e especialidades Newari oferecem uma introdução mais ampla às tradições culinárias do país. A culinária do Butão destaca-se pelo uso generoso de pimentas e queijo. Ema datshi, arroz vermelho, preparações de trigo-sarraceno, phaksha paa e vegetais sazonais estão entre seus sabores característicos. Chás, ervas do Himalaia e ingredientes produzidos localmente completam a experiência gastronômica dos dois destinos."
    },
    bestTime: { 
      en: "October to April", 
      es: "De octubre a abril", 
      pt: "De outubro a abril" 
    },
    attractions: [
      {
        name: { en: "Kathmandu Valley", es: "Valle de Katmandú", pt: "Vale de Katmandu" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
        desc: { 
          en: "Explore Kathmandu, Patan and Bhaktapur, three historic cities filled with UNESCO heritage, temples, courtyards, palaces and extraordinary Newari craftsmanship.", 
          es: "Explora Katmandú, Patan y Bhaktapur, tres ciudades históricas llenas de patrimonio UNESCO, templos, patios, palacios y extraordinaria artesanía Newar.", 
          pt: "Explore Katmandu, Patan e Bhaktapur, três cidades históricas repletas de patrimônio UNESCO, templos, pátios, palácios e extraordinário artesanato Newar." 
        }
      },
      {
        name: { en: "Boudhanath Stupa", es: "Estupa de Boudhanath", pt: "Estupa de Boudhanath" },
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800",
        desc: { 
          en: "Visit one of Nepal's most important Buddhist pilgrimage sites and experience the spiritual atmosphere surrounding the enormous white stupa and prayer wheels.", 
          es: "Visita uno de los lugares de peregrinación budista más importantes de Nepal y descubre la atmósfera espiritual de su gran estupa blanca y ruedas de oración.", 
          pt: "Visite um dos mais importantes locais de peregrinação budista do Nepal e vivencie a atmosfera espiritual da grande estupa branca e das rodas de oração." 
        }
      },
      {
        name: { en: "Pokhara & Phewa Lake", es: "Pokhara y Lago Phewa", pt: "Pokhara e Lago Phewa" },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
        desc: { 
          en: "Relax beside tranquil Phewa Lake while enjoying spectacular views of the Annapurna range and Machhapuchhre.", 
          es: "Relájate junto al tranquilo lago Phewa mientras disfrutas de espectaculares vistas de la cordillera del Annapurna y Machhapuchhre.", 
          pt: "Relaxe às margens do tranquilo Lago Phewa enquanto aprecia vistas espetaculares da cordilheira Annapurna e do Machhapuchhre." 
        }
      },
      {
        name: { en: "Everest Mountain Region", es: "Región del Monte Everest", pt: "Região do Monte Everest" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
        desc: { 
          en: "Experience the legendary Himalayan landscape around Mount Everest through scenic mountain flights, viewpoints or carefully planned trekking experiences.", 
          es: "Descubre el legendario paisaje del Himalaya alrededor del Everest mediante vuelos panorámicos, miradores o experiencias de trekking cuidadosamente planificadas.", 
          pt: "Vivencie a lendária paisagem do Himalaia ao redor do Everest através de voos panorâmicos, mirantes ou experiências de trekking cuidadosamente planejadas." 
        }
      },
      {
        name: { en: "Paro & Tiger's Nest", es: "Paro y Tiger's Nest", pt: "Paro e Tiger's Nest" },
        image: "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=800",
        desc: { 
          en: "Discover the beautiful Paro Valley and hike to Taktsang Monastery, the legendary Tiger's Nest, dramatically perched above the valley.", 
          es: "Descubre el hermoso valle de Paro y realiza la caminata hasta el monasterio Taktsang, el legendario Tiger's Nest, situado dramáticamente sobre el valle.", 
          pt: "Descubra o belo Vale de Paro e faça a caminhada até o Mosteiro Taktsang, o lendário Tiger's Nest, dramaticamente situado acima do vale." 
        }
      },
      {
        name: { en: "Punakha Dzong", es: "Punakha Dzong", pt: "Punakha Dzong" },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
        desc: { 
          en: "Visit one of Bhutan's most spectacular fortress-monasteries, set dramatically at the confluence of the Pho Chhu and Mo Chhu rivers.", 
          es: "Visita uno de los monasterios-fortaleza más espectaculares de Bután, situado en la confluencia de los ríos Pho Chhu y Mo Chhu.", 
          pt: "Visite um dos mais espetaculares mosteiros-fortaleza do Butão, situado na confluência dos rios Pho Chhu e Mo Chhu." 
        }
      }
    ],
    experiences: [
      {
        title: { en: "Himalayan Mountain Flight", es: "Vuelo Panorámico sobre el Himalaya", pt: "Voo Panorâmico pelo Himalaia" },
        desc: { en: "Enjoy a scenic flight for extraordinary views of the Himalayan peaks, including the Everest region.", es: "Disfruta de un vuelo panorámico con vistas extraordinarias de los picos del Himalaya, incluida la región del Everest.", pt: "Desfrute de um voo panorâmico com vistas extraordinárias dos picos do Himalaia, incluindo a região do Everest." },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800"
      },
      {
        title: { en: "Kathmandu Heritage Walk", es: "Ruta del Patrimonio por Katmandú", pt: "Caminhada Histórica em Katmandu" },
        desc: { en: "Explore ancient temples, courtyards, stupas and traditional markets with a private cultural guide.", es: "Explora antiguos templos, patios, estupas y mercados tradicionales con un guía cultural privado.", pt: "Explore antigos templos, pátios, estupas e mercados tradicionais com um guia cultural privativo." },
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800"
      },
      {
        title: { en: "Pokhara Luxury Lakeside Escape", es: "Escapada de Lujo Junto al Lago en Pokhara", pt: "Refúgio de Luxo à Beira-Mar em Pokhara" },
        desc: { en: "Combine Himalayan views, private boating on Phewa Lake, wellness and refined lakeside dining.", es: "Combina vistas del Himalaya, navegación privada por el lago Phewa, bienestar y gastronomía sofisticada junto al lago.", pt: "Combine vistas do Himalaia, passeio privativo de barco no Lago Phewa, bem-estar e gastronomia sofisticada à beira do lago." },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
      },
      {
        title: { en: "Bhutanese Monastery Experience", es: "Experiencia en Monasterios de Bután", pt: "Experiência em Mosteiros do Butão" },
        desc: { en: "Visit historic monasteries and dzongs while learning about Bhutanese Buddhist traditions.", es: "Visita monasterios y dzongs históricos mientras descubres las tradiciones budistas de Bután.", pt: "Visite mosteiros e dzongs históricos enquanto conhece as tradições budistas do Butão." },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800"
      },
      {
        title: { en: "Tiger's Nest Private Guided Hike", es: "Caminata Privada Guiada al Tiger's Nest", pt: "Caminhada Privativa Guiada ao Tiger's Nest" },
        desc: { en: "Hike to Taktsang Monastery with a private guide and enjoy the sacred mountain landscape around Paro.", es: "Realiza la caminata hasta Taktsang con un guía privado y disfruta del paisaje montañoso sagrado de Paro.", pt: "Faça a caminhada até Taktsang com um guia privativo e aproveite a paisagem montanhosa sagrada de Paro." },
        image: "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=800"
      },
      {
        title: { en: "Traditional Himalayan Wellness", es: "Bienestar Tradicional del Himalaya", pt: "Bem-estar Tradicional do Himalaia" },
        desc: { en: "Experience meditation, yoga, traditional therapies and Bhutanese or Himalayan-inspired wellness rituals.", es: "Disfruta de meditación, yoga, terapias tradicionales y rituales de bienestar inspirados en Bután y el Himalaya.", pt: "Experimente meditação, yoga, terapias tradicionais e rituais de bem-estar inspirados no Butão e no Himalaia." },
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
      }
    ],
    hotels: [
      {
        name: "Dwarika's Hotel, Kathmandu",
        rating: "Luxury 5-Star Heritage Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        desc: { en: "A distinctive heritage-inspired luxury hotel in Kathmandu known for traditional Nepalese architecture, craftsmanship and a strong sense of place.", es: "Un exclusivo hotel de lujo inspirado en el patrimonio de Katmandú, conocido por su arquitectura tradicional nepalí, artesanía y fuerte identidad local.", pt: "Um exclusivo hotel de luxo inspirado no patrimônio de Katmandu, conhecido pela arquitetura tradicional nepalesa, artesanato e forte identidade local." }
      },
      {
        name: "COMO Uma Paro, Bhutan",
        rating: "Luxury 5-Star Mountain Retreat",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
        desc: { en: "A refined Himalayan retreat offering serene mountain surroundings, wellness experiences, Bhutanese-inspired design and an intimate connection with Paro's landscape.", es: "Un elegante refugio del Himalaya rodeado de montañas, con experiencias de bienestar, diseño inspirado en Bután y una conexión íntima con el paisaje de Paro.", pt: "Um elegante refúgio do Himalaia cercado por montanhas, oferecendo experiências de bem-estar, design inspirado no Butão e uma conexão íntima com a paisagem de Paro." }
      }
    ],
    thingsToDo: [
      { en: "Himalayan Mountain Flight", es: "Vuelo Panorámico sobre el Himalaya", pt: "Voo Panorâmico pelo Himalaia" },
      { en: "Kathmandu Heritage Walk", es: "Ruta del Patrimonio por Katmandú", pt: "Caminhada Histórica em Katmandu" },
      { en: "Pokhara Luxury Lakeside Escape", es: "Escapada de Lujo Junto al Lago en Pokhara", pt: "Refúgio de Luxo à Beira-Mar em Pokhara" },
      { en: "Bhutanese Monastery Experience", es: "Experiencia en Monasterios de Bután", pt: "Experiência em Mosteiros do Butão" },
      { en: "Tiger's Nest Private Guided Hike", es: "Caminata Privada Guiada al Tiger's Nest", pt: "Caminhada Privativa Guiada ao Tiger's Nest" },
      { en: "Traditional Himalayan Wellness", es: "Bienestar Tradicional del Himalaya", pt: "Bem-estar Tradicional do Himalaia" }
    ],
    suggestedItinerary: { 
      en: "Day 1 — Kathmandu Arrival: Private airport transfer, luxury hotel check-in and relaxed evening in Kathmandu. Day 2 — Kathmandu Heritage: Explore Kathmandu Durbar Square, Swayambhunath, Boudhanath and Pashupatinath. Day 3 — Kathmandu to Pokhara: Travel to Pokhara and enjoy a relaxed lakeside afternoon with Himalayan views. Day 4 — Pokhara: Sunrise Himalayan viewing, Phewa Lake boating and a curated wellness or cultural experience. Day 5 — Nepal to Bhutan: Return to Kathmandu and fly to Paro, Bhutan, followed by a private transfer to Thimphu. Day 6 — Thimphu & Dochula: Explore Thimphu's cultural landmarks and travel through the scenic Dochula Pass towards Punakha. Day 7 — Punakha: Discover Punakha Dzong, traditional villages and the peaceful Himalayan valley. Day 8 — Paro & Tiger's Nest: Return to Paro and hike to the iconic Taktsang Monastery, followed by a relaxed evening in Paro. Day 9 — Departure: Leisure breakfast and private transfer to Paro International Airport.", 
      es: "Día 1 — Llegada a Katmandú: Traslado privado desde el aeropuerto, check-in en el hotel de lujo y tarde relajada en Katmandú. Día 2 — Patrimonio de Katmandú: Explora Kathmandu Durbar Square, Swayambhunath, Boudhanath y Pashupatinath. Día 3 — Katmandú a Pokhara: Viaja a Pokhara y disfruta de una tarde tranquila junto al lago con vistas del Himalaya. Día 4 — Pokhara: Vistas del Himalaya al amanecer, paseo en barco por el lago Phewa y una experiencia de bienestar o cultural. Día 5 — Nepal a Bután: Regreso a Katmandú y vuelo a Paro, Bután, seguido de traslado privado a Thimphu. Día 6 — Thimphu y Dochula: Explora los principales lugares culturales de Thimphu y atraviesa el pintoresco paso de Dochula hacia Punakha. Día 7 — Punakha: Descubre Punakha Dzong, las aldeas tradicionales y el tranquilo valle del Himalaya. Día 8 — Paro y Tiger's Nest: Regresa a Paro y realiza la caminata hasta el icónico monasterio Taktsang, seguido de una tarde relajada en Paro. Día 9 — Salida: Desayuno tranquilo y traslado privado al aeropuerto internacional de Paro.", 
      pt: "Dia 1 — Chegada a Katmandu: Traslado privativo do aeroporto, check-in no hotel de luxo e tarde tranquila em Katmandu. Dia 2 — Patrimônio de Katmandu: Explore Kathmandu Durbar Square, Swayambhunath, Boudhanath e Pashupatinath. Dia 3 — Katmandu a Pokhara: Viaje até Pokhara e desfrute de uma tarde tranquila à beira do lago com vistas do Himalaia. Dia 4 — Pokhara: Observação do Himalaia ao nascer do sol, passeio de barco pelo Lago Phewa e uma experiência de bem-estar ou cultural. Dia 5 — Nepal a Butão: Retorno a Katmandu e voo para Paro, Butão, seguido de traslado privativo para Thimphu. Dia 6 — Thimphu e Dochula: Explore os principais pontos culturais de Thimphu e atravesse o cênico Passo de Dochula em direção a Punakha. Dia 7 — Punakha: Descubra Punakha Dzong, vilarejos tradicionais e o tranquilo vale do Himalaia. Dia 8 — Paro e Tiger's Nest: Retorne a Paro e faça a caminhada até o icônico Mosteiro Taktsang, seguida de uma tarde tranquila em Paro. Dia 9 — Partida: Café da manhã tranquilo e traslado privativo para o Aeroporto Internacional de Paro." 
    },
    travelTips: [
      { en: "Mountain weather can change quickly, so carry layers and comfortable walking shoes even during the warmer months.", es: "El clima de montaña puede cambiar rápidamente; lleva varias capas de ropa y calzado cómodo incluso durante los meses más cálidos.", pt: "O clima nas montanhas pode mudar rapidamente; leve roupas em camadas e calçados confortáveis mesmo durante os meses mais quentes." },
      { en: "Allow your body time to adjust when travelling to higher elevations and discuss demanding trekking plans with an experienced operator.", es: "Dale tiempo a tu cuerpo para adaptarse a las grandes alturas y consulta los trekkings exigentes con un operador experimentado.", pt: "Dê tempo ao corpo para se adaptar às altitudes elevadas e planeje trekkings exigentes com um operador experiente." },
      { en: "Dress respectfully when visiting temples and monasteries and follow local instructions regarding photography and footwear.", es: "Viste respetuosamente al visitar templos y monasterios y sigue las normas locales sobre fotografía y calzado.", pt: "Vista-se de forma respeitosa ao visitar templos e mosteiros e siga as regras locais sobre fotografia e calçados." },
      { en: "The Tiger's Nest hike requires good footwear and reasonable fitness; allow plenty of time rather than treating it as a rushed excursion.", es: "La caminata al Tiger's Nest requiere buen calzado y una condición física razonable; reserva suficiente tiempo y evita hacerla con prisas.", pt: "A caminhada até o Tiger's Nest exige bons calçados e condicionamento físico razoável; reserve tempo suficiente e evite fazê-la com pressa." },
      { en: "Photography, religious ceremonies and interactions with monks should always be approached respectfully and according to local customs.", es: "La fotografía, las ceremonias religiosas y las interacciones con monjes deben realizarse siempre con respeto y de acuerdo con las costumbres locales.", pt: "Fotografias, cerimônias religiosas e interações com monges devem sempre ser realizadas com respeito e de acordo com os costumes locais." }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Nepal and Bhutan?", es: "¿Cuál es la mejor época para visitar Nepal y Bután?", pt: "Qual é a melhor época para visitar o Nepal e o Butão?" },
        a: { en: "October to April is a strong general period for combining Nepal and Bhutan, offering good conditions for mountain views, cultural sightseeing and outdoor experiences.", es: "De octubre a abril es un excelente período general para combinar Nepal y Bután, con buenas condiciones para disfrutar de las montañas, el patrimonio cultural y las actividades al aire libre.", pt: "De outubro a abril é um excelente período geral para combinar Nepal e Butão, com boas condições para apreciar as montanhas, o patrimônio cultural e as atividades ao ar livre." }
      },
      {
        q: { en: "How many days are ideal for Nepal and Bhutan?", es: "¿Cuántos días son ideales para Nepal y Bután?", pt: "Quantos dias são ideais para Nepal e Butão?" },
        a: { en: "A 9–12 day journey works well for combining Kathmandu, Pokhara and Bhutan's Paro, Thimphu and Punakha without rushing.", es: "Un viaje de 9 a 12 días funciona muy bien para combinar Katmandú, Pokhara y Paro, Thimphu y Punakha en Bután sin prisas.", pt: "Uma viagem de 9 a 12 dias funciona muito bem para combinar Katmandu, Pokhara e Paro, Thimphu e Punakha no Butão sem pressa." }
      },
      {
        q: { en: "Is Nepal suitable for luxury travel?", es: "¿Es Nepal adecuado para viajes de lujo?", pt: "O Nepal é adequado para viagens de luxo?" },
        a: { en: "Yes. Nepal offers luxury heritage hotels, mountain-view resorts, private guides, scenic flights, wellness experiences and personalised Himalayan journeys.", es: "Sí. Nepal ofrece hoteles patrimoniales de lujo, resorts con vistas a las montañas, guías privados, vuelos panorámicos, bienestar y viajes personalizados por el Himalaya.", pt: "Sim. O Nepal oferece hotéis históricos de luxo, resorts com vistas para as montanhas, guias privativos, voos panorâmicos, experiências de bem-estar e viagens personalizadas pelo Himalaia." }
      },
      {
        q: { en: "Is Bhutan good for a luxury holiday?", es: "¿Es Bután adecuado para unas vacaciones de lujo?", pt: "O Butão é bom para férias de luxo?" },
        a: { en: "Absolutely. Bhutan is particularly suited to premium cultural journeys, private guides, luxury mountain retreats, wellness experiences and immersive monastery visits.", es: "Por supuesto. Bután es especialmente adecuado para viajes culturales premium, guías privados, retiros de lujo en las montañas, bienestar y visitas inmersivas a monasterios.", pt: "Com certeza. O Butão é especialmente indicado para viagens culturais premium, guias privativos, retiros de luxo nas montanhas, experiências de bem-estar e visitas imersivas a mosteiros." }
      },
      {
        q: { en: "Can I combine Nepal and Bhutan in one trip?", es: "¿Puedo combinar Nepal y Bután en un solo viaje?", pt: "Posso combinar o Nepal e o Butão em uma única viagem?" },
        a: { en: "Yes. Combining both countries creates a natural Himalayan itinerary, pairing Nepal's mountain landscapes and cultural diversity with Bhutan's intimate Buddhist heritage and peaceful valleys.", es: "Sí. Combinar ambos países crea un itinerario natural por el Himalaya, uniendo los paisajes montañosos y la diversidad cultural de Nepal con el patrimonio budista y los tranquilos valles de Bután.", pt: "Sim. Combinar os dois países cria um roteiro natural pelo Himalaia, unindo as paisagens montanhosas e a diversidade cultural do Nepal ao patrimônio budista e aos tranquilos vales do Butão." }
      }
    ],
    seo: {
      en: {
        title: "Nepal & Bhutan Luxury Travel | Himalayas, Temples & Mountain Kingdoms",
        description: "Discover Nepal and Bhutan through luxury Himalayan journeys featuring Kathmandu, Pokhara, Everest views, Paro, Thimphu, Punakha and Tiger's Nest.",
        keywords: "Nepal Bhutan luxury travel, Nepal Bhutan tour, Himalayan luxury tour, Kathmandu, Pokhara, Mount Everest, Paro, Thimphu, Punakha, Tiger's Nest, Bhutan luxury travel"
      },
      es: {
        title: "Viajes de Lujo a Nepal y Bután | Himalaya, Templos y Reinos de Montaña",
        description: "Descubre Nepal y Bután en un viaje de lujo por el Himalaya con Katmandú, Pokhara, vistas del Everest, Paro, Thimphu, Punakha y Tiger's Nest.",
        keywords: "viajes de lujo Nepal Bután, tour Nepal Bután, viaje de lujo Himalaya, Katmandú, Pokhara, Monte Everest, Paro, Thimphu, Punakha, Tiger's Nest, viajes de lujo Bután"
      },
      pt: {
        title: "Viagens de Luxo para Nepal e Butão | Himalaia, Templos e Reinos Montanhosos",
        description: "Descubra Nepal e Butão em uma viagem de luxo pelo Himalaia com Katmandu, Pokhara, vistas do Everest, Paro, Thimphu, Punakha e Tiger's Nest.",
        keywords: "viagens de luxo Nepal Butão, tour Nepal Butão, viagem de luxo Himalaia, Katmandu, Pokhara, Monte Everest, Paro, Thimphu, Punakha, Tiger's Nest, viagens de luxo Butão"
      }
    }
  },
  {
    slug: "laos",
    title: { 
      en: "Laos", 
      es: "Laos", 
      pt: "Laos" 
    },
    tagline: { 
      en: "Timeless Temples, Mekong Journeys, Emerald Landscapes & Authentic Luxury", 
      es: "Templos Atemporales, Viajes por el Mekong, Paisajes Esmeralda y Lujo Auténtico", 
      pt: "Templos Atemporais, Jornadas pelo Mekong, Paisagens Esmeralda e Luxo Autêntico" 
    },
    region: "Southeast Asia (Laos)",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=1200",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=1200",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
      "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=1200",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200"
    ],
    description: { 
      en: "Discover Laos, one of Southeast Asia's most enchanting destinations, where ancient Buddhist traditions, peaceful riverside towns, dramatic limestone mountains and timeless local culture create a truly distinctive travel experience. From the UNESCO-listed heritage of Luang Prabang and the tranquil waters of the Mekong to the turquoise pools of Kuang Si Waterfalls and the spectacular landscapes of Vang Vieng, Laos offers a slower and more authentic side of Asia. Explore golden temples, traditional markets, artisan villages and sacred rituals, cruise along the Mekong, discover hidden waterfalls and caves, and experience Lao cuisine rooted in fresh herbs, spices and sticky rice. With its serene atmosphere, natural beauty and genuine hospitality, Laos is ideal for luxury cultural journeys, river escapes, wellness retreats and travellers seeking meaningful experiences away from the crowds.", 
      es: "Descubre Laos, uno de los destinos más encantadores del Sudeste Asiático, donde antiguas tradiciones budistas, tranquilos pueblos junto a los ríos, espectaculares montañas de piedra caliza y una cultura local atemporal crean una experiencia de viaje verdaderamente única. Desde el patrimonio de Luang Prabang, declarado Patrimonio Mundial por la UNESCO, y las tranquilas aguas del Mekong hasta las piscinas turquesas de las cascadas de Kuang Si y los paisajes de Vang Vieng, Laos ofrece una visión más pausada y auténtica de Asia. Explora templos dorados, mercados tradicionales, aldeas artesanales y rituales sagrados, navega por el Mekong, descubre cascadas y cuevas escondidas y disfruta de una gastronomía basada en hierbas frescas, especias y arroz glutinoso. Con su ambiente sereno, belleza natural y genuina hospitalidad, Laos es ideal para viajes culturales de lujo, escapadas fluviales, retiros de bienestar y viajeros que buscan experiencias auténticas lejos de las multitudes.", 
      pt: "Descubra o Laos, um dos destinos mais encantadores do Sudeste Asiático, onde antigas tradições budistas, cidades tranquilas às margens dos rios, montanhas de calcário impressionantes e uma cultura local atemporal criam uma experiência de viagem verdadeiramente singular. Do patrimônio de Luang Prabang, reconhecido como Patrimônio Mundial pela UNESCO, e das águas tranquilas do Mekong às piscinas azul-turquesa das cachoeiras de Kuang Si e às paisagens espetaculares de Vang Vieng, o Laos oferece um lado mais tranquilo e autêntico da Ásia. Explore templos dourados, mercados tradicionais, vilarejos de artesãos e rituais sagrados, navegue pelo Mekong, descubra cachoeiras e cavernas escondidas e experimente uma culinária baseada em ervas frescas, especiarias e arroz glutinoso. Com sua atmosfera serena, beleza natural e hospitalidade genuína, o Laos é ideal para viagens culturais de luxo, escapadas fluviais, retiros de bem-estar e viajantes que buscam experiências autênticas longe das multidões." 
    },
    overview: {
      en: "Discover Laos, one of Southeast Asia's most enchanting destinations, where ancient Buddhist traditions, peaceful riverside towns, dramatic limestone mountains and timeless local culture create a truly distinctive travel experience. From the UNESCO-listed heritage of Luang Prabang and the tranquil waters of the Mekong to the turquoise pools of Kuang Si Waterfalls and the spectacular landscapes of Vang Vieng, Laos offers a slower and more authentic side of Asia. Explore golden temples, traditional markets, artisan villages and sacred rituals, cruise along the Mekong, discover hidden waterfalls and caves, and experience Lao cuisine rooted in fresh herbs, spices and sticky rice. With its serene atmosphere, natural beauty and genuine hospitality, Laos is ideal for luxury cultural journeys, river escapes, wellness retreats and travellers seeking meaningful experiences away from the crowds.",
      es: "Descubre Laos, uno de los destinos más encantadores del Sudeste Asiático, donde antiguas tradiciones budistas, tranquilos pueblos junto a los ríos, espectaculares montañas de piedra caliza y una cultura local atemporal crean una experiencia de viaje verdaderamente única. Desde el patrimonio de Luang Prabang, declarado Patrimonio Mundial por la UNESCO, y las tranquilas aguas del Mekong hasta las piscinas turquesas de las cascadas de Kuang Si y los paisajes de Vang Vieng, Laos ofrece una visión más pausada y auténtica de Asia. Explora templos dorados, mercados tradicionales, aldeas artesanales y rituales sagrados, navega por el Mekong, descubre cascadas y cuevas escondidas y disfruta de una gastronomía basada en hierbas frescas, especias y arroz glutinoso. Con su ambiente sereno, belleza natural y genuina hospitalidad, Laos es ideal para viajes culturales de lujo, escapadas fluviales, retiros de bienestar y viajeros que buscan experiencias auténticas lejos de las multitudes.",
      pt: "Descubra o Laos, um dos destinos mais encantadores do Sudeste Asiático, onde antigas tradições budistas, cidades tranquilas às margens dos rios, montanhas de calcário impressionantes e uma cultura local atemporal criam uma experiência de viagem verdadeiramente singular. Do patrimônio de Luang Prabang, reconhecido como Patrimônio Mundial pela UNESCO, e das águas tranquilas do Mekong às piscinas azul-turquesa das cachoeiras de Kuang Si e às paisagens espetaculares de Vang Vieng, o Laos oferece um lado mais tranquilo e autêntico da Ásia. Explore templos dourados, mercados tradicionais, vilarejos de artesãos e rituais sagrados, navegue pelo Mekong, descubra cachoeiras e cavernas escondidas e experimente uma culinária baseada em ervas frescas, especiarias e arroz glutinoso. Com sua atmosfera serena, beleza natural e hospitalidade genuína, o Laos é ideal para viagens culturais de luxo, escapadas fluviais, retiros de bem-estar e viajantes que buscam experiências autênticas longe das multidões."
    },
    history: {
      en: "Laos has a rich history shaped by ancient kingdoms, Buddhism, regional trade and centuries of cultural exchange. Luang Prabang was the centre of the Lane Xang Kingdom founded by King Fa Ngum in the 14th century and remained an important royal and spiritual centre for centuries. The UNESCO-listed town of Luang Prabang preserves an exceptional combination of traditional Lao architecture and French colonial influences. Its historic temples, former Royal Palace, monasteries and riverside setting reveal the deep connection between religion, royalty and everyday life. Further south, Vat Phou in Champasak represents an important chapter of the region's ancient Khmer heritage, while Vientiane's That Luang remains one of the most important national monuments and symbols of Laos.",
      es: "Laos posee una rica historia marcada por antiguos reinos, el budismo, el comercio regional y siglos de intercambio cultural. Luang Prabang fue el centro del Reino de Lane Xang, fundado por el rey Fa Ngum en el siglo XIV, y permaneció durante siglos como un importante centro real y espiritual. La ciudad de Luang Prabang, declarada Patrimonio Mundial por la UNESCO, conserva una excepcional combinación de arquitectura tradicional laosiana e influencias coloniales francesas. Sus templos históricos, antiguo Palacio Real, monasterios y ubicación junto a los ríos muestran la profunda conexión entre religión, realeza y vida cotidiana. Más al sur, Vat Phou en Champasak representa un importante capítulo del antiguo patrimonio jemer de la región, mientras que That Luang en Vientián continúa siendo uno de los monumentos nacionales y símbolos más importantes de Laos.",
      pt: "O Laos possui uma rica história moldada por antigos reinos, budismo, comércio regional e séculos de intercâmbio cultural. Luang Prabang foi o centro do Reino de Lane Xang, fundado pelo rei Fa Ngum no século XIV, e permaneceu durante séculos como um importante centro real e espiritual. A cidade de Luang Prabang, reconhecida como Patrimônio Mundial pela UNESCO, preserva uma combinação excepcional de arquitetura tradicional laociana e influências coloniais francesas. Seus templos históricos, antigo Palácio Real, mosteiros e localização às margens dos rios revelam a profunda conexão entre religião, realeza e vida cotidiana. Mais ao sul, Vat Phou, em Champasak, representa um importante capítulo do antigo patrimônio Khmer da região, enquanto That Luang, em Vientiane, continua sendo um dos monumentos nacionais e símbolos mais importantes do Laos."
    },
    culture: {
      en: "Lao culture is deeply rooted in Theravada Buddhism, village traditions, craftsmanship and a strong connection with nature. Daily life in many communities follows a slower rhythm, with temples, markets, family traditions and local festivals remaining central to community life. Luang Prabang is particularly renowned for its Buddhist heritage and the traditional morning alms-giving ceremony, when monks walk quietly through the streets to receive offerings. Traditional textiles, bamboo crafts, woodwork, music and dance also reflect the country's rich ethnic diversity. Visitors are encouraged to experience these traditions respectfully, especially when visiting temples or observing religious ceremonies.",
      es: "La cultura de Laos está profundamente arraigada en el budismo Theravada, las tradiciones de las aldeas, la artesanía y una fuerte conexión con la naturaleza. En muchas comunidades, la vida cotidiana mantiene un ritmo pausado, mientras que los templos, mercados, tradiciones familiares y festivales continúan siendo fundamentales. Luang Prabang destaca especialmente por su patrimonio budista y por la tradicional ceremonia matutina de entrega de limosnas, cuando los monjes recorren tranquilamente las calles para recibir ofrendas. Los textiles tradicionales, trabajos de bambú, artesanía en madera, música y danza también reflejan la gran diversidad étnica del país. Se recomienda a los visitantes experimentar estas tradiciones con respeto, especialmente al visitar templos o presenciar ceremonias religiosas.",
      pt: "A cultura do Laos está profundamente enraizada no budismo Theravada, nas tradições das aldeias, no artesanato e em uma forte conexão com a natureza. Em muitas comunidades, o cotidiano mantém um ritmo tranquilo, enquanto templos, mercados, tradições familiares e festivais continuam sendo elementos centrais. Luang Prabang destaca-se especialmente por seu patrimônio budista e pela tradicional cerimônia matinal de oferendas, quando os monges caminhando silenciosamente pelas ruas para receber doações. Têxteis tradicionais, trabalhos em bambu, artesanato em madeira, música e dança também refletem a grande diversidade étnica do país. Os visitantes devem vivenciar essas tradições com respeito, especialmente ao visitar templos ou observar cerimônias religiosas."
    },
    localFood: {
      en: "Lao cuisine is fresh, aromatic and deeply connected to local traditions. Sticky rice, known as khao niew, is the foundation of many meals and is traditionally served alongside grilled meats, herbs, vegetables, spicy dipping sauces and regional specialties. Signature dishes include larb, tam mak hung, jaew, grilled Lao chicken, river fish and fragrant soups. Luang Prabang also has its own distinctive culinary traditions, including local specialities such as or lam and Luang Prabang-style riverweed. For travellers, Laos offers an intimate culinary experience through traditional markets, family-run restaurants, cooking classes and elegant riverside dining.",
      es: "La gastronomía de Laos es fresca, aromática y profundamente conectada con las tradiciones locales. El arroz glutinoso, conocido como khao niew, constituye la base de muchas comidas y se sirve tradicionalmente junto con carnes a la parrilla, hierbas, verduras, salsas picantes y especialidades regionales. Entre sus platos más representativos se encuentran el larb, tam mak hung, jaew, pollo laosiano a la parrilla, pescado de río y sopas aromáticas. Luang Prabang también posee tradiciones culinarias propias, con especialidades como el or lam y las algas de río al estilo local. Para los viajeros, Laos ofrece una experiencia gastronómica íntima a través de mercados tradicionales, restaurantes familiares, clases de cocina y elegantes restaurantes junto al río.",
      pt: "A culinária do Laos é fresca, aromática e profundamente ligada às tradições locais. O arroz glutinoso, conhecido como khao niew, é a base de muitas refeições e tradicionalmente servido com carnes grelhadas, ervas, vegetais, molhos picantes e especialidades regionais. Entre os pratos mais emblemáticos estão larb, tam mak hung, jaew, frango laociano grelhado, peixes de rio e sopas aromáticas. Luang Prabang também possui tradições culinárias próprias, incluindo especialidades como or lam e algas de rio ao estilo local. Para os viajantes, o Laos oferece uma experiência gastronômica intimista através de mercados tradicionais, restaurantes familiares, aulas de culinária e elegantes restaurantes às margens dos rios."
    },
    bestTime: { 
      en: "November to February", 
      es: "De noviembre a febrero", 
      pt: "De novembro a fevereiro" 
    },
    attractions: [
      {
        name: { en: "Luang Prabang Old Town", es: "Ciudad Antigua de Luang Prabang", pt: "Centro Histórico de Luang Prabang" },
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
        desc: { 
          en: "Explore the UNESCO-listed historic town of Luang Prabang, where golden Buddhist temples, traditional wooden houses, French colonial architecture and peaceful riverside streets create one of Southeast Asia's most atmospheric destinations.", 
          es: "Explora la ciudad histórica de Luang Prabang, declarada Patrimonio Mundial por la UNESCO, donde templos budistas dorados, casas tradicionales de madera, arquitectura colonial francesa y tranquilas calles junto al río crean uno de los destinos más especiales del Sudeste Asiático.", 
          pt: "Explore a cidade histórica de Luang Prabang, reconhecida como Patrimônio Mundial pela UNESCO, onde templos budistas dourados, casas tradicionais de madeira, arquitetura colonial francesa e ruas tranquilas às margens dos rios criam um dos destinos mais encantadores do Sudeste Asiático." 
        }
      },
      {
        name: { en: "Kuang Si Waterfalls", es: "Cascadas de Kuang Si", pt: "Cachoeiras de Kuang Si" },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
        desc: { 
          en: "Discover the spectacular turquoise cascades and forest surroundings of Kuang Si, one of the most beautiful natural attractions near Luang Prabang.", 
          es: "Descubre las espectaculares cascadas de aguas turquesas y los bosques de Kuang Si, una de las atracciones naturales más impresionantes cerca de Luang Prabang.", 
          pt: "Descubra as espetaculares cachoeiras de águas azul-turquesa e as florestas de Kuang Si, uma das atrações naturais mais impressionantes próximas a Luang Prabang." 
        }
      },
      {
        name: { en: "Mount Phou Si", es: "Monte Phou Si", pt: "Monte Phou Si" },
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=800",
        desc: { 
          en: "Climb Mount Phou Si in the heart of Luang Prabang for panoramic views across the historic town, Mekong River and surrounding countryside.", 
          es: "Sube al monte Phou Si, en el corazón de Luang Prabang, para disfrutar de vistas panorámicas sobre la ciudad histórica, el río Mekong y el paisaje circundante.", 
          pt: "Suba ao Monte Phou Si, no coração de Luang Prabang, para desfrutar de vistas panorâmicas da cidade histórica, do rio Mekong e da paisagem ao redor." 
        }
      },
      {
        name: { en: "Pak Ou Caves", es: "Cuevas de Pak Ou", pt: "Cavernas de Pak Ou" },
        image: "https://images.unsplash.com/photo-1578564499878-43697194602f?q=80&w=800",
        desc: { 
          en: "Cruise along the Mekong to the Pak Ou Caves, a revered riverside pilgrimage site known for its collection of Buddhist images and dramatic limestone setting.", 
          es: "Navega por el Mekong hasta las cuevas de Pak Ou, un venerado lugar de peregrinación junto al río conocido por sus imágenes budistas y su espectacular entorno de piedra caliza.", 
          pt: "Navegue pelo Mekong até as cavernas de Pak Ou, um venerado local de peregrinação às margens do rio, conhecido por suas imagens budistas e seu impressionante cenário de calcário." 
        }
      },
      {
        name: { en: "Vang Vieng", es: "Vang Vieng", pt: "Vang Vieng" },
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800",
        desc: { 
          en: "Experience Vang Vieng's dramatic limestone mountains, Nam Song River, caves and lush landscapes, with opportunities for kayaking, nature exploration and scenic relaxation.", 
          es: "Descubre las espectaculares montañas de piedra caliza, el río Nam Song, las cuevas y los paisajes verdes de Vang Vieng, con oportunidades para practicar kayak, explorar la naturaleza y relajarte.", 
          pt: "Descubra as impressionantes montanhas de calcário, o rio Nam Song, as cavernas e as paisagens verdes de Vang Vieng, com oportunidades para caiaque, exploração da natureza e relaxamento." 
        }
      },
      {
        name: { en: "That Luang, Vientiane", es: "That Luang, Vientián", pt: "That Luang, Vientiane" },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
        desc: { 
          en: "Visit Pha That Luang, the golden Great Stupa and one of Laos's most important national monuments and symbols.", 
          es: "Visita Pha That Luang, la Gran Estupa dorada y uno de los monumentos nacionales y símbolos más importantes de Laos.", 
          pt: "Visite Pha That Luang, a Grande Estupa dourada e um dos monumentos nacionais e símbolos mais importantes do Laos." 
        }
      }
    ],
    experiences: [
      {
        title: { en: "Mekong Luxury River Cruise", es: "Crucero de Lujo por el Mekong", pt: "Cruzeiro de Luxo pelo Mekong" },
        desc: { en: "Cruise along the Mekong at a relaxed pace, enjoying riverside villages, temples, mountains and golden sunsets.", es: "Navega por el Mekong a un ritmo relajado, contemplando aldeas, templos, montañas y atardeceres dorados.", pt: "Navegue pelo Mekong em ritmo tranquilo, contemplando vilarejos, templos, montanhas e pôres do sol dourados." },
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=800"
      },
      {
        title: { en: "Luang Prabang Temple & Heritage Walk", es: "Ruta Patrimonial por Templos de Luang Prabang", pt: "Caminhada Histórica pelos Templos de Luang Prabang" },
        desc: { en: "Discover Luang Prabang's temples, traditional architecture, former Royal Palace and historic streets with a private cultural guide.", es: "Descubre los templos, arquitectura tradicional, antiguo Palacio Real y calles históricas de Luang Prabang con un guía cultural privado.", pt: "Descubra os templos, a arquitetura tradicional, o antigo Palácio Real e as ruas históricas de Luang Prabang com um guia cultural privativo." },
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
      },
      {
        title: { en: "Kuang Si Waterfall Escape", es: "Escapada a las Cascadas de Kuang Si", pt: "Refúgio nas Cachoeiras de Kuang Si" },
        desc: { en: "Spend a refreshing day exploring the turquoise pools and forest landscapes surrounding Kuang Si Waterfalls.", es: "Disfruta de un día refrescante explorando las piscinas turquesas y los paisajes forestales de las cascadas de Kuang Si.", pt: "Passe um dia revigorante explorando as piscinas azul-turquesa e as paisagens florestais das cachoeiras de Kuang Si." },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
      },
      {
        title: { en: "Authentic Lao Cooking Experience", es: "Clase de Cocina Auténtica Laosiana", pt: "Experiência de Culinária Autêntica Laociana" },
        desc: { en: "Visit a local market and learn how to prepare traditional Lao dishes using fresh herbs, spices and sticky rice.", es: "Visita un mercado local y aprende a preparar platos tradicionales de Laos con hierbas frescas, especias y arroz glutinoso.", pt: "Visite um mercado local e aprenda a preparar pratos tradicionais do Laos usando ervas frescas, especiarias e arroz glutinoso." },
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800"
      },
      {
        title: { en: "Buddhist Morning Experience", es: "Experiencia Budista Matutina", pt: "Experiência Budista Matinal" },
        desc: { en: "Observe the sacred morning alms-giving tradition in Luang Prabang respectfully and quietly.", es: "Observa con respeto y tranquilidad la sagrada ceremonia matutina de entrega de limosnas en Luang Prabang.", pt: "Observe com respeito e tranquilidade a sagrada cerimônia matinal de oferendas em Luang Prabang." },
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=800"
      },
      {
        title: { en: "Vang Vieng Scenic Adventure", es: "Aventura Panorámica en Vang Vieng", pt: "Aventura Panorâmica em Vang Vieng" },
        desc: { en: "Explore limestone landscapes, caves and the Nam Song River through a private combination of kayaking, sightseeing and countryside discovery.", es: "Explora paisajes de piedra caliza, cuevas y el río Nam Song mediante una combinación privada de kayak, visitas panorámicas y descubrimiento rural.", pt: "Explore paisagens de calcário, cavernas e o rio Nam Song através de uma combinação privativa de caiaque, passeios panorâmicos e descoberta do interior." },
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800"
      }
    ],
    hotels: [
      {
        name: "Rosewood Luang Prabang",
        rating: "Luxury 5-Star Resort",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        desc: { en: "An intimate luxury retreat surrounded by lush landscapes, combining refined accommodation, Lao-inspired design, wellness and a deeply immersive Luang Prabang experience.", es: "Un íntimo refugio de lujo rodeado de naturaleza, que combina alojamiento sofisticado, diseño inspirado en Laos, bienestar y una experiencia profundamente inmersiva en Luang Prabang.", pt: "Um íntimo refúgio de luxo cercado por natureza exuberante, combinando acomodações sofisticadas, design inspirado no Laos, bem-estar e uma experiência profundamente imersiva em Luang Prabang." }
      },
      {
        name: "Amantaka",
        rating: "Luxury 5-Star Heritage Retreat",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
        desc: { en: "A refined heritage retreat in Luang Prabang offering serene courtyards, elegant suites, wellness experiences and easy access to the city's cultural landmarks.", es: "Un elegante refugio patrimonial en Luang Prabang con tranquilos patios, suites sofisticadas, experiencias de bienestar y fácil acceso a los principales lugares culturales.", pt: "Um elegante refúgio histórico em Luang Prabang, com pátios tranquilos, suítes sofisticadas, experiências de bem-estar e fácil acesso aos principais pontos culturais." }
      }
    ],
    thingsToDo: [
      { en: "Mekong Luxury River Cruise", es: "Crucero de Lujo por el Mekong", pt: "Cruzeiro de Luxo pelo Mekong" },
      { en: "Luang Prabang Temple & Heritage Walk", es: "Ruta Patrimonial por Templos de Luang Prabang", pt: "Caminhada Histórica pelos Templos de Luang Prabang" },
      { en: "Kuang Si Waterfall Escape", es: "Escapada a las Cascadas de Kuang Si", pt: "Refúgio nas Cachoeiras de Kuang Si" },
      { en: "Authentic Lao Cooking Experience", es: "Clase de Cocina Auténtica Laosiana", pt: "Experiência de Culinária Autêntica Laociana" },
      { en: "Buddhist Morning Experience", es: "Experiencia Budista Matutina", pt: "Experiência Budista Matinal" },
      { en: "Vang Vieng Scenic Adventure", es: "Aventura Panorámica en Vang Vieng", pt: "Aventura Panorâmica em Vang Vieng" }
    ],
    suggestedItinerary: { 
      en: "Day 1 — Arrival in Luang Prabang: Private arrival transfer, luxury hotel check-in and a relaxed evening exploring the riverside atmosphere. Day 2 — Luang Prabang Heritage: Explore Wat Xieng Thong, the former Royal Palace, traditional streets and Mount Phou Si. Day 3 — Mekong & Pak Ou: Enjoy a private Mekong cruise to Pak Ou Caves with riverside villages and a sunset return to Luang Prabang. Day 4 — Kuang Si & Local Culture: Visit Kuang Si Waterfalls followed by a local culinary or artisan experience. Day 5 — Vang Vieng: Travel to Vang Vieng and discover its dramatic karst mountains, caves and Nam Song River landscapes. Day 6 — Vientiane: Continue to Vientiane and explore That Luang, Wat Sisaket and the city's French-influenced heritage. Day 7 — Departure: Leisure breakfast followed by a private airport transfer for departure.", 
      es: "Día 1 — Llegada a Luang Prabang: Traslado privado de llegada, check-in en el hotel de lujo y tarde relajada explorando el ambiente junto al río. Día 2 — Patrimonio de Luang Prabang: Explora Wat Xieng Thong, el antiguo Palacio Real, las calles tradicionales y el monte Phou Si. Día 3 — Mekong y Pak Ou: Disfruta de un crucero privado por el Mekong hasta las cuevas de Pak Ou, con aldeas ribereñas y regreso al atardecer. Día 4 — Kuang Si y Cultura Local: Visita las cascadas de Kuang Si seguida de una experiencia gastronómica o artesanal local. Día 5 — Vang Vieng: Viaja a Vang Vieng y descubre sus espectaculares montañas kársticas, cuevas y paisajes del río Nam Song. Día 6 — Vientián: Continúa hacia Vientián y explora That Luang, Wat Sisaket y el patrimonio de influencia francesa de la ciudad. Día 7 — Salida: Desayuno tranquilo seguido de un traslado privado al aeropuerto para la salida.", 
      pt: "Dia 1 — Chegada a Luang Prabang: Traslado privativo de chegada, check-in no hotel de luxo e uma tarde tranquila explorando a atmosfera às margens do rio. Dia 2 — Patrimônio de Luang Prabang: Explore Wat Xieng Thong, o antigo Palácio Real, as ruas tradicionais e o Monte Phou Si. Dia 3 — Mekong e Pak Ou: Desfrute de um cruzeiro privativo pelo Mekong até as cavernas de Pak Ou, passando por vilarejos ribeirinhos e retornando ao pôr do sol. Dia 4 — Kuang Si e Cultura Local: Visite as cachoeiras de Kuang Si seguida de uma experiência gastronômica ou artesanal local. Dia 5 — Vang Vieng: Viaje até Vang Vieng e descubra suas impressionantes montanhas cársticas, cavernas e paisagens do rio Nam Song. Dia 6 — Vientiane: Continue até Vientiane e explore That Luang, Wat Sisaket e o patrimônio de influência francesa da cidade. Dia 7 — Partida: Café da manhã tranquilo seguido de traslado privativo ao aeroporto para a partida." 
    },
    travelTips: [
      { en: "Dress modestly when visiting temples and religious sites, and remove shoes where required.", es: "Viste modestamente al visitar templos y lugares religiosos y quítate los zapatos cuando sea necesario.", pt: "Vista-se de forma modesta ao visitar templos e locais religiosos e retire os sapatos quando necessário." },
      { en: "Observe Luang Prabang's morning alms-giving ceremony quietly and respectfully without disturbing monks or worshippers.", es: "Observa la ceremonia matutina de entrega de limosnas en Luang Prabang con tranquilidad y respeto, sin molestar a los monjes o fieles.", pt: "Observe a cerimônia matinal de oferendas em Luang Prabang de forma tranquila e respeitosa, sem perturbar monges ou fiéis." },
      { en: "Pack lightweight clothing for the daytime and a light jacket for cooler mornings and evenings, especially in northern Laos.", es: "Lleva ropa ligera para el día y una chaqueta fina para las mañanas y noches más frescas, especialmente en el norte de Laos.", pt: "Leve roupas leves para o dia e uma jaqueta fina para manhãs e noites mais frescas, especialmente no norte do Laos." },
      { en: "Allow generous travel time between destinations and embrace Laos's slower pace rather than trying to fit too many activities into one day.", es: "Reserva suficiente tiempo para los desplazamientos y disfruta del ritmo pausado de Laos en lugar de concentrar demasiadas actividades en un solo día.", pt: "Reserve bastante tempo para os deslocamentos e aproveite o ritmo tranquilo do Laos em vez de concentrar muitas atividades em um único dia." },
      { en: "Support local artisans and community-based experiences when possible, particularly in villages and traditional craft communities.", es: "Apoya a los artesanos locales y las experiencias comunitarias siempre que sea posible, especialmente en aldeas y comunidades de artesanía tradicional.", pt: "Apoie artesãos locais e experiências comunitárias sempre que possível, especialmente em vilarejos e comunidades de artesanato tradicional." }
    ],
    faqs: [
      {
        q: { en: "What is the best time to visit Laos?", es: "¿Cuál es la mejor época para visitar Laos?", pt: "Qual é a melhor época para visitar o Laos?" },
        a: { en: "November to February is generally an excellent period for exploring Laos, with comfortable conditions for cultural sightseeing, river journeys and outdoor experiences.", es: "De noviembre a febrero suele ser un excelente período para explorar Laos, con condiciones agradables para visitas culturales, viajes fluviales y actividades al aire libre.", pt: "De novembro a fevereiro é geralmente um excelente período para explorar o Laos, com condições agradáveis para passeios culturais, viagens fluviais e atividades ao ar livre." }
      },
      {
        q: { en: "How many days are ideal for Laos?", es: "¿Cuántos días son ideales para Laos?", pt: "Quantos dias são ideais para o Laos?" },
        a: { en: "Seven to ten days are ideal for combining Luang Prabang, the Mekong, Vang Vieng and Vientiane without rushing.", es: "De siete a diez días son ideales para combinar Luang Prabang, el Mekong, Vang Vieng y Vientián sin prisas.", pt: "Sete a dez dias são ideais para combinar Luang Prabang, o Mekong, Vang Vieng e Vientiane sem pressa." }
      },
      {
        q: { en: "Is Laos suitable for a luxury holiday?", es: "¿Es Laos adecuado para unas vacaciones de lujo?", pt: "O Laos é adequado para férias de luxo?" },
        a: { en: "Yes. Laos offers intimate luxury resorts, boutique heritage hotels, private guides, Mekong cruises, wellness experiences and personalised cultural journeys.", es: "Sí. Laos ofrece resorts íntimos de lujo, hoteles boutique patrimoniales, guías privados, cruceros por el Mekong, experiencias de bienestar y viajes culturales personalizados.", pt: "Sim. O Laos oferece resorts de luxo intimistas, hotéis boutique históricos, guias privativos, cruzeiros pelo Mekong, experiências de bem-estar e viagens culturais personalizadas." }
      },
      {
        q: { en: "What is Laos famous for?", es: "¿Por qué es famoso Laos?", pt: "Pelo que o Laos é famoso?" },
        a: { en: "Laos is particularly known for Luang Prabang, Buddhist temples, the Mekong River, traditional culture, dramatic limestone landscapes, waterfalls and authentic Lao cuisine.", es: "Laos es especialmente conocido por Luang Prabang, sus templos budistas, el río Mekong, su cultura tradicional, paisajes de piedra caliza, cascadas y auténtica gastronomía laosiana.", pt: "O Laos é especialmente conhecido por Luang Prabang, seus templos budistas, o rio Mekong, a cultura tradicional, paisagens de calcário, cachoeiras e a autêntica culinária laociana." }
      },
      {
        q: { en: "Can Laos be combined with Thailand or Vietnam?", es: "¿Se puede combinar Laos con Tailandia o Vietnam?", pt: "É possível combinar o Laos com a Tailândia ou o Vietnã?" },
        a: { en: "Yes. Laos combines naturally with Thailand and Vietnam, making it an excellent addition to a wider Southeast Asia itinerary.", es: "Sí. Laos se combina fácilmente con Tailandia y Vietnam, por lo que es una excelente incorporación a un itinerario más amplio por el Sudeste Asiático.", pt: "Sim. O Laos combina naturalmente com a Tailândia e o Vietnã, sendo uma excelente extensão para um roteiro mais amplo pelo Sudeste Asiático." }
      }
    ],
    seo: {
      en: {
        title: "Laos Luxury Travel | Luang Prabang, Mekong & Timeless Culture",
        description: "Discover Laos through luxury journeys across UNESCO-listed Luang Prabang, the Mekong River, Kuang Si Waterfalls, Vang Vieng and authentic Lao culture.",
        keywords: "Laos luxury travel, Laos luxury tour, Luang Prabang, Mekong River Laos, Kuang Si Waterfalls, Vang Vieng, Vientiane, Laos honeymoon, Laos cultural tour"
      },
      es: {
        title: "Viajes de Lujo a Laos | Luang Prabang, Mekong y Cultura Atemporal",
        description: "Descubre Laos a través de viajes de lujo por Luang Prabang, declarado Patrimonio Mundial, el río Mekong, las cascadas de Kuang Si, Vang Vieng y la auténtica cultura laosiana.",
        keywords: "viajes de lujo a Laos, tour de lujo Laos, Luang Prabang, río Mekong Laos, cascadas Kuang Si, Vang Vieng, Vientián, luna de miel Laos, tour cultural Laos"
      },
      pt: {
        title: "Viagens de Luxo para o Laos | Luang Prabang, Mekong e Cultura Atemporal",
        description: "Descubra o Laos em viagens de luxo por Luang Prabang, Patrimônio Mundial, o rio Mekong, as cachoeiras de Kuang Si, Vang Vieng e a autêntica cultura laociana.",
        keywords: "viagens de luxo para Laos, tour de luxo Laos, Luang Prabang, rio Mekong Laos, cachoeiras Kuang Si, Vang Vieng, Vientiane, lua de mel Laos, tour cultural Laos"
      }
    }
  }
];

