import type { PortableTextBlockComponent } from '@portabletext/react';
import { SpeechBubble } from '@naovixen/blocks';
import { Heading, HeadingSize, Text } from '@naovixen/components';

/**
 * Text block styles. Headings in a post sit a size down from the page's own, and a quote is
 * said aloud in a speech bubble. Anything else, such as h4, keeps the library's plain element.
 */
export const richContentBlocks: Readonly<Record<string, PortableTextBlockComponent>> = {
    normal: ({ children }) => <Text>{children}</Text>,
    h2: ({ children }) => (
        <Heading level={2} size={HeadingSize.H3}>
            {children}
        </Heading>
    ),
    h3: ({ children }) => (
        <Heading level={3} size={HeadingSize.H4}>
            {children}
        </Heading>
    ),
    blockquote: ({ children }) => (
        <blockquote className="nv-rich-content__quote">
            <SpeechBubble>{children}</SpeechBubble>
        </blockquote>
    ),
};
