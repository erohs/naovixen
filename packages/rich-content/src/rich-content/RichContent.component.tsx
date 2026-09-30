import { useMemo } from 'react';
import type { FunctionComponent } from 'react';
import { PortableText } from '@portabletext/react';
import { joinClassNames } from '@naovixen/utilities';

import { richContentComponents } from './constants/RichContentComponents.const';
import { numberSectionHeadings } from './functions/NumberSectionHeadings.function';
import type { IRichContentProps } from './interfaces/IRichContentProps';

/** A body in Portable Text, rendered as plain HTML with no client script. */
export const RichContent: FunctionComponent<IRichContentProps> = ({
    body,
    className,
    ...divProps
}) => {
    const numberedBody = useMemo(() => numberSectionHeadings(body), [body]);

    return (
        <div {...divProps} className={joinClassNames('nv-rich-content', className)}>
            <PortableText value={numberedBody} components={richContentComponents} />
        </div>
    );
};
