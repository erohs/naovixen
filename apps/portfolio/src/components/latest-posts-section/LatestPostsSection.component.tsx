import type { FunctionComponent } from 'react';
import { arrowRightIcon } from '@naovixen/components';

import { placeholderBlogIntro } from '../../constants/PlaceholderBlogIntro.const';
import { HomeSection } from '../home-section/HomeSection.component';
import { PostCardList } from '../post-card-list/PostCardList.component';
import { RouterLinkIcon } from '../router-link-icon/RouterLinkIcon.component';
import type { ILatestPostsSectionProps } from './interfaces/ILatestPostsSectionProps';

export const LatestPostsSection: FunctionComponent<ILatestPostsSectionProps> = ({ posts }) => (
    <HomeSection
        heading="From the blog"
        headingId="blog-title"
        intro={placeholderBlogIntro}
        action={
            <RouterLinkIcon to="/blog" icon={arrowRightIcon}>
                All posts
            </RouterLinkIcon>
        }
    >
        <PostCardList posts={posts} headingLevel={3} />
    </HomeSection>
);
