export function getHighResImageUrl(url?: string): string {
  if (!url) return "/images/destination_fallback.jpg";
  if (typeof url !== "string") return "/images/destination_fallback.jpg";

  let cleanUrl = url.trim();

  // Upgrade Unsplash low-res width/quality parameters (e.g. w=800 -> w=1920, q=80 -> q=95)
  if (cleanUrl.includes("unsplash.com")) {
    if (cleanUrl.includes("w=")) {
      cleanUrl = cleanUrl.replace(/w=\d+/, "w=1920");
    } else {
      cleanUrl += (cleanUrl.includes("?") ? "&" : "?") + "w=1920";
    }
    if (cleanUrl.includes("q=")) {
      cleanUrl = cleanUrl.replace(/q=\d+/, "q=95");
    } else {
      cleanUrl += "&q=95";
    }
  }

  // Remove Cloudinary low-res thumbnail transformations if present
  if (cleanUrl.includes("cloudinary.com")) {
    cleanUrl = cleanUrl.replace(/\/c_thumb,w_\d+,h_\d+\//, "/").replace(/\/w_\d+,h_\d+,c_\w+\//, "/");
  }

  return cleanUrl;
}
