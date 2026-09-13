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

  // 1. If it already contains HTML card wrappers (e.g. blog-intro-card or blog-tips-card), assume it's pre-rendered
  const hasCustomCards = /class="[^"]*blog-(intro-card|key-insights|tips-card)[^"]*"/i.test(content);
  if (hasCustomCards) {
    return content;
  }

  // 2. Pre-process markdown-like bold and italic syntax
  let html = content;
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  const rawLines = html.split(/\r?\n/);

  type SectionType = 'intro' | 'key_insights' | 'tips' | 'general';
  
  interface Section {
    type: SectionType;
    headingText: string;
    lines: string[];
  }

  const sections: Section[] = [];
  let currentSection: Section = { type: 'general', headingText: '', lines: [] };

  const getSectionType = (text: string): SectionType | null => {
    const clean = text.toLowerCase().replace(/[:.!?#*_-]/g, "").trim();
    if (["introduction", "introducción", "introdução", "overview", "visión general"].includes(clean) || clean.startsWith("introduction") || clean.startsWith("introducción") || clean.startsWith("introdução")) {
      return 'intro';
    }
    if (["key insights", "key insight", "perspectivas clave", "principais insights", "regional climate insights"].includes(clean) || clean.startsWith("key insight") || clean.startsWith("perspectivas clave") || clean.startsWith("principais insight")) {
      return 'key_insights';
    }
    if (["travel tips", "travel tip", "consejos de viaje", "dicas de viagem", "tips for travel"].includes(clean) || clean.startsWith("travel tip") || clean.startsWith("consejos de viaje") || clean.startsWith("dicas de viagem")) {
      return 'tips';
    }
    return null;
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) {
      if (currentSection.lines.length > 0) {
        currentSection.lines.push('');
      }
      continue;
    }

    const mdHeaderMatch = line.match(/^(#{1,6})\s+(.*)/);
    const cleanHeadingText = mdHeaderMatch ? mdHeaderMatch[2].trim() : line;
    const detectedType = getSectionType(cleanHeadingText);

    if (detectedType) {
      if (currentSection.lines.length > 0 || currentSection.headingText) {
        sections.push(currentSection);
      }
      currentSection = {
        type: detectedType,
        headingText: cleanHeadingText,
        lines: []
      };
      continue;
    }

    // Check for inline headings like "Introduction: Traveling to India is..."
    const inlineMatch = line.match(/^(Introduction|Key\s+Insights|Travel\s+Tips|Introducción|Introdução|Perspectivas\s+clave|Principais\s+insights|Consejos\s+de\s+viaje|Dicas\s+de\s+viagem)[\s\:\-\*]+(.*)/i);
    if (inlineMatch) {
      const type = getSectionType(inlineMatch[1]);
      if (type) {
        if (currentSection.lines.length > 0 || currentSection.headingText) {
          sections.push(currentSection);
        }
        currentSection = {
          type,
          headingText: inlineMatch[1].trim(),
          lines: inlineMatch[2].trim() ? [inlineMatch[2].trim()] : []
        };
        continue;
      }
    }

    currentSection.lines.push(line);
  }

  if (currentSection.lines.length > 0 || currentSection.headingText) {
    sections.push(currentSection);
  }

  const output: string[] = [];

  const getRegionIcon = (name: string): string => {
    const lower = name.toLowerCase();
    if (lower.includes("budget") && !lower.includes("where")) return "💰";
    if (lower.includes("mid-range") || lower.includes("mid range")) return "🏨";
    if (lower.includes("luxury")) return "💎";
    if (lower.includes("where") || lower.includes("matter")) return "💡";
    if (lower.includes("north")) return "🕌";
    if (lower.includes("rajasthan") || lower.includes("desert")) return "🐫";
    if (lower.includes("south")) return "🌴";
    if (lower.includes("goa")) return "🏖️";
    if (lower.includes("himalaya") || lower.includes("mountain") || lower.includes("shimla") || lower.includes("manali")) return "🏔️";
    if (lower.includes("northeast") || lower.includes("meghalaya") || lower.includes("assam") || lower.includes("sikkim")) return "🌿";
    if (lower.includes("central") || lower.includes("madhya")) return "🐅";
    if (lower.includes("ladakh")) return "🏔️";
    if (lower.includes("monsoon")) return "🌧️";
    return "📍";
  };

  for (const sec of sections) {
    if (sec.type === 'intro') {
      output.push(`
        <div class="blog-intro-card">
          <div class="blog-intro-card-header">
            <span class="blog-intro-badge">✨ Overview</span>
            <h2 class="blog-intro-card-title">${sec.headingText || 'Introduction'}</h2>
          </div>
          <div class="space-y-4">
      `);
      
      let pLines: string[] = [];
      for (const line of sec.lines) {
        if (!line) {
          if (pLines.length > 0) {
            output.push(`<p class="text-[15px] text-[#1B1B1B]/80 leading-relaxed font-light">${pLines.join(' ')}</p>`);
            pLines = [];
          }
        } else {
          pLines.push(line);
        }
      }
      if (pLines.length > 0) {
        output.push(`<p class="text-[15px] text-[#1B1B1B]/80 leading-relaxed font-light">${pLines.join(' ')}</p>`);
      }

      output.push(`
          </div>
        </div>
      `);
    } else if (sec.type === 'key_insights') {
      output.push(`
        <div class="blog-key-insights-container">
          <div class="blog-key-insights-header">
            <span class="blog-key-insights-badge">💡 Essential Regional Guide</span>
            <h2 class="blog-main-heading">${sec.headingText || 'Key Insights'}</h2>
          </div>
          <div class="blog-regional-cards-grid">
      `);

      interface RegionalItem {
        title: string;
        bestTime: string;
        desc: string[];
      }

      const items: RegionalItem[] = [];
      let currentItem: RegionalItem | null = null;

      for (let i = 0; i < sec.lines.length; i++) {
        const line = sec.lines[i].trim();
        if (!line) continue;

        const bestTimeMatch = line.match(/^(Best time[^\:\n]*|Mejor época[^\:\n]*|Melhor época[^\:\n]*)\s*:\s*(.*)/i);

        if (bestTimeMatch) {
          if (!currentItem) {
            currentItem = {
              title: 'Regional Insights',
              bestTime: `${bestTimeMatch[1].trim()}: ${bestTimeMatch[2].trim()}`,
              desc: []
            };
          } else {
            currentItem.bestTime = `${bestTimeMatch[1].trim()}: ${bestTimeMatch[2].trim()}`;
          }
          continue;
        }

        const isShortRegionTitle = line.length < 60 && !/[.?!]$/.test(line);

        if (isShortRegionTitle) {
          if (currentItem) {
            items.push(currentItem);
          }
          currentItem = {
            title: line,
            bestTime: '',
            desc: []
          };
        } else {
          if (!currentItem) {
            currentItem = {
              title: 'Regional Insights',
              bestTime: '',
              desc: [line]
            };
          } else {
            currentItem.desc.push(line);
          }
        }
      }
      if (currentItem) {
        items.push(currentItem);
      }

      for (const item of items) {
        const icon = getRegionIcon(item.title);
        output.push(`
          <div class="blog-regional-card">
            <div class="blog-regional-card-header">
              <div class="blog-regional-title">
                <span class="text-xl">${icon}</span>
                <span>${item.title}</span>
              </div>
              ${item.bestTime ? `<span class="blog-best-time-badge">🗓️ ${item.bestTime}</span>` : ''}
            </div>
            <p class="blog-regional-desc">${item.desc.join(' ')}</p>
          </div>
        `);
      }

      output.push(`
          </div>
        </div>
      `);
    } else if (sec.type === 'tips') {
      output.push(`
        <div class="blog-tips-card">
          <div class="blog-tips-header">
            <span class="blog-tips-badge">✈️ Essential Recommendations</span>
            <h2 class="blog-tips-title">${sec.headingText || 'Travel Tips'}</h2>
          </div>
          <ul class="blog-tips-list">
      `);

      for (const line of sec.lines) {
        const clean = line.replace(/^[-*•\d\.\)]+\s*/, '').trim();
        if (!clean) continue;
        
        // Skip solo author signature at the bottom
        if (/^[A-Z][a-z]+\s+[A-Z][a-z]+$/.test(clean) && clean.length < 30) {
          output.push(`
            </ul>
            <div class="pt-6 mt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/80 font-medium">
              <span>Verified by <strong>${clean}</strong></span>
              <span class="text-[#C5A862]">MH India Trips Concierge</span>
            </div>
          `);
          continue;
        }

        output.push(`
          <li class="blog-tips-item">
            <span class="blog-tip-check">✓</span>
            <span>${clean}</span>
          </li>
        `);
      }

      output.push(`
          </ul>
        </div>
      `);
    } else {
      if (sec.headingText) {
        output.push(`<h2 class="blog-main-heading">${sec.headingText}</h2>`);
      }
      let pLines: string[] = [];
      for (const line of sec.lines) {
        if (!line) {
          if (pLines.length > 0) {
            output.push(`<p class="text-[15px] text-[#1B1B1B]/70 leading-[1.9] font-light mb-4">${pLines.join(' ')}</p>`);
            pLines = [];
          }
          continue;
        }

        const mdMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (mdMatch) {
          if (pLines.length > 0) {
            output.push(`<p class="text-[15px] text-[#1B1B1B]/70 leading-[1.9] font-light mb-4">${pLines.join(' ')}</p>`);
            pLines = [];
          }
          output.push(`<h3 class="blog-sub-heading">${mdMatch[2]}</h3>`);
          continue;
        }

        if (/^[A-Z][a-zA-Z\s]+$/.test(line) && line.length < 30 && sec.lines.indexOf(line) === sec.lines.length - 1) {
          if (pLines.length > 0) {
            output.push(`<p class="text-[15px] text-[#1B1B1B]/70 leading-[1.9] font-light mb-4">${pLines.join(' ')}</p>`);
            pLines = [];
          }
          output.push(`
            <div class="pt-6 border-t border-[#C5A862]/20 flex items-center justify-between text-xs text-[#0A2A1E]/70 font-medium">
              <span>Written by <strong>${line}</strong></span>
              <span class="text-[#C5A862]">MH India Trips Expert</span>
            </div>
          `);
          continue;
        }

        pLines.push(line);
      }
      if (pLines.length > 0) {
        output.push(`<p class="text-[15px] text-[#1B1B1B]/70 leading-[1.9] font-light mb-4">${pLines.join(' ')}</p>`);
      }
    }
  }

  return output.join('\n');
};

