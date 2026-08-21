const { getStatesAction, getStateBySlugAction, getCitiesByStateSlugAction } = require('../src/app/actions/queries');

async function test() {
  try {
    console.log("Fetching all states...");
    const states = await getStatesAction();
    console.log(`Found ${states.length} states:`, states.map(s => s.id));
    
    console.log("\nFetching Rajasthan by slug...");
    const rajasthan = await getStateBySlugAction("rajasthan");
    console.log("Rajasthan state object:", rajasthan);
    
    if (rajasthan) {
      console.log("\nFetching cities for Rajasthan...");
      const cities = await getCitiesByStateSlugAction(rajasthan.id);
      console.log(`Found ${cities.length} cities under Rajasthan:`, cities.map(c => c.id));
    }
  } catch (e) {
    console.error("Test failed:", e);
  }
}

test();
