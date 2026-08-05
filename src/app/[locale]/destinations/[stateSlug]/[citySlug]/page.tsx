import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlugAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { Calendar, Landmark, ArrowRight } from "lucide-react";

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
        <img src={city.image} alt={city.title?.[locale] || city.title?.en} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16">
          <span className="editorial-subheading block text-gold">{state.title?.en} Destination</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{city.title?.[locale] || city.title?.en}</h1>
          <p className="text-white/80 max-w-xl mx-auto text-sm">{city.tagline?.[locale] || city.tagline?.en}</p>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-royal">About</h2>
            <p className="text-sm text-foreground/65 leading-relaxed">{city.overview?.[locale] || city.overview?.en}</p>
          </div>
          <div className="space-y-4 pt-6 border-t border-sand">
            <h3 className="text-lg font-serif font-bold text-royal flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              <span>{locale === "es" ? "Itinerario Sugerido" : locale === "pt" ? "Itinerário Sugerido" : "Suggested Itinerary"}</span>
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed bg-white border border-sand/60 p-5 rounded-2xl">
              {city.suggestedItinerary?.[locale] || city.suggestedItinerary?.en}
            </p>
          </div>
        </div>
        <div className="card-elevated p-8 h-fit space-y-5">
          <h3 className="editorial-subheading border-b border-sand pb-3">Details</h3>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Best Season</span>
              <span className="text-foreground/70">{city.bestTime?.[locale] || city.bestTime?.en}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Local Food</span>
              <span className="text-foreground/70">{city.localFood?.[locale] || city.localFood?.en}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 block">Shopping</span>
              <span className="text-foreground/70">{city.shopping?.[locale] || city.shopping?.en}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      {city.attractions?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-8 border-t border-sand">
          <h2 className="text-2xl font-serif font-bold text-royal text-center">
            {locale === "es" ? "Monumentos Destacados" : locale === "pt" ? "Monumentos Destacados" : "Key Landmarks"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {city.attractions.map((att: any, idx: number) => (
              <Link key={att.slug || idx} href={`/${locale}/destinations/${stateSlug}/${citySlug}/${att.slug}`} className="group block">
                <div className="card-elevated overflow-hidden flex flex-col md:flex-row h-56">
                  <div className="md:w-5/12 h-40 md:h-full shrink-0 overflow-hidden">
                    <img src={att.image} alt={att.name?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="md:w-7/12 p-5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors">{att.name?.[locale] || att.name?.en}</h3>
                      <p className="text-xs text-foreground/60 line-clamp-3 leading-relaxed">{att.desc?.[locale] || att.desc?.en}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1">
                      <span>Details</span><Landmark className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
