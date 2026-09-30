import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

/** Testing Library only cleans up by itself when Vitest globals are on, and they are off. */
afterEach(() => {
    cleanup();
});
