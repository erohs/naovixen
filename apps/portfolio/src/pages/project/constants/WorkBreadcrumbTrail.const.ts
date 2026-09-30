import type { IBreadcrumbItem } from '@naovixen/components';

import { homeBreadcrumbTrail } from '../../../constants/HomeBreadcrumbTrail.const';

export const workBreadcrumbTrail: readonly IBreadcrumbItem[] = [
    ...homeBreadcrumbTrail,
    { label: 'Work', href: '/work' },
];
