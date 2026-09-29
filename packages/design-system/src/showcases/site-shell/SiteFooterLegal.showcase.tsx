import { SiteFooterLegal } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';

export const siteFooterLegalShowcase: IShowcase = {
    name: 'SiteFooterLegal',
    examples: [
        {
            name: 'Copyright and privacy',
            render: () => (
                <SiteFooterLegal
                    copyrightHolder="Example Name"
                    year={2026}
                    privacyLink={{ label: 'Privacy notice', path: '/privacy' }}
                    currentPath="/"
                />
            ),
        },
    ],
};
