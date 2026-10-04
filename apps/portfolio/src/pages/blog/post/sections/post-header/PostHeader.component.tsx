import type { FunctionComponent } from "react";
import { Heading, HeadingSize, Text, TextVariant } from "@naovixen/components";
import { PostDetails } from "../../../../../components/post-details/PostDetails.component";
import type { IPostHeaderProps } from "./interfaces/IPostHeaderProps";

export const PostHeader: FunctionComponent<IPostHeaderProps> = ({ post }) => (
    <header className="nv-blog-post-page__header">
        <Heading level={1} size={HeadingSize.Title} id="post-title">
            {post.title}
        </Heading>
        <Text variant={TextVariant.Lead} className="nv-blog-post-page__excerpt">
            {post.excerpt}
        </Text>
        <PostDetails post={post} className="nv-blog-post-page__details" />
    </header>
);
