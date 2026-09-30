import type { IBreadcrumbItem } from '@naovixen/blocks';

import { homeBreadcrumbTrail } from '../../../constants/HomeBreadcrumbTrail.const';

export const workBreadcrumbTrail: readonly IBreadcrumbItem[] = [
    ...homeBreadcrumbTrail,
    { label: 'Work', href: '/work' },
];
