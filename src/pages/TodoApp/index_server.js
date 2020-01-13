import React, { Component } from "react";
import TodoApp from "./presentational";

// importo axios para traer los datos del servidor
import axios from "axios";

export default class TodoAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTasks: [],
      showFilters: "all"
    };
  }

  // funcion para recuperar las Tasks del servidor
  _getTasks() {
    axios
      .get("http://localhost:3000/getTodoTasks/")
      .then(response => {
        this.setState({
          todoTasks: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // cuando el componente esta montado recupero los datos del servidor
  componentDidMount() {
    this._getTasks();
  }

  _addTodo = newTodoTask => {
    // cada vez que me devuelve un newTodoTask
    // la añado al servidor mediante un metodo Post
    let postObject = { params: { task: newTodoTask } };
    axios
      .post("http://localhost:3000/addTodoTasks/", null, postObject)
      .then(response => {
        this._getTasks(); // devuelvo los nuevos datos
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  _removeTodo = i => {
    let postObject = { params: { id: i } };
    axios
      .post("http://localhost:3000/removeTodoTasks/", null, postObject)
      .then(response => {
        this._getTasks(); // devuelvo los nuevos datos
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  _toggleCompleted = i => {
    let postObject = { params: { id: i } };
    axios
      .post("http://localhost:3000/toggleCompletedTasks/", null, postObject)
      .then(response => {
        this._getTasks(); // devuelvo los nuevos datos
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  _clearCompleted = i => {
    axios
      .post("http://localhost:3000/clearCompleteTasks/", null)
      .then(response => {
        this._getTasks(); // devuelvo los nuevos datos
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // function > actualiza el State showFilters con el filtro Pulsado
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
