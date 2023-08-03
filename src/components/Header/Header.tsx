import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <AutoAwesomeIcon sx={{ mr: 2 }} />
        <Typography noWrap variant="h6" color="inherit">
          Star wars explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
