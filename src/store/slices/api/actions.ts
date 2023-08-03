import { createAction } from '@reduxjs/toolkit';

import withPayload from 'src/store/helpers/createAction';

/** People */

const setIsPeopleFetching = createAction('api/setIsPeopleFetching', withPayload<boolean>());

const setLastFetchedPage = createAction('api/setLastFetchedPage', withPayload<number>());

const setTotalCount = createAction('api/setTotalCount', withPayload<number>());

/** Character */

const setIsCharacterFetching = createAction('api/setIsCharacterFetching', withPayload<boolean>());

export const apiActions = { setIsPeopleFetching, setLastFetchedPage, setTotalCount, setIsCharacterFetching };
