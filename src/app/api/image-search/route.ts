import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    
    if (!query) {
      return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
    }

    // Call Bing Images search (keyless, robust, and handles specific travel/food keywords)
    const response = await fetch(
      `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch search results. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const html = await response.text();
    
    // Bing images metadata is stored in <a class="iusc" m="{...}">
    const regex = /class="iusc"\s+[^>]*m="([^"]+)"/g;
    const photos: any[] = [];
    let match;
    let idx = 0;
    
    while ((match = regex.exec(html)) !== null && photos.length < 24) {
      try {
        // Decode HTML-encoded JSON string
        const decodedJson = match[1]
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>');
          
        const meta = JSON.parse(decodedJson);
        
        if (meta.murl) {
          photos.push({
            id: meta.mid || `bing-${idx}`,
            description: meta.t || meta.desc || "Web Image",
            url: meta.murl, // The original high-res image URL
            thumbnail: meta.turl || meta.murl, // Bing thumbnail
            photographer: new URL(meta.purl || "https://www.bing.com").hostname, // Source website domain
            photographerUrl: meta.purl || "https://www.bing.com",
          });
          idx++;
        }
      } catch (e) {
        // Skip malformed entries
      }
    }

    return NextResponse.json({ photos });
  } catch (error: any) {
    console.error("Image search API error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
