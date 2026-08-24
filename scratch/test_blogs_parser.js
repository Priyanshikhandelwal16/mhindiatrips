const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAQDmo-48Fn5-R_lt8uk6qjJZSsoYGVM9w",
  authDomain: "mh-india-trips.firebaseapp.com",
  projectId: "mh-india-trips",
  storageBucket: "mh-india-trips.firebasestorage.app",
  messagingSenderId: "733253901031",
  appId: "1:733253901031:web:b54eb084fcaaa120d66042",
};

// Copy formatRichText logic to test it directly
const formatRichText = (content) => {
  if (!content) return "";

  const hasHtml = /<[a-z][\s\S]*>/i.test(content);
  if (hasHtml) {
    return content;
  }

  const isMainHeading = (text) => {
    const clean = text.toLowerCase().replace(/[:.!?]$/, "").trim();
    const mainHeadings = [
      "introduction", "introducción", "introdução",
      "key insights", "perspectivas clave", "principais insights", "key insight",
      "travel tips", "consejos de viaje", "dicas de viagem", "travel tip"
    ];
    return mainHeadings.includes(clean) || mainHeadings.some(h => clean.startsWith(h));
  };

  let html = content;
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  const rawLines = html.split(/\r?\n/);
  const result = [];
  
  let currentListType = null;
  let currentParagraphLines = [];
  let inBulletSection = false;

  const shouldAutoBullet = (text) => {
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
      closeList();
      closeParagraph();
      continue;
    }

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

    const isShort = line.length < 100;
    const hasPunctuation = /[.?!]$/.test(line);
    if (isShort && !hasPunctuation) {
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

    if (currentListType) {
      closeList();
    }
    currentParagraphLines.push(line);
  }

  closeList();
  closeParagraph();

  return result.join('\n');
};

async function testAllBlogs() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log("Fetching blogs for parsing test...");
    
    const snapshot = await getDocs(collection(db, "blogs"));
    console.log(`Testing ${snapshot.docs.length} blogs...`);
    
    let successCount = 0;
    let failCount = 0;

    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      const slug = data.slug || doc.id;
      
      try {
        if (data.content && typeof data.content === "object") {
          for (const lang of ["en", "es", "pt"]) {
            const raw = data.content[lang] || "";
            // Run formatRichText
            formatRichText(raw);
          }
        } else if (data.content) {
          formatRichText(String(data.content));
        }
        successCount++;
      } catch (err) {
        failCount++;
        console.error(`\n[CRASH] Blog "${slug}" failed to parse!`);
        console.error("Error message:", err.message);
        console.error("Stack trace:", err.stack);
      }
    });

    console.log(`\nTEST COMPLETED. Success: ${successCount}, Failures: ${failCount}`);
  } catch (e) {
    console.error("Test execution failed:", e);
  }
}

testAllBlogs();
