import type { HeadingLevel } from '../../types/HeadingLevel';

export interface ISectionHeadingProps {
  readonly title: string;
  /** Defaults to 2. The heading keeps the level 2 look at any level. */
  readonly level?: HeadingLevel | undefined;
  /** For a surrounding section's `aria-labelledby`. */
  readonly id?: string | undefined;
  /** A decorative chip before the title, such as "01". Hidden from screen readers. */
  readonly number?: string | undefined;
  readonly intro?: string | undefined;
}
