import type { FunctionComponent } from "react";
import { Breadcrumb, Figure } from "@naovixen/components";
import { RichContent } from "@naovixen/rich-content";
import { MoreNavigation } from "../../../components/more-navigation/MoreNavigation.component";
import { translate } from "../../../translate/Translate.const";
import type { IProjectPageData } from "./interfaces/IProjectPageData";
import { workBreadcrumbTrail } from "./constants/WorkBreadcrumbTrail.const";
import { ProjectHeader } from "./sections/project-header/ProjectHeader.component";
import { ProjectStack } from "./sections/project-stack/ProjectStack.component";

/** The screenshot is the largest thing on the page, so it loads first rather than lazily. */
export const ProjectPage: FunctionComponent<IProjectPageData> = ({ project, nextProject }) => (
    <article aria-labelledby="project-title" className="nv-page">
        <Breadcrumb trail={workBreadcrumbTrail} currentLabel={project.title} />
        <ProjectHeader project={project} />
        <ProjectStack project={project} />
        {project.screenshot && <Figure image={{ ...project.screenshot, loading: "eager", fetchPriority: "high" }} />}
        <RichContent body={project.body} className="nv-project-page__body" />
        <MoreNavigation
            label={translate("project.moreProjects")}
            backLink={{ label: translate("project.allProjects"), href: "/work" }}
            nextLink={nextProject && { label: nextProject.title, href: `/work/${nextProject.slug}` }}
            className="nv-project-page__more"
        />
    </article>
);
