import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { usePeople } from 'src/hooks/usePeople';
import { Loader } from 'src/components/Loader';
import { Card } from 'src/pages/People/components/Card';

export function Items() {
  const { ref, inView } = useInView();
  const { people, hasMore, isFetching, fetchPeople } = usePeople();

  useEffect(() => {
    if (inView && hasMore) {
      fetchPeople();
    }
  }, [inView, hasMore, fetchPeople, isFetching]);

  const items = useMemo(
    () =>
      people.map(character => (
        <Grid key={character.id} item xs={12} sm={6} md={4}>
          <Card characterId={character.id} />
        </Grid>
      )),
    [people],
  );

  if (people.length === 0 && !hasMore) {
    return (
      <Box display="flex" justifyContent="center" marginTop={8}>
        <Typography paragraph variant="body2" color="text.secondary" align="center">
          No characters found
        </Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {items}
      </Grid>
      <Box ref={ref} sx={{ h: 1 }} />
      {hasMore && isFetching && <Loader />}
    </Container>
  );
}
