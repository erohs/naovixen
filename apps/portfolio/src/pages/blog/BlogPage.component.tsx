import type { FunctionComponent } from 'react';
import { Breadcrumb, CardGrid, Heading, Text } from '@naovixen/components';

import { Page } from '../../components/page/Page.component';
import { PostCard } from '../../components/post-card/PostCard.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderBlogIntro } from '../../constants/PlaceholderBlogIntro.const';
import type { IBlogPageProps } from './interfaces/IBlogPageProps';

export const BlogPage: FunctionComponent<IBlogPageProps> = ({ posts }) => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="Blog" />
        <header className="nv-blog-page__header">
            <Heading level={1}>Blog</Heading>
            <Text className="nv-blog-page__intro">{placeholderBlogIntro}</Text>
        </header>
        {posts.length === 0 ? (
            <Text>There are no posts yet.</Text>
        ) : (
            <CardGrid>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <PostCard post={post} headingLevel={2} />
                    </li>
                ))}
            </CardGrid>
        )}
    </Page>
);
