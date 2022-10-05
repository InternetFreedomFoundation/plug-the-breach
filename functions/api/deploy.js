// Reacts to POST /api/deploy
export async function onRequestPost(request) {
  return new Response(`Deploy hook triggered`);
}
