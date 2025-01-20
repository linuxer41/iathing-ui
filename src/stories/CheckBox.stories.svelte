<script module lang="ts">
	import { CheckBox } from '$lib/index.js';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    argTypes: {
      checked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
      onChange: { action: 'onChange' },
    },
    args: {
      onChange: fn(),
    }
  });
</script>

 <Story name="Checked" args={{ disabled: false, checked: true }}></Story>
