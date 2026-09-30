import type { FunctionComponent } from 'react';
import {
    Breadcrumb,
    HandDrawnRule,
    Heading,
    HeadingSize,
    Text,
    TextVariant,
} from '@naovixen/components';
import { RichContent } from '@naovixen/rich-content';
import type { IBlogPostSummary } from '@naovixen/cms';

import { MoreNavigation } from '../../components/more-navigation/MoreNavigation.component';
import { Page } from '../../components/page/Page.component';
import { PostDetails } from '../../components/post-details/PostDetails.component';
import type { IBlogPostPageData } from '../../interfaces/IBlogPostPageData';
import { blogBreadcrumbTrail } from './constants/BlogBreadcrumbTrail.const';

const PostHeader: FunctionComponent<{ readonly post: IBlogPostSummary }> = ({ post }) => (
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

export const BlogPostPage: FunctionComponent<IBlogPostPageData> = ({ post, olderPost }) => (
    <Page>
        <article aria-labelledby="post-title">
            <Breadcrumb trail={blogBreadcrumbTrail} currentLabel={post.title} />
            <div className="nv-blog-post-page__body">
                <PostHeader post={post} />
                <RichContent body={post.body} />
                <HandDrawnRule className="nv-blog-post-page__rule" />
                <MoreNavigation
                    label="More posts"
                    backLink={{ label: 'All posts', href: '/blog' }}
                    nextLink={
                        olderPost && { label: olderPost.title, href: `/blog/${olderPost.slug}` }
                    }
                />
            </div>
        </article>
    </Page>
);
