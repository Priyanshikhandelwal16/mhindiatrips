import fs from "fs";
import path from "path";

const STATES_FILE = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(STATES_FILE, "utf-8"));

// City data keyed by state slug
const CITIES_DATA = {
  "rajasthan": [
    { slug: "jaipur", title: "Jaipur", tagline: "The Regal Pink City", image: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=800", overview: "Capital of Rajasthan, famous for pink sandstone architecture, Amber Fort, Hawa Mahal, and vibrant bazaars." },
    { slug: "udaipur", title: "Udaipur", tagline: "City of Lakes & Romance", image: "https://images.unsplash.com/photo-1602643072447-63ec27153372?q=80&w=800", overview: "The Venice of the East. Lake Palace, City Palace, and serene boat rides on Lake Pichola." },
    { slug: "jodhpur", title: "Jodhpur", tagline: "The Blue City", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800", overview: "Dominated by the mighty Mehrangarh Fort, with a blue-painted old city and spice-filled markets." },
    { slug: "jaisalmer", title: "Jaisalmer", tagline: "The Golden City of the Thar", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "A living sandcastle rising from the Thar Desert. Famous for its fort, havelis, and camel safaris on sand dunes." },
    { slug: "pushkar", title: "Pushkar", tagline: "Sacred Lake & Camel Fair", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800", overview: "One of the oldest cities in India with a sacred lake surrounded by 52 ghats and the only Brahma Temple in the world." },
    { slug: "ranthambore", title: "Ranthambore", tagline: "Tiger Territory & Ancient Ruins", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "Famous National Park for tiger safaris amidst a dramatic landscape of ancient fort ruins and dense forest." },
    { slug: "mount-abu", title: "Mount Abu", tagline: "Rajasthan's Hill Station", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "The only hill station in Rajasthan, known for Dilwara Jain Temples with exquisite marble carvings." },
    { slug: "bikaner", title: "Bikaner", tagline: "Camel Country & Desert Forts", image: "https://images.unsplash.com/photo-1616788494677-7d52a225faeb?q=80&w=800", overview: "Known for Junagarh Fort, camel breeding farms, and the famous Karni Mata Temple." },
  ],
  "delhi-agra": [
    { slug: "delhi", title: "Delhi", tagline: "India's Capital of Empires", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800", overview: "A fusion of Mughal heritage and modern India. Red Fort, Qutub Minar, Humayun's Tomb, Chandni Chowk, and India Gate." },
    { slug: "agra", title: "Agra", tagline: "Home of the Taj Mahal", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800", overview: "The city of the Taj Mahal — the world's greatest monument of love. Also home to Agra Fort and Fatehpur Sikri." },
    { slug: "mathura", title: "Mathura", tagline: "Birthplace of Lord Krishna", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Sacred city on the banks of Yamuna, the birthplace of Lord Krishna. Famous for temples, ghats, and Holi celebrations." },
    { slug: "vrindavan", title: "Vrindavan", tagline: "City of Temples & Divine Love", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Where Lord Krishna spent his childhood. Thousands of temples, devotional music, and spiritual retreats." },
  ],
  "kerala": [
    { slug: "kochi", title: "Kochi", tagline: "Queen of the Arabian Sea", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800", overview: "Historic port city with Chinese fishing nets, Fort Kochi, Jewish synagogue, and vibrant spice markets." },
    { slug: "munnar", title: "Munnar", tagline: "Tea Gardens in the Clouds", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Hill station covered with endless tea plantations, misty peaks, and the Eravikulam National Park." },
    { slug: "alleppey", title: "Alleppey", tagline: "Venice of the East", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800", overview: "Backwater capital of Kerala. Luxury houseboat cruises through palm-lined canals and paddy fields." },
    { slug: "thekkady", title: "Thekkady", tagline: "Spice Plantations & Wildlife", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Gateway to Periyar Wildlife Sanctuary. Spice plantation walks, bamboo rafting, and elephant sightings." },
    { slug: "varkala", title: "Varkala", tagline: "Cliffside Beach Paradise", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Dramatic red cliffs overlooking the Arabian Sea, ancient Janardana Temple, and natural mineral springs." },
    { slug: "kovalam", title: "Kovalam", tagline: "Crescent Beach Haven", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Famous crescent-shaped beach with lighthouse, Ayurvedic resorts, and water sports." },
    { slug: "wayanad", title: "Wayanad", tagline: "Jungle Retreat of Kerala", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Dense forests, ancient Edakkal Caves, Chembra Peak trek, and bamboo huts in the wilderness." },
  ],
  "goa": [
    { slug: "north-goa", title: "North Goa", tagline: "Beaches, Nightlife & Forts", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Vibrant beaches like Baga, Calangute, and Anjuna. Fort Aguada, flea markets, and lively nightlife." },
    { slug: "south-goa", title: "South Goa", tagline: "Serene Beaches & Heritage", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Pristine beaches of Palolem, Cola, and Agonda. Old Goa churches (UNESCO), spice plantations, and luxury resorts." },
    { slug: "old-goa", title: "Old Goa", tagline: "Portuguese Heritage & Churches", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "UNESCO World Heritage Site with Basilica of Bom Jesus, Se Cathedral, and centuries of Portuguese colonial architecture." },
  ],
  "varanasi": [
    { slug: "varanasi-city", title: "Varanasi City", tagline: "The Eternal Spiritual Capital", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "One of the world's oldest continuously inhabited cities. Sacred ghats, Ganga Aarti, Kashi Vishwanath Temple, and silk weaving traditions." },
    { slug: "sarnath", title: "Sarnath", tagline: "Where Buddha Preached First", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "The sacred Buddhist site where Lord Buddha gave his first sermon. Dhamek Stupa, Ashoka Pillar, and ancient monasteries." },
  ],
  "kashmir": [
    { slug: "srinagar", title: "Srinagar", tagline: "Paradise on Earth", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800", overview: "Dal Lake houseboats, Mughal Gardens (Shalimar, Nishat), Shankaracharya Temple, and floating vegetable markets." },
    { slug: "gulmarg", title: "Gulmarg", tagline: "Meadow of Flowers & Skiing", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "Asia's highest golf course, world-class skiing in winter, and the Gulmarg Gondola — one of the highest cable cars globally." },
    { slug: "pahalgam", title: "Pahalgam", tagline: "Valley of Shepherds", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800", overview: "Base camp for Amarnath Yatra. Betaab Valley, Aru Valley, Lidder River fishing, and pine forest treks." },
    { slug: "sonmarg", title: "Sonmarg", tagline: "Meadow of Gold", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800", overview: "Gateway to Ladakh with glaciers, alpine lakes (Thajiwas Glacier), and breathtaking Himalayan vistas." },
  ],
  "himachal-pradesh": [
    { slug: "shimla", title: "Shimla", tagline: "Queen of Hill Stations", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "Former British summer capital. The Ridge, Mall Road, Jakhoo Temple, and toy train ride through the mountains." },
    { slug: "manali", title: "Manali", tagline: "Adventure Capital of India", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800", overview: "Snow-capped peaks, Rohtang Pass, Solang Valley adventures, Old Manali cafes, and Hadimba Temple." },
    { slug: "dharamshala", title: "Dharamshala", tagline: "Home of Dalai Lama", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800", overview: "Seat of Tibetan government in exile. McLeod Ganj, Namgyal Monastery, Triund trek, and Tibetan culture." },
    { slug: "kasol", title: "Kasol", tagline: "Mini Israel of India", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800", overview: "Backpacker paradise in Parvati Valley. Kheerganga trek, hot springs, riverside camping, and Israeli cafes." },
    { slug: "spiti-valley", title: "Spiti Valley", tagline: "The Middle Land", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800", overview: "A cold desert mountain valley. Key Monastery, Chandratal Lake, Pin Valley, and ancient Buddhist culture." },
  ],
  "uttarakhand": [
    { slug: "rishikesh", title: "Rishikesh", tagline: "Yoga Capital of the World", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800", overview: "White-water rafting, Lakshman Jhula, Beatles Ashram, world-class yoga retreats, and Ganga Aarti at Triveni Ghat." },
    { slug: "haridwar", title: "Haridwar", tagline: "Gateway to the Gods", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800", overview: "One of seven holiest Hindu cities. Har Ki Pauri ghat, evening Ganga Aarti, and gateway to Char Dham." },
    { slug: "mussoorie", title: "Mussoorie", tagline: "Queen of the Hills", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "Colonial-era hill station with Gun Hill views, Kempty Falls, Camel's Back Road, and Lal Tibba peak." },
    { slug: "nainital", title: "Nainital", tagline: "Lake District of India", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "Charming town around Naini Lake. Boat rides, Snow View Point, Naina Devi Temple, and Mall Road." },
    { slug: "jim-corbett", title: "Jim Corbett", tagline: "India's Oldest Tiger Reserve", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "India's first National Park. Jungle safaris, tiger tracking, elephant rides, and riverside luxury lodges." },
  ],
  "tamil-nadu": [
    { slug: "chennai", title: "Chennai", tagline: "Gateway to South India", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "Marina Beach, Kapaleeshwarar Temple, San Thome Cathedral, and thriving art & music scene." },
    { slug: "madurai", title: "Madurai", tagline: "Temple City of Tamil Nadu", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "The stunning Meenakshi Amman Temple with 14 colorful gopurams, Thirumalai Nayakkar Palace, and banana leaf meals." },
    { slug: "ooty", title: "Ooty", tagline: "Queen of the Nilgiris", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Nilgiri Mountain Railway (UNESCO), Botanical Gardens, Ooty Lake, tea estates, and eucalyptus forests." },
    { slug: "kodaikanal", title: "Kodaikanal", tagline: "Princess of Hill Stations", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Star-shaped lake, Coaker's Walk, Pillar Rocks, Bryant Park, and misty pine forests." },
    { slug: "mahabalipuram", title: "Mahabalipuram", tagline: "Shore Temple & Rock Art", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "UNESCO World Heritage shore temples, Arjuna's Penance rock relief, Five Rathas, and beach town charm." },
    { slug: "rameswaram", title: "Rameswaram", tagline: "Sacred Island of Rama", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "Ramanathaswamy Temple with the longest corridor in India, Pamban Bridge, and Dhanushkodi ghost town." },
  ],
  "karnataka": [
    { slug: "bangalore", title: "Bangalore", tagline: "Garden City & Tech Hub", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "India's Silicon Valley with beautiful parks, craft beer scene, Lalbagh Garden, and vibrant nightlife." },
    { slug: "mysore", title: "Mysore", tagline: "City of Palaces", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "Magnificent Mysore Palace illuminated with 97,000 bulbs, Chamundi Hills, and sandalwood markets." },
    { slug: "hampi", title: "Hampi", tagline: "Ruins of a Lost Empire", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "UNESCO World Heritage Site. Vijayanagara Empire ruins, Vittala Temple with musical pillars, and boulder-strewn landscapes." },
    { slug: "coorg", title: "Coorg", tagline: "Scotland of India", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Coffee plantations, Abbey Falls, Raja's Seat viewpoint, Tibetan monastery, and misty mountain trails." },
    { slug: "gokarna", title: "Gokarna", tagline: "Sacred Beach Town", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Pristine beaches (Om Beach, Half Moon), Mahabaleshwar Temple, and a peaceful alternative to Goa." },
  ],
  "mumbai-maharashtra": [
    { slug: "mumbai", title: "Mumbai", tagline: "City of Dreams", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800", overview: "Gateway of India, Marine Drive, Elephanta Caves, Dharavi tours, Bollywood studios, and street food trails." },
    { slug: "pune", title: "Pune", tagline: "Oxford of the East", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800", overview: "Shaniwar Wada, Aga Khan Palace, vibrant food scene, and gateway to Lonavala and Mahabaleshwar." },
    { slug: "lonavala", title: "Lonavala", tagline: "Hill Station Gateway", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "Misty valleys, Bhushi Dam, Karla & Bhaja caves, Tiger Point, and chikki (candy) factories." },
    { slug: "mahabaleshwar", title: "Mahabaleshwar", tagline: "Strawberry Capital", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800", overview: "Lush green viewpoints, strawberry farms, Pratapgarh Fort, Venna Lake boating, and colonial-era charm." },
    { slug: "aurangabad", title: "Aurangabad", tagline: "Gateway to Ajanta & Ellora", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Base for visiting UNESCO Ajanta & Ellora Caves, Bibi Ka Maqbara (Mini Taj), and Daulatabad Fort." },
  ],
  "andaman-islands": [
    { slug: "port-blair", title: "Port Blair", tagline: "Capital of the Islands", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Cellular Jail (Kala Pani), Corbyn's Cove Beach, Ross Island ruins, and gateway to the archipelago." },
    { slug: "havelock", title: "Havelock Island", tagline: "Asia's Best Beach", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Radhanagar Beach (Asia's best beach), scuba diving, snorkeling at Elephant Beach, and mangrove kayaking." },
    { slug: "neil-island", title: "Neil Island", tagline: "Tropical Coral Paradise", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Natural rock formations, coral reefs, Laxmanpur Beach sunset point, and laid-back island vibes." },
  ],
  "punjab": [
    { slug: "amritsar", title: "Amritsar", tagline: "The Golden Temple City", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800", overview: "The Golden Temple (Harmandir Sahib), Jallianwala Bagh, Wagah Border ceremony, and Amritsari street food." },
    { slug: "chandigarh", title: "Chandigarh", tagline: "The City Beautiful", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800", overview: "Le Corbusier's planned city. Rock Garden, Sukhna Lake, Rose Garden, and modernist architecture." },
  ],
  "gujarat": [
    { slug: "ahmedabad", title: "Ahmedabad", tagline: "UNESCO Heritage City", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800", overview: "India's first UNESCO World Heritage City. Sabarmati Ashram, step wells, old city pol houses, and textile markets." },
    { slug: "rann-of-kutch", title: "Rann of Kutch", tagline: "White Desert Wonderland", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Vast white salt desert that stretches to the horizon. Rann Utsav festival, full moon nights, and Kutchi handicrafts." },
    { slug: "gir", title: "Gir National Park", tagline: "Home of Asiatic Lions", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "The last refuge of the Asiatic Lion. Safari drives, bird watching, and Maldhari tribal encounters." },
    { slug: "dwarka", title: "Dwarka", tagline: "Kingdom of Lord Krishna", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Ancient submerged city of Krishna. Dwarkadhish Temple, Bet Dwarka island, and Nageshwar Jyotirlinga." },
    { slug: "somnath", title: "Somnath", tagline: "The Eternal Shrine", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "One of 12 Jyotirlingas, rebuilt after multiple invasions. Sound & light show, beach promenade, and Triveni Sangam." },
  ],
  "madhya-pradesh": [
    { slug: "khajuraho", title: "Khajuraho", tagline: "Temples of Love & Art", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "UNESCO World Heritage temples with intricate erotic sculptures. Sound & light show and Chandela dynasty architecture." },
    { slug: "orchha", title: "Orchha", tagline: "Medieval Time Capsule", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Forgotten Bundela kingdom with riverside cenotaphs, Jahangir Mahal palace, and Ram Raja Temple." },
    { slug: "kanha", title: "Kanha National Park", tagline: "Jungle Book Country", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "Inspiration for Kipling's Jungle Book. Tiger safaris, barasingha deer, and sal forests." },
    { slug: "bandhavgarh", title: "Bandhavgarh", tagline: "Highest Tiger Density in India", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "Best odds for tiger sightings in India. Ancient Bandhavgarh Fort, cave paintings, and wildlife safaris." },
  ],
  "west-bengal": [
    { slug: "kolkata", title: "Kolkata", tagline: "City of Joy & Culture", image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800", overview: "Victoria Memorial, Howrah Bridge, Dakshineswar Temple, Park Street, trams, and literary heritage." },
    { slug: "darjeeling", title: "Darjeeling", tagline: "Tea Capital of India", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "UNESCO Toy Train, Tiger Hill sunrise over Kanchenjunga, tea estate visits, and Himalayan views." },
    { slug: "sundarbans", title: "Sundarbans", tagline: "Mangrove Tiger Territory", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "World's largest mangrove forest. Royal Bengal Tigers, boat safaris through dense waterways, and unique ecosystems." },
  ],
  "odisha": [
    { slug: "puri", title: "Puri", tagline: "Lord Jagannath's Abode", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Jagannath Temple (Char Dham), Rath Yatra festival, golden beaches, and Chilika Lake nearby." },
    { slug: "konark", title: "Konark", tagline: "The Sun Temple", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "UNESCO Sun Temple shaped as a giant chariot with 24 carved wheels. Konark Dance Festival and beach." },
    { slug: "bhubaneswar", title: "Bhubaneswar", tagline: "Temple City of India", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Over 500 ancient temples. Lingaraja Temple, Udayagiri & Khandagiri Caves, and tribal art museums." },
  ],
  "assam": [
    { slug: "guwahati", title: "Guwahati", tagline: "Gateway to Northeast India", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Kamakhya Temple, Brahmaputra river cruises, Assam State Museum, and Umananda Island." },
    { slug: "kaziranga", title: "Kaziranga", tagline: "One-Horned Rhino Kingdom", image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800", overview: "UNESCO World Heritage with two-thirds of the world's one-horned rhinos. Elephant and jeep safaris." },
    { slug: "majuli", title: "Majuli Island", tagline: "World's Largest River Island", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Neo-Vaishnavite monasteries (Satras), mask-making traditions, and the unique Mishing tribal culture." },
  ],
  "sikkim": [
    { slug: "gangtok", title: "Gangtok", tagline: "Mountain Capital of Sikkim", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800", overview: "MG Marg, Rumtek Monastery, Tsomgo Lake, Nathula Pass (Indo-China border), and cable car rides." },
    { slug: "pelling", title: "Pelling", tagline: "Gateway to Kanchenjunga", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800", overview: "Stunning views of Mt. Kanchenjunga, Pemayangtse Monastery, Rabdentse Ruins, and Skywalk." },
    { slug: "lachung", title: "Lachung", tagline: "Valley of Yumthang Flowers", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800", overview: "Gateway to Yumthang Valley (Valley of Flowers), Zero Point, hot springs, and Lachung Monastery." },
  ],
  "meghalaya": [
    { slug: "shillong", title: "Shillong", tagline: "Scotland of the East", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Ward's Lake, Elephant Falls, Don Bosco Museum, Shillong Peak, and vibrant music culture." },
    { slug: "cherrapunji", title: "Cherrapunji", tagline: "Wettest Place on Earth", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Living root bridges, Nohkalikai Falls, Seven Sisters Falls, limestone caves, and cloud-kissed cliffs." },
    { slug: "dawki", title: "Dawki", tagline: "Crystal Clear River Paradise", image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?q=80&w=800", overview: "Umngot River with glass-clear water where boats appear to float in air. Indo-Bangladesh border." },
  ],
  "uttar-pradesh": [
    { slug: "lucknow", title: "Lucknow", tagline: "City of Nawabs & Kebabs", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800", overview: "Bara Imambara, Rumi Darwaza, Chowk's legendary kebab lanes, and Nawabi architectural grandeur." },
    { slug: "ayodhya", title: "Ayodhya", tagline: "Birthplace of Lord Rama", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Ram Mandir (new temple), Hanuman Garhi, Saryu River ghats, and ancient religious significance." },
    { slug: "prayagraj", title: "Prayagraj", tagline: "Sangam of Three Rivers", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Triveni Sangam (confluence of Ganga, Yamuna, Saraswati), Kumbh Mela site, and Anand Bhavan." },
  ],
  "maharashtra": [
    { slug: "nashik", title: "Nashik", tagline: "Wine Capital & Kumbh City", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800", overview: "India's wine country, Sula Vineyards, Trimbakeshwar Temple, Kumbh Mela site, and Panchavati." },
    { slug: "ajanta-ellora", title: "Ajanta & Ellora", tagline: "UNESCO Rock-Cut Caves", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Two UNESCO World Heritage cave complexes — Buddhist Ajanta paintings and Hindu-Buddhist-Jain Ellora temples." },
  ],
  "telangana": [
    { slug: "hyderabad", title: "Hyderabad", tagline: "City of Pearls & Biryani", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "Charminar, Golconda Fort, Hussain Sagar Lake, legendary Hyderabadi biryani, and pearl bazaars." },
    { slug: "warangal", title: "Warangal", tagline: "Kakatiya Dynasty Heritage", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Thousand Pillar Temple, Warangal Fort, Ramappa Temple (UNESCO), and Kakatiya Kala Thoranam." },
  ],
  "andhra-pradesh": [
    { slug: "tirupati", title: "Tirupati", tagline: "World's Richest Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800", overview: "Sri Venkateswara Temple (Tirumala) — the world's most visited and richest religious site." },
    { slug: "visakhapatnam", title: "Visakhapatnam", tagline: "City of Destiny", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", overview: "Araku Valley coffee plantations, Borra Caves, RK Beach, submarine museum, and Kailasagiri hill park." },
  ],
  "bihar": [
    { slug: "bodh-gaya", title: "Bodh Gaya", tagline: "Where Buddha Attained Enlightenment", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Mahabodhi Temple (UNESCO), Bodhi Tree, international monasteries, and the Great Buddha Statue." },
    { slug: "nalanda", title: "Nalanda", tagline: "World's First University", image: "https://images.unsplash.com/photo-1600100398055-144721489410?q=80&w=800", overview: "Ruins of the ancient Nalanda University (5th century), Archaeological Museum, and Xuanzang Memorial." },
    { slug: "rajgir", title: "Rajgir", tagline: "Ancient Capital of Magadha", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800", overview: "Griddhakuta Peak where Buddha preached, Japanese Peace Pagoda, hot springs, and Cyclopean Wall ruins." },
  ],
};

// Build full city object from simplified data
function buildCity(city) {
  return {
    slug: city.slug,
    title: { en: city.title, es: city.title, pt: city.title },
    tagline: { en: city.tagline, es: city.tagline, pt: city.tagline },
    image: city.image,
    gallery: [city.image],
    overview: { en: city.overview, es: city.overview, pt: city.overview },
    history: { en: `${city.title} has a rich history spanning centuries, shaped by various dynasties and cultures.`, es: `${city.title} tiene una rica historia de siglos.`, pt: `${city.title} tem uma rica história de séculos.` },
    culture: { en: `Known for its unique traditions, festivals, and local art forms.`, es: `Conocido por sus tradiciones únicas y festivales.`, pt: `Conhecido por suas tradições únicas e festivais.` },
    attractions: [],
    thingsToDo: [
      { en: `Explore the main attractions and heritage sites of ${city.title}.`, es: `Explore las atracciones principales de ${city.title}.`, pt: `Explore as atrações principais de ${city.title}.` },
      { en: `Try local cuisine and street food specialties.`, es: `Pruebe la cocina local y especialidades callejeras.`, pt: `Experimente a culinária local e especialidades de rua.` },
    ],
    hotels: [],
    localFood: { en: `Famous for local regional specialties and traditional thali meals.`, es: `Famoso por especialidades regionales.`, pt: `Famoso por especialidades regionais.` },
    shopping: { en: `Local handicrafts, textiles, and souvenirs.`, es: `Artesanías locales y textiles.`, pt: `Artesanato local e têxteis.` },
    weather: { en: `Pleasant weather during October to March.`, es: `Clima agradable de octubre a marzo.`, pt: `Clima agradável de outubro a março.` },
    bestTime: { en: `October to March`, es: `De octubre a marzo`, pt: `De outubro a março` },
    travelTips: [
      { en: `Book private guides for the best experience.`, es: `Reserve guías privados.`, pt: `Reserve guias privados.` },
    ],
    nearbyPlaces: [],
    suggestedItinerary: { en: `Day 1: Arrive and explore the main sights. Day 2: Visit nearby attractions and enjoy local cuisine.`, es: `Día 1: Llegada. Día 2: Explorar atracciones.`, pt: `Dia 1: Chegada. Dia 2: Explorar atrações.` },
    faqs: [],
  };
}

// Update each state with its cities
for (const state of states) {
  const citiesData = CITIES_DATA[state.slug];
  if (citiesData && citiesData.length > 0) {
    // Keep existing cities that have rich data (like Jaipur with attractions)
    const existingSlugs = state.cities.map(c => c.slug);
    const newCities = citiesData
      .filter(c => !existingSlugs.includes(c.slug))
      .map(buildCity);
    state.cities = [...state.cities, ...newCities];
  }
}

// Write updated data
fs.writeFileSync(STATES_FILE, JSON.stringify(states, null, 2), "utf-8");
console.log("Done! Updated states.json with city data.");
console.log("States updated:");
for (const s of states) {
  console.log(`  ${s.slug}: ${s.cities.length} cities`);
}
