import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    package: {
      dir: 'package',
      emitTypes: true,
      exports: (fp) => fp === 'index.ts'
    },
    adapter: adapter()
  }
}

export default config
