import fs from 'fs';
import path from 'path';

const statesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'states.json');
const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');

const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

// 1. UPDATE HIMACHAL PRADESH STATE
const hpStateData = {
  id: "himachal-pradesh",
  displayOrder: 8,
  isPublished: true,
  isDeleted: false,
  updatedAt: new Date().toISOString(),
  name: {
    en: "Himachal Pradesh",
    es: "Himachal Pradesh",
    pt: "Himachal Pradesh"
  },
  slug: {
    en: "himachal-pradesh",
    es: "himachal-pradesh",
    pt: "himachal-pradesh"
  },
  image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
  description: {
    en: "Himachal Pradesh is a beautiful Himalayan state in northern India, known for snow-covered mountains, green valleys, dense forests, rivers, temples, monasteries, colonial hill stations and vibrant local culture. From Shimla and Manali to Dharamshala, Dalhousie and Kullu, the state offers a diverse combination of nature, adventure, spirituality, heritage and peaceful mountain escapes.",
    es: "Himachal Pradesh es un hermoso estado del Himalaya en el norte de la India, conocido por sus montañas cubiertas de nieve, valles verdes, bosques densos, ríos, templos, monasterios, estaciones de montaña de época colonial y una vibrante cultura local. Desde Shimla y Manali hasta Dharamshala, Dalhousie y Kullu, el estado ofrece una combinación única de naturaleza, aventura, espiritualidad, patrimonio y tranquilos paisajes de montaña.",
    pt: "Himachal Pradesh é um belo estado do Himalaia, no norte da Índia, conhecido por suas montanhas cobertas de neve, vales verdes, florestas densas, rios, templos, mosteiros, cidades montanhosas de herança colonial e uma cultura local vibrante. De Shimla e Manali a Dharamshala, Dalhousie e Kullu, o estado oferece uma combinação diversificada de natureza, aventura, espiritualidade, patrimônio e tranquilidade nas montanhas."
  },
  overview: {
    en: `<h2>Discover Himachal Pradesh – The Land of the Himalayas</h2>\n\n<p>Himachal Pradesh is one of India's most scenic mountain destinations, located in the western Himalayas. The state is famous for its dramatic landscapes, snow-covered peaks, deep valleys, pine and deodar forests, rivers, alpine meadows and traditional Himalayan settlements.</p>\n\n<p>From the colonial charm of <strong>Shimla</strong> to the snow-covered landscapes of <strong>Manali</strong>, the Tibetan-influenced culture of <strong>Dharamshala</strong>, the peaceful surroundings of <strong>Dalhousie</strong> and the cultural heritage of <strong>Chamba</strong>, Himachal Pradesh offers experiences for different kinds of travellers.</p>\n\n<p>Adventure lovers can enjoy activities such as trekking, skiing, paragliding, river rafting and mountain exploration, while cultural travellers can discover ancient temples, monasteries, traditional architecture, fairs and local cuisine.</p>\n\n<h3>Nature & Landscapes</h3>\n\n<p>The state contains a remarkable variety of Himalayan landscapes, ranging from green valleys and forests to high-altitude mountain regions. Rivers, waterfalls, lakes and mountain passes add to the natural character of the destination.</p>\n\n<h3>Culture & Heritage</h3>\n\n<p>Himachal Pradesh has a rich cultural heritage shaped by Himalayan traditions, Hindu and Buddhist influences and colonial history. Temples, monasteries, old churches, palaces and traditional villages can be found throughout the state.</p>\n\n<h3>Adventure Experiences</h3>\n\n<ul>\n<li>Trekking through Himalayan trails</li>\n<li>River rafting in mountain rivers</li>\n<li>Paragliding in selected destinations</li>\n<li>Skiing and snow experiences</li>\n<li>Camping and nature walks</li>\n<li>Mountain sightseeing and road trips</li>\n</ul>\n\n<p>Himachal Tourism describes the state as a destination suitable for different seasons and highlights destinations such as Shimla, Dharamshala, Manali and Chamba among its major attractions.</p>`,
    es: `<h2>Descubre Himachal Pradesh – La Tierra del Himalaya</h2>\n\n<p>Himachal Pradesh es uno de los destinos de montaña más escénicos de la India, ubicado en el Himalaya occidental. El estado es famoso por sus paisajes espectaculares, cumbres cubiertas de nieve, valles profundos, bosques de pinos y deodar, ríos, prados alpinos y asentamientos tradicionales del Himalaya.</p>\n\n<p>Desde el encanto colonial de <strong>Shimla</strong> hasta los paisajes nevados de <strong>Manali</strong>, la cultura con influencia tibetana de <strong>Dharamshala</strong>, el ambiente tranquilo de <strong>Dalhousie</strong> y el patrimonio cultural de <strong>Chamba</strong>, Himachal Pradesh ofrece experiencias para todo tipo de viajeros.</p>\n\n<p>Los amantes de la aventura pueden disfrutar de actividades como trekking, esquí, parapente, rafting en ríos de montaña y exploración, mientras que los viajeros culturales pueden descubrir templos antiguos, monasterios, arquitectura tradicional, ferias y gastronomía local.</p>\n\n<h3>Naturaleza y Paisajes</h3>\n\n<p>El estado alberga una impresionante variedad de paisajes del Himalaya, desde valles verdes y bosques hasta regiones montañosas de alta altitud. Ríos, cascadas, lagos y pasos de montaña complementan el carácter natural del destino.</p>\n\n<h3>Cultura y Patrimonio</h3>\n\n<p>Himachal Pradesh cuenta con un rico patrimonio cultural moldeado por las tradiciones del Himalaya, influencias hindúes y budistas y la historia colonial. Templos, monasterios, antiguas iglesias, palacios y pueblos tradicionales se encuentran en todo el estado.</p>\n\n<h3>Experiencias de Aventura</h3>\n\n<ul>\n<li>Trekking por senderos del Himalaya</li>\n<li>Rafting en ríos de montaña</li>\n<li>Parapente en destinos seleccionados</li>\n<li>Esquí y experiencias en la nieve</li>\n<li>Camping y caminatas por la naturaleza</li>\n<li>Rutas escénicas y viajes por carretera</li>\n</ul>\n\n<p>El turismo en Himachal ofrece experiencias inolvidables durante todo el año, destacando destinos como Shimla, Dharamshala, Manali y Chamba entre sus principales atracciones.</p>`,
    pt: `<h2>Descubra Himachal Pradesh – A Terra do Himalaia</h2>\n\n<p>Himachal Pradesh é um dos destinos de montanha mais cênicos da Índia, localizado no Himalaia ocidental. O estado é famoso por suas paisagens dramáticas, picos cobertos de neve, vales profundos, florestas de pinheiros e cedros, rios, campos alpinos e povoados tradicionais do Himalaia.</p>\n\n<p>Do charme colonial de <strong>Shimla</strong> às paisagens nevadas de <strong>Manali</strong>, da cultura de influência tibetana de <strong>Dharamshala</strong> ao ambiente tranquilo de <strong>Dalhousie</strong> e ao patrimônio cultural de <strong>Chamba</strong>, Himachal Pradesh oferece experiências para todos os tipos de viajantes.</p>\n\n<p>Os amantes da aventura podem desfrutar de atividades como trekking, esqui, paragliding, rafting em rios e exploração de montanhas, enquanto os viajantes culturais podem descobrir templos antigos, mosteiros, arquitetura tradicional, feiras e gastronomia local.</p>\n\n<h3>Natureza e Paisagens</h3>\n\n<p>O estado possui uma variedade impressionante de paisagens do Himalaia, variando de vales verdes e florestas a regiões de alta altitude. Rios, cachoeiras, lagos e passos de montanha enriquecem a beleza natural do destino.</p>\n\n<h3>Cultura e Patrimônio</h3>\n\n<p>Himachal Pradesh possui um rico patrimônio cultural moldado por tradições do Himalaia, influências hindus e budistas e pela história colonial. Templos, mosteiros, igrejas antigas, palácios e vilas tradicionais podem ser encontrados por todo o estado.</p>\n\n<h3>Experiências de Aventura</h3>\n\n<ul>\n<li>Trekking por trilhas do Himalaia</li>\n<li>Rafting em rios de montanha</li>\n<li>Paragliding em destinos selecionados</li>\n<li>Esqui e experiências na neve</li>\n<li>Camping e caminhadas na natureza</li>\n<li>Passeios panorâmicos e viagens de estrada</li>\n</ul>\n\n<p>O turismo em Himachal é ideal para diferentes estações do ano, destacando destinos como Shimla, Dharamshala, Manali e Chamba entre suas principais atrações.</p>`
  },
  seoTitle: {
    en: "Himachal Pradesh Tourism – Explore Mountains, Valleys & Hill Stations",
    es: "Turismo de Himachal Pradesh – Montañas, Valles y Estaciones de Montaña",
    pt: "Turismo de Himachal Pradesh – Montanhas, Vales e Cidades de Montanha"
  },
  seoDesc: {
    en: "Explore Himachal Pradesh with its beautiful Himalayan landscapes, Shimla, Manali, Dharamshala, Dalhousie, Kullu and Chamba, offering nature, adventure, culture and heritage.",
    es: "Descubre Himachal Pradesh, sus paisajes del Himalaya, Shimla, Manali, Dharamshala, Dalhousie, Kullu y Chamba, con naturaleza, aventura, cultura y patrimonio.",
    pt: "Explore Himachal Pradesh, seus incríveis cenários do Himalaia, Shimla, Manali, Dharamshala, Dalhousie, Kullu e Chamba, com natureza, aventura, cultura e patrimônio."
  },
  seoKeywords: {
    en: "Himachal Pradesh, Himachal Tourism, Shimla, Manali, Dharamshala, Dalhousie, Kullu, Chamba, Kasauli, Himalayas, Mountain Tourism, Adventure Tourism",
    es: "Himachal Pradesh, Turismo de Himachal, Shimla, Manali, Dharamshala, Dalhousie, Kullu, Chamba, Kasauli, Himalaya, Turismo de Montaña, Turismo de Aventura",
    pt: "Himachal Pradesh, Turismo de Himachal, Shimla, Manali, Dharamshala, Dalhousie, Kullu, Chamba, Kasauli, Himalaia, Turismo de Montanha, Turismo de Aventura"
  }
};

const stateIdx = states.findIndex(s => s.id === 'himachal-pradesh');
if (stateIdx >= 0) {
  states[stateIdx] = { ...states[stateIdx], ...hpStateData };
} else {
  states.push(hpStateData);
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Himachal Pradesh state updated in states.json.');

// 2. CITIES DATA
const hpCities = [
  // 1. SHIMLA
  {
    id: "shimla",
    stateId: "himachal-pradesh",
    displayOrder: 1,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Shimla", es: "Shimla", pt: "Shimla" },
    slug: { en: "shimla", es: "shimla", pt: "shimla" },
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
    description: {
      en: "Shimla is the capital of Himachal Pradesh and one of India's most famous hill stations. Known for colonial architecture, mountain views, The Ridge, Mall Road, historic churches and scenic surroundings, Shimla combines heritage with Himalayan beauty.",
      es: "Shimla es la capital de Himachal Pradesh y una de las estaciones de montaña más famosas de la India. Conocida por su arquitectura colonial, vistas de las montañas, The Ridge, Mall Road, iglesias históricas y paisajes naturales, Shimla combina patrimonio y belleza del Himalaya.",
      pt: "Shimla é a capital de Himachal Pradesh e uma das cidades montanhosas mais famosas da Índia. Conhecida por sua arquitetura colonial, vistas das montanhas, The Ridge, Mall Road, igrejas históricas e paisagens naturais, Shimla combina patrimônio e beleza do Himalaia."
    },
    overview: {
      en: `<h2>Explore Shimla – The Queen of Hill Stations</h2>\n\n<p>Shimla is the capital of Himachal Pradesh and a historic Himalayan hill station surrounded by forests of cedar, fir, oak and rhododendron. Its colonial heritage, mountain scenery and lively pedestrian areas make it one of the most recognizable destinations in northern India.</p>\n\n<p>The heart of Shimla is <strong>The Ridge and Mall Road</strong>, where visitors can experience panoramic mountain views, heritage buildings, cafés, restaurants and local shopping. The city also features important landmarks such as Christ Church and historic colonial structures.</p>\n\n<h3>Heritage & Architecture</h3>\n\n<p>Shimla's architectural identity reflects its colonial history. Historic buildings, churches, theatres and government structures create a distinctive character throughout the city.</p>\n\n<h3>Nature Around Shimla</h3>\n\n<p>Visitors can explore nearby forests, viewpoints and destinations such as Kufri, Naldehra, Mashobra and Fagu. These areas provide opportunities for nature walks, photography and mountain sightseeing.</p>\n\n<p>Himachal Tourism identifies Shimla as the state capital and highlights The Ridge, colonial heritage, Christ Church and surrounding attractions as important parts of the destination.</p>`,
      es: `<h2>Explora Shimla – La Reina de las Estaciones de Montaña</h2>\n\n<p>Shimla es la capital de Himachal Pradesh y una histórica estación de montaña del Himalaya rodeada de bosques de cedro, abeto, roble y rododendro. Su patrimonio colonial, paisajes montañosos y vibrantes zonas peatonales la convierten en uno de los destinos más reconocidos del norte de la India.</p>\n\n<p>El corazón de Shimla es <strong>The Ridge y Mall Road</strong>, donde los visitantes pueden disfrutar de vistas panorámicas de las montañas, edificios patrimoniales, cafeterías, restaurantes y compras locales. La ciudad también cuenta con monumentos importantes como Christ Church y estructuras coloniales históricas.</p>\n\n<h3>Patrimonio y Arquitectura</h3>\n\n<p>La identidad arquitectónica de Shimla refleja su historia colonial. Edificios históricos, iglesias, teatros y estructuras gubernamentales crean un carácter distintivo en toda la ciudad.</p>\n\n<h3>Naturaleza Alrededor de Shimla</h3>\n\n<p>Los visitantes pueden explorar bosques cercanos, miradores y destinos como Kufri, Naldehra, Mashobra y Fagu. Estas zonas ofrecen oportunidades para caminatas por la naturaleza, fotografía y paseos de montaña.</p>`,
      pt: `<h2>Explore Shimla – A Rainha das Cidades de Montanha</h2>\n\n<p>Shimla é a capital de Himachal Pradesh e uma histórica cidade montanhosa do Himalaia cercada por florestas de cedro, carvalho e rododendro. Seu patrimônio colonial, paisagens de montanha e áreas de pedestres movimentadas a tornam um dos destinos mais conhecidos do norte da Índia.</p>\n\n<p>O coração de Shimla é <strong>The Ridge e Mall Road</strong>, onde os visitantes podem desfrutar de vistas panorâmicas das montanhas, edifícios históricos, cafés, restaurantes e compras locais. A cidade também possui marcos importantes como a Christ Church e edifícios coloniais históricos.</p>\n\n<h3>Patrimônio e Arquitetura</h3>\n\n<p>A identidade arquitetônica de Shimla reflete sua história colonial. Edificios históricos, igrejas, teatros e estruturas governamentais criam um caráter distintivo em toda a cidade.</p>\n\n<h3>Natureza ao Redor de Shimla</h3>\n\n<p>Os visitantes podem explorar florestas próximas, mirantes e destinos como Kufri, Naldehra, Mashobra e Fagu. Essas áreas oferecem oportunidades para caminhadas na natureza, fotografia e passeios nas montanhas.</p>`
    },
    seoTitle: {
      en: "Shimla Tourism – Explore Hill Stations, Heritage & Himalayan Views",
      es: "Turismo de Shimla – Patrimonio, Montañas y Paisajes del Himalaya",
      pt: "Turismo de Shimla – Patrimônio, Montanhas e Paisagens do Himalaia"
    },
    seoDesc: {
      en: "Discover Shimla, Himachal Pradesh's beautiful hill capital, with The Ridge, Mall Road, Christ Church, Jakhoo Temple and historic Himalayan attractions.",
      es: "Descubre Shimla, la hermosa capital montañosa de Himachal Pradesh, con The Ridge, Mall Road, Christ Church, Jakhoo Temple y atractivos históricos.",
      pt: "Descubra Shimla, a bela capital montanhosa de Himachal Pradesh, com The Ridge, Mall Road, Christ Church, Jakhoo Temple e atrações históricas."
    },
    seoKeywords: {
      en: "Shimla, Shimla Tourism, Himachal Pradesh, Hill Station, The Ridge, Mall Road, Himalayan Tourism, Colonial Heritage",
      es: "Shimla, Turismo de Shimla, Himachal Pradesh, Estación de Montaña, The Ridge, Mall Road, Turismo del Himalaya",
      pt: "Shimla, Turismo de Shimla, Himachal Pradesh, Cidade de Montanha, The Ridge, Mall Road, Turismo do Himalaia"
    },
    touristPlaces: [
      {
        name: { en: "The Ridge", es: "The Ridge", pt: "The Ridge" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "The Ridge is the central open promenade of Shimla and one of the city's most recognizable landmarks. It offers mountain views and connects visitors with important heritage areas including Mall Road and Christ Church. The surrounding architecture, open space and lively atmosphere make it an important sightseeing and photography location.",
          es: "The Ridge es el paseo abierto central de Shimla y uno de los lugares más reconocibles de la ciudad. Ofrece vistas de las montañas y conecta con zonas patrimoniales importantes como Mall Road y Christ Church. Su arquitectura, espacios abiertos y ambiente animado lo convierten en un lugar ideal para conocer la ciudad y tomar fotografías.",
          pt: "The Ridge é o principal passeio aberto de Shimla e um dos locais mais conhecidos da cidade. Oferece vistas das montanhas e conecta áreas históricas importantes, como Mall Road e Christ Church. Sua arquitetura, espaço aberto e atmosfera movimentada fazem dele um dos principais pontos turísticos."
        }
      },
      {
        name: { en: "Mall Road", es: "Mall Road", pt: "Mall Road" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Mall Road is one of Shimla's busiest pedestrian areas, surrounded by shops, cafés, restaurants and heritage buildings. It is a popular place for leisurely walks, shopping for local products and experiencing the atmosphere of the hill station.",
          es: "Mall Road es una de las principales zonas peatonales de Shimla, rodeada de tiendas, cafeterías, restaurantes y edificios históricos. Es un lugar popular para caminar tranquilamente, comprar productos locales y disfrutar del ambiente de la ciudad.",
          pt: "Mall Road é uma das principais áreas para pedestres de Shimla, cercada por lojas, cafés, restaurantes e edifícios históricos. É um local popular para caminhadas, compras de produtos locais e para vivenciar a atmosfera da cidade."
        }
      },
      {
        name: { en: "Christ Church", es: "Iglesia de Cristo", pt: "Igreja de Cristo" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Christ Church is one of Shimla's most prominent heritage landmarks and is located near The Ridge. Its neo-Gothic architecture and distinctive appearance contribute strongly to the historic character of central Shimla.",
          es: "Christ Church es uno de los monumentos patrimoniales más importantes de Shimla y se encuentra cerca de The Ridge. Su arquitectura neogótica y su apariencia característica forman parte esencial del paisaje histórico de la ciudad.",
          pt: "Christ Church é um dos principais monumentos históricos de Shimla e está localizado próximo ao The Ridge. Sua arquitetura neogótica e aparência marcante fazem parte da identidade histórica do centro da cidade."
        }
      },
      {
        name: { en: "Jakhoo Temple", es: "Templo de Jakhoo", pt: "Templo de Jakhoo" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Jakhoo Temple is a revered temple dedicated to Lord Hanuman and located on Jakhoo Hill. The elevated setting provides beautiful views of the surrounding mountains and Shimla landscape.",
          es: "Jakhoo Temple es un templo dedicado al dios Hanuman situado en Jakhoo Hill. Su ubicación elevada ofrece hermosas vistas de las montañas y del paisaje de Shimla.",
          pt: "Jakhoo Temple é um templo dedicado ao deus Hanuman, localizado em Jakhoo Hill. Sua localização elevada proporciona belas vistas das montanhas e da paisagem de Shimla."
        }
      },
      {
        name: { en: "Indian Institute of Advanced Study", es: "Instituto Indio de Estudios Avanzados", pt: "Instituto Indiano de Estudos Avançados" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "The Indian Institute of Advanced Study is housed in the historic former Viceregal Lodge. The impressive building and landscaped surroundings make it an important heritage attraction in Shimla.",
          es: "El Indian Institute of Advanced Study ocupa el histórico antiguo Viceregal Lodge. Su impresionante edificio y sus jardines lo convierten en una importante atracción patrimonial de Shimla.",
          pt: "O Indian Institute of Advanced Study funciona no histórico antigo Viceregal Lodge. O edifício impressionante e seus jardins fazem dele uma importante atração histórica de Shimla."
        }
      }
    ]
  },

  // 2. MANALI
  {
    id: "manali",
    stateId: "himachal-pradesh",
    displayOrder: 2,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Manali", es: "Manali", pt: "Manali" },
    slug: { en: "manali", es: "manali", pt: "manali" },
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
    description: {
      en: "Manali is a popular Himalayan destination situated in the Beas River valley. It is known for snow-covered mountains, forests, temples, waterfalls, valleys, adventure activities and access to high mountain landscapes.",
      es: "Manali es un popular destino del Himalaya situado en el valle del río Beas. Es conocido por sus montañas nevadas, bosques, templos, cascadas, valles, actividades de aventura y paisajes de alta montaña.",
      pt: "Manali é um destino popular do Himalaia situado no vale do rio Beas. É conhecido por suas montanhas nevadas, florestas, templos, cachoeiras, vales, atividades de aventura e paisagens de alta montanha."
    },
    overview: {
      en: `<h2>Discover Manali – A Himalayan Mountain Escape</h2>\n\n<p>Manali is one of Himachal Pradesh's best-known mountain destinations, set in the beautiful Beas River valley. Surrounded by forests, streams and mountain peaks, the town combines natural scenery with temples, traditional villages, cafés and adventure experiences.</p>\n\n<p>Visitors can explore <strong>Hadimba Devi Temple, Manu Temple and Vashisht</strong>, while the surrounding region offers access to Solang Valley and Rohtang Pass. Old Manali adds a relaxed atmosphere with cafés, local shops and views of the surrounding mountains.</p>\n\n<h3>Adventure & Nature</h3>\n\n<p>Manali is associated with trekking, skiing, paragliding, river activities and mountain excursions. The surrounding valleys and high-altitude landscapes provide numerous opportunities for outdoor experiences.</p>\n\n<h3>Culture & Spirituality</h3>\n\n<p>Ancient temples and traditional settlements provide insight into the cultural history of the region. The combination of nature, spirituality and adventure makes Manali a versatile destination.</p>\n\n<p>Himachal Tourism describes Manali as a township in the Beas River valley and highlights attractions including Hadimba Devi Temple, Manu Temple, Vashisht, Solang Valley and Rohtang Pass.</p>`,
      es: `<h2>Descubre Manali – Una Escapada a las Montañas del Himalaya</h2>\n\n<p>Manali es uno de los destinos de montaña más conocidos de Himachal Pradesh, ubicado en el hermoso valle del río Beas. Rodeado de bosques, arroyos y cumbres montañosas, el pueblo combina paisajes naturales con templos, pueblos tradicionales, cafeterías y experiencias de aventura.</p>\n\n<p>Los visitantes pueden explorar el <strong>Templo Hadimba Devi, el Templo Manu y Vashisht</strong>, mientras que la región circundante ofrece acceso al Valle de Solang y Rohtang Pass. Old Manali añade un ambiente relajado con cafeterías, tiendas locales y vistas a las montañas.</p>\n\n<h3>Aventura y Naturaleza</h3>\n\n<p>Manali está asociado con trekking, esquí, parapente, actividades acuáticas y excursiones por la montaña. Los valles circundantes y los paisajes de gran altitud ofrecen numerosas oportunidades para disfrutar al aire libre.</p>\n\n<h3>Cultura y Espiritualidad</h3>\n\n<p>Templos antiguos y asentamientos tradicionales permiten conocer la historia cultural de la región. La combinación de naturaleza, espiritualidad y aventura convierte a Manali en un destino versátil.</p>`,
      pt: `<h2>Descubra Manali – Um Refúgio nas Montanhas do Himalaia</h2>\n\n<p>Manali é um dos destinos de montanha mais conhecidos de Himachal Pradesh, situado no belo vale do rio Beas. Cercada por florestas, riachos e picos de montanhas, a cidade combina paisagens naturais com templos, vilas tradicionais, cafés e experiências de aventura.</p>\n\n<p>Os visitantes podem explorar o <strong>Templo Hadimba Devi, o Templo Manu e Vashisht</strong>, enquanto a região ao redor oferece acesso ao Vale de Solang e Rohtang Pass. Old Manali adiciona uma atmosfera relaxante com cafés, lojas locais e vistas para as montanhas.</p>\n\n<h3>Aventura e Natureza</h3>\n\n<p>Manali está associada a trekking, esqui, paragliding, atividades em rios e passeios nas montanhas. Os vales ao redor e as paisagens de alta altitude oferecem inúmeras oportunidades para atividades ao ar livre.</p>\n\n<h3>Cultura e Espiritualidade</h3>\n\n<p>Templos antigos e povoados tradicionais oferecem uma visão da história cultural da região. A combinação de natureza, espiritualidade e aventura torna Manali um destino versátil.</p>`
    },
    seoTitle: {
      en: "Manali Tourism – Explore Valleys, Temples, Snow & Adventure",
      es: "Turismo de Manali – Valles, Templos, Nieve y Aventura",
      pt: "Turismo de Manali – Vales, Templos, Neve e Aventura"
    },
    seoDesc: {
      en: "Explore Manali's Himalayan landscapes, Hadimba Temple, Solang Valley, Rohtang Pass, Vashisht and scenic mountain attractions.",
      es: "Explora los paisajes del Himalaya de Manali, Hadimba Temple, Solang Valley, Rohtang Pass, Vashisht y sus atractivos naturales.",
      pt: "Explore as paisagens do Himalaia de Manali, Hadimba Temple, Solang Valley, Rohtang Pass, Vashisht e seus atrativos naturais."
    },
    seoKeywords: {
      en: "Manali, Manali Tourism, Himachal Pradesh, Solang Valley, Rohtang Pass, Himalayan Tourism, Adventure Tourism",
      es: "Manali, Turismo de Manali, Himachal Pradesh, Valle de Solang, Rohtang Pass, Turismo del Himalaya",
      pt: "Manali, Turismo de Manali, Himachal Pradesh, Vale de Solang, Rohtang Pass, Turismo do Himalaia"
    },
    touristPlaces: [
      {
        name: { en: "Hadimba Devi Temple", es: "Templo de Hadimba Devi", pt: "Templo de Hadimba Devi" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Hadimba Devi Temple is an important wooden temple surrounded by tall deodar trees. Dedicated to Hadimba Devi, the temple is known for its distinctive architecture and peaceful forest setting.",
          es: "El Hadimba Devi Temple es un importante templo de madera rodeado de altos árboles de deodar. Está dedicado a Hadimba Devi y destaca por su arquitectura característica y su tranquilo entorno forestal.",
          pt: "O Hadimba Devi Temple é um importante templo de madeira cercado por altos cedros. Dedicado a Hadimba Devi, destaca-se por sua arquitetura característica e pelo ambiente tranquilo da floresta."
        }
      },
      {
        name: { en: "Solang Valley", es: "Valle de Solang", pt: "Vale de Solang" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Solang Valley is a scenic mountain valley near Manali known for its dramatic landscapes and outdoor activities. Snow experiences and adventure activities make it a popular excursion from Manali.",
          es: "Solang Valley es un hermoso valle de montaña cerca de Manali, conocido por sus paisajes y actividades al aire libre. Las experiencias con nieve y las actividades de aventura lo convierten en una excursión popular.",
          pt: "Solang Valley é um belo vale montanhoso perto de Manali, conhecido por suas paisagens e atividades ao ar livre. As experiências com neve e as atividades de aventura fazem dele um passeio popular."
        }
      },
      {
        name: { en: "Rohtang Pass", es: "Paso de Rohtang", pt: "Passo de Rohtang" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Rohtang Pass is a high mountain pass associated with spectacular Himalayan scenery and seasonal snow. It provides access toward the Lahaul region and is one of the most recognized excursions from Manali. Access can be regulated, so travellers should check current requirements before visiting.",
          es: "Rohtang Pass es un paso de alta montaña conocido por sus espectaculares paisajes del Himalaya y la nieve estacional. Permite el acceso hacia la región de Lahaul y es una de las excursiones más conocidas desde Manali. El acceso puede estar regulado, por lo que se recomienda consultar los requisitos actuales.",
          pt: "Rohtang Pass é um passo de alta montanha conhecido pelas paisagens espetaculares do Himalaia e pela neve sazonal. Dá acesso à região de Lahaul e é um dos passeios mais conhecidos a partir de Manali. O acesso pode ser regulamentado, por isso é importante verificar os requisitos atuais."
        }
      },
      {
        name: { en: "Vashisht Temple & Hot Springs", es: "Templo de Vashisht y Aguas Termales", pt: "Templo de Vashisht e Águas Termais" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Vashisht is a traditional village near Manali known for its ancient temple and hot springs. The area combines spiritual significance with mountain scenery and traditional Himalayan surroundings.",
          es: "Vashisht es un pueblo tradicional cerca de Manali conocido por su antiguo templo y aguas termales. La zona combina importancia espiritual con paisajes montañosos y un entorno tradicional del Himalaya.",
          pt: "Vashisht é uma vila tradicional perto de Manali conhecida por seu antigo templo e águas termais. A região combina importância espiritual com paisagens montanhosas e ambiente tradicional do Himalaia."
        }
      },
      {
        name: { en: "Manu Temple", es: "Templo de Manu", pt: "Templo de Manu" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Manu Temple is an important spiritual attraction in Old Manali. Its peaceful surroundings and traditional architectural character make it a popular stop for visitors exploring the cultural side of Manali.",
          es: "Manu Temple es un importante lugar espiritual en Old Manali. Su entorno tranquilo y su arquitectura tradicional lo convierten en una parada popular para quienes desean conocer el lado cultural de Manali.",
          pt: "O Manu Temple é um importante local espiritual em Old Manali. Seu ambiente tranquilo e sua arquitetura tradicional fazem dele uma parada popular para quem deseja conhecer o lado cultural de Manali."
        }
      }
    ]
  },

  // 3. DHARAMSHALA
  {
    id: "dharamshala",
    stateId: "himachal-pradesh",
    displayOrder: 3,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Dharamshala", es: "Dharamshala", pt: "Dharamshala" },
    slug: { en: "dharamshala", es: "dharamshala", pt: "dharamshala" },
    image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
    description: {
      en: "Dharamshala is a scenic Himalayan destination known for its mountain landscapes, Tibetan cultural influence, monasteries, McLeod Ganj, waterfalls, trekking routes and peaceful surroundings.",
      es: "Dharamshala es un destino escénico del Himalaya conocido por sus paisajes montañosos, influencia cultural tibetana, monasterios, McLeod Ganj, cascadas, rutas de trekking y tranquilos alrededores.",
      pt: "Dharamshala é um destino cênico do Himalaia conhecido por suas paisagens montanhosas, influência cultural tibetana, mosteiros, McLeod Ganj, cachoeiras, trilhas e ambiente tranquilo."
    },
    overview: {
      en: `<h2>Discover Dharamshala – Mountains, Culture & Spirituality</h2>\n\n<p>Dharamshala is one of Himachal Pradesh's most distinctive mountain destinations. The city and its surrounding areas combine Himalayan scenery with Tibetan cultural influences, monasteries, temples, cafés and trekking opportunities.</p>\n\n<p><strong>McLeod Ganj</strong> is one of the most recognized areas of Dharamshala and is known for its Tibetan atmosphere, monasteries and cultural experiences. Visitors can also explore Bhagsunag, Dharamkot, Triund and other scenic areas.</p>\n\n<h3>Tibetan Culture</h3>\n\n<p>Dharamshala provides visitors with opportunities to experience Tibetan Buddhist culture through monasteries, meditation centres, traditional food and handicrafts.</p>\n\n<h3>Nature & Trekking</h3>\n\n<p>The surrounding mountains provide opportunities for trekking and nature walks. Triund is especially known for its Himalayan views and trekking experience.</p>\n\n<p>Himachal Tourism highlights McLeod Ganj, Bhagsunag, Dharamkot, Triund and other attractions around Dharamshala.</p>`,
      es: `<h2>Descubre Dharamshala – Montañas, Cultura y Espiritualidad</h2>\n\n<p>Dharamshala es uno de los destinos de montaña más característicos de Himachal Pradesh. La ciudad y sus alrededores combinan paisajes del Himalaya con influencias culturales tibetanas, monasterios, templos, cafeterías y rutas de trekking.</p>\n\n<p><strong>McLeod Ganj</strong> es una de las zonas más reconocidas de Dharamshala y destaca por su ambiente tibetano, monasterios y experiencias culturales. Los visitantes también pueden explorar Bhagsunag, Dharamkot, Triund y otras áreas escénicas.</p>\n\n<h3>Cultura Tibetana</h3>\n\n<p>Dharamshala ofrece oportunidades para conocer la cultura budista tibetana a través de monasterios, centros de meditación, comida tradicional y artesanías.</p>\n\n<h3>Naturaleza y Trekking</h3>\n\n<p>Las montañas circundantes brindan excelentes oportunidades para el senderismo. Triund es especialmente famoso por sus panorámicas del Himalaya.</p>`,
      pt: `<h2>Descubra Dharamshala – Montanhas, Cultura e Espiritualidade</h2>\n\n<p>Dharamshala é um dos destinos de montanha mais marcantes de Himachal Pradesh. A cidade e suas áreas circundantes combinam paisagens do Himalaia com influências culturais tibetanas, mosteiros, templos, cafés e oportunidades de trekking.</p>\n\n<p><strong>McLeod Ganj</strong> é uma das áreas mais conhecidas de Dharamshala, famosa por sua atmosfera tibetana, mosteiros e experiências culturais. Os visitantes também podem explorar Bhagsunag, Dharamkot, Triund e outras áreas cênicas.</p>\n\n<h3>Cultura Tibetana</h3>\n\n<p>Dharamshala oferece aos visitantes a oportunidade de vivenciar a cultura budista tibetana por meio de mosteiros, centros de meditação, culinária tradicional e artesanato.</p>\n\n<h3>Natureza e Trekking</h3>\n\n<p>As montanhas ao redor oferecem excelentes oportunidades para caminhadas. Triund é especialmente conhecido por suas vistas do Himalaia e pela experiência de trekking.</p>`
    },
    seoTitle: {
      en: "Dharamshala Tourism – Explore Tibetan Culture, Mountains & Monasteries",
      es: "Turismo de Dharamshala – Cultura Tibetana, Montañas y Monasterios",
      pt: "Turismo de Dharamshala – Cultura Tibetana, Montanhas e Mosteiros"
    },
    seoDesc: {
      en: "Discover Dharamshala with McLeod Ganj, Tibetan monasteries, Bhagsunag Waterfall, Triund and beautiful Himalayan landscapes.",
      es: "Descubre Dharamshala, McLeod Ganj, monasterios tibetanos, Bhagsunag, Triund y los hermosos paisajes del Himalaya.",
      pt: "Descubra Dharamshala, McLeod Ganj, mosteiros tibetanos, Bhagsunag, Triund e as belas paisagens do Himalaia."
    },
    seoKeywords: {
      en: "Dharamshala, McLeod Ganj, Tibetan Culture, Himachal Pradesh, Triund, Himalayan Tourism, Monasteries",
      es: "Dharamshala, McLeod Ganj, Cultura Tibetana, Himachal Pradesh, Triund, Turismo del Himalaya",
      pt: "Dharamshala, McLeod Ganj, Cultura Tibetana, Himachal Pradesh, Triund, Turismo do Himalaia"
    },
    touristPlaces: [
      {
        name: { en: "McLeod Ganj", es: "McLeod Ganj", pt: "McLeod Ganj" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "McLeod Ganj is the cultural heart of Dharamshala's Tibetan community. The area is known for monasteries, prayer wheels, Tibetan cafés, handicrafts and mountain views.",
          es: "McLeod Ganj es uno de los principales centros culturales tibetanos de Dharamshala. Es conocido por sus monasterios, ruedas de oración, cafeterías tibetanas, artesanías y vistas de las montañas.",
          pt: "McLeod Ganj é um dos principais centros da cultura tibetana em Dharamshala. A região é conhecida por mosteiros, rodas de oração, cafés tibetanos, artesanato e vistas das montanhas."
        }
      },
      {
        name: { en: "Bhagsunag Temple & Waterfall", es: "Templo y Cascada de Bhagsunag", pt: "Templo e Cachoeira de Bhagsunag" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Bhagsunag combines a historic temple with a scenic waterfall surrounded by mountain landscapes. It is a popular excursion from McLeod Ganj and a pleasant location for nature walks.",
          es: "Bhagsunag combina un templo histórico con una hermosa cascada rodeada de montañas. Es una excursión popular desde McLeod Ganj y un lugar agradable para caminar por la naturaleza.",
          pt: "Bhagsunag combina um templo histórico com uma bela cachoeira cercada por montanhas. É um passeio popular a partir de McLeod Ganj e um ótimo local para caminhadas na natureza."
        }
      },
      {
        name: { en: "Triund", es: "Triund", pt: "Triund" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Triund is a famous trekking destination near Dharamshala offering panoramic views of the surrounding Himalayan landscape. The trail passes through forested mountain terrain and is popular among trekking enthusiasts.",
          es: "Triund es un famoso destino de trekking cerca de Dharamshala que ofrece vistas panorámicas del paisaje del Himalaya. El sendero atraviesa zonas montañosas y boscosas y es popular entre los amantes del trekking.",
          pt: "Triund é um famoso destino de trekking perto de Dharamshala, oferecendo vistas panorâmicas das paisagens do Himalaia. A trilha atravessa áreas montanhosas e florestais e é popular entre os amantes de trekking."
        }
      },
      {
        name: { en: "Namgyal Monastery", es: "Monasterio Namgyal", pt: "Mosteiro Namgyal" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Namgyal Monastery is an important Tibetan Buddhist monastery associated with Dharamshala's Tibetan cultural landscape. Visitors can experience a peaceful environment and learn more about Tibetan Buddhist traditions.",
          es: "El Namgyal Monastery es un importante monasterio budista tibetano relacionado con la cultura tibetana de Dharamshala. Los visitantes pueden disfrutar de un ambiente tranquilo y conocer las tradiciones budistas tibetanas.",
          pt: "O Namgyal Monastery é um importante mosteiro budista tibetano ligado à cultura tibetana de Dharamshala. Os visitantes podem conhecer um ambiente tranquilo e aprender mais sobre as tradições budistas tibetanas."
        }
      },
      {
        name: { en: "Norbulingka Institute", es: "Instituto Norbulingka", pt: "Instituto Norbulingka" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Norbulingka Institute is dedicated to preserving Tibetan arts, crafts and cultural traditions. Its beautifully maintained surroundings and cultural workshops provide visitors with a deeper understanding of Tibetan heritage.",
          es: "El Norbulingka Institute está dedicado a preservar las artes, artesanías y tradiciones culturales tibetanas. Sus espacios cuidados y talleres culturales permiten conocer mejor el patrimonio tibetano.",
          pt: "O Norbulingka Institute é dedicado à preservação das artes, artesanato e tradições culturais tibetanas. Seus espaços bem cuidados e oficinas culturais oferecem uma visão mais profunda do patrimônio tibetano."
        }
      }
    ]
  },

  // 4. DALHOUSIE
  {
    id: "dalhousie",
    stateId: "himachal-pradesh",
    displayOrder: 4,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Dalhousie", es: "Dalhousie", pt: "Dalhousie" },
    slug: { en: "dalhousie", es: "dalhousie", pt: "dalhousie" },
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
    description: {
      en: "Dalhousie is a peaceful hill station known for colonial architecture, pine-covered slopes, mountain views, churches and access to beautiful destinations such as Khajjiar and Kalatop.",
      es: "Dalhousie es una tranquila estación de montaña conocida por su arquitectura colonial, laderas cubiertas de pinos, vistas de las montañas, iglesias y acceso a lugares como Khajjiar y Kalatop.",
      pt: "Dalhousie é uma tranquila cidade montanhosa conhecida por sua arquitetura colonial, encostas cobertas de pinheiros, vistas das montanhas, igrejas e acesso a lugares como Khajjiar e Kalatop."
    },
    overview: {
      en: `<h2>Discover Dalhousie – Colonial Charm in the Himalayas</h2>\n\n<p>Dalhousie is a picturesque hill station in Himachal Pradesh surrounded by forests and mountain scenery. Its colonial-era buildings, churches, peaceful roads and scenic viewpoints give the town a distinctive historic character.</p>\n\n<p>The destination is also an excellent base for exploring nearby attractions such as <strong>Khajjiar, Kalatop and Chamera Lake</strong>. The combination of heritage and natural landscapes makes Dalhousie suitable for relaxed mountain holidays.</p>\n\n<h3>Colonial Heritage</h3>\n\n<p>Dalhousie's churches, old buildings and heritage atmosphere reflect its colonial history and add character to the hill station.</p>\n\n<h3>Nature & Excursions</h3>\n\n<p>Surrounding forests, meadows, hills and lakes provide opportunities for photography, sightseeing and nature walks.</p>\n\n<p>Himachal Tourism includes Dalhousie among its major destinations and highlights the region's heritage and surrounding natural attractions.</p>`,
      es: `<h2>Descubre Dalhousie – Encanto Colonial en el Himalaya</h2>\n\n<p>Dalhousie es una pintoresca estación de montaña en Himachal Pradesh rodeada de bosques y paisajes montañosos. Sus edificios de época colonial, iglesias, caminos tranquilos y miradores le dan un carácter histórico distintivo.</p>\n\n<p>El destino es también una excelente base para explorar atracciones cercanas como <strong>Khajjiar, Kalatop y el Lago Chamera</strong>. La combinación de patrimonio y naturaleza convierte a Dalhousie en un lugar ideal para vacaciones relajantes.</p>`,
      pt: `<h2>Descubra Dalhousie – Charme Colonial no Himalaia</h2>\n\n<p>Dalhousie é uma pitoresca cidade montanhosa em Himachal Pradesh cercada por florestas e paisagens de montanha. Seus edifícios da era colonial, igrejas, estradas tranquilas e mirantes dão à cidade um caráter histórico marcante.</p>\n\n<p>O destino também é uma excelente base para explorar atrações próximas, como <strong>Khajjiar, Kalatop e o Lago Chamera</strong>. A combinação de patrimônio e paisagens naturais torna Dalhousie ideal para férias relaxantes nas montanhas.</p>`
    },
    seoTitle: {
      en: "Dalhousie Tourism – Colonial Heritage, Mountains & Khajjiar",
      es: "Turismo de Dalhousie – Patrimonio Colonial, Montañas y Khajjiar",
      pt: "Turismo de Dalhousie – Patrimônio Colonial, Montanhas e Khajjiar"
    },
    seoDesc: {
      en: "Explore Dalhousie with colonial churches, peaceful mountain landscapes, Khajjiar, Kalatop and Chamera Lake.",
      es: "Explora Dalhousie con iglesias coloniales, paisajes de montaña, Khajjiar, Kalatop y el lago Chamera.",
      pt: "Explore Dalhousie com igrejas coloniais, paisagens montanhosas, Khajjiar, Kalatop e o Lago Chamera."
    },
    seoKeywords: {
      en: "Dalhousie, Khajjiar, Himachal Pradesh, Colonial Heritage, Mountain Tourism, Chamba, Kalatop",
      es: "Dalhousie, Khajjiar, Himachal Pradesh, Patrimonio Colonial, Turismo de Montaña",
      pt: "Dalhousie, Khajjiar, Himachal Pradesh, Patrimônio Colonial, Turismo de Montanha"
    },
    touristPlaces: [
      {
        name: { en: "Khajjiar", es: "Khajjiar", pt: "Khajjiar" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Khajjiar is a beautiful green meadow surrounded by dense forests and Himalayan landscapes. Often associated with its scenic beauty and peaceful atmosphere, it is one of the most popular excursions from Dalhousie.",
          es: "Khajjiar es una hermosa pradera verde rodeada de densos bosques y paisajes del Himalaya. Conocido por su belleza natural y ambiente tranquilo, es una de las excursiones más populares desde Dalhousie.",
          pt: "Khajjiar é um belo campo verde cercado por florestas densas e paisagens do Himalaia. Conhecido por sua beleza natural e atmosfera tranquila, é um dos passeios mais populares a partir de Dalhousie."
        }
      },
      {
        name: { en: "Dainkund Peak", es: "Pico Dainkund", pt: "Pico Dainkund" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Dainkund Peak is one of the scenic high points near Dalhousie. The location offers broad mountain views and is particularly attractive for visitors interested in viewpoints, photography and nature walks.",
          es: "Dainkund Peak es uno de los puntos elevados más escénicos cerca de Dalhousie. Ofrece amplias vistas de las montañas y es ideal para quienes disfrutan de miradores, fotografía y caminatas.",
          pt: "Dainkund Peak é um dos pontos elevados mais bonitos perto de Dalhousie. Oferece amplas vistas das montanhas e é ideal para quem gosta de mirantes, fotografia e caminhadas."
        }
      },
      {
        name: { en: "Kalatop Khajjiar Wildlife Sanctuary", es: "Santuario de Vida Silvestre Kalatop Khajjiar", pt: "Santuário de Vida Selvagem Kalatop Khajjiar" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Kalatop Khajjiar Wildlife Sanctuary is a forested Himalayan area known for deodar and pine forests, mountain scenery and wildlife habitats. It is suitable for nature lovers and travellers seeking quieter landscapes.",
          es: "El Kalatop Khajjiar Wildlife Sanctuary es una zona boscosa del Himalaya conocida por sus bosques de deodar y pino, paisajes montañosos y hábitats naturales. Es ideal para amantes de la naturaleza.",
          pt: "O Kalatop Khajjiar Wildlife Sanctuary é uma área florestal do Himalaia conhecida por suas florestas de cedro e pinheiro, paisagens montanhosas e habitats naturais. É ideal para os amantes da natureza."
        }
      },
      {
        name: { en: "St. Patrick's Church", es: "Iglesia de San Patricio", pt: "Igreja de São Patrício" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "St. Patrick's Church is one of Dalhousie's historic churches and reflects the colonial architectural character of the hill station. Its peaceful surroundings make it a notable heritage stop.",
          es: "La St. Patrick's Church es una de las iglesias históricas de Dalhousie y refleja el carácter arquitectónico colonial de la ciudad. Su entorno tranquilo la convierte en un importante punto patrimonial.",
          pt: "A St. Patrick's Church é uma das igrejas históricas de Dalhousie e representa o caráter arquitetônico colonial da cidade. Seu ambiente tranquilo faz dela um importante ponto histórico."
        }
      },
      {
        name: { en: "Chamera Lake", es: "Lago Chamera", pt: "Lago Chamera" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Chamera Lake is a scenic reservoir surrounded by mountains near Dalhousie. The peaceful waters and surrounding landscapes make it a popular location for sightseeing and photography.",
          es: "El Chamera Lake es un hermoso embalse rodeado de montañas cerca de Dalhousie. Sus aguas tranquilas y paisajes circundantes lo convierten en un lugar popular para hacer turismo y fotografías.",
          pt: "O Chamera Lake é um belo reservatório cercado por montanhas perto de Dalhousie. Suas águas tranquilas e paisagens ao redor fazem dele um local popular para passeios e fotografia."
        }
      }
    ]
  },

  // 5. KULLU
  {
    id: "kullu",
    stateId: "himachal-pradesh",
    displayOrder: 5,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Kullu", es: "Kullu", pt: "Kullu" },
    slug: { en: "kullu", es: "kullu", pt: "kullu" },
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
    description: {
      en: "Kullu is a scenic Himalayan valley destination known for the Beas River, traditional culture, temples, green landscapes, adventure activities and access to attractions across the Kullu Valley.",
      es: "Kullu es un hermoso destino del valle del Himalaya conocido por el río Beas, la cultura tradicional, los templos, los paisajes verdes, las actividades de aventura y sus numerosos atractivos.",
      pt: "Kullu é um belo destino no vale do Himalaia conhecido pelo rio Beas, cultura tradicional, templos, paisagens verdes, atividades de aventura e diversos atrativos."
    },
    overview: {
      en: `<h2>Discover Kullu – The Valley of Gods</h2>\n\n<p>Kullu is a beautiful Himalayan valley known for its landscapes, rivers, forests and traditional culture. The Beas River flows through the valley, creating a scenic environment surrounded by mountains.</p>\n\n<p>Kullu is closely associated with local traditions, temples and festivals. The wider region also provides access to destinations such as Manikaran, Kasol and mountain areas around the valley.</p>\n\n<h3>Adventure Tourism</h3>\n\n<p>Outdoor experiences around Kullu include river rafting, trekking, camping and nature exploration. The region is particularly attractive to travellers interested in combining scenery with adventure.</p>\n\n<h3>Culture & Local Life</h3>\n\n<p>Traditional temples, village settlements, local crafts and festivals provide opportunities to experience the cultural character of the Kullu Valley.</p>\n\n<p>Himachal Tourism highlights Kullu's Beas River setting and activities including rafting, trekking, fishing and camping.</p>`,
      es: `<h2>Descubre Kullu – El Valle de los Dioses</h2>\n\n<p>Kullu es un hermoso valle del Himalaya conocido por sus paisajes, ríos, bosques y cultura tradicional. El río Beas fluye a través del valle, creando un entorno escénico rodeado de montañas.</p>\n\n<p>Kullu está estrechamente vinculado con las tradiciones locales, templos y festivales. La región también ofrece acceso a destinos como Manikaran, Kasol y áreas montañosas alrededor del valle.</p>\n\n<h3>Turismo de Aventura</h3>\n\n<p>Las actividades al aire libre alrededor de Kullu incluyen rafting en el río, trekking, camping y exploración de la naturaleza.</p>`,
      pt: `<h2>Descubra Kullu – O Vale dos Deuses</h2>\n\n<p>Kullu é um belo vale do Himalaia conhecido por suas paisagens, rios, florestas e cultura tradicional. O rio Beas flui pelo vale, criando um ambiente cênico cercado por montanhas.</p>\n\n<p>Kullu está fortemente associado às tradições locais, templos e festivais. A região também oferece acesso a destinos como Manikaran, Kasol e áreas de montanha ao redor do vale.</p>\n\n<h3>Turismo de Aventura</h3>\n\n<p>As experiências ao ar livre ao redor de Kullu incluem rafting no rio, trekking, camping e exploração da natureza.</p>`
    },
    seoTitle: {
      en: "Kullu Tourism – Explore Valleys, Temples, Rivers & Himalayan Nature",
      es: "Turismo de Kullu – Valles, Templos, Ríos y Naturaleza del Himalaya",
      pt: "Turismo de Kullu – Vales, Templos, Rios e Natureza do Himalaia"
    },
    seoDesc: {
      en: "Discover Kullu Valley with scenic landscapes, temples, River Beas, adventure activities, Kasol and Manikaran.",
      es: "Descubre el valle de Kullu con paisajes, templos, río Beas, actividades de aventura, Kasol y Manikaran.",
      pt: "Descubra o Vale de Kullu com paisagens, templos, rio Beas, atividades de aventura, Kasol e Manikaran."
    },
    seoKeywords: {
      en: "Kullu, Kullu Valley, Himachal Pradesh, Beas River, Adventure Tourism, Kasol, Manikaran",
      es: "Kullu, Valle de Kullu, Himachal Pradesh, Río Beas, Turismo de Aventura",
      pt: "Kullu, Vale de Kullu, Himachal Pradesh, Rio Beas, Turismo de Aventura"
    },
    touristPlaces: [
      {
        name: { en: "Raghunath Temple", es: "Templo de Raghunath", pt: "Templo de Raghunath" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Raghunath Temple is an important religious attraction associated with the cultural traditions of the Kullu Valley. The temple is closely connected with the region's spiritual heritage and local festivals.",
          es: "El Raghunath Temple es un importante lugar religioso relacionado con las tradiciones culturales del valle de Kullu. Está estrechamente vinculado con el patrimonio espiritual y las celebraciones locales.",
          pt: "O Raghunath Temple é um importante local religioso ligado às tradições culturais do Vale de Kullu. O templo está associado ao patrimônio espiritual e às celebrações locais."
        }
      },
      {
        name: { en: "Bijli Mahadev Temple", es: "Templo de Bijli Mahadev", pt: "Templo de Bijli Mahadev" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Bijli Mahadev Temple is a mountain temple located in the Kullu region. Its elevated setting provides impressive views of the surrounding valleys and mountains, making the journey itself part of the experience.",
          es: "El Bijli Mahadev Temple es un templo situado en las montañas de la región de Kullu. Su ubicación elevada ofrece impresionantes vistas de los valles y montañas circundantes.",
          pt: "O Bijli Mahadev Temple é um templo localizado nas montanhas da região de Kullu. Sua localização elevada oferece vistas impressionantes dos vales e montanhas ao redor."
        }
      },
      {
        name: { en: "Great Himalayan National Park", es: "Parque Nacional Great Himalayan", pt: "Parque Nacional Great Himalayan" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "The Great Himalayan National Park is a major natural attraction in Himachal Pradesh known for its Himalayan ecosystems, forests, mountain landscapes and biodiversity. It is an important destination for nature and trekking enthusiasts.",
          es: "El Great Himalayan National Park es una importante atracción natural de Himachal Pradesh, conocida por sus ecosistemas del Himalaya, bosques, paisajes montañosos y biodiversidad.",
          pt: "O Great Himalayan National Park é uma importante atração natural de Himachal Pradesh, conhecido por seus ecossistemas do Himalaia, florestas, paisagens montanhosas e biodiversidade."
        }
      },
      {
        name: { en: "Kasol", es: "Kasol", pt: "Kasol" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Kasol is a small mountain settlement in the Parvati Valley known for its scenic surroundings, cafés, trekking routes and relaxed atmosphere. It is a popular base for exploring the surrounding Himalayan landscape.",
          es: "Kasol es un pequeño asentamiento montañoso en el valle de Parvati, conocido por sus paisajes, cafeterías, rutas de trekking y ambiente relajado. Es una base popular para explorar el Himalaya.",
          pt: "Kasol é um pequeno povoado montanhoso no Vale do Parvati, conhecido por suas paisagens, cafés, trilhas e atmosfera descontraída. É uma base popular para explorar o Himalaia."
        }
      },
      {
        name: { en: "Manikaran Sahib", es: "Manikaran Sahib", pt: "Manikaran Sahib" },
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
        description: {
          en: "Manikaran Sahib is an important pilgrimage destination in the Parvati Valley, known for its religious significance, hot springs and mountain surroundings. The destination attracts visitors interested in spirituality and Himalayan culture.",
          es: "Manikaran Sahib es un importante destino de peregrinación en el valle de Parvati, conocido por su importancia religiosa, aguas termales y entorno montañoso.",
          pt: "Manikaran Sahib é um importante destino de peregrinação no Vale do Parvati, conhecido por sua importância religiosa, águas termais e ambiente montanhoso."
        }
      }
    ]
  },

  // 6. CHAMBA
  {
    id: "chamba",
    stateId: "himachal-pradesh",
    displayOrder: 6,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Chamba", es: "Chamba", pt: "Chamba" },
    slug: { en: "chamba", es: "chamba", pt: "chamba" },
    image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
    description: {
      en: "Chamba is a historic Himalayan town known for ancient temples, traditional architecture, scenic valleys, cultural heritage and access to attractions such as Khajjiar and Chamera Lake.",
      es: "Chamba es una histórica ciudad del Himalaya conocida por sus antiguos templos, arquitectura tradicional, valles escénicos, patrimonio cultural y acceso a lugares como Khajjiar y Chamera Lake.",
      pt: "Chamba é uma histórica cidade do Himalaia conhecida por seus antigos templos, arquitetura tradicional, vales cênicos, patrimônio cultural e acesso a lugares como Khajjiar e Chamera Lake."
    },
    overview: {
      en: `<h2>Discover Chamba – Heritage, Temples & Himalayan Landscapes</h2>\n\n<p>Chamba is one of Himachal Pradesh's culturally rich destinations, combining Himalayan scenery with centuries-old temples, traditional architecture and local traditions.</p>\n\n<p>The town and surrounding region are known for their historic religious structures, open spaces, museums and mountain landscapes. The wider Chamba region also provides access to destinations such as Khajjiar and Chamera Lake.</p>\n\n<h3>Temple Heritage</h3>\n\n<p>Chamba is particularly known for its collection of historic temples, making it an important destination for travellers interested in Himalayan religious architecture and heritage.</p>\n\n<h3>Culture & Handicrafts</h3>\n\n<p>Traditional crafts, local textiles and cultural traditions add to the identity of Chamba. Visitors can combine heritage sightseeing with nature exploration.</p>\n\n<p>Himachal Tourism recognizes Chamba as one of the state's major destinations and describes the state as having a rich heritage of temples, monasteries, forts and traditional architecture.</p>`,
      es: `<h2>Descubre Chamba – Patrimonio, Templos y Paisajes del Himalaya</h2>\n\n<p>Chamba es uno de los destinos con mayor riqueza cultural de Himachal Pradesh, combinando paisajes del Himalaya con templos centenarios, arquitectura tradicional y costumbres locales.</p>\n\n<p>La ciudad y la región circundante son conocidas por sus estructuras religiosas históricas, espacios abiertos, museos y paisajes de montaña. La región de Chamba también ofrece acceso a destinos como Khajjiar y el Lago Chamera.</p>\n\n<h3>Patrimonio Templario</h3>\n\n<p>Chamba destaca especialmente por su colección de templos históricos, convirtiéndose en un destino clave para los viajeros interesados en la arquitectura religiosa del Himalaya.</p>`,
      pt: `<h2>Descubra Chamba – Patrimônio, Templos e Paisagens do Himalaia</h2>\n\n<p>Chamba é um dos destinos culturalmente mais ricos de Himachal Pradesh, combinando paisagens do Himalaia com templos seculares, arquitetura tradicional e costumes locais.</p>\n\n<p>A cidade e a região ao redor são conhecidas por suas estruturas religiosas históricas, espaços abertos, museus e paisagens montanhosas. A região de Chamba também dá acesso a destinos como Khajjiar e o Lago Chamera.</p>\n\n<h3>Patrimônio de Templos</h3>\n\n<p>Chamba destaca-se especialmente por sua coleção de templos históricos, tornando-se um destino importante para viajantes interessados na arquitetura religiosa do Himalaia.</p>`
    },
    seoTitle: {
      en: "Chamba Tourism – Explore Ancient Temples, Heritage & Himalayan Valleys",
      es: "Turismo de Chamba – Templos Antiguos, Patrimonio y Valles del Himalaya",
      pt: "Turismo de Chamba – Templos Antigos, Patrimônio e Vales do Himalaia"
    },
    seoDesc: {
      en: "Explore Chamba with ancient temples, cultural heritage, Chaugan, Bhuri Singh Museum, Chamera Lake and beautiful Himalayan landscapes.",
      es: "Explora Chamba con templos antiguos, patrimonio cultural, Chaugan, Bhuri Singh Museum, Chamera Lake y paisajes del Himalaya.",
      pt: "Explore Chamba com templos antigos, patrimônio cultural, Chaugan, Bhuri Singh Museum, Chamera Lake e paisagens do Himalaia."
    },
    seoKeywords: {
      en: "Chamba, Chamba Tourism, Himachal Pradesh, Temples, Himalayan Heritage, Chamera Lake, Khajjiar",
      es: "Chamba, Turismo de Chamba, Himachal Pradesh, Templos, Patrimonio del Himalaya",
      pt: "Chamba, Turismo de Chamba, Himachal Pradesh, Templos, Patrimônio do Himalaia"
    },
    touristPlaces: [
      {
        name: { en: "Chaugan", es: "Chaugan", pt: "Chaugan" },
        image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
        description: {
          en: "Chaugan is a large open area in the heart of Chamba and an important part of the town's cultural and social life. It is associated with local gatherings, festivals and public events.",
          es: "Chaugan es una amplia zona abierta en el corazón de Chamba y una parte importante de la vida cultural y social de la ciudad. Está relacionada con festivales, reuniones y eventos locales.",
          pt: "Chaugan é uma grande área aberta no coração de Chamba e uma parte importante da vida cultural e social da cidade. O local é associado a festivais, encontros e eventos públicos."
        }
      },
      {
        name: { en: "Lakshmi Narayan Temple", es: "Templo Lakshmi Narayan", pt: "Templo Lakshmi Narayan" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Lakshmi Narayan Temple is one of the most important historic temples in Chamba. Its traditional Himalayan architectural style and religious importance make it a significant heritage attraction.",
          es: "El Lakshmi Narayan Temple es uno de los templos históricos más importantes de Chamba. Su arquitectura tradicional del Himalaya y su importancia religiosa lo convierten en un destacado lugar patrimonial.",
          pt: "O Lakshmi Narayan Temple é um dos templos históricos mais importantes de Chamba. Sua arquitetura tradicional do Himalaia e importância religiosa fazem dele uma atração histórica relevante."
        }
      },
      {
        name: { en: "Bhuri Singh Museum", es: "Museo Bhuri Singh", pt: "Museu Bhuri Singh" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Bhuri Singh Museum preserves important examples of the art, culture and history of the Chamba region. It is an excellent place for travellers who want to understand the cultural heritage of the area.",
          es: "El Bhuri Singh Museum conserva importantes ejemplos del arte, la cultura y la historia de la región de Chamba. Es un excelente lugar para conocer mejor el patrimonio cultural local.",
          pt: "O Bhuri Singh Museum preserva importantes exemplos da arte, cultura e história da região de Chamba. É um excelente local para conhecer o patrimônio cultural da área."
        }
      },
      {
        name: { en: "Chamera Lake", es: "Lago Chamera", pt: "Lago Chamera" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Chamera Lake is a scenic water body surrounded by Himalayan mountains. Its peaceful setting and panoramic scenery make it suitable for sightseeing and photography.",
          es: "Chamera Lake es un hermoso cuerpo de agua rodeado por montañas del Himalaya. Su ambiente tranquilo y sus paisajes panorámicos son ideales para hacer turismo y fotografías.",
          pt: "Chamera Lake é um belo corpo d'água cercado por montanhas do Himalaia. Seu ambiente tranquilo e suas paisagens panorâmicas são ideais para passeios e fotografia."
        }
      },
      {
        name: { en: "Khajjiar", es: "Khajjiar", pt: "Khajjiar" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Khajjiar is a scenic meadow destination in the Chamba region surrounded by forests and mountains. Its peaceful landscape makes it one of the most popular natural attractions associated with Chamba.",
          es: "Khajjiar es un hermoso destino de praderas en la región de Chamba, rodeado de bosques y montañas. Su paisaje tranquilo lo convierte en una de las principales atracciones naturales de la zona.",
          pt: "Khajjiar é um belo destino de campos verdes na região de Chamba, cercado por florestas e montanhas. Sua paisagem tranquila faz dele uma das principais atrações naturais da região."
        }
      }
    ]
  },

  // 7. KASAULI
  {
    id: "kasauli",
    stateId: "himachal-pradesh",
    displayOrder: 7,
    isPublished: true,
    isDeleted: false,
    updatedAt: new Date().toISOString(),
    name: { en: "Kasauli", es: "Kasauli", pt: "Kasauli" },
    slug: { en: "kasauli", es: "kasauli", pt: "kasauli" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    description: {
      en: "Kasauli is a peaceful colonial-era hill station in Himachal Pradesh known for pine forests, heritage buildings, walking trails, viewpoints and a relaxed mountain atmosphere.",
      es: "Kasauli es una tranquila estación de montaña de época colonial en Himachal Pradesh, conocida por sus bosques de pinos, edificios históricos, senderos, miradores y ambiente relajado.",
      pt: "Kasauli é uma tranquila cidade montanhosa de herança colonial em Himachal Pradesh, conhecida por seus pinheiros, edifícios históricos, trilhas, mirantes e atmosfera relaxante."
    },
    overview: {
      en: `<h2>Discover Kasauli – A Peaceful Colonial Hill Station</h2>\n\n<p>Kasauli is a charming hill station in Himachal Pradesh characterized by pine and oak forests, colonial-era architecture and peaceful walking routes. Unlike larger Himalayan tourist centres, Kasauli offers a quieter mountain experience.</p>\n\n<p>The town's heritage character can be seen in its old buildings, churches, narrow roads and traditional hill-station architecture. Walking through the town and surrounding forest trails is one of the simplest ways to experience its atmosphere.</p>\n\n<h3>Colonial Heritage</h3>\n\n<p>Kasauli has preserved a distinctive colonial architectural character. Historic churches and old buildings provide insight into the town's past.</p>\n\n<h3>Nature & Walking Trails</h3>\n\n<p>Forest paths, viewpoints and mountain landscapes make Kasauli attractive for travellers looking for a peaceful break surrounded by nature.</p>\n\n<p>Himachal Tourism's heritage information specifically highlights Kasauli and Dalhousie among the state's hill stations with colonial architectural heritage.</p>`,
      es: `<h2>Descubre Kasauli – Una Tranquila Estación de Montaña Colonial</h2>\n\n<p>Kasauli es una encantadora estación de montaña en Himachal Pradesh caracterizada por bosques de pinos y robles, arquitectura colonial y tranquilos senderos. A diferencia de los grandes centros turísticos, Kasauli ofrece una experiencia de montaña más serena.</p>\n\n<p>El carácter patrimonial del pueblo se refleja en sus antiguos edificios, iglesias, calles estrechas y arquitectura tradicional de montaña. Pasear por el pueblo y sus senderos forestales es una de las mejores formas de disfrutar de su ambiente.</p>`,
      pt: `<h2>Descubra Kasauli – Uma Tranquila Cidade Montanhosa Colonial</h2>\n\n<p>Kasauli é uma charmosa cidade montanhosa em Himachal Pradesh caracterizada por florestas de pinheiros e carvalhos, arquitetura colonial e trilhas tranquilas. Ao contrário dos grandes centros turísticos, Kasauli oferece uma experiência de montanha mais serena.</p>\n\n<p>O caráter histórico da cidade reflete-se em seus edifícios antigos, igrejas, ruas estreitas e arquitetura tradicional de montanha. Caminhar pela cidade e por suas trilhas florestais é uma das melhores maneiras de desfrutar de sua atmosfera.</p>`
    },
    seoTitle: {
      en: "Kasauli Tourism – Explore Colonial Heritage, Forests & Mountain Views",
      es: "Turismo de Kasauli – Patrimonio Colonial, Bosques y Montañas",
      pt: "Turismo de Kasauli – Patrimônio Colonial, Florestas e Montanhas"
    },
    seoDesc: {
      en: "Discover Kasauli's colonial charm, pine forests, Mall Road, Christ Church, Monkey Point and scenic walking trails.",
      es: "Descubre el encanto colonial de Kasauli, sus bosques de pinos, Mall Road, Christ Church, Monkey Point y senderos.",
      pt: "Descubra o charme colonial de Kasauli, suas florestas de pinheiros, Mall Road, Christ Church, Monkey Point e trilhas."
    },
    seoKeywords: {
      en: "Kasauli, Kasauli Tourism, Himachal Pradesh, Colonial Heritage, Mall Road, Monkey Point, Hill Station",
      es: "Kasauli, Turismo de Kasauli, Himachal Pradesh, Patrimonio Colonial, Mall Road, Monkey Point",
      pt: "Kasauli, Turismo de Kasauli, Himachal Pradesh, Patrimônio Colonial, Mall Road, Monkey Point"
    },
    touristPlaces: [
      {
        name: { en: "Mall Road", es: "Mall Road", pt: "Mall Road" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: {
          en: "Mall Road Kasauli is a pleasant area for walking, shopping and enjoying the relaxed atmosphere of the hill station. Small shops and cafés add to its local charm.",
          es: "Mall Road Kasauli es una zona agradable para caminar, comprar y disfrutar del ambiente tranquilo de la ciudad. Las pequeñas tiendas y cafeterías aportan encanto local.",
          pt: "Mall Road Kasauli é uma área agradável para caminhar, fazer compras e aproveitar a atmosfera tranquila da cidade. Pequenas lojas e cafés acrescentam charme ao local."
        }
      },
      {
        name: { en: "Christ Church", es: "Iglesia de Cristo", pt: "Igreja de Cristo" },
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
        description: {
          en: "Christ Church Kasauli is a historic church and an important example of the town's colonial heritage. Its location and architecture make it one of the recognizable landmarks of Kasauli.",
          es: "Christ Church Kasauli es una iglesia histórica y un importante ejemplo del patrimonio colonial de la ciudad. Su ubicación y arquitectura la convierten en uno de los monumentos reconocibles de Kasauli.",
          pt: "Christ Church Kasauli é uma igreja histórica e um importante exemplo do patrimônio colonial da cidade. Sua localização e arquitetura fazem dela um dos marcos mais conhecidos de Kasauli."
        }
      },
      {
        name: { en: "Monkey Point", es: "Monkey Point", pt: "Monkey Point" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: {
          en: "Monkey Point is one of the well-known viewpoints of Kasauli. The elevated location provides expansive views across the surrounding mountain landscape and makes it a popular sightseeing stop.",
          es: "Monkey Point es uno de los miradores más conocidos de Kasauli. Su ubicación elevada ofrece amplias vistas del paisaje montañoso y lo convierte en un lugar popular para visitar.",
          pt: "Monkey Point é um dos mirantes mais conhecidos de Kasauli. Sua localização elevada oferece amplas vistas da paisagem montanhosa e faz dele um ponto popular de visita."
        }
      },
      {
        name: { en: "Gilbert Trail", es: "Sendero Gilbert", pt: "Trilha Gilbert" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: {
          en: "Gilbert Trail is a scenic walking route surrounded by forest and mountain landscapes. It is suitable for travellers who enjoy peaceful walks and nature photography.",
          es: "Gilbert Trail es un sendero escénico rodeado de bosques y paisajes montañosos. Es ideal para viajeros que disfrutan de caminatas tranquilas y fotografía de naturaleza.",
          pt: "Gilbert Trail é uma trilha cênica cercada por florestas e paisagens montanhosas. É adequada para viajantes que gostam de caminhadas tranquilas e fotografia da natureza."
        }
      },
      {
        name: { en: "Sunset Point", es: "Mirador del Atardecer", pt: "Mirante do Pôr do Sol" },
        image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
        description: {
          en: "Sunset Point is a popular scenic location where visitors can enjoy changing colours across the surrounding hills during sunset. It is particularly attractive for evening walks and photography.",
          es: "Sunset Point es un lugar escénico popular donde los visitantes pueden disfrutar de los colores cambiantes de las montañas durante el atardecer. Es ideal para paseos y fotografías al final del día.",
          pt: "Sunset Point é um local panorâmico popular onde os visitantes podem apreciar as mudanças de cores nas montanhas durante o pôr do sol. É ideal para caminhadas e fotografia no final do dia."
        }
      }
    ]
  }
];

let updatedCount = 0;
for (const hpCity of hpCities) {
  // Ensure overview, fullDescription, content are populated
  hpCity.fullDescription = hpCity.overview;
  hpCity.content = hpCity.overview;
  
  const existingIdx = cities.findIndex(c => c.id === hpCity.id);
  if (existingIdx >= 0) {
    cities[existingIdx] = { ...cities[existingIdx], ...hpCity };
  } else {
    cities.push(hpCity);
  }
  updatedCount++;
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Successfully added/updated ${updatedCount} Himachal Pradesh cities in cities.json.`);
