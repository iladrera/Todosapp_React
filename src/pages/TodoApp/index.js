import React, { Component } from "react";
import TodoApp from "./presentational";

export default class TodoAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTasks: [],
      showFilters: "all"
    };
  }

  _addTodo = newTodoTask => {
    // cada vez que me devuelve un Todo, lo añado al array de todoTasks
    this.setState({
      todoTasks: [
        ...this.state.todoTasks,
        {
          title: newTodoTask,
          completed: false
        }
      ]
    });
  };

  _removeTodo = i => {
    this.setState({
      // actualizo state.todoTasks con un nuevo array sin el elemento eliminado
      todoTasks: this.state.todoTasks.filter((item, j) => i !== j)
    });
  };

  _toggleCompleted = i => {
    this.setState({
      todoTasks: this.state.todoTasks.map((item, j) => {
        if (j === i) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      })
    });
  };

  _clearCompleted = () => {
    this.setState({
      // acualizo (creo un nuevo array) con los items no completos
      todoTasks: this.state.todoTasks.filter(item => !item.completed)
    });
  };

  _toggleShowFilters = filter => {
    this.setState({
      showFilters: filter
    });
  };

  render() {
    return (
      <div>
        <TodoApp
          todoTasks={this.state.todoTasks}
          addTodo={this._addTodo}
          removeTodo={this._removeTodo}
          toggleCompleted={this._toggleCompleted}
          clearCompleted={this._clearCompleted}
          showFilters={this.state.showFilters}
          toggleShowFilters={this._toggleShowFilters}
        />
      </div>
    );
  }
}
