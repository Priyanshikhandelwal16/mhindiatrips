"use server";

import { db } from "@/lib/db";

export async function getStatesAction() {
  return await db.destinations.findMany();
}

export async function getStateBySlugAction(slug: string) {
  return await db.destinations.findUnique(slug);
}

export async function getCityBySlugAction(citySlug: string) {
  return await db.destinations.findCityBySlug(citySlug);
}

export async function getCitiesByStateSlugAction(stateSlug: string) {
  return await db.destinations.findCitiesByStateSlug(stateSlug);
}

export async function getParentDestinationsAction() {
  return await db.destinations.findMany();
}

export async function getStatesByParentDestinationAction(parentSlug: string) {
  return await db.destinations.findStatesByParentDestination(parentSlug);
}

export async function getRelatedToursForDestinationAction(stateSlug: string) {
  const state = await db.destinations.findUnique(stateSlug);
  if (!state) return [];
  
  const allPackages = await getTourPackagesAction();
  const relatedSlugs = state.relatedTours || [];
  
  let related = allPackages.filter((p: any) => 
    relatedSlugs.includes(p.slug) || 
    (p.travelInfo?.destinations?.includes(stateSlug))
  );
  
  if (related.length === 0 && state.cities?.length > 0) {
    const cityNames = state.cities.map((c: any) => c.title?.en || c.title?.es || c.title?.pt || "").filter(Boolean);
    related = allPackages.filter((p: any) => {
      const pkgText = `${p.title?.en || ""} ${p.tagline?.en || ""}`.toLowerCase();
      return cityNames.some((name: string) => pkgText.includes(name.toLowerCase()));
    }).slice(0, 3);
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
