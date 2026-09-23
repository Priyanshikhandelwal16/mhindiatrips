const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const touristPlacesData = {
  "udaipur": [
    {
      name: { en: "City Palace Udaipur", es: "Palacio de la Ciudad de Udaipur", pt: "Palácio da Cidade de Udaipur" },
      image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?w=900&q=80",
      description: {
        en: "A majestic palace complex on the banks of Lake Pichola, showcasing Rajasthani and Mughal architecture, peacock mosaics, and marble balconies.",
        es: "Un majestuoso complejo palaciego a orillas del lago Pichola, que exhibe arquitectura de Rajastán y mogol con balcones de mármol.",
        pt: "Um majestoso complexo de palácios às margens do Lago Pichola, exibindo arquitetura do Rajastão e mogol com varandas de mármore."
      }
    },
    {
      name: { en: "Lake Pichola & Jagmandir", es: "Lago Pichola y Jagmandir", pt: "Lago Pichola e Jagmandir" },
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
      description: {
        en: "An iconic artificial freshwater lake featuring sunset boat cruises, floating marble island palaces, and views of the Aravalli hills.",
        es: "Un icónico lago de agua dulce con cruceros al atardecer, palacios flotantes de mármol y vistas a las colinas Aravalli.",
        pt: "Um icônico lago de água doce com passeios de barco ao pôr do sol, palácios flutuantes de mármore e vistas das colinas Aravalli."
      }
    },
    {
      name: { en: "Saheliyon Ki Bari", es: "Saheliyon Ki Bari", pt: "Saheliyon Ki Bari" },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "The historic 'Garden of the Maidens' featuring marble fountains, lotus pools, and manicured lawns built for royal ladies.",
        es: "El histórico 'Jardín de las Damas' que cuenta con fuentes de mármol, estanques de loto y hermosos jardines.",
        pt: "O histórico 'Jardim das Damas' com fontes de mármore, piscinas de lótus e belos jardins."
      }
    },
    {
      name: { en: "Jagdish Temple", es: "Templo Jagdish", pt: "Templo Jagdish" },
      image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=900&q=80",
      description: {
        en: "An ancient Indo-Aryan temple built in 1651 dedicated to Lord Vishnu, famous for its carved stone pillars and pagoda spire.",
        es: "Un antiguo templo indo-ario construido en 1651 dedicado al Señor Vishnu, famoso por sus pilares de piedra tallada.",
        pt: "Um antigo templo indo-ariano construído em 1651 dedicado ao Senhor Vishnu, famoso por seus pilares de pedra esculpida."
      }
    },
    {
      name: { en: "Fateh Sagar Lake", es: "Lago Fateh Sagar", pt: "Lago Fateh Sagar" },
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
      description: {
        en: "A picturesque lake surrounded by green hills, housing Nehru Park island accessible by speedboat.",
        es: "Un pintoresco lago rodeado de colinas verdes que alberga la isla Nehru Park accesible en lancha rápida.",
        pt: "Um pitoresco lago cercado por colinas verdes que abriga a ilha Nehru Park acessível por lancha."
      }
    },
    {
      name: { en: "Monsoon Palace (Sajjangarh)", es: "Palacio del Monzón (Sajjangarh)", pt: "Palácio das Monções (Sajjangarh)" },
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
      description: {
        en: "A hilltop fortress palace offering spectacular panoramic sunset views over Udaipur city and surrounding lakes.",
        es: "Una fortaleza en la cima de una colina que ofrece espectaculares vistas panorámicas del atardecer sobre Udaipur.",
        pt: "Uma fortaleza no topo de uma colina que oferece vistas panorâmicas espetaculares do pôr do sol sobre Udaipur."
      }
    }
  ],
  "jaipur": [
    {
      name: { en: "Amber Fort & Palace", es: "Fuerte y Palacio de Amber", pt: "Forte e Palácio de Amber" },
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
      description: {
        en: "A UNESCO World Heritage hilltop fortress of red sandstone and marble, featuring the breathtaking Sheesh Mahal (Mirror Palace).",
        es: "Una fortaleza Patrimonio de la Humanidad en lo alto de una colina de arenisca roja y mármol, con el impresionante Sheesh Mahal.",
        pt: "Uma fortaleza Patrimônio Mundial no topo de uma colina de arenito vermelho e mármore, com o deslumbrante Sheesh Mahal."
      }
    },
    {
      name: { en: "Hawa Mahal (Palace of Winds)", es: "Hawa Mahal (Palacio de los Vientos)", pt: "Hawa Mahal (Palácio dos Ventos)" },
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&q=80",
      description: {
        en: "A five-story honeycomb pink sandstone structure with 953 latticed windows built for royal women to observe street festivals.",
        es: "Una estructura de arenisca rosa de cinco pisos con 953 ventanas celosía construida para las damas reales.",
        pt: "Uma estrutura de arenito rosa de cinco andares com 953 janelas rendilhadas construída para as damas reais."
      }
    },
    {
      name: { en: "City Palace Jaipur", es: "Palacio de la Ciudad de Jaipur", pt: "Palácio da Cidade de Jaipur" },
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
      description: {
        en: "A grand royal residence in the heart of the Pink City, housing royal museums, courtyards, and the vibrant Peacock Gate.",
        es: "Una gran residencia real en el corazón de la Ciudad Rosa, que alberga museos reales y la colorida Puerta del Pavo Real.",
        pt: "Uma grande residência real no coração da Cidade Rosa, abrigando museus reais e o colorido Portão do Pavão."
      }
    },
    {
      name: { en: "Jantar Mantar", es: "Jantar Mantar", pt: "Jantar Mantar" },
      image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=900&q=80",
      description: {
        en: "A UNESCO World Heritage astronomical observatory containing 19 stone instruments, including the world's largest sundial.",
        es: "Un observatorio astronómico Patrimonio de la Humanidad con 19 instrumentos de piedra, incluido el reloj de sol más grande del mundo.",
        pt: "Um observatório astronômico Patrimônio Mundial com 19 instrumentos de pedra, incluindo o maior relógio de sol do mundo."
      }
    },
    {
      name: { en: "Nahargarh Fort", es: "Fuerte Nahargarh", pt: "Forte Nahargarh" },
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
      description: {
        en: "A rugged fort standing on the edge of the Aravalli hills, offering sweeping rooftop views of Jaipur city.",
        es: "Un fuerte situado al borde de las colinas Aravalli que ofrece amplias vistas panorámicas de la ciudad de Jaipur.",
        pt: "Um forte situado na borda das colinas Aravalli que oferece amplas vistas panorâmicas da cidade de Jaipur."
      }
    },
    {
      name: { en: "Jal Mahal", es: "Jal Mahal (Palacio del Agua)", pt: "Jal Mahal (Palácio da Água)" },
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
      description: {
        en: "A magnificent floating water palace in the center of Man Sagar Lake, beautifully illuminated at dusk.",
        es: "Un magnífico palacio flotante en el centro del lago Man Sagar, iluminado maravillosamente al anochecer.",
        pt: "Um magnífico palácio flutuante no centro do Lago Man Sagar, iluminado maravilhosamente ao anoitecer."
      }
    }
  ],
  "jodhpur": [
    {
      name: { en: "Mehrangarh Fort", es: "Fuerte Mehrangarh", pt: "Forte Mehrangarh" },
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
      description: {
        en: "One of India's largest and most formidable hill forts, towering 125 meters above the Blue City with royal museums.",
        es: "Uno de los fuertes más grandes de la India, elevado a 125 metros sobre la Ciudad Azul con museos reales.",
        pt: "Um dos maiores fortes da Índia, elevado a 125 metros sobre a Cidade Azul com museus reais."
      }
    },
    {
      name: { en: "Jaswant Thada", es: "Jaswant Thada", pt: "Jaswant Thada" },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "A graceful white marble cenotaph built in memory of Maharaja Jaswant Singh II, surrounded by carved gazebos.",
        es: "Un elegante cenotafio de mármol blanco construido en memoria del Maharaja Jaswant Singh II.",
        pt: "Um elegante cenotáfio de mármore branco construído em memória do Maharaja Jaswant Singh II."
      }
    },
    {
      name: { en: "Umaid Bhawan Palace", es: "Palacio Umaid Bhawan", pt: "Palácio Umaid Bhawan" },
      image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?w=900&q=80",
      description: {
        en: "One of the world's largest private royal residences, built with golden yellow sandstone in Art Deco architecture.",
        es: "Una de las residencias reales privadas más grandes del mundo, construida con arenisca dorada en estilo Art Déco.",
        pt: "Uma das maiores residências reais privadas do mundo, construída com arenito dourado em estilo Art Déco."
      }
    }
  ],
  "jaisalmer": [
    {
      name: { en: "Jaisalmer Fort (Sonar Qila)", es: "Fuerte de Jaisalmer (Sonar Qila)", pt: "Forte de Jaisalmer (Sonar Qila)" },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "A living golden sandstone fort emerging from the Thar Desert, housing homes, temples, and shops inside its walls.",
        es: "Un fuerte vivo de arenisca dorada que surge del desierto de Thar y alberga casas, templos y tiendas.",
        pt: "Um forte vivo de arenito dourado que surge do deserto de Thar e abriga casas, templos e lojas."
      }
    },
    {
      name: { en: "Patwon Ki Haveli", es: "Patwon Ki Haveli", pt: "Patwon Ki Haveli" },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "A cluster of five carved yellow sandstone mansions known for intricate balconies, jharokhas, and murals.",
        es: "Un grupo de cinco mansiones de arenisca amarilla esculpida famosas por sus elaborados balcones y celosías.",
        pt: "Um grupo de cinco mansões de arenito amarelo esculpido famosas por suas elaboradas varandas e treliças."
      }
    },
    {
      name: { en: "Sam Sand Dunes", es: "Dunas de Arena de Sam", pt: "Dunas de Areia de Sam" },
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=900&q=80",
      description: {
        en: "Rolling golden desert dunes in the Thar Desert, ideal for camel safaris, jeep dune bashing, and cultural folk nights.",
        es: "Dunas de arena dorada en el desierto de Thar, ideales para safaris en camello y noches culturales.",
        pt: "Dunas de areia dourada no deserto de Thar, ideais para safáris de camelo e noites culturais."
      }
    }
  ],
  "agra": [
    {
      name: { en: "Taj Mahal", es: "Taj Mahal", pt: "Taj Mahal" },
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
      description: {
        en: "The world-famous ivory-white marble mausoleum on the Yamuna river, a UNESCO World Heritage site and symbol of eternal love.",
        es: "El famoso mausoleo de mármol blanco marfil a orillas del río Yamuna, Patrimonio de la Humanidad y símbolo de amor.",
        pt: "O famoso mausoléu de mármore branco marfim às margens do rio Yamuna, Patrimônio Mundial e símbolo de amor."
      }
    },
    {
      name: { en: "Agra Fort", es: "Fuerte de Agra", pt: "Forte de Agra" },
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
      description: {
        en: "A massive red sandstone Mughal fortress that served as the main seat of Mughal emperors with royal palaces.",
        es: "Una enorme fortaleza mogol de arenisca roja que sirvió como residencia principal de los emperadores mogoles.",
        pt: "Uma enorme fortaleza mogol de arenito vermelho que serviu como residência principal dos imperadores mogóis."
      }
    },
    {
      name: { en: "Fatehpur Sikri", es: "Fatehpur Sikri", pt: "Fatehpur Sikri" },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "The historic deserted red sandstone capital built by Emperor Akbar, featuring Buland Darwaza and Salim Chisti Tomb.",
        es: "La histórica capital desierta de arenisca roja construida por el emperador Akbar con la imponente Buland Darwaza.",
        pt: "A histórica capital deserta de arenito vermelho construída pelo imperador Akbar com a imponente Buland Darwaza."
      }
    }
  ],
  "varanasi": [
    {
      name: { en: "Dashashwamedh Ghat & Evening Aarti", es: "Dashashwamedh Ghat y Ganga Aarti", pt: "Dashashwamedh Ghat e Ganga Aarti" },
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
      description: {
        en: "The central sacred ghat on the Ganges river, world-renowned for its grand daily evening Ganga Aarti ceremony.",
        es: "El ghat sagrado central en el río Ganges, famoso por su grandiosa ceremonia diaria de Ganga Aarti al anochecer.",
        pt: "O ghat sagrado central no rio Ganges, famoso por sua grandiosa cerimônia diária de Ganga Aarti ao anoitecer."
      }
    },
    {
      name: { en: "Kashi Vishwanath Temple", es: "Templo Kashi Vishwanath", pt: "Templo Kashi Vishwanath" },
      image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=900&q=80",
      description: {
        en: "One of the twelve sacred Jyotirlingas dedicated to Lord Shiva, with a golden spire and rich spiritual heritage.",
        es: "Uno de los doce sagrados Jyotirlingas dedicados al Señor Shiva, con una aguja de oro y rico patrimonio espiritual.",
        pt: "Um dos doze sagrados Jyotirlingas dedicados ao Senhor Shiva, com uma torre de ouro e rico patrimônio espiritual."
      }
    },
    {
      name: { en: "Sarnath", es: "Sarnath", pt: "Sarnath" },
      image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
      description: {
        en: "The historic Buddhist pilgrimage site where Lord Buddha gave his first sermon after attaining enlightenment.",
        es: "El histórico sitio de peregrinación budista donde Buda dio su primer sermón tras alcanzar la iluminación.",
        pt: "O histórico local de peregrinação budista onde Buda deu seu primeiro sermão após alcançar a iluminação."
      }
    }
  ],
  "kochi": [
    {
      name: { en: "Chinese Fishing Nets", es: "Redes de Pesca Chinas", pt: "Redes de Pesca Chinesas" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: "Iconic cantilevered fishing nets along the Fort Kochi waterfront, introduced by Chinese traders in the 14th century.",
        es: "Icónicas redes de pesca voladizas a lo largo del paseo marítimo de Fort Kochi, introducidas en el siglo XIV.",
        pt: "Icônicas redes de pesca flutuantes ao longo da orla de Fort Kochi, introduzidas no século XIV."
      }
    },
    {
      name: { en: "Mattancherry Palace (Dutch Palace)", es: "Palacio Mattancherry (Palacio Holandés)", pt: "Palácio Mattancherry (Palácio Holandês)" },
      image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?w=900&q=80",
      description: {
        en: "A Portuguese-built palace featuring detailed Hindu temple murals and royal Kerala portraits.",
        es: "Un palacio construido por los portugueses que cuenta con detallados murales de templos hindúes.",
        pt: "Um palácio construído pelos portugueses que apresenta detalhados murais de templos hindus."
      }
    }
  ],
  "munnar": [
    {
      name: { en: "Tea Gardens & Kannan Devan Tea Museum", es: "Plantaciones de Té y Museo Kannan Devan", pt: "Plantações de Chá e Museu Kannan Devan" },
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&q=80",
      description: {
        en: "Rolling emerald tea plantations and a historic museum demonstrating traditional tea processing.",
        es: "Ondulantes plantaciones de té color esmeralda y un museo histórico que muestra el procesamiento tradicional.",
        pt: "Ondulantes plantações de chá verde-esmeralda e um museu histórico que mostra o processamento tradicional."
      }
    },
    {
      name: { en: "Eravikulam National Park", es: "Parque Nacional Eravikulam", pt: "Parque Nacional Eravikulam" },
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=900&q=80",
      description: {
        en: "Home to the endangered Nilgiri Tahr mountain goat and the famous Neelakurinji flowers.",
        es: "Hogar de la cabra montés Tahr de Nilgiri en peligro de extinción y de las famosas flores Neelakurinji.",
        pt: "Lar da cabra montanhesa Tahr de Nilgiri em perigo de extinção e das famosas flores Neelakurinji."
      }
    }
  ],
  "goa": [
    {
      name: { en: "Basilica of Bom Jesus", es: "Basílica del Buen Jesús", pt: "Basílica do Bom Jesus" },
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
      description: {
        en: "A UNESCO World Heritage baroque church containing the sacred mortal remains of St. Francis Xavier.",
        es: "Una iglesia barroca Patrimonio de la Humanidad que contiene los restos de San Francisco Javier.",
        pt: "Uma igreja barroca Patrimônio Mundial que contém os restos mortais de São Francisco Xavier."
      }
    },
    {
      name: { en: "Baga & Calangute Beach", es: "Playa de Baga y Calangute", pt: "Praia de Baga e Calangute" },
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
      description: {
        en: "Vibrant golden sand beaches known for water sports, beach shacks, and night markets.",
        es: "Vibrantes playas de arena dorada conocidas por los deportes acuáticos, chiringuitos y mercados nocturnos.",
        pt: "Vibrantes praias de areia dourada conhecidas por esportes aquáticos, quiosques e mercados noturnos."
      }
    }
  ],
  "mumbai": [
    {
      name: { en: "Gateway of India", es: "Puerta de la India", pt: "Porta da Índia" },
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80",
      description: {
        en: "The grand waterfront basalt arch monument built in 1911 overlooking the Arabian Sea harbor.",
        es: "El gran monumento en forma de arco frente al mar construido en 1911 con vista al mar Arábigo.",
        pt: "O grande monumento em forma de arco à beira-mar construído em 1911 com vista para o Mar Arábico."
      }
    },
    {
      name: { en: "Marine Drive", es: "Marine Drive", pt: "Marine Drive" },
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=80",
      description: {
        en: "A 3.6-km C-shaped boulevard along the coast, offering stunning sunset views and twinkling night lights.",
        es: "Un bulevar costero de 3.6 km que ofrece espectaculares vistas del atardecer y luces nocturnas.",
        pt: "Um bulevar litorâneo de 3.6 km que oferece espetaculares vistas do pôr do sol e luzes noturnas."
      }
    }
  ]
};

let count = 0;
cities.forEach(city => {
  const places = touristPlacesData[city.id];
  if (places) {
    city.touristPlaces = places;
    count++;
  } else {
    // Generate default tourist places if city has content/description
    const cityName = city.name?.en || city.id;
    city.touristPlaces = [
      {
        name: { 
          en: `${cityName} Heritage Fortress & Monuments`, 
          es: `Fortaleza y Monumentos de ${cityName}`, 
          pt: `Fortaleza e Monumentos de ${cityName}` 
        },
        image: city.image || "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900&q=80",
        description: {
          en: `Explore iconic historic architecture, royal heritage sites, and cultural landmarks of ${cityName}.`,
          es: `Explore la icónica arquitectura histórica y los lugares de interés cultural de ${cityName}.`,
          pt: `Explore a icônica arquitetura histórica e os pontos de interesse cultural de ${cityName}.`
        }
      },
      {
        name: { 
          en: `${cityName} Local Culture & Markets`, 
          es: `Cultura Local y Mercados de ${cityName}`, 
          pt: `Cultura Local e Mercados de ${cityName}` 
        },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: {
          en: `Experience traditional markets, local handicrafts, authentic street cuisine, and regional hospitality in ${cityName}.`,
          es: `Experimente los mercados tradicionales, la artesanía local y la gastronomía de ${cityName}.`,
          pt: `Experimente os mercados tradicionais, o artesanato local e a gastronomia de ${cityName}.`
        }
      }
    ];
    count++;
  }
});

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Successfully populated touristPlaces for ${count} cities in fallback JSON!`);
