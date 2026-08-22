import React from "react";
import { notFound } from "next/navigation";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CustomPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CustomPage({ params }: CustomPageProps) {
  const { locale, slug } = await params;
  const pageData = await getPageByIdAction(slug);

  // If page does not exist, or it is not a custom page
  // (we want standard directories to be served by their own static routes)
  if (!pageData) {
    notFound();
  }

  const title = pageData.title?.[locale] || pageData.title?.en || "MH India Trips Page";
  const body = pageData.content?.body?.[locale] || pageData.content?.body?.en || "";
  const heroImage = pageData.heroImage || "/images/luxury_palace_train.png";

  const ctaBtnText = locale === "es" ? "Planificar Viaje" : locale === "pt" ? "Fale Conosco" : "Inquire Now";
  const ctaTitleText = locale === "es" ? "¿Listo Para Diseñar Su Viaje?" : locale === "pt" ? "Pronto Para Planejar Sua Viagem?" : "Ready to Plan Your Dream Journey?";
  const ctaDescText = locale === "es" ? "Contacte a nuestros asesores hoy para comenzar a planificar su itinerario a medida." : locale === "pt" ? "Entre em contato com nossos consultores hoje para começar a planejar seu itinerário sob medida." : "Contact our luxury travel advisors today to begin drafting your custom custom-tailored itinerary.";

  return (
    <div className="font-sans bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      
      {/* Hero Header */}
      <section className="relative bg-[#0A2A1E] text-white py-16 md:py-24 flex items-center justify-center text-center w-full">
        <div className="relative z-10 text-center text-white px-6 max-w-5xl space-y-4">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">MH India Trips Dispatch</span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight text-white">{title}</h1>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="prose prose-lg max-w-none text-[#1B1B1B]/75 leading-relaxed space-y-8">
            <div dangerouslySetInnerHTML={{ __html: body }} className="dynamic-html-content space-y-6" />
          </Reveal>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 bg-cream border-t border-sand/30 text-center">
        <div className="max-w-xl mx-auto px-6 space-y-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-royal">{ctaTitleText}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-md mx-auto">{ctaDescText}</p>
          </Reveal>
          <Reveal delay={200} className="pt-4">
            <Link 
              href={`/${locale}/contact`} 
              className="bg-gold hover:bg-gold-light text-royal text-sm font-bold uppercase tracking-widest px-8 py-4.5 rounded-full inline-flex items-center gap-1.5 shadow-md transition"
            >
              <span>{ctaBtnText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
