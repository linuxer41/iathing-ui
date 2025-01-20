<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";

	interface Props extends HTMLInputAttributes {
		color?: "tonal" |"primary" | "secondary" | "danger" | "success" | "warning" | "info"; // Tipo de color
		variant?: "filled" | "outlined"; // Variante del input
		inputSize?: "sm" | "md" | "lg"; // Tamaño del input
		elevated?: boolean; // Sombra
		icon?: string; // Ícono (opcional)
		iconPosition?: "left" | "right"; // Posición del ícono
		error?: boolean; // Estado de error (booleano)
		disabled?: boolean; // Deshabilitado
		placeholder?: string; // Placeholder flotante
	}

	let {
		color = "tonal", // Color por defecto
		variant = "filled", // Variante por defecto
		inputSize = "md", // Tamaño por defecto
		elevated = false, // Sombra por defecto
		icon, // Ícono (opcional)
		iconPosition = "left", // Posición del ícono por defecto
		error = false, // Estado de error por defecto
		disabled = false, // Deshabilitado por defecto
		placeholder, // Placeholder flotante
		value = $bindable(), // Valor por defecto
		class: className,
		...restProps
	}: Props = $props();

	// Estado para el placeholder flotante
	let isFocused = $state(false);
</script>

<div class="input-container">
	{#if icon && iconPosition === "left"}
		<span class="icon icon-left">{@html icon}</span>
	{/if}

	<div class="input-wrapper variant-{variant} {error ? 'error' : ''}">
		<input
			class="input size-{inputSize} color-{color} {className}"
			class:iathings-elevation={elevated}
			class:has-icon-left={icon && iconPosition === "left"}
			class:has-icon-right={icon && iconPosition === "right"}
			class:disabled={disabled}
			bind:value
			onfocus={() => (isFocused = true)}
			onblur={() => (isFocused = false)}
			{...restProps}
		/>
		{#if placeholder}
			<label
				class:floating={isFocused || value}
				class:error={error}
			>
				{placeholder}
			</label>
		{/if}
	</div>

	{#if icon && iconPosition === "right"}
		<span class="icon icon-right">{@html icon}</span>
	{/if}

	{#if error}
		<span class="error-message">Error message</span>
	{/if}
</div>

<style lang="scss">
	@import '../style/common.css';

	/* Contenedor del input */
	.input-container {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}

	/* Wrapper del input */
	.input-wrapper {
		position: relative;
		width: 100%;
	}

	/* Estilos base del input */
	.input {
		width: 100%;
		background-color: transparent;
		color: hsl(var(--iui-on-background));
		transition: all 0.2s ease;
		border: none;
		outline: none;
	}

	/* Placeholder flotante */
	label {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		color: hsl(var(--iui-on-surface-variant));
		pointer-events: none;
		transition: all 0.2s ease;
	}

	label.floating {
		top: 0;
		font-size: 12px;
		color: hsl(var(--iui-primary));
	}

	label.error {
		color: hsl(var(--iui-danger));
	}

	/* Tamaños */
	.size-sm {
		padding: 0.5rem 0.75rem;
		font-size: 12px;
	}

	.size-md {
		padding: 0.75rem 1rem;
		font-size: 14px;
	}

	.size-lg {
		padding: 1rem 1.25rem;
		font-size: 16px;
	}

	/* Variantes */
	.variant-filled {
		background-color: hsl(var(--iui-surface-container-highest));
		border-radius: var(--iui-radius);
		border-bottom: 2px solid hsl(var(--iui-outline));
	}

	.variant-outlined {
		border: 2px solid hsl(var(--iui-outline));
		border-radius: var(--iui-radius);
	}

	/* Colores */
	.color-primary {
		--iui-input-color: var(--iui-primary);
		--iui-input-color-hover: var(--iui-primary) / 0.9;
	}

	.color-secondary {
		--iui-input-color: var(--iui-secondary);
		--iui-input-color-hover: var(--iui-secondary) / 0.9;
	}

	.color-danger {
		--iui-input-color: var(--iui-danger);
		--iui-input-color-hover: var(--iui-danger) / 0.9;
	}

	.color-success {
		--iui-input-color: var(--iui-success);
		--iui-input-color-hover: var(--iui-success) / 0.9;
	}

	.color-warning {
		--iui-input-color: var(--iui-warning);
		--iui-input-color-hover: var(--iui-warning) / 0.9;
	}

	.color-info {
		--iui-input-color: var(--iui-info);
		--iui-input-color-hover: var(--iui-info) / 0.9;
	}

	.color-tonal {
		--iui-input-color: hsl(var(--iui-primary) / 0.1); /* Tonalidad suave */
		--iui-input-color-hover: hsl(var(--iui-primary) / 0.2); /* Tonalidad más oscura al hacer hover */
	}

	/* Estilos de enfoque */
	.input:focus {
		border-color: hsl(var(--iui-input-color));
	}

	/* Estilos deshabilitados */
	.input:disabled {
		background-color: hsl(var(--iui-surface));
		cursor: not-allowed;
		opacity: 0.5;
	}

	/* Ícono */
	.icon {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: hsl(var(--iui-on-surface-variant));
	}

	.icon-left {
		left: 0.75rem;
	}

	.icon-right {
		right: 0.75rem;
	}

	/* Ajustes para inputs con ícono */
	.has-icon-left {
		padding-left: 2.5rem;
	}

	.has-icon-right {
		padding-right: 2.5rem;
	}

	/* Mensaje de error */
	.error-message {
		color: hsl(var(--iui-danger));
		font-size: 12px;
		margin-top: 0.5rem;
	}

	/* Estilos de error */
	.error {
		border-color: hsl(var(--iui-danger)) !important;
	}

	.error label {
		color: hsl(var(--iui-danger));
	}

	/* Elevación */
	.iathings-elevation {
		box-shadow: var(--iui-box-shadow);
	}
</style>