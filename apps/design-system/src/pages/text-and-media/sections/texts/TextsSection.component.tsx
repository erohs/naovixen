import type { FunctionComponent } from "react";
import { Code, SpeechBubble, Tag, Text, TextVariant } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";

export const TextsSection: FunctionComponent = () => (
    <>
        <Example name={translate("textAndMedia.text")}>
            <div className="nv-text-and-media-page__column">
                {Object.values(TextVariant).map((variant) => (
                    <Text key={variant} variant={variant}>
                        {translate("textAndMedia.textInVariant", { variant })}
                    </Text>
                ))}
            </div>
        </Example>
        <Example name={translate("textAndMedia.codeAndTag")}>
            <Code>pnpm test</Code>
            <Tag>{translate("textAndMedia.accessibility")}</Tag>
            <Tag>{translate("textAndMedia.typeScript")}</Tag>
        </Example>
        <Example name={translate("textAndMedia.speechBubble")}>
            <SpeechBubble>{translate("textAndMedia.speechBubbleText")}</SpeechBubble>
        </Example>
    </>
);
