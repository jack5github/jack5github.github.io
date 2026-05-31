// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://jack5github.github.io',
	markdown: {
		smartypants: false,
	},
	redirects: {
		'/article/permanently-mount-storage-device-linux-guide': '/article/gparted',
	},
	integrations: [mdx()],
});
