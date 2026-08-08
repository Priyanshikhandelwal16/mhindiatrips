import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (placeId && apiKey) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
      );
      const data = await response.json();
      
      if (data.status === "OK" && data.result) {
        const googleReviews = (data.result.reviews || []).map((rev: any, idx: number) => ({
          id: `google-${idx}`,
          name: rev.author_name,
          location: rev.relative_time_description || "Google Reviewer",
          image: rev.profile_photo_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
          quote: {
            en: rev.text,
            es: rev.text,
            pt: rev.text
          },
          stars: Math.round(rev.rating || 5)
        }));
        
        return NextResponse.json({
          source: "google",
          rating: data.result.rating || 4.9,
          totalReviews: data.result.user_ratings_total || 148,
          reviews: googleReviews.length > 0 ? googleReviews : await db.testimonials.findMany()
        });
      }
    } catch (e: any) {
      console.error("Failed to fetch Google reviews:", e);
    }
  }

  // Fallback to local testimonials cache (mocked/curated reviews)
  try {
    const reviews = await db.testimonials.findMany();
    return NextResponse.json({
      source: "local",
      rating: 4.9,
      totalReviews: 148,
      reviews
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load reviews" }, { status: 500 });
  }
}
