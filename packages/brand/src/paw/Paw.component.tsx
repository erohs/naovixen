import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { pawShapes } from './constants/PawShapes.const';

/**
 * A glossy paw print sticker, 1em square, drawn to the design: a pad and four toes, each
 * outlined in the line colour. Filled with the text colour, so a parent can recolour it.
 */
export const Paw: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 100 100"
        {...svgProps}
        className={joinClassNames('nx-paw', className)}
        aria-hidden="true"
        focusable="false"
    >
        <path className="nx-paw__part" {...pawShapes.pad} />
        {pawShapes.toes.map((toe) => (
            <ellipse key={toe.cx} className="nx-paw__part" {...toe} />
        ))}
        <ellipse className="nx-paw__shine" {...pawShapes.shine} />
    </svg>
);
