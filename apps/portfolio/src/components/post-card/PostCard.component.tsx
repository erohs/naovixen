import type { FunctionComponent } from 'react';
import { Card } from '@naovixen/blocks';
import { Heading, HeadingSize, Link, Text } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { PostCardDetails } from '../post-card-details/PostCardDetails.component';
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
        <Card {...cardProps} className={joinClassNames('nx-post-card', className)}>
            <Heading level={headingLevel} size={HeadingSize.H4}>
                <LinkComponent href={href} className="nx-post-card__link">
                    {post.title}
                </LinkComponent>
            </Heading>
            <Text className="nx-post-card__excerpt">{post.excerpt}</Text>
            <PostCardDetails post={post} />
        </Card>
    );
};
