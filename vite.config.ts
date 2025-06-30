import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import { NodePackageImporter } from 'sass-embedded';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
		alias: {
			'@ui': path.resolve(__dirname, './src/shared/ui'),
			'@components': path.resolve(__dirname, './src/components'),
			'@images': path.resolve(__dirname, './src/images'),
			'@pages': path.resolve(__dirname, './src/pages'),
		},
	},
	css: {
		preprocessorOptions: {
		  scss: {
			importers: [new NodePackageImporter()],
		  },
		},
	  },
})
