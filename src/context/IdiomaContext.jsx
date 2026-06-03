import React, { createContext, useState, useEffect, useContext } from 'react';

const IdiomaContext = createContext();

// idioma: 'es' | 'en' | null  (null = aún no elegido → muestra pantalla inicial)
export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdiomaState] = useState(() => localStorage.getItem('idioma') || null);

  const setIdioma = (val) => {
    setIdiomaState(val);
    localStorage.setItem('idioma', val);
  };

  useEffect(() => {
    if (idioma) document.documentElement.setAttribute('lang', idioma);
  }, [idioma]);

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = () => useContext(IdiomaContext);
