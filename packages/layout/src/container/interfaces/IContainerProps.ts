import type { HTMLAttributes, RefAttributes } from 'react';

import type { LayoutElement } from '../../stack/types/LayoutElement';

export interface IContainerProps extends HTMLAttributes<HTMLElement>, RefAttributes<HTMLElement> {
    readonly as?: LayoutElement | undefined;
}
