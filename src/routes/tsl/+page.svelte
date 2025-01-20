<script lang="ts">
  import { onMount } from "svelte";

  // Variables reactivas para editar las variables CSS
  let theme: "light" | "dark" = $state("light");

  // Objetos separados para colores, tamaños, bordes, etc.
  let colors = $state({
    light: {
      background: { h: 0, s: 0, l: 100, description: "Fondo principal (blanco)" },
      surface: { h: 0, s: 0, l: 98, description: "Superficie de componentes (gris claro)" },
      primary: { h: 215, s: 100, l: 45, description: "Color primario (azul)" },
      secondary: { h: 200, s: 100, l: 45, description: "Color secundario (verde azulado)" },
      danger: { h: 0, s: 72, l: 51, description: "Color para errores (rojo)" },
      success: { h: 142, s: 71, l: 45, description: "Color para éxito (verde)" },
      warning: { h: 40, s: 100, l: 50, description: "Color para advertencias (amarillo)" },
    },
    dark: {
      background: { h: 0, s: 0, l: 10, description: "Fondo principal (gris oscuro)" },
      surface: { h: 0, s: 0, l: 15, description: "Superficie de componentes (gris medio)" },
      primary: { h: 215, s: 100, l: 45, description: "Color primario (azul)" },
      secondary: { h: 200, s: 100, l: 45, description: "Color secundario (verde azulado)" },
      danger: { h: 0, s: 72, l: 51, description: "Color para errores (rojo)" },
      success: { h: 142, s: 71, l: 45, description: "Color para éxito (verde)" },
      warning: { h: 40, s: 100, l: 50, description: "Color para advertencias (amarillo)" },
    },
  });

  let text = $state({
    fontSizeSm: { value: 12, description: "Tamaño de fuente pequeño (12px)" },
    fontSizeMd: { value: 14, description: "Tamaño de fuente mediano (14px)" },
    fontSizeLg: { value: 16, description: "Tamaño de fuente grande (16px)" },
  });

  let shapes = $state({
    shapeSmall: { value: 4, description: "Radio de borde pequeño (4px)" },
    shapeMedium: { value: 8, description: "Radio de borde mediano (8px)" },
    shapeLarge: { value: 12, description: "Radio de borde grande (12px)" },
  });

  let shadows = $state({
    elevation0: { value: "none", description: "Sin sombra (nivel 0)" },
    elevation1: { value: "0 1px 2px rgba(0, 0, 0, 0.1)", description: "Sombra ligera (nivel 1)" },
    elevation2: { value: "0 2px 4px rgba(0, 0, 0, 0.2)", description: "Sombra media (nivel 2)" },
    elevation3: { value: "0 4px 8px rgba(0, 0, 0, 0.3)", description: "Sombra fuerte (nivel 3)" },
  });

  // Función para convertir HSL a cadena CSS
  function hslToString(hsl: { h: number; s: number; l: number }) {
    return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
  }

  // Función para actualizar las variables CSS en el DOM
  function updateCSSVariables() {
    const root = document.documentElement;

    // Actualizar colores
    Object.entries(colors[theme]).forEach(([key, value]) => {
      root.style.setProperty(`--iui-colors-${key}`, hslToString(value));
    });

    // Actualizar tamaños
    Object.entries(text).forEach(([key, value]) => {
      root.style.setProperty(`--iui-text-${key}`, `${value.value}px`);
    });

    // Actualizar formas
    Object.entries(shapes).forEach(([key, value]) => {
      root.style.setProperty(`--iui-shapes-${key}`, `${value.value}px`);
    });

    // Actualizar sombras
    Object.entries(shadows).forEach(([key, value]) => {
      root.style.setProperty(`--iui-shadows-${key}`, value.value);
    });
  }

  // Función para cambiar entre temas
  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    updateCSSVariables();
  }

  // Función para copiar las variables CSS actuales
  function copyVariables() {
    const cssText = [
      ...Object.entries(colors[theme]).map(([key, value]) => `--iui-colors-${key}: ${hslToString(value)};`),
      ...Object.entries(text).map(([key, value]) => `--iui-text-${key}: ${value.value}px;`),
      ...Object.entries(shapes).map(([key, value]) => `--iui-shapes-${key}: ${value.value}px;`),
      ...Object.entries(shadows).map(([key, value]) => `--iui-shadows-${key}: ${value.value};`),
    ].join("\n");

    navigator.clipboard.writeText(cssText).then(() => {
      alert("Variables CSS copiadas al portapapeles.");
    });
  }

  // Aplica las variables al cargar la página
  onMount(() => {
    updateCSSVariables();
  });
</script>

<style>
  :global(:root) {
    /* Variables CSS iniciales (se sobrescriben dinámicamente) */
    --iui-colors-background: 0 0% 100%;
    --iui-colors-surface: 0 0% 98%;
    --iui-colors-primary: 215 100% 45%;
    --iui-colors-secondary: 200 100% 45%;
    --iui-colors-danger: 0 72% 51%;
    --iui-colors-success: 142 71% 45%;
    --iui-colors-warning: 40 100% 50%;
    --iui-text-fontSizeSm: 12px;
    --iui-text-fontSizeMd: 14px;
    --iui-text-fontSizeLg: 16px;
    --iui-shapes-shapeSmall: 4px;
    --iui-shapes-shapeMedium: 8px;
    --iui-shapes-shapeLarge: 12px;
    --iui-shadows-elevation0: none;
    --iui-shadows-elevation1: 0 1px 2px rgba(0, 0, 0, 0.1);
    --iui-shadows-elevation2: 0 2px 4px rgba(0, 0, 0, 0.2);
    --iui-shadows-elevation3: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .container {
    background-color: hsl(var(--iui-colors-background));
    color: hsl(var(--iui-colors-on-background));
    padding: var(--iui-padding-md);
    border-radius: var(--iui-shapes-shapeMedium);
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-group input[type="range"] {
    width: 100%;
  }

  .form-group input[type="color"] {
    width: 100%;
    height: 40px;
    padding: 0;
  }

  .form-group button {
    background-color: hsl(var(--iui-colors-primary));
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--iui-shapes-shapeMedium);
    cursor: pointer;
    font-size: var(--iui-text-fontSizeMd);
  }

  .form-group button:hover {
    background-color: color-mix(in srgb, var(--iui-colors-primary), black 10%);
  }

  .sample {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .sample-color {
    width: 50px;
    height: 50px;
    border-radius: var(--iui-shapes-shapeMedium);
    border: 1px solid hsl(var(--iui-colors-outline));
  }

  .sample-size {
    width: 100px;
    height: 50px;
    background-color: hsl(var(--iui-colors-surface));
    border-radius: var(--iui-shapes-shapeMedium);
    border: 1px solid hsl(var(--iui-colors-outline));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--iui-text-fontSizeMd);
  }

  .sample-shadow {
    width: 100px;
    height: 50px;
    background-color: hsl(var(--iui-colors-surface));
    border-radius: var(--iui-shapes-shapeMedium);
    border: 1px solid hsl(var(--iui-colors-outline));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--iui-text-fontSizeMd);
  }

  pre {
    background-color: hsl(var(--iui-colors-surface));
    padding: 1rem;
    border-radius: var(--iui-shapes-shapeMedium);
    overflow-x: auto;
    grid-column: 1 / -1;
  }
</style>

<div class="container">
  <h1 style="grid-column: 1 / -1;">Editor de Variables CSS</h1>

  <!-- Selector de tema -->
  <div class="form-group" style="grid-column: 1 / -1;">
    <button onclick={toggleTheme}>
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </button>
  </div>

  <!-- Grupo: Colores -->
  <h2 style="grid-column: 1 / -1;">Colores</h2>
  {#each Object.entries(colors[theme]) as [key, value]}
    <div class="form-group">
      <label for={key}>--iui-colors-{key}:</label>
      <div class="sample">
        <div
          class="sample-color"
          style="background-color: hsl({hslToString(value)});"
        ></div>
        <input
          type="color"
          bind:value={colors[theme][key]}
          oninput={updateCSSVariables}
        />
        <input
          type="range"
          min="0"
          max="360"
          bind:value={colors[theme][key].h}
          oninput={updateCSSVariables}
        />
        <input
          type="range"
          min="0"
          max="100"
          bind:value={colors[theme][key].s}
          oninput={updateCSSVariables}
        />
        <input
          type="range"
          min="0"
          max="100"
          bind:value={colors[theme][key].l}
          oninput={updateCSSVariables}
        />
      </div>
    </div>
  {/each}

  <!-- Grupo: Texto -->
  <h2 style="grid-column: 1 / -1;">Texto</h2>
  {#each Object.entries(text) as [key, value]}
    <div class="form-group">
      <label for={key}>--iui-text-{key}:</label>
      <div class="sample">
        <div class="sample-size" style="font-size: {value.value}px;">
          Tamaño {value.value}px
        </div>
        <input
          type="range"
          min="0"
          max="32"
          step="1"
          bind:value={text[key].value}
          oninput={updateCSSVariables}
        />
      </div>
    </div>
  {/each}

  <!-- Grupo: Formas -->
  <h2 style="grid-column: 1 / -1;">Formas</h2>
  {#each Object.entries(shapes) as [key, value]}
    <div class="form-group">
      <label for={key}>--iui-shapes-{key}:</label>
      <div class="sample">
        <div class="sample-size" style="border-radius: {value.value}px;">
          Radio {value.value}px
        </div>
        <input
          type="range"
          min="0"
          max="20"
          step="1"
          bind:value={shapes[key].value}
          oninput={updateCSSVariables}
        />
      </div>
    </div>
  {/each}

  <!-- Grupo: Sombras -->
  <h2 style="grid-column: 1 / -1;">Sombras</h2>
  {#each Object.entries(shadows) as [key, value]}
    <div class="form-group">
      <label for={key}>--iui-shadows-{key}:</label>
      <div class="sample">
        <div class="sample-shadow" style="box-shadow: {value.value};">
          Sombra
        </div>
      </div>
    </div>
  {/each}

  <!-- Botón para copiar las variables -->
  <div class="form-group" style="grid-column: 1 / -1;">
    <button onclick={copyVariables}>Copiar Variables CSS</button>
  </div>

  <!-- Mostrar variables en un elemento <pre> -->
  <pre>
{JSON.stringify({ colors: colors[theme], text, shapes, shadows }, null, 2)}
  </pre>
</div>