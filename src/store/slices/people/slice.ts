import { createSlice } from '@reduxjs/toolkit';
import { Character } from 'src/types/character';

import { peopleActions } from './actions';

const initialState = {
  charactersMap: {} as Record<string, Character>,
  order: [] as string[],
};

export default createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(peopleActions.savePeople, (store, action) => {
      action.payload.forEach(character => {
        if (!store.order.includes(character.id)) {
          store.order.push(character.id);
        }

        store.charactersMap[character.id] = character;
      });
    });

    builder.addCase(peopleActions.saveCharacter, (store, action) => {
      store.charactersMap[action.payload.id] = action.payload;
    });
  },
});
