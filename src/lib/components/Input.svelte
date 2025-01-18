<!-- src/lib/components/Input.svelte -->
<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";

	interface Props extends HTMLInputAttributes {
		inputSize?: "sm" | "md" | "lg"; // Tamaño del input
	}

	let {
		value = $bindable(),
		inputSize = 'md',
		class: className,
		...restProps
	}: Props = $props();
</script>

<input
	class="input size-{inputSize} {className}"
	bind:value
	{...restProps}
/>

<style>
	/* Estilos base del input */
	.input {
		width: 100%;
		border: 1px solid var(--border-color);
		background-color: var(--background-color);
		color: var(--text-primary);
		transition: all 0.2s ease;
		border-radius: var(--border-radius)
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

	/* Estilos de enfoque */
	.input:focus {
		outline: none;
		border-color: var(--primary-500);
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
	}

	/* Estilos deshabilitados */
	.input:disabled {
		background-color: var(--surface-color);
		cursor: not-allowed;
		opacity: 0.5;
	}
</style>