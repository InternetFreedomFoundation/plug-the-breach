import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { pbBreaches } from './lib/pocketbase-loader';

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
  // Records are keyed by their URL slug; the loader fetches from PocketBase
  // and maps each record into the shape below, which this schema enforces.
  loader: pbBreaches({ url: import.meta.env.POCKETBASE_URL }),
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
    notes: z.string().default(''),
  }),
});

export const collections = { blog, breaches };
