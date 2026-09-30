import type { IFeedChannel } from '../interfaces/IFeedChannel';
import type { IPublishedPost } from '../interfaces/IPublishedPost';
import type { ISite } from '../interfaces/ISite';
import { escapeXml } from './EscapeXml.function';
import { resolveAbsoluteUrl } from './ResolveAbsoluteUrl.function';

function renderElement(name: string, value: string): string {
    return `<${name}>${escapeXml(value)}</${name}>`;
}

function renderItem(post: IPublishedPost, site: ISite): string {
    const url = resolveAbsoluteUrl(site.origin, `/blog/${post.slug}`);

    return [
        '    <item>',
        renderElement('title', post.title),
        renderElement('link', url),
        `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
        renderElement('pubDate', new Date(post.publishedAt).toUTCString()),
        renderElement('description', post.excerpt),
        ...post.tags.map((tag) => renderElement('category', tag)),
        '</item>',
    ].join('');
}

/** An RSS 2.0 feed of the given posts, newest first as given. */
export function buildRssFeedXml(
    posts: readonly IPublishedPost[],
    channel: IFeedChannel,
    site: ISite,
): string {
    const feedUrl = resolveAbsoluteUrl(site.origin, channel.feedPath);

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        '  <channel>',
        `    ${renderElement('title', channel.title)}`,
        `    ${renderElement('link', resolveAbsoluteUrl(site.origin, channel.path))}`,
        `    ${renderElement('description', channel.description)}`,
        `    ${renderElement('language', site.locale)}`,
        `    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml"/>`,
        ...posts.map((post) => renderItem(post, site)),
        '  </channel>',
        '</rss>',
        '',
    ].join('\n');
}
