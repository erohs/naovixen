import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/**
 * The `< naovixen />` wordmark. The brackets are drawing, so only the name is read out. Inside
 * a link, a cursor blinks after it while the link is hovered or focused.
 */
export const Logo: FunctionComponent<Omit<ComponentPropsWithRef<'span'>, 'children'>> = ({
    className,
    ...spanProps
}) => (
    <span {...spanProps} className={joinClassNames('nx-logo', className)}>
        <span className="nx-logo__wordmark">
            <span className="nx-logo__bracket" aria-hidden="true">
                &lt;
            </span>
            <span>naovixen</span>
            <span className="nx-logo__bracket" aria-hidden="true">
                /&gt;
            </span>
        </span>
        <span className="nx-logo__cursor" aria-hidden="true" />
    </span>
);
