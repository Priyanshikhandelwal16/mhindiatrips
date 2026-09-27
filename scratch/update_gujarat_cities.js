const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');

const rawData = fs.readFileSync(filePath, 'utf8');
let cities = JSON.parse(rawData);

const gujaratCities = [
  {
    id: "somnath",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 1,
    isPublished: true,
    isDeleted: false,
    name: "Somnath",
    nombre: "Somnath",
    nome: "Somnath",
    slug: { en: "somnath", es: "somnath", pt: "somnath" },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/somnath",
    description: {
      en: "Somnath is a sacred coastal destination in Gujarat, famous for the magnificent Somnath Temple, spiritual heritage, Arabian Sea views, and nearby historic and religious attractions.",
      es: "Somnath es un destino costero sagrado de Gujarat, famoso por el magnífico Templo de Somnath, su patrimonio espiritual, las vistas del mar Arábigo y sus importantes lugares históricos y religiosos.",
      pt: "Somnath é um destino costeiro sagrado de Gujarat, famoso pelo magnífico Templo de Somnath, seu patrimônio espiritual, as vistas do Mar Arábico e seus importantes locais históricos e religiosos."
    },
    seoTitle: {
      en: "Somnath Tourism – Temples, Beaches & Places to Visit",
      es: "Turismo en Somnath – Templos, Playas y Lugares para Visitar",
      pt: "Turismo em Somnath – Templos, Praias e Lugares para Visitar"
    },
    seoDesc: {
      en: "Explore Somnath, one of Gujarat's most important spiritual destinations, with its famous temple, coastal attractions, historic sites and cultural experiences.",
      es: "Explora Somnath, uno de los destinos espirituales más importantes de Gujarat, con su famoso templo, lugares costeros, sitios históricos y experiencias culturales.",
      pt: "Explore Somnath, um dos destinos espirituais mais importantes de Gujarat, com seu famoso templo, atrações costeiras, locais históricos e experiências culturais."
    },
    seoKeywords: {
      en: "Somnath Tourism, Somnath Temple, Somnath Gujarat, Somnath Places to Visit, Somnath Travel, Gujarat Tourism",
      es: "Turismo en Somnath, Templo de Somnath, Somnath Gujarat, Lugares para visitar en Somnath, Viajes a Somnath",
      pt: "Turismo em Somnath, Templo de Somnath, Somnath Gujarat, Lugares para visitar em Somnath, Viagem a Somnath"
    },
    overview: {
      en: "<h2>Discover Somnath</h2><p>Somnath is one of Gujarat's most important pilgrimage and coastal destinations, located on the western coast overlooking the Arabian Sea. The city is best known for the magnificent Somnath Temple, a revered Hindu pilgrimage site and one of the twelve Jyotirlinga shrines. Beyond its spiritual importance, Somnath offers visitors a beautiful combination of coastal scenery, history, architecture and cultural experiences.</p>",
      es: "<h2>Descubre Somnath</h2><p>Somnath es uno de los destinos de peregrinación y costa más importantes de Gujarat, situado en la costa occidental frente al mar Arábigo. La ciudad es especialmente conocida por el magnífico Templo de Somnath, uno de los santuarios Jyotirlinga más venerados de la India. Además de su importancia espiritual, Somnath ofrece una combinación de paisajes costeros, historia, arquitectura y cultura.</p>",
      pt: "<h2>Descubra Somnath</h2><p>Somnath é um dos destinos de peregrinação e litoral mais importantes de Gujarat, localizado na costa oeste com vista para o Mar Arábico. A cidade é conhecida principalmente pelo magnífico Templo de Somnath, um dos santuários Jyotirlinga mais venerados da Índia. Além de sua importância espiritual, Somnath oferece uma combinação de paisagens costeiras, história, arquitetura e cultura.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Somnath</h2><p>Somnath is one of Gujarat's most important pilgrimage and coastal destinations, located on the western coast overlooking the Arabian Sea. The city is best known for the magnificent Somnath Temple, a revered Hindu pilgrimage site and one of the twelve Jyotirlinga shrines. Beyond its spiritual importance, Somnath offers visitors a beautiful combination of coastal scenery, history, architecture and cultural experiences.</p><h2>Spiritual Heritage of Somnath</h2><p>The Somnath Temple forms the heart of the destination. Its grand architecture, seaside setting and centuries of religious significance make it an important stop for travellers exploring Gujarat. Visitors can experience the temple complex, attend prayers and explore the surrounding sacred sites.</p><h2>Places to Explore</h2><ul><li>Somnath Temple</li><li>Somnath Beach</li><li>Bhalka Tirth</li><li>Triveni Sangam</li><li>Prabhas Patan Museum</li></ul><h2>Coastal Beauty and Local Experiences</h2><p>Somnath's location beside the Arabian Sea gives the city a peaceful coastal character. Visitors can enjoy the atmosphere around Somnath Beach, explore historic locations and discover the cultural traditions of the Saurashtra region.</p><h2>Why Visit Somnath?</h2><p>Somnath brings together spirituality, history and coastal landscapes in one destination. It is an ideal addition to a Gujarat itinerary for travellers interested in temples, heritage, culture and peaceful seaside experiences.</p>",
      es: "<h2>Descubre Somnath</h2><p>Somnath es uno de los destinos de peregrinación y costa más importantes de Gujarat, situado en la costa occidental frente al mar Arábigo. La ciudad es especialmente conocida por el magnífico Templo de Somnath, uno de los santuarios Jyotirlinga más venerados de la India. Además de su importancia espiritual, Somnath ofrece una combinación de paisajes costeros, historia, arquitectura y cultura.</p><h2>Patrimonio espiritual de Somnath</h2><p>El Templo de Somnath es el corazón del destino. Su impresionante arquitectura, su ubicación junto al mar y su importancia religiosa convierten al templo en una visita destacada para quienes recorren Gujarat.</p><h2>Lugares para explorar</h2><ul><li>Templo de Somnath</li><li>Playa de Somnath</li><li>Bhalka Tirth</li><li>Triveni Sangam</li><li>Museo Prabhas Patan</li></ul><h2>La costa y las experiencias locales</h2><p>La ubicación de Somnath junto al mar Arábigo proporciona un ambiente tranquilo y especial. Los viajeros pueden disfrutar de la costa, conocer lugares históricos y descubrir las tradiciones culturales de la región de Saurashtra.</p><h2>¿Por qué visitar Somnath?</h2><p>Somnath combina espiritualidad, historia y paisajes costeros en un solo destino. Es una excelente incorporación a cualquier recorrido por Gujarat para quienes desean conocer templos, patrimonio, cultura y belleza natural.</p>",
      pt: "<h2>Descubra Somnath</h2><p>Somnath é um dos destinos de peregrinação e litoral mais importantes de Gujarat, localizado na costa oeste com vista para o Mar Arábico. A cidade é conhecida principalmente pelo magnífico Templo de Somnath, um dos santuários Jyotirlinga mais venerados da Índia. Além de sua importância espiritual, Somnath oferece uma combinação de paisagens costeiras, história, arquitetura e cultura.</p><h2>Patrimônio espiritual de Somnath</h2><p>O Templo de Somnath é o coração do destino. Sua arquitetura impressionante, localização à beira-mar e importância religiosa fazem dele um dos principais pontos de visita em Gujarat.</p><h2>Lugares para explorar</h2><ul><li>Templo de Somnath</li><li>Praia de Somnath</li><li>Bhalka Tirth</li><li>Triveni Sangam</li><li>Museu Prabhas Patan</li></ul><h2>Beleza costeira e experiências locais</h2><p>A localização de Somnath junto ao Mar Arábico proporciona uma atmosfera tranquila. Os visitantes podem conhecer a praia, locais históricos e as tradições culturais da região de Saurashtra.</p><h2>Por que visitar Somnath?</h2><p>Somnath reúne espiritualidade, história e paisagens costeiras em um único destino, sendo uma excelente escolha para quem deseja conhecer a cultura e o patrimônio de Gujarat.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Somnath Temple", es: "Templo de Somnath", pt: "Templo de Somnath" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
        description: {
          en: "A magnificent coastal temple and one of the most important pilgrimage attractions in Somnath.",
          es: "Un magnífico templo costero y uno de los lugares de peregrinación más importantes de Somnath.",
          pt: "Um magnífico templo costeiro e um dos principais locais de peregrinação de Somnath."
        },
        fullDescription: {
          en: "<h3>Somnath Temple</h3><p>Somnath Temple is the spiritual centre of Somnath and one of the twelve sacred Jyotirlinga shrines of Lord Shiva. Situated right on the shores of the Arabian Sea, it boasts striking Chalukya-style architecture, intricate stone carvings, and a rich history.</p>",
          es: "<h3>Templo de Somnath</h3><p>El Templo de Somnath es el centro espiritual de Somnath y uno de los doce santuarios Jyotirlinga sagrados del Señor Shiva. Situado junto al mar Arábigo, combina importancia religiosa con una arquitectura impresionante.</p>",
          pt: "<h3>Templo de Somnath</h3><p>O Templo de Somnath é o centro espiritual de Somnath e um dos locais de peregrinação mais importantes de Gujarat. Localizado junto ao Mar Arábico, combina importância religiosa com arquitetura impressionante.</p>"
        }
      },
      {
        name: { en: "Somnath Beach", es: "Playa de Somnath", pt: "Praia de Somnath" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "A serene coastal shoreline adjacent to Somnath Temple offering sunset Arabian Sea views.",
          es: "Una serena costa junto al Templo de Somnath que ofrece espectaculares vistas del mar Arábigo.",
          pt: "Uma serena faixa costeira junto ao Templo de Somnath com vistas do Mar Arábico."
        },
        fullDescription: {
          en: "<h3>Somnath Beach</h3><p>Somnath Beach is a scenic stretch of coastline offering spectacular views of the Arabian Sea crashing against the temple rocks. It is a peaceful spot for evening walks, camel rides, and photographing the sunset.</p>",
          es: "<h3>Playa de Somnath</h3><p>La playa de Somnath es una hermosa franja costera que ofrece vistas impresionantes del mar Arábigo. Es un lugar perfecto para pasear al atardecer, montar en camello y fotografiar la puesta de sol.</p>",
          pt: "<h3>Praia de Somnath</h3><p>A Praia de Somnath é um trecho costeiro exuberante que oferece vistas incríveis do Mar Arábico. É um local perfeito para caminhadas ao fim da tarde e fotografias do pôr do sol.</p>"
        }
      },
      {
        name: { en: "Bhalka Tirth", es: "Bhalka Tirth", pt: "Bhalka Tirth" },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
        description: {
          en: "A sacred shrine marking the revered spot where Lord Krishna spent his final moments on earth.",
          es: "Un santuario sagrado que marca el lugar venerado donde el Señor Krishna pasó sus últimos momentos.",
          pt: "Um santuário sagrado que marca o local venerado onde o Senhor Krishna passou seus últimos momentos."
        },
        fullDescription: {
          en: "<h3>Bhalka Tirth</h3><p>Bhalka Tirth is a revered pilgrimage site located near Prabhas Patan where Lord Krishna spent his final moments under a banyan tree. A beautiful temple commemorates this historic event.</p>",
          es: "<h3>Bhalka Tirth</h3><p>Bhalka Tirth es un venerado lugar de peregrinación donde el Señor Krishna pasó sus últimos momentos en la tierra. Un hermoso templo conmemorativo alberga su estatua de mármol.</p>",
          pt: "<h3>Bhalka Tirth</h3><p>Bhalka Tirth é um venerado local de peregrinação onde o Senhor Krishna viveu seus últimos momentos na terra. Um belo templo preserva sua estátua de mármore.</p>"
        }
      },
      {
        name: { en: "Triveni Sangam", es: "Triveni Sangam", pt: "Triveni Sangam" },
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
        description: {
          en: "The holy confluence of three sacred rivers—Hiran, Kapila, and Saraswati—meeting the Arabian Sea.",
          es: "La santa confluencia de tres ríos sagrados (Hiran, Kapila y Saraswati) al unirse con el mar Arábigo.",
          pt: "A sagrada confluência de três rios sagrados — Hiran, Kapila e Saraswati — encontrando o Mar Arábico."
        },
        fullDescription: {
          en: "<h3>Triveni Sangam</h3><p>Triveni Sangam in Somnath is the holy confluence of three sacred rivers: Hiran, Kapila, and the mythical Saraswati. Pilgrims visit this holy riverbank to perform ritual bathings and boat rides.</p>",
          es: "<h3>Triveni Sangam</h3><p>Triveni Sangam es la sagrada confluencia de los ríos Hiran, Kapila y el místico Saraswati. Los peregrinos visitan este lugar para realizar baños rituales y paseos en barco.</p>",
          pt: "<h3>Triveni Sangam</h3><p>Triveni Sangam é a sagrada confluência dos rios Hiran, Kapila e Saraswati. Os peregrinos visitam a margem sagrada para banhos rituais e passeios de barco.</p>"
        }
      },
      {
        name: { en: "Prabhas Patan Museum", es: "Museo Prabhas Patan", pt: "Museu Prabhas Patan" },
        image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=900&q=80",
        description: {
          en: "An archaeological museum exhibiting ancient temple sculptures, inscriptions, and ruins.",
          es: "Un museo arqueológico que exhibe antiguas esculturas de templos, inscripciones y ruinas históricas.",
          pt: "Um museu arqueológico que exibe antigas esculturas de templos, inscrições e ruínas históricas."
        },
        fullDescription: {
          en: "<h3>Prabhas Patan Museum</h3><p>The Prabhas Patan Museum houses a fascinating collection of stone sculptures, ancient inscriptions, carved pillars, and architectural remains from the historical iterations of the Somnath Temple.</p>",
          es: "<h3>Museo Prabhas Patan</h3><p>El Museo Prabhas Patan alberga una fascinante colección de esculturas de piedra, inscripciones antiguas y restos arquitectónicos recuperados de las construcciones históricas del Templo de Somnath.</p>",
          pt: "<h3>Museu Prabhas Patan</h3><p>O Museu Prabhas Patan abriga uma fascinante coleção de esculturas em pedra, inscrições antigas e pilares entalhados do Templo de Somnath.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Somnath Temple", es: "Templo de Somnath", pt: "Templo de Somnath" }, address: { en: "Somnath, Prabhas Patan, Gujarat 362268, India", es: "Somnath, Prabhas Patan, Gujarat 362268, India", pt: "Somnath, Prabhas Patan, Gujarat 362268, Índia" }, description: { en: "A magnificent coastal Jyotirlinga temple dedicated to Lord Shiva.", es: "Un magnífico templo Jyotirlinga costero dedicado al Señor Shiva.", pt: "Um magnífico templo Jyotirlinga costeiro dedicado ao Senhor Shiva." }, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80" },
      { name: { en: "Somnath Beach", es: "Playa de Somnath", pt: "Praia de Somnath" }, address: { en: "Somnath Beach, Gujarat 362268, India", es: "Somnath Beach, Gujarat 362268, India", pt: "Somnath Beach, Gujarat 362268, Índia" }, description: { en: "Scenic beach adjacent to the Somnath Temple offering sunset views.", es: "Playa panorámica junto al Templo de Somnath con hermosos atardeceres.", pt: "Praia panorâmica junto ao Templo de Somnath com vistas do pôr do sol." }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80" },
      { name: { en: "Bhalka Tirth", es: "Bhalka Tirth", pt: "Bhalka Tirth" }, address: { en: "Prabhas Patan, Gujarat 362268, India", es: "Prabhas Patan, Gujarat 362268, India", pt: "Prabhas Patan, Gujarat 362268, Índia" }, description: { en: "Sacred shrine marking Lord Krishna's final moments.", es: "Santuario sagrado que marca los últimos momentos del Señor Krishna.", pt: "Santuário sagrado que marca os últimos momentos do Senhor Krishna." }, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80" },
      { name: { en: "Triveni Sangam", es: "Triveni Sangam", pt: "Triveni Sangam" }, address: { en: "Somnath, Gujarat 362268, India", es: "Somnath, Gujarat 362268, India", pt: "Somnath, Gujarat 362268, Índia" }, description: { en: "Holy river confluence of Hiran, Kapila, and Saraswati.", es: "Sagrada confluencia fluvial de tres ríos.", pt: "Sagrada confluência fluvial de três rios." }, image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80" },
      { name: { en: "Prabhas Patan Museum", es: "Museo Prabhas Patan", pt: "Museu Prabhas Patan" }, address: { en: "Prabhas Patan, Gujarat 362268, India", es: "Prabhas Patan, Gujarat 362268, India", pt: "Prabhas Patan, Gujarat 362268, Índia" }, description: { en: "Museum housing ancient temple artifacts and sculptures.", es: "Museo con objetos y esculturas de templos antiguos.", pt: "Museu com artefatos e esculturas de templos antigos." }, image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=900&q=80" }
    ]
  },
  {
    id: "gandhinagar",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 2,
    isPublished: true,
    isDeleted: false,
    name: "Gandhinagar",
    nombre: "Gandhinagar",
    nome: "Gandhinagar",
    slug: { en: "gandhinagar", es: "gandhinagar", pt: "gandhinagar" },
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/gandhinagar",
    description: {
      en: "Gandhinagar, the capital of Gujarat, is a planned city known for its green surroundings, Akshardham Temple, Adalaj Stepwell, cultural attractions and peaceful urban landscape.",
      es: "Gandhinagar, la capital de Gujarat, es una ciudad planificada conocida por sus espacios verdes, el Templo Akshardham, el Pozo Escalonado de Adalaj y sus atractivos culturales.",
      pt: "Gandhinagar, a capital de Gujarat, é uma cidade planejada conhecida por suas áreas verdes, o Templo Akshardham, o Poço de Adalaj e suas atrações culturais."
    },
    seoTitle: {
      en: "Gandhinagar Tourism – Places to Visit & Attractions",
      es: "Turismo en Gandhinagar – Lugares para Visitar y Atracciones",
      pt: "Turismo em Gandhinagar – Lugares para Visitar e Atrações"
    },
    seoDesc: {
      en: "Explore Gandhinagar, Gujarat's capital, with Akshardham Temple, Adalaj Stepwell, parks, cultural attractions and nearby heritage destinations.",
      es: "Explora Gandhinagar, la capital de Gujarat, con el Templo Akshardham, Adalaj, parques, atracciones culturales y destinos patrimoniales cercanos.",
      pt: "Explore Gandhinagar, a capital de Gujarat, com o Templo Akshardham, Adalaj, parques, atrações culturais e destinos históricos próximos."
    },
    seoKeywords: {
      en: "Gandhinagar Tourism, Gandhinagar Gujarat, Akshardham Temple, Adalaj Stepwell, Gandhinagar Places to Visit",
      es: "Turismo en Gandhinagar, Gandhinagar Gujarat, Templo Akshardham, Pozo de Adalaj, Lugares para visitar en Gandhinagar",
      pt: "Turismo em Gandhinagar, Gandhinagar Gujarat, Templo Akshardham, Poço de Adalaj, Lugares para visitar em Gandhinagar"
    },
    overview: {
      en: "<h2>Discover Gandhinagar</h2><p>Gandhinagar is the capital city of Gujarat and one of the state's most planned and green urban destinations. Located along the Sabarmati River, the city combines modern civic infrastructure with religious, cultural and architectural attractions. Its wide roads, landscaped surroundings and organized sectors give Gandhinagar a calm character compared with many larger Indian cities.</p>",
      es: "<h2>Descubre Gandhinagar</h2><p>Gandhinagar es la capital de Gujarat y una de las ciudades urbanas más planificadas y verdes del estado. Situada junto al río Sabarmati, combina infraestructura moderna con importantes atractivos religiosos, culturales y arquitectónicos.</p>",
      pt: "<h2>Descubra Gandhinagar</h2><p>Gandhinagar é a capital de Gujarat e uma das cidades urbanas mais planejadas e verdes do estado. Localizada às margens do rio Sabarmati, combina infraestrutura moderna com atrações religiosas, culturais e arquitetônicas.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Gandhinagar</h2><p>Gandhinagar is the capital city of Gujarat and one of the state's most planned and green urban destinations. Located along the Sabarmati River, the city combines modern civic infrastructure with religious, cultural and architectural attractions. Its wide roads, landscaped surroundings and organized sectors give Gandhinagar a calm character compared with many larger Indian cities.</p><h2>Culture and Architecture</h2><p>The city is home to important attractions such as Akshardham Temple, where visitors can admire detailed architecture, gardens and cultural spaces. Gandhinagar is also an excellent base for exploring nearby heritage attractions, especially the historic Adalaj Stepwell.</p><h2>Places to Visit</h2><ul><li>Akshardham Temple</li><li>Adalaj Stepwell</li><li>Sarita Udyan</li><li>Indroda Nature Park</li><li>Children's Park</li></ul><h2>Green and Peaceful City</h2><p>Gandhinagar is known for its greenery and carefully planned urban environment. Parks and gardens provide relaxing spaces for visitors, while the city's cultural attractions make it an interesting destination for families and travellers exploring central Gujarat.</p><h2>Explore Gandhinagar</h2><p>A visit to Gandhinagar can easily be combined with Ahmedabad because of their close proximity. Travellers can explore the capital's temples, parks and heritage attractions while also discovering the wider cultural landscape of Gujarat.</p>",
      es: "<h2>Descubre Gandhinagar</h2><p>Gandhinagar es la capital de Gujarat y una de las ciudades urbanas más planificadas y verdes del estado. Situada junto al río Sabarmati, combina infraestructura moderna con importantes atractivos religiosos, culturales y arquitectónicos.</p><h2>Cultura y arquitectura</h2><p>La ciudad alberga lugares importantes como el Templo Akshardham, conocido por su arquitectura detallada, jardines y espacios culturales. Gandhinagar también es una excelente base para descubrir lugares patrimoniales cercanos como el Pozo Escalonado de Adalaj.</p><h2>Lugares para visitar</h2><ul><li>Templo Akshardham</li><li>Pozo Escalonado de Adalaj</li><li>Sarita Udyan</li><li>Indroda Nature Park</li><li>Children's Park</li></ul><h2>Una ciudad verde y tranquila</h2><p>Gandhinagar destaca por sus zonas verdes y su entorno urbano cuidadosamente planificado. Sus parques y jardines ofrecen espacios tranquilos para relajarse, mientras que sus atractivos culturales hacen que la ciudad sea interesante para familias y viajeros.</p><h2>Explora Gandhinagar</h2><p>Gandhinagar puede combinarse fácilmente con Ahmedabad gracias a su proximidad. Los viajeros pueden descubrir templos, parques y patrimonio mientras conocen la cultura del centro de Gujarat.</p>",
      pt: "<h2>Descubra Gandhinagar</h2><p>Gandhinagar é a capital de Gujarat e uma das cidades urbanas mais planejadas e verdes do estado. Localizada às margens do rio Sabarmati, combina infraestrutura moderna com atrações religiosas, culturais e arquitetônicas.</p><h2>Cultura e arquitetura</h2><p>A cidade abriga atrações importantes como o Templo Akshardham, conhecido por sua arquitetura detalhada, jardins e espaços culturais. Gandhinagar também é uma excelente base para explorar locais históricos próximos, especialmente o Poço de Adalaj.</p><h2>Lugares para visitar</h2><ul><li>Templo Akshardham</li><li>Poço de Adalaj</li><li>Sarita Udyan</li><li>Indroda Nature Park</li><li>Children's Park</li></ul><h2>Uma cidade verde e tranquila</h2><p>Gandhinagar é conhecida por sua vegetação e pelo planejamento urbano organizado. Seus parques e jardins oferecem espaços tranquilos para visitantes, enquanto suas atrações culturais tornam a cidade interessante para famílias e viajantes.</p><h2>Explore Gandhinagar</h2><p>Gandhinagar pode ser facilmente combinada com Ahmedabad devido à proximidade entre as duas cidades. Os viajantes podem conhecer templos, parques e atrações históricas enquanto descobrem a cultura de Gujarat.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Akshardham Temple", es: "Templo Akshardham", pt: "Templo Akshardham" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: {
          en: "A monumental Hindu temple complex renowned for pink sandstone carving, gardens, and light shows.",
          es: "Un monumental complejo de templos hindúes famoso por su arquitectura en piedra arenisca y espectáculos.",
          pt: "Um monumental complexo de templos hindus famoso por sua arquitetura em arenito rosa e jardins."
        },
        fullDescription: {
          en: "<h3>Akshardham Temple</h3><p>Akshardham Temple in Gandhinagar is a magnificent cultural and spiritual complex built from pink sandstone. Spread over 23 acres, it features hand-carved pillars, lush gardens, and a musical water fountain show.</p>",
          es: "<h3>Templo Akshardham</h3><p>El Templo Akshardham en Gandhinagar es un magnífico complejo cultural y espiritual construido en piedra arenisca rosa con impresionantes jardines y fuentes danzantes.</p>",
          pt: "<h3>Templo Akshardham</h3><p>O Templo Akshardham em Gandhinagar é um magnífico complexo cultural e espiritual construído em arenito rosa com belos jardins e espetáculo de luz e água.</p>"
        }
      },
      {
        name: { en: "Adalaj Stepwell", es: "Pozo Escalonado de Adalaj", pt: "Poço de Adalaj" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: {
          en: "A 15th-century 5-story subterranean stepwell featuring intricate Solanki architectural carvings.",
          es: "Un pozo escalonado subterráneo del siglo XV de 5 niveles con impresionantes tallados arquitectónicos.",
          pt: "Um poço escalonado subterrâneo do século XV com 5 andares e ricos entalhes arquitetônicos."
        },
        fullDescription: {
          en: "<h3>Adalaj Stepwell</h3><p>Adalaj Stepwell is a unique five-story subterranean architectural marvel built in 1498. The stepwell features intricate Solanki-style stone carvings, carved pillars, and cool subterranean galleries.</p>",
          es: "<h3>Pozo Escalonado de Adalaj</h3><p>El pozo escalonado de Adalaj es una maravilla arquitectónica subterránea de cinco niveles construida en 1498 con detalladas talladas de piedra y galerías frescas.</p>",
          pt: "<h3>Poço de Adalaj</h3><p>O Poço de Adalaj é uma maravilha arquitetônica subterrânea de cinco andares construída em 1498 com impressionantes esculturas em pedra e galerias subterrâneas.</p>"
        }
      },
      {
        name: { en: "Indroda Nature Park", es: "Parque de la Naturaleza Indroda", pt: "Parque da Natureza Indroda" },
        image: "https://images.unsplash.com/photo-1511497584788-876761c11964?w=900&q=80",
        description: {
          en: "Considered India's Jurassic Park, featuring fossilized dinosaur eggs, a botanical garden, and zoo.",
          es: "Conocido como el Parque Jurásico de la India, con huevos de dinosaurio fosilizados y jardín botánico.",
          pt: "Conhecido como o Parque Jurássico da Índia, com ovos de dinossauro fossilizados e zoológico."
        },
        fullDescription: {
          en: "<h3>Indroda Nature Park</h3><p>Indroda Nature Park is known as India's Jurassic Park, housing the second-largest dinosaur egg hatchery in the world, a wilderness zoo, botanical garden, and sea creature fossil exhibits.</p>",
          es: "<h3>Parque de la Naturaleza Indroda</h3><p>Indroda Nature Park es conocido como el Parque Jurásico de la India, albergando la segunda incubadora de huevos de dinosaurio más grande del mundo y un zoo silvestre.</p>",
          pt: "<h3>Parque da Natureza Indroda</h3><p>O Indroda Nature Park é conhecido como o Parque Jurássico da Índia, abrigando fósseis de ovos de dinossauro, jardim botânico e zoológico.</p>"
        }
      },
      {
        name: { en: "Sarita Udyan", es: "Sarita Udyan", pt: "Sarita Udyan" },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
        description: {
          en: "A picturesque riverside garden along the Sabarmati, ideal for picnics, walks, and birdwatching.",
          es: "Un pintoresco jardín junto al río Sabarmati, ideal para picnics, paseos y avistamiento de aves.",
          pt: "Um pitoresco jardim à beira do rio Sabarmati, ideal para passeios e observação de pássaros."
        },
        fullDescription: {
          en: "<h3>Sarita Udyan</h3><p>Sarita Udyan is a popular riverfront park situated along the banks of the Sabarmati River in Gandhinagar. It features sprawling lawns, colorful flowerbeds, and a peaceful environment for family outings.</p>",
          es: "<h3>Sarita Udyan</h3><p>Sarita Udyan es un popular parque junto al río Sabarmati con amplios jardines de césped, parterres de flores y un ambiente tranquilo ideal para pasear.</p>",
          pt: "<h3>Sarita Udyan</h3><p>Sarita Udyan é um popular parque à beira do rio Sabarmati com gramados bem cuidados, canteiros floridos e atmosfera relaxante.</p>"
        }
      },
      {
        name: { en: "Children's Park", es: "Parque Infantil", pt: "Parque Infantil" },
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=900&q=80",
        description: {
          en: "A popular family park featuring a mini toy train, lake boating, and sprawling green lawns.",
          es: "Un popular parque familiar con un tren de juguete, paseos en barca y amplios jardines.",
          pt: "Um popular parque familiar com um trem de brinquedo, passeios de barco e amplos gramados."
        },
        fullDescription: {
          en: "<h3>Children's Park</h3><p>Children's Park in Sector 28, Gandhinagar, is a family recreation hub featuring a mini toy train ride, a small boating lake, play areas, and green lawns.</p>",
          es: "<h3>Parque Infantil</h3><p>El Parque Infantil en el Sector 28 de Gandhinagar es un centro de recreación familiar con paseo en tren de juguete, lago con barcas y áreas de juegos.</p>",
          pt: "<h3>Parque Infantil</h3><p>O Parque Infantil no Setor 28 em Gandhinagar é um centro de recreação familiar com passeio de trem de brinquedo, lago com pedalinhos e áreas de lazer.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Akshardham Temple", es: "Templo Akshardham", pt: "Templo Akshardham" }, address: { en: "Sector 20, Gandhinagar, Gujarat 382020, India", es: "Sector 20, Gandhinagar, Gujarat 382020, India", pt: "Setor 20, Gandhinagar, Gujarat 382020, Índia" }, description: { en: "Grand sandstone temple complex with gardens and light shows.", es: "Gran complejo de templos de piedra arenisca con jardines.", pt: "Grande complexo de templos de arenito rosa com jardins." }, image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80" },
      { name: { en: "Adalaj Stepwell", es: "Pozo Escalonado de Adalaj", pt: "Poço de Adalaj" }, address: { en: "Adalaj, Gandhinagar, Gujarat 382421, India", es: "Adalaj, Gandhinagar, Gujarat 382421, India", pt: "Adalaj, Gandhinagar, Gujarat 382421, Índia" }, description: { en: "Intricately carved 15th-century subterranean stepwell.", es: "Pozo escalonado subterráneo del siglo XV con tallados detallados.", pt: "Poço escalonado subterrâneo do século XV com entalhes ricos." }, image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80" },
      { name: { en: "Indroda Nature Park", es: "Parque de la Naturaleza Indroda", pt: "Parque da Natureza Indroda" }, address: { en: "Indroda, Gandhinagar, Gujarat 382007, India", es: "Indroda, Gandhinagar, Gujarat 382007, India", pt: "Indroda, Gandhinagar, Gujarat 382007, Índia" }, description: { en: "Dinosaur egg hatchery, wilderness zoo, and botanical park.", es: "Incubadora de huevos de dinosaurio y parque zoológico.", pt: "Fósseis de ovos de dinossauro e parque zoológico." }, image: "https://images.unsplash.com/photo-1511497584788-876761c11964?w=900&q=80" },
      { name: { en: "Sarita Udyan", es: "Sarita Udyan", pt: "Sarita Udyan" }, address: { en: "Sector 9, Gandhinagar, Gujarat 382010, India", es: "Sector 9, Gandhinagar, Gujarat 382010, India", pt: "Setor 9, Gandhinagar, Gujarat 382010, Índia" }, description: { en: "Riverside garden along Sabarmati river.", es: "Jardín junto al río Sabarmati.", pt: "Jardim à beira do rio Sabarmati." }, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80" },
      { name: { en: "Children's Park", es: "Parque Infantil", pt: "Parque Infantil" }, address: { en: "Sector 28, Gandhinagar, Gujarat 382028, India", es: "Sector 28, Gandhinagar, Gujarat 382028, India", pt: "Setor 28, Gandhinagar, Gujarat 382028, Índia" }, description: { en: "Family recreation park with mini toy train.", es: "Parque recreativo familiar con tren de juguete.", pt: "Parque recreativo familiar com trem de brinquedo." }, image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=900&q=80" }
    ]
  },
  {
    id: "ahmedabad",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 3,
    isPublished: true,
    isDeleted: false,
    name: "Ahmedabad",
    nombre: "Ahmedabad",
    nome: "Ahmedabad",
    slug: { en: "ahmedabad", es: "ahmedabad", pt: "ahmedabad" },
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/ahmedabad",
    description: {
      en: "Ahmedabad is a vibrant cultural and heritage city of Gujarat, famous for its historic old city, Sabarmati Ashram, architectural landmarks, museums, markets and distinctive Gujarati cuisine.",
      es: "Ahmedabad es una vibrante ciudad cultural y patrimonial de Gujarat, famosa por su casco histórico, Sabarmati Ashram, arquitectura, museos, mercados y gastronomía tradicional.",
      pt: "Ahmedabad é uma vibrante cidade cultural e histórica de Gujarat, famosa por sua cidade antiga, Sabarmati Ashram, arquitetura, museus, mercados e culinária tradicional."
    },
    seoTitle: {
      en: "Ahmedabad Tourism – Heritage, Culture & Places to Visit",
      es: "Turismo en Ahmedabad – Patrimonio, Cultura y Lugares para Visitar",
      pt: "Turismo em Ahmedabad – Patrimônio, Cultura e Lugares para Visitar"
    },
    seoDesc: {
      en: "Explore Ahmedabad, India's first UNESCO World Heritage City, featuring Sabarmati Ashram, Kankaria Lake, riverfront, stepwells and Gujarati food.",
      es: "Explora Ahmedabad, la primera ciudad Patrimonio Mundial de la UNESCO de la India, con Sabarmati Ashram, lago Kankaria y gastronomía.",
      pt: "Explore Ahmedabad, a primeira cidade Patrimônio Mundial da UNESCO na Índia, com Sabarmati Ashram, lago Kankaria e culinária."
    },
    seoKeywords: {
      en: "Ahmedabad Tourism, Sabarmati Ashram, Ahmedabad Places to Visit, Kankaria Lake, Gujarat Tourism",
      es: "Turismo en Ahmedabad, Sabarmati Ashram, Lugares para visitar en Ahmedabad, Lago Kankaria",
      pt: "Turismo em Ahmedabad, Sabarmati Ashram, Lugares para visitar em Ahmedabad, Lago Kankaria"
    },
    overview: {
      en: "<h2>Discover Ahmedabad</h2><p>Ahmedabad is one of Gujarat's most important cultural, commercial and heritage destinations. The city combines centuries-old architecture with modern urban life, creating a distinctive travel experience. Its historic old city, traditional pol houses, mosques, Jain temples, museums, markets and riverfront attractions provide many ways to explore Gujarat's history and culture.</p>",
      es: "<h2>Descubre Ahmedabad</h2><p>Ahmedabad es uno de los destinos culturales, comerciales y patrimoniales más importantes de Gujarat. La ciudad combina arquitectura histórica con una vida urbana moderna, creando una experiencia de viaje muy particular.</p>",
      pt: "<h2>Descubra Ahmedabad</h2><p>Ahmedabad é um dos destinos culturais, comerciais e históricos mais importantes de Gujarat. A cidade combina arquitetura histórica com uma vida urbana moderna, oferecendo uma experiência de viagem diversificada.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Ahmedabad</h2><p>Ahmedabad is one of Gujarat's most important cultural, commercial and heritage destinations. The city combines centuries-old architecture with modern urban life, creating a distinctive travel experience. Its historic old city, traditional pol houses, mosques, Jain temples, museums, markets and riverfront attractions provide many ways to explore Gujarat's history and culture.</p><h2>Heritage of the Old City</h2><p>The historic areas of Ahmedabad are known for their traditional pol neighbourhoods, carved wooden houses, gateways and religious architecture. Heritage walks provide an opportunity to understand the city's architectural traditions and everyday cultural life.</p><h2>Places to Visit</h2><ul><li>Sabarmati Ashram</li><li>Kankaria Lake</li><li>Adalaj Stepwell</li><li>Sabarmati Riverfront</li><li>Hutheesing Jain Temple</li></ul><h2>Culture, Food and Markets</h2><p>Ahmedabad is also an important destination for Gujarati food and local shopping. Traditional snacks, sweets, textiles, handicrafts and lively markets add another dimension to the city's cultural experience.</p><h2>A World of Heritage Experiences</h2><p>From historic monuments and museums to peaceful riverfront spaces and colourful markets, Ahmedabad offers a varied itinerary for first-time visitors as well as travellers interested in architecture, history, culture and food.</p>",
      es: "<h2>Descubre Ahmedabad</h2><p>Ahmedabad es uno de los destinos culturales, comerciales y patrimoniales más importantes de Gujarat. La ciudad combina arquitectura histórica con una vida urbana moderna, creando una experiencia de viaje muy particular.</p><h2>Patrimonio de la ciudad antigua</h2><p>Las zonas históricas de Ahmedabad son conocidas por sus tradicionales barrios pol, casas de madera tallada, puertas históricas, mezquitas y templos. Los recorridos patrimoniales permiten conocer la arquitectura y la vida cultural de la ciudad.</p><h2>Lugares para visitar</h2><ul><li>Sabarmati Ashram</li><li>Lago Kankaria</li><li>Pozo Escalonado de Adalaj</li><li>Sabarmati Riverfront</li><li>Templo Jain Hutheesing</li></ul><h2>Cultura, gastronomía y mercados</h2><p>Ahmedabad también es conocida por la gastronomía de Gujarat y sus mercados tradicionales. Los visitantes pueden descubrir platos locales, dulces, textiles, artesanías y productos tradicionales.</p><h2>Una experiencia llena de patrimonio</h2><p>Desde monumentos históricos y museos hasta espacios junto al río y mercados llenos de vida, Ahmedabad ofrece experiencias variadas para los viajeros interesados en arquitectura, historia, cultura y gastronomía.</p>",
      pt: "<h2>Descubra Ahmedabad</h2><p>Ahmedabad é um dos destinos culturais, comerciais e históricos mais importantes de Gujarat. A cidade combina arquitetura histórica com uma vida urbana moderna, oferecendo uma experiência de viagem diversificada.</p><h2>Patrimônio da cidade antiga</h2><p>As áreas históricas de Ahmedabad são conhecidas pelos bairros tradicionais pol, casas de madeira esculpida, portões históricos, mesquitas e templos. Os passeios de patrimônio ajudam os visitantes a compreender a arquitetura e a cultura da cidade.</p><h2>Lugares para visitar</h2><ul><li>Sabarmati Ashram</li><li>Lago Kankaria</li><li>Poço de Adalaj</li><li>Sabarmati Riverfront</li><li>Templo Jain Hutheesing</li></ul><h2>Cultura, gastronomia e mercados</h2><p>Ahmedabad também é conhecida pela culinária de Gujarat e pelos mercados tradicionais. Os visitantes podem experimentar comidas locais, doces, tecidos, artesanato e produtos tradicionais.</p><h2>Uma experiência de patrimônio</h2><p>De monumentos históricos e museus a espaços à beira do rio e mercados movimentados, Ahmedabad oferece experiências variadas para quem deseja conhecer arquitetura, história, cultura e gastronomia.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Sabarmati Ashram", es: "Sabarmati Ashram", pt: "Sabarmati Ashram" },
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
        description: {
          en: "The historic headquarters of Mahatma Gandhi during India's freedom movement.",
          es: "La sede histórica de Mahatma Gandhi durante la lucha por la independencia de la India.",
          pt: "A sede histórica de Mahatma Gandhi durante o movimento de independência da Índia."
        },
        fullDescription: {
          en: "<h3>Sabarmati Ashram</h3><p>Sabarmati Ashram, located along the peaceful banks of the Sabarmati River, was Mahatma Gandhi's home for twelve years and served as the epicenter of India's non-violent freedom movement.</p>",
          es: "<h3>Sabarmati Ashram</h3><p>Sabarmati Ashram fue la sede de Mahatma Gandhi durante doce años a orillas del río Sabarmati y el centro del movimiento por la independencia de la India.</p>",
          pt: "<h3>Sabarmati Ashram</h3><p>Sabarmati Ashram foi a residência de Mahatma Gandhi por doze anos e o centro do movimento de independência da Índia.</p>"
        }
      },
      {
        name: { en: "Kankaria Lake", es: "Lago Kankaria", pt: "Lago Kankaria" },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
        description: {
          en: "A historic 15th-century circular lake surrounded by parks, light shows, and a zoo.",
          es: "Un lago circular histórico del siglo XV rodeado de jardines, zoo y paseos.",
          pt: "Um histórico lago circular do século XV cercado por parques e zoológico."
        },
        fullDescription: {
          en: "<h3>Kankaria Lake</h3><p>Kankaria Lake is a 15th-century circular lake built by Sultan Qutb-ud-Din. Today it is a vibrant recreational hub featuring an island garden (Nagina Wadi), toy train, zoo, and evening illuminations.</p>",
          es: "<h3>Lago Kankaria</h3><p>El lago Kankaria es un lago circular del siglo XV que cuenta con un jardín insular, tren de juguete, zoológico y paseos nocturnos iluminados.</p>",
          pt: "<h3>Lago Kankaria</h3><p>O Lago Kankaria é um lago circular do século XV que oferece passeios de trem de brinquedo, zoológico e jardim na ilha central.</p>"
        }
      },
      {
        name: { en: "Sabarmati Riverfront", es: "Sabarmati Riverfront", pt: "Sabarmati Riverfront" },
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=80",
        description: {
          en: "A modern urban waterfront promenade with parks, walking paths, and boating.",
          es: "Un moderno paseo urbano a orillas del río Sabarmati con jardines y senderos.",
          pt: "Um moderno calçadão urbano às margens do rio Sabarmati com parques e passeios."
        },
        fullDescription: {
          en: "<h3>Sabarmati Riverfront</h3><p>The Sabarmati Riverfront is an award-winning urban development featuring landscaped gardens, pedestrian walkways, sports complexes, and boat cruises along the Sabarmati River.</p>",
          es: "<h3>Sabarmati Riverfront</h3><p>Sabarmati Riverfront es un destacado paseo urbano que bordea el río Sabarmati con jardines, paseos peatonales y cruceros en barco.</p>",
          pt: "<h3>Sabarmati Riverfront</h3><p>Sabarmati Riverfront é um moderno projeto urbano ao longo do rio Sabarmati com áreas verdes e passeios de barco.</p>"
        }
      },
      {
        name: { en: "Adalaj Stepwell", es: "Pozo Escalonado de Adalaj", pt: "Poço de Adalaj" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: {
          en: "An architectural masterpiece of subterranean stone carving and cool galleries.",
          es: "Una obra maestra arquitectónica subterránea de piedra tallada y galerías frescas.",
          pt: "Uma obra-prima arquitetônica de entalhes em pedra e galerias subterrâneas."
        },
        fullDescription: {
          en: "<h3>Adalaj Stepwell</h3><p>Located near Ahmedabad, Adalaj Stepwell is a magnificent 5-story deep subterranean stepwell showcasing intricate Indo-Islamic stone carvings and octagonal openings.</p>",
          es: "<h3>Pozo Escalonado de Adalaj</h3><p>Ubicado cerca de Ahmedabad, el pozo de Adalaj es una maravilla subterránea de 5 pisos decorada con refinadas tallas en piedra de estilo Solanki.</p>",
          pt: "<h3>Poço de Adalaj</h3><p>Localizado perto de Ahmedabad, o Poço de Adalaj é uma obra-prima subterrânea de 5 andares com entalhes minuciosos em pedra.</p>"
        }
      },
      {
        name: { en: "Hutheesing Jain Temple", es: "Templo Jain Hutheesing", pt: "Templo Jain Hutheesing" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "An exquisite 19th-century white marble Jain temple with 52 shrines.",
          es: "Un exquisito templo jainista de mármol blanco del siglo XIX con 52 santuarios.",
          pt: "Um requintado templo jainista de mármore branco do século XIX com 52 santuários."
        },
        fullDescription: {
          en: "<h3>Hutheesing Jain Temple</h3><p>Built in 1848, the Hutheesing Jain Temple is constructed entirely of white marble with intricate carvings and dedicated to Shri Dharmanatha, the 15th Jain Tirthankara.</p>",
          es: "<h3>Templo Jain Hutheesing</h3><p>Construido en 1848, este templo jainista de mármol blanco destaca por sus tallados detallados y sus 52 santuarios individuales.</p>",
          pt: "<h3>Templo Jain Hutheesing</h3><p>Construído em 1848, este templo jainista de mármore branco apresenta entalhes delicados e 52 santuários dedicados aos Tirthankaras.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Sabarmati Ashram", es: "Sabarmati Ashram", pt: "Sabarmati Ashram" }, address: { en: "Ashram Rd, Ahmedabad, Gujarat 380027, India", es: "Ashram Rd, Ahmedabad, Gujarat 380027, India", pt: "Ashram Rd, Ahmedabad, Gujarat 380027, Índia" }, description: { en: "Historic headquarters of Mahatma Gandhi.", es: "Sede histórica de Mahatma Gandhi.", pt: "Sede histórica de Mahatma Gandhi." }, image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80" },
      { name: { en: "Kankaria Lake", es: "Lago Kankaria", pt: "Lago Kankaria" }, address: { en: "Maninagar, Ahmedabad, Gujarat 380028, India", es: "Maninagar, Ahmedabad, Gujarat 380028, India", pt: "Maninagar, Ahmedabad, Gujarat 380028, Índia" }, description: { en: "Historic circular lake and recreational park.", es: "Lago circular histórico y parque de ocio.", pt: "Histórico lago circular e parque de lazer." }, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80" },
      { name: { en: "Sabarmati Riverfront", es: "Sabarmati Riverfront", pt: "Sabarmati Riverfront" }, address: { en: "Riverfront Park, Ahmedabad, Gujarat 380009, India", es: "Riverfront Park, Ahmedabad, Gujarat 380009, India", pt: "Riverfront Park, Ahmedabad, Gujarat 380009, Índia" }, description: { en: "Modern urban river promenade.", es: "Moderno paseo urbano junto al río.", pt: "Moderno calçadão urbano à beira do rio." }, image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=80" },
      { name: { en: "Adalaj Stepwell", es: "Pozo Escalonado de Adalaj", pt: "Poço de Adalaj" }, address: { en: "Adalaj, Gandhinagar, Gujarat 382421, India", es: "Adalaj, Gandhinagar, Gujarat 382421, India", pt: "Adalaj, Gandhinagar, Gujarat 382421, Índia" }, description: { en: "Subterranean stepwell with intricate carvings.", es: "Pozo escalonado subterráneo tallado.", pt: "Poço escalonado subterrâneo esculpido." }, image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80" },
      { name: { en: "Hutheesing Jain Temple", es: "Templo Jain Hutheesing", pt: "Templo Jain Hutheesing" }, address: { en: "Shahibaug Rd, Ahmedabad, Gujarat 380004, India", es: "Shahibaug Rd, Ahmedabad, Gujarat 380004, India", pt: "Shahibaug Rd, Ahmedabad, Gujarat 380004, Índia" }, description: { en: "19th-century white marble Jain temple.", es: "Templo jainista de mármol blanco del siglo XIX.", pt: "Templo jainista de mármore branco do século XIX." }, image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80" }
    ]
  },
  {
    id: "vadodara",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 4,
    isPublished: true,
    isDeleted: false,
    name: "Vadodara",
    nombre: "Vadodara",
    nome: "Vadodara",
    slug: { en: "vadodara", es: "vadodara", pt: "vadodara" },
    image: "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/vadodara",
    description: {
      en: "Vadodara is a culturally rich city known for grand palaces, museums, art, gardens, historic monuments and the royal heritage of the Gaekwad dynasty.",
      es: "Vadodara es una ciudad culturalmente rica, conocida por sus grandes palacios, museos, arte, jardines, monumentos históricos y patrimonio de la dinastía Gaekwad.",
      pt: "Vadodara é uma cidade culturalmente rica, conhecida por seus grandes palácios, museus, arte, jardins, monumentos históricos e patrimônio da dinastia Gaekwad."
    },
    seoTitle: {
      en: "Vadodara Tourism – Palaces, Art & Heritage Places",
      es: "Turismo en Vadodara – Palacios, Arte y Patrimonio",
      pt: "Turismo em Vadodara – Palácios, Arte e Patrimônio"
    },
    seoDesc: {
      en: "Explore Vadodara (Baroda), Gujarat's cultural capital, featuring Laxmi Vilas Palace, Sayaji Garden, Baroda Museum, and Gaekwad heritage.",
      es: "Explora Vadodara, la capital cultural de Gujarat, con el Palacio Laxmi Vilas, Sayaji Garden y museos.",
      pt: "Explore Vadodara, a capital cultural de Gujarat, com o Palácio Laxmi Vilas, Sayaji Garden e museus."
    },
    seoKeywords: {
      en: "Vadodara Tourism, Laxmi Vilas Palace, Vadodara Places to Visit, Baroda Tourism, Gujarat Tourism",
      es: "Turismo en Vadodara, Palacio Laxmi Vilas, Lugares para visitar en Vadodara",
      pt: "Turismo em Vadodara, Palácio Laxmi Vilas, Lugares para visitar em Vadodara"
    },
    overview: {
      en: "<h2>Discover Vadodara</h2><p>Vadodara, also known as Baroda, is one of Gujarat's leading cultural and heritage destinations. The city has a strong connection with the Gaekwad royal family and is celebrated for its palaces, museums, educational institutions, art traditions and landscaped gardens.</p>",
      es: "<h2>Descubre Vadodara</h2><p>Vadodara, también conocida como Baroda, es uno de los principales destinos culturales y patrimoniales de Gujarat. La ciudad tiene una fuerte conexión con la familia real Gaekwad y es conocida por sus palacios, museos, instituciones educativas, arte y jardines.</p>",
      pt: "<h2>Descubra Vadodara</h2><p>Vadodara, também conhecida como Baroda, é um dos principais destinos culturais e históricos de Gujarat. A cidade possui uma forte ligação com a família real Gaekwad e é conhecida por seus palácios, museus, instituições educacionais, arte e jardins.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Vadodara</h2><p>Vadodara, also known as Baroda, is one of Gujarat's leading cultural and heritage destinations. The city has a strong connection with the Gaekwad royal family and is celebrated for its palaces, museums, educational institutions, art traditions and landscaped gardens.</p><h2>Royal Heritage</h2><p>The magnificent Laxmi Vilas Palace is one of Vadodara's best-known landmarks. Its grand architecture and expansive surroundings reflect the city's royal history. Visitors can also explore museums and cultural institutions that preserve the artistic heritage of the region.</p><h2>Places to Visit</h2><ul><li>Laxmi Vilas Palace</li><li>Sayaji Garden</li><li>Baroda Museum & Picture Gallery</li><li>Kirti Mandir</li><li>EME Temple</li></ul><h2>Art and Culture</h2><p>Vadodara has a long-standing reputation as a centre for art and education. Museums, galleries, historic buildings and cultural spaces make the city an interesting destination for travellers who want to explore Gujarat beyond its temples and natural attractions.</p><h2>Explore Vadodara</h2><p>Vadodara is well suited for a relaxed heritage-focused itinerary. Visitors can combine palace visits, museums, gardens and local cultural experiences while discovering the distinctive character of central Gujarat.</p>",
      es: "<h2>Descubre Vadodara</h2><p>Vadodara, también conocida como Baroda, es uno de los principales destinos culturales y patrimoniales de Gujarat. La ciudad tiene una fuerte conexión con la familia real Gaekwad y es conocida por sus palacios, museos, instituciones educativas, arte y jardines.</p><h2>Patrimonio real</h2><p>El magnífico Palacio Laxmi Vilas es uno de los monumentos más conocidos de Vadodara. Su arquitectura y sus amplios jardines reflejan la historia real de la ciudad.</p><h2>Lugares para visitar</h2><ul><li>Palacio Laxmi Vilas</li><li>Sayaji Garden</li><li>Baroda Museum & Picture Gallery</li><li>Kirti Mandir</li><li>Templo EME</li></ul><h2>Arte y cultura</h2><p>Vadodara tiene una larga tradición como centro de arte y educación. Sus museos, galerías, edificios históricos y espacios culturales permiten conocer una parte diferente del patrimonio de Gujarat.</p><h2>Explora Vadodara</h2><p>Vadodara es ideal para un recorrido centrado en el patrimonio. Los viajeros pueden combinar palacios, museos, jardines y experiencias culturales en una visita tranquila por Gujarat central.</p>",
      pt: "<h2>Descubra Vadodara</h2><p>Vadodara, também conhecida como Baroda, é um dos principais destinos culturais e históricos de Gujarat. A cidade possui uma forte ligação com a família real Gaekwad e é conhecida por seus palácios, museus, instituições educacionais, arte e jardins.</p><h2>Patrimônio real</h2><p>O magnífico Palácio Laxmi Vilas é um dos principais monumentos de Vadodara. Sua arquitetura grandiosa e seus jardins refletem a história real da cidade.</p><h2>Lugares para visitar</h2><ul><li>Palácio Laxmi Vilas</li><li>Sayaji Garden</li><li>Baroda Museum & Picture Gallery</li><li>Kirti Mandir</li><li>Templo EME</li></ul><h2>Arte e cultura</h2><p>Vadodara possui uma longa tradição como centro de arte e educação. Museus, galerias, edifícios históricos e espaços culturais ajudam os visitantes a conhecer o patrimônio da região.</p><h2>Explore Vadodara</h2><p>Vadodara é perfeita para um roteiro focado em patrimônio. Os visitantes podem combinar palácios, museus, jardins e experiências culturais enquanto conhecem o centro de Gujarat.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Laxmi Vilas Palace", es: "Palacio Laxmi Vilas", pt: "Palácio Laxmi Vilas" },
        image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=900&q=80",
        description: {
          en: "An extravagant 19th-century royal palace four times the size of Buckingham Palace.",
          es: "Un suntuoso palacio real del siglo XIX cuatro veces más grande que el Palacio de Buckingham.",
          pt: "Um suntuoso palácio real do século XIX quatro vezes maior que o Palácio de Buckingham."
        },
        fullDescription: {
          en: "<h3>Laxmi Vilas Palace</h3><p>Constructed in Indo-Saracenic revival style in 1890 by Maharaja Sayajirao Gaekwad III, Laxmi Vilas Palace is four times the size of Buckingham Palace. It features stained glass windows, mosaics, and extensive royal armor collections.</p>",
          es: "<h3>Palacio Laxmi Vilas</h3><p>Construido en 1890 en estilo indosarraceno por el Maharaja Sayajirao Gaekwad III, el Palacio Laxmi Vilas es cuatro veces más grande que el Palacio de Buckingham con magníficos jardines.</p>",
          pt: "<h3>Palácio Laxmi Vilas</h3><p>Construído em 1890 no estilo indo-saracênico pelo Maharaja Sayajirao Gaekwad III, o Palácio Laxmi Vilas é quatro vezes maior que o Palácio de Buckingham.</p>"
        }
      },
      {
        name: { en: "Sayaji Garden", es: "Sayaji Garden", pt: "Sayaji Garden" },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
        description: {
          en: "Also known as Kamati Baug, a sprawling 113-acre heritage garden with a planetarium and zoo.",
          es: "Conocido como Kamati Baug, un enorme jardín histórico de 113 acres con planetario y zoo.",
          pt: "Conhecido como Kamati Baug, um enorme jardim de 113 acres com planetário e zoológico."
        },
        fullDescription: {
          en: "<h3>Sayaji Garden</h3><p>Sayaji Garden (Kamati Baug) is a massive 113-acre public garden dedicated by Maharaja Sayajirao Gaekwad III. It houses the Baroda Museum, Sardar Patel Planetarium, a zoo, floral clock, and a toy train.</p>",
          es: "<h3>Sayaji Garden</h3><p>Sayaji Garden es un gran jardín público de 113 acres con planetario, jardín zoológico, reloj floral y el Museo de Baroda.</p>",
          pt: "<h3>Sayaji Garden</h3><p>Sayaji Garden é um imenso jardim público de 113 acres abrigando um planetário, zoológico, relógio floral e museu.</p>"
        }
      },
      {
        name: { en: "Baroda Museum & Picture Gallery", es: "Baroda Museum & Picture Gallery", pt: "Baroda Museum & Picture Gallery" },
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80",
        description: {
          en: "A Victorian museum housing royal art collections, European paintings, and Egyptian mummies.",
          es: "Un destacado museo victoriano con colecciones reales de arte, pintura europea y momias.",
          pt: "Um renomado museu vitoriano com coleções reais de arte, pinturas europeias e múmias."
        },
        fullDescription: {
          en: "<h3>Baroda Museum & Picture Gallery</h3><p>Modeled after London's Victoria & Albert Museum, this Victorian institution holds rare European paintings, Indian miniature art, Tibetan bronzes, and an Egyptian mummy.</p>",
          es: "<h3>Baroda Museum & Picture Gallery</h3><p>Inspirado en el museo Victoria & Albert de Londres, este edificio conserva pinturas europeas, miniaturas indias y una momia egipcia.</p>",
          pt: "<h3>Baroda Museum & Picture Gallery</h3><p>Inspirado no Victoria & Albert Museum de Londres, este museu abriga pinturas europeias, miniaturas indianas e uma múmia egípcia.</p>"
        }
      },
      {
        name: { en: "Kirti Mandir", es: "Kirti Mandir", pt: "Kirti Mandir" },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
        description: {
          en: "The royal cenotaph of the Gaekwad dynasty adorned with fine murals and bronze sculptures.",
          es: "El cenotafio real de la dinastía Gaekwad decorado con murales y esculturas de bronce.",
          pt: "O cenotáfio real da dinastia Gaekwad decorado com murais e esculturas em bronze."
        },
        fullDescription: {
          en: "<h3>Kirti Mandir</h3><p>Kirti Mandir is the E-shaped royal cenotaph of the Gaekwad rulers of Vadodara, built by Sayajirao Gaekwad III in 1936. It features intricate stone domes, balconies, and murals by Nandalal Bose.</p>",
          es: "<h3>Kirti Mandir</h3><p>Kirti Mandir es el cenotafio real de los gobernantes Gaekwad de Vadodara, construido en 1936 con cúpulas de piedra y murales históricos.</p>",
          pt: "<h3>Kirti Mandir</h3><p>Kirti Mandir é o cenotáfio real dos governantes Gaekwad de Vadodara, construído em 1936 com murais históricos e esculturas em bronze.</p>"
        }
      },
      {
        name: { en: "EME Temple", es: "Templo EME", pt: "Templo EME" },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
        description: {
          en: "Also known as Dakshinamurthy Temple, a unique geodesic aluminum temple dedicated to Lord Shiva.",
          es: "Conocido como Templo Dakshinamurthy, un único templo geodésico de aluminio dedicado a Shiva.",
          pt: "Conhecido como Templo Dakshinamurthy, um único templo geodésico de alumínio dedicado a Shiva."
        },
        fullDescription: {
          en: "<h3>EME Temple</h3><p>Run by the Indian Army's Electrical and Mechanical Engineers, the EME Temple is a modern architectural icon constructed with aluminum sheets incorporating symbols of major world religions.</p>",
          es: "<h3>Templo EME</h3><p>Gestionado por el Ejército de la India, el Templo EME es un templo geodésico de aluminio dedicado al Señor Shiva que incorpora símbolos de las principales religiones.</p>",
          pt: "<h3>Templo EME</h3><p>Gerido pelo Exército Indiano, o Templo EME é um templo geodésico de alumínio dedicado ao Senhor Shiva com símbolos das grandes religiões.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Laxmi Vilas Palace", es: "Palacio Laxmi Vilas", pt: "Palácio Laxmi Vilas" }, address: { en: "J N Marg, Moti Baug, Vadodara, Gujarat 390001, India", es: "J N Marg, Moti Baug, Vadodara, Gujarat 390001, India", pt: "J N Marg, Moti Baug, Vadodara, Gujarat 390001, Índia" }, description: { en: "Extravagant 19th-century royal palace.", es: "Suntuoso palacio real del siglo XIX.", pt: "Suntuoso palácio real do século XIX." }, image: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=900&q=80" },
      { name: { en: "Sayaji Garden", es: "Sayaji Garden", pt: "Sayaji Garden" }, address: { en: "Vinoba Bhave Rd, Sayajiganj, Vadodara, Gujarat 390005, India", es: "Vinoba Bhave Rd, Vadodara, Gujarat 390005, India", pt: "Vinoba Bhave Rd, Vadodara, Gujarat 390005, Índia" }, description: { en: "113-acre heritage public garden and zoo.", es: "Jardín público histórico de 113 acres y zoo.", pt: "Jardim público histórico de 113 acres e zoológico." }, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80" },
      { name: { en: "Baroda Museum", es: "Baroda Museum", pt: "Baroda Museum" }, address: { en: "Sayaji Garden, Vadodara, Gujarat 390005, India", es: "Sayaji Garden, Vadodara, Gujarat 390005, India", pt: "Sayaji Garden, Vadodara, Gujarat 390005, Índia" }, description: { en: "Victorian museum with royal art and Egyptian mummy.", es: "Museo victoriano con arte real y momia egipcia.", pt: "Museu vitoriano com arte real e múmia egípcia." }, image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80" },
      { name: { en: "Kirti Mandir", es: "Kirti Mandir", pt: "Kirti Mandir" }, address: { en: "Kothi Rd, Vadodara, Gujarat 390001, India", es: "Kothi Rd, Vadodara, Gujarat 390001, India", pt: "Kothi Rd, Vadodara, Gujarat 390001, Índia" }, description: { en: "Royal cenotaph of Gaekwad dynasty.", es: "Cenotafio real de la dinastía Gaekwad.", pt: "Cenotáfio real da dinastia Gaekwad." }, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80" },
      { name: { en: "EME Temple", es: "Templo EME", pt: "Templo EME" }, address: { en: "Fatehgunj, Vadodara, Gujarat 390002, India", es: "Fatehgunj, Vadodara, Gujarat 390002, India", pt: "Fatehgunj, Vadodara, Gujarat 390002, Índia" }, description: { en: "Aluminum geodesic temple dedicated to Shiva.", es: "Templo geodésico de aluminio dedicado a Shiva.", pt: "Templo geodésico de alumínio dedicado a Shiva." }, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80" }
    ]
  },
  {
    id: "bhuj-kutch",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 5,
    isPublished: true,
    isDeleted: false,
    name: "Bhuj",
    nombre: "Bhuj",
    nome: "Bhuj",
    slug: { en: "bhuj-kutch", es: "bhuj-kutch", pt: "bhuj-kutch" },
    image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/bhuj-kutch",
    description: {
      en: "Bhuj is the cultural heart of Kutch, known for historic palaces, museums, traditional handicrafts, embroidery, local villages and access to the spectacular landscapes of Kutch.",
      es: "Bhuj es el corazón cultural de Kutch, conocido por sus palacios históricos, museos, artesanías, bordados, pueblos tradicionales y paisajes únicos.",
      pt: "Bhuj é o coração cultural de Kutch, conhecido por seus palácios históricos, museus, artesanato, bordados, aldeias tradicionais e paisagens únicas."
    },
    seoTitle: {
      en: "Bhuj Kutch Tourism – Heritage, Handicrafts & Places to Visit",
      es: "Turismo en Bhuj Kutch – Patrimonio, Artesanía y Lugares para Visitar",
      pt: "Turismo em Bhuj Kutch – Patrimônio, Artesanato e Lugares para Visitar"
    },
    seoDesc: {
      en: "Explore Bhuj, gateway to Kutch, featuring Aina Mahal, Prag Mahal, Smritivan earthquake memorial, handicraft villages, and Great Rann access.",
      es: "Explora Bhuj, la puerta de Kutch, con Aina Mahal, Prag Mahal, museo Smritivan y pueblos de artesanía.",
      pt: "Explore Bhuj, a porta de entrada para Kutch, com Aina Mahal, Prag Mahal, memorial Smritivan e artesanato."
    },
    seoKeywords: {
      en: "Bhuj Kutch Tourism, Aina Mahal Bhuj, Bhuj Places to Visit, Kutch Tourism, Gujarat Tourism",
      es: "Turismo en Bhuj Kutch, Aina Mahal, Lugares para visitar en Bhuj, Kutch",
      pt: "Turismo em Bhuj Kutch, Aina Mahal, Lugares para visitar em Bhuj, Kutch"
    },
    overview: {
      en: "<h2>Discover Bhuj</h2><p>Bhuj is the cultural gateway to the Kutch region of Gujarat and an important destination for travellers interested in heritage, crafts, architecture and local traditions. The city and its surrounding region showcase a distinctive cultural identity shaped by desert landscapes, traditional communities, colourful textiles and historic architecture.</p>",
      es: "<h2>Descubre Bhuj</h2><p>Bhuj es la puerta cultural de la región de Kutch y un destino importante para quienes desean conocer patrimonio, artesanía, arquitectura y tradiciones locales. La región posee una identidad cultural única formada por paisajes desérticos, comunidades tradicionales y coloridos textiles.</p>",
      pt: "<h2>Descubra Bhuj</h2><p>Bhuj é a porta de entrada cultural para a região de Kutch e um destino importante para quem deseja conhecer patrimônio, artesanato, arquitetura e tradições locais. A região possui uma identidade cultural única formada por paisagens desérticas, comunidades tradicionais e tecidos coloridos.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Bhuj</h2><p>Bhuj is the cultural gateway to the Kutch region of Gujarat and an important destination for travellers interested in heritage, crafts, architecture and local traditions. The city and its surrounding region showcase a distinctive cultural identity shaped by desert landscapes, traditional communities, colourful textiles and historic architecture.</p><h2>Heritage of Bhuj</h2><p>Bhuj is home to historic buildings, palaces and museums that tell the story of Kutch. Aina Mahal and Prag Mahal are among the city's most recognisable heritage attractions, while Bhujodi is known for traditional weaving and handicrafts.</p><h2>Places to Visit</h2><ul><li>Aina Mahal</li><li>Prag Mahal</li><li>Smritivan Earthquake Museum</li><li>Bhujodi</li><li>Hamirsar Lake</li></ul><h2>Art and Handicrafts</h2><p>Kutch is internationally appreciated for its textile traditions, embroidery, weaving, pottery, leatherwork and other handicrafts. Visiting craft villages around Bhuj gives travellers an opportunity to understand traditional techniques and meet artisan communities.</p><h2>Gateway to Kutch</h2><p>Bhuj is also an important starting point for exploring the wider Kutch region, including the Great Rann, traditional villages, historic sites and desert landscapes. It can be included in a broader Gujarat itinerary combining heritage, culture and nature.</p>",
      es: "<h2>Descubre Bhuj</h2><p>Bhuj es la puerta cultural de la región de Kutch y un destino importante para quienes desean conocer patrimonio, artesanía, arquitectura y tradiciones locales. La región posee una identidad cultural única formada por paisajes desérticos, comunidades tradicionales y coloridos textiles.</p><h2>Patrimonio de Bhuj</h2><p>Bhuj cuenta con edificios históricos, palacios y museos que muestran la historia de Kutch. Aina Mahal y Prag Mahal son algunos de sus principales atractivos, mientras que Bhujodi es conocido por sus tejidos y artesanías tradicionales.</p><h2>Lugares para visitar</h2><ul><li>Aina Mahal</li><li>Prag Mahal</li><li>Smritivan Earthquake Museum</li><li>Bhujodi</li><li>Lago Hamirsar</li></ul><h2>Arte y artesanía</h2><p>Kutch es reconocido por sus tradiciones textiles, bordados, tejidos, cerámica y artesanía. Los pueblos artesanales cercanos a Bhuj permiten conocer técnicas tradicionales y el trabajo de las comunidades locales.</p><h2>Puerta de entrada a Kutch</h2><p>Bhuj también es un punto de partida para explorar el Gran Rann, pueblos tradicionales, lugares históricos y paisajes desérticos de Kutch.</p>",
      pt: "<h2>Descubra Bhuj</h2><p>Bhuj é a porta de entrada cultural para a região de Kutch e um destino importante para quem deseja conhecer patrimônio, artesanato, arquitetura e tradições locais. A região possui uma identidade cultural única formada por paisagens desérticas, comunidades tradicionais e tecidos coloridos.</p><h2>Patrimônio de Bhuj</h2><p>Bhuj possui edifícios históricos, palácios e museus que contam a história de Kutch. Aina Mahal e Prag Mahal estão entre as principais atrações da cidade, enquanto Bhujodi é conhecido por seus tecidos e artesanato tradicional.</p><h2>Lugares para visitar</h2><ul><li>Aina Mahal</li><li>Prag Mahal</li><li>Smritivan Earthquake Museum</li><li>Bhujodi</li><li>Lago Hamirsar</li></ul><h2>Arte e artesanato</h2><p>Kutch é conhecido por suas tradições têxteis, bordados, tecelagem, cerâmica e artesanato. As aldeias artesanais próximas de Bhuj permitem conhecer técnicas tradicionais e o trabalho das comunidades locais.</p><h2>Porta de entrada para Kutch</h2><p>Bhuj também é um ponto de partida para explorar o Grande Rann, aldeias tradicionais, locais históricos e paisagens desérticas de Kutch.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Aina Mahal", es: "Aina Mahal", pt: "Aina Mahal" },
        image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=900&q=80",
        description: {
          en: "The 18th-century Palace of Mirrors built with Venetian glass, chandeliers, and marble.",
          es: "El Palacio de los Espejos del siglo XVIII construido con vidrio veneciano y mármol.",
          pt: "O Palácio dos Espelhos do século XVIII construído com vidro veneziano e mármore."
        },
        fullDescription: {
          en: "<h3>Aina Mahal</h3><p>Built in the 18th century by Ramsinh Malam under Maharao Lakhpatji, Aina Mahal (Palace of Mirrors) features Venetian glass mirrors, gilded arches, glass chandeliers, and intricate marble work.</p>",
          es: "<h3>Aina Mahal</h3><p>Construido en el siglo XVIII por Ramsinh Malam, Aina Mahal (Palacio de los Espejos) cuenta con espejos de cristal veneciano, arañas de cristal y refinadas obras de mármol.</p>",
          pt: "<h3>Aina Mahal</h3><p>Construído no século XVIII, o Aina Mahal (Palácio dos Espelhos) exibe espelhos de vidro veneziano, lustres dourados e entalhes em mármore.</p>"
        }
      },
      {
        name: { en: "Prag Mahal", es: "Prag Mahal", pt: "Prag Mahal" },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
        description: {
          en: "A 19th-century Italian Gothic palace featuring a 45-foot clock tower with city views.",
          es: "Un palacio neogótico del siglo XIX con una torre de reloj de 45 pies y espectaculares vistas.",
          pt: "Um palácio neogótico do século XIX com uma torre de relógio de 45 pés e vistas panorâmicas."
        },
        fullDescription: {
          en: "<h3>Prag Mahal</h3><p>Prag Mahal is a 19th-century Italian Gothic palace built by Maharao Pragmalji II. It features Corinthian pillars, Gothic arches, a grand Durbar hall, and a 45-foot high clock tower.</p>",
          es: "<h3>Prag Mahal</h3><p>Prag Mahal es un palacio de estilo neogótico italiano construido en el siglo XIX con arcos góticos, un gran salón Durbar y una torre con reloj.</p>",
          pt: "<h3>Prag Mahal</h3><p>Prag Mahal é um palácio de estilo gótico italiano do século XIX com pilares coríntios, um grande salão Durbar e uma torre com relógio.</p>"
        }
      },
      {
        name: { en: "Smritivan Earthquake Museum", es: "Smritivan Earthquake Museum", pt: "Smritivan Earthquake Museum" },
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80",
        description: {
          en: "India's largest memorial museum dedicated to the resilience of Kutch after the 2001 earthquake.",
          es: "El museo conmemorativo más grande de la India dedicado a la resiliencia de Kutch.",
          pt: "O maior museu memorial da Índia dedicado à resiliência de Kutch."
        },
        fullDescription: {
          en: "<h3>Smritivan Earthquake Museum</h3><p>Smritivan Earthquake Memorial & Museum on Bhujiyo Hill honors the victims of the 2001 Kutch earthquake. It features interactive galleries, earthquake simulators, and serene sunlit gardens.</p>",
          es: "<h3>Smritivan Earthquake Museum</h3><p>Ubicado en la colina Bhujiyo, este museo conmemorativo rinde homenaje a las víctimas del terremoto de 2001 con galerías interactivas y simuladores.</p>",
          pt: "<h3>Smritivan Earthquake Museum</h3><p>Localizado na colina Bhujiyo, este museu memorial homenageia as vítimas do terremoto de 2001 com galerias interativas e simulações.</p>"
        }
      },
      {
        name: { en: "Bhujodi", es: "Bhujodi", pt: "Bhujodi" },
        image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=900&q=80",
        description: {
          en: "A famous artisan weaving village near Bhuj creating traditional Kutch shawls and carpets.",
          es: "Un famoso pueblo artesanal cerca de Bhuj donde artesanos elaboran chales y alfombras.",
          pt: "Uma famosa aldeia artesanal perto de Bhuj onde mestres tecem xales e tapetes."
        },
        fullDescription: {
          en: "<h3>Bhujodi</h3><p>Bhujodi is a traditional handloom weaving village located 8 km from Bhuj. Visitors can watch Vankar master weavers create famous Kutchi shawls, blankets, and textiles using traditional looms.</p>",
          es: "<h3>Bhujodi</h3><p>Bhujodi es un pueblo de tejedores tradicionales a 8 km de Bhuj donde los visitantes pueden observar la elaboración de chales y textiles de Kutch.</p>",
          pt: "<h3>Bhujodi</h3><p>Bhujodi é uma aldeia tradicional de tecelagem a 8 km de Bhuj onde os visitantes podem acompanhar a criação de tecidos e xales artesanais.</p>"
        }
      },
      {
        name: { en: "Hamirsar Lake", es: "Lago Hamirsar", pt: "Lago Hamirsar" },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
        description: {
          en: "A historic man-made lake in the heart of Bhuj surrounded by gardens and chattris.",
          es: "Un lago artificial histórico en el corazón de Bhuj rodeado de jardines y monumentos.",
          pt: "Um lago artificial histórico no coração de Bhuj cercado por jardins e monumentos."
        },
        fullDescription: {
          en: "<h3>Hamirsar Lake</h3><p>Hamirsar Lake is a 450-year-old artificial lake in the center of Bhuj named after Rao Hamir. It is surrounded by gardens, palaces, temples, and traditional stone cenotaphs (chattris).</p>",
          es: "<h3>Lago Hamirsar</h3><p>El lago Hamirsar es un lago artificial de 450 años en el centro de Bhuj rodeado de palacios, jardines y cenotafios de piedra.</p>",
          pt: "<h3>Lago Hamirsar</h3><p>O Lago Hamirsar é um lago artificial de 450 anos no centro de Bhuj cercado por palácios, jardins e cenotáfios.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Aina Mahal", es: "Aina Mahal", pt: "Aina Mahal" }, address: { en: "Heritage Area, Bhuj, Gujarat 370001, India", es: "Heritage Area, Bhuj, Gujarat 370001, India", pt: "Heritage Area, Bhuj, Gujarat 370001, Índia" }, description: { en: "18th-century Palace of Mirrors.", es: "Palacio de los Espejos del siglo XVIII.", pt: "Palácio dos Espelhos do século XVIII." }, image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=900&q=80" },
      { name: { en: "Prag Mahal", es: "Prag Mahal", pt: "Prag Mahal" }, address: { en: "Heritage Area, Bhuj, Gujarat 370001, India", es: "Heritage Area, Bhuj, Gujarat 370001, India", pt: "Heritage Area, Bhuj, Gujarat 370001, Índia" }, description: { en: "Italian Gothic palace with clock tower.", es: "Palacio neogótico italiano con torre de reloj.", pt: "Palácio gótico italiano com torre de relógio." }, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80" },
      { name: { en: "Smritivan Earthquake Museum", es: "Smritivan Earthquake Museum", pt: "Smritivan Earthquake Museum" }, address: { en: "Bhujiyo Hill, Bhuj, Gujarat 370001, India", es: "Bhujiyo Hill, Bhuj, Gujarat 370001, India", pt: "Bhujiyo Hill, Bhuj, Gujarat 370001, Índia" }, description: { en: "Memorial museum dedicated to Kutch earthquake resilience.", es: "Museo conmemorativo del terremoto de 2001.", pt: "Museu memorial dedicado ao terremoto de 2001." }, image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80" },
      { name: { en: "Bhujodi", es: "Bhujodi", pt: "Bhujodi" }, address: { en: "Bhujodi, Kutch, Gujarat 370020, India", es: "Bhujodi, Kutch, Gujarat 370020, India", pt: "Bhujodi, Kutch, Gujarat 370020, Índia" }, description: { en: "Artisan handloom weaving village.", es: "Pueblo artesanal de tejedores.", pt: "Aldeia artesanal de tecelagem." }, image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=900&q=80" },
      { name: { en: "Hamirsar Lake", es: "Lago Hamirsar", pt: "Lago Hamirsar" }, address: { en: "Bhuj City Center, Gujarat 370001, India", es: "Bhuj City Center, Gujarat 370001, India", pt: "Bhuj City Center, Gujarat 370001, Índia" }, description: { en: "Historic artificial lake in Bhuj.", es: "Lago artificial histórico en Bhuj.", pt: "Lago artificial histórico em Bhuj." }, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80" }
    ]
  },
  {
    id: "rann-of-kutch",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 6,
    isPublished: true,
    isDeleted: false,
    name: "Rann of Kutch",
    nombre: "Rann of Kutch",
    nome: "Rann de Kutch",
    slug: { en: "rann-of-kutch", es: "rann-of-kutch", pt: "rann-of-kutch" },
    image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/rann-of-kutch",
    description: {
      en: "The Rann of Kutch is a spectacular salt desert known for its endless white landscape, traditional culture, handicrafts, vibrant festivals and unforgettable sunsets.",
      es: "El Rann de Kutch es un espectacular desierto de sal conocido por su paisaje blanco, cultura tradicional, artesanía, festivales y atardeceres inolvidables.",
      pt: "O Rann de Kutch é um espetacular deserto de sal conhecido por sua paisagem branca, cultura tradicional, artesanato, festivais e pôr do sol inesquecível."
    },
    seoTitle: {
      en: "Rann of Kutch Tourism – White Desert & Places to Visit",
      es: "Turismo en Rann de Kutch – Desierto Blanco y Lugares para Visitar",
      pt: "Turismo no Rann de Kutch – Deserto Branco e Lugares para Visitar"
    },
    seoDesc: {
      en: "Explore Great Rann of Kutch white salt desert, Rann Utsav festival at Dhordo, Kalo Dungar views, India Bridge, and Mandvi Beach.",
      es: "Explora el desierto blanco del Gran Rann de Kutch, festival Rann Utsav en Dhordo, Kalo Dungar y playa Mandvi.",
      pt: "Explore o deserto de sal branco do Grande Rann de Kutch, festival Rann Utsav em Dhordo, Kalo Dungar e praia Mandvi."
    },
    seoKeywords: {
      en: "Rann of Kutch Tourism, White Desert Gujarat, Rann Utsav, Dhordo Kutch, Gujarat Tourism",
      es: "Turismo en Rann de Kutch, Desierto Blanco Gujarat, Rann Utsav, Dhordo",
      pt: "Turismo no Rann de Kutch, Deserto Branco Gujarat, Rann Utsav, Dhordo"
    },
    overview: {
      en: "<h2>Discover the Rann of Kutch</h2><p>The Great Rann of Kutch is one of Gujarat's most distinctive natural landscapes. This vast salt desert transforms into a spectacular white expanse, creating a remarkable setting for photography, cultural experiences and nature-based travel. The region is especially associated with the winter tourism season and the colourful Rann Utsav.</p>",
      es: "<h2>Descubre el Rann de Kutch</h2><p>El Gran Rann de Kutch es uno de los paisajes naturales más singulares de Gujarat. Este enorme desierto de sal se transforma en una impresionante extensión blanca y ofrece un escenario excepcional para la fotografía, la cultura y el turismo de naturaleza.</p>",
      pt: "<h2>Descubra o Rann de Kutch</h2><p>O Grande Rann de Kutch é uma das paisagens naturais mais singulares de Gujarat. Este enorme deserto de sal transforma-se em uma impressionante extensão branca, oferecendo um cenário extraordinário para fotografia, cultura e turismo de natureza.</p>"
    },
    fullDescription: {
      en: "<h2>Discover the Rann of Kutch</h2><p>The Great Rann of Kutch is one of Gujarat's most distinctive natural landscapes. This vast salt desert transforms into a spectacular white expanse, creating a remarkable setting for photography, cultural experiences and nature-based travel. The region is especially associated with the winter tourism season and the colourful Rann Utsav.</p><h2>The White Desert</h2><p>The immense salt-covered landscape creates a unique visual experience, particularly around sunrise and sunset. The wide open horizon, changing light and striking white surface make the Rann an unforgettable destination for travellers.</p><h2>Places to Explore</h2><ul><li>Great Rann of Kutch</li><li>Dhordo</li><li>Kalo Dungar</li><li>India Bridge</li><li>Mandvi Beach</li></ul><h2>Culture and Handicrafts</h2><p>Kutch is equally famous for its rich traditional culture. Local communities are known for embroidery, weaving, textiles, pottery, leatherwork and other crafts. Travellers can explore villages and discover the artistic traditions that make Kutch culturally distinctive.</p><h2>Rann Utsav Experience</h2><p>During the festival season, the region becomes a major cultural tourism destination with traditional performances, handicrafts, local cuisine and cultural activities. The combination of the white desert and vibrant traditions creates a memorable Gujarat travel experience.</p><h2>Nature and Photography</h2><p>The Rann offers wide open landscapes that are especially attractive to photographers and nature lovers. The dramatic contrast between the white salt desert, colourful traditional clothing and changing skies provides countless opportunities for memorable photographs.</p>",
      es: "<h2>Descubre el Rann de Kutch</h2><p>El Gran Rann de Kutch es uno de los paisajes naturales más singulares de Gujarat. Este enorme desierto de sal se transforma en una impresionante extensión blanca y ofrece un escenario excepcional para la fotografía, la cultura y el turismo de naturaleza.</p><h2>El Desierto Blanco</h2><p>La enorme superficie cubierta de sal crea una experiencia visual única, especialmente durante el amanecer y el atardecer. El horizonte abierto y los cambios de luz hacen del Rann un destino inolvidable.</p><h2>Lugares para explorar</h2><ul><li>Gran Rann de Kutch</li><li>Dhordo</li><li>Kalo Dungar</li><li>India Bridge</li><li>Playa de Mandvi</li></ul><h2>Cultura y artesanía</h2><p>Kutch también es famoso por su rica cultura tradicional. Las comunidades locales destacan por sus bordados, tejidos, textiles, cerámica y artesanía en cuero.</p><h2>Experiencia del Rann Utsav</h2><p>Durante la temporada del festival, la región se convierte en un importante destino cultural con espectáculos tradicionales, artesanía, gastronomía local y actividades culturales.</p><h2>Naturaleza y fotografía</h2><p>Los paisajes abiertos del Rann son especialmente atractivos para fotógrafos y amantes de la naturaleza. El contraste entre el desierto blanco, los trajes tradicionales y el cielo crea imágenes espectaculares.</p>",
      pt: "<h2>Descubra o Rann de Kutch</h2><p>O Grande Rann de Kutch é uma das paisagens naturais mais singulares de Gujarat. Este enorme deserto de sal transforma-se em uma impressionante extensão branca, oferecendo um cenário extraordinário para fotografia, cultura e turismo de natureza.</p><h2>O Deserto Branco</h2><p>A enorme superfície coberta de sal cria uma experiência visual única, especialmente durante o nascer e o pôr do sol. O horizonte aberto e a mudança da luz tornam o Rann um destino inesquecível.</p><h2>Lugares para explorar</h2><ul><li>Grande Rann de Kutch</li><li>Dhordo</li><li>Kalo Dungar</li><li>India Bridge</li><li>Praia de Mandvi</li></ul><h2>Cultura e artesanato</h2><p>Kutch também é famoso por sua rica cultura tradicional. As comunidades locais são conhecidas por bordados, tecelagem, tecidos, cerâmica e trabalhos em couro.</p><h2>Experiência do Rann Utsav</h2><p>Durante a temporada do festival, a região transforma-se em um importante destino de turismo cultural, com apresentações tradicionais, artesanato, culinária local e atividades culturais.</p><h2>Natureza e fotografia</h2><p>As paisagens abertas do Rann são especialmente interessantes para fotógrafos e amantes da natureza. O contraste entre o deserto branco, as roupas tradicionais e o céu proporciona imagens memoráveis.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Great Rann of Kutch", es: "Gran Rann de Kutch", pt: "Grande Rann de Kutch" },
        image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=900&q=80",
        description: {
          en: "The iconic world-famous white salt desert stretching endlessly across the Thar horizon.",
          es: "El icónico y mundialmente famoso desierto de sal blanco que se extiende en el horizonte.",
          pt: "O icônico e mundialmente famoso deserto de sal branco que se estende pelo horizonte."
        },
        fullDescription: {
          en: "<h3>Great Rann of Kutch</h3><p>The Great Rann of Kutch is a massive salt marsh in the Thar Desert forming one of the largest salt deserts in the world. On full moon nights, the white salt landscape glows magically under the moonlight.</p>",
          es: "<h3>Gran Rann de Kutch</h3><p>El Gran Rann de Kutch es un enorme salar en el desierto de Thar. En noches de luna llena, la superficie salina brilla bajo la luz lunar creando un paisaje mágico.</p>",
          pt: "<h3>Grande Rann de Kutch</h3><p>O Grande Rann de Kutch é um imenso deserto de sal no Deserto de Thar. Em noites de lua cheia, a paisagem branca reluz sob a luz da lua.</p>"
        }
      },
      {
        name: { en: "Dhordo", es: "Dhordo", pt: "Dhordo" },
        image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=900&q=80",
        description: {
          en: "The vibrant tent city village hosting the annual Rann Utsav festival with folk music and crafts.",
          es: "La vibrante aldea de tiendas que alberga el festival anual Rann Utsav con música y artesanía.",
          pt: "A vibrante aldeia de tendas que abriga o festival anual Rann Utsav com música e artesanato."
        },
        fullDescription: {
          en: "<h3>Dhordo</h3><p>Dhordo is the host village for the world-famous Rann Utsav winter festival. It transforms into a luxury tented city featuring cultural performances, handicraft bazaars, and stargazing tours.</p>",
          es: "<h3>Dhordo</h3><p>Dhordo es la aldea anfitriona del famoso festival Rann Utsav. Se transforma en una ciudad de tiendas de campaña con espectáculos culturales y mercados de artesanía.</p>",
          pt: "<h3>Dhordo</h3><p>Dhordo é a aldeia anfitriã do festival Rann Utsav. Transforma-se em uma cidade de tendas de luxo com apresentações culturais e feiras de artesanato.</p>"
        }
      },
      {
        name: { en: "Kalo Dungar", es: "Kalo Dungar", pt: "Kalo Dungar" },
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
        description: {
          en: "The Black Hill, highest point in Kutch offering sweeping panoramic vistas of the Great White Rann.",
          es: "La Colina Negra, el punto más alto de Kutch con vistas panorámicas del Rann Blanco.",
          pt: "A Colina Negra, o ponto mais alto de Kutch com vistas panorâmicas do Rann Branco."
        },
        fullDescription: {
          en: "<h3>Kalo Dungar</h3><p>Kalo Dungar (Black Hill) is the highest point in Kutch at 462 meters. It offers breathtaking panoramic views where the desert salt bed meets the blue horizon. It is also home to a 400-year-old Dattatreya Temple.</p>",
          es: "<h3>Kalo Dungar</h3><p>Kalo Dungar (Colina Negra) es el punto más alto de Kutch a 462 metros, ofreciendo vistas panorámicas impresionantes donde el desierto de sal se une al horizonte.</p>",
          pt: "<h3>Kalo Dungar</h3><p>Kalo Dungar (Colina Negra) é o ponto mais alto de Kutch a 462 metros, oferecendo vistas panorâmicas de onde o deserto de sal encontra o horizonte.</p>"
        }
      },
      {
        name: { en: "India Bridge", es: "India Bridge", pt: "India Bridge" },
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=80",
        description: {
          en: "The strategic border bridge marking the last civilian point before the Indo-Pak international border.",
          es: "El puente fronterizo estratégico que marca el último punto civil antes de la frontera internacional.",
          pt: "A ponte estratégica que marca o último ponto civil antes da fronteira internacional."
        },
        fullDescription: {
          en: "<h3>India Bridge</h3><p>India Bridge is a military checkpoint and strategic bridge built across the salt flats. It represents the last civilian point accessible to tourists before the international border zone.</p>",
          es: "<h3>India Bridge</h3><p>India Bridge es un punto de control militar y puente estratégico construido sobre las salinas que marca el último punto civil accesible para turistas.</p>",
          pt: "<h3>India Bridge</h3><p>India Bridge é um ponto de controle militar e ponte estratégica construída sobre o salar que marca o último ponto civil acessível a turistas.</p>"
        }
      },
      {
        name: { en: "Mandvi Beach", es: "Playa de Mandvi", pt: "Praia de Mandvi" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "A pristine golden sand beach in Kutch featuring wind turbines, camel rides, and Vijay Vilas Palace.",
          es: "Una playa de arena dorada en Kutch con parques eólicos, camellos y el Palacio Vijay Vilas.",
          pt: "Uma praia de areia dourada em Kutch com parques eólicos, camelos e o Palácio Vijay Vilas."
        },
        fullDescription: {
          en: "<h3>Mandvi Beach</h3><p>Mandvi Beach is a tranquil coastal destination in Kutch known for its golden sands, wind farm turbines, water sports, camel rides, and the majestic nearby Vijay Vilas royal palace.</p>",
          es: "<h3>Playa de Mandvi</h3><p>La playa de Mandvi es un tranquilo destino costero en Kutch conocido por sus arenas doradas, deportes acuáticos, paseos en camello y el Palacio Vijay Vilas.</p>",
          pt: "<h3>Praia de Mandvi</h3><p>A Praia de Mandvi é um tranquilo destino costeiro em Kutch conhecido por suas areias douradas, passeios de camelo e o Palácio Vijay Vilas.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Great Rann of Kutch", es: "Gran Rann de Kutch", pt: "Grande Rann de Kutch" }, address: { en: "Kutch, Gujarat 370510, India", es: "Kutch, Gujarat 370510, India", pt: "Kutch, Gujarat 370510, Índia" }, description: { en: "World-famous white salt desert.", es: "Mundialmente famoso desierto de sal blanco.", pt: "Mundialmente famoso deserto de sal branco." }, image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=900&q=80" },
      { name: { en: "Dhordo Tent City", es: "Dhordo Tent City", pt: "Dhordo Tent City" }, address: { en: "Dhordo, Kutch, Gujarat 370510, India", es: "Dhordo, Kutch, Gujarat 370510, India", pt: "Dhordo, Kutch, Gujarat 370510, Índia" }, description: { en: "Host village for annual Rann Utsav festival.", es: "Pueblo anfitrión del festival Rann Utsav.", pt: "Vila anfitriã do festival Rann Utsav." }, image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=900&q=80" },
      { name: { en: "Kalo Dungar", es: "Kalo Dungar", pt: "Kalo Dungar" }, address: { en: "Khathav, Kutch, Gujarat 370510, India", es: "Khathav, Kutch, Gujarat 370510, India", pt: "Khathav, Kutch, Gujarat 370510, Índia" }, description: { en: "Highest point in Kutch with white desert views.", es: "Punto más alto de Kutch con vistas del desierto blanco.", pt: "Ponto mais alto de Kutch com vistas do deserto branco." }, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80" },
      { name: { en: "India Bridge", es: "India Bridge", pt: "India Bridge" }, address: { en: "Kutch Border Area, Gujarat 370510, India", es: "Kutch Border Area, Gujarat 370510, India", pt: "Kutch Border Area, Gujarat 370510, Índia" }, description: { en: "Strategic border bridge and civilian checkpoint.", es: "Puente fronterizo estratégico.", pt: "Ponte de fronteira estratégica." }, image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=80" },
      { name: { en: "Mandvi Beach", es: "Playa de Mandvi", pt: "Praia de Mandvi" }, address: { en: "Mandvi, Kutch, Gujarat 370465, India", es: "Mandvi, Kutch, Gujarat 370465, India", pt: "Mandvi, Kutch, Gujarat 370465, Índia" }, description: { en: "Golden sand beach with wind farms and palace.", es: "Playa de arena dorada con parque eólico y palacio.", pt: "Praia de areia dourada com parque eólico e palácio." }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80" }
    ]
  },
  {
    id: "dwarka",
    stateId: "gujarat",
    state: "Gujarat",
    displayOrder: 7,
    isPublished: true,
    isDeleted: false,
    name: "Dwarka",
    nombre: "Dwarka",
    nome: "Dwarka",
    slug: { en: "dwarka", es: "dwarka", pt: "dwarka" },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200",
    url: "/destinations/india/gujarat/dwarka",
    description: {
      en: "Dwarka is one of Gujarat's most important spiritual destinations, famous for Dwarkadhish Temple, sacred coastal sites, ancient traditions, temples and nearby island attractions.",
      es: "Dwarka es uno de los destinos espirituales más importantes de Gujarat, famoso por el Templo Dwarkadhish, sus lugares sagrados, templos y atractivos costeros.",
      pt: "Dwarka é um dos destinos espirituais mais importantes de Gujarat, famoso pelo Templo Dwarkadhish, locais sagrados, templos e atrações costeiras."
    },
    seoTitle: {
      en: "Dwarka Tourism – Temples, Spiritual Sites & Places to Visit",
      es: "Turismo en Dwarka – Templos, Lugares Sagrados y Atracciones",
      pt: "Turismo em Dwarka – Templos, Locais Sagrados e Atrações"
    },
    seoDesc: {
      en: "Explore Dwarka, holy city of Lord Krishna, featuring Dwarkadhish Temple, Beyt Dwarka island, Nageshwar Jyotirlinga, Rukmini Temple, and Shivrajpur Beach.",
      es: "Explora Dwarka, la ciudad sagrada del Señor Krishna, con el Templo Dwarkadhish, la isla Beyt Dwarka, Nageshwar y la playa Shivrajpur.",
      pt: "Explore Dwarka, a cidade sagrada do Senhor Krishna, com o Templo Dwarkadhish, a ilha Beyt Dwarka, Nageshwar e a praia de Shivrajpur."
    },
    seoKeywords: {
      en: "Dwarka Tourism, Dwarkadhish Temple, Beyt Dwarka, Dwarka Places to Visit, Gujarat Tourism",
      es: "Turismo en Dwarka, Templo Dwarkadhish, Beyt Dwarka, Lugares para visitar en Dwarka",
      pt: "Turismo em Dwarka, Templo Dwarkadhish, Beyt Dwarka, Lugares para visitar em Dwarka"
    },
    overview: {
      en: "<h2>Discover Dwarka</h2><p>Dwarka is one of Gujarat's most important pilgrimage destinations and a major cultural attraction on the state's western coast. The city is closely associated with Lord Krishna and is known for its historic temples, sacred traditions and coastal setting. Its spiritual atmosphere attracts pilgrims as well as travellers interested in history, architecture and culture.</p>",
      es: "<h2>Descubre Dwarka</h2><p>Dwarka es uno de los destinos de peregrinación más importantes de Gujarat y un destacado centro cultural de la costa occidental del estado. La ciudad está estrechamente relacionada con Krishna y es conocida por sus templos históricos, tradiciones sagradas y ubicación junto al mar.</p>",
      pt: "<h2>Descubra Dwarka</h2><p>Dwarka é um dos destinos de peregrinação mais importantes de Gujarat e um importante centro cultural na costa oeste do estado. A cidade está profundamente associada a Krishna e é conhecida por seus templos históricos, tradições sagradas e localização costeira.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Dwarka</h2><p>Dwarka is one of Gujarat's most important pilgrimage destinations and a major cultural attraction on the state's western coast. The city is closely associated with Lord Krishna and is known for its historic temples, sacred traditions and coastal setting. Its spiritual atmosphere attracts pilgrims as well as travellers interested in history, architecture and culture.</p><h2>Spiritual Heritage</h2><p>The Dwarkadhish Temple is the central attraction of the city and an important pilgrimage site. The surrounding temple complex and sacred locations provide visitors with an opportunity to experience the religious traditions and architectural heritage of Dwarka.</p><h2>Places to Visit</h2><ul><li>Dwarkadhish Temple</li><li>Beyt Dwarka</li><li>Nageshwar Jyotirlinga</li><li>Rukmini Devi Temple</li><li>Shivrajpur Beach</li></ul><h2>Coastal Experiences</h2><p>Dwarka's location beside the Arabian Sea adds a coastal dimension to its spiritual identity. Visitors can explore nearby beaches, islands and coastal attractions while discovering the traditions of the Saurashtra region.</p><h2>Explore the Sacred City</h2><p>Dwarka is an important stop on a Gujarat pilgrimage and heritage itinerary. Its combination of temples, coastal landscapes, historic traditions and nearby attractions makes it suitable for travellers looking for cultural and spiritual experiences.</p>",
      es: "<h2>Descubre Dwarka</h2><p>Dwarka es uno de los destinos de peregrinación más importantes de Gujarat y un destacado centro cultural de la costa occidental del estado. La ciudad está estrechamente relacionada con Krishna y es conocida por sus templos históricos, tradiciones sagradas y ubicación junto al mar.</p><h2>Patrimonio espiritual</h2><p>El Templo Dwarkadhish es la principal atracción de la ciudad y un importante lugar de peregrinación. Los templos y lugares sagrados cercanos permiten conocer las tradiciones religiosas y el patrimonio arquitectónico de Dwarka.</p><h2>Lugares para visitar</h2><ul><li>Templo Dwarkadhish</li><li>Beyt Dwarka</li><li>Jyotirlinga de Nageshwar</li><li>Templo Rukmini Devi</li><li>Playa Shivrajpur</li></ul><h2>Experiencias costeras</h2><p>La ubicación de Dwarka junto al mar Arábigo añade un atractivo costero a su identidad espiritual. Los viajeros pueden conocer playas, islas y lugares costeros cercanos.</p><h2>Explora la ciudad sagrada</h2><p>Dwarka es una parada importante en cualquier recorrido espiritual y patrimonial por Gujarat. Sus templos, paisajes costeros y tradiciones hacen que sea un destino cultural muy especial.</p>",
      pt: "<h2>Descubra Dwarka</h2><p>Dwarka é um dos destinos de peregrinação mais importantes de Gujarat e um importante centro cultural na costa oeste do estado. A cidade está profundamente associada a Krishna e é conhecida por seus templos históricos, tradições sagradas e localização costeira.</p><h2>Patrimônio espiritual</h2><p>O Templo Dwarkadhish é a principal atração da cidade e um importante local de peregrinação. Os templos e locais sagrados próximos permitem aos visitantes conhecer as tradições religiosas e o patrimônio arquitetônico de Dwarka.</p><h2>Lugares para visitar</h2><ul><li>Templo Dwarkadhish</li><li>Beyt Dwarka</li><li>Jyotirlinga de Nageshwar</li><li>Templo Rukmini Devi</li><li>Praia de Shivrajpur</li></ul><h2>Experiências costeiras</h2><p>A localização de Dwarka junto ao Mar Arábico acrescenta uma dimensão costeira à sua identidade espiritual. Os visitantes podem conhecer praias, ilhas e atrações costeiras próximas.</p><h2>Explore a cidade sagrada</h2><p>Dwarka é uma parada importante em um roteiro espiritual e histórico por Gujarat. A combinação de templos, paisagens costeiras e tradições torna a cidade um destino cultural especial.</p>"
    },
    touristPlaces: [
      {
        name: { en: "Dwarkadhish Temple", es: "Templo Dwarkadhish", pt: "Templo Dwarkadhish" },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
        description: {
          en: "The grand 5-story 2250-year-old Jagat Mandir dedicated to Lord Krishna, king of Dwarka.",
          es: "El majestuoso Templo Jagat Mandir de 5 pisos y 2250 años dedicado al Señor Krishna.",
          pt: "O majestoso Templo Jagat Mandir de 5 andares e 2250 anos dedicado ao Senhor Krishna."
        },
        fullDescription: {
          en: "<h3>Dwarkadhish Temple</h3><p>Dwarkadhish Temple (Jagat Mandir) is a 2,200-year-old 5-story sandstone temple supported by 72 pillars. Dedicated to Lord Krishna, it forms one of the Char Dham pilgrimage sites of India.</p>",
          es: "<h3>Templo Dwarkadhish</h3><p>El Templo Dwarkadhish (Jagat Mandir) es un templo de piedra arenisca de 5 pisos sustentado por 72 pilares dedicado al Señor Krishna, considerado uno de los cuatro santuarios Char Dham.</p>",
          pt: "<h3>Templo Dwarkadhish</h3><p>O Templo Dwarkadhish (Jagat Mandir) é um templo de arenito de 5 andares apoiado por 72 pilares dedicado ao Senhor Krishna, considerado um dos santuários do Char Dham.</p>"
        }
      },
      {
        name: { en: "Beyt Dwarka", es: "Beyt Dwarka", pt: "Beyt Dwarka" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "A sacred island off the Okha coast believed to be the original residence of Lord Krishna.",
          es: "Una isla sagrada frente a la costa de Okha que se cree fue la residencia del Señor Krishna.",
          pt: "Uma ilha sagrada na costa de Okha considerada a residência original do Senhor Krishna."
        },
        fullDescription: {
          en: "<h3>Beyt Dwarka</h3><p>Beyt Dwarka (Bet Dwarka) is a sacred island located 30 km from Dwarka off the coast of Okha. Reached by ferry or Sudarshan Setu bridge, it houses ancient Krishna temples and coral beach spots.</p>",
          es: "<h3>Beyt Dwarka</h3><p>Beyt Dwarka es una isla sagrada situada a 30 km de Dwarka. Se llega en ferry o por el puente Sudarshan Setu y alberga antiguos templos dedicados al Señor Krishna.</p>",
          pt: "<h3>Beyt Dwarka</h3><p>Beyt Dwarka é uma ilha sagrada localizada a 30 km de Dwarka. Acessível por balsa ou pela ponte Sudarshan Setu, abriga antigos templos dedicados ao Senhor Krishna.</p>"
        }
      },
      {
        name: { en: "Nageshwar Jyotirlinga", es: "Jyotirlinga de Nageshwar", pt: "Jyotirlinga de Nageshwar" },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
        description: {
          en: "One of the 12 holy Jyotirlingas featuring a giant 85-foot seated Lord Shiva statue.",
          es: "Uno de los 12 Jyotirlingas sagrados con una gigante estatua de Shiva de 85 pies.",
          pt: "Um dos 12 Jyotirlingas sagrados do Senhor Shiva com uma estátua gigante de 85 pés."
        },
        fullDescription: {
          en: "<h3>Nageshwar Jyotirlinga</h3><p>Nageshwar Temple is one of the 12 sacred Jyotirlinga shrines of Lord Shiva located between Dwarka and Beyt Dwarka. It features a giant 85-foot seated Lord Shiva statue visible from miles away.</p>",
          es: "<h3>Jyotirlinga de Nageshwar</h3><p>El Templo Nageshwar es uno de los 12 santuarios sagrados Jyotirlinga del Señor Shiva. Destaca por una gigante estatua del Señor Shiva sentado de 85 pies de altura.</p>",
          pt: "<h3>Jyotirlinga de Nageshwar</h3><p>O Templo Nageshwar é um dos 12 sagrados santuários Jyotirlinga do Senhor Shiva. Destaca-se por uma estátua gigante do Senhor Shiva de 85 pés de altura.</p>"
        }
      },
      {
        name: { en: "Rukmini Devi Temple", es: "Templo Rukmini Devi", pt: "Templo Rukmini Devi" },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
        description: {
          en: "A magnificent 12th-century temple with intricate stone carvings dedicated to Queen Rukmini.",
          es: "Un magnífico templo del siglo XII con tallados de piedra dedicado a la reina Rukmini.",
          pt: "Um magnífico templo do século XII com entalhes em pedra dedicado à rainha Rukmini."
        },
        fullDescription: {
          en: "<h3>Rukmini Devi Temple</h3><p>Located 2 km from Dwarka, Rukmini Devi Temple is an architectural jewel dating back to the 12th century. It features rich stone carvings of deities, elephants, and intricate jalwork on its spire.</p>",
          es: "<h3>Templo Rukmini Devi</h3><p>Ubicado a 2 km de Dwarka, el Templo Rukmini Devi es una joya arquitectónica del siglo XII decorada con elaboradas esculturas de piedra.</p>",
          pt: "<h3>Templo Rukmini Devi</h3><p>Localizado a 2 km de Dwarka, o Templo Rukmini Devi é uma joia arquitetônica do século XII rica em esculturas de pedra.</p>"
        }
      },
      {
        name: { en: "Shivrajpur Beach", es: "Playa Shivrajpur", pt: "Praia de Shivrajpur" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: {
          en: "A certified Blue Flag white sand beach near Dwarka ideal for swimming, diving, and dolphins.",
          es: "Una playa de arena blanca certificada con Bandera Azul ideal para nadar y bucear.",
          pt: "Uma praia de areia branca com certificação Bandeira Azul ideal para natação e mergulho."
        },
        fullDescription: {
          en: "<h3>Shivrajpur Beach</h3><p>Shivrajpur Beach, located 12 km from Dwarka, is an international Blue Flag certified beach with clear turquoise waters, fine white sands, scuba diving facilities, and frequent dolphin sightings.</p>",
          es: "<h3>Playa Shivrajpur</h3><p>La playa Shivrajpur es una playa certificada con la Bandera Azul internacional con aguas turquesas cristalinas, arena blanca y centros de buceo.</p>",
          pt: "<h3>Praia de Shivrajpur</h3><p>A Praia de Shivrajpur é uma praia certificada com a Bandeira Azul internacional com águas turquesas cristalinas, areia branca e centros de mergulho.</p>"
        }
      }
    ],
    famousPlacesToVisit: [
      { name: { en: "Dwarkadhish Temple", es: "Templo Dwarkadhish", pt: "Templo Dwarkadhish" }, address: { en: "Dwarka, Gujarat 361335, India", es: "Dwarka, Gujarat 361335, India", pt: "Dwarka, Gujarat 361335, Índia" }, description: { en: "Ancient 5-story sandstone Jagat Mandir.", es: "Antiguo templo de piedra arenisca de 5 pisos.", pt: "Antigo templo de arenito de 5 andares." }, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80" },
      { name: { en: "Beyt Dwarka", es: "Beyt Dwarka", pt: "Beyt Dwarka" }, address: { en: "Okha, Gujarat 361350, India", es: "Okha, Gujarat 361350, India", pt: "Okha, Gujarat 361350, Índia" }, description: { en: "Sacred island home of Krishna.", es: "Isla sagrada del Señor Krishna.", pt: "Ilha sagrada do Senhor Krishna." }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80" },
      { name: { en: "Nageshwar Temple", es: "Templo Nageshwar", pt: "Templo Nageshwar" }, address: { en: "Nageshwar, Dwarka, Gujarat 361335, India", es: "Nageshwar, Dwarka, Gujarat 361335, India", pt: "Nageshwar, Dwarka, Gujarat 361335, Índia" }, description: { en: "Holy Jyotirlinga with 85-foot Shiva statue.", es: "Sagrado Jyotirlinga con estatua de Shiva de 85 pies.", pt: "Sagrado Jyotirlinga com estátua de Shiva de 85 pés." }, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80" },
      { name: { en: "Rukmini Devi Temple", es: "Templo Rukmini Devi", pt: "Templo Rukmini Devi" }, address: { en: "Dwarka, Gujarat 361335, India", es: "Dwarka, Gujarat 361335, India", pt: "Dwarka, Gujarat 361335, Índia" }, description: { en: "12th-century stone-carved temple.", es: "Templo esculpido en piedra del siglo XII.", pt: "Templo esculpido em pedra do século XII." }, image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80" },
      { name: { en: "Shivrajpur Beach", es: "Playa Shivrajpur", pt: "Praia de Shivrajpur" }, address: { en: "Shivrajpur, Dwarka, Gujarat 361335, India", es: "Shivrajpur, Dwarka, Gujarat 361335, India", pt: "Shivrajpur, Dwarka, Gujarat 361335, Índia" }, description: { en: "Blue Flag certified white sand beach.", es: "Playa de arena blanca con Bandera Azul.", pt: "Praia de areia branca com Bandeira Azul." }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80" }
    ]
  }
];

// Merge or update in cities array
gujaratCities.forEach(newCity => {
  const idx = cities.findIndex(c => c.id === newCity.id || (typeof c.slug === 'object' && c.slug.en === newCity.id));
  if (idx !== -1) {
    cities[idx] = { ...cities[idx], ...newCity };
    console.log(`Updated city: ${newCity.id}`);
  } else {
    cities.push(newCity);
    console.log(`Added new city: ${newCity.id}`);
  }
});

fs.writeFileSync(filePath, JSON.stringify(cities, null, 2), 'utf8');
console.log('Successfully updated cities.json with 7 Gujarat cities and 35 tourist places!');
