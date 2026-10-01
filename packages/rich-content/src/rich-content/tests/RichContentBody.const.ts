import type { BodyNode } from '@naovixen/cms';

export const richContentBody: readonly BodyNode[] = [
    {
        _type: 'sectionHeading',
        _key: 'first-section',
        text: 'First part',
        number: 1,
    },
    {
        _type: 'block',
        _key: 'heading',
        style: 'h2',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Example heading',
                marks: [],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'subheading',
        style: 'h3',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Example subheading',
                marks: [],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'paragraph',
        style: 'normal',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Example paragraph',
                marks: [],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'strong',
        style: 'normal',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Strong words',
                marks: ['strong'],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'quote',
        style: 'blockquote',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Example quotation',
                marks: [],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'links',
        style: 'normal',
        markDefs: [
            {
                _type: 'link',
                _key: 'site',
                href: '/work',
            },
            {
                _type: 'link',
                _key: 'elsewhere',
                href: 'https://example.com',
            },
            {
                _type: 'link',
                _key: 'email',
                href: 'mailto:someone@example.com',
            },
        ],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Our work',
                marks: ['site'],
            },
            {
                _type: 'span',
                _key: 'b',
                text: ', ',
                marks: [],
            },
            {
                _type: 'span',
                _key: 'c',
                text: 'Example site',
                marks: ['elsewhere'],
            },
            {
                _type: 'span',
                _key: 'd',
                text: ' and ',
                marks: [],
            },
            {
                _type: 'span',
                _key: 'e',
                text: 'Email me',
                marks: ['email'],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'inline-code',
        style: 'normal',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'npm test',
                marks: ['code'],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'odd-mark',
        style: 'normal',
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Oddly marked',
                marks: ['sparkle'],
            },
        ],
    },
    {
        _type: 'block',
        _key: 'item',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 'a',
                text: 'Example item',
                marks: [],
            },
        ],
    },
    {
        _type: 'callout',
        _key: 'callout',
        label: 'tip!',
        title: 'Example title',
        text: 'Tip text',
    },
    {
        _type: 'code',
        _key: 'code',
        code: 'const answer = 42;',
        language: 'TypeScript',
    },
    {
        _type: 'figure',
        _key: 'figure',
        image: {
            src: '/example.png',
            alt: 'Example picture',
            width: 800,
            height: 450,
        },
        shape: 'wide',
    },
    {
        _type: 'sectionHeading',
        _key: 'second-section',
        text: 'Second part',
        number: 2,
    },
    {
        _type: 'factList',
        _key: 'facts',
        facts: [{ label: 'my role', value: 'Lead engineer' }],
    },
    {
        _type: 'linkButtons',
        _key: 'buttons',
        buttons: [
            {
                _key: 'demo',
                label: 'Live demo',
                href: 'https://example.com/demo',
                variant: 'primary',
            },
        ],
    },
];
