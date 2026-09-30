import type { FunctionComponent } from 'react';
import {
    arrowLeftIcon,
    arrowRightIcon,
    Breadcrumb,
    HandDrawnRule,
    Heading,
    HeadingSize,
    IconPosition,
    Text,
    TextVariant,
} from '@naovixen/components';
import { RichContent } from '@naovixen/rich-content';
import type { IBlogPostSummary } from '@naovixen/cms';

import { Page } from '../../components/page/Page.component';
import { PostDetails } from '../../components/post-details/PostDetails.component';
import { RoutedLink } from '../../components/routed-link/RoutedLink.component';
import { RouterLinkIcon } from '../../components/router-link-icon/RouterLinkIcon.component';
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

/** The oldest post has no next read, so it links back to the list alone. */
const MorePosts: FunctionComponent<Pick<IBlogPostPageData, 'olderPost'>> = ({ olderPost }) => (
    <nav aria-label="More posts" className="nv-blog-post-page__more">
        <RouterLinkIcon to="/blog" icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
            All posts
        </RouterLinkIcon>
        {olderPost && (
            <RouterLinkIcon
                to="/blog/$slug"
                params={{ slug: olderPost.slug }}
                icon={arrowRightIcon}
                className="nv-blog-post-page__next"
            >
                Next: {olderPost.title}
            </RouterLinkIcon>
        )}
    </nav>
);

export const BlogPostPage: FunctionComponent<IBlogPostPageData> = ({ post, olderPost }) => (
    <Page>
        <article aria-labelledby="post-title">
            <Breadcrumb
                trail={blogBreadcrumbTrail}
                currentLabel={post.title}
                linkComponent={RoutedLink}
            />
            <div className="nv-blog-post-page__body">
                <PostHeader post={post} />
                <RichContent body={post.body} linkComponent={RoutedLink} />
                <HandDrawnRule className="nv-blog-post-page__rule" />
                <MorePosts olderPost={olderPost} />
            </div>
        </article>
    </Page>
);
