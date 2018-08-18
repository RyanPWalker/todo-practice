import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import * as actions from "./actions/todo";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: actions.SET_TODO,
      payload
    };
    expect(actions.setTodo(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to delete a todo", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: actions.DELETE_TODO,
      payload
    };
    expect(actions.deleteTodo(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add a done item", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: actions.SET_DONE,
      payload
    };
    expect(actions.setDone(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to delete a done item", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: actions.DELETE_DONE,
      payload
    };
    expect(actions.deleteDone(payload)).toEqual(expectedAction);
  });
});
