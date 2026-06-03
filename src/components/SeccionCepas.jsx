import React from 'react';
import { useT } from '../i18n';

export default function SeccionCepas({ cepas, onBuscarCepa }) {
  const t = useT();
  return (
    <section className="seccion-cepas">
      <h2 className="titulo-seccion">{t.cepasDeChile}</h2>
      <p className="region-desc">{t.cepasIntro}</p>
      <ul className="grilla-cepas">
        {cepas.map((cepa) => (
          <li key={cepa.nombre}>
            <article className={`card-cepa tipo-${cepa.tipo.toLowerCase()}`}>
              <header className="card-cepa-head">
                <h3 className="card-cepa-nombre">{cepa.nombre}</h3>
                <span className="card-cepa-tipo">{t.tipo[cepa.tipo] || cepa.tipo}</span>
              </header>
              <p className="card-cepa-nota">{cepa.nota}</p>
              <button className="btn-ver-vinas" onClick={() => onBuscarCepa(cepa.nombre)}>
                {t.verVinasCon(cepa.nombre)}
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
