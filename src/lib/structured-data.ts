import { site } from "../site";
import { isoDate } from "./format-date";

export type StructuredData = Record<string, unknown>;

const absolute = (path: string): string => new URL(path, site.origin).href;

export const personData = (): StructuredData => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    url: site.origin,
    sameAs: site.profiles.map((profile) => profile.url),
});

export const websiteData = (): StructuredData => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.origin,
    inLanguage: site.locale,
});

export const blogPostingData = (post: {
    path: string;
    title: string;
    excerpt: string;
    published: Date;
    topics: string[];
}): StructuredData => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate(post.published),
    url: absolute(post.path),
    inLanguage: site.locale,
    keywords: post.topics,
    author: { "@type": "Person", name: site.name, url: site.origin },
});

/** Mirrors the visible breadcrumb: each step, then the current page. */
export const breadcrumbData = (steps: { label: string; href: string }[]): StructuredData => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: steps.map((step, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: step.label,
        item: absolute(step.href),
    })),
});

/** JSON for a script element: "<" is escaped so no value can close the element early. */
export const serialise = (data: StructuredData | StructuredData[]): string =>
    JSON.stringify(data).replaceAll("<", "\\u003c");
