const KEY = "volleyshop-theme";

export function getTheme() {
  const saved = localStorage.getItem(KEY);
  if (saved === "dark" || saved === "light") return saved;
  return "light";
}

export function applyTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem(KEY, t);
  return t;
}

export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  return applyTheme(next);
}

export function initTheme() {
  applyTheme(getTheme());
}
