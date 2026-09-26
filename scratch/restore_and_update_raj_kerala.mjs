import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const statesFilePath = path.resolve('src/data/fallback/states.json');
const citiesFilePath = path.resolve('src/data/fallback/cities.json');

// 1. Get HEAD states and cities from Git
const headStatesJson = execSync('git show HEAD:src/data/fallback/states.json', { encoding: 'utf8' });
const headStates = JSON.parse(headStatesJson);

const headCitiesJson = execSync('git show HEAD:src/data/fallback/cities.json', { encoding: 'utf8' });
const headCities = JSON.parse(headCitiesJson);

// 2. Read current states and cities
const currentStates = JSON.parse(fs.readFileSync(statesFilePath, 'utf8'));
const currentCities = JSON.parse(fs.readFileSync(citiesFilePath, 'utf8'));

// Helper to clean HTML text
function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// RESTORE RESTORE RESTORE:
// First, restore Rajasthan and Kerala states in states.json to HEAD version
const finalStates = [...currentStates];
['rajasthan', 'kerala'].forEach(sid => {
  const headState = headStates.find(s => s.id === sid);
  if (headState) {
    const idx = finalStates.findIndex(s => s.id === sid);
    if (idx >= 0) {
      finalStates[idx] = headState;
    } else {
      finalStates.push(headState);
    }
  }
});
fs.writeFileSync(statesFilePath, JSON.stringify(finalStates, null, 2), 'utf8');

// Define new Tourist Places mapping for Rajasthan and Kerala cities
const newTouristPlacesMap = {
  // JAIPUR (12)
  jaipur: [
    {
      name: { en: "Amber Fort", es: "Fuerte de Amber", pt: "Forte de Amber" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Amber Fort is one of Jaipur's most magnificent historical landmarks, situated on a hill overlooking Maota Lake. Built primarily with red sandstone and marble, the fort showcases a beautiful combination of Rajput and Mughal architectural styles. Its grand courtyards, Sheesh Mahal, intricate carvings and royal chambers offer visitors a glimpse into the luxurious lifestyle of Jaipur's former rulers."),
        es: cleanText("El Fuerte de Amber es uno de los monumentos históricos más impresionantes de Jaipur y está situado sobre una colina con vistas al lago Maota. Construido principalmente con arenisca roja y mármol, combina elementos arquitectónicos rajput y mogoles. Sus grandes patios, el Sheesh Mahal, las delicadas tallas y las cámaras reales permiten conocer el estilo de vida de los antiguos gobernantes de Jaipur."),
        pt: cleanText("O Forte de Amber é um dos monumentos históricos mais impressionantes de Jaipur, localizado sobre uma colina com vista para o lago Maota. Construído principalmente em arenito vermelho e mármore, apresenta uma bela combinação das arquiteturas Rajput e Mughal. Seus grandes pátios, Sheesh Mahal, esculturas detalhadas e aposentos reais mostram o estilo de vida dos antigos governantes de Jaipur.")
      }
    },
    {
      name: { en: "City Palace", es: "Palacio de la Ciudad", pt: "Palácio da Cidade" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("City Palace is a grand royal complex in the heart of Jaipur's historic Pink City. Built by Maharaja Sawai Jai Singh II and expanded by later rulers, the palace features courtyards, gateways, gardens, museums and beautifully decorated royal buildings. The complex represents Jaipur's royal heritage and contains impressive collections of costumes, manuscripts, weapons and artworks."),
        es: cleanText("El Palacio de la Ciudad es un magnífico complejo real situado en el corazón de la histórica Ciudad Rosa de Jaipur. Construido por Maharaja Sawai Jai Singh II y ampliado por gobernantes posteriores, cuenta con patios, puertas monumentales, jardines, museos y edificios reales decorados. El complejo representa el patrimonio real de Jaipur y conserva colecciones de vestimenta, manuscritos, armas y obras de arte."),
        pt: cleanText("O City Palace é um magnífico complexo real localizado no coração da histórica Cidade Rosa de Jaipur. Construído pelo Maharaja Sawai Jai Singh II e ampliado por governantes posteriores, o complexo possui pátios, portões monumentais, jardins, museus e edifícios reais ricamente decorados. O local representa o patrimônio real de Jaipur e abriga coleções de roupas, manuscritos, armas e obras de arte.")
      }
    },
    {
      name: { en: "Hawa Mahal", es: "Hawa Mahal", pt: "Hawa Mahal" },
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&q=80",
      description: {
        en: cleanText("Hawa Mahal, known as the Palace of Winds, is one of Jaipur's most recognizable landmarks. Built in 1799, the five-storey pink sandstone structure is famous for its hundreds of small jharokha windows. These windows allowed royal women to observe street life while maintaining privacy and also helped circulate cool air through the building."),
        es: cleanText("Hawa Mahal, conocido como el Palacio de los Vientos, es uno de los monumentos más reconocibles de Jaipur. Construido en 1799, este edificio de cinco pisos de arenisca rosa destaca por sus numerosas pequeñas ventanas jharokha. Estas ventanas permitían a las mujeres de la familia real observar la vida de las calles manteniendo su privacidad y favorecían también la circulación del aire."),
        pt: cleanText("O Hawa Mahal, conhecido como Palácio dos Ventos, é um dos monumentos mais reconhecidos de Jaipur. Construído em 1799, o edifício de cinco andares em arenito rosa é famoso por suas numerosas pequenas janelas jharokha. Elas permitiam que as mulheres da família real observassem a vida nas ruas mantendo sua privacidade e também ajudavam na circulação do ar.")
      }
    },
    {
      name: { en: "Jantar Mantar", es: "Jantar Mantar", pt: "Jantar Mantar" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Jantar Mantar is a remarkable astronomical observatory built by Maharaja Sawai Jai Singh II. It contains a collection of large geometric instruments designed to measure time, observe celestial bodies and calculate astronomical positions. Recognized as a UNESCO World Heritage Site, it represents the scientific and architectural achievements of 18th-century India."),
        es: cleanText("Jantar Mantar es un extraordinario observatorio astronómico construido por Maharaja Sawai Jai Singh II. Cuenta con grandes instrumentos geométricos diseñados para medir el tiempo, observar cuerpos celestes y realizar cálculos astronómicos. Declarado Patrimonio Mundial de la UNESCO, representa los importantes avances científicos y arquitectónicos de la India del siglo XVIII."),
        pt: cleanText("Jantar Mantar é um extraordinário observatório astronômico construído pelo Maharaja Sawai Jai Singh II. O complexo possui grandes instrumentos geométricos utilizados para medir o tempo, observar corpos celestes e realizar cálculos astronômicos. Reconhecido como Patrimônio Mundial da UNESCO, representa os avanços científicos e arquitetônicos da Índia do século XVIII.")
      }
    },
    {
      name: { en: "Nahargarh Fort", es: "Fuerte de Nahargarh", pt: "Forte de Nahargarh" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Nahargarh Fort stands on the Aravalli Hills and offers panoramic views over Jaipur. Originally built as part of Jaipur's defensive system, the fort is known for its historic architecture, royal rooms and scenic surroundings. Its elevated location makes it particularly popular for enjoying city views and sunsets."),
        es: cleanText("El Fuerte de Nahargarh se encuentra en las colinas Aravalli y ofrece vistas panorámicas de Jaipur. Originalmente construido como parte del sistema defensivo de la ciudad, es conocido por su arquitectura histórica, habitaciones reales y entorno montañoso. Su ubicación elevada lo convierte en un lugar popular para disfrutar de las vistas y del atardecer."),
        pt: cleanText("O Forte de Nahargarh está localizado nas colinas Aravalli e oferece vistas panorâmicas de Jaipur. Originalmente construído como parte do sistema defensivo da cidade, o forte é conhecido por sua arquitetura histórica, aposentos reais e paisagens montanhosas. Sua localização elevada faz dele um lugar muito procurado para apreciar a cidade e o pôr do sol.")
      }
    },
    {
      name: { en: "Jaigarh Fort", es: "Fuerte de Jaigarh", pt: "Forte de Jaigarh" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Jaigarh Fort is a massive hilltop fort located near Amber Fort and is famous for its impressive defensive architecture. Built primarily to protect the royal palace complex, the fort features massive walls, watchtowers, courtyards and historic military structures. It is also associated with the Jaivana cannon, one of the fort's most notable attractions."),
        es: cleanText("El Fuerte de Jaigarh es una enorme fortaleza situada en una colina cerca del Fuerte de Amber y es famosa por su impresionante arquitectura defensiva. Construida principalmente para proteger el complejo real, cuenta con enormes murallas, torres de vigilancia, patios y estructuras militares históricas. También es conocida por el cañón Jaivana, una de sus principales atracciones."),
        pt: cleanText("O Forte de Jaigarh é uma enorme fortaleza localizada em uma colina próxima ao Forte de Amber e conhecida por sua impressionante arquitetura defensiva. Construído principalmente para proteger o complexo real, possui enormes muralhas, torres de observação, pátios e estruturas militares históricas. O forte também é famoso pelo canhão Jaivana, uma de suas principais atrações.")
      }
    },
    {
      name: { en: "Jal Mahal", es: "Jal Mahal", pt: "Jal Mahal" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Jal Mahal is a beautiful palace situated in the middle of Man Sagar Lake. The palace appears to float on the water and is surrounded by the Aravalli hills. Its distinctive Rajput-style architecture and picturesque setting make it one of the most photographed landmarks of Jaipur."),
        es: cleanText("Jal Mahal es un hermoso palacio situado en medio del lago Man Sagar. El edificio parece flotar sobre el agua y está rodeado por las colinas Aravalli. Su característica arquitectura de estilo rajput y su ubicación pintoresca lo convierten en uno de los monumentos más fotografiados de Jaipur."),
        pt: cleanText("Jal Mahal é um belo palácio situado no meio do lago Man Sagar. O palácio parece flutuar sobre a água e é cercado pelas colinas Aravalli. Sua arquitetura característica em estilo Rajput e sua localização pitoresca fazem dele um dos monumentos mais fotografados de Jaipur.")
      }
    },
    {
      name: { en: "Albert Hall Museum", es: "Museo Albert Hall", pt: "Museu Albert Hall" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Albert Hall Museum is one of Jaipur's most important museums and is located in the historic Ram Niwas Garden. The Indo-Saracenic building houses an extensive collection of paintings, sculptures, textiles, weapons, decorative arts and historical objects. Its beautifully illuminated exterior is especially attractive in the evening."),
        es: cleanText("El Albert Hall Museum es uno de los museos más importantes de Jaipur y se encuentra dentro del histórico Ram Niwas Garden. El edificio de estilo indo-sarraceno alberga una amplia colección de pinturas, esculturas, textiles, armas, artes decorativas y objetos históricos. Su exterior bellamente iluminado resulta especialmente atractivo por la noche."),
        pt: cleanText("O Albert Hall Museum é um dos museus mais importantes de Jaipur e está localizado no histórico Ram Niwas Garden. O edifício em estilo indo-sarraceno abriga uma grande coleção de pinturas, esculturas, tecidos, armas, artes decorativas e objetos históricos. Sua fachada iluminada é especialmente bonita durante a noite.")
      }
    },
    {
      name: { en: "Galta Ji Temple", es: "Templo Galta Ji", pt: "Templo Galta Ji" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("Galta Ji is a historic Hindu pilgrimage site situated among the Aravalli Hills near Jaipur. The complex includes several temples, natural water tanks and scenic rocky surroundings. The site is traditionally associated with Saint Galav and is popularly known as the Monkey Temple because of the large number of monkeys found around the temple complex."),
        es: cleanText("Galta Ji es un importante lugar de peregrinación hindú situado entre las colinas Aravalli cerca de Jaipur. El complejo incluye varios templos, piscinas naturales y un entorno rocoso pintoresco. El lugar está tradicionalmente relacionado con el santo Galav y es conocido popularmente como el Templo de los Monos debido a la gran cantidad de monos presentes en la zona."),
        pt: cleanText("Galta Ji é um importante local de peregrinação hindu localizado entre as colinas Aravalli, perto de Jaipur. O complexo possui vários templos, piscinas naturais e uma paisagem rochosa. O local está tradicionalmente associado ao santo Galav e é conhecido popularmente como Templo dos Macacos devido ao grande número de macacos encontrados na região.")
      }
    },
    {
      name: { en: "Birla Mandir", es: "Birla Mandir", pt: "Birla Mandir" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Birla Mandir, also known as Lakshmi Narayan Temple, is a striking white marble temple located at the foot of Moti Dungari Hill. Dedicated primarily to Lord Vishnu and Goddess Lakshmi, the temple features elegant marble architecture and beautifully carved decorative elements. Its peaceful surroundings make it a popular spiritual and architectural attraction."),
        es: cleanText("Birla Mandir, también conocido como Templo Lakshmi Narayan, es un impresionante templo de mármol blanco situado al pie de la colina Moti Dungari. Dedicado principalmente al Señor Vishnu y a la Diosa Lakshmi, destaca por su elegante arquitectura de mármol y sus detalladas decoraciones. Su ambiente tranquilo lo convierte en un lugar popular para el turismo espiritual y arquitectónico."),
        pt: cleanText("Birla Mandir, também conhecido como Templo Lakshmi Narayan, é um impressionante templo de mármore branco localizado ao pé da colina Moti Dungari. Dedicado principalmente ao Senhor Vishnu e à Deusa Lakshmi, o templo apresenta uma elegante arquitetura em mármore e detalhes decorativos esculpidos. Seu ambiente tranquilo faz dele uma atração espiritual e arquitetônica muito visitada.")
      }
    },
    {
      name: { en: "Gaitore Ki Chhatriyan", es: "Gaitore Ki Chhatriyan", pt: "Gaitore Ki Chhatriyan" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Gaitore Ki Chhatriyan is a beautiful complex of royal cenotaphs located in a peaceful valley beneath the Nahargarh Hills. The marble and sandstone structures feature detailed carvings, domes and traditional Rajput architectural elements. The site served as a royal cremation ground and is an excellent place to experience Jaipur's architectural heritage away from the busiest tourist areas."),
        es: cleanText("Gaitore Ki Chhatriyan es un hermoso complejo de cenotafios reales situado en un tranquilo valle bajo las colinas de Nahargarh. Las estructuras de mármol y arenisca presentan elaboradas tallas, cúpulas y elementos tradicionales de la arquitectura rajput. El lugar fue utilizado como espacio de cremación real y permite conocer una parte más tranquila del patrimonio arquitectónico de Jaipur."),
        pt: cleanText("Gaitore Ki Chhatriyan é um belo complexo de cenotáfios reais localizado em um vale tranquilo abaixo das colinas Nahargarh. As estruturas de mármore e arenito apresentam esculturas detalhadas, cúpulas e elementos tradicionais da arquitetura Rajput. O local foi utilizado como área de cremação real e oferece uma experiência mais tranquila do patrimônio arquitetônico de Jaipur.")
      }
    },
    {
      name: { en: "Patrika Gate", es: "Patrika Gate", pt: "Patrika Gate" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Patrika Gate is a colourful architectural landmark at Jawahar Circle in Jaipur. The gateway is decorated with vibrant paintings, arches, murals and traditional Rajasthani motifs representing the culture and heritage of the region. Its elaborate design and colourful interiors have made it one of Jaipur's most popular photography spots."),
        es: cleanText("Patrika Gate es un famoso monumento arquitectónico situado en Jawahar Circle, Jaipur. La puerta está decorada con pinturas coloridas, arcos, murales y motivos tradicionales de Rajasthan que representan la cultura y el patrimonio de la región. Su diseño elaborado y sus interiores llenos de color la han convertido en uno de los lugares favoritos para la fotografía."),
        pt: cleanText("Patrika Gate é um famoso marco arquitetônico localizado em Jawahar Circle, Jaipur. O portão é decorado com pinturas coloridas, arcos, murais e motivos tradicionais do Rajasthan que representam a cultura e o patrimônio da região. Seu design elaborado e seus interiores vibrantes fizeram do local um dos pontos mais populares para fotografia em Jaipur.")
      }
    }
  ],

  // JODHPUR (7)
  jodhpur: [
    {
      name: { en: "Mehrangarh Fort", es: "Fuerte Mehrangarh", pt: "Forte Mehrangarh" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("Mehrangarh Fort is the magnificent landmark of Jodhpur, rising dramatically above the Blue City. Its massive walls, grand gateways, royal palaces and museum collections showcase the history and culture of the Rathore rulers. Moti Mahal, Phool Mahal and Sheesh Mahal are among its notable interiors."),
        es: cleanText("El Fuerte de Mehrangarh es el gran símbolo de Jodhpur y se eleva sobre la Ciudad Azul. Sus enormes murallas, puertas monumentales, palacios reales y colecciones del museo muestran la historia y cultura de los gobernantes Rathore. Moti Mahal, Phool Mahal y Sheesh Mahal destacan entre sus espacios interiores."),
        pt: cleanText("O Forte de Mehrangarh é o grande símbolo de Jodhpur e domina a Cidade Azul a partir de uma colina. Suas enormes muralhas, portões monumentais, palácios reais e coleções do museu mostram a história e cultura dos governantes Rathore. Moti Mahal, Phool Mahal e Sheesh Mahal estão entre seus espaços mais importantes.")
      }
    },
    {
      name: { en: "Umaid Bhawan Palace", es: "Palacio Umaid Bhawan", pt: "Palácio Umaid Bhawan" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Umaid Bhawan Palace is one of Jodhpur's grandest architectural landmarks. Built during the reign of Maharaja Umaid Singh, the palace combines Indian and European architectural influences with sandstone and marble details. Part of the palace functions as a museum showcasing royal history, while the building remains an important symbol of Jodhpur's heritage."),
        es: cleanText("El Palacio Umaid Bhawan es uno de los monumentos arquitectónicos más grandiosos de Jodhpur. Construido durante el reinado de Maharaja Umaid Singh, combina influencias arquitectónicas indias y europeas con detalles de arenisca y mármol. Una parte funciona como museo dedicado a la historia real."),
        pt: cleanText("O Umaid Bhawan Palace é um dos maiores monumentos arquitetônicos de Jodhpur. Construído durante o reinado do Maharaja Umaid Singh, combina influências arquitetônicas indianas e europeias com detalhes em arenito e mármore. Uma parte do palácio funciona como museu dedicado à história real.")
      }
    },
    {
      name: { en: "Jaswant Thada", es: "Jaswant Thada", pt: "Jaswant Thada" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Jaswant Thada is an elegant white marble cenotaph built in memory of Maharaja Jaswant Singh II. Surrounded by gardens and peaceful landscapes, the monument features delicate marble screens and beautiful architectural details. Its location near Mehrangarh Fort provides a memorable combination of heritage and panoramic city views."),
        es: cleanText("Jaswant Thada es un elegante cenotafio de mármol blanco construido en memoria de Maharaja Jaswant Singh II. Rodeado de jardines y paisajes tranquilos, presenta delicadas celosías de mármol y detalles arquitectónicos. Su ubicación cerca de Mehrangarh ofrece vistas panorámicas de la ciudad."),
        pt: cleanText("Jaswant Thada é um elegante cenotáfio de mármore branco construído em memória do Maharaja Jaswant Singh II. Cercado por jardins e paisagens tranquilas, apresenta delicadas telas de mármore e detalhes arquitetônicos. Sua localização próxima ao Mehrangarh oferece belas vistas da cidade.")
      }
    },
    {
      name: { en: "Mandore Gardens", es: "Mandore Gardens", pt: "Mandore Gardens" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("Mandore Gardens is a historic garden complex associated with the former capital of the Marwar region. The gardens contain royal cenotaphs, temples, sculptures and historic structures surrounded by greenery. The impressive architecture and connection with Jodhpur's early history make Mandore an important heritage attraction."),
        es: cleanText("Mandore Gardens es un complejo histórico relacionado con la antigua capital de la región de Marwar. Sus jardines contienen cenotafios reales, templos, esculturas y estructuras históricas rodeadas de vegetación. Su arquitectura y conexión con la historia de Jodhpur lo convierten en un importante lugar patrimonial."),
        pt: cleanText("Mandore Gardens é um complexo histórico associado à antiga capital da região de Marwar. Os jardins possuem cenotáfios reais, templos, esculturas e estruturas históricas cercadas por vegetação. Sua arquitetura e ligação com a história de Jodhpur fazem do local uma importante atração histórica.")
      }
    },
    {
      name: { en: "Clock Tower & Sardar Market", es: "Torre del Reloj y Sardar Market", pt: "Torre do Relógio e Sardar Market" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("The Clock Tower and Sardar Market form one of the liveliest traditional areas of Jodhpur. Located near the old city, the market is known for spices, handicrafts, textiles, jewellery and local products. The historic clock tower adds character to the bustling marketplace and offers visitors an authentic glimpse of everyday life in the Blue City."),
        es: cleanText("La Torre del Reloj y Sardar Market forman una de las zonas tradicionales más animadas de Jodhpur. El mercado es conocido por sus especias, artesanías, textiles, joyería y productos locales. La histórica torre del reloj añade carácter al mercado y permite conocer la vida cotidiana de la Ciudad Azul."),
        pt: cleanText("A Torre do Relógio e o Sardar Market formam uma das áreas tradicionais mais movimentadas de Jodhpur. O mercado é conhecido por especiarias, artesanato, tecidos, joias e produtos locais. A histórica torre do relógio dá personalidade ao mercado e permite conhecer o cotidiano da Cidade Azul.")
      }
    },
    {
      name: { en: "Rao Jodha Desert Rock Park", es: "Rao Jodha Desert Rock Park", pt: "Rao Jodha Desert Rock Park" },
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900&q=80",
      description: {
        en: cleanText("Rao Jodha Desert Rock Park is a restored rocky landscape located beneath Mehrangarh Fort. Created to preserve native desert vegetation, the park features walking trails through the rugged landscape of the Aravallis. It offers a different perspective of Jodhpur, combining nature, geology and spectacular views of Mehrangarh."),
        es: cleanText("Rao Jodha Desert Rock Park es un paisaje rocoso restaurado situado debajo del Fuerte Mehrangarh. Creado para conservar la vegetación nativa del desierto, cuenta con senderos que atraviesan el paisaje de las Aravalli. Combina naturaleza, geología y vistas del fuerte."),
        pt: cleanText("Rao Jodha Desert Rock Park é uma paisagem rochosa restaurada localizada abaixo do Forte Mehrangarh. Criado para preservar a vegetação nativa do deserto, possui trilhas que atravessam a paisagem das Aravalli. O parque combina natureza, geologia e belas vistas do forte.")
      }
    },
    {
      name: { en: "Kaylana Lake", es: "Lago Kaylana", pt: "Lago Kaylana" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Kaylana Lake is a scenic artificial lake located on the outskirts of Jodhpur. Surrounded by rocky landscapes and desert vegetation, it provides a peaceful escape from the busy city. The lake is particularly attractive around sunset and is a popular spot for photography and enjoying the surrounding landscape."),
        es: cleanText("El lago Kaylana es un pintoresco lago artificial situado en las afueras de Jodhpur. Rodeado de paisajes rocosos y vegetación desértica, ofrece un lugar tranquilo lejos del bullicio de la ciudad. Es especialmente atractivo al atardecer y popular para la fotografía."),
        pt: cleanText("O Lago Kaylana é um lago artificial pitoresco localizado nos arredores de Jodhpur. Cercado por paisagens rochosas e vegetação desértica, oferece um ambiente tranquilo longe do movimento da cidade. É especialmente bonito ao pôr do sol e popular para fotografia.")
      }
    }
  ],

  // JAISALMER (7)
  jaisalmer: [
    {
      name: { en: "Jaisalmer Fort", es: "Fuerte de Jaisalmer", pt: "Forte de Jaisalmer" },
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900&q=80",
      description: {
        en: cleanText("Jaisalmer Fort, also called Sonar Qila or the Golden Fort, is the defining landmark of Jaisalmer. Built from golden-yellow sandstone, the fort rises dramatically from the Thar Desert and contains temples, havelis, shops and residential areas. Unlike many historic forts, it continues to support a living community within its walls."),
        es: cleanText("El Fuerte de Jaisalmer, conocido como Sonar Qila o Fuerte Dorado, es el monumento más emblemático de la ciudad. Construido con arenisca amarilla dorada, se eleva sobre el desierto del Thar y alberga templos, havelis, tiendas y zonas residenciales."),
        pt: cleanText("O Forte de Jaisalmer, conhecido como Sonar Qila ou Forte Dourado, é o principal símbolo da cidade. Construído em arenito amarelo-dourado, ergue-se no deserto de Thar e abriga templos, havelis, lojas e áreas residenciais.")
      }
    },
    {
      name: { en: "Patwon Ki Haveli", es: "Patwon Ki Haveli", pt: "Patwon Ki Haveli" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Patwon Ki Haveli is an impressive collection of historic mansions known for its detailed sandstone carvings, balconies and decorative façades. The complex reflects the wealth and architectural sophistication of Jaisalmer's merchant families and provides an excellent example of traditional Rajasthani haveli architecture."),
        es: cleanText("Patwon Ki Haveli es un impresionante conjunto de antiguas mansiones conocido por sus detalladas tallas en arenisca, balcones y fachadas decorativas. El complejo refleja la riqueza y sofisticación arquitectónica de las familias comerciantes de Jaisalmer."),
        pt: cleanText("Patwon Ki Haveli é um impressionante conjunto de antigas mansões conhecido pelas esculturas detalhadas em arenito, varandas e fachadas decorativas. O complexo demonstra a riqueza e sofisticação arquitetônica das famílias comerciantes de Jaisalmer.")
      }
    },
    {
      name: { en: "Gadisar Lake", es: "Lago Gadisar", pt: "Lago Gadisar" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Gadisar Lake is a historic artificial lake surrounded by temples, shrines, gateways and small architectural structures. Once an important water source for Jaisalmer, the lake is now a peaceful sightseeing destination. Its traditional surroundings and beautiful reflections make it particularly attractive during sunrise and sunset."),
        es: cleanText("El lago Gadisar es un histórico lago artificial rodeado de templos, santuarios, puertas y pequeñas estructuras arquitectónicas. Antiguamente fue una importante fuente de agua para Jaisalmer y actualmente es un tranquilo lugar turístico. Sus alrededores tradicionales son especialmente atractivos al amanecer y al atardecer."),
        pt: cleanText("O Lago Gadisar é um histórico lago artificial cercado por templos, santuários, portões e pequenas estruturas arquitetônicas. Antigamente era uma importante fonte de água para Jaisalmer e hoje é um local tranquilo para passeios. Seus arredores tradicionais são especialmente bonitos ao nascer e ao pôr do sol.")
      }
    },
    {
      name: { en: "Sam Sand Dunes", es: "Sam Sand Dunes", pt: "Sam Sand Dunes" },
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900&q=80",
      description: {
        en: cleanText("Sam Sand Dunes are among the most popular desert attractions near Jaisalmer. The vast golden dunes provide an opportunity to experience the landscape of the Thar Desert through camel rides, jeep safaris, desert camps and traditional folk performances. Sunset over the dunes is one of the most memorable experiences in Jaisalmer."),
        es: cleanText("Las Sam Sand Dunes son una de las principales atracciones del desierto cerca de Jaisalmer. Las enormes dunas doradas permiten disfrutar del paisaje del Thar mediante paseos en camello, safaris en jeep, campamentos y espectáculos folclóricos tradicionales. El atardecer sobre las dunas es una experiencia especialmente memorable."),
        pt: cleanText("As Sam Sand Dunes estão entre as atrações mais populares do deserto perto de Jaisalmer. As enormes dunas douradas permitem conhecer o cenário do Thar através de passeios de camelo, safáris de jipe, acampamentos e apresentações folclóricas. O pôr do sol sobre as dunas é uma experiência inesquecível.")
      }
    },
    {
      name: { en: "Nathmal Ki Haveli", es: "Nathmal Ki Haveli", pt: "Nathmal Ki Haveli" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Nathmal Ki Haveli is a beautifully decorated mansion famous for its elaborate façade and intricate craftsmanship. Built for the prime minister of Jaisalmer, the haveli combines traditional Rajasthani architectural elements with detailed stone carvings and decorative motifs."),
        es: cleanText("Nathmal Ki Haveli es una hermosa mansión conocida por su fachada elaborada y su excepcional artesanía. Construida para el primer ministro de Jaisalmer, combina elementos arquitectónicos tradicionales de Rajasthan con detalladas tallas en piedra y motivos decorativos."),
        pt: cleanText("Nathmal Ki Haveli é uma bela mansão conhecida por sua fachada elaborada e artesanato detalhado. Construída para o primeiro-ministro de Jaisalmer, combina elementos tradicionais da arquitetura do Rajasthan com esculturas em pedra e motivos decorativos.")
      }
    },
    {
      name: { en: "Salim Singh Ki Haveli", es: "Salim Singh Ki Haveli", pt: "Salim Singh Ki Haveli" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Salim Singh Ki Haveli is a distinctive historic mansion known for its unusual upper balconies and richly decorated architecture. The building features beautifully carved sandstone details and an eye-catching roofline that makes it different from other havelis in Jaisalmer."),
        es: cleanText("Salim Singh Ki Haveli es una mansión histórica conocida por sus singulares balcones superiores y su arquitectura ricamente decorada. El edificio presenta detalles tallados en arenisca y una silueta característica que la diferencia de otras havelis de Jaisalmer."),
        pt: cleanText("Salim Singh Ki Haveli é uma mansão histórica conhecida por suas varandas superiores incomuns e arquitetura ricamente decorada. O edifício apresenta detalhes esculpidos em arenito e uma silhueta característica que o diferencia de outras havelis de Jaisalmer.")
      }
    },
    {
      name: { en: "Kuldhara Village", es: "Kuldhara Village", pt: "Kuldhara Village" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Kuldhara is a historic abandoned village located near Jaisalmer. Its ruined houses, streets and traditional architecture provide an atmospheric glimpse into the region's past. The village has become an important heritage attraction for visitors interested in history, local stories and the desert landscape."),
        es: cleanText("Kuldhara es un antiguo pueblo abandonado situado cerca de Jaisalmer. Sus casas en ruinas, calles y arquitectura tradicional ofrecen una visión de la historia de la región. Actualmente es una importante atracción patrimonial para quienes se interesan por la historia y el paisaje desértico."),
        pt: cleanText("Kuldhara é uma antiga vila abandonada localizada perto de Jaisalmer. Suas casas em ruínas, ruas e arquitetura tradicional oferecem uma visão do passado da região. Atualmente é uma atração histórica para visitantes interessados em história, cultura local e paisagens desérticas.")
      }
    }
  ],

  // UDAIPUR (8)
  udaipur: [
    {
      name: { en: "City Palace", es: "Palacio de la Ciudad", pt: "Palácio da Cidade" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("City Palace is Udaipur's most impressive royal complex, overlooking Lake Pichola. Built and expanded by the rulers of Mewar, the palace contains courtyards, balconies, royal chambers, galleries and museums decorated with mosaics, marble and colourful artwork."),
        es: cleanText("El Palacio de la Ciudad es el complejo real más impresionante de Udaipur y domina el lago Pichola. Construido y ampliado por los gobernantes de Mewar, cuenta con patios, balcones, cámaras reales, galerías y museos decorados con mosaicos, mármol y obras de arte."),
        pt: cleanText("O City Palace é o mais impressionante complexo real de Udaipur, com vista para o lago Pichola. Construído e ampliado pelos governantes de Mewar, possui pátios, varandas, aposentos reais, galerias e museus decorados com mosaicos, mármore e obras de arte.")
      }
    },
    {
      name: { en: "Lake Pichola", es: "Lago Pichola", pt: "Lago Pichola" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Lake Pichola is one of Udaipur's most beautiful lakes and forms the scenic heart of the city. Surrounded by palaces, ghats, hills and historic buildings, the lake is particularly famous for boat rides offering views of City Palace and Lake Palace."),
        es: cleanText("El lago Pichola es uno de los lagos más hermosos de Udaipur y forma el corazón paisajístico de la ciudad. Está rodeado de palacios, ghats, colinas y edificios históricos. Los paseos en barco permiten disfrutar de vistas del Palacio de la Ciudad y del Lake Palace."),
        pt: cleanText("O Lago Pichola é um dos lagos mais bonitos de Udaipur e representa o coração paisagístico da cidade. Cercado por palácios, ghats, colinas e edifícios históricos, é especialmente famoso pelos passeios de barco com vistas do City Palace e do Lake Palace.")
      }
    },
    {
      name: { en: "Jag Mandir", es: "Jag Mandir", pt: "Jag Mandir" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Jag Mandir is a beautiful island palace located on Lake Pichola. Built with elegant marble and sandstone architecture, the palace features gardens, courtyards and lakeside views. Its peaceful island setting makes it one of Udaipur's most memorable heritage attractions."),
        es: cleanText("Jag Mandir es un hermoso palacio situado en una isla del lago Pichola. Construido con elegante arquitectura de mármol y arenisca, cuenta con jardines, patios y vistas al lago. Su ubicación tranquila lo convierte en una de las atracciones patrimoniales más especiales de Udaipur."),
        pt: cleanText("Jag Mandir é um belo palácio localizado em uma ilha no Lago Pichola. Construído com elegante arquitetura em mármore e arenito, possui jardins, pátios e vistas para o lago. Sua localização tranquila faz dele uma das atrações históricas mais especiais de Udaipur.")
      }
    },
    {
      name: { en: "Sajjangarh / Monsoon Palace", es: "Sajjangarh / Palacio del Monzón", pt: "Sajjangarh / Palácio das Monções" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Sajjangarh, popularly known as the Monsoon Palace, stands on a hill overlooking Udaipur and the surrounding Aravalli landscape. Originally planned as an astronomical centre and later developed as a monsoon retreat, the palace is particularly famous for panoramic sunset and city views."),
        es: cleanText("Sajjangarh, conocido como el Palacio del Monzón, se encuentra sobre una colina con vistas a Udaipur y a las montañas Aravalli. Originalmente concebido como centro astronómico y posteriormente utilizado como residencia de temporada, es famoso por sus vistas panorámicas y atardeceres."),
        pt: cleanText("Sajjangarh, conhecido como Palácio das Monções, está localizado em uma colina com vista para Udaipur e para as montanhas Aravalli. Originalmente planejado como centro astronômico e posteriormente utilizado como retiro durante as monções, é famoso pelas vistas panorâmicas e pelo pôr do sol.")
      }
    },
    {
      name: { en: "Fateh Sagar Lake", es: "Lago Fateh Sagar", pt: "Lago Fateh Sagar" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Fateh Sagar Lake is a scenic artificial lake surrounded by the Aravalli Hills. Its calm blue waters, surrounding roads and mountain scenery make it one of Udaipur's favourite leisure spots. The lake is especially beautiful during the early morning and evening."),
        es: cleanText("El lago Fateh Sagar es un hermoso lago artificial rodeado por las colinas Aravalli. Sus aguas tranquilas, carreteras panorámicas y paisaje montañoso lo convierten en uno de los lugares favoritos para relajarse en Udaipur."),
        pt: cleanText("O Lago Fateh Sagar é um belo lago artificial cercado pelas colinas Aravalli. Suas águas tranquilas, estradas panorâmicas e paisagens montanhosas fazem dele um dos lugares preferidos para lazer em Udaipur.")
      }
    },
    {
      name: { en: "Jagdish Temple", es: "Templo Jagdish", pt: "Templo Jagdish" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Jagdish Temple is a historic Hindu temple located near Udaipur's City Palace. Dedicated to Lord Vishnu, the temple is known for its impressive stone carvings, sculpted pillars and traditional architecture. Its location in the old city makes it an important part of Udaipur's cultural heritage."),
        es: cleanText("El Templo Jagdish es un histórico templo hindú situado cerca del Palacio de la Ciudad de Udaipur. Dedicado al Señor Vishnu, es conocido por sus impresionantes tallas de piedra, pilares esculpidos y arquitectura tradicional."),
        pt: cleanText("O Templo Jagdish é um histórico templo hindu localizado perto do City Palace de Udaipur. Dedicado ao Senhor Vishnu, destaca-se pelas impressionantes esculturas em pedra, pilares esculpidos e arquitetura tradicional.")
      }
    },
    {
      name: { en: "Saheliyon Ki Bari", es: "Saheliyon Ki Bari", pt: "Saheliyon Ki Bari" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Saheliyon Ki Bari is a historic garden created for the royal women of Mewar. The garden features fountains, marble pavilions, pools, lawns and ornamental greenery. Its peaceful atmosphere and elegant landscaping provide a pleasant contrast to Udaipur's grand palaces."),
        es: cleanText("Saheliyon Ki Bari es un jardín histórico creado para las mujeres de la familia real de Mewar. Cuenta con fuentes, pabellones de mármol, estanques, jardines y vegetación ornamental. Su ambiente tranquilo ofrece un agradable contraste con los grandes palacios de Udaipur."),
        pt: cleanText("Saheliyon Ki Bari é um jardim histórico criado para as mulheres da família real de Mewar. O jardim possui fontes, pavilhões de mármore, piscinas e vegetação ornamental. Sua atmosfera tranquila oferece um belo contraste com os grandes palácios de Udaipur.")
      }
    },
    {
      name: { en: "Eklingji Temple", es: "Templo Eklingji", pt: "Templo Eklingji" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Eklingji Temple is a historic temple complex dedicated to Lord Shiva and is located near Udaipur. The temple is an important religious site associated with the Mewar tradition and is known for its intricate stone architecture and spiritual atmosphere. Its distinctive four-faced image of Shiva is one of the major features of the complex."),
        es: cleanText("El Templo de Eklingji es un histórico complejo dedicado al Señor Shiva situado cerca de Udaipur. Es un importante lugar religioso asociado con la tradición de Mewar y es conocido por su arquitectura de piedra y su ambiente espiritual. La imagen de Shiva con cuatro rostros es uno de sus elementos más destacados."),
        pt: cleanText("O Templo Eklingji é um histórico complexo dedicado ao Senhor Shiva, localizado perto de Udaipur. É um importante local religioso associado à tradição de Mewar e conhecido por sua arquitetura em pedra e atmosfera espiritual. A imagem de Shiva com quatro faces é uma de suas principais características.")
      }
    }
  ],

  // PUSHKAR (6)
  pushkar: [
    {
      name: { en: "Pushkar Lake", es: "Lago Pushkar", pt: "Lago Pushkar" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Pushkar Lake is the spiritual heart of Pushkar and is surrounded by numerous ghats and temples. Considered sacred in Hindu tradition, the lake attracts pilgrims and visitors throughout the year. The surrounding ghats, temples and narrow heritage streets create a distinctive spiritual atmosphere."),
        es: cleanText("El lago Pushkar es el corazón espiritual de la ciudad y está rodeado de numerosos ghats y templos. Considerado sagrado en la tradición hindú, atrae a peregrinos y visitantes durante todo el año. Los ghats, templos y calles históricas crean una atmósfera espiritual única."),
        pt: cleanText("O Lago Pushkar é o coração espiritual da cidade e está cercado por numerosos ghats e templos. Considerado sagrado na tradição hindu, recebe peregrinos e visitantes durante todo o ano. Os ghats, templos e ruas históricas criam uma atmosfera espiritual única.")
      }
    },
    {
      name: { en: "Brahma Temple", es: "Templo de Brahma", pt: "Templo de Brahma" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Brahma Temple is Pushkar's most famous religious landmark and is traditionally associated with Lord Brahma. The temple features a distinctive red spire and a sacred inner shrine. Pushkar's association with Brahma makes the temple an important pilgrimage destination and a major part of the town's cultural identity."),
        es: cleanText("El Templo de Brahma es el monumento religioso más famoso de Pushkar y está dedicado tradicionalmente al Señor Brahma. El templo destaca por su distintiva torre roja y su santuario interior. Su relación con Brahma convierte a Pushkar en un importante destino de peregrinación."),
        pt: cleanText("O Templo de Brahma é o monumento religioso mais famoso de Pushkar e está tradicionalmente associado ao Senhor Brahma. O templo possui uma distinta torre vermelha e um santuário interno sagrado. Sua ligação com Brahma torna Pushkar um importante destino de peregrinação.")
      }
    },
    {
      name: { en: "Savitri Temple", es: "Templo Savitri", pt: "Templo Savitri" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Savitri Temple is located on a hill overlooking Pushkar and offers panoramic views of the lake, town and surrounding desert landscape. The temple is dedicated to Goddess Savitri and can be reached by a hike or ropeway. Sunrise and sunset views from the hill are particularly popular."),
        es: cleanText("El Templo de Savitri está situado en una colina con vistas panorámicas al lago, la ciudad y el paisaje desértico de Pushkar. Está dedicado a la Diosa Savitri y se puede llegar caminando o mediante el teleférico. Las vistas al amanecer y al atardecer son especialmente populares."),
        pt: cleanText("O Templo Savitri está localizado em uma colina com vistas panorâmicas do lago, da cidade e da paisagem desértica de Pushkar. Dedicado à Deusa Savitri, pode ser alcançado por caminhada ou teleférico. As vistas do nascer e do pôr do sol são especialmente populares.")
      }
    },
    {
      name: { en: "Rangji Temple", es: "Templo Rangji", pt: "Templo Rangji" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Rangji Temple is a distinctive historic temple in Pushkar dedicated to Lord Rangji. Its architecture reflects a blend of South Indian, Rajput and Mughal influences, giving it a unique appearance among Pushkar's temples. The temple is an important part of the town's diverse religious and architectural heritage."),
        es: cleanText("El Templo Rangji es un histórico templo de Pushkar dedicado al Señor Rangji. Su arquitectura combina influencias del sur de la India, Rajput y mogoles, creando un aspecto único entre los templos de Pushkar."),
        pt: cleanText("O Templo Rangji é um histórico templo de Pushkar dedicado ao Senhor Rangji. Sua arquitetura combina influências do sul da Índia, Rajput e Mughal, criando uma aparência única entre os templos da cidade.")
      }
    },
    {
      name: { en: "Varaha Temple", es: "Templo Varaha", pt: "Templo Varaha" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Varaha Temple is one of the historic temples of Pushkar and is dedicated to Lord Varaha, the boar incarnation of Lord Vishnu. The temple represents the deep religious history of the town and is known for its traditional architecture and devotional significance."),
        es: cleanText("El Templo Varaha es uno de los templos históricos de Pushkar y está dedicado a Varaha, la encarnación de jabalí del Señor Vishnu. El templo representa la profunda historia religiosa de la ciudad y destaca por su arquitectura tradicional."),
        pt: cleanText("O Templo Varaha é um dos templos históricos de Pushkar e é dedicado a Varaha, a encarnação em forma de javali do Senhor Vishnu. O templo representa a profunda história religiosa da cidade e é conhecido por sua arquitetura tradicional.")
      }
    },
    {
      name: { en: "Naga Pahar", es: "Naga Pahar", pt: "Naga Pahar" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Naga Pahar is a scenic hill range forming a natural boundary between Pushkar and Ajmer. The hills provide beautiful views of the surrounding landscape and are associated with Pushkar's traditional religious geography. The area is particularly appealing to visitors interested in nature, photography and peaceful landscapes."),
        es: cleanText("Naga Pahar es una cadena de colinas que forma una frontera natural entre Pushkar y Ajmer. Las colinas ofrecen hermosas vistas del paisaje circundante y forman parte de la geografía religiosa tradicional de Pushkar."),
        pt: cleanText("Naga Pahar é uma cadeia de colinas que forma uma fronteira natural entre Pushkar e Ajmer. As colinas oferecem belas vistas da paisagem ao redor e fazem parte da geografia religiosa tradicional de Pushkar.")
      }
    }
  ],

  // RANTHAMBORE (5)
  ranthambore: [
    {
      name: { en: "Ranthambore National Park", es: "Parque Nacional de Ranthambore", pt: "Parque Nacional de Ranthambore" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("Ranthambore National Park is one of Rajasthan's most famous wildlife destinations and is particularly known for its Bengal tiger population. The park combines dry deciduous forests, rocky hills, lakes and grasslands, creating a diverse habitat for tigers, leopards, sloth bears, deer, crocodiles and many bird species. Jeep and canter safaris provide visitors with an opportunity to explore the park's natural landscapes and wildlife."),
        es: cleanText("El Parque Nacional de Ranthambore es uno de los destinos de vida silvestre más famosos de Rajasthan y es especialmente conocido por sus tigres de Bengala. El parque combina bosques secos, colinas rocosas, lagos y praderas, creando un hábitat para tigres, leopardos, osos perezosos, ciervos, cocodrilos y numerosas aves. Los safaris permiten explorar sus paisajes y fauna."),
        pt: cleanText("O Parque Nacional de Ranthambore é um dos destinos de vida selvagem mais famosos do Rajasthan e é especialmente conhecido por sua população de tigres-de-bengala. O parque combina florestas secas, colinas rochosas, lagos e pradarias, criando um habitat para tigres, leopardos, ursos-beiçudos, cervos, crocodilos e várias espécies de aves. Os safáris permitem explorar suas paisagens e vida selvagem.")
      }
    },
    {
      name: { en: "Ranthambore Fort", es: "Fuerte de Ranthambore", pt: "Forte de Ranthambore" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Ranthambore Fort is a historic hill fort rising above the national park. Built by the Chauhan rulers, the fort contains massive walls, gateways, temples, tanks and historic structures. The Trinetra Ganesh Temple inside the fort is an important religious attraction, while the elevated location provides impressive views of the surrounding forest landscape."),
        es: cleanText("El Fuerte de Ranthambore es una histórica fortaleza situada sobre una colina dentro del paisaje del parque nacional. Construida por los gobernantes Chauhan, cuenta con enormes murallas, puertas, templos, estanques y estructuras históricas. El Templo Trinetra Ganesh es una importante atracción religiosa dentro del fuerte."),
        pt: cleanText("O Forte de Ranthambore é uma histórica fortaleza localizada sobre uma colina no meio da paisagem do parque nacional. Construído pelos governantes Chauhan, possui grandes muralhas, portões, templos, reservatórios e estruturas históricas. O Templo Trinetra Ganesh é uma importante atração religiosa dentro do forte.")
      }
    },
    {
      name: { en: "Trinetra Ganesh Temple", es: "Templo Trinetra Ganesh", pt: "Templo Trinetra Ganesh" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Trinetra Ganesh Temple is an ancient temple situated within Ranthambore Fort and dedicated to Lord Ganesha. The temple is an important pilgrimage site and is closely associated with the religious traditions of the region. Its location inside the historic fort gives visitors a combination of spirituality, history and scenic surroundings."),
        es: cleanText("El Templo Trinetra Ganesh es un antiguo templo situado dentro del Fuerte de Ranthambore y dedicado al Señor Ganesha. Es un importante lugar de peregrinación y está profundamente relacionado con las tradiciones religiosas de la región. Su ubicación dentro de la fortaleza combina espiritualidad, historia y paisajes."),
        pt: cleanText("O Templo Trinetra Ganesh é um antigo templo localizado dentro do Forte de Ranthambore e dedicado ao Senhor Ganesha. É um importante local de peregrinação e está ligado às tradições religiosas da região. Sua localização dentro da fortaleza combina espiritualidade, história e paisagens.")
      }
    },
    {
      name: { en: "Padam Lake", es: "Lago Padam", pt: "Lago Padam" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Padam Lake is one of the scenic water bodies inside Ranthambore National Park. Surrounded by forests and rocky terrain, the lake attracts a variety of wildlife and birds and is an important part of the park's natural landscape. The historic Jogi Mahal near the lake adds to its picturesque setting."),
        es: cleanText("El lago Padam es uno de los paisajes acuáticos más pintorescos del Parque Nacional de Ranthambore. Rodeado de bosques y terrenos rocosos, atrae a diferentes animales y aves y forma una parte importante del ecosistema del parque. El histórico Jogi Mahal añade atractivo al paisaje."),
        pt: cleanText("O Lago Padam é um dos pontos de água mais pitorescos do Parque Nacional de Ranthambore. Cercado por florestas e terrenos rochosos, atrai diversos animais e aves e representa uma parte importante da paisagem natural do parque. O histórico Jogi Mahal torna o cenário ainda mais especial.")
      }
    },
    {
      name: { en: "Surwal Lake", es: "Lago Surwal", pt: "Lago Surwal" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Surwal Lake is a seasonal lake near Ranthambore known for its peaceful surroundings and birdlife. During the suitable season, the lake attracts migratory and resident birds, making it an interesting destination for birdwatching and nature photography."),
        es: cleanText("El lago Surwal es un lago estacional cerca de Ranthambore conocido por su ambiente tranquilo y sus aves. Durante la temporada adecuada, atrae aves migratorias y residentes, convirtiéndolo en un lugar interesante para la observación de aves y la fotografía de naturaleza."),
        pt: cleanText("O Lago Surwal é um lago sazonal próximo a Ranthambore, conhecido por seu ambiente tranquilo e pela variedade de aves. Durante a temporada adequada, recebe aves migratórias e residentes, sendo um bom local para observação de aves e fotografia da natureza.")
      }
    }
  ],

  // SARISKA (5)
  sariska: [
    {
      name: { en: "Sariska Tiger Reserve", es: "Reserva de Tigres de Sariska", pt: "Reserva de Tigres de Sariska" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("Sariska Tiger Reserve is a major wildlife destination situated in the Aravalli Hills. The reserve features dry deciduous forests, grasslands, rocky terrain and valleys and supports tigers, leopards, deer, wild boar, monkeys and numerous bird species. Jeep safaris are the main way to explore its wildlife and landscapes."),
        es: cleanText("La Reserva de Tigres de Sariska es un importante destino de naturaleza situado en las colinas Aravalli. La reserva cuenta con bosques secos, praderas, terrenos rocosos y valles donde viven tigres, leopardos, ciervos, jabalíes, monos y numerosas aves. Los safaris en jeep son la principal forma de explorarla."),
        pt: cleanText("A Reserva de Tigres de Sariska é um importante destino de natureza localizado nas colinas Aravalli. A reserva possui florestas secas, pradarias, terrenos rochosos e vales que abrigam tigres, leopardos, cervos, javalis, macacos e várias espécies de aves. Os safáris de jipe são a principal forma de explorar a região.")
      }
    },
    {
      name: { en: "Kankwadi Fort", es: "Fuerte Kankwadi", pt: "Forte Kankwadi" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Kankwadi Fort is a historic fort located inside Sariska Tiger Reserve. Surrounded by forest and hills, the fort offers a unique combination of history and wilderness. Its isolated location and historic association with the Mughal period make it one of Sariska's notable heritage attractions."),
        es: cleanText("El Fuerte Kankwadi es una histórica fortaleza situada dentro de la Reserva de Tigres de Sariska. Rodeado de bosques y colinas, combina historia y naturaleza. Su ubicación aislada y su relación con el periodo mogol lo convierten en un importante lugar patrimonial."),
        pt: cleanText("O Forte Kankwadi é uma histórica fortaleza localizada dentro da Reserva de Tigres de Sariska. Cercado por florestas e colinas, combina história e natureza. Sua localização isolada e ligação com o período Mughal fazem dele uma importante atração histórica.")
      }
    },
    {
      name: { en: "Neelkanth Temple", es: "Templo Neelkanth", pt: "Templo Neelkanth" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Neelkanth Temple is an ancient temple complex situated in the Sariska landscape. Known for its beautifully carved stone sculptures and historic architecture, the temple reflects the artistic traditions of medieval Rajasthan. Its forested surroundings add to its peaceful and atmospheric character."),
        es: cleanText("El Templo Neelkanth es un antiguo complejo religioso situado en el paisaje de Sariska. Es conocido por sus esculturas de piedra y arquitectura histórica, que reflejan las tradiciones artísticas de la Rajasthan medieval. Su entorno boscoso le da una atmósfera tranquila."),
        pt: cleanText("O Templo Neelkanth é um antigo complexo religioso localizado na região de Sariska. Conhecido por suas esculturas em pedra e arquitetura histórica, reflete as tradições artísticas do Rajasthan medieval. A paisagem florestal ao redor proporciona uma atmosfera tranquila.")
      }
    },
    {
      name: { en: "Pandupol Hanuman Temple", es: "Templo Hanuman de Pandupol", pt: "Templo Hanuman de Pandupol" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Pandupol Hanuman Temple is a popular religious attraction located within the Sariska landscape. The temple is associated with traditions from the Mahabharata and is situated near a scenic waterfall. Its combination of religious significance and natural surroundings makes it a popular stop for visitors."),
        es: cleanText("El Templo Hanuman de Pandupol es un importante lugar religioso dentro del paisaje de Sariska. Está asociado con las tradiciones del Mahabharata y se encuentra cerca de una pintoresca cascada. La combinación de espiritualidad y naturaleza lo convierte en un lugar popular."),
        pt: cleanText("O Templo Hanuman de Pandupol é uma importante atração religiosa localizada na região de Sariska. Está associado às tradições do Mahabharata e situado próximo a uma cachoeira. A combinação de espiritualidade e natureza faz dele um local muito visitado.")
      }
    },
    {
      name: { en: "Siliserh Lake", es: "Lago Siliserh", pt: "Lago Siliserh" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Siliserh Lake is a picturesque artificial lake surrounded by the Aravalli Hills and forested landscapes. The peaceful setting makes it a pleasant place for boating, photography and enjoying nature. The lake is also associated with the historic Siliserh Lake Palace."),
        es: cleanText("El lago Siliserh es un hermoso lago artificial rodeado por las colinas Aravalli y paisajes boscosos. Su ambiente tranquilo es ideal para paseos en barco, fotografía y disfrutar de la naturaleza. El histórico Siliserh Lake Palace se encuentra junto al lago."),
        pt: cleanText("O Lago Siliserh é um belo lago artificial cercado pelas colinas Aravalli e paisagens florestais. O ambiente tranquilo é ideal para passeios de barco, fotografia e contato com a natureza. O histórico Siliserh Lake Palace está localizado junto ao lago.")
      }
    }
  ],

  // BIKANER (6)
  bikaner: [
    {
      name: { en: "Junagarh Fort", es: "Fuerte Junagarh", pt: "Forte Junagarh" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Junagarh Fort is one of Bikaner's most impressive heritage monuments. Built primarily with red sandstone and marble, the fort contains beautiful palaces, courtyards, balconies, temples and decorative interiors. Its combination of Rajput, Mughal and Gujarati influences reflects the rich history of Bikaner's royal family."),
        es: cleanText("El Fuerte Junagarh es uno de los monumentos históricos más importantes de Bikaner. Construido principalmente con arenisca roja y mármol, contiene palacios, patios, balcones, templos e interiores decorados. Su arquitectura refleja influencias rajput, mogoles y gujarati."),
        pt: cleanText("O Forte Junagarh é um dos monumentos históricos mais importantes de Bikaner. Construído principalmente em arenito vermelho e mármore, possui palácios, pátios, varandas, templos e interiores decorados. Sua arquitetura combina influências Rajput, Mughal e Gujarati.")
      }
    },
    {
      name: { en: "Karni Mata Temple, Deshnok", es: "Templo de Karni Mata en Deshnok", pt: "Templo Karni Mata, Deshnok" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Karni Mata Temple in Deshnok is one of Rajasthan's most distinctive temples. The temple is dedicated to Karni Mata and is famous for the large number of rats that are traditionally considered sacred. Its silver doors, marble details and unusual religious traditions make it a memorable cultural attraction near Bikaner."),
        es: cleanText("El Templo de Karni Mata en Deshnok es uno de los templos más singulares de Rajasthan. Está dedicado a Karni Mata y es famoso por la gran cantidad de ratas consideradas sagradas dentro del templo. Sus puertas de plata, detalles de mármol y tradiciones religiosas lo convierten en una atracción cultural única."),
        pt: cleanText("O Templo Karni Mata, em Deshnok, é um dos templos mais singulares do Rajasthan. Dedicado a Karni Mata, é conhecido pelo grande número de ratos tradicionalmente considerados sagrados. Suas portas de prata, detalhes em mármore e tradições religiosas fazem dele uma atração cultural única.")
      }
    },
    {
      name: { en: "National Research Centre on Camel", es: "Centro Nacional de Investigación de Camellos", pt: "National Research Centre on Camel" },
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900&q=80",
      description: {
        en: cleanText("The National Research Centre on Camel is an important camel research and breeding centre located near Bikaner. Visitors can learn about camel breeds and their role in desert life and agriculture. The centre also offers camel-related experiences and gives travellers a unique insight into Rajasthan's famous desert animal."),
        es: cleanText("El National Research Centre on Camel es un importante centro de investigación y cría de camellos cerca de Bikaner. Los visitantes pueden conocer diferentes razas de camellos y su importancia en la vida del desierto. También ofrece experiencias relacionadas con los camellos."),
        pt: cleanText("O National Research Centre on Camel é um importante centro de pesquisa e criação de camelos localizado perto de Bikaner. Os visitantes podem conhecer diferentes raças de camelos e seu papel na vida do deserto. O centro também oferece experiências relacionadas aos camelos.")
      }
    },
    {
      name: { en: "Lalgarh Palace", es: "Palacio Lalgarh", pt: "Palácio Lalgarh" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Lalgarh Palace is a magnificent red sandstone palace commissioned by Maharaja Ganga Singh. Designed with a blend of Rajput, Mughal and European architectural influences, the palace features elegant courtyards, balconies and ornamental details. It represents the royal heritage and architectural grandeur of Bikaner."),
        es: cleanText("El Palacio Lalgarh es un magnífico palacio de arenisca roja construido por encargo de Maharaja Ganga Singh. Su diseño combina influencias rajput, mogoles y europeas, con elegantes patios, balcones y detalles ornamentales."),
        pt: cleanText("O Lalgarh Palace é um magnífico palácio de arenito vermelho construído por ordem do Maharaja Ganga Singh. Seu projeto combina influências Rajput, Mughal e europeias, com pátios elegantes, varandas e detalhes ornamentais.")
      }
    },
    {
      name: { en: "Rampuria Havelis", es: "Rampuria Havelis", pt: "Rampuria Havelis" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Rampuria Havelis are a group of beautifully decorated merchant mansions in the old city of Bikaner. Their red sandstone façades feature intricate jharokhas, carved windows, balconies and decorative details. The havelis showcase the wealth and artistic craftsmanship of Bikaner's historic merchant families."),
        es: cleanText("Las Rampuria Havelis son un conjunto de hermosas mansiones de comerciantes situadas en la ciudad antigua de Bikaner. Sus fachadas de arenisca roja presentan jharokhas, ventanas talladas, balcones y elaborados detalles decorativos."),
        pt: cleanText("As Rampuria Havelis são um conjunto de belas mansões de comerciantes localizadas na cidade antiga de Bikaner. Suas fachadas de arenito vermelho apresentam jharokhas, janelas esculpidas, varandas e detalhes decorativos.")
      }
    },
    {
      name: { en: "Gajner Palace & Lake", es: "Palacio y Lago Gajner", pt: "Palácio e Lago Gajner" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Gajner Palace is a historic lakeside palace located near Bikaner. Surrounded by desert landscapes and the peaceful Gajner Lake, the palace was once associated with the royal family of Bikaner. The setting combines heritage architecture with nature and provides a peaceful escape from the city."),
        es: cleanText("El Palacio Gajner es un histórico palacio situado junto a un lago cerca de Bikaner. Rodeado de paisajes desérticos y del tranquilo lago Gajner, estuvo relacionado con la familia real de Bikaner. Combina arquitectura histórica y naturaleza."),
        pt: cleanText("O Gajner Palace é um histórico palácio localizado às margens de um lago perto de Bikaner. Cercado por paisagens desérticas e pelo tranquilo Lago Gajner, esteve associado à família real de Bikaner. O local combina arquitetura histórica e natureza.")
      }
    }
  ],

  // MANDAWA (5)
  m: [
    {
      name: { en: "Mandawa Fort", es: "Fuerte de Mandawa", pt: "Forte de Mandawa" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Mandawa Fort is the historic centrepiece of the town and reflects the architectural heritage of the Shekhawati region. The fort features decorated gateways, frescoes, courtyards and traditional Rajput architecture. Its painted interiors and heritage character make it one of Mandawa's most important attractions."),
        es: cleanText("El Fuerte de Mandawa es el principal monumento histórico de la ciudad y representa el patrimonio arquitectónico de Shekhawati. Cuenta con puertas decoradas, frescos, patios y arquitectura rajput tradicional."),
        pt: cleanText("O Forte de Mandawa é o principal monumento histórico da cidade e representa o patrimônio arquitetônico de Shekhawati. Possui portões decorados, afrescos, pátios e arquitetura tradicional Rajput.")
      }
    },
    {
      name: { en: "Goenka Double Haveli", es: "Goenka Double Haveli", pt: "Goenka Double Haveli" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Goenka Double Haveli is one of Mandawa's beautiful merchant mansions, famous for its painted façades and elaborate frescoes. The haveli showcases scenes from traditional life, mythology and decorative art, reflecting the artistic character of Shekhawati."),
        es: cleanText("Goenka Double Haveli es una de las hermosas mansiones de comerciantes de Mandawa, famosa por sus fachadas pintadas y elaborados frescos. Sus pinturas representan escenas de la vida tradicional, mitología y arte decorativo."),
        pt: cleanText("Goenka Double Haveli é uma das belas mansões de comerciantes de Mandawa, famosa por suas fachadas pintadas e afrescos detalhados. As pinturas representam cenas da vida tradicional, mitologia e arte decorativa.")
      }
    },
    {
      name: { en: "Murmuria Haveli", es: "Murmuria Haveli", pt: "Murmuria Haveli" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Murmuria Haveli is known for its colourful frescoes and detailed paintings covering its walls and façades. The artwork combines traditional Rajasthani themes with scenes depicting historical figures, vehicles and everyday life, making it an interesting example of Shekhawati's painted architecture."),
        es: cleanText("Murmuria Haveli es conocida por sus coloridos frescos y pinturas detalladas que cubren sus paredes y fachadas. Las obras combinan temas tradicionales de Rajasthan con escenas históricas y de la vida cotidiana."),
        pt: cleanText("Murmuria Haveli é conhecida por seus afrescos coloridos e pinturas detalhadas nas paredes e fachadas. As obras combinam temas tradicionais do Rajasthan com cenas históricas e do cotidiano.")
      }
    },
    {
      name: { en: "Jhunjhunwala Haveli", es: "Jhunjhunwala Haveli", pt: "Jhunjhunwala Haveli" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Jhunjhunwala Haveli is a historic mansion decorated with traditional frescoes and ornamental details. The building represents the wealth of the merchant families who transformed Mandawa and other Shekhawati towns into open-air galleries of painted architecture."),
        es: cleanText("Jhunjhunwala Haveli es una histórica mansión decorada con frescos tradicionales y detalles ornamentales. Representa la riqueza de las familias comerciantes que transformaron Mandawa y otras ciudades de Shekhawati en auténticas galerías de arquitectura pintada."),
        pt: cleanText("Jhunjhunwala Haveli é uma histórica mansão decorada com afrescos tradicionais e detalhes ornamentais. O edifício representa a riqueza das famílias comerciantes que transformaram Mandawa e outras cidades de Shekhawati em verdadeiras galerias de arquitetura pintada.")
      }
    },
    {
      name: { en: "Chokhani Double Haveli", es: "Chokhani Double Haveli", pt: "Chokhani Double Haveli" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Chokhani Double Haveli is another notable example of Mandawa's painted heritage. Its elaborate façade, balconies, windows and colourful frescoes demonstrate the artistic traditions of Shekhawati's merchant architecture."),
        es: cleanText("Chokhani Double Haveli es otro destacado ejemplo del patrimonio pintado de Mandawa. Su elaborada fachada, balcones, ventanas y coloridos frescos muestran las tradiciones artísticas de la arquitectura comercial de Shekhawati."),
        pt: cleanText("Chokhani Double Haveli é outro importante exemplo do patrimônio pintado de Mandawa. Sua fachada elaborada, varandas, janelas e afrescos coloridos mostram as tradições artísticas da arquitetura mercantil de Shekhawati.")
      }
    }
  ],

  // RANAKPUR (4)
  ranakpur: [
    {
      name: { en: "Ranakpur Jain Temple", es: "Templo Jainista de Ranakpur", pt: "Templo Jainista de Ranakpur" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Ranakpur Jain Temple is one of Rajasthan's finest examples of Jain architecture. Built in the 15th century, the marble complex is dedicated primarily to Lord Adinath and is famous for its extraordinary carvings and numerous individually designed pillars. Set among the Aravalli Hills, the temple combines spiritual importance with remarkable architectural beauty."),
        es: cleanText("El Templo Jainista de Ranakpur es uno de los mejores ejemplos de arquitectura jainista de Rajasthan. Construido en el siglo XV, el complejo de mármol está dedicado principalmente a Adinath y es famoso por sus extraordinarias tallas y numerosos pilares decorados. Su ubicación entre las colinas Aravalli añade belleza al conjunto."),
        pt: cleanText("O Templo Jainista de Ranakpur é um dos melhores exemplos da arquitetura jainista do Rajasthan. Construído no século XV, o complexo de mármore é dedicado principalmente a Adinath e é famoso por suas esculturas e numerosos pilares individualmente trabalhados. Localizado nas colinas Aravalli, combina espiritualidade e arquitetura.")
      }
    },
    {
      name: { en: "Surya Narayan Temple", es: "Templo Surya Narayan", pt: "Templo Surya Narayan" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("The Surya Narayan Temple is a beautiful temple dedicated to the Sun God and is located near the Ranakpur Jain Temple complex. Its walls feature intricate carvings of the Sun God, horses and other decorative motifs, making it an important example of traditional temple craftsmanship."),
        es: cleanText("El Templo Surya Narayan está dedicado al Dios Sol y se encuentra cerca del complejo del Templo Jainista de Ranakpur. Sus paredes presentan elaboradas tallas del Dios Sol, caballos y otros motivos decorativos, mostrando la artesanía tradicional de los templos."),
        pt: cleanText("O Templo Surya Narayan é dedicado ao Deus Sol e está localizado próximo ao complexo do Templo Jainista de Ranakpur. Suas paredes apresentam esculturas detalhadas do Deus Sol, cavalos e outros motivos decorativos.")
      }
    },
    {
      name: { en: "Ranakpur Dam", es: "Ranakpur Dam", pt: "Ranakpur Dam" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Ranakpur Dam is a peaceful natural attraction surrounded by the Aravalli landscape. The area is suitable for enjoying scenic views, nature walks and quiet moments away from the busy tourist areas. It provides a pleasant complement to Ranakpur's famous temples."),
        es: cleanText("Ranakpur Dam es un tranquilo lugar natural rodeado por el paisaje de las colinas Aravalli. Es adecuado para disfrutar de vistas panorámicas, paseos por la naturaleza y momentos de tranquilidad."),
        pt: cleanText("Ranakpur Dam é uma tranquila atração natural cercada pela paisagem das colinas Aravalli. É um local agradável para apreciar vistas, fazer caminhadas na natureza e desfrutar de momentos de tranquilidade.")
      }
    },
    {
      name: { en: "Parshuram Mahadev Temple", es: "Templo Parshuram Mahadev", pt: "Templo Parshuram Mahadev" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Parshuram Mahadev Temple is a cave temple dedicated to Lord Shiva, located in the Aravalli region near Ranakpur. The temple is surrounded by scenic hills and is known for its natural cave setting, traditional religious significance and beautiful carvings."),
        es: cleanText("El Templo Parshuram Mahadev es un templo rupestre dedicado al Señor Shiva, situado en la región de Aravalli cerca de Ranakpur. Está rodeado de colinas y es conocido por su entorno natural, importancia religiosa y tallas tradicionales."),
        pt: cleanText("O Templo Parshuram Mahadev é um templo em uma caverna dedicado ao Senhor Shiva, localizado na região de Aravalli perto de Ranakpur. Cercado por colinas, destaca-se por seu ambiente natural, importância religiosa e esculturas tradicionais.")
      }
    }
  ],

  // ABHANERI (3)
  abhaneri: [
    {
      name: { en: "Chand Baori", es: "Chand Baori", pt: "Chand Baori" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Chand Baori is one of India's most spectacular stepwells and the most famous attraction of Abhaneri. The enormous geometric structure consists of thousands of precisely arranged steps descending towards the water. Its symmetrical design and impressive scale make it an extraordinary example of traditional Indian water architecture."),
        es: cleanText("Chand Baori es uno de los pozos escalonados más impresionantes de la India y la principal atracción de Abhaneri. Su enorme estructura geométrica está formada por miles de escalones dispuestos de manera precisa alrededor del depósito de agua."),
        pt: cleanText("Chand Baori é um dos poços escalonados mais impressionantes da Índia e a principal atração de Abhaneri. Sua enorme estrutura geométrica possui milhares de degraus organizados de maneira precisa ao redor do reservatório de água.")
      }
    },
    {
      name: { en: "Harshat Mata Temple", es: "Templo Harshat Mata", pt: "Templo Harshat Mata" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Harshat Mata Temple is a historic temple located close to Chand Baori. Dedicated to Goddess Harshat Mata, the temple is known for its carved architectural fragments and traditional religious significance. Its location beside the famous stepwell makes it an important part of Abhaneri's heritage landscape."),
        es: cleanText("El Templo Harshat Mata es un templo histórico situado cerca de Chand Baori. Dedicado a la Diosa Harshat Mata, es conocido por sus elementos arquitectónicos tallados y su importancia religiosa tradicional."),
        pt: cleanText("O Templo Harshat Mata é um templo histórico localizado perto de Chand Baori. Dedicado à Deusa Harshat Mata, é conhecido por seus elementos arquitetônicos esculpidos e sua importância religiosa tradicional.")
      }
    },
    {
      name: { en: "Abhaneri Village Heritage", es: "Patrimonio del Pueblo de Abhaneri", pt: "Patrimônio da Vila de Abhaneri" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("The village surroundings of Abhaneri provide an opportunity to experience the traditional rural landscape of Rajasthan. Exploring the area around Chand Baori and Harshat Mata Temple allows visitors to discover local architecture, village life and the historic character of the region."),
        es: cleanText("Los alrededores del pueblo de Abhaneri permiten conocer el paisaje rural tradicional de Rajasthan. Explorar la zona alrededor de Chand Baori y el Templo Harshat Mata ofrece una visión de la arquitectura local y la vida del pueblo."),
        pt: cleanText("Os arredores da vila de Abhaneri permitem conhecer a paisagem rural tradicional do Rajasthan. Explorar a região ao redor de Chand Baori e do Templo Harshat Mata oferece uma visão da arquitetura local e da vida da comunidade.")
      }
    }
  ],

  // NAWALGARH (5)
  n: [
    {
      name: { en: "Nawalgarh Fort", es: "Fuerte de Nawalgarh", pt: "Forte de Nawalgarh" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Nawalgarh Fort is a historic fort associated with the founding and development of Nawalgarh. Its architecture reflects the Rajput heritage of Shekhawati and provides an introduction to the town's royal and merchant history."),
        es: cleanText("El Fuerte de Nawalgarh es una fortaleza histórica relacionada con el desarrollo de la ciudad. Su arquitectura refleja el patrimonio rajput de Shekhawati y permite conocer la historia real y comercial de la región."),
        pt: cleanText("O Forte de Nawalgarh é uma fortaleza histórica ligada ao desenvolvimento da cidade. Sua arquitetura reflete o patrimônio Rajput de Shekhawati e oferece uma visão da história real e mercantil da região.")
      }
    },
    {
      name: { en: "Morarka Haveli Museum", es: "Museo Morarka Haveli", pt: "Morarka Haveli Museum" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Morarka Haveli Museum is one of Nawalgarh's notable heritage attractions. The haveli features beautifully painted walls, frescoes and traditional architectural details that showcase the artistic traditions of Shekhawati. It provides visitors with a closer look at the region's merchant-era culture."),
        es: cleanText("El Museo Morarka Haveli es una de las principales atracciones patrimoniales de Nawalgarh. La haveli presenta paredes pintadas, frescos y elementos arquitectónicos tradicionales que muestran las tradiciones artísticas de Shekhawati."),
        pt: cleanText("O Morarka Haveli Museum é uma das principais atrações históricas de Nawalgarh. A haveli possui paredes pintadas, afrescos e elementos arquitetônicos tradicionais que mostram as tradições artísticas de Shekhawati.")
      }
    },
    {
      name: { en: "Dr. Ramnath A. Poddar Haveli Museum", es: "Museo Dr. Ramnath A. Poddar Haveli", pt: "Dr. Ramnath A. Poddar Haveli Museum" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Dr. Ramnath A. Poddar Haveli Museum is a beautifully restored haveli showcasing the artistic heritage of Shekhawati. Its painted interiors, frescoes and traditional rooms provide insight into the lifestyle and artistic culture of the region's wealthy merchant families."),
        es: cleanText("El Museo Dr. Ramnath A. Poddar Haveli es una hermosa haveli restaurada que muestra el patrimonio artístico de Shekhawati. Sus interiores pintados, frescos y habitaciones tradicionales ofrecen una visión del estilo de vida de las antiguas familias comerciantes."),
        pt: cleanText("O Dr. Ramnath A. Poddar Haveli Museum é uma bela haveli restaurada que apresenta o patrimônio artístico de Shekhawati. Seus interiores pintados, afrescos e salas tradicionais mostram o estilo de vida das antigas famílias comerciantes.")
      }
    },
    {
      name: { en: "Aath Haveli", es: "Aath Haveli", pt: "Aath Haveli" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Aath Haveli is a group of traditional havelis known for their colourful frescoes and detailed architecture. The buildings demonstrate the artistic character of Nawalgarh and the wider Shekhawati region, where merchant families decorated their mansions with elaborate paintings."),
        es: cleanText("Aath Haveli es un conjunto de havelis tradicionales conocidas por sus coloridos frescos y arquitectura detallada. Los edificios muestran el carácter artístico de Nawalgarh y de la región de Shekhawati."),
        pt: cleanText("Aath Haveli é um conjunto de havelis tradicionais conhecidas por seus afrescos coloridos e arquitetura detalhada. Os edifícios mostram o caráter artístico de Nawalgarh e da região de Shekhawati.")
      }
    },
    {
      name: { en: "Roop Niwas Palace", es: "Roop Niwas Palace", pt: "Roop Niwas Palace" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Roop Niwas Palace is a heritage palace surrounded by landscaped gardens and reflects the royal character of Nawalgarh. Its architecture and peaceful setting provide visitors with another perspective on the region's aristocratic heritage."),
        es: cleanText("Roop Niwas Palace es un palacio patrimonial rodeado de jardines y refleja el carácter aristocrático de Nawalgarh. Su arquitectura y entorno tranquilo ofrecen otra perspectiva del patrimonio histórico de la región."),
        pt: cleanText("Roop Niwas Palace é um palácio histórico cercado por jardins e representa o caráter aristocrático de Nawalgarh. Sua arquitetura e ambiente tranquilo oferecem outra perspectiva do patrimônio histórico da região.")
      }
    }
  ],

  // KASARAGOD (5)
  kasargod: [
    {
      name: { en: "Bekal Fort", es: "Fuerte de Bekal", pt: "Forte de Bekal" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: cleanText("Bekal Fort is one of Kerala's largest and best-preserved forts, standing dramatically beside the Arabian Sea. Its massive laterite walls, observation points and sea-facing location make it one of Kasaragod's most iconic heritage attractions."),
        es: cleanText("El Fuerte de Bekal es una de las fortalezas más grandes y mejor conservadas de Kerala. Sus enormes murallas de laterita, miradores y ubicación frente al mar Arábigo lo convierten en una de las principales atracciones históricas de Kasaragod."),
        pt: cleanText("O Forte de Bekal é uma das maiores e mais bem preservadas fortalezas de Kerala. Suas enormes muralhas de laterita, mirantes e localização diante do Mar Arábico fazem dele uma das principais atrações históricas de Kasaragod.")
      }
    },
    {
      name: { en: "Bekal Beach", es: "Playa de Bekal", pt: "Praia de Bekal" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Bekal Beach is a beautiful coastal destination located near Bekal Fort. The golden shoreline, Arabian Sea views and peaceful surroundings make it ideal for relaxing and enjoying Kerala's coastal landscape."),
        es: cleanText("La playa de Bekal es un hermoso destino costero cerca del fuerte. Su arena dorada, vistas al mar Arábigo y ambiente tranquilo la convierten en un lugar ideal para disfrutar del paisaje costero."),
        pt: cleanText("A Praia de Bekal é um belo destino costeiro localizado perto do forte. A areia dourada, as vistas do Mar Arábico e o ambiente tranquilo tornam o local perfeito para apreciar a costa de Kerala.")
      }
    },
    {
      name: { en: "Ranipuram Hills", es: "Colinas Ranipuram", pt: "Ranipuram Hills" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("Ranipuram is a scenic hill destination known for its green landscapes, trekking trails and misty Western Ghats scenery. It is ideal for travellers looking for nature, hiking and peaceful mountain surroundings."),
        es: cleanText("Ranipuram es un destino montañoso conocido por sus paisajes verdes, senderos de trekking y vistas de los Ghats Occidentales. Es ideal para los amantes de la naturaleza y el senderismo."),
        pt: cleanText("Ranipuram é um destino montanhoso conhecido por suas paisagens verdes, trilhas e cenários dos Gates Ocidentais. É ideal para quem gosta de natureza e caminhadas.")
      }
    },
    {
      name: { en: "Ananthapura Lake Temple", es: "Templo del Lago Ananthapura", pt: "Templo do Lago Ananthapura" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("Ananthapura Lake Temple is a unique temple situated in the middle of a small lake. Surrounded by greenery and water, the temple has a peaceful atmosphere and is an important spiritual attraction of northern Kerala."),
        es: cleanText("El Templo del Lago Ananthapura es un templo único situado en medio de un pequeño lago. Rodeado de agua y vegetación, ofrece un ambiente tranquilo y espiritual."),
        pt: cleanText("O Templo do Lago Ananthapura é um templo único localizado no meio de um pequeno lago. Cercado por água e vegetação, oferece uma atmosfera tranquila e espiritual.")
      }
    },
    {
      name: { en: "Madhur Temple", es: "Templo de Madhur", pt: "Templo Madhur" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Madhur Temple is a historic temple dedicated to Lord Shiva and known for its distinctive architecture and traditional Kerala temple style. It is an important cultural and religious attraction near Kasaragod."),
        es: cleanText("El Templo de Madhur es un templo histórico dedicado al Señor Shiva y conocido por su arquitectura tradicional de Kerala. Es un importante lugar cultural y religioso."),
        pt: cleanText("O Templo Madhur é um templo histórico dedicado ao Senhor Shiva, conhecido por sua arquitetura tradicional de Kerala. É uma importante atração cultural e religiosa.")
      }
    }
  ],

  // ALLEPPEY (5)
  alleppey: [
    {
      name: { en: "Alleppey Backwaters", es: "Remansos de Alleppey", pt: "Backwaters de Alleppey" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: cleanText("Alleppey Backwaters are the defining attraction of Alappuzha. A network of canals, lagoons, lakes and villages creates a unique landscape best explored through traditional houseboat cruises. The experience offers beautiful views of Kerala's waterways, coconut palms and rural life."),
        es: cleanText("Los remansos de Alleppey son la principal atracción de Alappuzha. Una red de canales, lagunas, lagos y pueblos crea un paisaje único que puede explorarse en tradicionales casas flotantes."),
        pt: cleanText("Os backwaters de Alleppey são a principal atração de Alappuzha. Uma rede de canais, lagoas, lagos e vilas cria uma paisagem única que pode ser explorada em tradicionais casas-barco.")
      }
    },
    {
      name: { en: "Alappuzha Beach", es: "Playa de Alappuzha", pt: "Praia de Alappuzha" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Alappuzha Beach is a popular coastal destination known for its long sandy shoreline, Arabian Sea views and historic pier. It provides a pleasant combination of beach scenery and local coastal culture."),
        es: cleanText("La playa de Alappuzha es conocida por su extensa costa de arena, vistas al mar Arábigo y su histórico muelle. Es un lugar popular para disfrutar del paisaje costero."),
        pt: cleanText("A Praia de Alappuzha é conhecida por sua longa faixa de areia, vistas do Mar Arábico e seu histórico píer. É um destino popular para apreciar a paisagem costeira.")
      }
    },
    {
      name: { en: "Marari Beach", es: "Marari Beach", pt: "Marari Beach" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Marari Beach is a peaceful coastal destination near Alappuzha, known for its clean sandy shoreline and relaxed atmosphere. It is ideal for travellers looking for a quieter beach experience surrounded by coconut palms."),
        es: cleanText("Marari Beach es una tranquila playa cerca de Alappuzha, conocida por su arena y ambiente relajado. Es ideal para quienes buscan una experiencia costera más tranquila."),
        pt: cleanText("Marari Beach é uma praia tranquila perto de Alappuzha, conhecida por sua areia e atmosfera relaxante. É ideal para quem busca uma experiência costeira mais tranquila.")
      }
    },
    {
      name: { en: "Kuttanad", es: "Kuttanad", pt: "Kuttanad" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("Kuttanad is a remarkable low-lying agricultural region famous for its paddy fields, canals and waterways. Often called the rice bowl of Kerala, it provides visitors with a glimpse of rural life and the unique landscape of the backwater region."),
        es: cleanText("Kuttanad es una región agrícola de tierras bajas famosa por sus arrozales, canales y vías fluviales. Conocida como el granero de arroz de Kerala, ofrece una visión de la vida rural."),
        pt: cleanText("Kuttanad é uma região agrícola de baixa altitude famosa por seus campos de arroz, canais e vias navegáveis. Conhecida como o celeiro de arroz de Kerala, oferece uma visão da vida rural.")
      }
    },
    {
      name: { en: "Alappuzha Lighthouse", es: "Faro de Alappuzha", pt: "Farol de Alappuzha" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Alappuzha Lighthouse is a historic coastal landmark offering views over the Arabian Sea and surrounding areas. Its distinctive tower and maritime history make it a popular sightseeing attraction in Alappuzha."),
        es: cleanText("El faro de Alappuzha es un histórico monumento costero con vistas al mar Arábigo. Su torre característica y su historia marítima lo convierten en una atracción popular."),
        pt: cleanText("O Farol de Alappuzha é um histórico marco costeiro com vistas para o Mar Arábico. Sua torre característica e história marítima fazem dele uma atração popular.")
      }
    }
  ],

  // KOTTAYAM (5)
  kottayam: [
    {
      name: { en: "Kumarakom Backwaters", es: "Remansos de Kumarakom", pt: "Backwaters de Kumarakom" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: cleanText("Peaceful backwaters surrounded by coconut palms, canals and village landscapes. Houseboat cruises are the main experience here."),
        es: cleanText("Tranquilos remansos rodeados de palmeras, canales y paisajes rurales. Los paseos en casas flotantes son la principal experiencia."),
        pt: cleanText("Backwaters tranquilos cercados por palmeiras, canais e paisagens rurais. Os passeios de casa-barco são a principal experiência.")
      }
    },
    {
      name: { en: "Kumarakom Bird Sanctuary", es: "Santuario de Aves de Kumarakom", pt: "Santuário de Aves de Kumarakom" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("A beautiful bird sanctuary beside Vembanad Lake, known for its wetland habitat and variety of resident and migratory birds."),
        es: cleanText("Hermoso santuario de aves junto al lago Vembanad, conocido por sus humedales y aves migratorias."),
        pt: cleanText("Belo santuário de aves junto ao lago Vembanad, conhecido por suas áreas úmidas e aves migratórias.")
      }
    },
    {
      name: { en: "Vembanad Lake", es: "Lago Vembanad", pt: "Lago Vembanad" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Kerala's largest lake forms the scenic centre of the Kumarakom region and is famous for boating, backwaters and beautiful sunsets."),
        es: cleanText("El lago más grande de Kerala forma el centro paisajístico de Kumarakom y es famoso por sus paseos en barco y atardeceres."),
        pt: cleanText("O maior lago de Kerala é o centro paisagístico de Kumarakom e é famoso por passeios de barco e pôr do sol.")
      }
    },
    {
      name: { en: "Vaikom Mahadeva Temple", es: "Templo Vaikom Mahadeva", pt: "Templo Vaikom Mahadeva" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("One of Kerala's important Shiva temples, known for its traditional architecture and long-standing religious significance."),
        es: cleanText("Uno de los importantes templos de Shiva de Kerala, conocido por su arquitectura tradicional y relevancia religiosa."),
        pt: cleanText("Um dos importantes templos de Shiva de Kerala, conhecido por sua arquitetura tradicional e importância religiosa.")
      }
    },
    {
      name: { en: "Illikkal Kallu", es: "Illikkal Kallu", pt: "Illikkal Kallu" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("A spectacular hill destination featuring rocky peaks, misty landscapes and panoramic Western Ghats views."),
        es: cleanText("Destino montañoso espectacular con picos rocosos, paisajes brumosos y vistas panorámicas de los Ghats Occidentales."),
        pt: cleanText("Destino montanhoso espetacular com picos rochosos, paisagens de neblina e vistas panorâmicas dos Gates Ocidentais.")
      }
    }
  ],

  // KOLLAM (5)
  kollam: [
    {
      name: { en: "Ashtamudi Lake", es: "Lago Ashtamudi", pt: "Lago Ashtamudi" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: cleanText("A vast backwater lake famous for its scenic waterways, coconut-lined shores and traditional boat experiences."),
        es: cleanText("Un gran lago de remansos conocido por sus canales, costas con palmeras y paseos tradicionales en barco."),
        pt: cleanText("Um grande lago de backwaters famoso por seus canais, margens com palmeiras e passeios tradicionais de barco.")
      }
    },
    {
      name: { en: "Palaruvi Waterfalls", es: "Cascada Palaruvi", pt: "Cachoeira Palaruvi" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("A spectacular waterfall surrounded by lush forests and one of Kollam's popular nature attractions."),
        es: cleanText("Una espectacular cascada rodeada de bosques verdes y una de las principales atracciones naturales de Kollam."),
        pt: cleanText("Uma impressionante cachoeira cercada por florestas exuberantes e uma das principais atrações naturais de Kollam.")
      }
    },
    {
      name: { en: "Jatayu Earth’s Center", es: "Jatayu Earth’s Center", pt: "Jatayu Earth’s Center" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("A unique tourism destination known for its giant sculpture of Jatayu, scenic hills and adventure activities."),
        es: cleanText("Un destino único conocido por su enorme escultura de Jatayu, colinas y actividades de aventura."),
        pt: cleanText("Um destino único conhecido pela enorme escultura de Jatayu, colinas e atividades de aventura.")
      }
    },
    {
      name: { en: "Kollam Beach", es: "Playa de Kollam", pt: "Praia de Kollam" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("A popular Arabian Sea beach with a long shoreline, coastal views and a relaxed atmosphere."),
        es: cleanText("Una popular playa del mar Arábigo con una larga costa y un ambiente relajado."),
        pt: cleanText("Uma popular praia do Mar Arábico com longa faixa costeira e ambiente tranquilo.")
      }
    },
    {
      name: { en: "Thenmala", es: "Thenmala", pt: "Thenmala" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("India's first planned eco-tourism destination, known for forests, outdoor activities, scenic landscapes and nature-based experiences."),
        es: cleanText("Primer destino de ecoturismo planificado de India, conocido por sus bosques, actividades al aire libre y paisajes naturales."),
        pt: cleanText("Primeiro destino de ecoturismo planejado da Índia, conhecido por florestas, atividades ao ar livre e paisagens naturais.")
      }
    }
  ],

  // THRISSUR (5)
  thrissur: [
    {
      name: { en: "Vadakkunnathan Temple", es: "Templo Vadakkunnathan", pt: "Templo Vadakkunnathan" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("A historic Shiva temple at the heart of Thrissur, famous for traditional Kerala architecture and its connection with Thrissur Pooram."),
        es: cleanText("Histórico templo de Shiva en el centro de Thrissur, famoso por su arquitectura tradicional y su relación con Thrissur Pooram."),
        pt: cleanText("Histórico templo de Shiva no centro de Thrissur, famoso pela arquitetura tradicional de Kerala e pelo Thrissur Pooram.")
      }
    },
    {
      name: { en: "Athirappilly Waterfalls", es: "Cascadas de Athirappilly", pt: "Cachoeiras de Athirappilly" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("Kerala's famous waterfall surrounded by lush forests and one of the state's most spectacular natural attractions."),
        es: cleanText("Famosa cascada de Kerala rodeada de bosques y una de las atracciones naturales más espectaculares del estado."),
        pt: cleanText("Famosa cachoeira de Kerala cercada por florestas e uma das atrações naturais mais impressionantes do estado.")
      }
    },
    {
      name: { en: "Shakthan Thampuran Palace", es: "Palacio Shakthan Thampuran", pt: "Palácio Shakthan Thampuran" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("A historic palace and museum associated with the former rulers of Cochin, showcasing Kerala's royal heritage and history."),
        es: cleanText("Palacio histórico y museo relacionado con los antiguos gobernantes de Cochin, que muestra el patrimonio real de Kerala."),
        pt: cleanText("Palácio histórico e museu associado aos antigos governantes de Cochin, mostrando o patrimônio real de Kerala.")
      }
    },
    {
      name: { en: "Kerala Kalamandalam", es: "Kerala Kalamandalam", pt: "Kerala Kalamandalam" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("A renowned centre for traditional Kerala performing arts, especially Kathakali and classical dance traditions."),
        es: cleanText("Famoso centro de artes escénicas tradicionales de Kerala, especialmente Kathakali y danza clásica."),
        pt: cleanText("Famoso centro de artes performáticas tradicionais de Kerala, especialmente Kathakali e dança clássica.")
      }
    },
    {
      name: { en: "Thrissur Zoo & State Museum", es: "Zoológico y Museo de Thrissur", pt: "Zoológico e Museu de Thrissur" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("A popular attraction combining a zoological park with museum collections showcasing Kerala's natural and cultural heritage."),
        es: cleanText("Atracción popular que combina un zoológico con colecciones de museo sobre el patrimonio natural y cultural de Kerala."),
        pt: cleanText("Atração popular que combina zoológico e coleções de museu relacionadas ao patrimônio natural e cultural de Kerala.")
      }
    }
  ],

  // THEKKADY (5)
  thekkady: [
    {
      name: { en: "Periyar Wildlife Sanctuary", es: "Santuario de Vida Silvestre Periyar", pt: "Santuário de Vida Selvagem Periyar" },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
      description: {
        en: cleanText("A famous wildlife reserve known for elephants, diverse forests, birds and scenic landscapes around Periyar Lake."),
        es: cleanText("Famosa reserva de vida silvestre conocida por sus elefantes, bosques, aves y paisajes alrededor del lago Periyar."),
        pt: cleanText("Famosa reserva de vida selvagem conhecida por elefantes, florestas, aves e paisagens ao redor do Lago Periyar.")
      }
    },
    {
      name: { en: "Periyar Lake", es: "Lago Periyar", pt: "Lago Periyar" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("A scenic lake inside the Periyar reserve, famous for boat cruises through forested surroundings and wildlife viewing."),
        es: cleanText("Lago pintoresco dentro de la reserva de Periyar, famoso por sus paseos en barco y observación de fauna."),
        pt: cleanText("Lago cênico dentro da reserva de Periyar, famoso pelos passeios de barco e observação da vida selvagem.")
      }
    },
    {
      name: { en: "Mangala Devi Temple", es: "Templo Mangala Devi", pt: "Templo Mangala Devi" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("An ancient temple located in the forested hills near Thekkady, offering scenic mountain views and a peaceful atmosphere."),
        es: cleanText("Antiguo templo situado en las colinas boscosas cerca de Thekkady, con vistas panorámicas y ambiente tranquilo."),
        pt: cleanText("Antigo templo localizado nas colinas florestadas perto de Thekkady, com belas vistas e atmosfera tranquila.")
      }
    },
    {
      name: { en: "Thekkady Spice Gardens", es: "Jardines de Especias de Thekkady", pt: "Jardins de Especiarias de Thekkady" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("Spice gardens offer visitors an introduction to Kerala's famous cultivation of cardamom, pepper, cinnamon and other spices."),
        es: cleanText("Los jardines de especias permiten conocer el cultivo de cardamomo, pimienta, canela y otras especias de Kerala."),
        pt: cleanText("Os jardins de especiarias permitem conhecer o cultivo de cardamomo, pimenta, canela e outras especiarias de Kerala.")
      }
    },
    {
      name: { en: "Elephant Junction", es: "Elephant Junction", pt: "Elephant Junction" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("A popular tourism centre offering visitors opportunities to learn about elephants and experience activities connected with Kerala's traditional relationship with these animals."),
        es: cleanText("Centro turístico donde los visitantes pueden conocer los elefantes y aprender sobre la relación tradicional de Kerala con estos animales."),
        pt: cleanText("Centro turístico onde os visitantes podem conhecer elefantes e aprender sobre a relação tradicional de Kerala com esses animais.")
      }
    }
  ],

  // MUNNAR (6)
  munnar: [
    {
      name: { en: "Munnar Tea Gardens", es: "Plantaciones de Té de Munnar", pt: "Plantações de Chá de Munnar" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("Munnar's rolling tea plantations are among its most iconic landscapes, covering the hills with endless shades of green and offering spectacular viewpoints."),
        es: cleanText("Las plantaciones de té de Munnar son uno de sus paisajes más emblemáticos, cubriendo las colinas con extensos campos verdes."),
        pt: cleanText("As plantações de chá de Munnar estão entre suas paisagens mais famosas, cobrindo as colinas com extensos campos verdes.")
      }
    },
    {
      name: { en: "Eravikulam National Park", es: "Parque Nacional Eravikulam", pt: "Parque Nacional Eravikulam" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("A famous mountain national park known for its rolling grasslands, wildlife and spectacular views of the Western Ghats."),
        es: cleanText("Parque nacional de montaña famoso por sus praderas, fauna y espectaculares vistas de los Ghats Occidentales."),
        pt: cleanText("Parque nacional montanhoso famoso por suas pradarias, vida selvagem e vistas dos Gates Ocidentais.")
      }
    },
    {
      name: { en: "Mattupetty Dam", es: "Presa Mattupetty", pt: "Barragem Mattupetty" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("A scenic dam surrounded by green hills, forests and plantations, popular for boating and enjoying the mountain landscape."),
        es: cleanText("Presa rodeada de colinas verdes, bosques y plantaciones, popular para paseos en barco y disfrutar del paisaje."),
        pt: cleanText("Barragem cercada por colinas verdes, florestas e plantações, popular para passeios de barco e paisagens montanhosas.")
      }
    },
    {
      name: { en: "Top Station", es: "Top Station", pt: "Top Station" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("One of Munnar's most famous viewpoints, offering panoramic views of the Western Ghats and surrounding valleys."),
        es: cleanText("Uno de los miradores más famosos de Munnar, con vistas panorámicas de los Ghats Occidentales y los valles."),
        pt: cleanText("Um dos mirantes mais famosos de Munnar, com vistas panorâmicas dos Gates Ocidentais e dos vales.")
      }
    },
    {
      name: { en: "Echo Point", es: "Echo Point", pt: "Echo Point" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("A scenic destination beside a lake and forested hills, famous for its natural echo phenomenon and peaceful mountain surroundings."),
        es: cleanText("Destino pintoresco junto a un lago y colinas boscosas, famoso por su eco natural y paisajes tranquilos."),
        pt: cleanText("Destino cênico junto a um lago e colinas florestadas, famoso pelo fenômeno natural de eco.")
      }
    },
    {
      name: { en: "Kundala Lake", es: "Lago Kundala", pt: "Lago Kundala" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: cleanText("A beautiful mountain lake surrounded by tea plantations and forests, popular for boating and scenic views."),
        es: cleanText("Hermoso lago de montaña rodeado de plantaciones de té y bosques, popular para paseos en barco."),
        pt: cleanText("Belo lago de montanha cercado por plantações de chá e florestas, popular para passeios de barco.")
      }
    }
  ],

  // KOCHI (6)
  kochi: [
    {
      name: { en: "Fort Kochi", es: "Fort Kochi", pt: "Fort Kochi" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("Fort Kochi is a historic neighbourhood famous for colonial architecture, heritage streets, churches, cafés and cultural landmarks."),
        es: cleanText("Fort Kochi es un barrio histórico famoso por su arquitectura colonial, calles patrimoniales, iglesias y ambiente cultural."),
        pt: cleanText("Fort Kochi é um bairro histórico famoso por sua arquitetura colonial, ruas históricas, igrejas e ambiente cultural.")
      }
    },
    {
      name: { en: "Chinese Fishing Nets", es: "Redes de Pesca Chinas", pt: "Redes de Pesca Chinesas" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: cleanText("These iconic cantilevered fishing nets are one of Kochi's most recognizable sights and reflect the city's historic maritime culture."),
        es: cleanText("Estas famosas redes de pesca en voladizo son uno de los símbolos de Kochi y reflejan su antigua cultura marítima."),
        pt: cleanText("Essas famosas redes de pesca são um dos símbolos de Kochi e refletem a antiga cultura marítima da cidade.")
      }
    },
    {
      name: { en: "Mattancherry Palace", es: "Palacio Mattancherry", pt: "Palácio Mattancherry" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("Mattancherry Palace, also known as the Dutch Palace, is a historic palace famous for its murals, royal collections and Kerala-style architecture."),
        es: cleanText("El Palacio Mattancherry, conocido como Palacio Holandés, es famoso por sus murales, colecciones reales y arquitectura tradicional de Kerala."),
        pt: cleanText("O Palácio Mattancherry, conhecido como Palácio Holandês, é famoso por seus murais, coleções reais e arquitetura tradicional de Kerala.")
      }
    },
    {
      name: { en: "St. Francis Church", es: "Iglesia de San Francisco", pt: "Igreja de São Francisco" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("St. Francis Church is one of India's oldest European-built churches and an important historic landmark of Fort Kochi."),
        es: cleanText("La Iglesia de San Francisco es una de las iglesias europeas más antiguas construidas en India y un importante monumento histórico."),
        pt: cleanText("A Igreja de São Francisco é uma das mais antigas igrejas construídas por europeus na Índia e um importante monumento histórico.")
      }
    },
    {
      name: { en: "Jew Town & Paradesi Synagogue", es: "Jew Town y Sinagoga Paradesi", pt: "Jew Town e Sinagoga Paradesi" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("Jew Town is a historic quarter known for antique shops, heritage buildings and the famous Paradesi Synagogue."),
        es: cleanText("Jew Town es un barrio histórico conocido por sus tiendas de antigüedades, edificios patrimoniales y la famosa Sinagoga Paradesi."),
        pt: cleanText("Jew Town é um bairro histórico conhecido por lojas de antiguidades, edifícios históricos e a famosa Sinagoga Paradesi.")
      }
    },
    {
      name: { en: "Marine Drive Kochi", es: "Marine Drive Kochi", pt: "Marine Drive Kochi" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Marine Drive is a popular waterfront promenade offering views of Kochi's harbour, backwaters and surrounding cityscape."),
        es: cleanText("Marine Drive es un paseo marítimo popular con vistas al puerto, los backwaters y el paisaje urbano de Kochi."),
        pt: cleanText("Marine Drive é um popular passeio à beira-mar com vistas do porto, backwaters e paisagem urbana de Kochi.")
      }
    }
  ],

  // THIRUVANANTHAPURAM (6)
  thiruvananthapuram: [
    {
      name: { en: "Sree Padmanabhaswamy Temple", es: "Templo Sree Padmanabhaswamy", pt: "Templo Sree Padmanabhaswamy" },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
      description: {
        en: cleanText("One of Kerala's most important temples, dedicated to Lord Vishnu and renowned for its traditional architecture and spiritual significance."),
        es: cleanText("Uno de los templos más importantes de Kerala, dedicado al Señor Vishnu y famoso por su arquitectura tradicional."),
        pt: cleanText("Um dos templos mais importantes de Kerala, dedicado ao Senhor Vishnu e famoso por sua arquitetura tradicional.")
      }
    },
    {
      name: { en: "Kovalam Beach", es: "Playa de Kovalam", pt: "Praia de Kovalam" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("Kovalam is one of Kerala's most famous beach destinations, known for its curved coastline, lighthouse and Arabian Sea views."),
        es: cleanText("Kovalam es uno de los destinos de playa más famosos de Kerala, conocido por su costa curva, faro y vistas al mar Arábigo."),
        pt: cleanText("Kovalam é um dos destinos de praia mais famosos de Kerala, conhecido por sua costa curva, farol e vistas do Mar Arábico.")
      }
    },
    {
      name: { en: "Napier Museum", es: "Museo Napier", pt: "Museu Napier" },
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=900&q=80",
      description: {
        en: cleanText("Napier Museum is a prominent cultural museum known for its distinctive architecture and collections of art, sculptures and historical objects."),
        es: cleanText("El Museo Napier es un importante museo cultural conocido por su arquitectura distintiva y sus colecciones de arte y objetos históricos."),
        pt: cleanText("O Museu Napier é um importante museu cultural conhecido por sua arquitetura distinta e coleções de arte e objetos históricos.")
      }
    },
    {
      name: { en: "Veli Tourist Village", es: "Pueblo Turístico de Veli", pt: "Vila Turística de Veli" },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
      description: {
        en: cleanText("Veli combines a scenic lake, gardens and coastal surroundings, offering boating and recreational activities close to the city."),
        es: cleanText("Veli combina un lago, jardines y paisajes costeros, ofreciendo paseos en barco y actividades recreativas."),
        pt: cleanText("Veli combina lago, jardins e paisagens costeiras, oferecendo passeios de barco e atividades recreativas.")
      }
    },
    {
      name: { en: "Shankhumugham Beach", es: "Playa Shankhumugham", pt: "Praia Shankhumugham" },
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=900&q=80",
      description: {
        en: cleanText("A popular city beach known for its broad sandy shoreline and Arabian Sea sunsets."),
        es: cleanText("Playa urbana popular conocida por su amplia costa de arena y sus atardeceres sobre el mar Arábigo."),
        pt: cleanText("Praia urbana popular conhecida por sua ampla faixa de areia e pôr do sol sobre o Mar Arábico.")
      }
    },
    {
      name: { en: "Kanakakunnu Palace", es: "Palacio Kanakakunnu", pt: "Palácio Kanakakunnu" },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
      description: {
        en: cleanText("A historic palace surrounded by landscaped gardens and a major cultural venue in the capital city."),
        es: cleanText("Palacio histórico rodeado de jardines y uno de los principales espacios culturales de la capital."),
        pt: cleanText("Palácio histórico cercado por jardins e um importante espaço cultural da capital.")
      }
    }
  ],

  // KANNUR (5)
  kannur: [
    {
      name: { en: "St. Angelo Fort", es: "Fuerte de San Ángelo", pt: "Forte de Santo Ângelo" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: cleanText("A historic seaside fort built on a rocky promontory, offering views of the Arabian Sea and Kannur coastline."),
        es: cleanText("Fortaleza histórica junto al mar construida sobre un promontorio rocoso, con vistas al mar Arábigo y la costa de Kannur."),
        pt: cleanText("Fortaleza histórica à beira-mar construída sobre um promontório rochoso, com vistas do Mar Arábico e da costa de Kannur.")
      }
    },
    {
      name: { en: "Muzhappilangad Drive-in Beach", es: "Playa Muzhappilangad Drive-in", pt: "Praia Muzhappilangad Drive-in" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: cleanText("One of India's famous drive-in beaches, known for its long sandy coastline and unique coastal experience."),
        es: cleanText("Una de las famosas playas de India donde se puede conducir por la arena, conocida por su extensa costa."),
        pt: cleanText("Uma das famosas praias da Índia onde é possível dirigir pela areia, conhecida por sua longa costa.")
      }
    },
    {
      name: { en: "Parassinikadavu Muthappan Temple", es: "Templo Parassinikadavu Muthappan", pt: "Templo Parassinikadavu Muthappan" },
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
      description: {
        en: cleanText("A distinctive temple associated with the Muthappan tradition and the Theyyam cultural heritage of northern Kerala."),
        es: cleanText("Templo tradicional relacionado con Muthappan y con el patrimonio cultural de Theyyam del norte de Kerala."),
        pt: cleanText("Templo tradicional associado a Muthappan e ao patrimônio cultural do Theyyam no norte de Kerala.")
      }
    },
    {
      name: { en: "Aralam Wildlife Sanctuary", es: "Santuario de Vida Silvestre Aralam", pt: "Santuário de Vida Selvagem Aralam" },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
      description: {
        en: cleanText("A forested wildlife destination in the Western Ghats known for biodiversity, trekking and beautiful natural landscapes."),
        es: cleanText("Destino de naturaleza en los Ghats Occidentales conocido por su biodiversidad, senderismo y paisajes."),
        pt: cleanText("Destino de vida selvagem nos Gates Ocidentais conhecido por sua biodiversidade, trilhas e paisagens naturais.")
      }
    },
    {
      name: { en: "Arakkal Museum", es: "Museo Arakkal", pt: "Museu Arakkal" },
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&q=80",
      description: {
        en: cleanText("A heritage museum showcasing the history and legacy of the Arakkal royal family, Kerala's historic Muslim royal family."),
        es: cleanText("Museo patrimonial que presenta la historia y legado de la familia real Arakkal, una histórica familia real musulmana de Kerala."),
        pt: cleanText("Museu histórico que apresenta a história e o legado da família real Arakkal, uma importante família real muçulmana de Kerala.")
      }
    }
  ]
};

// Aliases helper to find city in HEAD
function findHeadCity(cid) {
  let found = headCities.find(c => c.id === cid);
  if (found) return found;

  const aliasMap = {
    bikaner: 'bikaner',
    ranakpur: 'ranakpur',
    abhaneri: 'abhaneri',
    mandawa: 'm',
    nawalgarh: 'n',
    kasaragod: 'kasargod',
    thiruvananthapuram: 'trivandrum',
    kannur: 'kunnur'
  };
  const targetId = aliasMap[cid];
  if (targetId) {
    found = headCities.find(c => c.id === targetId);
  }
  return found;
}

// RESTORE cities array: Start with current cities
const finalCities = [...currentCities];

// Target 12 Rajasthan cities + 10 Kerala cities
const targetCityIds = [
  // Rajasthan
  'jaipur', 'jodhpur', 'jaisalmer', 'udaipur', 'pushkar', 'ranthambore', 'sariska', 'bikaner', 'm', 'ranakpur', 'abhaneri', 'n',
  // Kerala
  'kasargod', 'alleppey', 'kottayam', 'kollam', 'thrissur', 'thekkady', 'munnar', 'kochi', 'thiruvananthapuram', 'kannur'
];

// Re-apply HEAD city objects where available, updating ONLY their touristPlaces
Object.keys(newTouristPlacesMap).forEach(key => {
  const places = newTouristPlacesMap[key];
  const headCityObj = findHeadCity(key);

  if (headCityObj) {
    // Make a clone of the HEAD city object
    const updatedCityObj = JSON.parse(JSON.stringify(headCityObj));
    updatedCityObj.touristPlaces = places;
    updatedCityObj.famousPlacesToVisit = places;

    // Find in finalCities by id or alias
    const existingIndex = finalCities.findIndex(c => c.id === updatedCityObj.id || (key === 'kasaragod' && c.id === 'kasargod') || (key === 'm' && c.id === 'mandawa'));
    if (existingIndex >= 0) {
      finalCities[existingIndex] = updatedCityObj;
    } else {
      finalCities.push(updatedCityObj);
    }
  } else {
    // New city (e.g. bikaner, ranakpur, abhaneri, thiruvananthapuram, kannur) not in HEAD
    // Create new city matching HEAD schema
    const stateId = ['bikaner', 'ranakpur', 'abhaneri'].includes(key) ? 'rajasthan' : 'kerala';
    const capName = key.charAt(0).toUpperCase() + key.slice(1);
    
    const newCityObj = {
      id: key,
      stateId: stateId,
      isPublished: true,
      isDeleted: false,
      displayOrder: 10,
      name: { en: capName, es: capName, pt: capName },
      slug: { en: key, es: key, pt: key },
      image: places[0]?.image || "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
      description: {
        en: `Explore the attractions and cultural highlights of ${capName}.`,
        es: `Explore las atracciones y aspectos culturales de ${capName}.`,
        pt: `Explore as atrações e aspectos culturais de ${capName}.`
      },
      seoTitle: {
        en: `${capName} Travel Guide | Tourism & Attractions`,
        es: `Guía de Viaje de ${capName} | Turismo`,
        pt: `Guia de Viagem de ${capName} | Turismo`
      },
      seoDesc: {
        en: `Discover ${capName} tourist places and travel information.`,
        es: `Descubre ${capName}: lugares para visitar y guía de turismo.`,
        pt: `Descubra ${capName}: lugares para visitar e guia de turismo.`
      },
      seoKeywords: {
        en: `${capName} tourism, ${capName} travel guide`,
        es: `turismo en ${capName}, viajar a ${capName}`,
        pt: `turismo em ${capName}, viajar para ${capName}`
      },
      touristPlaces: places,
      famousPlacesToVisit: places
    };

    const existingIndex = finalCities.findIndex(c => c.id === key);
    if (existingIndex >= 0) {
      finalCities[existingIndex] = newCityObj;
    } else {
      finalCities.push(newCityObj);
    }
  }
});

fs.writeFileSync(citiesFilePath, JSON.stringify(finalCities, null, 2), 'utf8');

console.log(`✅ RESTORED original schema for Rajasthan & Kerala cities and updated ONLY touristPlaces! Total cities in file: ${finalCities.length}`);
