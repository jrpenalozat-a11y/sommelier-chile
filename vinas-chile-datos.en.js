// ════════════════════════════════════════════════════════════════
//  ENGLISH TRANSLATION OVERLAY for vinas-chile-datos.js
//  Only prose fields are translated. Proper nouns (winery names,
//  grape varieties, flagship wine names, valley/region identifiers)
//  are shared from the Spanish source and NOT duplicated here.
//  Merged at runtime by src/i18n.js -> getDatos('en').
//  Keys must match the Spanish `nombre` / region id exactly.
// ════════════════════════════════════════════════════════════════

// Regions: translated display name + description
export const REGIONES_EN = {
  atacama: {
    nombre: "Atacama",
    descripcion: "Far-northern viticulture, historically dominated by pisco production. Today also the cradle of the country's most extreme winegrowing: high-altitude wines and 'desert wine'.",
  },
  coquimbo: {
    nombre: "Coquimbo",
    descripcion: "A transition between the desert and the Mediterranean climate. Transverse valleys strongly shaped by altitude and the sea. Home of pisco and of cool-climate Syrah.",
  },
  aconcagua: {
    nombre: "Aconcagua",
    descripcion: "From the Andes to the sea. It includes both powerful warm-climate reds (inland Aconcagua) and fresh coastal whites (Casablanca, San Antonio–Leyda).",
  },
  "valle-central": {
    nombre: "Central Valley",
    descripcion: "The historic, productive heart of Chilean wine. A Mediterranean climate ideal for Cabernet Sauvignon and Carménère. It concentrates the country's most emblematic wineries.",
  },
  sur: {
    nombre: "South",
    descripcion: "Heritage and dry-farmed viticulture. Traditional varieties such as País and Cinsault in century-old vineyards, alongside new cool-climate whites and the southern Patagonian frontier.",
  },
};

// Cepa notes (grape name and type label are handled by the UI layer)
export const CEPAS_EN = {
  "Carménère": "Chile's emblematic grape. Nearly extinct in Bordeaux, it was mistaken for Merlot until its re-identification in 1994. It yields deep-colored wines with notes of bell pepper, ripe red fruit and spice.",
  "Cabernet Sauvignon": "Chile's most planted grape. In the Alto Maipo it reaches world-class expressions: cassis, mint and firm tannins.",
  "Syrah": "Versatile: powerful and spicy in warm climates (Aconcagua), or fresh and floral in cool climates (Elqui, San Antonio).",
  "País": "A historic grape brought by the Spanish. The backbone of heritage dry-farmed wine (Itata, Maule, Biobío). Currently undergoing a revival with century-old vines.",
  "Sauvignon Blanc": "The star white of the coastal valleys (Casablanca, Leyda). Citrus and herbaceous notes with great salinity from the maritime influence.",
  "Chardonnay": "Shines in cool climates and limestone soils (Limarí) or the very cold south (Malleco). Mineral, with good acidity.",
  "Pinot Noir": "A delicate grape that finds its place in cool coastal and southern climates (Leyda, Casablanca, Biobío). Fresh and elegant.",
  "Cinsault": "A grape of the Itata and Maule dryland, once used for bulk wine, today revalued in juicy, light fine wines.",
  "Carignan": "Planted in the Maule after the 1939 earthquake. Old dry-farmed vines give intense reds; the basis of the VIGNO seal.",
  "Merlot": "For years it was confused with Carménère in Chilean vineyards until they were told apart in the 1990s. It gives soft, round, fruity wines and performs very well in cool zones such as Isla de Maipo.",
  "Malbec": "Though more associated with Argentina, in Chile it has notable old vines, especially in Colchagua (Cunaco). Juicy reds of black fruit and violets.",
  "Cabernet Franc": "A Bordeaux grape on the rise in Chile. It gives aromatic wines with herbaceous and bell-pepper notes and great freshness; it stands out in Maule, Maipo and Colchagua.",
  "Petit Verdot": "A late-ripening grape that adds color, structure and spice to Bordeaux blends in warm climates such as Maipo and Aconcagua.",
  "Viognier": "An aromatic white from the Rhône, successfully introduced in Chile (Viña Anakena being a pioneer). Notes of peach, apricot and flowers.",
  "Moscatel": "A traditional, highly aromatic grape of the Itata and Biobío dryland. The basis of heritage wines and of white pipeño.",
  "Riesling": "A German cool-climate grape. In Chile it stands out in the Biobío Valley, where Cono Sur pioneered the first valley-appellation Riesling. It gives high-acid whites, citrusy and floral, with peach notes and a mineral touch.",
  "Gewürztraminer": "An aromatic cool-climate grape grown in southern Chile (Biobío). Very perfumed, with notes of lychee, roses and spice. Cono Sur was among the first to produce it in the country.",
};

// Wineries: terruno (terroir), descripcion (description), estilo (style), segmento (segment)
export const VINAS_EN = {
  "Ayllu (Cooperativa Lickanantay)": {
    terruno: "Toconao, near San Pedro de Atacama, with vineyards between 2,400 and 3,200 m above sea level—among the highest in the world. A high-altitude desert with extreme radiation and enormous day–night temperature swings.",
    descripcion: "One of Chile's most emblematic high-altitude wine projects, crafted by hand by the Lickanantay Cooperative, made up of small growers from Atacama communities. Hand-harvested while preserving age-old traditions. Wines of very distinctive salinity and minerality, with a rustic style.",
    estilo: "Extreme high-altitude, artisanal and Indigenous wine", segmento: "Niche / cult",
  },
  "Vino del Desierto (U. Arturo Prat)": {
    terruno: "La Huayca and Pintados, in the Tarapacá region, deep in the Atacama Desert—the driest in the world. Saline soils, wind, dust and extreme solar radiation, with very little water.",
    descripcion: "A pioneering 'desert wine' project. It uses the Tamarugal grape, discovered in 2003 by academic Ingrid Poblete, which survived nearly a century exposed and untended, developing a unique adaptation to the harsh climate. Heroic viticulture against all odds.",
    estilo: "Heroic desert viticulture", segmento: "Niche / experimental",
  },
  "Viña Falernia": {
    terruno: "High-altitude vineyards in the Elqui Valley, with clear skies and great temperature swings. Stony soils of alluvial origin.",
    descripcion: "A pioneer of wine in Elqui, founded by the Olivier family together with Italian immigrants. Renowned for its high-altitude cool-climate Syrah.",
    estilo: "Valley pioneer, mid-scale", segmento: "Reserva to premium",
  },
  "Viña Tabalí": {
    terruno: "Limestone soils unique in Chile, with maritime influence from the Humboldt Current and coastal fog (camanchaca).",
    descripcion: "A flagship Limarí winery, famous for its mineral whites on limestone soil, comparable to those of cool-climate Old World regions.",
    estilo: "Premium terroir-driven", segmento: "Reserva to icon",
  },
  "Viña Maycas del Limarí": {
    terruno: "Soils with calcium carbonate, a semi-desert climate tempered by the ocean.",
    descripcion: "A project focused on expressing the minerality of Limarí, with high-tension Chardonnay and elegant Syrah.",
    estilo: "Premium terroir-driven", segmento: "Reserva to premium",
  },
  "Viña Errázuriz": {
    terruno: "Hillsides of the Aconcagua Valley, a warm, dry inland climate; also coastal vineyards (Aconcagua Costa). Colluvial and granitic soils.",
    descripcion: "Founded in 1870 by Maximiano Errázuriz. One of Chile's most prestigious wineries, famous for the 2004 'Berlin Tasting', where its wines beat great names from Bordeaux and Tuscany.",
    estilo: "Historic traditional, premium", segmento: "Reserva to icon",
  },
  "Viña Seña": {
    terruno: "Aconcagua hills under biodynamic management. Poor, well-drained soils that bring concentration.",
    descripcion: "An icon born from the partnership between Eduardo Chadwick (Errázuriz) and Robert Mondavi. A cult Bordeaux-style blend, a benchmark of premium Chilean wine.",
    estilo: "Icon, biodynamic", segmento: "Icon (top tier)",
  },
  "Viña Von Siebenthal": {
    terruno: "Panquehue, a warm sector of Aconcagua. Stony alluvial soils.",
    descripcion: "A boutique project by Swiss-born Mauro von Siebenthal, renowned for age-worthy reds of great structure.",
    estilo: "Boutique, vintner-driven", segmento: "Premium to icon",
  },
  "Viña Casas del Bosque": {
    terruno: "Casablanca, a cool coastal climate with morning fog. Granitic and clay soils.",
    descripcion: "One of Casablanca's leading wineries, specializing in aromatic whites and cool-climate Pinot Noir.",
    estilo: "Premium cool-climate", segmento: "Reserva to premium",
  },
  "Viña Kingston Family": {
    terruno: "Casablanca hills with direct maritime influence. Soils of clay and decomposed granite.",
    descripcion: "A boutique family winery celebrated for its cool-climate Pinot Noir and Syrah of great finesse.",
    estilo: "Family boutique", segmento: "Premium",
  },
  "Viña Matetic": {
    terruno: "Rosario Valley (San Antonio), a cool climate with strong oceanic influence. Organic and biodynamic management. Granitic soils.",
    descripcion: "A pioneer of cool-climate Syrah in Chile, with certified biodynamic viticulture. A benchmark of coastal elegance.",
    estilo: "Biodynamic boutique", segmento: "Premium to icon",
  },
  "Viña Leyda": {
    terruno: "Leyda Valley, just a few kilometers from the Pacific. Cool climate, soils of marine and granitic origin.",
    descripcion: "The winery that gave the Leyda Valley its identity. Its saline Sauvignon Blanc and fresh Pinot Noir defined the Chilean coastal style.",
    estilo: "Cool-climate specialist", segmento: "Reserva to premium",
  },
  "Viña Garcés Silva (Amayna)": {
    terruno: "Leyda, 14 km from the sea. Clay soils over a granitic base, a very cool climate.",
    descripcion: "A top-tier project by the Garcés Silva family, with highly complex whites under the Amayna label.",
    estilo: "Premium cool-climate", segmento: "Premium",
  },
  "Viña Concha y Toro": {
    terruno: "Alto Maipo (Puente Alto, Pirque) with stony alluvial soils at the foot of the Andes; it operates across many of the country's valleys.",
    descripcion: "Founded in 1883, Chile's largest wine producer and one of the biggest in the world. Home of the iconic Don Melchor and of Casillero del Diablo.",
    estilo: "Large scale, all segments", segmento: "Mass-market to icon",
  },
  "Viña Santa Rita": {
    terruno: "Alto Jahuel, Maipo. Alluvial and colluvial soils, a warm Mediterranean climate.",
    descripcion: "Founded in 1880, a historic winery tied to Chile's independence (the '120' of Manuel Rodríguez). A broad portfolio from the classic '120' up to icons.",
    estilo: "Historic traditional, large scale", segmento: "Mass-market to icon",
  },
  "Viña Cousiño Macul": {
    terruno: "Maipo, within the city of Santiago itself (Peñalolén). Ancient alluvial soils at the foot of the Andes.",
    descripcion: "Founded in 1856, the oldest family winery in Chile under the same family. Tradition and classic Maipo elegance.",
    estilo: "Historic family traditional", segmento: "Reserva to icon",
  },
  "Viña Santa Carolina": {
    terruno: "Operates in Maipo and other valleys. Alluvial soils of the Central Valley.",
    descripcion: "Founded in 1875, with a heritage cellar declared a National Monument. A long tradition of Central Valley reds.",
    estilo: "Historic traditional, large scale", segmento: "Mass-market to icon",
  },
  "Viña Carmen": {
    terruno: "Maipo and coastal valleys. Varied soils depending on the range.",
    descripcion: "The oldest wine brand in Chile (1850). Historically important for the re-identification of Carménère in 1994.",
    estilo: "Historic traditional", segmento: "Reserva to premium",
  },
  "Viña Almaviva": {
    terruno: "Puente Alto, Alto Maipo. Stony alluvial soils, considered an elite terroir for Cabernet.",
    descripcion: "A joint venture between Concha y Toro and Baron Philippe de Rothschild (Mouton). The first great French-Chilean icon, a cult Bordeaux-style blend.",
    estilo: "French-Chilean icon", segmento: "Icon (top tier)",
  },
  "Viña Haras de Pirque": {
    terruno: "Pirque, Alto Maipo. Colluvial soils in a horseshoe shape, a mountain climate.",
    descripcion: "A winery with singular horseshoe-shaped architecture (it began as a horse stud farm). Elegant reds from the Alto Maipo.",
    estilo: "Premium terroir-driven", segmento: "Reserva to icon",
  },
  "Viña Pérez Cruz": {
    terruno: "Alto Maipo, the Huelquén sector. Alluvial and foothill soils, a warm, dry climate.",
    descripcion: "A boutique family winery renowned for powerful, well-structured reds from the Alto Maipo.",
    estilo: "Family boutique", segmento: "Reserva to premium",
  },
  "Viña Aquitania": {
    terruno: "Peñalolén and Quebrada de Macul, urban Alto Maipo. Soils at the foot of the Andes.",
    descripcion: "A project founded by renowned winemakers (Bruno Prats, Paul Pontallier, Felipe de Solminihac). Cabernet of great Andean typicity.",
    estilo: "Boutique, vintner-driven", segmento: "Premium to icon",
  },
  "Viña Altaïr / San Pedro Cachapoal": {
    terruno: "Cachapoal Andes, a mountain sector. Colluvial soils, good sun exposure.",
    descripcion: "A top-tier project focused on mountain reds from the Cachapoal Andes.",
    estilo: "Premium terroir-driven", segmento: "Premium to icon",
  },
  "Viña Anakena": {
    terruno: "Requínoa, Cachapoal. Alluvial soils; also vineyards in coastal valleys.",
    descripcion: "A winery known as a Viognier pioneer in Chile and for its Cachapoal reds.",
    estilo: "Mid-scale, innovative", segmento: "Reserva to premium",
  },
  "Viña Morandé": {
    terruno: "Operates across several valleys (Maipo, Casablanca, Maule). A tradition of blends.",
    descripcion: "Founded by Pablo Morandé, a key innovator of Casablanca. Known for its House of Morandé range and terroir wines.",
    estilo: "Terroir-driven innovator", segmento: "Reserva to icon",
  },
  "Viña Château Los Boldos": {
    terruno: "Requínoa, Alto Cachapoal. Alluvial soils at the foot of the Andes.",
    descripcion: "A winery of French tradition in Cachapoal, with well-concentrated age-worthy reds.",
    estilo: "French tradition", segmento: "Reserva to premium",
  },
  "Viña Montes": {
    terruno: "Apalta, Colchagua: an amphitheater of hillsides with poor granitic soils, ideal for concentrated reds. Also coastal vineyards.",
    descripcion: "Founded in 1988 by Aurelio Montes. One of the wineries that internationalized premium Chilean wine. Famous for Montes Alpha and its Apalta icons.",
    estilo: "International premium", segmento: "Reserva to icon",
  },
  "Viña Lapostolle": {
    terruno: "Apalta, Colchagua. Granitic hillsides with old vineyards, biodynamic management.",
    descripcion: "Founded by the Marnier-Lapostolle family (Grand Marnier). Its Clos Apalta is one of Chile's most awarded icons.",
    estilo: "Icon, biodynamic", segmento: "Premium to icon",
  },
  "Viña Casa Lapostolle": {
    terruno: "Apalta and other sectors of Colchagua. Granitic and clay soils.",
    descripcion: "The Lapostolle house range, renowned for highly expressive Apalta Carménère.",
    estilo: "Premium terroir-driven", segmento: "Reserva to premium",
  },
  "Viña Viu Manent": {
    terruno: "Cunaco, Colchagua. Old Malbec vineyards on alluvial soils.",
    descripcion: "A family winery famous for rescuing Chilean Malbec from old vines. A great Colchagua tradition.",
    estilo: "Family traditional", segmento: "Reserva to icon",
  },
  "Viña Santa Cruz": {
    terruno: "Lolol, Colchagua. A warm climate, hillside soils.",
    descripcion: "A winery with a strong tourism focus (cable car, observatory). Warm Colchagua reds.",
    estilo: "Tourism-focused, mid-scale", segmento: "Reserva to premium",
  },
  "Viña Casa Silva": {
    terruno: "Angostura and Los Lingues, Colchagua. Alluvial and Andean foothill soils.",
    descripcion: "A historic family winery of Colchagua, with a heritage cellar. Renowned for Carménère and for its Microterroir range.",
    estilo: "Historic family traditional", segmento: "Reserva to icon",
  },
  "Viña Los Vascos": {
    terruno: "Peralillo, Colchagua. Granitic soils, a Mediterranean climate.",
    descripcion: "Owned by Domaines Barons de Rothschild (Lafite) in Chile. Cabernet in a Bordeaux style.",
    estilo: "Premium (Rothschild/Lafite)", segmento: "Reserva to icon",
  },
  "Viña MontGras": {
    terruno: "Palmilla, Colchagua; also coastal and high-altitude vineyards (Ninquén).",
    descripcion: "A winery known for the Ninquén hill, a hillside vineyard planted at altitude. Modern, consistent reds.",
    estilo: "Mid-scale, terroir-driven", segmento: "Reserva to premium",
  },
  "Viña Emiliana": {
    terruno: "Los Robles, Colchagua and other valleys. Certified organic and biodynamic viticulture.",
    descripcion: "A world leader in organic and biodynamic wines. Its icon Coyam is a benchmark of Chilean sustainable viticulture.",
    estilo: "Leading organic & biodynamic", segmento: "Reserva to icon",
  },
  "Viña Neyen": {
    terruno: "Apalta, Colchagua. Old vines on granitic soil.",
    descripcion: "A project focused on a single great Apalta blend made from old vines.",
    estilo: "Single-wine boutique", segmento: "Icon (top tier)",
  },
  "Viña San Pedro": {
    terruno: "Molina, Curicó. Alluvial soils of the Central Valley; also projects in Elqui and Cachapoal.",
    descripcion: "Founded in 1865, one of Chile's largest and oldest wineries. Home of mass-market brands (Gato Negro, 35 Sur) and of icons.",
    estilo: "Large scale, all segments", segmento: "Mass-market to icon",
  },
  "Viña Miguel Torres": {
    terruno: "Curicó. Alluvial soils; a pioneer of sustainable viticulture.",
    descripcion: "The Chilean arm of the Catalan house Torres, which in 1979 introduced modern technology (stainless steel, cold) that revolutionized Chilean wine. A pioneer of sparkling País.",
    estilo: "Traditional, technical pioneer", segmento: "Reserva to icon",
  },
  "Viña Echeverría": {
    terruno: "Molina, Curicó. Alluvial soils, a Mediterranean climate.",
    descripcion: "A Curicó family winery with a long track record of well-priced reds and whites.",
    estilo: "Family boutique", segmento: "Reserva to premium",
  },
  "Viña Valdivieso": {
    terruno: "Lontué, Curicó. Alluvial soils; also operates in coastal valleys.",
    descripcion: "Founded in 1879, the historic pioneer and leader of sparkling wine in Chile. Its icon Caballo Loco is a unique multi-vintage blend.",
    estilo: "Traditional, sparkling specialist", segmento: "Mass-market to icon",
  },
  "Viña Gillmore": {
    terruno: "Loncomilla, Maule. Clay soils; dry-farmed viticulture.",
    descripcion: "A Maule boutique winery renowned for characterful reds and for its work with Cabernet Franc.",
    estilo: "Boutique, vintner-driven", segmento: "Premium",
  },
  "Viña J. Bouchon": {
    terruno: "Mingre, Maule. Inland dryland, granitic soils. Old País vines.",
    descripcion: "A pioneering family winery in revaluing old-vine País, including the singular 'País Salvaje' that grows climbing up trees.",
    estilo: "Family, heritage rescue", segmento: "Reserva to premium",
  },
  "Viña Gen del Alma / De Martino (Maule)": {
    terruno: "Maule dryland, old País and Cinsault vines. Granitic soils.",
    descripcion: "De Martino was a pioneer in rescuing Maule's old vineyards and in amphora wines. A benchmark for dryland Carignan and País.",
    estilo: "Natural-wine boutique", segmento: "Premium",
  },
  "Viña Casa Donoso": {
    terruno: "Talca, Maule. Alluvial soils; a Mediterranean climate.",
    descripcion: "A traditional Maule winery with a heritage manor house and classic valley reds.",
    estilo: "Family traditional", segmento: "Reserva to premium",
  },
  "Viña Balduzzi": {
    terruno: "San Javier, Maule. Alluvial soils beside the river.",
    descripcion: "A family winery of Italian origin with a long tradition in Maule.",
    estilo: "Family traditional", segmento: "Reserva to premium",
  },
  "Viña Terranoble": {
    terruno: "Maule (Talca, Los Cardos) and Colchagua. Renowned for Carménère from different terroirs.",
    descripcion: "A winery specialized in Carménère, with its CA range comparing Andean vs. coastal Carménère.",
    estilo: "Carménère specialist", segmento: "Reserva to premium",
  },
  "Viña Pandolfi Price": {
    terruno: "Itata and Biobío. Granitic soils, the cool, rainy climate of the south.",
    descripcion: "A southern project focused on cool-climate varieties with a southern identity.",
    estilo: "Cool-climate boutique", segmento: "Premium",
  },
  "Viña Casa del Bosque / Cacique Maravilla": {
    terruno: "Yumbel-Itata, inland dryland. Century-old head-trained País and Moscatel vines.",
    descripcion: "Heritage viticulture of Itata, with one of the oldest productive País vineyards in Chile.",
    estilo: "Heritage dryland", segmento: "Reserva to premium",
  },
  "Viña Rogue Vine / De Itata": {
    terruno: "Guarilihue, Itata. Granitic-hill dryland, old head-trained vines.",
    descripcion: "A project that helped put Itata on the fine-wine map, with old-vine Cinsault and País.",
    estilo: "Dryland fine-wine boutique", segmento: "Premium",
  },
  "Viña Veranda": {
    terruno: "Mulchén, Biobío. A cool, humid climate, clay-sandy soils.",
    descripcion: "A VSPT group project focused on cool-climate Pinot Noir and Chardonnay from the south.",
    estilo: "Premium cool-climate", segmento: "Reserva to premium",
  },
  "Viña Agustinos": {
    terruno: "Biobío. Alluvial and clay soils, a cool climate.",
    descripcion: "A Biobío winery specialized in fresh whites and cool-climate Pinot Noir.",
    estilo: "Cool-climate specialist", segmento: "Reserva to premium",
  },
  "Viña Cono Sur": {
    terruno: "A southern estate in Mulchén, Biobío, with deep clay soils on the south bank of the Biobío River; a cool, windy climate. It also operates in Casablanca, Maipo and Rapel.",
    descripcion: "Founded by Concha y Toro in 1993, focused on Pinot Noir and aromatic whites. It was the first Chilean winery to produce and export Viognier, and the first to label a Riesling with the Biobío Valley appellation. Its Mulchén estate has Riesling vineyards planted since 1986.",
    estilo: "Large scale, sustainable innovator", segmento: "Mass-market to icon",
  },
  "Viña Aquitania (Sol de Sol Malleco)": {
    terruno: "Traiguén, Malleco. The southern frontier of fine viticulture; a very cold, rainy climate, red clay soils.",
    descripcion: "A pioneer of fine wine in the far south with its Chardonnay 'Sol de Sol', one of the first from Malleco.",
    estilo: "Far-south pioneer", segmento: "Premium",
  },
  "Casa Silva Lago Ranco (Patagonia)": {
    terruno: "A vineyard in Futrono, on the shores of Lake Ranco, Osorno Valley, Chilean Patagonia. Gentle slopes facing the lake, volcanic 'trumao' soil, with the influence of the lake and the Andes. One of the southernmost vineyards in Chile.",
    descripcion: "The Silva family (from Colchagua) bought this estate in 2004 to raise horses and cattle, and on seeing its beauty planted the first vineyard in Chilean Patagonia in 2006. Its wines carry the Austral Region appellation and include a traditional-method sparkling. Hand-harvested, sharp, mineral whites of great acidity.",
    estilo: "Patagonia pioneer, extreme viticulture", segmento: "Premium / cult",
  },
  "Viña William Fèvre Chile": {
    terruno: "Alto Maipo (Pirque). Stony alluvial soils.",
    descripcion: "The Chilean arm of the famous Chablis producer. It unites Burgundian tradition with the Maipo terroir.",
    estilo: "French tradition (Chablis)", segmento: "Reserva to premium",
  },
  "Viña Undurraga": {
    terruno: "Talagante, Maipo; operates across many valleys with its T.H. (Terroir Hunter) range.",
    descripcion: "Founded in 1885, a historic Maipo winery. Its T.H. range explores specific terroirs along the length of Chile.",
    estilo: "Historic traditional, terroir-driven", segmento: "Mass-market to icon",
  },
  "Viña Tarapacá": {
    terruno: "Isla de Maipo, a vineyard surrounded by branches of the Maipo River. Alluvial and hillside soils.",
    descripcion: "Founded in 1874, with one of Maipo's most singular vineyards (a viticultural 'island'). Classic reds.",
    estilo: "Historic traditional", segmento: "Reserva to icon",
  },
  "Viña Santa Ema": {
    terruno: "Isla de Maipo. Alluvial soils; also vineyards in Cachapoal.",
    descripcion: "A winery of Italian origin (the Pavone family) renowned for its Maipo Merlot and Carménère.",
    estilo: "Family traditional", segmento: "Reserva to premium",
  },
  "Viña De Martino": {
    terruno: "Isla de Maipo; a pioneer in exploring extreme terroirs from north to south. Clay amphorae.",
    descripcion: "An innovative family winery, the first carbon-neutral one in South America, a pioneer in amphora wines and in rescuing old vines.",
    estilo: "Innovative, amphora wine", segmento: "Reserva to icon",
  },
  "Viña Ventisquero": {
    terruno: "Maipo (Trinidad) and projects in Apalta, Casablanca and Atacama (Tara, in the desert).",
    descripcion: "A modern winery known for exploring extreme terroirs, including vineyards in the heart of the Atacama Desert (the Tara project).",
    estilo: "Modern, extreme terroirs", segmento: "Reserva to icon",
  },
  "Viña Maquis": {
    terruno: "Between the Tinguiririca and Chimbarongo rivers, Colchagua. Alluvial soils; a cool microclimate.",
    descripcion: "A winery with its cellar on a river meander. Renowned for high-quality Carménère and Cabernet Franc.",
    estilo: "Premium terroir-driven", segmento: "Reserva to icon",
  },
  "Viña Koyle": {
    terruno: "Los Lingues, Colchagua Andes. High-altitude vineyards at the foot of the Andes, biodynamic management. Soils of volcanic and granitic origin.",
    descripcion: "A project by the Undurraga Vicuña family focused on high-altitude biodynamic viticulture in the Colchagua Andes.",
    estilo: "High-altitude biodynamic", segmento: "Premium to icon",
  },
  "Viña Apaltagua": {
    terruno: "Apalta and Maule dryland (old vines). Granitic soils.",
    descripcion: "A winery renowned for its Apalta Carménère and for working with old-vine dryland Cinsault.",
    estilo: "Terroir-driven, mid-scale", segmento: "Reserva to premium",
  },
  "Viña Requingua": {
    terruno: "Curicó. Alluvial soils of the Central Valley.",
    descripcion: "A Curicó family winery with strong export volume and its Toro de Piedra range.",
    estilo: "Family, export-oriented", segmento: "Reserva to premium",
  },
  "Viña Caliterra": {
    terruno: "Colchagua (the Caliterra sector). Hillsides with sustainable management. Granitic soils.",
    descripcion: "A winery linked to Errázuriz, focused on sustainability and terroir-driven Colchagua reds.",
    estilo: "Sustainable, terroir-driven", segmento: "Reserva to premium",
  },
  "Viña Santa Helena": {
    terruno: "Colchagua and Curicó. Alluvial soils of the Central Valley.",
    descripcion: "A traditional high-volume winery, known for its Selección del Directorio range.",
    estilo: "Large scale", segmento: "Mass-market to reserva",
  },
  "Viña Bisquertt": {
    terruno: "Marchigüe and Cunaquito, Colchagua. A warm climate, clay soils.",
    descripcion: "A Colchagua family winery with a tradition spanning several generations.",
    estilo: "Family traditional", segmento: "Reserva to premium",
  },
  "Viña Estampa": {
    terruno: "Palmilla and Marchigüe, Colchagua. Varied soils; renowned for blends.",
    descripcion: "A winery specialized in multi-variety blends, with a focus on complex red blends.",
    estilo: "Blend specialist", segmento: "Reserva to premium",
  },
  "Viña Polkura": {
    terruno: "Marchigüe, Colchagua. Granitic hillside soils; specialized in Syrah.",
    descripcion: "A boutique winery focused mainly on hillside Syrah from Colchagua.",
    estilo: "Syrah-specialist boutique", segmento: "Premium",
  },
  "Viña Garcés Silva (otras líneas)": {
    terruno: "Leyda. Clay-granitic soils, a cool coastal climate.",
    descripcion: "Beyond Amayna, it explores cool-climate Syrah and Pinot of great coastal typicity.",
    estilo: "Premium cool-climate", segmento: "Premium",
  },
  "Viña Ventolera": {
    terruno: "Leyda, very close to the sea. Granitic soils, strong oceanic influence.",
    descripcion: "A Leyda boutique winery with saline whites and cool-climate Pinot Noir.",
    estilo: "Cool-climate boutique", segmento: "Premium",
  },
  "Viña Loma Larga": {
    terruno: "Casablanca. Hillsides with granitic and clay soils, a cool climate.",
    descripcion: "A pioneer of cool-climate reds in Casablanca, especially Syrah and Cabernet Franc.",
    estilo: "Cool-climate boutique", segmento: "Premium",
  },
  "Viña Veramonte": {
    terruno: "Casablanca. Granitic soils; organic management. A cool coastal climate.",
    descripcion: "A large Casablanca winery, converting to organic and producing fresh whites representative of the valley.",
    estilo: "Mid-scale, organic", segmento: "Reserva to premium",
  },
  "Viña Quintay": {
    terruno: "Casablanca. Granitic and clay soils, coastal fog.",
    descripcion: "A winery of Casablanca growers focused on cool-climate whites and Pinot Noir.",
    estilo: "Cool-climate", segmento: "Reserva to premium",
  },
};
