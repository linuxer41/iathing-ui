<script lang="ts">
	interface Props {
		title?: string;
		subtitle?: string;
		children?: import('svelte').Snippet;
	}

	let { title = "", subtitle = "", children }: Props = $props();
</script>

<div class="iathings-card">
	<div class="iathings-card-content">
		<h3 class="iathings-card-title">{title}</h3>
		<p class="iathings-card-subtitle">{subtitle}</p>
		{@render children?.()}
	</div>
</div>
<style>
	.iathings-card {
    background-color: var(--surface-color);
    border-radius: var(--border-radius-md);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
}

.iathings-card-content {
    padding: 1.5rem;
}

.iathings-card-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
}

.iathings-card-subtitle {
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
}
</style>