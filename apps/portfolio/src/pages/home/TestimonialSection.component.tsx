import type { FunctionComponent } from "react";
import { Heading } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import { TestimonialAttribution } from "./TestimonialAttribution.component";

/** The heading only names the landmark; the quote speaks for itself on screen. */
export const TestimonialSection: FunctionComponent = () => (
    <section aria-labelledby="testimonial-title" className="nv-testimonial-section">
        <Heading level={2} id="testimonial-title" className="nv-visually-hidden">
            {translate("testimonial.heading")}
        </Heading>
        <figure className="nv-testimonial-section__figure">
            <blockquote className="nv-testimonial-section__quote">
                <p>{translate("testimonial.quote")}</p>
            </blockquote>
            <TestimonialAttribution />
        </figure>
    </section>
);
