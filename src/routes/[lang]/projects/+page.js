import { base } from '$app/paths';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const projects = await fetch(base + `/data/${params.lang}/projects.json`)
    .then(resp => resp.ok && resp.json());
  return { projects };
}
