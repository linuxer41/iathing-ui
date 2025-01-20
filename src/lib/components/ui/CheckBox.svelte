<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		color?: "neutral" | "primary" | "secondary" | "danger" | "success" | "warning"; // Tipo de color
		shape?: "square" | "rounded" | "theme"; // Forma del checkbox
		size?: "sm" | "md" | "lg"; // Tamaño del checkbox
		checked?: boolean;
		disabled?: boolean;
		elevation?: 0 | 1 | 2 | 3; // Elevación del checkbox
		onChange?: () => void;
	}

	let {
		color = "neutral", // Color por defecto
		shape = "theme", // Forma por defecto
		size = "md", // Tamaño por defecto
		checked = $bindable(false),
		disabled = false,
		elevation = 0,
		onChange = () => {},
		...restProps
	}: Props = $props();
</script>

<label class="checkbox color-{color}" >
	<input
		type="checkbox"
		bind:checked
		onchange={onChange}
		disabled={disabled}
		class="input"
	/>
	<span
		class="checkmark size-{size} shape-{shape} "
		style="box-shadow: var(--iui-elevation-{elevation});"
		{...restProps}
	></span>
</label>

<style lang="scss">



	.checkbox {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		position: relative;
		--iui-checkbox-color: var(--iui-surface);
		--iui-chemark-color: var(--iui-on-surface);
	}

	/* Variables de color */

		.color-primary {
		--iui-checkbox-color: var(--iui-primary);
		--iui-chemark-color: var(--iui-background);
	}

	.color-secondary {
		--iui-checkbox-color: var(--iui-secondary);
		--iui-chemark-color: var(--iui-background);
	}

	.color-danger {
		--iui-checkbox-color: var(--iui-danger);
		--iui-chemark-color: var(--iui-background);
	}

	.color-success {
		--iui-checkbox-color: var(--iui-success);
		--iui-chemark-color: var(--iui-background);
	}

	.color-warning {
		--iui-checkbox-color: var(--iui-warning);
		--iui-chemark-color: var(--iui-background);
	}

	.input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.checkmark {
		border: 2px solid hsl(var(--iui-checkbox-color));
		background-color: hsl(var(--iui-checkbox-color) / 0.15);
		transition: all 0.2s ease;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Tamaños */
	.size-sm {
		width: 16px;
		height: 16px;
	}

	.size-md {
		width: 24px;
		height: 24px;
	}

	.size-lg {
		width: 32px;
		height: 32px;
	}

	/* Formas */
	.shape-theme {
		border-radius: var(--iui-radius);
	}
	.shape-square {
		border-radius: 0;
	}

	.shape-rounded {
		border-radius: 999px;
	}


	/* Estilos cuando el checkbox está marcado */
	.input:checked ~ .checkmark {
		background-color: hsl(var(--iui-checkbox-color));
		border-color: hsl(var(--iui-checkbox-color));
	}

	/* Estilos cuando el checkbox está deshabilitado */
	.input:disabled ~ .checkmark {
		background-color: hsl(var(--iui-surface));
		border-color: hsl(var(--iui-outline));
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Icono de check */
	.checkmark::after {
		content: "";
		position: absolute;
		display: none;
		left: 50%;
		top: 50%;
		width: 5px;
		height: 10px;
		border: solid hsl(var(--iui-chemark-color));
		border-width: 0 2px 2px 0;
		transform: translate(-50%, -50%) rotate(45deg);
		transition: all 0.2s ease;
	}

	/* Ajustar el tamaño del checkmark según el tamaño del checkbox */
	.size-sm::after {
		width: 4px;
		height: 8px;
	}

	.size-md::after {
		width: 5px;
		height: 10px;
	}

	.size-lg::after {
		width: 6px;
		height: 12px;
	}

	.input:checked ~ .checkmark::after {
		display: block;
	}

	/* Efecto de hover */
	.checkmark:hover {
		background-color: hsl(var(--iui-checkbox-color)/0.35);
	}

</style>