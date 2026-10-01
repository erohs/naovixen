import type { FunctionComponent } from 'react';
import {
    Button,
    Footer,
    Header,
    Logo,
    NavigationLayout,
    NavigationList,
} from '@naovixen/components';

import { Example } from '../../components/example/Example.component';
import { exampleNavigationItems } from '../../constants/ExampleNavigationItems.const';
import { exampleSocialLinks } from '../../constants/ExampleSocialLinks.const';

/** A NavigationList is the links; the landmark around it belongs to whoever places it. */
const Navigation: FunctionComponent = () => (
    <>
        <Example name="NavigationList">
            {Object.values(NavigationLayout).map((layout) => (
                <NavigationList
                    key={layout}
                    items={exampleNavigationItems}
                    currentHref="/about"
                    layout={layout}
                    aria-label={layout}
                />
            ))}
        </Example>
        <Example name="NavigationList of links elsewhere">
            <NavigationList items={exampleSocialLinks} aria-label="elsewhere" />
        </Example>
    </>
);

/**
 * What every page of a site shares, with the site's own links and copy passed in. The header's
 * navigation becomes a menu behind a button on a narrow screen.
 */
const Frame: FunctionComponent = () => (
    <>
        <Example name="Header">
            <Header
                items={exampleNavigationItems}
                currentHref="/"
                actions={<Button>Action</Button>}
                className="nv-site-frame-page__wide"
            />
        </Example>
        <Example name="Footer">
            <Footer smallPrint={<p>© 2026 Example Name</p>} className="nv-site-frame-page__wide">
                <Logo />
                <Footer.Column heading="site" links={exampleNavigationItems} currentHref="/" />
                <Footer.Column heading="elsewhere" links={exampleSocialLinks} />
            </Footer>
        </Example>
    </>
);

export const SiteFramePage: FunctionComponent = () => (
    <>
        <Navigation />
        <Frame />
    </>
);
