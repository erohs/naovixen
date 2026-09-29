import { BackToTop } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';

/** Fixed to the corner of the page, and revealed once the page has scrolled a screen. */
export const backToTopShowcase: IShowcase = {
    name: 'BackToTop',
    examples: [{ name: 'Default', render: () => <BackToTop /> }],
};
