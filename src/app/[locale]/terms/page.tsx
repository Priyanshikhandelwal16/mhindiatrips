import React from "react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("terms");

  const title = pageData?.title?.[locale] || pageData?.title?.en || (locale === "es" ? "Términos y Condiciones" : locale === "pt" ? "Termos e Condições" : "Terms & Conditions");
  const body = pageData?.content?.body?.[locale] || pageData?.content?.body?.en;

  // Render other custom translatable fields added by the user
  const customSections = Object.keys(pageData?.content || {})
    .filter(k => k !== "body")
    .map(key => {
      const fieldVal = pageData?.content[key];
      if (fieldVal && typeof fieldVal === "object" && (fieldVal[locale] || fieldVal.en)) {
        return fieldVal[locale] || fieldVal.en;
      }
      return null;
    })
    .filter(Boolean) as string[];

  return (
    <div className="font-sans bg-[#FAF8F5] min-h-screen text-[#1B1B1B]">
      {/* Hero */}
      <section className="relative bg-[#0A2A1E] text-white py-16 md:py-24 flex items-center justify-center text-center w-full">
        <div className="relative z-10 text-center text-white px-6 space-y-4 max-w-5xl">
          <span className="bg-gold text-royal text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full inline-block">Legal Dispatch</span>
          <h1 className="text-3xl md:text-5xl font-bold">
            {title}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="prose prose-lg max-w-none text-foreground/75 leading-relaxed space-y-8">
            {(body || customSections.length > 0) ? (
              <div className="space-y-8">
                {body && (
                  <div dangerouslySetInnerHTML={{ __html: body }} className="blog-content-rich" />
                )}
                {customSections.map((secContent, idx) => (
                  <div key={idx} dangerouslySetInnerHTML={{ __html: secContent }} className="blog-content-rich" />
                ))}
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-wider font-bold text-gold">Last updated: August 2026</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">1. Booking & Payments</h2>
                <p className="text-[15px]">A 30% deposit is required to confirm your booking. The remaining balance is due 30 days before the trip start date. All payments are processed securely through our authorized payment partners.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">2. Cancellation Policy</h2>
                <p className="text-[15px]">Cancellations made 60+ days before departure: full refund minus processing fees. 30-59 days: 50% refund. Less than 30 days: no refund. We recommend travel insurance for all bookings.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">3. Itinerary Changes</h2>
                <p className="text-[15px]">We reserve the right to modify itineraries due to unforeseen circumstances (weather, political situations, natural disasters). Alternative arrangements of equal or higher quality will be provided.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">4. Travel Insurance</h2>
                <p className="text-[15px]">We strongly recommend comprehensive travel insurance covering trip cancellation, medical emergencies, and personal belongings. This is the traveler's responsibility.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">5. Liability</h2>
                <p className="text-[15px]">MH India Trips acts as an intermediary between travelers and service providers. While we carefully vet all partners, we are not liable for acts of third-party service providers, natural disasters, or force majeure events.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">6. Health & Vaccinations</h2>
                <p className="text-[15px]">Travelers are responsible for ensuring they have appropriate vaccinations and health clearances. We provide guidance but recommend consulting your doctor before travel.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">7. Code of Conduct</h2>
                <p className="text-[15px]">Travelers are expected to respect local customs, cultural sites, and communities. We reserve the right to terminate services without refund in cases of inappropriate behavior.</p>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
