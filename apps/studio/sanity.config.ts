import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { presentationLocations } from "./src/presentation/constants/PresentationLocations.const";
import { previewOrigin } from "./src/presentation/constants/PreviewOrigin.const";
import { sanityProject } from "./src/constants/SanityProject.const";
import { schemaTypes } from "./src/schema/constants/SchemaTypes.const";
import { singletonActions } from "./src/structure/constants/SingletonActions.const";
import { singletonTypes } from "./src/structure/constants/SingletonTypes.const";
import { buildStructure } from "./src/structure/functions/BuildStructure.function";

export default defineConfig({
    name: "default",
    title: "naovixen",
    ...sanityProject,
    plugins: [
        structureTool({ structure: buildStructure }),
        presentationTool({
            previewUrl: {
                initial: previewOrigin,
                previewMode: { enable: "/api/preview/enable", disable: "/api/preview/disable" },
            },
            allowOrigins: ["http://localhost:3000", "https://naovixen.com"],
            resolve: { locations: presentationLocations },
        }),
        visionTool(),
        codeInput(),
    ],
    schema: {
        types: schemaTypes,
        templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },
    document: {
        actions: (actions, { schemaType }) =>
            singletonTypes.has(schemaType)
                ? actions.filter(({ action }) => action !== undefined && singletonActions.has(action))
                : actions,
    },
});
