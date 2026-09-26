const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');
let cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const upPlacesData = {
  mathura: [
    {
      name: {
        en: "Shri Krishna Janmabhoomi Temple",
        es: "Templo Shri Krishna Janmabhoomi",
        pt: "Templo Shri Krishna Janmabhoomi"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Shri Krishna Janmabhoomi Temple is one of the most important pilgrimage sites in Mathura and is traditionally associated with the birthplace of Lord Krishna. The temple complex is built around the sacred site believed to be the ancient prison cell where Krishna was born. It is an important destination for devotees and visitors exploring Mathura's religious heritage.",
        es: "El Templo Shri Krishna Janmabhoomi es uno de los lugares de peregrinación más importantes de Mathura y está tradicionalmente asociado con el lugar de nacimiento del Señor Krishna. El complejo se encuentra alrededor del sitio sagrado que se considera la antigua prisión donde nació Krishna. Es un importante destino religioso y cultural de Mathura.",
        pt: "O Templo Shri Krishna Janmabhoomi é um dos mais importantes locais de peregrinação de Mathura e está tradicionalmente associado ao local de nascimento do Senhor Krishna. O complexo foi construído ao redor do local sagrado considerado a antiga prisão onde Krishna nasceu. É um importante destino religioso e cultural de Mathura."
      }
    },
    {
      name: {
        en: "Shri Dwarkadhish Temple",
        es: "Templo Shri Dwarkadhish",
        pt: "Templo Shri Dwarkadhish"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Shri Dwarkadhish Temple is one of the oldest and most prominent temples in Mathura, dedicated to Lord Krishna in his form as Dwarkadhish. The temple is known for its traditional architecture, colorful decorations, religious celebrations, and strong connection with the devotional culture of Braj.",
        es: "El Templo Shri Dwarkadhish es uno de los templos más antiguos y destacados de Mathura, dedicado al Señor Krishna en su forma de Dwarkadhish. Es conocido por su arquitectura tradicional, decoraciones coloridas, celebraciones religiosas y profunda conexión con la cultura devocional de Braj.",
        pt: "O Templo Shri Dwarkadhish é um dos templos mais antigos e importantes de Mathura, dedicado ao Senhor Krishna em sua forma de Dwarkadhish. O templo é conhecido por sua arquitetura tradicional, decorações coloridas, celebrações religiosas e forte ligação com a cultura devocional de Braj."
      }
    },
    {
      name: {
        en: "Vishram Ghat",
        es: "Vishram Ghat",
        pt: "Vishram Ghat"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Vishram Ghat is a historic and sacred riverfront ghat situated on the banks of the Yamuna River in Mathura. It is one of the most important ghats in the city and is known for its peaceful riverside atmosphere, traditional rituals, and evening prayers.",
        es: "Vishram Ghat es un histórico y sagrado ghat situado a orillas del río Yamuna en Mathura. Es uno de los ghats más importantes de la ciudad y es conocido por su tranquilo ambiente junto al río, rituales tradicionales y oraciones vespertinas.",
        pt: "Vishram Ghat é um histórico e sagrado ghat localizado às margens do rio Yamuna, em Mathura. É um dos ghats mais importantes da cidade e é conhecido por sua atmosfera tranquila, rituais tradicionais e orações realizadas ao entardecer."
      }
    },
    {
      name: {
        en: "Government Museum Mathura",
        es: "Museo Gubernamental de Mathura",
        pt: "Museu Governamental de Mathura"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Government Museum Mathura is an important cultural institution known for its extensive collection of ancient sculptures, archaeological artefacts, coins, and objects associated with the Mathura School of Art. The museum provides valuable insight into the artistic and historical heritage of the region.",
        es: "El Museo Gubernamental de Mathura es una importante institución cultural conocida por su amplia colección de esculturas antiguas, objetos arqueológicos, monedas y piezas relacionadas con la Escuela de Arte de Mathura. El museo ofrece una valiosa visión del patrimonio artístico e histórico de la región.",
        pt: "O Museu Governamental de Mathura é uma importante instituição cultural conhecida por sua extensa coleção de esculturas antigas, artefatos arqueológicos, moedas e objetos relacionados à Escola de Arte de Mathura. O museu oferece uma visão valiosa do patrimônio artístico e histórico da região."
      }
    },
    {
      name: {
        en: "Gita Mandir",
        es: "Templo Gita Mandir",
        pt: "Templo Gita Mandir"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Gita Mandir is a beautiful temple dedicated to Lord Krishna and is known for its elegant architecture, religious atmosphere, and inscriptions of verses from the Bhagavad Gita. The temple is located on the Mathura–Vrindavan road and is a peaceful place for visitors interested in spirituality and Indian culture.",
        es: "Gita Mandir es un hermoso templo dedicado al Señor Krishna, conocido por su elegante arquitectura, ambiente religioso e inscripciones de versos del Bhagavad Gita. Situado en la carretera entre Mathura y Vrindavan, es un lugar tranquilo para conocer la espiritualidad y cultura de la India.",
        pt: "Gita Mandir é um belo templo dedicado ao Senhor Krishna, conhecido por sua arquitetura elegante, atmosfera religiosa e inscrições de versos do Bhagavad Gita. Localizado na estrada entre Mathura e Vrindavan, é um lugar tranquilo para conhecer a espiritualidade e a cultura indiana."
      }
    }
  ],
  lucknow: [
    {
      name: {
        en: "Bara Imambara",
        es: "Bara Imambara",
        pt: "Bara Imambara"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Bara Imambara, also known as Asafi Imambara, is one of Lucknow's most iconic historical monuments. Built between 1784 and 1791, the complex is famous for its grand vaulted hall, intricate architecture, and the fascinating Bhul Bhulaiya labyrinth. It represents the distinctive architectural heritage of Awadh.",
        es: "Bara Imambara, también conocido como Asafi Imambara, es uno de los monumentos históricos más emblemáticos de Lucknow. Construido entre 1784 y 1791, el complejo es famoso por su enorme salón abovedado, su arquitectura detallada y el fascinante laberinto Bhul Bhulaiya. Representa el importante patrimonio arquitectónico de Awadh.",
        pt: "Bara Imambara, também conhecido como Asafi Imambara, é um dos monumentos históricos mais emblemáticos de Lucknow. Construído entre 1784 e 1791, o complexo é famoso por seu enorme salão abobadado, arquitetura detalhada e pelo fascinante labirinto Bhul Bhulaiya. Representa o importante patrimônio arquitetônico de Awadh."
      }
    },
    {
      name: {
        en: "Chota Imambara",
        es: "Chota Imambara",
        pt: "Chota Imambara"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Chota Imambara is a magnificent historical monument in Lucknow known for its elegant domes, ornate interiors, chandeliers, decorative artwork, and landscaped courtyard. Built during the reign of Muhammad Ali Shah, the complex includes the ruler's tomb and reflects the rich architectural traditions of Awadh.",
        es: "Chota Imambara es un magnífico monumento histórico de Lucknow conocido por sus elegantes cúpulas, interiores ornamentados, lámparas, elementos decorativos y hermoso patio. Construido durante el reinado de Muhammad Ali Shah, el complejo refleja las ricas tradiciones arquitectónicas de Awadh.",
        pt: "Chota Imambara é um magnífico monumento histórico de Lucknow conhecido por suas elegantes cúpulas, interiores ornamentados, lustres, elementos decorativos e belo pátio. Construído durante o reinado de Muhammad Ali Shah, o complexo representa as ricas tradições arquitetônicas de Awadh."
      }
    },
    {
      name: {
        en: "Rumi Darwaza",
        es: "Rumi Darwaza",
        pt: "Rumi Darwaza"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Rumi Darwaza is a spectacular historic gateway and one of Lucknow's most recognizable architectural landmarks. Built during the Nawabi era, the massive gateway features intricate floral carvings, a tall pointed arch, and distinctive Awadhi architectural detailing.",
        es: "Rumi Darwaza es una espectacular puerta histórica y uno de los monumentos arquitectónicos más reconocibles de Lucknow. Construida durante la época de los Nawabs, destaca por sus intrincados motivos florales, su enorme arco y sus características decoraciones arquitectónicas de Awadh.",
        pt: "Rumi Darwaza é um espetacular portal histórico e um dos marcos arquitetônicos mais reconhecidos de Lucknow. Construído durante a era dos Nawabs, o monumento apresenta detalhes florais elaborados, um grande arco pontiagudo e características da arquitetura tradicional de Awadh."
      }
    },
    {
      name: {
        en: "Lucknow Residency",
        es: "Residency de Lucknow",
        pt: "Residency de Lucknow"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Lucknow Residency is a historic heritage complex associated with the events of the 1857 uprising. The site contains the remains of colonial-era buildings, gardens, a cemetery, and the 1857 Memorial Museum. Its ruins provide an important glimpse into Lucknow's colonial and modern history.",
        es: "La Residency de Lucknow es un complejo histórico relacionado con los acontecimientos de la rebelión de 1857. El lugar conserva restos de edificios de la época colonial, jardines, un cemitério y el Museo Memorial de 1857. Sus ruinas ofrecen una importante visión de la historia colonial y moderna de Lucknow.",
        pt: "A Residency de Lucknow é um complexo histórico associado aos acontecimentos da revolta de 1857. O local possui ruínas de edifícios coloniais, jardins, um cemitério e o Museu Memorial de 1857. Suas estruturas históricas oferecem uma importante visão da história colonial e moderna de Lucknow."
      }
    },
    {
      name: {
        en: "Dr. Babasaheb Ambedkar Memorial Park",
        es: "Parque Memorial Dr. Babasaheb Ambedkar",
        pt: "Parque Memorial Dr. Babasaheb Ambedkar"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Dr. Babasaheb Ambedkar Memorial Park is a large architectural and landscaped complex in Lucknow dedicated to prominent figures associated with social reform and India's democratic history. The grand structures, open spaces, stonework, and monumental design make it a notable modern landmark of the city.",
        es: "El Parque Memorial Dr. Babasaheb Ambedkar es un amplio complejo arquitectónico y ajardinado de Lucknow dedicado a importantes figuras relacionadas con la reforma social y la historia democrática de la India. Sus monumentales estructuras y espacios abiertos lo convierten en un destacado punto de referencia moderno de la ciudad.",
        pt: "O Parque Memorial Dr. Babasaheb Ambedkar é um grande complexo arquitetônico e paisagístico de Lucknow dedicado a importantes figuras associadas à reforma social e à história democrática da Índia. Suas estruturas monumentais, espaços abertos e trabalhos em pedra fazem dele um importante marco moderno da cidade."
      }
    }
  ],
  kanpur: [
    {
      name: {
        en: "JK Temple",
        es: "Templo JK",
        pt: "Templo JK"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "JK Temple, also known as Juggilal Kamlapat Temple, is a beautiful Hindu temple in Kanpur known for its distinctive blend of traditional and modern architecture. The temple complex has elegant domes, landscaped surroundings, and shrines dedicated to different Hindu deities.",
        es: "El Templo JK, también conocido como Templo Juggilal Kamlapat, es un hermoso templo hindú de Kanpur conocido por su combinación de arquitectura tradicional y moderna. El complejo cuenta con elegantes cúpulas, jardines y santuarios dedicados a diferentes deidades hindúes.",
        pt: "O Templo JK, também conhecido como Templo Juggilal Kamlapat, é um belo templo hindu de Kanpur conhecido pela combinação de arquitetura tradicional e moderna. O complexo possui cúpulas elegantes, áreas ajardinadas e santuários dedicados a diferentes divindades hindus."
      }
    },
    {
      name: {
        en: "Allen Forest Zoo",
        es: "Zoológico Allen Forest",
        pt: "Zoológico Allen Forest"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Allen Forest Zoo, officially known as Kanpur Zoological Park, is one of the major wildlife attractions in Kanpur. Spread across a green forested environment, the zoo provides visitors with opportunities to observe different species of animals and birds while enjoying a natural outdoor setting.",
        es: "Allen Forest Zoo, conocido oficialmente como Kanpur Zoological Park, es una de las principales atracciones de vida silvestre de Kanpur. Rodeado de un entorno verde y boscoso, permite observar diferentes especies de animales y aves mientras se disfruta de un espacio natural.",
        pt: "Allen Forest Zoo, oficialmente conhecido como Kanpur Zoological Park, é uma das principais atrações de vida selvagem de Kanpur. Cercado por um ambiente verde e arborizado, oferece aos visitantes a oportunidade de observar diferentes espécies de animais e aves em um espaço natural."
      }
    },
    {
      name: {
        en: "Moti Jheel",
        es: "Lago Moti Jheel",
        pt: "Lago Moti Jheel"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Moti Jheel is a popular recreational destination in Kanpur centered around a scenic lake and surrounding green spaces. It is a pleasant place for walks, relaxation, family outings, and enjoying an open environment within the city.",
        es: "Moti Jheel es un popular destino recreativo de Kanpur, situado alrededor de un hermoso lago y espacios verdes. Es un lugar agradable para caminar, relajarse, disfrutar de actividades familiares y pasar tiempo al aire libre dentro de la ciudad.",
        pt: "Moti Jheel é um popular destino recreativo de Kanpur, situado ao redor de um lago e áreas verdes. É um lugar agradável para caminhadas, relaxamento, passeios em família e momentos ao ar livre dentro da cidade."
      }
    },
    {
      name: {
        en: "Kanpur Memorial Church",
        es: "Iglesia Memorial de Kanpur",
        pt: "Igreja Memorial de Kanpur"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Kanpur Memorial Church, also known as All Souls' Cathedral, is a historic church built in the 19th century. Its Gothic-inspired architecture, beautiful interiors, landscaped surroundings, and historical connection with the colonial period make it an important heritage attraction in Kanpur.",
        es: "La Iglesia Memorial de Kanpur, también conocida como Catedral de Todos los Santos, es una iglesia histórica construida en el siglo XIX. Su arquitectura de inspiración gótica, interiores decorados y conexión con el período colonial la convierten en un importante lugar patrimonial de Kanpur.",
        pt: "A Igreja Memorial de Kanpur, também conhecida como All Souls' Cathedral, é uma igreja histórica construída no século XIX. Sua arquitetura inspirada no estilo gótico, interiores ornamentados e ligação com o período colonial fazem dela um importante local histórico de Kanpur."
      }
    },
    {
      name: {
        en: "Bhitargaon Temple",
        es: "Templo de Bhitargaon",
        pt: "Templo de Bhitargaon"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Bhitargaon Temple is an ancient brick temple located near Kanpur and is considered an important example of early Indian temple architecture. Dating to the Gupta period, the temple is known for its terracotta panels, brick construction, and historical significance.",
        es: "El Templo de Bhitargaon es un antiguo templo de ladrillo situado cerca de Kanpur y constituye un importante ejemplo de la arquitectura de los primeros templos de la India. Asociado al período Gupta, es conocido por sus paneles de terracota, construcción de ladrillo e importancia histórica.",
        pt: "O Templo de Bhitargaon é um antigo templo de tijolos localizado perto de Kanpur e representa um importante exemplo da arquitetura dos primeiros templos indianos. Associado ao período Gupta, é conhecido por seus painéis de terracota, construção em tijolos e importância histórica."
      }
    }
  ],
  jhansi: [
    {
      name: {
        en: "Jhansi Fort",
        es: "Fuerte de Jhansi",
        pt: "Forte de Jhansi"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Jhansi Fort is the most iconic historical landmark of the city and was built by Raja Bir Singh Ju Deo of Orchha on Bangra Hill. The massive fort features several gateways, fortified walls, temples, gardens, and historic structures. It is closely associated with the history of Rani Lakshmibai and the 1857 uprising.",
        es: "El Fuerte de Jhansi es el monumento histórico más emblemático de la ciudad y fue construido por Raja Bir Singh Ju Deo de Orchha sobre la colina Bangra. La fortaleza cuenta con varias puertas, murallas, templos, jardines y estructuras históricas. Está estrechamente relacionada con la historia de Rani Lakshmibai y la rebelión de 1857.",
        pt: "O Forte de Jhansi é o monumento histórico mais emblemático da cidade e foi construído por Raja Bir Singh Ju Deo de Orchha na colina Bangra. A fortaleza possui vários portões, muralhas, templos, jardins e estruturas históricas. O local está profundamente ligado à história de Rani Lakshmibai e à revolta de 1857."
      }
    },
    {
      name: {
        en: "Rani Mahal",
        es: "Rani Mahal",
        pt: "Rani Mahal"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Rani Mahal was the palace associated with Rani Lakshmibai and is an important heritage attraction in Jhansi. The palace features colorful paintings, decorated ceilings, and historic architectural elements. It now functions as a museum displaying sculptures and artefacts from different historical periods.",
        es: "Rani Mahal fue el palacio asociado con Rani Lakshmibai y es uno de los principales lugares históricos de Jhansi. El palacio presenta pinturas coloridas, techos decorados y elementos arquitectónicos históricos. Actualmente funciona como museo con esculturas y objetos de diferentes períodos históricos.",
        pt: "Rani Mahal foi o palácio associado a Rani Lakshmibai e é um importante patrimônio histórico de Jhansi. O palácio possui pinturas coloridas, tetos decorados e elementos arquitetônicos históricos. Atualmente funciona como museu, exibindo esculturas e artefatos de diferentes períodos históricos."
      }
    },
    {
      name: {
        en: "Government Museum Jhansi",
        es: "Museo Gubernamental de Jhansi",
        pt: "Museu Governamental de Jhansi"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Government Museum Jhansi is an important museum located in the historic heart of the city. Its collection includes sculptures, archaeological objects, weapons, coins, manuscripts, and other artefacts that help visitors understand the history and cultural heritage of Bundelkhand.",
        es: "El Museo Gubernamental de Jhansi es un importante museo situado en el centro histórico de la ciudad. Su colección incluye esculturas, objetos arqueológicos, armas, monedas, manuscritos y otros artefactos que permiten conocer la historia y el patrimonio cultural de Bundelkhand.",
        pt: "O Museu Governamental de Jhansi é um importante museu localizado no centro histórico da cidade. Sua coleção inclui esculturas, objetos arqueológicos, armas, moedas, manuscritos e outros artefatos que ajudam os visitantes a conhecer a história e o patrimônio cultural de Bundelkhand."
      }
    },
    {
      name: {
        en: "Maharaja Gangadhar Rao Ki Chhatri",
        es: "Chhatri de Maharaja Gangadhar Rao",
        pt: "Chhatri de Maharaja Gangadhar Rao"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Maharaja Gangadhar Rao Ki Chhatri is a historic memorial dedicated to Maharaja Gangadhar Rao, the husband of Rani Lakshmibai. The elegant stone structure features traditional architectural details and stands as an important reminder of Jhansi's royal history and heritage.",
        es: "La Chhatri de Maharaja Gangadhar Rao es un monumento histórico dedicado a Maharaja Gangadhar Rao, esposo de Rani Lakshmibai. Su elegante estructura de piedra presenta detalles arquitectónicos tradicionales y representa una parte importante del patrimonio real de Jhansi.",
        pt: "A Chhatri de Maharaja Gangadhar Rao é um memorial histórico dedicado ao Maharaja Gangadhar Rao, marido de Rani Lakshmibai. Sua elegante estrutura de pedra apresenta detalhes arquitetônicos tradicionais e representa uma parte importante da história e do patrimônio real de Jhansi."
      }
    },
    {
      name: {
        en: "Barua Sagar",
        es: "Barua Sagar",
        pt: "Barua Sagar"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Barua Sagar is a historic town and scenic destination near Jhansi, known for its lake, fort complex, temples, and peaceful surroundings. The area combines Bundelkhand's historical heritage with natural scenery and provides an interesting excursion for travelers exploring the region around Jhansi.",
        es: "Barua Sagar es una histórica localidad y destino paisajístico cerca de Jhansi, conocida por su lago, fortaleza, templos y entorno tranquilo. La zona combina el patrimonio histórico de Bundelkhand con hermosos paisajes naturales.",
        pt: "Barua Sagar é uma cidade histórica e destino cênico perto de Jhansi, conhecida por seu lago, fortaleza, templos e ambiente tranquilo. A região combina o patrimônio histórico de Bundelkhand com belas paisagens naturais."
      }
    }
  ],
  allahabad: [
    {
      name: {
        en: "Triveni Sangam",
        es: "Triveni Sangam",
        pt: "Triveni Sangam"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Triveni Sangam is the sacred confluence of the Ganga, Yamuna, and traditionally believed invisible Saraswati rivers at Prayagraj. It is one of India's most important pilgrimage sites and is associated with major religious gatherings, rituals, bathing ceremonies, and the Kumbh Mela.",
        es: "Triveni Sangam es la sagrada confluencia de los ríos Ganges, Yamuna y el tradicionalmente considerado invisible Saraswati en Prayagraj. Es uno de los lugares de peregrinación más importantes de la India y está relacionado con grandes celebraciones religiosas y el Kumbh Mela.",
        pt: "Triveni Sangam é a confluência sagrada dos rios Ganges, Yamuna e do tradicionalmente considerado invisível Saraswati, em Prayagraj. É um dos locais de peregrinação mais importantes da Índia e está associado a grandes celebrações religiosas e ao Kumbh Mela."
      }
    },
    {
      name: {
        en: "Anand Bhawan",
        es: "Anand Bhawan",
        pt: "Anand Bhawan"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Anand Bhawan is a historic house museum associated with the Nehru family and India's freedom movement. The beautifully preserved residence contains rooms, photographs, personal belongings, and historical exhibits that provide insight into India's political and social history.",
        es: "Anand Bhawan es una histórica casa-museo asociada con la familia Nehru y el movimiento de independencia de la India. La residencia conserva habitaciones, fotografías, objetos personales y exposiciones históricas que ofrecen una visión de la historia política y social de la India.",
        pt: "Anand Bhawan é uma histórica casa-museu associada à família Nehru e ao movimento de independência da Índia. A residência preservada possui quartos, fotografias, objetos pessoais e exposições históricas que oferecem uma visão da história política e social da Índia."
      }
    },
    {
      name: {
        en: "Allahabad Fort",
        es: "Fuerte de Allahabad",
        pt: "Forte de Allahabad"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Allahabad Fort is a massive historic fort situated near the Yamuna River and the Triveni Sangam. Built during the Mughal period, the fort is associated with Emperor Akbar and is known for its impressive walls, strategic location, and important historical heritage.",
        es: "El Fuerte de Allahabad es una enorme fortaleza histórica situada cerca del río Yamuna y Triveni Sangam. Construida durante el período mogol, está asociada con el emperador Akbar y es conocida por sus impresionantes murallas, ubicación estratégica e importancia histórica.",
        pt: "O Forte de Allahabad é uma enorme fortaleza histórica localizada perto do rio Yamuna e de Triveni Sangam. Construído durante o período Mughal, está associado ao imperador Akbar e é conhecido por suas impressionantes muralhas, localização estratégica e importância histórica."
      }
    },
    {
      name: {
        en: "Khusro Bagh",
        es: "Khusro Bagh",
        pt: "Khusro Bagh"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Khusro Bagh is a historic walled garden and tomb complex in Prayagraj containing the ornate tombs of members of the Mughal royal family, including Prince Khusro. The complex is known for its Mughal architecture, stonework, decorative details, and peaceful landscaped surroundings.",
        es: "Khusro Bagh es un histórico jardín amurallado y complejo de tumbas en Prayagraj que contiene las ornamentadas tumbas de miembros de la familia real mogol, incluido el príncipe Khusro. El complejo destaca por su arquitectura mogola, trabajos en piedra y tranquilos jardines.",
        pt: "Khusro Bagh é um histórico jardim murado e complexo de túmulos em Prayagraj que abriga os túmulos ornamentados de membros da família real Mughal, incluindo o príncipe Khusro. O complexo é conhecido por sua arquitetura Mughal, trabalhos em pedra e jardins tranquilos."
      }
    },
    {
      name: {
        en: "Chandra Shekhar Azad Park",
        es: "Parque Chandra Shekhar Azad",
        pt: "Parque Chandra Shekhar Azad"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Chandra Shekhar Azad Park is a large historic urban park in Prayagraj, formerly known as Alfred Park. The park is associated with the freedom movement and is named after revolutionary Chandra Shekhar Azad. Its spacious lawns, trees, walking paths, and historical significance make it an important city attraction.",
        es: "El Parque Chandra Shekhar Azad es un gran parque histórico urbano de Prayagraj, anteriormente conocido como Alfred Park. Está relacionado con el movimiento de independencia y lleva el nombre del revolucionario Chandra Shekhar Azad. Sus jardines y valor histórico lo convierten en una importante atracción de la ciudad.",
        pt: "O Parque Chandra Shekhar Azad é um grande parque urbano histórico de Prayagraj, anteriormente conhecido como Alfred Park. O local está associado ao movimento de independência e recebeu o nome do revolucionário Chandra Shekhar Azad. Seus jardins e importância histórica fazem dele uma importante atração da cidade."
      }
    }
  ],
  aligarh: [
    {
      name: {
        en: "Aligarh Fort",
        es: "Fuerte de Aligarh",
        pt: "Forte de Aligarh"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Aligarh Fort, also known as Ramgarh Quila, is a historic 16th-century fortress in Aligarh. Built during the reign of Ibrahim Lodi, the fort features a high defensive structure and deep moat and is now surrounded by botanical gardens. It provides an interesting glimpse into the military history of the region.",
        es: "El Fuerte de Aligarh, también conocido como Ramgarh Quila, es una fortaleza histórica del siglo XVI. Construido durante el reinado de Ibrahim Lodi, presenta una estructura defensiva elevada y un profundo foso. Actualmente está rodeado de jardines botánicos y representa un importante ejemplo del patrimonio militar de la región.",
        pt: "O Forte de Aligarh, também conhecido como Ramgarh Quila, é uma fortaleza histórica do século XVI. Construído durante o reinado de Ibrahim Lodi, possui uma estrutura defensiva elevada e um fosso profundo. Atualmente é cercado por jardins botânicos e representa um importante exemplo do patrimônio militar da região."
      }
    },
    {
      name: {
        en: "Aligarh Muslim University",
        es: "Universidad Musulmana de Aligarh",
        pt: "Universidade Muçulmana de Aligarh"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Aligarh Muslim University is one of India's historic educational institutions and an important landmark of Aligarh. The university campus is known for its historic buildings, academic heritage, libraries, gardens, and distinctive Indo-Islamic architectural character.",
        es: "La Universidad Musulmana de Aligarh es una de las instituciones educativas históricas de la India y uno de los principales monumentos culturales de Aligarh. Su campus es conocido por sus edificios históricos, bibliotecas, jardines y arquitectura de influencia indoislámica.",
        pt: "A Universidade Muçulmana de Aligarh é uma das instituições educacionais históricas da Índia e um importante marco cultural da cidade. Seu campus é conhecido por edifícios históricos, bibliotecas, jardins e características arquitetônicas indo-islâmicas."
      }
    },
    {
      name: {
        en: "Sir Syed Academy Museum",
        es: "Museo de la Academia Sir Syed",
        pt: "Museu da Academia Sir Syed"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Sir Syed Academy Museum is a heritage museum located on the Aligarh Muslim University campus. Housed in the preserved residence associated with Sir Syed Ahmad Khan, the museum displays historical documents, photographs, personal objects, and materials connected with the educational and social history of Aligarh.",
        es: "El Museo de la Academia Sir Syed es un museo patrimonial situado en el campus de la Universidad Musulmana de Aligarh. Ubicado en una residencia histórica asociada con Sir Syed Ahmad Khan, presenta documentos, fotografías, objetos personales y materiales relacionados con la historia educativa y social de Aligarh.",
        pt: "O Museu da Academia Sir Syed é um museu histórico localizado no campus da Universidade Muçulmana de Aligarh. Instalado em uma residência preservada associada a Sir Syed Ahmad Khan, apresenta documentos, fotografias, objetos pessoais e materiais relacionados à história educacional e social de Aligarh."
      }
    },
    {
      name: {
        en: "Mangalayatan Teerthdham",
        es: "Mangalayatan Teerthdham",
        pt: "Mangalayatan Teerthdham"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Mangalayatan Teerthdham is a major Jain pilgrimage and spiritual complex near Aligarh. The peaceful complex features temples, landscaped surroundings, religious architecture, and facilities dedicated to Jain traditions, making it an important destination for pilgrims and visitors interested in Indian spirituality.",
        es: "Mangalayatan Teerthdham es un importante complejo de peregrinación jainista cerca de Aligarh. El tranquilo complejo cuenta con templos, jardines, arquitectura religiosa y espacios dedicados a las tradiciones jainistas, siendo un destino importante para peregrinos y viajeros interesados en la espiritualidad india.",
        pt: "Mangalayatan Teerthdham é um importante complexo de peregrinação jainista perto de Aligarh. O complexo possui templos, jardins, arquitetura religiosa e espaços dedicados às tradições jainistas, sendo um destino importante para peregrinos e visitantes interessados na espiritualidade indiana."
      }
    },
    {
      name: {
        en: "Shekha Bird Sanctuary",
        es: "Santuario de Aves de Shekha",
        pt: "Santuário de Aves de Shekha"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Shekha Bird Sanctuary is a natural wetland and bird-watching destination near Aligarh. Located around a lake, the sanctuary provides habitat for a variety of birds and offers visitors an opportunity to experience the region's natural environment and observe birdlife in a peaceful setting.",
        es: "El Santuario de Aves de Shekha es una zona húmeda natural y un destino para la observación de aves cerca de Aligarh. Situado alrededor de un lago, proporciona hábitat para diferentes especies de aves y permite disfrutar de la naturaleza en un entorno tranquilo.",
        pt: "O Santuário de Aves de Shekha é uma área úmida natural e um destino para observação de aves perto de Aligarh. Localizado ao redor de um lago, oferece habitat para diversas espécies de aves e permite aos visitantes apreciar a natureza em um ambiente tranquilo."
      }
    }
  ],
  varanasi: [
    {
      name: {
        en: "Kashi Vishwanath Temple",
        es: "Templo Kashi Vishwanath",
        pt: "Templo Kashi Vishwanath"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Kashi Vishwanath Temple is one of the most revered Hindu temples in Varanasi and is dedicated to Lord Shiva. Located near the Ganga, the temple is an important pilgrimage destination and a central part of Varanasi's spiritual and cultural identity.",
        es: "El Templo Kashi Vishwanath es uno de los templos hindúes más venerados de Varanasi y está dedicado al Señor Shiva. Situado cerca del río Ganges, es un importante destino de peregrinación y una parte central de la identidad espiritual y cultural de Varanasi.",
        pt: "O Templo Kashi Vishwanath é um dos templos hindus mais reverenciados de Varanasi e é dedicado ao Senhor Shiva. Localizado próximo ao rio Ganges, é um importante destino de peregrinação e uma parte central da identidade espiritual e cultural de Varanasi."
      }
    },
    {
      name: {
        en: "Dashashwamedh Ghat",
        es: "Dashashwamedh Ghat",
        pt: "Dashashwamedh Ghat"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Dashashwamedh Ghat is one of the most famous riverfront ghats of Varanasi and is renowned for its spectacular evening Ganga Aarti. Located on the banks of the Ganga, the ghat is a vibrant place where visitors can experience religious rituals, boat rides, prayers, and the traditional atmosphere of Varanasi.",
        es: "Dashashwamedh Ghat es uno de los ghats más famosos de Varanasi y es especialmente conocido por la espectacular Ganga Aarti de la tarde. Situado a orillas del Ganges, permite experimentar rituales religiosos, paseos en barco, oraciones y la atmósfera tradicional de Varanasi.",
        pt: "Dashashwamedh Ghat é um dos ghats mais famosos de Varanasi e é especialmente conhecido pela espetacular Ganga Aarti realizada à noite. Localizado às margens do Ganges, permite aos visitantes vivenciar rituais religiosos, passeios de barco, orações e a atmosfera tradicional de Varanasi."
      }
    },
    {
      name: {
        en: "Sarnath",
        es: "Sarnath",
        pt: "Sarnath"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Sarnath is an important Buddhist heritage site located near Varanasi and is traditionally regarded as the place where Gautama Buddha delivered his first sermon after attaining enlightenment. The site includes ancient stupas, archaeological remains, monasteries, museums, and important Buddhist monuments.",
        es: "Sarnath es un importante sitio del patrimonio budista situado cerca de Varanasi y es tradicionalmente considerado el lugar donde Gautama Buddha pronunció su primer sermón después de alcanzar la iluminación. El lugar cuenta con estupas antiguas, restos arqueológicos, monasterios, museos y monumentos budistas.",
        pt: "Sarnath é um importante local do patrimônio budista perto de Varanasi e é tradicionalmente considerado o lugar onde Gautama Buddha proferiu seu primeiro sermão após alcançar a iluminação. O local possui antigas stupas, ruínas arqueológicas, mosteiros, museus e importantes monumentos budistas."
      }
    },
    {
      name: {
        en: "Assi Ghat",
        es: "Assi Ghat",
        pt: "Assi Ghat"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "Assi Ghat is one of the southernmost major ghats of Varanasi and is known for its peaceful riverside atmosphere, sunrise views, cultural activities, yoga, music, and morning rituals. It is a popular place to experience the everyday spiritual and cultural life of the city.",
        es: "Assi Ghat es uno de los principales ghats del sur de Varanasi y es conocido por su tranquilo ambiente junto al río, vistas del amanecer, actividades culturales, yoga, música y rituales matutinos. Es un lugar popular para experimentar la vida espiritual y cultural cotidiana de la ciudad.",
        pt: "Assi Ghat é um dos principais ghats ao sul de Varanasi e é conhecido por sua atmosfera tranquila junto ao rio, vistas do nascer do sol, atividades culturais, yoga, música e rituais matinais. É um lugar popular para vivenciar a vida espiritual e cultural cotidiana da cidade."
      }
    },
    {
      name: {
        en: "Manikarnika Ghat",
        es: "Manikarnika Ghat",
        pt: "Manikarnika Ghat"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Manikarnika Ghat is one of the oldest and most significant ghats on the Ganga in Varanasi. It is traditionally associated with Hindu cremation rituals and is considered an important spiritual site. The ghat reflects the deep connection between Varanasi, the Ganga, religious traditions, and the Hindu understanding of life and death.",
        es: "Manikarnika Ghat es uno de los ghats más antiguos e importantes del Ganges en Varanasi. Está tradicionalmente asociado con los rituales funerarios hindúes y es considerado un importante lugar espiritual. El ghat refleja la profunda relación entre Varanasi, el Ganges y las tradiciones religiosas hindúes.",
        pt: "Manikarnika Ghat é um dos ghats mais antigos e importantes às margens do Ganges, em Varanasi. É tradicionalmente associado aos rituais funerários hindus e é considerado um importante local espiritual. O ghat representa a profunda relação entre Varanasi, o Ganges e as tradições religiosas hindus."
      }
    }
  ],
  agra: [
    {
      name: {
        en: "Taj Mahal",
        es: "Taj Mahal",
        pt: "Taj Mahal"
      },
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
      description: {
        en: "The Taj Mahal is Agra's most iconic monument and a UNESCO World Heritage Site. Built by Mughal Emperor Shah Jahan in memory of Mumtaz Mahal, this magnificent ivory-white marble mausoleum is celebrated for its symmetrical architecture, intricate marble inlay work, grand gardens and reflecting pools. Situated on the banks of the Yamuna River, it is one of India's most recognized historical landmarks and a major attraction for visitors from around the world.",
        es: "El Taj Mahal es el monumento más emblemático de Agra y está declarado Patrimonio Mundial de la UNESCO. Fue construido por el emperador mogol Shah Jahan en memoria de Mumtaz Mahal. Este impresionante mausoleo de mármol blanco destaca por su arquitectura simétrica, sus delicados trabajos de incrustación, sus jardines y sus estanques reflectantes. Situado a orillas del río Yamuna, es uno de los monumentos históricos más reconocidos de la India.",
        pt: "O Taj Mahal é o monumento mais famoso de Agra e um Patrimônio Mundial da UNESCO. Foi construído pelo imperador mogol Shah Jahan em memória de Mumtaz Mahal. O magnífico mausoléu de mármore branco é conhecido por sua arquitetura simétrica, delicados trabalhos de incrustação, jardins formais e piscinas refletoras. Localizado às margens do rio Yamuna, é um dos monumentos históricos mais reconhecidos da Índia."
      }
    },
    {
      name: {
        en: "Agra Fort",
        es: "Fuerte de Agra",
        pt: "Forte de Agra"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Agra Fort is a magnificent UNESCO World Heritage Site and one of the finest examples of Mughal fort architecture. Originally developed in red sandstone under Emperor Akbar, the fort was later enhanced with elegant marble structures during Shah Jahan's reign. Its massive walls surround historic buildings such as Jahangir Mahal, Khas Mahal, Diwan-i-Aam, Diwan-i-Khas and Sheesh Mahal. The fort also offers beautiful views towards the Taj Mahal.",
        es: "El Fuerte de Agra es un impresionante sitio declarado Patrimonio Mundial de la UNESCO y uno de los mejores ejemplos de arquitectura militar mogol. Desarrollado principalmente en piedra arenisca roja durante el reinado del emperador Akbar, posteriormente fue embellecido con estructuras de mármol durante la época de Shah Jahan. Dentro de sus enormes murallas se encuentran edificios históricos como Jahangir Mahal, Khas Mahal, Diwan-i-Aam, Diwan-i-Khas y Sheesh Mahal.",
        pt: "O Forte de Agra é um magnífico Patrimônio Mundial da UNESCO e um dos melhores exemplos da arquitetura militar mogol. Construído principalmente em arenito vermelho durante o reinado do imperador Akbar, o forte foi posteriormente enriquecido com elegantes estruturas de mármore durante o período de Shah Jahan. Dentro de suas enormes muralhas encontram-se edifícios históricos como Jahangir Mahal, Khas Mahal, Diwan-i-Aam, Diwan-i-Khas e Sheesh Mahal."
      }
    },
    {
      name: {
        en: "Tomb of Itimad-ud-Daulah / Baby Taj",
        es: "Tumba de Itimad-ud-Daulah / Baby Taj",
        pt: "Túmulo de Itimad-ud-Daulah / Baby Taj"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "The Tomb of Itimad-ud-Daulah is an elegant Mughal mausoleum located beside the Yamuna River and is popularly known as the “Baby Taj.” Built by Empress Nur Jahan for her father Mirza Ghiyas Beg between 1622 and 1628, it is notable for its white marble construction, delicate jali screens and detailed pietra dura inlay work. Its refined design makes it an important monument in the development of Mughal architecture.",
        es: "La Tumba de Itimad-ud-Daulah es un elegante mausoleo mogol situado junto al río Yamuna y conocido popularmente como el “Baby Taj”. Fue construida por la emperatriz Nur Jahan para su padre Mirza Ghiyas Beg entre 1622 y 1628. El monumento destaca por su mármol blanco, sus delicadas celosías de piedra y sus detallados trabajos de incrustación. Su elegante diseño representa una etapa importante en la evolución de la arquitectura mogol.",
        pt: "O Túmulo de Itimad-ud-Daulah é um elegante mausoléu mogol localizado às margens do rio Yamuna e conhecido popularmente como “Baby Taj”. Foi construído pela imperatriz Nur Jahan para seu pai, Mirza Ghiyas Beg, entre 1622 e 1628. O monumento destaca-se pelo uso de mármore branco, delicadas telas de pedra e trabalhos detalhados de incrustação. Seu design refinado representa uma etapa importante na evolução da arquitetura mogol."
      }
    },
    {
      name: {
        en: "Mehtab Bagh",
        es: "Mehtab Bagh",
        pt: "Mehtab Bagh"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Mehtab Bagh is a historic Mughal garden situated on the opposite bank of the Yamuna River from the Taj Mahal. The garden is particularly known for its direct views of the Taj Mahal and provides a peaceful setting away from the main monument complex. Its landscaped pathways, greenery and riverside location make it a popular place for photography, especially around sunset.",
        es: "Mehtab Bagh es un histórico jardín mogol situado al otro lado del río Yamuna, frente al Taj Mahal. Es especialmente conocido por sus vistas directas del famoso monumento y ofrece un ambiente tranquilo alejado de la zona principal del Taj Mahal. Sus senderos, jardines y ubicación junto al río lo convierten en un lugar popular para la fotografía, especialmente al atardecer.",
        pt: "Mehtab Bagh é um jardim histórico mogol localizado na margem oposta do rio Yamuna, em frente ao Taj Mahal. É especialmente conhecido pelas vistas diretas do famoso monumento e oferece um ambiente tranquilo longe do complexo principal do Taj Mahal. Seus caminhos arborizados, jardins e localização à beira do rio fazem dele um local popular para fotografia, especialmente ao pôr do sol."
      }
    },
    {
      name: {
        en: "Akbar's Tomb, Sikandra",
        es: "Tumba de Akbar, Sikandra",
        pt: "Túmulo de Akbar, Sikandra"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Akbar's Tomb at Sikandra is the magnificent mausoleum of Mughal Emperor Akbar. The monument combines red sandstone with decorative marble elements and is surrounded by a large charbagh-style garden. Construction was started by Akbar himself and completed by his son Jahangir. The complex is known for its monumental gateway, geometric design, intricate decoration and peaceful gardens, making it an important stop for exploring Agra's Mughal heritage.",
        es: "La Tumba de Akbar en Sikandra es el impresionante mausoleo del emperador mogol Akbar. El monumento combina piedra arenisca roja con elementos decorativos de mármol y está rodeado por un amplio jardín de estilo charbagh. La construcción fue iniciada por el propio Akbar y terminada por su hijo Jahangir. El complejo destaca por su monumental entrada, diseño geométrico, decoración detallada y jardines tranquilos.",
        pt: "O Túmulo de Akbar, em Sikandra, é o magnífico mausoléu do imperador mogol Akbar. O monumento combina arenito vermelho com elementos decorativos de mármore e está rodeado por um amplo jardim no estilo charbagh. A construção foi iniciada pelo próprio Akbar e concluída por seu filho Jahangir. O complexo destaca-se por seu portão monumental, design geométrico, decoração detalhada e jardins tranquilos."
      }
    }
  ]
};

let count = 0;
for (const cityId in upPlacesData) {
  const idx = cities.findIndex(c => c.id === cityId);
  if (idx !== -1) {
    cities[idx].touristPlaces = upPlacesData[cityId];
    count++;
    console.log(`Updated touristPlaces for city: ${cityId} (${cities[idx].touristPlaces.length} places)`);
  } else {
    console.warn(`City ID not found: ${cityId}`);
  }
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf-8');
console.log(`\nSuccessfully updated ${count} Uttar Pradesh cities in cities.json!`);
