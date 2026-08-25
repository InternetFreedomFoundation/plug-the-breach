# PlugTheBreach

A public record of data breaches affecting people in India, maintained by the
[Internet Freedom Foundation](https://internetfreedom.in/).

Every record is compiled from public reporting and cited. Nothing in this repository is
derived from breached data itself, and we will not accept contributions that contain any.

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # type-checks, then writes a static site to dist/
npm run preview    # serve dist/ locally
```

## Where the data lives

All records live in a PocketBase instance, split across three collections:
`plugTheBreach` (one per incident), `breachSources` (citations) and
`breachDataTypes` (the taxonomy behind each record's exposed-data list).
The site fetches records at **build time** through a custom Astro content
loader ([`src/lib/pocketbase-loader.ts`](src/lib/pocketbase-loader.ts)) and
validates every record against the schema in
[`src/content.config.ts`](src/content.config.ts): a malformed record fails the
build rather than shipping quietly.

Point the build at your instance:

```bash
cp .env.example .env   # then set POCKETBASE_URL
```

`POCKETBASE_URL` must also be set in the Cloudflare Pages build environment.

### Record shape

| Field          | Notes                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| `slug`         | Stable identifier and the record's URL. Do not change it once published.                                       |
| `org`          | Organisation or system that held the data.                                                                     |
| `date`         | ISO 8601 at the precision we can actually source: `YYYY`, `YYYY-MM` or `YYYY-MM-DD`. `null` if never reported. |
| `affectedMn`   | People affected, **in millions**, as reported. `null` if no figure was reported — never estimate.              |
| `acknowledged` | `yes`, `partial`, `no`, `denied` or `unknown`. See below.                                                      |
| `exposed`      | Categories of data exposed, stored as relations to `breachDataTypes` records.                                  |
| `statement`    | What the organisation said publicly, if anything. May contain basic HTML.                                      |
| `redressal`    | What was offered to affected people, if anything. May contain basic HTML.                                      |
| `notes`        | Context: how it happened, who claimed it, disputed figures. May contain basic HTML.                            |
| `sources`      | URLs to published reporting, stored as relations to `breachSources` records. At least one, please.             |
| `legacyId`     | Airtable ID from the original tracker. Only on pre-2024 records; keeps old permalinks alive.                   |

### The `acknowledged` field

This is the field the project exists for, so it is worth getting right.

- `yes` — the entity publicly confirmed the breach.
- `partial` — confirmed an incident but disputed or withheld its scope.
- `no` — has not publicly acknowledged it.
- `denied` — publicly denied it.
- `unknown` — claimed by a third party (a forum listing, a ransomware leak site) and not
  independently verified. Treat these as allegations, and say so in `note`.

## Adding or correcting a record

Edit the record in the PocketBase admin console, then rebuild the site (a push
to `main` triggers Cloudflare Pages; for data-only edits you can also trigger
the build hook directly). Please include at least one linked `sources` record
pointing at published reporting, and prefer established outlets over aggregator
blogs. If the only source is a dark-web listing, the record belongs in
`unknown`.

If you change or add a `slug`, run:

```bash
npm run redirects   # regenerates public/_redirects from legacyId values
```

## Layout

```
src/content.config.ts            schema, enforced at build time
src/content/blog/                long-form posts (markdown)
src/lib/breaches.ts              formatting, sorting and summary helpers
src/lib/pocketbase-loader.ts     build-time loader: PocketBase -> content layer
src/pages/                       routes, incl. /breaches.json and /breaches.csv exports
scripts/generate-redirects.mjs   regenerates public/_redirects
public/_redirects                Airtable-era permalinks -> current slugs
```

## History

The site was previously built with Gridsome, sourcing records from Airtable at build
time. Airtable was retired, which left the build unable to run at all. It was rebuilt on
Astro with the dataset committed to the repository, so the site builds from a clean
checkout with no credentials. The dataset later moved into PocketBase, fetched at
build time; the committed JSON file was retired with it.
