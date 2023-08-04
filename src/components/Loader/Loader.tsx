import React from 'react';
import Box from '@mui/material/Box';
import Spinner from '@mui/material/CircularProgress';

export function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginTop={8}
      data-testid="loader"
    >
      <Spinner />
    </Box>
  );
}
