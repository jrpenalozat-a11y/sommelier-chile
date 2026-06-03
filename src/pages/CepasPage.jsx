import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDatos } from '../i18n';
import SeccionCepas from '../components/SeccionCepas.jsx';

export default function CepasPage() {
  const { CEPAS } = useDatos();
  const navigate = useNavigate();
  const buscarCepa = (nombreCepa) => {
    navigate(`/?buscar=${encodeURIComponent(nombreCepa)}`);
  };
  return <SeccionCepas cepas={CEPAS} onBuscarCepa={buscarCepa} />;
}
