import { RouteAnnouncer } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';

/** Visually hidden: a screen reader reads the message out when it changes. */
export const routeAnnouncerShowcase: IShowcase = {
    name: 'RouteAnnouncer',
    examples: [
        { name: 'Empty, on first load', render: () => <RouteAnnouncer message="" /> },
        {
            name: 'After a navigation',
            render: () => <RouteAnnouncer message="About — Naomi Shore" />,
        },
    ],
};
