"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, MapPin, Calendar, Users, Sparkles, Heart, Send, CheckCircle } from "lucide-react";

interface TripPlannerWizardProps {
  locale: string;
}

const destinations = [
  "Rajasthan", "Kerala", "Goa", "Himachal Pradesh", "Uttarakhand",
  "Uttar Pradesh", "Madhya Pradesh", "Gujarat", "Maharashtra",
  "Tamil Nadu", "Karnataka", "West Bengal", "Sikkim", "Ladakh",
  "Andaman Islands", "Punjab", "Assam", "Meghalaya"
];

const travelStyles = [
  { id: "luxury", label: "Luxury", icon: "✦" },
  { id: "comfort", label: "Comfort", icon: "◆" },
  { id: "adventure", label: "Adventure", icon: "▲" },
  { id: "cultural", label: "Cultural", icon: "◎" },
  { id: "wellness", label: "Wellness", icon: "❋" },
  { id: "budget", label: "Budget Friendly", icon: "○" },
];

const interests = [
  "Heritage & Palaces", "Wildlife Safari", "Beach & Islands", "Mountains & Trekking",
  "Food & Culinary", "Spiritual & Yoga", "Photography", "Shopping & Markets",
  "Festivals", "Romantic / Honeymoon", "Family Friendly", "Offbeat & Hidden Gems"
];

export default function TripPlannerWizard({ locale }: TripPlannerWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destinations: [] as string[],
    duration: "",
    travelers: "",
    style: "",
    interests: [] as string[],
    dates: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 7;

  const toggleDestination = (dest: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async () => {
    try {
      const { createInquiryAction } = await import("@/app/actions/inquiry");
      await createInquiryAction({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: "",
        startDate: formData.dates,
        duration: parseInt(formData.duration) || 7,
        travelers: parseInt(formData.travelers) || 2,
        destinations: formData.destinations,
        experience: formData.style,
        message: `Style: ${formData.style}. Interests: ${formData.interests.join(", ")}. ${formData.message}`,
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="text-center space-y-6 max-w-lg">
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0D0C]">Your Journey Starts Here</h1>
          <p className="text-sm text-[#1B1B1B]/60 font-light leading-relaxed">
            Thank you! Our travel specialists will review your preferences and craft a personalized itinerary within 24 hours.
          </p>
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 bg-[#0B0D0C] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#C3AB85] hover:text-[#0B0D0C] transition-all">
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 md:pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C3AB85] font-bold">Plan Your Journey</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0D0C]">Design Your India Trip</h1>
          <p className="text-sm text-[#1B1B1B]/50 font-light">Tell us your dream itinerary in a few simple steps.</p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-1 mb-12">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i < step ? "bg-[#C3AB85]" : "bg-[#0B0D0C]/10"}`} />
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">

          {/* Step 1: Destinations */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><MapPin className="w-5 h-5 text-[#C3AB85]" /> Where do you want to go?</h2>
                <p className="text-xs text-[#1B1B1B]/50">Select one or more destinations</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {destinations.map(dest => (
                  <button
                    key={dest}
                    onClick={() => toggleDestination(dest)}
                    className={`px-4 py-3 text-sm font-medium border transition-all duration-300 cursor-pointer ${
                      formData.destinations.includes(dest)
                        ? "bg-[#0B0D0C] text-white border-[#0B0D0C]"
                        : "bg-white text-[#1B1B1B]/70 border-[#C3AB85]/20 hover:border-[#C3AB85]/50"
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Duration */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><Calendar className="w-5 h-5 text-[#C3AB85]" /> How many days?</h2>
                <p className="text-xs text-[#1B1B1B]/50">Select your preferred trip duration</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["3-5", "6-8", "9-12", "13-15", "16-20", "21-25", "26-30", "30+"].map(dur => (
                  <button
                    key={dur}
                    onClick={() => setFormData(prev => ({ ...prev, duration: dur }))}
                    className={`px-4 py-4 text-sm font-medium border transition-all duration-300 cursor-pointer ${
                      formData.duration === dur
                        ? "bg-[#0B0D0C] text-white border-[#0B0D0C]"
                        : "bg-white text-[#1B1B1B]/70 border-[#C3AB85]/20 hover:border-[#C3AB85]/50"
                    }`}
                  >
                    {dur} Days
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Travelers */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><Users className="w-5 h-5 text-[#C3AB85]" /> Who is traveling?</h2>
                <p className="text-xs text-[#1B1B1B]/50">Tell us about your travel group</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Solo", "Couple", "Family (3-5)", "Family (6+)", "Friends Group", "Corporate Group"].map(grp => (
                  <button
                    key={grp}
                    onClick={() => setFormData(prev => ({ ...prev, travelers: grp }))}
                    className={`px-4 py-4 text-sm font-medium border transition-all duration-300 cursor-pointer ${
                      formData.travelers === grp
                        ? "bg-[#0B0D0C] text-white border-[#0B0D0C]"
                        : "bg-white text-[#1B1B1B]/70 border-[#C3AB85]/20 hover:border-[#C3AB85]/50"
                    }`}
                  >
                    {grp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Style */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><Sparkles className="w-5 h-5 text-[#C3AB85]" /> Travel style?</h2>
                <p className="text-xs text-[#1B1B1B]/50">How do you like to travel?</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {travelStyles.map(style => (
                  <button
                    key={style.id}
                    onClick={() => setFormData(prev => ({ ...prev, style: style.id }))}
                    className={`px-4 py-5 text-sm font-medium border transition-all duration-300 cursor-pointer flex flex-col items-center gap-2 ${
                      formData.style === style.id
                        ? "bg-[#0B0D0C] text-white border-[#0B0D0C]"
                        : "bg-white text-[#1B1B1B]/70 border-[#C3AB85]/20 hover:border-[#C3AB85]/50"
                    }`}
                  >
                    <span className="text-lg">{style.icon}</span>
                    <span>{style.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Interests */}
          {step === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><Heart className="w-5 h-5 text-[#C3AB85]" /> What interests you?</h2>
                <p className="text-xs text-[#1B1B1B]/50">Select all that apply</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map(interest => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-3 text-xs font-medium border transition-all duration-300 cursor-pointer ${
                      formData.interests.includes(interest)
                        ? "bg-[#0B0D0C] text-white border-[#0B0D0C]"
                        : "bg-white text-[#1B1B1B]/70 border-[#C3AB85]/20 hover:border-[#C3AB85]/50"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Dates */}
          {step === 6 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><Calendar className="w-5 h-5 text-[#C3AB85]" /> When do you want to travel?</h2>
                <p className="text-xs text-[#1B1B1B]/50">Approximate dates or month</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Jan-Feb 2027", "Mar-Apr 2027", "May-Jun 2027", "Jul-Aug 2027", "Sep-Oct 2027", "Nov-Dec 2027", "2028", "Flexible"].map(dt => (
                  <button
                    key={dt}
                    onClick={() => setFormData(prev => ({ ...prev, dates: dt }))}
                    className={`px-4 py-4 text-sm font-medium border transition-all duration-300 cursor-pointer ${
                      formData.dates === dt
                        ? "bg-[#0B0D0C] text-white border-[#0B0D0C]"
                        : "bg-white text-[#1B1B1B]/70 border-[#C3AB85]/20 hover:border-[#C3AB85]/50"
                    }`}
                  >
                    {dt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Contact */}
          {step === 7 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#0B0D0C] flex items-center gap-2"><Send className="w-5 h-5 text-[#C3AB85]" /> Almost there! Your details</h2>
                <p className="text-xs text-[#1B1B1B]/50">We'll get back within 24 hours</p>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white border border-[#C3AB85]/20 px-5 py-4 text-sm outline-none focus:border-[#C3AB85] transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-white border border-[#C3AB85]/20 px-5 py-4 text-sm outline-none focus:border-[#C3AB85] transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-white border border-[#C3AB85]/20 px-5 py-4 text-sm outline-none focus:border-[#C3AB85] transition-colors"
                />
                <textarea
                  placeholder="Any special requests or notes? (Optional)"
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  className="w-full bg-white border border-[#C3AB85]/20 px-5 py-4 text-sm outline-none focus:border-[#C3AB85] transition-colors resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-10 border-t border-[#C3AB85]/10 mt-10">
          <button
            onClick={() => setStep(prev => Math.max(1, prev - 1))}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm font-medium text-[#1B1B1B]/50 hover:text-[#0B0D0C] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <span className="text-[10px] text-[#1B1B1B]/30 uppercase tracking-wider font-bold">
            Step {step} of {totalSteps}
          </span>

          {step < totalSteps ? (
            <button
              onClick={() => setStep(prev => Math.min(totalSteps, prev + 1))}
              className="flex items-center gap-2 bg-[#0B0D0C] hover:bg-[#C3AB85] text-white hover:text-[#0B0D0C] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email}
              className="flex items-center gap-2 bg-[#C3AB85] hover:bg-[#0B0D0C] text-[#0B0D0C] hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>Submit</span>
              <Send className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
