import type { FunctionComponent } from 'react';
import { contrastRequirements, darkTheme, lightTheme } from '@naovixen/theming';

import { formatContrast } from './functions/FormatContrast.function';

/** Every colour pair the design uses, measured in both themes against WCAG 2.2 AA. */
export const ContrastTable: FunctionComponent = () => (
    <table className="nv-contrast-table">
        <caption>Contrast of each colour pair</caption>
        <thead>
            <tr>
                <th scope="col">Foreground</th>
                <th scope="col">Background</th>
                <th scope="col">Needs</th>
                <th scope="col">Light</th>
                <th scope="col">Dark</th>
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
