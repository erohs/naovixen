import type { ISocialLink } from '@naovixen/models';

import { placeholderEmailAddress } from './PlaceholderEmailAddress.const';

/** Placeholder: only LinkedIn is confirmed. The GitHub and Bluesky handles are the prototype's. */
export const placeholderSocialLinks: readonly ISocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/username' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/naomi-shore' },
    { label: 'Bluesky', url: 'https://bsky.app/profile/username.bsky.social' },
    { label: 'Email', url: `mailto:${placeholderEmailAddress}` },
];
