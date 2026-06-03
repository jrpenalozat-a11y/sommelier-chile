import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CEPAS } from '../../vinas-chile-datos.js';
import SeccionCepas from '../components/SeccionCepas.jsx';

export default function CepasPage() {
  const navigate = useNavigate();
  const buscarCepa = (nombreCepa) => {
    navigate(`/?buscar=${encodeURIComponent(nombreCepa)}`);
  };
  return <SeccionCepas cepas={CEPAS} onBuscarCepa={buscarCepa} />;
}
