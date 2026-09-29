import type { FunctionComponent } from 'react';

import { ButtonContent } from '../button-content/ButtonContent.component';
import { ButtonVariant } from '../enums/ButtonVariant';
import { buildButtonClassName } from '../functions/BuildButtonClassName.function';
import type { IButtonProps } from './interfaces/IButtonProps';

export const Button: FunctionComponent<IButtonProps> = ({
  variant = ButtonVariant.Secondary,
  type = 'button',
  onPress,
  ...contentProps
}) => (
  <button type={type} className={buildButtonClassName(variant)} onClick={onPress}>
    <ButtonContent {...contentProps} />
  </button>
);
