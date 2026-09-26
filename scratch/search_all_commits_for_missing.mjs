import fs from 'fs';
import { execSync } from 'child_process';

const commits = execSync('git log --format="%h"', { encoding: 'utf8' }).trim().split('\n');

const missingIds = ['khajuraho', 'alleppey', 'rann-of-kutch', 'omkareshwar', 'bikaner', 'ranakpur', 'abhaneri', 'thiruvananthapuram', 'kannur'];

for (const hash of commits) {
  try {
    const jsonStr = execSync(`git show ${hash}:src/data/fallback/cities.json`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
    const cities = JSON.parse(jsonStr);
    for (const id of missingIds) {
      const c = cities.find(x => x.id === id);
      if (c && c.content && (c.content.en || c.content.es || c.content.pt)) {
        console.log(`Found content for ${id} in commit ${hash}! EN len: ${c.content.en?.length}`);
      }
    }
  } catch (e) {}
}
