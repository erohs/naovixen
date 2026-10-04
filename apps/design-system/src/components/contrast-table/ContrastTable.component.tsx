import type { FunctionComponent } from "react";
import { contrastRequirements, darkTheme, lightTheme } from "@naovixen/theming";
import { translate } from "../../translate/Translate.const";
import { formatContrast } from "./functions/FormatContrast.function";

export const ContrastTable: FunctionComponent = () => (
    <table className="nv-contrast-table">
        <caption>{translate("contrastTable.caption")}</caption>
        <thead>
            <tr>
                <th scope="col">{translate("contrastTable.foreground")}</th>
                <th scope="col">{translate("contrastTable.background")}</th>
                <th scope="col">{translate("contrastTable.needs")}</th>
                <th scope="col">{translate("contrastTable.light")}</th>
                <th scope="col">{translate("contrastTable.dark")}</th>
            </tr>
        </thead>
        <tbody>
            {contrastRequirements.map((requirement) => (
                <tr key={`${requirement.foreground} on ${requirement.background}`}>
                    <td>{requirement.foreground}</td>
                    <td>{requirement.background}</td>
                    <td>{requirement.minimumRatio}</td>
                    <td>{formatContrast(requirement, lightTheme)}</td>
                    <td>{formatContrast(requirement, darkTheme)}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
