import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { MapPin, Calendar, Sparkles, Coffee, Landmark, ArrowRight } from "lucide-react";

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
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={state.image} alt={state.title?.[locale] || state.title?.en} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16">
          <span className="editorial-subheading block text-gold">{state.region} India</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">{state.title?.[locale] || state.title?.en}</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm leading-relaxed">{state.tagline?.[locale] || state.tagline?.en}</p>
        </div>
      </div>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-royal">{text.overview}</h2>
            <p className="text-sm text-foreground/65 leading-relaxed">{state.description?.[locale] || state.description?.en}</p>
          </div>
          {state.history && (
            <div className="space-y-4 pt-6 border-t border-sand">
              <h3 className="text-xl font-serif font-bold text-royal">{text.history}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{state.history?.[locale] || state.history?.en}</p>
            </div>
          )}
        </div>
        <div className="card-elevated p-8 h-fit space-y-5">
          <h3 className="editorial-subheading border-b border-sand pb-3">Quick Facts</h3>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Best Season</span>
              <span className="text-foreground/70">{state.bestTime?.[locale] || state.bestTime?.en}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Culture</span>
              <span className="text-foreground/70">{state.culture?.[locale] || state.culture?.en}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      {state.cities && state.cities.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
          <h2 className="text-2xl font-serif font-bold text-royal text-center">{text.cities}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {state.cities.map((city: any) => (
              <Link key={city.slug} href={`/${locale}/destinations/${stateSlug}/${city.slug}`} className="group block">
                <div className="card-elevated overflow-hidden flex flex-col md:flex-row h-64">
                  <div className="md:w-5/12 h-44 md:h-full shrink-0 overflow-hidden">
                    <img src={city.image} alt={city.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-bold text-royal group-hover:text-gold transition-colors">{city.title?.[locale] || city.title?.en}</h3>
                      <p className="text-xs text-foreground/60 line-clamp-3 leading-relaxed">{city.overview?.[locale] || city.overview?.en}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1 mt-3">
                      <span>Explore</span><Sparkles className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Attractions */}
      {state.cities?.some((c: any) => c.attractions?.length > 0) && (
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-8 border-t border-sand">
          <h2 className="text-2xl font-serif font-bold text-royal text-center">{text.attractions}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {state.cities.flatMap((city: any) =>
              (city.attractions || []).map((att: any) => ({ ...att, citySlug: city.slug, cityName: city.title?.[locale] || city.title?.en }))
            ).map((att: any, idx: number) => (
              <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${att.citySlug}/${att.slug}`} className="group block">
                <div className="card-elevated overflow-hidden h-[360px] flex flex-col">
                  <div className="h-44 overflow-hidden relative shrink-0">
                    <img src={att.image} alt={att.name?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-gold text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">{att.cityName}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors">{att.name?.[locale] || att.name?.en}</h3>
                      <p className="text-xs text-foreground/60 line-clamp-3 leading-relaxed">{att.desc?.[locale] || att.desc?.en}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold flex items-center gap-1 pt-2 transition-colors">
                      <span>Details</span><Landmark className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Local Food */}
      {state.localFood && (
        <section className="max-w-7xl mx-auto px-6 py-12 border-t border-sand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="editorial-subheading flex items-center gap-2"><Coffee className="w-4 h-4" />{text.food}</span>
              <h2 className="text-2xl font-serif font-bold text-royal">Signature Flavors</h2>
              <p className="text-sm text-foreground/60 leading-relaxed">{state.localFood?.[locale] || state.localFood?.en}</p>
              <Link href={`/${locale}/food`} className="btn-secondary inline-flex items-center gap-2 mt-4">
                <span>Food Guide</span><ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg image-zoom-container">
              <img src="https://images.unsplash.com/photo-1585938338392-50a59970d8ee?q=80&w=800" alt="Indian Food" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* Inquiry */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-sand">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
