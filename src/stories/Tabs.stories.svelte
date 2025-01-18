<script module lang="ts">
	import { Tabs } from '$lib/index.js';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
      size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
      onChange: { action: 'onChange' },
    },
    args: {
      onChange: fn(),
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" >
  {#snippet children(args)}
  <Tabs {...args} tabs={[{label: "Pestaña 1", content: "Contenido de la pestaña 1"}, {label: "Pestaña 2", content: "Contenido de la pestaña 2"}]} />
  {/snippet}
</Story>

<!-- <Story name="Secondary" args={{ disabled: false, variant: 'secondary', rounded: 'md'}}>
  {#snippet children(args)}
  <Button {...args}>Secondary</Button>
  {/snippet}
</Story>

<Story name="Ghost" args={{ disabled: false, variant: 'ghost', rounded: 'md' }}>
  {#snippet children(args)}
  <Button {...args}>Ghost</Button>
  {/snippet}
</Story>

<Story name="Outline" args={{ disabled: false, variant: 'outline', rounded: 'md' }}>
  {#snippet children(args)}
  <Button {...args}>Outline</Button>
  {/snippet}
</Story>

<Story name="Danger" args={{ disabled: false, variant: 'danger', rounded: 'md' }}>
  {#snippet children(args)}
  <Button {...args}>Danger</Button>
  {/snippet}
</Story>

<Story name="Success" args={{ disabled: false, variant: 'success', rounded: 'md' }}>
  {#snippet children(args)}
  <Button {...args}>Success</Button>
  {/snippet}
</Story>

<Story name="Warning" args={{ disabled: false, variant: 'warning', rounded: 'md' }}>
  {#snippet children(args)}
  <Button {...args}>Warning</Button>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true, variant: 'primary', rounded: 'md' }}>
  {#snippet children(args)}
  <Button {...args}>Disabled</Button>
  {/snippet}
</Story>
 -->
