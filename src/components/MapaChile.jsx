import React from 'react';

// Geometría estilizada de Chile: una franja vertical que se ensancha
// en el Valle Central y se afina en los extremos (norte y sur).
// No es geográficamente exacta, pero respeta el orden N→S y es navegable.
const CX = 130;

// Para cada región: y superior, y inferior, semi-ancho arriba y abajo.
// El orden debe coincidir con REGIONES (norte → sur).
const GEO = {
  atacama:         { yTop: 30,  yBot: 170, hwTop: 24, hwBot: 34 },
  coquimbo:        { yTop: 170, yBot: 300, hwTop: 34, hwBot: 42 },
  aconcagua:       { yTop: 300, yBot: 400, hwTop: 42, hwBot: 44 },
  'valle-central': { yTop: 400, yBot: 560, hwTop: 44, hwBot: 38 },
  sur:             { yTop: 560, yBot: 700, hwTop: 38, hwBot: 18 },
};

// Paleta de tonos vino para cada región (norte cálido → sur frío)
const COLORES = {
  atacama:         '#8a3b2e',
  coquimbo:        '#7e2233',
  aconcagua:       '#6e1c2f',
  'valle-central': '#5b1a2b',
  sur:             '#47172a',
};

function poligono({ yTop, yBot, hwTop, hwBot }) {
  return [
    `${CX - hwTop},${yTop}`,
    `${CX + hwTop},${yTop}`,
    `${CX + hwBot},${yBot}`,
    `${CX - hwBot},${yBot}`,
  ].join(' ');
}

export default function MapaChile({ regiones, regionActiva, onSelectRegion }) {
  return (
    <div className="mapa-wrap">
      <svg
        className="mapa-svg"
        viewBox="0 0 360 730"
        role="group"
        aria-label="Mapa de las regiones vitícolas de Chile, de norte a sur"
      >
        {/* Océano Pacífico (lado izquierdo) y leyenda de orientación */}
        <text x="18" y="50" className="mapa-brujula">N</text>
        <line x1="24" y1="60" x2="24" y2="690" className="mapa-eje" />
        <text x="18" y="708" className="mapa-brujula">S</text>
        <text x="40" y="370" className="mapa-oceano" transform="rotate(-90 40 370)">
          Océano Pacífico
        </text>

        {regiones.map((region) => {
          const geo = GEO[region.id];
          if (!geo) return null;
          const activa = regionActiva === region.id;
          const yMid = (geo.yTop + geo.yBot) / 2;
          return (
            <g
              key={region.id}
              className={`mapa-region ${activa ? 'activa' : ''}`}
              onClick={() => onSelectRegion(region.id)}
              role="button"
              tabIndex={0}
              aria-pressed={activa}
              aria-label={`Región ${region.nombre}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectRegion(region.id);
                }
              }}
            >
              <polygon
                points={poligono(geo)}
                fill={COLORES[region.id]}
                className="mapa-poligono"
              />
              {/* Punto marcador + línea conectora hacia la etiqueta */}
              <circle cx={CX} cy={yMid} r="4" className="mapa-punto" />
              <line x1={CX + (GEO[region.id].hwTop)} y1={yMid} x2="270" y2={yMid} className="mapa-conector" />
              <text x="276" y={yMid - 4} className="mapa-etiqueta">{region.nombre}</text>
              <text x="276" y={yMid + 13} className="mapa-sub">
                {region.valles.length} {region.valles.length === 1 ? 'valle' : 'valles'}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mapa-hint">Toca una región para ver sus valles</p>
    </div>
  );
}
