import type { IShowcase } from '../interfaces/IShowcase';
import type { ISiteFooterProps } from './interfaces/ISiteFooterProps';
import { SiteFooter } from './SiteFooter.component';

const exampleProps: ISiteFooterProps = {
  navigationItems: [
    { label: 'Home', path: '/' },
    { label: 'Example section', path: '/example' },
  ],
  socialLinks: [
    { label: 'Example profile', url: 'https://example.com' },
    { label: 'Email', url: 'mailto:hello@example.com' },
  ],
  blurb: 'An example line about the site.',
  copyrightHolder: 'Example Name',
  year: 2026,
  privacyLink: { label: 'Privacy notice', path: '/privacy' },
  currentPath: '/example',
};

export const siteFooterShowcase: IShowcase = {
  name: 'SiteFooter',
  examples: [
    { name: 'Default', render: () => <SiteFooter {...exampleProps} /> },
    {
      name: 'With a mascot',
      render: () => <SiteFooter {...exampleProps} mascot={<span>Example mascot</span>} />,
    },
  ],
};
