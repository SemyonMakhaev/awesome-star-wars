import { normalizeCharacter } from 'src/api/adapters';
import { fetchCharacter } from 'src/api/helpers';
import { AppThunkAction } from 'src/store/root';
import { apiActions } from 'src/store/slices/api/actions';
import { apiSelectors } from 'src/store/slices/api/selectors';
import { peopleActions } from 'src/store/slices/people/actions';
import { peopleSelectors } from 'src/store/slices/people/selectors';

export const fetchCharacterThunk
  = (id: string): AppThunkAction<void> =>
    async (dispatch, getState) => {
      const state = getState();

      const storedCharacter = peopleSelectors.selectCharacter(id)(state);

      const isCharacterFetching = apiSelectors.selectIsCharacterFetching(state);

      if (storedCharacter || isCharacterFetching) {
        return;
      }

      dispatch(apiActions.setIsCharacterFetching(true));

      const response = await fetchCharacter(id);

      dispatch(apiActions.setIsCharacterFetching(false));

      if (!response) {
        return;
      }

      const character = normalizeCharacter(response);

      if (!character) {
        return;
      }

      dispatch(peopleActions.saveCharacter(character));
    };
