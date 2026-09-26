import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const cityPlacesData = {
  "nashik": [
    {
      name: {
        en: "Panchavati",
        es: "Panchavati",
        pt: "Panchavati"
      },
      description: {
        en: "Panchavati is one of Nashik's most important spiritual and cultural areas, located along the Godavari River. The area is associated with the Ramayana and is surrounded by ancient temples, ghats and sacred sites.",
        es: "Panchavati es una de las zonas espirituales y culturales más importantes de Nashik, situada junto al río Godavari. El lugar está relacionado con el Ramayana y cuenta con antiguos templos, ghats y lugares sagrados.",
        pt: "Panchavati é uma das áreas espirituais e culturais mais importantes de Nashik, localizada às margens do rio Godavari. A região está associada ao Ramayana e possui antigos templos, ghats e locais sagrados."
      },
      tags: {
        en: ["Panchavati", "Nashik", "Godavari River", "Spirituality"],
        es: ["Panchavati", "Nashik", "Río Godavari", "Espiritualidad"],
        pt: ["Panchavati", "Nashik", "Rio Godavari", "Espiritualidade"]
      }
    },
    {
      name: {
        en: "Trimbakeshwar Temple",
        es: "Templo Trimbakeshwar",
        pt: "Templo Trimbakeshwar"
      },
      description: {
        en: "Trimbakeshwar Temple is one of the twelve Jyotirlingas of India and an important pilgrimage destination near Nashik. The historic temple is known for its traditional architecture and spiritual significance.",
        es: "El Templo Trimbakeshwar es uno de los doce Jyotirlingas de la India y un importante destino de peregrinación cerca de Nashik. El templo destaca por su arquitectura tradicional y su importancia espiritual.",
        pt: "O Templo Trimbakeshwar é um dos doze Jyotirlingas da Índia e um importante destino de peregrinação perto de Nashik. O templo é conhecido por sua arquitetura tradicional e importância espiritual."
      },
      tags: {
        en: ["Trimbakeshwar Temple", "Jyotirlinga", "Shiva Temple", "Nashik"],
        es: ["Templo Trimbakeshwar", "Jyotirlinga", "Templo de Shiva", "Nashik"],
        pt: ["Templo Trimbakeshwar", "Jyotirlinga", "Templo de Shiva", "Nashik"]
      }
    },
    {
      name: {
        en: "Ramkund",
        es: "Ramkund",
        pt: "Ramkund"
      },
      address: "Shop No 10, Panchavati Karanja Rd, near पांडे मिठाई, Ramkund, Panchavati, Nashik, Maharashtra 422003, India",
      description: {
        en: "Ramkund is a sacred bathing ghat on the Godavari River and one of the most visited spiritual sites in Nashik. Its riverside setting and religious traditions make it an important part of the city's heritage.",
        es: "Ramkund es un ghat sagrado situado a orillas del río Godavari y uno de los lugares espirituales más visitados de Nashik. Su entorno junto al río y sus tradiciones religiosas forman parte importante del patrimonio de la ciudad.",
        pt: "Ramkund é um ghat sagrado às margens do rio Godavari e um dos locais espirituais mais visitados de Nashik. Sua localização junto ao rio e suas tradições religiosas fazem parte importante do patrimônio da cidade."
      },
      tags: {
        en: ["Ramkund", "Godavari", "Nashik", "Ghat"],
        es: ["Ramkund", "Godavari", "Nashik", "Ghat"],
        pt: ["Ramkund", "Godavari", "Nashik", "Ghat"]
      }
    },
    {
      name: {
        en: "Pandavleni Caves",
        es: "Cuevas de Pandavleni",
        pt: "Cavernas de Pandavleni"
      },
      address: "WPRX+FCM, Pandav Lene Rd, Buddha Vihar, Pathardi Phata, Nashik, Maharashtra 422010, India",
      description: {
        en: "Pandavleni Caves are ancient rock-cut Buddhist caves located on a hill near Nashik. The caves contain historic carvings and inscriptions and provide beautiful views of the surrounding landscape.",
        es: "Las Cuevas de Pandavleni son antiguas cuevas budistas excavadas en la roca, situadas en una colina cerca de Nashik. Conservan esculturas e inscripciones históricas y ofrecen hermosas vistas.",
        pt: "As Cavernas de Pandavleni são antigas cavernas budistas escavadas na rocha, localizadas em uma colina perto de Nashik. Possuem esculturas e inscrições históricas e belas vistas da região."
      },
      tags: {
        en: ["Pandavleni Caves", "Buddhist Caves", "Nashik", "Heritage"],
        es: ["Cuevas de Pandavleni", "Cuevas Budistas", "Nashik", "Patrimonio"],
        pt: ["Cavernas de Pandavleni", "Cavernas Budistas", "Nashik", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Muktidham Temple",
        es: "Templo Muktidham",
        pt: "Templo Muktidham"
      },
      address: "Mahatma Gandhi Rd, Gayakhe Colony, Nashik Road, Nashik, Maharashtra 422101, India",
      phone: "+919850844448",
      description: {
        en: "Muktidham Temple is a distinctive marble temple complex in Nashik known for its religious importance and detailed architecture. It is an important spiritual attraction for visitors exploring the city.",
        es: "El Templo Muktidham es un singular complejo de templos de mármol en Nashik, conocido por su importancia religiosa y arquitectura detallada.",
        pt: "O Templo Muktidham é um complexo de templos de mármore em Nashik, conhecido por sua importância religiosa e arquitetura detalhada."
      },
      tags: {
        en: ["Muktidham Temple", "Nashik", "Marble Temple", "Spirituality"],
        es: ["Templo Muktidham", "Nashik", "Templo de Mármol", "Espiritualidad"],
        pt: ["Templo Muktidham", "Nashik", "Templo de Mármore", "Espiritualidade"]
      }
    }
  ],
  "amravati": [
    {
      name: {
        en: "Chikhaldara",
        es: "Chikhaldara",
        pt: "Chikhaldara"
      },
      description: {
        en: "Chikhaldara is a beautiful hill station in the Amravati region known for forested hills, valleys, viewpoints and lakes. Its pleasant landscapes make it a popular nature destination in Vidarbha.",
        es: "Chikhaldara es una hermosa estación de montaña conocida por sus colinas boscosas, valles, miradores y lagos. Sus paisajes la convierten en un popular destino natural de Vidarbha.",
        pt: "Chikhaldara é uma bela estação de montanha conhecida por suas colinas, vales, mirantes e lagos. Suas paisagens fazem dela um destino natural popular da região de Vidarbha."
      },
      tags: {
        en: ["Chikhaldara", "Amravati", "Hill Station", "Nature"],
        es: ["Chikhaldara", "Amravati", "Estación de Montaña", "Naturaleza"],
        pt: ["Chikhaldara", "Amravati", "Estação de Montanha", "Natureza"]
      }
    },
    {
      name: {
        en: "Melghat Tiger Reserve",
        es: "Reserva de Tigres de Melghat",
        pt: "Reserva de Tigres de Melghat"
      },
      description: {
        en: "Melghat Tiger Reserve is a major wildlife destination surrounded by the Satpura landscape. The reserve is known for its forests, wildlife, biodiversity and opportunities for nature exploration.",
        es: "La Reserva de Tigres de Melghat es un importante destino de vida silvestre rodeado por el paisaje de Satpura. Es conocida por sus bosques, biodiversidad y fauna.",
        pt: "A Reserva de Tigres de Melghat é um importante destino de vida selvagem cercado pela paisagem de Satpura. A região é conhecida por suas florestas, biodiversidade e fauna."
      },
      tags: {
        en: ["Melghat Tiger Reserve", "Wildlife", "Tiger Reserve", "Amravati"],
        es: ["Reserva de Tigres de Melghat", "Vida Silvestre", "Reserva de Tigres", "Amravati"],
        pt: ["Reserva de Tigres de Melghat", "Vida Selvagem", "Reserva de Tigres", "Amravati"]
      }
    },
    {
      name: {
        en: "Shri Ambadevi Temple",
        es: "Templo Shri Ambadevi",
        pt: "Templo Shri Ambadevi"
      },
      address: "WPGX+VGQ, Akshay Rajgure Rd, Amravati, Maharashtra 444605, India",
      description: {
        en: "Shri Ambadevi Temple is one of Amravati's most important religious landmarks. Dedicated to Goddess Ambadevi, the historic temple attracts devotees and visitors throughout the year.",
        es: "El Templo Shri Ambadevi es uno de los lugares religiosos más importantes de Amravati. Dedicado a la diosa Ambadevi, atrae a peregrinos y visitantes durante todo el año.",
        pt: "O Templo Shri Ambadevi é um dos principais locais religiosos de Amravati. Dedicado à deusa Ambadevi, recebe peregrinos e visitantes durante todo o ano."
      },
      tags: {
        en: ["Ambadevi Temple", "Amravati", "Temple", "Spirituality"],
        es: ["Templo Ambadevi", "Amravati", "Templo", "Espiritualidad"],
        pt: ["Templo Ambadevi", "Amravati", "Templo", "Espiritualidade"]
      }
    },
    {
      name: {
        en: "Wadali Talav",
        es: "Wadali Talav",
        pt: "Wadali Talav"
      },
      description: {
        en: "Wadali Talav is a peaceful reservoir surrounded by greenery and is a popular recreational destination near Amravati. It is suitable for relaxing, sightseeing and enjoying the natural surroundings.",
        es: "Wadali Talav es un tranquilo embalse rodeado de vegetación y un popular lugar de recreación cerca de Amravati.",
        pt: "Wadali Talav é um tranquilo reservatório cercado por vegetação e um popular local de lazer perto de Amravati."
      },
      tags: {
        en: ["Wadali Talav", "Amravati", "Lake", "Nature"],
        es: ["Wadali Talav", "Amravati", "Lago", "Naturaleza"],
        pt: ["Wadali Talav", "Amravati", "Lago", "Natureza"]
      }
    },
    {
      name: {
        en: "Chikhaldara Wildlife Sanctuary",
        es: "Santuario de Vida Silvestre de Chikhaldara",
        pt: "Santuário de Vida Selvagem de Chikhaldara"
      },
      description: {
        en: "The forests around Chikhaldara provide opportunities to experience the rich biodiversity of the Satpura region. The area is known for scenic landscapes, wildlife and birdlife.",
        es: "Los bosques de Chikhaldara permiten conocer la rica biodiversidad de la región de Satpura. La zona destaca por sus paisajes, fauna y aves.",
        pt: "As florestas de Chikhaldara permitem conhecer a rica biodiversidade da região de Satpura. A área é conhecida por suas paisagens, vida selvagem e aves."
      },
      tags: {
        en: ["Chikhaldara", "Wildlife", "Forest", "Amravati"],
        es: ["Chikhaldara", "Vida Silvestre", "Bosque", "Amravati"],
        pt: ["Chikhaldara", "Vida Selvagem", "Floresta", "Amravati"]
      }
    }
  ],
  "solapur": [
    {
      name: {
        en: "Siddheshwar Temple",
        es: "Templo Siddheshwar",
        pt: "Templo Siddheshwar"
      },
      description: {
        en: "Siddheshwar Temple is the spiritual heart of Solapur and stands surrounded by Siddheshwar Lake. The historic temple is known for its traditional architecture and religious importance.",
        es: "El Templo Siddheshwar es el centro espiritual de Solapur y está rodeado por el lago Siddheshwar. El templo destaca por su arquitectura tradicional e importancia religiosa.",
        pt: "O Templo Siddheshwar é o coração espiritual de Solapur e está cercado pelo Lago Siddheshwar. O templo é conhecido por sua arquitetura tradicional e importância religiosa."
      },
      tags: {
        en: ["Siddheshwar Temple", "Solapur", "Shiva Temple", "Heritage"],
        es: ["Templo Siddheshwar", "Solapur", "Templo de Shiva", "Patrimonio"],
        pt: ["Templo Siddheshwar", "Solapur", "Templo de Shiva", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Bhuikot Fort",
        es: "Fuerte Bhuikot",
        pt: "Forte Bhuikot"
      },
      description: {
        en: "Bhuikot Fort is a historic fort associated with the medieval history of Solapur. Its surviving structures provide visitors with an insight into the city's architectural and political past.",
        es: "El Fuerte Bhuikot es una fortaleza histórica relacionada con la historia medieval de Solapur. Sus estructuras conservadas permiten conocer el pasado arquitectónico de la ciudad.",
        pt: "O Forte Bhuikot é uma fortaleza histórica ligada à história medieval de Solapur. Suas estruturas preservadas ajudam a conhecer o passado arquitetônico da cidade."
      },
      tags: {
        en: ["Bhuikot Fort", "Solapur", "Fort", "History"],
        es: ["Fuerte Bhuikot", "Solapur", "Fortaleza", "Historia"],
        pt: ["Forte Bhuikot", "Solapur", "Fortaleza", "História"]
      }
    },
    {
      name: {
        en: "Akkalkot",
        es: "Akkalkot",
        pt: "Akkalkot"
      },
      description: {
        en: "Akkalkot is an important pilgrimage destination associated with Shri Swami Samarth Maharaj. The peaceful spiritual town attracts devotees and visitors interested in its religious traditions.",
        es: "Akkalkot es un importante destino de peregrinación asociado con Shri Swami Samarth Maharaj. La ciudad atrae a peregrinos interesados en sus tradiciones espirituales.",
        pt: "Akkalkot é um importante destino de peregrinação associado a Shri Swami Samarth Maharaj. A cidade atrai peregrinos interessados em suas tradições espirituais."
      },
      tags: {
        en: ["Akkalkot", "Swami Samarth", "Solapur", "Pilgrimage"],
        es: ["Akkalkot", "Swami Samarth", "Solapur", "Peregrinación"],
        pt: ["Akkalkot", "Swami Samarth", "Solapur", "Peregrinação"]
      }
    },
    {
      name: {
        en: "Great Indian Bustard Sanctuary",
        es: "Santuario de la Gran Avutarda India",
        pt: "Santuário da Abetarda Indiana"
      },
      description: {
        en: "The Great Indian Bustard Sanctuary near Solapur is an important wildlife and birdwatching destination. It protects grassland habitats associated with the endangered Great Indian Bustard.",
        es: "El Santuario de la Gran Avutarda India cerca de Solapur es un importante destino para la observación de aves y vida silvestre. Protege hábitats de pastizales asociados con esta especie amenazada.",
        pt: "O Santuário da Abetarda Indiana perto de Solapur é um importante destino de observação de aves e vida selvagem. Protege habitats de pastagens associados a essa espécie ameaçada."
      },
      tags: {
        en: ["Great Indian Bustard", "Sanctuary", "Wildlife", "Solapur"],
        es: ["Gran Avutarda India", "Santuario", "Vida Silvestre", "Solapur"],
        pt: ["Abetarda Indiana", "Santuário", "Vida Selvagem", "Solapur"]
      }
    },
    {
      name: {
        en: "Pandharpur",
        es: "Pandharpur",
        pt: "Pandharpur"
      },
      description: {
        en: "Pandharpur is a major pilgrimage destination associated with Lord Vitthal and Goddess Rukmini. The town is located on the banks of the Bhima River and is famous for its religious traditions and festivals.",
        es: "Pandharpur es un importante destino de peregrinación asociado con Lord Vitthal y la diosa Rukmini. La ciudad se encuentra junto al río Bhima y es famosa por sus tradiciones religiosas.",
        pt: "Pandharpur é um importante destino de peregrinação associado a Lord Vitthal e à deusa Rukmini. A cidade está localizada às margens do rio Bhima e é famosa por suas tradições religiosas."
      },
      tags: {
        en: ["Pandharpur", "Vitthal Temple", "Pilgrimage", "Solapur"],
        es: ["Pandharpur", "Templo Vitthal", "Peregrinación", "Solapur"],
        pt: ["Pandharpur", "Templo Vitthal", "Peregrinação", "Solapur"]
      }
    }
  ],
  "jamnagar": [
    {
      name: {
        en: "Lakhota Lake",
        es: "Lago Lakhota",
        pt: "Lago Lakhota"
      },
      description: {
        en: "Lakhota Lake is the iconic waterbody at the heart of Jamnagar. The lake is surrounded by gardens and historic structures, with Lakhota Fort standing on an island in the middle.",
        es: "El lago Lakhota es el famoso cuerpo de agua situado en el corazón de Jamnagar. Está rodeado de jardines y edificios históricos, con el Fuerte Lakhota ubicado en una isla central.",
        pt: "O Lago Lakhota é o famoso corpo d'água localizado no coração de Jamnagar. É cercado por jardins e estruturas históricas, com o Forte Lakhota situado em uma ilha no centro."
      },
      tags: {
        en: ["Lakhota Lake", "Jamnagar", "Lake", "Heritage"],
        es: ["Lago Lakhota", "Jamnagar", "Lago", "Patrimonio"],
        pt: ["Lago Lakhota", "Jamnagar", "Lago", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Marine National Park",
        es: "Parque Nacional Marino",
        pt: "Parque Nacional Marinho"
      },
      description: {
        en: "Marine National Park is a unique coastal ecosystem in the Gulf of Kutch known for its marine biodiversity, coral reefs, mangroves and tidal habitats.",
        es: "El Parque Nacional Marino es un ecosistema costero único en el Golfo de Kutch, conocido por su biodiversidad marina, arrecifes de coral, manglares y zonas intermareales.",
        pt: "O Parque Nacional Marinho é um ecossistema costeiro único no Golfo de Kutch, conhecido por sua biodiversidade marinha, recifes de coral, manguezais e áreas de maré."
      },
      tags: {
        en: ["Marine National Park", "Jamnagar", "Marine Life", "Gujarat"],
        es: ["Parque Nacional Marino", "Jamnagar", "Vida Marina", "Gujarat"],
        pt: ["Parque Nacional Marinho", "Jamnagar", "Vida Marinha", "Gujarat"]
      }
    },
    {
      name: {
        en: "Khijadia Bird Sanctuary",
        es: "Santuario de Aves de Khijadia",
        pt: "Santuário de Aves de Khijadia"
      },
      description: {
        en: "Khijadia Bird Sanctuary is a beautiful coastal wetland near Jamnagar and an important destination for birdwatchers. The sanctuary supports diverse resident and migratory bird species.",
        es: "El Santuario de Aves de Khijadia es un hermoso humedal costero cerca de Jamnagar y un importante destino para observar aves residentes y migratorias.",
        pt: "O Santuário de Aves de Khijadia é uma bela área úmida costeira perto de Jamnagar e um importante destino para observação de aves residentes e migratórias."
      },
      tags: {
        en: ["Khijadia Bird Sanctuary", "Birds", "Wildlife", "Jamnagar"],
        es: ["Santuario de Aves Khijadia", "Aves", "Vida Silvestre", "Jamnagar"],
        pt: ["Santuário de Aves Khijadia", "Aves", "Vida Selvagem", "Jamnagar"]
      }
    },
    {
      name: {
        en: "Lakhota Fort",
        es: "Fuerte Lakhota",
        pt: "Forte Lakhota"
      },
      description: {
        en: "Lakhota Fort is a historic fort located on an island in Lakhota Lake. Its architecture and museum collections provide an insight into Jamnagar's royal history.",
        es: "El Fuerte Lakhota es una fortaleza histórica situada en una isla del lago Lakhota. Su arquitectura y museo muestran parte de la historia real de Jamnagar.",
        pt: "O Forte Lakhota é uma fortaleza histórica localizada em uma ilha no Lago Lakhota. Sua arquitetura e museu revelam parte da história real de Jamnagar."
      },
      tags: {
        en: ["Lakhota Fort", "Jamnagar", "Fort", "Heritage"],
        es: ["Fuerte Lakhota", "Jamnagar", "Fortaleza", "Patrimonio"],
        pt: ["Forte Lakhota", "Jamnagar", "Fortaleza", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Bala Hanuman Temple",
        es: "Templo Bala Hanuman",
        pt: "Templo Bala Hanuman"
      },
      description: {
        en: "Bala Hanuman Temple is a well-known religious landmark in Jamnagar situated near Lakhota Lake. The temple is an important spiritual destination and forms part of the city's cultural identity.",
        es: "El Templo Bala Hanuman es un conocido monumento religioso de Jamnagar situado cerca del lago Lakhota. Es un importante destino espiritual de la ciudad.",
        pt: "O Templo Bala Hanuman é um conhecido marco religioso de Jamnagar, localizado perto do Lago Lakhota. É um importante destino espiritual da cidade."
      },
      tags: {
        en: ["Bala Hanuman Temple", "Jamnagar", "Temple", "Gujarat"],
        es: ["Templo Bala Hanuman", "Jamnagar", "Templo", "Gujarat"],
        pt: ["Templo Bala Hanuman", "Jamnagar", "Templo", "Gujarat"]
      }
    }
  ],
  "thane": [
    {
      name: {
        en: "Upvan Lake",
        es: "Lago Upvan",
        pt: "Lago Upvan"
      },
      description: {
        en: "Upvan Lake is a scenic lake surrounded by greenery and hills. It is a popular recreational destination for peaceful walks, boating and enjoying the natural surroundings.",
        es: "El lago Upvan es un hermoso lago rodeado de vegetación y colinas. Es popular para paseos, actividades recreativas y disfrutar de la naturaleza.",
        pt: "O Lago Upvan é um lago pitoresco cercado por vegetação e colinas. É popular para caminhadas, lazer e contato com a natureza."
      },
      tags: {
        en: ["Upvan Lake", "Thane", "Lake", "Nature"],
        es: ["Lago Upvan", "Thane", "Lago", "Naturaleza"],
        pt: ["Lago Upvan", "Thane", "Lago", "Natureza"]
      }
    },
    {
      name: {
        en: "Yeoor Hills",
        es: "Yeoor Hills",
        pt: "Yeoor Hills"
      },
      description: {
        en: "Yeoor Hills is a green hill region offering nature trails, scenic views and opportunities for hiking. It is a peaceful escape from the urban environment of Thane.",
        es: "Yeoor Hills es una zona montañosa y verde que ofrece senderos naturales, vistas panorámicas y oportunidades para practicar senderismo.",
        pt: "Yeoor Hills é uma região montanhosa e verde que oferece trilhas, belas paisagens e oportunidades para caminhadas."
      },
      tags: {
        en: ["Yeoor Hills", "Thane", "Hills", "Trekking"],
        es: ["Yeoor Hills", "Thane", "Montañas", "Senderismo"],
        pt: ["Yeoor Hills", "Thane", "Montanhas", "Trilhas"]
      }
    },
    {
      name: {
        en: "Tikuji-ni-Wadi",
        es: "Tikuji-ni-Wadi",
        pt: "Tikuji-ni-Wadi"
      },
      description: {
        en: "Tikuji-ni-Wadi is a popular recreational destination featuring amusement rides, water attractions and family activities. It is a well-known leisure spot around Thane.",
        es: "Tikuji-ni-Wadi es un popular destino recreativo con atracciones, actividades acuáticas y entretenimiento familiar.",
        pt: "Tikuji-ni-Wadi é um popular destino de lazer com brinquedos, atrações aquáticas e atividades para toda a família."
      },
      tags: {
        en: ["Tikuji-ni-Wadi", "Thane", "Amusement Park", "Family"],
        es: ["Tikuji-ni-Wadi", "Thane", "Parque de Diversiones", "Familia"],
        pt: ["Tikuji-ni-Wadi", "Thane", "Parque de Diversões", "Família"]
      }
    },
    {
      name: {
        en: "Kopineshwar Temple",
        es: "Templo Kopineshwar",
        pt: "Templo Kopineshwar"
      },
      description: {
        en: "Kopineshwar Temple is one of the historic temples of Thane and an important spiritual landmark in the city. Its traditional architecture and religious heritage attract visitors.",
        es: "El Templo Kopineshwar es uno de los templos históricos de Thane y un importante lugar espiritual de la ciudad.",
        pt: "O Templo Kopineshwar é um dos templos históricos de Thane e um importante marco espiritual da cidade."
      },
      tags: {
        en: ["Kopineshwar Temple", "Thane", "Temple", "Heritage"],
        es: ["Templo Kopineshwar", "Thane", "Templo", "Patrimonio"],
        pt: ["Templo Kopineshwar", "Thane", "Templo", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Sanjay Gandhi National Park",
        es: "Parque Nacional Sanjay Gandhi",
        pt: "Parque Nacional Sanjay Gandhi"
      },
      description: {
        en: "Sanjay Gandhi National Park is a major green space on the Mumbai-Thane side and is known for forests, wildlife and natural landscapes. It offers visitors a break from the surrounding urban environment.",
        es: "El Parque Nacional Sanjay Gandhi es una importante zona verde conocida por sus bosques, vida silvestre y paisajes naturales.",
        pt: "O Parque Nacional Sanjay Gandhi é uma importante área verde conhecida por suas florestas, vida selvagem e paisagens naturais."
      },
      tags: {
        en: ["Sanjay Gandhi National Park", "Wildlife", "Nature", "Thane"],
        es: ["Parque Nacional Sanjay Gandhi", "Vida Silvestre", "Naturaleza", "Thane"],
        pt: ["Parque Nacional Sanjay Gandhi", "Vida Selvagem", "Natureza", "Thane"]
      }
    }
  ],
  "pune": [
    {
      name: {
        en: "Shaniwar Wada",
        es: "Shaniwar Wada",
        pt: "Shaniwar Wada"
      },
      description: {
        en: "Shaniwar Wada is a historic palace fortress and one of Pune's most famous landmarks. Built during the Peshwa period, it represents the city's important Maratha-era heritage.",
        es: "Shaniwar Wada es una histórica fortaleza-palacio y uno de los monumentos más famosos de Pune. Construida durante la época de los Peshwa, representa el patrimonio maratha de la ciudad.",
        pt: "Shaniwar Wada é uma histórica fortaleza-palácio e um dos monumentos mais famosos de Pune. Construída durante o período Peshwa, representa o patrimônio Maratha da cidade."
      },
      tags: {
        en: ["Shaniwar Wada", "Pune", "Peshwa Heritage", "Fort"],
        es: ["Shaniwar Wada", "Pune", "Patrimonio Peshwa", "Fortaleza"],
        pt: ["Shaniwar Wada", "Pune", "Patrimônio Peshwa", "Fortaleza"]
      }
    },
    {
      name: {
        en: "Aga Khan Palace",
        es: "Palacio Aga Khan",
        pt: "Palácio Aga Khan"
      },
      description: {
        en: "Aga Khan Palace is an important historical monument associated with India's freedom movement. Its elegant architecture, gardens and museum make it a significant heritage attraction in Pune.",
        es: "El Palacio Aga Khan es un importante monumento histórico relacionado con el movimiento de independencia de la India. Su arquitectura, jardines y museo lo convierten en una importante atracción patrimonial.",
        pt: "O Palácio Aga Khan é um importante monumento histórico associado ao movimento de independência da Índia. Sua arquitetura, jardins e museu fazem dele uma importante atração histórica."
      },
      tags: {
        en: ["Aga Khan Palace", "Pune", "History", "Heritage"],
        es: ["Palacio Aga Khan", "Pune", "Historia", "Patrimonio"],
        pt: ["Palácio Aga Khan", "Pune", "História", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Sinhagad Fort",
        es: "Fuerte Sinhagad",
        pt: "Forte Sinhagad"
      },
      description: {
        en: "Sinhagad Fort is a historic hill fort surrounded by the scenic Sahyadri landscape. The fort is known for its Maratha history, trekking routes and panoramic views.",
        es: "El Fuerte Sinhagad es una histórica fortaleza situada entre los paisajes de Sahyadri. Es conocida por su historia maratha, rutas de senderismo y vistas panorámicas.",
        pt: "O Forte Sinhagad é uma histórica fortaleza nas paisagens dos Sahyadri. É conhecido por sua história Maratha, trilhas e vistas panorâmicas."
      },
      tags: {
        en: ["Sinhagad Fort", "Pune", "Fort", "Trekking"],
        es: ["Fuerte Sinhagad", "Pune", "Fortaleza", "Senderismo"],
        pt: ["Forte Sinhagad", "Pune", "Fortaleza", "Trilhas"]
      }
    },
    {
      name: {
        en: "Lal Mahal",
        es: "Lal Mahal",
        pt: "Lal Mahal"
      },
      description: {
        en: "Lal Mahal is a historic red palace located in central Pune and associated with Chhatrapati Shivaji Maharaj's early life. It is an important landmark of the city's Maratha heritage.",
        es: "Lal Mahal es un histórico palacio rojo situado en el centro de Pune y relacionado con los primeros años de Chhatrapati Shivaji Maharaj.",
        pt: "Lal Mahal é um histórico palácio vermelho localizado no centro de Pune e associado aos primeiros anos de Chhatrapati Shivaji Maharaj."
      },
      tags: {
        en: ["Lal Mahal", "Pune", "Shivaji Maharaj", "Heritage"],
        es: ["Lal Mahal", "Pune", "Shivaji Maharaj", "Patrimonio"],
        pt: ["Lal Mahal", "Pune", "Shivaji Maharaj", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Khadakwasla Dam",
        es: "Presa Khadakwasla",
        pt: "Barragem Khadakwasla"
      },
      description: {
        en: "Khadakwasla Dam is a scenic reservoir on the Mutha River near Pune. The surrounding landscape makes it a popular destination for relaxing, sightseeing and enjoying nature.",
        es: "La presa Khadakwasla es un hermoso embalse situado sobre el río Mutha cerca de Pune. Sus alrededores son populares para disfrutar de paisajes y naturaleza.",
        pt: "A Barragem Khadakwasla é um belo reservatório no rio Mutha, perto de Pune. A paisagem ao redor é popular para lazer e contato com a natureza."
      },
      tags: {
        en: ["Khadakwasla Dam", "Pune", "Lake", "Nature"],
        es: ["Presa Khadakwasla", "Pune", "Embalse", "Naturaleza"],
        pt: ["Barragem Khadakwasla", "Pune", "Reservatório", "Natureza"]
      }
    }
  ],
  "nagpur": [
    {
      name: {
        en: "Deekshabhoomi",
        es: "Deekshabhoomi",
        pt: "Deekshabhoomi"
      },
      description: {
        en: "Deekshabhoomi is one of Nagpur's most important Buddhist landmarks and a major center of Buddhist heritage. Its large stupa and peaceful surroundings attract visitors from across India.",
        es: "Deekshabhoomi es uno de los monumentos budistas más importantes de Nagpur y un destacado centro del patrimonio budista.",
        pt: "Deekshabhoomi é um dos principais monumentos budistas de Nagpur e um importante centro do patrimônio budista."
      },
      tags: {
        en: ["Deekshabhoomi", "Nagpur", "Buddhism", "Heritage"],
        es: ["Deekshabhoomi", "Nagpur", "Budismo", "Patrimonio"],
        pt: ["Deekshabhoomi", "Nagpur", "Budismo", "Patrimônio"]
      }
    },
    {
      name: {
        en: "Zero Mile Marker",
        es: "Zero Mile Marker",
        pt: "Zero Mile Marker"
      },
      description: {
        en: "Zero Mile Marker is a historic landmark associated with the Great Trigonometrical Survey of India. It remains an interesting symbol of Nagpur's historical geographical significance.",
        es: "Zero Mile Marker es un monumento histórico relacionado con el Great Trigonometrical Survey of India. Es un símbolo interesante de la importancia geográfica histórica de Nagpur.",
        pt: "Zero Mile Marker é um marco histórico associado ao Great Trigonometrical Survey of India. Continua sendo um símbolo interessante da importância geográfica histórica de Nagpur."
      },
      tags: {
        en: ["Zero Mile Marker", "Nagpur", "History", "Landmark"],
        es: ["Zero Mile Marker", "Nagpur", "Historia", "Monumento"],
        pt: ["Zero Mile Marker", "Nagpur", "História", "Monumento"]
      }
    },
    {
      name: {
        en: "Sitabuldi Fort",
        es: "Fuerte Sitabuldi",
        pt: "Forte Sitabuldi"
      },
      description: {
        en: "Sitabuldi Fort is a historic fort located in the heart of Nagpur. The fort reflects the city's colonial-era military history and occupies an important position in Nagpur's heritage landscape.",
        es: "El Fuerte Sitabuldi es una fortaleza histórica situada en el centro de Nagpur. Refleja parte de la historia militar de la época colonial.",
        pt: "O Forte Sitabuldi é uma fortaleza histórica localizada no centro de Nagpur. O local representa parte da história militar da época colonial."
      },
      tags: {
        en: ["Sitabuldi Fort", "Nagpur", "Fort", "History"],
        es: ["Sitabuldi Fort", "Nagpur", "Fortaleza", "Historia"],
        pt: ["Sitabuldi Fort", "Nagpur", "Fortaleza", "História"]
      }
    },
    {
      name: {
        en: "Maharajbagh Zoo",
        es: "Maharajbagh Zoo",
        pt: "Maharajbagh Zoo"
      },
      description: {
        en: "Maharajbagh Zoo is a popular urban wildlife attraction in Nagpur. It provides visitors with an opportunity to see a variety of animals while enjoying a green environment within the city.",
        es: "Maharajbagh Zoo es una popular atracción de vida silvestre urbana en Nagpur, donde los visitantes pueden observar diferentes animales en un entorno verde.",
        pt: "Maharajbagh Zoo é uma popular atração de vida selvagem urbana em Nagpur, oferecendo a oportunidade de observar diferentes animais em um ambiente verde."
      },
      tags: {
        en: ["Maharajbagh Zoo", "Nagpur", "Wildlife", "Zoo"],
        es: ["Maharajbagh Zoo", "Nagpur", "Vida Silvestre", "Zoológico"],
        pt: ["Maharajbagh Zoo", "Nagpur", "Vida Selvagem", "Zoológico"]
      }
    },
    {
      name: {
        en: "Futala Lake",
        es: "Lago Futala",
        pt: "Lago Futala"
      },
      description: {
        en: "Futala Lake is one of Nagpur's popular leisure destinations. The lakefront is especially attractive in the evening, offering scenic views and a relaxing atmosphere.",
        es: "El lago Futala es uno de los lugares recreativos más populares de Nagpur. Su paseo junto al lago ofrece hermosas vistas y un ambiente agradable, especialmente al atardecer.",
        pt: "O Lago Futala é um dos destinos de lazer mais populares de Nagpur. A área ao redor do lago oferece belas paisagens e uma atmosfera agradável, especialmente ao entardecer."
      },
      tags: {
        en: ["Futala Lake", "Nagpur", "Lake", "Nature"],
        es: ["Lago Futala", "Nagpur", "Lago", "Naturaleza"],
        pt: ["Lago Futala", "Nagpur", "Lago", "Natureza"]
      }
    }
  ],
  "mumbai": [
    {
      name: {
        en: "Gateway of India",
        es: "Puerta de la India",
        pt: "Gateway of India"
      },
      description: {
        en: "The Gateway of India is one of Mumbai's most iconic landmarks, standing beside the Arabian Sea at Apollo Bunder. Its Indo-Saracenic architecture and waterfront setting make it a major attraction.",
        es: "La Puerta de la India es uno de los monumentos más emblemáticos de Mumbai, situada junto al mar Arábigo en Apollo Bunder. Su arquitectura y ubicación frente al mar la convierten en una gran atracción.",
        pt: "O Gateway of India é um dos monumentos mais famosos de Mumbai, localizado junto ao Mar Arábico em Apollo Bunder. Sua arquitetura e localização à beira-mar fazem dele uma grande atração."
      },
      tags: {
        en: ["Gateway of India", "Mumbai", "Heritage", "Arabian Sea"],
        es: ["Puerta de la India", "Mumbai", "Patrimonio", "Mar Arábigo"],
        pt: ["Gateway of India", "Mumbai", "Patrimônio", "Mar Arábico"]
      }
    },
    {
      name: {
        en: "Chhatrapati Shivaji Maharaj Terminus",
        es: "Chhatrapati Shivaji Maharaj Terminus",
        pt: "Chhatrapati Shivaji Maharaj Terminus"
      },
      description: {
        en: "Chhatrapati Shivaji Maharaj Terminus is a UNESCO World Heritage Site and one of Mumbai's most remarkable architectural landmarks. Its Victorian Gothic design combined with Indian architectural elements makes it visually distinctive.",
        es: "Chhatrapati Shivaji Maharaj Terminus es Patrimonio Mundial de la UNESCO y uno de los monumentos arquitectónicos más importantes de Mumbai. Su diseño gótico victoriano combina elementos arquitectónicos indios.",
        pt: "Chhatrapati Shivaji Maharaj Terminus é Patrimônio Mundial da UNESCO e um dos principais monumentos arquitectônicos de Mumbai. Seu estilo gótico vitoriano combina elementos arquitetônicos indianos."
      },
      tags: {
        en: ["CSMT", "UNESCO", "Mumbai", "Heritage Architecture"],
        es: ["CSMT", "UNESCO", "Mumbai", "Arquitectura Patrimonial"],
        pt: ["CSMT", "UNESCO", "Mumbai", "Arquitetura Patrimonial"]
      }
    },
    {
      name: {
        en: "Marine Drive",
        es: "Marine Drive",
        pt: "Marine Drive"
      },
      description: {
        en: "Marine Drive is Mumbai's famous seaside promenade stretching along the Arabian Sea. Known for its curved coastline and evening city lights, it is one of the city's most recognizable urban landscapes.",
        es: "Marine Drive es el famoso paseo marítimo de Mumbai que se extiende a lo largo del mar Arábigo. Su costa curva y sus luces nocturnas forman uno de los paisajes urbanos más reconocibles de la ciudad.",
        pt: "Marine Drive é o famoso calçadão de Mumbai ao longo do Mar Arábico. Sua costa curva e as luzes da cidade à noite formam uma das paisagens urbanas mais reconhecíveis da cidade."
      },
      tags: {
        en: ["Marine Drive", "Mumbai", "Arabian Sea", "Promenade"],
        es: ["Marine Drive", "Mumbai", "Mar Arábigo", "Paseo Marítimo"],
        pt: ["Marine Drive", "Mumbai", "Mar Arábico", "Calçadão"]
      }
    },
    {
      name: {
        en: "Elephanta Caves",
        es: "Cuevas de Elephanta",
        pt: "Cavernas de Elephanta"
      },
      description: {
        en: "Elephanta Caves are a UNESCO World Heritage Site located on Elephanta Island in Mumbai Harbour. The ancient rock-cut caves are famous for their sculptures and monuments dedicated mainly to Lord Shiva.",
        es: "Las Cuevas de Elephanta son Patrimonio Mundial de la UNESCO y están situadas en la isla de Elephanta, en el puerto de Mumbai. Las antiguas cuevas excavadas en la roca son famosas por sus esculturas dedicadas principalmente a Shiva.",
        pt: "As Cavernas de Elephanta são Patrimônio Mundial da UNESCO e estão localizadas na Ilha de Elephanta, no porto de Mumbai. As antigas cavernas escavadas na rocha são famosas por suas esculturas dedicadas principalmente a Shiva."
      },
      tags: {
        en: ["Elephanta Caves", "UNESCO", "Caves", "Shiva"],
        es: ["Cuevas de Elephanta", "UNESCO", "Cuevas", "Shiva"],
        pt: ["Cavernas de Elephanta", "UNESCO", "Cavernas", "Shiva"]
      }
    },
    {
      name: {
        en: "Haji Ali Dargah",
        es: "Haji Ali Dargah",
        pt: "Haji Ali Dargah"
      },
      description: {
        en: "Haji Ali Dargah is a famous religious and architectural landmark situated on a small islet off Mumbai's coast. Its distinctive location and Indo-Islamic architecture make it one of the city's well-known attractions.",
        es: "Haji Ali Dargah es un famoso monumento religioso y arquitectónico situado en un pequeño islote frente a la costa de Mumbai. Su ubicación y arquitectura indoislámica lo convierten en un lugar emblemático.",
        pt: "Haji Ali Dargah é um famoso marco religioso e arquitetônico localizado em uma pequena ilhota ao largo da costa de Mumbai. Sua localização e arquitetura indo-islâmica fazem dele uma atração importante."
      },
      tags: {
        en: ["Haji Ali Dargah", "Mumbai", "Heritage", "Religious Site"],
        es: ["Haji Ali Dargah", "Mumbai", "Patrimonio", "Lugar Religioso"],
        pt: ["Haji Ali Dargah", "Mumbai", "Patrimônio", "Local Religioso"]
      }
    }
  ]
};

let updatedCount = 0;

cities.forEach(city => {
  const cityId = city.id || city.slug?.en;
  if (cityPlacesData[cityId]) {
    city.touristPlaces = cityPlacesData[cityId];
    city.famousPlacesToVisit = cityPlacesData[cityId];
    
    if (cityId === 'jamnagar') {
      city.stateId = 'gujarat';
      if (city.state) city.state = 'Gujarat';
      console.log('Jamnagar stateId updated to gujarat');
    }
    
    updatedCount++;
    console.log(`Updated ${cityId} with ${cityPlacesData[cityId].length} places.`);
  }
});

console.log(`Total cities updated: ${updatedCount}`);
fs.writeFileSync('src/data/fallback/cities.json', JSON.stringify(cities, null, 2), 'utf8');
console.log('Saved to src/data/fallback/cities.json');
