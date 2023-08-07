export enum Gender {
  Male = 'male',
  Female = 'female',
  Hermaphrodite = 'hermaphrodite',
  NotAvailable = 'n/a',
  None = 'none',
}

export enum HairColor {
  NotAvailable = 'n/a',
  None = 'none',
  Blond = 'blond',
  Blonde = 'blonde',
  Brown = 'brown',
  Grey = 'grey',
  Balck = 'black',
  Auburn = 'auburn',
  White = 'white',
}

export enum SkinColor {
  Fair = 'fair',
  Gold = 'gold',
  White = 'white',
  Blue = 'blue',
  Light = 'light',
  Red = 'red',
  Unknown = 'unknown',
  Green = 'green',
  GreenTan = 'green-tan',
  Brown = 'brown',
  Pale = 'pale',
  Metal = 'metal',
  Dark = 'dark',
  BrownMottle = 'brown mottle',
  Grey = 'grey',
  MottledGreen = 'mottled green',
  Orange = 'orange',
  Yellow = 'yellow',
  Tan = 'tan',
  Silver = 'silver',
}

export enum EyeColor {
  Blue = 'blue',
  Yellow = 'yellow',
  Red = 'red',
  Brown = 'brown',
  BlueGray = 'blue-gray',
  Black = 'black',
  Orange = 'orange',
  Hazel = 'hazel',
  Pink = 'pink',
  Gold = 'gold',
  Green = 'green',
  White = 'white',
  Unknown = 'unknown',
}

export interface Character {
  id: string; // '1'
  name: string; // 'Luke Skywalker'
  height: number; // 172
  mass: number; // 77,
  hairColor: HairColor[];
  skinColor: SkinColor[];
  eyeColor: EyeColor[];
  birthYear: string; // '19BBY'
  gender: Gender;
  homeworld: string; // 'https://swapi.dev/api/planets/1/'
  films: string[]; // ['https://swapi.dev/api/films/1/']
  species: string[]; // []
  vehicles: string[]; // ['https://swapi.dev/api/vehicles/14/']
  starships: string[]; // ['https://swapi.dev/api/starships/12/']
  created: string; // '2014-12-09T13:50:51.644000Z'
  edited: string; // '2014-12-20T21:17:56.891000Z'
}
