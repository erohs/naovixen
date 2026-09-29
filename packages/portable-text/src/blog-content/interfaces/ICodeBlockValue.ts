import type { TypedObject } from '@portabletext/types';

export interface ICodeBlockValue extends TypedObject {
    readonly _type: 'code';
    readonly code: string;
    readonly language: string;
    readonly filename?: string | undefined;
}
