import type { TypedObject } from '@portabletext/types';

export interface IProjectSection {
    readonly heading: string;
    /** Portable Text, like a post's body. */
    readonly body: readonly TypedObject[];
}
