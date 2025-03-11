import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		mkcert()
	],
	server: {
		host: '127.0.0.1',
		port: 8080,
		https: true,
		open: true,
	}
})
