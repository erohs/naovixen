import type { ComponentPropsWithRef } from 'react';

import type { HeadingSize } from '../enums/HeadingSize';
import type { HeadingLevel } from '../types/HeadingLevel';

export interface IHeadingProps extends ComponentPropsWithRef<'h1'> {
    readonly level: HeadingLevel;
    /** How big it looks, independent of its place in the outline. Defaults to match `level`. */
    readonly size?: HeadingSize | undefined;
}
