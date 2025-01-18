<!-- src/lib/components/ui/Separator.svelte -->
<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: "horizontal" | "vertical";
		thickness?: "sm" | "md" | "lg";
		color?: string;
	}

	let {
		orientation = "horizontal",
		thickness = "md",
		color = "var(--border-color)",
		...restProps
	}: Props = $props();
</script>

<div
	class="separator orientation-{orientation} thickness-{thickness}"
	style="background-color: {color};"
	{...restProps}
></div>

<style>
	/* Estilos base del Separator */
	.separator {
		background-color: var(--border-color);
	}

	/* Orientación */
	.orientation-horizontal {
		width: 100%;
		height: 1px;
	}

	.orientation-vertical {
		width: 1px;
		height: 100%;
	}

	/* Grosor */
	.thickness-sm {
		height: 1px;
	}

	.thickness-md {
		height: 2px;
	}

	.thickness-lg {
		height: 4px;
	}

	/* Ajustes para orientación vertical */
	.orientation-vertical.thickness-sm {
		width: 1px;
		height: 100%;
	}

	.orientation-vertical.thickness-md {
		width: 2px;
		height: 100%;
	}

	.orientation-vertical.thickness-lg {
		width: 4px;
		height: 100%;
	}
</style>