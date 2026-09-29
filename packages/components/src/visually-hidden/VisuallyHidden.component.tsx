import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

export const VisuallyHidden: FunctionComponent<ComponentPropsWithRef<'span'>> = ({
    className,
    ...spanProps
}) => <span {...spanProps} className={joinClassNames('nx-visually-hidden', className)} />;
