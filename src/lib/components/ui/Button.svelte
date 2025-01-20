<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: "tonal" | "filled" | "outlined" | "ghost" | "link"; // Variante del botón
		color?: "neutral" | "primary" | "secondary" | "danger" | "success" | "warning";
		buttonType?: "icon" | "button"; // Tipo de botón
		size?: "sm" | "md" | "lg"; // Tamaño del botón
		elevation?: 0 | 1 | 2 | 3; // Elevación del botón
		disabled?: boolean;
		onClick?: () => void;
		children?: import('svelte').Snippet;
	}

	let {
		variant = "tonal", // Variante por defecto (tonal)
		color = "neutral", // Color por defecto
		size = "md", // Tamaño por defecto
		disabled = false,
		elevation = 0,
		onClick = () => {},
		children,
		buttonType= "button",
		class: className,
		...restProps
	}: Props = $props();
</script>

<button
	class="btn btn-{variant} size-{size} {className}"
	class:btn-icon={buttonType === "icon"}
	style="--iui-btn-color: var(--iui-{color}, var(--iui-on-surface)); box-shadow: var(--iui-elevation-{elevation});
	{color === 'neutral' && [ 'filled', 'tonal'].includes(variant)? 'background-color: hsl(var(--iui-surface)); color: hsl(var(--iui-on-surface));':''}
	
	"
	class:btn-disabled={disabled}
	onclick={onClick}
	disabled={disabled}
	{...restProps}
>
	{@render children?.()}
</button>

<style lang="scss">
	@import '../style/common.css';

	/* Estilos base del botón */
	.btn {
		padding: var(--iui-spacing-md) calc(var(--iui-spacing-md) * 2.5);
		font-size: var(--iui-font-size-md);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		border: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		position: relative;
		border-radius: var(--iui-radius);
		color: hsl(var(--iui-surface));
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

	@keyframes ripple {
		to {
			transform: translate(-50%, -50%) scale(4);
			opacity: 0;
		}
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Variables de color */
	.btn-tonal {
		background-color: hsl(var(--iui-btn-color) / 0.25);
		color: hsl(var(--iui-btn-color));
	}

	.btn-tonal:hover {
		background-color: hsl(var(--iui-btn-color) / 0.35); /* Cambia el fondo al hacer hover */
		color: hsl(var(--iui-btn-color)); /* Mantiene el color del texto */
	}

	.btn-filled {
		background-color: hsl(var(--iui-btn-color));
		color: hsl(var(--iui-on-primary));
	}

	.btn-filled:hover {
		background-color: hsl(var(--iui-btn-color) / 0.85); /* Oscurece el fondo al hacer hover */
	}

	.btn-outlined {
		background-color: transparent;
		border: 1px solid hsl(var(--iui-btn-color));
		color: hsl(var(--iui-btn-color));
	}

	.btn-outlined:hover {
		background-color: hsl(var(--iui-btn-color) / 0.15);
	}

	.btn-ghost {
		background-color: transparent;
		color: hsl(var(--iui-btn-color));
	}

	.btn-ghost:hover {
		background-color: hsl(var(--iui-btn-color) / 0.15);
	}

	.btn-link {
		background-color: transparent;
		color: hsl(var(--iui-btn-color));
		border: none;
		text-decoration: underline;
	}

	.btn-link:hover {
		background-color: hsl(var(--iui-btn-color) / 0.15);
	}

	/* Estilos específicos para botones de tipo icon */
	.btn.btn-icon {
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn.btn-icon.btn-tonal {
		background-color: hsl(var(--iui-btn-color) / 0.25);
		color: hsl(var(--iui-btn-color));
	}

	.btn.btn-icon.btn-tonal:hover {
		background-color: hsl(var(--iui-btn-color) / 0.35); /* Cambia el fondo al hacer hover */
	}

	.btn.btn-icon.btn-filled {
		background-color: hsl(var(--iui-btn-color));
		color: hsl(var(--iui-on-primary));
	}

	.btn.btn-icon.btn-filled:hover {
		background-color: hsl(var(--iui-btn-color) / 0.85); /* Oscurece el fondo al hacer hover */
	}

	.btn.btn-icon.btn-outlined {
		background-color: transparent;
		border: 1px solid hsl(var(--iui-btn-color));
		color: hsl(var(--iui-btn-color));
	}

	.btn.btn-icon.btn-outlined:hover {
		background-color: hsl(var(--iui-btn-color) / 0.1);
	}

	.btn.btn-icon.btn-ghost {
		background-color: transparent;
		color: hsl(var(--iui-btn-color));
	}

	.btn.btn-icon.btn-ghost:hover {
		background-color: hsl(var(--iui-btn-color) / 0.1);
	}

	.btn.btn-icon.btn-elevated {
		background-color: hsl(var(--iui-surface-container-low));
		color: hsl(var(--iui-btn-color));
		box-shadow: var(--iui-box-shadow);
	}

	.btn.btn-icon.btn-elevated:hover {
		background-color: hsl(var(--iui-surface-container-low) / 0.9);
	}

	/* Contenedor del ícono */
	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Tamaños */
	.size-sm {
		padding: var(--iui-spacing-sm) calc(var(--iui-spacing-sm) * 2.5);
		font-size: var(--iui-font-size-sm);

		/* Ajustes para la variante icon */
		&.btn-icon {
			width: 2rem;
			height: 2rem;
		}
	}

	.size-md {
		padding: var(--iui-spacing-md) calc(var(--iui-spacing-md) * 2.5);
		font-size: var(--iui-font-size-md);

		/* Ajustes para la variante icon */
		&.btn-icon {
			width: 3rem;
			height: 3rem;
		}
	}

	.size-lg {
		padding: var(--iui-spacing-lg) calc(var(--iui-spacing-lg) * 2.5);
		font-size: var(--iui-font-size-lg);

		/* Ajustes para la variante icon */
		&.btn-icon {
			width: 4rem;
			height: 4rem;
		}
	}
</style>