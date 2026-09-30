import { defineConfig } from 'vitest/config';

/** For any package that renders React in its tests. */
export const reactTestConfig = defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['@naovixen/nvpack/vitest-setup'],
    },
});
