import React from 'react';
import { useT } from '../i18n';

export default function FiltrosCepas({ cepasDisponibles, filtroCepas, setFiltroCepas }) {
  const t = useT();
  if (!cepasDisponibles.length) return null;
  return (
    <div className="filtros-cepas">
      <h4 className="filtros-titulo">{t.filtrarPorCepa}</h4>
      <div className="filtros-grupo">
        {cepasDisponibles.map(cepa => (
          <label key={cepa} className="filtro-check">
            <input
              type="checkbox"
              checked={filtroCepas.includes(cepa)}
              onChange={() => {
                if (filtroCepas.includes(cepa)) {
                  setFiltroCepas(filtroCepas.filter(c => c !== cepa));
                } else {
                  setFiltroCepas([...filtroCepas, cepa]);
                }
              }}
            />
            {cepa}
          </label>
        ))}
      </div>
      {filtroCepas.length > 0 && (
        <button className="filtros-limpiar" onClick={() => setFiltroCepas([])}>{t.limpiarFiltros}</button>
      )}
    </div>
  );
}
