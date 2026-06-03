import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDatos, useT } from '../i18n';
import { useIdioma } from '../context/IdiomaContext';
import MapaChile from '../components/MapaChile.jsx';
import PanelValles from '../components/PanelValles.jsx';
import ListaVinas from '../components/ListaVinas.jsx';
import FiltrosCepas from '../components/FiltrosCepas.jsx';

export default function ExplorarPage({ onVerVina }) {
  const { REGIONES, VINAS } = useDatos();
  const t = useT();
  const { idioma } = useIdioma();
  const [searchParams, setSearchParams] = useSearchParams();
  const regionId = searchParams.get('region');
  const valleNombre = searchParams.get('valle');
  const busqueda = searchParams.get('buscar') || '';

  const [filtroCepas, setFiltroCepas] = useState([]);

  const region = REGIONES.find(r => r.id === regionId) || null;
  const valleActivo = region && valleNombre && region.valles.includes(valleNombre) ? valleNombre : null;

  const setRegion = (id) => setSearchParams({ region: id });
  const setValle = (valle) => setSearchParams({ region: region.id, valle });
  const limpiarValle = () => setSearchParams({ region: region.id });
  const volverAlMapa = () => setSearchParams({});

  const vinasDelValle = useMemo(() => {
    if (!region || !valleActivo) return [];
    let filtradas = VINAS.filter(v => v.region === region.id && v.valle === valleActivo);
    if (filtroCepas.length) {
      filtradas = filtradas.filter(v => v.cepas.some(c => filtroCepas.includes(c)));
    }
    return filtradas;
  }, [region, valleActivo, filtroCepas, VINAS]);

  const todasCepasDelValle = useMemo(() => {
    if (!vinasDelValle.length) return [];
    const cepasSet = new Set();
    vinasDelValle.forEach(v => v.cepas.forEach(c => cepasSet.add(c)));
    return Array.from(cepasSet).sort();
  }, [vinasDelValle]);

  const vinasFiltradasBusqueda = useMemo(() => {
    if (!busqueda) return [];
    const q = busqueda.toLowerCase();
    return VINAS.filter(v =>
      v.nombre.toLowerCase().includes(q) ||
      v.valle.toLowerCase().includes(q) ||
      v.cepas.some(c => c.toLowerCase().includes(q))
    );
  }, [busqueda, VINAS]);

  return (
    <main className="contenido">
      <div className="buscador-wrap">
        <input
          type="search"
          className="buscador"
          placeholder={t.buscarPlaceholder}
          value={busqueda}
          onChange={(e) => setSearchParams({ buscar: e.target.value })}
        />
        {busqueda && (
          <button className="buscador-limpiar" onClick={() => setSearchParams({})}>×</button>
        )}
      </div>

      {busqueda ? (
        <ListaVinas
          titulo={t.resultadosPara(busqueda)}
          subtitulo={t.vinasEncontradas(vinasFiltradasBusqueda.length)}
          vinas={vinasFiltradasBusqueda}
          onSelectVina={onVerVina}
        />
      ) : (
        <>
          {region && (
            <nav className="migas">
              <button className="miga" onClick={volverAlMapa}>{t.mapa}</button>
              <span className="miga-sep">›</span>
              <button className={`miga ${!valleActivo ? 'actual' : ''}`} onClick={limpiarValle}>
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

          <div className={`explorar-layout ${region ? 'con-region' : ''}`}>
            <MapaChile
              key={idioma}
              regiones={REGIONES}
              regionActiva={regionId}
              onSelectRegion={setRegion}
              onSelectValle={(regId, valle) => setSearchParams({ region: regId, valle })}
            />

            <div className="explorar-panel">
              {region && (
                <>
                  <PanelValles region={region} vinas={VINAS} valleActivo={valleActivo} onSelectValle={setValle} />
                  {valleActivo && (
                    <>
                      {todasCepasDelValle.length > 0 && (
                        <FiltrosCepas
                          cepasDisponibles={todasCepasDelValle}
                          filtroCepas={filtroCepas}
                          setFiltroCepas={setFiltroCepas}
                        />
                      )}
                      <ListaVinas
                        titulo={t.vinasDe(valleActivo)}
                        subtitulo={t.vinasCount(vinasDelValle.length)}
                        vinas={vinasDelValle}
                        onSelectVina={onVerVina}
                      />
                    </>
                  )}
                </>
              )}
              {!region && (
                <div className="intro">
                  <p className="intro-texto">{t.introSelecciona}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
