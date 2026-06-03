import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import { useDatos, useT } from '../i18n';
import ListaVinas from '../components/ListaVinas.jsx';

export default function FavoritosPage({ onVerVina }) {
  const { favoritos } = useFavoritos();
  const { VINAS } = useDatos();
  const t = useT();
  const vinasFavoritas = VINAS.filter(v => favoritos.includes(v.nombre));

  return (
    <main className="contenido">
      <ListaVinas
        titulo={t.misFavoritas}
        subtitulo={t.vinasGuardadas(vinasFavoritas.length)}
        vinas={vinasFavoritas}
        onSelectVina={onVerVina}
        vacioTexto={t.favVacio}
      />
    </main>
  );
}
