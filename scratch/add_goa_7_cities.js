const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');
let cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const now = new Date().toISOString();

const goaCitiesData = [
  {
    id: "panaji",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 1,
    name: { en: "Panaji", es: "Panaji", pt: "Panaji" },
    slug: { en: "panaji-goa", es: "panaji-goa", pt: "panaji-goa" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    description: {
      en: "Panaji, the capital of Goa, is a charming riverside city known for Portuguese heritage, colourful streets, historic churches, cultural landmarks, local markets and beautiful waterfronts.",
      es: "Panaji, la capital de Goa, es una encantadora ciudad junto al río conocida por su patrimonio portugués, calles coloridas, iglesias históricas, lugares culturales, mercados locales y hermosos paisajes costeros.",
      pt: "Panaji, a capital de Goa, é uma charmosa cidade às margens do rio, conhecida por seu patrimônio português, ruas coloridas, igrejas históricas, atrações culturais, mercados locais e belas paisagens costeiras."
    },
    overview: {
      en: "Panaji, also known as Panjim, is the capital of Goa and one of the state's most important cultural and heritage destinations. Located along the Mandovi River, the city beautifully combines Portuguese-influenced architecture with traditional Goan neighbourhoods, colourful heritage houses, historic churches, cultural institutions and lively markets. The famous Fontainhas quarter is particularly known for its colourful Indo-Portuguese houses, narrow streets and charming heritage atmosphere. Visitors can explore the historic centre, enjoy views of the Mandovi River, discover local markets, visit Miramar Beach and Dona Paula, and experience Goa's food, art and cultural traditions. Panaji also serves as an excellent base for exploring nearby Old Goa and other attractions across the state.",
      es: "Panaji, también conocida como Panjim, es la capital de Goa y uno de los destinos culturales e históricos más importantes del estado. Situada junto al río Mandovi, la ciudad combina maravillosamente la arquitectura de influencia portuguesa con barrios tradicionales de Goa, casas patrimoniales coloridas, iglesias históricas, instituciones culturales y mercados animados. El famoso barrio de Fontainhas destaca especialmente por sus casas indo-portuguesas, calles estrechas y encantador ambiente histórico. Los visitantes pueden explorar el centro histórico, disfrutar de las vistas del río Mandovi, descubrir mercados locales, visitar la playa de Miramar y Dona Paula, y conocer la gastronomía, el arte y las tradiciones culturales de Goa.",
      pt: "Panaji, também conhecida como Panjim, é a capital de Goa e um dos destinos culturais e históricos mais importantes do estado. Localizada às margens do rio Mandovi, a cidade combina de forma encantadora a arquitetura de influência portuguesa com bairros tradicionais de Goa, casas históricas coloridas, igrejas antigas, instituições culturais e mercados movimentados. O famoso bairro de Fontainhas destaca-se por suas casas indo-portuguesas coloridas, ruas estreitas e atmosfera histórica. Os visitantes podem explorar o centro histórico, apreciar as vistas do rio Mandovi, conhecer mercados locais, visitar a Praia de Miramar e Dona Paula e descobrir a gastronomia, arte e tradições culturais de Goa."
    },
    seoTitle: {
      en: "Panaji Tourist Places | Best Places to Visit in Panaji, Goa",
      es: "Lugares Turísticos de Panaji | Mejores Lugares para Visitar en Goa",
      pt: "Pontos Turísticos de Panaji | Melhores Lugares para Visitar em Goa"
    },
    seoDesc: {
      en: "Explore Panaji, the capital of Goa, with Fontainhas, historic churches, Miramar Beach, Dona Paula, local markets and beautiful heritage attractions.",
      es: "Descubre Panaji, la capital de Goa, con Fontainhas, iglesias históricas, la playa de Miramar, Dona Paula, mercados y atracciones patrimoniales.",
      pt: "Explore Panaji, a capital de Goa, com Fontainhas, igrejas históricas, Praia de Miramar, Dona Paula, mercados e atrações históricas."
    },
    seoKeywords: {
      en: "Panaji, Panjim, Panaji Goa, Goa Capital, Panaji Tourism, Panaji Tourist Places, Goa Heritage, Fontainhas, Miramar Beach, Dona Paula",
      es: "Panaji, Panjim, Panaji Goa, Capital de Goa, Turismo en Panaji, Fontainhas",
      pt: "Panaji, Panjim, Panaji Goa, Capital de Goa, Turismo em Panaji, Fontainhas"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Fontainhas", es: "Fontainhas", pt: "Fontainhas" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: {
          en: "Fontainhas is Panaji's famous Latin Quarter and one of the best places to experience Goa's Portuguese-influenced heritage. The neighbourhood is filled with colourful houses, tiled roofs, narrow lanes, decorative balconies and traditional architectural details. Walking through Fontainhas allows visitors to experience the historic character of old Panaji while discovering heritage buildings, cafés, art spaces and picturesque streets.",
          es: "Fontainhas es el famoso Barrio Latino de Panaji y uno de los mejores lugares para conocer el patrimonio de influencia portuguesa de Goa. El barrio está lleno de casas coloridas, tejados de tejas, calles estrechas, balcones decorativos y detalles arquitectónicos tradicionales. Pasear por Fontainhas permite conocer el carácter histórico de la antigua Panaji y descubrir edificios patrimoniales, cafés, espacios de arte y calles pintorescas.",
          pt: "Fontainhas é o famoso Bairro Latino de Panaji e um dos melhores lugares para conhecer a herança de influência portuguesa de Goa. O bairro possui casas coloridas, telhados de telha, ruas estreitas, varandas decorativas e detalhes arquitetônicos tradicionais. Caminhar por Fontainhas permite conhecer o caráter histórico da antiga Panaji e descobrir edifícios históricos, cafés, espaços de arte e ruas pitorescas."
        }
      },
      {
        name: { en: "Our Lady of the Immaculate Conception Church", es: "Iglesia de Nuestra Señora de la Inmaculada Concepción", pt: "Igreja de Nossa Senhora da Imaculada Conceição" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "The Church of Our Lady of the Immaculate Conception is one of Panaji's most recognisable landmarks. Its striking white façade and large staircase make it an important architectural and religious attraction. The church is prominently located in the city and is closely associated with the historic identity of Panaji.",
          es: "La Iglesia de Nuestra Señora de la Inmaculada Concepción es uno de los monumentos más reconocibles de Panaji. Su llamativa fachada blanca y su gran escalinata la convierten en un importante atractivo arquitectónico y religioso. La iglesia está situada en una zona destacada de la ciudad y forma parte de la identidad histórica de Panaji.",
          pt: "A Igreja de Nossa Senhora da Imaculada Conceição é um dos monumentos mais conhecidos de Panaji. Sua impressionante fachada branca e grande escadaria fazem dela uma importante atração arquitetônica e religiosa. A igreja está localizada em uma área de destaque da cidade e faz parte da identidade histórica de Panaji."
        }
      },
      {
        name: { en: "Miramar Beach", es: "Playa de Miramar", pt: "Praia de Miramar" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "Miramar Beach is a scenic sandy beach close to Panaji. Its open shoreline, Arabian Sea views and easy accessibility make it popular for relaxing walks, photography and sunset views. The beach provides a pleasant coastal experience while remaining close to the capital city.",
          es: "La playa de Miramar es una pintoresca playa de arena cerca de Panaji. Su costa abierta, vistas al mar Arábigo y fácil acceso la hacen popular para paseos, fotografía y contemplación del atardecer.",
          pt: "A Praia de Miramar é uma bela praia de areia perto de Panaji. Sua costa aberta, vistas para o Mar Arábico e fácil acesso fazem dela um local popular para caminhadas, fotografia e apreciação do pôr do sol."
        }
      },
      {
        name: { en: "Dona Paula", es: "Dona Paula", pt: "Dona Paula" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        description: {
          en: "Dona Paula is a scenic waterfront destination near Panaji known for its elevated viewpoint and panoramic views of the Arabian Sea and surrounding waterways. It is a popular sightseeing stop and offers beautiful coastal scenery for photography and relaxation.",
          es: "Dona Paula es un destino costero pintoresco cerca de Panaji conocido por su mirador elevado y sus vistas panorámicas del mar Arábigo y las vías fluviales cercanas.",
          pt: "Dona Paula é um destino costeiro pitoresco perto de Panaji conhecido por seu mirante elevado e pelas vistas panorâmicas do Mar Arábico e das águas ao redor."
        }
      },
      {
        name: { en: "Goa Science Centre", es: "Centro de Ciencias de Goa", pt: "Centro de Ciências de Goa" },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
        description: {
          en: "Goa Science Centre is an educational and interactive attraction where visitors can explore science and technology through exhibits and activities. It is particularly suitable for families, students and travellers looking for an educational experience in Panaji.",
          es: "El Centro de Ciencias de Goa es una atracción educativa e interactiva donde los visitantes pueden descubrir la ciencia y la tecnología mediante exposiciones y actividades. Es especialmente adecuado para familias y estudiantes.",
          pt: "O Centro de Ciências de Goa é uma atração educativa e interativa onde os visitantes podem explorar ciência e tecnologia através de exposições e atividades. É especialmente adequado para famílias e estudantes."
        }
      }
    ]
  },
  {
    id: "margao",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 2,
    name: { en: "Margao", es: "Margao", pt: "Margao" },
    slug: { en: "margao-goa", es: "margao-goa", pt: "margao-goa" },
    image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
    description: {
      en: "Margao is the cultural and commercial heart of South Goa, known for historic churches, traditional markets, heritage homes, temples, local food and beautiful beaches nearby.",
      es: "Margao es el corazón cultural y comercial del sur de Goa, conocido por sus iglesias históricas, mercados tradicionales, casas patrimoniales, templos, gastronomía local y hermosas playas cercanas.",
      pt: "Margao é o coração cultural e comercial do sul de Goa, conhecido por suas igrejas históricas, mercados tradicionais, casas históricas, templos, gastronomia local e belas praias próximas."
    },
    overview: {
      en: "Margao, also known as Madgaon, is one of the most important cities in South Goa and a major commercial and transportation centre. The city has a strong Goan identity, with historic churches, Hindu temples, traditional markets, old mansions and Indo-Portuguese architecture. The Holy Spirit Church is one of its important heritage landmarks, while Margao Market provides an opportunity to experience local spices, fresh produce, traditional products and Goan food culture. Margao is also an excellent base for exploring the famous beaches of South Goa, including Colva and Benaulim. The city offers travellers a combination of heritage, local culture, shopping and easy access to the southern coastline.",
      es: "Margao, también conocida como Madgaon, es una de las ciudades más importantes del sur de Goa y un importante centro comercial y de transporte. La ciudad conserva una fuerte identidad de Goa, con iglesias históricas, templos hindúes, mercados tradicionales, antiguas mansiones y arquitectura indo-portuguesa. La Iglesia del Espíritu Santo es uno de sus importantes monumentos patrimoniales, mientras que el Mercado de Margao permite conocer especias, productos frescos, artículos tradicionales y la gastronomía local. Margao también es una excelente base para explorar las famosas playas del sur de Goa, como Colva y Benaulim.",
      pt: "Margao, também conhecida como Madgaon, é uma das cidades mais importantes do sul de Goa e um importante centro comercial e de transporte. A cidade mantém uma forte identidade goesa, com igrejas históricas, templos hindus, mercados tradicionais, antigas mansões e arquitetura indo-portuguesa. A Igreja do Espírito Santo é um dos importantes monumentos históricos da cidade, enquanto o Mercado de Margao permite conhecer especiarias, produtos frescos, artigos tradicionais e a gastronomia local. Margao também é uma excelente base para explorar as famosas praias do sul de Goa, como Colva e Benaulim."
    },
    seoTitle: {
      en: "Margao Tourist Places | Best Places to Visit in Margao, Goa",
      es: "Lugares Turísticos de Margao | Qué Visitar en Margao, Goa",
      pt: "Pontos Turísticos de Margao | O Que Visitar em Margao, Goa"
    },
    seoDesc: {
      en: "Discover Margao in South Goa with historic churches, markets, heritage homes, temples and beautiful beaches nearby.",
      es: "Descubre Margao en el sur de Goa con iglesias históricas, mercados, casas patrimoniales, templos y hermosas playas cercanas.",
      pt: "Descubra Margao, no sul de Goa, com igrejas históricas, mercados, casas históricas, templos e belas praias próximas."
    },
    seoKeywords: {
      en: "Margao, Madgaon, Margao Goa, South Goa, Margao Tourism, Margao Tourist Places, Colva, Benaulim, Holy Spirit Church",
      es: "Margao, Madgaon, Margao Goa, Sur de Goa, Turismo en Margao, Colva",
      pt: "Margao, Madgaon, Margao Goa, Sul de Goa, Turismo em Margao, Colva"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Holy Spirit Church", es: "Iglesia del Espíritu Santo", pt: "Igreja do Espírito Santo" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "Holy Spirit Church is one of Margao's important historic religious landmarks. Its architecture and long association with the city make it an important part of Margao's cultural and religious heritage.",
          es: "La Iglesia del Espíritu Santo es uno de los principales monumentos religiosos históricos de Margao. Su arquitectura y su larga relación con la ciudad la convierten en una parte importante del patrimonio cultural y religioso de Margao.",
          pt: "A Igreja do Espírito Santo é um dos principais monumentos religiosos históricos de Margao. Sua arquitetura e longa ligação com a cidade fazem dela uma parte importante do patrimônio cultural e religioso de Margao."
        }
      },
      {
        name: { en: "Margao Municipal Garden", es: "Jardín Municipal de Margao", pt: "Jardim Municipal de Margao" },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: {
          en: "Margao Municipal Garden is a green urban space where visitors can relax and enjoy a quieter environment while experiencing the everyday atmosphere of the city.",
          es: "El Jardín Municipal de Margao es un espacio verde urbano donde los visitantes pueden relajarse y disfrutar de un ambiente tranquilo mientras conocen la vida cotidiana de la ciudad.",
          pt: "O Jardim Municipal de Margao é um espaço verde urbano onde os visitantes podem relaxar e desfrutar de um ambiente tranquilo enquanto conhecem o cotidiano da cidade."
        }
      },
      {
        name: { en: "Margao Market", es: "Mercado de Margao", pt: "Mercado de Margao" },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
        description: {
          en: "Margao Market is a lively local shopping area where visitors can find fresh produce, spices, fruits, vegetables, traditional products, clothing and local food items. It offers a good introduction to the everyday commercial culture of South Goa.",
          es: "El Mercado de Margao es una animada zona comercial donde los visitantes pueden encontrar productos frescos, especias, frutas, verduras, productos tradicionales, ropa y alimentos locales.",
          pt: "O Mercado de Margao é uma movimentada área comercial onde os visitantes encontram produtos frescos, especiarias, frutas, vegetais, produtos tradicionais, roupas e alimentos locais."
        }
      },
      {
        name: { en: "Colva Beach", es: "Playa de Colva", pt: "Praia de Colva" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "Colva Beach is one of the most famous beaches in South Goa. Its long sandy shoreline, palm trees and relaxed coastal environment make it an important attraction near Margao.",
          es: "La playa de Colva es una de las playas más famosas del sur de Goa. Su extensa costa de arena, palmeras y ambiente costero relajado la convierten en una importante atracción cerca de Margao.",
          pt: "A Praia de Colva é uma das praias mais famosas do sul de Goa. Sua longa faixa de areia, palmeiras e ambiente costeiro tranquilo fazem dela uma importante atração perto de Margao."
        }
      },
      {
        name: { en: "Benaulim Beach", es: "Playa de Benaulim", pt: "Praia de Benaulim" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        description: {
          en: "Benaulim Beach is a peaceful coastal destination near Margao known for its sandy shoreline, palm trees and relaxed atmosphere. It is suitable for travellers looking for a quieter beach experience.",
          es: "La playa de Benaulim es un destino costero tranquilo cerca de Margao conocido por su costa arenosa, palmeras y ambiente relajado.",
          pt: "A Praia de Benaulim é um destino costeiro tranquilo perto de Margao, conhecido por sua faixa de areia, palmeiras e atmosfera relaxante."
        }
      }
    ]
  },
  {
    id: "vasco-da-gama",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 3,
    name: { en: "Vasco da Gama", es: "Vasco da Gama", pt: "Vasco da Gama" },
    slug: { en: "vasco-da-gama-goa", es: "vasco-da-gama-goa", pt: "vasco-da-gama-goa" },
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    description: {
      en: "Vasco da Gama is an important coastal city in Goa known for maritime heritage, beaches, local markets, religious landmarks and access to Dabolim and Mormugao.",
      es: "Vasco da Gama es una importante ciudad costera de Goa conocida por su patrimonio marítimo, playas, mercados locales, lugares religiosos y acceso a Dabolim y Mormugao.",
      pt: "Vasco da Gama é uma importante cidade costeira de Goa conhecida por seu patrimônio marítimo, praias, mercados locais, locais religiosos e acesso a Dabolim e Mormugão."
    },
    overview: {
      en: "Vasco da Gama is one of Goa's important coastal urban centres and is closely connected with the Mormugao region and its maritime history. Located beside the Arabian Sea, the city provides access to several beaches, religious landmarks, museums and coastal attractions. Its proximity to Dabolim Airport makes it an important gateway for travellers arriving in Goa. Vasco has a distinct local atmosphere and offers visitors an opportunity to experience the everyday side of Goa while remaining close to beaches and maritime attractions. The nearby Bogmalo Beach and Naval Aviation Museum are particularly useful additions to sightseeing itineraries.",
      es: "Vasco da Gama es uno de los principales centros urbanos costeros de Goa y está estrechamente relacionado con la región de Mormugao y su historia marítima. Situada junto al mar Arábigo, la ciudad ofrece acceso a playas, lugares religiosos, museos y atracciones costeras. Su proximidad al aeropuerto de Dabolim la convierte en una importante puerta de entrada para los viajeros que llegan a Goa.",
      pt: "Vasco da Gama é um dos principais centros urbanos costeiros de Goa e está fortemente ligado à região de Mormugão e à sua história marítima. Localizada junto ao Mar Arábico, a cidade oferece acesso a praias, locais religiosos, museus e atrações costeiras. Sua proximidade ao Aeroporto de Dabolim faz dela uma importante porta de entrada para viajantes que chegam a Goa."
    },
    seoTitle: {
      en: "Vasco da Gama Tourist Places | Places to Visit in Vasco, Goa",
      es: "Lugares Turísticos de Vasco da Gama | Qué Visitar en Goa",
      pt: "Pontos Turísticos de Vasco da Gama | O Que Visitar em Goa"
    },
    seoDesc: {
      en: "Explore Vasco da Gama with Bogmalo Beach, Baina Beach, Naval Aviation Museum, Mormugao Harbour and coastal attractions.",
      es: "Descubre Vasco da Gama con la playa de Bogmalo, playa de Baina, Museo de Aviación Naval, puerto de Mormugao y más.",
      pt: "Explore Vasco da Gama com a Praia de Bogmalo, Praia de Baina, Museu de Aviação Naval, Porto de Mormugão e outras atrações."
    },
    seoKeywords: {
      en: "Vasco da Gama, Vasco Goa, Vasco Tourism, Mormugao, Bogmalo Beach, Baina Beach, Naval Aviation Museum, Dabolim",
      es: "Vasco da Gama, Vasco Goa, Turismo en Vasco, Mormugao, Bogmalo Beach",
      pt: "Vasco da Gama, Vasco Goa, Turismo em Vasco, Mormugão, Bogmalo Beach"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Baina Beach", es: "Playa de Baina", pt: "Praia de Baina" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "Baina Beach is a coastal destination in the Vasco area offering a sandy shoreline and convenient access from the city. It provides a simple seaside experience close to the urban centre.",
          es: "La playa de Baina es un destino costero de la zona de Vasco que ofrece una costa arenosa y fácil acceso desde la ciudad.",
          pt: "A Praia de Baina é um destino costeiro da região de Vasco que oferece uma faixa de areia e fácil acesso a partir da cidade."
        }
      },
      {
        name: { en: "Bogmalo Beach", es: "Playa de Bogmalo", pt: "Praia de Bogmalo" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: {
          en: "Bogmalo Beach is a scenic coastal destination near Vasco and Dabolim. Surrounded by greenery and the Arabian Sea, the beach offers a peaceful environment for visitors looking to relax by the coast.",
          es: "La playa de Bogmalo es un pintoresco destino costero cerca de Vasco y Dabolim. Rodeada de vegetación y del mar Arábigo, ofrece un ambiente tranquilo.",
          pt: "A Praia de Bogmalo é um destino costeiro pitoresco perto de Vasco e Dabolim. Cercada por vegetação e pelo Mar Arábico, oferece um ambiente tranquilo."
        }
      },
      {
        name: { en: "Naval Aviation Museum", es: "Museo de Aviación Naval", pt: "Museu de Aviação Naval" },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
        description: {
          en: "The Naval Aviation Museum showcases aircraft, aviation equipment and exhibits connected with Indian naval aviation. It offers visitors an educational and historical experience beyond Goa's beaches.",
          es: "El Museo de Aviación Naval presenta aeronaves, equipos y exposiciones relacionadas con la aviación naval india. Ofrece una experiencia educativa e histórica diferente de las playas de Goa.",
          pt: "O Museu de Aviação Naval apresenta aeronaves, equipamentos e exposições relacionadas à aviação naval indiana. Oferece uma experiência educativa e histórica diferente das praias de Goa."
        }
      },
      {
        name: { en: "Shri Damodar Temple", es: "Templo de Shri Damodar", pt: "Templo de Shri Damodar" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "Shri Damodar Temple is a religious landmark associated with the traditional cultural and spiritual life of the Vasco region. It provides visitors with an opportunity to discover Goa's Hindu religious heritage.",
          es: "El Templo de Shri Damodar es un lugar religioso relacionado con la vida cultural y espiritual tradicional de la región de Vasco.",
          pt: "O Templo de Shri Damodar é um local religioso ligado à vida cultural e espiritual tradicional da região de Vasco."
        }
      },
      {
        name: { en: "Mormugao Harbour", es: "Puerto de Mormugao", pt: "Porto de Mormugão" },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: {
          en: "Mormugao Harbour is an important maritime area connected with Goa's coastal history, port activities and maritime trade. The harbour region provides a different perspective on Goa's relationship with the Arabian Sea.",
          es: "El puerto de Mormugao es una importante zona marítima relacionada con la historia costera, las actividades portuarias y el comercio marítimo de Goa.",
          pt: "O Porto de Mormugão é uma importante área marítima relacionada à história costeira, às atividades portuárias e ao comércio marítimo de Goa."
        }
      }
    ]
  },
  {
    id: "mapusa",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 4,
    name: { en: "Mapusa", es: "Mapusa", pt: "Mapusa" },
    slug: { en: "mapusa-goa", es: "mapusa-goa", pt: "mapusa-goa" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    description: {
      en: "Mapusa is a lively commercial town in North Goa famous for its Friday Market, historic churches, temples, local shopping and access to popular northern beaches.",
      es: "Mapusa es una animada ciudad comercial del norte de Goa famosa por su mercado de los viernes, iglesias históricas, templos, compras locales y acceso a las playas del norte.",
      pt: "Mapusa é uma movimentada cidade comercial do norte de Goa, famosa por seu mercado de sexta-feira, igrejas históricas, templos, comércio local e acesso às praias do norte."
    },
    overview: {
      en: "Mapusa is one of North Goa's major commercial towns and an important gateway to the northern tourist belt. The town has a strong local character and is known for traditional markets, religious landmarks, local shops and everyday Goan commerce. The famous Friday Market attracts visitors interested in spices, fresh produce, clothing, handicrafts, souvenirs and traditional products. St. Jerome Church and Bodgeshwar Temple are important landmarks in the town. Mapusa also provides convenient access to popular destinations including Anjuna, Baga, Calangute and Vagator.",
      es: "Mapusa es una de las principales ciudades comerciales del norte de Goa y una importante puerta de entrada al cinturón turístico del norte. La ciudad conserva un fuerte carácter local y es conocida por sus mercados tradicionales, lugares religiosos, tiendas y comercio cotidiano. El famoso Mercado de los Viernes atrae a visitantes interesados en especias, productos frescos, ropa, artesanías, recuerdos y productos tradicionales.",
      pt: "Mapusa é uma das principais cidades comerciais do norte de Goa e uma importante porta de entrada para o circuito turístico do norte. A cidade mantém um forte caráter local e é conhecida por seus mercados tradicionais, locais religiosos, lojas e comércio cotidiano. O famoso Mercado de Sexta-feira atrai visitantes interessados em especiarias, produtos frescos, roupas, artesanato, lembranças e produtos tradicionais."
    },
    seoTitle: {
      en: "Mapusa Tourist Places | Best Places to Visit in Mapusa, Goa",
      es: "Lugares Turísticos de Mapusa | Mejores Lugares para Visitar",
      pt: "Pontos Turísticos de Mapusa | Melhores Lugares para Visitar"
    },
    seoDesc: {
      en: "Discover Mapusa with its famous Friday Market, historic churches, temples, local shopping and nearby North Goa beaches.",
      es: "Descubre Mapusa con su famoso Mercado de los Viernes, iglesias históricas, templos, mercados y playas cercanas.",
      pt: "Conheça Mapusa com seu famoso Mercado de Sexta-feira, igrejas históricas, templos, comércio local e praias próximas."
    },
    seoKeywords: {
      en: "Mapusa, Mapusa Goa, Mapusa Tourism, Friday Market, Mapusa Market, Bodgeshwar Temple, St Jerome Church, North Goa",
      es: "Mapusa, Mapusa Goa, Turismo en Mapusa, Mercado de los Viernes, Bodgeshwar",
      pt: "Mapusa, Mapusa Goa, Turismo em Mapusa, Mercado de Sexta-feira, Bodgeshwar"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Mapusa Friday Market", es: "Mercado de los Viernes de Mapusa", pt: "Mercado de Sexta-feira de Mapusa" },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
        description: {
          en: "The Friday Market is one of Mapusa's most famous attractions. The market features fresh produce, spices, clothing, handicrafts, household products, souvenirs and traditional Goan goods. It provides visitors with an opportunity to experience the everyday commercial life and local culture of North Goa.",
          es: "El Mercado de los Viernes es una de las atracciones más famosas de Mapusa. Ofrece productos frescos, especias, ropa, artesanías, artículos para el hogar, recuerdos y productos tradicionales de Goa.",
          pt: "O Mercado de Sexta-feira é uma das atrações mais famosas de Mapusa. O mercado oferece produtos frescos, especiarias, roupas, artesanato, artigos domésticos, lembranças e produtos tradicionais de Goa."
        }
      },
      {
        name: { en: "St. Jerome Church", es: "Iglesia de San Jerónimo", pt: "Igreja de São Jerônimo" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "St. Jerome Church is a historic religious landmark reflecting the Christian and Portuguese-influenced heritage of Mapusa. Its architecture and long-standing connection with the town make it an important cultural attraction.",
          es: "La Iglesia de San Jerónimo es un monumento religioso histórico que refleja la herencia cristiana y de influencia portuguesa de Mapusa.",
          pt: "A Igreja de São Jerônimo é um importante monumento religioso histórico que representa a herança cristã e de influência portuguesa de Mapusa."
        }
      },
      {
        name: { en: "Bodgeshwar Temple", es: "Templo de Bodgeshwar", pt: "Templo de Bodgeshwar" },
        image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
        description: {
          en: "Bodgeshwar Temple is an important Hindu temple in Mapusa and a significant religious landmark for the local community. The temple becomes particularly lively during religious festivals and celebrations.",
          es: "El Templo de Bodgeshwar es un importante templo hindú de Mapusa y un lugar religioso significativo para la comunidad local.",
          pt: "O Templo de Bodgeshwar é um importante templo hindu de Mapusa e um importante local religioso para a comunidade local."
        }
      },
      {
        name: { en: "Datta Temple", es: "Templo de Datta", pt: "Templo de Datta" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        description: {
          en: "Datta Temple is a peaceful religious attraction around Mapusa where visitors can experience local spiritual traditions and the cultural character of North Goa.",
          es: "El Templo de Datta es un tranquilo lugar religioso donde los visitantes pueden conocer las tradiciones espirituales locales y la cultura del norte de Goa.",
          pt: "O Templo de Datta é um tranquilo local religioso onde os visitantes podem conhecer as tradições espirituais locais e a cultura do norte de Goa."
        }
      },
      {
        name: { en: "Anjuna Beach", es: "Playa de Anjuna", pt: "Praia de Anjuna" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "Anjuna Beach is located close to Mapusa and is one of North Goa's best-known beaches. It is famous for its rocky coastline, sea views and vibrant surrounding atmosphere.",
          es: "La playa de Anjuna está cerca de Mapusa y es una de las playas más conocidas del norte de Goa. Es famosa por su costa rocosa, vistas al mar y ambiente animado.",
          pt: "A Praia de Anjuna fica perto de Mapusa e é uma das praias mais conhecidas do norte de Goa. É famosa por seu litoral rochoso, vistas para o mar e atmosfera movimentada."
        }
      }
    ]
  },
  {
    id: "ponda",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 5,
    name: { en: "Ponda", es: "Ponda", pt: "Ponda" },
    slug: { en: "ponda-goa", es: "ponda-goa", pt: "ponda-goa" },
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
    description: {
      en: "Ponda is an important cultural and pilgrimage destination in Goa, famous for historic Hindu temples, spice plantations, greenery and traditional Goan heritage.",
      es: "Ponda es un importante destino cultural y de peregrinación de Goa, famoso por sus templos hindúes históricos, plantaciones de especias, paisajes verdes y patrimonio tradicional.",
      pt: "Ponda é um importante destino cultural e de peregrinação de Goa, famoso por seus templos hindus históricos, plantações de especiarias, paisagens verdes e patrimônio tradicional."
    },
    overview: {
      en: "Ponda is one of Goa's most important cultural and pilgrimage destinations. The region is home to several famous Hindu temples, including Mangueshi, Shantadurga, Nagueshi and Mahalsa Narayani. Ponda also offers a greener side of Goa, with forests, spice plantations and agricultural landscapes. Visitors can explore traditional temples, learn about tropical spices and experience rural Goan culture. The region is particularly suitable for travellers interested in heritage, spirituality, architecture, nature and local traditions.",
      es: "Ponda es uno de los destinos culturales y de peregrinación más importantes de Goa. La región alberga varios templos hindúes famosos, como Mangueshi, Shantadurga, Nagueshi y Mahalsa Narayani. Ponda también ofrece un lado más verde de Goa, con bosques, plantaciones de especias y paisajes agrícolas. Los visitantes pueden explorar templos tradicionales, conocer especias tropicales y experimentar la cultura rural de Goa.",
      pt: "Ponda é um dos destinos culturais e de peregrinação mais importantes de Goa. A região abriga vários templos hindus famosos, como Mangueshi, Shantadurga, Nagueshi e Mahalsa Narayani. Ponda também oferece um lado mais verde de Goa, com florestas, plantações de especiarias e paisagens agrícolas. Os visitantes podem explorar templos tradicionais, conhecer especiarias tropicales e experimentar a cultura rural de Goa."
    },
    seoTitle: {
      en: "Ponda Tourist Places | Famous Temples & Places to Visit in Goa",
      es: "Lugares Turísticos de Ponda | Templos y Lugares para Visitar",
      pt: "Pontos Turísticos de Ponda | Templos e Lugares para Visitar"
    },
    seoDesc: {
      en: "Explore Ponda with Mangueshi Temple, Shantadurga Temple, Nagueshi Temple, Mahalsa Temple and tropical spice plantations.",
      es: "Descubre Ponda con los templos Mangueshi, Shantadurga, Nagueshi, Mahalsa y las plantaciones tropicales de especias.",
      pt: "Explore Ponda com os templos Mangueshi, Shantadurga, Nagueshi, Mahalsa e plantações tropicais de especiarias."
    },
    seoKeywords: {
      en: "Ponda, Ponda Goa, Ponda Tourism, Goa Temples, Mangueshi Temple, Shantadurga Temple, Nagueshi Temple, Mahalsa Temple, Spice Plantations",
      es: "Ponda, Ponda Goa, Turismo en Ponda, Templos de Goa, Mangueshi, Shantadurga",
      pt: "Ponda, Ponda Goa, Turismo em Ponda, Templos de Goa, Mangueshi, Shantadurga"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Shri Mangueshi Temple", es: "Templo Shri Mangueshi", pt: "Templo Shri Mangueshi" },
        image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
        description: {
          en: "Shri Mangueshi Temple is one of Goa's most famous Hindu temples and is dedicated to Lord Shiva. The temple is known for its traditional Goan architectural style, elegant structure, religious importance and peaceful surroundings.",
          es: "El Templo Shri Mangueshi es uno de los templos hindúes más famosos de Goa y está dedicado al Señor Shiva. Es conocido por su arquitectura tradicional de Goa, elegante estructura e importancia religiosa.",
          pt: "O Templo Shri Mangueshi é um dos templos hindus mais famosos de Goa e é dedicado ao Senhor Shiva. É conhecido por sua arquitetura tradicional goesa, estrutura elegante e importância religiosa."
        }
      },
      {
        name: { en: "Shantadurga Temple", es: "Templo de Shantadurga", pt: "Templo de Shantadurga" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "Shantadurga Temple is a major pilgrimage destination dedicated to Goddess Shantadurga. The temple is known for its traditional Goan architecture, peaceful surroundings and strong cultural significance.",
          es: "El Templo de Shantadurga es un importante destino de peregrinación dedicado a la diosa Shantadurga. Destaca por su arquitectura tradicional de Goa y su importancia cultural.",
          pt: "O Templo de Shantadurga é um importante destino de peregrinação dedicado à Deusa Shantadurga. Destaca-se por sua arquitetura tradicional goesa e importância cultural."
        }
      },
      {
        name: { en: "Shri Nagueshi Temple", es: "Templo Shri Nagueshi", pt: "Templo Shri Nagueshi" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        description: {
          en: "Shri Nagueshi Temple is a historic Hindu temple dedicated to Lord Shiva. Its traditional setting and religious significance make it an important part of the cultural heritage of the Ponda region.",
          es: "El Templo Shri Nagueshi es un templo hindú histórico dedicado al Señor Shiva. Su entorno tradicional e importancia religiosa lo convierten en una parte importante del patrimonio cultural de Ponda.",
          pt: "O Templo Shri Nagueshi é um templo hindu histórico dedicado ao Senhor Shiva. Seu ambiente tradicional e importância religiosa fazem dele uma parte importante do patrimônio cultural de Ponda."
        }
      },
      {
        name: { en: "Mahalsa Narayani Temple", es: "Templo de Mahalsa Narayani", pt: "Templo de Mahalsa Narayani" },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
        description: {
          en: "Mahalsa Narayani Temple is a traditional Hindu temple associated with Goddess Mahalsa. Its architecture, religious traditions and cultural significance make it an important stop on the Ponda temple circuit.",
          es: "El Templo de Mahalsa Narayani es un templo hindú tradicional asociado con la diosa Mahalsa. Su arquitectura, tradiciones religiosas e importancia cultural lo convierten en una visita importante.",
          pt: "O Templo de Mahalsa Narayani é um templo hindu tradicional associado à Deusa Mahalsa. Sua arquitetura, tradições religiosas e importância cultural fazem dele uma importante atração."
        }
      },
      {
        name: { en: "Spice Plantations", es: "Plantaciones de Especias", pt: "Plantações de Especiarias" },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: {
          en: "The spice plantations around Ponda provide visitors with an opportunity to discover tropical plants, spices and traditional farming practices. The green surroundings offer a nature-focused experience and introduce travellers to an important part of Goa's rural landscape.",
          es: "Las plantaciones de especias alrededor de Ponda permiten conocer plantas tropicales, especias y prácticas agrícolas tradicionales. Sus paisajes verdes ofrecen una experiencia relacionada con la naturaleza y muestran una parte importante del entorno rural de Goa.",
          pt: "As plantações de especiarias ao redor de Ponda permitem conhecer plantas tropicais, especiarias e práticas agrícolas tradicionais. Os ambientes verdes oferecem uma experiência ligada à natureza e mostram uma parte importante da paisagem rural de Goa."
        }
      }
    ]
  },
  {
    id: "bicholim",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 6,
    name: { en: "Bicholim", es: "Bicholim", pt: "Bicholim" },
    slug: { en: "bicholim-goa", es: "bicholim-goa", pt: "bicholim-goa" },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
    description: {
      en: "Bicholim is a peaceful destination in North Goa known for Mayem Lake, Arvalem Waterfall, ancient caves, temples, forests and scenic countryside.",
      es: "Bicholim es un destino tranquilo del norte de Goa conocido por el lago Mayem, la cascada de Arvalem, antiguas cuevas, templos, bosques y paisajes rurales.",
      pt: "Bicholim é um destino tranquilo no norte de Goa conhecido pelo Lago Mayem, Cachoeira de Arvalem, antigas cavernas, templos, florestas e paisagens rurais."
    },
    overview: {
      en: "Bicholim offers a quieter and more nature-oriented side of Goa away from the busy coastal tourist belt. The region is surrounded by green hills, forests, villages and water bodies. Mayem Lake is one of its major attractions, offering scenic surroundings and a peaceful environment. The wider area also provides access to Arvalem Waterfall, Arvalem Caves, Rudreshwar Temple and Saptakoteshwar Temple. Bicholim is particularly suitable for travellers who want to explore Goa's natural landscapes, historic sites, religious heritage and rural environment.",
      es: "Bicholim ofrece un lado más tranquilo y orientado a la naturaleza de Goa, lejos de las zonas costeras más concurridas. La región está rodeada de colinas verdes, bosques, pueblos y cuerpos de agua. El lago Mayem es uno de sus principales atractivos y ofrece paisajes pintorescos y un ambiente tranquilo. La zona también permite visitar la cascada de Arvalem, las cuevas de Arvalem, el templo de Rudreshwar y el templo de Saptakoteshwar.",
      pt: "Bicholim oferece um lado mais tranquilo e voltado para a natureza em Goa, longe das áreas costeiras mais movimentadas. A região é cercada por colinas verdes, florestas, vilas e corpos d'água. O Lago Mayem é uma de suas principais atrações e oferece paisagens bonitas e um ambiente tranquilo. A região também permite visitar a Cachoeira de Arvalem, as Cavernas de Arvalem, o Templo de Rudreshwar e o Templo de Saptakoteshwar."
    },
    seoTitle: {
      en: "Bicholim Tourist Places | Mayem Lake, Waterfalls & Heritage",
      es: "Lugares Turísticos de Bicholim | Lago Mayem, Cascadas y Patrimonio",
      pt: "Pontos Turísticos de Bicholim | Lago Mayem, Cachoeiras e Patrimônio"
    },
    seoDesc: {
      en: "Discover Bicholim with Mayem Lake, Arvalem Waterfall, ancient caves, temples and beautiful natural landscapes in North Goa.",
      es: "Descubre Bicholim con el lago Mayem, la cascada de Arvalem, cuevas antiguas, templos y paisajes naturales del norte de Goa.",
      pt: "Conheça Bicholim com o Lago Mayem, Cachoeira de Arvalem, cavernas antigas, templos e belas paisagens naturais do norte de Goa."
    },
    seoKeywords: {
      en: "Bicholim, Bicholim Goa, Mayem Lake, Arvalem Waterfall, Arvalem Caves, Rudreshwar Temple, Saptakoteshwar Temple, North Goa",
      es: "Bicholim, Bicholim Goa, Lago Mayem, Cascada Arvalem, Cuevas Arvalem",
      pt: "Bicholim, Bicholim Goa, Lago Mayem, Cachoeira Arvalem, Cavernas Arvalem"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Mayem Lake", es: "Lago Mayem", pt: "Lago Mayem" },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
        description: {
          en: "Mayem Lake is a peaceful freshwater lake surrounded by green hills, trees and village landscapes. Its scenic environment makes it a pleasant destination for relaxation, photography and nature experiences away from Goa's busy coastal areas.",
          es: "El lago Mayem es un tranquilo lago de agua dulce rodeado de colinas verdes, árboles y paisajes rurales. Su entorno pintoresco es ideal para relajarse, tomar fotografías y disfrutar de la naturaleza.",
          pt: "O Lago Mayem é um tranquilo lago de água doce cercado por colinas verdes, árvores e paisagens rurais. Seu ambiente pitoresco é ideal para relaxar, fotografar e apreciar a natureza."
        }
      },
      {
        name: { en: "Arvalem Waterfall", es: "Cascada de Arvalem", pt: "Cachoeira de Arvalem" },
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80",
        description: {
          en: "Arvalem Waterfall, also known as Harvalem Falls, is a scenic seasonal waterfall surrounded by greenery and rocky landscapes. The waterfall becomes especially impressive during the monsoon season and is located near the Arvalem Caves and Rudreshwar Temple.",
          es: "La cascada de Arvalem, también conocida como Harvalem Falls, es una pintoresca cascada estacional rodeada de vegetación y paisajes rocosos. Es especialmente impresionante durante el monzón.",
          pt: "A Cachoeira de Arvalem, também conhecida como Harvalem Falls, é uma bela cachoeira sazonal cercada por vegetação e paisagens rochosas. Fica especialmente impressionante durante as monções."
        }
      },
      {
        name: { en: "Arvalem Caves", es: "Cuevas de Arvalem", pt: "Cavernas de Arvalem" },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
        description: {
          en: "The Arvalem Caves are ancient rock-cut caves located close to the waterfall. The site has archaeological and cultural importance and adds a historical dimension to a nature-focused visit around Bicholim.",
          es: "Las Cuevas de Arvalem son antiguas cuevas excavadas en roca situadas cerca de la cascada. El lugar posee importancia arqueológica y cultural.",
          pt: "As Cavernas de Arvalem são antigas cavernas escavadas na rocha localizadas perto da cachoeira. O local possui importância arqueológica e cultural."
        }
      },
      {
        name: { en: "Rudreshwar Temple", es: "Templo de Rudreshwar", pt: "Templo de Rudreshwar" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "Rudreshwar Temple is a religious landmark near the Arvalem area. Its location close to natural attractions allows visitors to combine sightseeing, cultural exploration and a spiritual experience.",
          es: "El Templo de Rudreshwar es un lugar religioso cerca de Arvalem. Su ubicación próxima a atracciones naturales permite combinar naturaleza, cultura y espiritualidad.",
          pt: "O Templo de Rudreshwar é um importante local religioso perto de Arvalem. Sua localização próxima a atrações naturais permite combinar natureza, cultura e espiritualidade."
        }
      },
      {
        name: { en: "Saptakoteshwar Temple", es: "Templo de Saptakoteshwar", pt: "Templo de Saptakoteshwar" },
        image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
        description: {
          en: "Saptakoteshwar Temple is an important historic Hindu temple in the wider North Goa region. Its religious importance and traditional architecture make it a valuable addition to cultural itineraries.",
          es: "El Templo de Saptakoteshwar es un importante templo hindú histórico de la región del norte de Goa. Su importancia religiosa y arquitectura tradicional lo convierten en una visita cultural destacada.",
          pt: "O Templo de Saptakoteshwar é um importante templo hindu histórico na região norte de Goa. Sua importância religiosa e arquitetura tradicional fazem dele uma atração cultural importante."
        }
      }
    ]
  },
  {
    id: "pernem",
    stateId: "goa",
    isPublished: true,
    isDeleted: false,
    displayOrder: 7,
    name: { en: "Pernem", es: "Pernem", pt: "Pernem" },
    slug: { en: "pernem-goa", es: "pernem-goa", pt: "pernem-goa" },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    description: {
      en: "Pernem is a scenic destination in North Goa known for peaceful beaches, traditional villages, temples, natural landscapes and historic Fort Tiracol.",
      es: "Pernem es un destino pintoresco del norte de Goa conocido por sus playas tranquilas, pueblos tradicionales, templos, paisajes naturales y el histórico Fuerte de Tiracol.",
      pt: "Pernem é um destino pitoresco no norte de Goa conhecido por suas praias tranquilas, vilas tradicionais, templos, paisagens naturais e pelo histórico Forte de Tiracol."
    },
    overview: {
      en: "Pernem is located in northern Goa and offers a combination of beaches, nature, local culture and heritage. The region is known for popular coastal destinations such as Arambol, Mandrem and Querim, while Fort Tiracol provides an important historical attraction overlooking the Tiracol River and Arabian Sea. Pernem has a relatively relaxed character compared with some of the busier tourist centres of North Goa. Visitors can explore beaches, traditional villages, religious sites and scenic landscapes while experiencing a quieter side of Goa.",
      es: "Pernem está situada en el norte de Goa y ofrece una combinación de playas, naturaleza, cultura local y patrimonio. La región es conocida por destinos costeros como Arambol, Mandrem y Querim, mientras que el Fuerte de Tiracol ofrece una importante atracción histórica con vistas al río Tiracol y al mar Arábigo. Pernem tiene un ambiente relativamente tranquilo en comparación con algunos de los centros turísticos más concurridos del norte de Goa.",
      pt: "Pernem está localizada no norte de Goa e oferece uma combinação de praias, natureza, cultura local e patrimônio. A região é conhecida por destinos costeiros como Arambol, Mandrem e Querim, enquanto o Forte de Tiracol oferece uma importante atração histórica com vista para o rio Tiracol e o Mar Arábico. Pernem possui uma atmosfera relativamente tranquila em comparação com alguns dos centros turísticos mais movimentados do norte de Goa."
    },
    seoTitle: {
      en: "Pernem Tourist Places | Best Places to Visit in Pernem, Goa",
      es: "Lugares Turísticos de Pernem | Mejores Lugares para Visitar",
      pt: "Pontos Turísticos de Pernem | Melhores Lugares para Visitar"
    },
    seoDesc: {
      en: "Explore Pernem with Arambol Beach, Mandrem Beach, Querim Beach, Fort Tiracol, temples and beautiful natural landscapes.",
      es: "Descubre Pernem con la playa de Arambol, Mandrem, Querim, el Fuerte de Tiracol, templos y hermosos paisajes naturales.",
      pt: "Explore Pernem com a Praia de Arambol, Mandrem, Querim, Forte de Tiracol, templos e belas paisagens naturais."
    },
    seoKeywords: {
      en: "Pernem, Pernem Goa, Pernem Tourism, Arambol, Mandrem, Querim Beach, Tiracol Fort, North Goa, Goa Beaches",
      es: "Pernem, Pernem Goa, Turismo en Pernem, Arambol, Mandrem, Fuerte Tiracol",
      pt: "Pernem, Pernem Goa, Turismo em Pernem, Arambol, Mandrem, Forte Tiracol"
    },
    updatedAt: now,
    touristPlaces: [
      {
        name: { en: "Arambol Beach", es: "Playa de Arambol", pt: "Praia de Arambol" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "Arambol Beach is a well-known North Goa beach recognised for its broad sandy coastline, relaxed atmosphere and beautiful natural surroundings. The destination is popular for beach walks, sunset views and its distinctive international traveller culture.",
          es: "La playa de Arambol es una conocida playa del norte de Goa, reconocida por su amplia costa de arena, ambiente relajado y hermosos paisajes naturales. Es popular por sus paseos, atardeceres y ambiente internacional.",
          pt: "A Praia de Arambol é uma conhecida praia do norte de Goa, reconhecida por sua ampla faixa de areia, atmosfera descontraída e belas paisagens naturais. É popular para caminhadas, pores do sol e seu ambiente internacional."
        }
      },
      {
        name: { en: "Mandrem Beach", es: "Playa de Mandrem", pt: "Praia de Mandrem" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: {
          en: "Mandrem Beach is known for its soft sandy shoreline, palm trees and peaceful coastal environment. It provides a quieter alternative to some of the more crowded beaches of North Goa and is suitable for travellers seeking relaxation.",
          es: "La playa de Mandrem es conocida por su suave costa arenosa, palmeras y ambiente costero tranquilo. Es una alternativa más relajada a algunas de las playas más concurridas del norte de Goa.",
          pt: "A Praia de Mandrem é conhecida por sua faixa de areia macia, palmeiras e ambiente costeiro tranquilo. É uma alternativa mais sossegada a algumas das praias mais movimentadas do norte de Goa."
        }
      },
      {
        name: { en: "Fort Tiracol", es: "Fuerte de Tiracol", pt: "Forte de Tiracol" },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: {
          en: "Fort Tiracol is a historic fort situated on a hill overlooking the Tiracol River and the Arabian Sea. Its elevated position provides impressive coastal views, while its historic structure adds an important heritage element to the Pernem region.",
          es: "El Fuerte de Tiracol es una fortaleza histórica situada sobre una colina con vistas al río Tiracol y al mar Arábigo. Su ubicación elevada ofrece impresionantes vistas de la costa y su estructura aporta un importante elemento patrimonial.",
          pt: "O Forte de Tiracol é uma fortaleza histórica localizada em uma colina com vista para o rio Tiracol e o Mar Arábico. Sua posição elevada oferece belas vistas da costa e sua estrutura representa um importante elemento histórico."
        }
      },
      {
        name: { en: "Querim Beach", es: "Playa de Querim", pt: "Praia de Querim" },
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        description: {
          en: "Querim Beach is one of the quieter coastal destinations in northern Goa. Its natural surroundings, open shoreline and relatively peaceful environment make it suitable for travellers who want to explore a less crowded side of Goa.",
          es: "La playa de Querim es uno de los destinos costeros más tranquilos del norte de Goa. Su entorno natural, costa abierta y ambiente apacible la hacen ideal para quienes desean descubrir una parte menos concurrida de Goa.",
          pt: "A Praia de Querim é um dos destinos costeiros mais tranquilos do norte de Goa. Seu ambiente natural, litoral aberto e atmosfera sossegada são ideais para quem deseja conhecer um lado menos movimentado de Goa."
        }
      },
      {
        name: { en: "Bhagwati Temple", es: "Templo de Bhagwati", pt: "Templo de Bhagwati" },
        image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
        description: {
          en: "Bhagwati Temple is a traditional Hindu religious site in the Pernem region. The temple reflects the area's local religious traditions and provides visitors with an opportunity to experience the cultural heritage of northern Goa.",
          es: "El Templo de Bhagwati es un tradicional lugar religioso hindú de la región de Pernem. Refleja las tradiciones religiosas locales y el patrimonio cultural del norte de Goa.",
          pt: "O Templo de Bhagwati é um tradicional local religioso hindu da região de Pernem. Representa as tradições religiosas locais e o patrimônio cultural do norte de Goa."
        }
      }
    ]
  }
];

goaCitiesData.forEach(newCity => {
  const existingIdx = cities.findIndex(c => c.id === newCity.id || c.slug === newCity.id || c.slug?.en === newCity.slug.en);
  if (existingIdx !== -1) {
    cities[existingIdx] = { ...cities[existingIdx], ...newCity };
    console.log(`Updated existing city: ${newCity.id}`);
  } else {
    cities.push(newCity);
    console.log(`Added new city: ${newCity.id}`);
  }
});

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf-8');
console.log(`Successfully updated/added 7 Goa cities in cities.json!`);
