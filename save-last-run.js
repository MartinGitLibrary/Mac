const fs = require('fs');
const path = require('/Users/martind/vs/Full/test-results/.last-run.json');

const data = {
  lastRun: new Date().toISOString()
};

fs.writeFileSync(
  path.join(__dirname, '.last-run.json'),
  JSON.stringify(data, null, 2)
);

console.log('Saved .last-run.json');