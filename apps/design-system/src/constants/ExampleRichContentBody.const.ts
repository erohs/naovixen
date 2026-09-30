import { ButtonVariant } from '@naovixen/components';
import type { RichContentNode } from '@naovixen/rich-content';

function textBlock(key: string, text: string, style = 'normal'): RichContentNode {
    return {
        _type: 'block',
        _key: key,
        style,
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-text`, text, marks: [] }],
    };
}

/** One of everything a body can hold. */
export const exampleRichContentBody: readonly RichContentNode[] = [
    { _type: 'sectionHeading', _key: 'section', text: 'A numbered heading' },
    textBlock('heading', 'A heading', 'h2'),
    textBlock('paragraph', 'A paragraph of body text, set at a comfortable reading width.'),
    {
        _type: 'block',
        _key: 'marks',
        style: 'normal',
        markDefs: [{ _type: 'link', _key: 'link', href: 'https://example.com' }],
        children: [
            { _type: 'span', _key: 'a', text: 'Some ', marks: [] },
            { _type: 'span', _key: 'b', text: 'strong words', marks: ['strong'] },
            { _type: 'span', _key: 'c', text: ', ', marks: [] },
            { _type: 'span', _key: 'd', text: 'inline code', marks: ['code'] },
            { _type: 'span', _key: 'e', text: ' and ', marks: [] },
            { _type: 'span', _key: 'f', text: 'a link', marks: ['link'] },
            { _type: 'span', _key: 'g', text: '.', marks: [] },
        ],
    },
    textBlock('subheading', 'A subheading', 'h3'),
    { ...textBlock('first-item', 'A list item'), listItem: 'bullet', level: 1 },
    { ...textBlock('second-item', 'Another list item'), listItem: 'bullet', level: 1 },
    textBlock('quote', 'A quotation, set apart from the text around it.', 'blockquote'),
    { _type: 'callout', _key: 'callout', kind: 'tip!', title: 'A callout', text: 'Its text.' },
    { _type: 'code', _key: 'code', code: 'const answer = 42;', language: 'TypeScript' },
    {
        _type: 'figure',
        _key: 'figure',
        image: { src: '/example.svg', alt: 'An orange circle on sand', width: 800, height: 450 },
        caption: 'A figure with a caption.',
    },
    {
        _type: 'factList',
        _key: 'facts',
        facts: [
            { label: 'my role', value: 'Lead engineer' },
            { label: 'timeline', value: '12 weeks' },
        ],
    },
    {
        _type: 'linkButtons',
        _key: 'buttons',
        links: [
            {
                _key: 'demo',
                label: 'Live demo',
                href: 'https://example.com',
                variant: ButtonVariant.Primary,
            },
            {
                _key: 'repository',
                label: 'GitHub repo',
                href: 'https://example.com',
                variant: ButtonVariant.Secondary,
            },
        ],
    },
];
