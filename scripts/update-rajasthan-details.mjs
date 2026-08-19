import fs from "fs";
import path from "path";
const file = path.join(process.cwd(), "src/data/fallback/states.json");
let states = JSON.parse(fs.readFileSync(file, "utf-8"));
const idx = states.findIndex(s => s.slug === "rajasthan");
if (idx === -1) { console.log("Rajasthan not found!"); process.exit(1); }

// Update each city with proper array-format thingsToDo, experiences, localFood, hotels, travelTips, gettingAround
const cityUpdates = {
  jaipur: {
    thingsToDo: [
      { en: "Explore Amber Fort and its grand courtyards with Aravalli Hills views", es: "Explora el Fuerte de Amber con vistas a las colinas de Aravalli", pt: "Explore o Forte de Amber com vistas para as colinas de Aravalli" },
      { en: "Visit City Palace — royal courtyards, museums and gateways", es: "Descubre patios reales, museos y puertas del City Palace", pt: "Descubra pátios reais, museus e portões do City Palace" },
      { en: "See Hawa Mahal — iconic Palace of Winds honeycomb façade", es: "Admira el icónico Palacio de los Vientos", pt: "Admire o icônico Palácio dos Ventos" },
      { en: "Explore Jantar Mantar astronomical instruments", es: "Descubre instrumentos astronómicos de Jantar Mantar", pt: "Descubra instrumentos astronômicos de Jantar Mantar" },
      { en: "Shop at Johari Bazaar and Bapu Bazaar for jewellery, textiles and handicrafts", es: "Explora Johari Bazaar y Bapu Bazaar para joyería y textiles", pt: "Explore Johari Bazaar e Bapu Bazaar para joias e tecidos" }
    ],
    experiences: [
      { name: { en: "Royal Heritage Experience", es: "Experiencia de Patrimonio Real", pt: "Experiência de Patrimônio Real" }, desc: { en: "Experience Jaipur's royal legacy through its palaces, forts, museums and traditional architecture.", es: "Descubre el legado real de Jaipur a través de palacios, fuertes y museos.", pt: "Conheça o legado real de Jaipur através de palácios, fortes e museus." } },
      { name: { en: "Rajasthani Culinary Experience", es: "Experiencia Culinaria de Rajasthan", pt: "Experiência Culinária do Rajasthan" }, desc: { en: "Enjoy authentic Rajasthani cuisine through traditional restaurants, local thalis and regional specialities.", es: "Disfruta de la auténtica gastronomía en restaurantes tradicionales y thalis.", pt: "Desfrute da autêntica culinária em restaurantes tradicionais e thalis." } },
      { name: { en: "Jaipur Bazaar Experience", es: "Experiencia en los Bazares de Jaipur", pt: "Experiência nos Bazares de Jaipur" }, desc: { en: "Explore colourful bazaars and discover traditional jewellery, textiles, handicrafts and handmade products.", es: "Explora los coloridos bazares y descubre joyería, textiles y artesanías.", pt: "Explore os coloridos bazares e descubra joias, tecidos e artesanato." } },
      { name: { en: "Heritage Photography Experience", es: "Experiencia Fotográfica Patrimonial", pt: "Experiência Fotográfica Patrimonial" }, desc: { en: "Capture Jaipur's forts, palaces, colourful streets and traditional architecture.", es: "Captura los fuertes, palacios y calles coloridas de Jaipur.", pt: "Fotografe os fortes, palácios e ruas coloridas de Jaipur." } },
      { name: { en: "Royal Cultural Evening", es: "Velada Cultural Real", pt: "Noite Cultural Real" }, desc: { en: "Enjoy traditional Rajasthani folk music, dance, local cuisine and cultural performances.", es: "Disfruta de música, danzas y gastronomía tradicional de Rajasthan.", pt: "Desfrute de música, danças e culinária tradicional do Rajasthan." } }
    ],
    localFood: { en: "Try Dal Baati Churma, Ghewar, Pyaaz Kachori, Gatte Ki Sabzi, Laal Maas and traditional Rajasthani thali.", es: "Pruebe Dal Baati Churma, Ghewar, Pyaaz Kachori, Gatte Ki Sabzi y Laal Maas.", pt: "Prove Dal Baati Churma, Ghewar, Pyaaz Kachori, Gatte Ki Sabzi e Laal Maas." },
    hotels: [
      { name: "Luxury Heritage Hotels", tier: "Luxury", desc: { en: "Restored royal-style properties for a premium heritage experience.", es: "Propiedades restauradas de estilo real.", pt: "Propriedades restauradas de estilo real." }, image: "" },
      { name: "Old City Boutique Hotels", tier: "Mid-Range", desc: { en: "Easy access to markets and historic landmarks.", es: "Cerca de mercados y monumentos.", pt: "Perto de mercados e monumentos." }, image: "" },
      { name: "Heritage Havelis", tier: "Boutique", desc: { en: "Traditional Rajasthani architecture in beautifully restored havelis.", es: "Arquitectura tradicional en havelis restauradas.", pt: "Arquitetura tradicional em havelis restauradas." }, image: "" }
    ],
    travelTips: [
      { en: "Start fort visits early to avoid crowds and daytime heat.", es: "Comienza las visitas a los fuertes temprano.", pt: "Comece as visitas aos fortes cedo." },
      { en: "Wear comfortable shoes — many heritage sites involve walking.", es: "Usa calzado cómodo para los sitios históricos.", pt: "Use calçados confortáveis para os locais históricos." },
      { en: "Carry sunscreen, sunglasses and water during outdoor sightseeing.", es: "Lleva protector solar, gafas y agua.", pt: "Leve protetor solar, óculos e água." },
      { en: "Bargain politely when shopping in local markets.", es: "Negocia con respeto en los mercados.", pt: "Negocie com respeito nos mercados." },
      { en: "Book heritage experiences and accommodations in advance during peak season.", es: "Reserva con anticipación en temporada alta.", pt: "Reserve com antecedência na alta temporada." }
    ],
    gettingAround: [
      { transportType: "Auto-rickshaw", title: { en: "Auto-rickshaws & Taxis", es: "Rickshaws y Taxis", pt: "Riquixás e Táxis" }, desc: { en: "Convenient for city sightseeing. Private cars recommended for Amber Fort and Nahargarh.", es: "Convenientes para la ciudad. Coche privado para Amber y Nahargarh.", pt: "Convenientes para a cidade. Carro particular para Amber e Nahargarh." }, recommended: true }
    ]
  },
  jodhpur: {
    thingsToDo: [
      { en: "Explore Mehrangarh Fort — grand courtyards, museums and Blue City views", es: "Descubre Mehrangarh con sus patios, museos y vistas de la Ciudad Azul", pt: "Explore Mehrangarh com seus pátios, museus e vistas da Cidade Azul" },
      { en: "Visit Jaswant Thada marble memorial", es: "Admira el monumento de mármol Jaswant Thada", pt: "Admire o memorial de mármore Jaswant Thada" },
      { en: "Walk through the Blue City's historic blue-painted lanes", es: "Recorre las calles azules de la ciudad histórica", pt: "Caminhe pelas ruas azuis da cidade histórica" },
      { en: "Visit Umaid Bhawan Palace and its royal museum", es: "Explora el Palacio Umaid Bhawan y su museo real", pt: "Explore o Palácio Umaid Bhawan e seu museu real" },
      { en: "Shop at Sardar Market around the Clock Tower for spices and handicrafts", es: "Compra especias y artesanías en Sardar Market", pt: "Compre especiarias e artesanato no Sardar Market" }
    ],
    experiences: [
      { name: { en: "Blue City Heritage Experience", es: "Experiencia Patrimonial de la Ciudad Azul", pt: "Experiência Patrimonial da Cidade Azul" }, desc: { en: "Explore blue-painted neighbourhoods and historic lanes around Mehrangarh Fort.", es: "Explora los barrios azules alrededor de Mehrangarh.", pt: "Explore os bairros azuis ao redor de Mehrangarh." } },
      { name: { en: "Royal Palace Experience", es: "Experiencia del Palacio Real", pt: "Experiência do Palácio Real" }, desc: { en: "Discover the royal lifestyle, architecture and history of Jodhpur's rulers.", es: "Descubre la vida real y la historia de Jodhpur.", pt: "Conheça a vida real e a história de Jodhpur." } },
      { name: { en: "Spice Market Experience", es: "Experiencia del Mercado de Especias", pt: "Experiência do Mercado de Especiarias" }, desc: { en: "Experience the colours, aromas and flavours of traditional Jodhpur markets.", es: "Experimenta los colores y aromas de los mercados.", pt: "Vivencie as cores e aromas dos mercados." } },
      { name: { en: "Desert Culture Experience", es: "Experiencia Cultural del Desierto", pt: "Experiência Cultural do Deserto" }, desc: { en: "Combine Jodhpur's heritage with desert excursion and cultural performance.", es: "Combina patrimonio con excursión al desierto.", pt: "Combine patrimônio com excursão ao deserto." } },
      { name: { en: "Sunset View Experience", es: "Experiencia del Atardecer", pt: "Experiência do Pôr do Sol" }, desc: { en: "Beautiful sunset views over the Blue City from viewpoints around the fort.", es: "Hermosas vistas del atardecer sobre la Ciudad Azul.", pt: "Belas vistas do pôr do sol sobre a Cidade Azul." } }
    ],
    localFood: { en: "Try Makhaniya Lassi, Mirchi Bada, Pyaaz Kachori, Mawa Kachori and Dal Baati Churma.", es: "Pruebe Makhaniya Lassi, Mirchi Bada, Pyaaz Kachori, Mawa Kachori y Dal Baati Churma.", pt: "Prove Makhaniya Lassi, Mirchi Bada, Pyaaz Kachori, Mawa Kachori e Dal Baati Churma." },
    hotels: [
      { name: "Heritage Havelis", tier: "Boutique", desc: { en: "Traditional Jodhpur architecture.", es: "Arquitectura tradicional de Jodhpur.", pt: "Arquitetura tradicional de Jodhpur." }, image: "" },
      { name: "Luxury Palace Hotels", tier: "Luxury", desc: { en: "Premium royal experience.", es: "Experiencia real premium.", pt: "Experiência real premium." }, image: "" },
      { name: "Old City Boutique Hotels", tier: "Mid-Range", desc: { en: "Near markets and Mehrangarh.", es: "Cerca de mercados y Mehrangarh.", pt: "Perto de mercados e Mehrangarh." }, image: "" }
    ],
    travelTips: [
      { en: "Visit Mehrangarh early for comfortable sightseeing.", es: "Visita Mehrangarh temprano.", pt: "Visite Mehrangarh cedo." },
      { en: "Wear comfortable footwear for old city and fort areas.", es: "Usa calzado cómodo para la ciudad antigua.", pt: "Use calçados confortáveis para a cidade antiga." },
      { en: "Carry sun protection and water during daytime.", es: "Lleva protección solar y agua.", pt: "Leve proteção solar e água." },
      { en: "Explore local markets with time for shopping and photography.", es: "Dedica tiempo a los mercados.", pt: "Reserve tempo para os mercados." },
      { en: "Book heritage hotels in advance during high season.", es: "Reserva hoteles con anticipación.", pt: "Reserve hotéis com antecedência." }
    ],
    gettingAround: [
      { transportType: "Auto-rickshaw", title: { en: "Rickshaws, Taxis & Walking", es: "Rickshaws, Taxis y Caminar", pt: "Riquixás, Táxis e Caminhada" }, desc: { en: "Rickshaws for central sightseeing. Walking ideal for old city. Private cars for distant attractions.", es: "Rickshaws para el centro. Caminar para la ciudad antigua. Coche para atracciones alejadas.", pt: "Riquixás para o centro. Caminhada para a cidade antiga. Carro para atrações distantes." }, recommended: true }
    ]
  },
  udaipur: {
    thingsToDo: [
      { en: "Visit City Palace overlooking Lake Pichola — courtyards, museums and balconies", es: "Explora el City Palace sobre el lago Pichola", pt: "Explore o City Palace sobre o Lago Pichola" },
      { en: "Enjoy a scenic boat ride across Lake Pichola", es: "Disfruta de un paseo en barco por el lago Pichola", pt: "Faça um passeio de barco pelo Lago Pichola" },
      { en: "Explore Jagdish Temple — detailed carvings and impressive architecture", es: "Visita el templo Jagdish con tallas elaboradas", pt: "Visite o templo Jagdish com esculturas detalhadas" },
      { en: "Visit Saheliyon-ki-Bari — elegant gardens for royal women", es: "Pasea por los jardines Saheliyon-ki-Bari", pt: "Caminhe pelos jardins Saheliyon-ki-Bari" },
      { en: "Watch sunset at Sajjangarh (Monsoon Palace) with panoramic views", es: "Disfruta del atardecer desde Sajjangarh", pt: "Aprecie o pôr do sol a partir de Sajjangarh" }
    ],
    experiences: [
      { name: { en: "Romantic Lake Experience", es: "Experiencia Romántica en el Lago", pt: "Experiência Romântica no Lago" }, desc: { en: "Peaceful boat ride, lakeside dining and beautiful sunset views.", es: "Paseo en barco, cena junto al lago y atardeceres.", pt: "Passeio de barco, jantar à beira do lago e entardeceres." } },
      { name: { en: "Royal Heritage Experience", es: "Experiencia de Patrimonio Real", pt: "Experiência de Patrimônio Real" }, desc: { en: "Discover history and architecture of Mewar royal family through palaces.", es: "Descubre la historia de la familia real de Mewar.", pt: "Conheça a história da família real de Mewar." } },
      { name: { en: "Rajasthani Cultural Experience", es: "Experiencia Cultural de Rajasthan", pt: "Experiência Cultural do Rajasthan" }, desc: { en: "Folk music, traditional dance, crafts and authentic cuisine.", es: "Música, danzas, artesanías y gastronomía auténtica.", pt: "Música, danças, artesanato e culinária autêntica." } },
      { name: { en: "Lake Sunset Experience", es: "Experiencia del Atardecer en el Lago", pt: "Experiência do Pôr do Sol no Lago" }, desc: { en: "Watch changing sky colours over Lake Pichola from rooftop or boat.", es: "Observa el cielo cambiante sobre el lago desde terraza o barco.", pt: "Observe o céu mudando sobre o lago de um rooftop ou barco." } },
      { name: { en: "Art & Craft Experience", es: "Experiencia de Arte y Artesanía", pt: "Experiência de Arte e Artesanato" }, desc: { en: "Discover miniature paintings, textiles, jewellery and handicrafts.", es: "Descubre pinturas en miniatura, textiles y artesanías.", pt: "Descubra pinturas em miniatura, tecidos e artesanato." } }
    ],
    localFood: { en: "Try Dal Baati Churma, Gatte Ki Sabzi, Laal Maas, Kachori, Ghewar and traditional Rajasthani thali.", es: "Pruebe Dal Baati Churma, Gatte Ki Sabzi, Laal Maas, Kachori y Ghewar.", pt: "Prove Dal Baati Churma, Gatte Ki Sabzi, Laal Maas, Kachori e Ghewar." },
    hotels: [
      { name: "Lake Pichola Luxury Hotels", tier: "Luxury", desc: { en: "Best for romantic lake views.", es: "Para vistas románticas al lago.", pt: "Para vistas românticas do lago." }, image: "" },
      { name: "Heritage Palace Hotels", tier: "Luxury", desc: { en: "Royal experience in restored palaces.", es: "Experiencia real en palacios.", pt: "Experiência real em palácios." }, image: "" },
      { name: "Old City Boutique Hotels", tier: "Mid-Range", desc: { en: "Great for culture and sightseeing.", es: "Ideal para cultura y turismo.", pt: "Ideal para cultura e turismo." }, image: "" }
    ],
    travelTips: [
      { en: "Book lake-view accommodation early during peak season.", es: "Reserva alojamiento con vistas al lago con anticipación.", pt: "Reserve hospedagem com vista para o lago com antecedência." },
      { en: "Plan boat rides around sunset for best experience.", es: "Programa paseos en barco al atardecer.", pt: "Planeje passeios de barco ao pôr do sol." },
      { en: "Wear comfortable footwear for palace and old-city exploration.", es: "Usa calzado cómodo para palacios y ciudad antigua.", pt: "Use calçados confortáveis para palácios e cidade antiga." },
      { en: "Carry sun protection during daytime sightseeing.", es: "Lleva protección solar durante el día.", pt: "Leve proteção solar durante o dia." },
      { en: "Explore local handicraft shops and miniature art studios.", es: "Explora tiendas de artesanías y estudios de arte.", pt: "Explore lojas de artesanato e estúdios de arte." }
    ],
    gettingAround: [
      { transportType: "Multiple", title: { en: "Rickshaws, Boats & Walking", es: "Rickshaws, Barcos y Caminar", pt: "Riquixás, Barcos e Caminhada" }, desc: { en: "Rickshaws for city. Walking ideal for old city and lakeside. Boats essential for Lake Pichola. Private cars for Sajjangarh.", es: "Rickshaws para la ciudad. Caminar en el centro. Barcos para el lago. Coche para Sajjangarh.", pt: "Riquixás para a cidade. Caminhada no centro. Barcos para o lago. Carro para Sajjangarh." }, recommended: true }
    ]
  },
  jaisalmer: {
    thingsToDo: [
      { en: "Explore Jaisalmer Fort — living fort with narrow lanes, temples, havelis and panoramic views", es: "Explora el fuerte habitado con calles, templos y havelis", pt: "Explore o forte habitado com ruas, templos e havelis" },
      { en: "Visit Patwon Ki Haveli — intricate architecture and craftsmanship", es: "Admira la arquitectura de Patwon Ki Haveli", pt: "Admire a arquitetura de Patwon Ki Haveli" },
      { en: "Experience Sam Sand Dunes — camel rides, jeep safaris and sunset views", es: "Descubre las dunas de Sam con camellos y safaris", pt: "Explore as dunas de Sam com camelos e safáris" },
      { en: "Explore Gadisar Lake surrounded by temples and traditional architecture", es: "Visita el lago Gadisar rodeado de templos", pt: "Visite o lago Gadisar cercado de templos" },
      { en: "Discover Salim Singh Ki Haveli — distinctive carved architecture", es: "Admira la arquitectura de Salim Singh Ki Haveli", pt: "Admire a arquitetura de Salim Singh Ki Haveli" }
    ],
    experiences: [
      { name: { en: "Desert Safari Experience", es: "Experiencia de Safari en el Desierto", pt: "Experiência de Safári no Deserto" }, desc: { en: "Explore the Thar Desert by jeep or camel and experience vast golden landscape.", es: "Explora el desierto del Thar en jeep o camello.", pt: "Explore o deserto de Thar de jipe ou camelo." } },
      { name: { en: "Desert Sunset Experience", es: "Experiencia del Atardecer en el Desierto", pt: "Experiência do Pôr do Sol no Deserto" }, desc: { en: "Watch the sun disappear over the dunes in peaceful desert atmosphere.", es: "Observa el sol desaparecer sobre las dunas.", pt: "Observe o sol desaparecer sobre as dunas." } },
      { name: { en: "Rajasthani Folk Culture Experience", es: "Experiencia de Cultura Folk", pt: "Experiência de Cultura Folk" }, desc: { en: "Traditional music, Kalbelia dance, local food and cultural performances at a desert camp.", es: "Música, danza Kalbelia y gastronomía en un campamento.", pt: "Música, dança Kalbelia e culinária em um acampamento." } },
      { name: { en: "Living Fort Heritage Experience", es: "Experiencia del Fuerte Vivo", pt: "Experiência do Forte Vivo" }, desc: { en: "Walk through Jaisalmer Fort — a historic fort functioning as a living community.", es: "Recorre el fuerte que sigue siendo comunidad viva.", pt: "Caminhe pelo forte que continua como comunidade viva." } },
      { name: { en: "Desert Stargazing Experience", es: "Experiencia de Observación de Estrellas", pt: "Experiência de Observação de Estrelas" }, desc: { en: "Spectacular night sky over the Thar Desert away from city lights.", es: "Espectacular cielo nocturno sobre el desierto.", pt: "Espetacular céu noturno sobre o deserto." } }
    ],
    localFood: { en: "Try Ker Sangri, Gatte Ki Sabzi, Dal Baati Churma, Pyaaz Kachori and Ghotua Ladoo.", es: "Pruebe Ker Sangri, Gatte Ki Sabzi, Dal Baati Churma, Pyaaz Kachori y Ghotua Ladoo.", pt: "Prove Ker Sangri, Gatte Ki Sabzi, Dal Baati Churma, Pyaaz Kachori e Ghotua Ladoo." },
    hotels: [
      { name: "Luxury Desert Camps", tier: "Luxury", desc: { en: "Premium desert experience with cultural performances.", es: "Experiencia premium con espectáculos.", pt: "Experiência premium com apresentações." }, image: "" },
      { name: "Heritage Havelis", tier: "Boutique", desc: { en: "Traditional architecture with modern comforts.", es: "Arquitectura tradicional con comodidades.", pt: "Arquitetura tradicional com conforto." }, image: "" },
      { name: "Fort Heritage Stays", tier: "Mid-Range", desc: { en: "Experience living inside the historic fort.", es: "Vive dentro del fuerte histórico.", pt: "Viva dentro do forte histórico." }, image: "" }
    ],
    travelTips: [
      { en: "Carry warm clothing for cold desert nights.", es: "Lleva ropa abrigada para las noches frías.", pt: "Leve roupas quentes para as noites frias." },
      { en: "Choose reputable operators for camel rides and desert safaris.", es: "Elige operadores de confianza para safaris.", pt: "Escolha operadores confiáveis para safáris." },
      { en: "Carry sunscreen, sunglasses and hat for daytime desert activities.", es: "Lleva protector solar y sombrero para el desierto.", pt: "Leve protetor solar e chapéu para o deserto." },
      { en: "Book desert camps in advance during peak season.", es: "Reserva campamentos con anticipación.", pt: "Reserve acampamentos com antecedência." },
      { en: "Respect living communities and religious sites inside Jaisalmer Fort.", es: "Respeta las comunidades y lugares religiosos del fuerte.", pt: "Respeite as comunidades e locais religiosos do forte." }
    ],
    gettingAround: [
      { transportType: "Multiple", title: { en: "Walking, Rickshaws & Organised Tours", es: "Caminar, Rickshaws y Tours", pt: "Caminhada, Riquixás e Tours" }, desc: { en: "Walking best for the fort and old city. Rickshaws for city attractions. Private vehicles for Sam Sand Dunes.", es: "Caminar para el fuerte. Rickshaws para la ciudad. Coche para las dunas.", pt: "Caminhada para o forte. Riquixás para a cidade. Carro para as dunas." }, recommended: true }
    ]
  }
};

for (const [citySlug, updates] of Object.entries(cityUpdates)) {
  const cityIdx = states[idx].cities.findIndex(c => c.slug === citySlug);
  if (cityIdx === -1) { console.log(`  City ${citySlug} not found, skipping`); continue; }
  
  // Update fields
  if (updates.thingsToDo) states[idx].cities[cityIdx].thingsToDo = updates.thingsToDo;
  if (updates.experiences) states[idx].cities[cityIdx].experiences = updates.experiences;
  if (updates.localFood) states[idx].cities[cityIdx].localFood = updates.localFood;
  if (updates.hotels) states[idx].cities[cityIdx].hotels = updates.hotels;
  if (updates.travelTips) states[idx].cities[cityIdx].travelTips = updates.travelTips;
  if (updates.gettingAround) states[idx].cities[cityIdx].gettingAround = updates.gettingAround;
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");
console.log("✅ Rajasthan cities updated:");
states[idx].cities.forEach(c => {
  console.log(`   - ${c.slug}: thingsToDo=${Array.isArray(c.thingsToDo) ? c.thingsToDo.length : 'OBJECT'}, experiences=${(c.experiences||[]).length}, hotels=${(c.hotels||[]).length}, tips=${(c.travelTips||[]).length}`);
});
