import type { IAnchorProps } from '../../anchor/interfaces/IAnchorProps';
import type { IButtonAppearanceProps } from '../../interfaces/IButtonAppearanceProps';

export interface IButtonLinkProps
  extends IButtonAppearanceProps, Pick<IAnchorProps, 'href' | 'destination'> {}
