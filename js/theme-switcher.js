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
