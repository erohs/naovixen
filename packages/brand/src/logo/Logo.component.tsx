import type { FunctionComponent } from 'react';
import { Link } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import { Wordmark } from '../wordmark/Wordmark.component';
import type { ILogoProps } from './interfaces/ILogoProps';

/** The wordmark as a link home. Its name is the visible "naovixen", so voice control finds it. */
export const Logo: FunctionComponent<ILogoProps> = ({
    href = '/',
    linkComponent = Link,
    className,
    ...anchorProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <LinkComponent
            {...anchorProps}
            href={href}
            className={joinClassNames('nx-logo', className)}
        >
            <Wordmark />
            <span className="nx-logo__cursor" aria-hidden="true" />
        </LinkComponent>
    );
};
