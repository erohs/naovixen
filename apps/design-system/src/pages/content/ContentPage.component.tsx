import type { FunctionComponent } from 'react';
import { Callout, Card, CodeBlock, Heading, Text } from '@naovixen/components';

import { DisclosureDemo } from '../../components/disclosure-demo/DisclosureDemo.component';
import { Example } from '../../components/example/Example.component';

/** Card holds one thing. Laying several out is the page's own stylesheet's job. */
const Cards: FunctionComponent = () => (
    <Example name="Card">
        <Card>
            <Heading level={4}>A card</Heading>
            <Text>Anything that stands on its own, such as a post.</Text>
        </Card>
    </Example>
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
