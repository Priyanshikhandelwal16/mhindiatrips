import React from "react";
import { getStatesAction } from "@/app/actions/queries";
import DestinationsCatalogPage from "@/components/destinations/DestinationsCatalogPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Destinos en la India | Viaje a India" : locale === "pt" ? "Destinos na Índia | Viajar pela Índia" : "Destinations in India | MH India Trips",
    description: locale === "es" ? "Explore los mejores destinos turísticos de la India" : locale === "pt" ? "Explore os melhores destinos turísticos da Índia" : "Explore the best tourist destinations in India",
    alternates: {
      canonical: `/${locale}/${locale === "es" ? "destinos-en-india" : locale === "pt" ? "destinos-na-india" : "destinations-in-india"}`,
      languages: {
        en: "/en/destinations-in-india",
        es: "/es/destinos-en-india",
        pt: "/pt/destinos-na-india"
      }
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const states = (await getStatesAction()).filter((s: any) => s.isPublished !== false && s.status !== "draft");

  return <DestinationsCatalogPage locale={locale} states={states} />;
}
