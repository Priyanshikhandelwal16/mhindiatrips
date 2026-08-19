import { NextResponse } from "next/server";
import { getStatesAction } from "@/app/actions/queries";

export async function GET() {
  try {
    // Call the EXACT same server action that admin panel uses
    const states = await getStatesAction();
    
    if (!states || !Array.isArray(states)) {
      return NextResponse.json({ error: "getStatesAction returned non-array", type: typeof states, value: String(states).substring(0, 100) });
    }
    
    const goa = states.find((s: any) => s.slug === "goa");
    
    return NextResponse.json({
      totalStates: states.length,
      stateNames: states.map((s: any) => s.slug),
      goaCities: goa?.cities?.length || 0,
      goaCitiesDetail: goa?.cities?.map((c: any) => ({
        slug: c.slug,
        title: c.title?.en,
        hasOverview: !!(c.overview?.en),
        thingsToDo: c.thingsToDo?.length || 0,
        faqs: c.faqs?.length || 0,
        hotels: c.hotels?.length || 0,
        experiences: c.experiences?.length || 0,
        highlights: c.highlights?.length || 0,
      })) || []
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
