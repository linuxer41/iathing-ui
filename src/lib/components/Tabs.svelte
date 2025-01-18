<!-- src/lib/components/Tabs.svelte -->
<script lang="ts">
	interface Tab {
		label: string;
		content: string;
	}

	interface Props {
		tabs: Tab[];
		activeTab?: number;
		size?: "sm" | "md" | "lg"; // Tamaño de las pestañas
		onChange?: (i: number) => void;
	}

	let { tabs, activeTab = 0, size = "md", onChange = () => {} }: Props = $props();
</script>

<div class="tabs-container">
	<div class="tabs-header">
		{#each tabs as tab, index}
			<button
				class="tab {index === activeTab ? 'active' : ''} size-{size}"
				onclick={() => {
					activeTab = index;
					onChange(activeTab);
				}}
			>
				{tab.label}
			</button>
		{/each}
	</div>
	<div class="tabs-content">
		{tabs[activeTab].content}
	</div>
</div>

<style>
	.tabs-container {
		width: 100%;
	}

	.tabs-header {
		display: flex;
		gap: 8px;
		border-bottom: 1px solid var(--border-color);
	}

	.tab {
		padding: 0.5rem 1rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		color: var(--text-primary);
		border-radius: var(--border-radius);
	}

	.tab.active {
		color: var(--primary-500);
		border-bottom: 2px solid var(--primary-500);
	}

	.tab:hover {
		background-color: var(--surface-color);
	}


	/* Tamaños */
	.size-sm {
		font-size: 12px;
		padding: 0.25rem 0.75rem;
	}

	.size-md {
		font-size: 14px;
		padding: 0.5rem 1rem;
	}

	.size-lg {
		font-size: 16px;
		padding: 0.75rem 1.25rem;
	}

	.tabs-content {
		padding: 1rem 0;
	}
</style>