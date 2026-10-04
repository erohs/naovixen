import type { FunctionComponent } from "react";
import { Heading, ThemeToggle } from "@naovixen/components";
import { PageSection } from "../components/page-section/PageSection.component";
import { designSystemPages } from "../constants/DesignSystemPages.const";
import { translate } from "../translate/Translate.const";
import type { IAppProps } from "./interfaces/IAppProps";

export const App: FunctionComponent<IAppProps> = ({ themeController }) => (
    <div className="nv-design-system">
        <header className="nv-design-system__header">
            <Heading level={1}>{translate("title")}</Heading>
            <ThemeToggle themeController={themeController} />
        </header>
        <nav aria-label={translate("pagesNavigation")} className="nv-design-system__contents">
            {designSystemPages.map((page) => (
                <a key={page.id} href={`#${page.id}`}>
                    {page.title}
                </a>
            ))}
        </nav>
        <main id="main" tabIndex={-1}>
            {designSystemPages.map((page) => (
                <PageSection key={page.id} id={page.id} title={page.title}>
                    <page.component themeController={themeController} />
                </PageSection>
            ))}
        </main>
    </div>
);
