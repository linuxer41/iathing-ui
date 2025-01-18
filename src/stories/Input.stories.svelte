<script module lang="ts">
	import Input from '../lib/components/Input.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      type: { control: { type: 'select' }, options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'] },
      placeholder: { control: { type: 'text' } },
      value: { control: { type: 'text' } },
      // disabled: { control: { type: 'boolean'}},
      // inputSize: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
      // round: {
      //   control: { type: 'select' },
      //   options: ['none', 'sm', 'md', 'lg', 'full'],
      // },
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
 <Story name="Checked" args={{ disabled: false, type: 'text', placeholder: 'placeholder', value: 'value' }}></Story>
