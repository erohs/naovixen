import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { foxDetailPath } from './constants/FoxDetailPath.const';
import { foxEyesPath } from './constants/FoxEyesPath.const';
import { foxFurPath } from './constants/FoxFurPath.const';
import { foxOutlinePath } from './constants/FoxOutlinePath.const';

/**
 * The drawing stops at its bottom edge, so placed on a border the fox peeks over it. Always
 * decorative.
 */
export const FoxMascot: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 96 60"
        width="96"
        height="60"
        {...svgProps}
        className={joinClassNames('nx-fox-mascot', className)}
        aria-hidden="true"
        focusable="false"
    >
        <g transform="rotate(-4 48 60)">
            <path className="nx-fox-mascot__face" d={foxOutlinePath} />
            <path className="nx-fox-mascot__fur" d={foxFurPath} />
            <path d={foxOutlinePath} />
            <path d={foxDetailPath} />
            <path className="nx-fox-mascot__eyes" d={foxEyesPath} />
        </g>
    </svg>
);
