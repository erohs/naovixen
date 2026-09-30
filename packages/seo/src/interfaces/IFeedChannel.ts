export interface IFeedChannel {
    readonly title: string;
    readonly description: string;
    /** The page the feed mirrors, such as `/blog`. */
    readonly path: string;
    /** Where the feed itself is served, such as `/blog/feed.xml`. */
    readonly feedPath: string;
}
