"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { 
  Sparkles, Calendar, Award, ShieldCheck, Check, Compass, 
  MapPin, CheckCircle2, ChevronRight, UserCheck, Utensils, HeartHandshake
} from "lucide-react";

interface Day {
  day: number;
  title: string;
  desc: string;
}

interface Itinerary {
  title: string;
  tagline: string;
  days: Day[];
}

const ITINERARY_DATA: Record<string, Record<string, Itinerary>> = {
  heritage: {
    short: {
      title: "Golden Triangle Palace Escape",
      tagline: "A majestic sweep through Delhi, Agra, and Jaipur, staying in restored luxury havelis.",
      days: [
        { day: 1, title: "Imperial Entry in Delhi", desc: "VIP airport reception. Private transfer to a colonial heritage hotel. Enjoy a welcome dinner at a curated chef's table." },
        { day: 2, title: "Taj Mahal Sunset & Yamuna Cruise", desc: "Private SUV transfer to Agra. Afternoon private guided tour of Agra Fort, followed by sunset views of the Taj Mahal from a private yacht." },
        { day: 3, title: "Pink City Fortresses", desc: "Travel to Jaipur. Check in to a historic city palace. Evening local bazaar walking tour led by a culture specialist." },
        { day: 4, title: "Amer Fort VIP Entry & Royal Feast", desc: "Fast-track entry into Amer Fort. Private elephant sanctuary visit. Dine under the stars inside a restored 18th-century fortress." },
        { day: 5, title: "Sovereign Departure", desc: "Return transfer to Delhi international airport in your private SUV. VIP lounge access before your boarding." }
      ]
    },
    medium: {
      title: "Imperial Rajasthan & Palace Splendors",
      tagline: "Delve deeper into the desert kingdoms with stays inside actual royal fortresses.",
      days: [
        { day: 1, title: "Royal Arrival & Old Delhi Heritage", desc: "VIP reception. Tour of Mughal monuments by private rickshaw. Stay at a heritage palace hotel." },
        { day: 2, title: "Sunrise Taj Mahal & Agra Fort", desc: "Express private transfer to Agra. Guided exploration of the Taj Mahal with a local historian." },
        { day: 3, title: "Jaipur - The Land of Kings", desc: "Drive to Jaipur. Stay at the majestic Rambagh Palace. Private traditional greeting ceremony." },
        { day: 4, title: "Jaipur Astronomers & Fortresses", desc: "Explore the City Palace archives and the Jantar Mantar observatory. High-tea overlooking the hills." },
        { day: 5, title: "Blue City Jodhpur & Mehrangarh Fort", desc: "Private SUV drive to Jodhpur. Stay at Umaid Bhawan Palace. Exclusive private museum access." },
        { day: 6, title: "Bishnoi Village Safari", desc: "Private open-jeep safari to meet local artisans and witness protected wildlife in their natural habitat." },
        { day: 7, title: "Udaipur - Lake City Wonders", desc: "Drive to Udaipur. Boat cruise on Lake Pichola at sunset. Dinner at Jagmandir Island Palace." },
        { day: 8, title: "Monsoon Palace Departure", desc: "Relaxing Ayurvedic morning session. Private transfer to Udaipur airport for your connecting flight." }
      ]
    },
    long: {
      title: "The Grand Maharaja's Route",
      tagline: "The ultimate Indian odyssey covering heritage, mysticism, and royal hospitality.",
      days: [
        { day: 1, title: "Capital Arrival & Lutyens Exploration", desc: "Bespoke check-in at Delhi's finest palace suite. Afternoon private driving tour of capital landmarks." },
        { day: 2, title: "Agra Mughal Marvels", desc: "Scenic private transfer to Agra. Sunset viewing of the Taj Mahal from Mehtab Bagh gardens." },
        { day: 3, title: "Jaipur Palace Check-in", desc: "Travel to Jaipur. Royal welcome and check-in to historic palace grounds. Evening traditional folk dance performance." },
        { day: 4, title: "Amber Fort & Artisan Guilds", desc: "Guided fort exploration. Hand-on gemstone carving workshop with a master craftsman." },
        { day: 5, title: "Golden Desert Jaisalmer", desc: "Travel to Jaisalmer. Stay at a luxury tented camp in the Sam sand dunes. Camel trek at sunset." },
        { day: 6, title: "Desert Fortresses & Havelis", desc: "Tour the living fort of Jaisalmer and its intricate sandstone carvings. Sunset flute performance on dunes." },
        { day: 7, title: "Blue City Jodhpur Majesty", desc: "Drive to Jodhpur. Stay in a luxury heritage haveli. Private evening terrace dinner overlooking the illuminated Mehrangarh Fort." },
        { day: 8, title: "Lake Pichola Udaipur Splendor", desc: "Scenic transit via Ranakpur Jain Temples. Check in to Taj Lake Palace, floating in the center of the lake." },
        { day: 9, title: "Lake Pichola Yacht Cruise", desc: "Sunrise boat ride. Private tour of Udaipur's City Palace and crystal gallery." },
        { day: 10, title: "Spiritual Varanasi Ghats", desc: "Fly to Varanasi. Attend the spectacular Ganga Aarti ceremony from a private chartered boat." },
        { day: 11, title: "Sunrise Ganges & Sarnath", desc: "Sunrise boat cruise on the Ganges. Afternoon excursion to the Buddhist archaeological site at Sarnath." },
        { day: 12, title: "Departure via Delhi", desc: "Morning yoga session. Return flight to Delhi, connecting directly to your international departure." }
      ]
    }
  },
  wellness: {
    short: {
      title: "Himalayan Foothills Sanctuary",
      tagline: "Rejuvenate mind and body in the birthplace of Yoga, Rishikesh.",
      days: [
        { day: 1, title: "Dehradun Arrival & Temple Welcoming", desc: "VIP reception. Private drive into the mountains. Stay at Ananda in the Himalayas." },
        { day: 2, title: "Personal Ayurvedic Consultation", desc: "Detailed consultation with Ayurvedic doctors. Custom wellness meals. Evening private sound healing session." },
        { day: 3, title: "Sunrise Yoga & Ganges Aarti", desc: "Sunrise yoga overlooking the valley. Evening private ghat attendance for the sacred Aarti ceremony." },
        { day: 4, title: "Forest Bathing & Rafting", desc: "Guided meditative walk in pine forests. Gentle rafting on the sacred Ganges river." },
        { day: 5, title: "Mindfulness Departure", desc: "Final wellness check. Private transfer to Dehradun airport." }
      ]
    },
    medium: {
      title: "Kerala Ayurveda & Backwaters Healing",
      tagline: "Restore harmony through specialized Ayurvedic therapies and tranquil houseboat journeys.",
      days: [
        { day: 1, title: "Kochi Heritage Arrival", desc: "VIP pickup at Kochi. Private transfer to a luxury boutique hotel in Fort Kochi." },
        { day: 2, title: "Kathakali Performance & Spice Walk", desc: "Guided spice market walk. Evening private performance of the traditional Kathakali dance-drama." },
        { day: 3, title: "Munnar Tea Hills Retreat", desc: "Drive to Munnar. Stay at a luxury eco-lodge. Meditation session surrounded by mist-covered tea plantations." },
        { day: 4, title: "Therapeutic Oil Massage & Yoga", desc: "Private Ayurvedic consultation followed by a traditional Abhyanga oil massage." },
        { day: 5, title: "Backwaters Houseboat Cruise", desc: "Board a private luxury houseboat in Alleppey. Cruise through palm-fringed canals." },
        { day: 6, title: "Lake Vembanad Retreat", desc: "Disembark at a five-star lakeside wellness resort. Personalized Ayurvedic rejuvenation therapies." },
        { day: 7, title: "Marari Beach Relaxation", desc: "Transfer to a private beach villa. Beachfront meditation and organic dining." },
        { day: 8, title: "Farewell Healing", desc: "Morning herbal tea ceremony. Chauffeur transfer to Kochi international airport." }
      ]
    },
    long: {
      title: "Ultimate India Holistic Transformation",
      tagline: "A comprehensive spiritual and healing pilgrimage from the Ganges to the South.",
      days: [
        { day: 1, title: "Delhi Arrival", desc: "VIP arrival and check-in to a luxury wellness hotel. Organic welcoming tea." },
        { day: 2, title: "Varanasi Spiritual Immersion", desc: "Fly to Varanasi. Private meditation on the river ghats." },
        { day: 3, title: "Ganges Sunset Prayers", desc: "Private boat excursion to experience the sacred evening prayers." },
        { day: 4, title: "Rishikesh Himalayan Sanctuary", desc: "Fly to Dehradun, transfer to Rishikesh. Restorative massage session." },
        { day: 5, title: "Ayurvedic Consultation & Dosha Analysis", desc: "Deep medical consult. Tailored nutrition planning." },
        { day: 6, title: "Silent Meditation & Hatha Yoga", desc: "Morning silent walk. Afternoon private pranayama session." },
        { day: 7, title: "South India Wellness - Kochi", desc: "Fly to Kochi. Check in to a historic wellness retreat." },
        { day: 8, title: "Alleppey Houseboat Transit", desc: "Bespoke luxury houseboat cruise. Freshly caught organic meals." },
        { day: 9, title: "Kumarakom Ayurveda Intensive", desc: "Specialized Panchakarma therapy sessions under expert supervision." },
        { day: 10, title: "Marari Beach Yoga Retreat", desc: "Stay at Marari beach villa. Sunrise yoga on the sands." },
        { day: 11, title: "Sound Bath & Chakra Balancing", desc: "Vibrational sound healing session on the beach." },
        { day: 12, title: "Departure", desc: "Closing ceremony. Private transfer to Kochi international airport." }
      ]
    }
  },
  wildlife: {
    short: {
      title: "Royal Bengal Tiger Express",
      tagline: "Track the elusive tiger through the dry deciduous forests of Ranthambore.",
      days: [
        { day: 1, title: "Jaipur Arrival & Forest Drive", desc: "VIP reception in Jaipur. Private transfer to Ranthambore. Check-in to a luxury safari tent." },
        { day: 2, title: "Sunrise & Afternoon Safaris", desc: "Morning and afternoon private safaris in an open-top 4x4 Gypsy with a naturalist guide." },
        { day: 3, title: "Ranthambore Fort & Birding", desc: "Explore the ancient fort ruins rising high above the jungle. Bird-watching stroll along Lake Padam." },
        { day: 4, title: "Final Game Drive & Spa", desc: "Final morning safari. Relaxing spa treatment at your luxury resort." },
        { day: 5, title: "Return via Jaipur", desc: "Private transfer back to Jaipur airport for your flight home." }
      ]
    },
    medium: {
      title: "Jungles of Central India Safari",
      tagline: "Witness the rich biodiversity of Pench and Kanha national parks, the inspiration for The Jungle Book.",
      days: [
        { day: 1, title: "Nagpur to Pench Tiger Reserve", desc: "VIP arrival at Nagpur airport. Private transfer to a luxury safari lodge in Pench." },
        { day: 2, title: "Pench Tiger Tracking", desc: "Two private safaris. Track leopards, wild dogs, and royal Bengal tigers." },
        { day: 3, title: "Kanha Meadows Drive", desc: "Transfer to Kanha. Stay in a luxury glass cottage. Evening briefing by tiger experts." },
        { day: 4, title: "Kanha Sal Forests Safaris", desc: "Explore the vast meadows of Kanha. Track the rare hard-ground Barasingha deer." },
        { day: 5, title: "Tribal Village Visit", desc: "Private guided interaction with the local Gond tribal community. Traditional tribal feast." },
        { day: 6, title: "Bandhavgarh Fort Safaris", desc: "Transfer to Bandhavgarh. Luxury jungle camp stay." },
        { day: 7, title: "Bandhavgarh High Density Tigers", desc: "Safaris in the rocky terrains of Bandhavgarh. Excellent tiger photography opportunities." },
        { day: 8, title: "Jabalpur Departure", desc: "Morning nature walk. Private SUV transfer to Jabalpur airport." }
      ]
    },
    long: {
      title: "The Ultimate Indian Wilderness Odyssey",
      tagline: "A sweeping tour of India's top national parks, from Bengal tigers to wild elephants.",
      days: [
        { day: 1, title: "Delhi Arrival", desc: "VIP arrival. Stay at a premium hotel." },
        { day: 2, title: "Ranthambore Safari Camp", desc: "Scenic rail journey or private drive to Ranthambore. Stay at Oberoi Vanyavilas." },
        { day: 3, title: "Ranthambore Game Safaris", desc: "Search for tigers. Private campfire dinner under the stars." },
        { day: 4, title: "Heritage Taj Mahal Excursion", desc: "Excursion to Agra to witness the Taj Mahal before heading to central jungles." },
        { day: 5, title: "Kanha National Park", desc: "Fly to Raipur, transfer to Kanha. Luxury safari tent check-in." },
        { day: 6, title: "Kanha Deep Jungle Safaris", desc: "Witness massive bison and swamp deer. Guided birding walks." },
        { day: 7, title: "Bandhavgarh Rocky Cliffs", desc: "Drive to Bandhavgarh. Stay in a luxury treehouse." },
        { day: 8, title: "Bandhavgarh Tiger Tracking", desc: "Safaris in high tiger density zones." },
        { day: 9, title: "Kaziranga Rhino Sanctuary", desc: "Fly to Assam. Transfer to Kaziranga National Park." },
        { day: 10, title: "Kaziranga Elephant & Jeep Safari", desc: "Witness the prehistoric one-horned rhinoceros." },
        { day: 11, title: "Brahmaputra River Dolphin Cruise", desc: "Sunset cruise on the Brahmaputra River to see freshwater river dolphins." },
        { day: 12, title: "Kolkata Departure", desc: "Fly to Kolkata. Guided city walk, followed by private transfer to airport." }
      ]
    }
  }
};

const INCLUSIONS = {
  gold: [
    { title: "5-Star Heritage Havelis", desc: "Restored historic properties full of character." },
    { title: "Private Chauffeur SUV", desc: "Comfortable SUV with WiFi & snacks." },
    { title: "Certified Guides", desc: "Expert local guides at every monument." },
    { title: "Gourmet Breakfast", desc: "Daily multi-cuisine breakfasts included." },
    { title: "24/7 Operations Desk", desc: "Instant assistance via direct WhatsApp hotline." }
  ],
  diamond: [
    { title: "Maharaja Royal Palace Suites", desc: "Restored legendary palaces (Taj, Oberoi, Leela)." },
    { title: "Luxury Executive Sedan", desc: "Mercedes-Benz / Audi premium transits." },
    { title: "Private Scholar Historian", desc: "Exclusives guides with historical degrees." },
    { title: "Full-Board Chef Dining", desc: "Pre-booked signature table dinners and chef tables." },
    { title: "VIP Fast-Track Entries", desc: "Fast-track, skip-the-line monument entries." },
    { title: "Curated Experiences", desc: "Private boat charters, spa packages, wellness hosts." }
  ]
};

export default function ItineraryPlanner({ locale }: { locale: string }) {
  const [style, setStyle] = useState<string>("heritage");
  const [duration, setDuration] = useState<string>("medium");
  const [tier, setTier] = useState<"gold" | "diamond">("gold");
  const [activeTab, setActiveTab] = useState<number>(1);

  const currentItinerary = ITINERARY_DATA[style]?.[duration] || ITINERARY_DATA.heritage.medium;
  const currentInclusions = INCLUSIONS[tier];

  const handleBook = () => {
    const inquirySection = document.getElementById("inquiry");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
      
      // Attempt to auto-select corresponding travel style
      const styleInput = document.querySelector('select[name="packageSlug"]') as HTMLSelectElement;
      if (styleInput) {
        // Fallback value assignment
        styleInput.value = style === "heritage" ? "golden-triangle-luxury" : style === "wellness" ? "kerala-ayurveda-wellness" : "wildlife-ranthambore-safari";
        // Dispatch event so state changes in React if needed
        styleInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <section id="concierge-planner" className="section-spacing bg-[#102A1E] text-white border-y border-gold/20 relative overflow-hidden py-32">
      {/* Decorative backdrop graphics */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A85C_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header */}
        <Reveal className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Interactive Bespoke Concierge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-white">
            Co-Design Your Royal Journey
          </h2>
          <p className="text-sm md:text-base text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Select your style, duration, and luxury level to dynamically preview your day-by-day itinerary and VIP inclusions.
          </p>
          <div className="h-[2px] w-24 bg-gold/30 mx-auto mt-2" />
        </Reveal>

        {/* Dynamic Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Selectors */}
          <div className="lg:col-span-4 space-y-8 bg-black/20 backdrop-blur-md p-8 rounded-[2.5rem] border border-gold/15 shadow-2xl">
            
            {/* Control 1: Travel Vibe */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gold block">1. Select Travel Vibe</label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: "heritage", title: "Heritage & Palaces", icon: Compass },
                  { id: "wellness", title: "Wellness & Ayurveda", icon: HeartHandshake },
                  { id: "wildlife", title: "Wildlife & Tiger Safari", icon: Award }
                ].map((item) => {
                  const Icon = item.icon;
                  const active = style === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setStyle(item.id);
                        setActiveTab(1);
                      }}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl border text-left text-xs font-bold transition-all duration-300 w-full cursor-pointer ${
                        active
                          ? "bg-gold border-gold text-royal shadow-lg scale-[1.02]"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-gold/30"
                      }`}
                      suppressHydrationWarning
                    >
                      <Icon className={`w-5 h-5 ${active ? "text-royal" : "text-gold"}`} />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 2: Duration */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gold block">2. Select Duration</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "short", label: "5-7 Days" },
                  { id: "medium", label: "8-11 Days" },
                  { id: "long", label: "12-15 Days" }
                ].map((item) => {
                  const active = duration === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setDuration(item.id);
                        setActiveTab(1);
                      }}
                      className={`py-3.5 rounded-xl border text-[10px] font-bold text-center transition-all duration-300 cursor-pointer ${
                        active
                          ? "bg-gold border-gold text-royal shadow-md"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                      }`}
                      suppressHydrationWarning
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Luxury Level */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gold block">3. Select Luxury Tier</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "gold", title: "Royal Gold", desc: "Heritage luxury" },
                  { id: "diamond", title: "Maharaja Diamond", desc: "Palace suites & VIP" }
                ].map((item) => {
                  const active = tier === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setTier(item.id as "gold" | "diamond")}
                      className={`px-4 py-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        active
                          ? "bg-gold border-gold text-royal shadow-md"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                      }`}
                      suppressHydrationWarning
                    >
                      <span className="text-[10px] font-extrabold block uppercase tracking-wider">{item.title}</span>
                      <span className={`text-[8px] font-light block ${active ? "text-royal/80" : "text-white/40"}`}>{item.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right panel: Dynamic Itinerary Card */}
          <div className="lg:col-span-8 space-y-8 bg-white text-royal p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gold/25 relative overflow-hidden flex flex-col justify-between min-h-[580px]">
            
            {/* Header / Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="bg-gold/15 text-gold-light border border-gold/25 text-[9px] uppercase font-black tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  Custom Tour Preview
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/45">
                  {tier === "diamond" ? "💎 Maharaja Diamond Inclusions" : "✨ Royal Gold Inclusions"}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-serif leading-tight">
                {currentItinerary.title}
              </h3>
              
              <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
                {currentItinerary.tagline}
              </p>
            </div>

            {/* Split layout: Timeline (Left) & Perks (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 border-y border-gold/15 py-8">
              
              {/* Day-by-Day Selector Timeline */}
              <div className="md:col-span-7 space-y-6">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold block">Day-by-Day Experience</span>
                
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {currentItinerary.days.map((d) => (
                    <button
                      key={d.day}
                      onClick={() => setActiveTab(d.day)}
                      className={`flex-shrink-0 w-10 h-10 rounded-full border text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                        activeTab === d.day
                          ? "bg-gold border-gold text-royal shadow"
                          : "border-gold/15 bg-gold/5 text-royal hover:bg-gold/15"
                      }`}
                      suppressHydrationWarning
                    >
                      {d.day}
                    </button>
                  ))}
                </div>

                <div className="bg-[#FAF8F5] border border-gold/10 p-5 rounded-2xl min-h-[120px] flex flex-col justify-center">
                  {currentItinerary.days.map((d) => {
                    if (d.day !== activeTab) return null;
                    return (
                      <div key={d.day} className="space-y-2 animate-fade-in">
                        <h4 className="text-xs uppercase tracking-widest font-black text-gold">Day {d.day}: {d.title}</h4>
                        <p className="text-xs text-foreground/75 leading-relaxed font-light">{d.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions / Facilities Perks */}
              <div className="md:col-span-5 space-y-4">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold block">Elite Facilities Included</span>
                <div className="space-y-3">
                  {currentInclusions.map((inc, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-xs">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-royal block">{inc.title}</span>
                        <span className="text-[10px] text-foreground/45 font-light leading-normal block">{inc.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom: Pricing Tier & Book button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-[9px] uppercase tracking-wider text-foreground/40 font-bold">Estimated Cost</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl md:text-2xl font-bold font-serif text-royal">
                    {tier === "diamond" ? "$320" : "$190"}
                  </span>
                  <span className="text-[10px] text-foreground/50 font-light">/ day per guest</span>
                </div>
              </div>

              <button
                onClick={handleBook}
                className="w-full sm:w-auto bg-royal text-gold border border-gold/30 hover:bg-gold hover:text-royal transition-all duration-300 font-bold uppercase text-[10px] tracking-widest px-8 py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
                suppressHydrationWarning
              >
                <span>Initiate Bespoke Booking</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
