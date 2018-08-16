import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../axios";
import { setTodo, deleteTodo, setDone, deleteDone } from "../actions/todo";
import { getTodoArr, getDoneArr } from "../reducers/global";
import "../App.css";

class List extends Component {
  componentDidMount = () => {
    axios().then(val => {
      for (let i = 0; i < val.length; i++) {
        this.props.setTodo(val[i]);
      }
    });
  };

  handleSubmit = () => {
    this.props.setTodo(this.myInput.value);
  };

  handleEnter = e => {
    if (e.charCode === 13) {
      this.handleSubmit();
      e.target.value = "";
    }
  };

  handleDeleteTodo = (i, val) => () => {
    this.props.deleteTodo(i);
    this.props.setDone(val);
  };

  handleDeleteDone = i => () => {
    this.props.deleteDone(i);
  };

  render() {
    return (
      <div className="App">
        <h1>Enter a todo item to get started.</h1>
        <input
          type="text"
          ref={ref => {
            this.myInput = ref;
          }}
          placeholder="Todo item..."
          onKeyPress={this.handleEnter}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          <div style={{ flex: "1 100px" }}>
            {this.props.todoArr.map((val, i) => (
              <div key={i} onClick={this.handleDeleteTodo(i, val)}>
                {val}
              </div>
            ))}
          </div>
          <div style={{ flex: "2 100px" }}>
            {this.props.doneArr.map((val, i) => (
              <div key={i} onClick={this.handleDeleteDone(i)}>
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoArr: getTodoArr(state),
    doneArr: getDoneArr(state)
  };
};

export default connect(
  mapStateToProps,
  { setTodo, deleteTodo, setDone, deleteDone }
)(List);
