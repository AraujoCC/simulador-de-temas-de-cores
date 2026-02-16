import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const LABELS: Record<string, string> = {
  primary: "Primária",
  secondary: "Secundária",
  background: "Fundo",
  surface: "Superfície",
  text: "Texto",
};

export const ColorPanel = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleChange = (key: string, value: string) => {
    updateTheme({ ...theme, [key]: value });
  };

  return (
    <div className="panel">
      {Object.entries(theme).map(([key, value]) => (
        <div key={key} className="row">
          <div className="row__meta">
            <span className="row__label">{LABELS[key] ?? key}</span>
            <span className="row__value">{value.toUpperCase()}</span>
          </div>

          <input
            className="color"
            type="color"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            aria-label={`Cor ${LABELS[key] ?? key}`}
          />
        </div>
      ))}
    </div>
  );
};
