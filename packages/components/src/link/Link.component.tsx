import type { FunctionComponent } from 'react';

import { Anchor } from '../anchor/Anchor.component';
import { Icon } from '../icon/Icon.component';
import type { ILinkProps } from './interfaces/ILinkProps';

export const Link: FunctionComponent<ILinkProps> = ({
  leadingIcon,
  trailingIcon,
  children,
  ...anchorProps
}) => (
  <Anchor className="nx-link" {...anchorProps}>
    {leadingIcon && <Icon name={leadingIcon} />}
    <span className="nx-link__label">{children}</span>
    {trailingIcon && <Icon name={trailingIcon} />}
  </Anchor>
);
