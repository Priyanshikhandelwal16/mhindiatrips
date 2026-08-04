import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import "@/app/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
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
    <html lang={locale} className={`scroll-smooth ${playfair.variable} ${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between font-sans" suppressHydrationWarning>
        <Header locale={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
