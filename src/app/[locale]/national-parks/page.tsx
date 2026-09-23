import React from "react";
import Link from "next/link";
import { Trees, MapPin, ArrowRight, ShieldCheck, Calendar, Sparkles } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import PageHeroSlider from "@/components/common/PageHeroSlider";

interface NationalParksPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: NationalParksPageProps) {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Parques Nacionales de la India | Safaris de Vida Silvestre" : locale === "pt" ? "Parques Nacionais da Índia | Safáris de Vida Selvagem" : "National Parks of India | Tiger Safaris & Wildlife Tours",
    description: locale === "es" ? "Explore los mejores parques nacionales y reservas de tigres de la India" : locale === "pt" ? "Explore os melhores parques nacionais e reservas de tigres da Índia" : "Discover India's top National Parks, tiger reserves, and wildlife sanctuaries.",
  };
}

export default async function NationalParksPage({ params }: NationalParksPageProps) {
  const { locale } = await params;

  const t: Record<string, any> = {
    en: {
      heroTitle: "National Parks of India",
      heroSub: "WILDLIFE RESERVES & TIGER SAFARIS",
      heroDesc: "Journey into India's premier national parks, tiger reserves, and UNESCO wildlife sanctuaries guided by expert naturalists.",
      exploreBtn: "Inquire Safari",
      bestTime: "Best Time to Visit: Oct - April",
    },
    es: {
      heroTitle: "Parques Nacionales de la India",
      heroSub: "RESERVAS DE VIDA SILVESTRE Y SAFARIS",
      heroDesc: "Explore los principales parques nacionales, reservas de tigres y santuarios de la UNESCO en la India.",
      exploreBtn: "Consultar Safari",
      bestTime: "Mejor Época: Octubre a Abril",
    },
    pt: {
      heroTitle: "Parques Nacionais da Índia",
      heroSub: "RESERVAS DE VIDA SELVAGEM E SAFÁRIS",
      heroDesc: "Viaje pelos principais parques nacionais, reservas de tigres e santuários da UNESCO na Índia.",
      exploreBtn: "Consultar Safári",
      bestTime: "Melhor Época: Outubro a Abril",
    }
  };

  const text = t[locale] || t.en;

  const nationalParks = [
    {
      id: "ranthambore",
      name: "Ranthambore National Park",
      state: "Rajasthan",
      image: "/images/ranthambore_tiger_safari.png",
      tagline: "Home of Royal Bengal Tigers & Historic Desert Forts",
      desc: "Famous for daytime tiger sightings amidst 10th-century fort ruins and ancient banyan trees. Jeep & Canter safaris available twice daily.",
      highlights: ["Royal Bengal Tiger Safaris", "Ranthambore Fort", "Padam Talao Lake"],
      bestMonths: "October to June"
    },
    {
      id: "corbett",
      name: "Jim Corbett National Park",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=1200&q=80",
      tagline: "India's First National Park in Himalayan Foothills",
      desc: "Nestled along the Ramganga River, Corbett offers wild elephant herds, tigers, gharials, and over 600 bird species.",
      highlights: ["Dhikala Zone Stay", "Elephant & Jeep Safaris", "Ramganga River Valley"],
      bestMonths: "November to June"
    },
    {
      id: "kaziranga",
      name: "Kaziranga National Park",
      state: "Assam (North-East India)",
      isNorthEast: true,
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&q=80",
      tagline: "UNESCO World Heritage Sanctuary for One-Horned Rhinos",
      desc: "A jewel of North-East India holding two-thirds of the world's great one-horned rhinoceros population alongside wild water buffaloes.",
      highlights: ["One-Horned Rhinoceros", "Brahmaputra Floodplains", "Elephant Back Safaris"],
      bestMonths: "November to April"
    },
    {
      id: "kanha",
      name: "Kanha National Park",
      state: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80",
      tagline: "Lush Sal Forests & The Rare Hard-Ground Barasingha",
      desc: "Inspiration for Rudyard Kipling's Jungle Book, featuring open meadows, dense bamboo forests, and flourishing predator density.",
      highlights: ["Hard-Ground Barasingha", "Open Sal Meadows", "Mukki & Kanha Zones"],
      bestMonths: "October to June"
    },
    {
      id: "bandhavgarh",
      name: "Bandhavgarh National Park",
      state: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=1200&q=80",
      tagline: "Highest Density of Royal Bengal Tigers in India",
      desc: "Surrounded by 32 dramatic hills and ancient caves, Bandhavgarh boasts the highest concentration of wild tigers in Asia.",
      highlights: ["Tala Safari Zone", "Bandhavgarh Hill Fort", "Leopards & Sloth Bears"],
      bestMonths: "October to June"
    },
    {
      id: "sundarbans",
      name: "Sundarbans National Park",
      state: "West Bengal",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      tagline: "Largest Mangrove Forest & Swimming Tiger Sanctuary",
      desc: "A UNESCO World Heritage tidal delta where Royal Bengal Tigers adapted to salt water and mangrove jungle canals.",
      highlights: ["Boat Safaris in Mangrove Creeks", "Estuarine Crocodiles", "Dobanki Watchtower"],
      bestMonths: "September to March"
    },
    {
      id: "gir",
      name: "Gir National Park",
      state: "Gujarat",
      image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1200&q=80",
      tagline: "The Sole Haven of Asiatic Lions on Planet Earth",
      desc: "The only natural habitat outside Africa where Asiatic lions roam freely amidst teak forests and rocky hillocks.",
      highlights: ["Asiatic Lions", "Devalia Safari Zone", "Maldhari Heritage Villages"],
      bestMonths: "December to April"
    },
    {
      id: "periyar",
      name: "Periyar National Park",
      state: "Kerala",
      image: "/images/kerala_backwaters_houseboat.png",
      tagline: "Western Ghats Sanctuary & Scenic Lake Safaris",
      desc: "Set in the misty Cardamom Hills of Kerala, famed for wild elephant herds grazing along the banks of Lake Periyar.",
      highlights: ["Lake Boat Safaris", "Spice Plantation Walks", "Elephant Herds"],
      bestMonths: "September to April"
    }
  ];

  const heroSlides = [
    {
      image: "/images/ranthambore_tiger_safari.png",
      title: text.heroTitle,
      subtitle: text.heroSub,
      location: "India Wildlife Reserves",
      description: text.heroDesc,
      objectPosition: "center 25%"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      {/* Hero Banner */}
      <PageHeroSlider locale={locale} slides={heroSlides} showBreadcrumb={text.heroTitle} />

      {/* Main Parks Catalog */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        
        {/* Header Intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-royal tracking-tight">
            Explore India's Wildest Sanctuaries
          </h2>
          <p className="text-sm md:text-base text-foreground/75 font-light leading-relaxed">
            All safari packages are 100% private, managed by expert naturalists with pre-booked Jeep permits and luxury jungle lodge stays.
          </p>
          <div className="h-px w-24 bg-gold mx-auto mt-2" />
        </div>

        {/* National Parks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {nationalParks.map((park, i) => (
            <Reveal key={park.id} delay={i * 80}>
              <Link href={`/${locale}/contact?subject=National+Park+Safari+${park.name}`} className="group block h-full">
                <div className="bg-white border border-gold/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group-hover:-translate-y-1">
                  
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={park.image} 
                      alt={park.name} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <span className="absolute bottom-4 left-4 text-white text-xs font-semibold flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{park.state}</span>
                    </span>

                    {park.isNorthEast && (
                      <span className="absolute top-4 right-4 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-gold" />
                        <span>Featured North-East Region</span>
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold block">
                        {park.tagline}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-royal group-hover:text-emerald-800 transition-colors">
                        {park.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                        {park.desc}
                      </p>
                    </div>

                    {/* Highlights Tags */}
                    <div className="pt-4 border-t border-gold/15 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {park.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="bg-[#FAF8F5] border border-gold/20 text-royal text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            • {h}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] uppercase font-bold text-foreground/50">
                          {park.bestMonths}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-gold group-hover:text-royal flex items-center gap-1">
                          <span>{text.exploreBtn}</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </section>
    </div>
  );
}
