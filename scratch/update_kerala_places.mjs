import fs from 'fs';
import path from 'path';

const citiesFilePath = path.resolve('src/data/fallback/cities.json');
const cities = JSON.parse(fs.readFileSync(citiesFilePath, 'utf8'));

// Helper to strip HTML tags and trim
function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// 10 Kerala Cities Data
const keralaCitiesData = [
  // 1. KASARAGOD (5 PLACES)
  {
    id: "kasaragod",
    aliases: ["kasargod"],
    name: "Kasaragod",
    nombre: "Kasaragod",
    nome: "Kasaragod",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/kasaragod",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Kasaragod</strong> is the northernmost district of Kerala, famous for the magnificent sea-facing Bekal Fort, serene backwaters, hills, and ancient temples.</p>",
      es: "<p><strong>Kasaragod</strong> es el distrito más septentrional de Kerala, famoso por el imponente Fuerte de Bekal frente al mar, remansos tranquilos y templos antiguos.</p>",
      pt: "<p><strong>Kasaragod</strong> é o distrito mais ao norte de Kerala, famoso pelo imponente Forte de Bekal à beira-mar, backwaters tranquilos e templos antigos.</p>"
    },
    content: {
      en: "<p><strong>Kasaragod</strong> is the northernmost district of Kerala, famous for the magnificent sea-facing Bekal Fort, serene backwaters, hills, and ancient temples.</p>",
      es: "<p><strong>Kasaragod</strong> es el distrito más septentrional de Kerala, famoso por el imponente Fuerte de Bekal frente al mar, remansos tranquilos y templos antiguos.</p>",
      pt: "<p><strong>Kasaragod</strong> é o distrito mais ao norte de Kerala, famoso pelo imponente Forte de Bekal à beira-mar, backwaters tranquilos e templos antigos.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Kasaragod – Land of Forts and Rivers</h2><p>Known as the land of seven languages and cultures, Kasaragod is home to Bekal Fort—the largest fort in Kerala—alongside pristine beaches, Ranipuram hill trekking, and sacred lake temples.</p>",
      es: "<h2>Descubre Kasaragod – Tierra de Fuertes y Ríos</h2><p>Conocida como la tierra de siete idiomas y culturas, Kasaragod alberga el Fuerte Bekal, el más grande de Kerala, junto a hermosas playas y colinas.</p>",
      pt: "<h2>Conheça Kasaragod – Terra de Fortes e Rios</h2><p>Conhecida como a terra de sete idiomas e culturas, Kasaragod abriga o Forte Bekal, o maior de Kerala, junto a praias intocadas e colinas.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Bekal Fort", es: "Fuerte de Bekal", pt: "Forte de Bekal" },
        address: { en: "Bekal Fort Post, Kasaragod, Kerala 671316, India", es: "Kasaragod, Kerala 671316, India", pt: "Kasaragod, Kerala 671316, Índia" },
        description: {
          en: cleanText("Bekal Fort is one of Kerala's largest and best-preserved forts, standing dramatically beside the Arabian Sea. Its massive laterite walls, observation points and sea-facing location make it one of Kasaragod's most iconic heritage attractions."),
          es: cleanText("El Fuerte de Bekal es una de las fortalezas más grandes y mejor conservadas de Kerala. Sus enormes murallas de laterita, miradores y ubicación frente al mar Arábigo lo convierten en una de las principales atracciones históricas de Kasaragod."),
          pt: cleanText("O Forte de Bekal é uma das maiores e mais bem preservadas fortalezas de Kerala. Suas enormes muralhas de laterita, mirantes e localização diante do Mar Arábico fazem dele uma das principais atrações históricas de Kasaragod.")
        },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Bekal Beach", es: "Playa de Bekal", pt: "Praia de Bekal" },
        address: { en: "Bekal Fort, Kasaragod, Kerala 671316, India", es: "Kasaragod, Kerala 671316, India", pt: "Kasaragod, Kerala 671316, Índia" },
        description: {
          en: cleanText("Bekal Beach is a beautiful coastal destination located near Bekal Fort. The golden shoreline, Arabian Sea views and peaceful surroundings make it ideal for relaxing and enjoying Kerala's coastal landscape."),
          es: cleanText("La playa de Bekal es un hermoso destino costero cerca del fuerte. Su arena dorada, vistas al mar Arábigo y ambiente tranquilo la convierten en un lugar ideal para disfrutar del paisaje costero."),
          pt: cleanText("A Praia de Bekal é um belo destino costeiro localizado perto do forte. A areia dourada, as vistas do Mar Arábico e o ambiente tranquilo tornam o local perfeito para apreciar a costa de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Ranipuram Hills", es: "Colinas Ranipuram", pt: "Ranipuram Hills" },
        address: { en: "Ranipuram, Panathady, Kasaragod, Kerala 671532, India", es: "Kasaragod, Kerala 671532, India", pt: "Kasaragod, Kerala 671532, Índia" },
        description: {
          en: cleanText("Ranipuram is a scenic hill destination known for its green landscapes, trekking trails and misty Western Ghats scenery. It is ideal for travellers looking for nature, hiking and peaceful mountain surroundings."),
          es: cleanText("Ranipuram es un destino montañoso conocido por sus paisajes verdes, senderos de trekking y vistas de los Ghats Occidentales. Es ideal para los amantes de la naturaleza y el senderismo."),
          pt: cleanText("Ranipuram é um destino montanhoso conhecido por suas paisagens verdes, trilhas e cenários dos Gates Ocidentais. É ideal para quem gosta de natureza e caminhadas.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Ananthapura Lake Temple", es: "Templo del Lago Ananthapura", pt: "Templo do Lago Ananthapura" },
        address: { en: "Ananthapura, Kumbla, Kasaragod, Kerala 671321, India", es: "Kasaragod, Kerala 671321, India", pt: "Kasaragod, Kerala 671321, Índia" },
        description: {
          en: cleanText("Ananthapura Lake Temple is a unique temple situated in the middle of a small lake. Surrounded by greenery and water, the temple has a peaceful atmosphere and is an important spiritual attraction of northern Kerala."),
          es: cleanText("El Templo del Lago Ananthapura es un templo único situado en medio de un pequeño lago. Rodeado de agua y vegetación, ofrece un ambiente tranquilo y espiritual."),
          pt: cleanText("O Templo do Lago Ananthapura é um templo único localizado no meio de um pequeno lago. Cercado por água e vegetação, oferece uma atmosfera tranquila e espiritual.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Madhur Temple", es: "Templo de Madhur", pt: "Templo Madhur" },
        address: { en: "Madhur, Kasaragod, Kerala 671124, India", es: "Kasaragod, Kerala 671124, India", pt: "Kasaragod, Kerala 671124, Índia" },
        description: {
          en: cleanText("Madhur Temple is a historic temple dedicated to Lord Shiva and known for its distinctive architecture and traditional Kerala temple style. It is an important cultural and religious attraction near Kasaragod."),
          es: cleanText("El Templo de Madhur es un templo histórico dedicado al Señor Shiva y conocido por su arquitectura tradicional de Kerala. Es un importante lugar cultural y religioso."),
          pt: cleanText("O Templo Madhur é um templo histórico dedicado ao Senhor Shiva, conhecido por sua arquitetura tradicional de Kerala. É uma importante atração cultural e religiosa.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Kasaragod Tourism – Bekal Fort & North Kerala Coastal Guide", metaDescription: "Explore Kasaragod: Bekal Fort, Bekal Beach, Ranipuram Hills, Ananthapura Lake Temple and Madhur Temple.", keywords: ["Kasaragod tourism", "Bekal Fort", "Bekal Beach", "Ranipuram Hills", "Kerala backwaters"], tags: ["Kasaragod", "Kerala", "Bekal Fort", "Beach", "Trekking", "Heritage"] },
      es: { metaTitle: "Turismo en Kasaragod – Fuerte Bekal y Costa de Kerala", metaDescription: "Descubre Kasaragod: Fuerte de Bekal, Playa de Bekal, Colinas Ranipuram y Templo del Lago Ananthapura.", keywords: ["turismo en Kasaragod", "Fuerte de Bekal", "Playa de Bekal", "lugares para visitar en Kasaragod"], tags: ["Kasaragod", "Kerala", "Fuerte Bekal", "Playas"] },
      pt: { metaTitle: "Turismo em Kasaragod – Forte Bekal e Costa de Kerala", metaDescription: "Conheça Kasaragod: Forte de Bekal, Praia de Bekal, Ranipuram Hills e Templo do Lago Ananthapura.", keywords: ["turismo em Kasaragod", "Forte de Bekal", "Praia de Bekal", "lugares para visitar em Kasaragod"], tags: ["Kasaragod", "Kerala", "Forte Bekal", "Praias"] }
    }
  },

  // 2. ALLEPPEY / ALAPPUZHA (5 PLACES)
  {
    id: "alleppey",
    aliases: ["alappuzha"],
    name: "Alleppey / Alappuzha",
    nombre: "Alleppey / Alappuzha",
    nome: "Alleppey / Alappuzha",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/alleppey",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Alleppey (Alappuzha)</strong> is the Venice of the East, world-renowned for its emerald backwaters, traditional houseboat cruises, coconut palms, and paddy fields.</p>",
      es: "<p><strong>Alleppey (Alappuzha)</strong> es la Venecia del Este, famosa por sus remansos esmeralda, cruceros en casas flotantes, palmeras y arrozales.</p>",
      pt: "<p><strong>Alleppey (Alappuzha)</strong> é a Veneza do Leste, famosa por seus backwaters esmeralda, cruzeiros em casas-barco, palmeiras e campos de arroz.</p>"
    },
    content: {
      en: "<p><strong>Alleppey (Alappuzha)</strong> is the Venice of the East, world-renowned for its emerald backwaters, traditional houseboat cruises, coconut palms, and paddy fields.</p>",
      es: "<p><strong>Alleppey (Alappuzha)</strong> es la Venecia del Este, famosa por sus remansos esmeralda, cruceros en casas flotantes, palmeras y arrozales.</p>",
      pt: "<p><strong>Alleppey (Alappuzha)</strong> é a Veneza do Leste, famosa por seus backwaters esmeralda, cruzeiros em casas-barco, palmeiras e campos de arroz.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Alleppey – Venice of the East</h2><p>Famous worldwide for its tranquil network of backwater canals, lakes, and lagoons, Alleppey offers unforgettable luxury houseboat stays, Marari Beach, and Kuttanad farming landscapes.</p>",
      es: "<h2>Descubre Alleppey – Venecia del Este</h2><p>Famosa en todo el mundo por sus canales de remansos, lagunas y casas flotantes tradicionalmente llamadas Kettuvallam, además de la playa Marari y Kuttanad.</p>",
      pt: "<h2>Conheça Alleppey – Veneza do Leste</h2><p>Mundialmente famosa por sua rede de canais navegáveis e casas-barco tradicionais, além das praias de Marari e das paisagens agrícolas de Kuttanad.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Alleppey Backwaters", es: "Remansos de Alleppey", pt: "Backwaters de Alleppey" },
        address: { en: "Finishing Point Rd, Alappuzha, Kerala 688013, India", es: "Alappuzha, Kerala 688013, India", pt: "Alappuzha, Kerala 688013, Índia" },
        description: {
          en: cleanText("Alleppey Backwaters are the defining attraction of Alappuzha. A network of canals, lagoons, lakes and villages creates a unique landscape best explored through traditional houseboat cruises. The experience offers beautiful views of Kerala's waterways, coconut palms and rural life."),
          es: cleanText("Los remansos de Alleppey son la principal atracción de Alappuzha. Una red de canales, lagunas, lagos y pueblos crea un paisaje único que puede explorarse en tradicionales casas flotantes."),
          pt: cleanText("Os backwaters de Alleppey são a principal atração de Alappuzha. Uma rede de canais, lagoas, lagos e vilas cria uma paisagem única que pode ser explorada em tradicionais casas-barco.")
        },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Alappuzha Beach", es: "Playa de Alappuzha", pt: "Praia de Alappuzha" },
        address: { en: "Alappuzha Beach, Alappuzha, Kerala 688007, India", es: "Alappuzha, Kerala 688007, India", pt: "Alappuzha, Kerala 688007, Índia" },
        description: {
          en: cleanText("Alappuzha Beach is a popular coastal destination known for its long sandy shoreline, Arabian Sea views and historic pier. It provides a pleasant combination of beach scenery and local coastal culture."),
          es: cleanText("La playa de Alappuzha es conocida por su extensa costa de arena, vistas al mar Arábigo y su histórico muelle. Es un lugar popular para disfrutar del paisaje costero."),
          pt: cleanText("A Praia de Alappuzha é conhecida por sua longa faixa de areia, vistas do Mar Arábico e seu histórico píer. É um destino popular para apreciar a paisagem costeira.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Marari Beach", es: "Marari Beach", pt: "Marari Beach" },
        address: { en: "Mararikulam, Alappuzha, Kerala 688523, India", es: "Alappuzha, Kerala 688523, India", pt: "Alappuzha, Kerala 688523, Índia" },
        description: {
          en: cleanText("Marari Beach is a peaceful coastal destination near Alappuzha, known for its clean sandy shoreline and relaxed atmosphere. It is ideal for travellers looking for a quieter beach experience surrounded by coconut palms."),
          es: cleanText("Marari Beach es una tranquila playa cerca de Alappuzha, conocida por su arena y ambiente relajado. Es ideal para quienes buscan una experiencia costera más tranquila."),
          pt: cleanText("Marari Beach é uma praia tranquila perto de Alappuzha, conhecida por sua areia e atmosfera relaxante. É ideal para quem busca uma experiência costeira mais tranquila.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kuttanad", es: "Kuttanad", pt: "Kuttanad" },
        address: { en: "Kuttanad Region, Alappuzha, Kerala 688504, India", es: "Alappuzha, Kerala 688504, India", pt: "Alappuzha, Kerala 688504, Índia" },
        description: {
          en: cleanText("Kuttanad is a remarkable low-lying agricultural region famous for its paddy fields, canals and waterways. Often called the rice bowl of Kerala, it provides visitors with a glimpse of rural life and the unique landscape of the backwater region."),
          es: cleanText("Kuttanad es una región agrícola de tierras bajas famosa por sus arrozales, canales y vías fluviales. Conocida como el granero de arroz de Kerala, ofrece una visión de la vida rural."),
          pt: cleanText("Kuttanad é uma região agrícola de baixa altitude famosa por seus campos de arroz, canais e vias navegáveis. Conhecida como o celeiro de arroz de Kerala, oferece uma visão da vida rural.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Alappuzha Lighthouse", es: "Faro de Alappuzha", pt: "Farol de Alappuzha" },
        address: { en: "CCSSB Rd, Civil Station Ward, Alappuzha, Kerala 688012, India", es: "Alappuzha, Kerala 688012, India", pt: "Alappuzha, Kerala 688012, Índia" },
        description: {
          en: cleanText("Alappuzha Lighthouse is a historic coastal landmark offering views over the Arabian Sea and surrounding areas. Its distinctive tower and maritime history make it a popular sightseeing attraction in Alappuzha."),
          es: cleanText("El faro de Alappuzha es un histórico monumento costero con vistas al mar Arábigo. Su torre característica y su historia marítima lo convierten en una atracción popular."),
          pt: cleanText("O Farol de Alappuzha é um histórico marco costeiro com vistas para o Mar Arábico. Sua torre característica e história marítima fazem dele uma atração popular.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Alleppey Tourism – Backwaters & Houseboat Cruises in Kerala", metaDescription: "Explore Alleppey: Alleppey Backwaters, Alappuzha Beach, Marari Beach, Kuttanad paddy fields and Alappuzha Lighthouse.", keywords: ["Alleppey tourism", "Alappuzha backwaters", "Houseboat cruise Kerala", "Marari Beach", "Kuttanad"], tags: ["Alleppey", "Kerala", "Backwaters", "Houseboat", "Beach", "Kuttanad"] },
      es: { metaTitle: "Turismo en Alleppey – Remansos y Casas Flotantes en Kerala", metaDescription: "Descubre Alleppey: Remansos de Alleppey, Playa de Alappuzha, Playa Marari, Kuttanad y Faro de Alappuzha.", keywords: ["turismo en Alleppey", "remansos de Kerala", "casas flotantes Alleppey", "lugares para visitar en Alleppey"], tags: ["Alleppey", "Kerala", "Backwaters", "Casas Flotantes"] },
      pt: { metaTitle: "Turismo em Alleppey – Backwaters e Casas-Barco em Kerala", metaDescription: "Conheça Alleppey: Backwaters de Alleppey, Praia de Alappuzha, Marari Beach, Kuttanad e Farol de Alappuzha.", keywords: ["turismo em Alleppey", "backwaters de Kerala", "casas-barco Alleppey", "lugares para visitar em Alleppey"], tags: ["Alleppey", "Kerala", "Backwaters", "Casas-Barco"] }
    }
  },

  // 3. KOTTAYAM (5 PLACES)
  {
    id: "kottayam",
    name: "Kottayam",
    nombre: "Kottayam",
    nome: "Kottayam",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/kottayam",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Kottayam</strong> is known as the Land of Letters, Lakes and Latex. Bordered by the Western Ghats and Vembanad Lake, it is home to Kumarakom backwaters.</p>",
      es: "<p><strong>Kottayam</strong> es la Tierra de Letras, Lagos y Látex. Bordeada por los Ghats Occidentales y el lago Vembanad, alberga los remansos de Kumarakom.</p>",
      pt: "<p><strong>Kottayam</strong> é a Terra de Letras, Lagos e Látex. Cercada pelos Gates Ocidentais e Lago Vembanad, abriga os backwaters de Kumarakom.</p>"
    },
    content: {
      en: "<p><strong>Kottayam</strong> is known as the Land of Letters, Lakes and Latex. Bordered by the Western Ghats and Vembanad Lake, it is home to Kumarakom backwaters.</p>",
      es: "<p><strong>Kottayam</strong> es la Tierra de Letras, Lagos y Látex. Bordeada por los Ghats Occidentales y el lago Vembanad, alberga los remansos de Kumarakom.</p>",
      pt: "<p><strong>Kottayam</strong> é a Terra de Letras, Lagos e Látex. Cercada pelos Gates Ocidentais e Lago Vembanad, abriga os backwaters de Kumarakom.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Kottayam & Kumarakom</h2><p>Famous for rubber plantations, ancient heritage churches, and the world-renowned Kumarakom Bird Sanctuary on the banks of Vembanad Lake.</p>",
      es: "<h2>Descubre Kottayam y Kumarakom</h2><p>Famosa por sus plantaciones de caucho, iglesias históricas y el Santuario de Aves de Kumarakom a orillas del lago Vembanad.</p>",
      pt: "<h2>Conheça Kottayam e Kumarakom</h2><p>Famosa por suas plantações de borracha, igrejas históricas e o Santuário de Aves de Kumarakom às margens do Lago Vembanad.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Kumarakom Backwaters", es: "Remansos de Kumarakom", pt: "Backwaters de Kumarakom" },
        address: { en: "Kumarakom, Kottayam, Kerala 686563, India", es: "Kottayam, Kerala 686563, India", pt: "Kottayam, Kerala 686563, Índia" },
        description: {
          en: cleanText("Peaceful backwaters surrounded by coconut palms, canals and village landscapes. Houseboat cruises are the main experience here."),
          es: cleanText("Tranquilos remansos rodeados de palmeras, canales y paisajes rurales. Los paseos en casas flotantes son la principal experiencia."),
          pt: cleanText("Backwaters tranquilos cercados por palmeiras, canais e paisagens rurais. Os passeios de casa-barco são a principal experiência.")
        },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kumarakom Bird Sanctuary", es: "Santuario de Aves de Kumarakom", pt: "Santuário de Aves de Kumarakom" },
        address: { en: "Kavanattinkara, Kumarakom, Kerala 686563, India", es: "Kottayam, Kerala 686563, India", pt: "Kottayam, Kerala 686563, Índia" },
        description: {
          en: cleanText("A beautiful bird sanctuary beside Vembanad Lake, known for its wetland habitat and variety of resident and migratory birds."),
          es: cleanText("Hermoso santuario de aves junto al lago Vembanad, conocido por sus humedales y aves migratorias."),
          pt: cleanText("Belo santuário de aves junto ao lago Vembanad, conhecido por suas áreas úmidas e aves migratórias.")
        },
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Vembanad Lake", es: "Lago Vembanad", pt: "Lago Vembanad" },
        address: { en: "Vembanad Lake, Kumarakom, Kottayam, Kerala 686563, India", es: "Kottayam, Kerala 686563, India", pt: "Kottayam, Kerala 686563, Índia" },
        description: {
          en: cleanText("Kerala's largest lake forms the scenic centre of the Kumarakom region and is famous for boating, backwaters and beautiful sunsets."),
          es: cleanText("El lago más grande de Kerala forma el centro paisajístico de Kumarakom y es famoso por sus paseos en barco y atardeceres."),
          pt: cleanText("O maior lago de Kerala é o centro paisagístico de Kumarakom e é famoso por passeios de barco e pôr do sol.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Vaikom Mahadeva Temple", es: "Templo Vaikom Mahadeva", pt: "Templo Vaikom Mahadeva" },
        address: { en: "Vaikom, Kottayam, Kerala 686141, India", es: "Kottayam, Kerala 686141, India", pt: "Kottayam, Kerala 686141, Índia" },
        description: {
          en: cleanText("One of Kerala's important Shiva temples, known for its traditional architecture and long-standing religious significance."),
          es: cleanText("Uno de los importantes templos de Shiva de Kerala, conocido por su arquitectura tradicional y relevancia religiosa."),
          pt: cleanText("Um dos importantes templos de Shiva de Kerala, conhecido por sua arquitetura tradicional e importância religiosa.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Illikkal Kallu", es: "Illikkal Kallu", pt: "Illikkal Kallu" },
        address: { en: "Moonnilavu, Erattupetta, Kottayam, Kerala 686586, India", es: "Kottayam, Kerala 686586, India", pt: "Kottayam, Kerala 686586, Índia" },
        description: {
          en: cleanText("A spectacular hill destination featuring rocky peaks, misty landscapes and panoramic Western Ghats views."),
          es: cleanText("Destino montañoso espectacular con picos rocosos, paisajes brumosos y vistas panorámicas de los Ghats Occidentales."),
          pt: cleanText("Destino montanhoso espetacular com picos rochosos, paisagens de neblina e vistas panorâmicas dos Gates Ocidentais.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Kottayam Tourism – Kumarakom Backwaters & Vembanad Lake", metaDescription: "Explore Kottayam: Kumarakom Backwaters, Kumarakom Bird Sanctuary, Vembanad Lake, Vaikom Temple and Illikkal Kallu.", keywords: ["Kottayam tourism", "Kumarakom backwaters", "Vembanad Lake", "Kumarakom Bird Sanctuary", "Illikkal Kallu"], tags: ["Kottayam", "Kerala", "Kumarakom", "Backwaters", "Lake", "Nature"] },
      es: { metaTitle: "Turismo en Kottayam – Remansos de Kumarakom y Lago Vembanad", metaDescription: "Descubre Kottayam: Remansos de Kumarakom, Santuario de Aves, Lago Vembanad y Templo Vaikom.", keywords: ["turismo en Kottayam", "remansos de Kumarakom", "Lago Vembanad", "lugares para visitar en Kottayam"], tags: ["Kottayam", "Kerala", "Kumarakom", "Backwaters"] },
      pt: { metaTitle: "Turismo em Kottayam – Backwaters de Kumarakom e Lago Vembanad", metaDescription: "Conheça Kottayam: Backwaters de Kumarakom, Santuário de Aves, Lago Vembanad e Templo Vaikom.", keywords: ["turismo em Kottayam", "backwaters de Kumarakom", "Lago Vembanad", "lugares para visitar em Kottayam"], tags: ["Kottayam", "Kerala", "Kumarakom", "Backwaters"] }
    }
  },

  // 4. KOLLAM (5 PLACES)
  {
    id: "kollam",
    name: "Kollam",
    nombre: "Kollam",
    nome: "Kollam",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/kollam",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Kollam</strong> is the gateway to Kerala's backwaters and the cashew capital of the world, famous for Ashtamudi Lake and Jatayu Earth Center.</p>",
      es: "<p><strong>Kollam</strong> es la puerta de entrada a los remansos de Kerala, famosa por el lago Ashtamudi y el Jatayu Earth's Center.</p>",
      pt: "<p><strong>Kollam</strong> é a porta de entrada para os backwaters de Kerala, famosa pelo Lago Ashtamudi e pelo Jatayu Earth's Center.</p>"
    },
    content: {
      en: "<p><strong>Kollam</strong> is the gateway to Kerala's backwaters and the cashew capital of the world, famous for Ashtamudi Lake and Jatayu Earth Center.</p>",
      es: "<p><strong>Kollam</strong> es la puerta de entrada a los remansos de Kerala, famosa por el lago Ashtamudi y el Jatayu Earth's Center.</p>",
      pt: "<p><strong>Kollam</strong> é a porta de entrada para os backwaters de Kerala, famosa pelo Lago Ashtamudi e pelo Jatayu Earth's Center.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Kollam – Gateway to the Backwaters</h2><p>Historic port city known for Ashtamudi Lake, the world's largest bird sculpture at Jatayu Earth's Center, Thenmala eco-tourism, and Palaruvi waterfalls.</p>",
      es: "<h2>Descubre Kollam – Puerta a los Remansos</h2><p>Ciudad portuaria histórica conocida por el lago Ashtamudi, la mayor escultura de ave del mundo en Jatayu Earth Center y el ecoturismo en Thenmala.</p>",
      pt: "<h2>Conheça Kollam – Portão para os Backwaters</h2><p>Cidade portuária histórica conhecida pelo Lago Ashtamudi, a maior escultura de ave do mundo no Jatayu Earth Center e ecoturismo em Thenmala.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Ashtamudi Lake", es: "Lago Ashtamudi", pt: "Lago Ashtamudi" },
        address: { en: "Ashtamudi Lake, Kollam, Kerala 691001, India", es: "Kollam, Kerala 691001, India", pt: "Kollam, Kerala 691001, Índia" },
        description: {
          en: cleanText("A vast backwater lake famous for its scenic waterways, coconut-lined shores and traditional boat experiences."),
          es: cleanText("Un gran lago de remansos conocido por sus canales, costas con palmeras y paseos tradicionales en barco."),
          pt: cleanText("Um grande lago de backwaters famoso por seus canais, margens com palmeiras e passeios tradicionais de barco.")
        },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Palaruvi Waterfalls", es: "Cascada Palaruvi", pt: "Cachoeira Palaruvi" },
        address: { en: "Aryankavu, Kollam, Kerala 691309, India", es: "Kollam, Kerala 691309, India", pt: "Kollam, Kerala 691309, Índia" },
        description: {
          en: cleanText("A spectacular waterfall surrounded by lush forests and one of Kollam's popular nature attractions."),
          es: cleanText("Una espectacular cascada rodeada de bosques verdes y una de las principales atracciones naturales de Kollam."),
          pt: cleanText("Uma impressionante cachoeira cercada por florestas exuberantes e uma das principais atrações naturais de Kollam.")
        },
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jatayu Earth’s Center", es: "Jatayu Earth’s Center", pt: "Jatayu Earth’s Center" },
        address: { en: "Jatayu Nature Park Rd, Chadayamangalam, Kollam, Kerala 691534, India", es: "Kollam, Kerala 691534, India", pt: "Kollam, Kerala 691534, Índia" },
        description: {
          en: cleanText("A unique tourism destination known for its giant sculpture of Jatayu, scenic hills and adventure activities."),
          es: cleanText("Un destino único conocido por su enorme escultura de Jatayu, colinas y actividades de aventura."),
          pt: cleanText("Um destino único conhecido pela enorme escultura de Jatayu, colinas e atividades de aventura.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kollam Beach", es: "Playa de Kollam", pt: "Praia de Kollam" },
        address: { en: "Kollam Beach, Kollam, Kerala 691001, India", es: "Kollam, Kerala 691001, India", pt: "Kollam, Kerala 691001, Índia" },
        description: {
          en: cleanText("A popular Arabian Sea beach with a long shoreline, coastal views and a relaxed atmosphere."),
          es: cleanText("Una popular playa del mar Arábigo con una larga costa y un ambiente relajado."),
          pt: cleanText("Uma popular praia do Mar Arábico com longa faixa costeira e ambiente tranquilo.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Thenmala", es: "Thenmala", pt: "Thenmala" },
        address: { en: "Thenmala, Kollam, Kerala 691308, India", es: "Kollam, Kerala 691308, India", pt: "Kollam, Kerala 691308, Índia" },
        description: {
          en: cleanText("India's first planned eco-tourism destination, known for forests, outdoor activities, scenic landscapes and nature-based experiences."),
          es: cleanText("Primer destino de ecoturismo planificado de India, conocido por sus bosques, actividades al aire libre y paisajes naturales."),
          pt: cleanText("Primeiro destino de ecoturismo planejado da Índia, conhecido por florestas, atividades ao ar livre e paisagens naturais.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Kollam Tourism – Ashtamudi Lake & Jatayu Earth Center", metaDescription: "Explore Kollam: Ashtamudi Lake, Palaruvi Waterfalls, Jatayu Earth's Center, Kollam Beach and Thenmala.", keywords: ["Kollam tourism", "Ashtamudi Lake", "Jatayu Earth Center", "Palaruvi Waterfalls", "Thenmala eco tourism"], tags: ["Kollam", "Kerala", "Ashtamudi", "Jatayu", "Backwaters", "Nature"] },
      es: { metaTitle: "Turismo en Kollam – Lago Ashtamudi y Jatayu Earth Center", metaDescription: "Descubre Kollam: Lago Ashtamudi, Cascada Palaruvi, Jatayu Earth Center, Playa de Kollam y Thenmala.", keywords: ["turismo en Kollam", "Lago Ashtamudi", "Jatayu Earth Center", "lugares para visitar en Kollam"], tags: ["Kollam", "Kerala", "Ashtamudi", "Jatayu"] },
      pt: { metaTitle: "Turismo em Kollam – Lago Ashtamudi e Jatayu Earth Center", metaDescription: "Conheça Kollam: Lago Ashtamudi, Cachoeira Palaruvi, Jatayu Earth Center, Praia de Kollam e Thenmala.", keywords: ["turismo em Kollam", "Lago Ashtamudi", "Jatayu Earth Center", "lugares para visitar em Kollam"], tags: ["Kollam", "Kerala", "Ashtamudi", "Jatayu"] }
    }
  },

  // 5. THRISSUR (5 PLACES)
  {
    id: "thrissur",
    name: "Thrissur",
    nombre: "Thrissur",
    nome: "Thrissur",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/thrissur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Thrissur</strong> is the Cultural Capital of Kerala, celebrated for Vadakkunnathan Temple, the grand Thrissur Pooram festival, and Athirappilly Waterfalls.</p>",
      es: "<p><strong>Thrissur</strong> es la Capital Cultural de Kerala, famosa por el Templo Vadakkunnathan, el festival Thrissur Pooram y las cascadas de Athirappilly.</p>",
      pt: "<p><strong>Thrissur</strong> é a Capital Cultural de Kerala, famosa pelo Templo Vadakkunnathan, o festival Thrissur Pooram e as cachoeiras de Athirappilly.</p>"
    },
    content: {
      en: "<p><strong>Thrissur</strong> is the Cultural Capital of Kerala, celebrated for Vadakkunnathan Temple, the grand Thrissur Pooram festival, and Athirappilly Waterfalls.</p>",
      es: "<p><strong>Thrissur</strong> es la Capital Cultural de Kerala, famosa por el Templo Vadakkunnathan, el festival Thrissur Pooram y las cascadas de Athirappilly.</p>",
      pt: "<p><strong>Thrissur</strong> é a Capital Cultural de Kerala, famosa pelo Templo Vadakkunnathan, o festival Thrissur Pooram e as cachoeiras de Athirappilly.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Thrissur – Cultural Capital of Kerala</h2><p>Center for classical performing arts like Kathakali, magnificent temples, royal palaces, and the Niagra of India—Athirappilly Waterfalls.</p>",
      es: "<h2>Descubre Thrissur – Capital Cultural de Kerala</h2><p>Centro de artes escénicas tradicionales como Kathakali, templos históricos, palacios reales y las espectaculares cascadas de Athirappilly.</p>",
      pt: "<h2>Conheça Thrissur – Capital Cultural de Kerala</h2><p>Centro de artes performáticas como o Kathakali, templos magníficos, palácios reais e as impressionantes cachoeiras de Athirappilly.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Vadakkunnathan Temple", es: "Templo Vadakkunnathan", pt: "Templo Vadakkunnathan" },
        address: { en: "Swaraj Round, Thrissur, Kerala 680001, India", es: "Thrissur, Kerala 680001, India", pt: "Thrissur, Kerala 680001, Índia" },
        description: {
          en: cleanText("A historic Shiva temple at the heart of Thrissur, famous for traditional Kerala architecture and its connection with Thrissur Pooram."),
          es: cleanText("Histórico templo de Shiva en el centro de Thrissur, famoso por su arquitectura tradicional y su relación con Thrissur Pooram."),
          pt: cleanText("Histórico templo de Shiva no centro de Thrissur, famoso pela arquitetura tradicional de Kerala e pelo Thrissur Pooram.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Athirappilly Waterfalls", es: "Cascadas de Athirappilly", pt: "Cachoeiras de Athirappilly" },
        address: { en: "Athirappilly, Thrissur, Kerala 680722, India", es: "Thrissur, Kerala 680722, India", pt: "Thrissur, Kerala 680722, Índia" },
        description: {
          en: cleanText("Kerala's famous waterfall surrounded by lush forests and one of the state's most spectacular natural attractions."),
          es: cleanText("Famosa cascada de Kerala rodeada de bosques y una de las atracciones naturales más espectaculares del estado."),
          pt: cleanText("Famosa cachoeira de Kerala cercada por florestas e uma das atrações naturais mais impressionantes do estado.")
        },
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Shakthan Thampuran Palace", es: "Palacio Shakthan Thampuran", pt: "Palácio Shakthan Thampuran" },
        address: { en: "Stadium Rd, Thrissur, Kerala 680020, India", es: "Thrissur, Kerala 680020, India", pt: "Thrissur, Kerala 680020, Índia" },
        description: {
          en: cleanText("A historic palace and museum associated with the former rulers of Cochin, showcasing Kerala's royal heritage and history."),
          es: cleanText("Palacio histórico y museo relacionado con los antiguos gobernantes de Cochin, que muestra el patrimonio real de Kerala."),
          pt: cleanText("Palácio histórico e museu associado aos antigos governantes de Cochin, mostrando o patrimônio real de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kerala Kalamandalam", es: "Kerala Kalamandalam", pt: "Kerala Kalamandalam" },
        address: { en: "Cheruthuruthy, Thrissur, Kerala 679531, India", es: "Thrissur, Kerala 679531, India", pt: "Thrissur, Kerala 679531, Índia" },
        description: {
          en: cleanText("A renowned centre for traditional Kerala performing arts, especially Kathakali and classical dance traditions."),
          es: cleanText("Famoso centro de artes escénicas tradicionales de Kerala, especialmente Kathakali y danza clásica."),
          pt: cleanText("Famoso centro de artes performáticas tradicionais de Kerala, especialmente Kathakali e dança clássica.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Thrissur Zoo & State Museum", es: "Zoológico y Museo de Thrissur", pt: "Zoológico e Museu de Thrissur" },
        address: { en: "Chembookavu, Thrissur, Kerala 680020, India", es: "Thrissur, Kerala 680020, India", pt: "Thrissur, Kerala 680020, Índia" },
        description: {
          en: cleanText("A popular attraction combining a zoological park with museum collections showcasing Kerala's natural and cultural heritage."),
          es: cleanText("Atracción popular que combina un zoológico con colecciones de museo sobre el patrimonio natural y cultural de Kerala."),
          pt: cleanText("Atração popular que combina zoológico e coleções de museu relacionadas ao patrimônio natural e cultural de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Thrissur Tourism – Cultural Capital & Athirappilly Falls", metaDescription: "Explore Thrissur: Vadakkunnathan Temple, Athirappilly Waterfalls, Shakthan Thampuran Palace, Kerala Kalamandalam and Zoo.", keywords: ["Thrissur tourism", "Athirappilly Waterfalls", "Vadakkunnathan Temple", "Thrissur Pooram", "Kerala Kalamandalam"], tags: ["Thrissur", "Kerala", "Athirappilly", "Culture", "Temple", "Kathakali"] },
      es: { metaTitle: "Turismo en Thrissur – Capital Cultural y Cascadas Athirappilly", metaDescription: "Descubre Thrissur: Templo Vadakkunnathan, Cascadas Athirappilly, Palacio Shakthan Thampuran y Kerala Kalamandalam.", keywords: ["turismo en Thrissur", "Cascadas Athirappilly", "Templo Vadakkunnathan", "lugares para visitar en Thrissur"], tags: ["Thrissur", "Kerala", "Cultura", "Cascadas"] },
      pt: { metaTitle: "Turismo em Thrissur – Capital Cultural e Cachoeiras Athirappilly", metaDescription: "Conheça Thrissur: Templo Vadakkunnathan, Cachoeiras de Athirappilly, Palácio Shakthan Thampuran e Kerala Kalamandalam.", keywords: ["turismo em Thrissur", "Cachoeiras Athirappilly", "Templo Vadakkunnathan", "lugares para visitar em Thrissur"], tags: ["Thrissur", "Kerala", "Cultura", "Cachoeiras"] }
    }
  },

  // 6. THEKKADY (5 PLACES)
  {
    id: "thekkady",
    name: "Thekkady",
    nombre: "Thekkady",
    nome: "Thekkady",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/thekkady",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Thekkady</strong> is Kerala's wildlife sanctuary hub, famous for Periyar National Park, wild elephant sightings, spice plantations, and lake boat safaris.</p>",
      es: "<p><strong>Thekkady</strong> es el centro de vida silvestre de Kerala, famoso por el Parque Nacional Periyar, avistamiento de elefantes y plantaciones de especias.</p>",
      pt: "<p><strong>Thekkady</strong> é o centro de vida selvagem de Kerala, famoso pelo Parque Nacional Periyar, avistamento de elefantes e plantações de especiarias.</p>"
    },
    content: {
      en: "<p><strong>Thekkady</strong> is Kerala's wildlife sanctuary hub, famous for Periyar National Park, wild elephant sightings, spice plantations, and lake boat safaris.</p>",
      es: "<p><strong>Thekkady</strong> es el centro de vida silvestre de Kerala, famoso por el Parque Nacional Periyar, avistamiento de elefantes y plantaciones de especias.</p>",
      pt: "<p><strong>Thekkady</strong> é o centro de vida selvagem de Kerala, famoso pelo Parque Nacional Periyar, avistamento de elefantes e plantações de especiarias.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Thekkady – Periyar Tiger Reserve</h2><p>Located in Idukki district near Kumily, Thekkady offers boat safaris on Periyar Lake, elephant interactions, bamboo rafting, and guided tours of aromatic cardamom and pepper gardens.</p>",
      es: "<h2>Descubre Thekkady – Reserva de Tigres de Periyar</h2><p>Ubicada en Idukki cerca de Kumily, Thekkady ofrece safaris en barco por el lago Periyar y paseos por jardines de cardamomo y pimienta.</p>",
      pt: "<h2>Conheça Thekkady – Reserva de Tigres de Periyar</h2><p>Localizada em Idukki perto de Kumily, Thekkady oferece safáris de barco no Lago Periyar e visitas a jardins de cardamomo e pimenta.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Periyar Wildlife Sanctuary", es: "Santuario de Vida Silvestre Periyar", pt: "Santuário de Vida Selvagem Periyar" },
        address: { en: "Thekkady, Idukki, Kerala 685536, India", es: "Thekkady, Kerala 685536, India", pt: "Thekkady, Kerala 685536, Índia" },
        description: {
          en: cleanText("A famous wildlife reserve known for elephants, diverse forests, birds and scenic landscapes around Periyar Lake."),
          es: cleanText("Famosa reserva de vida silvestre conocida por sus elefantes, bosques, aves y paisajes alrededor del lago Periyar."),
          pt: cleanText("Famosa reserva de vida selvagem conhecida por elefantes, florestas, aves e paisagens ao redor do Lago Periyar.")
        },
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Periyar Lake", es: "Lago Periyar", pt: "Lago Periyar" },
        address: { en: "Periyar Tiger Reserve, Thekkady, Kerala 685536, India", es: "Thekkady, Kerala 685536, India", pt: "Thekkady, Kerala 685536, Índia" },
        description: {
          en: cleanText("A scenic lake inside the Periyar reserve, famous for boat cruises through forested surroundings and wildlife viewing."),
          es: cleanText("Lago pintoresco dentro de la reserva de Periyar, famoso por sus paseos en barco y observación de fauna."),
          pt: cleanText("Lago cênico dentro da reserva de Periyar, famoso pelos passeios de barco e observação da vida selvagem.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Mangala Devi Temple", es: "Templo Mangala Devi", pt: "Templo Mangala Devi" },
        address: { en: "Periyar Tiger Reserve, Thekkady, Kerala 685536, India", es: "Thekkady, Kerala 685536, India", pt: "Thekkady, Kerala 685536, Índia" },
        description: {
          en: cleanText("An ancient temple located in the forested hills near Thekkady, offering scenic mountain views and a peaceful atmosphere."),
          es: cleanText("Antiguo templo situado en las colinas boscosas cerca de Thekkady, con vistas panorámicas y ambiente tranquilo."),
          pt: cleanText("Antigo templo localizado nas colinas florestadas perto de Thekkady, com belas vistas e atmosfera tranquila.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Thekkady Spice Gardens", es: "Jardines de Especias de Thekkady", pt: "Jardins de Especiarias de Thekkady" },
        address: { en: "Kumily Road, Thekkady, Kerala 685509, India", es: "Thekkady, Kerala 685509, India", pt: "Thekkady, Kerala 685509, Índia" },
        description: {
          en: cleanText("Spice gardens offer visitors an introduction to Kerala's famous cultivation of cardamom, pepper, cinnamon and other spices."),
          es: cleanText("Los jardines de especias permiten conocer el cultivo de cardamomo, pimienta, canela y otras especias de Kerala."),
          pt: cleanText("Os jardins de especiarias permitem conhecer o cultivo de cardamomo, pimenta, canela e outras especiarias de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Elephant Junction", es: "Elephant Junction", pt: "Elephant Junction" },
        address: { en: "Attappallam, Kumily, Thekkady, Kerala 685509, India", es: "Thekkady, Kerala 685509, India", pt: "Thekkady, Kerala 685509, Índia" },
        description: {
          en: cleanText("A popular tourism centre offering visitors opportunities to learn about elephants and experience activities connected with Kerala's traditional relationship with these animals."),
          es: cleanText("Centro turístico donde los visitantes pueden conocer los elefantes y aprender sobre la relación tradicional de Kerala con estos animales."),
          pt: cleanText("Centro turístico onde os visitantes podem conhecer elefantes e aprender sobre a relação tradicional de Kerala com esses animais.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Thekkady Tourism – Periyar Wildlife & Spice Plantation Guide", metaDescription: "Explore Thekkady: Periyar Wildlife Sanctuary, Periyar Lake, Mangala Devi Temple, Spice Gardens and Elephant Junction.", keywords: ["Thekkady tourism", "Periyar National Park", "Periyar Lake boat safari", "Thekkady spice plantation", "Elephant Junction"], tags: ["Thekkady", "Kerala", "Periyar", "Wildlife", "Elephants", "Spices"] },
      es: { metaTitle: "Turismo en Thekkady – Reserva Periyar y Plantaciones de Especias", metaDescription: "Descubre Thekkady: Parque Nacional Periyar, Lago Periyar, Templo Mangala Devi, Jardines de Especias y Elephant Junction.", keywords: ["turismo en Thekkady", "Reserva de Periyar", "safari en barco Thekkady", "especias de Kerala"], tags: ["Thekkady", "Kerala", "Periyar", "Vida Silvestre", "Especias"] },
      pt: { metaTitle: "Turismo em Thekkady – Reserva Periyar e Plantações de Especiarias", metaDescription: "Conheça Thekkady: Parque Nacional Periyar, Lago Periyar, Templo Mangala Devi, Jardins de Especiarias e Elephant Junction.", keywords: ["turismo em Thekkady", "Reserva de Periyar", "safári de barco Thekkady", "especiarias de Kerala"], tags: ["Thekkady", "Kerala", "Periyar", "Vida Selvagem", "Especiarias"] }
    }
  },

  // 7. MUNNAR (6 PLACES)
  {
    id: "munnar",
    name: "Munnar",
    nombre: "Munnar",
    nome: "Munnar",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/munnar",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Munnar</strong> is Kerala's hill station capital, famous for rolling green tea plantations, misty mountains, Eravikulam National Park, and cool climate.</p>",
      es: "<p><strong>Munnar</strong> es la principal estación de montaña de Kerala, famosa por sus colinas cubiertas de té, montañas brumosas y clima fresco.</p>",
      pt: "<p><strong>Munnar</strong> é a principal estação de montanha de Kerala, famosa por suas colinas cobertas de chá, montanhas de neblina e clima fresco.</p>"
    },
    content: {
      en: "<p><strong>Munnar</strong> is Kerala's hill station capital, famous for rolling green tea plantations, misty mountains, Eravikulam National Park, and cool climate.</p>",
      es: "<p><strong>Munnar</strong> es la principal estación de montaña de Kerala, famosa por sus colinas cubiertas de té, montañas brumosas y clima fresco.</p>",
      pt: "<p><strong>Munnar</strong> é a principal estação de montanha de Kerala, famosa por suas colinas cobertas de chá, montanhas de neblina e clima fresco.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Munnar – Tea Garden Haven</h2><p>Situated in the Western Ghats at 1,600 metres, Munnar boasts endless tea estates, the endangered Nilgiri Tahr at Eravikulam, Mattupetty Dam, Top Station, and tranquil mountain lakes.</p>",
      es: "<h2>Descubre Munnar – Paraíso de las Plantaciones de Té</h2><p>Ubicada en los Ghats Occidentales a 1,600 metros de altitud, destaca por sus plantaciones de té, el Nilgiri Tahr en Eravikulam y los miradores de Top Station.</p>",
      pt: "<h2>Conheça Munnar – Paraíso das Plantações de Chá</h2><p>Localizada nos Gates Ocidentais a 1.600 metros de altitude, destaca-se por suas plantações de chá, o Nilgiri Tahr em Eravikulam e os mirantes de Top Station.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Munnar Tea Gardens", es: "Plantaciones de Té de Munnar", pt: "Plantações de Chá de Munnar" },
        address: { en: "Munnar, Idukki District, Kerala 685612, India", es: "Munnar, Kerala 685612, India", pt: "Munnar, Kerala 685612, Índia" },
        description: {
          en: cleanText("Munnar's rolling tea plantations are among its most iconic landscapes, covering the hills with endless shades of green and offering spectacular viewpoints."),
          es: cleanText("Las plantaciones de té de Munnar son uno de sus paisajes más emblemáticos, cubriendo las colinas con extensos campos verdes."),
          pt: cleanText("As plantações de chá de Munnar estão entre suas paisagens mais famosas, cobrindo as colinas com extensos campos verdes.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Eravikulam National Park", es: "Parque Nacional Eravikulam", pt: "Parque Nacional Eravikulam" },
        address: { en: "Kannan Devan Hills, Munnar, Kerala 685612, India", es: "Munnar, Kerala 685612, India", pt: "Munnar, Kerala 685612, Índia" },
        description: {
          en: cleanText("A famous mountain national park known for its rolling grasslands, wildlife and spectacular views of the Western Ghats."),
          es: cleanText("Parque nacional de montaña famoso por sus praderas, fauna y espectaculares vistas de los Ghats Occidentales."),
          pt: cleanText("Parque nacional montanhoso famoso por suas pradarias, vida selvagem e vistas dos Gates Ocidentais.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Mattupetty Dam", es: "Presa Mattupetty", pt: "Barragem Mattupetty" },
        address: { en: "Mattupetty, Munnar, Kerala 685616, India", es: "Munnar, Kerala 685616, India", pt: "Munnar, Kerala 685616, Índia" },
        description: {
          en: cleanText("A scenic dam surrounded by green hills, forests and plantations, popular for boating and enjoying the mountain landscape."),
          es: cleanText("Presa rodeada de colinas verdes, bosques y plantaciones, popular para paseos en barco y disfrutar del paisaje."),
          pt: cleanText("Barragem cercada por colinas verdes, florestas e plantações, popular para passeios de barco e paisagens montanhosas.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Top Station", es: "Top Station", pt: "Top Station" },
        address: { en: "Top Station, Highway, Munnar, Kerala 685616, India", es: "Munnar, Kerala 685616, India", pt: "Munnar, Kerala 685616, Índia" },
        description: {
          en: cleanText("One of Munnar's most famous viewpoints, offering panoramic views of the Western Ghats and surrounding valleys."),
          es: cleanText("Uno de los miradores más famosos de Munnar, con vistas panorámicas de los Ghats Occidentales y los valles."),
          pt: cleanText("Um dos mirantes mais famosos de Munnar, com vistas panorâmicas dos Gates Ocidentais e dos vales.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Echo Point", es: "Echo Point", pt: "Echo Point" },
        address: { en: "Mattupetty Top Station Highway, Munnar, Kerala 685616, India", es: "Munnar, Kerala 685616, India", pt: "Munnar, Kerala 685616, Índia" },
        description: {
          en: cleanText("A scenic destination beside a lake and forested hills, famous for its natural echo phenomenon and peaceful mountain surroundings."),
          es: cleanText("Destino pintoresco junto a un lago y colinas boscosas, famoso por su eco natural y paisajes tranquilos."),
          pt: cleanText("Destino cênico junto a um lago e colinas florestadas, famoso pelo fenômeno natural de eco.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kundala Lake", es: "Lago Kundala", pt: "Lago Kundala" },
        address: { en: "Kundala, Munnar, Kerala 685615, India", es: "Munnar, Kerala 685615, India", pt: "Munnar, Kerala 685615, Índia" },
        description: {
          en: cleanText("A beautiful mountain lake surrounded by tea plantations and forests, popular for boating and scenic views."),
          es: cleanText("Hermoso lago de montaña rodeado de plantaciones de té y bosques, popular para paseos en barco."),
          pt: cleanText("Belo lago de montanha cercado por plantações de chá e florestas, popular para passeios de barco.")
        },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Munnar Tourism – Tea Plantations & Western Ghats Hill Station", metaDescription: "Explore Munnar: Munnar Tea Gardens, Eravikulam National Park, Mattupetty Dam, Top Station, Echo Point and Kundala Lake.", keywords: ["Munnar tourism", "Munnar tea gardens", "Eravikulam National Park", "Top Station Munnar", "Mattupetty Dam"], tags: ["Munnar", "Kerala", "Tea Gardens", "Hill Station", "Western Ghats", "Nature"] },
      es: { metaTitle: "Turismo en Munnar – Plantaciones de Té y Estación de Montaña", metaDescription: "Descubre Munnar: Plantaciones de té, Parque Nacional Eravikulam, Presa Mattupetty, Top Station y Lago Kundala.", keywords: ["turismo en Munnar", "plantaciones de té Munnar", "Parque Nacional Eravikulam", "lugares para visitar en Munnar"], tags: ["Munnar", "Kerala", "Té", "Montaña", "Naturaleza"] },
      pt: { metaTitle: "Turismo em Munnar – Plantações de Chá e Montanhas de Kerala", metaDescription: "Conheça Munnar: Plantações de chá, Parque Nacional Eravikulam, Barragem Mattupetty, Top Station e Lago Kundala.", keywords: ["turismo em Munnar", "plantações de chá Munnar", "Parque Nacional Eravikulam", "lugares para visitar em Munnar"], tags: ["Munnar", "Kerala", "Chá", "Montanhas", "Natureza"] }
    }
  },

  // 8. KOCHI (6 PLACES)
  {
    id: "kochi",
    aliases: ["cochin"],
    name: "Kochi",
    nombre: "Kochi",
    nome: "Kochi",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/kochi",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Kochi (Cochin)</strong> is the Commercial Capital of Kerala, renowned for Fort Kochi, Chinese fishing nets, colonial heritage, spice markets, and art bienniales.</p>",
      es: "<p><strong>Kochi (Cochín)</strong> es la capital comercial de Kerala, famosa por Fort Kochi, redes de pesca chinas, arquitectura colonial y su mercado de especias.</p>",
      pt: "<p><strong>Kochi (Cochim)</strong> é a capital comercial de Kerala, famosa por Fort Kochi, redes de pesca chinesas, arquitetura colonial e mercado de especiarias.</p>"
    },
    content: {
      en: "<p><strong>Kochi (Cochin)</strong> is the Commercial Capital of Kerala, renowned for Fort Kochi, Chinese fishing nets, colonial heritage, spice markets, and art bienniales.</p>",
      es: "<p><strong>Kochi (Cochín)</strong> es la capital comercial de Kerala, famosa por Fort Kochi, redes de pesca chinas, arquitectura colonial y su mercado de especias.</p>",
      pt: "<p><strong>Kochi (Cochim)</strong> é a capital comercial de Kerala, famosa por Fort Kochi, redes de pesca chinesas, arquitetura colonial e mercado de especiarias.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Kochi – Queen of the Arabian Sea</h2><p>For centuries a major spice trading hub, Kochi blends Portuguese, Dutch, British, and Chinese influences across historic Fort Kochi, Mattancherry Palace, and Jew Town.</p>",
      es: "<h2>Descubre Kochi – Reina del Mar Arábigo</h2><p>Gran centro de comercio de especias durante siglos, Kochi combina influencias portuguesas, holandesas, británicas y chinas en Fort Kochi y Jew Town.</p>",
      pt: "<h2>Conheça Kochi – Rainha do Mar Arábico</h2><p>Importante centro de comércio de especiarias por séculos, Kochi combina influências portuguesas, holandesas, britânicas e chinesas em Fort Kochi e Jew Town.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Fort Kochi", es: "Fort Kochi", pt: "Fort Kochi" },
        address: { en: "Fort Kochi, Kochi, Kerala 682001, India", es: "Kochi, Kerala 682001, India", pt: "Kochi, Kerala 682001, Índia" },
        description: {
          en: cleanText("Fort Kochi is a historic neighbourhood famous for colonial architecture, heritage streets, churches, cafés and cultural landmarks."),
          es: cleanText("Fort Kochi es un barrio histórico famoso por su arquitectura colonial, calles patrimoniales, iglesias y ambiente cultural."),
          pt: cleanText("Fort Kochi é um bairro histórico famoso por sua arquitetura colonial, ruas históricas, igrejas e ambiente cultural.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Chinese Fishing Nets", es: "Redes de Pesca Chinas", pt: "Redes de Pesca Chinesas" },
        address: { en: "Tower Rd, Fort Kochi, Kochi, Kerala 682001, India", es: "Kochi, Kerala 682001, India", pt: "Kochi, Kerala 682001, Índia" },
        description: {
          en: cleanText("These iconic cantilevered fishing nets are one of Kochi's most recognizable sights and reflect the city's historic maritime culture."),
          es: cleanText("Estas famosas redes de pesca en voladizo son uno de los símbolos de Kochi y reflejan su antigua cultura marítima."),
          pt: cleanText("Essas famosas redes de pesca são um dos símbolos de Kochi e refletem a antiga cultura marítima da cidade.")
        },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Mattancherry Palace", es: "Palacio Mattancherry", pt: "Palácio Mattancherry" },
        address: { en: "Mattancherry, Kochi, Kerala 682002, India", es: "Kochi, Kerala 682002, India", pt: "Kochi, Kerala 682002, Índia" },
        description: {
          en: cleanText("Mattancherry Palace, also known as the Dutch Palace, is a historic palace famous for its murals, royal collections and Kerala-style architecture."),
          es: cleanText("El Palacio Mattancherry, conocido como Palacio Holandés, es famoso por sus murales, colecciones reales y arquitectura tradicional de Kerala."),
          pt: cleanText("O Palácio Mattancherry, conhecido como Palácio Holandês, é famoso por seus murais, coleções reais e arquitetura tradicional de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "St. Francis Church", es: "Iglesia de San Francisco", pt: "Igreja de São Francisco" },
        address: { en: "Headpost Office Ward, Fort Kochi, Kochi, Kerala 682001, India", es: "Kochi, Kerala 682001, India", pt: "Kochi, Kerala 682001, Índia" },
        description: {
          en: cleanText("St. Francis Church is one of India's oldest European-built churches and an important historic landmark of Fort Kochi."),
          es: cleanText("La Iglesia de San Francisco es una de las iglesias europeas más antiguas construidas en India y un importante monumento histórico."),
          pt: cleanText("A Igreja de São Francisco é uma das mais antigas igrejas construídas por europeus na Índia e um importante monumento histórico.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Jew Town & Paradesi Synagogue", es: "Jew Town y Sinagoga Paradesi", pt: "Jew Town e Sinagoga Paradesi" },
        address: { en: "Jew Town, Mattancherry, Kochi, Kerala 682002, India", es: "Kochi, Kerala 682002, India", pt: "Kochi, Kerala 682002, Índia" },
        description: {
          en: cleanText("Jew Town is a historic quarter known for antique shops, heritage buildings and the famous Paradesi Synagogue."),
          es: cleanText("Jew Town es un barrio histórico conocido por sus tiendas de antigüedades, edificios patrimoniales y la famosa Sinagoga Paradesi."),
          pt: cleanText("Jew Town é um bairro histórico conhecido por lojas de antiguidades, edifícios históricos e a famosa Sinagoga Paradesi.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Marine Drive Kochi", es: "Marine Drive Kochi", pt: "Marine Drive Kochi" },
        address: { en: "Marine Drive, Ernakulam, Kochi, Kerala 682031, India", es: "Kochi, Kerala 682031, India", pt: "Kochi, Kerala 682031, Índia" },
        description: {
          en: cleanText("Marine Drive is a popular waterfront promenade offering views of Kochi's harbour, backwaters and surrounding cityscape."),
          es: cleanText("Marine Drive es un paseo marítimo popular con vistas al puerto, los backwaters y el paisaje urbano de Kochi."),
          pt: cleanText("Marine Drive é um popular passeio à beira-mar com vistas do porto, backwaters e paisagem urbana de Kochi.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Kochi Tourism – Fort Kochi, Colonial Heritage & Backwaters", metaDescription: "Explore Kochi: Fort Kochi, Chinese Fishing Nets, Mattancherry Palace, St Francis Church, Jew Town and Marine Drive.", keywords: ["Kochi tourism", "Fort Kochi", "Chinese fishing nets", "Mattancherry Palace", "Marine Drive Kochi"], tags: ["Kochi", "Kerala", "Fort Kochi", "Heritage", "Colonial", "Marine Drive"] },
      es: { metaTitle: "Turismo en Kochi – Fort Kochi, Patrimonio Colonial y Puerto", metaDescription: "Descubre Kochi: Fort Kochi, Redes de Pesca Chinas, Palacio Mattancherry, Iglesia de San Francisco y Jew Town.", keywords: ["turismo en Kochi", "Fort Kochi", "redes de pesca chinas", "lugares para visitar en Kochi"], tags: ["Kochi", "Kerala", "Fort Kochi", "Patrimonio"] },
      pt: { metaTitle: "Turismo em Kochi – Fort Kochi, Patrimônio Colonial e Porto", metaDescription: "Conheça Kochi: Fort Kochi, Redes de Pesca Chinesas, Palácio Mattancherry, Igreja de São Francisco e Jew Town.", keywords: ["turismo em Kochi", "Fort Kochi", "redes de pesca chinesas", "lugares para visitar em Kochi"], tags: ["Kochi", "Kerala", "Fort Kochi", "Patrimônio"] }
    }
  },

  // 9. THIRUVANANTHAPURAM (6 PLACES)
  {
    id: "thiruvananthapuram",
    aliases: ["trivandrum"],
    name: "Thiruvananthapuram",
    nombre: "Thiruvananthapuram",
    nome: "Thiruvananthapuram",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Thiruvananthapuram (Trivandrum)</strong> is the Capital of Kerala, famous for Sree Padmanabhaswamy Temple, Kovalam Beach, and Travancore royal heritage.</p>",
      es: "<p><strong>Thiruvananthapuram (Trivandrum)</strong> es la capital de Kerala, famosa por el Templo Sree Padmanabhaswamy, la playa de Kovalam y palacios reales.</p>",
      pt: "<p><strong>Thiruvananthapuram (Trivandrum)</strong> é a capital de Kerala, famosa pelo Templo Sree Padmanabhaswamy, a praia de Kovalam e palácios reais.</p>"
    },
    content: {
      en: "<p><strong>Thiruvananthapuram (Trivandrum)</strong> is the Capital of Kerala, famous for Sree Padmanabhaswamy Temple, Kovalam Beach, and Travancore royal heritage.</p>",
      es: "<p><strong>Thiruvananthapuram (Trivandrum)</strong> es la capital de Kerala, famosa por el Templo Sree Padmanabhaswamy, la playa de Kovalam y palacios reales.</p>",
      pt: "<p><strong>Thiruvananthapuram (Trivandrum)</strong> é a capital de Kerala, famosa pelo Templo Sree Padmanabhaswamy, a praia de Kovalam e palácios reais.</p>"
    },
    fullDescription: {
      en: "<h2>Discover Thiruvananthapuram – Capital of Kerala</h2><p>Home to the wealthiest temple in the world—Sree Padmanabhaswamy—alongside world-famous Kovalam lighthouse beach, Napier Museum, and lush hill sanctuaries.</p>",
      es: "<h2>Descubre Thiruvananthapuram – Capital de Kerala</h2><p>Hogar del célebre Templo Sree Padmanabhaswamy, la famosa playa con faro de Kovalam, el Museo Napier y hermosos espacios culturales.</p>",
      pt: "<h2>Conheça Thiruvananthapuram – Capital de Kerala</h2><p>Lar do famoso Templo Sree Padmanabhaswamy, da praia com farol de Kovalam, do Museu Napier e de belos espaços culturais.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "Sree Padmanabhaswamy Temple", es: "Templo Sree Padmanabhaswamy", pt: "Templo Sree Padmanabhaswamy" },
        address: { en: "West Fort, East Fort, Pazhavangadi, Thiruvananthapuram, Kerala 695023, India", es: "Thiruvananthapuram, Kerala 695023, India", pt: "Thiruvananthapuram, Kerala 695023, Índia" },
        description: {
          en: cleanText("One of Kerala's most important temples, dedicated to Lord Vishnu and renowned for its traditional architecture and spiritual significance."),
          es: cleanText("Uno de los templos más importantes de Kerala, dedicado al Señor Vishnu y famoso por su arquitectura tradicional."),
          pt: cleanText("Um dos templos mais importantes de Kerala, dedicado ao Senhor Vishnu e famoso por sua arquitetura tradicional.")
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kovalam Beach", es: "Playa de Kovalam", pt: "Praia de Kovalam" },
        address: { en: "Kovalam, Thiruvananthapuram, Kerala 695527, India", es: "Thiruvananthapuram, Kerala 695527, India", pt: "Thiruvananthapuram, Kerala 695527, Índia" },
        description: {
          en: cleanText("Kovalam is one of Kerala's most famous beach destinations, known for its curved coastline, lighthouse and Arabian Sea views."),
          es: cleanText("Kovalam es uno de los destinos de playa más famosos de Kerala, conocido por su costa curva, faro y vistas al mar Arábigo."),
          pt: cleanText("Kovalam é um dos destinos de praia mais famosos de Kerala, conhecido por sua costa curva, farol e vistas do Mar Arábico.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Napier Museum", es: "Museo Napier", pt: "Museu Napier" },
        address: { en: "LMS Vellayambalam Rd, Museum, Palayam, Thiruvananthapuram, Kerala 695033, India", es: "Thiruvananthapuram, Kerala 695033, India", pt: "Thiruvananthapuram, Kerala 695033, Índia" },
        description: {
          en: cleanText("Napier Museum is a prominent cultural museum known for its distinctive architecture and collections of art, sculptures and historical objects."),
          es: cleanText("El Museo Napier es un importante museo cultural conocido por su arquitectura distintiva y sus colecciones de arte y objetos históricos."),
          pt: cleanText("O Museu Napier é um importante museu cultural conhecido por sua arquitetura distinta e coleções de arte e objetos históricos.")
        },
        image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Veli Tourist Village", es: "Pueblo Turístico de Veli", pt: "Vila Turística de Veli" },
        address: { en: "Veli, Thiruvananthapuram, Kerala 695021, India", es: "Thiruvananthapuram, Kerala 695021, India", pt: "Thiruvananthapuram, Kerala 695021, Índia" },
        description: {
          en: cleanText("Veli combines a scenic lake, gardens and coastal surroundings, offering boating and recreational activities close to the city."),
          es: cleanText("Veli combina un lago, jardines y paisajes costeros, ofreciendo paseos en barco y actividades recreativas."),
          pt: cleanText("Veli combina lago, jardins e paisagens costeiras, oferecendo passeios de barco e atividades recreativas.")
        },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Shankhumugham Beach", es: "Playa Shankhumugham", pt: "Praia Shankhumugham" },
        address: { en: "Shangumugham, Thiruvananthapuram, Kerala 695007, India", es: "Thiruvananthapuram, Kerala 695007, India", pt: "Thiruvananthapuram, Kerala 695007, Índia" },
        description: {
          en: cleanText("A popular city beach known for its broad sandy shoreline and Arabian Sea sunsets."),
          es: cleanText("Playa urbana popular conocida por su amplia costa de arena y sus atardeceres sobre el mar Arábigo."),
          pt: cleanText("Praia urbana popular conhecida por sua ampla faixa de areia e pôr do sol sobre o Mar Arábico.")
        },
        image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Kanakakunnu Palace", es: "Palacio Kanakakunnu", pt: "Palácio Kanakakunnu" },
        address: { en: "Sooryakanthi Rd, Kanaka Nagar, Nanthancodu, Thiruvananthapuram, Kerala 695033, India", es: "Thiruvananthapuram, Kerala 695033, India", pt: "Thiruvananthapuram, Kerala 695033, Índia" },
        description: {
          en: cleanText("A historic palace surrounded by landscaped gardens and a major cultural venue in the capital city."),
          es: cleanText("Palacio histórico rodeado de jardines y uno de los principales espacios culturales de la capital."),
          pt: cleanText("Palácio histórico cercado por jardins e um importante espaço cultural da capital.")
        },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Thiruvananthapuram Tourism – Padmanabhaswamy Temple & Kovalam", metaDescription: "Explore Thiruvananthapuram: Sree Padmanabhaswamy Temple, Kovalam Beach, Napier Museum, Veli Village and Shankhumugham Beach.", keywords: ["Thiruvananthapuram tourism", "Padmanabhaswamy Temple", "Kovalam Beach", "Trivandrum", "Napier Museum"], tags: ["Thiruvananthapuram", "Trivandrum", "Kerala", "Padmanabhaswamy", "Kovalam", "Capital"] },
      es: { metaTitle: "Turismo en Thiruvananthapuram – Templo Padmanabhaswamy y Kovalam", metaDescription: "Descubre Thiruvananthapuram: Templo Padmanabhaswamy, Playa de Kovalam, Museo Napier y Playa Shankhumugham.", keywords: ["turismo en Thiruvananthapuram", "Templo Padmanabhaswamy", "Playa de Kovalam", "Trivandrum"], tags: ["Thiruvananthapuram", "Trivandrum", "Kerala", "Templos", "Playas"] },
      pt: { metaTitle: "Turismo em Thiruvananthapuram – Templo Padmanabhaswamy e Kovalam", metaDescription: "Conheça Thiruvananthapuram: Templo Padmanabhaswamy, Praia de Kovalam, Museu Napier e Praia Shankhumugham.", keywords: ["turismo em Thiruvananthapuram", "Templo Padmanabhaswamy", "Praia de Kovalam", "Trivandrum"], tags: ["Thiruvananthapuram", "Trivandrum", "Kerala", "Templos", "Praias"] }
    }
  },

  // 10. KANNUR (5 PLACES)
  {
    id: "kannur",
    aliases: ["kunnur"],
    name: "Kannur",
    nombre: "Kannur",
    nome: "Kannur",
    state: "Kerala",
    stateId: "kerala",
    url: "/destinations/india/kerala/kannur",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    overview: {
      en: "<p><strong>Kannur</strong> is the Land of Theyyam rituals and looms, famous for St. Angelo Fort, Muzhappilangad drive-in beach, and rich Malabar culture.</p>",
      es: "<p><strong>Kannur</strong> es la tierra del arte ritual Theyyam, famosa por el Fuerte St. Angelo, la playa accesible para vehículos de Muzhappilangad y su cultura Malabar.</p>",
      pt: "<p><strong>Kannur</strong> é a terra da arte ritual Theyyam, famosa pelo Forte St. Angelo, a praia Muzhappilangad e sua cultura Malabar.</p>"
    },
    content: {
      en: "<p><strong>Kannur</strong> is the Land of Theyyam rituals and looms, famous for St. Angelo Fort, Muzhappilangad drive-in beach, and rich Malabar culture.</p>",
      es: "<p><strong>Kannur</strong> es la tierra del arte ritual Theyyam, famosa por el Fuerte St. Angelo, la playa accesible para vehículos de Muzhappilangad y su cultura Malabar.</p>",
      pt: "<p><strong>Kannur</strong> é a terra da arte ritual Theyyam, famosa pelo Forte St. Angelo, a praia Muzhappilangad e sua cultura Malabar.</p>"
    },
    fullDescription: {
      en: "<h2>Explore Kannur – Crown of Malabar</h2><p>Known for its ancient seaside fort, Asia's longest drive-in beach at Muzhappilangad, sacred Theyyam rituals, and handloom textile tradition.</p>",
      es: "<h2>Descubre Kannur – Corona de Malabar</h2><p>Conocida por su fuerte costero, la playa para vehículos más larga de Asia en Muzhappilangad y la tradición ritual de Theyyam.</p>",
      pt: "<h2>Conheça Kannur – Coroa de Malabar</h2><p>Conhecida por seu forte costeiro, a maior praia para veículos da Ásia em Muzhappilangad e a tradição ritual do Theyyam.</p>"
    },
    famousPlacesToVisit: [
      {
        name: { en: "St. Angelo Fort", es: "Fuerte de San Ángelo", pt: "Forte de Santo Ângelo" },
        address: { en: "Near Kannur Cantonment, Kannur, Kerala 670013, India", es: "Kannur, Kerala 670013, India", pt: "Kannur, Kerala 670013, Índia" },
        description: {
          en: cleanText("A historic seaside fort built on a rocky promontory, offering views of the Arabian Sea and Kannur coastline."),
          es: cleanText("Fortaleza histórica junto al mar construida sobre un promontorio rocoso, con vistas al mar Arábigo y la costa de Kannur."),
          pt: cleanText("Fortaleza histórica à beira-mar construída sobre um promontório rochoso, com vistas do Mar Arábico e da costa de Kannur.")
        },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Muzhappilangad Drive-in Beach", es: "Playa Muzhappilangad Drive-in", pt: "Praia Muzhappilangad Drive-in" },
        address: { en: "Muzhappilangad, Kannur, Kerala 670662, India", es: "Kannur, Kerala 670662, India", pt: "Kannur, Kerala 670662, Índia" },
        description: {
          en: cleanText("One of India's famous drive-in beaches, known for its long sandy coastline and unique coastal experience."),
          es: cleanText("Una de las famosas playas de India donde se puede conducir por la arena, conocida por su extensa costa."),
          pt: cleanText("Uma das famosas praias da Índia onde é possível dirigir pela areia, conhecida por sua longa costa.")
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Parassinikadavu Muthappan Temple", es: "Templo Parassinikadavu Muthappan", pt: "Templo Parassinikadavu Muthappan" },
        address: { en: "Parassinikadavu, Kannur, Kerala 670563, India", es: "Kannur, Kerala 670563, India", pt: "Kannur, Kerala 670563, Índia" },
        description: {
          en: cleanText("A distinctive temple associated with the Muthappan tradition and the Theyyam cultural heritage of northern Kerala."),
          es: cleanText("Templo tradicional relacionado con Muthappan y con el patrimonio cultural de Theyyam del norte de Kerala."),
          pt: cleanText("Templo tradicional associado a Muthappan e ao patrimônio cultural do Theyyam no norte de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Aralam Wildlife Sanctuary", es: "Santuario de Vida Silvestre Aralam", pt: "Santuário de Vida Selvagem Aralam" },
        address: { en: "Aralam, Kannur, Kerala 670673, India", es: "Kannur, Kerala 670673, India", pt: "Kannur, Kerala 670673, Índia" },
        description: {
          en: cleanText("A forested wildlife destination in the Western Ghats known for biodiversity, trekking and beautiful natural landscapes."),
          es: cleanText("Destino de naturaleza en los Ghats Occidentales conocido por su biodiversidad, senderismo y paisajes."),
          pt: cleanText("Destino de vida selvagem nos Gates Ocidentais conhecido por sua biodiversidade, trilhas e paisagens naturais.")
        },
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: { en: "Arakkal Museum", es: "Museo Arakkal", pt: "Museu Arakkal" },
        address: { en: "Ayikkara, Kannur, Kerala 670013, India", es: "Kannur, Kerala 670013, India", pt: "Kannur, Kerala 670013, Índia" },
        description: {
          en: cleanText("A heritage museum showcasing the history and legacy of the Arakkal royal family, Kerala's historic Muslim royal family."),
          es: cleanText("Museo patrimonial que presenta la historia y legado de la familia real Arakkal, una histórica familia real musulmana de Kerala."),
          pt: cleanText("Museu histórico que apresenta a história e o legado da família real Arakkal, uma importante família real muçulmana de Kerala.")
        },
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
      }
    ],
    seo: {
      en: { metaTitle: "Kannur Tourism – St Angelo Fort & Drive-in Beach", metaDescription: "Explore Kannur: St Angelo Fort, Muzhappilangad Drive-in Beach, Muthappan Temple, Aralam Sanctuary and Arakkal Museum.", keywords: ["Kannur tourism", "St Angelo Fort", "Muzhappilangad Beach", "Theyyam Kerala", "Arakkal Museum"], tags: ["Kannur", "Kerala", "Theyyam", "Fort", "Drive-in Beach", "Malabar"] },
      es: { metaTitle: "Turismo en Kannur – Fuerte St Angelo y Playa Muzhappilangad", metaDescription: "Descubre Kannur: Fuerte de San Ángelo, Playa Muzhappilangad Drive-in, Templo Muthappan y Museo Arakkal.", keywords: ["turismo en Kannur", "Fuerte St Angelo", "Playa Muzhappilangad", "Theyyam"], tags: ["Kannur", "Kerala", "Fuerte", "Playas", "Theyyam"] },
      pt: { metaTitle: "Turismo em Kannur – Forte St Angelo e Praia Muzhappilangad", metaDescription: "Conheça Kannur: Forte de Santo Ângelo, Praia Muzhappilangad Drive-in, Templo Muthappan e Museu Arakkal.", keywords: ["turismo em Kannur", "Forte St Angelo", "Praia Muzhappilangad", "Theyyam"], tags: ["Kannur", "Kerala", "Forte", "Praias", "Theyyam"] }
    }
  }
];

// Clean up duplicate or misspelt city IDs if they exist
const legacyIds = ['kasargod', 'alappuzha', 'cochin', 'trivandrum', 'kunnur'];
const filteredCities = cities.filter(c => !legacyIds.includes(c.id));

keralaCitiesData.forEach(newCity => {
  // Find match by id or aliases
  const idx = filteredCities.findIndex(c => c.id === newCity.id || (newCity.aliases && newCity.aliases.includes(c.id)));
  if (idx >= 0) {
    filteredCities[idx] = { ...filteredCities[idx], ...newCity };
  } else {
    filteredCities.push(newCity);
  }
});

fs.writeFileSync(citiesFilePath, JSON.stringify(filteredCities, null, 2), 'utf8');

console.log(`✅ All 10 Kerala cities updated with 53 total tourist places in cities.json! Total cities in file: ${filteredCities.length}`);
