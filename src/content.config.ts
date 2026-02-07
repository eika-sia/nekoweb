import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		width: z.number().default(1),
	}),
});

export const collections = { blog };
