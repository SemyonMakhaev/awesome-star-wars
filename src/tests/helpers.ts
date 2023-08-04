import { Character, People } from 'src/api/types';

/* eslint-disable camelcase */
const baseMockCaracter: Character.Response = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['https://swapi.dev/api/films/1/'],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/14/'],
  starships: ['https://swapi.dev/api/starships/12/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};
/* eslint-enable camelcase */

export function createCharacterMock(mockCharacter: Partial<Character.Response> = {}) {
  return {
    ...baseMockCaracter,
    ...mockCharacter,
  };
}

const baseMockPeople: People.Response = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [
    createCharacterMock({ name: 'Luce Skywalker' }),
    createCharacterMock({ name: 'Darth Wader' }),
    createCharacterMock({ name: 'Yoda' }),
  ],
};

export function createPeopleMock(mockPeople: Partial<People.Response> = {}) {
  return {
    ...baseMockPeople,
    ...mockPeople,
  };
}
