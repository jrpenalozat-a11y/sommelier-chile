import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { TemaProvider } from './context/TemaContext';
import { FavoritosProvider } from './context/FavoritosContext';
import './styles.css';

// basename derivado de la base de Vite: '/' en local, '/sommelier-chile/' en build.
// Así el router funciona igual en desarrollo y en GitHub Pages.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <TemaProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </TemaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
