import { getCollection, type CollectionEntry } from 'astro:content';

export type Breach = CollectionEntry<'breaches'>['data'];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Dates are stored at the precision we can actually source, so render them at
 * that precision instead of inventing a day we do not know.
 */
export function formatDate(date: string | null): string {
  if (!date) return 'Not disclosed';
  const [y, m, d] = date.split('-');
  const month = m ? MONTHS[Number(m) - 1] : undefined;
  if (d && month) return `${Number(d)} ${month} ${y}`;
  if (month) return `${month} ${y}`;
  return y;
}

/** Sortable key that keeps undated records at the end of a descending sort. */
export function dateKey(date: string | null): string {
  if (!date) return '';
  const [y, m, d] = date.split('-');
  return `${y}-${m ?? '00'}-${d ?? '00'}`;
}

export function year(date: string | null): string | null {
  return date ? date.slice(0, 4) : null;
}

/**
 * The dataset stores scale in millions because that is how it was collected,
 * but "0.29 million" reads badly. Render smaller figures as whole people.
 */
export function formatAffected(mn: number | null): string {
  if (mn === null || mn === 0) return 'Not disclosed';
  if (mn >= 1) {
    const n = Number.isInteger(mn) ? mn : Number(mn.toFixed(2));
    return `${n.toLocaleString('en-IN')} million`;
  }
  return Math.round(mn * 1_000_000).toLocaleString('en-IN');
}

/**
 * The running total is collected in millions, which stops reading as a quantity
 * somewhere past a few thousand. Promote it to billions once it gets there.
 */
export function formatTotalMn(mn: number): string {
  if (mn >= 1000) return `${(mn / 1000).toFixed(2)} billion`;
  return `${Math.round(mn).toLocaleString('en-IN')} million`;
}

export const ACK_LABELS: Record<Breach['acknowledged'], string> = {
  yes: 'Acknowledged',
  partial: 'Partly acknowledged',
  no: 'Not acknowledged',
  denied: 'Denied',
  unknown: 'Unverified',
};

export const ACK_DESCRIPTIONS: Record<Breach['acknowledged'], string> = {
  yes: 'The affected entity publicly confirmed the breach.',
  partial: 'The entity confirmed an incident but disputed or withheld its scope.',
  no: 'The entity has not publicly acknowledged the breach.',
  denied: 'The entity publicly denied the breach.',
  unknown: 'Claimed by a third party and not independently verified.',
};

/** Newest first; records with no known date sort last. */
export async function allBreaches(): Promise<Breach[]> {
  const entries = await getCollection('breaches');
  return entries
    .map((entry) => entry.data)
    .sort((a, b) => {
      const ka = dateKey(a.date);
      const kb = dateKey(b.date);
      if (!ka && !kb) return a.org.localeCompare(b.org);
      if (!ka) return 1;
      if (!kb) return -1;
      return kb.localeCompare(ka);
    });
}

export function summarise(breaches: Breach[]) {
  const dated = breaches.filter((b) => b.date);
  const years = dated.map((b) => Number(b.date!.slice(0, 4)));
  const disclosedScale = breaches
    .filter((b) => b.affectedMn)
    .reduce((sum, b) => sum + (b.affectedMn ?? 0), 0);
  const unacknowledged = breaches.filter(
    (b) => b.acknowledged === 'no' || b.acknowledged === 'denied' || b.acknowledged === 'unknown',
  ).length;
  return {
    total: breaches.length,
    earliest: years.length ? Math.min(...years) : null,
    latest: years.length ? Math.max(...years) : null,
    disclosedScale,
    unacknowledged,
    undated: breaches.length - dated.length,
  };
}
