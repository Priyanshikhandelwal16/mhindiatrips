import fs from 'fs';
import path from 'path';

const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const enrichData = {
  // MADHYA PRADESH
  gwalior: [
    {
      name: { en: "Gwalior Fort", es: "Fuerte de Gwalior", pt: "Forte de Gwalior" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: "Gwalior Fort is an impressive 8th-century hilltop fortress featuring turquoise-tiled palaces, ancient temples and giant Jain rock-cut sculptures.",
        es: "El Fuerte de Gwalior es una impresionante fortaleza del siglo VIII situada en una colina, famosa por sus palacios con mosaicos turquesas y esculturas jainistas.",
        pt: "O Forte de Gwalior é uma impressionante fortaleza do século VIII situada em uma colina, famosa por seus palácios com azulejos turquesa e esculturas jainistas."
      }
    },
    {
      name: { en: "Jai Vilas Palace", es: "Palacio Jai Vilas", pt: "Palácio Jai Vilas" },
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
      description: {
        en: "Jai Vilas Palace is a magnificent 19th-century royal residence showcasing European architecture, crystal chandeliers and opulent Scindia royal heritage.",
        es: "El Palacio Jai Vilas es una magnífica residencia real del siglo XIX con arquitectura europea, arañas de cristal y lujoso patrimonio real.",
        pt: "O Palácio Jai Vilas é uma magnífica residência real do século XIX com arquitetura europeia, lustres de cristal e luxuoso patrimônio real."
      }
    },
    {
      name: { en: "Saas Bahu Temples", es: "Templos Saas Bahu", pt: "Templos Saas Bahu" },
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80",
      description: {
        en: "Saas Bahu Temples are 11th-century twin stone temples dedicated to Lord Vishnu, famous for intricate sandstone carvings and pillars.",
        es: "Los Templos Saas Bahu son dos templos de piedra del siglo XI dedicados al dios Vishnu, famosos por sus intrincados tallados en arenisca.",
        pt: "Os Templos Saas Bahu são dois templos de pedra do século XI dedicados ao deus Vishnu, famosos por seus entalhes em arenito."
      }
    },
    {
      name: { en: "Tomb of Tansen", es: "Tumba de Tansen", pt: "Túmulo de Tansen" },
      image: "https://images.unsplash.com/photo-1588083949404-9e965c2763f9?w=900&q=80",
      description: {
        en: "Tomb of Tansen honors the legendary musician of Emperor Akbar's court, serving as a revered site for Indian classical music lovers.",
        es: "La Tumba de Tansen rinde homenaje al legendario músico de la corte del emperador Akbar y es un lugar venerado para la música clásica india.",
        pt: "O Túmulo de Tansen homenageia o lendário músico da corte do imperador Akbar, sendo um local venerado para os amantes da música clássica indiana."
      }
    }
  ],

  bhopal: [
    {
      name: { en: "Upper Lake (Bhojtal)", es: "Lago Superior (Bhojtal)", pt: "Lago Superior (Bhojtal)" },
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
      description: {
        en: "Upper Lake is India's oldest man-made lake created by Raja Bhoj in the 11th century, offering scenic boat rides and sunset views.",
        es: "Upper Lake es el lago artificial más antiguo de la India, creado en el siglo XI, ideal para paseos en barco y hermosos atardeceres.",
        pt: "Upper Lake é o lago artificial mais antigo da Índia, criado no século XI, ideal para passeios de barco e belos pôres do sol."
      }
    },
    {
      name: { en: "Taj-ul-Masajid", es: "Mezquita Taj-ul-Masajid", pt: "Mesquita Taj-ul-Masajid" },
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
      description: {
        en: "Taj-ul-Masajid is one of the largest mosques in Asia, renowned for pink sandstone minarets, marble domes and a vast courtyard.",
        es: "Taj-ul-Masajid es una de las mezquitas más grandes de Asia, famosa por sus minaretes de arenisca rosa y cúpulas de mármol.",
        pt: "Taj-ul-Masajid é uma das maiores mesquitas da Ásia, famosa por seus minaretes de arenito rosa e cúpulas de mármore."
      }
    },
    {
      name: { en: "Van Vihar National Park", es: "Parque Nacional Van Vihar", pt: "Parque Nacional Van Vihar" },
      image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
      description: {
        en: "Van Vihar National Park is an open zoo and wildlife sanctuary situated beside Upper Lake, home to tigers, leopards and migratory birds.",
        es: "El Parque Nacional Van Vihar es una reserva natural junto al lago donde habitan tigres, leopardos y aves migratorias.",
        pt: "O Parque Nacional Van Vihar é uma reserva natural ao lado do lago que abriga tigres, leopardos e aves migratórias."
      }
    }
  ],

  indore: [
    {
      name: { en: "Rajwada Palace", es: "Palacio Rajwada", pt: "Palácio Rajwada" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: "Rajwada Palace is a historic seven-story royal structure built by the Holkars, combining Maratha, Mughal and French architectural styles.",
        es: "El Palacio Rajwada es una histórica estructura real de siete pisos construida por los Holkars, combinando arquitectura maratha y mogol.",
        pt: "O Palácio Rajwada é uma histórica estrutura real de sete andares construída pelos Holkars, combinando arquitetura maratha e mogol."
      }
    },
    {
      name: { en: "Lal Bagh Palace", es: "Palacio Lal Bagh", pt: "Palácio Lal Bagh" },
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
      description: {
        en: "Lal Bagh Palace is a grand European-style residence of the Holkar rulers, featuring Italian marble, stained glass windows and manicured gardens.",
        es: "El Palacio Lal Bagh es una grandiosa residencia de estilo europeo con mármol italiano, vidrieras de colores y cuidados jardines.",
        pt: "O Palácio Lal Bagh é uma grandiosa residência em estilo europeu com mármore italiano, vitrais e jardins bem cuidados."
      }
    },
    {
      name: { en: "Sarafa Night Food Market", es: "Mercado Nocturno de Gastronomía Sarafa", pt: "Mercado Noturno de Gastronomia Sarafa" },
      image: "https://images.unsplash.com/photo-1588083949404-9e965c2763f9?w=900&q=80",
      description: {
        en: "Sarafa Market transforms from a jewelry market by day into a legendary night food market serving delicious Malwa street food and sweets.",
        es: "El Mercado Sarafa se transforma por la noche en un legendario mercado gastronómico que ofrece deliciosa comida callejera y dulces.",
        pt: "O Mercado Sarafa transforma-se à noite em um lendário mercado gastronômico que oferece deliciosa comida de rua e doces."
      }
    }
  ],

  ujjain: [
    {
      name: { en: "Mahakaleshwar Jyotirlinga Temple", es: "Templo Mahakaleshwar Jyotirlinga", pt: "Templo Mahakaleshwar Jyotirlinga" },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Mahakaleshwar Temple is one of the 12 sacred Jyotirlingas of Lord Shiva, famous for its unique south-facing idol and daily Bhasma Aarti ritual.",
        es: "El Templo Mahakaleshwar es uno de los 12 sagrados Jyotirlingas de Shiva, famoso por su ídolo orientado al sur y el ritual nocturno de Bhasma Aarti.",
        pt: "O Templo Mahakaleshwar é um dos 12 sagrados Jyotirlingas de Shiva, famoso por seu ídolo voltado para o sul e pelo ritual de Bhasma Aarti."
      }
    },
    {
      name: { en: "Kal Bhairav Temple", es: "Templo Kal Bhairav", pt: "Templo Kal Bhairav" },
      image: "https://images.unsplash.com/photo-1600100397986-40745e653702?w=900&q=80",
      description: {
        en: "Kal Bhairav Temple is an ancient temple dedicated to the guardian deity of Ujjain, known for unique traditional ritual offerings.",
        es: "El Templo Kal Bhairav es un antiguo templo dedicado a la deidad guardiana de Ujjain, famoso por sus rituales tradicionales únicos.",
        pt: "O Templo Kal Bhairav é um antigo templo dedicado à divindade guardiã de Ujjain, famoso por seus rituais tradicionais únicos."
      }
    },
    {
      name: { en: "Ram Ghat", es: "Ram Ghat", pt: "Ram Ghat" },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Ram Ghat is a sacred bathing ghata along the Kshipra River, famous as a major site for the holy Kumbh Mela celebrations.",
        es: "Ram Ghat es un sagrado ghata a orillas del río Kshipra, famoso por ser un lugar central de las festividades de la Kumbh Mela.",
        pt: "Ram Ghat é um sagrado ghata às margens do rio Kshipra, famoso por ser um local central das festividades da Kumbh Mela."
      }
    }
  ],

  jabalpur: [
    {
      name: { en: "Dhuandhar Falls & Bhedaghat Marble Rocks", es: "Cascadas Dhuandhar y Rocas de Mármol de Bhedaghat", pt: "Cachoeiras Dhuandhar e Rochas de Mármore de Bhedaghat" },
      image: "https://images.unsplash.com/photo-1432402772545-0b04a1122a27?w=900&q=80",
      description: {
        en: "Bhedaghat features dramatic 100-foot towering marble gorges carved by the Narmada River and the roaring Dhuandhar waterfall.",
        es: "Bhedaghat cuenta con imponentes desfiladeros de mármol tallados por el río Narmada y la impresionante cascada Dhuandhar.",
        pt: "Bhedaghat possui imponentes desfiladeiros de mármore esculpidos pelo rio Narmada e a impressionante cachoeira Dhuandhar."
      }
    },
    {
      name: { en: "Chausath Yogini Temple", es: "Templo Chausath Yogini", pt: "Templo Chausath Yogini" },
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80",
      description: {
        en: "Chausath Yogini Temple is a 10th-century circular hilltop temple overlooking the Narmada valley, housing shrines of 64 yoginis.",
        es: "El Templo Chausath Yogini es un templo circular del siglo X situado en una colina con vistas al río Narmada y 64 santuarios de yoginis.",
        pt: "O Templo Chausath Yogini é um templo circular do século X situado em uma colina com vistas para o rio Narmada e 64 santuários de yoginis."
      }
    }
  ],

  // MAHARASHTRA
  pune: [
    {
      name: { en: "Shaniwar Wada", es: "Shaniwar Wada", pt: "Shaniwar Wada" },
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
      description: {
        en: "Shaniwar Wada is a 18th-century fortified palace seat of the Peshwa rulers of the Maratha Empire, known for massive stone gates and courtyards.",
        es: "Shaniwar Wada es una palacio fortificado del siglo XVIII que fue sede de los gobernantes Peshwa del Imperio Maratha.",
        pt: "Shaniwar Wada é um palácio fortificado do século XVIII que foi sede dos governantes Peshwa do Império Maratha."
      }
    },
    {
      name: { en: "Aga Khan Palace", es: "Palacio Aga Khan", pt: "Palácio Aga Khan" },
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
      description: {
        en: "Aga Khan Palace is an Italian-style palace constructed in 1892, historically significant as Mahatma Gandhi's prison during the Freedom Movement.",
        es: "El Palacio Aga Khan es un palacio de estilo italiano construido en 1892, famoso por ser la prisión de Mahatma Gandhi durante la independencia.",
        pt: "O Palácio Aga Khan é um palácio de estilo italiano construído em 1892, famoso por ter sido a prisão de Mahatma Gandhi durante a independência."
      }
    },
    {
      name: { en: "Sinhagad Fort", es: "Fuerte Sinhagad", pt: "Forte Sinhagad" },
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
      description: {
        en: "Sinhagad Fort is an ancient hill fortress offering panoramic mountain views, rich Maratha military history and popular trekking paths.",
        es: "El Fuerte Sinhagad es una antigua fortaleza en la colina que ofrece vistas panorámicas, historia militar maratha y rutas de senderismo.",
        pt: "O Forte Sinhagad é uma antiga fortaleza na colina que oferece vistas panorâmicas, história militar maratha e trilhas de caminhada."
      }
    }
  ],

  aurangabad: [
    {
      name: { en: "Ajanta & Ellora Caves", es: "Cuevas de Ajanta y Ellora", pt: "Cavernas de Ajanta e Ellora" },
      image: "https://images.unsplash.com/photo-1600100397986-40745e653702?w=900&q=80",
      description: {
        en: "Ajanta and Ellora Caves are world-renowned UNESCO World Heritage rock-cut monuments featuring ancient Buddhist murals and the monolithic Kailasa Temple.",
        es: "Las Cuevas de Ajanta y Ellora son monumentos de roca declarados Patrimonio de la Humanidad por la UNESCO con murales budistas y el Templo Kailasa.",
        pt: "As Cavernas de Ajanta e Ellora são monumentos de rocha declarados Patrimônio Mundial pela UNESCO com murais budistas e o Templo Kailasa."
      }
    },
    {
      name: { en: "Bibi Ka Maqbara", es: "Bibi Ka Maqbara", pt: "Bibi Ka Maqbara" },
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
      description: {
        en: "Bibi Ka Maqbara is a beautiful 17th-century marble tomb built by Prince Azam Shah, often referred to as the Taj of the Deccan.",
        es: "Bibi Ka Maqbara es una hermosa tumba de mármol del siglo XVII construida por el príncipe Azam Shah, conocida como el Taj del Decán.",
        pt: "Bibi Ka Maqbara é um belo túmulo de mármore do século XVII construído pelo príncipe Azam Shah, conhecido como o Taj do Decão."
      }
    }
  ],

  nashik: [
    {
      name: { en: "Trimbakeshwar Jyotirlinga Temple", es: "Templo Trimbakeshwar Jyotirlinga", pt: "Templo Trimbakeshwar Jyotirlinga" },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Trimbakeshwar Temple is an ancient black stone Jyotirlinga shrine near the origin of the sacred Godavari River.",
        es: "El Templo Trimbakeshwar es un antiguo santuario Jyotirlinga de piedra negra situado cerca del nacimiento del sagrado río Godavari.",
        pt: "O Templo Trimbakeshwar é um antigo santuário Jyotirlinga de pedra negra situado perto da nascente do sagrado rio Godavari."
      }
    },
    {
      name: { en: "Panchavati & Kalaram Temple", es: "Panchavati y Templo Kalaram", pt: "Panchavati e Templo Kalaram" },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
      description: {
        en: "Panchavati is a sacred pilgrimage area associated with the Ramayana epic, housing the historic stone Kalaram Temple and Sita Gufa.",
        es: "Panchavati es una zona sagrada de peregrinación relacionada con el Ramayana, donde se encuentra el histórico Templo Kalaram.",
        pt: "Panchavati é uma área sagrada de peregrinação relacionada ao Ramayana, onde fica o histórico Templo Kalaram."
      }
    }
  ],

  nagpur: [
    {
      name: { en: "Deekshabhoomi", es: "Deekshabhoomi", pt: "Deekshabhoomi" },
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
      description: {
        en: "Deekshabhoomi is a monumental dome stupa of major pilgrimage significance where Dr. B.R. Ambedkar embraced Buddhism in 1956.",
        es: "Deekshabhoomi es una estupa monumental de gran importancia espiritual donde el Dr. B.R. Ambedkar se convirtió al budismo en 1956.",
        pt: "Deekshabhoomi é uma estupa monumental de grande importância espiritual onde o Dr. B.R. Ambedkar converteu-se ao budismo em 1956."
      }
    },
    {
      name: { en: "Futala Lake & Sitabuldi Fort", es: "Lago Futala y Fuerte Sitabuldi", pt: "Lago Futala e Forte Sitabuldi" },
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
      description: {
        en: "Futala Lake offers lively waterfront promenades and food stalls, complemented by the historic British-era Sitabuldi Fort nearby.",
        es: "El lago Futala ofrece paseos costeros y puestos de comida, complementados por el histórico Fuerte Sitabuldi de la época británica.",
        pt: "O lago Futala oferece passeios à beira-mar e barracas de comida, complementados pelo histórico Forte Sitabuldi da era britânica."
      }
    }
  ],

  kolhapur: [
    {
      name: { en: "Shri Mahalakshmi (Amba Bai) Temple", es: "Templo Shri Mahalakshmi (Amba Bai)", pt: "Templo Shri Mahalakshmi (Amba Bai)" },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Shri Mahalakshmi Temple is a revered 7th-century Hindu shrine dedicated to Goddess Lakshmi, famous for its ancient stone architectural style.",
        es: "El Templo Shri Mahalakshmi es un sagrado santuario del siglo VII dedicado a la diosa Lakshmi, famoso por su arquitectura en piedra.",
        pt: "O Templo Shri Mahalakshmi é um sagrado santuário do século VII dedicado à deusa Lakshmi, famoso por sua arquitetura em pedra."
      }
    },
    {
      name: { en: "Panhala Fort", es: "Fuerte Panhala", pt: "Forte Panhala" },
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
      description: {
        en: "Panhala Fort is a strategic hill fortress associated with Chhatrapati Shivaji Maharaj, featuring ancient granaries and panoramic valley views.",
        es: "El Fuerte Panhala es una fortaleza estratégica en la colina asociada con Shivaji Maharaj, con antiguos graneros y vistas al valle.",
        pt: "O Forte Panhala é uma fortaleza estratégica na colina associada a Shivaji Maharaj, com antigos celeiros e vistas para o vale."
      }
    }
  ],

  // TAMIL NADU
  chennai: [
    {
      name: { en: "Marina Beach", es: "Playa Marina", pt: "Praia Marina" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: "Marina Beach is one of the world's longest natural urban beaches, stretching 13 km along the Bay of Bengal with sea breezes and food stalls.",
        es: "La Playa Marina es una de las playas urbanas más largas del mundo, a lo largo de 13 km en la bahía de Bengala con brisa marina.",
        pt: "A Praia Marina é uma das maiores praias urbanas do mundo, ao longo de 13 km na baía de Bengala com brisa marinha."
      }
    },
    {
      name: { en: "Kapaleeshwarar Temple", es: "Templo Kapaleeshwarar", pt: "Templo Kapaleeshwarar" },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Kapaleeshwarar Temple is a striking 7th-century Dravidian temple in Mylapore featuring a colorful carved gopuram tower dedicated to Lord Shiva.",
        es: "El Templo Kapaleeshwarar es un templo dravídico del siglo VII en Mylapore con una torre gopuram colorida dedicada al dios Shiva.",
        pt: "O Templo Kapaleeshwarar é um templo dravídico do século VII em Mylapore com uma torre gopuram colorida dedicada ao deus Shiva."
      }
    },
    {
      name: { en: "San Thome Basilica & Fort St. George", es: "Basílica de San Tomé y Fuerte San Jorge", pt: "Basílica de São Tomé e Forte São Jorge" },
      image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
      description: {
        en: "San Thome Basilica is a Neo-Gothic church built over St. Thomas's tomb, alongside Fort St. George, the first British fortress built in India in 1644.",
        es: "La Basílica de San Tomé es una iglesia neogótica construida sobre la tumba de San Tomás, junto al histórico Fuerte San Jorge de 1644.",
        pt: "A Basílica de São Tomé é uma igreja neogótica construída sobre o túmulo de São Tomé, ao lado do histórico Forte São Jorge de 1644."
      }
    }
  ],

  madurai: [
    {
      name: { en: "Meenakshi Amman Temple", es: "Templo Meenakshi Amman", pt: "Templo Meenakshi Amman" },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Meenakshi Amman Temple is a world-famous Dravidian masterpiece featuring 14 towering gopuram towers covered in thousands of colorful stone sculptures.",
        es: "El Templo Meenakshi Amman es una obra maestra dravídica con 14 torres gopuram cubiertas de miles de esculturas de piedra de colores.",
        pt: "O Templo Meenakshi Amman é uma obra-prima dravídica com 14 torres gopuram cobertas por milhares de esculturas de pedra coloridas."
      }
    },
    {
      name: { en: "Thirumalai Nayakkar Mahal", es: "Palacio Thirumalai Nayakkar", pt: "Palácio Thirumalai Nayakkar" },
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80",
      description: {
        en: "Thirumalai Nayakkar Mahal is a 17th-century palace showcasing Dravidian and Islamic architectural styles with massive white pillars and courtyard arches.",
        es: "El Palacio Thirumalai Nayakkar es un palacio del siglo XVII con enormes pilares blancos y arcos en sus patios.",
        pt: "O Palácio Thirumalai Nayakkar é um palácio do século XVII com enormes pilares brancos e arcos em seus pátios."
      }
    }
  ],

  kanyakumari: [
    {
      name: { en: "Vivekananda Rock Memorial & Thiruvalluvar Statue", es: "Memorial de la Roca Vivekananda y Estatua de Thiruvalluvar", pt: "Memorial da Rocha Vivekananda e Estátua de Thiruvalluvar" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: "Iconic island monument complex situated on twin rock islands off the coast where the Arabian Sea, Bay of Bengal and Indian Ocean meet.",
        es: "Emblemático complejo insular situado en rocas frente a la costa donde se unen el mar Arábigo, la bahía de Bengala y el océano Índico.",
        pt: "Emblemático complexo insular situado em rochas na costa onde se encontram o mar Arábico, a baía de Bengala e o oceano Índico."
      }
    },
    {
      name: { en: "Kanyakumari Beach & Sunset Point", es: "Playa de Kanyakumari y Mirador del Atardecer", pt: "Praia de Kanyakumari e Mirante do Pôr do Sol" },
      image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
      description: {
        en: "Kanyakumari Beach offers rare panoramic views of both sunrise and sunset over the meeting of three ocean bodies.",
        es: "La Playa de Kanyakumari ofrece vistas panorámicas del amanecer y el atardecer sobre la confluencia de tres océanos.",
        pt: "A Praia de Kanyakumari oferece vistas panorâmicas do nascer e do pôr do sol sobre o encontro de três oceanos."
      }
    }
  ],

  rameshwaram: [
    {
      name: { en: "Ramanathaswamy Temple", es: "Templo Ramanathaswamy", pt: "Templo Ramanathaswamy" },
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80",
      description: {
        en: "Ramanathaswamy Temple is a sacred Char Dham temple dedicated to Lord Shiva, home to the world's longest pillared temple corridor and 22 holy water wells.",
        es: "El Templo Ramanathaswamy es un sagrado templo dedicado a Shiva con el corredor de pilares más largo del mundo y 22 pozos sagrados.",
        pt: "O Templo Ramanathaswamy é um sagrado templo dedicado a Shiva com o maior corredor de pilares do mundo e 22 poços sagrados."
      }
    },
    {
      name: { en: "Pamban Bridge & Dhanushkodi Beach", es: "Puente Pamban y Playa de Dhanushkodi", pt: "Ponte Pamban e Praia de Dhanushkodi" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: "Pamban Bridge is India's iconic railway sea bridge connecting Rameshwaram island, leading toward the scenic ghost town beach of Dhanushkodi.",
        es: "El Puente Pamban es el emblemático puente ferroviario marino de la India que conecta la isla con la playa desierta de Dhanushkodi.",
        pt: "A Ponte Pamban é a emblemática ponte ferroviária marítima da Índia que conecta a ilha à praia de Dhanushkodi."
      }
    }
  ],

  mahabalipuram: [
    {
      name: { en: "Shore Temple", es: "Templo de la Orilla", pt: "Templo da Orla" },
      image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&q=80",
      description: {
        en: "Shore Temple is a 8th-century UNESCO World Heritage granite structural temple built overlooking the Bay of Bengal coast.",
        es: "El Templo de la Orilla es un templo de granito del siglo VIII declarado Patrimonio de la Humanidad por la UNESCO frente al mar.",
        pt: "O Templo da Orla é um templo de granito do século VIII declarado Patrimônio Mundial pela UNESCO em frente ao mar."
      }
    },
    {
      name: { en: "Pancha Rathas & Arjuna's Penance", es: "Pancha Rathas y la Penitencia de Arjuna", pt: "Pancha Rathas e a Penitência de Arjuna" },
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80",
      description: {
        en: "Monolithic 7th-century rock-cut chariot temples and giant open-air rock relief carvings depicting the Descent of the Ganges.",
        es: "Monolíticos carros de piedra tallada del siglo VII y un gigantesco relieve en roca que representa la Bajada del Ganges.",
        pt: "Monolíticos carros de pedra esculpida do século VII e um gigantesco relevo em rocha que representa a Descida do Ganges."
      }
    }
  ],

  // KERALA
  alleppey: [
    {
      name: { en: "Houseboat Backwater Cruise", es: "Crucero en Casa Flotante por los Canales", pt: "Cruzeiro em Casa Flutuante pelos Canais" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: "Cruising on a luxury Kettuvallam houseboat through palm-fringed backwater canals, paddy fields and serene lagoons of Alleppey.",
        es: "Navegar en una casa flotante de lujo por los canales rodeados de palmeras y arrozales de Alleppey.",
        pt: "Navegar em uma casa flutuante de luxo pelos canais cercados por palmeiras e arrozais de Alleppey."
      }
    },
    {
      name: { en: "Alappuzha Beach & Lighthouse", es: "Playa de Alappuzha y Faro", pt: "Praia de Alappuzha e Farol" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: "Alappuzha Beach features a 150-year-old historic wooden sea pier, an ancient lighthouse and expansive Arabian Sea views.",
        es: "La Playa de Alappuzha cuenta con un histórico muelle de madera de 150 años, un antiguo faro y vistas al mar Arábigo.",
        pt: "A Praia de Alappuzha possui um histórico píer de madeira de 150 anos, um antigo farol e vistas para o mar Arábico."
      }
    },
    {
      name: { en: "Marari Beach", es: "Playa Marari", pt: "Praia Marari" },
      image: "https://images.unsplash.com/photo-1597074866923-dc05886a035f?w=900&q=80",
      description: {
        en: "Marari Beach is a peaceful white-sand fishing village beach near Alleppey surrounded by coconut palm groves and serene waters.",
        es: "La Playa Marari es una tranquila playa de arena blanca rodeada de cocoteros y aguas serenas.",
        pt: "A Praia Marari é uma tranquila praia de areia branca cercada por coqueiros e águas serenas."
      }
    }
  ],

  kollam: [
    {
      name: { en: "Ashtamudi Lake", es: "Lago Ashtamudi", pt: "Lago Ashtamudi" },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
      description: {
        en: "Ashtamudi Lake is an eight-branched backwater lake system in Kollam famous as the gateway to Kerala's peaceful backwaters.",
        es: "El lago Ashtamudi es un sistema de canales de ocho brazos en Kollam famoso por ser la entrada a los remansos de Kerala.",
        pt: "O lago Ashtamudi é um sistema de canais de oito braços em Kollam famoso por ser a porta de entrada para os canais de Kerala."
      }
    },
    {
      name: { en: "Jatayu Earth's Center", es: "Centro Jatayu Earth", pt: "Centro Jatayu Earth" },
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
      description: {
        en: "Jatayu Earth's Center features the world's largest bird sculpture set atop a rocky hilltop, with cable cars and adventure parks.",
        es: "El Centro Jatayu Earth alberga la escultura de ave más grande del mundo en la cima de una colina rocosa con teleférico.",
        pt: "O Centro Jatayu Earth abriga a maior escultura de pássaro do mundo no topo de uma colina rochosa com teleférico."
      }
    }
  ],

  kottayam: [
    {
      name: { en: "Kumarakom Bird Sanctuary & Vembanad Lake", es: "Santuario de Aves de Kumarakom y Lago Vembanad", pt: "Santuário de Aves de Kumarakom e Lago Vembanad" },
      image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
      description: {
        en: "Kumarakom Sanctuary is a lush 14-acre bird haven on the banks of Vembanad Lake, attracting Siberian storks and migratory species.",
        es: "El Santuario de Kumarakom es un frondoso refugio de aves de 14 hectáreas a orillas del lago Vembanad.",
        pt: "O Santuário de Kumarakom é um exuberante refúgio de aves de 14 hectares às margens do lago Vembanad."
      }
    }
  ],

  kasargod: [
    {
      name: { en: "Bekal Fort & Bekal Beach", es: "Fuerte Bekal y Playa Bekal", pt: "Forte Bekal e Praia Bekal" },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
      description: {
        en: "Bekal Fort is Kerala's largest and best-preserved keyhole-shaped seaside fortress overlooking the Arabian Sea, featuring an observation tower.",
        es: "El Fuerte Bekal es la fortaleza costera más grande y mejor conservada de Kerala con vistas al mar Arábigo.",
        pt: "O Forte Bekal é a maior e mais bem preservada fortaleza à beira-mar de Kerala com vistas para o mar Arábico."
      }
    }
  ]
};

let enrichedCount = 0;
for (const city of cities) {
  if (enrichData[city.id]) {
    city.touristPlaces = enrichData[city.id];
    city.updatedAt = new Date().toISOString();
    enrichedCount++;
  }
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Enriched ${enrichedCount} cities with famous tourist places in cities.json.`);
