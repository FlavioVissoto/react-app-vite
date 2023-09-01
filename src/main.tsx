import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './contexts/auth/auth.provider.tsx';
import { AppRouter } from './modules/viewes/router.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
