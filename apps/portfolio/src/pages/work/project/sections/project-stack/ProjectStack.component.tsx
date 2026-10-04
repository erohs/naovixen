import type { FunctionComponent } from "react";
import { TagList } from "@naovixen/components";
import { translate } from "../../../../../translate/Translate.const";
import type { IProjectSectionProps } from "../../interfaces/IProjectSectionProps";

export const ProjectStack: FunctionComponent<IProjectSectionProps> = ({ project }) => (
    <dl className="nv-project-page__stack">
        <dt>{translate("project.techStackTerm")}</dt>
        <dd>
            <TagList tags={project.stack} label={translate("project.techStack")} />
        </dd>
    </dl>
);
