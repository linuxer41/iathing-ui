<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLLabelElement> {
		size?: "sm" | "md" | "lg";
		disabled?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		size = "md",
		disabled = false,
		children,
		...restProps
	}: Props = $props();
</script>

<label
	class="label size-{size}"
	class:label-disabled={disabled}
	{...restProps}
>
	{#if children}
		{@render children?.()}
	{:else}
		Label
	{/if}
</label>

<style>
	/* Estilos base del Label */
	.label {
		font-weight: 500;
		display: inline-block;
		transition: color 0.2s ease;
	}

	/* Tamaños */
	.size-sm {
		font-size: 12px;
	}

	.size-md {
		font-size: 14px;
	}

	.size-lg {
		font-size: 16px;
	}

	/* Estado deshabilitado */
	.label-disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>