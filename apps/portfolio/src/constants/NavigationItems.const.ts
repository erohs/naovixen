import type { INavigationItem } from '@naovixen/models';

/** Work joins in Phase 7, when projects come from the CMS. */
export const navigationItems: readonly INavigationItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];
