import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { apiSelectors } from 'src/store/slices/api/selectors';
import { peopleSelectors } from 'src/store/slices/people/selectors';
import { fetchCharacterThunk } from 'src/store/thunks/fetchCharacter';

export function useCharacter(id: string) {
  const dispatch = useAppDispatch();

  const character = useAppSelector(peopleSelectors.selectCharacter(id));
  const isFetching = useAppSelector(apiSelectors.selectIsCharacterFetching);

  useLayoutEffect(() => {
    if (!character) {
      dispatch(fetchCharacterThunk(id));
    }
  }, [id, character, dispatch]);

  return { character, isFetching };
}
