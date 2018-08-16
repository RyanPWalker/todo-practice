import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import logo from "./logo.svg";
import List from "./components/List";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List />
      </div>
    );
  }
}

// export default connect(state => ({ todo: state.todo }))(App);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
