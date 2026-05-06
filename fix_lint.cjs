const fs = require('fs');

// 1. Fix src/vite-env.d.ts
fs.writeFileSync('src/vite-env.d.ts', '/// <reference types="vite/client" />\n');

// 2. Fix tsconfig.json to exclude supabase
let tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
tsconfig.include = ["src"];
fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));

// 3. Fix React.FormEvent in result.tsx
let resultPage = fs.readFileSync('src/pages/result.tsx', 'utf8');
resultPage = resultPage.replace('import { useEffect, useState } from "react";', 'import React, { useEffect, useState } from "react";');
fs.writeFileSync('src/pages/result.tsx', resultPage);

console.log("Linting config fixed");
