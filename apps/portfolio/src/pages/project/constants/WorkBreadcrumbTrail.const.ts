import type { ILink } from '@naovixen/components';

import { homeBreadcrumbTrail } from '../../../constants/HomeBreadcrumbTrail.const';

export const workBreadcrumbTrail: readonly ILink[] = [
    ...homeBreadcrumbTrail,
    { label: 'Work', href: '/work' },
];
