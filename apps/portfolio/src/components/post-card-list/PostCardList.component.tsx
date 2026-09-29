import type { FunctionComponent } from 'react';
import { CardTilt } from '@naovixen/blocks';
import { Grid } from '@naovixen/layout';

import { PostCard } from '../post-card/PostCard.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';
import type { IPostCardListProps } from './interfaces/IPostCardListProps';

/** Cards alternate their tilt, so a row of them looks hand-placed. */
export const PostCardList: FunctionComponent<IPostCardListProps> = ({ posts, headingLevel }) => (
    <Grid as="ul" className="nx-post-card-list">
        {posts.map((post, index) => (
            <li key={post.slug}>
                <PostCard
                    post={post}
                    href={`/blog/${post.slug}`}
                    headingLevel={headingLevel}
                    linkComponent={RoutedLink}
                    tilt={index % 2 === 0 ? CardTilt.Left : CardTilt.Right}
                />
            </li>
        ))}
    </Grid>
);
