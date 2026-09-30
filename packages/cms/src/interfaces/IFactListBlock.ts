import type { IFact } from './IFact';

/** Renders as FactList. */
export interface IFactListBlock {
    readonly _type: 'factList';
    readonly _key: string;
    readonly facts: readonly IFact[];
}
