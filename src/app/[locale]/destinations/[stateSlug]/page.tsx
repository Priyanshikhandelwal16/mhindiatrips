import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getStatesAction, getStateBySlugAction, getTourPackagesAction } from "@/app/actions/queries";
import InquiryForm from "@/components/common/InquiryForm";
import { 
  MapPin, Calendar, Sparkles, Coffee, Landmark, ArrowRight, BookOpen, 
  Info, Camera, HelpCircle, CheckCircle, ChevronDown, Award, Compass 
} from "lucide-react";

interface StatePageProps {
  params: Promise<{ locale: string; stateSlug: string }>;
}

export default async function StateDetailPage({ params }: StatePageProps) {
  const { locale, stateSlug } = await params;
  const state = await getStateBySlugAction(stateSlug) as any;
  if (!state) notFound();

  // Fetch related content
  const allStates = await getStatesAction();
  const otherStates = allStates.filter((s: any) => s.slug !== stateSlug).slice(0, 3);
  
  const allPackages = await getTourPackagesAction();
  // Match packages that belong to this state's region or state name
  const relatedPackages = allPackages.filter((p: any) => {
    const titleText = (p.title?.en || "").toLowerCase();
    const stateName = (state.title?.en || "").toLowerCase();
    return titleText.includes(stateName) || p.category?.toLowerCase() === state.region?.toLowerCase();
  }).slice(0, 3);

  const t: Record<string, any> = {
    en: {
      overview: "Overview",
      history: "Heritage & History",
      gallery: "Visual Journey",
      sights: "Signature Attractions",
      bestTime: "Best Time to Visit",
      packages: "Exclusive Private Tours",
      tips: "Essential Travel Tips",
      faq: "Frequently Asked Questions",
      related: "Explore Other Regions",
      inquiry: "Plan Your Private Journey",
      region: "Region",
      season: "Visiting Season",
      culture: "Arts & Traditions"
    },
    es: {
      overview: "Resumen",
      history: "Patrimonio e Historia",
      gallery: "Viaje Visual",
      sights: "Atracciones Principales",
      bestTime: "Mejor Época para Visitar",
      packages: "Tours Privados Exclusivos",
      tips: "Consejos de Viaje Esenciales",
      faq: "Preguntas Frecuentes",
      related: "Explorar Otras Regiones",
      inquiry: "Planifique su Viaje Privado",
      region: "Región",
      season: "Temporada de Visita",
      culture: "Artes y Tradiciones"
    },
    pt: {
      overview: "Visão Geral",
      history: "Patrimônio e História",
      gallery: "Viagem Visual",
      sights: "Atrações Principais",
      bestTime: "Melhor Época para Visitar",
      packages: "Tours Privados Exclusivos",
      tips: "Dicas de Viagem Essenciais",
      faq: "Perguntas Frequentes",
      related: "Explorar Outras Regiões",
      inquiry: "Planeje sua Viagem Privada",
      region: "Região",
      season: "Temporada de Visita",
      culture: "Artes e Tradições"
    }
  };
  const text = t[locale] || t.en;

  // Static sample FAQs for the state
  const faqs = [
    {
      q: locale === "es" ? "¿Cómo personalizo mi itinerario?" : locale === "pt" ? "Como posso personalizar meu itinerário?" : "How do we customize our itinerary?",
      a: locale === "es" ? "Todos nuestros viajes son 100% privados y diseñados a medida. Su diseñador de viajes adaptará cada detalle." : locale === "pt" ? "Todas as nossas viagens são 100% privadas e feitas sob medida. Seu designer de viagens adaptará cada detalhe." : "All of our trips are 100% private and custom-designed. Your dedicated travel specialist will tailor every detail to your pace and style."
    },
    {
      q: locale === "es" ? "¿Qué tipo de hoteles están incluidos?" : locale === "pt" ? "Que tipo de hotéis estão incluídos?" : "What standard of hotels are included?",
      a: locale === "es" ? "Nos asociamos exclusivamente con hoteles palacio históricos de lujo, resorts boutique de cinco estrellas y propiedades premium." : locale === "pt" ? "Fazemos parcerias exclusivas com hotéis palácio históricos de luxo, resorts boutique de cinco estrelas e propriedades premium." : "We partner exclusively with luxury heritage palace hotels, five-star boutique resorts, and premium properties to ensure absolute comfort."
    },
    {
      q: locale === "es" ? "¿Están incluidos los guías privados?" : locale === "pt" ? "Os guias privados estão incluídos?" : "Are private guides and vehicles included?",
      a: locale === "es" ? "Sí, será acompañado por un guía local profesional en cada monumento y viajará en un vehículo privado con aire acondicionado." : locale === "pt" ? "Sim, você será acompanhado por um guia local profissional em cada monumento e viajará em um veículo privado com ar-condicionado." : "Yes, you will be escorted by professional local guides at each monument and travel in a private, air-conditioned vehicle with a professional driver."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Cinematic Hero Banner */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={state.image} alt={state.title?.[locale] || state.title?.en} className="absolute inset-0 w-full h-full object-cover animate-kenburns" loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 px-6 mt-20 max-w-5xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block shadow-md">
            {state.region} India
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white">{state.title?.[locale] || state.title?.en}</h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">{state.tagline?.[locale] || state.tagline?.en}</p>
          
          <div className="pt-10 flex flex-col items-center opacity-50">
            <span className="text-[10px] uppercase tracking-[0.35em] mb-2 font-medium">Scroll to explore</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* SECTION 2: Destination Overview */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-gold/10">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>{text.overview}</span>
            </span>
            <h2 className="text-3xl font-serif font-bold text-royal leading-tight">
              {locale === "es" ? "La Esencia de " : locale === "pt" ? "A Essência de " : "The Essence of "} {state.title?.[locale] || state.title?.en}
            </h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">{state.description?.[locale] || state.description?.en}</p>
          </div>
          {state.history && (
            <div className="space-y-4 pt-8 border-t border-sand/65">
              <h3 className="text-2xl font-serif font-bold text-royal">{text.history}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">{state.history?.[locale] || state.history?.en}</p>
            </div>
          )}
        </div>
        <div className="glass-panel border border-gold/15 p-8 rounded-3xl h-fit space-y-6 shadow-xl shadow-royal/5 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
          <h3 className="editorial-subheading text-[10px] tracking-[0.2em] font-bold text-royal border-b border-sand/70 pb-3">Destination Dossier</h3>
          <div className="space-y-5 text-sm">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">{text.region}</span>
              <span className="text-foreground/75 font-semibold">{state.region} India</span>
            </div>
            <div className="pt-4 border-t border-sand/40">
               <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">{text.season}</span>
               <span className="text-foreground/75 font-semibold">{state.bestTime?.[locale] || state.bestTime?.en}</span>
            </div>
            <div className="pt-4 border-t border-sand/40">
               <span className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 block mb-1">{text.culture}</span>
               <span className="text-foreground/75 font-semibold leading-relaxed block font-light">{state.culture?.[locale] || state.culture?.en}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Photo Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.gallery}</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Captivating Visuals</h2>
          <div className="gold-divider w-20 mx-auto mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-64 rounded-2xl overflow-hidden border border-gold/10 relative group shadow-md">
            <img src={state.image} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="h-64 rounded-2xl overflow-hidden border border-gold/10 relative group shadow-md">
            <img src="/images/taj_mahal_sunrise.png" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="h-64 rounded-2xl overflow-hidden border border-gold/10 relative group shadow-md">
            <img src="/images/rajasthan_fort_sunset.png" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Things to Do & Sights */}
      {state.cities && state.cities.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.sights}</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Iconic Sights & Famous Tourist Places</h2>
            <div className="gold-divider w-20 mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {state.cities.map((city: any) => (
              <Link key={city.slug} href={`/${locale}/destinations/${stateSlug}/${city.slug}`} className="group block">
                <div className="luxury-card hover-lift overflow-hidden flex flex-col md:flex-row h-64 border border-gold/10 bg-white">
                  <div className="md:w-5/12 h-44 md:h-full shrink-0 overflow-hidden relative">
                    <img src={city.image} alt={city.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  </div>
                  <div className="md:w-7/12 p-7 flex flex-col justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-bold text-royal group-hover:text-gold transition-colors">{city.title?.[locale] || city.title?.en}</h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">{city.overview?.[locale] || city.overview?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 mt-3 group-hover:text-saffron transition-colors">
                      <span>Explore Sights</span><Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: Best Time to Visit (Timeline details) */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.bestTime}</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Weather & Seasonality</h2>
          <div className="gold-divider w-20 mx-auto mt-2" />
        </div>
        <div className="bg-white border border-gold/10 p-8 rounded-3xl shadow-xl shadow-royal/5 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto md:mx-0"><Calendar className="w-5 h-5" /></span>
            <h4 className="text-sm font-serif font-bold text-royal uppercase tracking-wider">Peak Season (Oct - Mar)</h4>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">Perfect dry winter days, ideal for sightseeing, heritage walks, and safari drives.</p>
          </div>
          <div className="space-y-3 text-center md:text-left border-y md:border-y-0 md:border-x border-gold/15 py-6 md:py-0 md:px-8">
            <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto md:mx-0"><Calendar className="w-5 h-5" /></span>
            <h4 className="text-sm font-serif font-bold text-royal uppercase tracking-wider">Shoulder Season (Apr - Jun)</h4>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">Warm summer months, great for tiger tracking safaris and luxury hotel stays at lower rates.</p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto md:mx-0"><Calendar className="w-5 h-5" /></span>
            <h4 className="text-sm font-serif font-bold text-royal uppercase tracking-wider">Monsoon Season (Jul - Sep)</h4>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">Beautiful green landscapes, ideal for Kerala backwaters cruises and Ayurvedic spa retreats.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Private Tour Packages */}
      {relatedPackages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.packages}</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Curated Regional Itineraries</h2>
            <div className="gold-divider w-20 mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPackages.map((pkg: any) => (
              <Link key={pkg.slug} href={`/${locale}/packages`} className="group block">
                <div className="luxury-card hover-lift overflow-hidden h-[400px] flex flex-col border border-gold/10 bg-white">
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <img src={pkg.image} alt={pkg.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-royal text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-sm">{pkg.durationDays} Days</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">{pkg.title?.[locale] || pkg.title?.en}</h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">{pkg.tagline?.[locale] || pkg.tagline?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 pt-2">
                      <span>View Tour Details</span><ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 7: Local Travel Tips */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.tips}</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Advisories & Practical Guides</h2>
          <div className="gold-divider w-20 mx-auto mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-gold/10 bg-white flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><Info className="w-5 h-5" /></div>
            <div>
              <h4 className="text-sm font-serif font-bold text-royal uppercase tracking-wider mb-2">What to Wear</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">Pack lightweight breathable fabrics for summer months. Dress modestly while visiting holy temples and ghats (shoulders and knees covered).</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-gold/10 bg-white flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><Info className="w-5 h-5" /></div>
            <div>
              <h4 className="text-sm font-serif font-bold text-royal uppercase tracking-wider mb-2">Private Guided Entry</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">Pre-arrange private fast-track entry tickets via our concierge desk to bypass ticketing lines at major monuments like Taj Mahal or Amber Fort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Travel FAQs */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.faq}</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Planning Insights</h2>
          <div className="gold-divider w-20 mx-auto mt-2" />
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b border-gold/10 pb-5" open={i === 0}>
              <summary className="flex justify-between items-center font-serif font-bold text-royal cursor-pointer list-none text-base">
                <span>{f.q}</span>
                <ChevronDown className="w-4 h-4 text-gold group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <p className="text-xs text-foreground/60 mt-3 leading-relaxed font-light pl-2 border-l border-gold/25">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 9: Related Destinations */}
      {otherStates.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-12 border-b border-gold/10">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="editorial-subheading block text-gold text-[10px] tracking-[0.2em]">{text.related}</span>
            <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">Other Cultural Jewels</h2>
            <div className="gold-divider w-20 mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherStates.map((st: any) => (
              <Link key={st.slug} href={`/${locale}/destinations/${st.slug}`} className="group block">
                <div className="luxury-card hover-lift overflow-hidden h-[380px] flex flex-col border border-gold/10 bg-white">
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <img src={st.image} alt={st.title?.en} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-forest/90 backdrop-blur-sm text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-sm">{st.region} India</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-royal group-hover:text-gold transition-colors leading-snug">{st.title?.[locale] || st.title?.en}</h3>
                      <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed font-light">{st.tagline?.[locale] || st.tagline?.en}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 pt-2">
                      <span>Explore Destination</span><ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 10: Tailored Inquiry Planner */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <InquiryForm locale={locale} />
      </section>
    </div>
  );
}
