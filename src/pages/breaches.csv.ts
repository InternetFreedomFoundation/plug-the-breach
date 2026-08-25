import type { APIRoute } from 'astro';
import { allBreaches } from '../lib/breaches';

const COLUMNS = [
  'slug',
  'org',
  'date',
  'affectedMn',
  'acknowledged',
  'exposed',
  'statement',
  'redressal',
  'note',
  'sources',
] as const;

function cell(value: unknown): string {
  if (value === null || value === undefined) return '';
  const text = Array.isArray(value) ? value.join('; ') : String(value);
  // Quote everything that could otherwise break a row, and escape inner quotes.
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export const GET: APIRoute = async () => {
  const breaches = await allBreaches();
  const rows = [
    COLUMNS.join(','),
    ...breaches.map((breach) =>
      COLUMNS.map((column) => cell(breach[column as keyof typeof breach])).join(','),
    ),
  ];
  return new Response(rows.join('\n'), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="plugthebreach.csv"',
    },
  });
};
