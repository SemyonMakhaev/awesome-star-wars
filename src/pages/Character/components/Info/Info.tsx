import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Loader } from 'src/components/Loader';
import { useCharacter } from 'src/hooks/useCharacter';

export function Info() {
  const { id } = useParams();
  const { character, isFetching } = useCharacter(id ?? '');

  if (isFetching) {
    return <Loader />;
  }

  if (!character) {
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
          Character not found
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Typography gutterBottom variant="h2" component="h1" data-testid="character-name">
        {character.name}
      </Typography>
      <Stack spacing={2}>
        <div>
          Gender: <Chip label={character.gender} color="info" data-testid="character-gender" />
        </div>
        <div>
          Height: <Chip label={character.height} variant="outlined" data-testid="character-height" />
        </div>
        <div>
          Mass: <Chip label={character.height} variant="outlined" data-testid="character-mass" />
        </div>
        <div>
          Hair color:{' '}
          <Chip label={character.hairColor} variant="outlined" color="secondary" data-testid="character-hair" />
        </div>
        <div>
          Eye color: <Chip label={character.eyeColor} variant="outlined" color="primary" data-testid="character-eye" />
        </div>
        <div>
          Skin color: <Chip label={character.skinColor} variant="outlined" color="info" data-testid="character-skin" />
        </div>
      </Stack>
    </>
  );
}
