import React from 'react';

export default function SeccionCepas({ cepas, onBuscarCepa }) {
  return (
    <section className="seccion-cepas">
      <h2 className="titulo-seccion">Cepas de Chile</h2>
      <p className="region-desc">Las variedades que definen el carácter del vino chileno. Toca una cepa para ver qué viñas la trabajan.</p>
      <ul className="grilla-cepas">
        {cepas.map((cepa) => (
          <li key={cepa.nombre}>
            <article className={`card-cepa tipo-${cepa.tipo.toLowerCase()}`}>
              <header className="card-cepa-head">
                <h3 className="card-cepa-nombre">{cepa.nombre}</h3>
                <span className="card-cepa-tipo">{cepa.tipo}</span>
              </header>
              <p className="card-cepa-nota">{cepa.nota}</p>
              <button className="btn-ver-vinas" onClick={() => onBuscarCepa(cepa.nombre)}>
                Ver viñas con {cepa.nombre} →
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
