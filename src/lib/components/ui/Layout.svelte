<!-- src/lib/components/ui/Container.svelte -->
<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		size?: "sm" | "md" | "lg" | "xl" | "full";
        children?: import('svelte').Snippet;
	}

	let { size = "md", children, ...restProps }: Props = $props();
</script>

<div
	class="container size-{size}"
	{...restProps}
>
	{@render children?.()}
</div>

<style>
	.container {
		width: 100%;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.size-sm {
		max-width: 640px;
	}

	.size-md {
		max-width: 768px;
	}

	.size-lg {
		max-width: 1024px;
	}

	.size-xl {
		max-width: 1280px;
	}

	.size-full {
		max-width: 100%;
	}
</style>