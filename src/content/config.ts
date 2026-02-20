import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(), 
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const career = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date().optional().or(z.string()), 
    category: z.enum(["work", "education"]),
    description: z.string(),
    hasDetail: z.boolean().optional(),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, projects, career, legal };