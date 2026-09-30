import type { IBreadcrumbItem } from '@naovixen/components';

import { homeBreadcrumbTrail } from '../../../constants/HomeBreadcrumbTrail.const';

export const blogBreadcrumbTrail: readonly IBreadcrumbItem[] = [
    ...homeBreadcrumbTrail,
    { label: 'Blog', href: '/blog' },
];
