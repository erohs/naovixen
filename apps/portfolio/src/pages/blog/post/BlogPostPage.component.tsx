import type { FunctionComponent } from "react";
import { Breadcrumb } from "@naovixen/components";
import { RichContent } from "@naovixen/rich-content";
import { MoreNavigation } from "../../../components/more-navigation/MoreNavigation.component";
import { translate } from "../../../translate/Translate.const";
import type { IBlogPostPageData } from "./interfaces/IBlogPostPageData";
import { blogBreadcrumbTrail } from "./constants/BlogBreadcrumbTrail.const";
import { PostHeader } from "./sections/post-header/PostHeader.component";
import { RelatedPosts } from "./sections/related-posts/RelatedPosts.component";

export const BlogPostPage: FunctionComponent<IBlogPostPageData> = ({ post, newerPost, olderPost, relatedPosts }) => (
    <article aria-labelledby="post-title" className="nv-page">
        <Breadcrumb trail={blogBreadcrumbTrail} currentLabel={post.title} />
        <div className="nv-blog-post-page__body">
            <PostHeader post={post} />
            <RichContent body={post.body} />
            {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
            <MoreNavigation
                label={translate("post.morePosts")}
                backLink={{ label: translate("post.allPosts"), href: "/blog" }}
                previousLink={newerPost && { label: newerPost.title, href: `/blog/${newerPost.slug}` }}
                nextLink={olderPost && { label: olderPost.title, href: `/blog/${olderPost.slug}` }}
                className="nv-blog-post-page__more"
            />
        </div>
    </article>
);
