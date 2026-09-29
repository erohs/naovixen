import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { heartShapes } from './constants/HeartShapes.const';

/**
 * A glossy heart sticker, 1em square, drawn to the design: an outline in the line colour with
 * the body inset inside it. The body takes the text colour, so a parent can recolour it.
 */
export const Heart: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 100 100"
        {...svgProps}
        className={joinClassNames('nx-heart', className)}
        aria-hidden="true"
        focusable="false"
    >
        <g transform="rotate(-4 50 50)">
            <polygon className="nx-heart__outline" points={heartShapes.outline} />
            <polygon className="nx-heart__body" points={heartShapes.body} />
            <ellipse className="nx-heart__shine" {...heartShapes.shine} />
        </g>
    </svg>
);
