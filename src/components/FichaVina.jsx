import React, { useEffect } from 'react';

// Ficha completa de una viña, presentada como panel modal.
export default function FichaVina({ vina, nombreRegion, onClose }) {
  // Cerrar con Escape y bloquear scroll de fondo mientras está abierta.
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

  return (
    <div className="ficha-overlay" onClick={onClose}>
      <div
        className="ficha"
        role="dialog"
        aria-modal="true"
        aria-label={`Ficha de ${vina.nombre}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ficha-cerrar" onClick={onClose} aria-label="Cerrar ficha">×</button>

        <p className="ficha-region">{nombreRegion} · {vina.valle}</p>
        <h2 className="ficha-nombre">{vina.nombre}</h2>

        <div className="ficha-divisor" aria-hidden="true">❧</div>

        <p className="ficha-descripcion">{vina.descripcion}</p>

        <div className="ficha-bloque">
          <h3 className="ficha-label">Terruño</h3>
          <p className="ficha-terruno">{vina.terruno}</p>
        </div>

        <div className="ficha-bloque">
          <h3 className="ficha-label">Cepas</h3>
          <ul className="ficha-cepas">
            {vina.cepas.map((c) => (
              <li key={c} className="ficha-cepa">{c.trim()}</li>
            ))}
          </ul>
        </div>

        <div className="ficha-bloque">
          <h3 className="ficha-label">Vinos destacados</h3>
          <ul className="ficha-destacados">
            {vina.destacados.map((d) => (
              <li key={d} className="ficha-destacado">
                <span className="copa" aria-hidden="true">🍷</span> {d.trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
