import { ThemeToggle } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';

/** Needs the page's ThemeProvider. Pressing it switches the whole page's theme. */
export const themeToggleShowcase: IShowcase = {
    name: 'ThemeToggle',
    examples: [{ name: 'Follows the page theme', render: () => <ThemeToggle /> }],
};
