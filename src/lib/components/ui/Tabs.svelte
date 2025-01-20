<script lang="ts">
	interface Tab {
		label: string;
		content: string;
	}

	interface Props {
		tabs: Tab[];
		activeTab?: number;
		size?: "sm" | "md" | "lg"; // Tamaño de las pestañas
		color?: "primary" | "secondary" | "tertiary"; // Color de las pestañas
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
				onclick={() => {
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
		border-bottom: 1px solid hsl(var(--iui-outline));
	}

	.tab {
		padding: 0.25rem 0.5rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		color: hsl(var(--iui-on-surface));
		position: relative; /* Para posicionar el indicador */
		border-radius: var(--iui-radius);
	}

	.tab:hover {
		background-color: hsl(var(--iui-surface) / 0.5);
	}

	.tab.active {
		color: hsl(var(--iui-primary));
	}

	.indicator {
		position: absolute;
		bottom: -1px; /* Alineado con el borde inferior del contenedor */
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		height: 2px;
		background-color: hsl(var(--iui-primary));
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
		color: hsl(var(--iui-on-surface));
	}
</style>