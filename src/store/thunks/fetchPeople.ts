import { normalizeCharacter } from 'src/api/adapters';
import { fetchPeople } from 'src/api/helpers';
import { AppThunkAction } from 'src/store/root';
import { apiActions } from 'src/store/slices/api/actions';
import { apiSelectors } from 'src/store/slices/api/selectors';
import { peopleActions } from 'src/store/slices/people/actions';
import { peopleSelectors } from 'src/store/slices/people/selectors';
import { Character } from 'src/types/character';

export const fetchPeopleThunk = (): AppThunkAction<void> => async (dispatch, getState) => {
  const state = getState();

  const order = peopleSelectors.selectOrder(state);

  const hasAvailablePeople = apiSelectors.selectHasAvailablePeople(order)(state);
  const isPeopleFetching = apiSelectors.selectIsPeopleFetching(state);

  if (!hasAvailablePeople || isPeopleFetching) {
    return;
  }

  const lastFetchedPage = apiSelectors.selectLastFetchedPage(state);

  const page = lastFetchedPage + 1;

  dispatch(apiActions.setIsPeopleFetching(true));

  const response = await fetchPeople(page);

  dispatch(apiActions.setIsPeopleFetching(false));

  if (!response) {
    dispatch(peopleActions.savePeople([]));
    return;
  }

  dispatch(apiActions.setLastFetchedPage(page));
  dispatch(apiActions.setTotalCount(response.count));

  const people = response.results.map(normalizeCharacter).filter(Boolean) as Character[];

  dispatch(peopleActions.savePeople(people));
};
