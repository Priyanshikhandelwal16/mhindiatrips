import React from "react";
import { notFound } from "next/navigation";
import { getStateBySlugAction, getCitiesByStateSlugAction } from "@/app/actions/queries";
import StateListingPage from "@/components/destinations/StateListingPage";

interface PageProps {
  params: Promise<{ locale: string; stateSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, stateSlug } = await params;
  const state = await getStateBySlugAction(stateSlug);
  if (!state) return {};
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  return {
    title: state.seoTitle?.[lang] || state.seoTitle?.en || state.name?.[lang],
    description: state.seoDesc?.[lang] || state.seoDesc?.en,
    keywords: state.seoKeywords?.[lang] || state.seoKeywords?.en,
    alternates: {
      canonical: `/${locale}/${locale === "es" ? "destinos-en-india" : locale === "pt" ? "destinos-na-india" : "destinations-in-india"}/${stateSlug}`,
      languages: {
        en: `/en/destinations-in-india/${state.slug?.en || state.id}`,
        es: `/es/destinos-en-india/${state.slug?.es || state.id}`,
        pt: `/pt/destinos-na-india/${state.slug?.pt || state.id}`
      }
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, stateSlug } = await params;
  const state = await getStateBySlugAction(stateSlug);
  if (!state) notFound();

  const cities = (await getCitiesByStateSlugAction(state.id)).filter((c: any) => c.isPublished !== false && c.status !== "draft");

  return <StateListingPage locale={locale} state={state} cities={cities} />;
}
