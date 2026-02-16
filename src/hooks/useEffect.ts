import { useEffect, useState } from "react";
import type { Theme } from "../types/Theme";

export const useThemeStorage = () => {
  const [savedThemes, setSavedThemes] = useState<Theme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedThemes");
    if (stored) setSavedThemes(JSON.parse(stored));
  }, []);

  const saveTheme = (theme: Theme) => {
    const newThemes = [...savedThemes, theme];
    setSavedThemes(newThemes);
    localStorage.setItem("savedThemes", JSON.stringify(newThemes));
  };

  return { savedThemes, saveTheme };
};
