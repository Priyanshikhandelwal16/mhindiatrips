import fs from 'fs';
import path from 'path';

const statesPath = path.resolve('src/data/fallback/states.json');
const citiesPath = path.resolve('src/data/fallback/cities.json');

const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

function cleanPlainText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// 1. UPDATE WEST BENGAL STATE DATA
const stateIndex = states.findIndex(s => s.id === 'west-bengal');

const wbStateShortDesc = {
  en: "<p><strong>West Bengal</strong> is one of India's most geographically and culturally diverse states, stretching from the Himalayan landscapes of North Bengal to the Bay of Bengal coastline and the mangrove ecosystems of the Sundarbans. The state is known for colonial architecture, temples, tea gardens, beaches, forests, wildlife, literature, music, art, festivals and distinctive Bengali cuisine.</p>",
  es: "<p><strong>Bengala Occidental</strong> es uno de los estados más diversos de la India en términos geográficos y culturales. Se extiende desde los paisajes del Himalaya en el norte hasta la costa de la Bahía de Bengala y los manglares de Sundarbans. El estado es conocido por su arquitectura colonial, templos, plantaciones de té, playas, bosques, vida silvestre, literatura, música, arte, festivales y gastronomía bengalí.</p>",
  pt: "<p><strong>Bengala Ocidental</strong> é um dos estados mais diversos da Índia em termos geográficos e culturais, estendendo-se das paisagens do Himalaia no norte até a costa da Baía de Bengala e os manguezais de Sundarbans. O estado é conhecido por sua arquitetura colonial, templos, plantações de chá, praias, florestas, vida selvagem, literatura, música, arte, festivais e gastronomia bengali.</p>"
};

const wbStateLongDesc = {
  en: `<h2>Discover West Bengal – A Journey from the Himalayas to the Bay of Bengal</h2>

<p>West Bengal offers an extraordinary variety of travel experiences within one state. Its landscape changes dramatically from the snow-covered Himalayan region in the north to tea gardens, forests, river plains, historic towns, coastal beaches and the mangrove ecosystems of the Sundarbans in the south. The official West Bengal Tourism Department highlights mountain tourism, eco-tourism, tea tourism, cultural tourism, heritage tourism, coastal tourism, wildlife tourism, religious tourism and river cruises as major tourism experiences across the state.</p>

<h3>Himalayan West Bengal</h3>

<p>The northern districts offer spectacular mountain landscapes, tea estates, forests, valleys and views of Himalayan peaks. <strong>Darjeeling</strong> is one of the state's most recognizable hill destinations, while <strong>Kalimpong</strong> provides a quieter hill-town experience surrounded by mountains and river valleys.</p>

<h3>Tea Tourism</h3>

<p>Tea is an important part of the tourism identity of North Bengal. Visitors can explore tea gardens, learn about tea cultivation, enjoy mountain scenery and experience the distinctive atmosphere of tea-estate regions. West Bengal Tourism specifically promotes tea tourism as a tourism category.</p>

<h3>Heritage & History</h3>

<p>West Bengal has a deep historical legacy reflected in colonial buildings, old palaces, temples, museums, churches, mosques and heritage towns. <strong>Kolkata, Murshidabad and Bishnupur</strong> are particularly valuable for travellers interested in architecture, history and cultural heritage.</p>

<h3>Culture & Festivals</h3>

<p>Bengali culture is strongly associated with literature, music, theatre, visual arts, handicrafts and festivals. <strong>Durga Puja</strong> is one of the most prominent cultural celebrations of the state, while Santiniketan represents an important centre of art, education and cultural heritage. West Bengal Tourism identifies cultural tourism and Durga Puja as major tourism themes.</p>

<h3>Wildlife & Nature</h3>

<p>The state contains a wide range of ecosystems, including Himalayan forests, Dooars grasslands, riverine landscapes and the mangrove forests of the Sundarbans. Wildlife experiences can include elephants, rhinoceroses, leopards, birds and the Royal Bengal Tiger in the Sundarbans ecosystem.</p>

<h3>Beaches</h3>

<p>The Bay of Bengal coastline provides destinations such as <strong>Digha, Mandarmani, Bakkhali and Gangasagar</strong>. These destinations provide beach walks, sunsets, coastal scenery and relaxed seaside holidays. The official tourism portal identifies coastal tourism as a major category.</p>

<h3>Food Tourism</h3>

<p>West Bengal is also an important destination for food lovers. Bengali cuisine is known for rice-based meals, fish preparations, mustard-based flavours, sweets and street food. Kolkata in particular is promoted by West Bengal Tourism as a food destination.</p>`,

  es: `<h2>Descubre Bengala Occidental – Un Viaje del Himalaya a la Bahía de Bengala</h2>

<p>Bengala Occidental ofrece una extraordinaria variedad de experiencias turísticas dentro de un mismo estado. Su paisaje cambia desde las montañas del Himalaya en el norte hasta las plantaciones de té, bosques, llanuras fluviales, ciudades históricas, playas y manglares de Sundarbans en el sur. El Departamento de Turismo de Bengala Occidental destaca el turismo de montaña, ecoturismo, turismo del té, turismo cultural, patrimonial, costero, de naturaleza, religioso y los cruceros fluviales.</p>

<h3>El Norte del Himalaya</h3>

<p>El norte del estado ofrece montañas, plantaciones de té, bosques, valles y espectaculares paisajes del Himalaya. <strong>Darjeeling</strong> es uno de los destinos de montaña más conocidos, mientras que <strong>Kalimpong</strong> ofrece una experiencia más tranquila entre colinas y valles.</p>

<h3>Turismo del Té</h3>

<p>El té forma una parte importante de la identidad turística del norte de Bengala. Los visitantes pueden conocer plantaciones, aprender sobre el cultivo del té y disfrutar de paisajes montañosos.</p>

<h3>Patrimonio e Historia</h3>

<p>Bengala Occidental posee una importante herencia histórica representada por edificios coloniales, palacios, templos, museos, iglesias, mezquitas y ciudades históricas. Kolkata, Murshidabad y Bishnupur son especialmente interesantes para los viajeros interesados en la historia y la arquitectura.</p>

<h3>Cultura y Festivales</h3>

<p>La cultura bengalí está profundamente relacionada con la literatura, música, teatro, arte y artesanía. <strong>Durga Puja</strong> es una de las celebraciones culturales más importantes del estado.</p>

<h3>Naturaleza y Vida Silvestre</h3>

<p>El estado posee ecosistemas muy variados, desde bosques del Himalaya hasta praderas del Dooars y manglares de Sundarbans. El Sundarbans es conocido por el tigre de Bengala y su extraordinario ecosistema de manglares.</p>

<h3>Playas</h3>

<p>Digha, Mandarmani, Bakkhali y Gangasagar ofrecen experiencias costeras, paseos junto al mar y paisajes al atardecer.</p>

<h3>Gastronomía</h3>

<p>La gastronomía bengalí es conocida por el pescado, el arroz, la mostaza, los sabores tradicionales y sus famosos dulces. Kolkata es especialmente conocida por su cultura gastronómica.</p>`,

  pt: `<h2>Descubra Bengala Ocidental – Uma Viagem do Himalaia à Baía de Bengala</h2>

<p>Bengala Ocidental oferece uma enorme variedade de experiências turísticas dentro de um único estado. Sua paisagem muda das montanhas do Himalaia no norte para plantações de chá, florestas, planícies fluviais, cidades históricas, praias e manguezais de Sundarbans no sul. O Departamento de Turismo de Bengala Ocidental promove turismo de montanha, ecoturismo, turismo de chá, turismo cultural, patrimonial, costeiro, de natureza, religioso e cruzeiros fluviais.</p>

<h3>Bengala do Himalaia</h3>

<p>A região norte oferece montanhas, plantações de chá, florestas, vales e paisagens espetaculares do Himalaia. <strong>Darjeeling</strong> é um dos destinos montanhosos mais conhecidos, enquanto <strong>Kalimpong</strong> oferece uma experiência mais tranquila entre colinas e vales.</p>

<h3>Turismo do Chá</h3>

<p>O chá é uma parte importante da identidade turística do norte de Bengala. Os visitantes podem conhecer plantações, aprender sobre o cultivo do chá e apreciar as paisagens montanhosas.</p>

<h3>Patrimônio e História</h3>

<p>Bengala Ocidental possui um rico patrimônio histórico representado por edifícios coloniais, palácios, templos, museus, igrejas, mesquitas e cidades históricas. Kolkata, Murshidabad e Bishnupur são especialmente interessantes para viajantes interessados em história e arquitetura.</p>

<h3>Cultura e Festivais</h3>

<p>A cultura bengali está fortemente ligada à literatura, música, teatro, arte e artesanato. <strong>Durga Puja</strong> é uma das celebrações culturais mais importantes do estado.</p>

<h3>Natureza e Vida Selvagem</h3>

<p>O estado possui diferentes ecossistemas, desde florestas do Himalaia até as pradarias de Dooars e os manguezais de Sundarbans. Sundarbans é conhecido pelo tigre-de-bengala e por seu extraordinário ecossistema de manguezais.</p>

<h3>Praias</h3>

<p>Digha, Mandarmani, Bakkhali e Gangasagar oferecem experiências costeiras, caminhadas à beira-mar e belas paisagens ao pôr do sol.</p>

<h3>Gastronomia</h3>

<p>A culinária bengali é conhecida pelo peixe, arroz, mostarda, sabores tradicionais e doces famosos. Kolkata é especialmente conhecida por sua cultura gastronômica.</p>`
};

const wbSeoTitle = {
  en: "West Bengal Tourism – Kolkata, Darjeeling, Sundarbans, Digha & Heritage",
  es: "Turismo de Bengala Occidental – Kolkata, Darjeeling, Sundarbans y Playas",
  pt: "Turismo de Bengala Ocidental – Kolkata, Darjeeling, Sundarbans e Praias"
};

const wbSeoDesc = {
  en: "Explore West Bengal with Kolkata heritage, Darjeeling tea gardens, Himalayan landscapes, Digha beaches, Sundarbans wildlife, Murshidabad palaces and Bishnupur temples.",
  es: "Explora Bengala Occidental con el patrimonio de Kolkata, las plantaciones de té de Darjeeling, el Himalaya, las playas de Digha, Sundarbans y las ciudades históricas.",
  pt: "Explore Bengala Ocidental com o patrimônio de Kolkata, plantações de chá de Darjeeling, paisagens do Himalaia, praias de Digha, vida selvagem de Sundarbans e cidades históricas."
};

const wbSeoKeywords = {
  en: "West Bengal Tourism, West Bengal Travel, Kolkata Tourism, Darjeeling Tourism, Kalimpong Tourism, Digha Tourism, Siliguri Tourism, Murshidabad Tourism, Bishnupur Tourism, Sundarbans, Bengali Culture, Durga Puja, Tea Gardens, Himalayan Tourism, Beach Tourism, Heritage Tourism, Wildlife Tourism, Eco Tourism, Food Tourism",
  es: "Turismo de Bengala Occidental, Viajes a Bengala Occidental, Turismo de Kolkata, Turismo de Darjeeling, Turismo de Kalimpong, Turismo de Digha, Turismo de Siliguri, Turismo de Murshidabad, Turismo de Bishnupur, Sundarbans, Cultura Bengalí, Durga Puja, Plantaciones de Té, Turismo del Himalaya, Turismo de Playa, Turismo Patrimonial, Turismo de Naturaleza",
  pt: "Turismo de Bengala Ocidental, Viagens para Bengala Ocidental, Turismo de Kolkata, Turismo de Darjeeling, Turismo de Kalimpong, Turismo de Digha, Turismo de Siliguri, Turismo de Murshidabad, Turismo de Bishnupur, Sundarbans, Cultura Bengali, Durga Puja, Plantações de Chá, Turismo do Himalaia, Turismo de Praia, Turismo Patrimonial, Turismo de Natureza"
};

if (stateIndex !== -1) {
  states[stateIndex].name = { en: "West Bengal", es: "Bengala Occidental", pt: "Bengala Ocidental" };
  states[stateIndex].description = wbStateShortDesc;
  states[stateIndex].overview = wbStateLongDesc;
  states[stateIndex].content = wbStateLongDesc;
  states[stateIndex].fullDescription = wbStateLongDesc;
  states[stateIndex].seoTitle = wbSeoTitle;
  states[stateIndex].seoDesc = wbSeoDesc;
  states[stateIndex].seoKeywords = wbSeoKeywords;
  states[stateIndex].isPublished = true;
  states[stateIndex].isDeleted = false;
  states[stateIndex].updatedAt = new Date().toISOString();
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Updated West Bengal state in states.json');

// 2. DEFINE THE 8 DESTINATIONS
const wbCitiesData = [
  // 1. KOLKATA
  {
    id: "kolkata",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 1,
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=900&q=80",
    slug: { en: "kolkata", es: "kolkata", pt: "kolkata" },
    name: { en: "Kolkata", es: "Kolkata", pt: "Kolkata" },
    description: {
      en: "<p><strong>Kolkata</strong>, the capital of West Bengal, is a city of literature, art, colonial heritage, food, festivals and cultural traditions. From Victoria Memorial and Howrah Bridge to Indian Museum, St. Paul's Cathedral and Kumartuli, Kolkata offers a rich combination of history, architecture, spirituality and everyday Bengali culture.</p>",
      es: "<p><strong>Kolkata</strong>, capital de Bengala Occidental, es una ciudad de literatura, arte, patrimonio colonial, gastronomía, festivales y tradiciones culturales. Desde Victoria Memorial y Howrah Bridge hasta Indian Museum, St. Paul's Cathedral y Kumartuli, la ciudad ofrece una combinación de historia, arquitectura, espiritualidad y cultura bengalí.</p>",
      pt: "<p><strong>Kolkata</strong>, capital de Bengala Ocidental, é uma cidade de literatura, arte, patrimônio colonial, gastronomia, festivais e tradições culturais. Do Victoria Memorial e Howrah Bridge ao Indian Museum, St. Paul's Cathedral e Kumartuli, a cidade oferece uma combinação rica de história, arquitetura, espiritualidade e cultura bengali.</p>"
    },
    overview: {
      en: `<h2>Explore Kolkata – The Cultural Heart of Bengal</h2>

<p>Kolkata is one of India's most important cultural and historical cities. The city developed as an important colonial-era centre and today remains closely associated with Bengali literature, theatre, music, art, education, food and festivals.</p>

<p>The cityscape combines grand colonial buildings, historic neighbourhoods, religious landmarks, markets, museums and modern urban areas. Visitors can explore <strong>Victoria Memorial, Indian Museum, St. Paul's Cathedral, Marble Palace, Howrah Bridge and Kumartuli</strong>.</p>

<h3>Heritage</h3>

<p>Kolkata's colonial architecture and historic neighbourhoods provide numerous opportunities for heritage walks and photography.</p>

<h3>Art & Culture</h3>

<p>The city has a strong connection with literature, theatre, painting, music and traditional crafts. Kumartuli is particularly known for its traditional idol-making community.</p>

<h3>Food</h3>

<p>Kolkata is an important destination for Bengali food, sweets and street food. Visitors can experience traditional fish preparations, rice dishes, kathi rolls, sweets and other local specialities.</p>

<h3>Festivals</h3>

<p>Durga Puja transforms the city with elaborate pandals, artistic installations, cultural performances and community celebrations.</p>`,
      es: `<h2>Explora Kolkata – El Corazón Cultural de Bengala</h2>

<p>Kolkata es una de las ciudades más importantes en términos culturales e históricos de la India. Se desarrolló como un relevante centro de la época colonial y mantiene un profundo vínculo con la literatura, teatro, música, arte, educación y gastronomía bengalí.</p>

<p>El paisaje urbano combina majestuosos edificios coloniales, barrios históricos, lugares de culto, mercados y museos. Entre sus atractivos destacan <strong>Victoria Memorial, Indian Museum, St. Paul's Cathedral, Marble Palace, Howrah Bridge y Kumartuli</strong>.</p>

<h3>Patrimonio</h3>

<p>Su arquitectura colonial y barrios antiguos resultan ideales para paseos fotográficos e itinerarios culturales.</p>

<h3>Arte y Cultura</h3>

<p>Posee un fuerte arraigo con las artes plásticas, literatura y artesanía. Kumartuli es especialmente célebre por sus escultores de esculturas ceremoniales.</p>

<h3>Gastronomía</h3>

<p>Un verdadero paraíso gastronómico para degustar platos de pescado, arroz, dulces típicos y comida callejera como los kathi rolls.</p>

<h3>Festivales</h3>

<p>La festividad de Durga Puja transforma la ciudad con deslumbrantes pandals e intervenciones artísticas.</p>`,
      pt: `<h2>Explore Kolkata – O Coração Cultural de Bengala</h2>

<p>Kolkata é uma das cidades culturais e históricas mais importantes da Índia. Desenvolveu-se como um grande centro colonial e permanece ligada à literatura, teatro, música, artes plásticas e festivais.</p>

<p>A paisagem urbana combina imponentes prédios coloniais, bairros históricos, templos, mercados e museus. Os destaques incluem o <strong>Victoria Memorial, Indian Museum, St. Paul's Cathedral, Marble Palace, Howrah Bridge e Kumartuli</strong>.</p>

<h3>Patrimônio</h3>

<p>A arquitetura colonial e as ruas históricas oferecem ótimas opções de caminhadas e fotografia.</p>

<h3>Arte e Cultura</h3>

<p>Possui forte tradição nas artes. O bairro de Kumartuli é mundialmente famoso pela confecção artesanal de imagens sacras de argila.</p>

<h3>Gastronomia</h3>

<p>Kolkata é um destino imperdível para os amantes da culinária bengali, seus peixes temperados, doces típicos e comida de rua.</p>

<h3>Festivais</h3>

<p>O festival Durga Puja transforma a cidade com decorações impressionantes e eventos culturais de rua.</p>`
    },
    seoTitle: {
      en: "Kolkata Tourism – Heritage, Culture, Food & Famous Attractions",
      es: "Turismo de Kolkata – Patrimonio, Cultura, Gastronomía y Atracciones",
      pt: "Turismo de Kolkata – Patrimônio, Cultura, Gastronomia e Atrações"
    },
    seoDesc: {
      en: "Explore Kolkata (Calcutta), the cultural capital of India. Visit Victoria Memorial, Howrah Bridge, Indian Museum, Kumartuli and taste authentic Bengali food.",
      es: "Explora Kolkata (Calcuta), la capital cultural de la India. Visita Victoria Memorial, el Puente Howrah, Indian Museum y prueba la gastronomía bengalí.",
      pt: "Explore Kolkata (Calcutá), a capital cultural da Índia. Visite Victoria Memorial, Ponte Howrah, Indian Museum e deguste a culinária bengali."
    },
    seoKeywords: {
      en: "Kolkata, Kolkata Tourism, Victoria Memorial, Howrah Bridge, Indian Museum, Kumartuli, Durga Puja, Bengali Food, Heritage Tourism",
      es: "Kolkata, Turismo de Kolkata, Victoria Memorial, Puente Howrah, Indian Museum, Kumartuli, Durga Puja, Gastronomía Bengalí",
      pt: "Kolkata, Turismo de Kolkata, Victoria Memorial, Ponte Howrah, Indian Museum, Kumartuli, Durga Puja, Gastronomia Bengali"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=900&q=80",
        name: { en: "Victoria Memorial", es: "Memorial Victoria", pt: "Memorial Victoria" },
        description: {
          en: cleanPlainText("Victoria Memorial is one of Kolkata's most recognizable heritage landmarks. Its grand architecture, gardens and museum collections make it an important stop for visitors interested in Kolkata's colonial history and art."),
          es: cleanPlainText("Victoria Memorial es uno de los monumentos patrimoniales más reconocibles de Kolkata. Su arquitectura, jardines y colecciones de museo lo convierten en una visita importante para quienes desean conocer la historia colonial y el arte de la ciudad."),
          pt: cleanPlainText("Victoria Memorial é um dos monumentos patrimoniais mais reconhecidos de Kolkata. Sua arquitetura, jardins e coleções de museu fazem dele uma atração importante para quem deseja conhecer a história colonial e a arte da cidade.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Howrah Bridge", es: "Puente Howrah", pt: "Ponte Howrah" },
        description: {
          en: cleanPlainText("Howrah Bridge is one of Kolkata's most iconic urban landmarks and an important part of the city's visual identity. The bridge crosses the Hooghly River and connects Kolkata with Howrah."),
          es: cleanPlainText("Howrah Bridge es uno de los monumentos urbanos más emblemáticos de Kolkata y una parte importante de la identidad visual de la ciudad. Cruza el río Hooghly y conecta Kolkata con Howrah."),
          pt: cleanPlainText("Howrah Bridge é um dos marcos urbanos mais famosos de Kolkata e uma parte importante da identidade visual da cidade. A ponte atravessa o rio Hooghly e conecta Kolkata a Howrah.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Indian Museum", es: "Museo de la India", pt: "Museu Indiano" },
        description: {
          en: cleanPlainText("Indian Museum is one of the city's major museums, offering visitors an opportunity to explore collections related to archaeology, art, natural history and cultural heritage."),
          es: cleanPlainText("Indian Museum es uno de los principales museos de la ciudad, con colecciones relacionadas con arqueología, arte, historia natural y patrimonio cultural."),
          pt: cleanPlainText("Indian Museum é um dos principais museus da cidade, com coleções relacionadas à arqueologia, arte, história natural e patrimônio cultural.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "St. Paul's Cathedral", es: "Catedral de San Pablo", pt: "Catedral de São Paulo" },
        description: {
          en: cleanPlainText("St. Paul's Cathedral is an important historic church known for its Gothic architectural character and peaceful surroundings."),
          es: cleanPlainText("St. Paul's Cathedral es una importante iglesia histórica conocida por su arquitectura de estilo gótico y su ambiente tranquilo."),
          pt: cleanPlainText("St. Paul's Cathedral é uma importante igreja histórica conhecida por sua arquitetura de estilo gótico e ambiente tranquilo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Kumartuli", es: "Kumartuli", pt: "Kumartuli" },
        description: {
          en: cleanPlainText("Kumartuli is a traditional artisan neighbourhood famous for clay idol-making. It provides an opportunity to see craftsmen working on sculptures used during major Bengali festivals."),
          es: cleanPlainText("Kumartuli es un barrio tradicional de artesanos conocido por la elaboración de figuras de arcilla. Los visitantes pueden observar el trabajo artesanal relacionado con los grandes festivales bengalíes."),
          pt: cleanPlainText("Kumartuli é um bairro tradicional de artesãos conhecido pela fabricação de ídolos de argila. Os visitantes podem observar artesãos produzindo esculturas utilizadas nos principais festivais bengalis.")
        }
      }
    ]
  },

  // 2. DARJEELING
  {
    id: "darjeeling",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 2,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    slug: { en: "darjeeling", es: "darjeeling", pt: "darjeeling" },
    name: { en: "Darjeeling", es: "Darjeeling", pt: "Darjeeling" },
    description: {
      en: "<p><strong>Darjeeling</strong> is one of India's best-known Himalayan hill destinations, famous for tea gardens, mountain scenery, colonial heritage, monasteries and views of the Himalayan peaks. The official tourism department describes Darjeeling as a Himalayan destination with green hills, tea gardens, trekking opportunities and scenic landscapes.</p>",
      es: "<p><strong>Darjeeling</strong> es uno de los destinos de montaña más conocidos de la India, famoso por sus plantaciones de té, paisajes del Himalaya, patrimonio colonial y monasterios.</p>",
      pt: "<p><strong>Darjeeling</strong> é um dos destinos montanhosos mais conhecidos da Índia, famoso por suas plantações de chá, paisagens do Himalaia, patrimônio colonial e mosteiros.</p>"
    },
    overview: {
      en: `<h2>Explore Darjeeling – Tea Gardens, Mountains & Himalayan Heritage</h2>

<p>Darjeeling combines mountain scenery, tea estates, historic railways, colonial architecture, monasteries, local markets and Himalayan views.</p>

<p>The destination is particularly attractive for travellers interested in tea tourism, photography, trekking and cool mountain landscapes. West Bengal Tourism specifically promotes Darjeeling's tea gardens, Himalayan views, trekking routes, local food and markets.</p>

<h3>Tea Gardens</h3>

<p>The rolling green tea gardens are one of Darjeeling's defining landscapes and an important part of the region's tourism identity.</p>

<h3>Mountain Views</h3>

<p>Darjeeling provides spectacular viewpoints toward the surrounding Himalayan landscape, making it popular among photographers and nature lovers.</p>

<h3>Heritage Railway</h3>

<p>The Darjeeling Himalayan Railway is an important part of the town's heritage experience.</p>

<h3>Monasteries</h3>

<p>Buddhist monasteries add another cultural dimension to Darjeeling and provide opportunities to experience the region's spiritual traditions.</p>`,
      es: `<h2>Explora Darjeeling – Plantaciones de Té, Montañas y Patrimonio del Himalaya</h2>

<p>Darjeeling combina paisajes de montaña, plantaciones de té, ferrocarriles históricos, arquitectura colonial, monasterios y vistas deslumbrantes del Himalaya.</p>

<p>Es un destino perfecto para los apasionados del ecoturismo del té, la fotografía, las caminatas y los climas frescos de montaña.</p>

<h3>Plantaciones de Té</h3>

<p>Las verdes colinas cubiertas de té constituyen el paisaje icónico y la gran seña de identidad de Darjeeling.</p>

<h3>Vistas a la Montaña</h3>

<p>Miradores emblemáticos permiten contempla cumbres del Himalaya como el Kanchenjunga al amanecer.</p>

<h3>Ferrocarril Histórico</h3>

<p>El entrañable tren de vapor Darjeeling Himalayan Railway forma parte del patrimonio histórico reconocido mundialmente.</p>

<h3>Monasterios</h3>

<p>Los monasterios budistas impregnan la región de espiritualidad y serenidad.</p>`,
      pt: `<h2>Explore Darjeeling – Plantações de Chá, Montanhas e Patrimônio do Himalaia</h2>

<p>Darjeeling combina cenários de montanha, plantações de chá, ferrovia histórica, arquitetura colonial, mosteiros e vistas panorâmicas do Himalaia.</p>

<p>O destino atrai viajantes interessados no turismo de chá, fotografia, caminhadas e clima de montanha.</p>

<h3>Plantações de Chá</h3>

<p>As colinas verdes revestidas por plantações de chá são o cartão-postal mais famoso de Darjeeling.</p>

<h3>Vistas das Montanhas</h3>

<p>A cidade oferece mirantes incríveis para contemplar as maiores cordilheiras do mundo.</p>

<h3>Ferrovia do Patrimônio</h3>

<p>O trem histórico Darjeeling Himalayan Railway é uma atração imperdível de valor patrimonial.</p>

<h3>Mosteiros</h3>

<p>Mosteiros budistas enriquecem a cultura local e transmitem paz e espiritualidade.</p>`
    },
    seoTitle: {
      en: "Darjeeling Tourism – Tea Gardens, Tiger Hill & Himalayan Views",
      es: "Turismo de Darjeeling – Plantaciones de Té, Tiger Hill y Himalaya",
      pt: "Turismo de Darjeeling – Plantações de Chá, Tiger Hill e Himalaia"
    },
    seoDesc: {
      en: "Discover Darjeeling in West Bengal. Visit Tiger Hill sunrise, Darjeeling Himalayan Railway Toy Train, Batasia Loop, tea gardens and mountaineering institute.",
      es: "Descubre Darjeeling en Bengala Occidental. Visita el amanecer en Tiger Hill, el Toy Train, Batasia Loop y plantaciones de té.",
      pt: "Descubra Darjeeling em Bengala Ocidental. Visite o nascer do sol em Tiger Hill, o Toy Train, Batasia Loop e plantações de chá."
    },
    seoKeywords: {
      en: "Darjeeling, Darjeeling Tourism, Tiger Hill, Tea Gardens, Himalayan Railway, Batasia Loop, Himalayan Tourism, Tea Tourism",
      es: "Darjeeling, Turismo de Darjeeling, Tiger Hill, Plantaciones de Té, Ferrocarril del Himalaya, Batasia Loop",
      pt: "Darjeeling, Turismo de Darjeeling, Tiger Hill, Plantações de Chá, Ferrovia do Himalaia, Batasia Loop"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        name: { en: "Tiger Hill", es: "Colina del Tigre", pt: "Colina do Tigre" },
        description: {
          en: cleanPlainText("Tiger Hill is one of Darjeeling's most famous viewpoints and is associated with spectacular sunrise views over the Himalayan landscape."),
          es: cleanPlainText("Tiger Hill es uno de los miradores más famosos de Darjeeling y es conocido por sus espectaculares amaneceres sobre el Himalaya."),
          pt: cleanPlainText("Tiger Hill é um dos mirantes mais famosos de Darjeeling e é conhecido pelas vistas espetaculares do nascer do sol sobre o Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Darjeeling Himalayan Railway", es: "Ferrocarril del Himalaya de Darjeeling", pt: "Ferrovia do Himalaia de Darjeeling" },
        description: {
          en: cleanPlainText("The Darjeeling Himalayan Railway is an iconic mountain railway experience and an important part of Darjeeling's heritage tourism."),
          es: cleanPlainText("El Darjeeling Himalayan Railway es una experiencia ferroviaria de montaña emblemática y una parte importante del patrimonio turístico de Darjeeling."),
          pt: cleanPlainText("A Darjeeling Himalayan Railway é uma experiência ferroviária de montanha icônica e uma parte importante do patrimônio turístico de Darjeeling.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Batasia Loop", es: "Bucle de Batasia", pt: "Curva de Batasia" },
        description: {
          en: cleanPlainText("Batasia Loop is a scenic railway location where the train negotiates a spiral route surrounded by mountain scenery and landscaped areas."),
          es: cleanPlainText("Batasia Loop es una zona ferroviaria panorámica donde el tren realiza un recorrido en espiral rodeado de paisajes montañosos."),
          pt: cleanPlainText("Batasia Loop é uma área ferroviária panorâmica onde o trem percorre uma rota em espiral cercada por paisagens montanhosas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Himalayan Mountaineering Institute", es: "Instituto de Montañismo del Himalaya", pt: "Instituto de Montanhismo do Himalaia" },
        description: {
          en: cleanPlainText("The Himalayan Mountaineering Institute represents Darjeeling's strong connection with mountaineering, adventure and Himalayan exploration."),
          es: cleanPlainText("El Himalayan Mountaineering Institute representa la fuerte relación de Darjeeling con el montañismo, la aventura y la exploración del Himalaya."),
          pt: cleanPlainText("O Himalayan Mountaineering Institute representa a forte ligação de Darjeeling com o montanhismo, aventura e exploração do Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Darjeeling Tea Gardens", es: "Plantaciones de Té de Darjeeling", pt: "Plantações de Chá de Darjeeling" },
        description: {
          en: cleanPlainText("Darjeeling's tea gardens create some of the region's most beautiful landscapes and offer insight into the area's famous tea-growing tradition."),
          es: cleanPlainText("Las plantaciones de té de Darjeeling forman algunos de los paisajes más bellos de la región y permiten conocer su famosa tradición de cultivo del té."),
          pt: cleanPlainText("As plantações de chá de Darjeeling formam algumas das paisagens mais bonitas da região e permitem conhecer a famosa tradição de cultivo de chá.")
        }
      }
    ]
  },

  // 3. KALIMPONG
  {
    id: "kalimpong",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 3,
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
    slug: { en: "kalimpong", es: "kalimpong", pt: "kalimpong" },
    name: { en: "Kalimpong", es: "Kalimpong", pt: "Kalimpong" },
    description: {
      en: "<p><strong>Kalimpong</strong> is a scenic hill town in North Bengal known for Himalayan views, monasteries, gardens, local culture, mountain walks and adventure activities. The official tourism department describes Kalimpong as a hilltop town near the Teesta with a diverse cultural character and opportunities for rafting, hiking, trekking and village walks.</p>",
      es: "<p><strong>Kalimpong</strong> es una ciudad de montaña conocida por sus vistas del Himalaya, monasterios, jardines, cultura local, senderismo y actividades de aventura.</p>",
      pt: "<p><strong>Kalimpong</strong> é uma cidade montanhosa conhecida pelas vistas do Himalaia, mosteiros, jardins, cultura local, caminhadas e atividades de aventura.</p>"
    },
    overview: {
      en: `<h2>Explore Kalimpong – Hills, Monasteries & Mountain Culture</h2>

<p>Kalimpong offers a relaxed mountain experience with views of Himalayan peaks, traditional monasteries, flower nurseries, local markets and scenic roads.</p>

<p>The town is also known for its multicultural character, reflected in its cuisine, architecture and local communities. Activities around Kalimpong include hiking, trekking, village walks and rafting along the Teesta region.</p>`,
      es: `<h2>Explora Kalimpong – Colinas, Monasterios y Cultura de Montaña</h2>

<p>Kalimpong ofrece una tranquila experiencia de montaña con vistas panorámicas de los picos del Himalaya, monasterios tradicionales, viveros de flores y mercados locales.</p>

<p>Destaca por su carácter multicultural y por actividades como senderismo, recorridos por aldeas y rafting en el río Teesta.</p>`,
      pt: `<h2>Explore Kalimpong – Colinas, Mosteiros e Cultura de Montanha</h2>

<p>Kalimpong oferece uma experiência de montanha relaxante, com vistas espetaculares dos picos do Himalaia, mosteiros tradicionais, orquidários e feiras locais.</p>

<p>Destaca-se por sua diversidade cultural e por atividades como caminhadas ecológicas e rafting no rio Teesta.</p>`
    },
    seoTitle: {
      en: "Kalimpong Tourism – Hills, Monasteries, Deolo Hill & Teesta",
      es: "Turismo de Kalimpong – Montañas, Monasterios y Deolo Hill",
      pt: "Turismo de Kalimpong – Montanhas, Mosteiros, Deolo Hill e Teesta"
    },
    seoDesc: {
      en: "Discover Kalimpong in North Bengal. Explore Deolo Hill, Durpin Dara, Zang Dhok Palri Phodang monastery, flower nurseries and Teesta river rafting.",
      es: "Descubre Kalimpong en el norte de Bengala. Visita Deolo Hill, Durpin Dara, el monasterio Zang Dhok Palri Phodang y rafting en el río Teesta.",
      pt: "Descubra Kalimpong em North Bengal. Visite Deolo Hill, Durpin Dara, o mosteiro Zang Dhok Palri Phodang e rafting no rio Teesta."
    },
    seoKeywords: {
      en: "Kalimpong, Kalimpong Tourism, Deolo Hill, Durpin Dara, Buddhist Monastery, Teesta River, North Bengal, Himalayan Tourism",
      es: "Kalimpong, Turismo de Kalimpong, Deolo Hill, Durpin Dara, Monasterio Budista, Río Teesta",
      pt: "Kalimpong, Turismo de Kalimpong, Deolo Hill, Durpin Dara, Mosteiro Budista, Rio Teesta"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Deolo Hill", es: "Colina Deolo", pt: "Colina Deolo" },
        description: {
          en: cleanPlainText("Deolo Hill is one of Kalimpong's best-known viewpoints, offering wide mountain and valley landscapes."),
          es: cleanPlainText("Deolo Hill es uno de los miradores más conocidos de Kalimpong, con amplias vistas de las montañas y valles."),
          pt: cleanPlainText("Deolo Hill é um dos mirantes mais conhecidos de Kalimpong, oferecendo amplas vistas das montanhas e vales.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        name: { en: "Durpin Dara Hill", es: "Colina Durpin Dara", pt: "Colina Durpin Dara" },
        description: {
          en: cleanPlainText("Durpin Dara is a scenic hill offering panoramic views of the surrounding landscapes and is also associated with Zang Dhok Palri Phodang monastery."),
          es: cleanPlainText("Durpin Dara es una colina panorámica asociada al monasterio Zang Dhok Palri Phodang."),
          pt: cleanPlainText("Durpin Dara é uma colina panorâmica associada ao mosteiro Zang Dhok Palri Phodang.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Zang Dhok Palri Phodang", es: "Zang Dhok Palri Phodang", pt: "Zang Dhok Palri Phodang" },
        description: {
          en: cleanPlainText("This Buddhist monastery is an important spiritual and cultural attraction in Kalimpong, surrounded by mountain scenery."),
          es: cleanPlainText("Este monasterio budista es una importante atracción espiritual y cultural de Kalimpong."),
          pt: cleanPlainText("Este mosteiro budista é uma importante atração espiritual e cultural de Kalimpong.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Cactus Nursery", es: "Vivero de Cactus", pt: "Viveiro de Cactos" },
        description: {
          en: cleanPlainText("Kalimpong's nurseries are known for their wide variety of ornamental plants, flowers and cacti, reflecting the town's horticultural character."),
          es: cleanPlainText("Los viveros de Kalimpong son conocidos por su variedad de plantas ornamentales, flores y cactus."),
          pt: cleanPlainText("Os viveiros de Kalimpong são conhecidos por sua variedade de plantas ornamentais, flores e cactos.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Teesta River", es: "Río Teesta", pt: "Rio Teesta" },
        description: {
          en: cleanPlainText("The Teesta River adds a dramatic natural element to the Kalimpong landscape and provides opportunities for scenic drives and adventure activities."),
          es: cleanPlainText("El río Teesta aporta un paisaje natural espectacular a Kalimpong y permite realizar recorridos panorámicos y actividades de aventura."),
          pt: cleanPlainText("O rio Teesta acrescenta uma paisagem natural impressionante a Kalimpong e permite passeios panorâmicos e atividades de aventura.")
        }
      }
    ]
  },

  // 4. DIGHA
  {
    id: "digha",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 4,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    slug: { en: "digha", es: "digha", pt: "digha" },
    name: { en: "Digha", es: "Digha", pt: "Digha" },
    description: {
      en: "<p><strong>Digha</strong> is one of West Bengal's best-known coastal destinations, offering sandy beaches, sea views, sunsets, seafood, family-friendly attractions and a relaxed seaside atmosphere.</p>",
      es: "<p><strong>Digha</strong> es uno de los destinos costeros más conocidos de Bengala Occidental, con playas, vistas al mar, atardeceres, mariscos y un ambiente relajado.</p>",
      pt: "<p><strong>Digha</strong> é um dos destinos costeiros mais conhecidos de Bengala Ocidental, oferecendo praias, vistas para o mar, pôr do sol, frutos do mar e um ambiente tranquilo.</p>"
    },
    overview: {
      en: `<h2>Explore Digha – West Bengal's Popular Beach Destination</h2>

<p>Digha is a popular seaside destination on the Bay of Bengal and is especially suitable for travellers looking for a relaxed coastal holiday.</p>

<p>The town offers beaches, seaside walks, sunsets, local seafood, markets and nearby attractions. It is also a convenient destination for family holidays and short coastal breaks.</p>`,
      es: `<h2>Explora Digha – La Popular Playa de Bengala Occidental</h2>

<p>Digha es un conocido destino turístico junto a la Bahía de Bengala, ideal para unas vacaciones familiares o escapadas costeras relajantes.</p>

<p>Ofrece playas de arena, paseos marítimos, espectaculares atardeceres, mariscos frescos y mercados locales.</p>`,
      pt: `<h2>Explore Digha – O Popular Destino de Praia de Bengala Ocidental</h2>

<p>Digha é um famoso destino turístico à beira da Baía de Bengala, perfeito para férias em família ou passeios tranquilizadores no litoral.</p>

<p>Oferece praias de areia, caminhadas à beira-mar, entardeceres inesquecíveis, frutos do mar e comércio local.</p>`
    },
    seoTitle: {
      en: "Digha Tourism – Beaches, Sunset, Sea & Coastal Holidays",
      es: "Turismo de Digha – Playas, Atardeceres y Vacaciones junto al Mar",
      pt: "Turismo de Digha – Praias, Pôr do Sol e Férias à Beira-Mar"
    },
    seoDesc: {
      en: "Explore Digha beach resort in West Bengal. Visit New Digha Beach, Old Digha Beach, Marine Aquarium, Shankarpur and Udaipur Beach.",
      es: "Explora la playa de Digha en Bengala Occidental. Visita New Digha, Old Digha, el Acuario Marino, Shankarpur y la Playa Udaipur.",
      pt: "Explore a praia de Digha em Bengala Ocidental. Visite New Digha, Old Digha, o Aquário Marinho, Shankarpur e a Praia Udaipur."
    },
    seoKeywords: {
      en: "Digha, Digha Tourism, Digha Beach, New Digha, Old Digha, Shankarpur, Udaipur Beach, West Bengal Beaches",
      es: "Digha, Turismo de Digha, Playa Digha, New Digha, Old Digha, Shankarpur, Playa Udaipur",
      pt: "Digha, Turismo de Digha, Praia de Digha, New Digha, Old Digha, Shankarpur, Praia Udaipur"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "New Digha Beach", es: "Playa New Digha", pt: "Praia New Digha" },
        description: {
          en: cleanPlainText("New Digha Beach is one of the main beach areas and is popular for sea views, walks and sunset experiences."),
          es: cleanPlainText("New Digha Beach es una de las principales zonas de playa, popular para paseos, vistas al mar y atardeceres."),
          pt: cleanPlainText("New Digha Beach é uma das principais áreas de praia, popular para caminhadas, vistas para o mar e pôr do sol.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Old Digha Beach", es: "Playa Old Digha", pt: "Praia Old Digha" },
        description: {
          en: cleanPlainText("Old Digha Beach represents the traditional seaside character of the destination and is surrounded by local activity and food stalls."),
          es: cleanPlainText("Old Digha Beach representa el ambiente costero tradicional de Digha y está rodeada de actividad local y puestos de comida."),
          pt: cleanPlainText("Old Digha Beach representa o ambiente costeiro tradicional de Digha e é cercada por atividades locais e barracas de comida.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Marine Aquarium", es: "Acuario Marino", pt: "Aquário Marinho" },
        description: {
          en: cleanPlainText("The marine aquarium provides an opportunity to learn about marine species and coastal biodiversity."),
          es: cleanPlainText("El acuario marino permite conocer especies marinas y la biodiversidad costera."),
          pt: cleanPlainText("O aquário marinho permite conhecer espécies marinhas e a biodiversidade costeira.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Shankarpur Beach", es: "Playa Shankarpur", pt: "Praia Shankarpur" },
        description: {
          en: cleanPlainText("Shankarpur is a quieter coastal destination near Digha, offering a more peaceful beach environment."),
          es: cleanPlainText("Shankarpur es un destino costero más tranquilo cerca de Digha y ofrece un ambiente de playa más relajado."),
          pt: cleanPlainText("Shankarpur é um destino costeiro mais tranquilo perto de Digha e oferece um ambiente de praia mais relaxante.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Udaipur Beach", es: "Playa Udaipur", pt: "Praia Udaipur" },
        description: {
          en: cleanPlainText("Udaipur Beach is a coastal area between Digha and Odisha, known for its seaside landscape and relatively quieter atmosphere."),
          es: cleanPlainText("Udaipur Beach es una zona costera situada entre Digha y Odisha, conocida por sus paisajes marítimos y ambiente tranquilo."),
          pt: cleanPlainText("Udaipur Beach é uma área costeira entre Digha e Odisha, conhecida por sua paisagem marítima e ambiente tranquilo.")
        }
      }
    ]
  },

  // 5. SILIGURI
  {
    id: "siliguri",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 5,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    slug: { en: "siliguri", es: "siliguri", pt: "siliguri" },
    name: { en: "Siliguri", es: "Siliguri", pt: "Siliguri" },
    description: {
      en: "<p><strong>Siliguri</strong> is an important gateway to North Bengal and the Himalayan destinations of Darjeeling and Kalimpong. The city is surrounded by tea gardens, forests and river landscapes and is an important base for exploring the wider region.</p>",
      es: "<p><strong>Siliguri</strong> es una importante puerta de entrada al norte de Bengala y a los destinos del Himalaya como Darjeeling y Kalimpong. Está rodeada de plantaciones de té, bosques y paisajes fluviales.</p>",
      pt: "<p><strong>Siliguri</strong> é uma importante porta de entrada para North Bengal e destinos do Himalaia como Darjeeling e Kalimpong. A cidade é cercada por plantações de chá, florestas e paisagens fluviais.</p>"
    },
    overview: {
      en: `<h2>Explore Siliguri – Gateway to North Bengal</h2>

<p>Siliguri is strategically located for travellers exploring the mountains, forests and tea gardens of North Bengal. The city combines urban facilities with easy access to nature destinations.</p>

<p>It is commonly used as a base for journeys toward Darjeeling, Kalimpong, Dooars and neighbouring Himalayan areas.</p>

<h3>Nature</h3>

<p>Tea gardens, forests and river landscapes surround the wider Siliguri region.</p>

<h3>Wildlife</h3>

<p>Nearby forests and wildlife destinations make Siliguri useful as a base for nature-focused journeys.</p>

<h3>Shopping</h3>

<p>The city's markets provide opportunities to purchase clothing, handicrafts, tea and local products.</p>`,
      es: `<h2>Explora Siliguri – Puerta de Entrada al Norte de Bengala</h2>

<p>Siliguri cuenta con una ubicación estratégica para recorrer montañas, santuarios de vida silvestre y plantaciones de té del norte de Bengala.</p>

<p>Es la base principal hacia Darjeeling, Kalimpong, Dooars y las regiones del Himalaya.</p>

<h3>Naturaleza</h3>

<p>Extensas plantaciones de té y bosques rodean la ciudad.</p>

<h3>Vida Silvestre</h3>

<p>Próxima a reservas naturales y parques de safaris.</p>

<h3>Compras</h3>

<p>Mercados locales animados para adquirir ropa, té e artesanías regionales.</p>`,
      pt: `<h2>Explore Siliguri – Porta de Entrada para North Bengal</h2>

<p>Siliguri possui localização estratégica para explorar as montanhas, florestas e plantações de chá do norte de Bengala.</p>

<p>Serve como ponto de partida para Darjeeling, Kalimpong, Dooars e áreas vizinhas do Himalaia.</p>

<h3>Natureza</h3>

<p>Plantações de chá e áreas verdes cercam a região de Siliguri.</p>

<h3>Vida Selvagem</h3>

<p>Proximidade com santuários ecológicos e passeios de safári.</p>

<h3>Compras</h3>

<p>Mercados locais vibrantes ideais para comprar chás, produtos artesanais e lembranças.</p>`
    },
    seoTitle: {
      en: "Siliguri Tourism – Gateway to Darjeeling, Kalimpong & North Bengal",
      es: "Turismo de Siliguri – Puerta de Entrada a Darjeeling y Kalimpong",
      pt: "Turismo de Siliguri – Porta de Entrada para Darjeeling e Kalimpong"
    },
    seoDesc: {
      en: "Discover Siliguri, the commercial gateway to North Bengal. Visit Mahananda Wildlife Sanctuary, ISKCON Temple, Coronation Bridge and Bengal Safari.",
      es: "Descubre Siliguri, la puerta comercial del norte de Bengala. Visita Mahananda Sanctuary, ISKCON Temple, Coronation Bridge y Bengal Safari.",
      pt: "Descubra Siliguri, o portal do norte de Bengala. Visite Mahananda Sanctuary, ISKCON Temple, Coronation Bridge e Bengal Safari."
    },
    seoKeywords: {
      en: "Siliguri, Siliguri Tourism, North Bengal, Darjeeling Gateway, Kalimpong Gateway, Mahananda Wildlife Sanctuary, Bengal Safari",
      es: "Siliguri, Turismo de Siliguri, North Bengal, Puerta a Darjeeling, Mahananda Sanctuary, Bengal Safari",
      pt: "Siliguri, Turismo de Siliguri, North Bengal, Portal de Darjeeling, Mahananda Sanctuary, Bengal Safari"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Mahananda Wildlife Sanctuary", es: "Santuario de Vida Silvestre Mahananda", pt: "Santuário de Vida Selvagem Mahananda" },
        description: {
          en: cleanPlainText("Mahananda Wildlife Sanctuary is a forested wildlife destination near Siliguri, offering opportunities for nature exploration and bird watching."),
          es: cleanPlainText("Mahananda Wildlife Sanctuary es una zona forestal cerca de Siliguri, adecuada para la observación de naturaleza y aves."),
          pt: cleanPlainText("Mahananda Wildlife Sanctuary é uma área florestal perto de Siliguri, adequada para observação da natureza e aves.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "ISKCON Temple", es: "Templo ISKCON", pt: "Templo ISKCON" },
        description: {
          en: cleanPlainText("ISKCON Temple is a peaceful spiritual attraction in Siliguri known for its temple architecture and devotional atmosphere."),
          es: cleanPlainText("ISKCON Temple es una atracción espiritual tranquila conocida por su arquitectura y ambiente devocional."),
          pt: cleanPlainText("ISKCON Temple é uma atração espiritual tranquila conhecida por sua arquitetura e ambiente devocional.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Coronation Bridge", es: "Puente Coronation", pt: "Ponte Coronation" },
        description: {
          en: cleanPlainText("Coronation Bridge is a historic bridge over the Teesta River and an important scenic landmark of the wider North Bengal region."),
          es: cleanPlainText("Coronation Bridge es un puente histórico sobre el río Teesta y un importante punto panorámico de la región."),
          pt: cleanPlainText("Coronation Bridge é uma ponte histórica sobre o rio Teesta e um importante ponto panorâmico da região.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Bengal Safari", es: "Bengal Safari", pt: "Bengal Safari" },
        description: {
          en: cleanPlainText("Bengal Safari provides visitors with a wildlife-focused experience featuring animals and natural landscapes."),
          es: cleanPlainText("Bengal Safari ofrece una experiencia centrada en la vida silvestre y los paisajes naturales."),
          pt: cleanPlainText("Bengal Safari oferece uma experiência voltada para a vida selvagem e paisagens naturais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Hong Kong Market", es: "Mercado Hong Kong", pt: "Mercado Hong Kong" },
        description: {
          en: cleanPlainText("Hong Kong Market is a popular shopping area where visitors can explore a wide range of goods and local shopping experiences."),
          es: cleanPlainText("Hong Kong Market es una zona comercial popular con una amplia variedad de productos."),
          pt: cleanPlainText("Hong Kong Market é uma área comercial popular com uma grande variedade de produtos.")
        }
      }
    ]
  },

  // 6. MURSHIDABAD
  {
    id: "murshidabad",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 6,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
    slug: { en: "murshidabad", es: "murshidabad", pt: "murshidabad" },
    name: { en: "Murshidabad", es: "Murshidabad", pt: "Murshidabad" },
    description: {
      en: "<p><strong>Murshidabad</strong> is one of West Bengal's most important historical destinations, known for palaces, mosques, gardens, museums and the legacy of Bengal's former political and cultural centres.</p>",
      es: "<p><strong>Murshidabad</strong> es uno de los destinos históricos más importantes de Bengala Occidental, conocido por sus palacios, mezquitas, jardines, museos y patrimonio cultural.</p>",
      pt: "<p><strong>Murshidabad</strong> é um dos destinos históricos mais importantes de Bengala Ocidental, conhecido por palácios, mesquitas, jardins, museus e patrimônio cultural.</p>"
    },
    overview: {
      en: `<h2>Explore Murshidabad – Palaces, History & Heritage</h2>

<p>Murshidabad offers a journey through the historical heritage of Bengal. The town and surrounding region contain grand palaces, historic mosques, tombs, gardens and buildings associated with the Nawabi period.</p>

<p>The destination is particularly suitable for heritage travellers, architecture enthusiasts, photographers and visitors interested in the history of Bengal.</p>

<h3>Architecture</h3>

<p>Large palaces, domes, courtyards, gardens and historic structures create an impressive architectural landscape.</p>

<h3>River Heritage</h3>

<p>The Bhagirathi River is closely connected with the geography and historical development of Murshidabad.</p>

<h3>Crafts</h3>

<p>The region is also associated with traditional silk weaving and handicrafts.</p>`,
      es: `<h2>Explora Murshidabad – Palacios, Historia y Patrimonio</h2>

<p>Murshidabad invita a un viaje por el esplendor histórico de Bengala. La zona alberga magníficos palacios, mezquitas históricas, tumbas reales y jardines de la época de los Nawabs.</p>

<p>Ideal para amantes del turismo histórico, la arquitectura señorial y la fotografía.</p>

<h3>Arquitectura</h3>

<p>Palacios majestuosos, cúpulas, patios y jardines conforman un valioso conjunto patrimonial.</p>

<h3>Herencia Fluvial</h3>

<p>El río Bhagirathi forma parte indisoluble de la historia y paisaje de Murshidabad.</p>

<h3>Artesanía</h3>

<p>Famosa por la tejeduría de seda tradicional y productos artesanales.</p>`,
      pt: `<h2>Explore Murshidabad – Palácios, História e Patrimônio</h2>

<p>Murshidabad convida a uma viagem pelo patrimônio histórico de Bengala. A região preserva palácios suntuosos, mesquitas históricas, mausoléus e jardins da era dos Nawabs.</p>

<p>Perfeito para apreciadores de história, arquitetura antiga e fotografia.</p>

<h3>Arquitetura</h3>

<p>Palácios imponentes, cúpulas ornamentadas e jardins históricos compõem a paisagem.</p>

<h3>Patrimônio Fluvial</h3>

<p>O rio Bhagirathi está intimamente ligado ao desenvolvimento e cenário da cidade.</p>

<h3>Artesanato</h3>

<p>A região é tradicionalmente reconhecida pela produção de seda e tecelagem artesanal.</p>`
    },
    seoTitle: {
      en: "Murshidabad Tourism – Hazarduari Palace, Heritage & History",
      es: "Turismo de Murshidabad – Hazarduari Palace, Patrimonio e Historia",
      pt: "Turismo de Murshidabad – Hazarduari Palace, Patrimônio e História"
    },
    seoDesc: {
      en: "Discover Murshidabad in West Bengal. Visit Hazarduari Palace, Katra Mosque, Nizamat Imambara, Khosh Bagh and Kathgola Palace.",
      es: "Descubre Murshidabad en Bengala Occidental. Visita Hazarduari Palace, Katra Mosque, Nizamat Imambara, Khosh Bagh y Kathgola Palace.",
      pt: "Descubra Murshidabad em Bengala Ocidental. Visite Hazarduari Palace, Katra Mosque, Nizamat Imambara, Khosh Bagh e Kathgola Palace."
    },
    seoKeywords: {
      en: "Murshidabad, Murshidabad Tourism, Hazarduari Palace, Nizamat Imambara, Katra Mosque, Khosh Bagh, Kathgola Palace, Bengal Heritage",
      es: "Murshidabad, Turismo de Murshidabad, Hazarduari Palace, Nizamat Imambara, Katra Mosque, Khosh Bagh",
      pt: "Murshidabad, Turismo de Murshidabad, Hazarduari Palace, Nizamat Imambara, Katra Mosque, Khosh Bagh"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Hazarduari Palace", es: "Palacio Hazarduari", pt: "Palácio Hazarduari" },
        description: {
          en: cleanPlainText("Hazarduari Palace is one of Murshidabad's most recognizable heritage buildings and houses museum collections associated with the region's history."),
          es: cleanPlainText("Hazarduari Palace es uno de los edificios patrimoniales más reconocibles de Murshidabad y alberga colecciones relacionadas con la historia regional."),
          pt: cleanPlainText("Hazarduari Palace é um dos edifícios históricos mais reconhecidos de Murshidabad e abriga coleções relacionadas à história da região.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Katra Mosque", es: "Mezquita Katra", pt: "Mesquita Katra" },
        description: {
          en: cleanPlainText("Katra Mosque is an important historic mosque known for its architecture and association with Murshidabad's Nawabi heritage."),
          es: cleanPlainText("Katra Mosque es una importante mezquita histórica relacionada con el patrimonio de la época de los Nawabs."),
          pt: cleanPlainText("Katra Mosque é uma importante mesquita histórica associada ao patrimônio da época dos Nawabs.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Nizamat Imambara", es: "Nizamat Imambara", pt: "Nizamat Imambara" },
        description: {
          en: cleanPlainText("Nizamat Imambara is an important religious and architectural landmark located near Hazarduari Palace."),
          es: cleanPlainText("Nizamat Imambara es un importante monumento religioso y arquitectónico situado cerca de Hazarduari Palace."),
          pt: cleanPlainText("Nizamat Imambara é um importante monumento religioso e arquitetônico localizado perto do Hazarduari Palace.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Khosh Bagh", es: "Khosh Bagh", pt: "Khosh Bagh" },
        description: {
          en: cleanPlainText("Khosh Bagh is a historic garden and burial complex associated with the Nawabi history of Murshidabad."),
          es: cleanPlainText("Khosh Bagh es un jardín histórico y complejo funerario relacionado con la historia de los Nawabs de Murshidabad."),
          pt: cleanPlainText("Khosh Bagh é um jardim histórico e complexo funerário associado à história dos Nawabs de Murshidabad.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Kathgola Palace", es: "Palacio Kathgola", pt: "Palácio Kathgola" },
        description: {
          en: cleanPlainText("Kathgola Palace is a heritage property surrounded by gardens and historic structures, providing another perspective on Murshidabad's architectural heritage."),
          es: cleanPlainText("Kathgola Palace es un complejo patrimonial rodeado de jardines y estructuras históricas."),
          pt: cleanPlainText("Kathgola Palace é um complexo histórico cercado por jardins e estruturas patrimoniais.")
        }
      }
    ]
  },

  // 7. BISHNUPUR
  {
    id: "bishnupur",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 7,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
    slug: { en: "bishnupur", es: "bishnupur", pt: "bishnupur" },
    name: { en: "Bishnupur", es: "Bishnupur", pt: "Bishnupur" },
    description: {
      en: "<p><strong>Bishnupur</strong> is a historic town of West Bengal famous for its terracotta temples, traditional architecture, Baluchari sarees, handicrafts and cultural heritage.</p>",
      es: "<p><strong>Bishnupur</strong> es una ciudad histórica de Bengala Occidental famosa por sus templos de terracota, arquitectura tradicional, saris Baluchari, artesanía y patrimonio cultural.</p>",
      pt: "<p><strong>Bishnupur</strong> é uma cidade histórica de Bengala Ocidental famosa por seus templos de terracota, arquitetura tradicional, tecidos Baluchari, artesanato e patrimônio cultural.</p>"
    },
    overview: {
      en: `<h2>Explore Bishnupur – Terracotta Temples & Bengal's Artistic Heritage</h2>

<p>Bishnupur is one of the most distinctive heritage destinations in West Bengal. The town is known for its terracotta temple architecture, historical monuments, traditional crafts and classical cultural traditions.</p>

<p>The terracotta panels found on several temples depict scenes from mythology, daily life and traditional artistic themes, making Bishnupur particularly valuable for architecture and art enthusiasts.</p>

<h3>Terracotta Architecture</h3>

<p>The town's temples are its defining attraction, featuring detailed terracotta decoration and distinctive architectural forms.</p>

<h3>Traditional Crafts</h3>

<p>Bishnupur is associated with terracotta craft, Baluchari textiles and traditional handicrafts.</p>

<h3>Music & Culture</h3>

<p>The Bishnupur tradition of classical music adds another important cultural dimension to the destination.</p>`,
      es: `<h2>Explora Bishnupur – Templos de Terracota y Arte Bengalí</h2>

<p>Bishnupur es uno de los destinos patrimoniales más singulares de Bengala Occidental, famoso por sus templos de terracota, artesanías y tradición musical.</p>

<p>Sus intrincados relieves esculpidos en arcilla cocida representan pasajes mitológicos y escenas de la vida tradicional.</p>

<h3>Arquitectura de Terracota</h3>

<p>Los templos constituyen el gran atractivo arquitectónico de la ciudad por sus elaboradas fachadas.</p>

<h3>Artesanía Tradicional</h3>

<p>Reconocida por la elaboración de artesanías de terracota y los renombrados saris Baluchari.</p>

<h3>Música y Cultura</h3>

<p>La escuela clásica de música de Bishnupur enriquece el legado cultural de la región.</p>`,
      pt: `<h2>Explore Bishnupur – Templos de Terracota e Arte Bengali</h2>

<p>Bishnupur é um dos destinos históricos mais distintos de Bengala Ocidental, célebre por seus templos em terracota, tecidos artesanais e tradição musical.</p>

<p>Os painéis entalhados em argila retratam passagens mitológicas e a cultura tradicional.</p>

<h3>Arquitetura em Terracota</h3>

<p>Os templos são o grande destaque com detalhes esculpidos em barro queimado.</p>

<h3>Artesanato Tradicional</h3>

<p>Famosa pelo artesanato em terracota e pelos valiosos saris Baluchari.</p>

<h3>Música e Cultura</h3>

<p>A tradição clássica musical de Bishnupur adiciona valor cultural inestimável à viagem.</p>`
    },
    seoTitle: {
      en: "Bishnupur Tourism – Terracotta Temples, Heritage & Art",
      es: "Turismo de Bishnupur – Templos de Terracota, Patrimonio y Arte",
      pt: "Turismo de Bishnupur – Templos de Terracota, Patrimônio e Arte"
    },
    seoDesc: {
      en: "Explore Bishnupur in West Bengal. Visit famous terracotta temples Rasmancha, Jor Bangla Temple, Shyam Rai Temple, Madan Mohan Temple and Baluchari saree weavers.",
      es: "Explora Bishnupur en Bengala Occidental. Visita los templos de terracota Rasmancha, Jor Bangla, Shyam Rai y Madan Mohan.",
      pt: "Explore Bishnupur em Bengala Ocidental. Visite os templos de terracota Rasmancha, Jor Bangla, Shyam Rai e Madan Mohan."
    },
    seoKeywords: {
      en: "Bishnupur, Bishnupur Tourism, Terracotta Temples, Rasmancha, Jor Bangla Temple, Shyam Rai Temple, Madan Mohan Temple, Bengal Heritage",
      es: "Bishnupur, Turismo de Bishnupur, Templos de Terracota, Rasmancha, Jor Bangla, Shyam Rai",
      pt: "Bishnupur, Turismo de Bishnupur, Templos de Terracota, Rasmancha, Jor Bangla, Shyam Rai"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Rasmancha", es: "Rasmancha", pt: "Rasmancha" },
        description: {
          en: cleanPlainText("Rasmancha is one of Bishnupur's most recognizable historic structures and an important example of the town's distinctive architectural tradition."),
          es: cleanPlainText("Rasmancha es una de las estructuras históricas más reconocibles de Bishnupur y un ejemplo importante de su arquitectura tradicional."),
          pt: cleanPlainText("Rasmancha é uma das estruturas históricas mais reconhecidas de Bishnupur e um exemplo importante de sua arquitetura tradicional.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Jor Bangla Temple", es: "Templo Jor Bangla", pt: "Templo Jor Bangla" },
        description: {
          en: cleanPlainText("Jor Bangla Temple is famous for its terracotta decoration and traditional Bengali architectural design."),
          es: cleanPlainText("Jor Bangla Temple es famoso por su decoración de terracota y su arquitectura tradicional bengalí."),
          pt: cleanPlainText("Jor Bangla Temple é famoso por sua decoração de terracota e arquitetura tradicional bengali.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Shyam Rai Temple", es: "Templo Shyam Rai", pt: "Templo Shyam Rai" },
        description: {
          en: cleanPlainText("Shyam Rai Temple is an important terracotta temple known for its detailed decorative panels and architectural character."),
          es: cleanPlainText("Shyam Rai Temple es un importante templo de terracota conocido por sus paneles decorativos detallados."),
          pt: cleanPlainText("Shyam Rai Temple é um importante templo de terracota conhecido por seus painéis decorativos detalhados.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Madan Mohan Temple", es: "Templo Madan Mohan", pt: "Templo Madan Mohan" },
        description: {
          en: cleanPlainText("Madan Mohan Temple is one of Bishnupur's important temples and is admired for its architecture and terracotta artwork."),
          es: cleanPlainText("Madan Mohan Temple es uno de los templos importantes de Bishnupur y destaca por su arquitectura y arte de terracota."),
          pt: cleanPlainText("Madan Mohan Temple é um dos templos importantes de Bishnupur e destaca-se por sua arquitetura e arte em terracota.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Lalbandh", es: "Lalbandh", pt: "Lalbandh" },
        description: {
          en: cleanPlainText("Lalbandh is a historic water reservoir associated with Bishnupur's landscape and heritage."),
          es: cleanPlainText("Lalbandh es un antiguo depósito de agua relacionado con el paisaje y patrimonio histórico de Bishnupur."),
          pt: cleanPlainText("Lalbandh é um antigo reservatório de água associado à paisagem e ao patrimônio histórico de Bishnupur.")
        }
      }
    ]
  },

  // 8. SUNDARBANS (Special Destination)
  {
    id: "sundarbans",
    stateId: "west-bengal",
    isPublished: true,
    isDeleted: false,
    displayOrder: 8,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
    slug: { en: "sundarbans", es: "sundarbans", pt: "sundarbans" },
    name: { en: "Sundarbans", es: "Sundarbans", pt: "Sundarbans" },
    description: {
      en: "<p><strong>Sundarbans</strong> is one of the world's most distinctive mangrove ecosystems and a major wildlife destination of West Bengal. It is known for mangrove forests, waterways, biodiversity and the Royal Bengal Tiger. The Sundarbans National Park is a UNESCO World Heritage Site.</p>",
      es: "<p><strong>Sundarbans</strong> es uno de los ecosistemas de manglares más singulares del mundo y uno de los principales destinos de naturaleza de Bengala Occidental. Es conocido por sus bosques de manglares, canales, biodiversidad y tigre de Bengala.</p>",
      pt: "<p><strong>Sundarbans</strong> é um dos ecossistemas de manguezais mais singulares do mundo e um dos principais destinos de vida selvagem de Bengala Ocidental. É conhecido por suas florestas de mangue, canais, biodiversidade e tigre-de-bengala.</p>"
    },
    overview: {
      en: `<h2>Explore Sundarbans – Mangroves, Wildlife & River Adventures</h2>

<p>The Sundarbans is a vast mangrove ecosystem spread across the delta region of India and Bangladesh. The Indian Sundarbans contain the Sundarbans National Park, Tiger Reserve and Biosphere Reserve and are recognized for their exceptional biodiversity.</p>

<p>The landscape is defined by tidal waterways, dense mangrove forests, islands and wildlife habitats. Boat safaris are an important way to explore the region, with tourism routes including destinations such as <strong>Sajnekhali, Sudhanyakhali, Dobanki, Buridabri and Jhingekhali</strong>.</p>

<h3>Wildlife</h3>

<p>The Sundarbans is famous for the Royal Bengal Tiger and also supports a variety of other wildlife including deer, crocodiles, fishing cats, turtles, birds and aquatic species.</p>

<h3>Mangrove Ecosystem</h3>

<p>The mangrove forests are the defining natural feature of the region and create a complex network of islands and waterways.</p>

<h3>Boat Safari</h3>

<p>Boat-based exploration is one of the key tourism experiences because many parts of the mangrove landscape are best experienced from the waterways.</p>`,
      es: `<h2>Explora Sundarbans – Manglares, Vida Silvestre y Safaris Fluviales</h2>

<p>El Sundarbans es un inmenso delta de manglares compartido entre la India y Bangladesh. En Bengala Occidental incluye el Parque Nacional Sundarbans, Reserva de Tigres y Reserva de la Biosfera Patrimonio de la Humanidad por la UNESCO.</p>

<p>El paisaje destaca por canales de marea, densos bosques de manglar e islas. Los safaris en barco son la forma ideal de explorar zonas como <strong>Sajnekhali, Sudhanyakhali y Dobanki</strong>.</p>

<h3>Vida Silvestre</h3>

<p>Hogar del célebre Tigre Real de Bengala, cocodrilos marinos, ciervos y ricas especies de aves.</p>

<h3>Ecosistema de Manglares</h3>

<p>Uno de los mayores bosques de manglar del planeta con una compleja red de esteros.</p>

<h3>Safari en Barco</h3>

<p>Navegar por sus canales en lancha es la experiencia turística imprescindible del Sundarbans.</p>`,
      pt: `<h2>Explore Sundarbans – Manguezais, Vida Selvagem e Safáris Fluviais</h2>

<p>Sundarbans é um vasto ecossistema de manguezal na região do delta. O Parque Nacional de Sundarbans é reconhecido como Patrimônio Mundial pela UNESCO por sua biodiversidade única.</p>

<p>A paisagem é formada por canais, florestas densas de mangue e ilhas. Os safáris de barco passam por pontos como <strong>Sajnekhali, Sudhanyakhali e Dobanki</strong>.</p>

<h3>Vida Selvagem</h3>

<p>Mundialmente famoso pelo Tigre-de-Bengala, crocodilos de água salgada, cervos e diversas aves.</p>

<h3>Ecossistema de Manguezal</h3>

<p>Uma das maiores reservas de manguezal do mundo com canais navegáveis.</p>

<h3>Safári de Barco</h3>

<p>A navegação pelos canais é a principal forma de conhecer a vida selvagem e a natureza de Sundarbans.</p>`
    },
    seoTitle: {
      en: "Sundarbans Tourism – Tiger Reserve, Mangrove Boat Safari & Wildlife",
      es: "Turismo de Sundarbans – Reserva de Tigres y Safari en Barco",
      pt: "Turismo de Sundarbans – Reserva de Tigres e Safári de Barco"
    },
    seoDesc: {
      en: "Discover Sundarbans UNESCO World Heritage site in West Bengal. Experience Royal Bengal Tiger safaris, mangrove boat rides, Sajnekhali and Sudhanyakhali watchtowers.",
      es: "Descubre el Parque Nacional Sundarbans en Bengala Occidental. Disfruta de safaris de tigres, paseos en barco por los manglares y miradores de Sajnekhali y Sudhanyakhali.",
      pt: "Descubra o Parque Nacional de Sundarbans em Bengala Ocidental. Viva safáris de tigres, passeios de barco pelos manguezais e torres de observação Sajnekhali e Sudhanyakhali."
    },
    seoKeywords: {
      en: "Sundarbans, Sundarbans Tourism, Royal Bengal Tiger, Mangrove Safari, Sajnekhali, Sudhanyakhali Watch Tower, Dobanki, West Bengal Wildlife",
      es: "Sundarbans, Turismo de Sundarbans, Tigre de Bengala, Safari en Manglares, Sajnekhali, Sudhanyakhali",
      pt: "Sundarbans, Turismo de Sundarbans, Tigre de Bengala, Safári em Manguezais, Sajnekhali, Sudhanyakhali"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Sajnekhali", es: "Sajnekhali", pt: "Sajnekhali" },
        description: {
          en: cleanPlainText("Sajnekhali is an important tourism and wildlife observation area in the Sundarbans and is associated with nature interpretation and watchtower experiences."),
          es: cleanPlainText("Sajnekhali es una importante zona turística y de observación de naturaleza en Sundarbans."),
          pt: cleanPlainText("Sajnekhali é uma importante área turística e de observação da natureza em Sundarbans.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Sudhanyakhali Watch Tower", es: "Torre de Observación Sudhanyakhali", pt: "Torre de Observação Sudhanyakhali" },
        description: {
          en: cleanPlainText("Sudhanyakhali is one of the recognized watchtower areas where visitors may observe the surrounding mangrove landscape and wildlife habitat."),
          es: cleanPlainText("Sudhanyakhali es una de las zonas de observación reconocidas para contemplar los manglares y hábitats de vida silvestre."),
          pt: cleanPlainText("Sudhanyakhali é uma das áreas de observação reconhecidas para apreciar os manguezais e habitats de vida selvagem.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Dobanki", es: "Dobanki", pt: "Dobanki" },
        description: {
          en: cleanPlainText("Dobanki is associated with the mangrove tourism routes and provides opportunities to experience the forest landscape and waterways."),
          es: cleanPlainText("Dobanki forma parte de las rutas turísticas de manglares y permite experimentar el paisaje forestal y sus canales."),
          pt: cleanPlainText("Dobanki faz parte das rotas turísticas dos manguezais e permite conhecer a paisagem florestal e seus canais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Jhingekhali", es: "Jhingekhali", pt: "Jhingekhali" },
        description: {
          en: cleanPlainText("Jhingekhali is another wildlife-oriented location included in Sundarbans tourism routes."),
          es: cleanPlainText("Jhingekhali es otra zona orientada a la observación de naturaleza incluida en las rutas turísticas de Sundarbans."),
          pt: cleanPlainText("Jhingekhali é outra área voltada para observação da natureza incluída nos roteiros turísticos de Sundarbans.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Boat Safari", es: "Safari en Barco", pt: "Safári de Barco" },
        description: {
          en: cleanPlainText("Boat safari is the defining tourism experience of Sundarbans, allowing travellers to navigate through mangrove waterways while observing the surrounding ecosystem."),
          es: cleanPlainText("El safari en barco es la experiencia turística principal de Sundarbans y permite recorrer los canales de manglares y observar el ecosistema."),
          pt: cleanPlainText("O safári de barco é a principal experiência turística de Sundarbans, permitindo navegar pelos canais de mangue e observar o ecossistema.")
        }
      }
    ]
  }
];

wbCitiesData.forEach(city => {
  city.content = city.overview;
  city.fullDescription = city.overview;
});

let addedCount = 0;
let updatedCount = 0;

wbCitiesData.forEach(cityData => {
  const existingIdx = cities.findIndex(c => c.id === cityData.id || c.slug?.en === cityData.slug.en);
  if (existingIdx !== -1) {
    cities[existingIdx] = { ...cities[existingIdx], ...cityData };
    updatedCount++;
  } else {
    cities.push(cityData);
    addedCount++;
  }
});

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Updated cities in cities.json: ${addedCount} added, ${updatedCount} updated. Total cities: ${cities.length}`);
