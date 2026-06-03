import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { IdiomaProvider } from './context/IdiomaContext';
import { TemaProvider } from './context/TemaContext';
import { FavoritosProvider } from './context/FavoritosContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <IdiomaProvider>
        <TemaProvider>
          <FavoritosProvider>
            <App />
          </FavoritosProvider>
        </TemaProvider>
      </IdiomaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
