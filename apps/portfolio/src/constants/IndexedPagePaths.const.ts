import { navigationItems } from './NavigationItems.const';
import { privacyLink } from './PrivacyLink.const';

/** The pages that are not generated from content. The design system page is never listed. */
export const indexedPagePaths: readonly string[] = [
    ...navigationItems.map((item) => item.path),
    privacyLink.path,
];
