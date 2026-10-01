import type { PortableTextTypeComponentProps } from '@portabletext/react';
import {
    Callout,
    CodeBlock,
    externalLinkIcon,
    FactList,
    Figure,
    LinkButton,
    SectionHeading,
    Text,
} from '@naovixen/components';
import type {
    ILinkButtonsBlock,
    ICalloutBlock,
    ICodeBlock,
    IFactListBlock,
    IFigureBlock,
    ISectionHeadingBlock,
} from '@naovixen/cms';

import type { RichContentTypes } from '../types/RichContentTypes';
import { buttonVariantByName } from './ButtonVariantByName.const';
import { figureShapeByName } from './FigureShapeByName.const';

/** Each of the site's blocks and the component it renders as, one to one. */
export const richContentTypes: RichContentTypes = {
    sectionHeading: ({ value }: PortableTextTypeComponentProps<ISectionHeadingBlock>) => (
        <SectionHeading
            number={String(value.number).padStart(2, '0')}
            className="nv-rich-content__section-heading"
        >
            {value.text}
        </SectionHeading>
    ),
    callout: ({ value }: PortableTextTypeComponentProps<ICalloutBlock>) => (
        <Callout label={value.label} title={value.title}>
            <Text>{value.text}</Text>
        </Callout>
    ),
    code: ({ value }: PortableTextTypeComponentProps<ICodeBlock>) => (
        <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    ),
    figure: ({ value }: PortableTextTypeComponentProps<IFigureBlock>) => (
        <Figure
            image={value.image}
            caption={value.caption}
            shape={figureShapeByName[value.shape]}
        />
    ),
    factList: ({ value }: PortableTextTypeComponentProps<IFactListBlock>) => (
        <FactList facts={value.facts} />
    ),
    linkButtons: ({ value }: PortableTextTypeComponentProps<ILinkButtonsBlock>) => (
        <div className="nv-rich-content__buttons">
            {value.buttons.map((button) => (
                <LinkButton
                    key={button._key}
                    href={button.href}
                    variant={buttonVariantByName[button.variant]}
                >
                    {button.label} <LinkButton.Icon source={externalLinkIcon} />
                </LinkButton>
            ))}
        </div>
    ),
};
