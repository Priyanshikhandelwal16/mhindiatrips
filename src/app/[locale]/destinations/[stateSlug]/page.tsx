import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { MapPin, Calendar, Sparkles, Coffee, Landmark, ArrowRight, BookOpen } from "lucide-react";

interface StatePageProps {
  params: Promise<{ locale: string; stateSlug: string }>;
}

export default async function StateDetailPage({ params }: StatePageProps) {
  const { locale, stateSlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();

  const t: Record<string, any> = {
    en: { cities: "Cities to Explore", attractions: "Key Landmarks", food: "Local Flavors", tips: "Travel Tips", overview: "Overview", history: "History" },
    es: { cities: "Ciudades para Explorar", attractions: "Monumentos Principales", food: "Sabores Locales", tips: "Consejos de Viaje", overview: "Resumen", history: "Historia" },
    pt: { cities: "Cidades para Explorar", attractions: "Monumentos Principais", food: "Sabores Locais", tips: "Dicas de Viagem", overview: "Visão Geral", history: "História" }
  };
  const text = t[locale] || t.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Cinematic Hero Banner */}
      <div className="relative h-[65vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={state.image} alt={state.title?.[locale] || state.title?.en} className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16 max-w-3xl">
          <span className="editorial-subheading block text-gold tracking-[0.25em] text-[10px] font-bold">{state.region} India</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">{state.title?.[locale] || state.title?.en}</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm leading-relaxed font-light">{state.tagline?.[locale] || state.tagline?.en}</p>
          
          <div className="pt-8 flex flex-col items-center opacity-40">
            <span className="text-[8px] uppercase tracking-[0.3em] mb-2 font-medium">Scroll</span>
            <div className="w-[1px] h-6 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* SECTION 2: History & Story + Quick Facts */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{locale === "es" ? "HISTORIA Y CULTURA" : locale === "pt" ? "HISTÓRIA E CULTURA" : "Heritage & Essence"}</span>
            </span>
            <h2 className="text-3xl font-serif font-bold text-royal leading-tight">{text.overview}</h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{state.description?.[locale] || state.description?.en}</p>
          </div>
          {state.history && (
            <div className="space-y-4 pt-8 border-t border-sand/65">
              <h3 className="text-2xl font-serif font-bold text-royal">{text.history}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">{state.history?.[locale] || state.history?.en}</p>
            </div>
          )}
        </div>
        <div className="glass-panel border border-gold/15 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
          <h3 className="editorial-subheading text-[10px] tracking-[0.2em] font-bold text-royal border-b border-sand/70 pb-3">Quick Facts</h3>
          <div className="space-y-5 text-sm">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Best Season to Visit</span>
              <span className="text-foreground/75 font-medium">{state.bestTime?.[locale] || state.bestTime?.en}</span>
            </div>
            <div className="pt-4 border-t border-sand/40">
               <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Culture & Art</span>
               <span className="text-foreground/75 font-medium">{state.culture?.[locale] || state.culture?.en}</span>
            </div>
            {state.region && (
              <div className="pt-4 border-t border-sand/40">
                <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">Region</span>
                <span className="text-foreground/75 font-medium">{state.region} India</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: Famous Tourist Cities */}
      {state.cities && state.cities.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-12 border-t border-sand/50">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.cities}</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Famous Tourist Hubs</h2>
            <div className="gold-divider w-20 mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {state.cities.map((city: any) => (
              <Link key={city.slug} href={`/${locale}/destinations/${stateSlug}/${city.slug}`} className="group block">
                <div className="luxury-card hover-lift overflow-hidden flex flex-col md:flex-row h-64 border border-gold/10">
                  <div className="md:w-5/12 h-44 md:h-full shrink-0 overflow-hidden relative">
                    <img src={city.image} alt={city.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  </div>
                  <div className="md:w-7/12 p-7 flex flex-col justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-bold text-royal group-hover:text-gold transition-colors">{city.title?.[locale] || city.title?.en}</h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">{city.overview?.[locale] || city.overview?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 mt-3 group-hover:text-saffron transition-colors">
                      <span>Explore City</span><Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: Famous Tourist Landmarks & Attractions */}
      {state.cities?.some((c: any) => c.attractions?.length > 0) && (
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-12 border-t border-sand/50">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.attractions}</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Iconic Landmarks & Historic Sites</h2>
            <div className="gold-divider w-20 mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.cities.flatMap((city: any) =>
              (city.attractions || []).map((att: any) => ({ ...att, citySlug: city.slug, cityName: city.title?.[locale] || city.title?.en }))
            ).map((att: any, idx: number) => (
              <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${att.citySlug}/${att.slug}`} className="group block">
                <div className="luxury-card hover-lift overflow-hidden h-[380px] flex flex-col border border-gold/10">
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <img src={att.image} alt={att.name?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-gold text-[9px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded">{att.cityName}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">{att.name?.[locale] || att.name?.en}</h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">{att.desc?.[locale] || att.desc?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest group-hover:text-gold flex items-center gap-1.5 pt-2 transition-colors">
                      <span>View Details</span><Landmark className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: Signature Cuisine & Local Flavors */}
      {state.localFood && (
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-sand/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="editorial-subheading flex items-center gap-2"><Coffee className="w-4 h-4 text-gold" />{text.food}</span>
              <h2 className="text-3xl font-serif font-bold text-royal leading-tight">Signature Culinary Traditions</h2>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">{state.localFood?.[locale] || state.localFood?.en}</p>
              <Link href={`/${locale}/food`} className="btn-secondary inline-flex items-center gap-2 mt-4 hover:border-gold hover:text-gold">
                <span>Explore Food Guide</span><ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden border border-gold/15 shadow-xl shadow-royal/5 relative image-zoom-container">
              <img src="/images/indian_cuisine_feast.png" alt="Indian Food" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: Tailored Inquiry Planner */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-sand/50">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
