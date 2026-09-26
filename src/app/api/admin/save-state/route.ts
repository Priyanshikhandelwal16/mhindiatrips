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
    const { stateId, data, isNew, action } = await req.json();

    if (action === "delete") {
      if (!stateId) return NextResponse.json({ success: false, error: "State ID required" }, { status: 400 });
      const cities = await db.cities.findByState(stateId);
      if (cities.length > 0) {
        return NextResponse.json({ success: false, error: "Cannot delete state with nested cities" }, { status: 400 });
      }
      await db.states.delete(stateId);
      revalidatePath("/[locale]/destinations-in-india", "layout");
      revalidatePath("/[locale]/destinos-en-india", "layout");
      revalidatePath("/[locale]/destinos-na-india", "layout");
      return NextResponse.json({ success: true });
    }

    if (!data || !data.id) {
      return NextResponse.json({ success: false, error: "Invalid payload: State data required" }, { status: 400 });
    }

    let resultState;
    const existing = await db.states.findUnique(data.id);
    const isActuallyNew = isNew || !existing;

    if (isActuallyNew) {
      resultState = await db.states.create(data);
    } else {
      resultState = await db.states.update(data.id, data);
    }

    revalidatePath("/[locale]/destinations-in-india", "layout");
    revalidatePath("/[locale]/destinos-en-india", "layout");
    revalidatePath("/[locale]/destinos-na-india", "layout");
    revalidatePath(`/[locale]/destinations-in-india/${data.id}`, "page");
    revalidatePath(`/[locale]/destinos-en-india/${data.id}`, "page");
    revalidatePath(`/[locale]/destinos-na-india/${data.id}`, "page");

    return NextResponse.json({ success: true, state: resultState });
  } catch (error: any) {
    console.error("[API Admin Save State] Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to save state" }, { status: 500 });
  }
}
