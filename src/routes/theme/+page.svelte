<script lang="ts">
  import { onMount } from "svelte";

  // Variables reactivas para editar las variables CSS
  let theme: "light" | "dark" = $state("light");

  // Objetos separados para colores, tamaños, bordes, etc.
  let colors = $state({
    light: {
      background: { id: "--iui-background", h: 0, s: 0, l: 100, description: "Fondo principal (blanco)" },
      surface: { id: "--iui-surface", h: 0, s: 0, l: 75, description: "Superficie de componentes (gris claro)" },
      primary: { id: "--iui-primary", h: 215, s: 100, l: 45, description: "Color primario (azul)" },
      secondary: { id: "--iui-secondary", h: 200, s: 100, l: 45, description: "Color secundario (verde azulado)" },
      danger: { id: "--iui-danger", h: 0, s: 72, l: 51, description: "Color para errores (rojo)" },
      success: { id: "--iui-success", h: 142, s: 71, l: 45, description: "Color para éxito (verde)" },
      warning: { id: "--iui-warning", h: 40, s: 100, l: 50, description: "Color para advertencias (amarillo)" },
    },
    dark: {
      background: { id: "--iui-background", h: 0, s: 0, l: 10, description: "Fondo principal (gris oscuro)" },
      surface: { id: "--iui-surface", h: 0, s: 0, l: 15, description: "Superficie de componentes (gris medio)" },
      primary: { id: "--iui-primary", h: 215, s: 100, l: 45, description: "Color primario (azul)" },
      secondary: { id: "--iui-secondary", h: 200, s: 100, l: 45, description: "Color secundario (verde azulado)" },
      danger: { id: "--iui-danger", h: 0, s: 72, l: 51, description: "Color para errores (rojo)" },
      success: { id: "--iui-success", h: 142, s: 71, l: 45, description: "Color para éxito (verde)" },
      warning: { id: "--iui-warning", h: 40, s: 100, l: 50, description: "Color para advertencias (amarillo)" },
    },
  });

  let text = $state({
    fontSizeSm: { id: "--iui-fontSizeSm", value: 12, description: "Tamaño de fuente pequeño" },
    fontSizeMd: { id: "--iui-fontSizeMd", value: 14, description: "Tamaño de fuente mediano" },
    fontSizeLg: { id: "--iui-fontSizeLg", value: 16, description: "Tamaño de fuente grande" },
  });

  let radius = $state({ id: "--iui-radius", value: 4, description: "Radio de borde pequeño (4px)" });

  let shadows = $state({
    elevation0: { id: "--iui-elevation0", value: "none", description: "Sin sombra (nivel 0)" },
    elevation1: { id: "--iui-elevation1", value: "0 1px 2px rgba(0, 0, 0, 0.1)", description: "Sombra ligera (nivel 1)" },
    elevation2: { id: "--iui-elevation2", value: "0 2px 4px rgba(0, 0, 0, 0.2)", description: "Sombra media (nivel 2)" },
    elevation3: { id: "--iui-elevation3", value: "0 4px 8px rgba(0, 0, 0, 0.3)", description: "Sombra fuerte (nivel 3)" },
  });

  // Función para convertir HSL a cadena CSS
  function hslToString(hsl: { h: number; s: number; l: number }) {
    return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
  }

  // Función para convertir HEX a HSL
  function hexToHSL(hex: string) {
    // Convertir HEX a RGB
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    // Encontrar el mínimo y máximo de los valores RGB
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    // Convertir a porcentajes
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  // Función para convertir HSL a HEX
  function hslToHex(hsl: { h: number; s: number; l: number }) {
    let h = hsl.h / 360;
    let s = hsl.s / 100;
    let l = hsl.l / 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  // Función para actualizar las variables CSS en el DOM
  function updateCSSVariables() {
    const root = document.documentElement;

    // Actualizar colores
    Object.entries(colors[theme]).forEach(([key, value]) => {
      root.style.setProperty(value.id, hslToString(value));
    });

    // Actualizar tamaños
    Object.entries(text).forEach(([key, value]) => {
      root.style.setProperty(value.id, `${value.value}px`);
    });

    // Actualizar radio de borde
    root.style.setProperty(radius.id, `${radius.value}px`);

    // Actualizar sombras
    Object.entries(shadows).forEach(([key, value]) => {
      root.style.setProperty(value.id, value.value);
    });
  }

  // Función para cambiar entre temas
  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    updateCSSVariables();
  }

  // Aplica las variables al cargar la página
  onMount(() => {
    updateCSSVariables();
  });
</script>


<div class="container">
  <div class="samples">
    <h1 style="grid-column: 1 / -1;">Editor de Variables CSS</h1>

    <!-- Selector de tema -->
    <button class="togle-theme" onclick={toggleTheme}>
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </button>

    <div class="sample">
      <p>border radius: {radius.value}px</p>
      <p style="font-size: {text.fontSizeSm.value}px;">Tamaño de fuente pequeño</p>
      <p style="font-size: {text.fontSizeMd.value}px;">Tamaño de fuente mediano</p>
      <p style="font-size: {text.fontSizeLg.value}px;">Tamaño de fuente grande</p>
    </div>
  </div>
  <div class="controls">

    <!-- Grupo: Colores -->

    <!-- Grupo: Colores -->
    <div class="control-items-container">
      <h2 class="control-items-title">Colores</h2>
      <div class="control-items">
        {#each Object.entries(colors[theme]) as [key, value], index}
          <div class="control-item">
            <label for={key}>{value.description} </label>
            <div style="font-size: 9px;">{value.id}</div>
            <input type="color" value={hslToHex(value)} oninput={(e)=>{
              colors[theme][key] = hexToHSL(e.currentTarget.value);
              updateCSSVariables();
              
            }} />
            <input type="range" min="0" max="360" value={value.h} onchange={(e)=>{
              colors[theme][key].h = e.currentTarget.value;
              updateCSSVariables();
            }} />
            <input type="range" min="0" max="100" value={value.s} onchange={
              (e)=>{
                colors[theme][key].s = e.currentTarget.value;
                updateCSSVariables();
              }
            } />
            <input type="range" min="0" max="100" value={value.l} oninput={
              (e)=>{
                colors[theme][key].l = e.currentTarget.value;
                updateCSSVariables();
              }
          } />
          </div>
        {/each}
      </div>
    </div>
    <!-- Grupo: Texto -->
    <div class="control-items-container">
      <h2 class="control-items-title">Texto</h2>
      <div class="control-items">
        {#each Object.entries(text) as [key, value]}
          <div class="control-item">
            <label for={key}>{value.id}:</label>
            <input
              type="range"
              min="0"
              max="32"
              step="1"
              bind:value={text[key].value}
              oninput={updateCSSVariables}
            />
          </div>
        {/each}
      </div>
    </div>

    <!-- Grupo: Border radius -->
    <div class="control-items-container">
      <h2 class="control-items-title">Border radius</h2>
      <div class="control-items">
        <div class="control-item">
          <label for={radius.id}>{radius.id}:</label>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            bind:value={radius.value}
            oninput={updateCSSVariables}
          />
        </div>
      </div>
    </div>

    <!-- Grupo: Sombras -->
    <div class="control-items-container">
      <h2 class="control-items-title">Sombras</h2>
      <div class="control-items">
        {#each Object.entries(shadows) as [key, value]}
          <div class="control-item">
            <label for={key}>{value.description} </label>
            <div style="font-size: 9px;">{value.id}</div>
            <input type="range" min="0" max="20" step="1" bind:value={value.value} oninput={updateCSSVariables} />
          </div>
        {/each}
      </div>
    </div>
        
  </div>
</div>

<style>
  :global(html, body) {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: hsl(var(--iui-background));
    color: hsl(var(--iui-on-background));
  }
  :global(:root) {
    /* Variables CSS iniciales (se sobrescriben dinámicamente) */
    --iui-background: 0 0% 100%;
    --iui-surface: 0 0% 98%;

    --iui-on-background: 0 100% 0%;
    --iui-on-surface: 0 100% 0%;
    
    --iui-primary: 215 100% 45%;
    --iui-secondary: 200 100% 45%;

    --iui-danger: 0 72% 51%;
    --iui-success: 142 71% 45%;
    --iui-warning: 40 100% 50%;

    --iui-fontSizeSm: 12px;
    --iui-fontSizeMd: 14px;
    --iui-fontSizeLg: 16px;
    --iui-radius: 4px;
    --iui-elevation0: none;
    --iui-elevation1: 0 1px 2px rgba(0, 0, 0, 0.1);
    --iui-elevation2: 0 2px 4px rgba(0, 0, 0, 0.2);
    --iui-elevation3: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  :global([data-theme="dark"]) {
    --iui-background: 0 0% 10%;
    --iui-surface: 0 0% 15%;
    
    --iui-on-background: 0 0% 90%;
    --iui-on-surface: 0 0% 90%;
  }

  .container {
    background-color: hsl(var(--iui-background));
    color: hsl(var(--iui-on-background));
    padding: 1rem;
    border-radius: var(--iui-radius);
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  .controls {
    display: grid;
    gap: 1rem;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    
  }
  .control-items-container {
    display: grid;
    gap: 1rem;
  }

  .control-items-title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .control-items  {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    
  }

  .control-item {
    display: grid;
    gap: 0.15rem;
    background-color: hsl(var(--iui-surface));
  }

  .control-item label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    
  }

  .control-item input[type="range"] {
    width: 100%;
    margin: 0;
  }

  .control-item input[type="color"] {
    width: 100%;
    height: 40px;
    padding: 0;
    inline-size: 100%;
    block-size: 40px;
    margin: 0;
    border: none;
    border-radius: var(--iui-radius);
    padding-inline: 0;
    padding-block: 0;
    background-color: inherit;
    border-radius: var(--iui-radius);
  }
  .togle-theme {
    background-color: hsl(var(--iui-primary));
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--iui-radius);
    cursor: pointer;
  }



  .sample {
    width: 500px;
    height: 500px;
    background-color: hsl(var(--iui-surface));
    border-radius: var(--iui-radius);
    border: 1px solid hsl(var(--iui-outline));
    box-shadow: var(--iui-elevation0);
    display: grid;
    place-content: center;
    place-items: center;
  }

  pre {
    background-color: hsl(var(--iui-surface));
    padding: 1rem;
    border-radius: var(--iui-radius);
    overflow-x: auto;
    grid-column: 1 / -1;
  }
</style>