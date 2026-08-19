import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
    const exists = fs.existsSync(filePath);
    
    if (!exists) {
      return NextResponse.json({ error: "states.json not found", path: filePath });
    }
    
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    
    const goa = data.find((s: any) => s.slug === "goa");
    
    return NextResponse.json({
      totalStates: data.length,
      fileSize: raw.length,
      goaCities: goa?.cities?.length || 0,
      goaCitiesDetail: goa?.cities?.map((c: any) => ({
        slug: c.slug,
        title: c.title?.en,
        thingsToDo: c.thingsToDo?.length || 0,
        faqs: c.faqs?.length || 0,
        hotels: c.hotels?.length || 0,
        experiences: c.experiences?.length || 0,
        travelTips: c.travelTips?.length || 0,
        highlights: c.highlights?.length || 0,
        gettingAround: c.gettingAround?.length || 0,
        hasOverview: !!c.overview?.en,
      })) || []
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
