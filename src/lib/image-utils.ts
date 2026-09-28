const HD_LOCAL_MAP: Record<string, string> = {
  "/images/taj_mahal_sunrise.png": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=82",
  "/images/Jaipur.jpg": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=82",
  "/images/Jaisalmer.jpg": "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=1600&q=82",
  "/images/Udaipur.jpg": "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1600&q=82",
  "/images/rajasthan_fort_sunset.png": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1600&q=82",
  "/images/kerala_backwaters_houseboat.png": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=82",
  "/images/munnar.jpg": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=82",
  "/images/varanasi_ghats_aarti.png": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=82",
  "/images/ranthambore_tiger_safari.png": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=82",
  "/images/goa 2.jpg": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=82",
  "/images/goa.jpg": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=82",
  "/images/destination_fallback.jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=82",
  "/images/luxury_palace_train.png": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1600&q=82",
  "/images/golden_triangle.png": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=82",
  "/images/indian_cuisine_feast.png": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=82",
  "/images/rajasthan.jpg": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=82",
  "/images/kerala.jpg": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=82",
  "/images/agra.jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=82",
  "/images/delhi.jpg": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=82",
  "/images/mumbai.jpg": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=82",
  "/images/varanasi.jpg": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=82",
  "/images/khajuraho.jpg": "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1600&q=82",
  "/images/ladakh.jpg": "https://images.unsplash.com/photo-1581791538302-03537098997f?auto=format&fit=crop&w=1600&q=82",
  "/images/madhya pradesh.jpg": "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1600&q=82",
  "/images/chhatisgarh.jpg": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1600&q=82",
  "/images/gujarat.jpg": "https://images.unsplash.com/photo-1609828913642-c55f7659f710?auto=format&fit=crop&w=1600&q=82",
  "/images/himachal pradesh.jpg": "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1600&q=82",
  "/images/uttarakhand.jpg": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1600&q=82",
  "/images/west bengal.jpg": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=82",
};

export function getHighResImageUrl(url?: string): string {
  const fallback = "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=82";
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

  // Optimize Unsplash image resolution to 1600px HD with WebP formatting & 82% quality (fast loading!)
  if (cleanUrl.includes("unsplash.com")) {
    cleanUrl = cleanUrl.replace(/([?&])h=\d+/g, "");
    
    if (/([?&])w=\d+/.test(cleanUrl)) {
      cleanUrl = cleanUrl.replace(/([?&])w=\d+/, "$1w=1600");
    } else {
      cleanUrl += (cleanUrl.includes("?") ? "&" : "?") + "w=1600";
    }

    if (/([?&])q=\d+/.test(cleanUrl)) {
      cleanUrl = cleanUrl.replace(/([?&])q=\d+/, "$1q=82");
    } else {
      cleanUrl += "&q=82";
    }

    if (!cleanUrl.includes("auto=format")) {
      cleanUrl += "&auto=format&fit=crop";
    }
    return cleanUrl;
  }

  // Optimize Cloudinary URLs
  if (cleanUrl.includes("cloudinary.com")) {
    if (cleanUrl.includes("/upload/")) {
      cleanUrl = cleanUrl.replace(/\/upload\/(?:[a-z]_[^/]+,)*[a-z]_[^/]+\//gi, "/upload/");
      cleanUrl = cleanUrl.replace(/\/upload\//i, "/upload/f_auto,q_auto:good,w_1600/");
    }
    return cleanUrl;
  }

  return cleanUrl;
}

export function getOptimizedImageUrl(url?: string, width = 800): string {
  const fullRes = getHighResImageUrl(url);
  if (!fullRes || typeof fullRes !== "string") return fullRes;
  
  if (fullRes.includes("unsplash.com")) {
    return fullRes.replace(/([?&])w=\d+/, `$1w=${width}`).replace(/([?&])q=\d+/, "$1q=80");
  }

  if (fullRes.includes("cloudinary.com")) {
    return fullRes.replace(/w_\d+/, `w_${width}`);
  }

  return fullRes;
}
