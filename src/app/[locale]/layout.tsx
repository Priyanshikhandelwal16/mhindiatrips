import React from "react";
import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import PageTransition from "@/components/common/PageTransition";
import ConciergeSeal from "@/components/common/ConciergeSeal";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between font-sans" suppressHydrationWarning>
        <Header locale={locale} />
        <main className="flex-grow flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer locale={locale} />
        <ConciergeSeal locale={locale} />
      </body>
    </html>
  );
}
