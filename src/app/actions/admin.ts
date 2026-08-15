"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateInquiryStatusAction(id: string, status: string) {
  try {
    const updated = await db.inquiries.update(id, { status });
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update status" };
  }
}

export async function updateInquiryAction(id: string, data: any) {
  try {
    const updated = await db.inquiries.update(id, data);
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update inquiry" };
  }
}

export async function deleteInquiryAction(id: string) {
  try {
    await db.inquiries.delete(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete" };
  }
}

// BLOG ACTIONS
export async function createBlogAction(data: any) {
  try {
    const blog = await db.blogs.create(data);
    revalidatePath("/[locale]/blog", "layout");
    return { success: true, blog };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create blog" };
  }
}

export async function updateBlogAction(slug: string, data: any) {
  try {
    const blog = await db.blogs.update(slug, data);
    revalidatePath("/[locale]/blog", "layout");
    revalidatePath(`/[locale]/blog/${slug}`, "page");
    return { success: true, blog };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update blog" };
  }
}

export async function deleteBlogAction(slug: string) {
  try {
    await db.blogs.delete(slug);
    revalidatePath("/[locale]/blog", "layout");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete blog" };
  }
}

// TESTIMONIAL ACTIONS
export async function createTestimonialAction(data: any) {
  try {
    const testimonial = await db.testimonials.create(data);
    revalidatePath("/[locale]", "page");
    return { success: true, testimonial };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create testimonial" };
  }
}

// TOUR PACKAGE ACTIONS
export async function createTourPackageAction(data: any) {
  try {
    const pkg = await db.tourPackages.create(data);
    revalidatePath("/[locale]/packages", "page");
    return { success: true, pkg };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create package" };
  }
}

export async function updateTourPackageAction(slug: string, data: any) {
  try {
    const pkg = await db.tourPackages.update(slug, data);
    revalidatePath("/[locale]/packages", "page");
    return { success: true, pkg };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update package" };
  }
}

export async function deleteTourPackageAction(slug: string) {
  try {
    await db.tourPackages.delete(slug);
    revalidatePath("/[locale]/packages", "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete package" };
  }
}

// FOOD / CUISINE ACTIONS
export async function createFoodAction(data: any) {
  try {
    const food = await db.foods.create(data);
    revalidatePath("/[locale]/food", "layout");
    return { success: true, food };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create food catalog item" };
  }
}

export async function updateFoodAction(slug: string, data: any) {
  try {
    const food = await db.foods.update(slug, data);
    revalidatePath("/[locale]/food", "layout");
    revalidatePath(`/[locale]/food/${slug}`, "page");
    return { success: true, food };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update food catalog item" };
  }
}

// DESTINATION / STATE ACTIONS
export async function createStateAction(data: any) {
  try {
    const state = await db.destinations.create(data);
    revalidatePath("/[locale]/destinations", "layout");
    return { success: true, state };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create destination state" };
  }
}

export async function updateStateAction(slug: string, data: any) {
  try {
    const state = await db.destinations.update(slug, data);
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${slug}`, "page");
    return { success: true, state };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update destination state" };
  }
}

// PAGE ACTIONS
export async function createPageAction(data: any) {
  try {
    const page = await db.pages.create(data);
    revalidatePath("/[locale]/[slug]", "page");
    revalidatePath("/[locale]", "layout");
    return { success: true, page };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create page" };
  }
}

export async function updatePageAction(id: string, data: any) {
  try {
    const page = await db.pages.update(id, data);
    revalidatePath("/[locale]", "layout");
    revalidatePath(`/[locale]/${id}`, "page");
    revalidatePath(`/[locale]/about`, "page");
    revalidatePath(`/[locale]/contact`, "page");
    revalidatePath(`/[locale]/faq`, "page");
    revalidatePath(`/[locale]/gallery`, "page");
    revalidatePath(`/[locale]/monuments`, "page");
    revalidatePath(`/[locale]/privacy`, "page");
    revalidatePath(`/[locale]/terms`, "page");
    return { success: true, page };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update page" };
  }
}

export async function deletePageAction(id: string) {
  try {
    await db.pages.delete(id);
    revalidatePath("/[locale]", "layout");
    revalidatePath(`/[locale]/${id}`, "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete page" };
  }
}

export async function deleteStateAction(slug: string) {
  try {
    await db.destinations.delete(slug);
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${slug}`, "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete destination state" };
  }
}

export async function updateStateStatusAction(slug: string, status: "published" | "draft" | "unpublished") {
  try {
    const updated = await db.destinations.update(slug, { status });
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${slug}`, "page");
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update destination status" };
  }
}

export async function createCityAction(stateSlug: string, data: any) {
  try {
    const citySlug = data.slug || Math.random().toString(36).substring(2, 11);
    const newCity = {
      slug: citySlug,
      _parentStateSlug: stateSlug,
      status: data.status || "published",
      ...data
    };
    // Update the parent state to include this city
    const state = await db.destinations.findUnique(stateSlug);
    if (!state) return { success: false, error: "Parent state not found" };
    const updatedCities = [...(state.cities || []), newCity];
    const updated = await db.destinations.update(stateSlug, { cities: updatedCities });
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${stateSlug}`, "page");
    return { success: true, city: newCity, state: updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create city" };
  }
}

export async function updateCityAction(stateSlug: string, citySlug: string, data: any) {
  try {
    const state = await db.destinations.findUnique(stateSlug);
    if (!state) return { success: false, error: "Parent state not found" };
    const cities = (state.cities || []).map((c: any) => {
      if (c.slug === citySlug) {
        return { ...c, ...data, _parentStateSlug: stateSlug };
      }
      return c;
    });
    const updated = await db.destinations.update(stateSlug, { cities });
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${stateSlug}`, "page");
    revalidatePath(`/[locale]/destinations/${stateSlug}/${citySlug}`, "page");
    return { success: true, city: data, state: updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update city" };
  }
}

export async function deleteCityAction(stateSlug: string, citySlug: string) {
  try {
    const state = await db.destinations.findUnique(stateSlug);
    if (!state) return { success: false, error: "Parent state not found" };
    const updatedCities = (state.cities || []).filter((c: any) => c.slug !== citySlug);
    const updated = await db.destinations.update(stateSlug, { cities: updatedCities });
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${stateSlug}`, "page");
    revalidatePath(`/[locale]/destinations/${stateSlug}/${citySlug}`, "page");
    return { success: true, state: updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete city" };
  }
}

export async function previewDestinationAction(slug: string) {
  try {
    const state = await db.destinations.findUnique(slug);
    if (!state) return { success: false, error: "Destination not found" };
    return { success: true, previewUrl: `/destinations/${slug}`, data: state };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to preview destination" };
  }
}

export async function getDestinationStatusAction(slug: string) {
  try {
    const state = await db.destinations.findUnique(slug);
    if (!state) return { success: false, error: "Destination not found" };
    return { success: true, status: state.status || "published" };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to get status" };
  }
}

export async function duplicateStateAction(slug: string) {
  try {
    const state = await db.destinations.findUnique(slug);
    if (!state) return { success: false, error: "Destination not found" };
    const newSlug = `${slug}-copy-${Date.now().toString(36)}`;
    const duplicated = {
      ...state,
      slug: newSlug,
      title: { ...state.title, en: `${state.title.en} (Copy)` },
      status: "draft",
      cities: (state.cities || []).map((c: any) => ({ ...c, slug: `${c.slug}-copy` }))
    };
    delete duplicated.id;
    const created = await db.destinations.create(duplicated);
    revalidatePath("/[locale]/destinations", "layout");
    return { success: true, state: created };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to duplicate destination" };
  }
}

export async function duplicateCityAction(stateSlug: string, citySlug: string) {
  try {
    const state = await db.destinations.findUnique(stateSlug);
    if (!state) return { success: false, error: "Parent state not found" };
    const city = state.cities?.find((c: any) => c.slug === citySlug);
    if (!city) return { success: false, error: "City not found" };
    const newSlug = `${citySlug}-copy-${Date.now().toString(36)}`;
    const duplicated = {
      ...city,
      slug: newSlug,
      title: { ...city.title, en: `${city.title.en} (Copy)` },
      status: "draft",
      _parentStateSlug: stateSlug
    };
    const updatedCities = (state.cities || []).map((c: any) => {
      if (c.slug === citySlug) return duplicated;
      return c;
    });
    const updated = await db.destinations.update(stateSlug, { cities: updatedCities });
    revalidatePath("/[locale]/destinations", "layout");
    revalidatePath(`/[locale]/destinations/${stateSlug}`, "page");
    return { success: true, city: duplicated, state: updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to duplicate city" };
  }
}

export async function deleteFoodAction(slug: string) {
  try {
    await db.foods.delete(slug);
    revalidatePath("/[locale]/food", "layout");
    revalidatePath(`/[locale]/food/${slug}`, "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete food catalog item" };
  }
}

export async function updateTestimonialAction(id: string, data: any) {
  try {
    const testimonial = await db.testimonials.update(id, data);
    revalidatePath("/[locale]", "page");
    return { success: true, testimonial };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update testimonial" };
  }
}

export async function deleteTestimonialAction(id: string) {
  try {
    await db.testimonials.delete(id);
    revalidatePath("/[locale]", "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete testimonial" };
  }
}

// SETTINGS ACTIONS
export async function getSettingsAction() {
  try {
    const contact = await db.settings.findUnique("contact_details");
    return { 
      success: true, 
      contactDetails: contact || {
        id: "contact_details",
        phone: "+91 9782001006",
        email: "info@mhindiatrips.com",
        whatsapp: "919782001006",
        address: "New Delhi, India",
        hours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
      }
    };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to fetch settings" };
  }
}

export async function updateContactDetailsAction(data: any) {
  try {
    const updated = await db.settings.update("contact_details", data);
    revalidatePath("/[locale]", "layout");
    revalidatePath("/[locale]/contact", "page");
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update contact details" };
  }
}

export async function updateAdminPasswordAction(newPassword: string) {
  try {
    const updated = await db.settings.update("admin_credentials", { customPassword: newPassword });
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update password" };
  }
}

export async function verifyAdminCredentialsAction(emailInput: string, passwordInput: string) {
  try {
    const adminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@mhindiatrips.com").replace(/['"]/g, "").trim();
    if (emailInput.trim() !== adminEmail) {
      return { success: false, error: "Invalid credentials" };
    }

    // Check custom password from database
    const creds = await db.settings.findUnique("admin_credentials");
    const allowedPassword = creds?.customPassword || (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin").replace(/['"]/g, "").trim();

    if (passwordInput.trim() === allowedPassword) {
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to authenticate" };
  }
}
