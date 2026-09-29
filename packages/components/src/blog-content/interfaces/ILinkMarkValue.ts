import type { TypedObject } from '@portabletext/types';

/** An annotation whose `_type` is `link`, on a span of text. */
export interface ILinkMarkValue extends TypedObject {
  readonly href: string;
}
