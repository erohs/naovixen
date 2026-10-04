export interface IProfile {
    label: string;
    detail: string;
    url: string;
    icon: "linkedin" | "github" | "bluesky";
}

export interface INavigationItem {
    label: string;
    href: string;
}

/**
 * Facts about Naomi shown across the site. Only what she has cleared for publishing: an email
 * address and a CV are left out until she supplies them, and every place that uses one hides
 * itself while it is missing.
 */
export const site = {
    name: "Naomi Shore",
    givenName: "Naomi",
    familyName: "Shore",
    jobTitle: "Software Engineer",
    origin: "https://naovixen.com",
    locale: "en-GB",
    email: undefined as string | undefined,
    cvPath: undefined as string | undefined,
    profiles: [
        {
            label: "LinkedIn",
            detail: "linkedin.com/in/naomi-shore",
            url: "https://www.linkedin.com/in/naomi-shore",
            icon: "linkedin",
        },
    ] satisfies IProfile[] as IProfile[],
    navigation: [
        { label: "Home", href: "/" },
        { label: "Work", href: "/work/" },
        { label: "About", href: "/about/" },
        { label: "Blog", href: "/blog/" },
        { label: "Contact", href: "/contact/" },
    ] satisfies INavigationItem[] as INavigationItem[],
};
