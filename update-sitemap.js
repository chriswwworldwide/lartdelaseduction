/**
 * update-sitemap.js
 * -----------------------
 * Updates <lastmod> timestamps in sitemap.xml automatically.
 * Run manually:      node update-sitemap.js
 * Automate nightly:  use cron  0 23 * * * node update-sitemap.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const sitemapPath = path.join(process.cwd(), "sitemap.xml");

try {
  let xml = fs.readFileSync(sitemapPath, "utf8");
  const now = new Date().toISOString();

  // Replace all <lastmod>...</lastmod> occurrences
  xml = xml.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${now}</lastmod>`);

  fs.writeFileSync(sitemapPath, xml);
  console.log(" sitemap.xml updated successfully ", now);
} catch (err) {
  console.error(" Error updating sitemap:", err.message);
  process.exit(1);
}/**
 * update-sitemap.js
 * -----------------------
 * Updates sitemap.xml <lastmod> timestamps automatically.
 * Run manually:      node update-sitemap.js
 * Automate nightly:  use cron  0 23 * * * node update-sitemap.js
 */


// --- Resolve current directory ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --- Path to sitemap.xml (same folder) ---
const SITEMAP_PATH = path.resolve(__dirname, "sitemap.xml");
// --- Helper  format date YYYY-MM-DD ---
const formatDate = d => d.toISOString().split("T")[0];
try {
  // Read sitemap.xml
  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");
  // Get today's date
  const today = formatDate(new Date());
  // Replace all <lastmod> tags with today's date
  const updated = xml.replace(
    /<lastmod>(.*?)<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  // Write updated content back to sitemap.xml
  fs.writeFileSync(SITEMAP_PATH, updated, "utf8");
  console.log(`  sitemap.xml updated successfully  ${today}`);
} catch (err) {
  console.error("  Error updating sitemap.xml");
  console.error(err.message);
  process.exit(1);
}
/**
 * update-sitemap.js
 * -----------------------
 * Updates sitemap.xml <lastmod> timestamps automatically.
 * Run manually:      node update-sitemap.js
 * Automate nightly:  use cron  0 23 * * * node update-sitemap.
// --- Resolve current directory ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --- Path to sitemap.xml (same folder) ---
const SITEMAP_PATH = path.resolve(__dirname, "sitemap.xml");
// --- Helper  format date YYYY-MM-DD ---
const formatDate = d => d.toISOString().split("T")[0];
try {
  // Read sitemap.xml
  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");
  // Get today's date
  const today = formatDate(new Date());
  // Replace all <lastmod> tags with today's date
  const updated = xml.replace(
    /<lastmod>(.*?)<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  // Write updated content back to sitemap.xml
  fs.writeFileSync(SITEMAP_PATH, updated, "utf8");
  console.log(`  sitemap.xml updated successfully  ${today}`);
} catch (err) {
  console.error("  Error updating sitemap.xml");
  console.error(err.message);
  process.exit(1);
}
