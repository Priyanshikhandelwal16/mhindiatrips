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

// 1. UPDATE UTTARAKHAND STATE DATA
const stateIndex = states.findIndex(s => s.id === 'uttarakhand');

const ukStateShortDesc = {
  en: "<p><strong>Uttarakhand</strong> is a beautiful Himalayan state in northern India, known for snow-covered mountains, peaceful valleys, sacred temples, scenic hill stations, forests, rivers and adventure experiences. Often associated with spiritual tourism, the state is home to important pilgrimage destinations such as Haridwar, Rishikesh, Kedarnath and Badrinath, while destinations like Mussoorie, Nainital, Almora and Auli attract nature lovers and mountain travellers.</p>",
  es: "<p><strong>Uttarakhand</strong> es un hermoso estado del Himalaya situado en el norte de la India, conocido por sus montañas nevadas, valles tranquilos, templos sagrados, estaciones de montaña, bosques, ríos y actividades de aventura. El estado combina turismo espiritual, naturaleza y aventura, con destinos como Haridwar, Rishikesh, Kedarnath y Badrinath, además de lugares de montaña como Mussoorie, Nainital, Almora y Auli.</p>",
  pt: "<p><strong>Uttarakhand</strong> é um belo estado do Himalaia localizado no norte da Índia, conhecido por suas montanhas cobertas de neve, vales tranquilos, templos sagrados, cidades montanhosas, florestas, rios e experiências de aventura. O estado combina turismo espiritual, natureza e aventura, com destinos como Haridwar, Rishikesh, Kedarnath e Badrinath, além de destinos montanhosos como Mussoorie, Nainital, Almora e Auli.</p>"
};

const ukStateLongDesc = {
  en: `<h2>Discover Uttarakhand – The Land of Mountains, Spirituality and Adventure</h2>

<p>Uttarakhand is one of India's most diverse Himalayan destinations, offering an extraordinary combination of natural landscapes, spirituality, adventure and cultural heritage. From the peaceful foothills and sacred Ganga river to high Himalayan valleys and snow-covered peaks, the state offers experiences for different types of travellers.</p>

<p>The state is particularly important for pilgrimage tourism. <strong>Haridwar and Rishikesh</strong> are major spiritual destinations, while the famous Himalayan pilgrimage circuit includes <strong>Kedarnath, Badrinath, Gangotri and Yamunotri</strong>. Uttarakhand Tourism also promotes several spiritual, cultural and heritage circuits across the state.</p>

<h3>Mountains and Hill Stations</h3>

<p>Travellers looking for scenic mountain holidays can explore <strong>Mussoorie, Nainital, Almora and Auli</strong>. Nainital is centred around the beautiful Naini Lake and is surrounded by Himalayan hills, while Mussoorie is known for its mountain scenery and pleasant climate.</p>

<h3>Adventure Tourism</h3>

<p>Uttarakhand offers trekking, river rafting, skiing, camping, mountain biking, rock climbing and other outdoor experiences. Rishikesh is particularly known for river rafting and adventure activities, while Auli is one of India's important skiing destinations.</p>

<h3>Wildlife and Nature</h3>

<p>Wildlife enthusiasts can explore destinations such as <strong>Jim Corbett National Park</strong>, Rajaji National Park and several wildlife sanctuaries. Jim Corbett National Park was established in 1936 and is India's first national park. It is known for its rich wildlife, including tigers, elephants, deer and numerous bird species.</p>

<h3>Why Visit Uttarakhand?</h3>

<ul>
<li>Scenic Himalayan landscapes</li>
<li>Ancient temples and pilgrimage destinations</li>
<li>Hill stations and peaceful mountain towns</li>
<li>River rafting and adventure activities</li>
<li>Skiing and snow experiences</li>
<li>Wildlife safaris and birdwatching</li>
<li>Traditional Himalayan culture and cuisine</li>
<li>Trekking and camping opportunities</li>
</ul>`,

  es: `<h2>Descubre Uttarakhand – La Tierra de Montañas, Espiritualidad y Aventura</h2>

<p>Uttarakhand es uno de los destinos del Himalaya más diversos de la India, ofreciendo una combinación extraordinaria de paisajes naturales, espiritualidad, aventura y patrimonio cultural. Desde las tranquilas estribaciones y el sagrado río Ganges hasta los altos valles del Himalaya y cumbres nevadas.</p>

<p>El estado es de gran importancia para el turismo de peregrinación. <strong>Haridwar y Rishikesh</strong> son destinos espirituales de primer orden, mientras que el famoso circuito del Himalaya incluye <strong>Kedarnath, Badrinath, Gangotri y Yamunotri</strong>.</p>

<h3>Montañas y Estaciones de Montaña</h3>

<p>Quienes buscan vacaciones de montaña pueden explorar <strong>Mussoorie, Nainital, Almora y Auli</strong>. Nainital se centra alrededor del lago Naini rodeado de colinas, mientras que Mussoorie es famosa por su agradable clima.</p>

<h3>Turismo de Aventura</h3>

<p>Uttarakhand ofrece senderismo, rafting en ríos, esquí, campamentos y ciclismo de montaña. Rishikesh destaca por el rafting en aguas bravas, mientras que Auli es un importante centro de esquí.</p>

<h3>Vida Silvestre y Naturaleza</h3>

<p>Los amantes de la naturaleza pueden recorrer el <strong>Parque Nacional Jim Corbett</strong>, primer parque nacional de la India fundado en 1936, famoso por el Tigre Real de Bengala, elefantes y aves.</p>

<h3>¿Por qué visitar Uttarakhand?</h3>

<ul>
<li>Paisajes impresionantes del Himalaya</li>
<li>Templos antiguos y santuarios sagrados</li>
<li>Pueblos pintorescos de montaña</li>
<li>Rafting y deportes de aventura</li>
<li>Esquí y experiencias en la nieve</li>
<li>Safaris de fauna salvaje</li>
<li>Gastronomía y cultura tradicional</li>
<li>Senderismo y campamentos al aire libre</li>
</ul>`,

  pt: `<h2>Descubra Uttarakhand – A Terra das Montanhas, Espiritualidade e Aventura</h2>

<p>Uttarakhand é um dos destinos mais diversos do Himalaia na Índia, oferecendo uma combinação extraordinária de paisagens naturais, espiritualidade, aventura e patrimônio cultural.</p>

<p>O estado é vital para o turismo religioso. <strong>Haridwar e Rishikesh</strong> são os principais centros espirituais, enquanto o circuito de peregrinação do Himalaia abrange <strong>Kedarnath, Badrinath, Gangotri e Yamunotri</strong>.</p>

<h3>Montanhas e Cidades Montanhosas</h3>

<p>Viajantes em busca de férias na montanha podem explorar <strong>Mussoorie, Nainital, Almora e Auli</strong>. Nainital destaca-se pelo Lago Naini e Mussoorie pela sua arquitetura e clima agradável.</p>

<h3>Turismo de Aventura</h3>

<p>Uttarakhand oferece trekking, rafting, esqui, acampamentos e mountain bike. Rishikesh é a capital do rafting e Auli o principal centro de esqui da Índia.</p>

<h3>Vida Selvagem e Natureza</h3>

<p>Os entusiastas da vida selvagem podem explorar o <strong>Parque Nacional Jim Corbett</strong>, o primeiro parque nacional da Índia criado em 1936, lar de tigres, elefantes e vasta avifauna.</p>

<h3>Por que visitar Uttarakhand?</h3>

<ul>
<li>Paisagens deslumbrantes do Himalaia</li>
<li>Templos antigos e circuitos sagrados</li>
<li>Cidades charmosas de montanha</li>
<li>Rafting e atividades de aventura</li>
<li>Esqui e experiências na neve</li>
<li>Safáris e observação de aves</li>
<li>Cultura e gastronomia do Himalaia</li>
<li>Trilhas e acampamentos na natureza</li>
</ul>`
};

const ukSeoTitle = {
  en: "Uttarakhand Tourism – Explore Mountains, Temples & Adventure",
  es: "Turismo en Uttarakhand – Montañas, Templos y Aventura",
  pt: "Turismo em Uttarakhand – Montanhas, Templos e Aventura"
};

const ukSeoDesc = {
  en: "Explore Uttarakhand tourism with beautiful hill stations, Himalayan landscapes, temples, wildlife, adventure activities, lakes and unforgettable travel experiences.",
  es: "Descubre Uttarakhand con sus montañas del Himalaya, estaciones de montaña, templos, vida silvestre, lagos y experiencias de aventura.",
  pt: "Descubra Uttarakhand, no Himalaia, com montanhas, cidades de montanha, templos, vida selvagem, lagos e experiências de aventura."
};

const ukSeoKeywords = {
  en: "Uttarakhand tourism, Uttarakhand travel, places to visit in Uttarakhand, Uttarakhand tour packages, Himalayan destinations, Uttarakhand hill stations, Uttarakhand temples",
  es: "turismo en Uttarakhand, viajar a Uttarakhand, lugares para visitar en Uttarakhand, Himalaya, estaciones de montaña de Uttarakhand",
  pt: "turismo em Uttarakhand, viajar para Uttarakhand, lugares para visitar em Uttarakhand, Himalaia, montanhas de Uttarakhand"
};

if (stateIndex !== -1) {
  states[stateIndex].name = { en: "Uttarakhand", es: "Uttarakhand", pt: "Uttarakhand" };
  states[stateIndex].description = ukStateShortDesc;
  states[stateIndex].overview = ukStateLongDesc;
  states[stateIndex].content = ukStateLongDesc;
  states[stateIndex].fullDescription = ukStateLongDesc;
  states[stateIndex].seoTitle = ukSeoTitle;
  states[stateIndex].seoDesc = ukSeoDesc;
  states[stateIndex].seoKeywords = ukSeoKeywords;
  states[stateIndex].isPublished = true;
  states[stateIndex].isDeleted = false;
  states[stateIndex].updatedAt = new Date().toISOString();
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Updated Uttarakhand state in states.json');

// 2. DEFINE THE 8 DESTINATIONS
const ukCitiesData = [
  // 1. DEHRADUN
  {
    id: "dehradun",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 1,
    image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
    slug: { en: "dehradun", es: "dehradun", pt: "dehradun" },
    name: { en: "Dehradun", es: "Dehradun", pt: "Dehradun" },
    description: {
      en: "<p><strong>Dehradun</strong> is the capital city of Uttarakhand and an important gateway to the state's Himalayan destinations. Surrounded by green hills and located in the Doon Valley, the city combines natural beauty, education, culture and easy access to nearby attractions.</p>",
      es: "<p><strong>Dehradun</strong> es la capital de Uttarakhand y una importante puerta de entrada a los destinos del Himalaya. Rodeada de colinas verdes y situada en el valle de Doon, la ciudad combina naturaleza, cultura, educación y acceso a numerosos lugares turísticos.</p>",
      pt: "<p><strong>Dehradun</strong> é a capital de Uttarakhand e uma importante porta de entrada para os destinos do Himalaia. Cercada por colinas verdes e localizada no Vale de Doon, a cidade combina natureza, cultura, educação e atrações turísticas.</p>"
    },
    overview: {
      en: `<h2>Explore Dehradun</h2>

<p>Dehradun offers a relaxed introduction to Uttarakhand's landscapes and culture. The city is surrounded by the Himalayan foothills and serves as a convenient base for exploring Mussoorie, Rishikesh and other destinations.</p>

<p>Visitors can explore waterfalls, caves, monasteries, temples, museums and scenic viewpoints around the city. Its pleasant environment and location make Dehradun suitable for both short city breaks and longer Himalayan journeys.</p>`,
      es: `<h2>Descubre Dehradun</h2>

<p>Dehradun ofrece una introducción tranquila a los paisajes y la cultura de Uttarakhand. La ciudad está rodeada por las estribaciones del Himalaya y es una base conveniente para explorar Mussoorie, Rishikesh y otros destinos.</p>`,
      pt: `<h2>Conheça Dehradun</h2>

<p>Dehradun oferece uma introdução tranquila às paisagens e à cultura de Uttarakhand. A cidade é cercada pelo sopé do Himalaia e funciona como uma excelente base para explorar Mussoorie, Rishikesh e outros destinos.</p>`
    },
    seoTitle: {
      en: "Dehradun Tourism – Robber's Cave, Sahastradhara & Himalayan Gateway",
      es: "Turismo de Dehradun – Robber's Cave, Sahastradhara y Valle de Doon",
      pt: "Turismo de Dehradun – Robber's Cave, Sahastradhara e Vale de Doon"
    },
    seoDesc: {
      en: "Explore Dehradun in Uttarakhand. Visit Robber's Cave, Sahastradhara, Tapkeshwar Temple, Forest Research Institute and Mindrolling Monastery.",
      es: "Explora Dehradun en Uttarakhand. Visita Robber's Cave, Sahastradhara, el templo Tapkeshwar, el Forest Research Institute y el monasterio Mindrolling.",
      pt: "Explore Dehradun em Uttarakhand. Visite Robber's Cave, Sahastradhara, o Templo Tapkeshwar, o Forest Research Institute e o Mosteiro Mindrolling."
    },
    seoKeywords: {
      en: "Dehradun, Dehradun Tourism, Robber's Cave, Sahastradhara, Tapkeshwar Temple, Forest Research Institute, Mindrolling Monastery",
      es: "Dehradun, Turismo de Dehradun, Cueva de Robber, Sahastradhara, Templo Tapkeshwar, Monasterio Mindrolling",
      pt: "Dehradun, Turismo de Dehradun, Caverna de Robber, Sahastradhara, Templo Tapkeshwar, Mosteiro Mindrolling"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Robber's Cave", es: "Robber's Cave", pt: "Robber's Cave" },
        description: {
          en: cleanPlainText("Robber's Cave is a natural river cave near Dehradun where a stream flows through a narrow rocky passage. The unusual landscape and cool surroundings make it a popular nature attraction."),
          es: cleanPlainText("Robber's Cave es una cueva natural cerca de Dehradun atravesada por un pequeño río. Sus formaciones rocosas y su ambiente fresco la convierten en una interesante atracción natural."),
          pt: cleanPlainText("Robber's Cave é uma caverna natural próxima a Dehradun, atravessada por um pequeno rio. Suas formações rochosas e seu ambiente fresco fazem dela uma atração natural interessante.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Sahastradhara", es: "Sahastradhara", pt: "Sahastradhara" },
        description: {
          en: cleanPlainText("Sahastradhara is a scenic natural attraction known for its waterfalls, limestone formations and peaceful surroundings."),
          es: cleanPlainText("Sahastradhara es una hermosa zona natural conocida por sus cascadas, formaciones de piedra caliza y ambiente tranquilo."),
          pt: cleanPlainText("Sahastradhara é uma atração natural conhecida por suas cachoeiras, formações calcárias e ambiente tranquilo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Tapkeshwar Temple", es: "Templo Tapkeshwar", pt: "Templo Tapkeshwar" },
        description: {
          en: cleanPlainText("Tapkeshwar Temple is a revered Shiva temple located near a natural cave, offering visitors a combination of spirituality and natural scenery."),
          es: cleanPlainText("El templo Tapkeshwar está dedicado a Shiva y se encuentra cerca de una cueva natural, combinando espiritualidad y naturaleza."),
          pt: cleanPlainText("O Templo Tapkeshwar é dedicado a Shiva e está localizado próximo a uma caverna natural, combinando espiritualidade e natureza.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Forest Research Institute", es: "Forest Research Institute", pt: "Forest Research Institute" },
        description: {
          en: cleanPlainText("The Forest Research Institute is an impressive heritage-style institution surrounded by landscaped grounds and is one of Dehradun's notable architectural attractions."),
          es: cleanPlainText("El Forest Research Institute es una destacada institución de estilo patrimonial rodeada de jardines y una de las atracciones arquitectónicas de Dehradun."),
          pt: cleanPlainText("O Forest Research Institute é uma importante instituição de arquitetura histórica, cercada por jardins e considerada uma atração arquitetônica de Dehradun.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Mindrolling Monastery", es: "Monasterio Mindrolling", pt: "Mosteiro Mindrolling" },
        description: {
          en: cleanPlainText("Mindrolling Monastery is an important Buddhist centre known for its peaceful environment, traditional architecture and large stupa."),
          es: cleanPlainText("El Monasterio Mindrolling es un importante centro budista conocido por su ambiente tranquilo, arquitectura tradicional y gran estupa."),
          pt: cleanPlainText("O Mosteiro Mindrolling é um importante centro budista conhecido por seu ambiente tranquilo, arquitetura tradicional e grande estupa.")
        }
      }
    ]
  },

  // 2. MUSSOORIE
  {
    id: "mussoorie",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 2,
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
    slug: { en: "mussoorie", es: "mussoorie", pt: "mussoorie" },
    name: { en: "Mussoorie", es: "Mussoorie", pt: "Mussoorie" },
    description: {
      en: "<p><strong>Mussoorie</strong> is one of Uttarakhand's most famous hill stations, offering mountain views, green valleys, waterfalls, walking trails and a pleasant Himalayan atmosphere.</p>",
      es: "<p><strong>Mussoorie</strong> es una de las estaciones de montaña más famosas de Uttarakhand, conocida por sus vistas del Himalaya, valles verdes, cascadas y senderos panorámicos.</p>",
      pt: "<p><strong>Mussoorie</strong> é uma das cidades montanhosas mais famosas de Uttarakhand, conhecida pelas vistas do Himalaia, vales verdes, cachoeiras e trilhas panorâmicas.</p>"
    },
    overview: {
      en: `<h2>Discover Mussoorie</h2>

<p>Mussoorie is a picturesque Himalayan hill station situated on a long mountain ridge overlooking the Doon Valley. The destination is popular for leisure holidays, scenic walks, viewpoints and peaceful mountain experiences. Uttarakhand Tourism describes it as one of the country's popular hill stations and highlights its Himalayan setting and Winterline phenomenon.</p>

<p>The town's combination of colonial heritage, forested hills, waterfalls, viewpoints and lively market areas makes it suitable for families, couples and nature travellers.</p>`,
      es: `<h2>Descubre Mussoorie</h2>

<p>Mussoorie es una pintoresca estación de montaña del Himalaya situada sobre una cresta con vistas al valle de Doon. Es popular por sus paseos, miradores, cascadas y paisajes montañosos.</p>`,
      pt: `<h2>Conheça Mussoorie</h2>

<p>Mussoorie é uma cidade montanhosa do Himalaia localizada sobre uma cordilheira com vistas para o Vale de Doon. É conhecida por seus passeios, mirantes, cachoeiras e belas paisagens.</p>`
    },
    seoTitle: {
      en: "Mussoorie Tourism – Kempty Falls, Mall Road & Himalayan Hill Station",
      es: "Turismo de Mussoorie – Kempty Falls, Mall Road y Estación de Montaña",
      pt: "Turismo de Mussoorie – Kempty Falls, Mall Road e Cidade Montanhosa"
    },
    seoDesc: {
      en: "Explore Mussoorie, the Queen of Hills in Uttarakhand. Visit Kempty Falls, Mall Road, Gun Hill, Lal Tibba and Company Garden.",
      es: "Explora Mussoorie, la reina de las colinas de Uttarakhand. Visita Kempty Falls, Mall Road, Gun Hill, Lal Tibba y Company Garden.",
      pt: "Explore Mussoorie em Uttarakhand. Visite Kempty Falls, Mall Road, Gun Hill, Lal Tibba e Company Garden."
    },
    seoKeywords: {
      en: "Mussoorie, Mussoorie Tourism, Kempty Falls, Mall Road Mussoorie, Gun Hill, Lal Tibba, Company Garden",
      es: "Mussoorie, Turismo de Mussoorie, Kempty Falls, Mall Road, Gun Hill, Lal Tibba",
      pt: "Mussoorie, Turismo de Mussoorie, Kempty Falls, Mall Road, Gun Hill, Lal Tibba"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Mall Road", es: "Mall Road", pt: "Mall Road" },
        description: {
          en: cleanPlainText("The lively central street of Mussoorie, ideal for shopping, cafés, local food and evening walks."),
          es: cleanPlainText("La calle principal y animada de Mussoorie, ideal para compras, cafés, comida local y paseos."),
          pt: cleanPlainText("A movimentada rua central de Mussoorie, ideal para compras, cafés, comida local e caminhadas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Kempty Falls", es: "Cascadas Kempty", pt: "Cachoeiras Kempty" },
        description: {
          en: cleanPlainText("A popular waterfall surrounded by hills and greenery, offering a refreshing stop during a Mussoorie trip."),
          es: cleanPlainText("Una cascada popular rodeada de colinas y vegetación, ideal para una parada refrescante."),
          pt: cleanPlainText("Uma cachoeira popular cercada por colinas e vegetação, perfeita para uma parada refrescante.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Gun Hill", es: "Gun Hill", pt: "Gun Hill" },
        description: {
          en: cleanPlainText("One of Mussoorie's famous viewpoints, offering expansive views of the surrounding Himalayan landscape."),
          es: cleanPlainText("Uno de los miradores famosos de Mussoorie, con amplias vistas de las montañas del Himalaya."),
          pt: cleanPlainText("Um dos famosos mirantes de Mussoorie, com amplas vistas das montanhas do Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Lal Tibba", es: "Lal Tibba", pt: "Lal Tibba" },
        description: {
          en: cleanPlainText("Lal Tibba is a scenic high point known for panoramic mountain views and a peaceful atmosphere."),
          es: cleanPlainText("Lal Tibba es un punto panorámico conocido por sus vistas de las montañas y su ambiente tranquilo."),
          pt: cleanPlainText("Lal Tibba é um ponto panorâmico conhecido pelas vistas das montanhas e pelo ambiente tranquilo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Company Garden", es: "Jardín Company", pt: "Jardim Company" },
        description: {
          en: cleanPlainText("A landscaped garden with flowers, greenery and recreational spaces, suitable for a relaxed family visit."),
          es: cleanPlainText("Un jardín paisajístico con flores, vegetación y espacios recreativos, ideal para familias."),
          pt: cleanPlainText("Um jardim paisagístico com flores, áreas verdes e espaços recreativos, adequado para famílias.")
        }
      }
    ]
  },

  // 3. RISHIKESH
  {
    id: "rishikesh",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 3,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    slug: { en: "rishikesh", es: "rishikesh", pt: "rishikesh" },
    name: { en: "Rishikesh", es: "Rishikesh", pt: "Rishikesh" },
    description: {
      en: "<p><strong>Rishikesh</strong> is a major spiritual and adventure destination on the banks of the Ganga, famous for yoga, meditation, ashrams, river rafting and Himalayan experiences.</p>",
      es: "<p><strong>Rishikesh</strong> es un importante destino espiritual y de aventura situado junto al río Ganges, famoso por el yoga, la meditación, los ashrams y el rafting.</p>",
      pt: "<p><strong>Rishikesh</strong> é um importante destino espiritual e de aventura às margens do rio Ganges, famoso por yoga, meditação, ashrams e rafting.</p>"
    },
    overview: {
      en: `<h2>Discover Rishikesh</h2>

<p>Rishikesh combines spirituality, wellness and adventure against the backdrop of the Himalayan foothills. The Ganga flows through the destination, while ashrams and yoga centres attract travellers interested in meditation and traditional wellness practices.</p>

<p>For adventure lovers, Rishikesh is well known for white-water rafting and other outdoor activities. Uttarakhand Tourism identifies the destination as an important yoga, pilgrimage and adventure hub.</p>`,
      es: `<h2>Descubre Rishikesh</h2>

<p>Rishikesh combina espiritualidad, bienestar y aventura en las estribaciones del Himalaya. El río Ganges atraviesa la ciudad y sus numerosos ashrams y centros de yoga atraen a viajeros de todo el mundo.</p>`,
      pt: `<h2>Conheça Rishikesh</h2>

<p>Rishikesh combina espiritualidade, bem-estar e aventura aos pés do Himalaia. O rio Ganges atravessa a região, enquanto seus ashrams e centros de yoga atraem visitantes interessados em meditação e bem-estar.</p>`
    },
    seoTitle: {
      en: "Rishikesh Tourism – Yoga Capital, River Rafting & Laxman Jhula",
      es: "Turismo de Rishikesh – Capital del Yoga, Rafting y Laxman Jhula",
      pt: "Turismo de Rishikesh – Capital do Yoga, Rafting e Laxman Jhula"
    },
    seoDesc: {
      en: "Discover Rishikesh, the Yoga Capital of the World in Uttarakhand. Explore Laxman Jhula, Ram Jhula, Triveni Ghat Ganga Aarti, Beatles Ashram and white-water river rafting.",
      es: "Descubre Rishikesh, la capital mundial del yoga en Uttarakhand. Visita Laxman Jhula, Ram Jhula, Triveni Ghat, Beatles Ashram y practica rafting.",
      pt: "Descubra Rishikesh, a capital mundial do yoga em Uttarakhand. Visite Laxman Jhula, Ram Jhula, Triveni Ghat, Beatles Ashram e pratique rafting."
    },
    seoKeywords: {
      en: "Rishikesh, Rishikesh Tourism, Yoga Capital, Laxman Jhula, Ram Jhula, Triveni Ghat, Ganga Aarti, Beatles Ashram, River Rafting Rishikesh",
      es: "Rishikesh, Turismo de Rishikesh, Capital del Yoga, Laxman Jhula, Ram Jhula, Ganga Aarti, Beatles Ashram, Rafting",
      pt: "Rishikesh, Turismo de Rishikesh, Capital do Yoga, Laxman Jhula, Ram Jhula, Ganga Aarti, Beatles Ashram, Rafting"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Laxman Jhula", es: "Laxman Jhula", pt: "Laxman Jhula" },
        description: {
          en: cleanPlainText("A historic landmark associated with the spiritual identity of Rishikesh and the Ganga."),
          es: cleanPlainText("Un famoso punto de referencia asociado con la identidad espiritual de Rishikesh y el Ganges."),
          pt: cleanPlainText("Um famoso ponto de referência associado à identidade espiritual de Rishikesh e ao Ganges.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Ram Jhula", es: "Ram Jhula", pt: "Ram Jhula" },
        description: {
          en: cleanPlainText("A suspension bridge offering views of the river and surrounding spiritual areas."),
          es: cleanPlainText("Un puente colgante con vistas al río y a las zonas espirituales cercanas."),
          pt: cleanPlainText("Uma ponte suspensa com vistas para o rio e áreas espirituais próximas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Triveni Ghat", es: "Triveni Ghat", pt: "Triveni Ghat" },
        description: {
          en: cleanPlainText("A sacred riverside ghat famous for evening Ganga Aarti and spiritual gatherings."),
          es: cleanPlainText("Un ghat sagrado conocido por el Ganga Aarti de la tarde y las ceremonias espirituales."),
          pt: cleanPlainText("Um ghat sagrado conhecido pelo Ganga Aarti à noite e pelas cerimônias espirituais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Beatles Ashram", es: "Beatles Ashram", pt: "Beatles Ashram" },
        description: {
          en: cleanPlainText("A peaceful ashram complex known for its artistic atmosphere, meditation heritage and colourful artwork."),
          es: cleanPlainText("Un complejo de ashram conocido por su ambiente artístico, tradición de meditación y murales."),
          pt: cleanPlainText("Um complexo de ashram conhecido por sua atmosfera artística, tradição de meditação e murais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Neer Garh Waterfall", es: "Cascada Neer Garh", pt: "Cachoeira Neer Garh" },
        description: {
          en: cleanPlainText("A scenic waterfall surrounded by forested hills and a popular stop for nature lovers."),
          es: cleanPlainText("Una cascada rodeada de bosques y colinas, popular entre los amantes de la naturaleza."),
          pt: cleanPlainText("Uma cachoeira cercada por florestas e colinas, popular entre os amantes da natureza.")
        }
      }
    ]
  },

  // 4. HARIDWAR
  {
    id: "haridwar",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 4,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
    slug: { en: "haridwar", es: "haridwar", pt: "haridwar" },
    name: { en: "Haridwar", es: "Haridwar", pt: "Haridwar" },
    description: {
      en: "<p><strong>Haridwar</strong> is one of India's important pilgrimage cities, located on the banks of the Ganga and known for temples, ghats, spiritual ceremonies and its connection with major pilgrimage circuits.</p>",
      es: "<p><strong>Haridwar</strong> es una de las ciudades de peregrinación más importantes de la India, situada a orillas del Ganges y conocida por sus templos, ghats y ceremonias espirituales.</p>",
      pt: "<p><strong>Haridwar</strong> é uma das importantes cidades de peregrinação da Índia, localizada às margens do Ganges e conhecida por seus templos, ghats e cerimônias espirituais.</p>"
    },
    overview: {
      en: `<h2>Explore Haridwar</h2>

<p>Haridwar is a major spiritual destination where the Ganga enters the plains. The city is filled with temples, ghats and pilgrimage sites, creating a distinctive religious and cultural atmosphere.</p>

<p>Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple and Kankhal are among the important places associated with the city. Haridwar is also connected with major pilgrimage and festival traditions.</p>`,
      es: `<h2>Explora Haridwar</h2>

<p>Haridwar es un destino espiritual fundamental donde el sagrado río Ganges entra en las llanuras. La ciudad está repleta de templos, ghats y lugares sagrados.</p>`,
      pt: `<h2>Explore Haridwar</h2>

<p>Haridwar é um destino espiritual de grande relevância onde o sagrado rio Ganges atinge as planícies. A cidade é repleta de templos, ghats e locais de peregrinação.</p>`
    },
    seoTitle: {
      en: "Haridwar Tourism – Har Ki Pauri, Ganga Aarti & Holy Pilgrimage",
      es: "Turismo de Haridwar – Har Ki Pauri, Ganga Aarti y Peregrinación Sagrada",
      pt: "Turismo de Haridwar – Har Ki Pauri, Ganga Aarti e Peregrinação Sagrada"
    },
    seoDesc: {
      en: "Discover Haridwar in Uttarakhand. Visit Har Ki Pauri ghat for evening Ganga Aarti, Mansa Devi Temple, Chandi Devi Temple, Daksh Mahadev and historic Kankhal.",
      es: "Descubre Haridwar en Uttarakhand. Visita el ghat Har Ki Pauri para el Ganga Aarti, el templo Mansa Devi, Chandi Devi y el histórico Kankhal.",
      pt: "Descubra Haridwar em Uttarakhand. Visite o ghat Har Ki Pauri para o Ganga Aarti, o Templo Mansa Devi, Chandi Devi e o histórico Kankhal."
    },
    seoKeywords: {
      en: "Haridwar, Haridwar Tourism, Har Ki Pauri, Ganga Aarti Haridwar, Mansa Devi Temple, Chandi Devi Temple, Kankhal",
      es: "Haridwar, Turismo de Haridwar, Har Ki Pauri, Ganga Aarti, Templo Mansa Devi, Templo Chandi Devi",
      pt: "Haridwar, Turismo de Haridwar, Har Ki Pauri, Ganga Aarti, Templo Mansa Devi, Templo Chandi Devi"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Har Ki Pauri", es: "Har Ki Pauri", pt: "Har Ki Pauri" },
        description: {
          en: cleanPlainText("Har Ki Pauri is a sacred riverside ghat famous for the evening Ganga Aarti, spiritual gatherings and ritual dips in the holy Ganga."),
          es: cleanPlainText("Har Ki Pauri es un ghat sagrado a orillas del Ganges, conocido por el espectáculo vespertino de Ganga Aarti y las ceremonias espirituales."),
          pt: cleanPlainText("Har Ki Pauri é um ghat sagrado às margens do Ganges, famoso pela cerimônia noturna de Ganga Aarti e encontros espirituais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Mansa Devi Temple", es: "Templo Mansa Devi", pt: "Templo Mansa Devi" },
        description: {
          en: cleanPlainText("Mansa Devi Temple is a revered hilltop temple dedicated to Goddess Mansa, accessible by ropeway or pilgrimage route with city views."),
          es: cleanPlainText("El templo Mansa Devi es un lugar venerado en la cima de una colina, accesible por teleférico con hermosas vistas."),
          pt: cleanPlainText("O Templo Mansa Devi é um reverenciado templo no alto de uma colina, acessível por teleférico com vista para a cidade.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Chandi Devi Temple", es: "Templo Chandi Devi", pt: "Templo Chandi Devi" },
        description: {
          en: cleanPlainText("Chandi Devi Temple is situated on Neel Parvat on the eastern bank of the Ganga, offering panoramic mountain and city landscapes."),
          es: cleanPlainText("El templo Chandi Devi está situado en Neel Parvat, ofreciendo vistas panorámicas del río y las montañas."),
          pt: cleanPlainText("O Templo Chandi Devi está situado em Neel Parvat, oferecendo vistas panorâmicas sobre a cidade e as montanhas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Daksh Mahadev Temple", es: "Templo Daksh Mahadev", pt: "Templo Daksh Mahadev" },
        description: {
          en: cleanPlainText("Daksh Mahadev Temple is an ancient temple complex in Kankhal dedicated to Lord Shiva and associated with Hindu mythology."),
          es: cleanPlainText("El templo Daksh Mahadev es un importante complejo de templos en Kankhal dedicado al Dios Shiva."),
          pt: cleanPlainText("O Templo Daksh Mahadev é um importante complexo de templos em Kankhal dedicado ao Senhor Shiva.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Kankhal", es: "Kankhal", pt: "Kankhal" },
        description: {
          en: cleanPlainText("Kankhal is a historic spiritual precinct near Haridwar known for ancient temples, ashrams and deep religious heritage."),
          es: cleanPlainText("Kankhal es una zona histórica de gran importancia espiritual repleta de antiguos templos y ashrams."),
          pt: cleanPlainText("Kankhal é uma área histórica de grande importância espiritual com templos antigos e patrimônio religioso.")
        }
      }
    ]
  },

  // 5. NAINITAL
  {
    id: "nainital",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 5,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    slug: { en: "nainital", es: "nainital", pt: "nainital" },
    name: { en: "Nainital", es: "Nainital", pt: "Nainital" },
    description: {
      en: "<p><strong>Nainital</strong> is a famous Himalayan lake town centred around Naini Lake and surrounded by forested hills. It is known for boating, viewpoints, temples and mountain scenery.</p>",
      es: "<p><strong>Nainital</strong> es una famosa ciudad lacustre del Himalaya, centrada alrededor del lago Naini y rodeada de colinas boscosas.</p>",
      pt: "<p><strong>Nainital</strong> é uma famosa cidade lacustre do Himalaia, centrada ao redor do Lago Naini e cercada por colinas arborizadas.</p>"
    },
    overview: {
      en: `<h2>Discover Nainital</h2>

<p>Nainital is one of Uttarakhand's best-known hill destinations. The town is built around the crescent-shaped Naini Lake and is surrounded by seven hills. Visitors can enjoy boating, scenic viewpoints, forest walks and cultural attractions.</p>

<p>The destination also provides access to nearby lakes and mountain attractions. Uttarakhand Tourism highlights Naini Lake, Naina Devi Temple, Tiffin Top, Snow View Point and the High Altitude Zoo among its attractions.</p>`,
      es: `<h2>Descubre Nainital</h2>

<p>Nainital es una de las estaciones de montaña más conocidas de Uttarakhand. La ciudad se extiende alrededor del lago Naini en forma de media luna y está rodeada de colinas boscosas.</p>`,
      pt: `<h2>Conheça Nainital</h2>

<p>Nainital é um dos destinos de montanha mais renomados de Uttarakhand. A cidade contorna o Lago Naini e é rodeada por sete colinas arborizadas.</p>`
    },
    seoTitle: {
      en: "Nainital Tourism – Naini Lake, Boating & Himalayan Lake Town",
      es: "Turismo de Nainital – Lago Naini, Paseos en Barco y Himalaya",
      pt: "Turismo de Nainital – Lago Naini, Passeios de Barco e Himalaia"
    },
    seoDesc: {
      en: "Explore Nainital in Uttarakhand. Visit Naini Lake, Naina Devi Temple, Snow View Point, Tiffin Top and Eco Cave Gardens.",
      es: "Explora Nainital en Uttarakhand. Visita el lago Naini, el templo Naina Devi, Snow View Point, Tiffin Top y los jardines Eco Cave.",
      pt: "Explore Nainital em Uttarakhand. Visite o Lago Naini, o Templo Naina Devi, Snow View Point, Tiffin Top e Eco Cave Gardens."
    },
    seoKeywords: {
      en: "Nainital, Nainital Tourism, Naini Lake, Boating Nainital, Naina Devi Temple, Snow View Point, Tiffin Top, Eco Cave Gardens",
      es: "Nainital, Turismo de Nainital, Lago Naini, Templo Naina Devi, Snow View Point, Tiffin Top",
      pt: "Nainital, Turismo de Nainital, Lago Naini, Templo Naina Devi, Snow View Point, Tiffin Top"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Naini Lake", es: "Lago Naini", pt: "Lago Naini" },
        description: {
          en: cleanPlainText("The central attraction of Nainital, surrounded by mountains and popular for boating."),
          es: cleanPlainText("La principal atracción de Nainital, rodeada de montañas y conocida por sus paseos en barco."),
          pt: cleanPlainText("A principal atração de Nainital, cercada por montanhas e famosa pelos passeios de barco.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Naina Devi Temple", es: "Templo Naina Devi", pt: "Templo Naina Devi" },
        description: {
          en: cleanPlainText("A revered temple located near Naini Lake and an important spiritual attraction."),
          es: cleanPlainText("Un templo venerado situado cerca del lago Naini y una importante atracción espiritual."),
          pt: cleanPlainText("Um templo reverenciado localizado próximo ao Lago Naini e uma importante atração espiritual.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Snow View Point", es: "Snow View Point", pt: "Snow View Point" },
        description: {
          en: cleanPlainText("A scenic viewpoint offering panoramic views towards the Himalayan mountain ranges."),
          es: cleanPlainText("Un mirador panorámico con vistas hacia las cadenas montañosas del Himalaya."),
          pt: cleanPlainText("Um mirante panorâmico com vistas para as cadeias montanhosas do Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Tiffin Top", es: "Tiffin Top", pt: "Tiffin Top" },
        description: {
          en: cleanPlainText("A popular viewpoint and picnic destination overlooking Nainital and its surrounding hills."),
          es: cleanPlainText("Un popular mirador y lugar de picnic con vistas sobre Nainital y sus colinas."),
          pt: cleanPlainText("Um famoso mirante e local para piquenique com vistas de Nainital e das colinas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Eco Cave Gardens", es: "Jardines Eco Cave", pt: "Eco Cave Gardens" },
        description: {
          en: cleanPlainText("A group of interconnected natural caves offering an entertaining experience for visitors."),
          es: cleanPlainText("Un conjunto de cuevas naturales conectadas que ofrece una experiencia interesante para los visitantes."),
          pt: cleanPlainText("Um conjunto de cavernas naturais interligadas que proporciona uma experiência interessante aos visitantes.")
        }
      }
    ]
  },

  // 6. ALMORA
  {
    id: "almora",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 6,
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
    slug: { en: "almora", es: "almora", pt: "almora" },
    name: { en: "Almora", es: "Almora", pt: "Almora" },
    description: {
      en: "<p><strong>Almora</strong> is a picturesque Kumaon hill town known for Himalayan views, pine and oak forests, traditional culture, handicrafts and historic temples.</p>",
      es: "<p><strong>Almora</strong> es una pintoresca ciudad montañosa de Kumaon conocida por sus vistas del Himalaya, bosques, cultura tradicional, artesanía y templos.</p>",
      pt: "<p><strong>Almora</strong> é uma pitoresca cidade montanhosa de Kumaon conhecida pelas vistas do Himalaia, florestas, cultura tradicional, artesanato e templos.</p>"
    },
    overview: {
      en: `<h2>Explore Almora</h2>

<p>Almora offers a quieter Himalayan experience with a strong connection to Kumaoni culture and heritage. The town is surrounded by pine and oak forests and offers beautiful mountain views.</p>

<p>Its cultural attractions include traditional handicrafts, temples and historic sites. Almora also acts as a starting point for several trekking and nature destinations.</p>`,
      es: `<h2>Explora Almora</h2>

<p>Almora ofrece una tranquila experiencia en el Himalaya con un profundo vínculo con la cultura y tradiciones de Kumaon.</p>`,
      pt: `<h2>Explore Almora</h2>

<p>Almora oferece uma experiência serena no Himalaia com forte ligação à cultura e ao patrimônio de Kumaon.</p>`
    },
    seoTitle: {
      en: "Almora Tourism – Kumaon Hills, Kasar Devi & Sun Temple",
      es: "Turismo de Almora – Colinas de Kumaon, Kasar Devi y Templo del Sol",
      pt: "Turismo de Almora – Colinas de Kumaon, Kasar Devi e Templo do Sol"
    },
    seoDesc: {
      en: "Explore Almora hill station in Uttarakhand. Visit Kasar Devi Temple, Bright End Corner, Chitai Golu Devta, Katarmal Sun Temple and Lakhudiyar Caves.",
      es: "Explora la estación de montaña de Almora en Uttarakhand. Visita el templo Kasar Devi, Bright End Corner, Katarmal Sun Temple y Lakhudiyar Caves.",
      pt: "Explore a cidade de montanha de Almora em Uttarakhand. Visite o Templo Kasar Devi, Bright End Corner, Katarmal Sun Temple e Lakhudiyar Caves."
    },
    seoKeywords: {
      en: "Almora, Almora Tourism, Kasar Devi Temple, Bright End Corner, Chitai Golu Devta, Katarmal Sun Temple, Lakhudiyar Caves",
      es: "Almora, Turismo de Almora, Templo Kasar Devi, Bright End Corner, Templo del Sol Katarmal",
      pt: "Almora, Turismo de Almora, Templo Kasar Devi, Bright End Corner, Templo do Sol Katarmal"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Kasar Devi Temple", es: "Templo Kasar Devi", pt: "Templo Kasar Devi" },
        description: {
          en: cleanPlainText("A peaceful hilltop temple area known for its spiritual atmosphere and Himalayan views."),
          es: cleanPlainText("Una zona de templo en las colinas conocida por su ambiente espiritual y vistas del Himalaya."),
          pt: cleanPlainText("Uma área de templo nas montanhas conhecida por sua atmosfera espiritual e vistas do Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Bright End Corner", es: "Bright End Corner", pt: "Bright End Corner" },
        description: {
          en: cleanPlainText("A popular viewpoint for sunrise and sunset over the Himalayan landscape."),
          es: cleanPlainText("Un mirador popular para contemplar el amanecer y el atardecer sobre el Himalaya."),
          pt: cleanPlainText("Um famoso mirante para observar o nascer e o pôr do sol sobre o Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Chitai Golu Devta Temple", es: "Templo Chitai Golu Devta", pt: "Templo Chitai Golu Devta" },
        description: {
          en: cleanPlainText("A distinctive Kumaoni temple known for its traditional religious practices."),
          es: cleanPlainText("Un templo tradicional de Kumaon conocido por sus prácticas religiosas particulares."),
          pt: cleanPlainText("Um templo tradicional de Kumaon conhecido por suas práticas religiosas características.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Katarmal Sun Temple", es: "Templo del Sol Katarmal", pt: "Templo do Sol Katarmal" },
        description: {
          en: cleanPlainText("A historic hill temple dedicated to the Sun God and an important heritage attraction near Almora."),
          es: cleanPlainText("Un antiguo templo dedicado al Dios Sol y un importante lugar patrimonial cerca de Almora."),
          pt: cleanPlainText("Um antigo templo dedicado ao Deus Sol e um importante patrimônio próximo a Almora.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Lakhudiyar Caves", es: "Cuevas de Lakhudiyar", pt: "Cavernas de Lakhudiyar" },
        description: {
          en: cleanPlainText("A prehistoric site known for ancient rock paintings and archaeological importance."),
          es: cleanPlainText("Un sitio prehistórico conocido por sus pinturas rupestres y su importancia arqueológica."),
          pt: cleanPlainText("Um sítio pré-histórico conhecido por suas pinturas rupestres e importância arqueológica.")
        }
      }
    ]
  },

  // 7. AULI
  {
    id: "auli",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 7,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    slug: { en: "auli", es: "auli", pt: "auli" },
    name: { en: "Auli", es: "Auli", pt: "Auli" },
    description: {
      en: "<p><strong>Auli</strong> is a high-altitude Himalayan destination famous for skiing, snow-covered landscapes, alpine meadows and panoramic mountain views. It is also a gateway to trekking areas and Himalayan national parks.</p>",
      es: "<p><strong>Auli</strong> es un destino de gran altitud del Himalaya famoso por el esquí, los paisajes nevados, los prados alpinos y las vistas panorámicas de las montañas.</p>",
      pt: "<p><strong>Auli</strong> é um destino de alta altitude no Himalaia famoso pelo esqui, paisagens nevadas, prados alpinos e vistas panorâmicas das montanhas.</p>"
    },
    overview: {
      en: `<h2>Discover Auli</h2>

<p>Auli is one of India's prominent skiing destinations. Located at around 2,800 metres, it is surrounded by oak and conifer forests and offers views of some of the highest Himalayan peaks.</p>

<p>During winter, snow-covered slopes attract skiing enthusiasts, while warmer months provide opportunities for trekking and exploring alpine landscapes. Uttarakhand Tourism also highlights Auli's ropeway connection and trekking routes towards Gorson Bugyal and other Himalayan areas.</p>`,
      es: `<h2>Descubre Auli</h2>

<p>Auli es uno de los destinos de esquí más destacados de la India. Situado a 2.800 metros de altitud, está rodeado de bosques de robles y ofrece espectaculares vistas de las cumbres del Himalaya.</p>`,
      pt: `<h2>Conheça Auli</h2>

<p>Auli é um dos principais destinos de esqui da Índia. Localizado a cerca de 2.800 metros de altitude, é rodeado por florestas e oferece vistas deslumbrantes dos picos do Himalaia.</p>`
    },
    seoTitle: {
      en: "Auli Tourism – Skiing Resort, Ropeway & Nanda Devi Views",
      es: "Turismo de Auli – Centro de Esquí, Teleférico y Nanda Devi",
      pt: "Turismo de Auli – Estação de Esqui, Teleférico e Nanda Devi"
    },
    seoDesc: {
      en: "Discover Auli ski resort in Uttarakhand. Explore Auli ski slopes, Auli ropeway from Joshimath, Gorson Bugyal alpine meadow and Nanda Devi peak views.",
      es: "Descubre la estación de esquí de Auli en Uttarakhand. Disfruta de las pistas de esquí, el teleférico de Auli, el prado de Gorson Bugyal y las vistas a Nanda Devi.",
      pt: "Descubra a estação de esqui de Auli em Uttarakhand. Curta as pistas de esqui, o teleférico de Auli, o prado alpino de Gorson Bugyal e a vista de Nanda Devi."
    },
    seoKeywords: {
      en: "Auli, Auli Tourism, Skiing in Auli, Auli Ropeway, Gorson Bugyal, Chattrakund, Nanda Devi Viewpoint",
      es: "Auli, Turismo de Auli, Esquí en Auli, Teleférico de Auli, Gorson Bugyal, Nanda Devi",
      pt: "Auli, Turismo de Auli, Esqui em Auli, Teleférico de Auli, Gorson Bugyal, Nanda Devi"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
        name: { en: "Auli Ski Slopes", es: "Pistas de Esquí de Auli", pt: "Pistas de Esqui de Auli" },
        description: {
          en: cleanPlainText("Snow-covered slopes that attract beginners, professionals and winter adventure enthusiasts."),
          es: cleanPlainText("Pendientes cubiertas de nieve ideales para principiantes, profesionales y amantes de los deportes de invierno."),
          pt: cleanPlainText("Encostas cobertas de neve que atraem iniciantes, profissionais e amantes dos esportes de inverno.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Auli Ropeway", es: "Teleférico de Auli", pt: "Teleférico de Auli" },
        description: {
          en: cleanPlainText("A scenic ropeway experience connecting the mountain areas around Joshimath and Auli."),
          es: cleanPlainText("Un teleférico panorámico que conecta las zonas montañosas de Joshimath y Auli."),
          pt: cleanPlainText("Um teleférico panorâmico que conecta as áreas montanhosas de Joshimath e Auli.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Gorson Bugyal", es: "Gorson Bugyal", pt: "Gorson Bugyal" },
        description: {
          en: cleanPlainText("A beautiful alpine meadow offering trekking opportunities and wide Himalayan views."),
          es: cleanPlainText("Un hermoso prado alpino ideal para trekking y vistas amplias del Himalaya."),
          pt: cleanPlainText("Um belo prado alpino ideal para trekking e vistas amplas do Himalaia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Chattrakund", es: "Chattrakund", pt: "Chattrakund" },
        description: {
          en: cleanPlainText("A peaceful mountain lake surrounded by forest and alpine landscapes."),
          es: cleanPlainText("Un tranquilo lago de montaña rodeado de bosques y paisajes alpinos."),
          pt: cleanPlainText("Um tranquilo lago de montanha cercado por florestas e paisagens alpinas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Nanda Devi Viewpoint", es: "Mirador Nanda Devi", pt: "Mirante Nanda Devi" },
        description: {
          en: cleanPlainText("A scenic area offering spectacular views towards the Himalayan peaks, including the Nanda Devi region."),
          es: cleanPlainText("Una zona panorámica con espectaculares vistas hacia las montañas del Himalaya y la región de Nanda Devi."),
          pt: cleanPlainText("Uma área panorâmica com vistas espetaculares das montanhas do Himalaia e da região de Nanda Devi.")
        }
      }
    ]
  },

  // 8. JIM CORBETT NATIONAL PARK
  {
    id: "jim-corbett-national-park",
    stateId: "uttarakhand",
    isPublished: true,
    isDeleted: false,
    displayOrder: 8,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
    slug: { en: "jim-corbett-national-park", es: "jim-corbett-national-park", pt: "jim-corbett-national-park" },
    name: { en: "Jim Corbett National Park", es: "Parque Nacional Jim Corbett", pt: "Parque Nacional Jim Corbett" },
    description: {
      en: "<p><strong>Jim Corbett National Park</strong> is one of Uttarakhand's most important wildlife destinations and India's first national park, established in 1936. Located in the Himalayan foothills, the park is known for its forests, rivers and diverse wildlife, including tigers, elephants, deer and numerous bird species.</p>",
      es: "<p><strong>El Parque Nacional Jim Corbett</strong> es uno de los principales destinos de vida silvestre de Uttarakhand y fue establecido en 1936. Situado en las estribaciones del Himalaya, es conocido por sus bosques, ríos y diversidad de fauna.</p>",
      pt: "<p><strong>O Parque Nacional Jim Corbett</strong> é um dos principais destinos de vida selvagem de Uttarakhand e foi criado em 1936. Localizado aos pés do Himalaia, é conhecido por suas florestas, rios e grande diversidade de animais.</p>"
    },
    overview: {
      en: `<h2>Jim Corbett National Park</h2>

<p>Jim Corbett National Park is one of Uttarakhand's most important wildlife destinations and India's first national park, established in 1936. Located in the Himalayan foothills, the park is known for its forests, rivers and diverse wildlife, including tigers, elephants, deer and numerous bird species.</p>

<p>A wildlife safari through the park provides opportunities to explore its natural landscapes and observe wildlife in its natural habitat. The destination is especially attractive to wildlife photographers, nature lovers and adventure travellers.</p>`,
      es: `<h2>Parque Nacional Jim Corbett</h2>

<p>El Parque Nacional Jim Corbett es uno de los principales destinos de vida silvestre de Uttarakhand y fue establecido en 1936. Situado en las estribaciones del Himalaya, es conocido por sus bosques, ríos y diversidad de fauna.</p>`,
      pt: `<h2>Parque Nacional Jim Corbett</h2>

<p>O Parque Nacional Jim Corbett é um dos principais destinos de vida selvagem de Uttarakhand e foi criado em 1936. Localizado aos pés do Himalaia, é conhecido por suas florestas, rios e grande diversidade de animais.</p>`
    },
    seoTitle: {
      en: "Jim Corbett National Park Tourism – Tiger Safari & Wildlife",
      es: "Turismo del Parque Nacional Jim Corbett – Safari de Tigres y Fauna",
      pt: "Turismo do Parque Nacional Jim Corbett – Safári de Tigres e Vida Selvagem"
    },
    seoDesc: {
      en: "Explore Jim Corbett National Park in Uttarakhand. Experience Tiger Safaris, Dhikala zone, Corbett Waterfall, Sitabani forest and birdwatching.",
      es: "Explora el Parque Nacional Jim Corbett en Uttarakhand. Vive safaris de tigres, recorre la zona de Dhikala, la cascada Corbett y Sitabani.",
      pt: "Explore o Parque Nacional Jim Corbett em Uttarakhand. Viva safáris de tigres, a zona de Dhikala, a cachoeira Corbett e Sitabani."
    },
    seoKeywords: {
      en: "Jim Corbett National Park, Corbett Tourism, Tiger Safari Corbett, Dhikala Corbett, Corbett Waterfall, Sitabani, Uttarakhand Wildlife",
      es: "Parque Nacional Jim Corbett, Safari de Tigres Corbett, Dhikala, Cascada Corbett, Sitabani",
      pt: "Parque Nacional Jim Corbett, Safári de Tigres Corbett, Dhikala, Cachoeira Corbett, Sitabani"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Jeep Safari", es: "Jeep Safari", pt: "Jeep Safari" },
        description: {
          en: cleanPlainText("Wildlife exploration through designated safari zones within Jim Corbett National Park."),
          es: cleanPlainText("Exploración de vida silvestre a través de zonas de safari designadas."),
          pt: cleanPlainText("Exploração de vida selvagem por zonas de safári designadas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Dhikala", es: "Dhikala", pt: "Dhikala" },
        description: {
          en: cleanPlainText("Popular forest and wildlife tourism area situated deep within Corbett Tiger Reserve."),
          es: cleanPlainText("Zona popular de turismo forestal y de vida silvestre dentro de la reserva de tigres."),
          pt: cleanPlainText("Área popular de turismo ecológico e vida selvagem localizada na reserva.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Corbett Waterfall", es: "Cascada Corbett", pt: "Cachoeira Corbett" },
        description: {
          en: cleanPlainText("Scenic natural waterfall surrounded by dense teak forest landscapes."),
          es: cleanPlainText("Hermosa cascada natural rodeada de densos bosques de teca."),
          pt: cleanPlainText("Bela cachoeira natural cercada por densa vegetação florestal.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Sitabani", es: "Sitabani", pt: "Sitabani" },
        description: {
          en: cleanPlainText("Forest landscape and wildlife experience associated with ancient lore and birdwatching."),
          es: cleanPlainText("Paisaje forestal y experiencia de observación de fauna y aves."),
          pt: cleanPlainText("Paisagem florestal e experiência de observação de vida selvagem e aves.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Birdwatching", es: "Observación de Aves", pt: "Observação de Aves" },
        description: {
          en: cleanPlainText("Opportunity to observe over 600 resident and migratory bird species across riverine ecosystems."),
          es: cleanPlainText("Oportunidad para observar más de 600 especies de aves residentes y migratorias."),
          pt: cleanPlainText("Oportunidade para observar centenas de espécies de aves residentes e migratórias.")
        }
      }
    ]
  }
];

ukCitiesData.forEach(city => {
  city.content = city.overview;
  city.fullDescription = city.overview;
});

let addedCount = 0;
let updatedCount = 0;

ukCitiesData.forEach(cityData => {
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
