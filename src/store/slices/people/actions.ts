import { createAction } from '@reduxjs/toolkit';

import withPayload from 'src/store/helpers/createAction';
import { Character } from 'src/types/character';

const savePeople = createAction('people/savePeople', withPayload<Character[]>());

const saveCharacter = createAction('people/saveCharacter', withPayload<Character>());

export const peopleActions = { savePeople, saveCharacter };
