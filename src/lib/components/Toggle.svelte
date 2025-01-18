<!-- src/lib/components/Toggle.svelte -->
<script lang="ts">
	interface Props {
		checked?: boolean;
		disabled?: boolean;
		size?: "sm" | "md" | "lg"; // Tamaño del toggle
		onChange?: () => void;
	}

	let { checked = $bindable(false), disabled = false, size = "md", onChange = () => {} }: Props = $props();
</script>

<label class="toggle-container">
	<input
		type="checkbox"
		bind:checked
		onchange={onChange}
		disabled={disabled}
		class="input"
	/>
	<span class="toggle  size-{size}"></span>
</label>

<style>
	.toggle-container {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		
	}

	.input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.toggle {
		position: relative;
		background-color: var(--surface-color);
		border: 1px solid var(--border-color);
		transition: all 0.2s ease;
		border-radius: var(--border-radius)
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

	/* Estilos cuando el toggle está activado */
	.input:checked + .toggle {
		background-color: var(--primary-500);
		border-radius: var(--border-radius);
		border-color: var(--primary-500);
	}

	/* Estilos cuando el toggle está deshabilitado */
	.input:disabled + .toggle {
		background-color: var(--surface-color);
		border-color: var(--border-color);
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Círculo del toggle */
	.toggle::after {
		content: "";
		position: absolute;
		background-color: white;
		transition: all 0.2s ease;
		border-radius: var(--border-radius)
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
</style>