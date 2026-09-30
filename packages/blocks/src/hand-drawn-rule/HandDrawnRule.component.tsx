import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { handDrawnRulePath } from './constants/HandDrawnRulePath.const';

/** Decorative. Stretches to the full width without thickening the line. */
export const HandDrawnRule: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 240 12"
        preserveAspectRatio="none"
        {...svgProps}
        className={joinClassNames('nv-hand-drawn-rule', className)}
        aria-hidden="true"
        focusable="false"
    >
        <path d={handDrawnRulePath} vectorEffect="non-scaling-stroke" />
    </svg>
);
