import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

export const Tag: FunctionComponent<ComponentPropsWithRef<'span'>> = ({
    className,
    ...spanProps
}) => <span {...spanProps} className={joinClassNames('nx-tag', className)} />;
