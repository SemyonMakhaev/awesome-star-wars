import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useCharacter } from 'src/hooks/useCharacter';

interface CardProps {
  readonly characterId: string;
}

export function Card({ characterId }: CardProps) {
  const { character } = useCharacter(characterId);

  if (!character) {
    return null;
  }

  return (
    <MuiCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" textOverflow="ellipsis" overflow="hidden">
          {character.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${character.id}`}>
          <Button size="small">More</Button>
        </Link>
      </CardActions>
    </MuiCard>
  );
}
