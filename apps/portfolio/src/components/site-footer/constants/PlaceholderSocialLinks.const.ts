import type { ILink } from '@naovixen/components';

import { placeholderEmailAddress } from '../../../constants/PlaceholderEmailAddress.const';

/** Placeholder: only LinkedIn is confirmed. The GitHub and Bluesky handles are the prototype's. */
export const placeholderSocialLinks: readonly ILink[] = [
    { label: 'GitHub', href: 'https://github.com/username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naomi-shore' },
    { label: 'Bluesky', href: 'https://bsky.app/profile/username.bsky.social' },
    { label: 'Email', href: `mailto:${placeholderEmailAddress}` },
];
