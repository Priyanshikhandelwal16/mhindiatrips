import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import InquireButton from "@/components/common/InquireButton";
import { MapPin, Compass, ArrowRight } from "lucide-react";

interface AttractionsPageProps {
  params: Promise<{ locale: string }>;
}

import PageHeroSlider from "@/components/common/PageHeroSlider";

export default async function AttractionsPage({ params }: AttractionsPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("attractions");
  
  const t: Record<string, any> = {
    en: {
      sub: "Wonders of the Subcontinent",
      title: "Iconic Attractions",
      desc: "Explore India's most breathtaking sites, temples, and palaces.",
      introTitle: "A Land of Boundless Wonders",
      introDesc: "From the snow-capped peaks of the Himalayas to the tropical backwaters of Kerala, India is a treasure trove of heritage, nature, and spirituality. Discover the most iconic attractions that you can include in your bespoke luxury journey.",
      inquireBtn: "Include in My Tour",
      location: "Location",
      ctaTitle: "Experience These Wonders in Luxury",
      ctaDesc: "Our specialist managers will craft a completely tailored private tour including VIP access, private chauffeured transport, and heritage hotels near these iconic sites.",
      ctaBtn: "Plan Custom Heritage Tour"
    },
    es: {
      sub: "Maravillas del Subcontinente",
      title: "Atracciones Icónicas",
      desc: "Explore los sitios, templos y palacios más impresionantes de la India.",
      introTitle: "Una Tierra de Maravillas Sin Límites",
      introDesc: "Desde las cumbres nevadas del Himalaya hasta los remansos tropicales de Kerala, la India es un tesoro de patrimonio, naturaleza y espiritualidad. Descubra las atracciones más icónicas para incluir en su viaje de lujo.",
      inquireBtn: "Incluir en mi Viaje",
      location: "Ubicación",
      ctaTitle: "Experimente Estas Maravillas con Lujo",
      ctaDesc: "Nuestros asesores diseñarán un viaje privado completamente a medida con acceso VIP, transporte privado con chofer y hoteles de patrimonio histórico.",
      ctaBtn: "Diseñar Tour de Patrimonio"
    },
    pt: {
      sub: "Maravilhas do Subcontinente",
      title: "Atrações Icônicas",
      desc: "Explore os locais, templos e palácios mais impressionantes da Índia.",
      introTitle: "Uma Terra de Maravilhas Sem Limites",
      introDesc: "Dos picos nevados do Himalaia aos canais tropicais de Kerala, a Índia é um tesouro de patrimônio, natureza e espiritualidade. Descubra as atrações mais icônicas para incluir em seu roteiro personalizado.",
      inquireBtn: "Incluir no meu Roteiro",
      location: "Localização",
      ctaTitle: "Experimente Estas Maravilhas com Todo o Luxo",
      ctaDesc: "Nossos especialistas criarão um roteiro privado sob medida com acesso VIP, motorista particular e estadias em hotéis-palácio históricos.",
      ctaBtn: "Planejar Roteiro de Luxo"
    }
  };

  const dbContent = pageData?.content || {};
  const text = t[locale] || t.en;
  
  // Dynamic override from CMS database
  const heroTitle = dbContent.heroTitle?.[locale] || dbContent.heroTitle?.en || text.title;
  const heroSubtitle = dbContent.heroSubtitle?.[locale] || dbContent.heroSubtitle?.en || text.desc;
  
  const attractions = dbContent.featuredAttractions || [
    { name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", image: "/images/taj_mahal_sunrise.png", desc: "The legendary white marble monument of love, a UNESCO World Heritage site and global icon." },
    { name: "Amber Fort", city: "Jaipur", state: "Rajasthan", image: "/images/Jaipur.jpg", desc: "A magnificent hilltop fortress featuring detailed royal palace halls, courts, and lake views." },
    { name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", image: "/images/rajasthan_fort_sunset.png", desc: "A massive fort overlooking the Blue City, housing royal relics, courtyards, and palace galleries." },
    { name: "Kerala Backwaters", city: "Alleppey", state: "Kerala", image: "/images/kerala_backwaters_houseboat.png", desc: "A serene network of canals, lakes, and rivers traversed by traditional luxury houseboats." },
    { name: "Ranthambore Tiger Reserve", city: "Sawai Madhopur", state: "Rajasthan", image: "/images/ranthambore_tiger_safari.png", desc: "A world-renowned wildlife sanctuary, home to the Royal Bengal Tigers and ancient fortress ruins." },
    { name: "Hampi Ruins", city: "Hampi", state: "Karnataka", image: "/images/hampi-ruins.jpg", desc: "The ancient capital of the Vijayanagara Empire, showcasing dramatic boulder landscapes and temples." }
  ];

  const attractionSlides = attractions.slice(0, 5).map((att: any) => {
    const rawDesc = att.desc || heroSubtitle;
    const cleanDesc = rawDesc.length > 90 ? rawDesc.slice(0, 87) + "..." : rawDesc;

    return {
      image: att.image || "/images/destination_fallback.jpg",
      title: att.name || heroTitle,
      subtitle: text.sub,
      location: `${att.city ? att.city + ", " : ""}${att.state || "India"}`,
      description: cleanDesc,
      objectPosition: "center 25%",
      ctaText: text.inquireBtn,
      ctaLink: "/contact"
    };
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* 1. Dynamic Hero Slider */}
      <PageHeroSlider locale={locale} slides={attractionSlides} showBreadcrumb={`MH India Trips / ${text.sub}`} />

      {/* 2. Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <Reveal className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 text-gold animate-spin-slow" />
            <span>{text.sub}</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-royal font-normal">{text.introTitle}</h2>
          <div className="h-px w-20 bg-gold/30 mx-auto mt-2" />
          <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
            {text.introDesc}
          </p>
        </Reveal>
      </section>

      {/* 3. Grid showcase */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attr: any, idx: number) => (
            <Reveal key={attr.name} delay={idx * 80} className="bg-white border border-[#C5A862]/10 overflow-hidden shadow-md hover:shadow-xl hover:border-[#C5A862]/30 transition-all duration-500 flex flex-col justify-between group h-full">
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={attr.image}
                    alt={attr.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{attr.city}, {attr.state}</span>
                  </div>
                  <h3 className="text-xl font-serif font-normal text-royal">{attr.name}</h3>
                  <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
                    {attr.desc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <InquireButton className="w-full bg-[#0A2A1E] text-white hover:bg-gold hover:text-royal text-[10px] font-bold uppercase tracking-wider py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md">
                  <span>{text.inquireBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </InquireButton>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Bottom Call To Action */}
      <section className="bg-[#0A2A1E] text-white py-20 text-center relative overflow-hidden border-t border-[#C5A862]/10">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A862_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 space-y-8 relative z-10">
          <Reveal className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">{text.ctaTitle}</h2>
            <div className="h-px w-20 bg-gold/30 mx-auto mt-2" />
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-xl mx-auto">
              {text.ctaDesc}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <InquireButton className="bg-gold text-royal font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:bg-gold-light shadow-lg inline-flex items-center gap-2">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </InquireButton>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
