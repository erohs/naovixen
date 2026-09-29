import type { TypedObject } from '@portabletext/types';

/** A block whose `_type` is `callout`. */
export interface ICalloutBlockValue extends TypedObject {
    readonly kind: string;
    readonly title: string;
    readonly text: string;
}
