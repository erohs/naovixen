import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { Heading, ThemeProvider, ThemeToggle, useDocumentTheme } from '@naovixen/components';
import { MediaQuerySystemThemeSource, NoOpThemeStorage, ThemeController } from '@naovixen/theming';

import { PageSection } from '../components/page-section/PageSection.component';
import { designSystemPages } from '../constants/DesignSystemPages.const';

/** The choice lasts until the page reloads: this app has nothing worth remembering. */
function createThemeController(): ThemeController {
    return new ThemeController(
        new NoOpThemeStorage(),
        new MediaQuerySystemThemeSource((query) => window.matchMedia(query)),
    );
}

const DesignSystem: FunctionComponent = () => {
    useDocumentTheme();

    return (
        <div className="nv-design-system">
            <header className="nv-design-system__header">
                <Heading level={1}>naovixen design system</Heading>
                <ThemeToggle />
            </header>
            <nav aria-label="Pages" className="nv-design-system__contents">
                {designSystemPages.map((page) => (
                    <a key={page.id} href={`#${page.id}`}>
                        {page.title}
                    </a>
                ))}
            </nav>
            <main id="main" tabIndex={-1}>
                {designSystemPages.map((page) => (
                    <PageSection key={page.id} id={page.id} title={page.title}>
                        <page.component />
                    </PageSection>
                ))}
            </main>
        </div>
    );
};

export const App: FunctionComponent = () => {
    const [themeController] = useState(createThemeController);

    return (
        <ThemeProvider themeController={themeController}>
            <DesignSystem />
        </ThemeProvider>
    );
};
