import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { Button } from '../button/Button.component';
import { ignorePress } from './functions/IgnorePress.function';
import type { IBusyButtonProps } from './interfaces/IBusyButtonProps';

/**
 * aria-disabled rather than disabled, so focus stays on the button while the work runs.
 * Screen readers do not announce aria-busy: say what is happening in a live region.
 */
export const BusyButton: FunctionComponent<IBusyButtonProps> = ({
    isBusy,
    onClick,
    className,
    ...buttonProps
}) => (
    <Button
        {...buttonProps}
        className={joinClassNames('nx-busy-button', className)}
        aria-busy={isBusy}
        aria-disabled={isBusy}
        onClick={isBusy ? ignorePress : onClick}
    />
);
