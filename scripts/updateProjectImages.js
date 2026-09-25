const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'index.tsx');

console.log('🔄 Updating project images to use local screenshots...\n');

// Read the data file
let content = fs.readFileSync(dataFilePath, 'utf8');

// Update Amazoning project
content = content.replace(
  /id: "w12",[\s\S]*?title: "Amazoning — Full-Stack E-Commerce",[\s\S]*?images: \[\s*{ url: "[^"]*" },?\s*\]/,
  (match) => match.replace(
    /{ url: "[^"]*" }/,
    '{ url: "/images/projects/amazoning-hero.png" }'
  )
);

// Update Kuraudia Holdings project
content = content.replace(
  /id: "w23",[\s\S]*?title: "Kuraudia Holdings — Bridal Group",[\s\S]*?images: \[\s*{ url: "[^"]*" },?\s*\]/,
  (match) => match.replace(
    /{ url: "[^"]*" }/,
    '{ url: "/images/projects/kuraudia-hero.png" }'
  )
);

// Update HK Wedding project
content = content.replace(
  /id: "w20",[\s\S]*?title: "HK Wedding — Bridal Studio",[\s\S]*?images: \[\s*{ url: "[^"]*" },?\s*\]/,
  (match) => match.replace(
    /{ url: "[^"]*" }/,
    '{ url: "/images/projects/hk-wedding-hero.png" }'
  )
);

// Write the updated content back
fs.writeFileSync(dataFilePath, content, 'utf8');

console.log('✅ Updated Amazoning project image');
console.log('✅ Updated Kuraudia Holdings project image');
console.log('✅ Updated HK Wedding project image');
console.log('\n✨ All project images updated successfully!');
console.log('🎉 Your portfolio now uses actual screenshots from your projects!');
