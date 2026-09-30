import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/** Buttons and button-like links in a row, wrapping onto more rows where they do not fit. */
export const ButtonGroup: FunctionComponent<ComponentPropsWithRef<'div'>> = ({
    className,
    ...divProps
}) => <div {...divProps} className={joinClassNames('nv-button-group', className)} />;
