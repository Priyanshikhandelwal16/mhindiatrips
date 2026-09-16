import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import { db } from "@/lib/db";
import { formatRichText } from "@/lib/utils";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const pageData = await getPageByIdAction("privacy");
  
  const contactDetails = (await db.settings.findUnique("contact_details")) || {
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com"
  };

  const title = pageData?.title?.[locale] || pageData?.title?.en || (locale === "es" ? "Política de Privacidad" : locale === "pt" ? "Política de Privacidade" : "Privacy Policy");
  const rawBody = pageData?.content?.body?.[locale] || pageData?.content?.body?.en;
  const body = rawBody ? formatRichText(rawBody) : "";

  // Render other custom translatable fields added by the user
  const customSections = Object.keys(pageData?.content || {})
    .filter(k => k !== "body")
    .map(key => {
      const fieldVal = pageData?.content[key];
      if (fieldVal && typeof fieldVal === "object" && (fieldVal[locale] || fieldVal.en)) {
        return formatRichText(fieldVal[locale] || fieldVal.en);
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
        <div className="max-w-4xl px-6 md:px-12 lg:px-20 text-left">
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
                <p className="text-[15px]">You have the right to access, correct, or delete your personal information at any time. Contact us at {contactDetails.email || "info@mhindiatrips.com"} for any data-related requests.</p>

                <h2 className="text-xl font-serif font-bold text-royal !mt-10">7. Contact</h2>
                <p className="text-[15px]">For questions about this privacy policy, contact us at {contactDetails.email || "info@mhindiatrips.com"} or {contactDetails.phone || "+91 9314635830"}.</p>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
