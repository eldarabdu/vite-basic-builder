import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import svgr from "vite-plugin-svgr"

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 8080,
		open: true,
		host: true,
	},
	build: {
		outDir: "build",
		sourcemap: true,
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
					mantine: ["@mantine/core", "@mantine/hooks"],
				},
			},
		},
	},
	preview: {
		port: 8080,
		host: true,
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern",
			},
		},
	},
})

