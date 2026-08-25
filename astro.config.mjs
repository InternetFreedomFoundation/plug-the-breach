import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

/**
 * Send links that leave the site to a new tab. Applied to markdown-rendered
 * prose; anchors written directly in .astro files set target themselves.
 */
function rehypeExternalLinks() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
          node.properties.target = '_blank';
          node.properties.rel = 'noreferrer';
        }
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://plugthebreach.in',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare()
});
