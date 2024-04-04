import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), db()]
});
