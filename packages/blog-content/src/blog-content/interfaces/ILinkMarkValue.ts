import type { TypedObject } from '@portabletext/types';

export interface ILinkMarkValue extends TypedObject {
    readonly _type: 'link';
    readonly href: string;
}
