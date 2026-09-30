import type { BodyNode } from '../types/BodyNode';
import type { IBlogPostSummary } from './IBlogPostSummary';

export interface IBlogPost extends IBlogPostSummary {
    /** Portable Text: an open specification, so the body is not tied to one CMS. */
    readonly body: readonly BodyNode[];
}
