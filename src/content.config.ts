import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "*.{md,mdx}" }),
    schema: z.object({
        title: z.string().max(100),
        excerpt: z.string().max(200),
        published: z.coerce.date(),
        topics: z.array(z.string().max(30)).default([]),
        draft: z.boolean().default(false),
    }),
});

const work = defineCollection({
    loader: glob({ base: "./src/content/work", pattern: "*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string().max(80),
            summary: z.string().max(200),
            order: z.number().int().positive(),
            featured: z.boolean().default(false),
            stack: z.array(z.string()).min(1),
            screenshot: z.object({ src: image(), alt: z.string().min(1) }).optional(),
        }),
});

const legal = defineCollection({
    loader: glob({ base: "./src/content/legal", pattern: "*.{md,mdx}" }),
    schema: z.object({
        title: z.string().max(100),
        intro: z.string().max(300),
        updated: z.coerce.date(),
    }),
});

export const collections = { blog, work, legal };
