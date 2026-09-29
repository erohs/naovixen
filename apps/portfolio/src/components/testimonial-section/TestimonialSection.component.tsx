import type { FunctionComponent } from 'react';
import { Heading } from '@naovixen/components';
import { Container } from '@naovixen/layout';

import { placeholderTestimonial } from '../../constants/PlaceholderTestimonial.const';
import { TestimonialAttribution } from '../testimonial-attribution/TestimonialAttribution.component';

/** The heading only names the landmark; the quote speaks for itself on screen. */
export const TestimonialSection: FunctionComponent = () => (
    <Container as="section" aria-labelledby="testimonial-title" className="nx-testimonial-section">
        <Heading level={2} id="testimonial-title" className="nx-visually-hidden">
            Testimonial
        </Heading>
        <figure className="nx-testimonial-section__figure">
            <blockquote className="nx-testimonial-section__quote">
                <p>{placeholderTestimonial.quote}</p>
            </blockquote>
            <TestimonialAttribution testimonial={placeholderTestimonial} />
        </figure>
    </Container>
);
