import type { FunctionComponent } from 'react';
import { Breadcrumb, HandDrawnRule } from '@naovixen/blocks';
import { BlogContent } from '@naovixen/portable-text';

import { blogBreadcrumbTrail } from '../../constants/BlogBreadcrumbTrail.const';
import type { IBlogPostPageData } from '../../interfaces/IBlogPostPageData';
import { BlogPostHeader } from '../blog-post-header/BlogPostHeader.component';
import { Page } from '../page/Page.component';
import { PostNavigation } from '../post-navigation/PostNavigation.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';

export const BlogPostPage: FunctionComponent<IBlogPostPageData> = ({ post, olderPost }) => (
    <Page>
        <article aria-labelledby="post-title" className="nx-blog-post-page">
            <Breadcrumb
                trail={blogBreadcrumbTrail}
                currentLabel={post.title}
                linkComponent={RoutedLink}
            />
            <div className="nx-blog-post-page__body">
                <BlogPostHeader post={post} headingId="post-title" />
                <BlogContent body={post.body} linkComponent={RoutedLink} />
                <HandDrawnRule className="nx-blog-post-page__rule" />
                <PostNavigation olderPost={olderPost} />
            </div>
        </article>
    </Page>
);
