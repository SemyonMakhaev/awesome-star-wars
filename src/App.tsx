import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { YMInitializer } from 'react-yandex-metrika';
import { store } from 'src/store/root';
import { MainLayout } from 'src/layouts/MainLayout';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { CharacterPage } from 'src/pages/Character';
import { ErrorPage } from 'src/pages/ErrorPage';
import { NotFoundPage } from 'src/pages/NotFound';
import { PeoplePage } from 'src/pages/People';

function App() {
  return (
    <ErrorBoundary renderError={() => <ErrorPage />}>
      <StoreProvider store={store}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<PeoplePage />} />
            <Route path="/:id" element={<CharacterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </StoreProvider>
      <YMInitializer
        accounts={[94526988]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      />
    </ErrorBoundary>
  );
}

export default App;
