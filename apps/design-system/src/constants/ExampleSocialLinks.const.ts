import type { ILink } from "@naovixen/components";
import { translate } from "../translate/Translate.const";

/** One of each kind: another site opens in a new tab, an email address does not. */
export const exampleSocialLinks: readonly ILink[] = [
    { label: translate("siteFrame.gitHub"), href: "https://github.com/example" },
    { label: translate("siteFrame.email"), href: "mailto:someone@example.com" },
];
