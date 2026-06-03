import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem('favoritos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (nombreVina) => {
    setFavoritos(prev =>
      prev.includes(nombreVina)
        ? prev.filter(v => v !== nombreVina)
        : [...prev, nombreVina]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
