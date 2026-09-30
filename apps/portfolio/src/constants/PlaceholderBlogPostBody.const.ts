import type { BlogContentNode } from '@naovixen/blog-content';

import { createPlaceholderTextBlock as block } from '../functions/CreatePlaceholderTextBlock.function';

/** Placeholder from the prototype: every placeholder post shares this body. */
export const placeholderBlogPostBody: readonly BlogContentNode[] = [
    block(
        'intro',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    ),
    block(
        'context',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    ),
    block('basics-heading', 'Start with the basics', 'h2'),
    block(
        'basics',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.',
    ),
    {
        _type: 'callout',
        _key: 'tip',
        kind: 'tip!',
        title: 'Tab through the page before you ship',
        text: "If you can't see where you are at every step, neither can your users. Lorem ipsum dolor sit amet.",
    },
    block(
        'before-code',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
    ),
    {
        _type: 'code',
        _key: 'focus-css',
        filename: 'focus.css',
        language: 'CSS',
        code: ':focus-visible {\n    outline: 3px solid var(--focus);\n    outline-offset: 8px; /* clear the shadow */\n}',
    },
    block('show-heading', "Show, don't tell", 'h2'),
    {
        _type: 'figure',
        _key: 'before-after',
        image: {
            src: '/placeholders/screenshot.svg',
            alt: 'Screenshot placeholder: before and after focus styles',
            width: 1600,
            height: 900,
        },
        caption: 'Before and after. Lorem ipsum dolor sit amet.',
    },
    block('quote', "Accessible and playful aren't opposites.", 'blockquote'),
    block(
        'outro',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Thanks for reading.',
    ),
];
