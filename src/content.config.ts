import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string().optional(),
      tags: z.array(z.string()).optional(),
      hero: image().optional(),
      status: z.enum(["draft", "published"]).default("published"),
      series: z.object({ name: z.string(), order: z.number() }).optional(),
    }),
});

export const collections = { writing };
