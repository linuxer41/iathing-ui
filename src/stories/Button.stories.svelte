<script module lang="ts">
	import { Button } from '$lib/index.js';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Copy from "lucide-svelte/icons/copy";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      onClick: { action: 'onClick' },
      addIcon: { control: { type: 'boolean' } },
    },
    args: {
      onClick: fn(),
    }
  });
</script>


<Story name="Primary" args={{ disabled: false, variant: 'tonal' }}>
  {#snippet children(args)}

    <Button {...args}>
      {#if args.addIcon && args.buttonType === "icon"}
        <Copy size="16" />
      {:else if args.addIcon}
        <Copy size="16" />
        Button
      {:else}
        Button
      {/if}

    </Button>
  {/snippet}
</Story>

<!-- <Story name="Icon" args={{ disabled: false,  }}>
  {#snippet children(args)}
  <Button {...args} buttonType="icon" color="primary" >
    <Copy />
  </Button>
  {/snippet}
</Story> -->
