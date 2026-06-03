import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import { VINAS } from '../../vinas-chile-datos.js';
import ListaVinas from '../components/ListaVinas.jsx';

export default function FavoritosPage({ onVerVina }) {
  const { favoritos } = useFavoritos();
  const viñasFavoritas = VINAS.filter(v => favoritos.includes(v.nombre));

  return (
    <main className="contenido">
      <ListaVinas
        titulo="Mis viñas favoritas"
        subtitulo={`${viñasFavoritas.length} viñas guardadas`}
        vinas={viñasFavoritas}
        onSelectVina={onVerVina}
        vacioTexto="No tienes viñas favoritas aún. Haz clic en el corazón ❤️ en cualquier viña para agregarla."
      />
    </main>
  );
}
