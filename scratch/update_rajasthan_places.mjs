import fs from 'fs';
import path from 'path';

const citiesFilePath = path.resolve('src/data/fallback/cities.json');
const cities = JSON.parse(fs.readFileSync(citiesFilePath, 'utf8'));

// Helper to strip HTML tags and trim
function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// 12 Rajasthan Cities Data
const rajasthanData = [
  // 1. JAIPUR (12 PLACES)
  {
    id: "jaipur",
    name: "Jaipur",
    nombre: "Jaipur",
    nome: "Jaipur",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Jaipur</strong>, the Pink City and capital of Rajasthan, is world-famous for its majestic forts, royal palaces, vibrant bazaars, and UNESCO World Heritage sites.</p>",
      es: "<p><strong>Jaipur</strong>, la Ciudad Rosa y capital de Rajasthan, es famosa mundialmente por sus majestuosos fuertes, palacios reales, vibrantes mercados y monumentos Patrimonio de la Humanidad.</p>",
      pt: "<p><strong>Jaipur</strong>, a Cidade Rosa e capital do Rajasthan, é mundialmente famosa por seus fortes majestosos, palácios reais, mercados vibrantes e patrimônios da UNESCO.</p>"
    },
    content: {
      en: "<p><strong>Jaipur</strong>, the Pink City and capital of Rajasthan, is world-famous for its majestic forts, royal palaces, vibrant bazaars, and UNESCO World Heritage sites.</p>",
      es: "<p><strong>Jaipur</strong>, la Ciudad Rosa y capital de Rajasthan, es famosa mundialmente por sus majestuosos fuertes, palacios reales, vibrantes mercados y monumentos Patrimonio de la Humanidad.</p>",
      pt: "<p><strong>Jaipur</strong>, a Cidade Rosa e capital do Rajasthan, é mundialmente famosa por seus fortes majestosos, palácios reais, mercados vibrantes e patrimônios da UNESCO.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Jaipur – The Pink City</h2><p>Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city and a proud UNESCO World Heritage City. Known for its distinct pink-hued stone architecture, Jaipur blends rich Rajput royalty, Mughal elegance, and vibrant desert traditions.</p>",
      es: "<h2>Descubre Jaipur – La Ciudad Rosa</h2><p>Fundada en 1727 por el Maharaja Sawai Jai Singh II, Jaipur es la primera ciudad planificada de la India y una orgullosa Ciudad Patrimonio de la Humanidad de la UNESCO. Conocida por su característico color rosa, combina la realeza rajput, elegancia mogola y tradiciones del desierto.</p>",
      pt: "<h2>Conheça Jaipur – A Cidade Rosa</h2><p>Fundada em 1727 pelo Maharaja Sawai Jai Singh II, Jaipur é a primeira cidade planejada da Índia e uma orgulhosa Cidade Patrimônio Mundial da UNESCO. Conhecida por sua arquitetura em arenito rosa, combina a nobreza Rajput e elegância Mughal.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Amber Fort", es: "Fuerte de Amber", pt: "Forte de Amber" },
        address: { en: "Devisinghpura, Amer, Jaipur, Rajasthan 302001, India", es: "Amer, Jaipur, Rajasthan 302001, India", pt: "Amer, Jaipur, Rajasthan 302001, Índia" },
        description: {
          en: cleanText("Amber Fort is one of Jaipur's most magnificent historical landmarks, situated on a hill overlooking Maota Lake. Built primarily with red sandstone and marble, the fort showcases a beautiful combination of Rajput and Mughal architectural styles. Its grand courtyards, Sheesh Mahal, intricate carvings and royal chambers offer visitors a glimpse into the luxurious lifestyle of Jaipur's former rulers."),
          es: cleanText("El Fuerte de Amber es uno de los monumentos históricos más impresionantes de Jaipur y está situado sobre una colina con vistas al lago Maota. Construido principalmente con arenisca roja y mármol, combina elementos arquitectónicos rajput y mogoles. Sus grandes patios, el Sheesh Mahal, las delicadas tallas y las cámaras reales permiten conocer el estilo de vida de los antiguos gobernantes de Jaipur."),
          pt: cleanText("O Forte de Amber é um dos monumentos históricos mais impressionantes de Jaipur, localizado sobre uma colina com vista para o lago Maota. Construído principalmente em arenito vermelho e mármore, apresenta uma bela combinação das arquiteturas Rajput e Mughal. Seus grandes pátios, Sheesh Mahal, esculturas detalhadas e aposentos reais mostram o estilo de vida dos antigos governantes de Jaipur.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "City Palace", es: "Palacio de la Ciudad", pt: "Palácio da Cidade" },
        address: { en: "Tulsi Marg, Gangori Bazaar, J.D.A. Market, Jaipur, Rajasthan 302002, India", es: "Gangori Bazaar, Jaipur, Rajasthan 302002, India", pt: "Gangori Bazaar, Jaipur, Rajasthan 302002, Índia" },
        description: {
          en: cleanText("City Palace is a grand royal complex in the heart of Jaipur's historic Pink City. Built by Maharaja Sawai Jai Singh II and expanded by later rulers, the palace features courtyards, gateways, gardens, museums and beautifully decorated royal buildings. The complex represents Jaipur's royal heritage and contains impressive collections of costumes, manuscripts, weapons and artworks."),
          es: cleanText("El Palacio de la Ciudad es un magnífico complejo real situado en el corazón de la histórica Ciudad Rosa de Jaipur. Construido por Maharaja Sawai Jai Singh II y ampliado por gobernantes posteriores, cuenta con patios, puertas monumentales, jardines, museos y edificios reales decorados. El complejo representa el patrimonio real de Jaipur y conserva colecciones de vestimenta, manuscritos, armas y obras de arte."),
          pt: cleanText("O City Palace é um magnífico complexo real localizado no coração da histórica Cidade Rosa de Jaipur. Construído pelo Maharaja Sawai Jai Singh II e ampliado por governantes posteriores, o complexo possui pátios, portões monumentais, jardins, museus e edifícios reais ricamente decorados. O local representa o patrimônio real de Jaipur e abriga coleções de roupas, manuscritos, armas e obras de arte.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Hawa Mahal", es: "Hawa Mahal", pt: "Hawa Mahal" },
        address: { en: "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India", es: "Badi Choupad, Jaipur, Rajasthan 302002, India", pt: "Badi Choupad, Jaipur, Rajasthan 302002, Índia" },
        description: {
          en: cleanText("Hawa Mahal, known as the Palace of Winds, is one of Jaipur's most recognizable landmarks. Built in 1799, the five-storey pink sandstone structure is famous for its hundreds of small jharokha windows. These windows allowed royal women to observe street life while maintaining privacy and also helped circulate cool air through the building."),
          es: cleanText("Hawa Mahal, conocido como el Palacio de los Vientos, es uno de los monumentos más reconocibles de Jaipur. Construido en 1799, este edificio de cinco pisos de arenisca rosa destaca por sus numerosas pequeñas ventanas jharokha. Estas ventanas permitían a las mujeres de la familia real observar la vida de las calles manteniendo su privacidad y favorecían también la circulación del aire."),
          pt: cleanText("O Hawa Mahal, conhecido como Palácio dos Ventos, é um dos monumentos mais reconhecidos de Jaipur. Construído em 1799, o edifício de cinco andares em arenito rosa é famoso por suas numerosas pequenas janelas jharokha. Elas permitiam que as mulheres da família real observassem a vida nas ruas mantendo sua privacidade e também ajudavam na circulação do ar.")
        },
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jantar Mantar", es: "Jantar Mantar", pt: "Jantar Mantar" },
        address: { en: "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India", es: "Pink City, Jaipur, Rajasthan 302002, India", pt: "Pink City, Jaipur, Rajasthan 302002, Índia" },
        description: {
          en: cleanText("Jantar Mantar is a remarkable astronomical observatory built by Maharaja Sawai Jai Singh II. It contains a collection of large geometric instruments designed to measure time, observe celestial bodies and calculate astronomical positions. Recognized as a UNESCO World Heritage Site, it represents the scientific and architectural achievements of 18th-century India."),
          es: cleanText("Jantar Mantar es un extraordinario observatorio astronómico construido por Maharaja Sawai Jai Singh II. Cuenta con grandes instrumentos geométricos diseñados para medir el tiempo, observar cuerpos celestes y realizar cálculos astronómicos. Declarado Patrimonio Mundial de la UNESCO, representa los importantes avances científicos y arquitectónicos de la India del siglo XVIII."),
          pt: cleanText("Jantar Mantar é um extraordinário observatório astronômico construído pelo Maharaja Sawai Jai Singh II. O complexo possui grandes instrumentos geométricos utilizados para medir o tempo, observar corpos celestes e realizar cálculos astronômicos. Reconhecido como Patrimônio Mundial da UNESCO, representa os avanços científicos e arquitetônicos da Índia do século XVIII.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Nahargarh Fort", es: "Fuerte de Nahargarh", pt: "Forte de Nahargarh" },
        address: { en: "Krishna Nagar, Brahampuri, Jaipur, Rajasthan 302002, India", es: "Jaipur, Rajasthan 302002, India", pt: "Jaipur, Rajasthan 302002, Índia" },
        description: {
          en: cleanText("Nahargarh Fort stands on the Aravalli Hills and offers panoramic views over Jaipur. Originally built as part of Jaipur's defensive system, the fort is known for its historic architecture, royal rooms and scenic surroundings. Its elevated location makes it particularly popular for enjoying city views and sunsets."),
          es: cleanText("El Fuerte de Nahargarh se encuentra en las colinas Aravalli y ofrece vistas panorámicas de Jaipur. Originalmente construido como parte del sistema defensivo de la ciudad, es conocido por su arquitectura histórica, habitaciones reales y entorno montañoso. Su ubicación elevada lo convierte en un lugar popular para disfrutar de las vistas y del atardecer."),
          pt: cleanText("O Forte de Nahargarh está localizado nas colinas Aravalli e oferece vistas panorâmicas de Jaipur. Originalmente construído como parte do sistema defensivo da cidade, o forte é conhecido por sua arquitetura histórica, aposentos reais e paisagens montanhosas. Sua localização elevada faz dele um lugar muito procurado para apreciar a cidade e o pôr do sol.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jaigarh Fort", es: "Fuerte de Jaigarh", pt: "Forte de Jaigarh" },
        address: { en: "Devisinghpura, Amer, Jaipur, Rajasthan 302001, India", es: "Amer, Jaipur, Rajasthan 302001, India", pt: "Amer, Jaipur, Rajasthan 302001, Índia" },
        description: {
          en: cleanText("Jaigarh Fort is a massive hilltop fort located near Amber Fort and is famous for its impressive defensive architecture. Built primarily to protect the royal palace complex, the fort features massive walls, watchtowers, courtyards and historic military structures. It is also associated with the Jaivana cannon, one of the fort's most notable attractions."),
          es: cleanText("El Fuerte de Jaigarh es una enorme fortaleza situada en una colina cerca del Fuerte de Amber y es famosa por su impresionante arquitectura defensiva. Construida principalmente para proteger el complejo real, cuenta con enormes murallas, torres de vigilancia, patios y estructuras militares históricas. También es conocida por el cañón Jaivana, una de sus principales atracciones."),
          pt: cleanText("O Forte de Jaigarh é uma enorme fortaleza localizada em uma colina próxima ao Forte de Amber e conhecida por sua impressionante arquitetura defensiva. Construído principalmente para proteger o complexo real, possui enormes muralhas, torres de observação, pátios e estruturas militares históricas. O forte também é famoso pelo canhão Jaivana, uma de suas principais atrações.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jal Mahal", es: "Jal Mahal", pt: "Jal Mahal" },
        address: { en: "Amer Rd, Jal Mahal, Amber, Jaipur, Rajasthan 302002, India", es: "Amer Rd, Jaipur, Rajasthan 302002, India", pt: "Amer Rd, Jaipur, Rajasthan 302002, Índia" },
        description: {
          en: cleanText("Jal Mahal is a beautiful palace situated in the middle of Man Sagar Lake. The palace appears to float on the water and is surrounded by the Aravalli hills. Its distinctive Rajput-style architecture and picturesque setting make it one of the most photographed landmarks of Jaipur."),
          es: cleanText("Jal Mahal es un hermoso palacio situado en medio del lago Man Sagar. El edificio parece flotar sobre el agua y está rodeado por las colinas Aravalli. Su característica arquitectura de estilo rajput y su ubicación pintoresca lo convierten en uno de los monumentos más fotografiados de Jaipur."),
          pt: cleanText("Jal Mahal é um belo palácio situado no meio do lago Man Sagar. O palácio parece flutuar sobre a água e é cercado pelas colinas Aravalli. Sua arquitetura característica em estilo Rajput e sua localização pitoresca fazem dele um dos monumentos mais fotografados de Jaipur.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Albert Hall Museum", es: "Museo Albert Hall", pt: "Museu Albert Hall" },
        address: { en: "Museum Rd, Ram Niwas Garden, Kailash Puri, Adarsh Nagar, Jaipur, Rajasthan 302004, India", es: "Ram Niwas Garden, Jaipur, Rajasthan 302004, India", pt: "Ram Niwas Garden, Jaipur, Rajasthan 302004, Índia" },
        description: {
          en: cleanText("Albert Hall Museum is one of Jaipur's most important museums and is located in the historic Ram Niwas Garden. The Indo-Saracenic building houses an extensive collection of paintings, sculptures, textiles, weapons, decorative arts and historical objects. Its beautifully illuminated exterior is especially attractive in the evening."),
          es: cleanText("El Albert Hall Museum es uno de los museos más importantes de Jaipur y se encuentra dentro del histórico Ram Niwas Garden. El edificio de estilo indo-sarraceno alberga una amplia colección de pinturas, esculturas, textiles, armas, artes decorativas y objetos históricos. Su exterior bellamente iluminado resulta especialmente atractivo por la noche."),
          pt: cleanText("O Albert Hall Museum é um dos museus mais importantes de Jaipur e está localizado no histórico Ram Niwas Garden. O edifício em estilo indo-sarraceno abriga uma grande coleção de pinturas, esculturas, tecidos, armas, artes decorativas e objetos históricos. Sua fachada iluminada é especialmente bonita durante a noite.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Galta Ji Temple", es: "Templo Galta Ji", pt: "Templo Galta Ji" },
        address: { en: "Galta Ji, Jaipur, Rajasthan 302031, India", es: "Jaipur, Rajasthan 302031, India", pt: "Jaipur, Rajasthan 302031, Índia" },
        description: {
          en: cleanText("Galta Ji is a historic Hindu pilgrimage site situated among the Aravalli Hills near Jaipur. The complex includes several temples, natural water tanks and scenic rocky surroundings. The site is traditionally associated with Saint Galav and is popularly known as the Monkey Temple because of the large number of monkeys found around the temple complex."),
          es: cleanText("Galta Ji es un importante lugar de peregrinación hindú situado entre las colinas Aravalli cerca de Jaipur. El complejo incluye varios templos, piscinas naturales y un entorno rocoso pintoresco. El lugar está tradicionalmente relacionado con el santo Galav y es conocido popularmente como el Templo de los Monos debido a la gran cantidad de monos presentes en la zona."),
          pt: cleanText("Galta Ji é um importante local de peregrinação hindu localizado entre as colinas Aravalli, perto de Jaipur. O complexo possui vários templos, piscinas naturais e uma paisagem rochosa. O local está tradicionalmente associado ao santo Galav e é conhecido popularmente como Templo dos Macacos devido ao grande número de macacos encontrados na região.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Birla Mandir", es: "Birla Mandir", pt: "Birla Mandir" },
        address: { en: "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India", es: "Jaipur, Rajasthan 302004, India", pt: "Jaipur, Rajasthan 302004, Índia" },
        description: {
          en: cleanText("Birla Mandir, also known as Lakshmi Narayan Temple, is a striking white marble temple located at the foot of Moti Dungari Hill. Dedicated primarily to Lord Vishnu and Goddess Lakshmi, the temple features elegant marble architecture and beautifully carved decorative elements. Its peaceful surroundings make it a popular spiritual and architectural attraction."),
          es: cleanText("Birla Mandir, también conocido como Templo Lakshmi Narayan, es un impresionante templo de mármol blanco situado al pie de la colina Moti Dungari. Dedicado principalmente al Señor Vishnu y a la Diosa Lakshmi, destaca por su elegante arquitectura de mármol y sus detalladas decoraciones. Su ambiente tranquilo lo convierte en un lugar popular para el turismo espiritual y arquitectónico."),
          pt: cleanText("Birla Mandir, também conhecido como Templo Lakshmi Narayan, é um impressionante templo de mármore branco localizado ao pé da colina Moti Dungari. Dedicado principalmente ao Senhor Vishnu e à Deusa Lakshmi, o templo apresenta uma elegante arquitetura em mármore e detalhes decorativos esculpidos. Seu ambiente tranquilo faz dele uma atração espiritual e arquitetônica muito visitada.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Gaitore Ki Chhatriyan", es: "Gaitore Ki Chhatriyan", pt: "Gaitore Ki Chhatriyan" },
        address: { en: "Chhatriyan Rd, Jaipur, Rajasthan 302002, India", es: "Jaipur, Rajasthan 302002, India", pt: "Jaipur, Rajasthan 302002, Índia" },
        description: {
          en: cleanText("Gaitore Ki Chhatriyan is a beautiful complex of royal cenotaphs located in a peaceful valley beneath the Nahargarh Hills. The marble and sandstone structures feature detailed carvings, domes and traditional Rajput architectural elements. The site served as a royal cremation ground and is an excellent place to experience Jaipur's architectural heritage away from the busiest tourist areas."),
          es: cleanText("Gaitore Ki Chhatriyan es un hermoso complejo de cenotafios reales situado en un tranquilo valle bajo las colinas de Nahargarh. Las estructuras de mármol y arenisca presentan elaboradas tallas, cúpulas y elementos tradicionales de la arquitectura rajput. El lugar fue utilizado como espacio de cremación real y permite conocer una parte más tranquila del patrimonio arquitectónico de Jaipur."),
          pt: cleanText("Gaitore Ki Chhatriyan é um belo complexo de cenotáfios reais localizado em um vale tranquilo abaixo das colinas Nahargarh. As estruturas de mármore e arenito apresentam esculturas detalhadas, cúpulas e elementos tradicionais da arquitetura Rajput. O local foi utilizado como área de cremação real e oferece uma experiência mais tranquila do patrimônio arquitetônico de Jaipur.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Patrika Gate", es: "Patrika Gate", pt: "Patrika Gate" },
        address: { en: "JL N Marg, Jawahar Circle, Jaipur, Rajasthan 302018, India", es: "Jawahar Circle, Jaipur, Rajasthan 302018, India", pt: "Jawahar Circle, Jaipur, Rajasthan 302018, Índia" },
        description: {
          en: cleanText("Patrika Gate is a colourful architectural landmark at Jawahar Circle in Jaipur. The gateway is decorated with vibrant paintings, arches, murals and traditional Rajasthani motifs representing the culture and heritage of the region. Its elaborate design and colourful interiors have made it one of Jaipur's most popular photography spots."),
          es: cleanText("Patrika Gate es un famoso monumento arquitectónico situado en Jawahar Circle, Jaipur. La puerta está decorada con pinturas coloridas, arcos, murales y motivos tradicionales de Rajasthan que representan la cultura y el patrimonio de la región. Su diseño elaborado y sus interiores llenos de color la han convertido en uno de los lugares favoritos para la fotografía."),
          pt: cleanText("Patrika Gate é um famoso marco arquitetônico localizado em Jawahar Circle, Jaipur. O portão é decorado com pinturas coloridas, arcos, murais e motivos tradicionais do Rajasthan que representam a cultura e o patrimônio da região. Seu design elaborado e seus interiores vibrantes fizeram do local um dos pontos mais populares para fotografia em Jaipur.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Jaipur Tourism – Forts, Palaces & Pink City Guide", metaDescription: "Explore Jaipur: Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, Nahargarh, Jal Mahal and Patrika Gate.", keywords: ["Jaipur tourism", "Amber Fort", "City Palace Jaipur", "Hawa Mahal", "places to visit in Jaipur"], tags: ["Jaipur", "Rajasthan", "Pink City", "Forts", "Palaces", "UNESCO"] },
      es: { metaTitle: "Turismo en Jaipur – Guía de la Ciudad Rosa", metaDescription: "Descubre Jaipur: Fuerte Amber, Palacio de la Ciudad, Hawa Mahal, Jantar Mantar, Fuerte Nahargarh y Jal Mahal.", keywords: ["turismo en Jaipur", "lugares para visitar en Jaipur", "Fuerte de Amber", "Hawa Mahal"], tags: ["Jaipur", "Rajasthan", "Ciudad Rosa", "Fuertes", "Palacios"] },
      pt: { metaTitle: "Turismo em Jaipur – Guia da Cidade Rosa", metaDescription: "Conheça Jaipur: Forte de Amber, City Palace, Hawa Mahal, Jantar Mantar, Forte de Nahargarh e Jal Mahal.", keywords: ["turismo em Jaipur", "lugares para visitar em Jaipur", "Forte de Amber", "Hawa Mahal"], tags: ["Jaipur", "Rajasthan", "Cidade Rosa", "Fortes", "Palácios"] }
    }
  },

  // 2. JODHPUR (7 PLACES)
  {
    id: "jodhpur",
    name: "Jodhpur",
    nombre: "Jodhpur",
    nome: "Jodhpur",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/jodhpur",
    image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Jodhpur</strong>, the Sun City and Blue City of Rajasthan, is known for the magnificent Mehrangarh Fort, blue-painted houses, royal palaces and vibrant Marwar culture.</p>",
      es: "<p><strong>Jodhpur</strong>, la Ciudad del Sol y Ciudad Azul de Rajasthan, es conocida por el majestuoso Fuerte Mehrangarh, casas pintadas de azul, palacios reales y cultura Marwar.</p>",
      pt: "<p><strong>Jodhpur</strong>, a Cidade do Sol e Cidade Azul do Rajasthan, é conhecida pelo majestoso Forte Mehrangarh, casas azuis, palácios reais e rica cultura Marwar.</p>"
    },
    content: {
      en: "<p><strong>Jodhpur</strong>, the Sun City and Blue City of Rajasthan, is known for the magnificent Mehrangarh Fort, blue-painted houses, royal palaces and vibrant Marwar culture.</p>",
      es: "<p><strong>Jodhpur</strong>, la Ciudad del Sol y Ciudad Azul de Rajasthan, es conocida por el majestuoso Fuerte Mehrangarh, casas pintadas de azul, palacios reales y cultura Marwar.</p>",
      pt: "<p><strong>Jodhpur</strong>, a Cidade do Sol e Cidade Azul do Rajasthan, é conhecida pelo majestoso Forte Mehrangarh, casas azuis, palácios reais e rica cultura Marwar.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Jodhpur – The Blue City</h2><p>Founded in 1459 by Rao Jodha, Jodhpur towers over the Thar Desert. Dominated by the iconic Mehrangarh Fort, its old city is famous for indigo-blue houses, bustling spice markets, and grand palaces.</p>",
      es: "<h2>Descubre Jodhpur – La Ciudad Azul</h2><p>Fundada en 1459 por Rao Jodha, Jodhpur domina el desierto de Thar. Presidida por el icónico Fuerte Mehrangarh, su casco antiguo destaca por sus casas de color azul índigo y coloridos mercados.</p>",
      pt: "<h2>Conheça Jodhpur – A Cidade Azul</h2><p>Fundada em 1459 pelo Rao Jodha, Jodhpur ergue-se sobre o deserto de Thar. Dominada pelo imponente Forte Mehrangarh, a cidade antiga é famosa por suas casas em tom azul-índigo.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Mehrangarh Fort", es: "Fuerte Mehrangarh", pt: "Forte Mehrangarh" },
        address: { en: "P.B No 165, Fort Rd, Jodhpur, Rajasthan 342006, India", es: "Jodhpur, Rajasthan 342006, India", pt: "Jodhpur, Rajasthan 342006, Índia" },
        description: {
          en: cleanText("Mehrangarh Fort is the magnificent landmark of Jodhpur, rising dramatically above the Blue City. Its massive walls, grand gateways, royal palaces and museum collections showcase the history and culture of the Rathore rulers. Moti Mahal, Phool Mahal and Sheesh Mahal are among its notable interiors."),
          es: cleanText("El Fuerte de Mehrangarh es el gran símbolo de Jodhpur y se eleva sobre la Ciudad Azul. Sus enormes murallas, puertas monumentales, palacios reales y colecciones del museo muestran la historia y cultura de los gobernantes Rathore. Moti Mahal, Phool Mahal y Sheesh Mahal destacan entre sus espacios interiores."),
          pt: cleanText("O Forte de Mehrangarh é o grande símbolo de Jodhpur e domina a Cidade Azul a partir de uma colina. Suas enormes muralhas, portões monumentais, palácios reais e coleções do museu mostram a história e cultura dos governantes Rathore. Moti Mahal, Phool Mahal e Sheesh Mahal estão entre seus espaços mais importantes.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Umaid Bhawan Palace", es: "Palacio Umaid Bhawan", pt: "Palácio Umaid Bhawan" },
        address: { en: "Circuit House Rd, Cantt Area, Jodhpur, Rajasthan 342006, India", es: "Jodhpur, Rajasthan 342006, India", pt: "Jodhpur, Rajasthan 342006, Índia" },
        description: {
          en: cleanText("Umaid Bhawan Palace is one of Jodhpur's grandest architectural landmarks. Built during the reign of Maharaja Umaid Singh, the palace combines Indian and European architectural influences with sandstone and marble details. Part of the palace functions as a museum showcasing royal history, while the building remains an important symbol of Jodhpur's heritage."),
          es: cleanText("El Palacio Umaid Bhawan es uno de los monumentos arquitectónicos más grandiosos de Jodhpur. Construido durante el reinado de Maharaja Umaid Singh, combina influencias arquitectónicas indias y europeas con detalles de arenisca y mármol. Una parte funciona como museo dedicado a la historia real."),
          pt: cleanText("O Umaid Bhawan Palace é um dos maiores monumentos arquitetônicos de Jodhpur. Construído durante o reinado do Maharaja Umaid Singh, combina influências arquitetônicas indianas e europeias com detalhes em arenito e mármore. Uma parte do palácio funciona como museu dedicado à história real.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jaswant Thada", es: "Jaswant Thada", pt: "Jaswant Thada" },
        address: { en: "Lawaran, Jodhpur, Rajasthan 342001, India", es: "Jodhpur, Rajasthan 342001, India", pt: "Jodhpur, Rajasthan 342001, Índia" },
        description: {
          en: cleanText("Jaswant Thada is an elegant white marble cenotaph built in memory of Maharaja Jaswant Singh II. Surrounded by gardens and peaceful landscapes, the monument features delicate marble screens and beautiful architectural details. Its location near Mehrangarh Fort provides a memorable combination of heritage and panoramic city views."),
          es: cleanText("Jaswant Thada es un elegante cenotafio de mármol blanco construido en memoria de Maharaja Jaswant Singh II. Rodeado de jardines y paisajes tranquilos, presenta delicadas celosías de mármol y detalles arquitectónicos. Su ubicación cerca de Mehrangarh ofrece vistas panorámicas de la ciudad."),
          pt: cleanText("Jaswant Thada é um elegante cenotáfio de mármore branco construído em memória do Maharaja Jaswant Singh II. Cercado por jardins e paisagens tranquilas, apresenta delicadas telas de mármore e detalhes arquitetônicos. Sua localização próxima ao Mehrangarh oferece belas vistas da cidade.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Mandore Gardens", es: "Mandore Gardens", pt: "Mandore Gardens" },
        address: { en: "Mandore, Jodhpur, Rajasthan 342007, India", es: "Jodhpur, Rajasthan 342007, India", pt: "Jodhpur, Rajasthan 342007, Índia" },
        description: {
          en: cleanText("Mandore Gardens is a historic garden complex associated with the former capital of the Marwar region. The gardens contain royal cenotaphs, temples, sculptures and historic structures surrounded by greenery. The impressive architecture and connection with Jodhpur's early history make Mandore an important heritage attraction."),
          es: cleanText("Mandore Gardens es un complejo histórico relacionado con la antigua capital de la región de Marwar. Sus jardines contienen cenotafios reales, templos, esculturas y estructuras históricas rodeadas de vegetación. Su arquitectura y conexión con la historia de Jodhpur lo convierten en un importante lugar patrimonial."),
          pt: cleanText("Mandore Gardens é um complexo histórico associado à antiga capital da região de Marwar. Os jardins possuem cenotáfios reais, templos, esculturas e estruturas históricas cercadas por vegetação. Sua arquitetura e ligação com a história de Jodhpur fazem do local uma importante atração histórica.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Clock Tower & Sardar Market", es: "Torre del Reloj y Sardar Market", pt: "Torre do Relógio e Sardar Market" },
        address: { en: "Nai Sarak, Ghantaghar Market, Jodhpur, Rajasthan 342001, India", es: "Jodhpur, Rajasthan 342001, India", pt: "Jodhpur, Rajasthan 342001, Índia" },
        description: {
          en: cleanText("The Clock Tower and Sardar Market form one of the liveliest traditional areas of Jodhpur. Located near the old city, the market is known for spices, handicrafts, textiles, jewellery and local products. The historic clock tower adds character to the bustling marketplace and offers visitors an authentic glimpse of everyday life in the Blue City."),
          es: cleanText("La Torre del Reloj y Sardar Market forman una de las zonas tradicionales más animadas de Jodhpur. El mercado es conocido por sus especias, artesanías, textiles, joyería y productos locales. La histórica torre del reloj añade carácter al mercado y permite conocer la vida cotidiana de la Ciudad Azul."),
          pt: cleanText("A Torre do Relógio e o Sardar Market formam uma das áreas tradicionais mais movimentadas de Jodhpur. O mercado é conhecido por especiarias, artesanato, tecidos, joias e produtos locais. A histórica torre do relógio dá personalidade ao mercado e permite conhecer o cotidiano da Cidade Azul.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Rao Jodha Desert Rock Park", es: "Rao Jodha Desert Rock Park", pt: "Rao Jodha Desert Rock Park" },
        address: { en: "Fort Rd, Jodhpur, Rajasthan 342001, India", es: "Jodhpur, Rajasthan 342001, India", pt: "Jodhpur, Rajasthan 342001, Índia" },
        description: {
          en: cleanText("Rao Jodha Desert Rock Park is a restored rocky landscape located beneath Mehrangarh Fort. Created to preserve native desert vegetation, the park features walking trails through the rugged landscape of the Aravallis. It offers a different perspective of Jodhpur, combining nature, geology and spectacular views of Mehrangarh."),
          es: cleanText("Rao Jodha Desert Rock Park es un paisaje rocoso restaurado situado debajo del Fuerte Mehrangarh. Creado para conservar la vegetación nativa del desierto, cuenta con senderos que atraviesan el paisaje de las Aravalli. Combina naturaleza, geología y vistas del fuerte."),
          pt: cleanText("Rao Jodha Desert Rock Park é uma paisagem rochosa restaurada localizada abaixo do Forte Mehrangarh. Criado para preservar a vegetação nativa do deserto, possui trilhas que atravessam a paisagem das Aravalli. O parque combina natureza, geologia e belas vistas do forte.")
        },
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kaylana Lake", es: "Lago Kaylana", pt: "Lago Kaylana" },
        address: { en: "Jaisalmer Rd, Jodhpur, Rajasthan 342001, India", es: "Jodhpur, Rajasthan 342001, India", pt: "Jodhpur, Rajasthan 342001, Índia" },
        description: {
          en: cleanText("Kaylana Lake is a scenic artificial lake located on the outskirts of Jodhpur. Surrounded by rocky landscapes and desert vegetation, it provides a peaceful escape from the busy city. The lake is particularly attractive around sunset and is a popular spot for photography and enjoying the surrounding landscape."),
          es: cleanText("El lago Kaylana es un pintoresco lago artificial situado en las afueras de Jodhpur. Rodeado de paisajes rocosos y vegetación desértica, ofrece un lugar tranquilo lejos del bullicio de la ciudad. Es especialmente atractivo al atardecer y popular para la fotografía."),
          pt: cleanText("O Lago Kaylana é um lago artificial pitoresco localizado nos arredores de Jodhpur. Cercado por paisagens rochosas e vegetação desértica, oferece um ambiente tranquilo longe do movimento da cidade. É especialmente bonito ao pôr do sol e popular para fotografia.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Jodhpur Tourism – Blue City Forts & Palaces", metaDescription: "Explore Jodhpur: Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, Mandore Gardens and Rao Jodha Park.", keywords: ["Jodhpur tourism", "Mehrangarh Fort", "Blue City", "Umaid Bhawan", "Jaswant Thada"], tags: ["Jodhpur", "Rajasthan", "Blue City", "Mehrangarh", "Palaces"] },
      es: { metaTitle: "Turismo en Jodhpur – Guía de la Ciudad Azul", metaDescription: "Descubre Jodhpur: Fuerte Mehrangarh, Palacio Umaid Bhawan, Jaswant Thada, Jardines Mandore y Parque Rao Jodha.", keywords: ["turismo en Jodhpur", "Fuerte Mehrangarh", "Ciudad Azul", "lugares para visitar en Jodhpur"], tags: ["Jodhpur", "Rajasthan", "Ciudad Azul", "Fuertes"] },
      pt: { metaTitle: "Turismo em Jodhpur – Guia da Cidade Azul", metaDescription: "Conheça Jodhpur: Forte Mehrangarh, Palácio Umaid Bhawan, Jaswant Thada, Jardins Mandore e Rao Jodha Park.", keywords: ["turismo em Jodhpur", "Forte Mehrangarh", "Cidade Azul", "lugares para visitar em Jodhpur"], tags: ["Jodhpur", "Rajasthan", "Cidade Azul", "Fortes"] }
    }
  },

  // 3. JAISALMER (7 PLACES)
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    nombre: "Jaisalmer",
    nome: "Jaisalmer",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/jaisalmer",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Jaisalmer</strong>, the Golden City of India, is famous for its golden sandstone fort rising from the Thar Desert, ornate havelis, and desert safaris.</p>",
      es: "<p><strong>Jaisalmer</strong>, la Ciudad Dorada de la India, es famosa por su fuerte de arenisca dorada en el desierto del Thar, havelis talladas y safaris en dunas.</p>",
      pt: "<p><strong>Jaisalmer</strong>, a Cidade Dourada da Índia, é famosa por seu forte de arenito dourado no deserto de Thar, havelis esculpidas e safáris nas dunas.</p>"
    },
    content: {
      en: "<p><strong>Jaisalmer</strong>, the Golden City of India, is famous for its golden sandstone fort rising from the Thar Desert, ornate havelis, and desert safaris.</p>",
      es: "<p><strong>Jaisalmer</strong>, la Ciudad Dorada de la India, es famosa por su fuerte de arenisca dorada en el desierto del Thar, havelis talladas y safaris en dunas.</p>",
      pt: "<p><strong>Jaisalmer</strong>, a Cidade Dourada da Índia, é famosa por seu forte de arenito dourado no deserto de Thar, havelis esculpidas e safáris nas dunas.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Jaisalmer – The Golden City</h2><p>Located in the heart of the Thar Desert, Jaisalmer is known for its living golden fort (Sonar Qila), intricately carved yellow sandstone mansions, desert dunes, and unforgettable camel safaris.</p>",
      es: "<h2>Descubre Jaisalmer – La Ciudad Dorada</h2><p>Ubicada en el corazón del desierto del Thar, Jaisalmer es famosa por su fuerte vivo de arenisca dorada (Sonar Qila), mansiones haveli talladas y paseos en camello.</p>",
      pt: "<h2>Conheça Jaisalmer – A Cidade Dourada</h2><p>Localizada no coração do deserto de Thar, Jaisalmer é famosa por seu forte habitado de arenito dourado (Sonar Qila), havelis esculpidas e passeios de camelo.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Jaisalmer Fort", es: "Fuerte de Jaisalmer", pt: "Forte de Jaisalmer" },
        address: { en: "Fort Rd, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Jaisalmer Fort, also called Sonar Qila or the Golden Fort, is the defining landmark of Jaisalmer. Built from golden-yellow sandstone, the fort rises dramatically from the Thar Desert and contains temples, havelis, shops and residential areas. Unlike many historic forts, it continues to support a living community within its walls."),
          es: cleanText("El Fuerte de Jaisalmer, conocido como Sonar Qila o Fuerte Dorado, es el monumento más emblemático de la ciudad. Construido con arenisca amarilla dorada, se eleva sobre el desierto del Thar y alberga templos, havelis, tiendas y zonas residenciales."),
          pt: cleanText("O Forte de Jaisalmer, conhecido como Sonar Qila ou Forte Dourado, é o principal símbolo da cidade. Construído em arenito amarelo-dourado, ergue-se no deserto de Thar e abriga templos, havelis, lojas e áreas residenciais.")
        },
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Patwon Ki Haveli", es: "Patwon Ki Haveli", pt: "Patwon Ki Haveli" },
        address: { en: "No. 312C, Near Patwa Complex, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Patwon Ki Haveli is an impressive collection of historic mansions known for its detailed sandstone carvings, balconies and decorative façades. The complex reflects the wealth and architectural sophistication of Jaisalmer's merchant families and provides an excellent example of traditional Rajasthani haveli architecture."),
          es: cleanText("Patwon Ki Haveli es un impresionante conjunto de antiguas mansiones conocido por sus detalladas tallas en arenisca, balcones y fachadas decorativas. El complejo refleja la riqueza y sofisticación arquitectónica de las familias comerciantes de Jaisalmer."),
          pt: cleanText("Patwon Ki Haveli é um impressionante conjunto de antigas mansões conhecido pelas esculturas detalhadas em arenito, varandas e fachadas decorativas. O complexo demonstra a riqueza e sofisticação arquitetônica das famílias comerciantes de Jaisalmer.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Gadisar Lake", es: "Lago Gadisar", pt: "Lago Gadisar" },
        address: { en: "Postal Colony, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Gadisar Lake is a historic artificial lake surrounded by temples, shrines, gateways and small architectural structures. Once an important water source for Jaisalmer, the lake is now a peaceful sightseeing destination. Its traditional surroundings and beautiful reflections make it particularly attractive during sunrise and sunset."),
          es: cleanText("El lago Gadisar es un histórico lago artificial rodeado de templos, santuarios, puertas y pequeñas estructuras arquitectónicas. Antiguamente fue una importante fuente de agua para Jaisalmer y actualmente es un tranquilo lugar turístico. Sus alrededores tradicionales son especialmente atractivos al amanecer y al atardecer."),
          pt: cleanText("O Lago Gadisar é um histórico lago artificial cercado por templos, santuários, portões e pequenas estruturas arquitetônicas. Antigamente era uma importante fonte de água para Jaisalmer e hoje é um local tranquilo para passeios. Seus arredores tradicionais são especialmente bonitos ao nascer e ao pôr do sol.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Sam Sand Dunes", es: "Sam Sand Dunes", pt: "Sam Sand Dunes" },
        address: { en: "Sam Sand Dunes, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Sam Sand Dunes are among the most popular desert attractions near Jaisalmer. The vast golden dunes provide an opportunity to experience the landscape of the Thar Desert through camel rides, jeep safaris, desert camps and traditional folk performances. Sunset over the dunes is one of the most memorable experiences in Jaisalmer."),
          es: cleanText("Las Sam Sand Dunes son una de las principales atracciones del desierto cerca de Jaisalmer. Las enormes dunas doradas permiten disfrutar del paisaje del Thar mediante paseos en camello, safaris en jeep, campamentos y espectáculos folclóricos tradicionales. El atardecer sobre las dunas es una experiencia especialmente memorable."),
          pt: cleanText("As Sam Sand Dunes estão entre as atrações mais populares do deserto perto de Jaisalmer. As enormes dunas douradas permitem conhecer o cenário do Thar através de passeios de camelo, safáris de jipe, acampamentos e apresentações folclóricas. O pôr do sol sobre as dunas é uma experiência inesquecível.")
        },
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Nathmal Ki Haveli", es: "Nathmal Ki Haveli", pt: "Nathmal Ki Haveli" },
        address: { en: "Sadad Bazar, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Nathmal Ki Haveli is a beautifully decorated mansion famous for its elaborate façade and intricate craftsmanship. Built for the prime minister of Jaisalmer, the haveli combines traditional Rajasthani architectural elements with detailed stone carvings and decorative motifs."),
          es: cleanText("Nathmal Ki Haveli es una hermosa mansión conocida por su fachada elaborada y su excepcional artesanía. Construida para el primer ministro de Jaisalmer, combina elementos arquitectónicos tradicionales de Rajasthan con detalladas tallas en piedra y motivos decorativos."),
          pt: cleanText("Nathmal Ki Haveli é uma bela mansão conhecida por sua fachada elaborada e artesanato detalhado. Construída para o primeiro-ministro de Jaisalmer, combina elementos tradicionais da arquitetura do Rajasthan com esculturas em pedra e motivos decorativos.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Salim Singh Ki Haveli", es: "Salim Singh Ki Haveli", pt: "Salim Singh Ki Haveli" },
        address: { en: "Near Jaisalmer Fort, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Salim Singh Ki Haveli is a distinctive historic mansion known for its unusual upper balconies and richly decorated architecture. The building features beautifully carved sandstone details and an eye-catching roofline that makes it different from other havelis in Jaisalmer."),
          es: cleanText("Salim Singh Ki Haveli es una mansión histórica conocida por sus singulares balcones superiores y su arquitectura ricamente decorada. El edificio presenta detalles tallados en arenisca y una silueta característica que la diferencia de otras havelis de Jaisalmer."),
          pt: cleanText("Salim Singh Ki Haveli é uma mansão histórica conhecida por suas varandas superiores incomuns e arquitetura ricamente decorada. O edifício apresenta detalhes esculpidos em arenito e uma silhueta característica que o diferencia de outras havelis de Jaisalmer.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kuldhara Village", es: "Kuldhara Village", pt: "Kuldhara Village" },
        address: { en: "Kuldhara, Jaisalmer, Rajasthan 345001, India", es: "Jaisalmer, Rajasthan 345001, India", pt: "Jaisalmer, Rajasthan 345001, Índia" },
        description: {
          en: cleanText("Kuldhara is a historic abandoned village located near Jaisalmer. Its ruined houses, streets and traditional architecture provide an atmospheric glimpse into the region's past. The village has become an important heritage attraction for visitors interested in history, local stories and the desert landscape."),
          es: cleanText("Kuldhara es un antiguo pueblo abandonado situado cerca de Jaisalmer. Sus casas en ruinas, calles y arquitectura tradicional ofrecen una visión de la historia de la región. Actualmente es una importante atracción patrimonial para quienes se interesan por la historia y el paisaje desértico."),
          pt: cleanText("Kuldhara é uma antiga vila abandonada localizada perto de Jaisalmer. Suas casas em ruínas, ruas e arquitetura tradicional oferecem uma visão do passado da região. Atualmente é uma atração histórica para visitantes interessados em história, cultura local e paisagens desérticas.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Jaisalmer Tourism – Golden Fort & Thar Desert Safaris", metaDescription: "Explore Jaisalmer: Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake, Sam Sand Dunes and Kuldhara Village.", keywords: ["Jaisalmer tourism", "Jaisalmer Fort", "Sonar Qila", "Sam Sand Dunes", "Patwon Ki Haveli"], tags: ["Jaisalmer", "Rajasthan", "Golden City", "Thar Desert", "Safaris"] },
      es: { metaTitle: "Turismo en Jaisalmer – Guía de la Ciudad Dorada", metaDescription: "Descubre Jaisalmer: Fuerte de Jaisalmer, Patwon Ki Haveli, Lago Gadisar, Dunas de Sam y Kuldhara.", keywords: ["turismo en Jaisalmer", "Fuerte de Jaisalmer", "Dunas de Sam", "lugares para visitar en Jaisalmer"], tags: ["Jaisalmer", "Rajasthan", "Ciudad Dorada", "Desierto"] },
      pt: { metaTitle: "Turismo em Jaisalmer – Guia da Cidade Dourada", metaDescription: "Conheça Jaisalmer: Forte de Jaisalmer, Patwon Ki Haveli, Lago Gadisar, Sam Sand Dunes e Kuldhara.", keywords: ["turismo em Jaisalmer", "Forte de Jaisalmer", "Sam Sand Dunes", "lugares para visitar em Jaisalmer"], tags: ["Jaisalmer", "Rajasthan", "Cidade Dourada", "Deserto"] }
    }
  },

  // 4. UDAIPUR (8 PLACES)
  {
    id: "udaipur",
    name: "Udaipur",
    nombre: "Udaipur",
    nome: "Udaipur",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/udaipur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Udaipur</strong>, the City of Lakes and Venice of the East, is celebrated for its serene lakes, marble palaces, romantic ambiance and Mewar royal heritage.</p>",
      es: "<p><strong>Udaipur</strong>, la Ciudad de los Lagos y Venecia del Este, es famosa por sus serenos lagos, palacios de mármol y patrimonio real de Mewar.</p>",
      pt: "<p><strong>Udaipur</strong>, a Cidade dos Lagos e Veneza do Leste, é famosa por seus lagos tranquilos, palácios de mármore e herança real de Mewar.</p>"
    },
    content: {
      en: "<p><strong>Udaipur</strong>, the City of Lakes and Venice of the East, is celebrated for its serene lakes, marble palaces, romantic ambiance and Mewar royal heritage.</p>",
      es: "<p><strong>Udaipur</strong>, la Ciudad de los Lagos y Venecia del Este, es famosa por sus serenos lagos, palacios de mármol y patrimonio real de Mewar.</p>",
      pt: "<p><strong>Udaipur</strong>, a Cidade dos Lagos e Veneza do Leste, é famosa por seus lagos tranquilos, palácios de mármore e herança real de Mewar.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Udaipur – City of Lakes</h2><p>Set around the serene waters of Lake Pichola and surrounded by the green Aravalli Hills, Udaipur is Rajasthan's most romantic destination, boasting grand royal palaces, boat rides, and exquisite Mewar culture.</p>",
      es: "<h2>Descubre Udaipur – La Ciudad de los Lagos</h2><p>Rodeada por las tranquilas aguas del lago Pichola y las colinas Aravalli, Udaipur es el destino más romántico de Rajasthan, famoso por sus palacios reales y paseos en barco.</p>",
      pt: "<h2>Conheça Udaipur – A Cidade dos Lagos</h2><p>Cercada pelas águas do Lago Pichola e pelas colinas Aravalli, Udaipur é o destino mais romântico do Rajasthan, com palácios requintados e passeios de barco.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "City Palace", es: "Palacio de la Ciudad", pt: "Palácio da Cidade" },
        address: { en: "Old City, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("City Palace is Udaipur's most impressive royal complex, overlooking Lake Pichola. Built and expanded by the rulers of Mewar, the palace contains courtyards, balconies, royal chambers, galleries and museums decorated with mosaics, marble and colourful artwork."),
          es: cleanText("El Palacio de la Ciudad es el complejo real más impresionante de Udaipur y domina el lago Pichola. Construido y ampliado por los gobernantes de Mewar, cuenta con patios, balcones, cámaras reales, galerías y museos decorados con mosaicos, mármol y obras de arte."),
          pt: cleanText("O City Palace é o mais impressionante complexo real de Udaipur, com vista para o lago Pichola. Construído e ampliado pelos governantes de Mewar, possui pátios, varandas, aposentos reais, galerias e museus decorados com mosaicos, mármore e obras de arte.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Lake Pichola", es: "Lago Pichola", pt: "Lago Pichola" },
        address: { en: "Lake Pichola, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("Lake Pichola is one of Udaipur's most beautiful lakes and forms the scenic heart of the city. Surrounded by palaces, ghats, hills and historic buildings, the lake is particularly famous for boat rides offering views of City Palace and Lake Palace."),
          es: cleanText("El lago Pichola es uno de los lagos más hermosos de Udaipur y forma el corazón paisajístico de la ciudad. Está rodeado de palacios, ghats, colinas y edificios históricos. Los paseos en barco permiten disfrutar de vistas del Palacio de la Ciudad y del Lake Palace."),
          pt: cleanText("O Lago Pichola é um dos lagos mais bonitos de Udaipur e representa o coração paisagístico da cidade. Cercado por palácios, ghats, colinas e edifícios históricos, é especialmente famoso pelos passeios de barco com vistas do City Palace e do Lake Palace.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jag Mandir", es: "Jag Mandir", pt: "Jag Mandir" },
        address: { en: "Pichola, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("Jag Mandir is a beautiful island palace located on Lake Pichola. Built with elegant marble and sandstone architecture, the palace features gardens, courtyards and lakeside views. Its peaceful island setting makes it one of Udaipur's most memorable heritage attractions."),
          es: cleanText("Jag Mandir es un hermoso palacio situado en una isla del lago Pichola. Construido con elegante arquitectura de mármol y arenisca, cuenta con jardines, patios y vistas al lago. Su ubicación tranquila lo convierte en una de las atracciones patrimoniales más especiales de Udaipur."),
          pt: cleanText("Jag Mandir é um belo palácio localizado em uma ilha no Lago Pichola. Construído com elegante arquitetura em mármore e arenito, possui jardins, pátios e vistas para o lago. Sua localização tranquila faz dele uma das atrações históricas mais especiais de Udaipur.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Sajjangarh / Monsoon Palace", es: "Sajjangarh / Palacio del Monzón", pt: "Sajjangarh / Palácio das Monções" },
        address: { en: "1100, Kodiyat Rd, Sajjangarh, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("Sajjangarh, popularly known as the Monsoon Palace, stands on a hill overlooking Udaipur and the surrounding Aravalli landscape. Originally planned as an astronomical centre and later developed as a monsoon retreat, the palace is particularly famous for panoramic sunset and city views."),
          es: cleanText("Sajjangarh, conocido como el Palacio del Monzón, se encuentra sobre una colina con vistas a Udaipur y a las montañas Aravalli. Originalmente concebido como centro astronómico y posteriormente utilizado como residencia de temporada, es famoso por sus vistas panorámicas y atardeceres."),
          pt: cleanText("Sajjangarh, conhecido como Palácio das Monções, está localizado em uma colina com vista para Udaipur e para as montanhas Aravalli. Originalmente planejado como centro astronômico e posteriormente utilizado como retiro durante as monções, é famoso pelas vistas panorâmicas e pelo pôr do sol.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Fateh Sagar Lake", es: "Lago Fateh Sagar", pt: "Lago Fateh Sagar" },
        address: { en: "Fateh Sagar Lake, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("Fateh Sagar Lake is a scenic artificial lake surrounded by the Aravalli Hills. Its calm blue waters, surrounding roads and mountain scenery make it one of Udaipur's favourite leisure spots. The lake is especially beautiful during the early morning and evening."),
          es: cleanText("El lago Fateh Sagar es un hermoso lago artificial rodeado por las colinas Aravalli. Sus aguas tranquilas, carreteras panorámicas y paisaje montañoso lo convierten en uno de los lugares favoritos para relajarse en Udaipur."),
          pt: cleanText("O Lago Fateh Sagar é um belo lago artificial cercado pelas colinas Aravalli. Suas águas tranquilas, estradas panorâmicas e paisagens montanhosas fazem dele um dos lugares preferidos para lazer em Udaipur.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jagdish Temple", es: "Templo Jagdish", pt: "Templo Jagdish" },
        address: { en: "RJ SH 50, Jagdish Chowk, Banglows, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("Jagdish Temple is a historic Hindu temple located near Udaipur's City Palace. Dedicated to Lord Vishnu, the temple is known for its impressive stone carvings, sculpted pillars and traditional architecture. Its location in the old city makes it an important part of Udaipur's cultural heritage."),
          es: cleanText("El Templo Jagdish es un histórico templo hindú situado cerca del Palacio de la Ciudad de Udaipur. Dedicado al Señor Vishnu, es conocido por sus impresionantes tallas de piedra, pilares esculpidos y arquitectura tradicional."),
          pt: cleanText("O Templo Jagdish é um histórico templo hindu localizado perto do City Palace de Udaipur. Dedicado ao Senhor Vishnu, destaca-se pelas impressionantes esculturas em pedra, pilares esculpidos e arquitetura tradicional.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Saheliyon Ki Bari", es: "Saheliyon Ki Bari", pt: "Saheliyon Ki Bari" },
        address: { en: "Saheli Marg, New Fatehpura, Panchwati, Udaipur, Rajasthan 313001, India", es: "Udaipur, Rajasthan 313001, India", pt: "Udaipur, Rajasthan 313001, Índia" },
        description: {
          en: cleanText("Saheliyon Ki Bari is a historic garden created for the royal women of Mewar. The garden features fountains, marble pavilions, pools, lawns and ornamental greenery. Its peaceful atmosphere and elegant landscaping provide a pleasant contrast to Udaipur's grand palaces."),
          es: cleanText("Saheliyon Ki Bari es un jardín histórico creado para las mujeres de la familia real de Mewar. Cuenta con fuentes, pabellones de mármol, estanques, jardines y vegetación ornamental. Su ambiente tranquilo ofrece un agradable contraste con los grandes palacios de Udaipur."),
          pt: cleanText("Saheliyon Ki Bari é um jardim histórico criado para as mulheres da família real de Mewar. O jardim possui fontes, pavilhões de mármore, piscinas e vegetação ornamental. Sua atmosfera tranquila oferece um belo contraste com os grandes palácios de Udaipur.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Eklingji Temple", es: "Templo Eklingji", pt: "Templo Eklingji" },
        address: { en: "Kailashpuri, Udaipur, Rajasthan 313002, India", es: "Udaipur, Rajasthan 313002, India", pt: "Udaipur, Rajasthan 313002, Índia" },
        description: {
          en: cleanText("Eklingji Temple is a historic temple complex dedicated to Lord Shiva and is located near Udaipur. The temple is an important religious site associated with the Mewar tradition and is known for its intricate stone architecture and spiritual atmosphere. Its distinctive four-faced image of Shiva is one of the major features of the complex."),
          es: cleanText("El Templo de Eklingji es un histórico complejo dedicado al Señor Shiva situado cerca de Udaipur. Es un importante lugar religioso asociado con la tradición de Mewar y es conocido por su arquitectura de piedra y su ambiente espiritual. La imagen de Shiva con cuatro rostros es uno de sus elementos más destacados."),
          pt: cleanText("O Templo Eklingji é um histórico complexo dedicado ao Senhor Shiva, localizado perto de Udaipur. É um importante local religioso associado à tradição de Mewar e conhecido por sua arquitetura em pedra e atmosfera espiritual. A imagem de Shiva com quatro faces é uma de suas principais características.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Udaipur Tourism – City of Lakes & Royal Palaces", metaDescription: "Explore Udaipur: City Palace, Lake Pichola, Jag Mandir, Monsoon Palace, Fateh Sagar Lake and Jagdish Temple.", keywords: ["Udaipur tourism", "City Palace Udaipur", "Lake Pichola", "Jag Mandir", "Monsoon Palace"], tags: ["Udaipur", "Rajasthan", "City of Lakes", "Palaces", "Lakes"] },
      es: { metaTitle: "Turismo en Udaipur – Guía de la Ciudad de los Lagos", metaDescription: "Descubre Udaipur: Palacio de la Ciudad, Lago Pichola, Jag Mandir, Palacio del Monzón y Templo Jagdish.", keywords: ["turismo en Udaipur", "Palacio de la Ciudad Udaipur", "Lago Pichola", "lugares para visitar en Udaipur"], tags: ["Udaipur", "Rajasthan", "Ciudad de los Lagos", "Palacios"] },
      pt: { metaTitle: "Turismo em Udaipur – Guia da Cidade dos Lagos", metaDescription: "Conheça Udaipur: City Palace, Lago Pichola, Jag Mandir, Palácio das Monções e Templo Jagdish.", keywords: ["turismo em Udaipur", "City Palace Udaipur", "Lago Pichola", "lugares para visitar em Udaipur"], tags: ["Udaipur", "Rajasthan", "Cidade dos Lagos", "Palácios"] }
    }
  },

  // 5. PUSHKAR (6 PLACES)
  {
    id: "pushkar",
    name: "Pushkar",
    nombre: "Pushkar",
    nome: "Pushkar",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/pushkar",
    image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Pushkar</strong> is a holy town in Rajasthan famous for sacred Pushkar Lake, the rare Brahma Temple, and the world-renowned Pushkar Camel Fair.</p>",
      es: "<p><strong>Pushkar</strong> es una ciudad sagrada en Rajasthan famosa por su lago sagrado, el Templo de Brahma y la Feria de Camellos de Pushkar.</p>",
      pt: "<p><strong>Pushkar</strong> é uma cidade sagrada no Rajasthan famosa pelo Lago Pushkar, o Templo de Brahma e a Feira de Camelos de Pushkar.</p>"
    },
    content: {
      en: "<p><strong>Pushkar</strong> is a holy town in Rajasthan famous for sacred Pushkar Lake, the rare Brahma Temple, and the world-renowned Pushkar Camel Fair.</p>",
      es: "<p><strong>Pushkar</strong> es una ciudad sagrada en Rajasthan famosa por su lago sagrado, el Templo de Brahma y la Feria de Camellos de Pushkar.</p>",
      pt: "<p><strong>Pushkar</strong> é uma cidade sagrada no Rajasthan famosa pelo Lago Pushkar, o Templo de Brahma e a Feira de Camelos de Pushkar.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Pushkar – Sacred Pilgrimage Town</h2><p>Surrounded by the Aravalli Hills and Thar Desert sands, Pushkar is one of India's oldest pilgrimage sites, home to 52 holy ghats, ancient temples, and vibrant spiritual energy.</p>",
      es: "<h2>Descubre Pushkar – Ciudad Sagrada</h2><p>Rodeada por las colinas Aravalli, Pushkar es uno de los lugares de peregrinación más antiguos de la India, con 52 ghats sagrados y templos milenarios.</p>",
      pt: "<h2>Conheça Pushkar – Cidade Sagrada</h2><p>Cercada pelas colinas Aravalli, Pushkar é um dos locais de peregrinação mais antigos da Índia, com 52 ghats sagrados e templos antigos.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Pushkar Lake", es: "Lago Pushkar", pt: "Lago Pushkar" },
        address: { en: "Pushkar Lake, Pushkar, Rajasthan 305022, India", es: "Pushkar, Rajasthan 305022, India", pt: "Pushkar, Rajasthan 305022, Índia" },
        description: {
          en: cleanText("Pushkar Lake is the spiritual heart of Pushkar and is surrounded by numerous ghats and temples. Considered sacred in Hindu tradition, the lake attracts pilgrims and visitors throughout the year. The surrounding ghats, temples and narrow heritage streets create a distinctive spiritual atmosphere."),
          es: cleanText("El lago Pushkar es el corazón espiritual de la ciudad y está rodeado de numerosos ghats y templos. Considerado sagrado en la tradición hindú, atrae a peregrinos y visitantes durante todo el año. Los ghats, templos y calles históricas crean una atmósfera espiritual única."),
          pt: cleanText("O Lago Pushkar é o coração espiritual da cidade e está cercado por numerosos ghats e templos. Considerado sagrado na tradição hindu, recebe peregrinos e visitantes durante todo o ano. Os ghats, templos e ruas históricas criam uma atmosfera espiritual única.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Brahma Temple", es: "Templo de Brahma", pt: "Templo de Brahma" },
        address: { en: "Brahma Temple Rd, Ganahera, Pushkar, Rajasthan 305022, India", es: "Pushkar, Rajasthan 305022, India", pt: "Pushkar, Rajasthan 305022, Índia" },
        description: {
          en: cleanText("Brahma Temple is Pushkar's most famous religious landmark and is traditionally associated with Lord Brahma. The temple features a distinctive red spire and a sacred inner shrine. Pushkar's association with Brahma makes the temple an important pilgrimage destination and a major part of the town's cultural identity."),
          es: cleanText("El Templo de Brahma es el monumento religioso más famoso de Pushkar y está dedicado tradicionalmente al Señor Brahma. El templo destaca por su distintiva torre roja y su santuario interior. Su relación con Brahma convierte a Pushkar en un importante destino de peregrinación."),
          pt: cleanText("O Templo de Brahma é o monumento religioso mais famoso de Pushkar e está tradicionalmente associado ao Senhor Brahma. O templo possui uma distinta torre vermelha e um santuário interno sagrado. Sua ligação com Brahma torna Pushkar um importante destino de peregrinação.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Savitri Temple", es: "Templo Savitri", pt: "Templo Savitri" },
        address: { en: "Ratnagiri Hill, Pushkar, Rajasthan 305022, India", es: "Pushkar, Rajasthan 305022, India", pt: "Pushkar, Rajasthan 305022, Índia" },
        description: {
          en: cleanText("Savitri Temple is located on a hill overlooking Pushkar and offers panoramic views of the lake, town and surrounding desert landscape. The temple is dedicated to Goddess Savitri and can be reached by a hike or ropeway. Sunrise and sunset views from the hill are particularly popular."),
          es: cleanText("El Templo de Savitri está situado en una colina con vistas panorámicas al lago, la ciudad y el paisaje desértico de Pushkar. Está dedicado a la Diosa Savitri y se puede llegar caminando o mediante el teleférico. Las vistas al amanecer y al atardecer son especialmente populares."),
          pt: cleanText("O Templo Savitri está localizado em uma colina com vistas panorâmicas do lago, da cidade e da paisagem desértica de Pushkar. Dedicado à Deusa Savitri, pode ser alcançado por caminhada ou teleférico. As vistas do nascer e do pôr do sol são especialmente populares.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Rangji Temple", es: "Templo Rangji", pt: "Templo Rangji" },
        address: { en: "Near Pushkar Lake, Pushkar, Rajasthan 305022, India", es: "Pushkar, Rajasthan 305022, India", pt: "Pushkar, Rajasthan 305022, Índia" },
        description: {
          en: cleanText("Rangji Temple is a distinctive historic temple in Pushkar dedicated to Lord Rangji. Its architecture reflects a blend of South Indian, Rajput and Mughal influences, giving it a unique appearance among Pushkar's temples. The temple is an important part of the town's diverse religious and architectural heritage."),
          es: cleanText("El Templo Rangji es un histórico templo de Pushkar dedicado al Señor Rangji. Su arquitectura combina influencias del sur de la India, Rajput y mogoles, creando un aspecto único entre los templos de Pushkar."),
          pt: cleanText("O Templo Rangji é um histórico templo de Pushkar dedicado ao Senhor Rangji. Sua arquitetura combina influências do sul da Índia, Rajput e Mughal, criando uma aparência única entre os templos da cidade.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Varaha Temple", es: "Templo Varaha", pt: "Templo Varaha" },
        address: { en: "Main Market, Pushkar, Rajasthan 305022, India", es: "Pushkar, Rajasthan 305022, India", pt: "Pushkar, Rajasthan 305022, Índia" },
        description: {
          en: cleanText("Varaha Temple is one of the historic temples of Pushkar and is dedicated to Lord Varaha, the boar incarnation of Lord Vishnu. The temple represents the deep religious history of the town and is known for its traditional architecture and devotional significance."),
          es: cleanText("El Templo Varaha es uno de los templos históricos de Pushkar y está dedicado a Varaha, la encarnación de jabalí del Señor Vishnu. El templo representa la profunda historia religiosa de la ciudad y destaca por su arquitectura tradicional."),
          pt: cleanText("O Templo Varaha é um dos templos históricos de Pushkar e é dedicado a Varaha, a encarnação em forma de javali do Senhor Vishnu. O templo representa a profunda história religiosa da cidade e é conhecido por sua arquitetura tradicional.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Naga Pahar", es: "Naga Pahar", pt: "Naga Pahar" },
        address: { en: "Naga Pahar, Pushkar-Ajmer Border, Rajasthan 305022, India", es: "Pushkar, Rajasthan 305022, India", pt: "Pushkar, Rajasthan 305022, Índia" },
        description: {
          en: cleanText("Naga Pahar is a scenic hill range forming a natural boundary between Pushkar and Ajmer. The hills provide beautiful views of the surrounding landscape and are associated with Pushkar's traditional religious geography. The area is particularly appealing to visitors interested in nature, photography and peaceful landscapes."),
          es: cleanText("Naga Pahar es una cadena de colinas que forma una frontera natural entre Pushkar y Ajmer. Las colinas ofrecen hermosas vistas del paisaje circundante y forman parte de la geografía religiosa tradicional de Pushkar."),
          pt: cleanText("Naga Pahar é uma cadeia de colinas que forma uma fronteira natural entre Pushkar e Ajmer. As colinas oferecem belas vistas da paisagem ao redor e fazem parte da geografia religiosa tradicional de Pushkar.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Pushkar Tourism – Brahma Temple & Sacred Lake", metaDescription: "Explore Pushkar: Pushkar Lake, Brahma Temple, Savitri Temple, Rangji Temple and Naga Pahar.", keywords: ["Pushkar tourism", "Brahma Temple", "Pushkar Lake", "Savitri Temple", "Pushkar Camel Fair"], tags: ["Pushkar", "Rajasthan", "Pilgrimage", "Brahma Temple", "Sacred Lake"] },
      es: { metaTitle: "Turismo en Pushkar – Guía del Lago Sagrado y Templo de Brahma", metaDescription: "Descubre Pushkar: Lago Pushkar, Templo de Brahma, Templo Savitri, Templo Rangji y Naga Pahar.", keywords: ["turismo en Pushkar", "Templo de Brahma", "Lago Pushkar", "lugares para visitar en Pushkar"], tags: ["Pushkar", "Rajasthan", "Peregrinación", "Lago Sagrado"] },
      pt: { metaTitle: "Turismo em Pushkar – Guia do Lago Sagrado e Templo de Brahma", metaDescription: "Conheça Pushkar: Lago Pushkar, Templo de Brahma, Templo Savitri, Templo Rangji e Naga Pahar.", keywords: ["turismo em Pushkar", "Templo de Brahma", "Lago Pushkar", "lugares para visitar em Pushkar"], tags: ["Pushkar", "Rajasthan", "Peregrinação", "Lago Sagrado"] }
    }
  },

  // 6. RANTHAMBORE (5 PLACES)
  {
    id: "ranthambore",
    name: "Ranthambore",
    nombre: "Ranthambore",
    nome: "Ranthambore",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/ranthambore",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Ranthambore</strong> is India's premier national park for viewing wild Bengal tigers in their natural forest habitat, featuring historic fort ruins amidst jungle landscapes.</p>",
      es: "<p><strong>Ranthambore</strong> es el principal parque nacional de la India para avistar tigres de Bengala en libertad, con ruinas de un fuerte histórico en medio de la selva.</p>",
      pt: "<p><strong>Ranthambore</strong> é o principal parque nacional da Índia para avistar tigres-de-bengala selvagens, cercado por ruínas históricas no meio da selva.</p>"
    },
    content: {
      en: "<p><strong>Ranthambore</strong> is India's premier national park for viewing wild Bengal tigers in their natural forest habitat, featuring historic fort ruins amidst jungle landscapes.</p>",
      es: "<p><strong>Ranthambore</strong> es el principal parque nacional de la India para avistar tigres de Bengala en libertad, con ruinas de un fuerte histórico en medio de la selva.</p>",
      pt: "<p><strong>Ranthambore</strong> é o principal parque nacional da Índia para avistar tigres-de-bengala selvagens, cercado por ruínas históricas no meio da selva.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Ranthambore – Land of the Bengal Tiger</h2><p>Ranthambore National Park in Sawai Madhopur is famous for tiger safaris, rich biodiversity, scenic lakes, and the towering 10th-century UNESCO World Heritage Ranthambore Fort.</p>",
      es: "<h2>Descubre Ranthambore – Tierra del Tigre de Bengala</h2><p>El Parque Nacional Ranthambore en Sawai Madhopur es famoso por sus safaris de tigres, rica biodiversidad, lagos y el histórico Fuerte de Ranthambore.</p>",
      pt: "<h2>Conheça Ranthambore – Terra do Tigre-de-Bengala</h2><p>O Parque Nacional de Ranthambore é famoso por safáris de tigres, rica biodiversidade, lagos e o histórico Forte de Ranthambore da UNESCO.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Ranthambore National Park", es: "Parque Nacional de Ranthambore", pt: "Parque Nacional de Ranthambore" },
        address: { en: "Sawai Madhopur, Rajasthan 322001, India", es: "Sawai Madhopur, Rajasthan 322001, India", pt: "Sawai Madhopur, Rajasthan 322001, Índia" },
        description: {
          en: cleanText("Ranthambore National Park is one of Rajasthan's most famous wildlife destinations and is particularly known for its Bengal tiger population. The park combines dry deciduous forests, rocky hills, lakes and grasslands, creating a diverse habitat for tigers, leopards, sloth bears, deer, crocodiles and many bird species. Jeep and canter safaris provide visitors with an opportunity to explore the park's natural landscapes and wildlife."),
          es: cleanText("El Parque Nacional de Ranthambore es uno de los destinos de vida silvestre más famosos de Rajasthan y es especialmente conocido por sus tigres de Bengala. El parque combina bosques secos, colinas rocosas, lagos y praderas, creando un hábitat para tigres, leopardos, osos perezosos, ciervos, cocodrilos y numerosas aves. Los safaris permiten explorar sus paisajes y fauna."),
          pt: cleanText("O Parque Nacional de Ranthambore é um dos destinos de vida selvagem mais famosos do Rajasthan e é especialmente conhecido por sua população de tigres-de-bengala. O parque combina florestas secas, colinas rochosas, lagos e pradarias, criando um habitat para tigres, leopardos, ursos-beiçudos, cervos, crocodilos e várias espécies de aves. Os safáris permitem explorar suas paisagens e vida selvagem.")
        },
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Ranthambore Fort", es: "Fuerte de Ranthambore", pt: "Forte de Ranthambore" },
        address: { en: "Ranthambore National Park, Sawai Madhopur, Rajasthan 322001, India", es: "Sawai Madhopur, Rajasthan 322001, India", pt: "Sawai Madhopur, Rajasthan 322001, Índia" },
        description: {
          en: cleanText("Ranthambore Fort is a historic hill fort rising above the national park. Built by the Chauhan rulers, the fort contains massive walls, gateways, temples, tanks and historic structures. The Trinetra Ganesh Temple inside the fort is an important religious attraction, while the elevated location provides impressive views of the surrounding forest landscape."),
          es: cleanText("El Fuerte de Ranthambore es una histórica fortaleza situada sobre una colina dentro del paisaje del parque nacional. Construida por los gobernantes Chauhan, cuenta con enormes murallas, puertas, templos, estanques y estructuras históricas. El Templo Trinetra Ganesh es una importante atracción religiosa dentro del fuerte."),
          pt: cleanText("O Forte de Ranthambore é uma histórica fortaleza localizada sobre uma colina no meio da paisagem do parque nacional. Construído pelos governantes Chauhan, possui grandes muralhas, portões, templos, reservatórios e estruturas históricas. O Templo Trinetra Ganesh é uma importante atração religiosa dentro do forte.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Trinetra Ganesh Temple", es: "Templo Trinetra Ganesh", pt: "Templo Trinetra Ganesh" },
        address: { en: "Inside Ranthambore Fort, Sawai Madhopur, Rajasthan 322001, India", es: "Sawai Madhopur, Rajasthan 322001, India", pt: "Sawai Madhopur, Rajasthan 322001, Índia" },
        description: {
          en: cleanText("Trinetra Ganesh Temple is an ancient temple situated within Ranthambore Fort and dedicated to Lord Ganesha. The temple is an important pilgrimage site and is closely associated with the religious traditions of the region. Its location inside the historic fort gives visitors a combination of spirituality, history and scenic surroundings."),
          es: cleanText("El Templo Trinetra Ganesh es un antiguo templo situado dentro del Fuerte de Ranthambore y dedicado al Señor Ganesha. Es un importante lugar de peregrinación y está profundamente relacionado con las tradiciones religiosas de la región. Su ubicación dentro de la fortaleza combina espiritualidad, historia y paisajes."),
          pt: cleanText("O Templo Trinetra Ganesh é um antigo templo localizado dentro do Forte de Ranthambore e dedicado ao Senhor Ganesha. É um importante local de peregrinação e está ligado às tradições religiosas da região. Sua localização dentro da fortaleza combina espiritualidade, história e paisagens.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Padam Lake", es: "Lago Padam", pt: "Lago Padam" },
        address: { en: "Inside Ranthambore National Park, Sawai Madhopur, Rajasthan 322001, India", es: "Sawai Madhopur, Rajasthan 322001, India", pt: "Sawai Madhopur, Rajasthan 322001, Índia" },
        description: {
          en: cleanText("Padam Lake is one of the scenic water bodies inside Ranthambore National Park. Surrounded by forests and rocky terrain, the lake attracts a variety of wildlife and birds and is an important part of the park's natural landscape. The historic Jogi Mahal near the lake adds to its picturesque setting."),
          es: cleanText("El lago Padam es uno de los paisajes acuáticos más pintorescos del Parque Nacional de Ranthambore. Rodeado de bosques y terrenos rocosos, atrae a diferentes animales y aves y forma una parte importante del ecosistema del parque. El histórico Jogi Mahal añade atractivo al paisaje."),
          pt: cleanText("O Lago Padam é um dos pontos de água mais pitorescos do Parque Nacional de Ranthambore. Cercado por florestas e terrenos rochosos, atrai diversos animais e aves e representa uma parte importante da paisagem natural do parque. O histórico Jogi Mahal torna o cenário ainda mais especial.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Surwal Lake", es: "Lago Surwal", pt: "Lago Surwal" },
        address: { en: "Near Ranthambore, Sawai Madhopur, Rajasthan 322001, India", es: "Sawai Madhopur, Rajasthan 322001, India", pt: "Sawai Madhopur, Rajasthan 322001, Índia" },
        description: {
          en: cleanText("Surwal Lake is a seasonal lake near Ranthambore known for its peaceful surroundings and birdlife. During the suitable season, the lake attracts migratory and resident birds, making it an interesting destination for birdwatching and nature photography."),
          es: cleanText("El lago Surwal es un lago estacional cerca de Ranthambore conocido por su ambiente tranquilo y sus aves. Durante la temporada adecuada, atrae aves migratorias y residentes, convirtiéndolo en un lugar interesante para la observación de aves y la fotografía de naturaleza."),
          pt: cleanText("O Lago Surwal é um lago sazonal próximo a Ranthambore, conhecido por seu ambiente tranquilo e pela variedade de aves. Durante a temporada adequada, recebe aves migratórias e residentes, sendo um bom local para observação de aves e fotografia da natureza.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Ranthambore Tourism – Tiger Safaris & National Park", metaDescription: "Explore Ranthambore: Ranthambore National Park, Ranthambore Fort, Trinetra Ganesh Temple, Padam Lake and Surwal Lake.", keywords: ["Ranthambore tourism", "Ranthambore National Park", "Tiger Safari", "Ranthambore Fort", "Sawai Madhopur"], tags: ["Ranthambore", "Rajasthan", "Wildlife", "Tigers", "Safari", "National Park"] },
      es: { metaTitle: "Turismo en Ranthambore – Safaris de Tigres y Parque Nacional", metaDescription: "Descubre Ranthambore: Parque Nacional Ranthambore, Fuerte Ranthambore, Templo Trinetra Ganesh y Lago Padam.", keywords: ["turismo en Ranthambore", "Parque Nacional Ranthambore", "safari de tigres", "Fuerte Ranthambore"], tags: ["Ranthambore", "Rajasthan", "Vida Silvestre", "Tigres", "Safari"] },
      pt: { metaTitle: "Turismo em Ranthambore – Safáris de Tigres e Parque Nacional", metaDescription: "Conheça Ranthambore: Parque Nacional de Ranthambore, Forte de Ranthambore, Templo Trinetra Ganesh e Lago Padam.", keywords: ["turismo em Ranthambore", "Parque Nacional de Ranthambore", "safári de tigres", "Forte de Ranthambore"], tags: ["Ranthambore", "Rajasthan", "Vida Selvagem", "Tigres", "Safari"] }
    }
  },

  // 7. SARISKA (5 PLACES)
  {
    id: "sariska",
    name: "Sariska",
    nombre: "Sariska",
    nome: "Sariska",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/sariska",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Sariska</strong> Tiger Reserve is a tranquil sanctuary nestled in the Aravalli Hills, famous for Bengal tiger safaris, medieval ruins, and ancient temples.</p>",
      es: "<p><strong>Sariska</strong> es una reserva de tigres en las colinas Aravalli, famosa por safaris de vida silvestre, ruinas medievales y antiguos templos.</p>",
      pt: "<p><strong>Sariska</strong> é uma reserva de tigres nas colinas Aravalli, famosa por safáris de vida selvagem, ruínas medievais e templos antigos.</p>"
    },
    content: {
      en: "<p><strong>Sariska</strong> Tiger Reserve is a tranquil sanctuary nestled in the Aravalli Hills, famous for Bengal tiger safaris, medieval ruins, and ancient temples.</p>",
      es: "<p><strong>Sariska</strong> es una reserva de tigres en las colinas Aravalli, famosa por safaris de vida silvestre, ruinas medievales y antiguos templos.</p>",
      pt: "<p><strong>Sariska</strong> é uma reserva de tigres nas colinas Aravalli, famosa por safáris de vida selvagem, ruínas medievais e templos antigos.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Sariska – Wildlife & Heritage</h2><p>Located in Alwar district, Sariska Tiger Reserve offers thrilling jeep safaris amidst dry deciduous forests, rocky hills, the historic Kankwadi Fort, and sacred temples like Pandupol.</p>",
      es: "<h2>Descubre Sariska – Naturaleza y Patrimonio</h2><p>Ubicada en Alwar, la Reserva de Tigres de Sariska ofrece emocionales safaris en jeep entre bosques secos, el Fuerte Kankwadi y templos como Pandupol.</p>",
      pt: "<h2>Conheça Sariska – Natureza e Patrimônio</h2><p>Localizada em Alwar, a Reserva de Tigres de Sariska oferece empolgantes safáris de jipe entre florestas secas, o Forte Kankwadi e templos sagrados.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Sariska Tiger Reserve", es: "Reserva de Tigres de Sariska", pt: "Reserva de Tigres de Sariska" },
        address: { en: "Subhash Chowk Station Road, Alwar, Sariska, Rajasthan 301001, India", es: "Alwar, Sariska, Rajasthan 301001, India", pt: "Alwar, Sariska, Rajasthan 301001, Índia" },
        description: {
          en: cleanText("Sariska Tiger Reserve is a major wildlife destination situated in the Aravalli Hills. The reserve features dry deciduous forests, grasslands, rocky terrain and valleys and supports tigers, leopards, deer, wild boar, monkeys and numerous bird species. Jeep safaris are the main way to explore its wildlife and landscapes."),
          es: cleanText("La Reserva de Tigres de Sariska es un importante destino de naturaleza situado en las colinas Aravalli. La reserva cuenta con bosques secos, praderas, terrenos rocosos y valles donde viven tigres, leopardos, ciervos, jabalíes, monos y numerosas aves. Los safaris en jeep son la principal forma de explorarla."),
          pt: cleanText("A Reserva de Tigres de Sariska é um importante destino de natureza localizado nas colinas Aravalli. A reserva possui florestas secas, pradarias, terrenos rochosos e vales que abrigam tigres, leopardos, cervos, javalis, macacos e várias espécies de aves. Os safáris de jipe são a principal forma de explorar a região.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kankwadi Fort", es: "Fuerte Kankwadi", pt: "Forte Kankwadi" },
        address: { en: "Inside Sariska Tiger Reserve, Alwar, Rajasthan 301001, India", es: "Sariska, Alwar, Rajasthan 301001, India", pt: "Sariska, Alwar, Rajasthan 301001, Índia" },
        description: {
          en: cleanText("Kankwadi Fort is a historic fort located inside Sariska Tiger Reserve. Surrounded by forest and hills, the fort offers a unique combination of history and wilderness. Its isolated location and historic association with the Mughal period make it one of Sariska's notable heritage attractions."),
          es: cleanText("El Fuerte Kankwadi es una histórica fortaleza situada dentro de la Reserva de Tigres de Sariska. Rodeado de bosques y colinas, combina historia y naturaleza. Su ubicación aislada y su relación con el periodo mogol lo convierten en un importante lugar patrimonial."),
          pt: cleanText("O Forte Kankwadi é uma histórica fortaleza localizada dentro da Reserva de Tigres de Sariska. Cercado por florestas e colinas, combina história e natureza. Sua localização isolada e ligação com o período Mughal fazem dele uma importante atração histórica.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Neelkanth Temple", es: "Templo Neelkanth", pt: "Templo Neelkanth" },
        address: { en: "Tehla, Sariska Tiger Reserve, Alwar, Rajasthan 301410, India", es: "Sariska, Alwar, Rajasthan 301410, India", pt: "Sariska, Alwar, Rajasthan 301410, Índia" },
        description: {
          en: cleanText("Neelkanth Temple is an ancient temple complex situated in the Sariska landscape. Known for its beautifully carved stone sculptures and historic architecture, the temple reflects the artistic traditions of medieval Rajasthan. Its forested surroundings add to its peaceful and atmospheric character."),
          es: cleanText("El Templo Neelkanth es un antiguo complejo religioso situado en el paisaje de Sariska. Es conocido por sus esculturas de piedra y arquitectura histórica, que reflejan las tradiciones artísticas de la Rajasthan medieval. Su entorno boscoso le da una atmósfera tranquila."),
          pt: cleanText("O Templo Neelkanth é um antigo complexo religioso localizado na região de Sariska. Conhecido por suas esculturas em pedra e arquitetura histórica, reflete as tradições artísticas do Rajasthan medieval. A paisagem florestal ao redor proporciona uma atmosfera tranquila.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Pandupol Hanuman Temple", es: "Templo Hanuman de Pandupol", pt: "Templo Hanuman de Pandupol" },
        address: { en: "Sariska Tiger Reserve, Alwar, Rajasthan 301001, India", es: "Sariska, Alwar, Rajasthan 301001, India", pt: "Sariska, Alwar, Rajasthan 301001, Índia" },
        description: {
          en: cleanText("Pandupol Hanuman Temple is a popular religious attraction located within the Sariska landscape. The temple is associated with traditions from the Mahabharata and is situated near a scenic waterfall. Its combination of religious significance and natural surroundings makes it a popular stop for visitors."),
          es: cleanText("El Templo Hanuman de Pandupol es un importante lugar religioso dentro del paisaje de Sariska. Está asociado con las tradiciones del Mahabharata y se encuentra cerca de una pintoresca cascada. La combinación de espiritualidad y naturaleza lo convierte en un lugar popular."),
          pt: cleanText("O Templo Hanuman de Pandupol é uma importante atração religiosa localizada na região de Sariska. Está associado às tradições do Mahabharata e situado próximo a uma cachoeira. A combinação de espiritualidade e natureza faz dele um local muito visitado.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Siliserh Lake", es: "Lago Siliserh", pt: "Lago Siliserh" },
        address: { en: "Siliserh Lake, Alwar, Rajasthan 301001, India", es: "Alwar, Rajasthan 301001, India", pt: "Alwar, Rajasthan 301001, Índia" },
        description: {
          en: cleanText("Siliserh Lake is a picturesque artificial lake surrounded by the Aravalli Hills and forested landscapes. The peaceful setting makes it a pleasant place for boating, photography and enjoying nature. The lake is also associated with the historic Siliserh Lake Palace."),
          es: cleanText("El lago Siliserh es un hermoso lago artificial rodeado por las colinas Aravalli y paisajes boscosos. Su ambiente tranquilo es ideal para paseos en barco, fotografía y disfrutar de la naturaleza. El histórico Siliserh Lake Palace se encuentra junto al lago."),
          pt: cleanText("O Lago Siliserh é um belo lago artificial cercado pelas colinas Aravalli e paisagens florestais. O ambiente tranquilo é ideal para passeios de barco, fotografia e contato com a natureza. O histórico Siliserh Lake Palace está localizado junto ao lago.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Sariska Tourism – Tiger Reserve & Aravalli Wildlife", metaDescription: "Explore Sariska: Sariska Tiger Reserve, Kankwadi Fort, Neelkanth Temple, Pandupol Hanuman Temple and Siliserh Lake.", keywords: ["Sariska tourism", "Sariska Tiger Reserve", "Kankwadi Fort", "Siliserh Lake", "Alwar wildlife"], tags: ["Sariska", "Rajasthan", "Wildlife", "Tiger Reserve", "Nature"] },
      es: { metaTitle: "Turismo en Sariska – Reserva de Tigres y Vida Silvestre", metaDescription: "Descubre Sariska: Reserva de Tigres de Sariska, Fuerte Kankwadi, Templo Neelkanth, Pandupol y Lago Siliserh.", keywords: ["turismo en Sariska", "Reserva de Sariska", "safari en Sariska", "lugares para visitar en Sariska"], tags: ["Sariska", "Rajasthan", "Vida Silvestre", "Reserva de Tigres"] },
      pt: { metaTitle: "Turismo em Sariska – Reserva de Tigres e Vida Selvagem", metaDescription: "Conheça Sariska: Reserva de Tigres de Sariska, Forte Kankwadi, Templo Neelkanth, Pandupol e Lago Siliserh.", keywords: ["turismo em Sariska", "Reserva de Sariska", "safári em Sariska", "lugares para visitar em Sariska"], tags: ["Sariska", "Rajasthan", "Vida Selvagem", "Reserva de Tigres"] }
    }
  },

  // 8. BIKANER (6 PLACES)
  {
    id: "bikaner",
    name: "Bikaner",
    nombre: "Bikaner",
    nome: "Bikaner",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/bikaner",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Bikaner</strong> is a vibrant desert city in northern Rajasthan, famous for Junagarh Fort, red sandstone havelis, camel research, and traditional snacks.</p>",
      es: "<p><strong>Bikaner</strong> es una vibrante ciudad desértica del norte de Rajasthan, famosa por el Fuerte Junagarh, havelis de arenisca roja y camellos.</p>",
      pt: "<p><strong>Bikaner</strong> é uma vibrante cidade desértica do norte do Rajasthan, famosa pelo Forte Junagarh, havelis de arenito vermelho e camelos.</p>"
    },
    content: {
      en: "<p><strong>Bikaner</strong> is a vibrant desert city in northern Rajasthan, famous for Junagarh Fort, red sandstone havelis, camel research, and traditional snacks.</p>",
      es: "<p><strong>Bikaner</strong> es una vibrante ciudad desértica del norte de Rajasthan, famosa por el Fuerte Junagarh, havelis de arenisca roja y camellos.</p>",
      pt: "<p><strong>Bikaner</strong> é uma vibrante cidade desértica do norte do Rajasthan, famosa pelo Forte Junagarh, havelis de arenito vermelho e camelos.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Bikaner – Desert Heritage & Royal Forts</h2><p>Founded by Rao Bika in 1488, Bikaner boasts unyielding royal architecture, ornate merchant mansions, the famous Karni Mata temple, and deep desert traditions.</p>",
      es: "<h2>Descubre Bikaner – Patrimonio del Desierto y Fuertes Reales</h2><p>Fundada por Rao Bika en 1488, Bikaner destaca por su majestuosa arquitectura real, mansiones haveli de arenisca roja y el Templo Karni Mata.</p>",
      pt: "<h2>Conheça Bikaner – Patrimônio do Deserto e Fortes Reais</h2><p>Fundada por Rao Bika em 1488, Bikaner destaca-se por sua arquitetura real, mansões haveli em arenito vermelho e o famoso Templo Karni Mata.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Junagarh Fort", es: "Fuerte Junagarh", pt: "Forte Junagarh" },
        address: { en: "Bikaner Fort, Junagarh Fort Road, Bikaner, Rajasthan 334001, India", es: "Bikaner, Rajasthan 334001, India", pt: "Bikaner, Rajasthan 334001, Índia" },
        description: {
          en: cleanText("Junagarh Fort is one of Bikaner's most impressive heritage monuments. Built primarily with red sandstone and marble, the fort contains beautiful palaces, courtyards, balconies, temples and decorative interiors. Its combination of Rajput, Mughal and Gujarati influences reflects the rich history of Bikaner's royal family."),
          es: cleanText("El Fuerte Junagarh es uno de los monumentos históricos más importantes de Bikaner. Construido principalmente con arenisca roja y mármol, contiene palacios, patios, balcones, templos e interiores decorados. Su arquitectura refleja influencias rajput, mogoles y gujarati."),
          pt: cleanText("O Forte Junagarh é um dos monumentos históricos mais importantes de Bikaner. Construído principalmente em arenito vermelho e mármore, possui palácios, pátios, varandas, templos e interiores decorados. Sua arquitetura combina influências Rajput, Mughal e Gujarati.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Karni Mata Temple, Deshnok", es: "Templo de Karni Mata en Deshnok", pt: "Templo Karni Mata, Deshnok" },
        address: { en: "Deshnok, Bikaner, Rajasthan 334801, India", es: "Deshnok, Bikaner, Rajasthan 334801, India", pt: "Deshnok, Bikaner, Rajasthan 334801, Índia" },
        description: {
          en: cleanText("Karni Mata Temple in Deshnok is one of Rajasthan's most distinctive temples. The temple is dedicated to Karni Mata and is famous for the large number of rats that are traditionally considered sacred. Its silver doors, marble details and unusual religious traditions make it a memorable cultural attraction near Bikaner."),
          es: cleanText("El Templo de Karni Mata en Deshnok es uno de los templos más singulares de Rajasthan. Está dedicado a Karni Mata y es famoso por la gran cantidad de ratas consideradas sagradas dentro del templo. Sus puertas de plata, detalles de mármol y tradiciones religiosas lo convierten en una atracción cultural única."),
          pt: cleanText("O Templo Karni Mata, em Deshnok, é um dos templos mais singulares do Rajasthan. Dedicado a Karni Mata, é conhecido pelo grande número de ratos tradicionalmente considerados sagrados. Suas portas de prata, detalhes em mármore e tradições religiosas fazem dele uma atração cultural única.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "National Research Centre on Camel", es: "Centro Nacional de Investigación de Camellos", pt: "National Research Centre on Camel" },
        address: { en: "Jodhpur Bypass, Bikaner, Rajasthan 334001, India", es: "Bikaner, Rajasthan 334001, India", pt: "Bikaner, Rajasthan 334001, Índia" },
        description: {
          en: cleanText("The National Research Centre on Camel is an important camel research and breeding centre located near Bikaner. Visitors can learn about camel breeds and their role in desert life and agriculture. The centre also offers camel-related experiences and gives travellers a unique insight into Rajasthan's famous desert animal."),
          es: cleanText("El National Research Centre on Camel es un importante centro de investigación y cría de camellos cerca de Bikaner. Los visitantes pueden conocer diferentes razas de camellos y su importancia en la vida del desierto. También ofrece experiencias relacionadas con los camellos."),
          pt: cleanText("O National Research Centre on Camel é um importante centro de pesquisa e criação de camelos localizado perto de Bikaner. Os visitantes podem conhecer diferentes raças de camelos e seu papel na vida do deserto. O centro também oferece experiências relacionadas aos camelos.")
        },
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Lalgarh Palace", es: "Palacio Lalgarh", pt: "Palácio Lalgarh" },
        address: { en: "NH 15, Lal Garh Campus, Bikaner, Rajasthan 334001, India", es: "Bikaner, Rajasthan 334001, India", pt: "Bikaner, Rajasthan 334001, Índia" },
        description: {
          en: cleanText("Lalgarh Palace is a magnificent red sandstone palace commissioned by Maharaja Ganga Singh. Designed with a blend of Rajput, Mughal and European architectural influences, the palace features elegant courtyards, balconies and ornamental details. It represents the royal heritage and architectural grandeur of Bikaner."),
          es: cleanText("El Palacio Lalgarh es un magnífico palacio de arenisca roja construido por encargo de Maharaja Ganga Singh. Su diseño combina influencias rajput, mogoles y europeas, con elegantes patios, balcones y detalles ornamentales."),
          pt: cleanText("O Lalgarh Palace é um magnífico palácio de arenito vermelho construído por ordem do Maharaja Ganga Singh. Seu projeto combina influências Rajput, Mughal e europeias, com pátios elegantes, varandas e detalhes ornamentais.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Rampuria Havelis", es: "Rampuria Havelis", pt: "Rampuria Havelis" },
        address: { en: "Joshiwara, Old City, Bikaner, Rajasthan 334001, India", es: "Bikaner, Rajasthan 334001, India", pt: "Bikaner, Rajasthan 334001, Índia" },
        description: {
          en: cleanText("Rampuria Havelis are a group of beautifully decorated merchant mansions in the old city of Bikaner. Their red sandstone façades feature intricate jharokhas, carved windows, balconies and decorative details. The havelis showcase the wealth and artistic craftsmanship of Bikaner's historic merchant families."),
          es: cleanText("Las Rampuria Havelis son un conjunto de hermosas mansiones de comerciantes situadas en la ciudad antigua de Bikaner. Sus fachadas de arenisca roja presentan jharokhas, ventanas talladas, balcones y elaborados detalles decorativos."),
          pt: cleanText("As Rampuria Havelis são um conjunto de belas mansões de comerciantes localizadas na cidade antiga de Bikaner. Suas fachadas de arenito vermelho apresentam jharokhas, janelas esculpidas, varandas e detalhes decorativos.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Gajner Palace & Lake", es: "Palacio y Lago Gajner", pt: "Palácio e Lago Gajner" },
        address: { en: "Gajner, Bikaner, Rajasthan 334301, India", es: "Gajner, Bikaner, Rajasthan 334301, India", pt: "Gajner, Bikaner, Rajasthan 334301, Índia" },
        description: {
          en: cleanText("Gajner Palace is a historic lakeside palace located near Bikaner. Surrounded by desert landscapes and the peaceful Gajner Lake, the palace was once associated with the royal family of Bikaner. The setting combines heritage architecture with nature and provides a peaceful escape from the city."),
          es: cleanText("El Palacio Gajner es un histórico palacio situado junto a un lago cerca de Bikaner. Rodeado de paisajes desérticos y del tranquilo lago Gajner, estuvo relacionado con la familia real de Bikaner. Combina arquitectura histórica y naturaleza."),
          pt: cleanText("O Gajner Palace é um histórico palácio localizado às margens de um lago perto de Bikaner. Cercado por paisagens desérticas e pelo tranquilo Lago Gajner, esteve associado à família real de Bikaner. O local combina arquitetura histórica e natureza.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Bikaner Tourism – Junagarh Fort & Desert Heritage", metaDescription: "Explore Bikaner: Junagarh Fort, Karni Mata Temple Deshnok, Camel Research Centre, Lalgarh Palace and Rampuria Havelis.", keywords: ["Bikaner tourism", "Junagarh Fort", "Karni Mata Temple", "Rampuria Havelis", "Bikaner camel centre"], tags: ["Bikaner", "Rajasthan", "Junagarh", "Havelis", "Desert Heritage"] },
      es: { metaTitle: "Turismo en Bikaner – Fuerte Junagarh y Patrimonio del Desierto", metaDescription: "Descubre Bikaner: Fuerte Junagarh, Templo Karni Mata, Centro de Camellos, Palacio Lalgarh y Rampuria Havelis.", keywords: ["turismo en Bikaner", "Fuerte Junagarh", "Templo de Karni Mata", "lugares para visitar en Bikaner"], tags: ["Bikaner", "Rajasthan", "Fuertes", "Havelis"] },
      pt: { metaTitle: "Turismo em Bikaner – Forte Junagarh e Patrimônio do Deserto", metaDescription: "Conheça Bikaner: Forte Junagarh, Templo Karni Mata, Centro de Camelos, Palácio Lalgarh e Rampuria Havelis.", keywords: ["turismo em Bikaner", "Forte Junagarh", "Templo de Karni Mata", "lugares para visitar em Bikaner"], tags: ["Bikaner", "Rajasthan", "Fortes", "Havelis"] }
    }
  },

  // 9. MANDAWA (5 PLACES)
  {
    id: "mandawa",
    name: "Mandawa",
    nombre: "Mandawa",
    nome: "Mandawa",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/mandawa",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Mandawa</strong> is an open-air art gallery town in the Shekhawati region of Rajasthan, famous for grand painted havelis and colorful wall frescoes.</p>",
      es: "<p><strong>Mandawa</strong> es una ciudad galería de arte al aire libre en la región de Shekhawati, famosa por sus grandes havelis pintadas y frescos.</p>",
      pt: "<p><strong>Mandawa</strong> é uma cidade galeria de arte ao ar livre na região de Shekhawati, famosa por suas grandes havelis pintadas e afrescos.</p>"
    },
    content: {
      en: "<p><strong>Mandawa</strong> is an open-air art gallery town in the Shekhawati region of Rajasthan, famous for grand painted havelis and colorful wall frescoes.</p>",
      es: "<p><strong>Mandawa</strong> es una ciudad galería de arte al aire libre en la región de Shekhawati, famosa por sus grandes havelis pintadas y frescos.</p>",
      pt: "<p><strong>Mandawa</strong> é uma cidade galeria de arte ao ar livre na região de Shekhawati, famosa por suas grandes havelis pintadas e afrescos.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Mandawa – Open-Air Art Gallery of Shekhawati</h2><p>Located in Jhunjhunu district, Mandawa is famous worldwide for ornate merchant mansions adorned with vibrant hand-painted frescoes depicting mythology, history, and royal life.</p>",
      es: "<h2>Descubre Mandawa – Galería de Arte al Aire Libre</h2><p>Ubicada en Jhunjhunu, Mandawa es famosa mundialmente por las mansiones de comerciantes decoradas con vibrantes frescos pintados a mano.</p>",
      pt: "<h2>Conheça Mandawa – Galeria de Arte ao Ar Livre</h2><p>Localizada em Jhunjhunu, Mandawa é famosa mundialmente por suas mansões de comerciantes decoradas com afrescos pintados à mão.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Mandawa Fort", es: "Fuerte de Mandawa", pt: "Forte de Mandawa" },
        address: { en: "Mandawa, Jhunjhunu, Rajasthan 333704, India", es: "Mandawa, Rajasthan 333704, India", pt: "Mandawa, Rajasthan 333704, Índia" },
        description: {
          en: cleanText("Mandawa Fort is the historic centrepiece of the town and reflects the architectural heritage of the Shekhawati region. The fort features decorated gateways, frescoes, courtyards and traditional Rajput architecture. Its painted interiors and heritage character make it one of Mandawa's most important attractions."),
          es: cleanText("El Fuerte de Mandawa es el principal monumento histórico de la ciudad y representa el patrimonio arquitectónico de Shekhawati. Cuenta con puertas decoradas, frescos, patios y arquitectura rajput tradicional."),
          pt: cleanText("O Forte de Mandawa é o principal monumento histórico da cidade e representa o patrimônio arquitetônico de Shekhawati. Possui portões decorados, afrescos, pátios e arquitetura tradicional Rajput.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Goenka Double Haveli", es: "Goenka Double Haveli", pt: "Goenka Double Haveli" },
        address: { en: "Main Market, Mandawa, Rajasthan 333704, India", es: "Mandawa, Rajasthan 333704, India", pt: "Mandawa, Rajasthan 333704, Índia" },
        description: {
          en: cleanText("Goenka Double Haveli is one of Mandawa's beautiful merchant mansions, famous for its painted façades and elaborate frescoes. The haveli showcases scenes from traditional life, mythology and decorative art, reflecting the artistic character of Shekhawati."),
          es: cleanText("Goenka Double Haveli es una de las hermosas mansiones de comerciantes de Mandawa, famosa por sus fachadas pintadas y elaborados frescos. Sus pinturas representan escenas de la vida tradicional, mitología y arte decorativo."),
          pt: cleanText("Goenka Double Haveli é uma das belas mansões de comerciantes de Mandawa, famosa por suas fachadas pintadas e afrescos detalhados. As pinturas representam cenas da vida tradicional, mitologia e arte decorativa.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Murmuria Haveli", es: "Murmuria Haveli", pt: "Murmuria Haveli" },
        address: { en: "Near Main Bazaar, Mandawa, Rajasthan 333704, India", es: "Mandawa, Rajasthan 333704, India", pt: "Mandawa, Rajasthan 333704, Índia" },
        description: {
          en: cleanText("Murmuria Haveli is known for its colourful frescoes and detailed paintings covering its walls and façades. The artwork combines traditional Rajasthani themes with scenes depicting historical figures, vehicles and everyday life, making it an interesting example of Shekhawati's painted architecture."),
          es: cleanText("Murmuria Haveli es conocida por sus coloridos frescos y pinturas detalladas que cubren sus paredes y fachadas. Las obras combinan temas tradicionales de Rajasthan con escenas históricas y de la vida cotidiana."),
          pt: cleanText("Murmuria Haveli é conhecida por seus afrescos coloridos e pinturas detalhadas nas paredes e fachadas. As obras combinam temas tradicionais do Rajasthan com cenas históricas e do cotidiano.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jhunjhunwala Haveli", es: "Jhunjhunwala Haveli", pt: "Jhunjhunwala Haveli" },
        address: { en: "Mandawa, Jhunjhunu District, Rajasthan 333704, India", es: "Mandawa, Rajasthan 333704, India", pt: "Mandawa, Rajasthan 333704, Índia" },
        description: {
          en: cleanText("Jhunjhunwala Haveli is a historic mansion decorated with traditional frescoes and ornamental details. The building represents the wealth of the merchant families who transformed Mandawa and other Shekhawati towns into open-air galleries of painted architecture."),
          es: cleanText("Jhunjhunwala Haveli es una histórica mansión decorada con frescos tradicionales y detalles ornamentales. Representa la riqueza de las familias comerciantes que transformaron Mandawa y otras ciudades de Shekhawati en auténticas galerías de arquitectura pintada."),
          pt: cleanText("Jhunjhunwala Haveli é uma histórica mansão decorada com afrescos tradicionais e detalhes ornamentais. O edifício representa a riqueza das famílias comerciantes que transformaram Mandawa e outras cidades de Shekhawati em verdadeiras galerias de arquitetura pintada.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Chokhani Double Haveli", es: "Chokhani Double Haveli", pt: "Chokhani Double Haveli" },
        address: { en: "Mandawa, Rajasthan 333704, India", es: "Mandawa, Rajasthan 333704, India", pt: "Mandawa, Rajasthan 333704, Índia" },
        description: {
          en: cleanText("Chokhani Double Haveli is another notable example of Mandawa's painted heritage. Its elaborate façade, balconies, windows and colourful frescoes demonstrate the artistic traditions of Shekhawati's merchant architecture."),
          es: cleanText("Chokhani Double Haveli es otro destacado ejemplo del patrimonio pintado de Mandawa. Su elaborada fachada, balcones, ventanas y coloridos frescos muestran las tradiciones artísticas de la arquitectura comercial de Shekhawati."),
          pt: cleanText("Chokhani Double Haveli é outro importante exemplo do patrimônio pintado de Mandawa. Sua fachada elaborada, varandas, janelas e afrescos coloridos mostram as tradições artísticas da arquitetura mercantil de Shekhawati.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Mandawa Tourism – Shekhawati Painted Havelis", metaDescription: "Explore Mandawa: Mandawa Fort, Goenka Double Haveli, Murmuria Haveli, Jhunjhunwala Haveli and Chokhani Haveli.", keywords: ["Mandawa tourism", "Mandawa Fort", "Shekhawati havelis", "painted havelis", "Murmuria Haveli"], tags: ["Mandawa", "Rajasthan", "Shekhawati", "Havelis", "Frescoes", "Art Gallery"] },
      es: { metaTitle: "Turismo en Mandawa – Havelis Pintadas de Shekhawati", metaDescription: "Descubre Mandawa: Fuerte de Mandawa, Goenka Double Haveli, Murmuria Haveli y Jhunjhunwala Haveli.", keywords: ["turismo en Mandawa", "Fuerte de Mandawa", "havelis de Shekhawati", "frescos de Mandawa"], tags: ["Mandawa", "Rajasthan", "Shekhawati", "Havelis", "Frescos"] },
      pt: { metaTitle: "Turismo em Mandawa – Havelis Pintadas de Shekhawati", metaDescription: "Conheça Mandawa: Forte de Mandawa, Goenka Double Haveli, Murmuria Haveli e Jhunjhunwala Haveli.", keywords: ["turismo em Mandawa", "Forte de Mandawa", "havelis de Shekhawati", "afrescos de Mandawa"], tags: ["Mandawa", "Rajasthan", "Shekhawati", "Havelis", "Afrescos"] }
    }
  },

  // 10. RANAKPUR (4 PLACES)
  {
    id: "ranakpur",
    name: "Ranakpur",
    nombre: "Ranakpur",
    nome: "Ranakpur",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/ranakpur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Ranakpur</strong> is a peaceful valley in the Aravalli Hills world-famous for its 15th-century carved marble Jain Temple complex dedicated to Lord Adinath.</p>",
      es: "<p><strong>Ranakpur</strong> es un tranquilo valle en las colinas Aravalli famoso por su complejo de templos jainistas de mármol del siglo XV.</p>",
      pt: "<p><strong>Ranakpur</strong> é um tranquilo vale nas colinas Aravalli famoso por seu complexo de templos jainistas de mármore do século XV.</p>"
    },
    content: {
      en: "<p><strong>Ranakpur</strong> is a peaceful valley in the Aravalli Hills world-famous for its 15th-century carved marble Jain Temple complex dedicated to Lord Adinath.</p>",
      es: "<p><strong>Ranakpur</strong> es un tranquilo valle en las colinas Aravalli famoso por su complejo de templos jainistas de mármol del siglo XV.</p>",
      pt: "<p><strong>Ranakpur</strong> é um tranquilo vale nas colinas Aravalli famoso por seu complexo de templos jainistas de mármore do século XV.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Ranakpur – Marvel of Marble Architecture</h2><p>Tucked into a valley of the Aravallis in Pali district, Ranakpur is renowned for the Chaturmukha Dharana Vihara, featuring 1,444 uniquely carved marble pillars.</p>",
      es: "<h2>Descubre Ranakpur – Maravilla de la Arquitectura de Mármol</h2><p>Ubicado en Pali, Ranakpur es conocido por su Templo Jainista con 1,444 pilares de mármol esculpidos de forma única.</p>",
      pt: "<h2>Conheça Ranakpur – Maravilha da Arquitetura em Mármore</h2><p>Localizado em Pali, Ranakpur é renomado por seu Templo Jainista com 1.444 pilares de mármore esculpidos de forma única.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Ranakpur Jain Temple", es: "Templo Jainista de Ranakpur", pt: "Templo Jainista de Ranakpur" },
        address: { en: "Desuri, Ranakpur, Rajasthan 306702, India", es: "Ranakpur, Rajasthan 306702, India", pt: "Ranakpur, Rajasthan 306702, Índia" },
        description: {
          en: cleanText("Ranakpur Jain Temple is one of Rajasthan's finest examples of Jain architecture. Built in the 15th century, the marble complex is dedicated primarily to Lord Adinath and is famous for its extraordinary carvings and numerous individually designed pillars. Set among the Aravalli Hills, the temple combines spiritual importance with remarkable architectural beauty."),
          es: cleanText("El Templo Jainista de Ranakpur es uno de los mejores ejemplos de arquitectura jainista de Rajasthan. Construido en el siglo XV, el complejo de mármol está dedicado principalmente a Adinath y es famoso por sus extraordinarias tallas y numerosos pilares decorados. Su ubicación entre las colinas Aravalli añade belleza al conjunto."),
          pt: cleanText("O Templo Jainista de Ranakpur é um dos melhores exemplos da arquitetura jainista do Rajasthan. Construído no século XV, o complexo de mármore é dedicado principalmente a Adinath e é famoso por suas esculturas e numerosos pilares individualmente trabalhados. Localizado nas colinas Aravalli, combina espiritualidade e arquitetura.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Surya Narayan Temple", es: "Templo Surya Narayan", pt: "Templo Surya Narayan" },
        address: { en: "Near Ranakpur Jain Temple, Ranakpur, Rajasthan 306702, India", es: "Ranakpur, Rajasthan 306702, India", pt: "Ranakpur, Rajasthan 306702, Índia" },
        description: {
          en: cleanText("The Surya Narayan Temple is a beautiful temple dedicated to the Sun God and is located near the Ranakpur Jain Temple complex. Its walls feature intricate carvings of the Sun God, horses and other decorative motifs, making it an important example of traditional temple craftsmanship."),
          es: cleanText("El Templo Surya Narayan está dedicado al Dios Sol y se encuentra cerca del complejo del Templo Jainista de Ranakpur. Sus paredes presentan elaboradas tallas del Dios Sol, caballos y otros motivos decorativos, mostrando la artesanía tradicional de los templos."),
          pt: cleanText("O Templo Surya Narayan é dedicado ao Deus Sol e está localizado próximo ao complexo do Templo Jainista de Ranakpur. Suas paredes apresentam esculturas detalhadas do Deus Sol, cavalos e outros motivos decorativos.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Ranakpur Dam", es: "Ranakpur Dam", pt: "Ranakpur Dam" },
        address: { en: "Ranakpur Dam, Pali District, Rajasthan 306702, India", es: "Ranakpur, Rajasthan 306702, India", pt: "Ranakpur, Rajasthan 306702, Índia" },
        description: {
          en: cleanText("Ranakpur Dam is a peaceful natural attraction surrounded by the Aravalli landscape. The area is suitable for enjoying scenic views, nature walks and quiet moments away from the busy tourist areas. It provides a pleasant complement to Ranakpur's famous temples."),
          es: cleanText("Ranakpur Dam es un tranquilo lugar natural rodeado por el paisaje de las colinas Aravalli. Es adecuado para disfrutar de vistas panorámicas, paseos por la naturaleza y momentos de tranquilidad."),
          pt: cleanText("Ranakpur Dam é uma tranquila atração natural cercada pela paisagem das colinas Aravalli. É um local agradável para apreciar vistas, fazer caminhadas na natureza e desfrutar de momentos de tranquilidade.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Parshuram Mahadev Temple", es: "Templo Parshuram Mahadev", pt: "Templo Parshuram Mahadev" },
        address: { en: "Sadri Desuri Rd, Ranakpur Region, Rajasthan 306702, India", es: "Ranakpur, Rajasthan 306702, India", pt: "Ranakpur, Rajasthan 306702, Índia" },
        description: {
          en: cleanText("Parshuram Mahadev Temple is a cave temple dedicated to Lord Shiva, located in the Aravalli region near Ranakpur. The temple is surrounded by scenic hills and is known for its natural cave setting, traditional religious significance and beautiful carvings."),
          es: cleanText("El Templo Parshuram Mahadev es un templo rupestre dedicado al Señor Shiva, situado en la región de Aravalli cerca de Ranakpur. Está rodeado de colinas y es conocido por su entorno natural, importancia religiosa y tallas tradicionales."),
          pt: cleanText("O Templo Parshuram Mahadev é um templo em uma caverna dedicado ao Senhor Shiva, localizado na região de Aravalli perto de Ranakpur. Cercado por colinas, destaca-se por seu ambiente natural, importância religiosa e esculturas tradicionais.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Ranakpur Tourism – 15th-Century Marble Jain Temple", metaDescription: "Explore Ranakpur: Ranakpur Jain Temple, Surya Narayan Temple, Ranakpur Dam and Parshuram Mahadev Temple.", keywords: ["Ranakpur tourism", "Ranakpur Jain Temple", "Surya Narayan Temple", "Aravalli Hills", "Jain architecture"], tags: ["Ranakpur", "Rajasthan", "Jain Temple", "Marble Architecture", "Aravalli"] },
      es: { metaTitle: "Turismo en Ranakpur – Templo Jainista de Mármol", metaDescription: "Descubre Ranakpur: Templo Jainista de Ranakpur, Templo Surya Narayan, Presa de Ranakpur y Parshuram Mahadev.", keywords: ["turismo en Ranakpur", "Templo Jainista Ranakpur", "lugares para visitar en Ranakpur"], tags: ["Ranakpur", "Rajasthan", "Templo Jainista", "Mármol"] },
      pt: { metaTitle: "Turismo em Ranakpur – Templo Jainista de Mármore", metaDescription: "Conheça Ranakpur: Templo Jainista de Ranakpur, Templo Surya Narayan, Ranakpur Dam e Parshuram Mahadev.", keywords: ["turismo em Ranakpur", "Templo Jainista Ranakpur", "lugares para visitar em Ranakpur"], tags: ["Ranakpur", "Rajasthan", "Templo Jainista", "Mármore"] }
    }
  },

  // 11. ABHANERI (3 PLACES)
  {
    id: "abhaneri",
    name: "Abhaneri",
    nombre: "Abhaneri",
    nome: "Abhaneri",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/abhaneri",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Abhaneri</strong> is an ancient village in Dausa district famous worldwide for Chand Baori, one of India's largest and deepest stepwells.</p>",
      es: "<p><strong>Abhaneri</strong> es un antiguo pueblo en Dausa famoso mundialmente por Chand Baori, uno de los pozos escalonados más grandes y profundos de la India.</p>",
      pt: "<p><strong>Abhaneri</strong> é um antigo vilarejo em Dausa famoso mundialmente por Chand Baori, um dos maiores e mais profundos poços escalonados da Índia.</p>"
    },
    content: {
      en: "<p><strong>Abhaneri</strong> is an ancient village in Dausa district famous worldwide for Chand Baori, one of India's largest and deepest stepwells.</p>",
      es: "<p><strong>Abhaneri</strong> es un antiguo pueblo en Dausa famoso mundialmente por Chand Baori, uno de los pozos escalonados más grandes y profundos de la India.</p>",
      pt: "<p><strong>Abhaneri</strong> é um antigo vilarejo em Dausa famoso mundialmente por Chand Baori, um dos maiores e mais profundos poços escalonados da Índia.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Abhaneri – Ancient Stepwell Heritage</h2><p>Located on the Jaipur-Agra highway, Abhaneri is celebrated for the 8th-century Chand Baori, featuring 3,500 narrow steps across 13 storeys, alongside the ancient Harshat Mata Temple.</p>",
      es: "<h2>Descubre Abhaneri – Pozo Escalonado Histórico</h2><p>Ubicado en la carretera Jaipur-Agra, Abhaneri destaca por Chand Baori (siglo VIII) con 3,500 escalones en 13 niveles y el Templo Harshat Mata.</p>",
      pt: "<h2>Conheça Abhaneri – Patrimônio do Poço Escalonado</h2><p>Localizado na rodovia Jaipur-Agra, Abhaneri destaca-se pelo Chand Baori (século VIII) com 3.500 degraus em 13 níveis e o Templo Harshat Mata.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Chand Baori", es: "Chand Baori", pt: "Chand Baori" },
        address: { en: "Abhaneri, Dausa, Rajasthan 303313, India", es: "Abhaneri, Rajasthan 303313, India", pt: "Abhaneri, Rajasthan 303313, Índia" },
        description: {
          en: cleanText("Chand Baori is one of India's most spectacular stepwells and the most famous attraction of Abhaneri. The enormous geometric structure consists of thousands of precisely arranged steps descending towards the water. Its symmetrical design and impressive scale make it an extraordinary example of traditional Indian water architecture."),
          es: cleanText("Chand Baori es uno de los pozos escalonados más impresionantes de la India y la principal atracción de Abhaneri. Su enorme estructura geométrica está formada por miles de escalones dispuestos de manera precisa alrededor del depósito de agua."),
          pt: cleanText("Chand Baori é um dos poços escalonados mais impressionantes da Índia e a principal atração de Abhaneri. Sua enorme estrutura geométrica possui milhares de degraus organizados de maneira precisa ao redor do reservatório de água.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Harshat Mata Temple", es: "Templo Harshat Mata", pt: "Templo Harshat Mata" },
        address: { en: "Beside Chand Baori, Abhaneri, Dausa, Rajasthan 303313, India", es: "Abhaneri, Rajasthan 303313, India", pt: "Abhaneri, Rajasthan 303313, Índia" },
        description: {
          en: cleanText("Harshat Mata Temple is a historic temple located close to Chand Baori. Dedicated to Goddess Harshat Mata, the temple is known for its carved architectural fragments and traditional religious significance. Its location beside the famous stepwell makes it an important part of Abhaneri's heritage landscape."),
          es: cleanText("El Templo Harshat Mata es un templo histórico situado cerca de Chand Baori. Dedicado a la Diosa Harshat Mata, es conocido por sus elementos arquitectónicos tallados y su importancia religiosa tradicional."),
          pt: cleanText("O Templo Harshat Mata é um templo histórico localizado perto de Chand Baori. Dedicado à Deusa Harshat Mata, é conhecido por seus elementos arquitetônicos esculpidos e sua importância religiosa tradicional.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Abhaneri Village Heritage", es: "Patrimonio del Pueblo de Abhaneri", pt: "Patrimônio da Vila de Abhaneri" },
        address: { en: "Abhaneri Village, Dausa, Rajasthan 303313, India", es: "Abhaneri, Rajasthan 303313, India", pt: "Abhaneri, Rajasthan 303313, Índia" },
        description: {
          en: cleanText("The village surroundings of Abhaneri provide an opportunity to experience the traditional rural landscape of Rajasthan. Exploring the area around Chand Baori and Harshat Mata Temple allows visitors to discover local architecture, village life and the historic character of the region."),
          es: cleanText("Los alrededores del pueblo de Abhaneri permiten conocer el paisaje rural tradicional de Rajasthan. Explorar la zona alrededor de Chand Baori y el Templo Harshat Mata ofrece una visión de la arquitectura local y la vida del pueblo."),
          pt: cleanText("Os arredores da vila de Abhaneri permitem conhecer a paisagem rural tradicional do Rajasthan. Explorar a região ao redor de Chand Baori e do Templo Harshat Mata oferece uma visão da arquitetura local e da vida da comunidade.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Abhaneri Tourism – Chand Baori Ancient Stepwell", metaDescription: "Explore Abhaneri: Chand Baori Stepwell, Harshat Mata Temple and Abhaneri Village Heritage.", keywords: ["Abhaneri tourism", "Chand Baori", "Stepwell India", "Harshat Mata Temple", "Dausa heritage"], tags: ["Abhaneri", "Rajasthan", "Chand Baori", "Stepwell", "Heritage"] },
      es: { metaTitle: "Turismo en Abhaneri – Pozo Escalonado Chand Baori", metaDescription: "Descubre Abhaneri: Pozo Escalonado Chand Baori, Templo Harshat Mata y Patrimonio Rural.", keywords: ["turismo en Abhaneri", "Chand Baori", "pozo escalonado", "lugares para visitar en Abhaneri"], tags: ["Abhaneri", "Rajasthan", "Pozo Escalonado", "Patrimonio"] },
      pt: { metaTitle: "Turismo em Abhaneri – Poço Escalonado Chand Baori", metaDescription: "Conheça Abhaneri: Poço Escalonado Chand Baori, Templo Harshat Mata e Patrimônio Rural.", keywords: ["turismo em Abhaneri", "Chand Baori", "poço escalonado", "lugares para visitar em Abhaneri"], tags: ["Abhaneri", "Rajasthan", "Poço Escalonado", "Patrimônio"] }
    }
  },

  // 12. NAWALGARH (5 PLACES)
  {
    id: "nawalgarh",
    name: "Nawalgarh",
    nombre: "Nawalgarh",
    nome: "Nawalgarh",
    state: "Rajasthan",
    stateId: "rajasthan",
    url: "/destinations/india/rajasthan/nawalgarh",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Nawalgarh</strong>, known as the Land of Havelis in Shekhawati, features some of the finest fresco-painted architecture and heritage museums in Rajasthan.</p>",
      es: "<p><strong>Nawalgarh</strong>, la Tierra de las Havelis en Shekhawati, cuenta con algunos de los mejores frescos y museos patrimoniales de Rajasthan.</p>",
      pt: "<p><strong>Nawalgarh</strong>, a Terra das Havelis em Shekhawati, conta com alguns dos melhores afrescos e museus históricos do Rajasthan.</p>"
    },
    content: {
      en: "<p><strong>Nawalgarh</strong>, known as the Land of Havelis in Shekhawati, features some of the finest fresco-painted architecture and heritage museums in Rajasthan.</p>",
      es: "<p><strong>Nawalgarh</strong>, la Tierra de las Havelis en Shekhawati, cuenta con algunos de los mejores frescos y museos patrimoniales de Rajasthan.</p>",
      pt: "<p><strong>Nawalgarh</strong>, a Terra das Havelis em Shekhawati, conta com alguns dos melhores afrescos e museus históricos do Rajasthan.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Nawalgarh – Golden City of Shekhawati</h2><p>Founded by Thakur Nawal Singh in 1737, Nawalgarh is famous for Poddar Haveli Museum, Morarka Haveli, Aath Haveli complex, and magnificent heritage palaces.</p>",
      es: "<h2>Descubre Nawalgarh – Ciudad Dorada de Shekhawati</h2><p>Fundada por Thakur Nawal Singh en 1737, Nawalgarh es famosa por el Museo Poddar Haveli, Morarka Haveli y Aath Haveli.</p>",
      pt: "<h2>Conheça Nawalgarh – Cidade Dourada de Shekhawati</h2><p>Fundada pelo Thakur Nawal Singh em 1737, Nawalgarh é famosa pelo Museu Poddar Haveli, Morarka Haveli e Aath Haveli.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Nawalgarh Fort", es: "Fuerte de Nawalgarh", pt: "Forte de Nawalgarh" },
        address: { en: "Nawalgarh, Jhunjhunu District, Rajasthan 333042, India", es: "Nawalgarh, Rajasthan 333042, India", pt: "Nawalgarh, Rajasthan 333042, Índia" },
        description: {
          en: cleanText("Nawalgarh Fort is a historic fort associated with the founding and development of Nawalgarh. Its architecture reflects the Rajput heritage of Shekhawati and provides an introduction to the town's royal and merchant history."),
          es: cleanText("El Fuerte de Nawalgarh es una fortaleza histórica relacionada con el desarrollo de la ciudad. Su arquitectura refleja el patrimonio rajput de Shekhawati y permite conocer la historia real y comercial de la región."),
          pt: cleanText("O Forte de Nawalgarh é uma fortaleza histórica ligada ao desenvolvimento da cidade. Sua arquitetura reflete o patrimônio Rajput de Shekhawati e oferece uma visão da história real e mercantil da região.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Morarka Haveli Museum", es: "Museo Morarka Haveli", pt: "Morarka Haveli Museum" },
        address: { en: "Nawalgarh, Jhunjhunu, Rajasthan 333042, India", es: "Nawalgarh, Rajasthan 333042, India", pt: "Nawalgarh, Rajasthan 333042, Índia" },
        description: {
          en: cleanText("Morarka Haveli Museum is one of Nawalgarh's notable heritage attractions. The haveli features beautifully painted walls, frescoes and traditional architectural details that showcase the artistic traditions of Shekhawati. It provides visitors with a closer look at the region's merchant-era culture."),
          es: cleanText("El Museo Morarka Haveli es una de las principales atracciones patrimoniales de Nawalgarh. La haveli presenta paredes pintadas, frescos y elementos arquitectónicos tradicionales que muestran las tradiciones artísticas de Shekhawati."),
          pt: cleanText("O Morarka Haveli Museum é uma das principais atrações históricas de Nawalgarh. A haveli possui paredes pintadas, afrescos e elementos arquitetônicos tradicionais que mostram as tradições artísticas de Shekhawati.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Dr. Ramnath A. Poddar Haveli Museum", es: "Museo Dr. Ramnath A. Poddar Haveli", pt: "Dr. Ramnath A. Poddar Haveli Museum" },
        address: { en: "Nawalgarh, Jhunjhunu, Rajasthan 333042, India", es: "Nawalgarh, Rajasthan 333042, India", pt: "Nawalgarh, Rajasthan 333042, Índia" },
        description: {
          en: cleanText("Dr. Ramnath A. Poddar Haveli Museum is a beautifully restored haveli showcasing the artistic heritage of Shekhawati. Its painted interiors, frescoes and traditional rooms provide insight into the lifestyle and artistic culture of the region's wealthy merchant families."),
          es: cleanText("El Museo Dr. Ramnath A. Poddar Haveli es una hermosa haveli restaurada que muestra el patrimonio artístico de Shekhawati. Sus interiores pintados, frescos y habitaciones tradicionales ofrecen una visión del estilo de vida de las antiguas familias comerciantes."),
          pt: cleanText("O Dr. Ramnath A. Poddar Haveli Museum é uma bela haveli restaurada que apresenta o patrimônio artístico de Shekhawati. Seus interiores pintados, afrescos e salas tradicionais mostram o estilo de vida das antigas famílias comerciantes.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Aath Haveli", es: "Aath Haveli", pt: "Aath Haveli" },
        address: { en: "Nawalgarh, Rajasthan 333042, India", es: "Nawalgarh, Rajasthan 333042, India", pt: "Nawalgarh, Rajasthan 333042, Índia" },
        description: {
          en: cleanText("Aath Haveli is a group of traditional havelis known for their colourful frescoes and detailed architecture. The buildings demonstrate the artistic character of Nawalgarh and the wider Shekhawati region, where merchant families decorated their mansions with elaborate paintings."),
          es: cleanText("Aath Haveli es un conjunto de havelis tradicionales conocidas por sus coloridos frescos y arquitectura detallada. Los edificios muestran el carácter artístico de Nawalgarh y de la región de Shekhawati."),
          pt: cleanText("Aath Haveli é um conjunto de havelis tradicionais conhecidas por seus afrescos coloridos e arquitetura detalhada. Os edifícios mostram o caráter artístico de Nawalgarh e da região de Shekhawati.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Roop Niwas Palace", es: "Roop Niwas Palace", pt: "Roop Niwas Palace" },
        address: { en: "Roop Niwas Enclave, Nawalgarh, Rajasthan 333042, India", es: "Nawalgarh, Rajasthan 333042, India", pt: "Nawalgarh, Rajasthan 333042, Índia" },
        description: {
          en: cleanText("Roop Niwas Palace is a heritage palace surrounded by landscaped gardens and reflects the royal character of Nawalgarh. Its architecture and peaceful setting provide visitors with another perspective on the region's aristocratic heritage."),
          es: cleanText("Roop Niwas Palace es un palacio patrimonial rodeado de jardines y refleja el carácter aristocrático de Nawalgarh. Su arquitectura y entorno tranquilo ofrecen otra perspectiva del patrimonio histórico de la región."),
          pt: cleanText("Roop Niwas Palace é um palácio histórico cercado por jardins e representa o caráter aristocrático de Nawalgarh. Sua arquitetura e ambiente tranquilo oferecem outra perspectiva do patrimônio histórico da região.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Nawalgarh Tourism – Land of Painted Havelis", metaDescription: "Explore Nawalgarh: Nawalgarh Fort, Morarka Haveli Museum, Poddar Haveli Museum, Aath Haveli and Roop Niwas Palace.", keywords: ["Nawalgarh tourism", "Nawalgarh Fort", "Poddar Haveli", "Morarka Haveli", "Shekhawati frescoes"], tags: ["Nawalgarh", "Rajasthan", "Shekhawati", "Havelis", "Frescoes"] },
      es: { metaTitle: "Turismo en Nawalgarh – Tierra de las Havelis Pintadas", metaDescription: "Descubre Nawalgarh: Fuerte de Nawalgarh, Museo Morarka Haveli, Museo Poddar Haveli y Aath Haveli.", keywords: ["turismo en Nawalgarh", "Fuerte de Nawalgarh", "Museo Poddar Haveli", "havelis de Nawalgarh"], tags: ["Nawalgarh", "Rajasthan", "Shekhawati", "Havelis"] },
      pt: { metaTitle: "Turismo em Nawalgarh – Terra das Havelis Pintadas", metaDescription: "Conheça Nawalgarh: Forte de Nawalgarh, Morarka Haveli Museum, Poddar Haveli Museum e Aath Haveli.", keywords: ["turismo em Nawalgarh", "Forte de Nawalgarh", "Poddar Haveli Museum", "havelis de Nawalgarh"], tags: ["Nawalgarh", "Rajasthan", "Shekhawati", "Havelis"] }
    }
  }
];

// Clean legacy malformed IDs if present ('m' -> 'mandawa', 'n' -> 'nawalgarh')
const updatedCities = cities.filter(c => c.id !== 'm' && c.id !== 'n');

rajasthanData.forEach(newCity => {
  const idx = updatedCities.findIndex(c => c.id === newCity.id);
  if (idx >= 0) {
    updatedCities[idx] = { ...updatedCities[idx], ...newCity };
  } else {
    updatedCities.push(newCity);
  }
});

fs.writeFileSync(citiesFilePath, JSON.stringify(updatedCities, null, 2), 'utf8');

console.log(`✅ All 12 Rajasthan cities successfully updated with 73 total tourist places in cities.json! Total cities in file: ${updatedCities.length}`);
