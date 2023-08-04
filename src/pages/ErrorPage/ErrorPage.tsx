import React from 'react';
import Typography from '@mui/material/Typography';
import { MainLayout } from 'src/layouts/MainLayout';

export function ErrorPage() {
  return (
    <MainLayout>
      <Typography variant="h2">Something went wrong</Typography>
    </MainLayout>
  );
}
