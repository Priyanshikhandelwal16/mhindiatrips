import fs from 'fs';
import path from 'path';

const statesPath = path.resolve('src/data/fallback/states.json');
const citiesPath = path.resolve('src/data/fallback/cities.json');

const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

// Helper to strip any residual HTML tags from plain text fields (like tourist place descriptions)
function cleanPlainText(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// 1. UPDATE ANDAMAN STATE DATA
const stateIndex = states.findIndex(s => s.id === 'andaman-nicobar');

const andamanStateShortDesc = {
  en: "<p><strong>Andaman & Nicobar Islands</strong> are one of India's most spectacular tropical destinations, known for turquoise waters, white-sand beaches, lush forests, coral reefs, marine life, historic landmarks and peaceful island landscapes. From the heritage of Sri Vijaya Puram and the beaches of Swaraj Dweep to the natural attractions of Baratang and the remote beauty of North Andaman, the islands offer a diverse combination of relaxation, adventure, history and nature.</p>",
  es: "<p>Las <strong>Islas Andamán y Nicobar</strong> son uno de los destinos tropicales más espectaculares de la India, conocidos por sus aguas turquesas, playas de arena blanca, bosques exuberantes, arrecifes de coral, vida marina, lugares históricos y paisajes insulares tranquilos. Desde el patrimonio de Sri Vijaya Puram y las playas de Swaraj Dweep hasta los atractivos naturales de Baratang y la belleza más remota del norte de Andamán, las islas ofrecen una combinación diversa de descanso, aventura, historia y naturaleza.</p>",
  pt: "<p>As <strong>Ilhas Andaman e Nicobar</strong> são um dos destinos tropicais mais impressionantes da Índia, conhecidas por suas águas azul-turquesa, praias de areia branca, florestas exuberantes, recifes de coral, vida marinha, locais históricos e paisagens insulares tranquilas. Do patrimônio de Sri Vijaya Puram e das praias de Swaraj Dweep às atrações naturais de Baratang e à beleza mais remota do norte de Andaman, as ilhas oferecem uma combinação diversificada de descanso, aventura, história e natureza.</p>"
};

const andamanStateLongDesc = {
  en: `<h2>Discover Andaman & Nicobar Islands – India's Tropical Island Paradise</h2>

<p>The <strong>Andaman & Nicobar Islands</strong> form a remarkable group of islands in the Bay of Bengal and are among India's most distinctive travel destinations. The islands combine tropical beaches, dense forests, coral reefs, marine biodiversity, historical monuments and opportunities for adventure.</p>

<p>The destination offers very different experiences across its islands. <strong>Sri Vijaya Puram</strong> provides the historical and administrative gateway to the islands, with attractions such as Cellular Jail, museums, Corbyn's Cove and access to nearby islands. <strong>Swaraj Dweep</strong> is famous for its beautiful beaches, especially Radhanagar Beach, and marine activities such as snorkeling and scuba diving.</p>

<p><strong>Shaheed Dweep</strong> provides a quieter island experience with beaches, coral formations and the famous Natural Bridge. <strong>Baratang</strong> is known for mangrove landscapes, limestone caves and mud volcanoes, while <strong>Rangat, Mayabunder and Diglipur</strong> offer opportunities to explore the less-developed natural landscapes of Middle and North Andaman.</p>

<h3>Beaches & Tropical Landscapes</h3>

<p>The islands are known for their beautiful beaches, clear waters, tropical vegetation and spectacular sunsets. Radhanagar Beach, Bharatpur Beach, Lakshmanpur Beach, Kalipur Beach, Wandoor Beach and several other coastal locations provide different experiences ranging from relaxation to nature exploration.</p>

<h3>Marine Life & Coral Reefs</h3>

<p>Andaman is particularly attractive to travellers interested in marine ecosystems. Snorkeling, scuba diving, glass-bottom boat rides and other marine experiences provide opportunities to observe coral reefs and underwater environments. The official tourism portal lists scuba diving, snorkeling, sea walks, glass-bottom boat rides, kayaking, parasailing and several other water-based activities.</p>

<h3>Historical Heritage</h3>

<p>The islands also have an important place in India's modern history. <strong>Cellular Jail</strong> in Sri Vijaya Puram is one of the most significant historical landmarks of the region and is preserved as a national memorial connected with India's freedom struggle.</p>

<h3>Colonial History</h3>

<p>Netaji Subhas Chandra Bose Dweep, formerly known as Ross Island, contains remains of British-era buildings, churches, offices and other structures. The island combines colonial ruins with tropical vegetation and coastal scenery.</p>

<h3>Adventure Tourism</h3>

<ul>
<li>Scuba Diving</li>
<li>Snorkeling</li>
<li>Sea Walking</li>
<li>Kayaking</li>
<li>Parasailing</li>
<li>Jet Skiing</li>
<li>Glass-Bottom Boat Rides</li>
<li>Trekking</li>
<li>Bird Watching</li>
<li>Game Fishing</li>
<li>Camping</li>
<li>Stargazing</li>
</ul>

<h3>Eco-Tourism</h3>

<p>Several parts of Andaman & Nicobar provide opportunities to experience mangrove ecosystems, tropical forests, beaches and wildlife habitats. The official tourism itineraries include mangrove walks, eco-parks, bird watching, nature trails and island excursions.</p>

<h3>Island Hopping</h3>

<p>One of the best ways to experience Andaman is to combine multiple islands in one journey. Sri Vijaya Puram, Swaraj Dweep, Shaheed Dweep, Baratang and North Andaman can offer distinctly different experiences.</p>

<h3>Connectivity</h3>

<p>Veer Savarkar International Airport in Sri Vijaya Puram is the principal air gateway to the islands. Inter-island ferry services connect populated islands and tourist destinations, while other boat services operate on selected routes. The official tourism portal also lists helicopter services to several destinations.</p>`,

  es: `<h2>Descubre las Islas Andamán y Nicobar – El Paraíso Tropical de la India</h2>

<p>Las <strong>Islas Andamán y Nicobar</strong> forman un extraordinario conjunto de islas en la Bahía de Bengala y constituyen uno de los destinos turísticos más singulares de la India. El archipiélago combina playas tropicales, bosques densos, arrecifes de coral, biodiversidad marina, monumentos históricos y numerosas experiencias de aventura.</p>

<p>Cada isla ofrece una experiencia diferente. <strong>Sri Vijaya Puram</strong> funciona como puerta de entrada histórica y administrativa y cuenta con lugares como Cellular Jail, museos, Corbyn's Cove y acceso a varias islas cercanas. <strong>Swaraj Dweep</strong> es famoso por sus playas, especialmente Radhanagar Beach, además de sus actividades marinas.</p>

<p><strong>Shaheed Dweep</strong> ofrece una experiencia insular más tranquila, con playas, formaciones de coral y el famoso Natural Bridge. <strong>Baratang</strong> destaca por sus manglares, cuevas de piedra caliza y volcanes de lodo, mientras que <strong>Rangat, Mayabunder y Diglipur</strong> permiten descubrir paisajes naturales menos urbanizados.</p>

<h3>Playas y Paisajes Tropicales</h3>

<p>Las islas son conocidas por sus playas, aguas transparentes, vegetación tropical y espectaculares atardeceres. Radhanagar Beach, Bharatpur Beach, Lakshmanpur Beach, Kalipur Beach y Wandoor Beach ofrecen diferentes experiencias para los viajeros.</p>

<h3>Vida Marina y Arrecifes</h3>

<p>Andamán es especialmente atractivo para los viajeros interesados en ecosistemas marinos. El snorkel, el buceo, los paseos en barcos con fondo de cristal y otras actividades permiten descubrir los arrecifes y ambientes submarinos.</p>

<h3>Patrimonio Histórico</h3>

<p><strong>Cellular Jail</strong> en Sri Vijaya Puram es uno de los monumentos históricos más importantes de las islas y está relacionado con la historia de la lucha por la independencia de la India. Actualmente está preservado como monumento nacional.</p>

<h3>Historia Colonial</h3>

<p>Netaji Subhas Chandra Bose Dweep, anteriormente conocido como Ross Island, conserva restos de edificios británicos, iglesias y oficinas históricas, rodeados por vegetación tropical y paisajes costeros.</p>

<h3>Turismo de Aventura</h3>

<ul>
<li>Buceo</li>
<li>Snorkel</li>
<li>Caminatas submarinas</li>
<li>Kayak</li>
<li>Parasailing</li>
<li>Moto acuática</li>
<li>Barcos con fondo de cristal</li>
<li>Trekking</li>
<li>Observación de aves</li>
<li>Pesca deportiva</li>
<li>Camping</li>
<li>Observación de estrellas</li>
</ul>`,

  pt: `<h2>Descubra as Ilhas Andaman e Nicobar – O Paraíso Tropical da Índia</h2>

<p>As <strong>Ilhas Andaman e Nicobar</strong> formam um extraordinário arquipélago na Baía de Bengala e estão entre os destinos turísticos mais singulares da Índia. As ilhas combinam praias tropicais, florestas densas, recifes de coral, biodiversidade marinha, monumentos históricos e experiências de aventura.</p>

<p>Cada ilha oferece uma experiência diferente. <strong>Sri Vijaya Puram</strong> funciona como principal porta de entrada histórica e administrativa, com atrações como Cellular Jail, museus, Corbyn's Cove e acesso a outras ilhas. <strong>Swaraj Dweep</strong> é conhecido por suas praias, especialmente Radhanagar Beach, além de atividades marinhas.</p>

<p><strong>Shaheed Dweep</strong> oferece uma experiência insular mais tranquila, com praias, formações de coral e a famosa Natural Bridge. <strong>Baratang</strong> destaca-se pelos manguezais, cavernas de calcário e vulcões de lama, enquanto <strong>Rangat, Mayabunder e Diglipur</strong> permitem explorar paisagens naturais menos urbanizadas.</p>

<h3>Praias e Paisagens Tropicais</h3>

<p>As ilhas são conhecidas por suas praias, águas cristalinas, vegetação tropical e belos pôr do sol. Radhanagar Beach, Bharatpur Beach, Lakshmanpur Beach, Kalipur Beach e Wandoor Beach oferecem experiências diferentes aos viajantes.</p>

<h3>Vida Marinha e Recifes de Coral</h3>

<p>Andaman é especialmente interessante para viajantes que desejam conhecer ecossistemas marinhos. Snorkeling, mergulho, barcos com fundo de vidro e outras experiências permitem observar recifes de coral e ambientes subaquáticos.</p>

<h3>Patrimônio Histórico</h3>

<p><strong>Cellular Jail</strong>, em Sri Vijaya Puram, é um dos principais monumentos históricos das ilhas e está profundamente ligado à história da luta pela independência da Índia. Atualmente é preservado como memorial nacional.</p>

<h3>História Colonial</h3>

<p>Netaji Subhas Chandra Bose Dweep, anteriormente conhecido como Ross Island, preserva ruínas de edifícios britânicos, igrejas e escritórios históricos cercados por vegetação tropical e paisagens costeiras.</p>

<h3>Turismo de Aventura</h3>

<ul>
<li>Mergulho</li>
<li>Snorkeling</li>
<li>Caminhada submarina</li>
<li>Caiaque</li>
<li>Parasailing</li>
<li>Jet ski</li>
<li>Passeios de barco com fundo de vidro</li>
<li>Trekking</li>
<li>Observação de aves</li>
<li>Pesca esportiva</li>
<li>Camping</li>
<li>Observação de estrelas</li>
</ul>`
};

const andamanSeoTitle = {
  en: "Andaman & Nicobar Islands Tourism – Beaches, Islands, Adventure & Heritage",
  es: "Turismo de las Islas Andamán y Nicobar – Playas, Islas, Aventura y Patrimonio",
  pt: "Turismo das Ilhas Andaman e Nicobar – Praias, Ilhas, Aventura e Patrimônio"
};

const andamanSeoDesc = {
  en: "Explore Andaman & Nicobar Islands with pristine beaches, coral reefs, scuba diving, Cellular Jail, island hopping, tropical forests and unforgettable island experiences.",
  es: "Explora las Islas Andamán y Nicobar con playas paradisíacas, arrecifes de coral, buceo, Cellular Jail, excursiones entre islas y bosques tropicales.",
  pt: "Explore as Ilhas Andaman e Nicobar com praias paradisíacas, recifes de coral, mergulho, Cellular Jail, passeios entre ilhas e florestas tropicais."
};

const andamanSeoKeywords = {
  en: "Andaman Tourism, Andaman and Nicobar Islands, Andaman Islands, Port Blair, Sri Vijaya Puram, Havelock Island, Swaraj Dweep, Neil Island, Shaheed Dweep, Radhanagar Beach, Cellular Jail, Scuba Diving, Snorkeling, Island Tourism, Beach Tourism, Marine Tourism, Adventure Tourism, Tropical Islands, India Island Holidays",
  es: "Turismo de Andamán, Islas Andamán y Nicobar, Islas Andamán, Sri Vijaya Puram, Havelock, Swaraj Dweep, Neil Island, Shaheed Dweep, Radhanagar Beach, Cellular Jail, Buceo, Snorkel, Turismo de Islas, Turismo de Playa, Turismo Marino, Turismo de Aventura",
  pt: "Turismo de Andaman, Ilhas Andaman e Nicobar, Ilhas Andaman, Sri Vijaya Puram, Havelock, Swaraj Dweep, Neil Island, Shaheed Dweep, Radhanagar Beach, Cellular Jail, Mergulho, Snorkeling, Turismo de Ilhas, Turismo de Praia, Turismo Marinho, Turismo de Aventura"
};

if (stateIndex !== -1) {
  states[stateIndex].description = andamanStateShortDesc;
  states[stateIndex].overview = andamanStateLongDesc;
  states[stateIndex].content = andamanStateLongDesc;
  states[stateIndex].fullDescription = andamanStateLongDesc;
  states[stateIndex].seoTitle = andamanSeoTitle;
  states[stateIndex].seoDesc = andamanSeoDesc;
  states[stateIndex].seoKeywords = andamanSeoKeywords;
  states[stateIndex].isPublished = true;
  states[stateIndex].isDeleted = false;
  states[stateIndex].updatedAt = new Date().toISOString();
}

fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log('Updated Andaman state in states.json');

// 2. DEFINE THE 7 CITIES
const newCitiesData = [
  // 1. SRI VIJAYA PURAM
  {
    id: "sri-vijaya-puram",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 1,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=80",
    slug: {
      en: "sri-vijaya-puram",
      es: "sri-vijaya-puram",
      pt: "sri-vijaya-puram"
    },
    name: {
      en: "Sri Vijaya Puram",
      es: "Sri Vijaya Puram",
      pt: "Sri Vijaya Puram"
    },
    description: {
      en: "<p><strong>Sri Vijaya Puram</strong>, formerly known as Port Blair, is the capital and principal gateway to the Andaman & Nicobar Islands. It combines colonial history, freedom movement heritage, museums, beaches, marine experiences, markets and access to nearby islands.</p>",
      es: "<p><strong>Sri Vijaya Puram</strong>, anteriormente conocida como Port Blair, es la capital y principal puerta de entrada a las Islas Andamán y Nicobar. Combina historia colonial, patrimonio de la lucha por la independencia, museos, playas, experiencias marinas y acceso a islas cercanas.</p>",
      pt: "<p><strong>Sri Vijaya Puram</strong>, anteriormente conhecida como Port Blair, é a capital e principal porta de entrada das Ilhas Andaman e Nicobar. A cidade combina história colonial, patrimônio da luta pela independência, museus, praias, experiências marinhas e acesso às ilhas próximas.</p>"
    },
    overview: {
      en: `<h2>Discover Sri Vijaya Puram – The Gateway to Andaman</h2>

<p>Sri Vijaya Puram is the capital of the Andaman & Nicobar Islands and the starting point for many island journeys. The city combines history, culture, marine attractions, shopping and access to nearby islands.</p>

<p>The most important historical attraction is <strong>Cellular Jail</strong>, a former colonial prison that is now preserved as a national memorial. The site provides an important connection to India's freedom struggle and is also known for its evening Light & Sound presentation.</p>

<p>Beyond history, Sri Vijaya Puram offers museums, marine exhibits, beaches and access to destinations such as Netaji Subhas Chandra Bose Dweep and North Bay.</p>

<h3>Historical Experiences</h3>

<p>Visitors can explore Cellular Jail, heritage sites and museums associated with the history and culture of the islands.</p>

<h3>Marine Experiences</h3>

<p>Boat excursions, snorkeling, glass-bottom boat rides and island trips can be arranged from the city and nearby jetties.</p>

<h3>Beaches</h3>

<p>Corbyn's Cove and Chidiyatapu provide opportunities for coastal sightseeing, relaxation and sunset experiences.</p>

<h3>Shopping</h3>

<p>Sagarika Emporium provides opportunities to explore local handicrafts and island-inspired products.</p>`,
      es: `<h2>Descubre Sri Vijaya Puram – La Puerta de Entrada a Andamán</h2>

<p>Sri Vijaya Puram es la capital de las Islas Andamán y Nicobar y el punto de partida para numerosos recorridos insulares. La ciudad combina historia, cultura, atracciones marinas, compras y acceso a islas cercanas.</p>

<p>La atracción histórica más importante es <strong>Cellular Jail</strong>, una antigua prisión colonial actualmente preservada como monumento nacional. El lugar guarda un estrecho vínculo con la lucha por la independencia de la India y es famoso por su espectáculo nocturno de Luz y Sonido.</p>

<p>Más allá de la historia, Sri Vijaya Puram ofrece museos, exhibiciones marinas, playas y acceso a destinos como Netaji Subhas Chandra Bose Dweep y North Bay.</p>

<h3>Experiencias Históricas</h3>

<p>Los visitantes pueden explorar Cellular Jail, sitios patrimoniales y museos vinculados a la historia y cultura de las islas.</p>

<h3>Experiencias Marinas</h3>

<p>Paseos en barco, snorkel, recorridos en embarcaciones con fondo de cristal y excursiones a islas se organizan desde la ciudad y sus embarcaderos.</p>

<h3>Playas</h3>

<p>Corbyn's Cove y Chidiyatapu ofrecen excelentes lugares para disfrutar de paisajes costeros, descanso y atardeceres.</p>

<h3>Compras</h3>

<p>Sagarika Emporium brinda la oportunidad de descubrir artesanías locales y productos inspirados en las islas.</p>`,
      pt: `<h2>Descubra Sri Vijaya Puram – A Porta de Entrada para Andaman</h2>

<p>Sri Vijaya Puram é a capital das Ilhas Andaman e Nicobar e o ponto de partida para a maioria das viagens pelo arquipélago. A cidade combina história, cultura, atrações marinhas, compras e acesso às ilhas próximas.</p>

<p>A atração histórica mais importante é a <strong>Cellular Jail</strong>, uma antiga prisão colonial hoje preservada como memorial nacional. O local possui profunda ligação com a luta pela independência da Índia e é famoso pelo espetáculo noturno de Luz e Som.</p>

<p>Além da história, Sri Vijaya Puram oferece museus, exposições marinhas, praias e acesso a destinos como Netaji Subhas Chandra Bose Dweep e North Bay.</p>

<h3>Experiências Históricas</h3>

<p>Os visitantes podem explorar a Cellular Jail, locais de patrimônio e museus associados à história e cultura das ilhas.</p>

<h3>Experiências Marinhas</h3>

<p>Passeios de barco, snorkeling, embarcações com fundo de vidro e excursões para outras ilhas podem ser organizados a partir da cidade.</p>

<h3>Praias</h3>

<p>Corbyn's Cove e Chidiyatapu oferecem ótimas opções para passeios à beira-mar, relaxamento e paisagens ao pôr do sol.</p>

<h3>Compras</h3>

<p>O Sagarika Emporium é ideal para encontrar artesanato local e lembranças inspiradas nas ilhas.</p>`
    },
    seoTitle: {
      en: "Sri Vijaya Puram Tourism – Cellular Jail, Beaches & Island Adventures",
      es: "Turismo de Sri Vijaya Puram – Cellular Jail, Playas y Aventuras",
      pt: "Turismo de Sri Vijaya Puram – Cellular Jail, Praias e Aventuras"
    },
    seoDesc: {
      en: "Discover Sri Vijaya Puram (Port Blair), the gateway to Andaman. Explore Cellular Jail, Corbyn's Cove Beach, North Bay, Ross Island and marine adventures.",
      es: "Descubre Sri Vijaya Puram (Port Blair), puerta de entrada a Andamán. Visita Cellular Jail, Corbyn's Cove Beach, North Bay e Isla Ross.",
      pt: "Descubra Sri Vijaya Puram (Port Blair), portal de Andaman. Visite Cellular Jail, praia Corbyn's Cove, North Bay e Ilha Ross."
    },
    seoKeywords: {
      en: "Sri Vijaya Puram, Port Blair, Cellular Jail, Andaman Tourism, Corbyn's Cove, Chidiyatapu",
      es: "Sri Vijaya Puram, Port Blair, Cellular Jail, Turismo de Andamán, Corbyn's Cove, Chidiyatapu",
      pt: "Sri Vijaya Puram, Port Blair, Cellular Jail, Turismo de Andaman, Corbyn's Cove, Chidiyatapu"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Cellular Jail", es: "Cárcel Cellular", pt: "Prisão Cellular" },
        description: {
          en: cleanPlainText("Cellular Jail is the most important historical attraction of Sri Vijaya Puram and one of the major heritage landmarks of the Andaman Islands. Built during British rule, it became associated with the imprisonment and exile of Indian freedom fighters. Today it is preserved as a national memorial and museum."),
          es: cleanPlainText("Cellular Jail es la principal atracción histórica de Sri Vijaya Puram y uno de los monumentos patrimoniales más importantes de las islas. Construida durante el dominio británico, estuvo relacionada con el encarcelamiento y exilio de luchadores por la libertad de la India. Actualmente funciona como monumento nacional y museo."),
          pt: cleanPlainText("Cellular Jail é a principal atração histórica de Sri Vijaya Puram e um dos monumentos patrimoniais mais importantes das ilhas. Construída durante o domínio britânico, esteve ligada à prisão e ao exílio de lutadores pela independência da Índia. Atualmente funciona como memorial nacional e museu.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Corbyn's Cove Beach", es: "Playa Corbyn's Cove", pt: "Praia de Corbyn's Cove" },
        description: {
          en: cleanPlainText("Corbyn's Cove is a popular beach near Sri Vijaya Puram, offering a convenient coastal escape with palm trees, sea views and opportunities for relaxation."),
          es: cleanPlainText("Corbyn's Cove es una playa popular cerca de Sri Vijaya Puram, con palmeras, vistas al mar y un ambiente adecuado para relajarse."),
          pt: cleanPlainText("Corbyn's Cove é uma praia popular perto de Sri Vijaya Puram, com palmeiras, vistas para o mar e um ambiente agradável para relaxar.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Netaji Subhas Chandra Bose Dweep", es: "Isla Netaji Subhas Chandra Bose", pt: "Ilha Netaji Subhas Chandra Bose" },
        description: {
          en: cleanPlainText("This historic island, formerly known as Ross Island, is famous for British-era ruins, old buildings, coastal scenery and its connection with the history of the Andaman Islands."),
          es: cleanPlainText("Esta isla histórica, anteriormente conocida como Ross Island, es famosa por sus ruinas británicas, edificios antiguos, paisajes costeros y su relación con la historia de las islas."),
          pt: cleanPlainText("Esta ilha histórica, anteriormente conhecida como Ross Island, é famosa por suas ruínas britânicas, edifícios antigos, paisagens costeiras e sua ligação com a história das ilhas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "North Bay Island", es: "Isla North Bay", pt: "Ilha North Bay" },
        description: {
          en: cleanPlainText("North Bay is known for marine experiences and coral viewing. Glass-bottom boat rides and snorkeling are among the activities associated with the island."),
          es: cleanPlainText("North Bay es conocida por sus experiencias marinas y la observación de corales. Los paseos en barcos con fondo de cristal y el snorkel son actividades populares."),
          pt: cleanPlainText("North Bay é conhecida por experiências marinhas e observação de corais. Passeios em barcos com fundo de vidro e snorkeling estão entre as atividades populares.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Chidiyatapu", es: "Chidiyatapu", pt: "Chidiyatapu" },
        description: {
          en: cleanPlainText("Chidiyatapu is a scenic coastal destination known for its greenery, beaches and sunset views. The official tourism itinerary includes Chidiyatapu-Munda Pahar and its sunset viewpoint."),
          es: cleanPlainText("Chidiyatapu es un destino costero conocido por su vegetación, playas y vistas del atardecer. Los itinerarios oficiales incluyen Chidiyatapu-Munda Pahar y su mirador."),
          pt: cleanPlainText("Chidiyatapu é um destino costeiro conhecido por sua vegetação, praias e vistas do pôr do sol. Os itinerários oficiais incluem Chidiyatapu-Munda Pahar e seu mirante.")
        }
      }
    ]
  },

  // 2. SWARAJ DWEEP
  {
    id: "swaraj-dweep",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 2,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    slug: {
      en: "swaraj-dweep",
      es: "swaraj-dweep",
      pt: "swaraj-dweep"
    },
    name: {
      en: "Swaraj Dweep",
      es: "Swaraj Dweep",
      pt: "Swaraj Dweep"
    },
    description: {
      en: "<p><strong>Swaraj Dweep</strong>, formerly known as Havelock Island, is one of the most popular island destinations in Andaman. It is famous for Radhanagar Beach, tropical forests, turquoise waters, coral reefs, snorkeling and scuba diving.</p>",
      es: "<p><strong>Swaraj Dweep</strong>, anteriormente conocida como Havelock Island, es uno de los destinos insulares más populares de Andamán. Es famosa por Radhanagar Beach, sus bosques tropicales, aguas turquesas, arrecifes de coral, snorkel y buceo.</p>",
      pt: "<p><strong>Swaraj Dweep</strong>, anteriormente conhecida como Havelock Island, é um dos destinos insulares mais populares de Andaman. É famosa por Radhanagar Beach, florestas tropicais, águas azul-turquesa, recifes de coral, snorkeling e mergulho.</p>"
    },
    overview: {
      en: `<h2>Discover Swaraj Dweep – Beaches, Coral Reefs & Island Adventures</h2>

<p>Swaraj Dweep is one of the best-known island destinations in the Andaman group and is particularly popular among travellers seeking beaches and marine experiences.</p>

<p><strong>Radhanagar Beach</strong> is the island's most famous attraction and is known for white sand, turquoise water and beautiful sunset scenery.</p>

<p>The island is also associated with snorkeling, scuba diving, kayaking and other water-based experiences. The official tourism itineraries include Elephant Beach, Radhanagar Beach and Kalapathar Beach as key experiences on Swaraj Dweep.</p>

<h3>Beach Experiences</h3>

<p>Visitors can spend time swimming in designated areas, relaxing beside the sea, walking along beaches and watching tropical sunsets.</p>

<h3>Marine Adventure</h3>

<p>Snorkeling and scuba diving provide opportunities to discover coral and marine environments.</p>

<h3>Nature</h3>

<p>The island combines beaches with tropical vegetation, making it suitable for travellers who want both coastal and forest landscapes.</p>`,
      es: `<h2>Descubre Swaraj Dweep – Playas, Arrecifes y Aventuras Insulares</h2>

<p>Swaraj Dweep es uno de los destinos insulares más conocidos de Andamán y resulta muy popular entre viajeros en busca de playas y experiencias marinas.</p>

<p><strong>Radhanagar Beach</strong> es la atracción más famosa de la isla, conocida por su arena blanca, aguas turquesas y hermosos atardeceres.</p>

<p>La isla también destaca por el snorkel, el buceo, el kayak y otras actividades acuáticas. Los itinerarios oficiales incluyen Elephant Beach, Radhanagar Beach y Kalapathar Beach como lugares clave.</p>

<h3>Experiencias en la Playa</h3>

<p>Los visitantes pueden nadar en zonas autorizadas, relajarse frente al mar, caminar por la costa y contemplar impresionantes atardeceres tropicales.</p>

<h3>Aventura Marina</h3>

<p>El snorkel y el buceo permiten explorar espectaculares arrecifes de coral y la vida submarina.</p>

<h3>Naturaleza</h3>

<p>La isla combina frondosa vegetación tropical con playas virgenes, perfecta para amantes del mar y los bosques.</p>`,
      pt: `<h2>Descubra Swaraj Dweep – Praias, Recifes de Coral e Aventuras</h2>

<p>Swaraj Dweep é um dos destinos insulares mais famosos do arquipélago de Andaman e é especialmente procurado por quem busca praias paradisíacas e experiências marinhas.</p>

<p>A <strong>Praia de Radhanagar</strong> é a principal atração da ilha, conhecida pela areia branca, águas azul-turquesa e deslumbrantes entardeceres.</p>

<p>A ilha também é ideal para a prática de snorkeling, mergulho, caiaque e esportes náuticos. Os roteiros incluem Elephant Beach, Radhanagar Beach e Kalapathar Beach entre os destaques imperdíveis.</p>

<h3>Experiências nas Praias</h3>

<p>Os visitantes podem nadar em áreas permitidas, relaxar à beira-mar, caminhar pela areia e apreciar o pôr do sol tropical.</p>

<h3>Aventuras Marinhas</h3>

<p>O snorkeling e o mergulho oferecem a chance de explorar recifes de coral preservados e rica vida marinha.</p>

<h3>Natureza</h3>

<p>A ilha combina áreas de mata tropical exuberante com o mar cristalino, ideal para entusiastas da natureza.</p>`
    },
    seoTitle: {
      en: "Swaraj Dweep Tourism (Havelock) – Radhanagar Beach & Scuba Diving",
      es: "Turismo de Swaraj Dweep (Havelock) – Radhanagar Beach y Buceo",
      pt: "Turismo de Swaraj Dweep (Havelock) – Radhanagar Beach e Mergulho"
    },
    seoDesc: {
      en: "Explore Swaraj Dweep (Havelock Island) in Andaman. Visit Radhanagar Beach, Elephant Beach, Kalapathar Beach and enjoy world-class scuba diving & snorkeling.",
      es: "Explora Swaraj Dweep (Isla Havelock) en Andamán. Visita Radhanagar Beach, Elephant Beach, Kalapathar Beach y disfruta de buceo y snorkel.",
      pt: "Explore Swaraj Dweep (Ilha Havelock) em Andaman. Visite Radhanagar Beach, Elephant Beach, Kalapathar Beach e aproveite mergulho e snorkeling."
    },
    seoKeywords: {
      en: "Swaraj Dweep, Havelock Island, Radhanagar Beach, Elephant Beach, Scuba Diving Andaman, Snorkeling Havelock",
      es: "Swaraj Dweep, Isla Havelock, Radhanagar Beach, Elephant Beach, Buceo Andamán, Snorkel Havelock",
      pt: "Swaraj Dweep, Ilha Havelock, Radhanagar Beach, Elephant Beach, Mergulho Andaman, Snorkeling Havelock"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Radhanagar Beach", es: "Playa Radhanagar", pt: "Praia de Radhanagar" },
        description: {
          en: cleanPlainText("Radhanagar Beach is the signature attraction of Swaraj Dweep, famous for its white sand, turquoise water and peaceful tropical setting. It is particularly popular for relaxation and sunset views."),
          es: cleanPlainText("Radhanagar Beach es la principal atracción de Swaraj Dweep, famosa por su arena blanca, aguas turquesas y ambiente tropical tranquilo. Es especialmente popular para relajarse y disfrutar del atardecer."),
          pt: cleanPlainText("Radhanagar Beach é a principal atração de Swaraj Dweep, famosa por sua areia branca, águas azul-turquesa e ambiente tropical tranquilo. É especialmente procurada para relaxamento e para apreciar o pôr do sol.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Elephant Beach", es: "Playa Elephant", pt: "Praia Elephant" },
        description: {
          en: cleanPlainText("Elephant Beach is a popular marine activity destination known for snorkeling, coral viewing and water-based experiences."),
          es: cleanPlainText("Elephant Beach es un destino popular para actividades marinas, especialmente snorkel, observación de corales y experiencias acuáticas."),
          pt: cleanPlainText("Elephant Beach é um destino popular para atividades marinhas, especialmente snorkeling, observação de corais e experiências aquáticas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Kalapathar Beach", es: "Playa Kalapathar", pt: "Praia Kalapathar" },
        description: {
          en: cleanPlainText("Kalapathar Beach is a scenic coastal location surrounded by tropical greenery. Its quieter atmosphere makes it suitable for travellers looking for a peaceful beach experience."),
          es: cleanPlainText("Kalapathar Beach es una hermosa zona costera rodeada de vegetación tropical. Su ambiente más tranquilo es ideal para quienes buscan una experiencia relajada junto al mar."),
          pt: cleanPlainText("Kalapathar Beach é uma bela área costeira cercada por vegetação tropical. Sua atmosfera mais tranquila é ideal para quem procura uma experiência relaxante à beira-mar.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Govind Nagar Beach", es: "Playa Govind Nagar", pt: "Praia Govind Nagar" },
        description: {
          en: cleanPlainText("Govind Nagar Beach offers a convenient coastal experience near the main settlement of Swaraj Dweep, with sea views and opportunities for relaxation."),
          es: cleanPlainText("Govind Nagar Beach ofrece una experiencia costera cerca de la zona principal de Swaraj Dweep, con vistas al mar y espacios para relajarse."),
          pt: cleanPlainText("Govind Nagar Beach oferece uma experiência costeira perto da principal área habitada de Swaraj Dweep, com vistas para o mar e espaços para relaxamento.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Scuba Diving Sites", es: "Zonas de Buceo", pt: "Locais de Mergulho" },
        description: {
          en: cleanPlainText("Swaraj Dweep is one of Andaman's recognized destinations for scuba diving and marine exploration. Different diving experiences allow visitors to explore underwater coral and marine environments."),
          es: cleanPlainText("Swaraj Dweep es uno de los destinos reconocidos de Andamán para el buceo y la exploración marina. Las diferentes experiencias permiten descubrir los corales y ambientes submarinos."),
          pt: cleanPlainText("Swaraj Dweep é um dos destinos reconhecidos de Andaman para mergulho e exploração marinha. Diferentes experiências permitem conhecer os corais e ambientes subaquáticos.")
        }
      }
    ]
  },

  // 3. SHAHEED DWEEP
  {
    id: "shaheed-dweep",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 3,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
    slug: {
      en: "shaheed-dweep",
      es: "shaheed-dweep",
      pt: "shaheed-dweep"
    },
    name: {
      en: "Shaheed Dweep",
      es: "Shaheed Dweep",
      pt: "Shaheed Dweep"
    },
    description: {
      en: "<p><strong>Shaheed Dweep</strong>, formerly known as Neil Island, is a peaceful island destination famous for beautiful beaches, coral landscapes, natural formations, tropical vegetation and relaxed island experiences.</p>",
      es: "<p><strong>Shaheed Dweep</strong>, anteriormente conocida como Neil Island, es un destino insular tranquilo famoso por sus playas, paisajes de coral, formaciones naturales, vegetación tropical y ambiente relajado.</p>",
      pt: "<p><strong>Shaheed Dweep</strong>, anteriormente conhecida como Neil Island, é um destino insular tranquilo famoso por suas praias, paisagens de coral, formações naturais, vegetação tropical e experiências relaxantes.</p>"
    },
    overview: {
      en: `<h2>Discover Shaheed Dweep – Peaceful Beaches & Natural Beauty</h2>

<p>Shaheed Dweep offers a slower and quieter island experience compared with some of the more developed tourist destinations of Andaman.</p>

<p>The island is known for <strong>Bharatpur Beach, Lakshmanpur Beach, Sitapur Beach</strong> and the Natural Bridge formation. Official tourism itineraries include all of these attractions as part of island exploration.</p>

<h3>Beach Life</h3>

<p>Visitors can explore different beaches, enjoy coastal walks, observe changing colours of the sea and spend time surrounded by tropical landscapes.</p>

<h3>Natural Formations</h3>

<p>The Natural Bridge is one of the island's distinctive attractions and provides an interesting example of coastal geological formation.</p>

<h3>Slow Island Travel</h3>

<p>Shaheed Dweep is particularly suitable for travellers who want a quieter atmosphere, nature photography and relaxed beach experiences.</p>`,
      es: `<h2>Descubre Shaheed Dweep – Playas Tranquilas y Belleza Natural</h2>

<p>Shaheed Dweep ofrece un ritmo de vida insular más relajado y tranquilo en comparación con otros destinos más concurridos de Andamán.</p>

<p>La isla es famosa por <strong>Bharatpur Beach, Lakshmanpur Beach, Sitapur Beach</strong> y la formación rocosa Natural Bridge. Los itinerarios oficiales incluyen todos estos atractivos.</p>

<h3>Vida de Playa</h3>

<p>Los viajeros pueden explorar diversas playas, pasear por la orilla del mar, contemplar los cambios de color del agua y disfrutar del paisaje tropical.</p>

<h3>Formaciones Naturales</h3>

<p>El Puente Natural (Natural Bridge) es un icono geológico de la isla creado por la erosión marina.</p>

<h3>Turismo de Descanso</h3>

<p>Shaheed Dweep es ideal para quienes buscan tranquilidad, fotografía de naturaleza y jornadas relajantes junto al mar.</p>`,
      pt: `<h2>Descubra Shaheed Dweep – Praias Tranquilas e Beleza Natural</h2>

<p>Shaheed Dweep oferece um ritmo mais calmo e sereno em comparação com os destinos mais movimentados das Ilhas Andaman.</p>

<p>A ilha destaca-se pela <strong>Praia de Bharatpur, Praia de Lakshmanpur, Praia de Sitapur</strong> e pela formação da Natural Bridge. Os roteiros turísticos incluem todas essas atrações imperdíveis.</p>

<h3>Vida praiana</h3>

<p>Os visitantes podem passear por várias praias, fazer caminhadas à beira-mar, admirar os tons do oceano e relaxar na vegetação tropical.</p>

<h3>Formações Naturais</h3>

<p>A Natural Bridge é um dos símbolos mais marcantes da ilha, exemplar impressionante de geologia costeira.</p>

<h3>Turismo Sem Apressa</h3>

<p>Shaheed Dweep é perfeita para viajantes que priorizam sossego, fotografia da natureza e dias relaxantes no litoral.</p>`
    },
    seoTitle: {
      en: "Shaheed Dweep Tourism (Neil Island) – Natural Bridge & Coral Beaches",
      es: "Turismo de Shaheed Dweep (Neil Island) – Puente Natural y Playas",
      pt: "Turismo de Shaheed Dweep (Neil Island) – Ponte Natural e Praias"
    },
    seoDesc: {
      en: "Discover Shaheed Dweep (Neil Island) in Andaman. Explore Bharatpur Beach, Lakshmanpur Beach, Sitapur Beach and the iconic Natural Bridge.",
      es: "Descubre Shaheed Dweep (Isla Neil) en Andamán. Visita Bharatpur Beach, Lakshmanpur Beach, Sitapur Beach y el famoso Puente Natural.",
      pt: "Descubra Shaheed Dweep (Ilha Neil) em Andaman. Visite Bharatpur Beach, Lakshmanpur Beach, Sitapur Beach e a famosa Ponte Natural."
    },
    seoKeywords: {
      en: "Shaheed Dweep, Neil Island, Bharatpur Beach, Lakshmanpur Beach, Natural Bridge Andaman, Sitapur Beach",
      es: "Shaheed Dweep, Neil Island, Bharatpur Beach, Lakshmanpur Beach, Puente Natural Andamán, Sitapur Beach",
      pt: "Shaheed Dweep, Neil Island, Bharatpur Beach, Lakshmanpur Beach, Ponte Natural Andaman, Sitapur Beach"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Bharatpur Beach", es: "Playa Bharatpur", pt: "Praia Bharatpur" },
        description: {
          en: cleanPlainText("Bharatpur Beach is one of the popular beaches of Shaheed Dweep, known for its clear coastal waters, tropical scenery and opportunities for marine activities."),
          es: cleanPlainText("Bharatpur Beach es una de las playas populares de Shaheed Dweep, conocida por sus aguas costeras claras, paisajes tropicales y actividades marinas."),
          pt: cleanPlainText("Bharatpur Beach é uma das praias populares de Shaheed Dweep, conhecida por suas águas costeiras claras, paisagens tropicais e atividades marinas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Lakshmanpur Beach", es: "Playa Lakshmanpur", pt: "Praia Lakshmanpur" },
        description: {
          en: cleanPlainText("Lakshmanpur Beach is a scenic beach known for its coastal landscapes and beautiful sunset atmosphere. It is a popular location for photography and peaceful evening walks."),
          es: cleanPlainText("Lakshmanpur Beach es una playa escénica conocida por sus paisajes costeros y su ambiente durante el atardecer. Es popular para fotografías y paseos tranquilos."),
          pt: cleanPlainText("Lakshmanpur Beach é uma praia cênica conhecida por suas paisagens costeiras e pelo ambiente durante o pôr do sol. É popular para fotografia e caminhadas tranquilas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Natural Bridge", es: "Puente Natural", pt: "Ponte Natural" },
        description: {
          en: cleanPlainText("The Natural Bridge is a naturally formed coastal rock structure and one of Shaheed Dweep's most recognizable natural attractions."),
          es: cleanPlainText("Natural Bridge es una formación rocosa costera creada naturalmente y uno de los atractivos naturales más reconocibles de Shaheed Dweep."),
          pt: cleanPlainText("Natural Bridge é uma formação rochosa costeira natural e uma das atrações naturais mais reconhecidas de Shaheed Dweep.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Sitapur Beach", es: "Playa Sitapur", pt: "Praia Sitapur" },
        description: {
          en: cleanPlainText("Sitapur Beach is a beautiful coastal location surrounded by tropical vegetation and known for its scenic sunrise atmosphere."),
          es: cleanPlainText("Sitapur Beach es una hermosa zona costera rodeada de vegetación tropical y conocida por sus paisajes al amanecer."),
          pt: cleanPlainText("Sitapur Beach é uma bela área costeira cercada por vegetação tropical e conhecida por suas paisagens ao nascer do sol.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Coral Reefs", es: "Arrecifes de Coral", pt: "Recifes de Coral" },
        description: {
          en: cleanPlainText("The waters around Shaheed Dweep contain coral environments that contribute to the island's marine character and support opportunities for responsible marine exploration."),
          es: cleanPlainText("Las aguas alrededor de Shaheed Dweep contienen ambientes de coral que contribuyen al carácter marino de la isla y permiten experiencias responsables de exploración marina."),
          pt: cleanPlainText("As águas ao redor de Shaheed Dweep possuem ambientes de coral que contribuem para o caráter marinho da ilha e permitem experiências responsáveis de exploração marinha.")
        }
      }
    ]
  },

  // 4. BARATANG ISLAND
  {
    id: "baratang-island",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 4,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
    slug: {
      en: "baratang-island",
      es: "baratang-island",
      pt: "baratang-island"
    },
    name: {
      en: "Baratang Island",
      es: "Isla Baratang",
      pt: "Ilha Baratang"
    },
    description: {
      en: "<p><strong>Baratang Island</strong> is one of Andaman's most distinctive nature destinations, known for mangrove waterways, limestone caves, mud volcanoes and forest landscapes.</p>",
      es: "<p><strong>Baratang Island</strong> es uno de los destinos naturales más singulares de Andamán, conocido por sus manglares, cuevas de piedra caliza, volcanes de lodo y paisajes forestales.</p>",
      pt: "<p><strong>Baratang Island</strong> é um dos destinos naturais mais singulares de Andaman, conhecido por seus manguezais, cavernas de calcário, vulcões de lama e paisagens florestais.</p>"
    },
    overview: {
      en: `<h2>Discover Baratang Island – Caves, Mangroves & Natural Wonders</h2>

<p>Baratang offers a completely different experience from the beach-focused islands. Its landscape includes dense forests, mangrove waterways and unusual geological attractions.</p>

<p>The official tourism itinerary highlights the <strong>mangrove boat ride, Limestone Caves and Mud Volcano</strong> as major attractions of Baratang.</p>

<h3>Mangrove Experience</h3>

<p>Boat journeys through mangrove channels provide a unique way to experience the island's coastal ecosystem.</p>

<h3>Limestone Caves</h3>

<p>The limestone cave formations are among Baratang's most distinctive natural attractions and provide an opportunity to explore the island's geological character.</p>

<h3>Mud Volcano</h3>

<p>Baratang is also known for its mud volcano landscape, a rare geological feature within the Andaman Islands.</p>

<h3>Nature & Responsible Travel</h3>

<p>Baratang lies within a sensitive ecological and cultural landscape. Visitors should follow official travel rules, designated routes and local guidelines during excursions.</p>`,
      es: `<h2>Descubre la Isla Baratang – Cuevas, Manglares y Maravillas Naturales</h2>

<p>Baratang ofrece una experiencia completamente diferente a la de las islas centradas en playas. Su paisaje alberga bosques densos, canales de manglares y sorprendentes atracciones geológicas.</p>

<p>Los itinerarios oficiales destacan los <strong>paseos en barco por manglares, las Cuevas de Piedra Caliza (Limestone Caves) y el Volcán de Lodo (Mud Volcano)</strong>.</p>

<h3>Experiencia en los Manglares</h3>

<p>Los paseos en lancha por estrechos canales de manglares permiten adentrarse en el singular ecosistema de la isla.</p>

<h3>Cuevas de Piedra Caliza</h3>

<p>Las formaciones rocosas de las Limestone Caves constituyen una de las visitas naturales más impactantes de Baratang.</p>

<h3>Volcán de Lodo</h3>

<p>El Mud Volcano es un fenómeno geológico curioso y poco habitual en las Islas Andamán.</p>

<h3>Naturaleza y Turismo Responsable</h3>

<p>Baratang se encuentra en una zona de gran valor ecológico y cultural. Los viajeros deben cumplir la normativa oficial y transitar solo por rutas permitidas.</p>`,
      pt: `<h2>Descubra a Ilha Baratang – Cavernas, Manguezais e Maravilhas Naturais</h2>

<p>Baratang proporciona uma experiência completamente distinta das ilhas focadas em praias. A paisagem inclui florestas densas, canais de mangue e atrações geológicas únicas.</p>

<p>Os roteiros oficiais destacam os <strong>passeios de barco pelos manguezais, as Cavernas de Calcário e o Vulcão de Lama</strong> como pontos principais.</p>

<h3>Navegação pelos Manguezais</h3>

<p>Passeios em barcos por canais estreitos de mangue oferecem uma imersão incomparável no ecossistema costeiro.</p>

<h3>Cavernas de Calcário</h3>

<p>As formações rochosas nas cavernas de calcário estão entre os atrativos naturais mais marcantes de Baratang.</p>

<h3>Vulcão de Lama</h3>

<p>O Vulcão de Lama é um fenômeno geológico raro e fascinante no arquipélago de Andaman.</p>

<h3>Turismo Ecológico Responsável</h3>

<p>Baratang está localizada em uma área ambiental e culturalmente sensível. É essencial seguir as diretrizes e itinerários autorizados.</p>`
    },
    seoTitle: {
      en: "Baratang Island Tourism – Limestone Caves & Mud Volcano",
      es: "Turismo de la Isla Baratang – Cuevas de Caliza y Volcán de Lodo",
      pt: "Turismo da Ilha Baratang – Cavernas de Calcário e Vulcão de Lama"
    },
    seoDesc: {
      en: "Explore Baratang Island in Andaman. Visit the famous Limestone Caves, Mud Volcano, mangrove boat safari and Parrot Island.",
      es: "Explora la Isla Baratang en Andamán. Visita las famosas Cuevas de Piedra Caliza, el Volcán de Lodo y realiza safari en barco por los manglares.",
      pt: "Explore a Ilha Baratang em Andaman. Visite as famosas Cavernas de Calcário, o Vulcão de Lama e faça passeios de barco pelos manguezais."
    },
    seoKeywords: {
      en: "Baratang Island, Limestone Caves Baratang, Mud Volcano Andaman, Mangrove Boat Ride, Parrot Island",
      es: "Isla Baratang, Cuevas de Caliza Baratang, Volcán de Lodo Andamán, Manglares Baratang",
      pt: "Ilha Baratang, Cavernas de Calcário Baratang, Vulcão de Lama Andaman, Manguezais Baratang"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Limestone Caves", es: "Cuevas de Piedra Caliza", pt: "Cavernas de Calcário" },
        description: {
          en: cleanPlainText("The Limestone Caves are among Baratang's most famous natural attractions. Their rock formations and forest setting create a distinctive exploration experience."),
          es: cleanPlainText("Las Limestone Caves son una de las principales atracciones naturales de Baratang. Sus formaciones rocosas y entorno forestal ofrecen una experiencia de exploración diferente."),
          pt: cleanPlainText("As Limestone Caves estão entre as principais atrações naturais de Baratang. Suas formações rochosas e ambiente florestal proporcionam uma experiência de exploração diferente.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Mud Volcano", es: "Volcán de Lodo", pt: "Vulcão de Lama" },
        description: {
          en: cleanPlainText("Baratang's Mud Volcano is an unusual geological attraction where mud formations create a landscape very different from the island's beaches and forests."),
          es: cleanPlainText("El Mud Volcano de Baratang es una formación geológica poco común donde el lodo crea un paisaje muy diferente de las playas y bosques de la isla."),
          pt: cleanPlainText("O Mud Volcano de Baratang é uma atração geológica incomum onde formações de lama criam uma paisagem diferente das praias e florestas da ilha.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Mangrove Boat Ride", es: "Paseo en Barco por los Manglares", pt: "Passeio de Barco pelos Manguezais" },
        description: {
          en: cleanPlainText("Mangrove boat rides allow visitors to travel through narrow waterways surrounded by mangrove vegetation and coastal forest."),
          es: cleanPlainText("Los paseos en barco por los manglares permiten recorrer estrechos canales rodeados de vegetación de manglar y bosques costeros."),
          pt: cleanPlainText("Os passeios de barco pelos manguezais permitem navegar por canais estreitos cercados por vegetação de mangue e floresta costeira.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Parrot Island", es: "Isla de los Loros", pt: "Ilha dos Papagaios" },
        description: {
          en: cleanPlainText("Parrot Island is associated with bird watching and mangrove landscapes and can form part of specialized nature experiences in the Baratang region."),
          es: cleanPlainText("Parrot Island está relacionada con la observación de aves y los paisajes de manglares y puede formar parte de experiencias de naturaleza en la región de Baratang."),
          pt: cleanPlainText("Parrot Island está associada à observação de aves e às paisagens de manguezais e pode fazer parte de experiências de natureza na região de Baratang.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Jarawa Reserve Route", es: "Ruta de la Reserva Jarawa", pt: "Rota da Reserva Jarawa" },
        description: {
          en: cleanPlainText("The journey toward Baratang passes through a protected forest landscape. Travel through the reserve is subject to official regulations, and visitors should follow all applicable rules and restrictions."),
          es: cleanPlainText("El recorrido hacia Baratang atraviesa un paisaje forestal protegido. El tránsito por la reserva está sujeto a normas oficiales y los visitantes deben respetar todas las reglas y restricciones aplicables."),
          pt: cleanPlainText("A viagem até Baratang atravessa uma área florestal protegida. A passagem pela reserva está sujeita a regulamentações oficiais e os visitantes devem seguir todas as regras e restrições aplicáveis.")
        }
      }
    ]
  },

  // 5. RANGAT
  {
    id: "rangat",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 5,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
    slug: {
      en: "rangat",
      es: "rangat",
      pt: "rangat"
    },
    name: {
      en: "Rangat",
      es: "Rangat",
      pt: "Rangat"
    },
    description: {
      en: "<p><strong>Rangat</strong> is a nature-focused destination in Middle Andaman known for mangroves, beaches, eco-parks, trekking opportunities and quieter coastal landscapes.</p>",
      es: "<p><strong>Rangat</strong> es un destino centrado en la naturaleza en Middle Andaman, conocido por sus manglares, playas, parques ecológicos, senderos y paisajes costeros tranquilos.</p>",
      pt: "<p><strong>Rangat</strong> é um destino voltado para a natureza em Middle Andaman, conhecido por seus manguezais, praias, parques ecológicos, trilhas e paisagens costeiras tranquilas.</p>"
    },
    overview: {
      en: `<h2>Discover Rangat – Eco-Tourism & Natural Landscapes</h2>

<p>Rangat provides a quieter alternative to the better-known beach destinations of Andaman. The region is especially interesting for travellers interested in eco-tourism, mangrove ecosystems, beaches and nature-based experiences.</p>

<p>Official tourism itineraries include <strong>Amkunj Beach, Dhani Nallah Mangrove Walkway, eco-tourism experiences and creek cruises</strong> in the wider Rangat area.</p>

<h3>Mangrove Ecosystems</h3>

<p>Mangrove forests are an important part of the coastal environment around Rangat and can be explored through designated nature walks and boat experiences.</p>

<h3>Eco-Tourism</h3>

<p>Rangat offers opportunities to explore less-developed landscapes through responsible nature tourism.</p>

<h3>Beaches</h3>

<p>Amkunj Beach and other coastal areas provide peaceful settings away from the busiest tourist centres.</p>`,
      es: `<h2>Descubre Rangat – Ecoturismo y Paisajes Naturales</h2>

<p>Rangat ofrece una alternativa apacible frente a los destinos costeros más frecuentados de Andamán. Resulta un lugar ideal para amantes del ecoturismo, ecosistemas de manglar y entornos vírgenes.</p>

<p>Los itinerarios oficiales incluyen <strong>Amkunj Beach, la pasarela de manglares Dhani Nallah, parque ecológico Yerrata y paseos por canales</strong>.</p>

<h3>Ecosistemas de Manglar</h3>

<p>Los frondosos manglares son esenciales en la costa de Rangat y pueden explorarse por senderos habilitados y en embarcaciones.</p>

<h3>Ecoturismo</h3>

<p>Rangat invita a descubrir parajes sin masificar mediante prácticas de turismo responsable con la naturaleza.</p>

<h3>Playas</h3>

<p>Amkunj Beach y otros tramos de costa regalan serenidad lejos del bullicio urbano.</p>`,
      pt: `<h2>Descubra Rangat – Ecoturismo e Paisagens Naturais</h2>

<p>Rangat oferece uma alternativa serena aos destinos praianos mais populosos de Andaman. É um local perfeito para quem aprecia ecoturismo, manguezais e natureza intocada.</p>

<p>Os roteiros incluem a <strong>Praia de Amkunj, a passarela de mangue Dhani Nallah, experiências de ecoturismo e cruzeiros pelos canais</strong>.</p>

<h3>Ecossistemas de Manguezal</h3>

<p>As florestas de mangue são fundamentais no litoral de Rangat e podem ser percorridas por trilhas suspensas e passeios náuticos.</p>

<h3>Ecoturismo</h3>

<p>Rangat permite conhecer paisagens menos exploradas através do turismo sustentável.</p>

<h3>Praias</h3>

<p>A Praia de Amkunj e outros trechos costeiros garantem tranquilidade e contato com a natureza.</p>`
    },
    seoTitle: {
      en: "Rangat Tourism – Dhani Nallah Mangrove Walkway & Amkunj Beach",
      es: "Turismo de Rangat – Pasarela de Manglares Dhani Nallah y Playa Amkunj",
      pt: "Turismo de Rangat – Passarela de Manguezais Dhani Nallah e Praia Amkunj"
    },
    seoDesc: {
      en: "Discover Rangat in Middle Andaman. Explore Dhani Nallah Mangrove Walkway, Amkunj Beach, Yerrata Mangrove Park and peaceful eco-tourism experiences.",
      es: "Descubre Rangat en Middle Andaman. Visita la pasarela de manglares Dhani Nallah, Amkunj Beach, el parque Yerrata y vive el ecoturismo.",
      pt: "Descubra Rangat em Middle Andaman. Visite a passarela de manguezal Dhani Nallah, Praia Amkunj, Parque Yerrata e viva o ecoturismo."
    },
    seoKeywords: {
      en: "Rangat Andaman, Dhani Nallah Mangrove Walkway, Amkunj Beach, Middle Andaman, Yerrata Mangrove Park",
      es: "Rangat Andamán, Pasarela Dhani Nallah, Playa Amkunj, Middle Andaman, Parque Yerrata",
      pt: "Rangat Andaman, Passarela Dhani Nallah, Praia Amkunj, Middle Andaman, Parque Yerrata"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Amkunj Beach", es: "Playa Amkunj", pt: "Praia Amkunj" },
        description: {
          en: cleanPlainText("Amkunj Beach is a peaceful coastal destination near Rangat, known for its natural surroundings and eco-tourism character."),
          es: cleanPlainText("Amkunj Beach es un tranquilo destino costero cerca de Rangat, conocido por su entorno natural y su enfoque de ecoturismo."),
          pt: cleanPlainText("Amkunj Beach é um tranquilo destino costeiro perto de Rangat, conhecido por seu ambiente natural e caráter de ecoturismo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Dhani Nallah Mangrove Walkway", es: "Pasarela de Manglares Dhani Nallah", pt: "Passarela de Manguezais Dhani Nallah" },
        description: {
          en: cleanPlainText("Dhani Nallah offers a nature-oriented experience through mangrove landscapes and a designated walkway. It is suitable for travellers interested in coastal ecosystems."),
          es: cleanPlainText("Dhani Nallah ofrece una experiencia de naturaleza a través de paisajes de manglares y una pasarela especialmente habilitada."),
          pt: cleanPlainText("Dhani Nallah oferece uma experiência de natureza através de paisagens de manguezais e uma passarela preparada para visitantes.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Yerrata Mangrove Park", es: "Parque de Manglares Yerrata", pt: "Parque de Manguezais Yerrata" },
        description: {
          en: cleanPlainText("Yerrata provides an opportunity to experience the mangrove ecosystems and coastal landscapes of Middle Andaman."),
          es: cleanPlainText("Yerrata permite conocer los ecosistemas de manglares y los paisajes costeros de Middle Andaman."),
          pt: cleanPlainText("Yerrata permite conhecer os ecossistemas de manguezais e as paisagens costeiras de Middle Andaman.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Moricedera", es: "Moricedera", pt: "Moricedera" },
        description: {
          en: cleanPlainText("Moricedera is associated with nature and stargazing experiences in the wider Rangat region, providing an opportunity to experience Andaman's night sky away from major urban areas."),
          es: cleanPlainText("Moricedera está relacionada con experiencias de naturaleza y observación de estrellas en la región de Rangat, lejos de las zonas urbanas principales."),
          pt: cleanPlainText("Moricedera está associada a experiências de natureza e observação de estrelas na região de Rangat, longe das principais áreas urbanas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Creek Cruise", es: "Crucero por los Arroyos", pt: "Passeio pelos Canais Costeiros" },
        description: {
          en: cleanPlainText("Creek cruises provide an opportunity to observe mangroves, coastal vegetation and waterways from the water, creating a different perspective of Middle Andaman."),
          es: cleanPlainText("Los recorridos por los canales permiten observar manglares, vegetación costera y vías de agua desde el mar."),
          pt: cleanPlainText("Os passeios pelos canais permitem observar manguezais, vegetação costeira e cursos de água a partir do mar.")
        }
      }
    ]
  },

  // 6. MAYABUNDER
  {
    id: "mayabunder",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 6,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
    slug: {
      en: "mayabunder",
      es: "mayabunder",
      pt: "mayabunder"
    },
    name: {
      en: "Mayabunder",
      es: "Mayabunder",
      pt: "Mayabunder"
    },
    description: {
      en: "<p><strong>Mayabunder</strong> is a peaceful destination in North and Middle Andaman known for tropical landscapes, beaches, mangroves, coastal communities and eco-tourism experiences.</p>",
      es: "<p><strong>Mayabunder</strong> es un tranquilo destino de North and Middle Andaman conocido por sus paisajes tropicales, playas, manglares, comunidades costeras y experiencias de ecoturismo.</p>",
      pt: "<p><strong>Mayabunder</strong> é um destino tranquilo em North and Middle Andaman conhecido por paisagens tropicais, praias, manguezais, comunidades costeiras e experiências de ecoturismo.</p>"
    },
    overview: {
      en: `<h2>Discover Mayabunder – Coastal Villages & Eco-Tourism</h2>

<p>Mayabunder offers travellers an opportunity to explore a quieter and less-commercial side of the Andaman Islands. The region is surrounded by tropical vegetation, coastal landscapes and island communities.</p>

<p>The official tourism itinerary highlights <strong>Karmatang Beach, Avis Island and Dhaninallah Mangrove Walk</strong> as attractions in and around the Mayabunder region.</p>

<h3>Coastal Experiences</h3>

<p>Beaches and coastal viewpoints provide opportunities for peaceful sightseeing and nature photography.</p>

<h3>Mangrove Tourism</h3>

<p>Mangrove walks provide a closer look at one of the important ecosystems of the island region.</p>

<h3>Local Culture</h3>

<p>Mayabunder's communities and landscapes provide a different perspective on life in the Andaman Islands beyond the main tourist centres.</p>`,
      es: `<h2>Descubre Mayabunder – Pueblos Costeros y Ecoturismo</h2>

<p>Mayabunder invita a conocer una vertiente más pausada y auténtica de las Islas Andamán. La región destaca por su vegetación tropical, ambiente costero y vida comunitaria.</p>

<p>Los lugares recomendados son <strong>Karmatang Beach, Avis Island y la caminata por manglares de Dhaninallah</strong>.</p>

<h3>Experiencias Costeras</h3>

<p>Playas virgenes y miradores costeros ideales para paseos relajantes y fotografía de paisajes.</p>

<h3>Turismo en Manglares</h3>

<p>Las pasarelas entre manglares acercan al viajero a uno de los ecosistemas esenciales del archipiélago.</p>

<h3>Cultura Local</h3>

<p>Las comunidades locales permiten descubrir el modo de vida insular tradicional lejos de los circuitos turísticos habituales.</p>`,
      pt: `<h2>Descubra Mayabunder – Vilas Costeiras e Ecoturismo</h2>

<p>Mayabunder convida a explorar um lado mais autêntico e calmo das Ilhas Andaman. A região é rodeada por natureza tropical, praias sossegadas e comunidades locais.</p>

<p>Os itinerários oficiais destacam a <strong>Praia de Karmatang, a Ilha Avis e a caminhada pelos manguezais de Dhaninallah</strong>.</p>

<h3>Experiências Costeiras</h3>

<p>Praias preservadas e mirantes para admirar paisagens tropicais e registrar belas fotografias.</p>

<h3>Ecoturismo em Manguezais</h3>

<p>Trilhas pelos manguezais proporcionam uma imersão rica na biodiversidade do arquipélago.</p>

<h3>Cultura Local</h3>

<p>As comunidades de Mayabunder mostram o estilo de vida tradicional das Andaman longe dos grandes centros urbanos.</p>`
    },
    seoTitle: {
      en: "Mayabunder Tourism – Karmatang Beach & Avis Island",
      es: "Turismo de Mayabunder – Playa Karmatang e Isla Avis",
      pt: "Turismo de Mayabunder – Praia Karmatang e Ilha Avis"
    },
    seoDesc: {
      en: "Explore Mayabunder in North & Middle Andaman. Discover turtle nesting at Karmatang Beach, scenic Avis Island and local Karen community culture.",
      es: "Explora Mayabunder en North & Middle Andaman. Descubre el desove de tortugas en Karmatang Beach, la pintoresca Isla Avis y la cultura Karen.",
      pt: "Explore Mayabunder em North & Middle Andaman. Descubra a desova de tartarugas na Praia Karmatang, a Ilha Avis e a cultura da comunidade Karen."
    },
    seoKeywords: {
      en: "Mayabunder Andaman, Karmatang Beach, Avis Island, Karen Community Andaman, North Middle Andaman",
      es: "Mayabunder Andamán, Playa Karmatang, Isla Avis, Comunidad Karen Andamán",
      pt: "Mayabunder Andaman, Praia Karmatang, Ilha Avis, Comunidade Karen Andaman"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Karmatang Beach", es: "Playa Karmatang", pt: "Praia Karmatang" },
        description: {
          en: cleanPlainText("Karmatang Beach is a scenic coastal destination near Mayabunder and is noted by the official tourism itinerary as a turtle-nesting location."),
          es: cleanPlainText("Karmatang Beach es un destino costero cerca de Mayabunder y aparece en el itinerario oficial como zona de anidación de tortugas."),
          pt: cleanPlainText("Karmatang Beach é um destino costeiro perto de Mayabunder e é mencionada no roteiro oficial como área de nidificação de tartarugas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Avis Island", es: "Isla Avis", pt: "Ilha Avis" },
        description: {
          en: cleanPlainText("Avis Island is a small island destination accessible by a short boat journey and provides an opportunity to experience the quieter coastal landscapes around Mayabunder."),
          es: cleanPlainText("Avis Island es una pequeña isla accesible mediante un corto recorrido en barco y permite descubrir los tranquilos paisajes costeros de Mayabunder."),
          pt: cleanPlainText("Avis Island é uma pequena ilha acessível por um curto passeio de barco e permite conhecer as paisagens costeiras mais tranquilas de Mayabunder.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Dhaninallah Mangrove Walk", es: "Caminata por los Manglares de Dhaninallah", pt: "Caminhada pelos Manguezais de Dhaninallah" },
        description: {
          en: cleanPlainText("Dhaninallah provides a nature-based experience through mangrove environments and is an interesting attraction for travellers interested in eco-tourism."),
          es: cleanPlainText("Dhaninallah ofrece una experiencia de naturaleza a través de los manglares y es una atracción interesante para los viajeros interesados en ecoturismo."),
          pt: cleanPlainText("Dhaninallah oferece uma experiência de natureza através dos manguezais e é uma atração interessante para viajantes interessados em ecoturismo.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Mayabunder Coastal Areas", es: "Zonas Costeras de Mayabunder", pt: "Áreas Costeiras de Mayabunder" },
        description: {
          en: cleanPlainText("The coastal landscapes around Mayabunder provide opportunities for photography, quiet walks and experiencing the tropical character of the islands."),
          es: cleanPlainText("Los paisajes costeros de Mayabunder ofrecen oportunidades para la fotografía, paseos tranquilos y experiencias tropicales."),
          pt: cleanPlainText("As paisagens costeiras de Mayabunder oferecem oportunidades para fotografia, caminhadas tranquilas e experiências tropicais.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Karen Community Experience", es: "Experiencia con la Comunidad Karen", pt: "Experiência com a Comunidade Karen" },
        description: {
          en: cleanPlainText("Official multi-day tourism itineraries include opportunities to experience the culture and hospitality of the Karen community in the Mayabunder region. Such visits should always follow locally established cultural guidelines."),
          es: cleanPlainText("Los itinerarios turísticos oficiales de varios días incluyen experiencias relacionadas con la cultura y hospitalidad de la comunidad Karen en la región de Mayabunder. Estas visitas deben respetar siempre las normas culturales locales."),
          pt: cleanPlainText("Os roteiros turísticos oficiais de vários dias incluem experiências relacionadas à cultura e hospitalidade da comunidade Karen na região de Mayabunder. Essas visitas devem sempre respeitar as orientações culturais locais.")
        }
      }
    ]
  },

  // 7. DIGLIPUR
  {
    id: "diglipur",
    stateId: "andaman-nicobar",
    isPublished: true,
    isDeleted: false,
    displayOrder: 7,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    slug: {
      en: "diglipur",
      es: "diglipur",
      pt: "diglipur"
    },
    name: {
      en: "Diglipur",
      es: "Diglipur",
      pt: "Diglipur"
    },
    description: {
      en: "<p><strong>Diglipur</strong> is a major destination in North Andaman known for Ross & Smith Islands, Kalipur Beach, Lamiya Bay, Saddle Peak and spectacular natural landscapes.</p>",
      es: "<p><strong>Diglipur</strong> es un importante destino de North Andaman conocido por Ross & Smith Islands, Kalipur Beach, Lamiya Bay, Saddle Peak y sus impresionantes paisajes naturales.</p>",
      pt: "<p><strong>Diglipur</strong> é um importante destino de North Andaman conhecido por Ross & Smith Islands, Kalipur Beach, Lamiya Bay, Saddle Peak e suas impressionantes paisagens naturais.</p>"
    },
    overview: {
      en: `<h2>Discover Diglipur – North Andaman's Natural Adventure</h2>

<p>Diglipur is one of the most interesting destinations for travellers looking to explore the northern part of the Andaman Islands. The region offers beaches, forested mountains, islands and opportunities for trekking and nature exploration.</p>

<p>The official tourism itinerary highlights <strong>Kalipur Beach, Lamiya Bay, Saddle Peak and Ross & Smith Islands</strong> among the major experiences around Diglipur.</p>

<h3>Ross & Smith Islands</h3>

<p>The twin islands are connected by a distinctive sandbar that becomes one of the region's most recognizable natural features.</p>

<h3>Mountain & Trekking Experiences</h3>

<p>Saddle Peak provides opportunities for travellers interested in trekking and forest landscapes.</p>

<h3>Beach Experiences</h3>

<p>Kalipur Beach and Lamiya Bay provide opportunities for coastal exploration, photography and peaceful nature experiences.</p>

<h3>Wildlife & Nature</h3>

<p>North Andaman is suitable for travellers who want to explore tropical forests, coastal habitats and less-developed landscapes.</p>`,
      es: `<h2>Descubre Diglipur – Aventura Natural en el Norte de Andamán</h2>

<p>Diglipur es una de las joyas de North Andaman para los amantes de la aventura y la naturaleza. Ofrece playas vírgenes, montañas frondosas, islas y fantásticas rutas de senderismo.</p>

<p>Sus mayores atractivos son <strong>Ross & Smith Islands, Kalipur Beach, Lamiya Bay y Saddle Peak</strong>.</p>

<h3>Islas Ross & Smith</h3>

<p>Dos islas hermanas unidas por un espectacular banco de arena blanco rodeado de aguas cristalinas.</p>

<h3>Montaña y Senderismo</h3>

<p>Saddle Peak, el punto más alto del archipiélago, ofrece una desafiante caminata entre selva tropical.</p>

<h3>Experiencias en Playas</h3>

<p>Kalipur Beach y Lamiya Bay destacan por sus paisajes tranquilos y sus zonas de desove de tortugas marinas.</p>

<h3>Naturaleza y Vida Silvestre</h3>

<p>North Andaman es ideal para explorar ecosistemas forestales y zonas costeras preservadas.</p>`,
      pt: `<h2>Descubra Diglipur – Aventura Natural no Norte de Andaman</h2>

<p>Diglipur é o grande destaque de North Andaman para quem deseja explorar paisagens intocadas. A região oferece praias de águas transparentes, montanhas cobertas por florestas e ótimas opções de trekking.</p>

<p>Os principais destaques incluem as <strong>Ilhas Ross & Smith, Praia de Kalipur, Baía de Lamiya e o Pico Saddle</strong>.</p>

<h3>Ilhas Ross & Smith</h3>

<p>Duas ilhas gêmeas conectadas por um famoso banco de areia natural cercado por águas cristalinas.</p>

<h3>Trilhas e Montanha</h3>

<p>O Pico Saddle oferece trekking imperdível com vista panorâmica do norte do arquipélago.</p>

<h3>Praias Paradisíacas</h3>

<p>A Praia de Kalipur e a Baía de Lamiya são excelentes para contemplação, fotografia e observação de tartarugas.</p>

<h3>Vida Selvagem e Preservação</h3>

<p>Uma região única para quem busca florestas tropicais densas e praias intocadas.</p>`
    },
    seoTitle: {
      en: "Diglipur Tourism – Ross & Smith Islands & Saddle Peak",
      es: "Turismo de Diglipur – Islas Ross y Smith y Pico Saddle",
      pt: "Turismo de Diglipur – Ilhas Ross e Smith e Pico Saddle"
    },
    seoDesc: {
      en: "Explore Diglipur in North Andaman. Visit the famous sandbar of Ross & Smith Islands, trek Saddle Peak, Kalipur Beach and Lamiya Bay.",
      es: "Explora Diglipur en North Andaman. Visita el banco de arena de las Islas Ross & Smith, asciende a Saddle Peak y explora Kalipur Beach.",
      pt: "Explore Diglipur em North Andaman. Visite o banco de areia das Ilhas Ross & Smith, faça trekking no Pico Saddle e conheça a Praia de Kalipur."
    },
    seoKeywords: {
      en: "Diglipur Andaman, Ross and Smith Islands, Saddle Peak, Kalipur Beach, Lamiya Bay, North Andaman",
      es: "Diglipur Andamán, Islas Ross y Smith, Pico Saddle, Playa Kalipur, Bahía Lamiya",
      pt: "Diglipur Andaman, Ilhas Ross e Smith, Pico Saddle, Praia Kalipur, Baía Lamiya"
    },
    touristPlaces: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        name: { en: "Ross & Smith Islands", es: "Islas Ross y Smith", pt: "Ilhas Ross e Smith" },
        description: {
          en: cleanPlainText("Ross & Smith Islands are famous for the natural sandbar connecting the two islands. The destination offers striking tropical scenery, clear waters and a distinctive island landscape. Official tourism itineraries include the islands as a key Diglipur excursion."),
          es: cleanPlainText("Ross & Smith Islands son famosas por el banco de arena natural que conecta ambas islas. El destino ofrece paisajes tropicales, aguas claras y una geografía insular muy particular."),
          pt: cleanPlainText("Ross & Smith Islands são famosas pelo banco de areia natural que conecta as duas ilhas. O destino oferece paisagens tropicais, águas claras e uma geografia insular única.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
        name: { en: "Kalipur Beach", es: "Playa Kalipur", pt: "Praia Kalipur" },
        description: {
          en: cleanPlainText("Kalipur Beach is a beautiful coastal destination near Diglipur and is known for its natural setting and turtle-nesting associations. It offers a quieter beach experience compared with the more popular southern islands."),
          es: cleanPlainText("Kalipur Beach es un hermoso destino costero cerca de Diglipur, conocido por su entorno natural y su relación con la anidación de tortugas."),
          pt: cleanPlainText("Kalipur Beach é um belo destino costeiro perto de Diglipur, conhecido por seu ambiente natural e pela presença de áreas de nidificação de tartarugas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80",
        name: { en: "Lamiya Bay", es: "Bahía Lamiya", pt: "Baía Lamiya" },
        description: {
          en: cleanPlainText("Lamiya Bay offers beautiful coastal scenery with views toward the northern Andaman landscape. It is a suitable stop for photography and nature lovers."),
          es: cleanPlainText("Lamiya Bay ofrece hermosos paisajes costeros con vistas hacia el norte de Andamán. Es un lugar adecuado para la fotografía y los amantes de la naturaleza."),
          pt: cleanPlainText("Lamiya Bay oferece belas paisagens costeiras com vistas para a região norte de Andaman. É um local adequado para fotografia e amantes da natureza.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80",
        name: { en: "Saddle Peak", es: "Pico Saddle", pt: "Pico Saddle" },
        description: {
          en: cleanPlainText("Saddle Peak is an important mountain attraction in North Andaman and is associated with trekking and forest exploration."),
          es: cleanPlainText("Saddle Peak es una importante atracción montañosa de North Andaman y está relacionada con actividades de trekking y exploración forestal."),
          pt: cleanPlainText("Saddle Peak é uma importante atração montanhosa de North Andaman e está associada a trekking e exploração das florestas.")
        }
      },
      {
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        name: { en: "Craggy Island", es: "Isla Craggy", pt: "Ilha Craggy" },
        description: {
          en: cleanPlainText("Craggy Island is a small island destination associated with boat excursions and marine landscapes around North Andaman."),
          es: cleanPlainText("Craggy Island es un pequeño destino insular asociado con excursiones en barco y paisajes marinos de North Andaman."),
          pt: cleanPlainText("Craggy Island es un pequeño destino insular asociado a passeios de barco e paisagens marinhas de North Andaman.")
        }
      }
    ]
  }
];

// For each city, ensure content and fullDescription mirror overview
newCitiesData.forEach(city => {
  city.content = city.overview;
  city.fullDescription = city.overview;
});

// Update or add cities into cities.json
let addedCount = 0;
let updatedCount = 0;

newCitiesData.forEach(cityData => {
  const existingIdx = cities.findIndex(c => c.id === cityData.id || c.slug?.en === cityData.slug.en);
  if (existingIdx !== -1) {
    cities[existingIdx] = { ...cities[existingIdx], ...cityData };
    updatedCount++;
  } else {
    cities.push(cityData);
    addedCount++;
  }
});

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Updated cities in cities.json: ${addedCount} added, ${updatedCount} updated. Total cities: ${cities.length}`);
