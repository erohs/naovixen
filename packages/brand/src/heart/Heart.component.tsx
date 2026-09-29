import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

/** A glossy sticker, 1em square. Filled with the text colour, so a parent can recolour it. */
export const Heart: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 24 24"
        {...svgProps}
        className={joinClassNames('nx-heart', className)}
        aria-hidden="true"
        focusable="false"
    >
        <path d="M12 20.6C8.2 17.8 2.9 13.9 3.1 8.8 3.2 5.6 5.4 3.7 7.9 3.8c2 .1 3.4 1.4 4.2 3.3.9-1.8 2.5-3 4.6-2.9 2.7.2 4.5 2.5 4.2 5.4-.4 4.4-4.8 8.1-8.9 11Z" />
        <ellipse
            className="nx-heart__shine"
            cx="7.3"
            cy="8.1"
            rx="1.6"
            ry="1"
            transform="rotate(-35 7.3 8.1)"
        />
    </svg>
);
