<script module lang="ts">
	import { ButtonGroup } from '$lib/index.js';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/ButtonGoup',
    component: ButtonGroup,
    tags: ['autodocs'],
    argTypes: {
      onClick: { action: 'onClick' },
    },
    args: {
      onClick: fn(),
    }
  });
</script>

<Story name="Primary" args={{ variant: 'solid' }}>
  {#snippet children(args)}
  <ButtonGroup {...args} buttons={[{ value: "primary", label: "Botón 1" }, { value: "secondary", label: "Botón 2" }, { value: "primary", label: "Botón 1" }, { value: "secondary", label: "Botón 2" }]} />
  {/snippet}
</Story>
