import base from './start/vite/default.vite.config.js'
import folder from './start/vite'

/** @type {import('vite').UserConfig} */
const config = {
	// make the route folder config to be appened first
	...folder,

	plugins: [...base.plugins],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  clearScreen: false,
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    sourcemap: true,
    target: ['chrome64', 'edge79', 'firefox62', 'safari11.1'],
  },
	resolve: {
		alias: {
			...base.resolve.alias,

			// append any aliases coming from the route folder config
			...folder?.resolve?.alias
		}
	}
}

export default config
