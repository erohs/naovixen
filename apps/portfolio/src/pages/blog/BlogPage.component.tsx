import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { Heading, Text } from '@naovixen/components';

import { Page } from '../../components/page/Page.component';
import { PostCardList } from '../../components/post-card-list/PostCardList.component';
import { RoutedLink } from '../../components/routed-link/RoutedLink.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderBlogIntro } from '../../constants/PlaceholderBlogIntro.const';
import type { IBlogPageProps } from './interfaces/IBlogPageProps';

export const BlogPage: FunctionComponent<IBlogPageProps> = ({ posts }) => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="Blog" linkComponent={RoutedLink} />
        <header className="nx-blog-page__header">
            <Heading level={1}>Blog</Heading>
            <Text className="nx-blog-page__intro">{placeholderBlogIntro}</Text>
        </header>
        {posts.length === 0 ? (
            <Text>There are no posts yet.</Text>
        ) : (
            <PostCardList posts={posts} headingLevel={2} />
        )}
    </Page>
);
