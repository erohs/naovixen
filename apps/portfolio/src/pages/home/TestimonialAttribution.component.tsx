import type { FunctionComponent } from "react";
import { translate } from "../../translate/Translate.const";

/** Who said it. The striped circle stands in for their photo until there is one. */
export const TestimonialAttribution: FunctionComponent = () => (
    <figcaption className="nv-testimonial-attribution">
        <span
            role="img"
            aria-label={translate("photoPlaceholder.of", { name: translate("testimonial.name") })}
            className="nv-testimonial-attribution__photo"
        />
        <span className="nv-testimonial-attribution__text">
            <span className="nv-testimonial-attribution__name">{translate("testimonial.name")}</span>
            <span className="nv-testimonial-attribution__role">{translate("testimonial.role")}</span>
        </span>
    </figcaption>
);
