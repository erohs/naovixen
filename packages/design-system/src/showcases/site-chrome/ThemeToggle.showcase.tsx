import type { IShowcase } from '../interfaces/IShowcase';
import { ThemeToggle } from './ThemeToggle.component';

/** One example: the toggle reads the live theme, so pressing it shows the other state. */
export const themeToggleShowcase: IShowcase = {
  name: 'ThemeToggle',
  examples: [{ name: 'Follows the current theme', render: () => <ThemeToggle /> }],
};
