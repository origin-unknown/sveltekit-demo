import { base } from '$app/paths';
import { defaultLocale, locales } from '$lib/translations';

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

const getPathnameWithoutPrefix = (pathname) => {
  return pathname.substring(base.length);
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const { url, request } = event;
  const { pathname } = url;
  const _pathname = getPathnameWithoutPrefix(pathname);

  if (routeRegex.test(_pathname)) {
    const supportedLocales = locales.get();

    let _l = `${_pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase();
    let locale = supportedLocales.find((l) => l === _l);

    if (!locale) {
      locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
      if (!supportedLocales.includes(locale)) locale = defaultLocale;

      let suffix = _pathname.substring(_l.length + 1);
      return new Response(undefined, { headers: { 'location': `${base}/${locale}${suffix}` }, status: 302 }); // 301
    }

    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
    });
  }
  return await resolve(event);
}
