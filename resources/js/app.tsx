import './bootstrap';
import '../css/app.scss';
import i18n from './i18n';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { I18nextProvider } from 'react-i18next';
import { CurrencyProvider } from './CurrencyContext';
import "@fontsource/raleway";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import "@fontsource-variable/open-sans";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {

    const root = createRoot(el);
    root.render(<I18nextProvider i18n={i18n}>
      <CurrencyProvider>
        <App {...props} />
      </CurrencyProvider>
    </I18nextProvider>);
    /*
    hydrateRoot(el, 
      <I18nextProvider i18n={i18n}>
        <CurrencyProvider>
          <App {...props} />
        </CurrencyProvider>
      </I18nextProvider>
    )*/
  },
  progress: {
    color: '#4B5563',
  },
});  