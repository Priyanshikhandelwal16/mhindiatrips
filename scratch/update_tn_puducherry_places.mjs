import fs from 'fs';

// 1. Ensure Puducherry state in states.json
const states = JSON.parse(fs.readFileSync('src/data/fallback/states.json', 'utf8'));

let puducherryState = states.find(s => s.id === 'puducherry');
if (!puducherryState) {
  puducherryState = {
    id: "puducherry",
    name: { en: "Puducherry", es: "Puducherry", pt: "Puducherry" },
    slug: { en: "puducherry", es: "puducherry", pt: "puducherry" },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Puducherry (formerly Pondicherry) is a charming Union Territory of India, famous for French colonial architecture, spiritual havens like Auroville, quiet beaches, and seaside promenades.",
      es: "Puducherry (anteriormente Pondicherry) es un encantador Territorio de la Unión de la India, famoso por su arquitectura colonial francesa, centros espirituales como Auroville y tranquilos paseos marítimos.",
      pt: "Puducherry (anteriormente Pondicherry) é um encantador Território da União da Índia, famoso por sua arquitetura colonial francesa, centros espirituais como Auroville e calçadões à beira-mar."
    },
    seoTitle: {
      en: "Puducherry Tourism | Places to Visit & Travel Guide",
      es: "Turismo en Puducherry | Lugares para Visitar y Guía de Viajes",
      pt: "Turismo em Puducherry | Lugares para Visitar e Guia de Viagem"
    },
    seoDesc: {
      en: "Discover Puducherry travel guide, French Quarter, Auroville, beaches and top attractions.",
      es: "Descubre la guía de viajes de Puducherry, Barrio Francés, Auroville y principales atracciones.",
      pt: "Descubra o guia de viagem de Puducherry, Bairro Francês, Auroville e principais atrações."
    },
    seoKeywords: {
      en: ["Puducherry", "Pondicherry", "Auroville", "French Quarter"],
      es: ["Puducherry", "Pondicherry", "Auroville", "Barrio Francés"],
      pt: ["Puducherry", "Pondicherry", "Auroville", "Bairro Francês"]
    }
  };
  states.push(puducherryState);
  fs.writeFileSync('src/data/fallback/states.json', JSON.stringify(states, null, 2), 'utf8');
  console.log('Added Puducherry to states.json');
}

// 2. Update 9 cities in cities.json
const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const cityPlacesData = {
  "yanam": [
    {
      name: { en: "Yanam Church", es: "Iglesia de Yanam", pt: "Igreja de Yanam" },
      description: {
        en: "Yanam Church is a historic religious landmark known for its elegant architecture and peaceful surroundings. It reflects the region's distinctive French-influenced cultural heritage.",
        es: "La Iglesia de Yanam es un monumento religioso histórico conocido por su elegante arquitectura y ambiente tranquilo. Refleja la particular herencia cultural de influencia francesa de la región.",
        pt: "A Igreja de Yanam é um importante monumento religioso histórico, conhecido por sua arquitetura elegante e ambiente tranquilo. O local reflete a herança cultural de influência francesa da região."
      },
      tags: {
        en: ["Yanam Church", "Heritage", "Architecture", "Yanam"],
        es: ["Iglesia de Yanam", "Patrimonio", "Arquitectura", "Yanam"],
        pt: ["Igreja de Yanam", "Patrimônio", "Arquitetura", "Yanam"]
      }
    },
    {
      name: { en: "Yanam Ferry Road", es: "Yanam Ferry Road", pt: "Yanam Ferry Road" },
      description: {
        en: "Yanam Ferry Road offers scenic views of the Godavari River and is a pleasant place to experience the town's riverside landscape.",
        es: "Yanam Ferry Road ofrece hermosas vistas del río Godavari y es un lugar agradable para disfrutar del paisaje ribereño de la ciudad.",
        pt: "Yanam Ferry Road oferece belas vistas do rio Godavari e é um lugar agradável para apreciar a paisagem ribeirinha da cidade."
      },
      tags: {
        en: ["Yanam Ferry Road", "Godavari", "Riverside", "Nature"],
        es: ["Yanam Ferry Road", "Godavari", "Ribera", "Naturaleza"],
        pt: ["Yanam Ferry Road", "Godavari", "Margem do Rio", "Natureza"]
      }
    },
    {
      name: { en: "Rajiv Gandhi Beach", es: "Rajiv Gandhi Beach", pt: "Rajiv Gandhi Beach" },
      description: {
        en: "Rajiv Gandhi Beach is a peaceful waterfront attraction where visitors can enjoy the riverside environment and relaxing views.",
        es: "Rajiv Gandhi Beach es una tranquila atracción frente al agua donde los visitantes pueden disfrutar del entorno y de las vistas del río.",
        pt: "Rajiv Gandhi Beach é uma tranquila atração à beira da água, onde os visitantes podem apreciar a paisagem e o ambiente ribeirinho."
      },
      tags: {
        en: ["Rajiv Gandhi Beach", "Yanam", "Waterfront", "Nature"],
        es: ["Rajiv Gandhi Beach", "Yanam", "Paseo Marítimo", "Naturaleza"],
        pt: ["Rajiv Gandhi Beach", "Yanam", "Orla", "Natureza"]
      }
    },
    {
      name: { en: "Yanam Tower", es: "Yanam Tower", pt: "Yanam Tower" },
      description: {
        en: "Yanam Tower is a recognizable local landmark and an interesting stop for visitors exploring the historic character of Yanam.",
        es: "Yanam Tower es un monumento local reconocible y un lugar interesante para quienes exploran el carácter histórico de Yanam.",
        pt: "Yanam Tower é um marco local reconhecido e uma parada interessante para quem deseja conhecer o caráter histórico de Yanam."
      },
      tags: {
        en: ["Yanam Tower", "Landmark", "Yanam", "Heritage"],
        es: ["Yanam Tower", "Monumento", "Yanam", "Patrimonio"],
        pt: ["Yanam Tower", "Monumento", "Yanam", "Patrimônio"]
      }
    },
    {
      name: { en: "Godavari River", es: "Río Godavari", pt: "Rio Godavari" },
      description: {
        en: "The Godavari River is one of the defining natural features of Yanam. Its riverside setting provides beautiful landscapes and a peaceful atmosphere.",
        es: "El río Godavari es uno de los principales elementos naturales de Yanam. Su entorno ribereño ofrece hermosos paisajes y un ambiente tranquilo.",
        pt: "O rio Godavari é uma das principais características naturais de Yanam. Sua paisagem ribeirinha oferece belas vistas e uma atmosfera tranquila."
      },
      tags: {
        en: ["Godavari River", "Yanam", "River", "Nature"],
        es: ["Río Godavari", "Yanam", "Río", "Naturaleza"],
        pt: ["Rio Godavari", "Yanam", "Rio", "Natureza"]
      }
    }
  ],
  "chennai": [
    {
      name: { en: "Marina Beach", es: "Marina Beach", pt: "Marina Beach" },
      address: "Triplicane, Chennai, Tamil Nadu 600005, India",
      phone: "+91180042531111",
      description: {
        en: "Marina Beach is one of Chennai's most iconic attractions and one of the city's defining coastal landscapes. The long beachfront is popular for walks, sunrise views and experiencing Chennai's lively seaside atmosphere.",
        es: "Marina Beach es una de las atracciones más emblemáticas de Chennai y uno de sus paisajes costeros más reconocibles. La extensa playa es popular para caminar y disfrutar del amanecer.",
        pt: "Marina Beach é uma das atrações mais famosas de Chennai e uma das paisagens costeiras mais conhecidas da cidade. A longa praia é popular para caminhadas e para apreciar o nascer do sol."
      },
      tags: {
        en: ["Marina Beach", "Chennai", "Beach", "Arabian Sea"],
        es: ["Marina Beach", "Chennai", "Playa", "Mar"],
        pt: ["Marina Beach", "Chennai", "Praia", "Mar"]
      }
    },
    {
      name: { en: "Kapaleeshwarar Temple", es: "Templo Kapaleeshwarar", pt: "Templo Kapaleeshwarar" },
      description: {
        en: "Kapaleeshwarar Temple is a magnificent Dravidian-style temple dedicated to Lord Shiva. Its colorful gopuram, intricate sculptures and traditional architecture make it an important cultural landmark of Chennai.",
        es: "El Templo Kapaleeshwarar es un magnífico templo de estilo dravídico dedicado al dios Shiva. Su colorido gopuram y sus esculturas lo convierten en un importante monumento cultural.",
        pt: "O Templo Kapaleeshwarar é um magnífico templo em estilo dravidiano dedicado ao deus Shiva. Seu gopuram colorido e esculturas detalhadas fazem dele um importante marco cultural de Chennai."
      },
      tags: {
        en: ["Kapaleeshwarar Temple", "Chennai", "Shiva Temple", "Dravidian Architecture"],
        es: ["Templo Kapaleeshwarar", "Chennai", "Templo de Shiva", "Arquitectura Dravídica"],
        pt: ["Templo Kapaleeshwarar", "Chennai", "Templo de Shiva", "Arquitetura Dravidiana"]
      }
    },
    {
      name: { en: "Fort St. George", es: "Fort St. George", pt: "Fort St. George" },
      address: "Rajaji Rd, near Legislature and Secretariat, Fort St George, Chennai, Tamil Nadu 600009, India",
      description: {
        en: "Fort St. George is a historic colonial-era complex and one of Chennai's most important heritage landmarks. The fort contains historic buildings, a museum and architectural reminders of the city's colonial past.",
        es: "Fort St. George es un histórico complejo de la época colonial y uno de los principales lugares patrimoniales de Chennai. Conserva edificios históricos y un museo.",
        pt: "Fort St. George é um histórico complexo da época colonial e um dos principais locais patrimoniais de Chennai. O local possui edifícios históricos e um museu."
      },
      tags: {
        en: ["Fort St. George", "Chennai", "Colonial Heritage", "History"],
        es: ["Fort St. George", "Chennai", "Patrimonio Colonial", "Historia"],
        pt: ["Fort St. George", "Chennai", "Patrimônio Colonial", "História"]
      }
    },
    {
      name: { en: "Government Museum Chennai", es: "Museo del Gobierno de Chennai", pt: "Government Museum de Chennai" },
      address: "Pantheon Rd, Egmore, Chennai, Tamil Nadu 600008, India",
      phone: "+914428193238",
      description: {
        en: "The Government Museum in Chennai is one of India's important museums, featuring archaeological artifacts, sculptures, bronze collections and cultural treasures from South India.",
        es: "El Museo del Gobierno de Chennai es uno de los museos importantes de la India y alberga piezas arqueológicas, esculturas, bronces y tesoros culturales del sur de la India.",
        pt: "O Government Museum de Chennai é um dos importantes museus da Índia, com artefatos arqueológicos, esculturas, bronzes e tesouros culturais do sul da Índia."
      },
      tags: {
        en: ["Government Museum", "Chennai", "Museum", "Archaeology"],
        es: ["Museo del Gobierno", "Chennai", "Museo", "Arqueología"],
        pt: ["Government Museum", "Chennai", "Museu", "Arqueologia"]
      }
    },
    {
      name: { en: "San Thome Basilica", es: "Basílica de San Thome", pt: "Basílica de San Thome" },
      description: {
        en: "San Thome Basilica is a historic Christian church built in the Gothic Revival style. Its connection with the traditional history of St. Thomas makes it an important religious and architectural attraction.",
        es: "La Basílica de San Thome es una histórica iglesia construida en estilo neogótico. Su relación con la tradición de Santo Tomás la convierte en un importante lugar religioso.",
        pt: "A Basílica de San Thome é uma igreja histórica construída em estilo neogótico. Sua ligação com a tradição de São Tomé faz dela uma importante atração religiosa e arquitetônica."
      },
      tags: {
        en: ["San Thome Basilica", "Chennai", "Church", "Heritage"],
        es: ["Basílica de San Thome", "Chennai", "Iglesia", "Patrimonio"],
        pt: ["Basílica de San Thome", "Chennai", "Igreja", "Patrimônio"]
      }
    }
  ],
  "pondicherry-mahe": [
    {
      name: { en: "St. Teresa Shrine", es: "Santuario de Santa Teresa", pt: "Santuário de Santa Teresa" },
      description: {
        en: "St. Teresa Shrine is one of Mahe's important religious landmarks. Its peaceful atmosphere and historic character reflect the cultural heritage of this small coastal region.",
        es: "El Santuario de Santa Teresa es uno de los principales lugares religiosos de Mahe. Su ambiente tranquilo refleja el patrimonio cultural de esta región costera.",
        pt: "O Santuário de Santa Teresa é um dos principais locais religiosos de Mahe. Sua atmosfera tranquila reflete o patrimônio cultural desta região costeira."
      },
      tags: {
        en: ["St. Teresa Shrine", "Mahe", "Heritage", "Church"],
        es: ["Santuario de Santa Teresa", "Mahe", "Patrimonio", "Iglesia"],
        pt: ["Santuário de Santa Teresa", "Mahe", "Patrimônio", "Igreja"]
      }
    },
    {
      name: { en: "Mahe River", es: "Río Mahe", pt: "Rio Mahe" },
      description: {
        en: "The Mahe River is one of the most scenic natural features of the region. Its peaceful waterways and lush surroundings create a beautiful setting for exploring Mahe.",
        es: "El río Mahe es uno de los principales atractivos naturales de la región. Sus aguas tranquilas y vegetación crean un hermoso paisaje.",
        pt: "O rio Mahe é uma das principais atrações naturais da região. Suas águas tranquilas e vegetação criam uma bela paisagem."
      },
      tags: {
        en: ["Mahe River", "Mahe", "River", "Nature"],
        es: ["Río Mahe", "Mahe", "Río", "Naturaleza"],
        pt: ["Rio Mahe", "Mahe", "Rio", "Natureza"]
      }
    },
    {
      name: { en: "Mahe Beach", es: "Mahe Beach", pt: "Mahe Beach" },
      description: {
        en: "Mahe Beach offers a peaceful coastal experience with scenic views of the Arabian Sea. It is ideal for visitors looking for a quiet seaside atmosphere.",
        es: "Mahe Beach ofrece una tranquila experiencia costera con vistas al mar Arábigo. Es ideal para quienes buscan un ambiente relajado junto al mar.",
        pt: "Mahe Beach oferece uma experiência costeira tranquila com belas vistas do Mar Arábico. É ideal para quem busca um ambiente relaxante à beira-mar."
      },
      tags: {
        en: ["Mahe Beach", "Mahe", "Beach", "Arabian Sea"],
        es: ["Mahe Beach", "Mahe", "Playa", "Mar Arábigo"],
        pt: ["Mahe Beach", "Mahe", "Praia", "Mar Arábico"]
      }
    },
    {
      name: { en: "Tagore Park", es: "Tagore Park", pt: "Tagore Park" },
      description: {
        en: "Tagore Park is a pleasant public space in Mahe surrounded by greenery. It provides a peaceful environment for visitors to relax and enjoy the local atmosphere.",
        es: "Tagore Park es un agradable espacio público rodeado de vegetación. Ofrece un ambiente tranquilo para relajarse y disfrutar del entorno local.",
        pt: "Tagore Park é um agradável espaço público cercado por vegetação. Oferece um ambiente tranquilo para relaxar e apreciar a atmosfera local."
      },
      tags: {
        en: ["Tagore Park", "Mahe", "Park", "Nature"],
        es: ["Tagore Park", "Mahe", "Parque", "Naturaleza"],
        pt: ["Tagore Park", "Mahe", "Parque", "Natureza"]
      }
    },
    {
      name: { en: "Mahe Walkway", es: "Paseo de Mahe", pt: "Passeio de Mahe" },
      description: {
        en: "The Mahe riverside walkway offers scenic views and a relaxing way to explore the town's coastal and river landscapes.",
        es: "El paseo de Mahe ofrece hermosas vistas y una forma agradable de explorar los paisajes fluviales y costeros de la ciudad.",
        pt: "O passeio de Mahe oferece belas vistas e uma maneira agradável de explorar as paisagens ribeirinhas e costeiras da cidade."
      },
      tags: {
        en: ["Mahe Walkway", "Mahe", "Riverside", "Nature"],
        es: ["Paseo de Mahe", "Mahe", "Ribera", "Naturaleza"],
        pt: ["Passeio de Mahe", "Mahe", "Margem do Rio", "Natureza"]
      }
    }
  ],
  "rameshwaram": [
    {
      name: { en: "Ramanathaswamy Temple", es: "Templo Ramanathaswamy", pt: "Templo Ramanathaswamy" },
      address: "E Car St, Rameswaram, Tamil Nadu 623526, India",
      phone: "+914573221223",
      description: {
        en: "Ramanathaswamy Temple is one of India's most important pilgrimage temples and one of the twelve Jyotirlinga sites. It is famous for its enormous corridors, detailed pillars and Dravidian architecture.",
        es: "El Templo Ramanathaswamy es uno de los templos de peregrinación más importantes de la India y uno de los doce lugares Jyotirlinga. Es famoso por sus enormes corredores y arquitectura dravídica.",
        pt: "O Templo Ramanathaswamy é um dos mais importantes templos de peregrinação da Índia e um dos doze locais Jyotirlinga. É famoso por seus enormes corredores, pilares e arquitetura dravidiana."
      },
      tags: {
        en: ["Ramanathaswamy Temple", "Rameshwaram", "Jyotirlinga", "Temple"],
        es: ["Templo Ramanathaswamy", "Rameshwaram", "Jyotirlinga", "Templo"],
        pt: ["Templo Ramanathaswamy", "Rameshwaram", "Jyotirlinga", "Templo"]
      }
    },
    {
      name: { en: "Dhanushkodi", es: "Dhanushkodi", pt: "Dhanushkodi" },
      description: {
        en: "Dhanushkodi is a dramatic coastal destination at the southeastern tip of Rameshwaram Island. Its beaches, ruins and surrounding sea create a unique landscape with a fascinating history.",
        es: "Dhanushkodi es un espectacular destino costero situado en el extremo sureste de la isla de Rameshwaram. Sus playas, ruinas y paisajes marinos crean un lugar único.",
        pt: "Dhanushkodi é um impressionante destino costeiro localizado no extremo sudeste da Ilha de Rameshwaram. Suas praias, ruínas e paisagens marítimas formam um cenário único."
      },
      tags: {
        en: ["Dhanushkodi", "Rameshwaram", "Beach", "Heritage"],
        es: ["Dhanushkodi", "Rameshwaram", "Playa", "Patrimonio"],
        pt: ["Dhanushkodi", "Rameshwaram", "Praia", "Patrimônio"]
      }
    },
    {
      name: { en: "Pamban Bridge", es: "Puente Pamban", pt: "Ponte Pamban" },
      description: {
        en: "Pamban Bridge is an iconic railway and road connection linking Rameshwaram Island with mainland India. The bridge offers spectacular views of the surrounding sea and island landscape.",
        es: "El Puente Pamban conecta la isla de Rameshwaram con la India continental. Ofrece impresionantes vistas del mar y del paisaje insular.",
        pt: "A Ponte Pamban conecta a Ilha de Rameshwaram ao continente indiano. A ponte oferece belas vistas do mar e da paisagem da ilha."
      },
      tags: {
        en: ["Pamban Bridge", "Rameshwaram", "Bridge", "Sea"],
        es: ["Puente Pamban", "Rameshwaram", "Puente", "Mar"],
        pt: ["Ponte Pamban", "Rameshwaram", "Ponte", "Mar"]
      }
    },
    {
      name: { en: "APJ Abdul Kalam House", es: "House of Kalam", pt: "House of Kalam" },
      address: "12/7, Mosque Street, Rameswaram, Tamil Nadu 623526, India",
      phone: "+914573221100",
      description: {
        en: "House of Kalam is a museum and heritage site associated with Dr. APJ Abdul Kalam. It presents memorabilia and information about his early life and journey.",
        es: "House of Kalam es un museo y lugar patrimonial relacionado con el Dr. APJ Abdul Kalam. Presenta recuerdos e información sobre su vida temprana y trayectoria.",
        pt: "House of Kalam é um museu e local histórico associado ao Dr. APJ Abdul Kalam. O espaço apresenta objetos e informações sobre sua infância e trajetória."
      },
      tags: {
        en: ["House of Kalam", "Rameshwaram", "Museum", "Heritage"],
        es: ["House of Kalam", "Rameshwaram", "Museo", "Patrimonio"],
        pt: ["House of Kalam", "Rameshwaram", "Museu", "Patrimônio"]
      }
    },
    {
      name: { en: "Agni Theertham", es: "Agni Theertham", pt: "Agni Theertham" },
      description: {
        en: "Agni Theertham is a sacred seashore located close to Ramanathaswamy Temple. It is an important part of the pilgrimage experience and offers beautiful views of the sea.",
        es: "Agni Theertham es una costa sagrada situada cerca del Templo Ramanathaswamy. Es una parte importante de la experiencia de peregrinación y ofrece hermosas vistas del mar.",
        pt: "Agni Theertham é uma costa sagrada localizada perto do Templo Ramanathaswamy. É uma parte importante da experiência de peregrinação e oferece belas vistas do mar."
      },
      tags: {
        en: ["Agni Theertham", "Rameshwaram", "Beach", "Pilgrimage"],
        es: ["Agni Theertham", "Rameshwaram", "Playa", "Peregrinación"],
        pt: ["Agni Theertham", "Rameshwaram", "Praia", "Peregrinação"]
      }
    }
  ],
  "tuticorin": [
    {
      name: { en: "Our Lady of Snows Basilica", es: "Basílica de Nuestra Señora de las Nieves", pt: "Basílica de Nossa Senhora das Neves" },
      address: "Plot No. 42, Beach Rd, Matha Koil, Shanmugapuram, Thoothukudi, Tamil Nadu 628001, India",
      phone: "+914612320854",
      description: {
        en: "Our Lady of Snows Basilica is one of Tuticorin's most important religious landmarks. The historic church is known for its beautiful architecture and long cultural connection with the coastal city.",
        es: "La Basílica de Nuestra Señora de las Nieves es uno de los principales monumentos religiosos de Tuticorin. La iglesia histórica destaca por su arquitectura y patrimonio cultural.",
        pt: "A Basílica de Nossa Senhora das Neves é um dos principais monumentos religiosos de Tuticorin. A igreja histórica é conhecida por sua arquitetura e importância cultural."
      },
      tags: {
        en: ["Our Lady of Snows Basilica", "Tuticorin", "Church", "Heritage"],
        es: ["Basílica de Nuestra Señora de las Nieves", "Tuticorin", "Iglesia", "Patrimonio"],
        pt: ["Basílica de Nossa Senhora das Neves", "Tuticorin", "Igreja", "Patrimônio"]
      }
    },
    {
      name: { en: "Roche Park", es: "Roche Park", pt: "Roche Park" },
      address: "Beach Rd, Tuticorin Beach Road Salt Pans, Thoothukudi, Tamil Nadu 628001, India",
      description: {
        en: "Roche Park is a scenic seaside recreational area in Tuticorin. Its coastal setting provides visitors with pleasant views and a relaxing atmosphere.",
        es: "Roche Park es una zona recreativa junto al mar en Tuticorin. Su ubicación costera ofrece hermosas vistas y un ambiente relajante.",
        pt: "Roche Park é uma área recreativa à beira-mar em Tuticorin. Sua localização costeira oferece belas vistas e um ambiente agradável."
      },
      tags: {
        en: ["Roche Park", "Tuticorin", "Beach", "Park"],
        es: ["Roche Park", "Tuticorin", "Playa", "Parque"],
        pt: ["Roche Park", "Tuticorin", "Praia", "Parque"]
      }
    },
    {
      name: { en: "Thiruchendur Murugan Temple", es: "Templo Thiruchendur Murugan", pt: "Templo Thiruchendur Murugan" },
      description: {
        en: "Thiruchendur Murugan Temple is a famous seaside temple dedicated to Lord Murugan and one of the major pilgrimage destinations of Tamil Nadu. Its location beside the sea gives it a distinctive setting.",
        es: "El Templo Thiruchendur Murugan es un famoso templo junto al mar dedicado al dios Murugan y uno de los principales destinos de peregrinación de Tamil Nadu.",
        pt: "O Templo Thiruchendur Murugan é um famoso templo à beira-mar dedicado ao deus Murugan e um dos principais destinos de peregrinação de Tamil Nadu."
      },
      tags: {
        en: ["Thiruchendur Temple", "Murugan", "Tuticorin", "Pilgrimage"],
        es: ["Templo Thiruchendur", "Murugan", "Tuticorin", "Peregrinación"],
        pt: ["Templo Thiruchendur", "Murugan", "Tuticorin", "Peregrinação"]
      }
    },
    {
      name: { en: "Muthu Nagar Beach", es: "Muthu Nagar Beach", pt: "Muthu Nagar Beach" },
      description: {
        en: "Muthu Nagar Beach is a pleasant coastal destination where visitors can enjoy sea views and the atmosphere of Tuticorin's shoreline.",
        es: "Muthu Nagar Beach es un agradable destino costero donde los visitantes pueden disfrutar de las vistas del mar y del ambiente de la costa de Tuticorin.",
        pt: "Muthu Nagar Beach é um agradável destino costeiro onde os visitantes podem apreciar o mar e a atmosfera da costa de Tuticorin."
      },
      tags: {
        en: ["Muthu Nagar Beach", "Tuticorin", "Beach", "Coast"],
        es: ["Muthu Nagar Beach", "Tuticorin", "Playa", "Costa"],
        pt: ["Muthu Nagar Beach", "Tuticorin", "Praia", "Costa"]
      }
    },
    {
      name: { en: "Hare Island", es: "Hare Island", pt: "Hare Island" },
      description: {
        en: "Hare Island is a scenic island near Tuticorin known for its coastal landscape and peaceful surroundings. It provides an opportunity to experience the region's marine environment.",
        es: "Hare Island es una isla escénica cerca de Tuticorin conocida por su paisaje costero y ambiente tranquilo.",
        pt: "Hare Island é uma ilha pitoresca perto de Tuticorin, conhecida por sua paisagem costeira e ambiente tranquilo."
      },
      tags: {
        en: ["Hare Island", "Tuticorin", "Island", "Nature"],
        es: ["Hare Island", "Tuticorin", "Isla", "Naturaleza"],
        pt: ["Hare Island", "Tuticorin", "Ilha", "Natureza"]
      }
    }
  ],
  "vellore": [
    {
      name: { en: "Vellore Fort", es: "Fuerte de Vellore", pt: "Forte de Vellore" },
      address: "Balaji Nagar, Vellore, Tamil Nadu 632004, India",
      description: {
        en: "Vellore Fort is one of Tamil Nadu's finest historic forts, known for its massive granite walls, moat and impressive architecture. The fort reflects the region's rich military and cultural history.",
        es: "El Fuerte de Vellore es una de las fortalezas históricas más importantes de Tamil Nadu, famosa por sus enormes muros de granito, foso y arquitectura.",
        pt: "O Forte de Vellore é uma das fortalezas históricas mais importantes de Tamil Nadu, conhecido por suas enormes muralhas de granito, fosso e arquitetura."
      },
      tags: {
        en: ["Vellore Fort", "Vellore", "Fort", "Heritage"],
        es: ["Fuerte de Vellore", "Vellore", "Fortaleza", "Patrimonio"],
        pt: ["Forte de Vellore", "Vellore", "Fortaleza", "Patrimônio"]
      }
    },
    {
      name: { en: "Sripuram Golden Temple", es: "Templo Dorado de Sripuram", pt: "Templo Dourado de Sripuram" },
      description: {
        en: "Sripuram Golden Temple is a spectacular spiritual complex known for its golden exterior and beautifully landscaped surroundings. It is one of the most visited attractions around Vellore.",
        es: "El Templo Dorado de Sripuram es un espectacular complejo espiritual conocido por su exterior dorado y sus hermosos jardines.",
        pt: "O Templo Dourado de Sripuram é um impressionante complexo espiritual conhecido por seu exterior dourado e jardins bem cuidados."
      },
      tags: {
        en: ["Golden Temple", "Sripuram", "Vellore", "Temple"],
        es: ["Templo Dorado", "Sripuram", "Vellore", "Templo"],
        pt: ["Templo Dourado", "Sripuram", "Vellore", "Templo"]
      }
    },
    {
      name: { en: "Jalakandeswarar Temple", es: "Templo Jalakandeswarar", pt: "Templo Jalakandeswarar" },
      description: {
        en: "Jalakandeswarar Temple is a beautiful historic temple located inside Vellore Fort. Its detailed stone carvings and traditional Vijayanagara-style architecture make it a major heritage attraction.",
        es: "El Templo Jalakandeswarar es un hermoso templo histórico situado dentro del Fuerte de Vellore. Sus esculturas y arquitectura tradicional destacan por su belleza.",
        pt: "O Templo Jalakandeswarar é um belo templo histórico localizado dentro do Forte de Vellore. Suas esculturas em pedra e arquitetura tradicional são grandes atrações."
      },
      tags: {
        en: ["Jalakandeswarar Temple", "Vellore", "Temple", "Architecture"],
        es: ["Templo Jalakandeswarar", "Vellore", "Templo", "Arquitectura"],
        pt: ["Templo Jalakandeswarar", "Vellore", "Templo", "Arquitetura"]
      }
    },
    {
      name: { en: "Amirthi Zoological Park", es: "Zoológico Amirthi", pt: "Amirthi Zoological Park" },
      description: {
        en: "Amirthi Zoological Park is a forested wildlife destination near Vellore. The park combines natural landscapes with opportunities to observe animals and birds.",
        es: "Amirthi Zoological Park es un destino de vida silvestre rodeado de bosques cerca de Vellore. Combina paisajes naturales con oportunidades para observar animales y aves.",
        pt: "Amirthi Zoological Park é um destino de vida selvagem cercado por florestas perto de Vellore. O parque combina paisagens naturais com observação de animais e aves."
      },
      tags: {
        en: ["Amirthi Zoo", "Vellore", "Wildlife", "Nature"],
        es: ["Zoológico Amirthi", "Vellore", "Vida Silvestre", "Naturaleza"],
        pt: ["Zoológico Amirthi", "Vellore", "Vida Selvagem", "Natureza"]
      }
    },
    {
      name: { en: "Sripuram Spiritual Park", es: "Parque Espiritual de Sripuram", pt: "Parque Espiritual de Sripuram" },
      description: {
        en: "The Sripuram complex is surrounded by beautifully landscaped gardens and peaceful pathways. It provides visitors with a serene environment alongside the famous Golden Temple.",
        es: "El complejo de Sripuram está rodeado de jardines cuidadosamente diseñados y senderos tranquilos. Ofrece un ambiente sereno junto al famoso Templo Dorado.",
        pt: "O complexo de Sripuram é cercado por jardins bem cuidados e caminhos tranquilos. O local oferece um ambiente sereno junto ao famoso Templo Dourado."
      },
      tags: {
        en: ["Sripuram", "Vellore", "Spirituality", "Gardens"],
        es: ["Sripuram", "Vellore", "Espiritualidad", "Jardines"],
        pt: ["Sripuram", "Vellore", "Espiritualidade", "Jardins"]
      }
    }
  ],
  "kanyakumari": [
    {
      name: { en: "Vivekananda Rock Memorial", es: "Memorial de la Roca de Vivekananda", pt: "Memorial da Rocha de Vivekananda" },
      description: {
        en: "Vivekananda Rock Memorial is one of Kanyakumari's most famous landmarks, situated on a rocky island surrounded by the sea. It is associated with Swami Vivekananda and offers spectacular ocean views.",
        es: "El Memorial de la Roca de Vivekananda es uno de los monumentos más famosos de Kanyakumari, situado sobre una isla rocosa rodeada por el mar. Ofrece impresionantes vistas del océano.",
        pt: "O Memorial da Rocha de Vivekananda é um dos monumentos mais famosos de Kanyakumari, localizado em uma ilha rochosa cercada pelo mar. O local oferece vistas espetaculares do oceano."
      },
      tags: {
        en: ["Vivekananda Rock Memorial", "Kanyakumari", "Heritage", "Sea"],
        es: ["Memorial de Vivekananda", "Kanyakumari", "Patrimonio", "Mar"],
        pt: ["Memorial de Vivekananda", "Kanyakumari", "Patrimônio", "Mar"]
      }
    },
    {
      name: { en: "Thiruvalluvar Statue", es: "Estatua de Thiruvalluvar", pt: "Estátua de Thiruvalluvar" },
      description: {
        en: "The Thiruvalluvar Statue is a monumental statue standing on a rocky island near Kanyakumari. It honors the famous Tamil poet and philosopher Thiruvalluvar and forms an iconic part of the coastal skyline.",
        es: "La Estatua de Thiruvalluvar es un monumento situado sobre una isla rocosa cerca de Kanyakumari. Conmemora al famoso poeta y filósofo tamil Thiruvalluvar.",
        pt: "A Estátua de Thiruvalluvar é um monumento localizado em uma ilha rochosa perto de Kanyakumari. Homenageia o famoso poeta e filósofo tâmil Thiruvalluvar."
      },
      tags: {
        en: ["Thiruvalluvar Statue", "Kanyakumari", "Monument", "Tamil Culture"],
        es: ["Estatua de Thiruvalluvar", "Kanyakumari", "Monumento", "Cultura Tamil"],
        pt: ["Estátua de Thiruvalluvar", "Kanyakumari", "Monumento", "Cultura Tâmil"]
      }
    },
    {
      name: { en: "Triveni Sangam", es: "Triveni Sangam", pt: "Triveni Sangam" },
      address: "3HH2+68G, Kanniyakumari, Tamil Nadu 629702, India",
      phone: "+91180042531111",
      description: {
        en: "Triveni Sangam is the famous meeting point associated with the waters surrounding Kanyakumari. It is a popular place for visitors to experience the unique coastal geography of the southern tip of India.",
        es: "Triveni Sangam es el famoso punto relacionado con la confluencia de las aguas alrededor de Kanyakumari. Es un lugar popular para apreciar la geografía costera del extremo sur de la India.",
        pt: "Triveni Sangam é o famoso ponto associado ao encontro das águas ao redor de Kanyakumari. É um local popular para conhecer a geografia costeira do extremo sul da Índia."
      },
      tags: {
        en: ["Triveni Sangam", "Kanyakumari", "Coast", "Nature"],
        es: ["Triveni Sangam", "Kanyakumari", "Costa", "Naturaleza"],
        pt: ["Triveni Sangam", "Kanyakumari", "Costa", "Natureza"]
      }
    },
    {
      name: { en: "Kanyakumari Beach", es: "Playa de Kanyakumari", pt: "Kanyakumari Beach" },
      description: {
        en: "Kanyakumari Beach is famous for its dramatic coastal landscape and beautiful sunrise and sunset views. The meeting of land and sea gives the beach a distinctive character.",
        es: "Kanyakumari Beach es famosa por su paisaje costero y sus hermosas vistas del amanecer y atardecer. La combinación de tierra y mar le da un carácter especial.",
        pt: "Kanyakumari Beach é famosa por sua paisagem costeira e pelas belas vistas do nascer e do pôr do sol. A combinação entre terra e mar cria uma atmosfera especial."
      },
      tags: {
        en: ["Kanyakumari Beach", "Sunrise", "Sunset", "Coast"],
        es: ["Playa de Kanyakumari", "Amanecer", "Atardecer", "Costa"],
        pt: ["Praia de Kanyakumari", "Nascer do Sol", "Pôr do Sol", "Costa"]
      }
    },
    {
      name: { en: "Sunset Point", es: "Sunset Point", pt: "Sunset Point" },
      address: "3GHJ+CMF, Kanniyakumari, Kovalam, Tamil Nadu 629702, India",
      description: {
        en: "Kanyakumari's Sunset Point is a popular viewpoint for watching the sun descend over the ocean. The open coastal horizon creates a memorable evening landscape.",
        es: "Sunset Point de Kanyakumari es un popular mirador para contemplar la puesta de sol sobre el océano. El horizonte costero ofrece un paisaje inolvidable.",
        pt: "O Sunset Point de Kanyakumari é um popular mirante para observar o pôr do sol sobre o oceano. O horizonte costeiro cria uma paisagem memorável."
      },
      tags: {
        en: ["Sunset Point", "Kanyakumari", "Sunset", "Viewpoint"],
        es: ["Sunset Point", "Kanyakumari", "Atardecer", "Mirador"],
        pt: ["Sunset Point", "Kanyakumari", "Pôr do Sol", "Mirante"]
      }
    }
  ],
  "madurai": [
    {
      name: { en: "Meenakshi Amman Temple", es: "Templo Meenakshi Amman", pt: "Templo Meenakshi Amman" },
      address: "Madurai Main, Madurai, Tamil Nadu 625001, India",
      phone: "+914522344360",
      description: {
        en: "Meenakshi Amman Temple is the cultural and spiritual heart of Madurai. The magnificent Dravidian temple is famous for its towering gopurams, colorful sculptures, detailed halls and rich architectural heritage.",
        es: "El Templo Meenakshi Amman es el corazón cultural y espiritual de Madurai. El magnífico templo dravídico es famoso por sus enormes gopurams y esculturas coloridas.",
        pt: "O Templo Meenakshi Amman é o coração cultural e espiritual de Madurai. O magnífico templo dravidiano é famoso por seus enormes gopurams e esculturas coloridas."
      },
      tags: {
        en: ["Meenakshi Amman Temple", "Madurai", "Temple", "Dravidian Architecture"],
        es: ["Templo Meenakshi Amman", "Madurai", "Templo", "Arquitectura Dravídica"],
        pt: ["Templo Meenakshi Amman", "Madurai", "Templo", "Arquitetura Dravidiana"]
      }
    },
    {
      name: { en: "Thirumalai Nayakkar Palace", es: "Palacio Thirumalai Nayakkar", pt: "Palácio Thirumalai Nayakkar" },
      description: {
        en: "Thirumalai Nayakkar Palace is a grand historic palace showcasing the architectural style of the Nayak period. Its massive pillars, arches and ornate interiors make it one of Madurai's major heritage attractions.",
        es: "El Palacio Thirumalai Nayakkar es un magnífico palacio histórico que representa la arquitectura del período Nayak. Sus enormes pilares, arcos e interiores ornamentados destacan por su belleza.",
        pt: "O Palácio Thirumalai Nayakkar é um magnífico palácio histórico que representa a arquitetura do período Nayak. Seus enormes pilares, arcos e interiores ornamentados são impressionantes."
      },
      tags: {
        en: ["Thirumalai Nayakkar Palace", "Madurai", "Palace", "Heritage"],
        es: ["Palacio Thirumalai Nayakkar", "Madurai", "Palacio", "Patrimonio"],
        pt: ["Palácio Thirumalai Nayakkar", "Madurai", "Palácio", "Patrimônio"]
      }
    },
    {
      name: { en: "Vandiyur Mariamman Teppakulam", es: "Vandiyur Mariamman Teppakulam", pt: "Vandiyur Mariamman Teppakulam" },
      address: "W46X+57G, Mariamman Nagar, Meenakshi Nagar, Madurai, Tamil Nadu 625009, India",
      description: {
        en: "Vandiyur Mariamman Teppakulam is a large historic temple tank known for its peaceful waterside setting and traditional religious significance. It is especially vibrant during festivals.",
        es: "Vandiyur Mariamman Teppakulam es un gran estanque histórico conocido por su entorno tranquilo y su importancia religiosa tradicional.",
        pt: "Vandiyur Mariamman Teppakulam é um grande tanque histórico conhecido por seu ambiente tranquilo e importância religiosa tradicional."
      },
      tags: {
        en: ["Teppakulam", "Madurai", "Temple Tank", "Heritage"],
        es: ["Teppakulam", "Madurai", "Estanque del Templo", "Patrimonio"],
        pt: ["Teppakulam", "Madurai", "Tanque do Templo", "Patrimônio"]
      }
    },
    {
      name: { en: "Gandhi Memorial Museum", es: "Museo Memorial Gandhi", pt: "Gandhi Memorial Museum" },
      description: {
        en: "Gandhi Memorial Museum is an important historical museum housed in the historic Tamukkam Palace. It presents exhibits connected with Mahatma Gandhi and India's freedom movement.",
        es: "El Museo Memorial Gandhi es un importante museo histórico ubicado en el antiguo Palacio Tamukkam. Presenta exposiciones relacionadas con Mahatma Gandhi y el movimiento de independencia de la India.",
        pt: "O Gandhi Memorial Museum é um importante museu histórico instalado no antigo Palácio Tamukkam. O museu apresenta exposições relacionadas a Mahatma Gandhi e ao movimento de independência da Índia."
      },
      tags: {
        en: ["Gandhi Museum", "Madurai", "History", "Freedom Movement"],
        es: ["Museo Gandhi", "Madurai", "Historia", "Movimiento de Independencia"],
        pt: ["Museu Gandhi", "Madurai", "História", "Movimento de Independência"]
      }
    },
    {
      name: { en: "Alagar Koyil", es: "Alagar Koyil", pt: "Alagar Koyil" },
      description: {
        en: "Alagar Koyil is a beautiful Vishnu temple located amid scenic hills near Madurai. Its traditional architecture and peaceful natural surroundings make it an important cultural and spiritual attraction.",
        es: "Alagar Koyil es un hermoso templo dedicado a Vishnu situado entre las colinas cerca de Madurai. Su arquitectura tradicional y entorno natural lo convierten en un importante lugar espiritual.",
        pt: "Alagar Koyil é um belo templo dedicado a Vishnu localizado entre colinas perto de Madurai. Sua arquitetura tradicional e ambiente natural fazem dele uma importante atração espiritual."
      },
      tags: {
        en: ["Alagar Koyil", "Madurai", "Vishnu Temple", "Heritage"],
        es: ["Alagar Koyil", "Madurai", "Templo de Vishnu", "Patrimonio"],
        pt: ["Alagar Koyil", "Madurai", "Templo de Vishnu", "Patrimônio"]
      }
    }
  ],
  "pondicherry-karaikal": [
    {
      name: { en: "Karaikal Beach", es: "Playa de Karaikal", pt: "Praia de Karaikal" },
      address: "WV72+H44, Karaikal, Puducherry 609602, India",
      description: {
        en: "Karaikal Beach is a peaceful coastal destination known for its sandy shoreline and relaxed atmosphere. The beach is one of the most popular recreational attractions in Karaikal.",
        es: "Karaikal Beach es un tranquilo destino costero conocido por su playa de arena y ambiente relajado. Es una de las principales atracciones recreativas de Karaikal.",
        pt: "Karaikal Beach é um tranquilo destino costeiro conhecido por sua faixa de areia e atmosfera relaxante. É uma das principais atrações recreativas de Karaikal."
      },
      tags: {
        en: ["Karaikal Beach", "Karaikal", "Beach", "Coast"],
        es: ["Playa de Karaikal", "Karaikal", "Playa", "Costa"],
        pt: ["Praia de Karaikal", "Karaikal", "Praia", "Costa"]
      }
    },
    {
      name: { en: "Karaikal Ammaiyar Temple", es: "Templo Karaikal Ammaiyar", pt: "Templo Karaikal Ammaiyar" },
      description: {
        en: "Karaikal Ammaiyar Temple is an important religious landmark dedicated to Karaikal Ammaiyar, one of the revered Shaivite saints. The temple reflects the region's rich Tamil spiritual traditions.",
        es: "El Templo Karaikal Ammaiyar es un importante lugar religioso dedicado a Karaikal Ammaiyar, una venerada santa shaivita. Refleja las ricas tradiciones espirituales tamiles.",
        pt: "O Templo Karaikal Ammaiyar é um importante local religioso dedicado a Karaikal Ammaiyar, uma das veneradas santas do Shaivismo. O templo representa as tradições espirituais tâmeis da região."
      },
      tags: {
        en: ["Karaikal Ammaiyar Temple", "Karaikal", "Shiva", "Heritage"],
        es: ["Templo Karaikal Ammaiyar", "Karaikal", "Shiva", "Patrimonio"],
        pt: ["Templo Karaikal Ammaiyar", "Karaikal", "Shiva", "Patrimônio"]
      }
    },
    {
      name: { en: "Karaikal Church", es: "Iglesia de Karaikal", pt: "Igreja de Karaikal" },
      description: {
        en: "Karaikal Church is a historic religious landmark reflecting the diverse cultural heritage of the coastal region. Its architecture and peaceful surroundings make it an interesting stop for visitors.",
        es: "La iglesia de Karaikal es un monumento religioso histórico que refleja la diversidad cultural de la región costera.",
        pt: "A Igreja de Karaikal é um monumento religioso histórico que representa a diversidade cultural da região costeira."
      },
      tags: {
        en: ["Karaikal Church", "Karaikal", "Heritage", "Church"],
        es: ["Iglesia de Karaikal", "Karaikal", "Patrimonio", "Iglesia"],
        pt: ["Igreja de Karaikal", "Karaikal", "Patrimônio", "Igreja"]
      }
    },
    {
      name: { en: "Karaikal Beach Backwaters", es: "Remansos de Karaikal", pt: "Remansos de Karaikal" },
      address: "WR7X+8WR, Beach Rd, Karaikal, Puducherry 609602, India",
      description: {
        en: "The Karaikal backwaters offer a peaceful landscape of waterways and coastal greenery. Visitors can enjoy the natural surroundings and experience a quieter side of Karaikal.",
        es: "Los remansos de Karaikal ofrecen un paisaje tranquilo de canales, agua y vegetación costera. Es una buena forma de disfrutar de un lado más tranquilo de Karaikal.",
        pt: "Os remansos de Karaikal oferecem uma paisagem tranquila de canais, água e vegetação costeira. É uma ótima maneira de conhecer o lado mais tranquilo de Karaikal."
      },
      tags: {
        en: ["Karaikal Backwaters", "Boating", "Nature", "Karaikal"],
        es: ["Remansos de Karaikal", "Paseo en Barco", "Naturaleza", "Karaikal"],
        pt: ["Remansos de Karaikal", "Passeio de Barco", "Natureza", "Karaikal"]
      }
    },
    {
      name: { en: "Karaikal Ammayar Temple Tank", es: "Estanque del Templo Karaikal Ammayar", pt: "Tanque do Templo Karaikal Ammayar" },
      description: {
        en: "The historic temple surroundings and traditional water tanks of Karaikal reflect the town's deep connection with Tamil religious architecture and heritage.",
        es: "Los alrededores de los templos históricos y sus estanques tradicionales reflejan la profunda conexión de Karaikal con la arquitectura y el patrimonio religioso tamil.",
        pt: "Os arredores dos templos históricos e seus tanques tradicionais refletem a forte ligação de Karaikal com a arquitetura e o patrimônio religioso tâmil."
      },
      tags: {
        en: ["Karaikal", "Temple Tank", "Heritage", "Tamil Culture"],
        es: ["Karaikal", "Estanque del Templo", "Patrimonio", "Cultura Tamil"],
        pt: ["Karaikal", "Tanque do Templo", "Patrimônio", "Cultura Tâmil"]
      }
    }
  ]
};

const puducherryCities = ['yanam', 'pondicherry-mahe', 'pondicherry-karaikal'];

let updatedCount = 0;

cities.forEach(city => {
  const cityId = city.id || city.slug?.en;
  if (cityPlacesData[cityId]) {
    city.touristPlaces = cityPlacesData[cityId];
    city.famousPlacesToVisit = cityPlacesData[cityId];
    
    if (puducherryCities.includes(cityId)) {
      city.stateId = 'puducherry';
      if (city.state) city.state = 'Puducherry';
      console.log(`Updated stateId for ${cityId} to puducherry`);
    }
    
    updatedCount++;
    console.log(`Updated ${cityId} with ${cityPlacesData[cityId].length} places.`);
  }
});

console.log(`Total cities updated: ${updatedCount}`);
fs.writeFileSync('src/data/fallback/cities.json', JSON.stringify(cities, null, 2), 'utf8');
console.log('Saved updated cities to src/data/fallback/cities.json');
