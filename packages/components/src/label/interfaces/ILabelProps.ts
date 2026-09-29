import type { ComponentPropsWithRef } from 'react';

export interface ILabelProps extends ComponentPropsWithRef<'label'> {
    /** The id of the control it names. Required, so a label is never left unattached. */
    readonly htmlFor: string;
}
