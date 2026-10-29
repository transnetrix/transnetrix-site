import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const practices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/practices' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    key: z.enum(['marcom', 'edtech', 'fintech', 'it', 'advisory']),
    order: z.number(),
    headline: z.string(),
    intro: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    services: z.array(z.object({ title: z.string(), text: z.string() })),
    highlightsTitle: z.string().default('How it runs.'),
    highlights: z.array(z.string()),
    callout: z.string(),
    related: z.array(z.string()).default([]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    key: z.enum(['marcom', 'edtech', 'fintech', 'it']),
    client: z.string(),
    funding: z.string(),
    role: z.string(),
    partner: z.string().optional(),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    stats: z.array(z.object({ value: z.number(), prefix: z.string().default(''), suffix: z.string().default(''), decimals: z.number().default(0), label: z.string() })),
    outcomesTitle: z.string(),
    outcomes: z.array(z.object({ title: z.string(), text: z.string() })),
    facts: z.array(z.object({ label: z.string(), text: z.string() })),
    result: z.string(),
  }),
});

// Articles and news. Files starting with an underscore (such as _template.md) are ignored.
const articles = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['article', 'news']),
    date: z.coerce.date(),
    author: z.string().default('Abid Majeed Khawar'),
    summary: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { practices, work, articles };
