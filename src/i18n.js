import { useIdioma } from './context/IdiomaContext';
import { REGIONES, VALLES, VINAS, CEPAS } from '../vinas-chile-datos.js';
import { REGIONES_EN, VINAS_EN, CEPAS_EN } from '../vinas-chile-datos.en.js';

// ───────── Cadenas de interfaz (ES / EN) ─────────
export const T = {
  es: {
    lema: 'Vinos por valle, de norte a sur',
    explorar: 'Explorar', cepas: 'Cepas',
    creadoPor: 'Creado por',
    buscarPlaceholder: 'Buscar viña, cepa o valle…',
    resultadosPara: (q) => `Resultados para “${q}”`,
    vinasEncontradas: (n) => `${n} ${n === 1 ? 'viña encontrada' : 'viñas encontradas'}`,
    mapa: 'Mapa',
    vinasDe: (v) => `Viñas de ${v}`,
    vinasCount: (n) => `${n} ${n === 1 ? 'viña' : 'viñas'}`,
    introSelecciona: 'Selecciona una región en el mapa para explorar sus valles y viñas.',
    sinVinas: 'No hay viñas para mostrar.',
    filtrarPorCepa: '🍇 Filtrar por cepa',
    limpiarFiltros: 'Limpiar filtros',
    terruno: 'Terruño', grapes: 'Cepas', vinosDestacados: 'Vinos destacados',
    fichaDescFallback: 'Viña chilena con tradición.',
    fichaTerrunoFallback: 'Suelos variados del valle.',
    cepasDeChile: 'Cepas de Chile',
    cepasIntro: 'Las variedades que definen el carácter del vino chileno. Toca una cepa para ver qué viñas la trabajan.',
    verVinasCon: (c) => `Ver viñas con ${c} →`,
    misFavoritas: 'Mis viñas favoritas',
    vinasGuardadas: (n) => `${n} ${n === 1 ? 'viña guardada' : 'viñas guardadas'}`,
    favVacio: 'No tienes viñas favoritas aún. Haz clic en el corazón ❤️ en cualquier viña para agregarla.',
    tipo: { Tinta: 'Tinta', Blanca: 'Blanca' },
    mapaTitulo: 'Valles Vitivinícolas de Chile',
    mapaSub: '· De norte a sur ·',
    mapaHint: 'Toca una zona para ver sus valles · toca un pin para ir al valle',
    mapaCargando: 'Cargando mapa de Chile…',
    mapaError: 'No se pudo cargar el mapa.',
    zonas: { atacama: 'Atacama', coquimbo: 'Coquimbo', aconcagua: 'Aconcagua', 'valle-central': 'Valle Central', sur: 'Sur' },
    bienvenidaSub: 'Elige tu idioma · Choose your language',
  },
  en: {
    lema: 'Wines by valley, from north to south',
    explorar: 'Explore', cepas: 'Grapes',
    creadoPor: 'Created by',
    buscarPlaceholder: 'Search winery, grape or valley…',
    resultadosPara: (q) => `Results for “${q}”`,
    vinasEncontradas: (n) => `${n} ${n === 1 ? 'winery found' : 'wineries found'}`,
    mapa: 'Map',
    vinasDe: (v) => `Wineries of ${v}`,
    vinasCount: (n) => `${n} ${n === 1 ? 'winery' : 'wineries'}`,
    introSelecciona: 'Select a region on the map to explore its valleys and wineries.',
    sinVinas: 'No wineries to show.',
    filtrarPorCepa: '🍇 Filter by grape',
    limpiarFiltros: 'Clear filters',
    terruno: 'Terroir', grapes: 'Grapes', vinosDestacados: 'Flagship wines',
    fichaDescFallback: 'A Chilean winery with tradition.',
    fichaTerrunoFallback: 'Varied valley soils.',
    cepasDeChile: 'Grapes of Chile',
    cepasIntro: 'The varieties that define the character of Chilean wine. Tap a grape to see which wineries work with it.',
    verVinasCon: (c) => `See wineries with ${c} →`,
    misFavoritas: 'My favorite wineries',
    vinasGuardadas: (n) => `${n} ${n === 1 ? 'saved winery' : 'saved wineries'}`,
    favVacio: "You don't have any favorite wineries yet. Click the heart ❤️ on any winery to add it.",
    tipo: { Tinta: 'Red', Blanca: 'White' },
    mapaTitulo: 'Wine Valleys of Chile',
    mapaSub: '· North to South ·',
    mapaHint: 'Tap a zone to see its valleys · tap a pin to go to the valley',
    mapaCargando: 'Loading map of Chile…',
    mapaError: 'Could not load the map.',
    zonas: { atacama: 'Atacama', coquimbo: 'Coquimbo', aconcagua: 'Aconcagua', 'valle-central': 'Central Valley', sur: 'South' },
    bienvenidaSub: 'Elige tu idioma · Choose your language',
  },
};

// Hook: cadenas de interfaz según el idioma activo (es por defecto)
export function useT() {
  const { idioma } = useIdioma();
  return T[idioma === 'en' ? 'en' : 'es'];
}

// Fusiona los datos base (español) con el overlay en inglés
export function getDatos(idioma) {
  if (idioma !== 'en') return { REGIONES, VINAS, CEPAS, VALLES };
  return {
    REGIONES: REGIONES.map((r) => ({ ...r, ...(REGIONES_EN[r.id] || {}) })),
    VINAS: VINAS.map((v) => ({ ...v, ...(VINAS_EN[v.nombre] || {}) })),
    CEPAS: CEPAS.map((c) => ({ ...c, nota: CEPAS_EN[c.nombre] || c.nota })),
    VALLES,
  };
}

// Hook: datos en el idioma activo
export function useDatos() {
  const { idioma } = useIdioma();
  return getDatos(idioma);
}
