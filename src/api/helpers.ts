import fetch from 'src/api/fetch';
import swapiRoutes from 'src/api/routes';
import { Character, People } from 'src/api/types';

export function fetchPeople(page: number = 1) {
  const params = { page } as People.Query;

  return fetch<People.Response>(swapiRoutes.people, { params });
}

export function fetchCharacter(id: string) {
  const characterPath = swapiRoutes.character(id);

  return fetch<Character.Response>(characterPath);
}
