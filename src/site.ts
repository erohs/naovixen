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
 * Facts about Naomi shown across the site. LinkedIn is the only confirmed profile. Every value
 * marked "Placeholder" is the prototype's and must be replaced or removed before launch.
 */
export const site = {
    name: "Naomi Shore",
    givenName: "Naomi",
    familyName: "Shore",
    jobTitle: "Software Engineer",
    origin: "https://naovixen.com",
    locale: "en-GB",
    /** Placeholder: not a confirmed address. */
    email: "hello@naovixen.dev" as string | undefined,
    /** No public CV exists yet, so every download link stays hidden until this is set. */
    cvPath: undefined as string | undefined,
    profiles: [
        {
            label: "LinkedIn",
            detail: "linkedin.com/in/naomi-shore",
            url: "https://www.linkedin.com/in/naomi-shore",
            icon: "linkedin",
        },
        /** Placeholder: the prototype's handle. */
        {
            label: "GitHub",
            detail: "github.com/username",
            url: "https://github.com/username",
            icon: "github",
        },
        /** Placeholder: the prototype's handle. */
        {
            label: "Bluesky",
            detail: "@username.bsky.social",
            url: "https://bsky.app/profile/username.bsky.social",
            icon: "bluesky",
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
