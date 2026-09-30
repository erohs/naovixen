import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

export const VisuallyHidden: FunctionComponent<ComponentPropsWithRef<'span'>> = ({
    className,
    ...spanProps
}) => <span {...spanProps} className={joinClassNames('nv-visually-hidden', className)} />;
