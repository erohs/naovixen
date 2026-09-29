import type { FunctionComponent } from 'react';

import { Anchor } from '../anchor/Anchor.component';
import { ButtonContent } from '../button-content/ButtonContent.component';
import { ButtonVariant } from '../enums/ButtonVariant';
import { buildButtonClassName } from '../functions/BuildButtonClassName.function';
import type { IButtonLinkProps } from './interfaces/IButtonLinkProps';

/** Looks like a button, but navigates, so it is a link. */
export const ButtonLink: FunctionComponent<IButtonLinkProps> = ({
  variant = ButtonVariant.Secondary,
  href,
  destination,
  ...contentProps
}) => (
  <Anchor href={href} destination={destination} className={buildButtonClassName(variant)}>
    <ButtonContent {...contentProps} />
  </Anchor>
);
