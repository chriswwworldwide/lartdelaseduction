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

// --- Resolve current directory ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Path to sitemap.xml (same folder) ---
const SITEMAP_PATH = path.resolve(__dirname, "sitemap.xml");

// --- Helper: format date as YYYY-MM-DD ---
const formatDate = (d) => d.toISOString().split("T")[0];

try {
  // Read sitemap.xml
  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");

  // Get today's date
  const today = formatDate(new Date());

  // Replace all <lastmod> tags with today's date
  const updated = xml.replace(
    /<lastmod>(.*?)<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`,
  );

  // Write updated content back to sitemap.xml
  fs.writeFileSync(SITEMAP_PATH, updated, "utf8");
  console.log(`sitemap.xml updated successfully at ${today}`);
} catch (err) {
  console.error("Error updating sitemap.xml");
  console.error(err.message);
  process.exit(1);
}
