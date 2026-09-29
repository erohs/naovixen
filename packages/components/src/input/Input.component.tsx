import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

/** Label it with FormField, or with a Label whose htmlFor matches its id. */
export const Input: FunctionComponent<ComponentPropsWithRef<'input'>> = ({
    className,
    ...inputProps
}) => <input {...inputProps} className={joinClassNames('nx-input', className)} />;
