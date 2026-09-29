import type { FunctionComponent } from 'react';

import type { ITestimonialAttributionProps } from './interfaces/ITestimonialAttributionProps';

/** Who said it. The striped circle stands in for their photo until there is one. */
export const TestimonialAttribution: FunctionComponent<ITestimonialAttributionProps> = ({
    testimonial,
}) => (
    <figcaption className="nx-testimonial-attribution">
        <span
            role="img"
            aria-label={`Photo placeholder: ${testimonial.name}`}
            className="nx-testimonial-attribution__photo"
        />
        <span className="nx-testimonial-attribution__text">
            <span className="nx-testimonial-attribution__name">{testimonial.name}</span>
            <span className="nx-testimonial-attribution__role">{testimonial.role}</span>
        </span>
    </figcaption>
);
