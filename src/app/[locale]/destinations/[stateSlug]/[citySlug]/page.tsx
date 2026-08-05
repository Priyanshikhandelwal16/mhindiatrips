import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Calendar, Landmark, ArrowRight, Sparkles, MapPin, Compass, Clock } from "lucide-react";

interface CityPageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();
  const city = state.cities?.find((c: any) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src={city.image} alt={city.title?.[locale] || city.title?.en} className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16 max-w-3xl">
          <span className="editorial-subheading block text-gold tracking-[0.2em] text-[10px] font-bold">{state.title?.[locale] || state.title?.en} Destination</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">{city.title?.[locale] || city.title?.en}</h1>
          <p className="text-white/80 max-w-xl mx-auto text-sm leading-relaxed font-light">{city.tagline?.[locale] || city.tagline?.en}</p>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>About Destination</span>
            </span>
            <h2 className="text-2xl font-serif font-bold text-royal">Overview & Character</h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{city.overview?.[locale] || city.overview?.en}</p>
          </div>
          
          {/* Suggested Itinerary Timeline */}
          <div className="space-y-6 pt-8 border-t border-sand/65">
            <h3 className="text-xl font-serif font-bold text-royal flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              <span>{locale === "es" ? "Itinerario Sugerido" : locale === "pt" ? "Itinerário Sugerido" : "Suggested Experience Itinerary"}</span>
            </h3>
            <div className="relative border-l border-gold/30 ml-3.5 pl-6 space-y-8 py-2">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gold border border-white flex items-center justify-center shadow-sm" />
                <h4 className="text-sm font-semibold text-royal uppercase tracking-wider">Day Plan & Sightseeing</h4>
                <p className="text-xs text-foreground/60 mt-2 leading-relaxed bg-white border border-sand/50 p-5 rounded-2xl font-light">
                  {city.suggestedItinerary?.[locale] || city.suggestedItinerary?.en}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar Info */}
        <div className="glass-panel border border-gold/15 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
          <h3 className="editorial-subheading text-[10px] tracking-[0.2em] font-bold text-royal border-b border-sand/70 pb-3">Travel Essentials</h3>
          <div className="space-y-5 text-sm">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Best Season to Visit</span>
              <span className="text-foreground/75 font-medium">{city.bestTime?.[locale] || city.bestTime?.en}</span>
            </div>
            <div className="pt-4 border-t border-sand/40">
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Signature Food</span>
              <span className="text-foreground/75 font-medium">{city.localFood?.[locale] || city.localFood?.en}</span>
            </div>
            <div className="pt-4 border-t border-sand/40">
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Local Shopping specialties</span>
              <span className="text-foreground/75 font-medium">{city.shopping?.[locale] || city.shopping?.en}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      {city.attractions?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-12 border-t border-sand/50">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">What to See</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Key Landmarks & Points of Interest</h2>
            <div className="gold-divider w-20 mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.attractions.map((att: any, idx: number) => (
              <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${citySlug}/${att.slug}`} className="group block">
                <div className="luxury-card hover-lift overflow-hidden flex flex-col md:flex-row h-60 border border-gold/10">
                  <div className="md:w-5/12 h-40 md:h-full shrink-0 overflow-hidden relative">
                    <img src={att.image} alt={att.name?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">{att.name?.[locale] || att.name?.en}</h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">{att.desc?.[locale] || att.desc?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 mt-2 group-hover:text-saffron transition-colors">
                      <span>Landmark Details</span><Landmark className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Inquiry */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-sand/50">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
