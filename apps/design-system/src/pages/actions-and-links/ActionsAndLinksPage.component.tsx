import type { FunctionComponent } from 'react';
import {
    arrowLeftIcon,
    arrowRightIcon,
    BackToTop,
    Breadcrumb,
    Button,
    ButtonVariant,
    downloadIcon,
    externalLinkIcon,
    gitHubIcon,
    Link,
    LinkButton,
    LinkTile,
    LinkVariant,
    SkipLink,
    Text,
    ThemeToggle,
} from '@naovixen/components';

import { Example } from '../../components/example/Example.component';

/** Something that acts is a Button: its text, and a Button.Icon on either side of it. */
const Buttons: FunctionComponent = () => (
    <>
        <Example name="Button">
            <Button variant={ButtonVariant.Primary}>Primary</Button>
            <Button>Secondary</Button>
            <Button disabled>Disabled</Button>
        </Example>
        <Example name="Button with a Button.Icon">
            <Button>
                <Button.Icon source={downloadIcon} /> Icon at the start
            </Button>
            <Button>
                Icon at the end <Button.Icon source={arrowRightIcon} />
            </Button>
            <Button>
                <Button.Icon source={downloadIcon} label="Only an icon, named by its label" />
            </Button>
        </Example>
    </>
);

/** Something that navigates but looks like a button is a LinkButton, announced as a button. */
const LinkButtons: FunctionComponent = () => (
    <Example name="LinkButton">
        <LinkButton href="#actions-and-links" variant={ButtonVariant.Primary}>
            Primary <LinkButton.Icon source={arrowRightIcon} />
        </LinkButton>
        <LinkButton href="#actions-and-links">
            <LinkButton.Icon source={downloadIcon} /> Download
        </LinkButton>
        <LinkButton href="https://example.com">
            Another site <LinkButton.Icon source={externalLinkIcon} />
        </LinkButton>
    </Example>
);

/** Buttons and link buttons with a job of their own. */
const Controls: FunctionComponent = () => (
    <>
        <Example name="ThemeToggle">
            <ThemeToggle />
        </Example>
        <Example name="BackToTop">
            <Text>Fixed at the bottom of the window, once you scroll a screen down.</Text>
            <BackToTop />
        </Example>
        <Example name="SkipLink">
            <SkipLink href="#actions-and-links">Skip to content (shown on focus)</SkipLink>
        </Example>
    </>
);

/** One Link: a variant picks its look, a Link.Icon goes on either side of its text. */
const Links: FunctionComponent = () => (
    <>
        <Example name="Link">
            <Link href="#actions-and-links">A link in content</Link>
            <Link href="#actions-and-links" variant={LinkVariant.Navigation}>
                A navigation link
            </Link>
        </Example>
        <Example name="Link with a Link.Icon">
            <Link href="#actions-and-links" variant={LinkVariant.Standalone}>
                Standalone, icon at the end <Link.Icon source={arrowRightIcon} />
            </Link>
            <Link href="#actions-and-links">
                <Link.Icon source={arrowLeftIcon} /> Icon at the start
            </Link>
        </Example>
        <Example name="Link to another site">
            <Link href="https://example.com">Opens in a new tab</Link>
            <Link href="https://example.com" opensInNewTab={false}>
                Told to open in place
            </Link>
        </Example>
    </>
);

/** Ways to get somewhere, laid out: a tile and a trail. */
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
    </>
);

export const ActionsAndLinksPage: FunctionComponent = () => (
    <>
        <Buttons />
        <LinkButtons />
        <Controls />
        <Links />
        <Wayfinding />
    </>
);
