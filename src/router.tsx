import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { CharacterPage } from 'src/pages/Character';
import { NotFoundPage } from 'src/pages/NotFound';
import { PeoplePage } from 'src/pages/People';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PeoplePage />,
  },
  {
    path: '/:id',
    element: <CharacterPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
