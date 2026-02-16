import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ExportCSS = () => {
  const { theme } = useContext(ThemeContext);

  const handleExport = () => {
    const css = `:root {
  --color-primary: ${theme.primary};
  --color-secondary: ${theme.secondary};
  --color-background: ${theme.background};
  --color-surface: ${theme.surface};
  --color-text: ${theme.text};
}
`;
    const blob = new Blob([css], { type: "text/css" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "theme.css";
    link.click();
  };

  return (
    <button type="button" className="btn btn--outline" onClick={handleExport}>
      Exportar CSS
    </button>
  );
};
