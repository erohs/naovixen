import type { FunctionComponent } from "react";
import { Heading, HeadingSize, SectionHeading } from "@naovixen/components";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";

export const HeadingsSection: FunctionComponent = () => (
    <>
        <Example name={translate("textAndMedia.heading")}>
            <div className="nv-text-and-media-page__column">
                {Object.values(HeadingSize).map((size) => (
                    <Heading key={size} level={4} size={size}>
                        {translate("textAndMedia.headingAtSize", { size })}
                    </Heading>
                ))}
            </div>
        </Example>
        <Example name={translate("textAndMedia.sectionHeading")}>
            <SectionHeading level={4} intro={translate("textAndMedia.sectionHeadingIntro")}>
                {translate("textAndMedia.sectionHeadingText")}
            </SectionHeading>
        </Example>
        <Example name={translate("textAndMedia.numberedSectionHeading")}>
            <SectionHeading level={4} number="02">
                {translate("textAndMedia.numberedSectionHeadingText")}
            </SectionHeading>
        </Example>
    </>
);
