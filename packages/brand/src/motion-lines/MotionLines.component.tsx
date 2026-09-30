import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/**
 * Three quick strokes, set beside a speech bubble as if it had just been said. Drawn to the
 * design: bars 18, 24 and 16 long and 2.5 thick, 6 apart, each turned about its own centre.
 * Decorative.
 */
export const MotionLines: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 24 19.5"
        width="24"
        height="19.5"
        {...svgProps}
        className={joinClassNames('nx-motion-lines', className)}
        aria-hidden="true"
        focusable="false"
    >
        <rect width="18" height="2.5" rx="1.25" transform="rotate(-28 9 1.25)" />
        <rect y="8.5" width="24" height="2.5" rx="1.25" transform="rotate(-8 12 9.75)" />
        <rect y="17" width="16" height="2.5" rx="1.25" transform="rotate(14 8 18.25)" />
    </svg>
);
