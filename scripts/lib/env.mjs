import { readFileSync } from 'node:fs';

/**
 * Minimal .env loader shared by the maintenance scripts. Values already set
 * in the real environment always win over file entries.
 */
export function loadEnvFile(path = '.env') {
  let text;
  try {
    text = readFileSync(path, 'utf8');
  } catch {
    return;
  }
  for (const line of text.split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const [, key, raw] = match;
    if (process.env[key] === undefined) {
      process.env[key] = (raw ?? '').trim().replace(/^['"]|['"]$/g, '');
    }
  }
}
