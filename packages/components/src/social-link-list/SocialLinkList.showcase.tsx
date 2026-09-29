import type { IShowcase } from '../interfaces/IShowcase';
import { SocialLinkList } from './SocialLinkList.component';

export const socialLinkListShowcase: IShowcase = {
  name: 'SocialLinkList',
  examples: [
    {
      name: 'A profile and an email address',
      render: () => (
        <SocialLinkList
          links={[
            { label: 'Example profile', url: 'https://example.com' },
            { label: 'Email', url: 'mailto:hello@example.com' },
          ]}
        />
      ),
    },
  ],
};
