import fs from 'fs';
import path from 'path';

const statesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'states.json');
const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');

const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

// 1. UPDATE DELHI STATE
const delhiStateData = {
  id: "delhi",
  displayOrder: 13,
  isPublished: true,
  isDeleted: false,
  updatedAt: new Date().toISOString(),
  name: {
    en: "Delhi",
    es: "Delhi",
    pt: "Delhi"
  },
  slug: {
    en: "delhi",
    es: "delhi",
    pt: "delhi"
  },
  image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
  description: {
    en: "Delhi is the capital territory of India and one of the country's most fascinating destinations, where centuries of history meet a rapidly developing modern metropolis. From magnificent Mughal monuments and ancient archaeological sites to grand government buildings, colourful markets, temples, museums, gardens and famous street food, Delhi offers an extraordinary variety of experiences.",
    es: "Delhi es el territorio capital de la India y uno de los destinos más fascinantes del país, donde siglos de historia se encuentran con una moderna y dinámica metrópolis. Desde magníficos monumentos mogoles y antiguos sitios arqueológicos hasta grandes edificios gubernamentales, mercados coloridos, templos, museos, jardines y famosa comida callejera, Delhi ofrece una enorme variedad de experiencias.",
    pt: "Delhi é o território da capital da Índia e um dos destinos mais fascinantes do país, onde séculos de história se encontram com uma metrópole moderna e dinâmica. De magníficos monumentos mogóis e sítios arqueológicos antigos a grandes edifícios governamentais, mercados coloridos, templos, museus, jardins e famosa comida de rua, Delhi oferece uma enorme variedade de experiências."
  },
  overview: {
    en: `<h2>Discover Delhi – Where India's Past Meets Its Modern Spirit</h2>\n\n<p>Delhi is a city of extraordinary historical depth and cultural diversity. For centuries, the region has been associated with powerful kingdoms, empires, architectural movements and changing political centres. Today, Delhi combines this remarkable heritage with modern infrastructure, contemporary neighbourhoods, shopping districts, business centres and a vibrant food culture.</p>\n\n<p>The city offers travellers an opportunity to explore several different sides of India within a single destination. <strong>Old Delhi</strong> introduces visitors to the atmosphere of historic Shahjahanabad through the Red Fort, Jama Masjid, Chandni Chowk, traditional markets and famous street food. <strong>New Delhi</strong>, on the other hand, showcases broad avenues, monumental government buildings, museums, memorials and planned urban spaces.</p>\n\n<h3>World Heritage & Historical Monuments</h3>\n\n<p>Delhi is home to three major UNESCO World Heritage monuments: <strong>Qutub Minar, Humayun's Tomb and the Red Fort</strong>. These monuments represent different periods of Delhi's architectural and political history.</p>\n\n<h3>Old Delhi & Mughal Heritage</h3>\n\n<p>Old Delhi is one of the most atmospheric parts of the capital. The Red Fort, Jama Masjid, Chandni Chowk, historic religious buildings, old havelis and traditional markets create a distinctive cultural landscape.</p>\n\n<h3>New Delhi & Colonial Architecture</h3>\n\n<p>The New Delhi area features important landmarks associated with India's modern political history, including Rashtrapati Bhavan, India Gate, government avenues, museums and memorials.</p>\n\n<h3>Religious Diversity</h3>\n\n<p>Delhi reflects India's diverse religious traditions through Hindu temples, Sikh gurdwaras, mosques, churches, Jain temples and Buddhist sites.</p>\n\n<h3>Markets & Shopping</h3>\n\n<p>Delhi is also a major shopping destination. Visitors can explore traditional markets, handicraft centres, modern shopping districts, bazaars and cultural marketplaces.</p>\n\n<h3>Food & Culinary Experiences</h3>\n\n<p>Food is an important part of experiencing Delhi. The city is particularly known for North Indian and Mughlai cuisine, street food, chaat, kebabs, parathas, sweets and a wide range of regional Indian dishes.</p>`,
    es: `<h2>Descubre Delhi – Donde el Pasado de la India se Encuentra con la Modernidad</h2>\n\n<p>Delhi es una ciudad con una extraordinaria profundidad histórica y una enorme diversidad cultural. Durante siglos, la región estuvo relacionada con poderosos reinos, imperios, diferentes tradiciones arquitectónicas y cambios políticos. Actualmente, Delhi combina este impresionante patrimonio con modernas infraestructuras, barrios contemporáneos, zonas comerciales, centros empresariales y una vibrante cultura gastronómica.</p>\n\n<p>La ciudad permite descubrir diferentes aspectos de la India en un solo destino. <strong>Old Delhi</strong> ofrece una experiencia relacionada con la histórica Shahjahanabad a través del Red Fort, Jama Masjid, Chandni Chowk, mercados tradicionales y comida callejera. <strong>New Delhi</strong>, por otro lado, presenta amplias avenidas, edificios gubernamentales monumentales, museos, monumentos y espacios urbanos planificados.</p>\n\n<h3>Patrimonio Mundial y Monumentos Históricos</h3>\n\n<p>Delhi alberga tres importantes monumentos declarados Patrimonio Mundial de la UNESCO: <strong>Qutub Minar, Humayun's Tomb y Red Fort</strong>.</p>\n\n<h3>Old Delhi y Patrimonio Mogol</h3>\n\n<p>Old Delhi es una de las zonas con mayor personalidad de la capital. Red Fort, Jama Masjid, Chandni Chowk, antiguos edificios religiosos, havelis y mercados tradicionales forman un paisaje cultural único.</p>\n\n<h3>New Delhi y Arquitectura Colonial</h3>\n\n<p>La zona de New Delhi presenta importantes lugares relacionados con la historia política moderna de la India, incluyendo Rashtrapati Bhavan, India Gate, avenidas monumentales, museos y memoriales.</p>\n\n<h3>Gastronomía</h3>\n\n<p>La gastronomía forma parte esencial de la experiencia de Delhi. La ciudad es conocida por la cocina del norte de la India, especialidades mogoles, comida callejera, chaat, kebabs, parathas y dulces tradicionales.</p>`,
    pt: `<h2>Descubra Delhi – Onde o Passado da Índia Encontra a Modernidade</h2>\n\n<p>Delhi é uma cidade de enorme profundidade histórica e grande diversidade cultural. Durante séculos, a região esteve associada a poderosos reinos, impérios, diferentes tradições arquitetônicas e importantes transformações políticas. Atualmente, Delhi combina esse patrimônio histórico com infraestrutura moderna, bairros contemporâneos, áreas comerciais, centros empresariais e uma cultura gastronômica vibrante.</p>\n\n<p>A cidade permite conhecer diferentes aspectos da Índia em um único destino. <strong>Old Delhi</strong> apresenta a atmosfera da histórica Shahjahanabad através do Red Fort, Jama Masjid, Chandni Chowk, mercados tradicionais e comida de rua. <strong>New Delhi</strong>, por outro lado, apresenta grandes avenidas, edifícios governamentais monumentais, museus, memoriais e áreas urbanas planejadas.</p>\n\n<h3>Patrimônio Mundial e Monumentos Históricos</h3>\n\n<p>Delhi possui três importantes monumentos classificados como Patrimônio Mundial da UNESCO: <strong>Qutub Minar, Humayun's Tomb e Red Fort</strong>.</p>\n\n<h3>Old Delhi e Patrimônio Mogol</h3>\n\n<p>Old Delhi é uma das áreas mais características da capital. Red Fort, Jama Masjid, Chandni Chowk, antigos edifícios religiosos, havelis e mercados tradicionais criam uma paisagem cultural única.</p>\n\n<h3>New Delhi e Arquitetura Colonial</h3>\n\n<p>A região de New Delhi apresenta importantes locais relacionados à história política moderna da Índia, incluindo Rashtrapati Bhavan, India Gate, grandes avenidas, museus e memoriais.</p>\n\n<h3>Gastronomia</h3>\n\n<p>A gastronomia é uma parte essencial da experiência em Delhi. A cidade é conhecida pela culinária do norte da Índia, especialidades mogóis, comida de rua, chaat, kebabs, parathas e doces tradicionais.</p>`
  },
  seoTitle: {
    en: "Delhi Tourism – History, Heritage, Culture, Food & Famous Attractions",
    es: "Turismo de Delhi – Historia, Patrimonio, Cultura, Gastronomía y Atracciones",
    pt: "Turismo de Delhi – História, Patrimônio, Cultura, Gastronomia e Atrações"
  },
  seoDesc: {
    en: "Explore Delhi with its historic monuments, Mughal heritage, markets, temples, museums, gardens, famous food and modern city attractions.",
    es: "Explora Delhi con sus monumentos históricos, patrimonio mogol, mercados, templos, museos, jardines, gastronomía y atracciones modernas.",
    pt: "Explore Delhi com seus monumentos históricos, patrimônio mogol, mercados, templos, museus, jardins, gastronomia e atrações modernas."
  },
  seoKeywords: {
    en: "Delhi Tourism, Delhi Travel, Delhi India, New Delhi, Old Delhi, Delhi Monuments, Delhi Heritage, Delhi Historical Places, Delhi Food, Delhi Markets, Delhi Culture, Delhi Sightseeing, Delhi Tour, India Capital, Mughal Heritage, Delhi Attractions",
    es: "Turismo de Delhi, Viajes a Delhi, Delhi India, New Delhi, Old Delhi, Monumentos de Delhi, Patrimonio de Delhi, Lugares Históricos de Delhi, Gastronomía de Delhi, Mercados de Delhi, Cultura de Delhi, Turismo en Delhi",
    pt: "Turismo de Delhi, Viagens para Delhi, Delhi Índia, New Delhi, Old Delhi, Monumentos de Delhi, Patrimônio de Delhi, Lugares Históricos de Delhi, Gastronomia de Delhi, Mercados de Delhi, Cultura de Delhi, Turismo em Delhi"
  }
};

const stateIdx = states.findIndex(s => s.id === 'delhi');
if (stateIdx >= 0) {
  states[stateIdx] = { ...states[stateIdx], ...delhiStateData };
} else {
  states.push(delhiStateData);
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Delhi state updated in states.json.');

// 2. DELHI CITIES DATA
const delhiCities = [
  // 1. NEW DELHI
  {
    id: "new-delhi",
    stateId: "delhi",
    displayOrder: 1,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "New Delhi", es: "Nueva Delhi", pt: "Nova Delhi" },
    slug: { en: "new-delhi", es: "nueva-delhi", pt: "nova-delhi" },
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    description: {
      en: "New Delhi is the planned central area of India's capital, known for monumental architecture, government buildings, museums, broad avenues, memorials, gardens and iconic landmarks such as India Gate and Rashtrapati Bhavan.",
      es: "New Delhi es la zona central planificada de la capital de la India, conocida por su arquitectura monumental, edificios gubernamentales, museos, amplias avenidas, memoriales, jardines y lugares emblemáticos como India Gate y Rashtrapati Bhavan.",
      pt: "New Delhi é a área central planejada da capital da Índia, conhecida por sua arquitetura monumental, edifícios governamentais, museus, grandes avenidas, memoriais, jardins e marcos como India Gate e Rashtrapati Bhavan."
    },
    overview: {
      en: `<h2>Explore New Delhi – The Grand Heart of India's Capital</h2>\n\n<p>New Delhi represents the monumental and planned side of India's capital. Wide avenues, landscaped areas, historic government buildings, museums, memorials and iconic public spaces give this part of the city a distinctive architectural identity.</p>\n\n<p>The area around <strong>India Gate and Kartavya Path</strong> is particularly important for sightseeing. Visitors can also explore Rashtrapati Bhavan, museums, memorials and nearby gardens.</p>\n\n<h3>Architecture</h3>\n\n<p>The architecture of New Delhi reflects the city's colonial-era planning and subsequent development as the capital of independent India. Grand buildings and carefully designed avenues create a formal urban landscape.</p>\n\n<h3>Culture & Museums</h3>\n\n<p>New Delhi is home to several important museums and cultural institutions, making it useful for travellers interested in history, art and national heritage.</p>\n\n<h3>Green Spaces</h3>\n\n<p>Lodhi Garden, Nehru Park and other green spaces provide a quieter contrast to the busy roads and commercial areas.</p>`,
      es: `<h2>Descubre New Delhi – El Gran Corazón de la Capital de la India</h2>\n\n<p>New Delhi representa el lado monumental y planificado de la capital de la India. Grandes avenidas, jardines, edificios históricos, museos, memoriales y espacios públicos forman una identidad arquitectónica única.</p>\n\n<p>La zona de <strong>India Gate y Kartavya Path</strong> es especialmente importante para el turismo. También se pueden visitar Rashtrapati Bhavan, museos, memoriales y jardines.</p>\n\n<h3>Arquitectura</h3>\n\n<p>La arquitectura de New Delhi refleja la planificación de la época colonial y el posterior desarrollo de la ciudad como capital de la India independiente.</p>\n\n<h3>Cultura y Museos</h3>\n\n<p>New Delhi alberga numerosos museos e instituciones culturales relacionadas con la historia, el arte y el patrimonio nacional.</p>\n\n<h3>Espacios Verdes</h3>\n\n<p>Lodhi Garden, Nehru Park y otros espacios verdes ofrecen zonas tranquilas dentro de la dinámica capital.</p>`,
      pt: `<h2>Explore New Delhi – O Grande Coração da Capital da Índia</h2>\n\n<p>New Delhi representa o lado monumental e planejado da capital indiana. Grandes avenidas, jardins, edifícios históricos, museus, memoriais e espaços públicos formam uma identidade arquitetônica única.</p>\n\n<p>A região de <strong>India Gate e Kartavya Path</strong> é especialmente importante para o turismo. Rashtrapati Bhavan, museus, memoriais e jardins também podem ser explorados.</p>\n\n<h3>Arquitetura</h3>\n\n<p>A arquitetura de New Delhi reflete o planejamento colonial e o desenvolvimento posterior da cidade como capital da Índia independente.</p>\n\n<h3>Cultura e Museus</h3>\n\n<p>New Delhi abriga vários museus e instituições culturais relacionadas à história, arte e patrimônio nacional.</p>\n\n<h3>Áreas Verdes</h3>\n\n<p>Lodhi Garden, Nehru Park e outros espaços verdes oferecem áreas tranquilas dentro da movimentada capital.</p>`
    },
    seoTitle: {
      en: "New Delhi Tourism | India Gate, Rashtrapati Bhavan & Museums",
      es: "Turismo de New Delhi | Puerta de la India y Palacio Presidencial",
      pt: "Turismo de New Delhi | Portão da Índia e Palácio Presidencial"
    },
    seoDesc: {
      en: "Explore New Delhi: India Gate, Rashtrapati Bhavan, Jantar Mantar, Lodhi Garden and National Museum.",
      es: "Descubre New Delhi: India Gate, Rashtrapati Bhavan, Jantar Mantar, Lodhi Garden y Museo Nacional.",
      pt: "Descubra New Delhi: India Gate, Rashtrapati Bhavan, Jantar Mantar, Lodhi Garden e Museu Nacional."
    },
    seoKeywords: {
      en: "New Delhi, New Delhi Tourism, India Gate, Rashtrapati Bhavan, Jantar Mantar, Lodhi Garden, National Museum",
      es: "New Delhi, Turismo de New Delhi, Puerta de la India, Palacio Presidencial, Jantar Mantar, Jardín Lodhi",
      pt: "New Delhi, Turismo de New Delhi, Portão da Índia, Palácio Presidencial, Jantar Mantar, Jardim Lodhi"
    },
    touristPlaces: [
      {
        name: { en: "India Gate", es: "Puerta de la India", pt: "Portão da Índia" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "India Gate is one of New Delhi's most recognizable landmarks and an important national memorial. The monumental arch stands within a broad landscaped area and is particularly atmospheric in the evening.",
          es: "India Gate es uno de los monumentos más reconocibles de New Delhi y un importante memorial nacional. El arco monumental se encuentra en una amplia zona ajardinada y resulta especialmente atractivo por la tarde.",
          pt: "India Gate é um dos monumentos mais reconhecidos de New Delhi e um importante memorial nacional. O arco monumental está localizado em uma ampla área ajardinada e é especialmente interessante ao entardecer."
        }
      },
      {
        name: { en: "Rashtrapati Bhavan", es: "Palacio Presidencial de la India", pt: "Palácio Presidencial da Índia" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Rashtrapati Bhavan is the official residence of the President of India and one of the most significant architectural landmarks of New Delhi. Its monumental scale and surrounding gardens make it an important part of the capital's heritage landscape.",
          es: "Rashtrapati Bhavan es la residencia oficial del Presidente de la India y uno de los monumentos arquitectónicos más importantes de New Delhi. Su escala monumental y sus jardines forman parte esencial del patrimonio de la capital.",
          pt: "Rashtrapati Bhavan é a residência oficial do Presidente da Índia e um dos principais marcos arquitetônicos de New Delhi. Sua escala monumental e seus jardins fazem parte importante do patrimônio da capital."
        }
      },
      {
        name: { en: "Jantar Mantar", es: "Observatorio Astronómico Jantar Mantar", pt: "Observatório Astronômico Jantar Mantar" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Jantar Mantar is a historic astronomical observatory featuring large masonry instruments designed for astronomical observations. It is an interesting attraction for visitors interested in science, history and architecture.",
          es: "Jantar Mantar es un histórico observatorio astronómico con grandes instrumentos construidos para realizar observaciones astronómicas. Es interesante para quienes disfrutan de la ciencia, la historia y la arquitectura.",
          pt: "Jantar Mantar é um observatório astronômico histórico com grandes instrumentos construídos para observações astronômicas. É uma atração interessante para quem gosta de ciência, história e arquitetura."
        }
      },
      {
        name: { en: "Lodhi Garden", es: "Jardín Lodhi", pt: "Jardim Lodhi" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Lodhi Garden combines landscaped green spaces with historic tombs and architectural remains. It offers a peaceful setting for walking, photography and exploring Delhi's medieval heritage.",
          es: "Lodhi Garden combina áreas verdes ajardinadas con tumbas históricas y restos arquitectónicos. Es un lugar tranquilo para caminar, tomar fotografías y descubrir el patrimonio medieval de Delhi.",
          pt: "Lodhi Garden combina áreas verdes com túmulos históricos e estruturas arquitetônicas. É um local tranquilo para caminhadas, fotografia e descoberta do patrimônio medieval de Delhi."
        }
      },
      {
        name: { en: "National Museum", es: "Museo Nacional", pt: "Museu Nacional" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "The National Museum presents collections associated with India's history, art, archaeology and cultural heritage. It is an important stop for visitors who want to understand India's long civilizational history.",
          es: "El National Museum presenta colecciones relacionadas con la historia, el arte, la arqueología y el patrimonio cultural de la India. Es una visita importante para comprender la larga historia de las civilizaciones indias.",
          pt: "O National Museum apresenta coleções relacionadas à história, arte, arqueologia e patrimônio cultural da Índia. É uma visita importante para compreender a longa história das civilizações indianas."
        }
      }
    ]
  },

  // 2. OLD DELHI
  {
    id: "old-delhi",
    stateId: "delhi",
    displayOrder: 2,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Old Delhi", es: "Old Delhi", pt: "Old Delhi" },
    slug: { en: "old-delhi", es: "old-delhi", pt: "old-delhi" },
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    description: {
      en: "Old Delhi is the historic heart of the capital, known for the Red Fort, Jama Masjid, Chandni Chowk, traditional markets, historic lanes, religious landmarks and legendary street food.",
      es: "Old Delhi es el corazón histórico de la capital, conocido por Red Fort, Jama Masjid, Chandni Chowk, mercados tradicionales, calles históricas, lugares religiosos y famosa comida callejera.",
      pt: "Old Delhi é o coração histórico da capital, conhecido pelo Red Fort, Jama Masjid, Chandni Chowk, mercados tradicionais, ruas históricas, locais religiosos e famosa comida de rua."
    },
    overview: {
      en: `<h2>Discover Old Delhi – A Journey Through India's Historic Capital</h2>\n\n<p>Old Delhi offers one of the most immersive historical experiences in the capital. The neighbourhood developed around the historic city of Shahjahanabad and continues to preserve a remarkable combination of Mughal architecture, religious buildings, markets, traditional businesses and food culture.</p>\n\n<p><strong>Chandni Chowk</strong> is one of the best-known areas, with narrow streets, markets, historic buildings and famous food establishments. The area has long been associated with trade, crafts and culinary traditions.</p>\n\n<h3>Mughal Heritage</h3>\n\n<p>The Red Fort and Jama Masjid are major landmarks of Old Delhi. Their scale and architectural character provide an insight into the historic importance of Shahjahanabad.</p>\n\n<h3>Markets</h3>\n\n<p>Old Delhi is famous for textiles, jewellery, spices, traditional products, wedding shopping, books and food. Different lanes specialize in different products.</p>\n\n<h3>Food Culture</h3>\n\n<p>Street food is one of Old Delhi's defining experiences. Parathas, kebabs, chaat, sweets and Mughlai dishes are widely associated with the area's culinary identity.</p>`,
      es: `<h2>Descubre Old Delhi – Un Viaje por la Capital Histórica de la India</h2>\n\n<p>Old Delhi ofrece una de las experiencias históricas más intensas de la capital. El barrio se desarrolló alrededor de la histórica Shahjahanabad y conserva una combinación de arquitectura mogol, edificios religiosos, mercados tradicionales, comercios antiguos y gastronomía.</p>\n\n<p><strong>Chandni Chowk</strong> es una de sus zonas más conocidas, con calles estrechas, mercados, edificios históricos y establecimientos gastronómicos tradicionales.</p>\n\n<h3>Patrimonio Mogol</h3>\n\n<p>Red Fort y Jama Masjid son dos de los principales monumentos de Old Delhi y reflejan la importancia histórica de Shahjahanabad.</p>\n\n<h3>Mercados</h3>\n\n<p>Old Delhi es conocido por textiles, joyería, especias, productos tradicionales, compras para bodas, libros y alimentos.</p>\n\n<h3>Gastronomía</h3>\n\n<p>La comida callejera es una parte esencial de Old Delhi. Parathas, kebabs, chaat, dulces y platos de influencia mogola son algunas de las especialidades más conocidas.</p>`,
      pt: `<h2>Descubra Old Delhi – Uma Viagem pela Capital Histórica da Índia</h2>\n\n<p>Old Delhi oferece uma das experiências históricas mais intensas da capital. A área desenvolveu-se ao redor da histórica Shahjahanabad e preserva uma combinação de arquitetura mogol, edifícios religiosos, mercados tradicionais, comércio antigo e gastronomia.</p>\n\n<p><strong>Chandni Chowk</strong> é uma das áreas mais conhecidas, com ruas estreitas, mercados, edifícios históricos e restaurantes tradicionais.</p>\n\n<h3>Patrimônio Mogol</h3>\n\n<p>Red Fort e Jama Masjid são dois dos principais monumentos de Old Delhi e representam a importância histórica de Shahjahanabad.</p>\n\n<h3>Mercados</h3>\n\n<p>Old Delhi é conhecida por tecidos, joias, especiarias, produtos tradicionais, compras para casamentos, livros e alimentos.</p>\n\n<h3>Gastronomia</h3>\n\n<p>A comida de rua é uma parte essencial da experiência em Old Delhi. Parathas, kebabs, chaat, doces e pratos de influência mogol estão entre as especialidades mais conhecidas.</p>`
    },
    seoTitle: {
      en: "Old Delhi Tourism | Red Fort, Jama Masjid & Chandni Chowk",
      es: "Turismo de Old Delhi | Fuerte Rojo y Mezquita Jama",
      pt: "Turismo de Old Delhi | Forte Vermelho e Mesquita Jama"
    },
    seoDesc: {
      en: "Explore Old Delhi: Red Fort, Jama Masjid, Chandni Chowk, Gurudwara Sis Ganj Sahib and Fatehpuri Masjid.",
      es: "Explora Old Delhi: Fuerte Rojo, Mezquita Jama, Chandni Chowk, Gurudwara Sis Ganj Sahib y Mezquita Fatehpuri.",
      pt: "Explore Old Delhi: Forte Vermelho, Mesquita Jama, Chandni Chowk, Gurudwara Sis Ganj Sahib e Mesquita Fatehpuri."
    },
    seoKeywords: {
      en: "Old Delhi, Old Delhi Tourism, Red Fort, Jama Masjid, Chandni Chowk, Mughal Heritage, Delhi Food",
      es: "Old Delhi, Turismo de Old Delhi, Fuerte Rojo, Mezquita Jama, Chandni Chowk, Patrimonio Mogol",
      pt: "Old Delhi, Turismo de Old Delhi, Forte Vermelho, Mesquita Jama, Chandni Chowk, Patrimônio Mogol"
    },
    touristPlaces: [
      {
        name: { en: "Red Fort", es: "Fuerte Rojo", pt: "Forte Vermelho" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "The Red Fort is one of Delhi's most important Mughal monuments. Its massive red sandstone walls and historic structures represent the grandeur of the Mughal period and form one of the defining landmarks of Old Delhi.",
          es: "Red Fort es uno de los monumentos mogoles más importantes de Delhi. Sus enormes muros de arenisca roja y sus estructuras históricas representan la grandeza de la época mogola.",
          pt: "Red Fort é um dos monumentos mogóis mais importantes de Delhi. Suas enormes muralhas de arenito vermelho e estruturas históricas representam a grandiosidade do período mogol."
        }
      },
      {
        name: { en: "Jama Masjid", es: "Mezquita Jama", pt: "Mesquita Jama" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Jama Masjid is one of the most prominent historic mosques of Old Delhi. Its large courtyard, architectural scale and location near Chandni Chowk make it an important part of the city's heritage landscape.",
          es: "Jama Masjid es una de las mezquitas históricas más importantes de Old Delhi. Su gran patio, escala arquitectónica y ubicación cerca de Chandni Chowk la convierten en una parte fundamental del patrimonio de la ciudad.",
          pt: "Jama Masjid é uma das mesquitas históricas mais importantes de Old Delhi. Seu grande pátio, escala arquitetônica e localização próxima a Chandni Chowk fazem dela uma parte importante do patrimônio da cidade."
        }
      },
      {
        name: { en: "Chandni Chowk", es: "Chandni Chowk", pt: "Chandni Chowk" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Chandni Chowk is one of Delhi's oldest and busiest historic markets. It combines shopping streets, religious buildings, traditional businesses and famous food lanes, making it one of the city's most distinctive visitor experiences.",
          es: "Chandni Chowk es uno de los mercados históricos más antiguos y concurridos de Delhi. Combina zonas comerciales, edificios religiosos, negocios tradicionales y famosas calles gastronómicas.",
          pt: "Chandni Chowk é um dos mercados históricos mais antigos e movimentados de Delhi. Combina áreas comerciais, edifícios religiosos, lojas tradicionais e famosas ruas gastronômicas."
        }
      },
      {
        name: { en: "Gurudwara Sis Ganj Sahib", es: "Gurudwara Sis Ganj Sahib", pt: "Gurudwara Sis Ganj Sahib" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Gurudwara Sis Ganj Sahib is an important Sikh religious site in the heart of Old Delhi. Its location within the historic market district allows visitors to experience the area's religious and cultural diversity.",
          es: "Gurudwara Sis Ganj Sahib es un importante lugar religioso sij situado en el corazón de Old Delhi. Su ubicación dentro de la zona histórica permite conocer la diversidad religiosa y cultural del barrio.",
          pt: "Gurudwara Sis Ganj Sahib é um importante local religioso sikh localizado no coração de Old Delhi. Sua localização dentro da área histórica permite conhecer a diversidade religiosa e cultural do bairro."
        }
      },
      {
        name: { en: "Fatehpuri Masjid", es: "Mezquita Fatehpuri", pt: "Mesquita Fatehpuri" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Fatehpuri Masjid is a historic mosque located toward the western end of Chandni Chowk. Its presence adds another important layer to the architectural and religious heritage of Old Delhi.",
          es: "Fatehpuri Masjid es una mezquita histórica situada hacia el extremo occidental de Chandni Chowk. Su presencia añade otra importante dimensión al patrimonio arquitectónico y religioso de Old Delhi.",
          pt: "Fatehpuri Masjid é uma mesquita histórica localizada na extremidade oeste de Chandni Chowk. Sua presença acrescenta outra importante dimensão ao patrimônio arquitetônico e religioso de Old Delhi."
        }
      }
    ]
  },

  // 3. MEHRAULI
  {
    id: "mehrauli",
    stateId: "delhi",
    displayOrder: 3,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Mehrauli", es: "Mehrauli", pt: "Mehrauli" },
    slug: { en: "mehrauli", es: "mehrauli", pt: "mehrauli" },
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
    description: {
      en: "Mehrauli is one of Delhi's richest archaeological areas, known for Qutub Minar, Mehrauli Archaeological Park, historic tombs, gateways, stepwells and monuments representing different periods of Delhi's history.",
      es: "Mehrauli es una de las zonas arqueológicas más importantes de Delhi, conocida por Qutub Minar, Mehrauli Archaeological Park, tumbas históricas, puertas, baolis y monumentos de diferentes épocas.",
      pt: "Mehrauli é uma das áreas arqueológicas mais importantes de Delhi, conhecida pelo Qutub Minar, Mehrauli Archaeological Park, túmulos históricos, portões, baolis e monumentos de diferentes períodos."
    },
    overview: {
      en: `<h2>Discover Mehrauli – Delhi's Archaeological Landscape</h2>\n\n<p>Mehrauli provides a fascinating journey through different layers of Delhi's history. The area contains monuments associated with the Delhi Sultanate, Mughal period and later historical phases.</p>\n\n<p>The most famous landmark is <strong>Qutub Minar</strong>, surrounded by an extensive archaeological complex containing mosques, gateways, tombs and other structures.</p>\n\n<h3>Mehrauli Archaeological Park</h3>\n\n<p>The archaeological park contains historic structures within a green landscape. It provides a quieter alternative to the city's busiest monuments.</p>\n\n<h3>Architecture & History</h3>\n\n<p>Visitors can observe different architectural styles, stonework, domes, arches, tombs and gateways across the area.</p>`,
      es: `<h2>Descubre Mehrauli – El Paisaje Arqueológico de Delhi</h2>\n\n<p>Mehrauli ofrece un fascinante recorrido por diferentes etapas de la historia de Delhi. La zona conserva monumentos relacionados con el Sultanato de Delhi, el periodo mogol y épocas posteriores.</p>\n\n<p>Su monumento más famoso es <strong>Qutub Minar</strong>, rodeado por un amplio complejo arqueológico con mezquitas, puertas, tumbas y otras estructuras.</p>\n\n<h3>Mehrauli Archaeological Park</h3>\n\n<p>El parque arqueológico reúne estructuras históricas dentro de un paisaje verde y ofrece una experiencia más tranquila.</p>\n\n<h3>Arquitectura e Historia</h3>\n\n<p>La zona permite observar diferentes estilos arquitectónicos, trabajos en piedra, cúpulas, arcos, tumbas y portales históricos.</p>`,
      pt: `<h2>Descubra Mehrauli – A Paisagem Arqueológica de Delhi</h2>\n\n<p>Mehrauli oferece uma fascinante viagem por diferentes períodos da história de Delhi. A região preserva monumentos associados ao Sultanato de Delhi, ao período mogol e a épocas posteriores.</p>\n\n<p>Seu monumento mais famoso é o <strong>Qutub Minar</strong>, cercado por um amplo complexo arqueológico com mesquitas, portões, túmulos e outras estruturas.</p>\n\n<h3>Mehrauli Archaeological Park</h3>\n\n<p>O parque arqueológico reúne estruturas históricas em meio a áreas verdes e oferece uma experiência mais tranquila.</p>\n\n<h3>Arquitetura e História</h3>\n\n<p>A região permite observar diferentes estilos arquitetônicos, trabalhos em pedra, cúpulas, arcos, túmulos e portões históricos.</p>`
    },
    seoTitle: {
      en: "Mehrauli Tourism | Qutub Minar & Archaeological Park",
      es: "Turismo de Mehrauli | Qutub Minar y Parque Arqueológico",
      pt: "Turismo de Mehrauli | Qutub Minar e Parque Arqueológico"
    },
    seoDesc: {
      en: "Explore Mehrauli: Qutub Minar, Mehrauli Archaeological Park, Jamali Kamali, Rajon Ki Baoli and Jahaz Mahal.",
      es: "Explora Mehrauli: Qutub Minar, Mehrauli Archaeological Park, Jamali Kamali, Rajon Ki Baoli y Jahaz Mahal.",
      pt: "Explore Mehrauli: Qutub Minar, Mehrauli Archaeological Park, Jamali Kamali, Rajon Ki Baoli e Jahaz Mahal."
    },
    seoKeywords: {
      en: "Mehrauli, Qutub Minar, Archaeological Park, Delhi Heritage, Medieval Delhi",
      es: "Mehrauli, Qutub Minar, Parque Arqueológico, Patrimonio de Delhi",
      pt: "Mehrauli, Qutub Minar, Parque Arqueológico, Patrimônio de Delhi"
    },
    touristPlaces: [
      {
        name: { en: "Qutub Minar", es: "Qutub Minar", pt: "Qutub Minar" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Qutub Minar is a monumental red and buff sandstone tower and one of Delhi's most important World Heritage attractions. The surrounding complex includes several historically significant structures.",
          es: "Qutub Minar es una monumental torre de arenisca roja y beige y uno de los principales lugares patrimoniales de Delhi. El complejo que la rodea contiene numerosas estructuras históricas.",
          pt: "Qutub Minar é uma monumental torre de arenito vermelho e bege e uma das principais atrações históricas de Delhi. O complexo ao redor possui várias estruturas historicamente importantes."
        }
      },
      {
        name: { en: "Mehrauli Archaeological Park", es: "Parque Arqueológico de Mehrauli", pt: "Parque Arqueológico de Mehrauli" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Mehrauli Archaeological Park contains a collection of historic structures set within a green landscape. It is particularly interesting for visitors who enjoy lesser-known monuments and historical exploration.",
          es: "Mehrauli Archaeological Park contiene varias estructuras históricas dentro de un paisaje verde. Es especialmente interesante para quienes desean descubrir monumentos menos conocidos.",
          pt: "Mehrauli Archaeological Park reúne várias estruturas históricas em meio a áreas verdes. É especialmente interessante para visitantes que gostam de monumentos menos conhecidos."
        }
      },
      {
        name: { en: "Jamali Kamali", es: "Jamali Kamali", pt: "Jamali Kamali" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Jamali Kamali is a historic complex known for its decorated mosque and tomb. The site is an interesting example of Delhi's medieval architectural heritage.",
          es: "Jamali Kamali es un complejo histórico conocido por su mezquita y tumba decoradas. El lugar es un interesante ejemplo de la arquitectura medieval de Delhi.",
          pt: "Jamali Kamali é um complexo histórico conhecido por sua mesquita e túmulo decorados. O local é um exemplo interessante da arquitetura medieval de Delhi."
        }
      },
      {
        name: { en: "Rajon Ki Baoli", es: "Rajon Ki Baoli", pt: "Rajon Ki Baoli" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "Rajon Ki Baoli is a historic stepwell featuring multiple levels, arches and stone architectural details. It reflects the importance of traditional water structures in Delhi's historical landscape.",
          es: "Rajon Ki Baoli es un antiguo pozo escalonado con varios niveles, arcos y detalles arquitectónicos de piedra. Refleja la importancia de las estructuras tradicionales de agua en la historia de Delhi.",
          pt: "Rajon Ki Baoli é um antigo poço escalonado com vários níveis, arcos e detalhes arquitetônicos em pedra. O local demonstra a importância das estruturas tradicionais de água na história de Delhi."
        }
      },
      {
        name: { en: "Jahaz Mahal", es: "Jahaz Mahal", pt: "Jahaz Mahal" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Jahaz Mahal is a historic structure near Mehrauli known for its distinctive architectural character and association with the area's medieval heritage.",
          es: "Jahaz Mahal es una estructura histórica cerca de Mehrauli conocida por su arquitectura característica y su relación con el patrimonio medieval de la zona.",
          pt: "Jahaz Mahal é uma estrutura histórica perto de Mehrauli conhecida por sua arquitetura característica e sua relação com o patrimônio medieval da região."
        }
      }
    ]
  },

  // 4. DWARKA
  {
    id: "dwarka",
    stateId: "delhi",
    displayOrder: 4,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Dwarka", es: "Dwarka", pt: "Dwarka" },
    slug: { en: "dwarka", es: "dwarka", pt: "dwarka" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    description: {
      en: "Dwarka is a modern and well-planned area of southwest Delhi known for wide roads, residential neighbourhoods, shopping areas and important religious attractions including the famous ISKCON temple and nearby spiritual landmarks.",
      es: "Dwarka es una zona moderna y planificada del suroeste de Delhi, conocida por sus amplias avenidas, barrios residenciales, zonas comerciales y lugares religiosos importantes.",
      pt: "Dwarka é uma área moderna e planejada do sudoeste de Delhi, conhecida por suas avenidas largas, bairros residenciais, áreas comerciais e importantes atrações religiosas."
    },
    overview: {
      en: `<h2>Discover Dwarka – Modern Delhi with a Spiritual Side</h2>\n\n<p>Dwarka represents a very different side of Delhi from the historic lanes of Old Delhi. It is a modern urban district with planned roads, residential areas, shopping centres, hotels and religious attractions.</p>\n\n<p>The area is particularly useful for travellers interested in exploring contemporary Delhi while also visiting spiritual and cultural sites.</p>\n\n<h3>Modern Urban Planning</h3>\n\n<p>Dwarka is characterized by broad roads, organized residential sectors and modern urban infrastructure.</p>\n\n<h3>Religious Attractions</h3>\n\n<p>The neighbourhood and surrounding areas contain several temples and spiritual centres, making it relevant for religious tourism.</p>\n\n<h3>Shopping & Dining</h3>\n\n<p>Visitors can find restaurants, cafés, local markets and shopping centres across different sectors of Dwarka.</p>`,
      es: `<h2>Descubre Dwarka – La Delhi Moderna con un Lado Espiritual</h2>\n\n<p>Dwarka representa un lado muy diferente de Delhi respecto a las calles históricas de Old Delhi. Es una zona urbana moderna con carreteras planificadas, áreas residenciales, centros comerciales, hoteles y lugares religiosos.</p>\n\n<h3>Urbanismo Moderno</h3>\n\n<p>Dwarka se caracteriza por sus amplias avenidas, sectores residenciales organizados e infraestructura moderna.</p>\n\n<h3>Atracciones Religiosas</h3>\n\n<p>La zona cuenta con templos y centros espirituales que la convierten en un destino interesante para el turismo religioso.</p>\n\n<h3>Compras y Gastronomía</h3>\n\n<p>Los visitantes encontrarán restaurantes, cafeterías, mercados y centros comerciales.</p>`,
      pt: `<h2>Descubra Dwarka – A Delhi Moderna com um Lado Espiritual</h2>\n\n<p>Dwarka representa um lado muito diferente de Delhi em comparação com as ruas históricas de Old Delhi. É uma área urbana moderna com estradas planejadas, áreas residenciais, centros comerciais, hotéis e locais religiosos.</p>\n\n<h3>Planejamento Urbano Moderno</h3>\n\n<p>Dwarka caracteriza-se por avenidas largas, setores residenciais organizados e infraestrutura moderna.</p>\n\n<h3>Atrações Religiosas</h3>\n\n<p>A região possui templos e centros espirituais que tornam o local interessante para o turismo religioso.</p>\n\n<h3>Compras e Gastronomia</h3>\n\n<p>Os visitantes encontram restaurantes, cafés, mercados e centros comerciais.</p>`
    },
    seoTitle: {
      en: "Dwarka Delhi Tourism | ISKCON Temple & Modern Shopping",
      es: "Turismo de Dwarka Delhi | Templo ISKCON y Compras",
      pt: "Turismo de Dwarka Delhi | Templo ISKCON e Compras"
    },
    seoDesc: {
      en: "Explore Dwarka Delhi: ISKCON Temple Dwarka, Dwarkadhish Temple, Vegas Mall and Sector Markets.",
      es: "Explora Dwarka Delhi: Templo ISKCON, Templo Dwarkadhish, Vegas Mall y mercados locales.",
      pt: "Explore Dwarka Delhi: Templo ISKCON, Templo Dwarkadhish, Vegas Mall e mercados locais."
    },
    seoKeywords: {
      en: "Dwarka Delhi, Dwarka Tourism, ISKCON Temple, Dwarkadhish Temple, Delhi Shopping",
      es: "Dwarka Delhi, Turismo de Dwarka, Templo ISKCON, Templo Dwarkadhish",
      pt: "Dwarka Delhi, Turismo de Dwarka, Templo ISKCON, Templo Dwarkadhish"
    },
    touristPlaces: [
      {
        name: { en: "ISKCON Temple Dwarka", es: "Templo ISKCON de Dwarka", pt: "Templo ISKCON de Dwarka" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: {
          en: "The ISKCON Temple in the Dwarka area is a spiritual and cultural attraction associated with Vaishnav traditions. The temple environment provides visitors with an opportunity for peaceful reflection and cultural exploration.",
          es: "El ISKCON Temple de la zona de Dwarka es un lugar espiritual y cultural relacionado con las tradiciones vaisnavas. Su ambiente ofrece una experiencia de tranquilidad y exploración cultural.",
          pt: "O ISKCON Temple na região de Dwarka é uma atração espiritual e cultural associada às tradições vaishnavas. O ambiente do templo oferece uma experiência de tranquilidade e descoberta cultural."
        }
      },
      {
        name: { en: "Dwarkadhish Temple", es: "Templo Dwarkadhish", pt: "Templo Dwarkadhish" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Dwarkadhish Temple is a popular religious attraction in Dwarka dedicated to Lord Krishna. The temple is visited by devotees and travellers interested in the spiritual character of the neighbourhood.",
          es: "Dwarkadhish Temple es un popular lugar religioso de Dwarka dedicado al dios Krishna. Es visitado por devotos y viajeros interesados en el carácter espiritual de la zona.",
          pt: "Dwarkadhish Temple é uma atração religiosa popular em Dwarka dedicada ao deus Krishna. O local recebe devotos e visitantes interessados no aspecto espiritual da região."
        }
      },
      {
        name: { en: "Vegas Mall", es: "Vegas Mall", pt: "Vegas Mall" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Vegas Mall is a modern shopping and entertainment destination in Dwarka with retail stores, restaurants and leisure options.",
          es: "Vegas Mall es un moderno centro comercial y de entretenimiento en Dwarka con tiendas, restaurantes y opciones de ocio.",
          pt: "Vegas Mall é um moderno centro comercial e de entretenimento em Dwarka, com lojas, restaurantes e opções de lazer."
        }
      },
      {
        name: { en: "Dwarka Sector Markets", es: "Mercados de Dwarka", pt: "Mercados de Dwarka" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "Dwarka's sector markets offer a more local shopping experience, with everyday products, food outlets, clothing, services and neighbourhood cafés.",
          es: "Los mercados de los sectores de Dwarka ofrecen una experiencia de compras más local, con productos cotidianos, restaurantes, ropa, servicios y cafeterías.",
          pt: "Os mercados dos setores de Dwarka oferecem uma experiência de compras mais local, com produtos cotidianos, restaurantes, roupas, serviços e cafés."
        }
      },
      {
        name: { en: "Sector 10 Park", es: "Parque del Sector 10", pt: "Parque do Setor 10" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Sector 10 Park provides an open green space within Dwarka and is suitable for walking, relaxation and experiencing the residential side of the district.",
          es: "Sector 10 Park ofrece un espacio verde abierto dentro de Dwarka y es adecuado para caminar, descansar y conocer el lado residencial de la zona.",
          pt: "Sector 10 Park oferece uma área verde dentro de Dwarka e é adequado para caminhadas, descanso e para conhecer o lado residencial do distrito."
        }
      }
    ]
  },

  // 5. HAUZ KHAS
  {
    id: "hauz-khas",
    stateId: "delhi",
    displayOrder: 5,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Hauz Khas", es: "Hauz Khas", pt: "Hauz Khas" },
    slug: { en: "hauz-khas", es: "hauz-khas", pt: "hauz-khas" },
    image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
    description: {
      en: "Hauz Khas is a distinctive South Delhi neighbourhood combining medieval heritage, a historic water reservoir, monuments, green spaces, cafés, restaurants, art and contemporary urban culture.",
      es: "Hauz Khas es una zona característica del sur de Delhi que combina patrimonio medieval, un antiguo embalse, monumentos, espacios verdes, cafeterías, restaurantes, arte y cultura urbana contemporánea.",
      pt: "Hauz Khas é uma área característica do sul de Delhi que combina patrimônio medieval, um antigo reservatório de água, monumentos, áreas verdes, cafés, restaurantes, arte e cultura urbana contemporânea."
    },
    overview: {
      en: `<h2>Discover Hauz Khas – History Meets Contemporary Delhi</h2>\n\n<p>Hauz Khas is one of the most interesting neighbourhoods in South Delhi because of its unusual combination of medieval heritage and contemporary lifestyle.</p>\n\n<p>The historic complex contains the remains of a medieval settlement, a water reservoir, educational buildings, tombs and architectural structures. Around this heritage area, modern cafés, restaurants, boutiques, galleries and creative spaces have developed.</p>\n\n<h3>Historical Heritage</h3>\n\n<p>The Hauz Khas complex reflects the architectural history of the Delhi Sultanate and is an important heritage location.</p>\n\n<h3>Modern Lifestyle</h3>\n\n<p>The surrounding neighbourhood is known for cafés, restaurants, art spaces, design stores and a youthful urban atmosphere.</p>\n\n<h3>Nature</h3>\n\n<p>The historic reservoir and surrounding green landscape provide an unusual natural setting within a densely populated metropolitan area.</p>`,
      es: `<h2>Descubre Hauz Khas – La Historia se Encuentra con la Delhi Contemporánea</h2>\n\n<p>Hauz Khas es uno de los barrios más interesantes del sur de Delhi por su singular combinación de patrimonio medieval y estilo de vida contemporáneo.</p>\n\n<p>El complejo histórico contiene los restos de un asentamiento medieval, un embalse de agua, tumbas y estructuras arquitectónicas. Alrededor de esta zona patrimonial se han desarrollado cafeterías, restaurantes, boutiques y galerías de arte.</p>\n\n<h3>Patrimonio Histórico</h3>\n\n<p>El complejo de Hauz Khas refleja la historia arquitectónica del Sultanato de Delhi.</p>`,
      pt: `<h2>Descubra Hauz Khas – A História Encontra a Delhi Contemporânea</h2>\n\n<p>Hauz Khas é um dos bairros mais interessantes do sul de Delhi devido à sua combinação única de patrimônio medieval e estilo de vida contemporâneo.</p>\n\n<p>O complexo histórico contém ruínas de um povoado medieval, um reservatório de água, túmulos e estruturas arquitetônicas. Ao redor desta área histórica, desenvolveram-se cafés, restaurantes, boutiques e galerias de arte.</p>\n\n<h3>Patrimônio Histórico</h3>\n\n<p>O complexo de Hauz Khas reflete a história arquitetônica do Sultanato de Delhi.</p>`
    },
    seoTitle: {
      en: "Hauz Khas Tourism | Fort, Lake, Village & Cafes",
      es: "Turismo de Hauz Khas | Fuerte, Lago y Cafeterías",
      pt: "Turismo de Hauz Khas | Forte, Lago e Cafés"
    },
    seoDesc: {
      en: "Explore Hauz Khas: Hauz Khas Fort, Lake, Deer Park, Hauz Khas Village and Green Park.",
      es: "Explora Hauz Khas: Fuerte de Hauz Khas, Lago, Deer Park, Hauz Khas Village y Green Park.",
      pt: "Explore Hauz Khas: Forte Hauz Khas, Lago, Deer Park, Hauz Khas Village e Green Park."
    },
    seoKeywords: {
      en: "Hauz Khas, Hauz Khas Fort, Hauz Khas Village, Deer Park, South Delhi",
      es: "Hauz Khas, Fuerte de Hauz Khas, Hauz Khas Village, Parque de los Ciervos",
      pt: "Hauz Khas, Forte Hauz Khas, Hauz Khas Village, Parque dos Cervos"
    },
    touristPlaces: [
      {
        name: { en: "Hauz Khas Fort", es: "Fuerte de Hauz Khas", pt: "Forte de Hauz Khas" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Hauz Khas Fort is a historic complex overlooking the old water reservoir. Its ruins, stone structures and elevated setting make it an interesting destination for heritage exploration.",
          es: "Hauz Khas Fort es un complejo histórico situado junto al antiguo embalse. Sus ruinas, estructuras de piedra y ubicación elevada lo convierten en un lugar interesante para descubrir el patrimonio.",
          pt: "Hauz Khas Fort é um complexo histórico localizado junto ao antigo reservatório. Suas ruínas, estruturas de pedra e localização elevada fazem dele um local interessante para explorar o patrimônio."
        }
      },
      {
        name: { en: "Hauz Khas Lake", es: "Lago de Hauz Khas", pt: "Lago de Hauz Khas" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "The historic Hauz Khas reservoir adds a peaceful natural element to the heritage complex and provides scenic views around the monument area.",
          es: "El histórico embalse de Hauz Khas aporta un elemento natural tranquilo al complejo patrimonial y ofrece bonitas vistas alrededor de los monumentos.",
          pt: "O histórico reservatório de Hauz Khas acrescenta um elemento natural tranquilo ao complexo histórico e oferece belas vistas ao redor dos monumentos."
        }
      },
      {
        name: { en: "Deer Park", es: "Parque de los Ciervos", pt: "Parque dos Cervos" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Deer Park is a green recreational area near Hauz Khas where visitors can enjoy walking, greenery and open spaces.",
          es: "Deer Park es una zona verde recreativa cerca de Hauz Khas, adecuada para caminar y disfrutar de espacios abiertos.",
          pt: "Deer Park é uma área verde recreativa perto de Hauz Khas, adequada para caminhadas e para aproveitar espaços abertos."
        }
      },
      {
        name: { en: "Hauz Khas Village", es: "Hauz Khas Village", pt: "Hauz Khas Village" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Hauz Khas Village combines heritage surroundings with modern cafés, restaurants, boutiques, art spaces and creative businesses. It is one of South Delhi's recognizable lifestyle destinations.",
          es: "Hauz Khas Village combina un entorno histórico con cafeterías, restaurantes, boutiques, espacios de arte y negocios creativos modernos.",
          pt: "Hauz Khas Village combina um ambiente histórico com cafés, restaurantes, boutiques, espaços de arte e negócios criativos modernos."
        }
      },
      {
        name: { en: "Green Park", es: "Green Park", pt: "Green Park" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Green Park is a well-known South Delhi neighbourhood near Hauz Khas, offering shopping, restaurants, cafés and access to several nearby attractions.",
          es: "Green Park es un conocido barrio del sur de Delhi cerca de Hauz Khas, con tiendas, restaurantes, cafeterías y acceso a diversas atracciones cercanas.",
          pt: "Green Park é um conhecido bairro do sul de Delhi perto de Hauz Khas, com lojas, restaurantes, cafés e acesso a várias atrações próximas."
        }
      }
    ]
  },

  // 6. SAKET
  {
    id: "saket",
    stateId: "delhi",
    displayOrder: 6,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Saket", es: "Saket", pt: "Saket" },
    slug: { en: "saket", es: "saket", pt: "saket" },
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
    description: {
      en: "Saket is a modern South Delhi destination known for shopping centres, entertainment, restaurants, cultural spaces and convenient access to historic attractions in the surrounding areas.",
      es: "Saket es un destino moderno del sur de Delhi conocido por sus centros comerciales, entretenimiento, restaurantes, espacios culturales y acceso a lugares históricos cercanos.",
      pt: "Saket é um destino moderno do sul de Delhi conhecido por seus centros comerciais, entretenimento, restaurantes, espaços culturais e acesso a atrações históricas próximas."
    },
    overview: {
      en: `<h2>Discover Saket – Modern Shopping & Lifestyle in South Delhi</h2>\n\n<p>Saket represents the modern lifestyle side of Delhi. The area has developed into a major destination for shopping, dining, entertainment and contemporary urban experiences.</p>\n\n<p>The neighbourhood is also strategically located near several heritage and cultural attractions, allowing travellers to combine modern Delhi with historical sightseeing.</p>\n\n<h3>Shopping</h3>\n\n<p>Saket is known for modern shopping complexes, retail stores, cafés and restaurants.</p>\n\n<h3>Entertainment</h3>\n\n<p>Visitors can find cinemas, restaurants, leisure spaces and contemporary entertainment options.</p>\n\n<h3>Nearby Heritage</h3>\n\n<p>The surrounding South Delhi region provides access to Qutub Minar, Mehrauli Archaeological Park, Garden of Five Senses and other historic attractions.</p>`,
      es: `<h2>Descubre Saket – Compras y Estilo de Vida Moderno en el Sur de Delhi</h2>\n\n<p>Saket representa el lado moderno del estilo de vida de Delhi. La zona se ha convertido en un importante destino para compras, gastronomía, entretenimiento y experiencias urbanas contemporáneas.</p>\n\n<h3>Compras</h3>\n\n<p>Saket es conocido por sus modernos centros comerciales, tiendas, cafeterías y restaurantes.</p>\n\n<h3>Entretenimiento</h3>\n\n<p>Los visitantes pueden encontrar cines, restaurantes y diferentes opciones de ocio.</p>\n\n<h3>Patrimonio Cercano</h3>\n\n<p>La zona del sur de Delhi permite acceder fácilmente a Qutub Minar, Mehrauli Archaeological Park y Garden of Five Senses.</p>`,
      pt: `<h2>Descubra Saket – Compras e Estilo de Vida Moderno no Sul de Delhi</h2>\n\n<p>Saket representa o lado moderno do estilo de vida de Delhi. A região tornou-se um importante destino para compras, gastronomia, entretenimento e experiências urbanas contemporâneas.</p>\n\n<h3>Compras</h3>\n\n<p>Saket é conhecido por seus modernos centros comerciais, lojas, cafés e restaurantes.</p>\n\n<h3>Entretenimento</h3>\n\n<p>Os visitantes encontram cinemas, restaurantes e diferentes opções de lazer.</p>\n\n<h3>Patrimônio Próximo</h3>\n\n<p>A região sul de Delhi permite fácil acesso ao Qutub Minar, Mehrauli Archaeological Park e Garden of Five Senses.</p>`
    },
    seoTitle: {
      en: "Saket Delhi Tourism | Select Citywalk & Garden of Five Senses",
      es: "Turismo de Saket Delhi | Select Citywalk y Jardín de los Cinco Sentidos",
      pt: "Turismo de Saket Delhi | Select Citywalk e Jardim dos Cinco Sentidos"
    },
    seoDesc: {
      en: "Explore Saket Delhi: Select Citywalk, Garden of Five Senses, Qutub Minar and Saket District Centre.",
      es: "Explora Saket Delhi: Select Citywalk, Jardín de los Cinco Sentidos, Qutub Minar y Saket District Centre.",
      pt: "Explore Saket Delhi: Select Citywalk, Jardim dos Cinco Sentidos, Qutub Minar e Saket District Centre."
    },
    seoKeywords: {
      en: "Saket Delhi, Saket Tourism, Select Citywalk, Garden of Five Senses, Qutub Minar",
      es: "Saket Delhi, Turismo de Saket, Select Citywalk, Jardín de los Cinco Sentidos",
      pt: "Saket Delhi, Turismo de Saket, Select Citywalk, Jardim dos Cinco Sentidos"
    },
    touristPlaces: [
      {
        name: { en: "Select Citywalk", es: "Select Citywalk", pt: "Select Citywalk" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Select Citywalk is a major contemporary shopping and lifestyle destination in Saket, with retail stores, restaurants, cafés and entertainment spaces.",
          es: "Select Citywalk es un importante centro comercial y de estilo de vida contemporáneo de Saket, con tiendas, restaurantes, cafeterías y espacios de entretenimiento.",
          pt: "Select Citywalk é um importante centro comercial e de estilo de vida contemporâneo em Saket, com lojas, restaurantes, cafés e espaços de entretenimento."
        }
      },
      {
        name: { en: "Garden of Five Senses", es: "Jardín de los Cinco Sentidos", pt: "Jardim dos Cinco Sentidos" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Garden of Five Senses is a landscaped garden designed as a multi-sensory public space with plants, pathways, sculptures and relaxing areas.",
          es: "Garden of Five Senses es un jardín paisajístico diseñado como un espacio público multisensorial con plantas, senderos, esculturas y zonas de descanso.",
          pt: "Garden of Five Senses é um jardim paisagístico projetado como um espaço público multissensorial com plantas, caminhos, esculturas e áreas de descanso."
        }
      },
      {
        name: { en: "Qutub Minar", es: "Qutub Minar", pt: "Qutub Minar" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Qutub Minar is one of the major heritage attractions accessible from South Delhi and Mehrauli. The monumental tower and surrounding archaeological complex offer an extensive historical experience.",
          es: "Qutub Minar es una de las principales atracciones patrimoniales accesibles desde el sur de Delhi y Mehrauli. La torre monumental y su complejo arqueológico ofrecen una experiencia histórica completa.",
          pt: "Qutub Minar é uma das principais atrações históricas acessíveis a partir do sul de Delhi e Mehrauli. A torre monumental e o complexo arqueológico proporcionam uma experiência histórica completa."
        }
      },
      {
        name: { en: "Saket District Centre", es: "Saket District Centre", pt: "Saket District Centre" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "Saket District Centre is a modern commercial zone with offices, restaurants, retail spaces and urban conveniences.",
          es: "Saket District Centre es una moderna zona comercial con oficinas, restaurantes, tiendas y servicios urbanos.",
          pt: "Saket District Centre é uma moderna área comercial com escritórios, restaurantes, lojas e serviços urbanos."
        }
      },
      {
        name: { en: "Mehrauli Archaeological Park", es: "Parque Arqueológico de Mehrauli", pt: "Parque Arqueológico de Mehrauli" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Mehrauli Archaeological Park is a major nearby heritage attraction containing historic structures surrounded by greenery.",
          es: "Mehrauli Archaeological Park es una importante atracción patrimonial cercana con estructuras históricas rodeadas de vegetación.",
          pt: "Mehrauli Archaeological Park é uma importante atração histórica próxima, com estruturas históricas cercadas por áreas verdes."
        }
      }
    ]
  },

  // 7. ROHINI
  {
    id: "rohini",
    stateId: "delhi",
    displayOrder: 7,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Rohini", es: "Rohini", pt: "Rohini" },
    slug: { en: "rohini", es: "rohini", pt: "rohini" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    description: {
      en: "Rohini is a large planned residential and commercial area in northwest Delhi known for shopping, entertainment, parks, family attractions and modern urban infrastructure.",
      es: "Rohini es una gran zona residencial y comercial planificada del noroeste de Delhi, conocida por sus centros comerciales, entretenimiento, parques, atracciones familiares e infraestructura moderna.",
      pt: "Rohini é uma grande área residencial e comercial planejada no noroeste de Delhi, conhecida por compras, entretenimento, parques, atrações familiares e infraestrutura moderna."
    },
    overview: {
      en: `<h2>Discover Rohini – Family-Friendly Modern Delhi</h2>\n\n<p>Rohini is one of Delhi's major planned urban districts and provides a different experience from the historic centre. The area combines residential neighbourhoods with shopping centres, parks, restaurants and entertainment destinations.</p>\n\n<p>Rohini is particularly suitable for travellers looking for family-oriented activities and modern leisure experiences.</p>\n\n<h3>Shopping & Entertainment</h3>\n\n<p>The area contains shopping centres, local markets, restaurants and entertainment facilities.</p>\n\n<h3>Family Experiences</h3>\n\n<p>Rohini and northwest Delhi offer several attractions designed for families, children and leisure travellers.</p>\n\n<h3>Urban Green Spaces</h3>\n\n<p>Large parks and landscaped public spaces provide opportunities for walking, relaxation and outdoor activities.</p>`,
      es: `<h2>Descubre Rohini – La Delhi Moderna para Familias</h2>\n\n<p>Rohini es uno de los grandes distritos urbanos planificados de Delhi y ofrece una experiencia diferente al centro histórico. La zona combina barrios residenciales con centros comerciales, parques, restaurantes y lugares de entretenimiento.</p>\n\n<h3>Compras y Entretenimiento</h3>\n\n<p>La zona cuenta con centros comerciales, mercados locales, restaurantes y espacios de entretenimiento.</p>\n\n<h3>Experiencias Familiares</h3>\n\n<p>Rohini y el noroeste de Delhi ofrecen diferentes atracciones adecuadas para familias y niños.</p>\n\n<h3>Espacios Verdes</h3>\n\n<p>Sus parques y espacios públicos ofrecen oportunidades para caminar, relajarse y disfrutar de actividades al aire libre.</p>`,
      pt: `<h2>Descubra Rohini – A Delhi Moderna para Famílias</h2>\n\n<p>Rohini é um dos grandes distritos urbanos planejados de Delhi e oferece uma experiência diferente do centro histórico. A região combina áreas residenciais com centros comerciais, parques, restaurantes e entretenimento.</p>\n\n<h3>Compras e Entretenimento</h3>\n\n<p>A área possui centros comerciais, mercados locais, restaurantes e espaços de entretenimento.</p>\n\n<h3>Experiências para Famílias</h3>\n\n<p>Rohini e o noroeste de Delhi oferecem diversas atrações adequadas para famílias e crianças.</p>\n\n<h3>Áreas Verdes</h3>\n\n<p>Parques e espaços públicos oferecem oportunidades para caminhadas, descanso e atividades ao ar livre.</p>`
    },
    seoTitle: {
      en: "Rohini Delhi Tourism | Adventure Island & Family Entertainment",
      es: "Turismo de Rohini Delhi | Adventure Island y Ocio Familiar",
      pt: "Turismo de Rohini Delhi | Adventure Island e Lazer Familiar"
    },
    seoDesc: {
      en: "Explore Rohini Delhi: Adventure Island, Japanese Park, Unity One Mall, District Park and Rithala.",
      es: "Explora Rohini Delhi: Adventure Island, Japanese Park, Unity One Mall, District Park y Rithala.",
      pt: "Explore Rohini Delhi: Adventure Island, Japanese Park, Unity One Mall, District Park e Rithala."
    },
    seoKeywords: {
      en: "Rohini Delhi, Rohini Tourism, Adventure Island, Japanese Park, Delhi Family Tourism",
      es: "Rohini Delhi, Turismo de Rohini, Adventure Island, Japanese Park, Turismo Familiar",
      pt: "Rohini Delhi, Turismo de Rohini, Adventure Island, Japanese Park, Turismo Familiar"
    },
    touristPlaces: [
      {
        name: { en: "Adventure Island", es: "Adventure Island", pt: "Adventure Island" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: {
          en: "Adventure Island is a popular amusement and entertainment destination in Rohini designed for family leisure and recreational activities.",
          es: "Adventure Island es un popular destino de entretenimiento y ocio familiar en Rohini, con diferentes actividades recreativas.",
          pt: "Adventure Island é um popular destino de entretenimento e lazer familiar em Rohini, com diferentes atividades recreativas."
        }
      },
      {
        name: { en: "Japanese Park", es: "Japanese Park", pt: "Japanese Park" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Japanese Park is a large green recreational space in Rohini suitable for walking, relaxing and spending time outdoors.",
          es: "Japanese Park es un amplio espacio verde recreativo de Rohini adecuado para caminar, relajarse y disfrutar del aire libre.",
          pt: "Japanese Park é uma grande área verde recreativa em Rohini, adequada para caminhadas, descanso e atividades ao ar livre."
        }
      },
      {
        name: { en: "Unity One Mall", es: "Unity One Mall", pt: "Unity One Mall" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Unity One is a contemporary shopping destination in Rohini offering retail outlets, dining and entertainment options.",
          es: "Unity One es un moderno centro comercial de Rohini con tiendas, restaurantes y opciones de entretenimiento.",
          pt: "Unity One é um moderno centro comercial em Rohini com lojas, restaurantes e opções de entretenimento."
        }
      },
      {
        name: { en: "District Park Rohini", es: "District Park Rohini", pt: "District Park Rohini" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "Rohini's district parks provide landscaped green spaces for walking, recreation and relaxation away from the busiest urban areas.",
          es: "Los parques distritales de Rohini ofrecen espacios verdes para caminar, descansar y realizar actividades recreativas.",
          pt: "Os parques distritais de Rohini oferecem áreas verdes para caminhadas, descanso e atividades recreativas."
        }
      },
      {
        name: { en: "Rithala Urban Area", es: "Rithala Urban Area", pt: "Rithala Urban Area" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "The Rithala area provides access to Rohini's residential, commercial and recreational landscape and is connected to other parts of Delhi through the city's public transport network.",
          es: "La zona de Rithala permite acceder a las áreas residenciales, comerciales y recreativas de Rohini y está conectada con otras partes de Delhi mediante el transporte público.",
          pt: "A região de Rithala permite acesso às áreas residenciais, comerciais e recreativas de Rohini e possui conexão com outras partes de Delhi através do transporte público."
        }
      }
    ]
  }
];

let updatedCount = 0;
for (const delhiCity of delhiCities) {
  // Ensure overview, fullDescription, content are populated
  delhiCity.fullDescription = delhiCity.overview;
  delhiCity.content = delhiCity.overview;
  
  const existingIdx = cities.findIndex(c => c.id === delhiCity.id);
  if (existingIdx >= 0) {
    cities[existingIdx] = { ...cities[existingIdx], ...delhiCity };
  } else {
    cities.push(delhiCity);
  }
  updatedCount++;
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Successfully added/updated ${updatedCount} Delhi cities in cities.json.`);
