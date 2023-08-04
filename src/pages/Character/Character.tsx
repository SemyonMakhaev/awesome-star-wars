import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Info } from './components/Info';

export function CharacterPage() {
  return (
    <>
      <Link to="/" data-testid="back-link">
        <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
          <ArrowBack /> Back to list
        </Box>
      </Link>
      <Info />
    </>
  );
}
