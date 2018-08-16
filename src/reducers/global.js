import { SET_TODO, DELETE_TODO, SET_DONE, DELETE_DONE } from "../actions/todo";

import { createSelector } from "reselect";
import deep from "deep-get-set";
import { getGlobalState } from "./selectors";

const initialState = {
  todoArr: [],
  doneArr: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TODO: {
      return {
        ...state,
        todoArr: [...state.todoArr, action.payload]
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todoArr: state.todoArr.filter((val, i) => i !== action.payload)
      };
    }
    case SET_DONE: {
      return {
        ...state,
        doneArr: [...state.doneArr, action.payload]
      };
    }
    case DELETE_DONE: {
      return {
        ...state,
        doneArr: state.doneArr.filter((val, i) => i !== action.payload)
      };
    }
    default:
      return state;
  }
}

export const getTodoArr = createSelector(
  state => getGlobalState(state),
  viewState => deep(viewState, "todoArr") || ["item1", "item2", "item3"]
);

export const getDoneArr = createSelector(
  state => getGlobalState(state),
  viewState => deep(viewState, "doneArr") || []
);
