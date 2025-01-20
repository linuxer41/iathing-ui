<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		color?: "neutral" | "primary" | "secondary" | "danger" | "success" | "warning" | "info";
		variant?: "solid" | "ghost" | "outlined" | "soft" | "circle" | "square";
		size?: "sm" | "md" | "lg";
		disabled?: boolean;
		elevated?: boolean;
		onClick?: any;
		icon: import('svelte').Snippet; // Ícono requerido
	}

	let {
		color = "neutral",
		variant = "solid",
		size = "md",
		disabled = false,
		elevated = false,
		onClick = () => {},
		icon,
		class: className,
		...restProps
	}: Props = $props();
</script>

<button
	class="icon-btn icon-btn-{color} icon-btn-{variant} size-{size} {className}"
	class:iathings-elevation={elevated}
	class:btn-disabled={disabled}
	onclick={onClick}
	disabled={disabled}
	{...restProps}
>
	{@render icon?.()}
</button>

<style>
	@import '../style/common.css';

	/* Estilos base del botón de ícono */
	.icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
		border: none;
		position: relative;
	}

	.icon-btn:active {
		transform: scale(0.95);
	}

	.icon-btn:active::after {
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

	.icon-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Variables de color */
	.icon-btn-neutral {
		--iui-btn-background: var(--iui-on-background);
		--iui-btn-text: var(--iui-background);
		--iui-btn-hover: var(--iui-on-background) / 0.9;
		--iui-btn-border: var(--iui-outline);
	}

	.icon-btn-primary {
		--iui-btn-background: var(--iui-primary);
		--iui-btn-text: var(--iui-on-primary);
		--iui-btn-hover: var(--iui-primary) / 0.9;
		--iui-btn-border: var(--iui-primary);
	}

	.icon-btn-secondary {
		--iui-btn-background: var(--iui-secondary);
		--iui-btn-text: var(--iui-on-secondary);
		--iui-btn-hover: var(--iui-secondary) / 0.9;
		--iui-btn-border: var(--iui-secondary);
	}

	.icon-btn-danger {
		--iui-btn-background: var(--iui-danger);
		--iui-btn-text: var(--iui-on-primary);
		--iui-btn-hover: var(--iui-danger) / 0.9;
		--iui-btn-border: var(--iui-danger);
	}

	.icon-btn-success {
		--iui-btn-background: var(--iui-success);
		--iui-btn-text: var(--iui-on-primary);
		--iui-btn-hover: var(--iui-success) / 0.9;
		--iui-btn-border: var(--iui-success);
	}

	.icon-btn-warning {
		--iui-btn-background: var(--iui-warning);
		--iui-btn-text: var(--iui-on-primary);
		--iui-btn-hover: var(--iui-warning) / 0.9;
		--iui-btn-border: var(--iui-warning);
	}

	.icon-btn-info {
		--iui-btn-background: var(--iui-info);
		--iui-btn-text: var(--iui-on-primary);
		--iui-btn-hover: var(--iui-info) / 0.9;
		--iui-btn-border: var(--iui-info);
	}

	/* Variantes */
	.icon-btn-solid {
		background-color: hsl(var(--iui-btn-background));
		color: hsl(var(--iui-btn-text));
	}

	.icon-btn-solid:hover {
		background-color: hsl(var(--iui-btn-hover));
	}

	.icon-btn-ghost {
		background-color: transparent;
		color: hsl(var(--iui-btn-background));
	}

	.icon-btn-ghost:hover {
		background-color: hsl(var(--iui-btn-background) / 0.15);
	}

	.icon-btn-outlined {
		background-color: transparent;
		outline: 1px solid hsl(var(--iui-btn-border));
		color: hsl(var(--iui-btn-background));
	}

	.icon-btn-outlined:hover {
		background-color: hsl(var(--iui-btn-background) / 0.15);
	}

	.icon-btn-soft {
		background-color: hsl(var(--iui-btn-background) / 0.15);
		color: hsl(var(--iui-btn-background));
	}

	.icon-btn-soft:hover {
		outline: 1px solid hsl(var(--iui-btn-border));
	}

	/* Variantes de forma */
	.icon-btn-circle {
		border-radius: 50%;
		width: 3rem; /* Tamaño base */
		height: 3rem;
		padding: 0;
	}

	.icon-btn-square {
		border-radius: var(--iui-radius);
		width: 3rem; /* Tamaño base */
		height: 3rem;
		padding: 0;
	}

	/* Tamaños */
	.size-sm {
		width: 2rem;
		height: 2rem;
		font-size: 12px;
	}

	.size-md {
		width: 3rem;
		height: 3rem;
		font-size: 14px;
	}

	.size-lg {
		width: 4rem;
		height: 4rem;
		font-size: 16px;
	}
</style>