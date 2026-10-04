import type { FunctionComponent } from "react";
import { Text } from "@naovixen/components";
import { PostCard } from "../../../../components/post-card/PostCard.component";
import { translate } from "../../../../translate/Translate.const";
import type { IPostListProps } from "./interfaces/IPostListProps";

export const PostList: FunctionComponent<IPostListProps> = ({ posts }) =>
    posts.length === 0 ? (
        <Text>{translate("blog.noResults")}</Text>
    ) : (
        <ul className="nv-blog-page__posts">
            {posts.map((post) => (
                <li key={post.slug}>
                    <PostCard post={post} headingLevel={2} />
                </li>
            ))}
        </ul>
    );
