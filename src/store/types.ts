import { apiActions } from 'src/store/slices/api/actions';
import { peopleActions } from 'src/store/slices/people/actions';

type AnyActionCreator = (payload: any) => {
  type: string;
  payload: unknown;
};

type AnySliceActionCreators = {
  [K: string]: AnyActionCreator;
};

type SliceActionsMap<AC extends AnySliceActionCreators> = {
  [K in keyof AC]: ReturnType<AC[K]>;
};

type SliceActionsUnion<
  AC extends AnySliceActionCreators,
  M extends SliceActionsMap<AC> = SliceActionsMap<AC>,
  K extends keyof M = keyof M,
> = M[K];

export type AppActions = SliceActionsUnion<typeof apiActions> | SliceActionsUnion<typeof peopleActions>;

export type ExtraThunkArg = Record<string, unknown>;
