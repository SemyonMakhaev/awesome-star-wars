import { useCallback, useLayoutEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { apiSelectors } from 'src/store/slices/api/selectors';
import { peopleSelectors } from 'src/store/slices/people/selectors';
import { fetchPeopleThunk } from 'src/store/thunks/fetchPeople';
import { Character } from 'src/types/character';

function getPeopleHash(people: Character[]) {
  return people.reduce((acc, character) => `${acc}-${character.id}`, '');
}

export function usePeople() {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const filter = useMemo(() => searchParams.get('name'), [searchParams]);

  const people = useAppSelector(
    peopleSelectors.selectPeople(filter ?? ''),
    (thisPeople, thatPeople) => getPeopleHash(thisPeople) === getPeopleHash(thatPeople),
  );
  const isFetching = useAppSelector(apiSelectors.selectIsPeopleFetching);
  const order = useAppSelector(peopleSelectors.selectOrder);
  const hasMore = useAppSelector(apiSelectors.selectHasAvailablePeople(order));

  const fetchPeople = useCallback(() => {
    dispatch(fetchPeopleThunk());
  }, [dispatch]);

  useLayoutEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  return { people, isFetching, hasMore, fetchPeople };
}
