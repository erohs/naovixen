import type { FunctionComponent } from "react";
import { useId } from "react";
import { Heading, Icon } from "@naovixen/components";
import { translate } from "../../../../translate/Translate.const";
import type { ISkillGroupProps } from "./interfaces/ISkillGroupProps";

/** The logo repeats the name written beneath it, so the icon stays hidden from screen readers. */
export const SkillGroup: FunctionComponent<ISkillGroupProps> = ({ group }) => {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="nv-skill-group">
            <Heading level={3} id={headingId} className="nv-skill-group__label">
                {translate(group.label)}
            </Heading>
            <ul className="nv-skill-group__skills">
                {group.skills.map((skill) => (
                    <li key={skill.name} className="nv-skill-tile">
                        <span className="nv-skill-tile__logo">
                            <Icon source={skill.logo} />
                        </span>
                        {translate(skill.name)}
                    </li>
                ))}
            </ul>
        </section>
    );
};
