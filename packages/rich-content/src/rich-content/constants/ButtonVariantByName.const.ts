import { ButtonVariant } from '@naovixen/components';
import type { ILinkButton } from '@naovixen/cms';

/** The Studio stores the variant as a string; the component takes the enum. */
export const buttonVariantByName: Readonly<Record<ILinkButton['variant'], ButtonVariant>> = {
    primary: ButtonVariant.Primary,
    secondary: ButtonVariant.Secondary,
};
