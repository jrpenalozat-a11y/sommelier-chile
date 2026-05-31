import React from 'react';

// Lista de viñas (de un valle o de una búsqueda). Cada tarjeta abre la ficha.
export default function ListaVinas({ titulo, subtitulo, vinas, onSelectVina, vacioTexto }) {
  return (
    <section className="lista-vinas" aria-label={titulo}>
      {titulo && <h2 className="titulo-seccion">{titulo}</h2>}
      {subtitulo && <p className="region-desc">{subtitulo}</p>}

      {vinas.length === 0 ? (
        <p className="vacio">{vacioTexto || 'No hay viñas para mostrar.'}</p>
      ) : (
        <ul className="grilla-vinas">
          {vinas.map((vina) => (
            <li key={vina.nombre}>
              <button className="card-vina" onClick={() => onSelectVina(vina)}>
                <h3 className="card-vina-nombre">{vina.nombre}</h3>
                <p className="card-vina-valle">{vina.valle}</p>
                <ul className="card-vina-cepas">
                  {vina.cepas.slice(0, 4).map((c) => (
                    <li key={c} className="mini-cepa">{c.trim()}</li>
                  ))}
                </ul>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
