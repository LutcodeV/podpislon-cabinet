import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		svgLoader({
			svgoConfig: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								// viewBox is required to resize SVGs with CSS.
								// @see https://github.com/svg/svgo/issues/1128
								removeViewBox: false,
							},
						},
					},
				],
			},
		}),
		AutoImport({
			imports: ['vue'],
			dts: 'src/auto-imports.d.ts',
		}),
		Components(),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '@/assets/styles/mixins.scss' as *;
          @use '@/assets/styles/style.scss' as *;
        `,
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
