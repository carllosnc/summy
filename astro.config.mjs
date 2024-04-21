import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'

// https://astro.build/config
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },

  integrations: [tailwind(), mdx(), svelte()],
  output: 'static',
  adapter: vercel(),
})
