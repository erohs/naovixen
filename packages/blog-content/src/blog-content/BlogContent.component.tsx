import { useMemo } from 'react';
import type { FunctionComponent } from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { createBlogContentComponents } from './functions/CreateBlogContentComponents.function';
import type { IBlogContentProps } from './interfaces/IBlogContentProps';

/** A post body in Portable Text, rendered as plain HTML with no client script. */
export const BlogContent: FunctionComponent<IBlogContentProps> = ({
    body,
    linkComponent = Link,
    className,
    ...divProps
}) => {
    const components = useMemo(() => createBlogContentComponents(linkComponent), [linkComponent]);

    return (
        <div {...divProps} className={joinClassNames('nv-blog-content', className)}>
            <PortableText value={[...body]} components={components} />
        </div>
    );
};
