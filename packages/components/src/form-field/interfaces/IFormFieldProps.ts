import type { ReactNode } from 'react';

import type { IFormFieldControlProps } from './IFormFieldControlProps';

export interface IFormFieldProps {
    readonly label: ReactNode;
    readonly hint?: ReactNode;
    /** Shown under the control and read out with it. The control is marked invalid meanwhile. */
    readonly error?: ReactNode;
    readonly className?: string | undefined;
    readonly children: (controlProps: IFormFieldControlProps) => ReactNode;
}
