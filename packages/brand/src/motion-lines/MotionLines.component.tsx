import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

/** Three quick strokes, set beside a speech bubble as if it had just been said. Decorative. */
export const MotionLines: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 28 30"
        width="28"
        height="30"
        {...svgProps}
        className={joinClassNames('nx-motion-lines', className)}
        aria-hidden="true"
        focusable="false"
    >
        <path d="M5 9.2 21 .8M1.1 15.7l23.8-3.4M4.2 21.1l15.6 3.8" />
    </svg>
);
