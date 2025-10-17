// update-sitemap-clean.js
// -----------------------
// Updates all <lastmod> timestamps in sitemap.xml

import fs from "fs";

const sitemapPath = "sitemap.xml";

try {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const now = new Date().toISOString();

  const updated = xml.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${now}</lastmod>`);
  fs.writeFileSync(sitemapPath, updated, "utf8");

  console.log(`✅ sitemap.xml updated — ${now}`);
} catch (err) {
  console.error("❌ Failed to update sitemap.xml");
  console.error(err.message);
  process.exit(1);
}
// update-sitemap-clean.js
// -----------------------
// Updates all <lastmod> timestamps in sitemap.xml

import fs from "fs";

const sitemapPath = "sitemap.xml";

try {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const now = new Date().toISOString();

  const updated = xml.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${now}</lastmod>`);
  fs.writeFileSync(sitemapPath, updated, "utf8");

  console.log(`✅ sitemap.xml updated — ${now}`);
} catch (err) {
  console.error("❌ Failed to update sitemap.xml");
  console.error(err.message);
  process.exit(1);
}
