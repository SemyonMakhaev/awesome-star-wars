import { createSlice } from '@reduxjs/toolkit';

import { apiActions } from './actions';

const initialState = {
  // people
  isPeopleFetching: false,
  lastFetchedPage: 0,
  totalCount: 0,
  // character
  isCharacterFetching: false,
};

export default createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(apiActions.setIsPeopleFetching, (store, action) => {
      store.isPeopleFetching = action.payload;
    });

    builder.addCase(apiActions.setLastFetchedPage, (store, action) => {
      store.lastFetchedPage = action.payload;
    });

    builder.addCase(apiActions.setTotalCount, (store, action) => {
      store.totalCount = action.payload;
    });

    builder.addCase(apiActions.setIsCharacterFetching, (store, action) => {
      store.isCharacterFetching = action.payload;
    });
  },
});
