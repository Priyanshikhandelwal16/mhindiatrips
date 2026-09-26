const HD_LOCAL_MAP: Record<string, string> = {
  "/images/taj_mahal_sunrise.png": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2560&q=95",
  "/images/Jaipur.jpg": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2560&q=95",
  "/images/Jaisalmer.jpg": "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=2560&q=95",
  "/images/Udaipur.jpg": "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=2560&q=95",
  "/images/rajasthan_fort_sunset.png": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=2560&q=95",
  "/images/kerala_backwaters_houseboat.png": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2560&q=95",
  "/images/munnar.jpg": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2560&q=95",
  "/images/varanasi_ghats_aarti.png": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2560&q=95",
  "/images/ranthambore_tiger_safari.png": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2560&q=95",
  "/images/goa 2.jpg": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2560&q=95",
  "/images/goa.jpg": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2560&q=95",
  "/images/destination_fallback.jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2560&q=95",
  "/images/luxury_palace_train.png": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=2560&q=95",
  "/images/golden_triangle.png": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2560&q=95",
  "/images/indian_cuisine_feast.png": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=2560&q=95",
  "/images/rajasthan.jpg": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2560&q=95",
  "/images/kerala.jpg": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2560&q=95",
  "/images/agra.jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2560&q=95",
  "/images/delhi.jpg": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2560&q=95",
  "/images/mumbai.jpg": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2560&q=95",
  "/images/varanasi.jpg": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2560&q=95",
  "/images/khajuraho.jpg": "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=2560&q=95",
  "/images/ladakh.jpg": "https://images.unsplash.com/photo-1581791538302-03537098997f?auto=format&fit=crop&w=2560&q=95",
  "/images/madhya pradesh.jpg": "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=2560&q=95",
  "/images/chhatisgarh.jpg": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=2560&q=95",
  "/images/gujarat.jpg": "https://images.unsplash.com/photo-1609828913642-c55f7659f710?auto=format&fit=crop&w=2560&q=95",
  "/images/himachal pradesh.jpg": "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=2560&q=95",
  "/images/uttarakhand.jpg": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2560&q=95",
  "/images/west bengal.jpg": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2560&q=95",
};

export function getHighResImageUrl(url?: string): string {
  const fallback = "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2560&q=95";
  if (!url || typeof url !== "string") return fallback;

  let cleanUrl = url.trim();
  if (!cleanUrl) return fallback;

  // Check direct HD map for local paths
  if (HD_LOCAL_MAP[cleanUrl]) {
    return HD_LOCAL_MAP[cleanUrl];
  }

  // Handle case-insensitive match for HD_LOCAL_MAP
  const lowerUrl = cleanUrl.toLowerCase();
  for (const [key, val] of Object.entries(HD_LOCAL_MAP)) {
    if (key.toLowerCase() === lowerUrl) {
      return val;
    }
  }

  // Upgrade Unsplash image resolution to 2560px Ultra-HD with 95% quality
  if (cleanUrl.includes("unsplash.com")) {
    // Strip restrictive height parameters
    cleanUrl = cleanUrl.replace(/([?&])h=\d+/g, "");
    
    // Set or replace width parameter to 2560
    if (/([?&])w=\d+/.test(cleanUrl)) {
      cleanUrl = cleanUrl.replace(/([?&])w=\d+/, "$1w=2560");
    } else {
      cleanUrl += (cleanUrl.includes("?") ? "&" : "?") + "w=2560";
    }

    // Set or replace quality parameter to 95
    if (/([?&])q=\d+/.test(cleanUrl)) {
      cleanUrl = cleanUrl.replace(/([?&])q=\d+/, "$1q=95");
    } else {
      cleanUrl += "&q=95";
    }

    if (!cleanUrl.includes("auto=format")) {
      cleanUrl += "&auto=format&fit=crop";
    }
    return cleanUrl;
  }

  // Optimize & upscale Cloudinary URLs to serve 4K resolution (2560px width)
  if (cleanUrl.includes("cloudinary.com")) {
    // Strip existing restrictive transform flags e.g. w_400, c_thumb, q_auto:low, etc.
    if (cleanUrl.includes("/upload/")) {
      // Remove transformation string if placed after /upload/
      cleanUrl = cleanUrl.replace(/\/upload\/(?:[a-z]_[^/]+,)*[a-z]_[^/]+\//gi, "/upload/");
      // Insert top quality 4K Ultra-HD parameters
      cleanUrl = cleanUrl.replace(/\/upload\//i, "/upload/f_auto,q_auto:best,w_2560/");
    }
    return cleanUrl;
  }

  return cleanUrl;
}

