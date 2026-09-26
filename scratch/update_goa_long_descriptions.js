const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');
let cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const now = new Date().toISOString();

const goaLongDescData = {
  panaji: {
    en: `<h2>Discover Panaji – The Cultural Heart of Goa</h2>

<p><strong>Panaji</strong>, also known as Panjim, is the capital city of Goa and one of the state's most important destinations for <em>heritage, culture, architecture and riverside experiences</em>. Located along the beautiful Mandovi River, Panaji offers a unique combination of historic Portuguese influence and traditional Goan culture.</p>

<p>The city is known for its <strong>colourful heritage houses, historic churches, charming streets, local markets and scenic waterfronts</strong>. The famous Fontainhas neighbourhood is particularly popular for its colourful Indo-Portuguese houses, narrow lanes, artistic atmosphere and distinctive architectural character.</p>

<h3>Heritage & Architecture</h3>

<p>Panaji is an excellent destination for travellers interested in history and architecture. Walking through the city's older neighbourhoods allows visitors to discover traditional Goan homes, decorative balconies, tiled roofs and historic religious buildings that reflect Goa's multicultural past.</p>

<ul>
<li><strong>Fontainhas:</strong> Explore the colourful Latin Quarter and its heritage streets.</li>
<li><strong>Our Lady of the Immaculate Conception Church:</strong> Visit one of Panaji's most recognisable landmarks.</li>
<li><strong>Mandovi River:</strong> Enjoy scenic riverside views and the atmosphere of central Panaji.</li>
</ul>

<h3>Beaches, Waterfronts & Leisure</h3>

<p>Panaji also provides easy access to beautiful coastal attractions. <strong>Miramar Beach</strong> is a popular place for relaxing walks, sea views and sunset photography, while <strong>Dona Paula</strong> offers scenic viewpoints overlooking the Arabian Sea and surrounding waterways.</p>

<h3>Culture & Local Experience</h3>

<p>Beyond its monuments, Panaji provides visitors with an opportunity to experience <strong>Goan cuisine, local markets, art, music and everyday city life</strong>. Its central location also makes it convenient for exploring nearby heritage attractions and other parts of Goa.</p>

<p>Whether you are interested in <strong>history, architecture, beaches, photography, food or local culture</strong>, Panaji offers a diverse introduction to the character and heritage of Goa.</p>`,
    es: `<h2>Descubre Panaji – El Corazón Cultural de Goa</h2>

<p><strong>Panaji</strong>, también conocida como Panjim, es la capital de Goa y uno de los destinos más importantes del estado para disfrutar de su <em>patrimonio, cultura, arquitectura y paisajes junto al río</em>. Situada a orillas del río Mandovi, Panaji combina de manera única la influencia histórica portuguesa con las tradiciones locales de Goa.</p>

<p>La ciudad es conocida por sus <strong>casas patrimoniales coloridas, iglesias históricas, calles encantadoras, mercados locales y hermosos paisajes junto al agua</strong>. El famoso barrio de Fontainhas destaca especialmente por sus casas indo-portuguesas, calles estrechas, ambiente artístico y arquitectura característica.</p>

<h3>Patrimonio y Arquitectura</h3>

<p>Panaji es un excelente destino para los viajeros interesados en la historia y la arquitectura. Al recorrer sus barrios históricos, los visitantes pueden descubrir casas tradicionales de Goa, balcones decorativos, tejados de tejas y edificios religiosos históricos que reflejan el pasado multicultural de la región.</p>

<ul>
<li><strong>Fontainhas:</strong> Explora el colorido Barrio Latino y sus calles históricas.</li>
<li><strong>Iglesia de Nuestra Señora de la Inmaculada Concepción:</strong> Visita uno de los monumentos más reconocibles de Panaji.</li>
<li><strong>Río Mandovi:</strong> Disfruta de las vistas panorámicas y del ambiente de la ciudad.</li>
</ul>

<h3>Playas, Paseos y Ocio</h3>

<p>Panaji también ofrece fácil acceso a diferentes atracciones costeras. La <strong>Playa de Miramar</strong> es ideal para pasear, disfrutar de las vistas del mar y contemplar el atardecer, mientras que <strong>Dona Paula</strong> ofrece hermosos miradores sobre el mar Arábigo.</p>

<h3>Cultura y Experiencias Locales</h3>

<p>Además de sus monumentos, Panaji permite conocer la <strong>gastronomía de Goa, los mercados locales, el arte, la música y la vida cotidiana</strong>. Su ubicación central también facilita la exploración de otros lugares históricos y culturales de Goa.</p>

<p>Para quienes buscan <strong>historia, arquitectura, playas, fotografía, gastronomía y cultura local</strong>, Panaji ofrece una completa introducción al patrimonio y estilo de vida de Goa.</p>`,
    pt: `<h2>Descubra Panaji – O Coração Cultural de Goa</h2>

<p><strong>Panaji</strong>, também conhecida como Panjim, é a capital de Goa e um dos destinos mais importantes do estado para conhecer seu <em>patrimônio, cultura, arquitetura e paisagens às margens do rio</em>. Localizada às margens do rio Mandovi, Panaji combina de forma única a influência histórica portuguesa com as tradições locais de Goa.</p>

<p>A cidade é conhecida por suas <strong>casas históricas coloridas, igrejas antigas, ruas charmosas, mercados locais e belas paisagens à beira da água</strong>. O famoso bairro de Fontainhas destaca-se por suas casas indo-portuguesas coloridas, ruas estreitas, atmosfera artística e arquitetura característica.</p>

<h3>Patrimônio e Arquitetura</h3>

<p>Panaji é um excelente destino para viajantes interessados em história e arquitetura. Ao caminhar pelos bairros históricos, os visitantes podem descobrir casas tradicionais de Goa, varandas decorativas, telhados de telha e edifícios religiosos históricos que refletem o passado multicultural da região.</p>

<ul>
<li><strong>Fontainhas:</strong> Explore o colorido Bairro Latino e suas ruas históricas.</li>
<li><strong>Igreja de Nossa Senhora da Imaculada Conceição:</strong> Conheça um dos monumentos mais conhecidos de Panaji.</li>
<li><strong>Rio Mandovi:</strong> Aprecie as vistas panorâmicas e a atmosfera da cidade.</li>
</ul>

<h3>Praias, Orla e Lazer</h3>

<p>Panaji também oferece fácil acesso a atrações costeiras. A <strong>Praia de Miramar</strong> é ideal para caminhadas, vistas para o mar e pôr do sol, enquanto <strong>Dona Paula</strong> oferece belos mirantes sobre o Mar Arábico.</p>

<h3>Cultura e Experiências Locais</h3>

<p>Além dos monumentos, Panaji permite conhecer a <strong>gastronomia de Goa, mercados locais, arte, música e o cotidiano da cidade</strong>. Sua localização central também facilita a exploração de outros locais históricos e culturais de Goa.</p>

<p>Para quem procura <strong>história, arquitetura, praias, fotografia, gastronomia e cultura local</strong>, Panaji oferece uma introdução completa ao patrimônio e ao estilo de vida de Goa.</p>`
  },
  margao: {
    en: `<h2>Discover Margao – The Cultural Gateway to South Goa</h2>

<p><strong>Margao</strong>, also known as Madgaon, is one of the most important urban centres in South Goa and an excellent destination for travellers interested in <em>local culture, heritage, markets, architecture and coastal experiences</em>.</p>

<p>The city has a distinctive Goan character shaped by its historic churches, temples, traditional markets, old residences and Indo-Portuguese architecture. Margao offers visitors a chance to experience the everyday rhythm of South Goa beyond the major beach resorts.</p>

<h3>History & Heritage</h3>

<p>Margao's historic areas feature traditional buildings, religious landmarks and heritage homes that reflect the cultural development of Goa. The <strong>Holy Spirit Church</strong> is one of the city's notable heritage attractions and represents an important part of its historic identity.</p>

<h3>Markets & Local Life</h3>

<p>The <strong>Margao Market</strong> is an important part of the city's everyday life. Visitors can explore local produce, spices, fruits, vegetables, traditional products and regional food items while experiencing the lively atmosphere of a Goan market.</p>

<ul>
<li><strong>Holy Spirit Church:</strong> Discover one of Margao's historic religious landmarks.</li>
<li><strong>Margao Market:</strong> Experience local shopping and traditional Goan products.</li>
<li><strong>Municipal Garden:</strong> Enjoy a relaxing green space within the city.</li>
</ul>

<h3>Beaches Near Margao</h3>

<p>Margao is also conveniently positioned for exploring the beaches of South Goa. <strong>Colva Beach</strong> and <strong>Benaulim Beach</strong> provide sandy shores, palm trees and relaxing coastal environments.</p>

<h3>Local Culture & Food</h3>

<p>Travellers can experience the flavours of Goa through traditional food, local markets and regional culinary traditions. Margao is particularly suitable for visitors who want to combine <strong>heritage sightseeing with local culture and access to South Goa's beaches</strong>.</p>

<p>With its combination of <strong>history, markets, architecture, culture, food and nearby beaches</strong>, Margao provides a different perspective on Goa and is an important destination for exploring the southern part of the state.</p>`,
    es: `<h2>Descubre Margao – La Puerta Cultural del Sur de Goa</h2>

<p><strong>Margao</strong>, también conocida como Madgaon, es uno de los principales centros urbanos del sur de Goa y un excelente destino para los viajeros interesados en <em>cultura local, patrimonio, mercados, arquitectura y experiencias costeras</em>.</p>

<p>La ciudad posee un carácter tradicional de Goa, formado por iglesias históricas, templos, mercados, antiguas residencias y arquitectura indo-portuguesa. Margao permite conocer el ritmo cotidiano del sur de Goa más allá de las zonas turísticas de playa.</p>

<h3>Historia y Patrimonio</h3>

<p>Las zonas históricas de Margao cuentan con edificios tradicionales, lugares religiosos y casas patrimoniales que reflejan el desarrollo cultural de Goa. La <strong>Iglesia del Espíritu Santo</strong> es uno de sus principales lugares históricos.</p>

<h3>Mercados y Vida Local</h3>

<p>El <strong>Mercado de Margao</strong> forma parte importante de la vida cotidiana de la ciudad. Los visitantes pueden descubrir productos locales, especias, frutas, verduras, productos tradicionales y alimentos regionales.</p>

<ul>
<li><strong>Iglesia del Espíritu Santo:</strong> Descubre uno de los monumentos religiosos históricos de Margao.</li>
<li><strong>Mercado de Margao:</strong> Conoce los productos locales y las compras tradicionales.</li>
<li><strong>Jardín Municipal:</strong> Disfruta de un espacio verde y tranquilo dentro de la ciudad.</li>
</ul>

<h3>Playas Cercanas</h3>

<p>Margao está bien situado para explorar las playas del sur de Goa. <strong>Playa de Colva</strong> y <strong>Playa de Benaulim</strong> ofrecen arena, palmeras y un ambiente costero relajado.</p>

<h3>Cultura y Gastronomía</h3>

<p>Los viajeros pueden descubrir los sabores de Goa a través de su gastronomía tradicional, mercados locales y productos regionales. Margao es ideal para combinar <strong>patrimonio, cultura local y playas del sur de Goa</strong>.</p>

<p>Con su combinación de <strong>historia, mercados, arquitectura, cultura, gastronomía y playas</strong>, Margao ofrece una perspectiva diferente de Goa.</p>`,
    pt: `<h2>Descubra Margao – A Porta Cultural do Sul de Goa</h2>

<p><strong>Margao</strong>, também conhecida como Madgaon, é um dos principais centros urbanos do sul de Goa e um excelente destino para viajantes interessados em <em>cultura local, patrimônio, mercados, arquitetura e experiências costeiras</em>.</p>

<p>A cidade possui um forte caráter tradicional de Goa, marcado por igrejas históricas, templos, mercados, antigas residências e arquitetura indo-portuguesa. Margao permite conhecer o cotidiano do sul de Goa além das áreas turísticas de praia.</p>

<h3>História e Patrimônio</h3>

<p>As áreas históricas de Margao apresentam edifícios tradicionais, locais religiosos e casas históricas que refletem o desenvolvimento cultural de Goa. A <strong>Igreja do Espírito Santo</strong> é um de seus importantes monumentos históricos.</p>

<h3>Mercados e Vida Local</h3>

<p>O <strong>Mercado de Margao</strong> é uma parte importante da vida cotidiana da cidade. Os visitantes podem encontrar produtos locais, especiarias, frutas, vegetais, produtos tradicionais e alimentos regionais.</p>

<ul>
<li><strong>Igreja do Espírito Santo:</strong> Conheça um dos monumentos religiosos históricos de Margao.</li>
<li><strong>Mercado de Margao:</strong> Explore produtos locais e compras tradicionais.</li>
<li><strong>Jardim Municipal:</strong> Desfrute de um espaço verde e tranquilo na cidade.</li>
</ul>

<h3>Praias Próximas</h3>

<p>Margao está convenientemente localizada para explorar as praias do sul de Goa. <strong>Praia de Colva</strong> e <strong>Praia de Benaulim</strong> oferecem areia, palmeiras e um ambiente costeiro tranquilo.</p>

<h3>Cultura e Gastronomia</h3>

<p>Os viajantes podem conhecer os sabores de Goa através da gastronomia tradicional, mercados locais e produtos regionais. Margao é ideal para combinar <strong>patrimônio, cultura local e praias do sul de Goa</strong>.</p>

<p>Com sua combinação de <strong>história, mercados, arquitetura, cultura, gastronomia e praias</strong>, Margao oferece uma perspectiva diferente de Goa.</p>`
  },
  "vasco-da-gama": {
    en: `<h2>Discover Vasco da Gama – Goa's Coastal and Maritime Gateway</h2>

<p><strong>Vasco da Gama</strong> is an important coastal city in Goa associated with the Mormugao region, maritime activities and the Arabian Sea. Its location close to <em>Dabolim Airport, beaches and coastal attractions</em> makes it an important gateway for travellers visiting Goa.</p>

<p>The city provides a different experience from Goa's famous resort destinations. Visitors can explore local neighbourhoods, religious landmarks, beaches, museums and maritime attractions while experiencing the everyday character of coastal Goa.</p>

<h3>Coastal Experiences</h3>

<p>The surrounding region provides access to several beaches. <strong>Bogmalo Beach</strong> is known for its scenic coastal environment, while Baina provides an easily accessible seaside destination near the city.</p>

<ul>
<li><strong>Bogmalo Beach:</strong> Relax beside the Arabian Sea and enjoy coastal scenery.</li>
<li><strong>Baina Beach:</strong> Explore a beach destination close to Vasco.</li>
<li><strong>Mormugao Harbour:</strong> Discover Goa's maritime environment and port heritage.</li>
</ul>

<h3>Maritime Heritage</h3>

<p>Vasco's connection with Mormugao gives the city an important maritime character. The <strong>Naval Aviation Museum</strong> offers visitors an opportunity to learn about aircraft, aviation equipment and India's naval aviation history.</p>

<h3>Religion & Local Culture</h3>

<p>The city and surrounding region also contain religious landmarks that reflect Goa's diverse cultural traditions. Travellers can combine visits to temples and local areas with coastal sightseeing.</p>

<p>Vasco da Gama is therefore well suited to travellers looking for a combination of <strong>coastal landscapes, maritime history, local culture, museums and convenient access to Goa's transport network</strong>.</p>`,
    es: `<h2>Descubre Vasco da Gama – La Puerta Costera y Marítima de Goa</h2>

<p><strong>Vasco da Gama</strong> es una importante ciudad costera de Goa relacionada con la región de Mormugao, las actividades marítimas y el mar Arábigo. Su ubicación cerca del <em>aeropuerto de Dabolim, playas y atracciones costeras</em> la convierte en una importante puerta de entrada a Goa.</p>

<p>La ciudad ofrece una experiencia diferente a la de los principales centros turísticos de playa. Los visitantes pueden explorar barrios locales, lugares religiosos, playas, museos y atracciones marítimas.</p>

<h3>Experiencias Costeras</h3>

<p>La región ofrece acceso a varias playas. <strong>Playa de Bogmalo</strong> destaca por su paisaje costero, mientras que Baina ofrece una opción de playa cerca de la ciudad.</p>

<ul>
<li><strong>Playa de Bogmalo:</strong> Disfruta del mar Arábigo y del paisaje costero.</li>
<li><strong>Playa de Baina:</strong> Explora una playa cercana a Vasco.</li>
<li><strong>Puerto de Mormugao:</strong> Descubre el entorno marítimo y portuario de Goa.</li>
</ul>

<h3>Patrimonio Marítimo</h3>

<p>La conexión de Vasco con Mormugao le proporciona un importante carácter marítimo. El <strong>Museo de Aviación Naval</strong> permite conocer aeronaves, equipos y aspectos de la historia de la aviación naval de la India.</p>

<h3>Religión y Cultura Local</h3>

<p>La ciudad y sus alrededores también cuentan con lugares religiosos que reflejan la diversidad cultural de Goa. Los viajeros pueden combinar visitas culturales con actividades costeras.</p>

<p>Vasco da Gama es ideal para quienes buscan una combinación de <strong>paisajes costeros, historia marítima, cultura local, museos y fácil acceso al transporte de Goa</strong>.</p>`,
    pt: `<h2>Descubra Vasco da Gama – A Porta Costeira e Marítima de Goa</h2>

<p><strong>Vasco da Gama</strong> é uma importante cidade costeira de Goa ligada à região de Mormugão, às atividades marítimas e ao Mar Arábico. Sua localização próxima ao <em>Aeroporto de Dabolim, praias e atrações costeiras</em> faz dela uma importante porta de entrada para Goa.</p>

<p>A cidade oferece uma experiência diferente dos principais destinos turísticos de praia. Os visitantes podem explorar bairros locais, locais religiosos, praias, museus e atrações marítimas.</p>

<h3>Experiências Costeiras</h3>

<p>A região oferece acesso a várias praias. A <strong>Praia de Bogmalo</strong> destaca-se por seu ambiente costeiro, enquanto Baina oferece uma opção de praia próxima à cidade.</p>

<ul>
<li><strong>Praia de Bogmalo:</strong> Aproveite o Mar Arábico e as paisagens costeiras.</li>
<li><strong>Praia de Baina:</strong> Explore uma praia próxima de Vasco.</li>
<li><strong>Porto de Mormugão:</strong> Conheça o ambiente marítimo e portuário de Goa.</li>
</ul>

<h3>Patrimônio Marítimo</h3>

<p>A ligação de Vasco com Mormugão dá à cidade um importante caráter marítimo. O <strong>Museu de Aviação Naval</strong> permite conhecer aeronaves, equipamentos e aspectos da história da aviação naval da Índia.</p>

<h3>Religião e Cultura Local</h3>

<p>A cidade e seus arredores também possuem locais religiosos que representam a diversidade cultural de Goa. Os viajantes podem combinar visitas culturais com atrações costeiras.</p>

<p>Vasco da Gama é adequado para quem procura uma combinação de <strong>paisagens costeiras, história marítima, cultura local, museus e fácil acesso à rede de transporte de Goa</strong>.</p>`
  },
  mapusa: {
    en: `<h2>Discover Mapusa – The Vibrant Market Town of North Goa</h2>

<p><strong>Mapusa</strong> is one of North Goa's most important commercial towns and an excellent destination for experiencing <em>local markets, traditional commerce, religious heritage and everyday Goan life</em>.</p>

<p>The town is particularly famous for its <strong>Friday Market</strong>, which brings together local vendors selling fresh produce, spices, clothing, handicrafts, household products and traditional goods. The market provides travellers with a lively and authentic glimpse into local life.</p>

<h3>Local Markets & Shopping</h3>

<p>The Friday Market is one of Mapusa's main attractions and is an important part of the town's identity. Visitors can explore different sections of the market while discovering regional products and traditional Goan goods.</p>

<h3>Religious Heritage</h3>

<p>Mapusa also has several important religious landmarks. <strong>St. Jerome Church</strong> represents the town's Christian heritage, while <strong>Bodgeshwar Temple</strong> reflects the Hindu religious traditions of the region.</p>

<ul>
<li><strong>Friday Market:</strong> Discover spices, food, clothing, handicrafts and local products.</li>
<li><strong>St. Jerome Church:</strong> Explore an important historic religious landmark.</li>
<li><strong>Bodgeshwar Temple:</strong> Experience local Hindu cultural traditions.</li>
</ul>

<h3>Gateway to North Goa</h3>

<p>Mapusa's location makes it convenient for travellers exploring popular destinations such as <strong>Anjuna, Baga, Calangute and Vagator</strong>. This makes the town useful as both a cultural destination and a base for exploring North Goa.</p>

<p>For travellers interested in <strong>shopping, local culture, markets, heritage and nearby beaches</strong>, Mapusa offers a lively and authentic side of Goa.</p>`,
    es: `<h2>Descubre Mapusa – La Animada Ciudad de Mercados del Norte de Goa</h2>

<p><strong>Mapusa</strong> es una de las principales ciudades comerciales del norte de Goa y un excelente destino para conocer los <em>mercados locales, el comercio tradicional, el patrimonio religioso y la vida cotidiana de Goa</em>.</p>

<p>La ciudad es especialmente famosa por su <strong>Mercado de los Viernes</strong>, donde vendedores locales ofrecen productos frescos, especias, ropa, artesanías, artículos para el hogar y productos tradicionales.</p>

<h3>Mercados y Compras Locales</h3>

<p>El Mercado de los Viernes es una de las principales atracciones de Mapusa y una parte importante de la identidad de la ciudad. Los visitantes pueden descubrir productos regionales y artículos tradicionales de Goa.</p>

<h3>Patrimonio Religioso</h3>

<p>Mapusa también cuenta con importantes lugares religiosos. La <strong>Iglesia de San Jerónimo</strong> representa la herencia cristiana de la ciudad, mientras que el <strong>Templo de Bodgeshwar</strong> refleja las tradiciones religiosas hindúes.</p>

<ul>
<li><strong>Mercado de los Viernes:</strong> Descubre especias, alimentos, ropa, artesanías y productos locales.</li>
<li><strong>Iglesia de San Jerónimo:</strong> Explora un importante monumento religioso histórico.</li>
<li><strong>Templo de Bodgeshwar:</strong> Conoce las tradiciones culturales hindúes locales.</li>
</ul>

<h3>Puerta de Entrada al Norte de Goa</h3>

<p>La ubicación de Mapusa facilita la visita a destinos como <strong>Anjuna, Baga, Calangute y Vagator</strong>.</p>

<p>Para quienes buscan <strong>compras, cultura local, mercados, patrimonio y playas cercanas</strong>, Mapusa ofrece una experiencia auténtica y animada de Goa.</p>`,
    pt: `<h2>Descubra Mapusa – A Vibrante Cidade dos Mercados do Norte de Goa</h2>

<p><strong>Mapusa</strong> é uma das principais cidades comerciais do norte de Goa e um excelente destino para conhecer <em>mercados locais, comércio tradicional, patrimônio religioso e o cotidiano de Goa</em>.</p>

<p>A cidade é especialmente famosa pelo <strong>Mercado de Sexta-feira</strong>, onde vendedores locais oferecem produtos frescos, especiarias, roupas, artesanato, artigos domésticos e produtos tradicionais.</p>

<h3>Mercados e Compras Locais</h3>

<p>O Mercado de Sexta-feira é uma das principais atrações de Mapusa e uma parte importante da identidade da cidade. Os visitantes podem descobrir produtos regionais e artigos tradicionais de Goa.</p>

<h3>Patrimônio Religioso</h3>

<p>Mapusa também possui importantes locais religiosos. A <strong>Igreja de São Jerônimo</strong> representa a herança cristã da cidade, enquanto o <strong>Templo de Bodgeshwar</strong> representa as tradições religiosas hindus.</p>

<ul>
<li><strong>Mercado de Sexta-feira:</strong> Conheça especiarias, alimentos, roupas, artesanato e produtos locais.</li>
<li><strong>Igreja de São Jerônimo:</strong> Explore um importante monumento religioso histórico.</li>
<li><strong>Templo de Bodgeshwar:</strong> Conheça as tradições culturais hindus locais.</li>
</ul>

<h3>Porta de Entrada para o Norte de Goa</h3>

<p>A localização de Mapusa facilita o acesso a destinos como <strong>Anjuna, Baga, Calangute e Vagator</strong>.</p>

<p>Para viajantes interessados em <strong>compras, cultura local, mercados, patrimônio e praias próximas</strong>, Mapusa oferece uma experiência autêntica e vibrante de Goa.</p>`
  },
  ponda: {
    en: `<h2>Discover Ponda – Goa's Temple and Cultural Destination</h2>

<p><strong>Ponda</strong> is one of Goa's most important destinations for <em>religious heritage, traditional architecture, cultural experiences and nature</em>. Located in the heart of Goa, the region is particularly famous for its historic Hindu temples and spice plantations.</p>

<h3>Temple Heritage</h3>

<p>Ponda is home to several important temples, including <strong>Shri Mangueshi Temple, Shantadurga Temple, Shri Nagueshi Temple and Mahalsa Narayani Temple</strong>. These religious sites showcase traditional Goan architecture and remain important parts of the region's cultural identity.</p>

<ul>
<li><strong>Shri Mangueshi Temple:</strong> Discover a famous temple dedicated to Lord Shiva.</li>
<li><strong>Shantadurga Temple:</strong> Explore an important pilgrimage destination.</li>
<li><strong>Shri Nagueshi Temple:</strong> Experience Goa's traditional Hindu heritage.</li>
<li><strong>Mahalsa Narayani Temple:</strong> Discover traditional architecture and religious traditions.</li>
</ul>

<h3>Nature & Spice Plantations</h3>

<p>Beyond temples, Ponda provides a greener side of Goa. The region's <strong>spice plantations, forests and agricultural landscapes</strong> offer opportunities to learn about tropical spices and traditional farming practices.</p>

<h3>Culture & Rural Goa</h3>

<p>Ponda is especially suitable for travellers who want to explore a side of Goa beyond beaches and nightlife. Its temples, plantations and rural landscapes provide an opportunity to understand the state's cultural and traditional character.</p>

<p>With its combination of <strong>spiritual heritage, architecture, nature, agriculture and local culture</strong>, Ponda is an important destination for a deeper cultural journey through Goa.</p>`,
    es: `<h2>Descubre Ponda – El Destino de Templos y Cultura de Goa</h2>

<p><strong>Ponda</strong> es uno de los destinos más importantes de Goa para descubrir su <em>patrimonio religioso, arquitectura tradicional, cultura y naturaleza</em>. La región es especialmente conocida por sus templos hindúes históricos y plantaciones de especias.</p>

<h3>Patrimonio de Templos</h3>

<p>Ponda alberga importantes templos como el <strong>Templo Shri Mangueshi, Templo de Shantadurga, Templo Shri Nagueshi y Templo de Mahalsa Narayani</strong>. Estos lugares muestran la arquitectura tradicional de Goa y forman parte de la identidad cultural de la región.</p>

<ul>
<li><strong>Templo Shri Mangueshi:</strong> Descubre un famoso templo dedicado al Señor Shiva.</li>
<li><strong>Templo de Shantadurga:</strong> Explora un importante destino de peregrinación.</li>
<li><strong>Templo Shri Nagueshi:</strong> Conoce el patrimonio hindú tradicional de Goa.</li>
<li><strong>Templo de Mahalsa Narayani:</strong> Descubre arquitectura y tradiciones religiosas.</li>
</ul>

<h3>Naturaleza y Plantaciones de Especias</h3>

<p>Además de sus templos, Ponda ofrece un lado más verde de Goa. Sus <strong>plantaciones de especias, bosques y paisajes agrícolas</strong> permiten conocer las especias tropicales y las prácticas agrícolas tradicionales.</p>

<h3>Cultura y Goa Rural</h3>

<p>Ponda es ideal para viajeros que desean descubrir una parte de Goa más allá de las playas y la vida nocturna. Sus templos, plantaciones y paisajes rurales permiten comprender mejor las tradiciones culturales del estado.</p>

<p>Con su combinación de <strong>patrimonio espiritual, arquitectura, naturaleza, agricultura y cultura local</strong>, Ponda es un destino importante para un viaje cultural por Goa.</p>`,
    pt: `<h2>Descubra Ponda – O Destino de Templos e Cultura de Goa</h2>

<p><strong>Ponda</strong> é um dos destinos mais importantes de Goa para conhecer seu <em>patrimônio religioso, arquitetura tradicional, cultura e natureza</em>. A região é especialmente conhecida por seus templos hindus históricos e plantações de especiarias.</p>

<h3>Patrimônio dos Templos</h3>

<p>Ponda abriga importantes templos como o <strong>Templo Shri Mangueshi, Templo de Shantadurga, Templo Shri Nagueshi e Templo de Mahalsa Narayani</strong>. Esses locais representam a arquitetura tradicional de Goa e fazem parte da identidade cultural da região.</p>

<ul>
<li><strong>Templo Shri Mangueshi:</strong> Conheça um famoso templo dedicado ao Senhor Shiva.</li>
<li><strong>Templo de Shantadurga:</strong> Explore um importante destino de peregrinação.</li>
<li><strong>Templo Shri Nagueshi:</strong> Conheça o patrimônio hindu tradicional de Goa.</li>
<li><strong>Templo de Mahalsa Narayani:</strong> Descubra arquitetura e tradições religiosas.</li>
</ul>

<h3>Natureza e Plantações de Especiarias</h3>

<p>Além dos templos, Ponda apresenta um lado mais verde de Goa. Suas <strong>plantações de especiarias, florestas e paisagens agrícolas</strong> permitem conhecer especiarias tropicais e práticas agrícolas tradicionais.</p>

<h3>Cultura e Goa Rural</h3>

<p>Ponda é ideal para viajantes que desejam conhecer um lado de Goa além das praias e da vida noturna. Seus templos, plantações e paisagens rurais ajudam a compreender melhor as tradições culturais do estado.</p>

<p>Com sua combinação de <strong>patrimônio espiritual, arquitetura, natureza, agricultura e cultura local</strong>, Ponda é um importante destino para uma viagem cultural por Goa.</p>`
  },
  bicholim: {
    en: `<h2>Discover Bicholim – A Peaceful Nature and Heritage Escape</h2>

<p><strong>Bicholim</strong> offers a quieter and more nature-oriented side of Goa. Away from the busy coastal tourist areas, the region is known for <em>green landscapes, lakes, waterfalls, caves, temples and traditional villages</em>.</p>

<h3>Natural Attractions</h3>

<p>One of the region's notable attractions is <strong>Mayem Lake</strong>, surrounded by greenery and scenic landscapes. It provides a peaceful environment for visitors looking to relax and enjoy Goa's inland scenery.</p>

<p><strong>Arvalem Waterfall</strong> is another important attraction, particularly during the monsoon season when the surrounding landscape becomes lush and the waterfall is at its most impressive.</p>

<ul>
<li><strong>Mayem Lake:</strong> Enjoy peaceful lake views and green surroundings.</li>
<li><strong>Arvalem Waterfall:</strong> Experience a scenic waterfall surrounded by nature.</li>
<li><strong>Arvalem Caves:</strong> Explore an ancient rock-cut heritage site.</li>
</ul>

<h3>Religious & Cultural Heritage</h3>

<p>Bicholim and its surrounding areas also feature important religious landmarks. <strong>Rudreshwar Temple</strong> and <strong>Saptakoteshwar Temple</strong> provide opportunities to explore the religious and cultural traditions of Goa.</p>

<h3>A Different Side of Goa</h3>

<p>Bicholim is particularly suitable for travellers interested in <strong>nature, photography, heritage, temples and peaceful countryside experiences</strong>. Its inland setting provides a contrast to Goa's famous beach destinations.</p>

<p>For travellers seeking a slower and more cultural journey, Bicholim offers an opportunity to explore the natural and historical character of Goa away from the busiest tourist routes.</p>`,
    es: `<h2>Descubre Bicholim – Un Tranquilo Refugio de Naturaleza y Patrimonio</h2>

<p><strong>Bicholim</strong> ofrece un lado más tranquilo y natural de Goa. Alejada de las zonas costeras más concurridas, la región es conocida por sus <em>paisajes verdes, lagos, cascadas, cuevas, templos y pueblos tradicionales</em>.</p>

<h3>Atracciones Naturales</h3>

<p>Una de las principales atracciones de la región es el <strong>lago Mayem</strong>, rodeado de vegetación y hermosos paisajes. Es un lugar ideal para relajarse y disfrutar del entorno natural de Goa.</p>

<p>La <strong>cascada de Arvalem</strong> es otra atracción importante, especialmente durante el monzón, cuando el paisaje se vuelve más verde y la cascada aumenta su caudal.</p>

<ul>
<li><strong>Lago Mayem:</strong> Disfruta de vistas al lago y paisajes verdes.</li>
<li><strong>Cascada de Arvalem:</strong> Descubre una cascada rodeada de naturaleza.</li>
<li><strong>Cuevas de Arvalem:</strong> Explora un antiguo lugar patrimonial excavado en roca.</li>
</ul>

<h3>Patrimonio Religioso y Cultural</h3>

<p>Bicholim y sus alrededores también cuentan con importantes lugares religiosos. El <strong>Templo de Rudreshwar</strong> y el <strong>Templo de Saptakoteshwar</strong> permiten conocer las tradiciones religiosas y culturales de Goa.</p>

<h3>Una Diferente Cara de Goa</h3>

<p>Bicholim es ideal para viajeros interesados en <strong>naturaleza, fotografía, patrimonio, templos y paisajes rurales tranquilos</strong>. Su ubicación interior ofrece un contraste con las famosas playas de Goa.</p>

<p>Para quienes buscan un viaje más tranquilo y cultural, Bicholim ofrece una oportunidad para descubrir el carácter natural e histórico de Goa lejos de las rutas turísticas más concurridas.</p>`,
    pt: `<h2>Descubra Bicholim – Um Refúgio Tranquilo de Natureza e Patrimônio</h2>

<p><strong>Bicholim</strong> oferece um lado mais tranquilo e natural de Goa. Longe das áreas costeiras mais movimentadas, a região é conhecida por suas <em>paisagens verdes, lagos, cachoeiras, cavernas, templos e vilas tradicionais</em>.</p>

<h3>Atrações Naturais</h3>

<p>Uma das principais atrações da região é o <strong>Lago Mayem</strong>, cercado por vegetação e belas paisagens. É um local ideal para relaxar e apreciar a natureza de Goa.</p>

<p>A <strong>Cachoeira de Arvalem</strong> é outra importante atração, especialmente durante as monções, quando a paisagem fica mais verde e o fluxo da cachoeira aumenta.</p>

<ul>
<li><strong>Lago Mayem:</strong> Aprecie as vistas do lago e as paisagens verdes.</li>
<li><strong>Cachoeira de Arvalem:</strong> Conheça uma bela cachoeira cercada pela natureza.</li>
<li><strong>Cavernas de Arvalem:</strong> Explore um antigo local histórico escavado na rocha.</li>
</ul>

<h3>Patrimônio Religioso e Cultural</h3>

<p>Bicholim e seus arredores também possuem importantes locais religiosos. O <strong>Templo de Rudreshwar</strong> e o <strong>Templo de Saptakoteshwar</strong> permitem conhecer as tradições religiosas e culturais de Goa.</p>

<h3>Um Lado Diferente de Goa</h3>

<p>Bicholim é especialmente indicado para viajantes interessados em <strong>natureza, fotografia, patrimônio, templos e paisagens rurais tranquilas</strong>. Sua localização no interior oferece um contraste com as famosas praias de Goa.</p>

<p>Para quem procura uma viagem mais tranquila e cultural, Bicholim oferece uma oportunidade de conhecer o caráter natural e histórico de Goa longe das rotas turísticas mais movimentadas.</p>`
  },
  pernem: {
    en: `<h2>Discover Pernem – Beaches, Nature and Heritage of North Goa</h2>

<p><strong>Pernem</strong> is a scenic region in North Goa offering a combination of <em>peaceful beaches, natural landscapes, traditional villages, temples and historic heritage</em>. It provides travellers with an opportunity to explore a quieter side of northern Goa.</p>

<h3>Beaches & Coastal Landscapes</h3>

<p>The region is home to several popular and scenic beaches. <strong>Arambol Beach</strong> is known for its broad sandy shoreline and relaxed atmosphere, while <strong>Mandrem Beach</strong> offers a quieter coastal environment surrounded by palms and natural scenery.</p>

<ul>
<li><strong>Arambol Beach:</strong> Enjoy sandy shores, sunsets and a relaxed coastal atmosphere.</li>
<li><strong>Mandrem Beach:</strong> Experience a peaceful beach surrounded by palms and greenery.</li>
<li><strong>Querim Beach:</strong> Discover a quieter and less crowded coastal area.</li>
</ul>

<h3>Historic Heritage</h3>

<p><strong>Fort Tiracol</strong> is one of the region's most distinctive heritage attractions. Located on elevated ground overlooking the Tiracol River and Arabian Sea, the fort offers scenic views and an opportunity to discover an important part of Goa's historic landscape.</p>

<h3>Culture & Traditional Goa</h3>

<p>Pernem also features traditional villages and religious landmarks such as <strong>Bhagwati Temple</strong>. These cultural attractions allow visitors to experience local traditions alongside the region's beaches and natural surroundings.</p>

<h3>Peaceful North Goa Experience</h3>

<p>Pernem is particularly suitable for travellers looking for <strong>beaches, nature, heritage, photography and local culture</strong> without focusing only on the busiest tourist areas.</p>

<p>With its combination of coastal scenery, historic landmarks and traditional communities, Pernem provides a diverse introduction to the natural and cultural character of North Goa.</p>`,
    es: `<h2>Descubre Pernem – Playas, Naturaleza y Patrimonio del Norte de Goa</h2>

<p><strong>Pernem</strong> es una pintoresca región del norte de Goa que combina <em>playas tranquilas, paisajes naturales, pueblos tradicionales, templos y patrimonio histórico</em>. Es una excelente opción para descubrir un lado más tranquilo del norte de Goa.</p>

<h3>Playas y Paisajes Costeros</h3>

<p>La región cuenta con varias playas conocidas y pintorescas. <strong>Playa de Arambol</strong> destaca por su amplia costa de arena y ambiente relajado, mientras que <strong>Playa de Mandrem</strong> ofrece un entorno costero más tranquilo rodeado de palmeras y naturaleza.</p>

<ul>
<li><strong>Playa de Arambol:</strong> Disfruta de arena, atardeceres y un ambiente costero relajado.</li>
<li><strong>Playa de Mandrem:</strong> Descubre una playa tranquila rodeada de palmeras y vegetación.</li>
<li><strong>Playa de Querim:</strong> Explora una zona costera menos concurrida.</li>
</ul>

<h3>Patrimonio Histórico</h3>

<p>El <strong>Fuerte de Tiracol</strong> es uno de los monumentos patrimoniales más característicos de la región. Situado en una zona elevada con vistas al río Tiracol y al mar Arábigo, ofrece hermosos paisajes y una conexión con la historia de Goa.</p>

<h3>Cultura y Goa Tradicional</h3>

<p>Pernem también cuenta con pueblos tradicionales y lugares religiosos como el <strong>Templo de Bhagwati</strong>. Estas atracciones permiten conocer las tradiciones locales junto con las playas y paisajes naturales.</p>

<h3>Una Experiencia Tranquila en el Norte de Goa</h3>

<p>Pernem es ideal para viajeros interesados en <strong>playas, naturaleza, patrimonio, fotografía y cultura local</strong>, especialmente aquellos que desean explorar zonas más tranquilas.</p>

<p>Con su combinación de paisajes costeros, monumentos históricos y comunidades tradicionales, Pernem ofrece una visión diversa del carácter natural y cultural del norte de Goa.</p>`,
    pt: `<h2>Descubra Pernem – Praias, Natureza e Patrimônio do Norte de Goa</h2>

<p><strong>Pernem</strong> é uma região pitoresca no norte de Goa que combina <em>praias tranquilas, paisagens naturais, vilas tradicionais, templos e patrimônio histórico</em>. É uma excelente opção para conhecer um lado mais tranquilo do norte de Goa.</p>

<h3>Praias e Paisagens Costeiras</h3>

<p>A região possui várias praias conhecidas e pitorescas. A <strong>Praia de Arambol</strong> destaca-se por sua ampla faixa de areia e atmosfera descontraída, enquanto a <strong>Praia de Mandrem</strong> oferece um ambiente costeiro mais tranquilo cercado por palmeiras e natureza.</p>

<ul>
<li><strong>Praia de Arambol:</strong> Aproveite a areia, o pôr do sol e a atmosfera costeira descontraída.</li>
<li><strong>Praia de Mandrem:</strong> Conheça uma praia tranquila cercada por palmeiras e vegetação.</li>
<li><strong>Praia de Querim:</strong> Explore uma área costeira menos movimentada.</li>
</ul>

<h3>Patrimônio Histórico</h3>

<p>O <strong>Forte de Tiracol</strong> é uma das atrações históricas mais características da região. Localizado em uma área elevada com vista para o rio Tiracol e o Mar Arábico, oferece belas paisagens e uma conexão com a história de Goa.</p>

<h3>Cultura e Goa Tradicional</h3>

<p>Pernem também possui vilas tradicionais e locais religiosos como o <strong>Templo de Bhagwati</strong>. Essas atrações permitem conhecer as tradições locais junto às praias e paisagens naturais.</p>

<h3>Uma Experiência Tranquila no Norte de Goa</h3>

<p>Pernem é especialmente indicado para viajantes interessados em <strong>praias, natureza, patrimônio, fotografia e cultura local</strong>, principalmente para quem deseja conhecer áreas menos movimentadas.</p>

<p>Com sua combinação de paisagens costeiras, monumentos históricos e comunidades tradicionais, Pernem oferece uma visão diversificada do caráter natural e cultural do norte de Goa.</p>`
  }
};

let count = 0;
for (const cityId in goaLongDescData) {
  const idx = cities.findIndex(c => c.id === cityId || c.slug === cityId || c.slug?.en === `${cityId}-goa`);
  if (idx !== -1) {
    cities[idx].overview = goaLongDescData[cityId];
    cities[idx].fullDescription = goaLongDescData[cityId];
    cities[idx].updatedAt = now;
    count++;
    console.log(`Updated Long Description (overview & fullDescription) for city: ${cityId}`);
  } else {
    console.warn(`City ID not found: ${cityId}`);
  }
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf-8');
console.log(`Successfully updated long descriptions for ${count} Goa cities in cities.json!`);
