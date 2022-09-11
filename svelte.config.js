// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()
		adapter: adapter({
       // default options are shown. On some platforms
       // these options are set automatically — see below
       pages: 'build',
       assets: 'build',
			 fallback: false,					// -> page.js: export const prerender = true;
			 // fallback: '200.html', // or use this fallback
			 precompress: false
    }),

		trailingSlash: 'always',

		paths: {
			base: dev ? '' : '/sveltekit-demo'	// set to repository name of github
		}
	}
};

export default config;
