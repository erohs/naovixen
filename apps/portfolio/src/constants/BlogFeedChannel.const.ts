import type { IFeedChannel } from "@naovixen/seo";
import { translate } from "../translate/Translate.const";
import { site } from "./Site.const";

export const blogFeedChannel: IFeedChannel = {
    title: translate("site.feedTitle", { name: site.name }),
    description: translate("blog.description"),
    path: "/blog",
    feedPath: "/blog/feed.xml",
};
