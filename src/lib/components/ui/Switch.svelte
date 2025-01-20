<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		color?: "neutral" | "primary" | "secondary" | "danger" | "success" | "warning" | "info"; // Tipo de color
		shape?: "square" | "rounded" | "theme"; // Forma del toggle
		size?: "sm" | "md" | "lg"; // Tamaño del toggle
		checked?: boolean;
		disabled?: boolean;
		elevated?: boolean;
		onChange?: () => void;
	}

	let {
		color = "neutral", // Color por defecto
		shape = "theme", // Forma por defecto
		size = "md", // Tamaño por defecto
		checked = $bindable(false),
		disabled = false,
		elevated = false,
		onChange = () => {},
		...restProps
	}: Props = $props();
</script>

<label class="toggle-container color-{color}" >
	<input
		type="checkbox"
		bind:checked
		onchange={onChange}
		disabled={disabled}
		class="input"
	/>
	<span
		class="toggle size-{size} shape-{shape} "
		class:iathings-elevation={elevated}
		{...restProps}
	></span>
</label>

<style lang="scss">
	.toggle-container {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		--iui-toggle-color: var(--iui-surface);
		--iui-toggle-color-hover: var(--iui-surface) / 0.9;
	}

	.input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.toggle {
		position: relative;
		background-color: hsl(var(--iui-toggle-color) /0.2);
		border: 1px solid hsl(var(--iui-toggle-color));
		transition: all 0.2s ease;
	}

	/* Tamaños */
	.size-sm {
		width: 32px;
		height: 16px;
	}

	.size-md {
		width: 48px;
		height: 24px;
	}

	.size-lg {
		width: 64px;
		height: 32px;
	}

	/* Formas */
	.shape-square {
		border-radius: 0;
		--iui-local-border-radius: 0;
	}

	.shape-rounded {
		border-radius: 999px;
		--iui-local-border-radius: 999px;
	}

	.shape-theme {
		border-radius: var(--iui-radius);
		--iui-local-border-radius: var(--iui-radius);
	}

	/* Variables de color */
	.color-primary {
		--iui-toggle-color: var(--iui-primary);
		--iui-toggle-color-hover: var(--iui-primary) / 0.9;
	}

	.color-secondary {
		--iui-toggle-color: var(--iui-secondary);
		--iui-toggle-color-hover: var(--iui-secondary) / 0.9;
	}

	.color-danger {
		--iui-toggle-color: var(--iui-danger);
		--iui-toggle-color-hover: var(--iui-danger) / 0.9;
	}

	.color-success {
		--iui-toggle-color: var(--iui-success);
		--iui-toggle-color-hover: var(--iui-success) / 0.9;
	}

	.color-warning {
		--iui-toggle-color: var(--iui-warning);
		--iui-toggle-color-hover: var(--iui-warning) / 0.9;
	}

	.color-info {
		--iui-toggle-color: var(--iui-info);
		--iui-toggle-color-hover: var(--iui-info) / 0.9;
	}

	/* Estilos cuando el toggle está activado */
	.input:checked + .toggle {
		background-color: hsl(var(--iui-toggle-color));
		border-color: hsl(var(--iui-toggle-color));
	}

	/* Estilos cuando el toggle está deshabilitado */
	.input:disabled + .toggle {
		// background-color: hsl(var(--iui-surface));
		// border-color: hsl(var(--iui-outline));
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Círculo del toggle */
	.toggle::after {
		content: "";
		position: absolute;
		background-color: hsl(var(--iui-toggle-color)); /* Color del círculo cuando está inactivo */
		transition: all 0.2s ease;
		border-radius: var(--iui-local-border-radius);
	}

	/* Posición del círculo según el tamaño */
	.size-sm::after {
		width: 12px;
		height: 12px;
		top: 2px;
		left: 2px;
	}

	.size-md::after {
		width: 18px;
		height: 18px;
		top: 3px;
		left: 3px;
	}

	.size-lg::after {
		width: 24px;
		height: 24px;
		top: 4px;
		left: 4px;
	}

	/* Movimiento del círculo cuando el toggle está activado */
	.input:checked + .toggle::after {
		background-color: hsl(var(--iui-background)); /* Color del círculo cuando está activo */
		transform: translateX(100%);
	}

	.size-sm.input:checked + .toggle::after {
		transform: translateX(16px);
	}

	.size-md.input:checked + .toggle::after {
		transform: translateX(24px);
	}

	.size-lg.input:checked + .toggle::after {
		transform: translateX(32px);
	}

	/* Elevación */
	.iathings-elevation {
		box-shadow: var(--iui-box-shadow);
	}
</style>