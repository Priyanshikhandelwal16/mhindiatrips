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

// 1. UPDATE PUNJAB STATE DATA
const stateIndex = states.findIndex(s => s.id === 'punjab');

const pbStateShortDesc = {
  en: "<p><strong>Punjab</strong> is a vibrant state in northern India known for its rich Sikh heritage, historic landmarks, colourful culture, traditional cuisine, fertile agricultural landscapes and warm hospitality. From the spiritual atmosphere of Amritsar to the royal heritage of Patiala, Punjab offers travellers a memorable combination of history, religion, culture and food.</p>",
  es: "<p><strong>Punjab</strong> es un estado vibrante del norte de la India conocido por su rico patrimonio sij, monumentos históricos, cultura colorida, gastronomía tradicional, paisajes agrícolas y hospitalidad. Desde la atmósfera espiritual de Amritsar hasta el patrimonio real de Patiala, Punjab ofrece una combinación única de historia, religión, cultura y gastronomía.</p>",
  pt: "<p><strong>Punjab</strong> é um estado vibrante do norte da Índia, conhecido por seu rico patrimônio Sikh, monumentos históricos, cultura colorida, culinária tradicional, paisagens agrícolas e hospitalidade. Da atmosfera espiritual de Amritsar ao patrimônio real de Patiala, Punjab oferece uma combinação especial de história, religião, cultura e gastronomia.</p>"
};

const pbStateLongDesc = {
  en: `<h2>Discover Punjab – The Land of Heritage, Faith and Flavours</h2>

<p>Punjab is a culturally rich destination in northern India where history, spirituality, agriculture, music, food and traditional celebrations come together. The state has a strong connection with Sikh history and is home to some of the most important Sikh religious and historical sites in India.</p>

<p><strong>Amritsar</strong> is the most prominent tourism destination in Punjab, attracting visitors to the Golden Temple, Jallianwala Bagh and the Wagah-Attari border. <strong>Patiala</strong> is known for its royal heritage and magnificent palaces, while Ludhiana represents the state's modern commercial and industrial character. Jalandhar combines religious heritage, historic landmarks and contemporary city life.</p>

<h3>Spiritual Heritage</h3>

<p>Punjab is deeply connected with Sikh history and traditions. Gurdwaras across the state provide opportunities to experience Sikh architecture, spirituality, community service and cultural traditions.</p>

<h3>History and Heritage</h3>

<p>The state has witnessed important events in Indian history, particularly during the Sikh Empire and the Indian freedom movement. Historical monuments and museums across Punjab allow travellers to explore these chapters of the past.</p>

<h3>Punjab Cuisine</h3>

<p>Punjabi cuisine is one of the most recognisable regional cuisines of India. Visitors can enjoy dishes such as Amritsari Kulcha, Sarson da Saag, Makki di Roti, Chole Bhature, Lassi and traditional Punjabi sweets.</p>

<h3>Why Visit Punjab?</h3>

<ul>
<li>Golden Temple and Sikh heritage</li>
<li>Historic monuments and museums</li>
<li>Royal palaces and forts</li>
<li>Traditional Punjabi cuisine</li>
<li>Colourful festivals and cultural traditions</li>
<li>Historic sites associated with India's freedom movement</li>
<li>Rural landscapes and agricultural experiences</li>
<li>Traditional music, dance and hospitality</li>
</ul>`,

  es: `<h2>Descubre Punjab – La Tierra de Patrimonio, Fe y Sabores</h2>

<p>Punjab es un destino con una inmensa riqueza cultural en el norte de la India, donde se unen la historia, la espiritualidad, la agricultura, la música, la gastronomía y las festividades tradicionales. El estado posee una conexión fundamental con la historia sij.</p>

<p><strong>Amritsar</strong> destaca como el principal destino turístico atrayendo a miles de visitantes al Golden Temple, Jallianwala Bagh y la frontera Wagah-Attari. <strong>Patiala</strong> es famosa por sus palacios reales, Ludhiana representa el dinamismo comercial e industrial, y Jalandhar combina legado religioso con vida urbana moderna.</p>

<h3>Patrimonio Espiritual</h3>

<p>Los Gurdwaras en todo el estado ofrecen una inmersión en la espiritualidad, la arquitectura y el servicio comunitario de la fe sij.</p>

<h3>Historia y Patrimonio</h3>

<p>Punjab ha presenciado capítulos esenciales de la historia de la India, desde el Imperio Sij hasta la lucha por la libertad.</p>

<h3>Gastronomía de Punjab</h3>

<p>Famosa en todo el mundo por platos como Amritsari Kulcha, Sarson da Saag, Makki di Roti, Chole Bhature, Lassi y dulces tradicionales.</p>

<h3>¿Por qué visitar Punjab?</h3>

<ul>
<li>El Golden Temple y el patrimonio sij</li>
<li>Monumentos y museos históricos</li>
<li>Palacios reales y fortalezas señoriales</li>
<li>Gastronomía tradicional de Punjab</li>
<li>Festivales coloridos y tradiciones culturales</li>
<li>Lugares clave de la independencia de la India</li>
<li>Paisajes agrícolas y turismo rural</li>
<li>Música, danza y cálida hospitalidad</li>
</ul>`,

  pt: `<h2>Descubra Punjab – A Terra do Patrimônio, Fé e Sabores</h2>

<p>Punjab é um destino de grande riqueza cultural no norte da Índia, onde história, espiritualidade, agricultura, música, gastronomia e festividades se encontram. O estado possui profunda ligação com a história Sikh.</p>

<p><strong>Amritsar</strong> é o principal destino turístico, atraindo visitantes ao Golden Temple, Jallianwala Bagh e à fronteira Wagah-Attari. <strong>Patiala</strong> destaca-se pelos palácios reais, Ludhiana pelo dinamismo comercial e Jalandhar pelo patrimônio religioso e vida moderna.</p>

<h3>Patrimônio Espiritual</h3>

<p>Os Gurdwaras em todo o estado oferecem imersão na espiritualidade, arquitetura e serviço comunitário da fé Sikh.</p>

<h3>História e Patrimônio</h3>

<p>Punjab foi palco de momentos cruciais da história indiana, incluindo o Império Sikh e o movimento de independência.</p>

<h3>Culinária de Punjab</h3>

<p>Reconhecida mundialmente por pratos como Amritsari Kulcha, Sarson da Saag, Makki di Roti, Chole Bhature, Lassi e doces tradicionais.</p>

<h3>Por que visitar Punjab?</h3>

<ul>
<li>Golden Temple e patrimônio Sikh</li>
<li>Monumentos e museus históricos</li>
<li>Palácios reais e fortes imponentes</li>
<li>Culinária tradicional Punjabi</li>
<li>Festivais coloridos e tradições vivas</li>
<li>Locais históricos da independência da Índia</li>
<li>Paisagens agrícolas e turismo rural</li>
<li>Música, dança e acolhedora hospitalidade</li>
</ul>`
};

const pbSeoTitle = {
  en: "Punjab Tourism – Explore Heritage, Culture, Temples & Food",
  es: "Turismo en Punjab – Patrimonio, Cultura, Templos y Gastronomía",
  pt: "Turismo em Punjab – Patrimônio, Cultura, Templos e Gastronomia"
};

const pbSeoDesc = {
  en: "Explore Punjab tourism through Amritsar, Ludhiana, Patiala and Jalandhar. Discover Sikh heritage, historic landmarks, royal architecture, culture and Punjabi cuisine.",
  es: "Descubre Punjab a través de Amritsar, Ludhiana, Patiala y Jalandhar. Explora el patrimonio sij, monumentos históricos, palacios y gastronomía tradicional.",
  pt: "Conheça Punjab através de Amritsar, Ludhiana, Patiala e Jalandhar. Explore o patrimônio Sikh, monumentos históricos, palácios e culinária tradicional."
};

const pbSeoKeywords = {
  en: "Punjab tourism, Punjab travel, places to visit in Punjab, Punjab tourist places, Punjab tour packages, Punjab heritage tourism",
  es: "turismo en Punjab, viajar a Punjab, lugares para visitar en Punjab, patrimonio de Punjab, turismo cultural en India",
  pt: "turismo em Punjab, viajar para Punjab, lugares para visitar em Punjab, patrimônio de Punjab, turismo cultural na Índia"
};

if (stateIndex !== -1) {
  states[stateIndex].name = { en: "Punjab", es: "Punjab", pt: "Punjab" };
  states[stateIndex].description = pbStateShortDesc;
  states[stateIndex].overview = pbStateLongDesc;
  states[stateIndex].content = pbStateLongDesc;
  states[stateIndex].fullDescription = pbStateLongDesc;
  states[stateIndex].seoTitle = pbSeoTitle;
  states[stateIndex].seoDesc = pbSeoDesc;
  states[stateIndex].seoKeywords = pbSeoKeywords;
  states[stateIndex].isPublished = true;
  states[stateIndex].isDeleted = false;
  states[stateIndex].updatedAt = new Date().toISOString();
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Updated Punjab state in states.json');

// 2. DEFINE THE 4 DESTINATIONS
const pbCitiesData = [
  // 1. AMRITSAR
  {
    id: "amritsar",
    stateId: "punjab",
    isPublished: true,
    isDeleted: false,
    displayOrder: 1,
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=900&q=80",
    slug: { en: "amritsar", es: "amritsar", pt: "amritsar" },
    name: { en: "Amritsar", es: "Amritsar", pt: "Amritsar" },
    description: {
      en: "<p><strong>Amritsar</strong> is Punjab's most famous heritage and spiritual destination, best known for the Golden Temple, Jallianwala Bagh and its deep connection with Sikh history. The city combines spirituality, history, architecture and traditional Punjabi food.</p>",
      es: "<p><strong>Amritsar</strong> es el destino espiritual y patrimonial más famoso de Punjab, conocido especialmente por el Golden Temple, Jallianwala Bagh y su profunda conexión con la historia sij. La ciudad combina espiritualidad, historia, arquitectura y gastronomía tradicional.</p>",
      pt: "<p><strong>Amritsar</strong> é o destino espiritual e histórico mais famoso de Punjab, conhecido principalmente pelo Golden Temple, Jallianwala Bagh e sua profunda ligação com a história Sikh. A cidade combina espiritualidade, história, arquitetura e culinária tradicional.</p>"
    },
    overview: {
      en: `<h2>Discover Amritsar</h2>

<p>Amritsar is one of India's most important cultural and spiritual destinations. The city is closely associated with Sikh history and attracts visitors from around the world to the magnificent Golden Temple.</p>

<p>Beyond its spiritual heritage, Amritsar offers important historical sites connected with India's freedom movement. Visitors can also explore traditional markets, local food streets and historic neighbourhoods.</p>

<p>The city is particularly famous for its Punjabi cuisine, including Amritsari Kulcha, lassi and other traditional dishes.</p>`,
      es: `<h2>Descubre Amritsar</h2>

<p>Amritsar es uno de los destinos culturales y espirituales más importantes de la India. La ciudad está profundamente relacionada con la historia sij y recibe visitantes de todo el mundo gracias al impresionante Golden Temple.</p>

<p>Además de su patrimonio religioso, Amritsar cuenta con importantes lugares históricos relacionados con el movimiento de independencia de la India. Sus mercados tradicionales y gastronomía local también forman parte esencial de la experiencia.</p>`,
      pt: `<h2>Conheça Amritsar</h2>

<p>Amritsar é um dos destinos culturais e espirituais mais importantes da Índia. A cidade está profundamente ligada à história Sikh e recebe visitantes de todo o mundo por causa do impressionante Golden Temple.</p>

<p>Além do patrimônio religioso, Amritsar possui importantes locais históricos relacionados ao movimento de independência da Índia. Seus mercados tradicionais e sua gastronomia local também fazem parte importante da experiência.</p>`
    },
    seoTitle: {
      en: "Amritsar Tourism – Golden Temple, Jallianwala Bagh & Wagah Border",
      es: "Turismo de Amritsar – Golden Temple, Jallianwala Bagh y Frontera Wagah",
      pt: "Turismo de Amritsar – Golden Temple, Jallianwala Bagh e Fronteira Wagah"
    },
    seoDesc: {
      en: "Explore Amritsar in Punjab. Visit Golden Temple (Sri Harmandir Sahib), Jallianwala Bagh, Wagah-Attari Border ceremony, Partition Museum and Gobindgarh Fort.",
      es: "Explora Amritsar en Punjab. Visita el Golden Temple (Sri Harmandir Sahib), Jallianwala Bagh, la ceremonia de Wagah Border, el Partition Museum y Gobindgarh Fort.",
      pt: "Explore Amritsar em Punjab. Visite o Golden Temple (Sri Harmandir Sahib), Jallianwala Bagh, a cerimônia de Wagah Border, o Partition Museum e Gobindgarh Fort."
    },
    seoKeywords: {
      en: "Amritsar, Amritsar Tourism, Golden Temple, Sri Harmandir Sahib, Jallianwala Bagh, Wagah Border, Partition Museum, Gobindgarh Fort",
      es: "Amritsar, Turismo de Amritsar, Templo Dorado, Golden Temple, Jallianwala Bagh, Frontera Wagah, Museo de la Partición",
      pt: "Amritsar, Turismo de Amritsar, Templo Dourado, Golden Temple, Jallianwala Bagh, Fronteira Wagah, Museu da Partição"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=900&q=80",
        name: { en: "Golden Temple", es: "Golden Temple", pt: "Golden Temple" },
        description: {
          en: cleanPlainText("Golden Temple, officially known as Sri Harmandir Sahib, is the most iconic landmark of Amritsar and one of the most important Sikh religious sites. The golden shrine surrounded by the sacred Amrit Sarovar creates a peaceful and remarkable setting."),
          es: cleanPlainText("Golden Temple, conocido oficialmente como Sri Harmandir Sahib, es el monumento más famoso de Amritsar y uno de los lugares religiosos sij más importantes. El santuario dorado rodeado por el sagrado Amrit Sarovar ofrece un ambiente tranquilo y especial."),
          pt: cleanPlainText("Golden Temple, oficialmente conhecido como Sri Harmandir Sahib, é o monumento mais famoso de Amritsar e um dos locais religiosos Sikh mais importantes. O santuário dourado cercado pelo sagrado Amrit Sarovar cria uma atmosfera tranquila e marcante.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Jallianwala Bagh", es: "Jallianwala Bagh", pt: "Jallianwala Bagh" },
        description: {
          en: cleanPlainText("Jallianwala Bagh is a historic memorial associated with one of the most significant and tragic events of India's freedom movement. The site preserves an important chapter of modern Indian history."),
          es: cleanPlainText("Jallianwala Bagh es un importante memorial histórico relacionado con uno de los acontecimientos más significativos y trágicos del movimiento de independencia de la India."),
          pt: cleanPlainText("Jallianwala Bagh é um importante memorial histórico relacionado a um dos acontecimentos mais significativos e trágicos do movimento de independência da Índia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Wagah-Attari Border", es: "Frontera Wagah-Attari", pt: "Fronteira Wagah-Attari" },
        description: {
          en: cleanPlainText("The Wagah-Attari Border is famous for its ceremonial border ceremony and attracts visitors interested in the history and symbolism of the India-Pakistan border."),
          es: cleanPlainText("La frontera Wagah-Attari es famosa por su ceremonia fronteriza y atrae a visitantes interesados en la historia y el simbolismo de la frontera entre India y Pakistán."),
          pt: cleanPlainText("A fronteira Wagah-Attari é famosa por sua cerimônia fronteiriça e atrai visitantes interessados na história e no simbolismo da fronteira entre Índia e Paquistão.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Partition Museum", es: "Museo de la Partición", pt: "Museu da Partição" },
        description: {
          en: cleanPlainText("The Partition Museum documents personal stories, memories and historical experiences connected with the Partition of India."),
          es: cleanPlainText("El Partition Museum conserva historias personales, recuerdos y experiencias históricas relacionadas con la Partición de la India."),
          pt: cleanPlainText("O Partition Museum preserva histórias pessoais, memórias e experiências históricas relacionadas à Partição da Índia.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Gobindgarh Fort", es: "Fuerte Gobindgarh", pt: "Forte Gobindgarh" },
        description: {
          en: cleanPlainText("Gobindgarh Fort is a historic fort complex offering insights into Punjab's military and cultural heritage through museums, exhibitions and cultural experiences."),
          es: cleanPlainText("Gobindgarh Fort es un complejo histórico que permite conocer el patrimonio militar y cultural de Punjab a través de museos y experiencias culturales."),
          pt: cleanPlainText("Gobindgarh Fort é um complexo histórico que permite conhecer o patrimônio militar e cultural de Punjab por meio de museus e experiências culturais.")
        }
      }
    ]
  },

  // 2. LUDHIANA
  {
    id: "ludhiana",
    stateId: "punjab",
    isPublished: true,
    isDeleted: false,
    displayOrder: 2,
    image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
    slug: { en: "ludhiana", es: "ludhiana", pt: "ludhiana" },
    name: { en: "Ludhiana", es: "Ludhiana", pt: "Ludhiana" },
    description: {
      en: "<p><strong>Ludhiana</strong> is one of Punjab's major cities and an important commercial and industrial centre. Alongside its modern urban character, the city offers museums, religious landmarks, parks and opportunities to experience everyday Punjabi culture.</p>",
      es: "<p><strong>Ludhiana</strong> es una de las principales ciudades de Punjab y un importante centro comercial e industrial. Además de su carácter moderno, la ciudad ofrece museos, lugares religiosos, parques y experiencias relacionadas con la cultura local.</p>",
      pt: "<p><strong>Ludhiana</strong> é uma das principais cidades de Punjab e um importante centro comercial e industrial. Além de seu caráter moderno, a cidade oferece museus, locais religiosos, parques e experiências ligadas à cultura Punjabi.</p>"
    },
    overview: {
      en: `<h2>Explore Ludhiana</h2>

<p>Ludhiana provides a glimpse into the modern and commercial side of Punjab while retaining its traditional cultural identity. The city is known for its textile and manufacturing industries and is surrounded by the agricultural landscape for which Punjab is famous.</p>

<p>Visitors can explore historic museums, gurdwaras, parks and educational attractions. Ludhiana is also a convenient destination for travellers interested in experiencing authentic Punjabi food and local city life.</p>`,
      es: `<h2>Descubre Ludhiana</h2>

<p>Ludhiana muestra el lado moderno y comercial de Punjab, manteniendo al mismo tiempo su identidad cultural tradicional. La ciudad es conocida por sus industrias textiles y manufactureras y está rodeada de paisajes agrícolas.</p>`,
      pt: `<h2>Conheça Ludhiana</h2>

<p>Ludhiana representa o lado moderno e comercial de Punjab, mantendo sua identidade cultural tradicional. A cidade é conhecida por suas indústrias têxteis e manufatureiras e está cercada por paisagens agrícolas.</p>`
    },
    seoTitle: {
      en: "Ludhiana Tourism – War Museum, Rose Garden & Commercial Hub",
      es: "Turismo de Ludhiana – Museo de Guerra, Rose Garden y Comercio",
      pt: "Turismo de Ludhiana – Museu de Guerra, Rose Garden e Comércio"
    },
    seoDesc: {
      en: "Explore Ludhiana in Punjab. Visit Maharaja Ranjit Singh War Museum, PAU Rural Museum, Nehru Rose Garden, Gurudwara Nanaksar Jagraon and Phillaur Fort.",
      es: "Explora Ludhiana en Punjab. Visita el Museo de Guerra Ranjit Singh, el Museo de la PAU, Nehru Rose Garden, Gurudwara Nanaksar y el Fuerte Phillaur.",
      pt: "Explore Ludhiana em Punjab. Visite o Museu de Guerra Ranjit Singh, o Museu da PAU, Nehru Rose Garden, Gurudwara Nanaksar e o Forte Phillaur."
    },
    seoKeywords: {
      en: "Ludhiana, Ludhiana Tourism, Maharaja Ranjit Singh War Museum, PAU Museum, Nehru Rose Garden, Gurudwara Nanaksar, Phillaur Fort",
      es: "Ludhiana, Turismo de Ludhiana, Museo de Guerra Ranjit Singh, Museo PAU, Nehru Rose Garden, Fuerte Phillaur",
      pt: "Ludhiana, Turismo de Ludhiana, Museu de Guerra Ranjit Singh, Museu PAU, Nehru Rose Garden, Forte Phillaur"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Maharaja Ranjit Singh War Museum", es: "Museo de Guerra Maharaja Ranjit Singh", pt: "Museu de Guerra Maharaja Ranjit Singh" },
        description: {
          en: cleanPlainText("The Maharaja Ranjit Singh War Museum presents military history through displays, equipment and information about India's armed forces and historic battles."),
          es: cleanPlainText("El Maharaja Ranjit Singh War Museum presenta la historia militar mediante exposiciones, equipamiento e información sobre las fuerzas armadas y batallas históricas."),
          pt: cleanPlainText("O Maharaja Ranjit Singh War Museum apresenta a história militar por meio de exposições, equipamentos e informações sobre as forças armadas e batalhas históricas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Punjab Agricultural University Museum", es: "Museo de la Universidad Agrícola de Punjab", pt: "Museu da Universidade Agrícola de Punjab" },
        description: {
          en: cleanPlainText("The Punjab Agricultural University Museum offers insights into rural Punjab, traditional agricultural life, folk culture and village traditions."),
          es: cleanPlainText("El Punjab Agricultural University Museum ofrece una visión de la vida rural de Punjab, la agricultura tradicional y las costumbres de las aldeas."),
          pt: cleanPlainText("O Punjab Agricultural University Museum apresenta aspectos da vida rural de Punjab, agricultura tradicional e costumes das aldeias.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Nehru Rose Garden", es: "Jardín de Rosas Nehru", pt: "Jardim de Rosas Nehru" },
        description: {
          en: cleanPlainText("Nehru Rose Garden is a large landscaped garden known for its beautiful rose varieties, walking areas and peaceful environment."),
          es: cleanPlainText("Nehru Rose Garden es un amplio jardín conocido por sus variedades de rosas, zonas para caminar y ambiente tranquilo."),
          pt: cleanPlainText("Nehru Rose Garden é um grande jardim conhecido por suas variedades de rosas, áreas para caminhadas e ambiente tranquilo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Gurudwara Nanaksar Jagraon", es: "Gurudwara Nanaksar Jagraon", pt: "Gurudwara Nanaksar Jagraon" },
        description: {
          en: cleanPlainText("Gurudwara Nanaksar Jagraon is an important spiritual destination near Ludhiana known for its peaceful environment and Sikh religious traditions."),
          es: cleanPlainText("Gurudwara Nanaksar Jagraon es un importante destino espiritual cerca de Ludhiana, conocido por su ambiente tranquilo y tradiciones sij."),
          pt: cleanPlainText("Gurudwara Nanaksar Jagraon é um importante destino espiritual próximo a Ludhiana, conhecido por seu ambiente tranquilo e tradições religiosas Sikh.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Phillaur Fort", es: "Fuerte Phillaur", pt: "Forte Phillaur" },
        description: {
          en: cleanPlainText("Phillaur Fort is a historic fortification associated with Punjab's military heritage and offers an opportunity to explore the region's architectural past."),
          es: cleanPlainText("Phillaur Fort es una fortificación histórica relacionada con el patrimonio militar de Punjab y su arquitectura histórica."),
          pt: cleanPlainText("Phillaur Fort é uma fortificação histórica ligada ao patrimônio militar de Punjab e à arquitetura histórica da região.")
        }
      }
    ]
  },

  // 3. PATIALA
  {
    id: "patiala",
    stateId: "punjab",
    isPublished: true,
    isDeleted: false,
    displayOrder: 3,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
    slug: { en: "patiala", es: "patiala", pt: "patiala" },
    name: { en: "Patiala", es: "Patiala", pt: "Patiala" },
    description: {
      en: "<p><strong>Patiala</strong> is a historic royal city known for magnificent palaces, forts, traditional Punjabi culture, handicrafts and its distinctive royal heritage. The city provides a fascinating look into the princely history of Punjab.</p>",
      es: "<p><strong>Patiala</strong> es una histórica ciudad real conocida por sus magníficos palacios, fortalezas, cultura Punjabi, artesanías y patrimonio principesco.</p>",
      pt: "<p><strong>Patiala</strong> é uma histórica cidade real conhecida por seus magníficos palácios, fortes, cultura Punjabi, artesanato e patrimônio principesco.</p>"
    },
    overview: {
      en: `<h2>Discover Patiala</h2>

<p>Patiala is one of Punjab's most important destinations for royal heritage. The city developed as the centre of the Patiala princely state and retains several impressive palaces, gardens, forts and historic buildings.</p>

<p>Patiala is also known for traditional Punjabi clothing, handicrafts and cultural traditions. Travellers can explore its royal architecture while experiencing the food, markets and local lifestyle of Punjab.</p>`,
      es: `<h2>Descubre Patiala</h2>

<p>Patiala es uno de los destinos más importantes de Punjab para conocer el patrimonio real. La ciudad fue el centro del antiguo estado principesco de Patiala y conserva palacios, jardines, fortalezas y edificios históricos.</p>`,
      pt: `<h2>Conheça Patiala</h2>

<p>Patiala é um dos destinos mais importantes de Punjab para conhecer o patrimônio real. A cidade foi o centro do antigo estado principesco de Patiala e conserva palácios, jardins, fortes e edifícios históricos.</p>`
    },
    seoTitle: {
      en: "Patiala Tourism – Qila Mubarak, Royal Palaces & Sheesh Mahal",
      es: "Turismo de Patiala – Qila Mubarak, Palacios Reales y Sheesh Mahal",
      pt: "Turismo de Patiala – Qila Mubarak, Palácios Reais e Sheesh Mahal"
    },
    seoDesc: {
      en: "Explore Patiala in Punjab. Visit Qila Mubarak fort complex, Moti Bagh Palace, Sheesh Mahal, Baradari Gardens and royal princely monuments.",
      es: "Explora Patiala en Punjab. Visita el fuerte Qila Mubarak, el palacio Moti Bagh, Sheesh Mahal, Baradari Gardens y sus monumentos reales.",
      pt: "Explore Patiala em Punjab. Visite o forte Qila Mubarak, o palácio Moti Bagh, Sheesh Mahal, Baradari Gardens e seus monumentos reais."
    },
    seoKeywords: {
      en: "Patiala, Patiala Tourism, Qila Mubarak, Moti Bagh Palace, Sheesh Mahal, Baradari Gardens, Royal Punjab",
      es: "Patiala, Turismo de Patiala, Qila Mubarak, Palacio Moti Bagh, Sheesh Mahal, Jardines Baradari",
      pt: "Patiala, Turismo de Patiala, Qila Mubarak, Palácio Moti Bagh, Sheesh Mahal, Jardins Baradari"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Qila Mubarak", es: "Qila Mubarak", pt: "Qila Mubarak" },
        description: {
          en: cleanPlainText("Qila Mubarak is a historic fort complex and one of Patiala's most important heritage landmarks, reflecting the city's royal past."),
          es: cleanPlainText("Qila Mubarak es un complejo fortificado histórico y uno de los principales monumentos patrimoniales de Patiala."),
          pt: cleanPlainText("Qila Mubarak é um complexo fortificado histórico e um dos principais monumentos patrimoniais de Patiala.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Moti Bagh Palace", es: "Palacio Moti Bagh", pt: "Palácio Moti Bagh" },
        description: {
          en: cleanPlainText("Moti Bagh Palace is an elegant royal residence surrounded by landscaped areas and associated with Patiala's princely heritage."),
          es: cleanPlainText("Moti Bagh Palace es una elegante residencia real relacionada con el patrimonio principesco de Patiala."),
          pt: cleanPlainText("Moti Bagh Palace é uma elegante residência real associada ao patrimônio principesco de Patiala.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Sheesh Mahal", es: "Sheesh Mahal", pt: "Sheesh Mahal" },
        description: {
          en: cleanPlainText("Sheesh Mahal is a historic palace known for its decorative interiors, artistic details and royal collections."),
          es: cleanPlainText("Sheesh Mahal es un palacio histórico conocido por sus interiores decorativos, detalles artísticos y colecciones reales."),
          pt: cleanPlainText("Sheesh Mahal é um palácio histórico conhecido por seus interiores decorativos, detalhes artísticos e coleções reais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Baradari Gardens", es: "Jardines Baradari", pt: "Jardins Baradari" },
        description: {
          en: cleanPlainText("Baradari Gardens is a beautiful historic garden offering greenery, shaded walking paths and a peaceful environment."),
          es: cleanPlainText("Baradari Gardens es un hermoso jardín histórico con zonas verdes, senderos y un ambiente tranquilo."),
          pt: cleanPlainText("Baradari Gardens é um belo jardim histórico com áreas verdes, caminhos e um ambiente tranquilo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Patiala State Monuments", es: "Monumentos de Patiala", pt: "Monumentos de Patiala" },
        description: {
          en: cleanPlainText("Patiala's collection of historic buildings and royal monuments provides visitors with an opportunity to explore the architecture and traditions of the former princely state."),
          es: cleanPlainText("Los monumentos históricos de Patiala permiten conocer la arquitectura y las tradiciones del antiguo estado principesco."),
          pt: cleanPlainText("Os monumentos históricos de Patiala permitem conhecer a arquitetura e as tradições do antigo estado principesco.")
        }
      }
    ]
  },

  // 4. JALANDHAR
  {
    id: "jalandhar",
    stateId: "punjab",
    isPublished: true,
    isDeleted: false,
    displayOrder: 4,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
    slug: { en: "jalandhar", es: "jalandhar", pt: "jalandhar" },
    name: { en: "Jalandhar", es: "Jalandhar", pt: "Jalandhar" },
    description: {
      en: "<p><strong>Jalandhar</strong> is one of Punjab's historic cities, combining religious landmarks, cultural attractions, traditional markets and modern urban life. It offers travellers an opportunity to experience everyday Punjabi culture alongside historic sites.</p>",
      es: "<p><strong>Jalandhar</strong> es una de las ciudades históricas de Punjab y combina lugares religiosos, atracciones culturales, mercados tradicionales y vida urbana moderna.</p>",
      pt: "<p><strong>Jalandhar</strong> é uma das cidades históricas de Punjab, combinando locais religiosos, atrações culturais, mercados tradicionais e vida urbana moderna.</p>"
    },
    overview: {
      en: `<h2>Explore Jalandhar</h2>

<p>Jalandhar is an important urban centre with a long cultural and historical connection to the Punjab region. The city and its surrounding areas feature temples, gurdwaras, historic structures and recreational attractions.</p>

<p>Jalandhar is also known for its sports-related manufacturing and vibrant local markets. Travellers can combine heritage sightseeing with shopping and Punjabi culinary experiences.</p>`,
      es: `<h2>Descubre Jalandhar</h2>

<p>Jalandhar es un importante centro urbano con una larga conexión cultural e histórica con la región de Punjab. La ciudad y sus alrededores cuentan con templos, gurdwaras, estructuras históricas y espacios recreativos.</p>`,
      pt: `<h2>Conheça Jalandhar</h2>

<p>Jalandhar é um importante centro urbano com uma longa ligação cultural e histórica com a região de Punjab. A cidade e seus arredores possuem templos, gurdwaras, estruturas históricas e espaços recreativos.</p>`
    },
    seoTitle: {
      en: "Jalandhar Tourism – Devi Talab Mandir & Rangla Punjab Haveli",
      es: "Turismo de Jalandhar – Devi Talab Mandir y Rangla Punjab Haveli",
      pt: "Turismo de Jalandhar – Devi Talab Mandir e Rangla Punjab Haveli"
    },
    seoDesc: {
      en: "Explore Jalandhar in Punjab. Visit Devi Talab Mandir temple, Rangla Punjab Haveli cultural village, Pushpa Gujral Science City and Wonderland Theme Park.",
      es: "Explora Jalandhar en Punjab. Visita el templo Devi Talab Mandir, la aldea cultural Rangla Punjab Haveli, Science City y Wonderland Theme Park.",
      pt: "Explore Jalandhar em Punjab. Visite o templo Devi Talab Mandir, a vila cultural Rangla Punjab Haveli, Science City e Wonderland Theme Park."
    },
    seoKeywords: {
      en: "Jalandhar, Jalandhar Tourism, Devi Talab Mandir, Rangla Punjab Haveli, Pushpa Gujral Science City, Wonderland Theme Park, Imam Nasir Mausoleum",
      es: "Jalandhar, Turismo de Jalandhar, Templo Devi Talab Mandir, Rangla Punjab Haveli, Science City",
      pt: "Jalandhar, Turismo de Jalandhar, Templo Devi Talab Mandir, Rangla Punjab Haveli, Science City"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Devi Talab Mandir", es: "Templo Devi Talab Mandir", pt: "Templo Devi Talab Mandir" },
        description: {
          en: cleanPlainText("Devi Talab Mandir is one of Jalandhar's prominent religious attractions and is dedicated to the Hindu goddess Durga. The temple complex has strong cultural and spiritual significance."),
          es: cleanPlainText("Devi Talab Mandir es uno de los principales lugares religiosos de Jalandhar y está dedicado a la diosa hindú Durga."),
          pt: cleanPlainText("Devi Talab Mandir é uma das principais atrações religiosas de Jalandhar e é dedicado à deusa hindu Durga.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Rangla Punjab Haveli", es: "Rangla Punjab Haveli", pt: "Rangla Punjab Haveli" },
        description: {
          en: cleanPlainText("Rangla Punjab Haveli recreates the atmosphere of a traditional Punjabi village and offers visitors a cultural experience involving food, folk traditions, crafts and village-style architecture."),
          es: cleanPlainText("Rangla Punjab Haveli recrea el ambiente de una aldea tradicional Punjabi y ofrece experiencias de gastronomía, artesanía y cultura popular."),
          pt: cleanPlainText("Rangla Punjab Haveli recria a atmosfera de uma aldeia tradicional Punjabi e oferece experiências de culinária, artesanato e cultura popular.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Pushpa Gujral Science City", es: "Ciudad de las Ciencias Pushpa Gujral", pt: "Cidade das Ciências Pushpa Gujral" },
        description: {
          en: cleanPlainText("Pushpa Gujral Science City is an educational and recreational attraction featuring interactive science exhibits and activities for visitors."),
          es: cleanPlainText("Pushpa Gujral Science City es una atracción educativa y recreativa con exposiciones científicas interactivas."),
          pt: cleanPlainText("Pushpa Gujral Science City é uma atração educativa e recreativa com exposições científicas interativas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Wonderland Theme Park", es: "Parque Temático Wonderland", pt: "Parque Temático Wonderland" },
        description: {
          en: cleanPlainText("Wonderland Theme Park provides recreational activities and entertainment and can be included in a family-oriented visit to Jalandhar."),
          es: cleanPlainText("Wonderland Theme Park ofrece actividades recreativas y entretenimiento, siendo una opción para viajes familiares."),
          pt: cleanPlainText("Wonderland Theme Park oferece atividades recreativas e entretenimento, sendo uma opção para viagens em família.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Imam Nasir Mausoleum", es: "Mausoleo de Imam Nasir", pt: "Mausoléu de Imam Nasir" },
        description: {
          en: cleanPlainText("Imam Nasir Mausoleum is a historic religious structure associated with Jalandhar's architectural and cultural heritage."),
          es: cleanPlainText("Imam Nasir Mausoleum es una estructura religiosa histórica relacionada con el patrimonio arquitectónico y cultural de Jalandhar."),
          pt: cleanPlainText("Imam Nasir Mausoleum é uma estrutura religiosa histórica ligada ao patrimônio arquitetônico e cultural de Jalandhar.")
        }
      }
    ]
  }
];

pbCitiesData.forEach(city => {
  city.content = city.overview;
  city.fullDescription = city.overview;
});

let addedCount = 0;
let updatedCount = 0;

pbCitiesData.forEach(cityData => {
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
