import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

export const Tag: FunctionComponent<ComponentPropsWithRef<'span'>> = ({
    className,
    ...spanProps
}) => <span {...spanProps} className={joinClassNames('nv-tag', className)} />;
