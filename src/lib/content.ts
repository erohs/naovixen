import { getCollection, type CollectionEntry } from "astro:content";
import { newestFirst } from "./posts";
import { inOrder } from "./projects";

/** Every post a reader may see, newest first. Drafts show only while developing. */
export const getPublishedPosts = async (): Promise<CollectionEntry<"blog">[]> =>
    newestFirst(await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft));

export const getProjects = async (): Promise<CollectionEntry<"work">[]> => inOrder(await getCollection("work"));
