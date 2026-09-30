import type { ComponentPropsWithRef } from 'react';
import type { HeadingLevel } from '../../heading/types/HeadingLevel';

export interface ISectionHeadingProps extends ComponentPropsWithRef<'div'> {
    /** Defaults to 2. The heading keeps the level 2 look at any level. */
    readonly level?: HeadingLevel | undefined;
    /** Goes on the heading itself, for a surrounding section's `aria-labelledby`. */
    readonly headingId?: string | undefined;
    /** A decorative chip before the heading, such as "01". Hidden from screen readers. */
    readonly number?: string | undefined;
    readonly intro?: string | undefined;
}
