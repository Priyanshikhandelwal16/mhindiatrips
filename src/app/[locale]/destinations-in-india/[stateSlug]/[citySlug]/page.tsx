import React from "react";
import { notFound } from "next/navigation";
import { getStateBySlugAction, getCityBySlugAction, getRelatedToursForDestinationAction } from "@/app/actions/queries";
import CityDetailPage from "@/components/destinations/CityDetailPage";

interface PageProps {
  params: Promise<{ locale: string; stateSlug: string; citySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const city = await getCityBySlugAction(citySlug);
  if (!city) return {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  return {
    title: city.seoTitle?.[lang] || city.seoTitle?.en || city.name?.[lang],
    description: city.seoDesc?.[lang] || city.seoDesc?.en,
    keywords: city.seoKeywords?.[lang] || city.seoKeywords?.en,
    alternates: {
      canonical: `/${locale}/${locale === "es" ? "destinos-en-india" : locale === "pt" ? "destinos-na-india" : "destinations-in-india"}/${stateSlug}/${citySlug}`,
      languages: {
        en: `/en/destinations-in-india/${stateSlug}/${city.slug?.en || city.id}`,
        es: `/es/destinos-en-india/${stateSlug}/${city.slug?.es || city.id}`,
        pt: `/pt/destinos-na-india/${stateSlug}/${city.slug?.pt || city.id}`
      }
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, stateSlug, citySlug } = await params;
  const city = await getCityBySlugAction(citySlug);
  if (!city) notFound();

  const state = await getStateBySlugAction(stateSlug);
  if (!state) notFound();

  const relatedPackages = await getRelatedToursForDestinationAction(state.id);

  return (
    <CityDetailPage
      locale={locale}
      state={state}
      city={city}
      relatedPackages={relatedPackages}
    />
  );
}
