import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Character } from 'src/types/character';

interface CharacterInfoProps {
  readonly character: Character;
}

export function CharacterInfo({ character }: CharacterInfoProps) {
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
          Mass: <Chip label={character.mass} variant="outlined" data-testid="character-mass" />
        </div>
        <div>
          Hair color:{' '}
          {character.hairColor.map(color => (
            <Chip
              key={`hair-color-${color}`}
              sx={{ mr: 1, mb: 1 }}
              label={color}
              variant="outlined"
              color="secondary"
              data-testid="character-hair"
            />
          ))}
        </div>
        <div>
          Eye color:{' '}
          {character.eyeColor.map(color => (
            <Chip
              key={`eye-color-${color}`}
              sx={{ mr: 1, mb: 1 }}
              label={color}
              variant="outlined"
              color="primary"
              data-testid="character-eye"
            />
          ))}
        </div>
        <div>
          Skin color:{' '}
          {character.skinColor.map(color => (
            <Chip
              key={`skin-color-${color}`}
              sx={{ mr: 1, mb: 1 }}
              label={color}
              variant="outlined"
              color="info"
              data-testid="character-skin"
            />
          ))}
        </div>
      </Stack>
    </>
  );
}
