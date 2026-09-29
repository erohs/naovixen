import type { FunctionComponent } from 'react';
import { Grid } from '@naovixen/layout';

import { PostCard } from '../post-card/PostCard.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import type { IPostCardListProps } from './interfaces/IPostCardListProps';

export const PostCardList: FunctionComponent<IPostCardListProps> = ({ posts, headingLevel }) => (
    <Grid as="ul" className="nx-post-card-list">
        {posts.map((post) => (
            <li key={post.slug}>
                <PostCard
                    post={post}
                    href={`/blog/${post.slug}`}
                    headingLevel={headingLevel}
                    linkComponent={RoutedLink}
                />
            </li>
        ))}
    </Grid>
);
