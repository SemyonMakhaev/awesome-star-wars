import { AppState } from 'src/store/root';

import apiSlice from './slice';

const selectSlice = (state: AppState) => state[apiSlice.name];

/** People */

const selectHasAvailablePeople = (order: string[]) => (state: AppState) =>
  order.length === 0 || selectSlice(state).totalCount > order.length;

const selectIsPeopleFetching = (state: AppState) => selectSlice(state).isPeopleFetching;

const selectLastFetchedPage = (state: AppState) => selectSlice(state).lastFetchedPage;

/** Character */

const selectIsCharacterFetching = (state: AppState) => selectSlice(state).isCharacterFetching;

export const apiSelectors = {
  selectHasAvailablePeople,
  selectIsPeopleFetching,
  selectLastFetchedPage,
  selectIsCharacterFetching,
};
