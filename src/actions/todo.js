// Types
export const SET_TODO = "SET_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_DONE = "SET_DONE";
export const DELETE_DONE = "DELETE_DONE";

// Actions
export const setTodo = todo => ({
  type: SET_TODO,
  payload: todo
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  payload: todo
});

export const setDone = done => ({
  type: SET_DONE,
  payload: done
});

export const deleteDone = done => ({
  type: DELETE_DONE,
  payload: done
});
