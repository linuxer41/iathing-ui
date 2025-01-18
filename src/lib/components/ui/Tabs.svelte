<!-- src/lib/components/ui/Tabs.svelte -->
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
				class="tab size-{size}"
				class:active={index === activeTab}
				on:click={() => {
					activeTab = index;
					onChange(activeTab);
				}}
			>
				{tab.label}
				<div class="indicator {index === activeTab ? 'active' : 'inactive'}"></div>
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
		padding: 0.25rem 0.5rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		color: var(--text-primary);
		position: relative; /* Para posicionar el indicador */
		border-radius: var(--border-radius);
	}

	.tab:hover {
		background-color: var(--surface-color);
	}

	.tab.active {
		color: var(--primary-500);
	}

	.indicator {
		position: absolute;
		bottom: -1px; /* Alineado con el borde inferior del contenedor */
		right: 10%;
		width: 80%;
		/* transform: translateX(-10%); */
		height: 2px;
		background-color: var(--primary-500);
		transition: opacity 0.2s ease;
	}

	.indicator.active {
		opacity: 1;
	}

	.indicator.inactive {
		opacity: 0;
	}

	/* Tamaños */
	.size-sm {
		font-size: 12px;
		padding: 0.125rem 0.25rem;
	}

	.size-md {
		font-size: 14px;
		padding: 0.25rem 0.5rem;
	}

	.size-lg {
		font-size: 16px;
		padding: 0.5rem 1rem;
	}

	.tabs-content {
		padding: 1rem 0;
	}
</style>