import React, { createContext, useEffect, useMemo, useState } from "react";
import type { Theme } from "../types/Theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  updateTheme: (newTheme: Theme) => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

const LIGHT_THEME: Theme = {
  primary: "#6366f1",
  secondary: "#ec4899",
  background: "#ffffff",
  surface: "#f3f4f6",
  text: "#111827",
};

const DARK_THEME: Theme = {
  primary: "#2563eb",
  secondary: "#7c3aed",
  background: "#0b1220",
  surface: "#111a2b",
  text: "#f8fafc",
};

const applyThemeToRoot = (theme: Theme, mode: ThemeMode) => {
  const root = document.documentElement;

  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-background", theme.background);
  root.style.setProperty("--color-surface", theme.surface);
  root.style.setProperty("--color-text", theme.text);

  root.dataset.theme = mode;
};

const runThemeTransition = () => {
  // Adds a tiny “fade-through” animation so theme changes feel premium.
  const root = document.documentElement;
  root.classList.remove("theme-transition");
  // Force reflow
  void root.offsetWidth;
  root.classList.add("theme-transition");
  window.setTimeout(() => root.classList.remove("theme-transition"), 420);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

  useEffect(() => {
    applyThemeToRoot(theme, mode);
    runThemeTransition();
  }, [theme, mode]);

  const updateTheme = (newTheme: Theme) => setTheme(newTheme);

  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
    setTheme((t) => {
      // If user customized colors, don't overwrite them completely.
      // Only swap background/surface/text to maintain “dark mode real”.
      const nextBase = mode === "light" ? DARK_THEME : LIGHT_THEME;
      return {
        ...t,
        background: nextBase.background,
        surface: nextBase.surface,
        text: nextBase.text,
      };
    });
  };

  const value = useMemo(
    () => ({ theme, mode, setMode, updateTheme, toggleMode }),
    [theme, mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
