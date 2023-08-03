import { Character as ApiCharacter } from 'src/api/types';
import { Character } from 'src/types/character';

export function normalizeCharacter(character: ApiCharacter.Response): Character | undefined {
  const id = character.url.match(/\/([^/]+?)\/?$/)?.[1];

  if (!id) {
    return undefined;
  }

  return {
    id,
    name: character.name,
    height: character.height,
    mass: character.mass,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
    eyeColor: character.eye_color,
    birthYear: character.birth_year,
    gender: character.gender,
    homeworld: character.homeworld,
    films: character.films,
    species: character.species,
    vehicles: character.vehicles,
    starships: character.starships,
    created: character.created,
    edited: character.edited,
  };
}
