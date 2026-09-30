import type { FunctionComponent } from 'react';
import { Card } from '@naovixen/blocks';
import { Heading, HeadingSize, Link, Text } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { PostDetails } from '../post-details/PostDetails.component';
import type { IPostCardProps } from './interfaces/IPostCardProps';

/** The title's link stretches over the whole card, so anywhere on it opens the post. */
export const PostCard: FunctionComponent<IPostCardProps> = ({
    post,
    href,
    headingLevel,
    linkComponent = Link,
    className,
    ...cardProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <Card {...cardProps} className={joinClassNames('nv-post-card', className)}>
            <Heading level={headingLevel} size={HeadingSize.H4}>
                <LinkComponent href={href} className="nv-post-card__link">
                    {post.title}
                </LinkComponent>
            </Heading>
            <Text className="nv-post-card__excerpt">{post.excerpt}</Text>
            <PostDetails post={post} className="nv-post-card__details" />
        </Card>
    );
};
