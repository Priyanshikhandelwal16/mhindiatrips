import React from "react";
import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "MHIndiaTrips | Premium Custom Private Tours to India",
  description: "Experience Incredible India with bespoke luxury itineraries, custom heritage palace accommodations, private transfers, and curated local guides.",
  keywords: ["India travel guide", "luxury India tour", "private tour India", "Golden Triangle tour", "Rajasthan custom travel"],
  robots: { index: true, follow: true }
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#FAF8F5] text-[#1B1B1B] antialiased min-h-screen flex flex-col justify-between" suppressHydrationWarning>
        <Header locale={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
