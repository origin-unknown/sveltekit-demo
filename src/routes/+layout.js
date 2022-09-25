import { base } from '$app/paths';
import { loadTranslations } from '$lib/translations';

import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons'

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url }) => {
  const { pathname } = url;
  const _pathname = pathname.substring(base.length);
  const lang = `${_pathname.match(/\w+?(?=\/|$)/) || ''}`;
  const route = _pathname.replace(new RegExp(`^/${lang}`), '');

  await loadTranslations(lang, route);

  return {
    stuff: { route, lang },
    sections: [
      { slug: '', title: 'Home', icon: faHome },
      { slug: 'about/', title: 'About', icon: faUser },
      { slug: 'projects/', title: 'Projects', icon: faBriefcase },
      { slug: 'contact/', title: 'Contact', icon: faEnvelopeOpen }
    ]
  };
}
