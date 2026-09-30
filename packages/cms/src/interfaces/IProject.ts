import type { TypedObject } from '@portabletext/types';

import type { IProjectSummary } from './IProjectSummary';

export interface IProject extends IProjectSummary {
    /** Portable Text, like a post's body. */
    readonly body: readonly TypedObject[];
}
