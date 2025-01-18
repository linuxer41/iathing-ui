<!-- src/lib/components/Checkbox.svelte -->
<script lang="ts">
	interface Props {
		checked?: boolean;
		disabled?: boolean;
		size?: "sm" | "md" | "lg"; // Tamaño del checkbox
		onChange?: () => void;
	}

	let { checked = $bindable(false), disabled = false, size = "md", onChange = () => {} }: Props = $props();
</script>

<label class="checkbox">
	<input
		type="checkbox"
		bind:checked
		onchange={onChange}
		disabled={disabled}
		class="input"
	/>
	<span class="checkmark size-{size}"></span>
</label>

<style lang="scss">
	.checkbox {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	.input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.checkmark {
		border: 2px solid var(--border-color);
		background-color: var(--background-color);
		transition: all 0.2s ease;
		position: relative;
		border-radius: var(--border-radius)
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

	/* Estilos cuando el checkbox está marcado */
	.input:checked ~ .checkmark {
		background-color: var(--primary-500);
		border-color: var(--primary-500);
	}

	/* Estilos cuando el checkbox está deshabilitado */
	.input:disabled ~ .checkmark {
		background-color: var(--surface-color);
		border-color: var(--border-color);
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
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: translate(-50%, -50%) rotate(45deg);
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
</style>