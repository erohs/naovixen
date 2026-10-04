import { createServerFn } from "@tanstack/react-start";
import type { IPostSearchCriteria } from "@naovixen/cms";
import { createSanityBlogRepository } from "../../functions/CreateSanityBlogRepository.function";
import { isPreviewResponse } from "../../../preview/functions/IsPreviewResponse.function";

export const searchPostsOnServer = createServerFn()
    .validator((criteria: IPostSearchCriteria) => criteria)
    .handler(async ({ data: criteria }) => createSanityBlogRepository(await isPreviewResponse()).searchPosts(criteria));
