import React, { useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { usePeople } from 'src/hooks/usePeople';
import { Loader } from 'src/components/Loader';
import { Card } from 'src/pages/People/components/Card';

export function Items() {
  const { people, isFetching, hasMore, fetchPeople } = usePeople();

  const items = useMemo(
    () =>
      people.map(
        character => (
          <Grid key={character.id} item xs={12} sm={6} md={4}>
            <Card characterId={character.id} />
          </Grid>
        ),
      ),
    [people],
  );

  if (people.length === 0) {
    if (isFetching) {
      return <Loader />;
    }

    return (
      <Box
        display="flex"
        justifyContent="center"
        marginTop={8}
      >
        <Typography paragraph variant="body2" color="text.secondary" align="center">
          No characters found
        </Typography>
      </Box>
    );
  }

  return (
    <InfiniteScroll
      dataLength={people.length}
      next={fetchPeople}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {items}
        </Grid>
      </Container>
    </InfiniteScroll>
  );
}
