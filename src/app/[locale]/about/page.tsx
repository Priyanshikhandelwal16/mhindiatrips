import React from "react";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import { Award, Users, Globe, Heart, Shield, ArrowRight, Star, Clock, MapPin, Compass } from "lucide-react";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  const text = {
    heroSub: "Our Story",
    hero: "About MH India Trips",
    heroDesc: "Since 2010, we have been crafting extraordinary journeys across India for discerning travelers from around the world.",
    storyTitle: "Our Journey",
    storyP1: "Founded in 2010 by passionate travel enthusiasts, MH India Trips was born from a simple belief: that India deserves to be experienced, not just visited. What started as a small team of dedicated travel planners has grown into a leading luxury travel company serving discerning travelers from over 40 countries.",
    storyP2: "Every journey we design is a labor of love. Our team of local experts, heritage consultants, and cultural ambassadors work together to create itineraries that go far beyond the ordinary tourist trail. We believe in slow travel, meaningful connections, and experiences that leave a lasting impression.",
    storyP3: "From the snow-capped peaks of the Himalayas to the tropical backwaters of Kerala, we have explored every corner of this incredible land so you don't have to plan alone.",
    missionTitle: "Our Mission",
    missionText: "To provide transformative travel experiences that connect travelers with India's rich heritage, diverse cultures, and breathtaking landscapes through personalized luxury journeys.",
    visionTitle: "Our Vision",
    visionText: "To be recognized as the premier luxury travel company for bespoke India experiences, setting the global standard for cultural immersion and sustainable tourism.",
    valuesTitle: "Our Core Values",
    numbersTitle: "MH India Trips in Numbers",
    teamTitle: "Our Expert Team",
    teamDesc: "Our team brings together decades of travel industry experience with genuine local knowledge. From multilingual guides to heritage specialists, every member is dedicated to making your India journey extraordinary.",
    ctaTitle: "Ready to Experience India?",
    ctaDesc: "Let us craft a journey that exceeds your expectations.",
    ctaBtn: "Start Planning",
  };

  const values = [
    { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every detail of your journey" },
    { icon: Shield, title: "Trust", desc: "Complete transparency in pricing, planning, and communication" },
    { icon: Globe, title: "Authenticity", desc: "Genuine cultural experiences far beyond tourist trails" },
    { icon: Users, title: "Personalization", desc: "Every journey uniquely tailored to your interests and pace" },
    { icon: Star, title: "Excellence", desc: "We partner only with the finest hotels, guides, and services" },
    { icon: Compass, title: "Expertise", desc: "15+ years of deep local knowledge across all Indian regions" },
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5,000+", label: "Happy Travelers" },
    { number: "100+", label: "Destinations" },
    { number: "40+", label: "Countries Served" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Rebooking Rate" },
  ];

  const team = [
    { name: "Rahul Sharma", role: "Founder & Lead Travel Designer", img: "/images/team_rahul.png" },
    { name: "Priya Kapoor", role: "Senior Destination Expert", img: "/images/team_priya.png" },
    { name: "Vikram Singh", role: "Heritage & Culture Specialist", img: "/images/team_vikram.png" },
    { name: "Anita Desai", role: "Client Relations Manager", img: "/images/team_anita.png" },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">
      
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/luxury_palace_train.png" 
          alt="About MH India Trips" 
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal/65 via-royal/35 to-royal/80" />
        <div className="relative z-10 text-center text-white space-y-4 px-6 mt-16 max-w-3xl">
          <span className="bg-gold/90 text-royal text-[9px] uppercase tracking-[0.25em] font-extrabold px-4 py-1.5 rounded-full inline-block">
            {text.heroSub}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-none text-white">
            {text.hero}
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-xs md:text-sm leading-relaxed font-light">
            {text.heroDesc}
          </p>
        </div>
      </section>

      {/* SECTION 2: Story columns */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gold/10">
        <Reveal className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold flex items-center gap-1">
            <Compass className="w-4 h-4" />
            <span>LEGACY</span>
          </span>
          <h2 className="text-3xl font-serif font-bold text-royal leading-tight">
            {text.storyTitle}
          </h2>
          <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
            {text.storyP1}
          </p>
          <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
            {text.storyP2}
          </p>
        </Reveal>
        
        {/* Mission Card */}
        <Reveal delay={200} className="bg-white border border-gold/25 p-10 rounded-3xl space-y-8 shadow-xl shadow-royal/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
          <div className="space-y-2">
            <h3 className="text-lg font-serif font-bold text-royal">{text.missionTitle}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.missionText}</p>
          </div>
          <div className="h-px bg-gold/15" />
          <div className="space-y-2">
            <h3 className="text-lg font-serif font-bold text-royal">{text.visionTitle}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">{text.visionText}</p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 3: Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">STANDARDS</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">{text.valuesTitle}</h2>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <Reveal key={i} delay={i * 60} className="bg-white border border-gold/10 p-8 rounded-2xl shadow-sm space-y-4">
                <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Icon className="w-5 h-5" />
                </span>
                <h4 className="text-sm font-serif font-bold text-royal uppercase tracking-wider">{val.title}</h4>
                <p className="text-xs text-foreground/50 leading-relaxed font-light">{val.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Stats Grid */}
      <section className="bg-royal text-white py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#B8964B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-6 gap-8 text-center relative z-10">
          {stats.map((st, i) => (
            <Reveal key={i} delay={i * 50} className="space-y-1">
              <span className="text-3xl md:text-4xl font-serif font-black text-gold block">{st.number}</span>
              <span className="text-[10px] uppercase tracking-wider text-white/50 block font-medium">{st.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5: Expert Team */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-16 border-b border-gold/10">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block">EXPERTS</span>
          <h2 className="text-3xl font-serif font-bold text-royal tracking-tight">{text.teamTitle}</h2>
          <p className="text-xs text-foreground/50 leading-relaxed font-light">{text.teamDesc}</p>
          <div className="h-px w-20 bg-gold/25 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 80} className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:border-gold/25">
              <div className="h-64 overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-center bg-white">
                <h4 className="text-sm font-serif font-bold text-royal">{member.name}</h4>
                <p className="text-[10px] text-foreground/45 uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: Call To Action */}
      <section className="max-w-3xl mx-auto px-6 py-28 text-center space-y-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal">{text.ctaTitle}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-xs text-foreground/50 font-light leading-relaxed max-w-md mx-auto">{text.ctaDesc}</p>
        </Reveal>
        <Reveal delay={200} className="pt-4">
          <Link href={`/${locale}/contact`} className="bg-gold hover:bg-gold-light text-royal text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full inline-flex items-center gap-1.5 shadow-md">
            <span>{text.ctaBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
