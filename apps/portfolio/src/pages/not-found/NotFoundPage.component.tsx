import type { FunctionComponent } from "react";
import { arrowRightIcon, ButtonVariant, Heading, LinkButton, Text, TextVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";

export const NotFoundPage: FunctionComponent = () => (
    <div className="nv-page nv-not-found-page">
        <Heading level={1}>{translate("notFound.heading")}</Heading>
        <Text variant={TextVariant.Lead}>{translate("notFound.lead")}</Text>
        <LinkButton href="/" variant={ButtonVariant.Primary} className="nv-not-found-page__home">
            {translate("notFound.home")} <LinkButton.Icon source={arrowRightIcon} />
        </LinkButton>
    </div>
);
