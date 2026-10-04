import type { ILink } from "@naovixen/components";
import { placeholderEmailAddress } from "../../../features/site/constants/PlaceholderEmailAddress.const";
import { translate } from "../../../translate/Translate.const";

/** Placeholder: only LinkedIn is confirmed. The GitHub and Bluesky handles are the prototype's. */
export const placeholderSocialLinks: readonly ILink[] = [
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/naomi-shore" },
    { label: "Bluesky", href: "https://bsky.app/profile/username.bsky.social" },
    { label: translate("footer.email"), href: `mailto:${placeholderEmailAddress}` },
];
