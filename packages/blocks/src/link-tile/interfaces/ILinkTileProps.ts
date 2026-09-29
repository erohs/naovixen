import type { IAnchorProps } from '../../anchor/interfaces/IAnchorProps';
import type { IconName } from '../../enums/IconName';

export interface ILinkTileProps extends Pick<IAnchorProps, 'href' | 'destination'> {
  readonly label: string;
  /** A second line under the label, such as a handle or an address. */
  readonly detail: string;
  /** Shown in a disc before the label. */
  readonly icon: IconName;
}
