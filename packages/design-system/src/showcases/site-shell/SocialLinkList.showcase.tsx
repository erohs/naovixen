import { SocialLinkList } from '@naovixen/site-shell';

import type { IShowcase } from '../../interfaces/IShowcase';
import { exampleSocialLinks } from './ExampleSocialLinks.const';

export const socialLinkListShowcase: IShowcase = {
    name: 'SocialLinkList',
    examples: [
        {
            name: 'A profile and an email',
            render: () => <SocialLinkList links={exampleSocialLinks} />,
        },
    ],
};
