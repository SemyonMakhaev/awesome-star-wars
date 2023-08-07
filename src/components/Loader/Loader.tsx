import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Spinner from '@mui/material/CircularProgress';

export function Loader(props: BoxProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      data-testid="loader"
      {...props}
    >
      <Spinner />
    </Box>
  );
}
