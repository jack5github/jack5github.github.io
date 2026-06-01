// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://jack5github.github.io',
	markdown: {
		processor: unified({ smartypants: false }),
	},
	redirects: {
		'/article/permanently-mount-storage-device-linux-guide': '/article/gparted',
	},
	integrations: [mdx(), pagefind()],
});
