import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
