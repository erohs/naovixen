import { blueskyIcon, gitHubIcon, linkedInIcon } from '@naovixen/components';

import type { IContactLink } from '../interfaces/IContactLink';

/** Placeholder: only LinkedIn is confirmed. The GitHub and Bluesky handles are the prototype's. */
export const placeholderContactLinks: readonly IContactLink[] = [
    {
        label: 'LinkedIn',
        detail: 'linkedin.com/in/naomi-shore',
        url: 'https://www.linkedin.com/in/naomi-shore',
        icon: linkedInIcon,
    },
    {
        label: 'GitHub',
        detail: 'github.com/username',
        url: 'https://github.com/username',
        icon: gitHubIcon,
    },
    {
        label: 'Bluesky',
        detail: '@username.bsky.social',
        url: 'https://bsky.app/profile/username.bsky.social',
        icon: blueskyIcon,
    },
];
