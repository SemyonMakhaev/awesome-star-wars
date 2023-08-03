import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import './MainLayout.css';

export function MainLayout({ children, ...restProps }: PropsWithChildren) {
  return (
    <div {...restProps} className="MainLayout">
      <CssBaseline />
      <Header />
      <main className="MainLayout-Content">
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {children}
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}
