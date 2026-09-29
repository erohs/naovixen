import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

/** Label it with FormField, or with a Label whose htmlFor matches its id. */
export const TextArea: FunctionComponent<ComponentPropsWithRef<'textarea'>> = ({
    className,
    ...textAreaProps
}) => <textarea {...textAreaProps} className={joinClassNames('nx-input', className)} />;
