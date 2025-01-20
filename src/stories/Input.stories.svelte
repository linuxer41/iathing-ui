<script module lang="ts">
	import { Input } from '$lib/index.js';
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      // type: { control: { type: 'select' }, options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'] },
      placeholder: { control: { type: 'text' } },
      value: { control: { type: 'text' } },
      elevated: { control: { type: 'boolean' } },
    },
  });
</script>

 <Story name="Checked" args={{ disabled: false, type: 'text', placeholder: 'placeholder', value: 'value' }}></Story>
