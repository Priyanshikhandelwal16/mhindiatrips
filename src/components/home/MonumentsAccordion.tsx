"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, MapPin, Clock, Star, Calendar } from "lucide-react";
import { getLocalizedDestinationsPath } from "@/lib/utils";
import { getHighResImageUrl } from "@/lib/image-utils";

interface MonumentItem {
  id: string;
  image: string;
  title: { en: string; es: string; pt: string };
  verticalTitle: { en: string; es: string; pt: string };
  city: string;
  state: string;
  stateSlug?: string;
  citySlug?: string;
  path: string;
  details: {
    description: { en: string; es: string; pt: string };
    timings: string;
    bestTime: string;
    entryFee: string;
    highlights: string[];
  };
}

interface MonumentsAccordionProps {
  locale: string;
  monuments?: any[];
}

export default function MonumentsAccordion({ locale, monuments }: MonumentsAccordionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedMonument, setSelectedMonument] = useState<MonumentItem | null>(null);

  const defaultItems: MonumentItem[] = [
    {
      id: "taj-mahal",
      slug: "taj-mahal",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format",
      title: { en: "Taj Mahal, Agra", es: "Taj Mahal, Agra", pt: "Taj Mahal, Agra" },
      verticalTitle: { en: "Taj Mahal", es: "Taj Mahal", pt: "Taj Mahal" },
      city: "Agra",
      state: "Uttar Pradesh",
      stateSlug: "uttar-pradesh",
      citySlug: "agra",
      path: "/destinations/uttar-pradesh/agra",
      details: {
        description: {
          en: "Built by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is a UNESCO World Heritage Site and one of the Seven Wonders of the World. This white marble mausoleum, completed in 1653, stands as the pinnacle of Mughal architecture and India's most iconic monument.",
          es: "Construido por el emperador mogol Shah Jahan en memoria de su amada esposa Mumtaz Mahal, el Taj Mahal es Patrimonio de la Humanidad de la UNESCO y una de las Siete Maravillas del Mundo.",
          pt: "Construído pelo imperador mogol Shah Jahan em memória de sua amada esposa Mumtaz Mahal, o Taj Mahal é Patrimônio Mundial da UNESCO e uma das Siete Maravilhas do Mundo."
        },
        timings: "Sunrise to Sunset (Closed on Fridays)",
        bestTime: "October to March (Sunrise for best light)",
        entryFee: "₹1,300 (Foreign nationals) | ₹50 (Indian nationals)",
        highlights: ["Private sunrise access available", "Yamuna River view platform", "Mehman Khana museum", "Main garden (Charbagh)", "The reflecting pool"]
      }
    },
    {
      id: "chittorgarh",
      slug: "chittorgarh",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1400&auto=format",
      title: { en: "Chittorgarh Fort, Rajasthan", es: "Fuerte Chittorgarh, Rajastán", pt: "Forte Chittorgarh, Rajastão" },
      verticalTitle: { en: "Chittorgarh Fort", es: "Fuerte Chittorgarh", pt: "Forte Chittorgarh" },
      city: "Chittorgarh",
      state: "Rajasthan",
      stateSlug: "rajasthan",
      citySlug: "chittorgarh",
      path: "/destinations/rajasthan/chittorgarh",
      details: {
        description: {
          en: "The largest fort in India and a UNESCO World Heritage Site, Chittorgarh stands atop a massive hill spanning 700 acres. This legendary Rajput stronghold witnessed three epic sieges and is the site of Rani Padmini's famous jauhar (self-immolation). It houses magnificent palaces, towers, and temples.",
          es: "El fuerte más grande de la India y Patrimonio de la Humanidad de la UNESCO, Chittorgarh se alza en una colina masiva de 700 acres. Este legendario bastión Rajput fue escenario de tres asedios épicos.",
          pt: "O maior forte da Índia e Patrimônio Mundial da UNESCO, Chittorgarh ergue-se no topo de uma colina de 700 acres. Esta lendária fortaleza Rajput testemunhou três cercos épicos."
        },
        timings: "7:00 AM to 6:00 PM (Daily)",
        bestTime: "October to March",
        entryFee: "₹600 (Foreign nationals) | ₹40 (Indian nationals)",
        highlights: ["Vijay Stambha (Victory Tower)", "Kirti Stambha (Fame Tower)", "Rani Padmini Palace", "Kumbha Palace ruins", "Meera Temple & Kali Mata Temple"]
      }
    },
    {
      id: "udaipur-palace",
      slug: "udaipur",
      image: "https://images.unsplash.com/photo-1602643072447-63ec27153372?q=80&w=1400&auto=format",
      title: { en: "City Palace, Udaipur", es: "Palacio de la Ciudad, Udaipur", pt: "Palácio da Cidade, Udaipur" },
      verticalTitle: { en: "City Palace Udaipur", es: "Palacio de Udaipur", pt: "Palácio de Udaipur" },
      city: "Udaipur",
      state: "Rajasthan",
      stateSlug: "rajasthan",
      citySlug: "udaipur",
      path: "/destinations/rajasthan/udaipur",
      details: {
        description: {
          en: "The majestic City Palace of Udaipur overlooks Lake Pichola and took nearly 400 years to build, with contributions from 22 different rulers of the Mewar dynasty. This stunning palace complex blends Rajput and Mughal architectural styles and houses museums, gardens, and the famous Taj Lake Palace just offshore.",
          es: "El majestuoso Palacio de la Ciudad de Udaipur domina el lago Pichola y tardó casi 400 años en construirse. Mezcla estilos arquitectónicos Rajput y Mughal.",
          pt: "O majestoso Palácio da Cidade de Udaipur tem vista para o Lago Pichola e levou quase 400 anos para ser construído. Mescla estilos arquitetônicos Rajput e Mughal."
        },
        timings: "9:30 AM to 5:30 PM (Daily)",
        bestTime: "October to March (Golden Hour at sunset)",
        entryFee: "₹300 (Foreign nationals) | ₹100 (Indian nationals)",
        highlights: ["Mardana Mahal", "Zenana Mahal", "Lake Pichola views", "Crystal Gallery", "Sheesh Mahal (Glass Hall)", "Sunset boat cruise"]
      }
    },
    {
      id: "hawa-mahal",
      slug: "jaipur",
      image: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=1400&auto=format",
      title: { en: "Hawa Mahal, Jaipur", es: "Hawa Mahal, Jaipur", pt: "Hawa Mahal, Jaipur" },
      verticalTitle: { en: "Hawa Mahal Jaipur", es: "Hawa Mahal Jaipur", pt: "Hawa Mahal Jaipur" },
      city: "Jaipur",
      state: "Rajasthan",
      stateSlug: "rajasthan",
      citySlug: "jaipur",
      path: "/destinations/rajasthan/jaipur",
      details: {
        description: {
          en: "Known as the 'Palace of Winds', Hawa Mahal is an iconic pink sandstone façade with 953 small windows designed to allow royal ladies to observe street festivals without being seen. Built in 1799 by Maharaja Sawai Pratap Singh, it is a masterpiece of Rajput architecture and Jaipur's most photographed monument.",
          es: "Conocido como el 'Palacio de los Vientos', Hawa Mahal tiene 953 pequeñas ventanas diseñadas para permitir a las mujeres reales observar las fiestas sin ser vistas.",
          pt: "Conhecido como o 'Palácio dos Ventos', o Hawa Mahal tem 953 pequenas janelas projetadas para permitir que as mulheres reais observem as festividades sem serem vistas."
        },
        timings: "9:00 AM to 5:00 PM (Daily)",
        bestTime: "October to March (Best photo light in the morning)",
        entryFee: "₹200 (Foreign nationals) | ₹50 (Indian nationals)",
        highlights: ["953 unique latticed windows", "Rooftop city views", "Archaeological museum inside", "Royal corridor history", "Original royal balconies", "Photography hotspot at sunrise"]
      }
    }
  ] as any;

  const items = monuments && monuments.length > 0 ? monuments.map((mon: any) => ({
    id: mon.slug || mon.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    slug: mon.slug || mon.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    image: mon.image,
    title: { en: mon.name, es: mon.name, pt: mon.name },
    verticalTitle: { en: mon.name.split(",")[0], es: mon.name.split(",")[0], pt: mon.name.split(",")[0] },
    city: mon.city || "",
    state: mon.state || "",
    path: "/monuments",
    details: {
      description: { en: mon.desc, es: mon.desc, pt: mon.desc },
      timings: mon.timings || "Sunrise to Sunset",
      bestTime: mon.bestTime || "October to March",
      entryFee: mon.entryFee || "Standard fees apply",
      highlights: mon.highlights || ["Heritage Monument", "Photo Hotspot", "Guided Tour Available"]
    }
  })) : defaultItems;

  const labels: Record<string, any> = {
    en: { sectionTitle: "Monuments of India", moreInfo: "More Info", viewDetails: "View Complete Details", close: "Close" },
    es: { sectionTitle: "Monumentos de la India", moreInfo: "Más Info", viewDetails: "Ver Detalles Completos", close: "Cerrar" },
    pt: { sectionTitle: "Monumentos da Índia", moreInfo: "Mais Info", viewDetails: "Ver Detalhes Completos", close: "Fechar" }
  };

  const text = labels[locale] || labels.en;

  const openDetails = (monument: MonumentItem) => {
    setSelectedMonument(monument);
    setDetailsOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-white border-b border-gold/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* Title */}
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">Heritage Sites</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-royal tracking-tight">
              {text.sectionTitle}
            </h2>
            <div className="h-[2px] w-20 bg-gold/30 mx-auto mt-4" />
          </div>

          {/* Expanding Row Container */}
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px] w-full items-stretch">
            {items.map((item: any, idx: number) => {
              const isActive = idx === activeIdx;
              const titleText = item.title[locale as "en" | "es" | "pt"] || item.title.en;
              const verticalTitleText = item.verticalTitle[locale as "en" | "es" | "pt"] || item.verticalTitle.en;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative overflow-hidden transition-all duration-700 ease-out cursor-pointer shadow-lg border border-gold/5 flex flex-col justify-end w-full md:w-auto rounded-2xl ${
                    isActive 
                      ? "flex-grow-[4.5] h-[280px] md:h-full md:min-w-[320px]" 
                      : "flex-grow-[1] h-[70px] md:h-full md:min-w-[80px]"
                  }`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {/* Dark gradient overlay */}
                  <div className={`absolute inset-0 transition-all duration-700 ${isActive ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent" : "bg-black/60"}`} />

                  {/* Vertical label for collapsed state */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span
                        className="text-white/90 font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap select-none"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {verticalTitleText}
                      </span>
                    </div>
                  )}

                  {/* Active content */}
                  {isActive && (
                    <div className="relative z-10 p-8 space-y-4 animate-fade-in">
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-gold" />
                          <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{item.city}, {item.state}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-serif text-white leading-tight">
                          {titleText}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <button
                          onClick={() => openDetails(item)}
                          className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-royal text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                          suppressHydrationWarning
                        >
                          <Star className="w-3.5 h-3.5" />
                          {text.viewDetails}
                        </button>
                        <Link
                          href={getLocalizedDestinationsPath(locale, item.stateSlug, item.citySlug)}
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-white/25 transition-all duration-300"
                        >
                          <span>Explore Region</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Details Modal */}
      {detailsOpen && selectedMonument && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setDetailsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-white overflow-hidden shadow-2xl border border-gold/15 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Image */}
            <div className="relative h-64 md:h-72 w-full shrink-0">
              <img
                src={getHighResImageUrl(selectedMonument.image)}
                alt={selectedMonument.title[locale as "en" | "es" | "pt"]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <button
                onClick={() => setDetailsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all cursor-pointer"
                suppressHydrationWarning
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{selectedMonument.city}, {selectedMonument.state}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
                  {selectedMonument.title[locale as "en" | "es" | "pt"]}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <p className="text-sm text-foreground/70 leading-relaxed font-light">
                {selectedMonument.details.description[locale as "en" | "es" | "pt"] || selectedMonument.details.description.en}
              </p>

              {/* Quick Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FAF8F5] p-5 space-y-1 border border-gold/10">
                  <div className="flex items-center gap-2 text-gold">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Timings</span>
                  </div>
                  <p className="text-xs text-royal font-medium">{selectedMonument.details.timings}</p>
                </div>
                <div className="bg-[#FAF8F5] p-5 space-y-1 border border-gold/10">
                  <div className="flex items-center gap-2 text-gold">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Best Time</span>
                  </div>
                  <p className="text-xs text-royal font-medium">{selectedMonument.details.bestTime}</p>
                </div>
                <div className="bg-[#FAF8F5] p-5 space-y-1 border border-gold/10">
                  <div className="flex items-center gap-2 text-gold">
                    <Star className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Entry Fee</span>
                  </div>
                  <p className="text-xs text-royal font-medium">{selectedMonument.details.entryFee}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-royal uppercase tracking-wider" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>Must-See Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {selectedMonument.details.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      <span className="font-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={getLocalizedDestinationsPath(locale, selectedMonument.stateSlug, selectedMonument.citySlug)}
                className="flex items-center justify-center gap-2 w-full bg-royal hover:bg-royal/90 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.01]"
                onClick={() => setDetailsOpen(false)}
              >
                <span>Explore {selectedMonument.city} Fully</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
