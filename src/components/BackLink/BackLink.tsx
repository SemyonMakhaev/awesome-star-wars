import React, { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import ArrowBack from '@mui/icons-material/ArrowBack';

interface BackLinkProps {
  readonly to: LinkProps['to'];
}

export function BackLink({ to, children }: PropsWithChildren<BackLinkProps>) {
  return (
    <Link to={to} data-testid="back-link">
      <MuiLink>
        <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
          <ArrowBack /> {children}
        </Box>
      </MuiLink>
    </Link>
  );
}
