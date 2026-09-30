import type { IFeedChannel } from '@naovixen/seo';

import { blogDescription } from './BlogDescription.const';
import { site } from './Site.const';

export const blogFeedChannel: IFeedChannel = {
    title: `${site.name}'s blog`,
    description: blogDescription,
    path: '/blog',
    feedPath: '/blog/feed.xml',
};
