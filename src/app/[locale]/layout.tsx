import React from "react";
import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import PageTransition from "@/components/common/PageTransition";
import PageLoader from "@/components/common/PageLoader";
import PopupInquiryForm from "@/components/common/PopupInquiryForm";
import "@/app/globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

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
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${ebGaramond.variable} ${poppins.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col justify-between`} suppressHydrationWarning>
        <PageLoader />
        <PopupInquiryForm locale={locale} />
        <Header locale={locale} />
        <main className="flex-grow flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
