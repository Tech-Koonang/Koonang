const fs = require('fs');

let data = fs.readFileSync('supabase/migrations/00001_init_schema.sql', 'utf8');

data = data.replace(
  /CREATE POLICY "Public can update draft inquiries" ON inquiries\s+FOR UPDATE USING \(status = 'draft'\);/,
  `CREATE POLICY "Public can update draft inquiries" ON inquiries
    FOR UPDATE USING (status IN ('draft', 'completed')) WITH CHECK (true);`
);

fs.writeFileSync('supabase/migrations/00001_init_schema.sql', data, 'utf8');
console.log("Schema patched");
