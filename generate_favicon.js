const fs = require('fs');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#EFD92F;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00E7FE;stop-opacity:1" />
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1" />
    </filter>
  </defs>
  <circle cx="16" cy="16" r="14" fill="url(#grad)" filter="url(#blur)" opacity="0.9" />
</svg>`;

fs.writeFileSync('public/favicon.svg', svgContent);
console.log('Favicon created');
