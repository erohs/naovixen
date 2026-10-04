import type { FunctionComponent } from "react";
import { arrowRightIcon, Link, LinkVariant } from "@naovixen/components";
import { ProjectCard } from "../../../../components/project-card/ProjectCard.component";
import { translate } from "../../../../translate/Translate.const";
import { HomeSection } from "../../HomeSection.component";
import type { IFeaturedProjectsSectionProps } from "./interfaces/IFeaturedProjectsSectionProps";

/** Left out while no project is featured, rather than showing an empty section. */
export const FeaturedProjectsSection: FunctionComponent<IFeaturedProjectsSectionProps> = ({ featuredProjects }) =>
    featuredProjects.length > 0 && (
        <HomeSection
            id="work"
            heading={translate("home.featuredProjects")}
            headingId="work-title"
            intro={translate("home.featuredProjectsIntro")}
            action={
                <Link href="/work" variant={LinkVariant.Standalone}>
                    {translate("project.allProjects")} <Link.Icon source={arrowRightIcon} />
                </Link>
            }>
            <ul className="nv-home-section__cards">
                {featuredProjects.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} headingLevel={3} />
                    </li>
                ))}
            </ul>
        </HomeSection>
    );
