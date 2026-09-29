import type { IButtonAppearanceProps } from '../../interfaces/IButtonAppearanceProps';

export interface IButtonProps extends IButtonAppearanceProps {
  readonly type?: 'button' | 'submit';
  readonly onPress?: () => void;
}
