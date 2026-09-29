import type { FunctionComponent } from 'react';
import type { LinkProps } from '@naovixen/components';

import { exactActiveOptions } from '../../constants/ExactActiveOptions.const';
import { noActiveProps } from '../../constants/NoActiveProps.const';
import { RouterLink } from '../router-link/RouterLink.component';

/**
 * Takes `href` like any other link, so the shared packages can render router links without
 * knowing the router. For paths on this site only.
 *
 * Matching exactly leaves a section link on a page beneath it to the caller, such as
 * NavigationList.
 *
 * `target` is passed only when set: the router's own `target` does not accept `undefined`.
 */
export const RoutedLink: FunctionComponent<LinkProps> = ({ href = '/', target, ...linkProps }) => (
    <RouterLink
        {...linkProps}
        {...(target === undefined ? {} : { target })}
        to={href}
        activeOptions={exactActiveOptions}
        activeProps={noActiveProps}
    />
);
