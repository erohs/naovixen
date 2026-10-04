import type { FunctionComponent } from "react";
import { Card, Heading, HeadingSize, TagList, Text } from "@naovixen/components";
import { joinClassNames } from "@naovixen/utilities";
import { translate } from "../../translate/Translate.const";
import { cardStackLength } from "./constants/CardStackLength.const";
import type { IProjectCardProps } from "./interfaces/IProjectCardProps";
import { ProjectCardLink } from "./ProjectCardLink.component";
import { ProjectCardScreenshot } from "./ProjectCardScreenshot.component";

/** The "View project" link stretches over the whole card, so anywhere on it opens the project. */
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
    project,
    headingLevel,
    isAboveTheFold = false,
    className,
    ...cardProps
}) => (
    <Card {...cardProps} className={joinClassNames("nv-project-card", className)}>
        {project.screenshot && (
            <ProjectCardScreenshot screenshot={project.screenshot} isAboveTheFold={isAboveTheFold} />
        )}
        <div className="nv-project-card__text">
            <Heading level={headingLevel} size={HeadingSize.H4}>
                {project.title}
            </Heading>
            <Text className="nv-project-card__summary">{project.summary}</Text>
        </div>
        <TagList
            tags={project.stack.slice(0, cardStackLength)}
            label={translate("project.techStack")}
            className="nv-project-card__tags"
        />
        <ProjectCardLink project={project} />
    </Card>
);
