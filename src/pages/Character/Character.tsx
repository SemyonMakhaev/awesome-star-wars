import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import { BackLink } from 'src/components/BackLink';
import { ErrorMessage } from 'src/components/ErrorMessage';
import { Loader } from 'src/components/Loader';
import { useCharacter } from 'src/hooks/useCharacter';
import { routes } from 'src/routes';
import { CharacterInfo } from './components/Info';

export function CharacterPage() {
  const { id } = useParams();

  const { character, isFetching } = useCharacter(id ?? '');

  if (isFetching) {
    return <Loader />;
  }

  if (!character || !id) {
    return <ErrorMessage>Character not found</ErrorMessage>;
  }

  return (
    <>
      <BackLink to={routes.people}>Back to list</BackLink>
      <CharacterInfo character={character} />
      <Box sx={{ mt: 4 }}>
        <Link to={routes.editCharacter(id)} >
          <MuiLink>
            <EditIcon fontSize="small" /> Edit hero
          </MuiLink>
        </Link>
      </Box>
    </>
  );
}
