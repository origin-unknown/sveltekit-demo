import { base } from '$app/paths';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const timeline = await fetch(base + `/data/${params.lang}/timeline.json`)
    .then(resp => resp.ok && resp.json());
  return { timeline };
}
