// Theme Switcher for L’Art‑de‑la‑Séduction
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
  "les-peches-de-la-chair",
  "nuit-etoilee",
];

const linkEl = document.querySelector('link[data-theme]');

export function setTheme(name) {
  if (!themes.includes(name)) name = "default";
  linkEl.href = `themes/${name}.css`;
  localStorage.setItem("activeTheme", name);
  document.documentElement.setAttribute("data-theme", name);
}

export function initThemeSwitcher() {
  const saved = localStorage.getItem("activeTheme") || "default";
  setTheme(saved);

  const select = document.getElementById("themeSelector");
  if (select) {
    select.value = saved;
    select.addEventListener("change", (e) => setTheme(e.target.value));
  }
} // closes initThemeSwitcher properly

// auto-run if imported as module
initThemeSwitcher();