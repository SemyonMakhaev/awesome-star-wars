import { Character as ApiCharacter } from 'src/api/types';
import { Character, EyeColor, Gender, HairColor, SkinColor } from 'src/types/character';

export function normalizeCharacter(character: ApiCharacter.Response): Character | undefined {
  const id = character.url.match(/\/([^/]+?)\/?$/)?.[1];

  if (!id) {
    return undefined;
  }

  return {
    id,
    name: character.name,
    height: Number(character.height),
    mass: Number(character.mass),
    hairColor: character.hair_color.split(', ') as HairColor[],
    skinColor: character.skin_color.split(', ') as SkinColor[],
    eyeColor: character.eye_color.split(', ') as EyeColor[],
    birthYear: character.birth_year,
    gender: character.gender as Gender,
    homeworld: character.homeworld,
    films: character.films,
    species: character.species,
    vehicles: character.vehicles,
    starships: character.starships,
    created: character.created,
    edited: character.edited,
  };
}
