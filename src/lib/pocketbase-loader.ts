import type { Loader } from 'astro/loaders';
import PocketBase from 'pocketbase';

export const PB_COLLECTIONS = {
  breaches: 'plugTheBreach',
  dataTypes: 'breachDataTypes',
  sources: 'breachSources',
} as const;

interface PocketBaseBreach {
  id: string;
  slug?: string;
  legacyId?: string;
  org?: string;
  date?: string;
  affectedMn?: number | null;
  acknowledged?: string;
  statement?: string;
  redressal?: string;
  notes?: string;
  expand?: {
    exposed?: { name?: string }[];
    sources?: { url?: string }[];
  };
}

export function pbBreaches(options: { url: string | undefined }): Loader {
  return {
    name: 'pocketbase-breaches',
    load: async ({ store, parseData, logger }) => {
      if (!options.url) {
        throw new Error('[pocketbase-breaches] POCKETBASE_URL is not set.');
      }
      const pb = new PocketBase(options.url.replace(/\/+$/, ''));

      logger.info(`Fetching breaches from ${options.url}`);
      const records = await pb
        .collection(PB_COLLECTIONS.breaches)
        .getFullList<PocketBaseBreach>({ sort: 'slug', expand: 'exposed,sources' });

      store.clear();

      const seen = new Set<string>();
      for (const record of records) {
        const slug = record.slug ?? record.id;
        if (seen.has(slug)) {
          throw new Error(`[pocketbase-breaches] Duplicate slug "${slug}".`);
        }
        seen.add(slug);

        let data;
        try {
          data = await parseData({ id: slug, data: toBreach(record) });
        } catch (cause) {
          throw new Error(`[pocketbase-breaches] Record "${slug}" failed schema validation.`, {
            cause,
          });
        }
        store.set({ id: slug, data });
      }

      logger.info(`Loaded ${records.length} breach records.`);
    },
  } satisfies Loader;
}

function toBreach(record: PocketBaseBreach) {
  return {
    slug: record.slug,
    legacyId: record.legacyId || null,
    org: record.org,
    // Dates are text because sourced precision varies (YYYY / YYYY-MM / YYYY-MM-DD).
    date: record.date || null,
    // Empty numbers read as 0 in PocketBase; the dataset's "no figure" is null.
    affectedMn: record.affectedMn || null,
    acknowledged: record.acknowledged,
    statement: record.statement ?? '',
    redressal: record.redressal ?? '',
    notes: record.notes ?? '',
    exposed: (record.expand?.exposed ?? [])
      .map((type) => type.name)
      .filter((name): name is string => typeof name === 'string'),
    sources: (record.expand?.sources ?? [])
      .map((source) => source.url)
      .filter((url): url is string => typeof url === 'string'),
  };
}
