<script module lang="ts">
	import Button from '../lib/components/Button.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'ghost', 'outline', 'danger', 'success', 'warning'] },
      size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'onClick' },
    },
    args: {
      onClick: fn(),
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ disabled: false, variant: 'primary' }}>
  {#snippet children(args)}
  <Button {...args}>Button</Button>
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
