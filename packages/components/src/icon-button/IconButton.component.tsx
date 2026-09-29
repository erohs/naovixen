import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { Button } from '../button/Button.component';
import { Icon } from '../icon/Icon.component';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import type { IIconButtonProps } from './interfaces/IIconButtonProps';

export const IconButton: FunctionComponent<IIconButtonProps> = ({
    icon,
    label,
    className,
    ...buttonProps
}) => (
    <Button {...buttonProps} className={joinClassNames('nx-icon-button', className)}>
        <Icon source={icon} />
        <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
);
