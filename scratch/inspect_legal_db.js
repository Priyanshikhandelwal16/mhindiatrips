const { db } = require("./src/lib/db");

async function checkLegalPages() {
  const terms = await db.pages.findUnique("terms");
  const privacy = await db.pages.findUnique("privacy");
  const disclaimer = await db.pages.findUnique("disclaimer");

  console.log("TERMS:", JSON.stringify(terms, null, 2));
  console.log("PRIVACY:", JSON.stringify(privacy, null, 2));
  console.log("DISCLAIMER:", JSON.stringify(disclaimer, null, 2));
}

checkLegalPages();
