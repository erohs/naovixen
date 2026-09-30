import type { ILink } from '@naovixen/components';

/** One of each kind: another site opens in a new tab, an email address does not. */
export const exampleSocialLinks: readonly ILink[] = [
    { label: 'GitHub', href: 'https://github.com/example' },
    { label: 'Email', href: 'mailto:someone@example.com' },
];
