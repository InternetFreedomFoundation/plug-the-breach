// Regenerates public/_redirects from the dataset so Airtable-era permalinks keep working.
import { readFileSync, writeFileSync } from 'node:fs';

const breaches = JSON.parse(readFileSync('src/data/breaches.json', 'utf8'));
const lines = [
  '# Preserve permalinks from the Airtable-era tracker (record IDs -> slugs).',
  '# Regenerate with: npm run redirects',
];
for (const breach of breaches) {
  if (breach.legacyId) {
    lines.push(`/breach/${breach.legacyId}  /breach/${breach.slug}  301`);
  }
}
lines.push(
  '',
  '# Retired posts: the about copy now lives at /about, and the 2022 intro was removed.',
  '/blog/intro  /about  301',
  '/blog/about-the-initiative  /about  301',
);
writeFileSync('public/_redirects', lines.join('\n') + '\n');
console.log(`Wrote ${lines.length} lines to public/_redirects`);
