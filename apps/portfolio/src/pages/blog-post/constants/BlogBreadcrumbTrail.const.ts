import type { ILink } from '@naovixen/components';

import { homeBreadcrumbTrail } from '../../../constants/HomeBreadcrumbTrail.const';

export const blogBreadcrumbTrail: readonly ILink[] = [
    ...homeBreadcrumbTrail,
    { label: 'Blog', href: '/blog' },
];
