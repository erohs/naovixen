import type { IBreadcrumbItem } from '@naovixen/blocks';

import { homeBreadcrumbTrail } from './HomeBreadcrumbTrail.const';

export const blogBreadcrumbTrail: readonly IBreadcrumbItem[] = [
    ...homeBreadcrumbTrail,
    { label: 'Blog', href: '/blog' },
];
