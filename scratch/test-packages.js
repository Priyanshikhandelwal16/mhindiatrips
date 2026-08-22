const { db } = require('../src/lib/db');

async function test() {
  try {
    const packages = await db.tourPackages.findMany();
    console.log("Found", packages.length, "packages.");
    packages.slice(0, 10).forEach((pkg, idx) => {
      console.log(`${idx + 1}: slug=${pkg.slug}, title=${pkg.title?.en || pkg.title}`);
    });
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

test();
