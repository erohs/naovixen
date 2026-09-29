import type { IShowcase } from '../interfaces/IShowcase';
import { BackToTop } from './BackToTop.component';

/** Fixed to the corner of the window, and hidden until the page has been scrolled. */
export const backToTopShowcase: IShowcase = {
  name: 'BackToTop',
  examples: [{ name: 'Default', render: () => <BackToTop /> }],
};
