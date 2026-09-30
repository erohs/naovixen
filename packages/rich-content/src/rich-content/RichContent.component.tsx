import type { FunctionComponent } from 'react';
import { PortableText } from '@portabletext/react';
import { joinClassNames } from '@naovixen/utilities';

import { richContentComponents } from './constants/RichContentComponents.const';
import type { IRichContentProps } from './interfaces/IRichContentProps';

/** A body from the CMS, rendered as plain HTML with no client script. */
export const RichContent: FunctionComponent<IRichContentProps> = ({
    body,
    className,
    ...divProps
}) => (
    <div {...divProps} className={joinClassNames('nv-rich-content', className)}>
        <PortableText value={body} components={richContentComponents} />
    </div>
);
