import type { FunctionComponent } from "react";
import { Breadcrumb } from "@naovixen/components";
import { RichContent } from "@naovixen/rich-content";
import { MoreNavigation } from "../../../components/more-navigation/MoreNavigation.component";
import { translate } from "../../../translate/Translate.const";
import type { IBlogPostPageData } from "./interfaces/IBlogPostPageData";
import { blogBreadcrumbTrail } from "./constants/BlogBreadcrumbTrail.const";
import { PostHeader } from "./sections/post-header/PostHeader.component";

export const BlogPostPage: FunctionComponent<IBlogPostPageData> = ({ post, olderPost }) => (
    <article aria-labelledby="post-title" className="nv-page">
        <Breadcrumb trail={blogBreadcrumbTrail} currentLabel={post.title} />
        <div className="nv-blog-post-page__body">
            <PostHeader post={post} />
            <RichContent body={post.body} />
            <MoreNavigation
                label={translate("post.morePosts")}
                backLink={{ label: translate("post.allPosts"), href: "/blog" }}
                nextLink={olderPost && { label: olderPost.title, href: `/blog/${olderPost.slug}` }}
                className="nv-blog-post-page__more"
            />
        </div>
    </article>
);
