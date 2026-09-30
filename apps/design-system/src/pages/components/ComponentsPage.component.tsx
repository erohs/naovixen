import type { FunctionComponent } from 'react';
import * as components from '@naovixen/components';
import {
    arrowLeftIcon,
    arrowRightIcon,
    Button,
    ButtonVariant,
    Code,
    downloadIcon,
    ExternalLink,
    ExternalLinkButton,
    Heading,
    HeadingSize,
    Icon,
    IconPosition,
    Image,
    Link,
    LinkButton,
    LinkIcon,
    SkipLink,
    Tag,
    Text,
    TextVariant,
    ThemeToggle,
} from '@naovixen/components';

import { Example } from '../../components/example/Example.component';

/** Every icon the package exports, so a new one appears here without being listed. */
const icons = Object.entries(components).flatMap(([name, source]) =>
    name.endsWith('Icon') && typeof source === 'string' ? [{ name, source }] : [],
);

const Buttons: FunctionComponent = () => (
    <>
        <Example name="Button">
            <Button variant={ButtonVariant.Primary}>Primary</Button>
            <Button>Secondary</Button>
            <Button disabled>Disabled</Button>
        </Example>
        <Example name="LinkButton">
            <LinkButton href="#components" variant={ButtonVariant.Primary}>
                Primary <Icon source={arrowRightIcon} />
            </LinkButton>
            <LinkButton href="#components">
                Download <Icon source={downloadIcon} />
            </LinkButton>
        </Example>
        <Example name="ExternalLinkButton">
            <ExternalLinkButton href="https://example.com">Another site</ExternalLinkButton>
        </Example>
        <Example name="ThemeToggle">
            <ThemeToggle />
        </Example>
    </>
);

const Links: FunctionComponent = () => (
    <>
        <Example name="Link">
            <Link href="#components">A link in content</Link>
            <Link href="#components" className={components.navigationLinkClassName}>
                A navigation link
            </Link>
        </Example>
        <Example name="LinkIcon">
            <LinkIcon href="#components" icon={arrowRightIcon}>
                Icon at the end
            </LinkIcon>
            <LinkIcon href="#components" icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
                Icon at the start
            </LinkIcon>
        </Example>
        <Example name="ExternalLink">
            <ExternalLink href="https://example.com">Another site</ExternalLink>
        </Example>
        <Example name="SkipLink">
            <SkipLink href="#components">Skip to content (shown on focus)</SkipLink>
        </Example>
    </>
);

const Headings: FunctionComponent = () => (
    <Example name="Heading">
        <div className="nv-components-page__column">
            {Object.values(HeadingSize).map((size) => (
                <Heading key={size} level={4} size={size}>
                    Heading at size {size}
                </Heading>
            ))}
        </div>
    </Example>
);

const Texts: FunctionComponent = () => (
    <>
        <Example name="Text">
            <div className="nv-components-page__column">
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

const Media: FunctionComponent = () => (
    <>
        <Example name="Image">
            <Image src="/example.svg" alt="An orange circle on sand" width={320} height={180} />
        </Example>
        <Example name="Icon">
            {icons.map((icon) => (
                <span key={icon.name} className="nv-components-page__icon">
                    <Icon source={icon.source} />
                    {icon.name}
                </span>
            ))}
        </Example>
    </>
);

export const ComponentsPage: FunctionComponent = () => (
    <>
        <Buttons />
        <Links />
        <Headings />
        <Texts />
        <Media />
    </>
);
