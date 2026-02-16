import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const isDark = mode === "dark";

  return (
    <button
      type="button"
      className="toggle"
      onClick={toggleMode}
      aria-label="Alternar tema"
      aria-pressed={isDark}
    >
      <span className="toggle__track" data-on={isDark ? "dark" : "light"}>
        <span className="toggle__thumb" />
      </span>
      <span className="toggle__label">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};
