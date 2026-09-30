import type { LinkComponent } from '@tanstack/react-router';
import { createLink } from '@tanstack/react-router';
import { LinkButton } from '@naovixen/components';

import { exactActiveOptions } from '../../constants/ExactActiveOptions.const';
import { noActiveProps } from '../../constants/NoActiveProps.const';

const RouterLinkButtonBase = createLink(LinkButton);

/** A LinkButton that navigates on the client, with the router's typed `to`. */
export const RouterLinkButton: LinkComponent<typeof LinkButton> = (props) => (
    <RouterLinkButtonBase
        activeOptions={exactActiveOptions}
        activeProps={noActiveProps}
        {...props}
    />
);
