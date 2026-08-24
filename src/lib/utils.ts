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

/**
 * Generates the correct localized SEO-friendly path for destination pages.
 */
export const getLocalizedDestinationsPath = (
  locale: string,
  stateSlug?: string,
  citySlug?: string
): string => {
  let segment = "destinations-in-india";
  if (locale === "es") segment = "destinos-en-india";
  else if (locale === "pt") segment = "destinos-na-india";

  let path = `/${locale}/${segment}`;
  if (stateSlug) {
    path += `/${stateSlug}`;
    if (citySlug) {
      path += `/${citySlug}`;
    }
  }
  return path;
};

/**
 * Formats rich text/blog content. Auto-detects plain text and wraps paragraphs
 * and short heading lines into standard HTML tags, while bypassing text
 * that already contains HTML.
 */
export const formatRichText = (content: string): string => {
  if (!content) return "";

  // 1. If it already contains HTML tags (e.g. <p> or <h2>), assume it's pre-rendered HTML
  const hasHtml = /<[a-z][\s\S]*>/i.test(content);
  if (hasHtml) {
    return content;
  }

  // 2. Process markdown-like formatting (bold & italics)
  let html = content;
  
  // Replace markdown bold **text** or __text__ with <strong>
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  
  // Replace markdown italic *text* or _text_ with <em>
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  // Split by double newlines to separate sections (paragraphs, headings, lists)
  const blocks = html.split(/\n\s*\n/);
  
  const formattedBlocks = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return "";

    // Explicit markdown heading checks
    if (trimmed.startsWith("### ")) {
      return `<h3 class="font-serif font-bold text-royal text-xl mt-6 mb-3">${trimmed.substring(4)}</h3>`;
    }
    if (trimmed.startsWith("## ")) {
      return `<h2 class="font-serif font-bold text-royal text-2xl border-l-4 border-gold pl-3 mt-8 mb-4">${trimmed.substring(3)}</h2>`;
    }
    if (trimmed.startsWith("# ")) {
      return `<h1 class="font-serif font-bold text-royal text-3xl mt-10 mb-5">${trimmed.substring(2)}</h1>`;
    }

    // List detection (bullet points)
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
      const items = trimmed.split(/\n[-*•]\s+/);
      const listItems = items.map(item => {
        let cleanItem = item.replace(/^[-*•]\s+/, "");
        return `<li class="text-sm text-foreground/80 leading-relaxed">${cleanItem}</li>`;
      }).join("");
      return `<ul class="list-disc pl-6 space-y-2 mb-4">${listItems}</ul>`;
    }

    // Numbered list detection
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = trimmed.split(/\n\d+\.\s+/);
      const listItems = items.map(item => {
        let cleanItem = item.replace(/^\d+\.\s+/, "");
        return `<li class="text-sm text-foreground/80 leading-relaxed">${cleanItem}</li>`;
      }).join("");
      return `<ol class="list-decimal pl-6 space-y-2 mb-4">${listItems}</ol>`;
    }

    // Heading Auto-Detection:
    // A block is treated as an h2 heading if:
    // - It is short (less than 100 characters)
    // - It does not end with common sentence ending punctuation (. or ? or !)
    // - It is a single line (no newlines inside the block itself)
    const isShort = trimmed.length < 100;
    const hasPunctuation = /[.?!]$/.test(trimmed);
    const hasMultipleLines = trimmed.includes("\n");
    if (isShort && !hasPunctuation && !hasMultipleLines) {
      return `<h2 class="font-serif font-bold text-royal text-2xl border-l-4 border-gold pl-3 mt-8 mb-4">${trimmed}</h2>`;
    }

    // Regular Paragraph: replace single newlines inside with <br/> to keep formatting
    const contentWithBreaks = trimmed.replace(/\n/g, "<br/>");
    return `<p class="text-[15px] text-[#1B1B1B]/70 leading-[1.9] font-light mb-4">${contentWithBreaks}</p>`;
  });

  return formattedBlocks.filter(Boolean).join("\n");
};

