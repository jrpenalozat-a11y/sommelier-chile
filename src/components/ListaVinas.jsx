import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';

export default function ListaVinas({ titulo, subtitulo, vinas, onSelectVina, vacioTexto }) {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <section className="lista-vinas">
      {titulo && <h2 className="titulo-seccion">{titulo}</h2>}
      {subtitulo && <p className="region-desc">{subtitulo}</p>}
      {vinas.length === 0 ? (
        <p className="vacio">{vacioTexto || 'No hay viñas para mostrar.'}</p>
      ) : (
        <ul className="grilla-vinas">
          {vinas.map(vina => (
            <li key={vina.nombre} className="card-vina-wrapper">
              <button className="card-vina" onClick={() => onSelectVina(vina)}>
                <h3 className="card-vina-nombre">{vina.nombre}</h3>
                <p className="card-vina-valle">{vina.valle}</p>
                <ul className="card-vina-cepas">
                  {vina.cepas.slice(0, 3).map(c => <li key={c} className="mini-cepa">{c}</li>)}
                </ul>
              </button>
              <button
                className="favorito-corazon"
                onClick={(e) => { e.stopPropagation(); toggleFavorito(vina.nombre); }}
                aria-label={favoritos.includes(vina.nombre) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
              >
                {favoritos.includes(vina.nombre) ? '❤️' : '🤍'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
