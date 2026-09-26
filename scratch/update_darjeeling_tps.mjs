import fs from 'fs';
import path from 'path';

const citiesPath = path.resolve('src/data/fallback/cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const darjeelingData = {
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
  content: {
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
  fullDescription: {
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
      name: {
        en: "Tiger Hill",
        es: "Tiger Hill",
        pt: "Tiger Hill"
      },
      description: {
        en: "Tiger Hill is one of the most famous viewpoints in Darjeeling and is particularly popular for its spectacular sunrise views over the Himalayan mountains. On a clear morning, the first rays of sunlight illuminate the snow-covered peaks of Kanchenjunga, creating a dramatic mountain panorama. The viewpoint also offers distant views towards Mount Everest and surrounding Himalayan landscapes. Tiger Hill is an essential destination for photographers, nature lovers and travellers looking for an unforgettable sunrise experience.",
        es: "Tiger Hill es uno de los miradores más famosos de Darjeeling y es especialmente conocido por sus espectaculares amaneceres sobre el Himalaya. En las mañanas despejadas, los primeros rayos del sol iluminan las cumbres nevadas del Kanchenjunga, creando un impresionante paisaje montañoso. Desde este punto también pueden observarse vistas lejanas del Monte Everest y de otras montañas del Himalaya. Es un destino ideal para fotógrafos, amantes de la naturaleza y viajeros que buscan una experiencia inolvidable.",
        pt: "Tiger Hill é um dos mirantes mais famosos de Darjeeling e é especialmente conhecido pelas vistas espetaculares do nascer do sol sobre o Himalaia. Nas manhãs de céu aberto, os primeiros raios solares iluminam os picos nevados do Kanchenjunga, criando uma impressionante paisagem montanhosa. Do mirante também é possível observar, à distância, o Monte Everest e outras montanhas do Himalaia. É um destino ideal para fotógrafos, amantes da natureza e viajantes que desejam vivenciar um nascer do sol inesquecível."
      }
    },
    {
      image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
      name: {
        en: "Batasia Loop & Gorkha War Memorial",
        es: "Batasia Loop y Memorial de Guerra Gorkha",
        pt: "Batasia Loop e Memorial de Guerra Gorkha"
      },
      description: {
        en: "Batasia Loop is a unique railway engineering landmark located near Darjeeling and is one of the most scenic stops on the famous Toy Train route. The railway track curves in a large loop while descending through the Himalayan landscape, offering beautiful views of Darjeeling and the snow-covered peaks on clear days. At the centre of the loop stands the Gorkha War Memorial, built in remembrance of Gorkha soldiers. The combination of mountain scenery, railway heritage and local culture makes Batasia Loop a popular attraction.",
        es: "Batasia Loop es un singular ejemplo de ingeniería ferroviaria situado cerca de Darjeeling y uno de los lugares más pintorescos de la ruta del famoso Toy Train. La vía forma un gran circuito mientras desciende por el paisaje montañoso del Himalaya, ofreciendo hermosas vistas de Darjeeling y de las cumbres nevadas en los días despejados. En el centro del circuito se encuentra el Memorial de Guerra Gorkha, construido en memoria de los soldados Gorkha. La combinación de paisajes, patrimonio ferroviario y cultura local hace de este lugar una importante atracción turística.",
        pt: "Batasia Loop é um importante exemplo de engenharia ferroviária localizado perto de Darjeeling e um dos pontos mais pitorescos da rota do famoso Toy Train. A linha ferroviária faz uma grande curva enquanto desce pelo cenário montanhoso do Himalaia, proporcionando belas vistas de Darjeeling e dos picos nevados em dias de céu aberto. No centro do circuito encontra-se o Memorial de Guerra Gorkha, construído em homenagem aos soldados Gorkha. A combinação de paisagens montanhosas, patrimônio ferroviário e cultura local torna o local uma atração muito procurada."
      }
    },
    {
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
      name: {
        en: "Darjeeling Himalayan Railway / Toy Train",
        es: "Ferrocarril del Himalaya de Darjeeling / Toy Train",
        pt: "Ferrovia do Himalaia de Darjeeling / Toy Train"
      },
      description: {
        en: "The Darjeeling Himalayan Railway, popularly known as the Toy Train, is one of Darjeeling's most iconic attractions and a UNESCO World Heritage Site. Built between 1879 and 1881, the historic narrow-gauge railway travels through the dramatic Himalayan landscape using loops and zigzags to climb from the plains towards Darjeeling. The famous joy ride between Darjeeling and Ghum passes through Batasia Loop and provides travellers with a memorable combination of railway heritage and mountain scenery.",
        es: "El Ferrocarril del Himalaya de Darjeeling, conocido popularmente como Toy Train, es una de las atracciones más emblemáticas de Darjeeling y forma parte del Patrimonio Mundial de la UNESCO. Construido entre 1879 y 1881, este histórico ferrocarril de vía estrecha atraviesa el espectacular paisaje del Himalaya utilizando curvas y zigzags para ascender desde las llanuras hasta Darjeeling. El famoso recorrido entre Darjeeling y Ghum pasa por Batasia Loop y ofrece una combinación memorable de patrimonio ferroviario y paisajes de montaña.",
        pt: "A Ferrovia do Himalaia de Darjeeling, popularmente conhecida como Toy Train, é uma das atrações mais emblemáticas de Darjeeling e faz parte do Patrimônio Mundial da UNESCO. Construída entre 1879 e 1881, essa histórica ferrovia de bitola estreita atravessa a impressionante paisagem do Himalaia utilizando curvas e zigue-zagues para subir das planícies até Darjeeling. O famoso passeio entre Darjeeling e Ghum passa pelo Batasia Loop e proporciona uma experiência memorável que combina patrimônio ferroviário e paisagens montanhosas."
      }
    },
    {
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
      name: {
        en: "Darjeeling Peace Pagoda",
        es: "Pagoda de la Paz de Darjeeling",
        pt: "Pagoda da Paz de Darjeeling"
      },
      description: {
        en: "The Darjeeling Peace Pagoda is a striking Buddhist monument situated in the hills of Darjeeling. The white structure features golden statues and Buddhist imagery and provides a peaceful setting with panoramic views of the surrounding mountains. Located close to the Japanese Temple, the pagoda reflects a message of peace and harmony while also offering visitors an opportunity to enjoy the serene Himalayan environment. It is a popular destination for travellers interested in spirituality, architecture, photography and scenic views.",
        es: "La Pagoda de la Paz de Darjeeling es un impresionante monumento budista situado en las colinas de Darjeeling. Su estructura blanca está decorada con estatuas doradas e imágenes budistas y ofrece un ambiente tranquilo junto con vistas panorámicas de las montañas. Situada cerca del Templo Japonés, la pagoda representa un mensaje de paz y armonía. También es un lugar popular para quienes desean disfrutar de la espiritualidad, la arquitectura, la fotografía y los paisajes del Himalaya.",
        pt: "A Pagoda da Paz de Darjeeling é um impressionante monumento budista localizado nas colinas de Darjeeling. Sua estrutura branca apresenta estátuas douradas e imagens budistas, além de oferecer um ambiente tranquilo com vistas panorâmicas das montanhas. Localizada próxima ao Templo Japonês, a pagoda transmite uma mensagem de paz e harmonia e proporciona aos visitantes a oportunidade de apreciar a atmosfera serena do Himalaia. É um destino popular para quem se interessa por espiritualidade, arquitetura, fotografia e paisagens naturais."
      }
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
      name: {
        en: "Himalayan Mountaineering Institute (HMI)",
        es: "Instituto de Montañismo del Himalaya (HMI)",
        pt: "Instituto de Montanhismo do Himalaia (HMI)"
      },
      description: {
        en: "The Himalayan Mountaineering Institute is an important mountaineering and adventure institution in Darjeeling. Founded in 1954, it was established to promote mountaineering and preserve the spirit of Himalayan exploration. The institute is also associated with the legacy of Tenzing Norgay and houses exhibits related to mountaineering history, expeditions and Himalayan climbing. Located in the Jawahar Parbat area, it is a fascinating attraction for visitors interested in adventure, exploration and the history of mountaineering in the Himalayas.",
        es: "El Himalayan Mountaineering Institute es una importante institución dedicada al montañismo y a las actividades de aventura en Darjeeling. Fundado en 1954, fue creado para promover el montañismo y preservar el espíritu de exploración del Himalaya. El instituto también está relacionado con el legado de Tenzing Norgay y cuenta con exposiciones sobre la historia del montañismo, expediciones y escalada en el Himalaya. Situado en la zona de Jawahar Parbat, es un lugar interesante para quienes desean conocer la aventura y la historia de la exploración de las montañas.",
        pt: "O Himalayan Mountaineering Institute é uma importante instituição dedicada ao montanhismo e às atividades de aventura em Darjeeling. Fundado em 1954, foi criado para promover o montanhismo e preservar o espírito de exploração do Himalaia. O instituto também está associado ao legado de Tenzing Norgay e possui exposições relacionadas à história do montanhismo, expedições e escaladas no Himalaia. Localizado na região de Jawahar Parbat, é uma atração interessante para visitantes que desejam conhecer a aventura, a exploração e a história do montanhismo na região."
      }
    }
  ]
};

const existingIdx = cities.findIndex(c => c.id === 'darjeeling' || c.slug?.en === 'darjeeling');
if (existingIdx !== -1) {
  cities[existingIdx] = { ...cities[existingIdx], ...darjeelingData };
  console.log('Updated existing Darjeeling city entry at index', existingIdx);
} else {
  cities.push(darjeelingData);
  console.log('Added new Darjeeling city entry');
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log('Saved cities.json. Total cities:', cities.length);
