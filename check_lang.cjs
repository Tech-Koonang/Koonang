const fs = require('fs');
const data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');
console.log("Has ID UI?", data.includes('ui: {'));
console.log("Count of ui: {", (data.match(/ui: \{/g) || []).length);
