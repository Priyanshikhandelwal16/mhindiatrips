const fs = require('fs');
const path = require('path');

const projectRoot = path.join('c:', 'Users', 'dell', 'Downloads', 'MH India Trips');
const oldStatesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json');
const newStatesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json'); // We will overwrite this
const newCitiesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'cities.json');

// Read old states.json
if (!fs.existsSync(oldStatesPath)) {
  console.error("Old states.json not found!");
  process.exit(1);
}

const oldData = JSON.parse(fs.readFileSync(oldStatesPath, 'utf8'));

// Target states
const targetStates = [
  { id: 'rajasthan', nameEn: 'Rajasthan', nameEs: 'Rajastán', namePt: 'Rajastão' },
  { id: 'kerala', nameEn: 'Kerala', nameEs: 'Kerala', namePt: 'Kerala' },
  { id: 'madhya-pradesh', nameEn: 'Madhya Pradesh', nameEs: 'Madhya Pradesh', namePt: 'Madhya Pradesh' },
  { id: 'tamil-nadu', nameEn: 'Tamil Nadu', nameEs: 'Tamil Nadu', namePt: 'Tamil Nadu' },
  { id: 'uttar-pradesh', nameEn: 'Uttar Pradesh', nameEs: 'Uttar Pradesh', namePt: 'Uttar Pradesh' },
  { id: 'maharashtra', nameEn: 'Maharashtra', nameEs: 'Maharashtra', namePt: 'Maharashtra' }
];

const targetStateSlugs = targetStates.map(s => s.id);

// Target cities per state
const targetCities = {
  rajasthan: [
    { id: 'jaipur', nameEn: 'Jaipur', nameEs: 'Jaipur', namePt: 'Jaipur' },
    { id: 'udaipur', nameEn: 'Udaipur', nameEs: 'Udaipur', namePt: 'Udaipur' },
    { id: 'jodhpur', nameEn: 'Jodhpur', nameEs: 'Jodhpur', namePt: 'Jodhpur' },
    { id: 'jaisalmer', nameEn: 'Jaisalmer', nameEs: 'Jaisalmer', namePt: 'Jaisalmer' },
    { id: 'pushkar', nameEn: 'Pushkar', nameEs: 'Pushkar', namePt: 'Pushkar' },
    { id: 'ranthambore', nameEn: 'Ranthambore', nameEs: 'Ranthambore', namePt: 'Ranthambore' },
    { id: 'mount-abu', nameEn: 'Mount Abu', nameEs: 'Mount Abu', namePt: 'Mount Abu' },
    { id: 'sariska', nameEn: 'Sariska', nameEs: 'Sariska', namePt: 'Sariska' }
  ],
  kerala: [
    { id: 'kasargod', nameEn: 'Kasargod', nameEs: 'Kasargod', namePt: 'Kasargod' },
    { id: 'kottayam', nameEn: 'Kottayam', nameEs: 'Kottayam', namePt: 'Kottayam' },
    { id: 'kollam', nameEn: 'Kollam', nameEs: 'Kollam', namePt: 'Kollam' },
    { id: 'thrissur', nameEn: 'Thrissur', nameEs: 'Thrissur', namePt: 'Thrissur' },
    { id: 'thekkady', nameEn: 'Thekkady', nameEs: 'Thekkady', namePt: 'Thekkady' },
    { id: 'munnar', nameEn: 'Munnar', nameEs: 'Munnar', namePt: 'Munnar' },
    { id: 'kochi', nameEn: 'Kochi', nameEs: 'Kochi', namePt: 'Cochim' }
  ],
  'madhya-pradesh': [
    { id: 'pachmarhi', nameEn: 'Pachmarhi', nameEs: 'Pachmarhi', namePt: 'Pachmarhi' },
    { id: 'dhar', nameEn: 'Dhar', nameEs: 'Dhar', namePt: 'Dhar' },
    { id: 'indore', nameEn: 'Indore', nameEs: 'Indore', namePt: 'Indore' },
    { id: 'jabalpur', nameEn: 'Jabalpur', nameEs: 'Jabalpur', namePt: 'Jabalpur' },
    { id: 'pench', nameEn: 'Pench', nameEs: 'Pench', namePt: 'Pench' },
    { id: 'ujjain', nameEn: 'Ujjain', nameEs: 'Ujjain', namePt: 'Ujjain' },
    { id: 'bhopal', nameEn: 'Bhopal', nameEs: 'Bhopal', namePt: 'Bhopal' },
    { id: 'kanha', nameEn: 'Kanha', nameEs: 'Kanha', namePt: 'Kanha' },
    { id: 'gwalior', nameEn: 'Gwalior', nameEs: 'Gwalior', namePt: 'Gwalior' }
  ],
  'tamil-nadu': [
    { id: 'salem', nameEn: 'Salem', nameEs: 'Salem', namePt: 'Salem' },
    { id: 'yanam', nameEn: 'Yanam', nameEs: 'Yanam', namePt: 'Yanam' },
    { id: 'pondicherry-mahe', nameEn: 'Pondicherry Mahe', nameEs: 'Pondicherry Mahe', namePt: 'Pondicherry Mahe' },
    { id: 'rameshwaram', nameEn: 'Rameshwaram', nameEs: 'Rameshwaram', namePt: 'Rameshwaram' },
    { id: 'tuticorin', nameEn: 'Tuticorin', nameEs: 'Tuticorin', namePt: 'Tuticorin' },
    { id: 'vellore', nameEn: 'Vellore', nameEs: 'Vellore', namePt: 'Vellore' },
    { id: 'kanyakumari', nameEn: 'Kanyakumari', nameEs: 'Kanyakumari', namePt: 'Kanyakumari' },
    { id: 'madurai', nameEn: 'Madurai', nameEs: 'Madurai', namePt: 'Madurai' },
    { id: 'pondicherry-karaikal', nameEn: 'Pondicherry Karaikal', nameEs: 'Pondicherry Karaikal', namePt: 'Pondicherry Karaikal' }
  ],
  'uttar-pradesh': [
    { id: 'mathura', nameEn: 'Mathura', nameEs: 'Mathura', namePt: 'Mathura' },
    { id: 'lucknow', nameEn: 'Lucknow', nameEs: 'Lucknow', namePt: 'Lucknow' },
    { id: 'kanpur', nameEn: 'Kanpur', nameEs: 'Kanpur', namePt: 'Kanpur' },
    { id: 'jhansi', nameEn: 'Jhansi', nameEs: 'Jhansi', namePt: 'Jhansi' },
    { id: 'prayagraj', nameEn: 'Prayagraj', nameEs: 'Prayagraj', namePt: 'Prayagraj' },
    { id: 'aligarh', nameEn: 'Aligarh', nameEs: 'Aligarh', namePt: 'Aligarh' },
    { id: 'varanasi', nameEn: 'Varanasi', nameEs: 'Varanasi', namePt: 'Varanasi' },
    { id: 'agra', nameEn: 'Agra', nameEs: 'Agra', namePt: 'Agra' }
  ],
  maharashtra: [
    { id: 'nashik', nameEn: 'Nashik', nameEs: 'Nashik', namePt: 'Nashik' },
    { id: 'kolhapur', nameEn: 'Kolhapur', nameEs: 'Kolhapur', namePt: 'Kolhapur' },
    { id: 'amravati', nameEn: 'Amravati', nameEs: 'Amravati', namePt: 'Amravati' },
    { id: 'solapur', nameEn: 'Solapur', nameEs: 'Solapur', namePt: 'Solapur' },
    { id: 'jamnagar', nameEn: 'Jamnagar', nameEs: 'Jamnagar', namePt: 'Jamnagar' },
    { id: 'thane', nameEn: 'Thane', nameEs: 'Thane', namePt: 'Thane' },
    { id: 'pune', nameEn: 'Pune', nameEs: 'Pune', namePt: 'Pune' },
    { id: 'nagpur', nameEn: 'Nagpur', nameEs: 'Nagpur', namePt: 'Nagpur' },
    { id: 'aurangabad', nameEn: 'Aurangabad', nameEs: 'Aurangabad', namePt: 'Aurangabad' },
    { id: 'mumbai', nameEn: 'Mumbai', nameEs: 'Mumbai', namePt: 'Mumbai' }
  ]
};

// Migrate States
const newStates = targetStates.map((ts, idx) => {
  const oldState = oldData.find(s => s.slug === ts.id);
  const title = oldState ? oldState.title : { en: ts.nameEn, es: ts.nameEs, pt: ts.namePt };
  const description = oldState ? oldState.description : {
    en: `Discover the wonders of ${ts.nameEn}, rich in culture and heritage.`,
    es: `Descubra las maravillas de ${ts.nameEs}, rica en cultura y patrimonio.`,
    pt: `Descubra as maravilhas de ${ts.namePt}, rica em cultura e patrimônio.`
  };
  
  const seo = oldState?.seo || {};
  
  return {
    id: ts.id,
    image: oldState?.image || `/images/${ts.id}.jpg`,
    displayOrder: idx + 1,
    isPublished: true,
    name: {
      en: title.en || ts.nameEn,
      es: title.es || ts.nameEs,
      pt: title.pt || ts.namePt
    },
    slug: {
      en: ts.id,
      es: ts.id,
      pt: ts.id
    },
    description: {
      en: description.en || '',
      es: description.es || '',
      pt: description.pt || ''
    },
    seoTitle: {
      en: seo.title?.en || `${ts.nameEn} Travel Guide | MH India Trips`,
      es: seo.title?.es || `Guía de Viaje a ${ts.nameEs} | Viaje a India`,
      pt: seo.title?.pt || `Guia de Viagem para ${ts.namePt} | Viajar pela Índia`
    },
    seoDesc: {
      en: seo.description?.en || `Bespoke luxury trips and travel information for ${ts.nameEn}.`,
      es: seo.description?.es || `Viajes a medida y guías turísticas completas para ${ts.nameEs}.`,
      pt: seo.description?.pt || `Viagens personalizadas e guias de viagem para ${ts.namePt}.`
    },
    seoKeywords: {
      en: seo.keywords?.en || `${ts.nameEn} travel, ${ts.nameEn} luxury tour`,
      es: seo.keywords?.es || `viaje a ${ts.nameEs}, turismo en ${ts.nameEs}`,
      pt: seo.keywords?.pt || `viagem para ${ts.namePt}, turismo em ${ts.namePt}`
    }
  };
});

// Helper to create a localized content template
const defaultContent = (nameEn, nameEs, namePt) => {
  return {
    en: `<h2>About ${nameEn}</h2><p>Welcome to ${nameEn}. This beautiful city is known for its remarkable attractions, historic monuments, and warm hospitality. Explore the local culture, taste the regional cuisine, and enjoy a premium bespoke travel experience designed by our experts.</p><h2>Top Attractions</h2><ul><li>City Center Landmark</li><li>Local Heritage Monument</li></ul><h2>Travel Information</h2><p>Our private chauffeurs and local guides are available to show you the best sites. Reach out to coordinate hotels and tour inclusions.</p>`,
    es: `<h2>Historia de la ciudad</h2><p>Bienvenido a ${nameEs}. Esta hermosa ciudad es conocida por sus notables atracciones, monumentos históricos y cálida hospitalidad. Explore la cultura local, saboree la cocina regional y disfrute de una experiencia de viaje a medida diseñada por nuestros expertos.</p><h2>Qué ver y hacer</h2><ul><li>Monumento de Patrimonio Local</li><li>Centro Histórico</li></ul><h2>Cómo llegar</h2><p>Nuestros conductores privados y guías locales están disponibles para mostrarle los mejores lugares de interés.</p>`,
    pt: `<h2>Sobre ${namePt}</h2><p>Bem-vindo a ${namePt}. Esta bela cidade é conhecida por suas atrações notáveis, monumentos históricos e hospitalidade calorosa. Explore a cultura local, saboreie a culinária regional e desfrute de uma experiência de viagem sob medida projetada por nossos especialistas.</p><h2>Principais Atrações</h2><ul><li>Monumento Histórico Local</li><li>Centro da Cidade</li></ul><h2>Como Chegar</h2><p>Nossos motoristas particulares e guias locais estão à disposição para mostrar os melhores locais.</p>`
  };
};

// Migrate Cities
const newCities = [];
Object.keys(targetCities).forEach(stateId => {
  const citiesList = targetCities[stateId];
  const oldState = oldData.find(s => s.slug === stateId);
  
  citiesList.forEach((tc, idx) => {
    let oldCity = oldState?.cities?.find(c => c.slug === tc.id || c.slug.includes(tc.id));
    
    // Custom mapping overrides
    if (!oldCity && tc.id === 'aurangabad') {
      // Aurangabad was named chhatrapati-sambhajinagar in states.json
      oldCity = oldState?.cities?.find(c => c.slug === 'chhatrapati-sambhajinagar');
    }
    
    // If not found in states.json, let's search if it is in some other state (like thekkady, pench etc. which were states or mentioned elsewhere)
    if (!oldCity) {
      oldData.forEach(s => {
        const found = s.cities?.find(c => c.slug === tc.id || c.slug.includes(tc.id));
        if (found) oldCity = found;
      });
    }

    const title = oldCity ? oldCity.title : { en: tc.nameEn, es: tc.nameEs, pt: tc.namePt };
    const shortDesc = oldCity?.tagline || oldCity?.overview || {
      en: `Explore the historical wonders, local food, and cultural highlights of ${tc.nameEn}.`,
      es: `Explore las maravillas históricas, la comida local y los aspectos culturales de ${tc.nameEs}.`,
      pt: `Explore as maravilhas históricas, a gastronomia local e os aspectos culturais de ${tc.namePt}.`
    };

    // Construct full rich text content
    let fullContent = { en: '', es: '', pt: '' };
    if (oldCity) {
      // We reconstruct full text from overview, history, culture, attractions
      const assembleContent = (lang) => {
        let html = '';
        if (oldCity.overview?.[lang]) html += `<h2>Overview</h2><p>${oldCity.overview[lang]}</p>`;
        if (oldCity.history?.[lang]) html += `<h2>History / Historia</h2><p>${oldCity.history[lang]}</p>`;
        if (oldCity.culture?.[lang]) html += `<h2>Culture / Cultura</h2><p>${oldCity.culture[lang]}</p>`;
        
        if (oldCity.attractions && oldCity.attractions.length > 0) {
          html += `<h2>Top Attractions / Atracciones</h2><ul>`;
          oldCity.attractions.forEach(attr => {
            const name = attr.name?.[lang] || attr.name?.en || '';
            const desc = attr.desc?.[lang] || attr.desc?.en || '';
            if (name) html += `<li><strong>${name}</strong>: ${desc}</li>`;
          });
          html += `</ul>`;
        }
        
        if (oldCity.localFood?.[lang]) html += `<h2>Gastronomy / Gastronomía</h2><p>${oldCity.localFood[lang]}</p>`;
        if (oldCity.shopping?.[lang]) html += `<h2>Shopping / Compras</h2><p>${oldCity.shopping[lang]}</p>`;
        if (oldCity.weather?.[lang]) html += `<h2>Weather / Clima</h2><p>${oldCity.weather[lang]}</p>`;
        if (oldCity.bestTime?.[lang]) html += `<h2>Best Time to Visit</h2><p>${oldCity.bestTime[lang]}</p>`;
        
        if (oldCity.travelTips && oldCity.travelTips.length > 0) {
          html += `<h2>Travel Tips / Consejos de Viaje</h2><ul>`;
          oldCity.travelTips.forEach(tip => {
            const tipText = typeof tip === 'string' ? tip : (tip[lang] || tip.en || '');
            if (tipText) html += `<li>${tipText}</li>`;
          });
          html += `</ul>`;
        }
        
        return html || defaultContent(tc.nameEn, tc.nameEs, tc.namePt)[lang];
      };

      fullContent = {
        en: assembleContent('en'),
        es: assembleContent('es'),
        pt: assembleContent('pt')
      };
    } else {
      fullContent = defaultContent(tc.nameEn, tc.nameEs, tc.namePt);
    }

    const seo = oldCity?.seo || {};

    const imageFilename = `${tc.nameEn.replace(' ', '')}.jpg`;
    const imagePath = `/images/${imageFilename}`;

    newCities.push({
      id: tc.id,
      stateId,
      image: oldCity?.image || imagePath,
      gallery: oldCity?.gallery?.map(g => typeof g === 'string' ? g : g.url) || [],
      displayOrder: idx + 1,
      isPublished: oldCity ? true : false, // Unpublish new seeded cities (make them drafts) so admins can edit/review first
      relatedPackages: oldCity?.relatedTours || ['viaje-a-india-2', 'viaje-sur-de-la-india'],
      name: {
        en: title.en || tc.nameEn,
        es: title.es || tc.nameEs,
        pt: title.pt || tc.namePt
      },
      slug: {
        en: tc.id,
        es: tc.id,
        pt: tc.id
      },
      description: {
        en: shortDesc.en || '',
        es: shortDesc.es || '',
        pt: shortDesc.pt || ''
      },
      content: fullContent,
      seoTitle: {
        en: seo.title?.en || `Travel to ${tc.nameEn} | MH India Trips`,
        es: seo.title?.es || `Viaje a ${tc.nameEs} | Guía de Turismo`,
        pt: seo.title?.pt || `Viagem para ${tc.namePt} | Guia de Viagem`
      },
      seoDesc: {
        en: seo.description?.en || `Essential travel guide, packages and information for ${tc.nameEn}.`,
        es: seo.description?.es || `Descubre ${tc.nameEs}: cómo llegar, atracciones principales y hoteles recomendados.`,
        pt: seo.description?.pt || `Descubra ${tc.namePt}: como chegar, atrações principais e hotéis recomendados.`
      },
      seoKeywords: {
        en: seo.keywords?.en || `${tc.nameEn} tourism, ${tc.nameEn} travel guide`,
        es: seo.keywords?.es || `viaje a ${tc.nameEs}, turismo en ${tc.nameEs}`,
        pt: seo.keywords?.pt || `viagem para ${tc.namePt}, turismo em ${tc.namePt}`
      }
    });
  });
});

// Save new states.json and cities.json
fs.writeFileSync(newStatesPath, JSON.stringify(newStates, null, 2), 'utf8');
fs.writeFileSync(newCitiesPath, JSON.stringify(newCities, null, 2), 'utf8');

console.log(`Migration completed successfully!`);
console.log(`Migrated ${newStates.length} states and ${newCities.length} cities.`);
