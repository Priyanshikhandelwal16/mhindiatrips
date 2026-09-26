/**
 * Helper utility for parsing, calculating, and formatting tour package pricing,
 * seasonal offer prices, discount percentages, and sale badges across languages.
 */

export interface PackagePriceInfo {
  isEnquireOnly: boolean;
  currencySymbol: string;
  currency: string;
  startingPrice: number;
  discountPrice: number;
  discountPercent: number;
  hasDiscount: boolean;
  offerPrice: number;
  originalPrice: number | null;
  formattedOfferPrice: string;
  formattedOriginalPrice: string | null;
  saleBadge: string | null;
  unit: string;
}

export function getCurrencySymbol(curr?: string): string {
  if (!curr) return "$";
  const c = curr.toUpperCase().trim();
  switch (c) {
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "INR":
      return "₹";
    case "BRL":
      return "R$";
    case "AUD":
      return "A$";
    case "CAD":
      return "C$";
    case "MXN":
      return "Mex$";
    case "ARS":
      return "ARS$";
    case "USD":
    default:
      return "$";
  }
}

export function getPackagePriceInfo(pkg: any, locale: string = "en"): PackagePriceInfo {
  if (!pkg) {
    return {
      isEnquireOnly: true,
      currencySymbol: "$",
      currency: "USD",
      startingPrice: 0,
      discountPrice: 0,
      discountPercent: 0,
      hasDiscount: false,
      offerPrice: 0,
      originalPrice: null,
      formattedOfferPrice: "",
      formattedOriginalPrice: null,
      saleBadge: null,
      unit: "Per Person"
    };
  }

  // 1. Check explicitly flagged enquire/on-request settings
  const enquireForPrice =
    pkg.pricing?.enquireForPrice === true ||
    pkg.enquireForPrice === true ||
    pkg.priceOnRequest === true;

  // 2. Locate locale-specific pricing object if available, falling back to English or root pricing
  const locPricing = pkg.pricing?.[locale] || pkg.pricing?.en || pkg.pricing || {};

  // 3. Extract currency code & symbol
  const currency = locPricing?.currency || pkg.pricing?.currency || pkg.currency || "USD";
  const currencySymbol = getCurrencySymbol(currency);

  // 4. Extract starting base price
  const startingPrice = Number(
    locPricing?.startingPrice ??
      locPricing?.pricePerPerson ??
      pkg.pricing?.startingPrice ??
      pkg.pricing?.pricePerPerson ??
      pkg.startingPrice ??
      pkg.pricePerPerson ??
      0
  );

  // 5. Extract discount offer price and percentage
  const discountPrice = Number(
    locPricing?.discountPrice ??
      pkg.pricing?.discountPrice ??
      pkg.discountPrice ??
      0
  );

  const discountPercent = Number(
    locPricing?.discountPercent ??
      pkg.pricing?.discountPercent ??
      pkg.discountPercent ??
      0
  );

  // 6. Extract sale badge text if configured
  let saleBadge: string | null =
    locPricing?.saleBadge ||
    pkg.pricing?.saleBadge ||
    pkg.saleBadge ||
    null;

  // 7. Calculate offer price & original starting price
  let offerPrice = startingPrice;
  let originalPrice: number | null = null;
  let hasDiscount = false;
  let calculatedPercent = discountPercent;

  if (discountPrice > 0 && startingPrice > 0 && discountPrice < startingPrice) {
    hasDiscount = true;
    offerPrice = discountPrice;
    originalPrice = startingPrice;
    if (!calculatedPercent) {
      calculatedPercent = Math.round(((startingPrice - discountPrice) / startingPrice) * 100);
    }
  } else if (discountPercent > 0 && startingPrice > 0) {
    hasDiscount = true;
    offerPrice = Math.round(startingPrice * (1 - discountPercent / 100));
    originalPrice = startingPrice;
    if (!calculatedPercent) {
      calculatedPercent = discountPercent;
    }
  }

  if (hasDiscount && !saleBadge && calculatedPercent > 0) {
    saleBadge = `${calculatedPercent}% OFF`;
  }

  const isEnquireOnly = enquireForPrice || offerPrice <= 0;
  const unit = locPricing?.unit || pkg.pricing?.unit || pkg.unit || "Per Person";

  return {
    isEnquireOnly,
    currencySymbol,
    currency,
    startingPrice,
    discountPrice,
    discountPercent: calculatedPercent,
    hasDiscount,
    offerPrice,
    originalPrice,
    formattedOfferPrice: isEnquireOnly ? "" : `${currencySymbol}${offerPrice.toLocaleString()}`,
    formattedOriginalPrice:
      hasDiscount && originalPrice ? `${currencySymbol}${originalPrice.toLocaleString()}` : null,
    saleBadge,
    unit
  };
}
