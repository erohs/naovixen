import type { HTMLAttributes, RefAttributes } from 'react';

import type { Space } from '../enums/Space';
import type { LayoutElement } from '../types/LayoutElement';

/** Shared by Stack, Cluster and Grid. */
export interface ILayoutProps extends HTMLAttributes<HTMLElement>, RefAttributes<HTMLElement> {
    readonly as?: LayoutElement | undefined;
    /** Leave it out to keep the layout's own default gap. */
    readonly gap?: Space | undefined;
}
