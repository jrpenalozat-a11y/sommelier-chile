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

// Familia de apps (enlaces cruzados). Se excluye esta misma app.
const APPS_FAMILIA = [
  { nombre: 'Sommelier Alternativo', emoji: '🌿', url: 'https://sommelier-alternativo-chile.vercel.app/' },
  { nombre: 'Garzón Bilingüe', emoji: '🍽️', url: 'https://chef-english.vercel.app/' },
  { nombre: 'Protocolos de Servicio', emoji: '📋', url: 'https://protocolos-servicio.vercel.app/' },
];

function App() {
  const { tema, setTema } = useTema();
  const { idioma, setIdioma } = useIdioma();
  const { favoritos } = useFavoritos();
  const [vinaActiva, setVinaActiva] = React.useState(null);
  const [instalado, setInstalado] = React.useState(false);
  const promptInstal = React.useRef(null);
  const t = useT();

  // PWA: captura el evento de instalación y detecta si ya está instalada
  React.useEffect(() => {
    const onBIP = (e) => { e.preventDefault(); promptInstal.current = e; };
    const onInstalled = () => setInstalado(true);
    window.addEventListener('beforeinstallprompt', onBIP);
    window.addEventListener('appinstalled', onInstalled);
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) setInstalado(true);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBIP);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  // Pantalla inicial de idioma: se muestra hasta que el usuario elija
  if (!idioma) return <PantallaIdioma />;

  const instalarApp = async () => {
    const ev = promptInstal.current;
    if (ev) {
      ev.prompt();
      try { await ev.userChoice; } catch (_) {}
      promptInstal.current = null;
    } else {
      alert(t.instalarAyuda);
    }
  };

  const compartir = async () => {
    const datos = {
      title: 'Sommelier de Chile',
      text: t.compartirTexto,
      url: window.location.origin + import.meta.env.BASE_URL,
    };
    try {
      if (navigator.share) await navigator.share(datos);
      else if (navigator.clipboard) { await navigator.clipboard.writeText(datos.url); alert(t.enlaceCopiado); }
    } catch (_) {}
  };

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
          <button className="compartir-btn" onClick={compartir} aria-label={t.compartir} title={t.compartir}>📤</button>
          {!instalado && (
            <button className="instalar-btn" onClick={instalarApp} aria-label={t.instalar}>📲 {t.instalar}</button>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ExplorarPage onVerVina={setVinaActiva} />} />
        <Route path="/cepas" element={<CepasPage />} />
        <Route path="/favoritos" element={<FavoritosPage onVerVina={setVinaActiva} />} />
      </Routes>

      <footer className="creditos">
        <div className="familia">
          <p className="familia-titulo">{t.masApps}</p>
          <div className="familia-apps">
            {APPS_FAMILIA.map((a) => (
              <a key={a.url} className="familia-app" href={a.url} target="_blank" rel="noopener noreferrer">
                <span className="familia-emoji" aria-hidden="true">{a.emoji}</span> {a.nombre}
              </a>
            ))}
          </div>
        </div>
        <img
          className="marca-logo"
          src={`${import.meta.env.BASE_URL}logo-marca.jpg`}
          alt="Altura · Inparidad · Movimiento"
        />
        <div className="creditos-texto">{t.creadoPor} <strong>Jaime Ricardo Peñaloza</strong></div>
      </footer>

      {vinaActiva && (
        <FichaVina vina={vinaActiva} onClose={() => setVinaActiva(null)} />
      )}
    </div>
  );
}

export default App;
