# iathings-ui

**iathings-ui** es una librería de componentes UI desarrollada por [IATHINGS](https://iathings.com) para uso interno en sus productos. Sin embargo, es de uso libre para cualquier persona bajo la licencia MIT.

## Características

- **Componentes personalizables**: Diseñados para ser altamente configurables.
- **Basado en Svelte y TypeScript**: Moderno, eficiente y con tipado seguro.
- **Licencia MIT**: Libre para usar, modificar y distribuir.

## Instalación

Para instalar la librería, ejecuta el siguiente comando:

```bash
npm install iathings-ui
```

## Uso

Importa los componentes en tu proyecto de Svelte:

```svelte
<script>
  import { Button, Card, CheckBox, Input, Label, Layout, Modal, Separator, Switch, Tabs, Toast } from "iathings-ui";
</script>

<!-- Ejemplo de uso de algunos componentes -->
<Button variant="primary">Haz clic aquí</Button>

<Card>
  <h2>Título de la tarjeta</h2>
  <p>Contenido de la tarjeta.</p>
</Card>

<Input placeholder="Escribe algo..." />

<Tabs tabs={[{ label: "Pestaña 1", content: "Contenido 1" }, { label: "Pestaña 2", content: "Contenido 2" }]} />
```

## Componentes Disponibles

- **Button**: Botón personalizable con variantes y tamaños.
- **Card**: Tarjeta para agrupar contenido relacionado.
- **CheckBox**: Casilla de verificación para opciones binarias.
- **Input**: Campo de entrada de texto personalizable.
- **Label**: Etiqueta para formularios o textos descriptivos.
- **Layout**: Componentes de diseño como contenedores, grids y flexbox.
- **Modal**: Ventana modal para mostrar contenido emergente.
- **Separator**: Línea divisoria para separar secciones.
- **Switch**: Interruptor para alternar entre estados.
- **Tabs**: Pestañas para organizar contenido en secciones.
- **Toast**: Notificaciones emergentes temporales.

## Storybook

Explora todos los componentes y sus variantes en nuestro [Storybook](https://iathings.github.io/iathings-ui).

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Puedes usarlo libremente en tus proyectos personales o comerciales.