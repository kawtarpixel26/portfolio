import { useCallback, useEffect, useState } from "react";

const KEY = "kj-theme";
const read = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");

export function useTheme() {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fafaf9" : "#0a0a0a");
    try { localStorage.setItem(KEY, theme); } catch { /* storage unavailable: theme still works for this visit */ }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return [theme, toggle];
}
