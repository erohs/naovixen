import type { FunctionComponent } from "react";
import type { AnchorProps } from "@naovixen/components";
import { exactActiveOptions } from "./constants/ExactActiveOptions.const";
import { noActiveProps } from "./constants/NoActiveProps.const";
import { RouterLink } from "./constants/RouterLink.const";

/**
 * The site's link to a page on it, navigating on the client. Handed to `LinkProvider` once,
 * so every `Link` in the shared components renders through it without knowing the router.
 *
 * Matching exactly leaves a section link on a page beneath it to the caller, such as
 * NavigationList.
 *
 * `target` is passed only when set: the router's own `target` does not accept `undefined`.
 */
export const RoutedLink: FunctionComponent<AnchorProps> = ({ href = "/", target, ...linkProps }) => (
    <RouterLink
        {...linkProps}
        {...(target === undefined ? {} : { target })}
        to={href}
        activeOptions={exactActiveOptions}
        activeProps={noActiveProps}
    />
);
