import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

/** A glossy paw print sticker, 1em square. Filled with the text colour, so a parent can recolour it. */
export const Paw: FunctionComponent<Omit<ComponentPropsWithRef<'svg'>, 'children'>> = ({
    className,
    ...svgProps
}) => (
    <svg
        viewBox="0 0 24 24"
        {...svgProps}
        className={joinClassNames('nx-paw', className)}
        aria-hidden="true"
        focusable="false"
    >
        <path d="M7 16.6C6.8 13.3 9.4 11.6 12.2 11.7 15.2 11.8 17.5 14 17.1 16.9 16.8 19.6 14 21 11.3 20.6 8.8 20.2 7.1 18.8 7 16.6Z" />
        <path d="M5.38 12.8A2 2.6-32 0 1 2.62 8.4 2 2.6-32 0 1 5.38 12.8ZM9.29 7.96A2.1 2.8-10 0 1 8.31 2.44 2.1 2.8-10 0 1 9.29 7.96ZM14.62 8.14A2.1 2.8 12 0 1 15.78 2.66 2.1 2.8 12 0 1 14.62 8.14ZM18.6 12.97A2 2.5 34 0 1 21.4 8.83 2 2.5 34 0 1 18.6 12.97Z" />
        <ellipse
            className="nx-paw__shine"
            cx="10.2"
            cy="14"
            rx="1.4"
            ry="0.85"
            transform="rotate(-20 10.2 14)"
        />
    </svg>
);
