import { useId } from 'react';
import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { Label } from '../label/Label.component';
import { buildControlProps } from './functions/BuildControlProps.function';
import type { IFormFieldProps } from './interfaces/IFormFieldProps';

export const FormField: FunctionComponent<IFormFieldProps> = ({
    label,
    hint,
    error,
    className,
    children,
}) => {
    const id = useId();

    return (
        <div className={joinClassNames('nx-form-field', className)}>
            <Label htmlFor={id}>{label}</Label>
            {hint && (
                <p id={`${id}-hint`} className="nx-form-field__hint">
                    {hint}
                </p>
            )}
            {children(buildControlProps(id, Boolean(hint), Boolean(error)))}
            {error && (
                <p id={`${id}-error`} className="nx-form-field__error">
                    {error}
                </p>
            )}
        </div>
    );
};
