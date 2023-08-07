import { createAction } from '@reduxjs/toolkit';

import withPayload from 'src/store/helpers/createAction';
import { Character } from 'src/types/character';

const savePeople = createAction('people/savePeople', withPayload<Character[]>());

const saveCharacter = createAction('people/saveCharacter', withPayload<Character>());

interface PatchCharacterActionPayload extends Partial<Omit<Character, 'id'>> {
  id: string;
}

const patchCharacter = createAction('people/patchCharacter', withPayload<PatchCharacterActionPayload>());

export const peopleActions = { savePeople, saveCharacter, patchCharacter };
