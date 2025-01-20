<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  interface ButtonProps {
    value: string | number; // Valor del botón
    label: string; // Texto del botón
  }

  interface Props extends HTMLAttributes<HTMLDivElement> {
    color?: "neutral" | "primary" | "secondary" | "danger" | "success" | "warning"; // Tipo de color
    variant?: "solid" | "outlined"; // Variante de estilo
    size?: "sm" | "md" | "lg"; // Tamaño de los botones
    direction?: "horizontal" | "vertical"; // Dirección del grupo de botones
    elevation?: 0 | 1 | 2 | 3; // Elevación del grupo de botones
    buttons: ButtonProps[]; // Array de botones a renderizar
    activeIndex?: number; // Índice del botón activo
    onClick?: (index: number, value?: string | number) => void; // Función de callback para el evento onclick
  }

  let {
    color = "neutral", // Color por defecto
    variant = "solid", // Variante por defecto
    size = "md", // Tamaño por defecto
    direction = "horizontal", // Dirección por defecto
    elevation = 0, // Elevación por defecto
    buttons = [], // Botones por defecto
    activeIndex = -1, // Por defecto, ningún botón está activo
    onClick = () => {}, // Callback por defecto
    ...restProps
  }: Props = $props();
</script>

<div
  class="btn-{color} button-group direction-{direction} size-{size} button-group-{variant}"
  style="box-shadow: var(--iui-elevation-{elevation});"
  {...restProps}
>
  {#each buttons as button, index}
    <button
      class="btn  {index === activeIndex ? 'btn-active' : ''}"
      style="--iui-btn-color: var(--iui-{color}, var(--iui-on-background)); box-shadow: var(--iui-elevation-{elevation});"
      onclick={() => {
        activeIndex = index;
        onClick(index, button.value);
      }}
    >
      {button.label}
    </button>
  {/each}
</div>

<style>
  @import '../style/common.css';
    /* Variables de color */
  .btn-neutral {
    --iui-btn-background: var(--iui-surface-variant);
    --iui-btn-text: var(--iui-on-background);
  }

  .btn-primary {
    --iui-btn-background: var(--iui-primary);
    --iui-btn-text: var(--iui-on-primary);
  }

  .btn-secondary {
    --iui-btn-background: var(--iui-secondary);
    --iui-btn-text: var(--iui-on-secondary);
  }

  .btn-danger {
    --iui-btn-background: var(--iui-danger);
    --iui-btn-text: var(--iui-on-primary);
  }

  .btn-success {
    --iui-btn-background: var(--iui-success);
    --iui-btn-text: var(--iui-on-primary);
  }

  .btn-warning {
    --iui-btn-background: var(--iui-warning);
    --iui-btn-text: var(--iui-on-primary);
  }

  /* Estilos base del grupo de botones */
  .button-group {
    display: inline-flex;
    border-radius: var(--iui-radius);
    overflow: hidden;
    background-color: hsl(var(--iui-surface));
  }

  .button-group-outlined {
    background-color: transparent;
    border: 1px solid hsl(var(--iui-btn-background));
  }
  .button-group-solid {
    background-color: hsl(var(--iui-surface));
  }

  /* Dirección del grupo */
  .direction-horizontal {
    flex-direction: row;
  }

  .direction-vertical {
    flex-direction: column;
  }

  

  /* Estilos base de los botones */
  .btn {
    padding: var(--iui-spacing-md) calc(var(--iui-spacing-md) * 2.5);
    font-size: var(--iui-font-size-md);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    display: inline-flex;
    text-overflow: ellipsis;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 0; /* Elimina el borde redondeado para que los botones estén pegados */
    color: hsl(var(--iui-on-background)); /* Color de texto global para botones no activos */
    background-color: transparent;
  }
  .btn:hover {
    background-color: hsl(var(--iui-btn-background) / 0.1);
  }

  .btn:active {
    transform: scale(0.95);
  }
  .btn:active::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.4s ease;
  }

  .btn-active {
    background-color: hsl(var(--iui-btn-background));
    color: hsl(var(--iui-btn-text));
  }
  .btn-active:hover {
    background-color: hsl(var(--iui-btn-background) / 0.85);
    color: hsl(var(--iui-btn-text));
  }
  

  /* Tamaños */
  .size-sm .btn {
    padding: var(--iui-spacing-sm) calc(var(--iui-spacing-sm) * 2.5);
    font-size: var(--iui-font-size-sm);
  }

  .size-md .btn {
    padding: var(--iui-spacing-md) calc(var(--iui-spacing-md) * 2.5);
    font-size: var(--iui-font-size-md);
  }

  .size-lg .btn {
    padding: var(--iui-spacing-lg) calc(var(--iui-spacing-lg) * 2.5);
    font-size: var(--iui-font-size-lg);
  }

  /* Bordes redondeados para el primer y último botón */
  .direction-horizontal .btn:first-child {
    border-top-left-radius: var(--iui-radius);
    border-bottom-left-radius: var(--iui-radius);
  }

  .direction-horizontal .btn:last-child {
    border-top-right-radius: var(--iui-radius);
    border-bottom-right-radius: var(--iui-radius);
  }

  .direction-vertical .btn:first-child {
    border-top-left-radius: var(--iui-radius);
    border-top-right-radius: var(--iui-radius);
  }

  .direction-vertical .btn:last-child {
    border-bottom-left-radius: var(--iui-radius);
    border-bottom-right-radius: var(--iui-radius);
  }
</style>