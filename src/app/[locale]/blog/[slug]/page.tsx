import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlugAction, getBlogsAction, getTourPackagesAction } from "@/app/actions/queries";
import { formatRichText } from "@/lib/utils";
import Reveal from "@/components/home/Reveal";
import { 
  Clock, ArrowLeft, User, Calendar, ChevronRight, Sparkles, MapPin, MessageCircle, BookOpen, ShieldCheck, CheckCircle2, PhoneCall
} from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const blog = await getBlogBySlugAction(slug);
  if (!blog) notFound();

  const lang = (locale === "es" || locale === "pt") ? locale : "en";

  // Get related blogs (same category)
  const allBlogs = await getBlogsAction();
  const related = allBlogs
    .filter((b: any) => b.slug !== slug && b.category === blog.category)
    .slice(0, 3);

  // Get related tour packages
  const allPackages = await getTourPackagesAction();
  const categoryKeywords = (blog.category || "").toLowerCase().split(/[\s&/]+/).filter((k: string) => k.length > 3);
  const relatedPackages = allPackages
    .filter((p: any) => {
      const pTitle = (p.title?.en || p.title || "").toLowerCase();
      const pTagline = (p.tagline?.en || p.tagline || "").toLowerCase();
      return categoryKeywords.some((kw: string) => pTitle.includes(kw) || pTagline.includes(kw));
    })
    .slice(0, 3);

  const t = {
    en: {
      back: "Back to Diaries",
      readTime: "min read",
      publishedOn: "Published",
      authorRole: "Senior Travel Specialist & Storyteller",
      authorBio: "Travel specialist with over 8 years of experience crafting luxury travel narratives for discerning global travelers.",
      relatedTitle: "More Diaries & Insights",
      relatedDesc: "Handcrafted travel stories to inspire your next voyage across India.",
      ctaTitle: "Plan This Journey",
      ctaSub: "Let our Jaipur travel concierges design your bespoke itinerary.",
      ctaBtn: "Inquire Now",
      packagesTitle: "Featured Tour Packages",
      packagesBtn: "View Itinerary",
      tableOfContents: "In This Article",
      shareText: "Share Story",
      guarantee: "100% Customized & Government Verified Tours",
      galleryTitle: "Destination Photo Gallery"
    },
    es: {
      back: "Volver a Diarios",
      readTime: "min de lectura",
      publishedOn: "Publicado",
      authorRole: "Especialista Senior en Viajes",
      authorBio: "Especialista en viajes con más de 8 años de experiencia creando itinerarios de lujo en la India.",
      relatedTitle: "Más Historias de Viaje",
      relatedDesc: "Historias de viaje hechas a mano para inspirar su próxima aventura por la India.",
      ctaTitle: "Planificar Este Viaje",
      ctaSub: "Deje que nuestros asesores en Jaipur diseñen su itinerario exclusivo.",
      ctaBtn: "Consultar Ahora",
      packagesTitle: "Paquetes de Viaje Destacados",
      packagesBtn: "Ver Itinerario",
      tableOfContents: "En Este Artículo",
      shareText: "Compartir",
      guarantee: "Tours 100% Personalizados y Verificados",
      galleryTitle: "Galería de Fotos del Destino"
    },
    pt: {
      back: "Voltar aos Diários",
      readTime: "min de leitura",
      publishedOn: "Publicado",
      authorRole: "Especialista em Viagens e Histórias",
      authorBio: "Especialista em viagens com mais de 8 anos de experiência criando narrativas de luxo na Índia.",
      relatedTitle: "Mais Diários e Inspirações",
      relatedDesc: "Histórias de viagem selecionadas para inspirar sua próxima jornada.",
      ctaTitle: "Planejar Esta Viagem",
      ctaSub: "Deixe nossos consultores em Jaipur criarem seu roteiro personalizado.",
      ctaBtn: "Solicitar Orçamento",
      packagesTitle: "Pacotes de Viagem Recomendados",
      packagesBtn: "Ver Roteiro",
      tableOfContents: "Neste Artigo",
      shareText: "Compartilhar",
      guarantee: "Roteiros 100% Personalizados e Certificados",
      galleryTitle: "Galeria de Fotos do Destino"
    }
  };

  const text = t[locale as keyof typeof t] || t.en;

  const getLocalizedValue = (field: any, l: string): string => {
    if (!field) return "";
    if (typeof field === "object") {
      return field[l] || field.en || "";
    }
    return String(field);
  };

  const blogTitle = getLocalizedValue(blog.title, lang);
  const blogExcerpt = getLocalizedValue(blog.excerpt, lang);
  const rawContent = getLocalizedValue(blog.content, lang);
  const blogContent = formatRichText(rawContent);

  // Extract H2 headings for Table of Contents
  const headingMatches = Array.from(blogContent.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi));
  const tableOfContents = headingMatches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1B1B1B]">

      {/* LUXURY HERO HEADER */}
      <section className="relative bg-[#0A2A1E] text-white pt-16 pb-20 overflow-hidden border-b border-[#C5A862]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#134432] via-[#0A2A1E] to-[#04140D] opacity-95 pointer-events-none" />
        
        {/* Decorative Gold Accent Lines */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(197,168,98,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6 text-left">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center gap-3">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#C5A862] hover:text-[#0A2A1E] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{text.back}</span>
            </Link>
            <span className="text-white/40 text-xs font-serif">&bull;</span>
            <span className="bg-[#C5A862]/20 border border-[#C5A862]/40 text-[#C5A862] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              {blog.category}
            </span>
          </div>

          {/* Main Blog Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.18] max-w-4xl tracking-tight">
            {blogTitle}
          </h1>

          {/* Excerpt Subtitle */}
          {blogExcerpt && (
            <p className="text-white/75 text-base lg:text-lg font-light max-w-3xl leading-relaxed">
              {blogExcerpt}
            </p>
          )}

          {/* Author & Publication Details */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 text-xs text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A862] text-[#0A2A1E] font-bold flex items-center justify-center border-2 border-white shadow-md">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{blog.author || "MH India Trips Specialist"}</p>
                <p className="text-[10px] text-[#C5A862] uppercase tracking-wider">{text.authorRole}</p>
              </div>
            </div>

            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C5A862]" />
                {blog.readingTime || 5} {text.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C5A862]" />
                {blog.createdAt || "2026"}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN 2-COLUMN EDITORIAL CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT MAIN ARTICLE CONTENT (8 COLUMNS) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Featured Cover Image Frame */}
            {(blog.featuredImage || blog.image) && (
              <Reveal>
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A862]/30 bg-[#0A2A1E]">
                  <img 
                    src={blog.featuredImage || blog.image} 
                    alt={blogTitle} 
                    className="w-full max-h-[540px] object-cover md:object-contain bg-black/40 mx-auto" 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-[#C5A862]" />
                      <span>{blog.category} Destination Guide</span>
                    </span>
                    <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider">MH India Trips Archives</span>
                  </div>
                </div>
              </Reveal>
            )}

            {/* WHITE LUXURY CARD CONTAINER FOR READABILITY */}
            <Reveal delay={100}>
              <article className="bg-white border border-[#C5A862]/25 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xl space-y-8">
                
                {/* Intro Callout Box */}
                {blogExcerpt && (
                  <div className="bg-[#FAF8F5] border-l-4 border-[#C5A862] border-y border-r border-[#C5A862]/20 p-6 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A862] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Executive Overview</span>
                    </span>
                    <p className="text-base sm:text-lg text-[#0A2A1E] font-serif font-medium leading-relaxed italic">
                      "{blogExcerpt}"
                    </p>
                  </div>
                )}

                {/* Main Rendered Content */}
                <div className="blog-content-rich leading-relaxed space-y-6">
                  <div dangerouslySetInnerHTML={{ __html: blogContent }} />
                </div>

                {/* INLINE INQUIRY CTA CARD */}
                <div className="bg-gradient-to-r from-[#0A2A1E] via-[#0F3A2B] to-[#0A2A1E] rounded-2xl p-7 text-white border border-[#C5A862]/40 shadow-xl mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-left">
                    <div className="inline-flex items-center gap-2 bg-[#C5A862]/20 px-3 py-1 rounded-full border border-[#C5A862]/30">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A862]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A862]">{text.guarantee}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{text.ctaTitle}</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light">{text.ctaSub}</p>
                  </div>
                  <a
                    href={`https://wa.me/919929811467?text=Hello%20MH%20India%20Trips,%20I%20read%20your%20story%20about%20"${encodeURIComponent(blogTitle)}"%20and%20want%20to%20plan%20a%20trip.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 shrink-0 shadow-lg inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{text.ctaBtn}</span>
                  </a>
                </div>

                {/* Visual Photo Gallery with Optional Captions */}
                {blog.gallery && blog.gallery.length > 0 && (
                  <div className="space-y-4 pt-8 border-t border-[#C5A862]/20">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-serif font-bold text-[#0A2A1E]">{text.galleryTitle}</h3>
                      <span className="text-xs text-[#C5A862] font-semibold">
                        {blog.gallery.length} {blog.gallery.length === 1 ? "Photo" : "Photos"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {blog.gallery.map((gItem: any, gIdx: number) => {
                        const gUrl = typeof gItem === "string" ? gItem : (gItem?.url || gItem?.src || "");
                        if (!gUrl) return null;

                        const gCaptionObj = typeof gItem === "object" ? gItem?.caption : null;
                        let gCaption = "";
                        if (typeof gCaptionObj === "string") {
                          gCaption = gCaptionObj;
                        } else if (typeof gCaptionObj === "object" && gCaptionObj !== null) {
                          gCaption = gCaptionObj[lang] || gCaptionObj.en || gCaptionObj.es || gCaptionObj.pt || "";
                        }

                        return (
                          <div key={gIdx} className="bg-[#FAF8F5] border border-[#C5A862]/30 rounded-2xl overflow-hidden shadow-md group flex flex-col justify-between hover:border-[#C5A862] transition-colors">
                            <div className="h-60 w-full overflow-hidden relative bg-[#0A2A1E]">
                              <img 
                                src={gUrl} 
                                alt={gCaption || `Gallery ${gIdx + 1}`} 
                                loading="lazy" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                            </div>
                            {gCaption && (
                              <div className="p-3.5 bg-white border-t border-[#C5A862]/20">
                                <p className="text-xs font-medium text-[#0A2A1E]/80 italic text-center">
                                  "{gCaption}"
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Author Bio Section */}
                <div className="pt-8 border-t border-[#C5A862]/20 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#C5A862]/20">
                  <div className="w-16 h-16 rounded-full bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center shrink-0 border-2 border-[#C5A862] shadow-md">
                    <User className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-serif font-bold text-[#0A2A1E] text-lg">{blog.author || "MH India Trips Editorial Team"}</h4>
                    <span className="text-[10px] uppercase font-bold text-[#C5A862] tracking-wider block">{text.authorRole}</span>
                    <p className="text-xs text-[#1B1B1B]/70 font-light leading-relaxed pt-1">
                      {text.authorBio}
                    </p>
                  </div>
                </div>

              </article>
            </Reveal>

          </main>

          {/* RIGHT STICKY SIDEBAR (4 COLUMNS) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">

              {/* SIDEBAR CARD 1: Table of Contents */}
              {tableOfContents.length > 0 && (
                <Reveal delay={150}>
                  <div className="bg-white border border-[#C5A862]/30 rounded-3xl p-6 shadow-lg space-y-4">
                    <div className="flex items-center gap-2 border-b border-[#C5A862]/20 pb-3">
                      <BookOpen className="w-4 h-4 text-[#C5A862]" />
                      <h3 className="font-serif font-bold text-[#0A2A1E] text-base">{text.tableOfContents}</h3>
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#1B1B1B]/80">
                      {tableOfContents.map((heading, idx) => (
                        <li key={idx} className="flex items-start gap-2 hover:text-[#C5A862] transition-colors">
                          <ChevronRight className="w-3.5 h-3.5 text-[#C5A862] shrink-0 mt-0.5" />
                          <span className="line-clamp-2 leading-snug">{heading}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* SIDEBAR CARD 2: Direct Trip Inquiry */}
              <Reveal delay={200}>
                <div className="bg-[#0A2A1E] text-white border-2 border-[#C5A862] rounded-3xl p-7 shadow-xl space-y-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_rgba(197,168,98,0.2)_0%,transparent_70%)] pointer-events-none" />
                  
                  <div className="space-y-2 relative z-10 text-left">
                    <span className="bg-[#C5A862]/20 border border-[#C5A862]/40 text-[#C5A862] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Luxury Concierge
                    </span>
                    <h3 className="font-serif font-bold text-xl text-white pt-1">Planning a Trip to India?</h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      Our Jaipur team manages private cars, heritage palace bookings, and official government guides.
                    </p>
                  </div>

                  <div className="space-y-3 relative z-10 pt-2">
                    <a
                      href="https://wa.me/919929811467?text=Hello%20MH%20India%20Trips,%20I%20would%20like%20to%20plan%20a%20luxury%20customized%20trip."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] font-bold py-3.5 px-5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={`/${locale}#inquire-now`}
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-5 rounded-full text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#C5A862]" />
                      <span>Request Itinerary</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[10px] text-white/60 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A862]" />
                    <span>GSTIN Verified: 08ACIFM3516H1Z7</span>
                  </div>
                </div>
              </Reveal>

              {/* SIDEBAR CARD 3: Related Packages */}
              {relatedPackages.length > 0 && (
                <Reveal delay={250}>
                  <div className="bg-white border border-[#C5A862]/30 rounded-3xl p-6 shadow-lg space-y-4">
                    <h3 className="font-serif font-bold text-[#0A2A1E] text-base border-b border-[#C5A862]/20 pb-3">
                      {text.packagesTitle}
                    </h3>
                    <div className="space-y-4">
                      {relatedPackages.map((pkg: any) => (
                        <Link key={pkg.slug} href={`/${locale}/packages/${pkg.slug}`} className="group flex gap-3.5 items-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-colors">
                          <img
                            src={pkg.heroImage || pkg.image || "/images/taj_mahal_sunrise.png"}
                            alt=""
                            className="w-16 h-16 rounded-xl object-cover border border-[#C5A862]/30 shrink-0 group-hover:scale-105 transition-transform"
                          />
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-[#0A2A1E] group-hover:text-[#C5A862] transition-colors line-clamp-2 leading-snug">
                              {pkg.title?.[lang] || pkg.title?.en || pkg.title}
                            </h4>
                            <span className="text-[10px] font-bold text-[#C5A862] block">
                              {pkg.duration ? `${pkg.duration} Days` : "Custom Tour"}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

            </div>
          </aside>

        </div>
      </div>

      {/* CONTINUED READING: RELATED DIARIES */}
      {related.length > 0 && (
        <section className="bg-white border-t border-[#C5A862]/20 py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <Reveal className="text-center space-y-3">
              <span className="text-[#C5A862] text-[10px] font-bold uppercase tracking-[0.25em]">MH India Trips Diaries</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A2A1E]">{text.relatedTitle}</h2>
              <p className="text-xs sm:text-sm text-[#1B1B1B]/60 font-light">{text.relatedDesc}</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((post: any, i: number) => (
                <Reveal key={post.slug} delay={i * 100}>
                  <Link href={`/${locale}/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-[#FAF8F5] border border-[#C5A862]/25 rounded-3xl overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                      <div className="h-52 overflow-hidden relative shrink-0">
                        <img 
                          src={post.featuredImage || post.image || "/images/destination_fallback.jpg"} 
                          alt={post.title?.[lang] || post.title?.en || post.title} 
                          loading="lazy" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <span className="absolute top-4 left-4 bg-[#0A2A1E] text-[#C5A862] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C5A862]/30">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="font-serif font-bold text-[#0A2A1E] text-base group-hover:text-[#C5A862] transition-colors line-clamp-2 leading-snug">
                            {post.title?.[lang] || post.title?.en}
                          </h3>
                          <p className="text-xs text-[#1B1B1B]/60 line-clamp-2 font-light leading-relaxed">
                            {post.excerpt?.[lang] || post.excerpt?.en}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#C5A862]/15 text-[10px] text-[#0A2A1E]/60 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C5A862]" />
                            {post.readingTime} {text.readTime}
                          </span>
                          <span className="text-[#C5A862] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            Read <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

