import React from "react";
import Reveal from "@/components/home/Reveal";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;

  return (
    <div className="font-sans bg-background text-foreground">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-royal" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {locale === "es" ? "Términos y Condiciones" : locale === "pt" ? "Termos e Condições" : "Terms & Conditions"}
          </h1>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="prose prose-lg max-w-none text-foreground/70 leading-relaxed space-y-8">
            <p className="text-sm text-foreground/40">Last updated: August 2026</p>

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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
