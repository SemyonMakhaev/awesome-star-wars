import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Filter } from 'src/pages/People/components/Filter';
import { Items } from 'src/pages/People/components/Items';

export function PeoplePage() {
  return (
    <Container maxWidth="sm">
      <Typography
        gutterBottom
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
      >
        Star wars explorer
      </Typography>
      <Typography paragraph variant="h5" align="center" color="text.secondary">
        Spend time with heroes of the favourite story
      </Typography>
      <Filter />
      <Items />
    </Container>
  );
}
