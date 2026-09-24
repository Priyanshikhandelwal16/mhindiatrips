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
    const { stateId, cityId, data, isNew, action } = await req.json();

    if (action === "delete") {
      if (!cityId) return NextResponse.json({ success: false, error: "City ID required" }, { status: 400 });
      await db.cities.delete(cityId);
      revalidatePath("/[locale]/destinations-in-india", "layout");
      revalidatePath("/[locale]/destinos-en-india", "layout");
      revalidatePath("/[locale]/destinos-na-india", "layout");
      return NextResponse.json({ success: true });
    }

    if (!data || !data.id || !stateId) {
      return NextResponse.json({ success: false, error: "Invalid payload: stateId and city data required" }, { status: 400 });
    }

    let resultCity;
    const isActuallyNew = isNew || !(await db.cities.findUnique(data.id));

    if (isActuallyNew) {
      resultCity = await db.cities.create({ ...data, stateId });
    } else {
      resultCity = await db.cities.update(data.id, { ...data, stateId });
    }

    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");

    return NextResponse.json({ success: true, city: resultCity });
  } catch (error: any) {
    console.error("[API Admin Save City] Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to save city" }, { status: 500 });
  }
}
