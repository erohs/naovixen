import type { ISocialLink } from '@naovixen/blocks';

/** One of each kind: another site opens in a new tab, an email address does not. */
export const exampleSocialLinks: readonly ISocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/example' },
    { label: 'Email', url: 'mailto:someone@example.com' },
];
