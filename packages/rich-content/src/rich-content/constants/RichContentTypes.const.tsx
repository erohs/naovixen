import type {
    PortableTextReactComponents,
    PortableTextTypeComponentProps,
} from '@portabletext/react';
import {
    Callout,
    CodeBlock,
    ExternalLinkButton,
    FactList,
    Figure,
    SectionHeading,
    Text,
} from '@naovixen/components';

import type { ICalloutBlockValue } from '../interfaces/ICalloutBlockValue';
import type { ICodeBlockValue } from '../interfaces/ICodeBlockValue';
import type { IFactListBlockValue } from '../interfaces/IFactListBlockValue';
import type { IFigureBlockValue } from '../interfaces/IFigureBlockValue';
import type { ILinkButtonsBlockValue } from '../interfaces/ILinkButtonsBlockValue';
import type { ISectionHeadingBlockValue } from '../interfaces/ISectionHeadingBlockValue';

/** One renderer per custom block type. A new block is a new entry here. */
export const richContentTypes: PortableTextReactComponents['types'] = {
    sectionHeading: ({ value }: PortableTextTypeComponentProps<ISectionHeadingBlockValue>) => (
        <SectionHeading
            number={value.number === undefined ? undefined : String(value.number).padStart(2, '0')}
            className="nv-rich-content__section-heading"
        >
            {value.text}
        </SectionHeading>
    ),
    callout: ({ value }: PortableTextTypeComponentProps<ICalloutBlockValue>) => (
        <Callout kind={value.kind} heading={value.title}>
            <Text>{value.text}</Text>
        </Callout>
    ),
    code: ({ value }: PortableTextTypeComponentProps<ICodeBlockValue>) => (
        <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    ),
    figure: ({ value }: PortableTextTypeComponentProps<IFigureBlockValue>) => (
        <Figure image={value.image} caption={value.caption} shape={value.shape} />
    ),
    factList: ({ value }: PortableTextTypeComponentProps<IFactListBlockValue>) => (
        <FactList facts={value.facts} />
    ),
    linkButtons: ({ value }: PortableTextTypeComponentProps<ILinkButtonsBlockValue>) => (
        <div className="nv-rich-content__buttons">
            {value.links.map((link) => (
                <ExternalLinkButton key={link._key} href={link.href} variant={link.variant}>
                    {link.label}
                </ExternalLinkButton>
            ))}
        </div>
    ),
};
