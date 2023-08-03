export interface Character {
  id: string; // '1'
  name: string; // 'Luke Skywalker'
  height: string; // '172'
  mass: string; // '77',
  hairColor: string; // 'blond'
  skinColor: string; // 'fair'
  eyeColor: string; // 'blue'
  birthYear: string; // '19BBY'
  gender: string; // 'male'
  homeworld: string; // 'https://swapi.dev/api/planets/1/'
  films: string[]; // ['https://swapi.dev/api/films/1/']
  species: string[]; // []
  vehicles: string[]; // ['https://swapi.dev/api/vehicles/14/']
  starships: string[]; // ['https://swapi.dev/api/starships/12/']
  created: string; // '2014-12-09T13:50:51.644000Z'
  edited: string; // '2014-12-20T21:17:56.891000Z'
}
