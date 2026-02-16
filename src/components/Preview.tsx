import { Button } from "./Button";

export const Preview = () => {
  return (
    <div className="preview">
      <header className="topbar">
        <div className="topbar__left">
          <div className="badge">Preview</div>
          <div className="topbar__title">Mockup de site real</div>
        </div>

        <div className="topbar__right">
          <div className="chip">Primary</div>
          <div className="chip chip--secondary">Secondary</div>
        </div>
      </header>

      <div className="mock">
        <div className="mock__chrome">
          <div className="dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="address">https://sua-marca.com</div>
          <div className="chrome-btn">↻</div>
        </div>

        <div className="mock__page">
          <nav className="nav">
            <div className="nav__logo">SuaMarca</div>
            <div className="nav__links">
              <a href="#" onClick={(e) => e.preventDefault()}>Produto</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Docs</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Sobre</a>
            </div>
            <Button>Entrar</Button>
          </nav>

          {/* HERO */}
          <div className="hero">
            <div className="hero__copy">
              <h1>
                Uma interface bonita, rápida e consistente
                <span className="accent"> com seu tema</span>.
              </h1>
              <p>
                Ajuste cores, exporte CSS e visualize imediatamente em um layout
                parecido com produto real (SaaS/Fintech).
              </p>

              <div className="hero__cta">
                <Button>Criar tema</Button>
                <button className="ghost" type="button">Ver documentação</button>
              </div>

              <div className="stats">
                <div className="stat">
                  <div className="stat__n">+42%</div>
                  <div className="stat__t">consistência visual</div>
                </div>
                <div className="stat">
                  <div className="stat__n">0.3s</div>
                  <div className="stat__t">troca de tema</div>
                </div>
                <div className="stat">
                  <div className="stat__n">CSS</div>
                  <div className="stat__t">exportável</div>
                </div>
              </div>
            </div>

            <div className="hero__card">
              <div className="card">
                <div className="card__head">
                  <div>
                    <div className="card__title">Resumo</div>
                    <div className="card__sub">Últimos 7 dias</div>
                  </div>
                  <div className="pill">Atualizado</div>
                </div>

                <div className="card__grid">
                  <div className="kpi">
                    <div className="kpi__label">Receita</div>
                    <div className="kpi__value">R$ 12.480</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi__label">Conversão</div>
                    <div className="kpi__value">3,8%</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi__label">Tickets</div>
                    <div className="kpi__value">148</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi__label">NPS</div>
                    <div className="kpi__value">74</div>
                  </div>
                </div>

                <div className="divider" />
                <div className="note">
                  Dica: exporte o CSS e aplique no seu projeto real em minutos.
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="features">
            <div className="feature">
              <div className="feature__icon">🪄</div>
              <div className="feature__title">Mock realista</div>
              <div className="feature__text">
                Visualize seu tema aplicado em componentes de um site.
              </div>
            </div>

            <div className="feature">
              <div className="feature__icon">💡</div>
              <div className="feature__title">Transições suaves</div>
              <div className="feature__text">
                Troca de tema com animação premium e sem “flash”.
              </div>
            </div>

            <div className="feature">
              <div className="feature__icon">🎛️</div>
              <div className="feature__title">Sidebar colapsável</div>
              <div className="feature__text">
                Mais espaço pra preview — ideal pra apresentações.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
