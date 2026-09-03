"use server";

import { db } from "@/lib/db";
import { sendInquiryNotification, sendInquiryConfirmation } from "@/lib/email";

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

    // Send email notifications (non-blocking - don't fail the inquiry if email fails)
    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      destination: Array.isArray(formData.destinations) ? formData.destinations.join(", ") : formData.destinations || undefined,
      travelDates: formData.startDate || undefined,
      travelers: formData.travelers ? String(formData.travelers) : undefined,
      message: formData.message || undefined,
      budget: formData.experience || undefined,
    };

    // Send both emails in parallel and await completion to prevent container shutdown on Netlify
    let emailSent = true;
    let emailError = null;
    try {
      const emailResults = await Promise.all([
        sendInquiryNotification(emailData),
        sendInquiryConfirmation(emailData),
      ]);
      const fail = emailResults.find(r => !r.success);
      if (fail) {
        emailSent = false;
        emailError = fail.error;
      }
    } catch (err: any) {
      emailSent = false;
      emailError = err.message || err;
      console.error("Email sending failed:", err);
    }

    return { success: true, inquiry, emailSent, emailError };
  } catch (error: any) {
    console.error("Error creating inquiry:", error);
    return { success: false, error: error.message || "Failed to submit inquiry" };
  }
}

import { requireAdminSession } from "@/lib/admin-session";

export async function getInquiriesAction() {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) return [];
  return await db.inquiries.findMany();
}
