import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    published: z.boolean().default(true),
    description: z.string().optional(),
    date_published: z.coerce.date(),
    tags: z.string().optional(),
    og_image: z.string().optional(),
  }),
});

const breaches = defineCollection({
  loader: file('./src/data/breaches.json', {
    // Records are keyed by their URL slug rather than a separate id column.
    parser: (text) =>
      JSON.parse(text).map((record: Record<string, unknown>) => ({
        ...record,
        id: record.slug,
      })),
  }),
  schema: z.object({
    slug: z.string(),
    legacyId: z.string().nullable().default(null),
    org: z.string(),
    /** ISO 8601, truncated to the precision we can actually source: YYYY, YYYY-MM or YYYY-MM-DD. */
    date: z.string().nullable(),
    affectedMn: z.number().nullable(),
    exposed: z.array(z.string()).default([]),
    acknowledged: z.enum(['yes', 'partial', 'no', 'denied', 'unknown']),
    statement: z.string().default(''),
    redressal: z.string().default(''),
    sources: z.array(z.string()).default([]),
    note: z.string().default(''),
  }),
});

export const collections = { blog, breaches };
