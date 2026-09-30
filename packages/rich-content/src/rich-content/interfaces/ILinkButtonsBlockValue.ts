import type { TypedObject } from '@portabletext/types';

import type { ILinkButtonValue } from './ILinkButtonValue';

export interface ILinkButtonsBlockValue extends TypedObject {
    readonly _type: 'linkButtons';
    readonly links: readonly ILinkButtonValue[];
}
