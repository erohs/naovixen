import { slugify } from "./slugify";

export const postPath = (id: string): string => `/blog/${id}/`;

export const projectPath = (id: string): string => `/work/${id}/`;

export const topicPath = (topic: string): string => `/blog/topics/${slugify(topic)}/`;
