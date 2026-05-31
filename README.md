# 🍷 Sommelier de Chile

Aplicación web para explorar los **vinos chilenos por valle**, desde el desierto del
norte hasta los viñedos fríos del sur. Pensada con un diseño elegante tipo **carta de
vinos** (tonos vino tinto, dorado y crema, tipografía con serifas) y optimizada para
usarse en el celular.

## ✨ Funcionalidades

- **Mapa de Chile estilizado**: las regiones vitícolas (Atacama, Coquimbo, Aconcagua,
  Valle Central y Sur) aparecen ordenadas de norte a sur. Al tocar una región se
  muestran sus valles.
- **Valles**: al elegir un valle se listan todas sus viñas, con un contador de cuántas
  hay en cada uno.
- **Ficha de viña**: al tocar una viña se abre su ficha completa con terruño, cepas,
  descripción y vinos destacados.
- **Buscador**: encuentra viñas por nombre, por cepa o por valle (por ejemplo
  "Carménère", "Montes" o "Maipo").
- **Cepas de Chile**: sección educativa con las cepas emblemáticas del país; desde cada
  cepa puedes saltar a las viñas que la trabajan.

## 🗂️ Estructura del proyecto

```
sommelier-chile/
├── index.html                  Punto de entrada + fuentes con serifas
├── package.json                Dependencias y scripts
├── vite.config.js              Configuración de Vite
└── src/
    ├── main.jsx                Arranque de React
    ├── App.jsx                 Lógica y navegación (mapa → valle → viña, buscador)
    ├── styles.css              Diseño "carta de vinos"
    ├── data/
    │   └── vinas-chile-datos.js   Datos: REGIONES, VINAS y CEPAS
    └── components/
        ├── MapaChile.jsx       Mapa SVG estilizado de Chile
        ├── PanelValles.jsx     Valles de la región seleccionada
        ├── ListaVinas.jsx      Grilla de viñas (valle o búsqueda)
        ├── FichaVina.jsx       Ficha completa (modal)
        └── SeccionCepas.jsx    Sección "Cepas de Chile"
```

## 🚀 Cómo ejecutarla

Necesitas tener instalado **Node.js 18 o superior**.

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Vite abrirá la app en el navegador, normalmente en **http://localhost:5173**.

3. Para generar la versión de producción (opcional):

   ```bash
   npm run build      # genera la carpeta dist/
   npm run preview    # sirve la versión compilada
   ```

## 🍇 Fuente de datos

Los datos provienen de `src/data/vinas-chile-datos.js`, organizados según la
zonificación oficial D.O. de Chile e incluyen **70 viñas**, **5 regiones** y **9 cepas
emblemáticas**.

> ⚠️ Los datos fueron compilados como base de trabajo. Antes de publicar conviene
> verificar cifras específicas (años de fundación, hectáreas) en las webs oficiales de
> cada viña, ya que pueden variar. La información de valles, terruños y cepas
> emblemáticas es sólida y representativa.

## 🛠️ Tecnologías

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- SVG para el mapa estilizado
- CSS puro (sin frameworks) para el diseño carta de vinos
