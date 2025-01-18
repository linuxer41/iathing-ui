<script lang="ts">
	interface Props {
		isOpen?: boolean;
		onClose?: () => void;
		children?: import('svelte').Snippet;
	}

	let { isOpen = false, onClose = () => {}, children }: Props = $props();
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="modal-overlay" onclick={onClose}>
		<div class="modal-content" onclick={(e) => e.stopPropagation()}>
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