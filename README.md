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

Astro 5, Tailwind 4, no runtime backend. `npm run build` produces a fully static
`dist/` directory, which is what Cloudflare Pages deploys.

## Where the data lives

All records are in a single file: [`src/data/breaches.json`](src/data/breaches.json).

There is no CMS and no API key required to build the site — the JSON *is* the database.
It is loaded through an Astro content collection, so the schema in
[`src/content.config.ts`](src/content.config.ts) is enforced at build time: a malformed
record fails the build rather than shipping quietly.

### Record shape

| Field | Notes |
| --- | --- |
| `slug` | Stable identifier and the record's URL. Do not change it once published. |
| `org` | Organisation or system that held the data. |
| `date` | ISO 8601 at the precision we can actually source: `YYYY`, `YYYY-MM` or `YYYY-MM-DD`. `null` if never reported. |
| `affectedMn` | People affected, **in millions**, as reported. `null` if no figure was reported — never estimate. |
| `acknowledged` | `yes`, `partial`, `no`, `denied` or `unknown`. See below. |
| `exposed` | Array of the categories of data exposed. |
| `statement` | What the organisation said publicly, if anything. |
| `redressal` | What was offered to affected people, if anything. |
| `note` | Context: how it happened, who claimed it, disputed figures. |
| `sources` | Array of URLs to published reporting. At least one, please. |
| `legacyId` | Airtable ID from the original tracker. Only on pre-2024 records; keeps old permalinks alive. |

### The `acknowledged` field

This is the field the project exists for, so it is worth getting right.

- `yes` — the entity publicly confirmed the breach.
- `partial` — confirmed an incident but disputed or withheld its scope.
- `no` — has not publicly acknowledged it.
- `denied` — publicly denied it.
- `unknown` — claimed by a third party (a forum listing, a ransomware leak site) and not
  independently verified. Treat these as allegations, and say so in `note`.

## Adding or correcting a record

Edit `src/data/breaches.json`, then open a pull request. Please include at least one
`sources` link to published reporting, and prefer established outlets over aggregator
blogs. If the only source is a dark-web listing, the record belongs in `unknown`.

If you change or add a `slug`, run:

```bash
npm run redirects   # regenerates public/_redirects from legacyId values
```

## Layout

```
src/data/breaches.json   the dataset
src/content.config.ts    schema, enforced at build time
src/content/blog/        long-form posts (markdown)
src/lib/breaches.ts      formatting, sorting and summary helpers
src/pages/               routes, incl. /breaches.json and /breaches.csv exports
public/_redirects        Airtable-era permalinks -> current slugs
```

## History

The site was previously built with Gridsome, sourcing records from Airtable at build
time. Airtable was retired, which left the build unable to run at all. It was rebuilt on
Astro with the dataset committed to the repository, so the site builds from a clean
checkout with no credentials.
