import { useMemo } from 'react';
import type { FunctionComponent } from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import { createRichContentComponents } from './functions/CreateRichContentComponents.function';
import { numberSectionHeadings } from './functions/NumberSectionHeadings.function';
import type { IRichContentProps } from './interfaces/IRichContentProps';

/** A body in Portable Text, rendered as plain HTML with no client script. */
export const RichContent: FunctionComponent<IRichContentProps> = ({
    body,
    linkComponent = Link,
    className,
    ...divProps
}) => {
    const components = useMemo(() => createRichContentComponents(linkComponent), [linkComponent]);
    const numberedBody = useMemo(() => numberSectionHeadings(body), [body]);

    return (
        <div {...divProps} className={joinClassNames('nv-rich-content', className)}>
            <PortableText value={numberedBody} components={components} />
        </div>
    );
};
