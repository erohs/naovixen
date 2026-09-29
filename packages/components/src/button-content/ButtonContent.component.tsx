import type { FunctionComponent } from 'react';

import { Icon } from '../icon/Icon.component';
import type { IButtonAppearanceProps } from '../interfaces/IButtonAppearanceProps';

/** The label, meta and icon inside both Button and ButtonLink. */
export const ButtonContent: FunctionComponent<Omit<IButtonAppearanceProps, 'variant'>> = ({
  icon,
  meta,
  children,
}) => (
  <>
    {children}
    {meta && (
      <>
        {' '}
        <span className="nx-button__meta">{meta}</span>
      </>
    )}
    {icon && <Icon name={icon} />}
  </>
);
