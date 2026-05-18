import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/proyectos/'}),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    duration: z.string(),
    location: z.string(),
    publishedAt: z.date().nullish(),
  }),
});

export const collections = { proyectos };
