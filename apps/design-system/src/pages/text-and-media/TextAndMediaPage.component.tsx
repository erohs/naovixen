import type { FunctionComponent } from 'react';
import * as components from '@naovixen/components';
import {
    Code,
    ExclamationBubble,
    FactList,
    Figure,
    FigureShape,
    HandDrawnRule,
    Heading,
    HeadingSize,
    Icon,
    Image,
    Logo,
    SectionHeading,
    SpeechBubble,
    SpeechBubbleTail,
    Tag,
    TagList,
    Text,
    TextVariant,
} from '@naovixen/components';

import { Example } from '../../components/example/Example.component';

/** Every icon the package exports, so a new one appears here without being listed. */
const icons = Object.entries(components).flatMap(([name, source]) =>
    name.endsWith('Icon') && typeof source === 'string' ? [{ name, source }] : [],
);

const exampleImage = {
    src: '/example.svg',
    alt: 'An orange circle on sand',
    width: 800,
    height: 450,
};

/** Heading sets the level and, separately, the size. */
const Headings: FunctionComponent = () => (
    <>
        <Example name="Heading">
            <div className="nv-text-and-media-page__column">
                {Object.values(HeadingSize).map((size) => (
                    <Heading key={size} level={4} size={size}>
                        Heading at size {size}
                    </Heading>
                ))}
            </div>
        </Example>
        <Example name="SectionHeading">
            <SectionHeading level={4} number="01" intro="An intro under the heading.">
                A section heading
            </SectionHeading>
        </Example>
    </>
);

/** Text sets the role of a paragraph; Code and Tag mark a word or two within it. */
const Texts: FunctionComponent = () => (
    <>
        <Example name="Text">
            <div className="nv-text-and-media-page__column">
                {Object.values(TextVariant).map((variant) => (
                    <Text key={variant} variant={variant}>
                        Text in the {variant} variant.
                    </Text>
                ))}
            </div>
        </Example>
        <Example name="Code and Tag">
            <Text>
                Run <Code>pnpm test</Code> first.
            </Text>
            <Tag>Accessibility</Tag>
            <Tag>TypeScript</Tag>
        </Example>
    </>
);

/** Short structured facts: a list of tags, or labelled values. */
const Lists: FunctionComponent = () => (
    <>
        <Example name="TagList">
            <TagList tags={['Accessibility', 'TypeScript', 'CSS']} label="Topics" />
        </Example>
        <Example name="FactList">
            <FactList
                facts={[
                    { label: 'my role', value: 'Lead engineer' },
                    { label: 'timeline', value: '12 weeks' },
                ]}
            />
        </Example>
    </>
);

/** Something said out loud: a greeting, or a quotation. */
const Bubbles: FunctionComponent = () => (
    <>
        <Example name="SpeechBubble">
            <SpeechBubble>tail below</SpeechBubble>
            <SpeechBubble tail={SpeechBubbleTail.Top}>tail above</SpeechBubble>
            <SpeechBubble tail={SpeechBubbleTail.None}>no tail</SpeechBubble>
        </Example>
        <Example name="ExclamationBubble">
            <ExclamationBubble>say hello!</ExclamationBubble>
        </Example>
    </>
);

/** Image is the bare element; Figure adds a caption and a shape. */
const Pictures: FunctionComponent = () => (
    <>
        <Example name="Image">
            <Image src="/example.svg" alt="An orange circle on sand" width={320} height={180} />
        </Example>
        <Example name="Figure">
            <Figure image={exampleImage} caption="A wide figure, for screenshots." />
            <Figure image={exampleImage} shape={FigureShape.Portrait} />
        </Example>
    </>
);

/** Drawings: always decorative, so the text beside them carries the meaning. */
const Drawings: FunctionComponent = () => (
    <>
        <Example name="Icon">
            {icons.map((icon) => (
                <span key={icon.name} className="nv-text-and-media-page__icon">
                    <Icon source={icon.source} />
                    {icon.name}
                </span>
            ))}
        </Example>
        <Example name="Logo and HandDrawnRule">
            <Logo />
            <HandDrawnRule />
        </Example>
    </>
);

export const TextAndMediaPage: FunctionComponent = () => (
    <>
        <Headings />
        <Texts />
        <Lists />
        <Bubbles />
        <Pictures />
        <Drawings />
    </>
);
