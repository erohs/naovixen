import type { IFact } from '@naovixen/components';
import type { TypedObject } from '@portabletext/types';

export interface IFactListBlockValue extends TypedObject {
    readonly _type: 'factList';
    readonly facts: readonly IFact[];
}
