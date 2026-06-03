import React, { useEffect } from 'react';
import { useDatos, useT } from '../i18n';

export default function FichaVina({ vina, nombreRegion, onClose }) {
  const { REGIONES } = useDatos();
  const t = useT();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!vina) return null;

  // Si no llega nombreRegion por props, se deriva de los datos (ya traducidos).
  const region = nombreRegion || REGIONES.find(r => r.id === vina.region)?.nombre || '';

  return (
    <div className="ficha-overlay" onClick={onClose}>
      <div className="ficha" role="dialog" onClick={(e) => e.stopPropagation()}>
        <button className="ficha-cerrar" onClick={onClose}>×</button>
        <p className="ficha-region">{region}{region ? ' · ' : ''}{vina.valle}</p>
        <h2 className="ficha-nombre">{vina.nombre}</h2>
        {(vina.estilo || vina.segmento) && (
          <div className="ficha-badges">
            {vina.estilo && <span className="badge">🎨 {vina.estilo}</span>}
            {vina.segmento && <span className="badge">🏷️ {vina.segmento}</span>}
          </div>
        )}
        <div className="ficha-divisor">❧</div>
        <p className="ficha-descripcion">{vina.descripcion || vina.destacados?.[0] || t.fichaDescFallback}</p>
        <div className="ficha-bloque">
          <h3 className="ficha-label">{t.terruno}</h3>
          <p className="ficha-terruno">{vina.terruno || t.fichaTerrunoFallback}</p>
        </div>
        <div className="ficha-bloque">
          <h3 className="ficha-label">{t.grapes}</h3>
          <ul className="ficha-cepas">
            {vina.cepas.map(c => <li key={c} className="ficha-cepa">{c}</li>)}
          </ul>
        </div>
        <div className="ficha-bloque">
          <h3 className="ficha-label">{t.vinosDestacados}</h3>
          <ul className="ficha-destacados">
            {vina.destacados.map(d => <li key={d} className="ficha-destacado">🍷 {d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
