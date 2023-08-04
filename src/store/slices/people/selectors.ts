import { AppState } from 'src/store/root';
import { Character } from 'src/types/character';

import peopleSlice from './slice';

const selectSlice = (state: AppState) => state[peopleSlice.name];

const selectOrder = (state: AppState) => selectSlice(state).order;

const selectPeople = (filter: string) => (state: AppState) => {
  const slice = selectSlice(state);

  const items = slice.order.map(id => slice.charactersMap[id]);

  if (!filter) {
    return items;
  }

  const lowerCaseFilter = filter.toLowerCase();

  return items.filter(item => item.name.toLowerCase().includes(lowerCaseFilter));
};

const selectCharacter
  = (id: string) =>
    (state: AppState): Character | undefined =>
      selectSlice(state).charactersMap[id];

export const peopleSelectors = { selectOrder, selectPeople, selectCharacter };
