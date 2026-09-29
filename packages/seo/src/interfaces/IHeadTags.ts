import type { MetaTag } from '../types/MetaTag';

export interface IHeadTags {
  readonly title: string;
  readonly canonicalUrl: string;
  readonly meta: readonly MetaTag[];
}
