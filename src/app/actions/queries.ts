"use server";

import { db } from "@/lib/db";

export async function getStatesAction() {
  return await db.destinations.findMany();
}

export async function getStateBySlugAction(slug: string) {
  return await db.destinations.findUnique(slug);
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

export async function getTestimonialsAction() {
  return await db.testimonials.findMany();
}
