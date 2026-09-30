import type { BodyNode } from '../types/BodyNode';
import type { IProjectSummary } from './IProjectSummary';

export interface IProject extends IProjectSummary {
    /** Portable Text, like a post's body. */
    readonly body: readonly BodyNode[];
}
