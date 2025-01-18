<script lang="ts">
	import { onMount } from "svelte";
	interface Props {
		message?: string;
		type?: string; // info, success, error, warning
		duration?: number;
	}

	let { message = "", type = "info", duration = 3000 }: Props = $props();

	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
		setTimeout(() => {
			isVisible = false;
		}, duration);
	});
</script>

{#if isVisible}
	<div class="toast toast-{type}">
		{message}
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		padding: 1rem;
		border-radius: 8px;
		color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		animation: fadeIn 0.3s ease;
	}

	.toast-info {
		background-color: var(--info-color);
	}

	.toast-success {
		background-color: var(--success-color);
	}

	.toast-error {
		background-color: var(--error-color);
	}

	.toast-warning {
		background-color: var(--warning-color);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>