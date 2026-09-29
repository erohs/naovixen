import type { TypedObject } from '@portabletext/types';

/** A block whose `_type` is `code`. */
export interface ICodeBlockValue extends TypedObject {
    readonly code: string;
    readonly language: string;
    readonly filename?: string | undefined;
}
