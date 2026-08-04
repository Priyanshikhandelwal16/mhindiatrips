import React from "react";
import Reveal from "@/components/home/Reveal";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  return (
    <div className="font-sans bg-background text-foreground">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-royal" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {locale === "es" ? "Política de Privacidad" : locale === "pt" ? "Política de Privacidade" : "Privacy Policy"}
          </h1>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="prose prose-lg max-w-none text-foreground/70 leading-relaxed space-y-8">
            <p className="text-sm text-foreground/40">Last updated: August 2026</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">1. Information We Collect</h2>
            <p className="text-[15px]">We collect personal information you provide when making inquiries, booking tours, or subscribing to our newsletter. This includes your name, email, phone number, travel preferences, and passport information when required for bookings.</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">2. How We Use Your Information</h2>
            <p className="text-[15px]">Your information is used to: plan and customize your travel itinerary, communicate about your booking, send relevant travel updates and offers (with your consent), and improve our services.</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">3. Data Protection</h2>
            <p className="text-[15px]">We implement industry-standard security measures to protect your personal data. Your information is stored securely and is only accessible to authorized team members who need it to provide our services.</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">4. Third-Party Sharing</h2>
            <p className="text-[15px]">We share your information only with trusted partners directly involved in delivering your travel experience (hotels, transport providers, guides). We never sell your personal data to third parties.</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">5. Cookies</h2>
            <p className="text-[15px]">Our website uses cookies to enhance your browsing experience and analyze website traffic. You can manage cookie preferences through your browser settings.</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">6. Your Rights</h2>
            <p className="text-[15px]">You have the right to access, correct, or delete your personal information at any time. Contact us at hello@mhindiatrips.com for any data-related requests.</p>

            <h2 className="text-xl font-serif font-bold text-royal !mt-10">7. Contact</h2>
            <p className="text-[15px]">For questions about this privacy policy, contact us at hello@mhindiatrips.com or +91 98765 43210.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
