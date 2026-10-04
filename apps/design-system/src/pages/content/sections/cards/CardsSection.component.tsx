import type { FunctionComponent } from "react";
import { Card, Heading, Text } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";

export const CardsSection: FunctionComponent = () => (
    <Example name={translate("content.card")}>
        <Card>
            <Heading level={4}>{translate("content.cardHeading")}</Heading>
            <Text>{translate("content.cardText")}</Text>
        </Card>
    </Example>
);
