"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from '@/data/i18n-client';
import { states } from '@/data/database';
import { ArrowLeft, ArrowRight, Check, Shield } from 'lucide-react';
import { createInquiryAction } from '@/app/actions/inquiry';

export const TripPlanner: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const lang = (locale === 'es' || locale === 'pt') ? (locale as 'es' | 'pt') : 'en';

  const navigateTo = (path: string) => {
    router.push(`/${locale}${path}`);
  };

  const t = useTranslation();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [travelMonth, setTravelMonth] = useState('');
  const [travelYear, setTravelYear] = useState('2026');
  const [duration, setDuration] = useState('8-14'); // days
  const [travellerType, setTravellerType] = useState('couple');
  const [travelStyle, setTravelStyle] = useState('comfort');
  const [interests, setInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    language: lang,
    notes: '',
    budget: '5000'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const interestOptions = [
    { id: 'heritage', label: { en: 'Heritage & Palaces', es: 'Patrimonio y Palacios', pt: 'Património e Palácios' } },
    { id: 'food', label: { en: 'Food & Culinary', es: 'Comida y Cocina', pt: 'Comida e Gastronomia' } },
    { id: 'wildlife', label: { en: 'Wildlife & Safaris', es: 'Fauna y Safaris', pt: 'Fauna e Safaris' } },
    { id: 'beach', label: { en: 'Beaches & Oceans', es: 'Playas y Océanos', pt: 'Praias e Oceanos' } },
    { id: 'mountains', label: { en: 'Mountains & Tea Hills', es: 'Montañas y Colinas de Té', pt: 'Montanhas e Colinas de Chá' } },
    { id: 'spiritual', label: { en: 'Spiritual & Yoga', es: 'Espiritual y Yoga', pt: 'Espiritual e Yoga' } },
    { id: 'shopping', label: { en: 'Shopping & Local Crafts', es: 'Compras y Artesanía', pt: 'Compras e Artesanato' } },
    { id: 'adventure', label: { en: 'Adventure & Trekking', es: 'Aventura y Senderismo', pt: 'Aventura e Trilhos' } }
  ];

  const handleStateToggle = (id: string) => {
    setSelectedStates(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleInterestToggle = (id: string) => {
    setInterests(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1 && selectedStates.length === 0) {
      newErrors.states = 'Please select at least one region or state to explore.';
    }
    
    if (step === 2 && !travelMonth) {
      newErrors.dates = 'Please select your preferred travel month.';
    }
    
    if (step === 7) {
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
      if (!formData.country.trim()) newErrors.country = 'Country is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setSubmitted(true);
      try {
        const startDateStr = `${travelMonth} ${travelYear}`;
        const durationStr = `${duration} Days`;
        const experienceStr = `${travelStyle} style with interests: ${interests.join(', ')}`;
        const messageStr = `Style: ${travelStyle}. Traveller: ${travellerType}. Notes: ${formData.notes}`;

        await createInquiryAction({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          startDate: startDateStr,
          duration: durationStr,
          travelers: travellerType,
          experience: experienceStr,
          destinations: selectedStates,
          message: messageStr
        });
      } catch (err) {
        console.error("Failed to save inquiry in DB:", err);
      }
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="editorial-container py-12 md:py-20 min-h-[70vh] flex flex-col justify-center">
      {submitted ? (
        
        /* SUCCESS STATE */
        <div className="max-w-2xl mx-auto text-center py-8 animate-fade-in">
          <div className="w-16 h-16 bg-earthgreen-100 rounded-full flex items-center justify-center mx-auto mb-6 text-earthgreen-600">
            <Check size={28} />
          </div>
          
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 mb-4">
            {t.planner.successTitle}
          </h1>
          
          <p className="text-sm md:text-base text-charcoal-800/70 leading-relaxed font-sans font-light mb-10 max-w-xl mx-auto">
            {t.planner.successMsg}
          </p>

          <div className="p-8 border border-sand-300 bg-sand-50/50 text-left mb-10 font-sans">
            <h3 className="font-serif text-sm font-bold text-charcoal-800 uppercase tracking-widest mb-4 border-b border-sand-300 pb-2">
              Journey Summary Request
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-charcoal-800/50 block uppercase tracking-wider mb-0.5">Destinations:</span>
                <span className="font-semibold text-charcoal-800">
                  {selectedStates.map(id => states.find(s => s.id === id)?.name[lang]).join(', ')}
                </span>
              </div>
              <div>
                <span className="text-charcoal-800/50 block uppercase tracking-wider mb-0.5">Timeline:</span>
                <span className="font-semibold text-charcoal-800">{travelMonth} {travelYear} ({duration} Days)</span>
              </div>
              <div>
                <span className="text-charcoal-800/50 block uppercase tracking-wider mb-0.5">Travel Style:</span>
                <span className="font-semibold text-charcoal-800 uppercase tracking-wide">{travelStyle}</span>
              </div>
              <div>
                <span className="text-charcoal-800/50 block uppercase tracking-wider mb-0.5">Contact:</span>
                <span className="font-semibold text-charcoal-800">{formData.name} ({formData.email})</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateTo('/')}
            className="magnetic-btn"
          >
            {t.planner.backHome}
          </button>
        </div>
      ) : (
        
        /* FORM WIZARD FLOW */
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-[10px] font-sans font-bold tracking-widest text-sand-500 uppercase block mb-2">
              {t.planner.title}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-800 mb-4">
              {t.planner.steps[
                step === 1 ? 'destination' :
                step === 2 ? 'dates' :
                step === 3 ? 'duration' :
                step === 4 ? 'travellers' :
                step === 5 ? 'style' :
                step === 6 ? 'interests' : 'contact'
              ]}
            </h1>
            <p className="text-xs md:text-sm text-charcoal-800/50 font-sans max-w-lg mx-auto">
              Step {step} of 7 — Customizing your experiential India itinerary.
            </p>
            {/* Custom progress line */}
            <div className="w-full bg-sand-200 h-[1.5px] mt-8 relative">
              <div 
                className="bg-charcoal-800 h-[1.5px] transition-all duration-500" 
                style={{ width: `${(step / 7) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="animate-fade-in font-sans">
            
            {/* STEP 1: Select States */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {states.map(state => {
                    const isSelected = selectedStates.includes(state.id);
                    return (
                      <button
                        type="button"
                        key={state.id}
                        onClick={() => handleStateToggle(state.id)}
                        className={`text-left p-6 border transition-all duration-300 flex items-start justify-between group ${
                          isSelected 
                            ? 'border-charcoal-800 bg-sand-50/80 shadow-md' 
                            : 'border-sand-300 hover:border-charcoal-800 bg-transparent'
                        }`}
                      >
                        <div>
                          <h3 className="font-serif text-base font-bold text-charcoal-800 group-hover:text-sand-500 transition-colors">
                            {state.name[lang]}
                          </h3>
                          <p className="text-xs text-charcoal-800/60 font-sans font-light mt-1">
                            {state.tagline[lang]}
                          </p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'border-charcoal-800 bg-charcoal-800 text-ivory-100' : 'border-sand-400 bg-transparent'
                        }`}>
                          {isSelected && <Check size={12} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.states && <p className="text-xs text-terracotta-500">{errors.states}</p>}
              </div>
            )}

            {/* STEP 2: Travel Dates */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    'January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'
                  ].map(m => {
                    const isSelected = travelMonth === m;
                    return (
                      <button
                        type="button"
                        key={m}
                        onClick={() => {
                          setTravelMonth(m);
                          if (errors.dates) setErrors({});
                        }}
                        className={`py-3.5 px-2 text-center text-xs font-semibold tracking-wider uppercase border transition-all ${
                          isSelected 
                            ? 'border-charcoal-800 bg-charcoal-800 text-ivory-100' 
                            : 'border-sand-300 hover:border-charcoal-800 text-charcoal-800/80'
                        }`}
                      >
                        {m.slice(0, 3)}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-4 justify-center">
                  <span className="text-xs uppercase tracking-widest text-charcoal-800/60 font-semibold font-sans">Year:</span>
                  {['2026', '2027'].map(y => (
                    <button
                      type="button"
                      key={y}
                      onClick={() => setTravelYear(y)}
                      className={`px-4 py-2 border text-xs font-bold font-sans ${
                        travelYear === y ? 'border-charcoal-800 bg-charcoal-800 text-ivory-100' : 'border-sand-300'
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
                {errors.dates && <p className="text-xs text-terracotta-500 text-center">{errors.dates}</p>}
              </div>
            )}

            {/* STEP 3: Duration */}
            {step === 3 && (
              <div className="space-y-6 max-w-md mx-auto">
                {[
                  { id: '1-7', label: '1 - 7 Days (Short highlight tours)' },
                  { id: '8-14', label: '8 - 14 Days (Standard discovery journey)' },
                  { id: '15-21', label: '15 - 21 Days (Deep state exploration)' },
                  { id: '22+', label: '22+ Days (Grand slow travel route)' }
                ].map(opt => {
                  const isSelected = duration === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setDuration(opt.id)}
                      className={`w-full text-left p-5 border text-xs font-semibold tracking-wider uppercase flex items-center justify-between transition-all ${
                        isSelected ? 'border-charcoal-800 bg-sand-50/50' : 'border-sand-300 hover:border-charcoal-800'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border ${isSelected ? 'border-charcoal-800 bg-charcoal-800' : 'border-sand-400'}`} />
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 4: Traveling With */}
            {step === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'solo', label: t.planner.travellerTypes.solo, desc: 'Exploring India at your own self-determined pace.' },
                  { id: 'couple', label: t.planner.travellerTypes.couple, desc: 'Shared romance, heritage palace suites, and dinners.' },
                  { id: 'family', label: t.planner.travellerTypes.family, desc: 'Safe, comfortable routes optimized for children and seniors.' },
                  { id: 'friends', label: t.planner.travellerTypes.friends, desc: 'Curated experiences, active treks, and private villa stays.' },
                  { id: 'group', label: t.planner.travellerTypes.group, desc: 'Organized cultural retreats, yoga workshops, and tours.' }
                ].map(opt => {
                  const isSelected = travellerType === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setTravellerType(opt.id)}
                      className={`text-left p-5 border flex flex-col justify-between transition-all ${
                        isSelected ? 'border-charcoal-800 bg-sand-50/80 shadow-sm' : 'border-sand-300 hover:border-charcoal-800'
                      }`}
                    >
                      <span className="font-serif text-sm font-bold text-charcoal-800">{opt.label}</span>
                      <span className="text-[11px] text-charcoal-800/60 font-sans font-light mt-1">{opt.desc}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 5: Travel Style */}
            {step === 5 && (
              <div className="space-y-4">
                {[
                  { id: 'luxury', label: t.planner.styles.luxury },
                  { id: 'comfort', label: t.planner.styles.comfort },
                  { id: 'budget', label: t.planner.styles.budget },
                  { id: 'adventure', label: t.planner.styles.adventure },
                  { id: 'culture', label: t.planner.styles.culture },
                  { id: 'relaxation', label: t.planner.styles.relaxation }
                ].map(opt => {
                  const isSelected = travelStyle === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setTravelStyle(opt.id)}
                      className={`w-full text-left p-5 border text-xs font-semibold tracking-wider uppercase flex items-center justify-between transition-all ${
                        isSelected ? 'border-charcoal-800 bg-sand-50/50' : 'border-sand-300 hover:border-charcoal-800'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border ${isSelected ? 'border-charcoal-800 bg-charcoal-800' : 'border-sand-400'}`} />
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 6: Interests */}
            {step === 6 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interestOptions.map(opt => {
                  const isSelected = interests.includes(opt.id);
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => handleInterestToggle(opt.id)}
                      className={`p-4 text-center border flex flex-col items-center justify-center min-h-[100px] transition-all duration-300 ${
                        isSelected 
                          ? 'border-charcoal-800 bg-sand-50/80 shadow-md text-charcoal-800' 
                          : 'border-sand-300 hover:border-charcoal-800 text-charcoal-800/80'
                      }`}
                    >
                      <span className="text-xs uppercase font-semibold tracking-wider font-sans">
                        {opt.label[lang] || opt.label.en}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 7: Contact Info */}
            {step === 7 && (
              <div className="space-y-6 max-w-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 font-sans">
                      {t.planner.fields.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border border-sand-300 bg-transparent py-2.5 px-3 text-sm focus:border-charcoal-800 focus:ring-0 outline-none"
                    />
                    {errors.name && <span className="text-[10px] text-terracotta-500">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 font-sans">
                      {t.planner.fields.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border border-sand-300 bg-transparent py-2.5 px-3 text-sm focus:border-charcoal-800 focus:ring-0 outline-none"
                    />
                    {errors.email && <span className="text-[10px] text-terracotta-500">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 font-sans">
                      {t.planner.fields.phone} *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 555-0199"
                      className="border border-sand-300 bg-transparent py-2.5 px-3 text-sm focus:border-charcoal-800 focus:ring-0 outline-none"
                    />
                    {errors.phone && <span className="text-[10px] text-terracotta-500">{errors.phone}</span>}
                  </div>

                  {/* Country */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 font-sans">
                      {t.planner.fields.country} *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="border border-sand-300 bg-transparent py-2.5 px-3 text-sm focus:border-charcoal-800 focus:ring-0 outline-none"
                    />
                    {errors.country && <span className="text-[10px] text-terracotta-500">{errors.country}</span>}
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col space-y-1 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 font-sans flex justify-between">
                      <span>{t.planner.fields.budget}</span>
                      <span className="text-charcoal-800 font-bold">${formData.budget} USD</span>
                    </label>
                    <input
                      type="range"
                      name="budget"
                      min="1000"
                      max="15000"
                      step="500"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="accent-charcoal-800 cursor-pointer h-1.5 bg-sand-200 mt-2 rounded"
                    />
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col space-y-1 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 font-sans">
                      {t.planner.fields.notes}
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="border border-sand-300 bg-transparent py-2.5 px-3 text-sm focus:border-charcoal-800 focus:ring-0 outline-none"
                    />
                  </div>

                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-sand-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-charcoal-800/60 hover:text-charcoal-800 transition-colors py-2"
                >
                  <ArrowLeft size={14} />
                  <span>{t.planner.prev}</span>
                </button>
              ) : (
                <div />
              )}

              {step < 7 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-charcoal-800 hover:text-sand-500 transition-colors py-2"
                >
                  <span>{t.planner.next}</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-charcoal-800 text-ivory-100 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-sand-500 transition-all flex items-center space-x-2"
                >
                  <span>{t.planner.submit}</span>
                  <Shield size={12} />
                </button>
              )}
            </div>

          </form>
        </div>
      )}
    </div>
  );
};
export default TripPlanner;
