import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'src/store/root';
import { MainLayout } from 'src/layouts/MainLayout';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { router } from 'src/router';
import { ErrorPage } from 'src/pages/ErrorPage';

function App() {
  return (
    <ErrorBoundary renderError={() => <ErrorPage />}>
      <StoreProvider store={store}>
        <MainLayout>
          <RouterProvider router={router} />
        </MainLayout>
      </StoreProvider>
    </ErrorBoundary>
  );
}

export default App;
