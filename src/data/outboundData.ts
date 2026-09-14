import outboundFallback from "./fallback/outbound.json";

export interface OutboundDestination {
  slug: string;
  title: { en: string; es: string; pt: string };
  tagline: { en: string; es: string; pt: string };
  region: string;
  image: string;
  gallery?: string[];
  description: { en: string; es: string; pt: string };
  overview?: { en: string; es: string; pt: string };
  history?: { en: string; es: string; pt: string };
  culture?: { en: string; es: string; pt: string };
  localFood?: { en: string; es: string; pt: string };
  bestTime: { en: string; es: string; pt: string };
  attractions?: Array<{
    name: { en: string; es: string; pt: string };
    image?: string;
    desc: { en: string; es: string; pt: string };
  }>;
  experiences?: Array<{
    title: { en: string; es: string; pt: string };
    desc?: { en: string; es: string; pt: string };
    image?: string;
  }>;
  signatureExperiences?: Array<{
    title: { en: string; es: string; pt: string };
    desc?: { en: string; es: string; pt: string };
    image?: string;
  }>;
  hotels?: Array<{
    name: string;
    rating?: string;
    image?: string;
    desc?: { en: string; es: string; pt: string };
  }>;
  thingsToDo?: Array<{ en: string; es: string; pt: string }>;
  suggestedItinerary?: { en: string; es: string; pt: string };
  travelTips?: Array<{ en: string; es: string; pt: string }>;
  faqs?: Array<{
    q: { en: string; es: string; pt: string };
    a: { en: string; es: string; pt: string };
  }>;
  seo?: {
    en?: { title: string; description: string; keywords: string };
    es?: { title: string; description: string; keywords: string };
    pt?: { title: string; description: string; keywords: string };
  };
}

export const outboundDestinations: OutboundDestination[] = outboundFallback as unknown as OutboundDestination[];
