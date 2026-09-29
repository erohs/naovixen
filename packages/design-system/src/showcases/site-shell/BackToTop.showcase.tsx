import { BackToTop } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';

/** Fixed to the corner of the page; hidden at the very top, shown once the page scrolls. */
export const backToTopShowcase: IShowcase = {
    name: 'BackToTop',
    examples: [{ name: 'Default', render: () => <BackToTop /> }],
};
