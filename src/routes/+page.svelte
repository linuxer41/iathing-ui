<script>
	import "$lib/styles/theme.css";
	import { Button, Card, CheckBox, Input, Label, Layout, Modal, Separator, Switch, Tabs, Toast } from "$lib/index.js";
  </script>
  
  <!-- Ejemplo de uso de algunos componentes -->
  <Button variant="primary">Haz clic aquí</Button>
  
  <Card>
	<h2>Título de la tarjeta</h2>
	<p>Contenido de la tarjeta.</p>
  </Card>
  
  <Input placeholder="Escribe algo..." />
  
  <Tabs tabs={[{ label: "Pestaña 1", content: "Contenido 1" }, { label: "Pestaña 2", content: "Contenido 2 d" }]} />

  <Switch checked={true} />