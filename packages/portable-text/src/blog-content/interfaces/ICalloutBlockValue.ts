import type { TypedObject } from '@portabletext/types';

export interface ICalloutBlockValue extends TypedObject {
    readonly _type: 'callout';
    readonly kind: string;
    readonly title: string;
    readonly text: string;
}
