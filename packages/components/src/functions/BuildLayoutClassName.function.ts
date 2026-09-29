import type { Space } from '../enums/Space';

/** `nx-stack` with no gap, `nx-stack nx-stack--gap-between-text` with one. */
export function buildLayoutClassName(block: string, gap: Space | undefined): string {
  return gap === undefined ? block : `${block} ${block}--gap-${gap}`;
}
