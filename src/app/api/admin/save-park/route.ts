import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminSession } from "@/lib/admin-session";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const authCheck = await requireAdminSession();
  if (!authCheck.success) {
    return NextResponse.json({ success: false, error: "Not authenticated as admin" }, { status: 401 });
  }

  try {
    const { parkId, payload, isNew, action } = await req.json();

    if (action === "delete") {
      if (!parkId) return NextResponse.json({ success: false, error: "Park ID required" }, { status: 400 });
      await db.nationalParks.delete(parkId);
      revalidatePath("/[locale]/national-parks", "layout");
      return NextResponse.json({ success: true });
    }

    if (!payload || !parkId) {
      return NextResponse.json({ success: false, error: "Invalid payload: parkId and park data required" }, { status: 400 });
    }

    let resultPark;
    const existing = await db.nationalParks.findUnique(parkId);
    if (isNew || !existing) {
      resultPark = await db.nationalParks.create(payload);
    } else {
      resultPark = await db.nationalParks.update(parkId, payload);
    }

    revalidatePath("/[locale]/national-parks", "layout");

    return NextResponse.json({ success: true, park: resultPark });
  } catch (error: any) {
    console.error("[API Admin Save Park] Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to save national park" }, { status: 500 });
  }
}
