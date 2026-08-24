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

  // Helper to identify Main Headings (Introduction, Key Insights, Travel Tips)
  const isMainHeading = (text: string): boolean => {
    const clean = text.toLowerCase().replace(/[:.!?]$/, "").trim();
    const mainHeadings = [
      "introduction", "introducción", "introdução",
      "key insights", "perspectivas clave", "principais insights", "key insight",
      "travel tips", "consejos de viaje", "dicas de viagem", "travel tip"
    ];
    return mainHeadings.includes(clean) || mainHeadings.some(h => clean.startsWith(h));
  };

  // 2. Process markdown-like formatting (bold & italics)
  let html = content;
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  // Split by newlines (single or multiple) to process line-by-line
  const rawLines = html.split(/\r?\n/);
  const result: string[] = [];
  
  let currentListType: 'ul' | 'ol' | null = null;
  let currentParagraphLines: string[] = [];
  let inBulletSection = false;

  const shouldAutoBullet = (text: string): boolean => {
    const clean = text.toLowerCase().replace(/[:.!?]$/, "").trim();
    const bulletSections = [
      "travel tips", "consejos de viaje", "dicas de viagem", "travel tip",
      "key insights", "perspectivas clave", "principais insights", "key insight"
    ];
    return bulletSections.includes(clean) || bulletSections.some(h => clean.startsWith(h));
  };

  const closeList = () => {
    if (currentListType === 'ul') {
      result.push('</ul>');
    } else if (currentListType === 'ol') {
      result.push('</ol>');
    }
    currentListType = null;
  };

  const closeParagraph = () => {
    if (currentParagraphLines.length > 0) {
      const paragraphText = currentParagraphLines.join('<br/>').trim();
      if (paragraphText) {
        result.push(`<p class="text-[15px] text-[#1B1B1B]/70 leading-[1.9] font-light mb-4">${paragraphText}</p>`);
      }
      currentParagraphLines = [];
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) {
      // Empty line closes list and paragraph
      closeList();
      closeParagraph();
      continue;
    }

    // Check if line starts with markdown headers
    const mdHeaderMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (mdHeaderMatch) {
      closeList();
      closeParagraph();
      const level = mdHeaderMatch[1].length;
      const headingText = mdHeaderMatch[2].trim();
      
      if (isMainHeading(headingText)) {
        result.push(`<h2 class="blog-main-heading">${headingText}</h2>`);
        inBulletSection = shouldAutoBullet(headingText);
      } else {
        result.push(`<h3 class="blog-sub-heading">${headingText}</h3>`);
        inBulletSection = false;
      }
      continue;
    }

    // Check if line is a bullet list item
    const bulletMatch = line.match(/^[-*•]\s+(.*)/);
    if (bulletMatch) {
      closeParagraph();
      const itemContent = bulletMatch[1].trim();
      if (currentListType !== 'ul') {
        closeList();
        result.push('<ul class="list-disc pl-6 space-y-2 mb-4">');
        currentListType = 'ul';
      }
      result.push(`<li class="text-sm text-foreground/80 leading-relaxed">${itemContent}</li>`);
      continue;
    }

    // Check if line is a numbered list item or start with Tip/Point/Step
    const listPatternMatch = line.match(/^(\d+)[\.\)]\s+(.*)/) || line.match(/^(Tip|Point|Step)\s*\d+[\s\:\-\.]+(.*)/i);
    if (listPatternMatch) {
      closeParagraph();
      const itemContent = listPatternMatch[2].trim();
      if (currentListType !== 'ul') {
        closeList();
        result.push('<ul class="list-disc pl-6 space-y-2 mb-4">');
        currentListType = 'ul';
      }
      result.push(`<li class="text-sm text-foreground/80 leading-relaxed">${itemContent}</li>`);
      continue;
    }

    // Check if line itself is a heading (short line, no ending punctuation, not empty)
    const isShort = line.length < 100;
    const hasPunctuation = /[.?!]$/.test(line);
    if (isShort && !hasPunctuation) {
      // Check if it's a main heading or sub heading
      closeList();
      closeParagraph();
      if (isMainHeading(line)) {
        result.push(`<h2 class="blog-main-heading">${line}</h2>`);
        inBulletSection = shouldAutoBullet(line);
      } else {
        result.push(`<h3 class="blog-sub-heading">${line}</h3>`);
        inBulletSection = false;
      }
      continue;
    }

    // Otherwise, treat as regular paragraph line
    // Check if the line starts with a main heading inline, e.g. "Introduction: Traveling to India is..."
    const inlineMainMatch = line.match(/^(Introduction|Key\s+Insights|Travel\s+Tips|Introducción|Introdução|Perspectivas\s+clave|Principais\s+insights|Consejos\s+de\s+viaje|Dicas\s+de\s+viagem)[\s\:\-\*]+(.*)/i);
    if (inlineMainMatch) {
      closeList();
      closeParagraph();
      const headingText = inlineMainMatch[1].trim();
      const remainingText = inlineMainMatch[2].trim();
      
      result.push(`<h2 class="blog-main-heading">${headingText}</h2>`);
      inBulletSection = shouldAutoBullet(headingText);
      if (remainingText) {
        if (inBulletSection) {
          if (currentListType !== 'ul') {
            closeList();
            result.push('<ul class="list-disc pl-6 space-y-2 mb-4">');
            currentListType = 'ul';
          }
          result.push(`<li class="text-sm text-foreground/80 leading-relaxed">${remainingText}</li>`);
        } else {
          currentParagraphLines.push(remainingText);
        }
      }
      continue;
    }

    // If we are currently under an auto-bullet section (Travel Tips / Key Insights) and have a normal text line
    if (inBulletSection) {
      closeParagraph();
      if (currentListType !== 'ul') {
        closeList();
        result.push('<ul class="list-disc pl-6 space-y-2 mb-4">');
        currentListType = 'ul';
      }
      result.push(`<li class="text-sm text-foreground/80 leading-relaxed">${line}</li>`);
      continue;
    }

    // If we are currently in a list, we might want to close it if a paragraph line starts
    if (currentListType) {
      closeList();
    }
    currentParagraphLines.push(line);
  }

  // Close any remaining list or paragraph
  closeList();
  closeParagraph();

  return result.join('\n');
};

