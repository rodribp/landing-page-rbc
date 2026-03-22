import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    duration: z.string(),
    location: z.string(),
    publishedAt: z.date().nullish(),
  }),
});

export const collections = { proyectos };
