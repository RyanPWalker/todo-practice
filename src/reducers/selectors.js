import { createSelector } from "reselect";
import deep from "deep-get-set";

export const getGlobalState = createSelector(
  state => deep(state, "global") || {},
  viewStates => viewStates
);
