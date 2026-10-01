import type { FunctionComponent } from 'react';

import { Icon } from '../icon/Icon.component';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import type { IButtonIconProps } from './interfaces/IButtonIconProps';

/** `Button.Icon` and `LinkButton.Icon`: an icon beside the text, or with a `label` in its place. */
export const ButtonIcon: FunctionComponent<IButtonIconProps> = ({ label, ...iconProps }) => (
    <>
        <Icon {...iconProps} />
        {label !== undefined && (
            <VisuallyHidden className="nv-button__name">{label}</VisuallyHidden>
        )}
    </>
);
