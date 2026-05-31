import React from 'react';

// Muestra los valles de una región seleccionada y cuántas viñas tiene cada uno.
export default function PanelValles({ region, vinas, valleActivo, onSelectValle }) {
  if (!region) return null;

  const conteoPorValle = (valle) =>
    vinas.filter((v) => v.region === region.id && v.valle === valle).length;

  return (
    <section className="panel-valles" aria-label={`Valles de ${region.nombre}`}>
      <h2 className="titulo-seccion">{region.nombre}</h2>
      <p className="region-desc">{region.descripcion}</p>
      <ul className="lista-valles">
        {region.valles.map((valle) => {
          const n = conteoPorValle(valle);
          const activo = valleActivo === valle;
          return (
            <li key={valle}>
              <button
                className={`chip-valle ${activo ? 'activo' : ''}`}
                onClick={() => onSelectValle(valle)}
                disabled={n === 0}
                title={n === 0 ? 'Sin viñas registradas en estos datos' : ''}
              >
                <span className="chip-nombre">{valle}</span>
                <span className="chip-conteo">{n}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
