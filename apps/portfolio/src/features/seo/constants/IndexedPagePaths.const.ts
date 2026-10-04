import { navigationItems } from "../../site/constants/NavigationItems.const";
import { privacyLink } from "../../site/constants/PrivacyLink.const";

/** The pages that are not generated from content. The design system page is never listed. */
export const indexedPagePaths: readonly string[] = [...navigationItems.map((item) => item.href), privacyLink.href];
