import React, { useEffect, useRef } from 'react';

// ════════════════════════════════════════════════════════════
//  Mapa real de Chile (chile-mapa.svg, Wikimedia Commons CC BY-SA)
//  Se carga el SVG, se agrupan sus regiones en las zonas vitícolas
//  de la app y se colorean con tonos de vino. Se añaden pines por
//  valle y se conecta la navegación (zona → valles, pin → valle).
// ════════════════════════════════════════════════════════════

const SVG_NS = 'http://www.w3.org/2000/svg';

// Cada zona (id de región en los datos) → ids de región en el SVG
const ZONA_SVG = {
  atacama:        ['Region_Arica_Parinacota', 'Region_Tarapaca', 'Region_Antofagasta', 'Region_Atacama'],
  coquimbo:       ['Region_Coquimbo'],
  aconcagua:      ['Region_Valparaiso'],
  'valle-central':['Region_Metropolitana', 'Region_OHiggins', 'Region_Maule'],
  sur:            ['Nuble-9', 'Biobio-4', 'Region_Araucania', 'Region_Los_Rios', 'Region_Los_Lagos', 'Region_Aisen', 'Region_Magallanes'],
};

// Tono de vino por zona (cálido al norte → profundo al sur)
const ZONA_COLOR = {
  atacama:        '#bb6a52',
  coquimbo:       '#a83f44',
  aconcagua:      '#922f3c',
  'valle-central':'#7a2433',
  sur:            '#561a29',
};

// Posición aproximada de cada valle: región-ancla del SVG + fracción vertical.
// Los de Valparaíso usan banda interpolada (vp) por traer islas fusionadas.
const VALLE_POS = {
  'Atacama':                 { anchor: 'Region_Atacama', f: 0.55 },
  'Elqui':                   { anchor: 'Region_Coquimbo', f: 0.18 },
  'Limarí':                  { anchor: 'Region_Coquimbo', f: 0.5 },
  'Choapa':                  { anchor: 'Region_Coquimbo', f: 0.82 },
  'Aconcagua':               { vp: 0.18 },
  'Casablanca':              { vp: 0.5 },
  'San Antonio / Leyda':     { vp: 0.82 },
  'Maipo':                   { anchor: 'Region_Metropolitana', f: 0.5 },
  'Cachapoal':               { anchor: 'Region_OHiggins', f: 0.32 },
  'Colchagua':               { anchor: 'Region_OHiggins', f: 0.72 },
  'Curicó':                  { anchor: 'Region_Maule', f: 0.3 },
  'Maule':                   { anchor: 'Region_Maule', f: 0.7 },
  'Itata':                   { anchor: 'Nuble-9', f: 0.5 },
  'Biobío':                  { anchor: 'Biobio-4', f: 0.5 },
  'Malleco':                 { anchor: 'Region_Araucania', f: 0.4 },
  'Osorno / Región Austral': { anchor: 'Region_Los_Lagos', f: 0.5 },
};

// Insets/islas que no son Chile continental (distorsionan el encuadre)
const ISLA = /Isla|Pascua|Juan_Fern|Selkirk|Crusoe|Ant[aá]rt|Rect_|San_Felix|Sala_y/i;

function el(name, attrs, parent) {
  const e = document.createElementNS(SVG_NS, name);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
function isIsland(node, stop) {
  let n = node;
  while (n) {
    if (n.id && ISLA.test(n.id)) return true;
    if (n === stop) break;
    n = n.parentNode;
  }
  return false;
}
// Bounding box usando solo los paths visibles (excluye islas ocultas)
function visBBox(node) {
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  const ps = node.tagName.toLowerCase() === 'path' ? [node] : node.querySelectorAll('path');
  ps.forEach((p) => {
    if (p.style.display === 'none') return;
    try {
      const b = p.getBBox();
      if (b.width || b.height) {
        x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y);
        x1 = Math.max(x1, b.x + b.width); y1 = Math.max(y1, b.y + b.height);
      }
    } catch (_) {}
  });
  if (x1 < x0) return null;
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0, x2: x1, y2: y1 };
}

export default function MapaChile({ regiones, regionActiva, onSelectRegion, onSelectValle }) {
  const contRef = useRef(null);
  // callbacks siempre frescos sin reconstruir el SVG
  const cb = useRef({});
  cb.current = { onSelectRegion, onSelectValle, regiones, regionActiva };

  // Construcción única del mapa
  useEffect(() => {
    let cancelado = false;
    const cont = contRef.current;
    if (!cont) return;
    cont.innerHTML = '<p class="mapa-cargando">Cargando mapa de Chile…</p>';

    fetch(import.meta.env.BASE_URL + 'chile-mapa.svg')
      .then((r) => r.text())
      .then((txt) => {
        if (cancelado) return;
        cont.innerHTML = txt;
        const svg = cont.querySelector('svg');
        if (!svg) return;
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.classList.add('mapa-real');

        const { regiones, onSelectRegion, onSelectValle } = cb.current;
        const idsZona = {}; // regionId → nodos del SVG (para hover/activo)

        // 1) Ocultar todo, luego mostrar solo el continente coloreado por zona
        svg.querySelectorAll('path,rect,polygon,polyline,circle,ellipse,image,text,line,use')
          .forEach((p) => { p.style.display = 'none'; });

        const recoloreados = [];
        for (const zonaId in ZONA_SVG) {
          const nodos = [];
          ZONA_SVG[zonaId].forEach((svgId) => {
            const node = document.getElementById(svgId);
            if (!node) return;
            const paths = node.tagName.toLowerCase() === 'path' ? [node] : node.querySelectorAll('path');
            paths.forEach((p) => {
              if (isIsland(p, node)) return;
              p.style.display = '';
              p.style.fill = ZONA_COLOR[zonaId];
              p.style.stroke = '#caa24c';
              p.style.strokeOpacity = '0.5';
              p.style.strokeWidth = '0.7';
            });
            node.classList.add('mapa-zona');
            node.dataset.zona = zonaId;
            node.style.cursor = 'pointer';
            node.addEventListener('click', () => cb.current.onSelectRegion(zonaId));
            nodos.push(node);
            recoloreados.push(node);
          });
          if (nodos.length) idsZona[zonaId] = nodos;
        }
        svg._idsZona = idsZona;

        // 2) Encuadre al Chile continental
        let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
        recoloreados.forEach((n) => {
          const b = visBBox(n);
          if (b) { x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y); x1 = Math.max(x1, b.x2); y1 = Math.max(y1, b.y2); }
        });
        const w = x1 - x0;
        const padL = w * 0.42, padR = w * 0.52, padV = 30;
        const vbX = x0 - padL, vbY = y0 - padV, vbW = w + padL + padR, vbH = (y1 - y0) + padV * 2;
        svg.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

        const bboxOf = (id) => { const n = document.getElementById(id); return n ? visBBox(n) : null; };
        const ann = el('g', {}, svg); // capa de anotaciones
        const gutterX = x0 - padL * 0.8;

        // 3) Banda interpolada para los valles de Valparaíso (Aconcagua)
        const coqB = bboxOf('Region_Coquimbo'), metB = bboxOf('Region_Metropolitana');
        const vpBand = (coqB && metB)
          ? { top: coqB.y2, span: (metB.y + metB.height * 0.5) - coqB.y2, x: metB.x + metB.width * 0.22 }
          : null;

        // 4) Marcadores de valle + callouts, recorriendo los datos reales
        regiones.forEach((reg) => {
          (reg.valles || []).forEach((valle) => {
            const pos = VALLE_POS[valle];
            if (!pos) return;
            let mx, my;
            if (pos.vp != null) {
              if (!vpBand) return;
              mx = vpBand.x; my = vpBand.top + vpBand.span * pos.vp;
            } else {
              const b = bboxOf(pos.anchor);
              if (!b) return;
              mx = b.x + b.width * 0.5; my = b.y + b.height * pos.f;
            }
            const g = el('g', { class: 'mapa-pin-g', 'data-zona': reg.id }, ann);
            g.style.cursor = 'pointer';
            g.addEventListener('click', (ev) => { ev.stopPropagation(); cb.current.onSelectValle(reg.id, valle); });
            el('line', { x1: gutterX + padL * 0.45, y1: my, x2: mx, y2: my, class: 'mapa-vcnx' }, g);
            el('circle', { cx: mx, cy: my, r: padL * 0.058, class: 'mapa-vhalo' }, g);
            el('circle', { cx: mx, cy: my, r: padL * 0.03, class: 'mapa-vpin' }, g);
            const t = el('text', { x: gutterX, y: my + padL * 0.024, class: 'mapa-vlabel' }, g);
            t.setAttribute('font-size', padL * 0.11);
            t.textContent = valle.replace(' / Leyda', '').replace(' / Región Austral', ' Austral');
          });
        });

        // 5) Etiquetas de zona (derecha)
        const ZL = [
          { t: 'Atacama', anchor: 'Region_Atacama', yo: 0 },
          { t: 'Coquimbo', anchor: 'Region_Coquimbo', yo: -0.18 },
          { t: 'Aconcagua', vp: true, yo: 0 },
          { t: 'Valle Central', anchor: 'Region_OHiggins', yo: 0 },
          { t: 'Sur', anchor: 'Region_Araucania', yo: 0 },
        ];
        ZL.forEach((z) => {
          let landX, ly;
          if (z.vp && vpBand && metB) { ly = vpBand.top + vpBand.span * 0.5; landX = metB.x + metB.width; }
          else { const b = bboxOf(z.anchor); if (!b) return; landX = b.x + b.width; ly = b.y + b.height * (0.5 + (z.yo || 0)); }
          const lx = landX + padR * 0.12;
          el('line', { x1: landX, y1: ly, x2: lx - padR * 0.03, y2: ly, class: 'mapa-zcnx' }, ann);
          const t = el('text', { x: lx, y: ly + padR * 0.045, class: 'mapa-zlabel' }, ann);
          t.setAttribute('font-size', padR * 0.14);
          t.textContent = z.t;
        });

        // 6) Oleaje + rosa de los vientos
        [0.08, 0.16, 0.24].forEach((fy) => {
          const yy = y0 + vbH * fy;
          el('path', { d: `M ${vbX + vbW * 0.06} ${yy} q ${vbW * 0.05} -${vbW * 0.02} ${vbW * 0.1} 0 t ${vbW * 0.1} 0`,
            fill: 'none', stroke: '#9fb6c0', 'stroke-width': vbW * 0.004, opacity: 0.5 }, ann);
        });
        const cr = padL * 0.5, ccx = vbX + cr * 1.4, ccy = vbY + vbH - cr * 1.5;
        const rose = el('g', { transform: `translate(${ccx} ${ccy})` }, ann);
        el('circle', { r: cr, fill: 'rgba(251,246,236,.7)', stroke: '#c9a24b', 'stroke-width': cr * 0.04 }, rose);
        el('line', { x1: 0, y1: -cr * 0.85, x2: 0, y2: cr * 0.85, stroke: '#b98f2e', 'stroke-width': cr * 0.04 }, rose);
        el('line', { x1: -cr * 0.85, y1: 0, x2: cr * 0.85, y2: 0, stroke: '#b98f2e', 'stroke-width': cr * 0.04 }, rose);
        el('polygon', { points: `0,${-cr * 0.85} ${cr * 0.16},0 0,${cr * 0.24} ${-cr * 0.16},0`, fill: '#7b2233' }, rose);
        el('polygon', { points: `0,${cr * 0.85} ${cr * 0.16},0 0,${-cr * 0.24} ${-cr * 0.16},0`, fill: '#caa24c' }, rose);
        el('polygon', { points: `${cr * 0.85},0 0,${cr * 0.16} ${-cr * 0.24},0 0,${-cr * 0.16}`, fill: '#caa24c' }, rose);
        el('polygon', { points: `${-cr * 0.85},0 0,${cr * 0.16} ${cr * 0.24},0 0,${-cr * 0.16}`, fill: '#caa24c' }, rose);
        const tn = el('text', { x: 0, y: -cr * 0.95, 'text-anchor': 'middle', fill: '#7b2233', 'font-weight': '700' }, rose);
        tn.setAttribute('font-size', cr * 0.34);
        tn.setAttribute('font-family', 'Cormorant Garamond, serif');
        tn.textContent = 'N';

        aplicarActivo(svg, cb.current.regionActiva);
      })
      .catch((e) => {
        if (!cancelado && cont) cont.innerHTML = '<p class="mapa-cargando">No se pudo cargar el mapa.</p>';
        // eslint-disable-next-line no-console
        console.error('Mapa Chile:', e);
      });

    return () => { cancelado = true; };
  }, []);

  // Resaltar la zona activa cuando cambia regionActiva
  useEffect(() => {
    const svg = contRef.current && contRef.current.querySelector('svg');
    if (svg && svg._idsZona) aplicarActivo(svg, regionActiva);
  }, [regionActiva]);

  function aplicarActivo(svg, activa) {
    const map = svg._idsZona || {};
    Object.keys(map).forEach((zonaId) => {
      map[zonaId].forEach((node) => {
        node.classList.toggle('activa', zonaId === activa);
      });
    });
    // Mostrar las etiquetas de valle solo de la zona activa
    svg.querySelectorAll('.mapa-pin-g').forEach((g) => {
      g.classList.toggle('activa', g.dataset.zona === activa);
    });
  }

  return (
    <div className="mapa-wrap">
      <p className="mapa-titulo">Valles Vitivinícolas de Chile</p>
      <p className="mapa-sub">· De norte a sur ·</p>
      <div className="mapa-area" ref={contRef} aria-label="Mapa de las zonas vitícolas de Chile" />
      <p className="mapa-hint">Toca una zona para ver sus valles · toca un pin para ir al valle</p>
    </div>
  );
}
