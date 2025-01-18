<script>
    import "$lib/styles/theme.css"
	import Button from "$lib/components/ui/ui/Button.svelte";


</script>
<Button variant="primary" on:click={() => alert("Hola!")}>
    Enviar
</Button>

<!-- <Navbar logo="/logo.png" links={[{ url: "/", text: "Inicio" }]} />
<Card title="Mi Tarjeta">
	<Input placeholder="Ingresa tu nombre" />
	<Button variant="sendary" on:click={() => alert("Hola!")}>
		Enviar
	</Button>
</Card> -->