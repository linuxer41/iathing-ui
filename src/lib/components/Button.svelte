<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: "primary" | "secondary" | 'ghost' | "outline" | 'danger' | 'success' | 'warning';
		size?: "sm" | "md" | "lg";
		disabled?: boolean;
		onClick?: any;
		children?: import('svelte').Snippet;
	}

	let {
		variant = "primary",
		size = "md",
		disabled = false,
		onClick = () => {},
		children,
        ...restProps
	}: Props = $props();
</script>

<button
	class="btn btn-{variant} size-{size}"
	class:btn-disabled={disabled}
	
	onclick={onClick}
	disabled={disabled}
    {...restProps}
>
{#if children}
	{@render children?.()}
	{:else}
		button
{/if}
</button>
<style>
	/* Estilos base del botón */
.btn {
    padding: 0.75rem 1.5rem;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
	border-radius: var(--border-radius)
}

.btn:active {
    transform: scale(0.95);
}

.btn:active::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.4s ease;
}

@keyframes ripple {
    to {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
    }
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Variantes */
.btn-primary {
    background-color: var(--primary-500);
    color: white;
}

.btn-primary:hover {
    background-color: var(--primary-600);
}

.btn-secondary {
    background-color: var(--secondary-500);
    color: white;
}

.btn-secondary:hover {
    background-color: var(--secondary-600);
}

.btn-ghost {
    background-color: transparent;
    color: var(--text-primary);
}

.btn-ghost:hover {
    background-color: var(--surface-color);
}

.btn-outline {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
}

.btn-outline:hover {
    background-color: var(--surface-color);
}

.btn-danger {
    background-color: var(--danger-500);
    color: white;
}

.btn-danger:hover {
    background-color: var(--danger-600);
}

.btn-success {
    background-color: var(--success-500);
    color: white;
}

.btn-success:hover {
    background-color: var(--success-600);
}

.btn-warning {
    background-color: var(--warning-500);
    color: white;
}

.btn-warning:hover {
    background-color: var(--warning-600);
}

/* Tamaños */
.size-sm {
    padding: 0.5rem 1rem;
    font-size: 12px;
}

.size-md {
    padding: 0.75rem 1.5rem;
    font-size: 14px;
}

.size-lg {
    padding: 1rem 2rem;
    font-size: 16px;
}

</style>