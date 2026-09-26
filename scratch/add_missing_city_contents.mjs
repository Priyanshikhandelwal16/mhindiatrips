import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const extraContents = {
  "khajuraho": {
    en: `<h2>Explore Khajuraho: UNESCO World Heritage Monuments</h2><p>Khajuraho is world-renowned for its exquisite group of Hindu and Jain temples built by the Chandela dynasty between 950 and 1050 CE. Famous for their intricate stone carvings, Nagara-style architectural grandeur, and artistic depictions of life and spirituality, the temples are a masterpiece of ancient Indian sculpture.</p>`,
    es: `<h2>Explore Khajuraho: Monumentos Patrimonio de la Humanidad</h2><p>Khajuraho es mundialmente conocida por su exquisito grupo de templos hindúes y jainistas construidos por la dinastía Chandela entre los años 950 y 1050 d.C. Famosos por sus detalladas esculturas en piedra y su arquitectura estilo Nagara.</p>`,
    pt: `<h2>Explore Khajuraho: Monumentos Patrimônio Mundial</h2><p>Khajuraho é mundialmente famosa por seu requintado grupo de templos hinduístas e jainistas construídos pela dinastia Chandela entre 950 e 1050 d.C. Famosos por suas esculturas em pedra e arquitetura no estilo Nagara.</p>`
  },
  "alleppey": {
    en: `<h2>Alleppey: Venice of the East & Backwater Hub</h2><p>Alappuzha (Alleppey) is Kerala's quintessential backwater destination, famous for traditional houseboats, serene palm-fringed canals, Punnamada Lake, and the annual Nehru Trophy Boat Race. It offers travellers an unforgettable experience of coastal Kerala culture and tranquil waters.</p>`,
    es: `<h2>Alleppey: La Venecia del Este y Centro de los Backwaters</h2><p>Alappuzha (Alleppey) es el destino por excelencia de los remansos de Kerala, famoso por sus casas flotantes tradicionales, tranquilos canales rodeados de palmeras y la carrera de barcos de la Nehru Trophy.</p>`,
    pt: `<h2>Alleppey: A Veneza do Oriente e Centro dos Backwaters</h2><p>Alappuzha (Alleppey) é o destino perfeito dos remansos de Kerala, famoso por suas tradicionais casas flutuantes, canais tranquilos cercados por palmeiras e a corrida de barcos Nehru Trophy.</p>`
  },
  "rann-of-kutch": {
    en: `<h2>The Great Rann of Kutch: Endless White Desert</h2><p>The Great Rann of Kutch is a remarkable salt marsh in Gujarat, transformed into a vast glowing white landscape during winter. Home to the world-famous Rann Utsav cultural festival, Kutchi handicrafts, starry nights, and vibrant desert traditions.</p>`,
    es: `<h2>El Gran Rann de Kutch: El Infinito Desierto Blanco</h2><p>El Gran Rann de Kutch es un impresionante salar en Gujarat que se transforma en un vasto paisaje blanco deslumbrante durante el invierno. Cuna del festival cultural Rann Utsav y artesanías locales.</p>`,
    pt: `<h2>O Grande Rann de Kutch: O Infinito Deserto Branco</h2><p>O Grande Rann de Kutch é uma impressionante salina em Gujarat que se transforma em uma vasta paisagem branca brilhante durante o inverno. Lar do famoso festival cultural Rann Utsav e do artesanato local.</p>`
  },
  "omkareshwar": {
    en: `<h2>Omkareshwar: Sacred Island on the Narmada River</h2><p>Omkareshwar is a holy island shaped naturally like the sacred 'OM' symbol in the Narmada River. It houses one of the 12 sacred Jyotirlinga shrines of Lord Shiva, ancient ghats, and suspension bridges.</p>`,
    es: `<h2>Omkareshwar: Isla Sagrada en el Río Narmada</h2><p>Omkareshwar es una isla sagrada con forma natural del símbolo 'OM' en el río Narmada. Alberga uno de los 12 santuarios Jyotirlinga de Shiva y antiguos ghats a orillas del río.</p>`,
    pt: `<h2>Omkareshwar: Ilha Sagrada no Rio Narmada</h2><p>Omkareshwar é uma ilha sagrada com formato natural do símbolo 'OM' no rio Narmada. Abriga um dos 12 santuários Jyotirlinga de Lord Shiva e antigos ghats à beira-mar.</p>`
  },
  "bikaner": {
    en: `<h2>Bikaner: Desert Forts, Palaces & Heritage</h2><p>Bikaner is a historic desert city in Rajasthan founded by Rao Bika in 1488. Celebrated for Junagarh Fort, Karni Mata Temple, Lalgarh Palace, and rich desert food culture.</p>`,
    es: `<h2>Bikaner: Fortalezas, Palacios y Patrimonio del Desierto</h2><p>Bikaner es una ciudad histórica del desierto de Rajastán fundada por Rao Bika en 1488. Destaca por el Fuerte Junagarh, el Templo Karni Mata y el Palacio Lalgarh.</p>`,
    pt: `<h2>Bikaner: Fortes, Palácios e Patrimônio do Deserto</h2><p>Bikaner é uma cidade histórica do deserto do Rajastão fundada por Rao Bika em 1488. Famosa pelo Forte Junagarh, Templo Karni Mata e Palácio Lalgarh.</p>`
  },
  "ranakpur": {
    en: `<h2>Ranakpur: Jain Architectural Wonder</h2><p>Ranakpur is world-famous for its 15th-century Adinath Jain Temple nestled in the Aravalli hills, renowned for 1,444 uniquely carved marble pillars and breathtaking stone craftsmanship.</p>`,
    es: `<h2>Ranakpur: Maravilla Arquitectónica Jainista</h2><p>Ranakpur es famosa por su templo jainista Adinath del siglo XV en las colinas Aravalli, reconocido por sus 1.444 pilares de mármol tallados de forma única.</p>`,
    pt: `<h2>Ranakpur: Maravilha Arquitetônica Jainista</h2><p>Ranakpur é famosa por seu templo jainista Adinath do século XV nas colinas Aravalli, conhecido por seus 1.444 pilares de mármore esculpidos de forma única.</p>`
  },
  "abhaneri": {
    en: `<h2>Abhaneri: Chand Baori Stepwell Heritage</h2><p>Abhaneri is an ancient village famous for Chand Baori, one of India's deepest and largest stepwells with 3,500 narrow steps built over 13 stories, along with the 8th-century Harshat Mata Temple.</p>`,
    es: `<h2>Abhaneri: El Pozo Escalonado Chand Baori</h2><p>Abhaneri es una aldea antigua famosa por Chand Baori, uno de los pozos escalonados más profundos de la India con 3.500 escalones en 13 niveles, junto al templo Harshat Mata.</p>`,
    pt: `<h2>Abhaneri: O Poço Escalonado Chand Baori</h2><p>Abhaneri é uma vila antiga famosa por Chand Baori, um dos poços escalonados mais profundos da Índia com 3.500 degraus em 13 níveis, junto ao templo Harshat Mata.</p>`
  },
  "thiruvananthapuram": {
    en: `<h2>Thiruvananthapuram: Capital Heritage & Coastal Beauty</h2><p>Thiruvananthapuram (Trivandrum) is Kerala's capital, known for the iconic Padmanabhaswamy Temple, Kovalam beaches, Napier Museum, and rich royal heritage.</p>`,
    es: `<h2>Thiruvananthapuram: Patrimonio Capitalino y Belleza Costera</h2><p>Thiruvananthapuram es la capital de Kerala, conocida por el icónico Templo Padmanabhaswamy, las playas de Kovalam y el Museo Napier.</p>`,
    pt: `<h2>Thiruvananthapuram: Patrimônio da Capital e Beleza Costeira</h2><p>Thiruvananthapuram é a capital de Kerala, conhecida pelo icônico Templo Padmanabhaswamy, praias de Kovalam e Museu Napier.</p>`
  },
  "kannur": {
    en: `<h2>Kannur: Theyyam Traditions & Malabar Coast</h2><p>Kannur is the land of Theyyam rituals, historic St. Angelo Fort, pristine drive-in beaches like Muzhappilangad, and handloom heritage along the North Malabar coast.</p>`,
    es: `<h2>Kannur: Tradiciones Theyyam y la Costa de Malabar</h2><p>Kannur es la tierra de los rituales Theyyam, el histórico Fuerte St. Angelo, playas únicas como Muzhappilangad y tradición textil en el norte de Malabar.</p>`,
    pt: `<h2>Kannur: Tradições Theyyam e a Costa de Malabar</h2><p>Kannur é a terra dos rituais Theyyam, o histórico Forte St. Angelo, praias únicas como Muzhappilangad e tradição têxtil no norte de Malabar.</p>`
  }
};

for (const [id, contentObj] of Object.entries(extraContents)) {
  const city = cities.find(c => c.id === id);
  if (city) {
    city.content = contentObj;
    console.log(`Added missing content for ${id}`);
  }
}

fs.writeFileSync('src/data/fallback/cities.json', JSON.stringify(cities, null, 2), 'utf8');
console.log('Saved all content to src/data/fallback/cities.json');
