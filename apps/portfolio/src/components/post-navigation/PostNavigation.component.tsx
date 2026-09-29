import type { FunctionComponent } from 'react';
import { arrowLeftIcon, arrowRightIcon, IconPosition } from '@naovixen/components';

import { RouterLinkIcon } from '../router-link-icon/RouterLinkIcon.component';
import type { IPostNavigationProps } from './interfaces/IPostNavigationProps';

export const PostNavigation: FunctionComponent<IPostNavigationProps> = ({ olderPost }) => (
    <nav aria-label="More posts" className="nx-post-navigation">
        <RouterLinkIcon to="/blog" icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
            All posts
        </RouterLinkIcon>
        {olderPost && (
            <RouterLinkIcon
                to="/blog/$slug"
                params={{ slug: olderPost.slug }}
                icon={arrowRightIcon}
                className="nx-post-navigation__next"
            >
                Next: {olderPost.title}
            </RouterLinkIcon>
        )}
    </nav>
);
