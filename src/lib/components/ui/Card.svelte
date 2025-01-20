<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title?: string;
		subtitle?: string;
        elevated?: boolean;
		children?: import('svelte').Snippet;
	}

	let { title = "", subtitle = "", elevated = true, children, ...restProps }: Props = $props();
</script>

<div class="iathings-card iathings-border-radiuss" class:iathings-elevation={elevated} {...restProps}>
	<div class="iathings-card-content">
		<h3 class="iathings-card-title">{title}</h3>
		<p class="iathings-card-subtitle">{subtitle}</p>
		{@render children?.()}
	</div>
</div>
<style>
    @import '../style/common.css';
	.iathings-card {
    background-color: var(--iui-surface-color);
    border: 1px solid var(--iui-border-color);
    overflow: hidden;
}

.iathings-card-content {
    padding: 1.5rem;
}

.iathings-card-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--iui-text-primary);
}

.iathings-card-subtitle {
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    color: var(--iui-text-secondary);
}
</style>