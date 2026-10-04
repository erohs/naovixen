import type { FunctionComponent } from "react";
import { Image } from "@naovixen/components";
import type { IProjectCardScreenshotProps } from "./interfaces/IProjectCardScreenshotProps";

export const ProjectCardScreenshot: FunctionComponent<IProjectCardScreenshotProps> = ({
    screenshot,
    isAboveTheFold,
}) => (
    <Image
        {...screenshot}
        loading={isAboveTheFold ? "eager" : "lazy"}
        fetchPriority={isAboveTheFold ? "high" : "auto"}
        className="nv-project-card__screenshot"
    />
);
