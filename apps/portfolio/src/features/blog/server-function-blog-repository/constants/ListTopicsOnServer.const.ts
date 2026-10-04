import { createServerFn } from "@tanstack/react-start";
import { createSanityBlogRepository } from "../../functions/CreateSanityBlogRepository.function";
import { isPreviewResponse } from "../../../preview/functions/IsPreviewResponse.function";

export const listTopicsOnServer = createServerFn().handler(async () =>
    createSanityBlogRepository(await isPreviewResponse()).listTopics(),
);
