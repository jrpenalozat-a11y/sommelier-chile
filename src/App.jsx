import React, { useState, useMemo } from 'react';
// Importa el archivo de datos directamente desde la raíz del proyecto,
// de modo que al editar vinas-chile-datos.js la app se actualice sola.
import { REGIONES, VINAS, CEPAS } from '../vinas-chile-datos.js';
import MapaChile from './components/MapaChile.jsx';
import PanelValles from './components/PanelValles.jsx';
import ListaVinas from './components/ListaVinas.jsx';
import FichaVina from './components/FichaVina.jsx';
import SeccionCepas from './components/SeccionCepas.jsx';

// Quita "Viña " inicial para ordenar y buscar de forma más natural.
const normaliza = (txt) =>
  txt
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

export default function App() {
  // vista: 'explorar' (mapa + valles + viñas) | 'cepas'
  const [vista, setVista] = useState('explorar');
  const [regionActiva, setRegionActiva] = useState(null);
  const [valleActivo, setValleActivo] = useState(null);
  const [vinaActiva, setVinaActiva] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const region = REGIONES.find((r) => r.id === regionActiva) || null;

  const nombreRegionDe = (id) => REGIONES.find((r) => r.id === id)?.nombre || '';

  // Resultados de búsqueda: por nombre de viña o por cepa.
  const resultadosBusqueda = useMemo(() => {
    const q = normaliza(busqueda.trim());
    if (!q) return [];
    return VINAS.filter((v) => {
      const enNombre = normaliza(v.nombre).includes(q);
      const enCepa = v.cepas.some((c) => normaliza(c).includes(q));
      const enValle = normaliza(v.valle).includes(q);
      return enNombre || enCepa || enValle;
    });
  }, [busqueda]);

  // Viñas del valle actualmente seleccionado.
  const vinasDelValle = useMemo(() => {
    if (!region || !valleActivo) return [];
    return VINAS.filter((v) => v.region === region.id && v.valle === valleActivo);
  }, [region, valleActivo]);

  // Acciones de navegación
  const seleccionarRegion = (id) => {
    setRegionActiva(id);
    setValleActivo(null);
    setBusqueda('');
  };

  const volverAlMapa = () => {
    setRegionActiva(null);
    setValleActivo(null);
  };

  const buscarCepaDesdeSeccion = (nombreCepa) => {
    setVista('explorar');
    setRegionActiva(null);
    setValleActivo(null);
    setBusqueda(nombreCepa);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hayBusqueda = busqueda.trim().length > 0;

  return (
    <div className="app">
      {/* ───────── Encabezado ───────── */}
      <header className="cabecera">
        <div className="cabecera-marca">
          <span className="cabecera-copa" aria-hidden="true">🍷</span>
          <div>
            <h1 className="cabecera-titulo">Sommelier de Chile</h1>
            <p className="cabecera-lema">Vinos por valle, de norte a sur</p>
          </div>
        </div>

        <nav className="cabecera-nav">
          <button
            className={`nav-btn ${vista === 'explorar' ? 'activo' : ''}`}
            onClick={() => setVista('explorar')}
          >
            Explorar
          </button>
          <button
            className={`nav-btn ${vista === 'cepas' ? 'activo' : ''}`}
            onClick={() => setVista('cepas')}
          >
            Cepas de Chile
          </button>
        </nav>
      </header>

      {/* ───────── Buscador (siempre visible) ───────── */}
      <div className="buscador-wrap">
        <input
          type="search"
          className="buscador"
          placeholder="Buscar viña, cepa o valle…  (ej: Carménère, Montes, Maipo)"
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            if (e.target.value.trim()) setVista('explorar');
          }}
          aria-label="Buscar viña por nombre, cepa o valle"
        />
        {hayBusqueda && (
          <button className="buscador-limpiar" onClick={() => setBusqueda('')} aria-label="Limpiar búsqueda">
            ×
          </button>
        )}
      </div>

      <main className="contenido">
        {/* ───────── Resultados de búsqueda ───────── */}
        {hayBusqueda && (
          <ListaVinas
            titulo={`Resultados para “${busqueda.trim()}”`}
            subtitulo={`${resultadosBusqueda.length} ${resultadosBusqueda.length === 1 ? 'viña encontrada' : 'viñas encontradas'}`}
            vinas={resultadosBusqueda}
            onSelectVina={setVinaActiva}
            vacioTexto="No encontramos viñas con ese nombre o cepa. Prueba con otra palabra."
          />
        )}

        {/* ───────── Vista Explorar (mapa) ───────── */}
        {!hayBusqueda && vista === 'explorar' && (
          <>
            {/* Migas de pan */}
            {region && (
              <nav className="migas" aria-label="Navegación">
                <button className="miga" onClick={volverAlMapa}>Mapa</button>
                <span className="miga-sep">›</span>
                <button
                  className={`miga ${!valleActivo ? 'actual' : ''}`}
                  onClick={() => setValleActivo(null)}
                >
                  {region.nombre}
                </button>
                {valleActivo && (
                  <>
                    <span className="miga-sep">›</span>
                    <span className="miga actual">{valleActivo}</span>
                  </>
                )}
              </nav>
            )}

            {!region && (
              <div className="intro">
                <p className="intro-texto">
                  Recorre las regiones vitícolas de Chile, desde el desierto del norte
                  hasta los viñedos fríos del sur. Elige una región en el mapa para
                  descubrir sus valles y viñas.
                </p>
              </div>
            )}

            <div className={`explorar-layout ${region ? 'con-region' : ''}`}>
              <MapaChile
                regiones={REGIONES}
                regionActiva={regionActiva}
                onSelectRegion={seleccionarRegion}
              />

              <div className="explorar-panel">
                {region && (
                  <PanelValles
                    region={region}
                    vinas={VINAS}
                    valleActivo={valleActivo}
                    onSelectValle={setValleActivo}
                  />
                )}

                {region && valleActivo && (
                  <ListaVinas
                    titulo={`Viñas de ${valleActivo}`}
                    subtitulo={`${vinasDelValle.length} ${vinasDelValle.length === 1 ? 'viña' : 'viñas'} en este valle`}
                    vinas={vinasDelValle}
                    onSelectVina={setVinaActiva}
                    vacioTexto="No hay viñas registradas en este valle dentro de los datos."
                  />
                )}
              </div>
            </div>
          </>
        )}

        {/* ───────── Vista Cepas ───────── */}
        {!hayBusqueda && vista === 'cepas' && (
          <SeccionCepas cepas={CEPAS} onBuscarCepa={buscarCepaDesdeSeccion} />
        )}
      </main>

      <footer className="pie">
        <p>
          {VINAS.length} viñas · {REGIONES.length} regiones · {CEPAS.length} cepas emblemáticas
        </p>
        <p className="pie-nota">
          Datos compilados como base de trabajo. Verifica cifras específicas en las
          webs oficiales de cada viña.
        </p>
      </footer>

      {/* ───────── Ficha modal ───────── */}
      {vinaActiva && (
        <FichaVina
          vina={vinaActiva}
          nombreRegion={nombreRegionDe(vinaActiva.region)}
          onClose={() => setVinaActiva(null)}
        />
      )}
    </div>
  );
}
