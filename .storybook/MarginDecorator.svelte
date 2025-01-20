<script lang="ts">
    import type { Snippet } from 'svelte';
   
    let { children }: { children: Snippet } = $props();
    let theme: 'light' | 'dark' = $state('light');
    function setTheme(_theme) {
      theme = _theme;
    }
  </script>
   
  <div data-theme={theme}>
      <div>
        <button onclick={() => setTheme('light')}>
          Light
        </button>
        <button onclick={() => setTheme('dark')}>
          Dark
        </button>
      </div>
      <br>
    {@render children()}
  </div>
   
  <style>
    div {
      background-color: var(--iui-background-primary);
      font-display: block;
      margin: 3em;
    }
  </style>