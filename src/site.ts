interface IProfile {
    label: string;
    detail: string;
    url: string;
    icon: "linkedin" | "github" | "bluesky";
}

export interface INavigationItem {
    label: string;
    href: string;
}

export interface ITestimonial {
    quote: string;
    name: string;
    role: string;
}

/** Facts about Naomi shown across the site. Anything left undefined hides whatever shows it. */
export const site = {
    name: "Naomi Shore",
    givenName: "Naomi",
    familyName: "Shore",
    jobTitle: "Software Engineer",
    origin: "https://www.naovixen.com",
    locale: "en-GB",
    /** Forwarded by Cloudflare Email Routing, so no personal address is published. */
    email: "hello@naovixen.com" as string | undefined,
    /** A copy without contact details beyond the name. */
    cvPath: "/naomi-shore-cv.pdf" as string | undefined,
    testimonial: undefined as ITestimonial | undefined,
    profiles: [
        {
            label: "LinkedIn",
            detail: "linkedin.com/in/naomi-shore",
            url: "https://www.linkedin.com/in/naomi-shore",
            icon: "linkedin",
        },
        {
            label: "GitHub",
            detail: "github.com/erohs",
            url: "https://github.com/erohs",
            icon: "github",
        },
        {
            label: "Bluesky",
            detail: "@naovixen.com",
            url: "https://bsky.app/profile/naovixen.com",
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
