import type { PortableTextBlockComponent } from '@portabletext/react';
import { Blockquote, Heading, Text } from '@naovixen/components';

/** Text block styles. Anything else, such as h4, keeps the library's plain element. */
export const blogContentBlocks: Readonly<Record<string, PortableTextBlockComponent>> = {
    normal: ({ children }) => <Text>{children}</Text>,
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
};
