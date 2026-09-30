import type { FunctionComponent } from 'react';
import {
    arrowLeftIcon,
    arrowRightIcon,
    BackToTop,
    Breadcrumb,
    Button,
    ButtonGroup,
    ButtonVariant,
    downloadIcon,
    ExternalLink,
    ExternalLinkButton,
    gitHubIcon,
    Icon,
    IconPosition,
    Link,
    LinkButton,
    LinkIcon,
    LinkTile,
    navigationLinkClassName,
    SkipLink,
    SocialLinkList,
    Text,
    ThemeToggle,
} from '@naovixen/components';

import { Example } from '../../components/example/Example.component';
import { exampleSocialLinks } from '../../constants/ExampleSocialLinks.const';

/** Something that acts is a Button. */
const Buttons: FunctionComponent = () => (
    <>
        <Example name="Button">
            <Button variant={ButtonVariant.Primary}>Primary</Button>
            <Button>Secondary</Button>
            <Button disabled>Disabled</Button>
        </Example>
        <Example name="ButtonGroup">
            <ButtonGroup>
                <Button variant={ButtonVariant.Primary}>Save</Button>
                <Button>Cancel</Button>
                <LinkButton href="#actions-and-links">Read more</LinkButton>
            </ButtonGroup>
        </Example>
    </>
);

/** Something that navigates but should look like a button is a LinkButton. */
const ButtonLinks: FunctionComponent = () => (
    <>
        <Example name="LinkButton">
            <LinkButton href="#actions-and-links" variant={ButtonVariant.Primary}>
                Primary <Icon source={arrowRightIcon} />
            </LinkButton>
            <LinkButton href="#actions-and-links">
                Download <Icon source={downloadIcon} />
            </LinkButton>
        </Example>
        <Example name="ExternalLinkButton">
            <ExternalLinkButton href="https://example.com">Another site</ExternalLinkButton>
        </Example>
    </>
);

const Controls: FunctionComponent = () => (
    <>
        <Example name="ThemeToggle">
            <ThemeToggle />
        </Example>
        <Example name="BackToTop">
            <Text>Fixed at the bottom of the window, once you scroll a screen down.</Text>
            <BackToTop />
        </Example>
    </>
);

/** Link for text, LinkIcon when an arrow helps. */
const Links: FunctionComponent = () => (
    <>
        <Example name="Link">
            <Link href="#actions-and-links">A link in content</Link>
            <Link href="#actions-and-links" className={navigationLinkClassName}>
                A navigation link
            </Link>
        </Example>
        <Example name="LinkIcon">
            <LinkIcon href="#actions-and-links" icon={arrowRightIcon}>
                Icon at the end
            </LinkIcon>
            <LinkIcon
                href="#actions-and-links"
                icon={arrowLeftIcon}
                iconPosition={IconPosition.Start}
            >
                Icon at the start
            </LinkIcon>
        </Example>
    </>
);

/** ExternalLink for another site; SkipLink first in the page, for keyboards. */
const SpecialLinks: FunctionComponent = () => (
    <>
        <Example name="ExternalLink">
            <ExternalLink href="https://example.com">Another site</ExternalLink>
        </Example>
        <Example name="SkipLink">
            <SkipLink href="#actions-and-links">Skip to content (shown on focus)</SkipLink>
        </Example>
    </>
);

/** Ways to get somewhere, laid out: a tile, a trail and a list of profiles. */
const Wayfinding: FunctionComponent = () => (
    <>
        <Example name="LinkTile">
            <LinkTile
                href="#actions-and-links"
                label="GitHub"
                detail="github.com/example"
                icon={gitHubIcon}
            />
        </Example>
        <Example name="Breadcrumb">
            <Breadcrumb
                trail={[{ label: 'Home', href: '#actions-and-links' }]}
                currentLabel="Actions and links"
            />
        </Example>
        <Example name="SocialLinkList">
            <SocialLinkList links={exampleSocialLinks} />
        </Example>
    </>
);

export const ActionsAndLinksPage: FunctionComponent = () => (
    <>
        <Buttons />
        <ButtonLinks />
        <Controls />
        <Links />
        <SpecialLinks />
        <Wayfinding />
    </>
);
