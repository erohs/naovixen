import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { Text } from '@naovixen/components';
import { Space, Stack } from '@naovixen/layout';

import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderBlogIntro } from '../../constants/PlaceholderBlogIntro.const';
import { Page } from '../page/Page.component';
import { PageHeader } from '../page-header/PageHeader.component';
import { PostCardList } from '../post-card-list/PostCardList.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import type { IBlogPageProps } from './interfaces/IBlogPageProps';

export const BlogPage: FunctionComponent<IBlogPageProps> = ({ posts }) => (
    <Page>
        <Stack gap={Space.BetweenGroups}>
            <Breadcrumb
                trail={homeBreadcrumbTrail}
                currentLabel="Blog"
                linkComponent={RoutedLink}
            />
            <PageHeader heading="Blog" intro={placeholderBlogIntro} />
            {posts.length === 0 ? (
                <Text>There are no posts yet.</Text>
            ) : (
                <PostCardList posts={posts} headingLevel={2} />
            )}
        </Stack>
    </Page>
);
