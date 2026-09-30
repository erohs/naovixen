import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/** Order matters: theming declares the cascade layers that the other stylesheets are filed into. */
import '@naovixen/theming/styles.css';
import '@naovixen/components/styles.css';
import '@naovixen/blocks/styles.css';
import '@naovixen/blog-content/styles.css';
import './index.css';

import { App } from './app/App.component';

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
