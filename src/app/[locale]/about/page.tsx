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
    processTitle: "How We Work",
    processDesc: "Our simple 4-step process ensures your dream India trip becomes reality.",
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
    { icon: Compass, title: "Expertise", desc: "14+ years of deep local knowledge across all Indian regions" },
  ];

  const process = [
    { step: "01", title: "Share Your Vision", desc: "Tell us about your dream India trip — interests, dates, budget, and style." },
    { step: "02", title: "Custom Itinerary", desc: "Our experts design a bespoke itinerary with handpicked experiences and stays." },
    { step: "03", title: "Refine & Confirm", desc: "We fine-tune every detail together until it's perfect. Then you book with confidence." },
    { step: "04", title: "Travel & Enjoy", desc: "Relax as we handle everything. 24/7 on-ground support throughout your journey." },
  ];

  const stats = [
    { number: "14+", label: "Years of Experience" },
    { number: "5,000+", label: "Happy Travelers" },
    { number: "100+", label: "Destinations" },
    { number: "40+", label: "Countries Served" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Rebooking Rate" },
  ];

  const team = [
    { name: "Rahul Sharma", role: "Founder & Lead Travel Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" },
    { name: "Priya Kapoor", role: "Senior Destination Expert", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300" },
    { name: "Vikram Singh", role: "Heritage & Culture Specialist", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300" },
    { name: "Anita Desai", role: "Client Relations Manager", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300" },
  ];

  return (
    <div className="font-sans bg-background text-foreground">
      {/* Section 1: Hero with Varanasi Image */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <img src="/images/varanasi.jpg" alt="Varanasi Ghats at Sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-royal/75" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <span className="editorial-subheading block text-gold mb-4">{text.heroSub}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{text.hero}</h1>
          <p className="text-lg text-white/75 leading-relaxed">{text.heroDesc}</p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-6">
              <span className="editorial-subheading block">{text.heroSub}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-royal">{text.storyTitle}</h2>
              <div className="space-y-4 text-[15px] text-foreground/60 leading-relaxed">
                <p>{text.storyP1}</p>
                <p>{text.storyP2}</p>
                <p>{text.storyP3}</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=500" alt="Rajasthan" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=500" alt="Kerala" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64 image-zoom-container">
                  <img src="/images/varanasi.jpg" alt="Varanasi" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 image-zoom-container">
                  <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=500" alt="Goa" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3: Stats / Numbers */}
      <section className="py-20 bg-royal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">{text.numbersTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 60} className="text-center">
                <span className="text-3xl lg:text-4xl font-bold text-gold block">{stat.number}</span>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mt-2 font-medium">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Mission & Vision */}
      <section className="section-spacing bg-cream border-y border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal className="p-10 rounded-2xl bg-white border border-sand/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-royal mb-4">{text.missionTitle}</h3>
              <p className="text-[15px] text-foreground/55 leading-relaxed">{text.missionText}</p>
            </Reveal>
            <Reveal delay={100} className="p-10 rounded-2xl bg-white border border-sand/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-forest" />
              </div>
              <h3 className="text-2xl font-bold text-royal mb-4">{text.visionTitle}</h3>
              <p className="text-[15px] text-foreground/55 leading-relaxed">{text.visionText}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5: Our Values */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-royal">{text.valuesTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} delay={i * 70}>
                  <div className="p-8 rounded-2xl border border-sand/40 hover:border-gold/20 hover:shadow-lg transition-all duration-400 h-full">
                    <div className="w-14 h-14 rounded-xl bg-gold/8 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-lg font-bold text-royal mb-2">{v.title}</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: How We Work (Process) */}
      <section className="section-spacing bg-white border-y border-sand/30">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="editorial-subheading block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-royal">{text.processTitle}</h2>
            <p className="text-[15px] text-foreground/55">{text.processDesc}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative p-8 rounded-2xl bg-cream/50 border border-sand/30 h-full">
                  <span className="text-5xl font-bold text-gold/15 absolute top-4 right-6">{p.step}</span>
                  <div className="relative z-10">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider">Step {p.step}</span>
                    <h4 className="text-lg font-bold text-royal mt-2 mb-3">{p.title}</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Team */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="editorial-subheading block">The People Behind Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-royal">{text.teamTitle}</h2>
            <p className="text-[15px] text-foreground/55">{text.teamDesc}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="text-center group">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-sand/50 group-hover:ring-gold/30 transition-all duration-300">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h4 className="font-bold text-royal">{member.name}</h4>
                  <p className="text-xs text-foreground/50 mt-1">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/varanasi-aarti.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-royal/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-6">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold">{text.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-white/65">{text.ctaDesc}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link href={`/${locale}#inquire-now`} className="inline-flex items-center gap-2 btn-gold py-4 px-10">
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
