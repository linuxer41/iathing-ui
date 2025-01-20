<script>
	import "$lib/styles/theme.css";
	import { Button, Card, CheckBox, Input, Label, Layout, Modal, Separator, Switch, Tabs, Toast, ButtonGroup } from "$lib";
</script>
  

  <Button variant="primary">Haz clic aquí</Button>
  
  <Card>
	<h2>Título de la tarjeta</h2>
	<p>Contenido de la tarjeta.</p>
  </Card>
  
  <Input placeholder="Escribe algo..." />
  
  <Tabs tabs={[{ label: "Pestaña 1", content: "Contenido 1" }, { label: "Pestaña 2", content: "Contenido 2 d" }]} />

  <Switch checked={true} />

  <ButtonGroup buttons={[{ value: "primary", label: "Botón 1" }, { value: "secondary", label: "Botón 2" }, { value: "primary", label: "Botón 1" }, { value: "secondary", label: "Botón 2" }]} variant="outlined" size="lg" elevated onClick={(index, value) => { console.log(index, value); }} />