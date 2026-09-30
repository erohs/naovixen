import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/** The brackets are drawing, so only the name itself is read out. */
export const Wordmark: FunctionComponent<Omit<ComponentPropsWithRef<'span'>, 'children'>> = ({
    className,
    ...spanProps
}) => (
    <span {...spanProps} className={joinClassNames('nx-wordmark', className)}>
        <span className="nx-wordmark__bracket" aria-hidden="true">
            &lt;
        </span>
        <span>naovixen</span>
        <span className="nx-wordmark__bracket" aria-hidden="true">
            /&gt;
        </span>
    </span>
);
