import React, { Component } from "react";
// import { TodoList } from "./presentational";
import TodoList from "./presentational";

export default class TodoListContainer extends Component {
  render() {
    return (
      <TodoList
        todoList={this.props.todoList}
        todoRemove={this.props.todoRemove}
        toggleCompleted={this.props.toggleCompleted}
        showFilters={this.props.showFilters}
      />
    );
  }
}
