import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    
    if (!query) {
      return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
    }

    // Call Unsplash public napi search
    const response = await fetch(
      `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=24`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch from stock source. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    const photos = (data.results || []).map((photo: any) => ({
      id: photo.id,
      description: photo.description || photo.alt_description || "Stock Image",
      url: photo.urls?.regular,
      thumbnail: photo.urls?.small || photo.urls?.thumb,
      photographer: photo.user?.name || "Unsplash Photographer",
      photographerUrl: photo.user?.links?.html ? `${photo.user.links.html}?utm_source=mhindiatrips&utm_medium=referral` : "https://unsplash.com",
    }));

    return NextResponse.json({ photos });
  } catch (error: any) {
    console.error("Image search API error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
