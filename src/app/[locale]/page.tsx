import React from "react";
import Link from "next/link";
import { getTranslation } from "@/data/i18n";
import { experiences, tours, testimonials, states } from "@/data/database";
import IndiaExplorer from "@/components/home/IndiaExplorer";
import { ArrowRight, Compass } from "lucide-react";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = getTranslation(locale);
  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  return (
    <div className="bg-ivory-100 min-h-screen">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background photo with subtle dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop" 
            alt="Majestic Taj Mahal Sunrise" 
            className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/65 via-transparent to-charcoal-900/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 editorial-container text-center text-ivory-100 max-w-4xl px-4 animate-fade-in">
          <span className="text-[10px] font-sans font-bold tracking-widest text-sand-300 mb-4 block uppercase">
            MH India Trips
          </span>
          <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-tight leading-tight">
            {t.hero.title} <br className="hidden md:inline" />
            <span className="italic text-sand-300 font-normal">{t.hero.subtitle}</span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-ivory-100/80 leading-relaxed font-sans font-light max-w-xl mx-auto">
            {t.hero.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#discover-section"
              className="w-full sm:w-auto px-8 py-4 bg-ivory-100 text-charcoal-900 text-xs font-semibold tracking-widest uppercase hover:bg-sand-400 hover:text-charcoal-900 transition-all font-sans text-center"
            >
              {t.hero.exploreBtn}
            </Link>
            
            <Link
              href={`/${locale}/contact`}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-ivory-100 border border-ivory-100/40 hover:border-ivory-100 text-xs font-semibold tracking-widest uppercase transition-all font-sans text-center"
            >
              {t.hero.planBtn}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-ivory-100/50 mb-2">
            Scroll to Discover
          </span>
          <div className="w-[1px] h-10 bg-ivory-100/25 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-sand-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY / INTRO (Asymmetric Composition) */}
      <section id="discover-section" className="py-20 md:py-32 scroll-mt-20">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Editorial text block */}
            <div className="lg:col-span-5 text-left">
              <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
                Our Travel Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 leading-tight">
                Some places deserve <br />
                <span className="italic font-normal">more than a checklist.</span>
              </h2>
              <p className="text-sm text-charcoal-800/70 font-sans font-light leading-relaxed mt-6">
                India cannot be understood in brief summaries or packed itineraries. It is a continent of micro-cultures, grand visual contrasts, and histories built across millennia.
              </p>
              <p className="text-xs text-charcoal-800/60 font-sans font-light leading-relaxed mt-4">
                We craft bespoke private journeys centered on slow travel, luxury heritage stays, and deep local discovery. We invite you to stay for the story, not just see the place.
              </p>
            </div>

            {/* Asymmetric Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 overflow-hidden border border-sand-300">
                <img 
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800" 
                  alt="Jaipur Palace" 
                  className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-700 filter sepia-[0.1]"
                />
              </div>
              <div className="col-span-5 overflow-hidden border border-sand-300 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800" 
                  alt="Kerala Backwaters" 
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIGNATURE INTERACTIVE ATLAS */}
      <IndiaExplorer />

      {/* 4. CURATED EXPERIENCES */}
      <section className="py-20 md:py-32" id="experiences">
        <div className="editorial-container">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div className="text-left max-w-xl">
              <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
                Discovery Categories
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 leading-tight">
                Explore India by <br />
                <span className="italic font-normal">Signature Experiences</span>
              </h2>
            </div>
            <Link 
              href={`/${locale}/packages`}
              className="mt-6 md:mt-0 flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-charcoal-800 hover:text-sand-500 transition-colors py-2 border-b border-charcoal-800"
            >
              <span>View All Experiences</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp: any) => (
              <div 
                key={exp.id}
                className="group border border-sand-300 bg-ivory-50/50 hover:bg-sand-50 transition-all duration-500 flex flex-col md:flex-row"
              >
                {/* Image panel */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title[lang]} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Text panel */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[9px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-2">
                      {exp.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3 group-hover:text-sand-500 transition-colors">
                      {exp.title[lang]}
                    </h3>
                    <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light">
                      {exp.tagline[lang]}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/packages`}
                    className="mt-6 text-[10px] font-bold text-charcoal-800 uppercase tracking-widest hover:text-sand-500 transition-colors flex items-center space-x-1.5"
                  >
                    <span>Discover More</span>
                    <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CURATED JOURNEYS (TOURS) */}
      <section className="py-20 bg-sand-50/50 border-t border-charcoal-800/5">
        <div className="editorial-container">
          
          <div className="text-left mb-16 max-w-2xl">
            <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
              Curated Travel Routes
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 leading-tight">
              Featured Journeys
            </h2>
            <p className="text-sm text-charcoal-800/60 font-sans font-light mt-4">
              Fully tailored itineraries blending historic palaces, local guide perspectives, and smooth luxury transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour: any) => (
              <div 
                key={tour.id} 
                className="bg-ivory-100 border border-sand-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Tour cover photo */}
                  <div className="w-full h-80 overflow-hidden relative">
                    <img 
                      src={tour.image} 
                      alt="" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal-900 text-ivory-100 text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 shadow-sm font-sans">
                      {tour.style}
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="p-8 text-left">
                    <div className="flex items-center justify-between text-[10px] font-sans font-bold text-sand-500 uppercase tracking-widest mb-2">
                      <span>{tour.duration[lang]}</span>
                      <span>{tour.priceRange} Class</span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 group-hover:text-sand-500 transition-colors">
                      {tour.title[lang]}
                    </h3>
                    
                    <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light mb-4">
                      {tour.tagline[lang]}
                    </p>

                    <span className="text-[10px] font-sans text-charcoal-800/50 uppercase tracking-wider block mt-2">
                      Route: <span className="font-semibold text-charcoal-800">{tour.routeDescription[lang]}</span>
                    </span>
                  </div>
                </div>

                <div className="p-8 pt-0 text-left">
                  <Link
                    href={`/${locale}/packages`}
                    className="w-full text-center bg-charcoal-800 hover:bg-sand-500 text-ivory-100 py-3 block text-xs uppercase tracking-widest font-semibold transition-all font-sans"
                  >
                    Explore Journey Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY MH INDIA TRIPS (High-End Text blocks, no cheap icons) */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Title column */}
            <div className="lg:col-span-4 text-left">
              <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
                {t.common.whyUs}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 leading-tight">
                Don’t just book India. <br />
                <span className="italic font-normal">Discover it.</span>
              </h2>
            </div>

            {/* Details column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              
              <div className="border-t border-sand-300 pt-6">
                <span className="text-[10px] font-sans font-bold text-sand-500 tracking-wider uppercase block mb-2">01. Local Expertise</span>
                <h4 className="font-serif text-base font-bold text-charcoal-800 mb-2">Deep In-Country Knowledge</h4>
                <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light">
                  We are based in India and work only with certified local historians, heritage property owners, and private drivers to assure absolute authenticity.
                </p>
              </div>

              <div className="border-t border-sand-300 pt-6">
                <span className="text-[10px] font-sans font-bold text-sand-500 tracking-wider uppercase block mb-2">02. Tailored Design</span>
                <h4 className="font-serif text-base font-bold text-charcoal-800 mb-2">Customized Itinerary Creation</h4>
                <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light">
                  No predefined group templates. Each trail is constructed from scratch surrounding your pace, interests, budget, and travel style.
                </p>
              </div>

              <div className="border-t border-sand-300 pt-6">
                <span className="text-[10px] font-sans font-bold text-sand-500 tracking-wider uppercase block mb-2">03. Curated Stays</span>
                <h4 className="font-serif text-base font-bold text-charcoal-800 mb-2">Heritage Hotels & Lodges</h4>
                <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light">
                  We personally audit and select historic palace suites, colonial estates, luxury houseboats, and jungle safari tents.
                </p>
              </div>

              <div className="border-t border-sand-300 pt-6">
                <span className="text-[10px] font-sans font-bold text-sand-500 tracking-wider uppercase block mb-2">04. Constant Care</span>
                <h4 className="font-serif text-base font-bold text-charcoal-800 mb-2">24/7 Dedicated Assistance</h4>
                <p className="text-xs text-charcoal-800/60 leading-relaxed font-sans font-light">
                  From arrival greetings in New Delhi to departure transfers, our specialists track your journey in real time for absolute safety.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SLIDER */}
      <section className="py-20 bg-sand-100/55 border-y border-charcoal-800/5">
        <div className="editorial-container max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block">
              Travel Stories
            </span>
          </div>

          <div className="space-y-12">
            {testimonials.slice(0, 3).map((tData: any) => (
              <div key={tData.id} className="text-center max-w-2xl mx-auto py-4 border-b border-sand-200/50 last:border-b-0 pb-8 last:pb-0">
                <p className="font-serif text-lg md:text-xl italic text-charcoal-800 leading-relaxed">
                  "{tData.quote[lang]}"
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-charcoal-800">{tData.author}</span>
                  <span className="text-[10px] text-charcoal-800/50 uppercase tracking-wider mt-1">{tData.country} — {tData.trip[lang]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PLAN TRIP CALL TO ACTION */}
      <section className="py-24 bg-charcoal-900 text-ivory-100 relative overflow-hidden text-center">
        {/* Abstract background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full border-t border-b border-ivory-100/20 grid grid-cols-6 divide-x divide-ivory-100/20" />
        </div>

        <div className="relative z-10 editorial-container max-w-2xl">
          <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-sand-400 mb-4 block">
            Begin the Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Take the long way <br />
            <span className="italic font-normal text-sand-300">through India.</span>
          </h2>
          <p className="text-xs md:text-sm text-ivory-200/60 leading-relaxed font-sans font-light mb-10 max-w-md mx-auto">
            Contact our travel design desk to transform your vision into an editorial, bespoke travel itinerary.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-10 py-4 bg-sand-400 hover:bg-sand-500 text-charcoal-900 text-xs font-semibold tracking-widest uppercase transition-all font-sans text-center inline-block"
          >
            {t.hero.planBtn}
          </Link>
        </div>
      </section>

    </div>
  );
}
