import { NextResponse } from "next/server";
import { getStatesAction, getStateBySlugAction } from "@/app/actions/queries";

export async function GET() {
  try {
    const allStates = await getStatesAction();
    const rajasthan = await getStateBySlugAction("rajasthan");
    
    return NextResponse.json({
      statesCount: allStates.length,
      states: allStates.map((s: any) => ({
        id: s.id,
        slug: s.slug,
        isPublished: s.isPublished
      })),
      rajasthanFound: !!rajasthan,
      rajasthanData: rajasthan
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, stack: e.stack });
  }
}
