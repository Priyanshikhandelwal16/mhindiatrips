"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createAdminSession, clearAdminSession, requireAdminSession, verifyAdminSession } from "@/lib/admin-session";

function revalidateAllPages() {
  try {
    revalidatePath("/", "layout");
    revalidatePath("/[locale]", "layout");
  } catch (e) {}
}

export async function updateInquiryStatusAction(id: string, status: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const updated = await db.inquiries.update(id, { status });
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update status" };
  }
}

export async function updateInquiryAction(id: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const updated = await db.inquiries.update(id, data);
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update inquiry" };
  }
}

export async function deleteInquiryAction(id: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.inquiries.delete(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete" };
  }
}

// BLOG ACTIONS
export async function createBlogAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const blog = await db.blogs.create(data);
    revalidatePath("/[locale]/blog", "layout");
    return { success: true, blog };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create blog" };
  }
}

export async function updateBlogAction(slug: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

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
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

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
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const testimonial = await db.testimonials.create(data);
    revalidatePath("/[locale]", "page");
    return { success: true, testimonial };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create testimonial" };
  }
}

export async function updateTestimonialAction(id: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const testimonial = await db.testimonials.update(id, data);
    revalidatePath("/[locale]", "page");
    return { success: true, testimonial };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update testimonial" };
  }
}

export async function deleteTestimonialAction(id: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.testimonials.delete(id);
    revalidatePath("/[locale]", "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete testimonial" };
  }
}

// TOUR PACKAGE ACTIONS
export async function createTourPackageAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const pkg = await db.tourPackages.create(data);
    revalidatePath("/[locale]/packages", "layout");
    revalidatePath("/[locale]/international-trips", "layout");
    revalidatePath("/[locale]", "layout");
    return { success: true, pkg };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create package" };
  }
}

export async function updateTourPackageAction(slug: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const pkg = await db.tourPackages.update(slug, data);
    revalidatePath("/[locale]/packages", "layout");
    revalidatePath(`/[locale]/packages/${slug}`, "page");
    revalidatePath("/[locale]/international-trips", "layout");
    revalidatePath("/[locale]", "layout");
    return { success: true, pkg };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update package" };
  }
}

export async function deleteTourPackageAction(slug: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.tourPackages.delete(slug);
    revalidatePath("/[locale]/packages", "layout");
    revalidatePath("/[locale]/international-trips", "layout");
    revalidatePath("/[locale]", "layout");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete package" };
  }
}

// FOOD / CUISINE ACTIONS
export async function createFoodAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const food = await db.foods.create(data);
    revalidatePath("/[locale]/food", "layout");
    return { success: true, food };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create food catalog item" };
  }
}

export async function updateFoodAction(slug: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const food = await db.foods.update(slug, data);
    revalidatePath("/[locale]/food", "layout");
    revalidatePath(`/[locale]/food/${slug}`, "page");
    return { success: true, food };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update food catalog item" };
  }
}

export async function deleteFoodAction(slug: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.foods.delete(slug);
    revalidatePath("/[locale]/food", "layout");
    revalidatePath(`/[locale]/food/${slug}`, "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete food catalog item" };
  }
}

// DESTINATION / STATE ACTIONS
export async function createStateAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const state = await db.states.create(data);
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    return { success: true, state };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create destination state" };
  }
}

export async function updateStateAction(id: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const state = await db.states.update(id, data);
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    revalidatePath(`/[locale]/destinations-in-india/${id}`, "page");
    revalidatePath(`/[locale]/destinos-en-india/${id}`, "page");
    revalidatePath(`/[locale]/destinos-na-india/${id}`, "page");
    return { success: true, state };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update destination state" };
  }
}

export async function deleteStateAction(id: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const cities = await db.cities.findByState(id);
    if (cities.length > 0) {
      return { success: false, error: "Cannot delete state because it has nested cities. Please delete the nested cities first." };
    }
    await db.states.delete(id);
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete destination state" };
  }
}

export async function updateStateStatusAction(id: string, status: "published" | "draft" | "unpublished") {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const updated = await db.states.update(id, { isPublished: status === "published" });
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update destination status" };
  }
}

export async function createCityAction(stateId: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const cityId = data.id || Math.random().toString(36).substring(2, 11);
    const newCity = {
      ...data,
      id: cityId,
      stateId,
      isPublished: data.isPublished !== undefined ? data.isPublished : true
    };
    const city = await db.cities.create(newCity);
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    return { success: true, city };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create city" };
  }
}

export async function updateCityAction(stateId: string, cityId: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const city = await db.cities.update(cityId, { ...data, stateId });
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    return { success: true, city };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update city" };
  }
}

export async function deleteCityAction(stateId: string, cityId: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.cities.delete(cityId);
    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete city" };
  }
}

export async function previewDestinationAction(id: string) {
  try {
    const state = await db.states.findUnique(id);
    if (!state) return { success: false, error: "Destination not found" };
    return { success: true, previewUrl: `/en/destinations-in-india/${state.id}`, data: state };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to preview destination" };
  }
}

// PAGE ACTIONS
export async function createPageAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const page = await db.pages.create(data);
    revalidateAllPages();
    revalidatePath("/[locale]/[slug]", "page");
    revalidatePath("/[locale]", "layout");
    return { success: true, page };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create page" };
  }
}

export async function updatePageAction(id: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const page = await db.pages.update(id, data);
    revalidateAllPages();
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
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.pages.delete(id);
    revalidateAllPages();
    revalidatePath("/[locale]", "layout");
    revalidatePath(`/[locale]/${id}`, "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete page" };
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
        companyName: "MH India Trips",
        gstin: "08AABCM1234F1Z9",
        phone: "+91 9829989187",
        email: "mhindiatrips@gmail.com",
        whatsapp: "919829989187",
        website: "https://mhindiatrips.com",
        address: "Jaipur & New Delhi, India",
        hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
        facebook: "https://www.facebook.com/viajeaindiaconindiasinvitation/",
        twitter: "https://x.com/abhilash01",
        instagram: "https://www.instagram.com/mhindiatrips/",
        logoHeightMobile: "48",
        logoHeightDesktop: "56",
        copyright: "2026 MH India Trips. Crafted for luxury.",
        designedBy: "JAINUP | Growth System"
      }
    };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to fetch settings" };
  }
}

export async function updateContactDetailsAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const updated = await db.settings.update("contact_details", data);
    revalidateAllPages();
    revalidatePath("/[locale]", "layout");
    revalidatePath("/[locale]/contact", "page");
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update contact details" };
  }
}

export async function createOutboundAction(data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const item = await db.outbound.create(data);
    revalidateAllPages();
    revalidatePath("/[locale]/international-trips", "layout");
    return { success: true, item };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create outbound destination" };
  }
}

export async function updateOutboundAction(slug: string, data: any) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    const updated = await db.outbound.update(slug, data);
    revalidateAllPages();
    revalidatePath("/[locale]/international-trips", "layout");
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update outbound destination" };
  }
}

export async function deleteOutboundAction(slug: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

  try {
    await db.outbound.delete(slug);
    revalidateAllPages();
    revalidatePath("/[locale]/international-trips", "layout");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete outbound destination" };
  }
}

export async function updateAdminPasswordAction(newPassword: string) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return authCheck;

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
      // Issue secure HttpOnly session cookie on the server
      await createAdminSession(adminEmail);
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to authenticate" };
  }
}

export async function logoutAdminAction() {
  await clearAdminSession();
  return { success: true };
}

export async function checkAdminSessionAction() {
  const session = await verifyAdminSession();
  if (session.authenticated && session.user) {
    return { success: true, user: session.user };
  }
  return { success: false, error: "Not authenticated" };
}
