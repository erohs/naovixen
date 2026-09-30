import type { LinkComponent } from '@tanstack/react-router';
import { createLink } from '@tanstack/react-router';
import { LinkIcon } from '@naovixen/components';

import { exactActiveOptions } from '../../constants/ExactActiveOptions.const';
import { noActiveProps } from '../../constants/NoActiveProps.const';

const RouterLinkIconBase = createLink(LinkIcon);

/** A LinkIcon that navigates on the client, with the router's typed `to`. */
export const RouterLinkIcon: LinkComponent<typeof LinkIcon> = (props) => (
    <RouterLinkIconBase activeOptions={exactActiveOptions} activeProps={noActiveProps} {...props} />
);
