"use server";

import { db } from "@/lib/db";

export async function getStatesAction() {
  return await db.states.findMany();
}

export async function getStateBySlugAction(slug: string) {
  return await db.states.findUnique(slug);
}

export async function getCityBySlugAction(citySlug: string) {
  const city = await db.cities.findUnique(citySlug);
  if (city) {
    const parentState = await db.states.findUnique(city.stateId);
    return {
      ...city,
      _parentStateSlug: parentState?.slug?.en || parentState?.id || '',
      _parentStateTitle: parentState?.name || {},
      _parentStateRegion: parentState?.region || ''
    };
  }
  return null;
}

export async function getCitiesByStateSlugAction(stateSlug: string) {
  const state = await db.states.findUnique(stateSlug);
  if (!state) return [];
  const cities = await db.cities.findByState(state.id);
  return cities.map((c: any) => ({
    ...c,
    _parentStateSlug: state.slug?.en || state.id,
    _parentStateTitle: state.name,
    _parentStateRegion: state.region || ''
  }));
}

export async function getParentDestinationsAction() {
  return await db.states.findMany();
}

export async function getStatesByParentDestinationAction(parentSlug: string) {
  return await db.states.findMany();
}

export async function getRelatedToursForDestinationAction(stateSlug: string) {
  const state = await db.states.findUnique(stateSlug);
  if (!state) return [];
  
  const allPackages = await getTourPackagesAction();
  const related = allPackages.filter((p: any) => 
    p.travelInfo?.destinations?.includes(state.id) ||
    p.travelInfo?.destinations?.includes(stateSlug)
  );
  
  if (related.length === 0) {
    const cities = await db.cities.findByState(state.id);
    const cityNames = cities.map((c: any) => c.name?.en || "").filter(Boolean);
    return allPackages.filter((p: any) => {
      const pkgText = `${p.title?.en || ""} ${p.tagline?.en || ""}`.toLowerCase();
      return cityNames.some((name: string) => pkgText.includes(name.toLowerCase()));
    }).slice(0, 6);
  }
  
  return related.slice(0, 6);
}

export async function getFoodsAction() {
  return await db.foods.findMany();
}

export async function getFoodBySlugAction(slug: string) {
  return await db.foods.findUnique(slug);
}

export async function getBlogsAction() {
  return await db.blogs.findMany();
}

export async function getBlogBySlugAction(slug: string) {
  return await db.blogs.findUnique(slug);
}

export async function getTourPackagesAction() {
  return await db.tourPackages.findMany();
}

export async function getTourPackageBySlugAction(slug: string) {
  return await db.tourPackages.findUnique(slug);
}

export async function getTestimonialsAction() {
  return await db.testimonials.findMany();
}

export async function getPagesAction() {
  return await db.pages.findMany();
}

export async function getPageByIdAction(id: string) {
  return await db.pages.findUnique(id);
}

export async function getOutboundDestinationsAction() {
  return await db.outbound.findMany();
}

export async function getOutboundDestinationBySlugAction(slug: string) {
  return await db.outbound.findUnique(slug);
}

export async function getCitiesAction() {
  return await db.cities.findMany();
}

export async function getSettingsDetailsAction() {
  const contact = await db.settings.findUnique("contact_details");
  return contact || {
    companyName: "MH India Trips",
    gstin: "08ACIFM3516H1Z7",
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    whatsapp: "919314635830",
    website: "https://mhindiatrips.com",
    address: "Jaipur & New Delhi, India",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
  };
}

export async function getNationalParksAction() {
  return await db.nationalParks.findMany();
}

export async function getNationalParkByIdAction(id: string) {
  return await db.nationalParks.findUnique(id);
}

