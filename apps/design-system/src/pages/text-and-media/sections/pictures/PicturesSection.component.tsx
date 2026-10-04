import type { FunctionComponent } from "react";
import { Figure, FigureShape, Image } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";
import { exampleImage } from "./constants/ExampleImage.const";

export const PicturesSection: FunctionComponent = () => (
    <>
        <Example name={translate("textAndMedia.image")}>
            <Image src={exampleImage.src} alt={exampleImage.alt} width={320} height={180} />
        </Example>
        <Example name={translate("textAndMedia.figure")}>
            <Figure image={exampleImage} caption={translate("textAndMedia.wideFigureCaption")} />
            <Figure image={exampleImage} shape={FigureShape.Portrait} />
        </Example>
    </>
);
