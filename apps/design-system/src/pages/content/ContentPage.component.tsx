import type { FunctionComponent } from 'react';
import { Callout, Card, CardGrid, CodeBlock, Heading, Text } from '@naovixen/components';

import { DisclosureDemo } from '../../components/disclosure-demo/DisclosureDemo.component';
import { Example } from '../../components/example/Example.component';

const ExampleCard: FunctionComponent<{ readonly title: string }> = ({ title }) => (
    <Card>
        <Heading level={4}>{title}</Heading>
        <Text>Anything that stands on its own, such as a post.</Text>
    </Card>
);

/** Card holds one thing; CardGrid lays a list of them out. */
const Cards: FunctionComponent = () => (
    <>
        <Example name="Card">
            <ExampleCard title="A card" />
        </Example>
        <Example name="CardGrid">
            <CardGrid className="nv-content-page__wide">
                <li>
                    <ExampleCard title="First card" />
                </li>
                <li>
                    <ExampleCard title="Second card" />
                </li>
                <li>
                    <ExampleCard title="Third card" />
                </li>
            </CardGrid>
        </Example>
    </>
);

/** Set-apart content within a body of text. */
const Asides: FunctionComponent = () => (
    <>
        <Example name="Callout">
            <Callout label="tip!" title="Check both themes">
                <Text>Every colour pair has to pass in light and dark.</Text>
            </Callout>
        </Example>
        <Example name="CodeBlock">
            <CodeBlock code="const answer = 42;" language="TypeScript" />
            <CodeBlock
                code="pnpm --filter design-system dev"
                language="Shell"
                filename="terminal"
            />
        </Example>
        <Example name="Disclosure">
            <DisclosureDemo isInitiallyOpen={false} />
            <DisclosureDemo isInitiallyOpen />
        </Example>
    </>
);

export const ContentPage: FunctionComponent = () => (
    <>
        <Cards />
        <Asides />
    </>
);
