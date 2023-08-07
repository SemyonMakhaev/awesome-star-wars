import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export function ErrorMessage(props: PropsWithChildren) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <AccessibilityNewIcon sx={{ mr: 1 }} />
      <Typography
        paragraph
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mb: 0 }}
        data-testid="not-found-message"
      >
        {props.children}
      </Typography>
    </Box>
  );
}
