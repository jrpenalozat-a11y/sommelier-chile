import React, { createContext, useState, useEffect, useContext } from 'react';

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'claro');

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => useContext(TemaContext);
