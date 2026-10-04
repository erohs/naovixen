import type { FunctionComponent } from "react";
import { Heading, HeadingSize, Text, TextVariant } from "@naovixen/components";
import type { IProjectSectionProps } from "./interfaces/IProjectSectionProps";

export const ProjectHeader: FunctionComponent<IProjectSectionProps> = ({ project }) => (
    <header className="nv-project-page__header">
        <Heading level={1} size={HeadingSize.Title} id="project-title">
            {project.title}
        </Heading>
        <Text variant={TextVariant.Lead} className="nv-project-page__summary">
            {project.summary}
        </Text>
    </header>
);
