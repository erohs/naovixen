import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';

/** Run locally only: `pnpm --filter design-system dev`. It is never built or deployed. */
export default defineConfig({
    server: { port: 3100 },
    plugins: [viteReact()],
});
