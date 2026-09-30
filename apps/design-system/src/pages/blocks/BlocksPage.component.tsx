import type { FunctionComponent } from 'react';
import {
    BackToTop,
    Breadcrumb,
    Callout,
    Card,
    CodeBlock,
    ExclamationBubble,
    FactList,
    Figure,
    FigureShape,
    Footer,
    FooterColumn,
    HandDrawnRule,
    Header,
    LinkTile,
    Logo,
    MobileMenu,
    Navigation,
    NavigationLayout,
    NavigationList,
    SectionHeading,
    SocialLinkList,
    SpeechBubble,
    SpeechBubbleTail,
    TagList,
} from '@naovixen/blocks';
import { Button, gitHubIcon, Heading, Link, Text } from '@naovixen/components';

import { DisclosureDemo } from '../../components/disclosure-demo/DisclosureDemo.component';
import { Example } from '../../components/example/Example.component';
import { exampleNavigationItems } from '../../constants/ExampleNavigationItems.const';
import { exampleSocialLinks } from '../../constants/ExampleSocialLinks.const';

const Content: FunctionComponent = () => (
    <>
        <Example name="Card">
            <Card>
                <Heading level={4}>A card</Heading>
                <Text>Anything that stands on its own, such as a post.</Text>
            </Card>
        </Example>
        <Example name="Callout">
            <Callout kind="tip!" heading="Check both themes">
                <Text>Every colour pair has to pass in light and dark.</Text>
            </Callout>
        </Example>
        <Example name="SectionHeading">
            <SectionHeading level={4} number="01" intro="An intro under the heading.">
                A section heading
            </SectionHeading>
        </Example>
        <Example name="HandDrawnRule">
            <HandDrawnRule />
        </Example>
    </>
);

const Code: FunctionComponent = () => (
    <Example name="CodeBlock">
        <CodeBlock code="const answer = 42;" language="TypeScript" />
        <CodeBlock code="pnpm --filter design-system dev" language="Shell" filename="terminal" />
    </Example>
);

const Figures: FunctionComponent = () => (
    <Example name="Figure">
        <Figure
            image={{
                src: '/example.svg',
                alt: 'An orange circle on sand',
                width: 800,
                height: 450,
            }}
            caption="A wide figure, for screenshots."
        />
        <Figure
            shape={FigureShape.Portrait}
            image={{
                src: '/example.svg',
                alt: 'An orange circle on sand',
                width: 800,
                height: 450,
            }}
        />
    </Example>
);

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
        <Example name="FactList">
            <FactList
                facts={[
                    { label: 'my role', value: 'Lead engineer' },
                    { label: 'timeline', value: '12 weeks' },
                ]}
            />
        </Example>
        <Example name="TagList">
            <TagList tags={['Accessibility', 'TypeScript', 'CSS']} label="Topics" />
        </Example>
    </>
);

const Links: FunctionComponent = () => (
    <>
        <Example name="Breadcrumb">
            <Breadcrumb trail={[{ label: 'Home', href: '#blocks' }]} currentLabel="Blocks" />
        </Example>
        <Example name="LinkTile">
            <LinkTile href="#blocks" label="GitHub" detail="github.com/example" icon={gitHubIcon} />
        </Example>
        <Example name="SocialLinkList">
            <SocialLinkList links={exampleSocialLinks} />
        </Example>
        <Example name="Logo">
            <Logo />
            <Link href="#blocks">
                <Logo />
            </Link>
        </Example>
    </>
);

const Navigations: FunctionComponent = () => (
    <>
        <Example name="Navigation">
            <Navigation items={exampleNavigationItems} currentHref="/blog" aria-label="Row" />
            <Navigation
                items={exampleNavigationItems}
                currentHref="/blog"
                layout={NavigationLayout.Stacked}
                aria-label="Stacked"
            />
        </Example>
        <Example name="NavigationList">
            <NavigationList items={exampleNavigationItems} currentHref="/about" />
        </Example>
        <Example name="MobileMenu">
            <MobileMenu items={exampleNavigationItems} currentHref="/" />
        </Example>
        <Example name="Disclosure">
            <DisclosureDemo isInitiallyOpen={false} />
            <DisclosureDemo isInitiallyOpen />
        </Example>
    </>
);

const SiteFrame: FunctionComponent = () => (
    <>
        <Example name="Header">
            <Header
                items={exampleNavigationItems}
                currentHref="/"
                actions={<Button>Action</Button>}
                className="nv-blocks-page__wide"
            />
        </Example>
        <Example name="Footer and FooterColumn">
            <Footer smallPrint={<p>© 2026 Example Name</p>} className="nv-blocks-page__wide">
                <Logo />
                <FooterColumn heading="site">
                    <NavigationList items={exampleNavigationItems} currentHref="/" />
                </FooterColumn>
            </Footer>
        </Example>
        <Example name="BackToTop">
            <Text>Fixed at the bottom of the window, once you scroll a screen down.</Text>
            <BackToTop />
        </Example>
    </>
);

export const BlocksPage: FunctionComponent = () => (
    <>
        <Content />
        <Code />
        <Figures />
        <Bubbles />
        <Links />
        <Navigations />
        <SiteFrame />
    </>
);
