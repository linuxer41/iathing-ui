import type { Preview } from '@storybook/svelte'
import { themes } from '@storybook/theming';

import '../src/lib/styles/theme.css';
import '../src/lib/styles/global.css';
import MarginDecorator from './MarginDecorator.svelte';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    }
  },
  decorators: [(story, context) => {
    const selectedTheme = context.globals.theme || 'light';
    document.documentElement.setAttribute('data-theme', selectedTheme);
    context.parameters.docs.theme = themes[selectedTheme];
    return story();
  },
],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
};

export default preview;