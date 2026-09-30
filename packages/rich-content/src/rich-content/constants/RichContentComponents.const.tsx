import type { PortableTextComponents, PortableTextMarkComponentProps } from '@portabletext/react';
import { Code } from '@naovixen/components';

import { selectLinkComponent } from '../functions/SelectLinkComponent.function';
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
        link: ({ value, children }: PortableTextMarkComponentProps<ILinkMarkValue>) => {
            if (!value) {
                return children;
            }
            const LinkComponent = selectLinkComponent(value.href);

            return <LinkComponent href={value.href}>{children}</LinkComponent>;
        },
    },
    unknownType: () => null,
    unknownMark: ({ children }) => children,
};
