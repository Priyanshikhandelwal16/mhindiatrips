"use server";

import { db } from "@/lib/db";

export async function updateInquiryStatusAction(id: string, status: string) {
  try {
    const updated = await db.inquiries.update(id, { status });
    return { success: true, updated };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update status" };
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

export async function createBlogAction(data: any) {
  try {
    const blog = await db.blogs.create(data);
    return { success: true, blog };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create blog" };
  }
}

export async function updateBlogAction(slug: string, data: any) {
  try {
    const blog = await db.blogs.update(slug, data);
    return { success: true, blog };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update blog" };
  }
}

export async function deleteBlogAction(slug: string) {
  try {
    await db.blogs.delete(slug);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete blog" };
  }
}
