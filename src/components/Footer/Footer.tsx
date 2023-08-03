import React from 'react';
import Box from '@mui/material/Box';
import { Copyright } from 'src/components/Copyright';

export function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Copyright />
    </Box>
  );
}
