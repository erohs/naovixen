import type { FunctionComponent } from "react";
import { Heading, HeadingSize } from "@naovixen/components";
import { PostCard } from "../../../../../components/post-card/PostCard.component";
import { translate } from "../../../../../translate/Translate.const";
import type { IRelatedPostsProps } from "./interfaces/IRelatedPostsProps";

export const RelatedPosts: FunctionComponent<IRelatedPostsProps> = ({ posts }) => (
    <section aria-labelledby="related-posts-title" className="nv-blog-post-page__related">
        <Heading level={2} size={HeadingSize.H3} id="related-posts-title">
            {translate("post.relatedPosts")}
        </Heading>
        <ul className="nv-blog-post-page__related-posts">
            {posts.map((post) => (
                <li key={post.slug}>
                    <PostCard post={post} headingLevel={3} />
                </li>
            ))}
        </ul>
    </section>
);
