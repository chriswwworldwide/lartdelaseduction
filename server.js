// server.js — Express local preview for homepage.html
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve everything in this folder (HTML, images, scripts, etc.)
app.use(express.static(__dirname));

// ✅ Explicitly handle root and homepage.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/homepage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "homepage.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅  Server running →  http://localhost:${PORT}/homepage.html`);
});
