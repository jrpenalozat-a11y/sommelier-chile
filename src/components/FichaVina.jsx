import React, { useEffect } from 'react';
import { REGIONES } from '../../vinas-chile-datos.js';

export default function FichaVina({ vina, nombreRegion, onClose }) {
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

  // Si no llega nombreRegion por props, se deriva de los datos.
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
        <p className="ficha-descripcion">{vina.descripcion || vina.destacados?.[0] || 'Viña chilena con tradición.'}</p>
        <div className="ficha-bloque">
          <h3 className="ficha-label">Terruño</h3>
          <p className="ficha-terruno">{vina.terruno || 'Suelos variados del valle.'}</p>
        </div>
        <div className="ficha-bloque">
          <h3 className="ficha-label">Cepas</h3>
          <ul className="ficha-cepas">
            {vina.cepas.map(c => <li key={c} className="ficha-cepa">{c}</li>)}
          </ul>
        </div>
        <div className="ficha-bloque">
          <h3 className="ficha-label">Vinos destacados</h3>
          <ul className="ficha-destacados">
            {vina.destacados.map(d => <li key={d} className="ficha-destacado">🍷 {d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
