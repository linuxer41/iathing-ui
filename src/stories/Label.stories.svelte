<script module lang="ts">
	import { Label } from '$lib/index.js';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
      size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
      disabled: { control: { type: 'boolean' } },
    },
  });
</script>

<Story name="Primary" args={{ disabled: false }}>
  {#snippet children(args)}
  <Label {...args}>Label</Label>
  {/snippet}
</Story>
