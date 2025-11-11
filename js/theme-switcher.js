const themes = [
  "default",
  "maison-de-seduction",
  "amour-noir",
  "rouge-seduction",
  "seductiv-by-lart",
  "echos-de-soie",
  "maison-nocturne",
  "eros-noir",
  "satin-des-peches",
  "desir-noir",
  "desir-brulant",
  "la-tentatrice",
  "les-peches-de-la-chair"
];// Theme Switcher for L’Art‑de‑la‑Séduction

const themes = [
  "default",
  "maison-de-seduction",
  "amour-noir",
  "rouge-seduction",
  "seductiv-by-lart",
  "nuit-etoilee"
];

// detect link placeholder
const linkEl = document.querySelector('link[data-theme]');

// apply requested theme
export function setTheme(name) {
  if (!themes.includes(name)) name = "default";
  linkEl.href = `themes/${name}.css`;
  localStorage.setItem("activeTheme", name);
  document.documentElement.setAttribute("data-theme", name);
}

// initialize on page load
export function initThemeSwitcher() {
  const saved = localStorage.getItem("activeTheme") || "default";
  setTheme(saved);

  // optional dropdown element
  const select = document.getElementById("themeSelector");
  if (select) {
    select.value = saved;
    select.addEventListener("change", (e) => setTheme(e.target.value));
  }
}

// auto‑run if imported as <script type="module">
initThemeSwitcher();nano index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script type="module" src="js/theme-switcher.js"></script>
</head>
<body>
  <header>
    <h1>L’Art de la Séduction</h1>
    <p class="tagline">Select your mood</p>
  </header>

  <div style="text-align:center;margin:1rem 0;">
    <select id="themeSelector">
      <option value="default">Default</option>
      <option value="maison-de-seduction">Maison de Séduction</option>
      <option value="amour-noir">Amour Noir</option>
      <option value="rouge-seduction">Rouge Séduction</option>
      <option value="seductiv-by-lart">Seductiv by Lart</option>
      <option value="nuit-etoilee">Nuit Étoilée</option>
    </select>
  </div>

  <main style="text-align:center">
    <p>Welcome to your digital atelier ✨ — pick a theme above to preview it live.</p>
  </main>

  <footer>
    © L’Art de la Séduction
  </footer>
</body>
