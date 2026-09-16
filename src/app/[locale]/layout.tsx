import React from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import PageTransition from "@/components/common/PageTransition";
import PageLoader from "@/components/common/PageLoader";
import PopupInquiryForm from "@/components/common/PopupInquiryForm";
import GoogleTranslateWidget from "@/components/common/GoogleTranslateWidget";
import LanguageSelectorModal from "@/components/common/LanguageSelectorModal";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "MH India Trips | Luxury Private Tours & Bespoke Travel Experiences in India",
  description: "Experience Incredible India with bespoke luxury itineraries, custom heritage palace accommodations, private transfers, and curated local guides. Premium travel since 2010.",
  keywords: ["India luxury travel", "luxury India tour", "private tour India", "Golden Triangle tour", "Rajasthan custom travel", "bespoke India holidays", "premium India tours"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "MH India Trips | Luxury Private Tours to India",
    description: "Bespoke luxury itineraries, heritage palace stays, and curated cultural experiences across India.",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "ndlbpsyV01lZ9W_Nsgup3JMk1RTg55FY9q9eZ6Trf2A",
  },
};

export const dynamic = "force-dynamic";

import { db } from "@/lib/db";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Fetch dynamic settings from database (falling back to hardcoded system defaults)
  const defaultContactDetails = {
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    whatsapp: "919314635830",
    address: "New Delhi, India",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
    facebook: "https://www.facebook.com/viajeaindiaconindiasinvitation/",
    twitter: "https://x.com/abhilash01",
    instagram: "https://www.instagram.com/mhindiatrips/",
    logoHeightMobile: "48",
    logoHeightDesktop: "56",
    copyright: "2026 MH India Trips. Crafted for luxury.",
    designedBy: "JAINUP | Growth System"
  };
  const fetchedContactDetails = await db.settings.findUnique("contact_details");
  const contactDetails = fetchedContactDetails ? { ...defaultContactDetails, ...fetchedContactDetails } : defaultContactDetails;

  const states = (await db.states.findMany()).filter((s: any) => s.isPublished);
  const allPackages = (await db.tourPackages.findMany()).filter((p: any) => p.isPublished !== false);
  const SELECTED_SLUGS = [
    "rajasthan-khajuraho-varanasi-luxury-journey",
    "india-goa-beach-monuments-tour",
    "india-nepal-golden-triangle-kathmandu-tour",
    "rajasthan-varanasi-imperial-luxury-tour",
    "south-india-temples-backwaters-cultural-tour",
    "rajasthan-desert-essence-10-days-tour"
  ];
  const packages = allPackages
    .filter((p: any) => SELECTED_SLUGS.includes(p.slug))
    .sort((a: any, b: any) => SELECTED_SLUGS.indexOf(a.slug) - SELECTED_SLUGS.indexOf(b.slug));

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-ZCKSQWLRHX";

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="google-site-verification" content="ndlbpsyV01lZ9W_Nsgup3JMk1RTg55FY9q9eZ6Trf2A" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased min-h-screen flex flex-col justify-between w-full overflow-x-hidden" suppressHydrationWarning>
        <PageLoader />
        <GoogleTranslateWidget />
        <LanguageSelectorModal currentLocale={locale} />
        <Header locale={locale} contactDetails={contactDetails} states={states} packages={packages} />
        <PopupInquiryForm locale={locale} contactDetails={contactDetails} />
        <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-[116px]">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer locale={locale} contactDetails={contactDetails} />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
