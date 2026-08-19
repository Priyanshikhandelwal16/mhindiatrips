/**
 * Utility functions for the MH India Trips application.
 */

/**
 * Extracts a short season description (e.g. "October to March") from a longer text block.
 * Supports English, Spanish, and Portuguese patterns.
 */
export const formatBestTimeShort = (text: string): string => {
  if (!text) return "";
  
  // Clean split keywords for English, Spanish, Portuguese
  const splitKeywords = [
    " is generally", " is considered", " offers", " is ideal", " is comfortable", 
    " is suitable", " is pleasant", " is the best", " is one of",
    " suele ser", " es generalmente", " ofrece", " es considerado", " es el mejor",
    " é geralmente", " é considerado", " oferece", " é o melhor"
  ];
  
  let shortText = text;
  for (const keyword of splitKeywords) {
    const index = shortText.toLowerCase().indexOf(keyword.toLowerCase());
    if (index !== -1) {
      shortText = shortText.substring(0, index);
      break;
    }
  }
  
  shortText = shortText.trim().replace(/[.,;:]+$/, "");
  
  // If the extracted text is still too long (e.g. not matched by keywords), limit it
  if (shortText.length > 30) {
    const words = shortText.split(/\s+/);
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
  }
  
  return shortText;
};
