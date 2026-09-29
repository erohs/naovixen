import type { IconName } from '../../enums/IconName';
import type { IAnchorProps } from '../../anchor/interfaces/IAnchorProps';

export interface ILinkProps extends Omit<IAnchorProps, 'className'> {
  readonly leadingIcon?: IconName;
  readonly trailingIcon?: IconName;
}
