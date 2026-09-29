import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import type { ILabelProps } from './interfaces/ILabelProps';

export const Label: FunctionComponent<ILabelProps> = ({
    htmlFor,
    className,
    children,
    ...labelProps
}) => (
    <label {...labelProps} htmlFor={htmlFor} className={joinClassNames('nx-label', className)}>
        {children}
    </label>
);
