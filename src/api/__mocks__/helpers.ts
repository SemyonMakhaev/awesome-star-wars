import { Character, People } from 'src/api/types';

let peopleResponse: People.Response | undefined;
let hasPeopleError = false;

function setPeopeResponse(newPeopleResponse: People.Response | undefined) {
  peopleResponse = newPeopleResponse;
}

function setHasPeopeError(newHasPeopleError: boolean) {
  hasPeopleError = newHasPeopleError;
}

let characterResponse: Character.Response | undefined;
let hasCharacterError = false;

function setCharacterResponse(newCharacterResponse: Character.Response | undefined) {
  characterResponse = newCharacterResponse;
}

function setHasCharacterError(newHasCharacterError: boolean) {
  hasCharacterError = newHasCharacterError;
}

export function fetchPeople(_page: number = 1) {
  return new Promise<People.Response | undefined>((resolve, reject) => {
    if (hasPeopleError) {
      reject();

      return;
    }

    resolve(peopleResponse);
  });
}

export function fetchCharacter(_id: string) {
  return new Promise<Character.Response | undefined>((resolve, reject) => {
    if (hasCharacterError) {
      reject();

      return;
    }

    resolve(characterResponse);
  });
}

export const __mockHelpers = {
  // People
  setPeopeResponse,
  setHasPeopeError,
  // Character
  setCharacterResponse,
  setHasCharacterError,
};
