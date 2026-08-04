"use server";

import { db } from "@/lib/db";

export async function createInquiryAction(formData: any) {
  try {
    const inquiry = await db.inquiries.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "",
      country: formData.country || "",
      startDate: formData.startDate || "",
      duration: formData.duration ? parseInt(formData.duration) : null,
      travelers: formData.travelers ? parseInt(formData.travelers) : 1,
      destinations: formData.destinations || [],
      experience: formData.experience || "",
      message: formData.message || "",
    });
    return { success: true, inquiry };
  } catch (error: any) {
    console.error("Error creating inquiry:", error);
    return { success: false, error: error.message || "Failed to submit inquiry" };
  }
}

export async function getInquiriesAction() {
  return await db.inquiries.findMany();
}
