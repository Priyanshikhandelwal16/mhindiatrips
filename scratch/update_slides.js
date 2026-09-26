const fs = require('fs');
const path = './src/data/fallback/pages.json';
const pages = JSON.parse(fs.readFileSync(path, 'utf8'));
const hpIndex = pages.findIndex(p => p.id === 'homepage');

const default20Slides = [
  {
    image: '/images/taj_mahal_sunrise.png',
    sub: { en: 'MARVELS OF INDIA', es: 'MARAVILLAS DE LA INDIA', pt: 'MARAVILHAS DA ÍNDIA' },
    title: { en: 'Taj Mahal: Symbol of Eternal Love', es: 'Taj Mahal: Símbolo del Amor Eterno', pt: 'Taj Mahal: Símbolo do Amor Eterno' },
    desc: { en: 'Experience the breathless beauty of the iconic marble mausoleum at sunrise in Agra.', es: 'Experimente la belleza del icónico mausoleo de mármol al amanecer en Agra.', pt: 'Experimente a beleza do icônico mausóleu de mármol ao amanhecer em Agra.' },
    location: { en: 'Taj Mahal, Agra, Uttar Pradesh', es: 'Taj Mahal, Agra, Uttar Pradesh', pt: 'Taj Mahal, Agra, Uttar Pradesh' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Agra Destinations', es: 'Explorar Destinos de Agra', pt: 'Explorar Destinos de Agra' },
    cta1Link: '/destinations-in-india/uttar-pradesh/agra',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/Jaipur.jpg',
    sub: { en: 'RAJASTHAN ROYAL PALACES', es: 'PALACIOS REALES DE RAJASTHÁN', pt: 'PALÁCIOS REAIS DO RAJASTÃO' },
    title: { en: 'Amer Fort & Pink City Wonders of Jaipur', es: 'Fuerte Amber y Maravillas de Jaipur', pt: 'Forte Amber e Maravilhas de Jaipur' },
    desc: { en: 'Explore grand hill forts, Hawa Mahal, and royal heritage in the capital of Rajasthan.', es: 'Explore majestuosos fuertes en colinas, el Hawa Mahal y el patrimonio real de Rajastán.', pt: 'Explore grandes fortes em colinas, Hawa Mahal e patrimônio real do Rajastão.' },
    location: { en: 'Jaipur, Rajasthan', es: 'Jaipur, Rajastán', pt: 'Jaipur, Rajastão' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Jaipur', es: 'Explorar Jaipur', pt: 'Explorar Jaipur' },
    cta1Link: '/destinations-in-india/rajasthan/jaipur',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/Jaisalmer.jpg',
    sub: { en: 'THAR DESERT SAFARIS', es: 'SAFARIS EN EL DESIERTO DE THAR', pt: 'SAFÁRIS NO DESERTO DE THAR' },
    title: { en: 'Golden Dunes & Living Fort of Jaisalmer', es: 'Dunas Doradas y Fuerte de Jaisalmer', pt: 'Dunas Douradas e Forte de Jaisalmer' },
    desc: { en: 'Sleep under starlit desert skies in luxury tented camps and explore the golden sandstone fortress.', es: 'Duerma bajo las estrellas en campamentos de lujo y explore la fortaleza dorada de Rajastán.', pt: 'Dorma sob o céu estrelado em acampamentos de luxo e explore a fortaleza dourada.' },
    location: { en: 'Jaisalmer, Rajasthan', es: 'Jaisalmer, Rajastán', pt: 'Jaisalmer, Rajastão' },
    objectPosition: 'center center',
    cta1Text: { en: 'Desert Tours', es: 'Tours del Desierto', pt: 'Tours do Deserto' },
    cta1Link: '/destinations-in-india/rajasthan',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/Udaipur.jpg',
    sub: { en: 'ROMANTIC LAKE PALACES', es: 'PALACIOS EN EL LAGO ROMÁNTICOS', pt: 'PALÁCIOS NO LAGO ROMÂNTICOS' },
    title: { en: 'Udaipur: Venice of the East & Lake Pichola', es: 'Udaipur: La Venecia del Este y Lago Pichola', pt: 'Udaipur: Veneza do Leste e Lago Pichola' },
    desc: { en: 'Sail across shimmering waters and stay in floating marble palaces under the stars.', es: 'Navegue por aguas cristalinas y afíjese en palacios flotantes junto a las colinas Aravalli.', pt: 'Navegue por águas cristalinas e fique em palácios flutuantes sob as colinas Aravalli.' },
    location: { en: 'Lake Pichola, Udaipur, Rajasthan', es: 'Lago Pichola, Udaipur, Rajastán', pt: 'Lago Pichola, Udaipur, Rajastão' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Udaipur Lakes', es: 'Explorar Lagos de Udaipur', pt: 'Explorar Lagos de Udaipur' },
    cta1Link: '/destinations-in-india/rajasthan',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/rajasthan_fort_sunset.png',
    sub: { en: 'HISTORIC FORTRESSES', es: 'FORTALEZAS HISTÓRICAS', pt: 'FORTALEZAS HISTÓRICAS' },
    title: { en: 'Mehrangarh Fort & Blue City of Jodhpur', es: 'Fuerte Mehrangarh y Ciudad Azul de Jodhpur', pt: 'Forte Mehrangarh e Cidade Azul de Jodhpur' },
    desc: { en: 'Marvel at the majestic fort perched above the blue-painted houses and traditional spice markets.', es: 'Contemple el imponente castillo sobre la roca y pasee por los bazares de la Ciudad Azul.', pt: 'Contemple o imponente castelo sobre a rocha e passeie pelos bazares da Cidade Azul.' },
    location: { en: 'Mehrangarh Fort, Jodhpur, Rajasthan', es: 'Fuerte Mehrangarh, Jodhpur, Rajastán', pt: 'Forte Mehrangarh, Jodhpur, Rajastão' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Rajasthan', es: 'Explorar Rajastán', pt: 'Explorar Rajastão' },
    cta1Link: '/destinations-in-india/rajasthan',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/kerala_backwaters_houseboat.png',
    sub: { en: 'TROPICAL BACKWATERS', es: 'REMANSOS TROPICALES', pt: 'REMANSOS TROPICAIS' },
    title: { en: 'Houseboat Cruises in Alleppey, Kerala', es: 'Cruceros en Casa Flotante en Alleppey, Kerala', pt: 'Cruzeiros em Casa Flutuante em Alleppey, Kerala' },
    desc: { en: 'Cruise through emerald backwaters and rejuvenate with authentic Ayurvedic rituals.', es: 'Deslízate por lagunas esmeralda rodeadas de palmeras y rejuvenezca con rituales ayurvédicos.', pt: 'Navegue por lagoas de esmeralda e rejuvenesça com rituais ayurvédicos tradicionais.' },
    location: { en: 'Backwaters, Alleppey, Kerala', es: 'Remansos, Alleppey, Kerala', pt: 'Canais, Alleppey, Kerala' },
    objectPosition: 'center center',
    cta1Text: { en: 'Kerala Retreats', es: 'Viajes a Kerala', pt: 'Viagens para Kerala' },
    cta1Link: '/destinations-in-india/kerala',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/munnar.jpg',
    sub: { en: 'WESTERN GHATS TEA HILLS', es: 'MONTAÑAS DE TÉ DE WESTERN GHATS', pt: 'COLINAS DE CHÁ DOS GATES OCIDENTAIS' },
    title: { en: 'Misty Tea Hills of Munnar', es: 'Plantaciones de Té y Colinas de Munnar', pt: 'Plantações de Chá e Colinas de Munnar' },
    desc: { en: 'Breathe the fresh mountain air of rolling tea estates and misty peaks in South India.', es: 'Respire aire puro entre plantaciones de té verde y picos montañosos envueltos en niebla.', pt: 'Respire ar puro entre plantações de chá verde e picos montanhosos enevoados.' },
    location: { en: 'Munnar Tea Estates, Kerala', es: 'Plantaciones de Munnar, Kerala', pt: 'Plantações de Munnar, Kerala' },
    objectPosition: 'center center',
    cta1Text: { en: 'Kerala Guides', es: 'Guías de Kerala', pt: 'Guias de Kerala' },
    cta1Link: '/destinations-in-india/kerala',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/varanasi_ghats_aarti.png',
    sub: { en: 'SPIRITUAL RITUALS & FESTIVALS', es: 'FESTIVALES Y RITUALES ESPIRITUALES', pt: 'FESTIVAIS E RITUAIS ESPIRITUAIS' },
    title: { en: 'Spiritual Awakenings & Ganga Aarti in Varanasi', es: 'Ceremonias Ganga Aarti en la Sagrada Varanasi', pt: 'Cerimônias Ganga Aarti na Sagrada Varanasi' },
    desc: { en: 'Witness the intense devotion of evening Ganga Aarti ceremonies by the ancient sacred ghats.', es: 'Presencie sagrados rituales de lámparas y cantos devocionales en los antiguos ghats del río Ganges.', pt: 'Testemunhe rituais sagrados de lâmpadas e cantos devocionais nos antigos ghats do rio Ganges.' },
    location: { en: 'Ganga Ghats, Varanasi, Uttar Pradesh', es: 'Ghats del Ganges, Varanasi, Uttar Pradesh', pt: 'Ghats do Ganges, Varanasi, Uttar Pradesh' },
    objectPosition: 'center center',
    cta1Text: { en: 'Spiritual Itineraries', es: 'Rutas Espirituales', pt: 'Rotas Espirituais' },
    cta1Link: '/destinations-in-india/uttar-pradesh',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=1600&q=80',
    sub: { en: 'CULTURAL FESTIVALS', es: 'FESTIVALES CULTURALES', pt: 'FESTIVAIS CULTURAIS' },
    title: { en: 'Great Rann Utsav: White Salt Desert Festival', es: 'Rann Utsav: Festival del Desierto Blanco de Kutch', pt: 'Rann Utsav: Festival do Deserto Branco de Kutch' },
    desc: { en: 'Celebrate vibrant music, crafts, and full-moon nights on the endless white salt desert of Kutch.', es: 'Disfrute de música folclórica, artesanías y noches de luna llena en el gran desierto de sal de Gujarat.', pt: 'Desfrute de música folclórica, artesanato e noites de lua cheia no deserto de sal de Gujarat.' },
    location: { en: 'Rann of Kutch, Gujarat', es: 'Rann de Kutch, Gujarat', pt: 'Rann de Kutch, Gujarat' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Gujarat', es: 'Explorar Gujarat', pt: 'Explorar Gujarat' },
    cta1Link: '/destinations-in-india/gujarat',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1600&q=80',
    sub: { en: 'SACRED SHRINES', es: 'SANTUARIOS SAGRADOS', pt: 'SANTUÁRIOS SAGRADOS' },
    title: { en: 'The Golden Temple: Crown Jewel of Amritsar', es: 'El Templo Dorado: Joya Espiritual de Amritsar', pt: 'O Templo Dourado: Joia Espiritual de Amritsar' },
    desc: { en: 'Experience serene spirituality at Sri Harmandir Sahib surrounded by the sacred Amrit Sarovar pool.', es: 'Sienta paz y armonía en Sri Harmandir Sahib rodeado por el estanque sagrado Amrit Sarovar.', pt: 'Sinta paz e harmonia em Sri Harmandir Sahib cercado pelo lago sagrado Amrit Sarovar.' },
    location: { en: 'Amritsar, Punjab', es: 'Amritsar, Punjab', pt: 'Amritsar, Punjab' },
    objectPosition: 'center center',
    cta1Text: { en: 'View Destinations', es: 'Ver Destinos', pt: 'Ver Destinos' },
    cta1Link: '/destinations',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?w=1600&q=80',
    sub: { en: 'UNESCO ARCHITECTURAL WONDERS', es: 'ARQUITECTURA PATRIMONIAL UNESCO', pt: 'ARQUITETURA PATRIMONIAL UNESCO' },
    title: { en: 'Khajuraho UNESCO Sculptured Temples', es: 'Templos Esculpidos de Khajuraho UNESCO', pt: 'Templos Esculpidos de Khajuraho UNESCO' },
    desc: { en: 'Admire exquisite medieval Nagara architecture and intricate stone carvings of Chandela period.', es: 'Contemple la maestría artística medieval y las famosas esculturas en piedra del período Chandela.', pt: 'Contemple a maestria artística medieval e as famosas esculturas em pedra do período Chandela.' },
    location: { en: 'Khajuraho, Madhya Pradesh', es: 'Khajuraho, Madhya Pradesh', pt: 'Khajuraho, Madhya Pradesh' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore MP', es: 'Explorar Madhya Pradesh', pt: 'Explorar Madhya Pradesh' },
    cta1Link: '/destinations-in-india/madhya-pradesh',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/ranthambore_tiger_safari.png',
    sub: { en: 'NATIONAL PARKS & SAFARIS', es: 'PARQUES NACIONALES Y SAFARIS', pt: 'PARQUES NACIONAIS E SAFÁRIS' },
    title: { en: 'Royal Bengal Tiger Safaris in Ranthambore', es: 'Safaris del Tigre de Bengala en Ranthambore', pt: 'Safáris do Tigre de Bengala em Ranthambore' },
    desc: { en: 'Search for the majestic Royal Bengal Tiger in the ancient hunting grounds of Maharajas.', es: 'Rastree tigres de Bengala salvajes en las antiguas reservas de caza rodeadas de ruinas históricas.', pt: 'Rastreie tigres de Bengala selvagens nas antigas reservas de caça com ruínas históricas.' },
    location: { en: 'Ranthambore National Park, Rajasthan', es: 'Parque Nacional Ranthambore, Rajastán', pt: 'Parque Nacional Ranthambore, Rajastão' },
    objectPosition: 'center center',
    cta1Text: { en: 'Wildlife Packages', es: 'Tours de Naturaleza', pt: 'Tours de Natureza' },
    cta1Link: '/packages?category=Wildlife',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80',
    sub: { en: 'HIMALAYAN WILDLIFE', es: 'VIDA SILVESTRE DEL HIMALAYA', pt: 'VIDA SELVAGEM DO HIMALAIA' },
    title: { en: 'Jim Corbett National Park & Wilderness', es: 'Parque Nacional Jim Corbett y Naturaleza', pt: 'Parque Nacional Jim Corbett e Natureza' },
    desc: { en: "Explore India's oldest national park, home to wild Asian elephants, elusive leopards, and dense forests.", es: 'Explore el parque nacional más antiguo de la India, hogar de elefantes salvajes, leopardos y densos bosques.', pt: 'Explore o parque nacional mais antigo da Índia, lar de elefantes selvagens, leopardos e florestas.' },
    location: { en: 'Jim Corbett National Park, Uttarakhand', es: 'Parque Nacional Jim Corbett, Uttarakhand', pt: 'Parque Nacional Jim Corbett, Uttarakhand' },
    objectPosition: 'center center',
    cta1Text: { en: 'Safari Tours', es: 'Tours de Safaris', pt: 'Tours de Safáris' },
    cta1Link: '/packages?category=Wildlife',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=80',
    sub: { en: 'MAHARASHTRA METROPOLIS', es: 'METRÓPOLIS Y PATRIMONIO DE MAHARASHTRA', pt: 'METRÓPOLE E PATRIMÔNIO DE MAHARASHTRA' },
    title: { en: 'Gateway of India & Vibrant Mumbai', es: 'Puerta de la India y la Vibrante Bombay', pt: 'Portal da Índia e a Vibrante Mumbai' },
    desc: { en: 'Discover the economic capital of India, iconic waterfront monuments, and colonial architecture.', es: 'Descubra el corazón económico de la India, monumentos en el puerto y el encanto colonial británico.', pt: 'Descubra o coração econômico da Índia, monumentos no porto e o charme colonial.' },
    location: { en: 'Mumbai, Maharashtra', es: 'Bombay, Maharashtra', pt: 'Mumbai, Maharashtra' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Maharashtra', es: 'Explorar Maharashtra', pt: 'Explorar Maharashtra' },
    cta1Link: '/destinations-in-india/maharashtra',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80',
    sub: { en: 'DRAVIDIAN TEMPLE TOWERS', es: 'ARQUITECTURA DRAVÍDICA DEL SUR', pt: 'ARQUITETURA DRAVÍDICA DO SUL' },
    title: { en: 'Meenakshi Amman Temple Towers of Madurai', es: 'Torres del Templo Meenakshi en Madurai', pt: 'Torres do Templo Meenakshi em Madurai' },
    desc: { en: 'Marvel at towering colorful gopurams and thousands of sculpted deities in ancient Madurai.', es: 'Maravíllese con las majestuosas gopurams de colores y esculturas sagradas en la antigua Madurai.', pt: 'Maravilhe-se com as majestosas gopurams coloridas e esculturas sagradas na antiga Madurai.' },
    location: { en: 'Madurai, Tamil Nadu', es: 'Madurai, Tamil Nadu', pt: 'Madurai, Tamil Nadu' },
    objectPosition: 'center center',
    cta1Text: { en: 'View Destinations', es: 'Ver Destinos', pt: 'Ver Destinos' },
    cta1Link: '/destinations',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: '/images/goa 2.jpg',
    sub: { en: 'BEACH LUXURY & HERITAGE', es: 'PARAÍSO COSTERO TROPICAL', pt: 'PARAÍSO LITORÂNEO TROPICAL' },
    title: { en: 'Golden Sands & Colonial Heritage of Goa', es: 'Playas Doradas y Herencia Portuguesa de Goa', pt: 'Praias Douradas e Herança Portuguesa de Goa' },
    desc: { en: 'Relax on pristine tropical beaches and explore colonial Portuguese churches in Old Goa.', es: 'Relájese en playas soleadas y explore iglesias de la UNESCO en la histórica Goa Velha.', pt: 'Relaxe em praias ensolaradas e explore igrejas da UNESCO na histórica Goa Velha.' },
    location: { en: 'Baga & Old Goa, Goa', es: 'Baga y Vieja Goa, Goa', pt: 'Baga e Velha Goa, Goa' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Goa', es: 'Explorar Goa', pt: 'Explorar Goa' },
    cta1Link: '/destinations-in-india/goa',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    sub: { en: 'OUTBOUND LUXURY METROPOLIS', es: 'DESTINOS INTERNACIONALES DE LUJO', pt: 'DESTINOS INTERNACIONAIS DE LUXO' },
    title: { en: 'Dubai: Futuristic Skylines & Desert Dunes', es: 'Dubái: Rascacielos Futuristas y Dunas del Desierto', pt: 'Dubai: Raciocínio Futurista e Dunas do Deserto' },
    desc: { en: 'Witness Burj Khalifa, world-class luxury shopping, and thrilling desert dune safaris in Dubai.', es: 'Experimente el Burj Khalifa, compras de lujo y safaris internacionales en las dunas doradas de Dubái.', pt: 'Experimente o Burj Khalifa, compras de luxo e safáris internacionais nas dunas douradas de Dubai.' },
    location: { en: 'Dubai, United Arab Emirates', es: 'Dubái, Emiratos Árabes Unidos', pt: 'Dubai, Emirados Árabes Unidos' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Dubai Destinations', es: 'Explorar Destinos de Dubái', pt: 'Explorar Destinos de Dubai' },
    cta1Link: '/international-trips',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80',
    sub: { en: 'OUTBOUND OVERWATER PARADISE', es: 'PARAÍSO SOBRE EL AGUA', pt: 'PARAÍSO SOBRE A ÁGUA' },
    title: { en: 'Maldives Overwater Villas & Island Escapes', es: 'Maldivas: Villas Privadas sobre Lagunas Turquesa', pt: 'Maldivas: Villas Privadas sobre Lagoas Turquesa' },
    desc: { en: 'Escape to private water bungalows suspended over vibrant coral reefs and turquoise lagoons.', es: 'Escápese a bungalows de lujo sobre arrecifes de coral vivos y aguas cristalinas en las Maldivas.', pt: 'Escape para bangalôs de luxo sobre recifes de coral e águas cristalinas nas Maldivas.' },
    location: { en: 'Maldives Islands', es: 'Islas Maldivas', pt: 'Ilhas Maldivas' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Maldives Islands', es: 'Explorar Islas Maldivas', pt: 'Explorar Ilhas Maldivas' },
    cta1Link: '/international-trips',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
    sub: { en: 'OUTBOUND TROPICAL SANCTUARIES', es: 'SANTUARIOS TROPICALES INTERNACIONALES', pt: 'SANTUÁRIOS TROPICAIS INTERNACIONAIS' },
    title: { en: 'Bali Rice Terraces & Sacred Sea Temples', es: 'Bali: Terrazas de Arroz de Ubud y Templos Sagrados', pt: 'Bali: Terraços de Arroz de Ubud e Templos Sagrados' },
    desc: { en: 'Explore emerald rice terraces, cliffside sunset temples, and luxury beach resorts in Bali.', es: 'Explore exuberantes selvas en Ubud, templos acantilados al atardecer y resorts de lujo en Bali.', pt: 'Explore florestas em Ubud, templos em falésias ao pôr do sol e resorts de luxo em Bali.' },
    location: { en: 'Ubud & Seminyak, Bali, Indonesia', es: 'Ubud y Seminyak, Bali, Indonesia', pt: 'Ubud e Seminyak, Bali, Indonésia' },
    objectPosition: 'center center',
    cta1Text: { en: 'Explore Bali Destinations', es: 'Explorar Destinos de Bali', pt: 'Explorar Destinos de Bali' },
    cta1Link: '/international-trips',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  },
  {
    image: 'https://images.unsplash.com/photo-1506665531195-3566fe2b4dfa?w=1600&q=80',
    sub: { en: 'OUTBOUND ISLAND ADVENTURE', es: 'PLAYAS E ISLAS INTERNACIONALES', pt: 'PRAIAS E ILHAS INTERNACIONAIS' },
    title: { en: 'Thailand Islands, Phuket Beaches & Golden Temples', es: 'Tailandia: Templos Dorados y Playas de Phuket', pt: 'Tailândia: Templos Dourados e Praias de Phuket' },
    desc: { en: "Discover Bangkok's golden spires, Chiang Mai elephant sanctuaries, and tropical Phuket beaches.", es: 'Descubra los palacios dorados de Bangkok, santuarios de elefantes en Chiang Mai y playas de Phuket.', pt: 'Descubra palácios dourados de Bangkok, santuários de elefantes em Chiang Mai e praias de Phuket.' },
    location: { en: 'Phuket & Bangkok, Thailand', es: 'Phuket y Bangkok, Tailandia', pt: 'Phuket e Bangkok, Tailândia' },
    objectPosition: 'center center',
    cta1Text: { en: 'Thailand Tours', es: 'Paquetes Tailandia', pt: 'Pacotes Tailândia' },
    cta1Link: '/packages?category=Outbound',
    cta2Text: { en: 'Inquire Now', es: 'Consultar Ahora', pt: 'Consultar Agora' },
    cta2Link: '/contact'
  }
];

if (hpIndex !== -1) {
  pages[hpIndex].content = pages[hpIndex].content || {};
  pages[hpIndex].content.slides = default20Slides;
  fs.writeFileSync(path, JSON.stringify(pages, null, 2), 'utf8');
  console.log('Successfully set 20 slides in pages.json for homepage');
}
