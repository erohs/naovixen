import type { FunctionComponent } from "react";
import { Breadcrumb, Heading, Text } from "@naovixen/components";
import { ProjectCard } from "../../components/project-card/ProjectCard.component";
import { homeBreadcrumbTrail } from "../../constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import type { IWorkPageProps } from "./interfaces/IWorkPageProps";

export const WorkPage: FunctionComponent<IWorkPageProps> = ({ projects }) => (
    <div className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("navigation.work")} />
        <header className="nv-work-page__header">
            <Heading level={1}>{translate("work.title")}</Heading>
            <Text className="nv-work-page__intro">{translate("work.intro")}</Text>
        </header>
        {projects.length === 0 ? (
            <Text>{translate("work.empty")}</Text>
        ) : (
            <ul className="nv-work-page__projects">
                {projects.map((project, i) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} headingLevel={2} isAboveTheFold={i === 0} />
                    </li>
                ))}
            </ul>
        )}
    </div>
);
