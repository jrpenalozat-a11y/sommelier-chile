import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useTema } from './context/TemaContext';
import { useFavoritos } from './context/FavoritosContext';
import ExplorarPage from './pages/ExplorarPage';
import CepasPage from './pages/CepasPage';
import FavoritosPage from './pages/FavoritosPage';
import FichaVina from './components/FichaVina';

const MapaChile = lazy(() => import('./components/MapaChile.jsx'));

function App() {
  const { tema, setTema } = useTema();
  const { favoritos } = useFavoritos();
  const [vinaActiva, setVinaActiva] = React.useState(null);

  return (
    <div className="app">
      <header className="cabecera">
        <div className="cabecera-marca">
          <span className="cabecera-copa" aria-hidden="true">🍷</span>
          <div>
            <h1 className="cabecera-titulo">Sommelier de Chile</h1>
            <p className="cabecera-lema">Vinos por valle, de norte a sur</p>
          </div>
        </div>
        <nav className="cabecera-nav">
          <NavLink to="/" className={({ isActive }) => `nav-btn ${isActive ? 'activo' : ''}`}>Explorar</NavLink>
          <NavLink to="/cepas" className={({ isActive }) => `nav-btn ${isActive ? 'activo' : ''}`}>Cepas</NavLink>
          <NavLink to="/favoritos" className={({ isActive }) => `nav-btn ${isActive ? 'activo' : ''}`}>
            ❤️ {favoritos.length > 0 && <span className="favoritos-badge">{favoritos.length}</span>}
          </NavLink>
          <button className="tema-btn" onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
            {tema === 'claro' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ExplorarPage onVerVina={setVinaActiva} />} />
        <Route path="/cepas" element={<CepasPage />} />
        <Route path="/favoritos" element={<FavoritosPage onVerVina={setVinaActiva} />} />
      </Routes>

      <footer className="creditos">
        Creado por <strong>Jaime Peñaloza</strong>
      </footer>

      {vinaActiva && (
        <FichaVina vina={vinaActiva} onClose={() => setVinaActiva(null)} />
      )}
    </div>
  );
}

export default App;
