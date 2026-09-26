import fs from 'fs';
import path from 'path';

const statesFilePath = path.resolve('src/data/fallback/states.json');
const citiesFilePath = path.resolve('src/data/fallback/cities.json');

const states = JSON.parse(fs.readFileSync(statesFilePath, 'utf8'));
const cities = JSON.parse(fs.readFileSync(citiesFilePath, 'utf8'));

// Utility to clean HTML tags for tourist places
function cleanPlainText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// Gujarat State Data
const gujaratStateData = {
  id: "gujarat",
  state: "Gujarat",
  name: "Gujarat",
  nombre: "Gujarat",
  nome: "Gujarat",
  country: "India",
  capital: "Gandhinagar",
  region: "Western India",
  destinationType: "Heritage, Spiritual Tourism, Wildlife, Beaches, Desert Tourism, Culture, Food Tourism, Adventure, Archaeology",
  
  description: {
    en: "<p><strong>Gujarat</strong> is a culturally rich state in western India known for ancient heritage, sacred temples, colourful festivals, wildlife, desert landscapes, beaches and distinctive Gujarati cuisine. From the historic streets of Ahmedabad and the royal architecture of Vadodara to the Great Rann of Kutch, Gir National Park, Dwarka and Somnath, Gujarat offers a diverse range of travel experiences.</p>",
    es: "<p><strong>Gujarat</strong> es un estado culturalmente rico del oeste de la India, conocido por su patrimonio antiguo, templos sagrados, festivales coloridos, vida silvestre, paisajes desérticos, playas y gastronomía Gujarati. Desde las calles históricas de Ahmedabad y la arquitectura real de Vadodara hasta el Gran Rann de Kutch, Gir, Dwarka y Somnath, Gujarat ofrece una gran variedad de experiencias turísticas.</p>",
    pt: "<p><strong>Gujarat</strong> é um estado culturalmente rico do oeste da Índia, conhecido por seu patrimônio antigo, templos sagrados, festivais coloridos, vida selvagem, paisagens desérticas, praias e culinária Gujarati. Das ruas históricas de Ahmedabad e da arquitetura real de Vadodara ao Great Rann of Kutch, Gir, Dwarka e Somnath, Gujarat oferece uma grande variedade de experiências de viagem.</p>"
  },
  
  longDescription: {
    en: `<h2>Discover Gujarat – Heritage, Spirituality, Wildlife and the Rann</h2>
<p>Gujarat is one of India's most diverse tourism destinations, combining ancient archaeological sites, historic cities, sacred pilgrimage centres, wildlife habitats, desert landscapes and a long coastline. The state offers experiences ranging from heritage walks and temple visits to wildlife safaris and desert excursions.</p>
<p><strong>Ahmedabad</strong> is a major cultural and heritage destination and is recognised as India's first UNESCO World Heritage City. Gujarat's heritage attractions also include the historic stepwell of Rani ki Vav, the Sun Temple at Modhera, Champaner-Pavagadh and ancient sites connected with the Indus Valley civilisation.</p>
<h3>Spiritual Gujarat</h3>
<p>Gujarat has several important pilgrimage destinations. <strong>Dwarka</strong> is associated with Lord Krishna, while <strong>Somnath</strong> is home to the famous Somnath Temple, traditionally counted among the twelve Jyotirlinga shrines of Shiva.</p>
<h3>Wildlife and Nature</h3>
<p><strong>Gir National Park</strong> is internationally known for the Asiatic lion. The state also has other protected landscapes including Velavadar Blackbuck National Park, Marine National Park and the Little Rann of Kutch, where visitors can experience wildlife and distinctive ecosystems.</p>
<h3>Rann of Kutch</h3>
<p>The <strong>Great Rann of Kutch</strong> is one of Gujarat's most distinctive landscapes. Its vast white salt desert, traditional crafts, cultural experiences and seasonal festivals make the Kutch region an important tourism destination. Gujarat Tourism also highlights the Rann of Kutch and Kutch's forts, palaces, museums and pilgrimage sites.</p>
<h3>Beaches and Coastal Experiences</h3>
<p>Gujarat's coastline provides opportunities to explore beaches, marine landscapes and coastal pilgrimage destinations. Shivrajpur Beach near Dwarka is among the state's highlighted coastal attractions.</p>
<h3>Festivals and Culture</h3>
<p>Gujarat is famous for cultural celebrations such as <strong>Navratri</strong> and the <strong>International Kite Festival</strong>. Traditional handicrafts, textiles, folk music, dance and Gujarati cuisine add to the state's cultural identity.</p>
<h3>Why Visit Gujarat?</h3>
<ul>
<li>UNESCO heritage and historic architecture</li>
<li>Ancient temples and pilgrimage sites</li>
<li>Great Rann of Kutch</li>
<li>Asiatic lion safari in Gir</li>
<li>Statue of Unity</li>
<li>Beautiful beaches and coastal landscapes</li>
<li>Traditional Gujarati cuisine</li>
<li>Colourful Navratri celebrations</li>
<li>Handicrafts and textile traditions</li>
<li>Indus Valley archaeological sites</li>
</ul>`,
    es: `<h2>Descubre Gujarat – Patrimonio, Espiritualidad, Vida Silvestre y el Rann</h2>
<p>Gujarat es uno de los destinos turísticos más diversos de la India, combinando antiguos sitios arqueológicos, ciudades históricas, sagrados centros de peregrinación, hábitats de vida silvestre, paisajes desérticos y una larga costa. El estado ofrece desde recorridos patrimoniales y visitas a templos hasta safaris de vida silvestre y excursiones al desierto.</p>
<p><strong>Ahmedabad</strong> es un importante destino cultural y patrimonial, reconocido como la primera Ciudad Patrimonio Mundial de la UNESCO de la India. El patrimonio de Gujarat también incluye el histórico pozo escalonado de Rani ki Vav, el Templo del Sol en Modhera, Champaner-Pavagadh y antiguos sitios vinculados a la civilización del Valle del Indo.</p>
<h3>Gujarat Espiritual</h3>
<p>Gujarat cuenta con varios destinos de peregrinación de gran importancia. <strong>Dwarka</strong> está ligada a Lord Krishna, mientras que <strong>Somnath</strong> alberga el famoso Templo de Somnath, tradicionalmente considerado entre los doce santuarios Jyotirlinga de Shiva.</p>
<h3>Vida Silvestre y Naturaleza</h3>
<p>El <strong>Parque Nacional Gir</strong> es conocido internacionalmente por el león asiático. El estado también cuenta con otras áreas protegidas como el Parque Nacional Velavadar Blackbuck, el Parque Nacional Marino y el Pequeño Rann de Kutch.</p>
<h3>Rann de Kutch</h3>
<p>El <strong>Gran Rann de Kutch</strong> es uno de los paisajes más impresionantes de Gujarat. Su vasto desierto de sal blanca, artesanías tradicionales, festivales estacionales y experiencias culturales hacen de Kutch un destino imprescindible.</p>
<h3>Playas y Experiencias Costeras</h3>
<p>La costa de Gujarat ofrece oportunidades para explorar playas, paisajes marinos y templos costeros. La playa de Shivrajpur cerca de Dwarka es uno de sus principales atractivos costeros.</p>
<h3>Festivales y Cultura</h3>
<p>Gujarat es famoso por sus festividades como <strong>Navratri</strong> y el <strong>Festival Internacional de Cometas</strong>. Las artesanías tradicionales, los textiles, la música y danza folclórica y la gastronomía gujarati enriquecen su identidad cultural.</p>
<h3>¿Por qué visitar Gujarat?</h3>
<ul>
<li>Patrimonio de la UNESCO y arquitectura histórica</li>
<li>Templos antiguos y lugares de peregrinación</li>
<li>El Gran Rann de Kutch</li>
<li>Safari de leones asiáticos en Gir</li>
<li>Estatua de la Unidad</li>
<li>Hermosas playas y paisajes costeros</li>
<li>Gastronomía tradicional gujarati</li>
<li>Coloridas celebraciones de Navratri</li>
<li>Tradiciones textiles y artesanales</li>
<li>Yacimientos arqueológicos del Valle del Indo</li>
</ul>`,
    pt: `<h2>Conheça Gujarat – Patrimônio, Espiritualidade, Vida Selvagem e o Rann</h2>
<p>Gujarat é um dos destinos turísticos mais diversos da Índia, combinando antigos sítios arqueológicos, cidades históricas, sagrados centros de peregrinação, habitats de vida selvagem, paisagens desérticas e um extenso litoral.</p>
<p><strong>Ahmedabad</strong> é um grande destino cultural e histórico, reconhecido como a primeira Cidade Patrimônio Mundial da UNESCO da Índia. As atrações patrimoniais de Gujarat também incluem o histórico poço escalonado Rani ki Vav, o Templo do Sol em Modhera, Champaner-Pavagadh e sítios antigos da civilização do Vale do Indo.</p>
<h3>Gujarat Espiritual</h3>
<p>Gujarat possui vários destinos de peregrinação importantes. <strong>Dwarka</strong> está associada ao Senhor Krishna, enquanto <strong>Somnath</strong> abriga o famoso Templo de Somnath, tradicionalmente contado entre os doze santuários Jyotirlinga de Shiva.</p>
<h3>Vida Selvagem e Natureza</h3>
<p>O <strong>Parque Nacional Gir</strong> é internacionalmente conhecido pelo leão asiático. O estado também possui outras áreas protegidas como o Parque Nacional Velavadar Blackbuck, o Parque Nacional Marinho e o Pequeno Rann de Kutch.</p>
<h3>Rann de Kutch</h3>
<p>O <strong>Great Rann of Kutch</strong> é uma das paisagens mais marcantes de Gujarat. Seu vasto deserto de sal branco, artesanato tradicional e festivais sazonais tornam a região de Kutch um destino essencial.</p>
<h3>Praias e Experiências Costeiras</h3>
<p>O litoral de Gujarat oferece oportunidades para explorar praias, paisagens marinhas e locais sagrados à beira-mar. A praia de Shivrajpur, perto de Dwarka, é uma das principais atrações costeiras do estado.</p>
<h3>Festivais e Cultura</h3>
<p>Gujarat é famoso por celebrações culturais como o <strong>Navratri</strong> e o <strong>Festival Internacional de Pipas</strong>. O artesanato tradicional, tecidos, música e dança folclórica e a culinária gujarati complementam sua identidade cultural.</p>
<h3>Por que visitar Gujarat?</h3>
<ul>
<li>Patrimônio da UNESCO e arquitetura histórica</li>
<li>Templos antigos e locais de peregrinação</li>
<li>Great Rann of Kutch</li>
<li>Safári de leões asiáticos em Gir</li>
<li>Estátua da Unidade</li>
<li>Belas praias e paisagens costeiras</li>
<li>Culinária tradicional gujarati</li>
<li>Coloridas celebrações do Navratri</li>
<li>Tradições artesanais e têxteis</li>
<li>Sítios arqueológicos do Vale do Indo</li>
</ul>`
  },
  
  seo: {
    en: {
      metaTitle: "Gujarat Tourism – Explore Heritage, Rann, Temples & Wildlife",
      metaDescription: "Explore Gujarat tourism with Ahmedabad, Vadodara, Kutch, Dwarka, Somnath, Gir and Gandhinagar. Discover heritage, temples, wildlife, desert landscapes and culture.",
      keywords: ["Gujarat tourism", "Gujarat travel", "places to visit in Gujarat", "Gujarat tourist places", "Gujarat tour packages", "Gujarat holiday packages", "Gujarat heritage tourism"],
      tags: ["Gujarat Tourism", "Gujarat Travel", "Heritage", "Culture", "Wildlife", "Rann of Kutch", "Temples", "Beaches", "Food", "Adventure"]
    },
    es: {
      metaTitle: "Turismo en Gujarat – Patrimonio, Rann, Templos y Vida Silvestre",
      metaDescription: "Descubre Gujarat a través de Ahmedabad, Vadodara, Kutch, Dwarka, Somnath, Gir y Gandhinagar. Explora patrimonio, templos, naturaleza, desierto y cultura.",
      keywords: ["turismo en Gujarat", "viajar a Gujarat", "lugares para visitar en Gujarat", "turismo cultural", "patrimonio de Gujarat"],
      tags: ["Gujarat", "Patrimonio", "Cultura", "Vida Silvestre", "Rann de Kutch", "Templos", "Playas", "Gastronomía", "Aventura"]
    },
    pt: {
      metaTitle: "Turismo em Gujarat – Patrimônio, Rann, Templos e Vida Selvagem",
      metaDescription: "Conheça Gujarat através de Ahmedabad, Vadodara, Kutch, Dwarka, Somnath, Gir e Gandhinagar. Explore patrimônio, templos, natureza, deserto e cultura.",
      keywords: ["turismo em Gujarat", "viajar para Gujarat", "lugares para visitar em Gujarat", "turismo cultural", "patrimônio de Gujarat"],
      tags: ["Gujarat", "Patrimônio", "Cultura", "Vida Selvagem", "Rann de Kutch", "Templos", "Praias", "Gastronomia", "Aventura"]
    }
  },
  
  experiences: {
    en: [
      "Explore Ahmedabad's UNESCO heritage",
      "Visit Sabarmati Ashram",
      "Experience the white landscapes of the Great Rann of Kutch",
      "Explore traditional Kutch handicrafts",
      "Visit the Dwarkadhish Temple",
      "Explore Somnath Temple and Prabhas Patan",
      "Experience a wildlife safari in Gir",
      "Explore the historic city of Junagadh",
      "Visit the royal heritage of Vadodara",
      "Explore Gujarat's stepwells and ancient architecture",
      "Experience Navratri and Gujarati folk culture",
      "Taste traditional Gujarati cuisine"
    ],
    es: [
      "Explorar el patrimonio de Ahmedabad",
      "Visitar Sabarmati Ashram",
      "Descubrir los paisajes blancos del Gran Rann de Kutch",
      "Conocer las artesanías tradicionales de Kutch",
      "Visitar el templo Dwarkadhish",
      "Explorar el templo de Somnath y Prabhas Patan",
      "Realizar un safari en Gir",
      "Explorar la histórica ciudad de Junagadh",
      "Conocer el patrimonio real de Vadodara",
      "Descubrir los pozos escalonados y la arquitectura antigua",
      "Vivir el Navratri y la cultura popular Gujarati",
      "Probar la gastronomía tradicional Gujarati"
    ],
    pt: [
      "Explorar o patrimônio de Ahmedabad",
      "Visitar o Sabarmati Ashram",
      "Conhecer as paisagens brancas do Great Rann of Kutch",
      "Descobrir o artesanato tradicional de Kutch",
      "Visitar o Templo Dwarkadhish",
      "Explorar o Templo de Somnath e Prabhas Patan",
      "Fazer um safári em Gir",
      "Explorar a histórica cidade de Junagadh",
      "Conhecer o patrimônio real de Vadodara",
      "Descobrir os poços escalonados e a arquitetura antiga",
      "Vivenciar o Navratri e a cultura popular Gujarati",
      "Experimentar a culinária tradicional Gujarati"
    ]
  },
  
  famousFood: {
    en: {
      title: "Traditional Gujarati Food You Must Try",
      items: [
        { name: "Gujarati Thali", description: "A complete traditional meal featuring a variety of vegetables, dal, breads, rice, sweets and accompaniments." },
        { name: "Dhokla", description: "A steamed fermented snack made primarily from gram flour or rice-based batter." },
        { name: "Khandvi", description: "Thin, soft rolls made from gram flour and yogurt, seasoned with spices." },
        { name: "Fafda-Jalebi", description: "A popular combination of crispy savoury fafda and sweet jalebi." },
        { name: "Thepla", description: "A spiced flatbread commonly prepared with wheat flour and fenugreek leaves." },
        { name: "Undhiyu", description: "A traditional mixed vegetable preparation particularly associated with Gujarat." },
        { name: "Basundi", description: "A rich milk-based dessert flavoured with nuts and spices." }
      ]
    },
    es: {
      title: "Comida Tradicional de Gujarat",
      items: [
        { name: "Gujarati Thali", description: "Una comida tradicional completa con verduras, dal, panes, arroz, dulces y acompañamientos." },
        { name: "Dhokla", description: "Un aperitivo al vapor elaborado principalmente con harina de garbanzo." },
        { name: "Khandvi", description: "Rollitos suaves y finos preparados con harina de garbanzo y yogur." },
        { name: "Fafda-Jalebi", description: "Combinación popular de fafda crujiente y jalebi dulce." },
        { name: "Thepla", description: "Pan plano especiado, frecuentemente preparado con hojas de fenogreco." },
        { name: "Undhiyu", description: "Preparación tradicional de verduras asociada especialmente con Gujarat." },
        { name: "Basundi", description: "Postre cremoso a base de leche y frutos secos." }
      ]
    },
    pt: {
      title: "Comidas Tradicionais de Gujarat",
      items: [
        { name: "Gujarati Thali", description: "Refeição tradicional completa com vegetais, dal, pães, arroz, doces e acompanhamentos." },
        { name: "Dhokla", description: "Petisco cozido no vapor preparado principalmente com farinha de grão-de-bico." },
        { name: "Khandvi", description: "Rolos finos e macios preparados com farinha de grão-de-bico e iogurte." },
        { name: "Fafda-Jalebi", description: "Combinação popular de fafda crocante e jalebi doce." },
        { name: "Thepla", description: "Pão achatado temperado, frequentemente preparado com folhas de feno-grego." },
        { name: "Undhiyu", description: "Preparação tradicional de vegetais especialmente associada a Gujarat." },
        { name: "Basundi", description: "Sobremesa cremosa à base de leite e frutos secos." }
      ]
    }
  }
};

// Update State in states array
const stateIdx = states.findIndex(s => s.id === 'gujarat');
if (stateIdx >= 0) {
  states[stateIdx] = { ...states[stateIdx], ...gujaratStateData };
} else {
  states.push(gujaratStateData);
}

// 7 Cities for Gujarat
const gujaratCities = [
  {
    id: "ahmedabad",
    stateId: "gujarat",
    name: "Ahmedabad",
    nombre: "Ahmedabad",
    nome: "Ahmedabad",
    state: "Gujarat",
    url: "/destinations/india/gujarat/ahmedabad",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Ahmedabad</strong> is Gujarat's largest city and an important centre of heritage, architecture, culture, food and commerce. Its historic old city, traditional pols, monuments, museums and Sabarmati riverfront offer a rich urban travel experience.</p>",
      es: "<p><strong>Ahmedabad</strong> es una de las principales ciudades de Gujarat y un importante centro de patrimonio, arquitectura, cultura, gastronomía y comercio. Su casco histórico, sus antiguos barrios, monumentos y museos ofrecen una experiencia cultural completa.</p>",
      pt: "<p><strong>Ahmedabad</strong> é uma das principais cidades de Gujarat e um importante centro de patrimônio, arquitetura, cultura, gastronomia e comércio. Sua cidade histórica, bairros tradicionais, monumentos e museus oferecem uma rica experiência cultural.</p>"
    },
    content: {
      en: "<p><strong>Ahmedabad</strong> is Gujarat's largest city and an important centre of heritage, architecture, culture, food and commerce. Its historic old city, traditional pols, monuments, museums and Sabarmati riverfront offer a rich urban travel experience.</p>",
      es: "<p><strong>Ahmedabad</strong> es una de las principales ciudades de Gujarat y un importante centro de patrimonio, arquitectura, cultura, gastronomía y comercio. Su casco histórico, sus antiguos barrios, monumentos y museos ofrecen una experiencia cultural completa.</p>",
      pt: "<p><strong>Ahmedabad</strong> é uma das principais cidades de Gujarat e um importante centro de patrimônio, arquitetura, cultura, gastronomia e comércio. Sua cidade histórica, bairros tradicionais, monumentos e museus oferecem uma rica experiência cultural.</p>"
    },
    fullDescription: {
      en: `<h2>Discover Ahmedabad</h2>
<p>Ahmedabad combines centuries of history with a modern urban identity. The historic city is known for traditional pol houses, intricately carved wooden architecture, mosques, stepwells and historic neighbourhoods.</p>
<p>It became India's first UNESCO World Heritage City, reflecting the importance of its historic urban fabric and architectural heritage.</p>
<p>The city also has a strong connection with Mahatma Gandhi through the Sabarmati Ashram and offers visitors a wide variety of Gujarati culinary experiences.</p>`,
      es: `<h2>Descubre Ahmedabad</h2>
<p>Ahmedabad combina siglos de historia con una identidad urbana moderna. La ciudad histórica es conocida por sus tradicionales pols, arquitectura de madera tallada, mezquitas, pozos escalonados y barrios antiguos.</p>
<p>Ahmedabad fue reconocida como la primera Ciudad Patrimonio Mundial de la UNESCO de la India, destacando la importancia de su arquitectura y tejido urbano histórico.</p>`,
      pt: `<h2>Conheça Ahmedabad</h2>
<p>Ahmedabad combina séculos de história com uma identidade urbana moderna. A cidade histórica é conhecida por seus pols tradicionais, arquitetura de madeira esculpida, mesquitas, poços escalonados e bairros antigos.</p>
<p>Ahmedabad foi reconhecida como a primeira Cidade Patrimônio Mundial da UNESCO da Índia, destacando sua importância histórica e arquitetônica.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Sabarmati Ashram", es: "Sabarmati Ashram", pt: "Sabarmati Ashram" },
        address: { en: "Gandhi Smarak Sangrahalaya, Ashram Rd, Ahmedabad, Gujarat 380027, India", es: "Ashram Rd, Ahmedabad, Gujarat 380027, India", pt: "Ashram Rd, Ahmedabad, Gujarat 380027, Índia" },
        description: {
          en: cleanPlainText("Sabarmati Ashram is closely associated with Mahatma Gandhi and India's freedom movement. The site preserves buildings, exhibits and historical material connected with Gandhi's life and work."),
          es: cleanPlainText("Sabarmati Ashram está estrechamente relacionado con Mahatma Gandhi y el movimiento de independencia de la India. Conserva edificios, exposiciones y material histórico."),
          pt: cleanPlainText("Sabarmati Ashram está profundamente ligado a Mahatma Gandhi e ao movimento de independência da Índia. O local preserva edifícios, exposições e materiais históricos.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Adalaj Stepwell", es: "Adalaj Stepwell", pt: "Adalaj Stepwell" },
        address: { en: "Adalaj, Gandhinagar, Gujarat 382421, India", es: "Adalaj, Gandhinagar, Gujarat 382421, India", pt: "Adalaj, Gandhinagar, Gujarat 382421, Índia" },
        description: {
          en: cleanPlainText("Adalaj Stepwell is an intricately carved historic stepwell known for its beautiful stone architecture and detailed pillars and galleries."),
          es: cleanPlainText("Adalaj Stepwell es un pozo escalonado histórico conocido por su arquitectura de piedra tallada, pilares y galerías."),
          pt: cleanPlainText("Adalaj Stepwell é um histórico poço escalonado conhecido por sua arquitetura em pedra, pilares e galerias ricamente esculpidos.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Sidi Saiyyed Mosque", es: "Mezquita Sidi Saiyyed", pt: "Mesquita Sidi Saiyyed" },
        address: { en: "Bhadra, Ahmedabad, Gujarat 380001, India", es: "Bhadra, Ahmedabad, Gujarat 380001, India", pt: "Bhadra, Ahmedabad, Gujarat 380001, Índia" },
        description: {
          en: cleanPlainText("The Sidi Saiyyed Mosque is famous for its delicate stone latticework, especially the celebrated tree-of-life design."),
          es: cleanPlainText("La mezquita Sidi Saiyyed es famosa por sus delicadas celosías de piedra, especialmente por su conocido diseño del árbol de la vida."),
          pt: cleanPlainText("A Mesquita Sidi Saiyyed é famosa por seus delicados trabalhos de treliça em pedra, especialmente pelo conhecido desenho da árvore da vida.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kankaria Lake", es: "Kankaria Lake", pt: "Kankaria Lake" },
        address: { en: "Maninagar, Ahmedabad, Gujarat 380028, India", es: "Maninagar, Ahmedabad, Gujarat 380028, India", pt: "Maninagar, Ahmedabad, Gujarat 380028, Índia" },
        description: {
          en: cleanPlainText("Kankaria Lake is a historic recreational destination surrounded by gardens, attractions and leisure facilities."),
          es: cleanPlainText("Kankaria Lake es un histórico destino recreativo rodeado de jardines, atracciones y espacios de ocio."),
          pt: cleanPlainText("Kankaria Lake é um histórico destino recreativo cercado por jardins, atrações e espaços de lazer.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Sabarmati Riverfront", es: "Sabarmati Riverfront", pt: "Sabarmati Riverfront" },
        address: { en: "Sabarmati Riverfront Walkway, Ahmedabad, Gujarat 380009, India", es: "Sabarmati Riverfront Walkway, Ahmedabad, Gujarat 380009, India", pt: "Sabarmati Riverfront Walkway, Ahmedabad, Gujarat 380009, Índia" },
        description: {
          en: cleanPlainText("The Sabarmati Riverfront offers landscaped public spaces, walking areas and views along the Sabarmati River."),
          es: cleanPlainText("El Sabarmati Riverfront ofrece espacios públicos ajardinados, zonas para caminar y vistas del río Sabarmati."),
          pt: cleanPlainText("O Sabarmati Riverfront oferece espaços públicos ajardinados, áreas para caminhada e vistas do rio Sabarmati.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Ahmedabad Tourism – UNESCO World Heritage City in Gujarat",
        metaDescription: "Discover Ahmedabad tourism: Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque, Kankaria Lake and Sabarmati Riverfront.",
        keywords: ["Ahmedabad tourism", "places to visit in Ahmedabad", "Ahmedabad heritage tour", "Sabarmati Ashram", "Adalaj Stepwell"],
        tags: ["Ahmedabad", "Gujarat", "UNESCO", "Heritage", "Sabarmati", "Culture"]
      },
      es: {
        metaTitle: "Turismo en Ahmedabad – Ciudad Patrimonio de la UNESCO",
        metaDescription: "Descubre Ahmedabad: Sabarmati Ashram, Pozo Adalaj, Mezquita Sidi Saiyyed, Lago Kankaria y Paseo del Río Sabarmati.",
        keywords: ["turismo en Ahmedabad", "lugares para visitar en Ahmedabad", "Sabarmati Ashram", "patrimonio de Gujarat"],
        tags: ["Ahmedabad", "Gujarat", "Patrimonio", "UNESCO", "Cultura"]
      },
      pt: {
        metaTitle: "Turismo em Ahmedabad – Cidade Patrimônio Mundial da UNESCO",
        metaDescription: "Conheça Ahmedabad: Sabarmati Ashram, Adalaj Stepwell, Mesquita Sidi Saiyyed, Lago Kankaria e Sabarmati Riverfront.",
        keywords: ["turismo em Ahmedabad", "lugares para visitar em Ahmedabad", "Sabarmati Ashram", "patrimônio de Gujarat"],
        tags: ["Ahmedabad", "Gujarat", "Patrimônio", "UNESCO", "Cultura"]
      }
    }
  },

  {
    id: "vadodara",
    stateId: "gujarat",
    name: "Vadodara",
    nombre: "Vadodara",
    nome: "Vadodara",
    state: "Gujarat",
    url: "/destinations/india/gujarat/vadodara",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Vadodara</strong> is a culturally rich city known for royal heritage, grand palaces, museums, art, architecture and its connection with the Gaekwad dynasty.</p>",
      es: "<p><strong>Vadodara</strong> es una ciudad culturalmente rica conocida por su patrimonio real, grandes palacios, museos, arte y arquitectura.</p>",
      pt: "<p><strong>Vadodara</strong> é uma cidade culturalmente rica conhecida por seu patrimônio real, grandes palácios, museus, arte e arquitetura.</p>"
    },
    content: {
      en: "<p><strong>Vadodara</strong> is a culturally rich city known for royal heritage, grand palaces, museums, art, architecture and its connection with the Gaekwad dynasty.</p>",
      es: "<p><strong>Vadodara</strong> es una ciudad culturalmente rica conocida por su patrimonio real, grandes palacios, museos, arte y arquitectura.</p>",
      pt: "<p><strong>Vadodara</strong> é uma cidade culturalmente rica conhecida por seu patrimônio real, grandes palácios, museus, arte e arquitetura.</p>"
    },
    fullDescription: {
      en: `<h2>Explore Vadodara</h2>
<p>Vadodara, historically associated with the Gaekwad rulers, is one of Gujarat's important cultural and heritage destinations. Its palaces, museums, gardens and public buildings reflect the city's royal history.</p>
<p>The city is also an important centre for art and education and provides easy access to heritage destinations such as Champaner-Pavagadh.</p>`,
      es: `<h2>Descubre Vadodara</h2>
<p>Vadodara, históricamente vinculada a los gobernantes Gaekwad, es uno de los principales destinos culturales y patrimoniales de Gujarat. Sus palacios, museos, jardines y edificios históricos reflejan su pasado real.</p>`,
      pt: `<h2>Conheça Vadodara</h2>
<p>Vadodara, historicamente ligada aos governantes Gaekwad, é um dos principais destinos culturais e históricos de Gujarat. Seus palácios, museus, jardins e edifícios históricos refletem seu passado real.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Laxmi Vilas Palace", es: "Palacio Laxmi Vilas", pt: "Palácio Laxmi Vilas" },
        address: { en: "J N Marg, Moti Baug, Vadodara, Gujarat 390001, India", es: "J N Marg, Moti Baug, Vadodara, Gujarat 390001, India", pt: "J N Marg, Moti Baug, Vadodara, Gujarat 390001, Índia" },
        description: {
          en: cleanPlainText("A magnificent royal palace associated with the Gaekwad dynasty and one of Vadodara's most famous architectural landmarks."),
          es: cleanPlainText("Un magnífico palacio real asociado con la dinastía Gaekwad y uno de los monumentos arquitectónicos más famosos de Vadodara."),
          pt: cleanPlainText("Um magnífico palácio real associado à dinastia Gaekwad e um dos monumentos arquitetônicos mais famosos de Vadodara.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Sayaji Garden", es: "Jardín Sayaji", pt: "Jardim Sayaji" },
        address: { en: "Kala Ghoda, Sayajiganj, Vadodara, Gujarat 390005, India", es: "Sayajiganj, Vadodara, Gujarat 390005, India", pt: "Sayajiganj, Vadodara, Gujarat 390005, Índia" },
        description: {
          en: cleanPlainText("A large historic garden offering green spaces, museums and recreational attractions."),
          es: cleanPlainText("Un gran jardín histórico con zonas verdes, museos y atracciones recreativas."),
          pt: cleanPlainText("Um grande jardim histórico com áreas verdes, museus e atrações recreativas.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Baroda Museum & Picture Gallery", es: "Museo y Galería de Arte de Baroda", pt: "Museu e Galeria de Arte de Baroda" },
        address: { en: "Sayaji Garden, Dak Bungalow, Sayajiganj, Vadodara, Gujarat 390018, India", es: "Sayaji Garden, Vadodara, Gujarat 390018, India", pt: "Sayaji Garden, Vadodara, Gujarat 390018, Índia" },
        description: {
          en: cleanPlainText("A major museum featuring art, historical objects and cultural collections."),
          es: cleanPlainText("Un importante museo con arte, objetos históricos y colecciones culturales."),
          pt: cleanPlainText("Um importante museu com obras de arte, objetos históricos e coleções culturais.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kirti Mandir", es: "Kirti Mandir", pt: "Kirti Mandir" },
        address: { en: "Kirti Mandir, Kashi Vishwanath Rd, Vadodara, Gujarat 390001, India", es: "Vadodara, Gujarat 390001, India", pt: "Vadodara, Gujarat 390001, Índia" },
        description: {
          en: cleanPlainText("A historic memorial structure associated with the Gaekwad royal family and known for its architecture and artistic details."),
          es: cleanPlainText("Un monumento histórico relacionado con la familia real Gaekwad y conocido por su arquitectura y detalles artísticos."),
          pt: cleanPlainText("Um monumento histórico associado à família real Gaekwad, conhecido por sua arquitetura e detalhes artísticos.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "EME Temple", es: "Templo EME", pt: "Templo EME" },
        address: { en: "Fatehgunj, Vadodara, Gujarat 390002, India", es: "Fatehgunj, Vadodara, Gujarat 390002, India", pt: "Fatehgunj, Vadodara, Gujarat 390002, Índia" },
        description: {
          en: cleanPlainText("EME Temple is a distinctive modern temple known for its unusual architectural design and peaceful surroundings."),
          es: cleanPlainText("EME Temple es un templo moderno conocido por su arquitectura particular y su ambiente tranquilo."),
          pt: cleanPlainText("O EME Temple é um templo moderno conhecido por sua arquitetura diferenciada e ambiente tranquilo.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Vadodara Tourism – Royal Palaces & Heritage in Gujarat",
        metaDescription: "Explore Vadodara tourism: Laxmi Vilas Palace, Sayaji Garden, Baroda Museum, Kirti Mandir and EME Temple.",
        keywords: ["Vadodara tourism", "places to visit in Vadodara", "Laxmi Vilas Palace", "Vadodara royal heritage"],
        tags: ["Vadodara", "Gujarat", "Royal Heritage", "Palaces", "Culture"]
      },
      es: {
        metaTitle: "Turismo en Vadodara – Palacios Reales y Patrimonio",
        metaDescription: "Descubre Vadodara: Palacio Laxmi Vilas, Jardín Sayaji, Museo de Baroda, Kirti Mandir y Templo EME.",
        keywords: ["turismo en Vadodara", "lugares para visitar en Vadodara", "Palacio Laxmi Vilas", "patrimonio de Vadodara"],
        tags: ["Vadodara", "Gujarat", "Palacios", "Patrimonio", "Cultura"]
      },
      pt: {
        metaTitle: "Turismo em Vadodara – Palácios Reais e Patrimônio",
        metaDescription: "Conheça Vadodara: Palácio Laxmi Vilas, Jardim Sayaji, Museu de Baroda, Kirti Mandir e Templo EME.",
        keywords: ["turismo em Vadodara", "lugares para visitar em Vadodara", "Palácio Laxmi Vilas", "patrimônio de Vadodara"],
        tags: ["Vadodara", "Gujarat", "Palácios", "Patrimônio", "Cultura"]
      }
    }
  },

  {
    id: "bhuj-kutch",
    stateId: "gujarat",
    name: "Bhuj / Kutch",
    nombre: "Bhuj / Kutch",
    nome: "Bhuj / Kutch",
    state: "Gujarat",
    url: "/destinations/india/gujarat/kutch-bhuj",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Bhuj</strong> is the cultural gateway to the Kutch region, known for traditional handicrafts, historic palaces, museums, desert landscapes and access to the Great Rann of Kutch.</p>",
      es: "<p><strong>Bhuj</strong> es la puerta cultural de la región de Kutch, conocida por sus artesanías tradicionales, palacios históricos, museos, paisajes desérticos y acceso al Gran Rann de Kutch.</p>",
      pt: "<p><strong>Bhuj</strong> é a porta cultural para a região de Kutch, conhecida por seu artesanato tradicional, palácios históricos, museus, paisagens desérticas e acesso ao Great Rann of Kutch.</p>"
    },
    content: {
      en: "<p><strong>Bhuj</strong> is the cultural gateway to the Kutch region, known for traditional handicrafts, historic palaces, museums, desert landscapes and access to the Great Rann of Kutch.</p>",
      es: "<p><strong>Bhuj</strong> es la puerta cultural de la región de Kutch, conocida por sus artesanías tradicionales, palacios históricos, museos, paisajes desérticos y acceso al Gran Rann de Kutch.</p>",
      pt: "<p><strong>Bhuj</strong> é a porta cultural para a região de Kutch, conhecida por seu artesanato tradicional, palácios históricos, museus, paisagens desérticas e acesso ao Great Rann of Kutch.</p>"
    },
    fullDescription: {
      en: `<h2>Discover Bhuj and Kutch</h2>
<p>Bhuj serves as an important base for exploring Kutch, one of Gujarat's most distinctive cultural and geographical regions. The area is known for embroidery, textiles, handicrafts, traditional villages, historic buildings and the dramatic salt landscape of the Rann.</p>
<p>Gujarat Tourism highlights Kutch for its pilgrimage centres, forts, palaces, museums and distinctive cultural experiences.</p>
<h3>Rann of Kutch Experience</h3>
<p>The Great Rann provides a unique landscape of white salt flats, particularly striking under changing light. Travellers can also explore local crafts, village traditions and regional cuisine.</p>`,
      es: `<h2>Descubre Bhuj y Kutch</h2>
<p>Bhuj es una importante base para explorar Kutch, una de las regiones geográficas y culturales más singulares de Gujarat. La zona es conocida por sus bordados, textiles, artesanías, pueblos tradicionales, edificios históricos y el impresionante paisaje salino del Rann.</p>`,
      pt: `<h2>Conheça Bhuj e Kutch</h2>
<p>Bhuj é uma importante base para explorar Kutch, uma das regiões geográficas e culturais mais características de Gujarat. A região é conhecida por bordados, tecidos, artesanato, aldeias tradicionais, edifícios históricos e pela impressionante paisagem de sal do Rann.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Great Rann of Kutch", es: "Gran Rann de Kutch", pt: "Great Rann of Kutch" },
        address: { en: "Rann of Kutch, Dhordo, Gujarat 370510, India", es: "Dhordo, Kutch, Gujarat 370510, India", pt: "Dhordo, Kutch, Gujarat 370510, Índia" },
        description: {
          en: cleanPlainText("The Great Rann of Kutch is a vast salt-marsh landscape famous for its white desert scenery and cultural experiences."),
          es: cleanPlainText("El Gran Rann de Kutch es un enorme paisaje de sal conocido por su desierto blanco y experiencias culturales."),
          pt: cleanPlainText("O Great Rann of Kutch é uma enorme paisagem de sal conhecida por seu deserto branco e experiências culturais.")
        },
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Aina Mahal", es: "Aina Mahal", pt: "Aina Mahal" },
        address: { en: "Mahadev Gate, Bhuj, Gujarat 370001, India", es: "Mahadev Gate, Bhuj, Gujarat 370001, India", pt: "Mahadev Gate, Bhuj, Gujarat 370001, Índia" },
        description: {
          en: cleanPlainText("Aina Mahal is a historic palace in Bhuj known for its decorative interiors and royal heritage."),
          es: cleanPlainText("Aina Mahal es un palacio histórico de Bhuj conocido por sus interiores decorativos y patrimonio real."),
          pt: cleanPlainText("Aina Mahal é um palácio histórico de Bhuj conhecido por seus interiores decorativos e patrimônio real.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Prag Mahal", es: "Prag Mahal", pt: "Prag Mahal" },
        address: { en: "Darbar Gadh, Bhuj, Gujarat 370001, India", es: "Darbar Gadh, Bhuj, Gujarat 370001, India", pt: "Darbar Gadh, Bhuj, Gujarat 370001, Índia" },
        description: {
          en: cleanPlainText("Prag Mahal is an impressive historic palace featuring European-influenced architecture alongside local design elements."),
          es: cleanPlainText("Prag Mahal es un impresionante palacio histórico que combina arquitectura de influencia europea con elementos locales."),
          pt: cleanPlainText("Prag Mahal é um impressionante palácio histórico que combina arquitetura de influência europeia com elementos locais.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Bhuj Chattardi", es: "Bhuj Chattardi", pt: "Bhuj Chattardi" },
        address: { en: "Hamirsar Lake Bank, Bhuj, Gujarat 370001, India", es: "Bhuj, Gujarat 370001, India", pt: "Bhuj, Gujarat 370001, Índia" },
        description: {
          en: cleanPlainText("Bhuj Chattardi is a historic collection of intricately carved stone cenotaphs associated with the region's royal heritage."),
          es: cleanPlainText("Bhuj Chattardi es un conjunto histórico de cenotafios de piedra tallada relacionados con el patrimonio real de la región."),
          pt: cleanPlainText("Bhuj Chattardi é um conjunto histórico de cenotáfios de pedra esculpida ligado ao patrimônio real da região.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Smritivan Earthquake Museum", es: "Museo Conmemorativo Smritivan", pt: "Museu Memorial Smritivan" },
        address: { en: "Bhujiyo Dungar, Bhuj, Gujarat 370001, India", es: "Bhuj, Gujarat 370001, India", pt: "Bhuj, Gujarat 370001, Índia" },
        description: {
          en: cleanPlainText("Smritivan is a memorial and museum complex created to remember the victims and document the 2001 Kutch earthquake."),
          es: cleanPlainText("Smritivan es un complejo memorial y museo creado para recordar a las víctimas y documentar el terremoto de Kutch de 2001."),
          pt: cleanPlainText("Smritivan é um complexo memorial e museu criado para homenagear as vítimas e documentar o terremoto de Kutch de 2001.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Bhuj & Kutch Tourism – White Desert & Royal Heritage",
        metaDescription: "Explore Bhuj & Kutch tourism: Great Rann of Kutch, Aina Mahal, Prag Mahal, Bhuj Chattardi and Smritivan Museum.",
        keywords: ["Kutch tourism", "Bhuj tourism", "Great Rann of Kutch", "Aina Mahal", "places to visit in Kutch"],
        tags: ["Kutch", "Bhuj", "Gujarat", "Rann of Kutch", "White Desert", "Handicrafts"]
      },
      es: {
        metaTitle: "Turismo en Bhuj y Kutch – Desierto Blanco y Artesanías",
        metaDescription: "Descubre Kutch y Bhuj: Gran Rann de Kutch, Aina Mahal, Prag Mahal, Bhuj Chattardi y Museo Smritivan.",
        keywords: ["turismo en Kutch", "turismo en Bhuj", "Gran Rann de Kutch", "artesanías de Kutch"],
        tags: ["Kutch", "Bhuj", "Gujarat", "Desierto Blanco", "Patrimonio"]
      },
      pt: {
        metaTitle: "Turismo em Bhuj e Kutch – Deserto Branco e Artesanato",
        metaDescription: "Conheça Kutch e Bhuj: Great Rann of Kutch, Aina Mahal, Prag Mahal, Bhuj Chattardi e Museu Smritivan.",
        keywords: ["turismo em Kutch", "turismo em Bhuj", "Great Rann of Kutch", "artesanato de Kutch"],
        tags: ["Kutch", "Bhuj", "Gujarat", "Deserto Branco", "Patrimônio"]
      }
    }
  },

  {
    id: "dwarka",
    stateId: "gujarat",
    name: "Dwarka",
    nombre: "Dwarka",
    nome: "Dwarka",
    state: "Gujarat",
    url: "/destinations/india/gujarat/dwarka",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Dwarka</strong> is one of Gujarat's most important pilgrimage destinations, associated with Lord Krishna and known for the Dwarkadhish Temple, sacred sites, coastal landscapes and nearby beaches.</p>",
      es: "<p><strong>Dwarka</strong> es uno de los destinos de peregrinación más importantes de Gujarat, asociado con Lord Krishna y conocido por el templo Dwarkadhish, lugares sagrados y paisajes costeros.</p>",
      pt: "<p><strong>Dwarka</strong> é um dos mais importantes destinos de peregrinação de Gujarat, associado ao Senhor Krishna e conhecido pelo Templo Dwarkadhish, locais sagrados e paisagens costeiras.</p>"
    },
    content: {
      en: "<p><strong>Dwarka</strong> is one of Gujarat's most important pilgrimage destinations, associated with Lord Krishna and known for the Dwarkadhish Temple, sacred sites, coastal landscapes and nearby beaches.</p>",
      es: "<p><strong>Dwarka</strong> es uno de los destinos de peregrinación más importantes de Gujarat, asociado con Lord Krishna y conocido por el templo Dwarkadhish, lugares sagrados y paisajes costeros.</p>",
      pt: "<p><strong>Dwarka</strong> é um dos mais importantes destinos de peregrinação de Gujarat, associado ao Senhor Krishna e conhecido pelo Templo Dwarkadhish, locais sagrados e paisagens costeiras.</p>"
    },
    fullDescription: {
      en: `<h2>Explore Dwarka</h2>
<p>Dwarka is a major Hindu pilgrimage destination on Gujarat's western coast. The city is closely associated with Lord Krishna and forms an important part of pilgrimage traditions.</p>
<p>Visitors can explore temples, ghats, coastal landscapes and nearby islands. Gujarat Tourism prominently features Dwarkadhish Temple and Shivrajpur Beach among the region's attractions.</p>`,
      es: `<h2>Descubre Dwarka</h2>
<p>Dwarka es un importante destino de peregrinación hindú situado en la costa occidental de Gujarat. La ciudad está estrechamente relacionada con Lord Krishna y forma parte de importantes tradiciones religiosas.</p>`,
      pt: `<h2>Conheça Dwarka</h2>
<p>Dwarka é um importante destino de peregrinação hindu localizado na costa oeste de Gujarat. A cidade está profundamente associada ao Senhor Krishna e faz parte de importantes tradições religiosas.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Dwarkadhish Temple", es: "Templo Dwarkadhish", pt: "Templo Dwarkadhish" },
        address: { en: "Dwarka, Gujarat 361335, India", es: "Dwarka, Gujarat 361335, India", pt: "Dwarka, Gujarat 361335, Índia" },
        description: {
          en: cleanPlainText("The Dwarkadhish Temple is the central spiritual landmark of Dwarka and an important pilgrimage destination dedicated to Lord Krishna."),
          es: cleanPlainText("El templo Dwarkadhish es el principal monumento espiritual de Dwarka y un importante destino de peregrinación dedicado a Lord Krishna."),
          pt: cleanPlainText("O Templo Dwarkadhish é o principal monumento espiritual de Dwarka e um importante destino de peregrinação dedicado ao Senhor Krishna.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Nageshwar Jyotirlinga", es: "Nageshwar Jyotirlinga", pt: "Nageshwar Jyotirlinga" },
        address: { en: "Daaruvanam, Dwarka, Gujarat 361335, India", es: "Dwarka, Gujarat 361335, India", pt: "Dwarka, Gujarat 361335, Índia" },
        description: {
          en: cleanPlainText("Nageshwar is an important Shiva temple and pilgrimage site located near Dwarka."),
          es: cleanPlainText("Nageshwar es un importante templo de Shiva y lugar de peregrinación cerca de Dwarka."),
          pt: cleanPlainText("Nageshwar é um importante templo de Shiva e local de peregrinação próximo a Dwarka.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Rukmini Devi Temple", es: "Templo Rukmini Devi", pt: "Templo Rukmini Devi" },
        address: { en: "Dwarka, Gujarat 361335, India", es: "Dwarka, Gujarat 361335, India", pt: "Dwarka, Gujarat 361335, Índia" },
        description: {
          en: cleanPlainText("A historic temple dedicated to Rukmini, associated with the religious heritage of Dwarka."),
          es: cleanPlainText("Un templo histórico dedicado a Rukmini, relacionado con el patrimonio religioso de Dwarka."),
          pt: cleanPlainText("Um templo histórico dedicado a Rukmini, ligado ao patrimônio religioso de Dwarka.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Shivrajpur Beach", es: "Playa Shivrajpur", pt: "Praia Shivrajpur" },
        address: { en: "Shivrajpur, Dwarka, Gujarat 361335, India", es: "Shivrajpur, Dwarka, Gujarat 361335, India", pt: "Shivrajpur, Dwarka, Gujarat 361335, Índia" },
        description: {
          en: cleanPlainText("A scenic coastal destination near Dwarka known for clear coastal waters and beach experiences. Gujarat Tourism highlights it among the state's major destinations."),
          es: cleanPlainText("Un destino costero pintoresco cerca de Dwarka conocido por sus aguas y experiencias de playa."),
          pt: cleanPlainText("Um destino costeiro pitoresco perto de Dwarka conhecido por suas águas e experiências de praia.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Gomti Ghat", es: "Gomti Ghat", pt: "Gomti Ghat" },
        address: { en: "Near Dwarkadhish Temple, Dwarka, Gujarat 361335, India", es: "Dwarka, Gujarat 361335, India", pt: "Dwarka, Gujarat 361335, Índia" },
        description: {
          en: cleanPlainText("Gomti Ghat is a sacred riverside area near Dwarkadhish Temple and an important part of the city's pilgrimage experience."),
          es: cleanPlainText("Gomti Ghat es una zona sagrada junto al río cerca del templo Dwarkadhish y una parte importante de la experiencia de peregrinación."),
          pt: cleanPlainText("Gomti Ghat é uma área sagrada às margens do rio próxima ao Templo Dwarkadhish e uma parte importante da experiência de peregrinação.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Dwarka Tourism – Holy Pilgrimage City of Lord Krishna",
        metaDescription: "Explore Dwarka tourism: Dwarkadhish Temple, Nageshwar Jyotirlinga, Rukmini Devi Temple, Shivrajpur Beach and Gomti Ghat.",
        keywords: ["Dwarka tourism", "Dwarkadhish Temple", "places to visit in Dwarka", "Shivrajpur Beach", "Dwarka pilgrimage"],
        tags: ["Dwarka", "Gujarat", "Pilgrimage", "Lord Krishna", "Shivrajpur Beach", "Temples"]
      },
      es: {
        metaTitle: "Turismo en Dwarka – Ciudad Sagrada de Krishna",
        metaDescription: "Descubre Dwarka: Templo Dwarkadhish, Nageshwar, Templo Rukmini, Playa Shivrajpur y Gomti Ghat.",
        keywords: ["turismo en Dwarka", "lugares para visitar en Dwarka", "Templo Dwarkadhish", "peregrinación en Gujarat"],
        tags: ["Dwarka", "Gujarat", "Templos", "Peregrinación", "Playas"]
      },
      pt: {
        metaTitle: "Turismo em Dwarka – Cidade Sagrada do Senhor Krishna",
        metaDescription: "Conheça Dwarka: Templo Dwarkadhish, Nageshwar, Templo Rukmini, Praia Shivrajpur e Gomti Ghat.",
        keywords: ["turismo em Dwarka", "lugares para visitar em Dwarka", "Templo Dwarkadhish", "peregrinação em Gujarat"],
        tags: ["Dwarka", "Gujarat", "Templos", "Peregrinação", "Praias"]
      }
    }
  },

  {
    id: "somnath",
    stateId: "gujarat",
    name: "Somnath",
    nombre: "Somnath",
    nome: "Somnath",
    state: "Gujarat",
    url: "/destinations/india/gujarat/somnath",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Somnath</strong> is one of Gujarat's most important pilgrimage destinations, centred around the famous Somnath Temple on the western coast. The region also offers historic and spiritual sites associated with the Prabhas Patan area.</p>",
      es: "<p><strong>Somnath</strong> es uno de los principales destinos de peregrinación de Gujarat, centrado en el famoso templo de Somnath situado en la costa occidental.</p>",
      pt: "<p><strong>Somnath</strong> é um dos principais destinos de peregrinação de Gujarat, centrado no famoso Templo de Somnath localizado na costa oeste.</p>"
    },
    content: {
      en: "<p><strong>Somnath</strong> is one of Gujarat's most important pilgrimage destinations, centred around the famous Somnath Temple on the western coast. The region also offers historic and spiritual sites associated with the Prabhas Patan area.</p>",
      es: "<p><strong>Somnath</strong> es uno de los principales destinos de peregrinación de Gujarat, centrado en el famoso templo de Somnath situado en la costa occidental.</p>",
      pt: "<p><strong>Somnath</strong> é um dos principais destinos de peregrinação de Gujarat, centrado no famoso Templo de Somnath localizado na costa oeste.</p>"
    },
    fullDescription: {
      en: `<h2>Discover Somnath</h2>
<p>Somnath is a major pilgrimage destination on Gujarat's western coast. The Somnath Temple is traditionally regarded as the first among the twelve Jyotirlinga shrines of Shiva and is an important religious and tourist site.</p>
<p>The wider Prabhas Patan area includes several spiritual and historical sites such as Bhalka Tirth, Triveni Sangam and Gita Mandir.</p>`,
      es: `<h2>Descubre Somnath</h2>
<p>Somnath es un importante destino de peregrinación en la costa occidental de Gujarat. El templo de Somnath es tradicionalmente considerado el primero de los doce santuarios Jyotirlinga dedicados a Shiva.</p>`,
      pt: `<h2>Conheça Somnath</h2>
<p>Somnath é um importante destino de peregrinação na costa oeste de Gujarat. O Templo de Somnath é tradicionalmente considerado o primeiro dos doze santuários Jyotirlinga dedicados a Shiva.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Somnath Temple", es: "Templo de Somnath", pt: "Templo de Somnath" },
        address: { en: "Somnath Mandir Rd, Prabhas Patan, Gujarat 362268, India", es: "Prabhas Patan, Gujarat 362268, India", pt: "Prabhas Patan, Gujarat 362268, Índia" },
        description: {
          en: cleanPlainText("The magnificent Somnath Temple is the principal attraction of the destination and an important pilgrimage site on Gujarat's western coast."),
          es: cleanPlainText("El magnífico templo de Somnath es la principal atracción del destino y un importante lugar de peregrinación."),
          pt: cleanPlainText("O magnífico Templo de Somnath é a principal atração do destino e um importante local de peregrinação.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Bhalka Tirth", es: "Bhalka Tirth", pt: "Bhalka Tirth" },
        address: { en: "Veraval, Gujarat 362265, India", es: "Veraval, Gujarat 362265, India", pt: "Veraval, Gujarat 362265, Índia" },
        description: {
          en: cleanPlainText("Bhalka Tirth is an important religious site associated with the traditional story of Krishna's departure from earthly life."),
          es: cleanPlainText("Bhalka Tirth es un importante lugar religioso asociado con la tradición sobre la partida de Krishna de la vida terrenal."),
          pt: cleanPlainText("Bhalka Tirth é um importante local religioso associado à tradição sobre a partida de Krishna da vida terrena.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Triveni Sangam", es: "Triveni Sangam", pt: "Triveni Sangam" },
        address: { en: "Prabhas Patan, Somnath, Gujarat 362268, India", es: "Somnath, Gujarat 362268, India", pt: "Somnath, Gujarat 362268, Índia" },
        description: {
          en: cleanPlainText("Triveni Sangam is a sacred confluence associated with the rivers Kapila, Hiran and Sarasvati."),
          es: cleanPlainText("Triveni Sangam es una confluencia sagrada asociada con los ríos Kapila, Hiran y Sarasvati."),
          pt: cleanPlainText("Triveni Sangam é uma confluência sagrada associada aos rios Kapila, Hiran e Sarasvati.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Gita Mandir", es: "Gita Mandir", pt: "Gita Mandir" },
        address: { en: "Near Triveni Sangam, Somnath, Gujarat 362268, India", es: "Somnath, Gujarat 362268, India", pt: "Somnath, Gujarat 362268, Índia" },
        description: {
          en: cleanPlainText("Gita Mandir is a temple associated with Krishna and the Bhagavad Gita and is part of the spiritual landscape around Somnath."),
          es: cleanPlainText("Gita Mandir es un templo relacionado con Krishna y el Bhagavad Gita y forma parte del patrimonio espiritual de Somnath."),
          pt: cleanPlainText("Gita Mandir é um templo associado a Krishna e ao Bhagavad Gita e faz parte do patrimônio espiritual de Somnath.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Prabhas Patan", es: "Prabhas Patan", pt: "Prabhas Patan" },
        address: { en: "Prabhas Patan, Veraval, Gujarat 362268, India", es: "Veraval, Gujarat 362268, India", pt: "Veraval, Gujarat 362268, Índia" },
        description: {
          en: cleanPlainText("Prabhas Patan is the historic area surrounding Somnath and contains several religious and cultural sites."),
          es: cleanPlainText("Prabhas Patan es la zona histórica alrededor de Somnath y contiene varios lugares religiosos y culturales."),
          pt: cleanPlainText("Prabhas Patan é a área histórica ao redor de Somnath e possui vários locais religiosos e culturais.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Somnath Tourism – First Jyotirlinga Shrine of Shiva",
        metaDescription: "Explore Somnath tourism: Somnath Temple, Bhalka Tirth, Triveni Sangam, Gita Mandir and Prabhas Patan.",
        keywords: ["Somnath tourism", "Somnath Temple", "places to visit in Somnath", "First Jyotirlinga", "Prabhas Patan"],
        tags: ["Somnath", "Gujarat", "Jyotirlinga", "Pilgrimage", "Shiva Temple", "Heritage"]
      },
      es: {
        metaTitle: "Turismo en Somnath – Primer Santuario Jyotirlinga",
        metaDescription: "Descubre Somnath: Templo de Somnath, Bhalka Tirth, Confluencia Triveni Sangam, Gita Mandir y Prabhas Patan.",
        keywords: ["turismo en Somnath", "lugares para visitar en Somnath", "Templo de Somnath", "Jyotirlinga"],
        tags: ["Somnath", "Gujarat", "Templos", "Peregrinación", "Patrimonio"]
      },
      pt: {
        metaTitle: "Turismo em Somnath – Primeiro Santuário Jyotirlinga",
        metaDescription: "Conheça Somnath: Templo de Somnath, Bhalka Tirth, Triveni Sangam, Gita Mandir e Prabhas Patan.",
        keywords: ["turismo em Somnath", "lugares para visitar em Somnath", "Templo de Somnath", "Jyotirlinga"],
        tags: ["Somnath", "Gujarat", "Templos", "Peregrinação", "Patrimônio"]
      }
    }
  },

  {
    id: "junagadh",
    stateId: "gujarat",
    name: "Junagadh",
    nombre: "Junagadh",
    nome: "Junagadh",
    state: "Gujarat",
    url: "/destinations/india/gujarat/junagadh",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Junagadh</strong> is a historic city located near the Girnar hills, known for ancient monuments, forts, caves, temples and access to the natural landscapes of Saurashtra.</p>",
      es: "<p><strong>Junagadh</strong> es una ciudad histórica situada cerca de las colinas de Girnar, conocida por sus monumentos antiguos, fortalezas, cuevas y templos.</p>",
      pt: "<p><strong>Junagadh</strong> é uma cidade histórica localizada próxima às colinas de Girnar, conhecida por seus monumentos antigos, fortes, cavernas e templos.</p>"
    },
    content: {
      en: "<p><strong>Junagadh</strong> is a historic city located near the Girnar hills, known for ancient monuments, forts, caves, temples and access to the natural landscapes of Saurashtra.</p>",
      es: "<p><strong>Junagadh</strong> es una ciudad histórica situada cerca de las colinas de Girnar, conocida por sus monumentos antiguos, fortalezas, cuevas y templos.</p>",
      pt: "<p><strong>Junagadh</strong> é uma cidade histórica localizada próxima às colinas de Girnar, conhecida por seus monumentos antigos, fortes, cavernas e templos.</p>"
    },
    fullDescription: {
      en: `<h2>Explore Junagadh</h2>
<p>Junagadh offers a combination of history, spirituality and natural landscapes. The city lies at the foot of Girnar and provides access to historic structures, ancient rock-cut caves and pilgrimage sites.</p>
<p>Girnar Hill is one of the region's most important attractions, while Uparkot Fort and the Buddhist caves provide insights into the area's long history. Gujarat Tourism also highlights Girnar and Adi Kadi Vav among the region's attractions.</p>`,
      es: `<h2>Descubre Junagadh</h2>
<p>Junagadh combina historia, espiritualidad y paisajes naturales. La ciudad se encuentra al pie de Girnar y permite explorar fortalezas históricas, cuevas excavadas en la roca y lugares de peregrinación.</p>`,
      pt: `<h2>Conheça Junagadh</h2>
<p>Junagadh combina história, espiritualidade e paisagens naturais. A cidade está localizada aos pés de Girnar e permite explorar fortes históricos, cavernas escavadas na rocha e locais de peregrinação.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Girnar Hill", es: "Colina Girnar", pt: "Colina Girnar" },
        address: { en: "Girnar, Junagadh, Gujarat 362001, India", es: "Junagadh, Gujarat 362001, India", pt: "Junagadh, Gujarat 362001, Índia" },
        description: {
          en: cleanPlainText("Girnar is a sacred mountain complex with temples, pilgrimage routes and panoramic landscapes."),
          es: cleanPlainText("Girnar es un complejo montañoso sagrado con templos, rutas de peregrinación y paisajes panorámicos."),
          pt: cleanPlainText("Girnar é um complexo montanhoso sagrado com templos, rotas de peregrinação e paisagens panorâmicas.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Uparkot Fort", es: "Fuerte Uparkot", pt: "Forte Uparkot" },
        address: { en: "Uparkot, Junagadh, Gujarat 362001, India", es: "Uparkot, Junagadh, Gujarat 362001, India", pt: "Uparkot, Junagadh, Gujarat 362001, Índia" },
        description: {
          en: cleanPlainText("Uparkot Fort is an ancient fortification with historic gateways, defensive structures, caves and stepwells."),
          es: cleanPlainText("Uparkot Fort es una antigua fortaleza con puertas históricas, estructuras defensivas, cuevas y pozos escalonados."),
          pt: cleanPlainText("Uparkot Fort é uma antiga fortificação com portões históricos, estruturas defensivas, cavernas e poços escalonados.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Buddhist Caves", es: "Cuevas Budistas", pt: "Cavernas Budistas" },
        address: { en: "Uparkot Fort Complex, Junagadh, Gujarat 362001, India", es: "Junagadh, Gujarat 362001, India", pt: "Junagadh, Gujarat 362001, Índia" },
        description: {
          en: cleanPlainText("The Buddhist caves near Uparkot provide an insight into ancient rock-cut architecture and Buddhist heritage."),
          es: cleanPlainText("Las cuevas budistas cerca de Uparkot muestran ejemplos de arquitectura excavada en la roca y patrimonio budista antiguo."),
          pt: cleanPlainText("As cavernas budistas próximas a Uparkot mostram exemplos de arquitetura escavada na rocha e patrimônio budista antigo.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Mahabat Maqbara", es: "Mahabat Maqbara", pt: "Mahabat Maqbara" },
        address: { en: "Mullawada, Junagadh, Gujarat 362001, India", es: "Junagadh, Gujarat 362001, India", pt: "Junagadh, Gujarat 362001, Índia" },
        description: {
          en: cleanPlainText("Mahabat Maqbara is an ornate historic mausoleum known for its elaborate architectural details."),
          es: cleanPlainText("Mahabat Maqbara es un mausoleo histórico conocido por sus elaborados detalles arquitectónicos."),
          pt: cleanPlainText("Mahabat Maqbara é um mausoléu histórico conhecido por seus elaborados detalhes arquitetônicos.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Adi Kadi Vav", es: "Adi Kadi Vav", pt: "Adi Kadi Vav" },
        address: { en: "Uparkot Fort, Junagadh, Gujarat 362001, India", es: "Junagadh, Gujarat 362001, India", pt: "Junagadh, Gujarat 362001, Índia" },
        description: {
          en: cleanPlainText("Adi Kadi Vav is a historic stepwell associated with Junagadh's heritage and traditional water architecture."),
          es: cleanPlainText("Adi Kadi Vav es un pozo escalonado histórico relacionado con el patrimonio y la arquitectura tradicional del agua de Junagadh."),
          pt: cleanPlainText("Adi Kadi Vav é um poço escalonado histórico associado ao patrimônio e à arquitetura tradicional de água de Junagadh.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Junagadh Tourism – Girnar Hills & Ancient Uparkot Fort",
        metaDescription: "Explore Junagadh tourism: Girnar Hill, Uparkot Fort, Buddhist Caves, Mahabat Maqbara and Adi Kadi Vav.",
        keywords: ["Junagadh tourism", "Girnar Hill", "Uparkot Fort", "places to visit in Junagadh", "Mahabat Maqbara"],
        tags: ["Junagadh", "Gujarat", "Girnar", "Uparkot", "Forts", "Caves", "Heritage"]
      },
      es: {
        metaTitle: "Turismo en Junagadh – Colinas de Girnar y Fuerte Uparkot",
        metaDescription: "Descubre Junagadh: Colina Girnar, Fuerte Uparkot, Cuevas Budistas, Mahabat Maqbara y Pozo Adi Kadi Vav.",
        keywords: ["turismo en Junagadh", "lugares para visitar en Junagadh", "Colina Girnar", "Fuerte Uparkot"],
        tags: ["Junagadh", "Gujarat", "Girnar", "Fortalezas", "Patrimonio"]
      },
      pt: {
        metaTitle: "Turismo em Junagadh – Colinas de Girnar e Forte Uparkot",
        metaDescription: "Conheça Junagadh: Colina Girnar, Forte Uparkot, Cavernas Budistas, Mahabat Maqbara e Adi Kadi Vav.",
        keywords: ["turismo em Junagadh", "lugares para visitar em Junagadh", "Colina Girnar", "Forte Uparkot"],
        tags: ["Junagadh", "Gujarat", "Girnar", "Fortes", "Patrimônio"]
      }
    }
  },

  {
    id: "gandhinagar",
    stateId: "gujarat",
    name: "Gandhinagar",
    nombre: "Gandhinagar",
    nome: "Gandhinagar",
    state: "Gujarat",
    url: "/destinations/india/gujarat/gandhinagar",
    image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=1000",
    
    overview: {
      en: "<p><strong>Gandhinagar</strong> is the capital of Gujarat and a planned city known for wide green avenues, government architecture, temples and nearby heritage attractions.</p>",
      es: "<p><strong>Gandhinagar</strong> es la capital de Gujarat y una ciudad planificada conocida por sus amplias avenidas verdes, edificios gubernamentales, templos y atracciones patrimoniales cercanas.</p>",
      pt: "<p><strong>Gandhinagar</strong> é a capital de Gujarat e uma cidade planejada conhecida por suas amplas avenidas arborizadas, edifícios governamentais, templos e atrações históricas próximas.</p>"
    },
    content: {
      en: "<p><strong>Gandhinagar</strong> is the capital of Gujarat and a planned city known for wide green avenues, government architecture, temples and nearby heritage attractions.</p>",
      es: "<p><strong>Gandhinagar</strong> es la capital de Gujarat y una ciudad planificada conocida por sus amplias avenidas verdes, edificios gubernamentales, templos y atracciones patrimoniales cercanas.</p>",
      pt: "<p><strong>Gandhinagar</strong> é a capital de Gujarat e uma cidade planejada conhecida por suas amplas avenidas arborizadas, edifícios governamentais, templos e atrações históricas próximas.</p>"
    },
    fullDescription: {
      en: `<h2>Discover Gandhinagar</h2>
<p>Gandhinagar is a planned capital city with broad avenues, green spaces and organised urban areas. It offers a quieter contrast to the busy streets of Ahmedabad and serves as a convenient base for exploring central Gujarat.</p>
<p>The city is particularly known for Akshardham Temple, while the nearby Adalaj Stepwell provides an opportunity to explore Gujarat's traditional architectural heritage.</p>`,
      es: `<h2>Descubre Gandhinagar</h2>
<p>Gandhinagar es una capital planificada con amplias avenidas, zonas verdes y espacios urbanos organizados. Ofrece un ambiente más tranquilo y permite acceder fácilmente a diferentes lugares de Gujarat central.</p>`,
      pt: `<h2>Conheça Gandhinagar</h2>
<p>Gandhinagar é uma capital planejada com avenidas amplas, áreas verdes e espaços urbanos organizados. Oferece um ambiente mais tranquilo e permite acesso fácil a vários destinos do centro de Gujarat.</p>`
    },
    
    famousPlacesToVisit: [
      {
        name: { en: "Akshardham Temple", es: "Templo Akshardham", pt: "Templo Akshardham" },
        address: { en: "J Block, Sector 20, Gandhinagar, Gujarat 382020, India", es: "Sector 20, Gandhinagar, Gujarat 382020, India", pt: "Sector 20, Gandhinagar, Gujarat 382020, Índia" },
        description: {
          en: cleanPlainText("Akshardham Temple is a major spiritual and architectural attraction known for its intricate design, gardens and peaceful surroundings."),
          es: cleanPlainText("Akshardham Temple es una importante atracción espiritual y arquitectónica conocida por su diseño detallado, jardines y ambiente tranquilo."),
          pt: cleanPlainText("Akshardham Temple é uma importante atração espiritual e arquitetônica conhecida por seu design detalhado, jardins e ambiente tranquilo.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Adalaj Stepwell", es: "Pozo Escalonado de Adalaj", pt: "Poço Escalonado de Adalaj" },
        address: { en: "Adalaj, Gandhinagar, Gujarat 382421, India", es: "Adalaj, Gandhinagar, Gujarat 382421, India", pt: "Adalaj, Gandhinagar, Gujarat 382421, Índia" },
        description: {
          en: cleanPlainText("This historic stepwell near Gandhinagar showcases Gujarat's remarkable tradition of stone architecture and water management."),
          es: cleanPlainText("Este pozo escalonado histórico cerca de Gandhinagar muestra la tradición de arquitectura en piedra y gestión del agua de Gujarat."),
          pt: cleanPlainText("Este poço escalonado histórico próximo a Gandhinagar demonstra a tradição de arquitetura em pedra e gestão de água de Gujarat.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Indroda Nature Park", es: "Parque Natural Indroda", pt: "Parque Natural Indroda" },
        address: { en: "Sector 7, Gandhinagar, Gujarat 382007, India", es: "Sector 7, Gandhinagar, Gujarat 382007, India", pt: "Sector 7, Gandhinagar, Gujarat 382007, Índia" },
        description: {
          en: cleanPlainText("Indroda Nature Park combines natural surroundings with educational attractions related to wildlife, plants and prehistoric life."),
          es: cleanPlainText("Indroda Nature Park combina naturaleza con espacios educativos relacionados con fauna, flora y vida prehistórica."),
          pt: cleanPlainText("Indroda Nature Park combina natureza com atrações educativas relacionadas à fauna, flora e vida pré-histórica.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Sarita Udyan", es: "Sarita Udyan", pt: "Sarita Udyan" },
        address: { en: "Sector 9, Gandhinagar, Gujarat 382010, India", es: "Sector 9, Gandhinagar, Gujarat 382010, India", pt: "Sector 9, Gandhinagar, Gujarat 382010, Índia" },
        description: {
          en: cleanPlainText("Sarita Udyan is a green recreational area offering walking spaces and a peaceful environment along the Sabarmati."),
          es: cleanPlainText("Sarita Udyan es un espacio verde recreativo con zonas para caminar y un ambiente tranquilo junto al Sabarmati."),
          pt: cleanPlainText("Sarita Udyan é uma área verde recreativa com espaços para caminhadas e ambiente tranquilo próximo ao Sabarmati.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Children's Park", es: "Parque Infantil", pt: "Parque Infantil" },
        address: { en: "Sector 28, Gandhinagar, Gujarat 382028, India", es: "Sector 28, Gandhinagar, Gujarat 382028, India", pt: "Sector 28, Gandhinagar, Gujarat 382028, Índia" },
        description: {
          en: cleanPlainText("Children's Park is a family-oriented recreational space with greenery and leisure facilities."),
          es: cleanPlainText("Children's Park es un espacio recreativo familiar con zonas verdes y áreas de entretenimiento."),
          pt: cleanPlainText("Children's Park é um espaço recreativo familiar com áreas verdes e opções de lazer.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      }
    ],

    seo: {
      en: {
        metaTitle: "Gandhinagar Tourism – Green Capital City of Gujarat",
        metaDescription: "Explore Gandhinagar tourism: Akshardham Temple, Adalaj Stepwell, Indroda Nature Park, Sarita Udyan and Children's Park.",
        keywords: ["Gandhinagar tourism", "Akshardham Temple Gandhinagar", "places to visit in Gandhinagar", "Adalaj Stepwell", "Indroda Nature Park"],
        tags: ["Gandhinagar", "Gujarat", "Capital", "Akshardham", "Stepwell", "Nature"]
      },
      es: {
        metaTitle: "Turismo en Gandhinagar – Capital Verde de Gujarat",
        metaDescription: "Descubre Gandhinagar: Templo Akshardham, Pozo Adalaj, Parque Natural Indroda, Sarita Udyan y Parque Infantil.",
        keywords: ["turismo en Gandhinagar", "lugares para visitar en Gandhinagar", "Templo Akshardham", "patrimonio de Gujarat"],
        tags: ["Gandhinagar", "Gujarat", "Capital", "Templos", "Naturaleza"]
      },
      pt: {
        metaTitle: "Turismo em Gandhinagar – Capital Verde de Gujarat",
        metaDescription: "Conheça Gandhinagar: Templo Akshardham, Adalaj Stepwell, Parque Natural Indroda, Sarita Udyan e Parque Infantil.",
        keywords: ["turismo em Gandhinagar", "lugares para visitar em Gandhinagar", "Templo Akshardham", "patrimônio de Gujarat"],
        tags: ["Gandhinagar", "Gujarat", "Capital", "Templos", "Natureza"]
      }
    }
  }
];

// Update or add cities into cities array
gujaratCities.forEach(city => {
  const index = cities.findIndex(c => c.id === city.id);
  if (index >= 0) {
    cities[index] = { ...cities[index], ...city };
  } else {
    cities.push(city);
  }
});

fs.writeFileSync(statesFilePath, JSON.stringify(states, null, 2), 'utf8');
fs.writeFileSync(citiesFilePath, JSON.stringify(cities, null, 2), 'utf8');

console.log(`✅ Gujarat State and ${gujaratCities.length} Cities successfully updated! Total states: ${states.length}, Total cities: ${cities.length}`);
