import fs from 'fs';
import { execSync } from 'child_process';

const log = execSync('git log --format="%h %s" -n 30', { encoding: 'utf8' }).trim().split('\n');

console.log('Commits:', log);

for (const line of log) {
  const hash = line.split(' ')[0];
  try {
    const jsonStr = execSync(`git show ${hash}:src/data/fallback/cities.json`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
    const cities = JSON.parse(jsonStr);
    console.log(`\nCommit ${hash}: Total cities = ${cities.length}`);
    
    // Check Jaipur, Kochi, Khajuraho, Mumbai
    for (const id of ['jaipur', 'kochi', 'khajuraho', 'mumbai']) {
      const c = cities.find(x => x.id === id);
      if (c) {
        console.log(`  ${hash} - ${id}: desc len EN=${c.description?.en?.length || 0}, content EN len=${c.content?.en?.length || 0}`);
      }
    }
  } catch (err) {
    // console.log(`  ${hash}: cities.json error or not present`);
  }
}
