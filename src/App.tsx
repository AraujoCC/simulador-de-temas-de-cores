import { useState } from "react";
import { CustomizationPanel } from "./components/CustomizationPanel";
import { Preview } from "./components/Preview";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app">
      <CustomizationPanel
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed((v) => !v)}
      />
      <main className="main">
        <Preview />
      </main>
    </div>
  );
}

export default App;
