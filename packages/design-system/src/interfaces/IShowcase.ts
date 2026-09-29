import type { IShowcaseExample } from './IShowcaseExample';

/** One per component. The design system page lists them, and end-to-end tests render them. */
export interface IShowcase {
    readonly name: string;
    readonly examples: readonly IShowcaseExample[];
}
