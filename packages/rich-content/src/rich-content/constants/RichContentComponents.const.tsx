import type { PortableTextComponents, PortableTextMarkComponentProps } from '@portabletext/react';
import { Code, Link } from '@naovixen/components';

import type { ILinkMarkValue } from '../interfaces/ILinkMarkValue';
import { richContentBlocks } from './RichContentBlocks.const';
import { richContentTypes } from './RichContentTypes.const';

/**
 * Lists and the strong and em marks keep the library's plain HTML. Unknown types render
 * nothing and unknown marks keep their text, rather than writing warnings into the page.
 */
export const richContentComponents: PortableTextComponents = {
    block: richContentBlocks,
    types: richContentTypes,
    marks: {
        code: ({ children }) => <Code>{children}</Code>,
        link: ({ value, children }: PortableTextMarkComponentProps<ILinkMarkValue>) =>
            value ? <Link href={value.href}>{children}</Link> : children,
    },
    unknownType: () => null,
    unknownMark: ({ children }) => children,
};
