import { ThemeToggle } from "./ThemeToggle";
import { ColorPanel } from "./ColorPanel";
import { ExportCSS } from "./ExportCSS";

export const CustomizationPanel = ({
  collapsed,
  onToggleCollapsed,
}: {
  collapsed: boolean;
  onToggleCollapsed: () => void;
}) => {
  return (
    <div className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div className="sidebar__top">
        <div className="brand">
          <div className="brand__logo">TF</div>
          {!collapsed && (
            <div className="brand__text">
              <div className="brand__name">ThemeForge</div>
              <div className="brand__sub">Simulador de temas</div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="iconbtn"
          onClick={onToggleCollapsed}
          aria-label={collapsed ? "Expandir painel" : "Recolher painel"}
          title={collapsed ? "Expandir" : "Recolher"}
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      {!collapsed && (
        <>
          <div className="section">
            <div className="section__title">Modo</div>
            <ThemeToggle />
          </div>

          <div className="section">
            <div className="section__title">Cores</div>
            <ColorPanel />
          </div>

          <div className="section">
            <div className="section__title">Exportar</div>
            <ExportCSS />
          </div>
        </>
      )}

      {collapsed && (
        <div className="sidebar__mini">
          <div className="mini-pill">🎨</div>
          <div className="mini-pill">🌙</div>
          <div className="mini-pill">⬇️</div>
        </div>
      )}
    </div>
  );
};
