import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

export const Blockquote: FunctionComponent<ComponentPropsWithRef<'blockquote'>> = ({
    className,
    ...blockquoteProps
}) => <blockquote {...blockquoteProps} className={joinClassNames('nx-blockquote', className)} />;
