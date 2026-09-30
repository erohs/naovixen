import type { ButtonVariant } from '@naovixen/components';

/** Sanity stores the variant as the enum's string value. */
export interface ILinkButtonValue {
    readonly _key: string;
    readonly label: string;
    readonly href: string;
    readonly variant: ButtonVariant;
}
