import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright &copy;{' '}
      <Link color="inherit" href="https://awesome-star-wars.vercel.app/">
        Star wars explorer
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
