import type { IShowcase } from '../interfaces/IShowcase';
import { SiteFooterLegal } from './SiteFooterLegal.component';

const privacyLink = { label: 'Privacy notice', path: '/privacy' };

export const siteFooterLegalShowcase: IShowcase = {
  name: 'SiteFooterLegal',
  examples: [
    {
      name: 'On another page',
      render: () => (
        <SiteFooterLegal
          copyrightHolder="Example Name"
          year={2026}
          privacyLink={privacyLink}
          currentPath="/"
        />
      ),
    },
    {
      name: 'On the privacy page',
      render: () => (
        <SiteFooterLegal
          copyrightHolder="Example Name"
          year={2026}
          privacyLink={privacyLink}
          currentPath="/privacy"
        />
      ),
    },
  ],
};
