import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useTema } from './context/TemaContext';
import { useIdioma } from './context/IdiomaContext';
import { useFavoritos } from './context/FavoritosContext';
import { useT } from './i18n';
import PantallaIdioma from './components/PantallaIdioma';
import ExplorarPage from './pages/ExplorarPage';
import CepasPage from './pages/CepasPage';
import FavoritosPage from './pages/FavoritosPage';
import FichaVina from './components/FichaVina';

function App() {
  const { tema, setTema } = useTema();
  const { idioma, setIdioma } = useIdioma();
  const { favoritos } = useFavoritos();
  const [vinaActiva, setVinaActiva] = React.useState(null);
  const t = useT();

  // Pantalla inicial de idioma: se muestra hasta que el usuario elija
  if (!idioma) return <PantallaIdioma />;

  return (
    <div className="app">
      <header className="cabecera">
        <div className="cabecera-marca">
          <span className="cabecera-copa" aria-hidden="true">🍷</span>
          <div>
            <h1 className="cabecera-titulo">Sommelier de Chile</h1>
            <p className="cabecera-lema">{t.lema}</p>
          </div>
        </div>
        <nav className="cabecera-nav">
          <NavLink to="/" className={({ isActive }) => `nav-btn ${isActive ? 'activo' : ''}`}>{t.explorar}</NavLink>
          <NavLink to="/cepas" className={({ isActive }) => `nav-btn ${isActive ? 'activo' : ''}`}>{t.cepas}</NavLink>
          <NavLink to="/favoritos" className={({ isActive }) => `nav-btn ${isActive ? 'activo' : ''}`}>
            ❤️ {favoritos.length > 0 && <span className="favoritos-badge">{favoritos.length}</span>}
          </NavLink>
          <button className="tema-btn" onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')} aria-label="Tema">
            {tema === 'claro' ? '🌙' : '☀️'}
          </button>
          <button className="idioma-toggle" onClick={() => setIdioma(idioma === 'es' ? 'en' : 'es')} aria-label="Language">
            {idioma === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ExplorarPage onVerVina={setVinaActiva} />} />
        <Route path="/cepas" element={<CepasPage />} />
        <Route path="/favoritos" element={<FavoritosPage onVerVina={setVinaActiva} />} />
      </Routes>

      <footer className="creditos">
        {t.creadoPor} <strong>Jaime Ricardo Peñaloza</strong>
      </footer>

      {vinaActiva && (
        <FichaVina vina={vinaActiva} onClose={() => setVinaActiva(null)} />
      )}
    </div>
  );
}

export default App;
