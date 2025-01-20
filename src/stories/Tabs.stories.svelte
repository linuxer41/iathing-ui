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

<Story name="Primary" >
  {#snippet children(args)}
  <Tabs {...args} tabs={[{label: "Pestaña 1", content: "Contenido de la pestaña 1"}, {label: "Pestaña 2", content: "Contenido de la pestaña 2"}]} />
  {/snippet}
</Story>
