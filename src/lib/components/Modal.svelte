<script lang="ts">
	import { createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	interface Props {
		isOpen?: boolean;
		onClose?: any;
		children?: import('svelte').Snippet;
	}

	let { isOpen = false, onClose = () => {}, children }: Props = $props();
</script>

{#if isOpen}
	<div class="modal-overlay" onclick={onClose}>
		<div class="modal-content" onclick={stopPropagation(bubble('click'))}>
			{@render children?.()}
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: var(--background-color);
		padding: 2rem;
		border-radius: var(--border-radius-md);
		box-shadow: var(--shadow-lg);
		max-width: 90%;
		width: 400px;
	}
</style>