import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const citiesFilePath = path.resolve('src/data/fallback/cities.json');

// Get HEAD cities from Git
const headCitiesJson = execSync('git show HEAD:src/data/fallback/cities.json', { encoding: 'utf8' });
const headCities = JSON.parse(headCitiesJson);

// Read current cities
const currentCities = JSON.parse(fs.readFileSync(citiesFilePath, 'utf8'));

// Helper to clean HTML text
function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// 9 MP Cities Tourist Places Data
const mpPlacesMap = {
  // 1. KHAJURAHO
  khajuraho: [
    {
      name: { en: "Western Group of Temples", es: "Grupo Occidental de Templos", pt: "Grupo Ocidental de Templos" },
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
      description: {
        en: cleanText("The Western Group of Temples is the most famous attraction in Khajuraho and a UNESCO World Heritage Site. These magnificent temples are known for their intricate sculptures, detailed carvings and impressive Nagara-style architecture. The complex represents the artistic excellence of the Chandela period."),
        es: cleanText("El Grupo Occidental de Templos es la atracción más famosa de Khajuraho y forma parte del Patrimonio Mundial de la UNESCO. Sus magníficas esculturas, intrincados relieves y arquitectura de estilo Nagara reflejan la excelencia artística de la época Chandela."),
        pt: cleanText("O Grupo Ocidental de Templos é a atração mais famosa de Khajuraho e faz parte do Patrimônio Mundial da UNESCO. Seus detalhes esculpidos, esculturas elaboradas e arquitetura no estilo Nagara representam a excelência artística da era Chandela.")
      }
    },
    {
      name: { en: "Kandariya Mahadeva Temple", es: "Templo Kandariya Mahadeva", pt: "Templo Kandariya Mahadeva" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Kandariya Mahadeva Temple is one of the grandest temples in Khajuraho, dedicated to Lord Shiva. Its towering shikhara and hundreds of beautifully carved sculptures make it a masterpiece of medieval Indian temple architecture."),
        es: cleanText("El Templo Kandariya Mahadeva es uno de los templos más impresionantes de Khajuraho y está dedicado al dios Shiva. Su gran shikhara y sus numerosas esculturas talladas lo convierten en una obra maestra de la arquitectura medieval india."),
        pt: cleanText("O Templo Kandariya Mahadeva é um dos templos mais grandiosos de Khajuraho, dedicado ao deus Shiva. Seu enorme shikhara e suas centenas de esculturas fazem dele uma obra-prima da arquitetura medieval indiana.")
      }
    },
    {
      name: { en: "Lakshmana Temple", es: "Templo de Lakshmana", pt: "Templo de Lakshmana" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Lakshmana Temple is one of the best-preserved temples of Khajuraho. Dedicated to Lord Vishnu, it features beautifully carved walls depicting deities, celestial figures and scenes from ancient Indian life."),
        es: cleanText("El Templo de Lakshmana es uno de los templos mejor conservados de Khajuraho. Dedicado al dios Vishnu, presenta muros decorados con deidades, figuras celestiales y escenas de la vida india antigua."),
        pt: cleanText("O Templo de Lakshmana é um dos templos mais bem preservados de Khajuraho. Dedicado ao deus Vishnu, possui paredes ricamente decoradas com divindades, figuras celestiais e cenas da antiga vida indiana.")
      }
    },
    {
      name: { en: "Eastern Group of Temples", es: "Grupo Oriental de Templos", pt: "Grupo Oriental de Templos" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("The Eastern Group of Temples includes several Hindu and Jain temples known for their elegant architecture and detailed stone carvings. The group offers a quieter opportunity to explore Khajuraho's religious and artistic heritage."),
        es: cleanText("El Grupo Oriental de Templos incluye varios templos hindúes y jainistas famosos por su elegante arquitectura y detalladas esculturas de piedra. Es un excelente lugar para conocer el patrimonio religioso y artístico de Khajuraho."),
        pt: cleanText("O Grupo Oriental de Templos reúne vários templos hindus e jainistas conhecidos por sua arquitetura elegante e esculturas detalhadas em pedra. O local permite explorar o rico patrimônio religioso e artístico de Khajuraho.")
      }
    },
    {
      name: { en: "Raneh Falls", es: "Raneh Falls", pt: "Raneh Falls" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("Raneh Falls is a spectacular natural attraction located near Khajuraho. The Ken River flows through a dramatic canyon of colorful granite rocks, creating a scenic landscape perfect for nature lovers and photographers."),
        es: cleanText("Raneh Falls es una impresionante atracción natural cerca de Khajuraho. El río Ken atraviesa un espectacular cañón formado por rocas de granito de diferentes colores, creando un paisaje ideal para amantes de la naturaleza y la fotografía."),
        pt: cleanText("Raneh Falls é uma impressionante atração natural localizada perto de Khajuraho. O rio Ken atravessa um desfiladeiro cercado por rochas de granito coloridas, criando uma paisagem perfeita para amantes da natureza e fotografia.")
      }
    }
  ],

  // 2. DHAR
  dhar: [
    {
      name: { en: "Dhar Fort", es: "Fuerte de Dhar", pt: "Forte de Dhar" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Dhar Fort is a historic fort associated with the rich medieval and Maratha history of the region. Built on a hill, the fort offers an insight into Dhar's royal past and architectural heritage."),
        es: cleanText("El Fuerte de Dhar es una fortaleza histórica relacionada con la rica historia medieval y maratha de la región. Construido sobre una colina, ofrece una visión del pasado real y del patrimonio arquitectónico de Dhar."),
        pt: cleanText("O Forte de Dhar é uma fortaleza histórica ligada à rica história medieval e Maratha da região. Construído sobre uma colina, oferece uma visão do passado real e do patrimônio arquitetônico de Dhar.")
      }
    },
    {
      name: { en: "Mandu", es: "Mandu", pt: "Mandu" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Mandu, located in Dhar district, is a remarkable heritage destination famous for its Afghan-style architecture, palaces, gateways and romantic historical legends. Its monuments are surrounded by scenic landscapes and ancient ruins."),
        es: cleanText("Mandu, ubicado en el distrito de Dhar, es un importante destino patrimonial famoso por su arquitectura de estilo afgano, palacios, puertas históricas y antiguas leyendas. Sus monumentos están rodeados de paisajes naturales y ruinas históricas."),
        pt: cleanText("Mandu, localizado no distrito de Dhar, é um importante destino histórico conhecido por sua arquitetura de estilo afegão, palácios, portões históricos e antigas lendas. Seus monumentos são cercados por belas paisagens e ruínas.")
      }
    },
    {
      name: { en: "Jahaz Mahal", es: "Jahaz Mahal", pt: "Jahaz Mahal" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Jahaz Mahal is one of Mandu's most iconic monuments. The palace appears like a ship floating between two lakes and is celebrated for its elegant medieval architecture and beautiful surroundings."),
        es: cleanText("Jahaz Mahal es uno de los monumentos más emblemáticos de Mandu. El palacio parece un barco flotando entre dos lagos y destaca por su elegante arquitectura medieval y su hermoso entorno."),
        pt: cleanText("Jahaz Mahal é um dos monumentos mais famosos de Mandu. O palácio parece um navio flutuando entre dois lagos e é conhecido por sua elegante arquitetura medieval e seus belos arredores.")
      }
    },
    {
      name: { en: "Hindola Mahal", es: "Hindola Mahal", pt: "Hindola Mahal" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Hindola Mahal is a striking medieval monument in Mandu, named for its sloping walls that resemble a swing. Its unique design reflects the architectural creativity of the Malwa Sultanate."),
        es: cleanText("Hindola Mahal es un impresionante monumento medieval de Mandu, conocido por sus paredes inclinadas que recuerdan a un columpio. Su diseño refleja la creatividad arquitectónica del Sultanato de Malwa."),
        pt: cleanText("Hindola Mahal é um impressionante monumento medieval de Mandu, conhecido por suas paredes inclinadas que lembram um balanço. Seu design demonstra a criatividade arquitetônica do Sultanato de Malwa.")
      }
    },
    {
      name: { en: "Hoshang Shah's Tomb", es: "Tumba de Hoshang Shah", pt: "Túmulo de Hoshang Shah" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Hoshang Shah's Tomb is an elegant marble monument in Mandu and an important example of early Indo-Islamic architecture. Its refined stonework and domed structure make it a significant heritage attraction."),
        es: cleanText("La Tumba de Hoshang Shah es un elegante monumento de mármol en Mandu y un importante ejemplo de arquitectura indoislámica temprana. Su delicado trabajo en piedra y su cúpula la convierten en una importante atracción histórica."),
        pt: cleanText("O Túmulo de Hoshang Shah é um elegante monumento de mármore em Mandu e um importante exemplo da arquitetura indo-islâmica inicial. Seu trabalho refinado em pedra e sua cúpula são destaques do patrimônio local.")
      }
    }
  ],

  // 3. INDORE
  indore: [
    {
      name: { en: "Rajwada Palace", es: "Palacio Rajwada", pt: "Palácio Rajwada" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Rajwada Palace is the historic heart of Indore and one of its most recognizable landmarks. Built by the Holkars, this grand palace showcases a blend of Maratha, Mughal and French architectural influences."),
        es: cleanText("El Palacio Rajwada es el corazón histórico de Indore y uno de sus monumentos más reconocibles. Construido por los Holkar, combina influencias arquitectónicas marathas, mogolas y francesas."),
        pt: cleanText("O Palácio Rajwada é o coração histórico de Indore e um de seus monumentos mais famosos. Construído pelos Holkar, apresenta uma combinação de influências arquitetônicas Maratha, Mughal e francesa.")
      }
    },
    {
      name: { en: "Lal Bagh Palace", es: "Palacio Lal Bagh", pt: "Palácio Lal Bagh" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Lal Bagh Palace is a magnificent royal residence showcasing the luxurious lifestyle of the Holkar rulers. Its grand interiors, European-inspired design and beautiful gardens make it an important heritage attraction."),
        es: cleanText("El Palacio Lal Bagh es una magnífica residencia real que refleja el estilo de vida de los gobernantes Holkar. Sus interiores elegantes, diseño de inspiración europea y jardines lo convierten en una importante atracción patrimonial."),
        pt: cleanText("O Palácio Lal Bagh é uma magnífica residência real que mostra o estilo de vida luxuoso dos governantes Holkar. Seus interiores grandiosos, arquitetura de inspiração europeia e jardins são grandes atrações.")
      }
    },
    {
      name: { en: "Kanch Mandir", es: "Kanch Mandir", pt: "Kanch Mandir" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Kanch Mandir is a beautiful Jain temple famous for its interiors covered with glass and mirrors. Intricate reflections, colorful artwork and religious imagery create a unique visual experience."),
        es: cleanText("Kanch Mandir es un hermoso templo jainista famoso por sus interiores decorados con vidrio y espejos. Sus reflejos, obras de arte coloridas e imágenes religiosas crean una experiencia visual única."),
        pt: cleanText("Kanch Mandir é um belo templo jainista famoso por seus interiores revestidos de vidro e espelhos. Os reflexos, obras coloridas e imagens religiosas criam uma experiência visual única.")
      }
    },
    {
      name: { en: "Central Museum", es: "Museo Central", pt: "Museu Central" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("The Central Museum of Indore houses an impressive collection of sculptures, coins, inscriptions and historical artifacts. It is an excellent place to explore the cultural and archaeological heritage of Madhya Pradesh."),
        es: cleanText("El Museo Central de Indore conserva una importante colección de esculturas, monedas, inscripciones y objetos históricos. Es un excelente lugar para conocer el patrimonio cultural y arqueológico de Madhya Pradesh."),
        pt: cleanText("O Museu Central de Indore abriga uma importante coleção de esculturas, moedas, inscrições e artefatos históricos. É um ótimo lugar para conhecer o patrimônio cultural e arqueológico de Madhya Pradesh.")
      }
    },
    {
      name: { en: "Sarafa Bazaar", es: "Sarafa Bazaar", pt: "Sarafa Bazaar" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Sarafa Bazaar is one of Indore's most popular food destinations. The market transforms into a vibrant night food street where visitors can enjoy famous local snacks, sweets and traditional Indori flavors."),
        es: cleanText("Sarafa Bazaar es uno de los destinos gastronómicos más populares de Indore. Por la noche se transforma en una animada calle gastronómica donde se pueden probar aperitivos, dulces y sabores tradicionales de Indore."),
        pt: cleanText("Sarafa Bazaar é um dos destinos gastronômicos mais populares de Indore. À noite, o mercado se transforma em uma animada rua de comida com petiscos, doces e sabores tradicionais de Indore.")
      }
    }
  ],

  // 4. PENCH
  pench: [
    {
      name: { en: "Pench National Park", es: "Parque Nacional de Pench", pt: "Parque Nacional de Pench" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("Pench National Park is one of Madhya Pradesh's renowned wildlife destinations and is associated with the landscape that inspired The Jungle Book. The reserve is known for tigers, leopards, deer, birds and diverse forest ecosystems."),
        es: cleanText("El Parque Nacional de Pench es uno de los principales destinos de vida silvestre de Madhya Pradesh y está relacionado con el paisaje que inspiró El libro de la selva. El parque alberga tigres, leopardos, ciervos, aves y diversos ecosistemas forestales."),
        pt: cleanText("O Parque Nacional de Pench é um dos principais destinos de vida selvagem de Madhya Pradesh e está associado à paisagem que inspirou O Livro da Selva. A reserva abriga tigres, leopardos, cervos, aves e diversos ecossistemas florestais.")
      }
    },
    {
      name: { en: "Pench Jungle Safari", es: "Safari por la Selva de Pench", pt: "Safari na Selva de Pench" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("A jungle safari is one of the best ways to explore the forests of Pench. Visitors can travel through different forest zones and observe wildlife, birds and the natural landscape."),
        es: cleanText("El safari por la selva es una de las mejores formas de explorar los bosques de Pench. Los visitantes pueden recorrer diferentes zonas y observar animales, aves y paisajes naturales."),
        pt: cleanText("O safari pela selva é uma das melhores formas de explorar as florestas de Pench. Os visitantes podem percorrer diferentes zonas e observar animais, aves e paisagens naturais.")
      }
    },
    {
      name: { en: "Pench River", es: "Río Pench", pt: "Rio Pench" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("The Pench River flows through the region and adds to the scenic beauty of the national park. Its forests, water bodies and surrounding landscapes create excellent opportunities for nature photography and birdwatching."),
        es: cleanText("El río Pench atraviesa la región y aumenta la belleza natural del parque nacional. Los bosques, cuerpos de agua y paisajes de los alrededores ofrecen excelentes oportunidades para la fotografía y la observación de aves."),
        pt: cleanText("O rio Pench atravessa a região e contribui para a beleza natural do parque nacional. As florestas, áreas de água e paisagens ao redor são ideais para fotografia e observação de aves.")
      }
    },
    {
      name: { en: "Pench Reservoir", es: "Embalse de Pench", pt: "Reservatório de Pench" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Pench Reservoir is surrounded by forests and offers a peaceful natural setting. The area is particularly attractive for visitors interested in landscapes, birdwatching and relaxing close to nature."),
        es: cleanText("El embalse de Pench está rodeado de bosques y ofrece un entorno natural tranquilo. Es especialmente atractivo para quienes disfrutan de los paisajes, la observación de aves y la naturaleza."),
        pt: cleanText("O Reservatório de Pench é cercado por florestas e oferece um ambiente natural tranquilo. É especialmente interessante para quem gosta de paisagens, observação de aves e contato com a natureza.")
      }
    },
    {
      name: { en: "Kohka Lake", es: "Lago Kohka", pt: "Lago Kohka" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("Kohka Lake is a scenic water body near the Pench landscape. Surrounded by greenery, it provides a peaceful environment for enjoying nature and observing the region's birdlife."),
        es: cleanText("El lago Kohka es un hermoso cuerpo de agua cerca del paisaje de Pench. Rodeado de vegetación, ofrece un ambiente tranquilo para disfrutar de la naturaleza y observar aves."),
        pt: cleanText("O Lago Kohka é um belo corpo d'água próximo à região de Pench. Cercado por vegetação, oferece um ambiente tranquilo para apreciar a natureza e observar aves.")
      }
    }
  ],

  // 5. UJJAIN
  ujjain: [
    {
      name: { en: "Mahakaleshwar Jyotirlinga", es: "Mahakaleshwar Jyotirlinga", pt: "Mahakaleshwar Jyotirlinga" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Mahakaleshwar Temple is one of India's twelve Jyotirlingas and the spiritual heart of Ujjain. The ancient temple attracts devotees throughout the year and is particularly famous for its sacred rituals and religious atmosphere."),
        es: cleanText("El Templo Mahakaleshwar es uno de los doce Jyotirlingas de la India y el corazón espiritual de Ujjain. El antiguo templo atrae peregrinos durante todo el año y es conocido por sus rituales y ambiente religioso."),
        pt: cleanText("O Templo Mahakaleshwar é um dos doze Jyotirlingas da Índia e o coração espiritual de Ujjain. O antigo templo recebe peregrinos durante todo o ano e é conhecido por seus rituais sagrados.")
      }
    },
    {
      name: { en: "Kal Bhairav Temple", es: "Templo Kal Bhairav", pt: "Templo Kal Bhairav" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Kal Bhairav Temple is an important spiritual attraction in Ujjain dedicated to Lord Kal Bhairav. The temple has a distinctive religious tradition and is an important stop for visitors exploring the city's sacred heritage."),
        es: cleanText("El Templo Kal Bhairav es un importante lugar espiritual de Ujjain dedicado al dios Kal Bhairav. El templo posee una tradición religiosa particular y es una visita importante dentro del patrimonio sagrado de la ciudad."),
        pt: cleanText("O Templo Kal Bhairav é um importante local espiritual de Ujjain dedicado ao deus Kal Bhairav. O templo possui uma tradição religiosa distinta e é uma parada importante para conhecer o patrimônio sagrado da cidade.")
      }
    },
    {
      name: { en: "Ram Ghat", es: "Ram Ghat", pt: "Ram Ghat" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Ram Ghat is one of the most important ghats on the Shipra River. It is especially beautiful during evening rituals when the riverfront comes alive with lamps, prayers and devotional ceremonies."),
        es: cleanText("Ram Ghat es uno de los ghats más importantes del río Shipra. Es especialmente hermoso durante las ceremonias de la tarde, cuando la ribera se llena de lámparas, oraciones y rituales religiosos."),
        pt: cleanText("Ram Ghat é um dos ghats mais importantes do rio Shipra. O local ganha uma atmosfera especial durante os rituais noturnos, com lâmpadas, orações e cerimônias religiosas.")
      }
    },
    {
      name: { en: "Harsiddhi Temple", es: "Templo Harsiddhi", pt: "Templo Harsiddhi" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Harsiddhi Temple is one of Ujjain's revered Shakti temples. Its distinctive deep-stambhas and traditional architecture create a memorable spiritual atmosphere for visitors."),
        es: cleanText("El Templo Harsiddhi es uno de los templos Shakti más venerados de Ujjain. Sus característicos pilares de lámparas y su arquitectura tradicional crean una atmósfera espiritual única."),
        pt: cleanText("O Templo Harsiddhi é um dos templos Shakti mais reverenciados de Ujjain. Seus tradicionais pilares de lâmpadas e sua arquitetura criam uma atmosfera espiritual marcante.")
      }
    },
    {
      name: { en: "Mangalnath Temple", es: "Templo Mangalnath", pt: "Templo Mangalnath" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Mangalnath Temple is an ancient temple located in a peaceful part of Ujjain. It is traditionally associated with Mars and holds an important place in the city's religious heritage."),
        es: cleanText("El Templo Mangalnath es un antiguo templo situado en una zona tranquila de Ujjain. Tradicionalmente está relacionado con Marte y ocupa un lugar importante en el patrimonio religioso de la ciudad."),
        pt: cleanText("O Templo Mangalnath é um antigo templo localizado em uma área tranquila de Ujjain. Tradicionalmente associado a Marte, possui grande importância no patrimônio religioso da cidade.")
      }
    }
  ],

  // 6. BHOPAL
  bhopal: [
    {
      name: { en: "Upper Lake", es: "Lago Superior", pt: "Upper Lake" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Upper Lake is one of Bhopal's most iconic natural attractions and an important part of the city's identity as the City of Lakes. Visitors can enjoy scenic views, boating and peaceful sunsets around the lake."),
        es: cleanText("El Lago Superior es una de las atracciones naturales más emblemáticas de Bhopal y una parte importante de su identidad como Ciudad de los Lagos. Los visitantes pueden disfrutar de paseos en barco, paisajes y atardeceres."),
        pt: cleanText("O Upper Lake é uma das atrações naturais mais famosas de Bhopal e uma parte importante de sua identidade como Cidade dos Lagos. Os visitantes podem desfrutar de passeios de barco, paisagens e belos pores do sol.")
      }
    },
    {
      name: { en: "Taj-ul-Masajid", es: "Taj-ul-Masajid", pt: "Taj-ul-Masajid" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Taj-ul-Masajid is one of India's grandest mosques and a remarkable example of Islamic architecture. Its large domes, minarets and spacious courtyard make it an important landmark of Bhopal."),
        es: cleanText("Taj-ul-Masajid es una de las mezquitas más grandes de la India y un notable ejemplo de arquitectura islámica. Sus grandes cúpulas, minaretes y amplio patio la convierten en un importante monumento de Bhopal."),
        pt: cleanText("Taj-ul-Masajid é uma das maiores mesquitas da Índia e um impressionante exemplo da arquitetura islâmica. Suas grandes cúpulas, minaretes e amplo pátio são marcos importantes de Bhopal.")
      }
    },
    {
      name: { en: "Van Vihar National Park", es: "Parque Nacional Van Vihar", pt: "Parque Nacional Van Vihar" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("Van Vihar National Park is a unique urban wildlife park located beside Upper Lake. It provides visitors with an opportunity to observe a variety of animals and birds in a natural-looking environment."),
        es: cleanText("El Parque Nacional Van Vihar es un singular parque de vida silvestre situado junto al Lago Superior. Permite observar diferentes especies de animales y aves en un entorno natural."),
        pt: cleanText("O Parque Nacional Van Vihar é um parque urbano de vida selvagem localizado próximo ao Upper Lake. Os visitantes podem observar diferentes animais e aves em um ambiente semelhante ao natural.")
      }
    },
    {
      name: { en: "State Museum Bhopal", es: "Museo Estatal de Bhopal", pt: "Museu Estadual de Bhopal" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("The State Museum Bhopal showcases the history, art, archaeology and cultural traditions of Madhya Pradesh. Its collections include sculptures, paintings, inscriptions and historical artifacts."),
        es: cleanText("El Museo Estatal de Bhopal presenta la historia, el arte, la arqueología y las tradiciones culturales de Madhya Pradesh. Sus colecciones incluyen esculturas, pinturas, inscripciones y objetos históricos."),
        pt: cleanText("O Museu Estadual de Bhopal apresenta a história, arte, arqueologia e tradições culturais de Madhya Pradesh. Suas coleções incluem esculturas, pinturas, inscrições e artefatos históricos.")
      }
    },
    {
      name: { en: "Bhojpur Temple", es: "Templo de Bhojpur", pt: "Templo de Bhojpur" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Bhojpur Temple is a historic Shiva temple located near Bhopal and famous for its monumental architecture and enormous Shiva Lingam. The unfinished temple complex is an important example of medieval Indian architecture."),
        es: cleanText("El Templo de Bhojpur es un antiguo templo de Shiva situado cerca de Bhopal y famoso por su arquitectura monumental y enorme Shiva Lingam. El complejo inacabado es un importante ejemplo de arquitectura medieval india."),
        pt: cleanText("O Templo de Bhojpur é um templo histórico dedicado a Shiva, localizado perto de Bhopal e famoso por sua arquitetura monumental e enorme Shiva Lingam. O complexo inacabado é um importante exemplo da arquitetura medieval indiana.")
      }
    }
  ],

  // 7. GWALIOR
  gwalior: [
    {
      name: { en: "Gwalior Fort", es: "Fuerte de Gwalior", pt: "Forte de Gwalior" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Gwalior Fort is one of Madhya Pradesh's most impressive historic monuments. Built on a dramatic hilltop, the fort combines magnificent palaces, temples, sculptures and panoramic views over the city."),
        es: cleanText("El Fuerte de Gwalior es uno de los monumentos históricos más impresionantes de Madhya Pradesh. Situado sobre una colina, combina palacios, templos, esculturas y vistas panorámicas de la ciudad."),
        pt: cleanText("O Forte de Gwalior é um dos monumentos históricos mais impressionantes de Madhya Pradesh. Localizado no topo de uma colina, reúne palácios, templos, esculturas e vistas panorâmicas da cidade.")
      }
    },
    {
      name: { en: "Jai Vilas Palace", es: "Palacio Jai Vilas", pt: "Palácio Jai Vilas" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Jai Vilas Palace is a magnificent royal residence known for its European-inspired architecture and lavish interiors. The palace museum displays royal furniture, artwork and historic collections."),
        es: cleanText("El Palacio Jai Vilas es una magnífica residencia real conocida por su arquitectura de inspiración europea y sus lujosos interiores. El museo del palacio conserva muebles reales, obras de arte y colecciones históricas."),
        pt: cleanText("O Palácio Jai Vilas é uma magnífica residência real conhecida por sua arquitetura de inspiração europeia e interiores luxuosos. O museu apresenta móveis reais, obras de arte e coleções históricas.")
      }
    },
    {
      name: { en: "Sas Bahu Temple", es: "Templo Sas Bahu", pt: "Templo Sas Bahu" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Sas Bahu Temple is an elegant pair of ancient temples located within the Gwalior Fort complex. Their beautifully carved pillars, ceilings and sculptures showcase the artistic traditions of medieval India."),
        es: cleanText("El Templo Sas Bahu es un elegante conjunto de dos templos antiguos situado dentro del complejo del Fuerte de Gwalior. Sus pilares, techos y esculturas muestran la tradición artística de la India medieval."),
        pt: cleanText("O Templo Sas Bahu é um elegante conjunto de dois templos antigos localizado no complexo do Forte de Gwalior. Seus pilares, tetos e esculturas demonstram a tradição artística da Índia medieval.")
      }
    },
    {
      name: { en: "Tansen Tomb", es: "Tumba de Tansen", pt: "Túmulo de Tansen" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Tansen's Tomb is an important cultural landmark dedicated to the legendary Indian classical musician Tansen. The peaceful complex reflects Gwalior's deep connection with Indian classical music."),
        es: cleanText("La Tumba de Tansen es un importante monumento cultural dedicado al legendario músico clásico indio Tansen. El tranquilo complejo refleja la profunda relación de Gwalior con la música clásica india."),
        pt: cleanText("O Túmulo de Tansen é um importante marco cultural dedicado ao lendário músico clássico indiano Tansen. O complexo tranquilo representa a forte ligação de Gwalior com a música clássica indiana.")
      }
    },
    {
      name: { en: "Gujari Mahal", es: "Gujari Mahal", pt: "Gujari Mahal" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Gujari Mahal is a historic palace located within the Gwalior Fort complex and now houses an archaeological museum. Its collections include sculptures and artifacts representing the region's long cultural history."),
        es: cleanText("Gujari Mahal es un palacio histórico situado dentro del complejo del Fuerte de Gwalior y actualmente alberga un museo arqueológico. Su colección incluye esculturas y objetos históricos de la región."),
        pt: cleanText("Gujari Mahal é um palácio histórico localizado no complexo do Forte de Gwalior e atualmente abriga um museu arqueológico. Sua coleção inclui esculturas e artefatos que representam a história cultural da região.")
      }
    }
  ],

  // 8. OMKARESHWAR
  omkareshwar: [
    {
      name: { en: "Omkareshwar Jyotirlinga Temple", es: "Templo Omkareshwar Jyotirlinga", pt: "Templo Omkareshwar Jyotirlinga" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Omkareshwar Temple is one of the twelve sacred Jyotirlingas of India and the spiritual center of Omkareshwar. The temple is located on the sacred island of Mandhata, surrounded by the Narmada River."),
        es: cleanText("El Templo Omkareshwar es uno de los doce sagrados Jyotirlingas de la India y el centro espiritual de Omkareshwar. Está situado en la isla sagrada de Mandhata, rodeada por el río Narmada."),
        pt: cleanText("O Templo Omkareshwar é um dos doze Jyotirlingas sagrados da Índia e o centro espiritual de Omkareshwar. O templo está localizado na ilha sagrada de Mandhata, cercada pelo rio Narmada.")
      }
    },
    {
      name: { en: "Mamleshwar Temple", es: "Templo Mamleshwar", pt: "Templo Mamleshwar" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Mamleshwar Temple is an ancient Shiva temple located across the Narmada River from Omkareshwar. Its historic architecture and spiritual significance make it an important part of the pilgrimage experience."),
        es: cleanText("El Templo Mamleshwar es un antiguo templo dedicado a Shiva situado al otro lado del río Narmada desde Omkareshwar. Su arquitectura histórica y significado espiritual lo convierten en una visita importante."),
        pt: cleanText("O Templo Mamleshwar é um antigo templo dedicado a Shiva localizado do outro lado do rio Narmada em relação a Omkareshwar. Sua arquitetura histórica e importância espiritual fazem dele uma visita essencial.")
      }
    },
    {
      name: { en: "Siddhanath Temple", es: "Templo Siddhanath", pt: "Templo Siddhanath" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Siddhanath Temple is a historic temple known for its intricate stone carvings and traditional architecture. The temple provides visitors with an opportunity to experience Omkareshwar's ancient heritage."),
        es: cleanText("El Templo Siddhanath es un templo histórico conocido por sus detalladas esculturas de piedra y arquitectura tradicional. Permite conocer el antiguo patrimonio de Omkareshwar."),
        pt: cleanText("O Templo Siddhanath é um templo histórico conhecido por suas esculturas detalhadas em pedra e arquitetura tradicional. O local permite conhecer o antigo patrimônio de Omkareshwar.")
      }
    },
    {
      name: { en: "Ahilya Ghat", es: "Ahilya Ghat", pt: "Ahilya Ghat" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Ahilya Ghat is a peaceful riverside location along the Narmada River. Visitors can enjoy the spiritual atmosphere, traditional rituals and beautiful river views surrounding Omkareshwar."),
        es: cleanText("Ahilya Ghat es un tranquilo lugar junto al río Narmada. Los visitantes pueden disfrutar de la atmósfera espiritual, los rituales tradicionales y las hermosas vistas del río."),
        pt: cleanText("Ahilya Ghat é um tranquilo local às margens do rio Narmada. Os visitantes podem apreciar a atmosfera espiritual, os rituais tradicionais e as belas vistas do rio.")
      }
    },
    {
      name: { en: "Statue of Oneness", es: "Estatua de la Unidad", pt: "Estátua da Unidade" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("The Statue of Oneness is a major contemporary spiritual attraction at Omkareshwar. The monumental statue and surrounding Ekatma Dham complex provide a modern cultural and spiritual dimension to the destination."),
        es: cleanText("La Estatua de la Unidad es una importante atracción espiritual contemporánea de Omkareshwar. La estatua monumental y el complejo Ekatma Dham aportan una dimensión cultural y espiritual moderna al destino."),
        pt: cleanText("A Estátua da Unidade é uma importante atração espiritual contemporânea de Omkareshwar. A estátua monumental e o complexo Ekatma Dham acrescentam uma dimensão cultural e espiritual moderna ao destino.")
      }
    }
  ],

  // 9. PACHMARHI
  pachmarhi: [
    {
      name: { en: "Dhoopgarh", es: "Dhoopgarh", pt: "Dhoopgarh" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("Dhoopgarh is the highest point in the Satpura range and one of Pachmarhi's most popular viewpoints. It is especially famous for beautiful sunrise and sunset views over the surrounding hills."),
        es: cleanText("Dhoopgarh es el punto más alto de la cordillera Satpura y uno de los miradores más populares de Pachmarhi. Es especialmente famoso por sus hermosos amaneceres y atardeceres."),
        pt: cleanText("Dhoopgarh é o ponto mais alto da cordilheira Satpura e um dos mirantes mais populares de Pachmarhi. É especialmente famoso pelas belas vistas do nascer e do pôr do sol.")
      }
    },
    {
      name: { en: "Bee Falls", es: "Bee Falls", pt: "Bee Falls" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("Bee Falls is one of Pachmarhi's most beautiful waterfalls. Surrounded by dense greenery and rocky landscapes, the waterfall is a popular destination for nature lovers and outdoor explorers."),
        es: cleanText("Bee Falls es una de las cascadas más hermosas de Pachmarhi. Rodeada de vegetación densa y paisajes rocosos, es un destino popular para amantes de la naturaleza."),
        pt: cleanText("Bee Falls é uma das cachoeiras mais bonitas de Pachmarhi. Cercada por vegetação densa e paisagens rochosas, é um destino popular entre os amantes da natureza.")
      }
    },
    {
      name: { en: "Jatashankar Caves", es: "Cuevas de Jatashankar", pt: "Cavernas Jatashankar" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Jatashankar is a natural cave complex surrounded by rocky formations and greenery. The caves have strong religious significance and are traditionally associated with Lord Shiva."),
        es: cleanText("Jatashankar es un complejo de cuevas naturales rodeado de formaciones rocosas y vegetación. Las cuevas tienen una gran importancia religiosa y están tradicionalmente asociadas con el dios Shiva."),
        pt: cleanText("Jatashankar é um complexo de cavernas naturais cercado por formações rochosas e vegetação. As cavernas possuem grande importância religiosa e são tradicionalmente associadas ao deus Shiva.")
      }
    },
    {
      name: { en: "Pandav Caves", es: "Cuevas de Pandav", pt: "Cavernas Pandav" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Pandav Caves are ancient rock-cut caves surrounded by the beautiful landscape of Pachmarhi. According to local tradition, the caves are associated with the Pandavas and are an interesting combination of nature and mythology."),
        es: cleanText("Las Cuevas de Pandav son antiguas cuevas excavadas en la roca rodeadas por el hermoso paisaje de Pachmarhi. Según la tradición local, están relacionadas con los Pandavas y combinan naturaleza y mitología."),
        pt: cleanText("As Cavernas Pandav são antigas cavernas escavadas na rocha cercadas pelas belas paisagens de Pachmarhi. Segundo a tradição local, estão associadas aos Pandavas e combinam natureza e mitologia.")
      }
    },
    {
      name: { en: "Chauragarh Temple", es: "Templo Chauragarh", pt: "Templo Chauragarh" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Chauragarh Temple is a sacred hilltop temple dedicated to Lord Shiva. Reaching the temple involves a scenic climb through the Satpura landscape, making it both a spiritual and nature-oriented attraction."),
        es: cleanText("El Templo Chauragarh es un santuario situado en una colina y dedicado al dios Shiva. El recorrido hasta el templo atraviesa el paisaje de Satpura y combina espiritualidad con naturaleza."),
        pt: cleanText("O Templo Chauragarh é um templo sagrado localizado no topo de uma colina e dedicado ao deus Shiva. A caminhada até o templo atravessa a paisagem de Satpura, combinando espiritualidade e natureza.")
      }
    }
  ]
};

// Copy current cities
const finalCities = [...currentCities];

// Re-apply HEAD MP city objects, updating ONLY touristPlaces & famousPlacesToVisit
Object.keys(mpPlacesMap).forEach(cid => {
  const places = mpPlacesMap[cid];
  const headCityObj = headCities.find(c => c.id === cid);

  if (headCityObj) {
    const updatedCity = JSON.parse(JSON.stringify(headCityObj));
    updatedCity.touristPlaces = places;
    updatedCity.famousPlacesToVisit = places;

    const idx = finalCities.findIndex(c => c.id === cid);
    if (idx >= 0) {
      finalCities[idx] = updatedCity;
    } else {
      finalCities.push(updatedCity);
    }
  } else {
    // In case missing from HEAD
    const capName = cid.charAt(0).toUpperCase() + cid.slice(1);
    const newCityObj = {
      id: cid,
      stateId: "madhya-pradesh",
      isPublished: true,
      isDeleted: false,
      displayOrder: 10,
      name: { en: capName, es: capName, pt: capName },
      slug: { en: cid, es: cid, pt: cid },
      image: places[0]?.image || "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
      description: {
        en: `Explore the attractions and cultural highlights of ${capName}.`,
        es: `Explore las atracciones y aspectos culturales de ${capName}.`,
        pt: `Explore as atrações e aspectos culturais de ${capName}.`
      },
      seoTitle: { en: `${capName} Travel Guide`, es: `Guía de Viaje de ${capName}`, pt: `Guia de Viagem de ${capName}` },
      seoDesc: { en: `Discover ${capName} tourist places.`, es: `Descubre ${capName}: lugares para visitar.`, pt: `Descubra ${capName}: lugares para visitar.` },
      seoKeywords: { en: `${capName} tourism`, es: `turismo en ${capName}`, pt: `turismo em ${capName}` },
      touristPlaces: places,
      famousPlacesToVisit: places
    };

    const idx = finalCities.findIndex(c => c.id === cid);
    if (idx >= 0) {
      finalCities[idx] = newCityObj;
    } else {
      finalCities.push(newCityObj);
    }
  }
});

fs.writeFileSync(citiesFilePath, JSON.stringify(finalCities, null, 2), 'utf8');

console.log(`✅ RESTORED MP city original schema and updated ONLY touristPlaces for ${Object.keys(mpPlacesMap).length} MP cities! Total cities in file: ${finalCities.length}`);
