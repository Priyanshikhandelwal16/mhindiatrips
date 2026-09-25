const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');
let cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

// 1. Fix Chennai stateId if it's madhya-pradesh
const chennaiIdx = cities.findIndex(c => c.id === 'chennai');
if (chennaiIdx !== -1 && cities[chennaiIdx].stateId === 'madhya-pradesh') {
  cities[chennaiIdx].stateId = 'tamil-nadu';
  console.log('Fixed Chennai stateId to tamil-nadu');
}

// 2. Omkareshwar object definition
const omkareshwarCity = {
  id: "omkareshwar",
  stateId: "madhya-pradesh",
  isPublished: true,
  isDeleted: false,
  displayOrder: 13,
  name: {
    en: "Omkareshwar",
    es: "Omkareshwar",
    pt: "Omkareshwar"
  },
  slug: {
    en: "omkareshwar",
    es: "omkareshwar",
    pt: "omkareshwar"
  },
  image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
  description: {
    en: "Omkareshwar is a revered holy island town in Madhya Pradesh shaped like the sacred symbol 'OM' in the Narmada River. Famous for the Shri Omkareshwar Jyotirlinga temple, ancient riverside ghats, suspension bridges, and peaceful island parikrama.",
    es: "Omkareshwar es un venerado pueblo sagrado en una isla de Madhya Pradesh con forma del símbolo 'OM' en el río Narmada. Famoso por el templo Shri Omkareshwar Jyotirlinga y sus tranquilos ghats.",
    pt: "Omkareshwar é uma sagrada cidade insular em Madhya Pradesh com o formato do símbolo 'OM' no rio Narmada. Famosa pelo templo Shri Omkareshwar Jyotirlinga e seus tranquilos ghats."
  },
  seoTitle: {
    en: "Travel to Omkareshwar | Jyotirlinga & Narmada River Guide",
    es: "Viaje a Omkareshwar | Guía del Templo Jyotirlinga y Río Narmada",
    pt: "Viagem para Omkareshwar | Guia do Templo Jyotirlinga e Rio Narmada"
  },
  seoDesc: {
    en: "Complete Omkareshwar travel guide: Shri Omkareshwar Jyotirlinga temple, Mamleshwar temple, Narmada boating, Mandhata island trek and packages.",
    es: "Guía completa de viaje a Omkareshwar: templo Jyotirlinga, templo Mamleshwar, paseos en bote por el río Narmada y senderismo en la isla.",
    pt: "Guia completo de viagem para Omkareshwar: templo Jyotirlinga, templo Mamleshwar, passeios de barco pelo rio Narmada e caminhadas na ilha."
  },
  seoKeywords: {
    en: "Omkareshwar tourism, Omkareshwar travel guide, Omkareshwar Jyotirlinga, Mandhata island, Narmada boating, omkareshwar pachamrhi mp cities",
    es: "viaje a Omkareshwar, turismo en Omkareshwar, templo Jyotirlinga",
    pt: "viagem para Omkareshwar, turismo em Omkareshwar, templo Jyotirlinga"
  },
  touristPlaces: [
    {
      name: {
        en: "Shri Omkareshwar Jyotirlinga Temple",
        es: "Templo Shri Omkareshwar Jyotirlinga",
        pt: "Templo Shri Omkareshwar Jyotirlinga"
      },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "One of the 12 sacred Shiva Jyotirlingas in India, situated on the OM-shaped Mandhata island on the sacred Narmada River.",
        es: "Uno de los 12 Jyotirlingas sagrados de Shiva en India, situado en la isla Mandhata con forma de OM en el río Narmada.",
        pt: "Um dos 12 sagrados Jyotirlingas de Shiva na Índia, situado na ilha Mandhata com formato de OM no rio Narmada."
      }
    },
    {
      name: {
        en: "Mamleshwar (Amareshwar) Temple",
        es: "Templo Mamleshwar (Amareshwar)",
        pt: "Templo Mamleshwar (Amareshwar)"
      },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: "An ancient stone temple located on the southern bank of the Narmada River, historically considered an integral part of the Jyotirlinga pilgrimage.",
        es: "Un antiguo templo de piedra ubicado en la orilla sur del río Narmada, considerado parte integral de la peregrinación Jyotirlinga.",
        pt: "Um antigo templo de pedra localizado na margem sul do rio Narmada, considerado parte integral da peregrinação Jyotirlinga."
      }
    },
    {
      name: {
        en: "Narmada Ghats & Jhula Pul (Hanging Bridges)",
        es: "Ghats del Narmada y Puentes Colgantes (Jhula Pul)",
        pt: "Ghats do Narmada e Pontes Suspensas (Jhula Pul)"
      },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "Scenic riverfront ghats for evening aarti ceremonies, bathing, and iconic suspension bridges connecting the mainland to Mandhata Island.",
        es: "Escénicos ghats a orillas del río para ceremonias aarti, baños sagrados e icónicos puentes colgantes.",
        pt: "Cênicos ghats à beira do rio para cerimônias aarti, banhos sagrados e icônicas pontes suspensas."
      }
    },
    {
      name: {
        en: "Mandhata Island Parikrama & Sangam",
        es: "Parikrama de la Isla Mandhata y Confluencia Sangam",
        pt: "Parikrama da Ilha Mandhata e Confluência Sangam"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "A 7-km sacred walking trail around the island passing ancient shrines, cave ruins, and the peaceful Kaveri-Narmada river confluence.",
        es: "Un sendero sagrado de 7 km alrededor de la isla que pasa por antiguos santuarios, ruinas de cuevas y la confluencia de los ríos.",
        pt: "Uma trilha sagrada de 7 km ao redor da ilha passando por antigos santuários, ruínas de cavernas e a confluência dos rios."
      }
    }
  ]
};

// 3. Pachmarhi object definition
const pachmarhiCity = {
  id: "pachmarhi",
  stateId: "madhya-pradesh",
  isPublished: true,
  isDeleted: false,
  displayOrder: 14,
  name: {
    en: "Pachmarhi",
    es: "Pachmarhi",
    pt: "Pachmarhi"
  },
  slug: {
    en: "pachmarhi",
    es: "pachmarhi",
    pt: "pachmarhi"
  },
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
  description: {
    en: "Pachmarhi (also known as Pachamrhi), known as 'Satpura ki Rani' (Queen of Satpura), is Madhya Pradesh's sole hill station. Nestled amidst pine forests, waterfalls, ancient caves, and green gorges inside the UNESCO Satpura Biosphere Reserve.",
    es: "Pachmarhi (también conocido como Pachamrhi), conocida como la 'Reina de Satpura', es la única estación de montaña de Madhya Pradesh. Rodeada de bosques de pinos, cascadas y cuevas antiguas.",
    pt: "Pachmarhi (também conhecido como Pachamrhi), conhecida como a 'Rainha de Satpura', é a única estância de montanha de Madhya Pradesh. Cercada por florestas de pinheiros, cachoeiras e cavernas antigas."
  },
  seoTitle: {
    en: "Travel to Pachmarhi | Queen of Satpura & Bee Falls Guide",
    es: "Viaje a Pachmarhi | Guía de la Reina de Satpura y Cascadas",
    pt: "Viagem para Pachmarhi | Guia da Rainha de Satpura e Cachoeiras"
  },
  seoDesc: {
    en: "Explore Pachmarhi hill station (Pachamrhi): Bee Falls, Dhupgarh sunset, Pandav Caves, Jata Shankar cave temple and Satpura Tiger Reserve guide.",
    es: "Descubre Pachmarhi (Pachamrhi): cascadas Bee Falls, atardecer en Dhupgarh, cuevas Pandav, cueva Jata Shankar y parque nacional Satpura.",
    pt: "Descubra Pachmarhi (Pachamrhi): cachoeiras Bee Falls, pôr do sol em Dhupgarh, cavernas Pandav, caverna Jata Shankar e parque nacional Satpura."
  },
  seoKeywords: {
    en: "Pachmarhi tourism, Pachamrhi hill station, Pachmarhi travel guide, Bee Falls Pachmarhi, Dhupgarh sunset, Satpura biosphere reserve",
    es: "viaje a Pachmarhi, Pachamrhi estacion de montana, turismo en Pachmarhi",
    pt: "viagem para Pachmarhi, Pachamrhi estância de montanha, turismo em Pachmarhi"
  },
  touristPlaces: [
    {
      name: {
        en: "Bee Falls (Jamuna Prapat)",
        es: "Cascadas Bee Falls (Jamuna Prapat)",
        pt: "Cachoeiras Bee Falls (Jamuna Prapat)"
      },
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80",
      description: {
        en: "A stunning perennial waterfall cascading down green rocky cliffs, popular for bathing and refreshing nature walks.",
        es: "Una impresionante cascada perenne que cae por acantilados rocosos verdes, ideal para refrescarse y pasear por la naturaleza.",
        pt: "Uma impressionante cachoeira perene caindo por penhascos rochosos verdes, popular para se refrescar e caminhadas na natureza."
      }
    },
    {
      name: {
        en: "Dhupgarh Sunset & Sunrise Point",
        es: "Mirador Dhupgarh (Atardecer y Amanecer)",
        pt: "Mirante Dhupgarh (Pôr do Sol e Nascer do Sol)"
      },
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=80",
      description: {
        en: "The highest peak in Madhya Pradesh (1,350 meters) offering panoramic sunset views across the Satpura range and deep valleys.",
        es: "El pico más alto de Madhya Pradesh (1.350 metros) con vistas panorámicas del atardecer sobre las montañas de Satpura.",
        pt: "O pico mais alto de Madhya Pradesh (1.350 metros) oferecendo vistas panorâmicas do pôr do sol sobre as montanhas de Satpura."
      }
    },
    {
      name: {
        en: "Pandav Caves",
        es: "Cuevas de los Pandavas (Pandav Caves)",
        pt: "Cavernas dos Pandavas (Pandav Caves)"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80",
      description: {
        en: "Five 9th-century rock-cut Buddhist caves carved into a sandstone hillock, locally associated with the exile of the Pandava brothers.",
        es: "Cinco cuevas budistas del siglo IX talladas en piedra arenisca, asociadas localmente con el exilio de los hermanos Pandava.",
        pt: "Cinco cavernas budistas do século IX esculpidas em arenito, associadas localmente ao exílio dos irmãos Pandava."
      }
    },
    {
      name: {
        en: "Jata Shankar Cave Temple",
        es: "Templo en la Cueva Jata Shankar",
        pt: "Templo na Caverna Jata Shankar"
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "A natural cave shrine located in a deep ravine where natural rock formations resemble the matted hair (Jata) of Lord Shiva.",
        es: "Un santuario natural en una cueva profunda donde las formaciones rocosas parecen el cabello enredado (Jata) del Señor Shiva.",
        pt: "Um santuário natural em uma caverna profunda onde formações rochosas lembram os cabelos emaranhados (Jata) do Senhor Shiva."
      }
    }
  ]
};

// Add or update Omkareshwar
const omkaIdx = cities.findIndex(c => c.id === 'omkareshwar');
if (omkaIdx !== -1) {
  cities[omkaIdx] = omkareshwarCity;
  console.log('Updated existing Omkareshwar entry');
} else {
  cities.push(omkareshwarCity);
  console.log('Added new Omkareshwar entry');
}

// Add or update Pachmarhi
const pachIdx = cities.findIndex(c => c.id === 'pachmarhi');
if (pachIdx !== -1) {
  cities[pachIdx] = pachmarhiCity;
  console.log('Updated existing Pachmarhi entry with full rich data');
} else {
  cities.push(pachmarhiCity);
  console.log('Added new Pachmarhi entry');
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf-8');
console.log('Successfully updated cities.json!');
