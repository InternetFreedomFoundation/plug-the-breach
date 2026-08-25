import type { APIRoute } from 'astro';
import { allBreaches } from '../lib/breaches';

export const GET: APIRoute = async () => {
  const breaches = await allBreaches();
  return new Response(JSON.stringify(breaches, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': 'attachment; filename="plugthebreach.json"',
    },
  });
};
