"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from '@/data/i18n-client';
import { states, getDestinationsByState, getToursByState } from '@/data/database';
import { gsap } from 'gsap';
import { Compass, ArrowRight, Eye } from 'lucide-react';
import { getLocalizedDestinationsPath } from '@/lib/utils';
import { getHighResImageUrl } from '@/lib/image-utils';

export const IndiaExplorer: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const lang = (locale === 'es' || locale === 'pt') ? (locale as 'es' | 'pt') : 'en';

  const navigateTo = (path: string) => {
    router.push(`/${locale}${path}`);
  };

  const t = useTranslation();
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const infoPanelRef = useRef<HTMLDivElement>(null);

  const selectedState = states.find(s => s.id === selectedStateId);
  const featuredDestinations = selectedState ? getDestinationsByState(selectedState.id) : [];
  const stateTours = selectedState ? getToursByState(selectedState.id) : [];

  // GSAP Map Zoom & Panel Reveal Animation
  useEffect(() => {
    if (!mapSvgRef.current) return;

    if (selectedStateId) {
      // Find the specific state path
      const statePath = mapSvgRef.current.querySelector(`#path-${selectedStateId}`);
      if (statePath) {
        const bbox = (statePath as SVGGraphicsElement).getBBox();
        const svgW = 500;
        const svgH = 550;
        
        // Calculate center and scale factors
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;
        const scale = Math.min(svgW / bbox.width, svgH / bbox.height) * 0.45; // limit zoom factor

        gsap.to('#map-group', {
          x: svgW / 2 - centerX * scale,
          y: svgH / 2 - centerY * scale,
          scale: scale,
          duration: 1.2,
          ease: 'power3.inOut'
        });

        // Highlight state path
        gsap.to('.state-path', {
          fill: '#0B0D0C',
          stroke: '#C3AB85',
          strokeWidth: 1,
          opacity: 0.25,
          duration: 0.8
        });
        
        gsap.to(statePath, {
          fill: '#AA8F65',
          stroke: '#FAF8F5',
          strokeWidth: 2,
          opacity: 1,
          duration: 0.8
        });
      }

      // Animate Info Panel Reveal
      if (infoPanelRef.current) {
        gsap.fromTo(infoPanelRef.current, 
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        );
      }
    } else {
      // Reset zoom
      gsap.to('#map-group', {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.inOut'
      });

      gsap.to('.state-path', {
        fill: '#E5DAC6', // sand-200
        stroke: '#FAF8F5', // ivory-100
        strokeWidth: 1.5,
        opacity: 1,
        duration: 0.8
      });
    }
  }, [selectedStateId]);

  const handleStateClick = (stateId: string) => {
    if (selectedStateId === stateId) {
      setSelectedStateId(null);
    } else {
      setSelectedStateId(stateId);
    }
  };

  return (
    <section className="py-20 bg-ivory-200/50 border-y border-charcoal-800/5 overflow-hidden">
      <div className="editorial-container">
        
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-3">
            MH Signature Experience
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 leading-tight">
            {t.atlas.title}
          </h2>
          <p className="text-sm md:text-base text-charcoal-800/60 font-sans font-light mt-4">
            {t.atlas.subtitle}
          </p>
        </div>

        {/* Explore Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Column (Left) */}
          <div className="lg:col-span-5 flex justify-center items-center bg-ivory-50/50 p-6 border border-sand-300 relative min-h-[450px]">
            {selectedStateId && (
              <button
                onClick={() => setSelectedStateId(null)}
                className="absolute top-4 left-4 text-[10px] font-sans font-bold tracking-widest uppercase border border-charcoal-800 py-1.5 px-3 hover:bg-charcoal-800 hover:text-ivory-100 transition-all z-10"
              >
                &larr; Zoom Out
              </button>
            )}
            
            <svg 
              ref={mapSvgRef}
              viewBox="0 0 500 550" 
              className="w-full max-w-[420px] h-auto interactive-atlas"
              style={{ maxHeight: '480px' }}
            >
              {/* Simplified India SVG Map Group */}
              <g id="map-group" style={{ transformOrigin: 'center' }}>
                
                {/* Backdrop India Shape / Ocean faint layout */}
                <path 
                  d="M250 30 L400 130 L450 200 L430 250 L480 270 L420 320 L350 480 L250 530 L230 530 L160 420 L120 300 L60 250 L110 180 L180 100 Z" 
                  fill="rgba(28, 31, 29, 0.02)" 
                  stroke="rgba(195, 171, 133, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* 1. RAJASTHAN PATH (Northwest) */}
                <path 
                  id="path-rajasthan"
                  className="state-path"
                  d="M120 160 L180 140 L210 170 L200 220 L160 250 L110 230 L100 190 Z" 
                  onClick={() => handleStateClick('rajasthan')}
                  fill={selectedStateId === 'rajasthan' ? '#AA8F65' : '#E5DAC6'}
                />
                <text x="140" y="195" className="text-[10px] font-sans font-bold fill-charcoal-800/50 pointer-events-none uppercase tracking-widest">
                  RJ
                </text>

                {/* 2. MADHYA PRADESH PATH (Central) */}
                <path 
                  id="path-madhya-pradesh"
                  className="state-path"
                  d="M210 220 L270 200 L320 230 L300 290 L240 290 L180 260 Z" 
                  onClick={() => handleStateClick('madhya-pradesh')}
                  fill={selectedStateId === 'madhya-pradesh' ? '#AA8F65' : '#E5DAC6'}
                />
                <text x="235" y="255" className="text-[10px] font-sans font-bold fill-charcoal-800/50 pointer-events-none uppercase tracking-widest">
                  MP
                </text>

                {/* 3. KERALA PATH (Southwest coast) */}
                <path 
                  id="path-kerala"
                  className="state-path"
                  d="M200 450 L220 440 L230 480 L210 520 L195 500 Z" 
                  onClick={() => handleStateClick('kerala')}
                  fill={selectedStateId === 'kerala' ? '#AA8F65' : '#E5DAC6'}
                />
                <text x="175" y="480" className="text-[10px] font-sans font-bold fill-charcoal-800/50 pointer-events-none uppercase tracking-widest">
                  KL
                </text>

                {/* 4. GOA PATH (West coast) */}
                <path 
                  id="path-goa"
                  className="state-path"
                  d="M170 340 L185 340 L180 355 L165 350 Z" 
                  onClick={() => handleStateClick('goa')}
                  fill={selectedStateId === 'goa' ? '#AA8F65' : '#E5DAC6'}
                />
                <text x="145" y="348" className="text-[8px] font-sans font-bold fill-charcoal-800/50 pointer-events-none uppercase tracking-widest">
                  GA
                </text>

                {/* 5. MEGHALAYA PATH (Northeast) */}
                <path 
                  id="path-meghalaya"
                  className="state-path"
                  d="M420 185 L460 185 L455 200 L415 200 Z" 
                  onClick={() => handleStateClick('meghalaya')}
                  fill={selectedStateId === 'meghalaya' ? '#AA8F65' : '#E5DAC6'}
                />
                <text x="445" y="180" className="text-[8px] font-sans font-bold fill-charcoal-800/50 pointer-events-none uppercase tracking-widest">
                  ML
                </text>

              </g>
            </svg>
          </div>

          {/* Info Sidepanel Column (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[400px]">
            {!selectedStateId ? (
              
              /* DEFAULT SCREEN: Invitation to click */
              <div className="text-left py-12 lg:pl-8">
                <Compass size={40} className="text-sand-500 mb-6 animate-pulse" />
                <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">
                  "India is not one journey."
                </h3>
                <p className="text-sm text-charcoal-800/70 leading-relaxed font-sans font-light mb-8 max-w-lg">
                  MH India Trips organizes journeys around India’s geological and cultural diversity. Hover or click on the highlight regions to reveal signature routes, wildlife zones, and heritage boutique stays.
                </p>
                <div className="flex flex-wrap gap-3">
                  {states.map(state => (
                    <button
                      key={state.id}
                      onClick={() => setSelectedStateId(state.id)}
                      className="px-4 py-2 bg-transparent hover:bg-charcoal-800 hover:text-ivory-100 border border-sand-300 hover:border-charcoal-800 text-xs tracking-widest uppercase font-semibold font-sans transition-all"
                    >
                      {state.name[lang]}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              
              /* STATE SCREEN: Dynamic highlights */
              <div ref={infoPanelRef} className="text-left lg:pl-8">
                
                {/* State Intro */}
                <span className="text-[9px] font-sans font-bold tracking-widest text-sand-500 uppercase">
                  {selectedState?.region}ern India
                </span>
                
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mt-2 mb-4">
                  {selectedState?.name[lang]}
                </h3>
                
                <p className="text-xs md:text-sm text-charcoal-800/75 leading-relaxed font-sans font-light mb-6">
                  {selectedState?.description[lang]}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8 text-xs font-sans">
                  <div>
                    <span className="text-sand-500 font-bold block mb-1">Best Season</span>
                    <span className="text-charcoal-800 font-medium">{selectedState?.bestTime[lang]}</span>
                  </div>
                  <div>
                    <span className="text-sand-500 font-bold block mb-1">Regional Food</span>
                    <span className="text-charcoal-800 font-medium">{selectedState?.food[lang].slice(0, 50)}...</span>
                  </div>
                </div>

                {/* Sub-Section 1: Destinations */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-sans font-bold tracking-widest text-charcoal-800/50 uppercase mb-4 border-b border-sand-300 pb-1">
                    {t.atlas.destinationsTitle}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredDestinations.map(dest => (
                      <button
                        key={dest.id}
                        onClick={() => router.push(getLocalizedDestinationsPath(locale, selectedState?.slug, dest.slug))}
                        className="text-left flex items-center space-x-3 group border border-sand-300/40 p-2 bg-ivory-50/50 hover:bg-sand-50 transition-colors"
                      >
                        <img src={getHighResImageUrl(dest.image)} alt="" className="w-10 h-10 object-cover" />
                        <div>
                          <h5 className="font-serif text-xs font-bold text-charcoal-800 group-hover:text-sand-500 transition-colors">
                            {dest.name[lang]}
                          </h5>
                          <span className="text-[9px] text-charcoal-800/40 font-sans block mt-0.5">{dest.duration[lang]}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sub-Section 2: Curated Tours */}
                {stateTours.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-[10px] font-sans font-bold tracking-widest text-charcoal-800/50 uppercase mb-4 border-b border-sand-300 pb-1">
                      {t.atlas.toursTitle}
                    </h4>
                    <div className="space-y-3">
                      {stateTours.map(tour => (
                        <div 
                          key={tour.id}
                          className="flex items-center justify-between p-3 border border-sand-300 bg-ivory-50/20 text-xs"
                        >
                          <div>
                            <span className="font-serif font-bold text-charcoal-800 block">{tour.title[lang]}</span>
                            <span className="text-[10px] text-charcoal-800/50 block mt-0.5">{tour.style} — {tour.duration[lang]}</span>
                          </div>
                          <button
                            onClick={() => navigateTo(`/tours/${tour.slug}`)}
                            className="text-[10px] font-bold text-sand-500 uppercase tracking-widest hover:text-charcoal-800 transition-colors flex items-center space-x-1"
                          >
                            <span>Explore</span>
                            <ArrowRight size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Explore State CTA */}
                <button
                  onClick={() => router.push(getLocalizedDestinationsPath(locale, selectedState?.slug))}
                  className="bg-charcoal-800 text-ivory-100 text-[10px] tracking-widest uppercase font-semibold py-3.5 px-6 hover:bg-sand-500 transition-all flex items-center space-x-2"
                >
                  <span>{t.atlas.exploreState}</span>
                  <Eye size={12} />
                </button>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
export default IndiaExplorer;
