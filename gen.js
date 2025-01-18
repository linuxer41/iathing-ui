const fs = require("fs");
const path = require("path");

// Definir la estructura de la librería
const estructura = {
	"mi-libreria": {
		src: {
			lib: {
				components: {
					"Button.svelte": `
<script>
	export let variant = "primary"; // primary, secondary, outline, text
	export let rounded = "md"; // sm, md, lg, full
	export let shadow = "md"; // sm, md, lg, none
	export let disabled = false;
	export let onClick = () => {};
</script>

<button
	class="btn btn-{variant} rounded-{rounded} shadow-{shadow}"
	on:click={onClick}
	disabled={disabled}
>
	<slot />
</button>

<style>
	.btn {
		padding: 0.75rem 1.5rem;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		border: none;
	}

	.btn-primary {
		background-color: var(--primary-color);
		color: white;
	}

	.btn-secondary {
		background-color: var(--secondary-color);
		color: white;
	}

	.btn-outline {
		background-color: transparent;
		border: 1px solid var(--primary-color);
		color: var(--primary-color);
	}

	.btn-text {
		background-color: transparent;
		color: var(--primary-color);
	}

	.rounded-sm {
		border-radius: 4px;
	}

	.rounded-md {
		border-radius: 8px;
	}

	.rounded-lg {
		border-radius: 12px;
	}

	.rounded-full {
		border-radius: 9999px;
	}

	.shadow-sm {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.shadow-md {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.shadow-lg {
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	}

	.shadow-none {
		box-shadow: none;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
					`,
					"Input.svelte": `
<script>
	export let type = "text";
	export let placeholder = "";
	export let value = "";
	export let rounded = "md"; // sm, md, lg, full
	export let shadow = "sm"; // sm, md, lg, none
	export let disabled = false;
</script>

<input
	{type}
	{placeholder}
	bind:value
	{disabled}
	class="input rounded-{rounded} shadow-{shadow}"
/>

<style>
	.input {
		padding: 0.75rem 1rem;
		border: 1px solid #ccc;
		font-size: 14px;
		width: 100%;
		transition: all 0.2s ease;
	}

	.rounded-sm {
		border-radius: 4px;
	}

	.rounded-md {
		border-radius: 8px;
	}

	.rounded-lg {
		border-radius: 12px;
	}

	.rounded-full {
		border-radius: 9999px;
	}

	.shadow-sm {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.shadow-md {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.shadow-lg {
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	}

	.shadow-none {
		box-shadow: none;
	}

	.input:disabled {
		background-color: #f5f5f5;
		cursor: not-allowed;
	}
</style>
					`,
					"Card.svelte": `
<script>
	export let title = "";
	export let rounded = "md"; // sm, md, lg
	export let shadow = "md"; // sm, md, lg, none
</script>

<div class="card rounded-{rounded} shadow-{shadow}">
	<h3>{title}</h3>
	<slot />
</div>

<style>
	.card {
		background-color: white;
		padding: 1.5rem;
		border: 1px solid #eaeaea;
		transition: all 0.2s ease;
	}

	.rounded-sm {
		border-radius: 4px;
	}

	.rounded-md {
		border-radius: 8px;
	}

	.rounded-lg {
		border-radius: 12px;
	}

	.shadow-sm {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.shadow-md {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.shadow-lg {
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	}

	.shadow-none {
		box-shadow: none;
	}

	h3 {
		margin: 0 0 1rem 0;
		font-size: 18px;
		font-weight: 600;
	}
</style>
					`,
					"Navbar.svelte": `
<script>
	export let logo = "";
	export let links = [];
</script>

<nav class="navbar">
	<div class="logo">
		<img src={logo} alt="Logo" />
	</div>
	<div class="links">
		{#each links as link}
			<a href={link.url} class="link">{link.text}</a>
		{/each}
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.logo img {
		height: 40px;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	.link {
		color: var(--text-color);
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.link:hover {
		color: var(--primary-color);
	}
</style>
					`,
					"Modal.svelte": `
<script>
	export let isOpen = false;
	export let onClose = () => {};
</script>

{#if isOpen}
	<div class="modal-overlay" on:click={onClose}>
		<div class="modal-content" on:click|stopPropagation>
			<slot />
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
		background-color: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 90%;
		width: 400px;
	}
</style>
					`,
					"Toast.svelte": `
<script>
	export let message = "";
	export let type = "info"; // info, success, error, warning
	export let duration = 3000;
	import { onMount } from "svelte";

	let isVisible = false;

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
					`,
					"Table.svelte": `
<script>
	export let headers = [];
	export let rows = [];
</script>

<table class="table">
	<thead>
		<tr>
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each row as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.table {
		width: 100%;
		border-collapse: collapse;
	}

	th, td {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #eaeaea;
	}

	th {
		background-color: #f5f5f5;
		font-weight: 600;
	}
</style>
					`,
					"Tabs.svelte": `
<script>
	export let tabs = [];
	export let activeTab = 0;
</script>

<div class="tabs">
	<div class="tab-list">
		{#each tabs as tab, index}
			<button
				class="tab {index === activeTab ? 'active' : ''}"
				on:click={() => (activeTab = index)}
			>
				{tab.label}
			</button>
		{/each}
	</div>
	<div class="tab-content">
		<slot {activeTab} />
	</div>
</div>

<style>
	.tabs {
		width: 100%;
	}

	.tab-list {
		display: flex;
		gap: 1rem;
		border-bottom: 1px solid #eaeaea;
	}

	.tab {
		padding: 0.5rem 1rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		color: var(--text-color);
		transition: all 0.2s ease;
	}

	.tab.active {
		color: var(--primary-color);
		border-bottom: 2px solid var(--primary-color);
	}

	.tab-content {
		padding: 1rem 0;
	}
</style>
					`,
				},
				styles: {
					"theme.css": `
:root {
	--primary-color: #6200ee;
	--secondary-color: #03dac6;
	--info-color: #2196f3;
	--success-color: #4caf50;
	--error-color: #f44336;
	--warning-color: #ff9800;
	--text-color: #333;
	--background-color: #fff;
}
					`,
				},
				utils: {},
				"index.js": `
export { default as Button } from "./components/Button.svelte";
export { default as Input } from "./components/Input.svelte";
export { default as Card } from "./components/Card.svelte";
export { default as Navbar } from "./components/Navbar.svelte";
export { default as Modal } from "./components/Modal.svelte";
export { default as Toast } from "./components/Toast.svelte";
export { default as Table } from "./components/Table.svelte";
export { default as Tabs } from "./components/Tabs.svelte";
				`,
			},
			"App.svelte": `
<script>
	import { Button, Input, Card, Navbar, Modal, Toast, Table, Tabs } from "./lib";
</script>

<Navbar logo="/logo.png" links={[{ url: "/", text: "Inicio" }]} />
<Card title="Mi Tarjeta">
	<Input placeholder="Ingresa tu nombre" />
	<Button variant="primary" on:click={() => alert("Hola!")}>
		Enviar
	</Button>
</Card>
			`,
		},
	},
};

// Función para crear archivos y directorios
function crearEstructura(basePath, estructura) {
	for (const [nombre, contenido] of Object.entries(estructura)) {
		const rutaCompleta = path.join(basePath, nombre);

		if (typeof contenido === "string") {
			// Es un archivo
			fs.writeFileSync(rutaCompleta, contenido.trim());
		} else {
			// Es un directorio
			fs.mkdirSync(rutaCompleta, { recursive: true });
			crearEstructura(rutaCompleta, contenido);
		}
	}
}

// Crear la estructura de la librería
crearEstructura(".", estructura);

console.log("Librería creada exitosamente.");