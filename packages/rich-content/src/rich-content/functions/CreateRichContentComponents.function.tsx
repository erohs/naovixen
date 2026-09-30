import type { ComponentType } from 'react';
import type { PortableTextComponents, PortableTextMarkComponentProps } from '@portabletext/react';
import { Code } from '@naovixen/components';
import type { LinkProps } from '@naovixen/components';

import { richContentBlocks } from '../constants/RichContentBlocks.const';
import { richContentTypes } from '../constants/RichContentTypes.const';
import type { ILinkMarkValue } from '../interfaces/ILinkMarkValue';
import { selectLinkComponent } from './SelectLinkComponent.function';

/**
 * Lists and the strong and em marks keep the library's plain HTML. Unknown types render
 * nothing and unknown marks keep their text, rather than writing warnings into the page.
 */
export function createRichContentComponents(
    pageLinkComponent: ComponentType<LinkProps>,
): PortableTextComponents {
    return {
        block: richContentBlocks,
        types: richContentTypes,
        marks: {
            code: ({ children }) => <Code>{children}</Code>,
            link: ({ value, children }: PortableTextMarkComponentProps<ILinkMarkValue>) => {
                if (!value) {
                    return children;
                }
                const LinkComponent = selectLinkComponent(value.href, pageLinkComponent);

                return <LinkComponent href={value.href}>{children}</LinkComponent>;
            },
        },
        unknownType: () => null,
        unknownMark: ({ children }) => children,
    };
}
