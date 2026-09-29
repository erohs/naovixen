import { Link } from '@naovixen/components';
import { SiteFooterColumn } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';

export const siteFooterColumnShowcase: IShowcase = {
    name: 'SiteFooterColumn',
    examples: [
        {
            name: 'A heading over links',
            render: () => (
                <SiteFooterColumn heading="elsewhere">
                    <Link href="#example">Example link</Link>
                </SiteFooterColumn>
            ),
        },
    ],
};
