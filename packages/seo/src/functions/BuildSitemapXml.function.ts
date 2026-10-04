import type { ISite } from "../interfaces/ISite";
import type { ISitemapEntry } from "../interfaces/ISitemapEntry";
import { escapeXml } from "./EscapeXml.function";
import { resolveAbsoluteUrl } from "./ResolveAbsoluteUrl.function";

const renderUrl = (entry: ISitemapEntry, site: ISite): string => {
    const location = `<loc>${escapeXml(resolveAbsoluteUrl(site.origin, entry.path))}</loc>`;
    const lastModified = entry.lastModified === undefined ? "" : `<lastmod>${escapeXml(entry.lastModified)}</lastmod>`;

    return `  <url>${location}${lastModified}</url>`;
};

/** A sitemaps.org XML sitemap. Leave out anything that should not be indexed. */
export const buildSitemapXml = (entries: readonly ISitemapEntry[], site: ISite): string =>
    [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entries.map((entry) => renderUrl(entry, site)),
        "</urlset>",
        "",
    ].join("\n");
