import type { FunctionComponent } from "react";
import { arrowRightIcon, Link, LinkVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import type { IProjectCardLinkProps } from "./interfaces/IProjectCardLinkProps";

/** Every card says "View project", so its name adds the project's title after those words. */
export const ProjectCardLink: FunctionComponent<IProjectCardLinkProps> = ({ project }) => (
    <p className="nv-project-card__footer">
        <Link
            href={`/work/${project.slug}`}
            variant={LinkVariant.Standalone}
            aria-label={translate("project.viewNamed", { title: project.title })}
            className="nv-project-card__link">
            {translate("project.view")} <Link.Icon source={arrowRightIcon} />
        </Link>
    </p>
);
