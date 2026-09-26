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

// 1. UPDATE KARNATAKA STATE DATA
const stateIndex = states.findIndex(s => s.id === 'karnataka');

const kaStateShortDesc = {
  en: "<p><strong>Karnataka</strong> is a diverse South Indian state where ancient heritage, royal architecture, lush Western Ghats, coffee plantations, wildlife reserves, spiritual destinations and Arabian Sea beaches come together. From the royal charm of Mysuru and the magnificent ruins of Hampi to the peaceful coffee landscapes of Coorg and the beaches of Gokarna and Udupi, Karnataka offers a wide variety of travel experiences.</p>",
  es: "<p><strong>Karnataka</strong> es un estado diverso del sur de la India donde se combinan patrimonio histórico, arquitectura real, montañas verdes de los Ghats Occidentales, plantaciones de café, reservas naturales, destinos espirituales y playas del mar Arábigo. Desde el patrimonio real de Mysuru y las ruinas de Hampi hasta los paisajes cafeteros de Coorg y las playas de Gokarna y Udupi, Karnataka ofrece experiencias para todo tipo de viajeros.</p>",
  pt: "<p><strong>Karnataka</strong> é um estado diversificado do sul da Índia, onde patrimônio histórico, arquitetura real, Ghats Ocidentais, plantações de café, reservas naturais, destinos espirituais e praias do Mar Arábico se encontram. Do patrimônio de Mysuru e das ruínas de Hampi às paisagens de café de Coorg e às praias de Gokarna e Udupi, Karnataka oferece experiências variadas para os viajantes.</p>"
};

const kaStateLongDesc = {
  en: `<h2>Discover Karnataka – Where Heritage Meets Nature</h2>

<p>Karnataka is one of India's most geographically and culturally diverse travel destinations. The state brings together historic cities, ancient temples, royal palaces, UNESCO World Heritage monuments, forested hills, coffee plantations, wildlife habitats and a long Arabian Sea coastline.</p>

<p>The heritage landscape of Karnataka includes famous destinations such as <strong>Hampi, Pattadakal, Badami, Aihole, Belur and Halebeedu</strong>. Karnataka Tourism highlights Hampi, Pattadakal and the Western Chalukya temple heritage of Badami, Aihole and Halebeedu among the state's important heritage attractions.</p>

<h3>Royal Karnataka</h3>

<p><strong>Mysuru</strong> is one of the state's most important cultural destinations, famous for its palaces, temples, markets and traditions. Mysuru Palace is one of its most recognisable landmarks and reflects several architectural influences.</p>

<h3>Western Ghats and Coffee Country</h3>

<p>Coorg and Chikkamagaluru offer misty hills, coffee plantations, waterfalls, forests and trekking opportunities. Coorg is particularly known for coffee plantations, waterfalls and scenic hills, while Chikkamagaluru is known for its coffee landscapes and mountain trails.</p>

<h3>Coastal Karnataka</h3>

<p>Karnataka's Arabian Sea coastline offers beaches, temples, seafood, cultural traditions and scenic drives. Gokarna combines beaches with important temples, while Udupi combines spiritual heritage, traditional cuisine, beaches and nearby Western Ghats landscapes.</p>

<h3>Adventure and Wildlife</h3>

<p>Karnataka offers trekking, rafting, paragliding, scuba diving, surfing, kayaking and wildlife experiences. Adventure opportunities extend from the Western Ghats to the coast, including trekking in Coorg and Chikkamagaluru and water-based activities around coastal destinations.</p>

<h3>Why Visit Karnataka?</h3>

<ul>
<li>Ancient temples and UNESCO heritage sites</li>
<li>Royal palaces and cultural cities</li>
<li>Western Ghats and coffee plantations</li>
<li>Beautiful Arabian Sea beaches</li>
<li>Wildlife safaris and nature experiences</li>
<li>Trekking and outdoor adventure</li>
<li>Traditional South Indian cuisine</li>
<li>Spiritual and pilgrimage destinations</li>
<li>Rich local art, festivals and traditions</li>
</ul>`,

  es: `<h2>Descubre Karnataka – Donde el Patrimonio se Une con la Naturaleza</h2>

<p>Karnataka es uno de los destinos más diversos de la India. El estado combina ciudades históricas, templos antiguos, palacios reales, monumentos Patrimonio Mundial de la UNESCO, montañas boscosas, plantaciones de café, hábitats de vida silvestre y una extensa costa en el mar Arábigo.</p>

<p>Su rico patrimonio abarca lugares célebres como <strong>Hampi, Pattadakal, Badami, Aihole, Belur y Halebeedu</strong>.</p>

<h3>Karnataka Real</h3>

<p><strong>Mysuru</strong> destaca como la capital cultural del estado, famosa por sus palacios señoriales, templos y mercados tradicionales.</p>

<h3>Ghats Occidentales y la Tierra del Café</h3>

<p>Coorg y Chikkamagaluru ofrecen montañas envueltas en bruma, plantaciones de café, cascadas y rutas de senderismo.</p>

<h3>Costa de Karnataka</h3>

<p>La costa del mar Arábigo ofrece playas vírgenes, gastronomía marinera y templos históricos como los de Gokarna y Udupi.</p>

<h3>Aventura y Vida Silvestre</h3>

<p>Senderismo, rafting, buceo, surf y safaris en parques nacionales completan la variada oferta turística de Karnataka.</p>

<h3>¿Por qué visitar Karnataka?</h3>

<ul>
<li>Templos milenarios y sitios UNESCO</li>
<li>Palacios reales y ciudades históricas</li>
<li>Ghats Occidentales y plantaciones cafeteras</li>
<li>Hermosas playas del mar Arábigo</li>
<li>Safaris y reservas de fauna salvaje</li>
<li>Senderismo y deportes de aventura</li>
<li>Gastronomía tradicional del sur de la India</li>
<li>Destinos espirituales y culturales</li>
</ul>`,

  pt: `<h2>Descubra Karnataka – Onde o Patrimônio Encontra a Natureza</h2>

<p>Karnataka é um dos destinos mais ricos e diversificados da Índia, unindo cidades históricas, templos antigos, palácios reais, monumentos da UNESCO, colinas florestadas, plantações de café e uma extensa costa no Mar Arábico.</p>

<p>Seu patrimônio histórico inclui locais famosos como <strong>Hampi, Pattadakal, Badami, Aihole, Belur e Halebeedu</strong>.</p>

<h3>Karnataka Real</h3>

<p><strong>Mysuru</strong> destaca-se como a capital cultural do estado, famosa por seus palácios imponentes, templos e feiras tradicionais.</p>

<h3>Ghats Ocidentais e Região do Café</h3>

<p>Coorg e Chikkamagaluru oferecem colinas cobertas por névoa, plantações de café, cachoeiras e trilhas de trekking.</p>

<h3>Litoral de Karnataka</h3>

<p>O litoral do Mar Arábico reúne praias paradisíacas, gastronomia típica e templos históricos como Gokarna e Udupi.</p>

<h3>Aventura e Vida Selvagem</h3>

<p>Trekking, rafting, mergulho, surfe e safáris ecológicos completam as experiências imperdíveis em Karnataka.</p>

<h3>Por que visitar Karnataka?</h3>

<ul>
<li>Templos antigos e patrimônios da UNESCO</li>
<li>Palácios reais e cidades históricas</li>
<li>Ghats Ocidentais e plantações de café</li>
<li>Belas praias do Mar Arábico</li>
<li>Safáris e turismo ecológico</li>
<li>Trekking e esportes ao ar livre</li>
<li>Culinária tradicional do sul da Índia</li>
<li>Destinos espirituais e culturais</li>
</ul>`
};

const kaSeoTitle = {
  en: "Karnataka Tourism – Explore Heritage, Beaches, Hills & Culture",
  es: "Turismo en Karnataka – Patrimonio, Playas, Montañas y Cultura",
  pt: "Turismo em Karnataka – Patrimônio, Praias, Montanhas e Cultura"
};

const kaSeoDesc = {
  en: "Explore Karnataka tourism with Mysuru, Hampi, Coorg, Bengaluru, Gokarna, Udupi and Chikkamagaluru. Discover heritage, beaches, hills, wildlife and culture.",
  es: "Descubre Karnataka con Mysuru, Hampi, Coorg, Bengaluru, Gokarna, Udupi y Chikkamagaluru. Explora patrimonio, playas, montañas, naturaleza y cultura.",
  pt: "Conheça Karnataka através de Mysuru, Hampi, Coorg, Bengaluru, Gokarna, Udupi e Chikkamagaluru. Explore patrimônio, praias, montanhas e natureza."
};

const kaSeoKeywords = {
  en: "Karnataka tourism, Karnataka travel, places to visit in Karnataka, Karnataka tour packages, Karnataka tourist places, Karnataka holidays, South India tourism",
  es: "turismo en Karnataka, viajar a Karnataka, lugares para visitar en Karnataka, viajes al sur de India, turismo cultural",
  pt: "turismo em Karnataka, viajar para Karnataka, lugares para visitar em Karnataka, turismo no sul da Índia"
};

if (stateIndex !== -1) {
  states[stateIndex].name = { en: "Karnataka", es: "Karnataka", pt: "Karnataka" };
  states[stateIndex].description = kaStateShortDesc;
  states[stateIndex].overview = kaStateLongDesc;
  states[stateIndex].content = kaStateLongDesc;
  states[stateIndex].fullDescription = kaStateLongDesc;
  states[stateIndex].seoTitle = kaSeoTitle;
  states[stateIndex].seoDesc = kaSeoDesc;
  states[stateIndex].seoKeywords = kaSeoKeywords;
  states[stateIndex].isPublished = true;
  states[stateIndex].isDeleted = false;
  states[stateIndex].updatedAt = new Date().toISOString();
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Updated Karnataka state in states.json');

// 2. DEFINE THE 7 DESTINATIONS
const kaCitiesData = [
  // 1. BENGALURU
  {
    id: "bengaluru",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 1,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
    slug: { en: "bengaluru", es: "bengaluru", pt: "bengaluru" },
    name: { en: "Bengaluru", es: "Bengaluru", pt: "Bengaluru" },
    description: {
      en: "<p><strong>Bengaluru</strong> is the capital of Karnataka and a dynamic city where technology, gardens, heritage architecture, food and modern urban culture meet. It is also an important starting point for exploring destinations across Karnataka.</p>",
      es: "<p><strong>Bengaluru</strong> es la capital de Karnataka y una ciudad dinámica donde se combinan tecnología, jardines, arquitectura histórica, gastronomía y cultura urbana moderna.</p>",
      pt: "<p><strong>Bengaluru</strong> é a capital de Karnataka e uma cidade dinâmica onde tecnologia, jardins, arquitetura histórica, gastronomia e cultura urbana moderna se encontram.</p>"
    },
    overview: {
      en: `<h2>Discover Bengaluru</h2>

<p>Bengaluru offers a different side of Karnataka, combining a modern metropolitan lifestyle with historic landmarks and extensive green spaces. The city is known for its technology sector, but travellers can also explore palaces, gardens, museums, markets and architectural landmarks.</p>

<p>From the impressive Vidhana Soudha and historic Bengaluru Palace to the greenery of Lalbagh and Cubbon Park, the city offers a mixture of urban and cultural experiences.</p>`,
      es: `<h2>Descubre Bengaluru</h2>

<p>Bengaluru combina una vida urbana moderna con monumentos históricos, jardines y espacios culturales. La ciudad es conocida por su sector tecnológico, pero también ofrece palacios, museos, mercados y arquitectura histórica.</p>`,
      pt: `<h2>Conheça Bengaluru</h2>

<p>Bengaluru combina uma vida urbana moderna com monumentos históricos, jardins e espaços culturais. A cidade é conhecida por seu setor tecnológico, mas também oferece palácios, museus, mercados e arquitetura histórica.</p>`
    },
    seoTitle: {
      en: "Bengaluru Tourism – Garden City, Palaces & Technology Hub",
      es: "Turismo de Bengaluru – Ciudad Jardín, Palacios y Tecnología",
      pt: "Turismo de Bengaluru – Cidade Jardim, Palácios e Tecnologia"
    },
    seoDesc: {
      en: "Explore Bengaluru, the capital of Karnataka. Visit Bengaluru Palace, Vidhana Soudha, Lalbagh Botanical Garden, Cubbon Park and ISKCON Temple.",
      es: "Explora Bengaluru, la capital de Karnataka. Visita el Palacio de Bengaluru, Vidhana Soudha, Lalbagh, Cubbon Park y el Templo ISKCON.",
      pt: "Explore Bengaluru, a capital de Karnataka. Visite o Palácio de Bengaluru, Vidhana Soudha, Lalbagh, Cubbon Park e o Templo ISKCON."
    },
    seoKeywords: {
      en: "Bengaluru, Bengaluru Tourism, Bengaluru Palace, Vidhana Soudha, Lalbagh Botanical Garden, Cubbon Park, ISKCON Temple Bengaluru",
      es: "Bengaluru, Turismo de Bengaluru, Palacio de Bengaluru, Vidhana Soudha, Jardín Botánico Lalbagh, Cubbon Park",
      pt: "Bengaluru, Turismo de Bengaluru, Palácio de Bengaluru, Vidhana Soudha, Jardim Botânico Lalbagh, Cubbon Park"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
        name: { en: "Bengaluru Palace", es: "Palacio de Bengaluru", pt: "Palácio de Bengaluru" },
        description: {
          en: cleanPlainText("Bengaluru Palace is a historic royal residence known for its distinctive architecture, grand interiors and connection with the city's royal heritage."),
          es: cleanPlainText("El Palacio de Bengaluru es una histórica residencia real conocida por su arquitectura, interiores elegantes y conexión con el patrimonio de la ciudad."),
          pt: cleanPlainText("O Palácio de Bengaluru é uma histórica residência real conhecida por sua arquitetura, interiores elegantes e ligação com o patrimônio da cidade.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Vidhana Soudha", es: "Vidhana Soudha", pt: "Vidhana Soudha" },
        description: {
          en: cleanPlainText("Vidhana Soudha is one of Bengaluru's most recognisable landmarks and houses the Karnataka legislature. Its grand architecture makes it an important city attraction."),
          es: cleanPlainText("Vidhana Soudha es uno de los monumentos más reconocibles de Bengaluru y alberga la legislatura de Karnataka."),
          pt: cleanPlainText("Vidhana Soudha é um dos monumentos mais reconhecidos de Bengaluru e abriga a legislatura de Karnataka.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Lalbagh Botanical Garden", es: "Jardín Botánico Lalbagh", pt: "Jardim Botânico Lalbagh" },
        description: {
          en: cleanPlainText("Lalbagh is a historic botanical garden known for its extensive greenery, plants, walking paths and glasshouse."),
          es: cleanPlainText("Lalbagh es un histórico jardín botánico conocido por sus áreas verdes, plantas, senderos y casa de cristal."),
          pt: cleanPlainText("Lalbagh é um histórico jardim botânico conhecido por sua vegetação, plantas, trilhas e estufa de vidro.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Cubbon Park", es: "Cubbon Park", pt: "Cubbon Park" },
        description: {
          en: cleanPlainText("Cubbon Park is a large green space in central Bengaluru, ideal for peaceful walks and escaping the busy city environment."),
          es: cleanPlainText("Cubbon Park es un gran espacio verde en el centro de Bengaluru, ideal para caminar y descansar del ambiente urbano."),
          pt: cleanPlainText("Cubbon Park é uma grande área verde no centro de Bengaluru, ideal para caminhadas e momentos de tranquilidade.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "ISKCON Temple Bengaluru", es: "Templo ISKCON Bengaluru", pt: "Templo ISKCON Bengaluru" },
        description: {
          en: cleanPlainText("The ISKCON Temple is a major spiritual attraction featuring traditional temple elements and a peaceful devotional environment."),
          es: cleanPlainText("El Templo ISKCON es un importante lugar espiritual conocido por su arquitectura tradicional y ambiente devocional."),
          pt: cleanPlainText("O Templo ISKCON é uma importante atração espiritual conhecida por sua arquitetura tradicional e ambiente devocional.")
        }
      }
    ]
  },

  // 2. MYSURU
  {
    id: "mysuru",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 2,
    image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
    slug: { en: "mysuru", es: "mysuru", pt: "mysuru" },
    name: { en: "Mysuru", es: "Mysuru", pt: "Mysuru" },
    description: {
      en: "<p><strong>Mysuru</strong>, often described by Karnataka Tourism as the Cultural Capital of Karnataka, is famous for royal palaces, temples, markets, architecture and cultural traditions.</p>",
      es: "<p><strong>Mysuru</strong>, conocida como la capital cultural de Karnataka, destaca por sus palacios reales, templos, mercados, arquitectura y tradiciones culturales.</p>",
      pt: "<p><strong>Mysuru</strong>, conhecida como a capital cultural de Karnataka, destaca-se por seus palácios reais, templos, mercados, arquitetura e tradições culturais.</p>"
    },
    overview: {
      en: `<h2>Explore Mysuru</h2>

<p>Mysuru is one of Karnataka's most important heritage destinations. Situated near the Chamundi Hills, the city developed under the Wodeyar dynasty and retains a strong royal and cultural identity.</p>

<p>The city's attractions include magnificent palaces, historic temples, churches, museums and traditional markets. Mysuru Palace is particularly notable for its architecture and remains one of the city's major attractions.</p>`,
      es: `<h2>Descubre Mysuru</h2>

<p>Mysuru es uno de los principales destinos patrimoniales de Karnataka. Su historia real, sus palacios, templos, mercados y tradiciones culturales convierten la ciudad en una parada importante del sur de la India.</p>`,
      pt: `<h2>Conheça Mysuru</h2>

<p>Mysuru é um dos principais destinos históricos de Karnataka. Sua história real, palácios, templos, mercados e tradições culturais fazem da cidade uma importante parada no sul da Índia.</p>`
    },
    seoTitle: {
      en: "Mysuru Tourism – Mysuru Palace, Chamundi Hills & Cultural Heritage",
      es: "Turismo de Mysuru – Palacio de Mysuru, Chamundi Hills y Patrimonio",
      pt: "Turismo de Mysuru – Palácio de Mysuru, Chamundi Hills e Patrimônio"
    },
    seoDesc: {
      en: "Explore Mysuru, the Cultural Capital of Karnataka. Visit Mysuru Palace, Chamundeshwari Temple, St. Philomena's Church, Brindavan Gardens and Devaraja Market.",
      es: "Explora Mysuru, la capital cultural de Karnataka. Visita el Palacio de Mysuru, el templo Chamundeshwari, la iglesia St. Philomena y Brindavan Gardens.",
      pt: "Explore Mysuru, a capital cultural de Karnataka. Visite o Palácio de Mysuru, o Templo Chamundeshwari, a Igreja St. Philomena e Brindavan Gardens."
    },
    seoKeywords: {
      en: "Mysuru, Mysuru Tourism, Mysuru Palace, Chamundeshwari Temple, St Philomena's Church, Brindavan Gardens, Devaraja Market",
      es: "Mysuru, Turismo de Mysuru, Palacio de Mysuru, Templo Chamundeshwari, Iglesia St Philomena, Brindavan Gardens",
      pt: "Mysuru, Turismo de Mysuru, Palácio de Mysuru, Templo Chamundeshwari, Igreja St Philomena, Brindavan Gardens"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        name: { en: "Mysuru Palace", es: "Palacio de Mysuru", pt: "Palácio de Mysuru" },
        description: {
          en: cleanPlainText("A magnificent royal palace and one of Mysuru's most iconic landmarks, known for its elaborate architecture and grand interiors."),
          es: cleanPlainText("Un magnífico palacio real y uno de los monumentos más famosos de Mysuru, conocido por su arquitectura y grandes interiores."),
          pt: cleanPlainText("Um magnífico palácio real e um dos monumentos mais famosos de Mysuru, conhecido por sua arquitetura e interiores grandiosos.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Chamundeshwari Temple", es: "Templo Chamundeshwari", pt: "Templo Chamundeshwari" },
        description: {
          en: cleanPlainText("Located on Chamundi Hills, this important temple offers spiritual significance as well as views over Mysuru."),
          es: cleanPlainText("Situado en Chamundi Hills, este importante templo ofrece valor espiritual y vistas panorámicas de Mysuru."),
          pt: cleanPlainText("Localizado nas Chamundi Hills, este importante templo oferece valor espiritual e vistas panorâmicas de Mysuru.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "St. Philomena's Church", es: "Iglesia de Santa Filomena", pt: "Igreja de Santa Filomena" },
        description: {
          en: cleanPlainText("A striking Neo-Gothic church and one of Mysuru's important architectural landmarks."),
          es: cleanPlainText("Una impresionante iglesia neogótica y uno de los principales monumentos arquitectónicos de Mysuru."),
          pt: cleanPlainText("Uma impressionante igreja neogótica e um dos principais monumentos arquitetônicos de Mysuru.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Brindavan Gardens", es: "Jardines Brindavan", pt: "Jardins Brindavan" },
        description: {
          en: cleanPlainText("Famous for landscaped gardens, fountains and evening illumination, located near the Krishnaraja Sagara reservoir."),
          es: cleanPlainText("Famosos por sus jardines, fuentes e iluminación nocturna, situados cerca del embalse Krishnaraja Sagara."),
          pt: cleanPlainText("Famosos por seus jardins, fontes e iluminação noturna, localizados perto do reservatório Krishnaraja Sagara.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Devaraja Market", es: "Mercado Devaraja", pt: "Mercado Devaraja" },
        description: {
          en: cleanPlainText("A lively traditional market where visitors can experience local flowers, fruits, spices, handicrafts and everyday city life."),
          es: cleanPlainText("Un mercado tradicional donde se pueden descubrir flores, frutas, especias, artesanías y la vida cotidiana local."),
          pt: cleanPlainText("Um mercado tradicional onde os visitantes podem conhecer flores, frutas, especiarias, artesanato e a vida cotidiana local.")
        }
      }
    ]
  },

  // 3. HAMPI
  {
    id: "hampi",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 3,
    image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
    slug: { en: "hampi", es: "hampi", pt: "hampi" },
    name: { en: "Hampi", es: "Hampi", pt: "Hampi" },
    description: {
      en: "<p><strong>Hampi</strong> is a UNESCO World Heritage Site famous for the ruins of the Vijayanagara Empire, ancient temples, royal structures, stone monuments and dramatic boulder landscapes.</p>",
      es: "<p><strong>Hampi</strong> es un sitio declarado Patrimonio Mundial de la UNESCO, famoso por las ruinas del Imperio Vijayanagara, antiguos templos, estructuras reales y paisajes rocosos.</p>",
      pt: "<p><strong>Hampi</strong> é um Patrimônio Mundial da UNESCO, famoso pelas ruínas do Império Vijayanagara, templos antigos, estruturas reais e paisagens rochosas.</p>"
    },
    overview: {
      en: `<h2>Discover Hampi</h2>

<p>Hampi was once the capital of the Vijayanagara Empire and developed into a major historical and cultural centre. Today, its ruins stretch across a spectacular landscape of granite boulders, hills and the Tungabhadra River.</p>

<p>The destination is divided broadly into sacred and royal areas and contains temples, markets, palaces, royal enclosures and water structures. Hampi was declared a UNESCO World Heritage Site in 1986.</p>

<h3>Heritage Experience</h3>

<ul>
<li>Explore ancient temple complexes</li>
<li>Walk through royal ruins</li>
<li>Visit historic markets</li>
<li>See the famous Stone Chariot</li>
<li>Explore the boulder landscape</li>
<li>Enjoy sunrise and sunset viewpoints</li>
</ul>`,
      es: `<h2>Descubre Hampi</h2>

<p>Hampi fue la capital del Imperio Vijayanagara y hoy es uno de los grandes destinos históricos de la India. Sus ruinas se extienden entre enormes formaciones de granito, colinas y el río Tungabhadra.</p>`,
      pt: `<h2>Conheça Hampi</h2>

<p>Hampi foi a capital do Império Vijayanagara e atualmente é um dos grandes destinos históricos da Índia. Suas ruínas estão espalhadas entre enormes formações de granito, colinas e o rio Tungabhadra.</p>`
    },
    seoTitle: {
      en: "Hampi Tourism – UNESCO World Heritage, Vijayanagara Empire & Stone Chariot",
      es: "Turismo de Hampi – Patrimonio de la UNESCO, Imperio Vijayanagara y Carro de Piedra",
      pt: "Turismo de Hampi – Patrimônio da UNESCO, Império Vijayanagara e Carro de Pedra"
    },
    seoDesc: {
      en: "Explore Hampi UNESCO site in Karnataka. Visit Virupaksha Temple, Vijaya Vittala Stone Chariot, Lotus Mahal, Elephant Stables and Hemakuta Hill.",
      es: "Explora Hampi sitio UNESCO en Karnataka. Visita el templo Virupaksha, el Carro de Piedra Vittala, Lotus Mahal, Elephant Stables y Hemakuta Hill.",
      pt: "Explore Hampi patrimônio UNESCO em Karnataka. Visite o Templo Virupaksha, o Carro de Pedra Vittala, Lotus Mahal, Elephant Stables e Hemakuta Hill."
    },
    seoKeywords: {
      en: "Hampi, Hampi Tourism, UNESCO World Heritage, Virupaksha Temple, Vijaya Vittala Temple, Stone Chariot, Lotus Mahal, Elephant Stables",
      es: "Hampi, Turismo de Hampi, Patrimonio UNESCO, Templo Virupaksha, Carro de Piedra, Lotus Mahal",
      pt: "Hampi, Turismo de Hampi, Patrimônio UNESCO, Templo Virupaksha, Carro de Pedra, Lotus Mahal"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        name: { en: "Virupaksha Temple", es: "Templo Virupaksha", pt: "Templo Virupaksha" },
        description: {
          en: cleanPlainText("One of Hampi's most important temples, located within the historic centre of the ancient settlement."),
          es: cleanPlainText("Uno de los templos más importantes de Hampi, situado en el centro histórico del antiguo asentamiento."),
          pt: cleanPlainText("Um dos templos mais importantes de Hampi, localizado no centro histórico do antigo assentamento.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Vijaya Vittala Temple", es: "Templo Vijaya Vittala", pt: "Templo Vijaya Vittala" },
        description: {
          en: cleanPlainText("A remarkable temple complex famous for its architecture and the iconic Stone Chariot."),
          es: cleanPlainText("Un extraordinario complejo de templos famoso por su arquitectura y su icónico Carro de Piedra."),
          pt: cleanPlainText("Um extraordinário complexo de templos famoso por sua arquitetura e pelo icônico Carro de Pedra.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Lotus Mahal", es: "Lotus Mahal", pt: "Lotus Mahal" },
        description: {
          en: cleanPlainText("A distinctive structure within the royal area of Hampi, recognised for its elegant lotus-inspired design."),
          es: cleanPlainText("Una estructura distintiva de la zona real de Hampi, reconocida por su elegante diseño inspirado en el loto."),
          pt: cleanPlainText("Uma estrutura marcante da área real de Hampi, conhecida por seu elegante design inspirado em uma flor de lótus.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Elephant Stables", es: "Establos de Elefantes", pt: "Estabulo de Elefantes" },
        description: {
          en: cleanPlainText("A large historic structure that reflects the architectural scale and organisation of the Vijayanagara royal complex."),
          es: cleanPlainText("Una gran estructura histórica que refleja la escala arquitectónica del complejo real de Vijayanagara."),
          pt: cleanPlainText("Uma grande estrutura histórica que demonstra a escala arquitetônica do complexo real de Vijayanagara.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Hemakuta Hill", es: "Colina Hemakuta", pt: "Colina Hemakuta" },
        description: {
          en: cleanPlainText("A scenic hill dotted with temples and known for beautiful views across the Hampi landscape."),
          es: cleanPlainText("Una colina con templos históricos y excelentes vistas sobre el paisaje de Hampi."),
          pt: cleanPlainText("Uma colina com templos históricos e belas vistas sobre a paisagem de Hampi.")
        }
      }
    ]
  },

  // 4. COORG
  {
    id: "coorg",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 4,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    slug: { en: "coorg", es: "coorg", pt: "coorg" },
    name: { en: "Coorg", es: "Coorg", pt: "Coorg" },
    description: {
      en: "<p><strong>Coorg</strong>, also known as Kodagu, is a scenic Western Ghats destination famous for coffee plantations, misty hills, waterfalls, forests and peaceful landscapes. Karnataka Tourism describes Coorg as the “Land of Coffee, Clouds, and Calm.”</p>",
      es: "<p><strong>Coorg</strong>, también conocida como Kodagu, es un destino de los Ghats Occidentales famoso por sus plantaciones de café, colinas cubiertas de niebla, cascadas, bosques y paisajes tranquilos.</p>",
      pt: "<p><strong>Coorg</strong>, também conhecida como Kodagu, é um destino dos Ghats Ocidentais famoso por suas plantações de café, colinas cobertas de neblina, cachoeiras, florestas e paisagens tranquilas.</p>"
    },
    overview: {
      en: `<h2>Explore Coorg</h2>

<p>Coorg is one of Karnataka's best-known hill destinations. The region combines green hills, coffee estates, waterfalls, forests and a distinctive Kodava cultural identity.</p>

<p>Travellers can explore coffee plantations, enjoy scenic viewpoints, visit waterfalls and temples, experience wildlife and take part in trekking and river activities. Karnataka Tourism lists Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery and Nagarhole National Park among attractions associated with the region.</p>`,
      es: `<h2>Descubre Coorg</h2>

<p>Coorg es uno de los destinos de montaña más conocidos de Karnataka. La región combina colinas verdes, plantaciones de café, cascadas, bosques y la particular cultura Kodava.</p>`,
      pt: `<h2>Conheça Coorg</h2>

<p>Coorg é um dos destinos montanhosos mais conhecidos de Karnataka. A região combina colinas verdes, plantações de café, cachoeiras, florestas e a cultura única dos Kodavas.</p>`
    },
    seoTitle: {
      en: "Coorg Tourism – Coffee Plantations, Abbey Falls & Western Ghats",
      es: "Turismo de Coorg – Plantaciones de Café, Abbey Falls y Ghats Occidentales",
      pt: "Turismo de Coorg – Plantações de Café, Abbey Falls e Ghats Ocidentais"
    },
    seoDesc: {
      en: "Explore Coorg (Kodagu) in Karnataka. Visit Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery and Mandalpatti Viewpoint.",
      es: "Explora Coorg (Kodagu) en Karnataka. Visita Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery y el mirador Mandalpatti.",
      pt: "Explore Coorg (Kodagu) em Karnataka. Visite Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery e o mirante Mandalpatti."
    },
    seoKeywords: {
      en: "Coorg, Coorg Tourism, Kodagu, Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery, Mandalpatti Viewpoint",
      es: "Coorg, Turismo de Coorg, Kodagu, Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery",
      pt: "Coorg, Turismo de Coorg, Kodagu, Abbey Falls, Raja's Seat, Dubare Elephant Camp, Talacauvery"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        name: { en: "Abbey Falls", es: "Cascadas Abbey", pt: "Cachoeiras Abbey" },
        description: {
          en: cleanPlainText("A popular waterfall surrounded by lush greenery and coffee plantations."),
          es: cleanPlainText("Una popular cascada rodeada de vegetación y plantaciones de café."),
          pt: cleanPlainText("Uma cachoeira popular cercada por vegetação e plantações de café.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Raja's Seat", es: "Raja's Seat", pt: "Raja's Seat" },
        description: {
          en: cleanPlainText("A scenic viewpoint known for panoramic views over Coorg's green hills and beautiful sunset experiences."),
          es: cleanPlainText("Un mirador conocido por sus vistas panorámicas sobre las colinas verdes de Coorg y sus atardeceres."),
          pt: cleanPlainText("Um mirante conhecido pelas vistas panorâmicas das colinas verdes de Coorg e pelos belos pores do sol.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Dubare Elephant Camp", es: "Campamento de Elefantes Dubare", pt: "Acampamento de Elefantes Dubare" },
        description: {
          en: cleanPlainText("A nature and wildlife experience where visitors can learn about elephants and observe them in a forest setting."),
          es: cleanPlainText("Una experiencia de naturaleza y vida silvestre donde los visitantes pueden conocer más sobre los elefantes."),
          pt: cleanPlainText("Uma experiência de natureza e vida selvagem onde os visitantes podem conhecer melhor os elefantes.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Talacauvery", es: "Talacauvery", pt: "Talacauvery" },
        description: {
          en: cleanPlainText("A sacred destination associated with the origin of the River Cauvery and located in the Brahmagiri hills."),
          es: cleanPlainText("Un destino sagrado relacionado con el origen del río Cauvery, situado en las colinas de Brahmagiri."),
          pt: cleanPlainText("Um destino sagrado associado à origem do rio Cauvery, localizado nas colinas de Brahmagiri.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Mandalpatti Viewpoint", es: "Mirador Mandalpatti", pt: "Mirante Mandalpatti" },
        description: {
          en: cleanPlainText("A highland viewpoint offering wide views of misty valleys, hills and surrounding Western Ghats landscapes."),
          es: cleanPlainText("Un mirador de montaña con amplias vistas de valles, colinas y paisajes de los Ghats Occidentales."),
          pt: cleanPlainText("Um mirante de montanha com amplas vistas de vales, colinas e paisagens dos Ghats Ocidentais.")
        }
      }
    ]
  },

  // 5. CHIKKAMAGALURU
  {
    id: "chikkamagaluru",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 5,
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
    slug: { en: "chikkamagaluru", es: "chikkamagaluru", pt: "chikkamagaluru" },
    name: { en: "Chikkamagaluru", es: "Chikkamagaluru", pt: "Chikkamagaluru" },
    description: {
      en: "<p><strong>Chikkamagaluru</strong> is a Western Ghats hill destination known for coffee plantations, misty mountains, trekking trails, waterfalls and nature experiences. Mullayanagiri, Karnataka's highest peak, is one of the region's major attractions.</p>",
      es: "<p><strong>Chikkamagaluru</strong> es un destino montañoso de los Ghats Occidentales conocido por sus plantaciones de café, montañas cubiertas de niebla, senderos de trekking y cascadas.</p>",
      pt: "<p><strong>Chikkamagaluru</strong> é um destino montanhoso dos Ghats Ocidentais conhecido por suas plantações de café, montanhas cobertas de neblina, trilhas de trekking e cachoeiras.</p>"
    },
    overview: {
      en: `<h2>Discover Chikkamagaluru</h2>

<p>Chikkamagaluru combines coffee culture with the landscapes of the Western Ghats. The region is known for high mountain peaks, forested valleys, waterfalls and coffee estates.</p>

<p>Mullayanagiri is the highest peak in Karnataka, while Baba Budangiri, Kudremukh, Hebbe Falls and the coffee estate trails provide opportunities for trekking, sightseeing and nature exploration.</p>

<h3>Adventure in Chikkamagaluru</h3>

<ul>
<li>Trekking through mountain trails</li>
<li>Exploring coffee plantations</li>
<li>Visiting waterfalls</li>
<li>Wildlife experiences</li>
<li>Camping and nature walks</li>
</ul>`,
      es: `<h2>Descubre Chikkamagaluru</h2>

<p>Chikkamagaluru combina la cultura del café con los paisajes de los Ghats Occidentales. La región ofrece montañas, valles boscosos, cascadas y plantaciones de café.</p>`,
      pt: `<h2>Conheça Chikkamagaluru</h2>

<p>Chikkamagaluru combina a cultura do café com as paisagens dos Ghats Ocidentais. A região oferece montanhas, vales florestais, cachoeiras e plantações de café.</p>`
    },
    seoTitle: {
      en: "Chikkamagaluru Tourism – Coffee Estates, Mullayanagiri & Kudremukh",
      es: "Turismo de Chikkamagaluru – Plantaciones de Café y Pico Mullayanagiri",
      pt: "Turismo de Chikkamagaluru – Plantações de Chá e Pico Mullayanagiri"
    },
    seoDesc: {
      en: "Explore Chikkamagaluru in Karnataka. Trek Mullayanagiri Peak, Baba Budangiri, Kudremukh, Hebbe Falls and experience coffee plantation trails.",
      es: "Explora Chikkamagaluru en Karnataka. Trekking en el pico Mullayanagiri, Baba Budangiri, Kudremukh, Hebbe Falls y plantaciones de café.",
      pt: "Explore Chikkamagaluru em Karnataka. Faça trekking no Pico Mullayanagiri, Baba Budangiri, Kudremukh, Hebbe Falls e plantações de café."
    },
    seoKeywords: {
      en: "Chikkamagaluru, Chikkamagaluru Tourism, Mullayanagiri Peak, Baba Budangiri, Hebbe Falls, Kudremukh, Coffee Estate Trails",
      es: "Chikkamagaluru, Turismo de Chikkamagaluru, Pico Mullayanagiri, Baba Budangiri, Cascadas Hebbe, Kudremukh",
      pt: "Chikkamagaluru, Turismo de Chikkamagaluru, Pico Mullayanagiri, Baba Budangiri, Cachoeiras Hebbe, Kudremukh"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        name: { en: "Mullayanagiri Peak", es: "Pico Mullayanagiri", pt: "Pico Mullayanagiri" },
        description: {
          en: cleanPlainText("Karnataka's highest peak and a popular trekking destination offering sweeping Western Ghats views."),
          es: cleanPlainText("El pico más alto de Karnataka y un popular destino de trekking con amplias vistas de los Ghats Occidentales."),
          pt: cleanPlainText("O pico mais alto de Karnataka e um popular destino de trekking com amplas vistas dos Ghats Ocidentais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Baba Budangiri Hills", es: "Colinas Baba Budangiri", pt: "Colinas Baba Budangiri" },
        description: {
          en: cleanPlainText("A scenic mountain range known for landscapes, trekking routes and cultural and spiritual significance."),
          es: cleanPlainText("Una cadena montañosa conocida por sus paisajes, rutas de trekking y significado cultural y espiritual."),
          pt: cleanPlainText("Uma cadeia montanhosa conhecida por suas paisagens, trilhas de trekking e importância cultural e espiritual.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Hebbe Falls", es: "Cascadas Hebbe", pt: "Cachoeiras Hebbe" },
        description: {
          en: cleanPlainText("A spectacular waterfall surrounded by forest and mountain scenery, popular with nature lovers."),
          es: cleanPlainText("Una espectacular cascada rodeada de bosques y montañas, popular entre los amantes de la naturaleza."),
          pt: cleanPlainText("Uma espetacular cachoeira cercada por florestas e montanhas, popular entre os amantes da natureza.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Kudremukh", es: "Kudremukh", pt: "Kudremukh" },
        description: {
          en: cleanPlainText("A biodiversity-rich mountain region known for trekking, forests and dramatic Western Ghats landscapes."),
          es: cleanPlainText("Una región montañosa rica en biodiversidad, conocida por el trekking, los bosques y sus paisajes."),
          pt: cleanPlainText("Uma região montanhosa rica em biodiversidade, conhecida pelo trekking, florestas e paisagens dos Ghats.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Coffee Estate Trails", es: "Rutas de las Plantaciones de Café", pt: "Trilhas das Plantações de Café" },
        description: {
          en: cleanPlainText("Plantation walks provide an opportunity to understand coffee cultivation while enjoying the cool mountain environment."),
          es: cleanPlainText("Los recorridos por plantaciones permiten conocer el cultivo del café mientras se disfruta del clima montañoso."),
          pt: cleanPlainText("Os passeios pelas plantações permitem conhecer o cultivo do café enquanto se aproveita o clima das montanhas.")
        }
      }
    ]
  },

  // 6. GOKARNA
  {
    id: "gokarna",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 6,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    slug: { en: "gokarna", es: "gokarna", pt: "gokarna" },
    name: { en: "Gokarna", es: "Gokarna", pt: "Gokarna" },
    description: {
      en: "<p><strong>Gokarna</strong> is a coastal destination where spirituality, beaches and outdoor experiences come together. It is known for the Mahabaleshwar Temple and beaches such as Om Beach and Kudle Beach.</p>",
      es: "<p><strong>Gokarna</strong> es un destino costero donde se combinan espiritualidad, playas y actividades al aire libre. Es conocido por el templo Mahabaleshwar y sus playas.</p>",
      pt: "<p><strong>Gokarna</strong> é um destino costeiro onde espiritualidade, praias e experiências ao ar livre se encontram. É conhecido pelo Templo Mahabaleshwar e suas praias.</p>"
    },
    overview: {
      en: `<h2>Explore Gokarna</h2>

<p>Gokarna offers a slower coastal experience combining religious heritage with scenic beaches. The town is an important pilgrimage destination because of the Mahabaleshwar Temple, while its coastline attracts travellers looking for beaches, sunsets and coastal walks.</p>

<p>Om Beach, Kudle Beach and Paradise Beach are among the destinations associated with Gokarna's coastal experience. Karnataka Tourism describes the destination as a combination of beaches, temples and adventure.</p>`,
      es: `<h2>Descubre Gokarna</h2>

<p>Gokarna ofrece una experiencia costera tranquila que combina patrimonio religioso con playas. El templo Mahabaleshwar aporta importancia espiritual, mientras que las playas atraen a viajeros interesados en paisajes, atardeceres y caminatas.</p>`,
      pt: `<h2>Conheça Gokarna</h2>

<p>Gokarna oferece uma experiência costeira tranquila que combina patrimônio religioso e praias. O Templo Mahabaleshwar dá importância espiritual ao destino, enquanto as praias atraem visitantes em busca de paisagens e pores do sol.</p>`
    },
    seoTitle: {
      en: "Gokarna Tourism – Om Beach, Mahabaleshwar Temple & Coastal Trails",
      es: "Turismo de Gokarna – Playa Om, Templo Mahabaleshwar y Senderos Costeros",
      pt: "Turismo de Gokarna – Praia Om, Templo Mahabaleshwar e Trilhas Costeiras"
    },
    seoDesc: {
      en: "Discover Gokarna beach destination in Karnataka. Visit Om Beach, Kudle Beach, Mahabaleshwar Temple, Paradise Beach and Half Moon Beach.",
      es: "Descubre el destino costero de Gokarna en Karnataka. Visita la playa Om, Kudle Beach, el templo Mahabaleshwar, Paradise Beach y Half Moon Beach.",
      pt: "Descubra o destino praiano de Gokarna em Karnataka. Visite a Praia Om, Kudle Beach, o Templo Mahabaleshwar, Paradise Beach e Half Moon Beach."
    },
    seoKeywords: {
      en: "Gokarna, Gokarna Tourism, Om Beach, Kudle Beach, Mahabaleshwar Temple, Paradise Beach, Half Moon Beach",
      es: "Gokarna, Turismo de Gokarna, Playa Om, Kudle Beach, Templo Mahabaleshwar, Paradise Beach",
      pt: "Gokarna, Turismo de Gokarna, Praia Om, Kudle Beach, Templo Mahabaleshwar, Paradise Beach"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Om Beach", es: "Playa Om", pt: "Praia Om" },
        description: {
          en: cleanPlainText("A scenic beach named for its Om-like shape, popular for sunsets, walks and coastal relaxation."),
          es: cleanPlainText("Una playa conocida por su forma similar al símbolo Om, popular por sus atardeceres y paseos."),
          pt: cleanPlainText("Uma praia conhecida por seu formato semelhante ao símbolo Om, popular pelos pores do sol e caminhadas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Kudle Beach", es: "Playa Kudle", pt: "Praia Kudle" },
        description: {
          en: cleanPlainText("A wide sandy beach surrounded by hills, known for peaceful walks and sunset views."),
          es: cleanPlainText("Una amplia playa de arena rodeada de colinas, conocida por sus paseos y vistas del atardecer."),
          pt: cleanPlainText("Uma ampla praia de areia cercada por colinas, conhecida por suas caminhadas e vistas do pôr do sol.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Mahabaleshwar Temple", es: "Templo Mahabaleshwar", pt: "Templo Mahabaleshwar" },
        description: {
          en: cleanPlainText("One of Gokarna's most important religious landmarks and a major pilgrimage attraction."),
          es: cleanPlainText("Uno de los monumentos religiosos más importantes de Gokarna y un destacado destino de peregrinación."),
          pt: cleanPlainText("Um dos mais importantes monumentos religiosos de Gokarna e um importante destino de peregrinação.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Paradise Beach", es: "Playa Paradise", pt: "Praia Paradise" },
        description: {
          en: cleanPlainText("A quieter coastal location known for its natural surroundings and scenic beach landscape."),
          es: cleanPlainText("Una zona costera más tranquila conocida por su entorno natural y paisaje de playa."),
          pt: cleanPlainText("Uma área costeira mais tranquila conhecida pelo ambiente natural e pela paisagem da praia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Half Moon Beach", es: "Playa Half Moon", pt: "Praia Half Moon" },
        description: {
          en: cleanPlainText("A smaller scenic beach that can be included in Gokarna's coastal exploration and beach walks."),
          es: cleanPlainText("Una playa más pequeña y pintoresca que forma parte de las rutas costeras de Gokarna."),
          pt: cleanPlainText("Uma praia menor e pitoresca que faz parte das experiências costeiras de Gokarna.")
        }
      }
    ]
  },

  // 7. UDUPI
  {
    id: "udupi",
    stateId: "karnataka",
    isPublished: true,
    isDeleted: false,
    displayOrder: 7,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    slug: { en: "udupi", es: "udupi", pt: "udupi" },
    name: { en: "Udupi", es: "Udupi", pt: "Udupi" },
    description: {
      en: "<p><strong>Udupi</strong> is a coastal Karnataka destination known for temples, traditional cuisine, beaches and cultural heritage. Its location between the Arabian Sea and the Western Ghats gives the region a combination of coastal and natural experiences.</p>",
      es: "<p><strong>Udupi</strong> es un destino costero de Karnataka conocido por sus templos, gastronomía tradicional, playas y patrimonio cultural.</p>",
      pt: "<p><strong>Udupi</strong> é um destino costeiro de Karnataka conhecido por seus templos, gastronomia tradicional, praias e patrimônio cultural.</p>"
    },
    overview: {
      en: `<h2>Discover Udupi</h2>

<p>Udupi is an important cultural and spiritual destination on Karnataka's coast. The town is closely associated with the famous Udupi Sri Krishna Temple and is also known for its distinctive vegetarian cuisine.</p>

<p>The wider Udupi region combines beaches, historic sites and Western Ghats landscapes. Attractions such as Malpe Beach, St. Mary's Island, Kaup Beach and nearby heritage locations make the destination suitable for both cultural and leisure travel.</p>`,
      es: `<h2>Descubre Udupi</h2>

<p>Udupi es un importante destino cultural y espiritual de la costa de Karnataka. La ciudad está estrechamente relacionada con el famoso templo Sri Krishna y también es conocida por su gastronomía vegetariana.</p>`,
      pt: `<h2>Conheça Udupi</h2>

<p>Udupi é um importante destino cultural e espiritual da costa de Karnataka. A cidade é conhecida pelo famoso Templo Sri Krishna e também por sua gastronomia vegetariana tradicional.</p>`
    },
    seoTitle: {
      en: "Udupi Tourism – Sri Krishna Temple, Malpe Beach & St Mary's Island",
      es: "Turismo de Udupi – Templo Sri Krishna, Playa Malpe e Isla St Mary",
      pt: "Turismo de Udupi – Templo Sri Krishna, Praia Malpe e Ilha St Mary"
    },
    seoDesc: {
      en: "Explore Udupi on Karnataka's coast. Visit Udupi Sri Krishna Temple, Malpe Beach, St. Mary's Island rock formations, Kaup Beach lighthouse and Maravanthe Beach.",
      es: "Explora Udupi en la costa de Karnataka. Visita el templo Sri Krishna, Malpe Beach, las rocas de St. Mary's Island, el faro de Kaup y Maravanthe Beach.",
      pt: "Explore Udupi no litoral de Karnataka. Visite o Templo Sri Krishna, Malpe Beach, as rochas da Ilha St. Mary, o farol de Kaup e Maravanthe Beach."
    },
    seoKeywords: {
      en: "Udupi, Udupi Tourism, Sri Krishna Temple, Malpe Beach, St Mary's Island, Kaup Beach, Maravanthe Beach, Udupi Cuisine",
      es: "Udupi, Turismo de Udupi, Templo Sri Krishna, Playa Malpe, Isla St Mary, Playa Kaup, Playa Maravanthe",
      pt: "Udupi, Turismo de Udupi, Templo Sri Krishna, Praia Malpe, Ilha St Mary, Praia Kaup, Praia Maravanthe"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Udupi Sri Krishna Temple", es: "Templo Sri Krishna de Udupi", pt: "Templo Sri Krishna de Udupi" },
        description: {
          en: cleanPlainText("A major spiritual landmark known for its religious traditions, distinctive worship practices and cultural importance."),
          es: cleanPlainText("Un importante templo espiritual conocido por sus tradiciones religiosas y relevancia cultural."),
          pt: cleanPlainText("Um importante templo espiritual conhecido por suas tradições religiosas e importância cultural.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Malpe Beach", es: "Playa Malpe", pt: "Praia Malpe" },
        description: {
          en: cleanPlainText("A popular coastal destination with sandy shores, Arabian Sea views and access to nearby island experiences."),
          es: cleanPlainText("Un popular destino costero con playas de arena, vistas del mar Arábigo y acceso a islas cercanas."),
          pt: cleanPlainText("Um popular destino costeiro com praias de areia, vistas do Mar Arábico e acesso a ilhas próximas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "St. Mary's Island", es: "Isla de Santa María", pt: "Ilha de Santa Maria" },
        description: {
          en: cleanPlainText("A scenic island destination known for its distinctive coastal rock formations and surrounding Arabian Sea."),
          es: cleanPlainText("Una isla pintoresca conocida por sus formaciones rocosas costeras y el mar Arábigo que la rodea."),
          pt: cleanPlainText("Uma ilha pitoresca conhecida por suas formações rochosas costeiras e pelo Mar Arábico ao redor.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Kaup Beach and Lighthouse", es: "Playa y Faro de Kaup", pt: "Praia e Farol de Kaup" },
        description: {
          en: cleanPlainText("A beautiful coastal area where visitors can enjoy the beach and views around the historic lighthouse."),
          es: cleanPlainText("Una hermosa zona costera donde los visitantes pueden disfrutar de la playa y del faro histórico."),
          pt: cleanPlainText("Uma bela área costeira onde os visitantes podem aproveitar a praia e as vistas do farol histórico.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Maravanthe Beach", es: "Playa Maravanthe", pt: "Praia Maravanthe" },
        description: {
          en: cleanPlainText("A spectacular coastal landscape where the Arabian Sea and the Souparnika River run close to the road, creating a distinctive scenic experience."),
          es: cleanPlainText("Un paisaje costero espectacular donde el mar Arábigo y el río Souparnika se encuentran cerca de la carretera."),
          pt: cleanPlainText("Uma paisagem costeira impressionante onde o Mar Arábico e o rio Souparnika ficam próximos à estrada.")
        }
      }
    ]
  }
];

kaCitiesData.forEach(city => {
  city.content = city.overview;
  city.fullDescription = city.overview;
});

let addedCount = 0;
let updatedCount = 0;

kaCitiesData.forEach(cityData => {
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
