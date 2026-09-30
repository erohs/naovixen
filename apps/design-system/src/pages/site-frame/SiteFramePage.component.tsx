import type { FunctionComponent } from 'react';
import {
    Button,
    Footer,
    FooterColumn,
    Header,
    Logo,
    MobileMenu,
    NavigationLayout,
    NavigationList,
} from '@naovixen/components';

import { Example } from '../../components/example/Example.component';
import { exampleNavigationItems } from '../../constants/ExampleNavigationItems.const';

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
        <Example name="MobileMenu">
            <MobileMenu items={exampleNavigationItems} currentHref="/" />
        </Example>
    </>
);

/** What every page of a site shares, with the site's own links and copy passed in. */
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
        <Example name="Footer and FooterColumn">
            <Footer smallPrint={<p>© 2026 Example Name</p>} className="nv-site-frame-page__wide">
                <Logo />
                <FooterColumn heading="site">
                    <NavigationList items={exampleNavigationItems} currentHref="/" />
                </FooterColumn>
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
